var at = Object.defineProperty;
var nt = Object.getPrototypeOf;
var ot = Reflect.get;
var lt = (N, s, e) => s in N ? at(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var U = (N, s, e) => lt(N, typeof s != "symbol" ? s + "" : s, e);
var P = (N, s, e) => ot(nt(N), e, s);
const { HTMLField: ct, NumberField: I, SchemaField: D, StringField: y, BooleanField: M, ArrayField: ne } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new y({ required: !1, blank: !0, initial: "" }),
        player: new y({ required: !1, blank: !0, initial: "" }),
        level: new I({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new y({ required: !1, blank: !0, initial: "" }),
        assignment: new y({ required: !1, blank: !0, initial: "" }),
        subAssignment: new y({ required: !1, blank: !0, initial: "" }),
        background: new y({ required: !1, blank: !0, initial: "" }),
        languages: new y({ required: !1, blank: !0, initial: "" })
      }),
      resources: new D({
        health: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new D({
          head: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new D({
          head: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new D({
          head: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new D({
        defense: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new D({
        deception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new D({
        slotOrder: new y({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new D({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new D({
        microchips: new D({
          slot1: new D({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot2: new D({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot3: new D({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          })
        }),
        equipment: new y({ required: !1, blank: !0, initial: "" }),
        armor: new ne(
          new D({
            name: new y({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new y({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new y({ required: !1, blank: !0, initial: "" }),
            level: new y({ required: !1, blank: !0, initial: "" }),
            other: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ne(
          new D({
            name: new y({ required: !1, blank: !0, initial: "" }),
            quantity: new I({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new D({
        faji: new D({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new D({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        passive: new D({
          items: new ne(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new ne(
            new y({ required: !1, blank: !0 }),
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
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var i, n, o, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const n = this.element, o = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (n) {
      d.scrollState = this._saveScrollState(n);
      const m = document.activeElement, f = o.contains(m), k = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && k && (d.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const g = this.element, h = this.form ?? this.element, w = d.scrollState, r = d.focus, a = typeof (w == null ? void 0 : w.formScrollTop) == "number" || typeof (w == null ? void 0 : w.windowScrollTop) == "number", l = () => {
      var m, f;
      if (this._applyScrollState(g, w), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const k = ((m = h.querySelector) == null ? void 0 : m.call(h, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (f = h.querySelector) == null ? void 0 : f.call(h, `[name="${CSS.escape(r.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus({ preventScroll: !0 }), typeof k.selectionStart == "number" && (k.selectionStart = r.selectionStart ?? 0, k.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(g, w);
    };
    return (a || r) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const n = Math.floor(i / 3), o = Math.floor(2 * i / 3);
    return t <= n ? 1 : t <= o ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, w, r, a, l, c, m, f, k;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((r = (w = this.actor) == null ? void 0 : w.system) == null ? void 0 : r.resources) ?? {}, n = ((l = (a = i.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : l.value) ?? 0, o = ((c = i.currentHealth) == null ? void 0 : c.legs) ?? 0, d = E._healthStatusFromRatio(o, n), p = Number(((k = (f = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : f.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let g;
    d === 0 ? g = 0 : d === 1 ? g = -6 : d === 2 ? g = -3 : g = p, t.textContent = String(g);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, d, p, g;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, i = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, n = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return E._healthStatusFromRatio(n, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, g, h;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, n = ((g = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, o = ((h = i.currentHealth) == null ? void 0 : h[t]) ?? 0;
    return E._healthStatusFromRatio(o, n);
  }
  async _prepareContext(s) {
    var Te, De, Oe, _e, Le, Ae, Fe, Ne, Ee, Ce, $e, xe, Pe, je, Ke, Me;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Oe = (De = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : De.stress) == null ? void 0 : Oe.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, n = i.hitLocations ?? {}, o = i.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const v = ((_e = n[u]) == null ? void 0 : _e.value) ?? 0, q = o[u] ?? 0;
      e.computedHealthStatus[u] = E._healthStatusFromRatio(q, v);
    }
    const p = (Number(o.head) || 0) === 0, h = ["torso", "arms", "legs"].filter((u) => (Number(o[u]) || 0) === 0).length;
    e.showDeathSkull = p || h >= 2;
    const w = e.computedHealthStatus.legs ?? 3, r = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let a;
    w === 0 ? a = 0 : w === 1 ? a = -6 : w === 2 ? a = -3 : a = r, e.effectiveGivenSpeed = a, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: a } },
      { inplace: !1 }
    );
    const l = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [u, v] of Object.entries(l)) {
      const q = e.computedHealthStatus[v];
      e.skillHealthStatus[u] = q, e.skillDisabled[u] = q === 0 ? " disabled" : "", e.skillHasHealthTint[u] = !0;
    }
    const c = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (c.slotOrder ?? "").trim(), k = f ? f.split(/\s*,\s*/).filter((u) => m.includes(u)) : [], S = (Fe = this.actor.system.gear) == null ? void 0 : Fe.microchips, O = S && typeof S == "object" && !Array.isArray(S) ? S : {}, F = (((Ne = O.slot1) == null ? void 0 : Ne.itemId) ?? "").trim(), A = (((Ee = O.slot2) == null ? void 0 : Ee.itemId) ?? "").trim(), _ = (((Ce = O.slot3) == null ? void 0 : Ce.itemId) ?? "").trim(), C = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, v) => {
      const q = typeof u.sort == "number" ? u.sort : 0, T = typeof v.sort == "number" ? v.sort : 0;
      return q - T;
    }).map((u) => {
      var V, re, ae, ee, te, se;
      const v = u.type === "Fegyver", q = u.type === "microchip";
      let T = 0, L = "", x = null;
      for (let J = 0; J < k.length; J++) {
        const Z = k[J];
        if ((((V = c[Z]) == null ? void 0 : V.itemId) ?? "") === u.id) {
          T = J + 1, L = ((re = c[Z]) == null ? void 0 : re.bonus) ?? "", x = Z;
          break;
        }
      }
      let K = null;
      q && (F === u.id ? K = "slot1" : A === u.id ? K = "slot2" : _ === u.id && (K = "slot3"));
      const X = v && ((ae = u.system) != null && ae.damage) ? u.system.damage : "", Y = v && typeof ((ee = u.system) == null ? void 0 : ee.range) == "string" ? (u.system.range || "").trim() : "", W = x ? Number((te = c[x]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: v,
        slotAssignment: T,
        slotBonus: L,
        slotKey: x,
        microchipSlotKey: K,
        isEquipped: !!(x || K),
        damage: X,
        rangeStr: Y,
        slotBonusNum: W,
        quantity: Number(((se = u.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = C;
    const j = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((u) => u.type === "Fegyver"), R = j.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = R;
    const he = "— Nincs fegyver —", Ve = k.filter((u) => {
      const q = ((c[u] ?? {}).itemId ?? "").trim();
      return q ? !!j.find((L) => L.id === q) : !1;
    });
    e.weaponSlots = Ve.map((u, v) => {
      const q = c[u] ?? {}, T = (q.itemId ?? "").trim(), L = R.find((x) => x.id === T);
      return {
        slotKey: u,
        itemId: T,
        slotNum: v + 1,
        displayName: (L == null ? void 0 : L.name) || q.name || he,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const et = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, tt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = j.map((u) => {
      var J, Z, Re;
      const v = u.id;
      let q = null, T = {};
      for (const ce of k)
        if ((((J = c[ce]) == null ? void 0 : J.itemId) ?? "").trim() === v) {
          q = ce, T = c[ce] ?? {};
          break;
        }
      const L = !!q, x = ((Z = u.system) == null ? void 0 : Z.equipped) !== void 0 && ((Re = u.system) == null ? void 0 : Re.equipped) !== null ? !!u.system.equipped : L, K = (u == null ? void 0 : u.system) ?? {}, X = typeof K.range == "string" ? (K.range || "").trim() : "", Y = K.type ?? "", W = (et[Y] ?? Y) || "—", V = K.size ?? "", re = (tt[V] ?? V) || "", ae = [W, re].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = K.quantity, se = te != null ? String(te).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: v,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? he,
        img: (u == null ? void 0 : u.img) ?? "",
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
    const st = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).filter((u) => u.type === "Pancél" || u.type === "Pajzs");
    e.armorTable = st.map((u) => {
      var T, L;
      const v = (u == null ? void 0 : u.system) ?? {}, q = ((T = u.system) == null ? void 0 : T.equipped) !== void 0 && ((L = u.system) == null ? void 0 : L.equipped) !== null ? !!u.system.equipped : !1;
      return {
        itemId: u.id,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        protectionBonus: (v.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (v.speedPenalty ?? "").toString().trim() || "—",
        level: (v.level ?? "").toString().trim() || "—",
        special: (v.special ?? v.other ?? "").toString().trim() || "—",
        equipped: q
      };
    }), e.generalItems = Array.isArray((je = (Pe = this.actor.system) == null ? void 0 : Pe.gear) == null ? void 0 : je.generalItems) ? this.actor.system.gear.generalItems : [];
    const be = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((u) => u.type === "microchip"), ie = be.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.microchipsTable = ["1", "2", "3"].map((u) => {
      var X, Y;
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), L = be.find((W) => W.id === T), x = ((X = L == null ? void 0 : L.system) == null ? void 0 : X.abilityType) ?? "", K = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: v,
        itemId: T,
        name: (L == null ? void 0 : L.name) ?? q.name ?? we,
        typeLabel: K,
        description: (((Y = L == null ? void 0 : L.system) == null ? void 0 : Y.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", le = (u) => {
      const v = [];
      return u !== 1 && v.push(F), u !== 2 && v.push(A), u !== 3 && v.push(_), v;
    };
    e.microchipItemsSlot1 = ie.filter((u) => !le(1).includes(u.id)), e.microchipItemsSlot2 = ie.filter((u) => !le(2).includes(u.id)), e.microchipItemsSlot3 = ie.filter((u) => !le(3).includes(u.id)), ["1", "2", "3"].forEach((u) => {
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), L = ie.find((x) => x.id === T);
      e[`microchip${u}ItemId`] = T, e[`microchip${u}DisplayName`] = (L == null ? void 0 : L.name) || q.name || we, e[`microchip${u}Img`] = (L == null ? void 0 : L.img) || "", e[`microchip${u}Active`] = q.active === !0;
    });
    const ke = this.actor.system.abilities ?? {}, it = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).map((u) => {
      var v, q, T;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((v = u.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((q = u.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = u.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), ve = new Map(it.map((u) => [u.id, u])), rt = "— Nincs képesség —", Ie = (u) => {
      const v = ke[u] ?? {}, q = (v.itemId ?? "").trim(), T = q ? ve.get(q) : null, L = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || v.name || rt,
        img: (T == null ? void 0 : T.img) || "",
        description: L,
        kp: x
      };
    };
    e.abilityFajiSlot = Ie("faji"), e.abilityHatterSlot = Ie("hatter");
    const Se = (u) => {
      const v = ke[u];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, qe = (u) => u.map((v) => {
      const q = ve.get(v);
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
    var h, w;
    super._attachFrameListeners(s);
    const e = this.form ?? ((h = s == null ? void 0 : s.querySelector) == null ? void 0 : h.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (r) => {
      r.preventDefault(), r.stopPropagation();
      const l = (r.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-CGg198gR.mjs");
      c(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var c, m, f;
      r.preventDefault(), r.stopPropagation();
      const a = r.currentTarget;
      let l = (a.dataset.itemId ?? "").trim();
      if (!l) {
        const k = (a.dataset.slot ?? "").trim();
        if (!k) return;
        l = (((((m = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : m.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((f = a.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (r) => {
      var c;
      const a = r ? r.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const l = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const n = (w = e.querySelector) == null ? void 0 : w.call(e, 'input[name="system.resources.stress.value"]');
    n && i({ currentTarget: n }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (r) => {
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (a) => {
          a && this.actor.update({ img: a });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var f;
      r.preventDefault();
      const a = r.currentTarget, l = a.dataset.skill, c = ((f = a.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-CGg198gR.mjs");
      m(this.actor, l, c);
    }), t.on("click", ".karakter-roll-morale-d8", (r) => {
      r.preventDefault(), this._rollMorale();
    });
    const o = (r, a) => {
      var m;
      const l = r.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (c) {
        if (r.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
          const f = r.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), o(r.currentTarget, r);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), o(r.currentTarget, r);
    }), t.on("change", ".karakter-item-qty", async (r) => {
      const a = r.currentTarget, l = a.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c) return;
      let m = Number(a.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = c.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((_) => O.includes(_)) : [], A = F.find((_) => {
          var b;
          return (((b = k[_]) == null ? void 0 : b.itemId) ?? "").trim() === l;
        });
        if (A) {
          const _ = F.filter((b) => b !== A);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (r) => {
      var A, _;
      const a = r.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((b) => k.includes(b)) : [], O = S.find((b) => {
        var C;
        return (((C = m[b]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (O) return;
        let b = S.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!b) {
          const j = k.find((R) => !C.has(R));
          if (!j) return;
          b = j, S.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${b}.itemId`]: l,
          [`system.weapons.${b}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${b}.damage`]: ((A = c == null ? void 0 : c.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${b}.bonus`]: ((_ = c == null ? void 0 : c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (O) {
        const b = S.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (r) => {
      r.preventDefault();
      const a = r.currentTarget;
      if (a.disabled) return;
      const l = a.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (r) => {
      var b;
      r.preventDefault();
      const a = r.currentTarget, l = a.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const f = (a.dataset.itemId ?? "").trim(), k = (a.dataset.itemName ?? ((b = a.textContent) == null ? void 0 : b.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (a.dataset.itemImg ?? "").trim(), O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = k);
      let F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      S ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", c == null || c.insertBefore(F, O)), F.src = S, F.style.display = "") : F && F.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const A = f ? this.actor.items.get(f) : null, _ = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      f && (_[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (r) => {
      $(r.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (r) => {
      const a = r.currentTarget.dataset.slot;
      if (!a) return;
      const l = r.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${a}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((r, a) => {
      const l = a.dataset.slot;
      a.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, l));
    }), t.find(".karakter-ability-slot-single").each((r, a) => {
      const l = a.dataset.slot;
      l && (a.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((r, a) => {
      const l = a.dataset.area;
      l && (a.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const a = r.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var k;
      if (r.preventDefault(), !r.altKey) return;
      const a = r.currentTarget.dataset.area, l = r.currentTarget.dataset.itemId;
      if (!a || !l) return;
      const c = this.actor.system.abilities ?? {}, f = (Array.isArray((k = c[a]) == null ? void 0 : k.items) ? c[a].items.slice() : []).filter((S) => S !== l);
      await this.actor.update({ [`system.abilities.${a}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (r) => {
      var m;
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (r) => {
      this._resizeWeaponQuantityInput(r.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((r, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-weapon-quantity-input", async (r) => {
      const a = r.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = (a.value ?? "").trim();
      await c.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, k = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (r) => {
      const a = r.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      !c || c.type !== "Pancél" || await c.update({ "system.equipped": a.checked });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (r) => {
      var A, _;
      const a = r.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((b) => k.includes(b)) : [], O = S.find((b) => {
        var C;
        return (((C = m[b]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (O) return;
        let b = S.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!b) {
          const j = k.find((R) => !C.has(R));
          if (!j) return;
          b = j, S.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${b}.itemId`]: l,
          [`system.weapons.${b}.name`]: c.name ?? "",
          [`system.weapons.${b}.damage`]: ((A = c.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${b}.bonus`]: ((_ = c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (O) {
        const b = S.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = c.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((_) => O.includes(_)) : [], A = F.find((_) => {
          var b;
          return (((b = k[_]) == null ? void 0 : b.itemId) ?? "").trim() === l;
        });
        if (A) {
          const _ = F.filter((b) => b !== A);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const a = r.currentTarget.dataset.itemId;
      if (!a) return;
      const l = this.actor.items.get(a);
      !l || l.type !== "Pancél" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-equipment-add-row", async (r) => {
      var l, c;
      if (r.preventDefault(), r.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((c = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (r) => {
      r.preventDefault();
      const a = r.currentTarget.dataset.slotKey;
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (r) => {
      var c, m;
      r.preventDefault();
      const a = parseInt(r.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(a) || a < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(a, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const d = this, p = (r) => {
      var c, m, f, k;
      if (!r) return;
      const a = d._getFormDataForUpdate(r);
      if (Object.keys(a).length === 0) return;
      const l = ((m = (c = a.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((k = (f = a.system) == null ? void 0 : f.resources) == null ? void 0 : k.hitLocations) != null;
      d.actor.update(a).then(() => {
        l && setTimeout(() => d.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, g = (r) => {
      var a, l, c;
      return r && (((l = (a = d.element) == null ? void 0 : a.contains) == null ? void 0 : l.call(a, r)) || d.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (r) => {
      const a = r.target;
      if (!a || !a.form) return;
      const l = a.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const c = a.form;
      g(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, g;
    const e = {};
    for (const h of s.elements) {
      if (!h.name || h.disabled || h.type === "radio" && !h.checked || h.name.startsWith("system.resources.healthStatus.")) continue;
      let w;
      h.type === "checkbox" ? w = h.checked : h.type === "number" ? w = h.value === "" ? 0 : Number(h.value) : w = h.value ?? "", foundry.utils.setProperty(e, h.name, w);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const h of o) {
      const w = ((g = i[h]) == null ? void 0 : g.value) ?? 0, r = n[h] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${h}`, E._healthStatusFromRatio(r, w));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, n, o, d, p, g, h, w;
    if (e) {
      let r = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!r && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            r = a;
            break;
          }
      }
      if (r) {
        const a = await fromUuid(r);
        if (a && a.documentName === "Item" && (a.type === "Kepesseg" || a.type === "ability")) {
          let l = a.id;
          if (((i = a.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const S = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            l = ((n = (await this.actor.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : n.id) ?? l;
          }
          const c = (((o = a.system) == null ? void 0 : o.kind) ?? "passive").toString(), m = this.actor.system.abilities ?? {};
          if (c === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": l,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (c === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": l,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const f = c === "active" ? "active" : "passive", k = Array.isArray((d = m[f]) == null ? void 0 : d.items) ? m[f].items.slice() : Array.isArray(m[f]) ? m[f].slice() : [];
          k.includes(l) || k.push(l), await this.actor.update({ [`system.abilities.${f}.items`]: k });
          return;
        }
      }
    }
    if (e) {
      let r = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!r && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            r = a;
            break;
          }
      }
      if (r) {
        const a = await fromUuid(r);
        if (a && a.documentName === "Item" && a.type === "Fegyver") {
          const l = this.actor, c = ((g = a.parent) == null ? void 0 : g.id) !== l.id;
          let m = a.id;
          if (c) {
            const f = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            m = ((h = (await l.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : h.id) ?? m;
          }
          if (c) {
            const f = ((w = l.system) == null ? void 0 : w.weapons) ?? {}, k = (f.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = k ? k.split(/\s*,\s*/).filter((A) => S.includes(A)) : [], F = O.filter((A) => {
              var _;
              return (((_ = f[A]) == null ? void 0 : _.itemId) ?? "").trim() === m;
            });
            if (F.length > 0) {
              const _ = {
                "system.weapons.slotOrder": O.filter((b) => !F.includes(b)).join(",")
              };
              for (const b of F)
                _[`system.weapons.${b}.itemId`] = "", _[`system.weapons.${b}.name`] = "", _[`system.weapons.${b}.damage`] = "", _[`system.weapons.${b}.bonus`] = "";
              await l.update(_);
            }
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var n, o, d;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, g, h, w, r;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((h = n.parent) == null ? void 0 : h.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [a]);
      return;
    }
    const o = n.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((w = n.system) == null ? void 0 : w.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((r = n.system) == null ? void 0 : r.bonus) ?? ""
    }), await n.update({ "system.equipped": !0 });
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
    var g, h;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((h = s.dataTransfer) == null ? void 0 : h.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((w, r) => {
      const a = typeof w.sort == "number" ? w.sort : 0, l = typeof r.sort == "number" ? r.sort : 0;
      return a - l;
    }).map((w) => w.id), o = n.indexOf(t), d = n.indexOf(e);
    if (o === -1 || d === -1) return;
    n.splice(o, 1), n.splice(d, 0, t);
    const p = n.map((w, r) => ({
      _id: w,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, n, o;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var h, w, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((h = e.system) == null ? void 0 : h.kind) ?? "passive", i = Number(((w = e.system) == null ? void 0 : w.kp) ?? 0) || 0, n = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = n ? `<p>${n}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, n;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var o, d, p;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let n = i.id;
    if (((d = i.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const g = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [g]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, g, h, w;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let n = i.id;
    if (((g = i.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      n = ((h = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : h.id) ?? n;
    }
    const o = this.actor.system.abilities ?? {}, d = Array.isArray((w = o[e]) == null ? void 0 : w.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    d.includes(n) || d.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var n, o, d;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, g, h, w;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "microchip") return;
    let o = n.id;
    ((h = n.parent) == null ? void 0 : h.id) !== this.actor.id && (o = ((w = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : w.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let n = Number(i) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? n -= 6 : o === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const h = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: h } },
      rollMode: w
    });
  }
  async _rollMorale() {
    var n;
    const s = Number(((n = this.actor.system.resources) == null ? void 0 : n.morale) ?? 0) || 0;
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, n = this.actor.items.filter((S) => S.type === "Fegyver");
    let o = null;
    t.itemId && (o = n.find((S) => S.id === t.itemId) ?? null);
    const d = o && o.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, h = (((k = o == null ? void 0 : o.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", w = Number(i[h] || 0) || 0, r = p + w, l = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, c = new Roll(l);
    await c.evaluate({ async: !0 });
    const m = c.total >= 18 ? "critical" : c.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, g, h, w, r, a, l, c, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((g = (p = t.items).get) == null ? void 0 : g.call(p, s)) ?? ((w = (h = t.items.contents) == null ? void 0 : h.find) == null ? void 0 : w.call(h, (k) => k.id === s));
    if (!i || i.type !== "Fegyver") return;
    let n = (((r = i.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!n && e && (n = (((((a = t.system) == null ? void 0 : a.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(n);
    await o.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
U(E, "PARTS", foundry.utils.mergeObject(P(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), U(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((ze = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : ze.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ge = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ye = (We = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : We.window) == null ? void 0 : Ye.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
U(E, "BODY_PART_BY_SKILL", {
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
let me = E;
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, i = (n) => {
      var o, d, p;
      return n && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, g;
      const o = ((d = n.target) == null ? void 0 : d.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, i = (n) => {
      var o, d, p;
      return n && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, g;
      const o = ((d = n.target) == null ? void 0 : d.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
U(B, "PARTS", foundry.utils.mergeObject(P(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pajzs"],
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, i = (n) => {
      var o, d, p;
      return n && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, g;
      const o = ((d = n.target) == null ? void 0 : d.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var d, p, g;
      const o = ((d = n.target) == null ? void 0 : d.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, i = (n) => {
      var o, d, p;
      return n && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, g;
      const o = ((d = n.target) == null ? void 0 : d.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var p;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const d = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
      i(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(d), 300));
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
  var s, e, t, i, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = mt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ft, CONFIG.Item.dataModels.Pajzs = gt, CONFIG.Item.dataModels.microchip = ht, CONFIG.Item.dataModels.Kepesseg = Be, CONFIG.Item.dataModels.ability = Be, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pajzs = "Pajzs", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", me, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["Pajzs"],
    makeDefault: !0,
    label: "VOTV.PajzsSheet"
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
  Hooks.on("updateActor", (o, d, p, g) => {
    var S, O, F, A, _;
    const h = o == null ? void 0 : o.id;
    if (!h) return;
    const w = document.activeElement, r = w && (w.tagName === "INPUT" && w.type !== "checkbox" && w.type !== "radio" || w.tagName === "TEXTAREA" || w.isContentEditable), a = [], l = (S = game.actors) == null ? void 0 : S.get(h);
    l != null && l.apps && a.push(...Array.from(l.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const b of c)
      ((O = b.document) == null ? void 0 : O.id) !== h || ((F = b.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = b.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || a.includes(b) || a.push(b);
    if (r && a.some((b) => {
      const C = (b == null ? void 0 : b.form) ?? (b == null ? void 0 : b.element);
      return C && C.contains(w);
    })) return;
    const f = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, k = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const b of a)
        !(b != null && b.rendered) || typeof b.render != "function" || b.id !== k && b.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var i, n, o, d, p, g;
      if (!((n = (i = N.target) == null ? void 0 : i.closest) != null && n.call(i, "#actors"))) return;
      const s = (d = (o = N.target) == null ? void 0 : o.closest) == null ? void 0 : d.call(o, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var o, d;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, i = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = i ? (d = game.actors) == null ? void 0 : d.get(i) : null;
  !n || n.type !== "Karakter" || N.updateSource({
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
  var n, o, d;
  const t = (o = (n = N.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const i = (d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  me as V
};
//# sourceMappingURL=vacuum-of-the-void-BoyLWNHm.mjs.map
