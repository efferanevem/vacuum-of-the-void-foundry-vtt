var xs = Object.defineProperty;
var Rs = Object.getPrototypeOf;
var Ms = Reflect.get;
var Ks = (w, s, e) => s in w ? xs(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var X = (w, s, e) => Ks(w, typeof s != "symbol" ? s + "" : s, e);
var j = (w, s, e) => Ms(Rs(w), e, s);
const { HTMLField: js, NumberField: q, SchemaField: K, StringField: T, BooleanField: ee, ArrayField: ft } = foundry.data.fields;
class zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new T({ required: !1, blank: !0, initial: "" }),
        player: new T({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new T({ required: !1, blank: !0, initial: "" }),
        assignment: new T({ required: !1, blank: !0, initial: "" }),
        subAssignment: new T({ required: !1, blank: !0, initial: "" }),
        background: new T({ required: !1, blank: !0, initial: "" }),
        languages: new T({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new T({ required: !1, blank: !0, initial: "" })
      }),
      resources: new K({
        health: new K({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new K({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new K({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new K({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new K({
        defense: new q({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new T({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new q({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new q({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new ft(
          new K({
            min: new q({ required: !1, integer: !0, initial: 0 }),
            max: new q({ required: !1, integer: !0, initial: 0 }),
            kp: new q({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new K({
        deception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new T({ required: !1, blank: !0, initial: "" }),
        combatTraining: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new K({
        slotOrder: new T({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new K({
        microchips: new K({
          slot1: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          })
        }),
        equipment: new T({ required: !1, blank: !0, initial: "" }),
        armor: new ft(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new T({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new T({ required: !1, blank: !0, initial: "" }),
            level: new T({ required: !1, blank: !0, initial: "" }),
            other: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ft(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new K({
        faji: new K({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new K({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        passive: new K({
          items: new ft(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new ft(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new js({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Ft, SchemaField: zs } = foundry.data.fields;
class Hs extends zt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new zs({
        body: new Ft({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Ft({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Ft({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Us, StringField: os } = foundry.data.fields;
class Bs extends zt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Us({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new os({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new os({ required: !1, blank: !0, initial: "" })
      })
    };
  }
}
const { BooleanField: Gs, NumberField: ai, StringField: Ne } = foundry.data.fields;
class cs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Gs({ required: !1, initial: !1 }),
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
const { NumberField: At, StringField: ls } = foundry.data.fields;
class Ys extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ls({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ls({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new At({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new At({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new At({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Xs, StringField: us } = foundry.data.fields;
class ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new us({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new us({
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
const { StringField: ms } = foundry.data.fields;
class Qs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ms({ required: !1, blank: !0, initial: "" }),
      quantity: new ms({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Zs } = foundry.data.fields;
class Js extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Zs({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Pt(w) {
  if (!w || !Array.isArray(w.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const d = (l, i = 1) => {
    if (!Array.isArray(l)) return;
    let o = i;
    for (const c of l) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const a = typeof c.faces == "number" ? c.faces : void 0, f = Array.isArray(c.results) ? c.results : null;
      if (!a || !f || a === 8 || a !== 6) continue;
      const h = !n && o >= 0 && (c.number === 3 || c.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const k of f) {
        if (!k || k.discarded || k.hidden) continue;
        const S = Number(k.result ?? k);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  d(w.terms, 1);
  const r = s.filter((l) => l === 6).length, u = s.filter((l) => l === 1).length, m = e.filter((l) => l === 6).length, p = t.filter((l) => l === 6).length, y = r + m, b = u + p;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function ei(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var fs, ys, gs, hs;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, d, r, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const a = document.activeElement, f = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      f && h && (u.focus = {
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
    const p = this.element, y = this.form ?? this.element, b = u.scrollState, l = u.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var a, f;
      if (this._applyScrollState(p, b), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || l) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), r = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const u = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const u = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, d;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let t = 0;
    for (const r of e) {
      const u = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(u);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var y, b, l, i, o, c, a, f, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((b = (y = e.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : b.value) ?? 0, n = ((l = e.currentHealth) == null ? void 0 : l.legs) ?? 0, d = G._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const r = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let u;
    d === 1 ? u = -6 : d === 2 ? u = -3 : u = r, u += G._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((a = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : a.speed) ?? 0) || 0, p = Number(((h = (f = s.system) == null ? void 0 : f.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(u) ? u : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : G.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, l, i, o, c, a, f, h, k, S, I, D;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : a.resources) ?? {}, d = ((h = (f = n.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, r = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, u = G._healthStatusFromRatio(r, d), m = Number(((D = (I = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : I.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let p;
    u === 0 ? p = 0 : u === 1 ? p = -6 : u === 2 ? p = -3 : p = m;
    const y = this._getTotalArmorSpeedPenalty();
    p += y, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var p, y, b, l, i, o, c, a, f, h, k, S, I;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((l = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : l.givenProtection) ?? 0) || 0, d = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, r = (h = (f = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : f.has) != null && h.call(f, "halfcover") ? 3 : 0, u = (I = (S = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : S.has) != null && I.call(S, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + d + r + u;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var l;
      return ((l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(r == null ? void 0 : r.value) || 0, p = Number(u == null ? void 0 : u.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + y);
  }
  _writeTotalSpeed(s = null) {
    var c, a, f, h, k, S, I, D;
    const e = s ?? this.form ?? this.element, t = (L) => {
      var C;
      return ((C = e == null ? void 0 : e.querySelector) == null ? void 0 : C.call(e, L)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${L}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), u = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((f = (a = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : a.has) != null && f.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((k = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : k.resources) ?? {}, p = ((I = (S = m.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : I.value) ?? 0, y = ((D = m.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (G._healthStatusFromRatio(y, p) === 0) {
      n.textContent = "0";
      return;
    }
    const l = Number(r == null ? void 0 : r.value) || 0, i = Number(u == null ? void 0 : u.value) || 0, o = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(l + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, u, m, p;
    const e = G.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((m = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return G._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, m, p, y;
    const t = G.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return G._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var et, tt, st, it, nt, at, rt, ot, ct, $e, lt, ut, xe, v, P, E, U, oe, V, ye, me, ce, _e, Re, Me, _t, Dt, Ot, Ct, dt, We, Ut, Bt, Gt, Wt, Vt, Yt, Xt, Qt, Zt, Jt, es, ts, ss, is;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((st = (tt = (et = this.actor.system) == null ? void 0 : et.resources) == null ? void 0 : tt.stress) == null ? void 0 : st.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of u) {
      const O = ((it = d[g]) == null ? void 0 : it.value) ?? 0, _ = r[g] ?? 0;
      e.computedHealthStatus[g] = G._healthStatusFromRatio(_, O);
    }
    const m = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = m || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, l = Number(((at = (nt = this.actor.system) == null ? void 0 : nt.combat) == null ? void 0 : at.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = l;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((ot = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : ot.givenProtection) ?? 0) || 0, a = (lt = ($e = (ct = this.actor) == null ? void 0 : ct.statuses) == null ? void 0 : $e.has) != null && lt.call($e, "lookaround") ? 1 : 0, f = (v = (xe = (ut = this.actor) == null ? void 0 : ut.statuses) == null ? void 0 : xe.has) != null && v.call(xe, "halfcover") ? 3 : 0, h = (U = (E = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : E.has) != null && U.call(E, "threequarteredcover") ? 6 : 0, k = c + this._getTotalArmorProtectionBonus() + a + f + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const I = Number(S.givenSpeed);
    let D = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(I) ? I : 0);
    b === 0 && (D = 0), (me = (ye = (V = this.actor) == null ? void 0 : V.statuses) == null ? void 0 : ye.has) != null && me.call(ye, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const L = G.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(L)) {
      const _ = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = _, e.skillDisabled[g] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const C = this.actor.system.weapons ?? {}, N = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], x = (C.slotOrder ?? "").trim(), A = x ? x.split(/\s*,\s*/).filter((g) => N.includes(g)) : [], z = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, H = z && typeof z == "object" && !Array.isArray(z) ? z : {}, B = (((Me = H.slot1) == null ? void 0 : Me.itemId) ?? "").trim(), W = (((_t = H.slot2) == null ? void 0 : _t.itemId) ?? "").trim(), ie = (((Dt = H.slot3) == null ? void 0 : Dt.itemId) ?? "").trim(), M = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const _ = typeof g.sort == "number" ? g.sort : 0, F = typeof O.sort == "number" ? O.sort : 0;
      return _ - F;
    }).map((g) => {
      var De, je, ze, Ce, qe, mt;
      const O = g.type === "Fegyver", _ = g.type === "MikroChip";
      let F = 0, R = "", J = null;
      for (let Ve = 0; Ve < A.length; Ve++) {
        const pt = A[Ve];
        if ((((De = C[pt]) == null ? void 0 : De.itemId) ?? "") === g.id) {
          F = Ve + 1, R = ((je = C[pt]) == null ? void 0 : je.bonus) ?? "", J = pt;
          break;
        }
      }
      let Y = null;
      _ && (B === g.id ? Y = "slot1" : W === g.id ? Y = "slot2" : ie === g.id && (Y = "slot3"));
      const Ke = O && ((ze = g.system) != null && ze.damage) ? g.system.damage : "", le = O && typeof ((Ce = g.system) == null ? void 0 : Ce.range) == "string" ? (g.system.range || "").trim() : "", pe = J ? Number((qe = C[J]) == null ? void 0 : qe.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: F,
        slotBonus: R,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: pe,
        quantity: Number(((mt = g.system) == null ? void 0 : mt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const Q = (((Ot = this.actor.items) == null ? void 0 : Ot.contents) ?? []).filter((g) => g.type === "Fegyver"), ae = Q.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = ae;
    const Se = "— Nincs fegyver —", fe = A.filter((g) => {
      const _ = ((C[g] ?? {}).itemId ?? "").trim();
      return _ ? !!Q.find((R) => R.id === _) : !1;
    });
    e.weaponSlots = fe.map((g, O) => {
      const _ = C[g] ?? {}, F = (_.itemId ?? "").trim(), R = ae.find((pe) => pe.id === F), J = Q.find((pe) => pe.id === F), Y = (J == null ? void 0 : J.system) ?? {}, Ke = Y.size === "thrown", le = (typeof Y.range == "string" ? (Y.range || "").trim() : "") || "—";
      return {
        slotKey: g,
        itemId: F,
        slotNum: O + 1,
        displayName: (R == null ? void 0 : R.name) || _.name || Se,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? "",
        isThrown: Ke,
        rangeStr: le
      };
    });
    const Ie = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, re = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = Q.map((g) => {
      var ns, as, rs;
      const O = g.id;
      let _ = null, F = {};
      for (const Lt of A)
        if ((((ns = C[Lt]) == null ? void 0 : ns.itemId) ?? "").trim() === O) {
          _ = Lt, F = C[Lt] ?? {};
          break;
        }
      const R = !!_, J = ((as = g.system) == null ? void 0 : as.equipped) !== void 0 && ((rs = g.system) == null ? void 0 : rs.equipped) !== null ? !!g.system.equipped : R, Y = (g == null ? void 0 : g.system) ?? {}, Ke = typeof Y.range == "string" ? (Y.range || "").trim() : "", le = Y.type ?? "", pe = (Ie[le] ?? le) || "—", De = Y.size ?? "", je = (re[De] ?? De) || "", ze = [pe, je].filter(Boolean).join(", ") || pe || "—", Ce = le === "projectile" || De === "thrown", qe = Y.quantity, mt = qe != null ? String(qe).trim() : "1", Ve = String(F.bonus ?? "").trim(), pt = String(Y.bonus ?? "").trim(), $s = Ve || pt || "0";
      return {
        slotKey: _ ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? Se,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: $s,
        damage: F.damage ?? Y.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: pe,
        typeAndSize: ze,
        quantity: mt,
        quantityDisplay: Ce ? mt : "—",
        isProjectile: Ce,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const ue = (((Ct = this.actor.items) == null ? void 0 : Ct.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = ue.map((g) => {
      var F, R;
      const O = (g == null ? void 0 : g.system) ?? {}, _ = ((F = g.system) == null ? void 0 : F.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: ei((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const Le = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Le.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, _ = (O.description ?? "").trim(), F = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", R = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: F
      };
    });
    const He = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = He.map((g) => {
      const _ = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), F = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: F
      };
    });
    const gt = (((Ut = this.actor.items) == null ? void 0 : Ut.contents) ?? []).filter((g) => g.type === "MikroChip"), ne = gt.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ye = "— Nincs Mikro-Chip —", Te = ["slot1", "slot2", "slot3"], Ue = (g) => {
      var _, F, R;
      const O = [];
      return g !== 1 && O.push((((_ = H.slot1) == null ? void 0 : _.itemId) ?? "").trim()), g !== 2 && O.push((((F = H.slot2) == null ? void 0 : F.itemId) ?? "").trim()), g !== 3 && O.push((((R = H.slot3) == null ? void 0 : R.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((g) => !Ue(1).includes(g.id)), e.microchipItemsSlot2 = ne.filter((g) => !Ue(2).includes(g.id)), e.microchipItemsSlot3 = ne.filter((g) => !Ue(3).includes(g.id)), e.microchipSlots = Te.map((g) => {
      const O = H[g] ?? {}, _ = (O.itemId ?? "").trim(), F = gt.find((R) => R.id === _);
      return {
        slotKey: g,
        itemId: _,
        displayName: (F == null ? void 0 : F.name) || O.name || Ye,
        img: (F == null ? void 0 : F.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, _ = H[O] ?? {}, F = (_.itemId ?? "").trim(), R = ne.find((J) => J.id === F);
      e[`microchip${g}ItemId`] = F, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || _.name || Ye, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = gt.map((g) => {
      var De, je, ze, Ce;
      const O = g.id;
      let _ = null;
      for (const qe of Te)
        if ((((De = H[qe]) == null ? void 0 : De.itemId) ?? "").trim() === O) {
          _ = qe;
          break;
        }
      const F = !!_, R = ((je = g == null ? void 0 : g.system) == null ? void 0 : je.abilityType) ?? "", J = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", Y = R === "active", Ke = Number((ze = g == null ? void 0 : g.system) == null ? void 0 : ze.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, le = (((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.description) ?? "").trim(), pe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: J,
        description: pe,
        kp: Ke,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: F
      };
    });
    const ht = (((Bt = e.weaponsTable) == null ? void 0 : Bt.length) ?? 0) > 0 || (((Gt = e.armorTable) == null ? void 0 : Gt.length) ?? 0) > 0 || (((Wt = e.microchipsTable) == null ? void 0 : Wt.length) ?? 0) > 0 || (((Vt = e.itemsTable) == null ? void 0 : Vt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !ht;
    const bt = this.actor.system.abilities ?? {}, Ht = (((Yt = this.actor.items) == null ? void 0 : Yt.contents) ?? []).map((g) => {
      var O, _, F;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((_ = g.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((F = g.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), Be = new Map(Ht.map((g) => [g.id, g])), vt = "— Nincs képesség —", Xe = (g) => {
      const O = bt[g] ?? {}, _ = (O.itemId ?? "").trim(), F = _ ? Be.get(_) : null, R = (F == null ? void 0 : F.description) ?? "", J = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: _,
        displayName: (F == null ? void 0 : F.name) || O.name || vt,
        img: (F == null ? void 0 : F.img) || "",
        description: R,
        kp: J
      };
    };
    e.abilityFajiSlot = Xe("faji"), e.abilityHatterSlot = Xe("hatter");
    const Qe = (g) => {
      const O = bt[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Ze = (g) => g.map((O) => {
      const _ = Be.get(O);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ze(Qe("passive")), e.abilityActiveList = Ze(Qe("active"));
    const kt = ((Xt = e.system) == null ? void 0 : Xt.resources) ?? {}, Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Fe = (Zt = (Qt = e.system) == null ? void 0 : Qt.combat) == null ? void 0 : Zt.initiativeResult, de = typeof Fe == "number" ? Fe : -1, wt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ae = (es = (Jt = e.system) == null ? void 0 : Jt.combat) == null ? void 0 : es.initiativeRanges, Pe = Array.isArray(Ae) ? Ae.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Oe = (Pe.length > 0 ? Pe : wt).slice().sort((g, O) => g.min - O.min), Ee = Pe.map((g) => g.min), St = Ee.length ? Math.min(...Ee) : 0, It = Ee.length ? Math.max(...Ee) : 0;
    e.initiativeRanges = Pe.map((g) => ({ ...g, isFirst: g.min === St, isLast: g.min === It }));
    let Je = 0;
    if (typeof de == "number" && de >= 0 && Oe.length > 0) {
      const g = Oe[0], O = Oe[Oe.length - 1];
      let _ = null;
      de <= g.max ? _ = g : de >= O.min ? _ = O : _ = Oe.find((F) => de >= F.min && de <= F.max), _ && (Je = _.kp);
    }
    e.kpDots = Ge.map((g, O) => {
      const _ = O + 1, F = !!Number(kt[g]), R = _ <= Je;
      return { index: _, used: F, usable: R };
    });
    const Tt = !!((ss = (ts = game.combat) == null ? void 0 : ts.combatants) != null && ss.some((g) => {
      var O;
      return ((O = g.actor) == null ? void 0 : O.type) === "Karakter";
    }));
    return e.showHarcSection = Tt, e.canEditInitiative = !!((is = game.user) != null && is.isGM), e.showInitiativeResult = typeof Fe == "number", e.initiativeResult = e.showInitiativeResult ? Fe : "", e;
  }
  _attachFrameListeners(s) {
    var b, l;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DovlpneE.mjs");
      a(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, f, h;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let c = (o.dataset.itemId ?? "").trim();
      if (!c) {
        const k = (o.dataset.slot ?? "").trim();
        if (!k) return;
        c = (((((f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((h = o.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-DovlpneE.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, k;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, c = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6) return;
      const a = `system.resources.kpDot${c}`, f = !!Number((k = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : k[`kpDot${c}`]);
      await this.actor.update({ [a]: f ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var a;
      const o = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const c = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
    const r = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', r), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var a, f, h;
      i.preventDefault(), i.stopPropagation();
      const o = ((h = (f = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (k) => {
          k && this.actor.update({ img: k });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget, c = o.dataset.skill, a = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: f } = await import("./roll-sheet-DovlpneE.mjs");
      f(this.actor, c, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, I, D, L, C, N, x;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), a = c == null ? void 0 : c.dataset.slot;
      if (!a) return;
      const h = (((I = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[a]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!h) return;
      const k = ((L = (D = this.actor.items).get) == null ? void 0 : L.call(D, h)) ?? ((N = (C = this.actor.items.contents) == null ? void 0 : C.find) == null ? void 0 : N.call(C, (A) => A.id === h));
      (x = k == null ? void 0 : k.sheet) == null || x.render(!0);
    });
    const u = (i, o) => {
      var f;
      const c = i.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = a.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), u(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a) return;
      let f = Number(o.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await a.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor, f = a.items.get(c);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const k = a.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], L = D.find((C) => {
          var N;
          return (((N = k[C]) == null ? void 0 : N.itemId) ?? "").trim() === c;
        });
        if (L) {
          const C = D.filter((N) => N !== L);
          h["system.weapons.slotOrder"] = C.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var L, C;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((N) => k.includes(N)) : [], I = S.find((N) => {
        var x;
        return (((x = f[N]) == null ? void 0 : x.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let N = S.find((A) => {
          var z;
          return !((z = f[A]) != null && z.itemId);
        });
        const x = new Set(S);
        if (!N) {
          const A = k.find((z) => !x.has(z));
          if (!A) return;
          N = A, S.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${N}.itemId`]: c,
          [`system.weapons.${N}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${N}.damage`]: ((L = a == null ? void 0 : a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${N}.bonus`]: ((C = a == null ? void 0 : a.system) == null ? void 0 : C.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (I) {
        const N = S.filter((x) => x !== I);
        await this.actor.update({
          "system.weapons.slotOrder": N.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), a = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var N;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), a = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), f = a == null ? void 0 : a.dataset.slot;
      if (!f) return;
      const h = (o.dataset.itemId ?? "").trim(), k = (o.dataset.itemName ?? ((N = o.textContent) == null ? void 0 : N.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (o.dataset.itemImg ?? "").trim(), I = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = k);
      let D = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", a == null || a.insertBefore(D, I)), D.src = S, D.style.display = "") : D && D.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, C = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (C[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(C);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, S;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "MikroChip") return;
      const a = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((I) => {
        var D;
        return (((D = a[I]) == null ? void 0 : D.itemId) ?? "").trim() === o;
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
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, c));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, c)), o.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, c)), o.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((k = a[o]) == null ? void 0 : k.items) ? a[o].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var f;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      (f = a == null ? void 0 : a.sheet) == null || f.render(!0);
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
      const f = (o.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var L, C;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((N) => k.includes(N)) : [], I = S.find((N) => {
        var x;
        return (((x = f[N]) == null ? void 0 : x.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let N = S.find((A) => {
          var z;
          return !((z = f[A]) != null && z.itemId);
        });
        const x = new Set(S);
        if (!N) {
          const A = k.find((z) => !x.has(z));
          if (!A) return;
          N = A, S.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${N}.itemId`]: c,
          [`system.weapons.${N}.name`]: a.name ?? "",
          [`system.weapons.${N}.damage`]: ((L = a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${N}.bonus`]: ((C = a.system) == null ? void 0 : C.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (I) {
        const N = S.filter((x) => x !== I);
        await this.actor.update({
          "system.weapons.slotOrder": N.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor, f = a.items.get(c), h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const k = a.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], L = D.find((C) => {
          var N;
          return (((N = k[C]) == null ? void 0 : N.itemId) ?? "").trim() === c;
        });
        if (L) {
          const C = D.filter((N) => N !== L);
          h["system.weapons.slotOrder"] = C.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
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
      const f = (o.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const m = this, p = (i) => {
      var a, f, h, k;
      if (!i) return;
      const o = m._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((f = (a = o.system) == null ? void 0 : a.resources) == null ? void 0 : f.currentHealth) != null || ((k = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : k.hitLocations) != null;
      m.actor.update(o).then(() => {
        c && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (i) => {
      var o, c, a;
      return i && (((c = (o = m.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || m.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const a = o.form;
      if (!y(a)) return;
      const f = i.relatedTarget;
      f && (a.contains(f) || m.id && ((h = f.closest) != null && h.call(f, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(a));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, m, p;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((p = n[y]) == null ? void 0 : p.value) ?? 0, l = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, G._healthStatusFromRatio(l, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, r, u, m, p, y, b, l, i, o;
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
          let f = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const h = (((r = a.system) == null ? void 0 : r.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const S = h === "active" ? "active" : "passive", I = Array.isArray((u = k[S]) == null ? void 0 : u.items) ? k[S].items.slice() : Array.isArray(k[S]) ? k[S].slice() : [];
          I.includes(f) || I.push(f), await this.actor.update({ [`system.abilities.${S}.items`]: I });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
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
          const f = this.actor, h = ((p = a.parent) == null ? void 0 : p.id) !== f.id;
          let k = a.id;
          if (h) {
            const S = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            k = ((y = (await f.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : y.id) ?? k;
          }
          if (h) {
            const S = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, I = (S.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = I ? I.split(/\s*,\s*/).filter((N) => D.includes(N)) : [], C = L.filter((N) => {
              var x;
              return (((x = S[N]) == null ? void 0 : x.itemId) ?? "").trim() === k;
            });
            if (C.length > 0) {
              const x = {
                "system.weapons.slotOrder": L.filter((A) => !C.includes(A)).join(",")
              };
              for (const A of C)
                x[`system.weapons.${A}.itemId`] = "", x[`system.weapons.${A}.name`] = "", x[`system.weapons.${A}.damage`] = "", x[`system.weapons.${A}.bonus`] = "";
              await f.update(x);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const f = this.actor;
          if (((l = a.parent) == null ? void 0 : l.id) !== f.id) {
            const h = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const f = this.actor;
          ((i = a.parent) == null ? void 0 : i.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const f = this.actor;
          ((o = a.parent) == null ? void 0 : o.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, r, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, m, p, y, b, l;
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
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const r = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((b = d.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((l = d.system) == null ? void 0 : l.bonus) ?? ""
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
    var p, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, l) => {
      const i = typeof b.sort == "number" ? b.sort : 0, o = typeof l.sort == "number" ? l.sort : 0;
      return i - o;
    }).map((b) => b.id), r = d.indexOf(t), u = d.indexOf(e);
    if (r === -1 || u === -1) return;
    d.splice(r, 1), d.splice(u, 0, t);
    const m = d.map((b, l) => ({
      _id: b,
      sort: (l + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(s) {
    var n, d, r;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
    var m, p, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const l = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        l > 0 && (d = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, b, l;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
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
    var r, u, m;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
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
    var m, p, y, b;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, u = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, r, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, m, p, y, b;
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
    let r = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const r = this._getSkillHealthStatus(s);
    r === 1 ? d -= 6 : r === 2 && (d -= 3);
    const m = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(m);
    await p.evaluate({ async: !0 });
    const { resultType: y, label: b } = Pt(p), l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: b } },
      rollMode: l
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
    var r;
    const s = Number(((r = this.actor.system.skills) == null ? void 0 : r.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var S, I;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((D) => D.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((D) => D.id === t.itemId) ?? null);
    const u = r && r.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, p = ((S = r == null ? void 0 : r.system) == null ? void 0 : S.type) || "kinetic", y = (((I = r == null ? void 0 : r.system) == null ? void 0 : I.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", l = Number(n[b] || 0) || 0, i = m + l, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(c);
    await a.evaluate({ async: !0 });
    const { resultType: f, label: h } = Pt(a), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, y, b, l, i, o, c, a, f;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (o = ui.notifications) == null ? void 0 : o.warn) == null || f.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
X(G, "PARTS", foundry.utils.mergeObject(
  j(G, G, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(G, G, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((fs = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ys = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ys.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((hs = (gs = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : gs.window) == null ? void 0 : hs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
X(G, "BODY_PART_BY_SKILL", {
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
let yt = G;
function ti(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var bs, vs, ks, ws;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, r, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const r = await super.render(s, e), u = this.element, m = this.form ?? this.element, p = d.scrollState, y = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", l = () => {
      var i, o;
      if (this._applyScrollState(u, p), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const c = ((i = m.querySelector) == null ? void 0 : i.call(m, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (o = m.querySelector) == null ? void 0 : o.call(m, `[name="${CSS.escape(y.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = y.selectionStart ?? 0, c.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(u, p);
    };
    return (b || y) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), r;
  }
  async _prepareContext(s) {
    var Xe, Qe, Ze, kt, Ge, Fe, de, wt, Ae, Pe, Nt, Oe, Ee, St, It, Je, Tt, et, tt, st, it, nt, at, rt, ot, ct, $e, lt, ut, xe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Xe = this.actor) == null ? void 0 : Xe.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ze = (Qe = e.system) == null ? void 0 : Qe.identity) == null ? void 0 : Ze.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((kt = e.system) == null ? void 0 : kt.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, r = (Fe = (Ge = t == null ? void 0 : t.statuses) == null ? void 0 : Ge.has) != null && Fe.call(Ge, "lookaround") ? 1 : 0, u = (wt = (de = t == null ? void 0 : t.statuses) == null ? void 0 : de.has) != null && wt.call(de, "halfcover") ? 3 : 0, m = (Pe = (Ae = t == null ? void 0 : t.statuses) == null ? void 0 : Ae.has) != null && Pe.call(Ae, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = d + r + u + m;
    const p = ((Nt = t == null ? void 0 : t.items) == null ? void 0 : Nt.contents) ?? [], y = ((Oe = t == null ? void 0 : t.system) == null ? void 0 : Oe.weapons) ?? {}, b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (y.slotOrder ?? "").trim(), i = l ? l.split(/\s*,\s*/).filter((v) => b.includes(v)) : [], o = p.filter((v) => v.type === "Fegyver"), c = o.map((v) => ({ id: v.id, name: v.name, img: v.img })), a = "— Nincs fegyver —", f = i.length > 0 ? i : b, h = b.filter((v) => !f.includes(v)), k = [...f, ...h], S = k.filter((v) => {
      var E;
      const P = (((E = y[v]) == null ? void 0 : E.itemId) ?? "").trim();
      return P && o.some((U) => U.id === P);
    });
    e.weaponSlots = S.map((v) => {
      const P = y[v] ?? {}, E = (P.itemId ?? "").trim(), U = c.find((ce) => ce.id === E), oe = o.find((ce) => ce.id === E), V = (oe == null ? void 0 : oe.system) ?? {}, ye = V.size === "thrown", me = (typeof V.range == "string" ? (V.range || "").trim() : "") || "—";
      return {
        slotKey: v,
        itemId: E,
        displayName: (U == null ? void 0 : U.name) || P.name || a,
        img: (U == null ? void 0 : U.img) || "",
        isThrown: ye,
        rangeStr: me
      };
    });
    const I = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((v) => {
      var dt;
      const P = v.id;
      let E = null, U = {};
      for (const We of k)
        if ((((dt = y[We]) == null ? void 0 : dt.itemId) ?? "").trim() === P) {
          E = We, U = y[We] ?? {};
          break;
        }
      const oe = !!E, V = (v == null ? void 0 : v.system) ?? {}, ye = typeof V.range == "string" ? (V.range || "").trim() : "", me = V.type ?? "", ce = (I[me] ?? me) || "—", _e = V.size ?? "", Re = (D[_e] ?? _e) || "", Me = [ce, Re].filter(Boolean).join(", ") || ce || "—", _t = me === "projectile" || _e === "thrown", Dt = V.quantity != null ? String(V.quantity).trim() : "1", Ot = String(V.bonus ?? U.bonus ?? "").trim() || "0", Ct = (V.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: P,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? a,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: Ot,
        damage: Ct,
        rangeStr: ye || "—",
        typeAndSize: Me,
        quantity: Dt,
        isProjectile: _t,
        equipped: oe,
        special: (V.special ?? "").trim() || "—"
      };
    });
    const L = p.filter((v) => v.type === "Pancel");
    e.armorTable = L.map((v) => {
      var U;
      const P = (v == null ? void 0 : v.system) ?? {}, E = ((U = v.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: ti((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const C = ((St = (Ee = t == null ? void 0 : t.system) == null ? void 0 : Ee.gear) == null ? void 0 : St.microchips) ?? {}, N = ["slot1", "slot2", "slot3"], x = p.filter((v) => v.type === "MikroChip");
    e.microchipsTable = x.map((v) => {
      var me, ce, _e, Re;
      const P = v.id;
      let E = null;
      for (const Me of N)
        if ((((me = C[Me]) == null ? void 0 : me.itemId) ?? "").trim() === P) {
          E = Me;
          break;
        }
      const U = ((ce = v == null ? void 0 : v.system) == null ? void 0 : ce.abilityType) ?? "", oe = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", V = (((_e = v == null ? void 0 : v.system) == null ? void 0 : _e.description) ?? "").trim(), ye = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: oe,
        description: ye,
        kp: Number((Re = v == null ? void 0 : v.system) == null ? void 0 : Re.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const A = p.filter((v) => v.type === "Targy");
    e.itemsTable = A.map((v) => {
      const P = (v == null ? void 0 : v.system) ?? {}, E = (P.description ?? "").trim(), U = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: U
      };
    });
    const z = p.filter((v) => v.type === "Egyeb");
    e.egyebList = z.map((v) => {
      const E = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), U = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: U
      };
    });
    const H = (((It = e.weaponsTable) == null ? void 0 : It.length) ?? 0) > 0 || (((Je = e.armorTable) == null ? void 0 : Je.length) ?? 0) > 0 || (((Tt = e.microchipsTable) == null ? void 0 : Tt.length) ?? 0) > 0 || (((et = e.itemsTable) == null ? void 0 : et.length) ?? 0) > 0 || (((tt = e.egyebList) == null ? void 0 : tt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !H;
    const B = ((st = t == null ? void 0 : t.system) == null ? void 0 : st.abilities) ?? {}, W = p.filter((v) => v.type === "Kepesseg" || v.type === "ability").map((v) => {
      var P, E;
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        description: ((P = v.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((E = v.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), ie = new Map(W.map((v) => [v.id, v])), Z = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Z, e.abilityHatterSlot = Z;
    const M = (v) => {
      const P = B[v];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, Q = (v) => (v || []).map((P) => {
      const E = ie.get(P);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Q(M("passive")), e.abilityActiveList = Q(M("active"));
    const ae = t == null ? void 0 : t.id, Se = !!((nt = (it = game.combat) == null ? void 0 : it.combatants) != null && nt.some(
      (v) => {
        var P;
        return (((P = v.actor) == null ? void 0 : P.id) ?? v.actorId) === ae;
      }
    ));
    e.showHarcSection = Se;
    const fe = ((at = e.system) == null ? void 0 : at.resources) ?? {}, Ie = (ot = (rt = e.system) == null ? void 0 : rt.combat) == null ? void 0 : ot.initiativeResult, re = typeof Ie == "number" ? Ie : -1, ue = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Le = ($e = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : $e.initiativeRanges, He = Array.isArray(Le) ? Le.map((v) => ({ min: Number(v.min) ?? 0, max: Number(v.max) ?? 0, kp: Math.min(10, Math.max(0, Number(v.kp) ?? 0)) })) : [], ne = (He.length > 0 ? He : ue).slice().sort((v, P) => v.min - P.min), Ye = 3;
    let Te = He.length > 0 ? He : [];
    Te.length < Ye && (Te = [...Te, ...Array(Ye - Te.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = Te.map((v, P) => ({
      ...v,
      isFirst: P === 0,
      isLast: P === Te.length - 1
    }));
    let Ue = 0;
    if (typeof re == "number" && re >= 0 && ne.length > 0) {
      const v = ne[0], P = ne[ne.length - 1];
      let E = null;
      re <= v.max ? E = v : re >= P.min ? E = P : E = ne.find((U) => re >= U.min && re <= U.max), E && (Ue = E.kp);
    }
    const ht = ne.length > 0 ? ne[ne.length - 1] : null, bt = Math.min(10, ht ? ht.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, bt)).map((v, P) => {
      const E = P + 1, U = !!Number(fe[v]), oe = E <= Ue;
      return { index: E, used: U, usable: oe };
    }), vt = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, vt), e.kpDotsRow2 = Be.slice(vt), e.canEditInitiative = !!((lt = game.user) != null && lt.isGM), e.showInitiativeResult = typeof Ie == "number", e.initiativeResult = e.showInitiativeResult ? Ie : "", e.speedUnitForSelect = ((xe = (ut = e.system) == null ? void 0 : ut.combat) == null ? void 0 : xe.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var p, y, b;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (l) => {
      var c, a, f;
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const i = ((f = (a = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (l) => {
      var c, a, f;
      l.preventDefault();
      const i = (a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (f = o == null ? void 0 : o.sheet) == null || f.render(!0);
    });
    const n = (l) => {
      var c, a;
      const i = (c = l == null ? void 0 : l.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (a = o == null ? void 0 : o.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (l) => {
      l.preventDefault(), n(l.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (l) => {
      var a, f, h, k;
      l.preventDefault();
      const i = (f = (a = l.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : f.call(a, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (k = c == null ? void 0 : c.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (l) => {
      var a;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, o = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DovlpneE.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (l) => {
      var c, a, f, h, k;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (o = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (l) => {
      if (l.preventDefault(), l.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-DovlpneE.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (l) => {
      var a, f;
      l.preventDefault(), l.stopPropagation();
      const i = l.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const c = !!Number((f = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : f[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (l) => {
      var f, h;
      l.preventDefault();
      const i = l.currentTarget, o = (((f = i == null ? void 0 : i.dataset) == null ? void 0 : f.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-DovlpneE.mjs");
      a(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (l) => {
      var o, c;
      l.preventDefault();
      const i = (c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (l) => {
      var c, a;
      l.preventDefault();
      const i = (((a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (l) => {
      var h, k, S, I, D, L;
      if (l.preventDefault(), !l.altKey) return;
      const i = (k = (h = l.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.area, o = (I = (S = l.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : I.itemId;
      if (!i || !o || !this.actor) return;
      const c = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, f = (Array.isArray((L = c[i]) == null ? void 0 : L.items) ? c[i].items.slice() : []).filter((C) => C !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (l) => {
      var o, c;
      if (l.preventDefault(), !l.altKey) return;
      const i = (c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (l) => {
      var h, k;
      if (l.preventDefault(), !l.altKey) return;
      const i = l.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, a = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), f = {};
      a && (f[`system.weapons.${a}.itemId`] = "", f[`system.weapons.${a}.name`] = "", f[`system.weapons.${a}.damage`] = "", f[`system.weapons.${a}.bonus`] = ""), Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (l) => {
      var o, c;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((c = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (l) => {
      var f, h, k, S;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((h = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((I) => {
        var D;
        return (((D = o[I]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (l) => {
      var c, a;
      if (l.preventDefault(), !l.altKey) return;
      const i = (((a = (c = l.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((l) => {
      var i;
      (((i = l.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (l.draggable = !0);
    }), t.on("dragstart", d, (l) => {
      var f, h, k;
      const i = l.currentTarget, o = (h = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const a = c.uuid;
      l.dataTransfer && (l.dataTransfer.setData("text/plain", a), l.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), l.dataTransfer.effectAllowed = "copyMove"), typeof ((k = l.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && l.dataTransfer.setDragImage(i, 0, 0);
    });
    const r = this, u = (l) => {
      if (!l) return;
      const i = r._getFormDataForUpdate(l);
      Object.keys(i).length !== 0 && r.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, m = (l) => {
      var i, o, c;
      return l && (((o = (i = r.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, l)) || r.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (l) => {
      var f;
      const i = l.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = i.form;
      if (!m(c)) return;
      const a = l.relatedTarget;
      a && (c.contains(a) || r.id && ((f = a.closest) != null && f.call(a, `#${CSS.escape(r.id)}`))) || u(c);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (l, i, o) => {
      var c;
      r.actor && ((c = l == null ? void 0 : l.parent) == null ? void 0 : c.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (l, i, o) => {
      var c;
      r.actor && ((c = l == null ? void 0 : l.parent) == null ? void 0 : c.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
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
    var I, D, L, C, N;
    const e = this.actor;
    if (!e) return;
    const n = (((I = e.system) == null ? void 0 : I.weapons) ?? {})[s] ?? {}, d = ((D = e.system) == null ? void 0 : D.skills) ?? {}, r = ((L = e.items) == null ? void 0 : L.filter((x) => x.type === "Fegyver")) ?? [];
    let u = null;
    n.itemId && (u = r.find((x) => x.id === n.itemId) ?? null);
    const m = u && u.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, y = ((C = u == null ? void 0 : u.system) == null ? void 0 : C.type) || "kinetic", b = (((N = u == null ? void 0 : u.system) == null ? void 0 : N.skillKey) ?? "").trim(), l = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[l] || 0) || 0, o = p + i, a = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, f = new Roll(a);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: k } = Pt(f), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: k } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, y, b, l, i, o, c, a, f;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((l = n.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (o = ui.notifications) == null ? void 0 : o.warn) == null || f.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var y, b, l, i, o, c, a, f, h, k, S, I, D, L, C, N, x;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const n = ((A) => {
      var H;
      if (!A) return null;
      const z = A.uuid ?? A.documentUuid ?? ((H = A.data) == null ? void 0 : H.uuid) ?? (typeof A == "string" ? A : null);
      if (z) return z;
      if (typeof A == "object") {
        for (const B of Object.values(A))
          if (typeof B == "string" && B.includes(".") && B.startsWith("Item.")) return B;
      }
      return null;
    })(e);
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (l = super._onDropItem) == null ? void 0 : l.call(this, s, e);
    if (d.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let A = d.id;
      if (((c = d.parent) == null ? void 0 : c.id) !== r.id) {
        const ie = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        A = ((a = (await r.createEmbeddedDocuments("Item", [ie]))[0]) == null ? void 0 : a.id) ?? A;
      }
      const z = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), H = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, B = z === "active" ? "active" : "passive", W = Array.isArray((k = H[B]) == null ? void 0 : k.items) ? H[B].items.slice() : Array.isArray(H[B]) ? H[B].slice() : [];
      W.includes(A) || W.push(A), await r.update({ [`system.abilities.${B}.items`]: W }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = d.parent) == null ? void 0 : S.id) === r.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (I = (await r.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : I.id;
    if (d.type === "Fegyver" && p) {
      const A = ((D = r.system) == null ? void 0 : D.weapons) ?? {}, z = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], H = (A.slotOrder ?? "").trim(), B = H ? H.split(/\s*,\s*/).filter((Z) => z.includes(Z)) : [];
      let W = z.find((Z) => {
        var M;
        return !(((M = A[Z]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      W || (W = z.find((Z) => !B.includes(Z)) ?? "slot1");
      const ie = B.includes(W) ? B : [...B, W].filter((Z) => z.includes(Z));
      await r.update({
        "system.weapons.slotOrder": ie.join(","),
        [`system.weapons.${W}.itemId`]: p,
        [`system.weapons.${W}.name`]: d.name ?? "",
        [`system.weapons.${W}.damage`]: ((L = d.system) == null ? void 0 : L.damage) ?? "",
        [`system.weapons.${W}.bonus`]: ((C = d.system) == null ? void 0 : C.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const A = ((x = (N = r.system) == null ? void 0 : N.gear) == null ? void 0 : x.microchips) ?? {}, H = ["slot1", "slot2", "slot3"].find((B) => {
        var W;
        return !(((W = A[B]) == null ? void 0 : W.itemId) ?? "").trim();
      });
      H && await r.update({
        [`system.gear.microchips.${H}.itemId`]: p,
        [`system.gear.microchips.${H}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, l, i, o, c;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((l = e.system) == null ? void 0 : l.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${u}
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
    var m, p, y, b, l, i;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const o = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((l = e.system) == null ? void 0 : l.replaceCost) ?? 0) || 0;
        c > 0 && (d = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
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
        const r = (n.value ?? "").trim();
        if (r === "") continue;
        d = Number(r) || 0;
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
X(te, "PARTS", foundry.utils.mergeObject(
  j(te, te, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(te, te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((bs = j(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : bs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vs = j(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : vs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ws = (ks = j(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) == null ? void 0 : ws.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Et = te;
var Ss, Is, Ts, _s;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, d, r, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const a = document.activeElement, f = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      f && h && (u.focus = {
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
    const p = this.element, y = this.form ?? this.element, b = u.scrollState, l = u.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var a, f;
      if (this._applyScrollState(p, b), (l == null ? void 0 : l.name) != null || (l == null ? void 0 : l.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, l.id ? `#${CSS.escape(l.id)}` : null)) ?? (l.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(l.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = l.selectionStart ?? 0, h.selectionEnd = l.selectionEnd ?? l.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || l) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (p) => {
      var y;
      return ((y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, p)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${p}`) : null);
    }, n = t(".jarmu-total-defense-effective"), d = t('input[name="system.combat.defense"]'), r = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const u = Number(d == null ? void 0 : d.value) || 0, m = Number(r == null ? void 0 : r.value) || 0;
    n.textContent = String(u + m);
  }
  async _prepareContext(s) {
    var n, d, r;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((n = e.system) == null ? void 0 : n.combat) ?? {};
    return e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((r = (d = e.system) == null ? void 0 : d.identity) == null ? void 0 : r.size) ?? "").trim() || "Közepes", e;
  }
  _attachFrameListeners(s) {
    var u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (m) => {
      var b, l, i;
      m.preventDefault(), m.stopPropagation();
      const p = ((i = (l = (b = foundry.applications) == null ? void 0 : b.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
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
      Object.keys(p).length !== 0 && n.actor.update(p).catch((y) => console.warn("VoidJarmuSheet save failed", y));
    }, r = (m) => {
      var p, y, b;
      return m && (((y = (p = n.element) == null ? void 0 : p.contains) == null ? void 0 : y.call(p, m)) || n.id && ((b = m.closest) == null ? void 0 : b.call(m, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (m) => {
      var i;
      const p = m.target;
      if (!p || !p.form) return;
      const y = p.tagName;
      if (y !== "INPUT" && y !== "TEXTAREA" && y !== "SELECT") return;
      const b = p.form;
      if (!r(b)) return;
      const l = m.relatedTarget;
      l && (b.contains(l) || n.id && ((i = l.closest) != null && i.call(l, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), d(b));
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
};
X(se, "PARTS", foundry.utils.mergeObject(
  j(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(se, se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ss = j(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Is = j(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Is.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ts = j(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let ps = se;
const si = [
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
var Ds;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = si, e;
  }
};
X(ge, "PARTS", foundry.utils.mergeObject(j(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ge, ge, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ds = j(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.form) ?? {}, { submitOnChange: !1 })
}));
let $t = ge;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
X(he, "PARTS", foundry.utils.mergeObject(j(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(he, he, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Os = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 })
}));
let xt = he;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
X(be, "PARTS", foundry.utils.mergeObject(j(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(be, be, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Cs = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.form) ?? {}, { submitOnChange: !1 })
}));
let Rt = be;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(u) && n(u);
    }, e._votvInput = (r) => {
      var p;
      const u = r.target;
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
X(ve, "PARTS", foundry.utils.mergeObject(j(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((qs = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : qs.form) ?? {}, { submitOnChange: !0 })
}));
let Mt = ve;
var Ns;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
X(ke, "PARTS", foundry.utils.mergeObject(j(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ns = j(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = ke;
var Ls;
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, l, i, o, c;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((l = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : l.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const u = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const n = (r) => {
      if (!r) return;
      const u = e._getFormDataForUpdate(r);
      Object.keys(u).length !== 0 && e.document.update(u).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, d = (r) => {
      var u, m, p;
      return r && (((m = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : m.call(u, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const u = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
X(we, "PARTS", foundry.utils.mergeObject(j(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ls = j(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.form) ?? {}, { submitOnChange: !1 })
}));
let jt = we;
const Fs = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function As(w) {
  return w === "Apró" ? 0.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, d, r, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Hs, CONFIG.Actor.dataModels.Npc = zt, CONFIG.Actor.dataModels.Jarmu = Bs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = cs, CONFIG.Item.dataModels.weapon = cs, CONFIG.Item.dataModels.Pancel = Vs, CONFIG.Item.dataModels.MikroChip = Ys, CONFIG.Item.dataModels.Kepesseg = ds, CONFIG.Item.dataModels.ability = ds, CONFIG.Item.dataModels.Targy = Qs, CONFIG.Item.dataModels.Egyeb = Js, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (r = CONFIG.Combat).initiative ?? (r.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
  const w = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${w}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${w}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${w}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${w}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${w}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${w}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${w}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${w}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${w}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${w}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${w}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${w}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${w}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${w}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${w}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${w}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${w}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${w}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${w}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${w}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${w}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${w}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${w}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${w}/fullcover_icon.svg` }
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", yt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Et, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", $t, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", xt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Rt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", jt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), Hooks.on("updateActor", (m, p, y, b) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const l = m.id;
    setTimeout(() => {
      var a, f, h, k;
      const i = (a = game.actors) == null ? void 0 : a.get(l);
      if (!i || i.type !== "Karakter") return;
      const o = yt.getTotalSpeedRaw(i), c = (f = i.effects) == null ? void 0 : f.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !c) {
        const S = ((k = (h = CONFIG.statusEffects) == null ? void 0 : h.find((I) => I.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, L;
          const I = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const C of I)
            ((L = C == null ? void 0 : C.document) == null ? void 0 : L.actorId) === l && typeof C.draw == "function" && C.draw();
        }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect create failed:", I));
      } else o > 0 && c && c.delete().then(() => {
        var I, D;
        const S = ((I = canvas.tokens) == null ? void 0 : I.placeables) ?? [];
        for (const L of S)
          ((D = L == null ? void 0 : L.document) == null ? void 0 : D.actorId) === l && typeof L.draw == "function" && L.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, p, y, b) => {
    var I, D, L, C, N, x, A, z, H, B, W, ie, Z;
    const l = m == null ? void 0 : m.id;
    if (!l) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((I = p == null ? void 0 : p.system) != null && I.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((L = (D = m.system) == null ? void 0 : D.combat) == null ? void 0 : L.initiativeResult), Q = Number.isFinite(M) ? M : 0, ae = game.combat;
      if (ae) {
        const Se = ((C = ae.combatants) == null ? void 0 : C.contents) ?? Array.from(ae.combatants ?? []);
        for (const fe of Se)
          if (((N = fe.actor) == null ? void 0 : N.id) === l || fe.actorId === l) {
            ae.updateEmbeddedDocuments("Combatant", [{ _id: fe.id, initiative: Q }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((x = p == null ? void 0 : p.system) != null && x.identity) && "size" in p.system.identity) {
      const M = As((z = (A = m.system) == null ? void 0 : A.identity) == null ? void 0 : z.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Q) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, Q));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], a = (H = game.actors) == null ? void 0 : H.get(l);
    a != null && a.apps && c.push(...Array.from(a.apps));
    const f = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of f)
      ((B = M.document) == null ? void 0 : B.id) !== l || ((W = M.document) == null ? void 0 : W.documentName) !== "Actor" || ((ie = M.constructor) == null ? void 0 : ie.name) !== "VoidKarakterSheet" || c.includes(M) || c.push(M);
    if (o && c.some((M) => {
      const Q = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return Q && Q.contains(i);
    })) return;
    const k = (Z = game.votv) == null ? void 0 : Z._lastKarakterSheetBlurSave, S = k && Date.now() - k.at < s ? k.appId : null;
    setTimeout(() => {
      for (const M of c)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== S && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, p, y, b) => {
    var c, a, f;
    const l = m == null ? void 0 : m.parent;
    if (!l || l.documentName !== "Actor" || l.type !== "Karakter" || m.type !== "Fegyver") return;
    const i = ((c = l.system) == null ? void 0 : c.weapons) ?? {}, o = {};
    for (const [h, k] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !S || S !== m.id || (o[`system.weapons.${h}.name`] = m.name ?? "", o[`system.weapons.${h}.damage`] = ((a = m.system) == null ? void 0 : a.damage) ?? "", o[`system.weapons.${h}.bonus`] = ((f = m.system) == null ? void 0 : f.bonus) ?? "");
    }
    Object.keys(o).length && l.update(o);
  });
});
Hooks.on("ready", () => {
  var w, s;
  document.body.addEventListener("click", async (e) => {
    var f, h, k, S, I, D, L, C, N, x, A, z, H, B, W, ie, Z, M, Q, ae, Se, fe, Ie;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (k = game.messages) == null ? void 0 : k.get(n), r = (I = (S = d == null ? void 0 : d.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : I.weapon;
    if (!r) return;
    const u = r.actorId ?? ((D = d == null ? void 0 : d.speaker) == null ? void 0 : D.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((L = game.actors) == null ? void 0 : L.get(r.actorId)) ?? ((C = game.actors) == null ? void 0 : C.get(u));
    if (m || (m = ((x = (N = game.scenes) == null ? void 0 : N.contents) == null ? void 0 : x.flatMap((ue) => {
      var Le;
      return ((Le = ue.tokens) == null ? void 0 : Le.contents) ?? [];
    }).map((ue) => ue.actor).find((ue) => ue && (ue.id === u || ue.id === r.actorId))) ?? null), !m) return;
    const p = r.itemId ? ((z = (A = m.items) == null ? void 0 : A.get) == null ? void 0 : z.call(A, r.itemId)) ?? ((W = (B = (H = m.items) == null ? void 0 : H.contents) == null ? void 0 : B.find) == null ? void 0 : W.call(B, (re) => re.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((ie = p == null ? void 0 : p.system) == null ? void 0 : ie.damage) ?? "").trim()), !y && r.slotKey && (y = (((((Z = m.system) == null ? void 0 : Z.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (Se = (M = ui.notifications) == null ? void 0 : M.warn) == null || Se.call(M, ((ae = (Q = game.i18n) == null ? void 0 : Q.localize) == null ? void 0 : ae.call(Q, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", o = r.hitLocationName || "", c = ((p == null ? void 0 : p.name) ?? (r.slotKey ? ((Ie = (((fe = m.system) == null ? void 0 : fe.weapons) ?? {})[r.slotKey]) == null ? void 0 : Ie.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    o && (a += ` (${o})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, u, m, p, y, b;
      if (!((u = (r = e.target) == null ? void 0 : r.closest) != null && u.call(r, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, r;
    const e = ((t = game.actors) == null ? void 0 : t.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of e) {
      const m = yt.getTotalSpeedRaw(u), p = (n = u.effects) == null ? void 0 : n.find((y) => y.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const y = ((r = (d = CONFIG.statusEffects) == null ? void 0 : d.find((b) => b.id === "immobilized")) == null ? void 0 : r.img) ?? "";
        await u.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: y,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: u.uuid
        }]).catch(() => {
        });
      } else m > 0 && p && await p.delete().catch(() => {
      });
    }
  })(), (w = game.user) != null && w.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: Fs },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, u, m, p, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of t)
      try {
        const i = l.prototypeToken, o = ((u = i == null ? void 0 : i.bar1) == null ? void 0 : u.attribute) ?? "", c = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (o || c) && await l.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", l.name, i);
      }
    for (const l of game.scenes ?? []) {
      const i = ((p = l.tokens) == null ? void 0 : p.filter((o) => {
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
    }, d = ((y = game.actors) == null ? void 0 : y.filter((l) => l.type === "Npc")) ?? [];
    for (const l of d)
      try {
        await l.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", l.name, i);
      }
    for (const l of game.scenes ?? []) {
      const i = ((b = l.tokens) == null ? void 0 : b.filter((o) => {
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
Hooks.on("preCreateToken", (w, s, e) => {
  var r, u, m, p;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, n = t ?? w.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (u = game.actors) == null ? void 0 : u.get(n) : null;
  if (d) {
    if (d.type === "Karakter") {
      w.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Npc") {
      const y = As((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
      w.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (w, s, e) => {
  const t = w.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && w.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (w, s, e) => {
  const t = w.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const ii = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ps(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(ii).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ps(w);
});
function Es() {
  var s, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], r = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const u of r)
      !u || w.has(u.id) || (w.add(u.id), typeof u.render == "function" && u.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || w.has(n.id) || (w.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Es, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && Ps(w), setTimeout(Es, 0);
});
Hooks.on("renderSidebarTab", (w, s, e) => {
  if ((w == null ? void 0 : w.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (w, s, e) => {
  var d;
  const t = w == null ? void 0 : w.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const r = s[0] ?? s;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Fs,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, s, e) => {
  var p, y, b, l;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, u = t.weapon;
  if (!n && !d && !r) return;
  const m = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const i = m.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const o = m.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? m, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, c.appendChild(a);
      }
    }
    if (r && u && (u.actorId || (b = w.speaker) != null && b.actor)) {
      const i = m.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const f = !!u.isHit, h = u.targetName || "Célpont";
        a.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(a);
      }
      if (u.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const f = document.createElement("button");
        f.type = "button", f.className = "votv-weapon-damage-chat";
        const h = u.hitLocationRoll, k = u.hitLocationName;
        f.textContent = h != null && k ? `Sebzés (Találati Hely ${h} - ${k})` : "Sebzés", f.dataset.actorId = String(u.actorId ?? ((l = w.speaker) == null ? void 0 : l.actor) ?? ""), f.dataset.itemId = String(u.itemId ?? ""), f.dataset.slotKey = String(u.slotKey ?? ""), f.dataset.targetName = String(u.targetName ?? ""), f.dataset.hitLocationName = String(u.hitLocationName ?? ""), f.dataset.messageId = String(w.id ?? ""), o.appendChild(f);
      }
    }
  }
});
export {
  yt as V,
  Pt as c
};
//# sourceMappingURL=vacuum-of-the-void-WhLXpKTj.mjs.map
