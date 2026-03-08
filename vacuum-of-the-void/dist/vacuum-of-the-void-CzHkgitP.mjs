var Ds = Object.defineProperty;
var Os = Object.getPrototypeOf;
var Cs = Reflect.get;
var qs = (w, s, e) => s in w ? Ds(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var Y = (w, s, e) => qs(w, typeof s != "symbol" ? s + "" : s, e);
var U = (w, s, e) => Cs(Os(w), e, s);
const { HTMLField: Ls, NumberField: L, SchemaField: j, StringField: T, BooleanField: ee, ArrayField: mt } = foundry.data.fields;
class vs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
        name: new T({ required: !1, blank: !0, initial: "" }),
        player: new T({ required: !1, blank: !0, initial: "" }),
        level: new L({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new T({ required: !1, blank: !0, initial: "" }),
        assignment: new T({ required: !1, blank: !0, initial: "" }),
        subAssignment: new T({ required: !1, blank: !0, initial: "" }),
        background: new T({ required: !1, blank: !0, initial: "" }),
        languages: new T({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new T({ required: !1, blank: !0, initial: "" })
      }),
      resources: new j({
        health: new j({
          value: new L({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new L({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ee({ required: !1, initial: !1 }),
            box2: new ee({ required: !1, initial: !1 }),
            box3: new ee({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new j({
          head: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new L({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new j({
          head: new L({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new L({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new L({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new L({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new j({
          value: new L({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new L({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new L({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new j({
        defense: new L({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new L({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new L({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new T({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new L({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new L({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new mt(
          new j({
            min: new L({ required: !1, integer: !0, initial: 0 }),
            max: new L({ required: !1, integer: !0, initial: 0 }),
            kp: new L({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new j({
        deception: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new T({ required: !1, blank: !0, initial: "" }),
        combatTraining: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new L({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new L({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new j({
        slotOrder: new T({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new ee({ required: !1, initial: !1 })
          })
        }),
        equipment: new T({ required: !1, blank: !0, initial: "" }),
        armor: new mt(
          new j({
            name: new T({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new T({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new T({ required: !1, blank: !0, initial: "" }),
            level: new T({ required: !1, blank: !0, initial: "" }),
            other: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new mt(
          new j({
            name: new T({ required: !1, blank: !0, initial: "" }),
            quantity: new L({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new mt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new mt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new Ls({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Lt, SchemaField: Ns } = foundry.data.fields;
class Ps extends vs {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ns({
        body: new Lt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Lt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Lt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: As, NumberField: Gs, StringField: Oe } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new As({ required: !1, initial: !1 }),
      type: new Oe({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Oe({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Oe({ required: !1, blank: !0, initial: "" }),
      damage: new Oe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Oe({ required: !1, blank: !0, initial: "" }),
      special: new Oe({ required: !1, blank: !0, initial: "" }),
      quantity: new Oe({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Oe({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Fs, StringField: Ot } = foundry.data.fields;
class Es extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Fs({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ot({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ot({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Ot({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ot({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Nt, StringField: ss } = foundry.data.fields;
class $s extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ss({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ss({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Nt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Nt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Nt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: xs, StringField: is } = foundry.data.fields;
class ns extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new is({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new is({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new xs({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: as } = foundry.data.fields;
class Rs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new as({ required: !1, blank: !0, initial: "" }),
      quantity: new as({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Ms } = foundry.data.fields;
class Ks extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ms({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Pt(w) {
  if (!w || !Array.isArray(w.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let c = i;
    for (const o of u) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, c);
        continue;
      }
      if (typeof o.operator == "string") {
        c = o.operator === "-" ? -1 : 1;
        continue;
      }
      const a = typeof o.faces == "number" ? o.faces : void 0, f = Array.isArray(o.results) ? o.results : null;
      if (!a || !f || a === 8 || a !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const r = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, m = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, y = r + m, b = l + p;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function js(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var rs, os, cs, ls;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, d, r, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const a = document.activeElement, f = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      f && h && (l.focus = {
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
    const p = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var a, f;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
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
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const l = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, d;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let t = 0;
    for (const r of e) {
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var y, b, u, i, c, o, a, f, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((b = (y = e.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : b.value) ?? 0, n = ((u = e.currentHealth) == null ? void 0 : u.legs) ?? 0, d = B._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const r = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let l;
    d === 1 ? l = -6 : d === 2 ? l = -3 : l = r, l += B._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((a = (o = s.system) == null ? void 0 : o.combat) == null ? void 0 : a.speed) ?? 0) || 0, p = Number(((h = (f = s.system) == null ? void 0 : f.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(l) ? l : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : B.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, c, o, a, f, h, v, I, S, C;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, d = ((h = (f = n.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, r = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, l = B._healthStatusFromRatio(r, d), m = Number(((C = (S = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : S.combat) == null ? void 0 : C.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = m;
    const y = this._getTotalArmorSpeedPenalty();
    p += y, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3). */
  _writeEffectiveGivenProtection(s = null) {
    var m, p, y, b, u, i, c, o, a, f;
    const e = s ?? this.form ?? this.element;
    let t = (m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((b = (y = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : y.combat) == null ? void 0 : b.givenProtection) ?? 0) || 0, d = (c = (i = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : i.has) != null && c.call(i, "lookaround") ? 1 : 0, r = (f = (a = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : a.has) != null && f.call(a, "halfcover") ? 3 : 0, l = n + this._getTotalArmorProtectionBonus() + d + r;
    t.textContent = String(l);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(r == null ? void 0 : r.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + y);
  }
  _writeTotalSpeed(s = null) {
    var o, a, f, h, v, I, S, C;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var N;
      return ((N = e == null ? void 0 : e.querySelector) == null ? void 0 : N.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((f = (a = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : a.has) != null && f.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, p = ((S = (I = m.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : S.value) ?? 0, y = ((C = m.currentHealth) == null ? void 0 : C.legs) ?? 0;
    if (B._healthStatusFromRatio(y, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, m, p;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((m = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return B._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, m, p, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var Qe, Xe, Ze, et, tt, st, it, nt, at, Ae, rt, ot, Fe, k, F, E, z, le, J, He, ke, Te, ve, Ee, $e, St, Tt, _t, Dt, ct, Ue, jt, zt, Ht, Ut, Bt, Gt, Vt, Wt, Yt, Jt, Qt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ze = (Xe = (Qe = this.actor.system) == null ? void 0 : Qe.resources) == null ? void 0 : Xe.stress) == null ? void 0 : Ze.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const O = ((et = d[g]) == null ? void 0 : et.value) ?? 0, D = r[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(D, O);
    }
    const m = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = m || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((st = (tt = this.actor.system) == null ? void 0 : tt.combat) == null ? void 0 : st.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const o = Number(((nt = (it = this.actor.system) == null ? void 0 : it.combat) == null ? void 0 : nt.givenProtection) ?? 0) || 0, a = (rt = (Ae = (at = this.actor) == null ? void 0 : at.statuses) == null ? void 0 : Ae.has) != null && rt.call(Ae, "lookaround") ? 1 : 0, f = (k = (Fe = (ot = this.actor) == null ? void 0 : ot.statuses) == null ? void 0 : Fe.has) != null && k.call(Fe, "halfcover") ? 3 : 0, h = o + this._getTotalArmorProtectionBonus() + a + f;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: h } },
      { inplace: !1 }
    );
    const v = ((F = e.system) == null ? void 0 : F.combat) ?? {};
    e.totalDefense = (Number(v.defense) || 0) + (Number(v.defenseBonus) || 0) + (Number(v.givenProtection) || 0);
    const I = Number(v.givenSpeed);
    let S = (Number(v.speed) || 0) + (Number(v.speedBonus) || 0) + (Number.isFinite(I) ? I : 0);
    b === 0 && (S = 0), (le = (z = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : z.has) != null && le.call(z, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (He = (J = e.system) == null ? void 0 : J.combat) == null ? void 0 : He.givenProtection } },
      { inplace: !1 }
    ), S = 0), e.totalSpeed = S;
    const C = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(C)) {
      const D = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, N = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = (_.slotOrder ?? "").trim(), x = q ? q.split(/\s*,\s*/).filter((g) => N.includes(g)) : [], A = (ke = this.actor.system.gear) == null ? void 0 : ke.microchips, K = A && typeof A == "object" && !Array.isArray(A) ? A : {}, V = (((Te = K.slot1) == null ? void 0 : Te.itemId) ?? "").trim(), H = (((ve = K.slot2) == null ? void 0 : ve.itemId) ?? "").trim(), G = (((Ee = K.slot3) == null ? void 0 : Ee.itemId) ?? "").trim(), W = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const D = typeof g.sort == "number" ? g.sort : 0, P = typeof O.sort == "number" ? O.sort : 0;
      return D - P;
    }).map((g) => {
      var we, Re, Me, _e, De, ut;
      const O = g.type === "Fegyver", D = g.type === "MikroChip";
      let P = 0, M = "", Z = null;
      for (let Be = 0; Be < x.length; Be++) {
        const dt = x[Be];
        if ((((we = _[dt]) == null ? void 0 : we.itemId) ?? "") === g.id) {
          P = Be + 1, M = ((Re = _[dt]) == null ? void 0 : Re.bonus) ?? "", Z = dt;
          break;
        }
      }
      let X = null;
      D && (V === g.id ? X = "slot1" : H === g.id ? X = "slot2" : G === g.id && (X = "slot3"));
      const lt = O && ((Me = g.system) != null && Me.damage) ? g.system.damage : "", ue = O && typeof ((_e = g.system) == null ? void 0 : _e.range) == "string" ? (g.system.range || "").trim() : "", xe = Z ? Number((De = _[Z]) == null ? void 0 : De.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: P,
        slotBonus: M,
        slotKey: Z,
        microchipSlotKey: X,
        isEquipped: !!(Z || X),
        damage: lt,
        rangeStr: ue,
        slotBonusNum: xe,
        quantity: Number(((ut = g.system) == null ? void 0 : ut.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = W;
    const R = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((g) => g.type === "Fegyver"), Q = R.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = Q;
    const ae = "— Nincs fegyver —", Ie = x.filter((g) => {
      const D = ((_[g] ?? {}).itemId ?? "").trim();
      return D ? !!R.find((M) => M.id === D) : !1;
    });
    e.weaponSlots = Ie.map((g, O) => {
      const D = _[g] ?? {}, P = (D.itemId ?? "").trim(), M = Q.find((Z) => Z.id === P);
      return {
        slotKey: g,
        itemId: P,
        slotNum: O + 1,
        displayName: (M == null ? void 0 : M.name) || D.name || ae,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ie = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, oe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((g) => {
      var Xt, Zt, es;
      const O = g.id;
      let D = null, P = {};
      for (const qt of x)
        if ((((Xt = _[qt]) == null ? void 0 : Xt.itemId) ?? "").trim() === O) {
          D = qt, P = _[qt] ?? {};
          break;
        }
      const M = !!D, Z = ((Zt = g.system) == null ? void 0 : Zt.equipped) !== void 0 && ((es = g.system) == null ? void 0 : es.equipped) !== null ? !!g.system.equipped : M, X = (g == null ? void 0 : g.system) ?? {}, lt = typeof X.range == "string" ? (X.range || "").trim() : "", ue = X.type ?? "", xe = (ie[ue] ?? ue) || "—", we = X.size ?? "", Re = (oe[we] ?? we) || "", Me = [xe, Re].filter(Boolean).join(", ") || xe || "—", _e = ue === "projectile" || we === "thrown", De = X.quantity, ut = De != null ? String(De).trim() : "1", Be = String(P.bonus ?? "").trim(), dt = String(X.bonus ?? "").trim(), _s = Be || dt || "0";
      return {
        slotKey: D ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? ae,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: _s,
        damage: P.damage ?? X.damage ?? "",
        rangeStr: lt || "—",
        typeLabel: xe,
        typeAndSize: Me,
        quantity: ut,
        quantityDisplay: _e ? ut : "—",
        isProjectile: _e,
        equipped: Z,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const Ce = (((St = this.actor.items) == null ? void 0 : St.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Ce.map((g) => {
      var P, M;
      const O = (g == null ? void 0 : g.system) ?? {}, D = ((P = g.system) == null ? void 0 : P.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: js((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const re = (((Tt = this.actor.items) == null ? void 0 : Tt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = re.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, D = (O.description ?? "").trim(), P = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", M = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: P
      };
    });
    const he = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = he.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), P = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: P
      };
    });
    const ft = (((Dt = this.actor.items) == null ? void 0 : Dt.contents) ?? []).filter((g) => g.type === "MikroChip"), ne = ft.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ge = "— Nincs Mikro-Chip —", be = ["slot1", "slot2", "slot3"], Ke = (g) => {
      var D, P, M;
      const O = [];
      return g !== 1 && O.push((((D = K.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && O.push((((P = K.slot2) == null ? void 0 : P.itemId) ?? "").trim()), g !== 3 && O.push((((M = K.slot3) == null ? void 0 : M.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((g) => !Ke(1).includes(g.id)), e.microchipItemsSlot2 = ne.filter((g) => !Ke(2).includes(g.id)), e.microchipItemsSlot3 = ne.filter((g) => !Ke(3).includes(g.id)), e.microchipSlots = be.map((g) => {
      const O = K[g] ?? {}, D = (O.itemId ?? "").trim(), P = ft.find((M) => M.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (P == null ? void 0 : P.name) || O.name || Ge,
        img: (P == null ? void 0 : P.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, D = K[O] ?? {}, P = (D.itemId ?? "").trim(), M = ne.find((Z) => Z.id === P);
      e[`microchip${g}ItemId`] = P, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || D.name || Ge, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = ft.map((g) => {
      var we, Re, Me, _e;
      const O = g.id;
      let D = null;
      for (const De of be)
        if ((((we = K[De]) == null ? void 0 : we.itemId) ?? "").trim() === O) {
          D = De;
          break;
        }
      const P = !!D, M = ((Re = g == null ? void 0 : g.system) == null ? void 0 : Re.abilityType) ?? "", Z = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", X = M === "active", lt = Number((Me = g == null ? void 0 : g.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ue = (((_e = g == null ? void 0 : g.system) == null ? void 0 : _e.description) ?? "").trim(), xe = ue ? ue.length > 60 ? ue.slice(0, 57) + "…" : ue : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: Z,
        description: xe,
        kp: lt,
        isActive: X,
        slotKey: D ?? "",
        equipped: P
      };
    });
    const yt = (((ct = e.weaponsTable) == null ? void 0 : ct.length) ?? 0) > 0 || (((Ue = e.armorTable) == null ? void 0 : Ue.length) ?? 0) > 0 || (((jt = e.microchipsTable) == null ? void 0 : jt.length) ?? 0) > 0 || (((zt = e.itemsTable) == null ? void 0 : zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !yt;
    const gt = this.actor.system.abilities ?? {}, Kt = (((Ht = this.actor.items) == null ? void 0 : Ht.contents) ?? []).map((g) => {
      var O, D, P;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((P = g.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), je = new Map(Kt.map((g) => [g.id, g])), ht = "— Nincs képesség —", Ve = (g) => {
      const O = gt[g] ?? {}, D = (O.itemId ?? "").trim(), P = D ? je.get(D) : null, M = (P == null ? void 0 : P.description) ?? "", Z = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: D,
        displayName: (P == null ? void 0 : P.name) || O.name || ht,
        img: (P == null ? void 0 : P.img) || "",
        description: M,
        kp: Z
      };
    };
    e.abilityFajiSlot = Ve("faji"), e.abilityHatterSlot = Ve("hatter");
    const We = (g) => {
      const O = gt[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Ye = (g) => g.map((O) => {
      const D = je.get(O);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ye(We("passive")), e.abilityActiveList = Ye(We("active"));
    const bt = ((Ut = e.system) == null ? void 0 : Ut.resources) ?? {}, ze = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], qe = (Gt = (Bt = e.system) == null ? void 0 : Bt.combat) == null ? void 0 : Gt.initiativeResult, ce = typeof qe == "number" ? qe : -1, kt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Le = (Wt = (Vt = e.system) == null ? void 0 : Vt.combat) == null ? void 0 : Wt.initiativeRanges, Ne = Array.isArray(Le) ? Le.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Se = (Ne.length > 0 ? Ne : kt).slice().sort((g, O) => g.min - O.min), Pe = Ne.map((g) => g.min), vt = Pe.length ? Math.min(...Pe) : 0, wt = Pe.length ? Math.max(...Pe) : 0;
    e.initiativeRanges = Ne.map((g) => ({ ...g, isFirst: g.min === vt, isLast: g.min === wt }));
    let Je = 0;
    if (typeof ce == "number" && ce >= 0 && Se.length > 0) {
      const g = Se[0], O = Se[Se.length - 1];
      let D = null;
      ce <= g.max ? D = g : ce >= O.min ? D = O : D = Se.find((P) => ce >= P.min && ce <= P.max), D && (Je = D.kp);
    }
    e.kpDots = ze.map((g, O) => {
      const D = O + 1, P = !!Number(bt[g]), M = D <= Je;
      return { index: D, used: P, usable: M };
    });
    const It = !!((Jt = (Yt = game.combat) == null ? void 0 : Yt.combatants) != null && Jt.some((g) => {
      var O;
      return ((O = g.actor) == null ? void 0 : O.type) === "Karakter";
    }));
    return e.showHarcSection = It, e.canEditInitiative = !!((Qt = game.user) != null && Qt.isGM), e.showInitiativeResult = typeof qe == "number", e.initiativeResult = e.showInitiativeResult ? qe : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-BkXrkFuu.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, f, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-BkXrkFuu.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, f = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [a]: f ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var a;
      const c = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
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
      const c = ((h = (f = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const c = i.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-BkXrkFuu.mjs");
      f(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, S, C, _, N, q, x;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((_ = (C = this.actor.items).get) == null ? void 0 : _.call(C, h)) ?? ((q = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : q.call(N, (A) => A.id === h));
      (x = v == null ? void 0 : v.sheet) == null || x.render(!0);
    });
    const l = (i, c) => {
      var f;
      const o = i.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = a.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      let f = Number(c.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await a.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, f = a.items.get(o);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = I ? I.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], _ = C.find((N) => {
          var q;
          return (((q = v[N]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const N = C.filter((q) => q !== _);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${_}.itemId`] = "", h[`system.weapons.${_}.name`] = "", h[`system.weapons.${_}.damage`] = "", h[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, N;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], S = I.find((q) => {
        var x;
        return (((x = f[q]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let q = I.find((A) => {
          var K;
          return !((K = f[A]) != null && K.itemId);
        });
        const x = new Set(I);
        if (!q) {
          const A = v.find((K) => !x.has(K));
          if (!A) return;
          q = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${q}.damage`]: ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const q = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = a == null ? void 0 : a.dataset.slot;
      if (!f) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((q = c.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let C = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", a == null || a.insertBefore(C, S)), C.src = I, C.style.display = "") : C && C.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const _ = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      h && (N[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = a[S]) == null ? void 0 : C.itemId) ?? "").trim() === c;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!c || !o) return;
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[c]) == null ? void 0 : v.items) ? a[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var f;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      (f = a == null ? void 0 : a.sheet) == null || f.render(!0);
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
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = (c.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, N;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], S = I.find((q) => {
        var x;
        return (((x = f[q]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let q = I.find((A) => {
          var K;
          return !((K = f[A]) != null && K.itemId);
        });
        const x = new Set(I);
        if (!q) {
          const A = v.find((K) => !x.has(K));
          if (!A) return;
          q = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: a.name ?? "",
          [`system.weapons.${q}.damage`]: ((_ = a.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((N = a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const q = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, f = a.items.get(o), h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = I ? I.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], _ = C.find((N) => {
          var q;
          return (((q = v[N]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const N = C.filter((q) => q !== _);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${_}.itemId`] = "", h[`system.weapons.${_}.name`] = "", h[`system.weapons.${_}.damage`] = "", h[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Targy") return;
      const f = (c.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const m = this, p = (i) => {
      var a, f, h, v;
      if (!i) return;
      const c = m._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const o = ((f = (a = c.system) == null ? void 0 : a.resources) == null ? void 0 : f.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      m.actor.update(c).then(() => {
        o && setTimeout(() => m.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (i) => {
      var c, o, a;
      return i && (((o = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, i)) || m.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = c.form;
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
    var l, m, p;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((p = n[y]) == null ? void 0 : p.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, r, l, m, p, y, b, u, i, c;
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
          let f = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const h = (((r = a.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
          const I = h === "active" ? "active" : "passive", S = Array.isArray((l = v[I]) == null ? void 0 : l.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          S.includes(f) || S.push(f), await this.actor.update({ [`system.abilities.${I}.items`]: S });
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
          const f = this.actor, h = ((p = a.parent) == null ? void 0 : p.id) !== f.id;
          let v = a.id;
          if (h) {
            const I = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await f.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const I = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, S = (I.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = S ? S.split(/\s*,\s*/).filter((q) => C.includes(q)) : [], N = _.filter((q) => {
              var x;
              return (((x = I[q]) == null ? void 0 : x.itemId) ?? "").trim() === v;
            });
            if (N.length > 0) {
              const x = {
                "system.weapons.slotOrder": _.filter((A) => !N.includes(A)).join(",")
              };
              for (const A of N)
                x[`system.weapons.${A}.itemId`] = "", x[`system.weapons.${A}.name`] = "", x[`system.weapons.${A}.damage`] = "", x[`system.weapons.${A}.bonus`] = "";
              await f.update(x);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const f = this.actor;
          if (((u = a.parent) == null ? void 0 : u.id) !== f.id) {
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
          ((c = a.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, r, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, m, p, y, b, u;
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
    var p, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return i - c;
    }).map((b) => b.id), r = d.indexOf(t), l = d.indexOf(e);
    if (r === -1 || l === -1) return;
    d.splice(r, 1), d.splice(l, 0, t);
    const m = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
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
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
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
    var r, l, m;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
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
    var m, p, y, b;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, l = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, r, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, m, p, y, b;
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
    const { resultType: y, label: b } = Pt(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: b } },
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
    var I, S;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((C) => C.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((C) => C.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, p = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = m + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: f, label: h } = Pt(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, y, b, u, i, c, o, a, f;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
Y(B, "PARTS", foundry.utils.mergeObject(
  U(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((rs = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : rs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((os = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : os.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ls = (cs = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : cs.window) == null ? void 0 : ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
Y(B, "BODY_PART_BY_SKILL", {
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
let pt = B;
function zs(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var us, ds, ms, ps;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, r, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = n.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const r = await super.render(s, e), l = this.element, m = this.form ?? this.element, p = d.scrollState, y = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, p), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = m.querySelector) == null ? void 0 : i.call(m, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = m.querySelector) == null ? void 0 : c.call(m, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(s) {
    var Ve, We, Ye, bt, ze, qe, ce, kt, Le, Ne, Ct, Se, Pe, vt, wt, Je, It, Qe, Xe, Ze, et, tt, st, it, nt, at, Ae, rt, ot, Fe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ve = this.actor) == null ? void 0 : Ve.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ye = (We = e.system) == null ? void 0 : We.identity) == null ? void 0 : Ye.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((bt = e.system) == null ? void 0 : bt.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, r = (qe = (ze = t == null ? void 0 : t.statuses) == null ? void 0 : ze.has) != null && qe.call(ze, "lookaround") ? 1 : 0, l = (kt = (ce = t == null ? void 0 : t.statuses) == null ? void 0 : ce.has) != null && kt.call(ce, "halfcover") ? 3 : 0;
    e.effectiveGivenProtection = d + r + l, e.hasHalfcover = ((Ne = (Le = t == null ? void 0 : t.statuses) == null ? void 0 : Le.has) == null ? void 0 : Ne.call(Le, "halfcover")) ?? !1;
    const m = ((Ct = t == null ? void 0 : t.items) == null ? void 0 : Ct.contents) ?? [], p = ((Se = t == null ? void 0 : t.system) == null ? void 0 : Se.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = (p.slotOrder ?? "").trim(), u = b ? b.split(/\s*,\s*/).filter((k) => y.includes(k)) : [], i = m.filter((k) => k.type === "Fegyver"), c = i.map((k) => ({ id: k.id, name: k.name, img: k.img })), o = "— Nincs fegyver —", a = u.length > 0 ? u : y, f = y.filter((k) => !a.includes(k)), h = [...a, ...f], v = h.filter((k) => {
      var E;
      const F = (((E = p[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return F && i.some((z) => z.id === F);
    });
    e.weaponSlots = v.map((k) => {
      const F = p[k] ?? {}, E = (F.itemId ?? "").trim(), z = c.find((le) => le.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (z == null ? void 0 : z.name) || F.name || o,
        img: (z == null ? void 0 : z.img) || ""
      };
    });
    const I = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, S = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = i.map((k) => {
      var ct;
      const F = k.id;
      let E = null, z = {};
      for (const Ue of h)
        if ((((ct = p[Ue]) == null ? void 0 : ct.itemId) ?? "").trim() === F) {
          E = Ue, z = p[Ue] ?? {};
          break;
        }
      const le = !!E, J = (k == null ? void 0 : k.system) ?? {}, He = typeof J.range == "string" ? (J.range || "").trim() : "", ke = J.type ?? "", Te = (I[ke] ?? ke) || "—", ve = J.size ?? "", Ee = (S[ve] ?? ve) || "", $e = [Te, Ee].filter(Boolean).join(", ") || Te || "—", St = ke === "projectile" || ve === "thrown", Tt = J.quantity != null ? String(J.quantity).trim() : "1", _t = String(J.bonus ?? z.bonus ?? "").trim() || "0", Dt = (J.damage ?? z.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? o,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: _t,
        damage: Dt,
        rangeStr: He || "—",
        typeAndSize: $e,
        quantity: Tt,
        isProjectile: St,
        equipped: le,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const C = m.filter((k) => k.type === "Pancel");
    e.armorTable = C.map((k) => {
      var z;
      const F = (k == null ? void 0 : k.system) ?? {}, E = ((z = k.system) == null ? void 0 : z.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: zs((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const _ = ((vt = (Pe = t == null ? void 0 : t.system) == null ? void 0 : Pe.gear) == null ? void 0 : vt.microchips) ?? {}, N = ["slot1", "slot2", "slot3"], q = m.filter((k) => k.type === "MikroChip");
    e.microchipsTable = q.map((k) => {
      var ke, Te, ve, Ee;
      const F = k.id;
      let E = null;
      for (const $e of N)
        if ((((ke = _[$e]) == null ? void 0 : ke.itemId) ?? "").trim() === F) {
          E = $e;
          break;
        }
      const z = ((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.abilityType) ?? "", le = z === "active" ? "Aktív" : z === "passive" ? "Passzív" : z || "—", J = (((ve = k == null ? void 0 : k.system) == null ? void 0 : ve.description) ?? "").trim(), He = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: le,
        description: He,
        kp: Number((Ee = k == null ? void 0 : k.system) == null ? void 0 : Ee.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: z === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const x = m.filter((k) => k.type === "Targy");
    e.itemsTable = x.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, E = (F.description ?? "").trim(), z = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: z
      };
    });
    const A = m.filter((k) => k.type === "Egyeb");
    e.egyebList = A.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), z = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: z
      };
    });
    const K = (((wt = e.weaponsTable) == null ? void 0 : wt.length) ?? 0) > 0 || (((Je = e.armorTable) == null ? void 0 : Je.length) ?? 0) > 0 || (((It = e.microchipsTable) == null ? void 0 : It.length) ?? 0) > 0 || (((Qe = e.itemsTable) == null ? void 0 : Qe.length) ?? 0) > 0 || (((Xe = e.egyebList) == null ? void 0 : Xe.length) ?? 0) > 0;
    e.showEquipmentDropZone = !K;
    const V = ((Ze = t == null ? void 0 : t.system) == null ? void 0 : Ze.abilities) ?? {}, H = m.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), G = new Map(H.map((k) => [k.id, k])), se = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = se, e.abilityHatterSlot = se;
    const W = (k) => {
      const F = V[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, R = (k) => (k || []).map((F) => {
      const E = G.get(F);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = R(W("passive")), e.abilityActiveList = R(W("active"));
    const Q = t == null ? void 0 : t.id, ae = !!((tt = (et = game.combat) == null ? void 0 : et.combatants) != null && tt.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === Q;
      }
    ));
    e.showHarcSection = ae;
    const Ie = ((st = e.system) == null ? void 0 : st.resources) ?? {}, ie = (nt = (it = e.system) == null ? void 0 : it.combat) == null ? void 0 : nt.initiativeResult, oe = typeof ie == "number" ? ie : -1, Ce = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], re = (Ae = (at = e.system) == null ? void 0 : at.combat) == null ? void 0 : Ae.initiativeRanges, he = Array.isArray(re) ? re.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ne = (he.length > 0 ? he : Ce).slice().sort((k, F) => k.min - F.min), Ge = 3;
    let be = he.length > 0 ? he : [];
    be.length < Ge && (be = [...be, ...Array(Ge - be.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = be.map((k, F) => ({
      ...k,
      isFirst: F === 0,
      isLast: F === be.length - 1
    }));
    let Ke = 0;
    if (typeof oe == "number" && oe >= 0 && ne.length > 0) {
      const k = ne[0], F = ne[ne.length - 1];
      let E = null;
      oe <= k.max ? E = k : oe >= F.min ? E = F : E = ne.find((z) => oe >= z.min && oe <= z.max), E && (Ke = E.kp);
    }
    const yt = ne.length > 0 ? ne[ne.length - 1] : null, gt = Math.min(10, yt ? yt.kp : 6), je = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, gt)).map((k, F) => {
      const E = F + 1, z = !!Number(Ie[k]), le = E <= Ke;
      return { index: E, used: z, usable: le };
    }), ht = Math.ceil(je.length / 2);
    return e.kpDotsRow1 = je.slice(0, ht), e.kpDotsRow2 = je.slice(ht), e.canEditInitiative = !!((rt = game.user) != null && rt.isGM), e.showInitiativeResult = typeof ie == "number", e.initiativeResult = e.showInitiativeResult ? ie : "", e.speedUnitForSelect = ((Fe = (ot = e.system) == null ? void 0 : ot.combat) == null ? void 0 : Fe.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var p, y, b;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, a, f;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((f = (a = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, a, f;
      u.preventDefault();
      const i = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (f = c == null ? void 0 : c.sheet) == null || f.render(!0);
    });
    const n = (u) => {
      var o, a;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (a = c == null ? void 0 : c.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var a, f, h, v;
      u.preventDefault();
      const i = (f = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : f.call(a, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var a;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BkXrkFuu.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (c = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BkXrkFuu.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var a, f;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const o = !!Number((f = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : f[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var f, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((f = i == null ? void 0 : i.dataset) == null ? void 0 : f.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-BkXrkFuu.mjs");
      a(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, a;
      u.preventDefault();
      const i = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, S, C, _;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, f = (Array.isArray((_ = o[i]) == null ? void 0 : _.items) ? o[i].items.slice() : []).filter((N) => N !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, a = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      a && (f[`system.weapons.${a}.itemId`] = "", f[`system.weapons.${a}.name`] = "", f[`system.weapons.${a}.damage`] = "", f[`system.weapons.${a}.bonus`] = ""), Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var f, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = c[S]) == null ? void 0 : C.itemId) ?? "").trim() === i;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, a;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var f, h, v;
      const i = u.currentTarget, c = (h = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const a = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", a), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const r = this, l = (u) => {
      if (!u) return;
      const i = r._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && r.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, m = (u) => {
      var i, c, o;
      return u && (((c = (i = r.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var f;
      const i = u.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = i.form;
      if (!m(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || r.id && ((f = a.closest) != null && f.call(a, `#${CSS.escape(r.id)}`))) || l(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, i, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, i, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var S, C, _, N, q;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((C = e.system) == null ? void 0 : C.skills) ?? {}, r = ((_ = e.items) == null ? void 0 : _.filter((x) => x.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((x) => x.id === n.itemId) ?? null);
    const m = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, y = ((N = l == null ? void 0 : l.system) == null ? void 0 : N.type) || "kinetic", b = (((q = l == null ? void 0 : l.system) == null ? void 0 : q.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = p + i, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, f = new Roll(a);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = Pt(f), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, p, y, b, u, i, c, o, a, f;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, c, o, a, f, h, v, I, S, C, _, N, q, x;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const n = ((A) => {
      var V;
      if (!A) return null;
      const K = A.uuid ?? A.documentUuid ?? ((V = A.data) == null ? void 0 : V.uuid) ?? (typeof A == "string" ? A : null);
      if (K) return K;
      if (typeof A == "object") {
        for (const H of Object.values(A))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let A = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const se = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        A = ((a = (await r.createEmbeddedDocuments("Item", [se]))[0]) == null ? void 0 : a.id) ?? A;
      }
      const K = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), V = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, H = K === "active" ? "active" : "passive", G = Array.isArray((v = V[H]) == null ? void 0 : v.items) ? V[H].items.slice() : Array.isArray(V[H]) ? V[H].slice() : [];
      G.includes(A) || G.push(A), await r.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (S = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && p) {
      const A = ((C = r.system) == null ? void 0 : C.weapons) ?? {}, K = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], V = (A.slotOrder ?? "").trim(), H = V ? V.split(/\s*,\s*/).filter((W) => K.includes(W)) : [];
      let G = K.find((W) => {
        var R;
        return !(((R = A[W]) == null ? void 0 : R.itemId) ?? "").trim();
      });
      G || (G = K.find((W) => !H.includes(W)) ?? "slot1");
      const se = H.includes(G) ? H : [...H, G].filter((W) => K.includes(W));
      await r.update({
        "system.weapons.slotOrder": se.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((_ = d.system) == null ? void 0 : _.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = d.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const A = ((x = (q = r.system) == null ? void 0 : q.gear) == null ? void 0 : x.microchips) ?? {}, V = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = A[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      V && await r.update({
        [`system.gear.microchips.${V}.itemId`]: p,
        [`system.gear.microchips.${V}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
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
    var m, p, y, b, u, i;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const c = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
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
Y(te, "PARTS", foundry.utils.mergeObject(
  U(te, te, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(te, te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((us = U(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : us.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ds = U(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : ds.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ps = (ms = U(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : ms.window) == null ? void 0 : ps.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let At = te;
const Hs = [
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
var fs;
const de = class de extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Hs, e;
  }
};
Y(de, "PARTS", foundry.utils.mergeObject(U(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Y(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((fs = U(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : fs.form) ?? {}, { submitOnChange: !1 })
}));
let Ft = de;
var ys;
const me = class me extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
Y(me, "PARTS", foundry.utils.mergeObject(U(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Y(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ys = U(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : ys.form) ?? {}, { submitOnChange: !1 })
}));
let Et = me;
var gs;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
Y(pe, "PARTS", foundry.utils.mergeObject(U(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Y(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((gs = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : gs.form) ?? {}, { submitOnChange: !1 })
}));
let $t = pe;
var hs;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (r) => {
      var p;
      const l = r.target;
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
Y(fe, "PARTS", foundry.utils.mergeObject(U(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Y(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(fe, fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((hs = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : hs.form) ?? {}, { submitOnChange: !0 })
}));
let xt = fe;
var bs;
const ye = class ye extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
Y(ye, "PARTS", foundry.utils.mergeObject(U(ye, ye, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Y(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ye, ye, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((bs = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : bs.form) ?? {}, { submitOnChange: !1 })
}));
let Rt = ye;
var ks;
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
      var p, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
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
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
Y(ge, "PARTS", foundry.utils.mergeObject(U(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Y(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ge, ge, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ks = U(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : ks.form) ?? {}, { submitOnChange: !1 })
}));
let Mt = ge;
const ws = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Is(w) {
  return w === "Apró" ? 0.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, d, r, l;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ps, CONFIG.Actor.dataModels.Npc = vs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ts, CONFIG.Item.dataModels.weapon = ts, CONFIG.Item.dataModels.Pancel = Es, CONFIG.Item.dataModels.MikroChip = $s, CONFIG.Item.dataModels.Kepesseg = ns, CONFIG.Item.dataModels.ability = ns, CONFIG.Item.dataModels.Targy = Rs, CONFIG.Item.dataModels.Egyeb = Ks, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (r = CONFIG.Combat).initiative ?? (r.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", At, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ft, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Et, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", $t, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", xt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), Hooks.on("updateActor", (m, p, y, b) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const u = m.id;
    setTimeout(() => {
      var a, f, h, v;
      const i = (a = game.actors) == null ? void 0 : a.get(u);
      if (!i || i.type !== "Karakter") return;
      const c = pt.getTotalSpeedRaw(i), o = (f = i.effects) == null ? void 0 : f.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !o) {
        const I = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((S) => S.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var C, _;
          const S = ((C = canvas.tokens) == null ? void 0 : C.placeables) ?? [];
          for (const N of S)
            ((_ = N == null ? void 0 : N.document) == null ? void 0 : _.actorId) === u && typeof N.draw == "function" && N.draw();
        }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect create failed:", S));
      } else c > 0 && o && o.delete().then(() => {
        var S, C;
        const I = ((S = canvas.tokens) == null ? void 0 : S.placeables) ?? [];
        for (const _ of I)
          ((C = _ == null ? void 0 : _.document) == null ? void 0 : C.actorId) === u && typeof _.draw == "function" && _.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, p, y, b) => {
    var S, C, _, N, q, x, A, K, V, H, G, se, W;
    const u = m == null ? void 0 : m.id;
    if (!u) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((S = p == null ? void 0 : p.system) != null && S.combat) && "initiativeResult" in p.system.combat) {
      const R = Number((_ = (C = m.system) == null ? void 0 : C.combat) == null ? void 0 : _.initiativeResult), Q = Number.isFinite(R) ? R : 0, ae = game.combat;
      if (ae) {
        const Ie = ((N = ae.combatants) == null ? void 0 : N.contents) ?? Array.from(ae.combatants ?? []);
        for (const ie of Ie)
          if (((q = ie.actor) == null ? void 0 : q.id) === u || ie.actorId === u) {
            ae.updateEmbeddedDocuments("Combatant", [{ _id: ie.id, initiative: Q }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((x = p == null ? void 0 : p.system) != null && x.identity) && "size" in p.system.identity) {
      const R = Is((K = (A = m.system) == null ? void 0 : A.identity) == null ? void 0 : K.size);
      m.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((Q) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, Q));
    }
    const i = document.activeElement, c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), o = [], a = (V = game.actors) == null ? void 0 : V.get(u);
    a != null && a.apps && o.push(...Array.from(a.apps));
    const f = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of f)
      ((H = R.document) == null ? void 0 : H.id) !== u || ((G = R.document) == null ? void 0 : G.documentName) !== "Actor" || ((se = R.constructor) == null ? void 0 : se.name) !== "VoidKarakterSheet" || o.includes(R) || o.push(R);
    if (c && o.some((R) => {
      const Q = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return Q && Q.contains(i);
    })) return;
    const v = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const R of o)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== I && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, p, y, b) => {
    var o, a, f;
    const u = m == null ? void 0 : m.parent;
    if (!u || u.documentName !== "Actor" || u.type !== "Karakter" || m.type !== "Fegyver") return;
    const i = ((o = u.system) == null ? void 0 : o.weapons) ?? {}, c = {};
    for (const [h, v] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const I = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !I || I !== m.id || (c[`system.weapons.${h}.name`] = m.name ?? "", c[`system.weapons.${h}.damage`] = ((a = m.system) == null ? void 0 : a.damage) ?? "", c[`system.weapons.${h}.bonus`] = ((f = m.system) == null ? void 0 : f.bonus) ?? "");
    }
    Object.keys(c).length && u.update(c);
  });
});
Hooks.on("ready", () => {
  var w, s;
  document.body.addEventListener("click", async (e) => {
    var f, h, v, I, S, C, _, N, q, x, A, K, V, H, G, se, W, R, Q, ae, Ie, ie, oe;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (S = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const l = r.actorId ?? ((C = d == null ? void 0 : d.speaker) == null ? void 0 : C.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((_ = game.actors) == null ? void 0 : _.get(r.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(l));
    if (m || (m = ((x = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : x.flatMap((re) => {
      var he;
      return ((he = re.tokens) == null ? void 0 : he.contents) ?? [];
    }).map((re) => re.actor).find((re) => re && (re.id === l || re.id === r.actorId))) ?? null), !m) return;
    const p = r.itemId ? ((K = (A = m.items) == null ? void 0 : A.get) == null ? void 0 : K.call(A, r.itemId)) ?? ((G = (H = (V = m.items) == null ? void 0 : V.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (Ce) => Ce.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((se = p == null ? void 0 : p.system) == null ? void 0 : se.damage) ?? "").trim()), !y && r.slotKey && (y = (((((W = m.system) == null ? void 0 : W.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (Ie = (R = ui.notifications) == null ? void 0 : R.warn) == null || Ie.call(R, ((ae = (Q = game.i18n) == null ? void 0 : Q.localize) == null ? void 0 : ae.call(Q, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", c = r.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (r.slotKey ? ((oe = (((ie = m.system) == null ? void 0 : ie.weapons) ?? {})[r.slotKey]) == null ? void 0 : oe.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    c && (a += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, l, m, p, y, b;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, r;
    const e = ((t = game.actors) == null ? void 0 : t.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of e) {
      const m = pt.getTotalSpeedRaw(l), p = (n = l.effects) == null ? void 0 : n.find((y) => y.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const y = ((r = (d = CONFIG.statusEffects) == null ? void 0 : d.find((b) => b.id === "immobilized")) == null ? void 0 : r.img) ?? "";
        await l.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: y,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: l.uuid
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
        background: { src: ws },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, l, m, p, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, c = ((l = i == null ? void 0 : i.bar1) == null ? void 0 : l.attribute) ?? "", o = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((p = u.tokens) == null ? void 0 : p.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, o);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((y = game.actors) == null ? void 0 : y.filter((u) => u.type === "Npc")) ?? [];
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(n);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (w, s, e) => {
  var r, l, m, p;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, n = t ?? w.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (l = game.actors) == null ? void 0 : l.get(n) : null;
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
      const y = Is((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
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
const Us = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ss(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Us).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ss(w);
});
function Ts() {
  var s, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], r = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const l of r)
      !l || w.has(l.id) || (w.add(l.id), typeof l.render == "function" && l.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || w.has(n.id) || (w.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Ts, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && Ss(w), setTimeout(Ts, 0);
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
    "background.src": ws,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, s, e) => {
  var p, y, b, u;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!n && !d && !r) return;
  const m = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const i = m.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = m.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? m, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (r && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const i = m.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const f = !!l.isHit, h = l.targetName || "Célpont";
        a.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(a);
      }
      if (l.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const f = document.createElement("button");
        f.type = "button", f.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        f.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", f.dataset.actorId = String(l.actorId ?? ((u = w.speaker) == null ? void 0 : u.actor) ?? ""), f.dataset.itemId = String(l.itemId ?? ""), f.dataset.slotKey = String(l.slotKey ?? ""), f.dataset.targetName = String(l.targetName ?? ""), f.dataset.hitLocationName = String(l.hitLocationName ?? ""), f.dataset.messageId = String(w.id ?? ""), c.appendChild(f);
      }
    }
  }
});
export {
  pt as V,
  Pt as c
};
//# sourceMappingURL=vacuum-of-the-void-CzHkgitP.mjs.map
