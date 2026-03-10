var Us = Object.defineProperty;
var Hs = Object.getPrototypeOf;
var Bs = Reflect.get;
var Gs = (I, s, e) => s in I ? Us(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => Gs(I, typeof s != "symbol" ? s + "" : s, e);
var U = (I, s, e) => Bs(Hs(I), e, s);
const { HTMLField: Ws, NumberField: A, SchemaField: z, StringField: D, BooleanField: te, ArrayField: yt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new z({
        name: new D({ required: !1, blank: !0, initial: "" }),
        player: new D({ required: !1, blank: !0, initial: "" }),
        level: new A({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new D({ required: !1, blank: !0, initial: "" }),
        assignment: new D({ required: !1, blank: !0, initial: "" }),
        subAssignment: new D({ required: !1, blank: !0, initial: "" }),
        background: new D({ required: !1, blank: !0, initial: "" }),
        languages: new D({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new D({ required: !1, blank: !0, initial: "" })
      }),
      resources: new z({
        health: new z({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new z({
          head: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
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
        speedUnit: new D({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new A({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new yt(
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
        quickThinking1: new D({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new D({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new D({ required: !1, blank: !0, initial: "" }),
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
        slotOrder: new D({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new z({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new z({
        microchips: new z({
          slot1: new z({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot2: new z({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot3: new z({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          })
        }),
        equipment: new D({ required: !1, blank: !0, initial: "" }),
        armor: new yt(
          new z({
            name: new D({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new D({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new D({ required: !1, blank: !0, initial: "" }),
            level: new D({ required: !1, blank: !0, initial: "" }),
            other: new D({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new yt(
          new z({
            name: new D({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new D({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new z({
        faji: new z({
          itemId: new D({ required: !1, blank: !0, initial: "" }),
          name: new D({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new z({
          itemId: new D({ required: !1, blank: !0, initial: "" }),
          name: new D({ required: !1, blank: !0, initial: "" })
        }),
        passive: new z({
          items: new yt(
            new D({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new z({
          items: new yt(
            new D({ required: !1, blank: !0 }),
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
const { NumberField: Pt, SchemaField: Vs } = foundry.data.fields;
class Ys extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Vs({
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
const { BooleanField: Js, NumberField: yi, StringField: Ne } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Js({ required: !1, initial: !1 }),
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
const { BooleanField: Zs, StringField: Nt } = foundry.data.fields;
class ei extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Zs({ required: !1, initial: !1 }),
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
const { NumberField: Et, StringField: fs } = foundry.data.fields;
class ti extends foundry.abstract.TypeDataModel {
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
      cost: new Et({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Et({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Et({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: si, StringField: ys } = foundry.data.fields;
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
      kp: new si({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: hs } = foundry.data.fields;
class ii extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new hs({ required: !1, blank: !0, initial: "" }),
      quantity: new hs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ni } = foundry.data.fields;
class ri extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ni({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: $t, StringField: gt, SchemaField: bs, ArrayField: ai } = foundry.data.fields;
class oi extends foundry.abstract.TypeDataModel {
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
        items: new ai(
          new gt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new gt({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new gt({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new gt({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new gt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function xt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (o, i = 1) => {
    if (!Array.isArray(o)) return;
    let c = i;
    for (const l of o) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        f(l.terms, c);
        continue;
      }
      if (typeof l.operator == "string") {
        c = l.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof l.faces == "number" ? l.faces : void 0, g = Array.isArray(l.results) ? l.results : null;
      if (!r || !g || r === 8 || r !== 6) continue;
      const b = !n && c >= 0 && (l.number === 3 || l.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const w of g) {
        if (!w || w.discarded || w.hidden) continue;
        const S = Number(w.result ?? w);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  f(I.terms, 1);
  const a = s.filter((o) => o === 6).length, d = s.filter((o) => o === 1).length, p = e.filter((o) => o === 6).length, u = t.filter((o) => o === 6).length, m = a + p, y = d + u;
  return m > 0 && m === y ? { resultType: null, label: null } : m >= 3 ? { resultType: "critical", label: "Brutális Siker" } : m === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function ci(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var vs, ks, ws, Is;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, a, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const f = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (f) {
      d.scrollState = this._saveScrollState(f);
      const r = document.activeElement, g = a.contains(r), b = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      g && b && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const u = this.element, m = this.form ?? this.element, y = d.scrollState, o = d.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var r, g;
      if (this._applyScrollState(u, y), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const b = ((r = m.querySelector) == null ? void 0 : r.call(m, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (g = m.querySelector) == null ? void 0 : g.call(m, `[name="${CSS.escape(o.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = o.selectionStart ?? 0, b.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(u, y);
    };
    return (i || o) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const f = Math.floor(n / 3), a = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const d = String(((f = a.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const d = String(((f = a.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let t = 0;
    for (const a of e) {
      const d = String(((f = a.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (t += p);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var m, y, o, i, c, l, r, g, b;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (m = e.hitLocations) == null ? void 0 : m.legs) == null ? void 0 : y.value) ?? 0, n = ((o = e.currentHealth) == null ? void 0 : o.legs) ?? 0, f = W._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const a = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let d;
    f === 1 ? d = -6 : f === 2 ? d = -3 : d = a, d += W._getTotalArmorSpeedPenaltyStatic(s);
    const p = Number(((r = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : r.speed) ?? 0) || 0, u = Number(((b = (g = s.system) == null ? void 0 : g.combat) == null ? void 0 : b.speedBonus) ?? 0) || 0;
    return p + u + (Number.isFinite(d) ? d : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : W.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, o, i, c, l, r, g, b, w, S, T, O;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : r.resources) ?? {}, f = ((b = (g = n.hitLocations) == null ? void 0 : g.legs) == null ? void 0 : b.value) ?? 0, a = ((w = n.currentHealth) == null ? void 0 : w.legs) ?? 0, d = W._healthStatusFromRatio(a, f), p = Number(((O = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : O.givenSpeed) ?? 0) || 0;
    let u;
    d === 0 ? u = 0 : d === 1 ? u = -6 : d === 2 ? u = -3 : u = p;
    const m = this._getTotalArmorSpeedPenalty();
    u += m, t.textContent = String(u);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var u, m, y, o, i, c, l, r, g, b, w, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((o = (y = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : y.combat) == null ? void 0 : o.givenProtection) ?? 0) || 0, f = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, a = (b = (g = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : g.has) != null && b.call(g, "halfcover") ? 3 : 0, d = (T = (S = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, p = n + this._getTotalArmorProtectionBonus() + f + a + d;
    t.textContent = String(p);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), a = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const p = Number(a == null ? void 0 : a.value) || 0, u = Number(d == null ? void 0 : d.value) || 0, m = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(p + u + m);
  }
  _writeTotalSpeed(s = null) {
    var l, r, g, b, w, S, T, O;
    const e = s ?? this.form ?? this.element, t = (F) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, F)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${F}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), a = t('input[name="system.combat.speed"]'), d = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((g = (r = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : r.has) != null && g.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const p = ((w = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : w.resources) ?? {}, u = ((T = (S = p.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, m = ((O = p.currentHealth) == null ? void 0 : O.legs) ?? 0;
    if (W._healthStatusFromRatio(m, u) === 0) {
      n.textContent = "0";
      return;
    }
    const o = Number(a == null ? void 0 : a.value) || 0, i = Number(d == null ? void 0 : d.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(o + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, d, p, u;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, f = ((u = t.currentHealth) == null ? void 0 : u[e]) ?? 0;
    return W._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, u, m;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, f = ((u = (p = n.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : u.value) ?? 0, a = ((m = n.currentHealth) == null ? void 0 : m[t]) ?? 0;
    return W._healthStatusFromRatio(a, f);
  }
  async _prepareContext(s) {
    var tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re, k, E, x, B, oe, Q, ye, me, ce, _e, Me, je, Ot, Ct, qt, Lt, mt, Ve, Yt, Xt, Qt, Jt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((it = (st = (tt = this.actor.system) == null ? void 0 : tt.resources) == null ? void 0 : st.stress) == null ? void 0 : it.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, a = n.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const h of d) {
      const L = ((nt = f[h]) == null ? void 0 : nt.value) ?? 0, q = a[h] ?? 0;
      e.computedHealthStatus[h] = W._healthStatusFromRatio(q, L);
    }
    const p = (Number(a.head) || 0) === 0, m = ["torso", "arms", "legs"].filter((h) => (Number(a[h]) || 0) === 0).length;
    e.showDeathSkull = p || m >= 2;
    const y = e.computedHealthStatus.legs ?? 3, o = Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = o;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((ct = (ot = this.actor.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.givenProtection) ?? 0) || 0, r = (ut = (xe = (lt = this.actor) == null ? void 0 : lt.statuses) == null ? void 0 : xe.has) != null && ut.call(xe, "lookaround") ? 1 : 0, g = (k = (Re = (dt = this.actor) == null ? void 0 : dt.statuses) == null ? void 0 : Re.has) != null && k.call(Re, "halfcover") ? 3 : 0, b = (B = (x = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : x.has) != null && B.call(x, "threequarteredcover") ? 6 : 0, w = l + this._getTotalArmorProtectionBonus() + r + g + b;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: w } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let O = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    y === 0 && (O = 0), (me = (ye = (Q = this.actor) == null ? void 0 : Q.statuses) == null ? void 0 : ye.has) != null && me.call(ye, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), O = 0), e.totalSpeed = O;
    const F = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [h, L] of Object.entries(F)) {
      const q = e.computedHealthStatus[L];
      e.skillHealthStatus[h] = q, e.skillDisabled[h] = q === 0 ? " disabled" : "", e.skillHasHealthTint[h] = !0;
    }
    const N = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = (N.slotOrder ?? "").trim(), _ = C ? C.split(/\s*,\s*/).filter((h) => v.includes(h)) : [], R = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, j = R && typeof R == "object" && !Array.isArray(R) ? R : {}, H = (((je = j.slot1) == null ? void 0 : je.itemId) ?? "").trim(), G = (((Ot = j.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Z = (((Ct = j.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), M = this.actor.items.contents.filter((h) => h.type !== "Kepesseg" && h.type !== "ability").slice().sort((h, L) => {
      const q = typeof h.sort == "number" ? h.sort : 0, P = typeof L.sort == "number" ? L.sort : 0;
      return q - P;
    }).map((h) => {
      var Oe, ze, Ue, qe, Le, pt;
      const L = h.type === "Fegyver", q = h.type === "MikroChip";
      let P = 0, K = "", ee = null;
      for (let Ye = 0; Ye < _.length; Ye++) {
        const ft = _[Ye];
        if ((((Oe = N[ft]) == null ? void 0 : Oe.itemId) ?? "") === h.id) {
          P = Ye + 1, K = ((ze = N[ft]) == null ? void 0 : ze.bonus) ?? "", ee = ft;
          break;
        }
      }
      let J = null;
      q && (H === h.id ? J = "slot1" : G === h.id ? J = "slot2" : Z === h.id && (J = "slot3"));
      const Ke = L && ((Ue = h.system) != null && Ue.damage) ? h.system.damage : "", le = L && typeof ((qe = h.system) == null ? void 0 : qe.range) == "string" ? (h.system.range || "").trim() : "", pe = ee ? Number((Le = N[ee]) == null ? void 0 : Le.bonus) || 0 : "";
      return {
        id: h.id,
        name: h.name,
        img: h.img,
        type: h.type,
        isWeapon: L,
        slotAssignment: P,
        slotBonus: K,
        slotKey: ee,
        microchipSlotKey: J,
        isEquipped: !!(ee || J),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: pe,
        quantity: Number(((pt = h.system) == null ? void 0 : pt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const Y = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((h) => h.type === "Fegyver"), re = Y.map((h) => ({ id: h.id, name: h.name, img: h.img }));
    e.weaponItems = re;
    const Se = "— Nincs fegyver —", fe = _.filter((h) => {
      const q = ((N[h] ?? {}).itemId ?? "").trim();
      return q ? !!Y.find((K) => K.id === q) : !1;
    });
    e.weaponSlots = fe.map((h, L) => {
      const q = N[h] ?? {}, P = (q.itemId ?? "").trim(), K = re.find((pe) => pe.id === P), ee = Y.find((pe) => pe.id === P), J = (ee == null ? void 0 : ee.system) ?? {}, Ke = J.size === "thrown", le = (typeof J.range == "string" ? (J.range || "").trim() : "") || "—";
      return {
        slotKey: h,
        itemId: P,
        slotNum: L + 1,
        displayName: (K == null ? void 0 : K.name) || q.name || Se,
        img: (K == null ? void 0 : K.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? "",
        isThrown: Ke,
        rangeStr: le
      };
    });
    const Te = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = Y.map((h) => {
      var ls, us, ds;
      const L = h.id;
      let q = null, P = {};
      for (const At of _)
        if ((((ls = N[At]) == null ? void 0 : ls.itemId) ?? "").trim() === L) {
          q = At, P = N[At] ?? {};
          break;
        }
      const K = !!q, ee = ((us = h.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = h.system) == null ? void 0 : ds.equipped) !== null ? !!h.system.equipped : K, J = (h == null ? void 0 : h.system) ?? {}, Ke = typeof J.range == "string" ? (J.range || "").trim() : "", le = J.type ?? "", pe = (Te[le] ?? le) || "—", Oe = J.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [pe, ze].filter(Boolean).join(", ") || pe || "—", qe = le === "projectile" || Oe === "thrown", Le = J.quantity, pt = Le != null ? String(Le).trim() : "1", Ye = String(P.bonus ?? "").trim(), ft = String(J.bonus ?? "").trim(), zs = Ye || ft || "0";
      return {
        slotKey: q ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? Se,
        img: (h == null ? void 0 : h.img) ?? "",
        bonus: zs,
        damage: P.damage ?? J.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: pe,
        typeAndSize: Ue,
        quantity: pt,
        quantityDisplay: qe ? pt : "—",
        isProjectile: qe,
        equipped: ee,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const ue = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((h) => h.type === "Pancel");
    e.armorTable = ue.map((h) => {
      var P, K;
      const L = (h == null ? void 0 : h.system) ?? {}, q = ((P = h.system) == null ? void 0 : P.equipped) !== void 0 && ((K = h.system) == null ? void 0 : K.equipped) !== null ? !!h.system.equipped : !1;
      return {
        itemId: h.id,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? "—",
        img: (h == null ? void 0 : h.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: ci((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: q
      };
    });
    const Fe = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((h) => h.type === "Targy");
    e.itemsTable = Fe.map((h) => {
      const L = (h == null ? void 0 : h.system) ?? {}, q = (L.description ?? "").trim(), P = q ? q.length > 60 ? q.slice(0, 57) + "…" : q : "—", K = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: h.id,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? "—",
        img: (h == null ? void 0 : h.img) ?? "",
        quantity: K,
        description: P
      };
    });
    const He = (((Ve = this.actor.items) == null ? void 0 : Ve.contents) ?? []).filter((h) => h.type === "Egyeb");
    e.egyebList = He.map((h) => {
      const q = (((h == null ? void 0 : h.system) ?? {}).description ?? "").trim(), P = q ? q.length > 80 ? q.slice(0, 77) + "…" : q : "";
      return {
        itemId: h.id,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? "—",
        img: (h == null ? void 0 : h.img) ?? "",
        description: P
      };
    });
    const bt = (((Yt = this.actor.items) == null ? void 0 : Yt.contents) ?? []).filter((h) => h.type === "MikroChip"), ne = bt.map((h) => ({ id: h.id, name: h.name, img: h.img })), Xe = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (h) => {
      var q, P, K;
      const L = [];
      return h !== 1 && L.push((((q = j.slot1) == null ? void 0 : q.itemId) ?? "").trim()), h !== 2 && L.push((((P = j.slot2) == null ? void 0 : P.itemId) ?? "").trim()), h !== 3 && L.push((((K = j.slot3) == null ? void 0 : K.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((h) => !Be(1).includes(h.id)), e.microchipItemsSlot2 = ne.filter((h) => !Be(2).includes(h.id)), e.microchipItemsSlot3 = ne.filter((h) => !Be(3).includes(h.id)), e.microchipSlots = De.map((h) => {
      const L = j[h] ?? {}, q = (L.itemId ?? "").trim(), P = bt.find((K) => K.id === q);
      return {
        slotKey: h,
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || Xe,
        img: (P == null ? void 0 : P.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((h) => {
      const L = `slot${h}`, q = j[L] ?? {}, P = (q.itemId ?? "").trim(), K = ne.find((ee) => ee.id === P);
      e[`microchip${h}ItemId`] = P, e[`microchip${h}DisplayName`] = (K == null ? void 0 : K.name) || q.name || Xe, e[`microchip${h}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = bt.map((h) => {
      var Oe, ze, Ue, qe;
      const L = h.id;
      let q = null;
      for (const Le of De)
        if ((((Oe = j[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === L) {
          q = Le;
          break;
        }
      const P = !!q, K = ((ze = h == null ? void 0 : h.system) == null ? void 0 : ze.abilityType) ?? "", ee = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", J = K === "active", Ke = Number((Ue = h == null ? void 0 : h.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(h.system.replaceCost) : 0, le = (((qe = h == null ? void 0 : h.system) == null ? void 0 : qe.description) ?? "").trim(), pe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? "—",
        img: (h == null ? void 0 : h.img) ?? "",
        typeLabel: ee,
        description: pe,
        kp: Ke,
        isActive: J,
        slotKey: q ?? "",
        equipped: P
      };
    });
    const vt = (((Xt = e.weaponsTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.armorTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Jt = e.microchipsTable) == null ? void 0 : Jt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Vt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((h) => {
      var L, q, P;
      return {
        id: h.id,
        name: h.name,
        img: h.img,
        kind: ((L = h.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((q = h.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((P = h.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Ge = new Map(Vt.map((h) => [h.id, h])), wt = "— Nincs képesség —", Qe = (h) => {
      const L = kt[h] ?? {}, q = (L.itemId ?? "").trim(), P = q ? Ge.get(q) : null, K = (P == null ? void 0 : P.description) ?? "", ee = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || wt,
        img: (P == null ? void 0 : P.img) || "",
        description: K,
        kp: ee
      };
    };
    e.abilityFajiSlot = Qe("faji"), e.abilityHatterSlot = Qe("hatter");
    const Je = (h) => {
      const L = kt[h];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ze = (h) => h.map((L) => {
      const q = Ge.get(L);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ze(Je("passive")), e.abilityActiveList = Ze(Je("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, We = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, de = typeof Ae == "number" ? Ae : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Pe = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Ee = Array.isArray(Pe) ? Pe.map((h) => ({ min: Number(h.min) ?? 0, max: Number(h.max) ?? 0, kp: Math.min(10, Math.max(0, Number(h.kp) ?? 0)) })) : [], Ce = (Ee.length > 0 ? Ee : St).slice().sort((h, L) => h.min - L.min), $e = Ee.map((h) => h.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Ee.map((h) => ({ ...h, isFirst: h.min === Tt, isLast: h.min === Dt }));
    let et = 0;
    if (typeof de == "number" && de >= 0 && Ce.length > 0) {
      const h = Ce[0], L = Ce[Ce.length - 1];
      let q = null;
      de <= h.max ? q = h : de >= L.min ? q = L : q = Ce.find((P) => de >= P.min && de <= P.max), q && (et = q.kp);
    }
    e.kpDots = We.map((h, L) => {
      const q = L + 1, P = !!Number(It[h]), K = q <= et;
      return { index: q, used: P, usable: K };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((h) => {
      var L;
      return ((L = h.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var y, o;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-Do8y1urf.mjs");
      r(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, g, b;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const w = (c.dataset.slot ?? "").trim();
        if (!w) return;
        l = (((((g = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : g.weapons) ?? {})[w] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((b = c.dataset.slot) == null ? void 0 : b.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-Do8y1urf.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var b, w;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const r = `system.resources.kpDot${l}`, g = !!Number((w = (b = this.actor.system) == null ? void 0 : b.resources) == null ? void 0 : w[`kpDot${l}`]);
      await this.actor.update({ [r]: g ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const c = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const a = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', a), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, g, b;
      i.preventDefault(), i.stopPropagation();
      const c = ((b = (g = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : g.FilePicker) == null ? void 0 : b.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (w) => {
          w && this.actor.update({ img: w });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var b;
      i.preventDefault();
      const c = i.currentTarget, l = c.dataset.skill, r = ((b = c.textContent) == null ? void 0 : b.trim()) || l, { openRollSheetForSkill: g } = await import("./roll-sheet-Do8y1urf.mjs");
      g(this.actor, l, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, O, F, N, v, C;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), r = l == null ? void 0 : l.dataset.slot;
      if (!r) return;
      const b = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!b) return;
      const w = ((F = (O = this.actor.items).get) == null ? void 0 : F.call(O, b)) ?? ((v = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : v.call(N, (_) => _.id === b));
      (C = w == null ? void 0 : w.sheet) == null || C.render(!0);
    });
    const d = (i, c) => {
      var g;
      const l = i.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const b = i.dataset.weaponSlot;
          b && this._rollWeapon(b);
          return;
        }
        (g = r.sheet) == null || g.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r) return;
      let g = Number(c.value);
      (!Number.isFinite(g) || g < 0) && (g = 0), await r.update({ "system.quantity": g });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, g = r.items.get(l);
      if (!g) return;
      const b = {};
      if ((g == null ? void 0 : g.type) === "Fegyver") {
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === l;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          b["system.weapons.slotOrder"] = N.join(","), b[`system.weapons.${F}.itemId`] = "", b[`system.weapons.${F}.name`] = "", b[`system.weapons.${F}.damage`] = "", b[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(b).length && await r.update(b), await r.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var F, N;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const g = this.actor.system.weapons ?? {}, b = (g.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = b ? b.split(/\s*,\s*/).filter((v) => w.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = g[v]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = g[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = w.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: l,
          [`system.weapons.${v}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${v}.damage`]: ((F = r == null ? void 0 : r.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((N = r == null ? void 0 : r.system) == null ? void 0 : N.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var v;
      i.preventDefault();
      const c = i.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), g = r == null ? void 0 : r.dataset.slot;
      if (!g) return;
      const b = (c.dataset.itemId ?? "").trim(), w = (c.dataset.itemName ?? ((v = c.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (c.dataset.itemImg ?? "").trim(), T = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = w);
      let O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      S ? (O || (O = document.createElement("img"), O.className = "karakter-microchip-slot-thumb", O.alt = "", r == null || r.insertBefore(O, T)), O.src = S, O.style.display = "") : O && O.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const F = b ? this.actor.items.get(b) : null, N = {
        [`system.gear.microchips.${g}.itemId`]: b,
        [`system.gear.microchips.${g}.name`]: (F == null ? void 0 : F.name) ?? ""
      };
      b && (N[`system.gear.microchips.${g}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var w, S;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const r = ((S = (w = this.actor.system) == null ? void 0 : w.gear) == null ? void 0 : S.microchips) ?? {}, b = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = r[T]) == null ? void 0 : O.itemId) ?? "").trim() === c;
      });
      b && await this.actor.update({
        [`system.gear.microchips.${b}.itemId`]: "",
        [`system.gear.microchips.${b}.name`]: "",
        [`system.gear.microchips.${b}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const l = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var g;
        return (g = r.currentTarget) == null ? void 0 : g.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, l));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var g;
        return (g = r.currentTarget) == null ? void 0 : g.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var g;
        (g = r.currentTarget) == null || g.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var g;
        return (g = r.currentTarget) == null ? void 0 : g.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var g;
        (g = r.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var w;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const r = this.actor.system.abilities ?? {}, b = (Array.isArray((w = r[c]) == null ? void 0 : w.items) ? r[c].items.slice() : []).filter((S) => S !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: b });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var g;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      (g = r == null ? void 0 : r.sheet) == null || g.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(l) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const g = (c.value ?? "").trim();
      await r.update({ "system.quantity": g }), setTimeout(() => {
        const b = this.form ?? this.element, w = b == null ? void 0 : b.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var F, N;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const g = this.actor.system.weapons ?? {}, b = (g.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = b ? b.split(/\s*,\s*/).filter((v) => w.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = g[v]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = g[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = w.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: l,
          [`system.weapons.${v}.name`]: r.name ?? "",
          [`system.weapons.${v}.damage`]: ((F = r.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((N = r.system) == null ? void 0 : N.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, g = r.items.get(l), b = {};
      if ((g == null ? void 0 : g.type) === "Fegyver") {
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === l;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          b["system.weapons.slotOrder"] = N.join(","), b[`system.weapons.${F}.itemId`] = "", b[`system.weapons.${F}.name`] = "", b[`system.weapons.${F}.damage`] = "", b[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(b).length && await r.update(b), await r.deleteEmbeddedDocuments("Item", [l]);
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
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Targy") return;
      const g = (c.value ?? "").trim();
      await r.update({ "system.quantity": g }), setTimeout(() => {
        const b = this.form ?? this.element, w = b == null ? void 0 : b.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    });
    const p = this, u = (i) => {
      var r, g, b, w;
      if (!i) return;
      const c = p._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((g = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : g.currentHealth) != null || ((w = (b = c.system) == null ? void 0 : b.resources) == null ? void 0 : w.hitLocations) != null;
      p.actor.update(c).then(() => {
        l && setTimeout(() => p.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, m = (i) => {
      var c, l, r;
      return i && (((l = (c = p.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, i)) || p.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(p.id)}`)));
    };
    p._votvBlur = (i) => {
      var b;
      const c = i.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const r = c.form;
      if (!m(r)) return;
      const g = i.relatedTarget;
      g && (r.contains(g) || p.id && ((b = g.closest) != null && b.call(g, `#${CSS.escape(p.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: p.id, at: Date.now() }), u(r));
    }, document.body.addEventListener("blur", p._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, u;
    const e = {};
    for (const m of s.elements) {
      if (!m.name || m.disabled || m.type === "radio" && !m.checked || m.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      m.type === "checkbox" ? y = m.checked : m.type === "number" ? y = m.value === "" ? 0 : Number(m.value) : y = m.value ?? "", foundry.utils.setProperty(e, m.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const m of a) {
      const y = ((u = n[m]) == null ? void 0 : u.value) ?? 0, o = f[m] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${m}`, W._healthStatusFromRatio(o, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, a, d, p, u, m, y, o, i, c;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let g = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            g = ((f = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : f.id) ?? g;
          }
          const b = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), w = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const S = b === "active" ? "active" : "passive", T = Array.isArray((d = w[S]) == null ? void 0 : d.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
          T.includes(g) || T.push(g), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const g = this.actor, b = ((u = r.parent) == null ? void 0 : u.id) !== g.id;
          let w = r.id;
          if (b) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            w = ((m = (await g.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : m.id) ?? w;
          }
          if (b) {
            const S = ((y = g.system) == null ? void 0 : y.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = T ? T.split(/\s*,\s*/).filter((v) => O.includes(v)) : [], N = F.filter((v) => {
              var C;
              return (((C = S[v]) == null ? void 0 : C.itemId) ?? "").trim() === w;
            });
            if (N.length > 0) {
              const C = {
                "system.weapons.slotOrder": F.filter((_) => !N.includes(_)).join(",")
              };
              for (const _ of N)
                C[`system.weapons.${_}.itemId`] = "", C[`system.weapons.${_}.name`] = "", C[`system.weapons.${_}.damage`] = "", C[`system.weapons.${_}.bonus`] = "";
              await g.update(C);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const g = this.actor;
          if (((o = r.parent) == null ? void 0 : o.id) !== g.id) {
            const b = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const g = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== g.id && await g.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const g = this.actor;
          ((c = r.parent) == null ? void 0 : c.id) !== g.id && await g.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, a, d;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, u, m, y, o;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
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
    const a = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: f.name,
      [`system.weapons.${e}.damage`]: ((y = f.system) == null ? void 0 : y.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = f.system) == null ? void 0 : o.bonus) ?? ""
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
    var u, m;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, o) => {
      const i = typeof y.sort == "number" ? y.sort : 0, c = typeof o.sort == "number" ? o.sort : 0;
      return i - c;
    }).map((y) => y.id), a = f.indexOf(t), d = f.indexOf(e);
    if (a === -1 || d === -1) return;
    f.splice(a, 1), f.splice(d, 0, t);
    const p = f.map((y, o) => ({
      _id: y,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, a;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
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
    var p, u, m;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((u = e.system) == null ? void 0 : u.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const o = Number(((m = e.system) == null ? void 0 : m.replaceCost) ?? 0) || 0;
        o > 0 && (f = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var m, y, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((m = e.system) == null ? void 0 : m.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
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
    var a, d, p;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : p.id) ?? f;
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
    var p, u, m, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((m = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : m.id) ?? f;
    }
    const a = this.actor.system.abilities ?? {}, d = Array.isArray((y = a[e]) == null ? void 0 : y.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    d.includes(f) || d.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, a, d;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, u, m, y;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let a = f.id;
    ((m = f.parent) == null ? void 0 : m.id) !== this.actor.id && (a = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? f -= 6 : a === 2 && (f -= 3);
    const p = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, u = new Roll(p);
    await u.evaluate({ async: !0 });
    const { resultType: m, label: y } = xt(u), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: m, critLabel: y } },
      rollMode: o
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
    var a;
    const s = Number(((a = this.actor.system.skills) == null ? void 0 : a.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var S, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((O) => O.type === "Fegyver");
    let a = null;
    t.itemId && (a = f.find((O) => O.id === t.itemId) ?? null);
    const d = a && a.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, u = ((S = a == null ? void 0 : a.system) == null ? void 0 : S.type) || "kinetic", m = (((T = a == null ? void 0 : a.system) == null ? void 0 : T.skillKey) ?? "").trim(), y = m && n[m] !== void 0 ? m : u === "explosive" ? "grenadeUse" : "firearms", o = Number(n[y] || 0) || 0, i = p + o, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(l);
    await r.evaluate({ async: !0 });
    const { resultType: g, label: b } = xt(r), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: b } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, u, m, y, o, i, c, l, r, g;
    const t = this.actor;
    if (!t) return;
    let n = ((u = (p = t.items).get) == null ? void 0 : u.call(p, s)) ?? ((y = (m = t.items.contents) == null ? void 0 : m.find) == null ? void 0 : y.call(m, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((o = n.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((r = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : r.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(f);
    await a.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
X(W, "PARTS", foundry.utils.mergeObject(
  U(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
X(W, "BODY_PART_BY_SKILL", {
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
let ht = W;
function li(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ss, Ts, Ds, _s;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, a, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const a = await super.render(s, e), d = this.element, p = this.form ?? this.element, u = f.scrollState, m = f.focus, y = typeof (u == null ? void 0 : u.formScrollTop) == "number" || typeof (u == null ? void 0 : u.windowScrollTop) == "number", o = () => {
      var i, c;
      if (this._applyScrollState(d, u), (m == null ? void 0 : m.name) != null || (m == null ? void 0 : m.id) != null) {
        const l = ((i = p.querySelector) == null ? void 0 : i.call(p, m.id ? `#${CSS.escape(m.id)}` : null)) ?? (m.name ? (c = p.querySelector) == null ? void 0 : c.call(p, `[name="${CSS.escape(m.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = m.selectionStart ?? 0, l.selectionEnd = m.selectionEnd ?? m.selectionStart ?? 0));
      }
      this._applyScrollState(d, u);
    };
    return (y || m) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), a;
  }
  async _prepareContext(s) {
    var Qe, Je, Ze, It, We, Ae, de, St, Pe, Ee, Ft, Ce, $e, Tt, Dt, et, _t, tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Qe = this.actor) == null ? void 0 : Qe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Je = e.system) == null ? void 0 : Je.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, a = (Ae = (We = t == null ? void 0 : t.statuses) == null ? void 0 : We.has) != null && Ae.call(We, "lookaround") ? 1 : 0, d = (St = (de = t == null ? void 0 : t.statuses) == null ? void 0 : de.has) != null && St.call(de, "halfcover") ? 3 : 0, p = (Ee = (Pe = t == null ? void 0 : t.statuses) == null ? void 0 : Pe.has) != null && Ee.call(Pe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + a + d + p;
    const u = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], m = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], o = (m.slotOrder ?? "").trim(), i = o ? o.split(/\s*,\s*/).filter((k) => y.includes(k)) : [], c = u.filter((k) => k.type === "Fegyver"), l = c.map((k) => ({ id: k.id, name: k.name, img: k.img })), r = "— Nincs fegyver —", g = i.length > 0 ? i : y, b = y.filter((k) => !g.includes(k)), w = [...g, ...b], S = w.filter((k) => {
      var x;
      const E = (((x = m[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return E && c.some((B) => B.id === E);
    });
    e.weaponSlots = S.map((k) => {
      const E = m[k] ?? {}, x = (E.itemId ?? "").trim(), B = l.find((ce) => ce.id === x), oe = c.find((ce) => ce.id === x), Q = (oe == null ? void 0 : oe.system) ?? {}, ye = Q.size === "thrown", me = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: k,
        itemId: x,
        displayName: (B == null ? void 0 : B.name) || E.name || r,
        img: (B == null ? void 0 : B.img) || "",
        isThrown: ye,
        rangeStr: me
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, O = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((k) => {
      var mt;
      const E = k.id;
      let x = null, B = {};
      for (const Ve of w)
        if ((((mt = m[Ve]) == null ? void 0 : mt.itemId) ?? "").trim() === E) {
          x = Ve, B = m[Ve] ?? {};
          break;
        }
      const oe = !!x, Q = (k == null ? void 0 : k.system) ?? {}, ye = typeof Q.range == "string" ? (Q.range || "").trim() : "", me = Q.type ?? "", ce = (T[me] ?? me) || "—", _e = Q.size ?? "", Me = (O[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = me === "projectile" || _e === "thrown", Ct = Q.quantity != null ? String(Q.quantity).trim() : "1", qt = String(Q.bonus ?? B.bonus ?? "").trim() || "0", Lt = (Q.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? r,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: ye || "—",
        typeAndSize: je,
        quantity: Ct,
        isProjectile: Ot,
        equipped: oe,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const F = u.filter((k) => k.type === "Pancel");
    e.armorTable = F.map((k) => {
      var B;
      const E = (k == null ? void 0 : k.system) ?? {}, x = ((B = k.system) == null ? void 0 : B.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: li((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const N = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], C = u.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var me, ce, _e, Me;
      const E = k.id;
      let x = null;
      for (const je of v)
        if ((((me = N[je]) == null ? void 0 : me.itemId) ?? "").trim() === E) {
          x = je;
          break;
        }
      const B = ((ce = k == null ? void 0 : k.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", Q = (((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.description) ?? "").trim(), ye = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: oe,
        description: ye,
        kp: Number((Me = k == null ? void 0 : k.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: B === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const _ = u.filter((k) => k.type === "Targy");
    e.itemsTable = _.map((k) => {
      const E = (k == null ? void 0 : k.system) ?? {}, x = (E.description ?? "").trim(), B = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: E.quantity != null ? String(E.quantity).trim() : "1",
        description: B
      };
    });
    const R = u.filter((k) => k.type === "Egyeb");
    e.egyebList = R.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), B = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: B
      };
    });
    const j = (((Dt = e.weaponsTable) == null ? void 0 : Dt.length) ?? 0) > 0 || (((et = e.armorTable) == null ? void 0 : et.length) ?? 0) > 0 || (((_t = e.microchipsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((tt = e.itemsTable) == null ? void 0 : tt.length) ?? 0) > 0 || (((st = e.egyebList) == null ? void 0 : st.length) ?? 0) > 0;
    e.showEquipmentDropZone = !j;
    const H = ((it = t == null ? void 0 : t.system) == null ? void 0 : it.abilities) ?? {}, G = u.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var E, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((E = k.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), Z = new Map(G.map((k) => [k.id, k])), V = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = V, e.abilityHatterSlot = V;
    const M = (k) => {
      const E = H[k];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, Y = (k) => (k || []).map((E) => {
      const x = Z.get(E);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Y(M("passive")), e.abilityActiveList = Y(M("active"));
    const re = t == null ? void 0 : t.id, Se = !!((rt = (nt = game.combat) == null ? void 0 : nt.combatants) != null && rt.some(
      (k) => {
        var E;
        return (((E = k.actor) == null ? void 0 : E.id) ?? k.actorId) === re;
      }
    ));
    e.showHarcSection = Se;
    const fe = ((at = e.system) == null ? void 0 : at.resources) ?? {}, Te = (ct = (ot = e.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.initiativeResult, ae = typeof Te == "number" ? Te : -1, ue = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (xe = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : ue).slice().sort((k, E) => k.min - E.min), Xe = 3;
    let De = He.length > 0 ? He : [];
    De.length < Xe && (De = [...De, ...Array(Xe - De.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = De.map((k, E) => ({
      ...k,
      isFirst: E === 0,
      isLast: E === De.length - 1
    }));
    let Be = 0;
    if (typeof ae == "number" && ae >= 0 && ne.length > 0) {
      const k = ne[0], E = ne[ne.length - 1];
      let x = null;
      ae <= k.max ? x = k : ae >= E.min ? x = E : x = ne.find((B) => ae >= B.min && ae <= B.max), x && (Be = x.kp);
    }
    const vt = ne.length > 0 ? ne[ne.length - 1] : null, kt = Math.min(10, vt ? vt.kp : 6), Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, kt)).map((k, E) => {
      const x = E + 1, B = !!Number(fe[k]), oe = x <= Be;
      return { index: x, used: B, usable: oe };
    }), wt = Math.ceil(Ge.length / 2);
    return e.kpDotsRow1 = Ge.slice(0, wt), e.kpDotsRow2 = Ge.slice(wt), e.canEditInitiative = !!((ut = game.user) != null && ut.isGM), e.showInitiativeResult = typeof Te == "number", e.initiativeResult = e.showInitiativeResult ? Te : "", e.speedUnitForSelect = ((Re = (dt = e.system) == null ? void 0 : dt.combat) == null ? void 0 : Re.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var u, m, y;
    super._attachFrameListeners(s);
    const e = ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (o) => {
      var l, r, g;
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const i = ((g = (r = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (o) => {
      var l, r, g;
      o.preventDefault();
      const i = (r = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (g = c == null ? void 0 : c.sheet) == null || g.render(!0);
    });
    const n = (o) => {
      var l, r;
      const i = (l = o == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), n(o.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), n(o.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (o) => {
      var r, g, b, w;
      o.preventDefault();
      const i = (g = (r = o.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : g.call(r, ".karakter-weapon-slot"), c = (((b = i == null ? void 0 : i.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (o) => {
      var r;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, c = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-Do8y1urf.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var l, r, g, b, w;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (c = (((((b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (o) => {
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-Do8y1urf.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (o) => {
      var r, g;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((g = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : g[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var g, b;
      o.preventDefault();
      const i = o.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.skill) ?? "").trim(), l = ((b = i == null ? void 0 : i.textContent) == null ? void 0 : b.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-Do8y1urf.mjs");
      r(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      var c, l;
      o.preventDefault();
      const i = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (o) => {
      var l, r;
      o.preventDefault();
      const i = (((r = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var b, w, S, T, O, F;
      if (o.preventDefault(), !o.altKey) return;
      const i = (w = (b = o.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : w.area, c = (T = (S = o.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, g = (Array.isArray((F = l[i]) == null ? void 0 : F.items) ? l[i].items.slice() : []).filter((N) => N !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: g }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      var c, l;
      if (o.preventDefault(), !o.altKey) return;
      const i = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      var b, w;
      if (o.preventDefault(), !o.altKey) return;
      const i = o.currentTarget, c = (((b = i == null ? void 0 : i.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, r = (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slotKey) ?? "").trim(), g = {};
      r && (g[`system.weapons.${r}.itemId`] = "", g[`system.weapons.${r}.name`] = "", g[`system.weapons.${r}.damage`] = "", g[`system.weapons.${r}.bonus`] = ""), Object.keys(g).length && await l.update(g), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      var c, l;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var g, b, w, S;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((b = (g = o.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((S = (w = this.actor.system) == null ? void 0 : w.gear) == null ? void 0 : S.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = c[T]) == null ? void 0 : O.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (o) => {
      var l, r;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((r = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (m = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : m.call(e, f)) == null || y.forEach((o) => {
      var i;
      (((i = o.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (o.draggable = !0);
    }), t.on("dragstart", f, (o) => {
      var g, b, w;
      const i = o.currentTarget, c = (b = (g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) == null ? void 0 : b.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const r = l.uuid;
      o.dataTransfer && (o.dataTransfer.setData("text/plain", r), o.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), o.dataTransfer.effectAllowed = "copyMove"), typeof ((w = o.dataTransfer) == null ? void 0 : w.setDragImage) == "function" && i && o.dataTransfer.setDragImage(i, 0, 0);
    });
    const a = this, d = (o) => {
      if (!o) return;
      const i = a._getFormDataForUpdate(o);
      Object.keys(i).length !== 0 && a.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, p = (o) => {
      var i, c, l;
      return o && (((c = (i = a.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, o)) || a.id && ((l = o.closest) == null ? void 0 : l.call(o, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (o) => {
      var g;
      const i = o.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!p(l)) return;
      const r = o.relatedTarget;
      r && (l.contains(r) || a.id && ((g = r.closest) != null && g.call(r, `#${CSS.escape(a.id)}`))) || d(l);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (o, i, c) => {
      var l;
      a.actor && ((l = o == null ? void 0 : o.parent) == null ? void 0 : l.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (o, i, c) => {
      var l;
      a.actor && ((l = o == null ? void 0 : o.parent) == null ? void 0 : l.id) === a.actor.id && a.render(!0);
    }, Hooks.on("updateItem", a._votvNpcItemUpdateHook), Hooks.on("deleteItem", a._votvNpcItemDeleteHook), a._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && await this.actor.update(a).catch((d) => console.warn("VoidNpcSheet save on preClose failed", d));
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
    var T, O, F, N, v;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, f = ((O = e.system) == null ? void 0 : O.skills) ?? {}, a = ((F = e.items) == null ? void 0 : F.filter((C) => C.type === "Fegyver")) ?? [];
    let d = null;
    n.itemId && (d = a.find((C) => C.id === n.itemId) ?? null);
    const p = d && d.name || n.name || "Fegyver", u = Number(n.bonus || 0) || 0, m = ((N = d == null ? void 0 : d.system) == null ? void 0 : N.type) || "kinetic", y = (((v = d == null ? void 0 : d.system) == null ? void 0 : v.skillKey) ?? "").trim(), o = y && f[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", i = Number(f[o] || 0) || 0, c = u + i, r = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, g = new Roll(r);
    await g.evaluate({ async: !0 });
    const { resultType: b, label: w } = xt(g), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: b, critLabel: w } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, u, m, y, o, i, c, l, r, g;
    const t = this.actor;
    if (!t) return;
    const n = ((u = (p = t.items).get) == null ? void 0 : u.call(p, s)) ?? ((y = (m = t.items.contents) == null ? void 0 : m.find) == null ? void 0 : y.call(m, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((o = n.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((r = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : r.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(f);
    await a.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _onDropItem(s, e) {
    var m, y, o, i, c, l, r, g, b, w, S, T, O, F, N, v, C;
    if (!this.actor) return (m = super._onDropItem) == null ? void 0 : m.call(this, s, e);
    const n = ((_) => {
      var j;
      if (!_) return null;
      const R = _.uuid ?? _.documentUuid ?? ((j = _.data) == null ? void 0 : j.uuid) ?? (typeof _ == "string" ? _ : null);
      if (R) return R;
      if (typeof _ == "object") {
        for (const H of Object.values(_))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    if (f.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const a = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      let _ = f.id;
      if (((l = f.parent) == null ? void 0 : l.id) !== a.id) {
        const Z = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        _ = ((r = (await a.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : r.id) ?? _;
      }
      const R = (((g = f.system) == null ? void 0 : g.kind) ?? "passive").toString(), j = ((b = a.system) == null ? void 0 : b.abilities) ?? {}, H = R === "active" ? "active" : "passive", G = Array.isArray((w = j[H]) == null ? void 0 : w.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      G.includes(_) || G.push(_), await a.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = f.parent) == null ? void 0 : S.id) === a.id) return;
    const d = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const u = (T = (await a.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : T.id;
    if (f.type === "Fegyver" && u) {
      const _ = ((O = a.system) == null ? void 0 : O.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((V) => R.includes(V)) : [];
      let G = R.find((V) => {
        var M;
        return !(((M = _[V]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((V) => !H.includes(V)) ?? "slot1");
      const Z = H.includes(G) ? H : [...H, G].filter((V) => R.includes(V));
      await a.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: u,
        [`system.weapons.${G}.name`]: f.name ?? "",
        [`system.weapons.${G}.damage`]: ((F = f.system) == null ? void 0 : F.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = f.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && u) {
      const _ = ((C = (v = a.system) == null ? void 0 : v.gear) == null ? void 0 : C.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = _[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      j && await a.update({
        [`system.gear.microchips.${j}.itemId`]: u,
        [`system.gear.microchips.${j}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var m, y, o, i, c, l;
    const e = (y = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: u,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var p, u, m, y, o, i;
    const e = (u = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : u.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const c = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        l > 0 && (f = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${a}
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
      let f;
      if (n.type === "checkbox")
        f = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        f = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const a = (n.value ?? "").trim();
        if (a === "") continue;
        f = Number(a) || 0;
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
X(se, "PARTS", foundry.utils.mergeObject(
  U(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(se, se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = U(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = U(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = U(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = se;
function di(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Os, Cs, qs, Ls;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, a, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const f = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (f) {
      d.scrollState = this._saveScrollState(f);
      const r = document.activeElement, g = a.contains(r), b = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      g && b && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const u = this.element, m = this.form ?? this.element, y = d.scrollState, o = d.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var r, g;
      if (this._applyScrollState(u, y), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const b = ((r = m.querySelector) == null ? void 0 : r.call(m, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (g = m.querySelector) == null ? void 0 : g.call(m, `[name="${CSS.escape(o.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = o.selectionStart ?? 0, b.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(u, y);
    };
    return (i || o) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (u) => {
      var m;
      return ((m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, u)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${u}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), a = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const d = Number(f == null ? void 0 : f.value) || 0, p = Number(a == null ? void 0 : a.value) || 0;
    n.textContent = String(d + p);
  }
  async _prepareContext(s) {
    var i, c, l, r, g, b, w, S, T, O, F, N;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((l = (c = e.system) == null ? void 0 : c.identity) == null ? void 0 : l.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, a = "— Nincs fegyver —", d = (((r = this.actor.items) == null ? void 0 : r.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = d.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = C.type ?? "", R = (n[_] ?? _) || "—", j = C.size ?? "", H = (f[j] ?? j) || "", G = [R, H].filter(Boolean).join(", ") || R || "—", Z = _ === "projectile" || j === "thrown", V = C.quantity != null ? String(C.quantity).trim() : "1", M = (typeof C.range == "string" ? (C.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? a,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: String(C.bonus ?? "").trim() || "0",
        damage: C.damage ?? "",
        rangeStr: M || "—",
        typeLabel: R,
        typeAndSize: G,
        quantity: V,
        quantityDisplay: Z ? V : "—",
        isProjectile: Z,
        equipped: !1,
        special: (C.special ?? "").trim() || "—"
      };
    });
    const p = (((g = this.actor.items) == null ? void 0 : g.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = p.map((v) => {
      var R;
      const C = (v == null ? void 0 : v.system) ?? {}, _ = !!((R = v.system) != null && R.equipped);
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (C.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (C.speedPenalty ?? "").toString().trim() || "—",
        level: di((C.level ?? "").toString().trim()),
        special: (C.special ?? C.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const u = (((b = this.actor.items) == null ? void 0 : b.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = u.map((v) => {
      var Z, V, M;
      const C = ((Z = v == null ? void 0 : v.system) == null ? void 0 : Z.abilityType) ?? "", _ = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—", R = C === "active", j = Number((V = v == null ? void 0 : v.system) == null ? void 0 : V.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, H = (((M = v == null ? void 0 : v.system) == null ? void 0 : M.description) ?? "").trim(), G = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: _,
        description: G,
        kp: j,
        isActive: R,
        slotKey: "",
        equipped: !1
      };
    });
    const m = (((w = this.actor.items) == null ? void 0 : w.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = m.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = (C.description ?? "").trim(), R = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", j = C.quantity != null ? String(C.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: j,
        description: R
      };
    });
    const y = (((S = e.weaponsTable) == null ? void 0 : S.length) ?? 0) > 0 || (((T = e.armorTable) == null ? void 0 : T.length) ?? 0) > 0 || (((O = e.microchipsTable) == null ? void 0 : O.length) ?? 0) > 0 || (((F = e.itemsTable) == null ? void 0 : F.length) ?? 0) > 0;
    e.showEquipmentDropZone = !y;
    const o = (((N = this.actor.items) == null ? void 0 : N.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = o.map((v) => {
      const _ = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), R = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: R
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
    t.on("click", ".jarmu-portrait-img", (p) => {
      var y, o, i;
      p.preventDefault(), p.stopPropagation();
      const u = ((i = (o = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (p) => {
      var y, o, i;
      p.preventDefault();
      const u = (o = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : o.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
      (i = m == null ? void 0 : m.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (p) => {
      var y, o;
      if (p.preventDefault(), !p.altKey) return;
      const u = (o = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : o.itemId;
      !u || !this.actor.items.get(u) || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".jarmu-item-quantity-input", async (p) => {
      var o;
      const u = p.currentTarget, m = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!m) return;
      const y = this.actor.items.get(m);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (u.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (p) => {
      var y, o;
      const u = (o = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : o.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
      !m || m.type !== "Pancel" || await m.update({ "system.equipped": p.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (p) => {
      var m, y, o, i;
      p.preventDefault();
      const u = (y = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : y.itemId;
      u && ((i = (o = this.actor.items.get(u)) == null ? void 0 : o.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (p) => {
      var m, y;
      if (p.preventDefault(), !p.altKey) return;
      const u = (y = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : y.itemId;
      u && await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".karakter-item-chat", async (p) => {
      var m, y;
      p.preventDefault();
      const u = (y = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : y.itemId;
      u && await this._postItemToChat(u);
    });
    const n = this, f = (p) => {
      if (!p) return;
      const u = n._getFormDataForUpdate(p);
      Object.keys(u).length !== 0 && n.actor.update(u).catch((m) => console.warn("VoidJarmuSheet save failed", m));
    }, a = (p) => {
      var u, m, y;
      return p && (((m = (u = n.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, p)) || n.id && ((y = p.closest) == null ? void 0 : y.call(p, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (p) => {
      var i;
      const u = p.target;
      if (!u || !u.form) return;
      const m = u.tagName;
      if (m !== "INPUT" && m !== "TEXTAREA" && m !== "SELECT") return;
      const y = u.form;
      if (!a(y)) return;
      const o = p.relatedTarget;
      o && (y.contains(o) || n.id && ((i = o.closest) != null && i.call(o, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", n._votvJarmuBlur, !0);
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
    var p, u, m;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((u = e.system) == null ? void 0 : u.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const o = Number(((m = e.system) == null ? void 0 : m.replaceCost) ?? 0) || 0;
        o > 0 && (f = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var p, u;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((p = e == null ? void 0 : e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
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
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((u = n.parent) == null ? void 0 : u.id) === f.id) return;
    const d = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [d]);
  }
};
X(ie, "PARTS", foundry.utils.mergeObject(
  U(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = ie;
const mi = [
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
const ge = class ge extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = mi, e;
  }
};
X(ge, "PARTS", foundry.utils.mergeObject(U(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ge, ge, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = U(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let jt = ge;
var Fs;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
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
X(he, "PARTS", foundry.utils.mergeObject(U(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(he, he, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Fs = U(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = he;
var As;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
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
X(be, "PARTS", foundry.utils.mergeObject(U(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(be, be, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = U(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = be;
var Ps;
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
    }, e._votvInput = (a) => {
      var u;
      const d = a.target;
      if ((d == null ? void 0 : d.name) === "name") return;
      const p = (d == null ? void 0 : d.form) ?? ((u = d == null ? void 0 : d.closest) == null ? void 0 : u.call(d, "form"));
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
X(ve, "PARTS", foundry.utils.mergeObject(U(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ps = U(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !0 })
}));
let Ut = ve;
var Es;
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
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
X(ke, "PARTS", foundry.utils.mergeObject(U(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Es = U(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !1 })
}));
let Ht = ke;
var $s;
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
    e._votvProfileImgClick = (a) => {
      var u, m, y, o, i, c, l;
      if (!e.isEditable || !((m = (u = a.target) == null ? void 0 : u.closest) != null && m.call(u, ".profile")) && ((o = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : o.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const d = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const d = e._getFormDataForUpdate(a);
      Object.keys(d).length !== 0 && e.document.update(d).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, f = (a) => {
      var d, p, u;
      return a && (((p = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, a)) || e.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var p, u, m;
      const d = ((p = a.target) == null ? void 0 : p.form) ?? ((m = (u = a.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      f(d) && n(d);
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
X(we, "PARTS", foundry.utils.mergeObject(U(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = U(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = we;
var xs;
const Ie = class Ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var p;
    super._attachFrameListeners(s);
    const e = this, t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", (u) => {
      var o, i, c, l;
      u.preventDefault();
      const m = (i = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : i.itemId;
      if (!m) return;
      const y = (c = game.items) == null ? void 0 : c.get(m);
      (l = y == null ? void 0 : y.sheet) == null || l.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (u) => {
      var y, o;
      u.preventDefault();
      const m = (o = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : o.itemId;
      m && await this._postAbilityToChat(m);
    }), n.on("click", ".karakter-ability-pill-remove", async (u) => {
      var c, l, r;
      if (u.preventDefault(), !u.altKey) return;
      const m = (l = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      if (!m) return;
      const y = this.document.system ?? {}, i = (Array.isArray((r = y.abilities) == null ? void 0 : r.items) ? y.abilities.items.slice() : []).filter((g) => g !== m);
      await this.document.update({ "system.abilities.items": i });
    });
    const f = (p = t == null ? void 0 : t.querySelector) == null ? void 0 : p.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (u) => {
      var m;
      u.preventDefault(), (m = u.currentTarget) == null || m.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", (u) => {
      var m;
      (m = u.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", (u) => {
      var m;
      (m = u.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const a = (u) => {
      if (!u) return;
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((y) => console.warn("VoidJarmuEgysegSheet save failed", y));
    }, d = (u) => {
      var m, y, o;
      return u && (((y = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : y.call(m, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var y, o, i;
      const m = ((y = u.target) == null ? void 0 : y.form) ?? ((i = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : i.call(o, "form"));
      d(m) && a(m);
    }, document.body.addEventListener("change", e._votvChange, !0);
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
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, f = Array.isArray(n.items) ? n.items : [], d = (await Promise.all(
      f.map(async (p) => {
        var u;
        if (!p) return null;
        try {
          const m = await fromUuid(p);
          if (m && (m.type === "Kepesseg" || m.type === "ability")) return m;
        } catch {
          const m = (u = game.items) == null ? void 0 : u.get(p);
          if (m && (m.type === "Kepesseg" || m.type === "ability")) return m;
        }
        return null;
      })
    )).filter((p) => !!p).map((p) => {
      var u;
      return {
        id: p.uuid ?? p.id,
        name: p.name,
        img: p.img,
        kp: Number(((u = p.system) == null ? void 0 : u.kp) ?? 0) || 0
      };
    });
    return e.system = t, e.abilityList = d, e;
  }
  async _postAbilityToChat(s) {
    var m, y, o, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((m = game.items) == null ? void 0 : m.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((o = e.system) == null ? void 0 : o.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: u,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var a, d, p, u;
    const n = ((m) => {
      var o;
      if (!m) return null;
      const y = m.uuid ?? m.documentUuid ?? ((o = m.data) == null ? void 0 : o.uuid) ?? (typeof m == "string" ? m : null);
      if (y) return y;
      if (typeof m == "object") {
        for (const i of Object.values(m))
          if (typeof i == "string" && i.includes(".") && i.startsWith("Item.")) return i;
      }
      return null;
    })(e);
    if (!n) return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (d = super._onDropItem) == null ? void 0 : d.call(this, s, e);
    if (f.type === "Kepesseg" || f.type === "ability") {
      const m = f.uuid ?? f.id, y = this.document.system ?? {}, o = Array.isArray((p = y.abilities) == null ? void 0 : p.items) ? y.abilities.items.slice() : [];
      o.includes(m) || o.push(m), await this.document.update({ "system.abilities.items": o });
      return;
    }
    return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
  }
};
X(Ie, "PARTS", foundry.utils.mergeObject(U(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ie, Ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
  template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
  width: 560,
  minWidth: 520,
  height: 480,
  form: foundry.utils.mergeObject(((xs = U(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = Ie;
const Rs = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Ms(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, a, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Wt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ei, CONFIG.Item.dataModels.MikroChip = ti, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ii, CONFIG.Item.dataModels.Egyeb = ri, CONFIG.Item.dataModels.Jarmuegyseg = oi, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (a = CONFIG.Combat).initiative ?? (a.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  }), Hooks.on("updateActor", (p, u, m, y) => {
    if ((p == null ? void 0 : p.type) !== "Karakter" || !(p != null && p.id)) return;
    const o = p.id;
    setTimeout(() => {
      var r, g, b, w;
      const i = (r = game.actors) == null ? void 0 : r.get(o);
      if (!i || i.type !== "Karakter") return;
      const c = ht.getTotalSpeedRaw(i), l = (g = i.effects) == null ? void 0 : g.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !l) {
        const S = ((w = (b = CONFIG.statusEffects) == null ? void 0 : b.find((T) => T.id === "immobilized")) == null ? void 0 : w.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var O, F;
          const T = ((O = canvas.tokens) == null ? void 0 : O.placeables) ?? [];
          for (const N of T)
            ((F = N == null ? void 0 : N.document) == null ? void 0 : F.actorId) === o && typeof N.draw == "function" && N.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else c > 0 && l && l.delete().then(() => {
        var T, O;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const F of S)
          ((O = F == null ? void 0 : F.document) == null ? void 0 : O.actorId) === o && typeof F.draw == "function" && F.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (p, u, m, y) => {
    var T, O, F, N, v, C, _, R, j, H, G, Z, V;
    const o = p == null ? void 0 : p.id;
    if (!o) return;
    if ((p.type === "Karakter" || p.type === "Npc") && ((T = u == null ? void 0 : u.system) != null && T.combat) && "initiativeResult" in u.system.combat) {
      const M = Number((F = (O = p.system) == null ? void 0 : O.combat) == null ? void 0 : F.initiativeResult), Y = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Se = ((N = re.combatants) == null ? void 0 : N.contents) ?? Array.from(re.combatants ?? []);
        for (const fe of Se)
          if (((v = fe.actor) == null ? void 0 : v.id) === o || fe.actorId === o) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: fe.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (p.type === "Npc" && ((C = u == null ? void 0 : u.system) != null && C.identity) && "size" in u.system.identity) {
      const M = Ms((R = (_ = p.system) == null ? void 0 : _.identity) == null ? void 0 : R.size);
      p.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", p.name, Y));
    }
    const i = document.activeElement, c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), l = [], r = (j = game.actors) == null ? void 0 : j.get(o);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of g) {
      if (((H = M.document) == null ? void 0 : H.id) !== o || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const Y = (Z = M.constructor) == null ? void 0 : Z.name;
      Y !== "VoidKarakterSheet" && Y !== "VoidJarmuSheet" || l.includes(M) || l.push(M);
    }
    if (c && l.some((M) => {
      const Y = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return Y && Y.contains(i);
    })) return;
    const w = (V = game.votv) == null ? void 0 : V._lastKarakterSheetBlurSave, S = w && Date.now() - w.at < s ? w.appId : null;
    setTimeout(() => {
      for (const M of l)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (p, u, m, y) => {
    var l, r, g;
    const o = p == null ? void 0 : p.parent;
    if (!o || o.documentName !== "Actor" || o.type !== "Karakter" || p.type !== "Fegyver") return;
    const i = ((l = o.system) == null ? void 0 : l.weapons) ?? {}, c = {};
    for (const [b, w] of Object.entries(i)) {
      if (!b.startsWith("slot")) continue;
      const S = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !S || S !== p.id || (c[`system.weapons.${b}.name`] = p.name ?? "", c[`system.weapons.${b}.damage`] = ((r = p.system) == null ? void 0 : r.damage) ?? "", c[`system.weapons.${b}.bonus`] = ((g = p.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(c).length && o.update(c);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var g, b, w, S, T, O, F, N, v, C, _, R, j, H, G, Z, V, M, Y, re, Se, fe, Te;
    const t = (b = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : b.call(g, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (w = game.messages) == null ? void 0 : w.get(n), a = (T = (S = f == null ? void 0 : f.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!a) return;
    const d = a.actorId ?? ((O = f == null ? void 0 : f.speaker) == null ? void 0 : O.actor) ?? "";
    if (!d) return;
    e.preventDefault(), e.stopPropagation();
    let p = ((F = game.actors) == null ? void 0 : F.get(a.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(d));
    if (p || (p = ((C = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : C.flatMap((ue) => {
      var Fe;
      return ((Fe = ue.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((ue) => ue.actor).find((ue) => ue && (ue.id === d || ue.id === a.actorId))) ?? null), !p) return;
    const u = a.itemId ? ((R = (_ = p.items) == null ? void 0 : _.get) == null ? void 0 : R.call(_, a.itemId)) ?? ((G = (H = (j = p.items) == null ? void 0 : j.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ae) => ae.id === a.itemId)) : null;
    let m = (a.damageFormula ?? "").trim();
    if (m || (m = (((Z = u == null ? void 0 : u.system) == null ? void 0 : Z.damage) ?? "").trim()), !m && a.slotKey && (m = (((((V = p.system) == null ? void 0 : V.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !m) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((re = (Y = game.i18n) == null ? void 0 : Y.localize) == null ? void 0 : re.call(Y, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(m);
    await y.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = a.targetName || "", c = a.hitLocationName || "", l = ((u == null ? void 0 : u.name) ?? (a.slotKey ? ((Te = (((fe = p.system) == null ? void 0 : fe.weapons) ?? {})[a.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (r += ` (${c})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: p }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, d, p, u, m, y;
      if (!((d = (a = e.target) == null ? void 0 : a.closest) != null && d.call(a, "#actors"))) return;
      const t = (u = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : u.call(p, "[data-document-id]"), n = (m = t == null ? void 0 : t.getAttribute) == null ? void 0 : m.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, a;
    const e = ((t = game.actors) == null ? void 0 : t.filter((d) => d.type === "Karakter")) ?? [];
    for (const d of e) {
      const p = ht.getTotalSpeedRaw(d), u = (n = d.effects) == null ? void 0 : n.find((m) => m.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (p <= 0 && !u) {
        const m = ((a = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : a.img) ?? "";
        await d.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: m,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: d.uuid
        }]).catch(() => {
        });
      } else p > 0 && u && await u.delete().catch(() => {
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
        background: { src: Rs },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await n.create(f);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var a, d, p, u, m, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((o) => o.type === "Karakter")) ?? [];
    for (const o of t)
      try {
        const i = o.prototypeToken, c = ((d = i == null ? void 0 : i.bar1) == null ? void 0 : d.attribute) ?? "", l = ((p = i == null ? void 0 : i.bar2) == null ? void 0 : p.attribute) ?? "";
        (c || l) && await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((u = o.tokens) == null ? void 0 : u.filter((c) => {
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
    }, f = ((m = game.actors) == null ? void 0 : m.filter((o) => o.type === "Npc")) ?? [];
    for (const o of f)
      try {
        await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((y = o.tokens) == null ? void 0 : y.filter((c) => {
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
Hooks.on("preCreateToken", (I, s, e) => {
  var a, d, p, u;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (d = game.actors) == null ? void 0 : d.get(n) : null;
  if (f) {
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
      const m = Ms((u = (p = f.system) == null ? void 0 : p.identity) == null ? void 0 : u.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: m,
        height: m
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
const pi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function js(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(pi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || js(I);
});
function Ks() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], a = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const d of a)
      !d || I.has(d.id) || (I.add(d.id), typeof d.render == "function" && d.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Ks, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && js(I), setTimeout(Ks, 0);
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
    const a = s[0] ?? s;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Rs,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var u, m, y, o;
  const t = ((u = I.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, a = t.weaponAttack, d = t.weapon;
  if (!n && !f && !a) return;
  const p = (m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, ".dice-roll");
  if (p) {
    if (n && p.classList.add(`votv-${n}`), f) {
      const i = p.querySelector(".votv-crit-label");
      if (i)
        i.textContent = f;
      else {
        const c = p.querySelector(".dice-total"), l = (c == null ? void 0 : c.parentElement) ?? p, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = f, l.appendChild(r);
      }
    }
    if (a && d && (d.actorId || (y = I.speaker) != null && y.actor)) {
      const i = p.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? p;
      if (!p.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const g = !!d.isHit, b = d.targetName || "Célpont";
        r.textContent = g ? `Találat – ${b}` : `Nem talált – ${b}`, c.appendChild(r);
      }
      if (d.isHit && !p.querySelector(".votv-weapon-damage-chat")) {
        const g = document.createElement("button");
        g.type = "button", g.className = "votv-weapon-damage-chat";
        const b = d.hitLocationRoll, w = d.hitLocationName;
        g.textContent = b != null && w ? `Sebzés (Találati Hely ${b} - ${w})` : "Sebzés", g.dataset.actorId = String(d.actorId ?? ((o = I.speaker) == null ? void 0 : o.actor) ?? ""), g.dataset.itemId = String(d.itemId ?? ""), g.dataset.slotKey = String(d.slotKey ?? ""), g.dataset.targetName = String(d.targetName ?? ""), g.dataset.hitLocationName = String(d.hitLocationName ?? ""), g.dataset.messageId = String(I.id ?? ""), c.appendChild(g);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-Bb6MGyjG.mjs.map
