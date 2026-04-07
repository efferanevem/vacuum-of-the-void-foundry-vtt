var Ut = Object.defineProperty;
var zt = Object.getPrototypeOf;
var Bt = Reflect.get;
var Gt = (_, s, e) => s in _ ? Ut(_, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[s] = e;
var W = (_, s, e) => Gt(_, typeof s != "symbol" ? s + "" : s, e);
var K = (_, s, e) => Bt(zt(_), e, s);
const { HTMLField: Wt, NumberField: F, SchemaField: j, StringField: I, BooleanField: Z, ArrayField: He } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
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
      resources: new j({
        health: new j({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Z({ required: !1, initial: !1 }),
            box2: new Z({ required: !1, initial: !1 }),
            box3: new Z({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new j({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new j({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new j({
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
      combat: new j({
        defense: new F({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new F({ required: !1, integer: !1, initial: 0 }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new j({
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
      weapons: new j({
        slotOrder: new I({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new Z({ required: !1, initial: !1 })
          })
        }),
        equipment: new I({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new j({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new j({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new Wt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Be, SchemaField: Yt } = foundry.data.fields;
class Jt extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Yt({
        body: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Qt, NumberField: ls, StringField: ke } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Qt({ required: !1, initial: !1 }),
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
const { BooleanField: Xt, StringField: Ue } = foundry.data.fields;
class Zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Xt({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: wt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new wt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new wt({
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
const { NumberField: es, StringField: It } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new It({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new It({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new es({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Tt } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Tt({ required: !1, blank: !0, initial: "" }),
      quantity: new Tt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ss } = foundry.data.fields;
class is extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ss({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(_) {
  if (!_ || !Array.isArray(_.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
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
      const a = typeof o.faces == "number" ? o.faces : void 0, f = Array.isArray(o.results) ? o.results : null;
      if (!a || !f || a === 8 || a !== 6) continue;
      const h = !n && l >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : l >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && h.push(w);
      }
    }
  };
  d(_.terms, 1);
  const r = s.filter((u) => u === 6).length, c = s.filter((u) => u === 1).length, p = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = r + p, b = c + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function rs(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var _t, Dt, Ot, Ct;
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
    var n, d, r, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
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
    let c = { scrollState: {}, focus: null };
    if (d) {
      c.scrollState = this._saveScrollState(d);
      const a = document.activeElement, f = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      f && h && (c.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, y = this.form ?? this.element, b = c.scrollState, u = c.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", l = () => {
      var a, f;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (i || u) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
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
        var c;
        return r.type === "Pancel" && ((c = r.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const c = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var c;
        return r.type === "Pancel" && ((c = r.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const c = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, l, o, a, f, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (l = n.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : o.value) ?? 0, r = ((a = n.currentHealth) == null ? void 0 : a.legs) ?? 0, c = B._healthStatusFromRatio(r, d), p = Number(((v = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    c === 0 ? m = 0 : c === 1 ? m = -6 : c === 2 ? m = -3 : m = p;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var r, c, p, m;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (p = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : p.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const p = Number(r == null ? void 0 : r.value) || 0, m = Number(c == null ? void 0 : c.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(p + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, a, f, h, v;
    const e = s ?? this.form ?? this.element, t = (w) => {
      var S;
      return ((S = e == null ? void 0 : e.querySelector) == null ? void 0 : S.call(e, w)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${w}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), c = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    const p = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, m = ((h = (f = p.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, y = ((v = p.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (B._healthStatusFromRatio(y, m) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(c == null ? void 0 : c.value) || 0, l = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + i + l);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, c, p, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var c, p, m, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((c = s == null ? void 0 : s.system) == null ? void 0 : c.resources) ?? {}, d = ((m = (p = n.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : m.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var _e, De, Me, Re, je, Ke, Ee, Le, st, it, rt, nt, at, ot, lt, ct, ut, dt, mt, pt, ft, yt, gt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Me = (De = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : De.stress) == null ? void 0 : Me.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of c) {
      const O = ((Re = d[g]) == null ? void 0 : Re.value) ?? 0, D = r[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(D, O);
    }
    const p = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = p || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((Ke = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Ke.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const l = this._getTotalArmorSpeedPenalty();
    i += l, e.effectiveGivenSpeed = i;
    const a = (Number(((Le = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Le.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: a } },
      { inplace: !1 }
    );
    const f = ((st = e.system) == null ? void 0 : st.combat) ?? {};
    e.totalDefense = (Number(f.defense) || 0) + (Number(f.defenseBonus) || 0) + (Number(f.givenProtection) || 0);
    const h = Number(f.givenSpeed), v = (Number(f.speed) || 0) + (Number(f.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const w = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(w)) {
      const D = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const S = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (S.slotOrder ?? "").trim(), N = P ? P.split(/\s*,\s*/).filter((g) => C.includes(g)) : [], T = (it = this.actor.system.gear) == null ? void 0 : it.microchips, A = T && typeof T == "object" && !Array.isArray(T) ? T : {}, q = (((rt = A.slot1) == null ? void 0 : rt.itemId) ?? "").trim(), L = (((nt = A.slot2) == null ? void 0 : nt.itemId) ?? "").trim(), H = (((at = A.slot3) == null ? void 0 : at.itemId) ?? "").trim(), G = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const D = typeof g.sort == "number" ? g.sort : 0, E = typeof O.sort == "number" ? O.sort : 0;
      return D - E;
    }).map((g) => {
      var fe, Ce, qe, he, be, $e;
      const O = g.type === "Fegyver", D = g.type === "MikroChip";
      let E = 0, R = "", X = null;
      for (let Pe = 0; Pe < N.length; Pe++) {
        const xe = N[Pe];
        if ((((fe = S[xe]) == null ? void 0 : fe.itemId) ?? "") === g.id) {
          E = Pe + 1, R = ((Ce = S[xe]) == null ? void 0 : Ce.bonus) ?? "", X = xe;
          break;
        }
      }
      let Q = null;
      D && (q === g.id ? Q = "slot1" : L === g.id ? Q = "slot2" : H === g.id && (Q = "slot3"));
      const Fe = O && ((qe = g.system) != null && qe.damage) ? g.system.damage : "", re = O && typeof ((he = g.system) == null ? void 0 : he.range) == "string" ? (g.system.range || "").trim() : "", Oe = X ? Number((be = S[X]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: E,
        slotBonus: R,
        slotKey: X,
        microchipSlotKey: Q,
        isEquipped: !!(X || Q),
        damage: Fe,
        rangeStr: re,
        slotBonusNum: Oe,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const te = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((g) => g.type === "Fegyver"), Y = te.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = Y;
    const se = "— Nincs fegyver —", de = N.filter((g) => {
      const D = ((S[g] ?? {}).itemId ?? "").trim();
      return D ? !!te.find((R) => R.id === D) : !1;
    });
    e.weaponSlots = de.map((g, O) => {
      const D = S[g] ?? {}, E = (D.itemId ?? "").trim(), R = Y.find((X) => X.id === E);
      return {
        slotKey: g,
        itemId: E,
        slotNum: O + 1,
        displayName: (R == null ? void 0 : R.name) || D.name || se,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ve = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, we = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = te.map((g) => {
      var ht, bt, kt;
      const O = g.id;
      let D = null, E = {};
      for (const ze of N)
        if ((((ht = S[ze]) == null ? void 0 : ht.itemId) ?? "").trim() === O) {
          D = ze, E = S[ze] ?? {};
          break;
        }
      const R = !!D, X = ((bt = g.system) == null ? void 0 : bt.equipped) !== void 0 && ((kt = g.system) == null ? void 0 : kt.equipped) !== null ? !!g.system.equipped : R, Q = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Q.range == "string" ? (Q.range || "").trim() : "", re = Q.type ?? "", Oe = (ve[re] ?? re) || "—", fe = Q.size ?? "", Ce = (we[fe] ?? fe) || "", qe = [Oe, Ce].filter(Boolean).join(", ") || Oe || "—", he = re === "projectile" || fe === "thrown", be = Q.quantity, $e = be != null ? String(be).trim() : "1", Pe = String(E.bonus ?? "").trim(), xe = String(Q.bonus ?? "").trim(), Ht = Pe || xe || "0";
      return {
        slotKey: D ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? se,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Ht,
        damage: E.damage ?? Q.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: Oe,
        typeAndSize: qe,
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
      const O = (g == null ? void 0 : g.system) ?? {}, D = ((E = g.system) == null ? void 0 : E.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: rs((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const Se = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Se.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, D = (O.description ?? "").trim(), E = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", R = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: E
      };
    });
    const ye = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), E = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: E
      };
    });
    const V = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "MikroChip"), ie = V.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ne = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], x = (g) => {
      var D, E, R;
      const O = [];
      return g !== 1 && O.push((((D = A.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && O.push((((E = A.slot2) == null ? void 0 : E.itemId) ?? "").trim()), g !== 3 && O.push((((R = A.slot3) == null ? void 0 : R.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((g) => !x(1).includes(g.id)), e.microchipItemsSlot2 = ie.filter((g) => !x(2).includes(g.id)), e.microchipItemsSlot3 = ie.filter((g) => !x(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const O = A[g] ?? {}, D = (O.itemId ?? "").trim(), E = V.find((R) => R.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (E == null ? void 0 : E.name) || O.name || Ne,
        img: (E == null ? void 0 : E.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, D = A[O] ?? {}, E = (D.itemId ?? "").trim(), R = ie.find((X) => X.id === E);
      e[`microchip${g}ItemId`] = E, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || D.name || Ne, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = V.map((g) => {
      var fe, Ce, qe, he;
      const O = g.id;
      let D = null;
      for (const be of k)
        if ((((fe = A[be]) == null ? void 0 : fe.itemId) ?? "").trim() === O) {
          D = be;
          break;
        }
      const E = !!D, R = ((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.abilityType) ?? "", X = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", Q = R === "active", Fe = Number((qe = g == null ? void 0 : g.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, re = (((he = g == null ? void 0 : g.system) == null ? void 0 : he.description) ?? "").trim(), Oe = re ? re.length > 60 ? re.slice(0, 57) + "…" : re : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: X,
        description: Oe,
        kp: Fe,
        isActive: Q,
        slotKey: D ?? "",
        equipped: E
      };
    });
    const M = (((mt = e.weaponsTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.armorTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.microchipsTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !M;
    const U = this.actor.system.abilities ?? {}, Te = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).map((g) => {
      var O, D, E;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((E = g.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), J = new Map(Te.map((g) => [g.id, g])), Ae = "— Nincs képesség —", me = (g) => {
      const O = U[g] ?? {}, D = (O.itemId ?? "").trim(), E = D ? J.get(D) : null, R = (E == null ? void 0 : E.description) ?? "", X = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: D,
        displayName: (E == null ? void 0 : E.name) || O.name || Ae,
        img: (E == null ? void 0 : E.img) || "",
        description: R,
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
    return e.abilityPassiveList = pe(ge("passive")), e.abilityActiveList = pe(ge("active")), e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-dHcjHz0w.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, f, h;
      i.preventDefault(), i.stopPropagation();
      const l = i.currentTarget;
      let o = (l.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (l.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = l.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation(), await this._rollInitiative();
    }), !this.isEditable) return;
    const n = (i) => {
      var a;
      const l = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const o = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", o > 10);
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
      const l = ((h = (f = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const l = i.currentTarget, o = l.dataset.skill, a = ((h = l.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-dHcjHz0w.mjs");
      f(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, S, C, P, N, T, A;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((S = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[a]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (C = this.actor.items).get) == null ? void 0 : P.call(C, h)) ?? ((T = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : T.call(N, (q) => q.id === h));
      (A = v == null ? void 0 : v.sheet) == null || A.render(!0);
    });
    const c = (i, l) => {
      var f;
      const o = i.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = a.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const l = i.currentTarget, o = l.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      let f = Number(l.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await a.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, f = a.items.get(o);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = w ? w.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], P = C.find((N) => {
          var T;
          return (((T = v[N]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = C.filter((T) => T !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, N;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var A;
        return (((A = f[T]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let T = w.find((q) => {
          var L;
          return !((L = f[q]) != null && L.itemId);
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
          [`system.weapons.${T}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${T}.damage`]: ((P = a == null ? void 0 : a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const l = i.currentTarget;
      if (l.disabled) return;
      const o = l.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const l = i.currentTarget, o = l.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = a == null ? void 0 : a.dataset.slot;
      if (!f) return;
      const h = (l.dataset.itemId ?? "").trim(), v = (l.dataset.itemName ?? ((T = l.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (l.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let C = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      w ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", a == null || a.insertBefore(C, S)), C.src = w, C.style.display = "") : C && C.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      h && (N[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, w;
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "MikroChip") return;
      const a = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = a[S]) == null ? void 0 : C.itemId) ?? "").trim() === l;
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
      l.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), l.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((i, l) => {
      const o = l.dataset.slot;
      o && (l.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), l.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, l) => {
      const o = l.dataset.area;
      o && (l.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), l.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
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
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[l]) == null ? void 0 : v.items) ? a[l].items.slice() : []).filter((w) => w !== o);
      await this.actor.update({ [`system.abilities.${l}.items`]: h });
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
    }), t.find(".karakter-weapon-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = (l.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var P, N;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = h ? h.split(/\s*,\s*/).filter((T) => v.includes(T)) : [], S = w.find((T) => {
        var A;
        return (((A = f[T]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let T = w.find((q) => {
          var L;
          return !((L = f[q]) != null && L.itemId);
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
          [`system.weapons.${T}.name`]: a.name ?? "",
          [`system.weapons.${T}.damage`]: ((P = a.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((N = a.system) == null ? void 0 : N.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const T = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
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
        const v = a.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = w ? w.split(/\s*,\s*/).filter((N) => S.includes(N)) : [], P = C.find((N) => {
          var T;
          return (((T = v[N]) == null ? void 0 : T.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = C.filter((T) => T !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
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
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Targy") return;
      const f = (l.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const p = this, m = (i) => {
      var a, f, h, v;
      if (!i) return;
      const l = p._getFormDataForUpdate(i);
      if (Object.keys(l).length === 0) return;
      const o = ((f = (a = l.system) == null ? void 0 : a.resources) == null ? void 0 : f.currentHealth) != null || ((v = (h = l.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      p.actor.update(l).then(() => {
        o && setTimeout(() => p.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, y = (i) => {
      var l, o, a;
      return i && (((o = (l = p.element) == null ? void 0 : l.contains) == null ? void 0 : o.call(l, i)) || p.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(p.id)}`)));
    };
    p._votvBlur = (i) => {
      var h;
      const l = i.target;
      if (!l || !l.form) return;
      const o = l.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = l.form;
      if (!y(a)) return;
      const f = i.relatedTarget;
      f && (a.contains(f) || p.id && ((h = f.closest) != null && h.call(f, `#${CSS.escape(p.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: p.id, at: Date.now() }), m(a));
    }, document.body.addEventListener("blur", p._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var c, p, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((m = n[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, r, c, p, m, y, b, u, i, l;
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
            const C = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? f;
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
          const w = h === "active" ? "active" : "passive", S = Array.isArray((c = v[w]) == null ? void 0 : c.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          S.includes(f) || S.push(f), await this.actor.update({ [`system.abilities.${w}.items`]: S });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
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
          const f = this.actor, h = ((m = a.parent) == null ? void 0 : m.id) !== f.id;
          let v = a.id;
          if (h) {
            const w = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await f.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const w = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, S = (w.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = S ? S.split(/\s*,\s*/).filter((T) => C.includes(T)) : [], N = P.filter((T) => {
              var A;
              return (((A = w[T]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (N.length > 0) {
              const A = {
                "system.weapons.slotOrder": P.filter((q) => !N.includes(q)).join(",")
              };
              for (const q of N)
                A[`system.weapons.${q}.itemId`] = "", A[`system.weapons.${q}.name`] = "", A[`system.weapons.${q}.damage`] = "", A[`system.weapons.${q}.bonus`] = "";
              await f.update(A);
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
          ((l = a.parent) == null ? void 0 : l.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, r, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var c, p, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (c = s.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
      const i = typeof b.sort == "number" ? b.sort : 0, l = typeof u.sort == "number" ? u.sort : 0;
      return i - l;
    }).map((b) => b.id), r = d.indexOf(t), c = d.indexOf(e);
    if (r === -1 || c === -1) return;
    d.splice(r, 1), d.splice(c, 0, t);
    const p = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
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
    var p, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${c}
      ${p}
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
    var r, c, p;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((c = n.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((p = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : p.id) ?? d;
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
    var p, m, y, b;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, c = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    c.includes(d) || c.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, r, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var c, p, m, y, b;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    const p = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(p);
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((C) => C.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((C) => C.id === t.itemId) ?? null);
    const c = r && r.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, m = ((w = r == null ? void 0 : r.system) == null ? void 0 : w.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, i = p + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: f, label: h } = We(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, m, y, b, u, i, l, o, a, f;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (p = t.items).get) == null ? void 0 : m.call(p, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
};
W(B, "PARTS", foundry.utils.mergeObject(
  K(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), W(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((_t = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Dt = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ct = (Ot = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.window) == null ? void 0 : Ct.contentClasses) ?? [],
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
function ns(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var qt, Lt, Pt, Nt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, r, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, l = n.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      l && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const r = await super.render(s, e), c = this.element, p = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, l;
      if (this._applyScrollState(c, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = p.querySelector) == null ? void 0 : i.call(p, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (l = p.querySelector) == null ? void 0 : l.call(p, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(c, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(s) {
    var G, te, Y, se, de, ve, we, Ie, Se, ye, V, ie, Ne;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((Y = (te = e.system) == null ? void 0 : te.identity) == null ? void 0 : Y.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((se = t == null ? void 0 : t.items) == null ? void 0 : se.contents) ?? [], d = ((de = t == null ? void 0 : t.system) == null ? void 0 : de.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], c = (d.slotOrder ?? "").trim(), p = c ? c.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = n.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = p.length > 0 ? p : r, i = r.filter((k) => !u.includes(k)), l = [...u, ...i], o = l.filter((k) => {
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
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ee;
      const x = k.id;
      let M = null, U = {};
      for (const Le of l)
        if ((((Ee = d[Le]) == null ? void 0 : Ee.itemId) ?? "").trim() === x) {
          M = Le, U = d[Le] ?? {};
          break;
        }
      const Te = !!M, J = (k == null ? void 0 : k.system) ?? {}, Ae = typeof J.range == "string" ? (J.range || "").trim() : "", me = J.type ?? "", ge = (a[me] ?? me) || "—", pe = J.size ?? "", _e = (f[pe] ?? pe) || "", De = [ge, _e].filter(Boolean).join(", ") || ge || "—", Me = me === "projectile" || pe === "thrown", Re = J.quantity != null ? String(J.quantity).trim() : "1", je = String(J.bonus ?? U.bonus ?? "").trim() || "0", Ke = (J.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: M ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Ae || "—",
        typeAndSize: De,
        quantity: Re,
        isProjectile: Me,
        equipped: Te,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const h = n.filter((k) => k.type === "Pancel");
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
        level: ns((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const v = ((we = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : we.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], S = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = S.map((k) => {
      var me, ge, pe, _e;
      const x = k.id;
      let M = null;
      for (const De of w)
        if ((((me = v[De]) == null ? void 0 : me.itemId) ?? "").trim() === x) {
          M = De;
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
        kp: Number((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: M ?? "",
        equipped: !!M
      };
    });
    const C = n.filter((k) => k.type === "Targy");
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
    const P = n.filter((k) => k.type === "Egyeb");
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
    const T = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.abilities) ?? {}, A = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
      const l = this.actor.items.get(i);
      (f = l == null ? void 0 : l.sheet) == null || f.render(!0);
    });
    const n = (u) => {
      var o, a;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (a = l == null ? void 0 : l.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var a, f, h, v;
      u.preventDefault();
      const i = (f = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : f.call(a, ".karakter-weapon-slot"), l = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var a;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, l = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!l || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-dHcjHz0w.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let l = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !l && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (l = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!l || !this.actor) && await this._rollWeaponDamage(l, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var f, h;
      u.preventDefault();
      const i = u.currentTarget, l = (((f = i == null ? void 0 : i.dataset) == null ? void 0 : f.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || l;
      if (!l || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-dHcjHz0w.mjs");
      a(this.actor, l, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var l, o;
      u.preventDefault();
      const i = (o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, a;
      u.preventDefault();
      const i = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      l && (l.type === "Kepesseg" || l.type === "ability" ? await this._postAbilityToChat(i) : (l.type === "MikroChip" || l.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, w, S, C, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, l = (S = (w = u.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : S.itemId;
      if (!i || !l || !this.actor) return;
      const o = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, f = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((N) => N !== l);
      await this.actor.update({ [`system.abilities.${i}.items`]: f }), typeof this.render == "function" && this.render(!0);
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
      const o = this.actor, a = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      a && (f[`system.weapons.${a}.itemId`] = "", f[`system.weapons.${a}.name`] = "", f[`system.weapons.${a}.damage`] = "", f[`system.weapons.${a}.bonus`] = ""), Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [l]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var l, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var f, h, v, w;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = l[S]) == null ? void 0 : C.itemId) ?? "").trim() === i;
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
      const l = this.actor.items.get(i);
      !l || l.type !== "Targy" && l.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var f, h, v;
      const i = u.currentTarget, l = (h = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      const a = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", a), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const r = this, c = (u) => {
      if (!u) return;
      const i = r._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && r.actor.update(i).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, p = (u) => {
      var i, l, o;
      return u && (((l = (i = r.element) == null ? void 0 : i.contains) == null ? void 0 : l.call(i, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var f;
      const i = u.target;
      if (!i || !i.form) return;
      const l = i.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = i.form;
      if (!p(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || r.id && ((f = a.closest) != null && f.call(a, `#${CSS.escape(r.id)}`))) || c(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, i, l) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, i, l) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((c) => console.warn("VoidNpcSheet save on preClose failed", c));
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
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((C = e.system) == null ? void 0 : C.skills) ?? {}, r = ((P = e.items) == null ? void 0 : P.filter((A) => A.type === "Fegyver")) ?? [];
    let c = null;
    n.itemId && (c = r.find((A) => A.id === n.itemId) ?? null);
    const p = c && c.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, y = ((N = c == null ? void 0 : c.system) == null ? void 0 : N.type) || "kinetic", b = (((T = c == null ? void 0 : c.system) == null ? void 0 : T.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, l = m + i, a = `3d6${l !== 0 ? l > 0 ? `+${l}` : `${l}` : ""}`, f = new Roll(a);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = We(f), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, m, y, b, u, i, l, o, a, f;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (p = t.items).get) == null ? void 0 : m.call(p, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, l, o, a, f, h, v, w, S, C, P, N, T, A;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const n = ((q) => {
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
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    if (d.type === "Pancel") {
      (l = (i = ui.notifications) == null ? void 0 : i.info) == null || l.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let q = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const te = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        q = ((a = (await r.createEmbeddedDocuments("Item", [te]))[0]) == null ? void 0 : a.id) ?? q;
      }
      const L = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), H = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, z = L === "active" ? "active" : "passive", G = Array.isArray((v = H[z]) == null ? void 0 : v.items) ? H[z].items.slice() : Array.isArray(H[z]) ? H[z].slice() : [];
      G.includes(q) || G.push(q), await r.update({ [`system.abilities.${z}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = d.parent) == null ? void 0 : w.id) === r.id) return;
    const c = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (S = (await r.createEmbeddedDocuments("Item", [c]))[0]) == null ? void 0 : S.id;
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
    var y, b, u, i, l, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${c}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var p, m, y, b, u, i;
    const e = (m = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const l = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (l === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", l === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
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
  K(ee, ee, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), W(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(ee, ee, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((qt = K(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Lt = K(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Lt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Nt = (Pt = K(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Pt.window) == null ? void 0 : Nt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = ee;
const as = [
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
var At;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = as, e;
  }
};
W(ne, "PARTS", foundry.utils.mergeObject(K(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), W(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((At = K(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : At.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ne;
var Et;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
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
W(ae, "PARTS", foundry.utils.mergeObject(K(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), W(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Et = K(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Et.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ae;
var Ft;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
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
W(oe, "PARTS", foundry.utils.mergeObject(K(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), W(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ft = K(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ft.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = oe;
var $t;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
    }, e._votvInput = (r) => {
      var m;
      const c = r.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const p = (c == null ? void 0 : c.form) ?? ((m = c == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      d(p) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(p), 300));
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
W(le, "PARTS", foundry.utils.mergeObject(K(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), W(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject((($t = K(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = le;
var xt;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
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
W(ce, "PARTS", foundry.utils.mergeObject(K(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), W(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((xt = K(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 })
}));
let et = ce;
var Mt;
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
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
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
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && n(c);
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
W(ue, "PARTS", foundry.utils.mergeObject(K(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), W(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Mt = K(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ue;
const jt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Kt(_) {
  return _ === "Nagy" ? 2 : _ === "Óriási" ? 3 : 1;
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Jt, CONFIG.Actor.dataModels.Npc = Rt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vt, CONFIG.Item.dataModels.weapon = vt, CONFIG.Item.dataModels.Pancel = Zt, CONFIG.Item.dataModels.MikroChip = Vt, CONFIG.Item.dataModels.Kepesseg = St, CONFIG.Item.dataModels.ability = St, CONFIG.Item.dataModels.Targy = ts, CONFIG.Item.dataModels.Egyeb = is, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const _ = 500;
  Hooks.on("updateActor", (c, p, m, y) => {
    var w, S, C, P, N, T, A, q;
    const b = c == null ? void 0 : c.id;
    if (!b) return;
    if (c.type === "Npc" && ((w = p == null ? void 0 : p.system) != null && w.identity) && "size" in p.system.identity) {
      const L = Kt((C = (S = c.system) == null ? void 0 : S.identity) == null ? void 0 : C.size);
      c.update({
        "prototypeToken.width": L,
        "prototypeToken.height": L
      }).catch((H) => console.warn("Vacuum of the Void | NPC token size update failed for", c.name, H));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), l = [], o = (P = game.actors) == null ? void 0 : P.get(b);
    o != null && o.apps && l.push(...Array.from(o.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const L of a)
      ((N = L.document) == null ? void 0 : N.id) !== b || ((T = L.document) == null ? void 0 : T.documentName) !== "Actor" || ((A = L.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(L) || l.push(L);
    if (i && l.some((L) => {
      const H = (L == null ? void 0 : L.form) ?? (L == null ? void 0 : L.element);
      return H && H.contains(u);
    })) return;
    const h = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < _ ? h.appId : null;
    setTimeout(() => {
      for (const L of l)
        !(L != null && L.rendered) || typeof L.render != "function" || L.id !== v && L.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (c, p, m, y) => {
    var l, o, a;
    const b = c == null ? void 0 : c.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || c.type !== "Fegyver") return;
    const u = ((l = b.system) == null ? void 0 : l.weapons) ?? {}, i = {};
    for (const [f, h] of Object.entries(u)) {
      if (!f.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== c.id || (i[`system.weapons.${f}.name`] = c.name ?? "", i[`system.weapons.${f}.damage`] = ((o = c.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${f}.bonus`] = ((a = c.system) == null ? void 0 : a.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var _, s;
  document.body.addEventListener("click", async (e) => {
    var f, h, v, w, S, C, P, N, T, A, q, L, H, z, G, te, Y, se, de, ve, we, Ie, Se;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (S = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const c = r.actorId ?? ((C = d == null ? void 0 : d.speaker) == null ? void 0 : C.actor) ?? "";
    if (!c) return;
    e.preventDefault(), e.stopPropagation();
    let p = ((P = game.actors) == null ? void 0 : P.get(r.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(c));
    if (p || (p = ((A = (T = game.scenes) == null ? void 0 : T.contents) == null ? void 0 : A.flatMap((V) => {
      var ie;
      return ((ie = V.tokens) == null ? void 0 : ie.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === c || V.id === r.actorId))) ?? null), !p) return;
    const m = r.itemId ? ((L = (q = p.items) == null ? void 0 : q.get) == null ? void 0 : L.call(q, r.itemId)) ?? ((G = (z = (H = p.items) == null ? void 0 : H.contents) == null ? void 0 : z.find) == null ? void 0 : G.call(z, (ye) => ye.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((te = m == null ? void 0 : m.system) == null ? void 0 : te.damage) ?? "").trim()), !y && r.slotKey && (y = (((((Y = p.system) == null ? void 0 : Y.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (we = (se = ui.notifications) == null ? void 0 : se.warn) == null || we.call(se, ((ve = (de = game.i18n) == null ? void 0 : de.localize) == null ? void 0 : ve.call(de, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", l = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((Se = (((Ie = p.system) == null ? void 0 : Ie.weapons) ?? {})[r.slotKey]) == null ? void 0 : Se.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    l && (a += ` (${l})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: p }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, c, p, m, y, b;
      if (!((c = (r = e.target) == null ? void 0 : r.closest) != null && c.call(r, "#actors"))) return;
      const t = (m = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : m.call(p, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (_ = game.user) != null && _.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: jt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, c, p, m, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, l = ((c = i == null ? void 0 : i.bar1) == null ? void 0 : c.attribute) ?? "", o = ((p = i == null ? void 0 : i.bar2) == null ? void 0 : p.attribute) ?? "";
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((l) => {
        var o;
        return ((o = l.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const l of i)
        try {
          await l.update(n);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", l.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (_, s, e) => {
  var r, c, p, m;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, n = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (c = game.actors) == null ? void 0 : c.get(n) : null;
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
      const y = Kt((m = (p = d.system) == null ? void 0 : p.identity) == null ? void 0 : m.size);
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
  const t = _ == null ? void 0 : _.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const r = s[0] ?? s;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (_, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || _.updateSource({
    width: 3840,
    height: 2160,
    "background.src": jt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (_, s, e) => {
  var m, y, b, u;
  const t = ((m = _.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, c = t.weapon;
  if (!n && !d && !r) return;
  const p = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (p) {
    if (n && p.classList.add(`votv-${n}`), d) {
      const i = p.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const l = p.querySelector(".dice-total"), o = (l == null ? void 0 : l.parentElement) ?? p, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (r && c && (c.actorId || (b = _.speaker) != null && b.actor)) {
      const i = p.querySelector(".dice-total"), l = (i == null ? void 0 : i.parentElement) ?? p;
      if (!p.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const f = !!c.isHit, h = c.targetName || "Célpont";
        a.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, l.appendChild(a);
      }
      if (c.isHit && !p.querySelector(".votv-weapon-damage-chat")) {
        const f = document.createElement("button");
        f.type = "button", f.className = "votv-weapon-damage-chat";
        const h = c.hitLocationRoll, v = c.hitLocationName;
        f.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", f.dataset.actorId = String(c.actorId ?? ((u = _.speaker) == null ? void 0 : u.actor) ?? ""), f.dataset.itemId = String(c.itemId ?? ""), f.dataset.slotKey = String(c.slotKey ?? ""), f.dataset.targetName = String(c.targetName ?? ""), f.dataset.hitLocationName = String(c.hitLocationName ?? ""), f.dataset.messageId = String(_.id ?? ""), l.appendChild(f);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-v32QzUZZ.mjs.map
