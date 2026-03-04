var vt = Object.defineProperty;
var kt = Object.getPrototypeOf;
var It = Reflect.get;
var St = (C, s, e) => s in C ? vt(C, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[s] = e;
var K = (C, s, e) => St(C, typeof s != "symbol" ? s + "" : s, e);
var E = (C, s, e) => It(kt(C), e, s);
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
const { NumberField: Et, StringField: Ze } = foundry.data.fields;
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
      kp: new Et({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: et } = foundry.data.fields;
class Nt extends foundry.abstract.TypeDataModel {
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
    var i, r, a, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    var u;
    const t = (u = game.votv) == null ? void 0 : u._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const r = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (r) {
      d.scrollState = this._saveScrollState(r);
      const m = document.activeElement, f = a.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && g && (d.focus = {
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
    const y = this.element, b = this.form ?? this.element, v = d.scrollState, n = d.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", c = () => {
      var m, f;
      if (this._applyScrollState(y, v), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((m = b.querySelector) == null ? void 0 : m.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (l || n) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
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
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const d = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const d = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, n, l, c, u, m, f, g, S;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.resources) ?? {}, r = ((u = (c = i.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : u.value) ?? 0, a = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, d = P._healthStatusFromRatio(a, r), p = Number(((S = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    d === 0 ? y = 0 : d === 1 ? y = -6 : d === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, d, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, d, p, y;
    const e = P.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, i = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return P._healthStatusFromRatio(r, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, y, b;
    const t = P.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, r = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return P._healthStatusFromRatio(a, r);
  }
  async _prepareContext(s) {
    var Ce, Ee, Ne, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ne = (Ee = (Ce = this.actor.system) == null ? void 0 : Ce.resources) == null ? void 0 : Ee.stress) == null ? void 0 : Ne.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, r = i.hitLocations ?? {}, a = i.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of d) {
      const I = ((Pe = r[o]) == null ? void 0 : Pe.value) ?? 0, k = a[o] ?? 0;
      e.computedHealthStatus[o] = P._healthStatusFromRatio(k, I);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((o) => (Number(a[o]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, n = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = n;
    const c = this._getTotalArmorSpeedPenalty();
    l += c, e.effectiveGivenSpeed = l;
    const m = (Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = P.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [o, I] of Object.entries(f)) {
      const k = e.computedHealthStatus[I];
      e.skillHealthStatus[o] = k, e.skillDisabled[o] = k === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const g = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (g.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], A = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, D = A && typeof A == "object" && !Array.isArray(A) ? A : {}, w = (((Re = D.slot1) == null ? void 0 : Re.itemId) ?? "").trim(), N = (((Ue = D.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = D.slot3) == null ? void 0 : He.itemId) ?? "").trim(), dt = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, I) => {
      const k = typeof o.sort == "number" ? o.sort : 0, q = typeof I.sort == "number" ? I.sort : 0;
      return k - q;
    }).map((o) => {
      var X, ee, te, Z, V, ne;
      const I = o.type === "Fegyver", k = o.type === "MikroChip";
      let q = 0, _ = "", M = null;
      for (let se = 0; se < F.length; se++) {
        const re = F[se];
        if ((((X = g[re]) == null ? void 0 : X.itemId) ?? "") === o.id) {
          q = se + 1, _ = ((ee = g[re]) == null ? void 0 : ee.bonus) ?? "", M = re;
          break;
        }
      }
      let R = null;
      k && (w === o.id ? R = "slot1" : N === o.id ? R = "slot2" : x === o.id && (R = "slot3"));
      const ae = I && ((te = o.system) != null && te.damage) ? o.system.damage : "", Q = I && typeof ((Z = o.system) == null ? void 0 : Z.range) == "string" ? (o.system.range || "").trim() : "", J = M ? Number((V = g[M]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: I,
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
    e.actionsTable = dt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Fegyver"), Se = ue.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = Se;
    const qe = "— Nincs fegyver —", mt = F.filter((o) => {
      const k = ((g[o] ?? {}).itemId ?? "").trim();
      return k ? !!ue.find((_) => _.id === k) : !1;
    });
    e.weaponSlots = mt.map((o, I) => {
      const k = g[o] ?? {}, q = (k.itemId ?? "").trim(), _ = Se.find((M) => M.id === q);
      return {
        slotKey: o,
        itemId: q,
        slotNum: I + 1,
        displayName: (_ == null ? void 0 : _.name) || k.name || qe,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(k.bonus) || 0,
        damage: k.damage ?? ""
      };
    });
    const pt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ft = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((o) => {
      var se, re, Je;
      const I = o.id;
      let k = null, q = {};
      for (const pe of F)
        if ((((se = g[pe]) == null ? void 0 : se.itemId) ?? "").trim() === I) {
          k = pe, q = g[pe] ?? {};
          break;
        }
      const _ = !!k, M = ((re = o.system) == null ? void 0 : re.equipped) !== void 0 && ((Je = o.system) == null ? void 0 : Je.equipped) !== null ? !!o.system.equipped : _, R = (o == null ? void 0 : o.system) ?? {}, ae = typeof R.range == "string" ? (R.range || "").trim() : "", Q = R.type ?? "", J = (pt[Q] ?? Q) || "—", X = R.size ?? "", ee = (ft[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = R.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: k ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? qe,
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
    const yt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "Pancel");
    e.armorTable = yt.map((o) => {
      var q, _;
      const I = (o == null ? void 0 : o.system) ?? {}, k = ((q = o.system) == null ? void 0 : q.equipped) !== void 0 && ((_ = o.system) == null ? void 0 : _.equipped) !== null ? !!o.system.equipped : !1;
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
    const gt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = gt.map((o) => {
      const I = (o == null ? void 0 : o.system) ?? {}, k = (I.description ?? "").trim(), q = k ? k.length > 60 ? k.slice(0, 57) + "…" : k : "—", _ = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        quantity: _,
        description: q
      };
    });
    const ht = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((o) => o.type === "Egyeb");
    e.egyebList = ht.map((o) => {
      const k = (((o == null ? void 0 : o.system) ?? {}).description ?? "").trim(), q = k ? k.length > 80 ? k.slice(0, 77) + "…" : k : "";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        description: q
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((o) => o.type === "MikroChip"), oe = de.map((o) => ({ id: o.id, name: o.name, img: o.img })), Te = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], me = (o) => {
      var k, q, _;
      const I = [];
      return o !== 1 && I.push((((k = D.slot1) == null ? void 0 : k.itemId) ?? "").trim()), o !== 2 && I.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), o !== 3 && I.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((o) => !me(1).includes(o.id)), e.microchipItemsSlot2 = oe.filter((o) => !me(2).includes(o.id)), e.microchipItemsSlot3 = oe.filter((o) => !me(3).includes(o.id)), e.microchipSlots = Oe.map((o) => {
      const I = D[o] ?? {}, k = (I.itemId ?? "").trim(), q = de.find((_) => _.id === k);
      return {
        slotKey: o,
        itemId: k,
        displayName: (q == null ? void 0 : q.name) || I.name || Te,
        img: (q == null ? void 0 : q.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const I = `slot${o}`, k = D[I] ?? {}, q = (k.itemId ?? "").trim(), _ = oe.find((M) => M.id === q);
      e[`microchip${o}ItemId`] = q, e[`microchip${o}DisplayName`] = (_ == null ? void 0 : _.name) || k.name || Te, e[`microchip${o}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = de.map((o) => {
      var X, ee, te, Z;
      const I = o.id;
      let k = null;
      for (const V of Oe)
        if ((((X = D[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          k = V;
          break;
        }
      const q = !!k, _ = ((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.abilityType) ?? "", M = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", R = _ === "active", ae = Number((te = o == null ? void 0 : o.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Q = (((Z = o == null ? void 0 : o.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: M,
        description: J,
        kp: ae,
        isActive: R,
        slotKey: k ?? "",
        equipped: q
      };
    });
    const De = this.actor.system.abilities ?? {}, bt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((o) => {
      var I, k, q;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((I = o.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((k = o.system) == null ? void 0 : k.description) ?? "",
        kp: Number(((q = o.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), _e = new Map(bt.map((o) => [o.id, o])), wt = "— Nincs képesség —", Le = (o) => {
      const I = De[o] ?? {}, k = (I.itemId ?? "").trim(), q = k ? _e.get(k) : null, _ = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: k,
        displayName: (q == null ? void 0 : q.name) || I.name || wt,
        img: (q == null ? void 0 : q.img) || "",
        description: _,
        kp: M
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
    var b, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const c = (n.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-CmK14dNp.mjs");
      u(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var u, m, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let c = (l.dataset.itemId ?? "").trim();
      if (!c) {
        const g = (l.dataset.slot ?? "").trim();
        if (!g) return;
        c = (((((m = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : m.weapons) ?? {})[g] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (n) => {
      var u;
      const l = n ? n.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const c = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const r = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    r && i({ currentTarget: r }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      const l = n.currentTarget, c = l.dataset.skill, u = ((f = l.textContent) == null ? void 0 : f.trim()) || c, { openRollSheetForSkill: m } = await import("./roll-sheet-CmK14dNp.mjs");
      m(this.actor, c, u);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const a = (n, l) => {
      var m;
      const c = n.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (u) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = u.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const l = n.currentTarget, c = l.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await u.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor, m = u.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const g = u.system.weapons ?? {}, S = (g.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], A = F.find((D) => {
          var w;
          return (((w = g[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (A) {
          const D = F.filter((w) => w !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await u.update(f), await u.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var A, D;
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = m[w]) == null ? void 0 : N.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((x) => {
          var j;
          return !((j = m[x]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const x = g.find((j) => !N.has(j));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${w}.damage`]: ((A = u == null ? void 0 : u.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = u == null ? void 0 : u.system) == null ? void 0 : D.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((N) => N !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const l = n.currentTarget;
      if (l.disabled) return;
      const c = l.closest(".karakter-microchip-slot-select-wrap"), u = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const l = n.currentTarget, c = l.closest(".karakter-microchip-slot-select-wrap"), u = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), m = u == null ? void 0 : u.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), g = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (l.dataset.itemImg ?? "").trim(), O = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = g);
      let F = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", u == null || u.insertBefore(F, O)), F.src = S, F.style.display = "") : F && F.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
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
      const c = this.actor.items.get(l);
      if (!c || c.type !== "MikroChip") return;
      const u = ((S = (g = this.actor.system) == null ? void 0 : g.gear) == null ? void 0 : S.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = u[O]) == null ? void 0 : F.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const l = n.currentTarget.dataset.slot;
      if (!l) return;
      const c = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, l) => {
      const c = l.dataset.slot;
      l.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, c)), l.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, c));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const c = l.dataset.slot;
      c && (l.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, c)), l.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (u) => {
        var m;
        (m = u.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const c = l.dataset.area;
      c && (l.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, c)), l.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (u) => {
        var m;
        (m = u.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
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
      const l = n.currentTarget.dataset.area, c = n.currentTarget.dataset.itemId;
      if (!l || !c) return;
      const u = this.actor.system.abilities ?? {}, f = (Array.isArray((g = u[l]) == null ? void 0 : g.items) ? u[l].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      (m = u == null ? void 0 : u.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      u && (u.type === "Kepesseg" || u.type === "ability" ? await this._postAbilityToChat(c) : (u.type === "MikroChip" || u.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await u.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      !u || u.type !== "Pancel" || (await u.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var A, D;
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = m[w]) == null ? void 0 : N.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((x) => {
          var j;
          return !((j = m[x]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const x = g.find((j) => !N.has(j));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: u.name ?? "",
          [`system.weapons.${w}.damage`]: ((A = u.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = u.system) == null ? void 0 : D.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((N) => N !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor, m = u.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const g = u.system.weapons ?? {}, S = (g.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], A = F.find((D) => {
          var w;
          return (((w = g[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (A) {
          const D = F.filter((w) => w !== A);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${A}.itemId`] = "", f[`system.weapons.${A}.name`] = "", f[`system.weapons.${A}.damage`] = "", f[`system.weapons.${A}.bonus`] = "";
        }
      }
      Object.keys(f).length && await u.update(f), await u.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "Targy") return;
      const m = (l.value ?? "").trim();
      await u.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const d = this, p = (n) => {
      var u, m, f, g;
      if (!n) return;
      const l = d._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const c = ((m = (u = l.system) == null ? void 0 : u.resources) == null ? void 0 : m.currentHealth) != null || ((g = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : g.hitLocations) != null;
      d.actor.update(l).then(() => {
        c && setTimeout(() => d.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (n) => {
      var l, c, u;
      return n && (((c = (l = d.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, n)) || d.id && ((u = n.closest) == null ? void 0 : u.call(n, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const c = l.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const u = l.form;
      y(u) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(u));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, y;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const v = ((y = i[b]) == null ? void 0 : y.value) ?? 0, n = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, P._healthStatusFromRatio(n, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, r, a, d, p, y, b, v, n, l, c;
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const m of Object.values(e))
          if (typeof m == "string" && m.includes(".") && m.startsWith("Item.")) {
            u = m;
            break;
          }
      }
      if (u) {
        const m = await fromUuid(u);
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
          const O = g === "active" ? "active" : "passive", F = Array.isArray((d = S[O]) == null ? void 0 : d.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
          F.includes(f) || F.push(f), await this.actor.update({ [`system.abilities.${O}.items`]: F });
          return;
        }
      }
    }
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const m of Object.values(e))
          if (typeof m == "string" && m.includes(".") && m.startsWith("Item.")) {
            u = m;
            break;
          }
      }
      if (u) {
        const m = await fromUuid(u);
        if (m && m.documentName === "Item" && m.type === "Fegyver") {
          const f = this.actor, g = ((y = m.parent) == null ? void 0 : y.id) !== f.id;
          let S = m.id;
          if (g) {
            const O = foundry.utils.mergeObject(m.toObject(), { system: { ...m.toObject().system ?? {}, equipped: !1 } });
            S = ((b = (await f.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : b.id) ?? S;
          }
          if (g) {
            const O = ((v = f.system) == null ? void 0 : v.weapons) ?? {}, F = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = F ? F.split(/\s*,\s*/).filter((N) => A.includes(N)) : [], w = D.filter((N) => {
              var x;
              return (((x = O[N]) == null ? void 0 : x.itemId) ?? "").trim() === S;
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
        if (m && m.documentName === "Item" && (m.type === "Targy" || m.type === "Egyeb")) {
          const f = this.actor;
          ((c = m.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [m.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var r, a, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, y, b, v, n;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
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
      [`system.weapons.${e}.bonus`]: ((n = r.system) == null ? void 0 : n.bonus) ?? ""
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
    const r = this.actor.items.contents.slice().sort((v, n) => {
      const l = typeof v.sort == "number" ? v.sort : 0, c = typeof n.sort == "number" ? n.sort : 0;
      return l - c;
    }).map((v) => v.id), a = r.indexOf(t), d = r.indexOf(e);
    if (a === -1 || d === -1) return;
    r.splice(a, 1), r.splice(d, 0, t);
    const p = r.map((v, n) => ({
      _id: v,
      sort: (n + 1) * 10
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
    var b, v, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
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
    var a, d, p;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((d = i.parent) == null ? void 0 : d.id) !== this.actor.id) {
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
      const n = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      r = ((b = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : b.id) ?? r;
    }
    const a = this.actor.system.abilities ?? {}, d = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    d.includes(r) || d.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var r, a, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, y, b, v;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
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
    const d = a && a.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((g = a == null ? void 0 : a.system) == null ? void 0 : g.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[b] || 0) || 0, n = p + v, c = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, u = new Roll(c);
    await u.evaluate({ async: !0 });
    const m = u.total >= 18 ? "critical" : u.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, b, v, n, l, c, u, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (g) => g.id === s));
    if (!i || i.type !== "Fegyver") return;
    let r = (((n = i.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((m = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : m.call(u, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
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
      ...((rt = (it = E(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) == null ? void 0 : rt.contentClasses) ?? [],
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
K(H, "PARTS", foundry.utils.mergeObject(E(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), K(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = E(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
    }, e._votvInput = (r) => {
      var p;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const d = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
    const e = this, t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, i = (r) => {
      var a, d, p;
      return r && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const a = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Dt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Lt, CONFIG.Item.dataModels.Pancel = At, CONFIG.Item.dataModels.MikroChip = Ct, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Nt, CONFIG.Item.dataModels.Egyeb = $t, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  Hooks.on("updateActor", (a, d, p, y) => {
    var S, O, F, A, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const v = document.activeElement, n = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], c = (S = game.actors) == null ? void 0 : S.get(b);
    c != null && c.apps && l.push(...Array.from(c.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of u)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = w.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (n && l.some((w) => {
      const N = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return N && N.contains(v);
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
      var i, r, a, d, p, y;
      if (!((r = (i = C.target) == null ? void 0 : i.closest) != null && r.call(i, "#actors"))) return;
      const s = (d = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : d.call(a, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, s, e) => {
  var a, d;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, i = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = i ? (d = game.actors) == null ? void 0 : d.get(i) : null;
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
  var r, a, d;
  const t = (a = (r = C.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const i = (d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-CVRzFF5t.mjs.map
