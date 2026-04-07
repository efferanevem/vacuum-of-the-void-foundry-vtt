var Ht = Object.defineProperty;
var Ut = Object.getPrototypeOf;
var Bt = Reflect.get;
var zt = (E, s, e) => s in E ? Ht(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var z = (E, s, e) => zt(E, typeof s != "symbol" ? s + "" : s, e);
var K = (E, s, e) => Bt(Ut(E), e, s);
const { HTMLField: Gt, NumberField: N, SchemaField: R, StringField: S, BooleanField: Q, ArrayField: He } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new R({
        name: new S({ required: !1, blank: !0, initial: "" }),
        player: new S({ required: !1, blank: !0, initial: "" }),
        level: new N({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new S({ required: !1, blank: !0, initial: "" }),
        assignment: new S({ required: !1, blank: !0, initial: "" }),
        subAssignment: new S({ required: !1, blank: !0, initial: "" }),
        background: new S({ required: !1, blank: !0, initial: "" }),
        languages: new S({ required: !1, blank: !0, initial: "" })
      }),
      resources: new R({
        health: new R({
          value: new N({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new N({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new R({
          head: new R({
            value: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          torso: new R({
            value: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          arms: new R({
            value: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          legs: new R({
            value: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new R({
          head: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new N({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new R({
          head: new N({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new N({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new N({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new N({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new R({
          value: new N({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new N({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new N({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new R({
        defense: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new N({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new R({
        deception: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new S({ required: !1, blank: !0, initial: "" }),
        combatTraining: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new N({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new N({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new R({
        slotOrder: new S({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new R({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new R({
        microchips: new R({
          slot1: new R({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot2: new R({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot3: new R({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new R({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new R({
            name: new S({ required: !1, blank: !0, initial: "" }),
            quantity: new N({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new R({
        faji: new R({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new R({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        passive: new R({
          items: new He(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new R({
          items: new He(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new R({
        biography: new Gt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: Wt } = foundry.data.fields;
class Yt extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Wt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Jt, NumberField: rs, StringField: qe } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Jt({ required: !1, initial: !1 }),
      type: new qe({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new qe({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new qe({ required: !1, blank: !0, initial: "" }),
      damage: new qe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new qe({ required: !1, blank: !0, initial: "" }),
      special: new qe({ required: !1, blank: !0, initial: "" }),
      quantity: new qe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Qt, StringField: Ue } = foundry.data.fields;
class Xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Qt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ue({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: wt } = foundry.data.fields;
class Zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new wt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new wt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Ge({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ge({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ge({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Vt, StringField: It } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new It({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new It({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Vt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Tt } = foundry.data.fields;
class es extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Tt({ required: !1, blank: !0, initial: "" }),
      quantity: new Tt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ts } = foundry.data.fields;
class ss extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ts({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(E) {
  if (!E || !Array.isArray(E.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let c = i;
    for (const o of u) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, c);
        continue;
      }
      if (typeof o.operator == "string") {
        c = o.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!r || !p || r === 8 || r !== 6) continue;
      const h = !a && c >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(E.terms, 1);
  const n = s.filter((u) => u === 6).length, l = s.filter((u) => u === 1).length, f = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = n + f, b = l + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var _t, Dt, Ct, Ot;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const d = this.element, n = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const r = document.activeElement, p = n.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      p && h && (l.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var r, p;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((r = y.querySelector) == null ? void 0 : r.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (p = y.querySelector) == null ? void 0 : p.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (i || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), n = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (n) => {
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (n) => {
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, c, o, r, p, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (c = a.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, n = ((r = a.currentHealth) == null ? void 0 : r.legs) ?? 0, l = U._healthStatusFromRatio(n, d), f = Number(((v = (h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, l, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, a = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), n = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const f = Number(n == null ? void 0 : n.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, r, p, h, v;
    const e = s ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, a = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), n = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    const f = ((r = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : r.resources) ?? {}, m = ((h = (p = f.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : h.value) ?? 0, y = ((v = f.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (U._healthStatusFromRatio(y, m) === 0) {
      a.textContent = "0";
      return;
    }
    const u = Number(n == null ? void 0 : n.value) || 0, i = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(u + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, l, f, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, a = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, y;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = a.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, n = ((y = a.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return U._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var Te, _e, Me, Re, je, Ke, Ae, Le, st, it, rt, nt, at, ot, ct, lt, ut, dt, mt, pt, ft, yt, gt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Me = (_e = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : _e.stress) == null ? void 0 : Me.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, n = a.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const D = ((Re = d[g]) == null ? void 0 : Re.value) ?? 0, _ = n[g] ?? 0;
      e.computedHealthStatus[g] = U._healthStatusFromRatio(_, D);
    }
    const f = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(n[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((Ke = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Ke.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const r = (Number(((Le = (Ae = this.actor.system) == null ? void 0 : Ae.combat) == null ? void 0 : Le.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: r } },
      { inplace: !1 }
    );
    const p = ((st = e.system) == null ? void 0 : st.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const h = Number(p.givenSpeed), v = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, D] of Object.entries(I)) {
      const _ = e.computedHealthStatus[D];
      e.skillHealthStatus[g] = _, e.skillDisabled[g] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const T = this.actor.system.weapons ?? {}, P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = (T.slotOrder ?? "").trim(), O = q ? q.split(/\s*,\s*/).filter((g) => P.includes(g)) : [], w = (it = this.actor.system.gear) == null ? void 0 : it.microchips, C = w && typeof w == "object" && !Array.isArray(w) ? w : {}, A = (((rt = C.slot1) == null ? void 0 : rt.itemId) ?? "").trim(), j = (((nt = C.slot2) == null ? void 0 : nt.itemId) ?? "").trim(), B = (((at = C.slot3) == null ? void 0 : at.itemId) ?? "").trim(), W = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, D) => {
      const _ = typeof g.sort == "number" ? g.sort : 0, L = typeof D.sort == "number" ? D.sort : 0;
      return _ - L;
    }).map((g) => {
      var pe, Ce, Oe, he, be, $e;
      const D = g.type === "Fegyver", _ = g.type === "MikroChip";
      let L = 0, M = "", J = null;
      for (let Pe = 0; Pe < O.length; Pe++) {
        const xe = O[Pe];
        if ((((pe = T[xe]) == null ? void 0 : pe.itemId) ?? "") === g.id) {
          L = Pe + 1, M = ((Ce = T[xe]) == null ? void 0 : Ce.bonus) ?? "", J = xe;
          break;
        }
      }
      let Y = null;
      _ && (A === g.id ? Y = "slot1" : j === g.id ? Y = "slot2" : B === g.id && (Y = "slot3"));
      const Fe = D && ((Oe = g.system) != null && Oe.damage) ? g.system.damage : "", ie = D && typeof ((he = g.system) == null ? void 0 : he.range) == "string" ? (g.system.range || "").trim() : "", De = J ? Number((be = T[J]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: D,
        slotAssignment: L,
        slotBonus: M,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Fe,
        rangeStr: ie,
        slotBonusNum: De,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = W;
    const ee = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((g) => g.type === "Fegyver"), fe = ee.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = fe;
    const te = "— Nincs fegyver —", ue = O.filter((g) => {
      const _ = ((T[g] ?? {}).itemId ?? "").trim();
      return _ ? !!ee.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = ue.map((g, D) => {
      const _ = T[g] ?? {}, L = (_.itemId ?? "").trim(), M = fe.find((J) => J.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: D + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || te,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const ke = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ve = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ee.map((g) => {
      var ht, bt, kt;
      const D = g.id;
      let _ = null, L = {};
      for (const Be of O)
        if ((((ht = T[Be]) == null ? void 0 : ht.itemId) ?? "").trim() === D) {
          _ = Be, L = T[Be] ?? {};
          break;
        }
      const M = !!_, J = ((bt = g.system) == null ? void 0 : bt.equipped) !== void 0 && ((kt = g.system) == null ? void 0 : kt.equipped) !== null ? !!g.system.equipped : M, Y = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Y.range == "string" ? (Y.range || "").trim() : "", ie = Y.type ?? "", De = (ke[ie] ?? ie) || "—", pe = Y.size ?? "", Ce = (ve[pe] ?? pe) || "", Oe = [De, Ce].filter(Boolean).join(", ") || De || "—", he = ie === "projectile" || pe === "thrown", be = Y.quantity, $e = be != null ? String(be).trim() : "1", Pe = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Kt = Pe || xe || "0";
      return {
        slotKey: _ ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? te,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Kt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: De,
        typeAndSize: Oe,
        quantity: $e,
        quantityDisplay: he ? $e : "—",
        isProjectile: he,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const we = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = we.map((g) => {
      var L, M;
      const D = (g == null ? void 0 : g.system) ?? {}, _ = ((L = g.system) == null ? void 0 : L.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: (D.level ?? "").toString().trim() || "—",
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const Ie = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Ie.map((g) => {
      const D = (g == null ? void 0 : g.system) ?? {}, _ = (D.description ?? "").trim(), L = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", M = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const ye = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const _ = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const X = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "MikroChip"), se = X.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ne = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], F = (g) => {
      var _, L, M;
      const D = [];
      return g !== 1 && D.push((((_ = C.slot1) == null ? void 0 : _.itemId) ?? "").trim()), g !== 2 && D.push((((L = C.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && D.push((((M = C.slot3) == null ? void 0 : M.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = se.filter((g) => !F(1).includes(g.id)), e.microchipItemsSlot2 = se.filter((g) => !F(2).includes(g.id)), e.microchipItemsSlot3 = se.filter((g) => !F(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const D = C[g] ?? {}, _ = (D.itemId ?? "").trim(), L = X.find((M) => M.id === _);
      return {
        slotKey: g,
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || Ne,
        img: (L == null ? void 0 : L.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const D = `slot${g}`, _ = C[D] ?? {}, L = (_.itemId ?? "").trim(), M = se.find((J) => J.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || _.name || Ne, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = X.map((g) => {
      var pe, Ce, Oe, he;
      const D = g.id;
      let _ = null;
      for (const be of k)
        if ((((pe = C[be]) == null ? void 0 : pe.itemId) ?? "").trim() === D) {
          _ = be;
          break;
        }
      const L = !!_, M = ((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.abilityType) ?? "", J = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Fe = Number((Oe = g == null ? void 0 : g.system) == null ? void 0 : Oe.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ie = (((he = g == null ? void 0 : g.system) == null ? void 0 : he.description) ?? "").trim(), De = ie ? ie.length > 60 ? ie.slice(0, 57) + "…" : ie : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: J,
        description: De,
        kp: Fe,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: L
      };
    });
    const x = (((mt = e.weaponsTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.armorTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.microchipsTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !x;
    const H = this.actor.system.abilities ?? {}, Se = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).map((g) => {
      var D, _, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((D = g.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((_ = g.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), G = new Map(Se.map((g) => [g.id, g])), Ee = "— Nincs képesség —", de = (g) => {
      const D = H[g] ?? {}, _ = (D.itemId ?? "").trim(), L = _ ? G.get(_) : null, M = (L == null ? void 0 : L.description) ?? "", J = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || Ee,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: J
      };
    };
    e.abilityFajiSlot = de("faji"), e.abilityHatterSlot = de("hatter");
    const ge = (g) => {
      const D = H[g];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, me = (g) => g.map((D) => {
      const _ = G.get(D);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = me(ge("passive")), e.abilityActiveList = me(ge("active")), e;
  }
  _attachFrameListeners(s) {
    var b, u;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-B4Kfvgmh.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((p = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : p.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var r;
      const c = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d });
    const n = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', n), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, p, h;
      i.preventDefault(), i.stopPropagation();
      const c = ((h = (p = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : p.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const c = i.currentTarget, o = c.dataset.skill, r = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: p } = await import("./roll-sheet-B4Kfvgmh.mjs");
      p(this.actor, o, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, P, q, O, w, C;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), r = o == null ? void 0 : o.dataset.slot;
      if (!r) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((q = (P = this.actor.items).get) == null ? void 0 : q.call(P, h)) ?? ((w = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : w.call(O, (A) => A.id === h));
      (C = v == null ? void 0 : v.sheet) == null || C.render(!0);
    });
    const l = (i, c) => {
      var p;
      const o = i.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = r.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      let p = Number(c.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await r.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, p = r.items.get(o);
      if (!p) return;
      const h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = I ? I.split(/\s*,\s*/).filter((O) => T.includes(O)) : [], q = P.find((O) => {
          var w;
          return (((w = v[O]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (q) {
          const O = P.filter((w) => w !== q);
          h["system.weapons.slotOrder"] = O.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, O;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], T = I.find((w) => {
        var C;
        return (((C = p[w]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let w = I.find((A) => {
          var j;
          return !((j = p[A]) != null && j.itemId);
        });
        const C = new Set(I);
        if (!w) {
          const A = v.find((j) => !C.has(j));
          if (!A) return;
          w = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${w}.damage`]: ((q = r == null ? void 0 : r.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = r == null ? void 0 : r.system) == null ? void 0 : O.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const w = I.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const c = i.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), r = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), p = r == null ? void 0 : r.dataset.slot;
      if (!p) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((w = c.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let P = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (P || (P = document.createElement("img"), P.className = "karakter-microchip-slot-thumb", P.alt = "", r == null || r.insertBefore(P, T)), P.src = I, P.style.display = "") : P && P.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const q = h ? this.actor.items.get(h) : null, O = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      h && (O[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const r = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var P;
        return (((P = r[T]) == null ? void 0 : P.itemId) ?? "").trim() === c;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, o));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var p;
        (p = r.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, o)), c.addEventListener("dragleave", (r) => {
        var p;
        return (p = r.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var p;
        (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!c || !o) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((v = r[c]) == null ? void 0 : v.items) ? r[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var p;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      (p = r == null ? void 0 : r.sheet) == null || p.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(o) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = (c.value ?? "").trim();
      await r.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, O;
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, h = (p.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], T = I.find((w) => {
        var C;
        return (((C = p[w]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (T) return;
        let w = I.find((A) => {
          var j;
          return !((j = p[A]) != null && j.itemId);
        });
        const C = new Set(I);
        if (!w) {
          const A = v.find((j) => !C.has(j));
          if (!A) return;
          w = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: r.name ?? "",
          [`system.weapons.${w}.damage`]: ((q = r.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = r.system) == null ? void 0 : O.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const w = I.filter((C) => C !== T);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor, p = r.items.get(o), h = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const v = r.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = I ? I.split(/\s*,\s*/).filter((O) => T.includes(O)) : [], q = P.find((O) => {
          var w;
          return (((w = v[O]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (q) {
          const O = P.filter((w) => w !== q);
          h["system.weapons.slotOrder"] = O.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const c = i.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "Targy") return;
      const p = (c.value ?? "").trim();
      await r.update({ "system.quantity": p }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const f = this, m = (i) => {
      var r, p, h, v;
      if (!i) return;
      const c = f._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const o = ((p = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : p.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      f.actor.update(c).then(() => {
        o && setTimeout(() => f.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (i) => {
      var c, o, r;
      return i && (((o = (c = f.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, i)) || f.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(f.id)}`)));
    };
    f._votvBlur = (i) => {
      var h;
      const c = i.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const r = c.form;
      if (!y(r)) return;
      const p = i.relatedTarget;
      p && (r.contains(p) || f.id && ((h = p.closest) != null && h.call(p, `#${CSS.escape(f.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: f.id, at: Date.now() }), m(r));
    }, document.body.addEventListener("blur", f._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, f, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const b = ((m = a[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, U._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, n, l, f, m, y, b, u, i, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            o = r;
            break;
          }
      }
      if (o) {
        const r = await fromUuid(o);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let p = r.id;
          if (((a = r.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const P = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [P]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const h = (((n = r.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", T = Array.isArray((l = v[I]) == null ? void 0 : l.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          T.includes(p) || T.push(p), await this.actor.update({ [`system.abilities.${I}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            o = r;
            break;
          }
      }
      if (o) {
        const r = await fromUuid(o);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const p = this.actor, h = ((m = r.parent) == null ? void 0 : m.id) !== p.id;
          let v = r.id;
          if (h) {
            const I = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const I = ((b = p.system) == null ? void 0 : b.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = T ? T.split(/\s*,\s*/).filter((w) => P.includes(w)) : [], O = q.filter((w) => {
              var C;
              return (((C = I[w]) == null ? void 0 : C.itemId) ?? "").trim() === v;
            });
            if (O.length > 0) {
              const C = {
                "system.weapons.slotOrder": q.filter((A) => !O.includes(A)).join(",")
              };
              for (const A of O)
                C[`system.weapons.${A}.itemId`] = "", C[`system.weapons.${A}.name`] = "", C[`system.weapons.${A}.damage`] = "", C[`system.weapons.${A}.bonus`] = "";
              await p.update(C);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const p = this.actor;
          if (((u = r.parent) == null ? void 0 : u.id) !== p.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const p = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== p.id && await p.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const p = this.actor;
          ((c = r.parent) == null ? void 0 : c.id) !== p.id && await p.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, f, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((b = d.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((u = d.system) == null ? void 0 : u.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
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
    var m, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const i = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return i - c;
    }).map((b) => b.id), n = d.indexOf(t), l = d.indexOf(e);
    if (n === -1 || l === -1) return;
    d.splice(n, 1), d.splice(l, 0, t);
    const f = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var a, d, n;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
  async _postItemToChat(s) {
    var f, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", a = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, d;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var n, l, f;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((l = a.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, y, b;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, l = Array.isArray((b = n[e]) == null ? void 0 : b.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, f, m, y, b;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(a) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: b } = We(m), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: b } },
      rollMode: u
    });
  }
  async _rollMorale() {
    var d;
    const s = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
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
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((I) => I.id === t.itemId) ?? null);
    const l = n && n.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, y = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", b = Number(a[y] || 0) || 0, u = f + b, c = `3d6${u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""}`, o = new Roll(c);
    await o.evaluate({ async: !0 });
    const { resultType: r, label: p } = We(o), h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: r, critLabel: p } },
      rollMode: h
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, c, o, r, p;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
z(U, "PARTS", foundry.utils.mergeObject(
  K(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((_t = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Dt = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ot = (Ct = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.window) == null ? void 0 : Ot.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
z(U, "BODY_PART_BY_SKILL", {
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
let Ye = U;
var qt, Lt, Pt, Nt;
const Z = class Z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const t = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const i = document.activeElement, c = a.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, c;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = f.querySelector) == null ? void 0 : i.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), n;
  }
  async _prepareContext(s) {
    var W, ee, fe, te, ue, ke, ve, we, Ie, ye, X, se, Ne;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((W = this.actor) == null ? void 0 : W.system), e.showDeathSkull = !1, e.sizeForSelect = (((fe = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : fe.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((te = t == null ? void 0 : t.items) == null ? void 0 : te.contents) ?? [], d = ((ue = t == null ? void 0 : t.system) == null ? void 0 : ue.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => n.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = f.length > 0 ? f : n, i = n.filter((k) => !u.includes(k)), c = [...u, ...i], o = c.filter((k) => {
      var x;
      const F = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return F && m.some((H) => H.id === F);
    });
    e.weaponSlots = o.map((k) => {
      const F = d[k] ?? {}, x = (F.itemId ?? "").trim(), H = y.find((Se) => Se.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (H == null ? void 0 : H.name) || F.name || b,
        img: (H == null ? void 0 : H.img) || ""
      };
    });
    const r = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ae;
      const F = k.id;
      let x = null, H = {};
      for (const Le of c)
        if ((((Ae = d[Le]) == null ? void 0 : Ae.itemId) ?? "").trim() === F) {
          x = Le, H = d[Le] ?? {};
          break;
        }
      const Se = !!x, G = (k == null ? void 0 : k.system) ?? {}, Ee = typeof G.range == "string" ? (G.range || "").trim() : "", de = G.type ?? "", ge = (r[de] ?? de) || "—", me = G.size ?? "", Te = (p[me] ?? me) || "", _e = [ge, Te].filter(Boolean).join(", ") || ge || "—", Me = de === "projectile" || me === "thrown", Re = G.quantity != null ? String(G.quantity).trim() : "1", je = String(G.bonus ?? H.bonus ?? "").trim() || "0", Ke = (G.damage ?? H.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Ee || "—",
        typeAndSize: _e,
        quantity: Re,
        isProjectile: Me,
        equipped: Se,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const h = a.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var H;
      const F = (k == null ? void 0 : k.system) ?? {}, x = ((H = k.system) == null ? void 0 : H.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: (F.level ?? "").toString().trim() || "—",
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const v = ((ve = (ke = t == null ? void 0 : t.system) == null ? void 0 : ke.gear) == null ? void 0 : ve.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var de, ge, me, Te;
      const F = k.id;
      let x = null;
      for (const _e of I)
        if ((((de = v[_e]) == null ? void 0 : de.itemId) ?? "").trim() === F) {
          x = _e;
          break;
        }
      const H = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", Se = H === "active" ? "Aktív" : H === "passive" ? "Passzív" : H || "—", G = (((me = k == null ? void 0 : k.system) == null ? void 0 : me.description) ?? "").trim(), Ee = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: Se,
        description: Ee,
        kp: Number((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: H === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const P = a.filter((k) => k.type === "Targy");
    e.itemsTable = P.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, x = (F.description ?? "").trim(), H = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: H
      };
    });
    const q = a.filter((k) => k.type === "Egyeb");
    e.egyebList = q.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), H = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: H
      };
    });
    const O = (((we = e.weaponsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((Ie = e.armorTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((ye = e.microchipsTable) == null ? void 0 : ye.length) ?? 0) > 0 || (((X = e.itemsTable) == null ? void 0 : X.length) ?? 0) > 0 || (((se = e.egyebList) == null ? void 0 : se.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const w = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.abilities) ?? {}, C = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), A = new Map(C.map((k) => [k.id, k])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = j, e.abilityHatterSlot = j;
    const B = (k) => {
      const F = w[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, V = (k) => (k || []).map((F) => {
      const x = A.get(F);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = V(B("passive")), e.abilityActiveList = V(B("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, b;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, r, p;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((p = (r = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, r, p;
      u.preventDefault();
      const i = (r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    });
    const a = (u) => {
      var o, r;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (r = c == null ? void 0 : c.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var r, p, h, v;
      u.preventDefault();
      const i = (p = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : p.call(r, ".karakter-weapon-slot"), c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var r;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, c = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-B4Kfvgmh.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, r, p, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let c = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (c = (((((h = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var p, h;
      u.preventDefault();
      const i = u.currentTarget, c = (((p = i == null ? void 0 : i.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-B4Kfvgmh.mjs");
      r(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, r;
      u.preventDefault();
      const i = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, T, P, q;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !c || !this.actor) return;
      const o = ((P = this.actor.system) == null ? void 0 : P.abilities) ?? {}, p = (Array.isArray((q = o[i]) == null ? void 0 : q.items) ? o[i].items.slice() : []).filter((O) => O !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, r = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      r && (p[`system.weapons.${r}.itemId`] = "", p[`system.weapons.${r}.name`] = "", p[`system.weapons.${r}.damage`] = "", p[`system.weapons.${r}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var p, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var P;
        return (((P = c[T]) == null ? void 0 : P.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, r;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((r = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var p, h, v;
      const i = u.currentTarget, c = (h = (p = i == null ? void 0 : i.dataset) == null ? void 0 : p.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const r = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", r), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const n = this, l = (u) => {
      if (!u) return;
      const i = n._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && n.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (u) => {
      var i, c, o;
      return u && (((c = (i = n.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, u)) || n.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (u) => {
      var p;
      const i = u.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = i.form;
      if (!f(o)) return;
      const r = u.relatedTarget;
      r && (o.contains(r) || n.id && ((p = r.closest) != null && p.call(r, `#${CSS.escape(n.id)}`))) || l(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0), n._votvNpcItemHookRegistered || (n._votvNpcItemUpdateHook = (u, i, c) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, n._votvNpcItemDeleteHook = (u, i, c) => {
      var o;
      n.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, Hooks.on("updateItem", n._votvNpcItemUpdateHook), Hooks.on("deleteItem", n._votvNpcItemDeleteHook), n._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, d;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && await this.actor.update(n).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, s);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  /**
   * Támadás dobás NPC-nek – ugyanolyan képlet, mint a karakter lapon:
   * 3d6 + (Kézifegyver Használat / Löveghasználat + fegyver bónusz)
   * @param {string} slot - pl. "slot1"
   */
  async _rollWeapon(s) {
    var I, T, P, q;
    const e = this.actor;
    if (!e) return;
    const a = (((I = e.system) == null ? void 0 : I.weapons) ?? {})[s] ?? {}, d = ((T = e.system) == null ? void 0 : T.skills) ?? {}, n = ((P = e.items) == null ? void 0 : P.filter((O) => O.type === "Fegyver")) ?? [];
    let l = null;
    a.itemId && (l = n.find((O) => O.id === a.itemId) ?? null);
    const f = l && l.name || a.name || "Fegyver", m = Number(a.bonus || 0) || 0, b = (((q = l == null ? void 0 : l.system) == null ? void 0 : q.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", u = Number(d[b] || 0) || 0, i = m + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(o);
    await r.evaluate({ async: !0 });
    const { resultType: p, label: h } = We(r), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, b, u, i, c, o, r, p;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((r = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : r.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, c, o, r, p, h, v, I, T, P, q, O;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const a = ((w) => {
      var A;
      if (!w) return null;
      const C = w.uuid ?? w.documentUuid ?? ((A = w.data) == null ? void 0 : A.uuid) ?? (typeof w == "string" ? w : null);
      if (C) return C;
      if (typeof w == "object") {
        for (const j of Object.values(w))
          if (typeof j == "string" && j.includes(".") && j.startsWith("Item.")) return j;
      }
      return null;
    })(e);
    if (!a) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let w = d.id;
      if (((i = d.parent) == null ? void 0 : i.id) !== n.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        w = ((c = (await n.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : c.id) ?? w;
      }
      const C = (((o = d.system) == null ? void 0 : o.kind) ?? "passive").toString(), A = ((r = n.system) == null ? void 0 : r.abilities) ?? {}, j = C === "active" ? "active" : "passive", B = Array.isArray((p = A[j]) == null ? void 0 : p.items) ? A[j].items.slice() : Array.isArray(A[j]) ? A[j].slice() : [];
      B.includes(w) || B.push(w), await n.update({ [`system.abilities.${j}.items`]: B }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((h = d.parent) == null ? void 0 : h.id) === n.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await n.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const w = ((I = n.system) == null ? void 0 : I.weapons) ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (w.slotOrder ?? "").trim(), j = A ? A.split(/\s*,\s*/).filter((W) => C.includes(W)) : [];
      let B = C.find((W) => {
        var ee;
        return !(((ee = w[W]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      B || (B = C.find((W) => !j.includes(W)) ?? "slot1");
      const V = j.includes(B) ? j : [...j, B].filter((W) => C.includes(W));
      await n.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${B}.itemId`]: m,
        [`system.weapons.${B}.name`]: d.name ?? "",
        [`system.weapons.${B}.damage`]: ((T = d.system) == null ? void 0 : T.damage) ?? "",
        [`system.weapons.${B}.bonus`]: ((P = d.system) == null ? void 0 : P.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const w = ((O = (q = n.system) == null ? void 0 : q.gear) == null ? void 0 : O.microchips) ?? {}, A = ["slot1", "slot2", "slot3"].find((j) => {
        var B;
        return !(((B = w[j]) == null ? void 0 : B.itemId) ?? "").trim();
      });
      A && await n.update({
        [`system.gear.microchips.${A}.itemId`]: m,
        [`system.gear.microchips.${A}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var f, m, y, b, u, i;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const c = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let d;
      if (a.type === "checkbox")
        d = a.checked;
      else if (a.type === "number") {
        if (a.value === "") continue;
        d = Number(a.value);
      } else if (a.name === "system.resources.kp" || a.name === "system.resources.kp2" || a.name === "system.resources.kp3") {
        const n = (a.value ?? "").trim();
        if (n === "") continue;
        d = Number(n) || 0;
      } else
        d = a.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, a.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(Z, "PARTS", foundry.utils.mergeObject(
  K(Z, Z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(Z, Z, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((qt = K(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Lt = K(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Lt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Nt = (Pt = K(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Pt.window) == null ? void 0 : Nt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = Z;
var Et;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(re, "PARTS", foundry.utils.mergeObject(K(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Et = K(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Et.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = re;
var At;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(ne, "PARTS", foundry.utils.mergeObject(K(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((At = K(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : At.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ne;
var Ft;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(ae, "PARTS", foundry.utils.mergeObject(K(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ft = K(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ft.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = ae;
var $t;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, e._votvInput = (n) => {
      var m;
      const l = n.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(f), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(oe, "PARTS", foundry.utils.mergeObject(K(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject((($t = K(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = oe;
var xt;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(ce, "PARTS", foundry.utils.mergeObject(K(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((xt = K(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 })
}));
let et = ce;
var Mt;
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, y, b, u, i, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = n.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (n) => {
      var l, f, m;
      return n && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var f, m, y;
      const l = ((f = n.target) == null ? void 0 : f.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && a(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
z(le, "PARTS", foundry.utils.mergeObject(K(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Mt = K(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = le;
const jt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, a, d, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Yt, CONFIG.Actor.dataModels.Npc = Rt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vt, CONFIG.Item.dataModels.weapon = vt, CONFIG.Item.dataModels.Pancel = Xt, CONFIG.Item.dataModels.MikroChip = Zt, CONFIG.Item.dataModels.Kepesseg = St, CONFIG.Item.dataModels.ability = St, CONFIG.Item.dataModels.Targy = es, CONFIG.Item.dataModels.Egyeb = ss, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Je, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ze, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ve, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", et, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", tt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const E = 500;
  Hooks.on("updateActor", (l, f, m, y) => {
    var I, T, P, q, O;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), c = [], o = (I = game.actors) == null ? void 0 : I.get(b);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of r)
      ((T = w.document) == null ? void 0 : T.id) !== b || ((P = w.document) == null ? void 0 : P.documentName) !== "Actor" || ((q = w.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || c.includes(w) || c.push(w);
    if (i && c.some((w) => {
      const C = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return C && C.contains(u);
    })) return;
    const h = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < E ? h.appId : null;
    setTimeout(() => {
      for (const w of c)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== v && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, y) => {
    var c, o, r;
    const b = l == null ? void 0 : l.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || l.type !== "Fegyver") return;
    const u = ((c = b.system) == null ? void 0 : c.weapons) ?? {}, i = {};
    for (const [p, h] of Object.entries(u)) {
      if (!p.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== l.id || (i[`system.weapons.${p}.name`] = l.name ?? "", i[`system.weapons.${p}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${p}.bonus`] = ((r = l.system) == null ? void 0 : r.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var E, s;
  document.body.addEventListener("click", async (e) => {
    var p, h, v, I, T, P, q, O, w, C, A, j, B, V, W, ee, fe, te, ue, ke, ve, we, Ie;
    const t = (h = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const d = (v = game.messages) == null ? void 0 : v.get(a), n = (T = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!n) return;
    const l = n.actorId ?? ((P = d == null ? void 0 : d.speaker) == null ? void 0 : P.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((q = game.actors) == null ? void 0 : q.get(n.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(l));
    if (f || (f = ((C = (w = game.scenes) == null ? void 0 : w.contents) == null ? void 0 : C.flatMap((X) => {
      var se;
      return ((se = X.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((X) => X.actor).find((X) => X && (X.id === l || X.id === n.actorId))) ?? null), !f) return;
    const m = n.itemId ? ((j = (A = f.items) == null ? void 0 : A.get) == null ? void 0 : j.call(A, n.itemId)) ?? ((W = (V = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : V.find) == null ? void 0 : W.call(V, (ye) => ye.id === n.itemId)) : null;
    let y = (n.damageFormula ?? "").trim();
    if (y || (y = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !y && n.slotKey && (y = (((((fe = f.system) == null ? void 0 : fe.weapons) ?? {})[n.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (ve = (te = ui.notifications) == null ? void 0 : te.warn) == null || ve.call(te, ((ke = (ue = game.i18n) == null ? void 0 : ue.localize) == null ? void 0 : ke.call(ue, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = n.targetName || "", c = n.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (n.slotKey ? ((Ie = (((we = f.system) == null ? void 0 : we.weapons) ?? {})[n.slotKey]) == null ? void 0 : Ie.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    c && (r += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, l, f, m, y, b;
      if (!((l = (n = e.target) == null ? void 0 : n.closest) != null && l.call(n, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), a = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (E = game.user) != null && E.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const a = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(a != null && a.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: jt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await a.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var n, l, f, m, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((n = game.actors) == null ? void 0 : n.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, c = ((l = i == null ? void 0 : i.bar1) == null ? void 0 : l.attribute) ?? "", o = ((f = i == null ? void 0 : i.bar2) == null ? void 0 : f.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((m = u.tokens) == null ? void 0 : m.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, o);
        }
    }
    const a = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((y = game.actors) == null ? void 0 : y.filter((u) => u.type === "Npc")) ?? [];
    for (const u of d)
      try {
        await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((b = u.tokens) == null ? void 0 : b.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(a);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (E, s, e) => {
  var n, l;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, a = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (l = game.actors) == null ? void 0 : l.get(a) : null;
  if (d) {
    if (d.type === "Karakter") {
      E.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && E.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("preCreateCombatant", (E, s, e) => {
  const t = E.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && E.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (E, s, e) => {
  if ((E == null ? void 0 : E.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (E, s, e) => {
  var d;
  const t = E == null ? void 0 : E.object, a = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const n = s[0] ?? s;
    n != null && n.classList && n.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (E, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || E.updateSource({
    width: 3840,
    height: 2160,
    "background.src": jt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (E, s, e) => {
  var m, y, b, u;
  const t = ((m = E.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel, n = t.weaponAttack, l = t.weapon;
  if (!a && !d && !n) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (a && f.classList.add(`votv-${a}`), d) {
      const i = f.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, r.textContent = d, o.appendChild(r);
      }
    }
    if (n && l && (l.actorId || (b = E.speaker) != null && b.actor)) {
      const i = f.querySelector(".dice-total"), c = (i == null ? void 0 : i.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const p = !!l.isHit, h = l.targetName || "Célpont";
        r.textContent = p ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(r);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        p.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((u = E.speaker) == null ? void 0 : u.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(E.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-C9QfKyC3.mjs.map
