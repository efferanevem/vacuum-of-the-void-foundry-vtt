var st = Object.defineProperty;
var it = Object.getPrototypeOf;
var rt = Reflect.get;
var at = (N, s, e) => s in N ? st(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var H = (N, s, e) => at(N, typeof s != "symbol" ? s + "" : s, e);
var K = (N, s, e) => rt(it(N), e, s);
const { HTMLField: nt, NumberField: I, SchemaField: D, StringField: y, BooleanField: M, ArrayField: ae } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
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
        armor: new ae(
          new D({
            name: new y({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new y({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new y({ required: !1, blank: !0, initial: "" }),
            level: new y({ required: !1, blank: !0, initial: "" }),
            other: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ae(
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
          items: new ae(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new ae(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new D({
        biography: new nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ce, SchemaField: lt } = foundry.data.fields;
class ct extends ot {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new lt({
        body: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: ut, NumberField: ht, StringField: J } = foundry.data.fields;
class dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ut({ required: !1, initial: !1 }),
      type: new J({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new J({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new J({ required: !1, blank: !0, initial: "" }),
      damage: new J({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new J({ required: !1, blank: !0, initial: "" }),
      special: new J({ required: !1, blank: !0, initial: "" }),
      quantity: new J({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: mt, StringField: ne } = foundry.data.fields;
class wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new mt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ne({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ne({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new ne({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ne({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ue, StringField: Me } = foundry.data.fields;
class pt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Me({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Me({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new ue({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ue({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ue({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ft, StringField: Re } = foundry.data.fields;
class He extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Re({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Re({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ft({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Be, Ue, ze, Ge;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, n, c, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, c = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (n) {
      d.scrollState = this._saveScrollState(n);
      const m = document.activeElement, f = c.contains(m), k = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && k && (d.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const w = this.element, g = this.form ?? this.element, b = d.scrollState, i = d.focus, r = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", o = () => {
      var m, f;
      if (this._applyScrollState(w, b), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const k = ((m = g.querySelector) == null ? void 0 : m.call(g, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (f = g.querySelector) == null ? void 0 : f.call(g, `[name="${CSS.escape(i.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus({ preventScroll: !0 }), typeof k.selectionStart == "number" && (k.selectionStart = i.selectionStart ?? 0, k.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(w, b);
    };
    return (r || i) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const n = Math.floor(a / 3), c = Math.floor(2 * a / 3);
    return t <= n ? 1 : t <= c ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var g, b, i, r, o, l, m, f, k;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : i.resources) ?? {}, n = ((o = (r = a.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : o.value) ?? 0, c = ((l = a.currentHealth) == null ? void 0 : l.legs) ?? 0, d = E._healthStatusFromRatio(c, n), p = Number(((k = (f = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : f.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let w;
    d === 0 ? w = 0 : d === 1 ? w = -6 : d === 2 ? w = -3 : w = p, t.textContent = String(w);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, d, p, w;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, a = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, n = ((w = t.currentHealth) == null ? void 0 : w[e]) ?? 0;
    return E._healthStatusFromRatio(n, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, w, g;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, n = ((w = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : w.value) ?? 0, c = ((g = a.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return E._healthStatusFromRatio(c, n);
  }
  async _prepareContext(s) {
    var Se, qe, Te, De, Oe, _e, Le, Ae, Fe, Ne, $e, Ee, Ce, xe, je, Pe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Te = (qe = (Se = this.actor.system) == null ? void 0 : Se.resources) == null ? void 0 : qe.stress) == null ? void 0 : Te.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, n = a.hitLocations ?? {}, c = a.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const v = ((De = n[u]) == null ? void 0 : De.value) ?? 0, q = c[u] ?? 0;
      e.computedHealthStatus[u] = E._healthStatusFromRatio(q, v);
    }
    const p = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((u) => (Number(c[u]) || 0) === 0).length;
    e.showDeathSkull = p || g >= 2;
    const b = e.computedHealthStatus.legs ?? 3, i = Number(((_e = (Oe = this.actor.system) == null ? void 0 : Oe.combat) == null ? void 0 : _e.givenSpeed) ?? 0) || 0;
    let r;
    b === 0 ? r = 0 : b === 1 ? r = -6 : b === 2 ? r = -3 : r = i, e.effectiveGivenSpeed = r, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r } },
      { inplace: !1 }
    );
    const o = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [u, v] of Object.entries(o)) {
      const q = e.computedHealthStatus[v];
      e.skillHealthStatus[u] = q, e.skillDisabled[u] = q === 0 ? " disabled" : "", e.skillHasHealthTint[u] = !0;
    }
    const l = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (l.slotOrder ?? "").trim(), k = f ? f.split(/\s*,\s*/).filter((u) => m.includes(u)) : [], S = (Le = this.actor.system.gear) == null ? void 0 : Le.microchips, O = S && typeof S == "object" && !Array.isArray(S) ? S : {}, F = (((Ae = O.slot1) == null ? void 0 : Ae.itemId) ?? "").trim(), A = (((Fe = O.slot2) == null ? void 0 : Fe.itemId) ?? "").trim(), _ = (((Ne = O.slot3) == null ? void 0 : Ne.itemId) ?? "").trim(), C = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, v) => {
      const q = typeof u.sort == "number" ? u.sort : 0, T = typeof v.sort == "number" ? v.sort : 0;
      return q - T;
    }).map((u) => {
      var Z, ie, re, V, ee, te;
      const v = u.type === "Fegyver", q = u.type === "microchip";
      let T = 0, L = "", x = null;
      for (let Y = 0; Y < k.length; Y++) {
        const X = k[Y];
        if ((((Z = l[X]) == null ? void 0 : Z.itemId) ?? "") === u.id) {
          T = Y + 1, L = ((ie = l[X]) == null ? void 0 : ie.bonus) ?? "", x = X;
          break;
        }
      }
      let P = null;
      q && (F === u.id ? P = "slot1" : A === u.id ? P = "slot2" : _ === u.id && (P = "slot3"));
      const Q = v && ((re = u.system) != null && re.damage) ? u.system.damage : "", W = v && typeof ((V = u.system) == null ? void 0 : V.range) == "string" ? (u.system.range || "").trim() : "", G = x ? Number((ee = l[x]) == null ? void 0 : ee.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: v,
        slotAssignment: T,
        slotBonus: L,
        slotKey: x,
        microchipSlotKey: P,
        isEquipped: !!(x || P),
        damage: Q,
        rangeStr: W,
        slotBonusNum: G,
        quantity: Number(((te = u.system) == null ? void 0 : te.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = C;
    const j = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((u) => u.type === "Fegyver"), R = j.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = R;
    const ye = "— Nincs fegyver —", Qe = k.filter((u) => {
      const q = ((l[u] ?? {}).itemId ?? "").trim();
      return q ? !!j.find((L) => L.id === q) : !1;
    });
    e.weaponSlots = Qe.map((u, v) => {
      const q = l[u] ?? {}, T = (q.itemId ?? "").trim(), L = R.find((x) => x.id === T);
      return {
        slotKey: u,
        itemId: T,
        slotNum: v + 1,
        displayName: (L == null ? void 0 : L.name) || q.name || ye,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const Xe = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ze = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = j.map((u) => {
      var Y, X, Ke;
      const v = u.id;
      let q = null, T = {};
      for (const le of k)
        if ((((Y = l[le]) == null ? void 0 : Y.itemId) ?? "").trim() === v) {
          q = le, T = l[le] ?? {};
          break;
        }
      const L = !!q, x = ((X = u.system) == null ? void 0 : X.equipped) !== void 0 && ((Ke = u.system) == null ? void 0 : Ke.equipped) !== null ? !!u.system.equipped : L, P = (u == null ? void 0 : u.system) ?? {}, Q = typeof P.range == "string" ? (P.range || "").trim() : "", W = P.type ?? "", G = (Xe[W] ?? W) || "—", Z = P.size ?? "", ie = (Ze[Z] ?? Z) || "", re = [G, ie].filter(Boolean).join(", ") || G || "—", V = G === "Lövedékes", ee = P.quantity, te = ee != null ? String(ee).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: v,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? ye,
        img: (u == null ? void 0 : u.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (x ? "0" : "—"),
        damage: T.damage ?? P.damage ?? "",
        rangeStr: Q || "—",
        typeLabel: G,
        typeAndSize: re,
        quantity: te,
        quantityDisplay: V ? te : "—",
        isProjectile: V,
        equipped: x,
        special: (P.special ?? "").trim() || "—"
      };
    });
    const Ve = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).filter((u) => u.type === "Pancél");
    e.armorTable = Ve.map((u) => {
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
    }), e.generalItems = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.generalItems) ? this.actor.system.gear.generalItems : [];
    const ge = (((je = this.actor.items) == null ? void 0 : je.contents) ?? []).filter((u) => u.type === "microchip"), se = ge.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.microchipsTable = ["1", "2", "3"].map((u) => {
      var Q, W;
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), L = ge.find((G) => G.id === T), x = ((Q = L == null ? void 0 : L.system) == null ? void 0 : Q.abilityType) ?? "", P = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: v,
        itemId: T,
        name: (L == null ? void 0 : L.name) ?? q.name ?? he,
        typeLabel: P,
        description: (((W = L == null ? void 0 : L.system) == null ? void 0 : W.description) ?? "").trim() || "—"
      };
    });
    const he = "— Nincs Mikro-Chip —", oe = (u) => {
      const v = [];
      return u !== 1 && v.push(F), u !== 2 && v.push(A), u !== 3 && v.push(_), v;
    };
    e.microchipItemsSlot1 = se.filter((u) => !oe(1).includes(u.id)), e.microchipItemsSlot2 = se.filter((u) => !oe(2).includes(u.id)), e.microchipItemsSlot3 = se.filter((u) => !oe(3).includes(u.id)), ["1", "2", "3"].forEach((u) => {
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), L = se.find((x) => x.id === T);
      e[`microchip${u}ItemId`] = T, e[`microchip${u}DisplayName`] = (L == null ? void 0 : L.name) || q.name || he, e[`microchip${u}Img`] = (L == null ? void 0 : L.img) || "", e[`microchip${u}Active`] = q.active === !0;
    });
    const we = this.actor.system.abilities ?? {}, et = (((Pe = this.actor.items) == null ? void 0 : Pe.contents) ?? []).map((u) => {
      var v, q, T;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((v = u.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((q = u.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = u.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), be = new Map(et.map((u) => [u.id, u])), tt = "— Nincs képesség —", ke = (u) => {
      const v = we[u] ?? {}, q = (v.itemId ?? "").trim(), T = q ? be.get(q) : null, L = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || v.name || tt,
        img: (T == null ? void 0 : T.img) || "",
        description: L,
        kp: x
      };
    };
    e.abilityFajiSlot = ke("faji"), e.abilityHatterSlot = ke("hatter");
    const ve = (u) => {
      const v = we[u];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, Ie = (u) => u.map((v) => {
      const q = be.get(v);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Ie(ve("passive")), e.abilityActiveList = Ie(ve("active")), e;
  }
  _attachFrameListeners(s) {
    var g, b;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-QS-d3NFa.mjs");
      l(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var l, m, f;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const k = (r.dataset.slot ?? "").trim();
        if (!k) return;
        o = (((((m = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : m.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((f = r.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var l;
      const r = i ? i.currentTarget : (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const n = (b = e.querySelector) == null ? void 0 : b.call(e, 'input[name="system.resources.stress.value"]');
    n && a({ currentTarget: n }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (r) => {
          r && this.actor.update({ img: r });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var f;
      i.preventDefault();
      const r = i.currentTarget, o = r.dataset.skill, l = ((f = r.textContent) == null ? void 0 : f.trim()) || o, { openRollSheetForSkill: m } = await import("./roll-sheet-QS-d3NFa.mjs");
      m(this.actor, o, l);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const c = (i, r) => {
      var m;
      const o = i.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (l) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const f = i.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = l.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l) return;
      let m = Number(r.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await l.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, m = l.items.get(o), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = l.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((_) => O.includes(_)) : [], A = F.find((_) => {
          var h;
          return (((h = k[_]) == null ? void 0 : h.itemId) ?? "").trim() === o;
        });
        if (A) {
          const _ = F.filter((h) => h !== A);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await l.update(f), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var A, _;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((h) => k.includes(h)) : [], O = S.find((h) => {
        var C;
        return (((C = m[h]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (O) return;
        let h = S.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!h) {
          const j = k.find((R) => !C.has(R));
          if (!j) return;
          h = j, S.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${h}.itemId`]: o,
          [`system.weapons.${h}.name`]: (l == null ? void 0 : l.name) ?? "",
          [`system.weapons.${h}.damage`]: ((A = l == null ? void 0 : l.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((_ = l == null ? void 0 : l.system) == null ? void 0 : _.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (O) {
        const h = S.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !l && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var h;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const f = (r.dataset.itemId ?? "").trim(), k = (r.dataset.itemName ?? ((h = r.textContent) == null ? void 0 : h.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (r.dataset.itemImg ?? "").trim(), O = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = k);
      let F = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      S ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", l == null || l.insertBefore(F, O)), F.src = S, F.style.display = "") : F && F.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const A = f ? this.actor.items.get(f) : null, _ = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      f && (_[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const o = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${r}.active`]: o });
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (l) => this._onMicrochipSlotDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (l) => this._onMicrochipSlotDrop(l, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (l) => this._onAbilitySingleDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (l) => {
        var m;
        (m = l.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (l) => this._onAbilityAreaDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (l) => {
        var m;
        (m = l.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const l = this.actor.system.abilities ?? {}, f = (Array.isArray((k = l[r]) == null ? void 0 : k.items) ? l[r].items.slice() : []).filter((S) => S !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      (m = l == null ? void 0 : l.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const m = (r.value ?? "").trim();
      await l.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, k = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      !l || l.type !== "Pancél" || await l.update({ "system.equipped": r.checked });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var A, _;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((h) => k.includes(h)) : [], O = S.find((h) => {
        var C;
        return (((C = m[h]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (O) return;
        let h = S.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const C = new Set(S);
        if (!h) {
          const j = k.find((R) => !C.has(R));
          if (!j) return;
          h = j, S.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${h}.itemId`]: o,
          [`system.weapons.${h}.name`]: l.name ?? "",
          [`system.weapons.${h}.damage`]: ((A = l.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((_ = l.system) == null ? void 0 : _.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (O) {
        const h = S.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, m = l.items.get(o), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = l.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((_) => O.includes(_)) : [], A = F.find((_) => {
          var h;
          return (((h = k[_]) == null ? void 0 : h.itemId) ?? "").trim() === o;
        });
        if (A) {
          const _ = F.filter((h) => h !== A);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await l.update(f), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancél" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var o, l;
      if (i.preventDefault(), i.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((l = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : l.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.slotKey;
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var l, m;
      i.preventDefault();
      const r = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(r) || r < 0) return;
      const o = Array.isArray((m = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      o.splice(r, 1), await this.actor.update({ "system.gear.generalItems": o });
    });
    const d = this, p = (i) => {
      var l, m, f, k;
      if (!i) return;
      const r = d._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((m = (l = r.system) == null ? void 0 : l.resources) == null ? void 0 : m.currentHealth) != null || ((k = (f = r.system) == null ? void 0 : f.resources) == null ? void 0 : k.hitLocations) != null;
      d.actor.update(r).then(() => {
        o && setTimeout(() => d.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, w = (i) => {
      var r, o, l;
      return i && (((o = (r = d.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || d.id && ((l = i.closest) == null ? void 0 : l.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const l = r.form;
      w(l) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(l));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, w;
    const e = {};
    for (const g of s.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      g.type === "checkbox" ? b = g.checked : g.type === "number" ? b = g.value === "" ? 0 : Number(g.value) : b = g.value ?? "", foundry.utils.setProperty(e, g.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, n = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const g of c) {
      const b = ((w = a[g]) == null ? void 0 : w.value) ?? 0, i = n[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, E._healthStatusFromRatio(i, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, n, c, d, p, w, g, b;
    if (e) {
      let i = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!i && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            i = r;
            break;
          }
      }
      if (i) {
        const r = await fromUuid(i);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let o = r.id;
          if (((a = r.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const S = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            o = ((n = (await this.actor.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : n.id) ?? o;
          }
          const l = (((c = r.system) == null ? void 0 : c.kind) ?? "passive").toString(), m = this.actor.system.abilities ?? {};
          if (l === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": o,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (l === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": o,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const f = l === "active" ? "active" : "passive", k = Array.isArray((d = m[f]) == null ? void 0 : d.items) ? m[f].items.slice() : Array.isArray(m[f]) ? m[f].slice() : [];
          k.includes(o) || k.push(o), await this.actor.update({ [`system.abilities.${f}.items`]: k });
          return;
        }
      }
    }
    if (e) {
      let i = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!i && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            i = r;
            break;
          }
      }
      if (i) {
        const r = await fromUuid(i);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const o = this.actor, l = ((w = r.parent) == null ? void 0 : w.id) !== o.id;
          let m = r.id;
          if (l) {
            const f = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            m = ((g = (await o.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : g.id) ?? m;
          }
          if (l) {
            const f = ((b = o.system) == null ? void 0 : b.weapons) ?? {}, k = (f.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = k ? k.split(/\s*,\s*/).filter((A) => S.includes(A)) : [], F = O.filter((A) => {
              var _;
              return (((_ = f[A]) == null ? void 0 : _.itemId) ?? "").trim() === m;
            });
            if (F.length > 0) {
              const _ = {
                "system.weapons.slotOrder": O.filter((h) => !F.includes(h)).join(",")
              };
              for (const h of F)
                _[`system.weapons.${h}.itemId`] = "", _[`system.weapons.${h}.name`] = "", _[`system.weapons.${h}.damage`] = "", _[`system.weapons.${h}.bonus`] = "";
              await o.update(_);
            }
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var n, c, d;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, w, g, b, i;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = s.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((g = n.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const c = n.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((b = n.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = n.system) == null ? void 0 : i.bonus) ?? ""
    }), await n.update({ "system.equipped": !0 });
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
    var w, g;
    s.preventDefault(), (w = s.currentTarget) == null || w.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((b, i) => {
      const r = typeof b.sort == "number" ? b.sort : 0, o = typeof i.sort == "number" ? i.sort : 0;
      return r - o;
    }).map((b) => b.id), c = n.indexOf(t), d = n.indexOf(e);
    if (c === -1 || d === -1) return;
    n.splice(c, 1), n.splice(d, 0, t);
    const p = n.map((b, i) => ({
      _id: b,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var a, n, c;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
  async _postAbilityToChat(s) {
    var g, b, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", a = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, n = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = n ? `<p>${n}</p>` : "", w = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: w,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, n;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var c, d, p;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let n = a.id;
    if (((d = a.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const w = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, w, g, b;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let n = a.id;
    if (((w = a.parent) == null ? void 0 : w.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      n = ((g = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : g.id) ?? n;
    }
    const c = this.actor.system.abilities ?? {}, d = Array.isArray((b = c[e]) == null ? void 0 : b.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    d.includes(n) || d.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var n, c, d;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, w, g, b;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = s.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "microchip") return;
    let c = n.id;
    ((g = n.parent) == null ? void 0 : g.id) !== this.actor.id && (c = ((b = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : b.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let n = Number(a) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? n -= 6 : c === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, w = new Roll(p);
    await w.evaluate({ async: !0 });
    const g = w.total >= 18 ? "critical" : w.total <= 3 ? "fumble" : null, b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return w.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g } },
      rollMode: b
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(s) {
    var k;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, n = this.actor.items.filter((S) => S.type === "Fegyver");
    let c = null;
    t.itemId && (c = n.find((S) => S.id === t.itemId) ?? null);
    const d = c && c.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, g = (((k = c == null ? void 0 : c.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", b = Number(a[g] || 0) || 0, i = p + b, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, l = new Roll(o);
    await l.evaluate({ async: !0 });
    const m = l.total >= 18 ? "critical" : l.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, w, g, b, i, r, o, l, m, f;
    const t = this.actor;
    if (!t) return;
    let a = ((w = (p = t.items).get) == null ? void 0 : w.call(p, s)) ?? ((b = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : b.call(g, (k) => k.id === s));
    if (!a || a.type !== "Fegyver") return;
    let n = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!n && e && (n = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (o = ui.notifications) == null ? void 0 : o.warn) == null || f.call(o, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(n);
    await c.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
H(E, "PARTS", foundry.utils.mergeObject(K(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), H(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Be = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Be.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ue = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ge = (ze = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : ze.window) == null ? void 0 : Ge.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
H(E, "BODY_PART_BY_SKILL", {
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
let de = E;
var We;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, a = (n) => {
      var c, d, p;
      return n && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, w;
      const c = ((d = n.target) == null ? void 0 : d.form) ?? ((w = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      a(c) && t(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
H(B, "PARTS", foundry.utils.mergeObject(K(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), H(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let me = B;
var Ye;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, a = (n) => {
      var c, d, p;
      return n && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, w;
      const c = ((d = n.target) == null ? void 0 : d.form) ?? ((w = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (n) => {
      var d, p, w;
      const c = ((d = n.target) == null ? void 0 : d.form) ?? ((w = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      a(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
H(U, "PARTS", foundry.utils.mergeObject(K(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), H(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let pe = U;
var Je;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, a = (n) => {
      var c, d, p;
      return n && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, w;
      const c = ((d = n.target) == null ? void 0 : d.form) ?? ((w = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (n) => {
      var p;
      const c = n.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const d = (c == null ? void 0 : c.form) ?? ((p = c == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      a(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(d), 300));
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
H(z, "PARTS", foundry.utils.mergeObject(K(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), H(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let fe = z;
const yt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, a, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ct, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = dt, CONFIG.Item.dataModels.microchip = pt, CONFIG.Item.dataModels.Kepesseg = He, CONFIG.Item.dataModels.ability = He, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", de, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", me, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (c, d, p, w) => {
    var S, O, F, A, _;
    const g = c == null ? void 0 : c.id;
    if (!g) return;
    const b = document.activeElement, i = b && (b.tagName === "INPUT" && b.type !== "checkbox" && b.type !== "radio" || b.tagName === "TEXTAREA" || b.isContentEditable), r = [], o = (S = game.actors) == null ? void 0 : S.get(g);
    o != null && o.apps && r.push(...Array.from(o.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const h of l)
      ((O = h.document) == null ? void 0 : O.id) !== g || ((F = h.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = h.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || r.includes(h) || r.push(h);
    if (i && r.some((h) => {
      const C = (h == null ? void 0 : h.form) ?? (h == null ? void 0 : h.element);
      return C && C.contains(b);
    })) return;
    const f = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, k = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const h of r)
        !(h != null && h.rendered) || typeof h.render != "function" || h.id !== k && h.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var a, n, c, d, p, w;
      if (!((n = (a = N.target) == null ? void 0 : a.closest) != null && n.call(a, "#actors"))) return;
      const s = (d = (c = N.target) == null ? void 0 : c.closest) == null ? void 0 : d.call(c, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((w = game.actors) != null && w.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var c, d;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, a = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = a ? (d = game.actors) == null ? void 0 : d.get(a) : null;
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
    "background.src": yt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, s, e) => {
  var n, c, d;
  const t = (c = (n = N.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : c.resultType;
  if (!t) return;
  const a = (d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
export {
  de as V
};
//# sourceMappingURL=vacuum-of-the-void-BilyjeWB.mjs.map
