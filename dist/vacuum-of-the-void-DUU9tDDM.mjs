var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (R, s, e) => s in R ? Pt(R, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[s] = e;
var z = (R, s, e) => Et(R, typeof s != "symbol" ? s + "" : s, e);
var K = (R, s, e) => Ft(At(R), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: x, StringField: w, BooleanField: J, ArrayField: Fe } = foundry.data.fields;
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
        armor: new Fe(
          new x({
            name: new w({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new w({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new w({ required: !1, blank: !0, initial: "" }),
            level: new w({ required: !1, blank: !0, initial: "" }),
            other: new w({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Fe(
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
          items: new Fe(
            new w({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new x({
          items: new Fe(
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
const { NumberField: $e, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
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
const { BooleanField: Kt, StringField: Ee } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ee({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: xe, StringField: ut } = foundry.data.fields;
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
      cost: new xe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new xe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new xe({ required: !1, integer: !0, min: 0, initial: 1 })
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
  const d = (i, a = 1) => {
    if (!Array.isArray(i)) return;
    let o = a;
    for (const c of i) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof c.faces == "number" ? c.faces : void 0, h = Array.isArray(c.results) ? c.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const v = !r && o >= 0 && (c.number === 3 || c.number === "3") ? (r = !0, s) : o >= 0 ? e : t;
      for (const I of h) {
        if (!I || I.discarded || I.hidden) continue;
        const S = Number(I.result ?? I);
        Number.isFinite(S) && v.push(S);
      }
    }
  };
  d(R.terms, 1);
  const n = s.filter((i) => i === 6).length, l = s.filter((i) => i === 1).length, g = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, y = n + g, p = l + m;
  return y > 0 && y === p ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : p >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : p === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
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
    var r, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const u = document.activeElement, h = n.contains(u), v = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && v && (l.focus = {
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
    const m = this.element, y = this.form ?? this.element, p = l.scrollState, i = l.focus, a = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", o = () => {
      var u, h;
      if (this._applyScrollState(m, p), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const v = ((u = y.querySelector) == null ? void 0 : u.call(y, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (h = y.querySelector) == null ? void 0 : h.call(y, `[name="${CSS.escape(i.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = i.selectionStart ?? 0, v.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, p);
    };
    return (a || i) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), g;
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
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(l);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var l;
        return n.type === "Pancel" && ((l = n.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const l = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(l);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var p, i, a, o, c, u, h, v, I;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((a = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, d = ((c = (o = r.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, n = ((u = r.currentHealth) == null ? void 0 : u.legs) ?? 0, l = U._healthStatusFromRatio(n, d), g = Number(((I = (v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let m;
    l === 0 ? m = 0 : l === 1 ? m = -6 : l === 2 ? m = -3 : m = g;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, l, g, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, l, g, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((g = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var l, g, m, y;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((m = (g = r.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, n = ((y = r.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return U._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var Ae, Se, we, Ge, We, Ye, Je, Qe, Xe, Ze, Ve, et, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((we = (Se = (Ae = this.actor.system) == null ? void 0 : Ae.resources) == null ? void 0 : Se.stress) == null ? void 0 : we.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const f of l) {
      const O = ((Ge = d[f]) == null ? void 0 : Ge.value) ?? 0, T = n[f] ?? 0;
      e.computedHealthStatus[f] = U._healthStatusFromRatio(T, O);
    }
    const g = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((f) => (Number(n[f]) || 0) === 0).length;
    e.showDeathSkull = g || y >= 2;
    const p = e.computedHealthStatus.legs ?? 3, i = Number(((Ye = (We = this.actor.system) == null ? void 0 : We.combat) == null ? void 0 : Ye.givenSpeed) ?? 0) || 0;
    let a;
    p === 0 ? a = 0 : p === 1 ? a = -6 : p === 2 ? a = -3 : a = i;
    const o = this._getTotalArmorSpeedPenalty();
    a += o, e.effectiveGivenSpeed = a;
    const u = (Number(((Qe = (Je = this.actor.system) == null ? void 0 : Je.combat) == null ? void 0 : Qe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: a, givenProtection: u } },
      { inplace: !1 }
    );
    const h = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [f, O] of Object.entries(h)) {
      const T = e.computedHealthStatus[O];
      e.skillHealthStatus[f] = T, e.skillDisabled[f] = T === 0 ? " disabled" : "", e.skillHasHealthTint[f] = !0;
    }
    const v = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (v.slotOrder ?? "").trim(), D = S ? S.split(/\s*,\s*/).filter((f) => I.includes(f)) : [], L = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, q = L && typeof L == "object" && !Array.isArray(L) ? L : {}, k = (((Ze = q.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), C = (((Ve = q.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), F = (((et = q.slot3) == null ? void 0 : et.itemId) ?? "").trim(), B = this.actor.items.contents.filter((f) => f.type !== "Kepesseg" && f.type !== "ability").slice().sort((f, O) => {
      const T = typeof f.sort == "number" ? f.sort : 0, _ = typeof O.sort == "number" ? O.sort : 0;
      return T - _;
    }).map((f) => {
      var ce, he, be, ue, de, Oe;
      const O = f.type === "Fegyver", T = f.type === "MikroChip";
      let _ = 0, N = "", Y = null;
      for (let Ie = 0; Ie < D.length; Ie++) {
        const _e = D[Ie];
        if ((((ce = v[_e]) == null ? void 0 : ce.itemId) ?? "") === f.id) {
          _ = Ie + 1, N = ((he = v[_e]) == null ? void 0 : he.bonus) ?? "", Y = _e;
          break;
        }
      }
      let W = null;
      T && (k === f.id ? W = "slot1" : C === f.id ? W = "slot2" : F === f.id && (W = "slot3"));
      const Te = O && ((be = f.system) != null && be.damage) ? f.system.damage : "", Z = O && typeof ((ue = f.system) == null ? void 0 : ue.range) == "string" ? (f.system.range || "").trim() : "", ge = Y ? Number((de = v[Y]) == null ? void 0 : de.bonus) || 0 : "";
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        type: f.type,
        isWeapon: O,
        slotAssignment: _,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Te,
        rangeStr: Z,
        slotBonusNum: ge,
        quantity: Number(((Oe = f.system) == null ? void 0 : Oe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = B;
    const H = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((f) => f.type === "Fegyver"), ne = H.map((f) => ({ id: f.id, name: f.name, img: f.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", me = D.filter((f) => {
      const T = ((v[f] ?? {}).itemId ?? "").trim();
      return T ? !!H.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = me.map((f, O) => {
      const T = v[f] ?? {}, _ = (T.itemId ?? "").trim(), N = ne.find((Y) => Y.id === _);
      return {
        slotKey: f,
        itemId: _,
        slotNum: O + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const qe = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, De = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = H.map((f) => {
      var ot, ct, lt;
      const O = f.id;
      let T = null, _ = {};
      for (const Ne of D)
        if ((((ot = v[Ne]) == null ? void 0 : ot.itemId) ?? "").trim() === O) {
          T = Ne, _ = v[Ne] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = f.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = f.system) == null ? void 0 : lt.equipped) !== null ? !!f.system.equipped : N, W = (f == null ? void 0 : f.system) ?? {}, Te = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", ge = (qe[Z] ?? Z) || "—", ce = W.size ?? "", he = (De[ce] ?? ce) || "", be = [ge, he].filter(Boolean).join(", ") || ge || "—", ue = Z === "projectile" || ce === "thrown", de = W.quantity, Oe = de != null ? String(de).trim() : "1", Ie = String(_.bonus ?? "").trim(), _e = String(W.bonus ?? "").trim(), Lt = Ie || _e || "0";
      return {
        slotKey: T ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? Q,
        img: (f == null ? void 0 : f.img) ?? "",
        bonus: Lt,
        damage: _.damage ?? W.damage ?? "",
        rangeStr: Te || "—",
        typeLabel: ge,
        typeAndSize: be,
        quantity: Oe,
        quantityDisplay: ue ? Oe : "—",
        isProjectile: ue,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const Ce = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((f) => f.type === "Pancel");
    e.armorTable = Ce.map((f) => {
      var _, N;
      const O = (f == null ? void 0 : f.system) ?? {}, T = ((_ = f.system) == null ? void 0 : _.equipped) !== void 0 && ((N = f.system) == null ? void 0 : N.equipped) !== null ? !!f.system.equipped : !1;
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const b = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((f) => f.type === "Targy");
    e.itemsTable = b.map((f) => {
      const O = (f == null ? void 0 : f.system) ?? {}, T = (O.description ?? "").trim(), _ = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        quantity: N,
        description: _
      };
    });
    const E = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((f) => f.type === "Egyeb");
    e.egyebList = E.map((f) => {
      const T = (((f == null ? void 0 : f.system) ?? {}).description ?? "").trim(), _ = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        description: _
      };
    });
    const A = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((f) => f.type === "MikroChip"), M = A.map((f) => ({ id: f.id, name: f.name, img: f.img })), le = "— Nincs Mikro-Chip —", G = ["slot1", "slot2", "slot3"], pe = (f) => {
      var T, _, N;
      const O = [];
      return f !== 1 && O.push((((T = q.slot1) == null ? void 0 : T.itemId) ?? "").trim()), f !== 2 && O.push((((_ = q.slot2) == null ? void 0 : _.itemId) ?? "").trim()), f !== 3 && O.push((((N = q.slot3) == null ? void 0 : N.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = M.filter((f) => !pe(1).includes(f.id)), e.microchipItemsSlot2 = M.filter((f) => !pe(2).includes(f.id)), e.microchipItemsSlot3 = M.filter((f) => !pe(3).includes(f.id)), e.microchipSlots = G.map((f) => {
      const O = q[f] ?? {}, T = (O.itemId ?? "").trim(), _ = A.find((N) => N.id === T);
      return {
        slotKey: f,
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || le,
        img: (_ == null ? void 0 : _.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((f) => {
      const O = `slot${f}`, T = q[O] ?? {}, _ = (T.itemId ?? "").trim(), N = M.find((Y) => Y.id === _);
      e[`microchip${f}ItemId`] = _, e[`microchip${f}DisplayName`] = (N == null ? void 0 : N.name) || T.name || le, e[`microchip${f}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = A.map((f) => {
      var ce, he, be, ue;
      const O = f.id;
      let T = null;
      for (const de of G)
        if ((((ce = q[de]) == null ? void 0 : ce.itemId) ?? "").trim() === O) {
          T = de;
          break;
        }
      const _ = !!T, N = ((he = f == null ? void 0 : f.system) == null ? void 0 : he.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", Te = Number((be = f == null ? void 0 : f.system) == null ? void 0 : be.replaceCost) >= 0 ? Number(f.system.replaceCost) : 0, Z = (((ue = f == null ? void 0 : f.system) == null ? void 0 : ue.description) ?? "").trim(), ge = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        typeLabel: Y,
        description: ge,
        kp: Te,
        isActive: W,
        slotKey: T ?? "",
        equipped: _
      };
    });
    const ae = this.actor.system.abilities ?? {}, fe = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((f) => {
      var O, T, _;
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        kind: ((O = f.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((T = f.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((_ = f.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), oe = new Map(fe.map((f) => [f.id, f])), ke = "— Nincs képesség —", ye = (f) => {
      const O = ae[f] ?? {}, T = (O.itemId ?? "").trim(), _ = T ? oe.get(T) : null, N = (_ == null ? void 0 : _.description) ?? "", Y = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || ke,
        img: (_ == null ? void 0 : _.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = ye("faji"), e.abilityHatterSlot = ye("hatter");
    const Le = (f) => {
      const O = ae[f];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Pe = (f) => f.map((O) => {
      const T = oe.get(O);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Pe(Le("passive")), e.abilityActiveList = Pe(Le("active")), e;
  }
  _attachFrameListeners(s) {
    var y, p;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DXRJk9e2.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var c, u, h;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget;
      let o = (a.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (a.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((u = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : u.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = a.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (i) => {
      var c;
      const a = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const o = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (p = e.querySelector) == null ? void 0 : p.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var c, u, h;
      i.preventDefault(), i.stopPropagation();
      const a = ((h = (u = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const a = i.currentTarget, o = a.dataset.skill, c = ((h = a.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: u } = await import("./roll-sheet-DXRJk9e2.mjs");
      u(this.actor, o, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, S, D, L, q, k, C;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[c]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((L = (D = this.actor.items).get) == null ? void 0 : L.call(D, h)) ?? ((k = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : k.call(q, (F) => F.id === h));
      (C = v == null ? void 0 : v.sheet) == null || C.render(!0);
    });
    const n = (i, a) => {
      var u;
      const o = i.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
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
      const a = i.currentTarget, o = a.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      let u = Number(a.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await c.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, u = c.items.get(o), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((q) => S.includes(q)) : [], L = D.find((q) => {
          var k;
          return (((k = v[q]) == null ? void 0 : k.itemId) ?? "").trim() === o;
        });
        if (L) {
          const q = D.filter((k) => k !== L);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var L, q;
      const a = i.currentTarget, o = (a.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], S = I.find((k) => {
        var C;
        return (((C = u[k]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (a.checked) {
        if (S) return;
        let k = I.find((F) => {
          var j;
          return !((j = u[F]) != null && j.itemId);
        });
        const C = new Set(I);
        if (!k) {
          const F = v.find((j) => !C.has(j));
          if (!F) return;
          k = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${k}.itemId`]: o,
          [`system.weapons.${k}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${k}.damage`]: ((L = c == null ? void 0 : c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((q = c == null ? void 0 : c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const k = I.filter((C) => C !== S);
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
      const a = i.currentTarget;
      if (a.disabled) return;
      const o = a.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var k;
      i.preventDefault();
      const a = i.currentTarget, o = a.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), u = c == null ? void 0 : c.dataset.slot;
      if (!u) return;
      const h = (a.dataset.itemId ?? "").trim(), v = (a.dataset.itemName ?? ((k = a.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (a.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", c == null || c.insertBefore(D, S)), D.src = I, D.style.display = "") : D && D.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, q = {
        [`system.gear.microchips.${u}.itemId`]: h,
        [`system.gear.microchips.${u}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (q[`system.gear.microchips.${u}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o || o.type !== "MikroChip") return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var D;
        return (((D = c[S]) == null ? void 0 : D.itemId) ?? "").trim() === a;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const a = i.currentTarget.dataset.slot;
      if (!a) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${a}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, a) => {
      const o = a.dataset.slot;
      a.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, o)), a.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, o));
    }), t.find(".karakter-ability-slot-single").each((i, a) => {
      const o = a.dataset.slot;
      o && (a.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, o)), a.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, a) => {
      const o = a.dataset.area;
      o && (a.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, o)), a.addEventListener("dragleave", (c) => {
        var u;
        return (u = c.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (c) => {
        var u;
        (u = c.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!a || !o) return;
      const c = this.actor.system.abilities ?? {}, h = (Array.isArray((v = c[a]) == null ? void 0 : v.items) ? c[a].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${a}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var u;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(o) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const a = i.currentTarget, o = (a.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const u = (a.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const a = i.currentTarget, o = (a.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": a.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var L, q;
      const a = i.currentTarget, o = (a.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], S = I.find((k) => {
        var C;
        return (((C = u[k]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (a.checked) {
        if (S) return;
        let k = I.find((F) => {
          var j;
          return !((j = u[F]) != null && j.itemId);
        });
        const C = new Set(I);
        if (!k) {
          const F = v.find((j) => !C.has(j));
          if (!F) return;
          k = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${k}.itemId`]: o,
          [`system.weapons.${k}.name`]: c.name ?? "",
          [`system.weapons.${k}.damage`]: ((L = c.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((q = c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const k = I.filter((C) => C !== S);
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
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, u = c.items.get(o), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((q) => S.includes(q)) : [], L = D.find((q) => {
          var k;
          return (((k = v[q]) == null ? void 0 : k.itemId) ?? "").trim() === o;
        });
        if (L) {
          const q = D.filter((k) => k !== L);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const a = i.currentTarget, o = (a.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Targy") return;
      const u = (a.value ?? "").trim();
      await c.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    });
    const l = this, g = (i) => {
      var c, u, h, v;
      if (!i) return;
      const a = l._getFormDataForUpdate(i);
      if (Object.keys(a).length === 0) return;
      const o = ((u = (c = a.system) == null ? void 0 : c.resources) == null ? void 0 : u.currentHealth) != null || ((v = (h = a.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      l.actor.update(a).then(() => {
        o && setTimeout(() => l.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, m = (i) => {
      var a, o, c;
      return i && (((o = (a = l.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, i)) || l.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (i) => {
      var h;
      const a = i.target;
      if (!a || !a.form) return;
      const o = a.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = a.form;
      if (!m(c)) return;
      const u = i.relatedTarget;
      u && (c.contains(u) || l.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(l.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: l.id, at: Date.now() }), g(c));
    }, document.body.addEventListener("blur", l._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var l, g, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let p;
      y.type === "checkbox" ? p = y.checked : y.type === "number" ? p = y.value === "" ? 0 : Number(y.value) : p = y.value ?? "", foundry.utils.setProperty(e, y.name, p);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((g = foundry.utils.expandObject(e).system) == null ? void 0 : g.resources) ?? {}
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const p = ((m = r[y]) == null ? void 0 : m.value) ?? 0, i = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, U._healthStatusFromRatio(i, p));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, r, d, n, l, g, m, y, p, i, a, o;
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
          const S = v === "active" ? "active" : "passive", D = Array.isArray((l = I[S]) == null ? void 0 : l.items) ? I[S].items.slice() : Array.isArray(I[S]) ? I[S].slice() : [];
          D.includes(h) || D.push(h), await this.actor.update({ [`system.abilities.${S}.items`]: D });
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
            const S = ((p = h.system) == null ? void 0 : p.weapons) ?? {}, D = (S.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = D ? D.split(/\s*,\s*/).filter((C) => L.includes(C)) : [], k = q.filter((C) => {
              var F;
              return (((F = S[C]) == null ? void 0 : F.itemId) ?? "").trim() === I;
            });
            if (k.length > 0) {
              const F = {
                "system.weapons.slotOrder": q.filter((j) => !k.includes(j)).join(",")
              };
              for (const j of k)
                F[`system.weapons.${j}.itemId`] = "", F[`system.weapons.${j}.name`] = "", F[`system.weapons.${j}.damage`] = "", F[`system.weapons.${j}.bonus`] = "";
              await h.update(F);
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
          ((a = u.parent) == null ? void 0 : a.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
        if (u && u.documentName === "Item" && (u.type === "Targy" || u.type === "Egyeb")) {
          const h = this.actor;
          ((o = u.parent) == null ? void 0 : o.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var l, g, m, y, p, i;
    s.preventDefault(), s.stopPropagation(), (l = s.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
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
      const a = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [a]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((p = d.system) == null ? void 0 : p.damage) ?? "",
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
    const d = this.actor.items.contents.slice().sort((p, i) => {
      const a = typeof p.sort == "number" ? p.sort : 0, o = typeof i.sort == "number" ? i.sort : 0;
      return a - o;
    }).map((p) => p.id), n = d.indexOf(t), l = d.indexOf(e);
    if (n === -1 || l === -1) return;
    d.splice(n, 1), d.splice(l, 0, t);
    const g = d.map((p, i) => ({
      _id: p,
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
      const p = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (r = (p === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", p === "active") {
        const i = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
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
    var y, p, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", r = Number(((p = e.system) == null ? void 0 : p.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${l}
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
    var n, l, g;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((l = r.parent) == null ? void 0 : l.id) !== this.actor.id) {
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
    var g, m, y, p;
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
    const n = this.actor.system.abilities ?? {}, l = Array.isArray((p = n[e]) == null ? void 0 : p.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, l;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var l, g, m, y, p;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
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
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((p = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : p.id) ?? n), await this.actor.update({
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
    const { resultType: y, label: p } = ft(m), i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: p } },
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
    const l = n && n.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, y = (((I = n == null ? void 0 : n.system) == null ? void 0 : I.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", p = Number(r[y] || 0) || 0, i = g + p, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, c = new Roll(o);
    await c.evaluate({ async: !0 });
    const { resultType: u, label: h } = ft(c), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var g, m, y, p, i, a, o, c, u, h;
    const t = this.actor;
    if (!t) return;
    let r = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((p = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : p.call(y, (v) => v.id === s));
    if (!r || r.type !== "Fegyver") return;
    let d = (((i = r.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((a = t.system) == null ? void 0 : a.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((u = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : u.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
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
    form: foundry.utils.mergeObject(((yt = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
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
let je = U;
var vt, kt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var r, d, n, l;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((l = s.querySelector) == null ? void 0 : l.call(s, ".window-content")) ?? null;
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
    const t = this.element, r = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const a = document.activeElement, o = r.contains(a), c = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      o && c && (d.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), l = this.element, g = this.form ?? this.element, m = d.scrollState, y = d.focus, p = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var a, o;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const c = ((a = g.querySelector) == null ? void 0 : a.call(g, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (o = g.querySelector) == null ? void 0 : o.call(g, `[name="${CSS.escape(y.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = y.selectionStart ?? 0, c.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (p || y) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), n;
  }
  async _prepareContext(s) {
    var ne, Q, me, qe, De, Ce;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((ne = this.actor) == null ? void 0 : ne.system), e.showDeathSkull = !1;
    const t = this.actor, r = ((Q = t == null ? void 0 : t.items) == null ? void 0 : Q.contents) ?? [], d = ((me = t == null ? void 0 : t.system) == null ? void 0 : me.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), g = l ? l.split(/\s*,\s*/).filter((b) => n.includes(b)) : [], m = r.filter((b) => b.type === "Fegyver"), y = m.map((b) => ({ id: b.id, name: b.name, img: b.img })), p = "— Nincs fegyver —", i = g.length > 0 ? g : n, a = n.filter((b) => !i.includes(b)), o = [...i, ...a], c = o.filter((b) => {
      var A;
      const E = (((A = d[b]) == null ? void 0 : A.itemId) ?? "").trim();
      return E && m.some((M) => M.id === E);
    });
    e.weaponSlots = c.map((b) => {
      const E = d[b] ?? {}, A = (E.itemId ?? "").trim(), M = y.find((le) => le.id === A);
      return {
        slotKey: b,
        itemId: A,
        displayName: (M == null ? void 0 : M.name) || E.name || p,
        img: (M == null ? void 0 : M.img) || ""
      };
    });
    const u = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, h = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((b) => {
      var Se;
      const E = b.id;
      let A = null, M = {};
      for (const we of o)
        if ((((Se = d[we]) == null ? void 0 : Se.itemId) ?? "").trim() === E) {
          A = we, M = d[we] ?? {};
          break;
        }
      const le = !!A, G = (b == null ? void 0 : b.system) ?? {}, pe = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", fe = (u[ae] ?? ae) || "—", oe = G.size ?? "", ke = (h[oe] ?? oe) || "", ye = [fe, ke].filter(Boolean).join(", ") || fe || "—", Le = ae === "projectile" || oe === "thrown", Pe = G.quantity != null ? String(G.quantity).trim() : "1", Ae = String(M.bonus ?? G.bonus ?? "").trim() || "0";
      return {
        slotKey: A ?? "",
        itemId: E,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? p,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Ae,
        damage: M.damage ?? G.damage ?? "",
        rangeStr: pe || "—",
        typeAndSize: ye,
        quantity: Pe,
        isProjectile: Le,
        equipped: le,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const v = r.filter((b) => b.type === "Pancel");
    e.armorTable = v.map((b) => {
      var M;
      const E = (b == null ? void 0 : b.system) ?? {}, A = ((M = b.system) == null ? void 0 : M.equipped) === !0;
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: (E.level ?? "").toString().trim() || "—",
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: A
      };
    });
    const I = ((De = (qe = t == null ? void 0 : t.system) == null ? void 0 : qe.gear) == null ? void 0 : De.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], D = r.filter((b) => b.type === "MikroChip");
    e.microchipsTable = D.map((b) => {
      var ae, fe, oe, ke;
      const E = b.id;
      let A = null;
      for (const ye of S)
        if ((((ae = I[ye]) == null ? void 0 : ae.itemId) ?? "").trim() === E) {
          A = ye;
          break;
        }
      const M = ((fe = b == null ? void 0 : b.system) == null ? void 0 : fe.abilityType) ?? "", le = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", G = (((oe = b == null ? void 0 : b.system) == null ? void 0 : oe.description) ?? "").trim(), pe = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: le,
        description: pe,
        kp: Number((ke = b == null ? void 0 : b.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0,
        isActive: M === "active",
        slotKey: A ?? "",
        equipped: !!A
      };
    });
    const L = r.filter((b) => b.type === "Targy");
    e.itemsTable = L.map((b) => {
      const E = (b == null ? void 0 : b.system) ?? {}, A = (E.description ?? "").trim(), M = A ? A.length > 60 ? A.slice(0, 57) + "…" : A : "—";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: E.quantity != null ? String(E.quantity).trim() : "1",
        description: M
      };
    });
    const q = r.filter((b) => b.type === "Egyeb");
    e.egyebList = q.map((b) => {
      const A = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), M = A ? A.length > 80 ? A.slice(0, 77) + "…" : A : "";
      return {
        itemId: b.id,
        actorId: t.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: M
      };
    });
    const k = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, C = r.filter((b) => b.type === "Kepesseg" || b.type === "ability").map((b) => {
      var E, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        description: ((E = b.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), F = new Map(C.map((b) => [b.id, b])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = j, e.abilityHatterSlot = j;
    const B = (b) => {
      const E = k[b];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, H = (b) => (b || []).map((E) => {
      const A = F.get(E);
      return A ? { id: A.id, name: A.name, img: A.img, description: A.description, kp: A.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = H(B("passive")), e.abilityActiveList = H(B("active")), e;
  }
  _attachFrameListeners(s) {
    var g, m, y;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.npc-sheet")) ?? s ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (p) => {
      var o, c, u;
      if (p.preventDefault(), p.stopPropagation(), !this.actor) return;
      const i = ((u = (c = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (p) => {
      var o, c, u;
      p.preventDefault();
      const i = (c = (o = p.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      (u = a == null ? void 0 : a.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (p) => {
      var a, o;
      p.preventDefault();
      const i = (o = (a = p.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-ability-pill-remove", async (p) => {
      var h, v, I, S, D, L;
      if (p.preventDefault(), !p.altKey) return;
      const i = (v = (h = p.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, a = (S = (I = p.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!i || !a || !this.actor) return;
      const o = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, u = (Array.isArray((L = o[i]) == null ? void 0 : L.items) ? o[i].items.slice() : []).filter((q) => q !== a);
      await this.actor.update({ [`system.abilities.${i}.items`]: u }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (p) => {
      var a, o;
      if (p.preventDefault(), !p.altKey) return;
      const i = (o = (a = p.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    });
    const r = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (m = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : m.call(e, r)) == null || y.forEach((p) => {
      var i;
      (((i = p.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (p.draggable = !0);
    }), t.on("dragstart", r, (p) => {
      var u, h, v;
      const i = p.currentTarget, a = (h = (u = i == null ? void 0 : i.dataset) == null ? void 0 : u.itemId) == null ? void 0 : h.trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      if (!o) return;
      const c = o.uuid;
      p.dataTransfer && (p.dataTransfer.setData("text/plain", c), p.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: c })), p.dataTransfer.effectAllowed = "copyMove"), typeof ((v = p.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && p.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, n = (p) => {
      if (!p) return;
      const i = d._getFormDataForUpdate(p);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, l = (p) => {
      var i, a, o;
      return p && (((a = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : a.call(i, p)) || d.id && ((o = p.closest) == null ? void 0 : o.call(p, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (p) => {
      var u;
      const i = p.target;
      if (!i || !i.form) return;
      const a = i.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const o = i.form;
      if (!l(o)) return;
      const c = p.relatedTarget;
      c && (o.contains(c) || d.id && ((u = c.closest) != null && u.call(c, `#${CSS.escape(d.id)}`))) || n(o);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0);
  }
  _tearDown(s) {
    var t, r, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((l) => console.warn("VoidNpcSheet save on close failed", l));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  async _onDropItem(s, e) {
    var y, p, i, a, o, c, u, h, v, I, S, D, L, q, k;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const r = ((C) => {
      var j;
      if (!C) return null;
      const F = C.uuid ?? C.documentUuid ?? ((j = C.data) == null ? void 0 : j.uuid) ?? (typeof C == "string" ? C : null);
      if (F) return F;
      if (typeof C == "object") {
        for (const B of Object.values(C))
          if (typeof B == "string" && B.includes(".") && B.startsWith("Item.")) return B;
      }
      return null;
    })(e);
    if (!r) return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let C = d.id;
      if (((a = d.parent) == null ? void 0 : a.id) !== n.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        C = ((o = (await n.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : o.id) ?? C;
      }
      const F = (((c = d.system) == null ? void 0 : c.kind) ?? "passive").toString(), j = ((u = n.system) == null ? void 0 : u.abilities) ?? {}, B = F === "active" ? "active" : "passive", H = Array.isArray((h = j[B]) == null ? void 0 : h.items) ? j[B].items.slice() : Array.isArray(j[B]) ? j[B].slice() : [];
      H.includes(C) || H.push(C), await n.update({ [`system.abilities.${B}.items`]: H }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((v = d.parent) == null ? void 0 : v.id) === n.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (I = (await n.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : I.id;
    if (d.type === "Fegyver" && m) {
      const C = ((S = n.system) == null ? void 0 : S.weapons) ?? {}, F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (C.slotOrder ?? "").trim(), B = j ? j.split(/\s*,\s*/).filter((Q) => F.includes(Q)) : [];
      let H = F.find((Q) => {
        var me;
        return !(((me = C[Q]) == null ? void 0 : me.itemId) ?? "").trim();
      });
      H || (H = F.find((Q) => !B.includes(Q)) ?? "slot1");
      const ne = B.includes(H) ? B : [...B, H].filter((Q) => F.includes(Q));
      await n.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${H}.itemId`]: m,
        [`system.weapons.${H}.name`]: d.name ?? "",
        [`system.weapons.${H}.damage`]: ((D = d.system) == null ? void 0 : D.damage) ?? "",
        [`system.weapons.${H}.bonus`]: ((L = d.system) == null ? void 0 : L.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const C = ((k = (q = n.system) == null ? void 0 : q.gear) == null ? void 0 : k.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((B) => {
        var H;
        return !(((H = C[B]) == null ? void 0 : H.itemId) ?? "").trim();
      });
      j && await n.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, p, i, a, o;
    const e = (p = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", r = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${l}
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
z(X, "PARTS", foundry.utils.mergeObject(
  K(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((vt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((kt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Re = X;
var St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
z(V, "PARTS", foundry.utils.mergeObject(K(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = K(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Me = V;
var Tt;
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
z(ee, "PARTS", foundry.utils.mergeObject(K(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = K(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Ke = ee;
var Ot;
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
z(te, "PARTS", foundry.utils.mergeObject(K(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = K(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ue = te;
var _t;
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
    }, e._votvInput = (n) => {
      var m;
      const l = n.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const g = (l == null ? void 0 : l.form) ?? ((m = l == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
z(se, "PARTS", foundry.utils.mergeObject(K(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = K(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !0 })
}));
let Be = se;
var qt;
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
z(ie, "PARTS", foundry.utils.mergeObject(K(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = K(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let He = ie;
var Dt;
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
      var m, y, p, i, a, o, c;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (p = n.target) == null ? void 0 : p.getAttribute) == null ? void 0 : i.call(p, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((c = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const l = e._getFormDataForUpdate(n);
      Object.keys(l).length !== 0 && e.document.update(l).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (n) => {
      var l, g, m;
      return n && (((g = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : g.call(l, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, y;
      const l = ((g = n.target) == null ? void 0 : g.form) ?? ((y = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(l) && r(l);
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
z(re, "PARTS", foundry.utils.mergeObject(K(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Dt = K(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !1 })
}));
let ze = re;
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
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", je, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Re, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Me, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ke, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ue, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Be, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", He, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ze, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const R = 500;
  Hooks.on("updateActor", (n, l, g, m) => {
    var I, S, D, L, q;
    const y = n == null ? void 0 : n.id;
    if (!y) return;
    const p = document.activeElement, i = p && (p.tagName === "INPUT" && p.type !== "checkbox" && p.type !== "radio" || p.tagName === "TEXTAREA" || p.isContentEditable), a = [], o = (I = game.actors) == null ? void 0 : I.get(y);
    o != null && o.apps && a.push(...Array.from(o.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of c)
      ((S = k.document) == null ? void 0 : S.id) !== y || ((D = k.document) == null ? void 0 : D.documentName) !== "Actor" || ((L = k.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || a.includes(k) || a.push(k);
    if (i && a.some((k) => {
      const C = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return C && C.contains(p);
    })) return;
    const h = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < R ? h.appId : null;
    setTimeout(() => {
      for (const k of a)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== v && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, l, g, m) => {
    var a, o, c;
    const y = n == null ? void 0 : n.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || n.type !== "Fegyver") return;
    const p = ((a = y.system) == null ? void 0 : a.weapons) ?? {}, i = {};
    for (const [u, h] of Object.entries(p)) {
      if (!u.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== n.id || (i[`system.weapons.${u}.name`] = n.name ?? "", i[`system.weapons.${u}.damage`] = ((o = n.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${u}.bonus`] = ((c = n.system) == null ? void 0 : c.bonus) ?? "");
    }
    Object.keys(i).length && y.update(i);
  });
});
Hooks.on("ready", () => {
  var R, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, l, g, m, y, p;
      if (!((l = (n = e.target) == null ? void 0 : n.closest) != null && l.call(n, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), r = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((p = game.actors) != null && p.get(d)) && (game.votv._dragSourceActorId = d);
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
  var n, l;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? R.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (l = game.actors) == null ? void 0 : l.get(r) : null;
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
  var l, g;
  const t = ((l = R.flags) == null ? void 0 : l["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel;
  if (!r && !d) return;
  const n = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (n && (r && n.classList.add(`votv-${r}`), d)) {
    const m = n.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const y = n.querySelector(".dice-total"), p = (y == null ? void 0 : y.parentElement) ?? n, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, i.textContent = d, p.appendChild(i);
  }
});
export {
  je as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-DUU9tDDM.mjs.map
