var jt = Object.defineProperty;
var Kt = Object.getPrototypeOf;
var Ht = Reflect.get;
var Ut = (E, s, e) => s in E ? jt(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var z = (E, s, e) => Ut(E, typeof s != "symbol" ? s + "" : s, e);
var j = (E, s, e) => Ht(Kt(E), e, s);
const { HTMLField: Bt, NumberField: P, SchemaField: R, StringField: I, BooleanField: X, ArrayField: He } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new R({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new P({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new I({ required: !1, blank: !0, initial: "" }),
        assignment: new I({ required: !1, blank: !0, initial: "" }),
        subAssignment: new I({ required: !1, blank: !0, initial: "" }),
        background: new I({ required: !1, blank: !0, initial: "" }),
        languages: new I({ required: !1, blank: !0, initial: "" })
      }),
      resources: new R({
        health: new R({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new R({
          head: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          torso: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          arms: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          legs: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new R({
          head: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new R({
          head: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new R({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new R({
        defense: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new R({
        deception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new I({ required: !1, blank: !0, initial: "" }),
        combatTraining: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new R({
        slotOrder: new I({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new R({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new R({
        microchips: new R({
          slot1: new R({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          }),
          slot2: new R({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          }),
          slot3: new R({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          })
        }),
        equipment: new I({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new R({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new R({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new R({
        faji: new R({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new R({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        passive: new R({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new R({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new R({
        biography: new Bt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: zt } = foundry.data.fields;
class Gt extends xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new zt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Wt, NumberField: ss, StringField: qe } = foundry.data.fields;
class bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Wt({ required: !1, initial: !1 }),
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
const { BooleanField: Yt, StringField: Ue } = foundry.data.fields;
class Jt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Yt({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: kt } = foundry.data.fields;
class Qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new kt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new kt({
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
const { NumberField: Xt, StringField: vt } = foundry.data.fields;
class wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new vt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new vt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Xt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: It } = foundry.data.fields;
class Zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new It({ required: !1, blank: !0, initial: "" }),
      quantity: new It({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Vt } = foundry.data.fields;
class es extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Vt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(E) {
  if (!E || !Array.isArray(E.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let o = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let c = r;
    for (const n of i) {
      if (!n) continue;
      if (Array.isArray(n.terms)) {
        d(n.terms, c);
        continue;
      }
      if (typeof n.operator == "string") {
        c = n.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof n.faces == "number" ? n.faces : void 0, p = Array.isArray(n.results) ? n.results : null;
      if (!u || !p || u === 8 || u !== 6) continue;
      const b = !o && c >= 0 && (n.number === 3 || n.number === "3") ? (o = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const S = Number(v.result ?? v);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  d(E.terms, 1);
  const a = s.filter((i) => i === 6).length, l = s.filter((i) => i === 1).length, f = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, y = a + f, h = l + m;
  return y > 0 && y === h ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var St, Tt, _t, Ot;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var o, d, a, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((o = s.querySelector) == null ? void 0 : o.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), o = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (o.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (o.windowScrollTop = t.scrollTop), o;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: o } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && o && (o.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, a = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const u = document.activeElement, p = a.contains(u), b = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      p && b && (l.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, y = this.form ?? this.element, h = l.scrollState, i = l.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", c = () => {
      var u, p;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((u = y.querySelector) == null ? void 0 : u.call(y, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (p = y.querySelector) == null ? void 0 : p.call(y, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), o = Number(e);
    if (o <= 0 || t <= 0) return 0;
    const d = Math.floor(o / 3), a = Math.floor(2 * o / 3);
    return t <= d ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, o, d;
    const s = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const l = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, o, d;
    const s = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (a) => {
        var l;
        return a.type === "Pancel" && ((l = a.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const l = String(((d = a.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(l);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, r, c, n, u, p, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const o = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (c = o.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : n.value) ?? 0, a = ((u = o.currentHealth) == null ? void 0 : u.legs) ?? 0, l = B._healthStatusFromRatio(a, d), f = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, l, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, l, f, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, o = ((f = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, o);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, f, m, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const o = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (f = o.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, a = ((y = o.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(a, d);
  }
  async _prepareContext(s) {
    var ge, pe, Te, _e, Me, Re, je, Ke, Ne, Ee, st, it, rt, nt, at, ot, ct, lt, ut, dt, mt, pt, ft;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Te = (pe = (ge = this.actor.system) == null ? void 0 : ge.resources) == null ? void 0 : pe.stress) == null ? void 0 : Te.value) || 0;
    e.stressOver10 = t > 10;
    const o = this.actor.system.resources ?? {}, d = o.hitLocations ?? {}, a = o.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const O = ((_e = d[g]) == null ? void 0 : _e.value) ?? 0, _ = a[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(_, O);
    }
    const f = (Number(a.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(a[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((Re = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : Re.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const c = this._getTotalArmorSpeedPenalty();
    r += c, e.effectiveGivenSpeed = r;
    const u = (Number(((Ke = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Ke.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: u } },
      { inplace: !1 }
    );
    const p = ((Ne = e.system) == null ? void 0 : Ne.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0), e.totalSpeed = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number(p.givenSpeed) ?? 0);
    const b = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(b)) {
      const _ = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = _, e.skillDisabled[g] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const v = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = (v.slotOrder ?? "").trim(), D = C ? C.split(/\s*,\s*/).filter((g) => S.includes(g)) : [], q = (Ee = this.actor.system.gear) == null ? void 0 : Ee.microchips, w = q && typeof q == "object" && !Array.isArray(q) ? q : {}, T = (((st = w.slot1) == null ? void 0 : st.itemId) ?? "").trim(), A = (((it = w.slot2) == null ? void 0 : it.itemId) ?? "").trim(), N = (((rt = w.slot3) == null ? void 0 : rt.itemId) ?? "").trim(), U = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const _ = typeof g.sort == "number" ? g.sort : 0, L = typeof O.sort == "number" ? O.sort : 0;
      return _ - L;
    }).map((g) => {
      var fe, De, Ce, he, be, $e;
      const O = g.type === "Fegyver", _ = g.type === "MikroChip";
      let L = 0, M = "", Q = null;
      for (let Ae = 0; Ae < D.length; Ae++) {
        const xe = D[Ae];
        if ((((fe = v[xe]) == null ? void 0 : fe.itemId) ?? "") === g.id) {
          L = Ae + 1, M = ((De = v[xe]) == null ? void 0 : De.bonus) ?? "", Q = xe;
          break;
        }
      }
      let Y = null;
      _ && (T === g.id ? Y = "slot1" : A === g.id ? Y = "slot2" : N === g.id && (Y = "slot3"));
      const Fe = O && ((Ce = g.system) != null && Ce.damage) ? g.system.damage : "", se = O && typeof ((he = g.system) == null ? void 0 : he.range) == "string" ? (g.system.range || "").trim() : "", Oe = Q ? Number((be = v[Q]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: L,
        slotBonus: M,
        slotKey: Q,
        microchipSlotKey: Y,
        isEquipped: !!(Q || Y),
        damage: Fe,
        rangeStr: se,
        slotBonusNum: Oe,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = U;
    const J = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((g) => g.type === "Fegyver"), G = J.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = G;
    const ee = "— Nincs fegyver —", ke = D.filter((g) => {
      const _ = ((v[g] ?? {}).itemId ?? "").trim();
      return _ ? !!J.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = ke.map((g, O) => {
      const _ = v[g] ?? {}, L = (_.itemId ?? "").trim(), M = G.find((Q) => Q.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: O + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || ee,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const le = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ue = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = J.map((g) => {
      var yt, gt, ht;
      const O = g.id;
      let _ = null, L = {};
      for (const Be of D)
        if ((((yt = v[Be]) == null ? void 0 : yt.itemId) ?? "").trim() === O) {
          _ = Be, L = v[Be] ?? {};
          break;
        }
      const M = !!_, Q = ((gt = g.system) == null ? void 0 : gt.equipped) !== void 0 && ((ht = g.system) == null ? void 0 : ht.equipped) !== null ? !!g.system.equipped : M, Y = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Y.range == "string" ? (Y.range || "").trim() : "", se = Y.type ?? "", Oe = (le[se] ?? se) || "—", fe = Y.size ?? "", De = (ue[fe] ?? fe) || "", Ce = [Oe, De].filter(Boolean).join(", ") || Oe || "—", he = se === "projectile" || fe === "thrown", be = Y.quantity, $e = be != null ? String(be).trim() : "1", Ae = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Rt = Ae || xe || "0";
      return {
        slotKey: _ ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? ee,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Rt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: Oe,
        typeAndSize: Ce,
        quantity: $e,
        quantityDisplay: he ? $e : "—",
        isProjectile: he,
        equipped: Q,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const ve = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = ve.map((g) => {
      var L, M;
      const O = (g == null ? void 0 : g.system) ?? {}, _ = ((L = g.system) == null ? void 0 : L.equipped) !== void 0 && ((M = g.system) == null ? void 0 : M.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const we = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = we.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, _ = (O.description ?? "").trim(), L = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", M = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const Ie = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = Ie.map((g) => {
      const _ = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const de = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "MikroChip"), te = de.map((g) => ({ id: g.id, name: g.name, img: g.img })), V = "— Nincs Mikro-Chip —", ye = ["slot1", "slot2", "slot3"], Le = (g) => {
      var _, L, M;
      const O = [];
      return g !== 1 && O.push((((_ = w.slot1) == null ? void 0 : _.itemId) ?? "").trim()), g !== 2 && O.push((((L = w.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && O.push((((M = w.slot3) == null ? void 0 : M.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = te.filter((g) => !Le(1).includes(g.id)), e.microchipItemsSlot2 = te.filter((g) => !Le(2).includes(g.id)), e.microchipItemsSlot3 = te.filter((g) => !Le(3).includes(g.id)), e.microchipSlots = ye.map((g) => {
      const O = w[g] ?? {}, _ = (O.itemId ?? "").trim(), L = de.find((M) => M.id === _);
      return {
        slotKey: g,
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || O.name || V,
        img: (L == null ? void 0 : L.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, _ = w[O] ?? {}, L = (_.itemId ?? "").trim(), M = te.find((Q) => Q.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || _.name || V, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = de.map((g) => {
      var fe, De, Ce, he;
      const O = g.id;
      let _ = null;
      for (const be of ye)
        if ((((fe = w[be]) == null ? void 0 : fe.itemId) ?? "").trim() === O) {
          _ = be;
          break;
        }
      const L = !!_, M = ((De = g == null ? void 0 : g.system) == null ? void 0 : De.abilityType) ?? "", Q = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Fe = Number((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, se = (((he = g == null ? void 0 : g.system) == null ? void 0 : he.description) ?? "").trim(), Oe = se ? se.length > 60 ? se.slice(0, 57) + "…" : se : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: Q,
        description: Oe,
        kp: Fe,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: L
      };
    });
    const k = (((ut = e.weaponsTable) == null ? void 0 : ut.length) ?? 0) > 0 || (((dt = e.armorTable) == null ? void 0 : dt.length) ?? 0) > 0 || (((mt = e.microchipsTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.itemsTable) == null ? void 0 : pt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !k;
    const F = this.actor.system.abilities ?? {}, x = (((ft = this.actor.items) == null ? void 0 : ft.contents) ?? []).map((g) => {
      var O, _, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((_ = g.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), K = new Map(x.map((g) => [g.id, g])), Se = "— Nincs képesség —", W = (g) => {
      const O = F[g] ?? {}, _ = (O.itemId ?? "").trim(), L = _ ? K.get(_) : null, M = (L == null ? void 0 : L.description) ?? "", Q = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || O.name || Se,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: Q
      };
    };
    e.abilityFajiSlot = W("faji"), e.abilityHatterSlot = W("hatter");
    const Pe = (g) => {
      const O = F[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, me = (g) => g.map((O) => {
      const _ = K.get(O);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = me(Pe("passive")), e.abilityActiveList = me(Pe("active")), e;
  }
  _attachFrameListeners(s) {
    var y, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-CX0OUxt2.mjs");
      n(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, u, p;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (r.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((u = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : u.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const o = (i) => {
      var n;
      const r = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const c = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', o);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && o({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, u, p;
      i.preventDefault(), i.stopPropagation();
      const r = ((p = (u = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p;
      i.preventDefault();
      const r = i.currentTarget, c = r.dataset.skill, n = ((p = r.textContent) == null ? void 0 : p.trim()) || c, { openRollSheetForSkill: u } = await import("./roll-sheet-CX0OUxt2.mjs");
      u(this.actor, c, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, S, C, D, q, w, T;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), n = c == null ? void 0 : c.dataset.slot;
      if (!n) return;
      const p = (((S = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!p) return;
      const b = ((D = (C = this.actor.items).get) == null ? void 0 : D.call(C, p)) ?? ((w = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : w.call(q, (A) => A.id === p));
      (T = b == null ? void 0 : b.sheet) == null || T.render(!0);
    });
    const a = (i, r) => {
      var u;
      const c = i.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = i.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (u = n.sheet) == null || u.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), a(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), a(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, c = r.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n) return;
      let u = Number(r.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await n.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, u = n.items.get(c);
      if (!u) return;
      const p = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((q) => S.includes(q)) : [], D = C.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (D) {
          const q = C.filter((w) => w !== D);
          p["system.weapons.slotOrder"] = q.join(","), p[`system.weapons.${D}.itemId`] = "", p[`system.weapons.${D}.name`] = "", p[`system.weapons.${D}.damage`] = "", p[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var D, q;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, p = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var T;
        return (((T = u[w]) == null ? void 0 : T.itemId) ?? "").trim() === c;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((A) => {
          var N;
          return !((N = u[A]) != null && N.itemId);
        });
        const T = new Set(v);
        if (!w) {
          const A = b.find((N) => !T.has(N));
          if (!A) return;
          w = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((D = n == null ? void 0 : n.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = n == null ? void 0 : n.system) == null ? void 0 : q.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((T) => T !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const c = r.closest(".karakter-microchip-slot-select-wrap"), n = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const r = i.currentTarget, c = r.closest(".karakter-microchip-slot-select-wrap"), n = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), u = n == null ? void 0 : n.dataset.slot;
      if (!u) return;
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((w = r.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), S = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let C = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      v ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", n == null || n.insertBefore(C, S)), C.src = v, C.style.display = "") : C && C.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const D = p ? this.actor.items.get(p) : null, q = {
        [`system.gear.microchips.${u}.itemId`]: p,
        [`system.gear.microchips.${u}.name`]: (D == null ? void 0 : D.name) ?? ""
      };
      p && (q[`system.gear.microchips.${u}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = n[S]) == null ? void 0 : C.itemId) ?? "").trim() === r;
      });
      p && await this.actor.update({
        [`system.gear.microchips.${p}.itemId`]: "",
        [`system.gear.microchips.${p}.name`]: "",
        [`system.gear.microchips.${p}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const c = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const c = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, c)), r.addEventListener("dragleave", (n) => {
        var u;
        return (u = n.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, c));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const c = r.dataset.slot;
      c && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, c)), r.addEventListener("dragleave", (n) => {
        var u;
        return (u = n.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => {
        var u;
        (u = n.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const c = r.dataset.area;
      c && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, c)), r.addEventListener("dragleave", (n) => {
        var u;
        return (u = n.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => {
        var u;
        (u = n.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!r || !c) return;
      const n = this.actor.system.abilities ?? {}, p = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var u;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      (u = n == null ? void 0 : n.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(c) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const u = (r.value ?? "").trim();
      await n.update({ "system.quantity": u }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var D, q;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, p = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var T;
        return (((T = u[w]) == null ? void 0 : T.itemId) ?? "").trim() === c;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((A) => {
          var N;
          return !((N = u[A]) != null && N.itemId);
        });
        const T = new Set(v);
        if (!w) {
          const A = b.find((N) => !T.has(N));
          if (!A) return;
          w = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((D = n.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = n.system) == null ? void 0 : q.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((T) => T !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, u = n.items.get(c), p = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((q) => S.includes(q)) : [], D = C.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (D) {
          const q = C.filter((w) => w !== D);
          p["system.weapons.slotOrder"] = q.join(","), p[`system.weapons.${D}.itemId`] = "", p[`system.weapons.${D}.name`] = "", p[`system.weapons.${D}.damage`] = "", p[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Targy") return;
      const u = (r.value ?? "").trim();
      await n.update({ "system.quantity": u }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    });
    const l = this, f = (i) => {
      var n, u, p, b;
      if (!i) return;
      const r = l._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const c = ((u = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : u.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      l.actor.update(r).then(() => {
        c && setTimeout(() => l.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, c, n;
      return i && (((c = (r = l.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || l.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const u = i.relatedTarget;
      u && (n.contains(u) || l.id && ((p = u.closest) != null && p.call(u, `#${CSS.escape(l.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: l.id, at: Date.now() }), f(n));
    }, document.body.addEventListener("blur", l._votvBlur, !0);
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
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), o = t.hitLocations ?? {}, d = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const y of a) {
      const h = ((m = o[y]) == null ? void 0 : m.value) ?? 0, i = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, o, d, a, l, f, m, y, h, i, r, c;
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            n = u;
            break;
          }
      }
      if (n) {
        const u = await fromUuid(n);
        if (u && u.documentName === "Item" && (u.type === "Kepesseg" || u.type === "ability")) {
          let p = u.id;
          if (((o = u.parent) == null ? void 0 : o.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(u.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const b = (((a = u.system) == null ? void 0 : a.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": u.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": u.name
            });
            return;
          }
          const S = b === "active" ? "active" : "passive", C = Array.isArray((l = v[S]) == null ? void 0 : l.items) ? v[S].items.slice() : Array.isArray(v[S]) ? v[S].slice() : [];
          C.includes(p) || C.push(p), await this.actor.update({ [`system.abilities.${S}.items`]: C });
          return;
        }
      }
    }
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            n = u;
            break;
          }
      }
      if (n) {
        const u = await fromUuid(n);
        if (u && u.documentName === "Item" && u.type === "Fegyver") {
          const p = this.actor, b = ((m = u.parent) == null ? void 0 : m.id) !== p.id;
          let v = u.id;
          if (b) {
            const S = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (b) {
            const S = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, C = (S.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = C ? C.split(/\s*,\s*/).filter((T) => D.includes(T)) : [], w = q.filter((T) => {
              var A;
              return (((A = S[T]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (w.length > 0) {
              const A = {
                "system.weapons.slotOrder": q.filter((N) => !w.includes(N)).join(",")
              };
              for (const N of w)
                A[`system.weapons.${N}.itemId`] = "", A[`system.weapons.${N}.name`] = "", A[`system.weapons.${N}.damage`] = "", A[`system.weapons.${N}.bonus`] = "";
              await p.update(A);
            }
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "Pancel") {
          const p = this.actor;
          if (((i = u.parent) == null ? void 0 : i.id) !== p.id) {
            const b = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "MikroChip") {
          const p = this.actor;
          ((r = u.parent) == null ? void 0 : r.id) !== p.id && await p.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
        if (u && u.documentName === "Item" && (u.type === "Targy" || u.type === "Egyeb")) {
          const p = this.actor;
          ((c = u.parent) == null ? void 0 : c.id) !== p.id && await p.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, a, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, f, m, y, h, i;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((o == null ? void 0 : o.type) !== "Item" || !(o != null && o.uuid)) return;
    const d = await fromUuid(o.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const a = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var o;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (o = s.currentTarget) == null || o.classList.add("karakter-actions-row-drag-over"));
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
    const d = this.actor.items.contents.slice().sort((h, i) => {
      const r = typeof h.sort == "number" ? h.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return r - c;
    }).map((h) => h.id), a = d.indexOf(t), l = d.indexOf(e);
    if (a === -1 || l === -1) return;
    d.splice(a, 1), d.splice(l, 0, t);
    const f = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var o, d, a;
    const e = ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const o = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, o)}px`;
  }
  async _postItemToChat(s) {
    var f, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (o = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      o = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, h, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", o = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
    var o, d;
    const e = ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var o;
    this._parseAbilityDrop(s) && (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var a, l, f;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((l = o.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: o.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var o;
    this._parseAbilityDrop(s) && (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, y, h;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((m = o.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const a = this.actor.system.abilities ?? {}, l = Array.isArray((h = a[e]) == null ? void 0 : h.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, a, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, f, m, y, h;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((o == null ? void 0 : o.type) !== "Item" || !(o != null && o.uuid)) return;
    const d = await fromUuid(o.uuid);
    if (!d || d.type !== "MikroChip") return;
    let a = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (a = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const o = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(o) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? d -= 6 : a === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: h } = We(m), i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: i
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
    const o = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": o });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, o = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = d.find((S) => S.id === t.itemId) ?? null);
    const l = a && a.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, y = (((v = a == null ? void 0 : a.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(o[y] || 0) || 0, i = f + h, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(c);
    await n.evaluate({ async: !0 });
    const { resultType: u, label: p } = We(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, h, i, r, c, n, u, p;
    const t = this.actor;
    if (!t) return;
    let o = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((u = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : u.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${o.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
z(B, "PARTS", foundry.utils.mergeObject(
  j(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((St = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Tt = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ot = (_t = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : _t.window) == null ? void 0 : Ot.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
z(B, "BODY_PART_BY_SKILL", {
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
let Ye = B;
var Dt, Ct, qt, Lt;
const Z = class Z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var o, d, a, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((o = s.querySelector) == null ? void 0 : o.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), o = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (o.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (o.windowScrollTop = t.scrollTop), o;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: o } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && o && (o.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, o = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, c = o.contains(r), n = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      c && n && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const a = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, c;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const n = ((r = f.querySelector) == null ? void 0 : r.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = y.selectionStart ?? 0, n.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (h || y) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), a;
  }
  async _prepareContext(s) {
    var G, ee, ke, le, ue, ve, we, Ie, de, te, V, ye, Le;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((ke = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : ke.size) ?? "").trim() || "Közepes";
    const t = this.actor, o = ((le = t == null ? void 0 : t.items) == null ? void 0 : le.contents) ?? [], d = ((ue = t == null ? void 0 : t.system) == null ? void 0 : ue.weapons) ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => a.includes(k)) : [], m = o.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = f.length > 0 ? f : a, r = a.filter((k) => !i.includes(k)), c = [...i, ...r], n = c.filter((k) => {
      var x;
      const F = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return F && m.some((K) => K.id === F);
    });
    e.weaponSlots = n.map((k) => {
      const F = d[k] ?? {}, x = (F.itemId ?? "").trim(), K = y.find((Se) => Se.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (K == null ? void 0 : K.name) || F.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const u = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ne;
      const F = k.id;
      let x = null, K = {};
      for (const Ee of c)
        if ((((Ne = d[Ee]) == null ? void 0 : Ne.itemId) ?? "").trim() === F) {
          x = Ee, K = d[Ee] ?? {};
          break;
        }
      const Se = !!x, W = (k == null ? void 0 : k.system) ?? {}, Pe = typeof W.range == "string" ? (W.range || "").trim() : "", me = W.type ?? "", ge = (u[me] ?? me) || "—", pe = W.size ?? "", Te = (p[pe] ?? pe) || "", _e = [ge, Te].filter(Boolean).join(", ") || ge || "—", Me = me === "projectile" || pe === "thrown", Re = W.quantity != null ? String(W.quantity).trim() : "1", je = String(W.bonus ?? K.bonus ?? "").trim() || "0", Ke = (W.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Pe || "—",
        typeAndSize: _e,
        quantity: Re,
        isProjectile: Me,
        equipped: Se,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const b = o.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const F = (k == null ? void 0 : k.system) ?? {}, x = ((K = k.system) == null ? void 0 : K.equipped) === !0;
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
    const v = ((we = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : we.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], C = o.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var me, ge, pe, Te;
      const F = k.id;
      let x = null;
      for (const _e of S)
        if ((((me = v[_e]) == null ? void 0 : me.itemId) ?? "").trim() === F) {
          x = _e;
          break;
        }
      const K = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", Se = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", W = (((pe = k == null ? void 0 : k.system) == null ? void 0 : pe.description) ?? "").trim(), Pe = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: Se,
        description: Pe,
        kp: Number((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const D = o.filter((k) => k.type === "Targy");
    e.itemsTable = D.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, x = (F.description ?? "").trim(), K = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: K
      };
    });
    const q = o.filter((k) => k.type === "Egyeb");
    e.egyebList = q.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const w = (((Ie = e.weaponsTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((de = e.armorTable) == null ? void 0 : de.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((V = e.itemsTable) == null ? void 0 : V.length) ?? 0) > 0 || (((ye = e.egyebList) == null ? void 0 : ye.length) ?? 0) > 0;
    e.showEquipmentDropZone = !w;
    const T = ((Le = t == null ? void 0 : t.system) == null ? void 0 : Le.abilities) ?? {}, A = o.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), N = new Map(A.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const U = (k) => {
      const F = T[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, J = (k) => (k || []).map((F) => {
      const x = N.get(F);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = J(U("passive")), e.abilityActiveList = J(U("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var n, u, p;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((p = (u = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var n, u, p;
      i.preventDefault();
      const r = (u = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : u.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    });
    const o = (i) => {
      var n, u;
      const r = (n = i == null ? void 0 : i.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var u, p, b, v;
      i.preventDefault();
      const r = (p = (u = i.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : p.call(u, ".karakter-weapon-slot"), c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const n = this.actor.items.get(c);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var u;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, c = (((u = r == null ? void 0 : r.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-CX0OUxt2.mjs");
      n(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, u, p, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !c && ((u = r == null ? void 0 : r.dataset) != null && u.slot) && (c = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p, b;
      i.preventDefault();
      const r = i.currentTarget, c = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-CX0OUxt2.mjs");
      u(this.actor, c, n);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var c, n;
      i.preventDefault();
      const r = (n = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : n.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var n, u;
      i.preventDefault();
      const r = (((u = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(r) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, S, C, D, q;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, c = (C = (S = i.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : C.itemId;
      if (!r || !c || !this.actor) return;
      const n = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, p = (Array.isArray((q = n[r]) == null ? void 0 : q.items) ? n[r].items.slice() : []).filter((w) => w !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var c, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (n = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : n.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const n = this.actor, u = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      u && (p[`system.weapons.${u}.itemId`] = "", p[`system.weapons.${u}.name`] = "", p[`system.weapons.${u}.damage`] = "", p[`system.weapons.${u}.bonus`] = ""), Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var c, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((n = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var p, b, v, S;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (p = i.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((C) => {
        var D;
        return (((D = c[C]) == null ? void 0 : D.itemId) ?? "").trim() === r;
      });
      u && await this.actor.update({
        [`system.gear.microchips.${u}.itemId`]: "",
        [`system.gear.microchips.${u}.name`]: "",
        [`system.gear.microchips.${u}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var n, u;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((u = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var p, b, v;
      const r = i.currentTarget, c = (b = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) == null ? void 0 : b.trim();
      if (!c || !this.actor) return;
      const n = this.actor.items.get(c);
      if (!n) return;
      const u = n.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", u), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const a = this, l = (i) => {
      if (!i) return;
      const r = a._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && a.actor.update(r).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (i) => {
      var r, c, n;
      return i && (((c = (r = a.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || a.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const n = r.form;
      if (!f(n)) return;
      const u = i.relatedTarget;
      u && (n.contains(u) || a.id && ((p = u.closest) != null && p.call(u, `#${CSS.escape(a.id)}`))) || l(n);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0), a._votvNpcItemHookRegistered || (a._votvNpcItemUpdateHook = (i, r, c) => {
      var n;
      a.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === a.actor.id && a.render(!0);
    }, a._votvNpcItemDeleteHook = (i, r, c) => {
      var n;
      a.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === a.actor.id && a.render(!0);
    }, Hooks.on("updateItem", a._votvNpcItemUpdateHook), Hooks.on("deleteItem", a._votvNpcItemDeleteHook), a._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, o, d;
    const e = this.form ?? ((o = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : o.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && await this.actor.update(a).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
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
    var S, C, D, q;
    const e = this.actor;
    if (!e) return;
    const o = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, d = ((C = e.system) == null ? void 0 : C.skills) ?? {}, a = ((D = e.items) == null ? void 0 : D.filter((w) => w.type === "Fegyver")) ?? [];
    let l = null;
    o.itemId && (l = a.find((w) => w.id === o.itemId) ?? null);
    const f = l && l.name || o.name || "Fegyver", m = Number(o.bonus || 0) || 0, h = (((q = l == null ? void 0 : l.system) == null ? void 0 : q.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", i = Number(d[h] || 0) || 0, r = m + i, n = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, u = new Roll(n);
    await u.evaluate({ async: !0 });
    const { resultType: p, label: b } = We(u), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: b } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, h, i, r, c, n, u, p;
    const t = this.actor;
    if (!t) return;
    const o = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((u = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : u.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${o.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(s, e) {
    var y, h, i, r, c, n, u, p, b, v, S, C, D, q, w;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const o = ((T) => {
      var N;
      if (!T) return null;
      const A = T.uuid ?? T.documentUuid ?? ((N = T.data) == null ? void 0 : N.uuid) ?? (typeof T == "string" ? T : null);
      if (A) return A;
      if (typeof T == "object") {
        for (const H of Object.values(T))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!o) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(o);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const a = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let T = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== a.id) {
        const J = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        T = ((c = (await a.createEmbeddedDocuments("Item", [J]))[0]) == null ? void 0 : c.id) ?? T;
      }
      const A = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), N = ((u = a.system) == null ? void 0 : u.abilities) ?? {}, H = A === "active" ? "active" : "passive", U = Array.isArray((p = N[H]) == null ? void 0 : p.items) ? N[H].items.slice() : Array.isArray(N[H]) ? N[H].slice() : [];
      U.includes(T) || U.push(T), await a.update({ [`system.abilities.${H}.items`]: U }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === a.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await a.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const T = ((S = a.system) == null ? void 0 : S.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = (T.slotOrder ?? "").trim(), H = N ? N.split(/\s*,\s*/).filter((G) => A.includes(G)) : [];
      let U = A.find((G) => {
        var ee;
        return !(((ee = T[G]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      U || (U = A.find((G) => !H.includes(G)) ?? "slot1");
      const J = H.includes(U) ? H : [...H, U].filter((G) => A.includes(G));
      await a.update({
        "system.weapons.slotOrder": J.join(","),
        [`system.weapons.${U}.itemId`]: m,
        [`system.weapons.${U}.name`]: d.name ?? "",
        [`system.weapons.${U}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${U}.bonus`]: ((D = d.system) == null ? void 0 : D.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const T = ((w = (q = a.system) == null ? void 0 : q.gear) == null ? void 0 : w.microchips) ?? {}, N = ["slot1", "slot2", "slot3"].find((H) => {
        var U;
        return !(((U = T[H]) == null ? void 0 : U.itemId) ?? "").trim();
      });
      N && await a.update({
        [`system.gear.microchips.${N}.itemId`]: m,
        [`system.gear.microchips.${N}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, h, i, r, c, n;
    const e = (h = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", o = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${l}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((n = this.actor) == null ? void 0 : n.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var f, m, y, h, i, r;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const c = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (o = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const n = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        n > 0 && (d = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      o = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked) continue;
      let d;
      if (o.type === "checkbox")
        d = o.checked;
      else if (o.type === "number") {
        if (o.value === "") continue;
        d = Number(o.value);
      } else if (o.name === "system.resources.kp" || o.name === "system.resources.kp2" || o.name === "system.resources.kp3") {
        const a = (o.value ?? "").trim();
        if (a === "") continue;
        d = Number(a) || 0;
      } else
        d = o.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, o.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const o = e.name;
      (o === void 0 || typeof o == "string" && o.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(Z, "PARTS", foundry.utils.mergeObject(
  j(Z, Z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Z, Z, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Dt = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ct = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Lt = (qt = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : qt.window) == null ? void 0 : Lt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = Z;
var Pt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
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
z(ie, "PARTS", foundry.utils.mergeObject(j(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Pt = j(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Pt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ie;
var Et;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(j(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Et = j(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Et.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = re;
var At;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", !(t.name === "name" && typeof o == "string" && o.trim() === "") && foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(ne, "PARTS", foundry.utils.mergeObject(j(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((At = j(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : At.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = ne;
var Nt;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
    }, e._votvInput = (a) => {
      var m;
      const l = a.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const f = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => o(f), 300));
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", !(t.name === "name" && typeof o == "string" && o.trim() === "") && foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(ae, "PARTS", foundry.utils.mergeObject(j(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Nt = j(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Nt.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = ae;
var Ft;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(oe, "PARTS", foundry.utils.mergeObject(j(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ft = j(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ft.form) ?? {}, { submitOnChange: !1 })
}));
let et = oe;
var $t;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, y, h, i, r, c, n;
      if (!e.isEditable || !((y = (m = a.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const l = ((n = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (a) => {
      var l, f, m;
      return a && (((f = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : f.call(l, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var f, m, y;
      const l = ((f = a.target) == null ? void 0 : f.form) ?? ((y = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && o(l);
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
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ce, "PARTS", foundry.utils.mergeObject(j(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($t = j(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ce;
const Mt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, o, d, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Gt, CONFIG.Actor.dataModels.Npc = xt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = bt, CONFIG.Item.dataModels.weapon = bt, CONFIG.Item.dataModels.Pancel = Jt, CONFIG.Item.dataModels.MikroChip = Qt, CONFIG.Item.dataModels.Kepesseg = wt, CONFIG.Item.dataModels.ability = wt, CONFIG.Item.dataModels.Targy = Zt, CONFIG.Item.dataModels.Egyeb = es, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (o = CONFIG.Actor).typeLabels ?? (o.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
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
    var S, C, D, q, w;
    const h = l == null ? void 0 : l.id;
    if (!h) return;
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], n = (S = game.actors) == null ? void 0 : S.get(h);
    n != null && n.apps && c.push(...Array.from(n.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const T of u)
      ((C = T.document) == null ? void 0 : C.id) !== h || ((D = T.document) == null ? void 0 : D.documentName) !== "Actor" || ((q = T.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || c.includes(T) || c.push(T);
    if (r && c.some((T) => {
      const A = (T == null ? void 0 : T.form) ?? (T == null ? void 0 : T.element);
      return A && A.contains(i);
    })) return;
    const b = (w = game.votv) == null ? void 0 : w._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < E ? b.appId : null;
    setTimeout(() => {
      for (const T of c)
        !(T != null && T.rendered) || typeof T.render != "function" || T.id !== v && T.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, y) => {
    var c, n, u;
    const h = l == null ? void 0 : l.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || l.type !== "Fegyver") return;
    const i = ((c = h.system) == null ? void 0 : c.weapons) ?? {}, r = {};
    for (const [p, b] of Object.entries(i)) {
      if (!p.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== l.id || (r[`system.weapons.${p}.name`] = l.name ?? "", r[`system.weapons.${p}.damage`] = ((n = l.system) == null ? void 0 : n.damage) ?? "", r[`system.weapons.${p}.bonus`] = ((u = l.system) == null ? void 0 : u.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var E, s;
  document.body.addEventListener("click", async (e) => {
    var p, b, v, S, C, D, q, w, T, A, N, H, U, J, G, ee, ke, le, ue, ve, we, Ie, de;
    const t = (b = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const o = (t.dataset.messageId ?? "").trim();
    if (!o) return;
    const d = (v = game.messages) == null ? void 0 : v.get(o), a = (C = (S = d == null ? void 0 : d.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : C.weapon;
    if (!a) return;
    const l = a.actorId ?? ((D = d == null ? void 0 : d.speaker) == null ? void 0 : D.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((q = game.actors) == null ? void 0 : q.get(a.actorId)) ?? ((w = game.actors) == null ? void 0 : w.get(l));
    if (f || (f = ((A = (T = game.scenes) == null ? void 0 : T.contents) == null ? void 0 : A.flatMap((V) => {
      var ye;
      return ((ye = V.tokens) == null ? void 0 : ye.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === l || V.id === a.actorId))) ?? null), !f) return;
    const m = a.itemId ? ((H = (N = f.items) == null ? void 0 : N.get) == null ? void 0 : H.call(N, a.itemId)) ?? ((G = (J = (U = f.items) == null ? void 0 : U.contents) == null ? void 0 : J.find) == null ? void 0 : G.call(J, (te) => te.id === a.itemId)) : null;
    let y = (a.damageFormula ?? "").trim();
    if (y || (y = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !y && a.slotKey && (y = (((((ke = f.system) == null ? void 0 : ke.weapons) ?? {})[a.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (we = (le = ui.notifications) == null ? void 0 : le.warn) == null || we.call(le, ((ve = (ue = game.i18n) == null ? void 0 : ue.localize) == null ? void 0 : ve.call(ue, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const h = new Roll(y);
    await h.evaluate({ async: !0 });
    const i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, r = a.targetName || "", c = a.hitLocationName || "", n = ((m == null ? void 0 : m.name) ?? (a.slotKey ? ((de = (((Ie = f.system) == null ? void 0 : Ie.weapons) ?? {})[a.slotKey]) == null ? void 0 : de.name) ?? "" : "")) || "Fegyver";
    let u = r ? `${n} – sebzés – ${r}` : `${n} – sebzés`;
    c && (u += ` (${c})`), await h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: i
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, l, f, m, y, h;
      if (!((l = (a = e.target) == null ? void 0 : a.closest) != null && l.call(a, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), o = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!o) return;
      const d = o.includes(".") ? o.split(".").pop() : o;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (E = game.user) != null && E.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const o = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(o != null && o.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Mt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await o.create(d);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (o) {
      console.warn("Vacuum of the Void | Default scene creation failed:", o);
    }
  })(), (async () => {
    var a, l, f, m, y, h;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((a = game.actors) == null ? void 0 : a.filter((i) => i.type === "Karakter")) ?? [];
    for (const i of t)
      try {
        const r = i.prototypeToken, c = ((l = r == null ? void 0 : r.bar1) == null ? void 0 : l.attribute) ?? "", n = ((f = r == null ? void 0 : r.bar2) == null ? void 0 : f.attribute) ?? "";
        (c || n) && await i.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (r) {
        console.warn("Vacuum of the Void | Prototype token update failed for", i.name, r);
      }
    for (const i of game.scenes ?? []) {
      const r = ((m = i.tokens) == null ? void 0 : m.filter((c) => {
        var n;
        return ((n = c.actor) == null ? void 0 : n.type) === "Karakter";
      })) ?? [];
      for (const c of r)
        try {
          await c.update(e);
        } catch (n) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, n);
        }
    }
    const o = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((y = game.actors) == null ? void 0 : y.filter((i) => i.type === "Npc")) ?? [];
    for (const i of d)
      try {
        await i.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (r) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", i.name, r);
      }
    for (const i of game.scenes ?? []) {
      const r = ((h = i.tokens) == null ? void 0 : h.filter((c) => {
        var n;
        return ((n = c.actor) == null ? void 0 : n.type) === "Npc";
      })) ?? [];
      for (const c of r)
        try {
          await c.update(o);
        } catch (n) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, n);
        }
    }
  })();
});
Hooks.on("preCreateToken", (E, s, e) => {
  var a, l;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, o = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = o ? (l = game.actors) == null ? void 0 : l.get(o) : null;
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
  const t = E == null ? void 0 : E.object, o = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((o == null ? void 0 : o.type) === "Karakter") {
    const a = s[0] ?? s;
    a != null && a.classList && a.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (E, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || E.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Mt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (E, s, e) => {
  var m, y, h, i;
  const t = ((m = E.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, o = t.resultType, d = t.critLabel, a = t.weaponAttack, l = t.weapon;
  if (!o && !d && !a) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (o && f.classList.add(`votv-${o}`), d) {
      const r = f.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), n = (c == null ? void 0 : c.parentElement) ?? f, u = document.createElement("div");
        u.className = `votv-crit-label votv-crit-label-${o || "neutral"}`, u.textContent = d, n.appendChild(u);
      }
    }
    if (a && l && (l.actorId || (h = E.speaker) != null && h.actor)) {
      const r = f.querySelector(".dice-total"), c = (r == null ? void 0 : r.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const u = document.createElement("div");
        u.className = "votv-weapon-outcome";
        const p = !!l.isHit, b = l.targetName || "Célpont";
        u.textContent = p ? `Találat – ${b}` : `Nem talált – ${b}`, c.appendChild(u);
      }
      if (l.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const b = l.hitLocationRoll, v = l.hitLocationName;
        p.textContent = b != null && v ? `Sebzés (Találati Hely ${b} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((i = E.speaker) == null ? void 0 : i.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(E.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-nBVVIa5b.mjs.map
