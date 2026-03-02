var Ue = Object.defineProperty;
var Pe = Object.getPrototypeOf;
var je = Reflect.get;
var Re = (_, i, e) => i in _ ? Ue(_, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[i] = e;
var j = (_, i, e) => Re(_, typeof i != "symbol" ? i + "" : i, e);
var F = (_, i, e) => je(Pe(_), e, i);
const { HTMLField: He, NumberField: h, SchemaField: I, StringField: f, BooleanField: N, ArrayField: qe } = foundry.data.fields;
class Ke extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new I({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new h({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new I({
        health: new I({
          value: new h({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new h({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new I({
          head: new I({
            value: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new N({ required: !1, initial: !1 }),
            box2: new N({ required: !1, initial: !1 }),
            box3: new N({ required: !1, initial: !1 })
          }),
          torso: new I({
            value: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new N({ required: !1, initial: !1 }),
            box2: new N({ required: !1, initial: !1 }),
            box3: new N({ required: !1, initial: !1 })
          }),
          arms: new I({
            value: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new N({ required: !1, initial: !1 }),
            box2: new N({ required: !1, initial: !1 }),
            box3: new N({ required: !1, initial: !1 })
          }),
          legs: new I({
            value: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new N({ required: !1, initial: !1 }),
            box2: new N({ required: !1, initial: !1 }),
            box3: new N({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new I({
          head: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new h({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new I({
          head: new h({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new h({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new h({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new h({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new I({
          value: new h({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new h({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new h({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new I({
        defense: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new h({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new I({
        deception: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new h({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new h({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new I({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new I({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new I({
        microchips: new I({
          slot1: new I({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new N({ required: !1, initial: !0 })
          }),
          slot2: new I({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new N({ required: !1, initial: !0 })
          }),
          slot3: new I({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new N({ required: !1, initial: !0 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new I({
        faji: new I({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new I({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new I({
          items: new qe(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new I({
          items: new qe(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new I({
        biography: new He({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: W, SchemaField: Be } = foundry.data.fields;
class ze extends Ke {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Be({
        body: new W({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new W({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new W({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: H, SchemaField: We, StringField: G } = foundry.data.fields;
class Ge extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new G({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new G({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new We({
        short: new H({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new H({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new H({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new H({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new H({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new H({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new G({ required: !1, blank: !0, initial: "" }),
      quantity: new H({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: J, StringField: De } = foundry.data.fields;
class Je extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new De({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new De({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new J({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new J({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new J({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Xe, StringField: Te } = foundry.data.fields;
class Qe extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Te({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Te({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Xe({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Se, Oe, _e, Le;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a kurzort / lap tetejére). */
  async render(i = !1, e = {}) {
    var s, a, u, p, b;
    const t = (s = game.votv) == null ? void 0 : s._lastPcSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 250) return this;
    const r = this.form ?? this.element;
    let o = { scrollTop: null, focus: null };
    if (r) {
      const g = document.activeElement, T = r.contains(g), L = g && (g.tagName === "INPUT" && g.type !== "checkbox" && g.type !== "radio" || g.tagName === "TEXTAREA");
      T && L && (o.focus = {
        name: g.name || null,
        id: g.id || null,
        selectionStart: "selectionStart" in g ? g.selectionStart : 0,
        selectionEnd: "selectionEnd" in g ? g.selectionEnd : 0
      });
      const y = ((a = r.closest) == null ? void 0 : a.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".votv-scroll")) ?? ((b = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : b.call(p, ".votv-scroll")) ?? (r.scrollHeight > r.clientHeight ? r : null);
      y && (o.scrollTop = y.scrollTop);
    }
    const l = await super.render(i, e), c = this.form ?? this.element, d = o.scrollTop, n = o.focus;
    return (d != null || n) && c && requestAnimationFrame(() => {
      var g, T, L, y, w, k;
      if (d != null) {
        const q = ((g = c.closest) == null ? void 0 : g.call(c, ".votv-scroll")) ?? ((T = c.querySelector) == null ? void 0 : T.call(c, ".votv-scroll")) ?? ((y = (L = this.element) == null ? void 0 : L.querySelector) == null ? void 0 : y.call(L, ".votv-scroll")) ?? (c.scrollHeight > c.clientHeight ? c : null);
        q && (q.scrollTop = d);
      }
      if ((n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const q = ((w = c.querySelector) == null ? void 0 : w.call(c, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (k = c.querySelector) == null ? void 0 : k.call(c, `[name="${CSS.escape(n.name)}"]`) : null);
        q && (q.tagName === "INPUT" || q.tagName === "TEXTAREA") && (q.focus(), typeof q.selectionStart == "number" && (q.selectionStart = n.selectionStart ?? 0, q.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
    }), l;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const o = Math.floor(r / 3), l = Math.floor(2 * r / 3);
    return t <= o ? 1 : t <= l ? 2 : 3;
  }
  async _prepareContext(i) {
    var re, ae, se, oe, le, ce, ue, de;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = this.actor.system;
    const t = this.actor.system.resources ?? {}, r = t.hitLocations ?? {}, o = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of l) {
      const v = ((re = r[m]) == null ? void 0 : re.value) ?? 0, D = o[m] ?? 0;
      e.computedHealthStatus[m] = E._healthStatusFromRatio(D, v);
    }
    const c = this.actor.system.weapons ?? {}, d = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], n = (c.slotOrder ?? "").trim(), s = n ? n.split(/\s*,\s*/).filter((m) => d.includes(m)) : [], a = (ae = this.actor.system.gear) == null ? void 0 : ae.microchips, u = a && typeof a == "object" && !Array.isArray(a) ? a : {}, p = (((se = u.slot1) == null ? void 0 : se.itemId) ?? "").trim(), b = (((oe = u.slot2) == null ? void 0 : oe.itemId) ?? "").trim(), g = (((le = u.slot3) == null ? void 0 : le.itemId) ?? "").trim(), L = this.actor.items.contents.filter((m) => m.type !== "ability").slice().sort((m, v) => {
      const D = typeof m.sort == "number" ? m.sort : 0, O = typeof v.sort == "number" ? v.sort : 0;
      return D - O;
    }).map((m) => {
      var fe, ge, ye, he, be, we, ve, Ie, ke;
      const v = m.type === "weapon", D = m.type === "microchip";
      let O = 0, A = "", x = null;
      for (let B = 0; B < s.length; B++) {
        const z = s[B];
        if ((((fe = c[z]) == null ? void 0 : fe.itemId) ?? "") === m.id) {
          O = B + 1, A = ((ge = c[z]) == null ? void 0 : ge.bonus) ?? "", x = z;
          break;
        }
      }
      let K = null;
      D && (p === m.id ? K = "slot1" : b === m.id ? K = "slot2" : g === m.id && (K = "slot3"));
      const xe = v && ((ye = m.system) != null && ye.damage) ? m.system.damage : "", me = v && ((be = (he = m.system) == null ? void 0 : he.range) == null ? void 0 : be.short) != null ? m.system.range.short : null, pe = v && ((ve = (we = m.system) == null ? void 0 : we.range) == null ? void 0 : ve.long) != null ? m.system.range.long : null, Ce = me != null && pe != null ? `${me} / ${pe} m` : "", Me = x ? Number((Ie = c[x]) == null ? void 0 : Ie.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: v,
        slotAssignment: O,
        slotBonus: A,
        slotKey: x,
        microchipSlotKey: K,
        isEquipped: !!(x || K),
        damage: xe,
        rangeStr: Ce,
        slotBonusNum: Me,
        quantity: Number(((ke = m.system) == null ? void 0 : ke.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = L;
    const y = (((ce = this.actor.items) == null ? void 0 : ce.contents) ?? []).filter((m) => m.type === "weapon"), w = y.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = w;
    const k = "— Nincs fegyver —", q = s.filter((m) => {
      const D = ((c[m] ?? {}).itemId ?? "").trim();
      return D ? !!y.find((A) => A.id === D) : !1;
    });
    e.weaponSlots = q.map((m, v) => {
      const D = c[m] ?? {}, O = (D.itemId ?? "").trim(), A = w.find((x) => x.id === O);
      return {
        slotKey: m,
        slotNum: v + 1,
        displayName: (A == null ? void 0 : A.name) || D.name || k,
        img: (A == null ? void 0 : A.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const S = (((ue = this.actor.items) == null ? void 0 : ue.contents) ?? []).filter((m) => m.type === "microchip").map((m) => ({ id: m.id, name: m.name, img: m.img })), C = "— Nincs chip —", R = (m) => {
      const v = [];
      return m !== 1 && v.push(p), m !== 2 && v.push(b), m !== 3 && v.push(g), v;
    };
    e.microchipItemsSlot1 = S.filter((m) => !R(1).includes(m.id)), e.microchipItemsSlot2 = S.filter((m) => !R(2).includes(m.id)), e.microchipItemsSlot3 = S.filter((m) => !R(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const v = `slot${m}`, D = u[v] ?? {}, O = (D.itemId ?? "").trim(), A = S.find((x) => x.id === O);
      e[`microchip${m}ItemId`] = O, e[`microchip${m}DisplayName`] = (A == null ? void 0 : A.name) || D.name || C, e[`microchip${m}Img`] = (A == null ? void 0 : A.img) || "", e[`microchip${m}Active`] = D.active === !0;
    });
    const V = this.actor.system.abilities ?? {}, Ne = (((de = this.actor.items) == null ? void 0 : de.contents) ?? []).map((m) => {
      var v, D, O;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((v = m.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((D = m.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((O = m.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), ee = new Map(Ne.map((m) => [m.id, m])), $e = "— Nincs képesség —", te = (m) => {
      const v = V[m] ?? {}, D = (v.itemId ?? "").trim(), O = D ? ee.get(D) : null, A = (O == null ? void 0 : O.description) ?? "", x = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: D,
        displayName: (O == null ? void 0 : O.name) || v.name || $e,
        img: (O == null ? void 0 : O.img) || "",
        description: A,
        kp: x
      };
    };
    e.abilityFajiSlot = te("faji"), e.abilityHatterSlot = te("hatter");
    const ie = (m) => {
      const v = V[m];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, ne = (m) => m.map((v) => {
      const D = ee.get(v);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ne(ie("passive")), e.abilityActiveList = ne(ie("active")), e;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    t.on("click", ".pc-portrait-img", (n) => {
      n.preventDefault(), n.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (s) => {
          s && this.actor.update({ img: s });
        }
      }).browse();
    }), t.on("click", ".pc-skill-label", (n) => {
      var p;
      n.preventDefault();
      const s = n.currentTarget, a = s.dataset.skill, u = ((p = s.textContent) == null ? void 0 : p.trim()) || a;
      this._rollSkill(a, u);
    });
    const r = (n, s) => {
      var p;
      const a = n.dataset.itemId;
      if (!a) return;
      const u = this.actor.items.get(a);
      if (u) {
        if (n.classList.contains("pc-weapon-label") && (s.altKey || s.shiftKey || s.ctrlKey || s.metaKey)) {
          const b = n.dataset.weaponSlot;
          b && this._rollWeapon(b);
          return;
        }
        (p = u.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".pc-inventory-item-name", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("click", ".pc-inventory-item-icon", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("change", ".pc-item-qty", async (n) => {
      const s = n.currentTarget, a = s.dataset.itemId;
      if (!a) return;
      const u = this.actor.items.get(a);
      if (!u) return;
      let p = Number(s.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await u.update({ "system.quantity": p });
    }), t.on("click", ".pc-item-delete", async (n) => {
      n.preventDefault();
      const a = n.currentTarget.dataset.itemId;
      if (!a) return;
      const u = this.actor.items.get(a), p = {};
      if ((u == null ? void 0 : u.type) === "weapon") {
        const b = this.actor.system.weapons ?? {}, g = (b.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = g ? g.split(/\s*,\s*/).filter((w) => T.includes(w)) : [], y = L.find((w) => {
          var k;
          return (((k = b[w]) == null ? void 0 : k.itemId) ?? "").trim() === a;
        });
        if (y) {
          const w = L.filter((k) => k !== y);
          p["system.weapons.slotOrder"] = w.join(","), p[`system.weapons.${y}.itemId`] = "", p[`system.weapons.${y}.name`] = "", p[`system.weapons.${y}.damage`] = "", p[`system.weapons.${y}.bonus`] = "";
        }
      }
      Object.keys(p).length && await this.actor.update(p), await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".pc-weapon-attack", async (n) => {
      n.preventDefault();
      const a = (n.currentTarget.dataset.slot ?? "").trim();
      a && await this._rollWeapon(a);
    }), t.on("click", ".pc-weapon-damage", async (n) => {
      n.preventDefault();
      const a = (n.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const b = (((this.actor.system.weapons ?? {})[a] ?? {}).itemId ?? "").trim();
      b && await this._rollWeaponDamage(b);
    }), t.on("change", ".pc-weapon-equip-toggle", async (n) => {
      var y;
      const s = n.currentTarget, a = (s.dataset.itemId ?? "").trim();
      if (!a) return;
      const u = this.actor.system.weapons ?? {}, p = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], g = p ? p.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], T = g.find((w) => {
        var k;
        return (((k = u[w]) == null ? void 0 : k.itemId) ?? "").trim() === a;
      }) ?? null;
      if (s.checked) {
        if (T) return;
        let w = g.find((C) => {
          var R;
          return !((R = u[C]) != null && R.itemId);
        });
        const k = new Set(g);
        if (!w) {
          const C = b.find((R) => !k.has(R));
          if (!C) return;
          w = C, g.push(C);
        }
        const q = this.actor.items.get(a), S = {
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: (q == null ? void 0 : q.name) ?? "",
          [`system.weapons.${w}.damage`]: ((y = q == null ? void 0 : q.system) == null ? void 0 : y.damage) ?? ""
        };
        await this.actor.update(S);
      } else if (T) {
        const k = {
          "system.weapons.slotOrder": g.filter((q) => q !== T).join(",")
        };
        k[`system.weapons.${T}.itemId`] = "", k[`system.weapons.${T}.name`] = "", k[`system.weapons.${T}.damage`] = "", k[`system.weapons.${T}.bonus`] = "", await this.actor.update(k);
      }
    }), t.on("click", ".pc-microchip-slot-display", (n) => {
      n.preventDefault();
      const s = n.currentTarget;
      if (s.disabled) return;
      const a = s.closest(".pc-microchip-slot-select-wrap"), u = a == null ? void 0 : a.classList.contains("pc-microchip-slot-open");
      t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !u && a && a.classList.add("pc-microchip-slot-open");
    }), t.on("click", ".pc-microchip-slot-option", async (n) => {
      var q;
      n.preventDefault();
      const s = n.currentTarget, a = s.closest(".pc-microchip-slot-select-wrap"), u = a == null ? void 0 : a.querySelector(".pc-microchip-slot-display"), p = u == null ? void 0 : u.dataset.slot;
      if (!p) return;
      const b = (s.dataset.itemId ?? "").trim(), g = (s.dataset.itemName ?? ((q = s.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs chip —", T = (s.dataset.itemImg ?? "").trim(), L = a == null ? void 0 : a.querySelector(".pc-microchip-slot-display-text");
      L && (L.textContent = g);
      let y = a == null ? void 0 : a.querySelector(".pc-microchip-slot-thumb");
      T ? (y || (y = document.createElement("img"), y.className = "pc-microchip-slot-thumb", y.alt = "", u == null || u.insertBefore(y, L)), y.src = T, y.style.display = "") : y && y.remove(), a == null || a.classList.remove("pc-microchip-slot-open");
      const w = b ? this.actor.items.get(b) : null, k = {
        [`system.gear.microchips.${p}.itemId`]: b,
        [`system.gear.microchips.${p}.name`]: (w == null ? void 0 : w.name) ?? ""
      };
      b && (k[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(k);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".pc-microchip-slot-select-wrap").length || t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), t.on("change", ".pc-microchip-slot-active", (n) => {
      const s = n.currentTarget.dataset.slot;
      if (!s) return;
      const a = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${s}.active`]: a });
    }), t.find(".pc-microchip-slot").each((n, s) => {
      const a = s.dataset.slot;
      s.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, a)), s.addEventListener("dragleave", (u) => {
        var p;
        return (p = u.currentTarget) == null ? void 0 : p.classList.remove("pc-microchip-slot-drag-over");
      }), s.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, a));
    }), t.find(".pc-ability-slot-single").each((n, s) => {
      const a = s.dataset.slot;
      a && (s.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, a)), s.addEventListener("dragleave", (u) => {
        var p;
        return (p = u.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-slot-drag-over");
      }), s.addEventListener("drop", (u) => this._onAbilitySingleDrop(u, a)));
    }), t.find(".pc-ability-area").each((n, s) => {
      const a = s.dataset.area;
      a && (s.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, a)), s.addEventListener("dragleave", (u) => {
        var p;
        return (p = u.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-area-drag-over");
      }), s.addEventListener("drop", (u) => this._onAbilityAreaDrop(u, a)));
    }), t.on("click", ".pc-ability-slot-clear", async (n) => {
      n.preventDefault();
      const s = n.currentTarget.dataset.slot;
      s && await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      });
    }), t.on("click", ".pc-ability-pill-remove", async (n) => {
      var g;
      n.preventDefault();
      const s = n.currentTarget.dataset.area, a = n.currentTarget.dataset.itemId;
      if (!s || !a) return;
      const u = this.actor.system.abilities ?? {}, b = (Array.isArray((g = u[s]) == null ? void 0 : g.items) ? u[s].items.slice() : []).filter((T) => T !== a);
      await this.actor.update({ [`system.abilities.${s}.items`]: b });
    }), t.on("click", ".pc-ability-open", (n) => {
      var p;
      n.preventDefault();
      const a = n.currentTarget.dataset.itemId;
      if (!a) return;
      const u = this.actor.items.get(a);
      (p = u == null ? void 0 : u.sheet) == null || p.render(!0);
    }), t.on("click", ".pc-ability-chat", async (n) => {
      n.preventDefault();
      const a = n.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.find(".pc-actions-drag-handle").each((n, s) => {
      var b, g;
      const a = s, u = a.closest(".pc-actions-row"), p = ((b = u == null ? void 0 : u.dataset) == null ? void 0 : b.itemId) ?? ((g = a.dataset) == null ? void 0 : g.itemId);
      p && a.addEventListener("dragstart", (T) => this._onInventoryDragHandleStart(T, p, u));
    }), t.find(".pc-actions-row").each((n, s) => {
      const a = s, u = a.dataset.itemId;
      u && (a.addEventListener("dragover", (p) => this._onInventoryRowDragOver(p, u)), a.addEventListener("dragleave", (p) => this._onInventoryRowDragLeave(p, u)), a.addEventListener("drop", (p) => this._onInventoryRowDrop(p, u)));
    });
    const o = t.find(".pc-actions-table")[0];
    o && (o.addEventListener("dragover", (n) => this._onInventoryAreaDragOver(n)), o.addEventListener("dragleave", (n) => this._onInventoryAreaDragLeave(n)), o.addEventListener("drop", (n) => this._onInventoryAreaDrop(n)));
    const l = this, c = (n) => {
      if (!n) return;
      const s = l._getFormDataForUpdate(n);
      Object.keys(s).length !== 0 && l.actor.update(s).catch((a) => console.warn("VoidPcSheet save failed", a));
    }, d = (n) => {
      var s, a, u;
      return n && (((a = (s = l.element) == null ? void 0 : s.contains) == null ? void 0 : a.call(s, n)) || l.id && ((u = n.closest) == null ? void 0 : u.call(n, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (n) => {
      const s = n.target;
      if (!s || !s.form) return;
      const a = s.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const u = s.form;
      d(u) && (game.votv && (game.votv._lastPcSheetBlurSave = { appId: l.id, at: Date.now() }), c(u));
    }, document.body.addEventListener("blur", l._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var c, d, n;
    const e = {};
    for (const s of i.elements) {
      if (!s.name || s.disabled || s.type === "radio" && !s.checked || s.name.startsWith("system.resources.healthStatus.")) continue;
      let a;
      s.type === "checkbox" ? a = s.checked : s.type === "number" ? a = s.value === "" ? 0 : Number(s.value) : a = s.value ?? "", foundry.utils.setProperty(e, s.name, a);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), r = t.hitLocations ?? {}, o = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const s of l) {
      const a = ((n = r[s]) == null ? void 0 : n.value) ?? 0, u = o[s] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${s}`, E._healthStatusFromRatio(u, a));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var a, u, p, b, g, T, L;
    const t = i.target, r = (a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, ".pc-ability-slot-single"), o = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".pc-ability-area");
    if (!r && !o) return super._onDropItem(i, e);
    if (!e || e.type !== "Item") return;
    const l = e.uuid ?? ((p = e.data) == null ? void 0 : p.uuid);
    if (!l) return;
    const c = await fromUuid(l);
    if (!c || c.documentName !== "Item" || c.type !== "ability") return;
    const d = (((b = c.system) == null ? void 0 : b.kind) ?? "passive").toString();
    let n = c.id;
    ((g = c.parent) == null ? void 0 : g.id) !== this.actor.id && (n = ((T = (await this.actor.createEmbeddedDocuments("Item", [c.toObject()]))[0]) == null ? void 0 : T.id) ?? n);
    const s = this.actor.system.abilities ?? {};
    if (r) {
      const y = r.dataset.slot;
      if (!y) return;
      const k = {
        faji: "species",
        hatter: "background"
      }[y];
      if (!k || d !== k) return;
      await this.actor.update({
        [`system.abilities.${y}.itemId`]: n,
        [`system.abilities.${y}.name`]: c.name
      });
      return;
    }
    if (o) {
      const y = o.dataset.area;
      if (!y) return;
      const k = {
        passive: "passive",
        active: "active"
      }[y];
      if (!k || d !== k) return;
      const q = Array.isArray((L = s[y]) == null ? void 0 : L.items) ? s[y].items.slice() : Array.isArray(s[y]) ? s[y].slice() : [];
      q.includes(n) || q.push(n), await this.actor.update({ [`system.abilities.${y}.items`]: q });
      return;
    }
  }
  _onWeaponSlotDragOver(i, e) {
    var o, l, c;
    const t = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, n, s, a, u, p;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("pc-weapon-slot-drag-over");
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const o = await fromUuid(r.uuid);
    if (!o || o.type !== "weapon") return;
    let l = o.id;
    ((a = o.parent) == null ? void 0 : a.id) !== this.actor.id && (l = ((u = (await this.actor.createEmbeddedDocuments("Item", [o.toObject()]))[0]) == null ? void 0 : u.id) ?? l);
    const c = {
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: o.name,
      [`system.weapons.${e}.damage`]: ((p = o.system) == null ? void 0 : p.damage) ?? ""
    };
    await this.actor.update(c);
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (r = i.currentTarget) == null || r.classList.add("pc-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("pc-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var n, s;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("pc-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const o = this.actor.items.contents.slice().sort((a, u) => {
      const p = typeof a.sort == "number" ? a.sort : 0, b = typeof u.sort == "number" ? u.sort : 0;
      return p - b;
    }).map((a) => a.id), l = o.indexOf(t), c = o.indexOf(e);
    if (l === -1 || c === -1) return;
    o.splice(l, 1), o.splice(c, 0, t);
    const d = o.map((a, u) => ({
      _id: a,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(i) {
    var r, o, l;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("pc-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("pc-actions-table-drag-over");
  }
  _onInventoryAreaDrop(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("pc-actions-table-drag-over");
  }
  async _postAbilityToChat(i) {
    var s, a, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", r = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, o = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", d = o ? `<p>${o}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${c}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var t, r, o, l;
    const e = ((t = i.dataTransfer) == null ? void 0 : t.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const c = e.trim();
      if (c.includes(".") && !c.startsWith("{"))
        return { uuid: c };
      try {
        const d = JSON.parse(c);
        return d != null && d.uuid ? d : (o = d == null ? void 0 : d.data) != null && o.uuid ? { uuid: d.data.uuid } : null;
      } catch {
        return console.warn("VOTV | _parseAbilityDrop: could not parse drag data string", e), null;
      }
    }
    return e != null && e.uuid ? e : (l = e == null ? void 0 : e.data) != null && l.uuid ? { uuid: e.data.uuid } : null;
  }
  _onAbilitySingleDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-slot-drag-over");
  }
  async _onAbilitySingleDrop(i, e) {
    var n, s, a, u;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("pc-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "ability") return;
    const o = (((s = r.system) == null ? void 0 : s.kind) ?? "passive").toString(), c = {
      faji: "species",
      hatter: "background"
    }[e];
    if (!c || o !== c) return;
    let d = r.id;
    ((a = r.parent) == null ? void 0 : a.id) !== this.actor.id && (d = ((u = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : u.id) ?? d), await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(i, e) {
    var a, u, p, b, g;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("pc-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "ability") return;
    const o = (((u = r.system) == null ? void 0 : u.kind) ?? "passive").toString(), c = {
      passive: "passive",
      active: "active"
    }[e];
    if (!c || o !== c) return;
    let d = r.id;
    ((p = r.parent) == null ? void 0 : p.id) !== this.actor.id && (d = ((b = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : b.id) ?? d);
    const n = this.actor.system.abilities ?? {}, s = Array.isArray((g = n[e]) == null ? void 0 : g.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    s.includes(d) || s.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: s });
  }
  _onMicrochipSlotDragOver(i, e) {
    var o, l, c;
    const t = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var c, d, n, s, a;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("pc-microchip-slot-drag-over");
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const o = await fromUuid(r.uuid);
    if (!o || o.type !== "microchip") return;
    let l = o.id;
    ((s = o.parent) == null ? void 0 : s.id) !== this.actor.id && (l = ((a = (await this.actor.createEmbeddedDocuments("Item", [o.toObject()]))[0]) == null ? void 0 : a.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: o.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const r = (this.actor.system.skills ?? {})[i] ?? 0, o = Number(r) || 0, c = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, d = new Roll(c);
    await d.evaluate({ async: !0 });
    const n = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: n } },
      rollMode: s
    });
  }
  async _rollWeapon(i) {
    var y;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, o = this.actor.items.filter((w) => w.type === "weapon");
    let l = null;
    t.itemId && (l = o.find((w) => w.id === t.itemId) ?? null);
    const c = l && l.name || t.name || `Fegyver (${i})`, d = Number(t.bonus || 0) || 0, s = (((y = l == null ? void 0 : l.system) == null ? void 0 : y.type) || "light") === "thrown" ? "grenadeUse" : "firearms", a = Number(r[s] || 0) || 0, u = d + a, b = `3d6${u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""}`, g = new Roll(b);
    await g.evaluate({ async: !0 });
    const T = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, L = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: T } },
      rollMode: L
    });
  }
  async _rollWeaponDamage(i) {
    var l;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "weapon") return;
    const t = (((l = e.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!t) return;
    const r = new Roll(t);
    await r.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }
};
j(E, "PARTS", foundry.utils.mergeObject(F(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), j(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Se = F(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Se.form) ?? {}, { submitOnChange: !0 }),
  window: foundry.utils.mergeObject(((Oe = F(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Oe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Le = (_e = F(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : _e.window) == null ? void 0 : Le.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let X = E;
var Ae;
const M = class M extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (o) => {
      if (!o) return;
      const l = e._getFormDataForUpdate(o);
      Object.keys(l).length !== 0 && e.document.update(l).catch((c) => console.warn("VoidWeaponSheet save failed", c));
    }, r = (o) => {
      var l, c, d;
      return o && (((c = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && t(l);
    }, e._votvInput = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(M, "PARTS", foundry.utils.mergeObject(F(M, M, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), j(M, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(M, M, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ae = F(M, M, "DEFAULT_OPTIONS")) == null ? void 0 : Ae.form) ?? {}, { submitOnChange: !0 })
}));
let Q = M;
var Ee;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (o) => {
      if (!o) return;
      const l = e._getFormDataForUpdate(o);
      Object.keys(l).length !== 0 && e.document.update(l).catch((c) => console.warn("VoidMicrochipSheet save failed", c));
    }, r = (o) => {
      var l, c, d;
      return o && (((c = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && t(l);
    }, e._votvInput = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(U, "PARTS", foundry.utils.mergeObject(F(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), j(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ee = F(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ee.form) ?? {}, { submitOnChange: !0 })
}));
let Y = U;
var Fe;
const P = class P extends foundry.applications.api.HandlebarsApplicationMixin(
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
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (o) => {
      if (!o) return;
      const l = e._getFormDataForUpdate(o);
      Object.keys(l).length !== 0 && e.document.update(l).catch((c) => console.warn("VoidAbilitySheet save failed", c));
    }, r = (o) => {
      var l, c, d;
      return o && (((c = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && t(l);
    }, e._votvInput = (o) => {
      var c, d, n;
      const l = ((c = o.target) == null ? void 0 : c.form) ?? ((n = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : n.call(d, "form"));
      r(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(P, "PARTS", foundry.utils.mergeObject(F(P, P, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), j(P, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(P, P, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fe = F(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : Fe.form) ?? {}, { submitOnChange: !0 })
}));
let Z = P;
const Ye = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var _, i, e, t;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (_ = CONFIG.Actor).dataModels ?? (_.dataModels = {}), CONFIG.Actor.dataModels.pc = ze, (i = CONFIG.Item).dataModels ?? (i.dataModels = {}), CONFIG.Item.dataModels.weapon = Ge, CONFIG.Item.dataModels.microchip = Je, CONFIG.Item.dataModels.ability = Qe, (e = CONFIG.Actor).trackableAttributes ?? (e.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.pc = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (t = CONFIG.Actor).typeLabels ?? (t.typeLabels = {}), CONFIG.Actor.typeLabels.pc = "Player Character", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", X, {
    types: ["pc"],
    makeDefault: !0,
    label: "VOTV.PcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Q, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Y, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Z, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  }), Hooks.on("updateActor", (r, o, l, c) => {
    var L, y, w, k, q;
    const d = r == null ? void 0 : r.id;
    if (!d) return;
    const n = document.activeElement, s = n && (n.tagName === "INPUT" && n.type !== "checkbox" && n.type !== "radio" || n.tagName === "TEXTAREA" || n.isContentEditable), a = [], u = (L = game.actors) == null ? void 0 : L.get(d);
    u != null && u.apps && a.push(...u.apps);
    const p = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of p)
      ((y = S.document) == null ? void 0 : y.id) !== d || ((w = S.document) == null ? void 0 : w.documentName) !== "Actor" || ((k = S.constructor) == null ? void 0 : k.name) !== "VoidPcSheet" || a.includes(S) || a.push(S);
    if (s && a.some((S) => {
      const C = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return C && C.contains(n);
    })) return;
    const g = (q = game.votv) == null ? void 0 : q._lastPcSheetBlurSave, T = g && Date.now() - g.at < 250 ? g.appId : null;
    setTimeout(() => {
      for (const S of a)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== T && S.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (_) => {
      var r, o, l, c, d, n;
      if (!((o = (r = _.target) == null ? void 0 : r.closest) != null && o.call(r, "#actors"))) return;
      const i = (c = (l = _.target) == null ? void 0 : l.closest) == null ? void 0 : c.call(l, "[data-document-id]"), e = (d = i == null ? void 0 : i.getAttribute) == null ? void 0 : d.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((n = game.actors) != null && n.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (_, i, e) => {
  var l, c;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, r = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const o = r ? (c = game.actors) == null ? void 0 : c.get(r) : null;
  !o || o.type !== "pc" || _.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (_, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || _.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Ye,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (_, i, e) => {
  var o, l, c;
  const t = (l = (o = _.flags) == null ? void 0 : o["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const r = (c = i == null ? void 0 : i.querySelector) == null ? void 0 : c.call(i, ".dice-roll");
  r && r.classList.add(`votv-${t}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
