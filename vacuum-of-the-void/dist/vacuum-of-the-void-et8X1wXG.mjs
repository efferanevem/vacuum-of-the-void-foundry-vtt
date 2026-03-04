var bt = Object.defineProperty;
var wt = Object.getPrototypeOf;
var vt = Reflect.get;
var kt = (C, i, e) => i in C ? bt(C, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[i] = e;
var K = (C, i, e) => kt(C, typeof i != "symbol" ? i + "" : i, e);
var N = (C, i, e) => vt(wt(C), e, i);
const { HTMLField: It, NumberField: T, SchemaField: L, StringField: h, BooleanField: U, ArrayField: le } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new T({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new L({
        health: new L({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new L({
          head: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new L({
          head: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new L({
          head: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new L({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new L({
        defense: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new L({
        deception: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new L({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new L({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new L({
            name: new h({ required: !1, blank: !0, initial: "" }),
            quantity: new T({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new le(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new le(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
        biography: new It({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: qt } = foundry.data.fields;
class Tt extends St {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new qt({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Ot, NumberField: $t, StringField: se } = foundry.data.fields;
class Dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Ot({ required: !1, initial: !1 }),
      type: new se({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new se({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new se({ required: !1, blank: !0, initial: "" }),
      damage: new se({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new se({ required: !1, blank: !0, initial: "" }),
      special: new se({ required: !1, blank: !0, initial: "" }),
      quantity: new se({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: _t, StringField: ce } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new _t({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ce({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ce({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new ce({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ce({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ye, StringField: Qe } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Qe({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Qe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new ye({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ye({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ye({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: At, StringField: Je } = foundry.data.fields;
class Xe extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Je({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Je({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new At({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ze } = foundry.data.fields;
class Ct extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ze({ required: !1, blank: !0, initial: "" }),
      quantity: new Ze({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Nt } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Nt({ required: !1, blank: !0, initial: "" })
    };
  }
}
var et, tt, it, st;
const P = class P extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var s, r, a, c;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((c = i.querySelector) == null ? void 0 : c.call(i, ".window-content")) ?? null;
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
    var d;
    const t = (d = game.votv) == null ? void 0 : d._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const r = this.element, a = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (r) {
      c.scrollState = this._saveScrollState(r);
      const m = document.activeElement, f = a.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && g && (c.focus = {
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
    const y = this.element, b = this.form ?? this.element, v = c.scrollState, n = c.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", u = () => {
      var m, f;
      if (this._applyScrollState(y, v), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((m = b.querySelector) == null ? void 0 : m.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (l || n) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const r = Math.floor(s / 3), a = Math.floor(2 * s / 3);
    return t <= r ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, r;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var c;
        return a.type === "Pancel" && ((c = a.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const c = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, r;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var c;
        return a.type === "Pancel" && ((c = a.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const c = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var v, n, l, u, d, m, f, g, S;
    const e = i ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.resources) ?? {}, r = ((d = (u = s.hitLocations) == null ? void 0 : u.legs) == null ? void 0 : d.value) ?? 0, a = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, c = P._healthStatusFromRatio(a, r), p = Number(((S = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    c === 0 ? y = 0 : c === 1 ? y = -6 : c === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var a, c, p, y;
    const e = i ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, c, p, y;
    const e = P.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, s = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return P._healthStatusFromRatio(r, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var c, p, y, b;
    const t = P.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((c = i == null ? void 0 : i.system) == null ? void 0 : c.resources) ?? {}, r = ((y = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return P._healthStatusFromRatio(a, r);
  }
  async _prepareContext(i) {
    var Ae, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze, We;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ne = (Ce = (Ae = this.actor.system) == null ? void 0 : Ae.resources) == null ? void 0 : Ce.stress) == null ? void 0 : Ne.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, r = s.hitLocations ?? {}, a = s.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of c) {
      const k = ((Ee = r[o]) == null ? void 0 : Ee.value) ?? 0, I = a[o] ?? 0;
      e.computedHealthStatus[o] = P._healthStatusFromRatio(I, k);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((o) => (Number(a[o]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, n = Number((($e = (Pe = this.actor.system) == null ? void 0 : Pe.combat) == null ? void 0 : $e.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = n;
    const u = this._getTotalArmorSpeedPenalty();
    l += u, e.effectiveGivenSpeed = l;
    const m = (Number(((je = (xe = this.actor.system) == null ? void 0 : xe.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = P.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [o, k] of Object.entries(f)) {
      const I = e.computedHealthStatus[k];
      e.skillHealthStatus[o] = I, e.skillDisabled[o] = I === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const g = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (g.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], A = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, D = A && typeof A == "object" && !Array.isArray(A) ? A : {}, w = (((Ke = D.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), E = (((Re = D.slot2) == null ? void 0 : Re.itemId) ?? "").trim(), x = (((Ue = D.slot3) == null ? void 0 : Ue.itemId) ?? "").trim(), ut = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, k) => {
      const I = typeof o.sort == "number" ? o.sort : 0, q = typeof k.sort == "number" ? k.sort : 0;
      return I - q;
    }).map((o) => {
      var X, ee, te, Z, V, ne;
      const k = o.type === "Fegyver", I = o.type === "MikroChip";
      let q = 0, _ = "", M = null;
      for (let ie = 0; ie < F.length; ie++) {
        const re = F[ie];
        if ((((X = g[re]) == null ? void 0 : X.itemId) ?? "") === o.id) {
          q = ie + 1, _ = ((ee = g[re]) == null ? void 0 : ee.bonus) ?? "", M = re;
          break;
        }
      }
      let R = null;
      I && (w === o.id ? R = "slot1" : E === o.id ? R = "slot2" : x === o.id && (R = "slot3"));
      const ae = k && ((te = o.system) != null && te.damage) ? o.system.damage : "", Q = k && typeof ((Z = o.system) == null ? void 0 : Z.range) == "string" ? (o.system.range || "").trim() : "", J = M ? Number((V = g[M]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: k,
        slotAssignment: q,
        slotBonus: _,
        slotKey: M,
        microchipSlotKey: R,
        isEquipped: !!(M || R),
        damage: ae,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ne = o.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = ut;
    const ue = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).filter((o) => o.type === "Fegyver"), Ie = ue.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = Ie;
    const Se = "— Nincs fegyver —", dt = F.filter((o) => {
      const I = ((g[o] ?? {}).itemId ?? "").trim();
      return I ? !!ue.find((_) => _.id === I) : !1;
    });
    e.weaponSlots = dt.map((o, k) => {
      const I = g[o] ?? {}, q = (I.itemId ?? "").trim(), _ = Ie.find((M) => M.id === q);
      return {
        slotKey: o,
        itemId: q,
        slotNum: k + 1,
        displayName: (_ == null ? void 0 : _.name) || I.name || Se,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const mt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, pt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((o) => {
      var ie, re, Ye;
      const k = o.id;
      let I = null, q = {};
      for (const pe of F)
        if ((((ie = g[pe]) == null ? void 0 : ie.itemId) ?? "").trim() === k) {
          I = pe, q = g[pe] ?? {};
          break;
        }
      const _ = !!I, M = ((re = o.system) == null ? void 0 : re.equipped) !== void 0 && ((Ye = o.system) == null ? void 0 : Ye.equipped) !== null ? !!o.system.equipped : _, R = (o == null ? void 0 : o.system) ?? {}, ae = typeof R.range == "string" ? (R.range || "").trim() : "", Q = R.type ?? "", J = (mt[Q] ?? Q) || "—", X = R.size ?? "", ee = (pt[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = R.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: I ?? "",
        itemId: k,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? Se,
        img: (o == null ? void 0 : o.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (M ? "0" : "—"),
        damage: q.damage ?? R.damage ?? "",
        rangeStr: ae || "—",
        typeLabel: J,
        typeAndSize: te,
        quantity: ne,
        quantityDisplay: Z ? ne : "—",
        isProjectile: Z,
        equipped: M,
        special: (R.special ?? "").trim() || "—"
      };
    });
    const ft = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Pancel");
    e.armorTable = ft.map((o) => {
      var q, _;
      const k = (o == null ? void 0 : o.system) ?? {}, I = ((q = o.system) == null ? void 0 : q.equipped) !== void 0 && ((_ = o.system) == null ? void 0 : _.equipped) !== null ? !!o.system.equipped : !1;
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        protectionBonus: (k.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (k.speedPenalty ?? "").toString().trim() || "—",
        level: (k.level ?? "").toString().trim() || "—",
        special: (k.special ?? k.other ?? "").toString().trim() || "—",
        equipped: I
      };
    });
    const yt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = yt.map((o) => {
      const k = (o == null ? void 0 : o.system) ?? {}, I = (k.description ?? "").trim(), q = I ? I.length > 60 ? I.slice(0, 57) + "…" : I : "—", _ = k.quantity != null ? String(k.quantity).trim() : "1";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        quantity: _,
        description: q
      };
    });
    const de = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((o) => o.type === "MikroChip"), oe = de.map((o) => ({ id: o.id, name: o.name, img: o.img })), qe = "— Nincs Mikro-Chip —", Te = ["slot1", "slot2", "slot3"], me = (o) => {
      var I, q, _;
      const k = [];
      return o !== 1 && k.push((((I = D.slot1) == null ? void 0 : I.itemId) ?? "").trim()), o !== 2 && k.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), o !== 3 && k.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), k.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((o) => !me(1).includes(o.id)), e.microchipItemsSlot2 = oe.filter((o) => !me(2).includes(o.id)), e.microchipItemsSlot3 = oe.filter((o) => !me(3).includes(o.id)), e.microchipSlots = Te.map((o) => {
      const k = D[o] ?? {}, I = (k.itemId ?? "").trim(), q = de.find((_) => _.id === I);
      return {
        slotKey: o,
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || k.name || qe,
        img: (q == null ? void 0 : q.img) || "",
        active: k.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const k = `slot${o}`, I = D[k] ?? {}, q = (I.itemId ?? "").trim(), _ = oe.find((M) => M.id === q);
      e[`microchip${o}ItemId`] = q, e[`microchip${o}DisplayName`] = (_ == null ? void 0 : _.name) || I.name || qe, e[`microchip${o}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = de.map((o) => {
      var X, ee, te, Z;
      const k = o.id;
      let I = null;
      for (const V of Te)
        if ((((X = D[V]) == null ? void 0 : X.itemId) ?? "").trim() === k) {
          I = V;
          break;
        }
      const q = !!I, _ = ((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.abilityType) ?? "", M = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", R = _ === "active", ae = Number((te = o == null ? void 0 : o.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Q = (((Z = o == null ? void 0 : o.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: k,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: M,
        description: J,
        kp: ae,
        isActive: R,
        slotKey: I ?? "",
        equipped: q
      };
    });
    const Oe = this.actor.system.abilities ?? {}, gt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).map((o) => {
      var k, I, q;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((k = o.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((I = o.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((q = o.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), De = new Map(gt.map((o) => [o.id, o])), ht = "— Nincs képesség —", _e = (o) => {
      const k = Oe[o] ?? {}, I = (k.itemId ?? "").trim(), q = I ? De.get(I) : null, _ = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || k.name || ht,
        img: (q == null ? void 0 : q.img) || "",
        description: _,
        kp: M
      };
    };
    e.abilityFajiSlot = _e("faji"), e.abilityHatterSlot = _e("hatter");
    const Le = (o) => {
      const k = Oe[o];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, Fe = (o) => o.map((k) => {
      const I = De.get(k);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Fe(Le("passive")), e.abilityActiveList = Fe(Le("active")), e;
  }
  _attachFrameListeners(i) {
    var b, v;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const u = (n.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-CV4bEHr2.mjs");
      d(this.actor, u);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var d, m, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let u = (l.dataset.itemId ?? "").trim();
      if (!u) {
        const g = (l.dataset.slot ?? "").trim();
        if (!g) return;
        u = (((((m = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : m.weapons) ?? {})[g] ?? {}).itemId ?? "").trim();
      }
      u && await this._rollWeaponDamage(u, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var d;
      const l = n ? n.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const u = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const r = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    r && s({ currentTarget: r }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
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
      const l = n.currentTarget, u = l.dataset.skill, d = ((f = l.textContent) == null ? void 0 : f.trim()) || u, { openRollSheetForSkill: m } = await import("./roll-sheet-CV4bEHr2.mjs");
      m(this.actor, u, d);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const a = (n, l) => {
      var m;
      const u = n.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (d) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = d.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const l = n.currentTarget, u = l.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await d.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor, m = d.items.get(u), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const g = d.system.weapons ?? {}, S = (g.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], A = F.find((D) => {
          var w;
          return (((w = g[D]) == null ? void 0 : w.itemId) ?? "").trim() === u;
        });
        if (A) {
          const D = F.filter((w) => w !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await d.update(f), await d.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var A, D;
      const l = n.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var E;
        return (((E = m[w]) == null ? void 0 : E.itemId) ?? "").trim() === u;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((x) => {
          var j;
          return !((j = m[x]) != null && j.itemId);
        });
        const E = new Set(S);
        if (!w) {
          const x = g.find((j) => !E.has(j));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: u,
          [`system.weapons.${w}.name`]: (d == null ? void 0 : d.name) ?? "",
          [`system.weapons.${w}.damage`]: ((A = d == null ? void 0 : d.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = d == null ? void 0 : d.system) == null ? void 0 : D.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await d.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const l = n.currentTarget;
      if (l.disabled) return;
      const u = l.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && u && u.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const l = n.currentTarget, u = l.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display"), m = d == null ? void 0 : d.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), g = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (l.dataset.itemImg ?? "").trim(), O = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = g);
      let F = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-thumb");
      S ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", d == null || d.insertBefore(F, O)), F.src = S, F.style.display = "") : F && F.remove(), u == null || u.classList.remove("karakter-microchip-slot-open");
      const A = f ? this.actor.items.get(f) : null, D = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      f && (D[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var g, S;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u || u.type !== "MikroChip") return;
      const d = ((S = (g = this.actor.system) == null ? void 0 : g.gear) == null ? void 0 : S.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = d[O]) == null ? void 0 : F.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const l = n.currentTarget.dataset.slot;
      if (!l) return;
      const u = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: u }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, l) => {
      const u = l.dataset.slot;
      l.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, u));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const u = l.dataset.slot;
      u && (l.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const u = l.dataset.area;
      u && (l.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var g;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.area, u = n.currentTarget.dataset.itemId;
      if (!l || !u) return;
      const d = this.actor.system.abilities ?? {}, f = (Array.isArray((g = d[l]) == null ? void 0 : g.items) ? d[l].items.slice() : []).filter((S) => S !== u);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      (m = d == null ? void 0 : d.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const u = n.currentTarget.dataset.itemId;
      u && await this._postAbilityToChat(u);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const l = n.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var A, D;
      const l = n.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var E;
        return (((E = m[w]) == null ? void 0 : E.itemId) ?? "").trim() === u;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((x) => {
          var j;
          return !((j = m[x]) != null && j.itemId);
        });
        const E = new Set(S);
        if (!w) {
          const x = g.find((j) => !E.has(j));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: u,
          [`system.weapons.${w}.name`]: d.name ?? "",
          [`system.weapons.${w}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = d.system) == null ? void 0 : D.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((E) => E !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await d.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor, m = d.items.get(u), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const g = d.system.weapons ?? {}, S = (g.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], A = F.find((D) => {
          var w;
          return (((w = g[D]) == null ? void 0 : w.itemId) ?? "").trim() === u;
        });
        if (A) {
          const D = F.filter((w) => w !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await d.update(f), await d.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const l = n.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Targy") return;
      const m = (l.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Targy" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const c = this, p = (n) => {
      var d, m, f, g;
      if (!n) return;
      const l = c._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const u = ((m = (d = l.system) == null ? void 0 : d.resources) == null ? void 0 : m.currentHealth) != null || ((g = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : g.hitLocations) != null;
      c.actor.update(l).then(() => {
        u && setTimeout(() => c.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (n) => {
      var l, u, d;
      return n && (((u = (l = c.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, n)) || c.id && ((d = n.closest) == null ? void 0 : d.call(n, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const u = l.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const d = l.form;
      y(d) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: c.id, at: Date.now() }), p(d));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var c, p, y;
    const e = {};
    for (const b of i.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const v = ((y = s[b]) == null ? void 0 : y.value) ?? 0, n = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, P._healthStatusFromRatio(n, v));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, r, a, c, p, y, b, v, n, l, u;
    if (e) {
      let d = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!d && typeof e == "object") {
        for (const m of Object.values(e))
          if (typeof m == "string" && m.includes(".") && m.startsWith("Item.")) {
            d = m;
            break;
          }
      }
      if (d) {
        const m = await fromUuid(d);
        if (m && m.documentName === "Item" && (m.type === "Kepesseg" || m.type === "ability")) {
          let f = m.id;
          if (((s = m.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(m.toObject(), { type: "Kepesseg" });
            f = ((r = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : r.id) ?? f;
          }
          const g = (((a = m.system) == null ? void 0 : a.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (g === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": m.name
            });
            return;
          }
          if (g === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": m.name
            });
            return;
          }
          const O = g === "active" ? "active" : "passive", F = Array.isArray((c = S[O]) == null ? void 0 : c.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
          F.includes(f) || F.push(f), await this.actor.update({ [`system.abilities.${O}.items`]: F });
          return;
        }
      }
    }
    if (e) {
      let d = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!d && typeof e == "object") {
        for (const m of Object.values(e))
          if (typeof m == "string" && m.includes(".") && m.startsWith("Item.")) {
            d = m;
            break;
          }
      }
      if (d) {
        const m = await fromUuid(d);
        if (m && m.documentName === "Item" && m.type === "Fegyver") {
          const f = this.actor, g = ((y = m.parent) == null ? void 0 : y.id) !== f.id;
          let S = m.id;
          if (g) {
            const O = foundry.utils.mergeObject(m.toObject(), { system: { ...m.toObject().system ?? {}, equipped: !1 } });
            S = ((b = (await f.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : b.id) ?? S;
          }
          if (g) {
            const O = ((v = f.system) == null ? void 0 : v.weapons) ?? {}, F = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = F ? F.split(/\s*,\s*/).filter((E) => A.includes(E)) : [], w = D.filter((E) => {
              var x;
              return (((x = O[E]) == null ? void 0 : x.itemId) ?? "").trim() === S;
            });
            if (w.length > 0) {
              const x = {
                "system.weapons.slotOrder": D.filter((j) => !w.includes(j)).join(",")
              };
              for (const j of w)
                x[`system.weapons.${j}.itemId`] = "", x[`system.weapons.${j}.name`] = "", x[`system.weapons.${j}.damage`] = "", x[`system.weapons.${j}.bonus`] = "";
              await f.update(x);
            }
          }
          return;
        }
        if (m && m.documentName === "Item" && m.type === "Pancel") {
          const f = this.actor;
          if (((n = m.parent) == null ? void 0 : n.id) !== f.id) {
            const g = foundry.utils.mergeObject(m.toObject(), { system: { ...m.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [g]);
          }
          return;
        }
        if (m && m.documentName === "Item" && m.type === "MikroChip") {
          const f = this.actor;
          ((l = m.parent) == null ? void 0 : l.id) !== f.id && await f.createEmbeddedDocuments("Item", [m.toObject()]);
          return;
        }
        if (m && m.documentName === "Item" && m.type === "Targy") {
          const f = this.actor;
          ((u = m.parent) == null ? void 0 : u.id) !== f.id && await f.createEmbeddedDocuments("Item", [m.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var r, a, c;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var c, p, y, b, v, n;
    i.preventDefault(), i.stopPropagation(), (c = i.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const r = await fromUuid(s.uuid);
    if (!r || r.type !== "Fegyver") return;
    if (((b = r.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const a = r.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((v = r.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = r.system) == null ? void 0 : n.bonus) ?? ""
    }), await r.update({ "system.equipped": !0 });
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
    var y, b;
    i.preventDefault(), (y = i.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = i.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const r = this.actor.items.contents.slice().sort((v, n) => {
      const l = typeof v.sort == "number" ? v.sort : 0, u = typeof n.sort == "number" ? n.sort : 0;
      return l - u;
    }).map((v) => v.id), a = r.indexOf(t), c = r.indexOf(e);
    if (a === -1 || c === -1) return;
    r.splice(a, 1), r.splice(c, 0, t);
    const p = r.map((v, n) => ({
      _id: v,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(i) {
    var s, r, a;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var b, v, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${c}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, r;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var a, c, p;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let r = s.id;
    if (((c = s.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      r = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? r;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: r,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var p, y, b, v;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let r = s.id;
    if (((y = s.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      r = ((b = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : b.id) ?? r;
    }
    const a = this.actor.system.abilities ?? {}, c = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    c.includes(r) || c.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(i, e) {
    var r, a, c;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var c, p, y, b, v;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const r = await fromUuid(s.uuid);
    if (!r || r.type !== "MikroChip") return;
    let a = r.id;
    ((b = r.parent) == null ? void 0 : b.id) !== this.actor.id && (a = ((v = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : v.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let r = Number(s) || 0;
    const a = this._getSkillHealthStatus(i);
    a === 1 ? r -= 6 : a === 2 && (r -= 3);
    const p = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const b = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var r;
    const i = Number(((r = this.actor.system.resources) == null ? void 0 : r.morale) ?? 0) || 0;
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
    var g;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, r = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = r.find((S) => S.id === t.itemId) ?? null);
    const c = a && a.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((g = a == null ? void 0 : a.system) == null ? void 0 : g.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(s[b] || 0) || 0, n = p + v, u = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const m = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, y, b, v, n, l, u, d, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((y = (p = t.items).get) == null ? void 0 : y.call(p, i)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (g) => g.id === i));
    if (!s || s.type !== "Fegyver") return;
    let r = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (u = ui.notifications) == null ? void 0 : u.warn) == null || f.call(u, ((m = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : m.call(d, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
};
K(P, "PARTS", foundry.utils.mergeObject(N(P, P, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), K(P, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(P, P, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((et = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((tt = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : tt.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((st = (it = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) == null ? void 0 : st.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
K(P, "BODY_PART_BY_SKILL", {
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
let ge = P;
var rt;
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidWeaponSheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(H, "PARTS", foundry.utils.mergeObject(N(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), K(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((rt = N(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !1 })
}));
let he = H;
var at;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidShieldSheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(B, "PARTS", foundry.utils.mergeObject(N(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), K(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = N(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
}));
let be = B;
var nt;
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidMicrochipSheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(G, "PARTS", foundry.utils.mergeObject(N(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), K(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((nt = N(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
}));
let we = G;
var ot;
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidAbilitySheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (r) => {
      var p;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const c = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
K(z, "PARTS", foundry.utils.mergeObject(N(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), K(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ot = N(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !0 })
}));
let ve = z;
var lt;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidTargySheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(W, "PARTS", foundry.utils.mergeObject(N(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), K(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((lt = N(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !1 })
}));
let ke = W;
var ct;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidEgyebSheet save failed", c));
    }, s = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(Y, "PARTS", foundry.utils.mergeObject(N(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), K(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ct = N(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = Y;
const Et = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, s, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Tt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Dt, CONFIG.Item.dataModels.Pancel = Lt, CONFIG.Item.dataModels.MikroChip = Ft, CONFIG.Item.dataModels.Kepesseg = Xe, CONFIG.Item.dataModels.ability = Xe, CONFIG.Item.dataModels.Targy = Ct, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  });
  const C = 500;
  Hooks.on("updateActor", (a, c, p, y) => {
    var S, O, F, A, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const v = document.activeElement, n = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], u = (S = game.actors) == null ? void 0 : S.get(b);
    u != null && u.apps && l.push(...Array.from(u.apps));
    const d = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of d)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = w.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (n && l.some((w) => {
      const E = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return E && E.contains(v);
    })) return;
    const f = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, g = f && Date.now() - f.at < C ? f.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== g && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (C) => {
      var s, r, a, c, p, y;
      if (!((r = (s = C.target) == null ? void 0 : s.closest) != null && r.call(s, "#actors"))) return;
      const i = (c = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : c.call(a, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, i, e) => {
  var a, c;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, s = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = s ? (c = game.actors) == null ? void 0 : c.get(s) : null;
  !r || r.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Et,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, i, e) => {
  var r, a, c;
  const t = (a = (r = C.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const s = (c = i == null ? void 0 : i.querySelector) == null ? void 0 : c.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-et8X1wXG.mjs.map
