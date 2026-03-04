var vt = Object.defineProperty;
var kt = Object.getPrototypeOf;
var It = Reflect.get;
var St = (C, s, e) => s in C ? vt(C, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[s] = e;
var K = (C, s, e) => St(C, typeof s != "symbol" ? s + "" : s, e);
var N = (C, s, e) => It(kt(C), e, s);
const { HTMLField: qt, NumberField: T, SchemaField: L, StringField: h, BooleanField: U, ArrayField: le } = foundry.data.fields;
class Tt extends foundry.abstract.TypeDataModel {
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
        biography: new qt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Ot } = foundry.data.fields;
class Dt extends Tt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ot({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: _t, NumberField: Mt, StringField: ie } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new _t({ required: !1, initial: !1 }),
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
const { BooleanField: Ft, StringField: ce } = foundry.data.fields;
class At extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ft({ required: !1, initial: !1 }),
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
class Ct extends foundry.abstract.TypeDataModel {
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
class Et extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new et({ required: !1, blank: !0, initial: "" }),
      quantity: new et({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Pt } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Pt({ required: !1, blank: !0, initial: "" })
    };
  }
}
var tt, st, it, rt;
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
    var i, r, a, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
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
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const y = this.element, b = this.form ?? this.element, v = c.scrollState, o = c.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", u = () => {
      var m, f;
      if (this._applyScrollState(y, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const g = ((m = b.querySelector) == null ? void 0 : m.call(b, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(o.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = o.selectionStart ?? 0, g.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (l || o) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const r = Math.floor(i / 3), a = Math.floor(2 * i / 3);
    return t <= r ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var c;
        return a.type === "Pancel" && ((c = a.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const c = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var c;
        return a.type === "Pancel" && ((c = a.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const c = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, o, l, u, d, m, f, g, S;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, r = ((d = (u = i.hitLocations) == null ? void 0 : u.legs) == null ? void 0 : d.value) ?? 0, a = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, c = P._healthStatusFromRatio(a, r), p = Number(((S = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    c === 0 ? y = 0 : c === 1 ? y = -6 : c === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, c, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, c, p, y;
    const e = P.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, i = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return P._healthStatusFromRatio(r, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var c, p, y, b;
    const t = P.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((c = s == null ? void 0 : s.system) == null ? void 0 : c.resources) ?? {}, r = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return P._healthStatusFromRatio(a, r);
  }
  async _prepareContext(s) {
    var Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ee = (Ne = (Ce = this.actor.system) == null ? void 0 : Ce.resources) == null ? void 0 : Ne.stress) == null ? void 0 : Ee.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, r = i.hitLocations ?? {}, a = i.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const n of c) {
      const I = ((Pe = r[n]) == null ? void 0 : Pe.value) ?? 0, k = a[n] ?? 0;
      e.computedHealthStatus[n] = P._healthStatusFromRatio(k, I);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((n) => (Number(a[n]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const u = this._getTotalArmorSpeedPenalty();
    l += u, e.effectiveGivenSpeed = l;
    const m = (Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = P.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [n, I] of Object.entries(f)) {
      const k = e.computedHealthStatus[I];
      e.skillHealthStatus[n] = k, e.skillDisabled[n] = k === 0 ? " disabled" : "", e.skillHasHealthTint[n] = !0;
    }
    const g = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (g.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((n) => S.includes(n)) : [], A = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, D = A && typeof A == "object" && !Array.isArray(A) ? A : {}, w = (((Re = D.slot1) == null ? void 0 : Re.itemId) ?? "").trim(), E = (((Ue = D.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = D.slot3) == null ? void 0 : He.itemId) ?? "").trim(), dt = this.actor.items.contents.filter((n) => n.type !== "Kepesseg" && n.type !== "ability").slice().sort((n, I) => {
      const k = typeof n.sort == "number" ? n.sort : 0, q = typeof I.sort == "number" ? I.sort : 0;
      return k - q;
    }).map((n) => {
      var X, ee, te, Z, V, ne;
      const I = n.type === "Fegyver", k = n.type === "MikroChip";
      let q = 0, _ = "", M = null;
      for (let se = 0; se < F.length; se++) {
        const re = F[se];
        if ((((X = g[re]) == null ? void 0 : X.itemId) ?? "") === n.id) {
          q = se + 1, _ = ((ee = g[re]) == null ? void 0 : ee.bonus) ?? "", M = re;
          break;
        }
      }
      let R = null;
      k && (w === n.id ? R = "slot1" : E === n.id ? R = "slot2" : x === n.id && (R = "slot3"));
      const ae = I && ((te = n.system) != null && te.damage) ? n.system.damage : "", Q = I && typeof ((Z = n.system) == null ? void 0 : Z.range) == "string" ? (n.system.range || "").trim() : "", J = M ? Number((V = g[M]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: n.id,
        name: n.name,
        img: n.img,
        type: n.type,
        isWeapon: I,
        slotAssignment: q,
        slotBonus: _,
        slotKey: M,
        microchipSlotKey: R,
        isEquipped: !!(M || R),
        damage: ae,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ne = n.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = dt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((n) => n.type === "Fegyver"), Se = ue.map((n) => ({ id: n.id, name: n.name, img: n.img }));
    e.weaponItems = Se;
    const qe = "— Nincs fegyver —", mt = F.filter((n) => {
      const k = ((g[n] ?? {}).itemId ?? "").trim();
      return k ? !!ue.find((_) => _.id === k) : !1;
    });
    e.weaponSlots = mt.map((n, I) => {
      const k = g[n] ?? {}, q = (k.itemId ?? "").trim(), _ = Se.find((M) => M.id === q);
      return {
        slotKey: n,
        itemId: q,
        slotNum: I + 1,
        displayName: (_ == null ? void 0 : _.name) || k.name || qe,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(k.bonus) || 0,
        damage: k.damage ?? ""
      };
    });
    const pt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ft = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((n) => {
      var se, re, Je;
      const I = n.id;
      let k = null, q = {};
      for (const pe of F)
        if ((((se = g[pe]) == null ? void 0 : se.itemId) ?? "").trim() === I) {
          k = pe, q = g[pe] ?? {};
          break;
        }
      const _ = !!k, M = ((re = n.system) == null ? void 0 : re.equipped) !== void 0 && ((Je = n.system) == null ? void 0 : Je.equipped) !== null ? !!n.system.equipped : _, R = (n == null ? void 0 : n.system) ?? {}, ae = typeof R.range == "string" ? (R.range || "").trim() : "", Q = R.type ?? "", J = (pt[Q] ?? Q) || "—", X = R.size ?? "", ee = (ft[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = R.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: k ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (n == null ? void 0 : n.name) ?? qe,
        img: (n == null ? void 0 : n.img) ?? "",
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
    const yt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((n) => n.type === "Pancel");
    e.armorTable = yt.map((n) => {
      var q, _;
      const I = (n == null ? void 0 : n.system) ?? {}, k = ((q = n.system) == null ? void 0 : q.equipped) !== void 0 && ((_ = n.system) == null ? void 0 : _.equipped) !== null ? !!n.system.equipped : !1;
      return {
        itemId: n.id,
        actorId: this.actor.id,
        name: (n == null ? void 0 : n.name) ?? "—",
        img: (n == null ? void 0 : n.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: k
      };
    });
    const gt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((n) => n.type === "Targy");
    e.itemsTable = gt.map((n) => {
      const I = (n == null ? void 0 : n.system) ?? {}, k = (I.description ?? "").trim(), q = k ? k.length > 60 ? k.slice(0, 57) + "…" : k : "—", _ = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: n.id,
        actorId: this.actor.id,
        name: (n == null ? void 0 : n.name) ?? "—",
        img: (n == null ? void 0 : n.img) ?? "",
        quantity: _,
        description: q
      };
    });
    const ht = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((n) => n.type === "Egyeb");
    e.egyebList = ht.map((n) => {
      const k = (((n == null ? void 0 : n.system) ?? {}).description ?? "").trim(), q = k ? k.length > 80 ? k.slice(0, 77) + "…" : k : "";
      return {
        itemId: n.id,
        actorId: this.actor.id,
        name: (n == null ? void 0 : n.name) ?? "—",
        img: (n == null ? void 0 : n.img) ?? "",
        description: q
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((n) => n.type === "MikroChip"), oe = de.map((n) => ({ id: n.id, name: n.name, img: n.img })), Te = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], me = (n) => {
      var k, q, _;
      const I = [];
      return n !== 1 && I.push((((k = D.slot1) == null ? void 0 : k.itemId) ?? "").trim()), n !== 2 && I.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), n !== 3 && I.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((n) => !me(1).includes(n.id)), e.microchipItemsSlot2 = oe.filter((n) => !me(2).includes(n.id)), e.microchipItemsSlot3 = oe.filter((n) => !me(3).includes(n.id)), e.microchipSlots = Oe.map((n) => {
      const I = D[n] ?? {}, k = (I.itemId ?? "").trim(), q = de.find((_) => _.id === k);
      return {
        slotKey: n,
        itemId: k,
        displayName: (q == null ? void 0 : q.name) || I.name || Te,
        img: (q == null ? void 0 : q.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((n) => {
      const I = `slot${n}`, k = D[I] ?? {}, q = (k.itemId ?? "").trim(), _ = oe.find((M) => M.id === q);
      e[`microchip${n}ItemId`] = q, e[`microchip${n}DisplayName`] = (_ == null ? void 0 : _.name) || k.name || Te, e[`microchip${n}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = de.map((n) => {
      var X, ee, te, Z;
      const I = n.id;
      let k = null;
      for (const V of Oe)
        if ((((X = D[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          k = V;
          break;
        }
      const q = !!k, _ = ((ee = n == null ? void 0 : n.system) == null ? void 0 : ee.abilityType) ?? "", M = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", R = _ === "active", ae = Number((te = n == null ? void 0 : n.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(n.system.replaceCost) : 0, Q = (((Z = n == null ? void 0 : n.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (n == null ? void 0 : n.name) ?? "—",
        img: (n == null ? void 0 : n.img) ?? "",
        typeLabel: M,
        description: J,
        kp: ae,
        isActive: R,
        slotKey: k ?? "",
        equipped: q
      };
    });
    const De = this.actor.system.abilities ?? {}, bt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((n) => {
      var I, k, q;
      return {
        id: n.id,
        name: n.name,
        img: n.img,
        kind: ((I = n.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((k = n.system) == null ? void 0 : k.description) ?? "",
        kp: Number(((q = n.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), _e = new Map(bt.map((n) => [n.id, n])), wt = "— Nincs képesség —", Le = (n) => {
      const I = De[n] ?? {}, k = (I.itemId ?? "").trim(), q = k ? _e.get(k) : null, _ = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: k,
        displayName: (q == null ? void 0 : q.name) || I.name || wt,
        img: (q == null ? void 0 : q.img) || "",
        description: _,
        kp: M
      };
    };
    e.abilityFajiSlot = Le("faji"), e.abilityHatterSlot = Le("hatter");
    const Fe = (n) => {
      const I = De[n];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, Ae = (n) => n.map((I) => {
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
    var b, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const u = (o.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-CgHDPvxG.mjs");
      d(this.actor, u);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var d, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let u = (l.dataset.itemId ?? "").trim();
      if (!u) {
        const g = (l.dataset.slot ?? "").trim();
        if (!g) return;
        u = (((((m = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : m.weapons) ?? {})[g] ?? {}).itemId ?? "").trim();
      }
      u && await this._rollWeaponDamage(u, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (o) => {
      var d;
      const l = o ? o.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const u = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const r = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    r && i({ currentTarget: r }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      const l = o.currentTarget, u = l.dataset.skill, d = ((f = l.textContent) == null ? void 0 : f.trim()) || u, { openRollSheetForSkill: m } = await import("./roll-sheet-CgHDPvxG.mjs");
      m(this.actor, u, d);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const a = (o, l) => {
      var m;
      const u = o.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (d) {
        if (o.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = d.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const l = o.currentTarget, u = l.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await d.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const u = o.currentTarget.dataset.itemId;
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
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var A, D;
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
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
    }), t.on("click", ".karakter-microchip-slot-display", (o) => {
      o.preventDefault();
      const l = o.currentTarget;
      if (l.disabled) return;
      const u = l.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && u && u.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (o) => {
      var w;
      o.preventDefault();
      const l = o.currentTarget, u = l.closest(".karakter-microchip-slot-select-wrap"), d = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display"), m = d == null ? void 0 : d.dataset.slot;
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
    }), $(document).on("click.votv-microchip-dropdown", (o) => {
      $(o.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var g, S;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
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
    }), t.on("change", ".karakter-microchip-slot-active", async (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const u = o.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: u }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const u = l.dataset.slot;
      l.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, u));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const u = l.dataset.slot;
      u && (l.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const u = l.dataset.area;
      u && (l.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, u)), l.addEventListener("dragleave", (d) => {
        var m;
        return (m = d.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (d) => {
        var m;
        (m = d.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var g;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.area, u = o.currentTarget.dataset.itemId;
      if (!l || !u) return;
      const d = this.actor.system.abilities ?? {}, f = (Array.isArray((g = d[l]) == null ? void 0 : g.items) ? d[l].items.slice() : []).filter((S) => S !== u);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const u = o.currentTarget.dataset.itemId;
      if (!u) return;
      const d = this.actor.items.get(u);
      (m = d == null ? void 0 : d.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const u = o.currentTarget.dataset.itemId;
      u && await this._postAbilityToChat(u);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var A, D;
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
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
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const u = o.currentTarget.dataset.itemId;
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
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (o) => {
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const d = this.actor.items.get(u);
      if (!d || d.type !== "Targy") return;
      const m = (l.value ?? "").trim();
      await d.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${u}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Targy" && u.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const c = this, p = (o) => {
      var d, m, f, g;
      if (!o) return;
      const l = c._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const u = ((m = (d = l.system) == null ? void 0 : d.resources) == null ? void 0 : m.currentHealth) != null || ((g = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : g.hitLocations) != null;
      c.actor.update(l).then(() => {
        u && setTimeout(() => c.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (o) => {
      var l, u, d;
      return o && (((u = (l = c.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, o)) || c.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const u = l.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const d = l.form;
      y(d) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: c.id, at: Date.now() }), p(d));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var c, p, y;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const v = ((y = i[b]) == null ? void 0 : y.value) ?? 0, o = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, P._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, r, a, c, p, y, b, v, o, l, u;
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
          if (((o = m.parent) == null ? void 0 : o.id) !== f.id) {
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
    var r, a, c;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var c, p, y, b, v, o;
    s.preventDefault(), s.stopPropagation(), (c = s.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const r = await fromUuid(i.uuid);
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
      [`system.weapons.${e}.bonus`]: ((o = r.system) == null ? void 0 : o.bonus) ?? ""
    }), await r.update({ "system.equipped": !0 });
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
    const r = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, u = typeof o.sort == "number" ? o.sort : 0;
      return l - u;
    }).map((v) => v.id), a = r.indexOf(t), c = r.indexOf(e);
    if (a === -1 || c === -1) return;
    r.splice(a, 1), r.splice(c, 0, t);
    const p = r.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, r, a;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
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
    var b, v, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, r = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
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
  _parseAbilityDrop(s) {
    var i, r;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var a, c, p;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((c = i.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      r = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? r;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: r,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, y, b, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((y = i.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      r = ((b = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : b.id) ?? r;
    }
    const a = this.actor.system.abilities ?? {}, c = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    c.includes(r) || c.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(s, e) {
    var r, a, c;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var c, p, y, b, v;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const r = await fromUuid(i.uuid);
    if (!r || r.type !== "MikroChip") return;
    let a = r.id;
    ((b = r.parent) == null ? void 0 : b.id) !== this.actor.id && (a = ((v = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : v.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let r = Number(i) || 0;
    const a = this._getSkillHealthStatus(s);
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
    const i = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(s) {
    var g;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, r = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = r.find((S) => S.id === t.itemId) ?? null);
    const c = a && a.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((g = a == null ? void 0 : a.system) == null ? void 0 : g.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[b] || 0) || 0, o = p + v, u = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, d = new Roll(u);
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
  async _rollWeaponDamage(s, e = "") {
    var p, y, b, v, o, l, u, d, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (g) => g.id === s));
    if (!i || i.type !== "Fegyver") return;
    let r = (((o = i.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (u = ui.notifications) == null ? void 0 : u.warn) == null || f.call(u, ((m = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : m.call(d, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
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
  form: foundry.utils.mergeObject(((tt = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((st = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : st.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((rt = (it = N(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) == null ? void 0 : rt.contentClasses) ?? [],
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
var at;
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidWeaponSheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
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
K(H, "PARTS", foundry.utils.mergeObject(N(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), K(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = N(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidShieldSheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
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
K(B, "PARTS", foundry.utils.mergeObject(N(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), K(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((nt = N(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidMicrochipSheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
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
K(G, "PARTS", foundry.utils.mergeObject(N(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), K(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ot = N(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !1 })
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidAbilitySheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
    }, e._votvInput = (r) => {
      var p;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const c = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      i(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
K(z, "PARTS", foundry.utils.mergeObject(N(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), K(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((lt = N(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !0 })
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidTargySheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
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
K(W, "PARTS", foundry.utils.mergeObject(N(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), K(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ct = N(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !1 })
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((c) => console.warn("VoidEgyebSheet save failed", c));
    }, i = (r) => {
      var a, c, p;
      return r && (((c = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, p, y;
      const a = ((c = r.target) == null ? void 0 : c.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
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
K(Y, "PARTS", foundry.utils.mergeObject(N(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), K(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ut = N(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Y;
const xt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, i, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Dt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Lt, CONFIG.Item.dataModels.Pancel = At, CONFIG.Item.dataModels.MikroChip = Ct, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Et, CONFIG.Item.dataModels.Egyeb = $t, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
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
  Hooks.on("updateActor", (a, c, p, y) => {
    var S, O, F, A, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], u = (S = game.actors) == null ? void 0 : S.get(b);
    u != null && u.apps && l.push(...Array.from(u.apps));
    const d = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of d)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = w.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (o && l.some((w) => {
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
      var i, r, a, c, p, y;
      if (!((r = (i = C.target) == null ? void 0 : i.closest) != null && r.call(i, "#actors"))) return;
      const s = (c = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : c.call(a, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, s, e) => {
  var a, c;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, i = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = i ? (c = game.actors) == null ? void 0 : c.get(i) : null;
  !r || r.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": xt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, s, e) => {
  var r, a, c;
  const t = (a = (r = C.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const i = (c = s == null ? void 0 : s.querySelector) == null ? void 0 : c.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-CQl0eUIz.mjs.map
