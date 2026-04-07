var at = Object.defineProperty;
var nt = Object.getPrototypeOf;
var ot = Reflect.get;
var lt = (N, s, e) => s in N ? at(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var U = (N, s, e) => lt(N, typeof s != "symbol" ? s + "" : s, e);
var P = (N, s, e) => ot(nt(N), e, s);
const { HTMLField: ct, NumberField: S, SchemaField: D, StringField: h, BooleanField: M, ArrayField: ne } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
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
        biography: new ct({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ue, SchemaField: dt } = foundry.data.fields;
class mt extends ut {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new dt({
        body: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: pt, NumberField: vt, StringField: Q } = foundry.data.fields;
class ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new pt({ required: !1, initial: !1 }),
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
const { BooleanField: yt, StringField: oe } = foundry.data.fields;
class gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new yt({ required: !1, initial: !1 }),
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
const { NumberField: de, StringField: Ue } = foundry.data.fields;
class ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ue({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ue({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new de({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new de({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new de({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: bt, StringField: He } = foundry.data.fields;
class Be extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new He({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new He({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new bt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var ze, Ge, We, Ye;
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
    var i, a, l, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, l = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = l.contains(m), k = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && k && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const y = this.element, b = this.form ?? this.element, w = u.scrollState, n = u.focus, c = typeof (w == null ? void 0 : w.formScrollTop) == "number" || typeof (w == null ? void 0 : w.windowScrollTop) == "number", r = () => {
      var m, f;
      if (this._applyScrollState(y, w), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const k = ((m = b.querySelector) == null ? void 0 : m.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus({ preventScroll: !0 }), typeof k.selectionStart == "number" && (k.selectionStart = n.selectionStart ?? 0, k.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, w);
    };
    return (c || n) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), l = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= l ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). */
  _getTotalArmorSpeedPenalty() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (l) => {
        var u;
        return l.type === "Pancel" && ((u = l.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const u = Number(String(((a = l.system) == null ? void 0 : a.speedPenalty) ?? "").trim()) || 0;
      e += u;
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var w, n, c, r, o, m, f, k, v;
    const e = s ?? this.form ?? this.element;
    let t = (w = e == null ? void 0 : e.querySelector) == null ? void 0 : w.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((c = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : c.resources) ?? {}, a = ((o = (r = i.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : o.value) ?? 0, l = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, u = C._healthStatusFromRatio(l, a), p = Number(((v = (k = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : k.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let y;
    u === 0 ? y = 0 : u === 1 ? y = -6 : u === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y -= b, t.textContent = String(y);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, u, p, y;
    const e = C.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return C._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, y, b;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, l = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return C._healthStatusFromRatio(l, a);
  }
  async _prepareContext(s) {
    var Te, De, Oe, _e, Le, Ae, Fe, Ne, Ee, Ce, $e, xe, Pe, je, Ke, Me;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Oe = (De = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : De.stress) == null ? void 0 : Oe.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, l = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const I = ((_e = a[d]) == null ? void 0 : _e.value) ?? 0, q = l[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(q, I);
    }
    const p = (Number(l.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((d) => (Number(l[d]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const w = e.computedHealthStatus.legs ?? 3, n = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let c;
    w === 0 ? c = 0 : w === 1 ? c = -6 : w === 2 ? c = -3 : c = n, e.effectiveGivenSpeed = c, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: c } },
      { inplace: !1 }
    );
    const r = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, I] of Object.entries(r)) {
      const q = e.computedHealthStatus[I];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const o = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (o.slotOrder ?? "").trim(), k = f ? f.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], v = (Fe = this.actor.system.gear) == null ? void 0 : Fe.microchips, O = v && typeof v == "object" && !Array.isArray(v) ? v : {}, F = (((Ne = O.slot1) == null ? void 0 : Ne.itemId) ?? "").trim(), L = (((Ee = O.slot2) == null ? void 0 : Ee.itemId) ?? "").trim(), A = (((Ce = O.slot3) == null ? void 0 : Ce.itemId) ?? "").trim(), E = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, I) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof I.sort == "number" ? I.sort : 0;
      return q - T;
    }).map((d) => {
      var V, re, ae, ee, te, se;
      const I = d.type === "Fegyver", q = d.type === "microchip";
      let T = 0, _ = "", x = null;
      for (let J = 0; J < k.length; J++) {
        const Z = k[J];
        if ((((V = o[Z]) == null ? void 0 : V.itemId) ?? "") === d.id) {
          T = J + 1, _ = ((re = o[Z]) == null ? void 0 : re.bonus) ?? "", x = Z;
          break;
        }
      }
      let K = null;
      q && (F === d.id ? K = "slot1" : L === d.id ? K = "slot2" : A === d.id && (K = "slot3"));
      const X = I && ((ae = d.system) != null && ae.damage) ? d.system.damage : "", Y = I && typeof ((ee = d.system) == null ? void 0 : ee.range) == "string" ? (d.system.range || "").trim() : "", W = x ? Number((te = o[x]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: I,
        slotAssignment: T,
        slotBonus: _,
        slotKey: x,
        microchipSlotKey: K,
        isEquipped: !!(x || K),
        damage: X,
        rangeStr: Y,
        slotBonusNum: W,
        quantity: Number(((se = d.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = E;
    const j = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((d) => d.type === "Fegyver"), R = j.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = R;
    const he = "— Nincs fegyver —", Ve = k.filter((d) => {
      const q = ((o[d] ?? {}).itemId ?? "").trim();
      return q ? !!j.find((_) => _.id === q) : !1;
    });
    e.weaponSlots = Ve.map((d, I) => {
      const q = o[d] ?? {}, T = (q.itemId ?? "").trim(), _ = R.find((x) => x.id === T);
      return {
        slotKey: d,
        itemId: T,
        slotNum: I + 1,
        displayName: (_ == null ? void 0 : _.name) || q.name || he,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const et = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, tt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = j.map((d) => {
      var J, Z, Re;
      const I = d.id;
      let q = null, T = {};
      for (const ce of k)
        if ((((J = o[ce]) == null ? void 0 : J.itemId) ?? "").trim() === I) {
          q = ce, T = o[ce] ?? {};
          break;
        }
      const _ = !!q, x = ((Z = d.system) == null ? void 0 : Z.equipped) !== void 0 && ((Re = d.system) == null ? void 0 : Re.equipped) !== null ? !!d.system.equipped : _, K = (d == null ? void 0 : d.system) ?? {}, X = typeof K.range == "string" ? (K.range || "").trim() : "", Y = K.type ?? "", W = (et[Y] ?? Y) || "—", V = K.size ?? "", re = (tt[V] ?? V) || "", ae = [W, re].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = K.quantity, se = te != null ? String(te).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? he,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (x ? "0" : "—"),
        damage: T.damage ?? K.damage ?? "",
        rangeStr: X || "—",
        typeLabel: W,
        typeAndSize: ae,
        quantity: se,
        quantityDisplay: ee ? se : "—",
        isProjectile: ee,
        equipped: x,
        special: (K.special ?? "").trim() || "—"
      };
    });
    const st = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).filter((d) => d.type === "Pancel");
    e.armorTable = st.map((d) => {
      var T, _;
      const I = (d == null ? void 0 : d.system) ?? {}, q = ((T = d.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = d.system) == null ? void 0 : _.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: q
      };
    }), e.generalItems = Array.isArray((je = (Pe = this.actor.system) == null ? void 0 : Pe.gear) == null ? void 0 : je.generalItems) ? this.actor.system.gear.generalItems : [];
    const be = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((d) => d.type === "microchip"), ie = be.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var X, Y;
      const I = `slot${d}`, q = O[I] ?? {}, T = (q.itemId ?? "").trim(), _ = be.find((W) => W.id === T), x = ((X = _ == null ? void 0 : _.system) == null ? void 0 : X.abilityType) ?? "", K = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: I,
        itemId: T,
        name: (_ == null ? void 0 : _.name) ?? q.name ?? we,
        typeLabel: K,
        description: (((Y = _ == null ? void 0 : _.system) == null ? void 0 : Y.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", le = (d) => {
      const I = [];
      return d !== 1 && I.push(F), d !== 2 && I.push(L), d !== 3 && I.push(A), I;
    };
    e.microchipItemsSlot1 = ie.filter((d) => !le(1).includes(d.id)), e.microchipItemsSlot2 = ie.filter((d) => !le(2).includes(d.id)), e.microchipItemsSlot3 = ie.filter((d) => !le(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const I = `slot${d}`, q = O[I] ?? {}, T = (q.itemId ?? "").trim(), _ = ie.find((x) => x.id === T);
      e[`microchip${d}ItemId`] = T, e[`microchip${d}DisplayName`] = (_ == null ? void 0 : _.name) || q.name || we, e[`microchip${d}Img`] = (_ == null ? void 0 : _.img) || "", e[`microchip${d}Active`] = q.active === !0;
    });
    const ke = this.actor.system.abilities ?? {}, it = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).map((d) => {
      var I, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((I = d.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), ve = new Map(it.map((d) => [d.id, d])), rt = "— Nincs képesség —", Ie = (d) => {
      const I = ke[d] ?? {}, q = (I.itemId ?? "").trim(), T = q ? ve.get(q) : null, _ = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || I.name || rt,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: x
      };
    };
    e.abilityFajiSlot = Ie("faji"), e.abilityHatterSlot = Ie("hatter");
    const Se = (d) => {
      const I = ke[d];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, qe = (d) => d.map((I) => {
      const q = ve.get(I);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = qe(Se("passive")), e.abilityActiveList = qe(Se("active")), e;
  }
  _attachFrameListeners(s) {
    var b, w;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const r = (n.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-q-8A6mkf.mjs");
      o(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var o, m, f;
      n.preventDefault(), n.stopPropagation();
      const c = n.currentTarget;
      let r = (c.dataset.itemId ?? "").trim();
      if (!r) {
        const k = (c.dataset.slot ?? "").trim();
        if (!k) return;
        r = (((((m = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : m.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((f = c.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (n) => {
      var o;
      const c = n ? n.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const r = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (w = e.querySelector) == null ? void 0 : w.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (n) => {
      n.preventDefault(), n.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var f;
      n.preventDefault();
      const c = n.currentTarget, r = c.dataset.skill, o = ((f = c.textContent) == null ? void 0 : f.trim()) || r, { openRollSheetForSkill: m } = await import("./roll-sheet-q-8A6mkf.mjs");
      m(this.actor, r, o);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const l = (n, c) => {
      var m;
      const r = n.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (o) {
        if (n.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = o.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), l(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), l(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const c = n.currentTarget, r = c.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await o.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor, m = o.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = o.system.weapons ?? {}, v = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.find((A) => {
          var g;
          return (((g = k[A]) == null ? void 0 : g.itemId) ?? "").trim() === r;
        });
        if (L) {
          const A = F.filter((g) => g !== L);
          f["system.weapons.slotOrder"] = A.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var L, A;
      const c = n.currentTarget, r = (c.dataset.itemId ?? "").trim();
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((g) => k.includes(g)) : [], O = v.find((g) => {
        var E;
        return (((E = m[g]) == null ? void 0 : E.itemId) ?? "").trim() === r;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let g = v.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const E = new Set(v);
        if (!g) {
          const j = k.find((R) => !E.has(R));
          if (!j) return;
          g = j, v.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${g}.itemId`]: r,
          [`system.weapons.${g}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${g}.damage`]: ((L = o == null ? void 0 : o.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((A = o == null ? void 0 : o.system) == null ? void 0 : A.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (O) {
        const g = v.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const c = n.currentTarget;
      if (c.disabled) return;
      const r = c.closest(".karakter-microchip-slot-select-wrap"), o = r == null ? void 0 : r.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && r && r.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var g;
      n.preventDefault();
      const c = n.currentTarget, r = c.closest(".karakter-microchip-slot-select-wrap"), o = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), m = o == null ? void 0 : o.dataset.slot;
      if (!m) return;
      const f = (c.dataset.itemId ?? "").trim(), k = (c.dataset.itemName ?? ((g = c.textContent) == null ? void 0 : g.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (c.dataset.itemImg ?? "").trim(), O = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = k);
      let F = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-thumb");
      v ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", o == null || o.insertBefore(F, O)), F.src = v, F.style.display = "") : F && F.remove(), r == null || r.classList.remove("karakter-microchip-slot-open");
      const L = f ? this.actor.items.get(f) : null, A = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      f && (A[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (n) => {
      const c = n.currentTarget.dataset.slot;
      if (!c) return;
      const r = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${c}.active`]: r });
    }), t.find(".karakter-microchip-slot").each((n, c) => {
      const r = c.dataset.slot;
      c.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, r)), c.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, r));
    }), t.find(".karakter-ability-slot-single").each((n, c) => {
      const r = c.dataset.slot;
      r && (c.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, r)), c.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, c) => {
      const r = c.dataset.area;
      r && (c.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, r)), c.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var k;
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.area, r = n.currentTarget.dataset.itemId;
      if (!c || !r) return;
      const o = this.actor.system.abilities ?? {}, f = (Array.isArray((k = o[c]) == null ? void 0 : k.items) ? o[c].items.slice() : []).filter((v) => v !== r);
      await this.actor.update({ [`system.abilities.${c}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      (m = o == null ? void 0 : o.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const c = n.currentTarget, r = (c.dataset.itemId ?? "").trim();
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await o.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, k = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const c = n.currentTarget, r = (c.dataset.itemId ?? "").trim();
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": c.checked });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var L, A;
      const c = n.currentTarget, r = (c.dataset.itemId ?? "").trim();
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((g) => k.includes(g)) : [], O = v.find((g) => {
        var E;
        return (((E = m[g]) == null ? void 0 : E.itemId) ?? "").trim() === r;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let g = v.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const E = new Set(v);
        if (!g) {
          const j = k.find((R) => !E.has(R));
          if (!j) return;
          g = j, v.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${g}.itemId`]: r,
          [`system.weapons.${g}.name`]: o.name ?? "",
          [`system.weapons.${g}.damage`]: ((L = o.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((A = o.system) == null ? void 0 : A.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (O) {
        const g = v.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor, m = o.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = o.system.weapons ?? {}, v = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.find((A) => {
          var g;
          return (((g = k[A]) == null ? void 0 : g.itemId) ?? "").trim() === r;
        });
        if (L) {
          const A = F.filter((g) => g !== L);
          f["system.weapons.slotOrder"] = A.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      !r || r.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-equipment-add-row", async (n) => {
      var r, o;
      if (n.preventDefault(), n.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((o = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : o.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.slotKey;
      c && await this.actor.update({
        [`system.gear.microchips.${c}.itemId`]: "",
        [`system.gear.microchips.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (n) => {
      var o, m;
      n.preventDefault();
      const c = parseInt(n.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(c) || c < 0) return;
      const r = Array.isArray((m = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      r.splice(c, 1), await this.actor.update({ "system.gear.generalItems": r });
    });
    const u = this, p = (n) => {
      var o, m, f, k;
      if (!n) return;
      const c = u._getFormDataForUpdate(n);
      if (Object.keys(c).length === 0) return;
      const r = ((m = (o = c.system) == null ? void 0 : o.resources) == null ? void 0 : m.currentHealth) != null || ((k = (f = c.system) == null ? void 0 : f.resources) == null ? void 0 : k.hitLocations) != null;
      u.actor.update(c).then(() => {
        r && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, y = (n) => {
      var c, r, o;
      return n && (((r = (c = u.element) == null ? void 0 : c.contains) == null ? void 0 : r.call(c, n)) || u.id && ((o = n.closest) == null ? void 0 : o.call(n, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (n) => {
      const c = n.target;
      if (!c || !c.form) return;
      const r = c.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const o = c.form;
      y(o) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(o));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, y;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let w;
      b.type === "checkbox" ? w = b.checked : b.type === "number" ? w = b.value === "" ? 0 : Number(b.value) : w = b.value ?? "", foundry.utils.setProperty(e, b.name, w);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const b of l) {
      const w = ((y = i[b]) == null ? void 0 : y.value) ?? 0, n = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, C._healthStatusFromRatio(n, w));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, a, l, u, p, y, b, w, n;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let o = r.id;
          if (((i = r.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            o = ((a = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : a.id) ?? o;
          }
          const m = (((l = r.system) == null ? void 0 : l.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
          if (m === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": o,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (m === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": o,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const k = m === "active" ? "active" : "passive", v = Array.isArray((u = f[k]) == null ? void 0 : u.items) ? f[k].items.slice() : Array.isArray(f[k]) ? f[k].slice() : [];
          v.includes(o) || v.push(o), await this.actor.update({ [`system.abilities.${k}.items`]: v });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const o = this.actor, m = ((y = r.parent) == null ? void 0 : y.id) !== o.id;
          let f = r.id;
          if (m) {
            const k = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            f = ((b = (await o.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : b.id) ?? f;
          }
          if (m) {
            const k = ((w = o.system) == null ? void 0 : w.weapons) ?? {}, v = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.filter((A) => {
              var g;
              return (((g = k[A]) == null ? void 0 : g.itemId) ?? "").trim() === f;
            });
            if (L.length > 0) {
              const g = {
                "system.weapons.slotOrder": F.filter((E) => !L.includes(E)).join(",")
              };
              for (const E of L)
                g[`system.weapons.${E}.itemId`] = "", g[`system.weapons.${E}.name`] = "", g[`system.weapons.${E}.damage`] = "", g[`system.weapons.${E}.bonus`] = "";
              await o.update(g);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const o = this.actor;
          if (((n = r.parent) == null ? void 0 : n.id) !== o.id) {
            const m = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await o.createEmbeddedDocuments("Item", [m]);
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, l, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, y, b, w, n;
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
    if (((b = a.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const l = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((w = a.system) == null ? void 0 : w.damage) ?? "",
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
    var y, b;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = s.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((w, n) => {
      const c = typeof w.sort == "number" ? w.sort : 0, r = typeof n.sort == "number" ? n.sort : 0;
      return c - r;
    }).map((w) => w.id), l = a.indexOf(t), u = a.indexOf(e);
    if (l === -1 || u === -1) return;
    a.splice(l, 1), a.splice(u, 0, t);
    const p = a.map((w, n) => ({
      _id: w,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, l;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-actions-table-drag-over"));
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
    var b, w, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((w = e.system) == null ? void 0 : w.kp) ?? 0) || 0, a = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
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
    var l, u, p;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
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
    var p, y, b, w;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((y = i.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((b = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : b.id) ?? a;
    }
    const l = this.actor.system.abilities ?? {}, u = Array.isArray((w = l[e]) == null ? void 0 : w.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, l, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, y, b, w;
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
    let l = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (l = ((w = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : w.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? a -= 6 : l === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const b = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: w
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
    var k;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((v) => v.type === "Fegyver");
    let l = null;
    t.itemId && (l = a.find((v) => v.id === t.itemId) ?? null);
    const u = l && l.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((k = l == null ? void 0 : l.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", w = Number(i[b] || 0) || 0, n = p + w, r = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, o = new Roll(r);
    await o.evaluate({ async: !0 });
    const m = o.total >= 18 ? "critical" : o.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, b, w, n, c, r, o, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((w = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : w.call(b, (k) => k.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((n = i.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!a && e && (a = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (r = ui.notifications) == null ? void 0 : r.warn) == null || f.call(r, ((m = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : m.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(a);
    await l.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
U(C, "PARTS", foundry.utils.mergeObject(P(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), U(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((ze = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : ze.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ge = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ye = (We = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : We.window) == null ? void 0 : Ye.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
U(C, "BODY_PART_BY_SKILL", {
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
let me = C;
var Je;
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(l) && t(l);
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
U(H, "PARTS", foundry.utils.mergeObject(P(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Je = P(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !1 })
}));
let pe = H;
var Qe;
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, i = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(l) && t(l);
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
U(B, "PARTS", foundry.utils.mergeObject(P(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Qe = P(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !1 })
}));
let fe = B;
var Xe;
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(l) && t(l);
    }, e._votvInput = (a) => {
      var u, p, y;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
U(z, "PARTS", foundry.utils.mergeObject(P(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xe = P(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.form) ?? {}, { submitOnChange: !0 })
}));
let ye = z;
var Ze;
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
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, y;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(l) && t(l);
    }, e._votvInput = (a) => {
      var p;
      const l = a.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const u = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
U(G, "PARTS", foundry.utils.mergeObject(P(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ze = P(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
const wt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = mt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ft, CONFIG.Item.dataModels.Pancel = gt, CONFIG.Item.dataModels.microchip = ht, CONFIG.Item.dataModels.Kepesseg = Be, CONFIG.Item.dataModels.ability = Be, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", me, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (l, u, p, y) => {
    var v, O, F, L, A;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    const w = document.activeElement, n = w && (w.tagName === "INPUT" && w.type !== "checkbox" && w.type !== "radio" || w.tagName === "TEXTAREA" || w.isContentEditable), c = [], r = (v = game.actors) == null ? void 0 : v.get(b);
    r != null && r.apps && c.push(...Array.from(r.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const g of o)
      ((O = g.document) == null ? void 0 : O.id) !== b || ((F = g.document) == null ? void 0 : F.documentName) !== "Actor" || ((L = g.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || c.includes(g) || c.push(g);
    if (n && c.some((g) => {
      const E = (g == null ? void 0 : g.form) ?? (g == null ? void 0 : g.element);
      return E && E.contains(w);
    })) return;
    const f = (A = game.votv) == null ? void 0 : A._lastKarakterSheetBlurSave, k = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const g of c)
        !(g != null && g.rendered) || typeof g.render != "function" || g.id !== k && g.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var i, a, l, u, p, y;
      if (!((a = (i = N.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const s = (u = (l = N.target) == null ? void 0 : l.closest) == null ? void 0 : u.call(l, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var l, u;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, i = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
  !a || a.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": wt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, s, e) => {
  var a, l, u;
  const t = (l = (a = N.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  me as V
};
//# sourceMappingURL=vacuum-of-the-void-CgrdnJdJ.mjs.map
