var ut = Object.defineProperty;
var dt = Object.getPrototypeOf;
var mt = Reflect.get;
var pt = (C, i, e) => i in C ? ut(C, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[i] = e;
var R = (C, i, e) => pt(C, typeof i != "symbol" ? i + "" : i, e);
var x = (C, i, e) => mt(dt(C), e, i);
const { HTMLField: ft, NumberField: S, SchemaField: D, StringField: h, BooleanField: M, ArrayField: ne } = foundry.data.fields;
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
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
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
            active: new M({ required: !1, initial: !1 })
          }),
          slot2: new D({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot3: new D({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
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
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var s, n, a, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), s = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (s.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (s.windowScrollTop = t.scrollTop), s;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: s } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && s && (s.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, a = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (n) {
      u.scrollState = this._saveScrollState(n);
      const m = document.activeElement, f = a.contains(m), b = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && b && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const g = this.element, w = this.form ?? this.element, v = u.scrollState, o = u.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", r = () => {
      var m, f;
      if (this._applyScrollState(g, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const b = ((m = w.querySelector) == null ? void 0 : m.call(w, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = w.querySelector) == null ? void 0 : f.call(w, `[name="${CSS.escape(o.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = o.selectionStart ?? 0, b.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(g, v);
    };
    return (l || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const n = Math.floor(s / 3), a = Math.floor(2 * s / 3);
    return t <= n ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, n;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const u = String(((n = a.system) == null ? void 0 : n.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, n;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const u = String(((n = a.system) == null ? void 0 : n.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var v, o, l, r, c, m, f, b, I;
    const e = i ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, n = ((c = (r = s.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : c.value) ?? 0, a = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, u = E._healthStatusFromRatio(a, n), p = Number(((I = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let g;
    u === 0 ? g = 0 : u === 1 ? g = -6 : u === 2 ? g = -3 : g = p;
    const w = this._getTotalArmorSpeedPenalty();
    g += w, t.textContent = String(g);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var a, u, p, g;
    const e = i ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = (Number(((g = (p = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : p.combat) == null ? void 0 : g.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(n);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, u, p, g;
    const e = E.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, s = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, n = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return E._healthStatusFromRatio(n, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var u, p, g, w;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((u = i == null ? void 0 : i.system) == null ? void 0 : u.resources) ?? {}, n = ((g = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, a = ((w = s.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return E._healthStatusFromRatio(a, n);
  }
  async _prepareContext(i) {
    var Oe, _e, Le, Ae, Fe, Ne, Ce, Ee, $e, Pe, xe, je, Me, Ke, Re, Be, Ue, He;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Le = (_e = (Oe = this.actor.system) == null ? void 0 : Oe.resources) == null ? void 0 : _e.stress) == null ? void 0 : Le.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, n = s.hitLocations ?? {}, a = s.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const k = ((Ae = n[d]) == null ? void 0 : Ae.value) ?? 0, q = a[d] ?? 0;
      e.computedHealthStatus[d] = E._healthStatusFromRatio(q, k);
    }
    const p = (Number(a.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(a[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ne = (Fe = this.actor.system) == null ? void 0 : Fe.combat) == null ? void 0 : Ne.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const r = this._getTotalArmorSpeedPenalty();
    l += r, e.effectiveGivenSpeed = l;
    const m = (Number(((Ee = (Ce = this.actor.system) == null ? void 0 : Ce.combat) == null ? void 0 : Ee.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, k] of Object.entries(f)) {
      const q = e.computedHealthStatus[k];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const b = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (b.slotOrder ?? "").trim(), F = A ? A.split(/\s*,\s*/).filter((d) => I.includes(d)) : [], O = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, L = O && typeof O == "object" && !Array.isArray(O) ? O : {}, y = (((Pe = L.slot1) == null ? void 0 : Pe.itemId) ?? "").trim(), N = (((xe = L.slot2) == null ? void 0 : xe.itemId) ?? "").trim(), K = (((je = L.slot3) == null ? void 0 : je.itemId) ?? "").trim(), st = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, k) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof k.sort == "number" ? k.sort : 0;
      return q - T;
    }).map((d) => {
      var V, re, ae, ee, te, ie;
      const k = d.type === "Fegyver", q = d.type === "MikroChip";
      let T = 0, _ = "", P = null;
      for (let J = 0; J < F.length; J++) {
        const Z = F[J];
        if ((((V = b[Z]) == null ? void 0 : V.itemId) ?? "") === d.id) {
          T = J + 1, _ = ((re = b[Z]) == null ? void 0 : re.bonus) ?? "", P = Z;
          break;
        }
      }
      let j = null;
      q && (y === d.id ? j = "slot1" : N === d.id ? j = "slot2" : K === d.id && (j = "slot3"));
      const X = k && ((ae = d.system) != null && ae.damage) ? d.system.damage : "", Y = k && typeof ((ee = d.system) == null ? void 0 : ee.range) == "string" ? (d.system.range || "").trim() : "", W = P ? Number((te = b[P]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: k,
        slotAssignment: T,
        slotBonus: _,
        slotKey: P,
        microchipSlotKey: j,
        isEquipped: !!(P || j),
        damage: X,
        rangeStr: Y,
        slotBonusNum: W,
        quantity: Number(((ie = d.system) == null ? void 0 : ie.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = st;
    const le = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "Fegyver"), be = le.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = be;
    const we = "— Nincs fegyver —", rt = F.filter((d) => {
      const q = ((b[d] ?? {}).itemId ?? "").trim();
      return q ? !!le.find((_) => _.id === q) : !1;
    });
    e.weaponSlots = rt.map((d, k) => {
      const q = b[d] ?? {}, T = (q.itemId ?? "").trim(), _ = be.find((P) => P.id === T);
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
      const _ = !!q, P = ((Z = d.system) == null ? void 0 : Z.equipped) !== void 0 && ((Ge = d.system) == null ? void 0 : Ge.equipped) !== null ? !!d.system.equipped : _, j = (d == null ? void 0 : d.system) ?? {}, X = typeof j.range == "string" ? (j.range || "").trim() : "", Y = j.type ?? "", W = (at[Y] ?? Y) || "—", V = j.size ?? "", re = (nt[V] ?? V) || "", ae = [W, re].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = j.quantity, ie = te != null ? String(te).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: k,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? we,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (P ? "0" : "—"),
        damage: T.damage ?? j.damage ?? "",
        rangeStr: X || "—",
        typeLabel: W,
        typeAndSize: ae,
        quantity: ie,
        quantityDisplay: ee ? ie : "—",
        isProjectile: ee,
        equipped: P,
        special: (j.special ?? "").trim() || "—"
      };
    });
    const ot = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((d) => d.type === "Pancel");
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
    const ve = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((d) => d.type === "MikroChip"), se = ve.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var X, Y;
      const k = `slot${d}`, q = L[k] ?? {}, T = (q.itemId ?? "").trim(), _ = ve.find((W) => W.id === T), P = ((X = _ == null ? void 0 : _.system) == null ? void 0 : X.abilityType) ?? "", j = P === "active" ? "Aktív" : P === "passive" ? "Passzív" : P || "—";
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
      return d !== 1 && k.push(y), d !== 2 && k.push(N), d !== 3 && k.push(K), k;
    };
    e.microchipItemsSlot1 = se.filter((d) => !ce(1).includes(d.id)), e.microchipItemsSlot2 = se.filter((d) => !ce(2).includes(d.id)), e.microchipItemsSlot3 = se.filter((d) => !ce(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const k = `slot${d}`, q = L[k] ?? {}, T = (q.itemId ?? "").trim(), _ = se.find((P) => P.id === T);
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
      const k = Ie[d] ?? {}, q = (k.itemId ?? "").trim(), T = q ? Se.get(q) : null, _ = (T == null ? void 0 : T.description) ?? "", P = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || k.name || ct,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: P
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
  _attachFrameListeners(i) {
    var w, v;
    super._attachFrameListeners(i);
    const e = this.form ?? ((w = i == null ? void 0 : i.querySelector) == null ? void 0 : w.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const r = (o.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-BfcECpn8.mjs");
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
    const s = (o) => {
      var c;
      const l = o ? o.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const r = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const n = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    n && s({ currentTarget: n }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (o) => {
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
      const l = o.currentTarget, r = l.dataset.skill, c = ((f = l.textContent) == null ? void 0 : f.trim()) || r, { openRollSheetForSkill: m } = await import("./roll-sheet-BfcECpn8.mjs");
      m(this.actor, r, c);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const a = (o, l) => {
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
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
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
          var y;
          return (((y = b[L]) == null ? void 0 : y.itemId) ?? "").trim() === r;
        });
        if (O) {
          const L = F.filter((y) => y !== O);
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
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], A = I.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let y = I.find((K) => {
          var B;
          return !((B = m[K]) != null && B.itemId);
        });
        const N = new Set(I);
        if (!y) {
          const K = b.find((B) => !N.has(B));
          if (!K) return;
          y = K, I.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${y}.itemId`]: r,
          [`system.weapons.${y}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${y}.damage`]: ((O = c == null ? void 0 : c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((L = c == null ? void 0 : c.system) == null ? void 0 : L.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (A) {
        const y = I.filter((N) => N !== A);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
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
      var y;
      o.preventDefault();
      const l = o.currentTarget, r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), b = (l.dataset.itemName ?? ((y = l.textContent) == null ? void 0 : y.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (l.dataset.itemImg ?? "").trim(), A = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
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
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var O, L;
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], A = I.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let y = I.find((K) => {
          var B;
          return !((B = m[K]) != null && B.itemId);
        });
        const N = new Set(I);
        if (!y) {
          const K = b.find((B) => !N.has(B));
          if (!K) return;
          y = K, I.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${y}.itemId`]: r,
          [`system.weapons.${y}.name`]: c.name ?? "",
          [`system.weapons.${y}.damage`]: ((O = c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((L = c.system) == null ? void 0 : L.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (A) {
        const y = I.filter((N) => N !== A);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
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
          var y;
          return (((y = b[L]) == null ? void 0 : y.itemId) ?? "").trim() === r;
        });
        if (O) {
          const L = F.filter((y) => y !== O);
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
    }, g = (o) => {
      var l, r, c;
      return o && (((r = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : r.call(l, o)) || u.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const r = l.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const c = l.form;
      g(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, p, g;
    const e = {};
    for (const w of i.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      w.type === "checkbox" ? v = w.checked : w.type === "number" ? v = w.value === "" ? 0 : Number(w.value) : v = w.value ?? "", foundry.utils.setProperty(e, w.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, n = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const w of a) {
      const v = ((g = s[w]) == null ? void 0 : g.value) ?? 0, o = n[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, n, a, u, p, g, w, v, o;
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
          if (((s = r.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            c = ((n = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : n.id) ?? c;
          }
          const m = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
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
          const c = this.actor, m = ((g = r.parent) == null ? void 0 : g.id) !== c.id;
          let f = r.id;
          if (m) {
            const b = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            f = ((w = (await c.createEmbeddedDocuments("Item", [b]))[0]) == null ? void 0 : w.id) ?? f;
          }
          if (m) {
            const b = ((v = c.system) == null ? void 0 : v.weapons) ?? {}, I = (b.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((L) => A.includes(L)) : [], O = F.filter((L) => {
              var y;
              return (((y = b[L]) == null ? void 0 : y.itemId) ?? "").trim() === f;
            });
            if (O.length > 0) {
              const y = {
                "system.weapons.slotOrder": F.filter((N) => !O.includes(N)).join(",")
              };
              for (const N of O)
                y[`system.weapons.${N}.itemId`] = "", y[`system.weapons.${N}.name`] = "", y[`system.weapons.${N}.damage`] = "", y[`system.weapons.${N}.bonus`] = "";
              await c.update(y);
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
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var n, a, u;
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var u, p, g, w, v, o;
    i.preventDefault(), i.stopPropagation(), (u = i.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = i.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((w = n.parent) == null ? void 0 : w.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const a = n.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((v = n.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = n.system) == null ? void 0 : o.bonus) ?? ""
    }), await n.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var s;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (s = i.currentTarget) == null || s.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var g, w;
    i.preventDefault(), (g = i.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = i.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, r = typeof o.sort == "number" ? o.sort : 0;
      return l - r;
    }).map((v) => v.id), a = n.indexOf(t), u = n.indexOf(e);
    if (a === -1 || u === -1) return;
    n.splice(a, 1), n.splice(u, 0, t);
    const p = n.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(i) {
    var s, n, a;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
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
    const s = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, s)}px`;
  }
  async _postAbilityToChat(i) {
    var w, v, o;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", s = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, n = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = n ? `<p>${n}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, n;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var a, u, p;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let n = s.id;
    if (((u = s.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const g = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [g]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var p, g, w, v;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let n = s.id;
    if (((g = s.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      n = ((w = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : w.id) ?? n;
    }
    const a = this.actor.system.abilities ?? {}, u = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(i, e) {
    var n, a, u;
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, p, g, w, v;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = i.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "MikroChip") return;
    let a = n.id;
    ((w = n.parent) == null ? void 0 : w.id) !== this.actor.id && (a = ((v = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : v.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let n = Number(s) || 0;
    const a = this._getSkillHealthStatus(i);
    a === 1 ? n -= 6 : a === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const w = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var n;
    const i = Number(((n = this.actor.system.resources) == null ? void 0 : n.morale) ?? 0) || 0;
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
    const s = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": s });
  }
  async _rollWeapon(i) {
    var b;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, n = this.actor.items.filter((I) => I.type === "Fegyver");
    let a = null;
    t.itemId && (a = n.find((I) => I.id === t.itemId) ?? null);
    const u = a && a.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, w = (((b = a == null ? void 0 : a.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(s[w] || 0) || 0, o = p + v, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, c = new Roll(r);
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
  async _rollWeaponDamage(i, e = "") {
    var p, g, w, v, o, l, r, c, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((g = (p = t.items).get) == null ? void 0 : g.call(p, i)) ?? ((v = (w = t.items.contents) == null ? void 0 : w.find) == null ? void 0 : v.call(w, (b) => b.id === i));
    if (!s || s.type !== "Fegyver") return;
    let n = (((o = s.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!n && e && (n = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (r = ui.notifications) == null ? void 0 : r.warn) == null || f.call(r, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(n);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
R(E, "PARTS", foundry.utils.mergeObject(x(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Je = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Qe = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ze = (Xe = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.window) == null ? void 0 : Ze.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
R(E, "BODY_PART_BY_SKILL", {
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
let pe = E;
var Ve;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, s = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
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
R(U, "PARTS", foundry.utils.mergeObject(x(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ve = x(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !1 })
}));
let fe = U;
var et;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, s = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((et = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !1 })
}));
let ye = H;
var tt;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, s = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const u = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(G, "PARTS", foundry.utils.mergeObject(x(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((tt = x(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
var it;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, s = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const u = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(z, "PARTS", foundry.utils.mergeObject(x(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((it = x(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !0 })
}));
let he = z;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, s, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ht, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = wt, CONFIG.Item.dataModels.Pancel = kt, CONFIG.Item.dataModels.MikroChip = It, CONFIG.Item.dataModels.Kepesseg = Ye, CONFIG.Item.dataModels.ability = Ye, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
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
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const C = 500;
  Hooks.on("updateActor", (a, u, p, g) => {
    var I, A, F, O, L;
    const w = a == null ? void 0 : a.id;
    if (!w) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], r = (I = game.actors) == null ? void 0 : I.get(w);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const y of c)
      ((A = y.document) == null ? void 0 : A.id) !== w || ((F = y.document) == null ? void 0 : F.documentName) !== "Actor" || ((O = y.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(y) || l.push(y);
    if (o && l.some((y) => {
      const N = (y == null ? void 0 : y.form) ?? (y == null ? void 0 : y.element);
      return N && N.contains(v);
    })) return;
    const f = (L = game.votv) == null ? void 0 : L._lastKarakterSheetBlurSave, b = f && Date.now() - f.at < C ? f.appId : null;
    setTimeout(() => {
      for (const y of l)
        !(y != null && y.rendered) || typeof y.render != "function" || y.id !== b && y.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (C) => {
      var s, n, a, u, p, g;
      if (!((n = (s = C.target) == null ? void 0 : s.closest) != null && n.call(s, "#actors"))) return;
      const i = (u = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : u.call(a, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, i, e) => {
  var a, u;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, s = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = s ? (u = game.actors) == null ? void 0 : u.get(s) : null;
  !n || n.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": qt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, i, e) => {
  var n, a, u;
  const t = (a = (n = C.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const s = (u = i == null ? void 0 : i.querySelector) == null ? void 0 : u.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-MyzvokXi.mjs.map
