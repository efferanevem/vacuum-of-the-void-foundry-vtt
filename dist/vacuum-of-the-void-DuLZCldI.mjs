var yt = Object.defineProperty;
var gt = Object.getPrototypeOf;
var ht = Reflect.get;
var bt = (C, i, e) => i in C ? yt(C, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[i] = e;
var U = (C, i, e) => bt(C, typeof i != "symbol" ? i + "" : i, e);
var x = (C, i, e) => ht(gt(C), e, i);
const { HTMLField: wt, NumberField: T, SchemaField: L, StringField: h, BooleanField: R, ArrayField: oe } = foundry.data.fields;
class kt extends foundry.abstract.TypeDataModel {
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
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
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
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new oe(
          new L({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new oe(
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
          items: new oe(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new oe(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
        biography: new wt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: pe, SchemaField: vt } = foundry.data.fields;
class It extends kt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new vt({
        body: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: St, NumberField: Ct, StringField: ie } = foundry.data.fields;
class qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new St({ required: !1, initial: !1 }),
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
const { BooleanField: Tt, StringField: le } = foundry.data.fields;
class Ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Tt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new le({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new le({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new le({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new le({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: fe, StringField: Ye } = foundry.data.fields;
class Dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ye({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ye({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new fe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new fe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new fe({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: _t, StringField: Qe } = foundry.data.fields;
class Je extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Qe({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Qe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new _t({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Xe } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Xe({ required: !1, blank: !0, initial: "" }),
      quantity: new Xe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
var Ze, Ve, et, tt;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var s, r, a, m;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((m = i.querySelector) == null ? void 0 : m.call(i, ".window-content")) ?? null;
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
    var u;
    const t = (u = game.votv) == null ? void 0 : u._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const r = this.element, a = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (r) {
      m.scrollState = this._saveScrollState(r);
      const d = document.activeElement, f = a.contains(d), g = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      f && g && (m.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const p = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const y = this.element, b = this.form ?? this.element, k = m.scrollState, n = m.focus, l = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", c = () => {
      var d, f;
      if (this._applyScrollState(y, k), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((d = b.querySelector) == null ? void 0 : d.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, k);
    };
    return (l || n) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
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
        var m;
        return a.type === "Pancel" && ((m = a.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const m = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, r;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var m;
        return a.type === "Pancel" && ((m = a.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const m = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var k, n, l, c, u, d, f, g, S;
    const e = i ?? this.form ?? this.element;
    let t = (k = e == null ? void 0 : e.querySelector) == null ? void 0 : k.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.resources) ?? {}, r = ((u = (c = s.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : u.value) ?? 0, a = ((d = s.currentHealth) == null ? void 0 : d.legs) ?? 0, m = E._healthStatusFromRatio(a, r), p = Number(((S = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    m === 0 ? y = 0 : m === 1 ? y = -6 : m === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var a, m, p, y;
    const e = i ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, m, p, y;
    const e = E.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, s = ((p = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return E._healthStatusFromRatio(r, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var m, p, y, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((m = i == null ? void 0 : i.system) == null ? void 0 : m.resources) ?? {}, r = ((y = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(a, r);
  }
  async _prepareContext(i) {
    var Fe, Ae, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ce = (Ae = (Fe = this.actor.system) == null ? void 0 : Fe.resources) == null ? void 0 : Ae.stress) == null ? void 0 : Ce.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, r = s.hitLocations ?? {}, a = s.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of m) {
      const v = ((Ne = r[o]) == null ? void 0 : Ne.value) ?? 0, I = a[o] ?? 0;
      e.computedHealthStatus[o] = E._healthStatusFromRatio(I, v);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((o) => (Number(a[o]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const k = e.computedHealthStatus.legs ?? 3, n = Number(((Pe = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Pe.givenSpeed) ?? 0) || 0;
    let l;
    k === 0 ? l = 0 : k === 1 ? l = -6 : k === 2 ? l = -3 : l = n;
    const c = this._getTotalArmorSpeedPenalty();
    l += c, e.effectiveGivenSpeed = l;
    const d = (Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: d } },
      { inplace: !1 }
    );
    const f = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [o, v] of Object.entries(f)) {
      const I = e.computedHealthStatus[v];
      e.skillHealthStatus[o] = I, e.skillDisabled[o] = I === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const g = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (g.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], A = (je = this.actor.system.gear) == null ? void 0 : je.microchips, D = A && typeof A == "object" && !Array.isArray(A) ? A : {}, w = (((Me = D.slot1) == null ? void 0 : Me.itemId) ?? "").trim(), N = (((Ke = D.slot2) == null ? void 0 : Ke.itemId) ?? "").trim(), P = (((Re = D.slot3) == null ? void 0 : Re.itemId) ?? "").trim(), ot = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, v) => {
      const I = typeof o.sort == "number" ? o.sort : 0, q = typeof v.sort == "number" ? v.sort : 0;
      return I - q;
    }).map((o) => {
      var J, V, ee, X, Z, ae;
      const v = o.type === "Fegyver", I = o.type === "MikroChip";
      let q = 0, _ = "", M = null;
      for (let te = 0; te < F.length; te++) {
        const se = F[te];
        if ((((J = g[se]) == null ? void 0 : J.itemId) ?? "") === o.id) {
          q = te + 1, _ = ((V = g[se]) == null ? void 0 : V.bonus) ?? "", M = se;
          break;
        }
      }
      let K = null;
      I && (w === o.id ? K = "slot1" : N === o.id ? K = "slot2" : P === o.id && (K = "slot3"));
      const re = v && ((ee = o.system) != null && ee.damage) ? o.system.damage : "", Y = v && typeof ((X = o.system) == null ? void 0 : X.range) == "string" ? (o.system.range || "").trim() : "", Q = M ? Number((Z = g[M]) == null ? void 0 : Z.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: v,
        slotAssignment: q,
        slotBonus: _,
        slotKey: M,
        microchipSlotKey: K,
        isEquipped: !!(M || K),
        damage: re,
        rangeStr: Y,
        slotBonusNum: Q,
        quantity: Number(((ae = o.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = ot;
    const ce = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((o) => o.type === "Fegyver"), ve = ce.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = ve;
    const Ie = "— Nincs fegyver —", lt = F.filter((o) => {
      const I = ((g[o] ?? {}).itemId ?? "").trim();
      return I ? !!ce.find((_) => _.id === I) : !1;
    });
    e.weaponSlots = lt.map((o, v) => {
      const I = g[o] ?? {}, q = (I.itemId ?? "").trim(), _ = ve.find((M) => M.id === q);
      return {
        slotKey: o,
        itemId: q,
        slotNum: v + 1,
        displayName: (_ == null ? void 0 : _.name) || I.name || Ie,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const ct = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ut = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ce.map((o) => {
      var te, se, We;
      const v = o.id;
      let I = null, q = {};
      for (const me of F)
        if ((((te = g[me]) == null ? void 0 : te.itemId) ?? "").trim() === v) {
          I = me, q = g[me] ?? {};
          break;
        }
      const _ = !!I, M = ((se = o.system) == null ? void 0 : se.equipped) !== void 0 && ((We = o.system) == null ? void 0 : We.equipped) !== null ? !!o.system.equipped : _, K = (o == null ? void 0 : o.system) ?? {}, re = typeof K.range == "string" ? (K.range || "").trim() : "", Y = K.type ?? "", Q = (ct[Y] ?? Y) || "—", J = K.size ?? "", V = (ut[J] ?? J) || "", ee = [Q, V].filter(Boolean).join(", ") || Q || "—", X = Q === "Lövedékes", Z = K.quantity, ae = Z != null ? String(Z).trim() : "1";
      return {
        slotKey: I ?? "",
        itemId: v,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? Ie,
        img: (o == null ? void 0 : o.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (M ? "0" : "—"),
        damage: q.damage ?? K.damage ?? "",
        rangeStr: re || "—",
        typeLabel: Q,
        typeAndSize: ee,
        quantity: ae,
        quantityDisplay: X ? ae : "—",
        isProjectile: X,
        equipped: M,
        special: (K.special ?? "").trim() || "—"
      };
    });
    const dt = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).filter((o) => o.type === "Pancel");
    e.armorTable = dt.map((o) => {
      var q, _;
      const v = (o == null ? void 0 : o.system) ?? {}, I = ((q = o.system) == null ? void 0 : q.equipped) !== void 0 && ((_ = o.system) == null ? void 0 : _.equipped) !== null ? !!o.system.equipped : !1;
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        protectionBonus: (v.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (v.speedPenalty ?? "").toString().trim() || "—",
        level: (v.level ?? "").toString().trim() || "—",
        special: (v.special ?? v.other ?? "").toString().trim() || "—",
        equipped: I
      };
    });
    const mt = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = mt.map((o) => {
      const v = (o == null ? void 0 : o.system) ?? {}, I = (v.description ?? "").trim(), q = I ? I.length > 60 ? I.slice(0, 57) + "…" : I : "—", _ = v.quantity != null ? String(v.quantity).trim() : "1";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        quantity: _,
        description: q
      };
    });
    const ue = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "MikroChip"), ne = ue.map((o) => ({ id: o.id, name: o.name, img: o.img })), Se = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], de = (o) => {
      var I, q, _;
      const v = [];
      return o !== 1 && v.push((((I = D.slot1) == null ? void 0 : I.itemId) ?? "").trim()), o !== 2 && v.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), o !== 3 && v.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), v.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((o) => !de(1).includes(o.id)), e.microchipItemsSlot2 = ne.filter((o) => !de(2).includes(o.id)), e.microchipItemsSlot3 = ne.filter((o) => !de(3).includes(o.id)), e.microchipSlots = qe.map((o) => {
      const v = D[o] ?? {}, I = (v.itemId ?? "").trim(), q = ue.find((_) => _.id === I);
      return {
        slotKey: o,
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || v.name || Se,
        img: (q == null ? void 0 : q.img) || "",
        active: v.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const v = `slot${o}`, I = D[v] ?? {}, q = (I.itemId ?? "").trim(), _ = ne.find((M) => M.id === q);
      e[`microchip${o}ItemId`] = q, e[`microchip${o}DisplayName`] = (_ == null ? void 0 : _.name) || I.name || Se, e[`microchip${o}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = ue.map((o) => {
      var J, V, ee, X;
      const v = o.id;
      let I = null;
      for (const Z of qe)
        if ((((J = D[Z]) == null ? void 0 : J.itemId) ?? "").trim() === v) {
          I = Z;
          break;
        }
      const q = !!I, _ = ((V = o == null ? void 0 : o.system) == null ? void 0 : V.abilityType) ?? "", M = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", K = _ === "active", re = Number((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Y = (((X = o == null ? void 0 : o.system) == null ? void 0 : X.description) ?? "").trim(), Q = Y ? Y.length > 60 ? Y.slice(0, 57) + "…" : Y : "—";
      return {
        itemId: v,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: M,
        description: Q,
        kp: re,
        isActive: K,
        slotKey: I ?? "",
        equipped: q
      };
    });
    const Te = this.actor.system.abilities ?? {}, pt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).map((o) => {
      var v, I, q;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((v = o.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((I = o.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((q = o.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), Oe = new Map(pt.map((o) => [o.id, o])), ft = "— Nincs képesség —", De = (o) => {
      const v = Te[o] ?? {}, I = (v.itemId ?? "").trim(), q = I ? Oe.get(I) : null, _ = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || v.name || ft,
        img: (q == null ? void 0 : q.img) || "",
        description: _,
        kp: M
      };
    };
    e.abilityFajiSlot = De("faji"), e.abilityHatterSlot = De("hatter");
    const _e = (o) => {
      const v = Te[o];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, Le = (o) => o.map((v) => {
      const I = Oe.get(v);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Le(_e("passive")), e.abilityActiveList = Le(_e("active")), e;
  }
  _attachFrameListeners(i) {
    var b, k;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const c = (n.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-CV7YsEiA.mjs");
      u(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var u, d, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let c = (l.dataset.itemId ?? "").trim();
      if (!c) {
        const g = (l.dataset.slot ?? "").trim();
        if (!g) return;
        c = (((((d = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : d.weapons) ?? {})[g] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var u;
      const l = n ? n.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const c = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const r = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
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
      const l = n.currentTarget, c = l.dataset.skill, u = ((f = l.textContent) == null ? void 0 : f.trim()) || c, { openRollSheetForSkill: d } = await import("./roll-sheet-CV7YsEiA.mjs");
      d(this.actor, c, u);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const a = (n, l) => {
      var d;
      const c = n.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (u) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (d = u.sheet) == null || d.render(!0);
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
      let d = Number(l.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await u.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor, d = u.items.get(c), f = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
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
      const d = this.actor.system.weapons ?? {}, f = (d.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = d[w]) == null ? void 0 : N.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((P) => {
          var j;
          return !((j = d[P]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const P = g.find((j) => !N.has(j));
          if (!P) return;
          w = P, S.push(P);
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
      const l = n.currentTarget, c = l.closest(".karakter-microchip-slot-select-wrap"), u = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), d = u == null ? void 0 : u.dataset.slot;
      if (!d) return;
      const f = (l.dataset.itemId ?? "").trim(), g = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (l.dataset.itemImg ?? "").trim(), O = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = g);
      let F = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", u == null || u.insertBefore(F, O)), F.src = S, F.style.display = "") : F && F.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const A = f ? this.actor.items.get(f) : null, D = {
        [`system.gear.microchips.${d}.itemId`]: f,
        [`system.gear.microchips.${d}.name`]: (A == null ? void 0 : A.name) ?? ""
      };
      f && (D[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(D);
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
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, c));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const c = l.dataset.slot;
      c && (l.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, c)), l.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const c = l.dataset.area;
      c && (l.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, c)), l.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
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
      var d;
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      (d = u == null ? void 0 : u.sheet) == null || d.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "Fegyver") return;
      const d = (l.value ?? "").trim();
      await u.update({ "system.quantity": d }), setTimeout(() => {
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
      const d = this.actor.system.weapons ?? {}, f = (d.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = d[w]) == null ? void 0 : N.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((P) => {
          var j;
          return !((j = d[P]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const P = g.find((j) => !N.has(j));
          if (!P) return;
          w = P, S.push(P);
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
      const u = this.actor, d = u.items.get(c), f = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
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
      const d = (l.value ?? "").trim();
      await u.update({ "system.quantity": d }), setTimeout(() => {
        const f = this.form ?? this.element, g = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        g && this._resizeWeaponQuantityInput(g);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      !c || c.type !== "Targy" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-targy-add", async (n) => {
      n.preventDefault(), await this.actor.createEmbeddedDocuments("Item", [{
        name: "Új tárgy",
        type: "Targy",
        img: "icons/svg/item-bag.svg",
        system: { description: "", quantity: "1" }
      }]);
    });
    const m = this, p = (n) => {
      var u, d, f, g;
      if (!n) return;
      const l = m._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const c = ((d = (u = l.system) == null ? void 0 : u.resources) == null ? void 0 : d.currentHealth) != null || ((g = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : g.hitLocations) != null;
      m.actor.update(l).then(() => {
        c && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (n) => {
      var l, c, u;
      return n && (((c = (l = m.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, n)) || m.id && ((u = n.closest) == null ? void 0 : u.call(n, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const c = l.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const u = l.form;
      y(u) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(u));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var m, p, y;
    const e = {};
    for (const b of i.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let k;
      b.type === "checkbox" ? k = b.checked : b.type === "number" ? k = b.value === "" ? 0 : Number(b.value) : k = b.value ?? "", foundry.utils.setProperty(e, b.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const k = ((y = s[b]) == null ? void 0 : y.value) ?? 0, n = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(n, k));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, r, a, m, p, y, b, k, n, l, c;
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const d of Object.values(e))
          if (typeof d == "string" && d.includes(".") && d.startsWith("Item.")) {
            u = d;
            break;
          }
      }
      if (u) {
        const d = await fromUuid(u);
        if (d && d.documentName === "Item" && (d.type === "Kepesseg" || d.type === "ability")) {
          let f = d.id;
          if (((s = d.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
            f = ((r = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : r.id) ?? f;
          }
          const g = (((a = d.system) == null ? void 0 : a.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (g === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": d.name
            });
            return;
          }
          if (g === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": d.name
            });
            return;
          }
          const O = g === "active" ? "active" : "passive", F = Array.isArray((m = S[O]) == null ? void 0 : m.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
          F.includes(f) || F.push(f), await this.actor.update({ [`system.abilities.${O}.items`]: F });
          return;
        }
      }
    }
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const d of Object.values(e))
          if (typeof d == "string" && d.includes(".") && d.startsWith("Item.")) {
            u = d;
            break;
          }
      }
      if (u) {
        const d = await fromUuid(u);
        if (d && d.documentName === "Item" && d.type === "Fegyver") {
          const f = this.actor, g = ((y = d.parent) == null ? void 0 : y.id) !== f.id;
          let S = d.id;
          if (g) {
            const O = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
            S = ((b = (await f.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : b.id) ?? S;
          }
          if (g) {
            const O = ((k = f.system) == null ? void 0 : k.weapons) ?? {}, F = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = F ? F.split(/\s*,\s*/).filter((N) => A.includes(N)) : [], w = D.filter((N) => {
              var P;
              return (((P = O[N]) == null ? void 0 : P.itemId) ?? "").trim() === S;
            });
            if (w.length > 0) {
              const P = {
                "system.weapons.slotOrder": D.filter((j) => !w.includes(j)).join(",")
              };
              for (const j of w)
                P[`system.weapons.${j}.itemId`] = "", P[`system.weapons.${j}.name`] = "", P[`system.weapons.${j}.damage`] = "", P[`system.weapons.${j}.bonus`] = "";
              await f.update(P);
            }
          }
          return;
        }
        if (d && d.documentName === "Item" && d.type === "Pancel") {
          const f = this.actor;
          if (((n = d.parent) == null ? void 0 : n.id) !== f.id) {
            const g = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [g]);
          }
          return;
        }
        if (d && d.documentName === "Item" && d.type === "MikroChip") {
          const f = this.actor;
          ((l = d.parent) == null ? void 0 : l.id) !== f.id && await f.createEmbeddedDocuments("Item", [d.toObject()]);
          return;
        }
        if (d && d.documentName === "Item" && d.type === "Targy") {
          const f = this.actor;
          ((c = d.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [d.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var r, a, m;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (m = i.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var m, p, y, b, k, n;
    i.preventDefault(), i.stopPropagation(), (m = i.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
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
      [`system.weapons.${e}.damage`]: ((k = r.system) == null ? void 0 : k.damage) ?? "",
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
    const r = this.actor.items.contents.slice().sort((k, n) => {
      const l = typeof k.sort == "number" ? k.sort : 0, c = typeof n.sort == "number" ? n.sort : 0;
      return l - c;
    }).map((k) => k.id), a = r.indexOf(t), m = r.indexOf(e);
    if (a === -1 || m === -1) return;
    r.splice(a, 1), r.splice(m, 0, t);
    const p = r.map((k, n) => ({
      _id: k,
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
    var b, k, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${m}
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
    var a, m, p;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let r = s.id;
    if (((m = s.parent) == null ? void 0 : m.id) !== this.actor.id) {
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
    var p, y, b, k;
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
    const a = this.actor.system.abilities ?? {}, m = Array.isArray((k = a[e]) == null ? void 0 : k.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    m.includes(r) || m.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(i, e) {
    var r, a, m;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (m = i.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var m, p, y, b, k;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
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
    ((b = r.parent) == null ? void 0 : b.id) !== this.actor.id && (a = ((k = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : k.id) ?? a), await this.actor.update({
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
    const b = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: k
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
    const m = a && a.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((g = a == null ? void 0 : a.system) == null ? void 0 : g.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(s[b] || 0) || 0, n = p + k, c = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, u = new Roll(c);
    await u.evaluate({ async: !0 });
    const d = u.total >= 18 ? "critical" : u.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, y, b, k, n, l, c, u, d, f;
    const t = this.actor;
    if (!t) return;
    let s = ((y = (p = t.items).get) == null ? void 0 : y.call(p, i)) ?? ((k = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : k.call(b, (g) => g.id === i));
    if (!s || s.type !== "Fegyver") return;
    let r = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((d = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : d.call(u, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
};
U(E, "PARTS", foundry.utils.mergeObject(x(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), U(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ze = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ve = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((tt = (et = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : et.window) == null ? void 0 : tt.contentClasses) ?? [],
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
let ye = E;
var it;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, s = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((it = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !1 })
}));
let ge = H;
var st;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, s = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(B, "PARTS", foundry.utils.mergeObject(x(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((st = x(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : st.form) ?? {}, { submitOnChange: !1 })
}));
let he = B;
var rt;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, s = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(G, "PARTS", foundry.utils.mergeObject(x(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((rt = x(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !1 })
}));
let be = G;
var at;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, s = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (r) => {
      var p;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const m = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(m), 300));
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
U(z, "PARTS", foundry.utils.mergeObject(x(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((at = x(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !0 })
}));
let we = z;
var nt;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, s = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(W, "PARTS", foundry.utils.mergeObject(x(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), U(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((nt = x(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
}));
let ke = W;
const Ft = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = It, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = qt, CONFIG.Item.dataModels.Pancel = Ot, CONFIG.Item.dataModels.MikroChip = Dt, CONFIG.Item.dataModels.Kepesseg = Je, CONFIG.Item.dataModels.ability = Je, CONFIG.Item.dataModels.Targy = Lt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ye, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  });
  const C = 500;
  Hooks.on("updateActor", (a, m, p, y) => {
    var S, O, F, A, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const k = document.activeElement, n = k && (k.tagName === "INPUT" && k.type !== "checkbox" && k.type !== "radio" || k.tagName === "TEXTAREA" || k.isContentEditable), l = [], c = (S = game.actors) == null ? void 0 : S.get(b);
    c != null && c.apps && l.push(...Array.from(c.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of u)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((A = w.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (n && l.some((w) => {
      const N = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return N && N.contains(k);
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
      var s, r, a, m, p, y;
      if (!((r = (s = C.target) == null ? void 0 : s.closest) != null && r.call(s, "#actors"))) return;
      const i = (m = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : m.call(a, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, i, e) => {
  var a, m;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, s = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = s ? (m = game.actors) == null ? void 0 : m.get(s) : null;
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
    "background.src": Ft,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, i, e) => {
  var r, a, m;
  const t = (a = (r = C.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const s = (m = i == null ? void 0 : i.querySelector) == null ? void 0 : m.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  ye as V
};
//# sourceMappingURL=vacuum-of-the-void-DuLZCldI.mjs.map
