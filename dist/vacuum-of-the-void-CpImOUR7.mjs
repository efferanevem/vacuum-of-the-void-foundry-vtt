var Us = Object.defineProperty;
var Hs = Object.getPrototypeOf;
var Bs = Reflect.get;
var Gs = (I, s, e) => s in I ? Us(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var Y = (I, s, e) => Gs(I, typeof s != "symbol" ? s + "" : s, e);
var U = (I, s, e) => Bs(Hs(I), e, s);
const { HTMLField: Vs, NumberField: A, SchemaField: z, StringField: D, BooleanField: te, ArrayField: yt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
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
        biography: new Vs({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Pt, SchemaField: Ws } = foundry.data.fields;
class Js extends Vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ws({
        body: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Ys, StringField: ms } = foundry.data.fields;
class Xs extends Vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Ys({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new ms({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new ms({ required: !1, blank: !0, initial: "" })
      })
    };
  }
}
const { BooleanField: Qs, NumberField: yi, StringField: Ne } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Qs({ required: !1, initial: !1 }),
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
  const m = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let c = i;
    for (const l of a) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        m(l.terms, c);
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
  m(I.terms, 1);
  const o = s.filter((a) => a === 6).length, u = s.filter((a) => a === 1).length, d = e.filter((a) => a === 6).length, p = t.filter((a) => a === 6).length, f = o + d, y = u + p;
  return f > 0 && f === y ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function ci(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var vs, ks, ws, Is;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, m, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const m = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (m) {
      u.scrollState = this._saveScrollState(m);
      const r = document.activeElement, g = o.contains(r), b = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      g && b && (u.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const p = this.element, f = this.form ?? this.element, y = u.scrollState, a = u.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var r, g;
      if (this._applyScrollState(p, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const b = ((r = f.querySelector) == null ? void 0 : r.call(f, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (g = f.querySelector) == null ? void 0 : g.call(f, `[name="${CSS.escape(a.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = a.selectionStart ?? 0, b.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(p, y);
    };
    return (i || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), d;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const m = Math.floor(n / 3), o = Math.floor(2 * n / 3);
    return t <= m ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, m;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((m = o.system) == null ? void 0 : m.speedPenalty) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, m;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((m = o.system) == null ? void 0 : m.protectionBonus) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, m;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let t = 0;
    for (const o of e) {
      const u = String(((m = o.system) == null ? void 0 : m.speedPenalty) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, y, a, i, c, l, r, g, b;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, m = V._healthStatusFromRatio(n, t);
    if (m === 0) return 0;
    const o = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let u;
    m === 1 ? u = -6 : m === 2 ? u = -3 : u = o, u += V._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((r = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : r.speed) ?? 0) || 0, p = Number(((b = (g = s.system) == null ? void 0 : g.combat) == null ? void 0 : b.speedBonus) ?? 0) || 0;
    return d + p + (Number.isFinite(u) ? u : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : V.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, a, i, c, l, r, g, b, w, S, T, O;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : r.resources) ?? {}, m = ((b = (g = n.hitLocations) == null ? void 0 : g.legs) == null ? void 0 : b.value) ?? 0, o = ((w = n.currentHealth) == null ? void 0 : w.legs) ?? 0, u = V._healthStatusFromRatio(o, m), d = Number(((O = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : O.givenSpeed) ?? 0) || 0;
    let p;
    u === 0 ? p = 0 : u === 1 ? p = -6 : u === 2 ? p = -3 : p = d;
    const f = this._getTotalArmorSpeedPenalty();
    p += f, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var p, f, y, a, i, c, l, r, g, b, w, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, m = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, o = (b = (g = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : g.has) != null && b.call(g, "halfcover") ? 3 : 0, u = (T = (S = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + m + o + u;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), m = t(".karakter-given-defense-effective"), o = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(o == null ? void 0 : o.value) || 0, p = Number(u == null ? void 0 : u.value) || 0, f = Number(m == null ? void 0 : m.textContent) || 0;
    n.textContent = String(d + p + f);
  }
  _writeTotalSpeed(s = null) {
    var l, r, g, b, w, S, T, O;
    const e = s ?? this.form ?? this.element, t = (F) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, F)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${F}`) : null);
    }, n = t(".karakter-total-speed-effective"), m = t(".karakter-given-speed-effective"), o = t('input[name="system.combat.speed"]'), u = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((g = (r = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : r.has) != null && g.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((w = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : w.resources) ?? {}, p = ((T = (S = d.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((O = d.currentHealth) == null ? void 0 : O.legs) ?? 0;
    if (V._healthStatusFromRatio(f, p) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(o == null ? void 0 : o.value) || 0, i = Number(u == null ? void 0 : u.value) || 0, c = Number(m == null ? void 0 : m.textContent) || 0;
    n.textContent = String(a + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, u, d, p;
    const e = V.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, n = ((d = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : d.value) ?? 0, m = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return V._healthStatusFromRatio(m, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, d, p, f;
    const t = V.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, m = ((p = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : p.value) ?? 0, o = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return V._healthStatusFromRatio(o, m);
  }
  async _prepareContext(s) {
    var tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re, k, E, x, B, oe, X, ye, me, ce, _e, Me, je, Ot, Ct, qt, Lt, mt, We, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((it = (st = (tt = this.actor.system) == null ? void 0 : tt.resources) == null ? void 0 : st.stress) == null ? void 0 : it.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, m = n.hitLocations ?? {}, o = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const h of u) {
      const L = ((nt = m[h]) == null ? void 0 : nt.value) ?? 0, q = o[h] ?? 0;
      e.computedHealthStatus[h] = V._healthStatusFromRatio(q, L);
    }
    const d = (Number(o.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((h) => (Number(o[h]) || 0) === 0).length;
    e.showDeathSkull = d || f >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
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
    y === 0 && (O = 0), (me = (ye = (X = this.actor) == null ? void 0 : X.statuses) == null ? void 0 : ye.has) != null && me.call(ye, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), O = 0), e.totalSpeed = O;
    const F = V.BODY_PART_BY_SKILL;
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
      for (let Je = 0; Je < _.length; Je++) {
        const ft = _[Je];
        if ((((Oe = N[ft]) == null ? void 0 : Oe.itemId) ?? "") === h.id) {
          P = Je + 1, K = ((ze = N[ft]) == null ? void 0 : ze.bonus) ?? "", ee = ft;
          break;
        }
      }
      let Q = null;
      q && (H === h.id ? Q = "slot1" : G === h.id ? Q = "slot2" : Z === h.id && (Q = "slot3"));
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
        microchipSlotKey: Q,
        isEquipped: !!(ee || Q),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: pe,
        quantity: Number(((pt = h.system) == null ? void 0 : pt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const J = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((h) => h.type === "Fegyver"), re = J.map((h) => ({ id: h.id, name: h.name, img: h.img }));
    e.weaponItems = re;
    const Se = "— Nincs fegyver —", fe = _.filter((h) => {
      const q = ((N[h] ?? {}).itemId ?? "").trim();
      return q ? !!J.find((K) => K.id === q) : !1;
    });
    e.weaponSlots = fe.map((h, L) => {
      const q = N[h] ?? {}, P = (q.itemId ?? "").trim(), K = re.find((pe) => pe.id === P), ee = J.find((pe) => pe.id === P), Q = (ee == null ? void 0 : ee.system) ?? {}, Ke = Q.size === "thrown", le = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
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
    e.weaponsTable = J.map((h) => {
      var ls, us, ds;
      const L = h.id;
      let q = null, P = {};
      for (const At of _)
        if ((((ls = N[At]) == null ? void 0 : ls.itemId) ?? "").trim() === L) {
          q = At, P = N[At] ?? {};
          break;
        }
      const K = !!q, ee = ((us = h.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = h.system) == null ? void 0 : ds.equipped) !== null ? !!h.system.equipped : K, Q = (h == null ? void 0 : h.system) ?? {}, Ke = typeof Q.range == "string" ? (Q.range || "").trim() : "", le = Q.type ?? "", pe = (Te[le] ?? le) || "—", Oe = Q.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [pe, ze].filter(Boolean).join(", ") || pe || "—", qe = le === "projectile" || Oe === "thrown", Le = Q.quantity, pt = Le != null ? String(Le).trim() : "1", Je = String(P.bonus ?? "").trim(), ft = String(Q.bonus ?? "").trim(), zs = Je || ft || "0";
      return {
        slotKey: q ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? Se,
        img: (h == null ? void 0 : h.img) ?? "",
        bonus: zs,
        damage: P.damage ?? Q.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: pe,
        typeAndSize: Ue,
        quantity: pt,
        quantityDisplay: qe ? pt : "—",
        isProjectile: qe,
        equipped: ee,
        special: (Q.special ?? "").trim() || "—"
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
    const He = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((h) => h.type === "Egyeb");
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
    const bt = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((h) => h.type === "MikroChip"), ne = bt.map((h) => ({ id: h.id, name: h.name, img: h.img })), Ye = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (h) => {
      var q, P, K;
      const L = [];
      return h !== 1 && L.push((((q = j.slot1) == null ? void 0 : q.itemId) ?? "").trim()), h !== 2 && L.push((((P = j.slot2) == null ? void 0 : P.itemId) ?? "").trim()), h !== 3 && L.push((((K = j.slot3) == null ? void 0 : K.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((h) => !Be(1).includes(h.id)), e.microchipItemsSlot2 = ne.filter((h) => !Be(2).includes(h.id)), e.microchipItemsSlot3 = ne.filter((h) => !Be(3).includes(h.id)), e.microchipSlots = De.map((h) => {
      const L = j[h] ?? {}, q = (L.itemId ?? "").trim(), P = bt.find((K) => K.id === q);
      return {
        slotKey: h,
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || Ye,
        img: (P == null ? void 0 : P.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((h) => {
      const L = `slot${h}`, q = j[L] ?? {}, P = (q.itemId ?? "").trim(), K = ne.find((ee) => ee.id === P);
      e[`microchip${h}ItemId`] = P, e[`microchip${h}DisplayName`] = (K == null ? void 0 : K.name) || q.name || Ye, e[`microchip${h}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = bt.map((h) => {
      var Oe, ze, Ue, qe;
      const L = h.id;
      let q = null;
      for (const Le of De)
        if ((((Oe = j[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === L) {
          q = Le;
          break;
        }
      const P = !!q, K = ((ze = h == null ? void 0 : h.system) == null ? void 0 : ze.abilityType) ?? "", ee = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", Q = K === "active", Ke = Number((Ue = h == null ? void 0 : h.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(h.system.replaceCost) : 0, le = (((qe = h == null ? void 0 : h.system) == null ? void 0 : qe.description) ?? "").trim(), pe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (h == null ? void 0 : h.name) ?? "—",
        img: (h == null ? void 0 : h.img) ?? "",
        typeLabel: ee,
        description: pe,
        kp: Ke,
        isActive: Q,
        slotKey: q ?? "",
        equipped: P
      };
    });
    const vt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Wt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((h) => {
      var L, q, P;
      return {
        id: h.id,
        name: h.name,
        img: h.img,
        kind: ((L = h.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((q = h.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((P = h.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Ge = new Map(Wt.map((h) => [h.id, h])), wt = "— Nincs képesség —", Xe = (h) => {
      const L = kt[h] ?? {}, q = (L.itemId ?? "").trim(), P = q ? Ge.get(q) : null, K = (P == null ? void 0 : P.description) ?? "", ee = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || wt,
        img: (P == null ? void 0 : P.img) || "",
        description: K,
        kp: ee
      };
    };
    e.abilityFajiSlot = Xe("faji"), e.abilityHatterSlot = Xe("hatter");
    const Qe = (h) => {
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
    e.abilityPassiveList = Ze(Qe("passive")), e.abilityActiveList = Ze(Qe("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, de = typeof Ae == "number" ? Ae : -1, St = [
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
    e.kpDots = Ve.map((h, L) => {
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
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-CyJh-Bd2.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-CyJh-Bd2.mjs");
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
    const m = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    m && n({ currentTarget: m });
    const o = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', o), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
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
      const c = i.currentTarget, l = c.dataset.skill, r = ((b = c.textContent) == null ? void 0 : b.trim()) || l, { openRollSheetForSkill: g } = await import("./roll-sheet-CyJh-Bd2.mjs");
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
    const u = (i, c) => {
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
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
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
    const d = this, p = (i) => {
      var r, g, b, w;
      if (!i) return;
      const c = d._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((g = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : g.currentHealth) != null || ((w = (b = c.system) == null ? void 0 : b.resources) == null ? void 0 : w.hitLocations) != null;
      d.actor.update(c).then(() => {
        l && setTimeout(() => d.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var c, l, r;
      return i && (((l = (c = d.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, i)) || d.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var b;
      const c = i.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const r = c.form;
      if (!f(r)) return;
      const g = i.relatedTarget;
      g && (r.contains(g) || d.id && ((b = g.closest) != null && b.call(g, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(r));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, d, p;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      f.type === "checkbox" ? y = f.checked : f.type === "number" ? y = f.value === "" ? 0 : Number(f.value) : y = f.value ?? "", foundry.utils.setProperty(e, f.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, m = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const f of o) {
      const y = ((p = n[f]) == null ? void 0 : p.value) ?? 0, a = m[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, V._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, m, o, u, d, p, f, y, a, i, c;
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
            g = ((m = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : m.id) ?? g;
          }
          const b = (((o = r.system) == null ? void 0 : o.kind) ?? "passive").toString(), w = this.actor.system.abilities ?? {};
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
          const S = b === "active" ? "active" : "passive", T = Array.isArray((u = w[S]) == null ? void 0 : u.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
          T.includes(g) || T.push(g), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((d = e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
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
          const g = this.actor, b = ((p = r.parent) == null ? void 0 : p.id) !== g.id;
          let w = r.id;
          if (b) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            w = ((f = (await g.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? w;
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
          if (((a = r.parent) == null ? void 0 : a.id) !== g.id) {
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
    var m, o, u;
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, d, p, f, y, a;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const m = await fromUuid(n.uuid);
    if (!m || m.type !== "Fegyver") return;
    if (((f = m.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(m.toObject(), { system: { ...m.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const o = m.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: m.name,
      [`system.weapons.${e}.damage`]: ((y = m.system) == null ? void 0 : y.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = m.system) == null ? void 0 : a.bonus) ?? ""
    }), await m.update({ "system.equipped": !0 });
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
    var p, f;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const m = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, c = typeof a.sort == "number" ? a.sort : 0;
      return i - c;
    }).map((y) => y.id), o = m.indexOf(t), u = m.indexOf(e);
    if (o === -1 || u === -1) return;
    m.splice(o, 1), m.splice(u, 0, t);
    const d = m.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(s) {
    var n, m, o;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
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
    var d, p, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, m = "";
    if (e.type === "MikroChip") {
      const y = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        a > 0 && (m = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${m}
      ${o}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, m = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = m ? `<p>${m}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var n, m;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    var o, u, d;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let m = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      m = ((d = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : d.id) ?? m;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: m,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var d, p, f, y;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let m = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      m = ((f = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : f.id) ?? m;
    }
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((y = o[e]) == null ? void 0 : y.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(m) || u.push(m), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var m, o, u;
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, d, p, f, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const m = await fromUuid(n.uuid);
    if (!m || m.type !== "MikroChip") return;
    let o = m.id;
    ((f = m.parent) == null ? void 0 : f.id) !== this.actor.id && (o = ((y = (await this.actor.createEmbeddedDocuments("Item", [m.toObject()]))[0]) == null ? void 0 : y.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: m.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let m = Number(n) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? m -= 6 : o === 2 && (m -= 3);
    const d = `3d6${m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""}`, p = new Roll(d);
    await p.evaluate({ async: !0 });
    const { resultType: f, label: y } = xt(p), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: y } },
      rollMode: a
    });
  }
  async _rollMorale() {
    var m;
    const s = Number(((m = this.actor.system.resources) == null ? void 0 : m.morale) ?? 0) || 0;
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
    var o;
    const s = Number(((o = this.actor.system.skills) == null ? void 0 : o.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
  async _rollWeapon(s) {
    var S, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, m = this.actor.items.filter((O) => O.type === "Fegyver");
    let o = null;
    t.itemId && (o = m.find((O) => O.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, p = ((S = o == null ? void 0 : o.system) == null ? void 0 : S.type) || "kinetic", f = (((T = o == null ? void 0 : o.system) == null ? void 0 : T.skillKey) ?? "").trim(), y = f && n[f] !== void 0 ? f : p === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = d + a, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(l);
    await r.evaluate({ async: !0 });
    const { resultType: g, label: b } = xt(r), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: b } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, p, f, y, a, i, c, l, r, g;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (d = t.items).get) == null ? void 0 : p.call(d, s)) ?? ((y = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : y.call(f, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let m = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!m && e && (m = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !m) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((r = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : r.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(m);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
Y(V, "PARTS", foundry.utils.mergeObject(
  U(V, V, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(V, V, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = U(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = U(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = U(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
Y(V, "BODY_PART_BY_SKILL", {
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
let ht = V;
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
    var n, m, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    let m = { scrollState: {}, focus: null };
    if (t) {
      m.scrollState = this._saveScrollState(t);
      const i = document.activeElement, c = n.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && l && (m.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const o = await super.render(s, e), u = this.element, d = this.form ?? this.element, p = m.scrollState, f = m.focus, y = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", a = () => {
      var i, c;
      if (this._applyScrollState(u, p), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const l = ((i = d.querySelector) == null ? void 0 : i.call(d, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (c = d.querySelector) == null ? void 0 : c.call(d, `[name="${CSS.escape(f.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = f.selectionStart ?? 0, l.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, p);
    };
    return (y || f) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), o;
  }
  async _prepareContext(s) {
    var Xe, Qe, Ze, It, Ve, Ae, de, St, Pe, Ee, Ft, Ce, $e, Tt, Dt, et, _t, tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Xe = this.actor) == null ? void 0 : Xe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, m = Number(n.givenProtection ?? 0) || 0, o = (Ae = (Ve = t == null ? void 0 : t.statuses) == null ? void 0 : Ve.has) != null && Ae.call(Ve, "lookaround") ? 1 : 0, u = (St = (de = t == null ? void 0 : t.statuses) == null ? void 0 : de.has) != null && St.call(de, "halfcover") ? 3 : 0, d = (Ee = (Pe = t == null ? void 0 : t.statuses) == null ? void 0 : Pe.has) != null && Ee.call(Pe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = m + o + u + d;
    const p = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (f.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((k) => y.includes(k)) : [], c = p.filter((k) => k.type === "Fegyver"), l = c.map((k) => ({ id: k.id, name: k.name, img: k.img })), r = "— Nincs fegyver —", g = i.length > 0 ? i : y, b = y.filter((k) => !g.includes(k)), w = [...g, ...b], S = w.filter((k) => {
      var x;
      const E = (((x = f[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return E && c.some((B) => B.id === E);
    });
    e.weaponSlots = S.map((k) => {
      const E = f[k] ?? {}, x = (E.itemId ?? "").trim(), B = l.find((ce) => ce.id === x), oe = c.find((ce) => ce.id === x), X = (oe == null ? void 0 : oe.system) ?? {}, ye = X.size === "thrown", me = (typeof X.range == "string" ? (X.range || "").trim() : "") || "—";
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
      for (const We of w)
        if ((((mt = f[We]) == null ? void 0 : mt.itemId) ?? "").trim() === E) {
          x = We, B = f[We] ?? {};
          break;
        }
      const oe = !!x, X = (k == null ? void 0 : k.system) ?? {}, ye = typeof X.range == "string" ? (X.range || "").trim() : "", me = X.type ?? "", ce = (T[me] ?? me) || "—", _e = X.size ?? "", Me = (O[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = me === "projectile" || _e === "thrown", Ct = X.quantity != null ? String(X.quantity).trim() : "1", qt = String(X.bonus ?? B.bonus ?? "").trim() || "0", Lt = (X.damage ?? B.damage ?? "").trim() || "";
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
        special: (X.special ?? "").trim() || "—"
      };
    });
    const F = p.filter((k) => k.type === "Pancel");
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
    const N = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], C = p.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var me, ce, _e, Me;
      const E = k.id;
      let x = null;
      for (const je of v)
        if ((((me = N[je]) == null ? void 0 : me.itemId) ?? "").trim() === E) {
          x = je;
          break;
        }
      const B = ((ce = k == null ? void 0 : k.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", X = (((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.description) ?? "").trim(), ye = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
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
    const _ = p.filter((k) => k.type === "Targy");
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
    const R = p.filter((k) => k.type === "Egyeb");
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
    const H = ((it = t == null ? void 0 : t.system) == null ? void 0 : it.abilities) ?? {}, G = p.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var E, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((E = k.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), Z = new Map(G.map((k) => [k.id, k])), W = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = W, e.abilityHatterSlot = W;
    const M = (k) => {
      const E = H[k];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, J = (k) => (k || []).map((E) => {
      const x = Z.get(E);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = J(M("passive")), e.abilityActiveList = J(M("active"));
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
    ], Fe = (xe = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : ue).slice().sort((k, E) => k.min - E.min), Ye = 3;
    let De = He.length > 0 ? He : [];
    De.length < Ye && (De = [...De, ...Array(Ye - De.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = De.map((k, E) => ({
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
    var p, f, y;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var l, r, g;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((g = (r = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var l, r, g;
      a.preventDefault();
      const i = (r = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (g = c == null ? void 0 : c.sheet) == null || g.render(!0);
    });
    const n = (a) => {
      var l, r;
      const i = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var r, g, b, w;
      a.preventDefault();
      const i = (g = (r = a.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : g.call(r, ".karakter-weapon-slot"), c = (((b = i == null ? void 0 : i.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var r;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, c = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-CyJh-Bd2.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var l, r, g, b, w;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (c = (((((b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CyJh-Bd2.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var r, g;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((g = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : g[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var g, b;
      a.preventDefault();
      const i = a.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.skill) ?? "").trim(), l = ((b = i == null ? void 0 : i.textContent) == null ? void 0 : b.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-CyJh-Bd2.mjs");
      r(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var c, l;
      a.preventDefault();
      const i = (l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var l, r;
      a.preventDefault();
      const i = (((r = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var b, w, S, T, O, F;
      if (a.preventDefault(), !a.altKey) return;
      const i = (w = (b = a.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : w.area, c = (T = (S = a.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, g = (Array.isArray((F = l[i]) == null ? void 0 : F.items) ? l[i].items.slice() : []).filter((N) => N !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: g }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var c, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var b, w;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, c = (((b = i == null ? void 0 : i.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, r = (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slotKey) ?? "").trim(), g = {};
      r && (g[`system.weapons.${r}.itemId`] = "", g[`system.weapons.${r}.name`] = "", g[`system.weapons.${r}.damage`] = "", g[`system.weapons.${r}.bonus`] = ""), Object.keys(g).length && await l.update(g), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var c, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var g, b, w, S;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((b = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : b.itemId) ?? "").trim();
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
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var l, r;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((r = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const m = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, m)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", m, (a) => {
      var g, b, w;
      const i = a.currentTarget, c = (b = (g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) == null ? void 0 : b.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const r = l.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", r), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((w = a.dataTransfer) == null ? void 0 : w.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const o = this, u = (a) => {
      if (!a) return;
      const i = o._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && o.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, d = (a) => {
      var i, c, l;
      return a && (((c = (i = o.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, a)) || o.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(o.id)}`)));
    };
    o._votvNpcBlur = (a) => {
      var g;
      const i = a.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!d(l)) return;
      const r = a.relatedTarget;
      r && (l.contains(r) || o.id && ((g = r.closest) != null && g.call(r, `#${CSS.escape(o.id)}`))) || u(l);
    }, document.body.addEventListener("blur", o._votvNpcBlur, !0), o._votvNpcItemHookRegistered || (o._votvNpcItemUpdateHook = (a, i, c) => {
      var l;
      o.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === o.actor.id && o.render(!0);
    }, o._votvNpcItemDeleteHook = (a, i, c) => {
      var l;
      o.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === o.actor.id && o.render(!0);
    }, Hooks.on("updateItem", o._votvNpcItemUpdateHook), Hooks.on("deleteItem", o._votvNpcItemDeleteHook), o._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, m;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const o = this._getFormDataForUpdate(e);
      Object.keys(o).length > 0 && await this.actor.update(o).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (m = super._preClose) == null ? void 0 : m.call(this, s);
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
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, m = ((O = e.system) == null ? void 0 : O.skills) ?? {}, o = ((F = e.items) == null ? void 0 : F.filter((C) => C.type === "Fegyver")) ?? [];
    let u = null;
    n.itemId && (u = o.find((C) => C.id === n.itemId) ?? null);
    const d = u && u.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, f = ((N = u == null ? void 0 : u.system) == null ? void 0 : N.type) || "kinetic", y = (((v = u == null ? void 0 : u.system) == null ? void 0 : v.skillKey) ?? "").trim(), a = y && m[y] !== void 0 ? y : f === "explosive" ? "grenadeUse" : "firearms", i = Number(m[a] || 0) || 0, c = p + i, r = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, g = new Roll(r);
    await g.evaluate({ async: !0 });
    const { resultType: b, label: w } = xt(g), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: b, critLabel: w } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, p, f, y, a, i, c, l, r, g;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (d = t.items).get) == null ? void 0 : p.call(d, s)) ?? ((y = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : y.call(f, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let m = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!m && e && (m = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !m) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((r = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : r.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(m);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, y, a, i, c, l, r, g, b, w, S, T, O, F, N, v, C;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
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
    const m = await fromUuid(n);
    if (!m || m.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (m.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const o = this.actor;
    if (m.type === "Kepesseg" || m.type === "ability") {
      let _ = m.id;
      if (((l = m.parent) == null ? void 0 : l.id) !== o.id) {
        const Z = foundry.utils.mergeObject(m.toObject(), { type: "Kepesseg" });
        _ = ((r = (await o.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : r.id) ?? _;
      }
      const R = (((g = m.system) == null ? void 0 : g.kind) ?? "passive").toString(), j = ((b = o.system) == null ? void 0 : b.abilities) ?? {}, H = R === "active" ? "active" : "passive", G = Array.isArray((w = j[H]) == null ? void 0 : w.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      G.includes(_) || G.push(_), await o.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = m.parent) == null ? void 0 : S.id) === o.id) return;
    const u = m.toObject();
    m.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), m.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (T = (await o.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : T.id;
    if (m.type === "Fegyver" && p) {
      const _ = ((O = o.system) == null ? void 0 : O.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((W) => R.includes(W)) : [];
      let G = R.find((W) => {
        var M;
        return !(((M = _[W]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((W) => !H.includes(W)) ?? "slot1");
      const Z = H.includes(G) ? H : [...H, G].filter((W) => R.includes(W));
      await o.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: m.name ?? "",
        [`system.weapons.${G}.damage`]: ((F = m.system) == null ? void 0 : F.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = m.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (m.type === "MikroChip" && p) {
      const _ = ((C = (v = o.system) == null ? void 0 : v.gear) == null ? void 0 : C.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = _[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      j && await o.update({
        [`system.gear.microchips.${j}.itemId`]: p,
        [`system.gear.microchips.${j}.name`]: m.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, y, a, i, c, l;
    const e = (y = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, m = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = m ? `<p>${m}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var d, p, f, y, a, i;
    const e = (p = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, m = "";
    if (e.type === "MikroChip") {
      const c = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        l > 0 && (m = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${m}
      ${o}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const n of s.elements) {
      if (!n.name || n.disabled || n.type === "radio" && !n.checked) continue;
      let m;
      if (n.type === "checkbox")
        m = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        m = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const o = (n.value ?? "").trim();
        if (o === "") continue;
        m = Number(o) || 0;
      } else
        m = n.value ?? "";
      m !== void 0 && foundry.utils.setProperty(e, n.name, m);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
Y(se, "PARTS", foundry.utils.mergeObject(
  U(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
    var n, m, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const m = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (m) {
      u.scrollState = this._saveScrollState(m);
      const r = document.activeElement, g = o.contains(r), b = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      g && b && (u.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const p = this.element, f = this.form ?? this.element, y = u.scrollState, a = u.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var r, g;
      if (this._applyScrollState(p, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const b = ((r = f.querySelector) == null ? void 0 : r.call(f, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (g = f.querySelector) == null ? void 0 : g.call(f, `[name="${CSS.escape(a.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = a.selectionStart ?? 0, b.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(p, y);
    };
    return (i || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (p) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, p)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${p}`) : null);
    }, n = t(".jarmu-total-defense-effective"), m = t('input[name="system.combat.defense"]'), o = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const u = Number(m == null ? void 0 : m.value) || 0, d = Number(o == null ? void 0 : o.value) || 0;
    n.textContent = String(u + d);
  }
  async _prepareContext(s) {
    var i, c, l, r, g, b, w, S, T, O, F, N;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((l = (c = e.system) == null ? void 0 : c.identity) == null ? void 0 : l.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, m = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, o = "— Nincs fegyver —", u = (((r = this.actor.items) == null ? void 0 : r.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = u.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = C.type ?? "", R = (n[_] ?? _) || "—", j = C.size ?? "", H = (m[j] ?? j) || "", G = [R, H].filter(Boolean).join(", ") || R || "—", Z = _ === "projectile" || j === "thrown", W = C.quantity != null ? String(C.quantity).trim() : "1", M = (typeof C.range == "string" ? (C.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? o,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: String(C.bonus ?? "").trim() || "0",
        damage: C.damage ?? "",
        rangeStr: M || "—",
        typeLabel: R,
        typeAndSize: G,
        quantity: W,
        quantityDisplay: Z ? W : "—",
        isProjectile: Z,
        equipped: !1,
        special: (C.special ?? "").trim() || "—"
      };
    });
    const d = (((g = this.actor.items) == null ? void 0 : g.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = d.map((v) => {
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
    const p = (((b = this.actor.items) == null ? void 0 : b.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = p.map((v) => {
      var Z, W, M;
      const C = ((Z = v == null ? void 0 : v.system) == null ? void 0 : Z.abilityType) ?? "", _ = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—", R = C === "active", j = Number((W = v == null ? void 0 : v.system) == null ? void 0 : W.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, H = (((M = v == null ? void 0 : v.system) == null ? void 0 : M.description) ?? "").trim(), G = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
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
    const f = (((w = this.actor.items) == null ? void 0 : w.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = f.map((v) => {
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
    const a = (((N = this.actor.items) == null ? void 0 : N.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = a.map((v) => {
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
    var u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (d) => {
      var y, a, i;
      d.preventDefault(), d.stopPropagation();
      const p = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var y, a, i;
      d.preventDefault();
      const p = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      const f = this.actor.items.get(p);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var y, a;
      if (d.preventDefault(), !d.altKey) return;
      const p = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !p || !this.actor.items.get(p) || await this.actor.deleteEmbeddedDocuments("Item", [p]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var a;
      const p = d.currentTarget, f = (a = p == null ? void 0 : p.dataset) == null ? void 0 : a.itemId;
      if (!f) return;
      const y = this.actor.items.get(f);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (p.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var y, a;
      const p = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      const f = this.actor.items.get(p);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var f, y, a, i;
      d.preventDefault();
      const p = (y = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      p && ((i = (a = this.actor.items.get(p)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var f, y;
      if (d.preventDefault(), !d.altKey) return;
      const p = (y = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      p && await this.actor.deleteEmbeddedDocuments("Item", [p]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var f, y;
      d.preventDefault();
      const p = (y = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      p && await this._postItemToChat(p);
    });
    const n = this, m = (d) => {
      if (!d) return;
      const p = n._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && n.actor.update(p).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, o = (d) => {
      var p, f, y;
      return d && (((f = (p = n.element) == null ? void 0 : p.contains) == null ? void 0 : f.call(p, d)) || n.id && ((y = d.closest) == null ? void 0 : y.call(d, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (d) => {
      var i;
      const p = d.target;
      if (!p || !p.form) return;
      const f = p.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const y = p.form;
      if (!o(y)) return;
      const a = d.relatedTarget;
      a && (y.contains(a) || n.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), m(y));
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
    var d, p, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, m = "";
    if (e.type === "MikroChip") {
      const y = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        a > 0 && (m = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${m}
      ${o}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var d, p;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((d = e == null ? void 0 : e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
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
    const m = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((p = n.parent) == null ? void 0 : p.id) === m.id) return;
    const u = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await m.createEmbeddedDocuments("Item", [u]);
  }
};
Y(ie, "PARTS", foundry.utils.mergeObject(
  U(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
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
Y(ge, "PARTS", foundry.utils.mergeObject(U(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Y(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ge, ge, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
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
Y(he, "PARTS", foundry.utils.mergeObject(U(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Y(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(he, he, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
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
Y(be, "PARTS", foundry.utils.mergeObject(U(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Y(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(be, be, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
    }, e._votvInput = (o) => {
      var p;
      const u = o.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const d = (u == null ? void 0 : u.form) ?? ((p = u == null ? void 0 : u.closest) == null ? void 0 : p.call(u, "form"));
      m(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(d), 300));
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
Y(ve, "PARTS", foundry.utils.mergeObject(U(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Y(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ve, ve, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
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
Y(ke, "PARTS", foundry.utils.mergeObject(U(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Y(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ke, ke, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (o) => {
      var p, f, y, a, i, c, l;
      if (!e.isEditable || !((f = (p = o.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((a = (y = o.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, m = (o) => {
      var u, d, p;
      return o && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, o)) || e.id && ((p = o.closest) == null ? void 0 : p.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var d, p, f;
      const u = ((d = o.target) == null ? void 0 : d.form) ?? ((f = (p = o.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      m(u) && n(u);
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
Y(we, "PARTS", foundry.utils.mergeObject(U(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Y(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(we, we, "DEFAULT_OPTIONS"), {
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
    var d, p, f;
    super._attachFrameListeners(s);
    const e = this, t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s, n = t ? $(t) : $([]);
    console.log("VOTV JarmuEgysegSheet _attachFrameListeners for", (d = this.document) == null ? void 0 : d.name, "id=", (p = this.document) == null ? void 0 : p.id), n.on("click", ".karakter-ability-open", (y) => {
      var c, l, r, g;
      y.preventDefault();
      const a = (l = (c = y.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      if (!a) return;
      const i = (r = game.items) == null ? void 0 : r.get(a);
      (g = i == null ? void 0 : i.sheet) == null || g.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (y) => {
      var i, c;
      y.preventDefault();
      const a = (c = (i = y.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.itemId;
      a && await this._postAbilityToChat(a);
    }), n.on("click", ".karakter-ability-pill-remove", async (y) => {
      var r, g, b;
      if (y.preventDefault(), !y.altKey) return;
      const a = (g = (r = y.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : g.itemId;
      if (!a) return;
      const i = this.document.system ?? {}, l = (Array.isArray((b = i.abilities) == null ? void 0 : b.items) ? i.abilities.items.slice() : []).filter((w) => w !== a);
      await this.document.update({ "system.abilities.items": l });
    });
    const m = (f = t == null ? void 0 : t.querySelector) == null ? void 0 : f.call(t, ".karakter-ability-area[data-area='abilities']");
    if (m && (m.addEventListener("dragover", (y) => {
      var a;
      y.preventDefault(), (a = y.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over");
    }), m.addEventListener("dragleave", (y) => {
      var a;
      (a = y.currentTarget) == null || a.classList.remove("karakter-ability-area-drag-over");
    }), m.addEventListener("drop", (y) => {
      var a;
      (a = y.currentTarget) == null || a.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const o = (y) => {
      if (!y) return;
      const a = e._getFormDataForUpdate(y);
      Object.keys(a).length !== 0 && e.document.update(a).catch((i) => console.warn("VoidJarmuEgysegSheet save failed", i));
    }, u = (y) => {
      var a, i, c;
      return y && (((i = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : i.call(a, y)) || e.id && ((c = y.closest) == null ? void 0 : c.call(y, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (y) => {
      var i, c, l;
      const a = ((i = y.target) == null ? void 0 : i.form) ?? ((l = (c = y.target) == null ? void 0 : c.closest) == null ? void 0 : l.call(c, "form"));
      u(a) && o(a);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, m = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext ids=", m);
    const u = (await Promise.all(
      m.map(async (d) => {
        var p;
        if (!d) return null;
        try {
          const f = await fromUuid(d);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (p = game.items) == null ? void 0 : p.get(d);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).filter((d) => !!d).map((d) => {
      var p;
      return {
        id: d.uuid ?? d.id,
        name: d.name,
        img: d.img,
        kp: Number(((p = d.system) == null ? void 0 : p.kp) ?? 0) || 0
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", u), e.system = t, e.abilityList = u, e;
  }
  async _postAbilityToChat(s) {
    var f, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, m = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = m ? `<p>${m}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var o, u, d, p;
    const t = (f) => {
      var a;
      if (!f) return null;
      const y = f.uuid ?? f.documentUuid ?? ((a = f.data) == null ? void 0 : a.uuid) ?? (typeof f == "string" ? f : null);
      if (y) return y;
      if (typeof f == "object") {
        for (const i of Object.values(f))
          if (typeof i == "string" && i.includes(".") && i.startsWith("Item.")) return i;
      }
      return null;
    };
    console.log("VOTV JarmuEgysegSheet _onDropItem raw data=", e);
    const n = t(e);
    if (console.log("VOTV JarmuEgysegSheet _onDropItem uuid=", n), !n) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const m = await fromUuid(n);
    if (console.log("VOTV JarmuEgysegSheet _onDropItem doc=", m == null ? void 0 : m.id, m == null ? void 0 : m.type), !m || m.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (m.type === "Kepesseg" || m.type === "ability") {
      const f = m.uuid ?? m.id, y = this.document.system ?? {}, a = Array.isArray((d = y.abilities) == null ? void 0 : d.items) ? y.abilities.items.slice() : [];
      a.includes(f) || a.push(f), console.log("VOTV JarmuEgysegSheet updating abilities.items to", a), await this.document.update({ "system.abilities.items": a });
      return;
    }
    return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
  }
};
Y(Ie, "PARTS", foundry.utils.mergeObject(U(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), Y(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ie, Ie, "DEFAULT_OPTIONS"), {
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
  var e, t, n, m, o, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Js, CONFIG.Actor.dataModels.Npc = Vt, CONFIG.Actor.dataModels.Jarmu = Xs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ei, CONFIG.Item.dataModels.MikroChip = ti, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ii, CONFIG.Item.dataModels.Egyeb = ri, CONFIG.Item.dataModels.Jarmuegyseg = oi, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (m = CONFIG.Actor).typeLabels ?? (m.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (o = CONFIG.Combat).initiative ?? (o.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  }), Hooks.on("updateActor", (d, p, f, y) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const a = d.id;
    setTimeout(() => {
      var r, g, b, w;
      const i = (r = game.actors) == null ? void 0 : r.get(a);
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
            ((F = N == null ? void 0 : N.document) == null ? void 0 : F.actorId) === a && typeof N.draw == "function" && N.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else c > 0 && l && l.delete().then(() => {
        var T, O;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const F of S)
          ((O = F == null ? void 0 : F.document) == null ? void 0 : O.actorId) === a && typeof F.draw == "function" && F.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, p, f, y) => {
    var T, O, F, N, v, C, _, R, j, H, G, Z, W;
    const a = d == null ? void 0 : d.id;
    if (!a) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((T = p == null ? void 0 : p.system) != null && T.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((F = (O = d.system) == null ? void 0 : O.combat) == null ? void 0 : F.initiativeResult), J = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Se = ((N = re.combatants) == null ? void 0 : N.contents) ?? Array.from(re.combatants ?? []);
        for (const fe of Se)
          if (((v = fe.actor) == null ? void 0 : v.id) === a || fe.actorId === a) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: fe.id, initiative: J }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((C = p == null ? void 0 : p.system) != null && C.identity) && "size" in p.system.identity) {
      const M = Ms((R = (_ = d.system) == null ? void 0 : _.identity) == null ? void 0 : R.size);
      d.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((J) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, J));
    }
    const i = document.activeElement, c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), l = [], r = (j = game.actors) == null ? void 0 : j.get(a);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of g) {
      if (((H = M.document) == null ? void 0 : H.id) !== a || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const J = (Z = M.constructor) == null ? void 0 : Z.name;
      J !== "VoidKarakterSheet" && J !== "VoidJarmuSheet" || l.includes(M) || l.push(M);
    }
    if (c && l.some((M) => {
      const J = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return J && J.contains(i);
    })) return;
    const w = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, S = w && Date.now() - w.at < s ? w.appId : null;
    setTimeout(() => {
      for (const M of l)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, p, f, y) => {
    var l, r, g;
    const a = d == null ? void 0 : d.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((l = a.system) == null ? void 0 : l.weapons) ?? {}, c = {};
    for (const [b, w] of Object.entries(i)) {
      if (!b.startsWith("slot")) continue;
      const S = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !S || S !== d.id || (c[`system.weapons.${b}.name`] = d.name ?? "", c[`system.weapons.${b}.damage`] = ((r = d.system) == null ? void 0 : r.damage) ?? "", c[`system.weapons.${b}.bonus`] = ((g = d.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(c).length && a.update(c);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var g, b, w, S, T, O, F, N, v, C, _, R, j, H, G, Z, W, M, J, re, Se, fe, Te;
    const t = (b = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : b.call(g, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const m = (w = game.messages) == null ? void 0 : w.get(n), o = (T = (S = m == null ? void 0 : m.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!o) return;
    const u = o.actorId ?? ((O = m == null ? void 0 : m.speaker) == null ? void 0 : O.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((F = game.actors) == null ? void 0 : F.get(o.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(u));
    if (d || (d = ((C = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : C.flatMap((ue) => {
      var Fe;
      return ((Fe = ue.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((ue) => ue.actor).find((ue) => ue && (ue.id === u || ue.id === o.actorId))) ?? null), !d) return;
    const p = o.itemId ? ((R = (_ = d.items) == null ? void 0 : _.get) == null ? void 0 : R.call(_, o.itemId)) ?? ((G = (H = (j = d.items) == null ? void 0 : j.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ae) => ae.id === o.itemId)) : null;
    let f = (o.damageFormula ?? "").trim();
    if (f || (f = (((Z = p == null ? void 0 : p.system) == null ? void 0 : Z.damage) ?? "").trim()), !f && o.slotKey && (f = (((((W = d.system) == null ? void 0 : W.weapons) ?? {})[o.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((re = (J = game.i18n) == null ? void 0 : J.localize) == null ? void 0 : re.call(J, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(f);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = o.targetName || "", c = o.hitLocationName || "", l = ((p == null ? void 0 : p.name) ?? (o.slotKey ? ((Te = (((fe = d.system) == null ? void 0 : fe.weapons) ?? {})[o.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (r += ` (${c})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var o, u, d, p, f, y;
      if (!((u = (o = e.target) == null ? void 0 : o.closest) != null && u.call(o, "#actors"))) return;
      const t = (p = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const m = n.includes(".") ? n.split(".").pop() : n;
      m && ((y = game.actors) != null && y.get(m)) && (game.votv._dragSourceActorId = m);
    },
    !0
  ), (async () => {
    var t, n, m, o;
    const e = ((t = game.actors) == null ? void 0 : t.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of e) {
      const d = ht.getTotalSpeedRaw(u), p = (n = u.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !p) {
        const f = ((o = (m = CONFIG.statusEffects) == null ? void 0 : m.find((y) => y.id === "immobilized")) == null ? void 0 : o.img) ?? "";
        await u.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: u.uuid
        }]).catch(() => {
        });
      } else d > 0 && p && await p.delete().catch(() => {
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
      const m = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Rs },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, o = await n.create(m);
      o && console.log("Vacuum of the Void | Default scene created:", o.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var o, u, d, p, f, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((o = game.actors) == null ? void 0 : o.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, c = ((u = i == null ? void 0 : i.bar1) == null ? void 0 : u.attribute) ?? "", l = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
        (c || l) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((p = a.tokens) == null ? void 0 : p.filter((c) => {
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
    }, m = ((f = game.actors) == null ? void 0 : f.filter((a) => a.type === "Npc")) ?? [];
    for (const a of m)
      try {
        await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((y = a.tokens) == null ? void 0 : y.filter((c) => {
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
  var o, u, d, p;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const m = n ? (u = game.actors) == null ? void 0 : u.get(n) : null;
  if (m) {
    if (m.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (m.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (m.type === "Npc") {
      const f = Ms((p = (d = m.system) == null ? void 0 : d.identity) == null ? void 0 : p.size);
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
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(pi).catch((m) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, m);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || js(I);
});
function Ks() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((m) => m.type === "Karakter" || m.type === "Npc")) ?? []) {
    const m = n.apps ?? [], o = m.contents ? Array.from(m.contents) : Array.from(m);
    for (const u of o)
      !u || I.has(u.id) || (I.add(u.id), typeof u.render == "function" && u.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const m = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    m !== "Karakter" && m !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
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
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((m) => {
    m.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var m;
  const t = I == null ? void 0 : I.object, n = ((m = t == null ? void 0 : t.document) == null ? void 0 : m.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const o = s[0] ?? s;
    o != null && o.classList && o.classList.add("votv-karakter-token-hud");
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
  var p, f, y, a;
  const t = ((p = I.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, m = t.critLabel, o = t.weaponAttack, u = t.weapon;
  if (!n && !m && !o) return;
  const d = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (d) {
    if (n && d.classList.add(`votv-${n}`), m) {
      const i = d.querySelector(".votv-crit-label");
      if (i)
        i.textContent = m;
      else {
        const c = d.querySelector(".dice-total"), l = (c == null ? void 0 : c.parentElement) ?? d, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = m, l.appendChild(r);
      }
    }
    if (o && u && (u.actorId || (y = I.speaker) != null && y.actor)) {
      const i = d.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? d;
      if (!d.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const g = !!u.isHit, b = u.targetName || "Célpont";
        r.textContent = g ? `Találat – ${b}` : `Nem talált – ${b}`, c.appendChild(r);
      }
      if (u.isHit && !d.querySelector(".votv-weapon-damage-chat")) {
        const g = document.createElement("button");
        g.type = "button", g.className = "votv-weapon-damage-chat";
        const b = u.hitLocationRoll, w = u.hitLocationName;
        g.textContent = b != null && w ? `Sebzés (Találati Hely ${b} - ${w})` : "Sebzés", g.dataset.actorId = String(u.actorId ?? ((a = I.speaker) == null ? void 0 : a.actor) ?? ""), g.dataset.itemId = String(u.itemId ?? ""), g.dataset.slotKey = String(u.slotKey ?? ""), g.dataset.targetName = String(u.targetName ?? ""), g.dataset.hitLocationName = String(u.hitLocationName ?? ""), g.dataset.messageId = String(I.id ?? ""), c.appendChild(g);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-CpImOUR7.mjs.map
