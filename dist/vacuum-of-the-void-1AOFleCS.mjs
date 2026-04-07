var ps = Object.defineProperty;
var fs = Object.getPrototypeOf;
var ys = Reflect.get;
var gs = (w, s, e) => s in w ? ps(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var Q = (w, s, e) => gs(w, typeof s != "symbol" ? s + "" : s, e);
var z = (w, s, e) => ys(fs(w), e, s);
const { HTMLField: hs, NumberField: O, SchemaField: K, StringField: S, BooleanField: se, ArrayField: Ze } = foundry.data.fields;
class os extends foundry.abstract.TypeDataModel {
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
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
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
        // Karakterlap: 6 KP ikon külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált)
        kpDot1: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new O({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
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
        initiativeRanges: new Ze(
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
            active: new se({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new se({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new se({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new Ze(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ze(
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
          items: new Ze(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new Ze(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new hs({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: gt, SchemaField: bs } = foundry.data.fields;
class ks extends os {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new bs({
        body: new gt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new gt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new gt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: vs, NumberField: As, StringField: De } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new vs({ required: !1, initial: !1 }),
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
const { BooleanField: ws, StringField: pt } = foundry.data.fields;
class Is extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ws({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new pt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new pt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new pt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new pt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ht, StringField: Ut } = foundry.data.fields;
class Ss extends foundry.abstract.TypeDataModel {
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
      cost: new ht({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ht({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ht({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ts, StringField: zt } = foundry.data.fields;
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
      kp: new Ts({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Gt } = foundry.data.fields;
class Ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Gt({ required: !1, blank: !0, initial: "" }),
      quantity: new Gt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: _s } = foundry.data.fields;
class Cs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new _s({ required: !1, blank: !0, initial: "" })
    };
  }
}
function bt(w) {
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
      const a = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!a || !p || a === 8 || a !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const r = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, g = r + f, b = l + m;
  return g > 0 && g === b ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Os(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Wt, Yt, Jt, Qt;
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
      const a = document.activeElement, p = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      p && h && (l.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, g = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var a, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = g.querySelector) == null ? void 0 : a.call(g, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = g.querySelector) == null ? void 0 : p.call(g, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (i || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), f;
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
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
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
      const l = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, c, o, a, p, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = n.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, r = ((a = n.currentHealth) == null ? void 0 : a.legs) ?? 0, l = W._healthStatusFromRatio(r, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const g = this._getTotalArmorSpeedPenalty();
    m += g, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var r, l, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const f = Number(r == null ? void 0 : r.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, g = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(f + m + g);
  }
  _writeTotalSpeed(s = null) {
    var o, a, p, h, v;
    const e = s ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const f = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, g = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (W._healthStatusFromRatio(g, m) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, f, m;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return W._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, g;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, r = ((g = n.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return W._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var We, k, F, x, j, ae, X, Ee, he, Ie, be, qe, Le, lt, ut, dt, mt, Ye, Fe, Ct, Ot, qt, Lt, Nt, Pt, At, Et, Ft, $t, xt, Rt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((F = (k = (We = this.actor.system) == null ? void 0 : We.resources) == null ? void 0 : k.stress) == null ? void 0 : F.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of l) {
      const _ = ((x = d[y]) == null ? void 0 : x.value) ?? 0, D = r[y] ?? 0;
      e.computedHealthStatus[y] = W._healthStatusFromRatio(D, _);
    }
    const f = (Number(r.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(r[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((ae = (j = this.actor.system) == null ? void 0 : j.combat) == null ? void 0 : ae.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const a = (Number(((Ee = (X = this.actor.system) == null ? void 0 : X.combat) == null ? void 0 : Ee.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: a } },
      { inplace: !1 }
    );
    const p = ((he = e.system) == null ? void 0 : he.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, _] of Object.entries(I)) {
      const D = e.computedHealthStatus[_];
      e.skillHealthStatus[y] = D, e.skillDisabled[y] = D === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const T = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (T.slotOrder ?? "").trim(), A = P ? P.split(/\s*,\s*/).filter((y) => L.includes(y)) : [], C = (Ie = this.actor.system.gear) == null ? void 0 : Ie.microchips, E = C && typeof C == "object" && !Array.isArray(C) ? C : {}, N = (((be = E.slot1) == null ? void 0 : be.itemId) ?? "").trim(), H = (((qe = E.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), B = (((Le = E.slot3) == null ? void 0 : Le.itemId) ?? "").trim(), G = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, _) => {
      const D = typeof y.sort == "number" ? y.sort : 0, q = typeof _.sort == "number" ? _.sort : 0;
      return D - q;
    }).map((y) => {
      var ke, Pe, Ae, Se, Te, Qe;
      const _ = y.type === "Fegyver", D = y.type === "MikroChip";
      let q = 0, M = "", te = null;
      for (let $e = 0; $e < A.length; $e++) {
        const Xe = A[$e];
        if ((((ke = T[Xe]) == null ? void 0 : ke.itemId) ?? "") === y.id) {
          q = $e + 1, M = ((Pe = T[Xe]) == null ? void 0 : Pe.bonus) ?? "", te = Xe;
          break;
        }
      }
      let V = null;
      D && (N === y.id ? V = "slot1" : H === y.id ? V = "slot2" : B === y.id && (V = "slot3"));
      const Je = _ && ((Ae = y.system) != null && Ae.damage) ? y.system.damage : "", oe = _ && typeof ((Se = y.system) == null ? void 0 : Se.range) == "string" ? (y.system.range || "").trim() : "", Ne = te ? Number((Te = T[te]) == null ? void 0 : Te.bonus) || 0 : "";
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
        damage: Je,
        rangeStr: oe,
        slotBonusNum: Ne,
        quantity: Number(((Qe = y.system) == null ? void 0 : Qe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const ee = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((y) => y.type === "Fegyver"), R = ee.map((y) => ({ id: y.id, name: y.name, img: y.img }));
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
    const ve = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ne = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ee.map((y) => {
      var Mt, Kt, jt;
      const _ = y.id;
      let D = null, q = {};
      for (const yt of A)
        if ((((Mt = T[yt]) == null ? void 0 : Mt.itemId) ?? "").trim() === _) {
          D = yt, q = T[yt] ?? {};
          break;
        }
      const M = !!D, te = ((Kt = y.system) == null ? void 0 : Kt.equipped) !== void 0 && ((jt = y.system) == null ? void 0 : jt.equipped) !== null ? !!y.system.equipped : M, V = (y == null ? void 0 : y.system) ?? {}, Je = typeof V.range == "string" ? (V.range || "").trim() : "", oe = V.type ?? "", Ne = (ve[oe] ?? oe) || "—", ke = V.size ?? "", Pe = (ne[ke] ?? ke) || "", Ae = [Ne, Pe].filter(Boolean).join(", ") || Ne || "—", Se = oe === "projectile" || ke === "thrown", Te = V.quantity, Qe = Te != null ? String(Te).trim() : "1", $e = String(q.bonus ?? "").trim(), Xe = String(V.bonus ?? "").trim(), ms = $e || Xe || "0";
      return {
        slotKey: D ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? Y,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: ms,
        damage: q.damage ?? V.damage ?? "",
        rangeStr: Je || "—",
        typeLabel: Ne,
        typeAndSize: Ae,
        quantity: Qe,
        quantityDisplay: Se ? Qe : "—",
        isProjectile: Se,
        equipped: te,
        special: (V.special ?? "").trim() || "—"
      };
    });
    const fe = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((y) => y.type === "Pancel");
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
        level: Os((_.level ?? "").toString().trim()),
        special: (_.special ?? _.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const xe = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = xe.map((y) => {
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
    const re = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = re.map((y) => {
      const D = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), q = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: q
      };
    });
    const Z = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((y) => y.type === "MikroChip"), ye = Z.map((y) => ({ id: y.id, name: y.name, img: y.img })), Ve = "— Nincs Mikro-Chip —", Re = ["slot1", "slot2", "slot3"], Me = (y) => {
      var D, q, M;
      const _ = [];
      return y !== 1 && _.push((((D = E.slot1) == null ? void 0 : D.itemId) ?? "").trim()), y !== 2 && _.push((((q = E.slot2) == null ? void 0 : q.itemId) ?? "").trim()), y !== 3 && _.push((((M = E.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = ye.filter((y) => !Me(1).includes(y.id)), e.microchipItemsSlot2 = ye.filter((y) => !Me(2).includes(y.id)), e.microchipItemsSlot3 = ye.filter((y) => !Me(3).includes(y.id)), e.microchipSlots = Re.map((y) => {
      const _ = E[y] ?? {}, D = (_.itemId ?? "").trim(), q = Z.find((M) => M.id === D);
      return {
        slotKey: y,
        itemId: D,
        displayName: (q == null ? void 0 : q.name) || _.name || Ve,
        img: (q == null ? void 0 : q.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const _ = `slot${y}`, D = E[_] ?? {}, q = (D.itemId ?? "").trim(), M = ye.find((te) => te.id === q);
      e[`microchip${y}ItemId`] = q, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || D.name || Ve, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = Z.map((y) => {
      var ke, Pe, Ae, Se;
      const _ = y.id;
      let D = null;
      for (const Te of Re)
        if ((((ke = E[Te]) == null ? void 0 : ke.itemId) ?? "").trim() === _) {
          D = Te;
          break;
        }
      const q = !!D, M = ((Pe = y == null ? void 0 : y.system) == null ? void 0 : Pe.abilityType) ?? "", te = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", V = M === "active", Je = Number((Ae = y == null ? void 0 : y.system) == null ? void 0 : Ae.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, oe = (((Se = y == null ? void 0 : y.system) == null ? void 0 : Se.description) ?? "").trim(), Ne = oe ? oe.length > 60 ? oe.slice(0, 57) + "…" : oe : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: te,
        description: Ne,
        kp: Je,
        isActive: V,
        slotKey: D ?? "",
        equipped: q
      };
    });
    const et = (((Fe = e.weaponsTable) == null ? void 0 : Fe.length) ?? 0) > 0 || (((Ct = e.armorTable) == null ? void 0 : Ct.length) ?? 0) > 0 || (((Ot = e.microchipsTable) == null ? void 0 : Ot.length) ?? 0) > 0 || (((qt = e.itemsTable) == null ? void 0 : qt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !et;
    const Ke = this.actor.system.abilities ?? {}, tt = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).map((y) => {
      var _, D, q;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((_ = y.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((D = y.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((q = y.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), je = new Map(tt.map((y) => [y.id, y])), st = "— Nincs képesség —", He = (y) => {
      const _ = Ke[y] ?? {}, D = (_.itemId ?? "").trim(), q = D ? je.get(D) : null, M = (q == null ? void 0 : q.description) ?? "", te = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: D,
        displayName: (q == null ? void 0 : q.name) || _.name || st,
        img: (q == null ? void 0 : q.img) || "",
        description: M,
        kp: te
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ue = (y) => {
      const _ = Ke[y];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, ze = (y) => y.map((_) => {
      const D = je.get(_);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = ze(Ue("passive")), e.abilityActiveList = ze(Ue("active"));
    const it = ((Nt = e.system) == null ? void 0 : Nt.resources) ?? {}, nt = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], _e = (At = (Pt = e.system) == null ? void 0 : Pt.combat) == null ? void 0 : At.initiativeResult, ge = typeof _e == "number" ? _e : -1, rt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Be = (Ft = (Et = e.system) == null ? void 0 : Et.combat) == null ? void 0 : Ft.initiativeRanges, Ce = Array.isArray(Be) ? Be.map((y) => ({ min: Number(y.min) ?? 0, max: Number(y.max) ?? 0, kp: Math.min(6, Math.max(0, Number(y.kp) ?? 0)) })) : [], we = (Ce.length > 0 ? Ce : rt).slice().sort((y, _) => y.min - _.min), Oe = Ce.map((y) => y.min), at = Oe.length ? Math.min(...Oe) : 0, ot = Oe.length ? Math.max(...Oe) : 0;
    e.initiativeRanges = Ce.map((y) => ({ ...y, isFirst: y.min === at, isLast: y.min === ot }));
    let Ge = 0;
    if (typeof ge == "number" && ge >= 0 && we.length > 0) {
      const y = we[0], _ = we[we.length - 1];
      let D = null;
      ge <= y.max ? D = y : ge >= _.min ? D = _ : D = we.find((q) => ge >= q.min && ge <= q.max), D && (Ge = D.kp);
    }
    e.kpDots = nt.map((y, _) => {
      const D = _ + 1, q = !!Number(it[y]), M = D <= Ge;
      return { index: D, used: q, usable: M };
    });
    const ct = !!((xt = ($t = game.combat) == null ? void 0 : $t.combatants) != null && xt.some((y) => {
      var _;
      return ((_ = y.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = ct, e.canEditInitiative = !!((Rt = game.user) != null && Rt.isGM), e.showInitiativeResult = typeof _e == "number", e.initiativeResult = e.showInitiativeResult ? _e : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-C2B0XLTU.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((p = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : p.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-C2B0XLTU.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, p = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [a]: p ? 0 : 1 });
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
      var a, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = ((h = (p = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : p.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const c = i.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-C2B0XLTU.mjs");
      p(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, L, P, A, C, E;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (L = this.actor.items).get) == null ? void 0 : P.call(L, h)) ?? ((C = (A = this.actor.items.contents) == null ? void 0 : A.find) == null ? void 0 : C.call(A, (N) => N.id === h));
      (E = v == null ? void 0 : v.sheet) == null || E.render(!0);
    });
    const l = (i, c) => {
      var p;
      const o = i.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = a.sheet) == null || p.render(!0);
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
      let p = Number(c.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await a.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
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
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, A;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
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
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = a == null ? void 0 : a.dataset.slot;
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
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
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
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (a) => {
        var p;
        (p = a.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var p;
        return (p = a.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (a) => {
        var p;
        (p = a.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
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
      var p;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      (p = a == null ? void 0 : a.sheet) == null || p.render(!0);
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
      const p = (c.value ?? "").trim();
      await a.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var P, A;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
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
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
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
      const p = (c.value ?? "").trim();
      await a.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, m = (i) => {
      var a, p, h, v;
      if (!i) return;
      const c = f._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const o = ((p = (a = c.system) == null ? void 0 : a.resources) == null ? void 0 : p.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(c).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (i) => {
      var c, o, a;
      return i && (((o = (c = f.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, i)) || f.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = c.form;
      if (!g(a)) return;
      const p = i.relatedTarget;
      p && (a.contains(p) || f.id && ((h = p.closest) != null && h.call(p, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), m(a));
    }, document.body.addEventListener("blur", f._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, f, m;
    const e = {};
    for (const g of s.elements) {
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
  async _onDropItem(s, e) {
    var t, n, d, r, l, f, m, g, b, u, i, c;
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
          ((i = a.parent) == null ? void 0 : i.id) !== p.id && await p.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const p = this.actor;
          ((c = a.parent) == null ? void 0 : c.id) !== p.id && await p.createEmbeddedDocuments("Item", [a.toObject()]);
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
    var l, f, m, g, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    var m, g;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return i - c;
    }).map((b) => b.id), r = d.indexOf(t), l = d.indexOf(e);
    if (r === -1 || l === -1) return;
    d.splice(r, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
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
    var f, m, g;
    const e = this.actor.items.get(s);
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
  async _postAbilityToChat(s) {
    var g, b, u;
    const e = this.actor.items.get(s);
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
    var r, l, f;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
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
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, g, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
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
    var l, f, m, g, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const r = this._getSkillHealthStatus(s);
    r === 1 ? d -= 6 : r === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: g, label: b } = bt(m), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: b } },
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((L) => L.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((L) => L.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, m = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", g = (((T = r == null ? void 0 : r.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = g && n[g] !== void 0 ? g : m === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: p, label: h } = bt(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, g, b, u, i, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
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
let kt = W;
function qs(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Xt, Zt, Vt, es;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const r = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, g = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = g.selectionStart ?? 0, o.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (b || g) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(s) {
    var et, Ke, tt, je, st, He, Ue, ze, it, nt, _e, ge, rt, Be, Ce, ft, we, Oe, at, ot, Ge, ct, We;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((et = this.actor) == null ? void 0 : et.system), e.showDeathSkull = !1, e.sizeForSelect = (((tt = (Ke = e.system) == null ? void 0 : Ke.identity) == null ? void 0 : tt.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((je = t == null ? void 0 : t.items) == null ? void 0 : je.contents) ?? [], d = ((st = t == null ? void 0 : t.system) == null ? void 0 : st.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = n.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : r, i = r.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
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
      var Ye;
      const F = k.id;
      let x = null, j = {};
      for (const Fe of c)
        if ((((Ye = d[Fe]) == null ? void 0 : Ye.itemId) ?? "").trim() === F) {
          x = Fe, j = d[Fe] ?? {};
          break;
        }
      const ae = !!x, X = (k == null ? void 0 : k.system) ?? {}, Ee = typeof X.range == "string" ? (X.range || "").trim() : "", he = X.type ?? "", Ie = (a[he] ?? he) || "—", be = X.size ?? "", qe = (p[be] ?? be) || "", Le = [Ie, qe].filter(Boolean).join(", ") || Ie || "—", lt = he === "projectile" || be === "thrown", ut = X.quantity != null ? String(X.quantity).trim() : "1", dt = String(X.bonus ?? j.bonus ?? "").trim() || "0", mt = (X.damage ?? j.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: dt,
        damage: mt,
        rangeStr: Ee || "—",
        typeAndSize: Le,
        quantity: ut,
        isProjectile: lt,
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
        level: qs((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const v = ((Ue = (He = t == null ? void 0 : t.system) == null ? void 0 : He.gear) == null ? void 0 : Ue.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var he, Ie, be, qe;
      const F = k.id;
      let x = null;
      for (const Le of I)
        if ((((he = v[Le]) == null ? void 0 : he.itemId) ?? "").trim() === F) {
          x = Le;
          break;
        }
      const j = ((Ie = k == null ? void 0 : k.system) == null ? void 0 : Ie.abilityType) ?? "", ae = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", X = (((be = k == null ? void 0 : k.system) == null ? void 0 : be.description) ?? "").trim(), Ee = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ae,
        description: Ee,
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
    const A = (((ze = e.weaponsTable) == null ? void 0 : ze.length) ?? 0) > 0 || (((it = e.armorTable) == null ? void 0 : it.length) ?? 0) > 0 || (((nt = e.microchipsTable) == null ? void 0 : nt.length) ?? 0) > 0 || (((_e = e.itemsTable) == null ? void 0 : _e.length) ?? 0) > 0 || (((ge = e.egyebList) == null ? void 0 : ge.length) ?? 0) > 0;
    e.showEquipmentDropZone = !A;
    const C = ((rt = t == null ? void 0 : t.system) == null ? void 0 : rt.abilities) ?? {}, E = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
    const G = t == null ? void 0 : t.id, ee = !!((Ce = (Be = game.combat) == null ? void 0 : Be.combatants) != null && Ce.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === G;
      }
    ));
    e.showHarcSection = ee;
    const R = ((ft = e.system) == null ? void 0 : ft.resources) ?? {}, Y = (Oe = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : Oe.initiativeResult, J = typeof Y == "number" ? Y : -1, ve = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ne = (ot = (at = e.system) == null ? void 0 : at.combat) == null ? void 0 : ot.initiativeRanges, fe = Array.isArray(ne) ? ne.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(6, Math.max(0, Number(k.kp) ?? 0)) })) : [], re = (fe.length > 0 ? fe : ve).slice().sort((k, F) => k.min - F.min), Z = fe.map((k) => k.min), ye = Z.length ? Math.min(...Z) : 0, Ve = Z.length ? Math.max(...Z) : 0;
    e.initiativeRanges = fe.map((k) => ({ ...k, isFirst: k.min === ye, isLast: k.min === Ve }));
    let Re = 0;
    if (typeof J == "number" && J >= 0 && re.length > 0) {
      const k = re[0], F = re[re.length - 1];
      let x = null;
      J <= k.max ? x = k : J >= F.min ? x = F : x = re.find((j) => J >= j.min && J <= j.max), x && (Re = x.kp);
    }
    const Me = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    return e.kpDots = Me.map((k, F) => {
      const x = F + 1, j = !!Number(R[k]), ae = x <= Re;
      return { index: x, used: j, usable: ae };
    }), e.canEditInitiative = !!((Ge = game.user) != null && Ge.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e.speedUnitForSelect = ((We = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : We.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var m, g, b;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, a, p;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((p = (a = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, a, p;
      u.preventDefault();
      const i = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
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
      var a, p, h, v;
      u.preventDefault();
      const i = (p = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : p.call(a, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var a;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-C2B0XLTU.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-C2B0XLTU.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var a, p;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6 || !this.actor) return;
      const o = !!Number((p = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : p[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((p = i == null ? void 0 : i.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-C2B0XLTU.mjs");
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
      var h, v, I, T, L, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((L = this.actor.system) == null ? void 0 : L.abilities) ?? {}, p = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((A) => A !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: p }), typeof this.render == "function" && this.render(!0);
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
      const o = this.actor, a = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      a && (p[`system.weapons.${a}.itemId`] = "", p[`system.weapons.${a}.name`] = "", p[`system.weapons.${a}.damage`] = "", p[`system.weapons.${a}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var p, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((T) => {
        var L;
        return (((L = c[T]) == null ? void 0 : L.itemId) ?? "").trim() === i;
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
    (b = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var p, h, v;
      const i = u.currentTarget, c = (h = (p = i == null ? void 0 : i.dataset) == null ? void 0 : p.itemId) == null ? void 0 : h.trim();
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
    }, f = (u) => {
      var i, c, o;
      return u && (((c = (i = r.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var p;
      const i = u.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = i.form;
      if (!f(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || r.id && ((p = a.closest) != null && p.call(a, `#${CSS.escape(r.id)}`))) || l(o);
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
    var T, L, P, A, C;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((L = e.system) == null ? void 0 : L.skills) ?? {}, r = ((P = e.items) == null ? void 0 : P.filter((E) => E.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((E) => E.id === n.itemId) ?? null);
    const f = l && l.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, g = ((A = l == null ? void 0 : l.system) == null ? void 0 : A.type) || "kinetic", b = (((C = l == null ? void 0 : l.system) == null ? void 0 : C.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : g === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = m + i, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, p = new Roll(a);
    await p.evaluate({ async: !0 });
    const { resultType: h, label: v } = bt(p), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, g, b, u, i, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
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
  async _onDropItem(s, e) {
    var g, b, u, i, c, o, a, p, h, v, I, T, L, P, A, C, E;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
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
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
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
  async _postAbilityToChat(s) {
    var g, b, u, i, c, o;
    const e = (b = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
  async _postItemToChat(s) {
    var f, m, g, b, u, i;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
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
Q(ie, "PARTS", foundry.utils.mergeObject(
  z(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Q(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Xt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Xt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Zt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Zt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((es = (Vt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Vt.window) == null ? void 0 : es.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let vt = ie;
const Ls = [
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
var ts;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ls, e;
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
  form: foundry.utils.mergeObject(((ts = z(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : ts.form) ?? {}, { submitOnChange: !1 })
}));
let wt = ce;
var ss;
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
Q(le, "PARTS", foundry.utils.mergeObject(z(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Q(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ss = z(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : ss.form) ?? {}, { submitOnChange: !1 })
}));
let It = le;
var is;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
Q(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Q(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((is = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : is.form) ?? {}, { submitOnChange: !1 })
}));
let St = ue;
var ns;
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
Q(de, "PARTS", foundry.utils.mergeObject(z(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Q(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ns = z(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : ns.form) ?? {}, { submitOnChange: !0 })
}));
let Tt = de;
var rs;
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
Q(me, "PARTS", foundry.utils.mergeObject(z(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Q(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((rs = z(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : rs.form) ?? {}, { submitOnChange: !1 })
}));
let Dt = me;
var as;
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
      var m, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (m = r.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
Q(pe, "PARTS", foundry.utils.mergeObject(z(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Q(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((as = z(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : as.form) ?? {}, { submitOnChange: !1 })
}));
let _t = pe;
const cs = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ls(w) {
  return w === "Apró" ? 1.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, n, d, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ks, CONFIG.Actor.dataModels.Npc = os, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ht, CONFIG.Item.dataModels.weapon = Ht, CONFIG.Item.dataModels.Pancel = Is, CONFIG.Item.dataModels.MikroChip = Ss, CONFIG.Item.dataModels.Kepesseg = Bt, CONFIG.Item.dataModels.ability = Bt, CONFIG.Item.dataModels.Targy = Ds, CONFIG.Item.dataModels.Egyeb = Cs, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", kt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", vt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", wt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", It, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", St, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Tt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Dt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", _t, {
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
        for (const ne of ve)
          if (((A = ne.actor) == null ? void 0 : A.id) === b || ne.actorId === b) {
            J.updateEmbeddedDocuments("Combatant", [{ _id: ne.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (l.type === "Npc" && ((C = f == null ? void 0 : f.system) != null && C.identity) && "size" in f.system.identity) {
      const R = ls((N = (E = l.system) == null ? void 0 : E.identity) == null ? void 0 : N.size);
      l.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, Y));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (H = game.actors) == null ? void 0 : H.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of a)
      ((B = R.document) == null ? void 0 : B.id) !== b || ((U = R.document) == null ? void 0 : U.documentName) !== "Actor" || ((G = R.constructor) == null ? void 0 : G.name) !== "VoidKarakterSheet" || c.includes(R) || c.push(R);
    if (i && c.some((R) => {
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
    const u = ((c = b.system) == null ? void 0 : c.weapons) ?? {}, i = {};
    for (const [p, h] of Object.entries(u)) {
      if (!p.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (i[`system.weapons.${p}.name`] = l.name ?? "", i[`system.weapons.${p}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${p}.bonus`] = ((a = l.system) == null ? void 0 : a.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var w, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, I, T, L, P, A, C, E, N, H, B, U, G, ee, R, Y, J, ve, ne, fe, xe;
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
    const m = r.itemId ? ((H = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : H.call(N, r.itemId)) ?? ((G = (U = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : U.find) == null ? void 0 : G.call(U, (re) => re.id === r.itemId)) : null;
    let g = (r.damageFormula ?? "").trim();
    if (g || (g = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !g && r.slotKey && (g = (((((R = f.system) == null ? void 0 : R.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !g) {
      (ne = (Y = ui.notifications) == null ? void 0 : Y.warn) == null || ne.call(Y, ((ve = (J = game.i18n) == null ? void 0 : J.localize) == null ? void 0 : ve.call(J, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(g);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", c = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((xe = (((fe = f.system) == null ? void 0 : fe.weapons) ?? {})[r.slotKey]) == null ? void 0 : xe.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
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
  ), (w = game.user) != null && w.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: cs },
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
        const i = u.prototypeToken, c = ((l = i == null ? void 0 : i.bar1) == null ? void 0 : l.attribute) ?? "", o = ((f = i == null ? void 0 : i.bar2) == null ? void 0 : f.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((m = u.tokens) == null ? void 0 : m.filter((c) => {
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
    }, d = ((g = game.actors) == null ? void 0 : g.filter((u) => u.type === "Npc")) ?? [];
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
      const g = ls((m = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : m.size);
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
const Ns = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function us(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Ns).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || us(w);
});
function ds() {
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
  setTimeout(ds, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && us(w), setTimeout(ds, 0);
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
    "background.src": cs,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, s, e) => {
  var m, g, b, u;
  const t = ((m = w.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!n && !d && !r) return;
  const f = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (f) {
    if (n && f.classList.add(`votv-${n}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (r && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? f;
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
  kt as V,
  bt as c
};
//# sourceMappingURL=vacuum-of-the-void-1AOFleCS.mjs.map
