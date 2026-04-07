var os = Object.defineProperty;
var cs = Object.getPrototypeOf;
var ls = Reflect.get;
var us = (w, s, e) => s in w ? os(w, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[s] = e;
var J = (w, s, e) => us(w, typeof s != "symbol" ? s + "" : s, e);
var z = (w, s, e) => ls(cs(w), e, s);
const { HTMLField: ds, NumberField: O, SchemaField: K, StringField: S, BooleanField: te, ArrayField: Ge } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new Ge(
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
        armor: new Ge(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ge(
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
          items: new Ge(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new Ge(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new ds({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: nt, SchemaField: ms } = foundry.data.fields;
class ps extends ts {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ms({
        body: new nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new nt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: fs, NumberField: Cs, StringField: Ie } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new fs({ required: !1, initial: !1 }),
      type: new Ie({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ie({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ie({ required: !1, blank: !0, initial: "" }),
      damage: new Ie({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ie({ required: !1, blank: !0, initial: "" }),
      special: new Ie({ required: !1, blank: !0, initial: "" }),
      quantity: new Ie({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ie({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ys, StringField: st } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ys({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new st({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new st({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new st({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new st({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: rt, StringField: xt } = foundry.data.fields;
class hs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new xt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new xt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new rt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new rt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new rt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: bs, StringField: Rt } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Rt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Rt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new bs({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Kt } = foundry.data.fields;
class ks extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Kt({ required: !1, blank: !0, initial: "" }),
      quantity: new Kt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: vs } = foundry.data.fields;
class ws extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new vs({ required: !1, blank: !0, initial: "" })
    };
  }
}
function at(w) {
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
      const r = typeof o.faces == "number" ? o.faces : void 0, m = Array.isArray(o.results) ? o.results : null;
      if (!r || !m || r === 8 || r !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const v of m) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const a = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, g = a + f, b = l + p;
  return g > 0 && g === b ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Is(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var jt, Ht, Ut, zt;
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
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, a = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, m = a.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
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
    const p = this.element, g = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var r, m;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = g.querySelector) == null ? void 0 : r.call(g, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (m = g.querySelector) == null ? void 0 : m.call(g, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
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
      const l = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
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
      const l = String(((d = a.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, c, o, r, m, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = n.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, a = ((r = n.currentHealth) == null ? void 0 : r.legs) ?? 0, l = W._healthStatusFromRatio(a, d), f = Number(((v = (h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = f;
    const g = this._getTotalArmorSpeedPenalty();
    p += g, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, l, f, p;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((p = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : p.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), a = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const f = Number(a == null ? void 0 : a.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, g = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(f + p + g);
  }
  _writeTotalSpeed(s = null) {
    var o, r, m, h, v;
    const e = s ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), a = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const f = ((r = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (m = f.hitLocations) == null ? void 0 : m.legs) == null ? void 0 : h.value) ?? 0, g = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (W._healthStatusFromRatio(g, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(a == null ? void 0 : a.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, l, f, p;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return W._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, p, g;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : p.value) ?? 0, a = ((g = n.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return W._healthStatusFromRatio(a, d);
  }
  async _prepareContext(s) {
    var X, Pe, ye, ke, ge, _e, Ce, Ze, Ve, et, tt, He, Ae, yt, gt, ht, bt, kt, vt, wt, It, St, Tt, Dt, _t, Ct, Ot, qt, Lt, Nt, Pt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ye = (Pe = (X = this.actor.system) == null ? void 0 : X.resources) == null ? void 0 : Pe.stress) == null ? void 0 : ye.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, a = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of l) {
      const _ = ((ke = d[y]) == null ? void 0 : ke.value) ?? 0, C = a[y] ?? 0;
      e.computedHealthStatus[y] = W._healthStatusFromRatio(C, _);
    }
    const f = (Number(a.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(a[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((_e = (ge = this.actor.system) == null ? void 0 : ge.combat) == null ? void 0 : _e.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const r = (Number(((Ze = (Ce = this.actor.system) == null ? void 0 : Ce.combat) == null ? void 0 : Ze.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: r } },
      { inplace: !1 }
    );
    const m = ((Ve = e.system) == null ? void 0 : Ve.combat) ?? {};
    e.totalDefense = (Number(m.defense) || 0) + (Number(m.defenseBonus) || 0) + (Number(m.givenProtection) || 0);
    const h = Number(m.givenSpeed), v = (Number(m.speed) || 0) + (Number(m.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, _] of Object.entries(I)) {
      const C = e.computedHealthStatus[_];
      e.skillHealthStatus[y] = C, e.skillDisabled[y] = C === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const T = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (T.slotOrder ?? "").trim(), A = P ? P.split(/\s*,\s*/).filter((y) => q.includes(y)) : [], D = (et = this.actor.system.gear) == null ? void 0 : et.microchips, E = D && typeof D == "object" && !Array.isArray(D) ? D : {}, N = (((tt = E.slot1) == null ? void 0 : tt.itemId) ?? "").trim(), j = (((He = E.slot2) == null ? void 0 : He.itemId) ?? "").trim(), B = (((Ae = E.slot3) == null ? void 0 : Ae.itemId) ?? "").trim(), G = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, _) => {
      const C = typeof y.sort == "number" ? y.sort : 0, L = typeof _.sort == "number" ? _.sort : 0;
      return C - L;
    }).map((y) => {
      var he, qe, Le, ve, we, ze;
      const _ = y.type === "Fegyver", C = y.type === "MikroChip";
      let L = 0, M = "", ee = null;
      for (let Ee = 0; Ee < A.length; Ee++) {
        const Be = A[Ee];
        if ((((he = T[Be]) == null ? void 0 : he.itemId) ?? "") === y.id) {
          L = Ee + 1, M = ((qe = T[Be]) == null ? void 0 : qe.bonus) ?? "", ee = Be;
          break;
        }
      }
      let Z = null;
      C && (N === y.id ? Z = "slot1" : j === y.id ? Z = "slot2" : B === y.id && (Z = "slot3"));
      const Ue = _ && ((Le = y.system) != null && Le.damage) ? y.system.damage : "", oe = _ && typeof ((ve = y.system) == null ? void 0 : ve.range) == "string" ? (y.system.range || "").trim() : "", Oe = ee ? Number((we = T[ee]) == null ? void 0 : we.bonus) || 0 : "";
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
        damage: Ue,
        rangeStr: oe,
        slotBonusNum: Oe,
        quantity: Number(((ze = y.system) == null ? void 0 : ze.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const V = (((yt = this.actor.items) == null ? void 0 : yt.contents) ?? []).filter((y) => y.type === "Fegyver"), x = V.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = x;
    const Y = "— Nincs fegyver —", Q = A.filter((y) => {
      const C = ((T[y] ?? {}).itemId ?? "").trim();
      return C ? !!V.find((M) => M.id === C) : !1;
    });
    e.weaponSlots = Q.map((y, _) => {
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
    const ne = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, re = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((y) => {
      var At, Et, Ft;
      const _ = y.id;
      let C = null, L = {};
      for (const it of A)
        if ((((At = T[it]) == null ? void 0 : At.itemId) ?? "").trim() === _) {
          C = it, L = T[it] ?? {};
          break;
        }
      const M = !!C, ee = ((Et = y.system) == null ? void 0 : Et.equipped) !== void 0 && ((Ft = y.system) == null ? void 0 : Ft.equipped) !== null ? !!y.system.equipped : M, Z = (y == null ? void 0 : y.system) ?? {}, Ue = typeof Z.range == "string" ? (Z.range || "").trim() : "", oe = Z.type ?? "", Oe = (ne[oe] ?? oe) || "—", he = Z.size ?? "", qe = (re[he] ?? he) || "", Le = [Oe, qe].filter(Boolean).join(", ") || Oe || "—", ve = oe === "projectile" || he === "thrown", we = Z.quantity, ze = we != null ? String(we).trim() : "1", Ee = String(L.bonus ?? "").trim(), Be = String(Z.bonus ?? "").trim(), as = Ee || Be || "0";
      return {
        slotKey: C ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? Y,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: as,
        damage: L.damage ?? Z.damage ?? "",
        rangeStr: Ue || "—",
        typeLabel: Oe,
        typeAndSize: Le,
        quantity: ze,
        quantityDisplay: ve ? ze : "—",
        isProjectile: ve,
        equipped: ee,
        special: (Z.special ?? "").trim() || "—"
      };
    });
    const Se = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = Se.map((y) => {
      var L, M;
      const _ = (y == null ? void 0 : y.system) ?? {}, C = ((L = y.system) == null ? void 0 : L.equipped) !== void 0 && ((M = y.system) == null ? void 0 : M.equipped) !== null ? !!y.system.equipped : !1;
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        protectionBonus: (_.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (_.speedPenalty ?? "").toString().trim() || "—",
        level: Is((_.level ?? "").toString().trim()),
        special: (_.special ?? _.other ?? "").toString().trim() || "—",
        equipped: C
      };
    });
    const Te = (((ht = this.actor.items) == null ? void 0 : ht.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = Te.map((y) => {
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
    const be = (((bt = this.actor.items) == null ? void 0 : bt.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = be.map((y) => {
      const C = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), L = C ? C.length > 80 ? C.slice(0, 77) + "…" : C : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: L
      };
    });
    const se = (((kt = this.actor.items) == null ? void 0 : kt.contents) ?? []).filter((y) => y.type === "MikroChip"), ae = se.map((y) => ({ id: y.id, name: y.name, img: y.img })), Fe = "— Nincs Mikro-Chip —", $e = ["slot1", "slot2", "slot3"], Ne = (y) => {
      var C, L, M;
      const _ = [];
      return y !== 1 && _.push((((C = E.slot1) == null ? void 0 : C.itemId) ?? "").trim()), y !== 2 && _.push((((L = E.slot2) == null ? void 0 : L.itemId) ?? "").trim()), y !== 3 && _.push((((M = E.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((y) => !Ne(1).includes(y.id)), e.microchipItemsSlot2 = ae.filter((y) => !Ne(2).includes(y.id)), e.microchipItemsSlot3 = ae.filter((y) => !Ne(3).includes(y.id)), e.microchipSlots = $e.map((y) => {
      const _ = E[y] ?? {}, C = (_.itemId ?? "").trim(), L = se.find((M) => M.id === C);
      return {
        slotKey: y,
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Fe,
        img: (L == null ? void 0 : L.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const _ = `slot${y}`, C = E[_] ?? {}, L = (C.itemId ?? "").trim(), M = ae.find((ee) => ee.id === L);
      e[`microchip${y}ItemId`] = L, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || C.name || Fe, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = se.map((y) => {
      var he, qe, Le, ve;
      const _ = y.id;
      let C = null;
      for (const we of $e)
        if ((((he = E[we]) == null ? void 0 : he.itemId) ?? "").trim() === _) {
          C = we;
          break;
        }
      const L = !!C, M = ((qe = y == null ? void 0 : y.system) == null ? void 0 : qe.abilityType) ?? "", ee = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Z = M === "active", Ue = Number((Le = y == null ? void 0 : y.system) == null ? void 0 : Le.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, oe = (((ve = y == null ? void 0 : y.system) == null ? void 0 : ve.description) ?? "").trim(), Oe = oe ? oe.length > 60 ? oe.slice(0, 57) + "…" : oe : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: ee,
        description: Oe,
        kp: Ue,
        isActive: Z,
        slotKey: C ?? "",
        equipped: L
      };
    });
    const We = (((vt = e.weaponsTable) == null ? void 0 : vt.length) ?? 0) > 0 || (((wt = e.armorTable) == null ? void 0 : wt.length) ?? 0) > 0 || (((It = e.microchipsTable) == null ? void 0 : It.length) ?? 0) > 0 || (((St = e.itemsTable) == null ? void 0 : St.length) ?? 0) > 0;
    e.showEquipmentDropZone = !We;
    const xe = this.actor.system.abilities ?? {}, Ye = (((Tt = this.actor.items) == null ? void 0 : Tt.contents) ?? []).map((y) => {
      var _, C, L;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((_ = y.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((C = y.system) == null ? void 0 : C.description) ?? "",
        kp: Number(((L = y.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), Re = new Map(Ye.map((y) => [y.id, y])), Je = "— Nincs képesség —", Me = (y) => {
      const _ = xe[y] ?? {}, C = (_.itemId ?? "").trim(), L = C ? Re.get(C) : null, M = (L == null ? void 0 : L.description) ?? "", ee = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Je,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: ee
      };
    };
    e.abilityFajiSlot = Me("faji"), e.abilityHatterSlot = Me("hatter");
    const Ke = (y) => {
      const _ = xe[y];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, je = (y) => y.map((_) => {
      const C = Re.get(_);
      return C ? {
        id: C.id,
        name: C.name,
        img: C.img,
        description: C.description,
        kp: C.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = je(Ke("passive")), e.abilityActiveList = je(Ke("active"));
    const Qe = ((Dt = e.system) == null ? void 0 : Dt.resources) ?? {}, Xe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], De = (Ct = (_t = e.system) == null ? void 0 : _t.combat) == null ? void 0 : Ct.initiativeResult, k = typeof De == "number" ? De : -1, F = (qt = (Ot = e.system) == null ? void 0 : Ot.combat) == null ? void 0 : qt.initiativeRanges, R = Array.isArray(F) && F.length > 0 ? F.map((y) => ({ min: Number(y.min) ?? 0, max: Number(y.max) ?? 0, kp: Math.min(6, Math.max(0, Number(y.kp) ?? 0)) })) : [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ];
    e.initiativeRanges = R;
    let U = 0;
    if (typeof k == "number" && k >= 0) {
      const y = R.find((_) => k >= _.min && k <= _.max);
      y && (U = y.kp);
    }
    e.kpDots = Xe.map((y, _) => {
      const C = _ + 1, L = !!Number(Qe[y]), M = C <= U;
      return { index: C, used: L, usable: M };
    });
    const fe = !!((Nt = (Lt = game.combat) == null ? void 0 : Lt.combatants) != null && Nt.some((y) => {
      var _;
      return ((_ = y.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = fe, e.canEditInitiative = !!((Pt = game.user) != null && Pt.isGM), e.showInitiativeResult = typeof De == "number", e.initiativeResult = e.showInitiativeResult ? De : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-_nHx2ZoO.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, m, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((m = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : m.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-_nHx2ZoO.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-harc-range-add", async (i) => {
      var r, m;
      if (i.preventDefault(), i.stopPropagation(), !((r = this.actor) != null && r.system)) return;
      const c = ((m = this.actor.system.combat) == null ? void 0 : m.initiativeRanges) ?? [], o = Array.isArray(c) ? c.slice() : [];
      o.push({ min: 0, max: 0, kp: 0 }), await this.actor.update({ "system.combat.initiativeRanges": o }), this.render(!0);
    }), t.on("click", ".karakter-harc-range-remove", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || !((h = this.actor) != null && h.system)) return;
      const r = ((v = this.actor.system.combat) == null ? void 0 : v.initiativeRanges) ?? [], m = Array.isArray(r) ? r.slice() : [];
      o < 0 || o >= m.length || (m.splice(o, 1), await this.actor.update({ "system.combat.initiativeRanges": m }), this.render(!0));
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const r = `system.resources.kpDot${o}`, m = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [r]: m ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const c = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
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
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', a), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, m, h;
      i.preventDefault(), i.stopPropagation();
      const c = ((h = (m = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const c = i.currentTarget, o = c.dataset.skill, r = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: m } = await import("./roll-sheet-_nHx2ZoO.mjs");
      m(this.actor, o, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, q, P, A, D, E;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), r = o == null ? void 0 : o.dataset.slot;
      if (!r) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (q = this.actor.items).get) == null ? void 0 : P.call(q, h)) ?? ((D = (A = this.actor.items.contents) == null ? void 0 : A.find) == null ? void 0 : D.call(A, (N) => N.id === h));
      (E = v == null ? void 0 : v.sheet) == null || E.render(!0);
    });
    const l = (i, c) => {
      var m;
      const o = i.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
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
      const c = i.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await r.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, m = r.items.get(o);
      if (!m) return;
      const h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = I ? I.split(/\s*,\s*/).filter((A) => T.includes(A)) : [], P = q.find((A) => {
          var D;
          return (((D = v[A]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (P) {
          const A = q.filter((D) => D !== P);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, A;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = I.find((D) => {
        var E;
        return (((E = m[D]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
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
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${D}.damage`]: ((P = r == null ? void 0 : r.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((A = r == null ? void 0 : r.system) == null ? void 0 : A.bonus) ?? ""
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
      const c = i.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var D;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), m = r == null ? void 0 : r.dataset.slot;
      if (!m) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((D = c.textContent) == null ? void 0 : D.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", r == null || r.insertBefore(q, T)), q.src = I, q.style.display = "") : q && q.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, A = {
        [`system.gear.microchips.${m}.itemId`]: h,
        [`system.gear.microchips.${m}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      h && (A[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const r = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = r[T]) == null ? void 0 : q.itemId) ?? "").trim() === c;
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
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, o));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
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
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[c]) == null ? void 0 : v.items) ? r[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      (m = r == null ? void 0 : r.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(o) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var P, A;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = I.find((D) => {
        var E;
        return (((E = m[D]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
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
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: r.name ?? "",
          [`system.weapons.${D}.damage`]: ((P = r.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((A = r.system) == null ? void 0 : A.bonus) ?? ""
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
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, m = r.items.get(o), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = I ? I.split(/\s*,\s*/).filter((A) => T.includes(A)) : [], P = q.find((A) => {
          var D;
          return (((D = v[A]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (P) {
          const A = q.filter((D) => D !== P);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
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
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Targy") return;
      const m = (c.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, p = (i) => {
      var r, m, h, v;
      if (!i) return;
      const c = f._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const o = ((m = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : m.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(c).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (i) => {
      var c, o, r;
      return i && (((o = (c = f.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, i)) || f.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const r = c.form;
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
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const g of a) {
      const b = ((p = n[g]) == null ? void 0 : p.value) ?? 0, u = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, W._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, a, l, f, p, g, b, u, i, c;
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
          let m = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            m = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? m;
          }
          const h = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
      let o = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
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
          const m = this.actor, h = ((p = r.parent) == null ? void 0 : p.id) !== m.id;
          let v = r.id;
          if (h) {
            const I = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await m.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (h) {
            const I = ((b = m.system) == null ? void 0 : b.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = T ? T.split(/\s*,\s*/).filter((D) => q.includes(D)) : [], A = P.filter((D) => {
              var E;
              return (((E = I[D]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (A.length > 0) {
              const E = {
                "system.weapons.slotOrder": P.filter((N) => !A.includes(N)).join(",")
              };
              for (const N of A)
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
          ((c = r.parent) == null ? void 0 : c.id) !== m.id && await m.createEmbeddedDocuments("Item", [r.toObject()]);
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
    var p, g;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return i - c;
    }).map((b) => b.id), a = d.indexOf(t), l = d.indexOf(e);
    if (a === -1 || l === -1) return;
    d.splice(a, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
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
    var g, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
    var a, l, f;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
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
    let a = d.id;
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? a), await this.actor.update({
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
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(f);
    await p.evaluate({ async: !0 });
    const { resultType: g, label: b } = at(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((q) => q.type === "Fegyver");
    let a = null;
    t.itemId && (a = d.find((q) => q.id === t.itemId) ?? null);
    const l = a && a.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, p = ((I = a == null ? void 0 : a.system) == null ? void 0 : I.type) || "kinetic", g = (((T = a == null ? void 0 : a.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = g && n[g] !== void 0 ? g : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(o);
    await r.evaluate({ async: !0 });
    const { resultType: m, label: h } = at(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, p, g, b, u, i, c, o, r, m;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (f = t.items).get) == null ? void 0 : p.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (m = (c = ui.notifications) == null ? void 0 : c.warn) == null || m.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    form: foundry.utils.mergeObject(((jt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : jt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ht = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Ht.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((zt = (Ut = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Ut.window) == null ? void 0 : zt.contentClasses) ?? [],
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
let ot = W;
function Ss(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var Bt, Gt, Wt, Yt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const i = document.activeElement, c = n.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const a = await super.render(s, e), l = this.element, f = this.form ?? this.element, p = d.scrollState, g = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, p), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = g.selectionStart ?? 0, o.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || g) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), a;
  }
  async _prepareContext(s) {
    var Se, Te, be, se, ae, Fe, $e, Ne, We, xe, Ye, Re, Je, Me, Ke, je, Qe, Xe, De;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Se = this.actor) == null ? void 0 : Se.system), e.showDeathSkull = !1, e.sizeForSelect = (((be = (Te = e.system) == null ? void 0 : Te.identity) == null ? void 0 : be.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((ae = t == null ? void 0 : t.system) == null ? void 0 : ae.weapons) ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => a.includes(k)) : [], p = n.filter((k) => k.type === "Fegyver"), g = p.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : a, i = a.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
      var R;
      const F = (((R = d[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return F && p.some((U) => U.id === F);
    });
    e.weaponSlots = o.map((k) => {
      const F = d[k] ?? {}, R = (F.itemId ?? "").trim(), U = g.find((fe) => fe.id === R);
      return {
        slotKey: k,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || F.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const r = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, m = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = p.map((k) => {
      var He;
      const F = k.id;
      let R = null, U = {};
      for (const Ae of c)
        if ((((He = d[Ae]) == null ? void 0 : He.itemId) ?? "").trim() === F) {
          R = Ae, U = d[Ae] ?? {};
          break;
        }
      const fe = !!R, X = (k == null ? void 0 : k.system) ?? {}, Pe = typeof X.range == "string" ? (X.range || "").trim() : "", ye = X.type ?? "", ke = (r[ye] ?? ye) || "—", ge = X.size ?? "", _e = (m[ge] ?? ge) || "", Ce = [ke, _e].filter(Boolean).join(", ") || ke || "—", Ze = ye === "projectile" || ge === "thrown", Ve = X.quantity != null ? String(X.quantity).trim() : "1", et = String(X.bonus ?? U.bonus ?? "").trim() || "0", tt = (X.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: et,
        damage: tt,
        rangeStr: Pe || "—",
        typeAndSize: Ce,
        quantity: Ve,
        isProjectile: Ze,
        equipped: fe,
        special: (X.special ?? "").trim() || "—"
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
        level: Ss((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const v = (($e = (Fe = t == null ? void 0 : t.system) == null ? void 0 : Fe.gear) == null ? void 0 : $e.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var ye, ke, ge, _e;
      const F = k.id;
      let R = null;
      for (const Ce of I)
        if ((((ye = v[Ce]) == null ? void 0 : ye.itemId) ?? "").trim() === F) {
          R = Ce;
          break;
        }
      const U = ((ke = k == null ? void 0 : k.system) == null ? void 0 : ke.abilityType) ?? "", fe = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", X = (((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.description) ?? "").trim(), Pe = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: fe,
        description: Pe,
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
    const P = n.filter((k) => k.type === "Egyeb");
    e.egyebList = P.map((k) => {
      const R = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), U = R ? R.length > 80 ? R.slice(0, 77) + "…" : R : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: U
      };
    });
    const A = (((Ne = e.weaponsTable) == null ? void 0 : Ne.length) ?? 0) > 0 || (((We = e.armorTable) == null ? void 0 : We.length) ?? 0) > 0 || (((xe = e.microchipsTable) == null ? void 0 : xe.length) ?? 0) > 0 || (((Ye = e.itemsTable) == null ? void 0 : Ye.length) ?? 0) > 0 || (((Re = e.egyebList) == null ? void 0 : Re.length) ?? 0) > 0;
    e.showEquipmentDropZone = !A;
    const D = ((Je = t == null ? void 0 : t.system) == null ? void 0 : Je.abilities) ?? {}, E = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
    const G = t == null ? void 0 : t.id, V = !!((Ke = (Me = game.combat) == null ? void 0 : Me.combatants) != null && Ke.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === G;
      }
    ));
    e.showHarcSection = V;
    const x = ((je = e.system) == null ? void 0 : je.resources) ?? {}, Y = (Xe = (Qe = e.system) == null ? void 0 : Qe.combat) == null ? void 0 : Xe.initiativeResult, Q = typeof Y == "number" ? Y : -1;
    let ne = 0;
    Q >= 25 ? ne = 6 : Q >= 19 ? ne = 5 : Q >= 13 ? ne = 4 : Q >= 7 ? ne = 3 : Q >= 0 && (ne = 2);
    const re = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    return e.kpDots = re.map((k, F) => {
      const R = F + 1, U = !!Number(x[k]), fe = R <= ne;
      return { index: R, used: U, usable: fe };
    }), e.canEditInitiative = !!((De = game.user) != null && De.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e;
  }
  _attachFrameListeners(s) {
    var p, g, b;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, r, m;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((m = (r = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : m.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, r, m;
      u.preventDefault();
      const i = (r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    });
    const n = (u) => {
      var o, r;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, m, h, v;
      u.preventDefault();
      const i = (m = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : m.call(r, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-_nHx2ZoO.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, r, m, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (c = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-_nHx2ZoO.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var r, m;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6 || !this.actor) return;
      const o = !!Number((m = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : m[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var m, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-_nHx2ZoO.mjs");
      r(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, r;
      u.preventDefault();
      const i = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, T, q, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, m = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((A) => A !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: m }), typeof this.render == "function" && this.render(!0);
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
      const o = this.actor, r = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), m = {};
      r && (m[`system.weapons.${r}.itemId`] = "", m[`system.weapons.${r}.name`] = "", m[`system.weapons.${r}.damage`] = "", m[`system.weapons.${r}.bonus`] = ""), Object.keys(m).length && await o.update(m), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var m, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (m = u.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = c[T]) == null ? void 0 : q.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, r;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var m, h, v;
      const i = u.currentTarget, c = (h = (m = i == null ? void 0 : i.dataset) == null ? void 0 : m.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const r = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const a = this, l = (u) => {
      if (!u) return;
      const i = a._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && a.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (u) => {
      var i, c, o;
      return u && (((c = (i = a.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, u)) || a.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (u) => {
      var m;
      const i = u.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = i.form;
      if (!f(o)) return;
      const r = u.relatedTarget;
      r && (o.contains(r) || a.id && ((m = r.closest) != null && m.call(r, `#${CSS.escape(a.id)}`))) || l(o);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (u, i, c) => {
      var o;
      a.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (u, i, c) => {
      var o;
      a.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === a.actor.id && a.render(!0);
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
    var T, q, P, A, D;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((q = e.system) == null ? void 0 : q.skills) ?? {}, a = ((P = e.items) == null ? void 0 : P.filter((E) => E.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = a.find((E) => E.id === n.itemId) ?? null);
    const f = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, g = ((A = l == null ? void 0 : l.system) == null ? void 0 : A.type) || "kinetic", b = (((D = l == null ? void 0 : l.system) == null ? void 0 : D.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : g === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = p + i, r = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, m = new Roll(r);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: v } = at(m), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, p, g, b, u, i, c, o, r, m;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (f = t.items).get) == null ? void 0 : p.call(f, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (m = (c = ui.notifications) == null ? void 0 : c.warn) == null || m.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    var g, b, u, i, c, o, r, m, h, v, I, T, q, P, A, D, E;
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
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const a = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== a.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((r = (await a.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : r.id) ?? N;
      }
      const j = (((m = d.system) == null ? void 0 : m.kind) ?? "passive").toString(), B = ((h = a.system) == null ? void 0 : h.abilities) ?? {}, H = j === "active" ? "active" : "passive", G = Array.isArray((v = B[H]) == null ? void 0 : v.items) ? B[H].items.slice() : Array.isArray(B[H]) ? B[H].slice() : [];
      G.includes(N) || G.push(N), await a.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === a.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (T = (await a.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && p) {
      const N = ((q = a.system) == null ? void 0 : q.weapons) ?? {}, j = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], B = (N.slotOrder ?? "").trim(), H = B ? B.split(/\s*,\s*/).filter((x) => j.includes(x)) : [];
      let G = j.find((x) => {
        var Y;
        return !(((Y = N[x]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      G || (G = j.find((x) => !H.includes(x)) ?? "slot1");
      const V = H.includes(G) ? H : [...H, G].filter((x) => j.includes(x));
      await a.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((P = d.system) == null ? void 0 : P.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((A = d.system) == null ? void 0 : A.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const N = ((E = (D = a.system) == null ? void 0 : D.gear) == null ? void 0 : E.microchips) ?? {}, B = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = N[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      B && await a.update({
        [`system.gear.microchips.${B}.itemId`]: p,
        [`system.gear.microchips.${B}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var g, b, u, i, c, o;
    const e = (b = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
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
J(ie, "PARTS", foundry.utils.mergeObject(
  z(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), J(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  z(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Bt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Bt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Gt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Yt = (Wt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.window) == null ? void 0 : Yt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let ct = ie;
const Ts = [
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
var Jt;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ts, e;
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
  form: foundry.utils.mergeObject(((Jt = z(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Jt.form) ?? {}, { submitOnChange: !1 })
}));
let lt = ce;
var Qt;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
  form: foundry.utils.mergeObject(((Qt = z(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Qt.form) ?? {}, { submitOnChange: !1 })
}));
let ut = le;
var Xt;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
  form: foundry.utils.mergeObject(((Xt = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Xt.form) ?? {}, { submitOnChange: !1 })
}));
let dt = ue;
var Zt;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (a) => {
      var p;
      const l = a.target;
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
  form: foundry.utils.mergeObject(((Zt = z(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : Zt.form) ?? {}, { submitOnChange: !0 })
}));
let mt = de;
var Vt;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
  form: foundry.utils.mergeObject(((Vt = z(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : Vt.form) ?? {}, { submitOnChange: !1 })
}));
let pt = me;
var es;
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
    e._votvProfileImgClick = (a) => {
      var p, g, b, u, i, c, o;
      if (!e.isEditable || !((g = (p = a.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((u = (b = a.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (a) => {
      var l, f, p;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, p, g;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
  form: foundry.utils.mergeObject(((es = z(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : es.form) ?? {}, { submitOnChange: !1 })
}));
let ft = pe;
const ss = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function is(w) {
  return w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, n, d, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ps, CONFIG.Actor.dataModels.Npc = ts, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = $t, CONFIG.Item.dataModels.weapon = $t, CONFIG.Item.dataModels.Pancel = gs, CONFIG.Item.dataModels.MikroChip = hs, CONFIG.Item.dataModels.Kepesseg = Mt, CONFIG.Item.dataModels.ability = Mt, CONFIG.Item.dataModels.Targy = ks, CONFIG.Item.dataModels.Egyeb = ws, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ot, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ct, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", lt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ut, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", dt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", mt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ft, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const w = 500;
  Hooks.on("updateActor", (l, f, p, g) => {
    var I, T, q, P, A, D, E, N, j, B, H, G, V;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if ((l.type === "Karakter" || l.type === "Npc") && ((I = f == null ? void 0 : f.system) != null && I.combat) && "initiativeResult" in f.system.combat) {
      const x = Number((q = (T = l.system) == null ? void 0 : T.combat) == null ? void 0 : q.initiativeResult), Y = Number.isFinite(x) ? x : 0, Q = game.combat;
      if (Q) {
        const ne = ((P = Q.combatants) == null ? void 0 : P.contents) ?? Array.from(Q.combatants ?? []);
        for (const re of ne)
          if (((A = re.actor) == null ? void 0 : A.id) === b || re.actorId === b) {
            Q.updateEmbeddedDocuments("Combatant", [{ _id: re.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (l.type === "Npc" && ((D = f == null ? void 0 : f.system) != null && D.identity) && "size" in f.system.identity) {
      const x = is((N = (E = l.system) == null ? void 0 : E.identity) == null ? void 0 : N.size);
      l.update({
        "prototypeToken.width": x,
        "prototypeToken.height": x
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, Y));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (j = game.actors) == null ? void 0 : j.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const x of r)
      ((B = x.document) == null ? void 0 : B.id) !== b || ((H = x.document) == null ? void 0 : H.documentName) !== "Actor" || ((G = x.constructor) == null ? void 0 : G.name) !== "VoidKarakterSheet" || c.includes(x) || c.push(x);
    if (i && c.some((x) => {
      const Y = (x == null ? void 0 : x.form) ?? (x == null ? void 0 : x.element);
      return Y && Y.contains(u);
    })) return;
    const h = (V = game.votv) == null ? void 0 : V._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < w ? h.appId : null;
    setTimeout(() => {
      for (const x of c)
        !(x != null && x.rendered) || typeof x.render != "function" || x.id !== v && x.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, p, g) => {
    var c, o, r;
    const b = l == null ? void 0 : l.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || l.type !== "Fegyver") return;
    const u = ((c = b.system) == null ? void 0 : c.weapons) ?? {}, i = {};
    for (const [m, h] of Object.entries(u)) {
      if (!m.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (i[`system.weapons.${m}.name`] = l.name ?? "", i[`system.weapons.${m}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${m}.bonus`] = ((r = l.system) == null ? void 0 : r.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var w, s;
  document.body.addEventListener("click", async (e) => {
    var m, h, v, I, T, q, P, A, D, E, N, j, B, H, G, V, x, Y, Q, ne, re, Se, Te;
    const t = (h = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), a = (T = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!a) return;
    const l = a.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((P = game.actors) == null ? void 0 : P.get(a.actorId)) ?? ((A = game.actors) == null ? void 0 : A.get(l));
    if (f || (f = ((E = (D = game.scenes) == null ? void 0 : D.contents) == null ? void 0 : E.flatMap((se) => {
      var ae;
      return ((ae = se.tokens) == null ? void 0 : ae.contents) ?? [];
    }).map((se) => se.actor).find((se) => se && (se.id === l || se.id === a.actorId))) ?? null), !f) return;
    const p = a.itemId ? ((j = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : j.call(N, a.itemId)) ?? ((G = (H = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (be) => be.id === a.itemId)) : null;
    let g = (a.damageFormula ?? "").trim();
    if (g || (g = (((V = p == null ? void 0 : p.system) == null ? void 0 : V.damage) ?? "").trim()), !g && a.slotKey && (g = (((((x = f.system) == null ? void 0 : x.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !g) {
      (re = (Y = ui.notifications) == null ? void 0 : Y.warn) == null || re.call(Y, ((ne = (Q = game.i18n) == null ? void 0 : Q.localize) == null ? void 0 : ne.call(Q, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(g);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = a.targetName || "", c = a.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (a.slotKey ? ((Te = (((Se = f.system) == null ? void 0 : Se.weapons) ?? {})[a.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    c && (r += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, l, f, p, g, b;
      if (!((l = (a = e.target) == null ? void 0 : a.closest) != null && l.call(a, "#actors"))) return;
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
        background: { src: ss },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await n.create(d);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var a, l, f, p, g, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((u) => u.type === "Karakter")) ?? [];
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
  var a, l, f, p;
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
      const g = is((p = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : p.size);
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
const Ds = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function ns(w) {
  const s = w == null ? void 0 : w.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Ds).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || ns(w);
});
function rs() {
  var s, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
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
  setTimeout(rs, 100);
});
Hooks.on("updateCombat", (w, s, e) => {
  (s == null ? void 0 : s.round) != null && ns(w), setTimeout(rs, 0);
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
    const a = s[0] ?? s;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ss,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, s, e) => {
  var p, g, b, u;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, a = t.weaponAttack, l = t.weapon;
  if (!n && !d && !a) return;
  const f = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (f) {
    if (n && f.classList.add(`votv-${n}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = d, o.appendChild(r);
      }
    }
    if (a && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const m = !!l.isHit, h = l.targetName || "Célpont";
        r.textContent = m ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(r);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const m = document.createElement("button");
        m.type = "button", m.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        m.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", m.dataset.actorId = String(l.actorId ?? ((u = w.speaker) == null ? void 0 : u.actor) ?? ""), m.dataset.itemId = String(l.itemId ?? ""), m.dataset.slotKey = String(l.slotKey ?? ""), m.dataset.targetName = String(l.targetName ?? ""), m.dataset.hitLocationName = String(l.hitLocationName ?? ""), m.dataset.messageId = String(w.id ?? ""), c.appendChild(m);
      }
    }
  }
});
export {
  ot as V,
  at as c
};
//# sourceMappingURL=vacuum-of-the-void-BICxrJP1.mjs.map
