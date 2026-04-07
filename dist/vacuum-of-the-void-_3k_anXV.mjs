var Ut = Object.defineProperty;
var zt = Object.getPrototypeOf;
var Bt = Reflect.get;
var Gt = (_, s, e) => s in _ ? Ut(_, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[s] = e;
var B = (_, s, e) => Gt(_, typeof s != "symbol" ? s + "" : s, e);
var K = (_, s, e) => Bt(zt(_), e, s);
const { HTMLField: Wt, NumberField: E, SchemaField: j, StringField: S, BooleanField: Q, ArrayField: He } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new j({
        name: new S({ required: !1, blank: !0, initial: "" }),
        player: new S({ required: !1, blank: !0, initial: "" }),
        level: new E({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new S({ required: !1, blank: !0, initial: "" }),
        assignment: new S({ required: !1, blank: !0, initial: "" }),
        subAssignment: new S({ required: !1, blank: !0, initial: "" }),
        background: new S({ required: !1, blank: !0, initial: "" }),
        languages: new S({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new S({ required: !1, blank: !0, initial: "" })
      }),
      resources: new j({
        health: new j({
          value: new E({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new E({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new j({
          head: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          torso: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          arms: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
          }),
          legs: new j({
            value: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new Q({ required: !1, initial: !1 }),
            box2: new Q({ required: !1, initial: !1 }),
            box3: new Q({ required: !1, initial: !1 })
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
        defense: new E({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new E({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new E({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new E({ required: !1, integer: !1, initial: 0 }),
        speedBonus: new E({ required: !1, integer: !1, initial: 0 }),
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
        quickThinking1: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new S({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new S({ required: !1, blank: !0, initial: "" }),
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
        slotOrder: new S({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new j({
          name: new S({ required: !1, blank: !0, initial: "" }),
          bonus: new S({ required: !1, blank: !0, initial: "" }),
          damage: new S({ required: !1, blank: !0, initial: "" }),
          itemId: new S({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new j({
        microchips: new j({
          slot1: new j({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot2: new j({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          }),
          slot3: new j({
            itemId: new S({ required: !1, blank: !0, initial: "" }),
            name: new S({ required: !1, blank: !0, initial: "" }),
            active: new Q({ required: !1, initial: !1 })
          })
        }),
        equipment: new S({ required: !1, blank: !0, initial: "" }),
        armor: new He(
          new j({
            name: new S({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new S({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new S({ required: !1, blank: !0, initial: "" }),
            level: new S({ required: !1, blank: !0, initial: "" }),
            other: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new He(
          new j({
            name: new S({ required: !1, blank: !0, initial: "" }),
            quantity: new E({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new S({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new j({
        faji: new j({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new j({
          itemId: new S({ required: !1, blank: !0, initial: "" }),
          name: new S({ required: !1, blank: !0, initial: "" })
        }),
        passive: new j({
          items: new He(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new j({
          items: new He(
            new S({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new j({
        biography: new Wt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Be, SchemaField: Yt } = foundry.data.fields;
class Jt extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Yt({
        body: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Be({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Qt, NumberField: ls, StringField: ke } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Qt({ required: !1, initial: !1 }),
      type: new ke({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ke({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ke({ required: !1, blank: !0, initial: "" }),
      damage: new ke({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ke({ required: !1, blank: !0, initial: "" }),
      special: new ke({ required: !1, blank: !0, initial: "" }),
      quantity: new ke({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new ke({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Xt, StringField: Ue } = foundry.data.fields;
class Zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Xt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ue({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Ue({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ue({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: wt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
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
const { NumberField: es, StringField: It } = foundry.data.fields;
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
      kp: new es({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Tt } = foundry.data.fields;
class ts extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Tt({ required: !1, blank: !0, initial: "" }),
      quantity: new Tt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ss } = foundry.data.fields;
class is extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ss({ required: !1, blank: !0, initial: "" })
    };
  }
}
function We(_) {
  if (!_ || !Array.isArray(_.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const d = (u, i = 1) => {
    if (!Array.isArray(u)) return;
    let l = i;
    for (const o of u) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, l);
        continue;
      }
      if (typeof o.operator == "string") {
        l = o.operator === "-" ? -1 : 1;
        continue;
      }
      const n = typeof o.faces == "number" ? o.faces : void 0, f = Array.isArray(o.results) ? o.results : null;
      if (!n || !f || n === 8 || n !== 6) continue;
      const h = !a && l >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : l >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(_.terms, 1);
  const r = s.filter((u) => u === 6).length, c = s.filter((u) => u === 1).length, p = e.filter((u) => u === 6).length, m = t.filter((u) => u === 6).length, y = r + p, b = c + m;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function rs(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var _t, Dt, Ot, Ct;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, d, r, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (d) {
      c.scrollState = this._saveScrollState(d);
      const n = document.activeElement, f = r.contains(n), h = n && (n.tagName === "INPUT" && n.type !== "checkbox" && n.type !== "radio" || n.tagName === "TEXTAREA");
      f && h && (c.focus = {
        name: n.name || null,
        id: n.id || null,
        selectionStart: "selectionStart" in n ? n.selectionStart : 0,
        selectionEnd: "selectionEnd" in n ? n.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, y = this.form ?? this.element, b = c.scrollState, u = c.focus, i = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", l = () => {
      var n, f;
      if (this._applyScrollState(m, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((n = y.querySelector) == null ? void 0 : n.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(m, b);
    };
    return (i || u) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), r = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (r) => {
        var c;
        return r.type === "Pancel" && ((c = r.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const c = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (r) => {
        var c;
        return r.type === "Pancel" && ((c = r.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const c = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), p = Number(c);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, u, i, l, o, n, f, h, v;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : i.resources) ?? {}, d = ((o = (l = a.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : o.value) ?? 0, r = ((n = a.currentHealth) == null ? void 0 : n.legs) ?? 0, c = z._healthStatusFromRatio(r, d), p = Number(((v = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    c === 0 ? m = 0 : c === 1 ? m = -6 : c === 2 ? m = -3 : m = p;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var r, c, p, m;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (p = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : p.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, a = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const p = Number(r == null ? void 0 : r.value) || 0, m = Number(c == null ? void 0 : c.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(p + m + y);
  }
  _writeTotalSpeed(s = null) {
    var o, n, f, h, v;
    const e = s ?? this.form ?? this.element, t = (I) => {
      var T;
      return ((T = e == null ? void 0 : e.querySelector) == null ? void 0 : T.call(e, I)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${I}`) : null);
    }, a = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), c = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    const p = ((n = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : n.resources) ?? {}, m = ((h = (f = p.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, y = ((v = p.currentHealth) == null ? void 0 : v.legs) ?? 0;
    if (z._healthStatusFromRatio(y, m) === 0) {
      a.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, i = Number(c == null ? void 0 : c.value) || 0, l = Number(d == null ? void 0 : d.textContent) || 0;
    a.textContent = String(u + i + l);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, c, p, m;
    const e = z.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, a = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return z._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var c, p, m, y;
    const t = z.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((c = s == null ? void 0 : s.system) == null ? void 0 : c.resources) ?? {}, d = ((m = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : m.value) ?? 0, r = ((y = a.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return z._healthStatusFromRatio(r, d);
  }
  async _prepareContext(s) {
    var _e, De, Me, Re, je, Ke, Ee, Le, st, it, rt, nt, at, ot, lt, ct, ut, dt, mt, pt, ft, yt, gt;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Me = (De = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : De.stress) == null ? void 0 : Me.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, r = a.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of c) {
      const q = ((Re = d[g]) == null ? void 0 : Re.value) ?? 0, D = r[g] ?? 0;
      e.computedHealthStatus[g] = z._healthStatusFromRatio(D, q);
    }
    const p = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = p || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((Ke = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Ke.givenSpeed) ?? 0) || 0;
    let i;
    b === 0 ? i = 0 : b === 1 ? i = -6 : b === 2 ? i = -3 : i = u;
    const l = this._getTotalArmorSpeedPenalty();
    i += l, e.effectiveGivenSpeed = i;
    const n = (Number(((Le = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Le.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: n } },
      { inplace: !1 }
    );
    const f = ((st = e.system) == null ? void 0 : st.combat) ?? {};
    e.totalDefense = (Number(f.defense) || 0) + (Number(f.defenseBonus) || 0) + (Number(f.givenProtection) || 0);
    const h = Number(f.givenSpeed), v = (Number(f.speed) || 0) + (Number(f.speedBonus) || 0) + (Number.isFinite(h) ? h : 0);
    e.totalSpeed = b === 0 ? 0 : v;
    const I = z.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, q] of Object.entries(I)) {
      const D = e.computedHealthStatus[q];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const T = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (T.slotOrder ?? "").trim(), N = P ? P.split(/\s*,\s*/).filter((g) => L.includes(g)) : [], w = (it = this.actor.system.gear) == null ? void 0 : it.microchips, O = w && typeof w == "object" && !Array.isArray(w) ? w : {}, F = (((rt = O.slot1) == null ? void 0 : rt.itemId) ?? "").trim(), C = (((nt = O.slot2) == null ? void 0 : nt.itemId) ?? "").trim(), H = (((at = O.slot3) == null ? void 0 : at.itemId) ?? "").trim(), W = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, q) => {
      const D = typeof g.sort == "number" ? g.sort : 0, A = typeof q.sort == "number" ? q.sort : 0;
      return D - A;
    }).map((g) => {
      var pe, Ce, qe, he, be, $e;
      const q = g.type === "Fegyver", D = g.type === "MikroChip";
      let A = 0, R = "", J = null;
      for (let Pe = 0; Pe < N.length; Pe++) {
        const xe = N[Pe];
        if ((((pe = T[xe]) == null ? void 0 : pe.itemId) ?? "") === g.id) {
          A = Pe + 1, R = ((Ce = T[xe]) == null ? void 0 : Ce.bonus) ?? "", J = xe;
          break;
        }
      }
      let Y = null;
      D && (F === g.id ? Y = "slot1" : C === g.id ? Y = "slot2" : H === g.id && (Y = "slot3"));
      const Fe = q && ((qe = g.system) != null && qe.damage) ? g.system.damage : "", ie = q && typeof ((he = g.system) == null ? void 0 : he.range) == "string" ? (g.system.range || "").trim() : "", Oe = J ? Number((be = T[J]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: q,
        slotAssignment: A,
        slotBonus: R,
        slotKey: J,
        microchipSlotKey: Y,
        isEquipped: !!(J || Y),
        damage: Fe,
        rangeStr: ie,
        slotBonusNum: Oe,
        quantity: Number((($e = g.system) == null ? void 0 : $e.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = W;
    const ee = (((ot = this.actor.items) == null ? void 0 : ot.contents) ?? []).filter((g) => g.type === "Fegyver"), fe = ee.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = fe;
    const te = "— Nincs fegyver —", ue = N.filter((g) => {
      const D = ((T[g] ?? {}).itemId ?? "").trim();
      return D ? !!ee.find((R) => R.id === D) : !1;
    });
    e.weaponSlots = ue.map((g, q) => {
      const D = T[g] ?? {}, A = (D.itemId ?? "").trim(), R = fe.find((J) => J.id === A);
      return {
        slotKey: g,
        itemId: A,
        slotNum: q + 1,
        displayName: (R == null ? void 0 : R.name) || D.name || te,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ve = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, we = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ee.map((g) => {
      var ht, bt, kt;
      const q = g.id;
      let D = null, A = {};
      for (const ze of N)
        if ((((ht = T[ze]) == null ? void 0 : ht.itemId) ?? "").trim() === q) {
          D = ze, A = T[ze] ?? {};
          break;
        }
      const R = !!D, J = ((bt = g.system) == null ? void 0 : bt.equipped) !== void 0 && ((kt = g.system) == null ? void 0 : kt.equipped) !== null ? !!g.system.equipped : R, Y = (g == null ? void 0 : g.system) ?? {}, Fe = typeof Y.range == "string" ? (Y.range || "").trim() : "", ie = Y.type ?? "", Oe = (ve[ie] ?? ie) || "—", pe = Y.size ?? "", Ce = (we[pe] ?? pe) || "", qe = [Oe, Ce].filter(Boolean).join(", ") || Oe || "—", he = ie === "projectile" || pe === "thrown", be = Y.quantity, $e = be != null ? String(be).trim() : "1", Pe = String(A.bonus ?? "").trim(), xe = String(Y.bonus ?? "").trim(), Ht = Pe || xe || "0";
      return {
        slotKey: D ?? "",
        itemId: q,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? te,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Ht,
        damage: A.damage ?? Y.damage ?? "",
        rangeStr: Fe || "—",
        typeLabel: Oe,
        typeAndSize: qe,
        quantity: $e,
        quantityDisplay: he ? $e : "—",
        isProjectile: he,
        equipped: J,
        special: (Y.special ?? "").trim() || "—"
      };
    });
    const Ie = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = Ie.map((g) => {
      var A, R;
      const q = (g == null ? void 0 : g.system) ?? {}, D = ((A = g.system) == null ? void 0 : A.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (q.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (q.speedPenalty ?? "").toString().trim() || "—",
        level: rs((q.level ?? "").toString().trim()),
        special: (q.special ?? q.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const Se = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = Se.map((g) => {
      const q = (g == null ? void 0 : g.system) ?? {}, D = (q.description ?? "").trim(), A = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", R = q.quantity != null ? String(q.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: A
      };
    });
    const ye = (((ut = this.actor.items) == null ? void 0 : ut.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = ye.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), A = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: A
      };
    });
    const X = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((g) => g.type === "MikroChip"), se = X.map((g) => ({ id: g.id, name: g.name, img: g.img })), Ne = "— Nincs Mikro-Chip —", k = ["slot1", "slot2", "slot3"], x = (g) => {
      var D, A, R;
      const q = [];
      return g !== 1 && q.push((((D = O.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && q.push((((A = O.slot2) == null ? void 0 : A.itemId) ?? "").trim()), g !== 3 && q.push((((R = O.slot3) == null ? void 0 : R.itemId) ?? "").trim()), q.filter(Boolean);
    };
    e.microchipItemsSlot1 = se.filter((g) => !x(1).includes(g.id)), e.microchipItemsSlot2 = se.filter((g) => !x(2).includes(g.id)), e.microchipItemsSlot3 = se.filter((g) => !x(3).includes(g.id)), e.microchipSlots = k.map((g) => {
      const q = O[g] ?? {}, D = (q.itemId ?? "").trim(), A = X.find((R) => R.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (A == null ? void 0 : A.name) || q.name || Ne,
        img: (A == null ? void 0 : A.img) || "",
        active: q.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const q = `slot${g}`, D = O[q] ?? {}, A = (D.itemId ?? "").trim(), R = se.find((J) => J.id === A);
      e[`microchip${g}ItemId`] = A, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || D.name || Ne, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = X.map((g) => {
      var pe, Ce, qe, he;
      const q = g.id;
      let D = null;
      for (const be of k)
        if ((((pe = O[be]) == null ? void 0 : pe.itemId) ?? "").trim() === q) {
          D = be;
          break;
        }
      const A = !!D, R = ((Ce = g == null ? void 0 : g.system) == null ? void 0 : Ce.abilityType) ?? "", J = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", Y = R === "active", Fe = Number((qe = g == null ? void 0 : g.system) == null ? void 0 : qe.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, ie = (((he = g == null ? void 0 : g.system) == null ? void 0 : he.description) ?? "").trim(), Oe = ie ? ie.length > 60 ? ie.slice(0, 57) + "…" : ie : "—";
      return {
        itemId: q,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: J,
        description: Oe,
        kp: Fe,
        isActive: Y,
        slotKey: D ?? "",
        equipped: A
      };
    });
    const M = (((mt = e.weaponsTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.armorTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.microchipsTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !M;
    const U = this.actor.system.abilities ?? {}, Te = (((gt = this.actor.items) == null ? void 0 : gt.contents) ?? []).map((g) => {
      var q, D, A;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((q = g.system) == null ? void 0 : q.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((A = g.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), G = new Map(Te.map((g) => [g.id, g])), Ae = "— Nincs képesség —", de = (g) => {
      const q = U[g] ?? {}, D = (q.itemId ?? "").trim(), A = D ? G.get(D) : null, R = (A == null ? void 0 : A.description) ?? "", J = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: D,
        displayName: (A == null ? void 0 : A.name) || q.name || Ae,
        img: (A == null ? void 0 : A.img) || "",
        description: R,
        kp: J
      };
    };
    e.abilityFajiSlot = de("faji"), e.abilityHatterSlot = de("hatter");
    const ge = (g) => {
      const q = U[g];
      return q ? Array.isArray(q == null ? void 0 : q.items) ? q.items : Array.isArray(q) ? q : [] : [];
    }, me = (g) => g.map((q) => {
      const D = G.get(q);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
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
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-C_Lb5wZ_.mjs");
      n(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, f, h;
      i.preventDefault(), i.stopPropagation();
      const l = i.currentTarget;
      let o = (l.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (l.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((f = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : f.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = l.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var n;
      const l = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const o = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d });
    const r = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', r), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, f, h;
      i.preventDefault(), i.stopPropagation();
      const l = ((h = (f = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
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
      const l = i.currentTarget, o = l.dataset.skill, n = ((h = l.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-C_Lb5wZ_.mjs");
      f(this.actor, o, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, L, P, N, w, O;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), n = o == null ? void 0 : o.dataset.slot;
      if (!n) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[n]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((P = (L = this.actor.items).get) == null ? void 0 : P.call(L, h)) ?? ((w = (N = this.actor.items.contents) == null ? void 0 : N.find) == null ? void 0 : w.call(N, (F) => F.id === h));
      (O = v == null ? void 0 : v.sheet) == null || O.render(!0);
    });
    const c = (i, l) => {
      var f;
      const o = i.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = n.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const l = i.currentTarget, o = l.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n) return;
      let f = Number(l.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await n.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, f = n.items.get(o);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = n.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = I ? I.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], P = L.find((N) => {
          var w;
          return (((w = v[N]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = L.filter((w) => w !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await n.update(h), await n.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var P, N;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], T = I.find((w) => {
        var O;
        return (((O = f[w]) == null ? void 0 : O.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (T) return;
        let w = I.find((F) => {
          var C;
          return !((C = f[F]) != null && C.itemId);
        });
        const O = new Set(I);
        if (!w) {
          const F = v.find((C) => !O.has(C));
          if (!F) return;
          w = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((P = n == null ? void 0 : n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((N = n == null ? void 0 : n.system) == null ? void 0 : N.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (T) {
        const w = I.filter((O) => O !== T);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const l = i.currentTarget;
      if (l.disabled) return;
      const o = l.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const l = i.currentTarget, o = l.closest(".karakter-microchip-slot-select-wrap"), n = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = n == null ? void 0 : n.dataset.slot;
      if (!f) return;
      const h = (l.dataset.itemId ?? "").trim(), v = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (l.dataset.itemImg ?? "").trim(), T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let L = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (L || (L = document.createElement("img"), L.className = "karakter-microchip-slot-thumb", L.alt = "", n == null || n.insertBefore(L, T)), L.src = I, L.style.display = "") : L && L.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = h ? this.actor.items.get(h) : null, N = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      h && (N[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(N);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "MikroChip") return;
      const n = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var L;
        return (((L = n[T]) == null ? void 0 : L.itemId) ?? "").trim() === l;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const l = i.currentTarget.dataset.slot;
      if (!l) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, l) => {
      const o = l.dataset.slot;
      l.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, o)), l.addEventListener("dragleave", (n) => {
        var f;
        return (f = n.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, o));
    }), t.find(".karakter-ability-slot-single").each((i, l) => {
      const o = l.dataset.slot;
      o && (l.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, o)), l.addEventListener("dragleave", (n) => {
        var f;
        return (f = n.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (n) => {
        var f;
        (f = n.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, l) => {
      const o = l.dataset.area;
      o && (l.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, o)), l.addEventListener("dragleave", (n) => {
        var f;
        return (f = n.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (n) => {
        var f;
        (f = n.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
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
      const l = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!l || !o) return;
      const n = this.actor.system.abilities ?? {}, h = (Array.isArray((v = n[l]) == null ? void 0 : v.items) ? n[l].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${l}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var f;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      (f = n == null ? void 0 : n.sheet) == null || f.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor.items.get(o);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(o) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const f = (l.value ?? "").trim();
      await n.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var P, N;
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], T = I.find((w) => {
        var O;
        return (((O = f[w]) == null ? void 0 : O.itemId) ?? "").trim() === o;
      }) ?? null;
      if (l.checked) {
        if (T) return;
        let w = I.find((F) => {
          var C;
          return !((C = f[F]) != null && C.itemId);
        });
        const O = new Set(I);
        if (!w) {
          const F = v.find((C) => !O.has(C));
          if (!F) return;
          w = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((P = n.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((N = n.system) == null ? void 0 : N.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (T) {
        const w = I.filter((O) => O !== T);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const n = this.actor, f = n.items.get(o), h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = n.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = I ? I.split(/\s*,\s*/).filter((N) => T.includes(N)) : [], P = L.find((N) => {
          var w;
          return (((w = v[N]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (P) {
          const N = L.filter((w) => w !== P);
          h["system.weapons.slotOrder"] = N.join(","), h[`system.weapons.${P}.itemId`] = "", h[`system.weapons.${P}.name`] = "", h[`system.weapons.${P}.damage`] = "", h[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(h).length && await n.update(h), await n.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const l = i.currentTarget, o = (l.dataset.itemId ?? "").trim();
      if (!o) return;
      const n = this.actor.items.get(o);
      if (!n || n.type !== "Targy") return;
      const f = (l.value ?? "").trim();
      await n.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const p = this, m = (i) => {
      var n, f, h, v;
      if (!i) return;
      const l = p._getFormDataForUpdate(i);
      if (Object.keys(l).length === 0) return;
      const o = ((f = (n = l.system) == null ? void 0 : n.resources) == null ? void 0 : f.currentHealth) != null || ((v = (h = l.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      p.actor.update(l).then(() => {
        o && setTimeout(() => p.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (i) => {
      var l, o, n;
      return i && (((o = (l = p.element) == null ? void 0 : l.contains) == null ? void 0 : o.call(l, i)) || p.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(p.id)}`)));
    };
    p._votvBlur = (i) => {
      var h;
      const l = i.target;
      if (!l || !l.form) return;
      const o = l.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const n = l.form;
      if (!y(n)) return;
      const f = i.relatedTarget;
      f && (n.contains(f) || p.id && ((h = f.closest) != null && h.call(f, `#${CSS.escape(p.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: p.id, at: Date.now() }), m(n));
    }, document.body.addEventListener("blur", p._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var c, p, m;
    const e = {};
    for (const y of s.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((m = a[y]) == null ? void 0 : m.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, z._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, r, c, p, m, y, b, u, i, l;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            o = n;
            break;
          }
      }
      if (o) {
        const n = await fromUuid(o);
        if (n && n.documentName === "Item" && (n.type === "Kepesseg" || n.type === "ability")) {
          let f = n.id;
          if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const h = (((r = n.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": n.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": n.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", T = Array.isArray((c = v[I]) == null ? void 0 : c.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          T.includes(f) || T.push(f), await this.actor.update({ [`system.abilities.${I}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            o = n;
            break;
          }
      }
      if (o) {
        const n = await fromUuid(o);
        if (n && n.documentName === "Item" && n.type === "Fegyver") {
          const f = this.actor, h = ((m = n.parent) == null ? void 0 : m.id) !== f.id;
          let v = n.id;
          if (h) {
            const I = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await f.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const I = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = T ? T.split(/\s*,\s*/).filter((w) => L.includes(w)) : [], N = P.filter((w) => {
              var O;
              return (((O = I[w]) == null ? void 0 : O.itemId) ?? "").trim() === v;
            });
            if (N.length > 0) {
              const O = {
                "system.weapons.slotOrder": P.filter((F) => !N.includes(F)).join(",")
              };
              for (const F of N)
                O[`system.weapons.${F}.itemId`] = "", O[`system.weapons.${F}.name`] = "", O[`system.weapons.${F}.damage`] = "", O[`system.weapons.${F}.bonus`] = "";
              await f.update(O);
            }
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "Pancel") {
          const f = this.actor;
          if (((u = n.parent) == null ? void 0 : u.id) !== f.id) {
            const h = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "MikroChip") {
          const f = this.actor;
          ((i = n.parent) == null ? void 0 : i.id) !== f.id && await f.createEmbeddedDocuments("Item", [n.toObject()]);
          return;
        }
        if (n && n.documentName === "Item" && (n.type === "Targy" || n.type === "Egyeb")) {
          const f = this.actor;
          ((l = n.parent) == null ? void 0 : l.id) !== f.id && await f.createEmbeddedDocuments("Item", [n.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, r, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var c, p, m, y, b, u;
    s.preventDefault(), s.stopPropagation(), (c = s.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    const r = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
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
      const i = typeof b.sort == "number" ? b.sort : 0, l = typeof u.sort == "number" ? u.sort : 0;
      return i - l;
    }).map((b) => b.id), r = d.indexOf(t), c = d.indexOf(e);
    if (r === -1 || c === -1) return;
    d.splice(r, 1), d.splice(c, 0, t);
    const p = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var a, d, r;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
    var p, m, y;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const b = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: c,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var y, b, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", a = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${c}
      ${p}
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
    var r, c, p;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((c = a.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((p = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : p.id) ?? d;
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
    var p, m, y, b;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, c = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    c.includes(d) || c.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, r, c;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var c, p, m, y, b;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "MikroChip") return;
    let r = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(a) || 0;
    const r = this._getSkillHealthStatus(s);
    r === 1 ? d -= 6 : r === 2 && (d -= 3);
    const p = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(p);
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((L) => L.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((L) => L.id === t.itemId) ?? null);
    const c = r && r.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, m = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", y = (((T = r == null ? void 0 : r.system) == null ? void 0 : T.skillKey) ?? "").trim(), b = y && a[y] !== void 0 ? y : m === "explosive" ? "grenadeUse" : "firearms", u = Number(a[b] || 0) || 0, i = p + u, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(o);
    await n.evaluate({ async: !0 });
    const { resultType: f, label: h } = We(n), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, m, y, b, u, i, l, o, n, f;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (p = t.items).get) == null ? void 0 : m.call(p, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((n = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : n.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
};
B(z, "PARTS", foundry.utils.mergeObject(
  K(z, z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), B(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(z, z, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((_t = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Dt = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ct = (Ot = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.window) == null ? void 0 : Ct.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
B(z, "BODY_PART_BY_SKILL", {
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
let Ye = z;
function ns(_) {
  return _ ? _ === "1" ? "1. szint" : _ === "2" ? "2. szint" : _ === "3" ? "3. szint" : _ === "Alap" ? "Alap" : _ : "Alap";
}
var qt, Lt, Pt, Nt;
const Z = class Z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, r, c;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((c = s.querySelector) == null ? void 0 : c.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, l = a.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      l && o && (d.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const r = await super.render(s, e), c = this.element, p = this.form ?? this.element, m = d.scrollState, y = d.focus, b = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", u = () => {
      var i, l;
      if (this._applyScrollState(c, m), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((i = p.querySelector) == null ? void 0 : i.call(p, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (l = p.querySelector) == null ? void 0 : l.call(p, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(c, m);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(s) {
    var W, ee, fe, te, ue, ve, we, Ie, Se, ye, X, se, Ne;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((W = this.actor) == null ? void 0 : W.system), e.showDeathSkull = !1, e.sizeForSelect = (((fe = (ee = e.system) == null ? void 0 : ee.identity) == null ? void 0 : fe.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((te = t == null ? void 0 : t.items) == null ? void 0 : te.contents) ?? [], d = ((ue = t == null ? void 0 : t.system) == null ? void 0 : ue.weapons) ?? {}, r = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], c = (d.slotOrder ?? "").trim(), p = c ? c.split(/\s*,\s*/).filter((k) => r.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), y = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), b = "— Nincs fegyver —", u = p.length > 0 ? p : r, i = r.filter((k) => !u.includes(k)), l = [...u, ...i], o = l.filter((k) => {
      var M;
      const x = (((M = d[k]) == null ? void 0 : M.itemId) ?? "").trim();
      return x && m.some((U) => U.id === x);
    });
    e.weaponSlots = o.map((k) => {
      const x = d[k] ?? {}, M = (x.itemId ?? "").trim(), U = y.find((Te) => Te.id === M);
      return {
        slotKey: k,
        itemId: M,
        displayName: (U == null ? void 0 : U.name) || x.name || b,
        img: (U == null ? void 0 : U.img) || ""
      };
    });
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var Ee;
      const x = k.id;
      let M = null, U = {};
      for (const Le of l)
        if ((((Ee = d[Le]) == null ? void 0 : Ee.itemId) ?? "").trim() === x) {
          M = Le, U = d[Le] ?? {};
          break;
        }
      const Te = !!M, G = (k == null ? void 0 : k.system) ?? {}, Ae = typeof G.range == "string" ? (G.range || "").trim() : "", de = G.type ?? "", ge = (n[de] ?? de) || "—", me = G.size ?? "", _e = (f[me] ?? me) || "", De = [ge, _e].filter(Boolean).join(", ") || ge || "—", Me = de === "projectile" || me === "thrown", Re = G.quantity != null ? String(G.quantity).trim() : "1", je = String(G.bonus ?? U.bonus ?? "").trim() || "0", Ke = (G.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: M ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? b,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: Ke,
        rangeStr: Ae || "—",
        typeAndSize: De,
        quantity: Re,
        isProjectile: Me,
        equipped: Te,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const h = a.filter((k) => k.type === "Pancel");
    e.armorTable = h.map((k) => {
      var U;
      const x = (k == null ? void 0 : k.system) ?? {}, M = ((U = k.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: ns((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const v = ((we = (ve = t == null ? void 0 : t.system) == null ? void 0 : ve.gear) == null ? void 0 : we.microchips) ?? {}, I = ["slot1", "slot2", "slot3"], T = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = T.map((k) => {
      var de, ge, me, _e;
      const x = k.id;
      let M = null;
      for (const De of I)
        if ((((de = v[De]) == null ? void 0 : de.itemId) ?? "").trim() === x) {
          M = De;
          break;
        }
      const U = ((ge = k == null ? void 0 : k.system) == null ? void 0 : ge.abilityType) ?? "", Te = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", G = (((me = k == null ? void 0 : k.system) == null ? void 0 : me.description) ?? "").trim(), Ae = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: Te,
        description: Ae,
        kp: Number((_e = k == null ? void 0 : k.system) == null ? void 0 : _e.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: M ?? "",
        equipped: !!M
      };
    });
    const L = a.filter((k) => k.type === "Targy");
    e.itemsTable = L.map((k) => {
      const x = (k == null ? void 0 : k.system) ?? {}, M = (x.description ?? "").trim(), U = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: U
      };
    });
    const P = a.filter((k) => k.type === "Egyeb");
    e.egyebList = P.map((k) => {
      const M = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), U = M ? M.length > 80 ? M.slice(0, 77) + "…" : M : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: U
      };
    });
    const N = (((Ie = e.weaponsTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((Se = e.armorTable) == null ? void 0 : Se.length) ?? 0) > 0 || (((ye = e.microchipsTable) == null ? void 0 : ye.length) ?? 0) > 0 || (((X = e.itemsTable) == null ? void 0 : X.length) ?? 0) > 0 || (((se = e.egyebList) == null ? void 0 : se.length) ?? 0) > 0;
    e.showEquipmentDropZone = !N;
    const w = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.abilities) ?? {}, O = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, M;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((M = k.system) == null ? void 0 : M.kp) ?? 0) || 0
      };
    }), F = new Map(O.map((k) => [k.id, k])), C = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = C, e.abilityHatterSlot = C;
    const H = (k) => {
      const x = w[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, V = (k) => (k || []).map((x) => {
      const M = F.get(x);
      return M ? { id: M.id, name: M.name, img: M.img, description: M.description, kp: M.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = V(H("passive")), e.abilityActiveList = V(H("active")), e;
  }
  _attachFrameListeners(s) {
    var m, y, b;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, n, f;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const i = ((f = (n = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, n, f;
      u.preventDefault();
      const i = (n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (f = l == null ? void 0 : l.sheet) == null || f.render(!0);
    });
    const a = (u) => {
      var o, n;
      const i = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      (n = l == null ? void 0 : l.sheet) == null || n.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), a(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var n, f, h, v;
      u.preventDefault();
      const i = (f = (n = u.currentTarget) == null ? void 0 : n.closest) == null ? void 0 : f.call(n, ".karakter-weapon-slot"), l = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var n;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget, l = (((n = i == null ? void 0 : i.dataset) == null ? void 0 : n.slot) ?? "").trim();
      if (!l || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-C_Lb5wZ_.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, n, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const i = u.currentTarget;
      let l = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !l && ((n = i == null ? void 0 : i.dataset) != null && n.slot) && (l = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!l || !this.actor) && await this._rollWeaponDamage(l, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var f, h;
      u.preventDefault();
      const i = u.currentTarget, l = (((f = i == null ? void 0 : i.dataset) == null ? void 0 : f.skill) ?? "").trim(), o = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || l;
      if (!l || !this.actor) return;
      const { openRollSheetForSkill: n } = await import("./roll-sheet-C_Lb5wZ_.mjs");
      n(this.actor, l, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var l, o;
      u.preventDefault();
      const i = (o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, n;
      u.preventDefault();
      const i = (((n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      l && (l.type === "Kepesseg" || l.type === "ability" ? await this._postAbilityToChat(i) : (l.type === "MikroChip" || l.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, T, L, P;
      if (u.preventDefault(), !u.altKey) return;
      const i = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, l = (T = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !l || !this.actor) return;
      const o = ((L = this.actor.system) == null ? void 0 : L.abilities) ?? {}, f = (Array.isArray((P = o[i]) == null ? void 0 : P.items) ? o[i].items.slice() : []).filter((N) => N !== l);
      await this.actor.update({ [`system.abilities.${i}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var l, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const i = u.currentTarget, l = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!l || !this.actor) return;
      const o = this.actor, n = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      n && (f[`system.weapons.${n}.itemId`] = "", f[`system.weapons.${n}.name`] = "", f[`system.weapons.${n}.damage`] = "", f[`system.weapons.${n}.bonus`] = ""), Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [l]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var l, o;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((o = (l = u.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var f, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((h = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, n = ["slot1", "slot2", "slot3"].find((T) => {
        var L;
        return (((L = l[T]) == null ? void 0 : L.itemId) ?? "").trim() === i;
      });
      n && await this.actor.update({
        [`system.gear.microchips.${n}.itemId`]: "",
        [`system.gear.microchips.${n}.name`]: "",
        [`system.gear.microchips.${n}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, n;
      if (u.preventDefault(), !u.altKey) return;
      const i = (((n = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const l = this.actor.items.get(i);
      !l || l.type !== "Targy" && l.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var i;
      (((i = u.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var f, h, v;
      const i = u.currentTarget, l = (h = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!l || !this.actor) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      const n = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", n), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: n })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && u.dataTransfer.setDragImage(i, 0, 0);
    });
    const r = this, c = (u) => {
      if (!u) return;
      const i = r._getFormDataForUpdate(u);
      Object.keys(i).length !== 0 && r.actor.update(i).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, p = (u) => {
      var i, l, o;
      return u && (((l = (i = r.element) == null ? void 0 : i.contains) == null ? void 0 : l.call(i, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var f;
      const i = u.target;
      if (!i || !i.form) return;
      const l = i.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = i.form;
      if (!p(o)) return;
      const n = u.relatedTarget;
      n && (o.contains(n) || r.id && ((f = n.closest) != null && f.call(n, `#${CSS.escape(r.id)}`))) || c(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, i, l) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, i, l) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, d;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((c) => console.warn("VoidNpcSheet save on preClose failed", c));
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
    var T, L, P, N, w;
    const e = this.actor;
    if (!e) return;
    const a = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, d = ((L = e.system) == null ? void 0 : L.skills) ?? {}, r = ((P = e.items) == null ? void 0 : P.filter((O) => O.type === "Fegyver")) ?? [];
    let c = null;
    a.itemId && (c = r.find((O) => O.id === a.itemId) ?? null);
    const p = c && c.name || a.name || "Fegyver", m = Number(a.bonus || 0) || 0, y = ((N = c == null ? void 0 : c.system) == null ? void 0 : N.type) || "kinetic", b = (((w = c == null ? void 0 : c.system) == null ? void 0 : w.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", i = Number(d[u] || 0) || 0, l = m + i, n = `3d6${l !== 0 ? l > 0 ? `+${l}` : `${l}` : ""}`, f = new Roll(n);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = We(f), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, m, y, b, u, i, l, o, n, f;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (p = t.items).get) == null ? void 0 : m.call(p, s)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((u = a.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((n = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : n.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
  async _onDropItem(s, e) {
    var y, b, u, i, l, o, n, f, h, v, I, T, L, P, N;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const a = ((w) => {
      var F;
      if (!w) return null;
      const O = w.uuid ?? w.documentUuid ?? ((F = w.data) == null ? void 0 : F.uuid) ?? (typeof w == "string" ? w : null);
      if (O) return O;
      if (typeof w == "object") {
        for (const C of Object.values(w))
          if (typeof C == "string" && C.includes(".") && C.startsWith("Item.")) return C;
      }
      return null;
    })(e);
    if (!a) return (b = super._onDropItem) == null ? void 0 : b.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let w = d.id;
      if (((i = d.parent) == null ? void 0 : i.id) !== r.id) {
        const V = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        w = ((l = (await r.createEmbeddedDocuments("Item", [V]))[0]) == null ? void 0 : l.id) ?? w;
      }
      const O = (((o = d.system) == null ? void 0 : o.kind) ?? "passive").toString(), F = ((n = r.system) == null ? void 0 : n.abilities) ?? {}, C = O === "active" ? "active" : "passive", H = Array.isArray((f = F[C]) == null ? void 0 : f.items) ? F[C].items.slice() : Array.isArray(F[C]) ? F[C].slice() : [];
      H.includes(w) || H.push(w), await r.update({ [`system.abilities.${C}.items`]: H }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((h = d.parent) == null ? void 0 : h.id) === r.id) return;
    const c = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await r.createEmbeddedDocuments("Item", [c]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const w = ((I = r.system) == null ? void 0 : I.weapons) ?? {}, O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = (w.slotOrder ?? "").trim(), C = F ? F.split(/\s*,\s*/).filter((W) => O.includes(W)) : [];
      let H = O.find((W) => {
        var ee;
        return !(((ee = w[W]) == null ? void 0 : ee.itemId) ?? "").trim();
      });
      H || (H = O.find((W) => !C.includes(W)) ?? "slot1");
      const V = C.includes(H) ? C : [...C, H].filter((W) => O.includes(W));
      await r.update({
        "system.weapons.slotOrder": V.join(","),
        [`system.weapons.${H}.itemId`]: m,
        [`system.weapons.${H}.name`]: d.name ?? "",
        [`system.weapons.${H}.damage`]: ((T = d.system) == null ? void 0 : T.damage) ?? "",
        [`system.weapons.${H}.bonus`]: ((L = d.system) == null ? void 0 : L.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const w = ((N = (P = r.system) == null ? void 0 : P.gear) == null ? void 0 : N.microchips) ?? {}, F = ["slot1", "slot2", "slot3"].find((C) => {
        var H;
        return !(((H = w[C]) == null ? void 0 : H.itemId) ?? "").trim();
      });
      F && await r.update({
        [`system.gear.microchips.${F}.itemId`]: m,
        [`system.gear.microchips.${F}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var y, b, u, i, l, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, d = (((l = e.system) == null ? void 0 : l.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${c}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var p, m, y, b, u, i;
    const e = (m = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const l = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (a = (l === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", l === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: c,
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
        const r = (a.value ?? "").trim();
        if (r === "") continue;
        d = Number(r) || 0;
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
B(Z, "PARTS", foundry.utils.mergeObject(
  K(Z, Z, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), B(Z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
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
const as = [
  { value: "deception", label: "Átverés" },
  { value: "medicalCare", label: "Betegellátás" },
  { value: "endurance", label: "Erőnlét" },
  { value: "perception", label: "Észlelés" },
  { value: "cooking", label: "Főzés" },
  { value: "quickThinking", label: "Gyorsgondolkodás" },
  { value: "combatTraining", label: "Harcképzettség" },
  { value: "vehicleOperation", label: "Járműirányítás" },
  { value: "grenadeUse", label: "Kézifegyver Használat" },
  { value: "lexicalKnowledge", label: "Lexikális Tudás" },
  { value: "stealth", label: "Lopakodás" },
  { value: "firearms", label: "Löveghasználat" },
  { value: "intimidation", label: "Megfélemlítés" },
  { value: "persuasion", label: "Meggyőzés" },
  { value: "memory", label: "Memória" },
  { value: "mentalStrength", label: "Mentális Erősség" },
  { value: "languages", label: "Nyelvek" },
  { value: "luck", label: "Szerencse" },
  { value: "technicalKnowledge", label: "Technikai Tudás" },
  { value: "music", label: "Zene" }
];
var At;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = as, e;
  }
};
B(re, "PARTS", foundry.utils.mergeObject(K(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), B(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((At = K(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : At.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = re;
var Et;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
B(ne, "PARTS", foundry.utils.mergeObject(K(ne, ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), B(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ne, ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Et = K(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Et.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
B(ae, "PARTS", foundry.utils.mergeObject(K(ae, ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), B(ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ae, ae, "DEFAULT_OPTIONS"), {
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
    }, e._votvInput = (r) => {
      var m;
      const c = r.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const p = (c == null ? void 0 : c.form) ?? ((m = c == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      d(p) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(p), 300));
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
B(oe, "PARTS", foundry.utils.mergeObject(K(oe, oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), B(oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(oe, oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject((($t = K(oe, oe, "DEFAULT_OPTIONS")) == null ? void 0 : $t.form) ?? {}, { submitOnChange: !0 })
}));
let Ve = oe;
var xt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
B(le, "PARTS", foundry.utils.mergeObject(K(le, le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), B(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(le, le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((xt = K(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : xt.form) ?? {}, { submitOnChange: !1 })
}));
let et = le;
var Mt;
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
    e._votvProfileImgClick = (r) => {
      var m, y, b, u, i, l, o;
      if (!e.isEditable || !((y = (m = r.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const c = ((o = (l = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (r) => {
      if (!r) return;
      const c = e._getFormDataForUpdate(r);
      Object.keys(c).length !== 0 && e.document.update(c).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, d = (r) => {
      var c, p, m;
      return r && (((p = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : p.call(c, r)) || e.id && ((m = r.closest) == null ? void 0 : m.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, m, y;
      const c = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (m = r.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      d(c) && a(c);
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
B(ce, "PARTS", foundry.utils.mergeObject(K(ce, ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), B(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ce, ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Mt = K(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Mt.form) ?? {}, { submitOnChange: !1 })
}));
let tt = ce;
const jt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Kt(_) {
  return _ === "Nagy" ? 2 : _ === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var s, e, t, a, d, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Jt, CONFIG.Actor.dataModels.Npc = Rt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vt, CONFIG.Item.dataModels.weapon = vt, CONFIG.Item.dataModels.Pancel = Zt, CONFIG.Item.dataModels.MikroChip = Vt, CONFIG.Item.dataModels.Kepesseg = St, CONFIG.Item.dataModels.ability = St, CONFIG.Item.dataModels.Targy = ts, CONFIG.Item.dataModels.Egyeb = is, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Combat).initiative ?? (d.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
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
  const _ = 500;
  Hooks.on("updateActor", (c, p, m, y) => {
    var I, T, L, P, N, w, O, F;
    const b = c == null ? void 0 : c.id;
    if (!b) return;
    if (c.type === "Npc" && ((I = p == null ? void 0 : p.system) != null && I.identity) && "size" in p.system.identity) {
      const C = Kt((L = (T = c.system) == null ? void 0 : T.identity) == null ? void 0 : L.size);
      c.update({
        "prototypeToken.width": C,
        "prototypeToken.height": C
      }).catch((H) => console.warn("Vacuum of the Void | NPC token size update failed for", c.name, H));
    }
    const u = document.activeElement, i = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA" || u.isContentEditable), l = [], o = (P = game.actors) == null ? void 0 : P.get(b);
    o != null && o.apps && l.push(...Array.from(o.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const C of n)
      ((N = C.document) == null ? void 0 : N.id) !== b || ((w = C.document) == null ? void 0 : w.documentName) !== "Actor" || ((O = C.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(C) || l.push(C);
    if (i && l.some((C) => {
      const H = (C == null ? void 0 : C.form) ?? (C == null ? void 0 : C.element);
      return H && H.contains(u);
    })) return;
    const h = (F = game.votv) == null ? void 0 : F._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < _ ? h.appId : null;
    setTimeout(() => {
      for (const C of l)
        !(C != null && C.rendered) || typeof C.render != "function" || C.id !== v && C.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (c, p, m, y) => {
    var l, o, n;
    const b = c == null ? void 0 : c.parent;
    if (!b || b.documentName !== "Actor" || b.type !== "Karakter" || c.type !== "Fegyver") return;
    const u = ((l = b.system) == null ? void 0 : l.weapons) ?? {}, i = {};
    for (const [f, h] of Object.entries(u)) {
      if (!f.startsWith("slot")) continue;
      const v = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !v || v !== c.id || (i[`system.weapons.${f}.name`] = c.name ?? "", i[`system.weapons.${f}.damage`] = ((o = c.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${f}.bonus`] = ((n = c.system) == null ? void 0 : n.bonus) ?? "");
    }
    Object.keys(i).length && b.update(i);
  });
});
Hooks.on("ready", () => {
  var _, s;
  document.body.addEventListener("click", async (e) => {
    var f, h, v, I, T, L, P, N, w, O, F, C, H, V, W, ee, fe, te, ue, ve, we, Ie, Se;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const d = (v = game.messages) == null ? void 0 : v.get(a), r = (T = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!r) return;
    const c = r.actorId ?? ((L = d == null ? void 0 : d.speaker) == null ? void 0 : L.actor) ?? "";
    if (!c) return;
    e.preventDefault(), e.stopPropagation();
    let p = ((P = game.actors) == null ? void 0 : P.get(r.actorId)) ?? ((N = game.actors) == null ? void 0 : N.get(c));
    if (p || (p = ((O = (w = game.scenes) == null ? void 0 : w.contents) == null ? void 0 : O.flatMap((X) => {
      var se;
      return ((se = X.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((X) => X.actor).find((X) => X && (X.id === c || X.id === r.actorId))) ?? null), !p) return;
    const m = r.itemId ? ((C = (F = p.items) == null ? void 0 : F.get) == null ? void 0 : C.call(F, r.itemId)) ?? ((W = (V = (H = p.items) == null ? void 0 : H.contents) == null ? void 0 : V.find) == null ? void 0 : W.call(V, (ye) => ye.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((ee = m == null ? void 0 : m.system) == null ? void 0 : ee.damage) ?? "").trim()), !y && r.slotKey && (y = (((((fe = p.system) == null ? void 0 : fe.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (we = (te = ui.notifications) == null ? void 0 : te.warn) == null || we.call(te, ((ve = (ue = game.i18n) == null ? void 0 : ue.localize) == null ? void 0 : ve.call(ue, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = r.targetName || "", l = r.hitLocationName || "", o = ((m == null ? void 0 : m.name) ?? (r.slotKey ? ((Se = (((Ie = p.system) == null ? void 0 : Ie.weapons) ?? {})[r.slotKey]) == null ? void 0 : Se.name) ?? "" : "")) || "Fegyver";
    let n = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    l && (n += ` (${l})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: p }),
      flavor: n,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, c, p, m, y, b;
      if (!((c = (r = e.target) == null ? void 0 : r.closest) != null && c.call(r, "#actors"))) return;
      const t = (m = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : m.call(p, "[data-document-id]"), a = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (_ = game.user) != null && _.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
      }, r = await a.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var r, c, p, m, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const i = u.prototypeToken, l = ((c = i == null ? void 0 : i.bar1) == null ? void 0 : c.attribute) ?? "", o = ((p = i == null ? void 0 : i.bar2) == null ? void 0 : p.attribute) ?? "";
        (l || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, i);
      }
    for (const u of game.scenes ?? []) {
      const i = ((m = u.tokens) == null ? void 0 : m.filter((l) => {
        var o;
        return ((o = l.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const l of i)
        try {
          await l.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", l.name, o);
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
      const i = ((b = u.tokens) == null ? void 0 : b.filter((l) => {
        var o;
        return ((o = l.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const l of i)
        try {
          await l.update(a);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", l.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (_, s, e) => {
  var r, c, p, m;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, a = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (c = game.actors) == null ? void 0 : c.get(a) : null;
  if (d) {
    if (d.type === "Karakter") {
      _.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Npc") {
      const y = Kt((m = (p = d.system) == null ? void 0 : p.identity) == null ? void 0 : m.size);
      _.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (_, s, e) => {
  const t = _.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && _.updateSource({ initiative: 0 });
});
Hooks.on("renderSidebarTab", (_, s, e) => {
  if ((_ == null ? void 0 : _.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (_, s, e) => {
  var d;
  const t = _ == null ? void 0 : _.object, a = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const r = s[0] ?? s;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (_, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || _.updateSource({
    width: 3840,
    height: 2160,
    "background.src": jt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (_, s, e) => {
  var m, y, b, u;
  const t = ((m = _.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel, r = t.weaponAttack, c = t.weapon;
  if (!a && !d && !r) return;
  const p = (y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, ".dice-roll");
  if (p) {
    if (a && p.classList.add(`votv-${a}`), d) {
      const i = p.querySelector(".votv-crit-label");
      if (i)
        i.textContent = d;
      else {
        const l = p.querySelector(".dice-total"), o = (l == null ? void 0 : l.parentElement) ?? p, n = document.createElement("div");
        n.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, n.textContent = d, o.appendChild(n);
      }
    }
    if (r && c && (c.actorId || (b = _.speaker) != null && b.actor)) {
      const i = p.querySelector(".dice-total"), l = (i == null ? void 0 : i.parentElement) ?? p;
      if (!p.querySelector(".votv-weapon-outcome")) {
        const n = document.createElement("div");
        n.className = "votv-weapon-outcome";
        const f = !!c.isHit, h = c.targetName || "Célpont";
        n.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, l.appendChild(n);
      }
      if (c.isHit && !p.querySelector(".votv-weapon-damage-chat")) {
        const f = document.createElement("button");
        f.type = "button", f.className = "votv-weapon-damage-chat";
        const h = c.hitLocationRoll, v = c.hitLocationName;
        f.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", f.dataset.actorId = String(c.actorId ?? ((u = _.speaker) == null ? void 0 : u.actor) ?? ""), f.dataset.itemId = String(c.itemId ?? ""), f.dataset.slotKey = String(c.slotKey ?? ""), f.dataset.targetName = String(c.targetName ?? ""), f.dataset.hitLocationName = String(c.hitLocationName ?? ""), f.dataset.messageId = String(_.id ?? ""), l.appendChild(f);
      }
    }
  }
});
export {
  Ye as V,
  We as c
};
//# sourceMappingURL=vacuum-of-the-void-_3k_anXV.mjs.map
