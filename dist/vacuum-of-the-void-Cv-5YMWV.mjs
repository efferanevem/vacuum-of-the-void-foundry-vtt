var ls = Object.defineProperty;
var us = Object.getPrototypeOf;
var ds = Reflect.get;
var ms = (w, s, e) => s in w ? ls(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var J = (w, s, e) => ms(w, typeof s != "symbol" ? s + "" : s, e);
var z = (w, s, e) => ds(us(w), e, s);
const { HTMLField: ps, NumberField: O, SchemaField: K, StringField: S, BooleanField: te, ArrayField: Qe } = foundry.data.fields;
class is extends foundry.abstract.TypeDataModel {
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
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
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
        speedBonus: new O({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new O({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new Qe(
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
            active: new te({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new Qe(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Qe(
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
          items: new Qe(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new Qe(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new ps({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ut, SchemaField: fs } = foundry.data.fields;
class ys extends is {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new fs({
        body: new ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: gs, NumberField: qs, StringField: Se } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new gs({ required: !1, initial: !1 }),
      type: new Se({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Se({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Se({ required: !1, blank: !0, initial: "" }),
      damage: new Se({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Se({ required: !1, blank: !0, initial: "" }),
      special: new Se({ required: !1, blank: !0, initial: "" }),
      quantity: new Se({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Se({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: hs, StringField: ct } = foundry.data.fields;
class bs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new hs({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ct({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ct({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new ct({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ct({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: dt, StringField: Mt } = foundry.data.fields;
class ks extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Mt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Mt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new dt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new dt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new dt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: vs, StringField: Kt } = foundry.data.fields;
class jt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Kt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Kt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new vs({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ht } = foundry.data.fields;
class ws extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ht({ required: !1, blank: !0, initial: "" }),
      quantity: new Ht({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Is } = foundry.data.fields;
class Ss extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Is({ required: !1, blank: !0, initial: "" })
    };
  }
}
function mt(w) {
  if (!w || !Array.isArray(w.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let o = i;
    for (const a of u) {
      if (!a) continue;
      if (Array.isArray(a.terms)) {
        d(a.terms, o);
        continue;
      }
      if (typeof a.operator == "string") {
        o = a.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof a.faces == "number" ? a.faces : void 0, m = Array.isArray(a.results) ? a.results : null;
      if (!r || !m || r === 8 || r !== 6) continue;
      const h = !n && o >= 0 && (a.number === 3 || a.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of m) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const c = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, g = c + f, b = l + p;
  return g > 0 && g === b ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ts(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Ut, zt, Bt, Gt;
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
    var n, d, c, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, c = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, m = c.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      m && h && (l.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const p = this.element, g = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var r, m;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = g.querySelector) == null ? void 0 : r.call(g, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (m = g.querySelector) == null ? void 0 : m.call(g, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (i || u) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), c = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var l;
        return c.type === "Pancel" && ((l = c.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const l = String(((d = c.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var l;
        return c.type === "Pancel" && ((l = c.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const l = String(((d = c.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, o, a, r, m, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((a = (o = n.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : a.value) ?? 0, c = ((r = n.currentHealth) == null ? void 0 : r.legs) ?? 0, l = W._healthStatusFromRatio(c, d), f = Number(((v = (h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = f;
    const g = this._getTotalArmorSpeedPenalty();
    p += g, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var c, l, f, p;
    const e = s ?? this.form ?? this.element;
    let t = (c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((p = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : p.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), c = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const f = Number(c == null ? void 0 : c.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, g = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(f + p + g);
  }
  _writeTotalSpeed(s = null) {
    var a, r, m, h, v;
    const e = s ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), c = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const f = ((r = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (m = f.hitLocations) == null ? void 0 : m.legs) == null ? void 0 : h.value) ?? 0, g = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (W._healthStatusFromRatio(g, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(c == null ? void 0 : c.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, o = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, l, f, p;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, n = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return W._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, p, g;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : p.value) ?? 0, c = ((g = n.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return W._healthStatusFromRatio(c, d);
  }
  async _prepareContext(s) {
    var F, R, U, ae, Q, Ee, fe, ve, ye, _e, Ce, nt, rt, at, ot, Ge, Fe, wt, It, St, Tt, Dt, _t, Ct, Ot, qt, Lt, Nt, At, Pt, Et;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((U = (R = (F = this.actor.system) == null ? void 0 : F.resources) == null ? void 0 : R.stress) == null ? void 0 : U.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, c = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of l) {
      const _ = ((ae = d[y]) == null ? void 0 : ae.value) ?? 0, C = c[y] ?? 0;
      e.computedHealthStatus[y] = W._healthStatusFromRatio(C, _);
    }
    const f = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(c[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((Ee = (Q = this.actor.system) == null ? void 0 : Q.combat) == null ? void 0 : Ee.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const r = (Number(((ve = (fe = this.actor.system) == null ? void 0 : fe.combat) == null ? void 0 : ve.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: r } },
      { inplace: !1 }
    );
    const m = ((ye = e.system) == null ? void 0 : ye.combat) ?? {};
    e.totalDefense = (Number(m.defense) || 0) + (Number(m.defenseBonus) || 0) + (Number(m.givenProtection) || 0);
    const h = Number(m.givenSpeed), v = (Number(m.speed) || 0) + (Number(m.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, _] of Object.entries(I)) {
      const C = e.computedHealthStatus[_];
      e.skillHealthStatus[y] = C, e.skillDisabled[y] = C === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const T = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (T.slotOrder ?? "").trim(), P = A ? A.split(/\s*,\s*/).filter((y) => q.includes(y)) : [], D = (_e = this.actor.system.gear) == null ? void 0 : _e.microchips, E = D && typeof D == "object" && !Array.isArray(D) ? D : {}, N = (((Ce = E.slot1) == null ? void 0 : Ce.itemId) ?? "").trim(), j = (((nt = E.slot2) == null ? void 0 : nt.itemId) ?? "").trim(), B = (((rt = E.slot3) == null ? void 0 : rt.itemId) ?? "").trim(), G = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, _) => {
      const C = typeof y.sort == "number" ? y.sort : 0, L = typeof _.sort == "number" ? _.sort : 0;
      return C - L;
    }).map((y) => {
      var ge, qe, Le, we, Ie, Ye;
      const _ = y.type === "Fegyver", C = y.type === "MikroChip";
      let L = 0, M = "", ee = null;
      for (let $e = 0; $e < P.length; $e++) {
        const Je = P[$e];
        if ((((ge = T[Je]) == null ? void 0 : ge.itemId) ?? "") === y.id) {
          L = $e + 1, M = ((qe = T[Je]) == null ? void 0 : qe.bonus) ?? "", ee = Je;
          break;
        }
      }
      let Z = null;
      C && (N === y.id ? Z = "slot1" : j === y.id ? Z = "slot2" : B === y.id && (Z = "slot3"));
      const We = _ && ((Le = y.system) != null && Le.damage) ? y.system.damage : "", oe = _ && typeof ((we = y.system) == null ? void 0 : we.range) == "string" ? (y.system.range || "").trim() : "", Oe = ee ? Number((Ie = T[ee]) == null ? void 0 : Ie.bonus) || 0 : "";
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        type: y.type,
        isWeapon: _,
        slotAssignment: L,
        slotBonus: M,
        slotKey: ee,
        microchipSlotKey: Z,
        isEquipped: !!(ee || Z),
        damage: We,
        rangeStr: oe,
        slotBonusNum: Oe,
        quantity: Number(((Ye = y.system) == null ? void 0 : Ye.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const V = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((y) => y.type === "Fegyver"), x = V.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = x;
    const Y = "— Nincs fegyver —", X = P.filter((y) => {
      const C = ((T[y] ?? {}).itemId ?? "").trim();
      return C ? !!V.find((M) => M.id === C) : !1;
    });
    e.weaponSlots = X.map((y, _) => {
      const C = T[y] ?? {}, L = (C.itemId ?? "").trim(), M = x.find((ee) => ee.id === L);
      return {
        slotKey: y,
        itemId: L,
        slotNum: _ + 1,
        displayName: (M == null ? void 0 : M.name) || C.name || Y,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(C.bonus) || 0,
        damage: C.damage ?? ""
      };
    });
    const he = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ne = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((y) => {
      var Ft, $t, xt;
      const _ = y.id;
      let C = null, L = {};
      for (const lt of P)
        if ((((Ft = T[lt]) == null ? void 0 : Ft.itemId) ?? "").trim() === _) {
          C = lt, L = T[lt] ?? {};
          break;
        }
      const M = !!C, ee = (($t = y.system) == null ? void 0 : $t.equipped) !== void 0 && ((xt = y.system) == null ? void 0 : xt.equipped) !== null ? !!y.system.equipped : M, Z = (y == null ? void 0 : y.system) ?? {}, We = typeof Z.range == "string" ? (Z.range || "").trim() : "", oe = Z.type ?? "", Oe = (he[oe] ?? oe) || "—", ge = Z.size ?? "", qe = (ne[ge] ?? ge) || "", Le = [Oe, qe].filter(Boolean).join(", ") || Oe || "—", we = oe === "projectile" || ge === "thrown", Ie = Z.quantity, Ye = Ie != null ? String(Ie).trim() : "1", $e = String(L.bonus ?? "").trim(), Je = String(Z.bonus ?? "").trim(), cs = $e || Je || "0";
      return {
        slotKey: C ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? Y,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: cs,
        damage: L.damage ?? Z.damage ?? "",
        rangeStr: We || "—",
        typeLabel: Oe,
        typeAndSize: Le,
        quantity: Ye,
        quantityDisplay: we ? Ye : "—",
        isProjectile: we,
        equipped: ee,
        special: (Z.special ?? "").trim() || "—"
      };
    });
    const be = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = be.map((y) => {
      var L, M;
      const _ = (y == null ? void 0 : y.system) ?? {}, C = ((L = y.system) == null ? void 0 : L.equipped) !== void 0 && ((M = y.system) == null ? void 0 : M.equipped) !== null ? !!y.system.equipped : !1;
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        protectionBonus: (_.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (_.speedPenalty ?? "").toString().trim() || "—",
        level: Ts((_.level ?? "").toString().trim()),
        special: (_.special ?? _.other ?? "").toString().trim() || "—",
        equipped: C
      };
    });
    const Ne = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = Ne.map((y) => {
      const _ = (y == null ? void 0 : y.system) ?? {}, C = (_.description ?? "").trim(), L = C ? C.length > 60 ? C.slice(0, 57) + "…" : C : "—", M = _.quantity != null ? String(_.quantity).trim() : "1";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const ke = (((Fe = this.actor.items) == null ? void 0 : Fe.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = ke.map((y) => {
      const C = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), L = C ? C.length > 80 ? C.slice(0, 77) + "…" : C : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: L
      };
    });
    const ie = (((wt = this.actor.items) == null ? void 0 : wt.contents) ?? []).filter((y) => y.type === "MikroChip"), re = ie.map((y) => ({ id: y.id, name: y.name, img: y.img })), xe = "— Nincs Mikro-Chip —", Re = ["slot1", "slot2", "slot3"], Ae = (y) => {
      var C, L, M;
      const _ = [];
      return y !== 1 && _.push((((C = E.slot1) == null ? void 0 : C.itemId) ?? "").trim()), y !== 2 && _.push((((L = E.slot2) == null ? void 0 : L.itemId) ?? "").trim()), y !== 3 && _.push((((M = E.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((y) => !Ae(1).includes(y.id)), e.microchipItemsSlot2 = re.filter((y) => !Ae(2).includes(y.id)), e.microchipItemsSlot3 = re.filter((y) => !Ae(3).includes(y.id)), e.microchipSlots = Re.map((y) => {
      const _ = E[y] ?? {}, C = (_.itemId ?? "").trim(), L = ie.find((M) => M.id === C);
      return {
        slotKey: y,
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || xe,
        img: (L == null ? void 0 : L.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const _ = `slot${y}`, C = E[_] ?? {}, L = (C.itemId ?? "").trim(), M = re.find((ee) => ee.id === L);
      e[`microchip${y}ItemId`] = L, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || C.name || xe, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = ie.map((y) => {
      var ge, qe, Le, we;
      const _ = y.id;
      let C = null;
      for (const Ie of Re)
        if ((((ge = E[Ie]) == null ? void 0 : ge.itemId) ?? "").trim() === _) {
          C = Ie;
          break;
        }
      const L = !!C, M = ((qe = y == null ? void 0 : y.system) == null ? void 0 : qe.abilityType) ?? "", ee = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Z = M === "active", We = Number((Le = y == null ? void 0 : y.system) == null ? void 0 : Le.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, oe = (((we = y == null ? void 0 : y.system) == null ? void 0 : we.description) ?? "").trim(), Oe = oe ? oe.length > 60 ? oe.slice(0, 57) + "…" : oe : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: ee,
        description: Oe,
        kp: We,
        isActive: Z,
        slotKey: C ?? "",
        equipped: L
      };
    });
    const Xe = (((It = e.weaponsTable) == null ? void 0 : It.length) ?? 0) > 0 || (((St = e.armorTable) == null ? void 0 : St.length) ?? 0) > 0 || (((Tt = e.microchipsTable) == null ? void 0 : Tt.length) ?? 0) > 0 || (((Dt = e.itemsTable) == null ? void 0 : Dt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Xe;
    const Me = this.actor.system.abilities ?? {}, Ze = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).map((y) => {
      var _, C, L;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((_ = y.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((C = y.system) == null ? void 0 : C.description) ?? "",
        kp: Number(((L = y.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), Ke = new Map(Ze.map((y) => [y.id, y])), Ve = "— Nincs képesség —", je = (y) => {
      const _ = Me[y] ?? {}, C = (_.itemId ?? "").trim(), L = C ? Ke.get(C) : null, M = (L == null ? void 0 : L.description) ?? "", ee = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Ve,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: ee
      };
    };
    e.abilityFajiSlot = je("faji"), e.abilityHatterSlot = je("hatter");
    const He = (y) => {
      const _ = Me[y];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, Ue = (y) => y.map((_) => {
      const C = Ke.get(_);
      return C ? {
        id: C.id,
        name: C.name,
        img: C.img,
        description: C.description,
        kp: C.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ue(He("passive")), e.abilityActiveList = Ue(He("active"));
    const et = ((Ct = e.system) == null ? void 0 : Ct.resources) ?? {}, tt = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Te = (qt = (Ot = e.system) == null ? void 0 : Ot.combat) == null ? void 0 : qt.initiativeResult, De = typeof Te == "number" ? Te : -1, st = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ze = (Nt = (Lt = e.system) == null ? void 0 : Lt.combat) == null ? void 0 : Nt.initiativeRanges, Pe = Array.isArray(ze) ? ze.map((y) => ({ min: Number(y.min) ?? 0, max: Number(y.max) ?? 0, kp: Math.min(6, Math.max(0, Number(y.kp) ?? 0)) })) : [], it = Pe.length > 0 ? Pe : st;
    e.initiativeRanges = Pe;
    let Be = 0;
    if (typeof De == "number" && De >= 0) {
      const y = it.find((_) => De >= _.min && De <= _.max);
      y && (Be = y.kp);
    }
    e.kpDots = tt.map((y, _) => {
      const C = _ + 1, L = !!Number(et[y]), M = C <= Be;
      return { index: C, used: L, usable: M };
    });
    const k = !!((Pt = (At = game.combat) == null ? void 0 : At.combatants) != null && Pt.some((y) => {
      var _;
      return ((_ = y.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = k, e.canEditInitiative = !!((Et = game.user) != null && Et.isGM), e.showInitiativeResult = typeof Te == "number", e.initiativeResult = e.showInitiativeResult ? Te : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-BoxpHtrW.mjs");
      r(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, m, h;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let a = (o.dataset.itemId ?? "").trim();
      if (!a) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        a = (((((m = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : m.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((h = o.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-BoxpHtrW.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-harc-range-add", async (i) => {
      var r, m;
      if (i.preventDefault(), i.stopPropagation(), !((r = this.actor) != null && r.system)) return;
      const o = ((m = this.actor.system.combat) == null ? void 0 : m.initiativeRanges) ?? [], a = Array.isArray(o) ? o.slice() : [];
      a.push({ min: 0, max: 0, kp: 0 }), await this.actor.update({ "system.combat.initiativeRanges": a }), this.render(!0);
    }), t.on("click", ".karakter-harc-range-remove", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, a = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(a) || !((h = this.actor) != null && h.system)) return;
      const r = ((v = this.actor.system.combat) == null ? void 0 : v.initiativeRanges) ?? [], m = Array.isArray(r) ? r.slice() : [];
      a < 0 || a >= m.length || (m.splice(a, 1), await this.actor.update({ "system.combat.initiativeRanges": m }), this.render(!0));
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, a = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(a) || a < 1 || a > 6) return;
      const r = `system.resources.kpDot${a}`, m = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${a}`]);
      await this.actor.update({ [r]: m ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const o = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const a = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
    const c = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', c), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, m, h;
      i.preventDefault(), i.stopPropagation();
      const o = ((h = (m = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget, a = o.dataset.skill, r = ((h = o.textContent) == null ? void 0 : h.trim()) || a, { openRollSheetForSkill: m } = await import("./roll-sheet-BoxpHtrW.mjs");
      m(this.actor, a, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, q, A, P, D, E;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), r = a == null ? void 0 : a.dataset.slot;
      if (!r) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((A = (q = this.actor.items).get) == null ? void 0 : A.call(q, h)) ?? ((D = (P = this.actor.items.contents) == null ? void 0 : P.find) == null ? void 0 : D.call(P, (N) => N.id === h));
      (E = v == null ? void 0 : v.sheet) == null || E.render(!0);
    });
    const l = (i, o) => {
      var m;
      const a = i.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (m = r.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, a = o.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r) return;
      let m = Number(o.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await r.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor, m = r.items.get(a);
      if (!m) return;
      const h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = I ? I.split(/\s*,\s*/).filter((P) => T.includes(P)) : [], A = q.find((P) => {
          var D;
          return (((D = v[P]) == null ? void 0 : D.itemId) ?? "").trim() === a;
        });
        if (A) {
          const P = q.filter((D) => D !== A);
          h["system.weapons.slotOrder"] = P.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var A, P;
      const o = i.currentTarget, a = (o.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = I.find((D) => {
        var E;
        return (((E = m[D]) == null ? void 0 : E.itemId) ?? "").trim() === a;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let D = I.find((N) => {
          var j;
          return !((j = m[N]) != null && j.itemId);
        });
        const E = new Set(I);
        if (!D) {
          const N = v.find((j) => !E.has(j));
          if (!N) return;
          D = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${D}.itemId`]: a,
          [`system.weapons.${D}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${D}.damage`]: ((A = r == null ? void 0 : r.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((P = r == null ? void 0 : r.system) == null ? void 0 : P.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const D = I.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
      const a = o.closest(".karakter-microchip-slot-select-wrap"), r = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var D;
      i.preventDefault();
      const o = i.currentTarget, a = o.closest(".karakter-microchip-slot-select-wrap"), r = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), m = r == null ? void 0 : r.dataset.slot;
      if (!m) return;
      const h = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((D = o.textContent) == null ? void 0 : D.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (o.dataset.itemImg ?? "").trim(), T = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let q = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      I ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", r == null || r.insertBefore(q, T)), q.src = I, q.style.display = "") : q && q.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const A = h ? this.actor.items.get(h) : null, P = {
        [`system.gear.microchips.${m}.itemId`]: h,
        [`system.gear.microchips.${m}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      h && (P[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(P);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "MikroChip") return;
      const r = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = r[T]) == null ? void 0 : q.itemId) ?? "").trim() === o;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const a = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${o}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const a = o.dataset.slot;
      o.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, a)), o.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, a));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const a = o.dataset.slot;
      a && (o.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, a)), o.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const a = o.dataset.area;
      a && (o.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, a)), o.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, a = i.currentTarget.dataset.itemId;
      if (!o || !a) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[o]) == null ? void 0 : v.items) ? r[o].items.slice() : []).filter((I) => I !== a);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const r = this.actor.items.get(a);
      (m = r == null ? void 0 : r.sheet) == null || m.render(!0);
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
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, a = (o.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const m = (o.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, a = (o.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var A, P;
      const o = i.currentTarget, a = (o.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = I.find((D) => {
        var E;
        return (((E = m[D]) == null ? void 0 : E.itemId) ?? "").trim() === a;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let D = I.find((N) => {
          var j;
          return !((j = m[N]) != null && j.itemId);
        });
        const E = new Set(I);
        if (!D) {
          const N = v.find((j) => !E.has(j));
          if (!N) return;
          D = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${D}.itemId`]: a,
          [`system.weapons.${D}.name`]: r.name ?? "",
          [`system.weapons.${D}.damage`]: ((A = r.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((P = r.system) == null ? void 0 : P.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const D = I.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
      const r = this.actor, m = r.items.get(a), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = I ? I.split(/\s*,\s*/).filter((P) => T.includes(P)) : [], A = q.find((P) => {
          var D;
          return (((D = v[P]) == null ? void 0 : D.itemId) ?? "").trim() === a;
        });
        if (A) {
          const P = q.filter((D) => D !== A);
          h["system.weapons.slotOrder"] = P.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const o = i.currentTarget, a = (o.dataset.itemId ?? "").trim();
      if (!a) return;
      const r = this.actor.items.get(a);
      if (!r || r.type !== "Targy") return;
      const m = (o.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, p = (i) => {
      var r, m, h, v;
      if (!i) return;
      const o = f._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const a = ((m = (r = o.system) == null ? void 0 : r.resources) == null ? void 0 : m.currentHealth) != null || ((v = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(o).then(() => {
        a && setTimeout(() => f.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (i) => {
      var o, a, r;
      return i && (((a = (o = f.element) == null ? void 0 : o.contains) == null ? void 0 : a.call(o, i)) || f.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const a = o.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const r = o.form;
      if (!g(r)) return;
      const m = i.relatedTarget;
      m && (r.contains(m) || f.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), p(r));
    }, document.body.addEventListener("blur", f._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, f, p;
    const e = {};
    for (const g of s.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      g.type === "checkbox" ? b = g.checked : g.type === "number" ? b = g.value === "" ? 0 : Number(g.value) : b = g.value ?? "", foundry.utils.setProperty(e, g.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const g of c) {
      const b = ((p = n[g]) == null ? void 0 : p.value) ?? 0, u = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, W._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, c, l, f, p, g, b, u, i, o;
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
          let m = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            m = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? m;
          }
          const h = (((c = r.system) == null ? void 0 : c.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": m,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": m,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", T = Array.isArray((l = v[I]) == null ? void 0 : l.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          T.includes(m) || T.push(m), await this.actor.update({ [`system.abilities.${I}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let a = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
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
          const m = this.actor, h = ((p = r.parent) == null ? void 0 : p.id) !== m.id;
          let v = r.id;
          if (h) {
            const I = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await m.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (h) {
            const I = ((b = m.system) == null ? void 0 : b.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = T ? T.split(/\s*,\s*/).filter((D) => q.includes(D)) : [], P = A.filter((D) => {
              var E;
              return (((E = I[D]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (P.length > 0) {
              const E = {
                "system.weapons.slotOrder": A.filter((N) => !P.includes(N)).join(",")
              };
              for (const N of P)
                E[`system.weapons.${N}.itemId`] = "", E[`system.weapons.${N}.name`] = "", E[`system.weapons.${N}.damage`] = "", E[`system.weapons.${N}.bonus`] = "";
              await m.update(E);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const m = this.actor;
          if (((u = r.parent) == null ? void 0 : u.id) !== m.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await m.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const m = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== m.id && await m.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const m = this.actor;
          ((o = r.parent) == null ? void 0 : o.id) !== m.id && await m.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, c, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, f, p, g, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    const c = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
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
    var p, g;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, o = typeof u.sort == "number" ? u.sort : 0;
      return i - o;
    }).map((b) => b.id), c = d.indexOf(t), l = d.indexOf(e);
    if (c === -1 || l === -1) return;
    d.splice(c, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var n, d, c;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    var f, p, g;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${c}
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
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${l}
      ${f}
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
    var c, l, f;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : f.id) ?? d;
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
    var f, p, g, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const c = this.actor.system.abilities ?? {}, l = Array.isArray((b = c[e]) == null ? void 0 : b.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, c, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, f, p, g, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "MikroChip") return;
    let c = d.id;
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (c = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? d -= 6 : c === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(f);
    await p.evaluate({ async: !0 });
    const { resultType: g, label: b } = mt(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
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
    var c;
    const s = Number(((c = this.actor.system.skills) == null ? void 0 : c.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((q) => q.type === "Fegyver");
    let c = null;
    t.itemId && (c = d.find((q) => q.id === t.itemId) ?? null);
    const l = c && c.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, p = ((I = c == null ? void 0 : c.system) == null ? void 0 : I.type) || "kinetic", g = (((T = c == null ? void 0 : c.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = g && n[g] !== void 0 ? g : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = f + u, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(a);
    await r.evaluate({ async: !0 });
    const { resultType: m, label: h } = mt(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, p, g, b, u, i, o, a, r, m;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (f = t.items).get) == null ? void 0 : p.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (m = (o = ui.notifications) == null ? void 0 : o.warn) == null || m.call(o, ((r = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : r.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
J(W, "PARTS", foundry.utils.mergeObject(
  z(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), J(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ut = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Ut.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((zt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : zt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Gt = (Bt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Bt.window) == null ? void 0 : Gt.contentClasses) ?? [],
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
let pt = W;
function Ds(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Wt, Yt, Jt, Qt;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, c, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), a = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && a && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const c = await super.render(s, e), l = this.element, f = this.form ?? this.element, p = d.scrollState, g = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var i, o;
      if (this._applyScrollState(l, p), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const a = ((i = f.querySelector) == null ? void 0 : i.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (o = f.querySelector) == null ? void 0 : o.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA") && (a.focus({ preventScroll: !0 }), typeof a.selectionStart == "number" && (a.selectionStart = g.selectionStart ?? 0, a.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || g) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), c;
  }
  async _prepareContext(s) {
    var re, xe, Re, Ae, Xe, Me, Ze, Ke, Ve, je, He, Ue, et, tt, Te, De, st, ze, Pe, it, Be;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((re = this.actor) == null ? void 0 : re.system), e.showDeathSkull = !1, e.sizeForSelect = (((Re = (xe = e.system) == null ? void 0 : xe.identity) == null ? void 0 : Re.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((Ae = t == null ? void 0 : t.items) == null ? void 0 : Ae.contents) ?? [], d = ((Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.weapons) ?? {}, c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => c.includes(k)) : [], p = n.filter((k) => k.type === "Fegyver"), g = p.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : c, i = c.filter((k) => !u.includes(k)), o = [...u, ...i], a = o.filter((k) => {
      var R;
      const F = (((R = d[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return F && p.some((U) => U.id === F);
    });
    e.weaponSlots = a.map((k) => {
      const F = d[k] ?? {}, R = (F.itemId ?? "").trim(), U = g.find((ae) => ae.id === R);
      return {
        slotKey: k,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || F.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const r = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, m = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = p.map((k) => {
      var Ge;
      const F = k.id;
      let R = null, U = {};
      for (const Fe of o)
        if ((((Ge = d[Fe]) == null ? void 0 : Ge.itemId) ?? "").trim() === F) {
          R = Fe, U = d[Fe] ?? {};
          break;
        }
      const ae = !!R, Q = (k == null ? void 0 : k.system) ?? {}, Ee = typeof Q.range == "string" ? (Q.range || "").trim() : "", fe = Q.type ?? "", ve = (r[fe] ?? fe) || "—", ye = Q.size ?? "", _e = (m[ye] ?? ye) || "", Ce = [ve, _e].filter(Boolean).join(", ") || ve || "—", nt = fe === "projectile" || ye === "thrown", rt = Q.quantity != null ? String(Q.quantity).trim() : "1", at = String(Q.bonus ?? U.bonus ?? "").trim() || "0", ot = (Q.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: at,
        damage: ot,
        rangeStr: Ee || "—",
        typeAndSize: Ce,
        quantity: rt,
        isProjectile: nt,
        equipped: ae,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const h = n.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var U;
      const F = (k == null ? void 0 : k.system) ?? {}, R = ((U = k.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: Ds((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const v = ((Ze = (Me = t == null ? void 0 : t.system) == null ? void 0 : Me.gear) == null ? void 0 : Ze.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var fe, ve, ye, _e;
      const F = k.id;
      let R = null;
      for (const Ce of I)
        if ((((fe = v[Ce]) == null ? void 0 : fe.itemId) ?? "").trim() === F) {
          R = Ce;
          break;
        }
      const U = ((ve = k == null ? void 0 : k.system) == null ? void 0 : ve.abilityType) ?? "", ae = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", Q = (((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.description) ?? "").trim(), Ee = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ae,
        description: Ee,
        kp: Number((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const q = n.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, R = (F.description ?? "").trim(), U = R ? R.length > 60 ? R.slice(0, 57) + "…" : R : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: U
      };
    });
    const A = n.filter((k) => k.type === "Egyeb");
    e.egyebList = A.map((k) => {
      const R = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), U = R ? R.length > 80 ? R.slice(0, 77) + "…" : R : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: U
      };
    });
    const P = (((Ke = e.weaponsTable) == null ? void 0 : Ke.length) ?? 0) > 0 || (((Ve = e.armorTable) == null ? void 0 : Ve.length) ?? 0) > 0 || (((je = e.microchipsTable) == null ? void 0 : je.length) ?? 0) > 0 || (((He = e.itemsTable) == null ? void 0 : He.length) ?? 0) > 0 || (((Ue = e.egyebList) == null ? void 0 : Ue.length) ?? 0) > 0;
    e.showEquipmentDropZone = !P;
    const D = ((et = t == null ? void 0 : t.system) == null ? void 0 : et.abilities) ?? {}, E = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, R;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((R = k.system) == null ? void 0 : R.kp) ?? 0) || 0
      };
    }), N = new Map(E.map((k) => [k.id, k])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = j, e.abilityHatterSlot = j;
    const B = (k) => {
      const F = D[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, H = (k) => (k || []).map((F) => {
      const R = N.get(F);
      return R ? { id: R.id, name: R.name, img: R.img, description: R.description, kp: R.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = H(B("passive")), e.abilityActiveList = H(B("active"));
    const G = t == null ? void 0 : t.id, V = !!((Te = (tt = game.combat) == null ? void 0 : tt.combatants) != null && Te.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === G;
      }
    ));
    e.showHarcSection = V;
    const x = ((De = e.system) == null ? void 0 : De.resources) ?? {}, Y = (ze = (st = e.system) == null ? void 0 : st.combat) == null ? void 0 : ze.initiativeResult, X = typeof Y == "number" ? Y : -1, he = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ne = (it = (Pe = e.system) == null ? void 0 : Pe.combat) == null ? void 0 : it.initiativeRanges, be = Array.isArray(ne) ? ne.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(6, Math.max(0, Number(k.kp) ?? 0)) })) : [], Ne = be.length > 0 ? be : he;
    e.initiativeRanges = be;
    let ke = 0;
    if (typeof X == "number" && X >= 0) {
      const k = Ne.find((F) => X >= F.min && X <= F.max);
      k && (ke = k.kp);
    }
    const ie = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    return e.kpDots = ie.map((k, F) => {
      const R = F + 1, U = !!Number(x[k]), ae = R <= ke;
      return { index: R, used: U, usable: ae };
    }), e.canEditInitiative = !!((Be = game.user) != null && Be.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e;
  }
  _attachFrameListeners(s) {
    var p, g, b;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var a, r, m;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((m = (r = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : m.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var a, r, m;
      u.preventDefault();
      const i = (r = (a = u.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (m = o == null ? void 0 : o.sheet) == null || m.render(!0);
    });
    const n = (u) => {
      var a, r;
      const i = (a = u == null ? void 0 : u.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (r = o == null ? void 0 : o.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, m, h, v;
      u.preventDefault();
      const i = (m = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : m.call(r, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const a = this.actor.items.get(o);
      (v = a == null ? void 0 : a.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-BoxpHtrW.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var a, r, m, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let o = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !o && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (o = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BoxpHtrW.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-harc-range-add", async (u) => {
      var a, r;
      if (u.preventDefault(), u.stopPropagation(), !((a = this.actor) != null && a.system)) return;
      const i = ((r = this.actor.system.combat) == null ? void 0 : r.initiativeRanges) ?? [], o = Array.isArray(i) ? i.slice() : [];
      o.push({ min: 0, max: 0, kp: 0 }), await this.actor.update({ "system.combat.initiativeRanges": o }), this.render(!0);
    }), t.on("click", ".karakter-harc-range-remove", async (u) => {
      var m, h;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || !((m = this.actor) != null && m.system)) return;
      const a = ((h = this.actor.system.combat) == null ? void 0 : h.initiativeRanges) ?? [], r = Array.isArray(a) ? a.slice() : [];
      o < 0 || o >= r.length || (r.splice(o, 1), await this.actor.update({ "system.combat.initiativeRanges": r }), this.render(!0));
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var r, m;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6 || !this.actor) return;
      const a = !!Number((m = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : m[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: a ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var m, h;
      u.preventDefault();
      const i = u.currentTarget, o = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.skill) ?? "").trim(), a = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-BoxpHtrW.mjs");
      r(this.actor, o, a);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var o, a;
      u.preventDefault();
      const i = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var a, r;
      u.preventDefault();
      const i = (((r = (a = u.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, T, q, A;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, o = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !o || !this.actor) return;
      const a = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, m = (Array.isArray((A = a[i]) == null ? void 0 : A.items) ? a[i].items.slice() : []).filter((P) => P !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: m }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var o, a;
      if (u.preventDefault(), !u.altKey) return;
      const i = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const a = this.actor, r = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), m = {};
      r && (m[`system.weapons.${r}.itemId`] = "", m[`system.weapons.${r}.name`] = "", m[`system.weapons.${r}.damage`] = "", m[`system.weapons.${r}.bonus`] = ""), Object.keys(m).length && await a.update(m), await a.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var o, a;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var m, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (m = u.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = o[T]) == null ? void 0 : q.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var a, r;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((r = (a = u.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var m, h, v;
      const i = u.currentTarget, o = (h = (m = i == null ? void 0 : i.dataset) == null ? void 0 : m.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      const r = a.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const c = this, l = (u) => {
      if (!u) return;
      const i = c._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && c.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, f = (u) => {
      var i, o, a;
      return u && (((o = (i = c.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, u)) || c.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (u) => {
      var m;
      const i = u.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = i.form;
      if (!f(a)) return;
      const r = u.relatedTarget;
      r && (a.contains(r) || c.id && ((m = r.closest) != null && m.call(r, `#${CSS.escape(c.id)}`))) || l(a);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (u, i, o) => {
      var a;
      c.actor && ((a = u == null ? void 0 : u.parent) == null ? void 0 : a.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (u, i, o) => {
      var a;
      c.actor && ((a = u == null ? void 0 : u.parent) == null ? void 0 : a.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var T, q, A, P, D;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((q = e.system) == null ? void 0 : q.skills) ?? {}, c = ((A = e.items) == null ? void 0 : A.filter((E) => E.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = c.find((E) => E.id === n.itemId) ?? null);
    const f = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, g = ((P = l == null ? void 0 : l.system) == null ? void 0 : P.type) || "kinetic", b = (((D = l == null ? void 0 : l.system) == null ? void 0 : D.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : g === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, o = p + i, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, m = new Roll(r);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: v } = mt(m), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, p, g, b, u, i, o, a, r, m;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (f = t.items).get) == null ? void 0 : p.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (m = (o = ui.notifications) == null ? void 0 : o.warn) == null || m.call(o, ((r = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : r.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var g, b, u, i, o, a, r, m, h, v, I, T, q, A, P, D, E;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const n = ((N) => {
      var B;
      if (!N) return null;
      const j = N.uuid ?? N.documentUuid ?? ((B = N.data) == null ? void 0 : B.uuid) ?? (typeof N == "string" ? N : null);
      if (j) return j;
      if (typeof N == "object") {
        for (const H of Object.values(N))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
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
    const c = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((a = d.parent) == null ? void 0 : a.id) !== c.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((r = (await c.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : r.id) ?? N;
      }
      const j = (((m = d.system) == null ? void 0 : m.kind) ?? "passive").toString(), B = ((h = c.system) == null ? void 0 : h.abilities) ?? {}, H = j === "active" ? "active" : "passive", G = Array.isArray((v = B[H]) == null ? void 0 : v.items) ? B[H].items.slice() : Array.isArray(B[H]) ? B[H].slice() : [];
      G.includes(N) || G.push(N), await c.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === c.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (T = (await c.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && p) {
      const N = ((q = c.system) == null ? void 0 : q.weapons) ?? {}, j = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], B = (N.slotOrder ?? "").trim(), H = B ? B.split(/\s*,\s*/).filter((x) => j.includes(x)) : [];
      let G = j.find((x) => {
        var Y;
        return !(((Y = N[x]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      G || (G = j.find((x) => !H.includes(x)) ?? "slot1");
      const V = H.includes(G) ? H : [...H, G].filter((x) => j.includes(x));
      await c.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((P = d.system) == null ? void 0 : P.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const N = ((E = (D = c.system) == null ? void 0 : D.gear) == null ? void 0 : E.microchips) ?? {}, B = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = N[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      B && await c.update({
        [`system.gear.microchips.${B}.itemId`]: p,
        [`system.gear.microchips.${B}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var g, b, u, i, o, a;
    const e = (b = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((a = this.actor) == null ? void 0 : a.name) ?? void 0 }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var f, p, g, b, u, i;
    const e = (p = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const o = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const a = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        a > 0 && (d = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${c}
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
        const c = (n.value ?? "").trim();
        if (c === "") continue;
        d = Number(c) || 0;
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
  z(se, se, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), J(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(se, se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Wt = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Yt = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Yt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Qt = (Jt = z(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Jt.window) == null ? void 0 : Qt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let ft = se;
const _s = [
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
var Xt;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = _s, e;
  }
};
J(ce, "PARTS", foundry.utils.mergeObject(z(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), J(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Xt = z(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Xt.form) ?? {}, { submitOnChange: !1 })
}));
let yt = ce;
var Zt;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
J(le, "PARTS", foundry.utils.mergeObject(z(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), J(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Zt = z(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Zt.form) ?? {}, { submitOnChange: !1 })
}));
let gt = le;
var Vt;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
J(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), J(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Vt = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Vt.form) ?? {}, { submitOnChange: !1 })
}));
let ht = ue;
var es;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (c) => {
      var p;
      const l = c.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
J(de, "PARTS", foundry.utils.mergeObject(z(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), J(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((es = z(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : es.form) ?? {}, { submitOnChange: !0 })
}));
let bt = de;
var ts;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
J(me, "PARTS", foundry.utils.mergeObject(z(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), J(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ts = z(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : ts.form) ?? {}, { submitOnChange: !1 })
}));
let kt = me;
var ss;
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
    e._votvProfileImgClick = (c) => {
      var p, g, b, u, i, o, a;
      if (!e.isEditable || !((g = (p = c.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = c.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const l = ((a = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
    const n = (c) => {
      if (!c) return;
      const l = e._getFormDataForUpdate(c);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (c) => {
      var l, f, p;
      return c && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, c)) || e.id && ((p = c.closest) == null ? void 0 : p.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, p, g;
      const l = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (p = c.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
J(pe, "PARTS", foundry.utils.mergeObject(z(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), J(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ss = z(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : ss.form) ?? {}, { submitOnChange: !1 })
}));
let vt = pe;
const ns = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function rs(w) {
  return w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, n, d, c;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ys, CONFIG.Actor.dataModels.Npc = is, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Rt, CONFIG.Item.dataModels.weapon = Rt, CONFIG.Item.dataModels.Pancel = bs, CONFIG.Item.dataModels.MikroChip = ks, CONFIG.Item.dataModels.Kepesseg = jt, CONFIG.Item.dataModels.ability = jt, CONFIG.Item.dataModels.Targy = ws, CONFIG.Item.dataModels.Egyeb = Ss, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (c = CONFIG.Item).typeLabels ?? (c.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ft, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", yt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", gt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ht, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", bt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", kt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", vt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const w = 500;
  Hooks.on("updateActor", (l, f, p, g) => {
    var I, T, q, A, P, D, E, N, j, B, H, G, V;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if ((l.type === "Karakter" || l.type === "Npc") && ((I = f == null ? void 0 : f.system) != null && I.combat) && "initiativeResult" in f.system.combat) {
      const x = Number((q = (T = l.system) == null ? void 0 : T.combat) == null ? void 0 : q.initiativeResult), Y = Number.isFinite(x) ? x : 0, X = game.combat;
      if (X) {
        const he = ((A = X.combatants) == null ? void 0 : A.contents) ?? Array.from(X.combatants ?? []);
        for (const ne of he)
          if (((P = ne.actor) == null ? void 0 : P.id) === b || ne.actorId === b) {
            X.updateEmbeddedDocuments("Combatant", [{ _id: ne.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (l.type === "Npc" && ((D = f == null ? void 0 : f.system) != null && D.identity) && "size" in f.system.identity) {
      const x = rs((N = (E = l.system) == null ? void 0 : E.identity) == null ? void 0 : N.size);
      l.update({
        "prototypeToken.width": x,
        "prototypeToken.height": x
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, Y));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), o = [], a = (j = game.actors) == null ? void 0 : j.get(b);
    a != null && a.apps && o.push(...Array.from(a.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const x of r)
      ((B = x.document) == null ? void 0 : B.id) !== b || ((H = x.document) == null ? void 0 : H.documentName) !== "Actor" || ((G = x.constructor) == null ? void 0 : G.name) !== "VoidKarakterSheet" || o.includes(x) || o.push(x);
    if (i && o.some((x) => {
      const Y = (x == null ? void 0 : x.form) ?? (x == null ? void 0 : x.element);
      return Y && Y.contains(u);
    })) return;
    const h = (V = game.votv) == null ? void 0 : V._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < w ? h.appId : null;
    setTimeout(() => {
      for (const x of o)
        !(x != null && x.rendered) || typeof x.render != "function" || x.id !== v && x.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, p, g) => {
    var o, a, r;
    const b = l == null ? void 0 : l.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || l.type !== "Fegyver") return;
    const u = ((o = b.system) == null ? void 0 : o.weapons) ?? {}, i = {};
    for (const [m, h] of Object.entries(u)) {
      if (!m.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (i[`system.weapons.${m}.name`] = l.name ?? "", i[`system.weapons.${m}.damage`] = ((a = l.system) == null ? void 0 : a.damage) ?? "", i[`system.weapons.${m}.bonus`] = ((r = l.system) == null ? void 0 : r.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var w, s;
  document.body.addEventListener("click", async (e) => {
    var m, h, v, I, T, q, A, P, D, E, N, j, B, H, G, V, x, Y, X, he, ne, be, Ne;
    const t = (h = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), c = (T = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!c) return;
    const l = c.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((A = game.actors) == null ? void 0 : A.get(c.actorId)) ?? ((P = game.actors) == null ? void 0 : P.get(l));
    if (f || (f = ((E = (D = game.scenes) == null ? void 0 : D.contents) == null ? void 0 : E.flatMap((ie) => {
      var re;
      return ((re = ie.tokens) == null ? void 0 : re.contents) ?? [];
    }).map((ie) => ie.actor).find((ie) => ie && (ie.id === l || ie.id === c.actorId))) ?? null), !f) return;
    const p = c.itemId ? ((j = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : j.call(N, c.itemId)) ?? ((G = (H = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (ke) => ke.id === c.itemId)) : null;
    let g = (c.damageFormula ?? "").trim();
    if (g || (g = (((V = p == null ? void 0 : p.system) == null ? void 0 : V.damage) ?? "").trim()), !g && c.slotKey && (g = (((((x = f.system) == null ? void 0 : x.weapons) ?? {})[c.slotKey] ?? {}).damage ?? "").trim()), !g) {
      (ne = (Y = ui.notifications) == null ? void 0 : Y.warn) == null || ne.call(Y, ((he = (X = game.i18n) == null ? void 0 : X.localize) == null ? void 0 : he.call(X, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(g);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = c.targetName || "", o = c.hitLocationName || "", a = ((p == null ? void 0 : p.name) ?? (c.slotKey ? ((Ne = (((be = f.system) == null ? void 0 : be.weapons) ?? {})[c.slotKey]) == null ? void 0 : Ne.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${a} – sebzés – ${i}` : `${a} – sebzés`;
    o && (r += ` (${o})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, l, f, p, g, b;
      if (!((l = (c = e.target) == null ? void 0 : c.closest) != null && l.call(c, "#actors"))) return;
      const t = (p = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : p.call(f, "[data-document-id]"), n = (g = t == null ? void 0 : t.getAttribute) == null ? void 0 : g.call(t, "data-document-id");
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
        background: { src: ns },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await n.create(d);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var c, l, f, p, g, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, o = ((l = i == null ? void 0 : i.bar1) == null ? void 0 : l.attribute) ?? "", a = ((f = i == null ? void 0 : i.bar2) == null ? void 0 : f.attribute) ?? "";
        (o || a) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((p = u.tokens) == null ? void 0 : p.filter((o) => {
        var a;
        return ((a = o.actor) == null ? void 0 : a.type) === "Karakter";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(e);
        } catch (a) {
          console.warn("Vacuum of the Void | Token update failed for", o.name, a);
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((o) => {
        var a;
        return ((a = o.actor) == null ? void 0 : a.type) === "Npc";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(n);
        } catch (a) {
          console.warn("Vacuum of the Void | NPC token update failed for", o.name, a);
        }
    }
  })();
});
Hooks.on("preCreateToken", (w, s, e) => {
  var c, l, f, p;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, n = t ?? w.actorId ?? null;
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
      const g = rs((p = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : p.size);
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
const Cs = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function as(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Cs).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || as(w);
});
function os() {
  var s, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], c = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const l of c)
      !l || w.has(l.id) || (w.add(l.id), typeof l.render == "function" && l.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || w.has(n.id) || (w.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(os, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && as(w), setTimeout(os, 0);
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
    const c = s[0] ?? s;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ns,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, s, e) => {
  var p, g, b, u;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, c = t.weaponAttack, l = t.weapon;
  if (!n && !d && !c) return;
  const f = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (f) {
    if (n && f.classList.add(`votv-${n}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const o = f.querySelector(".dice-total"), a = (o == null ? void 0 : o.parentElement) ?? f, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = d, a.appendChild(r);
      }
    }
    if (c && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const m = !!l.isHit, h = l.targetName || "Célpont";
        r.textContent = m ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(r);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const m = document.createElement("button");
        m.type = "button", m.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        m.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", m.dataset.actorId = String(l.actorId ?? ((u = w.speaker) == null ? void 0 : u.actor) ?? ""), m.dataset.itemId = String(l.itemId ?? ""), m.dataset.slotKey = String(l.slotKey ?? ""), m.dataset.targetName = String(l.targetName ?? ""), m.dataset.hitLocationName = String(l.hitLocationName ?? ""), m.dataset.messageId = String(w.id ?? ""), o.appendChild(m);
      }
    }
  }
});
export {
  pt as V,
  mt as c
};
//# sourceMappingURL=vacuum-of-the-void-Cv-5YMWV.mjs.map
