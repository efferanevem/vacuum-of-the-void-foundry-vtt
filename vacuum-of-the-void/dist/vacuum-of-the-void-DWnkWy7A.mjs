var ut = Object.defineProperty;
var dt = Object.getPrototypeOf;
var mt = Reflect.get;
var pt = (E, s, e) => s in E ? ut(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var R = (E, s, e) => pt(E, typeof s != "symbol" ? s + "" : s, e);
var P = (E, s, e) => mt(dt(E), e, s);
const { HTMLField: ft, NumberField: S, SchemaField: D, StringField: h, BooleanField: K, ArrayField: ne } = foundry.data.fields;
class yt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new S({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new D({
        health: new D({
          value: new S({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new S({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new D({
          head: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new D({
          head: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new S({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new D({
          head: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new D({
          value: new S({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new S({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new D({
        defense: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new D({
        deception: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new D({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new D({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new D({
        microchips: new D({
          slot1: new D({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot2: new D({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot3: new D({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new ne(
          new D({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ne(
          new D({
            name: new h({ required: !1, blank: !0, initial: "" }),
            quantity: new S({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new D({
        faji: new D({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new D({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new D({
          items: new ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new D({
        biography: new ft({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: de, SchemaField: gt } = foundry.data.fields;
class ht extends yt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new gt({
        body: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: bt, NumberField: Dt, StringField: Q } = foundry.data.fields;
class wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new bt({ required: !1, initial: !1 }),
      type: new Q({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Q({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Q({ required: !1, blank: !0, initial: "" }),
      damage: new Q({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Q({ required: !1, blank: !0, initial: "" }),
      special: new Q({ required: !1, blank: !0, initial: "" }),
      quantity: new Q({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: vt, StringField: oe } = foundry.data.fields;
class kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new vt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new oe({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new oe({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new oe({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new oe({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: me, StringField: ze } = foundry.data.fields;
class It extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ze({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ze({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new me({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new me({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new me({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: St, StringField: We } = foundry.data.fields;
class Ye extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new We({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new We({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new St({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Je, Qe, Xe, Ze;
const C = class C extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var i, a, n, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), i = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (i.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (i.windowScrollTop = t.scrollTop), i;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: i } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && i && (i.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, n = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = n.contains(m), b = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && b && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const y = this.element, w = this.form ?? this.element, v = u.scrollState, o = u.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", r = () => {
      var m, f;
      if (this._applyScrollState(y, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const b = ((m = w.querySelector) == null ? void 0 : m.call(w, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = w.querySelector) == null ? void 0 : f.call(w, `[name="${CSS.escape(o.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = o.selectionStart ?? 0, b.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (l || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), n = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (n) => {
        var u;
        return n.type === "Pancel" && ((u = n.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const u = String(((a = n.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (n) => {
        var u;
        return n.type === "Pancel" && ((u = n.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const u = String(((a = n.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, o, l, r, c, m, f, b, I;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, a = ((c = (r = i.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : c.value) ?? 0, n = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, u = C._healthStatusFromRatio(n, a), p = Number(((I = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let y;
    u === 0 ? y = 0 : u === 1 ? y = -6 : u === 2 ? y = -3 : y = p;
    const w = this._getTotalArmorSpeedPenalty();
    y += w, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, u, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((y = (p = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, u, p, y;
    const e = C.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return C._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, y, w;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, n = ((w = i.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return C._healthStatusFromRatio(n, a);
  }
  async _prepareContext(s) {
    var Oe, _e, Le, Ae, Fe, Ne, Ee, Ce, $e, xe, Pe, je, Ke, Me, Re, Be, Ue, He;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Le = (_e = (Oe = this.actor.system) == null ? void 0 : Oe.resources) == null ? void 0 : _e.stress) == null ? void 0 : Le.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, n = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const k = ((Ae = a[d]) == null ? void 0 : Ae.value) ?? 0, q = n[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(q, k);
    }
    const p = (Number(n.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(n[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ne = (Fe = this.actor.system) == null ? void 0 : Fe.combat) == null ? void 0 : Ne.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const r = this._getTotalArmorSpeedPenalty();
    l += r, e.effectiveGivenSpeed = l;
    const m = (Number(((Ce = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Ce.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, k] of Object.entries(f)) {
      const q = e.computedHealthStatus[k];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const b = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (b.slotOrder ?? "").trim(), F = A ? A.split(/\s*,\s*/).filter((d) => I.includes(d)) : [], O = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, L = O && typeof O == "object" && !Array.isArray(O) ? O : {}, g = (((xe = L.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), N = (((Pe = L.slot2) == null ? void 0 : Pe.itemId) ?? "").trim(), M = (((je = L.slot3) == null ? void 0 : je.itemId) ?? "").trim(), it = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, k) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof k.sort == "number" ? k.sort : 0;
      return q - T;
    }).map((d) => {
      var V, re, ae, ee, te, se;
      const k = d.type === "Fegyver", q = d.type === "microchip";
      let T = 0, _ = "", x = null;
      for (let J = 0; J < F.length; J++) {
        const Z = F[J];
        if ((((V = b[Z]) == null ? void 0 : V.itemId) ?? "") === d.id) {
          T = J + 1, _ = ((re = b[Z]) == null ? void 0 : re.bonus) ?? "", x = Z;
          break;
        }
      }
      let j = null;
      q && (g === d.id ? j = "slot1" : N === d.id ? j = "slot2" : M === d.id && (j = "slot3"));
      const X = k && ((ae = d.system) != null && ae.damage) ? d.system.damage : "", Y = k && typeof ((ee = d.system) == null ? void 0 : ee.range) == "string" ? (d.system.range || "").trim() : "", W = x ? Number((te = b[x]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: k,
        slotAssignment: T,
        slotBonus: _,
        slotKey: x,
        microchipSlotKey: j,
        isEquipped: !!(x || j),
        damage: X,
        rangeStr: Y,
        slotBonusNum: W,
        quantity: Number(((se = d.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = it;
    const le = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((d) => d.type === "Fegyver"), be = le.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = be;
    const we = "— Nincs fegyver —", rt = F.filter((d) => {
      const q = ((b[d] ?? {}).itemId ?? "").trim();
      return q ? !!le.find((_) => _.id === q) : !1;
    });
    e.weaponSlots = rt.map((d, k) => {
      const q = b[d] ?? {}, T = (q.itemId ?? "").trim(), _ = be.find((x) => x.id === T);
      return {
        slotKey: d,
        itemId: T,
        slotNum: k + 1,
        displayName: (_ == null ? void 0 : _.name) || q.name || we,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const at = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, nt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = le.map((d) => {
      var J, Z, Ge;
      const k = d.id;
      let q = null, T = {};
      for (const ue of F)
        if ((((J = b[ue]) == null ? void 0 : J.itemId) ?? "").trim() === k) {
          q = ue, T = b[ue] ?? {};
          break;
        }
      const _ = !!q, x = ((Z = d.system) == null ? void 0 : Z.equipped) !== void 0 && ((Ge = d.system) == null ? void 0 : Ge.equipped) !== null ? !!d.system.equipped : _, j = (d == null ? void 0 : d.system) ?? {}, X = typeof j.range == "string" ? (j.range || "").trim() : "", Y = j.type ?? "", W = (at[Y] ?? Y) || "—", V = j.size ?? "", re = (nt[V] ?? V) || "", ae = [W, re].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = j.quantity, se = te != null ? String(te).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: k,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? we,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (x ? "0" : "—"),
        damage: T.damage ?? j.damage ?? "",
        rangeStr: X || "—",
        typeLabel: W,
        typeAndSize: ae,
        quantity: se,
        quantityDisplay: ee ? se : "—",
        isProjectile: ee,
        equipped: x,
        special: (j.special ?? "").trim() || "—"
      };
    });
    const ot = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "Pancel");
    e.armorTable = ot.map((d) => {
      var T, _;
      const k = (d == null ? void 0 : d.system) ?? {}, q = ((T = d.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = d.system) == null ? void 0 : _.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (k.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (k.speedPenalty ?? "").toString().trim() || "—",
        level: (k.level ?? "").toString().trim() || "—",
        special: (k.special ?? k.other ?? "").toString().trim() || "—",
        equipped: q
      };
    }), e.generalItems = Array.isArray((Be = (Re = this.actor.system) == null ? void 0 : Re.gear) == null ? void 0 : Be.generalItems) ? this.actor.system.gear.generalItems : [];
    const ve = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((d) => d.type === "microchip"), ie = ve.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var X, Y;
      const k = `slot${d}`, q = L[k] ?? {}, T = (q.itemId ?? "").trim(), _ = ve.find((W) => W.id === T), x = ((X = _ == null ? void 0 : _.system) == null ? void 0 : X.abilityType) ?? "", j = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: k,
        itemId: T,
        name: (_ == null ? void 0 : _.name) ?? q.name ?? ke,
        typeLabel: j,
        description: (((Y = _ == null ? void 0 : _.system) == null ? void 0 : Y.description) ?? "").trim() || "—"
      };
    });
    const ke = "— Nincs Mikro-Chip —", ce = (d) => {
      const k = [];
      return d !== 1 && k.push(g), d !== 2 && k.push(N), d !== 3 && k.push(M), k;
    };
    e.microchipItemsSlot1 = ie.filter((d) => !ce(1).includes(d.id)), e.microchipItemsSlot2 = ie.filter((d) => !ce(2).includes(d.id)), e.microchipItemsSlot3 = ie.filter((d) => !ce(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const k = `slot${d}`, q = L[k] ?? {}, T = (q.itemId ?? "").trim(), _ = ie.find((x) => x.id === T);
      e[`microchip${d}ItemId`] = T, e[`microchip${d}DisplayName`] = (_ == null ? void 0 : _.name) || q.name || ke, e[`microchip${d}Img`] = (_ == null ? void 0 : _.img) || "", e[`microchip${d}Active`] = q.active === !0;
    });
    const Ie = this.actor.system.abilities ?? {}, lt = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).map((d) => {
      var k, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((k = d.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), Se = new Map(lt.map((d) => [d.id, d])), ct = "— Nincs képesség —", qe = (d) => {
      const k = Ie[d] ?? {}, q = (k.itemId ?? "").trim(), T = q ? Se.get(q) : null, _ = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || k.name || ct,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: x
      };
    };
    e.abilityFajiSlot = qe("faji"), e.abilityHatterSlot = qe("hatter");
    const Te = (d) => {
      const k = Ie[d];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, De = (d) => d.map((k) => {
      const q = Se.get(k);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = De(Te("passive")), e.abilityActiveList = De(Te("active")), e;
  }
  _attachFrameListeners(s) {
    var w, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((w = s == null ? void 0 : s.querySelector) == null ? void 0 : w.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const r = (o.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-k1SPStft.mjs");
      c(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var c, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let r = (l.dataset.itemId ?? "").trim();
      if (!r) {
        const b = (l.dataset.slot ?? "").trim();
        if (!b) return;
        r = (((((m = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : m.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (o) => {
      var c;
      const l = o ? o.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const r = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (o) => {
      o.preventDefault(), o.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (l) => {
          l && this.actor.update({ img: l });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var f;
      o.preventDefault();
      const l = o.currentTarget, r = l.dataset.skill, c = ((f = l.textContent) == null ? void 0 : f.trim()) || r, { openRollSheetForSkill: m } = await import("./roll-sheet-k1SPStft.mjs");
      m(this.actor, r, c);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const n = (o, l) => {
      var m;
      const r = o.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (c) {
        if (o.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), n(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), n(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const l = o.currentTarget, r = l.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor, m = c.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, I = (b.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((L) => A.includes(L)) : [], O = F.find((L) => {
          var g;
          return (((g = b[L]) == null ? void 0 : g.itemId) ?? "").trim() === r;
        });
        if (O) {
          const L = F.filter((g) => g !== O);
          f["system.weapons.slotOrder"] = L.join(","), f[`system.weapons.${O}.itemId`] = "", f[`system.weapons.${O}.name`] = "", f[`system.weapons.${O}.damage`] = "", f[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var O, L;
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((g) => b.includes(g)) : [], A = I.find((g) => {
        var N;
        return (((N = m[g]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let g = I.find((M) => {
          var B;
          return !((B = m[M]) != null && B.itemId);
        });
        const N = new Set(I);
        if (!g) {
          const M = b.find((B) => !N.has(B));
          if (!M) return;
          g = M, I.push(M);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${g}.itemId`]: r,
          [`system.weapons.${g}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${g}.damage`]: ((O = c == null ? void 0 : c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((L = c == null ? void 0 : c.system) == null ? void 0 : L.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (A) {
        const g = I.filter((N) => N !== A);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${A}.itemId`]: "",
          [`system.weapons.${A}.name`]: "",
          [`system.weapons.${A}.damage`]: "",
          [`system.weapons.${A}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (o) => {
      o.preventDefault();
      const l = o.currentTarget;
      if (l.disabled) return;
      const r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && r && r.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (o) => {
      var g;
      o.preventDefault();
      const l = o.currentTarget, r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), b = (l.dataset.itemName ?? ((g = l.textContent) == null ? void 0 : g.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (l.dataset.itemImg ?? "").trim(), A = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
      A && (A.textContent = b);
      let F = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-thumb");
      I ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", c == null || c.insertBefore(F, A)), F.src = I, F.style.display = "") : F && F.remove(), r == null || r.classList.remove("karakter-microchip-slot-open");
      const O = f ? this.actor.items.get(f) : null, L = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (O == null ? void 0 : O.name) ?? ""
      };
      f && (L[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(L);
    }), $(document).on("click.votv-microchip-dropdown", (o) => {
      $(o.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const r = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: r });
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const r = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, r));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const r = l.dataset.slot;
      r && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const r = l.dataset.area;
      r && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var b;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.area, r = o.currentTarget.dataset.itemId;
      if (!l || !r) return;
      const c = this.actor.system.abilities ?? {}, f = (Array.isArray((b = c[l]) == null ? void 0 : b.items) ? c[l].items.slice() : []).filter((I) => I !== r);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const r = o.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await c.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, b = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var O, L;
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((g) => b.includes(g)) : [], A = I.find((g) => {
        var N;
        return (((N = m[g]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let g = I.find((M) => {
          var B;
          return !((B = m[M]) != null && B.itemId);
        });
        const N = new Set(I);
        if (!g) {
          const M = b.find((B) => !N.has(B));
          if (!M) return;
          g = M, I.push(M);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${g}.itemId`]: r,
          [`system.weapons.${g}.name`]: c.name ?? "",
          [`system.weapons.${g}.damage`]: ((O = c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((L = c.system) == null ? void 0 : L.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (A) {
        const g = I.filter((N) => N !== A);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${A}.itemId`]: "",
          [`system.weapons.${A}.name`]: "",
          [`system.weapons.${A}.damage`]: "",
          [`system.weapons.${A}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor, m = c.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, I = (b.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((L) => A.includes(L)) : [], O = F.find((L) => {
          var g;
          return (((g = b[L]) == null ? void 0 : g.itemId) ?? "").trim() === r;
        });
        if (O) {
          const L = F.filter((g) => g !== O);
          f["system.weapons.slotOrder"] = L.join(","), f[`system.weapons.${O}.itemId`] = "", f[`system.weapons.${O}.name`] = "", f[`system.weapons.${O}.damage`] = "", f[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var r, c;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((c = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (o) => {
      o.preventDefault();
      const l = o.currentTarget.dataset.slotKey;
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var c, m;
      o.preventDefault();
      const l = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const r = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      r.splice(l, 1), await this.actor.update({ "system.gear.generalItems": r });
    });
    const u = this, p = (o) => {
      var c, m, f, b;
      if (!o) return;
      const l = u._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const r = ((m = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((b = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(l).then(() => {
        r && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (o) => {
      var l, r, c;
      return o && (((r = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : r.call(l, o)) || u.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const r = l.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const c = l.form;
      y(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, y;
    const e = {};
    for (const w of s.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      w.type === "checkbox" ? v = w.checked : w.type === "number" ? v = w.value === "" ? 0 : Number(w.value) : v = w.value ?? "", foundry.utils.setProperty(e, w.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const w of n) {
      const v = ((y = i[w]) == null ? void 0 : y.value) ?? 0, o = a[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, C._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, a, n, u, p, y, w, v, o;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let c = r.id;
          if (((i = r.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            c = ((a = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : a.id) ?? c;
          }
          const m = (((n = r.system) == null ? void 0 : n.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
          if (m === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": c,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (m === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": c,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const b = m === "active" ? "active" : "passive", I = Array.isArray((u = f[b]) == null ? void 0 : u.items) ? f[b].items.slice() : Array.isArray(f[b]) ? f[b].slice() : [];
          I.includes(c) || I.push(c), await this.actor.update({ [`system.abilities.${b}.items`]: I });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const c = this.actor, m = ((y = r.parent) == null ? void 0 : y.id) !== c.id;
          let f = r.id;
          if (m) {
            const b = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            f = ((w = (await c.createEmbeddedDocuments("Item", [b]))[0]) == null ? void 0 : w.id) ?? f;
          }
          if (m) {
            const b = ((v = c.system) == null ? void 0 : v.weapons) ?? {}, I = (b.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((L) => A.includes(L)) : [], O = F.filter((L) => {
              var g;
              return (((g = b[L]) == null ? void 0 : g.itemId) ?? "").trim() === f;
            });
            if (O.length > 0) {
              const g = {
                "system.weapons.slotOrder": F.filter((N) => !O.includes(N)).join(",")
              };
              for (const N of O)
                g[`system.weapons.${N}.itemId`] = "", g[`system.weapons.${N}.name`] = "", g[`system.weapons.${N}.damage`] = "", g[`system.weapons.${N}.bonus`] = "";
              await c.update(g);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const c = this.actor;
          if (((o = r.parent) == null ? void 0 : o.id) !== c.id) {
            const m = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await c.createEmbeddedDocuments("Item", [m]);
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, n, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, y, w, v, o;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((w = a.parent) == null ? void 0 : w.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const n = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((v = a.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = a.system) == null ? void 0 : o.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var i;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (i = s.currentTarget) == null || i.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(s, e) {
    var t;
    (t = s.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(s, e) {
    var y, w;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = s.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, r = typeof o.sort == "number" ? o.sort : 0;
      return l - r;
    }).map((v) => v.id), n = a.indexOf(t), u = a.indexOf(e);
    if (n === -1 || u === -1) return;
    a.splice(n, 1), a.splice(u, 0, t);
    const p = a.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, n;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    const i = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, i)}px`;
  }
  async _postAbilityToChat(s) {
    var w, v, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, a;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, u, p;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((u = i.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? a;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, y, w, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((y = i.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((w = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : w.id) ?? a;
    }
    const n = this.actor.system.abilities ?? {}, u = Array.isArray((v = n[e]) == null ? void 0 : v.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, n, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, y, w, v;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "microchip") return;
    let n = a.id;
    ((w = a.parent) == null ? void 0 : w.id) !== this.actor.id && (n = ((v = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : v.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? a -= 6 : n === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const w = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var a;
    const s = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
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
    const i = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(s) {
    var b;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((I) => I.type === "Fegyver");
    let n = null;
    t.itemId && (n = a.find((I) => I.id === t.itemId) ?? null);
    const u = n && n.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, w = (((b = n == null ? void 0 : n.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[w] || 0) || 0, o = p + v, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, c = new Roll(r);
    await c.evaluate({ async: !0 });
    const m = c.total >= 18 ? "critical" : c.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, w, v, o, l, r, c, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((v = (w = t.items.contents) == null ? void 0 : w.find) == null ? void 0 : v.call(w, (b) => b.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((o = i.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!a && e && (a = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (r = ui.notifications) == null ? void 0 : r.warn) == null || f.call(r, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(a);
    await n.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
R(C, "PARTS", foundry.utils.mergeObject(P(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Je = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Qe = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ze = (Xe = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.window) == null ? void 0 : Ze.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
R(C, "BODY_PART_BY_SKILL", {
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
let pe = C;
var Ve;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
R(U, "PARTS", foundry.utils.mergeObject(P(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ve = P(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !1 })
}));
let fe = U;
var et;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, i = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(H, "PARTS", foundry.utils.mergeObject(P(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((et = P(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !1 })
}));
let ye = H;
var tt;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, e._votvInput = (a) => {
      var u, p, y;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(n), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
R(G, "PARTS", foundry.utils.mergeObject(P(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((tt = P(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
var st;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, e._votvInput = (a) => {
      var p;
      const n = a.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const u = (n == null ? void 0 : n.form) ?? ((p = n == null ? void 0 : n.closest) == null ? void 0 : p.call(n, "form"));
      i(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", !(t.name === "name" && typeof i == "string" && i.trim() === "") && foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(z, "PARTS", foundry.utils.mergeObject(P(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((st = P(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : st.form) ?? {}, { submitOnChange: !0 })
}));
let he = z;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, i, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ht, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = wt, CONFIG.Item.dataModels.Pancel = kt, CONFIG.Item.dataModels.microchip = It, CONFIG.Item.dataModels.Kepesseg = Ye, CONFIG.Item.dataModels.ability = Ye, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const E = 500;
  Hooks.on("updateActor", (n, u, p, y) => {
    var I, A, F, O, L;
    const w = n == null ? void 0 : n.id;
    if (!w) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], r = (I = game.actors) == null ? void 0 : I.get(w);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const g of c)
      ((A = g.document) == null ? void 0 : A.id) !== w || ((F = g.document) == null ? void 0 : F.documentName) !== "Actor" || ((O = g.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(g) || l.push(g);
    if (o && l.some((g) => {
      const N = (g == null ? void 0 : g.form) ?? (g == null ? void 0 : g.element);
      return N && N.contains(v);
    })) return;
    const f = (L = game.votv) == null ? void 0 : L._lastKarakterSheetBlurSave, b = f && Date.now() - f.at < E ? f.appId : null;
    setTimeout(() => {
      for (const g of l)
        !(g != null && g.rendered) || typeof g.render != "function" || g.id !== b && g.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var i, a, n, u, p, y;
      if (!((a = (i = E.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const s = (u = (n = E.target) == null ? void 0 : n.closest) == null ? void 0 : u.call(n, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, s, e) => {
  var n, u;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, i = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
  !a || a.type !== "Karakter" || E.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (E, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || E.updateSource({
    width: 1920,
    height: 1080,
    "background.src": qt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (E, s, e) => {
  var a, n, u;
  const t = (n = (a = E.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : n.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-DWnkWy7A.mjs.map
