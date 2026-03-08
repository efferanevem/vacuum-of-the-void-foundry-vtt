var Kt = Object.defineProperty;
var Ht = Object.getPrototypeOf;
var Ut = Reflect.get;
var Bt = (N, s, e) => s in N ? Kt(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var G = (N, s, e) => Bt(N, typeof s != "symbol" ? s + "" : s, e);
var j = (N, s, e) => Ut(Ht(N), e, s);
const { HTMLField: zt, NumberField: P, SchemaField: R, StringField: S, BooleanField: X, ArrayField: He } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
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
            active: new X({ required: !1, initial: !1 })
          }),
          slot2: new R({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
          }),
          slot3: new R({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new X({ required: !1, initial: !1 })
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
        biography: new zt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ze, SchemaField: Gt } = foundry.data.fields;
class Wt extends Mt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Gt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Yt, NumberField: is, StringField: qe } = foundry.data.fields;
class kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Yt({ required: !1, initial: !1 }),
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
const { BooleanField: Jt, StringField: Ue } = foundry.data.fields;
class Qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Jt({ required: !1, initial: !1 }),
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
const { NumberField: Ge, StringField: vt } = foundry.data.fields;
class Xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new vt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new vt({
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
const { NumberField: Zt, StringField: wt } = foundry.data.fields;
class It extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new wt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new wt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Zt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: St } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new St({ required: !1, blank: !0, initial: "" }),
      quantity: new St({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: es } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new es({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(N) {
  if (!N || !Array.isArray(N.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let c = r;
    for (const o of i) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, c);
        continue;
      }
      if (typeof o.operator == "string") {
        c = o.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof o.faces == "number" ? o.faces : void 0, p = Array.isArray(o.results) ? o.results : null;
      if (!u || !p || u === 8 || u !== 6) continue;
      const b = !a && c >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && b.push(w);
      }
    }
  };
  d(N.terms, 1);
  const n = s.filter((i) => i === 6).length, l = s.filter((i) => i === 1).length, f = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, y = n + f, h = l + m;
  return y > 0 && y === h ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var Tt, _t, Dt, Ot;
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
      const u = document.activeElement, p = n.contains(u), b = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      p && b && (l.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const f = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
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
    var h, i, r, c, o, u, p, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((o = (c = a.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, n = ((u = a.currentHealth) == null ? void 0 : u.legs) ?? 0, l = U._healthStatusFromRatio(n, d), f = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
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
    const e = s ?? this.form ?? this.element, t = (h) => {
      var i;
      return ((i = e == null ? void 0 : e.querySelector) == null ? void 0 : i.call(e, h)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${h}`) : null);
    }, a = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), n = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const f = Number(n == null ? void 0 : n.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(f + m + y);
  }
  _writeTotalSpeed(s = null) {
    const e = s ?? this.form ?? this.element, t = (h) => {
      var i;
      return ((i = e == null ? void 0 : e.querySelector) == null ? void 0 : i.call(e, h)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${h}`) : null);
    }, a = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), n = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    const f = Number(n == null ? void 0 : n.value) || 0, m = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(f + m + y);
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
    var me, Te, _e, Me, Re, je, Ke, Ae, Pe, st, it, rt, nt, at, ot, ct, lt, ut, dt, mt, pt, ft, yt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((_e = (Te = (me = this.actor.system) == null ? void 0 : me.resources) == null ? void 0 : Te.stress) == null ? void 0 : _e.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, n = a.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const D = ((Me = d[g]) == null ? void 0 : Me.value) ?? 0, _ = n[g] ?? 0;
      e.computedHealthStatus[g] = U._healthStatusFromRatio(_, D);
    }
    const f = (Number(n.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(n[g]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((je = (Re = this.actor.system) == null ? void 0 : Re.combat) == null ? void 0 : je.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const c = this._getTotalArmorSpeedPenalty();
    r += c, e.effectiveGivenSpeed = r;
    const u = (Number(((Ae = (Ke = this.actor.system) == null ? void 0 : Ke.combat) == null ? void 0 : Ae.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: u } },
      { inplace: !1 }
    );
    const p = ((Pe = e.system) == null ? void 0 : Pe.combat) ?? {};
    e.totalDefense = (Number(p.defense) || 0) + (Number(p.defenseBonus) || 0) + (Number(p.givenProtection) || 0);
    const b = Number(p.givenSpeed);
    e.totalSpeed = (Number(p.speed) || 0) + (Number(p.speedBonus) || 0) + (Number.isFinite(b) ? b : 0);
    const v = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, D] of Object.entries(v)) {
      const _ = e.computedHealthStatus[D];
      e.skillHealthStatus[g] = _, e.skillDisabled[g] = _ === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const w = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (w.slotOrder ?? "").trim(), q = O ? O.split(/\s*,\s*/).filter((g) => C.includes(g)) : [], T = (st = this.actor.system.gear) == null ? void 0 : st.microchips, I = T && typeof T == "object" && !Array.isArray(T) ? T : {}, E = (((it = I.slot1) == null ? void 0 : it.itemId) ?? "").trim(), A = (((rt = I.slot2) == null ? void 0 : rt.itemId) ?? "").trim(), H = (((nt = I.slot3) == null ? void 0 : nt.itemId) ?? "").trim(), V = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, D) => {
      const _ = typeof g.sort == "number" ? g.sort : 0, L = typeof D.sort == "number" ? D.sort : 0;
      return _ - L;
    }).map((g) => {
      var pe, Oe, Ce, be, ke, $e;
      const D = g.type === "Fegyver", _ = g.type === "MikroChip";
      let L = 0, M = "", Q = null;
      for (let Ne = 0; Ne < q.length; Ne++) {
        const xe = q[Ne];
        if ((((pe = w[xe]) == null ? void 0 : pe.itemId) ?? "") === g.id) {
          L = Ne + 1, M = ((Oe = w[xe]) == null ? void 0 : Oe.bonus) ?? "", Q = xe;
          break;
        }
      }
      let Y = null;
      _ && (E === g.id ? Y = "slot1" : A === g.id ? Y = "slot2" : H === g.id && (Y = "slot3"));
      const Fe = D && ((Ce = g.system) != null && Ce.damage) ? g.system.damage : "", se = D && typeof ((be = g.system) == null ? void 0 : be.range) == "string" ? (g.system.range || "").trim() : "", De = Q ? Number((ke = w[Q]) == null ? void 0 : ke.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: D,
        slotAssignment: L,
        slotBonus: M,
        slotKey: Q,
        microchipSlotKey: Y,
        isEquipped: !!(Q || Y),
        damage: Fe,
        rangeStr: se,
        slotBonusNum: De,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = V;
    const z = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((g) => g.type === "Fegyver"), ee = z.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = ee;
    const fe = "— Nincs fegyver —", le = q.filter((g) => {
      const _ = ((w[g] ?? {}).itemId ?? "").trim();
      return _ ? !!z.find((M) => M.id === _) : !1;
    });
    e.weaponSlots = le.map((g, D) => {
      const _ = w[g] ?? {}, L = (_.itemId ?? "").trim(), M = ee.find((Q) => Q.id === L);
      return {
        slotKey: g,
        itemId: L,
        slotNum: D + 1,
        displayName: (M == null ? void 0 : M.name) || _.name || fe,
        img: (M == null ? void 0 : M.img) || "",
        bonus: Number(_.bonus) || 0,
        damage: _.damage ?? ""
      };
    });
    const ue = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ve = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = z.map((g) => {
      var gt, ht, bt;
      const D = g.id;
      let _ = null, L = {};
      for (const Be of q)
        if ((((gt = w[Be]) == null ? void 0 : gt.itemId) ?? "").trim() === D) {
          _ = Be, L = w[Be] ?? {};
          break;
        }
      const M = !!_, Q = ((ht = g.system) == null ? void 0 : ht.equipped) !== void 0 && ((bt = g.system) == null ? void 0 : bt.equipped) !== null ? !!g.system.equipped : M, Y = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Y.range == "string" ? (Y.range || "").trim() : "", se = Y.type ?? "", De = (ue[se] ?? se) || "—", pe = Y.size ?? "", Oe = (ve[pe] ?? pe) || "", Ce = [De, Oe].filter(Boolean).join(", ") || De || "—", be = se === "projectile" || pe === "thrown", ke = Y.quantity, $e = ke != null ? String(ke).trim() : "1", Ne = String(L.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), jt = Ne || xe || "0";
      return {
        slotKey: _ ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? fe,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: jt,
        damage: L.damage ?? Y.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: De,
        typeAndSize: Ce,
        quantity: $e,
        quantityDisplay: be ? $e : "—",
        isProjectile: be,
        equipped: Q,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const we = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((g) => g.type === "Pancel");
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
    const Ie = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Targy");
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
    const Se = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = Se.map((g) => {
      const _ = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), L = _ ? _.length > 80 ? _.slice(0, 77) + "…" : _ : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: L
      };
    });
    const te = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((g) => g.type === "MikroChip"), J = te.map((g) => ({ id: g.id, name: g.name, img: g.img })), ye = "— Nincs Mikro-Chip —", Ee = ["slot1", "slot2", "slot3"], k = (g) => {
      var _, L, M;
      const D = [];
      return g !== 1 && D.push((((_ = I.slot1) == null ? void 0 : _.itemId) ?? "").trim()), g !== 2 && D.push((((L = I.slot2) == null ? void 0 : L.itemId) ?? "").trim()), g !== 3 && D.push((((M = I.slot3) == null ? void 0 : M.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = J.filter((g) => !k(1).includes(g.id)), e.microchipItemsSlot2 = J.filter((g) => !k(2).includes(g.id)), e.microchipItemsSlot3 = J.filter((g) => !k(3).includes(g.id)), e.microchipSlots = Ee.map((g) => {
      const D = I[g] ?? {}, _ = (D.itemId ?? "").trim(), L = te.find((M) => M.id === _);
      return {
        slotKey: g,
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || ye,
        img: (L == null ? void 0 : L.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const D = `slot${g}`, _ = I[D] ?? {}, L = (_.itemId ?? "").trim(), M = J.find((Q) => Q.id === L);
      e[`microchip${g}ItemId`] = L, e[`microchip${g}DisplayName`] = (M == null ? void 0 : M.name) || _.name || ye, e[`microchip${g}Img`] = (M == null ? void 0 : M.img) || "";
    }), e.microchipsTable = te.map((g) => {
      var pe, Oe, Ce, be;
      const D = g.id;
      let _ = null;
      for (const ke of Ee)
        if ((((pe = I[ke]) == null ? void 0 : pe.itemId) ?? "").trim() === D) {
          _ = ke;
          break;
        }
      const L = !!_, M = ((Oe = g == null ? void 0 : g.system) == null ? void 0 : Oe.abilityType) ?? "", Q = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", Y = M === "active", Fe = Number((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, se = (((be = g == null ? void 0 : g.system) == null ? void 0 : be.description) ?? "").trim(), De = se ? se.length > 60 ? se.slice(0, 57) + "…" : se : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: Q,
        description: De,
        kp: Fe,
        isActive: Y,
        slotKey: _ ?? "",
        equipped: L
      };
    });
    const x = (((dt = e.weaponsTable) == null ? void 0 : dt.length) ?? 0) > 0 || (((mt = e.armorTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.microchipsTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.itemsTable) == null ? void 0 : ft.length) ?? 0) > 0;
    e.showEquipmentDropZone = !x;
    const F = this.actor.system.abilities ?? {}, K = (((yt = this.actor.items) == null ? void 0 : yt.contents) ?? []).map((g) => {
      var D, _, L;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((D = g.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((_ = g.system) == null ? void 0 : _.description) ?? "",
        kp: Number(((L = g.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), ge = new Map(K.map((g) => [g.id, g])), W = "— Nincs képesség —", Le = (g) => {
      const D = F[g] ?? {}, _ = (D.itemId ?? "").trim(), L = _ ? ge.get(_) : null, M = (L == null ? void 0 : L.description) ?? "", Q = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: _,
        displayName: (L == null ? void 0 : L.name) || D.name || W,
        img: (L == null ? void 0 : L.img) || "",
        description: M,
        kp: Q
      };
    };
    e.abilityFajiSlot = Le("faji"), e.abilityHatterSlot = Le("hatter");
    const de = (g) => {
      const D = F[g];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, he = (g) => g.map((D) => {
      const _ = ge.get(D);
      return _ ? {
        id: _.id,
        name: _.name,
        img: _.img,
        description: _.description,
        kp: _.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = he(de("passive")), e.abilityActiveList = he(de("active")), e;
  }
  _attachFrameListeners(s) {
    var y, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BEsWrXGZ.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var o, u, p;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (r.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((u = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : u.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var o;
      const r = i ? i.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const c = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var o, u, p;
      i.preventDefault(), i.stopPropagation();
      const r = ((p = (u = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
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
      const r = i.currentTarget, c = r.dataset.skill, o = ((p = r.textContent) == null ? void 0 : p.trim()) || c, { openRollSheetForSkill: u } = await import("./roll-sheet-BEsWrXGZ.mjs");
      u(this.actor, c, o);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, w, C, O, q, T, I;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), o = c == null ? void 0 : c.dataset.slot;
      if (!o) return;
      const p = (((w = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[o]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!p) return;
      const b = ((O = (C = this.actor.items).get) == null ? void 0 : O.call(C, p)) ?? ((T = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : T.call(q, (E) => E.id === p));
      (I = b == null ? void 0 : b.sheet) == null || I.render(!0);
    });
    const n = (i, r) => {
      var u;
      const c = i.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (o) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = i.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (u = o.sheet) == null || u.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, c = r.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      let u = Number(r.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await o.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor, u = o.items.get(c);
      if (!u) return;
      const p = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((q) => w.includes(q)) : [], O = C.find((q) => {
          var T;
          return (((T = b[q]) == null ? void 0 : T.itemId) ?? "").trim() === c;
        });
        if (O) {
          const q = C.filter((T) => T !== O);
          p["system.weapons.slotOrder"] = q.join(","), p[`system.weapons.${O}.itemId`] = "", p[`system.weapons.${O}.name`] = "", p[`system.weapons.${O}.damage`] = "", p[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var O, q;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, p = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], w = v.find((T) => {
        var I;
        return (((I = u[T]) == null ? void 0 : I.itemId) ?? "").trim() === c;
      }) ?? null;
      if (r.checked) {
        if (w) return;
        let T = v.find((E) => {
          var A;
          return !((A = u[E]) != null && A.itemId);
        });
        const I = new Set(v);
        if (!T) {
          const E = b.find((A) => !I.has(A));
          if (!E) return;
          T = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: c,
          [`system.weapons.${T}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${T}.damage`]: ((O = o == null ? void 0 : o.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((q = o == null ? void 0 : o.system) == null ? void 0 : q.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (w) {
        const T = v.filter((I) => I !== w);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const c = r.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var T;
      i.preventDefault();
      const r = i.currentTarget, c = r.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), u = o == null ? void 0 : o.dataset.slot;
      if (!u) return;
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((T = r.textContent) == null ? void 0 : T.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), w = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = b);
      let C = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      v ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", o == null || o.insertBefore(C, w)), C.src = v, C.style.display = "") : C && C.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const O = p ? this.actor.items.get(p) : null, q = {
        [`system.gear.microchips.${u}.itemId`]: p,
        [`system.gear.microchips.${u}.name`]: (O == null ? void 0 : O.name) ?? ""
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
      const o = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((w) => {
        var C;
        return (((C = o[w]) == null ? void 0 : C.itemId) ?? "").trim() === r;
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
      r.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, c));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const c = r.dataset.slot;
      c && (r.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (o) => {
        var u;
        (u = o.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const c = r.dataset.area;
      c && (r.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (o) => {
        var u;
        (u = o.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
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
      const o = this.actor.system.abilities ?? {}, p = (Array.isArray((b = o[r]) == null ? void 0 : b.items) ? o[r].items.slice() : []).filter((v) => v !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var u;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      (u = o == null ? void 0 : o.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(c) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const u = (r.value ?? "").trim();
      await o.update({ "system.quantity": u }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var O, q;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, p = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((T) => b.includes(T)) : [], w = v.find((T) => {
        var I;
        return (((I = u[T]) == null ? void 0 : I.itemId) ?? "").trim() === c;
      }) ?? null;
      if (r.checked) {
        if (w) return;
        let T = v.find((E) => {
          var A;
          return !((A = u[E]) != null && A.itemId);
        });
        const I = new Set(v);
        if (!T) {
          const E = b.find((A) => !I.has(A));
          if (!E) return;
          T = E, v.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${T}.itemId`]: c,
          [`system.weapons.${T}.name`]: o.name ?? "",
          [`system.weapons.${T}.damage`]: ((O = o.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${T}.bonus`]: ((q = o.system) == null ? void 0 : q.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (w) {
        const T = v.filter((I) => I !== w);
        await this.actor.update({
          "system.weapons.slotOrder": T.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor, u = o.items.get(c), p = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((q) => w.includes(q)) : [], O = C.find((q) => {
          var T;
          return (((T = b[q]) == null ? void 0 : T.itemId) ?? "").trim() === c;
        });
        if (O) {
          const q = C.filter((T) => T !== O);
          p["system.weapons.slotOrder"] = q.join(","), p[`system.weapons.${O}.itemId`] = "", p[`system.weapons.${O}.name`] = "", p[`system.weapons.${O}.damage`] = "", p[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]);
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
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Targy") return;
      const u = (r.value ?? "").trim();
      await o.update({ "system.quantity": u }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    });
    const l = this, f = (i) => {
      var o, u, p, b;
      if (!i) return;
      const r = l._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const c = ((u = (o = r.system) == null ? void 0 : o.resources) == null ? void 0 : u.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      l.actor.update(r).then(() => {
        c && setTimeout(() => l.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, c, o;
      return i && (((c = (r = l.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || l.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = r.form;
      if (!m(o)) return;
      const u = i.relatedTarget;
      u && (o.contains(u) || l.id && ((p = u.closest) != null && p.call(u, `#${CSS.escape(l.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: l.id, at: Date.now() }), f(o));
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
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const y of n) {
      const h = ((m = a[y]) == null ? void 0 : m.value) ?? 0, i = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, U._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, n, l, f, m, y, h, i, r, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            o = u;
            break;
          }
      }
      if (o) {
        const u = await fromUuid(o);
        if (u && u.documentName === "Item" && (u.type === "Kepesseg" || u.type === "ability")) {
          let p = u.id;
          if (((a = u.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(u.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const b = (((n = u.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
          const w = b === "active" ? "active" : "passive", C = Array.isArray((l = v[w]) == null ? void 0 : l.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          C.includes(p) || C.push(p), await this.actor.update({ [`system.abilities.${w}.items`]: C });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            o = u;
            break;
          }
      }
      if (o) {
        const u = await fromUuid(o);
        if (u && u.documentName === "Item" && u.type === "Fegyver") {
          const p = this.actor, b = ((m = u.parent) == null ? void 0 : m.id) !== p.id;
          let v = u.id;
          if (b) {
            const w = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await p.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (b) {
            const w = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, C = (w.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = C ? C.split(/\s*,\s*/).filter((I) => O.includes(I)) : [], T = q.filter((I) => {
              var E;
              return (((E = w[I]) == null ? void 0 : E.itemId) ?? "").trim() === v;
            });
            if (T.length > 0) {
              const E = {
                "system.weapons.slotOrder": q.filter((A) => !T.includes(A)).join(",")
              };
              for (const A of T)
                E[`system.weapons.${A}.itemId`] = "", E[`system.weapons.${A}.name`] = "", E[`system.weapons.${A}.damage`] = "", E[`system.weapons.${A}.bonus`] = "";
              await p.update(E);
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
    var l, f, m, y, h, i;
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
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
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
    const d = this.actor.items.contents.slice().sort((h, i) => {
      const r = typeof h.sort == "number" ? h.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return r - c;
    }).map((h) => h.id), n = d.indexOf(t), l = d.indexOf(e);
    if (n === -1 || l === -1) return;
    d.splice(n, 1), d.splice(l, 0, t);
    const f = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
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
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
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
    var y, h, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", a = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
    var f, m, y, h;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, l = Array.isArray((h = n[e]) == null ? void 0 : h.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
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
    var l, f, m, y, h;
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
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? n), await this.actor.update({
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((w) => w.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((w) => w.id === t.itemId) ?? null);
    const l = n && n.name || t.name || `Fegyver (${s})`, f = Number(t.bonus || 0) || 0, y = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(a[y] || 0) || 0, i = f + h, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, o = new Roll(c);
    await o.evaluate({ async: !0 });
    const { resultType: u, label: p } = We(o), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var f, m, y, h, i, r, c, o, u, p;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((u = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : u.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
G(U, "PARTS", foundry.utils.mergeObject(
  j(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), G(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Tt = j(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((_t = j(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : _t.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ot = (Dt = j(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.window) == null ? void 0 : Ot.contentClasses) ?? [],
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
let Ye = U;
var Ct, qt, Lt, Pt;
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
      const r = document.activeElement, c = a.contains(r), o = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), l = this.element, f = this.form ?? this.element, m = d.scrollState, y = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, c;
      if (this._applyScrollState(l, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((r = f.querySelector) == null ? void 0 : r.call(f, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = f.querySelector) == null ? void 0 : c.call(f, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, m);
    };
    return (h || y) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), n;
  }
  async _prepareContext(s) {
    var z, ee, fe, le, ue, ve, we, Ie, Se, te, J, ye, Ee;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((z = this.actor) == null ? void 0 : z.system), e.showDeathSkull = !1, e.sizeForSelect = (((fe = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : fe.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((le = t == null ? void 0 : t.items) == null ? void 0 : le.contents) ?? [], d = ((ue = t == null ? void 0 : t.system) == null ? void 0 : ue.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], l = (d.slotOrder ?? "").trim(), f = l ? l.split(/\s*,\s*/).filter((k) => n.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = f.length > 0 ? f : n, r = n.filter((k) => !i.includes(k)), c = [...i, ...r], o = c.filter((k) => {
      var F;
      const x = (((F = d[k]) == null ? void 0 : F.itemId) ?? "").trim();
      return x && m.some((K) => K.id === x);
    });
    e.weaponSlots = o.map((k) => {
      const x = d[k] ?? {}, F = (x.itemId ?? "").trim(), K = y.find((ge) => ge.id === F);
      return {
        slotKey: k,
        itemId: F,
        displayName: (K == null ? void 0 : K.name) || x.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const u = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ae;
      const x = k.id;
      let F = null, K = {};
      for (const Pe of c)
        if ((((Ae = d[Pe]) == null ? void 0 : Ae.itemId) ?? "").trim() === x) {
          F = Pe, K = d[Pe] ?? {};
          break;
        }
      const ge = !!F, W = (k == null ? void 0 : k.system) ?? {}, Le = typeof W.range == "string" ? (W.range || "").trim() : "", de = W.type ?? "", he = (u[de] ?? de) || "—", me = W.size ?? "", Te = (p[me] ?? me) || "", _e = [he, Te].filter(Boolean).join(", ") || he || "—", Me = de === "projectile" || me === "thrown", Re = W.quantity != null ? String(W.quantity).trim() : "1", je = String(W.bonus ?? K.bonus ?? "").trim() || "0", Ke = (W.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: F ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Le || "—",
        typeAndSize: _e,
        quantity: Re,
        isProjectile: Me,
        equipped: ge,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const b = a.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const x = (k == null ? void 0 : k.system) ?? {}, F = ((K = k.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: (x.level ?? "").toString().trim() || "—",
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: F
      };
    });
    const v = ((we = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : we.microchips) ?? {}, w = ["slot1", "slot2", "slot3"], C = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var de, he, me, Te;
      const x = k.id;
      let F = null;
      for (const _e of w)
        if ((((de = v[_e]) == null ? void 0 : de.itemId) ?? "").trim() === x) {
          F = _e;
          break;
        }
      const K = ((he = k == null ? void 0 : k.system) == null ? void 0 : he.abilityType) ?? "", ge = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", W = (((me = k == null ? void 0 : k.system) == null ? void 0 : me.description) ?? "").trim(), Le = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: ge,
        description: Le,
        kp: Number((Te = k == null ? void 0 : k.system) == null ? void 0 : Te.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: F ?? "",
        equipped: !!F
      };
    });
    const O = a.filter((k) => k.type === "Targy");
    e.itemsTable = O.map((k) => {
      const x = (k == null ? void 0 : k.system) ?? {}, F = (x.description ?? "").trim(), K = F ? F.length > 60 ? F.slice(0, 57) + "…" : F : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: K
      };
    });
    const q = a.filter((k) => k.type === "Egyeb");
    e.egyebList = q.map((k) => {
      const F = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = F ? F.length > 80 ? F.slice(0, 77) + "…" : F : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const T = (((Ie = e.weaponsTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((Se = e.armorTable) == null ? void 0 : Se.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((J = e.itemsTable) == null ? void 0 : J.length) ?? 0) > 0 || (((ye = e.egyebList) == null ? void 0 : ye.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const I = ((Ee = t == null ? void 0 : t.system) == null ? void 0 : Ee.abilities) ?? {}, E = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, F;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((F = k.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), A = new Map(E.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const B = (k) => {
      const x = I[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, V = (k) => (k || []).map((x) => {
      const F = A.get(x);
      return F ? { id: F.id, name: F.name, img: F.img, description: F.description, kp: F.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = V(B("passive")), e.abilityActiveList = V(B("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var o, u, p;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((p = (u = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var o, u, p;
      i.preventDefault();
      const r = (u = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    });
    const a = (i) => {
      var o, u;
      const r = (o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), a(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), a(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var u, p, b, v;
      i.preventDefault();
      const r = (p = (u = i.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : p.call(u, ".karakter-weapon-slot"), c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var u;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, c = (((u = r == null ? void 0 : r.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BEsWrXGZ.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var o, u, p, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (((o = r == null ? void 0 : r.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((u = r == null ? void 0 : r.dataset) != null && u.slot) && (c = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p, b;
      i.preventDefault();
      const r = i.currentTarget, c = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), o = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-BEsWrXGZ.mjs");
      u(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var c, o;
      i.preventDefault();
      const r = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var o, u;
      i.preventDefault();
      const r = (((u = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(r) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, w, C, O, q;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, c = (C = (w = i.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : C.itemId;
      if (!r || !c || !this.actor) return;
      const o = ((O = this.actor.system) == null ? void 0 : O.abilities) ?? {}, p = (Array.isArray((q = o[r]) == null ? void 0 : q.items) ? o[r].items.slice() : []).filter((T) => T !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const r = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, u = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      u && (p[`system.weapons.${u}.itemId`] = "", p[`system.weapons.${u}.name`] = "", p[`system.weapons.${u}.damage`] = "", p[`system.weapons.${u}.bonus`] = ""), Object.keys(p).length && await o.update(p), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var p, b, v, w;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (p = i.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((C) => {
        var O;
        return (((O = c[C]) == null ? void 0 : O.itemId) ?? "").trim() === r;
      });
      u && await this.actor.update({
        [`system.gear.microchips.${u}.itemId`]: "",
        [`system.gear.microchips.${u}.name`]: "",
        [`system.gear.microchips.${u}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var o, u;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((u = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId) ?? "").trim();
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
      const o = this.actor.items.get(c);
      if (!o) return;
      const u = o.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", u), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const n = this, l = (i) => {
      if (!i) return;
      const r = n._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && n.actor.update(r).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, f = (i) => {
      var r, c, o;
      return i && (((c = (r = n.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || n.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = r.form;
      if (!f(o)) return;
      const u = i.relatedTarget;
      u && (o.contains(u) || n.id && ((p = u.closest) != null && p.call(u, `#${CSS.escape(n.id)}`))) || l(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0), n._votvNpcItemHookRegistered || (n._votvNpcItemUpdateHook = (i, r, c) => {
      var o;
      n.actor && ((o = i == null ? void 0 : i.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, n._votvNpcItemDeleteHook = (i, r, c) => {
      var o;
      n.actor && ((o = i == null ? void 0 : i.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
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
    var w, C, O, q;
    const e = this.actor;
    if (!e) return;
    const a = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, d = ((C = e.system) == null ? void 0 : C.skills) ?? {}, n = ((O = e.items) == null ? void 0 : O.filter((T) => T.type === "Fegyver")) ?? [];
    let l = null;
    a.itemId && (l = n.find((T) => T.id === a.itemId) ?? null);
    const f = l && l.name || a.name || "Fegyver", m = Number(a.bonus || 0) || 0, h = (((q = l == null ? void 0 : l.system) == null ? void 0 : q.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", i = Number(d[h] || 0) || 0, r = m + i, o = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, u = new Roll(o);
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
    var f, m, y, h, i, r, c, o, u, p;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (f = t.items).get) == null ? void 0 : m.call(f, s)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (c = ui.notifications) == null ? void 0 : c.warn) == null || p.call(c, ((u = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : u.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    var y, h, i, r, c, o, u, p, b, v, w, C, O, q, T;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const a = ((I) => {
      var A;
      if (!I) return null;
      const E = I.uuid ?? I.documentUuid ?? ((A = I.data) == null ? void 0 : A.uuid) ?? (typeof I == "string" ? I : null);
      if (E) return E;
      if (typeof I == "object") {
        for (const H of Object.values(I))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!a) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let I = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== n.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        I = ((c = (await n.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : c.id) ?? I;
      }
      const E = (((o = d.system) == null ? void 0 : o.kind) ?? "passive").toString(), A = ((u = n.system) == null ? void 0 : u.abilities) ?? {}, H = E === "active" ? "active" : "passive", B = Array.isArray((p = A[H]) == null ? void 0 : p.items) ? A[H].items.slice() : Array.isArray(A[H]) ? A[H].slice() : [];
      B.includes(I) || B.push(I), await n.update({ [`system.abilities.${H}.items`]: B }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === n.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await n.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const I = ((w = n.system) == null ? void 0 : w.weapons) ?? {}, E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (I.slotOrder ?? "").trim(), H = A ? A.split(/\s*,\s*/).filter((z) => E.includes(z)) : [];
      let B = E.find((z) => {
        var ee;
        return !(((ee = I[z]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      B || (B = E.find((z) => !H.includes(z)) ?? "slot1");
      const V = H.includes(B) ? H : [...H, B].filter((z) => E.includes(z));
      await n.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${B}.itemId`]: m,
        [`system.weapons.${B}.name`]: d.name ?? "",
        [`system.weapons.${B}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${B}.bonus`]: ((O = d.system) == null ? void 0 : O.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const I = ((T = (q = n.system) == null ? void 0 : q.gear) == null ? void 0 : T.microchips) ?? {}, A = ["slot1", "slot2", "slot3"].find((H) => {
        var B;
        return !(((B = I[H]) == null ? void 0 : B.itemId) ?? "").trim();
      });
      A && await n.update({
        [`system.gear.microchips.${A}.itemId`]: m,
        [`system.gear.microchips.${A}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, h, i, r, c, o;
    const e = (h = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", a = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", f = d ? `<p>${d}</p>` : "", m = `
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
    var f, m, y, h, i, r;
    const e = (m = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const c = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
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
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
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
G(Z, "PARTS", foundry.utils.mergeObject(
  j(Z, Z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), G(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Z, Z, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ct = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((qt = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : qt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Pt = (Lt = j(Z, Z, "DEFAULT_OPTIONS")) == null ? void 0 : Lt.window) == null ? void 0 : Pt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Je = Z;
var Nt;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(ie, "PARTS", foundry.utils.mergeObject(j(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), G(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Nt = j(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Nt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ie;
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(re, "PARTS", foundry.utils.mergeObject(j(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), G(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(re, re, "DEFAULT_OPTIONS"), {
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(ne, "PARTS", foundry.utils.mergeObject(j(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), G(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((At = j(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : At.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = ne;
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(ae, "PARTS", foundry.utils.mergeObject(j(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), G(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ae, ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ft = j(ae, ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ft.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = ae;
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(oe, "PARTS", foundry.utils.mergeObject(j(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), G(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($t = j(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !1 })
}));
let et = oe;
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
      var m, y, h, i, r, c, o;
      if (!e.isEditable || !((y = (m = n.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const l = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
G(ce, "PARTS", foundry.utils.mergeObject(j(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), G(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((xt = j(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ce;
const Rt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Wt, CONFIG.Actor.dataModels.Npc = Mt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = kt, CONFIG.Item.dataModels.weapon = kt, CONFIG.Item.dataModels.Pancel = Qt, CONFIG.Item.dataModels.MikroChip = Xt, CONFIG.Item.dataModels.Kepesseg = It, CONFIG.Item.dataModels.ability = It, CONFIG.Item.dataModels.Targy = Vt, CONFIG.Item.dataModels.Egyeb = ts, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const N = 500;
  Hooks.on("updateActor", (l, f, m, y) => {
    var w, C, O, q, T;
    const h = l == null ? void 0 : l.id;
    if (!h) return;
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], o = (w = game.actors) == null ? void 0 : w.get(h);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const I of u)
      ((C = I.document) == null ? void 0 : C.id) !== h || ((O = I.document) == null ? void 0 : O.documentName) !== "Actor" || ((q = I.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || c.includes(I) || c.push(I);
    if (r && c.some((I) => {
      const E = (I == null ? void 0 : I.form) ?? (I == null ? void 0 : I.element);
      return E && E.contains(i);
    })) return;
    const b = (T = game.votv) == null ? void 0 : T._lastKarakterSheetBlurSave, v = b && Date.now() - b.at < N ? b.appId : null;
    setTimeout(() => {
      for (const I of c)
        !(I != null && I.rendered) || typeof I.render != "function" || I.id !== v && I.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (l, f, m, y) => {
    var c, o, u;
    const h = l == null ? void 0 : l.parent;
    if (!h || h.documentName !== "Actor" || h.type !== "Karakter" || l.type !== "Fegyver") return;
    const i = ((c = h.system) == null ? void 0 : c.weapons) ?? {}, r = {};
    for (const [p, b] of Object.entries(i)) {
      if (!p.startsWith("slot")) continue;
      const v = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !v || v !== l.id || (r[`system.weapons.${p}.name`] = l.name ?? "", r[`system.weapons.${p}.damage`] = ((o = l.system) == null ? void 0 : o.damage) ?? "", r[`system.weapons.${p}.bonus`] = ((u = l.system) == null ? void 0 : u.bonus) ?? "");
    }
    Object.keys(r).length && h.update(r);
  });
});
Hooks.on("ready", () => {
  var N, s;
  document.body.addEventListener("click", async (e) => {
    var p, b, v, w, C, O, q, T, I, E, A, H, B, V, z, ee, fe, le, ue, ve, we, Ie, Se;
    const t = (b = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const d = (v = game.messages) == null ? void 0 : v.get(a), n = (C = (w = d == null ? void 0 : d.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : C.weapon;
    if (!n) return;
    const l = n.actorId ?? ((O = d == null ? void 0 : d.speaker) == null ? void 0 : O.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let f = ((q = game.actors) == null ? void 0 : q.get(n.actorId)) ?? ((T = game.actors) == null ? void 0 : T.get(l));
    if (f || (f = ((E = (I = game.scenes) == null ? void 0 : I.contents) == null ? void 0 : E.flatMap((J) => {
      var ye;
      return ((ye = J.tokens) == null ? void 0 : ye.contents) ?? [];
    }).map((J) => J.actor).find((J) => J && (J.id === l || J.id === n.actorId))) ?? null), !f) return;
    const m = n.itemId ? ((H = (A = f.items) == null ? void 0 : A.get) == null ? void 0 : H.call(A, n.itemId)) ?? ((z = (V = (B = f.items) == null ? void 0 : B.contents) == null ? void 0 : V.find) == null ? void 0 : z.call(V, (te) => te.id === n.itemId)) : null;
    let y = (n.damageFormula ?? "").trim();
    if (y || (y = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !y && n.slotKey && (y = (((((fe = f.system) == null ? void 0 : fe.weapons) ?? {})[n.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (we = (le = ui.notifications) == null ? void 0 : le.warn) == null || we.call(le, ((ve = (ue = game.i18n) == null ? void 0 : ue.localize) == null ? void 0 : ve.call(ue, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const h = new Roll(y);
    await h.evaluate({ async: !0 });
    const i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, r = n.targetName || "", c = n.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (n.slotKey ? ((Se = (((Ie = f.system) == null ? void 0 : Ie.weapons) ?? {})[n.slotKey]) == null ? void 0 : Se.name) ?? "" : "")) || "Fegyver";
    let u = r ? `${o} – sebzés – ${r}` : `${o} – sebzés`;
    c && (u += ` (${c})`), await h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: f }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: i
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, l, f, m, y, h;
      if (!((l = (n = e.target) == null ? void 0 : n.closest) != null && l.call(n, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), a = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (N = game.user) != null && N.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: Rt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await a.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var n, l, f, m, y, h;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((n = game.actors) == null ? void 0 : n.filter((i) => i.type === "Karakter")) ?? [];
    for (const i of t)
      try {
        const r = i.prototypeToken, c = ((l = r == null ? void 0 : r.bar1) == null ? void 0 : l.attribute) ?? "", o = ((f = r == null ? void 0 : r.bar2) == null ? void 0 : f.attribute) ?? "";
        (c || o) && await i.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (r) {
        console.warn("Vacuum of the Void | Prototype token update failed for", i.name, r);
      }
    for (const i of game.scenes ?? []) {
      const r = ((m = i.tokens) == null ? void 0 : m.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const c of r)
        try {
          await c.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, o);
        }
    }
    const a = {
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
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of r)
        try {
          await c.update(a);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (N, s, e) => {
  var n, l;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, a = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (l = game.actors) == null ? void 0 : l.get(a) : null;
  if (d) {
    if (d.type === "Karakter") {
      N.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && N.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("preCreateCombatant", (N, s, e) => {
  const t = N.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && N.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (N, s, e) => {
  if ((N == null ? void 0 : N.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (N, s, e) => {
  var d;
  const t = N == null ? void 0 : N.object, a = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const n = s[0] ?? s;
    n != null && n.classList && n.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (N, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || N.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Rt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (N, s, e) => {
  var m, y, h, i;
  const t = ((m = N.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel, n = t.weaponAttack, l = t.weapon;
  if (!a && !d && !n) return;
  const f = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (f) {
    if (a && f.classList.add(`votv-${a}`), d) {
      const r = f.querySelector(".votv-crit-label");
      if (r)
        r.textContent = d;
      else {
        const c = f.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? f, u = document.createElement("div");
        u.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, u.textContent = d, o.appendChild(u);
      }
    }
    if (n && l && (l.actorId || (h = N.speaker) != null && h.actor)) {
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
        p.textContent = b != null && v ? `Sebzés (Találati Hely ${b} - ${v})` : "Sebzés", p.dataset.actorId = String(l.actorId ?? ((i = N.speaker) == null ? void 0 : i.actor) ?? ""), p.dataset.itemId = String(l.itemId ?? ""), p.dataset.slotKey = String(l.slotKey ?? ""), p.dataset.targetName = String(l.targetName ?? ""), p.dataset.hitLocationName = String(l.hitLocationName ?? ""), p.dataset.messageId = String(N.id ?? ""), c.appendChild(p);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-CVA4KhCP.mjs.map
