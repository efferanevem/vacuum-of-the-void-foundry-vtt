var fi = Object.defineProperty;
var yi = Object.getPrototypeOf;
var gi = Reflect.get;
var hi = (w, i, e) => i in w ? fi(w, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[i] = e;
var Q = (w, i, e) => hi(w, typeof i != "symbol" ? i + "" : i, e);
var z = (w, i, e) => gi(yi(w), e, i);
const { HTMLField: bi, NumberField: O, SchemaField: K, StringField: S, BooleanField: ie, ArrayField: Ve } = foundry.data.fields;
class oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new S({ required: !1, blank: !0, initial: "" }),
        player: new S({ required: !1, blank: !0, initial: "" }),
        level: new O({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new S({ required: !1, blank: !0, initial: "" }),
        assignment: new S({ required: !1, blank: !0, initial: "" }),
        subAssignment: new S({ required: !1, blank: !0, initial: "" }),
        background: new S({ required: !1, blank: !0, initial: "" }),
        languages: new S({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new S({ required: !1, blank: !0, initial: "" })
      }),
      resources: new K({
        health: new K({
          value: new O({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new O({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ie({ required: !1, initial: !1 }),
            box2: new ie({ required: !1, initial: !1 }),
            box3: new ie({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ie({ required: !1, initial: !1 }),
            box2: new ie({ required: !1, initial: !1 }),
            box3: new ie({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ie({ required: !1, initial: !1 }),
            box2: new ie({ required: !1, initial: !1 }),
            box3: new ie({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new ie({ required: !1, initial: !1 }),
            box2: new ie({ required: !1, initial: !1 }),
            box3: new ie({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new K({
          head: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new O({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new K({
          head: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new K({
          value: new O({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new O({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new K({
        defense: new O({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new O({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new O({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new S({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new O({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new O({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new Ve(
          new K({
            min: new O({ required: !1, integer: !0, initial: 0 }),
            max: new O({ required: !1, integer: !0, initial: 0 }),
            kp: new O({ required: !1, integer: !0, min: 0, max: 6, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new K({
        deception: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new S({ required: !1, blank: !0, initial: "" }),
        combatTraining: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new O({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new K({
        slotOrder: new S({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new K({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new K({
        microchips: new K({
          slot1: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new ie({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new ie({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new ie({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new Ve(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ve(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            quantity: new O({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new K({
        faji: new K({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new K({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        passive: new K({
          items: new Ve(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new Ve(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new bi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: bt, SchemaField: ki } = foundry.data.fields;
class vi extends oi {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ki({
        body: new bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: wi, NumberField: Ei, StringField: De } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new wi({ required: !1, initial: !1 }),
      type: new De({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new De({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new De({ required: !1, blank: !0, initial: "" }),
      damage: new De({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new De({ required: !1, blank: !0, initial: "" }),
      special: new De({ required: !1, blank: !0, initial: "" }),
      quantity: new De({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new De({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Ii, StringField: ft } = foundry.data.fields;
class Si extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ii({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ft({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ft({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new ft({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ft({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: kt, StringField: Ut } = foundry.data.fields;
class Ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ut({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ut({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new kt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new kt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new kt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Di, StringField: zt } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new zt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new zt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Di({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Gt } = foundry.data.fields;
class _i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Gt({ required: !1, blank: !0, initial: "" }),
      quantity: new Gt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Ci } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ci({ required: !1, blank: !0, initial: "" })
    };
  }
}
function vt(w) {
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
      const a = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!a || !p || a === 8 || a !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, i) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const r = i.filter((u) => u === 6).length, l = i.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, g = r + f, b = l + m;
  return g > 0 && g === b ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function qi(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Wt, Yt, Jt, Qt;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, d, r, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const a = document.activeElement, p = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      p && h && (l.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const f = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, g = this.form ?? this.element, b = l.scrollState, u = l.focus, s = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var a, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = g.querySelector) == null ? void 0 : a.call(g, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = g.querySelector) == null ? void 0 : p.call(g, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (s || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), r = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const l = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var b, u, s, c, o, a, p, h, v;
    const e = i ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((s = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : s.resources) ?? {}, d = ((o = (c = n.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, r = ((a = n.currentHealth) == null ? void 0 : a.legs) ?? 0, l = W._healthStatusFromRatio(r, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const g = this._getTotalArmorSpeedPenalty();
    m += g, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, l, f, m;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(i = null) {
    const e = i ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const f = Number(r == null ? void 0 : r.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, g = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(f + m + g);
  }
  _writeTotalSpeed(i = null) {
    var o, a, p, h, v;
    const e = i ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const f = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, g = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (W._healthStatusFromRatio(g, m) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, s = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + s + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, l, f, m;
    const e = W.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return W._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var l, f, m, g;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = i == null ? void 0 : i.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, r = ((g = n.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return W._healthStatusFromRatio(r, d);
  }
  async _prepareContext(i) {
    var Ge, We, Ye, k, F, x, j, ae, X, Fe, he, Ie, be, qe, Le, ut, dt, mt, pt, Je, $e, qt, Lt, Nt, Pt, At, Et, Ft, $t, xt, Rt;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ye = (We = (Ge = this.actor.system) == null ? void 0 : Ge.resources) == null ? void 0 : We.stress) == null ? void 0 : Ye.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of l) {
      const _ = ((k = d[y]) == null ? void 0 : k.value) ?? 0, D = r[y] ?? 0;
      e.computedHealthStatus[y] = W._healthStatusFromRatio(D, _);
    }
    const f = (Number(r.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(r[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((x = (F = this.actor.system) == null ? void 0 : F.combat) == null ? void 0 : x.givenSpeed) ?? 0) || 0;
    let s;
    b === 0 ? s = 0 : b === 1 ? s = -6 : b === 2 ? s = -3 : s = u;
    const c = this._getTotalArmorSpeedPenalty();
    s += c, e.effectiveGivenSpeed = s;
    const a = (Number(((ae = (j = this.actor.system) == null ? void 0 : j.combat) == null ? void 0 : ae.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: s, givenProtection: a } },
      { inplace: !1 }
    );
    const p = ((X = e.system) == null ? void 0 : X.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, _] of Object.entries(I)) {
      const D = e.computedHealthStatus[_];
      e.skillHealthStatus[y] = D, e.skillDisabled[y] = D === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const T = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (T.slotOrder ?? "").trim(), A = P ? P.split(/\s*,\s*/).filter((y) => L.includes(y)) : [], C = (Fe = this.actor.system.gear) == null ? void 0 : Fe.microchips, E = C && typeof C == "object" && !Array.isArray(C) ? C : {}, N = (((he = E.slot1) == null ? void 0 : he.itemId) ?? "").trim(), H = (((Ie = E.slot2) == null ? void 0 : Ie.itemId) ?? "").trim(), B = (((be = E.slot3) == null ? void 0 : be.itemId) ?? "").trim(), G = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, _) => {
      const D = typeof y.sort == "number" ? y.sort : 0, q = typeof _.sort == "number" ? _.sort : 0;
      return D - q;
    }).map((y) => {
      var ke, Pe, Ae, Se, Te, Xe;
      const _ = y.type === "Fegyver", D = y.type === "MikroChip";
      let q = 0, M = "", te = null;
      for (let xe = 0; xe < A.length; xe++) {
        const Ze = A[xe];
        if ((((ke = T[Ze]) == null ? void 0 : ke.itemId) ?? "") === y.id) {
          q = xe + 1, M = ((Pe = T[Ze]) == null ? void 0 : Pe.bonus) ?? "", te = Ze;
          break;
        }
      }
      let V = null;
      D && (N === y.id ? V = "slot1" : H === y.id ? V = "slot2" : B === y.id && (V = "slot3"));
      const Qe = _ && ((Ae = y.system) != null && Ae.damage) ? y.system.damage : "", oe = _ && typeof ((Se = y.system) == null ? void 0 : Se.range) == "string" ? (y.system.range || "").trim() : "", Ne = te ? Number((Te = T[te]) == null ? void 0 : Te.bonus) || 0 : "";
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        type: y.type,
        isWeapon: _,
        slotAssignment: q,
        slotBonus: M,
        slotKey: te,
        microchipSlotKey: V,
        isEquipped: !!(te || V),
        damage: Qe,
        rangeStr: oe,
        slotBonusNum: Ne,
        quantity: Number(((Xe = y.system) == null ? void 0 : Xe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const ee = (((qe = this.actor.items) == null ? void 0 : qe.contents) ?? []).filter((y) => y.type === "Fegyver"), R = ee.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = R;
    const Y = "— Nincs fegyver —", J = A.filter((y) => {
      const D = ((T[y] ?? {}).itemId ?? "").trim();
      return D ? !!ee.find((M) => M.id === D) : !1;
    });
    e.weaponSlots = J.map((y, _) => {
      const D = T[y] ?? {}, q = (D.itemId ?? "").trim(), M = R.find((te) => te.id === q);
      return {
        slotKey: y,
        itemId: q,
        slotNum: _ + 1,
        displayName: (M == null ? void 0 : M.name) || D.name || Y,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ve = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, re = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ee.map((y) => {
      var Mt, Kt, jt;
      const _ = y.id;
      let D = null, q = {};
      for (const ht of A)
        if ((((Mt = T[ht]) == null ? void 0 : Mt.itemId) ?? "").trim() === _) {
          D = ht, q = T[ht] ?? {};
          break;
        }
      const M = !!D, te = ((Kt = y.system) == null ? void 0 : Kt.equipped) !== void 0 && ((jt = y.system) == null ? void 0 : jt.equipped) !== null ? !!y.system.equipped : M, V = (y == null ? void 0 : y.system) ?? {}, Qe = typeof V.range == "string" ? (V.range || "").trim() : "", oe = V.type ?? "", Ne = (ve[oe] ?? oe) || "—", ke = V.size ?? "", Pe = (re[ke] ?? ke) || "", Ae = [Ne, Pe].filter(Boolean).join(", ") || Ne || "—", Se = oe === "projectile" || ke === "thrown", Te = V.quantity, Xe = Te != null ? String(Te).trim() : "1", xe = String(q.bonus ?? "").trim(), Ze = String(V.bonus ?? "").trim(), pi = xe || Ze || "0";
      return {
        slotKey: D ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? Y,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: pi,
        damage: q.damage ?? V.damage ?? "",
        rangeStr: Qe || "—",
        typeLabel: Ne,
        typeAndSize: Ae,
        quantity: Xe,
        quantityDisplay: Se ? Xe : "—",
        isProjectile: Se,
        equipped: te,
        special: (V.special ?? "").trim() || "—"
      };
    });
    const fe = (((Le = this.actor.items) == null ? void 0 : Le.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = fe.map((y) => {
      var q, M;
      const _ = (y == null ? void 0 : y.system) ?? {}, D = ((q = y.system) == null ? void 0 : q.equipped) !== void 0 && ((M = y.system) == null ? void 0 : M.equipped) !== null ? !!y.system.equipped : !1;
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        protectionBonus: (_.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (_.speedPenalty ?? "").toString().trim() || "—",
        level: qi((_.level ?? "").toString().trim()),
        special: (_.special ?? _.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const Re = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = Re.map((y) => {
      const _ = (y == null ? void 0 : y.system) ?? {}, D = (_.description ?? "").trim(), q = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", M = _.quantity != null ? String(_.quantity).trim() : "1";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        quantity: M,
        description: q
      };
    });
    const se = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = se.map((y) => {
      const D = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), q = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: q
      };
    });
    const Z = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((y) => y.type === "MikroChip"), ye = Z.map((y) => ({ id: y.id, name: y.name, img: y.img })), et = "— Nincs Mikro-Chip —", Me = ["slot1", "slot2", "slot3"], Ee = (y) => {
      var D, q, M;
      const _ = [];
      return y !== 1 && _.push((((D = E.slot1) == null ? void 0 : D.itemId) ?? "").trim()), y !== 2 && _.push((((q = E.slot2) == null ? void 0 : q.itemId) ?? "").trim()), y !== 3 && _.push((((M = E.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = ye.filter((y) => !Ee(1).includes(y.id)), e.microchipItemsSlot2 = ye.filter((y) => !Ee(2).includes(y.id)), e.microchipItemsSlot3 = ye.filter((y) => !Ee(3).includes(y.id)), e.microchipSlots = Me.map((y) => {
      const _ = E[y] ?? {}, D = (_.itemId ?? "").trim(), q = Z.find((M) => M.id === D);
      return {
        slotKey: y,
        itemId: D,
        displayName: (q == null ? void 0 : q.name) || _.name || et,
        img: (q == null ? void 0 : q.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const _ = `slot${y}`, D = E[_] ?? {}, q = (D.itemId ?? "").trim(), M = ye.find((te) => te.id === q);
      e[`microchip${y}ItemId`] = q, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || D.name || et, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = Z.map((y) => {
      var ke, Pe, Ae, Se;
      const _ = y.id;
      let D = null;
      for (const Te of Me)
        if ((((ke = E[Te]) == null ? void 0 : ke.itemId) ?? "").trim() === _) {
          D = Te;
          break;
        }
      const q = !!D, M = ((Pe = y == null ? void 0 : y.system) == null ? void 0 : Pe.abilityType) ?? "", te = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", V = M === "active", Qe = Number((Ae = y == null ? void 0 : y.system) == null ? void 0 : Ae.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, oe = (((Se = y == null ? void 0 : y.system) == null ? void 0 : Se.description) ?? "").trim(), Ne = oe ? oe.length > 60 ? oe.slice(0, 57) + "…" : oe : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: te,
        description: Ne,
        kp: Qe,
        isActive: V,
        slotKey: D ?? "",
        equipped: q
      };
    });
    const yt = (((pt = e.weaponsTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((Je = e.armorTable) == null ? void 0 : Je.length) ?? 0) > 0 || ((($e = e.microchipsTable) == null ? void 0 : $e.length) ?? 0) > 0 || (((qt = e.itemsTable) == null ? void 0 : qt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !yt;
    const tt = this.actor.system.abilities ?? {}, it = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).map((y) => {
      var _, D, q;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((_ = y.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((D = y.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((q = y.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), Ke = new Map(it.map((y) => [y.id, y])), st = "— Nincs képesség —", je = (y) => {
      const _ = tt[y] ?? {}, D = (_.itemId ?? "").trim(), q = D ? Ke.get(D) : null, M = (q == null ? void 0 : q.description) ?? "", te = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: D,
        displayName: (q == null ? void 0 : q.name) || _.name || st,
        img: (q == null ? void 0 : q.img) || "",
        description: M,
        kp: te
      };
    };
    e.abilityFajiSlot = je("faji"), e.abilityHatterSlot = je("hatter");
    const He = (y) => {
      const _ = tt[y];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, Ue = (y) => y.map((_) => {
      const D = Ke.get(_);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ue(He("passive")), e.abilityActiveList = Ue(He("active"));
    const nt = ((Nt = e.system) == null ? void 0 : Nt.resources) ?? {}, rt = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], _e = (At = (Pt = e.system) == null ? void 0 : Pt.combat) == null ? void 0 : At.initiativeResult, ge = typeof _e == "number" ? _e : -1, at = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ze = (Ft = (Et = e.system) == null ? void 0 : Et.combat) == null ? void 0 : Ft.initiativeRanges, Ce = Array.isArray(ze) ? ze.map((y) => ({ min: Number(y.min) ?? 0, max: Number(y.max) ?? 0, kp: Math.min(6, Math.max(0, Number(y.kp) ?? 0)) })) : [], we = (Ce.length > 0 ? Ce : at).slice().sort((y, _) => y.min - _.min), Oe = Ce.map((y) => y.min), ot = Oe.length ? Math.min(...Oe) : 0, ct = Oe.length ? Math.max(...Oe) : 0;
    e.initiativeRanges = Ce.map((y) => ({ ...y, isFirst: y.min === ot, isLast: y.min === ct }));
    let Be = 0;
    if (typeof ge == "number" && ge >= 0 && we.length > 0) {
      const y = we[0], _ = we[we.length - 1];
      let D = null;
      ge <= y.max ? D = y : ge >= _.min ? D = _ : D = we.find((q) => ge >= q.min && ge <= q.max), D && (Be = D.kp);
    }
    e.kpDots = rt.map((y, _) => {
      const D = _ + 1, q = !!Number(nt[y]), M = D <= Be;
      return { index: D, used: q, usable: M };
    });
    const lt = !!((xt = ($t = game.combat) == null ? void 0 : $t.combatants) != null && xt.some((y) => {
      var _;
      return ((_ = y.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = lt, e.canEditInitiative = !!((Rt = game.user) != null && Rt.isGM), e.showInitiativeResult = typeof _e == "number", e.initiativeResult = e.showInitiativeResult ? _e : "", e;
  }
  _attachFrameListeners(i) {
    var b, u;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const o = (s.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-B_TFAv6o.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var a, p, h;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((p = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : p.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-B_TFAv6o.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (s) => {
      var h, v;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, p = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [a]: p ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (s) => {
      var a;
      const c = s ? s.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
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
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', r), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(i), this._writeTotalDefense(e), this._writeTotalSpeed(i), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var a, p, h;
      s.preventDefault(), s.stopPropagation();
      const c = ((h = (p = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : p.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const c = s.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-B_TFAv6o.mjs");
      p(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var I, T, L, P, A, C, E;
      s.preventDefault();
      const o = s.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (L = this.actor.items).get) == null ? void 0 : P.call(L, h)) ?? ((C = (A = this.actor.items.contents) == null ? void 0 : A.find) == null ? void 0 : C.call(A, (N) => N.id === h));
      (E = v == null ? void 0 : v.sheet) == null || E.render(!0);
    });
    const l = (s, c) => {
      var p;
      const o = s.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (s.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = s.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = a.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const c = s.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      let p = Number(c.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await a.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, p = a.items.get(o);
      if (!p) return;
      const h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = I ? I.split(/\s*,\s*/).filter((A) => T.includes(A)) : [], P = L.find((A) => {
          var C;
          return (((C = v[A]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (P) {
          const A = L.filter((C) => C !== P);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var P, A;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], T = I.find((C) => {
        var E;
        return (((E = p[C]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let C = I.find((N) => {
          var H;
          return !((H = p[N]) != null && H.itemId);
        });
        const E = new Set(I);
        if (!C) {
          const N = v.find((H) => !E.has(H));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${C}.damage`]: ((P = a == null ? void 0 : a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((A = a == null ? void 0 : a.system) == null ? void 0 : A.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const C = I.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const c = s.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var C;
      s.preventDefault();
      const c = s.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = a == null ? void 0 : a.dataset.slot;
      if (!p) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let L = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (L || (L = document.createElement("img"), L.className = "karakter-microchip-slot-thumb", L.alt = "", a == null || a.insertBefore(L, T)), L.src = I, L.style.display = "") : L && L.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, A = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      h && (A[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var v, I;
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var L;
        return (((L = a[T]) == null ? void 0 : L.itemId) ?? "").trim() === c;
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
      c.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((s, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (a) => {
        var p;
        (p = a.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (a) => {
        var p;
        (p = a.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
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
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[c]) == null ? void 0 : v.items) ? a[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var p;
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      (p = a == null ? void 0 : a.sheet) == null || p.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(o) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = (c.value ?? "").trim();
      await a.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var P, A;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], T = I.find((C) => {
        var E;
        return (((E = p[C]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let C = I.find((N) => {
          var H;
          return !((H = p[N]) != null && H.itemId);
        });
        const E = new Set(I);
        if (!C) {
          const N = v.find((H) => !E.has(H));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: a.name ?? "",
          [`system.weapons.${C}.damage`]: ((P = a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((A = a.system) == null ? void 0 : A.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const C = I.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, p = a.items.get(o), h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = I ? I.split(/\s*,\s*/).filter((A) => T.includes(A)) : [], P = L.find((A) => {
          var C;
          return (((C = v[A]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (P) {
          const A = L.filter((C) => C !== P);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
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
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Targy") return;
      const p = (c.value ?? "").trim();
      await a.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, m = (s) => {
      var a, p, h, v;
      if (!s) return;
      const c = f._getFormDataForUpdate(s);
      if (Object.keys(c).length === 0) return;
      const o = ((p = (a = c.system) == null ? void 0 : a.resources) == null ? void 0 : p.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(c).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (s) => {
      var c, o, a;
      return s && (((o = (c = f.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, s)) || f.id && ((a = s.closest) == null ? void 0 : a.call(s, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (s) => {
      var h;
      const c = s.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = c.form;
      if (!g(a)) return;
      const p = s.relatedTarget;
      p && (a.contains(p) || f.id && ((h = p.closest) != null && h.call(p, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), m(a));
    }, document.body.addEventListener("blur", f._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var l, f, m;
    const e = {};
    for (const g of i.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      g.type === "checkbox" ? b = g.checked : g.type === "number" ? b = g.value === "" ? 0 : Number(g.value) : b = g.value ?? "", foundry.utils.setProperty(e, g.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const g of r) {
      const b = ((m = n[g]) == null ? void 0 : m.value) ?? 0, u = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, W._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, n, d, r, l, f, m, g, b, u, s, c;
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
          let p = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const h = (((r = a.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", T = Array.isArray((l = v[I]) == null ? void 0 : l.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          T.includes(p) || T.push(p), await this.actor.update({ [`system.abilities.${I}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
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
          const p = this.actor, h = ((m = a.parent) == null ? void 0 : m.id) !== p.id;
          let v = a.id;
          if (h) {
            const I = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await p.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (h) {
            const I = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = T ? T.split(/\s*,\s*/).filter((C) => L.includes(C)) : [], A = P.filter((C) => {
              var E;
              return (((E = I[C]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (A.length > 0) {
              const E = {
                "system.weapons.slotOrder": P.filter((N) => !A.includes(N)).join(",")
              };
              for (const N of A)
                E[`system.weapons.${N}.itemId`] = "", E[`system.weapons.${N}.name`] = "", E[`system.weapons.${N}.damage`] = "", E[`system.weapons.${N}.bonus`] = "";
              await p.update(E);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const p = this.actor;
          if (((u = a.parent) == null ? void 0 : u.id) !== p.id) {
            const h = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const p = this.actor;
          ((s = a.parent) == null ? void 0 : s.id) !== p.id && await p.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const p = this.actor;
          ((c = a.parent) == null ? void 0 : c.id) !== p.id && await p.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, r, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var l, f, m, g, b, u;
    i.preventDefault(), i.stopPropagation(), (l = i.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((g = d.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [s]);
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
    var m, g;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const s = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return s - c;
    }).map((b) => b.id), r = d.indexOf(t), l = d.indexOf(e);
    if (r === -1 || l === -1) return;
    d.splice(r, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(i) {
    var n, d, r;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
    var f, m, g;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
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
  async _postAbilityToChat(i) {
    var g, b, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
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
    var r, l, f;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
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
    var f, m, g, b;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, l = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, r, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var l, f, m, g, b;
    i.preventDefault(), (l = i.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (r = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(n) || 0;
    const r = this._getSkillHealthStatus(i);
    r === 1 ? d -= 6 : r === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: g, label: b } = vt(m), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: b } },
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
    var r;
    const i = Number(((r = this.actor.system.skills) == null ? void 0 : r.quickThinking) ?? 0) || 0, t = `1d20${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(t);
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((L) => L.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((L) => L.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, m = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", g = (((T = r == null ? void 0 : r.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = g && n[g] !== void 0 ? g : m === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, s = f + u, o = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: p, label: h } = vt(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var f, m, g, b, u, s, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
Q(W, "PARTS", foundry.utils.mergeObject(
  z(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Wt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Yt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Yt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Qt = (Jt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Jt.window) == null ? void 0 : Qt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
Q(W, "BODY_PART_BY_SKILL", {
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
let wt = W;
function Li(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Xt, Zt, Vt, ei;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var n, d, r, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
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
    const r = await super.render(i, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, g = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var s, c;
      if (this._applyScrollState(l, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const o = ((s = f.querySelector) == null ? void 0 : s.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = g.selectionStart ?? 0, o.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (b || g) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(i) {
    var it, Ke, st, je, He, Ue, nt, rt, _e, ge, at, ze, Ce, gt, we, Oe, ot, ct, Be, lt, Ge, We, Ye;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((it = this.actor) == null ? void 0 : it.system), e.showDeathSkull = !1, e.sizeForSelect = (((st = (Ke = e.system) == null ? void 0 : Ke.identity) == null ? void 0 : st.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((je = t == null ? void 0 : t.items) == null ? void 0 : je.contents) ?? [], d = ((He = t == null ? void 0 : t.system) == null ? void 0 : He.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = n.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : r, s = r.filter((k) => !u.includes(k)), c = [...u, ...s], o = c.filter((k) => {
      var x;
      const F = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return F && m.some((j) => j.id === F);
    });
    e.weaponSlots = o.map((k) => {
      const F = d[k] ?? {}, x = (F.itemId ?? "").trim(), j = g.find((ae) => ae.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (j == null ? void 0 : j.name) || F.name || b,
        img: (j == null ? void 0 : j.img) || ""
      };
    });
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Je;
      const F = k.id;
      let x = null, j = {};
      for (const $e of c)
        if ((((Je = d[$e]) == null ? void 0 : Je.itemId) ?? "").trim() === F) {
          x = $e, j = d[$e] ?? {};
          break;
        }
      const ae = !!x, X = (k == null ? void 0 : k.system) ?? {}, Fe = typeof X.range == "string" ? (X.range || "").trim() : "", he = X.type ?? "", Ie = (a[he] ?? he) || "—", be = X.size ?? "", qe = (p[be] ?? be) || "", Le = [Ie, qe].filter(Boolean).join(", ") || Ie || "—", ut = he === "projectile" || be === "thrown", dt = X.quantity != null ? String(X.quantity).trim() : "1", mt = String(X.bonus ?? j.bonus ?? "").trim() || "0", pt = (X.damage ?? j.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: mt,
        damage: pt,
        rangeStr: Fe || "—",
        typeAndSize: Le,
        quantity: dt,
        isProjectile: ut,
        equipped: ae,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const h = n.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var j;
      const F = (k == null ? void 0 : k.system) ?? {}, x = ((j = k.system) == null ? void 0 : j.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: Li((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const v = ((nt = (Ue = t == null ? void 0 : t.system) == null ? void 0 : Ue.gear) == null ? void 0 : nt.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var he, Ie, be, qe;
      const F = k.id;
      let x = null;
      for (const Le of I)
        if ((((he = v[Le]) == null ? void 0 : he.itemId) ?? "").trim() === F) {
          x = Le;
          break;
        }
      const j = ((Ie = k == null ? void 0 : k.system) == null ? void 0 : Ie.abilityType) ?? "", ae = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", X = (((be = k == null ? void 0 : k.system) == null ? void 0 : be.description) ?? "").trim(), Fe = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ae,
        description: Fe,
        kp: Number((qe = k == null ? void 0 : k.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: j === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const L = n.filter((k) => k.type === "Targy");
    e.itemsTable = L.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, x = (F.description ?? "").trim(), j = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: j
      };
    });
    const P = n.filter((k) => k.type === "Egyeb");
    e.egyebList = P.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), j = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: j
      };
    });
    const A = (((rt = e.weaponsTable) == null ? void 0 : rt.length) ?? 0) > 0 || (((_e = e.armorTable) == null ? void 0 : _e.length) ?? 0) > 0 || (((ge = e.microchipsTable) == null ? void 0 : ge.length) ?? 0) > 0 || (((at = e.itemsTable) == null ? void 0 : at.length) ?? 0) > 0 || (((ze = e.egyebList) == null ? void 0 : ze.length) ?? 0) > 0;
    e.showEquipmentDropZone = !A;
    const C = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, E = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), N = new Map(E.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const B = (k) => {
      const F = C[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, U = (k) => (k || []).map((F) => {
      const x = N.get(F);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = U(B("passive")), e.abilityActiveList = U(B("active"));
    const G = t == null ? void 0 : t.id, ee = !!((we = (gt = game.combat) == null ? void 0 : gt.combatants) != null && we.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === G;
      }
    ));
    e.showHarcSection = ee;
    const R = ((Oe = e.system) == null ? void 0 : Oe.resources) ?? {}, Y = (ct = (ot = e.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.initiativeResult, J = typeof Y == "number" ? Y : -1, ve = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], re = (lt = (Be = e.system) == null ? void 0 : Be.combat) == null ? void 0 : lt.initiativeRanges, fe = Array.isArray(re) ? re.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(6, Math.max(0, Number(k.kp) ?? 0)) })) : [], se = (fe.length > 0 ? fe : ve).slice().sort((k, F) => k.min - F.min), Z = fe.map((k) => k.min), ye = Z.length ? Math.min(...Z) : 0, et = Z.length ? Math.max(...Z) : 0;
    e.initiativeRanges = fe.map((k) => ({ ...k, isFirst: k.min === ye, isLast: k.min === et }));
    let Me = 0;
    if (typeof J == "number" && J >= 0 && se.length > 0) {
      const k = se[0], F = se[se.length - 1];
      let x = null;
      J <= k.max ? x = k : J >= F.min ? x = F : x = se.find((j) => J >= j.min && J <= j.max), x && (Me = x.kp);
    }
    const Ee = se.length > 0 ? se[se.length - 1] : null, yt = Ee ? Ee.kp : 6, tt = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    return e.kpDots = tt.slice(0, Math.max(1, yt)).map((k, F) => {
      const x = F + 1, j = !!Number(R[k]), ae = x <= Me;
      return { index: x, used: j, usable: ae };
    }), e.canEditInitiative = !!((Ge = game.user) != null && Ge.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e.speedUnitForSelect = ((Ye = (We = e.system) == null ? void 0 : We.combat) == null ? void 0 : Ye.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(i) {
    var m, g, b;
    super._attachFrameListeners(i);
    const e = ((m = i == null ? void 0 : i.querySelector) == null ? void 0 : m.call(i, "form.votv.npc-sheet")) ?? i ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, a, p;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const s = ((p = (a = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new s({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, a, p;
      u.preventDefault();
      const s = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    });
    const n = (u) => {
      var o, a;
      const s = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (a = c == null ? void 0 : c.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var a, p, h, v;
      u.preventDefault();
      const s = (p = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : p.call(a, ".karakter-weapon-slot"), c = (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var a;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = (((a = s == null ? void 0 : s.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-B_TFAv6o.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget;
      let c = (((o = s == null ? void 0 : s.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = s == null ? void 0 : s.dataset) != null && a.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[s.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: s } = await import("./roll-sheet-B_TFAv6o.mjs");
      s(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var a, p;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = parseInt(s.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6 || !this.actor) return;
      const o = !!Number((p = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : p[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const s = u.currentTarget, c = (((p = s == null ? void 0 : s.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = s == null ? void 0 : s.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-B_TFAv6o.mjs");
      a(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const s = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      s && await this._postAbilityToChat(s);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, a;
      u.preventDefault();
      const s = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(s) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(s));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, T, L, P;
      if (u.preventDefault(), !u.altKey) return;
      const s = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!s || !c || !this.actor) return;
      const o = ((L = this.actor.system) == null ? void 0 : L.abilities) ?? {}, p = (Array.isArray((P = o[s]) == null ? void 0 : P.items) ? o[s].items.slice() : []).filter((A) => A !== c);
      await this.actor.update({ [`system.abilities.${s}.items`]: p }), typeof this.render == "function" && this.render(!0);
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
      const o = this.actor, a = (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      a && (p[`system.weapons.${a}.itemId`] = "", p[`system.weapons.${a}.name`] = "", p[`system.weapons.${a}.damage`] = "", p[`system.weapons.${a}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !s || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var p, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((h = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((T) => {
        var L;
        return (((L = c[T]) == null ? void 0 : L.itemId) ?? "").trim() === s;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, a;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || b.forEach((u) => {
      var s;
      (((s = u.dataset) == null ? void 0 : s.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var p, h, v;
      const s = u.currentTarget, c = (h = (p = s == null ? void 0 : s.dataset) == null ? void 0 : p.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const a = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", a), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && s && u.dataTransfer.setDragImage(s, 0, 0);
    });
    const r = this, l = (u) => {
      if (!u) return;
      const s = r._getFormDataForUpdate(u);
      Object.keys(s).length !== 0 && r.actor.update(s).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (u) => {
      var s, c, o;
      return u && (((c = (s = r.element) == null ? void 0 : s.contains) == null ? void 0 : c.call(s, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var p;
      const s = u.target;
      if (!s || !s.form) return;
      const c = s.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = s.form;
      if (!f(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || r.id && ((p = a.closest) != null && p.call(a, `#${CSS.escape(r.id)}`))) || l(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, s, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, s, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(i) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var T, L, P, A, C;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[i] ?? {}, d = ((L = e.system) == null ? void 0 : L.skills) ?? {}, r = ((P = e.items) == null ? void 0 : P.filter((E) => E.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((E) => E.id === n.itemId) ?? null);
    const f = l && l.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, g = ((A = l == null ? void 0 : l.system) == null ? void 0 : A.type) || "kinetic", b = (((C = l == null ? void 0 : l.system) == null ? void 0 : C.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : g === "explosive" ? "grenadeUse" : "firearms", s = Number(d[u] || 0) || 0, c = m + s, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, p = new Roll(a);
    await p.evaluate({ async: !0 });
    const { resultType: h, label: v } = vt(p), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var f, m, g, b, u, s, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
  async _onDropItem(i, e) {
    var g, b, u, s, c, o, a, p, h, v, I, T, L, P, A, C, E;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, i, e);
    const n = ((N) => {
      var B;
      if (!N) return null;
      const H = N.uuid ?? N.documentUuid ?? ((B = N.data) == null ? void 0 : B.uuid) ?? (typeof N == "string" ? N : null);
      if (H) return H;
      if (typeof N == "object") {
        for (const U of Object.values(N))
          if (typeof U == "string" && U.includes(".") && U.startsWith("Item.")) return U;
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
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const ee = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((a = (await r.createEmbeddedDocuments("Item", [ee]))[0]) == null ? void 0 : a.id) ?? N;
      }
      const H = (((p = d.system) == null ? void 0 : p.kind) ?? "passive").toString(), B = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, U = H === "active" ? "active" : "passive", G = Array.isArray((v = B[U]) == null ? void 0 : v.items) ? B[U].items.slice() : Array.isArray(B[U]) ? B[U].slice() : [];
      G.includes(N) || G.push(N), await r.update({ [`system.abilities.${U}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (T = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && m) {
      const N = ((L = r.system) == null ? void 0 : L.weapons) ?? {}, H = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], B = (N.slotOrder ?? "").trim(), U = B ? B.split(/\s*,\s*/).filter((R) => H.includes(R)) : [];
      let G = H.find((R) => {
        var Y;
        return !(((Y = N[R]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      G || (G = H.find((R) => !U.includes(R)) ?? "slot1");
      const ee = U.includes(G) ? U : [...U, G].filter((R) => H.includes(R));
      await r.update({
        "system.weapons.slotOrder": ee.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((P = d.system) == null ? void 0 : P.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((A = d.system) == null ? void 0 : A.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const N = ((E = (C = r.system) == null ? void 0 : C.gear) == null ? void 0 : E.microchips) ?? {}, B = ["slot1", "slot2", "slot3"].find((U) => {
        var G;
        return !(((G = N[U]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      B && await r.update({
        [`system.gear.microchips.${B}.itemId`]: m,
        [`system.gear.microchips.${B}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(i) {
    var g, b, u, s, c, o;
    const e = (b = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : b.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((s = e.system) == null ? void 0 : s.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(i) {
    var f, m, g, b, u, s;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
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
Q(ne, "PARTS", foundry.utils.mergeObject(
  z(ne, ne, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(ne, ne, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Xt = z(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Xt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Zt = z(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Zt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ei = (Vt = z(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Vt.window) == null ? void 0 : ei.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let It = ne;
const Ni = [
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
var ti;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ni, e;
  }
};
Q(ce, "PARTS", foundry.utils.mergeObject(z(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Q(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ti = z(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 })
}));
let St = ce;
var ii;
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
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
Q(le, "PARTS", foundry.utils.mergeObject(z(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Q(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ii = z(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 })
}));
let Tt = le;
var si;
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
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
Q(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Q(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((si = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : si.form) ?? {}, { submitOnChange: !1 })
}));
let Dt = ue;
var ni;
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(l) && n(l);
    }, e._votvInput = (r) => {
      var m;
      const l = r.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(f), 300));
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
Q(de, "PARTS", foundry.utils.mergeObject(z(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Q(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ni = z(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : ni.form) ?? {}, { submitOnChange: !0 })
}));
let _t = de;
var ri;
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
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
Q(me, "PARTS", foundry.utils.mergeObject(z(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Q(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ri = z(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : ri.form) ?? {}, { submitOnChange: !1 })
}));
let Ct = me;
var ai;
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
    e._votvProfileImgClick = (r) => {
      var m, g, b, u, s, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (r) => {
      var l, f, m;
      return r && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, m, g;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((g = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
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
Q(pe, "PARTS", foundry.utils.mergeObject(z(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Q(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ai = z(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : ai.form) ?? {}, { submitOnChange: !1 })
}));
let Ot = pe;
const ci = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function li(w) {
  return w === "Apró" ? 0.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var i, e, t, n, d, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = vi, CONFIG.Actor.dataModels.Npc = oi, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ht, CONFIG.Item.dataModels.weapon = Ht, CONFIG.Item.dataModels.Pancel = Si, CONFIG.Item.dataModels.MikroChip = Ti, CONFIG.Item.dataModels.Kepesseg = Bt, CONFIG.Item.dataModels.ability = Bt, CONFIG.Item.dataModels.Targy = _i, CONFIG.Item.dataModels.Egyeb = Oi, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", wt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", It, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", St, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Tt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Dt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", _t, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ct, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ot, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const w = 500;
  Hooks.on("updateActor", (l, f, m, g) => {
    var I, T, L, P, A, C, E, N, H, B, U, G, ee;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if ((l.type === "Karakter" || l.type === "Npc") && ((I = f == null ? void 0 : f.system) != null && I.combat) && "initiativeResult" in f.system.combat) {
      const R = Number((L = (T = l.system) == null ? void 0 : T.combat) == null ? void 0 : L.initiativeResult), Y = Number.isFinite(R) ? R : 0, J = game.combat;
      if (J) {
        const ve = ((P = J.combatants) == null ? void 0 : P.contents) ?? Array.from(J.combatants ?? []);
        for (const re of ve)
          if (((A = re.actor) == null ? void 0 : A.id) === b || re.actorId === b) {
            J.updateEmbeddedDocuments("Combatant", [{ _id: re.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (l.type === "Npc" && ((C = f == null ? void 0 : f.system) != null && C.identity) && "size" in f.system.identity) {
      const R = li((N = (E = l.system) == null ? void 0 : E.identity) == null ? void 0 : N.size);
      l.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, Y));
    }
    const u = document.activeElement, s = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (H = game.actors) == null ? void 0 : H.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of a)
      ((B = R.document) == null ? void 0 : B.id) !== b || ((U = R.document) == null ? void 0 : U.documentName) !== "Actor" || ((G = R.constructor) == null ? void 0 : G.name) !== "VoidKarakterSheet" || c.includes(R) || c.push(R);
    if (s && c.some((R) => {
      const Y = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return Y && Y.contains(u);
    })) return;
    const h = (ee = game.votv) == null ? void 0 : ee._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < w ? h.appId : null;
    setTimeout(() => {
      for (const R of c)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== v && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, g) => {
    var c, o, a;
    const b = l == null ? void 0 : l.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || l.type !== "Fegyver") return;
    const u = ((c = b.system) == null ? void 0 : c.weapons) ?? {}, s = {};
    for (const [p, h] of Object.entries(u)) {
      if (!p.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (s[`system.weapons.${p}.name`] = l.name ?? "", s[`system.weapons.${p}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", s[`system.weapons.${p}.bonus`] = ((a = l.system) == null ? void 0 : a.bonus) ?? "");
    }
    Object.keys(s).length && b.update(s);
  });
});
Hooks.on("ready", () => {
  var w, i;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, I, T, L, P, A, C, E, N, H, B, U, G, ee, R, Y, J, ve, re, fe, Re;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (T = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!r) return;
    const l = r.actorId ?? ((L = d == null ? void 0 : d.speaker) == null ? void 0 : L.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((P = game.actors) == null ? void 0 : P.get(r.actorId)) ?? ((A = game.actors) == null ? void 0 : A.get(l));
    if (f || (f = ((E = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : E.flatMap((Z) => {
      var ye;
      return ((ye = Z.tokens) == null ? void 0 : ye.contents) ?? [];
    }).map((Z) => Z.actor).find((Z) => Z && (Z.id === l || Z.id === r.actorId))) ?? null), !f) return;
    const m = r.itemId ? ((H = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : H.call(N, r.itemId)) ?? ((G = (U = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : U.find) == null ? void 0 : G.call(U, (se) => se.id === r.itemId)) : null;
    let g = (r.damageFormula ?? "").trim();
    if (g || (g = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !g && r.slotKey && (g = (((((R = f.system) == null ? void 0 : R.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !g) {
      (re = (Y = ui.notifications) == null ? void 0 : Y.warn) == null || re.call(Y, ((ve = (J = game.i18n) == null ? void 0 : J.localize) == null ? void 0 : ve.call(J, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(g);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, s = r.targetName || "", c = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((Re = (((fe = f.system) == null ? void 0 : fe.weapons) ?? {})[r.slotKey]) == null ? void 0 : Re.name) ?? "" : "")) || "Fegyver";
    let a = s ? `${o} – sebzés – ${s}` : `${o} – sebzés`;
    c && (a += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, l, f, m, g, b;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), n = (g = t == null ? void 0 : t.getAttribute) == null ? void 0 : g.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (w = game.user) != null && w.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
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
        background: { src: ci },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, l, f, m, g, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const s = u.prototypeToken, c = ((l = s == null ? void 0 : s.bar1) == null ? void 0 : l.attribute) ?? "", o = ((f = s == null ? void 0 : s.bar2) == null ? void 0 : f.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (s) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, s);
      }
    for (const u of game.scenes ?? []) {
      const s = ((m = u.tokens) == null ? void 0 : m.filter((c) => {
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
    }, d = ((g = game.actors) == null ? void 0 : g.filter((u) => u.type === "Npc")) ?? [];
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
  var r, l, f, m;
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
      const g = li((m = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : m.size);
      w.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: g,
        height: g
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
const Pi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function di(w) {
  const i = w == null ? void 0 : w.combatants, e = (i == null ? void 0 : i.contents) ?? (i ? Array.from(i) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Pi).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, i, e) => {
  (e == null ? void 0 : e.direction) <= 0 || di(w);
});
function mi() {
  var i, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((i = game.actors) == null ? void 0 : i.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
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
  setTimeout(mi, 100);
});
Hooks.on("updateCombat", (w, i, e) => {
  (i == null ? void 0 : i.round) != null && di(w), setTimeout(mi, 0);
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
    const r = i[0] ?? i;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ci,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, i, e) => {
  var m, g, b, u;
  const t = ((m = w.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!n && !d && !r) return;
  const f = (g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, ".dice-roll");
  if (f) {
    if (n && f.classList.add(`votv-${n}`), d) {
      const s = f.querySelector(".votv-crit-label");
      if (s)
        s.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (r && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const s = f.querySelector(".dice-total"), c = (s == null ? void 0 : s.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const p = !!l.isHit, h = l.targetName || "Célpont";
        a.textContent = p ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(a);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((u = w.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(w.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  wt as V,
  vt as c
};
//# sourceMappingURL=vacuum-of-the-void-B3hFY0Em.mjs.map
