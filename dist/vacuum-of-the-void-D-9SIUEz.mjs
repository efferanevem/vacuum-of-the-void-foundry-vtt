var ts = Object.defineProperty;
var ss = Object.getPrototypeOf;
var is = Reflect.get;
var rs = (T, s, e) => s in T ? ts(T, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : T[s] = e;
var W = (T, s, e) => rs(T, typeof s != "symbol" ? s + "" : s, e);
var j = (T, s, e) => is(ss(T), e, s);
const { HTMLField: ns, NumberField: O, SchemaField: K, StringField: I, BooleanField: Z, ArrayField: je } = foundry.data.fields;
class Xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new O({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new I({ required: !1, blank: !0, initial: "" }),
        assignment: new I({ required: !1, blank: !0, initial: "" }),
        subAssignment: new I({ required: !1, blank: !0, initial: "" }),
        background: new I({ required: !1, blank: !0, initial: "" }),
        languages: new I({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new I({ required: !1, blank: !0, initial: "" })
      }),
      resources: new K({
        health: new K({
          value: new O({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new O({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
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
        initiativeResult: new O({ required: !1, integer: !0, initial: void 0 })
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
        quickThinking1: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new I({ required: !1, blank: !0, initial: "" }),
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
        slotOrder: new I({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new K({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new K({
        microchips: new K({
          slot1: new K({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          })
        }),
        equipment: new I({ required: !1, blank: !0, initial: "" }),
        armor: new je(
          new K({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new je(
          new K({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new O({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new K({
        faji: new K({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new K({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        passive: new K({
          items: new je(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new je(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new ns({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Be, SchemaField: as } = foundry.data.fields;
class os extends Xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new as({
        body: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: cs, NumberField: vs, StringField: ve } = foundry.data.fields;
class Nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new cs({ required: !1, initial: !1 }),
      type: new ve({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ve({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ve({ required: !1, blank: !0, initial: "" }),
      damage: new ve({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ve({ required: !1, blank: !0, initial: "" }),
      special: new ve({ required: !1, blank: !0, initial: "" }),
      quantity: new ve({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new ve({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ls, StringField: He } = foundry.data.fields;
class us extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ls({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new He({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new He({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new He({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new He({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: At } = foundry.data.fields;
class ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new At({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new At({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Ge({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ge({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ge({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ms, StringField: Et } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Et({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Et({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ms({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: $t } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $t({ required: !1, blank: !0, initial: "" }),
      quantity: new $t({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: fs } = foundry.data.fields;
class ys extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fs({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(T) {
  if (!T || !Array.isArray(T.terms)) return { resultType: null, label: null };
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
        const w = Number(v.result ?? v);
        Number.isFinite(w) && h.push(w);
      }
    }
  };
  d(T.terms, 1);
  const r = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = r + f, b = l + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function gs(T) {
  return T ? T === "1" ? "1. szint" : T === "2" ? "2. szint" : T === "3" ? "3. szint" : T === "Alap" ? "Alap" : T : "Alap";
}
var xt, Mt, Rt, Kt;
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
    const m = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var a, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = y.querySelector) == null ? void 0 : p.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
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
    const n = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = n.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, r = ((a = n.currentHealth) == null ? void 0 : a.legs) ?? 0, l = B._healthStatusFromRatio(r, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
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
    const f = Number(r == null ? void 0 : r.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, a, p, h, v;
    const e = s ?? this.form ?? this.element, t = (w) => {
      var S;
      return ((S = e == null ? void 0 : e.querySelector) == null ? void 0 : S.call(e, w)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${w}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const f = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, y = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (B._healthStatusFromRatio(y, m) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, f, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var xe, Ae, st, it, rt, nt, at, ot, ct, lt, ut, dt, mt, pt, ft, yt, gt, ht, bt, kt, vt, wt, It, St, Tt, Dt, _t, Ct, Ot;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((st = (Ae = (xe = this.actor.system) == null ? void 0 : xe.resources) == null ? void 0 : Ae.stress) == null ? void 0 : st.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const _ = ((it = d[g]) == null ? void 0 : it.value) ?? 0, C = r[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(C, _);
    }
    const f = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((nt = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : nt.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const a = (Number(((ot = (at = this.actor.system) == null ? void 0 : at.combat) == null ? void 0 : ot.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: a } },
      { inplace: !1 }
    );
    const p = ((ct = e.system) == null ? void 0 : ct.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const w = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, _] of Object.entries(w)) {
      const C = e.computedHealthStatus[_];
      e.skillHealthStatus[g] = C, e.skillDisabled[g] = C === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const S = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (S.slotOrder ?? "").trim(), E = A ? A.split(/\s*,\s*/).filter((g) => q.includes(g)) : [], D = (lt = this.actor.system.gear) == null ? void 0 : lt.microchips, F = D && typeof D == "object" && !Array.isArray(D) ? D : {}, P = (((ut = F.slot1) == null ? void 0 : ut.itemId) ?? "").trim(), N = (((dt = F.slot2) == null ? void 0 : dt.itemId) ?? "").trim(), H = (((mt = F.slot3) == null ? void 0 : mt.itemId) ?? "").trim(), G = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, _) => {
      const C = typeof g.sort == "number" ? g.sort : 0, L = typeof _.sort == "number" ? _.sort : 0;
      return C - L;
    }).map((g) => {
      var fe, Oe, qe, be, ke, Re;
      const _ = g.type === "Fegyver", C = g.type === "MikroChip";
      let L = 0, M = "", X = null;
      for (let Ee = 0; Ee < E.length; Ee++) {
        const Ke = E[Ee];
        if ((((fe = S[Ke]) == null ? void 0 : fe.itemId) ?? "") === g.id) {
          L = Ee + 1, M = ((Oe = S[Ke]) == null ? void 0 : Oe.bonus) ?? "", X = Ke;
          break;
        }
      }
      let Q = null;
      C && (P === g.id ? Q = "slot1" : N === g.id ? Q = "slot2" : H === g.id && (Q = "slot3"));
      const Me = _ && ((qe = g.system) != null && qe.damage) ? g.system.damage : "", re = _ && typeof ((be = g.system) == null ? void 0 : be.range) == "string" ? (g.system.range || "").trim() : "", Ce = X ? Number((ke = S[X]) == null ? void 0 : ke.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: _,
        slotAssignment: L,
        slotBonus: M,
        slotKey: X,
        microchipSlotKey: Q,
        isEquipped: !!(X || Q),
        damage: Me,
        rangeStr: re,
        slotBonusNum: Ce,
        quantity: Number(((Re = g.system) == null ? void 0 : Re.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const te = (((pt = this.actor.items) == null ? void 0 : pt.contents) ?? []).filter((g) => g.type === "Fegyver"), Y = te.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = Y;
    const se = "— Nincs fegyver —", de = E.filter((g) => {
      const C = ((S[g] ?? {}).itemId ?? "").trim();
      return C ? !!te.find((M) => M.id === C) : !1;
    });
    e.weaponSlots = de.map((g, _) => {
      const C = S[g] ?? {}, L = (C.itemId ?? "").trim(), M = Y.find((X) => X.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: _ + 1,
        displayName: (M == null ? void 0 : M.name) || C.name || se,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(C.bonus) || 0,
        damage: C.damage ?? ""
      };
    });
    const we = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ie = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = te.map((g) => {
      var qt, Lt, Pt;
      const _ = g.id;
      let C = null, L = {};
      for (const ze of E)
        if ((((qt = S[ze]) == null ? void 0 : qt.itemId) ?? "").trim() === _) {
          C = ze, L = S[ze] ?? {};
          break;
        }
      const M = !!C, X = ((Lt = g.system) == null ? void 0 : Lt.equipped) !== void 0 && ((Pt = g.system) == null ? void 0 : Pt.equipped) !== null ? !!g.system.equipped : M, Q = (g == null ? void 0 : g.system) ?? {}, Me = typeof Q.range == "string" ? (Q.range || "").trim() : "", re = Q.type ?? "", Ce = (we[re] ?? re) || "—", fe = Q.size ?? "", Oe = (Ie[fe] ?? fe) || "", qe = [Ce, Oe].filter(Boolean).join(", ") || Ce || "—", be = re === "projectile" || fe === "thrown", ke = Q.quantity, Re = ke != null ? String(ke).trim() : "1", Ee = String(L.bonus ?? "").trim(), Ke = String(Q.bonus ?? "").trim(), es = Ee || Ke || "0";
      return {
        slotKey: C ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? se,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: es,
        damage: L.damage ?? Q.damage ?? "",
        rangeStr: Me || "—",
        typeLabel: Ce,
        typeAndSize: qe,
        quantity: Re,
        quantityDisplay: be ? Re : "—",
        isProjectile: be,
        equipped: X,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const Se = (((ft = this.actor.items) == null ? void 0 : ft.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Se.map((g) => {
      var L, M;
      const _ = (g == null ? void 0 : g.system) ?? {}, C = ((L = g.system) == null ? void 0 : L.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (_.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (_.speedPenalty ?? "").toString().trim() || "—",
        level: gs((_.level ?? "").toString().trim()),
        special: (_.special ?? _.other ?? "").toString().trim() || "—",
        equipped: C
      };
    });
    const Te = (((yt = this.actor.items) == null ? void 0 : yt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Te.map((g) => {
      const _ = (g == null ? void 0 : g.system) ?? {}, C = (_.description ?? "").trim(), L = C ? C.length > 60 ? C.slice(0, 57) + "…" : C : "—", M = _.quantity != null ? String(_.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const ye = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const C = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = C ? C.length > 80 ? C.slice(0, 77) + "…" : C : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const V = (((ht = this.actor.items) == null ? void 0 : ht.contents) ?? []).filter((g) => g.type === "MikroChip"), ie = V.map((g) => ({ id: g.id, name: g.name, img: g.img })), Fe = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], x = (g) => {
      var C, L, M;
      const _ = [];
      return g !== 1 && _.push((((C = F.slot1) == null ? void 0 : C.itemId) ?? "").trim()), g !== 2 && _.push((((L = F.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && _.push((((M = F.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((g) => !x(1).includes(g.id)), e.microchipItemsSlot2 = ie.filter((g) => !x(2).includes(g.id)), e.microchipItemsSlot3 = ie.filter((g) => !x(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const _ = F[g] ?? {}, C = (_.itemId ?? "").trim(), L = V.find((M) => M.id === C);
      return {
        slotKey: g,
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Fe,
        img: (L == null ? void 0 : L.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const _ = `slot${g}`, C = F[_] ?? {}, L = (C.itemId ?? "").trim(), M = ie.find((X) => X.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || C.name || Fe, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = V.map((g) => {
      var fe, Oe, qe, be;
      const _ = g.id;
      let C = null;
      for (const ke of k)
        if ((((fe = F[ke]) == null ? void 0 : fe.itemId) ?? "").trim() === _) {
          C = ke;
          break;
        }
      const L = !!C, M = ((Oe = g == null ? void 0 : g.system) == null ? void 0 : Oe.abilityType) ?? "", X = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Q = M === "active", Me = Number((qe = g == null ? void 0 : g.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, re = (((be = g == null ? void 0 : g.system) == null ? void 0 : be.description) ?? "").trim(), Ce = re ? re.length > 60 ? re.slice(0, 57) + "…" : re : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: X,
        description: Ce,
        kp: Me,
        isActive: Q,
        slotKey: C ?? "",
        equipped: L
      };
    });
    const R = (((bt = e.weaponsTable) == null ? void 0 : bt.length) ?? 0) > 0 || (((kt = e.armorTable) == null ? void 0 : kt.length) ?? 0) > 0 || (((vt = e.microchipsTable) == null ? void 0 : vt.length) ?? 0) > 0 || (((wt = e.itemsTable) == null ? void 0 : wt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !R;
    const U = this.actor.system.abilities ?? {}, De = (((It = this.actor.items) == null ? void 0 : It.contents) ?? []).map((g) => {
      var _, C, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((_ = g.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((C = g.system) == null ? void 0 : C.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), J = new Map(De.map((g) => [g.id, g])), $e = "— Nincs képesség —", me = (g) => {
      const _ = U[g] ?? {}, C = (_.itemId ?? "").trim(), L = C ? J.get(C) : null, M = (L == null ? void 0 : L.description) ?? "", X = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || $e,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: X
      };
    };
    e.abilityFajiSlot = me("faji"), e.abilityHatterSlot = me("hatter");
    const ge = (g) => {
      const _ = U[g];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, pe = (g) => g.map((_) => {
      const C = J.get(_);
      return C ? {
        id: C.id,
        name: C.name,
        img: C.img,
        description: C.description,
        kp: C.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = pe(ge("passive")), e.abilityActiveList = pe(ge("active"));
    const Le = ((St = e.system) == null ? void 0 : St.resources) ?? {}, Pe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ne = (Dt = (Tt = e.system) == null ? void 0 : Tt.combat) == null ? void 0 : Dt.initiativeResult, _e = typeof Ne == "number" ? Ne : -1;
    let he = 0;
    _e >= 25 ? he = 6 : _e >= 19 ? he = 5 : _e >= 13 ? he = 4 : _e >= 7 ? he = 3 : _e >= 0 && (he = 2), e.kpDots = Pe.map((g, _) => {
      const C = _ + 1, L = !!Number(Le[g]), M = C <= he;
      return { index: C, used: L, usable: M };
    });
    const Ue = !!((Ct = (_t = game.combat) == null ? void 0 : _t.combatants) != null && Ct.some((g) => {
      var _;
      return ((_ = g.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = Ue, e.canEditInitiative = !!((Ot = game.user) != null && Ot.isGM), e.showInitiativeResult = typeof Ne == "number", e.initiativeResult = e.showInitiativeResult ? Ne : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DsVrDsZ8.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-DsVrDsZ8.mjs");
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
      const c = i.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-DsVrDsZ8.mjs");
      p(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, S, q, A, E, D, F;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((S = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[a]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((A = (q = this.actor.items).get) == null ? void 0 : A.call(q, h)) ?? ((D = (E = this.actor.items.contents) == null ? void 0 : E.find) == null ? void 0 : D.call(E, (P) => P.id === h));
      (F = v == null ? void 0 : v.sheet) == null || F.render(!0);
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
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => S.includes(E)) : [], A = q.find((E) => {
          var D;
          return (((D = v[E]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (A) {
          const E = q.filter((D) => D !== A);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var A, E;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], S = w.find((D) => {
        var F;
        return (((F = p[D]) == null ? void 0 : F.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let D = w.find((P) => {
          var N;
          return !((N = p[P]) != null && N.itemId);
        });
        const F = new Set(w);
        if (!D) {
          const P = v.find((N) => !F.has(N));
          if (!P) return;
          D = P, w.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${D}.damage`]: ((A = a == null ? void 0 : a.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((E = a == null ? void 0 : a.system) == null ? void 0 : E.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const D = w.filter((F) => F !== S);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
      var D;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = a == null ? void 0 : a.dataset.slot;
      if (!p) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((D = c.textContent) == null ? void 0 : D.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      w ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", a == null || a.insertBefore(q, S)), q.src = w, q.style.display = "") : q && q.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const A = h ? this.actor.items.get(h) : null, E = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      h && (E[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(E);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, w;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const a = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = a[S]) == null ? void 0 : q.itemId) ?? "").trim() === c;
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
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[c]) == null ? void 0 : v.items) ? a[c].items.slice() : []).filter((w) => w !== o);
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
      var A, E;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], S = w.find((D) => {
        var F;
        return (((F = p[D]) == null ? void 0 : F.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let D = w.find((P) => {
          var N;
          return !((N = p[P]) != null && N.itemId);
        });
        const F = new Set(w);
        if (!D) {
          const P = v.find((N) => !F.has(N));
          if (!P) return;
          D = P, w.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: a.name ?? "",
          [`system.weapons.${D}.damage`]: ((A = a.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((E = a.system) == null ? void 0 : E.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const D = w.filter((F) => F !== S);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
      const a = this.actor, p = a.items.get(o), h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => S.includes(E)) : [], A = q.find((E) => {
          var D;
          return (((D = v[E]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (A) {
          const E = q.filter((D) => D !== A);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
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
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, y = (i) => {
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
      if (!y(a)) return;
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
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((m = n[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, r, l, f, m, y, b, u, i, c;
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
            const q = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
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
          const w = h === "active" ? "active" : "passive", S = Array.isArray((l = v[w]) == null ? void 0 : l.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          S.includes(p) || S.push(p), await this.actor.update({ [`system.abilities.${w}.items`]: S });
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
            const w = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const w = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, S = (w.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = S ? S.split(/\s*,\s*/).filter((D) => q.includes(D)) : [], E = A.filter((D) => {
              var F;
              return (((F = w[D]) == null ? void 0 : F.itemId) ?? "").trim() === v;
            });
            if (E.length > 0) {
              const F = {
                "system.weapons.slotOrder": A.filter((P) => !E.includes(P)).join(",")
              };
              for (const P of E)
                F[`system.weapons.${P}.itemId`] = "", F[`system.weapons.${P}.name`] = "", F[`system.weapons.${P}.damage`] = "", F[`system.weapons.${P}.bonus`] = "";
              await p.update(F);
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
    var l, f, m, y, b, u;
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
    var m, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain"));
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
    var f, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
    var f, m, y, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
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
    var l, f, m, y, b;
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
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: b } = We(m), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
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
    var w, S;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((q) => q.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((q) => q.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, m = ((w = r == null ? void 0 : r.system) == null ? void 0 : w.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: p, label: h } = We(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
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
W(B, "PARTS", foundry.utils.mergeObject(
  j(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), W(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((xt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Mt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Kt = (Rt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Rt.window) == null ? void 0 : Kt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
W(B, "BODY_PART_BY_SKILL", {
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
let Ye = B;
function hs(T) {
  return T ? T === "1" ? "1. szint" : T === "2" ? "2. szint" : T === "3" ? "3. szint" : T === "Alap" ? "Alap" : T : "Alap";
}
var jt, Ht, Ut, zt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const r = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(s) {
    var G, te, Y, se, de, we, Ie, Se, Te, ye, V, ie, Fe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((Y = (te = e.system) == null ? void 0 : te.identity) == null ? void 0 : Y.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((de = t == null ? void 0 : t.system) == null ? void 0 : de.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = n.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : r, i = r.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
      var R;
      const x = (((R = d[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && m.some((U) => U.id === x);
    });
    e.weaponSlots = o.map((k) => {
      const x = d[k] ?? {}, R = (x.itemId ?? "").trim(), U = y.find((De) => De.id === R);
      return {
        slotKey: k,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || x.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var xe;
      const x = k.id;
      let R = null, U = {};
      for (const Ae of c)
        if ((((xe = d[Ae]) == null ? void 0 : xe.itemId) ?? "").trim() === x) {
          R = Ae, U = d[Ae] ?? {};
          break;
        }
      const De = !!R, J = (k == null ? void 0 : k.system) ?? {}, $e = typeof J.range == "string" ? (J.range || "").trim() : "", me = J.type ?? "", ge = (a[me] ?? me) || "—", pe = J.size ?? "", Le = (p[pe] ?? pe) || "", Pe = [ge, Le].filter(Boolean).join(", ") || ge || "—", Ne = me === "projectile" || pe === "thrown", _e = J.quantity != null ? String(J.quantity).trim() : "1", he = String(J.bonus ?? U.bonus ?? "").trim() || "0", Ue = (J.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: he,
        damage: Ue,
        rangeStr: $e || "—",
        typeAndSize: Pe,
        quantity: _e,
        isProjectile: Ne,
        equipped: De,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const h = n.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var U;
      const x = (k == null ? void 0 : k.system) ?? {}, R = ((U = k.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: hs((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const v = ((Ie = (we = t == null ? void 0 : t.system) == null ? void 0 : we.gear) == null ? void 0 : Ie.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], S = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = S.map((k) => {
      var me, ge, pe, Le;
      const x = k.id;
      let R = null;
      for (const Pe of w)
        if ((((me = v[Pe]) == null ? void 0 : me.itemId) ?? "").trim() === x) {
          R = Pe;
          break;
        }
      const U = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", De = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", J = (((pe = k == null ? void 0 : k.system) == null ? void 0 : pe.description) ?? "").trim(), $e = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: De,
        description: $e,
        kp: Number((Le = k == null ? void 0 : k.system) == null ? void 0 : Le.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const q = n.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
      const x = (k == null ? void 0 : k.system) ?? {}, R = (x.description ?? "").trim(), U = R ? R.length > 60 ? R.slice(0, 57) + "…" : R : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
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
    const E = (((Se = e.weaponsTable) == null ? void 0 : Se.length) ?? 0) > 0 || (((Te = e.armorTable) == null ? void 0 : Te.length) ?? 0) > 0 || (((ye = e.microchipsTable) == null ? void 0 : ye.length) ?? 0) > 0 || (((V = e.itemsTable) == null ? void 0 : V.length) ?? 0) > 0 || (((ie = e.egyebList) == null ? void 0 : ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !E;
    const D = ((Fe = t == null ? void 0 : t.system) == null ? void 0 : Fe.abilities) ?? {}, F = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, R;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((R = k.system) == null ? void 0 : R.kp) ?? 0) || 0
      };
    }), P = new Map(F.map((k) => [k.id, k])), N = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = N, e.abilityHatterSlot = N;
    const H = (k) => {
      const x = D[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, z = (k) => (k || []).map((x) => {
      const R = P.get(x);
      return R ? { id: R.id, name: R.name, img: R.img, description: R.description, kp: R.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = z(H("passive")), e.abilityActiveList = z(H("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, b;
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
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-DsVrDsZ8.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((p = i == null ? void 0 : i.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-DsVrDsZ8.mjs");
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
      var h, v, w, S, q, A;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (w = u.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : S.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((A = o[i]) == null ? void 0 : A.items) ? o[i].items.slice() : []).filter((E) => E !== c);
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
      var p, h, v, w;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = c[S]) == null ? void 0 : q.itemId) ?? "").trim() === i;
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
    var S, q, A, E, D;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((q = e.system) == null ? void 0 : q.skills) ?? {}, r = ((A = e.items) == null ? void 0 : A.filter((F) => F.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((F) => F.id === n.itemId) ?? null);
    const f = l && l.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, y = ((E = l == null ? void 0 : l.system) == null ? void 0 : E.type) || "kinetic", b = (((D = l == null ? void 0 : l.system) == null ? void 0 : D.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = m + i, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, p = new Roll(a);
    await p.evaluate({ async: !0 });
    const { resultType: h, label: v } = We(p), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, c, o, a, p;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
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
    var y, b, u, i, c, o, a, p, h, v, w, S, q, A, E, D, F;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const n = ((P) => {
      var H;
      if (!P) return null;
      const N = P.uuid ?? P.documentUuid ?? ((H = P.data) == null ? void 0 : H.uuid) ?? (typeof P == "string" ? P : null);
      if (N) return N;
      if (typeof P == "object") {
        for (const z of Object.values(P))
          if (typeof z == "string" && z.includes(".") && z.startsWith("Item.")) return z;
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
      let P = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const te = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        P = ((a = (await r.createEmbeddedDocuments("Item", [te]))[0]) == null ? void 0 : a.id) ?? P;
      }
      const N = (((p = d.system) == null ? void 0 : p.kind) ?? "passive").toString(), H = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, z = N === "active" ? "active" : "passive", G = Array.isArray((v = H[z]) == null ? void 0 : v.items) ? H[z].items.slice() : Array.isArray(H[z]) ? H[z].slice() : [];
      G.includes(P) || G.push(P), await r.update({ [`system.abilities.${z}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = d.parent) == null ? void 0 : w.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (S = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && m) {
      const P = ((q = r.system) == null ? void 0 : q.weapons) ?? {}, N = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], H = (P.slotOrder ?? "").trim(), z = H ? H.split(/\s*,\s*/).filter((Y) => N.includes(Y)) : [];
      let G = N.find((Y) => {
        var se;
        return !(((se = P[Y]) == null ? void 0 : se.itemId) ?? "").trim();
      });
      G || (G = N.find((Y) => !z.includes(Y)) ?? "slot1");
      const te = z.includes(G) ? z : [...z, G].filter((Y) => N.includes(Y));
      await r.update({
        "system.weapons.slotOrder": te.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((E = d.system) == null ? void 0 : E.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const P = ((F = (D = r.system) == null ? void 0 : D.gear) == null ? void 0 : F.microchips) ?? {}, H = ["slot1", "slot2", "slot3"].find((z) => {
        var G;
        return !(((G = P[z]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      H && await r.update({
        [`system.gear.microchips.${H}.itemId`]: m,
        [`system.gear.microchips.${H}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
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
    var f, m, y, b, u, i;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
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
W(ee, "PARTS", foundry.utils.mergeObject(
  j(ee, ee, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), W(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(ee, ee, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((jt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : jt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ht = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Ht.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((zt = (Ut = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Ut.window) == null ? void 0 : zt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = ee;
const bs = [
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
var Bt;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = bs, e;
  }
};
W(ne, "PARTS", foundry.utils.mergeObject(j(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), W(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Bt = j(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Bt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ne;
var Gt;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
W(ae, "PARTS", foundry.utils.mergeObject(j(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), W(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Gt = j(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Gt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ae;
var Wt;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
W(oe, "PARTS", foundry.utils.mergeObject(j(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), W(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Wt = j(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = oe;
var Yt;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
W(ce, "PARTS", foundry.utils.mergeObject(j(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), W(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Yt = j(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Yt.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = ce;
var Jt;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
W(le, "PARTS", foundry.utils.mergeObject(j(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), W(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Jt = j(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Jt.form) ?? {}, { submitOnChange: !1 })
}));
let et = le;
var Qt;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
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
      var f, m, y;
      const l = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
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
W(ue, "PARTS", foundry.utils.mergeObject(j(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), W(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qt = j(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Qt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ue;
const Zt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Vt(T) {
  return T === "Nagy" ? 2 : T === "Óriási" ? 3 : 1;
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = os, CONFIG.Actor.dataModels.Npc = Xt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Nt, CONFIG.Item.dataModels.weapon = Nt, CONFIG.Item.dataModels.Pancel = us, CONFIG.Item.dataModels.MikroChip = ds, CONFIG.Item.dataModels.Kepesseg = Ft, CONFIG.Item.dataModels.ability = Ft, CONFIG.Item.dataModels.Targy = ps, CONFIG.Item.dataModels.Egyeb = ys, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Je, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ze, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ve, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", et, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", tt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const T = 500;
  Hooks.on("updateActor", (l, f, m, y) => {
    var w, S, q, A, E, D, F, P;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if (l.type === "Npc" && ((w = f == null ? void 0 : f.system) != null && w.identity) && "size" in f.system.identity) {
      const N = Vt((q = (S = l.system) == null ? void 0 : S.identity) == null ? void 0 : q.size);
      l.update({
        "prototypeToken.width": N,
        "prototypeToken.height": N
      }).catch((H) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, H));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (A = game.actors) == null ? void 0 : A.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const N of a)
      ((E = N.document) == null ? void 0 : E.id) !== b || ((D = N.document) == null ? void 0 : D.documentName) !== "Actor" || ((F = N.constructor) == null ? void 0 : F.name) !== "VoidKarakterSheet" || c.includes(N) || c.push(N);
    if (i && c.some((N) => {
      const H = (N == null ? void 0 : N.form) ?? (N == null ? void 0 : N.element);
      return H && H.contains(u);
    })) return;
    const h = (P = game.votv) == null ? void 0 : P._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < T ? h.appId : null;
    setTimeout(() => {
      for (const N of c)
        !(N != null && N.rendered) || typeof N.render != "function" || N.id !== v && N.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, y) => {
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
  var T, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, w, S, q, A, E, D, F, P, N, H, z, G, te, Y, se, de, we, Ie, Se, Te;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (S = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const l = r.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((A = game.actors) == null ? void 0 : A.get(r.actorId)) ?? ((E = game.actors) == null ? void 0 : E.get(l));
    if (f || (f = ((F = (D = game.scenes) == null ? void 0 : D.contents) == null ? void 0 : F.flatMap((V) => {
      var ie;
      return ((ie = V.tokens) == null ? void 0 : ie.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === l || V.id === r.actorId))) ?? null), !f) return;
    const m = r.itemId ? ((N = (P = f.items) == null ? void 0 : P.get) == null ? void 0 : N.call(P, r.itemId)) ?? ((G = (z = (H = f.items) == null ? void 0 : H.contents) == null ? void 0 : z.find) == null ? void 0 : G.call(z, (ye) => ye.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((te = m == null ? void 0 : m.system) == null ? void 0 : te.damage) ?? "").trim()), !y && r.slotKey && (y = (((((Y = f.system) == null ? void 0 : Y.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (Ie = (se = ui.notifications) == null ? void 0 : se.warn) == null || Ie.call(se, ((we = (de = game.i18n) == null ? void 0 : de.localize) == null ? void 0 : we.call(de, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", c = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((Te = (((Se = f.system) == null ? void 0 : Se.weapons) ?? {})[r.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
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
      var r, l, f, m, y, b;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (T = game.user) != null && T.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: Zt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, l, f, m, y, b;
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
Hooks.on("preCreateToken", (T, s, e) => {
  var r, l, f, m;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, n = t ?? T.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (l = game.actors) == null ? void 0 : l.get(n) : null;
  if (d) {
    if (d.type === "Karakter") {
      T.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Npc") {
      const y = Vt((m = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : m.size);
      T.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (T, s, e) => {
  const t = T.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && T.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (T, s, e) => {
  const t = T.actor;
  !t || t.type !== "Karakter" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
Hooks.on("combatRound", (T, s, e) => {
  if ((e == null ? void 0 : e.direction) !== 1) return;
  const t = {
    "system.resources.kpDot1": 0,
    "system.resources.kpDot2": 0,
    "system.resources.kpDot3": 0,
    "system.resources.kpDot4": 0,
    "system.resources.kpDot5": 0,
    "system.resources.kpDot6": 0
  };
  for (const n of T.combatants ?? []) {
    const d = n.actor;
    !d || d.type !== "Karakter" || d.update(t).catch((r) => {
      console.warn("Vacuum of the Void | KP reset end of round failed for", d.name, r);
    });
  }
});
Hooks.on("renderSidebarTab", (T, s, e) => {
  if ((T == null ? void 0 : T.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (T, s, e) => {
  var d;
  const t = T == null ? void 0 : T.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const r = s[0] ?? s;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (T, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || T.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Zt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (T, s, e) => {
  var m, y, b, u;
  const t = ((m = T.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!n && !d && !r) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
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
    if (r && l && (l.actorId || (b = T.speaker) != null && b.actor)) {
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
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((u = T.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(T.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-D-9SIUEz.mjs.map
