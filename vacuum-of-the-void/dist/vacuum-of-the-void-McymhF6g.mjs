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
const { BooleanField: jt, NumberField: Jt, StringField: qe } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new jt({ required: !1, initial: !1 }),
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
  let c = !1;
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
      const l = typeof n.faces == "number" ? n.faces : void 0, p = Array.isArray(n.results) ? n.results : null;
      if (!l || !p || l === 8 || l !== 6) continue;
      const b = !c && a >= 0 && (n.number === 3 || n.number === "3") ? (c = !0, s) : a >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  d(E.terms, 1);
  const o = s.filter((i) => i === 6).length, u = s.filter((i) => i === 1).length, f = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, g = o + f, h = u + m;
  return g > 0 && g === h ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var c, d, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((c = s.querySelector) == null ? void 0 : c.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), c = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (c.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (c.windowScrollTop = t.scrollTop), c;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: c } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && c && (c.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, p = o.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      p && b && (u.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, g = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", a = () => {
      var l, p;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = g.querySelector) == null ? void 0 : l.call(g, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (p = g.querySelector) == null ? void 0 : p.call(g, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), c = Number(e);
    if (c <= 0 || t <= 0) return 0;
    const d = Math.floor(c / 3), o = Math.floor(2 * c / 3);
    return t <= d ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, c, d;
    const s = (((c = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : c.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((d = o.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(u);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, c, d;
    const s = (((c = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : c.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((d = o.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(u);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, r, a, n, l, p, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const c = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (a = c.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : n.value) ?? 0, o = ((l = c.currentHealth) == null ? void 0 : l.legs) ?? 0, u = B._healthStatusFromRatio(o, d), f = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = f;
    const g = this._getTotalArmorSpeedPenalty();
    m += g, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var o, u, f, m;
    const e = s ?? this.form ?? this.element;
    let t = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, u, f, m;
    const e = B.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, c = ((f = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, c);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, f, m, g;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const c = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (f = c.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, o = ((g = c.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return B._healthStatusFromRatio(o, d);
  }
  async _prepareContext(s) {
    var Le, fe, be, ye, Te, _e, Me, je, Re, Ke, Fe, Pe, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((be = (fe = (Le = this.actor.system) == null ? void 0 : Le.resources) == null ? void 0 : fe.stress) == null ? void 0 : be.value) || 0;
    e.stressOver10 = t > 10;
    const c = this.actor.system.resources ?? {}, d = c.hitLocations ?? {}, o = c.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of u) {
      const D = ((ye = d[y]) == null ? void 0 : ye.value) ?? 0, _ = o[y] ?? 0;
      e.computedHealthStatus[y] = B._healthStatusFromRatio(_, D);
    }
    const f = (Number(o.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(o[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((_e = (Te = this.actor.system) == null ? void 0 : Te.combat) == null ? void 0 : _e.givenSpeed) ?? 0) || 0;
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
    const p = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, D] of Object.entries(p)) {
      const _ = e.computedHealthStatus[D];
      e.skillHealthStatus[y] = _, e.skillDisabled[y] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), C = I ? I.split(/\s*,\s*/).filter((y) => v.includes(y)) : [], q = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, O = q && typeof q == "object" && !Array.isArray(q) ? q : {}, T = (((Ke = O.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), S = (((Fe = O.slot2) == null ? void 0 : Fe.itemId) ?? "").trim(), A = (((Pe = O.slot3) == null ? void 0 : Pe.itemId) ?? "").trim(), H = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, D) => {
      const _ = typeof y.sort == "number" ? y.sort : 0, L = typeof D.sort == "number" ? D.sort : 0;
      return _ - L;
    }).map((y) => {
      var ge, Oe, Ce, ke, ve, $e;
      const D = y.type === "Fegyver", _ = y.type === "MikroChip";
      let L = 0, M = "", J = null;
      for (let Ee = 0; Ee < C.length; Ee++) {
        const xe = C[Ee];
        if ((((ge = b[xe]) == null ? void 0 : ge.itemId) ?? "") === y.id) {
          L = Ee + 1, M = ((Oe = b[xe]) == null ? void 0 : Oe.bonus) ?? "", J = xe;
          break;
        }
      }
      let Y = null;
      _ && (T === y.id ? Y = "slot1" : S === y.id ? Y = "slot2" : A === y.id && (Y = "slot3"));
      const Ne = D && ((Ce = y.system) != null && Ce.damage) ? y.system.damage : "", se = D && typeof ((ke = y.system) == null ? void 0 : ke.range) == "string" ? (y.system.range || "").trim() : "", De = J ? Number((ve = b[J]) == null ? void 0 : ve.bonus) || 0 : "";
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        type: y.type,
        isWeapon: D,
        slotAssignment: L,
        slotBonus: M,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Ne,
        rangeStr: se,
        slotBonusNum: De,
        quantity: Number((($e = y.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = H;
    const U = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((y) => y.type === "Fegyver"), X = U.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = X;
    const G = "— Nincs fegyver —", ee = C.filter((y) => {
      const _ = ((b[y] ?? {}).itemId ?? "").trim();
      return _ ? !!U.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = ee.map((y, D) => {
      const _ = b[y] ?? {}, L = (_.itemId ?? "").trim(), M = X.find((J) => J.id === L);
      return {
        slotKey: y,
        itemId: L,
        slotNum: D + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || G,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const we = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, le = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = U.map((y) => {
      var ot, ct, lt;
      const D = y.id;
      let _ = null, L = {};
      for (const Be of C)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === D) {
          _ = Be, L = b[Be] ?? {};
          break;
        }
      const M = !!_, J = ((ct = y.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = y.system) == null ? void 0 : lt.equipped) !== null ? !!y.system.equipped : M, Y = (y == null ? void 0 : y.system) ?? {}, Ne = typeof Y.range == "string" ? (Y.range || "").trim() : "", se = Y.type ?? "", De = (we[se] ?? se) || "—", ge = Y.size ?? "", Oe = (le[ge] ?? ge) || "", Ce = [De, Oe].filter(Boolean).join(", ") || De || "—", ke = se === "projectile" || ge === "thrown", ve = Y.quantity, $e = ve != null ? String(ve).trim() : "1", Ee = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Lt = Ee || xe || "0";
      return {
        slotKey: _ ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? G,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: Lt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Ne || "—",
        typeLabel: De,
        typeAndSize: Ce,
        quantity: $e,
        quantityDisplay: ke ? $e : "—",
        isProjectile: ke,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const ue = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = ue.map((y) => {
      var L, M;
      const D = (y == null ? void 0 : y.system) ?? {}, _ = ((L = y.system) == null ? void 0 : L.equipped) !== void 0 && ((M = y.system) == null ? void 0 : M.equipped) !== null ? !!y.system.equipped : !1;
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: (D.level ?? "").toString().trim() || "—",
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const Ie = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = Ie.map((y) => {
      const D = (y == null ? void 0 : y.system) ?? {}, _ = (D.description ?? "").trim(), L = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", M = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const Se = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = Se.map((y) => {
      const _ = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), L = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: L
      };
    });
    const de = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((y) => y.type === "MikroChip"), te = de.map((y) => ({ id: y.id, name: y.name, img: y.img })), me = "— Nincs Mikro-Chip —", V = ["slot1", "slot2", "slot3"], pe = (y) => {
      var _, L, M;
      const D = [];
      return y !== 1 && D.push((((_ = O.slot1) == null ? void 0 : _.itemId) ?? "").trim()), y !== 2 && D.push((((L = O.slot2) == null ? void 0 : L.itemId) ?? "").trim()), y !== 3 && D.push((((M = O.slot3) == null ? void 0 : M.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = te.filter((y) => !pe(1).includes(y.id)), e.microchipItemsSlot2 = te.filter((y) => !pe(2).includes(y.id)), e.microchipItemsSlot3 = te.filter((y) => !pe(3).includes(y.id)), e.microchipSlots = V.map((y) => {
      const D = O[y] ?? {}, _ = (D.itemId ?? "").trim(), L = de.find((M) => M.id === _);
      return {
        slotKey: y,
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || me,
        img: (L == null ? void 0 : L.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const D = `slot${y}`, _ = O[D] ?? {}, L = (_.itemId ?? "").trim(), M = te.find((J) => J.id === L);
      e[`microchip${y}ItemId`] = L, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || _.name || me, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = de.map((y) => {
      var ge, Oe, Ce, ke;
      const D = y.id;
      let _ = null;
      for (const ve of V)
        if ((((ge = O[ve]) == null ? void 0 : ge.itemId) ?? "").trim() === D) {
          _ = ve;
          break;
        }
      const L = !!_, M = ((Oe = y == null ? void 0 : y.system) == null ? void 0 : Oe.abilityType) ?? "", J = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Ne = Number((Ce = y == null ? void 0 : y.system) == null ? void 0 : Ce.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, se = (((ke = y == null ? void 0 : y.system) == null ? void 0 : ke.description) ?? "").trim(), De = se ? se.length > 60 ? se.slice(0, 57) + "…" : se : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: J,
        description: De,
        kp: Ne,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: L
      };
    });
    const Ae = this.actor.system.abilities ?? {}, k = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((y) => {
      var D, _, L;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((D = y.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((_ = y.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((L = y.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), N = new Map(k.map((y) => [y.id, y])), x = "— Nincs képesség —", K = (y) => {
      const D = Ae[y] ?? {}, _ = (D.itemId ?? "").trim(), L = _ ? N.get(_) : null, M = (L == null ? void 0 : L.description) ?? "", J = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || x,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: J
      };
    };
    e.abilityFajiSlot = K("faji"), e.abilityHatterSlot = K("hatter");
    const he = (y) => {
      const D = Ae[y];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, W = (y) => y.map((D) => {
      const _ = N.get(D);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = W(he("passive")), e.abilityActiveList = W(he("active")), e;
  }
  _attachFrameListeners(s) {
    var g, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-B1bzwTFt.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (r.dataset.itemId ?? "").trim();
      if (!a) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        a = (((((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const c = (i) => {
      var n;
      const r = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const a = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', c);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && c({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
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
      const r = i.currentTarget, a = r.dataset.skill, n = ((p = r.textContent) == null ? void 0 : p.trim()) || a, { openRollSheetForSkill: l } = await import("./roll-sheet-B1bzwTFt.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, I, C, q, O, T, S;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), n = a == null ? void 0 : a.dataset.slot;
      if (!n) return;
      const p = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!p) return;
      const b = ((q = (C = this.actor.items).get) == null ? void 0 : q.call(C, p)) ?? ((T = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : T.call(O, (A) => A.id === p));
      (S = b == null ? void 0 : b.sheet) == null || S.render(!0);
    });
    const o = (i, r) => {
      var l;
      const a = i.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = i.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (l = n.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
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
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = C.find((O) => {
          var T;
          return (((T = b[O]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (q) {
          const O = C.filter((T) => T !== q);
          p["system.weapons.slotOrder"] = O.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, O;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((A) => {
          var F;
          return !((F = l[A]) != null && F.itemId);
        });
        const S = new Set(v);
        if (!T) {
          const A = b.find((F) => !S.has(F));
          if (!A) return;
          T = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: a,
          [`system.weapons.${T}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${T}.damage`]: ((q = n == null ? void 0 : n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((O = n == null ? void 0 : n.system) == null ? void 0 : O.bonus) ?? ""
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
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((T = r.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), I = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let C = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      v ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", n == null || n.insertBefore(C, I)), C.src = v, C.style.display = "") : C && C.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const q = p ? this.actor.items.get(p) : null, O = {
        [`system.gear.microchips.${l}.itemId`]: p,
        [`system.gear.microchips.${l}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      p && (O[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      if (!a || a.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((I) => {
        var C;
        return (((C = n[I]) == null ? void 0 : C.itemId) ?? "").trim() === r;
      });
      p && await this.actor.update({
        [`system.gear.microchips.${p}.itemId`]: "",
        [`system.gear.microchips.${p}.name`]: "",
        [`system.gear.microchips.${p}.active`]: !1
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
      const n = this.actor.system.abilities ?? {}, p = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
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
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, O;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((A) => {
          var F;
          return !((F = l[A]) != null && F.itemId);
        });
        const S = new Set(v);
        if (!T) {
          const A = b.find((F) => !S.has(F));
          if (!A) return;
          T = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: a,
          [`system.weapons.${T}.name`]: n.name ?? "",
          [`system.weapons.${T}.damage`]: ((q = n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((O = n.system) == null ? void 0 : O.bonus) ?? ""
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
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = C.find((O) => {
          var T;
          return (((T = b[O]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (q) {
          const O = C.filter((T) => T !== q);
          p["system.weapons.slotOrder"] = O.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
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
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, f = (i) => {
      var n, l, p, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const a = ((l = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : l.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        a && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, a, n;
      return i && (((a = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || u.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || u.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), f(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, f, m;
    const e = {};
    for (const g of s.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      g.type === "checkbox" ? h = g.checked : g.type === "number" ? h = g.value === "" ? 0 : Number(g.value) : h = g.value ?? "", foundry.utils.setProperty(e, g.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), c = t.hitLocations ?? {}, d = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const g of o) {
      const h = ((m = c[g]) == null ? void 0 : m.value) ?? 0, i = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, B._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, c, d, o, u, f, m, g, h, i, r, a;
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
          let p = l.id;
          if (((c = l.parent) == null ? void 0 : c.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const b = (((o = l.system) == null ? void 0 : o.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", C = Array.isArray((u = v[I]) == null ? void 0 : u.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          C.includes(p) || C.push(p), await this.actor.update({ [`system.abilities.${I}.items`]: C });
          return;
        }
      }
    }
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
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
          const p = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== p.id;
          let v = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await p.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (b) {
            const I = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, C = (I.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = C ? C.split(/\s*,\s*/).filter((S) => q.includes(S)) : [], T = O.filter((S) => {
              var A;
              return (((A = I[S]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (T.length > 0) {
              const A = {
                "system.weapons.slotOrder": O.filter((F) => !T.includes(F)).join(",")
              };
              for (const F of T)
                A[`system.weapons.${F}.itemId`] = "", A[`system.weapons.${F}.name`] = "", A[`system.weapons.${F}.damage`] = "", A[`system.weapons.${F}.bonus`] = "";
              await p.update(A);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const p = this.actor;
          if (((i = l.parent) == null ? void 0 : i.id) !== p.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const p = this.actor;
          ((r = l.parent) == null ? void 0 : r.id) !== p.id && await p.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const p = this.actor;
          ((a = l.parent) == null ? void 0 : a.id) !== p.id && await p.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, o, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (c == null ? void 0 : c.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, f, m, g, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((c == null ? void 0 : c.type) !== "Item" || !(c != null && c.uuid)) return;
    const d = await fromUuid(c.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((g = d.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const o = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var c;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (c = s.currentTarget) == null || c.classList.add("karakter-actions-row-drag-over"));
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
    }).map((h) => h.id), o = d.indexOf(t), u = d.indexOf(e);
    if (o === -1 || u === -1) return;
    d.splice(o, 1), d.splice(u, 0, t);
    const f = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(s) {
    var c, d, o;
    const e = ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
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
    const c = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, c)}px`;
  }
  async _postItemToChat(s) {
    var f, m, g;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let c, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (c = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      c = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${o}
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
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", c = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = c > 0 ? `<p><strong>KP:</strong> ${c}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var c, d;
    const e = ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var c;
    this._parseAbilityDrop(s) && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var o, u, f;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const c = await fromUuid(t.uuid);
    if (!c || c.type !== "Kepesseg" && c.type !== "ability") return;
    let d = c.id;
    if (((u = c.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: c.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var c;
    this._parseAbilityDrop(s) && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var f, m, g, h;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const c = await fromUuid(t.uuid);
    if (!c || c.type !== "Kepesseg" && c.type !== "ability") return;
    let d = c.id;
    if (((m = c.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((h = o[e]) == null ? void 0 : h.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, o, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (c == null ? void 0 : c.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, f, m, g, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((c == null ? void 0 : c.type) !== "Item" || !(c != null && c.uuid)) return;
    const d = await fromUuid(c.uuid);
    if (!d || d.type !== "MikroChip") return;
    let o = d.id;
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (o = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const c = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(c) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? d -= 6 : o === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
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
    const c = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": c });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, c = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let o = null;
    t.itemId && (o = d.find((I) => I.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, g = (((v = o == null ? void 0 : o.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(c[g] || 0) || 0, i = f + h, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(a);
    await n.evaluate({ async: !0 });
    const { resultType: l, label: p } = ft(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, g, h, i, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    let c = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!c || c.type !== "Fegyver") return;
    let d = (((i = c.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(d);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${c.name} – sebzés`,
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
const Z = class Z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var c, d, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((c = s.querySelector) == null ? void 0 : c.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), c = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (c.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (c.windowScrollTop = t.scrollTop), c;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: c } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && c && (c.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, c = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, a = c.contains(r), n = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      a && n && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const o = await super.render(s, e), u = this.element, f = this.form ?? this.element, m = d.scrollState, g = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, a;
      if (this._applyScrollState(u, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const n = ((r = f.querySelector) == null ? void 0 : r.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (a = f.querySelector) == null ? void 0 : a.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = g.selectionStart ?? 0, n.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || g) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), o;
  }
  async _prepareContext(s) {
    var G, ee, we, le, ue, Ie, Se, de, te, me, V, pe, Ae;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((G = this.actor) == null ? void 0 : G.system), e.showDeathSkull = !1, e.sizeForSelect = (((we = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : we.size) ?? "").trim() || "Közepes";
    const t = this.actor, c = ((le = t == null ? void 0 : t.items) == null ? void 0 : le.contents) ?? [], d = ((ue = t == null ? void 0 : t.system) == null ? void 0 : ue.weapons) ?? {}, o = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), f = u ? u.split(/\s*,\s*/).filter((k) => o.includes(k)) : [], m = c.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = f.length > 0 ? f : o, r = o.filter((k) => !i.includes(k)), a = [...i, ...r], n = a.filter((k) => {
      var x;
      const N = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return N && m.some((K) => K.id === N);
    });
    e.weaponSlots = n.map((k) => {
      const N = d[k] ?? {}, x = (N.itemId ?? "").trim(), K = g.find((he) => he.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (K == null ? void 0 : K.name) || N.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Fe;
      const N = k.id;
      let x = null, K = {};
      for (const Pe of a)
        if ((((Fe = d[Pe]) == null ? void 0 : Fe.itemId) ?? "").trim() === N) {
          x = Pe, K = d[Pe] ?? {};
          break;
        }
      const he = !!x, W = (k == null ? void 0 : k.system) ?? {}, Le = typeof W.range == "string" ? (W.range || "").trim() : "", fe = W.type ?? "", be = (l[fe] ?? fe) || "—", ye = W.size ?? "", Te = (p[ye] ?? ye) || "", _e = [be, Te].filter(Boolean).join(", ") || be || "—", Me = fe === "projectile" || ye === "thrown", je = W.quantity != null ? String(W.quantity).trim() : "1", Re = String(W.bonus ?? K.bonus ?? "").trim() || "0", Ke = (W.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Re,
        damage: Ke,
        rangeStr: Le || "—",
        typeAndSize: _e,
        quantity: je,
        isProjectile: Me,
        equipped: he,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const b = c.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const N = (k == null ? void 0 : k.system) ?? {}, x = ((K = k.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: (N.level ?? "").toString().trim() || "—",
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const v = ((Se = (Ie = t == null ? void 0 : t.system) == null ? void 0 : Ie.gear) == null ? void 0 : Se.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], C = c.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var fe, be, ye, Te;
      const N = k.id;
      let x = null;
      for (const _e of I)
        if ((((fe = v[_e]) == null ? void 0 : fe.itemId) ?? "").trim() === N) {
          x = _e;
          break;
        }
      const K = ((be = k == null ? void 0 : k.system) == null ? void 0 : be.abilityType) ?? "", he = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", W = (((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.description) ?? "").trim(), Le = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: he,
        description: Le,
        kp: Number((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const q = c.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
      const N = (k == null ? void 0 : k.system) ?? {}, x = (N.description ?? "").trim(), K = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: N.quantity != null ? String(N.quantity).trim() : "1",
        description: K
      };
    });
    const O = c.filter((k) => k.type === "Egyeb");
    e.egyebList = O.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const T = (((de = e.weaponsTable) == null ? void 0 : de.length) ?? 0) > 0 || (((te = e.armorTable) == null ? void 0 : te.length) ?? 0) > 0 || (((me = e.microchipsTable) == null ? void 0 : me.length) ?? 0) > 0 || (((V = e.itemsTable) == null ? void 0 : V.length) ?? 0) > 0 || (((pe = e.egyebList) == null ? void 0 : pe.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const S = ((Ae = t == null ? void 0 : t.system) == null ? void 0 : Ae.abilities) ?? {}, A = c.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var N, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((N = k.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), F = new Map(A.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const U = (k) => {
      const N = S[k];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, X = (k) => (k || []).map((N) => {
      const x = F.get(N);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = X(U("passive")), e.abilityActiveList = X(U("active")), e;
  }
  _attachFrameListeners(s) {
    var m, g, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, p;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var n, l, p;
      i.preventDefault();
      const r = (l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (p = a == null ? void 0 : a.sheet) == null || p.render(!0);
    });
    const c = (i) => {
      var n, l;
      const r = (n = i == null ? void 0 : i.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (l = a == null ? void 0 : a.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, p, b, v;
      i.preventDefault();
      const r = (p = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, ".karakter-weapon-slot"), a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, a = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-B1bzwTFt.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, p, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !a && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (a = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p, b;
      i.preventDefault();
      const r = i.currentTarget, a = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-B1bzwTFt.mjs");
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
      var b, v, I, C, q, O;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, a = (C = (I = i.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : C.itemId;
      if (!r || !a || !this.actor) return;
      const n = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((O = n[r]) == null ? void 0 : O.items) ? n[r].items.slice() : []).filter((T) => T !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
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
      const n = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      l && (p[`system.weapons.${l}.itemId`] = "", p[`system.weapons.${l}.name`] = "", p[`system.weapons.${l}.damage`] = "", p[`system.weapons.${l}.bonus`] = ""), Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var a, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var p, b, v, I;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (p = i.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((C) => {
        var q;
        return (((q = a[C]) == null ? void 0 : q.itemId) ?? "").trim() === r;
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
      var p, b, v;
      const r = i.currentTarget, a = (b = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) == null ? void 0 : b.trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      const l = n.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const o = this, u = (i) => {
      if (!i) return;
      const r = o._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && o.actor.update(r).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, f = (i) => {
      var r, a, n;
      return i && (((a = (r = o.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || o.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(o.id)}`)));
    };
    o._votvNpcBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!f(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || o.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(o.id)}`))) || u(n);
    }, document.body.addEventListener("blur", o._votvNpcBlur, !0), o._votvNpcItemHookRegistered || (o._votvNpcItemUpdateHook = (i, r, a) => {
      var n;
      o.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === o.actor.id && o.render(!0);
    }, o._votvNpcItemDeleteHook = (i, r, a) => {
      var n;
      o.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === o.actor.id && o.render(!0);
    }, Hooks.on("updateItem", o._votvNpcItemUpdateHook), Hooks.on("deleteItem", o._votvNpcItemDeleteHook), o._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, c, d;
    const e = this.form ?? ((c = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : c.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const o = this._getFormDataForUpdate(e);
      Object.keys(o).length > 0 && await this.actor.update(o).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, s);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, g, h, i, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    const c = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!c || c.type !== "Fegyver") return;
    let d = (((i = c.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(d);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${c.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var g, h, i, r, a, n, l, p, b, v, I, C, q, O, T;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const c = ((S) => {
      var F;
      if (!S) return null;
      const A = S.uuid ?? S.documentUuid ?? ((F = S.data) == null ? void 0 : F.uuid) ?? (typeof S == "string" ? S : null);
      if (A) return A;
      if (typeof S == "object") {
        for (const H of Object.values(S))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!c) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(c);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const o = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let S = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== o.id) {
        const X = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        S = ((a = (await o.createEmbeddedDocuments("Item", [X]))[0]) == null ? void 0 : a.id) ?? S;
      }
      const A = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), F = ((l = o.system) == null ? void 0 : l.abilities) ?? {}, H = A === "active" ? "active" : "passive", U = Array.isArray((p = F[H]) == null ? void 0 : p.items) ? F[H].items.slice() : Array.isArray(F[H]) ? F[H].slice() : [];
      U.includes(S) || U.push(S), await o.update({ [`system.abilities.${H}.items`]: U }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === o.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await o.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const S = ((I = o.system) == null ? void 0 : I.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = (S.slotOrder ?? "").trim(), H = F ? F.split(/\s*,\s*/).filter((G) => A.includes(G)) : [];
      let U = A.find((G) => {
        var ee;
        return !(((ee = S[G]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      U || (U = A.find((G) => !H.includes(G)) ?? "slot1");
      const X = H.includes(U) ? H : [...H, U].filter((G) => A.includes(G));
      await o.update({
        "system.weapons.slotOrder": X.join(","),
        [`system.weapons.${U}.itemId`]: m,
        [`system.weapons.${U}.name`]: d.name ?? "",
        [`system.weapons.${U}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${U}.bonus`]: ((q = d.system) == null ? void 0 : q.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const S = ((T = (O = o.system) == null ? void 0 : O.gear) == null ? void 0 : T.microchips) ?? {}, F = ["slot1", "slot2", "slot3"].find((H) => {
        var U;
        return !(((U = S[H]) == null ? void 0 : U.itemId) ?? "").trim();
      });
      F && await o.update({
        [`system.gear.microchips.${F}.itemId`]: m,
        [`system.gear.microchips.${F}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var g, h, i, r, a, n;
    const e = (h = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", c = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = c > 0 ? `<p><strong>KP:</strong> ${c}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
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
    var f, m, g, h, i, r;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let c, d = "";
    if (e.type === "MikroChip") {
      const a = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (c = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
        const n = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        n > 0 && (d = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      c = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${o}
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
    for (const c of s.elements) {
      if (!c.name || c.disabled || c.type === "radio" && !c.checked) continue;
      let d;
      if (c.type === "checkbox")
        d = c.checked;
      else if (c.type === "number") {
        if (c.value === "") continue;
        d = Number(c.value);
      } else if (c.name === "system.resources.kp" || c.name === "system.resources.kp2" || c.name === "system.resources.kp3") {
        const o = (c.value ?? "").trim();
        if (o === "") continue;
        d = Number(o) || 0;
      } else
        d = c.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, c.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const c = e.name;
      (c === void 0 || typeof c == "string" && c.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(Z, "PARTS", foundry.utils.mergeObject(
  R(Z, Z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(Z, Z, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = R(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = R(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = R(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = Z;
var St;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
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
z(ie, "PARTS", foundry.utils.mergeObject(R(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Je = ie;
var Tt;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(R(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = R(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = re;
var _t;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", !(t.name === "name" && typeof c == "string" && c.trim() === "") && foundry.utils.setProperty(e, t.name, c);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(ne, "PARTS", foundry.utils.mergeObject(R(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = R(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ne;
var Dt;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
    }, e._votvInput = (o) => {
      var m;
      const u = o.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const f = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => c(f), 300));
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", !(t.name === "name" && typeof c == "string" && c.trim() === "") && foundry.utils.setProperty(e, t.name, c);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(ae, "PARTS", foundry.utils.mergeObject(R(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = R(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = ae;
var Ot;
const oe = class oe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(oe, "PARTS", foundry.utils.mergeObject(R(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ot = R(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = oe;
var Ct;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, g, h, i, r, a, n;
      if (!e.isEditable || !((g = (m = o.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (o) => {
      var u, f, m;
      return o && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var f, m, g;
      const u = ((f = o.target) == null ? void 0 : f.form) ?? ((g = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ce, "PARTS", foundry.utils.mergeObject(R(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = R(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let et = ce;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, c, d, o;
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
  }, (c = CONFIG.Actor).typeLabels ?? (c.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (o = CONFIG.Item).typeLabels ?? (o.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", We, {
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
  Hooks.on("updateActor", (u, f, m, g) => {
    var I, C, q, O, T;
    const h = u == null ? void 0 : u.id;
    if (!h) return;
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), a = [], n = (I = game.actors) == null ? void 0 : I.get(h);
    n != null && n.apps && a.push(...Array.from(n.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of l)
      ((C = S.document) == null ? void 0 : C.id) !== h || ((q = S.document) == null ? void 0 : q.documentName) !== "Actor" || ((O = S.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || a.includes(S) || a.push(S);
    if (r && a.some((S) => {
      const A = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return A && A.contains(i);
    })) return;
    const b = (T = game.votv) == null ? void 0 : T._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < E ? b.appId : null;
    setTimeout(() => {
      for (const S of a)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== v && S.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, f, m, g) => {
    var a, n, l;
    const h = u == null ? void 0 : u.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((a = h.system) == null ? void 0 : a.weapons) ?? {}, r = {};
    for (const [p, b] of Object.entries(i)) {
      if (!p.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== u.id || (r[`system.weapons.${p}.name`] = u.name ?? "", r[`system.weapons.${p}.damage`] = ((n = u.system) == null ? void 0 : n.damage) ?? "", r[`system.weapons.${p}.bonus`] = ((l = u.system) == null ? void 0 : l.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var E, s;
  document.body.addEventListener("click", async (e) => {
    var p, b, v, I, C, q, O, T, S, A, F, H, U, X, G, ee, we, le, ue, Ie, Se, de, te;
    const t = (b = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const c = (t.dataset.messageId ?? "").trim();
    if (!c) return;
    const d = (v = game.messages) == null ? void 0 : v.get(c), o = (C = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : C.weapon;
    if (!o) return;
    const u = o.actorId ?? ((q = d == null ? void 0 : d.speaker) == null ? void 0 : q.actor) ?? "";
    if (!u) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((O = game.actors) == null ? void 0 : O.get(o.actorId)) ?? ((T = game.actors) == null ? void 0 : T.get(u));
    if (f || (f = ((A = (S = game.scenes) == null ? void 0 : S.contents) == null ? void 0 : A.flatMap((V) => {
      var pe;
      return ((pe = V.tokens) == null ? void 0 : pe.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === u || V.id === o.actorId))) ?? null), !f) return;
    const m = o.itemId ? ((H = (F = f.items) == null ? void 0 : F.get) == null ? void 0 : H.call(F, o.itemId)) ?? ((G = (X = (U = f.items) == null ? void 0 : U.contents) == null ? void 0 : X.find) == null ? void 0 : G.call(X, (me) => me.id === o.itemId)) : null;
    let g = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim();
    if (!g && o.slotKey && (g = (((((we = f.system) == null ? void 0 : we.weapons) ?? {})[o.slotKey] ?? {}).damage ?? "").trim()), !g) {
      (Se = (le = ui.notifications) == null ? void 0 : le.warn) == null || Se.call(le, ((Ie = (ue = game.i18n) == null ? void 0 : ue.localize) == null ? void 0 : Ie.call(ue, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const h = new Roll(g);
    await h.evaluate({ async: !0 });
    const i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, r = o.targetName || "", a = o.hitLocationName || "", n = ((m == null ? void 0 : m.name) ?? (o.slotKey ? ((te = (((de = f.system) == null ? void 0 : de.weapons) ?? {})[o.slotKey]) == null ? void 0 : te.name) ?? "" : "")) || "Fegyver";
    let l = r ? `${n} – sebzés – ${r}` : `${n} – sebzés`;
    a && (l += ` (${a})`), await h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: l,
      flags: { "vacuum-of-the-void": {} },
      rollMode: i
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var o, u, f, m, g, h;
      if (!((u = (o = e.target) == null ? void 0 : o.closest) != null && u.call(o, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), c = (g = t == null ? void 0 : t.getAttribute) == null ? void 0 : g.call(t, "data-document-id");
      if (!c) return;
      const d = c.includes(".") ? c.split(".").pop() : c;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (E = game.user) != null && E.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const c = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(c != null && c.create)) {
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
      }, o = await c.create(d);
      o && console.log("Vacuum of the Void | Default scene created:", o.id);
    } catch (c) {
      console.warn("Vacuum of the Void | Default scene creation failed:", c);
    }
  })(), (async () => {
    var o, u, f, m, g, h;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((o = game.actors) == null ? void 0 : o.filter((i) => i.type === "Karakter")) ?? [];
    for (const i of t)
      try {
        const r = i.prototypeToken, a = ((u = r == null ? void 0 : r.bar1) == null ? void 0 : u.attribute) ?? "", n = ((f = r == null ? void 0 : r.bar2) == null ? void 0 : f.attribute) ?? "";
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
    const c = {
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
          await a.update(c);
        } catch (n) {
          console.warn("Vacuum of the Void | NPC token update failed for", a.name, n);
        }
    }
  })();
});
Hooks.on("preCreateToken", (E, s, e) => {
  var o, u;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, c = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = c ? (u = game.actors) == null ? void 0 : u.get(c) : null;
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
  const t = E == null ? void 0 : E.object, c = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((c == null ? void 0 : c.type) === "Karakter") {
    const o = s[0] ?? s;
    o != null && o.classList && o.classList.add("votv-karakter-token-hud");
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
  const t = ((m = E.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, c = t.resultType, d = t.critLabel, o = t.weaponAttack, u = t.weapon;
  if (!c && !d && !o) return;
  const f = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (f) {
    if (c && f.classList.add(`votv-${c}`), d) {
      const r = f.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const a = f.querySelector(".dice-total"), n = (a == null ? void 0 : a.parentElement) ?? f, l = document.createElement("div");
        l.className = `votv-crit-label votv-crit-label-${c || "neutral"}`, l.textContent = d, n.appendChild(l);
      }
    }
    if (o && u && (u.actorId || (h = E.speaker) != null && h.actor)) {
      const r = f.querySelector(".dice-total"), a = (r == null ? void 0 : r.parentElement) ?? f;
      if (!f.querySelector(".votv-weapon-outcome")) {
        const l = document.createElement("div");
        l.className = "votv-weapon-outcome";
        const p = !!u.isHit, b = u.targetName || "Célpont";
        l.textContent = p ? `Találat – ${b}` : `Nem talált – ${b}`, a.appendChild(l);
      }
      if (u.isHit && !f.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const b = u.hitLocationRoll, v = u.hitLocationName;
        p.textContent = b != null && v ? `Sebzés (Találati Hely ${b} - ${v})` : "Sebzés", p.dataset.actorId = String(u.actorId ?? ((i = E.speaker) == null ? void 0 : i.actor) ?? ""), p.dataset.itemId = String(u.itemId ?? ""), p.dataset.slotKey = String(u.slotKey ?? ""), p.dataset.targetName = String(u.targetName ?? ""), p.dataset.hitLocationName = String(u.hitLocationName ?? ""), p.dataset.messageId = String(E.id ?? ""), a.appendChild(p);
      }
    }
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-McymhF6g.mjs.map
