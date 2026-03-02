var Ue = Object.defineProperty;
var Pe = Object.getPrototypeOf;
var je = Reflect.get;
var He = (_, i, e) => i in _ ? Ue(_, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[i] = e;
var H = (_, i, e) => He(_, typeof i != "symbol" ? i + "" : i, e);
var x = (_, i, e) => je(Pe(_), e, i);
const { HTMLField: Re, NumberField: I, SchemaField: D, StringField: g, BooleanField: C, ArrayField: De } = foundry.data.fields;
class Ke extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new I({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
      }),
      resources: new D({
        health: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new D({
          head: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new C({ required: !1, initial: !1 }),
            box2: new C({ required: !1, initial: !1 }),
            box3: new C({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new C({ required: !1, initial: !1 }),
            box2: new C({ required: !1, initial: !1 }),
            box3: new C({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new C({ required: !1, initial: !1 }),
            box2: new C({ required: !1, initial: !1 }),
            box3: new C({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new C({ required: !1, initial: !1 }),
            box2: new C({ required: !1, initial: !1 }),
            box3: new C({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new D({
          head: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new D({
          head: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new D({
        defense: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new D({
        deception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new D({
        slotOrder: new g({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new D({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new D({
        microchips: new D({
          slot1: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new C({ required: !1, initial: !0 })
          }),
          slot2: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new C({ required: !1, initial: !0 })
          }),
          slot3: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new C({ required: !1, initial: !0 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new D({
        faji: new D({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new D({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        passive: new D({
          items: new De(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new De(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new D({
        biography: new Re({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: X, SchemaField: Be } = foundry.data.fields;
class ze extends Ke {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Be({
        body: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: B, SchemaField: We, StringField: Q } = foundry.data.fields;
class Ge extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new Q({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new Q({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new We({
        short: new B({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new B({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new B({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new B({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new B({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new B({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new Q({ required: !1, blank: !0, initial: "" }),
      quantity: new B({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Y, StringField: Te } = foundry.data.fields;
class Je extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Te({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Te({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Y({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Y({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Y({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Xe, StringField: Se } = foundry.data.fields;
class Qe extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Se({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Se({
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
var Oe, _e, Le, Ae;
const F = class F extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a kurzort / lap tetejére). */
  async render(i = !1, e = {}) {
    var y, h, a, o, c;
    const t = (y = game.votv) == null ? void 0 : y._lastPcSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 250) return this;
    const n = this.form ?? this.element;
    let r = { scrollTop: null, focus: null };
    if (n) {
      const u = document.activeElement, f = n.contains(u), v = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      f && v && (r.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
      const b = ((h = n.closest) == null ? void 0 : h.call(n, ".votv-scroll")) ?? ((a = n.querySelector) == null ? void 0 : a.call(n, ".votv-scroll")) ?? ((c = (o = this.element) == null ? void 0 : o.querySelector) == null ? void 0 : c.call(o, ".votv-scroll")) ?? (n.scrollHeight > n.clientHeight ? n : null);
      b && (r.scrollTop = b.scrollTop);
    }
    const l = await super.render(i, e), s = this.form ?? this.element, d = r.scrollTop, m = r.focus;
    return (d != null || m) && s && requestAnimationFrame(() => {
      var u, f, v, b, T, A;
      if (d != null) {
        const k = ((u = s.closest) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".votv-scroll")) ?? ((b = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".votv-scroll")) ?? (s.scrollHeight > s.clientHeight ? s : null);
        k && (k.scrollTop = d);
      }
      if ((m == null ? void 0 : m.name) != null || (m == null ? void 0 : m.id) != null) {
        const k = ((T = s.querySelector) == null ? void 0 : T.call(s, m.id ? `#${CSS.escape(m.id)}` : null)) ?? (m.name ? (A = s.querySelector) == null ? void 0 : A.call(s, `[name="${CSS.escape(m.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus(), typeof k.selectionStart == "number" && (k.selectionStart = m.selectionStart ?? 0, k.selectionEnd = m.selectionEnd ?? m.selectionStart ?? 0));
      }
    }), l;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const r = Math.floor(n / 3), l = Math.floor(2 * n / 3);
    return t <= r ? 1 : t <= l ? 2 : 3;
  }
  async _prepareContext(i) {
    var ae, se, oe, le, ce, ue, de, me;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = this.actor.system;
    const t = this.actor.system.resources ?? {}, n = t.hitLocations ?? {}, r = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of l) {
      const q = ((ae = n[p]) == null ? void 0 : ae.value) ?? 0, S = r[p] ?? 0;
      e.computedHealthStatus[p] = F._healthStatusFromRatio(S, q);
    }
    const s = this.actor.system.weapons ?? {}, d = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], m = (s.slotOrder ?? "").trim(), y = m ? m.split(/\s*,\s*/).filter((p) => d.includes(p)) : [], h = (se = this.actor.system.gear) == null ? void 0 : se.microchips, a = h && typeof h == "object" && !Array.isArray(h) ? h : {}, o = (((oe = a.slot1) == null ? void 0 : oe.itemId) ?? "").trim(), c = (((le = a.slot2) == null ? void 0 : le.itemId) ?? "").trim(), u = (((ce = a.slot3) == null ? void 0 : ce.itemId) ?? "").trim(), v = this.actor.items.contents.filter((p) => p.type !== "ability").slice().sort((p, q) => {
      const S = typeof p.sort == "number" ? p.sort : 0, O = typeof q.sort == "number" ? q.sort : 0;
      return S - O;
    }).map((p) => {
      var ge, ye, he, be, we, ve, Ie, ke, qe;
      const q = p.type === "weapon", S = p.type === "microchip";
      let O = 0, E = "", M = null;
      for (let G = 0; G < y.length; G++) {
        const J = y[G];
        if ((((ge = s[J]) == null ? void 0 : ge.itemId) ?? "") === p.id) {
          O = G + 1, E = ((ye = s[J]) == null ? void 0 : ye.bonus) ?? "", M = J;
          break;
        }
      }
      let z = null;
      S && (o === p.id ? z = "slot1" : c === p.id ? z = "slot2" : u === p.id && (z = "slot3"));
      const xe = q && ((he = p.system) != null && he.damage) ? p.system.damage : "", pe = q && ((we = (be = p.system) == null ? void 0 : be.range) == null ? void 0 : we.short) != null ? p.system.range.short : null, fe = q && ((Ie = (ve = p.system) == null ? void 0 : ve.range) == null ? void 0 : Ie.long) != null ? p.system.range.long : null, Ce = pe != null && fe != null ? `${pe} / ${fe} m` : "", Me = M ? Number((ke = s[M]) == null ? void 0 : ke.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: q,
        slotAssignment: O,
        slotBonus: E,
        slotKey: M,
        microchipSlotKey: z,
        isEquipped: !!(M || z),
        damage: xe,
        rangeStr: Ce,
        slotBonusNum: Me,
        quantity: Number(((qe = p.system) == null ? void 0 : qe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = v;
    const b = (((ue = this.actor.items) == null ? void 0 : ue.contents) ?? []).filter((p) => p.type === "weapon"), T = b.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = T;
    const A = "— Nincs fegyver —", k = y.filter((p) => {
      const S = ((s[p] ?? {}).itemId ?? "").trim();
      return S ? !!b.find((E) => E.id === S) : !1;
    });
    e.weaponSlots = k.map((p, q) => {
      const S = s[p] ?? {}, O = (S.itemId ?? "").trim(), E = T.find((M) => M.id === O);
      return {
        slotKey: p,
        slotNum: q + 1,
        displayName: (E == null ? void 0 : E.name) || S.name || A,
        img: (E == null ? void 0 : E.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const w = (((de = this.actor.items) == null ? void 0 : de.contents) ?? []).filter((p) => p.type === "microchip").map((p) => ({ id: p.id, name: p.name, img: p.img })), L = "— Nincs chip —", N = (p) => {
      const q = [];
      return p !== 1 && q.push(o), p !== 2 && q.push(c), p !== 3 && q.push(u), q;
    };
    e.microchipItemsSlot1 = w.filter((p) => !N(1).includes(p.id)), e.microchipItemsSlot2 = w.filter((p) => !N(2).includes(p.id)), e.microchipItemsSlot3 = w.filter((p) => !N(3).includes(p.id)), ["1", "2", "3"].forEach((p) => {
      const q = `slot${p}`, S = a[q] ?? {}, O = (S.itemId ?? "").trim(), E = w.find((M) => M.id === O);
      e[`microchip${p}ItemId`] = O, e[`microchip${p}DisplayName`] = (E == null ? void 0 : E.name) || S.name || L, e[`microchip${p}Img`] = (E == null ? void 0 : E.img) || "", e[`microchip${p}Active`] = S.active === !0;
    });
    const W = this.actor.system.abilities ?? {}, R = (((me = this.actor.items) == null ? void 0 : me.contents) ?? []).map((p) => {
      var q, S, O;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((q = p.system) == null ? void 0 : q.kind) ?? "passive",
        description: ((S = p.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((O = p.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), K = new Map(R.map((p) => [p.id, p])), $e = "— Nincs képesség —", ie = (p) => {
      const q = W[p] ?? {}, S = (q.itemId ?? "").trim(), O = S ? K.get(S) : null, E = (O == null ? void 0 : O.description) ?? "", M = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: S,
        displayName: (O == null ? void 0 : O.name) || q.name || $e,
        img: (O == null ? void 0 : O.img) || "",
        description: E,
        kp: M
      };
    };
    e.abilityFajiSlot = ie("faji"), e.abilityHatterSlot = ie("hatter");
    const ne = (p) => {
      const q = W[p];
      return q ? Array.isArray(q == null ? void 0 : q.items) ? q.items : Array.isArray(q) ? q : [] : [];
    }, re = (p) => p.map((q) => {
      const S = K.get(q);
      return S ? {
        id: S.id,
        name: S.name,
        img: S.img,
        description: S.description,
        kp: S.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = re(ne("passive")), e.abilityActiveList = re(ne("active")), e;
  }
  _attachFrameListeners(i) {
    var h;
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const n = (a) => {
      var f, v;
      const o = a ? a.currentTarget : (f = e.querySelector) == null ? void 0 : f.call(e, 'input[name="system.resources.stress.value"]'), c = (v = o == null ? void 0 : o.closest) == null ? void 0 : v.call(o, ".pc-resource-stress");
      if (!c) return;
      const u = Number(o == null ? void 0 : o.value) || 0;
      c.classList.toggle("pc-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const r = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    r && n({ currentTarget: r }), t.on("click", ".pc-portrait-img", (a) => {
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".pc-skill-label", (a) => {
      var f;
      a.preventDefault();
      const o = a.currentTarget, c = o.dataset.skill, u = ((f = o.textContent) == null ? void 0 : f.trim()) || c;
      this._rollSkill(c, u);
    });
    const l = (a, o) => {
      var f;
      const c = a.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (u) {
        if (a.classList.contains("pc-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const v = a.dataset.weaponSlot;
          v && this._rollWeapon(v);
          return;
        }
        (f = u.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".pc-inventory-item-name", (a) => {
      a.preventDefault(), l(a.currentTarget, a);
    }), t.on("click", ".pc-inventory-item-icon", (a) => {
      a.preventDefault(), l(a.currentTarget, a);
    }), t.on("change", ".pc-item-qty", async (a) => {
      const o = a.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u) return;
      let f = Number(o.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await u.update({ "system.quantity": f });
    }), t.on("click", ".pc-item-delete", async (a) => {
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c), f = {};
      if ((u == null ? void 0 : u.type) === "weapon") {
        const v = this.actor.system.weapons ?? {}, b = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = b ? b.split(/\s*,\s*/).filter((w) => T.includes(w)) : [], k = A.find((w) => {
          var L;
          return (((L = v[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
        });
        if (k) {
          const w = A.filter((L) => L !== k);
          f["system.weapons.slotOrder"] = w.join(","), f[`system.weapons.${k}.itemId`] = "", f[`system.weapons.${k}.name`] = "", f[`system.weapons.${k}.damage`] = "", f[`system.weapons.${k}.bonus`] = "";
        }
      }
      Object.keys(f).length && await this.actor.update(f), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".pc-weapon-attack", async (a) => {
      a.preventDefault();
      const c = (a.currentTarget.dataset.slot ?? "").trim();
      c && await this._rollWeapon(c);
    }), t.on("click", ".pc-weapon-damage", async (a) => {
      a.preventDefault();
      const c = (a.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const v = (((this.actor.system.weapons ?? {})[c] ?? {}).itemId ?? "").trim();
      v && await this._rollWeaponDamage(v);
    }), t.on("change", ".pc-weapon-equip-toggle", async (a) => {
      var k;
      const o = a.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const u = this.actor.system.weapons ?? {}, f = (u.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = f ? f.split(/\s*,\s*/).filter((w) => v.includes(w)) : [], T = b.find((w) => {
        var L;
        return (((L = u[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let w = b.find((R) => {
          var K;
          return !((K = u[R]) != null && K.itemId);
        });
        const L = new Set(b);
        if (!w) {
          const R = v.find((K) => !L.has(K));
          if (!R) return;
          w = R, b.push(R);
        }
        const N = this.actor.items.get(c), W = {
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (N == null ? void 0 : N.name) ?? "",
          [`system.weapons.${w}.damage`]: ((k = N == null ? void 0 : N.system) == null ? void 0 : k.damage) ?? ""
        };
        await this.actor.update(W);
      } else if (T) {
        const L = {
          "system.weapons.slotOrder": b.filter((N) => N !== T).join(",")
        };
        L[`system.weapons.${T}.itemId`] = "", L[`system.weapons.${T}.name`] = "", L[`system.weapons.${T}.damage`] = "", L[`system.weapons.${T}.bonus`] = "", await this.actor.update(L);
      }
    }), t.on("click", ".pc-microchip-slot-display", (a) => {
      a.preventDefault();
      const o = a.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".pc-microchip-slot-select-wrap"), u = c == null ? void 0 : c.classList.contains("pc-microchip-slot-open");
      t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !u && c && c.classList.add("pc-microchip-slot-open");
    }), t.on("click", ".pc-microchip-slot-option", async (a) => {
      var N;
      a.preventDefault();
      const o = a.currentTarget, c = o.closest(".pc-microchip-slot-select-wrap"), u = c == null ? void 0 : c.querySelector(".pc-microchip-slot-display"), f = u == null ? void 0 : u.dataset.slot;
      if (!f) return;
      const v = (o.dataset.itemId ?? "").trim(), b = (o.dataset.itemName ?? ((N = o.textContent) == null ? void 0 : N.trim()) ?? "").trim() || "— Nincs chip —", T = (o.dataset.itemImg ?? "").trim(), A = c == null ? void 0 : c.querySelector(".pc-microchip-slot-display-text");
      A && (A.textContent = b);
      let k = c == null ? void 0 : c.querySelector(".pc-microchip-slot-thumb");
      T ? (k || (k = document.createElement("img"), k.className = "pc-microchip-slot-thumb", k.alt = "", u == null || u.insertBefore(k, A)), k.src = T, k.style.display = "") : k && k.remove(), c == null || c.classList.remove("pc-microchip-slot-open");
      const w = v ? this.actor.items.get(v) : null, L = {
        [`system.gear.microchips.${f}.itemId`]: v,
        [`system.gear.microchips.${f}.name`]: (w == null ? void 0 : w.name) ?? ""
      };
      v && (L[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(L);
    }), $(document).on("click.votv-microchip-dropdown", (a) => {
      $(a.target).closest(".pc-microchip-slot-select-wrap").length || t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), t.on("change", ".pc-microchip-slot-active", (a) => {
      const o = a.currentTarget.dataset.slot;
      if (!o) return;
      const c = a.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: c });
    }), t.find(".pc-microchip-slot").each((a, o) => {
      const c = o.dataset.slot;
      o.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, c)), o.addEventListener("dragleave", (u) => {
        var f;
        return (f = u.currentTarget) == null ? void 0 : f.classList.remove("pc-microchip-slot-drag-over");
      }), o.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, c));
    }), t.find(".pc-ability-slot-single").each((a, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, c)), o.addEventListener("dragleave", (u) => {
        var f;
        return (f = u.currentTarget) == null ? void 0 : f.classList.remove("pc-ability-slot-drag-over");
      }), o.addEventListener("drop", (u) => this._onAbilitySingleDrop(u, c)));
    }), t.find(".pc-ability-area").each((a, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, c)), o.addEventListener("dragleave", (u) => {
        var f;
        return (f = u.currentTarget) == null ? void 0 : f.classList.remove("pc-ability-area-drag-over");
      }), o.addEventListener("drop", (u) => this._onAbilityAreaDrop(u, c)));
    }), t.on("click", ".pc-ability-slot-clear", async (a) => {
      a.preventDefault();
      const o = a.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".pc-ability-pill-remove", async (a) => {
      var b;
      a.preventDefault();
      const o = a.currentTarget.dataset.area, c = a.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const u = this.actor.system.abilities ?? {}, v = (Array.isArray((b = u[o]) == null ? void 0 : b.items) ? u[o].items.slice() : []).filter((T) => T !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: v });
    }), t.on("click", ".pc-ability-open", (a) => {
      var f;
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      (f = u == null ? void 0 : u.sheet) == null || f.render(!0);
    }), t.on("click", ".pc-ability-chat", async (a) => {
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.find(".pc-actions-drag-handle").each((a, o) => {
      var v, b;
      const c = o, u = c.closest(".pc-actions-row"), f = ((v = u == null ? void 0 : u.dataset) == null ? void 0 : v.itemId) ?? ((b = c.dataset) == null ? void 0 : b.itemId);
      f && c.addEventListener("dragstart", (T) => this._onInventoryDragHandleStart(T, f, u));
    }), t.find(".pc-actions-row").each((a, o) => {
      const c = o, u = c.dataset.itemId;
      u && (c.addEventListener("dragover", (f) => this._onInventoryRowDragOver(f, u)), c.addEventListener("dragleave", (f) => this._onInventoryRowDragLeave(f, u)), c.addEventListener("drop", (f) => this._onInventoryRowDrop(f, u)));
    });
    const s = t.find(".pc-actions-table")[0];
    s && (s.addEventListener("dragover", (a) => this._onInventoryAreaDragOver(a)), s.addEventListener("dragleave", (a) => this._onInventoryAreaDragLeave(a)), s.addEventListener("drop", (a) => this._onInventoryAreaDrop(a)));
    const d = this, m = (a) => {
      if (!a) return;
      const o = d._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && d.actor.update(o).catch((c) => console.warn("VoidPcSheet save failed", c));
    }, y = (a) => {
      var o, c, u;
      return a && (((c = (o = d.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, a)) || d.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (a) => {
      const o = a.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const u = o.form;
      y(u) && (game.votv && (game.votv._lastPcSheetBlurSave = { appId: d.id, at: Date.now() }), m(u));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var s, d, m;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((s = this.actor.system) == null ? void 0 : s.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, r = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const y of l) {
      const h = ((m = n[y]) == null ? void 0 : m.value) ?? 0, a = r[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, F._healthStatusFromRatio(a, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var h, a, o, c, u, f, v;
    const t = i.target, n = (h = t == null ? void 0 : t.closest) == null ? void 0 : h.call(t, ".pc-ability-slot-single"), r = (a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, ".pc-ability-area");
    if (!n && !r) return super._onDropItem(i, e);
    if (!e || e.type !== "Item") return;
    const l = e.uuid ?? ((o = e.data) == null ? void 0 : o.uuid);
    if (!l) return;
    const s = await fromUuid(l);
    if (!s || s.documentName !== "Item" || s.type !== "ability") return;
    const d = (((c = s.system) == null ? void 0 : c.kind) ?? "passive").toString();
    let m = s.id;
    ((u = s.parent) == null ? void 0 : u.id) !== this.actor.id && (m = ((f = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : f.id) ?? m);
    const y = this.actor.system.abilities ?? {};
    if (n) {
      const b = n.dataset.slot;
      if (!b) return;
      const A = {
        faji: "species",
        hatter: "background"
      }[b];
      if (!A || d !== A) return;
      await this.actor.update({
        [`system.abilities.${b}.itemId`]: m,
        [`system.abilities.${b}.name`]: s.name
      });
      return;
    }
    if (r) {
      const b = r.dataset.area;
      if (!b) return;
      const A = {
        passive: "passive",
        active: "active"
      }[b];
      if (!A || d !== A) return;
      const k = Array.isArray((v = y[b]) == null ? void 0 : v.items) ? y[b].items.slice() : Array.isArray(y[b]) ? y[b].slice() : [];
      k.includes(m) || k.push(m), await this.actor.update({ [`system.abilities.${b}.items`]: k });
      return;
    }
  }
  _onWeaponSlotDragOver(i, e) {
    var r, l, s;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, m, y, h, a, o;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("pc-weapon-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const r = await fromUuid(n.uuid);
    if (!r || r.type !== "weapon") return;
    let l = r.id;
    ((h = r.parent) == null ? void 0 : h.id) !== this.actor.id && (l = ((a = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : a.id) ?? l);
    const s = {
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((o = r.system) == null ? void 0 : o.damage) ?? ""
    };
    await this.actor.update(s);
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var n;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (n = i.currentTarget) == null || n.classList.add("pc-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("pc-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var m, y;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("pc-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const r = this.actor.items.contents.slice().sort((h, a) => {
      const o = typeof h.sort == "number" ? h.sort : 0, c = typeof a.sort == "number" ? a.sort : 0;
      return o - c;
    }).map((h) => h.id), l = r.indexOf(t), s = r.indexOf(e);
    if (l === -1 || s === -1) return;
    r.splice(l, 1), r.splice(s, 0, t);
    const d = r.map((h, a) => ({
      _id: h,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(i) {
    var n, r, l;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var y, h, a;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, r = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", s = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = r ? `<p>${r}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${s}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var t, n, r, l;
    const e = ((t = i.dataTransfer) == null ? void 0 : t.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const s = e.trim();
      if (s.includes(".") && !s.startsWith("{"))
        return { uuid: s };
      try {
        const d = JSON.parse(s);
        return d != null && d.uuid ? d : (r = d == null ? void 0 : d.data) != null && r.uuid ? { uuid: d.data.uuid } : null;
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
    var m, y, h, a;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("pc-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "ability") return;
    const r = (((y = n.system) == null ? void 0 : y.kind) ?? "passive").toString(), s = {
      faji: "species",
      hatter: "background"
    }[e];
    if (!s || r !== s) return;
    let d = n.id;
    ((h = n.parent) == null ? void 0 : h.id) !== this.actor.id && (d = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? d), await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(i, e) {
    var h, a, o, c, u;
    i.preventDefault(), (h = i.currentTarget) == null || h.classList.remove("pc-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "ability") return;
    const r = (((a = n.system) == null ? void 0 : a.kind) ?? "passive").toString(), s = {
      passive: "passive",
      active: "active"
    }[e];
    if (!s || r !== s) return;
    let d = n.id;
    ((o = n.parent) == null ? void 0 : o.id) !== this.actor.id && (d = ((c = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : c.id) ?? d);
    const m = this.actor.system.abilities ?? {}, y = Array.isArray((u = m[e]) == null ? void 0 : u.items) ? m[e].items.slice() : Array.isArray(m[e]) ? m[e].slice() : [];
    y.includes(d) || y.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: y });
  }
  _onMicrochipSlotDragOver(i, e) {
    var r, l, s;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var s, d, m, y, h;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("pc-microchip-slot-drag-over");
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const r = await fromUuid(n.uuid);
    if (!r || r.type !== "microchip") return;
    let l = r.id;
    ((y = r.parent) == null ? void 0 : y.id) !== this.actor.id && (l = ((h = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : h.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0, r = Number(n) || 0, s = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, d = new Roll(s);
    await d.evaluate({ async: !0 });
    const m = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: y
    });
  }
  async _rollWeapon(i) {
    var b;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, r = this.actor.items.filter((T) => T.type === "weapon");
    let l = null;
    t.itemId && (l = r.find((T) => T.id === t.itemId) ?? null);
    const s = l && l.name || t.name || `Fegyver (${i})`, d = Number(t.bonus || 0) || 0, y = (((b = l == null ? void 0 : l.system) == null ? void 0 : b.type) || "light") === "thrown" ? "grenadeUse" : "firearms", h = Number(n[y] || 0) || 0, a = d + h, c = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, u = new Roll(c);
    await u.evaluate({ async: !0 });
    const f = u.total >= 18 ? "critical" : u.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${s} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f } },
      rollMode: v
    });
  }
  async _rollWeaponDamage(i) {
    var l;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "weapon") return;
    const t = (((l = e.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!t) return;
    const n = new Roll(t);
    await n.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }
};
H(F, "PARTS", foundry.utils.mergeObject(x(F, F, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), H(F, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(F, F, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Oe = x(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Oe.form) ?? {}, { submitOnChange: !0 }),
  window: foundry.utils.mergeObject(((_e = x(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : _e.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ae = (Le = x(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Le.window) == null ? void 0 : Ae.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let Z = F;
var Ee;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((s) => console.warn("VoidWeaponSheet save failed", s));
    }, n = (r) => {
      var l, s, d;
      return r && (((s = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : s.call(l, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && t(l);
    }, e._votvInput = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
H(U, "PARTS", foundry.utils.mergeObject(x(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), H(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ee = x(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Ee.form) ?? {}, { submitOnChange: !0 })
}));
let V = U;
var Fe;
const P = class P extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((s) => console.warn("VoidMicrochipSheet save failed", s));
    }, n = (r) => {
      var l, s, d;
      return r && (((s = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : s.call(l, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && t(l);
    }, e._votvInput = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
H(P, "PARTS", foundry.utils.mergeObject(x(P, P, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), H(P, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(P, P, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fe = x(P, P, "DEFAULT_OPTIONS")) == null ? void 0 : Fe.form) ?? {}, { submitOnChange: !0 })
}));
let ee = P;
var Ne;
const j = class j extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((s) => console.warn("VoidAbilitySheet save failed", s));
    }, n = (r) => {
      var l, s, d;
      return r && (((s = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : s.call(l, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && t(l);
    }, e._votvInput = (r) => {
      var s, d, m;
      const l = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      n(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
H(j, "PARTS", foundry.utils.mergeObject(x(j, j, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), H(j, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(j, j, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ne = x(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Ne.form) ?? {}, { submitOnChange: !0 })
}));
let te = j;
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
  }, (t = CONFIG.Actor).typeLabels ?? (t.typeLabels = {}), CONFIG.Actor.typeLabels.pc = "Player Character", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Z, {
    types: ["pc"],
    makeDefault: !0,
    label: "VOTV.PcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", V, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ee, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", te, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  }), Hooks.on("updateActor", (n, r, l, s) => {
    var v, b, T, A, k;
    const d = n == null ? void 0 : n.id;
    if (!d) return;
    const m = document.activeElement, y = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA" || m.isContentEditable), h = [], a = (v = game.actors) == null ? void 0 : v.get(d);
    a != null && a.apps && h.push(...a.apps);
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of o)
      ((b = w.document) == null ? void 0 : b.id) !== d || ((T = w.document) == null ? void 0 : T.documentName) !== "Actor" || ((A = w.constructor) == null ? void 0 : A.name) !== "VoidPcSheet" || h.includes(w) || h.push(w);
    if (y && h.some((w) => {
      const L = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return L && L.contains(m);
    })) return;
    const u = (k = game.votv) == null ? void 0 : k._lastPcSheetBlurSave, f = u && Date.now() - u.at < 250 ? u.appId : null;
    setTimeout(() => {
      for (const w of h)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== f && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (_) => {
      var n, r, l, s, d, m;
      if (!((r = (n = _.target) == null ? void 0 : n.closest) != null && r.call(n, "#actors"))) return;
      const i = (s = (l = _.target) == null ? void 0 : l.closest) == null ? void 0 : s.call(l, "[data-document-id]"), e = (d = i == null ? void 0 : i.getAttribute) == null ? void 0 : d.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((m = game.actors) != null && m.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (_, i, e) => {
  var l, s;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? _.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = n ? (s = game.actors) == null ? void 0 : s.get(n) : null;
  !r || r.type !== "pc" || _.updateSource({
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
  var r, l, s;
  const t = (l = (r = _.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const n = (s = i == null ? void 0 : i.querySelector) == null ? void 0 : s.call(i, ".dice-roll");
  n && n.classList.add(`votv-${t}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
