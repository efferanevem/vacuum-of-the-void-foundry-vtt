var je = Object.defineProperty;
var Ue = Object.getPrototypeOf;
var Ke = Reflect.get;
var Pe = (T, i, e) => i in T ? je(T, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : T[i] = e;
var j = (T, i, e) => Pe(T, typeof i != "symbol" ? i + "" : i, e);
var A = (T, i, e) => Ke(Ue(T), e, i);
const { HTMLField: Re, NumberField: y, SchemaField: v, StringField: f, BooleanField: F, ArrayField: qe } = foundry.data.fields;
class He extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new v({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new y({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new v({
        health: new v({
          value: new y({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new y({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new v({
          head: new v({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new F({ required: !1, initial: !1 }),
            box2: new F({ required: !1, initial: !1 }),
            box3: new F({ required: !1, initial: !1 })
          }),
          torso: new v({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new F({ required: !1, initial: !1 }),
            box2: new F({ required: !1, initial: !1 }),
            box3: new F({ required: !1, initial: !1 })
          }),
          arms: new v({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new F({ required: !1, initial: !1 }),
            box2: new F({ required: !1, initial: !1 }),
            box3: new F({ required: !1, initial: !1 })
          }),
          legs: new v({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new F({ required: !1, initial: !1 }),
            box2: new F({ required: !1, initial: !1 }),
            box3: new F({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new v({
          head: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new y({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new v({
          head: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new v({
          value: new y({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new y({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new y({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new v({
        defense: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new y({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new v({
        deception: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new y({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new v({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new v({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new v({
        microchips: new v({
          slot1: new v({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new F({ required: !1, initial: !0 })
          }),
          slot2: new v({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new F({ required: !1, initial: !0 })
          }),
          slot3: new v({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new F({ required: !1, initial: !0 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new v({
        faji: new v({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new v({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new v({
          items: new qe(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new v({
          items: new qe(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new v({
        biography: new Re({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: W, SchemaField: Be } = foundry.data.fields;
class ze extends He {
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
const { NumberField: P, SchemaField: We, StringField: G } = foundry.data.fields;
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
        short: new P({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new P({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new G({ required: !1, blank: !0, initial: "" }),
      quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 })
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
const { NumberField: Qe, StringField: Te } = foundry.data.fields;
class Xe extends foundry.abstract.TypeDataModel {
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
      kp: new Qe({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var _e, Oe, Le, Se;
const S = class S extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const o = Math.floor(a / 3), l = Math.floor(2 * a / 3);
    return t <= o ? 1 : t <= l ? 2 : 3;
  }
  async _prepareContext(i) {
    var ne, ae, se, oe, le, ce, ue, de;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = this.actor.system;
    const t = this.actor.system.resources ?? {}, a = t.hitLocations ?? {}, o = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of l) {
      const w = ((ne = a[m]) == null ? void 0 : ne.value) ?? 0, I = o[m] ?? 0;
      e.computedHealthStatus[m] = S._healthStatusFromRatio(I, w);
    }
    const u = this.actor.system.weapons ?? {}, d = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (u.slotOrder ?? "").trim(), s = r ? r.split(/\s*,\s*/).filter((m) => d.includes(m)) : [], n = (ae = this.actor.system.gear) == null ? void 0 : ae.microchips, c = n && typeof n == "object" && !Array.isArray(n) ? n : {}, p = (((se = c.slot1) == null ? void 0 : se.itemId) ?? "").trim(), b = (((oe = c.slot2) == null ? void 0 : oe.itemId) ?? "").trim(), g = (((le = c.slot3) == null ? void 0 : le.itemId) ?? "").trim(), E = this.actor.items.contents.filter((m) => m.type !== "ability").slice().sort((m, w) => {
      const I = typeof m.sort == "number" ? m.sort : 0, D = typeof w.sort == "number" ? w.sort : 0;
      return I - D;
    }).map((m) => {
      var fe, ge, ye, he, be, we, ve, Ie, ke;
      const w = m.type === "weapon", I = m.type === "microchip";
      let D = 0, O = "", x = null;
      for (let B = 0; B < s.length; B++) {
        const z = s[B];
        if ((((fe = u[z]) == null ? void 0 : fe.itemId) ?? "") === m.id) {
          D = B + 1, O = ((ge = u[z]) == null ? void 0 : ge.bonus) ?? "", x = z;
          break;
        }
      }
      let H = null;
      I && (p === m.id ? H = "slot1" : b === m.id ? H = "slot2" : g === m.id && (H = "slot3"));
      const Ne = w && ((ye = m.system) != null && ye.damage) ? m.system.damage : "", me = w && ((be = (he = m.system) == null ? void 0 : he.range) == null ? void 0 : be.short) != null ? m.system.range.short : null, pe = w && ((ve = (we = m.system) == null ? void 0 : we.range) == null ? void 0 : ve.long) != null ? m.system.range.long : null, Ce = me != null && pe != null ? `${me} / ${pe} m` : "", Me = x ? Number((Ie = u[x]) == null ? void 0 : Ie.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: w,
        slotAssignment: D,
        slotBonus: O,
        slotKey: x,
        microchipSlotKey: H,
        isEquipped: !!(x || H),
        damage: Ne,
        rangeStr: Ce,
        slotBonusNum: Me,
        quantity: Number(((ke = m.system) == null ? void 0 : ke.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = E;
    const h = (((ce = this.actor.items) == null ? void 0 : ce.contents) ?? []).filter((m) => m.type === "weapon"), k = h.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = k;
    const q = "— Nincs fegyver —", L = s.filter((m) => {
      const I = ((u[m] ?? {}).itemId ?? "").trim();
      return I ? !!h.find((O) => O.id === I) : !1;
    });
    e.weaponSlots = L.map((m, w) => {
      const I = u[m] ?? {}, D = (I.itemId ?? "").trim(), O = k.find((x) => x.id === D);
      return {
        slotKey: m,
        slotNum: w + 1,
        displayName: (O == null ? void 0 : O.name) || I.name || q,
        img: (O == null ? void 0 : O.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const R = (((ue = this.actor.items) == null ? void 0 : ue.contents) ?? []).filter((m) => m.type === "microchip").map((m) => ({ id: m.id, name: m.name, img: m.img })), K = "— Nincs chip —", U = (m) => {
      const w = [];
      return m !== 1 && w.push(p), m !== 2 && w.push(b), m !== 3 && w.push(g), w;
    };
    e.microchipItemsSlot1 = R.filter((m) => !U(1).includes(m.id)), e.microchipItemsSlot2 = R.filter((m) => !U(2).includes(m.id)), e.microchipItemsSlot3 = R.filter((m) => !U(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const w = `slot${m}`, I = c[w] ?? {}, D = (I.itemId ?? "").trim(), O = R.find((x) => x.id === D);
      e[`microchip${m}ItemId`] = D, e[`microchip${m}DisplayName`] = (O == null ? void 0 : O.name) || I.name || K, e[`microchip${m}Img`] = (O == null ? void 0 : O.img) || "", e[`microchip${m}Active`] = I.active === !0;
    });
    const V = this.actor.system.abilities ?? {}, Ee = (((de = this.actor.items) == null ? void 0 : de.contents) ?? []).map((m) => {
      var w, I, D;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((w = m.system) == null ? void 0 : w.kind) ?? "passive",
        description: ((I = m.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((D = m.system) == null ? void 0 : D.kp) ?? 0) || 0
      };
    }), ee = new Map(Ee.map((m) => [m.id, m])), xe = "— Nincs képesség —", te = (m) => {
      const w = V[m] ?? {}, I = (w.itemId ?? "").trim(), D = I ? ee.get(I) : null, O = (D == null ? void 0 : D.description) ?? "", x = (D == null ? void 0 : D.kp) ?? 0;
      return {
        itemId: I,
        displayName: (D == null ? void 0 : D.name) || w.name || xe,
        img: (D == null ? void 0 : D.img) || "",
        description: O,
        kp: x
      };
    };
    e.abilityFajiSlot = te("faji"), e.abilityHatterSlot = te("hatter");
    const ie = (m) => {
      const w = V[m];
      return w ? Array.isArray(w == null ? void 0 : w.items) ? w.items : Array.isArray(w) ? w : [] : [];
    }, re = (m) => m.map((w) => {
      const I = ee.get(w);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = re(ie("passive")), e.abilityActiveList = re(ie("active")), e;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    t.on("click", ".pc-skill-label", (r) => {
      var p;
      r.preventDefault();
      const s = r.currentTarget, n = s.dataset.skill, c = ((p = s.textContent) == null ? void 0 : p.trim()) || n;
      this._rollSkill(n, c);
    });
    const a = (r, s) => {
      var p;
      const n = r.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      if (c) {
        if (r.classList.contains("pc-weapon-label") && (s.altKey || s.shiftKey || s.ctrlKey || s.metaKey)) {
          const b = r.dataset.weaponSlot;
          b && this._rollWeapon(b);
          return;
        }
        (p = c.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".pc-inventory-item-name", (r) => {
      r.preventDefault(), a(r.currentTarget, r);
    }), t.on("click", ".pc-inventory-item-icon", (r) => {
      r.preventDefault(), a(r.currentTarget, r);
    }), t.on("change", ".pc-item-qty", async (r) => {
      const s = r.currentTarget, n = s.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c) return;
      let p = Number(s.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await c.update({ "system.quantity": p });
    }), t.on("click", ".pc-item-delete", async (r) => {
      r.preventDefault();
      const n = r.currentTarget.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n), p = {};
      if ((c == null ? void 0 : c.type) === "weapon") {
        const b = this.actor.system.weapons ?? {}, g = (b.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = g ? g.split(/\s*,\s*/).filter((k) => _.includes(k)) : [], h = E.find((k) => {
          var q;
          return (((q = b[k]) == null ? void 0 : q.itemId) ?? "").trim() === n;
        });
        if (h) {
          const k = E.filter((q) => q !== h);
          p["system.weapons.slotOrder"] = k.join(","), p[`system.weapons.${h}.itemId`] = "", p[`system.weapons.${h}.name`] = "", p[`system.weapons.${h}.damage`] = "", p[`system.weapons.${h}.bonus`] = "";
        }
      }
      Object.keys(p).length && await this.actor.update(p), await this.actor.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("click", ".pc-weapon-attack", async (r) => {
      r.preventDefault();
      const n = (r.currentTarget.dataset.slot ?? "").trim();
      n && await this._rollWeapon(n);
    }), t.on("click", ".pc-weapon-damage", async (r) => {
      r.preventDefault();
      const n = (r.currentTarget.dataset.slot ?? "").trim();
      if (!n) return;
      const b = (((this.actor.system.weapons ?? {})[n] ?? {}).itemId ?? "").trim();
      b && await this._rollWeaponDamage(b);
    }), t.on("change", ".pc-weapon-equip-toggle", async (r) => {
      var h;
      const s = r.currentTarget, n = (s.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.system.weapons ?? {}, p = (c.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], g = p ? p.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], _ = g.find((k) => {
        var q;
        return (((q = c[k]) == null ? void 0 : q.itemId) ?? "").trim() === n;
      }) ?? null;
      if (s.checked) {
        if (_) return;
        let k = g.find((K) => {
          var U;
          return !((U = c[K]) != null && U.itemId);
        });
        const q = new Set(g);
        if (!k) {
          const K = b.find((U) => !q.has(U));
          if (!K) return;
          k = K, g.push(K);
        }
        const L = this.actor.items.get(n), R = {
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${k}.itemId`]: n,
          [`system.weapons.${k}.name`]: (L == null ? void 0 : L.name) ?? "",
          [`system.weapons.${k}.damage`]: ((h = L == null ? void 0 : L.system) == null ? void 0 : h.damage) ?? ""
        };
        await this.actor.update(R);
      } else if (_) {
        const q = {
          "system.weapons.slotOrder": g.filter((L) => L !== _).join(",")
        };
        q[`system.weapons.${_}.itemId`] = "", q[`system.weapons.${_}.name`] = "", q[`system.weapons.${_}.damage`] = "", q[`system.weapons.${_}.bonus`] = "", await this.actor.update(q);
      }
    }), t.on("click", ".pc-microchip-slot-display", (r) => {
      r.preventDefault();
      const s = r.currentTarget;
      if (s.disabled) return;
      const n = s.closest(".pc-microchip-slot-select-wrap"), c = n == null ? void 0 : n.classList.contains("pc-microchip-slot-open");
      t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !c && n && n.classList.add("pc-microchip-slot-open");
    }), t.on("click", ".pc-microchip-slot-option", async (r) => {
      var L;
      r.preventDefault();
      const s = r.currentTarget, n = s.closest(".pc-microchip-slot-select-wrap"), c = n == null ? void 0 : n.querySelector(".pc-microchip-slot-display"), p = c == null ? void 0 : c.dataset.slot;
      if (!p) return;
      const b = (s.dataset.itemId ?? "").trim(), g = (s.dataset.itemName ?? ((L = s.textContent) == null ? void 0 : L.trim()) ?? "").trim() || "— Nincs chip —", _ = (s.dataset.itemImg ?? "").trim(), E = n == null ? void 0 : n.querySelector(".pc-microchip-slot-display-text");
      E && (E.textContent = g);
      let h = n == null ? void 0 : n.querySelector(".pc-microchip-slot-thumb");
      _ ? (h || (h = document.createElement("img"), h.className = "pc-microchip-slot-thumb", h.alt = "", c == null || c.insertBefore(h, E)), h.src = _, h.style.display = "") : h && h.remove(), n == null || n.classList.remove("pc-microchip-slot-open");
      const k = b ? this.actor.items.get(b) : null, q = {
        [`system.gear.microchips.${p}.itemId`]: b,
        [`system.gear.microchips.${p}.name`]: (k == null ? void 0 : k.name) ?? ""
      };
      b && (q[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (r) => {
      $(r.target).closest(".pc-microchip-slot-select-wrap").length || t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), t.on("change", ".pc-microchip-slot-active", (r) => {
      const s = r.currentTarget.dataset.slot;
      if (!s) return;
      const n = r.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${s}.active`]: n });
    }), t.find(".pc-microchip-slot").each((r, s) => {
      const n = s.dataset.slot;
      s.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, n)), s.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-microchip-slot-drag-over");
      }), s.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, n));
    }), t.find(".pc-ability-slot-single").each((r, s) => {
      const n = s.dataset.slot;
      n && (s.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, n)), s.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-slot-drag-over");
      }), s.addEventListener("drop", (c) => this._onAbilitySingleDrop(c, n)));
    }), t.find(".pc-ability-area").each((r, s) => {
      const n = s.dataset.area;
      n && (s.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, n)), s.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-area-drag-over");
      }), s.addEventListener("drop", (c) => this._onAbilityAreaDrop(c, n)));
    }), t.on("click", ".pc-ability-slot-clear", async (r) => {
      r.preventDefault();
      const s = r.currentTarget.dataset.slot;
      s && await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      });
    }), t.on("click", ".pc-ability-pill-remove", async (r) => {
      var g;
      r.preventDefault();
      const s = r.currentTarget.dataset.area, n = r.currentTarget.dataset.itemId;
      if (!s || !n) return;
      const c = this.actor.system.abilities ?? {}, b = (Array.isArray((g = c[s]) == null ? void 0 : g.items) ? c[s].items.slice() : []).filter((_) => _ !== n);
      await this.actor.update({ [`system.abilities.${s}.items`]: b });
    }), t.on("click", ".pc-ability-open", (r) => {
      var p;
      r.preventDefault();
      const n = r.currentTarget.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    }), t.on("click", ".pc-ability-chat", async (r) => {
      r.preventDefault();
      const n = r.currentTarget.dataset.itemId;
      n && await this._postAbilityToChat(n);
    }), t.find(".pc-actions-drag-handle").each((r, s) => {
      var b, g;
      const n = s, c = n.closest(".pc-actions-row"), p = ((b = c == null ? void 0 : c.dataset) == null ? void 0 : b.itemId) ?? ((g = n.dataset) == null ? void 0 : g.itemId);
      p && n.addEventListener("dragstart", (_) => this._onInventoryDragHandleStart(_, p, c));
    }), t.find(".pc-actions-row").each((r, s) => {
      const n = s, c = n.dataset.itemId;
      c && (n.addEventListener("dragover", (p) => this._onInventoryRowDragOver(p, c)), n.addEventListener("dragleave", (p) => this._onInventoryRowDragLeave(p, c)), n.addEventListener("drop", (p) => this._onInventoryRowDrop(p, c)));
    });
    const o = t.find(".pc-actions-table")[0];
    o && (o.addEventListener("dragover", (r) => this._onInventoryAreaDragOver(r)), o.addEventListener("dragleave", (r) => this._onInventoryAreaDragLeave(r)), o.addEventListener("drop", (r) => this._onInventoryAreaDrop(r)));
    const l = this, u = (r) => {
      if (!r) return;
      const s = l._getFormDataForUpdate(r);
      Object.keys(s).length !== 0 && l.actor.update(s).catch((n) => console.warn("VoidPcSheet save failed", n));
    }, d = (r) => {
      var s, n, c;
      return r && (((n = (s = l.element) == null ? void 0 : s.contains) == null ? void 0 : n.call(s, r)) || l.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(l.id)}`)));
    };
    l._votvChange = (r) => {
      var n, c, p;
      const s = ((n = r.target) == null ? void 0 : n.form) ?? ((p = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      d(s) && u(s);
    }, l._votvInput = (r) => {
      var n, c, p;
      const s = ((n = r.target) == null ? void 0 : n.form) ?? ((p = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      d(s) && (clearTimeout(l._votvInputDebounce), l._votvInputDebounce = setTimeout(() => u(s), 300));
    }, document.body.addEventListener("change", l._votvChange, !0), document.body.addEventListener("input", l._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, d, r;
    const e = {};
    for (const s of i.elements) {
      if (!s.name || s.disabled || s.type === "radio" && !s.checked || s.name.startsWith("system.resources.healthStatus.")) continue;
      let n;
      s.type === "checkbox" ? n = s.checked : s.type === "number" ? n = s.value === "" ? 0 : Number(s.value) : n = s.value ?? "", foundry.utils.setProperty(e, s.name, n);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), a = t.hitLocations ?? {}, o = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const s of l) {
      const n = ((r = a[s]) == null ? void 0 : r.value) ?? 0, c = o[s] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${s}`, S._healthStatusFromRatio(c, n));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var n, c, p, b, g, _, E;
    const t = i.target, a = (n = t == null ? void 0 : t.closest) == null ? void 0 : n.call(t, ".pc-ability-slot-single"), o = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".pc-ability-area");
    if (!a && !o) return super._onDropItem(i, e);
    if (!e || e.type !== "Item") return;
    const l = e.uuid ?? ((p = e.data) == null ? void 0 : p.uuid);
    if (!l) return;
    const u = await fromUuid(l);
    if (!u || u.documentName !== "Item" || u.type !== "ability") return;
    const d = (((b = u.system) == null ? void 0 : b.kind) ?? "passive").toString();
    let r = u.id;
    ((g = u.parent) == null ? void 0 : g.id) !== this.actor.id && (r = ((_ = (await this.actor.createEmbeddedDocuments("Item", [u.toObject()]))[0]) == null ? void 0 : _.id) ?? r);
    const s = this.actor.system.abilities ?? {};
    if (a) {
      const h = a.dataset.slot;
      if (!h) return;
      const q = {
        faji: "species",
        hatter: "background"
      }[h];
      if (!q || d !== q) return;
      await this.actor.update({
        [`system.abilities.${h}.itemId`]: r,
        [`system.abilities.${h}.name`]: u.name
      });
      return;
    }
    if (o) {
      const h = o.dataset.area;
      if (!h) return;
      const q = {
        passive: "passive",
        active: "active"
      }[h];
      if (!q || d !== q) return;
      const L = Array.isArray((E = s[h]) == null ? void 0 : E.items) ? s[h].items.slice() : Array.isArray(s[h]) ? s[h].slice() : [];
      L.includes(r) || L.push(r), await this.actor.update({ [`system.abilities.${h}.items`]: L });
      return;
    }
  }
  _onWeaponSlotDragOver(i, e) {
    var o, l, u;
    const t = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, r, s, n, c, p;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("pc-weapon-slot-drag-over");
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const o = await fromUuid(a.uuid);
    if (!o || o.type !== "weapon") return;
    let l = o.id;
    ((n = o.parent) == null ? void 0 : n.id) !== this.actor.id && (l = ((c = (await this.actor.createEmbeddedDocuments("Item", [o.toObject()]))[0]) == null ? void 0 : c.id) ?? l);
    const u = {
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: o.name,
      [`system.weapons.${e}.damage`]: ((p = o.system) == null ? void 0 : p.damage) ?? ""
    };
    await this.actor.update(u);
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (a = i.currentTarget) == null || a.classList.add("pc-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("pc-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var r, s;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("pc-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const o = this.actor.items.contents.slice().sort((n, c) => {
      const p = typeof n.sort == "number" ? n.sort : 0, b = typeof c.sort == "number" ? c.sort : 0;
      return p - b;
    }).map((n) => n.id), l = o.indexOf(t), u = o.indexOf(e);
    if (l === -1 || u === -1) return;
    o.splice(l, 1), o.splice(u, 0, t);
    const d = o.map((n, c) => ({
      _id: n,
      sort: (c + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(i) {
    var a, o, l;
    const e = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
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
    var s, n, c;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", a = Number(((n = e.system) == null ? void 0 : n.kp) ?? 0) || 0, o = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", d = o ? `<p>${o}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${u}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var t, a, o, l;
    const e = ((t = i.dataTransfer) == null ? void 0 : t.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const u = e.trim();
      if (u.includes(".") && !u.startsWith("{"))
        return { uuid: u };
      try {
        const d = JSON.parse(u);
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
    var r, s, n, c;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("pc-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    const o = (((s = a.system) == null ? void 0 : s.kind) ?? "passive").toString(), u = {
      faji: "species",
      hatter: "background"
    }[e];
    if (!u || o !== u) return;
    let d = a.id;
    ((n = a.parent) == null ? void 0 : n.id) !== this.actor.id && (d = ((c = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : c.id) ?? d), await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(i, e) {
    var n, c, p, b, g;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("pc-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    const o = (((c = a.system) == null ? void 0 : c.kind) ?? "passive").toString(), u = {
      passive: "passive",
      active: "active"
    }[e];
    if (!u || o !== u) return;
    let d = a.id;
    ((p = a.parent) == null ? void 0 : p.id) !== this.actor.id && (d = ((b = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : b.id) ?? d);
    const r = this.actor.system.abilities ?? {}, s = Array.isArray((g = r[e]) == null ? void 0 : g.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    s.includes(d) || s.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: s });
  }
  _onMicrochipSlotDragOver(i, e) {
    var o, l, u;
    const t = ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, d, r, s, n;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("pc-microchip-slot-drag-over");
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const o = await fromUuid(a.uuid);
    if (!o || o.type !== "microchip") return;
    let l = o.id;
    ((s = o.parent) == null ? void 0 : s.id) !== this.actor.id && (l = ((n = (await this.actor.createEmbeddedDocuments("Item", [o.toObject()]))[0]) == null ? void 0 : n.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: o.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const a = (this.actor.system.skills ?? {})[i] ?? 0, o = Number(a) || 0, u = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const r = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: r } },
      rollMode: s
    });
  }
  async _rollWeapon(i) {
    var h;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, a = this.actor.system.skills ?? {}, o = this.actor.items.filter((k) => k.type === "weapon");
    let l = null;
    t.itemId && (l = o.find((k) => k.id === t.itemId) ?? null);
    const u = l && l.name || t.name || `Fegyver (${i})`, d = Number(t.bonus || 0) || 0, s = (((h = l == null ? void 0 : l.system) == null ? void 0 : h.type) || "light") === "thrown" ? "grenadeUse" : "firearms", n = Number(a[s] || 0) || 0, c = d + n, b = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, g = new Roll(b);
    await g.evaluate({ async: !0 });
    const _ = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, E = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: _ } },
      rollMode: E
    });
  }
  async _rollWeaponDamage(i) {
    var l;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "weapon") return;
    const t = (((l = e.system) == null ? void 0 : l.damage) ?? "").trim();
    if (!t) return;
    const a = new Roll(t);
    await a.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }
};
j(S, "PARTS", foundry.utils.mergeObject(A(S, S, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), j(S, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(S, S, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((_e = A(S, S, "DEFAULT_OPTIONS")) == null ? void 0 : _e.form) ?? {}, { submitOnChange: !0 }),
  window: foundry.utils.mergeObject(((Oe = A(S, S, "DEFAULT_OPTIONS")) == null ? void 0 : Oe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Se = (Le = A(S, S, "DEFAULT_OPTIONS")) == null ? void 0 : Le.window) == null ? void 0 : Se.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let Q = S;
var Ae;
const N = class N extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, a = (o) => {
      var l, u, d;
      return o && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && t(l);
    }, e._votvInput = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(N, "PARTS", foundry.utils.mergeObject(A(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), j(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ae = A(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Ae.form) ?? {}, { submitOnChange: !0 })
}));
let X = N;
var Fe;
const C = class C extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, a = (o) => {
      var l, u, d;
      return o && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && t(l);
    }, e._votvInput = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(C, "PARTS", foundry.utils.mergeObject(A(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), j(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fe = A(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Fe.form) ?? {}, { submitOnChange: !0 })
}));
let Y = C;
var $e;
const M = class M extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, a = (o) => {
      var l, u, d;
      return o && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, o)) || e.id && ((d = o.closest) == null ? void 0 : d.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && t(l);
    }, e._votvInput = (o) => {
      var u, d, r;
      const l = ((u = o.target) == null ? void 0 : u.form) ?? ((r = (d = o.target) == null ? void 0 : d.closest) == null ? void 0 : r.call(d, "form"));
      a(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
j(M, "PARTS", foundry.utils.mergeObject(A(M, M, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), j(M, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(M, M, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject((($e = A(M, M, "DEFAULT_OPTIONS")) == null ? void 0 : $e.form) ?? {}, { submitOnChange: !0 })
}));
let Z = M;
const Ye = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var T, i, e, t;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (T = CONFIG.Actor).dataModels ?? (T.dataModels = {}), CONFIG.Actor.dataModels.pc = ze, (i = CONFIG.Item).dataModels ?? (i.dataModels = {}), CONFIG.Item.dataModels.weapon = Ge, CONFIG.Item.dataModels.microchip = Je, CONFIG.Item.dataModels.ability = Xe, (e = CONFIG.Actor).trackableAttributes ?? (e.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.pc = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (t = CONFIG.Actor).typeLabels ?? (t.typeLabels = {}), CONFIG.Actor.typeLabels.pc = "Player Character", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Q, {
    types: ["pc"],
    makeDefault: !0,
    label: "VOTV.PcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", X, {
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
  }), Hooks.on("updateActor", (a, o, l, u) => {
    const d = a == null ? void 0 : a.id;
    d && setTimeout(() => {
      var n, c, p, b;
      const r = (n = game.actors) == null ? void 0 : n.get(d);
      if (r != null && r.apps) for (const g of r.apps) g != null && g.rendered && typeof g.render == "function" && g.render(!0);
      const s = Object.values((ui == null ? void 0 : ui.windows) ?? {});
      for (const g of s)
        !(g != null && g.rendered) || typeof g.render != "function" || ((c = g.document) == null ? void 0 : c.id) !== d || ((p = g.document) == null ? void 0 : p.documentName) !== "Actor" || ((b = g.constructor) == null ? void 0 : b.name) !== "VoidPcSheet" || g.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (T) => {
      var a, o, l, u, d, r;
      if (!((o = (a = T.target) == null ? void 0 : a.closest) != null && o.call(a, "#actors"))) return;
      const i = (u = (l = T.target) == null ? void 0 : l.closest) == null ? void 0 : u.call(l, "[data-document-id]"), e = (d = i == null ? void 0 : i.getAttribute) == null ? void 0 : d.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((r = game.actors) != null && r.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (T, i, e) => {
  var l, u;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, a = t ?? T.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const o = a ? (u = game.actors) == null ? void 0 : u.get(a) : null;
  !o || o.type !== "pc" || T.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (T, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || T.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Ye,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (T, i, e) => {
  var o, l, u;
  const t = (l = (o = T.flags) == null ? void 0 : o["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const a = (u = i == null ? void 0 : i.querySelector) == null ? void 0 : u.call(i, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
