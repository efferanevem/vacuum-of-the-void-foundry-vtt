var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Ws = (I, s, e) => s in I ? Hs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => Ws(I, typeof s != "symbol" ? s + "" : s, e);
var z = (I, s, e) => Gs(Bs(I), e, s);
const { HTMLField: Vs, NumberField: A, SchemaField: U, StringField: D, BooleanField: te, ArrayField: yt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
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
        biography: new Vs({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Pt, SchemaField: Ys } = foundry.data.fields;
class Xs extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ys({
        body: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Js, StringField: ms } = foundry.data.fields;
class Qs extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Js({
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
const { NumberField: Et, StringField: fs } = foundry.data.fields;
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
      cost: new Et({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Et({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Et({ required: !1, integer: !0, min: 0, initial: 1 })
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
    let o = i;
    for (const c of l) {
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
      for (const w of y) {
        if (!w || w.discarded || w.hidden) continue;
        const S = Number(w.result ?? w);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  p(I.terms, 1);
  const a = s.filter((l) => l === 6).length, u = s.filter((l) => l === 1).length, d = e.filter((l) => l === 6).length, m = t.filter((l) => l === 6).length, f = a + d, g = u + m;
  return f > 0 && f === g ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(I) {
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
    var n, p, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const p = this.element, a = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (p) {
      u.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (u.focus = {
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
    const m = this.element, f = this.form ?? this.element, g = u.scrollState, l = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(m, g), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || l) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const p = Math.floor(n / 3), a = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((p = a.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((p = a.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let t = 0;
    for (const a of e) {
      const u = String(((p = a.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), d = Number(u);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, g, l, i, o, c, r, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : g.value) ?? 0, n = ((l = e.currentHealth) == null ? void 0 : l.legs) ?? 0, p = W._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const a = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let u;
    p === 1 ? u = -6 : p === 2 ? u = -3 : u = a, u += W._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((r = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : r.speed) ?? 0) || 0, m = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return d + m + (Number.isFinite(u) ? u : 0);
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
    var g, l, i, o, c, r, y, h, w, S, T, O;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, a = ((w = n.currentHealth) == null ? void 0 : w.legs) ?? 0, u = W._healthStatusFromRatio(a, p), d = Number(((O = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : O.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = d;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var m, f, g, l, i, o, c, r, y, h, w, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((l = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : l.givenProtection) ?? 0) || 0, p = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, a = (h = (y = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, u = (T = (S = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + p + a + u;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var l;
      return ((l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), a = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(a == null ? void 0 : a.value) || 0, m = Number(u == null ? void 0 : u.value) || 0, f = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(d + m + f);
  }
  _writeTotalSpeed(s = null) {
    var c, r, y, h, w, S, T, O;
    const e = s ?? this.form ?? this.element, t = (F) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, F)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${F}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), a = t('input[name="system.combat.speed"]'), u = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (r = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : r.has) != null && y.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((w = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : w.resources) ?? {}, m = ((T = (S = d.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((O = d.currentHealth) == null ? void 0 : O.legs) ?? 0;
    if (W._healthStatusFromRatio(f, m) === 0) {
      n.textContent = "0";
      return;
    }
    const l = Number(a == null ? void 0 : a.value) || 0, i = Number(u == null ? void 0 : u.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(l + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, u, d, m;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((d = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : d.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return W._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, d, m, f;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, p = ((m = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : m.value) ?? 0, a = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return W._healthStatusFromRatio(a, p);
  }
  async _prepareContext(s) {
    var tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re, k, E, x, B, oe, J, ge, pe, ce, _e, Me, je, Ot, Ct, qt, Lt, mt, Ve, Yt, Xt, Jt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((it = (st = (tt = this.actor.system) == null ? void 0 : tt.resources) == null ? void 0 : st.stress) == null ? void 0 : it.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, a = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of u) {
      const L = ((nt = p[b]) == null ? void 0 : nt.value) ?? 0, q = a[b] ?? 0;
      e.computedHealthStatus[b] = W._healthStatusFromRatio(q, L);
    }
    const d = (Number(a.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(a[b]) || 0) === 0).length;
    e.showDeathSkull = d || f >= 2;
    const g = e.computedHealthStatus.legs ?? 3, l = Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = l;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((ct = (ot = this.actor.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.givenProtection) ?? 0) || 0, r = (ut = (xe = (lt = this.actor) == null ? void 0 : lt.statuses) == null ? void 0 : xe.has) != null && ut.call(xe, "lookaround") ? 1 : 0, y = (k = (Re = (dt = this.actor) == null ? void 0 : dt.statuses) == null ? void 0 : Re.has) != null && k.call(Re, "halfcover") ? 3 : 0, h = (B = (x = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : x.has) != null && B.call(x, "threequarteredcover") ? 6 : 0, w = c + this._getTotalArmorProtectionBonus() + r + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: w } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let O = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    g === 0 && (O = 0), (pe = (ge = (J = this.actor) == null ? void 0 : J.statuses) == null ? void 0 : ge.has) != null && pe.call(ge, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), O = 0), e.totalSpeed = O;
    const F = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(F)) {
      const q = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = q, e.skillDisabled[b] = q === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const N = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = (N.slotOrder ?? "").trim(), _ = C ? C.split(/\s*,\s*/).filter((b) => v.includes(b)) : [], R = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, j = R && typeof R == "object" && !Array.isArray(R) ? R : {}, H = (((je = j.slot1) == null ? void 0 : je.itemId) ?? "").trim(), G = (((Ot = j.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Z = (((Ct = j.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), M = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const q = typeof b.sort == "number" ? b.sort : 0, P = typeof L.sort == "number" ? L.sort : 0;
      return q - P;
    }).map((b) => {
      var Oe, ze, Ue, qe, Le, pt;
      const L = b.type === "Fegyver", q = b.type === "MikroChip";
      let P = 0, K = "", ee = null;
      for (let Ye = 0; Ye < _.length; Ye++) {
        const ft = _[Ye];
        if ((((Oe = N[ft]) == null ? void 0 : Oe.itemId) ?? "") === b.id) {
          P = Ye + 1, K = ((ze = N[ft]) == null ? void 0 : ze.bonus) ?? "", ee = ft;
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
        slotAssignment: P,
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
    const Y = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((b) => b.type === "Fegyver"), re = Y.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = re;
    const Se = "— Nincs fegyver —", ye = _.filter((b) => {
      const q = ((N[b] ?? {}).itemId ?? "").trim();
      return q ? !!Y.find((K) => K.id === q) : !1;
    });
    e.weaponSlots = ye.map((b, L) => {
      const q = N[b] ?? {}, P = (q.itemId ?? "").trim(), K = re.find((fe) => fe.id === P), ee = Y.find((fe) => fe.id === P), Q = (ee == null ? void 0 : ee.system) ?? {}, Ke = Q.size === "thrown", le = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: b,
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
    e.weaponsTable = Y.map((b) => {
      var ls, us, ds;
      const L = b.id;
      let q = null, P = {};
      for (const At of _)
        if ((((ls = N[At]) == null ? void 0 : ls.itemId) ?? "").trim() === L) {
          q = At, P = N[At] ?? {};
          break;
        }
      const K = !!q, ee = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : K, Q = (b == null ? void 0 : b.system) ?? {}, Ke = typeof Q.range == "string" ? (Q.range || "").trim() : "", le = Q.type ?? "", fe = (Te[le] ?? le) || "—", Oe = Q.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [fe, ze].filter(Boolean).join(", ") || fe || "—", qe = le === "projectile" || Oe === "thrown", Le = Q.quantity, pt = Le != null ? String(Le).trim() : "1", Ye = String(P.bonus ?? "").trim(), ft = String(Q.bonus ?? "").trim(), Us = Ye || ft || "0";
      return {
        slotKey: q ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Se,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: P.damage ?? Q.damage ?? "",
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
      var P, K;
      const L = (b == null ? void 0 : b.system) ?? {}, q = ((P = b.system) == null ? void 0 : P.equipped) !== void 0 && ((K = b.system) == null ? void 0 : K.equipped) !== null ? !!b.system.equipped : !1;
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
      const L = (b == null ? void 0 : b.system) ?? {}, q = (L.description ?? "").trim(), P = q ? q.length > 60 ? q.slice(0, 57) + "…" : q : "—", K = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: K,
        description: P
      };
    });
    const He = (((Ve = this.actor.items) == null ? void 0 : Ve.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = He.map((b) => {
      const q = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), P = q ? q.length > 80 ? q.slice(0, 77) + "…" : q : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: P
      };
    });
    const bt = (((Yt = this.actor.items) == null ? void 0 : Yt.contents) ?? []).filter((b) => b.type === "MikroChip"), ne = bt.map((b) => ({ id: b.id, name: b.name, img: b.img })), Xe = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (b) => {
      var q, P, K;
      const L = [];
      return b !== 1 && L.push((((q = j.slot1) == null ? void 0 : q.itemId) ?? "").trim()), b !== 2 && L.push((((P = j.slot2) == null ? void 0 : P.itemId) ?? "").trim()), b !== 3 && L.push((((K = j.slot3) == null ? void 0 : K.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((b) => !Be(1).includes(b.id)), e.microchipItemsSlot2 = ne.filter((b) => !Be(2).includes(b.id)), e.microchipItemsSlot3 = ne.filter((b) => !Be(3).includes(b.id)), e.microchipSlots = De.map((b) => {
      const L = j[b] ?? {}, q = (L.itemId ?? "").trim(), P = bt.find((K) => K.id === q);
      return {
        slotKey: b,
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || Xe,
        img: (P == null ? void 0 : P.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, q = j[L] ?? {}, P = (q.itemId ?? "").trim(), K = ne.find((ee) => ee.id === P);
      e[`microchip${b}ItemId`] = P, e[`microchip${b}DisplayName`] = (K == null ? void 0 : K.name) || q.name || Xe, e[`microchip${b}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = bt.map((b) => {
      var Oe, ze, Ue, qe;
      const L = b.id;
      let q = null;
      for (const Le of De)
        if ((((Oe = j[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === L) {
          q = Le;
          break;
        }
      const P = !!q, K = ((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.abilityType) ?? "", ee = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", Q = K === "active", Ke = Number((Ue = b == null ? void 0 : b.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, le = (((qe = b == null ? void 0 : b.system) == null ? void 0 : qe.description) ?? "").trim(), fe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
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
        equipped: P
      };
    });
    const vt = (((Xt = e.weaponsTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Jt = e.armorTable) == null ? void 0 : Jt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Vt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var L, q, P;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((q = b.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((P = b.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Ge = new Map(Vt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Je = (b) => {
      const L = kt[b] ?? {}, q = (L.itemId ?? "").trim(), P = q ? Ge.get(q) : null, K = (P == null ? void 0 : P.description) ?? "", ee = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || wt,
        img: (P == null ? void 0 : P.img) || "",
        description: K,
        kp: ee
      };
    };
    e.abilityFajiSlot = Je("faji"), e.abilityHatterSlot = Je("hatter");
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
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, We = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, me = typeof Ae == "number" ? Ae : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Pe = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Ee = Array.isArray(Pe) ? Pe.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ce = (Ee.length > 0 ? Ee : St).slice().sort((b, L) => b.min - L.min), $e = Ee.map((b) => b.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Ee.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let et = 0;
    if (typeof me == "number" && me >= 0 && Ce.length > 0) {
      const b = Ce[0], L = Ce[Ce.length - 1];
      let q = null;
      me <= b.max ? q = b : me >= L.min ? q = L : q = Ce.find((P) => me >= P.min && me <= P.max), q && (et = q.kp);
    }
    e.kpDots = We.map((b, L) => {
      const q = L + 1, P = !!Number(It[b]), K = q <= et;
      return { index: q, used: P, usable: K };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var g, l;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-CbwKbTPl.mjs");
      r(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let c = (o.dataset.itemId ?? "").trim();
      if (!c) {
        const w = (o.dataset.slot ?? "").trim();
        if (!w) return;
        c = (((((y = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : y.weapons) ?? {})[w] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((h = o.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-CbwKbTPl.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, w;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, c = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6) return;
      const r = `system.resources.kpDot${c}`, y = !!Number((w = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : w[`kpDot${c}`]);
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
    const p = (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
    const a = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', a), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
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
        callback: (w) => {
          w && this.actor.update({ img: w });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget, c = o.dataset.skill, r = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: y } = await import("./roll-sheet-CbwKbTPl.mjs");
      y(this.actor, c, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, O, F, N, v, C;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), r = c == null ? void 0 : c.dataset.slot;
      if (!r) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const w = ((F = (O = this.actor.items).get) == null ? void 0 : F.call(O, h)) ?? ((v = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : v.call(N, (_) => _.id === h));
      (C = w == null ? void 0 : w.sheet) == null || C.render(!0);
    });
    const u = (i, o) => {
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
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
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
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === c;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${F}.itemId`] = "", h[`system.weapons.${F}.name`] = "", h[`system.weapons.${F}.damage`] = "", h[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var F, N;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => w.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = y[v]) == null ? void 0 : C.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = y[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = w.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: c,
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
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var v;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), y = r == null ? void 0 : r.dataset.slot;
      if (!y) return;
      const h = (o.dataset.itemId ?? "").trim(), w = (o.dataset.itemName ?? ((v = o.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (o.dataset.itemImg ?? "").trim(), T = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = w);
      let O = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (O || (O = document.createElement("img"), O.className = "karakter-microchip-slot-thumb", O.alt = "", r == null || r.insertBefore(O, T)), O.src = S, O.style.display = "") : O && O.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const F = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (F == null ? void 0 : F.name) ?? ""
      };
      h && (N[`system.gear.microchips.${y}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var w, S;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "MikroChip") return;
      const r = ((S = (w = this.actor.system) == null ? void 0 : w.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = r[T]) == null ? void 0 : O.itemId) ?? "").trim() === o;
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
      var w;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((w = r[o]) == null ? void 0 : w.items) ? r[o].items.slice() : []).filter((S) => S !== c);
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
        const h = this.form ?? this.element, w = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var F, N;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((v) => w.includes(v)) : [], T = S.find((v) => {
        var C;
        return (((C = y[v]) == null ? void 0 : C.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let v = S.find((_) => {
          var R;
          return !((R = y[_]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!v) {
          const _ = w.find((R) => !C.has(R));
          if (!_) return;
          v = _, S.push(_);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: c,
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
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor, y = r.items.get(c), h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], F = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === c;
        });
        if (F) {
          const N = O.filter((v) => v !== F);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${F}.itemId`] = "", h[`system.weapons.${F}.name`] = "", h[`system.weapons.${F}.damage`] = "", h[`system.weapons.${F}.bonus`] = "";
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
        const h = this.form ?? this.element, w = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    });
    const d = this, m = (i) => {
      var r, y, h, w;
      if (!i) return;
      const o = d._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((y = (r = o.system) == null ? void 0 : r.resources) == null ? void 0 : y.currentHealth) != null || ((w = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : w.hitLocations) != null;
      d.actor.update(o).then(() => {
        c && setTimeout(() => d.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var o, c, r;
      return i && (((c = (o = d.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || d.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const r = o.form;
      if (!f(r)) return;
      const y = i.relatedTarget;
      y && (r.contains(y) || d.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), m(r));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, d, m;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      f.type === "checkbox" ? g = f.checked : f.type === "number" ? g = f.value === "" ? 0 : Number(f.value) : g = f.value ?? "", foundry.utils.setProperty(e, f.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const f of a) {
      const g = ((m = n[f]) == null ? void 0 : m.value) ?? 0, l = p[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, W._healthStatusFromRatio(l, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, a, u, d, m, f, g, l, i, o;
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
            const O = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            y = ((p = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : p.id) ?? y;
          }
          const h = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), w = this.actor.system.abilities ?? {};
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
          const S = h === "active" ? "active" : "passive", T = Array.isArray((u = w[S]) == null ? void 0 : u.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((d = e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
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
          let w = r.id;
          if (h) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            w = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? w;
          }
          if (h) {
            const S = ((g = y.system) == null ? void 0 : g.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = T ? T.split(/\s*,\s*/).filter((v) => O.includes(v)) : [], N = F.filter((v) => {
              var C;
              return (((C = S[v]) == null ? void 0 : C.itemId) ?? "").trim() === w;
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
          ((o = r.parent) == null ? void 0 : o.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, a, u;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, d, m, f, g, l;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    const a = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
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
    var m, f;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((g, l) => {
      const i = typeof g.sort == "number" ? g.sort : 0, o = typeof l.sort == "number" ? l.sort : 0;
      return i - o;
    }).map((g) => g.id), a = p.indexOf(t), u = p.indexOf(e);
    if (a === -1 || u === -1) return;
    p.splice(a, 1), p.splice(u, 0, t);
    const d = p.map((g, l) => ({
      _id: g,
      sort: (l + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(s) {
    var n, p, a;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var d, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const l = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        l > 0 && (p = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${a}
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
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, p = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${d}
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
    var a, u, d;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((d = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : d.id) ?? p;
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
    var d, m, f, g;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : f.id) ?? p;
    }
    const a = this.actor.system.abilities ?? {}, u = Array.isArray((g = a[e]) == null ? void 0 : g.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    u.includes(p) || u.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, a, u;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, d, m, f, g;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let a = p.id;
    ((f = p.parent) == null ? void 0 : f.id) !== this.actor.id && (a = ((g = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : g.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let p = Number(n) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? p -= 6 : a === 2 && (p -= 3);
    const d = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, m = new Roll(d);
    await m.evaluate({ async: !0 });
    const { resultType: f, label: g } = xt(m), l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
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
    var a;
    const s = Number(((a = this.actor.system.skills) == null ? void 0 : a.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((O) => O.type === "Fegyver");
    let a = null;
    t.itemId && (a = p.find((O) => O.id === t.itemId) ?? null);
    const u = a && a.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, m = ((S = a == null ? void 0 : a.system) == null ? void 0 : S.type) || "kinetic", f = (((T = a == null ? void 0 : a.system) == null ? void 0 : T.skillKey) ?? "").trim(), g = f && n[f] !== void 0 ? f : m === "explosive" ? "grenadeUse" : "firearms", l = Number(n[g] || 0) || 0, i = d + l, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(c);
    await r.evaluate({ async: !0 });
    const { resultType: y, label: h } = xt(r), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, m, f, g, l, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (d = t.items).get) == null ? void 0 : m.call(d, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(p);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
X(W, "PARTS", foundry.utils.mergeObject(
  z(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
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
    var n, p, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const a = await super.render(s, e), u = this.element, d = this.form ?? this.element, m = p.scrollState, f = p.focus, g = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", l = () => {
      var i, o;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((i = d.querySelector) == null ? void 0 : i.call(d, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = d.querySelector) == null ? void 0 : o.call(d, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (g || f) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), a;
  }
  async _prepareContext(s) {
    var Je, Qe, Ze, It, We, Ae, me, St, Pe, Ee, Ft, Ce, $e, Tt, Dt, et, _t, tt, st, it, nt, rt, at, ot, ct, lt, xe, ut, dt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Je = this.actor) == null ? void 0 : Je.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, a = (Ae = (We = t == null ? void 0 : t.statuses) == null ? void 0 : We.has) != null && Ae.call(We, "lookaround") ? 1 : 0, u = (St = (me = t == null ? void 0 : t.statuses) == null ? void 0 : me.has) != null && St.call(me, "halfcover") ? 3 : 0, d = (Ee = (Pe = t == null ? void 0 : t.statuses) == null ? void 0 : Pe.has) != null && Ee.call(Pe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + a + u + d;
    const m = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (f.slotOrder ?? "").trim(), i = l ? l.split(/\s*,\s*/).filter((k) => g.includes(k)) : [], o = m.filter((k) => k.type === "Fegyver"), c = o.map((k) => ({ id: k.id, name: k.name, img: k.img })), r = "— Nincs fegyver —", y = i.length > 0 ? i : g, h = g.filter((k) => !y.includes(k)), w = [...y, ...h], S = w.filter((k) => {
      var x;
      const E = (((x = f[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return E && o.some((B) => B.id === E);
    });
    e.weaponSlots = S.map((k) => {
      const E = f[k] ?? {}, x = (E.itemId ?? "").trim(), B = c.find((ce) => ce.id === x), oe = o.find((ce) => ce.id === x), J = (oe == null ? void 0 : oe.system) ?? {}, ge = J.size === "thrown", pe = (typeof J.range == "string" ? (J.range || "").trim() : "") || "—";
      return {
        slotKey: k,
        itemId: x,
        displayName: (B == null ? void 0 : B.name) || E.name || r,
        img: (B == null ? void 0 : B.img) || "",
        isThrown: ge,
        rangeStr: pe
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, O = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((k) => {
      var mt;
      const E = k.id;
      let x = null, B = {};
      for (const Ve of w)
        if ((((mt = f[Ve]) == null ? void 0 : mt.itemId) ?? "").trim() === E) {
          x = Ve, B = f[Ve] ?? {};
          break;
        }
      const oe = !!x, J = (k == null ? void 0 : k.system) ?? {}, ge = typeof J.range == "string" ? (J.range || "").trim() : "", pe = J.type ?? "", ce = (T[pe] ?? pe) || "—", _e = J.size ?? "", Me = (O[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = pe === "projectile" || _e === "thrown", Ct = J.quantity != null ? String(J.quantity).trim() : "1", qt = String(J.bonus ?? B.bonus ?? "").trim() || "0", Lt = (J.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? r,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: ge || "—",
        typeAndSize: je,
        quantity: Ct,
        isProjectile: Ot,
        equipped: oe,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const F = m.filter((k) => k.type === "Pancel");
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
        level: di((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const N = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], C = m.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var pe, ce, _e, Me;
      const E = k.id;
      let x = null;
      for (const je of v)
        if ((((pe = N[je]) == null ? void 0 : pe.itemId) ?? "").trim() === E) {
          x = je;
          break;
        }
      const B = ((ce = k == null ? void 0 : k.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", J = (((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.description) ?? "").trim(), ge = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: oe,
        description: ge,
        kp: Number((Me = k == null ? void 0 : k.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: B === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const _ = m.filter((k) => k.type === "Targy");
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
    const R = m.filter((k) => k.type === "Egyeb");
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
    const H = ((it = t == null ? void 0 : t.system) == null ? void 0 : it.abilities) ?? {}, G = m.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
    const ye = ((at = e.system) == null ? void 0 : at.resources) ?? {}, Te = (ct = (ot = e.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.initiativeResult, ae = typeof Te == "number" ? Te : -1, de = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (xe = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : de).slice().sort((k, E) => k.min - E.min), Xe = 3;
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
      const x = E + 1, B = !!Number(ye[k]), oe = x <= Be;
      return { index: x, used: B, usable: oe };
    }), wt = Math.ceil(Ge.length / 2);
    return e.kpDotsRow1 = Ge.slice(0, wt), e.kpDotsRow2 = Ge.slice(wt), e.canEditInitiative = !!((ut = game.user) != null && ut.isGM), e.showInitiativeResult = typeof Te == "number", e.initiativeResult = e.showInitiativeResult ? Te : "", e.speedUnitForSelect = ((Re = (dt = e.system) == null ? void 0 : dt.combat) == null ? void 0 : Re.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var m, f, g;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (l) => {
      var c, r, y;
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const i = ((y = (r = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (l) => {
      var c, r, y;
      l.preventDefault();
      const i = (r = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (y = o == null ? void 0 : o.sheet) == null || y.render(!0);
    });
    const n = (l) => {
      var c, r;
      const i = (c = l == null ? void 0 : l.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (r = o == null ? void 0 : o.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (l) => {
      var r, y, h, w;
      l.preventDefault();
      const i = (y = (r = l.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : y.call(r, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (w = c == null ? void 0 : c.sheet) == null || w.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (l) => {
      var r;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-CbwKbTPl.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (l) => {
      var c, r, y, h, w;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (o = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (l) => {
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CbwKbTPl.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (l) => {
      var r, y;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const c = !!Number((y = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : y[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (l) => {
      var y, h;
      l.preventDefault();
      const i = l.currentTarget, o = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-CbwKbTPl.mjs");
      r(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (l) => {
      var o, c;
      l.preventDefault();
      const i = (c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (l) => {
      var c, r;
      l.preventDefault();
      const i = (((r = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (l) => {
      var h, w, S, T, O, F;
      if (l.preventDefault(), !l.altKey) return;
      const i = (w = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : w.area, o = (T = (S = l.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !o || !this.actor) return;
      const c = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, y = (Array.isArray((F = c[i]) == null ? void 0 : F.items) ? c[i].items.slice() : []).filter((N) => N !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (l) => {
      var o, c;
      if (l.preventDefault(), !l.altKey) return;
      const i = (c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (l) => {
      var h, w;
      if (l.preventDefault(), !l.altKey) return;
      const i = l.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, r = (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slotKey) ?? "").trim(), y = {};
      r && (y[`system.weapons.${r}.itemId`] = "", y[`system.weapons.${r}.name`] = "", y[`system.weapons.${r}.damage`] = "", y[`system.weapons.${r}.bonus`] = ""), Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (l) => {
      var o, c;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (l) => {
      var y, h, w, S;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((h = (y = l.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((S = (w = this.actor.system) == null ? void 0 : w.gear) == null ? void 0 : S.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var O;
        return (((O = o[T]) == null ? void 0 : O.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (l) => {
      var c, r;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((r = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, p)) == null || g.forEach((l) => {
      var i;
      (((i = l.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (l.draggable = !0);
    }), t.on("dragstart", p, (l) => {
      var y, h, w;
      const i = l.currentTarget, o = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const r = c.uuid;
      l.dataTransfer && (l.dataTransfer.setData("text/plain", r), l.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), l.dataTransfer.effectAllowed = "copyMove"), typeof ((w = l.dataTransfer) == null ? void 0 : w.setDragImage) == "function" && i && l.dataTransfer.setDragImage(i, 0, 0);
    });
    const a = this, u = (l) => {
      if (!l) return;
      const i = a._getFormDataForUpdate(l);
      Object.keys(i).length !== 0 && a.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, d = (l) => {
      var i, o, c;
      return l && (((o = (i = a.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, l)) || a.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (l) => {
      var y;
      const i = l.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = i.form;
      if (!d(c)) return;
      const r = l.relatedTarget;
      r && (c.contains(r) || a.id && ((y = r.closest) != null && y.call(r, `#${CSS.escape(a.id)}`))) || u(c);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (l, i, o) => {
      var c;
      a.actor && ((c = l == null ? void 0 : l.parent) == null ? void 0 : c.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (l, i, o) => {
      var c;
      a.actor && ((c = l == null ? void 0 : l.parent) == null ? void 0 : c.id) === a.actor.id && a.render(!0);
    }, Hooks.on("updateItem", a._votvNpcItemUpdateHook), Hooks.on("deleteItem", a._votvNpcItemDeleteHook), a._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && await this.actor.update(a).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
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
    var T, O, F, N, v;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, p = ((O = e.system) == null ? void 0 : O.skills) ?? {}, a = ((F = e.items) == null ? void 0 : F.filter((C) => C.type === "Fegyver")) ?? [];
    let u = null;
    n.itemId && (u = a.find((C) => C.id === n.itemId) ?? null);
    const d = u && u.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, f = ((N = u == null ? void 0 : u.system) == null ? void 0 : N.type) || "kinetic", g = (((v = u == null ? void 0 : u.system) == null ? void 0 : v.skillKey) ?? "").trim(), l = g && p[g] !== void 0 ? g : f === "explosive" ? "grenadeUse" : "firearms", i = Number(p[l] || 0) || 0, o = m + i, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, y = new Roll(r);
    await y.evaluate({ async: !0 });
    const { resultType: h, label: w } = xt(y), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: w } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, m, f, g, l, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (d = t.items).get) == null ? void 0 : m.call(d, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(p);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, g, l, i, o, c, r, y, h, w, S, T, O, F, N, v, C;
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
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (l = super._onDropItem) == null ? void 0 : l.call(this, s, e);
    if (p.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const a = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      let _ = p.id;
      if (((c = p.parent) == null ? void 0 : c.id) !== a.id) {
        const Z = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        _ = ((r = (await a.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : r.id) ?? _;
      }
      const R = (((y = p.system) == null ? void 0 : y.kind) ?? "passive").toString(), j = ((h = a.system) == null ? void 0 : h.abilities) ?? {}, H = R === "active" ? "active" : "passive", G = Array.isArray((w = j[H]) == null ? void 0 : w.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      G.includes(_) || G.push(_), await a.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = p.parent) == null ? void 0 : S.id) === a.id) return;
    const u = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (T = (await a.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : T.id;
    if (p.type === "Fegyver" && m) {
      const _ = ((O = a.system) == null ? void 0 : O.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((V) => R.includes(V)) : [];
      let G = R.find((V) => {
        var M;
        return !(((M = _[V]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((V) => !H.includes(V)) ?? "slot1");
      const Z = H.includes(G) ? H : [...H, G].filter((V) => R.includes(V));
      await a.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: p.name ?? "",
        [`system.weapons.${G}.damage`]: ((F = p.system) == null ? void 0 : F.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = p.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && m) {
      const _ = ((C = (v = a.system) == null ? void 0 : v.gear) == null ? void 0 : C.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = _[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      j && await a.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, g, l, i, o, c;
    const e = (g = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((l = e.system) == null ? void 0 : l.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((c = this.actor) == null ? void 0 : c.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var d, m, f, g, l, i;
    const e = (m = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const o = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((l = e.system) == null ? void 0 : l.replaceCost) ?? 0) || 0;
        c > 0 && (p = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${a}
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
        const a = (n.value ?? "").trim();
        if (a === "") continue;
        p = Number(a) || 0;
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
X(se, "PARTS", foundry.utils.mergeObject(
  z(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
    var n, p, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const p = this.element, a = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (p) {
      u.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (u.focus = {
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
    const m = this.element, f = this.form ?? this.element, g = u.scrollState, l = u.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(m, g), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || l) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (m) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, m)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${m}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), a = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const u = Number(p == null ? void 0 : p.value) || 0, d = Number(a == null ? void 0 : a.value) || 0;
    n.textContent = String(u + d);
  }
  async _prepareContext(s) {
    var i, o, c, r, y, h, w, S, T, O, F, N;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((c = (o = e.system) == null ? void 0 : o.identity) == null ? void 0 : c.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, a = "— Nincs fegyver —", u = (((r = this.actor.items) == null ? void 0 : r.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = u.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = C.type ?? "", R = (n[_] ?? _) || "—", j = C.size ?? "", H = (p[j] ?? j) || "", G = [R, H].filter(Boolean).join(", ") || R || "—", Z = _ === "projectile" || j === "thrown", V = C.quantity != null ? String(C.quantity).trim() : "1", M = (typeof C.range == "string" ? (C.range || "").trim() : "") || "—";
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
    const d = (((y = this.actor.items) == null ? void 0 : y.contents) ?? []).filter((v) => v.type === "Pancel");
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
        level: mi((C.level ?? "").toString().trim()),
        special: (C.special ?? C.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const m = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = m.map((v) => {
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
    const g = (((S = e.weaponsTable) == null ? void 0 : S.length) ?? 0) > 0 || (((T = e.armorTable) == null ? void 0 : T.length) ?? 0) > 0 || (((O = e.microchipsTable) == null ? void 0 : O.length) ?? 0) > 0 || (((F = e.itemsTable) == null ? void 0 : F.length) ?? 0) > 0;
    e.showEquipmentDropZone = !g;
    const l = (((N = this.actor.items) == null ? void 0 : N.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = l.map((v) => {
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
      var g, l, i;
      d.preventDefault(), d.stopPropagation();
      const m = ((i = (l = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var g, l, i;
      d.preventDefault();
      const m = (l = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var g, l;
      if (d.preventDefault(), !d.altKey) return;
      const m = (l = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      !m || !this.actor.items.get(m) || await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var l;
      const m = d.currentTarget, f = (l = m == null ? void 0 : m.dataset) == null ? void 0 : l.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (m.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var g, l;
      const m = (l = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : l.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var f, g, l, i;
      d.preventDefault();
      const m = (g = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && ((i = (l = this.actor.items.get(m)) == null ? void 0 : l.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var f, g;
      if (d.preventDefault(), !d.altKey) return;
      const m = (g = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var f, g;
      d.preventDefault();
      const m = (g = (f = d.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this._postItemToChat(m);
    });
    const n = this, p = (d) => {
      if (!d) return;
      const m = n._getFormDataForUpdate(d);
      Object.keys(m).length !== 0 && n.actor.update(m).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, a = (d) => {
      var m, f, g;
      return d && (((f = (m = n.element) == null ? void 0 : m.contains) == null ? void 0 : f.call(m, d)) || n.id && ((g = d.closest) == null ? void 0 : g.call(d, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (d) => {
      var i;
      const m = d.target;
      if (!m || !m.form) return;
      const f = m.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const g = m.form;
      if (!a(g)) return;
      const l = d.relatedTarget;
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
    var d, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const l = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        l > 0 && (p = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var d, m;
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
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((m = n.parent) == null ? void 0 : m.id) === p.id) return;
    const u = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [u]);
  }
};
X(ie, "PARTS", foundry.utils.mergeObject(
  z(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
    e._votvProfileImgClick = (a) => {
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
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
X(he, "PARTS", foundry.utils.mergeObject(z(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(he, he, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (a) => {
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
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
X(be, "PARTS", foundry.utils.mergeObject(z(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(be, be, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (a) => {
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
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
X(ve, "PARTS", foundry.utils.mergeObject(z(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = z(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = ve;
var Ps;
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
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(u) && n(u);
    }, e._votvInput = (a) => {
      var m;
      const u = a.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const d = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      p(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(d), 300));
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
X(ke, "PARTS", foundry.utils.mergeObject(z(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ps = z(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !0 })
}));
let Ut = ke;
var Es;
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
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
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
X(we, "PARTS", foundry.utils.mergeObject(z(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Es = z(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (a) => {
      var m, f, g, l, i, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((l = (g = a.target) == null ? void 0 : g.getAttribute) == null ? void 0 : l.call(g, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, p = (a) => {
      var u, d, m;
      return a && (((d = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : d.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, m, f;
      const u = ((d = a.target) == null ? void 0 : d.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
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
X(Ie, "PARTS", foundry.utils.mergeObject(z(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(Ie, Ie, "DEFAULT_OPTIONS"), {
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
    var d, m, f, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (m = this.document) == null ? void 0 : m.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
      "root=",
      t
    ), n.on("click", ".karakter-ability-open", (l) => {
      var c, r, y, h;
      l.preventDefault();
      const i = (r = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId;
      if (!i) return;
      const o = (y = game.items) == null ? void 0 : y.get(i);
      (h = o == null ? void 0 : o.sheet) == null || h.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (l) => {
      var o, c;
      l.preventDefault();
      const i = (c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (l) => {
      var y, h, w;
      if (l.preventDefault(), !l.altKey) return;
      const i = (h = (y = l.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId;
      if (!i) return;
      const o = this.document.system ?? {}, r = (Array.isArray((w = o.abilities) == null ? void 0 : w.items) ? o.abilities.items.slice() : []).filter((S) => S !== i);
      await this.document.update({ "system.abilities.items": r });
    });
    const p = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (l) => {
      l.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const a = (l) => {
      if (!l) return;
      const i = e._getFormDataForUpdate(l);
      Object.keys(i).length !== 0 && e.document.update(i).catch((o) => console.warn("VoidJarmuEgysegSheet save failed", o));
    }, u = (l) => {
      var i, o, c;
      return l && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var o, c, r;
      const i = ((o = l.target) == null ? void 0 : o.form) ?? ((r = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : r.call(c, "form"));
      u(i) && a(i);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, p = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext ids=", p);
    const u = (await Promise.all(
      p.map(async (d) => {
        var m;
        if (!d) return null;
        try {
          const f = await fromUuid(d);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (m = game.items) == null ? void 0 : m.get(d);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).filter((d) => !!d).map((d) => {
      var m;
      return {
        id: d.uuid ?? d.id,
        name: d.name,
        img: d.img,
        kp: Number(((m = d.system) == null ? void 0 : m.kp) ?? 0) || 0
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", u), e.system = t, e.abilityList = u, e;
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
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((l = e.system) == null ? void 0 : l.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${d}
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
      const a = e.uuid ?? e.id, u = this.document.system ?? {}, d = Array.isArray((n = u.abilities) == null ? void 0 : n.items) ? u.abilities.items.slice() : [];
      return d.includes(a) || d.push(a), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", d), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
  var e, t, n, p, a, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Xs, CONFIG.Actor.dataModels.Npc = Wt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ai, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (p = CONFIG.Actor).typeLabels ?? (p.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (a = CONFIG.Combat).initiative ?? (a.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  }), Hooks.on("updateActor", (d, m, f, g) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const l = d.id;
    setTimeout(() => {
      var r, y, h, w;
      const i = (r = game.actors) == null ? void 0 : r.get(l);
      if (!i || i.type !== "Karakter") return;
      const o = ht.getTotalSpeedRaw(i), c = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !c) {
        const S = ((w = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : w.img) ?? "";
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
            ((F = N == null ? void 0 : N.document) == null ? void 0 : F.actorId) === l && typeof N.draw == "function" && N.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else o > 0 && c && c.delete().then(() => {
        var T, O;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const F of S)
          ((O = F == null ? void 0 : F.document) == null ? void 0 : O.actorId) === l && typeof F.draw == "function" && F.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, m, f, g) => {
    var T, O, F, N, v, C, _, R, j, H, G, Z, V;
    const l = d == null ? void 0 : d.id;
    if (!l) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((T = m == null ? void 0 : m.system) != null && T.combat) && "initiativeResult" in m.system.combat) {
      const M = Number((F = (O = d.system) == null ? void 0 : O.combat) == null ? void 0 : F.initiativeResult), Y = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Se = ((N = re.combatants) == null ? void 0 : N.contents) ?? Array.from(re.combatants ?? []);
        for (const ye of Se)
          if (((v = ye.actor) == null ? void 0 : v.id) === l || ye.actorId === l) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: ye.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((C = m == null ? void 0 : m.system) != null && C.identity) && "size" in m.system.identity) {
      const M = js((R = (_ = d.system) == null ? void 0 : _.identity) == null ? void 0 : R.size);
      d.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, Y));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], r = (j = game.actors) == null ? void 0 : j.get(l);
    r != null && r.apps && c.push(...Array.from(r.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of y) {
      if (((H = M.document) == null ? void 0 : H.id) !== l || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const Y = (Z = M.constructor) == null ? void 0 : Z.name;
      Y !== "VoidKarakterSheet" && Y !== "VoidJarmuSheet" || c.includes(M) || c.push(M);
    }
    if (o && c.some((M) => {
      const Y = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return Y && Y.contains(i);
    })) return;
    const w = (V = game.votv) == null ? void 0 : V._lastKarakterSheetBlurSave, S = w && Date.now() - w.at < s ? w.appId : null;
    setTimeout(() => {
      for (const M of c)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, m, f, g) => {
    var c, r, y;
    const l = d == null ? void 0 : d.parent;
    if (!l || l.documentName !== "Actor" || l.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((c = l.system) == null ? void 0 : c.weapons) ?? {}, o = {};
    for (const [h, w] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !S || S !== d.id || (o[`system.weapons.${h}.name`] = d.name ?? "", o[`system.weapons.${h}.damage`] = ((r = d.system) == null ? void 0 : r.damage) ?? "", o[`system.weapons.${h}.bonus`] = ((y = d.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(o).length && l.update(o);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, w, S, T, O, F, N, v, C, _, R, j, H, G, Z, V, M, Y, re, Se, ye, Te;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (w = game.messages) == null ? void 0 : w.get(n), a = (T = (S = p == null ? void 0 : p.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!a) return;
    const u = a.actorId ?? ((O = p == null ? void 0 : p.speaker) == null ? void 0 : O.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((F = game.actors) == null ? void 0 : F.get(a.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(u));
    if (d || (d = ((C = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : C.flatMap((de) => {
      var Fe;
      return ((Fe = de.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((de) => de.actor).find((de) => de && (de.id === u || de.id === a.actorId))) ?? null), !d) return;
    const m = a.itemId ? ((R = (_ = d.items) == null ? void 0 : _.get) == null ? void 0 : R.call(_, a.itemId)) ?? ((G = (H = (j = d.items) == null ? void 0 : j.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ae) => ae.id === a.itemId)) : null;
    let f = (a.damageFormula ?? "").trim();
    if (f || (f = (((Z = m == null ? void 0 : m.system) == null ? void 0 : Z.damage) ?? "").trim()), !f && a.slotKey && (f = (((((V = d.system) == null ? void 0 : V.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((re = (Y = game.i18n) == null ? void 0 : Y.localize) == null ? void 0 : re.call(Y, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(f);
    await g.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = a.targetName || "", o = a.hitLocationName || "", c = ((m == null ? void 0 : m.name) ?? (a.slotKey ? ((Te = (((ye = d.system) == null ? void 0 : ye.weapons) ?? {})[a.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    o && (r += ` (${o})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, u, d, m, f, g;
      if (!((u = (a = e.target) == null ? void 0 : a.closest) != null && u.call(a, "#actors"))) return;
      const t = (m = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((g = game.actors) != null && g.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, a;
    const e = ((t = game.actors) == null ? void 0 : t.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of e) {
      const d = ht.getTotalSpeedRaw(u), m = (n = u.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !m) {
        const f = ((a = (p = CONFIG.statusEffects) == null ? void 0 : p.find((g) => g.id === "immobilized")) == null ? void 0 : a.img) ?? "";
        await u.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: u.uuid
        }]).catch(() => {
        });
      } else d > 0 && m && await m.delete().catch(() => {
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
      }, a = await n.create(p);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var a, u, d, m, f, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of t)
      try {
        const i = l.prototypeToken, o = ((u = i == null ? void 0 : i.bar1) == null ? void 0 : u.attribute) ?? "", c = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
        (o || c) && await l.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", l.name, i);
      }
    for (const l of game.scenes ?? []) {
      const i = ((m = l.tokens) == null ? void 0 : m.filter((o) => {
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
      const i = ((g = l.tokens) == null ? void 0 : g.filter((o) => {
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
  var a, u, d, m;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, n = t ?? I.actorId ?? null;
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
      const f = js((m = (d = p.system) == null ? void 0 : d.identity) == null ? void 0 : m.size);
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
    const p = n.apps ?? [], a = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const u of a)
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
    const a = s[0] ?? s;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
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
  var m, f, g, l;
  const t = ((m = I.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, a = t.weaponAttack, u = t.weapon;
  if (!n && !p && !a) return;
  const d = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (d) {
    if (n && d.classList.add(`votv-${n}`), p) {
      const i = d.querySelector(".votv-crit-label");
      if (i)
        i.textContent = p;
      else {
        const o = d.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? d, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = p, c.appendChild(r);
      }
    }
    if (a && u && (u.actorId || (g = I.speaker) != null && g.actor)) {
      const i = d.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? d;
      if (!d.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const y = !!u.isHit, h = u.targetName || "Célpont";
        r.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(r);
      }
      if (u.isHit && !d.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = u.hitLocationRoll, w = u.hitLocationName;
        y.textContent = h != null && w ? `Sebzés (Találati Hely ${h} - ${w})` : "Sebzés", y.dataset.actorId = String(u.actorId ?? ((l = I.speaker) == null ? void 0 : l.actor) ?? ""), y.dataset.itemId = String(u.itemId ?? ""), y.dataset.slotKey = String(u.slotKey ?? ""), y.dataset.targetName = String(u.targetName ?? ""), y.dataset.hitLocationName = String(u.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), o.appendChild(y);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-DWn6RfMG.mjs.map
