var kt = Object.defineProperty;
var It = Object.getPrototypeOf;
var St = Reflect.get;
var Tt = (C, s, e) => s in C ? kt(C, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[s] = e;
var K = (C, s, e) => Tt(C, typeof s != "symbol" ? s + "" : s, e);
var E = (C, s, e) => St(It(C), e, s);
const { HTMLField: qt, NumberField: q, SchemaField: L, StringField: b, BooleanField: U, ArrayField: le } = foundry.data.fields;
class Ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new b({ required: !1, blank: !0, initial: "" }),
        player: new b({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new b({ required: !1, blank: !0, initial: "" }),
        assignment: new b({ required: !1, blank: !0, initial: "" }),
        subAssignment: new b({ required: !1, blank: !0, initial: "" }),
        background: new b({ required: !1, blank: !0, initial: "" }),
        languages: new b({ required: !1, blank: !0, initial: "" })
      }),
      resources: new L({
        health: new L({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new L({
          head: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
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
        slotOrder: new b({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new b({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new L({
            name: new b({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new b({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new b({ required: !1, blank: !0, initial: "" }),
            level: new b({ required: !1, blank: !0, initial: "" }),
            other: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new L({
            name: new b({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new le(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new le(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
        biography: new qt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Dt } = foundry.data.fields;
class _t extends Ot {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Dt({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Lt, NumberField: jt, StringField: ie } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Lt({ required: !1, initial: !1 }),
      type: new ie({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ie({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ie({ required: !1, blank: !0, initial: "" }),
      damage: new ie({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ie({ required: !1, blank: !0, initial: "" }),
      special: new ie({ required: !1, blank: !0, initial: "" }),
      quantity: new ie({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: At, StringField: ce } = foundry.data.fields;
class Ct extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new At({ required: !1, initial: !1 }),
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
const { NumberField: ye, StringField: Xe } = foundry.data.fields;
class Et extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Xe({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Xe({
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
const { NumberField: Nt, StringField: Ze } = foundry.data.fields;
class Ve extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ze({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Ze({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Nt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: et } = foundry.data.fields;
class Pt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new et({ required: !1, blank: !0, initial: "" }),
      quantity: new et({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: $t } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $t({ required: !1, blank: !0, initial: "" })
    };
  }
}
var tt, st, it, at;
const P = class P extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var i, a, r, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    var d;
    const t = (d = game.votv) == null ? void 0 : d._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, r = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (a) {
      l.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = r.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && g && (l.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const y = this.element, h = this.form ?? this.element, w = l.scrollState, n = l.focus, c = typeof (w == null ? void 0 : w.formScrollTop) == "number" || typeof (w == null ? void 0 : w.windowScrollTop) == "number", u = () => {
      var m, f;
      if (this._applyScrollState(y, w), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((m = h.querySelector) == null ? void 0 : m.call(h, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = h.querySelector) == null ? void 0 : f.call(h, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, w);
    };
    return (c || n) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), r = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const l = String(((a = r.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(l);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const l = String(((a = r.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(l);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var w, n, c, u, d, m, f, g, S;
    const e = s ?? this.form ?? this.element;
    let t = (w = e == null ? void 0 : e.querySelector) == null ? void 0 : w.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((c = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : c.resources) ?? {}, a = ((d = (u = i.hitLocations) == null ? void 0 : u.legs) == null ? void 0 : d.value) ?? 0, r = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, l = P._healthStatusFromRatio(r, a), p = Number(((S = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    l === 0 ? y = 0 : l === 1 ? y = -6 : l === 2 ? y = -3 : y = p;
    const h = this._getTotalArmorSpeedPenalty();
    y += h, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var r, l, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((y = (p = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, l, p, y;
    const e = P.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, i = ((p = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : p.value) ?? 0, a = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return P._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, p, y, h;
    const t = P.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, a = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, r = ((h = i.currentHealth) == null ? void 0 : h[t]) ?? 0;
    return P._healthStatusFromRatio(r, a);
  }
  async _prepareContext(s) {
    var Ce, Ee, Ne, Pe, $e, xe, Me, je, Ke, Re, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ne = (Ee = (Ce = this.actor.system) == null ? void 0 : Ce.resources) == null ? void 0 : Ee.stress) == null ? void 0 : Ne.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, r = i.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of l) {
      const I = ((Pe = a[o]) == null ? void 0 : Pe.value) ?? 0, k = r[o] ?? 0;
      e.computedHealthStatus[o] = P._healthStatusFromRatio(k, I);
    }
    const p = (Number(r.head) || 0) === 0, h = ["torso", "arms", "legs"].filter((o) => (Number(r[o]) || 0) === 0).length;
    e.showDeathSkull = p || h >= 2;
    const w = e.computedHealthStatus.legs ?? 3, n = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let c;
    w === 0 ? c = 0 : w === 1 ? c = -6 : w === 2 ? c = -3 : c = n;
    const u = this._getTotalArmorSpeedPenalty();
    c += u, e.effectiveGivenSpeed = c;
    const m = (Number(((je = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: c, givenProtection: m } },
      { inplace: !1 }
    );
    const f = P.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [o, I] of Object.entries(f)) {
      const k = e.computedHealthStatus[I];
      e.skillHealthStatus[o] = k, e.skillDisabled[o] = k === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const g = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (g.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], A = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, D = A && typeof A == "object" && !Array.isArray(A) ? A : {}, v = (((Re = D.slot1) == null ? void 0 : Re.itemId) ?? "").trim(), N = (((Ue = D.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = D.slot3) == null ? void 0 : He.itemId) ?? "").trim(), mt = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, I) => {
      const k = typeof o.sort == "number" ? o.sort : 0, T = typeof I.sort == "number" ? I.sort : 0;
      return k - T;
    }).map((o) => {
      var X, ee, te, Z, V, ne;
      const I = o.type === "Fegyver", k = o.type === "MikroChip";
      let T = 0, _ = "", j = null;
      for (let se = 0; se < F.length; se++) {
        const ae = F[se];
        if ((((X = g[ae]) == null ? void 0 : X.itemId) ?? "") === o.id) {
          T = se + 1, _ = ((ee = g[ae]) == null ? void 0 : ee.bonus) ?? "", j = ae;
          break;
        }
      }
      let R = null;
      k && (v === o.id ? R = "slot1" : N === o.id ? R = "slot2" : x === o.id && (R = "slot3"));
      const re = I && ((te = o.system) != null && te.damage) ? o.system.damage : "", Q = I && typeof ((Z = o.system) == null ? void 0 : Z.range) == "string" ? (o.system.range || "").trim() : "", J = j ? Number((V = g[j]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: I,
        slotAssignment: T,
        slotBonus: _,
        slotKey: j,
        microchipSlotKey: R,
        isEquipped: !!(j || R),
        damage: re,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ne = o.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = mt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Fegyver"), Se = ue.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = Se;
    const Te = "— Nincs fegyver —", pt = F.filter((o) => {
      const k = ((g[o] ?? {}).itemId ?? "").trim();
      return k ? !!ue.find((_) => _.id === k) : !1;
    });
    e.weaponSlots = pt.map((o, I) => {
      const k = g[o] ?? {}, T = (k.itemId ?? "").trim(), _ = Se.find((j) => j.id === T);
      return {
        slotKey: o,
        itemId: T,
        slotNum: I + 1,
        displayName: (_ == null ? void 0 : _.name) || k.name || Te,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(k.bonus) || 0,
        damage: k.damage ?? ""
      };
    });
    const ft = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, yt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((o) => {
      var se, ae, Je;
      const I = o.id;
      let k = null, T = {};
      for (const pe of F)
        if ((((se = g[pe]) == null ? void 0 : se.itemId) ?? "").trim() === I) {
          k = pe, T = g[pe] ?? {};
          break;
        }
      const _ = !!k, j = ((ae = o.system) == null ? void 0 : ae.equipped) !== void 0 && ((Je = o.system) == null ? void 0 : Je.equipped) !== null ? !!o.system.equipped : _, R = (o == null ? void 0 : o.system) ?? {}, re = typeof R.range == "string" ? (R.range || "").trim() : "", Q = R.type ?? "", J = (ft[Q] ?? Q) || "—", X = R.size ?? "", ee = (yt[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = R.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: k ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? Te,
        img: (o == null ? void 0 : o.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: T.damage ?? R.damage ?? "",
        rangeStr: re || "—",
        typeLabel: J,
        typeAndSize: te,
        quantity: ne,
        quantityDisplay: Z ? ne : "—",
        isProjectile: Z,
        equipped: j,
        special: (R.special ?? "").trim() || "—"
      };
    });
    const gt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "Pancel");
    e.armorTable = gt.map((o) => {
      var T, _;
      const I = (o == null ? void 0 : o.system) ?? {}, k = ((T = o.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = o.system) == null ? void 0 : _.equipped) !== null ? !!o.system.equipped : !1;
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: k
      };
    });
    const ht = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = ht.map((o) => {
      const I = (o == null ? void 0 : o.system) ?? {}, k = (I.description ?? "").trim(), T = k ? k.length > 60 ? k.slice(0, 57) + "…" : k : "—", _ = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        quantity: _,
        description: T
      };
    });
    const bt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((o) => o.type === "Egyeb");
    e.egyebList = bt.map((o) => {
      const k = (((o == null ? void 0 : o.system) ?? {}).description ?? "").trim(), T = k ? k.length > 80 ? k.slice(0, 77) + "…" : k : "";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        description: T
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((o) => o.type === "MikroChip"), oe = de.map((o) => ({ id: o.id, name: o.name, img: o.img })), qe = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], me = (o) => {
      var k, T, _;
      const I = [];
      return o !== 1 && I.push((((k = D.slot1) == null ? void 0 : k.itemId) ?? "").trim()), o !== 2 && I.push((((T = D.slot2) == null ? void 0 : T.itemId) ?? "").trim()), o !== 3 && I.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((o) => !me(1).includes(o.id)), e.microchipItemsSlot2 = oe.filter((o) => !me(2).includes(o.id)), e.microchipItemsSlot3 = oe.filter((o) => !me(3).includes(o.id)), e.microchipSlots = Oe.map((o) => {
      const I = D[o] ?? {}, k = (I.itemId ?? "").trim(), T = de.find((_) => _.id === k);
      return {
        slotKey: o,
        itemId: k,
        displayName: (T == null ? void 0 : T.name) || I.name || qe,
        img: (T == null ? void 0 : T.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const I = `slot${o}`, k = D[I] ?? {}, T = (k.itemId ?? "").trim(), _ = oe.find((j) => j.id === T);
      e[`microchip${o}ItemId`] = T, e[`microchip${o}DisplayName`] = (_ == null ? void 0 : _.name) || k.name || qe, e[`microchip${o}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = de.map((o) => {
      var X, ee, te, Z;
      const I = o.id;
      let k = null;
      for (const V of Oe)
        if ((((X = D[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          k = V;
          break;
        }
      const T = !!k, _ = ((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.abilityType) ?? "", j = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", R = _ === "active", re = Number((te = o == null ? void 0 : o.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Q = (((Z = o == null ? void 0 : o.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: j,
        description: J,
        kp: re,
        isActive: R,
        slotKey: k ?? "",
        equipped: T
      };
    });
    const De = this.actor.system.abilities ?? {}, wt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((o) => {
      var I, k, T;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((I = o.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((k = o.system) == null ? void 0 : k.description) ?? "",
        kp: Number(((T = o.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), _e = new Map(wt.map((o) => [o.id, o])), vt = "— Nincs képesség —", Le = (o) => {
      const I = De[o] ?? {}, k = (I.itemId ?? "").trim(), T = k ? _e.get(k) : null, _ = (T == null ? void 0 : T.description) ?? "", j = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: k,
        displayName: (T == null ? void 0 : T.name) || I.name || vt,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: j
      };
    };
    e.abilityFajiSlot = Le("faji"), e.abilityHatterSlot = Le("hatter");
    const Fe = (o) => {
      const I = De[o];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, Ae = (o) => o.map((I) => {
      const k = _e.get(I);
      return k ? {
        id: k.id,
        name: k.name,
        img: k.img,
        description: k.description,
        kp: k.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Ae(Fe("passive")), e.abilityActiveList = Ae(Fe("active")), e;
  }
  _attachFrameListeners(s) {
    var h, w;
    super._attachFrameListeners(s);
    const e = this.form ?? ((h = s == null ? void 0 : s.querySelector) == null ? void 0 : h.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const u = (n.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-Ct-Om-qo.mjs");
      d(this.actor, u);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var d, m, f;
      n.preventDefault(), n.stopPropagation();
      const c = n.currentTarget;
      let u = (c.dataset.itemId ?? "").trim();
      if (!u) {
        const g = (c.dataset.slot ?? "").trim();
        if (!g) return;
        u = (((((m = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : m.weapons) ?? {})[g] ?? {}).itemId ?? "").trim();
      }
      u && await this._rollWeaponDamage(u, ((f = c.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (n) => {
      var d;
      const c = n ? n.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const u = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (w = e.querySelector) == null ? void 0 : w.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
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
      const c = n.currentTarget, u = c.dataset.skill, d = ((f = c.textContent) == null ? void 0 : f.trim()) || u, { openRollSheetForSkill: m } = await import("./roll-sheet-Ct-Om-qo.mjs");
      m(this.actor, u, d);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const r = (n, c) => {
      var m;
      const u = n.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (d) {
        if (n.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = d.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const c = n.currentTarget, u = c.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await d.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor, m = d.items.get(u), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const g = d.system.weapons ?? {}, S = (g.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], A = F.find((D) => {
          var v;
          return (((v = g[D]) == null ? void 0 : v.itemId) ?? "").trim() === u;
        });
        if (A) {
          const D = F.filter((v) => v !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await d.update(f), await d.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var A, D;
      const c = n.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((v) => g.includes(v)) : [], O = S.find((v) => {
        var N;
        return (((N = m[v]) == null ? void 0 : N.itemId) ?? "").trim() === u;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let v = S.find((x) => {
          var M;
          return !((M = m[x]) != null && M.itemId);
        });
        const N = new Set(S);
        if (!v) {
          const x = g.find((M) => !N.has(M));
          if (!x) return;
          v = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: u,
          [`system.weapons.${v}.name`]: (d == null ? void 0 : d.name) ?? "",
          [`system.weapons.${v}.damage`]: ((A = d == null ? void 0 : d.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((D = d == null ? void 0 : d.system) == null ? void 0 : D.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (O) {
        const v = S.filter((N) => N !== O);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await d.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const c = n.currentTarget;
      if (c.disabled) return;
      const u = c.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && u && u.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var v;
      n.preventDefault();
      const c = n.currentTarget, u = c.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display"), m = d == null ? void 0 : d.dataset.slot;
      if (!m) return;
      const f = (c.dataset.itemId ?? "").trim(), g = (c.dataset.itemName ?? ((v = c.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (c.dataset.itemImg ?? "").trim(), O = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display-text");
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
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "MikroChip") return;
      const d = ((S = (g = this.actor.system) == null ? void 0 : g.gear) == null ? void 0 : S.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = d[O]) == null ? void 0 : F.itemId) ?? "").trim() === c;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const c = n.currentTarget.dataset.slot;
      if (!c) return;
      const u = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: u }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, c) => {
      const u = c.dataset.slot;
      c.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, u)), c.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, u));
    }), t.find(".karakter-ability-slot-single").each((n, c) => {
      const u = c.dataset.slot;
      u && (c.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, u)), c.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, c) => {
      const u = c.dataset.area;
      u && (c.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, u)), c.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var g;
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.area, u = n.currentTarget.dataset.itemId;
      if (!c || !u) return;
      const d = this.actor.system.abilities ?? {}, f = (Array.isArray((g = d[c]) == null ? void 0 : g.items) ? d[c].items.slice() : []).filter((S) => S !== u);
      await this.actor.update({ [`system.abilities.${c}.items`]: f });
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
    }), t.on("click", ".karakter-item-chat", async (n) => {
      n.preventDefault();
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      d && (d.type === "Kepesseg" || d.type === "ability" ? await this._postAbilityToChat(u) : (d.type === "MikroChip" || d.type === "Egyeb") && await this._postItemToChat(u));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const c = n.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const c = n.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var A, D;
      const c = n.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((v) => g.includes(v)) : [], O = S.find((v) => {
        var N;
        return (((N = m[v]) == null ? void 0 : N.itemId) ?? "").trim() === u;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let v = S.find((x) => {
          var M;
          return !((M = m[x]) != null && M.itemId);
        });
        const N = new Set(S);
        if (!v) {
          const x = g.find((M) => !N.has(M));
          if (!x) return;
          v = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${v}.itemId`]: u,
          [`system.weapons.${v}.name`]: d.name ?? "",
          [`system.weapons.${v}.damage`]: ((A = d.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((D = d.system) == null ? void 0 : D.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (O) {
        const v = S.filter((N) => N !== O);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
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
          var v;
          return (((v = g[D]) == null ? void 0 : v.itemId) ?? "").trim() === u;
        });
        if (A) {
          const D = F.filter((v) => v !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await d.update(f), await d.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      !u || u.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const c = n.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Targy") return;
      const m = (c.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      !u || u.type !== "Targy" && u.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    });
    const l = this, p = (n) => {
      var d, m, f, g;
      if (!n) return;
      const c = l._getFormDataForUpdate(n);
      if (Object.keys(c).length === 0) return;
      const u = ((m = (d = c.system) == null ? void 0 : d.resources) == null ? void 0 : m.currentHealth) != null || ((g = (f = c.system) == null ? void 0 : f.resources) == null ? void 0 : g.hitLocations) != null;
      l.actor.update(c).then(() => {
        u && setTimeout(() => l.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (n) => {
      var c, u, d;
      return n && (((u = (c = l.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, n)) || l.id && ((d = n.closest) == null ? void 0 : d.call(n, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (n) => {
      const c = n.target;
      if (!c || !c.form) return;
      const u = c.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const d = c.form;
      y(d) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: l.id, at: Date.now() }), p(d));
    }, document.body.addEventListener("blur", l._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, p, y;
    const e = {};
    for (const h of s.elements) {
      if (!h.name || h.disabled || h.type === "radio" && !h.checked || h.name.startsWith("system.resources.healthStatus.")) continue;
      let w;
      h.type === "checkbox" ? w = h.checked : h.type === "number" ? w = h.value === "" ? 0 : Number(h.value) : w = h.value ?? "", foundry.utils.setProperty(e, h.name, w);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const h of r) {
      const w = ((y = i[h]) == null ? void 0 : y.value) ?? 0, n = a[h] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${h}`, P._healthStatusFromRatio(n, w));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, a, r, l, p, y, h, w, n, c, u;
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
          if (((i = m.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(m.toObject(), { type: "Kepesseg" });
            f = ((a = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : a.id) ?? f;
          }
          const g = (((r = m.system) == null ? void 0 : r.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
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
          const O = g === "active" ? "active" : "passive", F = Array.isArray((l = S[O]) == null ? void 0 : l.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
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
            S = ((h = (await f.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : h.id) ?? S;
          }
          if (g) {
            const O = ((w = f.system) == null ? void 0 : w.weapons) ?? {}, F = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = F ? F.split(/\s*,\s*/).filter((N) => A.includes(N)) : [], v = D.filter((N) => {
              var x;
              return (((x = O[N]) == null ? void 0 : x.itemId) ?? "").trim() === S;
            });
            if (v.length > 0) {
              const x = {
                "system.weapons.slotOrder": D.filter((M) => !v.includes(M)).join(",")
              };
              for (const M of v)
                x[`system.weapons.${M}.itemId`] = "", x[`system.weapons.${M}.name`] = "", x[`system.weapons.${M}.damage`] = "", x[`system.weapons.${M}.bonus`] = "";
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
          ((c = m.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [m.toObject()]);
          return;
        }
        if (m && m.documentName === "Item" && (m.type === "Targy" || m.type === "Egyeb")) {
          const f = this.actor;
          ((u = m.parent) == null ? void 0 : u.id) !== f.id && await f.createEmbeddedDocuments("Item", [m.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, r, l;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, p, y, h, w, n;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
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
    if (((h = a.parent) == null ? void 0 : h.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const r = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
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
    var y, h;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((h = s.dataTransfer) == null ? void 0 : h.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((w, n) => {
      const c = typeof w.sort == "number" ? w.sort : 0, u = typeof n.sort == "number" ? n.sort : 0;
      return c - u;
    }).map((w) => w.id), r = a.indexOf(t), l = a.indexOf(e);
    if (r === -1 || l === -1) return;
    a.splice(r, 1), a.splice(l, 0, t);
    const p = a.map((w, n) => ({
      _id: w,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, r;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
  async _postItemToChat(s) {
    var l, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((l = e.system) == null ? void 0 : l.description) ?? "").trim();
    let i;
    e.type === "MikroChip" ? i = ((((p = e.system) == null ? void 0 : p.abilityType) ?? "passive") === "active" ? "Aktív" : "Passzív") + " Mikro-Chip" : i = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${i}</p>
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var h, w, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((h = e.system) == null ? void 0 : h.kind) ?? "passive", i = Number(((w = e.system) == null ? void 0 : w.kp) ?? 0) || 0, a = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
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
    var r, l, p;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((l = i.parent) == null ? void 0 : l.id) !== this.actor.id) {
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
    var p, y, h, w;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((y = i.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((h = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : h.id) ?? a;
    }
    const r = this.actor.system.abilities ?? {}, l = Array.isArray((w = r[e]) == null ? void 0 : w.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    l.includes(a) || l.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, r, l;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, p, y, h, w;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "MikroChip") return;
    let r = a.id;
    ((h = a.parent) == null ? void 0 : h.id) !== this.actor.id && (r = ((w = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : w.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const r = this._getSkillHealthStatus(s);
    r === 1 ? a -= 6 : r === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const h = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: h } },
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
    var g;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((S) => S.type === "Fegyver");
    let r = null;
    t.itemId && (r = a.find((S) => S.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, h = (((g = r == null ? void 0 : r.system) == null ? void 0 : g.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", w = Number(i[h] || 0) || 0, n = p + w, u = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const m = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, h, w, n, c, u, d, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((w = (h = t.items.contents) == null ? void 0 : h.find) == null ? void 0 : w.call(h, (g) => g.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((n = i.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!a && e && (a = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (u = ui.notifications) == null ? void 0 : u.warn) == null || f.call(u, ((m = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : m.call(d, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(a);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
K(P, "PARTS", foundry.utils.mergeObject(E(P, P, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), K(P, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(P, P, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((tt = E(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((st = E(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : st.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((at = (it = E(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) == null ? void 0 : at.contentClasses) ?? [],
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidWeaponSheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
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
K(H, "PARTS", foundry.utils.mergeObject(E(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), K(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((rt = E(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !1 })
}));
let he = H;
var nt;
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidShieldSheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
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
K(B, "PARTS", foundry.utils.mergeObject(E(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), K(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((nt = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
}));
let be = B;
var ot;
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidMicrochipSheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
K(G, "PARTS", foundry.utils.mergeObject(E(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), K(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ot = E(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !1 })
}));
let we = G;
var lt;
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidAbilitySheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const l = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
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
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", !(t.name === "name" && typeof i == "string" && i.trim() === "") && foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
K(z, "PARTS", foundry.utils.mergeObject(E(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), K(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((lt = E(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !0 })
}));
let ve = z;
var ct;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidTargySheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
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
K(W, "PARTS", foundry.utils.mergeObject(E(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), K(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ct = E(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !1 })
}));
let ke = W;
var ut;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((l) => console.warn("VoidEgyebSheet save failed", l));
    }, i = (a) => {
      var r, l, p;
      return a && (((l = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : l.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var l, p, y;
      const r = ((l = a.target) == null ? void 0 : l.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(r) && t(r);
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
K(Y, "PARTS", foundry.utils.mergeObject(E(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), K(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ut = E(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Y;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = _t, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ft, CONFIG.Item.dataModels.Pancel = Ct, CONFIG.Item.dataModels.MikroChip = Et, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Pt, CONFIG.Item.dataModels.Egyeb = xt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
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
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ie, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const C = 500;
  Hooks.on("updateActor", (r, l, p, y) => {
    var S, O, F, A, D;
    const h = r == null ? void 0 : r.id;
    if (!h) return;
    const w = document.activeElement, n = w && (w.tagName === "INPUT" && w.type !== "checkbox" && w.type !== "radio" || w.tagName === "TEXTAREA" || w.isContentEditable), c = [], u = (S = game.actors) == null ? void 0 : S.get(h);
    u != null && u.apps && c.push(...Array.from(u.apps));
    const d = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const v of d)
      ((O = v.document) == null ? void 0 : O.id) !== h || ((F = v.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = v.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || c.includes(v) || c.push(v);
    if (n && c.some((v) => {
      const N = (v == null ? void 0 : v.form) ?? (v == null ? void 0 : v.element);
      return N && N.contains(w);
    })) return;
    const f = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, g = f && Date.now() - f.at < C ? f.appId : null;
    setTimeout(() => {
      for (const v of c)
        !(v != null && v.rendered) || typeof v.render != "function" || v.id !== g && v.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  var C, s;
  if (document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, l, p, y, h, w;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
      const t = (y = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "[data-document-id]"), i = (h = t == null ? void 0 : t.getAttribute) == null ? void 0 : h.call(t, "data-document-id");
      if (!i) return;
      const a = i.includes(".") ? i.split(".").pop() : i;
      a && ((w = game.actors) != null && w.get(a)) && (game.votv._dragSourceActorId = a);
    },
    !0
  ), (C = game.user) != null && C.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0)
    try {
      const e = game.scenes.createDocument ?? game.scenes.create;
      if (typeof e == "function") {
        const t = e.call(game.scenes, {
          name: "Default",
          width: 1920,
          height: 1080,
          background: { src: dt },
          backgroundColor: "#000000"
        });
        t && typeof t.catch == "function" && t.catch((i) => console.warn("Vacuum of the Void | Default scene creation failed:", i));
      }
    } catch (e) {
      console.warn("Vacuum of the Void | Default scene creation failed:", e);
    }
});
Hooks.on("preCreateToken", (C, s, e) => {
  var r, l;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, i = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (l = game.actors) == null ? void 0 : l.get(i) : null;
  !a || a.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": dt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, s, e) => {
  var a, r, l;
  const t = (r = (a = C.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!t) return;
  const i = (l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-Cm3-hAJe.mjs.map
