var rt = Object.defineProperty;
var nt = Object.getPrototypeOf;
var ot = Reflect.get;
var lt = (N, s, e) => s in N ? rt(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var U = (N, s, e) => lt(N, typeof s != "symbol" ? s + "" : s, e);
var P = (N, s, e) => ot(nt(N), e, s);
const { HTMLField: ct, NumberField: S, SchemaField: D, StringField: g, BooleanField: M, ArrayField: ne } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new S({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
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
        slotOrder: new g({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new D({
        microchips: new D({
          slot1: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot2: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot3: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" }),
        armor: new ne(
          new D({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ne(
          new D({
            name: new g({ required: !1, blank: !0, initial: "" }),
            quantity: new S({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new D({
        faji: new D({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new D({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        passive: new D({
          items: new ne(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new ne(
            new g({ required: !1, blank: !0 }),
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
    var a, r, c, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const r = this.element, c = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (r) {
      d.scrollState = this._saveScrollState(r);
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
    const h = this.element, b = this.form ?? this.element, w = d.scrollState, n = d.focus, l = typeof (w == null ? void 0 : w.formScrollTop) == "number" || typeof (w == null ? void 0 : w.windowScrollTop) == "number", i = () => {
      var m, f;
      if (this._applyScrollState(h, w), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const k = ((m = b.querySelector) == null ? void 0 : m.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus({ preventScroll: !0 }), typeof k.selectionStart == "number" && (k.selectionStart = n.selectionStart ?? 0, k.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(h, w);
    };
    return (l || n) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const r = Math.floor(a / 3), c = Math.floor(2 * a / 3);
    return t <= r ? 1 : t <= c ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, w, n, l, i, o, m, f, k;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((n = (w = this.actor) == null ? void 0 : w.system) == null ? void 0 : n.resources) ?? {}, r = ((i = (l = a.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : i.value) ?? 0, c = ((o = a.currentHealth) == null ? void 0 : o.legs) ?? 0, d = C._healthStatusFromRatio(c, r), p = Number(((k = (f = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : f.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let h;
    d === 0 ? h = 0 : d === 1 ? h = -6 : d === 2 ? h = -3 : h = p, t.textContent = String(h);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, d, p, h;
    const e = C.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, a = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, r = ((h = t.currentHealth) == null ? void 0 : h[e]) ?? 0;
    return C._healthStatusFromRatio(r, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, h, b;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, r = ((h = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : h.value) ?? 0, c = ((b = a.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return C._healthStatusFromRatio(c, r);
  }
  async _prepareContext(s) {
    var Te, De, Oe, _e, Le, Ae, Fe, Ne, Ee, Ce, $e, xe, Pe, je, Ke, Me;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Oe = (De = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : De.stress) == null ? void 0 : Oe.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, r = a.hitLocations ?? {}, c = a.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const v = ((_e = r[u]) == null ? void 0 : _e.value) ?? 0, q = c[u] ?? 0;
      e.computedHealthStatus[u] = C._healthStatusFromRatio(q, v);
    }
    const p = (Number(c.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((u) => (Number(c[u]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const w = e.computedHealthStatus.legs ?? 3, n = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let l;
    w === 0 ? l = 0 : w === 1 ? l = -6 : w === 2 ? l = -3 : l = n, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const i = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [u, v] of Object.entries(i)) {
      const q = e.computedHealthStatus[v];
      e.skillHealthStatus[u] = q, e.skillDisabled[u] = q === 0 ? " disabled" : "", e.skillHasHealthTint[u] = !0;
    }
    const o = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (o.slotOrder ?? "").trim(), k = f ? f.split(/\s*,\s*/).filter((u) => m.includes(u)) : [], I = (Fe = this.actor.system.gear) == null ? void 0 : Fe.microchips, O = I && typeof I == "object" && !Array.isArray(I) ? I : {}, F = (((Ne = O.slot1) == null ? void 0 : Ne.itemId) ?? "").trim(), L = (((Ee = O.slot2) == null ? void 0 : Ee.itemId) ?? "").trim(), A = (((Ce = O.slot3) == null ? void 0 : Ce.itemId) ?? "").trim(), E = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, v) => {
      const q = typeof u.sort == "number" ? u.sort : 0, T = typeof v.sort == "number" ? v.sort : 0;
      return q - T;
    }).map((u) => {
      var V, ae, re, ee, te, se;
      const v = u.type === "Fegyver", q = u.type === "microchip";
      let T = 0, _ = "", x = null;
      for (let J = 0; J < k.length; J++) {
        const Z = k[J];
        if ((((V = o[Z]) == null ? void 0 : V.itemId) ?? "") === u.id) {
          T = J + 1, _ = ((ae = o[Z]) == null ? void 0 : ae.bonus) ?? "", x = Z;
          break;
        }
      }
      let K = null;
      q && (F === u.id ? K = "slot1" : L === u.id ? K = "slot2" : A === u.id && (K = "slot3"));
      const X = v && ((re = u.system) != null && re.damage) ? u.system.damage : "", Y = v && typeof ((ee = u.system) == null ? void 0 : ee.range) == "string" ? (u.system.range || "").trim() : "", W = x ? Number((te = o[x]) == null ? void 0 : te.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: v,
        slotAssignment: T,
        slotBonus: _,
        slotKey: x,
        microchipSlotKey: K,
        isEquipped: !!(x || K),
        damage: X,
        rangeStr: Y,
        slotBonusNum: W,
        quantity: Number(((se = u.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = E;
    const j = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((u) => u.type === "Fegyver"), R = j.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = R;
    const he = "— Nincs fegyver —", Ve = k.filter((u) => {
      const q = ((o[u] ?? {}).itemId ?? "").trim();
      return q ? !!j.find((_) => _.id === q) : !1;
    });
    e.weaponSlots = Ve.map((u, v) => {
      const q = o[u] ?? {}, T = (q.itemId ?? "").trim(), _ = R.find((x) => x.id === T);
      return {
        slotKey: u,
        itemId: T,
        slotNum: v + 1,
        displayName: (_ == null ? void 0 : _.name) || q.name || he,
        img: (_ == null ? void 0 : _.img) || "",
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
        if ((((J = o[ce]) == null ? void 0 : J.itemId) ?? "").trim() === v) {
          q = ce, T = o[ce] ?? {};
          break;
        }
      const _ = !!q, x = ((Z = u.system) == null ? void 0 : Z.equipped) !== void 0 && ((Re = u.system) == null ? void 0 : Re.equipped) !== null ? !!u.system.equipped : _, K = (u == null ? void 0 : u.system) ?? {}, X = typeof K.range == "string" ? (K.range || "").trim() : "", Y = K.type ?? "", W = (et[Y] ?? Y) || "—", V = K.size ?? "", ae = (tt[V] ?? V) || "", re = [W, ae].filter(Boolean).join(", ") || W || "—", ee = W === "Lövedékes", te = K.quantity, se = te != null ? String(te).trim() : "1";
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
        typeAndSize: re,
        quantity: se,
        quantityDisplay: ee ? se : "—",
        isProjectile: ee,
        equipped: x,
        special: (K.special ?? "").trim() || "—"
      };
    });
    const st = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).filter((u) => u.type === "Pancel");
    e.armorTable = st.map((u) => {
      var T, _;
      const v = (u == null ? void 0 : u.system) ?? {}, q = ((T = u.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = u.system) == null ? void 0 : _.equipped) !== null ? !!u.system.equipped : !1;
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
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), _ = be.find((W) => W.id === T), x = ((X = _ == null ? void 0 : _.system) == null ? void 0 : X.abilityType) ?? "", K = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: v,
        itemId: T,
        name: (_ == null ? void 0 : _.name) ?? q.name ?? we,
        typeLabel: K,
        description: (((Y = _ == null ? void 0 : _.system) == null ? void 0 : Y.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", le = (u) => {
      const v = [];
      return u !== 1 && v.push(F), u !== 2 && v.push(L), u !== 3 && v.push(A), v;
    };
    e.microchipItemsSlot1 = ie.filter((u) => !le(1).includes(u.id)), e.microchipItemsSlot2 = ie.filter((u) => !le(2).includes(u.id)), e.microchipItemsSlot3 = ie.filter((u) => !le(3).includes(u.id)), ["1", "2", "3"].forEach((u) => {
      const v = `slot${u}`, q = O[v] ?? {}, T = (q.itemId ?? "").trim(), _ = ie.find((x) => x.id === T);
      e[`microchip${u}ItemId`] = T, e[`microchip${u}DisplayName`] = (_ == null ? void 0 : _.name) || q.name || we, e[`microchip${u}Img`] = (_ == null ? void 0 : _.img) || "", e[`microchip${u}Active`] = q.active === !0;
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
    }), ve = new Map(it.map((u) => [u.id, u])), at = "— Nincs képesség —", Ie = (u) => {
      const v = ke[u] ?? {}, q = (v.itemId ?? "").trim(), T = q ? ve.get(q) : null, _ = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || v.name || at,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
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
    var b, w;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const i = (n.currentTarget.dataset.slot ?? "").trim();
      if (!i) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-QjEC6mKB.mjs");
      o(this.actor, i);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var o, m, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let i = (l.dataset.itemId ?? "").trim();
      if (!i) {
        const k = (l.dataset.slot ?? "").trim();
        if (!k) return;
        i = (((((m = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : m.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      i && await this._rollWeaponDamage(i, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (n) => {
      var o;
      const l = n ? n.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const i = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", i > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const r = (w = e.querySelector) == null ? void 0 : w.call(e, 'input[name="system.resources.stress.value"]');
    r && a({ currentTarget: r }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (n) => {
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
      const l = n.currentTarget, i = l.dataset.skill, o = ((f = l.textContent) == null ? void 0 : f.trim()) || i, { openRollSheetForSkill: m } = await import("./roll-sheet-QjEC6mKB.mjs");
      m(this.actor, i, o);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const c = (n, l) => {
      var m;
      const i = n.dataset.itemId;
      if (!i) return;
      const o = this.actor.items.get(i);
      if (o) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = o.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), c(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), c(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const l = n.currentTarget, i = l.dataset.itemId;
      if (!i) return;
      const o = this.actor.items.get(i);
      if (!o) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await o.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const i = n.currentTarget.dataset.itemId;
      if (!i) return;
      const o = this.actor, m = o.items.get(i), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = o.system.weapons ?? {}, I = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.find((A) => {
          var y;
          return (((y = k[A]) == null ? void 0 : y.itemId) ?? "").trim() === i;
        });
        if (L) {
          const A = F.filter((y) => y !== L);
          f["system.weapons.slotOrder"] = A.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [i]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var L, A;
      const l = n.currentTarget, i = (l.dataset.itemId ?? "").trim();
      if (!i) return;
      const o = this.actor.items.get(i);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => k.includes(y)) : [], O = I.find((y) => {
        var E;
        return (((E = m[y]) == null ? void 0 : E.itemId) ?? "").trim() === i;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let y = I.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const E = new Set(I);
        if (!y) {
          const j = k.find((R) => !E.has(R));
          if (!j) return;
          y = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${y}.itemId`]: i,
          [`system.weapons.${y}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${y}.damage`]: ((L = o == null ? void 0 : o.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((A = o == null ? void 0 : o.system) == null ? void 0 : A.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (O) {
        const y = I.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const l = n.currentTarget;
      if (l.disabled) return;
      const i = l.closest(".karakter-microchip-slot-select-wrap"), o = i == null ? void 0 : i.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && i && i.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var y;
      n.preventDefault();
      const l = n.currentTarget, i = l.closest(".karakter-microchip-slot-select-wrap"), o = i == null ? void 0 : i.querySelector(".karakter-microchip-slot-display"), m = o == null ? void 0 : o.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), k = (l.dataset.itemName ?? ((y = l.textContent) == null ? void 0 : y.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (l.dataset.itemImg ?? "").trim(), O = i == null ? void 0 : i.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = k);
      let F = i == null ? void 0 : i.querySelector(".karakter-microchip-slot-thumb");
      I ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", o == null || o.insertBefore(F, O)), F.src = I, F.style.display = "") : F && F.remove(), i == null || i.classList.remove("karakter-microchip-slot-open");
      const L = f ? this.actor.items.get(f) : null, A = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      f && (A[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (n) => {
      const l = n.currentTarget.dataset.slot;
      if (!l) return;
      const i = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: i });
    }), t.find(".karakter-microchip-slot").each((n, l) => {
      const i = l.dataset.slot;
      l.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, i)), l.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, i));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const i = l.dataset.slot;
      i && (l.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, i)), l.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const i = l.dataset.area;
      i && (l.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, i)), l.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var k;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.area, i = n.currentTarget.dataset.itemId;
      if (!l || !i) return;
      const o = this.actor.system.abilities ?? {}, f = (Array.isArray((k = o[l]) == null ? void 0 : k.items) ? o[l].items.slice() : []).filter((I) => I !== i);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const i = n.currentTarget.dataset.itemId;
      if (!i) return;
      const o = this.actor.items.get(i);
      (m = o == null ? void 0 : o.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const i = n.currentTarget.dataset.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, i = (l.dataset.itemId ?? "").trim();
      if (!i) return;
      const o = this.actor.items.get(i);
      if (!o || o.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await o.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, k = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${i}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const l = n.currentTarget, i = (l.dataset.itemId ?? "").trim();
      if (!i) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Pancél" && o.type !== "Pajzs" || await o.update({ "system.equipped": l.checked });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var L, A;
      const l = n.currentTarget, i = (l.dataset.itemId ?? "").trim();
      if (!i) return;
      const o = this.actor.items.get(i);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((y) => k.includes(y)) : [], O = I.find((y) => {
        var E;
        return (((E = m[y]) == null ? void 0 : E.itemId) ?? "").trim() === i;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let y = I.find((j) => {
          var R;
          return !((R = m[j]) != null && R.itemId);
        });
        const E = new Set(I);
        if (!y) {
          const j = k.find((R) => !E.has(R));
          if (!j) return;
          y = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${y}.itemId`]: i,
          [`system.weapons.${y}.name`]: o.name ?? "",
          [`system.weapons.${y}.damage`]: ((L = o.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((A = o.system) == null ? void 0 : A.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (O) {
        const y = I.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const i = n.currentTarget.dataset.itemId;
      if (!i) return;
      const o = this.actor, m = o.items.get(i), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const k = o.system.weapons ?? {}, I = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.find((A) => {
          var y;
          return (((y = k[A]) == null ? void 0 : y.itemId) ?? "").trim() === i;
        });
        if (L) {
          const A = F.filter((y) => y !== L);
          f["system.weapons.slotOrder"] = A.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [i]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const i = this.actor.items.get(l);
      !i || i.type !== "Pancél" && i.type !== "Pajzs" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (n) => {
      var i, o;
      if (n.preventDefault(), n.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((o = (i = this.actor.system) == null ? void 0 : i.gear) == null ? void 0 : o.generalItems) ? [...this.actor.system.gear.generalItems] : [];
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
      var o, m;
      n.preventDefault();
      const l = parseInt(n.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const i = Array.isArray((m = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      i.splice(l, 1), await this.actor.update({ "system.gear.generalItems": i });
    });
    const d = this, p = (n) => {
      var o, m, f, k;
      if (!n) return;
      const l = d._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const i = ((m = (o = l.system) == null ? void 0 : o.resources) == null ? void 0 : m.currentHealth) != null || ((k = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : k.hitLocations) != null;
      d.actor.update(l).then(() => {
        i && setTimeout(() => d.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, h = (n) => {
      var l, i, o;
      return n && (((i = (l = d.element) == null ? void 0 : l.contains) == null ? void 0 : i.call(l, n)) || d.id && ((o = n.closest) == null ? void 0 : o.call(n, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const i = l.tagName;
      if (i !== "INPUT" && i !== "TEXTAREA" && i !== "SELECT") return;
      const o = l.form;
      h(o) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(o));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, h;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let w;
      b.type === "checkbox" ? w = b.checked : b.type === "number" ? w = b.value === "" ? 0 : Number(b.value) : w = b.value ?? "", foundry.utils.setProperty(e, b.name, w);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, r = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const b of c) {
      const w = ((h = a[b]) == null ? void 0 : h.value) ?? 0, n = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, C._healthStatusFromRatio(n, w));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, r, c, d, p, h, b, w, n;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const i of Object.values(e))
          if (typeof i == "string" && i.includes(".") && i.startsWith("Item.")) {
            l = i;
            break;
          }
      }
      if (l) {
        const i = await fromUuid(l);
        if (i && i.documentName === "Item" && (i.type === "Kepesseg" || i.type === "ability")) {
          let o = i.id;
          if (((a = i.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
            o = ((r = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : r.id) ?? o;
          }
          const m = (((c = i.system) == null ? void 0 : c.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
          if (m === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": o,
              "system.abilities.faji.name": i.name
            });
            return;
          }
          if (m === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": o,
              "system.abilities.hatter.name": i.name
            });
            return;
          }
          const k = m === "active" ? "active" : "passive", I = Array.isArray((d = f[k]) == null ? void 0 : d.items) ? f[k].items.slice() : Array.isArray(f[k]) ? f[k].slice() : [];
          I.includes(o) || I.push(o), await this.actor.update({ [`system.abilities.${k}.items`]: I });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const i of Object.values(e))
          if (typeof i == "string" && i.includes(".") && i.startsWith("Item.")) {
            l = i;
            break;
          }
      }
      if (l) {
        const i = await fromUuid(l);
        if (i && i.documentName === "Item" && i.type === "Fegyver") {
          const o = this.actor, m = ((h = i.parent) == null ? void 0 : h.id) !== o.id;
          let f = i.id;
          if (m) {
            const k = foundry.utils.mergeObject(i.toObject(), { system: { ...i.toObject().system ?? {}, equipped: !1 } });
            f = ((b = (await o.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : b.id) ?? f;
          }
          if (m) {
            const k = ((w = o.system) == null ? void 0 : w.weapons) ?? {}, I = (k.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((A) => O.includes(A)) : [], L = F.filter((A) => {
              var y;
              return (((y = k[A]) == null ? void 0 : y.itemId) ?? "").trim() === f;
            });
            if (L.length > 0) {
              const y = {
                "system.weapons.slotOrder": F.filter((E) => !L.includes(E)).join(",")
              };
              for (const E of L)
                y[`system.weapons.${E}.itemId`] = "", y[`system.weapons.${E}.name`] = "", y[`system.weapons.${E}.damage`] = "", y[`system.weapons.${E}.bonus`] = "";
              await o.update(y);
            }
          }
          return;
        }
        if (i && i.documentName === "Item" && (i.type === "Pajzs" || i.type === "Pancél")) {
          const o = this.actor;
          if (((n = i.parent) == null ? void 0 : n.id) !== o.id) {
            const m = foundry.utils.mergeObject(i.toObject(), { system: { ...i.toObject().system ?? {}, equipped: !1 } });
            await o.createEmbeddedDocuments("Item", [m]);
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var r, c, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, h, b, w, n;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = s.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const r = await fromUuid(a.uuid);
    if (!r || r.type !== "Fegyver") return;
    if (((b = r.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const c = r.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((w = r.system) == null ? void 0 : w.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = r.system) == null ? void 0 : n.bonus) ?? ""
    }), await r.update({ "system.equipped": !0 });
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
    var h, b;
    s.preventDefault(), (h = s.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = s.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const r = this.actor.items.contents.slice().sort((w, n) => {
      const l = typeof w.sort == "number" ? w.sort : 0, i = typeof n.sort == "number" ? n.sort : 0;
      return l - i;
    }).map((w) => w.id), c = r.indexOf(t), d = r.indexOf(e);
    if (c === -1 || d === -1) return;
    r.splice(c, 1), r.splice(d, 0, t);
    const p = r.map((w, n) => ({
      _id: w,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var a, r, c;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var b, w, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", a = Number(((w = e.system) == null ? void 0 : w.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = r ? `<p>${r}</p>` : "", h = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: h,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, r;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    let r = a.id;
    if (((d = a.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const h = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      r = ((p = (await this.actor.createEmbeddedDocuments("Item", [h]))[0]) == null ? void 0 : p.id) ?? r;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: r,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, h, b, w;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let r = a.id;
    if (((h = a.parent) == null ? void 0 : h.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      r = ((b = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : b.id) ?? r;
    }
    const c = this.actor.system.abilities ?? {}, d = Array.isArray((w = c[e]) == null ? void 0 : w.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    d.includes(r) || d.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var r, c, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, h, b, w;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = s.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const r = await fromUuid(a.uuid);
    if (!r || r.type !== "microchip") return;
    let c = r.id;
    ((b = r.parent) == null ? void 0 : b.id) !== this.actor.id && (c = ((w = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : w.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let r = Number(a) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? r -= 6 : c === 2 && (r -= 3);
    const p = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, h = new Roll(p);
    await h.evaluate({ async: !0 });
    const b = h.total >= 18 ? "critical" : h.total <= 3 ? "fumble" : null, w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: w
    });
  }
  async _rollMorale() {
    var r;
    const s = Number(((r = this.actor.system.resources) == null ? void 0 : r.morale) ?? 0) || 0;
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, r = this.actor.items.filter((I) => I.type === "Fegyver");
    let c = null;
    t.itemId && (c = r.find((I) => I.id === t.itemId) ?? null);
    const d = c && c.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((k = c == null ? void 0 : c.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", w = Number(a[b] || 0) || 0, n = p + w, i = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, o = new Roll(i);
    await o.evaluate({ async: !0 });
    const m = o.total >= 18 ? "critical" : o.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, h, b, w, n, l, i, o, m, f;
    const t = this.actor;
    if (!t) return;
    let a = ((h = (p = t.items).get) == null ? void 0 : h.call(p, s)) ?? ((w = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : w.call(b, (k) => k.id === s));
    if (!a || a.type !== "Fegyver") return;
    let r = (((n = a.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (i = ui.notifications) == null ? void 0 : i.warn) == null || f.call(i, ((m = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : m.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(r);
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
    const e = this, t = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, a = (r) => {
      var c, d, p;
      return r && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, h;
      const c = ((d = r.target) == null ? void 0 : d.form) ?? ((h = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, a = (r) => {
      var c, d, p;
      return r && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, h;
      const c = ((d = r.target) == null ? void 0 : d.form) ?? ((h = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, a = (r) => {
      var c, d, p;
      return r && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, h;
      const c = ((d = r.target) == null ? void 0 : d.form) ?? ((h = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (r) => {
      var d, p, h;
      const c = ((d = r.target) == null ? void 0 : d.form) ?? ((h = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, a = (r) => {
      var c, d, p;
      return r && (((d = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : d.call(c, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, h;
      const c = ((d = r.target) == null ? void 0 : d.form) ?? ((h = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (r) => {
      var p;
      const c = r.target;
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
  var s, e, t, a, r;
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
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", me, {
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
  Hooks.on("updateActor", (c, d, p, h) => {
    var I, O, F, L, A;
    const b = c == null ? void 0 : c.id;
    if (!b) return;
    const w = document.activeElement, n = w && (w.tagName === "INPUT" && w.type !== "checkbox" && w.type !== "radio" || w.tagName === "TEXTAREA" || w.isContentEditable), l = [], i = (I = game.actors) == null ? void 0 : I.get(b);
    i != null && i.apps && l.push(...Array.from(i.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const y of o)
      ((O = y.document) == null ? void 0 : O.id) !== b || ((F = y.document) == null ? void 0 : F.documentName) !== "Actor" || ((L = y.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || l.includes(y) || l.push(y);
    if (n && l.some((y) => {
      const E = (y == null ? void 0 : y.form) ?? (y == null ? void 0 : y.element);
      return E && E.contains(w);
    })) return;
    const f = (A = game.votv) == null ? void 0 : A._lastKarakterSheetBlurSave, k = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const y of l)
        !(y != null && y.rendered) || typeof y.render != "function" || y.id !== k && y.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var a, r, c, d, p, h;
      if (!((r = (a = N.target) == null ? void 0 : a.closest) != null && r.call(a, "#actors"))) return;
      const s = (d = (c = N.target) == null ? void 0 : c.closest) == null ? void 0 : d.call(c, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((h = game.actors) != null && h.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var c, d;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, a = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = a ? (d = game.actors) == null ? void 0 : d.get(a) : null;
  !r || r.type !== "Karakter" || N.updateSource({
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
  var r, c, d;
  const t = (c = (r = N.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : c.resultType;
  if (!t) return;
  const a = (d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
export {
  me as V
};
//# sourceMappingURL=vacuum-of-the-void-UtJ_0xPI.mjs.map
