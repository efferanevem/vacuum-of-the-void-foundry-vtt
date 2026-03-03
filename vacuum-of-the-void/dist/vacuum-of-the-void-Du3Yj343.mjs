var Qe = Object.defineProperty;
var Ve = Object.getPrototypeOf;
var et = Reflect.get;
var tt = (C, r, e) => r in C ? Qe(C, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[r] = e;
var B = (C, r, e) => tt(C, typeof r != "symbol" ? r + "" : r, e);
var K = (C, r, e) => et(Ve(C), e, r);
const { HTMLField: rt, NumberField: q, SchemaField: L, StringField: f, BooleanField: R, ArrayField: le } = foundry.data.fields;
class st extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new L({
        health: new L({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new L({
          head: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new L({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new L({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new L({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new L({
        defense: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new L({
        deception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new L({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new L({
            name: new f({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new f({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new f({ required: !1, blank: !0, initial: "" }),
            level: new f({ required: !1, blank: !0, initial: "" }),
            other: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new L({
            name: new f({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new le(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new le(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
        biography: new rt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: me, SchemaField: it } = foundry.data.fields;
class at extends st {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new it({
        body: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: mt, StringField: Q } = foundry.data.fields;
class nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
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
const { NumberField: pe, StringField: Re } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Re({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Re({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new pe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new pe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new pe({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: lt, StringField: He } = foundry.data.fields;
class ct extends foundry.abstract.TypeDataModel {
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
      kp: new lt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Ue, Be, Ge, ze;
const j = class j extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
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
  _getScrollContainers(r) {
    var s, a, n, u;
    if (!r) return { form: null, windowContent: null };
    const e = ((s = r.querySelector) == null ? void 0 : s.call(r, "form.votv.karakter-sheet")) ?? ((a = r.querySelector) == null ? void 0 : a.call(r, "form.votv")) ?? null, t = ((n = r.querySelector) == null ? void 0 : n.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(r) {
    const { form: e, windowContent: t } = this._getScrollContainers(r), s = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (s.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (s.windowScrollTop = t.scrollTop), s;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(r, e) {
    if (!r || !e) return;
    const { form: t, windowContent: s } = this._getScrollContainers(r);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && s && (s.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(r = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, n = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, g = n.contains(m), v = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      g && v && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const h = this.element, w = this.form ?? this.element, b = u.scrollState, i = u.focus, o = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", l = () => {
      var m, g;
      if (this._applyScrollState(h, b), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const v = ((m = w.querySelector) == null ? void 0 : m.call(w, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (g = w.querySelector) == null ? void 0 : g.call(w, `[name="${CSS.escape(i.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = i.selectionStart ?? 0, v.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(h, b);
    };
    return (o || i) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const a = Math.floor(s / 3), n = Math.floor(2 * s / 3);
    return t <= a ? 1 : t <= n ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var w, b, i, o, l, c, m, g, v;
    const e = r ?? this.form ?? this.element;
    let t = (w = e == null ? void 0 : e.querySelector) == null ? void 0 : w.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((i = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : i.resources) ?? {}, a = ((l = (o = s.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : l.value) ?? 0, n = ((c = s.currentHealth) == null ? void 0 : c.legs) ?? 0, u = j._healthStatusFromRatio(n, a), p = Number(((v = (g = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : g.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let h;
    u === 0 ? h = 0 : u === 1 ? h = -6 : u === 2 ? h = -3 : h = p, t.textContent = String(h);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var n, u, p, h;
    const e = j.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, s = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((h = t.currentHealth) == null ? void 0 : h[e]) ?? 0;
    return j._healthStatusFromRatio(a, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var u, p, h, w;
    const t = j.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((u = r == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, a = ((h = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : h.value) ?? 0, n = ((w = s.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return j._healthStatusFromRatio(n, a);
  }
  async _prepareContext(r) {
    var qe, Te, De, Oe, _e, Le, Ae, Fe, Ee, Ne, $e, Ce, xe, je, Pe, Me, Ke;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, a = s.hitLocations ?? {}, n = s.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const T = ((Oe = a[d]) == null ? void 0 : Oe.value) ?? 0, D = n[d] ?? 0;
      e.computedHealthStatus[d] = j._healthStatusFromRatio(D, T);
    }
    const p = (Number(n.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(n[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const b = e.computedHealthStatus.legs ?? 3, i = Number(((Le = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Le.givenSpeed) ?? 0) || 0;
    let o;
    b === 0 ? o = 0 : b === 1 ? o = -6 : b === 2 ? o = -3 : o = i, e.effectiveGivenSpeed = o, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: o } },
      { inplace: !1 }
    );
    const l = j.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, T] of Object.entries(l)) {
      const D = e.computedHealthStatus[T];
      e.skillHealthStatus[d] = D, e.skillDisabled[d] = D === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const c = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], g = (c.slotOrder ?? "").trim(), v = g ? g.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], I = (Ae = this.actor.system.gear) == null ? void 0 : Ae.microchips, k = I && typeof I == "object" && !Array.isArray(I) ? I : {}, O = (((Fe = k.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), _ = (((Ee = k.slot2) == null ? void 0 : Ee.itemId) ?? "").trim(), S = (((Ne = k.slot3) == null ? void 0 : Ne.itemId) ?? "").trim(), E = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, T) => {
      const D = typeof d.sort == "number" ? d.sort : 0, A = typeof T.sort == "number" ? T.sort : 0;
      return D - A;
    }).map((d) => {
      var ne, oe, ee, te, re, se;
      const T = d.type === "Fegyver", D = d.type === "microchip";
      let A = 0, F = "", x = null;
      for (let X = 0; X < v.length; X++) {
        const de = v[X];
        if ((((ne = c[de]) == null ? void 0 : ne.itemId) ?? "") === d.id) {
          A = X + 1, F = ((oe = c[de]) == null ? void 0 : oe.bonus) ?? "", x = de;
          break;
        }
      }
      let Y = null;
      D && (O === d.id ? Y = "slot1" : _ === d.id ? Y = "slot2" : S === d.id && (Y = "slot3"));
      const Z = T && ((ee = d.system) != null && ee.damage) ? d.system.damage : "", J = T && typeof ((te = d.system) == null ? void 0 : te.range) == "string" ? (d.system.range || "").trim() : "", V = x ? Number((re = c[x]) == null ? void 0 : re.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: T,
        slotAssignment: A,
        slotBonus: F,
        slotKey: x,
        microchipSlotKey: Y,
        isEquipped: !!(x || Y),
        damage: Z,
        rangeStr: J,
        slotBonusNum: V,
        quantity: Number(((se = d.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = E;
    const N = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((d) => d.type === "Fegyver"), P = N.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = P;
    const M = "— Nincs fegyver —", ce = v.filter((d) => {
      const D = ((c[d] ?? {}).itemId ?? "").trim();
      return D ? !!N.find((F) => F.id === D) : !1;
    });
    e.weaponSlots = ce.map((d, T) => {
      const D = c[d] ?? {}, A = (D.itemId ?? "").trim(), F = P.find((x) => x.id === A);
      return {
        slotKey: d,
        slotNum: T + 1,
        displayName: (F == null ? void 0 : F.name) || D.name || M,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const U = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, H = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = N.map((d) => {
      var se;
      const T = d.id;
      let D = null, A = {};
      for (const X of v)
        if ((((se = c[X]) == null ? void 0 : se.itemId) ?? "").trim() === T) {
          D = X, A = c[X] ?? {};
          break;
        }
      const F = !!D, x = (d == null ? void 0 : d.system) ?? {}, Y = typeof x.range == "string" ? (x.range || "").trim() : "", Z = x.type ?? "", J = (U[Z] ?? Z) || "—", V = x.size ?? "", ne = (H[V] ?? V) || "", oe = [J, ne].filter(Boolean).join(", ") || J || "—", ee = J === "Lövedékes", te = x.quantity, re = te != null ? String(te).trim() : "1";
      return {
        slotKey: D ?? "",
        itemId: T,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? M,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(A.bonus ?? "").trim() || (F ? "0" : "—"),
        damage: A.damage ?? x.damage ?? "",
        rangeStr: Y || "—",
        typeLabel: J,
        typeAndSize: oe,
        quantity: re,
        quantityDisplay: ee ? re : "—",
        isProjectile: ee,
        equipped: F,
        special: (x.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((Pe = (je = this.actor.system) == null ? void 0 : je.gear) == null ? void 0 : Pe.generalItems) ? this.actor.system.gear.generalItems : [];
    const ie = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "microchip"), ae = ie.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var Z, J;
      const T = `slot${d}`, D = k[T] ?? {}, A = (D.itemId ?? "").trim(), F = ie.find((V) => V.id === A), x = ((Z = F == null ? void 0 : F.system) == null ? void 0 : Z.abilityType) ?? "", Y = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: T,
        itemId: A,
        name: (F == null ? void 0 : F.name) ?? D.name ?? we,
        typeLabel: Y,
        description: (((J = F == null ? void 0 : F.system) == null ? void 0 : J.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", ue = (d) => {
      const T = [];
      return d !== 1 && T.push(O), d !== 2 && T.push(_), d !== 3 && T.push(S), T;
    };
    e.microchipItemsSlot1 = ae.filter((d) => !ue(1).includes(d.id)), e.microchipItemsSlot2 = ae.filter((d) => !ue(2).includes(d.id)), e.microchipItemsSlot3 = ae.filter((d) => !ue(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const T = `slot${d}`, D = k[T] ?? {}, A = (D.itemId ?? "").trim(), F = ae.find((x) => x.id === A);
      e[`microchip${d}ItemId`] = A, e[`microchip${d}DisplayName`] = (F == null ? void 0 : F.name) || D.name || we, e[`microchip${d}Img`] = (F == null ? void 0 : F.img) || "", e[`microchip${d}Active`] = D.active === !0;
    });
    const be = this.actor.system.abilities ?? {}, Xe = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).map((d) => {
      var T, D, A;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((T = d.system) == null ? void 0 : T.kind) ?? "passive",
        description: ((D = d.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((A = d.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), ke = new Map(Xe.map((d) => [d.id, d])), Ze = "— Nincs képesség —", ve = (d) => {
      const T = be[d] ?? {}, D = (T.itemId ?? "").trim(), A = D ? ke.get(D) : null, F = (A == null ? void 0 : A.description) ?? "", x = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: D,
        displayName: (A == null ? void 0 : A.name) || T.name || Ze,
        img: (A == null ? void 0 : A.img) || "",
        description: F,
        kp: x
      };
    };
    e.abilityFajiSlot = ve("faji"), e.abilityHatterSlot = ve("hatter");
    const Ie = (d) => {
      const T = be[d];
      return T ? Array.isArray(T == null ? void 0 : T.items) ? T.items : Array.isArray(T) ? T : [] : [];
    }, Se = (d) => d.map((T) => {
      const D = ke.get(T);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Se(Ie("passive")), e.abilityActiveList = Se(Ie("active")), e;
  }
  _attachFrameListeners(r) {
    var w, b;
    super._attachFrameListeners(r);
    const e = this.form ?? ((w = r == null ? void 0 : r.querySelector) == null ? void 0 : w.call(r, "form.votv.karakter-sheet")) ?? r ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const s = (i) => {
      var c;
      const o = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const l = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const a = (b = e.querySelector) == null ? void 0 : b.call(e, 'input[name="system.resources.stress.value"]');
    a && s({ currentTarget: a }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const o = i.currentTarget, l = o.dataset.skill, c = ((g = o.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-BxfjxVeR.mjs");
      m(this.actor, l, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const n = (i, o) => {
      var m;
      const l = i.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, l = o.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c) return;
      let m = Number(o.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), g = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = I ? I.split(/\s*,\s*/).filter((S) => k.includes(S)) : [], _ = O.find((S) => {
          var y;
          return (((y = v[S]) == null ? void 0 : y.itemId) ?? "").trim() === l;
        });
        if (_) {
          const S = O.filter((y) => y !== _);
          g["system.weapons.slotOrder"] = S.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await c.update(g), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const g = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      g && await this._rollWeaponDamage(g);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var O, _;
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.system.weapons ?? {}, m = (c.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = m ? m.split(/\s*,\s*/).filter((S) => g.includes(S)) : [], I = v.find((S) => {
        var y;
        return (((y = c[S]) == null ? void 0 : y.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let S = v.find((P) => {
          var M;
          return !((M = c[P]) != null && M.itemId);
        });
        const y = new Set(v);
        if (!S) {
          const P = g.find((M) => !y.has(M));
          if (!P) return;
          S = P, v.push(P);
        }
        const E = this.actor.items.get(l), N = {
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${S}.itemId`]: l,
          [`system.weapons.${S}.name`]: (E == null ? void 0 : E.name) ?? "",
          [`system.weapons.${S}.damage`]: ((O = E == null ? void 0 : E.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${S}.bonus`]: ((_ = E == null ? void 0 : E.system) == null ? void 0 : _.bonus) ?? ""
        };
        await this.actor.update(N);
      } else if (I) {
        const y = {
          "system.weapons.slotOrder": v.filter((E) => E !== I).join(",")
        };
        y[`system.weapons.${I}.itemId`] = "", y[`system.weapons.${I}.name`] = "", y[`system.weapons.${I}.damage`] = "", y[`system.weapons.${I}.bonus`] = "", await this.actor.update(y);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const l = o.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var y;
      i.preventDefault();
      const o = i.currentTarget, l = o.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const g = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((y = o.textContent) == null ? void 0 : y.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (o.dataset.itemImg ?? "").trim(), k = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      k && (k.textContent = v);
      let O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      I ? (O || (O = document.createElement("img"), O.className = "karakter-microchip-slot-thumb", O.alt = "", c == null || c.insertBefore(O, k)), O.src = I, O.style.display = "") : O && O.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, S = {
        [`system.gear.microchips.${m}.itemId`]: g,
        [`system.gear.microchips.${m}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (S[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(S);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const l = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const l = o.dataset.slot;
      o.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, l)), o.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, l));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const l = o.dataset.slot;
      l && (o.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, l)), o.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const l = o.dataset.area;
      l && (o.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, l)), o.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!o || !l) return;
      const c = this.actor.system.abilities ?? {}, g = (Array.isArray((v = c[o]) == null ? void 0 : v.items) ? c[o].items.slice() : []).filter((I) => I !== l);
      await this.actor.update({ [`system.abilities.${o}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = (o.value ?? "").trim();
      await c.update({ "system.quantity": m });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, S;
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, g = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = g ? g.split(/\s*,\s*/).filter((y) => v.includes(y)) : [], k = I.find((y) => {
        var E;
        return (((E = m[y]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
        if (k) return;
        let y = I.find((P) => {
          var M;
          return !((M = m[P]) != null && M.itemId);
        });
        const E = new Set(I);
        if (!y) {
          const P = v.find((M) => !E.has(M));
          if (!P) return;
          y = P, I.push(P);
        }
        const N = {
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${y}.itemId`]: l,
          [`system.weapons.${y}.name`]: c.name ?? "",
          [`system.weapons.${y}.damage`]: ((_ = c.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((S = c.system) == null ? void 0 : S.bonus) ?? ""
        };
        await this.actor.update(N);
      } else if (k) {
        const y = I.filter((E) => E !== k);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${k}.itemId`]: "",
          [`system.weapons.${k}.name`]: "",
          [`system.weapons.${k}.damage`]: "",
          [`system.weapons.${k}.bonus`]: ""
        });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), g = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = I ? I.split(/\s*,\s*/).filter((S) => k.includes(S)) : [], _ = O.find((S) => {
          var y;
          return (((y = v[S]) == null ? void 0 : y.itemId) ?? "").trim() === l;
        });
        if (_) {
          const S = O.filter((y) => y !== _);
          g["system.weapons.slotOrder"] = S.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await c.update(g), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(o, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var l, c, m, g;
      i.preventDefault();
      const o = i.currentTarget.dataset.gearArray;
      if (o === "armor") {
        const v = Array.isArray((c = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : c.armor) ? [...this.actor.system.gear.armor] : [];
        v.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": v });
      } else if (o === "generalItems") {
        const v = Array.isArray((g = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : g.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        v.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": v });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.slotKey;
      o && await this.actor.update({
        [`system.gear.microchips.${o}.itemId`]: "",
        [`system.gear.microchips.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(o, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const u = this, p = (i) => {
      var c, m, g, v;
      if (!i) return;
      const o = u._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const l = ((m = (c = o.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((v = (g = o.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(o).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, h = (i) => {
      var o, l, c;
      return i && (((l = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : l.call(o, i)) || u.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const o = i.target;
      if (!o || !o.form) return;
      const l = o.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const c = o.form;
      h(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var u, p, h;
    const e = {};
    for (const w of r.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      w.type === "checkbox" ? b = w.checked : w.type === "number" ? b = w.value === "" ? 0 : Number(w.value) : b = w.value ?? "", foundry.utils.setProperty(e, w.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, a = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const w of n) {
      const b = ((h = s[w]) == null ? void 0 : h.value) ?? 0, i = a[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, j._healthStatusFromRatio(i, b));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var n, u, p, h, w, b, i, o, l, c, m, g, v;
    const t = r.target, s = (n = t == null ? void 0 : t.closest) == null ? void 0 : n.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let I = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!I && typeof e == "object") {
        for (const k of Object.values(e))
          if (typeof k == "string" && k.includes(".") && k.startsWith("Item.")) {
            I = k;
            break;
          }
      }
      if (I) {
        const k = await fromUuid(I);
        if (k && k.documentName === "Item" && k.type === "ability") {
          let O = k.id;
          ((h = k.parent) == null ? void 0 : h.id) !== this.actor.id && (O = ((w = (await this.actor.createEmbeddedDocuments("Item", [k.toObject()]))[0]) == null ? void 0 : w.id) ?? O);
          const _ = (((b = k.system) == null ? void 0 : b.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (s) {
            const N = s.dataset.slot;
            if (N) {
              await this.actor.update({
                [`system.abilities.${N}.itemId`]: O,
                [`system.abilities.${N}.name`]: k.name
              });
              return;
            }
          } else if (a) {
            const N = a.dataset.area;
            if (N) {
              const P = Array.isArray((i = S[N]) == null ? void 0 : i.items) ? S[N].items.slice() : Array.isArray(S[N]) ? S[N].slice() : [];
              P.includes(O) || P.push(O), await this.actor.update({ [`system.abilities.${N}.items`]: P });
              return;
            }
          }
          if (_ === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": O,
              "system.abilities.faji.name": k.name
            });
            return;
          }
          if (_ === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": O,
              "system.abilities.hatter.name": k.name
            });
            return;
          }
          const y = _ === "active" ? "active" : "passive", E = Array.isArray((o = S[y]) == null ? void 0 : o.items) ? S[y].items.slice() : Array.isArray(S[y]) ? S[y].slice() : [];
          E.includes(O) || E.push(O), await this.actor.update({ [`system.abilities.${y}.items`]: E });
          return;
        }
      }
    }
    if (e) {
      let I = e.uuid ?? e.documentUuid ?? ((l = e.data) == null ? void 0 : l.uuid) ?? (typeof e == "string" ? e : null);
      if (!I && typeof e == "object") {
        for (const k of Object.values(e))
          if (typeof k == "string" && k.includes(".") && k.startsWith("Item.")) {
            I = k;
            break;
          }
      }
      if (I) {
        const k = await fromUuid(I);
        if (k && k.documentName === "Item" && k.type === "Fegyver") {
          const O = this.actor;
          let _ = k.id;
          ((c = k.parent) == null ? void 0 : c.id) !== O.id && (_ = ((m = (await O.createEmbeddedDocuments("Item", [k.toObject()]))[0]) == null ? void 0 : m.id) ?? _);
          const S = O.system.weapons ?? {}, y = (S.slotOrder ?? "").trim(), E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = y ? y.split(/\s*,\s*/).filter((U) => E.includes(U)) : [];
          if (N.find((U) => {
            var H;
            return (((H = S[U]) == null ? void 0 : H.itemId) ?? "").trim() === _;
          })) return;
          let M = N.find((U) => {
            var H;
            return !((H = S[U]) != null && H.itemId);
          });
          if (!M) {
            const U = new Set(N), H = E.find((ie) => !U.has(ie));
            if (!H) return;
            M = H, N.push(H);
          }
          const ce = {
            "system.weapons.slotOrder": N.join(","),
            [`system.weapons.${M}.itemId`]: _,
            [`system.weapons.${M}.name`]: k.name ?? "",
            [`system.weapons.${M}.damage`]: ((g = k.system) == null ? void 0 : g.damage) ?? "",
            [`system.weapons.${M}.bonus`]: ((v = k.system) == null ? void 0 : v.bonus) ?? ""
          };
          await O.update(ce);
          return;
        }
      }
    }
    return super._onDropItem(r, e);
  }
  _onWeaponSlotDragOver(r, e) {
    var a, n, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var p, h, w, b, i, o, l;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((h = r.dataTransfer) == null ? void 0 : h.getData("text/plain")) || ((w = r.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "Fegyver") return;
    let n = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (n = ((i = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : i.id) ?? n);
    const u = {
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((o = a.system) == null ? void 0 : o.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((l = a.system) == null ? void 0 : l.bonus) ?? ""
    };
    await this.actor.update(u);
  }
  _onInventoryDragHandleStart(r, e, t) {
    t && (r.dataTransfer && (r.dataTransfer.setData("text/plain", e), r.dataTransfer.effectAllowed = "move", typeof r.dataTransfer.setDragImage == "function" && r.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(r, e) {
    var s;
    const t = this._draggingInventoryItemId;
    !t || t === e || (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "move"), (s = r.currentTarget) == null || s.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(r, e) {
    var t;
    (t = r.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(r, e) {
    var h, w;
    r.preventDefault(), (h = r.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = r.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((b, i) => {
      const o = typeof b.sort == "number" ? b.sort : 0, l = typeof i.sort == "number" ? i.sort : 0;
      return o - l;
    }).map((b) => b.id), n = a.indexOf(t), u = a.indexOf(e);
    if (n === -1 || u === -1) return;
    a.splice(n, 1), a.splice(u, 0, t);
    const p = a.map((b, i) => ({
      _id: b,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var s, a, n;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (r.preventDefault(), (n = r.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  async _postAbilityToChat(r) {
    var w, b, i;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", s = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, a = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = a ? `<p>${a}</p>` : "", h = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: h,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var s, a;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(r, e) {
    var s;
    this._parseAbilityDrop(r) && (r.preventDefault(), (s = r.currentTarget) == null || s.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(r, e) {
    var n, u, p;
    r.preventDefault(), (n = r.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let a = s.id;
    ((u = s.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((p = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : p.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var s;
    this._parseAbilityDrop(r) && (r.preventDefault(), (s = r.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, h, w, b;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let a = s.id;
    ((h = s.parent) == null ? void 0 : h.id) !== this.actor.id && (a = ((w = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : w.id) ?? a);
    const n = this.actor.system.abilities ?? {}, u = Array.isArray((b = n[e]) == null ? void 0 : b.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(r, e) {
    var a, n, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var u, p, h, w, b;
    r.preventDefault(), (u = r.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = r.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "microchip") return;
    let n = a.id;
    ((w = a.parent) == null ? void 0 : w.id) !== this.actor.id && (n = ((b = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : b.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const s = (this.actor.system.skills ?? {})[r] ?? 0;
    let a = Number(s) || 0;
    const n = this._getSkillHealthStatus(r);
    n === 1 ? a -= 6 : n === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, h = new Roll(p);
    await h.evaluate({ async: !0 });
    const w = h.total >= 18 ? "critical" : h.total <= 3 ? "fumble" : null, b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: b
    });
  }
  async _rollMorale() {
    var a;
    const r = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
    if (r <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const s = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": s });
  }
  async _rollWeapon(r) {
    var v;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, s = this.actor.system.skills ?? {}, a = this.actor.items.filter((I) => I.type === "Fegyver");
    let n = null;
    t.itemId && (n = a.find((I) => I.id === t.itemId) ?? null);
    const u = n && n.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, w = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", b = Number(s[w] || 0) || 0, i = p + b, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, c = new Roll(l);
    await c.evaluate({ async: !0 });
    const m = c.total >= 18 ? "critical" : c.total <= 3 ? "fumble" : null, g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: g
    });
  }
  async _rollWeaponDamage(r) {
    var n;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "Fegyver") return;
    const t = (((n = e.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!t) return;
    const s = new Roll(t);
    await s.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
B(j, "PARTS", foundry.utils.mergeObject(K(j, j, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), B(j, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(j, j, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ue = K(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Be = K(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ze = (Ge = K(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : ze.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
B(j, "BODY_PART_BY_SKILL", {
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
let fe = j;
var We;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      s(n) && t(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    const e = await super._prepareContext(r) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
B(G, "PARTS", foundry.utils.mergeObject(K(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), B(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = K(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let ye = G;
var Ye;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      s(n) && t(n);
    }, e._votvInput = (a) => {
      var u, p, h;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      s(n) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(n), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
B(z, "PARTS", foundry.utils.mergeObject(K(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), B(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let ge = z;
var Je;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      s(n) && t(n);
    }, e._votvInput = (a) => {
      var p;
      const n = a.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const u = (n == null ? void 0 : n.form) ?? ((p = n == null ? void 0 : n.closest) == null ? void 0 : p.call(n, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
B(W, "PARTS", foundry.utils.mergeObject(K(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), B(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = K(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let he = W;
const ut = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, s, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = at, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = nt, CONFIG.Item.dataModels.microchip = ot, CONFIG.Item.dataModels.ability = ct, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", fe, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const C = 500;
  Hooks.on("updateActor", (n, u, p, h) => {
    var I, k, O, _, S;
    const w = n == null ? void 0 : n.id;
    if (!w) return;
    const b = document.activeElement, i = b && (b.tagName === "INPUT" && b.type !== "checkbox" && b.type !== "radio" || b.tagName === "TEXTAREA" || b.isContentEditable), o = [], l = (I = game.actors) == null ? void 0 : I.get(w);
    l != null && l.apps && o.push(...Array.from(l.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const y of c)
      ((k = y.document) == null ? void 0 : k.id) !== w || ((O = y.document) == null ? void 0 : O.documentName) !== "Actor" || ((_ = y.constructor) == null ? void 0 : _.name) !== "VoidKarakterSheet" || o.includes(y) || o.push(y);
    if (i && o.some((y) => {
      const E = (y == null ? void 0 : y.form) ?? (y == null ? void 0 : y.element);
      return E && E.contains(b);
    })) return;
    const g = (S = game.votv) == null ? void 0 : S._lastKarakterSheetBlurSave, v = g && Date.now() - g.at < C ? g.appId : null;
    setTimeout(() => {
      for (const y of o)
        !(y != null && y.rendered) || typeof y.render != "function" || y.id !== v && y.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (C) => {
      var s, a, n, u, p, h;
      if (!((a = (s = C.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const r = (u = (n = C.target) == null ? void 0 : n.closest) == null ? void 0 : u.call(n, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((h = game.actors) != null && h.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, r, e) => {
  var n, u;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, s = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = s ? (u = game.actors) == null ? void 0 : u.get(s) : null;
  !a || a.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": ut,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, r, e) => {
  var a, n, u;
  const t = (n = (a = C.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : n.resultType;
  if (!t) return;
  const s = (u = r == null ? void 0 : r.querySelector) == null ? void 0 : u.call(r, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  fe as V
};
//# sourceMappingURL=vacuum-of-the-void-Du3Yj343.mjs.map
