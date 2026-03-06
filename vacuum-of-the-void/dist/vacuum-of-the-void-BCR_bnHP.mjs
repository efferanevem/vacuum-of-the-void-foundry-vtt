var Et = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Nt = (L, i, e) => i in L ? Et(L, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : L[i] = e;
var G = (L, i, e) => Nt(L, typeof i != "symbol" ? i + "" : i, e);
var R = (L, i, e) => Ft(At(L), e, i);
const { HTMLField: $t, NumberField: E, SchemaField: j, StringField: I, BooleanField: X, ArrayField: He } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new E({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new I({ required: !1, blank: !0, initial: "" }),
        assignment: new I({ required: !1, blank: !0, initial: "" }),
        subAssignment: new I({ required: !1, blank: !0, initial: "" }),
        background: new I({ required: !1, blank: !0, initial: "" }),
        languages: new I({ required: !1, blank: !0, initial: "" })
      }),
      resources: new j({
        health: new j({
          value: new E({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new E({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new X({ required: !1, initial: !1 }),
            box2: new X({ required: !1, initial: !1 }),
            box3: new X({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new j({
          head: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new E({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new j({
          head: new E({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new E({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new E({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new E({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new j({
          value: new E({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new E({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new E({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new j({
        defense: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new E({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new j({
        deception: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new I({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new I({ required: !1, blank: !0, initial: "" }),
        combatTraining: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new E({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new j({
        slotOrder: new I({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          })
        }),
        equipment: new I({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new j({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new j({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new E({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new He(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new $t({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: Mt } = foundry.data.fields;
class jt extends xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Mt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Rt, NumberField: Qt, StringField: ve } = foundry.data.fields;
class Kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Rt({ required: !1, initial: !1 }),
      type: new ve({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ve({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ve({ required: !1, blank: !0, initial: "" }),
      damage: new ve({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ve({ required: !1, blank: !0, initial: "" }),
      special: new ve({ required: !1, blank: !0, initial: "" }),
      quantity: new ve({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Ht, StringField: Ue } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ht({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: dt } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new dt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new dt({
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
const { NumberField: zt, StringField: mt } = foundry.data.fields;
class pt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new mt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new mt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new zt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ft } = foundry.data.fields;
class Gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ft({ required: !1, blank: !0, initial: "" }),
      quantity: new ft({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Wt } = foundry.data.fields;
class Yt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Wt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function yt(L) {
  if (!L || !Array.isArray(L.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let o = !1;
  const d = (s, r = 1) => {
    if (!Array.isArray(s)) return;
    let a = r;
    for (const n of s) {
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
      const b = !o && a >= 0 && (n.number === 3 || n.number === "3") ? (o = !0, i) : a >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && b.push(w);
      }
    }
  };
  d(L.terms, 1);
  const c = i.filter((s) => s === 6).length, u = i.filter((s) => s === 1).length, f = e.filter((s) => s === 6).length, m = t.filter((s) => s === 6).length, g = c + f, h = u + m;
  return g > 0 && g === h ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var gt, ht, bt, kt;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
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
  _getScrollContainers(i) {
    var o, d, c, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((o = i.querySelector) == null ? void 0 : o.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((c = i.querySelector) == null ? void 0 : c.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), o = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (o.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (o.windowScrollTop = t.scrollTop), o;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: o } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && o && (o.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, p = c.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      p && b && (u.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const f = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, g = this.form ?? this.element, h = u.scrollState, s = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", a = () => {
      var l, p;
      if (this._applyScrollState(m, h), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const b = ((l = g.querySelector) == null ? void 0 : l.call(g, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (p = g.querySelector) == null ? void 0 : p.call(g, `[name="${CSS.escape(s.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = s.selectionStart ?? 0, b.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || s) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), o = Number(e);
    if (o <= 0 || t <= 0) return 0;
    const d = Math.floor(o / 3), c = Math.floor(2 * o / 3);
    return t <= d ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, o, d;
    const i = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of i) {
      const u = String(((d = c.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), f = Number(u);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, o, d;
    const i = (((o = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : o.contents) ?? []).filter(
      (c) => {
        var u;
        return c.type === "Pancel" && ((u = c.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of i) {
      const u = String(((d = c.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), f = Number(u);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, s, r, a, n, l, p, b, v;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const o = ((r = (s = this.actor) == null ? void 0 : s.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (a = o.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : n.value) ?? 0, c = ((l = o.currentHealth) == null ? void 0 : l.legs) ?? 0, u = B._healthStatusFromRatio(c, d), f = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = f;
    const g = this._getTotalArmorSpeedPenalty();
    m += g, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var c, u, f, m;
    const e = i ?? this.form ?? this.element;
    let t = (c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (f = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var c, u, f, m;
    const e = B.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, o = ((f = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : f.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return B._healthStatusFromRatio(d, o);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var u, f, m, g;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const o = ((u = i == null ? void 0 : i.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (f = o.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, c = ((g = o.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return B._healthStatusFromRatio(c, d);
  }
  async _prepareContext(i) {
    var Se, oe, de, ce, ye, ge, Me, je, Re, Ke, qe, Te, it, st, rt, at, nt, ot;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((de = (oe = (Se = this.actor.system) == null ? void 0 : Se.resources) == null ? void 0 : oe.stress) == null ? void 0 : de.value) || 0;
    e.stressOver10 = t > 10;
    const o = this.actor.system.resources ?? {}, d = o.hitLocations ?? {}, c = o.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of u) {
      const D = ((ce = d[y]) == null ? void 0 : ce.value) ?? 0, _ = c[y] ?? 0;
      e.computedHealthStatus[y] = B._healthStatusFromRatio(_, D);
    }
    const f = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((y) => (Number(c[y]) || 0) === 0).length;
    e.showDeathSkull = f || g >= 2;
    const h = e.computedHealthStatus.legs ?? 3, s = Number(((ge = (ye = this.actor.system) == null ? void 0 : ye.combat) == null ? void 0 : ge.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = s;
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
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = (b.slotOrder ?? "").trim(), q = w ? w.split(/\s*,\s*/).filter((y) => v.includes(y)) : [], O = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, C = O && typeof O == "object" && !Array.isArray(O) ? O : {}, T = (((Ke = C.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), S = (((qe = C.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), A = (((Te = C.slot3) == null ? void 0 : Te.itemId) ?? "").trim(), H = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, D) => {
      const _ = typeof y.sort == "number" ? y.sort : 0, P = typeof D.sort == "number" ? D.sort : 0;
      return _ - P;
    }).map((y) => {
      var le, be, ke, me, pe, Pe;
      const D = y.type === "Fegyver", _ = y.type === "MikroChip";
      let P = 0, M = "", Q = null;
      for (let _e = 0; _e < q.length; _e++) {
        const Ee = q[_e];
        if ((((le = b[Ee]) == null ? void 0 : le.itemId) ?? "") === y.id) {
          P = _e + 1, M = ((be = b[Ee]) == null ? void 0 : be.bonus) ?? "", Q = Ee;
          break;
        }
      }
      let Y = null;
      _ && (T === y.id ? Y = "slot1" : S === y.id ? Y = "slot2" : A === y.id && (Y = "slot3"));
      const Le = D && ((ke = y.system) != null && ke.damage) ? y.system.damage : "", ee = D && typeof ((me = y.system) == null ? void 0 : me.range) == "string" ? (y.system.range || "").trim() : "", he = Q ? Number((pe = b[Q]) == null ? void 0 : pe.bonus) || 0 : "";
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        type: y.type,
        isWeapon: D,
        slotAssignment: P,
        slotBonus: M,
        slotKey: Q,
        microchipSlotKey: Y,
        isEquipped: !!(Q || Y),
        damage: Le,
        rangeStr: ee,
        slotBonusNum: he,
        quantity: Number(((Pe = y.system) == null ? void 0 : Pe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = H;
    const U = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((y) => y.type === "Fegyver"), J = U.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = J;
    const z = "— Nincs fegyver —", Z = q.filter((y) => {
      const _ = ((b[y] ?? {}).itemId ?? "").trim();
      return _ ? !!U.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = Z.map((y, D) => {
      const _ = b[y] ?? {}, P = (_.itemId ?? "").trim(), M = J.find((Q) => Q.id === P);
      return {
        slotKey: y,
        itemId: P,
        slotNum: D + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || z,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const Ae = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Fe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = U.map((y) => {
      var ct, lt, ut;
      const D = y.id;
      let _ = null, P = {};
      for (const Be of q)
        if ((((ct = b[Be]) == null ? void 0 : ct.itemId) ?? "").trim() === D) {
          _ = Be, P = b[Be] ?? {};
          break;
        }
      const M = !!_, Q = ((lt = y.system) == null ? void 0 : lt.equipped) !== void 0 && ((ut = y.system) == null ? void 0 : ut.equipped) !== null ? !!y.system.equipped : M, Y = (y == null ? void 0 : y.system) ?? {}, Le = typeof Y.range == "string" ? (Y.range || "").trim() : "", ee = Y.type ?? "", he = (Ae[ee] ?? ee) || "—", le = Y.size ?? "", be = (Fe[le] ?? le) || "", ke = [he, be].filter(Boolean).join(", ") || he || "—", me = ee === "projectile" || le === "thrown", pe = Y.quantity, Pe = pe != null ? String(pe).trim() : "1", _e = String(P.bonus ?? "").trim(), Ee = String(Y.bonus ?? "").trim(), Pt = _e || Ee || "0";
      return {
        slotKey: _ ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? z,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: Pt,
        damage: P.damage ?? Y.damage ?? "",
        rangeStr: Le || "—",
        typeLabel: he,
        typeAndSize: ke,
        quantity: Pe,
        quantityDisplay: me ? Pe : "—",
        isProjectile: me,
        equipped: Q,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const Ne = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = Ne.map((y) => {
      var P, M;
      const D = (y == null ? void 0 : y.system) ?? {}, _ = ((P = y.system) == null ? void 0 : P.equipped) !== void 0 && ((M = y.system) == null ? void 0 : M.equipped) !== null ? !!y.system.equipped : !1;
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
    const $e = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = $e.map((y) => {
      const D = (y == null ? void 0 : y.system) ?? {}, _ = (D.description ?? "").trim(), P = _ ? _.length > 60 ? _.slice(0, 57) + "…" : _ : "—", M = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        quantity: M,
        description: P
      };
    });
    const xe = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = xe.map((y) => {
      const _ = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), P = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: P
      };
    });
    const we = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((y) => y.type === "MikroChip"), fe = we.map((y) => ({ id: y.id, name: y.name, img: y.img })), De = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], Ie = (y) => {
      var _, P, M;
      const D = [];
      return y !== 1 && D.push((((_ = C.slot1) == null ? void 0 : _.itemId) ?? "").trim()), y !== 2 && D.push((((P = C.slot2) == null ? void 0 : P.itemId) ?? "").trim()), y !== 3 && D.push((((M = C.slot3) == null ? void 0 : M.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = fe.filter((y) => !Ie(1).includes(y.id)), e.microchipItemsSlot2 = fe.filter((y) => !Ie(2).includes(y.id)), e.microchipItemsSlot3 = fe.filter((y) => !Ie(3).includes(y.id)), e.microchipSlots = Oe.map((y) => {
      const D = C[y] ?? {}, _ = (D.itemId ?? "").trim(), P = we.find((M) => M.id === _);
      return {
        slotKey: y,
        itemId: _,
        displayName: (P == null ? void 0 : P.name) || D.name || De,
        img: (P == null ? void 0 : P.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const D = `slot${y}`, _ = C[D] ?? {}, P = (_.itemId ?? "").trim(), M = fe.find((Q) => Q.id === P);
      e[`microchip${y}ItemId`] = P, e[`microchip${y}DisplayName`] = (M == null ? void 0 : M.name) || _.name || De, e[`microchip${y}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = we.map((y) => {
      var le, be, ke, me;
      const D = y.id;
      let _ = null;
      for (const pe of Oe)
        if ((((le = C[pe]) == null ? void 0 : le.itemId) ?? "").trim() === D) {
          _ = pe;
          break;
        }
      const P = !!_, M = ((be = y == null ? void 0 : y.system) == null ? void 0 : be.abilityType) ?? "", Q = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Le = Number((ke = y == null ? void 0 : y.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, ee = (((me = y == null ? void 0 : y.system) == null ? void 0 : me.description) ?? "").trim(), he = ee ? ee.length > 60 ? ee.slice(0, 57) + "…" : ee : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: Q,
        description: he,
        kp: Le,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: P
      };
    });
    const Ce = this.actor.system.abilities ?? {}, k = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).map((y) => {
      var D, _, P;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((D = y.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((_ = y.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((P = y.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), N = new Map(k.map((y) => [y.id, y])), x = "— Nincs képesség —", K = (y) => {
      const D = Ce[y] ?? {}, _ = (D.itemId ?? "").trim(), P = _ ? N.get(_) : null, M = (P == null ? void 0 : P.description) ?? "", Q = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: _,
        displayName: (P == null ? void 0 : P.name) || D.name || x,
        img: (P == null ? void 0 : P.img) || "",
        description: M,
        kp: Q
      };
    };
    e.abilityFajiSlot = K("faji"), e.abilityHatterSlot = K("hatter");
    const ue = (y) => {
      const D = Ce[y];
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
    return e.abilityPassiveList = W(ue("passive")), e.abilityActiveList = W(ue("active")), e;
  }
  _attachFrameListeners(i) {
    var g, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const a = (s.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-DeZtH6bZ.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var n, l, p;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget;
      let a = (r.dataset.itemId ?? "").trim();
      if (!a) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        a = (((((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const o = (s) => {
      var n;
      const r = s ? s.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const a = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', o);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && o({ currentTarget: d }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var n, l, p;
      s.preventDefault(), s.stopPropagation();
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var p;
      s.preventDefault();
      const r = s.currentTarget, a = r.dataset.skill, n = ((p = r.textContent) == null ? void 0 : p.trim()) || a, { openRollSheetForSkill: l } = await import("./roll-sheet-DeZtH6bZ.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var v, w, q, O, C, T, S;
      s.preventDefault();
      const a = s.currentTarget.closest(".karakter-weapon-slot"), n = a == null ? void 0 : a.dataset.slot;
      if (!n) return;
      const p = (((w = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!p) return;
      const b = ((O = (q = this.actor.items).get) == null ? void 0 : O.call(q, p)) ?? ((T = (C = this.actor.items.contents) == null ? void 0 : C.find) == null ? void 0 : T.call(C, (A) => A.id === p));
      (S = b == null ? void 0 : b.sheet) == null || S.render(!0);
    });
    const c = (s, r) => {
      var l;
      const a = s.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (n) {
        if (s.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = s.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (l = n.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const r = s.currentTarget, a = r.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await n.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = v ? v.split(/\s*,\s*/).filter((C) => w.includes(C)) : [], O = q.find((C) => {
          var T;
          return (((T = b[C]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (O) {
          const C = q.filter((T) => T !== O);
          p["system.weapons.slotOrder"] = C.join(","), p[`system.weapons.${O}.itemId`] = "", p[`system.weapons.${O}.name`] = "", p[`system.weapons.${O}.damage`] = "", p[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var O, C;
      const r = s.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], w = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (w) return;
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
          [`system.weapons.${T}.damage`]: ((O = n == null ? void 0 : n.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((C = n == null ? void 0 : n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (w) {
        const T = v.filter((S) => S !== w);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const r = s.currentTarget;
      if (r.disabled) return;
      const a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var T;
      s.preventDefault();
      const r = s.currentTarget, a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), l = n == null ? void 0 : n.dataset.slot;
      if (!l) return;
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((T = r.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), w = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = b);
      let q = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      v ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", n == null || n.insertBefore(q, w)), q.src = v, q.style.display = "") : q && q.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const O = p ? this.actor.items.get(p) : null, C = {
        [`system.gear.microchips.${l}.itemId`]: p,
        [`system.gear.microchips.${l}.name`]: (O == null ? void 0 : O.name) ?? ""
      };
      p && (C[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(C);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var b, v;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      if (!a || a.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((w) => {
        var q;
        return (((q = n[w]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      p && await this.actor.update({
        [`system.gear.microchips.${p}.itemId`]: "",
        [`system.gear.microchips.${p}.name`]: "",
        [`system.gear.microchips.${p}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const r = s.currentTarget.dataset.slot;
      if (!r) return;
      const a = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, r) => {
      const a = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, a));
    }), t.find(".karakter-ability-slot-single").each((s, r) => {
      const a = r.dataset.slot;
      a && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, r) => {
      const a = r.dataset.area;
      a && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var b;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.area, a = s.currentTarget.dataset.itemId;
      if (!r || !a) return;
      const n = this.actor.system.abilities ?? {}, p = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var l;
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      (l = n == null ? void 0 : n.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(a) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const r = s.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const r = s.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var O, C;
      const r = s.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], w = v.find((T) => {
        var S;
        return (((S = l[T]) == null ? void 0 : S.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (w) return;
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
          [`system.weapons.${T}.damage`]: ((O = n.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((C = n.system) == null ? void 0 : C.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (w) {
        const T = v.filter((S) => S !== w);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = v ? v.split(/\s*,\s*/).filter((C) => w.includes(C)) : [], O = q.find((C) => {
          var T;
          return (((T = b[C]) == null ? void 0 : T.itemId) ?? "").trim() === a;
        });
        if (O) {
          const C = q.filter((T) => T !== O);
          p["system.weapons.slotOrder"] = C.join(","), p[`system.weapons.${O}.itemId`] = "", p[`system.weapons.${O}.name`] = "", p[`system.weapons.${O}.damage`] = "", p[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const r = s.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, f = (s) => {
      var n, l, p, b;
      if (!s) return;
      const r = u._getFormDataForUpdate(s);
      if (Object.keys(r).length === 0) return;
      const a = ((l = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : l.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        a && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (s) => {
      var r, a, n;
      return s && (((a = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, s)) || u.id && ((n = s.closest) == null ? void 0 : n.call(s, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (s) => {
      var p;
      const r = s.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const l = s.relatedTarget;
      l && (n.contains(l) || u.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), f(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, f, m;
    const e = {};
    for (const g of i.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      g.type === "checkbox" ? h = g.checked : g.type === "number" ? h = g.value === "" ? 0 : Number(g.value) : h = g.value ?? "", foundry.utils.setProperty(e, g.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), o = t.hitLocations ?? {}, d = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const g of c) {
      const h = ((m = o[g]) == null ? void 0 : m.value) ?? 0, s = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, B._healthStatusFromRatio(s, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, o, d, c, u, f, m, g, h, s, r, a;
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
          if (((o = l.parent) == null ? void 0 : o.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const b = (((c = l.system) == null ? void 0 : c.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
          const w = b === "active" ? "active" : "passive", q = Array.isArray((u = v[w]) == null ? void 0 : u.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          q.includes(p) || q.push(p), await this.actor.update({ [`system.abilities.${w}.items`]: q });
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
            const w = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await p.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (b) {
            const w = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, q = (w.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = q ? q.split(/\s*,\s*/).filter((S) => O.includes(S)) : [], T = C.filter((S) => {
              var A;
              return (((A = w[S]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (T.length > 0) {
              const A = {
                "system.weapons.slotOrder": C.filter((F) => !T.includes(F)).join(",")
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
          if (((s = l.parent) == null ? void 0 : s.id) !== p.id) {
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
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, c, u;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = i.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var u, f, m, g, h, s;
    i.preventDefault(), i.stopPropagation(), (u = i.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
      [`system.weapons.${e}.bonus`]: ((s = d.system) == null ? void 0 : s.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var o;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (o = i.currentTarget) == null || o.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var m, g;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((h, s) => {
      const r = typeof h.sort == "number" ? h.sort : 0, a = typeof s.sort == "number" ? s.sort : 0;
      return r - a;
    }).map((h) => h.id), c = d.indexOf(t), u = d.indexOf(e);
    if (c === -1 || u === -1) return;
    d.splice(c, 1), d.splice(u, 0, t);
    const f = d.map((h, s) => ({
      _id: h,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(i) {
    var o, d, c;
    const e = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    const o = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, o)}px`;
  }
  async _postItemToChat(i) {
    var f, m, g;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (o = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const s = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
        s > 0 && (d = `<p><strong>KP:</strong> ${s}</p>`);
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
  async _postAbilityToChat(i) {
    var g, h, s;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", o = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var o, d;
    const e = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var o;
    this._parseAbilityDrop(i) && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var c, u, f;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((u = o.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: o.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var o;
    this._parseAbilityDrop(i) && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var f, m, g, h;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const o = await fromUuid(t.uuid);
    if (!o || o.type !== "Kepesseg" && o.type !== "ability") return;
    let d = o.id;
    if (((m = o.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(o.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [s]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((h = c[e]) == null ? void 0 : h.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, c, u;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = i.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let o;
    try {
      o = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (o == null ? void 0 : o.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, f, m, g, h;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
  async _rollSkill(i, e) {
    const o = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(o) || 0;
    const c = this._getSkillHealthStatus(i);
    c === 1 ? d -= 6 : c === 2 && (d -= 3);
    const f = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: g, label: h } = yt(m), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: h } },
      rollMode: s
    });
  }
  async _rollMorale() {
    var d;
    const i = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
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
    const o = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": o });
  }
  async _rollWeapon(i) {
    var v;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, o = this.actor.system.skills ?? {}, d = this.actor.items.filter((w) => w.type === "Fegyver");
    let c = null;
    t.itemId && (c = d.find((w) => w.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, g = (((v = c == null ? void 0 : c.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(o[g] || 0) || 0, s = f + h, a = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(a);
    await n.evaluate({ async: !0 });
    const { resultType: l, label: p } = yt(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var f, m, g, h, s, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    let o = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === i));
    if (!o || o.type !== "Fegyver") return;
    let d = (((s = o.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
G(B, "PARTS", foundry.utils.mergeObject(
  R(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), G(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((gt = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : gt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ht = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((kt = (bt = R(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : bt.window) == null ? void 0 : kt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
G(B, "BODY_PART_BY_SKILL", {
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
var vt, wt, It, St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var o, d, c, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((o = i.querySelector) == null ? void 0 : o.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((c = i.querySelector) == null ? void 0 : c.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), o = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (o.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (o.windowScrollTop = t.scrollTop), o;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: o } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && o && (o.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
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
    const c = await super.render(i, e), u = this.element, f = this.form ?? this.element, m = d.scrollState, g = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", s = () => {
      var r, a;
      if (this._applyScrollState(u, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const n = ((r = f.querySelector) == null ? void 0 : r.call(f, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (a = f.querySelector) == null ? void 0 : a.call(f, `[name="${CSS.escape(g.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = g.selectionStart ?? 0, n.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || g) && (requestAnimationFrame(s), setTimeout(s, 0), setTimeout(s, 50), setTimeout(s, 150), setTimeout(s, 300), setTimeout(s, 450)), c;
  }
  async _prepareContext(i) {
    var z, Z, Ae, Fe, Ne, $e, xe, we, fe, De, Oe, Ie, Ce;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((z = this.actor) == null ? void 0 : z.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ae = (Z = e.system) == null ? void 0 : Z.identity) == null ? void 0 : Ae.size) ?? "").trim() || "Közepes";
    const t = this.actor, o = ((Fe = t == null ? void 0 : t.items) == null ? void 0 : Fe.contents) ?? [], d = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.weapons) ?? {}, c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), f = u ? u.split(/\s*,\s*/).filter((k) => c.includes(k)) : [], m = o.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", s = f.length > 0 ? f : c, r = c.filter((k) => !s.includes(k)), a = [...s, ...r], n = a.filter((k) => {
      var x;
      const N = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return N && m.some((K) => K.id === N);
    });
    e.weaponSlots = n.map((k) => {
      const N = d[k] ?? {}, x = (N.itemId ?? "").trim(), K = g.find((ue) => ue.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (K == null ? void 0 : K.name) || N.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var qe;
      const N = k.id;
      let x = null, K = {};
      for (const Te of a)
        if ((((qe = d[Te]) == null ? void 0 : qe.itemId) ?? "").trim() === N) {
          x = Te, K = d[Te] ?? {};
          break;
        }
      const ue = !!x, W = (k == null ? void 0 : k.system) ?? {}, Se = typeof W.range == "string" ? (W.range || "").trim() : "", oe = W.type ?? "", de = (l[oe] ?? oe) || "—", ce = W.size ?? "", ye = (p[ce] ?? ce) || "", ge = [de, ye].filter(Boolean).join(", ") || de || "—", Me = oe === "projectile" || ce === "thrown", je = W.quantity != null ? String(W.quantity).trim() : "1", Re = String(W.bonus ?? K.bonus ?? "").trim() || "0", Ke = (W.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Re,
        damage: Ke,
        rangeStr: Se || "—",
        typeAndSize: ge,
        quantity: je,
        isProjectile: Me,
        equipped: ue,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const b = o.filter((k) => k.type === "Pancel");
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
    const v = ((xe = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : xe.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], q = o.filter((k) => k.type === "MikroChip");
    e.microchipsTable = q.map((k) => {
      var oe, de, ce, ye;
      const N = k.id;
      let x = null;
      for (const ge of w)
        if ((((oe = v[ge]) == null ? void 0 : oe.itemId) ?? "").trim() === N) {
          x = ge;
          break;
        }
      const K = ((de = k == null ? void 0 : k.system) == null ? void 0 : de.abilityType) ?? "", ue = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", W = (((ce = k == null ? void 0 : k.system) == null ? void 0 : ce.description) ?? "").trim(), Se = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ue,
        description: Se,
        kp: Number((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const O = o.filter((k) => k.type === "Targy");
    e.itemsTable = O.map((k) => {
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
    const C = o.filter((k) => k.type === "Egyeb");
    e.egyebList = C.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const T = (((we = e.weaponsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((fe = e.armorTable) == null ? void 0 : fe.length) ?? 0) > 0 || (((De = e.microchipsTable) == null ? void 0 : De.length) ?? 0) > 0 || (((Oe = e.itemsTable) == null ? void 0 : Oe.length) ?? 0) > 0 || (((Ie = e.egyebList) == null ? void 0 : Ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const S = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, A = o.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
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
    }, J = (k) => (k || []).map((N) => {
      const x = F.get(N);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = J(U("passive")), e.abilityActiveList = J(U("active")), e;
  }
  _attachFrameListeners(i) {
    var m, g, h;
    super._attachFrameListeners(i);
    const e = ((m = i == null ? void 0 : i.querySelector) == null ? void 0 : m.call(i, "form.votv.npc-sheet")) ?? i ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (s) => {
      var n, l, p;
      if (s.preventDefault(), s.stopPropagation(), !this.actor) return;
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (s) => {
      var n, l, p;
      s.preventDefault();
      const r = (l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (p = a == null ? void 0 : a.sheet) == null || p.render(!0);
    });
    const o = (s) => {
      var n, l;
      const r = (n = s == null ? void 0 : s.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (l = a == null ? void 0 : a.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), o(s.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), o(s.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (s) => {
      var l, p, b, v;
      s.preventDefault();
      const r = (p = (l = s.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, ".karakter-weapon-slot"), a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (s) => {
      var l;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget, a = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-DeZtH6bZ.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var n, l, p, b, v;
      s.preventDefault(), s.stopPropagation();
      const r = s.currentTarget;
      let a = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !a && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (a = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var p, b;
      s.preventDefault();
      const r = s.currentTarget, a = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-DeZtH6bZ.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      var a, n;
      s.preventDefault();
      const r = (n = (a = s.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      var n, l;
      s.preventDefault();
      const r = (((l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(r) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var b, v, w, q, O, C;
      if (s.preventDefault(), !s.altKey) return;
      const r = (v = (b = s.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, a = (q = (w = s.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : q.itemId;
      if (!r || !a || !this.actor) return;
      const n = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, p = (Array.isArray((C = n[r]) == null ? void 0 : C.items) ? n[r].items.slice() : []).filter((T) => T !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      var a, n;
      if (s.preventDefault(), !s.altKey) return;
      const r = (n = (a = s.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      var b, v;
      if (s.preventDefault(), !s.altKey) return;
      const r = s.currentTarget, a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      l && (p[`system.weapons.${l}.itemId`] = "", p[`system.weapons.${l}.name`] = "", p[`system.weapons.${l}.damage`] = "", p[`system.weapons.${l}.bonus`] = ""), Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      var a, n;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((n = (a = s.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var p, b, v, w;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((b = (p = s.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((q) => {
        var O;
        return (((O = a[q]) == null ? void 0 : O.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      var n, l;
      if (s.preventDefault(), !s.altKey) return;
      const r = (((l = (n = s.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || h.forEach((s) => {
      var r;
      (((r = s.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (s.draggable = !0);
    }), t.on("dragstart", d, (s) => {
      var p, b, v;
      const r = s.currentTarget, a = (b = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) == null ? void 0 : b.trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      const l = n.uuid;
      s.dataTransfer && (s.dataTransfer.setData("text/plain", l), s.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), s.dataTransfer.effectAllowed = "copyMove"), typeof ((v = s.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && s.dataTransfer.setDragImage(r, 0, 0);
    });
    const c = this, u = (s) => {
      if (!s) return;
      const r = c._getFormDataForUpdate(s);
      Object.keys(r).length !== 0 && c.actor.update(r).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, f = (s) => {
      var r, a, n;
      return s && (((a = (r = c.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, s)) || c.id && ((n = s.closest) == null ? void 0 : n.call(s, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (s) => {
      var p;
      const r = s.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!f(n)) return;
      const l = s.relatedTarget;
      l && (n.contains(l) || c.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(c.id)}`))) || u(n);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (s, r, a) => {
      var n;
      c.actor && ((n = s == null ? void 0 : s.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (s, r, a) => {
      var n;
      c.actor && ((n = s == null ? void 0 : s.parent) == null ? void 0 : n.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(i) {
    var t, o, d;
    const e = this.form ?? ((o = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : o.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((u) => console.warn("VoidNpcSheet save on preClose failed", u));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, i);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var f, m, g, h, s, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    const o = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === i));
    if (!o || o.type !== "Fegyver") return;
    let d = (((s = o.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
  async _onDropItem(i, e) {
    var g, h, s, r, a, n, l, p, b, v, w, q, O, C, T;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, i, e);
    const o = ((S) => {
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
    if (!o) return (h = super._onDropItem) == null ? void 0 : h.call(this, i, e);
    const d = await fromUuid(o);
    if (!d || d.documentName !== "Item") return (s = super._onDropItem) == null ? void 0 : s.call(this, i, e);
    const c = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let S = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== c.id) {
        const J = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        S = ((a = (await c.createEmbeddedDocuments("Item", [J]))[0]) == null ? void 0 : a.id) ?? S;
      }
      const A = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), F = ((l = c.system) == null ? void 0 : l.abilities) ?? {}, H = A === "active" ? "active" : "passive", U = Array.isArray((p = F[H]) == null ? void 0 : p.items) ? F[H].items.slice() : Array.isArray(F[H]) ? F[H].slice() : [];
      U.includes(S) || U.push(S), await c.update({ [`system.abilities.${H}.items`]: U }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === c.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await c.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const S = ((w = c.system) == null ? void 0 : w.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = (S.slotOrder ?? "").trim(), H = F ? F.split(/\s*,\s*/).filter((z) => A.includes(z)) : [];
      let U = A.find((z) => {
        var Z;
        return !(((Z = S[z]) == null ? void 0 : Z.itemId) ?? "").trim();
      });
      U || (U = A.find((z) => !H.includes(z)) ?? "slot1");
      const J = H.includes(U) ? H : [...H, U].filter((z) => A.includes(z));
      await c.update({
        "system.weapons.slotOrder": J.join(","),
        [`system.weapons.${U}.itemId`]: m,
        [`system.weapons.${U}.name`]: d.name ?? "",
        [`system.weapons.${U}.damage`]: ((q = d.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${U}.bonus`]: ((O = d.system) == null ? void 0 : O.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const S = ((T = (C = c.system) == null ? void 0 : C.gear) == null ? void 0 : T.microchips) ?? {}, F = ["slot1", "slot2", "slot3"].find((H) => {
        var U;
        return !(((U = S[H]) == null ? void 0 : U.itemId) ?? "").trim();
      });
      F && await c.update({
        [`system.gear.microchips.${F}.itemId`]: m,
        [`system.gear.microchips.${F}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(i) {
    var g, h, s, r, a, n;
    const e = (h = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : h.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", o = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
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
  async _postItemToChat(i) {
    var f, m, g, h, s, r;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let o, d = "";
    if (e.type === "MikroChip") {
      const a = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (o = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
        const n = Number(((s = e.system) == null ? void 0 : s.replaceCost) ?? 0) || 0;
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
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const o of i.elements) {
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
G(V, "PARTS", foundry.utils.mergeObject(
  R(V, V, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), G(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(V, V, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((vt = R(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((wt = R(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((St = (It = R(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : It.window) == null ? void 0 : St.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = V;
var Tt;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
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
G(te, "PARTS", foundry.utils.mergeObject(R(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), G(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Je = te;
var _t;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(ie, "PARTS", foundry.utils.mergeObject(R(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), G(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((_t = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ie;
var Dt;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", !(t.name === "name" && typeof o == "string" && o.trim() === "") && foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
G(se, "PARTS", foundry.utils.mergeObject(R(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), G(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = R(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = se;
var Ot;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, e._votvInput = (c) => {
      var m;
      const u = c.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const f = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => o(f), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", !(t.name === "name" && typeof o == "string" && o.trim() === "") && foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
G(re, "PARTS", foundry.utils.mergeObject(R(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), G(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = R(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = re;
var Ct;
const ae = class ae extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(ae, "PARTS", foundry.utils.mergeObject(R(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), G(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = R(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = ae;
var qt;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const o = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(o).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (c) => {
      var m, g, h, s, r, a, n;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((s = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : s.call(h, "data-edit")) !== "img") return;
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
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const o = (c) => {
      if (!c) return;
      const u = e._getFormDataForUpdate(c);
      Object.keys(u).length !== 0 && e.document.update(u).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, d = (c) => {
      var u, f, m;
      return c && (((f = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : f.call(u, c)) || e.id && ((m = c.closest) == null ? void 0 : m.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var f, m, g;
      const u = ((f = c.target) == null ? void 0 : f.form) ?? ((g = (m = c.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "form"));
      d(u) && o(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let o;
      t.type === "checkbox" ? o = t.checked : t.type === "number" ? o = t.value === "" ? 0 : Number(t.value) : o = t.value ?? "", foundry.utils.setProperty(e, t.name, o);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(ne, "PARTS", foundry.utils.mergeObject(R(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), G(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = R(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let et = ne;
const Lt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, o, d, c;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Kt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = pt, CONFIG.Item.dataModels.ability = pt, CONFIG.Item.dataModels.Targy = Gt, CONFIG.Item.dataModels.Egyeb = Yt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const L = 500;
  Hooks.on("updateActor", (u, f, m, g) => {
    var w, q, O, C, T;
    const h = u == null ? void 0 : u.id;
    if (!h) return;
    const s = document.activeElement, r = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA" || s.isContentEditable), a = [], n = (w = game.actors) == null ? void 0 : w.get(h);
    n != null && n.apps && a.push(...Array.from(n.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of l)
      ((q = S.document) == null ? void 0 : q.id) !== h || ((O = S.document) == null ? void 0 : O.documentName) !== "Actor" || ((C = S.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || a.includes(S) || a.push(S);
    if (r && a.some((S) => {
      const A = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return A && A.contains(s);
    })) return;
    const b = (T = game.votv) == null ? void 0 : T._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < L ? b.appId : null;
    setTimeout(() => {
      for (const S of a)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== v && S.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, f, m, g) => {
    var a, n, l;
    const h = u == null ? void 0 : u.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || u.type !== "Fegyver") return;
    const s = ((a = h.system) == null ? void 0 : a.weapons) ?? {}, r = {};
    for (const [p, b] of Object.entries(s)) {
      if (!p.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== u.id || (r[`system.weapons.${p}.name`] = u.name ?? "", r[`system.weapons.${p}.damage`] = ((n = u.system) == null ? void 0 : n.damage) ?? "", r[`system.weapons.${p}.bonus`] = ((l = u.system) == null ? void 0 : l.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
async function tt(L) {
  var r, a, n, l, p, b, v, w, q, O, C, T, S, A, F, H, U;
  const i = (a = (r = L.target) == null ? void 0 : r.closest) == null ? void 0 : a.call(r, ".votv-weapon-damage-chat");
  if (!i || i.disabled) return;
  L.preventDefault(), L.stopPropagation();
  let e = (i.dataset.actorId ?? "").trim(), t = (i.dataset.itemId ?? "").trim(), o = (i.dataset.slotKey ?? "").trim(), d = (i.dataset.targetName ?? "").trim(), c = (i.dataset.hitLocationName ?? "").trim();
  if (!e || !t) {
    const J = (i.dataset.messageId ?? "").trim(), z = J ? (n = game.messages) == null ? void 0 : n.get(J) : null, Z = (p = (l = z == null ? void 0 : z.flags) == null ? void 0 : l["vacuum-of-the-void"]) == null ? void 0 : p.weapon;
    Z && (e = e || Z.actorId || "", t = t || Z.itemId || "", o = o || Z.slotKey || "", d = d || Z.targetName || "", c = c || Z.hitLocationName || "");
  }
  const u = e ? (b = game.actors) == null ? void 0 : b.get(e) : null;
  if (!u) return;
  const f = t ? ((w = (v = u.items) == null ? void 0 : v.get) == null ? void 0 : w.call(v, t)) ?? ((C = (O = (q = u.items) == null ? void 0 : q.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (J) => J.id === t)) : null;
  if (!f || f.type !== "Fegyver") return;
  let m = (((T = f.system) == null ? void 0 : T.damage) ?? "").trim();
  if (!m && o && (m = (((((S = u.system) == null ? void 0 : S.weapons) ?? {})[o] ?? {}).damage ?? "").trim()), !m) {
    (U = (A = ui.notifications) == null ? void 0 : A.warn) == null || U.call(A, ((H = (F = game.i18n) == null ? void 0 : F.localize) == null ? void 0 : H.call(F, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
    return;
  }
  const g = new Roll(m);
  await g.evaluate({ async: !0 });
  const h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
  let s = d ? `${f.name} – sebzés – ${d}` : `${f.name} – sebzés`;
  c && (s += ` (${c})`), await g.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: u }),
    flavor: s,
    flags: { "vacuum-of-the-void": {} },
    rollMode: h
  });
}
Hooks.on("ready", () => {
  var i, e;
  document.body.addEventListener("click", tt);
  const L = document.querySelector("#chat-log");
  L && L.addEventListener("click", tt), document.body.addEventListener(
    "dragstart",
    (t) => {
      var u, f, m, g, h, s;
      if (!((f = (u = t.target) == null ? void 0 : u.closest) != null && f.call(u, "#actors"))) return;
      const o = (g = (m = t.target) == null ? void 0 : m.closest) == null ? void 0 : g.call(m, "[data-document-id]"), d = (h = o == null ? void 0 : o.getAttribute) == null ? void 0 : h.call(o, "data-document-id");
      if (!d) return;
      const c = d.includes(".") ? d.split(".").pop() : d;
      c && ((s = game.actors) != null && s.get(c)) && (game.votv._dragSourceActorId = c);
    },
    !0
  ), (i = game.user) != null && i.isGM && ((e = game.scenes) == null ? void 0 : e.size) === 0 && (async () => {
    var t, o;
    try {
      const d = ((t = CONFIG.Scene) == null ? void 0 : t.documentClass) ?? ((o = game.scenes) == null ? void 0 : o.documentClass);
      if (!(d != null && d.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const c = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Lt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, u = await d.create(c);
      u && console.log("Vacuum of the Void | Default scene created:", u.id);
    } catch (d) {
      console.warn("Vacuum of the Void | Default scene creation failed:", d);
    }
  })(), (async () => {
    var u, f, m, g, h, s;
    const t = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, o = ((u = game.actors) == null ? void 0 : u.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of o)
      try {
        const a = r.prototypeToken, n = ((f = a == null ? void 0 : a.bar1) == null ? void 0 : f.attribute) ?? "", l = ((m = a == null ? void 0 : a.bar2) == null ? void 0 : m.attribute) ?? "";
        (n || l) && await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (a) {
        console.warn("Vacuum of the Void | Prototype token update failed for", r.name, a);
      }
    for (const r of game.scenes ?? []) {
      const a = ((g = r.tokens) == null ? void 0 : g.filter((n) => {
        var l;
        return ((l = n.actor) == null ? void 0 : l.type) === "Karakter";
      })) ?? [];
      for (const n of a)
        try {
          await n.update(t);
        } catch (l) {
          console.warn("Vacuum of the Void | Token update failed for", n.name, l);
        }
    }
    const d = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, c = ((h = game.actors) == null ? void 0 : h.filter((r) => r.type === "Npc")) ?? [];
    for (const r of c)
      try {
        await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (a) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", r.name, a);
      }
    for (const r of game.scenes ?? []) {
      const a = ((s = r.tokens) == null ? void 0 : s.filter((n) => {
        var l;
        return ((l = n.actor) == null ? void 0 : l.type) === "Npc";
      })) ?? [];
      for (const n of a)
        try {
          await n.update(d);
        } catch (l) {
          console.warn("Vacuum of the Void | NPC token update failed for", n.name, l);
        }
    }
  })();
});
Hooks.on("preCreateToken", (L, i, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, o = t ?? L.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = o ? (u = game.actors) == null ? void 0 : u.get(o) : null;
  if (d) {
    if (d.type === "Karakter") {
      L.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && L.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("preCreateCombatant", (L, i, e) => {
  const t = L.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && L.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (L, i, e) => {
  if ((L == null ? void 0 : L.id) !== "combat") return;
  const t = i[0] ?? i;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (L, i, e) => {
  var d;
  const t = L == null ? void 0 : L.object, o = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((o == null ? void 0 : o.type) === "Karakter") {
    const c = i[0] ?? i;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (L, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || L.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Lt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (L, i, e) => {
  var m, g, h, s;
  const t = ((m = L.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, o = t.resultType, d = t.critLabel, c = t.weaponAttack, u = t.weapon;
  if (!o && !d && !c) return;
  const f = (g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, ".dice-roll");
  if (f) {
    if (o && f.classList.add(`votv-${o}`), d) {
      const r = f.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const a = f.querySelector(".dice-total"), n = (a == null ? void 0 : a.parentElement) ?? f, l = document.createElement("div");
        l.className = `votv-crit-label votv-crit-label-${o || "neutral"}`, l.textContent = d, n.appendChild(l);
      }
    }
    if (c && u && (u.actorId || (h = L.speaker) != null && h.actor)) {
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
        p.textContent = b != null && v ? `Sebzés (Találati Hely ${b} - ${v})` : "Sebzés", p.dataset.actorId = String(u.actorId ?? ((s = L.speaker) == null ? void 0 : s.actor) ?? ""), p.dataset.itemId = String(u.itemId ?? ""), p.dataset.slotKey = String(u.slotKey ?? ""), p.dataset.targetName = String(u.targetName ?? ""), p.dataset.hitLocationName = String(u.hitLocationName ?? ""), p.dataset.messageId = String(L.id ?? ""), p.addEventListener("click", async (w) => {
          w.preventDefault(), w.stopPropagation(), await tt(w);
        }), a.appendChild(p);
      }
    }
  }
});
export {
  We as V,
  yt as c
};
//# sourceMappingURL=vacuum-of-the-void-BCR_bnHP.mjs.map
