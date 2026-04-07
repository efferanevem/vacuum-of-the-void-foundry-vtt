var Vt = Object.defineProperty;
var es = Object.getPrototypeOf;
var ts = Reflect.get;
var ss = (_, s, e) => s in _ ? Vt(_, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[s] = e;
var W = (_, s, e) => ss(_, typeof s != "symbol" ? s + "" : s, e);
var j = (_, s, e) => ts(es(_), e, s);
const { HTMLField: is, NumberField: C, SchemaField: K, StringField: I, BooleanField: Z, ArrayField: He } = foundry.data.fields;
class Jt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new C({ required: !1, integer: !0, min: 1, initial: 1 }),
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
          value: new C({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new C({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new K({
          head: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new C({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new K({
          head: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new K({
          value: new C({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new C({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap: 6 KP ikon külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált)
        kpDot1: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new C({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new K({
        defense: new C({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new C({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new C({ required: !1, integer: !1, initial: 0 }),
        speedBonus: new C({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new C({ required: !1, integer: !0, initial: void 0 })
      }),
      skills: new K({
        deception: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new I({ required: !1, blank: !0, initial: "" }),
        combatTraining: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new C({ required: !1, integer: !0, min: 0, initial: 0 })
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
        armor: new He(
          new K({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new K({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new C({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new is({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Be, SchemaField: ns } = foundry.data.fields;
class rs extends Jt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ns({
        body: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: as, NumberField: bs, StringField: ve } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new as({ required: !1, initial: !1 }),
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
const { BooleanField: os, StringField: Ue } = foundry.data.fields;
class ls extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new os({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Ue({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ue({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: Pt } = foundry.data.fields;
class cs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Pt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Pt({
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
const { NumberField: us, StringField: Nt } = foundry.data.fields;
class At extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Nt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Nt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new us({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Et } = foundry.data.fields;
class ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Et({ required: !1, blank: !0, initial: "" }),
      quantity: new Et({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ms } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ms({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(_) {
  if (!_ || !Array.isArray(_.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let l = i;
    for (const o of u) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, l);
        continue;
      }
      if (typeof o.operator == "string") {
        l = o.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!r || !p || r === 8 || r !== 6) continue;
      const h = !a && l >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : l >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && h.push(w);
      }
    }
  };
  d(_.terms, 1);
  const n = s.filter((u) => u === 6).length, c = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = n + f, b = c + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function fs(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var Ft, $t, xt, Mt;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, n, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, n = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (d) {
      c.scrollState = this._saveScrollState(d);
      const r = document.activeElement, p = n.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      p && h && (c.focus = {
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
    const m = this.element, y = this.form ?? this.element, b = c.scrollState, u = c.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", l = () => {
      var r, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = y.querySelector) == null ? void 0 : r.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = y.querySelector) == null ? void 0 : p.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (i || u) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), n = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (n) => {
        var c;
        return n.type === "Pancel" && ((c = n.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const c = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(c);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (n) => {
        var c;
        return n.type === "Pancel" && ((c = n.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const c = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(c);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, l, o, r, p, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (l = a.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : o.value) ?? 0, n = ((r = a.currentHealth) == null ? void 0 : r.legs) ?? 0, c = B._healthStatusFromRatio(n, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    c === 0 ? m = 0 : c === 1 ? m = -6 : c === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, c, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, a = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), n = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const f = Number(n == null ? void 0 : n.value) || 0, m = Number(c == null ? void 0 : c.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, r, p, h, v;
    const e = s ?? this.form ?? this.element, t = (w) => {
      var S;
      return ((S = e == null ? void 0 : e.querySelector) == null ? void 0 : S.call(e, w)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${w}`) : null);
    }, a = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), n = t('input[name="system.combat.speed"]'), c = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    const f = ((r = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : r.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, y = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (B._healthStatusFromRatio(y, m) === 0) {
      a.textContent = "0";
      return;
    }
    const u = Number(n == null ? void 0 : n.value) || 0, i = Number(c == null ? void 0 : c.value) || 0, l = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(u + i + l);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, c, f, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, a = ((f = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var c, f, m, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((c = s == null ? void 0 : s.system) == null ? void 0 : c.resources) ?? {}, d = ((m = (f = a.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, n = ((y = a.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var je, xe, Ae, st, it, nt, rt, at, ot, lt, ct, ut, dt, mt, pt, ft, yt, gt, ht, bt, kt, vt, wt, It, St, Tt, _t, Dt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (xe = (je = this.actor.system) == null ? void 0 : je.resources) == null ? void 0 : xe.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, n = a.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of c) {
      const O = ((st = d[g]) == null ? void 0 : st.value) ?? 0, D = n[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(D, O);
    }
    const f = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(n[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((nt = (it = this.actor.system) == null ? void 0 : it.combat) == null ? void 0 : nt.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const l = this._getTotalArmorSpeedPenalty();
    i += l, e.effectiveGivenSpeed = i;
    const r = (Number(((at = (rt = this.actor.system) == null ? void 0 : rt.combat) == null ? void 0 : at.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: r } },
      { inplace: !1 }
    );
    const p = ((ot = e.system) == null ? void 0 : ot.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const w = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(w)) {
      const D = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const S = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (S.slotOrder ?? "").trim(), E = A ? A.split(/\s*,\s*/).filter((g) => q.includes(g)) : [], T = (lt = this.actor.system.gear) == null ? void 0 : lt.microchips, F = T && typeof T == "object" && !Array.isArray(T) ? T : {}, P = (((ct = F.slot1) == null ? void 0 : ct.itemId) ?? "").trim(), N = (((ut = F.slot2) == null ? void 0 : ut.itemId) ?? "").trim(), H = (((dt = F.slot3) == null ? void 0 : dt.itemId) ?? "").trim(), G = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const D = typeof g.sort == "number" ? g.sort : 0, L = typeof O.sort == "number" ? O.sort : 0;
      return D - L;
    }).map((g) => {
      var fe, Ce, qe, be, ke, Re;
      const O = g.type === "Fegyver", D = g.type === "MikroChip";
      let L = 0, M = "", X = null;
      for (let Ee = 0; Ee < E.length; Ee++) {
        const Ke = E[Ee];
        if ((((fe = S[Ke]) == null ? void 0 : fe.itemId) ?? "") === g.id) {
          L = Ee + 1, M = ((Ce = S[Ke]) == null ? void 0 : Ce.bonus) ?? "", X = Ke;
          break;
        }
      }
      let Q = null;
      D && (P === g.id ? Q = "slot1" : N === g.id ? Q = "slot2" : H === g.id && (Q = "slot3"));
      const Me = O && ((qe = g.system) != null && qe.damage) ? g.system.damage : "", ne = O && typeof ((be = g.system) == null ? void 0 : be.range) == "string" ? (g.system.range || "").trim() : "", Oe = X ? Number((ke = S[X]) == null ? void 0 : ke.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: L,
        slotBonus: M,
        slotKey: X,
        microchipSlotKey: Q,
        isEquipped: !!(X || Q),
        damage: Me,
        rangeStr: ne,
        slotBonusNum: Oe,
        quantity: Number(((Re = g.system) == null ? void 0 : Re.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const te = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((g) => g.type === "Fegyver"), Y = te.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = Y;
    const se = "— Nincs fegyver —", de = E.filter((g) => {
      const D = ((S[g] ?? {}).itemId ?? "").trim();
      return D ? !!te.find((M) => M.id === D) : !1;
    });
    e.weaponSlots = de.map((g, O) => {
      const D = S[g] ?? {}, L = (D.itemId ?? "").trim(), M = Y.find((X) => X.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: O + 1,
        displayName: (M == null ? void 0 : M.name) || D.name || se,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const we = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ie = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = te.map((g) => {
      var Ot, Ct, qt;
      const O = g.id;
      let D = null, L = {};
      for (const ze of E)
        if ((((Ot = S[ze]) == null ? void 0 : Ot.itemId) ?? "").trim() === O) {
          D = ze, L = S[ze] ?? {};
          break;
        }
      const M = !!D, X = ((Ct = g.system) == null ? void 0 : Ct.equipped) !== void 0 && ((qt = g.system) == null ? void 0 : qt.equipped) !== null ? !!g.system.equipped : M, Q = (g == null ? void 0 : g.system) ?? {}, Me = typeof Q.range == "string" ? (Q.range || "").trim() : "", ne = Q.type ?? "", Oe = (we[ne] ?? ne) || "—", fe = Q.size ?? "", Ce = (Ie[fe] ?? fe) || "", qe = [Oe, Ce].filter(Boolean).join(", ") || Oe || "—", be = ne === "projectile" || fe === "thrown", ke = Q.quantity, Re = ke != null ? String(ke).trim() : "1", Ee = String(L.bonus ?? "").trim(), Ke = String(Q.bonus ?? "").trim(), Zt = Ee || Ke || "0";
      return {
        slotKey: D ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? se,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Zt,
        damage: L.damage ?? Q.damage ?? "",
        rangeStr: Me || "—",
        typeLabel: Oe,
        typeAndSize: qe,
        quantity: Re,
        quantityDisplay: be ? Re : "—",
        isProjectile: be,
        equipped: X,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const Se = (((pt = this.actor.items) == null ? void 0 : pt.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Se.map((g) => {
      var L, M;
      const O = (g == null ? void 0 : g.system) ?? {}, D = ((L = g.system) == null ? void 0 : L.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: fs((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const Te = (((ft = this.actor.items) == null ? void 0 : ft.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Te.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, D = (O.description ?? "").trim(), L = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", M = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const ye = (((yt = this.actor.items) == null ? void 0 : yt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const V = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).filter((g) => g.type === "MikroChip"), ie = V.map((g) => ({ id: g.id, name: g.name, img: g.img })), Fe = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], x = (g) => {
      var D, L, M;
      const O = [];
      return g !== 1 && O.push((((D = F.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && O.push((((L = F.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && O.push((((M = F.slot3) == null ? void 0 : M.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((g) => !x(1).includes(g.id)), e.microchipItemsSlot2 = ie.filter((g) => !x(2).includes(g.id)), e.microchipItemsSlot3 = ie.filter((g) => !x(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const O = F[g] ?? {}, D = (O.itemId ?? "").trim(), L = V.find((M) => M.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (L == null ? void 0 : L.name) || O.name || Fe,
        img: (L == null ? void 0 : L.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, D = F[O] ?? {}, L = (D.itemId ?? "").trim(), M = ie.find((X) => X.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || D.name || Fe, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = V.map((g) => {
      var fe, Ce, qe, be;
      const O = g.id;
      let D = null;
      for (const ke of k)
        if ((((fe = F[ke]) == null ? void 0 : fe.itemId) ?? "").trim() === O) {
          D = ke;
          break;
        }
      const L = !!D, M = ((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.abilityType) ?? "", X = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Q = M === "active", Me = Number((qe = g == null ? void 0 : g.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ne = (((be = g == null ? void 0 : g.system) == null ? void 0 : be.description) ?? "").trim(), Oe = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: X,
        description: Oe,
        kp: Me,
        isActive: Q,
        slotKey: D ?? "",
        equipped: L
      };
    });
    const R = (((ht = e.weaponsTable) == null ? void 0 : ht.length) ?? 0) > 0 || (((bt = e.armorTable) == null ? void 0 : bt.length) ?? 0) > 0 || (((kt = e.microchipsTable) == null ? void 0 : kt.length) ?? 0) > 0 || (((vt = e.itemsTable) == null ? void 0 : vt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !R;
    const U = this.actor.system.abilities ?? {}, _e = (((wt = this.actor.items) == null ? void 0 : wt.contents) ?? []).map((g) => {
      var O, D, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), J = new Map(_e.map((g) => [g.id, g])), $e = "— Nincs képesség —", me = (g) => {
      const O = U[g] ?? {}, D = (O.itemId ?? "").trim(), L = D ? J.get(D) : null, M = (L == null ? void 0 : L.description) ?? "", X = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: D,
        displayName: (L == null ? void 0 : L.name) || O.name || $e,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: X
      };
    };
    e.abilityFajiSlot = me("faji"), e.abilityHatterSlot = me("hatter");
    const ge = (g) => {
      const O = U[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, pe = (g) => g.map((O) => {
      const D = J.get(O);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = pe(ge("passive")), e.abilityActiveList = pe(ge("active"));
    const Le = ((It = e.system) == null ? void 0 : It.resources) ?? {}, Pe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ne = (Tt = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Tt.initiativeResult, De = typeof Ne == "number" ? Ne : -1;
    let he = 0;
    return De >= 25 ? he = 6 : De >= 19 ? he = 5 : De >= 13 ? he = 4 : De >= 7 ? he = 3 : De >= 0 && (he = 2), e.kpDots = Pe.map((g, O) => {
      const D = O + 1, L = !!Number(Le[g]), M = D <= he;
      return { index: D, used: L, usable: M };
    }), (Dt = (_t = e.system) == null ? void 0 : _t.combat) == null || Dt.initiativeResult, e.showInitiativeResult = typeof Ne == "number", e.initiativeResult = e.showInitiativeResult ? Ne : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-K7kkKX03.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, p, h;
      i.preventDefault(), i.stopPropagation();
      const l = i.currentTarget;
      let o = (l.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (l.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((p = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : p.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = l.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: l } = await import("./roll-sheet-K7kkKX03.mjs");
      l(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const l = i.currentTarget, o = parseInt(l.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const r = `system.resources.kpDot${o}`, p = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [r]: p ? 0 : 1 });
    }), !this.isEditable) return;
    const a = (i) => {
      var r;
      const l = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const o = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d });
    const n = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', n), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, p, h;
      i.preventDefault(), i.stopPropagation();
      const l = ((h = (p = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : p.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const l = i.currentTarget, o = l.dataset.skill, r = ((h = l.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-K7kkKX03.mjs");
      p(this.actor, o, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, S, q, A, E, T, F;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), r = o == null ? void 0 : o.dataset.slot;
      if (!r) return;
      const h = (((S = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[r]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((A = (q = this.actor.items).get) == null ? void 0 : A.call(q, h)) ?? ((T = (E = this.actor.items.contents) == null ? void 0 : E.find) == null ? void 0 : T.call(E, (P) => P.id === h));
      (F = v == null ? void 0 : v.sheet) == null || F.render(!0);
    });
    const c = (i, l) => {
      var p;
      const o = i.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = r.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const l = i.currentTarget, o = l.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      let p = Number(l.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await r.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, p = r.items.get(o);
      if (!p) return;
      const h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => S.includes(E)) : [], A = q.find((E) => {
          var T;
          return (((T = v[E]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (A) {
          const E = q.filter((T) => T !== A);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var A, E;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var F;
        return (((F = p[T]) == null ? void 0 : F.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let T = w.find((P) => {
          var N;
          return !((N = p[P]) != null && N.itemId);
        });
        const F = new Set(w);
        if (!T) {
          const P = v.find((N) => !F.has(N));
          if (!P) return;
          T = P, w.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: o,
          [`system.weapons.${T}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${T}.damage`]: ((A = r == null ? void 0 : r.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((E = r == null ? void 0 : r.system) == null ? void 0 : E.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((F) => F !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const l = i.currentTarget;
      if (l.disabled) return;
      const o = l.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const l = i.currentTarget, o = l.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = r == null ? void 0 : r.dataset.slot;
      if (!p) return;
      const h = (l.dataset.itemId ?? "").trim(), v = (l.dataset.itemName ?? ((T = l.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (l.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      w ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", r == null || r.insertBefore(q, S)), q.src = w, q.style.display = "") : q && q.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
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
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "MikroChip") return;
      const r = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = r[S]) == null ? void 0 : q.itemId) ?? "").trim() === l;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const l = i.currentTarget.dataset.slot;
      if (!l) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, l) => {
      const o = l.dataset.slot;
      l.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, o)), l.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, o));
    }), t.find(".karakter-ability-slot-single").each((i, l) => {
      const o = l.dataset.slot;
      o && (l.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, o)), l.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (r) => {
        var p;
        (p = r.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, l) => {
      const o = l.dataset.area;
      o && (l.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, o)), l.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (r) => {
        var p;
        (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!l || !o) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[l]) == null ? void 0 : v.items) ? r[l].items.slice() : []).filter((w) => w !== o);
      await this.actor.update({ [`system.abilities.${l}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var p;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      (p = r == null ? void 0 : r.sheet) == null || p.render(!0);
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
    }), t.find(".karakter-weapon-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = (l.value ?? "").trim();
      await r.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var A, E;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var F;
        return (((F = p[T]) == null ? void 0 : F.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let T = w.find((P) => {
          var N;
          return !((N = p[P]) != null && N.itemId);
        });
        const F = new Set(w);
        if (!T) {
          const P = v.find((N) => !F.has(N));
          if (!P) return;
          T = P, w.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: o,
          [`system.weapons.${T}.name`]: r.name ?? "",
          [`system.weapons.${T}.damage`]: ((A = r.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((E = r.system) == null ? void 0 : E.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((F) => F !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, p = r.items.get(o), h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => S.includes(E)) : [], A = q.find((E) => {
          var T;
          return (((T = v[E]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (A) {
          const E = q.filter((T) => T !== A);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${A}.itemId`] = "", h[`system.weapons.${A}.name`] = "", h[`system.weapons.${A}.damage`] = "", h[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Targy") return;
      const p = (l.value ?? "").trim();
      await r.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, m = (i) => {
      var r, p, h, v;
      if (!i) return;
      const l = f._getFormDataForUpdate(i);
      if (Object.keys(l).length === 0) return;
      const o = ((p = (r = l.system) == null ? void 0 : r.resources) == null ? void 0 : p.currentHealth) != null || ((v = (h = l.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(l).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, y = (i) => {
      var l, o, r;
      return i && (((o = (l = f.element) == null ? void 0 : l.contains) == null ? void 0 : o.call(l, i)) || f.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const l = i.target;
      if (!l || !l.form) return;
      const o = l.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const r = l.form;
      if (!y(r)) return;
      const p = i.relatedTarget;
      p && (r.contains(p) || f.id && ((h = p.closest) != null && h.call(p, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), m(r));
    }, document.body.addEventListener("blur", f._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var c, f, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const b = ((m = a[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, n, c, f, m, y, b, u, i, l;
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
          let p = r.id;
          if (((a = r.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const h = (((n = r.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const w = h === "active" ? "active" : "passive", S = Array.isArray((c = v[w]) == null ? void 0 : c.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          S.includes(p) || S.push(p), await this.actor.update({ [`system.abilities.${w}.items`]: S });
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
          const p = this.actor, h = ((m = r.parent) == null ? void 0 : m.id) !== p.id;
          let v = r.id;
          if (h) {
            const w = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const w = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, S = (w.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = S ? S.split(/\s*,\s*/).filter((T) => q.includes(T)) : [], E = A.filter((T) => {
              var F;
              return (((F = w[T]) == null ? void 0 : F.itemId) ?? "").trim() === v;
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
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const p = this.actor;
          if (((u = r.parent) == null ? void 0 : u.id) !== p.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const p = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== p.id && await p.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const p = this.actor;
          ((l = r.parent) == null ? void 0 : l.id) !== p.id && await p.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, n, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var c, f, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (c = s.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((b = d.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((u = d.system) == null ? void 0 : u.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (a = s.currentTarget) == null || a.classList.add("karakter-actions-row-drag-over"));
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
      const i = typeof b.sort == "number" ? b.sort : 0, l = typeof u.sort == "number" ? u.sort : 0;
      return i - l;
    }).map((b) => b.id), n = d.indexOf(t), c = d.indexOf(e);
    if (n === -1 || c === -1) return;
    d.splice(n, 1), d.splice(c, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var a, d, n;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
    const a = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, a)}px`;
  }
  async _postItemToChat(s) {
    var f, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: c,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", a = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${c}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, d;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, c, f;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((c = a.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, y, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, c = Array.isArray((b = n[e]) == null ? void 0 : b.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    c.includes(d) || c.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var c, f, m, y, b;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(a) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollInitiative() {
    var n;
    const s = Number(((n = this.actor.system.skills) == null ? void 0 : n.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(t);
    await a.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _rollWeapon(s) {
    var w, S;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((q) => q.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((q) => q.id === t.itemId) ?? null);
    const c = n && n.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, m = ((w = n == null ? void 0 : n.system) == null ? void 0 : w.type) || "kinetic", y = (((S = n == null ? void 0 : n.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && a[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(a[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(o);
    await r.evaluate({ async: !0 });
    const { resultType: p, label: h } = We(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, l, o, r, p;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (l = ui.notifications) == null ? void 0 : l.warn) == null || p.call(l, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
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
    form: foundry.utils.mergeObject(((Ft = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ft.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject((($t = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : $t.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Mt = (xt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : xt.window) == null ? void 0 : Mt.contentClasses) ?? [],
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
function ys(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var Rt, Kt, jt, Ht;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, n, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const i = document.activeElement, l = a.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      l && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), c = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, l;
      if (this._applyScrollState(c, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (l = f.querySelector) == null ? void 0 : l.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(c, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), n;
  }
  async _prepareContext(s) {
    var G, te, Y, se, de, we, Ie, Se, Te, ye, V, ie, Fe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((Y = (te = e.system) == null ? void 0 : te.identity) == null ? void 0 : Y.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((de = t == null ? void 0 : t.system) == null ? void 0 : de.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], c = (d.slotOrder ?? "").trim(), f = c ? c.split(/\s*,\s*/).filter((k) => n.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : n, i = n.filter((k) => !u.includes(k)), l = [...u, ...i], o = l.filter((k) => {
      var R;
      const x = (((R = d[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && m.some((U) => U.id === x);
    });
    e.weaponSlots = o.map((k) => {
      const x = d[k] ?? {}, R = (x.itemId ?? "").trim(), U = y.find((_e) => _e.id === R);
      return {
        slotKey: k,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || x.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const r = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var xe;
      const x = k.id;
      let R = null, U = {};
      for (const Ae of l)
        if ((((xe = d[Ae]) == null ? void 0 : xe.itemId) ?? "").trim() === x) {
          R = Ae, U = d[Ae] ?? {};
          break;
        }
      const _e = !!R, J = (k == null ? void 0 : k.system) ?? {}, $e = typeof J.range == "string" ? (J.range || "").trim() : "", me = J.type ?? "", ge = (r[me] ?? me) || "—", pe = J.size ?? "", Le = (p[pe] ?? pe) || "", Pe = [ge, Le].filter(Boolean).join(", ") || ge || "—", Ne = me === "projectile" || pe === "thrown", De = J.quantity != null ? String(J.quantity).trim() : "1", he = String(J.bonus ?? U.bonus ?? "").trim() || "0", je = (J.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: he,
        damage: je,
        rangeStr: $e || "—",
        typeAndSize: Pe,
        quantity: De,
        isProjectile: Ne,
        equipped: _e,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const h = a.filter((k) => k.type === "Pancel");
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
        level: ys((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const v = ((Ie = (we = t == null ? void 0 : t.system) == null ? void 0 : we.gear) == null ? void 0 : Ie.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], S = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = S.map((k) => {
      var me, ge, pe, Le;
      const x = k.id;
      let R = null;
      for (const Pe of w)
        if ((((me = v[Pe]) == null ? void 0 : me.itemId) ?? "").trim() === x) {
          R = Pe;
          break;
        }
      const U = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", _e = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", J = (((pe = k == null ? void 0 : k.system) == null ? void 0 : pe.description) ?? "").trim(), $e = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: _e,
        description: $e,
        kp: Number((Le = k == null ? void 0 : k.system) == null ? void 0 : Le.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const q = a.filter((k) => k.type === "Targy");
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
    const A = a.filter((k) => k.type === "Egyeb");
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
    const T = ((Fe = t == null ? void 0 : t.system) == null ? void 0 : Fe.abilities) ?? {}, F = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
      const x = T[k];
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
      var o, r, p;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((p = (r = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, r, p;
      u.preventDefault();
      const i = (r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (p = l == null ? void 0 : l.sheet) == null || p.render(!0);
    });
    const a = (u) => {
      var o, r;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (r = l == null ? void 0 : l.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, p, h, v;
      u.preventDefault();
      const i = (p = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : p.call(r, ".karakter-weapon-slot"), l = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, l = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!l || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-K7kkKX03.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, r, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let l = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !l && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (l = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!l || !this.actor) && await this._rollWeaponDamage(l, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const i = u.currentTarget, l = (((p = i == null ? void 0 : i.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || l;
      if (!l || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-K7kkKX03.mjs");
      r(this.actor, l, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var l, o;
      u.preventDefault();
      const i = (o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, r;
      u.preventDefault();
      const i = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      l && (l.type === "Kepesseg" || l.type === "ability" ? await this._postAbilityToChat(i) : (l.type === "MikroChip" || l.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, w, S, q, A;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, l = (S = (w = u.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : S.itemId;
      if (!i || !l || !this.actor) return;
      const o = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((A = o[i]) == null ? void 0 : A.items) ? o[i].items.slice() : []).filter((E) => E !== l);
      await this.actor.update({ [`system.abilities.${i}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var l, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, l = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!l || !this.actor) return;
      const o = this.actor, r = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      r && (p[`system.weapons.${r}.itemId`] = "", p[`system.weapons.${r}.name`] = "", p[`system.weapons.${r}.damage`] = "", p[`system.weapons.${r}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [l]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var l, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var p, h, v, w;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = l[S]) == null ? void 0 : q.itemId) ?? "").trim() === i;
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
      const l = this.actor.items.get(i);
      !l || l.type !== "Targy" && l.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var p, h, v;
      const i = u.currentTarget, l = (h = (p = i == null ? void 0 : i.dataset) == null ? void 0 : p.itemId) == null ? void 0 : h.trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      const r = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const n = this, c = (u) => {
      if (!u) return;
      const i = n._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && n.actor.update(i).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, f = (u) => {
      var i, l, o;
      return u && (((l = (i = n.element) == null ? void 0 : i.contains) == null ? void 0 : l.call(i, u)) || n.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (u) => {
      var p;
      const i = u.target;
      if (!i || !i.form) return;
      const l = i.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = i.form;
      if (!f(o)) return;
      const r = u.relatedTarget;
      r && (o.contains(r) || n.id && ((p = r.closest) != null && p.call(r, `#${CSS.escape(n.id)}`))) || c(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0), n._votvNpcItemHookRegistered || (n._votvNpcItemUpdateHook = (u, i, l) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, n._votvNpcItemDeleteHook = (u, i, l) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, Hooks.on("updateItem", n._votvNpcItemUpdateHook), Hooks.on("deleteItem", n._votvNpcItemDeleteHook), n._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, d;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && await this.actor.update(n).catch((c) => console.warn("VoidNpcSheet save on preClose failed", c));
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
    var S, q, A, E, T;
    const e = this.actor;
    if (!e) return;
    const a = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((q = e.system) == null ? void 0 : q.skills) ?? {}, n = ((A = e.items) == null ? void 0 : A.filter((F) => F.type === "Fegyver")) ?? [];
    let c = null;
    a.itemId && (c = n.find((F) => F.id === a.itemId) ?? null);
    const f = c && c.name || a.name || "Fegyver", m = Number(a.bonus || 0) || 0, y = ((E = c == null ? void 0 : c.system) == null ? void 0 : E.type) || "kinetic", b = (((T = c == null ? void 0 : c.system) == null ? void 0 : T.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, l = m + i, r = `3d6${l !== 0 ? l > 0 ? `+${l}` : `${l}` : ""}`, p = new Roll(r);
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
    var f, m, y, b, u, i, l, o, r, p;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (l = ui.notifications) == null ? void 0 : l.warn) == null || p.call(l, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, l, o, r, p, h, v, w, S, q, A, E, T, F;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const a = ((P) => {
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
    if (!a) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (l = (i = ui.notifications) == null ? void 0 : i.info) == null || l.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let P = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== n.id) {
        const te = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        P = ((r = (await n.createEmbeddedDocuments("Item", [te]))[0]) == null ? void 0 : r.id) ?? P;
      }
      const N = (((p = d.system) == null ? void 0 : p.kind) ?? "passive").toString(), H = ((h = n.system) == null ? void 0 : h.abilities) ?? {}, z = N === "active" ? "active" : "passive", G = Array.isArray((v = H[z]) == null ? void 0 : v.items) ? H[z].items.slice() : Array.isArray(H[z]) ? H[z].slice() : [];
      G.includes(P) || G.push(P), await n.update({ [`system.abilities.${z}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = d.parent) == null ? void 0 : w.id) === n.id) return;
    const c = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (S = (await n.createEmbeddedDocuments("Item", [c]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && m) {
      const P = ((q = n.system) == null ? void 0 : q.weapons) ?? {}, N = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], H = (P.slotOrder ?? "").trim(), z = H ? H.split(/\s*,\s*/).filter((Y) => N.includes(Y)) : [];
      let G = N.find((Y) => {
        var se;
        return !(((se = P[Y]) == null ? void 0 : se.itemId) ?? "").trim();
      });
      G || (G = N.find((Y) => !z.includes(Y)) ?? "slot1");
      const te = z.includes(G) ? z : [...z, G].filter((Y) => N.includes(Y));
      await n.update({
        "system.weapons.slotOrder": te.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((E = d.system) == null ? void 0 : E.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const P = ((F = (T = n.system) == null ? void 0 : T.gear) == null ? void 0 : F.microchips) ?? {}, H = ["slot1", "slot2", "slot3"].find((z) => {
        var G;
        return !(((G = P[z]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      H && await n.update({
        [`system.gear.microchips.${H}.itemId`]: m,
        [`system.gear.microchips.${H}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, l, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${c}
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
    let a, d = "";
    if (e.type === "MikroChip") {
      const l = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (a = (l === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", l === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: c,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let d;
      if (a.type === "checkbox")
        d = a.checked;
      else if (a.type === "number") {
        if (a.value === "") continue;
        d = Number(a.value);
      } else if (a.name === "system.resources.kp" || a.name === "system.resources.kp2" || a.name === "system.resources.kp3") {
        const n = (a.value ?? "").trim();
        if (n === "") continue;
        d = Number(n) || 0;
      } else
        d = a.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, a.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
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
    form: foundry.utils.mergeObject(((Rt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Rt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Kt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Kt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ht = (jt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : jt.window) == null ? void 0 : Ht.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = ee;
const gs = [
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
var Ut;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = gs, e;
  }
};
W(re, "PARTS", foundry.utils.mergeObject(j(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), W(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ut = j(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Ut.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = re;
var zt;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
  form: foundry.utils.mergeObject(((zt = j(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : zt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ae;
var Bt;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
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
  form: foundry.utils.mergeObject(((Bt = j(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Bt.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = oe;
var Gt;
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
    }, e._votvInput = (n) => {
      var m;
      const c = n.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const f = (c == null ? void 0 : c.form) ?? ((m = c == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(f), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
W(le, "PARTS", foundry.utils.mergeObject(j(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), W(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Gt = j(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Gt.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = le;
var Wt;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
W(ce, "PARTS", foundry.utils.mergeObject(j(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), W(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Wt = j(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.form) ?? {}, { submitOnChange: !1 })
}));
let et = ce;
var Yt;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (n) => {
      var c, f, m;
      return n && (((f = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : f.call(c, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const c = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
  form: foundry.utils.mergeObject(((Yt = j(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Yt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ue;
const Qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Xt(_) {
  return _ === "Nagy" ? 2 : _ === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, a, d, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = rs, CONFIG.Actor.dataModels.Npc = Jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Lt, CONFIG.Item.dataModels.weapon = Lt, CONFIG.Item.dataModels.Pancel = ls, CONFIG.Item.dataModels.MikroChip = cs, CONFIG.Item.dataModels.Kepesseg = At, CONFIG.Item.dataModels.ability = At, CONFIG.Item.dataModels.Targy = ds, CONFIG.Item.dataModels.Egyeb = ps, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
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
  const _ = 500;
  Hooks.on("updateActor", (c, f, m, y) => {
    var w, S, q, A, E, T, F, P;
    const b = c == null ? void 0 : c.id;
    if (!b) return;
    if (c.type === "Npc" && ((w = f == null ? void 0 : f.system) != null && w.identity) && "size" in f.system.identity) {
      const N = Xt((q = (S = c.system) == null ? void 0 : S.identity) == null ? void 0 : q.size);
      c.update({
        "prototypeToken.width": N,
        "prototypeToken.height": N
      }).catch((H) => console.warn("Vacuum of the Void | NPC token size update failed for", c.name, H));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), l = [], o = (A = game.actors) == null ? void 0 : A.get(b);
    o != null && o.apps && l.push(...Array.from(o.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const N of r)
      ((E = N.document) == null ? void 0 : E.id) !== b || ((T = N.document) == null ? void 0 : T.documentName) !== "Actor" || ((F = N.constructor) == null ? void 0 : F.name) !== "VoidKarakterSheet" || l.includes(N) || l.push(N);
    if (i && l.some((N) => {
      const H = (N == null ? void 0 : N.form) ?? (N == null ? void 0 : N.element);
      return H && H.contains(u);
    })) return;
    const h = (P = game.votv) == null ? void 0 : P._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < _ ? h.appId : null;
    setTimeout(() => {
      for (const N of l)
        !(N != null && N.rendered) || typeof N.render != "function" || N.id !== v && N.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (c, f, m, y) => {
    var l, o, r;
    const b = c == null ? void 0 : c.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || c.type !== "Fegyver") return;
    const u = ((l = b.system) == null ? void 0 : l.weapons) ?? {}, i = {};
    for (const [p, h] of Object.entries(u)) {
      if (!p.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== c.id || (i[`system.weapons.${p}.name`] = c.name ?? "", i[`system.weapons.${p}.damage`] = ((o = c.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${p}.bonus`] = ((r = c.system) == null ? void 0 : r.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var _, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, w, S, q, A, E, T, F, P, N, H, z, G, te, Y, se, de, we, Ie, Se, Te;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const d = (v = game.messages) == null ? void 0 : v.get(a), n = (S = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!n) return;
    const c = n.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!c) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((A = game.actors) == null ? void 0 : A.get(n.actorId)) ?? ((E = game.actors) == null ? void 0 : E.get(c));
    if (f || (f = ((F = (T = game.scenes) == null ? void 0 : T.contents) == null ? void 0 : F.flatMap((V) => {
      var ie;
      return ((ie = V.tokens) == null ? void 0 : ie.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === c || V.id === n.actorId))) ?? null), !f) return;
    const m = n.itemId ? ((N = (P = f.items) == null ? void 0 : P.get) == null ? void 0 : N.call(P, n.itemId)) ?? ((G = (z = (H = f.items) == null ? void 0 : H.contents) == null ? void 0 : z.find) == null ? void 0 : G.call(z, (ye) => ye.id === n.itemId)) : null;
    let y = (n.damageFormula ?? "").trim();
    if (y || (y = (((te = m == null ? void 0 : m.system) == null ? void 0 : te.damage) ?? "").trim()), !y && n.slotKey && (y = (((((Y = f.system) == null ? void 0 : Y.weapons) ?? {})[n.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (Ie = (se = ui.notifications) == null ? void 0 : se.warn) == null || Ie.call(se, ((we = (de = game.i18n) == null ? void 0 : de.localize) == null ? void 0 : we.call(de, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = n.targetName || "", l = n.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (n.slotKey ? ((Te = (((Se = f.system) == null ? void 0 : Se.weapons) ?? {})[n.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    l && (r += ` (${l})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, c, f, m, y, b;
      if (!((c = (n = e.target) == null ? void 0 : n.closest) != null && c.call(n, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), a = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (_ = game.user) != null && _.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const a = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(a != null && a.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Qt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await a.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var n, c, f, m, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((n = game.actors) == null ? void 0 : n.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, l = ((c = i == null ? void 0 : i.bar1) == null ? void 0 : c.attribute) ?? "", o = ((f = i == null ? void 0 : i.bar2) == null ? void 0 : f.attribute) ?? "";
        (l || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((m = u.tokens) == null ? void 0 : m.filter((l) => {
        var o;
        return ((o = l.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const l of i)
        try {
          await l.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", l.name, o);
        }
    }
    const a = {
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((l) => {
        var o;
        return ((o = l.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const l of i)
        try {
          await l.update(a);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", l.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (_, s, e) => {
  var n, c, f, m;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, a = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (c = game.actors) == null ? void 0 : c.get(a) : null;
  if (d) {
    if (d.type === "Karakter") {
      _.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Npc") {
      const y = Xt((m = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : m.size);
      _.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (_, s, e) => {
  const t = _.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && _.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (_, s, e) => {
  if ((_ == null ? void 0 : _.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (_, s, e) => {
  var d;
  const t = _ == null ? void 0 : _.object, a = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const n = s[0] ?? s;
    n != null && n.classList && n.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (_, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || _.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (_, s, e) => {
  var m, y, b, u;
  const t = ((m = _.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel, n = t.weaponAttack, c = t.weapon;
  if (!a && !d && !n) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (a && f.classList.add(`votv-${a}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const l = f.querySelector(".dice-total"), o = (l == null ? void 0 : l.parentElement) ?? f, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, r.textContent = d, o.appendChild(r);
      }
    }
    if (n && c && (c.actorId || (b = _.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), l = (i == null ? void 0 : i.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const p = !!c.isHit, h = c.targetName || "Célpont";
        r.textContent = p ? `Találat – ${h}` : `Nem talált – ${h}`, l.appendChild(r);
      }
      if (c.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const h = c.hitLocationRoll, v = c.hitLocationName;
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(c.actorId ?? ((u = _.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(c.itemId ?? ""), p.dataset.slotKey = String(c.slotKey ?? ""), p.dataset.targetName = String(c.targetName ?? ""), p.dataset.hitLocationName = String(c.hitLocationName ?? ""), p.dataset.messageId = String(_.id ?? ""), l.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-BrhovXOr.mjs.map
