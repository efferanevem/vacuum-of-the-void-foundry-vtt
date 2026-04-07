var ss = Object.defineProperty;
var is = Object.getPrototypeOf;
var rs = Reflect.get;
var ns = (I, s, e) => s in I ? ss(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var J = (I, s, e) => ns(I, typeof s != "symbol" ? s + "" : s, e);
var z = (I, s, e) => rs(is(I), e, s);
const { HTMLField: as, NumberField: O, SchemaField: K, StringField: S, BooleanField: te, ArrayField: tt } = foundry.data.fields;
class Xt extends foundry.abstract.TypeDataModel {
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
        armor: new tt(
          new K({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new tt(
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
          items: new tt(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new tt(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new as({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: rt, SchemaField: os } = foundry.data.fields;
class cs extends Xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new os({
        body: new rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: ls, NumberField: Is, StringField: Ie } = foundry.data.fields;
class Pt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ls({ required: !1, initial: !1 }),
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
const { BooleanField: us, StringField: st } = foundry.data.fields;
class ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new us({ required: !1, initial: !1 }),
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
const { NumberField: nt, StringField: Et } = foundry.data.fields;
class ms extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Et({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Et({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new nt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new nt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new nt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ps, StringField: At } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new At({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new At({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ps({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: $t } = foundry.data.fields;
class fs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $t({ required: !1, blank: !0, initial: "" }),
      quantity: new $t({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ys } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ys({ required: !1, blank: !0, initial: "" })
    };
  }
}
function at(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let r = !1;
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
      const h = !r && c >= 0 && (o.number === 3 || o.number === "3") ? (r = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && h.push(w);
      }
    }
  };
  d(I.terms, 1);
  const n = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = n + f, b = l + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function hs(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var xt, Rt, Mt, Kt;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var r, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, n = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const a = document.activeElement, p = n.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
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
    const t = Number(s), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const d = Math.floor(r / 3), n = Math.floor(2 * r / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
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
    const r = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = r.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, n = ((a = r.currentHealth) == null ? void 0 : a.legs) ?? 0, l = W._healthStatusFromRatio(n, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, l, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, r = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), n = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!r) return;
    const f = Number(n == null ? void 0 : n.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    r.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, a, p, h, v;
    const e = s ?? this.form ?? this.element, t = (w) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, w)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${w}`) : null);
    }, r = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), n = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!r) return;
    const f = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, y = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (W._healthStatusFromRatio(y, m) === 0) {
      r.textContent = "0";
      return;
    }
    const u = Number(n == null ? void 0 : n.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    r.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, l, f, m;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return W._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, y;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = r.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, n = ((y = r.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return W._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var U, oe, X, Pe, ye, ke, ge, _e, Ce, Xe, Ze, Ve, et, He, Ee, yt, gt, ht, bt, kt, vt, wt, It, St, Tt, Dt, _t, Ct, Ot;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((X = (oe = (U = this.actor.system) == null ? void 0 : U.resources) == null ? void 0 : oe.stress) == null ? void 0 : X.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const _ = ((Pe = d[g]) == null ? void 0 : Pe.value) ?? 0, C = n[g] ?? 0;
      e.computedHealthStatus[g] = W._healthStatusFromRatio(C, _);
    }
    const f = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(n[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((ke = (ye = this.actor.system) == null ? void 0 : ye.combat) == null ? void 0 : ke.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const a = (Number(((_e = (ge = this.actor.system) == null ? void 0 : ge.combat) == null ? void 0 : _e.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: a } },
      { inplace: !1 }
    );
    const p = ((Ce = e.system) == null ? void 0 : Ce.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const w = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, _] of Object.entries(w)) {
      const C = e.computedHealthStatus[_];
      e.skillHealthStatus[g] = C, e.skillDisabled[g] = C === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const T = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (T.slotOrder ?? "").trim(), E = P ? P.split(/\s*,\s*/).filter((g) => q.includes(g)) : [], D = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, A = D && typeof D == "object" && !Array.isArray(D) ? D : {}, N = (((Ze = A.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), j = (((Ve = A.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), B = (((et = A.slot3) == null ? void 0 : et.itemId) ?? "").trim(), G = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, _) => {
      const C = typeof g.sort == "number" ? g.sort : 0, L = typeof _.sort == "number" ? _.sort : 0;
      return C - L;
    }).map((g) => {
      var he, qe, Le, ve, we, ze;
      const _ = g.type === "Fegyver", C = g.type === "MikroChip";
      let L = 0, M = "", ee = null;
      for (let Ae = 0; Ae < E.length; Ae++) {
        const Be = E[Ae];
        if ((((he = T[Be]) == null ? void 0 : he.itemId) ?? "") === g.id) {
          L = Ae + 1, M = ((qe = T[Be]) == null ? void 0 : qe.bonus) ?? "", ee = Be;
          break;
        }
      }
      let Z = null;
      C && (N === g.id ? Z = "slot1" : j === g.id ? Z = "slot2" : B === g.id && (Z = "slot3"));
      const Ue = _ && ((Le = g.system) != null && Le.damage) ? g.system.damage : "", ce = _ && typeof ((ve = g.system) == null ? void 0 : ve.range) == "string" ? (g.system.range || "").trim() : "", Oe = ee ? Number((we = T[ee]) == null ? void 0 : we.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: _,
        slotAssignment: L,
        slotBonus: M,
        slotKey: ee,
        microchipSlotKey: Z,
        isEquipped: !!(ee || Z),
        damage: Ue,
        rangeStr: ce,
        slotBonusNum: Oe,
        quantity: Number(((ze = g.system) == null ? void 0 : ze.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const V = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).filter((g) => g.type === "Fegyver"), x = V.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = x;
    const Y = "— Nincs fegyver —", Q = E.filter((g) => {
      const C = ((T[g] ?? {}).itemId ?? "").trim();
      return C ? !!V.find((M) => M.id === C) : !1;
    });
    e.weaponSlots = Q.map((g, _) => {
      const C = T[g] ?? {}, L = (C.itemId ?? "").trim(), M = x.find((ee) => ee.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: _ + 1,
        displayName: (M == null ? void 0 : M.name) || C.name || Y,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(C.bonus) || 0,
        damage: C.damage ?? ""
      };
    });
    const re = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ne = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((g) => {
      var qt, Lt, Nt;
      const _ = g.id;
      let C = null, L = {};
      for (const it of E)
        if ((((qt = T[it]) == null ? void 0 : qt.itemId) ?? "").trim() === _) {
          C = it, L = T[it] ?? {};
          break;
        }
      const M = !!C, ee = ((Lt = g.system) == null ? void 0 : Lt.equipped) !== void 0 && ((Nt = g.system) == null ? void 0 : Nt.equipped) !== null ? !!g.system.equipped : M, Z = (g == null ? void 0 : g.system) ?? {}, Ue = typeof Z.range == "string" ? (Z.range || "").trim() : "", ce = Z.type ?? "", Oe = (re[ce] ?? ce) || "—", he = Z.size ?? "", qe = (ne[he] ?? he) || "", Le = [Oe, qe].filter(Boolean).join(", ") || Oe || "—", ve = ce === "projectile" || he === "thrown", we = Z.quantity, ze = we != null ? String(we).trim() : "1", Ae = String(L.bonus ?? "").trim(), Be = String(Z.bonus ?? "").trim(), ts = Ae || Be || "0";
      return {
        slotKey: C ?? "",
        itemId: _,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? Y,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: ts,
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
    const Se = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).filter((g) => g.type === "Pancel");
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
        level: hs((_.level ?? "").toString().trim()),
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
    const be = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = be.map((g) => {
      const C = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = C ? C.length > 80 ? C.slice(0, 77) + "…" : C : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const se = (((ht = this.actor.items) == null ? void 0 : ht.contents) ?? []).filter((g) => g.type === "MikroChip"), ae = se.map((g) => ({ id: g.id, name: g.name, img: g.img })), Fe = "— Nincs Mikro-Chip —", $e = ["slot1", "slot2", "slot3"], Ne = (g) => {
      var C, L, M;
      const _ = [];
      return g !== 1 && _.push((((C = A.slot1) == null ? void 0 : C.itemId) ?? "").trim()), g !== 2 && _.push((((L = A.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && _.push((((M = A.slot3) == null ? void 0 : M.itemId) ?? "").trim()), _.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((g) => !Ne(1).includes(g.id)), e.microchipItemsSlot2 = ae.filter((g) => !Ne(2).includes(g.id)), e.microchipItemsSlot3 = ae.filter((g) => !Ne(3).includes(g.id)), e.microchipSlots = $e.map((g) => {
      const _ = A[g] ?? {}, C = (_.itemId ?? "").trim(), L = se.find((M) => M.id === C);
      return {
        slotKey: g,
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Fe,
        img: (L == null ? void 0 : L.img) || "",
        active: _.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const _ = `slot${g}`, C = A[_] ?? {}, L = (C.itemId ?? "").trim(), M = ae.find((ee) => ee.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || C.name || Fe, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = se.map((g) => {
      var he, qe, Le, ve;
      const _ = g.id;
      let C = null;
      for (const we of $e)
        if ((((he = A[we]) == null ? void 0 : he.itemId) ?? "").trim() === _) {
          C = we;
          break;
        }
      const L = !!C, M = ((qe = g == null ? void 0 : g.system) == null ? void 0 : qe.abilityType) ?? "", ee = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Z = M === "active", Ue = Number((Le = g == null ? void 0 : g.system) == null ? void 0 : Le.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ce = (((ve = g == null ? void 0 : g.system) == null ? void 0 : ve.description) ?? "").trim(), Oe = ce ? ce.length > 60 ? ce.slice(0, 57) + "…" : ce : "—";
      return {
        itemId: _,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: ee,
        description: Oe,
        kp: Ue,
        isActive: Z,
        slotKey: C ?? "",
        equipped: L
      };
    });
    const Ge = (((bt = e.weaponsTable) == null ? void 0 : bt.length) ?? 0) > 0 || (((kt = e.armorTable) == null ? void 0 : kt.length) ?? 0) > 0 || (((vt = e.microchipsTable) == null ? void 0 : vt.length) ?? 0) > 0 || (((wt = e.itemsTable) == null ? void 0 : wt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ge;
    const xe = this.actor.system.abilities ?? {}, We = (((It = this.actor.items) == null ? void 0 : It.contents) ?? []).map((g) => {
      var _, C, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((_ = g.system) == null ? void 0 : _.kind) ?? "passive",
        description: ((C = g.system) == null ? void 0 : C.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), Re = new Map(We.map((g) => [g.id, g])), Ye = "— Nincs képesség —", Me = (g) => {
      const _ = xe[g] ?? {}, C = (_.itemId ?? "").trim(), L = C ? Re.get(C) : null, M = (L == null ? void 0 : L.description) ?? "", ee = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: C,
        displayName: (L == null ? void 0 : L.name) || _.name || Ye,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: ee
      };
    };
    e.abilityFajiSlot = Me("faji"), e.abilityHatterSlot = Me("hatter");
    const Ke = (g) => {
      const _ = xe[g];
      return _ ? Array.isArray(_ == null ? void 0 : _.items) ? _.items : Array.isArray(_) ? _ : [] : [];
    }, je = (g) => g.map((_) => {
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
    const Je = ((St = e.system) == null ? void 0 : St.resources) ?? {}, Qe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], De = (Dt = (Tt = e.system) == null ? void 0 : Tt.combat) == null ? void 0 : Dt.initiativeResult, k = typeof De == "number" ? De : -1;
    let F = 0;
    k >= 25 ? F = 6 : k >= 19 ? F = 5 : k >= 13 ? F = 4 : k >= 7 ? F = 3 : k >= 0 && (F = 2), e.kpDots = Qe.map((g, _) => {
      const C = _ + 1, L = !!Number(Je[g]), M = C <= F;
      return { index: C, used: L, usable: M };
    });
    const R = !!((Ct = (_t = game.combat) == null ? void 0 : _t.combatants) != null && Ct.some((g) => {
      var _;
      return ((_ = g.actor) == null ? void 0 : _.type) === "Karakter";
    }));
    return e.showHarcSection = R, e.canEditInitiative = !!((Ot = game.user) != null && Ot.isGM), e.showInitiativeResult = typeof De == "number", e.initiativeResult = e.showInitiativeResult ? De : "", e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-C-UYG9_h.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-C-UYG9_h.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, p = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [a]: p ? 0 : 1 });
    }), !this.isEditable) return;
    const r = (i) => {
      var a;
      const c = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d });
    const n = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', n), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
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
      const c = i.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-C-UYG9_h.mjs");
      p(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, T, q, P, E, D, A;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((T = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (q = this.actor.items).get) == null ? void 0 : P.call(q, h)) ?? ((D = (E = this.actor.items.contents) == null ? void 0 : E.find) == null ? void 0 : D.call(E, (N) => N.id === h));
      (A = v == null ? void 0 : v.sheet) == null || A.render(!0);
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
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => T.includes(E)) : [], P = q.find((E) => {
          var D;
          return (((D = v[E]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (P) {
          const E = q.filter((D) => D !== P);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, E;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = w.find((D) => {
        var A;
        return (((A = p[D]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let D = w.find((N) => {
          var j;
          return !((j = p[N]) != null && j.itemId);
        });
        const A = new Set(w);
        if (!D) {
          const N = v.find((j) => !A.has(j));
          if (!N) return;
          D = N, w.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${D}.damage`]: ((P = a == null ? void 0 : a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((E = a == null ? void 0 : a.system) == null ? void 0 : E.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const D = w.filter((A) => A !== T);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
      var D;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = a == null ? void 0 : a.dataset.slot;
      if (!p) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((D = c.textContent) == null ? void 0 : D.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (c.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      w ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", a == null || a.insertBefore(q, T)), q.src = w, q.style.display = "") : q && q.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, E = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (P == null ? void 0 : P.name) ?? ""
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
      const a = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = a[T]) == null ? void 0 : q.itemId) ?? "").trim() === c;
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
      var P, E;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((D) => v.includes(D)) : [], T = w.find((D) => {
        var A;
        return (((A = p[D]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let D = w.find((N) => {
          var j;
          return !((j = p[N]) != null && j.itemId);
        });
        const A = new Set(w);
        if (!D) {
          const N = v.find((j) => !A.has(j));
          if (!N) return;
          D = N, w.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: o,
          [`system.weapons.${D}.name`]: a.name ?? "",
          [`system.weapons.${D}.damage`]: ((P = a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((E = a.system) == null ? void 0 : E.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const D = w.filter((A) => A !== T);
        await this.actor.update({
          "system.weapons.slotOrder": D.join(","),
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
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = w ? w.split(/\s*,\s*/).filter((E) => T.includes(E)) : [], P = q.find((E) => {
          var D;
          return (((D = v[E]) == null ? void 0 : D.itemId) ?? "").trim() === o;
        });
        if (P) {
          const E = q.filter((D) => D !== P);
          h["system.weapons.slotOrder"] = E.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
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
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const b = ((m = r[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, W._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, r, d, n, l, f, m, y, b, u, i, c;
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
          if (((r = a.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const h = (((n = a.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
          const w = h === "active" ? "active" : "passive", T = Array.isArray((l = v[w]) == null ? void 0 : l.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          T.includes(p) || T.push(p), await this.actor.update({ [`system.abilities.${w}.items`]: T });
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
            const w = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, T = (w.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = T ? T.split(/\s*,\s*/).filter((D) => q.includes(D)) : [], E = P.filter((D) => {
              var A;
              return (((A = w[D]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (E.length > 0) {
              const A = {
                "system.weapons.slotOrder": P.filter((N) => !E.includes(N)).join(",")
              };
              for (const N of E)
                A[`system.weapons.${N}.itemId`] = "", A[`system.weapons.${N}.name`] = "", A[`system.weapons.${N}.damage`] = "", A[`system.weapons.${N}.bonus`] = "";
              await p.update(A);
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
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, f, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
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
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (r = s.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
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
    }).map((b) => b.id), n = d.indexOf(t), l = d.indexOf(e);
    if (n === -1 || l === -1) return;
    d.splice(n, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var r, d, n;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const r = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, r)}px`;
  }
  async _postItemToChat(s) {
    var f, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let r, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (r = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${n}
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", r = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
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
    var r, d;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, l, f;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((l = r.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, y, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((m = r.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, l = Array.isArray((b = n[e]) == null ? void 0 : b.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, f, m, y, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const r = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(r) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: b } = at(m), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    const r = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollInitiative() {
    var n;
    const s = Number(((n = this.actor.system.skills) == null ? void 0 : n.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, r = new Roll(t);
    await r.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _rollWeapon(s) {
    var w, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, r = this.actor.system.skills ?? {}, d = this.actor.items.filter((q) => q.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((q) => q.id === t.itemId) ?? null);
    const l = n && n.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, m = ((w = n == null ? void 0 : n.system) == null ? void 0 : w.type) || "kinetic", y = (((T = n == null ? void 0 : n.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = y && r[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(r[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: p, label: h } = at(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    let r = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!r || r.type !== "Fegyver") return;
    let d = (((u = r.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
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
    form: foundry.utils.mergeObject(((xt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Rt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Rt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Kt = (Mt = z(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.window) == null ? void 0 : Kt.contentClasses) ?? [],
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
function bs(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var jt, Ht, Ut, zt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var r, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, r = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const i = document.activeElement, c = r.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), n;
  }
  async _prepareContext(s) {
    var Se, Te, be, se, ae, Fe, $e, Ne, Ge, xe, We, Re, Ye, Me, Ke, je, Je, Qe, De;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Se = this.actor) == null ? void 0 : Se.system), e.showDeathSkull = !1, e.sizeForSelect = (((be = (Te = e.system) == null ? void 0 : Te.identity) == null ? void 0 : be.size) ?? "").trim() || "Közepes";
    const t = this.actor, r = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((ae = t == null ? void 0 : t.system) == null ? void 0 : ae.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => n.includes(k)) : [], m = r.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : n, i = n.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
      var R;
      const F = (((R = d[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return F && m.some((U) => U.id === F);
    });
    e.weaponSlots = o.map((k) => {
      const F = d[k] ?? {}, R = (F.itemId ?? "").trim(), U = y.find((oe) => oe.id === R);
      return {
        slotKey: k,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || F.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var He;
      const F = k.id;
      let R = null, U = {};
      for (const Ee of c)
        if ((((He = d[Ee]) == null ? void 0 : He.itemId) ?? "").trim() === F) {
          R = Ee, U = d[Ee] ?? {};
          break;
        }
      const oe = !!R, X = (k == null ? void 0 : k.system) ?? {}, Pe = typeof X.range == "string" ? (X.range || "").trim() : "", ye = X.type ?? "", ke = (a[ye] ?? ye) || "—", ge = X.size ?? "", _e = (p[ge] ?? ge) || "", Ce = [ke, _e].filter(Boolean).join(", ") || ke || "—", Xe = ye === "projectile" || ge === "thrown", Ze = X.quantity != null ? String(X.quantity).trim() : "1", Ve = String(X.bonus ?? U.bonus ?? "").trim() || "0", et = (X.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Ve,
        damage: et,
        rangeStr: Pe || "—",
        typeAndSize: Ce,
        quantity: Ze,
        isProjectile: Xe,
        equipped: oe,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const h = r.filter((k) => k.type === "Pancel");
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
        level: bs((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const v = (($e = (Fe = t == null ? void 0 : t.system) == null ? void 0 : Fe.gear) == null ? void 0 : $e.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], T = r.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var ye, ke, ge, _e;
      const F = k.id;
      let R = null;
      for (const Ce of w)
        if ((((ye = v[Ce]) == null ? void 0 : ye.itemId) ?? "").trim() === F) {
          R = Ce;
          break;
        }
      const U = ((ke = k == null ? void 0 : k.system) == null ? void 0 : ke.abilityType) ?? "", oe = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", X = (((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.description) ?? "").trim(), Pe = X ? X.length > 60 ? X.slice(0, 57) + "…" : X : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: oe,
        description: Pe,
        kp: Number((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const q = r.filter((k) => k.type === "Targy");
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
    const P = r.filter((k) => k.type === "Egyeb");
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
    const E = (((Ne = e.weaponsTable) == null ? void 0 : Ne.length) ?? 0) > 0 || (((Ge = e.armorTable) == null ? void 0 : Ge.length) ?? 0) > 0 || (((xe = e.microchipsTable) == null ? void 0 : xe.length) ?? 0) > 0 || (((We = e.itemsTable) == null ? void 0 : We.length) ?? 0) > 0 || (((Re = e.egyebList) == null ? void 0 : Re.length) ?? 0) > 0;
    e.showEquipmentDropZone = !E;
    const D = ((Ye = t == null ? void 0 : t.system) == null ? void 0 : Ye.abilities) ?? {}, A = r.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, R;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((R = k.system) == null ? void 0 : R.kp) ?? 0) || 0
      };
    }), N = new Map(A.map((k) => [k.id, k])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
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
    const x = ((je = e.system) == null ? void 0 : je.resources) ?? {}, Y = (Qe = (Je = e.system) == null ? void 0 : Je.combat) == null ? void 0 : Qe.initiativeResult, Q = typeof Y == "number" ? Y : -1;
    let re = 0;
    Q >= 25 ? re = 6 : Q >= 19 ? re = 5 : Q >= 13 ? re = 4 : Q >= 7 ? re = 3 : Q >= 0 && (re = 2);
    const ne = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    return e.kpDots = ne.map((k, F) => {
      const R = F + 1, U = !!Number(x[k]), oe = R <= re;
      return { index: R, used: U, usable: oe };
    }), e.canEditInitiative = !!((De = game.user) != null && De.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e;
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
    const r = (u) => {
      var o, a;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (a = c == null ? void 0 : c.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), r(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), r(u.currentTarget);
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
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-C-UYG9_h.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-C-UYG9_h.mjs");
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
      const { openRollSheetForSkill: a } = await import("./roll-sheet-C-UYG9_h.mjs");
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
      var h, v, w, T, q, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (T = (w = u.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((E) => E !== c);
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
      const c = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((T) => {
        var q;
        return (((q = c[T]) == null ? void 0 : q.itemId) ?? "").trim() === i;
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
    const n = this, l = (u) => {
      if (!u) return;
      const i = n._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && n.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (u) => {
      var i, c, o;
      return u && (((c = (i = n.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, u)) || n.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (u) => {
      var p;
      const i = u.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = i.form;
      if (!f(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || n.id && ((p = a.closest) != null && p.call(a, `#${CSS.escape(n.id)}`))) || l(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0), n._votvNpcItemHookRegistered || (n._votvNpcItemUpdateHook = (u, i, c) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, n._votvNpcItemDeleteHook = (u, i, c) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, Hooks.on("updateItem", n._votvNpcItemUpdateHook), Hooks.on("deleteItem", n._votvNpcItemDeleteHook), n._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, r, d;
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && await this.actor.update(n).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var T, q, P, E, D;
    const e = this.actor;
    if (!e) return;
    const r = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((q = e.system) == null ? void 0 : q.skills) ?? {}, n = ((P = e.items) == null ? void 0 : P.filter((A) => A.type === "Fegyver")) ?? [];
    let l = null;
    r.itemId && (l = n.find((A) => A.id === r.itemId) ?? null);
    const f = l && l.name || r.name || "Fegyver", m = Number(r.bonus || 0) || 0, y = ((E = l == null ? void 0 : l.system) == null ? void 0 : E.type) || "kinetic", b = (((D = l == null ? void 0 : l.system) == null ? void 0 : D.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = m + i, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, p = new Roll(a);
    await p.evaluate({ async: !0 });
    const { resultType: h, label: v } = at(p), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    const r = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!r || r.type !== "Fegyver") return;
    let d = (((u = r.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, c, o, a, p, h, v, w, T, q, P, E, D, A;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const r = ((N) => {
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
    if (!r) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== n.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((a = (await n.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : a.id) ?? N;
      }
      const j = (((p = d.system) == null ? void 0 : p.kind) ?? "passive").toString(), B = ((h = n.system) == null ? void 0 : h.abilities) ?? {}, H = j === "active" ? "active" : "passive", G = Array.isArray((v = B[H]) == null ? void 0 : v.items) ? B[H].items.slice() : Array.isArray(B[H]) ? B[H].slice() : [];
      G.includes(N) || G.push(N), await n.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = d.parent) == null ? void 0 : w.id) === n.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (T = (await n.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : T.id;
    if (d.type === "Fegyver" && m) {
      const N = ((q = n.system) == null ? void 0 : q.weapons) ?? {}, j = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], B = (N.slotOrder ?? "").trim(), H = B ? B.split(/\s*,\s*/).filter((x) => j.includes(x)) : [];
      let G = j.find((x) => {
        var Y;
        return !(((Y = N[x]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      G || (G = j.find((x) => !H.includes(x)) ?? "slot1");
      const V = H.includes(G) ? H : [...H, G].filter((x) => j.includes(x));
      await n.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((P = d.system) == null ? void 0 : P.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((E = d.system) == null ? void 0 : E.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const N = ((A = (D = n.system) == null ? void 0 : D.gear) == null ? void 0 : A.microchips) ?? {}, B = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = N[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      B && await n.update({
        [`system.gear.microchips.${B}.itemId`]: m,
        [`system.gear.microchips.${B}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", r = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
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
    let r, d = "";
    if (e.type === "MikroChip") {
      const c = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (r = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${n}
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
    for (const r of s.elements) {
      if (!r.name || r.disabled || r.type === "radio" && !r.checked) continue;
      let d;
      if (r.type === "checkbox")
        d = r.checked;
      else if (r.type === "number") {
        if (r.value === "") continue;
        d = Number(r.value);
      } else if (r.name === "system.resources.kp" || r.name === "system.resources.kp2" || r.name === "system.resources.kp3") {
        const n = (r.value ?? "").trim();
        if (n === "") continue;
        d = Number(n) || 0;
      } else
        d = r.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, r.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const r = e.name;
      (r === void 0 || typeof r == "string" && r.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
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
    form: foundry.utils.mergeObject(((jt = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : jt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ht = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ht.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((zt = (Ut = z(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ut.window) == null ? void 0 : zt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let ct = ie;
const ks = [
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
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = ks, e;
  }
};
J(le, "PARTS", foundry.utils.mergeObject(z(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), J(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Bt = z(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Bt.form) ?? {}, { submitOnChange: !1 })
}));
let lt = le;
var Gt;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(ue, "PARTS", foundry.utils.mergeObject(z(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), J(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Gt = z(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Gt.form) ?? {}, { submitOnChange: !1 })
}));
let ut = ue;
var Wt;
const de = class de extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
J(de, "PARTS", foundry.utils.mergeObject(z(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), J(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Wt = z(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : Wt.form) ?? {}, { submitOnChange: !1 })
}));
let dt = de;
var Yt;
const me = class me extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
    }, e._votvInput = (n) => {
      var m;
      const l = n.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(f), 300));
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
J(me, "PARTS", foundry.utils.mergeObject(z(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), J(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Yt = z(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : Yt.form) ?? {}, { submitOnChange: !0 })
}));
let mt = me;
var Jt;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(pe, "PARTS", foundry.utils.mergeObject(z(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), J(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Jt = z(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Jt.form) ?? {}, { submitOnChange: !1 })
}));
let pt = pe;
var Qt;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
J(fe, "PARTS", foundry.utils.mergeObject(z(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), J(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(z(fe, fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qt = z(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Qt.form) ?? {}, { submitOnChange: !1 })
}));
let ft = fe;
const Zt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Vt(I) {
  return I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, r, d, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = cs, CONFIG.Actor.dataModels.Npc = Xt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Pt, CONFIG.Item.dataModels.weapon = Pt, CONFIG.Item.dataModels.Pancel = ds, CONFIG.Item.dataModels.MikroChip = ms, CONFIG.Item.dataModels.Kepesseg = Ft, CONFIG.Item.dataModels.ability = Ft, CONFIG.Item.dataModels.Targy = fs, CONFIG.Item.dataModels.Egyeb = gs, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ot, {
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
  const I = 500;
  Hooks.on("updateActor", (l, f, m, y) => {
    var w, T, q, P, E, D, A, N, j, B, H, G, V;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if ((l.type === "Karakter" || l.type === "Npc") && ((w = f == null ? void 0 : f.system) != null && w.combat) && "initiativeResult" in f.system.combat) {
      const x = Number((q = (T = l.system) == null ? void 0 : T.combat) == null ? void 0 : q.initiativeResult), Y = Number.isFinite(x) ? x : 0, Q = game.combat;
      if (Q) {
        const re = ((P = Q.combatants) == null ? void 0 : P.contents) ?? Array.from(Q.combatants ?? []);
        for (const ne of re)
          if (((E = ne.actor) == null ? void 0 : E.id) === b || ne.actorId === b) {
            Q.updateEmbeddedDocuments("Combatant", [{ _id: ne.id, initiative: Y }]).catch(() => {
            });
            break;
          }
      }
    }
    if (l.type === "Npc" && ((D = f == null ? void 0 : f.system) != null && D.identity) && "size" in f.system.identity) {
      const x = Vt((N = (A = l.system) == null ? void 0 : A.identity) == null ? void 0 : N.size);
      l.update({
        "prototypeToken.width": x,
        "prototypeToken.height": x
      }).catch((Y) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, Y));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (j = game.actors) == null ? void 0 : j.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const x of a)
      ((B = x.document) == null ? void 0 : B.id) !== b || ((H = x.document) == null ? void 0 : H.documentName) !== "Actor" || ((G = x.constructor) == null ? void 0 : G.name) !== "VoidKarakterSheet" || c.includes(x) || c.push(x);
    if (i && c.some((x) => {
      const Y = (x == null ? void 0 : x.form) ?? (x == null ? void 0 : x.element);
      return Y && Y.contains(u);
    })) return;
    const h = (V = game.votv) == null ? void 0 : V._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < I ? h.appId : null;
    setTimeout(() => {
      for (const x of c)
        !(x != null && x.rendered) || typeof x.render != "function" || x.id !== v && x.render(!0);
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
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, w, T, q, P, E, D, A, N, j, B, H, G, V, x, Y, Q, re, ne, Se, Te;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const r = (t.dataset.messageId ?? "").trim();
    if (!r) return;
    const d = (v = game.messages) == null ? void 0 : v.get(r), n = (T = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!n) return;
    const l = n.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((P = game.actors) == null ? void 0 : P.get(n.actorId)) ?? ((E = game.actors) == null ? void 0 : E.get(l));
    if (f || (f = ((A = (D = game.scenes) == null ? void 0 : D.contents) == null ? void 0 : A.flatMap((se) => {
      var ae;
      return ((ae = se.tokens) == null ? void 0 : ae.contents) ?? [];
    }).map((se) => se.actor).find((se) => se && (se.id === l || se.id === n.actorId))) ?? null), !f) return;
    const m = n.itemId ? ((j = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : j.call(N, n.itemId)) ?? ((G = (H = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (be) => be.id === n.itemId)) : null;
    let y = (n.damageFormula ?? "").trim();
    if (y || (y = (((V = m == null ? void 0 : m.system) == null ? void 0 : V.damage) ?? "").trim()), !y && n.slotKey && (y = (((((x = f.system) == null ? void 0 : x.weapons) ?? {})[n.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (ne = (Y = ui.notifications) == null ? void 0 : Y.warn) == null || ne.call(Y, ((re = (Q = game.i18n) == null ? void 0 : Q.localize) == null ? void 0 : re.call(Q, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = n.targetName || "", c = n.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (n.slotKey ? ((Te = (((Se = f.system) == null ? void 0 : Se.weapons) ?? {})[n.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
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
      var n, l, f, m, y, b;
      if (!((l = (n = e.target) == null ? void 0 : n.closest) != null && l.call(n, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), r = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (I = game.user) != null && I.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const r = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(r != null && r.create)) {
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
      }, n = await r.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (r) {
      console.warn("Vacuum of the Void | Default scene creation failed:", r);
    }
  })(), (async () => {
    var n, l, f, m, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((n = game.actors) == null ? void 0 : n.filter((u) => u.type === "Karakter")) ?? [];
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
    const r = {
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
          await c.update(r);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var n, l, f, m;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (l = game.actors) == null ? void 0 : l.get(r) : null;
  if (d) {
    if (d.type === "Karakter") {
      I.updateSource({
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
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (I, s, e) => {
  const t = I.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((r) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", r);
  });
});
const vs = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function es(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const r = t.actor;
    !r || r.type !== "Karakter" || r.update(vs).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", r.name, d);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || es(I);
});
Hooks.on("deleteCombat", () => {
  setTimeout(votvRenderOpenKarakterSheets, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && es(I), setTimeout(votvRenderOpenKarakterSheets, 0);
});
Hooks.on("renderSidebarTab", (I, s, e) => {
  if ((I == null ? void 0 : I.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var d;
  const t = I == null ? void 0 : I.object, r = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((r == null ? void 0 : r.type) === "Karakter") {
    const n = s[0] ?? s;
    n != null && n.classList && n.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Zt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var m, y, b, u;
  const t = ((m = I.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel, n = t.weaponAttack, l = t.weapon;
  if (!r && !d && !n) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (r && f.classList.add(`votv-${r}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (n && l && (l.actorId || (b = I.speaker) != null && b.actor)) {
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
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((u = I.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(I.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  ot as V,
  at as c
};
//# sourceMappingURL=vacuum-of-the-void-Bl_elswe.mjs.map
