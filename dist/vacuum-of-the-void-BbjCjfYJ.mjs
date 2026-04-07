var Pt = Object.defineProperty;
var Et = Object.getPrototypeOf;
var At = Reflect.get;
var Ft = (A, s, e) => s in A ? Pt(A, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[s] = e;
var z = (A, s, e) => Ft(A, typeof s != "symbol" ? s + "" : s, e);
var U = (A, s, e) => At(Et(A), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: R, StringField: S, BooleanField: Q, ArrayField: He } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new R({
        name: new S({ required: !1, blank: !0, initial: "" }),
        player: new S({ required: !1, blank: !0, initial: "" }),
        level: new P({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new S({ required: !1, blank: !0, initial: "" }),
        assignment: new S({ required: !1, blank: !0, initial: "" }),
        subAssignment: new S({ required: !1, blank: !0, initial: "" }),
        background: new S({ required: !1, blank: !0, initial: "" }),
        languages: new S({ required: !1, blank: !0, initial: "" })
      }),
      resources: new R({
        health: new R({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new R({
          head: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          torso: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          arms: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          legs: new R({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
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
        quickThinking1: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new S({ required: !1, blank: !0, initial: "" }),
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
            quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 }),
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
const { BooleanField: Rt, NumberField: Jt, StringField: Le } = foundry.data.fields;
class jt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Rt({ required: !1, initial: !1 }),
      type: new Le({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Le({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Le({ required: !1, blank: !0, initial: "" }),
      damage: new Le({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Le({ required: !1, blank: !0, initial: "" }),
      special: new Le({ required: !1, blank: !0, initial: "" }),
      quantity: new Le({ required: !1, blank: !0, initial: "1" })
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
function ft(A) {
  if (!A || !Array.isArray(A.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let o = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let n = r;
    for (const a of i) {
      if (!a) continue;
      if (Array.isArray(a.terms)) {
        d(a.terms, n);
        continue;
      }
      if (typeof a.operator == "string") {
        n = a.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof a.faces == "number" ? a.faces : void 0, p = Array.isArray(a.results) ? a.results : null;
      if (!l || !p || l === 8 || l !== 6) continue;
      const b = !o && n >= 0 && (a.number === 3 || a.number === "3") ? (o = !0, s) : n >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  d(A.terms, 1);
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
    var a;
    const t = (a = game.votv) == null ? void 0 : a._lastKarakterSheetBlurSave;
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
    const y = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, g = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", n = () => {
      var l, p;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = g.querySelector) == null ? void 0 : l.call(g, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (p = g.querySelector) == null ? void 0 : p.call(g, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(n), setTimeout(n, 0), setTimeout(n, 50), setTimeout(n, 150), setTimeout(n, 300), setTimeout(n, 450)), y;
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
    var h, i, r, n, a, l, p, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const o = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((a = (n = o.hitLocations) == null ? void 0 : n.legs) == null ? void 0 : a.value) ?? 0, c = ((l = o.currentHealth) == null ? void 0 : l.legs) ?? 0, u = B._healthStatusFromRatio(c, d), y = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
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
    var Pe, me, be, pe, _e, De, Me, Re, je, Ke, Fe, Ee, tt, st, it, rt, at, nt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((be = (me = (Pe = this.actor.system) == null ? void 0 : Pe.resources) == null ? void 0 : me.stress) == null ? void 0 : be.value) || 0;
    e.stressOver10 = t > 10;
    const o = this.actor.system.resources ?? {}, d = o.hitLocations ?? {}, c = o.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const f of u) {
      const C = ((pe = d[f]) == null ? void 0 : pe.value) ?? 0, D = c[f] ?? 0;
      e.computedHealthStatus[f] = B._healthStatusFromRatio(D, C);
    }
    const y = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((f) => (Number(c[f]) || 0) === 0).length;
    e.showDeathSkull = y || g >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((De = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : De.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const n = this._getTotalArmorSpeedPenalty();
    r += n, e.effectiveGivenSpeed = r;
    const l = (Number(((Re = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : Re.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: l } },
      { inplace: !1 }
    );
    const p = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [f, C] of Object.entries(p)) {
      const D = e.computedHealthStatus[C];
      e.skillHealthStatus[f] = D, e.skillDisabled[f] = D === 0 ? " disabled" : "", e.skillHasHealthTint[f] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), _ = I ? I.split(/\s*,\s*/).filter((f) => v.includes(f)) : [], q = (je = this.actor.system.gear) == null ? void 0 : je.microchips, O = q && typeof q == "object" && !Array.isArray(q) ? q : {}, T = (((Ke = O.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), w = (((Fe = O.slot2) == null ? void 0 : Fe.itemId) ?? "").trim(), E = (((Ee = O.slot3) == null ? void 0 : Ee.itemId) ?? "").trim(), j = this.actor.items.contents.filter((f) => f.type !== "Kepesseg" && f.type !== "ability").slice().sort((f, C) => {
      const D = typeof f.sort == "number" ? f.sort : 0, L = typeof C.sort == "number" ? C.sort : 0;
      return D - L;
    }).map((f) => {
      var fe, Ce, qe, ke, ve, $e;
      const C = f.type === "Fegyver", D = f.type === "MikroChip";
      let L = 0, M = "", J = null;
      for (let Ae = 0; Ae < _.length; Ae++) {
        const xe = _[Ae];
        if ((((fe = b[xe]) == null ? void 0 : fe.itemId) ?? "") === f.id) {
          L = Ae + 1, M = ((Ce = b[xe]) == null ? void 0 : Ce.bonus) ?? "", J = xe;
          break;
        }
      }
      let Y = null;
      D && (T === f.id ? Y = "slot1" : w === f.id ? Y = "slot2" : E === f.id && (Y = "slot3"));
      const Ne = C && ((qe = f.system) != null && qe.damage) ? f.system.damage : "", se = C && typeof ((ke = f.system) == null ? void 0 : ke.range) == "string" ? (f.system.range || "").trim() : "", Oe = J ? Number((ve = b[J]) == null ? void 0 : ve.bonus) || 0 : "";
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        type: f.type,
        isWeapon: C,
        slotAssignment: L,
        slotBonus: M,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Ne,
        rangeStr: se,
        slotBonusNum: Oe,
        quantity: Number((($e = f.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = j;
    const K = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((f) => f.type === "Fegyver"), Z = K.map((f) => ({ id: f.id, name: f.name, img: f.img }));
    e.weaponItems = Z;
    const W = "— Nincs fegyver —", ee = _.filter((f) => {
      const D = ((b[f] ?? {}).itemId ?? "").trim();
      return D ? !!K.find((M) => M.id === D) : !1;
    });
    e.weaponSlots = ee.map((f, C) => {
      const D = b[f] ?? {}, L = (D.itemId ?? "").trim(), M = Z.find((J) => J.id === L);
      return {
        slotKey: f,
        itemId: L,
        slotNum: C + 1,
        displayName: (M == null ? void 0 : M.name) || D.name || W,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const we = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ie = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = K.map((f) => {
      var ot, ct, lt;
      const C = f.id;
      let D = null, L = {};
      for (const Be of _)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === C) {
          D = Be, L = b[Be] ?? {};
          break;
        }
      const M = !!D, J = ((ct = f.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = f.system) == null ? void 0 : lt.equipped) !== null ? !!f.system.equipped : M, Y = (f == null ? void 0 : f.system) ?? {}, Ne = typeof Y.range == "string" ? (Y.range || "").trim() : "", se = Y.type ?? "", Oe = (we[se] ?? se) || "—", fe = Y.size ?? "", Ce = (Ie[fe] ?? fe) || "", qe = [Oe, Ce].filter(Boolean).join(", ") || Oe || "—", ke = se === "projectile" || fe === "thrown", ve = Y.quantity, $e = ve != null ? String(ve).trim() : "1", Ae = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Lt = Ae || xe || "0";
      return {
        slotKey: D ?? "",
        itemId: C,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? W,
        img: (f == null ? void 0 : f.img) ?? "",
        bonus: Lt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Ne || "—",
        typeLabel: Oe,
        typeAndSize: qe,
        quantity: $e,
        quantityDisplay: ke ? $e : "—",
        isProjectile: ke,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const Se = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((f) => f.type === "Pancel");
    e.armorTable = Se.map((f) => {
      var L, M;
      const C = (f == null ? void 0 : f.system) ?? {}, D = ((L = f.system) == null ? void 0 : L.equipped) !== void 0 && ((M = f.system) == null ? void 0 : M.equipped) !== null ? !!f.system.equipped : !1;
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        protectionBonus: (C.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (C.speedPenalty ?? "").toString().trim() || "—",
        level: (C.level ?? "").toString().trim() || "—",
        special: (C.special ?? C.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const le = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((f) => f.type === "Targy");
    e.itemsTable = le.map((f) => {
      const C = (f == null ? void 0 : f.system) ?? {}, D = (C.description ?? "").trim(), L = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", M = C.quantity != null ? String(C.quantity).trim() : "1";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        quantity: M,
        description: L
      };
    });
    const Te = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((f) => f.type === "Egyeb");
    e.egyebList = Te.map((f) => {
      const D = (((f == null ? void 0 : f.system) ?? {}).description ?? "").trim(), L = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        description: L
      };
    });
    const ue = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((f) => f.type === "MikroChip"), V = ue.map((f) => ({ id: f.id, name: f.name, img: f.img })), ye = "— Nincs Mikro-Chip —", ge = ["slot1", "slot2", "slot3"], de = (f) => {
      var D, L, M;
      const C = [];
      return f !== 1 && C.push((((D = O.slot1) == null ? void 0 : D.itemId) ?? "").trim()), f !== 2 && C.push((((L = O.slot2) == null ? void 0 : L.itemId) ?? "").trim()), f !== 3 && C.push((((M = O.slot3) == null ? void 0 : M.itemId) ?? "").trim()), C.filter(Boolean);
    };
    e.microchipItemsSlot1 = V.filter((f) => !de(1).includes(f.id)), e.microchipItemsSlot2 = V.filter((f) => !de(2).includes(f.id)), e.microchipItemsSlot3 = V.filter((f) => !de(3).includes(f.id)), e.microchipSlots = ge.map((f) => {
      const C = O[f] ?? {}, D = (C.itemId ?? "").trim(), L = ue.find((M) => M.id === D);
      return {
        slotKey: f,
        itemId: D,
        displayName: (L == null ? void 0 : L.name) || C.name || ye,
        img: (L == null ? void 0 : L.img) || "",
        active: C.active === !0
      };
    }), ["1", "2", "3"].forEach((f) => {
      const C = `slot${f}`, D = O[C] ?? {}, L = (D.itemId ?? "").trim(), M = V.find((J) => J.id === L);
      e[`microchip${f}ItemId`] = L, e[`microchip${f}DisplayName`] = (M == null ? void 0 : M.name) || D.name || ye, e[`microchip${f}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = ue.map((f) => {
      var fe, Ce, qe, ke;
      const C = f.id;
      let D = null;
      for (const ve of ge)
        if ((((fe = O[ve]) == null ? void 0 : fe.itemId) ?? "").trim() === C) {
          D = ve;
          break;
        }
      const L = !!D, M = ((Ce = f == null ? void 0 : f.system) == null ? void 0 : Ce.abilityType) ?? "", J = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Ne = Number((qe = f == null ? void 0 : f.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(f.system.replaceCost) : 0, se = (((ke = f == null ? void 0 : f.system) == null ? void 0 : ke.description) ?? "").trim(), Oe = se ? se.length > 60 ? se.slice(0, 57) + "…" : se : "—";
      return {
        itemId: C,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        typeLabel: J,
        description: Oe,
        kp: Ne,
        isActive: Y,
        slotKey: D ?? "",
        equipped: L
      };
    });
    const te = this.actor.system.abilities ?? {}, k = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).map((f) => {
      var C, D, L;
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        kind: ((C = f.system) == null ? void 0 : C.kind) ?? "passive",
        description: ((D = f.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((L = f.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), N = new Map(k.map((f) => [f.id, f])), x = "— Nincs képesség —", H = (f) => {
      const C = te[f] ?? {}, D = (C.itemId ?? "").trim(), L = D ? N.get(D) : null, M = (L == null ? void 0 : L.description) ?? "", J = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: D,
        displayName: (L == null ? void 0 : L.name) || C.name || x,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: J
      };
    };
    e.abilityFajiSlot = H("faji"), e.abilityHatterSlot = H("hatter");
    const he = (f) => {
      const C = te[f];
      return C ? Array.isArray(C == null ? void 0 : C.items) ? C.items : Array.isArray(C) ? C : [] : [];
    }, G = (f) => f.map((C) => {
      const D = N.get(C);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = G(he("passive")), e.abilityActiveList = G(he("active")), e;
  }
  _attachFrameListeners(s) {
    var g, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const n = (i.currentTarget.dataset.slot ?? "").trim();
      if (!n) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DCrXpVLL.mjs");
      a(this.actor, n);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let n = (r.dataset.itemId ?? "").trim();
      if (!n) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        n = (((((l = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      n && await this._rollWeaponDamage(n, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const o = (i) => {
      var a;
      const r = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const n = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", n > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', o);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && o({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var a, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = ((p = (l = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
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
      const r = i.currentTarget, n = r.dataset.skill, a = ((p = r.textContent) == null ? void 0 : p.trim()) || n, { openRollSheetForSkill: l } = await import("./roll-sheet-DCrXpVLL.mjs");
      l(this.actor, n, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, I, _, q, O, T, w;
      i.preventDefault();
      const n = i.currentTarget.closest(".karakter-weapon-slot"), a = n == null ? void 0 : n.dataset.slot;
      if (!a) return;
      const p = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[a]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!p) return;
      const b = ((q = (_ = this.actor.items).get) == null ? void 0 : q.call(_, p)) ?? ((T = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : T.call(O, (E) => E.id === p));
      (w = b == null ? void 0 : b.sheet) == null || w.render(!0);
    });
    const c = (i, r) => {
      var l;
      const n = i.dataset.itemId;
      if (!n) return;
      const a = this.actor.items.get(n);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = i.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (l = a.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, n = r.dataset.itemId;
      if (!n) return;
      const a = this.actor.items.get(n);
      if (!a) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await a.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const n = i.currentTarget.dataset.itemId;
      if (!n) return;
      const a = this.actor, l = a.items.get(n), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = a.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = v ? v.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = _.find((O) => {
          var T;
          return (((T = b[O]) == null ? void 0 : T.itemId) ?? "").trim() === n;
        });
        if (q) {
          const O = _.filter((T) => T !== q);
          p["system.weapons.slotOrder"] = O.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await a.update(p), await a.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, O;
      const r = i.currentTarget, n = (r.dataset.itemId ?? "").trim();
      if (!n) return;
      const a = this.actor.items.get(n);
      if (!a || a.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var w;
        return (((w = l[T]) == null ? void 0 : w.itemId) ?? "").trim() === n;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((E) => {
          var F;
          return !((F = l[E]) != null && F.itemId);
        });
        const w = new Set(v);
        if (!T) {
          const E = b.find((F) => !w.has(F));
          if (!E) return;
          T = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: n,
          [`system.weapons.${T}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${T}.damage`]: ((q = a == null ? void 0 : a.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((O = a == null ? void 0 : a.system) == null ? void 0 : O.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (I) {
        const T = v.filter((w) => w !== I);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const n = r.closest(".karakter-microchip-slot-select-wrap"), a = n == null ? void 0 : n.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && n && n.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const r = i.currentTarget, n = r.closest(".karakter-microchip-slot-select-wrap"), a = n == null ? void 0 : n.querySelector(".karakter-microchip-slot-display"), l = a == null ? void 0 : a.dataset.slot;
      if (!l) return;
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((T = r.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), I = n == null ? void 0 : n.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let _ = n == null ? void 0 : n.querySelector(".karakter-microchip-slot-thumb");
      v ? (_ || (_ = document.createElement("img"), _.className = "karakter-microchip-slot-thumb", _.alt = "", a == null || a.insertBefore(_, I)), _.src = v, _.style.display = "") : _ && _.remove(), n == null || n.classList.remove("karakter-microchip-slot-open");
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
      const n = this.actor.items.get(r);
      if (!n || n.type !== "MikroChip") return;
      const a = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((I) => {
        var _;
        return (((_ = a[I]) == null ? void 0 : _.itemId) ?? "").trim() === r;
      });
      p && await this.actor.update({
        [`system.gear.microchips.${p}.itemId`]: "",
        [`system.gear.microchips.${p}.name`]: "",
        [`system.gear.microchips.${p}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const n = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: n }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const n = r.dataset.slot;
      r.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, n)), r.addEventListener("dragleave", (a) => {
        var l;
        return (l = a.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, n));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const n = r.dataset.slot;
      n && (r.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, n)), r.addEventListener("dragleave", (a) => {
        var l;
        return (l = a.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (a) => {
        var l;
        (l = a.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const n = r.dataset.area;
      n && (r.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, n)), r.addEventListener("dragleave", (a) => {
        var l;
        return (l = a.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (a) => {
        var l;
        (l = a.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
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
      const r = i.currentTarget.dataset.area, n = i.currentTarget.dataset.itemId;
      if (!r || !n) return;
      const a = this.actor.system.abilities ?? {}, p = (Array.isArray((b = a[r]) == null ? void 0 : b.items) ? a[r].items.slice() : []).filter((v) => v !== n);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var l;
      i.preventDefault();
      const n = i.currentTarget.dataset.itemId;
      if (!n) return;
      const a = this.actor.items.get(n);
      (l = a == null ? void 0 : a.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const n = i.currentTarget.dataset.itemId;
      n && await this._postAbilityToChat(n);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const n = i.currentTarget.dataset.itemId;
      if (!n) return;
      const a = this.actor.items.get(n);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(n) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(n));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, n = (r.dataset.itemId ?? "").trim();
      if (!n) return;
      const a = this.actor.items.get(n);
      if (!a || a.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await a.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${n}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, n = (r.dataset.itemId ?? "").trim();
      if (!n) return;
      const a = this.actor.items.get(n);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, O;
      const r = i.currentTarget, n = (r.dataset.itemId ?? "").trim();
      if (!n) return;
      const a = this.actor.items.get(n);
      if (!a || a.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], I = v.find((T) => {
        var w;
        return (((w = l[T]) == null ? void 0 : w.itemId) ?? "").trim() === n;
      }) ?? null;
      if (r.checked) {
        if (I) return;
        let T = v.find((E) => {
          var F;
          return !((F = l[E]) != null && F.itemId);
        });
        const w = new Set(v);
        if (!T) {
          const E = b.find((F) => !w.has(F));
          if (!E) return;
          T = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: n,
          [`system.weapons.${T}.name`]: a.name ?? "",
          [`system.weapons.${T}.damage`]: ((q = a.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((O = a.system) == null ? void 0 : O.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (I) {
        const T = v.filter((w) => w !== I);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const n = i.currentTarget.dataset.itemId;
      if (!n) return;
      const a = this.actor, l = a.items.get(n), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = a.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = v ? v.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = _.find((O) => {
          var T;
          return (((T = b[O]) == null ? void 0 : T.itemId) ?? "").trim() === n;
        });
        if (q) {
          const O = _.filter((T) => T !== q);
          p["system.weapons.slotOrder"] = O.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await a.update(p), await a.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const n = this.actor.items.get(r);
      !n || n.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, n = (r.dataset.itemId ?? "").trim();
      if (!n) return;
      const a = this.actor.items.get(n);
      if (!a || a.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await a.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${n}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const n = this.actor.items.get(r);
      !n || n.type !== "Targy" && n.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, y = (i) => {
      var a, l, p, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const n = ((l = (a = r.system) == null ? void 0 : a.resources) == null ? void 0 : l.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        n && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, n, a;
      return i && (((n = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : n.call(r, i)) || u.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const n = r.tagName;
      if (n !== "INPUT" && n !== "TEXTAREA" && n !== "SELECT") return;
      const a = r.form;
      if (!m(a)) return;
      const l = i.relatedTarget;
      l && (a.contains(l) || u.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), y(a));
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
    var t, o, d, c, u, y, m, g, h, i, r, n;
    if (e) {
      let a = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!a && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            a = l;
            break;
          }
      }
      if (a) {
        const l = await fromUuid(a);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let p = l.id;
          if (((o = l.parent) == null ? void 0 : o.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
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
          const I = b === "active" ? "active" : "passive", _ = Array.isArray((u = v[I]) == null ? void 0 : u.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          _.includes(p) || _.push(p), await this.actor.update({ [`system.abilities.${I}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let a = e.uuid ?? e.documentUuid ?? ((y = e.data) == null ? void 0 : y.uuid) ?? (typeof e == "string" ? e : null);
      if (!a && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            a = l;
            break;
          }
      }
      if (a) {
        const l = await fromUuid(a);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const p = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== p.id;
          let v = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await p.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (b) {
            const I = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = _ ? _.split(/\s*,\s*/).filter((w) => q.includes(w)) : [], T = O.filter((w) => {
              var E;
              return (((E = I[w]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (T.length > 0) {
              const E = {
                "system.weapons.slotOrder": O.filter((F) => !T.includes(F)).join(",")
              };
              for (const F of T)
                E[`system.weapons.${F}.itemId`] = "", E[`system.weapons.${F}.name`] = "", E[`system.weapons.${F}.damage`] = "", E[`system.weapons.${F}.bonus`] = "";
              await p.update(E);
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
          ((n = l.parent) == null ? void 0 : n.id) !== p.id && await p.createEmbeddedDocuments("Item", [l.toObject()]);
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
      const r = typeof h.sort == "number" ? h.sort : 0, n = typeof i.sort == "number" ? i.sort : 0;
      return r - n;
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
    const u = c && c.name || t.name || `Fegyver (${s})`, y = Number(t.bonus || 0) || 0, g = (((v = c == null ? void 0 : c.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(o[g] || 0) || 0, i = y + h, n = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(n);
    await a.evaluate({ async: !0 });
    const { resultType: l, label: p } = ft(a), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var y, m, g, h, i, r, n, a, l, p;
    const t = this.actor;
    if (!t) return;
    let o = ((m = (y = t.items).get) == null ? void 0 : m.call(y, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (n = ui.notifications) == null ? void 0 : n.warn) == null || p.call(n, ((l = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : l.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
  U(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
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
      const r = document.activeElement, n = o.contains(r), a = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      n && a && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const c = await super.render(s, e), u = this.element, y = this.form ?? this.element, m = d.scrollState, g = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, n;
      if (this._applyScrollState(u, m), (g == null ? void 0 : g.name) != null || (g == null ? void 0 : g.id) != null) {
        const a = ((r = y.querySelector) == null ? void 0 : r.call(y, g.id ? `#${CSS.escape(g.id)}` : null)) ?? (g.name ? (n = y.querySelector) == null ? void 0 : n.call(y, `[name="${CSS.escape(g.name)}"]`) : null);
        a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA") && (a.focus({ preventScroll: !0 }), typeof a.selectionStart == "number" && (a.selectionStart = g.selectionStart ?? 0, a.selectionEnd = g.selectionEnd ?? g.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || g) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), c;
  }
  async _prepareContext(s) {
    var W, ee, we, Ie, Se, le, Te, ue, V, ye, ge, de, te;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((W = this.actor) == null ? void 0 : W.system), e.showDeathSkull = !1, e.sizeForSelect = (((we = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : we.size) ?? "").trim() || "Közepes";
    const t = this.actor, o = ((Ie = t == null ? void 0 : t.items) == null ? void 0 : Ie.contents) ?? [], d = ((Se = t == null ? void 0 : t.system) == null ? void 0 : Se.weapons) ?? {}, c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), y = u ? u.split(/\s*,\s*/).filter((k) => c.includes(k)) : [], m = o.filter((k) => k.type === "Fegyver"), g = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = y.length > 0 ? y : c, r = c.filter((k) => !i.includes(k)), n = [...i, ...r], a = n.filter((k) => {
      var x;
      const N = (((x = d[k]) == null ? void 0 : x.itemId) ?? "").trim();
      return N && m.some((H) => H.id === N);
    });
    e.weaponSlots = a.map((k) => {
      const N = d[k] ?? {}, x = (N.itemId ?? "").trim(), H = g.find((he) => he.id === x);
      return {
        slotKey: k,
        itemId: x,
        displayName: (H == null ? void 0 : H.name) || N.name || h,
        img: (H == null ? void 0 : H.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Fe;
      const N = k.id;
      let x = null, H = {};
      for (const Ee of n)
        if ((((Fe = d[Ee]) == null ? void 0 : Fe.itemId) ?? "").trim() === N) {
          x = Ee, H = d[Ee] ?? {};
          break;
        }
      const he = !!x, G = (k == null ? void 0 : k.system) ?? {}, Pe = typeof G.range == "string" ? (G.range || "").trim() : "", me = G.type ?? "", be = (l[me] ?? me) || "—", pe = G.size ?? "", _e = (p[pe] ?? pe) || "", De = [be, _e].filter(Boolean).join(", ") || be || "—", Me = me === "projectile" || pe === "thrown", Re = G.quantity != null ? String(G.quantity).trim() : "1", je = String(G.bonus ?? H.bonus ?? "").trim() || "0", Ke = (G.damage ?? H.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Pe || "—",
        typeAndSize: De,
        quantity: Re,
        isProjectile: Me,
        equipped: he,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const b = o.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var H;
      const N = (k == null ? void 0 : k.system) ?? {}, x = ((H = k.system) == null ? void 0 : H.equipped) === !0;
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
    const v = ((Te = (le = t == null ? void 0 : t.system) == null ? void 0 : le.gear) == null ? void 0 : Te.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], _ = o.filter((k) => k.type === "MikroChip");
    e.microchipsTable = _.map((k) => {
      var me, be, pe, _e;
      const N = k.id;
      let x = null;
      for (const De of I)
        if ((((me = v[De]) == null ? void 0 : me.itemId) ?? "").trim() === N) {
          x = De;
          break;
        }
      const H = ((be = k == null ? void 0 : k.system) == null ? void 0 : be.abilityType) ?? "", he = H === "active" ? "Aktív" : H === "passive" ? "Passzív" : H || "—", G = (((pe = k == null ? void 0 : k.system) == null ? void 0 : pe.description) ?? "").trim(), Pe = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: N,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: he,
        description: Pe,
        kp: Number((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: H === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const q = o.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
      const N = (k == null ? void 0 : k.system) ?? {}, x = (N.description ?? "").trim(), H = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: N.quantity != null ? String(N.quantity).trim() : "1",
        description: H
      };
    });
    const O = o.filter((k) => k.type === "Egyeb");
    e.egyebList = O.map((k) => {
      const x = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), H = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: H
      };
    });
    const T = (((ue = e.weaponsTable) == null ? void 0 : ue.length) ?? 0) > 0 || (((V = e.armorTable) == null ? void 0 : V.length) ?? 0) > 0 || (((ye = e.microchipsTable) == null ? void 0 : ye.length) ?? 0) > 0 || (((ge = e.itemsTable) == null ? void 0 : ge.length) ?? 0) > 0 || (((de = e.egyebList) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const w = ((te = t == null ? void 0 : t.system) == null ? void 0 : te.abilities) ?? {}, E = o.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var N, x;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((N = k.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((x = k.system) == null ? void 0 : x.kp) ?? 0) || 0
      };
    }), F = new Map(E.map((k) => [k.id, k])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = j, e.abilityHatterSlot = j;
    const K = (k) => {
      const N = w[k];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Z = (k) => (k || []).map((N) => {
      const x = F.get(N);
      return x ? { id: x.id, name: x.name, img: x.img, description: x.description, kp: x.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Z(K("passive")), e.abilityActiveList = Z(K("active")), e;
  }
  _attachFrameListeners(s) {
    var m, g, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var a, l, p;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((p = (l = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var a, l, p;
      i.preventDefault();
      const r = (l = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const n = this.actor.items.get(r);
      (p = n == null ? void 0 : n.sheet) == null || p.render(!0);
    });
    const o = (i) => {
      var a, l;
      const r = (a = i == null ? void 0 : i.dataset) == null ? void 0 : a.itemId;
      if (!r || !this.actor) return;
      const n = this.actor.items.get(r);
      (l = n == null ? void 0 : n.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, p, b, v;
      i.preventDefault();
      const r = (p = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, ".karakter-weapon-slot"), n = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!n || !this.actor) return;
      const a = this.actor.items.get(n);
      (v = a == null ? void 0 : a.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, n = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!n || !this.actor) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DCrXpVLL.mjs");
      a(this.actor, n);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, l, p, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let n = (((a = r == null ? void 0 : r.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !n && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (n = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!n || !this.actor) && await this._rollWeaponDamage(n, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p, b;
      i.preventDefault();
      const r = i.currentTarget, n = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), a = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || n;
      if (!n || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-DCrXpVLL.mjs");
      l(this.actor, n, a);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var n, a;
      i.preventDefault();
      const r = (a = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : a.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var a, l;
      i.preventDefault();
      const r = (((l = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const n = this.actor.items.get(r);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(r) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, I, _, q, O;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, n = (_ = (I = i.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : _.itemId;
      if (!r || !n || !this.actor) return;
      const a = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((O = a[r]) == null ? void 0 : O.items) ? a[r].items.slice() : []).filter((T) => T !== n);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var n, a;
      if (i.preventDefault(), !i.altKey) return;
      const r = (a = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : a.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, n = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!n || !this.actor) return;
      const a = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      l && (p[`system.weapons.${l}.itemId`] = "", p[`system.weapons.${l}.name`] = "", p[`system.weapons.${l}.damage`] = "", p[`system.weapons.${l}.bonus`] = ""), Object.keys(p).length && await a.update(p), await a.deleteEmbeddedDocuments("Item", [n]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var n, a;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((a = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var p, b, v, I;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (p = i.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const n = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((_) => {
        var q;
        return (((q = n[_]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var a, l;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((l = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const n = this.actor.items.get(r);
      !n || n.type !== "Targy" && n.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (g = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : g.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var p, b, v;
      const r = i.currentTarget, n = (b = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) == null ? void 0 : b.trim();
      if (!n || !this.actor) return;
      const a = this.actor.items.get(n);
      if (!a) return;
      const l = a.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const c = this, u = (i) => {
      if (!i) return;
      const r = c._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && c.actor.update(r).catch((n) => console.warn("VoidNpcSheet save failed", n));
    }, y = (i) => {
      var r, n, a;
      return i && (((n = (r = c.element) == null ? void 0 : r.contains) == null ? void 0 : n.call(r, i)) || c.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const n = r.tagName;
      if (n !== "INPUT" && n !== "TEXTAREA" && n !== "SELECT") return;
      const a = r.form;
      if (!y(a)) return;
      const l = i.relatedTarget;
      l && (a.contains(l) || c.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(c.id)}`))) || u(a);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (i, r, n) => {
      var a;
      c.actor && ((a = i == null ? void 0 : i.parent) == null ? void 0 : a.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (i, r, n) => {
      var a;
      c.actor && ((a = i == null ? void 0 : i.parent) == null ? void 0 : a.id) === c.actor.id && c.render(!0);
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
    var y, m, g, h, i, r, n, a, l, p;
    const t = this.actor;
    if (!t) return;
    const o = ((m = (y = t.items).get) == null ? void 0 : m.call(y, s)) ?? ((h = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : h.call(g, (b) => b.id === s));
    if (!o || o.type !== "Fegyver") return;
    let d = (((i = o.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (n = ui.notifications) == null ? void 0 : n.warn) == null || p.call(n, ((l = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : l.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    var g, h, i, r, n, a, l, p, b, v, I, _, q, O, T;
    if (!this.actor) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const o = ((w) => {
      var F;
      if (!w) return null;
      const E = w.uuid ?? w.documentUuid ?? ((F = w.data) == null ? void 0 : F.uuid) ?? (typeof w == "string" ? w : null);
      if (E) return E;
      if (typeof w == "object") {
        for (const j of Object.values(w))
          if (typeof j == "string" && j.includes(".") && j.startsWith("Item.")) return j;
      }
      return null;
    })(e);
    if (!o) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(o);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const c = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let w = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== c.id) {
        const Z = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        w = ((n = (await c.createEmbeddedDocuments("Item", [Z]))[0]) == null ? void 0 : n.id) ?? w;
      }
      const E = (((a = d.system) == null ? void 0 : a.kind) ?? "passive").toString(), F = ((l = c.system) == null ? void 0 : l.abilities) ?? {}, j = E === "active" ? "active" : "passive", K = Array.isArray((p = F[j]) == null ? void 0 : p.items) ? F[j].items.slice() : Array.isArray(F[j]) ? F[j].slice() : [];
      K.includes(w) || K.push(w), await c.update({ [`system.abilities.${j}.items`]: K }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === c.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await c.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const w = ((I = c.system) == null ? void 0 : I.weapons) ?? {}, E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = (w.slotOrder ?? "").trim(), j = F ? F.split(/\s*,\s*/).filter((W) => E.includes(W)) : [];
      let K = E.find((W) => {
        var ee;
        return !(((ee = w[W]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      K || (K = E.find((W) => !j.includes(W)) ?? "slot1");
      const Z = j.includes(K) ? j : [...j, K].filter((W) => E.includes(W));
      await c.update({
        "system.weapons.slotOrder": Z.join(","),
        [`system.weapons.${K}.itemId`]: m,
        [`system.weapons.${K}.name`]: d.name ?? "",
        [`system.weapons.${K}.damage`]: ((_ = d.system) == null ? void 0 : _.damage) ?? "",
        [`system.weapons.${K}.bonus`]: ((q = d.system) == null ? void 0 : q.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const w = ((T = (O = c.system) == null ? void 0 : O.gear) == null ? void 0 : T.microchips) ?? {}, F = ["slot1", "slot2", "slot3"].find((j) => {
        var K;
        return !(((K = w[j]) == null ? void 0 : K.itemId) ?? "").trim();
      });
      F && await c.update({
        [`system.gear.microchips.${F}.itemId`]: m,
        [`system.gear.microchips.${F}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var g, h, i, r, n, a;
    const e = (h = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", o = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = o > 0 ? `<p><strong>KP:</strong> ${o}</p>` : "", y = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${y}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((a = this.actor) == null ? void 0 : a.name) ?? void 0 }),
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
      const n = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (o = (n === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", n === "active") {
        const a = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        a > 0 && (d = `<p><strong>KP:</strong> ${a}</p>`);
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
  U(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = X;
var St;
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
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(ie, "PARTS", foundry.utils.mergeObject(U(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Je = ie;
var Tt;
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
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(re, "PARTS", foundry.utils.mergeObject(U(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = U(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = re;
var _t;
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
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(ae, "PARTS", foundry.utils.mergeObject(U(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = U(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = ae;
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
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(ne, "PARTS", foundry.utils.mergeObject(U(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = ne;
var Ot;
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
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(oe, "PARTS", foundry.utils.mergeObject(U(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ot = U(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = oe;
var Ct;
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
    e._votvProfileImgClick = (c) => {
      var m, g, h, i, r, n, a;
      if (!e.isEditable || !((g = (m = c.target) == null ? void 0 : m.closest) != null && g.call(m, ".profile")) && ((i = (h = c.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const u = ((a = (n = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : a.implementation) ?? globalThis.FilePicker;
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
z(ce, "PARTS", foundry.utils.mergeObject(U(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = U(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let et = ce;
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Mt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = jt, CONFIG.Item.dataModels.Pancel = Ht, CONFIG.Item.dataModels.MikroChip = Ut, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const A = 500;
  Hooks.on("updateActor", (u, y, m, g) => {
    var I, _, q, O, T;
    const h = u == null ? void 0 : u.id;
    if (!h) return;
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), n = [], a = (I = game.actors) == null ? void 0 : I.get(h);
    a != null && a.apps && n.push(...Array.from(a.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of l)
      ((_ = w.document) == null ? void 0 : _.id) !== h || ((q = w.document) == null ? void 0 : q.documentName) !== "Actor" || ((O = w.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || n.includes(w) || n.push(w);
    if (r && n.some((w) => {
      const E = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return E && E.contains(i);
    })) return;
    const b = (T = game.votv) == null ? void 0 : T._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < A ? b.appId : null;
    setTimeout(() => {
      for (const w of n)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== v && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, y, m, g) => {
    var n, a, l;
    const h = u == null ? void 0 : u.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((n = h.system) == null ? void 0 : n.weapons) ?? {}, r = {};
    for (const [p, b] of Object.entries(i)) {
      if (!p.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== u.id || (r[`system.weapons.${p}.name`] = u.name ?? "", r[`system.weapons.${p}.damage`] = ((a = u.system) == null ? void 0 : a.damage) ?? "", r[`system.weapons.${p}.bonus`] = ((l = u.system) == null ? void 0 : l.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var A, s;
  document.body.addEventListener("click", async (e) => {
    var a, l, p, b, v, I, _, q, O, T, w, E, F, j;
    const t = (l = (a = e.target) == null ? void 0 : a.closest) == null ? void 0 : l.call(a, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    e.preventDefault(), e.stopPropagation();
    const o = (t.dataset.actorId ?? "").trim(), d = (t.dataset.itemId ?? "").trim(), c = (t.dataset.slotKey ?? "").trim(), u = (t.dataset.targetName ?? "").trim(), y = (t.dataset.hitLocationName ?? "").trim(), m = o ? (p = game.actors) == null ? void 0 : p.get(o) : null;
    if (!m) return;
    let g = d ? ((v = (b = m.items) == null ? void 0 : b.get) == null ? void 0 : v.call(b, d)) ?? ((q = (_ = (I = m.items) == null ? void 0 : I.contents) == null ? void 0 : _.find) == null ? void 0 : q.call(_, (K) => K.id === d)) : null;
    if (!g || g.type !== "Fegyver") return;
    let h = (((O = g.system) == null ? void 0 : O.damage) ?? "").trim();
    if (!h && c && (h = (((((T = m.system) == null ? void 0 : T.weapons) ?? {})[c] ?? {}).damage ?? "").trim()), !h) {
      (j = (w = ui.notifications) == null ? void 0 : w.warn) == null || j.call(w, ((F = (E = game.i18n) == null ? void 0 : E.localize) == null ? void 0 : F.call(E, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const i = new Roll(h);
    await i.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let n = u ? `${g.name} – sebzés – ${u}` : `${g.name} – sebzés`;
    y && (n += ` (${y})`), await i.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: n,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
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
  ), (A = game.user) != null && A.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        const r = i.prototypeToken, n = ((u = r == null ? void 0 : r.bar1) == null ? void 0 : u.attribute) ?? "", a = ((y = r == null ? void 0 : r.bar2) == null ? void 0 : y.attribute) ?? "";
        (n || a) && await i.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (r) {
        console.warn("Vacuum of the Void | Prototype token update failed for", i.name, r);
      }
    for (const i of game.scenes ?? []) {
      const r = ((m = i.tokens) == null ? void 0 : m.filter((n) => {
        var a;
        return ((a = n.actor) == null ? void 0 : a.type) === "Karakter";
      })) ?? [];
      for (const n of r)
        try {
          await n.update(e);
        } catch (a) {
          console.warn("Vacuum of the Void | Token update failed for", n.name, a);
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
      const r = ((h = i.tokens) == null ? void 0 : h.filter((n) => {
        var a;
        return ((a = n.actor) == null ? void 0 : a.type) === "Npc";
      })) ?? [];
      for (const n of r)
        try {
          await n.update(o);
        } catch (a) {
          console.warn("Vacuum of the Void | NPC token update failed for", n.name, a);
        }
    }
  })();
});
Hooks.on("preCreateToken", (A, s, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, o = t ?? A.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = o ? (u = game.actors) == null ? void 0 : u.get(o) : null;
  if (d) {
    if (d.type === "Karakter") {
      A.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && A.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("preCreateCombatant", (A, s, e) => {
  const t = A.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && A.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (A, s, e) => {
  if ((A == null ? void 0 : A.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (A, s, e) => {
  var d;
  const t = A == null ? void 0 : A.object, o = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((o == null ? void 0 : o.type) === "Karakter") {
    const c = s[0] ?? s;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (A, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || A.updateSource({
    width: 3840,
    height: 2160,
    "background.src": qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (A, s, e) => {
  var m, g, h, i;
  const t = ((m = A.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, o = t.resultType, d = t.critLabel, c = t.weaponAttack, u = t.weapon;
  if (!o && !d && !c) return;
  const y = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (y) {
    if (o && y.classList.add(`votv-${o}`), d) {
      const r = y.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const n = y.querySelector(".dice-total"), a = (n == null ? void 0 : n.parentElement) ?? y, l = document.createElement("div");
        l.className = `votv-crit-label votv-crit-label-${o || "neutral"}`, l.textContent = d, a.appendChild(l);
      }
    }
    if (c && u && (u.actorId || (h = A.speaker) != null && h.actor)) {
      const r = y.querySelector(".dice-total"), n = (r == null ? void 0 : r.parentElement) ?? y;
      if (!y.querySelector(".votv-weapon-outcome")) {
        const l = document.createElement("div");
        l.className = "votv-weapon-outcome";
        const p = !!u.isHit, b = u.targetName || "Célpont";
        l.textContent = p ? `Találat – ${b}` : `Nem talált – ${b}`, n.appendChild(l);
      }
      if (u.isHit && !y.querySelector(".votv-weapon-damage-chat")) {
        const p = document.createElement("button");
        p.type = "button", p.className = "votv-weapon-damage-chat";
        const b = u.hitLocationRoll, v = u.hitLocationName;
        p.textContent = b != null && v ? `Sebzés (Találati Hely ${b} - ${v})` : "Sebzés", p.dataset.actorId = String(u.actorId ?? ((i = A.speaker) == null ? void 0 : i.actor) ?? ""), p.dataset.itemId = String(u.itemId ?? ""), p.dataset.slotKey = String(u.slotKey ?? ""), p.dataset.targetName = String(u.targetName ?? ""), p.dataset.hitLocationName = String(u.hitLocationName ?? ""), n.appendChild(p), p.addEventListener("click", async (I) => {
          var we, Ie, Se, le, Te, ue, V, ye, ge, de, te, k, N, x;
          I.preventDefault(), I.stopPropagation();
          const _ = I.currentTarget, q = (_.dataset.actorId ?? "").trim(), O = (_.dataset.itemId ?? "").trim(), T = (_.dataset.slotKey ?? "").trim(), w = (_.dataset.targetName ?? "").trim(), E = (_.dataset.hitLocationName ?? "").trim(), F = q && ((we = game.actors) == null ? void 0 : we.get(q)) || ((Ie = A.speaker) == null ? void 0 : Ie.actor) && ((Se = game.actors) == null ? void 0 : Se.get(A.speaker.actor)) || null;
          if (!F) return;
          let j = O ? ((Te = (le = F.items) == null ? void 0 : le.get) == null ? void 0 : Te.call(le, O)) ?? ((ye = (V = (ue = F.items) == null ? void 0 : ue.contents) == null ? void 0 : V.find) == null ? void 0 : ye.call(V, (H) => H.id === O)) : null;
          if (!j || j.type !== "Fegyver") return;
          let K = (((ge = j.system) == null ? void 0 : ge.damage) ?? "").trim();
          if (!K && T && (K = (((((de = F.system) == null ? void 0 : de.weapons) ?? {})[T] ?? {}).damage ?? "").trim()), !K) {
            (x = (te = ui.notifications) == null ? void 0 : te.warn) == null || x.call(
              te,
              ((N = (k = game.i18n) == null ? void 0 : k.localize) == null ? void 0 : N.call(k, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája."
            );
            return;
          }
          const Z = new Roll(K);
          await Z.evaluate({ async: !0 });
          const W = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
          let ee = w ? `${j.name} – sebzés – ${w}` : `${j.name} – sebzés`;
          E && (ee += ` (${E})`), await Z.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: F }),
            flavor: ee,
            flags: { "vacuum-of-the-void": {} },
            rollMode: W
          });
        });
      }
    }
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-BbjCjfYJ.mjs.map
