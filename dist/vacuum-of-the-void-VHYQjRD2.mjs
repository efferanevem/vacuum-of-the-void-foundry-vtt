var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (I, s, e) => s in I ? Hs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var Y = (I, s, e) => Vs(I, typeof s != "symbol" ? s + "" : s, e);
var z = (I, s, e) => Gs(Bs(I), e, s);
const { HTMLField: Ws, NumberField: A, SchemaField: U, StringField: D, BooleanField: te, ArrayField: yt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new U({
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
      resources: new U({
        health: new U({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new U({
          head: new U({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new U({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new U({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new U({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new U({
          head: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new U({
          head: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new U({
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
      combat: new U({
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
          new U({
            min: new A({ required: !1, integer: !0, initial: 0 }),
            max: new A({ required: !1, integer: !0, initial: 0 }),
            kp: new A({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new U({
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
      weapons: new U({
        slotOrder: new D({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new U({
          name: new D({ required: !1, blank: !0, initial: "" }),
          bonus: new D({ required: !1, blank: !0, initial: "" }),
          damage: new D({ required: !1, blank: !0, initial: "" }),
          itemId: new D({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new U({
        microchips: new U({
          slot1: new U({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot2: new U({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot3: new U({
            itemId: new D({ required: !1, blank: !0, initial: "" }),
            name: new D({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          })
        }),
        equipment: new D({ required: !1, blank: !0, initial: "" }),
        armor: new yt(
          new U({
            name: new D({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new D({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new D({ required: !1, blank: !0, initial: "" }),
            level: new D({ required: !1, blank: !0, initial: "" }),
            other: new D({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new yt(
          new U({
            name: new D({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new D({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new U({
        faji: new U({
          itemId: new D({ required: !1, blank: !0, initial: "" }),
          name: new D({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new U({
          itemId: new D({ required: !1, blank: !0, initial: "" }),
          name: new D({ required: !1, blank: !0, initial: "" })
        }),
        passive: new U({
          items: new yt(
            new D({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new U({
          items: new yt(
            new D({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new U({
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
const { NumberField: $t, StringField: gt, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
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
  const d = (c, i = 1) => {
    if (!Array.isArray(c)) return;
    let r = i;
    for (const o of c) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, r);
        continue;
      }
      if (typeof o.operator == "string") {
        r = o.operator === "-" ? -1 : 1;
        continue;
      }
      const a = typeof o.faces == "number" ? o.faces : void 0, y = Array.isArray(o.results) ? o.results : null;
      if (!a || !y || a === 8 || a !== 6) continue;
      const h = !n && r >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : r >= 0 ? e : t;
      for (const k of y) {
        if (!k || k.discarded || k.hidden) continue;
        const S = Number(k.result ?? k);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  d(I.terms, 1);
  const l = s.filter((c) => c === 6).length, u = s.filter((c) => c === 1).length, m = e.filter((c) => c === 6).length, p = t.filter((c) => c === 6).length, f = l + m, g = u + p;
  return f > 0 && f === g ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(I) {
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
    var n, d, l, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const d = this.element, l = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const a = document.activeElement, y = l.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      y && h && (u.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const p = this.element, f = this.form ?? this.element, g = u.scrollState, c = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", r = () => {
      var a, y;
      if (this._applyScrollState(p, g), (c == null ? void 0 : c.name) != null || (c == null ? void 0 : c.id) != null) {
        const h = ((a = f.querySelector) == null ? void 0 : a.call(f, c.id ? `#${CSS.escape(c.id)}` : null)) ?? (c.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(c.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = c.selectionStart ?? 0, h.selectionEnd = c.selectionEnd ?? c.selectionStart ?? 0));
      }
      this._applyScrollState(p, g);
    };
    return (i || c) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), l = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= l ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var u;
        return l.type === "Pancel" && ((u = l.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const u = String(((d = l.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var u;
        return l.type === "Pancel" && ((u = l.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const u = String(((d = l.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, d;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var u;
        return l.type === "Pancel" && ((u = l.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const u = String(((d = l.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, g, c, i, r, o, a, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : g.value) ?? 0, n = ((c = e.currentHealth) == null ? void 0 : c.legs) ?? 0, d = V._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const l = Number(((r = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : r.givenSpeed) ?? 0) || 0;
    let u;
    d === 1 ? u = -6 : d === 2 ? u = -3 : u = l, u += V._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((a = (o = s.system) == null ? void 0 : o.combat) == null ? void 0 : a.speed) ?? 0) || 0, p = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(u) ? u : 0);
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
    var g, c, i, r, o, a, y, h, k, S, T, O;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((r = (i = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : i.has) != null && r.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, d = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, l = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, u = V._healthStatusFromRatio(l, d), m = Number(((O = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : O.givenSpeed) ?? 0) || 0;
    let p;
    u === 0 ? p = 0 : u === 1 ? p = -6 : u === 2 ? p = -3 : p = m;
    const f = this._getTotalArmorSpeedPenalty();
    p += f, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var p, f, g, c, i, r, o, a, y, h, k, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((c = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : c.givenProtection) ?? 0) || 0, d = (o = (r = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : r.has) != null && o.call(r, "lookaround") ? 1 : 0, l = (h = (y = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, u = (T = (S = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + d + l + u;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var c;
      return ((c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(l == null ? void 0 : l.value) || 0, p = Number(u == null ? void 0 : u.value) || 0, f = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + f);
  }
  _writeTotalSpeed(s = null) {
    var o, a, y, h, k, S, T, O;
    const e = s ?? this.form ?? this.element, t = (F) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, F)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${F}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), u = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (a = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : a.has) != null && y.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((k = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : k.resources) ?? {}, p = ((T = (S = m.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((O = m.currentHealth) == null ? void 0 : O.legs) ?? 0;
    if (V._healthStatusFromRatio(f, p) === 0) {
      n.textContent = "0";
      return;
    }
    const c = Number(l == null ? void 0 : l.value) || 0, i = Number(u == null ? void 0 : u.value) || 0, r = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(c + i + r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, u, m, p;
    const e = V.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((m = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return V._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, m, p, f;
    const t = V.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, l = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return V._healthStatusFromRatio(l, d);
  }
  async _prepareContext(s) {
    var tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re, w, P, x, B, oe, X, ge, pe, ce, _e, Me, je, Ot, Ct, qt, Lt, mt, We, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((it = (st = (tt = this.actor.system) == null ? void 0 : tt.resources) == null ? void 0 : st.stress) == null ? void 0 : it.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, l = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of u) {
      const L = ((nt = d[b]) == null ? void 0 : nt.value) ?? 0, q = l[b] ?? 0;
      e.computedHealthStatus[b] = V._healthStatusFromRatio(q, L);
    }
    const m = (Number(l.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = m || f >= 2;
    const g = e.computedHealthStatus.legs ?? 3, c = Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = c;
    const r = this._getTotalArmorSpeedPenalty();
    i += r, e.effectiveGivenSpeed = i;
    const o = Number(((ct = (ot = this.actor.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.givenProtection) ?? 0) || 0, a = (ut = (xe = (lt = this.actor) == null ? void 0 : lt.statuses) == null ? void 0 : xe.has) != null && ut.call(xe, "lookaround") ? 1 : 0, y = (w = (Re = (dt = this.actor) == null ? void 0 : dt.statuses) == null ? void 0 : Re.has) != null && w.call(Re, "halfcover") ? 3 : 0, h = (B = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && B.call(x, "threequarteredcover") ? 6 : 0, k = o + this._getTotalArmorProtectionBonus() + a + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let O = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    g === 0 && (O = 0), (pe = (ge = (X = this.actor) == null ? void 0 : X.statuses) == null ? void 0 : ge.has) != null && pe.call(ge, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), O = 0), e.totalSpeed = O;
    const F = V.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(F)) {
      const q = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = q, e.skillDisabled[b] = q === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const N = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = (N.slotOrder ?? "").trim(), _ = C ? C.split(/\s*,\s*/).filter((b) => v.includes(b)) : [], R = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, j = R && typeof R == "object" && !Array.isArray(R) ? R : {}, H = (((je = j.slot1) == null ? void 0 : je.itemId) ?? "").trim(), G = (((Ot = j.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Z = (((Ct = j.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), M = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const q = typeof b.sort == "number" ? b.sort : 0, E = typeof L.sort == "number" ? L.sort : 0;
      return q - E;
    }).map((b) => {
      var Oe, ze, Ue, qe, Le, pt;
      const L = b.type === "Fegyver", q = b.type === "MikroChip";
      let E = 0, K = "", ee = null;
      for (let Je = 0; Je < _.length; Je++) {
        const ft = _[Je];
        if ((((Oe = N[ft]) == null ? void 0 : Oe.itemId) ?? "") === b.id) {
          E = Je + 1, K = ((ze = N[ft]) == null ? void 0 : ze.bonus) ?? "", ee = ft;
          break;
        }
      }
      let Q = null;
      q && (H === b.id ? Q = "slot1" : G === b.id ? Q = "slot2" : Z === b.id && (Q = "slot3"));
      const Ke = L && ((Ue = b.system) != null && Ue.damage) ? b.system.damage : "", le = L && typeof ((qe = b.system) == null ? void 0 : qe.range) == "string" ? (b.system.range || "").trim() : "", fe = ee ? Number((Le = N[ee]) == null ? void 0 : Le.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: E,
        slotBonus: K,
        slotKey: ee,
        microchipSlotKey: Q,
        isEquipped: !!(ee || Q),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: fe,
        quantity: Number(((pt = b.system) == null ? void 0 : pt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const J = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((b) => b.type === "Fegyver"), re = J.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = re;
    const Se = "— Nincs fegyver —", ye = _.filter((b) => {
      const q = ((N[b] ?? {}).itemId ?? "").trim();
      return q ? !!J.find((K) => K.id === q) : !1;
    });
    e.weaponSlots = ye.map((b, L) => {
      const q = N[b] ?? {}, E = (q.itemId ?? "").trim(), K = re.find((fe) => fe.id === E), ee = J.find((fe) => fe.id === E), Q = (ee == null ? void 0 : ee.system) ?? {}, Ke = Q.size === "thrown", le = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: E,
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
    e.weaponsTable = J.map((b) => {
      var ls, us, ds;
      const L = b.id;
      let q = null, E = {};
      for (const At of _)
        if ((((ls = N[At]) == null ? void 0 : ls.itemId) ?? "").trim() === L) {
          q = At, E = N[At] ?? {};
          break;
        }
      const K = !!q, ee = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : K, Q = (b == null ? void 0 : b.system) ?? {}, Ke = typeof Q.range == "string" ? (Q.range || "").trim() : "", le = Q.type ?? "", fe = (Te[le] ?? le) || "—", Oe = Q.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [fe, ze].filter(Boolean).join(", ") || fe || "—", qe = le === "projectile" || Oe === "thrown", Le = Q.quantity, pt = Le != null ? String(Le).trim() : "1", Je = String(E.bonus ?? "").trim(), ft = String(Q.bonus ?? "").trim(), Us = Je || ft || "0";
      return {
        slotKey: q ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Se,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: E.damage ?? Q.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: fe,
        typeAndSize: Ue,
        quantity: pt,
        quantityDisplay: qe ? pt : "—",
        isProjectile: qe,
        equipped: ee,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const de = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = de.map((b) => {
      var E, K;
      const L = (b == null ? void 0 : b.system) ?? {}, q = ((E = b.system) == null ? void 0 : E.equipped) !== void 0 && ((K = b.system) == null ? void 0 : K.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: li((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: q
      };
    });
    const Fe = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = Fe.map((b) => {
      const L = (b == null ? void 0 : b.system) ?? {}, q = (L.description ?? "").trim(), E = q ? q.length > 60 ? q.slice(0, 57) + "…" : q : "—", K = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: K,
        description: E
      };
    });
    const He = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = He.map((b) => {
      const q = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), E = q ? q.length > 80 ? q.slice(0, 77) + "…" : q : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: E
      };
    });
    const bt = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), ne = bt.map((b) => ({ id: b.id, name: b.name, img: b.img })), Ye = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (b) => {
      var q, E, K;
      const L = [];
      return b !== 1 && L.push((((q = j.slot1) == null ? void 0 : q.itemId) ?? "").trim()), b !== 2 && L.push((((E = j.slot2) == null ? void 0 : E.itemId) ?? "").trim()), b !== 3 && L.push((((K = j.slot3) == null ? void 0 : K.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((b) => !Be(1).includes(b.id)), e.microchipItemsSlot2 = ne.filter((b) => !Be(2).includes(b.id)), e.microchipItemsSlot3 = ne.filter((b) => !Be(3).includes(b.id)), e.microchipSlots = De.map((b) => {
      const L = j[b] ?? {}, q = (L.itemId ?? "").trim(), E = bt.find((K) => K.id === q);
      return {
        slotKey: b,
        itemId: q,
        displayName: (E == null ? void 0 : E.name) || L.name || Ye,
        img: (E == null ? void 0 : E.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, q = j[L] ?? {}, E = (q.itemId ?? "").trim(), K = ne.find((ee) => ee.id === E);
      e[`microchip${b}ItemId`] = E, e[`microchip${b}DisplayName`] = (K == null ? void 0 : K.name) || q.name || Ye, e[`microchip${b}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = bt.map((b) => {
      var Oe, ze, Ue, qe;
      const L = b.id;
      let q = null;
      for (const Le of De)
        if ((((Oe = j[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === L) {
          q = Le;
          break;
        }
      const E = !!q, K = ((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.abilityType) ?? "", ee = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", Q = K === "active", Ke = Number((Ue = b == null ? void 0 : b.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, le = (((qe = b == null ? void 0 : b.system) == null ? void 0 : qe.description) ?? "").trim(), fe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ee,
        description: fe,
        kp: Ke,
        isActive: Q,
        slotKey: q ?? "",
        equipped: E
      };
    });
    const vt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Wt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var L, q, E;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((q = b.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((E = b.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), Ge = new Map(Wt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Xe = (b) => {
      const L = kt[b] ?? {}, q = (L.itemId ?? "").trim(), E = q ? Ge.get(q) : null, K = (E == null ? void 0 : E.description) ?? "", ee = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: q,
        displayName: (E == null ? void 0 : E.name) || L.name || wt,
        img: (E == null ? void 0 : E.img) || "",
        description: K,
        kp: ee
      };
    };
    e.abilityFajiSlot = Xe("faji"), e.abilityHatterSlot = Xe("hatter");
    const Qe = (b) => {
      const L = kt[b];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ze = (b) => b.map((L) => {
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
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, me = typeof Ae == "number" ? Ae : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ee = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Pe = Array.isArray(Ee) ? Ee.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ce = (Pe.length > 0 ? Pe : St).slice().sort((b, L) => b.min - L.min), $e = Pe.map((b) => b.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Pe.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let et = 0;
    if (typeof me == "number" && me >= 0 && Ce.length > 0) {
      const b = Ce[0], L = Ce[Ce.length - 1];
      let q = null;
      me <= b.max ? q = b : me >= L.min ? q = L : q = Ce.find((E) => me >= E.min && me <= E.max), q && (et = q.kp);
    }
    e.kpDots = Ve.map((b, L) => {
      const q = L + 1, E = !!Number(It[b]), K = q <= et;
      return { index: q, used: E, usable: K };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var g, c;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-BmuQj3jN.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, y, h;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const k = (r.dataset.slot ?? "").trim();
        if (!k) return;
        o = (((((y = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : y.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = r.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: r } = await import("./roll-sheet-BmuQj3jN.mjs");
      r(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, k;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, o = parseInt(r.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, y = !!Number((k = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : k[`kpDot${o}`]);
      await this.actor.update({ [a]: y ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var a;
      const r = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
    const l = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', l), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var a, y, h;
      i.preventDefault(), i.stopPropagation();
      const r = ((h = (y = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : y.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (k) => {
          k && this.actor.update({ img: k });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const r = i.currentTarget, o = r.dataset.skill, a = ((h = r.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: y } = await import("./roll-sheet-BmuQj3jN.mjs");
      y(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, O, F, N, v, C;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const k = ((F = (O = this.actor.items).get) == null ? void 0 : F.call(O, h)) ?? ((v = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : v.call(N, (_) => _.id === h));
      (C = k == null ? void 0 : k.sheet) == null || C.render(!0);
    });
    const u = (i, r) => {
      var y;
      const o = i.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (y = a.sheet) == null || y.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      let y = Number(r.value);
      (!Number.isFinite(y) || y < 0) && (y = 0), await a.update({ "system.quantity": y });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, y = a.items.get(o);
      if (!y) return;
      const h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = a.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = k[N]) == null ? void 0 : v.itemId) ?? "").trim() === o;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${F}.itemId`] = "", h[`system.weapons.${F}.name`] = "", h[`system.weapons.${F}.damage`] = "", h[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var F, N;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => k.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = y[v]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = y[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = k.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: o,
          [`system.weapons.${v}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${v}.damage`]: ((F = a == null ? void 0 : a.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var v;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), y = a == null ? void 0 : a.dataset.slot;
      if (!y) return;
      const h = (r.dataset.itemId ?? "").trim(), k = (r.dataset.itemName ?? ((v = r.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (r.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = k);
      let O = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      S ? (O || (O = document.createElement("img"), O.className = "karakter-microchip-slot-thumb", O.alt = "", a == null || a.insertBefore(O, T)), O.src = S, O.style.display = "") : O && O.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const F = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (F == null ? void 0 : F.name) ?? ""
      };
      h && (N[`system.gear.microchips.${y}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, S;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "MikroChip") return;
      const a = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = a[T]) == null ? void 0 : O.itemId) ?? "").trim() === r;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), r.addEventListener("dragleave", (a) => {
        var y;
        return (y = a.currentTarget) == null ? void 0 : y.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), r.addEventListener("dragleave", (a) => {
        var y;
        return (y = a.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (a) => {
        var y;
        (y = a.currentTarget) == null || y.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), r.addEventListener("dragleave", (a) => {
        var y;
        return (y = a.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (a) => {
        var y;
        (y = a.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((k = a[r]) == null ? void 0 : k.items) ? a[r].items.slice() : []).filter((S) => S !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var y;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      (y = a == null ? void 0 : a.sheet) == null || y.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(o) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const y = (r.value ?? "").trim();
      await a.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var F, N;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => k.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = y[v]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = y[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = k.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: o,
          [`system.weapons.${v}.name`]: a.name ?? "",
          [`system.weapons.${v}.damage`]: ((F = a.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((N = a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, y = a.items.get(o), h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = a.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = k[N]) == null ? void 0 : v.itemId) ?? "").trim() === o;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${F}.itemId`] = "", h[`system.weapons.${F}.name`] = "", h[`system.weapons.${F}.damage`] = "", h[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
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
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Targy") return;
      const y = (r.value ?? "").trim();
      await a.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const m = this, p = (i) => {
      var a, y, h, k;
      if (!i) return;
      const r = m._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((y = (a = r.system) == null ? void 0 : a.resources) == null ? void 0 : y.currentHealth) != null || ((k = (h = r.system) == null ? void 0 : h.resources) == null ? void 0 : k.hitLocations) != null;
      m.actor.update(r).then(() => {
        o && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var r, o, a;
      return i && (((o = (r = m.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || m.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var h;
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = r.form;
      if (!f(a)) return;
      const y = i.relatedTarget;
      y && (a.contains(y) || m.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(a));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, m, p;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      f.type === "checkbox" ? g = f.checked : f.type === "number" ? g = f.value === "" ? 0 : Number(f.value) : g = f.value ?? "", foundry.utils.setProperty(e, f.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const f of l) {
      const g = ((p = n[f]) == null ? void 0 : p.value) ?? 0, c = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, V._healthStatusFromRatio(c, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, l, u, m, p, f, g, c, i, r;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            o = a;
            break;
          }
      }
      if (o) {
        const a = await fromUuid(o);
        if (a && a.documentName === "Item" && (a.type === "Kepesseg" || a.type === "ability")) {
          let y = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const h = (((l = a.system) == null ? void 0 : l.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const S = h === "active" ? "active" : "passive", T = Array.isArray((u = k[S]) == null ? void 0 : u.items) ? k[S].items.slice() : Array.isArray(k[S]) ? k[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            o = a;
            break;
          }
      }
      if (o) {
        const a = await fromUuid(o);
        if (a && a.documentName === "Item" && a.type === "Fegyver") {
          const y = this.actor, h = ((p = a.parent) == null ? void 0 : p.id) !== y.id;
          let k = a.id;
          if (h) {
            const S = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            k = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? k;
          }
          if (h) {
            const S = ((g = y.system) == null ? void 0 : g.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = T ? T.split(/\s*,\s*/).filter((v) => O.includes(v)) : [], N = F.filter((v) => {
              var C;
              return (((C = S[v]) == null ? void 0 : C.itemId) ?? "").trim() === k;
            });
            if (N.length > 0) {
              const C = {
                "system.weapons.slotOrder": F.filter((_) => !N.includes(_)).join(",")
              };
              for (const _ of N)
                C[`system.weapons.${_}.itemId`] = "", C[`system.weapons.${_}.name`] = "", C[`system.weapons.${_}.damage`] = "", C[`system.weapons.${_}.bonus`] = "";
              await y.update(C);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const y = this.actor;
          if (((c = a.parent) == null ? void 0 : c.id) !== y.id) {
            const h = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const y = this.actor;
          ((i = a.parent) == null ? void 0 : i.id) !== y.id && await y.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const y = this.actor;
          ((r = a.parent) == null ? void 0 : r.id) !== y.id && await y.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, l, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, m, p, f, g, c;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const l = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((g = d.system) == null ? void 0 : g.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((c = d.system) == null ? void 0 : c.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
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
    const d = this.actor.items.contents.slice().sort((g, c) => {
      const i = typeof g.sort == "number" ? g.sort : 0, r = typeof c.sort == "number" ? c.sort : 0;
      return i - r;
    }).map((g) => g.id), l = d.indexOf(t), u = d.indexOf(e);
    if (l === -1 || u === -1) return;
    d.splice(l, 1), d.splice(u, 0, t);
    const m = d.map((g, c) => ({
      _id: g,
      sort: (c + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(s) {
    var n, d, l;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var m, p, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const g = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const c = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        c > 0 && (d = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, g, c;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${u}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var n, d;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var l, u, m;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((m = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : m.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var m, p, f, g;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [c]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const l = this.actor.system.abilities ?? {}, u = Array.isArray((g = l[e]) == null ? void 0 : g.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, l, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, m, p, f, g;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "MikroChip") return;
    let l = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (l = ((g = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : g.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? d -= 6 : l === 2 && (d -= 3);
    const m = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(m);
    await p.evaluate({ async: !0 });
    const { resultType: f, label: g } = xt(p), c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: g } },
      rollMode: c
    });
  }
  async _rollMorale() {
    var d;
    const s = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
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
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _rollWeapon(s) {
    var S, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((O) => O.type === "Fegyver");
    let l = null;
    t.itemId && (l = d.find((O) => O.id === t.itemId) ?? null);
    const u = l && l.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, p = ((S = l == null ? void 0 : l.system) == null ? void 0 : S.type) || "kinetic", f = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), g = f && n[f] !== void 0 ? f : p === "explosive" ? "grenadeUse" : "firearms", c = Number(n[g] || 0) || 0, i = m + c, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: y, label: h } = xt(a), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, f, g, c, i, r, o, a, y;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((c = n.system) == null ? void 0 : c.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (r = ui.notifications) == null ? void 0 : r.warn) == null || y.call(r, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(d);
    await l.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
Y(V, "PARTS", foundry.utils.mergeObject(
  z(V, V, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(V, V, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = z(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = z(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = z(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
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
function di(I) {
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
    var n, d, l, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const i = document.activeElement, r = n.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      r && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const l = await super.render(s, e), u = this.element, m = this.form ?? this.element, p = d.scrollState, f = d.focus, g = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", c = () => {
      var i, r;
      if (this._applyScrollState(u, p), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const o = ((i = m.querySelector) == null ? void 0 : i.call(m, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (r = m.querySelector) == null ? void 0 : r.call(m, `[name="${CSS.escape(f.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = f.selectionStart ?? 0, o.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, p);
    };
    return (g || f) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), l;
  }
  async _prepareContext(s) {
    var Xe, Qe, Ze, It, Ve, Ae, me, St, Ee, Pe, Ft, Ce, $e, Tt, Dt, et, _t, tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Xe = this.actor) == null ? void 0 : Xe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, l = (Ae = (Ve = t == null ? void 0 : t.statuses) == null ? void 0 : Ve.has) != null && Ae.call(Ve, "lookaround") ? 1 : 0, u = (St = (me = t == null ? void 0 : t.statuses) == null ? void 0 : me.has) != null && St.call(me, "halfcover") ? 3 : 0, m = (Pe = (Ee = t == null ? void 0 : t.statuses) == null ? void 0 : Ee.has) != null && Pe.call(Ee, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = d + l + u + m;
    const p = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], c = (f.slotOrder ?? "").trim(), i = c ? c.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], r = p.filter((w) => w.type === "Fegyver"), o = r.map((w) => ({ id: w.id, name: w.name, img: w.img })), a = "— Nincs fegyver —", y = i.length > 0 ? i : g, h = g.filter((w) => !y.includes(w)), k = [...y, ...h], S = k.filter((w) => {
      var x;
      const P = (((x = f[w]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && r.some((B) => B.id === P);
    });
    e.weaponSlots = S.map((w) => {
      const P = f[w] ?? {}, x = (P.itemId ?? "").trim(), B = o.find((ce) => ce.id === x), oe = r.find((ce) => ce.id === x), X = (oe == null ? void 0 : oe.system) ?? {}, ge = X.size === "thrown", pe = (typeof X.range == "string" ? (X.range || "").trim() : "") || "—";
      return {
        slotKey: w,
        itemId: x,
        displayName: (B == null ? void 0 : B.name) || P.name || a,
        img: (B == null ? void 0 : B.img) || "",
        isThrown: ge,
        rangeStr: pe
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, O = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = r.map((w) => {
      var mt;
      const P = w.id;
      let x = null, B = {};
      for (const We of k)
        if ((((mt = f[We]) == null ? void 0 : mt.itemId) ?? "").trim() === P) {
          x = We, B = f[We] ?? {};
          break;
        }
      const oe = !!x, X = (w == null ? void 0 : w.system) ?? {}, ge = typeof X.range == "string" ? (X.range || "").trim() : "", pe = X.type ?? "", ce = (T[pe] ?? pe) || "—", _e = X.size ?? "", Me = (O[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = pe === "projectile" || _e === "thrown", Ct = X.quantity != null ? String(X.quantity).trim() : "1", qt = String(X.bonus ?? B.bonus ?? "").trim() || "0", Lt = (X.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? a,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: ge || "—",
        typeAndSize: je,
        quantity: Ct,
        isProjectile: Ot,
        equipped: oe,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const F = p.filter((w) => w.type === "Pancel");
    e.armorTable = F.map((w) => {
      var B;
      const P = (w == null ? void 0 : w.system) ?? {}, x = ((B = w.system) == null ? void 0 : B.equipped) === !0;
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: di((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const N = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], C = p.filter((w) => w.type === "MikroChip");
    e.microchipsTable = C.map((w) => {
      var pe, ce, _e, Me;
      const P = w.id;
      let x = null;
      for (const je of v)
        if ((((pe = N[je]) == null ? void 0 : pe.itemId) ?? "").trim() === P) {
          x = je;
          break;
        }
      const B = ((ce = w == null ? void 0 : w.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", X = (((_e = w == null ? void 0 : w.system) == null ? void 0 : _e.description) ?? "").trim(), ge = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: oe,
        description: ge,
        kp: Number((Me = w == null ? void 0 : w.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0,
        isActive: B === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const _ = p.filter((w) => w.type === "Targy");
    e.itemsTable = _.map((w) => {
      const P = (w == null ? void 0 : w.system) ?? {}, x = (P.description ?? "").trim(), B = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: B
      };
    });
    const R = p.filter((w) => w.type === "Egyeb");
    e.egyebList = R.map((w) => {
      const x = (((w == null ? void 0 : w.system) ?? {}).description ?? "").trim(), B = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        description: B
      };
    });
    const j = (((Dt = e.weaponsTable) == null ? void 0 : Dt.length) ?? 0) > 0 || (((et = e.armorTable) == null ? void 0 : et.length) ?? 0) > 0 || (((_t = e.microchipsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((tt = e.itemsTable) == null ? void 0 : tt.length) ?? 0) > 0 || (((st = e.egyebList) == null ? void 0 : st.length) ?? 0) > 0;
    e.showEquipmentDropZone = !j;
    const H = ((it = t == null ? void 0 : t.system) == null ? void 0 : it.abilities) ?? {}, G = p.filter((w) => w.type === "Kepesseg" || w.type === "ability").map((w) => {
      var P, x;
      return {
        id: w.id,
        name: w.name,
        img: w.img,
        description: ((P = w.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((x = w.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), Z = new Map(G.map((w) => [w.id, w])), W = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = W, e.abilityHatterSlot = W;
    const M = (w) => {
      const P = H[w];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, J = (w) => (w || []).map((P) => {
      const x = Z.get(P);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = J(M("passive")), e.abilityActiveList = J(M("active"));
    const re = t == null ? void 0 : t.id, Se = !!((rt = (nt = game.combat) == null ? void 0 : nt.combatants) != null && rt.some(
      (w) => {
        var P;
        return (((P = w.actor) == null ? void 0 : P.id) ?? w.actorId) === re;
      }
    ));
    e.showHarcSection = Se;
    const ye = ((at = e.system) == null ? void 0 : at.resources) ?? {}, Te = (ct = (ot = e.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.initiativeResult, ae = typeof Te == "number" ? Te : -1, de = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (xe = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((w) => ({ min: Number(w.min) ?? 0, max: Number(w.max) ?? 0, kp: Math.min(10, Math.max(0, Number(w.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : de).slice().sort((w, P) => w.min - P.min), Ye = 3;
    let De = He.length > 0 ? He : [];
    De.length < Ye && (De = [...De, ...Array(Ye - De.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = De.map((w, P) => ({
      ...w,
      isFirst: P === 0,
      isLast: P === De.length - 1
    }));
    let Be = 0;
    if (typeof ae == "number" && ae >= 0 && ne.length > 0) {
      const w = ne[0], P = ne[ne.length - 1];
      let x = null;
      ae <= w.max ? x = w : ae >= P.min ? x = P : x = ne.find((B) => ae >= B.min && ae <= B.max), x && (Be = x.kp);
    }
    const vt = ne.length > 0 ? ne[ne.length - 1] : null, kt = Math.min(10, vt ? vt.kp : 6), Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, kt)).map((w, P) => {
      const x = P + 1, B = !!Number(ye[w]), oe = x <= Be;
      return { index: x, used: B, usable: oe };
    }), wt = Math.ceil(Ge.length / 2);
    return e.kpDotsRow1 = Ge.slice(0, wt), e.kpDotsRow2 = Ge.slice(wt), e.canEditInitiative = !!((ut = game.user) != null && ut.isGM), e.showInitiativeResult = typeof Te == "number", e.initiativeResult = e.showInitiativeResult ? Te : "", e.speedUnitForSelect = ((Re = (dt = e.system) == null ? void 0 : dt.combat) == null ? void 0 : Re.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var p, f, g;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (c) => {
      var o, a, y;
      if (c.preventDefault(), c.stopPropagation(), !this.actor) return;
      const i = ((y = (a = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (c) => {
      var o, a, y;
      c.preventDefault();
      const i = (a = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (y = r == null ? void 0 : r.sheet) == null || y.render(!0);
    });
    const n = (c) => {
      var o, a;
      const i = (o = c == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (a = r == null ? void 0 : r.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (c) => {
      c.preventDefault(), n(c.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (c) => {
      c.preventDefault(), n(c.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (c) => {
      var a, y, h, k;
      c.preventDefault();
      const i = (y = (a = c.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : y.call(a, ".karakter-weapon-slot"), r = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (k = o == null ? void 0 : o.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (c) => {
      var a;
      c.preventDefault(), c.stopPropagation();
      const i = c.currentTarget, r = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!r || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BmuQj3jN.mjs");
      o(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (c) => {
      var o, a, y, h, k;
      c.preventDefault(), c.stopPropagation();
      const i = c.currentTarget;
      let r = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !r && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (r = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!r || !this.actor) && await this._rollWeaponDamage(r, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (c) => {
      if (c.preventDefault(), c.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BmuQj3jN.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (c) => {
      var a, y;
      c.preventDefault(), c.stopPropagation();
      const i = c.currentTarget, r = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(r) || r < 1 || r > 10 || !this.actor) return;
      const o = !!Number((y = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : y[`kpDot${r}`]);
      await this.actor.update({ [`system.resources.kpDot${r}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (c) => {
      var y, h;
      c.preventDefault();
      const i = c.currentTarget, r = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || r;
      if (!r || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-BmuQj3jN.mjs");
      a(this.actor, r, o);
    }), t.on("click", ".karakter-ability-chat", async (c) => {
      var r, o;
      c.preventDefault();
      const i = (o = (r = c.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (c) => {
      var o, a;
      c.preventDefault();
      const i = (((a = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(i) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (c) => {
      var h, k, S, T, O, F;
      if (c.preventDefault(), !c.altKey) return;
      const i = (k = (h = c.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.area, r = (T = (S = c.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !r || !this.actor) return;
      const o = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, y = (Array.isArray((F = o[i]) == null ? void 0 : F.items) ? o[i].items.slice() : []).filter((N) => N !== r);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (c) => {
      var r, o;
      if (c.preventDefault(), !c.altKey) return;
      const i = (o = (r = c.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (c) => {
      var h, k;
      if (c.preventDefault(), !c.altKey) return;
      const i = c.currentTarget, r = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor, a = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), y = {};
      a && (y[`system.weapons.${a}.itemId`] = "", y[`system.weapons.${a}.name`] = "", y[`system.weapons.${a}.damage`] = "", y[`system.weapons.${a}.bonus`] = ""), Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (c) => {
      var r, o;
      if (c.preventDefault(), !c.altKey) return;
      const i = (((o = (r = c.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (c) => {
      var y, h, k, S;
      if (c.preventDefault(), !c.altKey) return;
      const i = (((h = (y = c.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = r[T]) == null ? void 0 : O.itemId) ?? "").trim() === i;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (c) => {
      var o, a;
      if (c.preventDefault(), !c.altKey) return;
      const i = (((a = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      !r || r.type !== "Targy" && r.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || g.forEach((c) => {
      var i;
      (((i = c.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (c.draggable = !0);
    }), t.on("dragstart", d, (c) => {
      var y, h, k;
      const i = c.currentTarget, r = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      if (!o) return;
      const a = o.uuid;
      c.dataTransfer && (c.dataTransfer.setData("text/plain", a), c.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), c.dataTransfer.effectAllowed = "copyMove"), typeof ((k = c.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && c.dataTransfer.setDragImage(i, 0, 0);
    });
    const l = this, u = (c) => {
      if (!c) return;
      const i = l._getFormDataForUpdate(c);
      Object.keys(i).length !== 0 && l.actor.update(i).catch((r) => console.warn("VoidNpcSheet save failed", r));
    }, m = (c) => {
      var i, r, o;
      return c && (((r = (i = l.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, c)) || l.id && ((o = c.closest) == null ? void 0 : o.call(c, `#${CSS.escape(l.id)}`)));
    };
    l._votvNpcBlur = (c) => {
      var y;
      const i = c.target;
      if (!i || !i.form) return;
      const r = i.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const o = i.form;
      if (!m(o)) return;
      const a = c.relatedTarget;
      a && (o.contains(a) || l.id && ((y = a.closest) != null && y.call(a, `#${CSS.escape(l.id)}`))) || u(o);
    }, document.body.addEventListener("blur", l._votvNpcBlur, !0), l._votvNpcItemHookRegistered || (l._votvNpcItemUpdateHook = (c, i, r) => {
      var o;
      l.actor && ((o = c == null ? void 0 : c.parent) == null ? void 0 : o.id) === l.actor.id && l.render(!0);
    }, l._votvNpcItemDeleteHook = (c, i, r) => {
      var o;
      l.actor && ((o = c == null ? void 0 : c.parent) == null ? void 0 : o.id) === l.actor.id && l.render(!0);
    }, Hooks.on("updateItem", l._votvNpcItemUpdateHook), Hooks.on("deleteItem", l._votvNpcItemDeleteHook), l._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, s);
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
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((O = e.system) == null ? void 0 : O.skills) ?? {}, l = ((F = e.items) == null ? void 0 : F.filter((C) => C.type === "Fegyver")) ?? [];
    let u = null;
    n.itemId && (u = l.find((C) => C.id === n.itemId) ?? null);
    const m = u && u.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, f = ((N = u == null ? void 0 : u.system) == null ? void 0 : N.type) || "kinetic", g = (((v = u == null ? void 0 : u.system) == null ? void 0 : v.skillKey) ?? "").trim(), c = g && d[g] !== void 0 ? g : f === "explosive" ? "grenadeUse" : "firearms", i = Number(d[c] || 0) || 0, r = p + i, a = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, y = new Roll(a);
    await y.evaluate({ async: !0 });
    const { resultType: h, label: k } = xt(y), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: k } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, f, g, c, i, r, o, a, y;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((c = n.system) == null ? void 0 : c.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (r = ui.notifications) == null ? void 0 : r.warn) == null || y.call(r, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(d);
    await l.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, g, c, i, r, o, a, y, h, k, S, T, O, F, N, v, C;
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
    if (!n) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (c = super._onDropItem) == null ? void 0 : c.call(this, s, e);
    if (d.type === "Pancel") {
      (r = (i = ui.notifications) == null ? void 0 : i.info) == null || r.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const l = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let _ = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== l.id) {
        const Z = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        _ = ((a = (await l.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : a.id) ?? _;
      }
      const R = (((y = d.system) == null ? void 0 : y.kind) ?? "passive").toString(), j = ((h = l.system) == null ? void 0 : h.abilities) ?? {}, H = R === "active" ? "active" : "passive", G = Array.isArray((k = j[H]) == null ? void 0 : k.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      G.includes(_) || G.push(_), await l.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = d.parent) == null ? void 0 : S.id) === l.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (T = (await l.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && p) {
      const _ = ((O = l.system) == null ? void 0 : O.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((W) => R.includes(W)) : [];
      let G = R.find((W) => {
        var M;
        return !(((M = _[W]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((W) => !H.includes(W)) ?? "slot1");
      const Z = H.includes(G) ? H : [...H, G].filter((W) => R.includes(W));
      await l.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((F = d.system) == null ? void 0 : F.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = d.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const _ = ((C = (v = l.system) == null ? void 0 : v.gear) == null ? void 0 : C.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = _[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      j && await l.update({
        [`system.gear.microchips.${j}.itemId`]: p,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, g, c, i, r, o;
    const e = (g = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((c = e.system) == null ? void 0 : c.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${u}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var m, p, f, g, c, i;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const r = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (r === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", r === "active") {
        const o = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${l}
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
      let d;
      if (n.type === "checkbox")
        d = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        d = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const l = (n.value ?? "").trim();
        if (l === "") continue;
        d = Number(l) || 0;
      } else
        d = n.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, n.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
Y(se, "PARTS", foundry.utils.mergeObject(
  z(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(se, se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = se;
function mi(I) {
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
    var n, d, l, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const d = this.element, l = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const a = document.activeElement, y = l.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      y && h && (u.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const p = this.element, f = this.form ?? this.element, g = u.scrollState, c = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", r = () => {
      var a, y;
      if (this._applyScrollState(p, g), (c == null ? void 0 : c.name) != null || (c == null ? void 0 : c.id) != null) {
        const h = ((a = f.querySelector) == null ? void 0 : a.call(f, c.id ? `#${CSS.escape(c.id)}` : null)) ?? (c.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(c.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = c.selectionStart ?? 0, h.selectionEnd = c.selectionEnd ?? c.selectionStart ?? 0));
      }
      this._applyScrollState(p, g);
    };
    return (i || c) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (p) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, p)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${p}`) : null);
    }, n = t(".jarmu-total-defense-effective"), d = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const u = Number(d == null ? void 0 : d.value) || 0, m = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(u + m);
  }
  async _prepareContext(s) {
    var i, r, o, a, y, h, k, S, T, O, F, N;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((o = (r = e.system) == null ? void 0 : r.identity) == null ? void 0 : o.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, d = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", u = (((a = this.actor.items) == null ? void 0 : a.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = u.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = C.type ?? "", R = (n[_] ?? _) || "—", j = C.size ?? "", H = (d[j] ?? j) || "", G = [R, H].filter(Boolean).join(", ") || R || "—", Z = _ === "projectile" || j === "thrown", W = C.quantity != null ? String(C.quantity).trim() : "1", M = (typeof C.range == "string" ? (C.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? l,
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
    const m = (((y = this.actor.items) == null ? void 0 : y.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = m.map((v) => {
      var R;
      const C = (v == null ? void 0 : v.system) ?? {}, _ = !!((R = v.system) != null && R.equipped);
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (C.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (C.speedPenalty ?? "").toString().trim() || "—",
        level: mi((C.level ?? "").toString().trim()),
        special: (C.special ?? C.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const p = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((v) => v.type === "MikroChip");
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
    const f = (((k = this.actor.items) == null ? void 0 : k.contents) ?? []).filter((v) => v.type === "Targy");
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
    const g = (((S = e.weaponsTable) == null ? void 0 : S.length) ?? 0) > 0 || (((T = e.armorTable) == null ? void 0 : T.length) ?? 0) > 0 || (((O = e.microchipsTable) == null ? void 0 : O.length) ?? 0) > 0 || (((F = e.itemsTable) == null ? void 0 : F.length) ?? 0) > 0;
    e.showEquipmentDropZone = !g;
    const c = (((N = this.actor.items) == null ? void 0 : N.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = c.map((v) => {
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
    t.on("click", ".jarmu-portrait-img", (m) => {
      var g, c, i;
      m.preventDefault(), m.stopPropagation();
      const p = ((i = (c = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: this.actor.img || "",
        callback: (r) => {
          r && this.actor.update({ img: r });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (m) => {
      var g, c, i;
      m.preventDefault();
      const p = (c = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : c.itemId;
      if (!p) return;
      const f = this.actor.items.get(p);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (m) => {
      var g, c;
      if (m.preventDefault(), !m.altKey) return;
      const p = (c = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : c.itemId;
      !p || !this.actor.items.get(p) || await this.actor.deleteEmbeddedDocuments("Item", [p]);
    }), t.on("change", ".jarmu-item-quantity-input", async (m) => {
      var c;
      const p = m.currentTarget, f = (c = p == null ? void 0 : p.dataset) == null ? void 0 : c.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (p.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (m) => {
      var g, c;
      const p = (c = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : c.itemId;
      if (!p) return;
      const f = this.actor.items.get(p);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": m.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (m) => {
      var f, g, c, i;
      m.preventDefault();
      const p = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      p && ((i = (c = this.actor.items.get(p)) == null ? void 0 : c.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (m) => {
      var f, g;
      if (m.preventDefault(), !m.altKey) return;
      const p = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      p && await this.actor.deleteEmbeddedDocuments("Item", [p]);
    }), t.on("click", ".karakter-item-chat", async (m) => {
      var f, g;
      m.preventDefault();
      const p = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      p && await this._postItemToChat(p);
    });
    const n = this, d = (m) => {
      if (!m) return;
      const p = n._getFormDataForUpdate(m);
      Object.keys(p).length !== 0 && n.actor.update(p).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, l = (m) => {
      var p, f, g;
      return m && (((f = (p = n.element) == null ? void 0 : p.contains) == null ? void 0 : f.call(p, m)) || n.id && ((g = m.closest) == null ? void 0 : g.call(m, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (m) => {
      var i;
      const p = m.target;
      if (!p || !p.form) return;
      const f = p.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const g = p.form;
      if (!l(g)) return;
      const c = m.relatedTarget;
      c && (g.contains(c) || n.id && ((i = c.closest) != null && i.call(c, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), d(g));
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
    var m, p, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const g = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const c = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        c > 0 && (d = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var m, p;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((m = e == null ? void 0 : e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
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
    const d = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((p = n.parent) == null ? void 0 : p.id) === d.id) return;
    const u = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await d.createEmbeddedDocuments("Item", [u]);
  }
};
Y(ie, "PARTS", foundry.utils.mergeObject(
  z(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = ie;
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
    e._votvProfileImgClick = (l) => {
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
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
Y(he, "PARTS", foundry.utils.mergeObject(z(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Y(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(he, he, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = z(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let jt = he;
var Fs;
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
    e._votvProfileImgClick = (l) => {
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
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
Y(be, "PARTS", foundry.utils.mergeObject(z(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Y(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(be, be, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Fs = z(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = be;
var As;
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
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
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
Y(ve, "PARTS", foundry.utils.mergeObject(z(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Y(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = z(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = ve;
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
    e._votvProfileImgClick = (l) => {
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
    }, e._votvInput = (l) => {
      var p;
      const u = l.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const m = (u == null ? void 0 : u.form) ?? ((p = u == null ? void 0 : u.closest) == null ? void 0 : p.call(u, "form"));
      d(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(m), 300));
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
Y(ke, "PARTS", foundry.utils.mergeObject(z(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Y(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = z(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
}));
let Ut = ke;
var Ps;
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
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
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
Y(we, "PARTS", foundry.utils.mergeObject(z(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Y(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = z(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Ht = we;
var $s;
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
      var p, f, g, c, i, r, o;
      if (!e.isEditable || !((f = (p = l.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((c = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : c.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const u = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new u({
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
      const u = e._getFormDataForUpdate(l);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, d = (l) => {
      var u, m, p;
      return l && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, l)) || e.id && ((p = l.closest) == null ? void 0 : p.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var m, p, f;
      const u = ((m = l.target) == null ? void 0 : m.form) ?? ((f = (p = l.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(u) && n(u);
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
Y(Ie, "PARTS", foundry.utils.mergeObject(z(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Y(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(Ie, Ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = z(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = Ie;
var xs, Rs;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var m, p, f, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (p = this.document) == null ? void 0 : p.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
      "root=",
      t
    ), n.on("click", ".karakter-ability-open", (c) => {
      var o, a, y, h;
      c.preventDefault();
      const i = (a = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!i) return;
      const r = (y = game.items) == null ? void 0 : y.get(i);
      (h = r == null ? void 0 : r.sheet) == null || h.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (c) => {
      var r, o;
      c.preventDefault();
      const i = (o = (r = c.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (c) => {
      var y, h, k;
      if (c.preventDefault(), !c.altKey) return;
      const i = (h = (y = c.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId;
      if (!i) return;
      const r = this.document.system ?? {}, a = (Array.isArray((k = r.abilities) == null ? void 0 : k.items) ? r.abilities.items.slice() : []).filter((S) => S !== i);
      await this.document.update({ "system.abilities.items": a });
    });
    const d = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
    if (d && (d.addEventListener("dragover", (c) => {
      var o, a;
      const i = ((o = c.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((a = c.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
      let r = null;
      if (typeof i == "string" && i.trim())
        try {
          r = JSON.parse(i.trim());
        } catch {
        }
      else i && typeof i == "object" && (r = i);
      !r || r.type !== "Item" || (c.preventDefault(), d.classList.add("karakter-ability-area-drag-over"));
    }), d.addEventListener("dragleave", () => {
      d.classList.remove("karakter-ability-area-drag-over");
    }), d.addEventListener("drop", async (c) => {
      var k, S, T;
      c.preventDefault(), d.classList.remove("karakter-ability-area-drag-over");
      const i = ((k = c.dataTransfer) == null ? void 0 : k.getData("text/plain")) || ((S = c.dataTransfer) == null ? void 0 : S.getData("application/json")) || "";
      let r = null;
      if (typeof i == "string" && i.trim())
        try {
          r = JSON.parse(i.trim());
        } catch {
          console.warn("VOTV JarmuEgysegSheet ability area drop: cannot parse drag data", i);
          return;
        }
      else i && typeof i == "object" && (r = i);
      if (console.log("VOTV JarmuEgysegSheet ability area drop json=", r), !r || r.type !== "Item" || !r.uuid) return;
      const o = await fromUuid(r.uuid);
      if (console.log("VOTV JarmuEgysegSheet ability area drop doc=", o == null ? void 0 : o.id, o == null ? void 0 : o.type), !o || o.type !== "Kepesseg" && o.type !== "ability") return;
      const a = o.uuid ?? o.id, y = e.document.system ?? {}, h = Array.isArray((T = y.abilities) == null ? void 0 : T.items) ? y.abilities.items.slice() : [];
      h.includes(a) || h.push(a), console.log("VOTV JarmuEgysegSheet ability area drop updating abilities.items to", h), await e.document.update({ "system.abilities.items": h });
    })), !this.isEditable) return;
    const l = (c) => {
      if (!c) return;
      const i = e._getFormDataForUpdate(c);
      Object.keys(i).length !== 0 && e.document.update(i).catch((r) => console.warn("VoidJarmuEgysegSheet save failed", r));
    }, u = (c) => {
      var i, r, o;
      return c && (((r = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, c)) || e.id && ((o = c.closest) == null ? void 0 : o.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var r, o, a;
      const i = ((r = c.target) == null ? void 0 : r.form) ?? ((a = (o = c.target) == null ? void 0 : o.closest) == null ? void 0 : a.call(o, "form"));
      u(i) && l(i);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, d = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext ids=", d);
    const u = (await Promise.all(
      d.map(async (m) => {
        var p;
        if (!m) return null;
        try {
          const f = await fromUuid(m);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (p = game.items) == null ? void 0 : p.get(m);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).filter((m) => !!m).map((m) => {
      var p;
      return {
        id: m.uuid ?? m.id,
        name: m.name,
        img: m.img,
        kp: Number(((p = m.system) == null ? void 0 : p.kp) ?? 0) || 0
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", u), e.system = t, e.abilityList = u, e;
  }
  async _postAbilityToChat(s) {
    var f, g, c, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((c = e.system) == null ? void 0 : c.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${u}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDrop(s) {
    var l, u, m, p, f;
    console.log("VOTV JarmuEgysegSheet _onDrop event=", s);
    const e = TextEditor.getDragEventData(s);
    if (console.log("VOTV JarmuEgysegSheet _onDrop data=", e), !e || e.type !== "Item")
      return (l = super._onDrop) == null ? void 0 : l.call(this, s);
    const n = ((g) => {
      var i;
      if (!g) return null;
      const c = g.uuid ?? g.documentUuid ?? ((i = g.data) == null ? void 0 : i.uuid) ?? (typeof g == "string" ? g : null);
      if (c) return c;
      if (typeof g == "object") {
        for (const r of Object.values(g))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) return r;
      }
      return null;
    })(e);
    if (console.log("VOTV JarmuEgysegSheet _onDrop uuid=", n), !n) return (u = super._onDrop) == null ? void 0 : u.call(this, s);
    const d = await fromUuid(n);
    if (console.log("VOTV JarmuEgysegSheet _onDrop doc=", d == null ? void 0 : d.id, d == null ? void 0 : d.type), !d || d.documentName !== "Item") return (m = super._onDrop) == null ? void 0 : m.call(this, s);
    if (d.type === "Kepesseg" || d.type === "ability") {
      const g = d.uuid ?? d.id, c = this.document.system ?? {}, i = Array.isArray((p = c.abilities) == null ? void 0 : p.items) ? c.abilities.items.slice() : [];
      i.includes(g) || i.push(g), console.log("VOTV JarmuEgysegSheet _onDrop updating abilities.items to", i), await this.document.update({ "system.abilities.items": i });
      return;
    }
    return (f = super._onDrop) == null ? void 0 : f.call(this, s);
  }
  // Nincs külön _handleAbilityDrop / _onDropItem – mindent az _onDrop intéz a DragDrop konfiguráció alapján.
};
Y(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), Y(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(ue, ue, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Gt = ue;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, d, l, u;
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
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  }), Hooks.on("updateActor", (m, p, f, g) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const c = m.id;
    setTimeout(() => {
      var a, y, h, k;
      const i = (a = game.actors) == null ? void 0 : a.get(c);
      if (!i || i.type !== "Karakter") return;
      const r = ht.getTotalSpeedRaw(i), o = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (r <= 0 && !o) {
        const S = ((k = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
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
            ((F = N == null ? void 0 : N.document) == null ? void 0 : F.actorId) === c && typeof N.draw == "function" && N.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else r > 0 && o && o.delete().then(() => {
        var T, O;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const F of S)
          ((O = F == null ? void 0 : F.document) == null ? void 0 : O.actorId) === c && typeof F.draw == "function" && F.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, p, f, g) => {
    var T, O, F, N, v, C, _, R, j, H, G, Z, W;
    const c = m == null ? void 0 : m.id;
    if (!c) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((T = p == null ? void 0 : p.system) != null && T.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((F = (O = m.system) == null ? void 0 : O.combat) == null ? void 0 : F.initiativeResult), J = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Se = ((N = re.combatants) == null ? void 0 : N.contents) ?? Array.from(re.combatants ?? []);
        for (const ye of Se)
          if (((v = ye.actor) == null ? void 0 : v.id) === c || ye.actorId === c) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: ye.id, initiative: J }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((C = p == null ? void 0 : p.system) != null && C.identity) && "size" in p.system.identity) {
      const M = js((R = (_ = m.system) == null ? void 0 : _.identity) == null ? void 0 : R.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((J) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, J));
    }
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), o = [], a = (j = game.actors) == null ? void 0 : j.get(c);
    a != null && a.apps && o.push(...Array.from(a.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of y) {
      if (((H = M.document) == null ? void 0 : H.id) !== c || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const J = (Z = M.constructor) == null ? void 0 : Z.name;
      J !== "VoidKarakterSheet" && J !== "VoidJarmuSheet" || o.includes(M) || o.push(M);
    }
    if (r && o.some((M) => {
      const J = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return J && J.contains(i);
    })) return;
    const k = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, S = k && Date.now() - k.at < s ? k.appId : null;
    setTimeout(() => {
      for (const M of o)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, p, f, g) => {
    var o, a, y;
    const c = m == null ? void 0 : m.parent;
    if (!c || c.documentName !== "Actor" || c.type !== "Karakter" || m.type !== "Fegyver") return;
    const i = ((o = c.system) == null ? void 0 : o.weapons) ?? {}, r = {};
    for (const [h, k] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !S || S !== m.id || (r[`system.weapons.${h}.name`] = m.name ?? "", r[`system.weapons.${h}.damage`] = ((a = m.system) == null ? void 0 : a.damage) ?? "", r[`system.weapons.${h}.bonus`] = ((y = m.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(r).length && c.update(r);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, k, S, T, O, F, N, v, C, _, R, j, H, G, Z, W, M, J, re, Se, ye, Te;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (k = game.messages) == null ? void 0 : k.get(n), l = (T = (S = d == null ? void 0 : d.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!l) return;
    const u = l.actorId ?? ((O = d == null ? void 0 : d.speaker) == null ? void 0 : O.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((F = game.actors) == null ? void 0 : F.get(l.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(u));
    if (m || (m = ((C = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : C.flatMap((de) => {
      var Fe;
      return ((Fe = de.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((de) => de.actor).find((de) => de && (de.id === u || de.id === l.actorId))) ?? null), !m) return;
    const p = l.itemId ? ((R = (_ = m.items) == null ? void 0 : _.get) == null ? void 0 : R.call(_, l.itemId)) ?? ((G = (H = (j = m.items) == null ? void 0 : j.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ae) => ae.id === l.itemId)) : null;
    let f = (l.damageFormula ?? "").trim();
    if (f || (f = (((Z = p == null ? void 0 : p.system) == null ? void 0 : Z.damage) ?? "").trim()), !f && l.slotKey && (f = (((((W = m.system) == null ? void 0 : W.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((re = (J = game.i18n) == null ? void 0 : J.localize) == null ? void 0 : re.call(J, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(f);
    await g.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", r = l.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (l.slotKey ? ((Te = (((ye = m.system) == null ? void 0 : ye.weapons) ?? {})[l.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    r && (a += ` (${r})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var l, u, m, p, f, g;
      if (!((u = (l = e.target) == null ? void 0 : l.closest) != null && u.call(l, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((g = game.actors) != null && g.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of e) {
      const m = ht.getTotalSpeedRaw(u), p = (n = u.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const f = ((l = (d = CONFIG.statusEffects) == null ? void 0 : d.find((g) => g.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await u.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: u.uuid
        }]).catch(() => {
        });
      } else m > 0 && p && await p.delete().catch(() => {
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
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Ms },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, l = await n.create(d);
      l && console.log("Vacuum of the Void | Default scene created:", l.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var l, u, m, p, f, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((l = game.actors) == null ? void 0 : l.filter((c) => c.type === "Karakter")) ?? [];
    for (const c of t)
      try {
        const i = c.prototypeToken, r = ((u = i == null ? void 0 : i.bar1) == null ? void 0 : u.attribute) ?? "", o = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (r || o) && await c.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", c.name, i);
      }
    for (const c of game.scenes ?? []) {
      const i = ((p = c.tokens) == null ? void 0 : p.filter((r) => {
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
    }, d = ((f = game.actors) == null ? void 0 : f.filter((c) => c.type === "Npc")) ?? [];
    for (const c of d)
      try {
        await c.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", c.name, i);
      }
    for (const c of game.scenes ?? []) {
      const i = ((g = c.tokens) == null ? void 0 : g.filter((r) => {
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
Hooks.on("preCreateToken", (I, s, e) => {
  var l, u, m, p;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (u = game.actors) == null ? void 0 : u.get(n) : null;
  if (d) {
    if (d.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (d.type === "Npc") {
      const f = js((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
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
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(I);
});
function zs() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], l = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const u of l)
      !u || I.has(u.id) || (I.add(u.id), typeof u.render == "function" && u.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
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
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var d;
  const t = I == null ? void 0 : I.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
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
  var p, f, g, c;
  const t = ((p = I.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, l = t.weaponAttack, u = t.weapon;
  if (!n && !d && !l) return;
  const m = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const i = m.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const r = m.querySelector(".dice-total"), o = (r == null ? void 0 : r.parentElement) ?? m, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (l && u && (u.actorId || (g = I.speaker) != null && g.actor)) {
      const i = m.querySelector(".dice-total"), r = (i == null ? void 0 : i.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const y = !!u.isHit, h = u.targetName || "Célpont";
        a.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, r.appendChild(a);
      }
      if (u.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = u.hitLocationRoll, k = u.hitLocationName;
        y.textContent = h != null && k ? `Sebzés (Találati Hely ${h} - ${k})` : "Sebzés", y.dataset.actorId = String(u.actorId ?? ((c = I.speaker) == null ? void 0 : c.actor) ?? ""), y.dataset.itemId = String(u.itemId ?? ""), y.dataset.slotKey = String(u.slotKey ?? ""), y.dataset.targetName = String(u.targetName ?? ""), y.dataset.hitLocationName = String(u.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), r.appendChild(y);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-VHYQjRD2.mjs.map
