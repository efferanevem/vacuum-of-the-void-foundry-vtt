var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (N, i, e) => i in N ? Pt(N, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[i] = e;
var H = (N, i, e) => Et(N, typeof i != "symbol" ? i + "" : i, e);
var j = (N, i, e) => Ft(At(N), e, i);
const { HTMLField: Nt, NumberField: C, SchemaField: E, StringField: S, BooleanField: W, ArrayField: Ce } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new E({
        name: new S({ required: !1, blank: !0, initial: "" }),
        player: new S({ required: !1, blank: !0, initial: "" }),
        level: new C({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new S({ required: !1, blank: !0, initial: "" }),
        assignment: new S({ required: !1, blank: !0, initial: "" }),
        subAssignment: new S({ required: !1, blank: !0, initial: "" }),
        background: new S({ required: !1, blank: !0, initial: "" }),
        languages: new S({ required: !1, blank: !0, initial: "" })
      }),
      resources: new E({
        health: new E({
          value: new C({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new C({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new E({
          head: new E({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new W({ required: !1, initial: !1 }),
            box2: new W({ required: !1, initial: !1 }),
            box3: new W({ required: !1, initial: !1 })
          }),
          torso: new E({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new W({ required: !1, initial: !1 }),
            box2: new W({ required: !1, initial: !1 }),
            box3: new W({ required: !1, initial: !1 })
          }),
          arms: new E({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new W({ required: !1, initial: !1 }),
            box2: new W({ required: !1, initial: !1 }),
            box3: new W({ required: !1, initial: !1 })
          }),
          legs: new E({
            value: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new W({ required: !1, initial: !1 }),
            box2: new W({ required: !1, initial: !1 }),
            box3: new W({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new E({
          head: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new C({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new E({
          head: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new C({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new E({
          value: new C({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new C({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new C({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new E({
        defense: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new C({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new E({
        deception: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new C({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new C({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new E({
        slotOrder: new S({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new E({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new E({
        microchips: new E({
          slot1: new E({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new W({ required: !1, initial: !1 })
          }),
          slot2: new E({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new W({ required: !1, initial: !1 })
          }),
          slot3: new E({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new W({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new Ce(
          new E({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ce(
          new E({
            name: new S({ required: !1, blank: !0, initial: "" }),
            quantity: new C({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new E({
        faji: new E({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new E({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        passive: new E({
          items: new Ce(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new E({
          items: new Ce(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new E({
        biography: new Nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Fe, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new Fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Rt, NumberField: Jt, StringField: fe } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Rt({ required: !1, initial: !1 }),
      type: new fe({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new fe({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new fe({ required: !1, blank: !0, initial: "" }),
      damage: new fe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new fe({ required: !1, blank: !0, initial: "" }),
      special: new fe({ required: !1, blank: !0, initial: "" }),
      quantity: new fe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Kt, StringField: Le } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Le({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Le({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Le({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Le({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ee, StringField: ut } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
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
      cost: new Ee({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ee({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ee({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ht, StringField: dt } = foundry.data.fields;
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
      kp: new Ht({
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
function ft(N) {
  if (!N || !Array.isArray(N.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let r = !1;
  const d = (s, l = 1) => {
    if (!Array.isArray(s)) return;
    let a = l;
    for (const c of s) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, a);
        continue;
      }
      if (typeof c.operator == "string") {
        a = c.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof c.faces == "number" ? c.faces : void 0, y = Array.isArray(c.results) ? c.results : null;
      if (!u || !y || u === 8 || u !== 6) continue;
      const v = !r && a >= 0 && (c.number === 3 || c.number === "3") ? (r = !0, i) : a >= 0 ? e : t;
      for (const k of y) {
        if (!k || k.discarded || k.hidden) continue;
        const I = Number(k.result ?? k);
        Number.isFinite(I) && v.push(I);
      }
    }
  };
  d(N.terms, 1);
  const n = i.filter((s) => s === 6).length, o = i.filter((s) => s === 1).length, g = e.filter((s) => s === 6).length, p = t.filter((s) => s === 6).length, h = n + g, f = o + p;
  return h > 0 && h === f ? { resultType: null, label: null } : h >= 3 ? { resultType: "critical", label: "Brutális Siker" } : h === 2 ? { resultType: "critical", label: "Kritikus Siker" } : f >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : f === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const K = class K extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var r, d, n, o;
    if (!i) return { form: null, windowContent: null };
    const e = ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((n = i.querySelector) == null ? void 0 : n.call(i, ".votv-scroll")) ?? ((o = i.querySelector) == null ? void 0 : o.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, n = this.form ?? this.element;
    let o = { scrollState: {}, focus: null };
    if (d) {
      o.scrollState = this._saveScrollState(d);
      const u = document.activeElement, y = n.contains(u), v = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      y && v && (o.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const g = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const p = this.element, h = this.form ?? this.element, f = o.scrollState, s = o.focus, l = typeof (f == null ? void 0 : f.formScrollTop) == "number" || typeof (f == null ? void 0 : f.windowScrollTop) == "number", a = () => {
      var u, y;
      if (this._applyScrollState(p, f), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const v = ((u = h.querySelector) == null ? void 0 : u.call(h, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (y = h.querySelector) == null ? void 0 : y.call(h, `[name="${CSS.escape(s.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = s.selectionStart ?? 0, v.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(p, f);
    };
    return (l || s) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const d = Math.floor(r / 3), n = Math.floor(2 * r / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, d;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var o;
        return n.type === "Pancel" && ((o = n.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of i) {
      const o = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(o);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var o;
        return n.type === "Pancel" && ((o = n.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of i) {
      const o = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(o);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var f, s, l, a, c, u, y, v, k;
    const e = i ?? this.form ?? this.element;
    let t = (f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((l = (s = this.actor) == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((c = (a = r.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : c.value) ?? 0, n = ((u = r.currentHealth) == null ? void 0 : u.legs) ?? 0, o = K._healthStatusFromRatio(n, d), g = Number(((k = (v = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : v.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let p;
    o === 0 ? p = 0 : o === 1 ? p = -6 : o === 2 ? p = -3 : p = g;
    const h = this._getTotalArmorSpeedPenalty();
    p += h, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var n, o, g, p;
    const e = i ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((p = (g = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : g.combat) == null ? void 0 : p.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var n, o, g, p;
    const e = K.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((g = (o = t.hitLocations) == null ? void 0 : o[e]) == null ? void 0 : g.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return K._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var o, g, p, h;
    const t = K.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((o = i == null ? void 0 : i.system) == null ? void 0 : o.resources) ?? {}, d = ((p = (g = r.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : p.value) ?? 0, n = ((h = r.currentHealth) == null ? void 0 : h[t]) ?? 0;
    return K._healthStatusFromRatio(n, d);
  }
  async _prepareContext(i) {
    var Be, He, ze, Ge, We, Ye, Je, Qe, Xe, Ze, Ve, et, tt, it, st, rt, nt, at;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ze = (He = (Be = this.actor.system) == null ? void 0 : Be.resources) == null ? void 0 : He.stress) == null ? void 0 : ze.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of o) {
      const O = ((Ge = d[m]) == null ? void 0 : Ge.value) ?? 0, T = n[m] ?? 0;
      e.computedHealthStatus[m] = K._healthStatusFromRatio(T, O);
    }
    const g = (Number(n.head) || 0) === 0, h = ["torso", "arms", "legs"].filter((m) => (Number(n[m]) || 0) === 0).length;
    e.showDeathSkull = g || h >= 2;
    const f = e.computedHealthStatus.legs ?? 3, s = Number(((Ye = (We = this.actor.system) == null ? void 0 : We.combat) == null ? void 0 : Ye.givenSpeed) ?? 0) || 0;
    let l;
    f === 0 ? l = 0 : f === 1 ? l = -6 : f === 2 ? l = -3 : l = s;
    const a = this._getTotalArmorSpeedPenalty();
    l += a, e.effectiveGivenSpeed = l;
    const u = (Number(((Qe = (Je = this.actor.system) == null ? void 0 : Je.combat) == null ? void 0 : Qe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: u } },
      { inplace: !1 }
    );
    const y = K.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [m, O] of Object.entries(y)) {
      const T = e.computedHealthStatus[O];
      e.skillHealthStatus[m] = T, e.skillDisabled[m] = T === 0 ? " disabled" : "", e.skillHasHealthTint[m] = !0;
    }
    const v = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (v.slotOrder ?? "").trim(), _ = I ? I.split(/\s*,\s*/).filter((m) => k.includes(m)) : [], L = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, q = L && typeof L == "object" && !Array.isArray(L) ? L : {}, w = (((Ze = q.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), x = (((Ve = q.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), R = (((et = q.slot3) == null ? void 0 : et.itemId) ?? "").trim(), Oe = this.actor.items.contents.filter((m) => m.type !== "Kepesseg" && m.type !== "ability").slice().sort((m, O) => {
      const T = typeof m.sort == "number" ? m.sort : 0, D = typeof O.sort == "number" ? O.sort : 0;
      return T - D;
    }).map((m) => {
      var re, me, pe, oe, ce, Se;
      const O = m.type === "Fegyver", T = m.type === "MikroChip";
      let D = 0, F = "", G = null;
      for (let be = 0; be < _.length; be++) {
        const Te = _[be];
        if ((((re = v[Te]) == null ? void 0 : re.itemId) ?? "") === m.id) {
          D = be + 1, F = ((me = v[Te]) == null ? void 0 : me.bonus) ?? "", G = Te;
          break;
        }
      }
      let z = null;
      T && (w === m.id ? z = "slot1" : x === m.id ? z = "slot2" : R === m.id && (z = "slot3"));
      const Ie = O && ((pe = m.system) != null && pe.damage) ? m.system.damage : "", Q = O && typeof ((oe = m.system) == null ? void 0 : oe.range) == "string" ? (m.system.range || "").trim() : "", de = G ? Number((ce = v[G]) == null ? void 0 : ce.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: O,
        slotAssignment: D,
        slotBonus: F,
        slotKey: G,
        microchipSlotKey: z,
        isEquipped: !!(G || z),
        damage: Ie,
        rangeStr: Q,
        slotBonusNum: de,
        quantity: Number(((Se = m.system) == null ? void 0 : Se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = Oe;
    const ye = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((m) => m.type === "Fegyver"), ve = ye.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = ve;
    const ke = "— Nincs fegyver —", De = _.filter((m) => {
      const T = ((v[m] ?? {}).itemId ?? "").trim();
      return T ? !!ye.find((F) => F.id === T) : !1;
    });
    e.weaponSlots = De.map((m, O) => {
      const T = v[m] ?? {}, D = (T.itemId ?? "").trim(), F = ve.find((G) => G.id === D);
      return {
        slotKey: m,
        itemId: D,
        slotNum: O + 1,
        displayName: (F == null ? void 0 : F.name) || T.name || ke,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const b = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, P = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ye.map((m) => {
      var ot, ct, lt;
      const O = m.id;
      let T = null, D = {};
      for (const Ae of _)
        if ((((ot = v[Ae]) == null ? void 0 : ot.itemId) ?? "").trim() === O) {
          T = Ae, D = v[Ae] ?? {};
          break;
        }
      const F = !!T, G = ((ct = m.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = m.system) == null ? void 0 : lt.equipped) !== null ? !!m.system.equipped : F, z = (m == null ? void 0 : m.system) ?? {}, Ie = typeof z.range == "string" ? (z.range || "").trim() : "", Q = z.type ?? "", de = (b[Q] ?? Q) || "—", re = z.size ?? "", me = (P[re] ?? re) || "", pe = [de, me].filter(Boolean).join(", ") || de || "—", oe = Q === "projectile" || re === "thrown", ce = z.quantity, Se = ce != null ? String(ce).trim() : "1", be = String(D.bonus ?? "").trim(), Te = String(z.bonus ?? "").trim(), Lt = be || Te || "0";
      return {
        slotKey: T ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? ke,
        img: (m == null ? void 0 : m.img) ?? "",
        bonus: Lt,
        damage: D.damage ?? z.damage ?? "",
        rangeStr: Ie || "—",
        typeLabel: de,
        typeAndSize: pe,
        quantity: Se,
        quantityDisplay: oe ? Se : "—",
        isProjectile: oe,
        equipped: G,
        special: (z.special ?? "").trim() || "—"
      };
    });
    const A = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((m) => m.type === "Pancel");
    e.armorTable = A.map((m) => {
      var D, F;
      const O = (m == null ? void 0 : m.system) ?? {}, T = ((D = m.system) == null ? void 0 : D.equipped) !== void 0 && ((F = m.system) == null ? void 0 : F.equipped) !== null ? !!m.system.equipped : !1;
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const M = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((m) => m.type === "Targy");
    e.itemsTable = M.map((m) => {
      const O = (m == null ? void 0 : m.system) ?? {}, T = (O.description ?? "").trim(), D = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", F = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        quantity: F,
        description: D
      };
    });
    const le = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((m) => m.type === "Egyeb");
    e.egyebList = le.map((m) => {
      const T = (((m == null ? void 0 : m.system) ?? {}).description ?? "").trim(), D = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        description: D
      };
    });
    const B = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((m) => m.type === "MikroChip"), ne = B.map((m) => ({ id: m.id, name: m.name, img: m.img })), se = "— Nincs Mikro-Chip —", ae = ["slot1", "slot2", "slot3"], J = (m) => {
      var T, D, F;
      const O = [];
      return m !== 1 && O.push((((T = q.slot1) == null ? void 0 : T.itemId) ?? "").trim()), m !== 2 && O.push((((D = q.slot2) == null ? void 0 : D.itemId) ?? "").trim()), m !== 3 && O.push((((F = q.slot3) == null ? void 0 : F.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((m) => !J(1).includes(m.id)), e.microchipItemsSlot2 = ne.filter((m) => !J(2).includes(m.id)), e.microchipItemsSlot3 = ne.filter((m) => !J(3).includes(m.id)), e.microchipSlots = ae.map((m) => {
      const O = q[m] ?? {}, T = (O.itemId ?? "").trim(), D = B.find((F) => F.id === T);
      return {
        slotKey: m,
        itemId: T,
        displayName: (D == null ? void 0 : D.name) || O.name || se,
        img: (D == null ? void 0 : D.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((m) => {
      const O = `slot${m}`, T = q[O] ?? {}, D = (T.itemId ?? "").trim(), F = ne.find((G) => G.id === D);
      e[`microchip${m}ItemId`] = D, e[`microchip${m}DisplayName`] = (F == null ? void 0 : F.name) || T.name || se, e[`microchip${m}Img`] = (F == null ? void 0 : F.img) || "";
    }), e.microchipsTable = B.map((m) => {
      var re, me, pe, oe;
      const O = m.id;
      let T = null;
      for (const ce of ae)
        if ((((re = q[ce]) == null ? void 0 : re.itemId) ?? "").trim() === O) {
          T = ce;
          break;
        }
      const D = !!T, F = ((me = m == null ? void 0 : m.system) == null ? void 0 : me.abilityType) ?? "", G = F === "active" ? "Aktív" : F === "passive" ? "Passzív" : F || "—", z = F === "active", Ie = Number((pe = m == null ? void 0 : m.system) == null ? void 0 : pe.replaceCost) >= 0 ? Number(m.system.replaceCost) : 0, Q = (((oe = m == null ? void 0 : m.system) == null ? void 0 : oe.description) ?? "").trim(), de = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        typeLabel: G,
        description: de,
        kp: Ie,
        isActive: z,
        slotKey: T ?? "",
        equipped: D
      };
    });
    const ue = this.actor.system.abilities ?? {}, ge = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((m) => {
      var O, T, D;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((O = m.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((T = m.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((D = m.system) == null ? void 0 : D.kp) ?? 0) || 0
      };
    }), _e = new Map(ge.map((m) => [m.id, m])), Pe = "— Nincs képesség —", qe = (m) => {
      const O = ue[m] ?? {}, T = (O.itemId ?? "").trim(), D = T ? _e.get(T) : null, F = (D == null ? void 0 : D.description) ?? "", G = (D == null ? void 0 : D.kp) ?? 0;
      return {
        itemId: T,
        displayName: (D == null ? void 0 : D.name) || O.name || Pe,
        img: (D == null ? void 0 : D.img) || "",
        description: F,
        kp: G
      };
    };
    e.abilityFajiSlot = qe("faji"), e.abilityHatterSlot = qe("hatter");
    const we = (m) => {
      const O = ue[m];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, he = (m) => m.map((O) => {
      const T = _e.get(O);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = he(we("passive")), e.abilityActiveList = he(we("active")), e;
  }
  _attachFrameListeners(i) {
    var h, f;
    super._attachFrameListeners(i);
    const e = this.form ?? ((h = i == null ? void 0 : i.querySelector) == null ? void 0 : h.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const a = (s.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-D8qUWQw4.mjs");
      c(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var c, u, y;
      s.preventDefault(), s.stopPropagation();
      const l = s.currentTarget;
      let a = (l.dataset.itemId ?? "").trim();
      if (!a) {
        const v = (l.dataset.slot ?? "").trim();
        if (!v) return;
        a = (((((u = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : u.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((y = l.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (s) => {
      var c;
      const l = s ? s.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const a = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (f = e.querySelector) == null ? void 0 : f.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var c, u, y;
      s.preventDefault(), s.stopPropagation();
      const l = ((y = (u = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var y;
      s.preventDefault();
      const l = s.currentTarget, a = l.dataset.skill, c = ((y = l.textContent) == null ? void 0 : y.trim()) || a, { openRollSheetForSkill: u } = await import("./roll-sheet-D8qUWQw4.mjs");
      u(this.actor, a, c);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var k, I, _, L, q, w, x;
      s.preventDefault();
      const a = s.currentTarget.closest(".karakter-weapon-slot"), c = a == null ? void 0 : a.dataset.slot;
      if (!c) return;
      const y = (((I = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[c]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!y) return;
      const v = ((L = (_ = this.actor.items).get) == null ? void 0 : L.call(_, y)) ?? ((w = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : w.call(q, (R) => R.id === y));
      (x = v == null ? void 0 : v.sheet) == null || x.render(!0);
    });
    const n = (s, l) => {
      var u;
      const a = s.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (c) {
        if (s.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const y = s.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (u = c.sheet) == null || u.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), n(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), n(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const l = s.currentTarget, a = l.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c) return;
      let u = Number(l.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await c.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor, u = c.items.get(a), y = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = k ? k.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], L = _.find((q) => {
          var w;
          return (((w = v[q]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (L) {
          const q = _.filter((w) => w !== L);
          y["system.weapons.slotOrder"] = q.join(","), y[`system.weapons.${L}.itemId`] = "", y[`system.weapons.${L}.name`] = "", y[`system.weapons.${L}.damage`] = "", y[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var L, q;
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, y = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], I = k.find((w) => {
        var x;
        return (((x = u[w]) == null ? void 0 : x.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (I) return;
        let w = k.find((R) => {
          var U;
          return !((U = u[R]) != null && U.itemId);
        });
        const x = new Set(k);
        if (!w) {
          const R = v.find((U) => !x.has(U));
          if (!R) return;
          w = R, k.push(R);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${w}.damage`]: ((L = c == null ? void 0 : c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c == null ? void 0 : c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = k.filter((x) => x !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const l = s.currentTarget;
      if (l.disabled) return;
      const a = l.closest(".karakter-microchip-slot-select-wrap"), c = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var w;
      s.preventDefault();
      const l = s.currentTarget, a = l.closest(".karakter-microchip-slot-select-wrap"), c = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), u = c == null ? void 0 : c.dataset.slot;
      if (!u) return;
      const y = (l.dataset.itemId ?? "").trim(), v = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (l.dataset.itemImg ?? "").trim(), I = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = v);
      let _ = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      k ? (_ || (_ = document.createElement("img"), _.className = "karakter-microchip-slot-thumb", _.alt = "", c == null || c.insertBefore(_, I)), _.src = k, _.style.display = "") : _ && _.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const L = y ? this.actor.items.get(y) : null, q = {
        [`system.gear.microchips.${u}.itemId`]: y,
        [`system.gear.microchips.${u}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      y && (q[`system.gear.microchips.${u}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var v, k;
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a || a.type !== "MikroChip") return;
      const c = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((I) => {
        var _;
        return (((_ = c[I]) == null ? void 0 : _.itemId) ?? "").trim() === l;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const l = s.currentTarget.dataset.slot;
      if (!l) return;
      const a = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, l) => {
      const a = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, a));
    }), t.find(".karakter-ability-slot-single").each((s, l) => {
      const a = l.dataset.slot;
      a && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, l) => {
      const a = l.dataset.area;
      a && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var v;
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.area, a = s.currentTarget.dataset.itemId;
      if (!l || !a) return;
      const c = this.actor.system.abilities ?? {}, y = (Array.isArray((v = c[l]) == null ? void 0 : v.items) ? c[l].items.slice() : []).filter((k) => k !== a);
      await this.actor.update({ [`system.abilities.${l}.items`]: y });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var u;
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(a) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = (l.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const y = this.form ?? this.element, v = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var L, q;
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, y = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], I = k.find((w) => {
        var x;
        return (((x = u[w]) == null ? void 0 : x.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (I) return;
        let w = k.find((R) => {
          var U;
          return !((U = u[R]) != null && U.itemId);
        });
        const x = new Set(k);
        if (!w) {
          const R = v.find((U) => !x.has(U));
          if (!R) return;
          w = R, k.push(R);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: c.name ?? "",
          [`system.weapons.${w}.damage`]: ((L = c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = k.filter((x) => x !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor, u = c.items.get(a), y = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = k ? k.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], L = _.find((q) => {
          var w;
          return (((w = v[q]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (L) {
          const q = _.filter((w) => w !== L);
          y["system.weapons.slotOrder"] = q.join(","), y[`system.weapons.${L}.itemId`] = "", y[`system.weapons.${L}.name`] = "", y[`system.weapons.${L}.damage`] = "", y[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Targy") return;
      const u = (l.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const y = this.form ?? this.element, v = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const o = this, g = (s) => {
      var c, u, y, v;
      if (!s) return;
      const l = o._getFormDataForUpdate(s);
      if (Object.keys(l).length === 0) return;
      const a = ((u = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : u.currentHealth) != null || ((v = (y = l.system) == null ? void 0 : y.resources) == null ? void 0 : v.hitLocations) != null;
      o.actor.update(l).then(() => {
        a && setTimeout(() => o.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, p = (s) => {
      var l, a, c;
      return s && (((a = (l = o.element) == null ? void 0 : l.contains) == null ? void 0 : a.call(l, s)) || o.id && ((c = s.closest) == null ? void 0 : c.call(s, `#${CSS.escape(o.id)}`)));
    };
    o._votvBlur = (s) => {
      var y;
      const l = s.target;
      if (!l || !l.form) return;
      const a = l.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const c = l.form;
      if (!p(c)) return;
      const u = s.relatedTarget;
      u && (c.contains(u) || o.id && ((y = u.closest) != null && y.call(u, `#${CSS.escape(o.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: o.id, at: Date.now() }), g(c));
    }, document.body.addEventListener("blur", o._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var o, g, p;
    const e = {};
    for (const h of i.elements) {
      if (!h.name || h.disabled || h.type === "radio" && !h.checked || h.name.startsWith("system.resources.healthStatus.")) continue;
      let f;
      h.type === "checkbox" ? f = h.checked : h.type === "number" ? f = h.value === "" ? 0 : Number(h.value) : f = h.value ?? "", foundry.utils.setProperty(e, h.name, f);
    }
    const t = foundry.utils.mergeObject(
      ((o = this.actor.system) == null ? void 0 : o.resources) ?? {},
      ((g = foundry.utils.expandObject(e).system) == null ? void 0 : g.resources) ?? {}
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const h of n) {
      const f = ((p = r[h]) == null ? void 0 : p.value) ?? 0, s = d[h] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${h}`, K._healthStatusFromRatio(s, f));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, r, d, n, o, g, p, h, f, s, l, a;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            c = u;
            break;
          }
      }
      if (c) {
        const u = await fromUuid(c);
        if (u && u.documentName === "Item" && (u.type === "Kepesseg" || u.type === "ability")) {
          let y = u.id;
          if (((r = u.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(u.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const v = (((n = u.system) == null ? void 0 : n.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (v === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": u.name
            });
            return;
          }
          if (v === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": u.name
            });
            return;
          }
          const I = v === "active" ? "active" : "passive", _ = Array.isArray((o = k[I]) == null ? void 0 : o.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
          _.includes(y) || _.push(y), await this.actor.update({ [`system.abilities.${I}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((g = e.data) == null ? void 0 : g.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            c = u;
            break;
          }
      }
      if (c) {
        const u = await fromUuid(c);
        if (u && u.documentName === "Item" && u.type === "Fegyver") {
          const y = this.actor, v = ((p = u.parent) == null ? void 0 : p.id) !== y.id;
          let k = u.id;
          if (v) {
            const I = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            k = ((h = (await y.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : h.id) ?? k;
          }
          if (v) {
            const I = ((f = y.system) == null ? void 0 : f.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((x) => L.includes(x)) : [], w = q.filter((x) => {
              var R;
              return (((R = I[x]) == null ? void 0 : R.itemId) ?? "").trim() === k;
            });
            if (w.length > 0) {
              const R = {
                "system.weapons.slotOrder": q.filter((U) => !w.includes(U)).join(",")
              };
              for (const U of w)
                R[`system.weapons.${U}.itemId`] = "", R[`system.weapons.${U}.name`] = "", R[`system.weapons.${U}.damage`] = "", R[`system.weapons.${U}.bonus`] = "";
              await y.update(R);
            }
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "Pancel") {
          const y = this.actor;
          if (((s = u.parent) == null ? void 0 : s.id) !== y.id) {
            const v = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [v]);
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "MikroChip") {
          const y = this.actor;
          ((l = u.parent) == null ? void 0 : l.id) !== y.id && await y.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
        if (u && u.documentName === "Item" && (u.type === "Targy" || u.type === "Egyeb")) {
          const y = this.actor;
          ((a = u.parent) == null ? void 0 : a.id) !== y.id && await y.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, n, o;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var o, g, p, h, f, s;
    i.preventDefault(), i.stopPropagation(), (o = i.currentTarget) == null || o.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((h = d.parent) == null ? void 0 : h.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((f = d.system) == null ? void 0 : f.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((s = d.system) == null ? void 0 : s.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (r = i.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var p, h;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((h = i.dataTransfer) == null ? void 0 : h.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((f, s) => {
      const l = typeof f.sort == "number" ? f.sort : 0, a = typeof s.sort == "number" ? s.sort : 0;
      return l - a;
    }).map((f) => f.id), n = d.indexOf(t), o = d.indexOf(e);
    if (n === -1 || o === -1) return;
    d.splice(n, 1), d.splice(o, 0, t);
    const g = d.map((f, s) => ({
      _id: f,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(i) {
    var r, d, n;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
    const r = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, r)}px`;
  }
  async _postItemToChat(i) {
    var g, p, h;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let r, d = "";
    if (e.type === "MikroChip") {
      const f = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (r = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const s = Number(((h = e.system) == null ? void 0 : h.replaceCost) ?? 0) || 0;
        s > 0 && (d = `<p><strong>KP:</strong> ${s}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: o,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var h, f, s;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((h = e.system) == null ? void 0 : h.kind) ?? "passive", r = Number(((f = e.system) == null ? void 0 : f.kp) ?? 0) || 0, d = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", o = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${o}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var r, d;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var n, o, g;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((o = r.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var g, p, h, f;
    i.preventDefault(), (g = i.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((p = r.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((h = (await this.actor.createEmbeddedDocuments("Item", [s]))[0]) == null ? void 0 : h.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, o = Array.isArray((f = n[e]) == null ? void 0 : f.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    o.includes(d) || o.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: o });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, n, o;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var o, g, p, h, f;
    i.preventDefault(), (o = i.currentTarget) == null || o.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((h = d.parent) == null ? void 0 : h.id) !== this.actor.id && (n = ((f = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : f.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const r = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(r) || 0;
    const n = this._getSkillHealthStatus(i);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
    const g = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(g);
    await p.evaluate({ async: !0 });
    const { resultType: h, label: f } = ft(p), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: f } },
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
    const r = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(i) {
    var k;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((I) => I.id === t.itemId) ?? null);
    const o = n && n.name || t.name || `Fegyver (${i})`, g = Number(t.bonus || 0) || 0, h = (((k = n == null ? void 0 : n.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", f = Number(r[h] || 0) || 0, s = g + f, a = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, c = new Roll(a);
    await c.evaluate({ async: !0 });
    const { resultType: u, label: y } = ft(c), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${o} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: y } },
      rollMode: v
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var g, p, h, f, s, l, a, c, u, y;
    const t = this.actor;
    if (!t) return;
    let r = ((p = (g = t.items).get) == null ? void 0 : p.call(g, i)) ?? ((f = (h = t.items.contents) == null ? void 0 : h.find) == null ? void 0 : f.call(h, (v) => v.id === i));
    if (!r || r.type !== "Fegyver") return;
    let d = (((s = r.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (a = ui.notifications) == null ? void 0 : a.warn) == null || y.call(a, ((u = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : u.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }
};
H(K, "PARTS", foundry.utils.mergeObject(
  j(K, K, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), H(K, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(K, K, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = j(K, K, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = j(K, K, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = j(K, K, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
H(K, "BODY_PART_BY_SKILL", {
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
let Ne = K;
var vt, kt, wt, It;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(i) {
    var U, Oe, ye, ve, ke, De;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((U = this.actor) == null ? void 0 : U.system), e.showDeathSkull = !1;
    const t = this.actor, r = ((Oe = t == null ? void 0 : t.items) == null ? void 0 : Oe.contents) ?? [], d = ((ye = t == null ? void 0 : t.system) == null ? void 0 : ye.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], o = (d.slotOrder ?? "").trim(), g = o ? o.split(/\s*,\s*/).filter((b) => n.includes(b)) : [...n], p = r.filter((b) => b.type === "Fegyver"), h = p.map((b) => ({ id: b.id, name: b.name, img: b.img })), f = "— Nincs fegyver —", s = g.filter((b) => {
      var A;
      const P = (((A = d[b]) == null ? void 0 : A.itemId) ?? "").trim();
      return P && p.some((M) => M.id === P);
    });
    e.weaponSlots = s.map((b) => {
      const P = d[b] ?? {}, A = (P.itemId ?? "").trim(), M = h.find((le) => le.id === A);
      return {
        slotKey: b,
        itemId: A,
        displayName: (M == null ? void 0 : M.name) || P.name || f,
        img: (M == null ? void 0 : M.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, a = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = p.map((b) => {
      var we;
      const P = b.id;
      let A = null, M = {};
      for (const he of g)
        if ((((we = d[he]) == null ? void 0 : we.itemId) ?? "").trim() === P) {
          A = he, M = d[he] ?? {};
          break;
        }
      const le = !!A, B = (b == null ? void 0 : b.system) ?? {}, ne = typeof B.range == "string" ? (B.range || "").trim() : "", se = B.type ?? "", ae = (l[se] ?? se) || "—", J = B.size ?? "", ue = (a[J] ?? J) || "", ge = [ae, ue].filter(Boolean).join(", ") || ae || "—", _e = se === "projectile" || J === "thrown", Pe = B.quantity != null ? String(B.quantity).trim() : "1", qe = String(M.bonus ?? B.bonus ?? "").trim() || "0";
      return {
        slotKey: A ?? "",
        itemId: P,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? f,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: qe,
        damage: M.damage ?? B.damage ?? "",
        rangeStr: ne || "—",
        typeAndSize: ge,
        quantity: Pe,
        isProjectile: _e,
        equipped: le,
        special: (B.special ?? "").trim() || "—"
      };
    });
    const c = r.filter((b) => b.type === "Pancel");
    e.armorTable = c.map((b) => {
      var M;
      const P = (b == null ? void 0 : b.system) ?? {}, A = ((M = b.system) == null ? void 0 : M.equipped) === !0;
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: (P.level ?? "").toString().trim() || "—",
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: A
      };
    });
    const u = ((ke = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : ke.microchips) ?? {}, y = ["slot1", "slot2", "slot3"], v = r.filter((b) => b.type === "MikroChip");
    e.microchipsTable = v.map((b) => {
      var se, ae, J, ue;
      const P = b.id;
      let A = null;
      for (const ge of y)
        if ((((se = u[ge]) == null ? void 0 : se.itemId) ?? "").trim() === P) {
          A = ge;
          break;
        }
      const M = ((ae = b == null ? void 0 : b.system) == null ? void 0 : ae.abilityType) ?? "", le = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", B = (((J = b == null ? void 0 : b.system) == null ? void 0 : J.description) ?? "").trim(), ne = B ? B.length > 60 ? B.slice(0, 57) + "…" : B : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: le,
        description: ne,
        kp: Number((ue = b == null ? void 0 : b.system) == null ? void 0 : ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0,
        isActive: M === "active",
        slotKey: A ?? "",
        equipped: !!A
      };
    });
    const k = r.filter((b) => b.type === "Targy");
    e.itemsTable = k.map((b) => {
      const P = (b == null ? void 0 : b.system) ?? {}, A = (P.description ?? "").trim(), M = A ? A.length > 60 ? A.slice(0, 57) + "…" : A : "—";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: M
      };
    });
    const I = r.filter((b) => b.type === "Egyeb");
    e.egyebList = I.map((b) => {
      const A = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), M = A ? A.length > 80 ? A.slice(0, 77) + "…" : A : "";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: M
      };
    });
    const _ = ((De = t == null ? void 0 : t.system) == null ? void 0 : De.abilities) ?? {}, L = r.filter((b) => b.type === "Kepesseg" || b.type === "ability").map((b) => {
      var P, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        description: ((P = b.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), q = new Map(L.map((b) => [b.id, b])), w = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = w, e.abilityHatterSlot = w;
    const x = (b) => {
      const P = _[b];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, R = (b) => (b || []).map((P) => {
      const A = q.get(P);
      return A ? { id: A.id, name: A.name, img: A.img, description: A.description, kp: A.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = R(x("passive")), e.abilityActiveList = R(x("active")), e;
  }
  _attachFrameListeners(i) {
    var g, p, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, "form.votv.npc-sheet")) ?? i ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (f) => {
      var a, c, u;
      if (f.preventDefault(), f.stopPropagation(), !this.actor) return;
      const s = ((u = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new s({
        type: "image",
        current: this.actor.img || "",
        callback: (y) => {
          y && this.actor.update({ img: y });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (f) => {
      var a, c, u;
      f.preventDefault();
      const s = (c = (a = f.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : c.itemId;
      if (!s || !this.actor) return;
      const l = this.actor.items.get(s);
      (u = l == null ? void 0 : l.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (f) => {
      var l, a;
      f.preventDefault();
      const s = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      s && await this._postAbilityToChat(s);
    }), t.on("click", ".karakter-ability-pill-remove", async (f) => {
      var y, v, k, I, _, L;
      if (f.preventDefault(), !f.altKey) return;
      const s = (v = (y = f.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.area, l = (I = (k = f.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : I.itemId;
      if (!s || !l || !this.actor) return;
      const a = ((_ = this.actor.system) == null ? void 0 : _.abilities) ?? {}, u = (Array.isArray((L = a[s]) == null ? void 0 : L.items) ? a[s].items.slice() : []).filter((q) => q !== l);
      await this.actor.update({ [`system.abilities.${s}.items`]: u }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (f) => {
      var l, a;
      if (f.preventDefault(), !f.altKey) return;
      const s = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.slot;
      s && (await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    });
    const r = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (p = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : p.call(e, r)) == null || h.forEach((f) => {
      var s;
      (((s = f.dataset) == null ? void 0 : s.itemId) ?? "").trim() && (f.draggable = !0);
    }), t.on("dragstart", r, (f) => {
      var u, y, v;
      const s = f.currentTarget, l = (y = (u = s == null ? void 0 : s.dataset) == null ? void 0 : u.itemId) == null ? void 0 : y.trim();
      if (!l || !this.actor) return;
      const a = this.actor.items.get(l);
      if (!a) return;
      const c = a.uuid;
      f.dataTransfer && (f.dataTransfer.setData("text/plain", c), f.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: c })), f.dataTransfer.effectAllowed = "copyMove"), typeof ((v = f.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && s && f.dataTransfer.setDragImage(s, 0, 0);
    });
    const d = this, n = (f) => {
      if (!f) return;
      const s = d._getFormDataForUpdate(f);
      Object.keys(s).length !== 0 && d.actor.update(s).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, o = (f) => {
      var s, l, a;
      return f && (((l = (s = d.element) == null ? void 0 : s.contains) == null ? void 0 : l.call(s, f)) || d.id && ((a = f.closest) == null ? void 0 : a.call(f, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (f) => {
      var u;
      const s = f.target;
      if (!s || !s.form) return;
      const l = s.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const a = s.form;
      if (!o(a)) return;
      const c = f.relatedTarget;
      c && (a.contains(c) || d.id && ((u = c.closest) != null && u.call(c, `#${CSS.escape(d.id)}`))) || n(a);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0);
  }
  _tearDown(i) {
    var t, r, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((o) => console.warn("VoidNpcSheet save on close failed", o));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, i);
  }
  async _onDropItem(i, e) {
    var g, p, h, f, s, l, a, c, u;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, i, e);
    const r = ((y) => {
      var k;
      if (!y) return null;
      const v = y.uuid ?? y.documentUuid ?? ((k = y.data) == null ? void 0 : k.uuid) ?? (typeof y == "string" ? y : null);
      if (v) return v;
      if (typeof y == "object") {
        for (const I of Object.values(y))
          if (typeof I == "string" && I.includes(".") && I.startsWith("Item.")) return I;
      }
      return null;
    })(e);
    if (!r) return (p = super._onDropItem) == null ? void 0 : p.call(this, i, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (h = super._onDropItem) == null ? void 0 : h.call(this, i, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let y = d.id;
      if (((f = d.parent) == null ? void 0 : f.id) !== n.id) {
        const L = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        y = ((s = (await n.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : s.id) ?? y;
      }
      const v = (((l = d.system) == null ? void 0 : l.kind) ?? "passive").toString(), k = ((a = n.system) == null ? void 0 : a.abilities) ?? {}, I = v === "active" ? "active" : "passive", _ = Array.isArray((c = k[I]) == null ? void 0 : c.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
      _.includes(y) || _.push(y), await n.update({ [`system.abilities.${I}.items`]: _ }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((u = d.parent) == null ? void 0 : u.id) === n.id) return;
    const o = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(o, { system: { ...o.system ?? {}, equipped: !1 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(o, { system: { ...o.system ?? {}, equipped: !1 } }, { inplace: !0 }), await n.createEmbeddedDocuments("Item", [o]);
  }
  async _postAbilityToChat(i) {
    var h, f, s, l, a;
    const e = (f = (h = this.actor) == null ? void 0 : h.items) == null ? void 0 : f.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", r = Number(((l = e.system) == null ? void 0 : l.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", o = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${o}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const r of i.elements) {
      if (!r.name || r.disabled || r.type === "radio" && !r.checked) continue;
      let d;
      r.type === "checkbox" ? d = r.checked : r.type === "number" ? d = r.value === "" ? 0 : Number(r.value) : d = r.value ?? "", d !== void 0 && foundry.utils.setProperty(e, r.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const r = e.name;
      (r === void 0 || typeof r == "string" && r.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
H(Y, "PARTS", foundry.utils.mergeObject(
  j(Y, Y, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), H(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Y, Y, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((vt = j(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((kt = j(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : kt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = j(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let $e = Y;
var St;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
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
H(X, "PARTS", foundry.utils.mergeObject(j(X, X, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), H(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(X, X, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = j(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let xe = X;
var Tt;
const Z = class Z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
H(Z, "PARTS", foundry.utils.mergeObject(j(Z, Z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), H(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Z, Z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let je = Z;
var Ot;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
H(V, "PARTS", foundry.utils.mergeObject(j(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), H(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = j(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Re = V;
var Dt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
    }, e._votvInput = (n) => {
      var p;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const g = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(g), 300));
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
H(ee, "PARTS", foundry.utils.mergeObject(j(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), H(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Me = ee;
var _t;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
H(te, "PARTS", foundry.utils.mergeObject(j(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), H(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((_t = j(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Ke = te;
var qt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var p, h, f, s, l, a, c;
      if (!e.isEditable || !((h = (p = n.target) == null ? void 0 : p.closest) != null && h.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const o = ((c = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (n) => {
      var o, g, p;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, p, h;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
H(ie, "PARTS", foundry.utils.mergeObject(j(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), H(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = j(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let Ue = ie;
const Ct = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, r, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Mt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ne, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", $e, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", xe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", je, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Re, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Me, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ke, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ue, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (n, o, g, p) => {
    var k, I, _, L, q;
    const h = n == null ? void 0 : n.id;
    if (!h) return;
    const f = document.activeElement, s = f && (f.tagName === "INPUT" && f.type !== "checkbox" && f.type !== "radio" || f.tagName === "TEXTAREA" || f.isContentEditable), l = [], a = (k = game.actors) == null ? void 0 : k.get(h);
    a != null && a.apps && l.push(...Array.from(a.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of c)
      ((I = w.document) == null ? void 0 : I.id) !== h || ((_ = w.document) == null ? void 0 : _.documentName) !== "Actor" || ((L = w.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (s && l.some((w) => {
      const x = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return x && x.contains(f);
    })) return;
    const y = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, v = y && Date.now() - y.at < N ? y.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== v && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, o, g, p) => {
    var l, a, c;
    const h = n == null ? void 0 : n.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || n.type !== "Fegyver") return;
    const f = ((l = h.system) == null ? void 0 : l.weapons) ?? {}, s = {};
    for (const [u, y] of Object.entries(f)) {
      if (!u.startsWith("slot")) continue;
      const v = ((y == null ? void 0 : y.itemId) ?? "").trim();
      !v || v !== n.id || (s[`system.weapons.${u}.name`] = n.name ?? "", s[`system.weapons.${u}.damage`] = ((a = n.system) == null ? void 0 : a.damage) ?? "", s[`system.weapons.${u}.bonus`] = ((c = n.system) == null ? void 0 : c.bonus) ?? "");
    }
    Object.keys(s).length && h.update(s);
  });
});
Hooks.on("ready", () => {
  var N, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, o, g, p, h, f;
      if (!((o = (n = e.target) == null ? void 0 : n.closest) != null && o.call(n, "#actors"))) return;
      const t = (p = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : p.call(g, "[data-document-id]"), r = (h = t == null ? void 0 : t.getAttribute) == null ? void 0 : h.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((f = game.actors) != null && f.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (N = game.user) != null && N.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const r = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(r != null && r.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Ct },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await r.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (r) {
      console.warn("Vacuum of the Void | Default scene creation failed:", r);
    }
  })();
});
Hooks.on("preCreateToken", (N, i, e) => {
  var n, o;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (o = game.actors) == null ? void 0 : o.get(r) : null;
  !d || d.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || N.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ct,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (N, i, e) => {
  var o, g;
  const t = ((o = N.flags) == null ? void 0 : o["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel;
  if (!r && !d) return;
  const n = (g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, ".dice-roll");
  if (n && (r && n.classList.add(`votv-${r}`), d)) {
    const p = n.querySelector(".votv-crit-label");
    if (p) {
      p.textContent = d;
      return;
    }
    const h = n.querySelector(".dice-total"), f = (h == null ? void 0 : h.parentElement) ?? n, s = document.createElement("div");
    s.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, s.textContent = d, f.appendChild(s);
  }
});
export {
  Ne as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-DuMAedIc.mjs.map
