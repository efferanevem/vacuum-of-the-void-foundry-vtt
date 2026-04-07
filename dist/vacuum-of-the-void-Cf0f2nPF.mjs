var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (I, s, e) => s in I ? Hs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var Q = (I, s, e) => Vs(I, typeof s != "symbol" ? s + "" : s, e);
var H = (I, s, e) => Gs(Bs(I), e, s);
const { HTMLField: Ws, NumberField: A, SchemaField: B, StringField: O, BooleanField: ae, ArrayField: gt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new B({
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
      resources: new B({
        health: new B({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new B({
          head: new B({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ae({ required: !1, initial: !1 }),
            box2: new ae({ required: !1, initial: !1 }),
            box3: new ae({ required: !1, initial: !1 })
          }),
          torso: new B({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ae({ required: !1, initial: !1 }),
            box2: new ae({ required: !1, initial: !1 }),
            box3: new ae({ required: !1, initial: !1 })
          }),
          arms: new B({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ae({ required: !1, initial: !1 }),
            box2: new ae({ required: !1, initial: !1 }),
            box3: new ae({ required: !1, initial: !1 })
          }),
          legs: new B({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ae({ required: !1, initial: !1 }),
            box2: new ae({ required: !1, initial: !1 }),
            box3: new ae({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new B({
          head: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new B({
          head: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new B({
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
      combat: new B({
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
        initiativeRanges: new gt(
          new B({
            min: new A({ required: !1, integer: !0, initial: 0 }),
            max: new A({ required: !1, integer: !0, initial: 0 }),
            kp: new A({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new B({
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
            active: new ae({ required: !1, initial: !1 })
          }),
          slot2: new B({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new ae({ required: !1, initial: !1 })
          }),
          slot3: new B({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new ae({ required: !1, initial: !1 })
          })
        }),
        equipment: new O({ required: !1, blank: !0, initial: "" }),
        armor: new gt(
          new B({
            name: new O({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new O({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new O({ required: !1, blank: !0, initial: "" }),
            level: new O({ required: !1, blank: !0, initial: "" }),
            other: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new gt(
          new B({
            name: new O({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new gt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new B({
          items: new gt(
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
const { BooleanField: Zs, NumberField: gi, StringField: Ne } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Zs({ required: !1, initial: !1 }),
      type: new Ne({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ne({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ne({ required: !1, blank: !0, initial: "" }),
      damage: new Ne({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ne({ required: !1, blank: !0, initial: "" }),
      special: new Ne({ required: !1, blank: !0, initial: "" }),
      quantity: new Ne({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ne({ required: !1, blank: !0, initial: "grenadeUse" })
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
const { StringField: ri } = foundry.data.fields;
class ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ri({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: $t, StringField: Ye, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
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
          new Ye({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new Ye({ required: !1, blank: !0, initial: "" })
    };
  }
}
function xt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const p = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let o = i;
    for (const c of a) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        p(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof c.faces == "number" ? c.faces : void 0, y = Array.isArray(c.results) ? c.results : null;
      if (!r || !y || r === 8 || r !== 6) continue;
      const h = !n && o >= 0 && (c.number === 3 || c.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of y) {
        if (!v || v.discarded || v.hidden) continue;
        const S = Number(v.result ?? v);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  p(I.terms, 1);
  const l = s.filter((a) => a === 6).length, d = s.filter((a) => a === 1).length, u = e.filter((a) => a === 6).length, m = t.filter((a) => a === 6).length, f = l + u, g = d + m;
  return f > 0 && f === g ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
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
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    let d = { scrollState: {}, focus: null };
    if (p) {
      d.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = l.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, f = this.form ?? this.element, g = d.scrollState, a = d.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(m, g), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(a.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = a.selectionStart ?? 0, h.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), u;
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
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const d = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const d = String(((p = l.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const d = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, g, a, i, o, c, r, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : g.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, p = J._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const l = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let d;
    p === 1 ? d = -6 : p === 2 ? d = -3 : d = l, d += J._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((r = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : r.speed) ?? 0) || 0, m = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return u + m + (Number.isFinite(d) ? d : 0);
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
    var g, a, i, o, c, r, y, h, v, S, T, D;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, l = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, d = J._healthStatusFromRatio(l, p), u = Number(((D = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let m;
    d === 0 ? m = 0 : d === 1 ? m = -6 : d === 2 ? m = -3 : m = u;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var m, f, g, a, i, o, c, r, y, h, v, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, p = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, l = (h = (y = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, d = (T = (S = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + p + l + d;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(l == null ? void 0 : l.value) || 0, m = Number(d == null ? void 0 : d.value) || 0, f = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(u + m + f);
  }
  _writeTotalSpeed(s = null) {
    var c, r, y, h, v, S, T, D;
    const e = s ?? this.form ?? this.element, t = (C) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, C)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${C}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), d = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (r = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : r.has) != null && y.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, m = ((T = (S = u.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((D = u.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (J._healthStatusFromRatio(f, m) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(l == null ? void 0 : l.value) || 0, i = Number(d == null ? void 0 : d.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(a + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, d, u, m;
    const e = J.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((u = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : u.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return J._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, u, m, f;
    const t = J.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, p = ((m = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : m.value) ?? 0, l = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return J._healthStatusFromRatio(l, p);
  }
  async _prepareContext(s) {
    var st, it, nt, rt, at, ot, ct, lt, ut, xe, dt, mt, Re, k, x, R, G, de, te, be, ge, me, _e, Me, je, Ot, Ct, qt, Lt, pt, We, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((nt = (it = (st = this.actor.system) == null ? void 0 : st.resources) == null ? void 0 : it.stress) == null ? void 0 : nt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, l = n.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of d) {
      const N = ((rt = p[b]) == null ? void 0 : rt.value) ?? 0, L = l[b] ?? 0;
      e.computedHealthStatus[b] = J._healthStatusFromRatio(L, N);
    }
    const u = (Number(l.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = u || f >= 2;
    const g = e.computedHealthStatus.legs ?? 3, a = Number(((ot = (at = this.actor.system) == null ? void 0 : at.combat) == null ? void 0 : ot.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = a;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((lt = (ct = this.actor.system) == null ? void 0 : ct.combat) == null ? void 0 : lt.givenProtection) ?? 0) || 0, r = (dt = (xe = (ut = this.actor) == null ? void 0 : ut.statuses) == null ? void 0 : xe.has) != null && dt.call(xe, "lookaround") ? 1 : 0, y = (k = (Re = (mt = this.actor) == null ? void 0 : mt.statuses) == null ? void 0 : Re.has) != null && k.call(Re, "halfcover") ? 3 : 0, h = (G = (R = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : R.has) != null && G.call(R, "threequarteredcover") ? 6 : 0, v = c + this._getTotalArmorProtectionBonus() + r + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const S = ((de = e.system) == null ? void 0 : de.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let D = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    g === 0 && (D = 0), (ge = (be = (te = this.actor) == null ? void 0 : te.statuses) == null ? void 0 : be.has) != null && ge.call(be, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (me = e.system) == null ? void 0 : me.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const C = J.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(C)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), E = j ? j.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], w = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, F = w && typeof w == "object" && !Array.isArray(w) ? w : {}, M = (((je = F.slot1) == null ? void 0 : je.itemId) ?? "").trim(), z = (((Ot = F.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Y = (((Ct = F.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), K = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, P = typeof N.sort == "number" ? N.sort : 0;
      return L - P;
    }).map((b) => {
      var Oe, ze, Ue, qe, Le, ft;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let P = 0, U = "", ne = null;
      for (let Je = 0; Je < E.length; Je++) {
        const yt = E[Je];
        if ((((Oe = _[yt]) == null ? void 0 : Oe.itemId) ?? "") === b.id) {
          P = Je + 1, U = ((ze = _[yt]) == null ? void 0 : ze.bonus) ?? "", ne = yt;
          break;
        }
      }
      let se = null;
      L && (M === b.id ? se = "slot1" : z === b.id ? se = "slot2" : Y === b.id && (se = "slot3"));
      const Ke = N && ((Ue = b.system) != null && Ue.damage) ? b.system.damage : "", pe = N && typeof ((qe = b.system) == null ? void 0 : qe.range) == "string" ? (b.system.range || "").trim() : "", he = ne ? Number((Le = _[ne]) == null ? void 0 : Le.bonus) || 0 : "";
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
        damage: Ke,
        rangeStr: pe,
        slotBonusNum: he,
        quantity: Number(((ft = b.system) == null ? void 0 : ft.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = K;
    const V = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((b) => b.type === "Fegyver"), Z = V.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = Z;
    const re = "— Nincs fegyver —", ue = E.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!V.find((U) => U.id === L) : !1;
    });
    e.weaponSlots = ue.map((b, N) => {
      const L = _[b] ?? {}, P = (L.itemId ?? "").trim(), U = Z.find((he) => he.id === P), ne = V.find((he) => he.id === P), se = (ne == null ? void 0 : ne.system) ?? {}, Ke = se.size === "thrown", pe = (typeof se.range == "string" ? (se.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: P,
        slotNum: N + 1,
        displayName: (U == null ? void 0 : U.name) || L.name || re,
        img: (U == null ? void 0 : U.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: Ke,
        rangeStr: pe
      };
    });
    const X = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ie = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((b) => {
      var ls, us, ds;
      const N = b.id;
      let L = null, P = {};
      for (const At of E)
        if ((((ls = _[At]) == null ? void 0 : ls.itemId) ?? "").trim() === N) {
          L = At, P = _[At] ?? {};
          break;
        }
      const U = !!L, ne = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : U, se = (b == null ? void 0 : b.system) ?? {}, Ke = typeof se.range == "string" ? (se.range || "").trim() : "", pe = se.type ?? "", he = (X[pe] ?? pe) || "—", Oe = se.size ?? "", ze = (ie[Oe] ?? Oe) || "", Ue = [he, ze].filter(Boolean).join(", ") || he || "—", qe = pe === "projectile" || Oe === "thrown", Le = se.quantity, ft = Le != null ? String(Le).trim() : "1", Je = String(P.bonus ?? "").trim(), yt = String(se.bonus ?? "").trim(), Us = Je || yt || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? re,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: P.damage ?? se.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: he,
        typeAndSize: Ue,
        quantity: ft,
        quantityDisplay: qe ? ft : "—",
        isProjectile: qe,
        equipped: ne,
        special: (se.special ?? "").trim() || "—"
      };
    });
    const ee = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = ee.map((b) => {
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
    const Fe = (((pt = this.actor.items) == null ? void 0 : pt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = Fe.map((b) => {
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
    const He = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = He.map((b) => {
      const L = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), P = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: P
      };
    });
    const bt = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), le = bt.map((b) => ({ id: b.id, name: b.name, img: b.img })), Xe = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (b) => {
      var L, P, U;
      const N = [];
      return b !== 1 && N.push((((L = F.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((P = F.slot2) == null ? void 0 : P.itemId) ?? "").trim()), b !== 3 && N.push((((U = F.slot3) == null ? void 0 : U.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = le.filter((b) => !Be(1).includes(b.id)), e.microchipItemsSlot2 = le.filter((b) => !Be(2).includes(b.id)), e.microchipItemsSlot3 = le.filter((b) => !Be(3).includes(b.id)), e.microchipSlots = De.map((b) => {
      const N = F[b] ?? {}, L = (N.itemId ?? "").trim(), P = bt.find((U) => U.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || Xe,
        img: (P == null ? void 0 : P.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = F[N] ?? {}, P = (L.itemId ?? "").trim(), U = le.find((ne) => ne.id === P);
      e[`microchip${b}ItemId`] = P, e[`microchip${b}DisplayName`] = (U == null ? void 0 : U.name) || L.name || Xe, e[`microchip${b}Img`] = (U == null ? void 0 : U.img) || "";
    }), e.microchipsTable = bt.map((b) => {
      var Oe, ze, Ue, qe;
      const N = b.id;
      let L = null;
      for (const Le of De)
        if ((((Oe = F[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === N) {
          L = Le;
          break;
        }
      const P = !!L, U = ((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.abilityType) ?? "", ne = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", se = U === "active", Ke = Number((Ue = b == null ? void 0 : b.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, pe = (((qe = b == null ? void 0 : b.system) == null ? void 0 : qe.description) ?? "").trim(), he = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ne,
        description: he,
        kp: Ke,
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
    }), Ge = new Map(Wt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Qe = (b) => {
      const N = kt[b] ?? {}, L = (N.itemId ?? "").trim(), P = L ? Ge.get(L) : null, U = (P == null ? void 0 : P.description) ?? "", ne = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || wt,
        img: (P == null ? void 0 : P.img) || "",
        description: U,
        kp: ne
      };
    };
    e.abilityFajiSlot = Qe("faji"), e.abilityHatterSlot = Qe("hatter");
    const Ze = (b) => {
      const N = kt[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, et = (b) => b.map((N) => {
      const L = Ge.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = et(Ze("passive")), e.abilityActiveList = et(Ze("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, ye = typeof Ae == "number" ? Ae : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ee = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Pe = Array.isArray(Ee) ? Ee.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ce = (Pe.length > 0 ? Pe : St).slice().sort((b, N) => b.min - N.min), $e = Pe.map((b) => b.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Pe.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let tt = 0;
    if (typeof ye == "number" && ye >= 0 && Ce.length > 0) {
      const b = Ce[0], N = Ce[Ce.length - 1];
      let L = null;
      ye <= b.max ? L = b : ye >= N.min ? L = N : L = Ce.find((P) => ye >= P.min && ye <= P.max), L && (tt = L.kp);
    }
    e.kpDots = Ve.map((b, N) => {
      const L = N + 1, P = !!Number(It[b]), U = L <= tt;
      return { index: L, used: P, usable: U };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var g, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-B5VkZiY5.mjs");
      r(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let c = (o.dataset.itemId ?? "").trim();
      if (!c) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        c = (((((y = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : y.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((h = o.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-B5VkZiY5.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, c = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6) return;
      const r = `system.resources.kpDot${c}`, y = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${c}`]);
      await this.actor.update({ [r]: y ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const o = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const c = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
    const l = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', l), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const o = ((h = (y = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : y.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const o = i.currentTarget, c = o.dataset.skill, r = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: y } = await import("./roll-sheet-B5VkZiY5.mjs");
      y(this.actor, c, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, D, C, _, q, j;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), r = c == null ? void 0 : c.dataset.slot;
      if (!r) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, h)) ?? ((q = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : q.call(_, (E) => E.id === h));
      (j = v == null ? void 0 : v.sheet) == null || j.render(!0);
    });
    const d = (i, o) => {
      var y;
      const c = i.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (y = r.sheet) == null || y.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r) return;
      let y = Number(o.value);
      (!Number.isFinite(y) || y < 0) && (y = 0), await r.update({ "system.quantity": y });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor, y = r.items.get(c);
      if (!y) return;
      const h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, S = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = v[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var C, _;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], T = S.find((q) => {
        var j;
        return (((j = y[q]) == null ? void 0 : j.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = S.find((E) => {
          var w;
          return !((w = y[E]) != null && w.itemId);
        });
        const j = new Set(S);
        if (!q) {
          const E = v.find((w) => !j.has(w));
          if (!E) return;
          q = E, S.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${q}.damage`]: ((C = r == null ? void 0 : r.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = r == null ? void 0 : r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const q = S.filter((j) => j !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), y = r == null ? void 0 : r.dataset.slot;
      if (!y) return;
      const h = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((q = o.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (o.dataset.itemImg ?? "").trim(), T = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let D = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", r == null || r.insertBefore(D, T)), D.src = S, D.style.display = "") : D && D.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const C = h ? this.actor.items.get(h) : null, _ = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      h && (_[`system.gear.microchips.${y}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, S;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "MikroChip") return;
      const r = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = r[T]) == null ? void 0 : D.itemId) ?? "").trim() === o;
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
      o.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, c)), o.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, c));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, c)), o.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, c)), o.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
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
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[o]) == null ? void 0 : v.items) ? r[o].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var y;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      (y = r == null ? void 0 : r.sheet) == null || y.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(c) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = (o.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var C, _;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], T = S.find((q) => {
        var j;
        return (((j = y[q]) == null ? void 0 : j.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = S.find((E) => {
          var w;
          return !((w = y[E]) != null && w.itemId);
        });
        const j = new Set(S);
        if (!q) {
          const E = v.find((w) => !j.has(w));
          if (!E) return;
          q = E, S.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: r.name ?? "",
          [`system.weapons.${q}.damage`]: ((C = r.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const q = S.filter((j) => j !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor, y = r.items.get(c), h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, S = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = v[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
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
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Targy") return;
      const y = (o.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const u = this, m = (i) => {
      var r, y, h, v;
      if (!i) return;
      const o = u._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((y = (r = o.system) == null ? void 0 : r.resources) == null ? void 0 : y.currentHealth) != null || ((v = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(o).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var o, c, r;
      return i && (((c = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || u.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const r = o.form;
      if (!f(r)) return;
      const y = i.relatedTarget;
      y && (r.contains(y) || u.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), m(r));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, u, m;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      f.type === "checkbox" ? g = f.checked : f.type === "number" ? g = f.value === "" ? 0 : Number(f.value) : g = f.value ?? "", foundry.utils.setProperty(e, f.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const f of l) {
      const g = ((m = n[f]) == null ? void 0 : m.value) ?? 0, a = p[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, J._healthStatusFromRatio(a, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, l, d, u, m, f, g, a, i, o;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let y = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            y = ((p = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : p.id) ?? y;
          }
          const h = (((l = r.system) == null ? void 0 : l.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const S = h === "active" ? "active" : "passive", T = Array.isArray((d = v[S]) == null ? void 0 : d.items) ? v[S].items.slice() : Array.isArray(v[S]) ? v[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const y = this.actor, h = ((m = r.parent) == null ? void 0 : m.id) !== y.id;
          let v = r.id;
          if (h) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (h) {
            const S = ((g = y.system) == null ? void 0 : g.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = T ? T.split(/\s*,\s*/).filter((q) => D.includes(q)) : [], _ = C.filter((q) => {
              var j;
              return (((j = S[q]) == null ? void 0 : j.itemId) ?? "").trim() === v;
            });
            if (_.length > 0) {
              const j = {
                "system.weapons.slotOrder": C.filter((E) => !_.includes(E)).join(",")
              };
              for (const E of _)
                j[`system.weapons.${E}.itemId`] = "", j[`system.weapons.${E}.name`] = "", j[`system.weapons.${E}.damage`] = "", j[`system.weapons.${E}.bonus`] = "";
              await y.update(j);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const y = this.actor;
          if (((a = r.parent) == null ? void 0 : a.id) !== y.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const y = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const y = this.actor;
          ((o = r.parent) == null ? void 0 : o.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, l, d;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, u, m, f, g, a;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
      [`system.weapons.${e}.damage`]: ((g = p.system) == null ? void 0 : g.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = p.system) == null ? void 0 : a.bonus) ?? ""
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
    var m, f;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((g, a) => {
      const i = typeof g.sort == "number" ? g.sort : 0, o = typeof a.sort == "number" ? a.sort : 0;
      return i - o;
    }).map((g) => g.id), l = p.indexOf(t), d = p.indexOf(e);
    if (l === -1 || d === -1) return;
    p.splice(l, 1), p.splice(d, 0, t);
    const u = p.map((g, a) => ({
      _id: g,
      sort: (a + 1) * 10
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
    var u, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const a = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, g, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, p = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
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
    var l, d, u;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((u = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : u.id) ?? p;
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
    var u, m, f, g;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : f.id) ?? p;
    }
    const l = this.actor.system.abilities ?? {}, d = Array.isArray((g = l[e]) == null ? void 0 : g.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    d.includes(p) || d.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, l, d;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, u, m, f, g;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    ((f = p.parent) == null ? void 0 : f.id) !== this.actor.id && (l = ((g = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : g.id) ?? l), await this.actor.update({
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
    const u = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, m = new Roll(u);
    await m.evaluate({ async: !0 });
    const { resultType: f, label: g } = xt(m), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: g } },
      rollMode: a
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
    var S, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((D) => D.type === "Fegyver");
    let l = null;
    t.itemId && (l = p.find((D) => D.id === t.itemId) ?? null);
    const d = l && l.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, m = ((S = l == null ? void 0 : l.system) == null ? void 0 : S.type) || "kinetic", f = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), g = f && n[f] !== void 0 ? f : m === "explosive" ? "grenadeUse" : "firearms", a = Number(n[g] || 0) || 0, i = u + a, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(c);
    await r.evaluate({ async: !0 });
    const { resultType: y, label: h } = xt(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, m, f, g, a, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (u = t.items).get) == null ? void 0 : m.call(u, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
    await l.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
Q(J, "PARTS", foundry.utils.mergeObject(
  H(J, J, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
Q(J, "BODY_PART_BY_SKILL", {
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
let ht = J;
function di(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ss, Ts, Ds, _s;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const l = await super.render(s, e), d = this.element, u = this.form ?? this.element, m = p.scrollState, f = p.focus, g = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", a = () => {
      var i, o;
      if (this._applyScrollState(d, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((i = u.querySelector) == null ? void 0 : i.call(u, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(d, m);
    };
    return (g || f) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), l;
  }
  async _prepareContext(s) {
    var Qe, Ze, et, It, Ve, Ae, ye, St, Ee, Pe, Ft, Ce, $e, Tt, Dt, tt, _t, st, it, nt, rt, at, ot, ct, lt, ut, xe, dt, mt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Qe = this.actor) == null ? void 0 : Qe.system), e.showDeathSkull = !1, e.sizeForSelect = (((et = (Ze = e.system) == null ? void 0 : Ze.identity) == null ? void 0 : et.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, l = (Ae = (Ve = t == null ? void 0 : t.statuses) == null ? void 0 : Ve.has) != null && Ae.call(Ve, "lookaround") ? 1 : 0, d = (St = (ye = t == null ? void 0 : t.statuses) == null ? void 0 : ye.has) != null && St.call(ye, "halfcover") ? 3 : 0, u = (Pe = (Ee = t == null ? void 0 : t.statuses) == null ? void 0 : Ee.has) != null && Pe.call(Ee, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + l + d + u;
    const m = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (f.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((k) => g.includes(k)) : [], o = m.filter((k) => k.type === "Fegyver"), c = o.map((k) => ({ id: k.id, name: k.name, img: k.img })), r = "— Nincs fegyver —", y = i.length > 0 ? i : g, h = g.filter((k) => !y.includes(k)), v = [...y, ...h], S = v.filter((k) => {
      var R;
      const x = (((R = f[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && o.some((G) => G.id === x);
    });
    e.weaponSlots = S.map((k) => {
      const x = f[k] ?? {}, R = (x.itemId ?? "").trim(), G = c.find((me) => me.id === R), de = o.find((me) => me.id === R), te = (de == null ? void 0 : de.system) ?? {}, be = te.size === "thrown", ge = (typeof te.range == "string" ? (te.range || "").trim() : "") || "—";
      return {
        slotKey: k,
        itemId: R,
        displayName: (G == null ? void 0 : G.name) || x.name || r,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: be,
        rangeStr: ge
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((k) => {
      var pt;
      const x = k.id;
      let R = null, G = {};
      for (const We of v)
        if ((((pt = f[We]) == null ? void 0 : pt.itemId) ?? "").trim() === x) {
          R = We, G = f[We] ?? {};
          break;
        }
      const de = !!R, te = (k == null ? void 0 : k.system) ?? {}, be = typeof te.range == "string" ? (te.range || "").trim() : "", ge = te.type ?? "", me = (T[ge] ?? ge) || "—", _e = te.size ?? "", Me = (D[_e] ?? _e) || "", je = [me, Me].filter(Boolean).join(", ") || me || "—", Ot = ge === "projectile" || _e === "thrown", Ct = te.quantity != null ? String(te.quantity).trim() : "1", qt = String(te.bonus ?? G.bonus ?? "").trim() || "0", Lt = (te.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? r,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: be || "—",
        typeAndSize: je,
        quantity: Ct,
        isProjectile: Ot,
        equipped: de,
        special: (te.special ?? "").trim() || "—"
      };
    });
    const C = m.filter((k) => k.type === "Pancel");
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
    const _ = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], j = m.filter((k) => k.type === "MikroChip");
    e.microchipsTable = j.map((k) => {
      var ge, me, _e, Me;
      const x = k.id;
      let R = null;
      for (const je of q)
        if ((((ge = _[je]) == null ? void 0 : ge.itemId) ?? "").trim() === x) {
          R = je;
          break;
        }
      const G = ((me = k == null ? void 0 : k.system) == null ? void 0 : me.abilityType) ?? "", de = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", te = (((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.description) ?? "").trim(), be = te ? te.length > 60 ? te.slice(0, 57) + "…" : te : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: de,
        description: be,
        kp: Number((Me = k == null ? void 0 : k.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const E = m.filter((k) => k.type === "Targy");
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
    const w = m.filter((k) => k.type === "Egyeb");
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
    const F = (((Dt = e.weaponsTable) == null ? void 0 : Dt.length) ?? 0) > 0 || (((tt = e.armorTable) == null ? void 0 : tt.length) ?? 0) > 0 || (((_t = e.microchipsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((st = e.itemsTable) == null ? void 0 : st.length) ?? 0) > 0 || (((it = e.egyebList) == null ? void 0 : it.length) ?? 0) > 0;
    e.showEquipmentDropZone = !F;
    const M = ((nt = t == null ? void 0 : t.system) == null ? void 0 : nt.abilities) ?? {}, z = m.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, R, G;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((R = k.system) == null ? void 0 : R.kp) ?? 0) || 0,
        kind: (((G = k.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), Y = new Map(z.map((k) => [k.id, k])), W = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = W, e.abilityHatterSlot = W;
    const K = (k) => {
      const x = M[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, V = (k) => (k || []).map((x) => {
      const R = Y.get(x);
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
    const Z = t == null ? void 0 : t.id, re = !!((at = (rt = game.combat) == null ? void 0 : rt.combatants) != null && at.some(
      (k) => {
        var x;
        return (((x = k.actor) == null ? void 0 : x.id) ?? k.actorId) === Z;
      }
    ));
    e.showHarcSection = re;
    const ue = ((ot = e.system) == null ? void 0 : ot.resources) ?? {}, X = (lt = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : lt.initiativeResult, ie = typeof X == "number" ? X : -1, ee = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (xe = (ut = e.system) == null ? void 0 : ut.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], le = (He.length > 0 ? He : ee).slice().sort((k, x) => k.min - x.min), Xe = 3;
    let De = He.length > 0 ? He : [];
    De.length < Xe && (De = [...De, ...Array(Xe - De.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = De.map((k, x) => ({
      ...k,
      isFirst: x === 0,
      isLast: x === De.length - 1
    }));
    let Be = 0;
    if (typeof ie == "number" && ie >= 0 && le.length > 0) {
      const k = le[0], x = le[le.length - 1];
      let R = null;
      ie <= k.max ? R = k : ie >= x.min ? R = x : R = le.find((G) => ie >= G.min && ie <= G.max), R && (Be = R.kp);
    }
    const vt = le.length > 0 ? le[le.length - 1] : null, kt = Math.min(10, vt ? vt.kp : 6), Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, kt)).map((k, x) => {
      const R = x + 1, G = !!Number(ue[k]), de = R <= Be;
      return { index: R, used: G, usable: de };
    }), wt = Math.ceil(Ge.length / 2);
    return e.kpDotsRow1 = Ge.slice(0, wt), e.kpDotsRow2 = Ge.slice(wt), e.canEditInitiative = !!((dt = game.user) != null && dt.isGM), e.showInitiativeResult = typeof X == "number", e.initiativeResult = e.showInitiativeResult ? X : "", e.speedUnitForSelect = ((Re = (mt = e.system) == null ? void 0 : mt.combat) == null ? void 0 : Re.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var m, f, g;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var c, r, y;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((y = (r = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var c, r, y;
      a.preventDefault();
      const i = (r = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (y = o == null ? void 0 : o.sheet) == null || y.render(!0);
    });
    const n = (a) => {
      var c, r;
      const i = (c = a == null ? void 0 : a.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (r = o == null ? void 0 : o.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var r, y, h, v;
      a.preventDefault();
      const i = (y = (r = a.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : y.call(r, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (v = c == null ? void 0 : c.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var r;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-B5VkZiY5.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var c, r, y, h, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (o = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-B5VkZiY5.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var r, y;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const c = !!Number((y = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : y[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var y, h;
      a.preventDefault();
      const i = a.currentTarget, o = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-B5VkZiY5.mjs");
      r(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var o, c;
      a.preventDefault();
      const i = (c = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var c, r;
      a.preventDefault();
      const i = (((r = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var h, v, S, T, D, C;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, o = (T = (S = a.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !o || !this.actor) return;
      const c = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, y = (Array.isArray((C = c[i]) == null ? void 0 : C.items) ? c[i].items.slice() : []).filter((_) => _ !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var o, c;
      if (a.preventDefault(), !a.altKey) return;
      const i = (c = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var h, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, r = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), y = {};
      r && (y[`system.weapons.${r}.itemId`] = "", y[`system.weapons.${r}.name`] = "", y[`system.weapons.${r}.damage`] = "", y[`system.weapons.${r}.bonus`] = ""), Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var o, c;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((c = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var y, h, v, S;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((h = (y = a.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = o[T]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var c, r;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((r = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, p)) == null || g.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", p, (a) => {
      var y, h, v;
      const i = a.currentTarget, o = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const r = c.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", r), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const l = this, d = (a) => {
      if (!a) return;
      const i = l._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && l.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, u = (a) => {
      var i, o, c;
      return a && (((o = (i = l.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || l.id && ((c = a.closest) == null ? void 0 : c.call(a, `#${CSS.escape(l.id)}`)));
    };
    l._votvNpcBlur = (a) => {
      var y;
      const i = a.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = i.form;
      if (!u(c)) return;
      const r = a.relatedTarget;
      r && (c.contains(r) || l.id && ((y = r.closest) != null && y.call(r, `#${CSS.escape(l.id)}`))) || d(c);
    }, document.body.addEventListener("blur", l._votvNpcBlur, !0), l._votvNpcItemHookRegistered || (l._votvNpcItemUpdateHook = (a, i, o) => {
      var c;
      l.actor && ((c = a == null ? void 0 : a.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, l._votvNpcItemDeleteHook = (a, i, o) => {
      var c;
      l.actor && ((c = a == null ? void 0 : a.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, Hooks.on("updateItem", l._votvNpcItemUpdateHook), Hooks.on("deleteItem", l._votvNpcItemDeleteHook), l._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((d) => console.warn("VoidNpcSheet save on preClose failed", d));
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
    let d = null;
    n.itemId && (d = l.find((j) => j.id === n.itemId) ?? null);
    const u = d && d.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, f = ((_ = d == null ? void 0 : d.system) == null ? void 0 : _.type) || "kinetic", g = (((q = d == null ? void 0 : d.system) == null ? void 0 : q.skillKey) ?? "").trim(), a = g && p[g] !== void 0 ? g : f === "explosive" ? "grenadeUse" : "firearms", i = Number(p[a] || 0) || 0, o = m + i, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, y = new Roll(r);
    await y.evaluate({ async: !0 });
    const { resultType: h, label: v } = xt(y), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, m, f, g, a, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (u = t.items).get) == null ? void 0 : m.call(u, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
    await l.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _onDropItem(s, e) {
    var f, g, a, i, o, c, r, y, h, v, S, T, D, C, _, q, j;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((E) => {
      var F;
      if (!E) return null;
      const w = E.uuid ?? E.documentUuid ?? ((F = E.data) == null ? void 0 : F.uuid) ?? (typeof E == "string" ? E : null);
      if (w) return w;
      if (typeof E == "object") {
        for (const M of Object.values(E))
          if (typeof M == "string" && M.includes(".") && M.startsWith("Item.")) return M;
      }
      return null;
    })(e);
    if (!n) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (p.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const l = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      let E = p.id;
      if (((c = p.parent) == null ? void 0 : c.id) !== l.id) {
        const Y = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        E = ((r = (await l.createEmbeddedDocuments("Item", [Y]))[0]) == null ? void 0 : r.id) ?? E;
      }
      const w = (((y = p.system) == null ? void 0 : y.kind) ?? "passive").toString(), F = ((h = l.system) == null ? void 0 : h.abilities) ?? {}, M = w === "active" ? "active" : "passive", z = Array.isArray((v = F[M]) == null ? void 0 : v.items) ? F[M].items.slice() : Array.isArray(F[M]) ? F[M].slice() : [];
      z.includes(E) || z.push(E), await l.update({ [`system.abilities.${M}.items`]: z }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = p.parent) == null ? void 0 : S.id) === l.id) return;
    const d = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (T = (await l.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : T.id;
    if (p.type === "Fegyver" && m) {
      const E = ((D = l.system) == null ? void 0 : D.weapons) ?? {}, w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = (E.slotOrder ?? "").trim(), M = F ? F.split(/\s*,\s*/).filter((W) => w.includes(W)) : [];
      let z = w.find((W) => {
        var K;
        return !(((K = E[W]) == null ? void 0 : K.itemId) ?? "").trim();
      });
      z || (z = w.find((W) => !M.includes(W)) ?? "slot1");
      const Y = M.includes(z) ? M : [...M, z].filter((W) => w.includes(W));
      await l.update({
        "system.weapons.slotOrder": Y.join(","),
        [`system.weapons.${z}.itemId`]: m,
        [`system.weapons.${z}.name`]: p.name ?? "",
        [`system.weapons.${z}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${z}.bonus`]: ((_ = p.system) == null ? void 0 : _.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && m) {
      const E = ((j = (q = l.system) == null ? void 0 : q.gear) == null ? void 0 : j.microchips) ?? {}, F = ["slot1", "slot2", "slot3"].find((M) => {
        var z;
        return !(((z = E[M]) == null ? void 0 : z.itemId) ?? "").trim();
      });
      F && await l.update({
        [`system.gear.microchips.${F}.itemId`]: m,
        [`system.gear.microchips.${F}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, g, a, i, o, c;
    const e = (g = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((c = this.actor) == null ? void 0 : c.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, m, f, g, a, i;
    const e = (m = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const o = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        c > 0 && (p = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: d,
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
Q(oe, "PARTS", foundry.utils.mergeObject(
  H(oe, oe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(oe, oe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = H(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = H(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = H(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = oe;
function mi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Os, Cs, qs, Ls;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    let d = { scrollState: {}, focus: null };
    if (p) {
      d.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = l.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const m = this.element, f = this.form ?? this.element, g = d.scrollState, a = d.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(m, g), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(a.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = a.selectionStart ?? 0, h.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (m) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, m)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${m}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const d = Number(p == null ? void 0 : p.value) || 0, u = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(d + u);
  }
  async _prepareContext(s) {
    var c, r, y, h, v, S, T, D, C, _, q, j, E;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((c = e.system) == null ? void 0 : c.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((y = (r = e.system) == null ? void 0 : r.identity) == null ? void 0 : y.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", d = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((w) => w.type === "Fegyver");
    e.weaponsTable = d.map((w) => {
      const F = (w == null ? void 0 : w.system) ?? {}, M = F.type ?? "", z = (n[M] ?? M) || "—", Y = F.size ?? "", W = (p[Y] ?? Y) || "", K = [z, W].filter(Boolean).join(", ") || z || "—", V = M === "projectile" || Y === "thrown", Z = F.quantity != null ? String(F.quantity).trim() : "1", re = (typeof F.range == "string" ? (F.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? l,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: String(F.bonus ?? "").trim() || "0",
        damage: F.damage ?? "",
        rangeStr: re || "—",
        typeLabel: z,
        typeAndSize: K,
        quantity: Z,
        quantityDisplay: V ? Z : "—",
        isProjectile: V,
        equipped: !1,
        special: (F.special ?? "").trim() || "—"
      };
    });
    const u = (((v = this.actor.items) == null ? void 0 : v.contents) ?? []).filter((w) => w.type === "Pancel");
    e.armorTable = u.map((w) => {
      var z;
      const F = (w == null ? void 0 : w.system) ?? {}, M = !!((z = w.system) != null && z.equipped);
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: mi((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const m = (((S = this.actor.items) == null ? void 0 : S.contents) ?? []).filter((w) => w.type === "MikroChip");
    e.microchipsTable = m.map((w) => {
      var V, Z, re;
      const F = ((V = w == null ? void 0 : w.system) == null ? void 0 : V.abilityType) ?? "", M = F === "active" ? "Aktív" : F === "passive" ? "Passzív" : F || "—", z = F === "active", Y = Number((Z = w == null ? void 0 : w.system) == null ? void 0 : Z.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0, W = (((re = w == null ? void 0 : w.system) == null ? void 0 : re.description) ?? "").trim(), K = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: M,
        description: K,
        kp: Y,
        isActive: z,
        slotKey: "",
        equipped: !1
      };
    });
    const f = (((T = this.actor.items) == null ? void 0 : T.contents) ?? []).filter((w) => w.type === "Targy");
    e.itemsTable = f.map((w) => {
      const F = (w == null ? void 0 : w.system) ?? {}, M = (F.description ?? "").trim(), z = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—", Y = F.quantity != null ? String(F.quantity).trim() : "1";
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: Y,
        description: z
      };
    });
    const g = (((D = this.actor.items) == null ? void 0 : D.contents) ?? []).filter((w) => w.type === "Jarmuegyseg"), a = [];
    for (const w of g) {
      const F = (w == null ? void 0 : w.system) ?? {}, M = F.health ?? {}, z = Number(F.level ?? 0) || 0, Y = Number(M.max ?? 0) || 0, W = Number(M.value ?? 0) || 0, K = (F.hit ?? "").toString().trim(), V = F.abilities ?? {}, Z = Array.isArray(V.items) ? V.items : [], ue = (await Promise.all(
        Z.map(async (X) => {
          var ie;
          if (!X) return null;
          try {
            const ee = await fromUuid(X);
            if (ee && (ee.type === "Kepesseg" || ee.type === "ability")) return ee;
          } catch {
            const ee = (ie = game.items) == null ? void 0 : ie.get(X);
            if (ee && (ee.type === "Kepesseg" || ee.type === "ability")) return ee;
          }
          return null;
        })
      )).map((X, ie) => ({ doc: X, ref: Z[ie] })).filter((X) => !!X.doc && !!X.ref).map(({ doc: X, ref: ie }) => ({
        id: X.id,
        ref: ie,
        name: X.name,
        img: X.img
      }));
      a.push({
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        level: z,
        hpMax: Y,
        hpValue: W,
        hit: K,
        abilities: ue
      });
    }
    e.unitsTable = a;
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
    var d;
    super._attachFrameListeners(s);
    const e = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (u) => {
      var g, a, i;
      u.preventDefault(), u.stopPropagation();
      const m = ((i = (a = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var g, a, i;
      u.preventDefault();
      const m = (a = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var g, a;
      if (u.preventDefault(), !u.altKey) return;
      const m = (a = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      !m || !this.actor.items.get(m) || await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var a;
      const m = u.currentTarget, f = (a = m == null ? void 0 : m.dataset) == null ? void 0 : a.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (m.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var g, a;
      const m = (a = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var f, g, a, i;
      u.preventDefault();
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && ((i = (a = this.actor.items.get(m)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var f, g;
      if (u.preventDefault(), !u.altKey) return;
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var f, g;
      u.preventDefault();
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this._postItemToChat(m);
    });
    const n = this, p = (u) => {
      if (!u) return;
      const m = n._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && n.actor.update(m).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, l = (u) => {
      var m, f, g;
      return u && (((f = (m = n.element) == null ? void 0 : m.contains) == null ? void 0 : f.call(m, u)) || n.id && ((g = u.closest) == null ? void 0 : g.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (u) => {
      var i;
      const m = u.target;
      if (!m || !m.form) return;
      const f = m.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const g = m.form;
      if (!l(g)) return;
      const a = u.relatedTarget;
      a && (g.contains(a) || n.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), p(g));
    }, document.body.addEventListener("blur", n._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var o;
      const m = u.currentTarget, f = (o = m == null ? void 0 : m.dataset) == null ? void 0 : o.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      if (!g || g.type !== "Jarmuegyseg") return;
      const a = (m.value ?? "").trim(), i = a === "" ? 0 : Number(a);
      await g.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const m = u.currentTarget, f = (i = m == null ? void 0 : m.dataset) == null ? void 0 : i.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      if (!g || g.type !== "Jarmuegyseg") return;
      const a = (m.value ?? "").trim();
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
    var u, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const a = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var u, m;
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
    if (((m = n.parent) == null ? void 0 : m.id) === p.id) return;
    const d = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [d]);
  }
};
Q(ce, "PARTS", foundry.utils.mergeObject(
  H(ce, ce, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(ce, ce, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = ce;
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
Q(ve, "PARTS", foundry.utils.mergeObject(H(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Q(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = H(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let jt = ve;
var Fs;
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
Q(ke, "PARTS", foundry.utils.mergeObject(H(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Q(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Fs = H(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = ke;
var As;
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
Q(we, "PARTS", foundry.utils.mergeObject(H(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Q(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = H(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
    }, e._votvInput = (l) => {
      var m;
      const d = l.target;
      if ((d == null ? void 0 : d.name) === "name") return;
      const u = (d == null ? void 0 : d.form) ?? ((m = d == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
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
Q(Ie, "PARTS", foundry.utils.mergeObject(H(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Q(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Ie, Ie, "DEFAULT_OPTIONS"), {
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
Q(Se, "PARTS", foundry.utils.mergeObject(H(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Q(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Se, Se, "DEFAULT_OPTIONS"), {
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
      var m, f, g, a, i, o, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((a = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
Q(Te, "PARTS", foundry.utils.mergeObject(H(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Q(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Te, Te, "DEFAULT_OPTIONS"), {
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
    var u, m, f, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (m = this.document) == null ? void 0 : m.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, o, c;
      try {
        const r = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && r.includes(this.element) || this.id && ((o = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let h = null;
        try {
          h = TextEditor.getDragEventData(a);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", h), !h || h.type !== "Item") return;
        const S = ((D) => {
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
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", S), !S) return;
        const T = await fromUuid(S);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", T == null ? void 0 : T.id, T == null ? void 0 : T.type), !T || T.documentName !== "Item") return;
        if (T.type === "Kepesseg" || T.type === "ability") {
          const D = T.uuid ?? T.id, C = this.document.system ?? {}, _ = Array.isArray((c = C.abilities) == null ? void 0 : c.items) ? C.abilities.items.slice() : [];
          _.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", _), await this.document.update({ "system.abilities.items": _ });
        }
      } catch (r) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", r);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var r, y, h, v, S, T;
      a.preventDefault();
      const i = (y = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, o = (v = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemId;
      let c = null;
      if (i)
        try {
          c = await fromUuid(i);
        } catch {
          c = null;
        }
      !c && o && (c = ((S = game.items) == null ? void 0 : S.get(o)) ?? null), (T = c == null ? void 0 : c.sheet) == null || T.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var r, y, h, v;
      a.preventDefault();
      const i = (y = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, o = (v = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemId, c = i || o;
      c && await this._postAbilityToChat(c);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var h, v, S;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const o = this.document.system ?? {}, c = Array.isArray((S = o.abilities) == null ? void 0 : S.items) ? o.abilities.items.slice() : [], r = c.indexOf(i), y = r >= 0 ? [...c.slice(0, r), ...c.slice(r + 1)] : c;
      await this.document.update({ "system.abilities.items": y });
    });
    const p = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (a) => {
      a.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const l = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((o) => console.warn("VoidJarmuEgysegSheet save failed", o));
    }, d = (a) => {
      var i, o, c;
      return a && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || e.id && ((c = a.closest) == null ? void 0 : c.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var o, c, r;
      const i = ((o = a.target) == null ? void 0 : o.form) ?? ((r = (c = a.target) == null ? void 0 : c.closest) == null ? void 0 : r.call(c, "form"));
      d(i) && l(i);
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
    const d = (await Promise.all(
      p.map(async (u) => {
        var m;
        if (!u) return null;
        try {
          const f = await fromUuid(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (m = game.items) == null ? void 0 : m.get(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).map((u, m) => ({ doc: u, ref: p[m] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: m }) => {
      var i, o;
      const f = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), g = Number(((o = u.system) == null ? void 0 : o.kp) ?? 0) || 0, a = f === "species";
      return {
        id: u.id,
        ref: m,
        name: u.name,
        img: u.img,
        kind: f,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : g
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", d), e.system = t, e.abilityList = d, e;
  }
  async _postAbilityToChat(s) {
    var f, g, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: m,
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
      const l = e.uuid ?? e.id, d = this.document.system ?? {}, u = Array.isArray((n = d.abilities) == null ? void 0 : n.items) ? d.abilities.items.slice() : [];
      return u.push(l), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
Q(fe, "PARTS", foundry.utils.mergeObject(H(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), Q(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
function js(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, p, l, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Vt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ai, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (p = CONFIG.Actor).typeLabels ?? (p.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ht, {
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
  }), Hooks.on("updateActor", (u, m, f, g) => {
    if ((u == null ? void 0 : u.type) !== "Karakter" || !(u != null && u.id)) return;
    const a = u.id;
    setTimeout(() => {
      var r, y, h, v;
      const i = (r = game.actors) == null ? void 0 : r.get(a);
      if (!i || i.type !== "Karakter") return;
      const o = ht.getTotalSpeedRaw(i), c = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !c) {
        const S = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, C;
          const T = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const _ of T)
            ((C = _ == null ? void 0 : _.document) == null ? void 0 : C.actorId) === a && typeof _.draw == "function" && _.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else o > 0 && c && c.delete().then(() => {
        var T, D;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const C of S)
          ((D = C == null ? void 0 : C.document) == null ? void 0 : D.actorId) === a && typeof C.draw == "function" && C.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (u, m, f, g) => {
    var T, D, C, _, q, j, E, w, F, M, z, Y, W;
    const a = u == null ? void 0 : u.id;
    if (!a) return;
    if ((u.type === "Karakter" || u.type === "Npc") && ((T = m == null ? void 0 : m.system) != null && T.combat) && "initiativeResult" in m.system.combat) {
      const K = Number((C = (D = u.system) == null ? void 0 : D.combat) == null ? void 0 : C.initiativeResult), V = Number.isFinite(K) ? K : 0, Z = game.combat;
      if (Z) {
        const re = ((_ = Z.combatants) == null ? void 0 : _.contents) ?? Array.from(Z.combatants ?? []);
        for (const ue of re)
          if (((q = ue.actor) == null ? void 0 : q.id) === a || ue.actorId === a) {
            Z.updateEmbeddedDocuments("Combatant", [{ _id: ue.id, initiative: V }]).catch(() => {
            });
            break;
          }
      }
    }
    if (u.type === "Npc" && ((j = m == null ? void 0 : m.system) != null && j.identity) && "size" in m.system.identity) {
      const K = js((w = (E = u.system) == null ? void 0 : E.identity) == null ? void 0 : w.size);
      u.update({
        "prototypeToken.width": K,
        "prototypeToken.height": K
      }).catch((V) => console.warn("Vacuum of the Void | NPC token size update failed for", u.name, V));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], r = (F = game.actors) == null ? void 0 : F.get(a);
    r != null && r.apps && c.push(...Array.from(r.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const K of y) {
      if (((M = K.document) == null ? void 0 : M.id) !== a || ((z = K.document) == null ? void 0 : z.documentName) !== "Actor") continue;
      const V = (Y = K.constructor) == null ? void 0 : Y.name;
      V !== "VoidKarakterSheet" && V !== "VoidJarmuSheet" || c.includes(K) || c.push(K);
    }
    if (o && c.some((K) => {
      const V = (K == null ? void 0 : K.form) ?? (K == null ? void 0 : K.element);
      return V && V.contains(i);
    })) return;
    const v = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, S = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const K of c)
        !(K != null && K.rendered) || typeof K.render != "function" || K.id !== S && K.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, m, f, g) => {
    var c, r, y;
    const a = u == null ? void 0 : u.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((c = a.system) == null ? void 0 : c.weapons) ?? {}, o = {};
    for (const [h, v] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !S || S !== u.id || (o[`system.weapons.${h}.name`] = u.name ?? "", o[`system.weapons.${h}.damage`] = ((r = u.system) == null ? void 0 : r.damage) ?? "", o[`system.weapons.${h}.bonus`] = ((y = u.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(o).length && a.update(o);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, v, S, T, D, C, _, q, j, E, w, F, M, z, Y, W, K, V, Z, re, ue, X;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (v = game.messages) == null ? void 0 : v.get(n), l = (T = (S = p == null ? void 0 : p.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!l) return;
    const d = l.actorId ?? ((D = p == null ? void 0 : p.speaker) == null ? void 0 : D.actor) ?? "";
    if (!d) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((C = game.actors) == null ? void 0 : C.get(l.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(d));
    if (u || (u = ((j = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : j.flatMap((ee) => {
      var Fe;
      return ((Fe = ee.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((ee) => ee.actor).find((ee) => ee && (ee.id === d || ee.id === l.actorId))) ?? null), !u) return;
    const m = l.itemId ? ((w = (E = u.items) == null ? void 0 : E.get) == null ? void 0 : w.call(E, l.itemId)) ?? ((z = (M = (F = u.items) == null ? void 0 : F.contents) == null ? void 0 : M.find) == null ? void 0 : z.call(M, (ie) => ie.id === l.itemId)) : null;
    let f = (l.damageFormula ?? "").trim();
    if (f || (f = (((Y = m == null ? void 0 : m.system) == null ? void 0 : Y.damage) ?? "").trim()), !f && l.slotKey && (f = (((((W = u.system) == null ? void 0 : W.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (re = (K = ui.notifications) == null ? void 0 : K.warn) == null || re.call(K, ((Z = (V = game.i18n) == null ? void 0 : V.localize) == null ? void 0 : Z.call(V, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(f);
    await g.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", o = l.hitLocationName || "", c = ((m == null ? void 0 : m.name) ?? (l.slotKey ? ((X = (((ue = u.system) == null ? void 0 : ue.weapons) ?? {})[l.slotKey]) == null ? void 0 : X.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    o && (r += ` (${o})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var l, d, u, m, f, g;
      if (!((d = (l = e.target) == null ? void 0 : l.closest) != null && d.call(l, "#actors"))) return;
      const t = (m = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((g = game.actors) != null && g.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((d) => d.type === "Karakter")) ?? [];
    for (const d of e) {
      const u = ht.getTotalSpeedRaw(d), m = (n = d.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !m) {
        const f = ((l = (p = CONFIG.statusEffects) == null ? void 0 : p.find((g) => g.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await d.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: d.uuid
        }]).catch(() => {
        });
      } else u > 0 && m && await m.delete().catch(() => {
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
    var l, d, u, m, f, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((l = game.actors) == null ? void 0 : l.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, o = ((d = i == null ? void 0 : i.bar1) == null ? void 0 : d.attribute) ?? "", c = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
        (o || c) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((m = a.tokens) == null ? void 0 : m.filter((o) => {
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
    }, p = ((f = game.actors) == null ? void 0 : f.filter((a) => a.type === "Npc")) ?? [];
    for (const a of p)
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
Hooks.on("preCreateToken", (I, s, e) => {
  var l, d, u, m;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (d = game.actors) == null ? void 0 : d.get(n) : null;
  if (p) {
    if (p.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (p.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (p.type === "Npc") {
      const f = js((m = (u = p.system) == null ? void 0 : u.identity) == null ? void 0 : m.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: f,
        height: f
      });
    }
  }
});
Hooks.on("preCreateCombatant", (I, s, e) => {
  const t = I.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
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
function Ks(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((p) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, p);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(I);
});
function zs() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((p) => p.type === "Karakter" || p.type === "Npc")) ?? []) {
    const p = n.apps ?? [], l = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const d of l)
      !d || I.has(d.id) || (I.add(d.id), typeof d.render == "function" && d.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const p = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    p !== "Karakter" && p !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(zs, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && Ks(I), setTimeout(zs, 0);
});
Hooks.on("renderSidebarTab", (I, s, e) => {
  if ((I == null ? void 0 : I.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((p) => {
    p.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var p;
  const t = I == null ? void 0 : I.object, n = ((p = t == null ? void 0 : t.document) == null ? void 0 : p.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const l = s[0] ?? s;
    l != null && l.classList && l.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ms,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var m, f, g, a;
  const t = ((m = I.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, l = t.weaponAttack, d = t.weapon;
  if (!n && !p && !l) return;
  const u = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (u) {
    if (n && u.classList.add(`votv-${n}`), p) {
      const i = u.querySelector(".votv-crit-label");
      if (i)
        i.textContent = p;
      else {
        const o = u.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? u, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = p, c.appendChild(r);
      }
    }
    if (l && d && (d.actorId || (g = I.speaker) != null && g.actor)) {
      const i = u.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? u;
      if (!u.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const y = !!d.isHit, h = d.targetName || "Célpont";
        r.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(r);
      }
      if (d.isHit && !u.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = d.hitLocationRoll, v = d.hitLocationName;
        y.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", y.dataset.actorId = String(d.actorId ?? ((a = I.speaker) == null ? void 0 : a.actor) ?? ""), y.dataset.itemId = String(d.itemId ?? ""), y.dataset.slotKey = String(d.slotKey ?? ""), y.dataset.targetName = String(d.targetName ?? ""), y.dataset.hitLocationName = String(d.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), o.appendChild(y);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-Cf0f2nPF.mjs.map
