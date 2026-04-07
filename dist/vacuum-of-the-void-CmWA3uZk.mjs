var Pt = Object.defineProperty;
var Et = Object.getPrototypeOf;
var At = Reflect.get;
var Ft = (E, s, e) => s in E ? Pt(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var z = (E, s, e) => Ft(E, typeof s != "symbol" ? s + "" : s, e);
var R = (E, s, e) => At(Et(E), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: j, StringField: w, BooleanField: Q, ArrayField: He } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
        name: new w({ required: !1, blank: !0, initial: "" }),
        player: new w({ required: !1, blank: !0, initial: "" }),
        level: new P({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new w({ required: !1, blank: !0, initial: "" }),
        assignment: new w({ required: !1, blank: !0, initial: "" }),
        subAssignment: new w({ required: !1, blank: !0, initial: "" }),
        background: new w({ required: !1, blank: !0, initial: "" }),
        languages: new w({ required: !1, blank: !0, initial: "" })
      }),
      resources: new j({
        health: new j({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new j({
          head: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new j({
          head: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new j({
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
      combat: new j({
        defense: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new j({
        deception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new w({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new w({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new w({ required: !1, blank: !0, initial: "" }),
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
      weapons: new j({
        slotOrder: new w({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          })
        }),
        equipment: new w({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new j({
            name: new w({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new w({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new w({ required: !1, blank: !0, initial: "" }),
            level: new w({ required: !1, blank: !0, initial: "" }),
            other: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new j({
            name: new w({ required: !1, blank: !0, initial: "" }),
            quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new He(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new He(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new Nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: xt } = foundry.data.fields;
class Mt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: jt, NumberField: Jt, StringField: Oe } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new jt({ required: !1, initial: !1 }),
      type: new Oe({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Oe({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Oe({ required: !1, blank: !0, initial: "" }),
      damage: new Oe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Oe({ required: !1, blank: !0, initial: "" }),
      special: new Oe({ required: !1, blank: !0, initial: "" }),
      quantity: new Oe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Kt, StringField: Ue } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: ut } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ut({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ut({
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
const { NumberField: Bt, StringField: dt } = foundry.data.fields;
class mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new dt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new dt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Bt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: pt } = foundry.data.fields;
class zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new pt({ required: !1, blank: !0, initial: "" }),
      quantity: new pt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Gt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Gt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function ft(E) {
  if (!E || !Array.isArray(E.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let o = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let a = r;
    for (const n of i) {
      if (!n) continue;
      if (Array.isArray(n.terms)) {
        d(n.terms, a);
        continue;
      }
      if (typeof n.operator == "string") {
        a = n.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof n.faces == "number" ? n.faces : void 0, f = Array.isArray(n.results) ? n.results : null;
      if (!l || !f || l === 8 || l !== 6) continue;
      const b = !o && a >= 0 && (n.number === 3 || n.number === "3") ? (o = !0, s) : a >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  d(E.terms, 1);
  const c = s.filter((i) => i === 6).length, u = s.filter((i) => i === 1).length, y = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, g = c + y, h = u + m;
  return g > 0 && g === h ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
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
    var o, d, c, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((o = s.querySelector) == null ? void 0 : o.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const d = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, f = c.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      f && b && (u.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const y = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, g = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", a = () => {
      var l, f;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = g.querySelector) == null ? void 0 : l.call(g, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (f = g.querySelector) == null ? void 0 : f.call(g, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), y;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), o = Number(e);
    if (o <= 0 || t <= 0) return 0;
    const d = Math.floor(o / 3), c = Math.floor(2 * o / 3);
    return t <= d ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, o, d;
    const s = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const u = String(((d = c.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), y = Number(u);
      Number.isFinite(y) && (e += y);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, o, d;
    const s = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const u = String(((d = c.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), y = Number(u);
      Number.isFinite(y) && (e += y);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, r, a, n, l, f, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const o = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (a = o.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : n.value) ?? 0, c = ((l = o.currentHealth) == null ? void 0 : l.legs) ?? 0, u = B._healthStatusFromRatio(c, d), y = Number(((v = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = y;
    const g = this._getTotalArmorSpeedPenalty();
    m += g, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var c, u, y, m;
    const e = s ?? this.form ?? this.element;
    let t = (c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (y = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : y.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, u, y, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, o = ((y = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : y.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, o);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, y, m, g;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const o = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (y = o.hitLocations) == null ? void 0 : y[t]) == null ? void 0 : m.value) ?? 0, c = ((g = o.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return B._healthStatusFromRatio(c, d);
  }
  async _prepareContext(s) {
    var qe, de, ge, me, Ie, Se, Me, je, Re, Ke, Fe, Le, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ge = (de = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : de.stress) == null ? void 0 : ge.value) || 0;
    e.stressOver10 = t > 10;
    const o = this.actor.system.resources ?? {}, d = o.hitLocations ?? {}, c = o.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const D = ((me = d[p]) == null ? void 0 : me.value) ?? 0, _ = c[p] ?? 0;
      e.computedHealthStatus[p] = B._healthStatusFromRatio(_, D);
    }
    const y = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((p) => (Number(c[p]) || 0) === 0).length;
    e.showDeathSkull = y || g >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((Se = (Ie = this.actor.system) == null ? void 0 : Ie.combat) == null ? void 0 : Se.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const a = this._getTotalArmorSpeedPenalty();
    r += a, e.effectiveGivenSpeed = r;
    const l = (Number(((je = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: l } },
      { inplace: !1 }
    );
    const f = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, D] of Object.entries(f)) {
      const _ = e.computedHealthStatus[D];
      e.skillHealthStatus[p] = _, e.skillDisabled[p] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), O = I ? I.split(/\s*,\s*/).filter((p) => v.includes(p)) : [], q = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, C = q && typeof q == "object" && !Array.isArray(q) ? q : {}, T = (((Ke = C.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), S = (((Fe = C.slot2) == null ? void 0 : Fe.itemId) ?? "").trim(), A = (((Le = C.slot3) == null ? void 0 : Le.itemId) ?? "").trim(), U = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, D) => {
      const _ = typeof p.sort == "number" ? p.sort : 0, L = typeof D.sort == "number" ? D.sort : 0;
      return _ - L;
    }).map((p) => {
      var pe, _e, De, he, be, $e;
      const D = p.type === "Fegyver", _ = p.type === "MikroChip";
      let L = 0, M = "", J = null;
      for (let Pe = 0; Pe < O.length; Pe++) {
        const xe = O[Pe];
        if ((((pe = b[xe]) == null ? void 0 : pe.itemId) ?? "") === p.id) {
          L = Pe + 1, M = ((_e = b[xe]) == null ? void 0 : _e.bonus) ?? "", J = xe;
          break;
        }
      }
      let Y = null;
      _ && (T === p.id ? Y = "slot1" : S === p.id ? Y = "slot2" : A === p.id && (Y = "slot3"));
      const Ne = D && ((De = p.system) != null && De.damage) ? p.system.damage : "", te = D && typeof ((he = p.system) == null ? void 0 : he.range) == "string" ? (p.system.range || "").trim() : "", Te = J ? Number((be = b[J]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: D,
        slotAssignment: L,
        slotBonus: M,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Ne,
        rangeStr: te,
        slotBonusNum: Te,
        quantity: Number((($e = p.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = U;
    const K = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), Z = K.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = Z;
    const G = "— Nincs fegyver —", V = O.filter((p) => {
      const _ = ((b[p] ?? {}).itemId ?? "").trim();
      return _ ? !!K.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = V.map((p, D) => {
      const _ = b[p] ?? {}, L = (_.itemId ?? "").trim(), M = Z.find((J) => J.id === L);
      return {
        slotKey: p,
        itemId: L,
        slotNum: D + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || G,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const ke = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ve = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = K.map((p) => {
      var ot, ct, lt;
      const D = p.id;
      let _ = null, L = {};
      for (const Be of O)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === D) {
          _ = Be, L = b[Be] ?? {};
          break;
        }
      const M = !!_, J = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : M, Y = (p == null ? void 0 : p.system) ?? {}, Ne = typeof Y.range == "string" ? (Y.range || "").trim() : "", te = Y.type ?? "", Te = (ke[te] ?? te) || "—", pe = Y.size ?? "", _e = (ve[pe] ?? pe) || "", De = [Te, _e].filter(Boolean).join(", ") || Te || "—", he = te === "projectile" || pe === "thrown", be = Y.quantity, $e = be != null ? String(be).trim() : "1", Pe = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Lt = Pe || xe || "0";
      return {
        slotKey: _ ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? G,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Ne || "—",
        typeLabel: Te,
        typeAndSize: De,
        quantity: $e,
        quantityDisplay: he ? $e : "—",
        isProjectile: he,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const we = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = we.map((p) => {
      var L, M;
      const D = (p == null ? void 0 : p.system) ?? {}, _ = ((L = p.system) == null ? void 0 : L.equipped) !== void 0 && ((M = p.system) == null ? void 0 : M.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: (D.level ?? "").toString().trim() || "—",
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const ce = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = ce.map((p) => {
      const D = (p == null ? void 0 : p.system) ?? {}, _ = (D.description ?? "").trim(), L = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", M = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const le = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = le.map((p) => {
      const _ = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), L = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: L
      };
    });
    const ue = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), ee = ue.map((p) => ({ id: p.id, name: p.name, img: p.img })), fe = "— Nincs Mikro-Chip —", Ee = ["slot1", "slot2", "slot3"], Ce = (p) => {
      var _, L, M;
      const D = [];
      return p !== 1 && D.push((((_ = C.slot1) == null ? void 0 : _.itemId) ?? "").trim()), p !== 2 && D.push((((L = C.slot2) == null ? void 0 : L.itemId) ?? "").trim()), p !== 3 && D.push((((M = C.slot3) == null ? void 0 : M.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = ee.filter((p) => !Ce(1).includes(p.id)), e.microchipItemsSlot2 = ee.filter((p) => !Ce(2).includes(p.id)), e.microchipItemsSlot3 = ee.filter((p) => !Ce(3).includes(p.id)), e.microchipSlots = Ee.map((p) => {
      const D = C[p] ?? {}, _ = (D.itemId ?? "").trim(), L = ue.find((M) => M.id === _);
      return {
        slotKey: p,
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || fe,
        img: (L == null ? void 0 : L.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const D = `slot${p}`, _ = C[D] ?? {}, L = (_.itemId ?? "").trim(), M = ee.find((J) => J.id === L);
      e[`microchip${p}ItemId`] = L, e[`microchip${p}DisplayName`] = (M == null ? void 0 : M.name) || _.name || fe, e[`microchip${p}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = ue.map((p) => {
      var pe, _e, De, he;
      const D = p.id;
      let _ = null;
      for (const be of Ee)
        if ((((pe = C[be]) == null ? void 0 : pe.itemId) ?? "").trim() === D) {
          _ = be;
          break;
        }
      const L = !!_, M = ((_e = p == null ? void 0 : p.system) == null ? void 0 : _e.abilityType) ?? "", J = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Ne = Number((De = p == null ? void 0 : p.system) == null ? void 0 : De.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, te = (((he = p == null ? void 0 : p.system) == null ? void 0 : he.description) ?? "").trim(), Te = te ? te.length > 60 ? te.slice(0, 57) + "…" : te : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: J,
        description: Te,
        kp: Ne,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: L
      };
    });
    const Ae = this.actor.system.abilities ?? {}, k = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var D, _, L;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((D = p.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((_ = p.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((L = p.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), F = new Map(k.map((p) => [p.id, p])), x = "— Nincs képesség —", H = (p) => {
      const D = Ae[p] ?? {}, _ = (D.itemId ?? "").trim(), L = _ ? F.get(_) : null, M = (L == null ? void 0 : L.description) ?? "", J = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || x,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: J
      };
    };
    e.abilityFajiSlot = H("faji"), e.abilityHatterSlot = H("hatter");
    const ye = (p) => {
      const D = Ae[p];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, W = (p) => p.map((D) => {
      const _ = F.get(D);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = W(ye("passive")), e.abilityActiveList = W(ye("active")), e;
  }
  _attachFrameListeners(s) {
    var g, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-BLya29xK.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, f;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (r.dataset.itemId ?? "").trim();
      if (!a) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        a = (((((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((f = r.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const o = (i) => {
      var n;
      const r = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const a = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', o);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && o({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, f;
      i.preventDefault(), i.stopPropagation();
      const r = ((f = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var f;
      i.preventDefault();
      const r = i.currentTarget, a = r.dataset.skill, n = ((f = r.textContent) == null ? void 0 : f.trim()) || a, { openRollSheetForSkill: l } = await import("./roll-sheet-BLya29xK.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, I, O, q, C, T, S;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), n = a == null ? void 0 : a.dataset.slot;
      if (!n) return;
      const f = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!f) return;
      const b = ((q = (O = this.actor.items).get) == null ? void 0 : q.call(O, f)) ?? ((T = (C = this.actor.items.contents) == null ? void 0 : C.find) == null ? void 0 : T.call(C, (A) => A.id === f));
      (S = b == null ? void 0 : b.sheet) == null || S.render(!0);
    });
    const c = (i, r) => {
      var l;
      const a = i.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const f = i.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (l = n.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, a = r.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await n.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), f = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = v ? v.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], q = O.find((C) => {
          var T;
          return (((T = b[C]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (q) {
          const C = O.filter((T) => T !== q);
          f["system.weapons.slotOrder"] = C.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, C;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, f = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((A) => {
          var N;
          return !((N = l[A]) != null && N.itemId);
        });
        const S = new Set(v);
        if (!T) {
          const A = b.find((N) => !S.has(N));
          if (!A) return;
          T = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: a,
          [`system.weapons.${T}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${T}.damage`]: ((q = n == null ? void 0 : n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((C = n == null ? void 0 : n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const T = v.filter((S) => S !== I);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const r = i.currentTarget, a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), l = n == null ? void 0 : n.dataset.slot;
      if (!l) return;
      const f = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((T = r.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), I = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let O = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      v ? (O || (O = document.createElement("img"), O.className = "karakter-microchip-slot-thumb", O.alt = "", n == null || n.insertBefore(O, I)), O.src = v, O.style.display = "") : O && O.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const q = f ? this.actor.items.get(f) : null, C = {
        [`system.gear.microchips.${l}.itemId`]: f,
        [`system.gear.microchips.${l}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      f && (C[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(C);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      if (!a || a.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((I) => {
        var O;
        return (((O = n[I]) == null ? void 0 : O.itemId) ?? "").trim() === r;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const a = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const a = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, a));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const a = r.dataset.slot;
      a && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const a = r.dataset.area;
      a && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
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
      const r = i.currentTarget.dataset.area, a = i.currentTarget.dataset.itemId;
      if (!r || !a) return;
      const n = this.actor.system.abilities ?? {}, f = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var l;
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      (l = n == null ? void 0 : n.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(a) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const f = this.form ?? this.element, b = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, C;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, f = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((A) => {
          var N;
          return !((N = l[A]) != null && N.itemId);
        });
        const S = new Set(v);
        if (!T) {
          const A = b.find((N) => !S.has(N));
          if (!A) return;
          T = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: a,
          [`system.weapons.${T}.name`]: n.name ?? "",
          [`system.weapons.${T}.damage`]: ((q = n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((C = n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const T = v.filter((S) => S !== I);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), f = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = v ? v.split(/\s*,\s*/).filter((C) => I.includes(C)) : [], q = O.find((C) => {
          var T;
          return (((T = b[C]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (q) {
          const C = O.filter((T) => T !== q);
          f["system.weapons.slotOrder"] = C.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const f = this.form ?? this.element, b = f == null ? void 0 : f.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, y = (i) => {
      var n, l, f, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const a = ((l = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : l.currentHealth) != null || ((b = (f = r.system) == null ? void 0 : f.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        a && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, a, n;
      return i && (((a = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || u.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var f;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || u.id && ((f = l.closest) != null && f.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), y(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, y, m;
    const e = {};
    for (const g of s.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      g.type === "checkbox" ? h = g.checked : g.type === "number" ? h = g.value === "" ? 0 : Number(g.value) : h = g.value ?? "", foundry.utils.setProperty(e, g.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((y = foundry.utils.expandObject(e).system) == null ? void 0 : y.resources) ?? {}
    ), o = t.hitLocations ?? {}, d = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const g of c) {
      const h = ((m = o[g]) == null ? void 0 : m.value) ?? 0, i = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, B._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, o, d, c, u, y, m, g, h, i, r, a;
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let f = l.id;
          if (((o = l.parent) == null ? void 0 : o.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const b = (((c = l.system) == null ? void 0 : c.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", O = Array.isArray((u = v[I]) == null ? void 0 : u.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          O.includes(f) || O.push(f), await this.actor.update({ [`system.abilities.${I}.items`]: O });
          return;
        }
      }
    }
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((y = e.data) == null ? void 0 : y.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const f = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== f.id;
          let v = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await f.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (b) {
            const I = ((h = f.system) == null ? void 0 : h.weapons) ?? {}, O = (I.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = O ? O.split(/\s*,\s*/).filter((S) => q.includes(S)) : [], T = C.filter((S) => {
              var A;
              return (((A = I[S]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (T.length > 0) {
              const A = {
                "system.weapons.slotOrder": C.filter((N) => !T.includes(N)).join(",")
              };
              for (const N of T)
                A[`system.weapons.${N}.itemId`] = "", A[`system.weapons.${N}.name`] = "", A[`system.weapons.${N}.damage`] = "", A[`system.weapons.${N}.bonus`] = "";
              await f.update(A);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const f = this.actor;
          if (((i = l.parent) == null ? void 0 : i.id) !== f.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const f = this.actor;
          ((r = l.parent) == null ? void 0 : r.id) !== f.id && await f.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const f = this.actor;
          ((a = l.parent) == null ? void 0 : a.id) !== f.id && await f.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, c, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, y, m, g, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((o == null ? void 0 : o.type) !== "Item" || !(o != null && o.uuid)) return;
    const d = await fromUuid(o.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((g = d.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const c = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
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
    var m, g;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((h, i) => {
      const r = typeof h.sort == "number" ? h.sort : 0, a = typeof i.sort == "number" ? i.sort : 0;
      return r - a;
    }).map((h) => h.id), c = d.indexOf(t), u = d.indexOf(e);
    if (c === -1 || u === -1) return;
    d.splice(c, 1), d.splice(u, 0, t);
    const y = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", y);
  }
  _onInventoryAreaDragOver(s) {
    var o, d, c;
    const e = ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const o = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, o)}px`;
  }
  async _postItemToChat(s) {
    var y, m, g;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (o = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      o = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${d}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var g, h, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", o = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", y = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${y}
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
    var c, u, y;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((u = o.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : y.id) ?? d;
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
    var y, m, g, h;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((m = o.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((h = c[e]) == null ? void 0 : h.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, c, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, y, m, g, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((o == null ? void 0 : o.type) !== "Item" || !(o != null && o.uuid)) return;
    const d = await fromUuid(o.uuid);
    if (!d || d.type !== "MikroChip") return;
    let c = d.id;
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (c = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const o = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(o) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? d -= 6 : c === 2 && (d -= 3);
    const y = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(y);
    await m.evaluate({ async: !0 });
    const { resultType: g, label: h } = ft(m), i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: h } },
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, o = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let c = null;
    t.itemId && (c = d.find((I) => I.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${s})`, y = Number(t.bonus || 0) || 0, g = (((v = c == null ? void 0 : c.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(o[g] || 0) || 0, i = y + h, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(a);
    await n.evaluate({ async: !0 });
    const { resultType: l, label: f } = ft(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: f } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var y, m, g, h, i, r, a, n, l, f;
    const t = this.actor;
    if (!t) return;
    let o = ((m = (y = t.items).get) == null ? void 0 : m.call(y, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (a = ui.notifications) == null ? void 0 : a.warn) == null || f.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${o.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
z(B, "PARTS", foundry.utils.mergeObject(
  R(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
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
let We = B;
var kt, vt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var o, d, c, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((o = s.querySelector) == null ? void 0 : o.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
      const r = document.activeElement, a = o.contains(r), n = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      a && n && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const c = await super.render(s, e), u = this.element, y = this.form ?? this.element, m = d.scrollState, g = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, a;
      if (this._applyScrollState(u, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const n = ((r = y.querySelector) == null ? void 0 : r.call(y, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (a = y.querySelector) == null ? void 0 : a.call(y, `[name="${CSS.escape(g.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = g.selectionStart ?? 0, n.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || g) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), c;
  }
  async _prepareContext(s) {
    var G, V, ke, ve, we, ce, le, ue, ee, fe, Ee, Ce, Ae;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((ke = (V = e.system) == null ? void 0 : V.identity) == null ? void 0 : ke.size) ?? "").trim() || "Közepes";
    const t = this.actor, o = ((ve = t == null ? void 0 : t.items) == null ? void 0 : ve.contents) ?? [], d = ((we = t == null ? void 0 : t.system) == null ? void 0 : we.weapons) ?? {}, c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), y = u ? u.split(/\s*,\s*/).filter((k) => c.includes(k)) : [], m = o.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = y.length > 0 ? y : c, r = c.filter((k) => !i.includes(k)), a = [...i, ...r], n = a.filter((k) => {
      var x;
      const F = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return F && m.some((H) => H.id === F);
    });
    e.weaponSlots = n.map((k) => {
      const F = d[k] ?? {}, x = (F.itemId ?? "").trim(), H = g.find((ye) => ye.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (H == null ? void 0 : H.name) || F.name || h,
        img: (H == null ? void 0 : H.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Fe;
      const F = k.id;
      let x = null, H = {};
      for (const Le of a)
        if ((((Fe = d[Le]) == null ? void 0 : Fe.itemId) ?? "").trim() === F) {
          x = Le, H = d[Le] ?? {};
          break;
        }
      const ye = !!x, W = (k == null ? void 0 : k.system) ?? {}, qe = typeof W.range == "string" ? (W.range || "").trim() : "", de = W.type ?? "", ge = (l[de] ?? de) || "—", me = W.size ?? "", Ie = (f[me] ?? me) || "", Se = [ge, Ie].filter(Boolean).join(", ") || ge || "—", Me = de === "projectile" || me === "thrown", je = W.quantity != null ? String(W.quantity).trim() : "1", Re = String(W.bonus ?? H.bonus ?? "").trim() || "0", Ke = (W.damage ?? H.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Re,
        damage: Ke,
        rangeStr: qe || "—",
        typeAndSize: Se,
        quantity: je,
        isProjectile: Me,
        equipped: ye,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const b = o.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
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
    const v = ((le = (ce = t == null ? void 0 : t.system) == null ? void 0 : ce.gear) == null ? void 0 : le.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], O = o.filter((k) => k.type === "MikroChip");
    e.microchipsTable = O.map((k) => {
      var de, ge, me, Ie;
      const F = k.id;
      let x = null;
      for (const Se of I)
        if ((((de = v[Se]) == null ? void 0 : de.itemId) ?? "").trim() === F) {
          x = Se;
          break;
        }
      const H = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", ye = H === "active" ? "Aktív" : H === "passive" ? "Passzív" : H || "—", W = (((me = k == null ? void 0 : k.system) == null ? void 0 : me.description) ?? "").trim(), qe = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ye,
        description: qe,
        kp: Number((Ie = k == null ? void 0 : k.system) == null ? void 0 : Ie.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: H === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const q = o.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
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
    const C = o.filter((k) => k.type === "Egyeb");
    e.egyebList = C.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), H = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: H
      };
    });
    const T = (((ue = e.weaponsTable) == null ? void 0 : ue.length) ?? 0) > 0 || (((ee = e.armorTable) == null ? void 0 : ee.length) ?? 0) > 0 || (((fe = e.microchipsTable) == null ? void 0 : fe.length) ?? 0) > 0 || (((Ee = e.itemsTable) == null ? void 0 : Ee.length) ?? 0) > 0 || (((Ce = e.egyebList) == null ? void 0 : Ce.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const S = ((Ae = t == null ? void 0 : t.system) == null ? void 0 : Ae.abilities) ?? {}, A = o.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), N = new Map(A.map((k) => [k.id, k])), U = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = U, e.abilityHatterSlot = U;
    const K = (k) => {
      const F = S[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, Z = (k) => (k || []).map((F) => {
      const x = N.get(F);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Z(K("passive")), e.abilityActiveList = Z(K("active")), e;
  }
  _attachFrameListeners(s) {
    var m, g, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, f;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((f = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var n, l, f;
      i.preventDefault();
      const r = (l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (f = a == null ? void 0 : a.sheet) == null || f.render(!0);
    });
    const o = (i) => {
      var n, l;
      const r = (n = i == null ? void 0 : i.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (l = a == null ? void 0 : a.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, f, b, v;
      i.preventDefault();
      const r = (f = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : f.call(l, ".karakter-weapon-slot"), a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, a = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-BLya29xK.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, f, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !a && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (a = (((((b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var f, b;
      i.preventDefault();
      const r = i.currentTarget, a = (((f = r == null ? void 0 : r.dataset) == null ? void 0 : f.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-BLya29xK.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var a, n;
      i.preventDefault();
      const r = (n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var n, l;
      i.preventDefault();
      const r = (((l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(r) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, I, O, q, C;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, a = (O = (I = i.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : O.itemId;
      if (!r || !a || !this.actor) return;
      const n = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, f = (Array.isArray((C = n[r]) == null ? void 0 : C.items) ? n[r].items.slice() : []).filter((T) => T !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var a, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      l && (f[`system.weapons.${l}.itemId`] = "", f[`system.weapons.${l}.name`] = "", f[`system.weapons.${l}.damage`] = "", f[`system.weapons.${l}.bonus`] = ""), Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var a, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var f, b, v, I;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (f = i.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((O) => {
        var q;
        return (((q = a[O]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var n, l;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var f, b, v;
      const r = i.currentTarget, a = (b = (f = r == null ? void 0 : r.dataset) == null ? void 0 : f.itemId) == null ? void 0 : b.trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      const l = n.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const c = this, u = (i) => {
      if (!i) return;
      const r = c._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && c.actor.update(r).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, y = (i) => {
      var r, a, n;
      return i && (((a = (r = c.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || c.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (i) => {
      var f;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!y(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || c.id && ((f = l.closest) != null && f.call(l, `#${CSS.escape(c.id)}`))) || u(n);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (i, r, a) => {
      var n;
      c.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (i, r, a) => {
      var n;
      c.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, o, d;
    const e = this.form ?? ((o = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : o.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, s);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(s, e = "") {
    var y, m, g, h, i, r, a, n, l, f;
    const t = this.actor;
    if (!t) return;
    const o = ((m = (y = t.items).get) == null ? void 0 : m.call(y, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (a = ui.notifications) == null ? void 0 : a.warn) == null || f.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(d);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${o.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var g, h, i, r, a, n, l, f, b, v, I, O, q, C, T;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const o = ((S) => {
      var N;
      if (!S) return null;
      const A = S.uuid ?? S.documentUuid ?? ((N = S.data) == null ? void 0 : N.uuid) ?? (typeof S == "string" ? S : null);
      if (A) return A;
      if (typeof S == "object") {
        for (const U of Object.values(S))
          if (typeof U == "string" && U.includes(".") && U.startsWith("Item.")) return U;
      }
      return null;
    })(e);
    if (!o) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(o);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const c = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let S = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== c.id) {
        const Z = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        S = ((a = (await c.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : a.id) ?? S;
      }
      const A = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), N = ((l = c.system) == null ? void 0 : l.abilities) ?? {}, U = A === "active" ? "active" : "passive", K = Array.isArray((f = N[U]) == null ? void 0 : f.items) ? N[U].items.slice() : Array.isArray(N[U]) ? N[U].slice() : [];
      K.includes(S) || K.push(S), await c.update({ [`system.abilities.${U}.items`]: K }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === c.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await c.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const S = ((I = c.system) == null ? void 0 : I.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = (S.slotOrder ?? "").trim(), U = N ? N.split(/\s*,\s*/).filter((G) => A.includes(G)) : [];
      let K = A.find((G) => {
        var V;
        return !(((V = S[G]) == null ? void 0 : V.itemId) ?? "").trim();
      });
      K || (K = A.find((G) => !U.includes(G)) ?? "slot1");
      const Z = U.includes(K) ? U : [...U, K].filter((G) => A.includes(G));
      await c.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${K}.itemId`]: m,
        [`system.weapons.${K}.name`]: d.name ?? "",
        [`system.weapons.${K}.damage`]: ((O = d.system) == null ? void 0 : O.damage) ?? "",
        [`system.weapons.${K}.bonus`]: ((q = d.system) == null ? void 0 : q.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const S = ((T = (C = c.system) == null ? void 0 : C.gear) == null ? void 0 : T.microchips) ?? {}, N = ["slot1", "slot2", "slot3"].find((U) => {
        var K;
        return !(((K = S[U]) == null ? void 0 : K.itemId) ?? "").trim();
      });
      N && await c.update({
        [`system.gear.microchips.${N}.itemId`]: m,
        [`system.gear.microchips.${N}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var g, h, i, r, a, n;
    const e = (h = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", o = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", y = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${y}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((n = this.actor) == null ? void 0 : n.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var y, m, g, h, i, r;
    const e = (m = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const a = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (o = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
        const n = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        n > 0 && (d = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      o = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${d}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
      content: u,
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
        const c = (o.value ?? "").trim();
        if (c === "") continue;
        d = Number(c) || 0;
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
z(X, "PARTS", foundry.utils.mergeObject(
  R(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = X;
var St;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidWeaponSheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
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
z(se, "PARTS", foundry.utils.mergeObject(R(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = R(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Je = se;
var Tt;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidShieldSheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
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
z(ie, "PARTS", foundry.utils.mergeObject(R(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ie;
var _t;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidMicrochipSheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
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
z(re, "PARTS", foundry.utils.mergeObject(R(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = R(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = re;
var Dt;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidAbilitySheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, e._votvInput = (c) => {
      var m;
      const u = c.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const y = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(y) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => o(y), 300));
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
z(ne, "PARTS", foundry.utils.mergeObject(R(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = R(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = ne;
var Ot;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidTargySheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
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
z(ae, "PARTS", foundry.utils.mergeObject(R(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ot = R(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = ae;
var Ct;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((y) => console.warn("VoidEgyebSheet save failed", y));
    }, d = (c) => {
      var u, y, m;
      return c && (((y = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : y.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var y, m, g;
      const u = ((y = c.target) == null ? void 0 : y.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
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
z(oe, "PARTS", foundry.utils.mergeObject(R(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = R(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let et = oe;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, o, d, c;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Mt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Rt, CONFIG.Item.dataModels.Pancel = Ht, CONFIG.Item.dataModels.MikroChip = Ut, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (o = CONFIG.Actor).typeLabels ?? (o.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (c = CONFIG.Item).typeLabels ?? (c.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", We, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Je, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ze, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ve, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", et, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const E = 500;
  Hooks.on("updateActor", (u, y, m, g) => {
    var I, O, q, C, T;
    const h = u == null ? void 0 : u.id;
    if (!h) return;
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), a = [], n = (I = game.actors) == null ? void 0 : I.get(h);
    n != null && n.apps && a.push(...Array.from(n.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of l)
      ((O = S.document) == null ? void 0 : O.id) !== h || ((q = S.document) == null ? void 0 : q.documentName) !== "Actor" || ((C = S.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || a.includes(S) || a.push(S);
    if (r && a.some((S) => {
      const A = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return A && A.contains(i);
    })) return;
    const b = (T = game.votv) == null ? void 0 : T._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < E ? b.appId : null;
    setTimeout(() => {
      for (const S of a)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== v && S.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, y, m, g) => {
    var a, n, l;
    const h = u == null ? void 0 : u.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((a = h.system) == null ? void 0 : a.weapons) ?? {}, r = {};
    for (const [f, b] of Object.entries(i)) {
      if (!f.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== u.id || (r[`system.weapons.${f}.name`] = u.name ?? "", r[`system.weapons.${f}.damage`] = ((n = u.system) == null ? void 0 : n.damage) ?? "", r[`system.weapons.${f}.bonus`] = ((l = u.system) == null ? void 0 : l.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var E, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, u, y, m, g, h;
      if (!((u = (c = e.target) == null ? void 0 : c.closest) != null && u.call(c, "#actors"))) return;
      const t = (m = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : m.call(y, "[data-document-id]"), o = (g = t == null ? void 0 : t.getAttribute) == null ? void 0 : g.call(t, "data-document-id");
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
        background: { src: qt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await o.create(d);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (o) {
      console.warn("Vacuum of the Void | Default scene creation failed:", o);
    }
  })(), (async () => {
    var c, u, y, m, g, h;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((i) => i.type === "Karakter")) ?? [];
    for (const i of t)
      try {
        const r = i.prototypeToken, a = ((u = r == null ? void 0 : r.bar1) == null ? void 0 : u.attribute) ?? "", n = ((y = r == null ? void 0 : r.bar2) == null ? void 0 : y.attribute) ?? "";
        (a || n) && await i.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (r) {
        console.warn("Vacuum of the Void | Prototype token update failed for", i.name, r);
      }
    for (const i of game.scenes ?? []) {
      const r = ((m = i.tokens) == null ? void 0 : m.filter((a) => {
        var n;
        return ((n = a.actor) == null ? void 0 : n.type) === "Karakter";
      })) ?? [];
      for (const a of r)
        try {
          await a.update(e);
        } catch (n) {
          console.warn("Vacuum of the Void | Token update failed for", a.name, n);
        }
    }
    const o = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((g = game.actors) == null ? void 0 : g.filter((i) => i.type === "Npc")) ?? [];
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
      const r = ((h = i.tokens) == null ? void 0 : h.filter((a) => {
        var n;
        return ((n = a.actor) == null ? void 0 : n.type) === "Npc";
      })) ?? [];
      for (const a of r)
        try {
          await a.update(o);
        } catch (n) {
          console.warn("Vacuum of the Void | NPC token update failed for", a.name, n);
        }
    }
  })();
});
Hooks.on("preCreateToken", (E, s, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, o = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = o ? (u = game.actors) == null ? void 0 : u.get(o) : null;
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
    const c = s[0] ?? s;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (E, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || E.updateSource({
    width: 3840,
    height: 2160,
    "background.src": qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (E, s, e) => {
  var m, g, h, i;
  const t = ((m = E.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, o = t.resultType, d = t.critLabel, c = t.weaponAttack, u = t.weapon;
  if (!o && !d && !c) return;
  const y = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (y) {
    if (o && y.classList.add(`votv-${o}`), d) {
      const r = y.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const a = y.querySelector(".dice-total"), n = (a == null ? void 0 : a.parentElement) ?? y, l = document.createElement("div");
        l.className = `votv-crit-label votv-crit-label-${o || "neutral"}`, l.textContent = d, n.appendChild(l);
      }
    }
    if (c && u && (u.actorId || (h = E.speaker) != null && h.actor) && !y.querySelector(".votv-weapon-damage-chat")) {
      const a = y.querySelector(".dice-total"), n = (a == null ? void 0 : a.parentElement) ?? y, l = document.createElement("button");
      l.type = "button", l.className = "votv-weapon-damage-chat", l.textContent = "Sebzés", l.dataset.actorId = u.actorId || ((i = E.speaker) == null ? void 0 : i.actor) || "", l.dataset.itemId = u.itemId || "", l.dataset.slotKey = u.slotKey || "", n.appendChild(l), l.addEventListener("click", async (f) => {
        var A, N, U, K, Z, G, V, ke, ve, we, ce, le, ue, ee;
        f.preventDefault(), f.stopPropagation();
        const b = f.currentTarget.dataset.actorId || "", v = f.currentTarget.dataset.itemId || "", I = f.currentTarget.dataset.slotKey || "", O = b && ((A = game.actors) == null ? void 0 : A.get(b)) || ((N = E.speaker) == null ? void 0 : N.actor) && ((U = game.actors) == null ? void 0 : U.get(E.speaker.actor)) || null;
        if (!O) return;
        let q = v ? ((Z = (K = O.items) == null ? void 0 : K.get) == null ? void 0 : Z.call(K, v)) ?? ((ke = (V = (G = O.items) == null ? void 0 : G.contents) == null ? void 0 : V.find) == null ? void 0 : ke.call(V, (fe) => fe.id === v)) : null;
        if (!q || q.type !== "Fegyver") return;
        let C = (((ve = q.system) == null ? void 0 : ve.damage) ?? "").trim();
        if (!C && I && (C = (((((we = O.system) == null ? void 0 : we.weapons) ?? {})[I] ?? {}).damage ?? "").trim()), !C) {
          (ee = (ce = ui.notifications) == null ? void 0 : ce.warn) == null || ee.call(
            ce,
            ((ue = (le = game.i18n) == null ? void 0 : le.localize) == null ? void 0 : ue.call(le, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája."
          );
          return;
        }
        const T = new Roll(C);
        await T.evaluate({ async: !0 });
        const S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        await T.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: O }),
          flavor: `${q.name} – sebzés`,
          flags: { "vacuum-of-the-void": {} },
          rollMode: S
        });
      });
    }
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-CmWA3uZk.mjs.map
