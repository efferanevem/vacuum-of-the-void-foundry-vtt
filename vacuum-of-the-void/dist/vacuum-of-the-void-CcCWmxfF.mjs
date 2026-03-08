var Ls = Object.defineProperty;
var Ns = Object.getPrototypeOf;
var Ps = Reflect.get;
var As = (w, s, e) => s in w ? Ls(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var J = (w, s, e) => As(w, typeof s != "symbol" ? s + "" : s, e);
var B = (w, s, e) => Ps(Ns(w), e, s);
const { HTMLField: Fs, NumberField: q, SchemaField: K, StringField: T, BooleanField: ee, ArrayField: pt } = foundry.data.fields;
class Ts extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new pt(
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
        armor: new pt(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new T({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new T({ required: !1, blank: !0, initial: "" }),
            level: new T({ required: !1, blank: !0, initial: "" }),
            other: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new pt(
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
          items: new pt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new pt(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new Fs({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Nt, SchemaField: Es } = foundry.data.fields;
class $s extends Ts {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Es({
        body: new Nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: xs, NumberField: Js, StringField: Ce } = foundry.data.fields;
class as extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new xs({ required: !1, initial: !1 }),
      type: new Ce({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ce({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ce({ required: !1, blank: !0, initial: "" }),
      damage: new Ce({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ce({ required: !1, blank: !0, initial: "" }),
      special: new Ce({ required: !1, blank: !0, initial: "" }),
      quantity: new Ce({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ce({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Rs, StringField: Ct } = foundry.data.fields;
class Ms extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Rs({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ct({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ct({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Ct({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ct({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Pt, StringField: rs } = foundry.data.fields;
class Ks extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new rs({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new rs({
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
const { NumberField: js, StringField: os } = foundry.data.fields;
class cs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new os({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new os({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new js({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ls } = foundry.data.fields;
class zs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ls({ required: !1, blank: !0, initial: "" }),
      quantity: new ls({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Hs } = foundry.data.fields;
class Us extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Hs({ required: !1, blank: !0, initial: "" })
    };
  }
}
function At(w) {
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
function Bs(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var us, ds, ms, ps;
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
    const e = s.system.resources ?? {}, t = ((b = (y = e.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : b.value) ?? 0, n = ((u = e.currentHealth) == null ? void 0 : u.legs) ?? 0, d = G._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const r = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let l;
    d === 1 ? l = -6 : d === 2 ? l = -3 : l = r, l += G._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((a = (o = s.system) == null ? void 0 : o.combat) == null ? void 0 : a.speed) ?? 0) || 0, p = Number(((h = (f = s.system) == null ? void 0 : f.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(l) ? l : 0);
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
    var b, u, i, c, o, a, f, h, v, I, S, D;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, d = ((h = (f = n.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, r = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, l = G._healthStatusFromRatio(r, d), m = Number(((D = (S = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : S.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = m;
    const y = this._getTotalArmorSpeedPenalty();
    p += y, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var p, y, b, u, i, c, o, a, f, h, v, I, S;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((u = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : u.givenProtection) ?? 0) || 0, d = (o = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && o.call(c, "lookaround") ? 1 : 0, r = (h = (f = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : f.has) != null && h.call(f, "halfcover") ? 3 : 0, l = (S = (I = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : I.has) != null && S.call(I, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + d + r + l;
    t.textContent = String(m);
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
    var o, a, f, h, v, I, S, D;
    const e = s ?? this.form ?? this.element, t = (N) => {
      var C;
      return ((C = e == null ? void 0 : e.querySelector) == null ? void 0 : C.call(e, N)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${N}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((f = (a = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : a.has) != null && f.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, p = ((S = (I = m.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : S.value) ?? 0, y = ((D = m.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (G._healthStatusFromRatio(y, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, m, p;
    const e = G.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((m = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return G._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, m, p, y;
    const t = G.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return G._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var Xe, Ze, et, tt, st, it, nt, at, rt, Fe, ot, ct, Ee, k, F, E, H, le, Q, Te, ve, _e, we, $e, xe, Tt, _t, Dt, Ot, lt, Be, zt, Ht, Ut, Bt, Gt, Vt, Wt, Yt, Jt, Qt, Xt, Zt, es, ts;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((et = (Ze = (Xe = this.actor.system) == null ? void 0 : Xe.resources) == null ? void 0 : Ze.stress) == null ? void 0 : et.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const O = ((tt = d[g]) == null ? void 0 : tt.value) ?? 0, _ = r[g] ?? 0;
      e.computedHealthStatus[g] = G._healthStatusFromRatio(_, O);
    }
    const m = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = m || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((it = (st = this.actor.system) == null ? void 0 : st.combat) == null ? void 0 : it.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const o = Number(((at = (nt = this.actor.system) == null ? void 0 : nt.combat) == null ? void 0 : at.givenProtection) ?? 0) || 0, a = (ot = (Fe = (rt = this.actor) == null ? void 0 : rt.statuses) == null ? void 0 : Fe.has) != null && ot.call(Fe, "lookaround") ? 1 : 0, f = (k = (Ee = (ct = this.actor) == null ? void 0 : ct.statuses) == null ? void 0 : Ee.has) != null && k.call(Ee, "halfcover") ? 3 : 0, h = (H = (E = (F = this.actor) == null ? void 0 : F.statuses) == null ? void 0 : E.has) != null && H.call(E, "threequarteredcover") ? 6 : 0, v = o + this._getTotalArmorProtectionBonus() + a + f + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const I = ((le = e.system) == null ? void 0 : le.combat) ?? {};
    e.totalDefense = (Number(I.defense) || 0) + (Number(I.defenseBonus) || 0) + (Number(I.givenProtection) || 0);
    const S = Number(I.givenSpeed);
    let D = (Number(I.speed) || 0) + (Number(I.speedBonus) || 0) + (Number.isFinite(S) ? S : 0);
    b === 0 && (D = 0), (ve = (Te = (Q = this.actor) == null ? void 0 : Q.statuses) == null ? void 0 : Te.has) != null && ve.call(Te, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (we = (_e = e.system) == null ? void 0 : _e.combat) == null ? void 0 : we.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const N = G.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(N)) {
      const _ = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = _, e.skillDisabled[g] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const C = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], x = (C.slotOrder ?? "").trim(), A = x ? x.split(/\s*,\s*/).filter((g) => L.includes(g)) : [], j = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, z = j && typeof j == "object" && !Array.isArray(j) ? j : {}, U = (((xe = z.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), V = (((Tt = z.slot2) == null ? void 0 : Tt.itemId) ?? "").trim(), se = (((_t = z.slot3) == null ? void 0 : _t.itemId) ?? "").trim(), M = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const _ = typeof g.sort == "number" ? g.sort : 0, P = typeof O.sort == "number" ? O.sort : 0;
      return _ - P;
    }).map((g) => {
      var Ie, Me, Ke, De, Oe, dt;
      const O = g.type === "Fegyver", _ = g.type === "MikroChip";
      let P = 0, R = "", Z = null;
      for (let Ge = 0; Ge < A.length; Ge++) {
        const mt = A[Ge];
        if ((((Ie = C[mt]) == null ? void 0 : Ie.itemId) ?? "") === g.id) {
          P = Ge + 1, R = ((Me = C[mt]) == null ? void 0 : Me.bonus) ?? "", Z = mt;
          break;
        }
      }
      let X = null;
      _ && (U === g.id ? X = "slot1" : V === g.id ? X = "slot2" : se === g.id && (X = "slot3"));
      const ut = O && ((Ke = g.system) != null && Ke.damage) ? g.system.damage : "", ue = O && typeof ((De = g.system) == null ? void 0 : De.range) == "string" ? (g.system.range || "").trim() : "", Re = Z ? Number((Oe = C[Z]) == null ? void 0 : Oe.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: P,
        slotBonus: R,
        slotKey: Z,
        microchipSlotKey: X,
        isEquipped: !!(Z || X),
        damage: ut,
        rangeStr: ue,
        slotBonusNum: Re,
        quantity: Number(((dt = g.system) == null ? void 0 : dt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const Y = (((Dt = this.actor.items) == null ? void 0 : Dt.contents) ?? []).filter((g) => g.type === "Fegyver"), ne = Y.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = ne;
    const he = "— Nincs fegyver —", ce = A.filter((g) => {
      const _ = ((C[g] ?? {}).itemId ?? "").trim();
      return _ ? !!Y.find((R) => R.id === _) : !1;
    });
    e.weaponSlots = ce.map((g, O) => {
      const _ = C[g] ?? {}, P = (_.itemId ?? "").trim(), R = ne.find((Z) => Z.id === P);
      return {
        slotKey: g,
        itemId: P,
        slotNum: O + 1,
        displayName: (R == null ? void 0 : R.name) || _.name || he,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const be = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = Y.map((g) => {
      var ss, is, ns;
      const O = g.id;
      let _ = null, P = {};
      for (const Lt of A)
        if ((((ss = C[Lt]) == null ? void 0 : ss.itemId) ?? "").trim() === O) {
          _ = Lt, P = C[Lt] ?? {};
          break;
        }
      const R = !!_, Z = ((is = g.system) == null ? void 0 : is.equipped) !== void 0 && ((ns = g.system) == null ? void 0 : ns.equipped) !== null ? !!g.system.equipped : R, X = (g == null ? void 0 : g.system) ?? {}, ut = typeof X.range == "string" ? (X.range || "").trim() : "", ue = X.type ?? "", Re = (be[ue] ?? ue) || "—", Ie = X.size ?? "", Me = (ae[Ie] ?? Ie) || "", Ke = [Re, Me].filter(Boolean).join(", ") || Re || "—", De = ue === "projectile" || Ie === "thrown", Oe = X.quantity, dt = Oe != null ? String(Oe).trim() : "1", Ge = String(P.bonus ?? "").trim(), mt = String(X.bonus ?? "").trim(), qs = Ge || mt || "0";
      return {
        slotKey: _ ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? he,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: qs,
        damage: P.damage ?? X.damage ?? "",
        rangeStr: ut || "—",
        typeLabel: Re,
        typeAndSize: Ke,
        quantity: dt,
        quantityDisplay: De ? dt : "—",
        isProjectile: De,
        equipped: Z,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const re = (((Ot = this.actor.items) == null ? void 0 : Ot.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = re.map((g) => {
      var P, R;
      const O = (g == null ? void 0 : g.system) ?? {}, _ = ((P = g.system) == null ? void 0 : P.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: Bs((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const qe = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = qe.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, _ = (O.description ?? "").trim(), P = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", R = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: P
      };
    });
    const je = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = je.map((g) => {
      const _ = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), P = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: P
      };
    });
    const yt = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((g) => g.type === "MikroChip"), ie = yt.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ve = "— Nincs Mikro-Chip —", ke = ["slot1", "slot2", "slot3"], ze = (g) => {
      var _, P, R;
      const O = [];
      return g !== 1 && O.push((((_ = z.slot1) == null ? void 0 : _.itemId) ?? "").trim()), g !== 2 && O.push((((P = z.slot2) == null ? void 0 : P.itemId) ?? "").trim()), g !== 3 && O.push((((R = z.slot3) == null ? void 0 : R.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((g) => !ze(1).includes(g.id)), e.microchipItemsSlot2 = ie.filter((g) => !ze(2).includes(g.id)), e.microchipItemsSlot3 = ie.filter((g) => !ze(3).includes(g.id)), e.microchipSlots = ke.map((g) => {
      const O = z[g] ?? {}, _ = (O.itemId ?? "").trim(), P = yt.find((R) => R.id === _);
      return {
        slotKey: g,
        itemId: _,
        displayName: (P == null ? void 0 : P.name) || O.name || Ve,
        img: (P == null ? void 0 : P.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, _ = z[O] ?? {}, P = (_.itemId ?? "").trim(), R = ie.find((Z) => Z.id === P);
      e[`microchip${g}ItemId`] = P, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || _.name || Ve, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = yt.map((g) => {
      var Ie, Me, Ke, De;
      const O = g.id;
      let _ = null;
      for (const Oe of ke)
        if ((((Ie = z[Oe]) == null ? void 0 : Ie.itemId) ?? "").trim() === O) {
          _ = Oe;
          break;
        }
      const P = !!_, R = ((Me = g == null ? void 0 : g.system) == null ? void 0 : Me.abilityType) ?? "", Z = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", X = R === "active", ut = Number((Ke = g == null ? void 0 : g.system) == null ? void 0 : Ke.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ue = (((De = g == null ? void 0 : g.system) == null ? void 0 : De.description) ?? "").trim(), Re = ue ? ue.length > 60 ? ue.slice(0, 57) + "…" : ue : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: Z,
        description: Re,
        kp: ut,
        isActive: X,
        slotKey: _ ?? "",
        equipped: P
      };
    });
    const gt = (((Ht = e.weaponsTable) == null ? void 0 : Ht.length) ?? 0) > 0 || (((Ut = e.armorTable) == null ? void 0 : Ut.length) ?? 0) > 0 || (((Bt = e.microchipsTable) == null ? void 0 : Bt.length) ?? 0) > 0 || (((Gt = e.itemsTable) == null ? void 0 : Gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !gt;
    const ht = this.actor.system.abilities ?? {}, jt = (((Vt = this.actor.items) == null ? void 0 : Vt.contents) ?? []).map((g) => {
      var O, _, P;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((_ = g.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((P = g.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), He = new Map(jt.map((g) => [g.id, g])), bt = "— Nincs képesség —", We = (g) => {
      const O = ht[g] ?? {}, _ = (O.itemId ?? "").trim(), P = _ ? He.get(_) : null, R = (P == null ? void 0 : P.description) ?? "", Z = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: _,
        displayName: (P == null ? void 0 : P.name) || O.name || bt,
        img: (P == null ? void 0 : P.img) || "",
        description: R,
        kp: Z
      };
    };
    e.abilityFajiSlot = We("faji"), e.abilityHatterSlot = We("hatter");
    const Ye = (g) => {
      const O = ht[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Je = (g) => g.map((O) => {
      const _ = He.get(O);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Je(Ye("passive")), e.abilityActiveList = Je(Ye("active"));
    const kt = ((Wt = e.system) == null ? void 0 : Wt.resources) ?? {}, Ue = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Le = (Jt = (Yt = e.system) == null ? void 0 : Yt.combat) == null ? void 0 : Jt.initiativeResult, oe = typeof Le == "number" ? Le : -1, vt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ne = (Xt = (Qt = e.system) == null ? void 0 : Qt.combat) == null ? void 0 : Xt.initiativeRanges, Pe = Array.isArray(Ne) ? Ne.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Se = (Pe.length > 0 ? Pe : vt).slice().sort((g, O) => g.min - O.min), Ae = Pe.map((g) => g.min), wt = Ae.length ? Math.min(...Ae) : 0, It = Ae.length ? Math.max(...Ae) : 0;
    e.initiativeRanges = Pe.map((g) => ({ ...g, isFirst: g.min === wt, isLast: g.min === It }));
    let Qe = 0;
    if (typeof oe == "number" && oe >= 0 && Se.length > 0) {
      const g = Se[0], O = Se[Se.length - 1];
      let _ = null;
      oe <= g.max ? _ = g : oe >= O.min ? _ = O : _ = Se.find((P) => oe >= P.min && oe <= P.max), _ && (Qe = _.kp);
    }
    e.kpDots = Ue.map((g, O) => {
      const _ = O + 1, P = !!Number(kt[g]), R = _ <= Qe;
      return { index: _, used: P, usable: R };
    });
    const St = !!((es = (Zt = game.combat) == null ? void 0 : Zt.combatants) != null && es.some((g) => {
      var O;
      return ((O = g.actor) == null ? void 0 : O.type) === "Karakter";
    }));
    return e.showHarcSection = St, e.canEditInitiative = !!((ts = game.user) != null && ts.isGM), e.showInitiativeResult = typeof Le == "number", e.initiativeResult = e.showInitiativeResult ? Le : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DHsUm7FG.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-DHsUm7FG.mjs");
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
      const c = i.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-DHsUm7FG.mjs");
      f(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, S, D, N, C, L, x;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((N = (D = this.actor.items).get) == null ? void 0 : N.call(D, h)) ?? ((L = (C = this.actor.items.contents) == null ? void 0 : C.find) == null ? void 0 : L.call(C, (A) => A.id === h));
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
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((C) => S.includes(C)) : [], N = D.find((C) => {
          var L;
          return (((L = v[C]) == null ? void 0 : L.itemId) ?? "").trim() === o;
        });
        if (N) {
          const C = D.filter((L) => L !== N);
          h["system.weapons.slotOrder"] = C.join(","), h[`system.weapons.${N}.itemId`] = "", h[`system.weapons.${N}.name`] = "", h[`system.weapons.${N}.damage`] = "", h[`system.weapons.${N}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var N, C;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((L) => v.includes(L)) : [], S = I.find((L) => {
        var x;
        return (((x = f[L]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let L = I.find((A) => {
          var j;
          return !((j = f[A]) != null && j.itemId);
        });
        const x = new Set(I);
        if (!L) {
          const A = v.find((j) => !x.has(j));
          if (!A) return;
          L = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${L}.itemId`]: o,
          [`system.weapons.${L}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${L}.damage`]: ((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "",
          [`system.weapons.${L}.bonus`]: ((C = a == null ? void 0 : a.system) == null ? void 0 : C.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const L = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": L.join(","),
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
      var L;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = a == null ? void 0 : a.dataset.slot;
      if (!f) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((L = c.textContent) == null ? void 0 : L.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", a == null || a.insertBefore(D, S)), D.src = I, D.style.display = "") : D && D.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const N = h ? this.actor.items.get(h) : null, C = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (N == null ? void 0 : N.name) ?? ""
      };
      h && (C[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(C);
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
        var D;
        return (((D = a[S]) == null ? void 0 : D.itemId) ?? "").trim() === c;
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
      var N, C;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((L) => v.includes(L)) : [], S = I.find((L) => {
        var x;
        return (((x = f[L]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let L = I.find((A) => {
          var j;
          return !((j = f[A]) != null && j.itemId);
        });
        const x = new Set(I);
        if (!L) {
          const A = v.find((j) => !x.has(j));
          if (!A) return;
          L = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${L}.itemId`]: o,
          [`system.weapons.${L}.name`]: a.name ?? "",
          [`system.weapons.${L}.damage`]: ((N = a.system) == null ? void 0 : N.damage) ?? "",
          [`system.weapons.${L}.bonus`]: ((C = a.system) == null ? void 0 : C.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const L = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": L.join(","),
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
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((C) => S.includes(C)) : [], N = D.find((C) => {
          var L;
          return (((L = v[C]) == null ? void 0 : L.itemId) ?? "").trim() === o;
        });
        if (N) {
          const C = D.filter((L) => L !== N);
          h["system.weapons.slotOrder"] = C.join(","), h[`system.weapons.${N}.itemId`] = "", h[`system.weapons.${N}.name`] = "", h[`system.weapons.${N}.damage`] = "", h[`system.weapons.${N}.bonus`] = "";
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
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, G._healthStatusFromRatio(u, b));
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
            const D = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : d.id) ?? f;
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
            const I = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, S = (I.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = S ? S.split(/\s*,\s*/).filter((L) => D.includes(L)) : [], C = N.filter((L) => {
              var x;
              return (((x = I[L]) == null ? void 0 : x.itemId) ?? "").trim() === v;
            });
            if (C.length > 0) {
              const x = {
                "system.weapons.slotOrder": N.filter((A) => !C.includes(A)).join(",")
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
    const { resultType: y, label: b } = At(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((D) => D.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((D) => D.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, p = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = m + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: f, label: h } = At(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
J(G, "PARTS", foundry.utils.mergeObject(
  B(G, G, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), J(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  B(G, G, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((us = B(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : us.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ds = B(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ds.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ps = (ms = B(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ms.window) == null ? void 0 : ps.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
J(G, "BODY_PART_BY_SKILL", {
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
let ft = G;
function Gs(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var fs, ys, gs, hs;
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
    var We, Ye, Je, kt, Ue, Le, oe, vt, Ne, Pe, qt, Se, Ae, wt, It, Qe, St, Xe, Ze, et, tt, st, it, nt, at, rt, Fe, ot, ct, Ee;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((We = this.actor) == null ? void 0 : We.system), e.showDeathSkull = !1, e.sizeForSelect = (((Je = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Je.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((kt = e.system) == null ? void 0 : kt.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, r = (Le = (Ue = t == null ? void 0 : t.statuses) == null ? void 0 : Ue.has) != null && Le.call(Ue, "lookaround") ? 1 : 0, l = (vt = (oe = t == null ? void 0 : t.statuses) == null ? void 0 : oe.has) != null && vt.call(oe, "halfcover") ? 3 : 0, m = (Pe = (Ne = t == null ? void 0 : t.statuses) == null ? void 0 : Ne.has) != null && Pe.call(Ne, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = d + r + l + m;
    const p = ((qt = t == null ? void 0 : t.items) == null ? void 0 : qt.contents) ?? [], y = ((Se = t == null ? void 0 : t.system) == null ? void 0 : Se.weapons) ?? {}, b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (y.slotOrder ?? "").trim(), i = u ? u.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], c = p.filter((k) => k.type === "Fegyver"), o = c.map((k) => ({ id: k.id, name: k.name, img: k.img })), a = "— Nincs fegyver —", f = i.length > 0 ? i : b, h = b.filter((k) => !f.includes(k)), v = [...f, ...h], I = v.filter((k) => {
      var E;
      const F = (((E = y[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return F && c.some((H) => H.id === F);
    });
    e.weaponSlots = I.map((k) => {
      const F = y[k] ?? {}, E = (F.itemId ?? "").trim(), H = o.find((le) => le.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (H == null ? void 0 : H.name) || F.name || a,
        img: (H == null ? void 0 : H.img) || ""
      };
    });
    const S = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((k) => {
      var lt;
      const F = k.id;
      let E = null, H = {};
      for (const Be of v)
        if ((((lt = y[Be]) == null ? void 0 : lt.itemId) ?? "").trim() === F) {
          E = Be, H = y[Be] ?? {};
          break;
        }
      const le = !!E, Q = (k == null ? void 0 : k.system) ?? {}, Te = typeof Q.range == "string" ? (Q.range || "").trim() : "", ve = Q.type ?? "", _e = (S[ve] ?? ve) || "—", we = Q.size ?? "", $e = (D[we] ?? we) || "", xe = [_e, $e].filter(Boolean).join(", ") || _e || "—", Tt = ve === "projectile" || we === "thrown", _t = Q.quantity != null ? String(Q.quantity).trim() : "1", Dt = String(Q.bonus ?? H.bonus ?? "").trim() || "0", Ot = (Q.damage ?? H.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? a,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Dt,
        damage: Ot,
        rangeStr: Te || "—",
        typeAndSize: xe,
        quantity: _t,
        isProjectile: Tt,
        equipped: le,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const N = p.filter((k) => k.type === "Pancel");
    e.armorTable = N.map((k) => {
      var H;
      const F = (k == null ? void 0 : k.system) ?? {}, E = ((H = k.system) == null ? void 0 : H.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: Gs((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const C = ((wt = (Ae = t == null ? void 0 : t.system) == null ? void 0 : Ae.gear) == null ? void 0 : wt.microchips) ?? {}, L = ["slot1", "slot2", "slot3"], x = p.filter((k) => k.type === "MikroChip");
    e.microchipsTable = x.map((k) => {
      var ve, _e, we, $e;
      const F = k.id;
      let E = null;
      for (const xe of L)
        if ((((ve = C[xe]) == null ? void 0 : ve.itemId) ?? "").trim() === F) {
          E = xe;
          break;
        }
      const H = ((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.abilityType) ?? "", le = H === "active" ? "Aktív" : H === "passive" ? "Passzív" : H || "—", Q = (((we = k == null ? void 0 : k.system) == null ? void 0 : we.description) ?? "").trim(), Te = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: le,
        description: Te,
        kp: Number(($e = k == null ? void 0 : k.system) == null ? void 0 : $e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: H === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const A = p.filter((k) => k.type === "Targy");
    e.itemsTable = A.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, E = (F.description ?? "").trim(), H = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: H
      };
    });
    const j = p.filter((k) => k.type === "Egyeb");
    e.egyebList = j.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), H = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: H
      };
    });
    const z = (((It = e.weaponsTable) == null ? void 0 : It.length) ?? 0) > 0 || (((Qe = e.armorTable) == null ? void 0 : Qe.length) ?? 0) > 0 || (((St = e.microchipsTable) == null ? void 0 : St.length) ?? 0) > 0 || (((Xe = e.itemsTable) == null ? void 0 : Xe.length) ?? 0) > 0 || (((Ze = e.egyebList) == null ? void 0 : Ze.length) ?? 0) > 0;
    e.showEquipmentDropZone = !z;
    const U = ((et = t == null ? void 0 : t.system) == null ? void 0 : et.abilities) ?? {}, V = p.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), se = new Map(V.map((k) => [k.id, k])), W = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = W, e.abilityHatterSlot = W;
    const M = (k) => {
      const F = U[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, Y = (k) => (k || []).map((F) => {
      const E = se.get(F);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Y(M("passive")), e.abilityActiveList = Y(M("active"));
    const ne = t == null ? void 0 : t.id, he = !!((st = (tt = game.combat) == null ? void 0 : tt.combatants) != null && st.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === ne;
      }
    ));
    e.showHarcSection = he;
    const ce = ((it = e.system) == null ? void 0 : it.resources) ?? {}, be = (at = (nt = e.system) == null ? void 0 : nt.combat) == null ? void 0 : at.initiativeResult, ae = typeof be == "number" ? be : -1, re = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], qe = (Fe = (rt = e.system) == null ? void 0 : rt.combat) == null ? void 0 : Fe.initiativeRanges, je = Array.isArray(qe) ? qe.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ie = (je.length > 0 ? je : re).slice().sort((k, F) => k.min - F.min), Ve = 3;
    let ke = je.length > 0 ? je : [];
    ke.length < Ve && (ke = [...ke, ...Array(Ve - ke.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ke.map((k, F) => ({
      ...k,
      isFirst: F === 0,
      isLast: F === ke.length - 1
    }));
    let ze = 0;
    if (typeof ae == "number" && ae >= 0 && ie.length > 0) {
      const k = ie[0], F = ie[ie.length - 1];
      let E = null;
      ae <= k.max ? E = k : ae >= F.min ? E = F : E = ie.find((H) => ae >= H.min && ae <= H.max), E && (ze = E.kp);
    }
    const gt = ie.length > 0 ? ie[ie.length - 1] : null, ht = Math.min(10, gt ? gt.kp : 6), He = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, ht)).map((k, F) => {
      const E = F + 1, H = !!Number(ce[k]), le = E <= ze;
      return { index: E, used: H, usable: le };
    }), bt = Math.ceil(He.length / 2);
    return e.kpDotsRow1 = He.slice(0, bt), e.kpDotsRow2 = He.slice(bt), e.canEditInitiative = !!((ot = game.user) != null && ot.isGM), e.showInitiativeResult = typeof be == "number", e.initiativeResult = e.showInitiativeResult ? be : "", e.speedUnitForSelect = ((Ee = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : Ee.speedUnit) ?? "m", e;
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
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-DHsUm7FG.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (c = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-DHsUm7FG.mjs");
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
      const { openRollSheetForSkill: a } = await import("./roll-sheet-DHsUm7FG.mjs");
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
      var h, v, I, S, D, N;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, f = (Array.isArray((N = o[i]) == null ? void 0 : N.items) ? o[i].items.slice() : []).filter((C) => C !== c);
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
        var D;
        return (((D = c[S]) == null ? void 0 : D.itemId) ?? "").trim() === i;
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
    var S, D, N, C, L;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((D = e.system) == null ? void 0 : D.skills) ?? {}, r = ((N = e.items) == null ? void 0 : N.filter((x) => x.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((x) => x.id === n.itemId) ?? null);
    const m = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, y = ((C = l == null ? void 0 : l.system) == null ? void 0 : C.type) || "kinetic", b = (((L = l == null ? void 0 : l.system) == null ? void 0 : L.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = p + i, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, f = new Roll(a);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = At(f), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    var y, b, u, i, c, o, a, f, h, v, I, S, D, N, C, L, x;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const n = ((A) => {
      var z;
      if (!A) return null;
      const j = A.uuid ?? A.documentUuid ?? ((z = A.data) == null ? void 0 : z.uuid) ?? (typeof A == "string" ? A : null);
      if (j) return j;
      if (typeof A == "object") {
        for (const U of Object.values(A))
          if (typeof U == "string" && U.includes(".") && U.startsWith("Item.")) return U;
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
      const j = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), z = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, U = j === "active" ? "active" : "passive", V = Array.isArray((v = z[U]) == null ? void 0 : v.items) ? z[U].items.slice() : Array.isArray(z[U]) ? z[U].slice() : [];
      V.includes(A) || V.push(A), await r.update({ [`system.abilities.${U}.items`]: V }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (S = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && p) {
      const A = ((D = r.system) == null ? void 0 : D.weapons) ?? {}, j = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], z = (A.slotOrder ?? "").trim(), U = z ? z.split(/\s*,\s*/).filter((W) => j.includes(W)) : [];
      let V = j.find((W) => {
        var M;
        return !(((M = A[W]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      V || (V = j.find((W) => !U.includes(W)) ?? "slot1");
      const se = U.includes(V) ? U : [...U, V].filter((W) => j.includes(W));
      await r.update({
        "system.weapons.slotOrder": se.join(","),
        [`system.weapons.${V}.itemId`]: p,
        [`system.weapons.${V}.name`]: d.name ?? "",
        [`system.weapons.${V}.damage`]: ((N = d.system) == null ? void 0 : N.damage) ?? "",
        [`system.weapons.${V}.bonus`]: ((C = d.system) == null ? void 0 : C.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const A = ((x = (L = r.system) == null ? void 0 : L.gear) == null ? void 0 : x.microchips) ?? {}, z = ["slot1", "slot2", "slot3"].find((U) => {
        var V;
        return !(((V = A[U]) == null ? void 0 : V.itemId) ?? "").trim();
      });
      z && await r.update({
        [`system.gear.microchips.${z}.itemId`]: p,
        [`system.gear.microchips.${z}.name`]: d.name ?? ""
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
J(te, "PARTS", foundry.utils.mergeObject(
  B(te, te, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), J(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  B(te, te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((fs = B(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ys = B(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : ys.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((hs = (gs = B(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : gs.window) == null ? void 0 : hs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ft = te;
const Vs = [
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
var bs;
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Vs, e;
  }
};
J(de, "PARTS", foundry.utils.mergeObject(B(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), J(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((bs = B(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : bs.form) ?? {}, { submitOnChange: !1 })
}));
let Et = de;
var ks;
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
J(me, "PARTS", foundry.utils.mergeObject(B(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), J(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ks = B(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : ks.form) ?? {}, { submitOnChange: !1 })
}));
let $t = me;
var vs;
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
J(pe, "PARTS", foundry.utils.mergeObject(B(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), J(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((vs = B(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 })
}));
let xt = pe;
var ws;
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
J(fe, "PARTS", foundry.utils.mergeObject(B(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), J(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(fe, fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ws = B(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : ws.form) ?? {}, { submitOnChange: !0 })
}));
let Rt = fe;
var Is;
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
J(ye, "PARTS", foundry.utils.mergeObject(B(ye, ye, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), J(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(ye, ye, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Is = B(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Is.form) ?? {}, { submitOnChange: !1 })
}));
let Mt = ye;
var Ss;
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
J(ge, "PARTS", foundry.utils.mergeObject(B(ge, ge, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), J(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(B(ge, ge, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ss = B(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = ge;
const _s = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Ds(w) {
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
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = $s, CONFIG.Actor.dataModels.Npc = Ts, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = as, CONFIG.Item.dataModels.weapon = as, CONFIG.Item.dataModels.Pancel = Ms, CONFIG.Item.dataModels.MikroChip = Ks, CONFIG.Item.dataModels.Kepesseg = cs, CONFIG.Item.dataModels.ability = cs, CONFIG.Item.dataModels.Targy = zs, CONFIG.Item.dataModels.Egyeb = Us, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ft, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ft, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Et, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", $t, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", xt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
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
      const c = ft.getTotalSpeedRaw(i), o = (f = i.effects) == null ? void 0 : f.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !o) {
        const I = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((S) => S.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, N;
          const S = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const C of S)
            ((N = C == null ? void 0 : C.document) == null ? void 0 : N.actorId) === u && typeof C.draw == "function" && C.draw();
        }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect create failed:", S));
      } else c > 0 && o && o.delete().then(() => {
        var S, D;
        const I = ((S = canvas.tokens) == null ? void 0 : S.placeables) ?? [];
        for (const N of I)
          ((D = N == null ? void 0 : N.document) == null ? void 0 : D.actorId) === u && typeof N.draw == "function" && N.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (m, p, y, b) => {
    var S, D, N, C, L, x, A, j, z, U, V, se, W;
    const u = m == null ? void 0 : m.id;
    if (!u) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((S = p == null ? void 0 : p.system) != null && S.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((N = (D = m.system) == null ? void 0 : D.combat) == null ? void 0 : N.initiativeResult), Y = Number.isFinite(M) ? M : 0, ne = game.combat;
      if (ne) {
        const he = ((C = ne.combatants) == null ? void 0 : C.contents) ?? Array.from(ne.combatants ?? []);
        for (const ce of he)
          if (((L = ce.actor) == null ? void 0 : L.id) === u || ce.actorId === u) {
            ne.updateEmbeddedDocuments("Combatant", [{ _id: ce.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((x = p == null ? void 0 : p.system) != null && x.identity) && "size" in p.system.identity) {
      const M = Ds((j = (A = m.system) == null ? void 0 : A.identity) == null ? void 0 : j.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, Y));
    }
    const i = document.activeElement, c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), o = [], a = (z = game.actors) == null ? void 0 : z.get(u);
    a != null && a.apps && o.push(...Array.from(a.apps));
    const f = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of f)
      ((U = M.document) == null ? void 0 : U.id) !== u || ((V = M.document) == null ? void 0 : V.documentName) !== "Actor" || ((se = M.constructor) == null ? void 0 : se.name) !== "VoidKarakterSheet" || o.includes(M) || o.push(M);
    if (c && o.some((M) => {
      const Y = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return Y && Y.contains(i);
    })) return;
    const v = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const M of o)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== I && M.render(!0);
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
    var f, h, v, I, S, D, N, C, L, x, A, j, z, U, V, se, W, M, Y, ne, he, ce, be;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (S = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const l = r.actorId ?? ((D = d == null ? void 0 : d.speaker) == null ? void 0 : D.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((N = game.actors) == null ? void 0 : N.get(r.actorId)) ?? ((C = game.actors) == null ? void 0 : C.get(l));
    if (m || (m = ((x = (L = game.scenes) == null ? void 0 : L.contents) == null ? void 0 : x.flatMap((re) => {
      var qe;
      return ((qe = re.tokens) == null ? void 0 : qe.contents) ?? [];
    }).map((re) => re.actor).find((re) => re && (re.id === l || re.id === r.actorId))) ?? null), !m) return;
    const p = r.itemId ? ((j = (A = m.items) == null ? void 0 : A.get) == null ? void 0 : j.call(A, r.itemId)) ?? ((V = (U = (z = m.items) == null ? void 0 : z.contents) == null ? void 0 : U.find) == null ? void 0 : V.call(U, (ae) => ae.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((se = p == null ? void 0 : p.system) == null ? void 0 : se.damage) ?? "").trim()), !y && r.slotKey && (y = (((((W = m.system) == null ? void 0 : W.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (he = (M = ui.notifications) == null ? void 0 : M.warn) == null || he.call(M, ((ne = (Y = game.i18n) == null ? void 0 : Y.localize) == null ? void 0 : ne.call(Y, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", c = r.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (r.slotKey ? ((be = (((ce = m.system) == null ? void 0 : ce.weapons) ?? {})[r.slotKey]) == null ? void 0 : be.name) ?? "" : "")) || "Fegyver";
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
      const m = ft.getTotalSpeedRaw(l), p = (n = l.effects) == null ? void 0 : n.find((y) => y.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
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
        background: { src: _s },
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
      const y = Ds((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
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
const Ws = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Os(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Ws).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Os(w);
});
function Cs() {
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
  setTimeout(Cs, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && Os(w), setTimeout(Cs, 0);
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
    "background.src": _s,
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
  ft as V,
  At as c
};
//# sourceMappingURL=vacuum-of-the-void-CcCWmxfF.mjs.map
