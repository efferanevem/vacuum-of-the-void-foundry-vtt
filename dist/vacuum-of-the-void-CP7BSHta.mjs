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
const { BooleanField: kt, StringField: oe } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new kt({ required: !1, initial: !1 }),
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
    var i, a, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const a = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = o.contains(m), b = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && b && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const g = this.element, w = this.form ?? this.element, k = u.scrollState, n = u.focus, l = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", r = () => {
      var m, f;
      if (this._applyScrollState(g, k), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((m = w.querySelector) == null ? void 0 : m.call(w, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = w.querySelector) == null ? void 0 : f.call(w, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(g, k);
    };
    return (l || n) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), o = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((a = o.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((a = o.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var k, n, l, r, c, m, f, b, I;
    const e = s ?? this.form ?? this.element;
    let t = (k = e == null ? void 0 : e.querySelector) == null ? void 0 : k.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.resources) ?? {}, a = ((c = (r = i.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : c.value) ?? 0, o = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, u = C._healthStatusFromRatio(o, a), p = Number(((I = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let g;
    u === 0 ? g = 0 : u === 1 ? g = -6 : u === 2 ? g = -3 : g = p;
    const w = this._getTotalArmorSpeedPenalty();
    g += w, t.textContent = String(g);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, u, p, g;
    const e = C.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return C._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, g, w;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((g = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, o = ((w = i.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return C._healthStatusFromRatio(o, a);
  }
  async _prepareContext(s) {
    var Oe, _e, Le, Ae, Fe, Ne, Ee, Ce, $e, xe, Pe, je, Ke, Me, Re, Ue, Be, He;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Le = (_e = (Oe = this.actor.system) == null ? void 0 : Oe.resources) == null ? void 0 : _e.stress) == null ? void 0 : Le.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, o = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const v = ((Ae = a[d]) == null ? void 0 : Ae.value) ?? 0, q = o[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(q, v);
    }
    const p = (Number(o.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(o[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const k = e.computedHealthStatus.legs ?? 3, n = Number(((Ne = (Fe = this.actor.system) == null ? void 0 : Fe.combat) == null ? void 0 : Ne.givenSpeed) ?? 0) || 0;
    let l;
    k === 0 ? l = 0 : k === 1 ? l = -6 : k === 2 ? l = -3 : l = n;
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
    for (const [d, v] of Object.entries(f)) {
      const q = e.computedHealthStatus[v];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const b = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (b.slotOrder ?? "").trim(), F = A ? A.split(/\s*,\s*/).filter((d) => I.includes(d)) : [], O = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, L = O && typeof O == "object" && !Array.isArray(O) ? O : {}, y = (((xe = L.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), N = (((Pe = L.slot2) == null ? void 0 : Pe.itemId) ?? "").trim(), M = (((je = L.slot3) == null ? void 0 : je.itemId) ?? "").trim(), it = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, v) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof v.sort == "number" ? v.sort : 0;
      return q - T;
    }).map((d) => {
      var V, re, ae, ee, te, se;
      const v = d.type === "Fegyver", q = d.type === "microchip";
      let T = 0, _ = "", x = null;
      for (let J = 0; J < F.length; J++) {
        const Z = F[J];
        if ((((V = b[Z]) == null ? void 0 : V.itemId) ?? "") === d.id) {
          T = J + 1, _ = ((re = b[Z]) == null ? void 0 : re.bonus) ?? "", x = Z;
          break;
        }
      }
      let j = null;
      q && (y === d.id ? j = "slot1" : N === d.id ? j = "slot2" : M === d.id && (j = "slot3"));
      const X = v && ((ae = d.system) != null && ae.damage) ? d.system.damage : "", Y = v && typeof ((ee = d.system) == null ? void 0 : ee.range) == "string" ? (d.system.range || "").trim() : "", W = x ? Number((te = b[x]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: v,
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
    e.weaponSlots = rt.map((d, v) => {
      const q = b[d] ?? {}, T = (q.itemId ?? "").trim(), _ = be.find((x) => x.id === T);
      return {
        slotKey: d,
        itemId: T,
        slotNum: v + 1,
        displayName: (_ == null ? void 0 : _.name) || q.name || we,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const at = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, nt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = le.map((d) => {
      var J, Z, Ge;
      const v = d.id;
      let q = null, T = {};
      for (const ue of F)
        if ((((J = b[ue]) == null ? void 0 : J.itemId) ?? "").trim() === v) {
          q = ue, T = b[ue] ?? {};
          break;
        }
      const _ = !!q, x = ((Z = d.system) == null ? void 0 : Z.equipped) !== void 0 && ((Ge = d.system) == null ? void 0 : Ge.equipped) !== null ? !!d.system.equipped : _, j = (d == null ? void 0 : d.system) ?? {}, X = typeof j.range == "string" ? (j.range || "").trim() : "", Y = j.type ?? "", W = (at[Y] ?? Y) || "—", V = j.size ?? "", re = (nt[V] ?? V) || "", ae = [W, re].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = j.quantity, se = te != null ? String(te).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: v,
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
      const v = (d == null ? void 0 : d.system) ?? {}, q = ((T = d.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = d.system) == null ? void 0 : _.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (v.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (v.speedPenalty ?? "").toString().trim() || "—",
        level: (v.level ?? "").toString().trim() || "—",
        special: (v.special ?? v.other ?? "").toString().trim() || "—",
        equipped: q
      };
    }), e.generalItems = Array.isArray((Ue = (Re = this.actor.system) == null ? void 0 : Re.gear) == null ? void 0 : Ue.generalItems) ? this.actor.system.gear.generalItems : [];
    const ke = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((d) => d.type === "microchip"), ie = ke.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var X, Y;
      const v = `slot${d}`, q = L[v] ?? {}, T = (q.itemId ?? "").trim(), _ = ke.find((W) => W.id === T), x = ((X = _ == null ? void 0 : _.system) == null ? void 0 : X.abilityType) ?? "", j = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: v,
        itemId: T,
        name: (_ == null ? void 0 : _.name) ?? q.name ?? ve,
        typeLabel: j,
        description: (((Y = _ == null ? void 0 : _.system) == null ? void 0 : Y.description) ?? "").trim() || "—"
      };
    });
    const ve = "— Nincs Mikro-Chip —", ce = (d) => {
      const v = [];
      return d !== 1 && v.push(y), d !== 2 && v.push(N), d !== 3 && v.push(M), v;
    };
    e.microchipItemsSlot1 = ie.filter((d) => !ce(1).includes(d.id)), e.microchipItemsSlot2 = ie.filter((d) => !ce(2).includes(d.id)), e.microchipItemsSlot3 = ie.filter((d) => !ce(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const v = `slot${d}`, q = L[v] ?? {}, T = (q.itemId ?? "").trim(), _ = ie.find((x) => x.id === T);
      e[`microchip${d}ItemId`] = T, e[`microchip${d}DisplayName`] = (_ == null ? void 0 : _.name) || q.name || ve, e[`microchip${d}Img`] = (_ == null ? void 0 : _.img) || "", e[`microchip${d}Active`] = q.active === !0;
    });
    const Ie = this.actor.system.abilities ?? {}, lt = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).map((d) => {
      var v, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((v = d.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), Se = new Map(lt.map((d) => [d.id, d])), ct = "— Nincs képesség —", qe = (d) => {
      const v = Ie[d] ?? {}, q = (v.itemId ?? "").trim(), T = q ? Se.get(q) : null, _ = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || v.name || ct,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: x
      };
    };
    e.abilityFajiSlot = qe("faji"), e.abilityHatterSlot = qe("hatter");
    const Te = (d) => {
      const v = Ie[d];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, De = (d) => d.map((v) => {
      const q = Se.get(v);
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
    var w, k;
    super._attachFrameListeners(s);
    const e = this.form ?? ((w = s == null ? void 0 : s.querySelector) == null ? void 0 : w.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const r = (n.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DN-Jr1js.mjs");
      c(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var c, m, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let r = (l.dataset.itemId ?? "").trim();
      if (!r) {
        const b = (l.dataset.slot ?? "").trim();
        if (!b) return;
        r = (((((m = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : m.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (n) => {
      var c;
      const l = n ? n.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const r = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (n) => {
      n.preventDefault(), n.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (l) => {
          l && this.actor.update({ img: l });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var f;
      n.preventDefault();
      const l = n.currentTarget, r = l.dataset.skill, c = ((f = l.textContent) == null ? void 0 : f.trim()) || r, { openRollSheetForSkill: m } = await import("./roll-sheet-DN-Jr1js.mjs");
      m(this.actor, r, c);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const o = (n, l) => {
      var m;
      const r = n.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (c) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), o(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), o(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const l = n.currentTarget, r = l.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const r = n.currentTarget.dataset.itemId;
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
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var O, L;
      const l = n.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], A = I.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let y = I.find((M) => {
          var U;
          return !((U = m[M]) != null && U.itemId);
        });
        const N = new Set(I);
        if (!y) {
          const M = b.find((U) => !N.has(U));
          if (!M) return;
          y = M, I.push(M);
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
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const l = n.currentTarget;
      if (l.disabled) return;
      const r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && r && r.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var y;
      n.preventDefault();
      const l = n.currentTarget, r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
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
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (n) => {
      const l = n.currentTarget.dataset.slot;
      if (!l) return;
      const r = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: r });
    }), t.find(".karakter-microchip-slot").each((n, l) => {
      const r = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, r));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const r = l.dataset.slot;
      r && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const r = l.dataset.area;
      r && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var b;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.area, r = n.currentTarget.dataset.itemId;
      if (!l || !r) return;
      const c = this.actor.system.abilities ?? {}, f = (Array.isArray((b = c[l]) == null ? void 0 : b.items) ? c[l].items.slice() : []).filter((I) => I !== r);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await c.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, b = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const l = n.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var O, L;
      const l = n.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], A = I.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (A) return;
        let y = I.find((M) => {
          var U;
          return !((U = m[M]) != null && U.itemId);
        });
        const N = new Set(I);
        if (!y) {
          const M = b.find((U) => !N.has(U));
          if (!M) return;
          y = M, I.push(M);
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
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const r = n.currentTarget.dataset.itemId;
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
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (n) => {
      var r, c;
      if (n.preventDefault(), n.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((c = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (n) => {
      n.preventDefault();
      const l = n.currentTarget.dataset.slotKey;
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (n) => {
      var c, m;
      n.preventDefault();
      const l = parseInt(n.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const r = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      r.splice(l, 1), await this.actor.update({ "system.gear.generalItems": r });
    });
    const u = this, p = (n) => {
      var c, m, f, b;
      if (!n) return;
      const l = u._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const r = ((m = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((b = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(l).then(() => {
        r && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (n) => {
      var l, r, c;
      return n && (((r = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : r.call(l, n)) || u.id && ((c = n.closest) == null ? void 0 : c.call(n, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const r = l.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const c = l.form;
      g(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, g;
    const e = {};
    for (const w of s.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let k;
      w.type === "checkbox" ? k = w.checked : w.type === "number" ? k = w.value === "" ? 0 : Number(w.value) : k = w.value ?? "", foundry.utils.setProperty(e, w.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const w of o) {
      const k = ((g = i[w]) == null ? void 0 : g.value) ?? 0, n = a[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, C._healthStatusFromRatio(n, k));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, a, o, u, p, g, w, k, n;
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
          const m = (((o = r.system) == null ? void 0 : o.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
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
            const b = ((k = c.system) == null ? void 0 : k.weapons) ?? {}, I = (b.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((L) => A.includes(L)) : [], O = F.filter((L) => {
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
          if (((n = r.parent) == null ? void 0 : n.id) !== c.id) {
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
    var a, o, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, g, w, k, n;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
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
    const o = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((k = a.system) == null ? void 0 : k.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = a.system) == null ? void 0 : n.bonus) ?? ""
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
    var g, w;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = s.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((k, n) => {
      const l = typeof k.sort == "number" ? k.sort : 0, r = typeof n.sort == "number" ? n.sort : 0;
      return l - r;
    }).map((k) => k.id), o = a.indexOf(t), u = a.indexOf(e);
    if (o === -1 || u === -1) return;
    a.splice(o, 1), a.splice(u, 0, t);
    const p = a.map((k, n) => ({
      _id: k,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, o;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
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
    var w, k, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", i = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, a = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
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
    var o, u, p;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((u = i.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const g = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((p = (await this.actor.createEmbeddedDocuments("Item", [g]))[0]) == null ? void 0 : p.id) ?? a;
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
    var p, g, w, k;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((g = i.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((w = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : w.id) ?? a;
    }
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((k = o[e]) == null ? void 0 : k.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, o, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, g, w, k;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "microchip") return;
    let o = a.id;
    ((w = a.parent) == null ? void 0 : w.id) !== this.actor.id && (o = ((k = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : k.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? a -= 6 : o === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const w = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: k
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
    let o = null;
    t.itemId && (o = a.find((I) => I.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, w = (((b = o == null ? void 0 : o.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(i[w] || 0) || 0, n = p + k, r = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, c = new Roll(r);
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
    var p, g, w, k, n, l, r, c, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((g = (p = t.items).get) == null ? void 0 : g.call(p, s)) ?? ((k = (w = t.items.contents) == null ? void 0 : w.find) == null ? void 0 : k.call(w, (b) => b.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((n = i.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!a && e && (a = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (r = ui.notifications) == null ? void 0 : r.warn) == null || f.call(r, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(a);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
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
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var o, u, p;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
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
R(B, "PARTS", foundry.utils.mergeObject(P(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ve = P(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !1 })
}));
let fe = B;
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, i = (a) => {
      var o, u, p;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var o, u, p;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (a) => {
      var u, p, g;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var o, u, p;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (a) => {
      var p;
      const o = a.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const u = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ht, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = wt, CONFIG.Item.dataModels.Pancel = vt, CONFIG.Item.dataModels.microchip = It, CONFIG.Item.dataModels.Kepesseg = Ye, CONFIG.Item.dataModels.ability = Ye, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  Hooks.on("updateActor", (o, u, p, g) => {
    var I, A, F, O, L;
    const w = o == null ? void 0 : o.id;
    if (!w) return;
    const k = document.activeElement, n = k && (k.tagName === "INPUT" && k.type !== "checkbox" && k.type !== "radio" || k.tagName === "TEXTAREA" || k.isContentEditable), l = [], r = (I = game.actors) == null ? void 0 : I.get(w);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const y of c)
      ((A = y.document) == null ? void 0 : A.id) !== w || ((F = y.document) == null ? void 0 : F.documentName) !== "Actor" || ((O = y.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(y) || l.push(y);
    if (n && l.some((y) => {
      const N = (y == null ? void 0 : y.form) ?? (y == null ? void 0 : y.element);
      return N && N.contains(k);
    })) return;
    const f = (L = game.votv) == null ? void 0 : L._lastKarakterSheetBlurSave, b = f && Date.now() - f.at < E ? f.appId : null;
    setTimeout(() => {
      for (const y of l)
        !(y != null && y.rendered) || typeof y.render != "function" || y.id !== b && y.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var i, a, o, u, p, g;
      if (!((a = (i = E.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const s = (u = (o = E.target) == null ? void 0 : o.closest) == null ? void 0 : u.call(o, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, s, e) => {
  var o, u;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, i = t ?? E.actorId ?? null;
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
  var a, o, u;
  const t = (o = (a = E.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-CP7BSHta.mjs.map
