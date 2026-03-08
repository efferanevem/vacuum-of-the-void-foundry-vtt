var Si = Object.defineProperty;
var Ti = Object.getPrototypeOf;
var _i = Reflect.get;
var Di = (w, i, e) => i in w ? Si(w, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[i] = e;
var J = (w, i, e) => Di(w, typeof i != "symbol" ? i + "" : i, e);
var U = (w, i, e) => _i(Ti(w), e, i);
const { HTMLField: Oi, NumberField: q, SchemaField: K, StringField: T, BooleanField: ee, ArrayField: tt } = foundry.data.fields;
class hi extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new tt(
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
        armor: new tt(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new T({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new T({ required: !1, blank: !0, initial: "" }),
            level: new T({ required: !1, blank: !0, initial: "" }),
            other: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new tt(
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
          items: new tt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new tt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new Oi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: vt, SchemaField: Ci } = foundry.data.fields;
class qi extends hi {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ci({
        body: new vt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new vt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new vt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Li, NumberField: Hi, StringField: Oe } = foundry.data.fields;
class Qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Li({ required: !1, initial: !1 }),
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
const { BooleanField: Ni, StringField: ht } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ni({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ht({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ht({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new ht({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ht({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: wt, StringField: Xt } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Xt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Xt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new wt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new wt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new wt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Pi, StringField: Zt } = foundry.data.fields;
class ei extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Zt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Zt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Pi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ti } = foundry.data.fields;
class Ei extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ti({ required: !1, blank: !0, initial: "" }),
      quantity: new ti({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: $i } = foundry.data.fields;
class xi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $i({ required: !1, blank: !0, initial: "" })
    };
  }
}
function It(w) {
  if (!w || !Array.isArray(w.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let n = !1;
  const d = (u, s = 1) => {
    if (!Array.isArray(u)) return;
    let c = s;
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
      const r = typeof o.faces == "number" ? o.faces : void 0, f = Array.isArray(o.results) ? o.results : null;
      if (!r || !f || r === 8 || r !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, i) : c >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const a = i.filter((u) => u === 6).length, l = i.filter((u) => u === 1).length, m = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, y = a + m, b = l + p;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ri(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var ii, si, ni, ai;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
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
  _getScrollContainers(i) {
    var n, d, a, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, a = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, f = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      f && h && (l.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const m = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const p = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, s = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var r, f;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = y.querySelector) == null ? void 0 : r.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (s || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), a = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const l = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const l = String(((d = a.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(i) {
    var n, d;
    const e = (((n = i == null ? void 0 : i.items) == null ? void 0 : n.contents) ?? []).filter(
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
  static getTotalSpeedRaw(i) {
    var y, b, u, s, c, o, r, f, h;
    if (!(i != null && i.system)) return 0;
    const e = i.system.resources ?? {}, t = ((b = (y = e.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : b.value) ?? 0, n = ((u = e.currentHealth) == null ? void 0 : u.legs) ?? 0, d = B._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const a = Number(((c = (s = i.system) == null ? void 0 : s.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let l;
    d === 1 ? l = -6 : d === 2 ? l = -3 : l = a, l += B._getTotalArmorSpeedPenaltyStatic(i);
    const m = Number(((r = (o = i.system) == null ? void 0 : o.combat) == null ? void 0 : r.speed) ?? 0) || 0, p = Number(((h = (f = i.system) == null ? void 0 : f.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(l) ? l : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(i) {
    var e, t;
    return (t = (e = i == null ? void 0 : i.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : B.getTotalSpeedRaw(i);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(i = null) {
    var b, u, s, c, o, r, f, h, v, I, S, _;
    const e = i ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (s = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : s.has) != null && c.call(s, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : r.resources) ?? {}, d = ((h = (f = n.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, a = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, l = B._healthStatusFromRatio(a, d), m = Number(((_ = (S = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : S.combat) == null ? void 0 : _.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = m;
    const y = this._getTotalArmorSpeedPenalty();
    p += y, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés státusz (+1). */
  _writeEffectiveGivenProtection(i = null) {
    var l, m, p, y, b, u, s;
    const e = i ?? this.form ?? this.element;
    let t = (l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((y = (p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0, d = (s = (u = (b = this.actor) == null ? void 0 : b.statuses) == null ? void 0 : u.has) != null && s.call(u, "lookaround") ? 1 : 0, a = n + this._getTotalArmorProtectionBonus() + d;
    t.textContent = String(a);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(i = null) {
    const e = i ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), a = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(a == null ? void 0 : a.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + y);
  }
  _writeTotalSpeed(i = null) {
    var o, r, f, h, v, I, S, _;
    const e = i ?? this.form ?? this.element, t = (L) => {
      var A;
      return ((A = e == null ? void 0 : e.querySelector) == null ? void 0 : A.call(e, L)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${L}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), a = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((f = (r = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : r.has) != null && f.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, p = ((S = (I = m.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : S.value) ?? 0, y = ((_ = m.currentHealth) == null ? void 0 : _.legs) ?? 0;
    if (B._healthStatusFromRatio(y, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(a == null ? void 0 : a.value) || 0, s = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + s + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, l, m, p;
    const e = B.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((m = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return B._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var l, m, p, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = i == null ? void 0 : i.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, a = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(a, d);
  }
  async _prepareContext(i) {
    var We, Ye, Je, k, P, E, j, ce, Q, Se, be, Te, ke, ve, Ae, pt, ft, yt, gt, Qe, $e, Lt, Nt, At, Ft, Pt, Et, $t, xt, Rt, Mt, Kt, jt, zt, Ht, Ut, Bt, Gt, Vt;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Je = (Ye = (We = this.actor.system) == null ? void 0 : We.resources) == null ? void 0 : Ye.stress) == null ? void 0 : Je.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, a = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const O = ((k = d[g]) == null ? void 0 : k.value) ?? 0, D = a[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(D, O);
    }
    const m = (Number(a.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(a[g]) || 0) === 0).length;
    e.showDeathSkull = m || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((E = (P = this.actor.system) == null ? void 0 : P.combat) == null ? void 0 : E.givenSpeed) ?? 0) || 0;
    let s;
    b === 0 ? s = 0 : b === 1 ? s = -6 : b === 2 ? s = -3 : s = u;
    const c = this._getTotalArmorSpeedPenalty();
    s += c, e.effectiveGivenSpeed = s;
    const o = Number(((ce = (j = this.actor.system) == null ? void 0 : j.combat) == null ? void 0 : ce.givenProtection) ?? 0) || 0, r = (be = (Se = (Q = this.actor) == null ? void 0 : Q.statuses) == null ? void 0 : Se.has) != null && be.call(Se, "lookaround") ? 1 : 0, f = o + this._getTotalArmorProtectionBonus() + r;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: s, givenProtection: f } },
      { inplace: !1 }
    );
    const h = ((Te = e.system) == null ? void 0 : Te.combat) ?? {};
    e.totalDefense = (Number(h.defense) || 0) + (Number(h.defenseBonus) || 0) + (Number(h.givenProtection) || 0);
    const v = Number(h.givenSpeed);
    let I = (Number(h.speed) || 0) + (Number(h.speedBonus) || 0) + (Number.isFinite(v) ? v : 0);
    b === 0 && (I = 0), (Ae = (ve = (ke = this.actor) == null ? void 0 : ke.statuses) == null ? void 0 : ve.has) != null && Ae.call(ve, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (ft = (pt = e.system) == null ? void 0 : pt.combat) == null ? void 0 : ft.givenProtection } },
      { inplace: !1 }
    ), I = 0), e.totalSpeed = I;
    const S = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(S)) {
      const D = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (_.slotOrder ?? "").trim(), C = A ? A.split(/\s*,\s*/).filter((g) => L.includes(g)) : [], x = (yt = this.actor.system.gear) == null ? void 0 : yt.microchips, N = x && typeof x == "object" && !Array.isArray(x) ? x : {}, z = (((gt = N.slot1) == null ? void 0 : gt.itemId) ?? "").trim(), G = (((Qe = N.slot2) == null ? void 0 : Qe.itemId) ?? "").trim(), H = ((($e = N.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), se = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const D = typeof g.sort == "number" ? g.sort : 0, F = typeof O.sort == "number" ? O.sort : 0;
      return D - F;
    }).map((g) => {
      var we, Pe, Ee, _e, De, Ze;
      const O = g.type === "Fegyver", D = g.type === "MikroChip";
      let F = 0, M = "", Z = null;
      for (let xe = 0; xe < C.length; xe++) {
        const et = C[xe];
        if ((((we = _[et]) == null ? void 0 : we.itemId) ?? "") === g.id) {
          F = xe + 1, M = ((Pe = _[et]) == null ? void 0 : Pe.bonus) ?? "", Z = et;
          break;
        }
      }
      let X = null;
      D && (z === g.id ? X = "slot1" : G === g.id ? X = "slot2" : H === g.id && (X = "slot3"));
      const Xe = O && ((Ee = g.system) != null && Ee.damage) ? g.system.damage : "", le = O && typeof ((_e = g.system) == null ? void 0 : _e.range) == "string" ? (g.system.range || "").trim() : "", Fe = Z ? Number((De = _[Z]) == null ? void 0 : De.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: F,
        slotBonus: M,
        slotKey: Z,
        microchipSlotKey: X,
        isEquipped: !!(Z || X),
        damage: Xe,
        rangeStr: le,
        slotBonusNum: Fe,
        quantity: Number(((Ze = g.system) == null ? void 0 : Ze.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = se;
    const Y = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((g) => g.type === "Fegyver"), R = Y.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = R;
    const W = "— Nincs fegyver —", oe = C.filter((g) => {
      const D = ((_[g] ?? {}).itemId ?? "").trim();
      return D ? !!Y.find((M) => M.id === D) : !1;
    });
    e.weaponSlots = oe.map((g, O) => {
      const D = _[g] ?? {}, F = (D.itemId ?? "").trim(), M = R.find((Z) => Z.id === F);
      return {
        slotKey: g,
        itemId: F,
        slotNum: O + 1,
        displayName: (M == null ? void 0 : M.name) || D.name || W,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ge = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ne = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = Y.map((g) => {
      var Wt, Yt, Jt;
      const O = g.id;
      let D = null, F = {};
      for (const kt of C)
        if ((((Wt = _[kt]) == null ? void 0 : Wt.itemId) ?? "").trim() === O) {
          D = kt, F = _[kt] ?? {};
          break;
        }
      const M = !!D, Z = ((Yt = g.system) == null ? void 0 : Yt.equipped) !== void 0 && ((Jt = g.system) == null ? void 0 : Jt.equipped) !== null ? !!g.system.equipped : M, X = (g == null ? void 0 : g.system) ?? {}, Xe = typeof X.range == "string" ? (X.range || "").trim() : "", le = X.type ?? "", Fe = (ge[le] ?? le) || "—", we = X.size ?? "", Pe = (ne[we] ?? we) || "", Ee = [Fe, Pe].filter(Boolean).join(", ") || Fe || "—", _e = le === "projectile" || we === "thrown", De = X.quantity, Ze = De != null ? String(De).trim() : "1", xe = String(F.bonus ?? "").trim(), et = String(X.bonus ?? "").trim(), Ii = xe || et || "0";
      return {
        slotKey: D ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? W,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Ii,
        damage: F.damage ?? X.damage ?? "",
        rangeStr: Xe || "—",
        typeLabel: Fe,
        typeAndSize: Ee,
        quantity: Ze,
        quantityDisplay: _e ? Ze : "—",
        isProjectile: _e,
        equipped: Z,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const Re = (((Nt = this.actor.items) == null ? void 0 : Nt.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Re.map((g) => {
      var F, M;
      const O = (g == null ? void 0 : g.system) ?? {}, D = ((F = g.system) == null ? void 0 : F.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const te = (((At = this.actor.items) == null ? void 0 : At.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = te.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, D = (O.description ?? "").trim(), F = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", M = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: F
      };
    });
    const re = (((Ft = this.actor.items) == null ? void 0 : Ft.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = re.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), F = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: F
      };
    });
    const ae = (((Pt = this.actor.items) == null ? void 0 : Pt.contents) ?? []).filter((g) => g.type === "MikroChip"), Ce = ae.map((g) => ({ id: g.id, name: g.name, img: g.img })), Me = "— Nincs Mikro-Chip —", st = ["slot1", "slot2", "slot3"], nt = (g) => {
      var D, F, M;
      const O = [];
      return g !== 1 && O.push((((D = N.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && O.push((((F = N.slot2) == null ? void 0 : F.itemId) ?? "").trim()), g !== 3 && O.push((((M = N.slot3) == null ? void 0 : M.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = Ce.filter((g) => !nt(1).includes(g.id)), e.microchipItemsSlot2 = Ce.filter((g) => !nt(2).includes(g.id)), e.microchipItemsSlot3 = Ce.filter((g) => !nt(3).includes(g.id)), e.microchipSlots = st.map((g) => {
      const O = N[g] ?? {}, D = (O.itemId ?? "").trim(), F = ae.find((M) => M.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (F == null ? void 0 : F.name) || O.name || Me,
        img: (F == null ? void 0 : F.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, D = N[O] ?? {}, F = (D.itemId ?? "").trim(), M = Ce.find((Z) => Z.id === F);
      e[`microchip${g}ItemId`] = F, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || D.name || Me, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = ae.map((g) => {
      var we, Pe, Ee, _e;
      const O = g.id;
      let D = null;
      for (const De of st)
        if ((((we = N[De]) == null ? void 0 : we.itemId) ?? "").trim() === O) {
          D = De;
          break;
        }
      const F = !!D, M = ((Pe = g == null ? void 0 : g.system) == null ? void 0 : Pe.abilityType) ?? "", Z = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", X = M === "active", Xe = Number((Ee = g == null ? void 0 : g.system) == null ? void 0 : Ee.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, le = (((_e = g == null ? void 0 : g.system) == null ? void 0 : _e.description) ?? "").trim(), Fe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: Z,
        description: Fe,
        kp: Xe,
        isActive: X,
        slotKey: D ?? "",
        equipped: F
      };
    });
    const Ke = (((Et = e.weaponsTable) == null ? void 0 : Et.length) ?? 0) > 0 || ((($t = e.armorTable) == null ? void 0 : $t.length) ?? 0) > 0 || (((xt = e.microchipsTable) == null ? void 0 : xt.length) ?? 0) > 0 || (((Rt = e.itemsTable) == null ? void 0 : Rt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const je = this.actor.system.abilities ?? {}, at = (((Mt = this.actor.items) == null ? void 0 : Mt.contents) ?? []).map((g) => {
      var O, D, F;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((F = g.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), ze = new Map(at.map((g) => [g.id, g])), rt = "— Nincs képesség —", He = (g) => {
      const O = je[g] ?? {}, D = (O.itemId ?? "").trim(), F = D ? ze.get(D) : null, M = (F == null ? void 0 : F.description) ?? "", Z = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: D,
        displayName: (F == null ? void 0 : F.name) || O.name || rt,
        img: (F == null ? void 0 : F.img) || "",
        description: M,
        kp: Z
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ue = (g) => {
      const O = je[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Be = (g) => g.map((O) => {
      const D = ze.get(O);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Be(Ue("passive")), e.abilityActiveList = Be(Ue("active"));
    const ot = ((Kt = e.system) == null ? void 0 : Kt.resources) ?? {}, ct = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], qe = (zt = (jt = e.system) == null ? void 0 : jt.combat) == null ? void 0 : zt.initiativeResult, he = typeof qe == "number" ? qe : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ge = (Ut = (Ht = e.system) == null ? void 0 : Ht.combat) == null ? void 0 : Ut.initiativeRanges, Le = Array.isArray(Ge) ? Ge.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Ie = (Le.length > 0 ? Le : lt).slice().sort((g, O) => g.min - O.min), Ne = Le.map((g) => g.min), ut = Ne.length ? Math.min(...Ne) : 0, dt = Ne.length ? Math.max(...Ne) : 0;
    e.initiativeRanges = Le.map((g) => ({ ...g, isFirst: g.min === ut, isLast: g.min === dt }));
    let Ve = 0;
    if (typeof he == "number" && he >= 0 && Ie.length > 0) {
      const g = Ie[0], O = Ie[Ie.length - 1];
      let D = null;
      he <= g.max ? D = g : he >= O.min ? D = O : D = Ie.find((F) => he >= F.min && he <= F.max), D && (Ve = D.kp);
    }
    e.kpDots = ct.map((g, O) => {
      const D = O + 1, F = !!Number(ot[g]), M = D <= Ve;
      return { index: D, used: F, usable: M };
    });
    const mt = !!((Gt = (Bt = game.combat) == null ? void 0 : Bt.combatants) != null && Gt.some((g) => {
      var O;
      return ((O = g.actor) == null ? void 0 : O.type) === "Karakter";
    }));
    return e.showHarcSection = mt, e.canEditInitiative = !!((Vt = game.user) != null && Vt.isGM), e.showInitiativeResult = typeof qe == "number", e.initiativeResult = e.showInitiativeResult ? qe : "", e;
  }
  _attachFrameListeners(i) {
    var b, u;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const o = (s.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var r, f, h;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((f = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : f.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (s) => {
      var h, v;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const r = `system.resources.kpDot${o}`, f = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [r]: f ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (s) => {
      var r;
      const c = s ? s.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
    const a = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', a), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(i), this._writeTotalDefense(e), this._writeTotalSpeed(i), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var r, f, h;
      s.preventDefault(), s.stopPropagation();
      const c = ((h = (f = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var h;
      s.preventDefault();
      const c = s.currentTarget, o = c.dataset.skill, r = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      f(this.actor, o, r);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var I, S, _, L, A, C, x;
      s.preventDefault();
      const o = s.currentTarget.closest(".karakter-weapon-slot"), r = o == null ? void 0 : o.dataset.slot;
      if (!r) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[r]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((L = (_ = this.actor.items).get) == null ? void 0 : L.call(_, h)) ?? ((C = (A = this.actor.items.contents) == null ? void 0 : A.find) == null ? void 0 : C.call(A, (N) => N.id === h));
      (x = v == null ? void 0 : v.sheet) == null || x.render(!0);
    });
    const l = (s, c) => {
      var f;
      const o = s.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (r) {
        if (s.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = s.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = r.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const c = s.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      let f = Number(c.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await r.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, f = r.items.get(o);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = I ? I.split(/\s*,\s*/).filter((A) => S.includes(A)) : [], L = _.find((A) => {
          var C;
          return (((C = v[A]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (L) {
          const A = _.filter((C) => C !== L);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var L, A;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], S = I.find((C) => {
        var x;
        return (((x = f[C]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let C = I.find((N) => {
          var z;
          return !((z = f[N]) != null && z.itemId);
        });
        const x = new Set(I);
        if (!C) {
          const N = v.find((z) => !x.has(z));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${C}.damage`]: ((L = r == null ? void 0 : r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((A = r == null ? void 0 : r.system) == null ? void 0 : A.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (S) {
        const C = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const c = s.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var C;
      s.preventDefault();
      const c = s.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = r == null ? void 0 : r.dataset.slot;
      if (!f) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let _ = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (_ || (_ = document.createElement("img"), _.className = "karakter-microchip-slot-thumb", _.alt = "", r == null || r.insertBefore(_, S)), _.src = I, _.style.display = "") : _ && _.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, A = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (A[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var v, I;
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const r = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var _;
        return (((_ = r[S]) == null ? void 0 : _.itemId) ?? "").trim() === c;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const c = s.currentTarget.dataset.slot;
      if (!c) return;
      const o = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var f;
        return (f = r.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, o));
    }), t.find(".karakter-ability-slot-single").each((s, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var f;
        return (f = r.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var f;
        (f = r.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var f;
        return (f = r.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var f;
        (f = r.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var v;
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.area, o = s.currentTarget.dataset.itemId;
      if (!c || !o) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[c]) == null ? void 0 : v.items) ? r[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var f;
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      (f = r == null ? void 0 : r.sheet) == null || f.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(o) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const f = (c.value ?? "").trim();
      await r.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var L, A;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], S = I.find((C) => {
        var x;
        return (((x = f[C]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let C = I.find((N) => {
          var z;
          return !((z = f[N]) != null && z.itemId);
        });
        const x = new Set(I);
        if (!C) {
          const N = v.find((z) => !x.has(z));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: r.name ?? "",
          [`system.weapons.${C}.damage`]: ((L = r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((A = r.system) == null ? void 0 : A.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (S) {
        const C = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, f = r.items.get(o), h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = I ? I.split(/\s*,\s*/).filter((A) => S.includes(A)) : [], L = _.find((A) => {
          var C;
          return (((C = v[A]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (L) {
          const A = _.filter((C) => C !== L);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Targy") return;
      const f = (c.value ?? "").trim();
      await r.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const m = this, p = (s) => {
      var r, f, h, v;
      if (!s) return;
      const c = m._getFormDataForUpdate(s);
      if (Object.keys(c).length === 0) return;
      const o = ((f = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : f.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      m.actor.update(c).then(() => {
        o && setTimeout(() => m.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (s) => {
      var c, o, r;
      return s && (((o = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, s)) || m.id && ((r = s.closest) == null ? void 0 : r.call(s, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (s) => {
      var h;
      const c = s.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const r = c.form;
      if (!y(r)) return;
      const f = s.relatedTarget;
      f && (r.contains(f) || m.id && ((h = f.closest) != null && h.call(f, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(r));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var l, m, p;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const y of a) {
      const b = ((p = n[y]) == null ? void 0 : p.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, n, d, a, l, m, p, y, b, u, s, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            o = r;
            break;
          }
      }
      if (o) {
        const r = await fromUuid(o);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let f = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const _ = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const h = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": r.name
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
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            o = r;
            break;
          }
      }
      if (o) {
        const r = await fromUuid(o);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const f = this.actor, h = ((p = r.parent) == null ? void 0 : p.id) !== f.id;
          let v = r.id;
          if (h) {
            const I = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await f.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const I = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, S = (I.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((C) => _.includes(C)) : [], A = L.filter((C) => {
              var x;
              return (((x = I[C]) == null ? void 0 : x.itemId) ?? "").trim() === v;
            });
            if (A.length > 0) {
              const x = {
                "system.weapons.slotOrder": L.filter((N) => !A.includes(N)).join(",")
              };
              for (const N of A)
                x[`system.weapons.${N}.itemId`] = "", x[`system.weapons.${N}.name`] = "", x[`system.weapons.${N}.damage`] = "", x[`system.weapons.${N}.bonus`] = "";
              await f.update(x);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const f = this.actor;
          if (((u = r.parent) == null ? void 0 : u.id) !== f.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const f = this.actor;
          ((s = r.parent) == null ? void 0 : s.id) !== f.id && await f.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const f = this.actor;
          ((c = r.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, a, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var l, m, p, y, b, u;
    i.preventDefault(), i.stopPropagation(), (l = i.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
      const s = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [s]);
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
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var n;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (n = i.currentTarget) == null || n.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var p, y;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const s = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return s - c;
    }).map((b) => b.id), a = d.indexOf(t), l = d.indexOf(e);
    if (a === -1 || l === -1) return;
    d.splice(a, 1), d.splice(l, 0, t);
    const m = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(i) {
    var n, d, a;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  /** Lőszer mező: mindig fit-content (CSS field-sizing + JS fallback az input klónjával). */
  _resizeWeaponQuantityInput(i) {
    if (!i || i.type !== "text") return;
    const e = 20;
    if (!i.value || String(i.value).trim() === "") {
      i.style.width = "";
      return;
    }
    const t = i.cloneNode(!1);
    t.value = i.value, t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "0", t.style.width = "1px", t.style.visibility = "hidden", t.removeAttribute("data-item-id"), document.body.appendChild(t);
    const n = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, n)}px`;
  }
  async _postItemToChat(i) {
    var m, p, y;
    const e = this.actor.items.get(i);
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
  async _postAbilityToChat(i) {
    var y, b, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
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
  _parseAbilityDrop(i) {
    var n, d;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(i, e) {
    var n;
    this._parseAbilityDrop(i) && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var a, l, m;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
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
  _onAbilityAreaDragOver(i, e) {
    var n;
    this._parseAbilityDrop(i) && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var m, p, y, b;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const a = this.actor.system.abilities ?? {}, l = Array.isArray((b = a[e]) == null ? void 0 : b.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, a, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var l, m, p, y, b;
    i.preventDefault(), (l = i.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(n) || 0;
    const a = this._getSkillHealthStatus(i);
    a === 1 ? d -= 6 : a === 2 && (d -= 3);
    const m = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(m);
    await p.evaluate({ async: !0 });
    const { resultType: y, label: b } = It(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: b } },
      rollMode: u
    });
  }
  async _rollMorale() {
    var d;
    const i = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
    if (i <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const n = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": n });
  }
  async _rollInitiative() {
    var a;
    const i = Number(((a = this.actor.system.skills) == null ? void 0 : a.quickThinking) ?? 0) || 0, t = `1d20${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _rollWeapon(i) {
    var I, S;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((_) => _.type === "Fegyver");
    let a = null;
    t.itemId && (a = d.find((_) => _.id === t.itemId) ?? null);
    const l = a && a.name || t.name || `Fegyver (${i})`, m = Number(t.bonus || 0) || 0, p = ((I = a == null ? void 0 : a.system) == null ? void 0 : I.type) || "kinetic", y = (((S = a == null ? void 0 : a.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, s = m + u, o = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, r = new Roll(o);
    await r.evaluate({ async: !0 });
    const { resultType: f, label: h } = It(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var m, p, y, b, u, s, c, o, r, f;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, i)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
J(B, "PARTS", foundry.utils.mergeObject(
  U(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), J(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((ii = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((si = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : si.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ai = (ni = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ni.window) == null ? void 0 : ai.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
J(B, "BODY_PART_BY_SKILL", {
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
let it = B;
function Mi(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var ri, oi, ci, li;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var n, d, a, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    const t = this.element, n = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const s = document.activeElement, c = n.contains(s), o = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: s.name || null,
        id: s.id || null,
        selectionStart: "selectionStart" in s ? s.selectionStart : 0,
        selectionEnd: "selectionEnd" in s ? s.selectionEnd : 0
      });
    }
    const a = await super.render(i, e), l = this.element, m = this.form ?? this.element, p = d.scrollState, y = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var s, c;
      if (this._applyScrollState(l, p), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((s = m.querySelector) == null ? void 0 : s.call(m, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = m.querySelector) == null ? void 0 : c.call(m, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), a;
  }
  async _prepareContext(i) {
    var at, ze, rt, He, Ue, Be, ot, ct, qe, he, lt, Ge, Le, bt, Ie, Ne, ut, dt, Ve, mt, We, Ye, Je;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((at = this.actor) == null ? void 0 : at.system), e.showDeathSkull = !1, e.sizeForSelect = (((rt = (ze = e.system) == null ? void 0 : ze.identity) == null ? void 0 : rt.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((He = t == null ? void 0 : t.items) == null ? void 0 : He.contents) ?? [], d = ((Ue = t == null ? void 0 : t.system) == null ? void 0 : Ue.weapons) ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), m = l ? l.split(/\s*,\s*/).filter((k) => a.includes(k)) : [], p = n.filter((k) => k.type === "Fegyver"), y = p.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = m.length > 0 ? m : a, s = a.filter((k) => !u.includes(k)), c = [...u, ...s], o = c.filter((k) => {
      var E;
      const P = (((E = d[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return P && p.some((j) => j.id === P);
    });
    e.weaponSlots = o.map((k) => {
      const P = d[k] ?? {}, E = (P.itemId ?? "").trim(), j = y.find((ce) => ce.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (j == null ? void 0 : j.name) || P.name || b,
        img: (j == null ? void 0 : j.img) || ""
      };
    });
    const r = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = p.map((k) => {
      var Qe;
      const P = k.id;
      let E = null, j = {};
      for (const $e of c)
        if ((((Qe = d[$e]) == null ? void 0 : Qe.itemId) ?? "").trim() === P) {
          E = $e, j = d[$e] ?? {};
          break;
        }
      const ce = !!E, Q = (k == null ? void 0 : k.system) ?? {}, Se = typeof Q.range == "string" ? (Q.range || "").trim() : "", be = Q.type ?? "", Te = (r[be] ?? be) || "—", ke = Q.size ?? "", ve = (f[ke] ?? ke) || "", Ae = [Te, ve].filter(Boolean).join(", ") || Te || "—", pt = be === "projectile" || ke === "thrown", ft = Q.quantity != null ? String(Q.quantity).trim() : "1", yt = String(Q.bonus ?? j.bonus ?? "").trim() || "0", gt = (Q.damage ?? j.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: P,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: yt,
        damage: gt,
        rangeStr: Se || "—",
        typeAndSize: Ae,
        quantity: ft,
        isProjectile: pt,
        equipped: ce,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const h = n.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var j;
      const P = (k == null ? void 0 : k.system) ?? {}, E = ((j = k.system) == null ? void 0 : j.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const v = ((ot = (Be = t == null ? void 0 : t.system) == null ? void 0 : Be.gear) == null ? void 0 : ot.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], S = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = S.map((k) => {
      var be, Te, ke, ve;
      const P = k.id;
      let E = null;
      for (const Ae of I)
        if ((((be = v[Ae]) == null ? void 0 : be.itemId) ?? "").trim() === P) {
          E = Ae;
          break;
        }
      const j = ((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.abilityType) ?? "", ce = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", Q = (((ke = k == null ? void 0 : k.system) == null ? void 0 : ke.description) ?? "").trim(), Se = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ce,
        description: Se,
        kp: Number((ve = k == null ? void 0 : k.system) == null ? void 0 : ve.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: j === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const _ = n.filter((k) => k.type === "Targy");
    e.itemsTable = _.map((k) => {
      const P = (k == null ? void 0 : k.system) ?? {}, E = (P.description ?? "").trim(), j = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: j
      };
    });
    const L = n.filter((k) => k.type === "Egyeb");
    e.egyebList = L.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), j = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: j
      };
    });
    const A = (((ct = e.weaponsTable) == null ? void 0 : ct.length) ?? 0) > 0 || (((qe = e.armorTable) == null ? void 0 : qe.length) ?? 0) > 0 || (((he = e.microchipsTable) == null ? void 0 : he.length) ?? 0) > 0 || (((lt = e.itemsTable) == null ? void 0 : lt.length) ?? 0) > 0 || (((Ge = e.egyebList) == null ? void 0 : Ge.length) ?? 0) > 0;
    e.showEquipmentDropZone = !A;
    const C = ((Le = t == null ? void 0 : t.system) == null ? void 0 : Le.abilities) ?? {}, x = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var P, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((P = k.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), N = new Map(x.map((k) => [k.id, k])), z = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = z, e.abilityHatterSlot = z;
    const G = (k) => {
      const P = C[k];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, H = (k) => (k || []).map((P) => {
      const E = N.get(P);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = H(G("passive")), e.abilityActiveList = H(G("active"));
    const V = t == null ? void 0 : t.id, se = !!((Ie = (bt = game.combat) == null ? void 0 : bt.combatants) != null && Ie.some(
      (k) => {
        var P;
        return (((P = k.actor) == null ? void 0 : P.id) ?? k.actorId) === V;
      }
    ));
    e.showHarcSection = se;
    const Y = ((Ne = e.system) == null ? void 0 : Ne.resources) ?? {}, R = (dt = (ut = e.system) == null ? void 0 : ut.combat) == null ? void 0 : dt.initiativeResult, W = typeof R == "number" ? R : -1, oe = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ge = (mt = (Ve = e.system) == null ? void 0 : Ve.combat) == null ? void 0 : mt.initiativeRanges, ne = Array.isArray(ge) ? ge.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], te = (ne.length > 0 ? ne : oe).slice().sort((k, P) => k.min - P.min), re = 3;
    let ae = ne.length > 0 ? ne : [];
    ae.length < re && (ae = [...ae, ...Array(re - ae.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ae.map((k, P) => ({
      ...k,
      isFirst: P === 0,
      isLast: P === ae.length - 1
    }));
    let Ce = 0;
    if (typeof W == "number" && W >= 0 && te.length > 0) {
      const k = te[0], P = te[te.length - 1];
      let E = null;
      W <= k.max ? E = k : W >= P.min ? E = P : E = te.find((j) => W >= j.min && W <= j.max), E && (Ce = E.kp);
    }
    const Me = te.length > 0 ? te[te.length - 1] : null, st = Math.min(10, Me ? Me.kp : 6), Ke = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, st)).map((k, P) => {
      const E = P + 1, j = !!Number(Y[k]), ce = E <= Ce;
      return { index: E, used: j, usable: ce };
    }), je = Math.ceil(Ke.length / 2);
    return e.kpDotsRow1 = Ke.slice(0, je), e.kpDotsRow2 = Ke.slice(je), e.canEditInitiative = !!((We = game.user) != null && We.isGM), e.showInitiativeResult = typeof R == "number", e.initiativeResult = e.showInitiativeResult ? R : "", e.speedUnitForSelect = ((Je = (Ye = e.system) == null ? void 0 : Ye.combat) == null ? void 0 : Je.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(i) {
    var p, y, b;
    super._attachFrameListeners(i);
    const e = ((p = i == null ? void 0 : i.querySelector) == null ? void 0 : p.call(i, "form.votv.npc-sheet")) ?? i ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, r, f;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const s = ((f = (r = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new s({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, r, f;
      u.preventDefault();
      const s = (r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (f = c == null ? void 0 : c.sheet) == null || f.render(!0);
    });
    const n = (u) => {
      var o, r;
      const s = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, f, h, v;
      u.preventDefault();
      const s = (f = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : f.call(r, ".karakter-weapon-slot"), c = (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = (((r = s == null ? void 0 : s.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, r, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget;
      let c = (((o = s == null ? void 0 : s.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((r = s == null ? void 0 : s.dataset) != null && r.slot) && (c = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[s.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: s } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      s(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var r, f;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = parseInt(s.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const o = !!Number((f = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : f[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var f, h;
      u.preventDefault();
      const s = u.currentTarget, c = (((f = s == null ? void 0 : s.dataset) == null ? void 0 : f.skill) ?? "").trim(), o = ((h = s == null ? void 0 : s.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-Bf5_Ru-P.mjs");
      r(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const s = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      s && await this._postAbilityToChat(s);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, r;
      u.preventDefault();
      const s = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(s) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(s));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, S, _, L;
      if (u.preventDefault(), !u.altKey) return;
      const s = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!s || !c || !this.actor) return;
      const o = ((_ = this.actor.system) == null ? void 0 : _.abilities) ?? {}, f = (Array.isArray((L = o[s]) == null ? void 0 : L.items) ? o[s].items.slice() : []).filter((A) => A !== c);
      await this.actor.update({ [`system.abilities.${s}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const s = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      s && (await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const s = u.currentTarget, c = (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, r = (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      r && (f[`system.weapons.${r}.itemId`] = "", f[`system.weapons.${r}.name`] = "", f[`system.weapons.${r}.damage`] = "", f[`system.weapons.${r}.bonus`] = ""), Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !s || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var f, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((h = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((S) => {
        var _;
        return (((_ = c[S]) == null ? void 0 : _.itemId) ?? "").trim() === s;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, r;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var s;
      (((s = u.dataset) == null ? void 0 : s.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var f, h, v;
      const s = u.currentTarget, c = (h = (f = s == null ? void 0 : s.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const r = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && s && u.dataTransfer.setDragImage(s, 0, 0);
    });
    const a = this, l = (u) => {
      if (!u) return;
      const s = a._getFormDataForUpdate(u);
      Object.keys(s).length !== 0 && a.actor.update(s).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, m = (u) => {
      var s, c, o;
      return u && (((c = (s = a.element) == null ? void 0 : s.contains) == null ? void 0 : c.call(s, u)) || a.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (u) => {
      var f;
      const s = u.target;
      if (!s || !s.form) return;
      const c = s.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = s.form;
      if (!m(o)) return;
      const r = u.relatedTarget;
      r && (o.contains(r) || a.id && ((f = r.closest) != null && f.call(r, `#${CSS.escape(a.id)}`))) || l(o);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (u, s, c) => {
      var o;
      a.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (u, s, c) => {
      var o;
      a.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === a.actor.id && a.render(!0);
    }, Hooks.on("updateItem", a._votvNpcItemUpdateHook), Hooks.on("deleteItem", a._votvNpcItemDeleteHook), a._votvNpcItemHookRegistered = !0);
  }
  async _preClose(i) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && await this.actor.update(a).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, i);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  /**
   * Támadás dobás NPC-nek – ugyanolyan képlet, mint a karakter lapon:
   * 3d6 + (Kézifegyver Használat / Löveghasználat + fegyver bónusz)
   * @param {string} slot - pl. "slot1"
   */
  async _rollWeapon(i) {
    var S, _, L, A, C;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[i] ?? {}, d = ((_ = e.system) == null ? void 0 : _.skills) ?? {}, a = ((L = e.items) == null ? void 0 : L.filter((x) => x.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = a.find((x) => x.id === n.itemId) ?? null);
    const m = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, y = ((A = l == null ? void 0 : l.system) == null ? void 0 : A.type) || "kinetic", b = (((C = l == null ? void 0 : l.system) == null ? void 0 : C.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", s = Number(d[u] || 0) || 0, c = p + s, r = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, f = new Roll(r);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = It(f), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var m, p, y, b, u, s, c, o, r, f;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, i)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
  async _onDropItem(i, e) {
    var y, b, u, s, c, o, r, f, h, v, I, S, _, L, A, C, x;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, i, e);
    const n = ((N) => {
      var G;
      if (!N) return null;
      const z = N.uuid ?? N.documentUuid ?? ((G = N.data) == null ? void 0 : G.uuid) ?? (typeof N == "string" ? N : null);
      if (z) return z;
      if (typeof N == "object") {
        for (const H of Object.values(N))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, i, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, i, e);
    if (d.type === "Pancel") {
      (c = (s = ui.notifications) == null ? void 0 : s.info) == null || c.call(s, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const a = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== a.id) {
        const se = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((r = (await a.createEmbeddedDocuments("Item", [se]))[0]) == null ? void 0 : r.id) ?? N;
      }
      const z = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), G = ((h = a.system) == null ? void 0 : h.abilities) ?? {}, H = z === "active" ? "active" : "passive", V = Array.isArray((v = G[H]) == null ? void 0 : v.items) ? G[H].items.slice() : Array.isArray(G[H]) ? G[H].slice() : [];
      V.includes(N) || V.push(N), await a.update({ [`system.abilities.${H}.items`]: V }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === a.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (S = (await a.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && p) {
      const N = ((_ = a.system) == null ? void 0 : _.weapons) ?? {}, z = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], G = (N.slotOrder ?? "").trim(), H = G ? G.split(/\s*,\s*/).filter((Y) => z.includes(Y)) : [];
      let V = z.find((Y) => {
        var R;
        return !(((R = N[Y]) == null ? void 0 : R.itemId) ?? "").trim();
      });
      V || (V = z.find((Y) => !H.includes(Y)) ?? "slot1");
      const se = H.includes(V) ? H : [...H, V].filter((Y) => z.includes(Y));
      await a.update({
        "system.weapons.slotOrder": se.join(","),
        [`system.weapons.${V}.itemId`]: p,
        [`system.weapons.${V}.name`]: d.name ?? "",
        [`system.weapons.${V}.damage`]: ((L = d.system) == null ? void 0 : L.damage) ?? "",
        [`system.weapons.${V}.bonus`]: ((A = d.system) == null ? void 0 : A.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const N = ((x = (C = a.system) == null ? void 0 : C.gear) == null ? void 0 : x.microchips) ?? {}, G = ["slot1", "slot2", "slot3"].find((H) => {
        var V;
        return !(((V = N[H]) == null ? void 0 : V.itemId) ?? "").trim();
      });
      G && await a.update({
        [`system.gear.microchips.${G}.itemId`]: p,
        [`system.gear.microchips.${G}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(i) {
    var y, b, u, s, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((s = e.system) == null ? void 0 : s.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
  async _postItemToChat(i) {
    var m, p, y, b, u, s;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(i);
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
    const a = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((s = this.actor) == null ? void 0 : s.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const n of i.elements) {
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
J(ie, "PARTS", foundry.utils.mergeObject(
  U(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), J(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((ri = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : ri.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((oi = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : oi.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((li = (ci = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : ci.window) == null ? void 0 : li.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let St = ie;
const Ki = [
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
var di;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ki, e;
  }
};
J(ue, "PARTS", foundry.utils.mergeObject(U(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), J(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((di = U(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : di.form) ?? {}, { submitOnChange: !1 })
}));
let Tt = ue;
var mi;
const de = class de extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(de, "PARTS", foundry.utils.mergeObject(U(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), J(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((mi = U(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : mi.form) ?? {}, { submitOnChange: !1 })
}));
let _t = de;
var pi;
const me = class me extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
J(me, "PARTS", foundry.utils.mergeObject(U(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), J(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((pi = U(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : pi.form) ?? {}, { submitOnChange: !1 })
}));
let Dt = me;
var fi;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (a) => {
      var p;
      const l = a.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const m = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      d(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(m), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
J(pe, "PARTS", foundry.utils.mergeObject(U(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), J(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((fi = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : fi.form) ?? {}, { submitOnChange: !0 })
}));
let Ot = pe;
var yi;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(fe, "PARTS", foundry.utils.mergeObject(U(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), J(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(fe, fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((yi = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : yi.form) ?? {}, { submitOnChange: !1 })
}));
let Ct = fe;
var gi;
const ye = class ye extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = a.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
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
      var m, p, y;
      const l = ((m = a.target) == null ? void 0 : m.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(ye, "PARTS", foundry.utils.mergeObject(U(ye, ye, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), J(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ye, ye, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((gi = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : gi.form) ?? {}, { submitOnChange: !1 })
}));
let qt = ye;
const bi = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ki(w) {
  return w === "Apró" ? 0.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
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
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = qi, CONFIG.Actor.dataModels.Npc = hi, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Qt, CONFIG.Item.dataModels.weapon = Qt, CONFIG.Item.dataModels.Pancel = Ai, CONFIG.Item.dataModels.MikroChip = Fi, CONFIG.Item.dataModels.Kepesseg = ei, CONFIG.Item.dataModels.ability = ei, CONFIG.Item.dataModels.Targy = Ei, CONFIG.Item.dataModels.Egyeb = xi, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (a = CONFIG.Combat).initiative ?? (a.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", it, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", St, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Tt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", _t, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Dt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ot, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ct, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", qt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), Hooks.on("updateActor", (m, p, y, b) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const u = m.id;
    setTimeout(() => {
      var r, f, h, v;
      const s = (r = game.actors) == null ? void 0 : r.get(u);
      if (!s || s.type !== "Karakter") return;
      const c = it.getTotalSpeedRaw(s), o = (f = s.effects) == null ? void 0 : f.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !o) {
        const I = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((S) => S.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        s.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: s.uuid
        }]).then(() => {
          var _, L;
          const S = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const A of S)
            ((L = A == null ? void 0 : A.document) == null ? void 0 : L.actorId) === u && typeof A.draw == "function" && A.draw();
        }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect create failed:", S));
      } else c > 0 && o && o.delete().then(() => {
        var S, _;
        const I = ((S = canvas.tokens) == null ? void 0 : S.placeables) ?? [];
        for (const L of I)
          ((_ = L == null ? void 0 : L.document) == null ? void 0 : _.actorId) === u && typeof L.draw == "function" && L.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const i = 500;
  Hooks.on("updateActor", (m, p, y, b) => {
    var S, _, L, A, C, x, N, z, G, H, V, se, Y;
    const u = m == null ? void 0 : m.id;
    if (!u) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((S = p == null ? void 0 : p.system) != null && S.combat) && "initiativeResult" in p.system.combat) {
      const R = Number((L = (_ = m.system) == null ? void 0 : _.combat) == null ? void 0 : L.initiativeResult), W = Number.isFinite(R) ? R : 0, oe = game.combat;
      if (oe) {
        const ge = ((A = oe.combatants) == null ? void 0 : A.contents) ?? Array.from(oe.combatants ?? []);
        for (const ne of ge)
          if (((C = ne.actor) == null ? void 0 : C.id) === u || ne.actorId === u) {
            oe.updateEmbeddedDocuments("Combatant", [{ _id: ne.id, initiative: W }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((x = p == null ? void 0 : p.system) != null && x.identity) && "size" in p.system.identity) {
      const R = ki((z = (N = m.system) == null ? void 0 : N.identity) == null ? void 0 : z.size);
      m.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((W) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, W));
    }
    const s = document.activeElement, c = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA" || s.isContentEditable), o = [], r = (G = game.actors) == null ? void 0 : G.get(u);
    r != null && r.apps && o.push(...Array.from(r.apps));
    const f = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of f)
      ((H = R.document) == null ? void 0 : H.id) !== u || ((V = R.document) == null ? void 0 : V.documentName) !== "Actor" || ((se = R.constructor) == null ? void 0 : se.name) !== "VoidKarakterSheet" || o.includes(R) || o.push(R);
    if (c && o.some((R) => {
      const W = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return W && W.contains(s);
    })) return;
    const v = (Y = game.votv) == null ? void 0 : Y._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < i ? v.appId : null;
    setTimeout(() => {
      for (const R of o)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== I && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, p, y, b) => {
    var o, r, f;
    const u = m == null ? void 0 : m.parent;
    if (!u || u.documentName !== "Actor" || u.type !== "Karakter" || m.type !== "Fegyver") return;
    const s = ((o = u.system) == null ? void 0 : o.weapons) ?? {}, c = {};
    for (const [h, v] of Object.entries(s)) {
      if (!h.startsWith("slot")) continue;
      const I = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !I || I !== m.id || (c[`system.weapons.${h}.name`] = m.name ?? "", c[`system.weapons.${h}.damage`] = ((r = m.system) == null ? void 0 : r.damage) ?? "", c[`system.weapons.${h}.bonus`] = ((f = m.system) == null ? void 0 : f.bonus) ?? "");
    }
    Object.keys(c).length && u.update(c);
  });
});
Hooks.on("ready", () => {
  var w, i;
  document.body.addEventListener("click", async (e) => {
    var f, h, v, I, S, _, L, A, C, x, N, z, G, H, V, se, Y, R, W, oe, ge, ne, Re;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), a = (S = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!a) return;
    const l = a.actorId ?? ((_ = d == null ? void 0 : d.speaker) == null ? void 0 : _.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((L = game.actors) == null ? void 0 : L.get(a.actorId)) ?? ((A = game.actors) == null ? void 0 : A.get(l));
    if (m || (m = ((x = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : x.flatMap((re) => {
      var ae;
      return ((ae = re.tokens) == null ? void 0 : ae.contents) ?? [];
    }).map((re) => re.actor).find((re) => re && (re.id === l || re.id === a.actorId))) ?? null), !m) return;
    const p = a.itemId ? ((z = (N = m.items) == null ? void 0 : N.get) == null ? void 0 : z.call(N, a.itemId)) ?? ((V = (H = (G = m.items) == null ? void 0 : G.contents) == null ? void 0 : H.find) == null ? void 0 : V.call(H, (te) => te.id === a.itemId)) : null;
    let y = (a.damageFormula ?? "").trim();
    if (y || (y = (((se = p == null ? void 0 : p.system) == null ? void 0 : se.damage) ?? "").trim()), !y && a.slotKey && (y = (((((Y = m.system) == null ? void 0 : Y.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (ge = (R = ui.notifications) == null ? void 0 : R.warn) == null || ge.call(R, ((oe = (W = game.i18n) == null ? void 0 : W.localize) == null ? void 0 : oe.call(W, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, s = a.targetName || "", c = a.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (a.slotKey ? ((Re = (((ne = m.system) == null ? void 0 : ne.weapons) ?? {})[a.slotKey]) == null ? void 0 : Re.name) ?? "" : "")) || "Fegyver";
    let r = s ? `${o} – sebzés – ${s}` : `${o} – sebzés`;
    c && (r += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, l, m, p, y, b;
      if (!((l = (a = e.target) == null ? void 0 : a.closest) != null && l.call(a, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, a;
    const e = ((t = game.actors) == null ? void 0 : t.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of e) {
      const m = it.getTotalSpeedRaw(l), p = (n = l.effects) == null ? void 0 : n.find((y) => y.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const y = ((a = (d = CONFIG.statusEffects) == null ? void 0 : d.find((b) => b.id === "immobilized")) == null ? void 0 : a.img) ?? "";
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
  })(), (w = game.user) != null && w.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
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
        background: { src: bi },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await n.create(d);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var a, l, m, p, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const s = u.prototypeToken, c = ((l = s == null ? void 0 : s.bar1) == null ? void 0 : l.attribute) ?? "", o = ((m = s == null ? void 0 : s.bar2) == null ? void 0 : m.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (s) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, s);
      }
    for (const u of game.scenes ?? []) {
      const s = ((p = u.tokens) == null ? void 0 : p.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const c of s)
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
      } catch (s) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", u.name, s);
      }
    for (const u of game.scenes ?? []) {
      const s = ((b = u.tokens) == null ? void 0 : b.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of s)
        try {
          await c.update(n);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (w, i, e) => {
  var a, l, m, p;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, n = t ?? w.actorId ?? null;
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
      const y = ki((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
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
Hooks.on("preCreateCombatant", (w, i, e) => {
  const t = w.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && w.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (w, i, e) => {
  const t = w.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const ji = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function vi(w) {
  const i = w == null ? void 0 : w.combatants, e = (i == null ? void 0 : i.contents) ?? (i ? Array.from(i) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(ji).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, i, e) => {
  (e == null ? void 0 : e.direction) <= 0 || vi(w);
});
function wi() {
  var i, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((i = game.actors) == null ? void 0 : i.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], a = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const l of a)
      !l || w.has(l.id) || (w.add(l.id), typeof l.render == "function" && l.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || w.has(n.id) || (w.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(wi, 100);
});
Hooks.on("updateCombat", (w, i, e) => {
  (i == null ? void 0 : i.round) != null && vi(w), setTimeout(wi, 0);
});
Hooks.on("renderSidebarTab", (w, i, e) => {
  if ((w == null ? void 0 : w.id) !== "combat") return;
  const t = i[0] ?? i;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (w, i, e) => {
  var d;
  const t = w == null ? void 0 : w.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const a = i[0] ?? i;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": bi,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, i, e) => {
  var p, y, b, u;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, a = t.weaponAttack, l = t.weapon;
  if (!n && !d && !a) return;
  const m = (y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const s = m.querySelector(".votv-crit-label");
      if (s)
        s.textContent = d;
      else {
        const c = m.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? m, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = d, o.appendChild(r);
      }
    }
    if (a && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const s = m.querySelector(".dice-total"), c = (s == null ? void 0 : s.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const f = !!l.isHit, h = l.targetName || "Célpont";
        r.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(r);
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
  it as V,
  It as c
};
//# sourceMappingURL=vacuum-of-the-void-DKxKWnE8.mjs.map
