var yt = Object.defineProperty;
var gt = Object.getPrototypeOf;
var ht = Reflect.get;
var bt = (C, s, e) => s in C ? yt(C, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[s] = e;
var U = (C, s, e) => bt(C, typeof s != "symbol" ? s + "" : s, e);
var x = (C, s, e) => ht(gt(C), e, s);
const { HTMLField: wt, NumberField: T, SchemaField: L, StringField: g, BooleanField: R, ArrayField: oe } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new T({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
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
        slotOrder: new g({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" }),
        armor: new oe(
          new L({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new oe(
          new L({
            name: new g({ required: !1, blank: !0, initial: "" }),
            quantity: new T({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new oe(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new oe(
            new g({ required: !1, blank: !0 }),
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
const { NumberField: pe, SchemaField: kt } = foundry.data.fields;
class It extends vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new kt({
        body: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: St, NumberField: Ct, StringField: se } = foundry.data.fields;
class qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new St({ required: !1, initial: !1 }),
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
const { NumberField: _t, StringField: Je } = foundry.data.fields;
class Qe extends foundry.abstract.TypeDataModel {
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
    var i, r, a, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    let m = { scrollState: {}, focus: null };
    if (r) {
      m.scrollState = this._saveScrollState(r);
      const c = document.activeElement, f = a.contains(c), h = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA");
      f && h && (m.focus = {
        name: c.name || null,
        id: c.id || null,
        selectionStart: "selectionStart" in c ? c.selectionStart : 0,
        selectionEnd: "selectionEnd" in c ? c.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const y = this.element, b = this.form ?? this.element, v = m.scrollState, n = m.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", d = () => {
      var c, f;
      if (this._applyScrollState(y, v), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const h = ((c = b.querySelector) == null ? void 0 : c.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = n.selectionStart ?? 0, h.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (l || n) && (requestAnimationFrame(d), setTimeout(d, 0), setTimeout(d, 50), setTimeout(d, 150), setTimeout(d, 300), setTimeout(d, 450)), p;
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
        var m;
        return a.type === "Pancel" && ((m = a.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const m = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var m;
        return a.type === "Pancel" && ((m = a.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const m = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, n, l, d, u, c, f, h, S;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.resources) ?? {}, r = ((u = (d = i.hitLocations) == null ? void 0 : d.legs) == null ? void 0 : u.value) ?? 0, a = ((c = i.currentHealth) == null ? void 0 : c.legs) ?? 0, m = E._healthStatusFromRatio(a, r), p = Number(((S = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let y;
    m === 0 ? y = 0 : m === 1 ? y = -6 : m === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, m, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, m, p, y;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, i = ((p = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return E._healthStatusFromRatio(r, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, p, y, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, r = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(a, r);
  }
  async _prepareContext(s) {
    var Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ce = (Fe = (Ae = this.actor.system) == null ? void 0 : Ae.resources) == null ? void 0 : Fe.stress) == null ? void 0 : Ce.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, r = i.hitLocations ?? {}, a = i.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of m) {
      const k = ((Ne = r[o]) == null ? void 0 : Ne.value) ?? 0, I = a[o] ?? 0;
      e.computedHealthStatus[o] = E._healthStatusFromRatio(I, k);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((o) => (Number(a[o]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, n = Number(((Pe = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Pe.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = n;
    const d = this._getTotalArmorSpeedPenalty();
    l += d, e.effectiveGivenSpeed = l;
    const c = (Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: c } },
      { inplace: !1 }
    );
    const f = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [o, k] of Object.entries(f)) {
      const I = e.computedHealthStatus[k];
      e.skillHealthStatus[o] = I, e.skillDisabled[o] = I === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const h = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (h.slotOrder ?? "").trim(), A = O ? O.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], F = (je = this.actor.system.gear) == null ? void 0 : je.microchips, D = F && typeof F == "object" && !Array.isArray(F) ? F : {}, w = (((Me = D.slot1) == null ? void 0 : Me.itemId) ?? "").trim(), N = (((Ke = D.slot2) == null ? void 0 : Ke.itemId) ?? "").trim(), P = (((Re = D.slot3) == null ? void 0 : Re.itemId) ?? "").trim(), ot = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, k) => {
      const I = typeof o.sort == "number" ? o.sort : 0, q = typeof k.sort == "number" ? k.sort : 0;
      return I - q;
    }).map((o) => {
      var Q, V, ee, X, Z, ae;
      const k = o.type === "Fegyver", I = o.type === "MikroChip";
      let q = 0, _ = "", M = null;
      for (let te = 0; te < A.length; te++) {
        const ie = A[te];
        if ((((Q = h[ie]) == null ? void 0 : Q.itemId) ?? "") === o.id) {
          q = te + 1, _ = ((V = h[ie]) == null ? void 0 : V.bonus) ?? "", M = ie;
          break;
        }
      }
      let K = null;
      I && (w === o.id ? K = "slot1" : N === o.id ? K = "slot2" : P === o.id && (K = "slot3"));
      const re = k && ((ee = o.system) != null && ee.damage) ? o.system.damage : "", Y = k && typeof ((X = o.system) == null ? void 0 : X.range) == "string" ? (o.system.range || "").trim() : "", J = M ? Number((Z = h[M]) == null ? void 0 : Z.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: k,
        slotAssignment: q,
        slotBonus: _,
        slotKey: M,
        microchipSlotKey: K,
        isEquipped: !!(M || K),
        damage: re,
        rangeStr: Y,
        slotBonusNum: J,
        quantity: Number(((ae = o.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = ot;
    const ce = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((o) => o.type === "Fegyver"), ke = ce.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = ke;
    const Ie = "— Nincs fegyver —", lt = A.filter((o) => {
      const I = ((h[o] ?? {}).itemId ?? "").trim();
      return I ? !!ce.find((_) => _.id === I) : !1;
    });
    e.weaponSlots = lt.map((o, k) => {
      const I = h[o] ?? {}, q = (I.itemId ?? "").trim(), _ = ke.find((M) => M.id === q);
      return {
        slotKey: o,
        itemId: q,
        slotNum: k + 1,
        displayName: (_ == null ? void 0 : _.name) || I.name || Ie,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const ct = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ut = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ce.map((o) => {
      var te, ie, We;
      const k = o.id;
      let I = null, q = {};
      for (const me of A)
        if ((((te = h[me]) == null ? void 0 : te.itemId) ?? "").trim() === k) {
          I = me, q = h[me] ?? {};
          break;
        }
      const _ = !!I, M = ((ie = o.system) == null ? void 0 : ie.equipped) !== void 0 && ((We = o.system) == null ? void 0 : We.equipped) !== null ? !!o.system.equipped : _, K = (o == null ? void 0 : o.system) ?? {}, re = typeof K.range == "string" ? (K.range || "").trim() : "", Y = K.type ?? "", J = (ct[Y] ?? Y) || "—", Q = K.size ?? "", V = (ut[Q] ?? Q) || "", ee = [J, V].filter(Boolean).join(", ") || J || "—", X = J === "Lövedékes", Z = K.quantity, ae = Z != null ? String(Z).trim() : "1";
      return {
        slotKey: I ?? "",
        itemId: k,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? Ie,
        img: (o == null ? void 0 : o.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (M ? "0" : "—"),
        damage: q.damage ?? K.damage ?? "",
        rangeStr: re || "—",
        typeLabel: J,
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
    const mt = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = mt.map((o) => {
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
    const ue = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "MikroChip"), ne = ue.map((o) => ({ id: o.id, name: o.name, img: o.img })), Se = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], de = (o) => {
      var I, q, _;
      const k = [];
      return o !== 1 && k.push((((I = D.slot1) == null ? void 0 : I.itemId) ?? "").trim()), o !== 2 && k.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), o !== 3 && k.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), k.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((o) => !de(1).includes(o.id)), e.microchipItemsSlot2 = ne.filter((o) => !de(2).includes(o.id)), e.microchipItemsSlot3 = ne.filter((o) => !de(3).includes(o.id)), e.microchipSlots = qe.map((o) => {
      const k = D[o] ?? {}, I = (k.itemId ?? "").trim(), q = ue.find((_) => _.id === I);
      return {
        slotKey: o,
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || k.name || Se,
        img: (q == null ? void 0 : q.img) || "",
        active: k.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const k = `slot${o}`, I = D[k] ?? {}, q = (I.itemId ?? "").trim(), _ = ne.find((M) => M.id === q);
      e[`microchip${o}ItemId`] = q, e[`microchip${o}DisplayName`] = (_ == null ? void 0 : _.name) || I.name || Se, e[`microchip${o}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = ue.map((o) => {
      var Q, V, ee, X;
      const k = o.id;
      let I = null;
      for (const Z of qe)
        if ((((Q = D[Z]) == null ? void 0 : Q.itemId) ?? "").trim() === k) {
          I = Z;
          break;
        }
      const q = !!I, _ = ((V = o == null ? void 0 : o.system) == null ? void 0 : V.abilityType) ?? "", M = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", K = _ === "active", re = Number((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Y = (((X = o == null ? void 0 : o.system) == null ? void 0 : X.description) ?? "").trim(), J = Y ? Y.length > 60 ? Y.slice(0, 57) + "…" : Y : "—";
      return {
        itemId: k,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: M,
        description: J,
        kp: re,
        isActive: K,
        slotKey: I ?? "",
        equipped: q
      };
    });
    const Te = this.actor.system.abilities ?? {}, pt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).map((o) => {
      var k, I, q;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((k = o.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((I = o.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((q = o.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), Oe = new Map(pt.map((o) => [o.id, o])), ft = "— Nincs képesség —", De = (o) => {
      const k = Te[o] ?? {}, I = (k.itemId ?? "").trim(), q = I ? Oe.get(I) : null, _ = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || k.name || ft,
        img: (q == null ? void 0 : q.img) || "",
        description: _,
        kp: M
      };
    };
    e.abilityFajiSlot = De("faji"), e.abilityHatterSlot = De("hatter");
    const _e = (o) => {
      const k = Te[o];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, Le = (o) => o.map((k) => {
      const I = Oe.get(k);
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
  _attachFrameListeners(s) {
    var b, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const d = (n.currentTarget.dataset.slot ?? "").trim();
      if (!d) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-9WugtOOc.mjs");
      u(this.actor, d);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var u, c, f;
      n.preventDefault(), n.stopPropagation();
      const l = n.currentTarget;
      let d = (l.dataset.itemId ?? "").trim();
      if (!d) {
        const h = (l.dataset.slot ?? "").trim();
        if (!h) return;
        d = (((((c = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : c.weapons) ?? {})[h] ?? {}).itemId ?? "").trim();
      }
      d && await this._rollWeaponDamage(d, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (n) => {
      var u;
      const l = n ? n.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const d = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", d > 10);
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
      const l = n.currentTarget, d = l.dataset.skill, u = ((f = l.textContent) == null ? void 0 : f.trim()) || d, { openRollSheetForSkill: c } = await import("./roll-sheet-9WugtOOc.mjs");
      c(this.actor, d, u);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const a = (n, l) => {
      var c;
      const d = n.dataset.itemId;
      if (!d) return;
      const u = this.actor.items.get(d);
      if (u) {
        if (n.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (c = u.sheet) == null || c.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const l = n.currentTarget, d = l.dataset.itemId;
      if (!d) return;
      const u = this.actor.items.get(d);
      if (!u) return;
      let c = Number(l.value);
      (!Number.isFinite(c) || c < 0) && (c = 0), await u.update({ "system.quantity": c });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const u = this.actor, c = u.items.get(d), f = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const h = u.system.weapons ?? {}, S = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], F = A.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === d;
        });
        if (F) {
          const D = A.filter((w) => w !== F);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${F}.itemId`] = "", f[`system.weapons.${F}.name`] = "", f[`system.weapons.${F}.damage`] = "", f[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(f).length && await u.update(f), await u.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var F, D;
      const l = n.currentTarget, d = (l.dataset.itemId ?? "").trim();
      if (!d) return;
      const u = this.actor.items.get(d);
      if (!u || u.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, f = (c.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = c[w]) == null ? void 0 : N.itemId) ?? "").trim() === d;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((P) => {
          var j;
          return !((j = c[P]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const P = h.find((j) => !N.has(j));
          if (!P) return;
          w = P, S.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: d,
          [`system.weapons.${w}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${w}.damage`]: ((F = u == null ? void 0 : u.system) == null ? void 0 : F.damage) ?? "",
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
      const d = l.closest(".karakter-microchip-slot-select-wrap"), u = d == null ? void 0 : d.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && d && d.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const l = n.currentTarget, d = l.closest(".karakter-microchip-slot-select-wrap"), u = d == null ? void 0 : d.querySelector(".karakter-microchip-slot-display"), c = u == null ? void 0 : u.dataset.slot;
      if (!c) return;
      const f = (l.dataset.itemId ?? "").trim(), h = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (l.dataset.itemImg ?? "").trim(), O = d == null ? void 0 : d.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = h);
      let A = d == null ? void 0 : d.querySelector(".karakter-microchip-slot-thumb");
      S ? (A || (A = document.createElement("img"), A.className = "karakter-microchip-slot-thumb", A.alt = "", u == null || u.insertBefore(A, O)), A.src = S, A.style.display = "") : A && A.remove(), d == null || d.classList.remove("karakter-microchip-slot-open");
      const F = f ? this.actor.items.get(f) : null, D = {
        [`system.gear.microchips.${c}.itemId`]: f,
        [`system.gear.microchips.${c}.name`]: (F == null ? void 0 : F.name) ?? ""
      };
      f && (D[`system.gear.microchips.${c}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var h, S;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "MikroChip") return;
      const u = ((S = (h = this.actor.system) == null ? void 0 : h.gear) == null ? void 0 : S.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var A;
        return (((A = u[O]) == null ? void 0 : A.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const l = n.currentTarget.dataset.slot;
      if (!l) return;
      const d = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: d }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, l) => {
      const d = l.dataset.slot;
      l.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, d)), l.addEventListener("dragleave", (u) => {
        var c;
        return (c = u.currentTarget) == null ? void 0 : c.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, d));
    }), t.find(".karakter-ability-slot-single").each((n, l) => {
      const d = l.dataset.slot;
      d && (l.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, d)), l.addEventListener("dragleave", (u) => {
        var c;
        return (c = u.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (u) => {
        var c;
        (c = u.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, l) => {
      const d = l.dataset.area;
      d && (l.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, d)), l.addEventListener("dragleave", (u) => {
        var c;
        return (c = u.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (u) => {
        var c;
        (c = u.currentTarget) == null || c.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var h;
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.area, d = n.currentTarget.dataset.itemId;
      if (!l || !d) return;
      const u = this.actor.system.abilities ?? {}, f = (Array.isArray((h = u[l]) == null ? void 0 : h.items) ? u[l].items.slice() : []).filter((S) => S !== d);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var c;
      n.preventDefault();
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const u = this.actor.items.get(d);
      (c = u == null ? void 0 : u.sheet) == null || c.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const d = n.currentTarget.dataset.itemId;
      d && await this._postAbilityToChat(d);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const l = n.currentTarget, d = (l.dataset.itemId ?? "").trim();
      if (!d) return;
      const u = this.actor.items.get(d);
      if (!u || u.type !== "Fegyver") return;
      const c = (l.value ?? "").trim();
      await u.update({ "system.quantity": c }), setTimeout(() => {
        const f = this.form ?? this.element, h = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${d}"]`);
        h && this._resizeWeaponQuantityInput(h);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const l = n.currentTarget, d = (l.dataset.itemId ?? "").trim();
      if (!d) return;
      const u = this.actor.items.get(d);
      !u || u.type !== "Pancel" || (await u.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var F, D;
      const l = n.currentTarget, d = (l.dataset.itemId ?? "").trim();
      if (!d) return;
      const u = this.actor.items.get(d);
      if (!u || u.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, f = (c.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = S.find((w) => {
        var N;
        return (((N = c[w]) == null ? void 0 : N.itemId) ?? "").trim() === d;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = S.find((P) => {
          var j;
          return !((j = c[P]) != null && j.itemId);
        });
        const N = new Set(S);
        if (!w) {
          const P = h.find((j) => !N.has(j));
          if (!P) return;
          w = P, S.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: d,
          [`system.weapons.${w}.name`]: u.name ?? "",
          [`system.weapons.${w}.damage`]: ((F = u.system) == null ? void 0 : F.damage) ?? "",
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
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const u = this.actor, c = u.items.get(d), f = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const h = u.system.weapons ?? {}, S = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], F = A.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === d;
        });
        if (F) {
          const D = A.filter((w) => w !== F);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${F}.itemId`] = "", f[`system.weapons.${F}.name`] = "", f[`system.weapons.${F}.damage`] = "", f[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(f).length && await u.update(f), await u.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      !d || d.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (n) => {
      var d, u;
      if (n.preventDefault(), n.currentTarget.dataset.gearArray === "generalItems") {
        const c = Array.isArray((u = (d = this.actor.system) == null ? void 0 : d.gear) == null ? void 0 : u.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        c.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": c });
      }
    }), t.on("click", ".karakter-item-remove", async (n) => {
      var u, c;
      n.preventDefault();
      const l = parseInt(n.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const d = Array.isArray((c = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      d.splice(l, 1), await this.actor.update({ "system.gear.generalItems": d });
    });
    const m = this, p = (n) => {
      var u, c, f, h;
      if (!n) return;
      const l = m._getFormDataForUpdate(n);
      if (Object.keys(l).length === 0) return;
      const d = ((c = (u = l.system) == null ? void 0 : u.resources) == null ? void 0 : c.currentHealth) != null || ((h = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : h.hitLocations) != null;
      m.actor.update(l).then(() => {
        d && setTimeout(() => m.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, y = (n) => {
      var l, d, u;
      return n && (((d = (l = m.element) == null ? void 0 : l.contains) == null ? void 0 : d.call(l, n)) || m.id && ((u = n.closest) == null ? void 0 : u.call(n, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (n) => {
      const l = n.target;
      if (!l || !l.form) return;
      const d = l.tagName;
      if (d !== "INPUT" && d !== "TEXTAREA" && d !== "SELECT") return;
      const u = l.form;
      y(u) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(u));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var m, p, y;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const v = ((y = i[b]) == null ? void 0 : y.value) ?? 0, n = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(n, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, r, a, m, p, y, b, v, n, l, d;
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const c of Object.values(e))
          if (typeof c == "string" && c.includes(".") && c.startsWith("Item.")) {
            u = c;
            break;
          }
      }
      if (u) {
        const c = await fromUuid(u);
        if (c && c.documentName === "Item" && (c.type === "Kepesseg" || c.type === "ability")) {
          let f = c.id;
          if (((i = c.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const F = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
            f = ((r = (await this.actor.createEmbeddedDocuments("Item", [F]))[0]) == null ? void 0 : r.id) ?? f;
          }
          const h = (((a = c.system) == null ? void 0 : a.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": c.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": c.name
            });
            return;
          }
          const O = h === "active" ? "active" : "passive", A = Array.isArray((m = S[O]) == null ? void 0 : m.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
          A.includes(f) || A.push(f), await this.actor.update({ [`system.abilities.${O}.items`]: A });
          return;
        }
      }
    }
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const c of Object.values(e))
          if (typeof c == "string" && c.includes(".") && c.startsWith("Item.")) {
            u = c;
            break;
          }
      }
      if (u) {
        const c = await fromUuid(u);
        if (c && c.documentName === "Item" && c.type === "Fegyver") {
          const f = this.actor, h = ((y = c.parent) == null ? void 0 : y.id) !== f.id;
          let S = c.id;
          if (h) {
            const O = foundry.utils.mergeObject(c.toObject(), { system: { ...c.toObject().system ?? {}, equipped: !1 } });
            S = ((b = (await f.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : b.id) ?? S;
          }
          if (h) {
            const O = ((v = f.system) == null ? void 0 : v.weapons) ?? {}, A = (O.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = A ? A.split(/\s*,\s*/).filter((N) => F.includes(N)) : [], w = D.filter((N) => {
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
        if (c && c.documentName === "Item" && c.type === "Pancel") {
          const f = this.actor;
          if (((n = c.parent) == null ? void 0 : n.id) !== f.id) {
            const h = foundry.utils.mergeObject(c.toObject(), { system: { ...c.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (c && c.documentName === "Item" && c.type === "MikroChip") {
          const f = this.actor;
          ((l = c.parent) == null ? void 0 : l.id) !== f.id && await f.createEmbeddedDocuments("Item", [c.toObject()]);
          return;
        }
        if (c && c.documentName === "Item" && c.type === "Targy") {
          const f = this.actor;
          ((d = c.parent) == null ? void 0 : d.id) !== f.id && await f.createEmbeddedDocuments("Item", [c.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var r, a, m;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, p, y, b, v, n;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
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
      const l = typeof v.sort == "number" ? v.sort : 0, d = typeof n.sort == "number" ? n.sort : 0;
      return l - d;
    }).map((v) => v.id), a = r.indexOf(t), m = r.indexOf(e);
    if (a === -1 || m === -1) return;
    r.splice(a, 1), r.splice(m, 0, t);
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
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
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
    var a, m, p;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((m = i.parent) == null ? void 0 : m.id) !== this.actor.id) {
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
    const a = this.actor.system.abilities ?? {}, m = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    m.includes(r) || m.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var r, a, m;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, p, y, b, v;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
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
    var h;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, r = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = r.find((S) => S.id === t.itemId) ?? null);
    const m = a && a.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((h = a == null ? void 0 : a.system) == null ? void 0 : h.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[b] || 0) || 0, n = p + v, d = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, u = new Roll(d);
    await u.evaluate({ async: !0 });
    const c = u.total >= 18 ? "critical" : u.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: c } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, b, v, n, l, d, u, c, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (h) => h.id === s));
    if (!i || i.type !== "Fegyver") return;
    let r = (((n = i.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (d = ui.notifications) == null ? void 0 : d.warn) == null || f.call(d, ((c = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : c.call(u, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
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
var st;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, i = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((st = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : st.form) ?? {}, { submitOnChange: !1 })
}));
let ge = H;
var it;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, i = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
U(B, "PARTS", foundry.utils.mergeObject(x(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((it = x(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !1 })
}));
let he = B;
var rt;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, i = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, i = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(a) && t(a);
    }, e._votvInput = (r) => {
      var p;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const m = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      i(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(m), 300));
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, i = (r) => {
      var a, m, p;
      return r && (((m = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : m.call(a, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const a = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
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
let ve = W;
const At = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = It, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = qt, CONFIG.Item.dataModels.Pancel = Ot, CONFIG.Item.dataModels.MikroChip = Dt, CONFIG.Item.dataModels.Kepesseg = Qe, CONFIG.Item.dataModels.ability = Qe, CONFIG.Item.dataModels.Targy = Lt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ye, {
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
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  });
  const C = 500;
  Hooks.on("updateActor", (a, m, p, y) => {
    var S, O, A, F, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const v = document.activeElement, n = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], d = (S = game.actors) == null ? void 0 : S.get(b);
    d != null && d.apps && l.push(...Array.from(d.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of u)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((A = w.document) == null ? void 0 : A.documentName) !== "Actor" || ((F = w.constructor) == null ? void 0 : F.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (n && l.some((w) => {
      const N = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return N && N.contains(v);
    })) return;
    const f = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, h = f && Date.now() - f.at < C ? f.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== h && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (C) => {
      var i, r, a, m, p, y;
      if (!((r = (i = C.target) == null ? void 0 : i.closest) != null && r.call(i, "#actors"))) return;
      const s = (m = (a = C.target) == null ? void 0 : a.closest) == null ? void 0 : m.call(a, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, s, e) => {
  var a, m;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, i = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = i ? (m = game.actors) == null ? void 0 : m.get(i) : null;
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
    "background.src": At,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, s, e) => {
  var r, a, m;
  const t = (a = (r = C.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const i = (m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ye as V
};
//# sourceMappingURL=vacuum-of-the-void-Dv934enp.mjs.map
