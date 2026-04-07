var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (R, s, e) => s in R ? Pt(R, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[s] = e;
var G = (R, s, e) => Et(R, typeof s != "symbol" ? s + "" : s, e);
var M = (R, s, e) => Ft(At(R), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: x, StringField: w, BooleanField: J, ArrayField: Ce } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new x({
        name: new w({ required: !1, blank: !0, initial: "" }),
        player: new w({ required: !1, blank: !0, initial: "" }),
        level: new P({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new w({ required: !1, blank: !0, initial: "" }),
        assignment: new w({ required: !1, blank: !0, initial: "" }),
        subAssignment: new w({ required: !1, blank: !0, initial: "" }),
        background: new w({ required: !1, blank: !0, initial: "" }),
        languages: new w({ required: !1, blank: !0, initial: "" })
      }),
      resources: new x({
        health: new x({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new x({
          head: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          torso: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          arms: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          legs: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new x({
          head: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new x({
          head: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new x({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new x({
        defense: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new x({
        deception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
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
      weapons: new x({
        slotOrder: new w({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new x({
          name: new w({ required: !1, blank: !0, initial: "" }),
          bonus: new w({ required: !1, blank: !0, initial: "" }),
          damage: new w({ required: !1, blank: !0, initial: "" }),
          itemId: new w({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new x({
        microchips: new x({
          slot1: new x({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot2: new x({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot3: new x({
            itemId: new w({ required: !1, blank: !0, initial: "" }),
            name: new w({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          })
        }),
        equipment: new w({ required: !1, blank: !0, initial: "" }),
        armor: new Ce(
          new x({
            name: new w({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new w({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new w({ required: !1, blank: !0, initial: "" }),
            level: new w({ required: !1, blank: !0, initial: "" }),
            other: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ce(
          new x({
            name: new w({ required: !1, blank: !0, initial: "" }),
            quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new x({
        faji: new x({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new x({
          itemId: new w({ required: !1, blank: !0, initial: "" }),
          name: new w({ required: !1, blank: !0, initial: "" })
        }),
        passive: new x({
          items: new Ce(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new x({
          items: new Ce(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new x({
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
const { BooleanField: Rt, NumberField: Jt, StringField: ve } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
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
function ft(R) {
  if (!R || !Array.isArray(R.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let r = !1;
  const d = (i, l = 1) => {
    if (!Array.isArray(i)) return;
    let a = l;
    for (const c of i) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, a);
        continue;
      }
      if (typeof c.operator == "string") {
        a = c.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof c.faces == "number" ? c.faces : void 0, h = Array.isArray(c.results) ? c.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const v = !r && a >= 0 && (c.number === 3 || c.number === "3") ? (r = !0, s) : a >= 0 ? e : t;
      for (const I of h) {
        if (!I || I.discarded || I.hidden) continue;
        const S = Number(I.result ?? I);
        Number.isFinite(S) && v.push(S);
      }
    }
  };
  d(R.terms, 1);
  const n = s.filter((i) => i === 6).length, o = s.filter((i) => i === 1).length, g = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, y = n + g, f = o + m;
  return y > 0 && y === f ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : f >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : f === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
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
  _getScrollContainers(s) {
    var r, d, n, o;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((o = s.querySelector) == null ? void 0 : o.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, n = this.form ?? this.element;
    let o = { scrollState: {}, focus: null };
    if (d) {
      o.scrollState = this._saveScrollState(d);
      const u = document.activeElement, h = n.contains(u), v = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && v && (o.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const g = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, y = this.form ?? this.element, f = o.scrollState, i = o.focus, l = typeof (f == null ? void 0 : f.formScrollTop) == "number" || typeof (f == null ? void 0 : f.windowScrollTop) == "number", a = () => {
      var u, h;
      if (this._applyScrollState(m, f), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const v = ((u = y.querySelector) == null ? void 0 : u.call(y, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (h = y.querySelector) == null ? void 0 : h.call(y, `[name="${CSS.escape(i.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = i.selectionStart ?? 0, v.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, f);
    };
    return (l || i) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const d = Math.floor(r / 3), n = Math.floor(2 * r / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var o;
        return n.type === "Pancel" && ((o = n.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const o = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(o);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var o;
        return n.type === "Pancel" && ((o = n.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const o = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(o);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var f, i, l, a, c, u, h, v, I;
    const e = s ?? this.form ?? this.element;
    let t = (f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((l = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : l.resources) ?? {}, d = ((c = (a = r.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : c.value) ?? 0, n = ((u = r.currentHealth) == null ? void 0 : u.legs) ?? 0, o = U._healthStatusFromRatio(n, d), g = Number(((I = (v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let m;
    o === 0 ? m = 0 : o === 1 ? m = -6 : o === 2 ? m = -3 : m = g;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, o, g, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, o, g, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((g = (o = t.hitLocations) == null ? void 0 : o[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var o, g, m, y;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((o = s == null ? void 0 : s.system) == null ? void 0 : o.resources) ?? {}, d = ((m = (g = r.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, n = ((y = r.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return U._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var Be, He, ze, Ge, We, Ye, Je, Qe, Xe, Ze, Ve, et, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ze = (He = (Be = this.actor.system) == null ? void 0 : Be.resources) == null ? void 0 : He.stress) == null ? void 0 : ze.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of o) {
      const O = ((Ge = d[p]) == null ? void 0 : Ge.value) ?? 0, T = n[p] ?? 0;
      e.computedHealthStatus[p] = U._healthStatusFromRatio(T, O);
    }
    const g = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((p) => (Number(n[p]) || 0) === 0).length;
    e.showDeathSkull = g || y >= 2;
    const f = e.computedHealthStatus.legs ?? 3, i = Number(((Ye = (We = this.actor.system) == null ? void 0 : We.combat) == null ? void 0 : Ye.givenSpeed) ?? 0) || 0;
    let l;
    f === 0 ? l = 0 : f === 1 ? l = -6 : f === 2 ? l = -3 : l = i;
    const a = this._getTotalArmorSpeedPenalty();
    l += a, e.effectiveGivenSpeed = l;
    const u = (Number(((Qe = (Je = this.actor.system) == null ? void 0 : Je.combat) == null ? void 0 : Qe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: u } },
      { inplace: !1 }
    );
    const h = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, O] of Object.entries(h)) {
      const T = e.computedHealthStatus[O];
      e.skillHealthStatus[p] = T, e.skillDisabled[p] = T === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const v = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (v.slotOrder ?? "").trim(), C = S ? S.split(/\s*,\s*/).filter((p) => I.includes(p)) : [], L = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, _ = L && typeof L == "object" && !Array.isArray(L) ? L : {}, k = (((Ze = _.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), q = (((Ve = _.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), A = (((et = _.slot3) == null ? void 0 : et.itemId) ?? "").trim(), B = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, O) => {
      const T = typeof p.sort == "number" ? p.sort : 0, D = typeof O.sort == "number" ? O.sort : 0;
      return T - D;
    }).map((p) => {
      var ce, he, be, de, me, Oe;
      const O = p.type === "Fegyver", T = p.type === "MikroChip";
      let D = 0, N = "", Y = null;
      for (let Ie = 0; Ie < C.length; Ie++) {
        const De = C[Ie];
        if ((((ce = v[De]) == null ? void 0 : ce.itemId) ?? "") === p.id) {
          D = Ie + 1, N = ((he = v[De]) == null ? void 0 : he.bonus) ?? "", Y = De;
          break;
        }
      }
      let W = null;
      T && (k === p.id ? W = "slot1" : q === p.id ? W = "slot2" : A === p.id && (W = "slot3"));
      const Te = O && ((be = p.system) != null && be.damage) ? p.system.damage : "", V = O && typeof ((de = p.system) == null ? void 0 : de.range) == "string" ? (p.system.range || "").trim() : "", ge = Y ? Number((me = v[Y]) == null ? void 0 : me.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: O,
        slotAssignment: D,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Te,
        rangeStr: V,
        slotBonusNum: ge,
        quantity: Number(((Oe = p.system) == null ? void 0 : Oe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = B;
    const H = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), ae = H.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = ae;
    const Q = "— Nincs fegyver —", pe = C.filter((p) => {
      const T = ((v[p] ?? {}).itemId ?? "").trim();
      return T ? !!H.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = pe.map((p, O) => {
      const T = v[p] ?? {}, D = (T.itemId ?? "").trim(), N = ae.find((Y) => Y.id === D);
      return {
        slotKey: p,
        itemId: D,
        slotNum: O + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const b = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, F = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = H.map((p) => {
      var ot, ct, lt;
      const O = p.id;
      let T = null, D = {};
      for (const Ae of C)
        if ((((ot = v[Ae]) == null ? void 0 : ot.itemId) ?? "").trim() === O) {
          T = Ae, D = v[Ae] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : N, W = (p == null ? void 0 : p.system) ?? {}, Te = typeof W.range == "string" ? (W.range || "").trim() : "", V = W.type ?? "", ge = (b[V] ?? V) || "—", ce = W.size ?? "", he = (F[ce] ?? ce) || "", be = [ge, he].filter(Boolean).join(", ") || ge || "—", de = V === "projectile" || ce === "thrown", me = W.quantity, Oe = me != null ? String(me).trim() : "1", Ie = String(D.bonus ?? "").trim(), De = String(W.bonus ?? "").trim(), Lt = Ie || De || "0";
      return {
        slotKey: T ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? Q,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: D.damage ?? W.damage ?? "",
        rangeStr: Te || "—",
        typeLabel: ge,
        typeAndSize: be,
        quantity: Oe,
        quantityDisplay: de ? Oe : "—",
        isProjectile: de,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const E = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = E.map((p) => {
      var D, N;
      const O = (p == null ? void 0 : p.system) ?? {}, T = ((D = p.system) == null ? void 0 : D.equipped) !== void 0 && ((N = p.system) == null ? void 0 : N.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const K = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = K.map((p) => {
      const O = (p == null ? void 0 : p.system) ?? {}, T = (O.description ?? "").trim(), D = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: N,
        description: D
      };
    });
    const fe = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = fe.map((p) => {
      const T = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), D = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: D
      };
    });
    const z = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), le = z.map((p) => ({ id: p.id, name: p.name, img: p.img })), oe = "— Nincs Mikro-Chip —", ue = ["slot1", "slot2", "slot3"], Z = (p) => {
      var T, D, N;
      const O = [];
      return p !== 1 && O.push((((T = _.slot1) == null ? void 0 : T.itemId) ?? "").trim()), p !== 2 && O.push((((D = _.slot2) == null ? void 0 : D.itemId) ?? "").trim()), p !== 3 && O.push((((N = _.slot3) == null ? void 0 : N.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = le.filter((p) => !Z(1).includes(p.id)), e.microchipItemsSlot2 = le.filter((p) => !Z(2).includes(p.id)), e.microchipItemsSlot3 = le.filter((p) => !Z(3).includes(p.id)), e.microchipSlots = ue.map((p) => {
      const O = _[p] ?? {}, T = (O.itemId ?? "").trim(), D = z.find((N) => N.id === T);
      return {
        slotKey: p,
        itemId: T,
        displayName: (D == null ? void 0 : D.name) || O.name || oe,
        img: (D == null ? void 0 : D.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const O = `slot${p}`, T = _[O] ?? {}, D = (T.itemId ?? "").trim(), N = le.find((Y) => Y.id === D);
      e[`microchip${p}ItemId`] = D, e[`microchip${p}DisplayName`] = (N == null ? void 0 : N.name) || T.name || oe, e[`microchip${p}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = z.map((p) => {
      var ce, he, be, de;
      const O = p.id;
      let T = null;
      for (const me of ue)
        if ((((ce = _[me]) == null ? void 0 : ce.itemId) ?? "").trim() === O) {
          T = me;
          break;
        }
      const D = !!T, N = ((he = p == null ? void 0 : p.system) == null ? void 0 : he.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", Te = Number((be = p == null ? void 0 : p.system) == null ? void 0 : be.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, V = (((de = p == null ? void 0 : p.system) == null ? void 0 : de.description) ?? "").trim(), ge = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: Y,
        description: ge,
        kp: Te,
        isActive: W,
        slotKey: T ?? "",
        equipped: D
      };
    });
    const ye = this.actor.system.abilities ?? {}, ke = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var O, T, D;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((O = p.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((T = p.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((D = p.system) == null ? void 0 : D.kp) ?? 0) || 0
      };
    }), _e = new Map(ke.map((p) => [p.id, p])), Pe = "— Nincs képesség —", qe = (p) => {
      const O = ye[p] ?? {}, T = (O.itemId ?? "").trim(), D = T ? _e.get(T) : null, N = (D == null ? void 0 : D.description) ?? "", Y = (D == null ? void 0 : D.kp) ?? 0;
      return {
        itemId: T,
        displayName: (D == null ? void 0 : D.name) || O.name || Pe,
        img: (D == null ? void 0 : D.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = qe("faji"), e.abilityHatterSlot = qe("hatter");
    const Se = (p) => {
      const O = ye[p];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, we = (p) => p.map((O) => {
      const T = _e.get(O);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = we(Se("passive")), e.abilityActiveList = we(Se("active")), e;
  }
  _attachFrameListeners(s) {
    var y, f;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-B-ibSZsm.mjs");
      c(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var c, u, h;
      i.preventDefault(), i.stopPropagation();
      const l = i.currentTarget;
      let a = (l.dataset.itemId ?? "").trim();
      if (!a) {
        const v = (l.dataset.slot ?? "").trim();
        if (!v) return;
        a = (((((u = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : u.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((h = l.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (i) => {
      var c;
      const l = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const a = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (f = e.querySelector) == null ? void 0 : f.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var c, u, h;
      i.preventDefault(), i.stopPropagation();
      const l = ((h = (u = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const l = i.currentTarget, a = l.dataset.skill, c = ((h = l.textContent) == null ? void 0 : h.trim()) || a, { openRollSheetForSkill: u } = await import("./roll-sheet-B-ibSZsm.mjs");
      u(this.actor, a, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, S, C, L, _, k, q;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), c = a == null ? void 0 : a.dataset.slot;
      if (!c) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[c]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((L = (C = this.actor.items).get) == null ? void 0 : L.call(C, h)) ?? ((k = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : k.call(_, (A) => A.id === h));
      (q = v == null ? void 0 : v.sheet) == null || q.render(!0);
    });
    const n = (i, l) => {
      var u;
      const a = i.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (u = c.sheet) == null || u.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const l = i.currentTarget, a = l.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c) return;
      let u = Number(l.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await c.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor, u = c.items.get(a), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = I ? I.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], L = C.find((_) => {
          var k;
          return (((k = v[_]) == null ? void 0 : k.itemId) ?? "").trim() === a;
        });
        if (L) {
          const _ = C.filter((k) => k !== L);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var L, _;
      const l = i.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], S = I.find((k) => {
        var q;
        return (((q = u[k]) == null ? void 0 : q.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let k = I.find((A) => {
          var j;
          return !((j = u[A]) != null && j.itemId);
        });
        const q = new Set(I);
        if (!k) {
          const A = v.find((j) => !q.has(j));
          if (!A) return;
          k = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${k}.itemId`]: a,
          [`system.weapons.${k}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${k}.damage`]: ((L = c == null ? void 0 : c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((_ = c == null ? void 0 : c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const k = I.filter((q) => q !== S);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const l = i.currentTarget;
      if (l.disabled) return;
      const a = l.closest(".karakter-microchip-slot-select-wrap"), c = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var k;
      i.preventDefault();
      const l = i.currentTarget, a = l.closest(".karakter-microchip-slot-select-wrap"), c = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), u = c == null ? void 0 : c.dataset.slot;
      if (!u) return;
      const h = (l.dataset.itemId ?? "").trim(), v = (l.dataset.itemName ?? ((k = l.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (l.dataset.itemImg ?? "").trim(), S = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let C = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      I ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", c == null || c.insertBefore(C, S)), C.src = I, C.style.display = "") : C && C.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, _ = {
        [`system.gear.microchips.${u}.itemId`]: h,
        [`system.gear.microchips.${u}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (_[`system.gear.microchips.${u}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a || a.type !== "MikroChip") return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = c[S]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const l = i.currentTarget.dataset.slot;
      if (!l) return;
      const a = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, l) => {
      const a = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, a));
    }), t.find(".karakter-ability-slot-single").each((i, l) => {
      const a = l.dataset.slot;
      a && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, l) => {
      const a = l.dataset.area;
      a && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, a)), l.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.area, a = i.currentTarget.dataset.itemId;
      if (!l || !a) return;
      const c = this.actor.system.abilities ?? {}, h = (Array.isArray((v = c[l]) == null ? void 0 : v.items) ? c[l].items.slice() : []).filter((I) => I !== a);
      await this.actor.update({ [`system.abilities.${l}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var u;
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(a) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const l = i.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = (l.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const l = i.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var L, _;
      const l = i.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], S = I.find((k) => {
        var q;
        return (((q = u[k]) == null ? void 0 : q.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (S) return;
        let k = I.find((A) => {
          var j;
          return !((j = u[A]) != null && j.itemId);
        });
        const q = new Set(I);
        if (!k) {
          const A = v.find((j) => !q.has(j));
          if (!A) return;
          k = A, I.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${k}.itemId`]: a,
          [`system.weapons.${k}.name`]: c.name ?? "",
          [`system.weapons.${k}.damage`]: ((L = c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((_ = c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const k = I.filter((q) => q !== S);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor, u = c.items.get(a), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = I ? I.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], L = C.find((_) => {
          var k;
          return (((k = v[_]) == null ? void 0 : k.itemId) ?? "").trim() === a;
        });
        if (L) {
          const _ = C.filter((k) => k !== L);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const l = i.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "Targy") return;
      const u = (l.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const o = this, g = (i) => {
      var c, u, h, v;
      if (!i) return;
      const l = o._getFormDataForUpdate(i);
      if (Object.keys(l).length === 0) return;
      const a = ((u = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : u.currentHealth) != null || ((v = (h = l.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      o.actor.update(l).then(() => {
        a && setTimeout(() => o.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, m = (i) => {
      var l, a, c;
      return i && (((a = (l = o.element) == null ? void 0 : l.contains) == null ? void 0 : a.call(l, i)) || o.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(o.id)}`)));
    };
    o._votvBlur = (i) => {
      var h;
      const l = i.target;
      if (!l || !l.form) return;
      const a = l.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const c = l.form;
      if (!m(c)) return;
      const u = i.relatedTarget;
      u && (c.contains(u) || o.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(o.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: o.id, at: Date.now() }), g(c));
    }, document.body.addEventListener("blur", o._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var o, g, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let f;
      y.type === "checkbox" ? f = y.checked : y.type === "number" ? f = y.value === "" ? 0 : Number(y.value) : f = y.value ?? "", foundry.utils.setProperty(e, y.name, f);
    }
    const t = foundry.utils.mergeObject(
      ((o = this.actor.system) == null ? void 0 : o.resources) ?? {},
      ((g = foundry.utils.expandObject(e).system) == null ? void 0 : g.resources) ?? {}
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const f = ((m = r[y]) == null ? void 0 : m.value) ?? 0, i = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, U._healthStatusFromRatio(i, f));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, r, d, n, o, g, m, y, f, i, l, a;
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
          let h = u.id;
          if (((r = u.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(u.toObject(), { type: "Kepesseg" });
            h = ((d = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : d.id) ?? h;
          }
          const v = (((n = u.system) == null ? void 0 : n.kind) ?? "passive").toString(), I = this.actor.system.abilities ?? {};
          if (v === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": h,
              "system.abilities.faji.name": u.name
            });
            return;
          }
          if (v === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": h,
              "system.abilities.hatter.name": u.name
            });
            return;
          }
          const S = v === "active" ? "active" : "passive", C = Array.isArray((o = I[S]) == null ? void 0 : o.items) ? I[S].items.slice() : Array.isArray(I[S]) ? I[S].slice() : [];
          C.includes(h) || C.push(h), await this.actor.update({ [`system.abilities.${S}.items`]: C });
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
          const h = this.actor, v = ((m = u.parent) == null ? void 0 : m.id) !== h.id;
          let I = u.id;
          if (v) {
            const S = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            I = ((y = (await h.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : y.id) ?? I;
          }
          if (v) {
            const S = ((f = h.system) == null ? void 0 : f.weapons) ?? {}, C = (S.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = C ? C.split(/\s*,\s*/).filter((q) => L.includes(q)) : [], k = _.filter((q) => {
              var A;
              return (((A = S[q]) == null ? void 0 : A.itemId) ?? "").trim() === I;
            });
            if (k.length > 0) {
              const A = {
                "system.weapons.slotOrder": _.filter((j) => !k.includes(j)).join(",")
              };
              for (const j of k)
                A[`system.weapons.${j}.itemId`] = "", A[`system.weapons.${j}.name`] = "", A[`system.weapons.${j}.damage`] = "", A[`system.weapons.${j}.bonus`] = "";
              await h.update(A);
            }
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "Pancel") {
          const h = this.actor;
          if (((i = u.parent) == null ? void 0 : i.id) !== h.id) {
            const v = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            await h.createEmbeddedDocuments("Item", [v]);
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "MikroChip") {
          const h = this.actor;
          ((l = u.parent) == null ? void 0 : l.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
        if (u && u.documentName === "Item" && (u.type === "Targy" || u.type === "Egyeb")) {
          const h = this.actor;
          ((a = u.parent) == null ? void 0 : a.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, n, o;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var o, g, m, y, f, i;
    s.preventDefault(), s.stopPropagation(), (o = s.currentTarget) == null || o.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((f = d.system) == null ? void 0 : f.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (r = s.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
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
    const d = this.actor.items.contents.slice().sort((f, i) => {
      const l = typeof f.sort == "number" ? f.sort : 0, a = typeof i.sort == "number" ? i.sort : 0;
      return l - a;
    }).map((f) => f.id), n = d.indexOf(t), o = d.indexOf(e);
    if (n === -1 || o === -1) return;
    d.splice(n, 1), d.splice(o, 0, t);
    const g = d.map((f, i) => ({
      _id: f,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(s) {
    var r, d, n;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const r = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, r)}px`;
  }
  async _postItemToChat(s) {
    var g, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let r, d = "";
    if (e.type === "MikroChip") {
      const f = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (r = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const i = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
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
  async _postAbilityToChat(s) {
    var y, f, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", r = Number(((f = e.system) == null ? void 0 : f.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", o = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${o}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var r, d;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, o, g;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((o = r.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var g, m, y, f;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((m = r.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, o = Array.isArray((f = n[e]) == null ? void 0 : f.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    o.includes(d) || o.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: o });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, o;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var o, g, m, y, f;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((f = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : f.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const r = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(r) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
    const g = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(g);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: f } = ft(m), i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: f } },
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
    const r = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(s) {
    var I;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, r = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((S) => S.id === t.itemId) ?? null);
    const o = n && n.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, y = (((I = n == null ? void 0 : n.system) == null ? void 0 : I.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", f = Number(r[y] || 0) || 0, i = g + f, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, c = new Roll(a);
    await c.evaluate({ async: !0 });
    const { resultType: u, label: h } = ft(c), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${o} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var g, m, y, f, i, l, a, c, u, h;
    const t = this.actor;
    if (!t) return;
    let r = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((f = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : f.call(y, (v) => v.id === s));
    if (!r || r.type !== "Fegyver") return;
    let d = (((i = r.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (h = (a = ui.notifications) == null ? void 0 : a.warn) == null || h.call(a, ((u = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : u.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
G(U, "PARTS", foundry.utils.mergeObject(
  M(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), G(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
G(U, "BODY_PART_BY_SKILL", {
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
let Ne = U;
var vt, kt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(s) {
    var j, B, H, ae, Q, pe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((j = this.actor) == null ? void 0 : j.system), e.showDeathSkull = !1;
    const t = this.actor, r = ((B = t == null ? void 0 : t.items) == null ? void 0 : B.contents) ?? [], d = ((H = t == null ? void 0 : t.system) == null ? void 0 : H.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], o = (d.slotOrder ?? "").trim(), g = o ? o.split(/\s*,\s*/).filter((b) => n.includes(b)) : [...n], m = r.filter((b) => b.type === "Fegyver"), y = m.map((b) => ({ id: b.id, name: b.name, img: b.img })), f = "— Nincs fegyver —", i = g.filter((b) => {
      var E;
      const F = (((E = d[b]) == null ? void 0 : E.itemId) ?? "").trim();
      return F && m.some((K) => K.id === F);
    });
    e.weaponSlots = i.map((b) => {
      const F = d[b] ?? {}, E = (F.itemId ?? "").trim(), K = y.find((fe) => fe.id === E);
      return {
        slotKey: b,
        itemId: E,
        displayName: (K == null ? void 0 : K.name) || F.name || f,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, a = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((b) => {
      var Se;
      const F = b.id;
      let E = null, K = {};
      for (const we of g)
        if ((((Se = d[we]) == null ? void 0 : Se.itemId) ?? "").trim() === F) {
          E = we, K = d[we] ?? {};
          break;
        }
      const fe = !!E, z = (b == null ? void 0 : b.system) ?? {}, le = typeof z.range == "string" ? (z.range || "").trim() : "", oe = z.type ?? "", ue = (l[oe] ?? oe) || "—", Z = z.size ?? "", ye = (a[Z] ?? Z) || "", ke = [ue, ye].filter(Boolean).join(", ") || ue || "—", _e = oe === "projectile" || Z === "thrown", Pe = z.quantity != null ? String(z.quantity).trim() : "1", qe = String(K.bonus ?? z.bonus ?? "").trim() || "0";
      return {
        slotKey: E ?? "",
        itemId: F,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? f,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: qe,
        damage: K.damage ?? z.damage ?? "",
        rangeStr: le || "—",
        typeAndSize: ke,
        quantity: Pe,
        isProjectile: _e,
        equipped: fe,
        special: (z.special ?? "").trim() || "—"
      };
    });
    const c = r.filter((b) => b.type === "Pancel");
    e.armorTable = c.map((b) => {
      var K;
      const F = (b == null ? void 0 : b.system) ?? {}, E = ((K = b.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: (F.level ?? "").toString().trim() || "—",
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const u = ((Q = (ae = t == null ? void 0 : t.system) == null ? void 0 : ae.gear) == null ? void 0 : Q.microchips) ?? {}, h = ["slot1", "slot2", "slot3"], v = r.filter((b) => b.type === "MikroChip");
    e.microchipsTable = v.map((b) => {
      var oe, ue, Z, ye;
      const F = b.id;
      let E = null;
      for (const ke of h)
        if ((((oe = u[ke]) == null ? void 0 : oe.itemId) ?? "").trim() === F) {
          E = ke;
          break;
        }
      const K = ((ue = b == null ? void 0 : b.system) == null ? void 0 : ue.abilityType) ?? "", fe = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", z = (((Z = b == null ? void 0 : b.system) == null ? void 0 : Z.description) ?? "").trim(), le = z ? z.length > 60 ? z.slice(0, 57) + "…" : z : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: fe,
        description: le,
        kp: Number((ye = b == null ? void 0 : b.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const I = r.filter((b) => b.type === "Targy");
    e.itemsTable = I.map((b) => {
      const F = (b == null ? void 0 : b.system) ?? {}, E = (F.description ?? "").trim(), K = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: K
      };
    });
    const S = r.filter((b) => b.type === "Egyeb");
    e.egyebList = S.map((b) => {
      const E = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), K = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: K
      };
    });
    const C = ((pe = t == null ? void 0 : t.system) == null ? void 0 : pe.abilities) ?? {}, L = r.filter((b) => b.type === "Kepesseg" || b.type === "ability").map((b) => {
      var F, E;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        description: ((F = b.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((E = b.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), _ = new Map(L.map((b) => [b.id, b])), k = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = k, e.abilityHatterSlot = k;
    const q = (b) => {
      const F = C[b];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, A = (b) => (b || []).map((F) => {
      const E = _.get(F);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = A(q("passive")), e.abilityActiveList = A(q("active")), e;
  }
  _attachFrameListeners(s) {
    var g, m, y;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.npc-sheet")) ?? s ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (f) => {
      var a, c, u;
      if (f.preventDefault(), f.stopPropagation(), !this.actor) return;
      const i = ((u = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (f) => {
      var a, c, u;
      f.preventDefault();
      const i = (c = (a = f.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (u = l == null ? void 0 : l.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (f) => {
      var l, a;
      f.preventDefault();
      const i = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-ability-pill-remove", async (f) => {
      var h, v, I, S, C, L;
      if (f.preventDefault(), !f.altKey) return;
      const i = (v = (h = f.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, l = (S = (I = f.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!i || !l || !this.actor) return;
      const a = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, u = (Array.isArray((L = a[i]) == null ? void 0 : L.items) ? a[i].items.slice() : []).filter((_) => _ !== l);
      await this.actor.update({ [`system.abilities.${i}.items`]: u }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (f) => {
      var l, a;
      if (f.preventDefault(), !f.altKey) return;
      const i = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    });
    const r = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (m = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : m.call(e, r)) == null || y.forEach((f) => {
      var i;
      (((i = f.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (f.draggable = !0);
    }), t.on("dragstart", r, (f) => {
      var u, h, v;
      const i = f.currentTarget, l = (h = (u = i == null ? void 0 : i.dataset) == null ? void 0 : u.itemId) == null ? void 0 : h.trim();
      if (!l || !this.actor) return;
      const a = this.actor.items.get(l);
      if (!a) return;
      const c = a.uuid;
      f.dataTransfer && (f.dataTransfer.setData("text/plain", c), f.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: c })), f.dataTransfer.effectAllowed = "copyMove"), typeof ((v = f.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && f.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, n = (f) => {
      if (!f) return;
      const i = d._getFormDataForUpdate(f);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, o = (f) => {
      var i, l, a;
      return f && (((l = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : l.call(i, f)) || d.id && ((a = f.closest) == null ? void 0 : a.call(f, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (f) => {
      var u;
      const i = f.target;
      if (!i || !i.form) return;
      const l = i.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const a = i.form;
      if (!o(a)) return;
      const c = f.relatedTarget;
      c && (a.contains(c) || d.id && ((u = c.closest) != null && u.call(c, `#${CSS.escape(d.id)}`))) || n(a);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0);
  }
  _tearDown(s) {
    var t, r, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((o) => console.warn("VoidNpcSheet save on close failed", o));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  async _onDropItem(s, e) {
    var y, f, i, l, a, c, u, h, v, I, S, C, L, _, k;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const r = ((q) => {
      var j;
      if (!q) return null;
      const A = q.uuid ?? q.documentUuid ?? ((j = q.data) == null ? void 0 : j.uuid) ?? (typeof q == "string" ? q : null);
      if (A) return A;
      if (typeof q == "object") {
        for (const B of Object.values(q))
          if (typeof B == "string" && B.includes(".") && B.startsWith("Item.")) return B;
      }
      return null;
    })(e);
    if (!r) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let q = d.id;
      if (((l = d.parent) == null ? void 0 : l.id) !== n.id) {
        const ae = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        q = ((a = (await n.createEmbeddedDocuments("Item", [ae]))[0]) == null ? void 0 : a.id) ?? q;
      }
      const A = (((c = d.system) == null ? void 0 : c.kind) ?? "passive").toString(), j = ((u = n.system) == null ? void 0 : u.abilities) ?? {}, B = A === "active" ? "active" : "passive", H = Array.isArray((h = j[B]) == null ? void 0 : h.items) ? j[B].items.slice() : Array.isArray(j[B]) ? j[B].slice() : [];
      H.includes(q) || H.push(q), await n.update({ [`system.abilities.${B}.items`]: H }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((v = d.parent) == null ? void 0 : v.id) === n.id) return;
    const o = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(o, { system: { ...o.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(o, { system: { ...o.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type;
    const m = (I = (await n.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : I.id;
    if (d.type === "Fegyver" && m) {
      const q = ((S = n.system) == null ? void 0 : S.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (q.slotOrder ?? "").trim(), B = j ? j.split(/\s*,\s*/).filter((Q) => A.includes(Q)) : [];
      let H = A.find((Q) => {
        var pe;
        return !(((pe = q[Q]) == null ? void 0 : pe.itemId) ?? "").trim();
      });
      H || (H = A.find((Q) => !B.includes(Q)) ?? "slot1");
      const ae = B.includes(H) ? B : [...B, H].filter((Q) => A.includes(Q));
      await n.update({
        "system.weapons.slotOrder": ae.join(","),
        [`system.weapons.${H}.itemId`]: m,
        [`system.weapons.${H}.name`]: d.name ?? "",
        [`system.weapons.${H}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${H}.bonus`]: ((L = d.system) == null ? void 0 : L.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const q = ((k = (_ = n.system) == null ? void 0 : _.gear) == null ? void 0 : k.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((B) => {
        var H;
        return !(((H = q[B]) == null ? void 0 : H.itemId) ?? "").trim();
      });
      j && await n.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, f, i, l, a;
    const e = (f = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : f.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", r = Number(((l = e.system) == null ? void 0 : l.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", o = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${o}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const r of s.elements) {
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
G(X, "PARTS", foundry.utils.mergeObject(
  M(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), G(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((vt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((kt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let $e = X;
var St;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
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
G(ee, "PARTS", foundry.utils.mergeObject(M(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), G(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = M(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let xe = ee;
var Tt;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(te, "PARTS", foundry.utils.mergeObject(M(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), G(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = M(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let je = te;
var Ot;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
G(se, "PARTS", foundry.utils.mergeObject(M(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), G(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = M(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Re = se;
var Dt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
    }, e._votvInput = (n) => {
      var m;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const g = (o == null ? void 0 : o.form) ?? ((m = o == null ? void 0 : o.closest) == null ? void 0 : m.call(o, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(g), 300));
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
G(ie, "PARTS", foundry.utils.mergeObject(M(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), G(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = M(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Me = ie;
var _t;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(re, "PARTS", foundry.utils.mergeObject(M(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), G(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((_t = M(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Ke = re;
var qt;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
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
      var m, y, f, i, l, a, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : i.call(f, "data-edit")) !== "img") return;
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
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (n) => {
      var o, g, m;
      return n && (((g = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : g.call(o, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const o = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(o) && r(o);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
G(ne, "PARTS", foundry.utils.mergeObject(M(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), G(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = M(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let Ue = ne;
const Ct = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, r, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Mt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const R = 500;
  Hooks.on("updateActor", (n, o, g, m) => {
    var I, S, C, L, _;
    const y = n == null ? void 0 : n.id;
    if (!y) return;
    const f = document.activeElement, i = f && (f.tagName === "INPUT" && f.type !== "checkbox" && f.type !== "radio" || f.tagName === "TEXTAREA" || f.isContentEditable), l = [], a = (I = game.actors) == null ? void 0 : I.get(y);
    a != null && a.apps && l.push(...Array.from(a.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of c)
      ((S = k.document) == null ? void 0 : S.id) !== y || ((C = k.document) == null ? void 0 : C.documentName) !== "Actor" || ((L = k.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || l.includes(k) || l.push(k);
    if (i && l.some((k) => {
      const q = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return q && q.contains(f);
    })) return;
    const h = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < R ? h.appId : null;
    setTimeout(() => {
      for (const k of l)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== v && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, o, g, m) => {
    var l, a, c;
    const y = n == null ? void 0 : n.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || n.type !== "Fegyver") return;
    const f = ((l = y.system) == null ? void 0 : l.weapons) ?? {}, i = {};
    for (const [u, h] of Object.entries(f)) {
      if (!u.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== n.id || (i[`system.weapons.${u}.name`] = n.name ?? "", i[`system.weapons.${u}.damage`] = ((a = n.system) == null ? void 0 : a.damage) ?? "", i[`system.weapons.${u}.bonus`] = ((c = n.system) == null ? void 0 : c.bonus) ?? "");
    }
    Object.keys(i).length && y.update(i);
  });
});
Hooks.on("ready", () => {
  var R, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, o, g, m, y, f;
      if (!((o = (n = e.target) == null ? void 0 : n.closest) != null && o.call(n, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), r = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((f = game.actors) != null && f.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (R = game.user) != null && R.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
Hooks.on("preCreateToken", (R, s, e) => {
  var n, o;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? R.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (o = game.actors) == null ? void 0 : o.get(r) : null;
  !d || d.type !== "Karakter" || R.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (R, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || R.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ct,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (R, s, e) => {
  var o, g;
  const t = ((o = R.flags) == null ? void 0 : o["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel;
  if (!r && !d) return;
  const n = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (n && (r && n.classList.add(`votv-${r}`), d)) {
    const m = n.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const y = n.querySelector(".dice-total"), f = (y == null ? void 0 : y.parentElement) ?? n, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, i.textContent = d, f.appendChild(i);
  }
});
export {
  Ne as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-DnVT92YD.mjs.map
