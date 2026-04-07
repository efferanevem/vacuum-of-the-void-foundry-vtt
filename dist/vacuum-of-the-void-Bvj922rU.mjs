var Gt = Object.defineProperty;
var Wt = Object.getPrototypeOf;
var Yt = Reflect.get;
var Jt = (_, s, e) => s in _ ? Gt(_, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[s] = e;
var W = (_, s, e) => Jt(_, typeof s != "symbol" ? s + "" : s, e);
var j = (_, s, e) => Yt(Wt(_), e, s);
const { HTMLField: Qt, NumberField: F, SchemaField: K, StringField: I, BooleanField: Z, ArrayField: He } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new F({ required: !1, integer: !0, min: 1, initial: 1 }),
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
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new K({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new K({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new K({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new F({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new K({
        defense: new F({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new F({ required: !1, integer: !1, initial: 0 }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new K({
        deception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new I({ required: !1, blank: !0, initial: "" }),
        combatTraining: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new F({ required: !1, integer: !0, min: 0, initial: 0 })
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
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
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
        biography: new Qt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Be, SchemaField: Xt } = foundry.data.fields;
class Zt extends Ht {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Xt({
        body: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Vt, NumberField: ds, StringField: ke } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Vt({ required: !1, initial: !1 }),
      type: new ke({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ke({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ke({ required: !1, blank: !0, initial: "" }),
      damage: new ke({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ke({ required: !1, blank: !0, initial: "" }),
      special: new ke({ required: !1, blank: !0, initial: "" }),
      quantity: new ke({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new ke({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: es, StringField: Ue } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new es({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: Tt } = foundry.data.fields;
class ss extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Tt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Tt({
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
const { NumberField: is, StringField: _t } = foundry.data.fields;
class Dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new _t({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new _t({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new is({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ot } = foundry.data.fields;
class rs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ot({ required: !1, blank: !0, initial: "" }),
      quantity: new Ot({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ns } = foundry.data.fields;
class as extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ns({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(_) {
  if (!_ || !Array.isArray(_.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
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
      const n = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!n || !p || n === 8 || n !== 6) continue;
      const h = !a && c >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && h.push(w);
      }
    }
  };
  d(_.terms, 1);
  const r = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = r + f, b = l + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function os(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var Ct, qt, Lt, Pt;
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
    var a, d, r, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const n = document.activeElement, p = r.contains(n), h = n && (n.tagName === "INPUT" && n.type !== "checkbox" && n.type !== "radio" || n.tagName === "TEXTAREA");
      p && h && (l.focus = {
        name: n.name || null,
        id: n.id || null,
        selectionStart: "selectionStart" in n ? n.selectionStart : 0,
        selectionEnd: "selectionEnd" in n ? n.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var n, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((n = y.querySelector) == null ? void 0 : n.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = y.querySelector) == null ? void 0 : p.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
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
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), r = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
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
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
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
    var b, u, i, c, o, n, p, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = a.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, r = ((n = a.currentHealth) == null ? void 0 : n.legs) ?? 0, l = B._healthStatusFromRatio(r, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
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
    }, a = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const f = Number(r == null ? void 0 : r.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, n, p, h, v;
    const e = s ?? this.form ?? this.element, t = (w) => {
      var S;
      return ((S = e == null ? void 0 : e.querySelector) == null ? void 0 : S.call(e, w)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${w}`) : null);
    }, a = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    const f = ((n = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : n.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, y = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (B._healthStatusFromRatio(y, m) === 0) {
      a.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, f, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, a = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = a.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, r = ((y = a.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var _e, Me, Re, Ke, je, Ee, Le, st, it, rt, nt, at, ot, ct, lt, ut, dt, mt, pt, ft, yt, gt, ht, bt, kt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Re = (Me = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : Me.stress) == null ? void 0 : Re.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, r = a.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const D = ((Ke = d[g]) == null ? void 0 : Ke.value) ?? 0, O = r[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(O, D);
    }
    const f = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((Ee = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Ee.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const n = (Number(((st = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : st.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: n } },
      { inplace: !1 }
    );
    const p = ((it = e.system) == null ? void 0 : it.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const w = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, D] of Object.entries(w)) {
      const O = e.computedHealthStatus[D];
      e.skillHealthStatus[g] = O, e.skillDisabled[g] = O === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const S = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (S.slotOrder ?? "").trim(), N = P ? P.split(/\s*,\s*/).filter((g) => C.includes(g)) : [], T = (rt = this.actor.system.gear) == null ? void 0 : rt.microchips, A = T && typeof T == "object" && !Array.isArray(T) ? T : {}, q = (((nt = A.slot1) == null ? void 0 : nt.itemId) ?? "").trim(), L = (((at = A.slot2) == null ? void 0 : at.itemId) ?? "").trim(), H = (((ot = A.slot3) == null ? void 0 : ot.itemId) ?? "").trim(), G = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, D) => {
      const O = typeof g.sort == "number" ? g.sort : 0, E = typeof D.sort == "number" ? D.sort : 0;
      return O - E;
    }).map((g) => {
      var fe, Oe, Ce, he, be, $e;
      const D = g.type === "Fegyver", O = g.type === "MikroChip";
      let E = 0, R = "", X = null;
      for (let Pe = 0; Pe < N.length; Pe++) {
        const xe = N[Pe];
        if ((((fe = S[xe]) == null ? void 0 : fe.itemId) ?? "") === g.id) {
          E = Pe + 1, R = ((Oe = S[xe]) == null ? void 0 : Oe.bonus) ?? "", X = xe;
          break;
        }
      }
      let Q = null;
      O && (q === g.id ? Q = "slot1" : L === g.id ? Q = "slot2" : H === g.id && (Q = "slot3"));
      const Fe = D && ((Ce = g.system) != null && Ce.damage) ? g.system.damage : "", re = D && typeof ((he = g.system) == null ? void 0 : he.range) == "string" ? (g.system.range || "").trim() : "", De = X ? Number((be = S[X]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: D,
        slotAssignment: E,
        slotBonus: R,
        slotKey: X,
        microchipSlotKey: Q,
        isEquipped: !!(X || Q),
        damage: Fe,
        rangeStr: re,
        slotBonusNum: De,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const te = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Fegyver"), Y = te.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = Y;
    const se = "— Nincs fegyver —", de = N.filter((g) => {
      const O = ((S[g] ?? {}).itemId ?? "").trim();
      return O ? !!te.find((R) => R.id === O) : !1;
    });
    e.weaponSlots = de.map((g, D) => {
      const O = S[g] ?? {}, E = (O.itemId ?? "").trim(), R = Y.find((X) => X.id === E);
      return {
        slotKey: g,
        itemId: E,
        slotNum: D + 1,
        displayName: (R == null ? void 0 : R.name) || O.name || se,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(O.bonus) || 0,
        damage: O.damage ?? ""
      };
    });
    const ve = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, we = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = te.map((g) => {
      var vt, wt, It;
      const D = g.id;
      let O = null, E = {};
      for (const ze of N)
        if ((((vt = S[ze]) == null ? void 0 : vt.itemId) ?? "").trim() === D) {
          O = ze, E = S[ze] ?? {};
          break;
        }
      const R = !!O, X = ((wt = g.system) == null ? void 0 : wt.equipped) !== void 0 && ((It = g.system) == null ? void 0 : It.equipped) !== null ? !!g.system.equipped : R, Q = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Q.range == "string" ? (Q.range || "").trim() : "", re = Q.type ?? "", De = (ve[re] ?? re) || "—", fe = Q.size ?? "", Oe = (we[fe] ?? fe) || "", Ce = [De, Oe].filter(Boolean).join(", ") || De || "—", he = re === "projectile" || fe === "thrown", be = Q.quantity, $e = be != null ? String(be).trim() : "1", Pe = String(E.bonus ?? "").trim(), xe = String(Q.bonus ?? "").trim(), Bt = Pe || xe || "0";
      return {
        slotKey: O ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? se,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Bt,
        damage: E.damage ?? Q.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: De,
        typeAndSize: Ce,
        quantity: $e,
        quantityDisplay: he ? $e : "—",
        isProjectile: he,
        equipped: X,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const Ie = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Ie.map((g) => {
      var E, R;
      const D = (g == null ? void 0 : g.system) ?? {}, O = ((E = g.system) == null ? void 0 : E.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: os((D.level ?? "").toString().trim()),
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: O
      };
    });
    const Se = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Se.map((g) => {
      const D = (g == null ? void 0 : g.system) ?? {}, O = (D.description ?? "").trim(), E = O ? O.length > 60 ? O.slice(0, 57) + "…" : O : "—", R = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: E
      };
    });
    const ye = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const O = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), E = O ? O.length > 80 ? O.slice(0, 77) + "…" : O : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: E
      };
    });
    const V = (((mt = this.actor.items) == null ? void 0 : mt.contents) ?? []).filter((g) => g.type === "MikroChip"), ie = V.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ne = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], x = (g) => {
      var O, E, R;
      const D = [];
      return g !== 1 && D.push((((O = A.slot1) == null ? void 0 : O.itemId) ?? "").trim()), g !== 2 && D.push((((E = A.slot2) == null ? void 0 : E.itemId) ?? "").trim()), g !== 3 && D.push((((R = A.slot3) == null ? void 0 : R.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((g) => !x(1).includes(g.id)), e.microchipItemsSlot2 = ie.filter((g) => !x(2).includes(g.id)), e.microchipItemsSlot3 = ie.filter((g) => !x(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const D = A[g] ?? {}, O = (D.itemId ?? "").trim(), E = V.find((R) => R.id === O);
      return {
        slotKey: g,
        itemId: O,
        displayName: (E == null ? void 0 : E.name) || D.name || Ne,
        img: (E == null ? void 0 : E.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const D = `slot${g}`, O = A[D] ?? {}, E = (O.itemId ?? "").trim(), R = ie.find((X) => X.id === E);
      e[`microchip${g}ItemId`] = E, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || O.name || Ne, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = V.map((g) => {
      var fe, Oe, Ce, he;
      const D = g.id;
      let O = null;
      for (const be of k)
        if ((((fe = A[be]) == null ? void 0 : fe.itemId) ?? "").trim() === D) {
          O = be;
          break;
        }
      const E = !!O, R = ((Oe = g == null ? void 0 : g.system) == null ? void 0 : Oe.abilityType) ?? "", X = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", Q = R === "active", Fe = Number((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, re = (((he = g == null ? void 0 : g.system) == null ? void 0 : he.description) ?? "").trim(), De = re ? re.length > 60 ? re.slice(0, 57) + "…" : re : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: X,
        description: De,
        kp: Fe,
        isActive: Q,
        slotKey: O ?? "",
        equipped: E
      };
    });
    const M = (((pt = e.weaponsTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((yt = e.microchipsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.itemsTable) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !M;
    const U = this.actor.system.abilities ?? {}, Te = (((ht = this.actor.items) == null ? void 0 : ht.contents) ?? []).map((g) => {
      var D, O, E;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((D = g.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((O = g.system) == null ? void 0 : O.description) ?? "",
        kp: Number(((E = g.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), J = new Map(Te.map((g) => [g.id, g])), Ae = "— Nincs képesség —", me = (g) => {
      const D = U[g] ?? {}, O = (D.itemId ?? "").trim(), E = O ? J.get(O) : null, R = (E == null ? void 0 : E.description) ?? "", X = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: O,
        displayName: (E == null ? void 0 : E.name) || D.name || Ae,
        img: (E == null ? void 0 : E.img) || "",
        description: R,
        kp: X
      };
    };
    e.abilityFajiSlot = me("faji"), e.abilityHatterSlot = me("hatter");
    const ge = (g) => {
      const D = U[g];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, pe = (g) => g.map((D) => {
      const O = J.get(D);
      return O ? {
        id: O.id,
        name: O.name,
        img: O.img,
        description: O.description,
        kp: O.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = pe(ge("passive")), e.abilityActiveList = pe(ge("active"));
    const qe = Math.min(6, Math.max(0, Number(((kt = (bt = e.system) == null ? void 0 : bt.resources) == null ? void 0 : kt.kp) ?? 0) || 0));
    return e.kpDots = Array.from({ length: 6 }, (g, D) => ({ index: D + 1, used: D + 1 <= qe })), e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-Tpbx4LtD.mjs");
      n(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((p = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : p.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation(), await this._rollInitiative();
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const n = Math.min(6, Math.max(0, Number(((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v.kp) ?? 0) || 0)), p = o <= n ? o - 1 : o;
      await this.actor.update({ "system.resources.kp": p });
    }), !this.isEditable) return;
    const a = (i) => {
      var n;
      const c = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d });
    const r = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', r), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = ((h = (p = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : p.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const c = i.currentTarget, o = c.dataset.skill, n = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-Tpbx4LtD.mjs");
      p(this.actor, o, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, S, C, P, N, T, A;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), n = o == null ? void 0 : o.dataset.slot;
      if (!n) return;
      const h = (((S = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[n]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (C = this.actor.items).get) == null ? void 0 : P.call(C, h)) ?? ((T = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : T.call(N, (q) => q.id === h));
      (A = v == null ? void 0 : v.sheet) == null || A.render(!0);
    });
    const l = (i, c) => {
      var p;
      const o = i.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = n.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n) return;
      let p = Number(c.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await n.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, p = n.items.get(o);
      if (!p) return;
      const h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = n.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = w ? w.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], P = C.find((N) => {
          var T;
          return (((T = v[N]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = C.filter((T) => T !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await n.update(h), await n.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, N;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var A;
        return (((A = p[T]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let T = w.find((q) => {
          var L;
          return !((L = p[q]) != null && L.itemId);
        });
        const A = new Set(w);
        if (!T) {
          const q = v.find((L) => !A.has(L));
          if (!q) return;
          T = q, w.push(q);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: o,
          [`system.weapons.${T}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${T}.damage`]: ((P = n == null ? void 0 : n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((N = n == null ? void 0 : n.system) == null ? void 0 : N.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = n == null ? void 0 : n.dataset.slot;
      if (!p) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((T = c.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let C = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      w ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", n == null || n.insertBefore(C, S)), C.src = w, C.style.display = "") : C && C.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      h && (N[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, w;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const n = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = n[S]) == null ? void 0 : C.itemId) ?? "").trim() === c;
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
      c.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, o)), c.addEventListener("dragleave", (n) => {
        var p;
        return (p = n.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, o));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, o)), c.addEventListener("dragleave", (n) => {
        var p;
        return (p = n.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (n) => {
        var p;
        (p = n.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, o)), c.addEventListener("dragleave", (n) => {
        var p;
        return (p = n.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (n) => {
        var p;
        (p = n.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
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
      const n = this.actor.system.abilities ?? {}, h = (Array.isArray((v = n[c]) == null ? void 0 : v.items) ? n[c].items.slice() : []).filter((w) => w !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var p;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      (p = n == null ? void 0 : n.sheet) == null || p.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(o) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const p = (c.value ?? "").trim();
      await n.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var P, N;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var A;
        return (((A = p[T]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let T = w.find((q) => {
          var L;
          return !((L = p[q]) != null && L.itemId);
        });
        const A = new Set(w);
        if (!T) {
          const q = v.find((L) => !A.has(L));
          if (!q) return;
          T = q, w.push(q);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: o,
          [`system.weapons.${T}.name`]: n.name ?? "",
          [`system.weapons.${T}.damage`]: ((P = n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((N = n.system) == null ? void 0 : N.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, p = n.items.get(o), h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = n.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = w ? w.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], P = C.find((N) => {
          var T;
          return (((T = v[N]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = C.filter((T) => T !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await n.update(h), await n.deleteEmbeddedDocuments("Item", [o]);
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
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Targy") return;
      const p = (c.value ?? "").trim();
      await n.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, m = (i) => {
      var n, p, h, v;
      if (!i) return;
      const c = f._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const o = ((p = (n = c.system) == null ? void 0 : n.resources) == null ? void 0 : p.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(c).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, y = (i) => {
      var c, o, n;
      return i && (((o = (c = f.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, i)) || f.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const n = c.form;
      if (!y(n)) return;
      const p = i.relatedTarget;
      p && (n.contains(p) || f.id && ((h = p.closest) != null && h.call(p, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), m(n));
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
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((m = a[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, r, l, f, m, y, b, u, i, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            o = n;
            break;
          }
      }
      if (o) {
        const n = await fromUuid(o);
        if (n && n.documentName === "Item" && (n.type === "Kepesseg" || n.type === "ability")) {
          let p = n.id;
          if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const h = (((r = n.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": n.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": n.name
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
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            o = n;
            break;
          }
      }
      if (o) {
        const n = await fromUuid(o);
        if (n && n.documentName === "Item" && n.type === "Fegyver") {
          const p = this.actor, h = ((m = n.parent) == null ? void 0 : m.id) !== p.id;
          let v = n.id;
          if (h) {
            const w = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const w = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, S = (w.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = S ? S.split(/\s*,\s*/).filter((T) => C.includes(T)) : [], N = P.filter((T) => {
              var A;
              return (((A = w[T]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (N.length > 0) {
              const A = {
                "system.weapons.slotOrder": P.filter((q) => !N.includes(q)).join(",")
              };
              for (const q of N)
                A[`system.weapons.${q}.itemId`] = "", A[`system.weapons.${q}.name`] = "", A[`system.weapons.${q}.damage`] = "", A[`system.weapons.${q}.bonus`] = "";
              await p.update(A);
            }
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "Pancel") {
          const p = this.actor;
          if (((u = n.parent) == null ? void 0 : u.id) !== p.id) {
            const h = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "MikroChip") {
          const p = this.actor;
          ((i = n.parent) == null ? void 0 : i.id) !== p.id && await p.createEmbeddedDocuments("Item", [n.toObject()]);
          return;
        }
        if (n && n.documentName === "Item" && (n.type === "Targy" || n.type === "Egyeb")) {
          const p = this.actor;
          ((c = n.parent) == null ? void 0 : c.id) !== p.id && await p.createEmbeddedDocuments("Item", [n.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, r, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, f, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
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
    var a, d, r;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", a = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
    var r, l, f;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((l = a.parent) == null ? void 0 : l.id) !== this.actor.id) {
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
    const r = this.actor.system.abilities ?? {}, l = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, r, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, f, m, y, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
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
    let r = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(a) || 0;
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollInitiative() {
    var r;
    const s = Number(((r = this.actor.system.skills) == null ? void 0 : r.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(t);
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((C) => C.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((C) => C.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, m = ((w = r == null ? void 0 : r.system) == null ? void 0 : w.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && a[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(a[b] || 0) || 0, i = f + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(o);
    await n.evaluate({ async: !0 });
    const { resultType: p, label: h } = We(n), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, c, o, n, p;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((n = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : n.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
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
    form: foundry.utils.mergeObject(((Ct = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((qt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : qt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Pt = (Lt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Lt.window) == null ? void 0 : Pt.contentClasses) ?? [],
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
function cs(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var Nt, At, Et, Ft;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, r, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = a.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
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
    var G, te, Y, se, de, ve, we, Ie, Se, ye, V, ie, Ne;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((Y = (te = e.system) == null ? void 0 : te.identity) == null ? void 0 : Y.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((de = t == null ? void 0 : t.system) == null ? void 0 : de.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : r, i = r.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
      var M;
      const x = (((M = d[k]) == null ? void 0 : M.itemId) ?? "").trim();
      return x && m.some((U) => U.id === x);
    });
    e.weaponSlots = o.map((k) => {
      const x = d[k] ?? {}, M = (x.itemId ?? "").trim(), U = y.find((Te) => Te.id === M);
      return {
        slotKey: k,
        itemId: M,
        displayName: (U == null ? void 0 : U.name) || x.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ee;
      const x = k.id;
      let M = null, U = {};
      for (const Le of c)
        if ((((Ee = d[Le]) == null ? void 0 : Ee.itemId) ?? "").trim() === x) {
          M = Le, U = d[Le] ?? {};
          break;
        }
      const Te = !!M, J = (k == null ? void 0 : k.system) ?? {}, Ae = typeof J.range == "string" ? (J.range || "").trim() : "", me = J.type ?? "", ge = (n[me] ?? me) || "—", pe = J.size ?? "", qe = (p[pe] ?? pe) || "", _e = [ge, qe].filter(Boolean).join(", ") || ge || "—", Me = me === "projectile" || pe === "thrown", Re = J.quantity != null ? String(J.quantity).trim() : "1", Ke = String(J.bonus ?? U.bonus ?? "").trim() || "0", je = (J.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: M ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Ke,
        damage: je,
        rangeStr: Ae || "—",
        typeAndSize: _e,
        quantity: Re,
        isProjectile: Me,
        equipped: Te,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const h = a.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var U;
      const x = (k == null ? void 0 : k.system) ?? {}, M = ((U = k.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: cs((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const v = ((we = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : we.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], S = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = S.map((k) => {
      var me, ge, pe, qe;
      const x = k.id;
      let M = null;
      for (const _e of w)
        if ((((me = v[_e]) == null ? void 0 : me.itemId) ?? "").trim() === x) {
          M = _e;
          break;
        }
      const U = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", Te = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", J = (((pe = k == null ? void 0 : k.system) == null ? void 0 : pe.description) ?? "").trim(), Ae = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: Te,
        description: Ae,
        kp: Number((qe = k == null ? void 0 : k.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: M ?? "",
        equipped: !!M
      };
    });
    const C = a.filter((k) => k.type === "Targy");
    e.itemsTable = C.map((k) => {
      const x = (k == null ? void 0 : k.system) ?? {}, M = (x.description ?? "").trim(), U = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: U
      };
    });
    const P = a.filter((k) => k.type === "Egyeb");
    e.egyebList = P.map((k) => {
      const M = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), U = M ? M.length > 80 ? M.slice(0, 77) + "…" : M : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: U
      };
    });
    const N = (((Ie = e.weaponsTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((Se = e.armorTable) == null ? void 0 : Se.length) ?? 0) > 0 || (((ye = e.microchipsTable) == null ? void 0 : ye.length) ?? 0) > 0 || (((V = e.itemsTable) == null ? void 0 : V.length) ?? 0) > 0 || (((ie = e.egyebList) == null ? void 0 : ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !N;
    const T = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.abilities) ?? {}, A = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, M;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((M = k.system) == null ? void 0 : M.kp) ?? 0) || 0
      };
    }), q = new Map(A.map((k) => [k.id, k])), L = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = L, e.abilityHatterSlot = L;
    const H = (k) => {
      const x = T[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, z = (k) => (k || []).map((x) => {
      const M = q.get(x);
      return M ? { id: M.id, name: M.name, img: M.img, description: M.description, kp: M.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = z(H("passive")), e.abilityActiveList = z(H("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, b;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, n, p;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((p = (n = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, n, p;
      u.preventDefault();
      const i = (n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    });
    const a = (u) => {
      var o, n;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (n = c == null ? void 0 : c.sheet) == null || n.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var n, p, h, v;
      u.preventDefault();
      const i = (p = (n = u.currentTarget) == null ? void 0 : n.closest) == null ? void 0 : p.call(n, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var n;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = (((n = i == null ? void 0 : i.dataset) == null ? void 0 : n.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-Tpbx4LtD.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, n, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((n = i == null ? void 0 : i.dataset) != null && n.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((p = i == null ? void 0 : i.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: n } = await import("./roll-sheet-Tpbx4LtD.mjs");
      n(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, n;
      u.preventDefault();
      const i = (((n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, w, S, C, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (w = u.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : S.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, p = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((N) => N !== c);
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
      const o = this.actor, n = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      n && (p[`system.weapons.${n}.itemId`] = "", p[`system.weapons.${n}.name`] = "", p[`system.weapons.${n}.damage`] = "", p[`system.weapons.${n}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
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
      const c = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, n = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = c[S]) == null ? void 0 : C.itemId) ?? "").trim() === i;
      });
      n && await this.actor.update({
        [`system.gear.microchips.${n}.itemId`]: "",
        [`system.gear.microchips.${n}.name`]: "",
        [`system.gear.microchips.${n}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, n;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId) ?? "").trim();
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
      const n = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", n), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: n })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
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
      const n = u.relatedTarget;
      n && (o.contains(n) || r.id && ((p = n.closest) != null && p.call(n, `#${CSS.escape(r.id)}`))) || l(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, i, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, i, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, d;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
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
    var S, C, P, N, T;
    const e = this.actor;
    if (!e) return;
    const a = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((C = e.system) == null ? void 0 : C.skills) ?? {}, r = ((P = e.items) == null ? void 0 : P.filter((A) => A.type === "Fegyver")) ?? [];
    let l = null;
    a.itemId && (l = r.find((A) => A.id === a.itemId) ?? null);
    const f = l && l.name || a.name || "Fegyver", m = Number(a.bonus || 0) || 0, y = ((N = l == null ? void 0 : l.system) == null ? void 0 : N.type) || "kinetic", b = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, c = m + i, n = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, p = new Roll(n);
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
    var f, m, y, b, u, i, c, o, n, p;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((n = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : n.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, c, o, n, p, h, v, w, S, C, P, N, T, A;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const a = ((q) => {
      var H;
      if (!q) return null;
      const L = q.uuid ?? q.documentUuid ?? ((H = q.data) == null ? void 0 : H.uuid) ?? (typeof q == "string" ? q : null);
      if (L) return L;
      if (typeof q == "object") {
        for (const z of Object.values(q))
          if (typeof z == "string" && z.includes(".") && z.startsWith("Item.")) return z;
      }
      return null;
    })(e);
    if (!a) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let q = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const te = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        q = ((n = (await r.createEmbeddedDocuments("Item", [te]))[0]) == null ? void 0 : n.id) ?? q;
      }
      const L = (((p = d.system) == null ? void 0 : p.kind) ?? "passive").toString(), H = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, z = L === "active" ? "active" : "passive", G = Array.isArray((v = H[z]) == null ? void 0 : v.items) ? H[z].items.slice() : Array.isArray(H[z]) ? H[z].slice() : [];
      G.includes(q) || G.push(q), await r.update({ [`system.abilities.${z}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = d.parent) == null ? void 0 : w.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (S = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && m) {
      const q = ((C = r.system) == null ? void 0 : C.weapons) ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], H = (q.slotOrder ?? "").trim(), z = H ? H.split(/\s*,\s*/).filter((Y) => L.includes(Y)) : [];
      let G = L.find((Y) => {
        var se;
        return !(((se = q[Y]) == null ? void 0 : se.itemId) ?? "").trim();
      });
      G || (G = L.find((Y) => !z.includes(Y)) ?? "slot1");
      const te = z.includes(G) ? z : [...z, G].filter((Y) => L.includes(Y));
      await r.update({
        "system.weapons.slotOrder": te.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((P = d.system) == null ? void 0 : P.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((N = d.system) == null ? void 0 : N.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const q = ((A = (T = r.system) == null ? void 0 : T.gear) == null ? void 0 : A.microchips) ?? {}, H = ["slot1", "slot2", "slot3"].find((z) => {
        var G;
        return !(((G = q[z]) == null ? void 0 : G.itemId) ?? "").trim();
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
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
    let a, d = "";
    if (e.type === "MikroChip") {
      const c = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let d;
      if (a.type === "checkbox")
        d = a.checked;
      else if (a.type === "number") {
        if (a.value === "") continue;
        d = Number(a.value);
      } else if (a.name === "system.resources.kp" || a.name === "system.resources.kp2" || a.name === "system.resources.kp3") {
        const r = (a.value ?? "").trim();
        if (r === "") continue;
        d = Number(r) || 0;
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
    form: foundry.utils.mergeObject(((Nt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Nt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((At = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : At.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ft = (Et = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Et.window) == null ? void 0 : Ft.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = ee;
const ls = [
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
var $t;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = ls, e;
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
  form: foundry.utils.mergeObject((($t = j(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ne;
var xt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
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
  form: foundry.utils.mergeObject(((xt = j(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ae;
var Mt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
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
  form: foundry.utils.mergeObject(((Mt = j(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = oe;
var Rt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
    }, e._votvInput = (r) => {
      var m;
      const l = r.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
W(ce, "PARTS", foundry.utils.mergeObject(j(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), W(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Rt = j(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Rt.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = ce;
var Kt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
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
W(le, "PARTS", foundry.utils.mergeObject(j(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), W(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Kt = j(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Kt.form) ?? {}, { submitOnChange: !1 })
}));
let et = le;
var jt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
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
      d(l) && a(l);
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
  form: foundry.utils.mergeObject(((jt = j(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : jt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ue;
const Ut = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function zt(_) {
  return _ === "Nagy" ? 2 : _ === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, a, d, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Zt, CONFIG.Actor.dataModels.Npc = Ht, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = St, CONFIG.Item.dataModels.weapon = St, CONFIG.Item.dataModels.Pancel = ts, CONFIG.Item.dataModels.MikroChip = ss, CONFIG.Item.dataModels.Kepesseg = Dt, CONFIG.Item.dataModels.ability = Dt, CONFIG.Item.dataModels.Targy = rs, CONFIG.Item.dataModels.Egyeb = as, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
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
  Hooks.on("updateActor", (l, f, m, y) => {
    var w, S, C, P, N, T, A, q;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    if (l.type === "Npc" && ((w = f == null ? void 0 : f.system) != null && w.identity) && "size" in f.system.identity) {
      const L = zt((C = (S = l.system) == null ? void 0 : S.identity) == null ? void 0 : C.size);
      l.update({
        "prototypeToken.width": L,
        "prototypeToken.height": L
      }).catch((H) => console.warn("Vacuum of the Void | NPC token size update failed for", l.name, H));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (P = game.actors) == null ? void 0 : P.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const L of n)
      ((N = L.document) == null ? void 0 : N.id) !== b || ((T = L.document) == null ? void 0 : T.documentName) !== "Actor" || ((A = L.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || c.includes(L) || c.push(L);
    if (i && c.some((L) => {
      const H = (L == null ? void 0 : L.form) ?? (L == null ? void 0 : L.element);
      return H && H.contains(u);
    })) return;
    const h = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < _ ? h.appId : null;
    setTimeout(() => {
      for (const L of c)
        !(L != null && L.rendered) || typeof L.render != "function" || L.id !== v && L.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, y) => {
    var c, o, n;
    const b = l == null ? void 0 : l.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || l.type !== "Fegyver") return;
    const u = ((c = b.system) == null ? void 0 : c.weapons) ?? {}, i = {};
    for (const [p, h] of Object.entries(u)) {
      if (!p.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (i[`system.weapons.${p}.name`] = l.name ?? "", i[`system.weapons.${p}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${p}.bonus`] = ((n = l.system) == null ? void 0 : n.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var _, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, w, S, C, P, N, T, A, q, L, H, z, G, te, Y, se, de, ve, we, Ie, Se;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const d = (v = game.messages) == null ? void 0 : v.get(a), r = (S = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const l = r.actorId ?? ((C = d == null ? void 0 : d.speaker) == null ? void 0 : C.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((P = game.actors) == null ? void 0 : P.get(r.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(l));
    if (f || (f = ((A = (T = game.scenes) == null ? void 0 : T.contents) == null ? void 0 : A.flatMap((V) => {
      var ie;
      return ((ie = V.tokens) == null ? void 0 : ie.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === l || V.id === r.actorId))) ?? null), !f) return;
    const m = r.itemId ? ((L = (q = f.items) == null ? void 0 : q.get) == null ? void 0 : L.call(q, r.itemId)) ?? ((G = (z = (H = f.items) == null ? void 0 : H.contents) == null ? void 0 : z.find) == null ? void 0 : G.call(z, (ye) => ye.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((te = m == null ? void 0 : m.system) == null ? void 0 : te.damage) ?? "").trim()), !y && r.slotKey && (y = (((((Y = f.system) == null ? void 0 : Y.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (we = (se = ui.notifications) == null ? void 0 : se.warn) == null || we.call(se, ((ve = (de = game.i18n) == null ? void 0 : de.localize) == null ? void 0 : ve.call(de, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", c = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((Se = (((Ie = f.system) == null ? void 0 : Ie.weapons) ?? {})[r.slotKey]) == null ? void 0 : Se.name) ?? "" : "")) || "Fegyver";
    let n = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    c && (n += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: n,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, l, f, m, y, b;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
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
        background: { src: Ut },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await a.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(a);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (_, s, e) => {
  var r, l, f, m;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, a = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (l = game.actors) == null ? void 0 : l.get(a) : null;
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
      const y = zt((m = (f = d.system) == null ? void 0 : f.identity) == null ? void 0 : m.size);
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
    const r = s[0] ?? s;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (_, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || _.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ut,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (_, s, e) => {
  var m, y, b, u;
  const t = ((m = _.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!a && !d && !r) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (a && f.classList.add(`votv-${a}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, n = document.createElement("div");
        n.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, n.textContent = d, o.appendChild(n);
      }
    }
    if (r && l && (l.actorId || (b = _.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const n = document.createElement("div");
        n.className = "votv-weapon-outcome";
        const p = !!l.isHit, h = l.targetName || "Célpont";
        n.textContent = p ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(n);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((u = _.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(_.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-Bvj922rU.mjs.map
