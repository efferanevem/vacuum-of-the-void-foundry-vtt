var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Et = Reflect.get;
var Ft = (A, i, e) => i in A ? Pt(A, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[i] = e;
var z = (A, i, e) => Ft(A, typeof i != "symbol" ? i + "" : i, e);
var R = (A, i, e) => Et(At(A), e, i);
const { HTMLField: Nt, NumberField: O, SchemaField: j, StringField: w, BooleanField: J, ArrayField: He } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
        name: new w({ required: !1, blank: !0, initial: "" }),
        player: new w({ required: !1, blank: !0, initial: "" }),
        level: new O({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new w({ required: !1, blank: !0, initial: "" }),
        assignment: new w({ required: !1, blank: !0, initial: "" }),
        subAssignment: new w({ required: !1, blank: !0, initial: "" }),
        background: new w({ required: !1, blank: !0, initial: "" }),
        languages: new w({ required: !1, blank: !0, initial: "" })
      }),
      resources: new j({
        health: new j({
          value: new O({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new O({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new j({
          head: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new O({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new j({
          head: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new O({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new j({
          value: new O({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new O({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new O({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new j({
        defense: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new O({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new j({
        deception: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header extra mezők – ha három külön értéket akarsz tárolni
        quickThinking2: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking3: new O({ required: !1, integer: !0, min: 0, initial: 0 }),
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
      weapons: new j({
        slotOrder: new w({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          })
        }),
        equipment: new w({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new j({
            name: new w({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new w({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new w({ required: !1, blank: !0, initial: "" }),
            level: new w({ required: !1, blank: !0, initial: "" }),
            other: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new j({
            name: new w({ required: !1, blank: !0, initial: "" }),
            quantity: new O({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new He(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new He(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new Nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Mt, NumberField: Jt, StringField: ve } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Mt({ required: !1, initial: !1 }),
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
      quantity: new ve({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Kt, StringField: Ue } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ue({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: ut } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ut({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ut({
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
const { NumberField: Bt, StringField: dt } = foundry.data.fields;
class mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new dt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new dt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Bt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: pt } = foundry.data.fields;
class zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new pt({ required: !1, blank: !0, initial: "" }),
      quantity: new pt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Gt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Gt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function ft(A) {
  if (!A || !Array.isArray(A.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let a = !1;
  const d = (s, r = 1) => {
    if (!Array.isArray(s)) return;
    let o = r;
    for (const n of s) {
      if (!n) continue;
      if (Array.isArray(n.terms)) {
        d(n.terms, o);
        continue;
      }
      if (typeof n.operator == "string") {
        o = n.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof n.faces == "number" ? n.faces : void 0, y = Array.isArray(n.results) ? n.results : null;
      if (!l || !y || l === 8 || l !== 6) continue;
      const b = !a && o >= 0 && (n.number === 3 || n.number === "3") ? (a = !0, i) : o >= 0 ? e : t;
      for (const v of y) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  d(A.terms, 1);
  const c = i.filter((s) => s === 6).length, u = i.filter((s) => s === 1).length, g = e.filter((s) => s === 6).length, m = t.filter((s) => s === 6).length, f = c + g, h = u + m;
  return f > 0 && f === h ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
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
  _getScrollContainers(i) {
    var a, d, c, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((c = i.querySelector) == null ? void 0 : c.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, y = c.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      y && b && (u.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const g = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, f = this.form ?? this.element, h = u.scrollState, s = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", o = () => {
      var l, y;
      if (this._applyScrollState(m, h), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const b = ((l = f.querySelector) == null ? void 0 : l.call(f, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(s.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = s.selectionStart ?? 0, b.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || s) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), c = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const i = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of i) {
      const u = String(((d = c.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, d;
    const i = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of i) {
      const u = String(((d = c.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, s, r, o, n, l, y, b, v;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((r = (s = this.actor) == null ? void 0 : s.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (o = a.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : n.value) ?? 0, c = ((l = a.currentHealth) == null ? void 0 : l.legs) ?? 0, u = H._healthStatusFromRatio(c, d), g = Number(((v = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = g;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var c, u, g, m;
    const e = i ?? this.form ?? this.element;
    let t = (c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var c, u, g, m;
    const e = H.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, a = ((g = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return H._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var u, g, m, f;
    const t = H.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((u = i == null ? void 0 : i.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (g = a.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, c = ((f = a.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return H._healthStatusFromRatio(c, d);
  }
  async _prepareContext(i) {
    var Se, ae, ue, oe, ye, ge, je, Me, Re, Ke, qe, Te, tt, it, st, rt, nt, at;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ue = (ae = (Se = this.actor.system) == null ? void 0 : Se.resources) == null ? void 0 : ae.stress) == null ? void 0 : ue.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, c = a.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const D = ((oe = d[p]) == null ? void 0 : oe.value) ?? 0, T = c[p] ?? 0;
      e.computedHealthStatus[p] = H._healthStatusFromRatio(T, D);
    }
    const g = (Number(c.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((p) => (Number(c[p]) || 0) === 0).length;
    e.showDeathSkull = g || f >= 2;
    const h = e.computedHealthStatus.legs ?? 3, s = Number(((ge = (ye = this.actor.system) == null ? void 0 : ye.combat) == null ? void 0 : ge.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = s;
    const o = this._getTotalArmorSpeedPenalty();
    r += o, e.effectiveGivenSpeed = r;
    const l = (Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: l } },
      { inplace: !1 }
    );
    const y = H.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, D] of Object.entries(y)) {
      const T = e.computedHealthStatus[D];
      e.skillHealthStatus[p] = T, e.skillDisabled[p] = T === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), L = I ? I.split(/\s*,\s*/).filter((p) => v.includes(p)) : [], P = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, C = P && typeof P == "object" && !Array.isArray(P) ? P : {}, _ = (((Ke = C.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), S = (((qe = C.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), E = (((Te = C.slot3) == null ? void 0 : Te.itemId) ?? "").trim(), U = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, D) => {
      const T = typeof p.sort == "number" ? p.sort : 0, q = typeof D.sort == "number" ? D.sort : 0;
      return T - q;
    }).map((p) => {
      var ce, be, ke, de, me, Pe;
      const D = p.type === "Fegyver", T = p.type === "MikroChip";
      let q = 0, x = "", Y = null;
      for (let _e = 0; _e < L.length; _e++) {
        const Ae = L[_e];
        if ((((ce = b[Ae]) == null ? void 0 : ce.itemId) ?? "") === p.id) {
          q = _e + 1, x = ((be = b[Ae]) == null ? void 0 : be.bonus) ?? "", Y = Ae;
          break;
        }
      }
      let W = null;
      T && (_ === p.id ? W = "slot1" : S === p.id ? W = "slot2" : E === p.id && (W = "slot3"));
      const Le = D && ((ke = p.system) != null && ke.damage) ? p.system.damage : "", Z = D && typeof ((de = p.system) == null ? void 0 : de.range) == "string" ? (p.system.range || "").trim() : "", he = Y ? Number((me = b[Y]) == null ? void 0 : me.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: D,
        slotAssignment: q,
        slotBonus: x,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Le,
        rangeStr: Z,
        slotBonusNum: he,
        quantity: Number(((Pe = p.system) == null ? void 0 : Pe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = U;
    const B = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), ne = B.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", pe = L.filter((p) => {
      const T = ((b[p] ?? {}).itemId ?? "").trim();
      return T ? !!B.find((x) => x.id === T) : !1;
    });
    e.weaponSlots = pe.map((p, D) => {
      const T = b[p] ?? {}, q = (T.itemId ?? "").trim(), x = ne.find((Y) => Y.id === q);
      return {
        slotKey: p,
        itemId: q,
        slotNum: D + 1,
        displayName: (x == null ? void 0 : x.name) || T.name || Q,
        img: (x == null ? void 0 : x.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Ee = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Fe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = B.map((p) => {
      var ot, ct, lt;
      const D = p.id;
      let T = null, q = {};
      for (const Be of L)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === D) {
          T = Be, q = b[Be] ?? {};
          break;
        }
      const x = !!T, Y = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : x, W = (p == null ? void 0 : p.system) ?? {}, Le = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", he = (Ee[Z] ?? Z) || "—", ce = W.size ?? "", be = (Fe[ce] ?? ce) || "", ke = [he, be].filter(Boolean).join(", ") || he || "—", de = Z === "projectile" || ce === "thrown", me = W.quantity, Pe = me != null ? String(me).trim() : "1", _e = String(q.bonus ?? "").trim(), Ae = String(W.bonus ?? "").trim(), Lt = _e || Ae || "0";
      return {
        slotKey: T ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? Q,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: q.damage ?? W.damage ?? "",
        rangeStr: Le || "—",
        typeLabel: he,
        typeAndSize: ke,
        quantity: Pe,
        quantityDisplay: de ? Pe : "—",
        isProjectile: de,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const Ne = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = Ne.map((p) => {
      var q, x;
      const D = (p == null ? void 0 : p.system) ?? {}, T = ((q = p.system) == null ? void 0 : q.equipped) !== void 0 && ((x = p.system) == null ? void 0 : x.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: (D.level ?? "").toString().trim() || "—",
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const $e = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = $e.map((p) => {
      const D = (p == null ? void 0 : p.system) ?? {}, T = (D.description ?? "").trim(), q = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", x = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: x,
        description: q
      };
    });
    const xe = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = xe.map((p) => {
      const T = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), q = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: q
      };
    });
    const we = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), fe = we.map((p) => ({ id: p.id, name: p.name, img: p.img })), De = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], Ie = (p) => {
      var T, q, x;
      const D = [];
      return p !== 1 && D.push((((T = C.slot1) == null ? void 0 : T.itemId) ?? "").trim()), p !== 2 && D.push((((q = C.slot2) == null ? void 0 : q.itemId) ?? "").trim()), p !== 3 && D.push((((x = C.slot3) == null ? void 0 : x.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = fe.filter((p) => !Ie(1).includes(p.id)), e.microchipItemsSlot2 = fe.filter((p) => !Ie(2).includes(p.id)), e.microchipItemsSlot3 = fe.filter((p) => !Ie(3).includes(p.id)), e.microchipSlots = Oe.map((p) => {
      const D = C[p] ?? {}, T = (D.itemId ?? "").trim(), q = we.find((x) => x.id === T);
      return {
        slotKey: p,
        itemId: T,
        displayName: (q == null ? void 0 : q.name) || D.name || De,
        img: (q == null ? void 0 : q.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const D = `slot${p}`, T = C[D] ?? {}, q = (T.itemId ?? "").trim(), x = fe.find((Y) => Y.id === q);
      e[`microchip${p}ItemId`] = q, e[`microchip${p}DisplayName`] = (x == null ? void 0 : x.name) || T.name || De, e[`microchip${p}Img`] = (x == null ? void 0 : x.img) || "";
    }), e.microchipsTable = we.map((p) => {
      var ce, be, ke, de;
      const D = p.id;
      let T = null;
      for (const me of Oe)
        if ((((ce = C[me]) == null ? void 0 : ce.itemId) ?? "").trim() === D) {
          T = me;
          break;
        }
      const q = !!T, x = ((be = p == null ? void 0 : p.system) == null ? void 0 : be.abilityType) ?? "", Y = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—", W = x === "active", Le = Number((ke = p == null ? void 0 : p.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, Z = (((de = p == null ? void 0 : p.system) == null ? void 0 : de.description) ?? "").trim(), he = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: Y,
        description: he,
        kp: Le,
        isActive: W,
        slotKey: T ?? "",
        equipped: q
      };
    });
    const Ce = this.actor.system.abilities ?? {}, k = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var D, T, q;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((D = p.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((T = p.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((q = p.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), F = new Map(k.map((p) => [p.id, p])), N = "— Nincs képesség —", K = (p) => {
      const D = Ce[p] ?? {}, T = (D.itemId ?? "").trim(), q = T ? F.get(T) : null, x = (q == null ? void 0 : q.description) ?? "", Y = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: T,
        displayName: (q == null ? void 0 : q.name) || D.name || N,
        img: (q == null ? void 0 : q.img) || "",
        description: x,
        kp: Y
      };
    };
    e.abilityFajiSlot = K("faji"), e.abilityHatterSlot = K("hatter");
    const le = (p) => {
      const D = Ce[p];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, G = (p) => p.map((D) => {
      const T = F.get(D);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = G(le("passive")), e.abilityActiveList = G(le("active")), e;
  }
  _attachFrameListeners(i) {
    var f, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((f = i == null ? void 0 : i.querySelector) == null ? void 0 : f.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const o = (s.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-cA9HPyjO.mjs");
      n(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var n, l, y;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        o = (((((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((y = r.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (s) => {
      var n;
      const r = s ? s.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var n, l, y;
      s.preventDefault(), s.stopPropagation();
      const r = ((y = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var y;
      s.preventDefault();
      const r = s.currentTarget, o = r.dataset.skill, n = ((y = r.textContent) == null ? void 0 : y.trim()) || o, { openRollSheetForSkill: l } = await import("./roll-sheet-cA9HPyjO.mjs");
      l(this.actor, o, n);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var v, I, L, P, C, _, S;
      s.preventDefault();
      const o = s.currentTarget.closest(".karakter-weapon-slot"), n = o == null ? void 0 : o.dataset.slot;
      if (!n) return;
      const y = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!y) return;
      const b = ((P = (L = this.actor.items).get) == null ? void 0 : P.call(L, y)) ?? ((_ = (C = this.actor.items.contents) == null ? void 0 : C.find) == null ? void 0 : _.call(C, (E) => E.id === y));
      (S = b == null ? void 0 : b.sheet) == null || S.render(!0);
    });
    const c = (s, r) => {
      var l;
      const o = s.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (n) {
        if (s.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const y = s.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (l = n.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const r = s.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await n.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, l = n.items.get(o), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = v ? v.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], P = L.find((C) => {
          var _;
          return (((_ = b[C]) == null ? void 0 : _.itemId) ?? "").trim() === o;
        });
        if (P) {
          const C = L.filter((_) => _ !== P);
          y["system.weapons.slotOrder"] = C.join(","), y[`system.weapons.${P}.itemId`] = "", y[`system.weapons.${P}.name`] = "", y[`system.weapons.${P}.damage`] = "", y[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(y).length && await n.update(y), await n.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var P, C;
      const r = s.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((_) => b.includes(_)) : [], I = v.find((_) => {
        var S;
        return (((S = l[_]) == null ? void 0 : S.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let _ = v.find((E) => {
          var M;
          return !((M = l[E]) != null && M.itemId);
        });
        const S = new Set(v);
        if (!_) {
          const E = b.find((M) => !S.has(M));
          if (!E) return;
          _ = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${_}.itemId`]: o,
          [`system.weapons.${_}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${_}.damage`]: ((P = n == null ? void 0 : n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${_}.bonus`]: ((C = n == null ? void 0 : n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const _ = v.filter((S) => S !== I);
        await this.actor.update({
          "system.weapons.slotOrder": _.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const r = s.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var _;
      s.preventDefault();
      const r = s.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), l = n == null ? void 0 : n.dataset.slot;
      if (!l) return;
      const y = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((_ = r.textContent) == null ? void 0 : _.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), I = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let L = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      v ? (L || (L = document.createElement("img"), L.className = "karakter-microchip-slot-thumb", L.alt = "", n == null || n.insertBefore(L, I)), L.src = v, L.style.display = "") : L && L.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = y ? this.actor.items.get(y) : null, C = {
        [`system.gear.microchips.${l}.itemId`]: y,
        [`system.gear.microchips.${l}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      y && (C[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(C);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var b, v;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((I) => {
        var L;
        return (((L = n[I]) == null ? void 0 : L.itemId) ?? "").trim() === r;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const r = s.currentTarget.dataset.slot;
      if (!r) return;
      const o = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, o)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, o));
    }), t.find(".karakter-ability-slot-single").each((s, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, o)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, o)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var b;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.area, o = s.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const n = this.actor.system.abilities ?? {}, y = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: y });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var l;
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      (l = n == null ? void 0 : n.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(o) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const r = s.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const r = s.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var P, C;
      const r = s.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((_) => b.includes(_)) : [], I = v.find((_) => {
        var S;
        return (((S = l[_]) == null ? void 0 : S.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let _ = v.find((E) => {
          var M;
          return !((M = l[E]) != null && M.itemId);
        });
        const S = new Set(v);
        if (!_) {
          const E = b.find((M) => !S.has(M));
          if (!E) return;
          _ = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${_}.itemId`]: o,
          [`system.weapons.${_}.name`]: n.name ?? "",
          [`system.weapons.${_}.damage`]: ((P = n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${_}.bonus`]: ((C = n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const _ = v.filter((S) => S !== I);
        await this.actor.update({
          "system.weapons.slotOrder": _.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, l = n.items.get(o), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = v ? v.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], P = L.find((C) => {
          var _;
          return (((_ = b[C]) == null ? void 0 : _.itemId) ?? "").trim() === o;
        });
        if (P) {
          const C = L.filter((_) => _ !== P);
          y["system.weapons.slotOrder"] = C.join(","), y[`system.weapons.${P}.itemId`] = "", y[`system.weapons.${P}.name`] = "", y[`system.weapons.${P}.damage`] = "", y[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(y).length && await n.update(y), await n.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const r = s.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, g = (s) => {
      var n, l, y, b;
      if (!s) return;
      const r = u._getFormDataForUpdate(s);
      if (Object.keys(r).length === 0) return;
      const o = ((l = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : l.currentHealth) != null || ((b = (y = r.system) == null ? void 0 : y.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        o && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (s) => {
      var r, o, n;
      return s && (((o = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, s)) || u.id && ((n = s.closest) == null ? void 0 : n.call(s, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (s) => {
      var y;
      const r = s.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const l = s.relatedTarget;
      l && (n.contains(l) || u.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), g(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, g, m;
    const e = {};
    for (const f of i.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      f.type === "checkbox" ? h = f.checked : f.type === "number" ? h = f.value === "" ? 0 : Number(f.value) : h = f.value ?? "", foundry.utils.setProperty(e, f.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((g = foundry.utils.expandObject(e).system) == null ? void 0 : g.resources) ?? {}
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const f of c) {
      const h = ((m = a[f]) == null ? void 0 : m.value) ?? 0, s = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, H._healthStatusFromRatio(s, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, a, d, c, u, g, m, f, h, s, r, o;
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let y = l.id;
          if (((a = l.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const P = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [P]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const b = (((c = l.system) == null ? void 0 : c.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", L = Array.isArray((u = v[I]) == null ? void 0 : u.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          L.includes(y) || L.push(y), await this.actor.update({ [`system.abilities.${I}.items`]: L });
          return;
        }
      }
    }
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((g = e.data) == null ? void 0 : g.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const y = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== y.id;
          let v = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((f = (await y.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (b) {
            const I = ((h = y.system) == null ? void 0 : h.weapons) ?? {}, L = (I.slotOrder ?? "").trim(), P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = L ? L.split(/\s*,\s*/).filter((S) => P.includes(S)) : [], _ = C.filter((S) => {
              var E;
              return (((E = I[S]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (_.length > 0) {
              const E = {
                "system.weapons.slotOrder": C.filter((M) => !_.includes(M)).join(",")
              };
              for (const M of _)
                E[`system.weapons.${M}.itemId`] = "", E[`system.weapons.${M}.name`] = "", E[`system.weapons.${M}.damage`] = "", E[`system.weapons.${M}.bonus`] = "";
              await y.update(E);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const y = this.actor;
          if (((s = l.parent) == null ? void 0 : s.id) !== y.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const y = this.actor;
          ((r = l.parent) == null ? void 0 : r.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const y = this.actor;
          ((o = l.parent) == null ? void 0 : o.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, c, u;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = i.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var u, g, m, f, h, s;
    i.preventDefault(), i.stopPropagation(), (u = i.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const c = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((s = d.system) == null ? void 0 : s.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (a = i.currentTarget) == null || a.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var m, f;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((h, s) => {
      const r = typeof h.sort == "number" ? h.sort : 0, o = typeof s.sort == "number" ? s.sort : 0;
      return r - o;
    }).map((h) => h.id), c = d.indexOf(t), u = d.indexOf(e);
    if (c === -1 || u === -1) return;
    d.splice(c, 1), d.splice(u, 0, t);
    const g = d.map((h, s) => ({
      _id: h,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(i) {
    var a, d, c;
    const e = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    const a = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, a)}px`;
  }
  async _postItemToChat(i) {
    var g, m, f;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const s = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        s > 0 && (d = `<p><strong>KP:</strong> ${s}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var f, h, s;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", a = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var a, d;
    const e = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var a;
    this._parseAbilityDrop(i) && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var c, u, g;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((u = a.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var a;
    this._parseAbilityDrop(i) && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var g, m, f, h;
    i.preventDefault(), (g = i.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [s]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((h = c[e]) == null ? void 0 : h.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, c, u;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = i.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, g, m, f, h;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "MikroChip") return;
    let c = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (c = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const a = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(a) || 0;
    const c = this._getSkillHealthStatus(i);
    c === 1 ? d -= 6 : c === 2 && (d -= 3);
    const g = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(g);
    await m.evaluate({ async: !0 });
    const { resultType: f, label: h } = ft(m), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: s
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
    const a = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(i) {
    var v;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let c = null;
    t.itemId && (c = d.find((I) => I.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${i})`, g = Number(t.bonus || 0) || 0, f = (((v = c == null ? void 0 : c.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(a[f] || 0) || 0, s = g + h, o = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(o);
    await n.evaluate({ async: !0 });
    const { resultType: l, label: y } = ft(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: y } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var g, m, f, h, s, r, o, n, l, y;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (g = t.items).get) == null ? void 0 : m.call(g, i)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === i));
    if (!a || a.type !== "Fegyver") return;
    let d = (((s = a.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
z(H, "PARTS", foundry.utils.mergeObject(
  R(H, H, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(H, H, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = R(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = R(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = R(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
z(H, "BODY_PART_BY_SKILL", {
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
let We = H;
var kt, vt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var a, d, c, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((c = i.querySelector) == null ? void 0 : c.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    const t = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, o = a.contains(r), n = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      o && n && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const c = await super.render(i, e), u = this.element, g = this.form ?? this.element, m = d.scrollState, f = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", s = () => {
      var r, o;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const n = ((r = g.querySelector) == null ? void 0 : r.call(g, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = g.querySelector) == null ? void 0 : o.call(g, `[name="${CSS.escape(f.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = f.selectionStart ?? 0, n.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || f) && (requestAnimationFrame(s), setTimeout(s, 0), setTimeout(s, 50), setTimeout(s, 150), setTimeout(s, 300), setTimeout(s, 450)), c;
  }
  async _prepareContext(i) {
    var Q, pe, Ee, Fe, Ne, $e, xe, we, fe, De, Oe, Ie, Ce;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Q = this.actor) == null ? void 0 : Q.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ee = (pe = e.system) == null ? void 0 : pe.identity) == null ? void 0 : Ee.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((Fe = t == null ? void 0 : t.items) == null ? void 0 : Fe.contents) ?? [], d = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.weapons) ?? {}, c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), g = u ? u.split(/\s*,\s*/).filter((k) => c.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), f = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", s = g.length > 0 ? g : c, r = c.filter((k) => !s.includes(k)), o = [...s, ...r], n = o.filter((k) => {
      var N;
      const F = (((N = d[k]) == null ? void 0 : N.itemId) ?? "").trim();
      return F && m.some((K) => K.id === F);
    });
    e.weaponSlots = n.map((k) => {
      const F = d[k] ?? {}, N = (F.itemId ?? "").trim(), K = f.find((le) => le.id === N);
      return {
        slotKey: k,
        itemId: N,
        displayName: (K == null ? void 0 : K.name) || F.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, y = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var qe;
      const F = k.id;
      let N = null, K = {};
      for (const Te of o)
        if ((((qe = d[Te]) == null ? void 0 : qe.itemId) ?? "").trim() === F) {
          N = Te, K = d[Te] ?? {};
          break;
        }
      const le = !!N, G = (k == null ? void 0 : k.system) ?? {}, Se = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", ue = (l[ae] ?? ae) || "—", oe = G.size ?? "", ye = (y[oe] ?? oe) || "", ge = [ue, ye].filter(Boolean).join(", ") || ue || "—", je = ae === "projectile" || oe === "thrown", Me = G.quantity != null ? String(G.quantity).trim() : "1", Re = String(G.bonus ?? K.bonus ?? "").trim() || "0", Ke = (G.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: N ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Re,
        damage: Ke,
        rangeStr: Se || "—",
        typeAndSize: ge,
        quantity: Me,
        isProjectile: je,
        equipped: le,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const b = a.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const F = (k == null ? void 0 : k.system) ?? {}, N = ((K = k.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: (F.level ?? "").toString().trim() || "—",
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const v = ((xe = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : xe.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], L = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = L.map((k) => {
      var ae, ue, oe, ye;
      const F = k.id;
      let N = null;
      for (const ge of I)
        if ((((ae = v[ge]) == null ? void 0 : ae.itemId) ?? "").trim() === F) {
          N = ge;
          break;
        }
      const K = ((ue = k == null ? void 0 : k.system) == null ? void 0 : ue.abilityType) ?? "", le = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", G = (((oe = k == null ? void 0 : k.system) == null ? void 0 : oe.description) ?? "").trim(), Se = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: le,
        description: Se,
        kp: Number((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: N ?? "",
        equipped: !!N
      };
    });
    const P = a.filter((k) => k.type === "Targy");
    e.itemsTable = P.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, N = (F.description ?? "").trim(), K = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: K
      };
    });
    const C = a.filter((k) => k.type === "Egyeb");
    e.egyebList = C.map((k) => {
      const N = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const _ = (((we = e.weaponsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((fe = e.armorTable) == null ? void 0 : fe.length) ?? 0) > 0 || (((De = e.microchipsTable) == null ? void 0 : De.length) ?? 0) > 0 || (((Oe = e.itemsTable) == null ? void 0 : Oe.length) ?? 0) > 0 || (((Ie = e.egyebList) == null ? void 0 : Ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !_;
    const S = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, E = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, N;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((N = k.system) == null ? void 0 : N.kp) ?? 0) || 0
      };
    }), M = new Map(E.map((k) => [k.id, k])), U = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = U, e.abilityHatterSlot = U;
    const B = (k) => {
      const F = S[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, ne = (k) => (k || []).map((F) => {
      const N = M.get(F);
      return N ? { id: N.id, name: N.name, img: N.img, description: N.description, kp: N.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ne(B("passive")), e.abilityActiveList = ne(B("active")), e;
  }
  _attachFrameListeners(i) {
    var m, f, h;
    super._attachFrameListeners(i);
    const e = ((m = i == null ? void 0 : i.querySelector) == null ? void 0 : m.call(i, "form.votv.npc-sheet")) ?? i ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (s) => {
      var n, l, y;
      if (s.preventDefault(), s.stopPropagation(), !this.actor) return;
      const r = ((y = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (s) => {
      var n, l, y;
      s.preventDefault();
      const r = (l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (y = o == null ? void 0 : o.sheet) == null || y.render(!0);
    });
    const a = (s) => {
      var n, l;
      const r = (n = s == null ? void 0 : s.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (l = o == null ? void 0 : o.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), a(s.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), a(s.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (s) => {
      var l, y, b, v;
      s.preventDefault();
      const r = (y = (l = s.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : y.call(l, ".karakter-weapon-slot"), o = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const n = this.actor.items.get(o);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (s) => {
      var l;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget, o = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-cA9HPyjO.mjs");
      n(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var n, l, y, b, v;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget;
      let o = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !o && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (o = (((((b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var y, b;
      s.preventDefault();
      const r = s.currentTarget, o = (((y = r == null ? void 0 : r.dataset) == null ? void 0 : y.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-cA9HPyjO.mjs");
      l(this.actor, o, n);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      var o, n;
      s.preventDefault();
      const r = (n = (o = s.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      var n, l;
      s.preventDefault();
      const r = (((l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(r) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var b, v, I, L, P, C;
      if (s.preventDefault(), !s.altKey) return;
      const r = (v = (b = s.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, o = (L = (I = s.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : L.itemId;
      if (!r || !o || !this.actor) return;
      const n = ((P = this.actor.system) == null ? void 0 : P.abilities) ?? {}, y = (Array.isArray((C = n[r]) == null ? void 0 : C.items) ? n[r].items.slice() : []).filter((_) => _ !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      var o, n;
      if (s.preventDefault(), !s.altKey) return;
      const r = (n = (o = s.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      var b, v;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget, o = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const n = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), y = {};
      l && (y[`system.weapons.${l}.itemId`] = "", y[`system.weapons.${l}.name`] = "", y[`system.weapons.${l}.damage`] = "", y[`system.weapons.${l}.bonus`] = ""), Object.keys(y).length && await n.update(y), await n.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      var o, n;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((n = (o = s.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var y, b, v, I;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((b = (y = s.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((L) => {
        var P;
        return (((P = o[L]) == null ? void 0 : P.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      var n, l;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || h.forEach((s) => {
      var r;
      (((r = s.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (s.draggable = !0);
    }), t.on("dragstart", d, (s) => {
      var y, b, v;
      const r = s.currentTarget, o = (b = (y = r == null ? void 0 : r.dataset) == null ? void 0 : y.itemId) == null ? void 0 : b.trim();
      if (!o || !this.actor) return;
      const n = this.actor.items.get(o);
      if (!n) return;
      const l = n.uuid;
      s.dataTransfer && (s.dataTransfer.setData("text/plain", l), s.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), s.dataTransfer.effectAllowed = "copyMove"), typeof ((v = s.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && s.dataTransfer.setDragImage(r, 0, 0);
    });
    const c = this, u = (s) => {
      if (!s) return;
      const r = c._getFormDataForUpdate(s);
      Object.keys(r).length !== 0 && c.actor.update(r).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, g = (s) => {
      var r, o, n;
      return s && (((o = (r = c.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, s)) || c.id && ((n = s.closest) == null ? void 0 : n.call(s, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (s) => {
      var y;
      const r = s.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const n = r.form;
      if (!g(n)) return;
      const l = s.relatedTarget;
      l && (n.contains(l) || c.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(c.id)}`))) || u(n);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (s, r, o) => {
      var n;
      c.actor && ((n = s == null ? void 0 : s.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (s, r, o) => {
      var n;
      c.actor && ((n = s == null ? void 0 : s.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(i) {
    var t, a, d;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, i);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(i, e = "") {
    var g, m, f, h, s, r, o, n, l, y;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (g = t.items).get) == null ? void 0 : m.call(g, i)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === i));
    if (!a || a.type !== "Fegyver") return;
    let d = (((s = a.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(i, e) {
    var f, h, s, r, o, n, l, y, b, v, I, L, P, C, _;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, i, e);
    const a = ((S) => {
      var M;
      if (!S) return null;
      const E = S.uuid ?? S.documentUuid ?? ((M = S.data) == null ? void 0 : M.uuid) ?? (typeof S == "string" ? S : null);
      if (E) return E;
      if (typeof S == "object") {
        for (const U of Object.values(S))
          if (typeof U == "string" && U.includes(".") && U.startsWith("Item.")) return U;
      }
      return null;
    })(e);
    if (!a) return (h = super._onDropItem) == null ? void 0 : h.call(this, i, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (s = super._onDropItem) == null ? void 0 : s.call(this, i, e);
    const c = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let S = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== c.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        S = ((o = (await c.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : o.id) ?? S;
      }
      const E = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), M = ((l = c.system) == null ? void 0 : l.abilities) ?? {}, U = E === "active" ? "active" : "passive", B = Array.isArray((y = M[U]) == null ? void 0 : y.items) ? M[U].items.slice() : Array.isArray(M[U]) ? M[U].slice() : [];
      B.includes(S) || B.push(S), await c.update({ [`system.abilities.${U}.items`]: B }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === c.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await c.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const S = ((I = c.system) == null ? void 0 : I.weapons) ?? {}, E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (S.slotOrder ?? "").trim(), U = M ? M.split(/\s*,\s*/).filter((Q) => E.includes(Q)) : [];
      let B = E.find((Q) => {
        var pe;
        return !(((pe = S[Q]) == null ? void 0 : pe.itemId) ?? "").trim();
      });
      B || (B = E.find((Q) => !U.includes(Q)) ?? "slot1");
      const ne = U.includes(B) ? U : [...U, B].filter((Q) => E.includes(Q));
      await c.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${B}.itemId`]: m,
        [`system.weapons.${B}.name`]: d.name ?? "",
        [`system.weapons.${B}.damage`]: ((L = d.system) == null ? void 0 : L.damage) ?? "",
        [`system.weapons.${B}.bonus`]: ((P = d.system) == null ? void 0 : P.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const S = ((_ = (C = c.system) == null ? void 0 : C.gear) == null ? void 0 : _.microchips) ?? {}, M = ["slot1", "slot2", "slot3"].find((U) => {
        var B;
        return !(((B = S[U]) == null ? void 0 : B.itemId) ?? "").trim();
      });
      M && await c.update({
        [`system.gear.microchips.${M}.itemId`]: m,
        [`system.gear.microchips.${M}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(i) {
    var f, h, s, r, o, n;
    const e = (h = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : h.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", a = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((n = this.actor) == null ? void 0 : n.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(i) {
    var g, m, f, h, s, r;
    const e = (m = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : m.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const o = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (a = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const n = Number(((s = e.system) == null ? void 0 : s.replaceCost) ?? 0) || 0;
        n > 0 && (d = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const a of i.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let d;
      if (a.type === "checkbox") d = a.checked;
      else if (a.type === "number") d = a.value === "" ? 0 : Number(a.value);
      else if (a.name === "system.skills.quickThinking" || a.name === "system.resources.kp") {
        const c = (a.value ?? "").trim();
        d = c === "" ? 0 : Number(c) || 0;
      } else d = a.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, a.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(X, "PARTS", foundry.utils.mergeObject(
  R(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = X;
var St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
z(V, "PARTS", foundry.utils.mergeObject(R(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = R(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Je = V;
var Tt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ee, "PARTS", foundry.utils.mergeObject(R(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = R(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ee;
var _t;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(te, "PARTS", foundry.utils.mergeObject(R(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = te;
var Dt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
    }, e._votvInput = (c) => {
      var m;
      const u = c.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const g = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(g), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(ie, "PARTS", foundry.utils.mergeObject(R(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = ie;
var Ot;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(se, "PARTS", foundry.utils.mergeObject(R(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ot = R(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = se;
var Ct;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, f, h, s, r, o, n;
      if (!e.isEditable || !((f = (m = c.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (c) => {
      var u, g, m;
      return c && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var g, m, f;
      const u = ((g = c.target) == null ? void 0 : g.form) ?? ((f = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(R(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = R(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let et = re;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, a, d, c;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Rt, CONFIG.Item.dataModels.Pancel = Ht, CONFIG.Item.dataModels.MikroChip = Ut, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (c = CONFIG.Item).typeLabels ?? (c.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", We, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Je, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ze, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ve, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", et, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const A = 500;
  Hooks.on("updateActor", (u, g, m, f) => {
    var I, L, P, C, _;
    const h = u == null ? void 0 : u.id;
    if (!h) return;
    const s = document.activeElement, r = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA" || s.isContentEditable), o = [], n = (I = game.actors) == null ? void 0 : I.get(h);
    n != null && n.apps && o.push(...Array.from(n.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of l)
      ((L = S.document) == null ? void 0 : L.id) !== h || ((P = S.document) == null ? void 0 : P.documentName) !== "Actor" || ((C = S.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || o.includes(S) || o.push(S);
    if (r && o.some((S) => {
      const E = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return E && E.contains(s);
    })) return;
    const b = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < A ? b.appId : null;
    setTimeout(() => {
      for (const S of o)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== v && S.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, g, m, f) => {
    var o, n, l;
    const h = u == null ? void 0 : u.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || u.type !== "Fegyver") return;
    const s = ((o = h.system) == null ? void 0 : o.weapons) ?? {}, r = {};
    for (const [y, b] of Object.entries(s)) {
      if (!y.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== u.id || (r[`system.weapons.${y}.name`] = u.name ?? "", r[`system.weapons.${y}.damage`] = ((n = u.system) == null ? void 0 : n.damage) ?? "", r[`system.weapons.${y}.bonus`] = ((l = u.system) == null ? void 0 : l.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var A, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, u, g, m, f, h;
      if (!((u = (c = e.target) == null ? void 0 : c.closest) != null && u.call(c, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), a = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (A = game.user) != null && A.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
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
        background: { src: qt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await a.create(d);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var c, u, g, m, f, h;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((s) => s.type === "Karakter")) ?? [];
    for (const s of t)
      try {
        const r = s.prototypeToken, o = ((u = r == null ? void 0 : r.bar1) == null ? void 0 : u.attribute) ?? "", n = ((g = r == null ? void 0 : r.bar2) == null ? void 0 : g.attribute) ?? "";
        (o || n) && await s.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (r) {
        console.warn("Vacuum of the Void | Prototype token update failed for", s.name, r);
      }
    for (const s of game.scenes ?? []) {
      const r = ((m = s.tokens) == null ? void 0 : m.filter((o) => {
        var n;
        return ((n = o.actor) == null ? void 0 : n.type) === "Karakter";
      })) ?? [];
      for (const o of r)
        try {
          await o.update(e);
        } catch (n) {
          console.warn("Vacuum of the Void | Token update failed for", o.name, n);
        }
    }
    const a = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((f = game.actors) == null ? void 0 : f.filter((s) => s.type === "Npc")) ?? [];
    for (const s of d)
      try {
        await s.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (r) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", s.name, r);
      }
    for (const s of game.scenes ?? []) {
      const r = ((h = s.tokens) == null ? void 0 : h.filter((o) => {
        var n;
        return ((n = o.actor) == null ? void 0 : n.type) === "Npc";
      })) ?? [];
      for (const o of r)
        try {
          await o.update(a);
        } catch (n) {
          console.warn("Vacuum of the Void | NPC token update failed for", o.name, n);
        }
    }
  })();
});
Hooks.on("preCreateToken", (A, i, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, a = t ?? A.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (u = game.actors) == null ? void 0 : u.get(a) : null;
  if (d) {
    if (d.type === "Karakter") {
      A.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && A.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("preCreateCombatant", (A, i, e) => {
  const t = A.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && A.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (A, i, e) => {
  if ((A == null ? void 0 : A.id) !== "combat") return;
  const t = i[0] ?? i;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (A, i, e) => {
  var d;
  const t = A == null ? void 0 : A.object, a = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const c = i[0] ?? i;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (A, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || A.updateSource({
    width: 3840,
    height: 2160,
    "background.src": qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (A, i, e) => {
  var u, g;
  const t = ((u = A.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel;
  if (!a && !d) return;
  const c = (g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, ".dice-roll");
  if (c && (a && c.classList.add(`votv-${a}`), d)) {
    const m = c.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const f = c.querySelector(".dice-total"), h = (f == null ? void 0 : f.parentElement) ?? c, s = document.createElement("div");
    s.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, s.textContent = d, h.appendChild(s);
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-B41-u_3a.mjs.map
