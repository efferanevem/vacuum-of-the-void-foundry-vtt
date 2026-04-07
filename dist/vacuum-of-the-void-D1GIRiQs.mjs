var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (I, s, e) => s in I ? Hs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var Y = (I, s, e) => Vs(I, typeof s != "symbol" ? s + "" : s, e);
var z = (I, s, e) => Gs(Bs(I), e, s);
const { HTMLField: Ws, NumberField: F, SchemaField: U, StringField: O, BooleanField: te, ArrayField: yt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new U({
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
      resources: new U({
        health: new U({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new U({
          head: new U({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new U({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new U({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new U({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new U({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new U({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new U({
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
      combat: new U({
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
        initiativeRanges: new yt(
          new U({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new U({
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
      weapons: new U({
        slotOrder: new O({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new U({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new U({
        microchips: new U({
          slot1: new U({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot2: new U({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot3: new U({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          })
        }),
        equipment: new O({ required: !1, blank: !0, initial: "" }),
        armor: new yt(
          new U({
            name: new O({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new O({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new O({ required: !1, blank: !0, initial: "" }),
            level: new O({ required: !1, blank: !0, initial: "" }),
            other: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new yt(
          new U({
            name: new O({ required: !1, blank: !0, initial: "" }),
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new U({
        faji: new U({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new U({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        passive: new U({
          items: new yt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new U({
          items: new yt(
            new O({ required: !1, blank: !0 }),
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
  const p = (l, i = 1) => {
    if (!Array.isArray(l)) return;
    let c = i;
    for (const a of l) {
      if (!a) continue;
      if (Array.isArray(a.terms)) {
        p(a.terms, c);
        continue;
      }
      if (typeof a.operator == "string") {
        c = a.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof a.faces == "number" ? a.faces : void 0, y = Array.isArray(a.results) ? a.results : null;
      if (!r || !y || r === 8 || r !== 6) continue;
      const h = !n && c >= 0 && (a.number === 3 || a.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const k of y) {
        if (!k || k.discarded || k.hidden) continue;
        const S = Number(k.result ?? k);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  p(I.terms, 1);
  const o = s.filter((l) => l === 6).length, u = s.filter((l) => l === 1).length, m = e.filter((l) => l === 6).length, d = t.filter((l) => l === 6).length, f = o + m, g = u + d;
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
    var n, p, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    var a;
    const t = (a = game.votv) == null ? void 0 : a._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (p) {
      u.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = o.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (u.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const d = this.element, f = this.form ?? this.element, g = u.scrollState, l = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", c = () => {
      var r, y;
      if (this._applyScrollState(d, g), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(d, g);
    };
    return (i || l) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const p = Math.floor(n / 3), o = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((p = o.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((p = o.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let t = 0;
    for (const o of e) {
      const u = String(((p = o.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, g, l, i, c, a, r, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : g.value) ?? 0, n = ((l = e.currentHealth) == null ? void 0 : l.legs) ?? 0, p = V._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const o = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let u;
    p === 1 ? u = -6 : p === 2 ? u = -3 : u = o, u += V._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((r = (a = s.system) == null ? void 0 : a.combat) == null ? void 0 : r.speed) ?? 0) || 0, d = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + d + (Number.isFinite(u) ? u : 0);
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
    var g, l, i, c, a, r, y, h, k, S, T, D;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, o = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, u = V._healthStatusFromRatio(o, p), m = Number(((D = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let d;
    u === 0 ? d = 0 : u === 1 ? d = -6 : u === 2 ? d = -3 : d = m;
    const f = this._getTotalArmorSpeedPenalty();
    d += f, t.textContent = String(d);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var d, f, g, l, i, c, a, r, y, h, k, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (d = e == null ? void 0 : e.querySelector) == null ? void 0 : d.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((l = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : l.givenProtection) ?? 0) || 0, p = (a = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && a.call(c, "lookaround") ? 1 : 0, o = (h = (y = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, u = (T = (S = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + p + o + u;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var l;
      return ((l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), o = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(o == null ? void 0 : o.value) || 0, d = Number(u == null ? void 0 : u.value) || 0, f = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(m + d + f);
  }
  _writeTotalSpeed(s = null) {
    var a, r, y, h, k, S, T, D;
    const e = s ?? this.form ?? this.element, t = (q) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, q)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${q}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), o = t('input[name="system.combat.speed"]'), u = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (r = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : r.has) != null && y.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((k = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : k.resources) ?? {}, d = ((T = (S = m.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((D = m.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (V._healthStatusFromRatio(f, d) === 0) {
      n.textContent = "0";
      return;
    }
    const l = Number(o == null ? void 0 : o.value) || 0, i = Number(u == null ? void 0 : u.value) || 0, c = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(l + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, u, m, d;
    const e = V.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, n = ((m = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : m.value) ?? 0, p = ((d = t.currentHealth) == null ? void 0 : d[e]) ?? 0;
    return V._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, m, d, f;
    const t = V.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, p = ((d = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : d.value) ?? 0, o = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return V._healthStatusFromRatio(o, p);
  }
  async _prepareContext(s) {
    var tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re, w, P, x, B, oe, X, ge, pe, ce, _e, Me, je, Ot, Ct, qt, Lt, mt, We, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((it = (st = (tt = this.actor.system) == null ? void 0 : tt.resources) == null ? void 0 : st.stress) == null ? void 0 : it.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, o = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of u) {
      const A = ((nt = p[b]) == null ? void 0 : nt.value) ?? 0, N = o[b] ?? 0;
      e.computedHealthStatus[b] = V._healthStatusFromRatio(N, A);
    }
    const m = (Number(o.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(o[b]) || 0) === 0).length;
    e.showDeathSkull = m || f >= 2;
    const g = e.computedHealthStatus.legs ?? 3, l = Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = l;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const a = Number(((ct = (ot = this.actor.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.givenProtection) ?? 0) || 0, r = (ut = (xe = (lt = this.actor) == null ? void 0 : lt.statuses) == null ? void 0 : xe.has) != null && ut.call(xe, "lookaround") ? 1 : 0, y = (w = (Re = (dt = this.actor) == null ? void 0 : dt.statuses) == null ? void 0 : Re.has) != null && w.call(Re, "halfcover") ? 3 : 0, h = (B = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && B.call(x, "threequarteredcover") ? 6 : 0, k = a + this._getTotalArmorProtectionBonus() + r + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let D = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    g === 0 && (D = 0), (pe = (ge = (X = this.actor) == null ? void 0 : X.statuses) == null ? void 0 : ge.has) != null && pe.call(ge, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const q = V.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, A] of Object.entries(q)) {
      const N = e.computedHealthStatus[A];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = (_.slotOrder ?? "").trim(), C = L ? L.split(/\s*,\s*/).filter((b) => v.includes(b)) : [], R = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, j = R && typeof R == "object" && !Array.isArray(R) ? R : {}, H = (((je = j.slot1) == null ? void 0 : je.itemId) ?? "").trim(), G = (((Ot = j.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Z = (((Ct = j.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), M = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, A) => {
      const N = typeof b.sort == "number" ? b.sort : 0, E = typeof A.sort == "number" ? A.sort : 0;
      return N - E;
    }).map((b) => {
      var Oe, ze, Ue, qe, Le, pt;
      const A = b.type === "Fegyver", N = b.type === "MikroChip";
      let E = 0, K = "", ee = null;
      for (let Je = 0; Je < C.length; Je++) {
        const ft = C[Je];
        if ((((Oe = _[ft]) == null ? void 0 : Oe.itemId) ?? "") === b.id) {
          E = Je + 1, K = ((ze = _[ft]) == null ? void 0 : ze.bonus) ?? "", ee = ft;
          break;
        }
      }
      let Q = null;
      N && (H === b.id ? Q = "slot1" : G === b.id ? Q = "slot2" : Z === b.id && (Q = "slot3"));
      const Ke = A && ((Ue = b.system) != null && Ue.damage) ? b.system.damage : "", le = A && typeof ((qe = b.system) == null ? void 0 : qe.range) == "string" ? (b.system.range || "").trim() : "", fe = ee ? Number((Le = _[ee]) == null ? void 0 : Le.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: A,
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
    const Se = "— Nincs fegyver —", ye = C.filter((b) => {
      const N = ((_[b] ?? {}).itemId ?? "").trim();
      return N ? !!J.find((K) => K.id === N) : !1;
    });
    e.weaponSlots = ye.map((b, A) => {
      const N = _[b] ?? {}, E = (N.itemId ?? "").trim(), K = re.find((fe) => fe.id === E), ee = J.find((fe) => fe.id === E), Q = (ee == null ? void 0 : ee.system) ?? {}, Ke = Q.size === "thrown", le = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: E,
        slotNum: A + 1,
        displayName: (K == null ? void 0 : K.name) || N.name || Se,
        img: (K == null ? void 0 : K.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: Ke,
        rangeStr: le
      };
    });
    const Te = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = J.map((b) => {
      var ls, us, ds;
      const A = b.id;
      let N = null, E = {};
      for (const Ft of C)
        if ((((ls = _[Ft]) == null ? void 0 : ls.itemId) ?? "").trim() === A) {
          N = Ft, E = _[Ft] ?? {};
          break;
        }
      const K = !!N, ee = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : K, Q = (b == null ? void 0 : b.system) ?? {}, Ke = typeof Q.range == "string" ? (Q.range || "").trim() : "", le = Q.type ?? "", fe = (Te[le] ?? le) || "—", Oe = Q.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [fe, ze].filter(Boolean).join(", ") || fe || "—", qe = le === "projectile" || Oe === "thrown", Le = Q.quantity, pt = Le != null ? String(Le).trim() : "1", Je = String(E.bonus ?? "").trim(), ft = String(Q.bonus ?? "").trim(), Us = Je || ft || "0";
      return {
        slotKey: N ?? "",
        itemId: A,
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
      const A = (b == null ? void 0 : b.system) ?? {}, N = ((E = b.system) == null ? void 0 : E.equipped) !== void 0 && ((K = b.system) == null ? void 0 : K.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (A.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (A.speedPenalty ?? "").toString().trim() || "—",
        level: li((A.level ?? "").toString().trim()),
        special: (A.special ?? A.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const Ae = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = Ae.map((b) => {
      const A = (b == null ? void 0 : b.system) ?? {}, N = (A.description ?? "").trim(), E = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", K = A.quantity != null ? String(A.quantity).trim() : "1";
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
      const N = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), E = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: E
      };
    });
    const bt = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), ne = bt.map((b) => ({ id: b.id, name: b.name, img: b.img })), Ye = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (b) => {
      var N, E, K;
      const A = [];
      return b !== 1 && A.push((((N = j.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && A.push((((E = j.slot2) == null ? void 0 : E.itemId) ?? "").trim()), b !== 3 && A.push((((K = j.slot3) == null ? void 0 : K.itemId) ?? "").trim()), A.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((b) => !Be(1).includes(b.id)), e.microchipItemsSlot2 = ne.filter((b) => !Be(2).includes(b.id)), e.microchipItemsSlot3 = ne.filter((b) => !Be(3).includes(b.id)), e.microchipSlots = De.map((b) => {
      const A = j[b] ?? {}, N = (A.itemId ?? "").trim(), E = bt.find((K) => K.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (E == null ? void 0 : E.name) || A.name || Ye,
        img: (E == null ? void 0 : E.img) || "",
        active: A.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const A = `slot${b}`, N = j[A] ?? {}, E = (N.itemId ?? "").trim(), K = ne.find((ee) => ee.id === E);
      e[`microchip${b}ItemId`] = E, e[`microchip${b}DisplayName`] = (K == null ? void 0 : K.name) || N.name || Ye, e[`microchip${b}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = bt.map((b) => {
      var Oe, ze, Ue, qe;
      const A = b.id;
      let N = null;
      for (const Le of De)
        if ((((Oe = j[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === A) {
          N = Le;
          break;
        }
      const E = !!N, K = ((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.abilityType) ?? "", ee = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", Q = K === "active", Ke = Number((Ue = b == null ? void 0 : b.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, le = (((qe = b == null ? void 0 : b.system) == null ? void 0 : qe.description) ?? "").trim(), fe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: A,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ee,
        description: fe,
        kp: Ke,
        isActive: Q,
        slotKey: N ?? "",
        equipped: E
      };
    });
    const vt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Wt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var A, N, E;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((A = b.system) == null ? void 0 : A.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((E = b.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), Ge = new Map(Wt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Xe = (b) => {
      const A = kt[b] ?? {}, N = (A.itemId ?? "").trim(), E = N ? Ge.get(N) : null, K = (E == null ? void 0 : E.description) ?? "", ee = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: N,
        displayName: (E == null ? void 0 : E.name) || A.name || wt,
        img: (E == null ? void 0 : E.img) || "",
        description: K,
        kp: ee
      };
    };
    e.abilityFajiSlot = Xe("faji"), e.abilityHatterSlot = Xe("hatter");
    const Qe = (b) => {
      const A = kt[b];
      return A ? Array.isArray(A == null ? void 0 : A.items) ? A.items : Array.isArray(A) ? A : [] : [];
    }, Ze = (b) => b.map((A) => {
      const N = Ge.get(A);
      return N ? {
        id: N.id,
        name: N.name,
        img: N.img,
        description: N.description,
        kp: N.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ze(Qe("passive")), e.abilityActiveList = Ze(Qe("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Fe = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, me = typeof Fe == "number" ? Fe : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ee = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Pe = Array.isArray(Ee) ? Ee.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ce = (Pe.length > 0 ? Pe : St).slice().sort((b, A) => b.min - A.min), $e = Pe.map((b) => b.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Pe.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let et = 0;
    if (typeof me == "number" && me >= 0 && Ce.length > 0) {
      const b = Ce[0], A = Ce[Ce.length - 1];
      let N = null;
      me <= b.max ? N = b : me >= A.min ? N = A : N = Ce.find((E) => me >= E.min && me <= E.max), N && (et = N.kp);
    }
    e.kpDots = Ve.map((b, A) => {
      const N = A + 1, E = !!Number(It[b]), K = N <= et;
      return { index: N, used: E, usable: K };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((b) => {
      var A;
      return ((A = b.actor) == null ? void 0 : A.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Fe == "number", e.initiativeResult = e.showInitiativeResult ? Fe : "", e;
  }
  _attachFrameListeners(s) {
    var g, l;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-BXETO1OP.mjs");
      r(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let a = (c.dataset.itemId ?? "").trim();
      if (!a) {
        const k = (c.dataset.slot ?? "").trim();
        if (!k) return;
        a = (((((y = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : y.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-BXETO1OP.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, k;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, a = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(a) || a < 1 || a > 6) return;
      const r = `system.resources.kpDot${a}`, y = !!Number((k = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : k[`kpDot${a}`]);
      await this.actor.update({ [r]: y ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const c = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const a = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
    const o = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', o), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const c = ((h = (y = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : y.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (k) => {
          k && this.actor.update({ img: k });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const c = i.currentTarget, a = c.dataset.skill, r = ((h = c.textContent) == null ? void 0 : h.trim()) || a, { openRollSheetForSkill: y } = await import("./roll-sheet-BXETO1OP.mjs");
      y(this.actor, a, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, D, q, _, v, L;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), r = a == null ? void 0 : a.dataset.slot;
      if (!r) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const k = ((q = (D = this.actor.items).get) == null ? void 0 : q.call(D, h)) ?? ((v = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : v.call(_, (C) => C.id === h));
      (L = k == null ? void 0 : k.sheet) == null || L.render(!0);
    });
    const u = (i, c) => {
      var y;
      const a = i.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (y = r.sheet) == null || y.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, a = c.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r) return;
      let y = Number(c.value);
      (!Number.isFinite(y) || y < 0) && (y = 0), await r.update({ "system.quantity": y });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor, y = r.items.get(a);
      if (!y) return;
      const h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = r.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], q = D.find((_) => {
          var v;
          return (((v = k[_]) == null ? void 0 : v.itemId) ?? "").trim() === a;
        });
        if (q) {
          const _ = D.filter((v) => v !== q);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, _;
      const c = i.currentTarget, a = (c.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => k.includes(v)) : [], T = S.find((v) => {
        var L;
        return (((L = y[v]) == null ? void 0 : L.itemId) ?? "").trim() === a;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let v = S.find((C) => {
          var R;
          return !((R = y[C]) != null && R.itemId);
        });
        const L = new Set(S);
        if (!v) {
          const C = k.find((R) => !L.has(R));
          if (!C) return;
          v = C, S.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: a,
          [`system.weapons.${v}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${v}.damage`]: ((q = r == null ? void 0 : r.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((_ = r == null ? void 0 : r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((L) => L !== T);
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
      const a = c.closest(".karakter-microchip-slot-select-wrap"), r = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var v;
      i.preventDefault();
      const c = i.currentTarget, a = c.closest(".karakter-microchip-slot-select-wrap"), r = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), y = r == null ? void 0 : r.dataset.slot;
      if (!y) return;
      const h = (c.dataset.itemId ?? "").trim(), k = (c.dataset.itemName ?? ((v = c.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (c.dataset.itemImg ?? "").trim(), T = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = k);
      let D = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      S ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", r == null || r.insertBefore(D, T)), D.src = S, D.style.display = "") : D && D.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const q = h ? this.actor.items.get(h) : null, _ = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      h && (_[`system.gear.microchips.${y}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, S;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "MikroChip") return;
      const r = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = r[T]) == null ? void 0 : D.itemId) ?? "").trim() === c;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const a = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const a = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, a)), c.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, a));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const a = c.dataset.slot;
      a && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, a)), c.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const a = c.dataset.area;
      a && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, a)), c.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, a = i.currentTarget.dataset.itemId;
      if (!c || !a) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((k = r[c]) == null ? void 0 : k.items) ? r[c].items.slice() : []).filter((S) => S !== a);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var y;
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      (y = r == null ? void 0 : r.sheet) == null || y.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(a) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, a = (c.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const y = (c.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, a = (c.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, _;
      const c = i.currentTarget, a = (c.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => k.includes(v)) : [], T = S.find((v) => {
        var L;
        return (((L = y[v]) == null ? void 0 : L.itemId) ?? "").trim() === a;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let v = S.find((C) => {
          var R;
          return !((R = y[C]) != null && R.itemId);
        });
        const L = new Set(S);
        if (!v) {
          const C = k.find((R) => !L.has(R));
          if (!C) return;
          v = C, S.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: a,
          [`system.weapons.${v}.name`]: r.name ?? "",
          [`system.weapons.${v}.damage`]: ((q = r.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((_ = r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const v = S.filter((L) => L !== T);
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
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor, y = r.items.get(a), h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = r.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], q = D.find((_) => {
          var v;
          return (((v = k[_]) == null ? void 0 : v.itemId) ?? "").trim() === a;
        });
        if (q) {
          const _ = D.filter((v) => v !== q);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const c = i.currentTarget, a = (c.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Targy") return;
      const y = (c.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const m = this, d = (i) => {
      var r, y, h, k;
      if (!i) return;
      const c = m._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const a = ((y = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : y.currentHealth) != null || ((k = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : k.hitLocations) != null;
      m.actor.update(c).then(() => {
        a && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var c, a, r;
      return i && (((a = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : a.call(c, i)) || m.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const a = c.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const r = c.form;
      if (!f(r)) return;
      const y = i.relatedTarget;
      y && (r.contains(y) || m.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), d(r));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, m, d;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      f.type === "checkbox" ? g = f.checked : f.type === "number" ? g = f.value === "" ? 0 : Number(f.value) : g = f.value ?? "", foundry.utils.setProperty(e, f.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const f of o) {
      const g = ((d = n[f]) == null ? void 0 : d.value) ?? 0, l = p[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, V._healthStatusFromRatio(l, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, o, u, m, d, f, g, l, i, c;
    if (e) {
      let a = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!a && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            a = r;
            break;
          }
      }
      if (a) {
        const r = await fromUuid(a);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let y = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            y = ((p = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : p.id) ?? y;
          }
          const h = (((o = r.system) == null ? void 0 : o.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
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
          const S = h === "active" ? "active" : "passive", T = Array.isArray((u = k[S]) == null ? void 0 : u.items) ? k[S].items.slice() : Array.isArray(k[S]) ? k[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let a = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
      if (!a && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            a = r;
            break;
          }
      }
      if (a) {
        const r = await fromUuid(a);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const y = this.actor, h = ((d = r.parent) == null ? void 0 : d.id) !== y.id;
          let k = r.id;
          if (h) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            k = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? k;
          }
          if (h) {
            const S = ((g = y.system) == null ? void 0 : g.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = T ? T.split(/\s*,\s*/).filter((v) => D.includes(v)) : [], _ = q.filter((v) => {
              var L;
              return (((L = S[v]) == null ? void 0 : L.itemId) ?? "").trim() === k;
            });
            if (_.length > 0) {
              const L = {
                "system.weapons.slotOrder": q.filter((C) => !_.includes(C)).join(",")
              };
              for (const C of _)
                L[`system.weapons.${C}.itemId`] = "", L[`system.weapons.${C}.name`] = "", L[`system.weapons.${C}.damage`] = "", L[`system.weapons.${C}.bonus`] = "";
              await y.update(L);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const y = this.actor;
          if (((l = r.parent) == null ? void 0 : l.id) !== y.id) {
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
          ((c = r.parent) == null ? void 0 : c.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, o, u;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, m, d, f, g, l;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const o = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: p.name,
      [`system.weapons.${e}.damage`]: ((g = p.system) == null ? void 0 : g.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((l = p.system) == null ? void 0 : l.bonus) ?? ""
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
    const p = this.actor.items.contents.slice().sort((g, l) => {
      const i = typeof g.sort == "number" ? g.sort : 0, c = typeof l.sort == "number" ? l.sort : 0;
      return i - c;
    }).map((g) => g.id), o = p.indexOf(t), u = p.indexOf(e);
    if (o === -1 || u === -1) return;
    p.splice(o, 1), p.splice(u, 0, t);
    const m = p.map((g, l) => ({
      _id: g,
      sort: (l + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(s) {
    var n, p, o;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var m, d, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const l = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        l > 0 && (p = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${o}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, g, l;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, p = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = p ? `<p>${p}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${m}
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
    var o, u, m;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((m = (await this.actor.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : m.id) ?? p;
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
    var m, d, f, g;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : f.id) ?? p;
    }
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((g = o[e]) == null ? void 0 : g.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(p) || u.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, o, u;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, m, d, f, g;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let o = p.id;
    ((f = p.parent) == null ? void 0 : f.id) !== this.actor.id && (o = ((g = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : g.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let p = Number(n) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? p -= 6 : o === 2 && (p -= 3);
    const m = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, d = new Roll(m);
    await d.evaluate({ async: !0 });
    const { resultType: f, label: g } = xt(d), l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: g } },
      rollMode: l
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
    var o;
    const s = Number(((o = this.actor.system.skills) == null ? void 0 : o.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    let o = null;
    t.itemId && (o = p.find((D) => D.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, d = ((S = o == null ? void 0 : o.system) == null ? void 0 : S.type) || "kinetic", f = (((T = o == null ? void 0 : o.system) == null ? void 0 : T.skillKey) ?? "").trim(), g = f && n[f] !== void 0 ? f : d === "explosive" ? "grenadeUse" : "firearms", l = Number(n[g] || 0) || 0, i = m + l, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(a);
    await r.evaluate({ async: !0 });
    const { resultType: y, label: h } = xt(r), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, d, f, g, l, i, c, a, r, y;
    const t = this.actor;
    if (!t) return;
    let n = ((d = (m = t.items).get) == null ? void 0 : d.call(m, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (c = ui.notifications) == null ? void 0 : c.warn) == null || y.call(c, ((r = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : r.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(p);
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
    var n, p, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = n.contains(i), a = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && a && (p.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const o = await super.render(s, e), u = this.element, m = this.form ?? this.element, d = p.scrollState, f = p.focus, g = typeof (d == null ? void 0 : d.formScrollTop) == "number" || typeof (d == null ? void 0 : d.windowScrollTop) == "number", l = () => {
      var i, c;
      if (this._applyScrollState(u, d), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const a = ((i = m.querySelector) == null ? void 0 : i.call(m, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (c = m.querySelector) == null ? void 0 : c.call(m, `[name="${CSS.escape(f.name)}"]`) : null);
        a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA") && (a.focus({ preventScroll: !0 }), typeof a.selectionStart == "number" && (a.selectionStart = f.selectionStart ?? 0, a.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, d);
    };
    return (g || f) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), o;
  }
  async _prepareContext(s) {
    var Xe, Qe, Ze, It, Ve, Fe, me, St, Ee, Pe, At, Ce, $e, Tt, Dt, et, _t, tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Xe = this.actor) == null ? void 0 : Xe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, o = (Fe = (Ve = t == null ? void 0 : t.statuses) == null ? void 0 : Ve.has) != null && Fe.call(Ve, "lookaround") ? 1 : 0, u = (St = (me = t == null ? void 0 : t.statuses) == null ? void 0 : me.has) != null && St.call(me, "halfcover") ? 3 : 0, m = (Pe = (Ee = t == null ? void 0 : t.statuses) == null ? void 0 : Ee.has) != null && Pe.call(Ee, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + o + u + m;
    const d = ((At = t == null ? void 0 : t.items) == null ? void 0 : At.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (f.slotOrder ?? "").trim(), i = l ? l.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], c = d.filter((w) => w.type === "Fegyver"), a = c.map((w) => ({ id: w.id, name: w.name, img: w.img })), r = "— Nincs fegyver —", y = i.length > 0 ? i : g, h = g.filter((w) => !y.includes(w)), k = [...y, ...h], S = k.filter((w) => {
      var x;
      const P = (((x = f[w]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && c.some((B) => B.id === P);
    });
    e.weaponSlots = S.map((w) => {
      const P = f[w] ?? {}, x = (P.itemId ?? "").trim(), B = a.find((ce) => ce.id === x), oe = c.find((ce) => ce.id === x), X = (oe == null ? void 0 : oe.system) ?? {}, ge = X.size === "thrown", pe = (typeof X.range == "string" ? (X.range || "").trim() : "") || "—";
      return {
        slotKey: w,
        itemId: x,
        displayName: (B == null ? void 0 : B.name) || P.name || r,
        img: (B == null ? void 0 : B.img) || "",
        isThrown: ge,
        rangeStr: pe
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((w) => {
      var mt;
      const P = w.id;
      let x = null, B = {};
      for (const We of k)
        if ((((mt = f[We]) == null ? void 0 : mt.itemId) ?? "").trim() === P) {
          x = We, B = f[We] ?? {};
          break;
        }
      const oe = !!x, X = (w == null ? void 0 : w.system) ?? {}, ge = typeof X.range == "string" ? (X.range || "").trim() : "", pe = X.type ?? "", ce = (T[pe] ?? pe) || "—", _e = X.size ?? "", Me = (D[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = pe === "projectile" || _e === "thrown", Ct = X.quantity != null ? String(X.quantity).trim() : "1", qt = String(X.bonus ?? B.bonus ?? "").trim() || "0", Lt = (X.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? r,
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
    const q = d.filter((w) => w.type === "Pancel");
    e.armorTable = q.map((w) => {
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
    const _ = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], L = d.filter((w) => w.type === "MikroChip");
    e.microchipsTable = L.map((w) => {
      var pe, ce, _e, Me;
      const P = w.id;
      let x = null;
      for (const je of v)
        if ((((pe = _[je]) == null ? void 0 : pe.itemId) ?? "").trim() === P) {
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
    const C = d.filter((w) => w.type === "Targy");
    e.itemsTable = C.map((w) => {
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
    const R = d.filter((w) => w.type === "Egyeb");
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
    const H = ((it = t == null ? void 0 : t.system) == null ? void 0 : it.abilities) ?? {}, G = d.filter((w) => w.type === "Kepesseg" || w.type === "ability").map((w) => {
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
    ], Ae = (xe = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Ae) ? Ae.map((w) => ({ min: Number(w.min) ?? 0, max: Number(w.max) ?? 0, kp: Math.min(10, Math.max(0, Number(w.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : de).slice().sort((w, P) => w.min - P.min), Ye = 3;
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
    var d, f, g;
    super._attachFrameListeners(s);
    const e = ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (l) => {
      var a, r, y;
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const i = ((y = (r = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (l) => {
      var a, r, y;
      l.preventDefault();
      const i = (r = (a = l.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (y = c == null ? void 0 : c.sheet) == null || y.render(!0);
    });
    const n = (l) => {
      var a, r;
      const i = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (l) => {
      var r, y, h, k;
      l.preventDefault();
      const i = (y = (r = l.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : y.call(r, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const a = this.actor.items.get(c);
      (k = a == null ? void 0 : a.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (l) => {
      var r;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, c = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-BXETO1OP.mjs");
      a(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (l) => {
      var a, r, y, h, k;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget;
      let c = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !c && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (c = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (l) => {
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BXETO1OP.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (l) => {
      var r, y;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const a = !!Number((y = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : y[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: a ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (l) => {
      var y, h;
      l.preventDefault();
      const i = l.currentTarget, c = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), a = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-BXETO1OP.mjs");
      r(this.actor, c, a);
    }), t.on("click", ".karakter-ability-chat", async (l) => {
      var c, a;
      l.preventDefault();
      const i = (a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (l) => {
      var a, r;
      l.preventDefault();
      const i = (((r = (a = l.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (l) => {
      var h, k, S, T, D, q;
      if (l.preventDefault(), !l.altKey) return;
      const i = (k = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.area, c = (T = (S = l.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const a = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, y = (Array.isArray((q = a[i]) == null ? void 0 : q.items) ? a[i].items.slice() : []).filter((_) => _ !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (l) => {
      var c, a;
      if (l.preventDefault(), !l.altKey) return;
      const i = (a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (l) => {
      var h, k;
      if (l.preventDefault(), !l.altKey) return;
      const i = l.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const a = this.actor, r = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), y = {};
      r && (y[`system.weapons.${r}.itemId`] = "", y[`system.weapons.${r}.name`] = "", y[`system.weapons.${r}.damage`] = "", y[`system.weapons.${r}.bonus`] = ""), Object.keys(y).length && await a.update(y), await a.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (l) => {
      var c, a;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (l) => {
      var y, h, k, S;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((h = (y = l.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = c[T]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (l) => {
      var a, r;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((r = (a = l.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, p)) == null || g.forEach((l) => {
      var i;
      (((i = l.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (l.draggable = !0);
    }), t.on("dragstart", p, (l) => {
      var y, h, k;
      const i = l.currentTarget, c = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const a = this.actor.items.get(c);
      if (!a) return;
      const r = a.uuid;
      l.dataTransfer && (l.dataTransfer.setData("text/plain", r), l.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), l.dataTransfer.effectAllowed = "copyMove"), typeof ((k = l.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && l.dataTransfer.setDragImage(i, 0, 0);
    });
    const o = this, u = (l) => {
      if (!l) return;
      const i = o._getFormDataForUpdate(l);
      Object.keys(i).length !== 0 && o.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, m = (l) => {
      var i, c, a;
      return l && (((c = (i = o.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, l)) || o.id && ((a = l.closest) == null ? void 0 : a.call(l, `#${CSS.escape(o.id)}`)));
    };
    o._votvNpcBlur = (l) => {
      var y;
      const i = l.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const a = i.form;
      if (!m(a)) return;
      const r = l.relatedTarget;
      r && (a.contains(r) || o.id && ((y = r.closest) != null && y.call(r, `#${CSS.escape(o.id)}`))) || u(a);
    }, document.body.addEventListener("blur", o._votvNpcBlur, !0), o._votvNpcItemHookRegistered || (o._votvNpcItemUpdateHook = (l, i, c) => {
      var a;
      o.actor && ((a = l == null ? void 0 : l.parent) == null ? void 0 : a.id) === o.actor.id && o.render(!0);
    }, o._votvNpcItemDeleteHook = (l, i, c) => {
      var a;
      o.actor && ((a = l == null ? void 0 : l.parent) == null ? void 0 : a.id) === o.actor.id && o.render(!0);
    }, Hooks.on("updateItem", o._votvNpcItemUpdateHook), Hooks.on("deleteItem", o._votvNpcItemDeleteHook), o._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const o = this._getFormDataForUpdate(e);
      Object.keys(o).length > 0 && await this.actor.update(o).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
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
    var T, D, q, _, v;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, p = ((D = e.system) == null ? void 0 : D.skills) ?? {}, o = ((q = e.items) == null ? void 0 : q.filter((L) => L.type === "Fegyver")) ?? [];
    let u = null;
    n.itemId && (u = o.find((L) => L.id === n.itemId) ?? null);
    const m = u && u.name || n.name || "Fegyver", d = Number(n.bonus || 0) || 0, f = ((_ = u == null ? void 0 : u.system) == null ? void 0 : _.type) || "kinetic", g = (((v = u == null ? void 0 : u.system) == null ? void 0 : v.skillKey) ?? "").trim(), l = g && p[g] !== void 0 ? g : f === "explosive" ? "grenadeUse" : "firearms", i = Number(p[l] || 0) || 0, c = d + i, r = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, y = new Roll(r);
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
    var m, d, f, g, l, i, c, a, r, y;
    const t = this.actor;
    if (!t) return;
    const n = ((d = (m = t.items).get) == null ? void 0 : d.call(m, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (c = ui.notifications) == null ? void 0 : c.warn) == null || y.call(c, ((r = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : r.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(p);
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
    var f, g, l, i, c, a, r, y, h, k, S, T, D, q, _, v, L;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((C) => {
      var j;
      if (!C) return null;
      const R = C.uuid ?? C.documentUuid ?? ((j = C.data) == null ? void 0 : j.uuid) ?? (typeof C == "string" ? C : null);
      if (R) return R;
      if (typeof C == "object") {
        for (const H of Object.values(C))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!n) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (l = super._onDropItem) == null ? void 0 : l.call(this, s, e);
    if (p.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const o = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      let C = p.id;
      if (((a = p.parent) == null ? void 0 : a.id) !== o.id) {
        const Z = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        C = ((r = (await o.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : r.id) ?? C;
      }
      const R = (((y = p.system) == null ? void 0 : y.kind) ?? "passive").toString(), j = ((h = o.system) == null ? void 0 : h.abilities) ?? {}, H = R === "active" ? "active" : "passive", G = Array.isArray((k = j[H]) == null ? void 0 : k.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      G.includes(C) || G.push(C), await o.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = p.parent) == null ? void 0 : S.id) === o.id) return;
    const u = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const d = (T = (await o.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : T.id;
    if (p.type === "Fegyver" && d) {
      const C = ((D = o.system) == null ? void 0 : D.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (C.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((W) => R.includes(W)) : [];
      let G = R.find((W) => {
        var M;
        return !(((M = C[W]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((W) => !H.includes(W)) ?? "slot1");
      const Z = H.includes(G) ? H : [...H, G].filter((W) => R.includes(W));
      await o.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: d,
        [`system.weapons.${G}.name`]: p.name ?? "",
        [`system.weapons.${G}.damage`]: ((q = p.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((_ = p.system) == null ? void 0 : _.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && d) {
      const C = ((L = (v = o.system) == null ? void 0 : v.gear) == null ? void 0 : L.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = C[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      j && await o.update({
        [`system.gear.microchips.${j}.itemId`]: d,
        [`system.gear.microchips.${j}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, g, l, i, c, a;
    const e = (g = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((l = e.system) == null ? void 0 : l.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = p ? `<p>${p}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((a = this.actor) == null ? void 0 : a.name) ?? void 0 }),
      content: d,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var m, d, f, g, l, i;
    const e = (d = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : d.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const c = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const a = Number(((l = e.system) == null ? void 0 : l.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
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
      let p;
      if (n.type === "checkbox")
        p = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        p = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const o = (n.value ?? "").trim();
        if (o === "") continue;
        p = Number(o) || 0;
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
    var n, p, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    var a;
    const t = (a = game.votv) == null ? void 0 : a._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (p) {
      u.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = o.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (u.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const d = this.element, f = this.form ?? this.element, g = u.scrollState, l = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", c = () => {
      var r, y;
      if (this._applyScrollState(d, g), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(d, g);
    };
    return (i || l) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (d) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, d)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${d}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), o = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const u = Number(p == null ? void 0 : p.value) || 0, m = Number(o == null ? void 0 : o.value) || 0;
    n.textContent = String(u + m);
  }
  async _prepareContext(s) {
    var i, c, a, r, y, h, k, S, T, D, q, _;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((a = (c = e.system) == null ? void 0 : c.identity) == null ? void 0 : a.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, o = "— Nincs fegyver —", u = (((r = this.actor.items) == null ? void 0 : r.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = u.map((v) => {
      const L = (v == null ? void 0 : v.system) ?? {}, C = L.type ?? "", R = (n[C] ?? C) || "—", j = L.size ?? "", H = (p[j] ?? j) || "", G = [R, H].filter(Boolean).join(", ") || R || "—", Z = C === "projectile" || j === "thrown", W = L.quantity != null ? String(L.quantity).trim() : "1", M = (typeof L.range == "string" ? (L.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? o,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: String(L.bonus ?? "").trim() || "0",
        damage: L.damage ?? "",
        rangeStr: M || "—",
        typeLabel: R,
        typeAndSize: G,
        quantity: W,
        quantityDisplay: Z ? W : "—",
        isProjectile: Z,
        equipped: !1,
        special: (L.special ?? "").trim() || "—"
      };
    });
    const m = (((y = this.actor.items) == null ? void 0 : y.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = m.map((v) => {
      var R;
      const L = (v == null ? void 0 : v.system) ?? {}, C = !!((R = v.system) != null && R.equipped);
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: mi((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: C
      };
    });
    const d = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = d.map((v) => {
      var Z, W, M;
      const L = ((Z = v == null ? void 0 : v.system) == null ? void 0 : Z.abilityType) ?? "", C = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", R = L === "active", j = Number((W = v == null ? void 0 : v.system) == null ? void 0 : W.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, H = (((M = v == null ? void 0 : v.system) == null ? void 0 : M.description) ?? "").trim(), G = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: C,
        description: G,
        kp: j,
        isActive: R,
        slotKey: "",
        equipped: !1
      };
    });
    const f = (((k = this.actor.items) == null ? void 0 : k.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = f.map((v) => {
      const L = (v == null ? void 0 : v.system) ?? {}, C = (L.description ?? "").trim(), R = C ? C.length > 60 ? C.slice(0, 57) + "…" : C : "—", j = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: j,
        description: R
      };
    });
    const g = (((S = e.weaponsTable) == null ? void 0 : S.length) ?? 0) > 0 || (((T = e.armorTable) == null ? void 0 : T.length) ?? 0) > 0 || (((D = e.microchipsTable) == null ? void 0 : D.length) ?? 0) > 0 || (((q = e.itemsTable) == null ? void 0 : q.length) ?? 0) > 0;
    e.showEquipmentDropZone = !g;
    const l = (((_ = this.actor.items) == null ? void 0 : _.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = l.map((v) => {
      const C = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), R = C ? C.length > 80 ? C.slice(0, 77) + "…" : C : "";
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
      var g, l, i;
      m.preventDefault(), m.stopPropagation();
      const d = ((i = (l = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (m) => {
      var g, l, i;
      m.preventDefault();
      const d = (l = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      if (!d) return;
      const f = this.actor.items.get(d);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (m) => {
      var g, l;
      if (m.preventDefault(), !m.altKey) return;
      const d = (l = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      !d || !this.actor.items.get(d) || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".jarmu-item-quantity-input", async (m) => {
      var l;
      const d = m.currentTarget, f = (l = d == null ? void 0 : d.dataset) == null ? void 0 : l.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (d.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (m) => {
      var g, l;
      const d = (l = (g = m.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      if (!d) return;
      const f = this.actor.items.get(d);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": m.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (m) => {
      var f, g, l, i;
      m.preventDefault();
      const d = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      d && ((i = (l = this.actor.items.get(d)) == null ? void 0 : l.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (m) => {
      var f, g;
      if (m.preventDefault(), !m.altKey) return;
      const d = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      d && await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("click", ".karakter-item-chat", async (m) => {
      var f, g;
      m.preventDefault();
      const d = (g = (f = m.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      d && await this._postItemToChat(d);
    });
    const n = this, p = (m) => {
      if (!m) return;
      const d = n._getFormDataForUpdate(m);
      Object.keys(d).length !== 0 && n.actor.update(d).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, o = (m) => {
      var d, f, g;
      return m && (((f = (d = n.element) == null ? void 0 : d.contains) == null ? void 0 : f.call(d, m)) || n.id && ((g = m.closest) == null ? void 0 : g.call(m, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (m) => {
      var i;
      const d = m.target;
      if (!d || !d.form) return;
      const f = d.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const g = d.form;
      if (!o(g)) return;
      const l = m.relatedTarget;
      l && (g.contains(l) || n.id && ((i = l.closest) != null && i.call(l, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), p(g));
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
    var m, d, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const l = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        l > 0 && (p = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${o}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var m, d;
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
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((d = n.parent) == null ? void 0 : d.id) === p.id) return;
    const u = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [u]);
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
    e._votvProfileImgClick = (o) => {
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
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
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
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
  form: foundry.utils.mergeObject(((As = z(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = be;
var Fs;
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
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
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
  form: foundry.utils.mergeObject(((Fs = z(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (o) => {
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
    }, e._votvInput = (o) => {
      var d;
      const u = o.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const m = (u == null ? void 0 : u.form) ?? ((d = u == null ? void 0 : u.closest) == null ? void 0 : d.call(u, "form"));
      p(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(m), 300));
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
    e._votvProfileImgClick = (o) => {
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
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
    e._votvProfileImgClick = (o) => {
      var d, f, g, l, i, c, a;
      if (!e.isEditable || !((f = (d = o.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((l = (g = o.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((a = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, p = (o) => {
      var u, m, d;
      return o && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var m, d, f;
      const u = ((m = o.target) == null ? void 0 : m.form) ?? ((f = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(u) && n(u);
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
    var m, d, f, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (d = this.document) == null ? void 0 : d.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (l) => {
      var i, c, a;
      try {
        const r = typeof l.composedPath == "function" ? l.composedPath() : [];
        if (!(this.element && r.includes(this.element) || this.id && ((c = (i = l.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", l);
        let h = null;
        try {
          h = TextEditor.getDragEventData(l);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", h), !h || h.type !== "Item") return;
        const S = ((D) => {
          var _;
          if (!D) return null;
          const q = D.uuid ?? D.documentUuid ?? ((_ = D.data) == null ? void 0 : _.uuid) ?? (typeof D == "string" ? D : null);
          if (q) return q;
          if (typeof D == "object") {
            for (const v of Object.values(D))
              if (typeof v == "string" && v.includes(".") && v.startsWith("Item.")) return v;
          }
          return null;
        })(h);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", S), !S) return;
        const T = await fromUuid(S);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", T == null ? void 0 : T.id, T == null ? void 0 : T.type), !T || T.documentName !== "Item") return;
        if (T.type === "Kepesseg" || T.type === "ability") {
          const D = T.uuid ?? T.id, q = this.document.system ?? {}, _ = Array.isArray((a = q.abilities) == null ? void 0 : a.items) ? q.abilities.items.slice() : [];
          _.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", _), await this.document.update({ "system.abilities.items": _ });
        }
      } catch (r) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", r);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (l) => {
      var r, y, h, k, S, T;
      l.preventDefault();
      const i = (y = (r = l.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, c = (k = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemId;
      let a = null;
      if (i)
        try {
          a = await fromUuid(i);
        } catch {
          a = null;
        }
      !a && c && (a = ((S = game.items) == null ? void 0 : S.get(c)) ?? null), (T = a == null ? void 0 : a.sheet) == null || T.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (l) => {
      var r, y, h, k;
      l.preventDefault();
      const i = (y = (r = l.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, c = (k = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemId, a = i || c;
      a && await this._postAbilityToChat(a);
    }), n.on("click", ".karakter-ability-pill-remove", async (l) => {
      var h, k, S;
      if (l.preventDefault(), !l.altKey) return;
      const i = (k = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, a = Array.isArray((S = c.abilities) == null ? void 0 : S.items) ? c.abilities.items.slice() : [], r = a.indexOf(i), y = r >= 0 ? [...a.slice(0, r), ...a.slice(r + 1)] : a;
      await this.document.update({ "system.abilities.items": y });
    });
    const p = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (l) => {
      l.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const o = (l) => {
      if (!l) return;
      const i = e._getFormDataForUpdate(l);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, u = (l) => {
      var i, c, a;
      return l && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, l)) || e.id && ((a = l.closest) == null ? void 0 : a.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var c, a, r;
      const i = ((c = l.target) == null ? void 0 : c.form) ?? ((r = (a = l.target) == null ? void 0 : a.closest) == null ? void 0 : r.call(a, "form"));
      u(i) && o(i);
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
    console.log("VOTV JarmuEgysegSheet _prepareContext ids=", p);
    const o = Array.isArray(n.items) ? n.items : [], m = (await Promise.all(
      o.map(async (d) => {
        var f;
        if (!d) return null;
        try {
          const g = await fromUuid(d);
          if (g && (g.type === "Kepesseg" || g.type === "ability")) return g;
        } catch {
          const g = (f = game.items) == null ? void 0 : f.get(d);
          if (g && (g.type === "Kepesseg" || g.type === "ability")) return g;
        }
        return null;
      })
    )).map((d, f) => ({ doc: d, ref: o[f] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: f }) => {
      var g;
      return {
        id: d.id,
        ref: f,
        name: d.name,
        img: d.img,
        kp: Number(((g = d.system) == null ? void 0 : g.kp) ?? 0) || 0
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var f, g, l, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((l = e.system) == null ? void 0 : l.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = p ? `<p>${p}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${m}
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
      const o = e.uuid ?? e.id, u = this.document.system ?? {}, m = Array.isArray((n = u.abilities) == null ? void 0 : n.items) ? u.abilities.items.slice() : [];
      return m.push(o), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", m), await this.document.update({ "system.abilities.items": m }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
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
  var e, t, n, p, o, u;
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
  }, (p = CONFIG.Actor).typeLabels ?? (p.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (o = CONFIG.Combat).initiative ?? (o.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  }), Hooks.on("updateActor", (m, d, f, g) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const l = m.id;
    setTimeout(() => {
      var r, y, h, k;
      const i = (r = game.actors) == null ? void 0 : r.get(l);
      if (!i || i.type !== "Karakter") return;
      const c = ht.getTotalSpeedRaw(i), a = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !a) {
        const S = ((k = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, q;
          const T = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const _ of T)
            ((q = _ == null ? void 0 : _.document) == null ? void 0 : q.actorId) === l && typeof _.draw == "function" && _.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else c > 0 && a && a.delete().then(() => {
        var T, D;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const q of S)
          ((D = q == null ? void 0 : q.document) == null ? void 0 : D.actorId) === l && typeof q.draw == "function" && q.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, d, f, g) => {
    var T, D, q, _, v, L, C, R, j, H, G, Z, W;
    const l = m == null ? void 0 : m.id;
    if (!l) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((T = d == null ? void 0 : d.system) != null && T.combat) && "initiativeResult" in d.system.combat) {
      const M = Number((q = (D = m.system) == null ? void 0 : D.combat) == null ? void 0 : q.initiativeResult), J = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Se = ((_ = re.combatants) == null ? void 0 : _.contents) ?? Array.from(re.combatants ?? []);
        for (const ye of Se)
          if (((v = ye.actor) == null ? void 0 : v.id) === l || ye.actorId === l) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: ye.id, initiative: J }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((L = d == null ? void 0 : d.system) != null && L.identity) && "size" in d.system.identity) {
      const M = js((R = (C = m.system) == null ? void 0 : C.identity) == null ? void 0 : R.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((J) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, J));
    }
    const i = document.activeElement, c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), a = [], r = (j = game.actors) == null ? void 0 : j.get(l);
    r != null && r.apps && a.push(...Array.from(r.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of y) {
      if (((H = M.document) == null ? void 0 : H.id) !== l || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const J = (Z = M.constructor) == null ? void 0 : Z.name;
      J !== "VoidKarakterSheet" && J !== "VoidJarmuSheet" || a.includes(M) || a.push(M);
    }
    if (c && a.some((M) => {
      const J = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return J && J.contains(i);
    })) return;
    const k = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, S = k && Date.now() - k.at < s ? k.appId : null;
    setTimeout(() => {
      for (const M of a)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, d, f, g) => {
    var a, r, y;
    const l = m == null ? void 0 : m.parent;
    if (!l || l.documentName !== "Actor" || l.type !== "Karakter" || m.type !== "Fegyver") return;
    const i = ((a = l.system) == null ? void 0 : a.weapons) ?? {}, c = {};
    for (const [h, k] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !S || S !== m.id || (c[`system.weapons.${h}.name`] = m.name ?? "", c[`system.weapons.${h}.damage`] = ((r = m.system) == null ? void 0 : r.damage) ?? "", c[`system.weapons.${h}.bonus`] = ((y = m.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(c).length && l.update(c);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, k, S, T, D, q, _, v, L, C, R, j, H, G, Z, W, M, J, re, Se, ye, Te;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (k = game.messages) == null ? void 0 : k.get(n), o = (T = (S = p == null ? void 0 : p.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!o) return;
    const u = o.actorId ?? ((D = p == null ? void 0 : p.speaker) == null ? void 0 : D.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((q = game.actors) == null ? void 0 : q.get(o.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(u));
    if (m || (m = ((L = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : L.flatMap((de) => {
      var Ae;
      return ((Ae = de.tokens) == null ? void 0 : Ae.contents) ?? [];
    }).map((de) => de.actor).find((de) => de && (de.id === u || de.id === o.actorId))) ?? null), !m) return;
    const d = o.itemId ? ((R = (C = m.items) == null ? void 0 : C.get) == null ? void 0 : R.call(C, o.itemId)) ?? ((G = (H = (j = m.items) == null ? void 0 : j.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ae) => ae.id === o.itemId)) : null;
    let f = (o.damageFormula ?? "").trim();
    if (f || (f = (((Z = d == null ? void 0 : d.system) == null ? void 0 : Z.damage) ?? "").trim()), !f && o.slotKey && (f = (((((W = m.system) == null ? void 0 : W.weapons) ?? {})[o.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((re = (J = game.i18n) == null ? void 0 : J.localize) == null ? void 0 : re.call(J, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(f);
    await g.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = o.targetName || "", c = o.hitLocationName || "", a = ((d == null ? void 0 : d.name) ?? (o.slotKey ? ((Te = (((ye = m.system) == null ? void 0 : ye.weapons) ?? {})[o.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${a} – sebzés – ${i}` : `${a} – sebzés`;
    c && (r += ` (${c})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var o, u, m, d, f, g;
      if (!((u = (o = e.target) == null ? void 0 : o.closest) != null && u.call(o, "#actors"))) return;
      const t = (d = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : d.call(m, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((g = game.actors) != null && g.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, o;
    const e = ((t = game.actors) == null ? void 0 : t.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of e) {
      const m = ht.getTotalSpeedRaw(u), d = (n = u.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !d) {
        const f = ((o = (p = CONFIG.statusEffects) == null ? void 0 : p.find((g) => g.id === "immobilized")) == null ? void 0 : o.img) ?? "";
        await u.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: u.uuid
        }]).catch(() => {
        });
      } else m > 0 && d && await d.delete().catch(() => {
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
      }, o = await n.create(p);
      o && console.log("Vacuum of the Void | Default scene created:", o.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var o, u, m, d, f, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((o = game.actors) == null ? void 0 : o.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of t)
      try {
        const i = l.prototypeToken, c = ((u = i == null ? void 0 : i.bar1) == null ? void 0 : u.attribute) ?? "", a = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (c || a) && await l.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", l.name, i);
      }
    for (const l of game.scenes ?? []) {
      const i = ((d = l.tokens) == null ? void 0 : d.filter((c) => {
        var a;
        return ((a = c.actor) == null ? void 0 : a.type) === "Karakter";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(e);
        } catch (a) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, a);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, p = ((f = game.actors) == null ? void 0 : f.filter((l) => l.type === "Npc")) ?? [];
    for (const l of p)
      try {
        await l.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", l.name, i);
      }
    for (const l of game.scenes ?? []) {
      const i = ((g = l.tokens) == null ? void 0 : g.filter((c) => {
        var a;
        return ((a = c.actor) == null ? void 0 : a.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(n);
        } catch (a) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, a);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var o, u, m, d;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (u = game.actors) == null ? void 0 : u.get(n) : null;
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
      const f = js((d = (m = p.system) == null ? void 0 : m.identity) == null ? void 0 : d.size);
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
    const p = n.apps ?? [], o = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const u of o)
      !u || I.has(u.id) || (I.add(u.id), typeof u.render == "function" && u.render(!0));
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
    const o = s[0] ?? s;
    o != null && o.classList && o.classList.add("votv-karakter-token-hud");
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
  var d, f, g, l;
  const t = ((d = I.flags) == null ? void 0 : d["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, o = t.weaponAttack, u = t.weapon;
  if (!n && !p && !o) return;
  const m = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), p) {
      const i = m.querySelector(".votv-crit-label");
      if (i)
        i.textContent = p;
      else {
        const c = m.querySelector(".dice-total"), a = (c == null ? void 0 : c.parentElement) ?? m, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = p, a.appendChild(r);
      }
    }
    if (o && u && (u.actorId || (g = I.speaker) != null && g.actor)) {
      const i = m.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const y = !!u.isHit, h = u.targetName || "Célpont";
        r.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(r);
      }
      if (u.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = u.hitLocationRoll, k = u.hitLocationName;
        y.textContent = h != null && k ? `Sebzés (Találati Hely ${h} - ${k})` : "Sebzés", y.dataset.actorId = String(u.actorId ?? ((l = I.speaker) == null ? void 0 : l.actor) ?? ""), y.dataset.itemId = String(u.itemId ?? ""), y.dataset.slotKey = String(u.slotKey ?? ""), y.dataset.targetName = String(u.targetName ?? ""), y.dataset.hitLocationName = String(u.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), c.appendChild(y);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-D1GIRiQs.mjs.map
