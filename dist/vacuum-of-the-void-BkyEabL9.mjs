var xs = Object.defineProperty;
var Rs = Object.getPrototypeOf;
var Ms = Reflect.get;
var Ks = (I, s, e) => s in I ? xs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var J = (I, s, e) => Ks(I, typeof s != "symbol" ? s + "" : s, e);
var H = (I, s, e) => Ms(Rs(I), e, s);
const { HTMLField: js, NumberField: F, SchemaField: z, StringField: D, BooleanField: te, ArrayField: ft } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new z({
        name: new D({ required: !1, blank: !0, initial: "" }),
        player: new D({ required: !1, blank: !0, initial: "" }),
        level: new F({ required: !1, integer: !0, min: 1, initial: 1 }),
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
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new z({
          head: new z({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new z({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new z({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new z({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new z({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new z({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new z({
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
      combat: new z({
        defense: new F({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new F({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new D({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new F({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new ft(
          new z({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new z({
        deception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new D({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new D({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new D({ required: !1, blank: !0, initial: "" }),
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
        armor: new ft(
          new z({
            name: new D({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new D({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new D({ required: !1, blank: !0, initial: "" }),
            level: new D({ required: !1, blank: !0, initial: "" }),
            other: new D({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ft(
          new z({
            name: new D({ required: !1, blank: !0, initial: "" }),
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new ft(
            new D({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new z({
          items: new ft(
            new D({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new z({
        biography: new js({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: At, SchemaField: zs } = foundry.data.fields;
class Us extends Ut {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new zs({
        body: new At({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new At({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new At({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Hs, StringField: cs } = foundry.data.fields;
class Bs extends Ut {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Hs({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new cs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new cs({ required: !1, blank: !0, initial: "" })
      })
    };
  }
}
const { BooleanField: Gs, NumberField: ai, StringField: Le } = foundry.data.fields;
class ls extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Gs({ required: !1, initial: !1 }),
      type: new Le({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Le({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Le({ required: !1, blank: !0, initial: "" }),
      damage: new Le({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Le({ required: !1, blank: !0, initial: "" }),
      special: new Le({ required: !1, blank: !0, initial: "" }),
      quantity: new Le({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Le({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Ws, StringField: qt } = foundry.data.fields;
class Vs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ws({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new qt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new qt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new qt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new qt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ft, StringField: us } = foundry.data.fields;
class Ys extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new us({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new us({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Ft({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ft({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ft({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Xs, StringField: ds } = foundry.data.fields;
class ms extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ds({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ds({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Xs({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ps } = foundry.data.fields;
class Qs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ps({ required: !1, blank: !0, initial: "" }),
      quantity: new ps({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Js } = foundry.data.fields;
class Zs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Js({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Pt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let o = i;
    for (const c of u) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, o);
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
  d(I.terms, 1);
  const a = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, m = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, f = a + m, b = l + p;
  return f > 0 && f === b ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function ei(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var fs, ys, gs, hs;
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
    var n, d, a, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, a = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, y = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (l.focus = {
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
    const p = this.element, f = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || u) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), a = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const l = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const l = String(((d = a.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, d;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let t = 0;
    for (const a of e) {
      const l = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, b, u, i, o, c, r, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((b = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : b.value) ?? 0, n = ((u = e.currentHealth) == null ? void 0 : u.legs) ?? 0, d = W._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const a = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let l;
    d === 1 ? l = -6 : d === 2 ? l = -3 : l = a, l += W._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((r = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : r.speed) ?? 0) || 0, p = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(l) ? l : 0);
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
    var b, u, i, o, c, r, y, h, w, S, T, O;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : r.resources) ?? {}, d = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, a = ((w = n.currentHealth) == null ? void 0 : w.legs) ?? 0, l = W._healthStatusFromRatio(a, d), m = Number(((O = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : O.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = m;
    const f = this._getTotalArmorSpeedPenalty();
    p += f, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var p, f, b, u, i, o, c, r, y, h, w, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((u = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : u.givenProtection) ?? 0) || 0, d = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, a = (h = (y = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, l = (T = (S = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + d + a + l;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), a = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(a == null ? void 0 : a.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, f = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + f);
  }
  _writeTotalSpeed(s = null) {
    var c, r, y, h, w, S, T, O;
    const e = s ?? this.form ?? this.element, t = (A) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, A)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${A}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), a = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (r = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : r.has) != null && y.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((w = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : w.resources) ?? {}, p = ((T = (S = m.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((O = m.currentHealth) == null ? void 0 : O.legs) ?? 0;
    if (W._healthStatusFromRatio(f, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(a == null ? void 0 : a.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, o = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, l, m, p;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((m = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return W._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, m, p, f;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, a = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return W._healthStatusFromRatio(a, d);
  }
  async _prepareContext(s) {
    var et, tt, st, it, nt, rt, at, ot, ct, $e, lt, ut, xe, k, E, x, B, oe, X, ye, me, ce, De, Re, Me, Dt, _t, Ot, Ct, dt, We, Bt, Gt, Wt, Vt, Yt, Xt, Qt, Jt, Zt, es, ts, ss, is, ns;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((st = (tt = (et = this.actor.system) == null ? void 0 : et.resources) == null ? void 0 : tt.stress) == null ? void 0 : st.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, a = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const L = ((it = d[g]) == null ? void 0 : it.value) ?? 0, q = a[g] ?? 0;
      e.computedHealthStatus[g] = W._healthStatusFromRatio(q, L);
    }
    const m = (Number(a.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((g) => (Number(a[g]) || 0) === 0).length;
    e.showDeathSkull = m || f >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((rt = (nt = this.actor.system) == null ? void 0 : nt.combat) == null ? void 0 : rt.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((ot = (at = this.actor.system) == null ? void 0 : at.combat) == null ? void 0 : ot.givenProtection) ?? 0) || 0, r = (lt = ($e = (ct = this.actor) == null ? void 0 : ct.statuses) == null ? void 0 : $e.has) != null && lt.call($e, "lookaround") ? 1 : 0, y = (k = (xe = (ut = this.actor) == null ? void 0 : ut.statuses) == null ? void 0 : xe.has) != null && k.call(xe, "halfcover") ? 3 : 0, h = (B = (x = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : x.has) != null && B.call(x, "threequarteredcover") ? 6 : 0, w = c + this._getTotalArmorProtectionBonus() + r + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: w } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let O = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    b === 0 && (O = 0), (me = (ye = (X = this.actor) == null ? void 0 : X.statuses) == null ? void 0 : ye.has) != null && me.call(ye, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (De = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : De.givenProtection } },
      { inplace: !1 }
    ), O = 0), e.totalSpeed = O;
    const A = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, L] of Object.entries(A)) {
      const q = e.computedHealthStatus[L];
      e.skillHealthStatus[g] = q, e.skillDisabled[g] = q === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const N = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = (N.slotOrder ?? "").trim(), _ = C ? C.split(/\s*,\s*/).filter((g) => v.includes(g)) : [], R = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, K = R && typeof R == "object" && !Array.isArray(R) ? R : {}, U = (((Me = K.slot1) == null ? void 0 : Me.itemId) ?? "").trim(), G = (((Dt = K.slot2) == null ? void 0 : Dt.itemId) ?? "").trim(), Z = (((_t = K.slot3) == null ? void 0 : _t.itemId) ?? "").trim(), M = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, L) => {
      const q = typeof g.sort == "number" ? g.sort : 0, P = typeof L.sort == "number" ? L.sort : 0;
      return q - P;
    }).map((g) => {
      var _e, je, ze, Ce, qe, mt;
      const L = g.type === "Fegyver", q = g.type === "MikroChip";
      let P = 0, j = "", ee = null;
      for (let Ve = 0; Ve < _.length; Ve++) {
        const pt = _[Ve];
        if ((((_e = N[pt]) == null ? void 0 : _e.itemId) ?? "") === g.id) {
          P = Ve + 1, j = ((je = N[pt]) == null ? void 0 : je.bonus) ?? "", ee = pt;
          break;
        }
      }
      let Q = null;
      q && (U === g.id ? Q = "slot1" : G === g.id ? Q = "slot2" : Z === g.id && (Q = "slot3"));
      const Ke = L && ((ze = g.system) != null && ze.damage) ? g.system.damage : "", le = L && typeof ((Ce = g.system) == null ? void 0 : Ce.range) == "string" ? (g.system.range || "").trim() : "", pe = ee ? Number((qe = N[ee]) == null ? void 0 : qe.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: L,
        slotAssignment: P,
        slotBonus: j,
        slotKey: ee,
        microchipSlotKey: Q,
        isEquipped: !!(ee || Q),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: pe,
        quantity: Number(((mt = g.system) == null ? void 0 : mt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const Y = (((Ot = this.actor.items) == null ? void 0 : Ot.contents) ?? []).filter((g) => g.type === "Fegyver"), re = Y.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = re;
    const Ie = "— Nincs fegyver —", fe = _.filter((g) => {
      const q = ((N[g] ?? {}).itemId ?? "").trim();
      return q ? !!Y.find((j) => j.id === q) : !1;
    });
    e.weaponSlots = fe.map((g, L) => {
      const q = N[g] ?? {}, P = (q.itemId ?? "").trim(), j = re.find((pe) => pe.id === P), ee = Y.find((pe) => pe.id === P), Q = (ee == null ? void 0 : ee.system) ?? {}, Ke = Q.size === "thrown", le = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: g,
        itemId: P,
        slotNum: L + 1,
        displayName: (j == null ? void 0 : j.name) || q.name || Ie,
        img: (j == null ? void 0 : j.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? "",
        isThrown: Ke,
        rangeStr: le
      };
    });
    const Se = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = Y.map((g) => {
      var rs, as, os;
      const L = g.id;
      let q = null, P = {};
      for (const Nt of _)
        if ((((rs = N[Nt]) == null ? void 0 : rs.itemId) ?? "").trim() === L) {
          q = Nt, P = N[Nt] ?? {};
          break;
        }
      const j = !!q, ee = ((as = g.system) == null ? void 0 : as.equipped) !== void 0 && ((os = g.system) == null ? void 0 : os.equipped) !== null ? !!g.system.equipped : j, Q = (g == null ? void 0 : g.system) ?? {}, Ke = typeof Q.range == "string" ? (Q.range || "").trim() : "", le = Q.type ?? "", pe = (Se[le] ?? le) || "—", _e = Q.size ?? "", je = (ae[_e] ?? _e) || "", ze = [pe, je].filter(Boolean).join(", ") || pe || "—", Ce = le === "projectile" || _e === "thrown", qe = Q.quantity, mt = qe != null ? String(qe).trim() : "1", Ve = String(P.bonus ?? "").trim(), pt = String(Q.bonus ?? "").trim(), $s = Ve || pt || "0";
      return {
        slotKey: q ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? Ie,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: $s,
        damage: P.damage ?? Q.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: pe,
        typeAndSize: ze,
        quantity: mt,
        quantityDisplay: Ce ? mt : "—",
        isProjectile: Ce,
        equipped: ee,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const ue = (((Ct = this.actor.items) == null ? void 0 : Ct.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = ue.map((g) => {
      var P, j;
      const L = (g == null ? void 0 : g.system) ?? {}, q = ((P = g.system) == null ? void 0 : P.equipped) !== void 0 && ((j = g.system) == null ? void 0 : j.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: ei((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: q
      };
    });
    const Ne = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Ne.map((g) => {
      const L = (g == null ? void 0 : g.system) ?? {}, q = (L.description ?? "").trim(), P = q ? q.length > 60 ? q.slice(0, 57) + "…" : q : "—", j = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: j,
        description: P
      };
    });
    const Ue = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = Ue.map((g) => {
      const q = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), P = q ? q.length > 80 ? q.slice(0, 77) + "…" : q : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: P
      };
    });
    const gt = (((Bt = this.actor.items) == null ? void 0 : Bt.contents) ?? []).filter((g) => g.type === "MikroChip"), ne = gt.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ye = "— Nincs Mikro-Chip —", Te = ["slot1", "slot2", "slot3"], He = (g) => {
      var q, P, j;
      const L = [];
      return g !== 1 && L.push((((q = K.slot1) == null ? void 0 : q.itemId) ?? "").trim()), g !== 2 && L.push((((P = K.slot2) == null ? void 0 : P.itemId) ?? "").trim()), g !== 3 && L.push((((j = K.slot3) == null ? void 0 : j.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((g) => !He(1).includes(g.id)), e.microchipItemsSlot2 = ne.filter((g) => !He(2).includes(g.id)), e.microchipItemsSlot3 = ne.filter((g) => !He(3).includes(g.id)), e.microchipSlots = Te.map((g) => {
      const L = K[g] ?? {}, q = (L.itemId ?? "").trim(), P = gt.find((j) => j.id === q);
      return {
        slotKey: g,
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || Ye,
        img: (P == null ? void 0 : P.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const L = `slot${g}`, q = K[L] ?? {}, P = (q.itemId ?? "").trim(), j = ne.find((ee) => ee.id === P);
      e[`microchip${g}ItemId`] = P, e[`microchip${g}DisplayName`] = (j == null ? void 0 : j.name) || q.name || Ye, e[`microchip${g}Img`] = (j == null ? void 0 : j.img) || "";
    }), e.microchipsTable = gt.map((g) => {
      var _e, je, ze, Ce;
      const L = g.id;
      let q = null;
      for (const qe of Te)
        if ((((_e = K[qe]) == null ? void 0 : _e.itemId) ?? "").trim() === L) {
          q = qe;
          break;
        }
      const P = !!q, j = ((je = g == null ? void 0 : g.system) == null ? void 0 : je.abilityType) ?? "", ee = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", Q = j === "active", Ke = Number((ze = g == null ? void 0 : g.system) == null ? void 0 : ze.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, le = (((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.description) ?? "").trim(), pe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: ee,
        description: pe,
        kp: Ke,
        isActive: Q,
        slotKey: q ?? "",
        equipped: P
      };
    });
    const ht = (((Gt = e.weaponsTable) == null ? void 0 : Gt.length) ?? 0) > 0 || (((Wt = e.armorTable) == null ? void 0 : Wt.length) ?? 0) > 0 || (((Vt = e.microchipsTable) == null ? void 0 : Vt.length) ?? 0) > 0 || (((Yt = e.itemsTable) == null ? void 0 : Yt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !ht;
    const bt = this.actor.system.abilities ?? {}, Ht = (((Xt = this.actor.items) == null ? void 0 : Xt.contents) ?? []).map((g) => {
      var L, q, P;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((L = g.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((q = g.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((P = g.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Be = new Map(Ht.map((g) => [g.id, g])), vt = "— Nincs képesség —", Xe = (g) => {
      const L = bt[g] ?? {}, q = (L.itemId ?? "").trim(), P = q ? Be.get(q) : null, j = (P == null ? void 0 : P.description) ?? "", ee = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: q,
        displayName: (P == null ? void 0 : P.name) || L.name || vt,
        img: (P == null ? void 0 : P.img) || "",
        description: j,
        kp: ee
      };
    };
    e.abilityFajiSlot = Xe("faji"), e.abilityHatterSlot = Xe("hatter");
    const Qe = (g) => {
      const L = bt[g];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Je = (g) => g.map((L) => {
      const q = Be.get(L);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Je(Qe("passive")), e.abilityActiveList = Je(Qe("active"));
    const kt = ((Qt = e.system) == null ? void 0 : Qt.resources) ?? {}, Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (Zt = (Jt = e.system) == null ? void 0 : Jt.combat) == null ? void 0 : Zt.initiativeResult, de = typeof Ae == "number" ? Ae : -1, wt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (ts = (es = e.system) == null ? void 0 : es.combat) == null ? void 0 : ts.initiativeRanges, Pe = Array.isArray(Fe) ? Fe.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Oe = (Pe.length > 0 ? Pe : wt).slice().sort((g, L) => g.min - L.min), Ee = Pe.map((g) => g.min), It = Ee.length ? Math.min(...Ee) : 0, St = Ee.length ? Math.max(...Ee) : 0;
    e.initiativeRanges = Pe.map((g) => ({ ...g, isFirst: g.min === It, isLast: g.min === St }));
    let Ze = 0;
    if (typeof de == "number" && de >= 0 && Oe.length > 0) {
      const g = Oe[0], L = Oe[Oe.length - 1];
      let q = null;
      de <= g.max ? q = g : de >= L.min ? q = L : q = Oe.find((P) => de >= P.min && de <= P.max), q && (Ze = q.kp);
    }
    e.kpDots = Ge.map((g, L) => {
      const q = L + 1, P = !!Number(kt[g]), j = q <= Ze;
      return { index: q, used: P, usable: j };
    });
    const Tt = !!((is = (ss = game.combat) == null ? void 0 : ss.combatants) != null && is.some((g) => {
      var L;
      return ((L = g.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Tt, e.canEditInitiative = !!((ns = game.user) != null && ns.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-lv6FVnA2.mjs");
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
      const { openRollSheetForSkill: o } = await import("./roll-sheet-lv6FVnA2.mjs");
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
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
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
      const o = i.currentTarget, c = o.dataset.skill, r = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: y } = await import("./roll-sheet-lv6FVnA2.mjs");
      y(this.actor, c, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, O, A, N, v, C;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), r = c == null ? void 0 : c.dataset.slot;
      if (!r) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const w = ((A = (O = this.actor.items).get) == null ? void 0 : A.call(O, h)) ?? ((v = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : v.call(N, (_) => _.id === h));
      (C = w == null ? void 0 : w.sheet) == null || C.render(!0);
    });
    const l = (i, o) => {
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
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
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
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], A = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === c;
        });
        if (A) {
          const N = O.filter((v) => v !== A);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var A, N;
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
          [`system.weapons.${v}.damage`]: ((A = r == null ? void 0 : r.system) == null ? void 0 : A.damage) ?? "",
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
      const A = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (A == null ? void 0 : A.name) ?? ""
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
      var A, N;
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
          [`system.weapons.${v}.damage`]: ((A = r.system) == null ? void 0 : A.damage) ?? "",
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
        const w = r.system.weapons ?? {}, S = (w.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = S ? S.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], A = O.find((N) => {
          var v;
          return (((v = w[N]) == null ? void 0 : v.itemId) ?? "").trim() === c;
        });
        if (A) {
          const N = O.filter((v) => v !== A);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
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
    const m = this, p = (i) => {
      var r, y, h, w;
      if (!i) return;
      const o = m._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((y = (r = o.system) == null ? void 0 : r.resources) == null ? void 0 : y.currentHealth) != null || ((w = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : w.hitLocations) != null;
      m.actor.update(o).then(() => {
        c && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var o, c, r;
      return i && (((c = (o = m.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || m.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const r = o.form;
      if (!f(r)) return;
      const y = i.relatedTarget;
      y && (r.contains(y) || m.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(r));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, m, p;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      f.type === "checkbox" ? b = f.checked : f.type === "number" ? b = f.value === "" ? 0 : Number(f.value) : b = f.value ?? "", foundry.utils.setProperty(e, f.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const f of a) {
      const b = ((p = n[f]) == null ? void 0 : p.value) ?? 0, u = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, W._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, a, l, m, p, f, b, u, i, o;
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
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : d.id) ?? y;
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
          const S = h === "active" ? "active" : "passive", T = Array.isArray((l = w[S]) == null ? void 0 : l.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
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
          const y = this.actor, h = ((p = r.parent) == null ? void 0 : p.id) !== y.id;
          let w = r.id;
          if (h) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            w = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? w;
          }
          if (h) {
            const S = ((b = y.system) == null ? void 0 : b.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = T ? T.split(/\s*,\s*/).filter((v) => O.includes(v)) : [], N = A.filter((v) => {
              var C;
              return (((C = S[v]) == null ? void 0 : C.itemId) ?? "").trim() === w;
            });
            if (N.length > 0) {
              const C = {
                "system.weapons.slotOrder": A.filter((_) => !N.includes(_)).join(",")
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
          if (((u = r.parent) == null ? void 0 : u.id) !== y.id) {
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
    var d, a, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, m, p, f, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
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
    const a = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((b = d.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((u = d.system) == null ? void 0 : u.bonus) ?? ""
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
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, o = typeof u.sort == "number" ? u.sort : 0;
      return i - o;
    }).map((b) => b.id), a = d.indexOf(t), l = d.indexOf(e);
    if (a === -1 || l === -1) return;
    d.splice(a, 1), d.splice(l, 0, t);
    const m = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(s) {
    var n, d, a;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var m, p, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${l}
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
    var a, l, m;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
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
    var m, p, f, b;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const a = this.actor.system.abilities ?? {}, l = Array.isArray((b = a[e]) == null ? void 0 : b.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, a, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, m, p, f, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
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
    let a = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? d -= 6 : a === 2 && (d -= 3);
    const m = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(m);
    await p.evaluate({ async: !0 });
    const { resultType: f, label: b } = Pt(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: b } },
      rollMode: u
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
    var a;
    const s = Number(((a = this.actor.system.skills) == null ? void 0 : a.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    let a = null;
    t.itemId && (a = d.find((O) => O.id === t.itemId) ?? null);
    const l = a && a.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, p = ((S = a == null ? void 0 : a.system) == null ? void 0 : S.type) || "kinetic", f = (((T = a == null ? void 0 : a.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = f && n[f] !== void 0 ? f : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = m + u, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(c);
    await r.evaluate({ async: !0 });
    const { resultType: y, label: h } = Pt(r), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, f, b, u, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : b.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
J(W, "PARTS", foundry.utils.mergeObject(
  H(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), J(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((fs = H(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ys = H(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ys.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((hs = (gs = H(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : gs.window) == null ? void 0 : hs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
J(W, "BODY_PART_BY_SKILL", {
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
let yt = W;
function ti(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var bs, vs, ks, ws;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, a, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && c && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const a = await super.render(s, e), l = this.element, m = this.form ?? this.element, p = d.scrollState, f = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var i, o;
      if (this._applyScrollState(l, p), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((i = m.querySelector) == null ? void 0 : i.call(m, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = m.querySelector) == null ? void 0 : o.call(m, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || f) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), a;
  }
  async _prepareContext(s) {
    var Xe, Qe, Je, kt, Ge, Ae, de, wt, Fe, Pe, Lt, Oe, Ee, It, St, Ze, Tt, et, tt, st, it, nt, rt, at, ot, ct, $e, lt, ut, xe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Xe = this.actor) == null ? void 0 : Xe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Je = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Je.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((kt = e.system) == null ? void 0 : kt.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, a = (Ae = (Ge = t == null ? void 0 : t.statuses) == null ? void 0 : Ge.has) != null && Ae.call(Ge, "lookaround") ? 1 : 0, l = (wt = (de = t == null ? void 0 : t.statuses) == null ? void 0 : de.has) != null && wt.call(de, "halfcover") ? 3 : 0, m = (Pe = (Fe = t == null ? void 0 : t.statuses) == null ? void 0 : Fe.has) != null && Pe.call(Fe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = d + a + l + m;
    const p = ((Lt = t == null ? void 0 : t.items) == null ? void 0 : Lt.contents) ?? [], f = ((Oe = t == null ? void 0 : t.system) == null ? void 0 : Oe.weapons) ?? {}, b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (f.slotOrder ?? "").trim(), i = u ? u.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], o = p.filter((k) => k.type === "Fegyver"), c = o.map((k) => ({ id: k.id, name: k.name, img: k.img })), r = "— Nincs fegyver —", y = i.length > 0 ? i : b, h = b.filter((k) => !y.includes(k)), w = [...y, ...h], S = w.filter((k) => {
      var x;
      const E = (((x = f[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return E && o.some((B) => B.id === E);
    });
    e.weaponSlots = S.map((k) => {
      const E = f[k] ?? {}, x = (E.itemId ?? "").trim(), B = c.find((ce) => ce.id === x), oe = o.find((ce) => ce.id === x), X = (oe == null ? void 0 : oe.system) ?? {}, ye = X.size === "thrown", me = (typeof X.range == "string" ? (X.range || "").trim() : "") || "—";
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
    e.weaponsTable = o.map((k) => {
      var dt;
      const E = k.id;
      let x = null, B = {};
      for (const We of w)
        if ((((dt = f[We]) == null ? void 0 : dt.itemId) ?? "").trim() === E) {
          x = We, B = f[We] ?? {};
          break;
        }
      const oe = !!x, X = (k == null ? void 0 : k.system) ?? {}, ye = typeof X.range == "string" ? (X.range || "").trim() : "", me = X.type ?? "", ce = (T[me] ?? me) || "—", De = X.size ?? "", Re = (O[De] ?? De) || "", Me = [ce, Re].filter(Boolean).join(", ") || ce || "—", Dt = me === "projectile" || De === "thrown", _t = X.quantity != null ? String(X.quantity).trim() : "1", Ot = String(X.bonus ?? B.bonus ?? "").trim() || "0", Ct = (X.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? r,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Ot,
        damage: Ct,
        rangeStr: ye || "—",
        typeAndSize: Me,
        quantity: _t,
        isProjectile: Dt,
        equipped: oe,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const A = p.filter((k) => k.type === "Pancel");
    e.armorTable = A.map((k) => {
      var B;
      const E = (k == null ? void 0 : k.system) ?? {}, x = ((B = k.system) == null ? void 0 : B.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: ti((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const N = ((It = (Ee = t == null ? void 0 : t.system) == null ? void 0 : Ee.gear) == null ? void 0 : It.microchips) ?? {}, v = ["slot1", "slot2", "slot3"], C = p.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var me, ce, De, Re;
      const E = k.id;
      let x = null;
      for (const Me of v)
        if ((((me = N[Me]) == null ? void 0 : me.itemId) ?? "").trim() === E) {
          x = Me;
          break;
        }
      const B = ((ce = k == null ? void 0 : k.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", X = (((De = k == null ? void 0 : k.system) == null ? void 0 : De.description) ?? "").trim(), ye = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: oe,
        description: ye,
        kp: Number((Re = k == null ? void 0 : k.system) == null ? void 0 : Re.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
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
    const K = (((St = e.weaponsTable) == null ? void 0 : St.length) ?? 0) > 0 || (((Ze = e.armorTable) == null ? void 0 : Ze.length) ?? 0) > 0 || (((Tt = e.microchipsTable) == null ? void 0 : Tt.length) ?? 0) > 0 || (((et = e.itemsTable) == null ? void 0 : et.length) ?? 0) > 0 || (((tt = e.egyebList) == null ? void 0 : tt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !K;
    const U = ((st = t == null ? void 0 : t.system) == null ? void 0 : st.abilities) ?? {}, G = p.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
      const E = U[k];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, Y = (k) => (k || []).map((E) => {
      const x = Z.get(E);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Y(M("passive")), e.abilityActiveList = Y(M("active"));
    const re = t == null ? void 0 : t.id, Ie = !!((nt = (it = game.combat) == null ? void 0 : it.combatants) != null && nt.some(
      (k) => {
        var E;
        return (((E = k.actor) == null ? void 0 : E.id) ?? k.actorId) === re;
      }
    ));
    e.showHarcSection = Ie;
    const fe = ((rt = e.system) == null ? void 0 : rt.resources) ?? {}, Se = (ot = (at = e.system) == null ? void 0 : at.combat) == null ? void 0 : ot.initiativeResult, ae = typeof Se == "number" ? Se : -1, ue = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ne = ($e = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : $e.initiativeRanges, Ue = Array.isArray(Ne) ? Ne.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ne = (Ue.length > 0 ? Ue : ue).slice().sort((k, E) => k.min - E.min), Ye = 3;
    let Te = Ue.length > 0 ? Ue : [];
    Te.length < Ye && (Te = [...Te, ...Array(Ye - Te.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = Te.map((k, E) => ({
      ...k,
      isFirst: E === 0,
      isLast: E === Te.length - 1
    }));
    let He = 0;
    if (typeof ae == "number" && ae >= 0 && ne.length > 0) {
      const k = ne[0], E = ne[ne.length - 1];
      let x = null;
      ae <= k.max ? x = k : ae >= E.min ? x = E : x = ne.find((B) => ae >= B.min && ae <= B.max), x && (He = x.kp);
    }
    const ht = ne.length > 0 ? ne[ne.length - 1] : null, bt = Math.min(10, ht ? ht.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, bt)).map((k, E) => {
      const x = E + 1, B = !!Number(fe[k]), oe = x <= He;
      return { index: x, used: B, usable: oe };
    }), vt = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, vt), e.kpDotsRow2 = Be.slice(vt), e.canEditInitiative = !!((lt = game.user) != null && lt.isGM), e.showInitiativeResult = typeof Se == "number", e.initiativeResult = e.showInitiativeResult ? Se : "", e.speedUnitForSelect = ((xe = (ut = e.system) == null ? void 0 : ut.combat) == null ? void 0 : xe.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var p, f, b;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var c, r, y;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((y = (r = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var c, r, y;
      u.preventDefault();
      const i = (r = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (y = o == null ? void 0 : o.sheet) == null || y.render(!0);
    });
    const n = (u) => {
      var c, r;
      const i = (c = u == null ? void 0 : u.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (r = o == null ? void 0 : o.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, y, h, w;
      u.preventDefault();
      const i = (y = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : y.call(r, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (w = c == null ? void 0 : c.sheet) == null || w.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-lv6FVnA2.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var c, r, y, h, w;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (o = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-lv6FVnA2.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var r, y;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const c = !!Number((y = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : y[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var y, h;
      u.preventDefault();
      const i = u.currentTarget, o = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-lv6FVnA2.mjs");
      r(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var o, c;
      u.preventDefault();
      const i = (c = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var c, r;
      u.preventDefault();
      const i = (((r = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, w, S, T, O, A;
      if (u.preventDefault(), !u.altKey) return;
      const i = (w = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : w.area, o = (T = (S = u.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !o || !this.actor) return;
      const c = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, y = (Array.isArray((A = c[i]) == null ? void 0 : A.items) ? c[i].items.slice() : []).filter((N) => N !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var o, c;
      if (u.preventDefault(), !u.altKey) return;
      const i = (c = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, w;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, r = (((w = i == null ? void 0 : i.dataset) == null ? void 0 : w.slotKey) ?? "").trim(), y = {};
      r && (y[`system.weapons.${r}.itemId`] = "", y[`system.weapons.${r}.name`] = "", y[`system.weapons.${r}.damage`] = "", y[`system.weapons.${r}.bonus`] = ""), Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var o, c;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((c = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var y, h, w, S;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
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
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var c, r;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((r = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var y, h, w;
      const i = u.currentTarget, o = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const r = c.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((w = u.dataTransfer) == null ? void 0 : w.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const a = this, l = (u) => {
      if (!u) return;
      const i = a._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && a.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, m = (u) => {
      var i, o, c;
      return u && (((o = (i = a.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, u)) || a.id && ((c = u.closest) == null ? void 0 : c.call(u, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (u) => {
      var y;
      const i = u.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = i.form;
      if (!m(c)) return;
      const r = u.relatedTarget;
      r && (c.contains(r) || a.id && ((y = r.closest) != null && y.call(r, `#${CSS.escape(a.id)}`))) || l(c);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (u, i, o) => {
      var c;
      a.actor && ((c = u == null ? void 0 : u.parent) == null ? void 0 : c.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (u, i, o) => {
      var c;
      a.actor && ((c = u == null ? void 0 : u.parent) == null ? void 0 : c.id) === a.actor.id && a.render(!0);
    }, Hooks.on("updateItem", a._votvNpcItemUpdateHook), Hooks.on("deleteItem", a._votvNpcItemDeleteHook), a._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && await this.actor.update(a).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var T, O, A, N, v;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((O = e.system) == null ? void 0 : O.skills) ?? {}, a = ((A = e.items) == null ? void 0 : A.filter((C) => C.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = a.find((C) => C.id === n.itemId) ?? null);
    const m = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, f = ((N = l == null ? void 0 : l.system) == null ? void 0 : N.type) || "kinetic", b = (((v = l == null ? void 0 : l.system) == null ? void 0 : v.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : f === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, o = p + i, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, y = new Roll(r);
    await y.evaluate({ async: !0 });
    const { resultType: h, label: w } = Pt(y), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: w } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, f, b, u, i, o, c, r, y;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : b.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var f, b, u, i, o, c, r, y, h, w, S, T, O, A, N, v, C;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((_) => {
      var K;
      if (!_) return null;
      const R = _.uuid ?? _.documentUuid ?? ((K = _.data) == null ? void 0 : K.uuid) ?? (typeof _ == "string" ? _ : null);
      if (R) return R;
      if (typeof _ == "object") {
        for (const U of Object.values(_))
          if (typeof U == "string" && U.includes(".") && U.startsWith("Item.")) return U;
      }
      return null;
    })(e);
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const a = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let _ = d.id;
      if (((c = d.parent) == null ? void 0 : c.id) !== a.id) {
        const Z = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        _ = ((r = (await a.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : r.id) ?? _;
      }
      const R = (((y = d.system) == null ? void 0 : y.kind) ?? "passive").toString(), K = ((h = a.system) == null ? void 0 : h.abilities) ?? {}, U = R === "active" ? "active" : "passive", G = Array.isArray((w = K[U]) == null ? void 0 : w.items) ? K[U].items.slice() : Array.isArray(K[U]) ? K[U].slice() : [];
      G.includes(_) || G.push(_), await a.update({ [`system.abilities.${U}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = d.parent) == null ? void 0 : S.id) === a.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (T = (await a.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && p) {
      const _ = ((O = a.system) == null ? void 0 : O.weapons) ?? {}, R = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], K = (_.slotOrder ?? "").trim(), U = K ? K.split(/\s*,\s*/).filter((V) => R.includes(V)) : [];
      let G = R.find((V) => {
        var M;
        return !(((M = _[V]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = R.find((V) => !U.includes(V)) ?? "slot1");
      const Z = U.includes(G) ? U : [...U, G].filter((V) => R.includes(V));
      await a.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = d.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const _ = ((C = (v = a.system) == null ? void 0 : v.gear) == null ? void 0 : C.microchips) ?? {}, K = ["slot1", "slot2", "slot3"].find((U) => {
        var G;
        return !(((G = _[U]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      K && await a.update({
        [`system.gear.microchips.${K}.itemId`]: p,
        [`system.gear.microchips.${K}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, b, u, i, o, c;
    const e = (b = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${l}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((c = this.actor) == null ? void 0 : c.name) ?? void 0 }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var m, p, f, b, u, i;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const o = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        c > 0 && (d = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: l,
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
        const a = (n.value ?? "").trim();
        if (a === "") continue;
        d = Number(a) || 0;
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
J(se, "PARTS", foundry.utils.mergeObject(
  H(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), J(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(se, se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((bs = H(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : bs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vs = H(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : vs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ws = (ks = H(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) == null ? void 0 : ws.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Et = se;
function si(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Is, Ss, Ts, Ds;
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
    var n, d, a, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, a = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, y = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (l.focus = {
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
    const p = this.element, f = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var r, y;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || u) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (p) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, p)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${p}`) : null);
    }, n = t(".jarmu-total-defense-effective"), d = t('input[name="system.combat.defense"]'), a = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const l = Number(d == null ? void 0 : d.value) || 0, m = Number(a == null ? void 0 : a.value) || 0;
    n.textContent = String(l + m);
  }
  async _prepareContext(s) {
    var i, o, c, r, y, h, w, S, T, O, A, N;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((i = e.system) == null ? void 0 : i.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((c = (o = e.system) == null ? void 0 : o.identity) == null ? void 0 : c.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, d = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, a = "— Nincs fegyver —", l = (((r = this.actor.items) == null ? void 0 : r.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = l.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = C.type ?? "", R = (n[_] ?? _) || "—", K = C.size ?? "", U = (d[K] ?? K) || "", G = [R, U].filter(Boolean).join(", ") || R || "—", Z = _ === "projectile" || K === "thrown", V = C.quantity != null ? String(C.quantity).trim() : "1", M = (typeof C.range == "string" ? (C.range || "").trim() : "") || "—";
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
        level: si((C.level ?? "").toString().trim()),
        special: (C.special ?? C.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const p = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = p.map((v) => {
      var Z, V, M;
      const C = ((Z = v == null ? void 0 : v.system) == null ? void 0 : Z.abilityType) ?? "", _ = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—", R = C === "active", K = Number((V = v == null ? void 0 : v.system) == null ? void 0 : V.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, U = (((M = v == null ? void 0 : v.system) == null ? void 0 : M.description) ?? "").trim(), G = U ? U.length > 60 ? U.slice(0, 57) + "…" : U : "—";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: _,
        description: G,
        kp: K,
        isActive: R,
        slotKey: "",
        equipped: !1
      };
    });
    const f = (((w = this.actor.items) == null ? void 0 : w.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = f.map((v) => {
      const C = (v == null ? void 0 : v.system) ?? {}, _ = (C.description ?? "").trim(), R = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", K = C.quantity != null ? String(C.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: K,
        description: R
      };
    });
    const b = (((S = e.weaponsTable) == null ? void 0 : S.length) ?? 0) > 0 || (((T = e.armorTable) == null ? void 0 : T.length) ?? 0) > 0 || (((O = e.microchipsTable) == null ? void 0 : O.length) ?? 0) > 0 || (((A = e.itemsTable) == null ? void 0 : A.length) ?? 0) > 0;
    e.showEquipmentDropZone = !b;
    const u = (((N = this.actor.items) == null ? void 0 : N.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = u.map((v) => {
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
    var l;
    super._attachFrameListeners(s);
    const e = this.form ?? ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (m) => {
      var b, u, i;
      m.preventDefault(), m.stopPropagation();
      const p = ((i = (u = (b = foundry.applications) == null ? void 0 : b.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    });
    const n = this, d = (m) => {
      if (!m) return;
      const p = n._getFormDataForUpdate(m);
      Object.keys(p).length !== 0 && n.actor.update(p).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, a = (m) => {
      var p, f, b;
      return m && (((f = (p = n.element) == null ? void 0 : p.contains) == null ? void 0 : f.call(p, m)) || n.id && ((b = m.closest) == null ? void 0 : b.call(m, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (m) => {
      var i;
      const p = m.target;
      if (!p || !p.form) return;
      const f = p.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const b = p.form;
      if (!a(b)) return;
      const u = m.relatedTarget;
      u && (b.contains(u) || n.id && ((i = u.closest) != null && i.call(u, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), d(b));
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
    const l = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await d.createEmbeddedDocuments("Item", [l]);
  }
};
J(ie, "PARTS", foundry.utils.mergeObject(
  H(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), J(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Is = H(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Is.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ss = H(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ds = (Ts = H(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) == null ? void 0 : Ds.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let $t = ie;
const ii = [
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
var _s;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = ii, e;
  }
};
J(ge, "PARTS", foundry.utils.mergeObject(H(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), J(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ge, ge, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((_s = H(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : _s.form) ?? {}, { submitOnChange: !1 })
}));
let xt = ge;
var Os;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
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
J(he, "PARTS", foundry.utils.mergeObject(H(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), J(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(he, he, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Os = H(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 })
}));
let Rt = he;
var Cs;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
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
J(be, "PARTS", foundry.utils.mergeObject(H(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), J(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(be, be, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Cs = H(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.form) ?? {}, { submitOnChange: !1 })
}));
let Mt = be;
var qs;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (a) => {
      var p;
      const l = a.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const m = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
J(ve, "PARTS", foundry.utils.mergeObject(H(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), J(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((qs = H(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : qs.form) ?? {}, { submitOnChange: !0 })
}));
let Kt = ve;
var Ls;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
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
J(ke, "PARTS", foundry.utils.mergeObject(H(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), J(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ls = H(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.form) ?? {}, { submitOnChange: !1 })
}));
let jt = ke;
var Ns;
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
      var p, f, b, u, i, o, c;
      if (!e.isEditable || !((f = (p = a.target) == null ? void 0 : p.closest) != null && f.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, d = (a) => {
      var l, m, p;
      return a && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var m, p, f;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((f = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : f.call(p, "form"));
      d(l) && n(l);
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
J(we, "PARTS", foundry.utils.mergeObject(H(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), J(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ns = H(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let zt = we;
const As = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Fs(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, d, a, l;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Us, CONFIG.Actor.dataModels.Npc = Ut, CONFIG.Actor.dataModels.Jarmu = Bs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ls, CONFIG.Item.dataModels.weapon = ls, CONFIG.Item.dataModels.Pancel = Vs, CONFIG.Item.dataModels.MikroChip = Ys, CONFIG.Item.dataModels.Kepesseg = ms, CONFIG.Item.dataModels.ability = ms, CONFIG.Item.dataModels.Targy = Qs, CONFIG.Item.dataModels.Egyeb = Zs, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (a = CONFIG.Combat).initiative ?? (a.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", yt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Et, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", $t, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", xt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Mt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", jt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", zt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), Hooks.on("updateActor", (m, p, f, b) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const u = m.id;
    setTimeout(() => {
      var r, y, h, w;
      const i = (r = game.actors) == null ? void 0 : r.get(u);
      if (!i || i.type !== "Karakter") return;
      const o = yt.getTotalSpeedRaw(i), c = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !c) {
        const S = ((w = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : w.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var O, A;
          const T = ((O = canvas.tokens) == null ? void 0 : O.placeables) ?? [];
          for (const N of T)
            ((A = N == null ? void 0 : N.document) == null ? void 0 : A.actorId) === u && typeof N.draw == "function" && N.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else o > 0 && c && c.delete().then(() => {
        var T, O;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const A of S)
          ((O = A == null ? void 0 : A.document) == null ? void 0 : O.actorId) === u && typeof A.draw == "function" && A.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, p, f, b) => {
    var T, O, A, N, v, C, _, R, K, U, G, Z, V;
    const u = m == null ? void 0 : m.id;
    if (!u) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((T = p == null ? void 0 : p.system) != null && T.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((A = (O = m.system) == null ? void 0 : O.combat) == null ? void 0 : A.initiativeResult), Y = Number.isFinite(M) ? M : 0, re = game.combat;
      if (re) {
        const Ie = ((N = re.combatants) == null ? void 0 : N.contents) ?? Array.from(re.combatants ?? []);
        for (const fe of Ie)
          if (((v = fe.actor) == null ? void 0 : v.id) === u || fe.actorId === u) {
            re.updateEmbeddedDocuments("Combatant", [{ _id: fe.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((C = p == null ? void 0 : p.system) != null && C.identity) && "size" in p.system.identity) {
      const M = Fs((R = (_ = m.system) == null ? void 0 : _.identity) == null ? void 0 : R.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, Y));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], r = (K = game.actors) == null ? void 0 : K.get(u);
    r != null && r.apps && c.push(...Array.from(r.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of y) {
      if (((U = M.document) == null ? void 0 : U.id) !== u || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor") continue;
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
  }), Hooks.on("updateItem", (m, p, f, b) => {
    var c, r, y;
    const u = m == null ? void 0 : m.parent;
    if (!u || u.documentName !== "Actor" || u.type !== "Karakter" || m.type !== "Fegyver") return;
    const i = ((c = u.system) == null ? void 0 : c.weapons) ?? {}, o = {};
    for (const [h, w] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !S || S !== m.id || (o[`system.weapons.${h}.name`] = m.name ?? "", o[`system.weapons.${h}.damage`] = ((r = m.system) == null ? void 0 : r.damage) ?? "", o[`system.weapons.${h}.bonus`] = ((y = m.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(o).length && u.update(o);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, w, S, T, O, A, N, v, C, _, R, K, U, G, Z, V, M, Y, re, Ie, fe, Se;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (w = game.messages) == null ? void 0 : w.get(n), a = (T = (S = d == null ? void 0 : d.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!a) return;
    const l = a.actorId ?? ((O = d == null ? void 0 : d.speaker) == null ? void 0 : O.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((A = game.actors) == null ? void 0 : A.get(a.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(l));
    if (m || (m = ((C = (v = game.scenes) == null ? void 0 : v.contents) == null ? void 0 : C.flatMap((ue) => {
      var Ne;
      return ((Ne = ue.tokens) == null ? void 0 : Ne.contents) ?? [];
    }).map((ue) => ue.actor).find((ue) => ue && (ue.id === l || ue.id === a.actorId))) ?? null), !m) return;
    const p = a.itemId ? ((R = (_ = m.items) == null ? void 0 : _.get) == null ? void 0 : R.call(_, a.itemId)) ?? ((G = (U = (K = m.items) == null ? void 0 : K.contents) == null ? void 0 : U.find) == null ? void 0 : G.call(U, (ae) => ae.id === a.itemId)) : null;
    let f = (a.damageFormula ?? "").trim();
    if (f || (f = (((Z = p == null ? void 0 : p.system) == null ? void 0 : Z.damage) ?? "").trim()), !f && a.slotKey && (f = (((((V = m.system) == null ? void 0 : V.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Ie = (M = ui.notifications) == null ? void 0 : M.warn) == null || Ie.call(M, ((re = (Y = game.i18n) == null ? void 0 : Y.localize) == null ? void 0 : re.call(Y, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(f);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = a.targetName || "", o = a.hitLocationName || "", c = ((p == null ? void 0 : p.name) ?? (a.slotKey ? ((Se = (((fe = m.system) == null ? void 0 : fe.weapons) ?? {})[a.slotKey]) == null ? void 0 : Se.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    o && (r += ` (${o})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, l, m, p, f, b;
      if (!((l = (a = e.target) == null ? void 0 : a.closest) != null && l.call(a, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, a;
    const e = ((t = game.actors) == null ? void 0 : t.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of e) {
      const m = yt.getTotalSpeedRaw(l), p = (n = l.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const f = ((a = (d = CONFIG.statusEffects) == null ? void 0 : d.find((b) => b.id === "immobilized")) == null ? void 0 : a.img) ?? "";
        await l.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: l.uuid
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
        background: { src: As },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await n.create(d);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var a, l, m, p, f, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, o = ((l = i == null ? void 0 : i.bar1) == null ? void 0 : l.attribute) ?? "", c = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (o || c) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((p = u.tokens) == null ? void 0 : p.filter((o) => {
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
    }, d = ((f = game.actors) == null ? void 0 : f.filter((u) => u.type === "Npc")) ?? [];
    for (const u of d)
      try {
        await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((b = u.tokens) == null ? void 0 : b.filter((o) => {
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
  var a, l, m, p;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (l = game.actors) == null ? void 0 : l.get(n) : null;
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
    if (d.type === "Npc") {
      const f = Fs((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
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
const ni = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ps(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(ni).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ps(I);
});
function Es() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], a = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const l of a)
      !l || I.has(l.id) || (I.add(l.id), typeof l.render == "function" && l.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Es, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && Ps(I), setTimeout(Es, 0);
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
    const a = s[0] ?? s;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": As,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var p, f, b, u;
  const t = ((p = I.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, a = t.weaponAttack, l = t.weapon;
  if (!n && !d && !a) return;
  const m = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const i = m.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const o = m.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? m, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = d, c.appendChild(r);
      }
    }
    if (a && l && (l.actorId || (b = I.speaker) != null && b.actor)) {
      const i = m.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const y = !!l.isHit, h = l.targetName || "Célpont";
        r.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(r);
      }
      if (l.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, w = l.hitLocationName;
        y.textContent = h != null && w ? `Sebzés (Találati Hely ${h} - ${w})` : "Sebzés", y.dataset.actorId = String(l.actorId ?? ((u = I.speaker) == null ? void 0 : u.actor) ?? ""), y.dataset.itemId = String(l.itemId ?? ""), y.dataset.slotKey = String(l.slotKey ?? ""), y.dataset.targetName = String(l.targetName ?? ""), y.dataset.hitLocationName = String(l.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), o.appendChild(y);
      }
    }
  }
});
export {
  yt as V,
  Pt as c
};
//# sourceMappingURL=vacuum-of-the-void-BkyEabL9.mjs.map
