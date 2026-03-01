var Se = Object.defineProperty;
var $e = Object.getPrototypeOf;
var xe = Reflect.get;
var Ne = (T, a, e) => a in T ? Se(T, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : T[a] = e;
var E = (T, a, e) => Ne(T, typeof a != "symbol" ? a + "" : a, e);
var _ = (T, a, e) => xe($e(T), e, a);
const { HTMLField: _e, NumberField: f, SchemaField: y, StringField: d, BooleanField: A, ArrayField: he } = foundry.data.fields;
class Ee extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new y({
        name: new d({ required: !1, blank: !0, initial: "" }),
        player: new d({ required: !1, blank: !0, initial: "" }),
        level: new f({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new d({ required: !1, blank: !0, initial: "" }),
        assignment: new d({ required: !1, blank: !0, initial: "" }),
        subAssignment: new d({ required: !1, blank: !0, initial: "" }),
        background: new d({ required: !1, blank: !0, initial: "" }),
        languages: new d({ required: !1, blank: !0, initial: "" })
      }),
      resources: new y({
        health: new y({
          value: new f({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new f({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new y({
          head: new y({
            value: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new A({ required: !1, initial: !1 }),
            box2: new A({ required: !1, initial: !1 }),
            box3: new A({ required: !1, initial: !1 })
          }),
          torso: new y({
            value: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new A({ required: !1, initial: !1 }),
            box2: new A({ required: !1, initial: !1 }),
            box3: new A({ required: !1, initial: !1 })
          }),
          arms: new y({
            value: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new A({ required: !1, initial: !1 }),
            box2: new A({ required: !1, initial: !1 }),
            box3: new A({ required: !1, initial: !1 })
          }),
          legs: new y({
            value: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new A({ required: !1, initial: !1 }),
            box2: new A({ required: !1, initial: !1 }),
            box3: new A({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new y({
          head: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new f({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        stress: new y({
          value: new f({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new f({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new f({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new y({
        defense: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new f({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new y({
        deception: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new f({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new f({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new y({
        slotOrder: new d({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new y({
          name: new d({ required: !1, blank: !0, initial: "" }),
          bonus: new d({ required: !1, blank: !0, initial: "" }),
          damage: new d({ required: !1, blank: !0, initial: "" }),
          itemId: new d({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new y({
        microchips: new y({
          slot1: new y({
            itemId: new d({ required: !1, blank: !0, initial: "" }),
            name: new d({ required: !1, blank: !0, initial: "" }),
            active: new A({ required: !1, initial: !0 })
          }),
          slot2: new y({
            itemId: new d({ required: !1, blank: !0, initial: "" }),
            name: new d({ required: !1, blank: !0, initial: "" }),
            active: new A({ required: !1, initial: !0 })
          }),
          slot3: new y({
            itemId: new d({ required: !1, blank: !0, initial: "" }),
            name: new d({ required: !1, blank: !0, initial: "" }),
            active: new A({ required: !1, initial: !0 })
          })
        }),
        equipment: new d({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new y({
        faji: new y({
          itemId: new d({ required: !1, blank: !0, initial: "" }),
          name: new d({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new y({
          itemId: new d({ required: !1, blank: !0, initial: "" }),
          name: new d({ required: !1, blank: !0, initial: "" })
        }),
        passive: new y({
          items: new he(
            new d({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new y({
          items: new he(
            new d({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new y({
        biography: new _e({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: B, SchemaField: Fe } = foundry.data.fields;
class Ce extends Ee {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Fe({
        body: new B({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new B({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new B({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: K, SchemaField: Me, StringField: H } = foundry.data.fields;
class Ke extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new H({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new H({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Me({
        short: new K({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new K({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new H({ required: !1, blank: !0, initial: "" }),
      quantity: new K({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: W, StringField: be } = foundry.data.fields;
class je extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new be({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new be({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new W({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new W({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new W({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Re, StringField: ve } = foundry.data.fields;
class Ue extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ve({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ve({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Re({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Ie, ke, qe;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(a) {
    var ee, te, ie, ae, re, ne, se;
    let e = await super._prepareContext(a);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = this.actor.system;
    const s = this.actor.system.weapons ?? {}, l = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], i = (s.slotOrder ?? "").trim(), r = i ? i.split(/\s*,\s*/).filter((c) => l.includes(c)) : [], t = (ee = this.actor.system.gear) == null ? void 0 : ee.microchips, n = t && typeof t == "object" && !Array.isArray(t) ? t : {}, o = (((te = n.slot1) == null ? void 0 : te.itemId) ?? "").trim(), u = (((ie = n.slot2) == null ? void 0 : ie.itemId) ?? "").trim(), m = (((ae = n.slot3) == null ? void 0 : ae.itemId) ?? "").trim(), q = this.actor.items.contents.filter((c) => c.type !== "ability").slice().sort((c, h) => {
      const b = typeof c.sort == "number" ? c.sort : 0, I = typeof h.sort == "number" ? h.sort : 0;
      return b - I;
    }).map((c) => {
      var ce, de, ue, me, pe, fe, ge, ye, we;
      const h = c.type === "weapon", b = c.type === "microchip";
      let I = 0, D = "", N = null;
      for (let U = 0; U < r.length; U++) {
        const P = r[U];
        if ((((ce = s[P]) == null ? void 0 : ce.itemId) ?? "") === c.id) {
          I = U + 1, D = ((de = s[P]) == null ? void 0 : de.bonus) ?? "", N = P;
          break;
        }
      }
      let R = null;
      b && (o === c.id ? R = "slot1" : u === c.id ? R = "slot2" : m === c.id && (R = "slot3"));
      const Oe = h && ((ue = c.system) != null && ue.damage) ? c.system.damage : "", oe = h && ((pe = (me = c.system) == null ? void 0 : me.range) == null ? void 0 : pe.short) != null ? c.system.range.short : null, le = h && ((ge = (fe = c.system) == null ? void 0 : fe.range) == null ? void 0 : ge.long) != null ? c.system.range.long : null, Ae = oe != null && le != null ? `${oe} / ${le} m` : "", Le = N ? Number((ye = s[N]) == null ? void 0 : ye.bonus) || 0 : "";
      return {
        id: c.id,
        name: c.name,
        img: c.img,
        type: c.type,
        isWeapon: h,
        slotAssignment: I,
        slotBonus: D,
        slotKey: N,
        microchipSlotKey: R,
        isEquipped: !!(N || R),
        damage: Oe,
        rangeStr: Ae,
        slotBonusNum: Le,
        quantity: Number(((we = c.system) == null ? void 0 : we.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = q;
    const w = (((re = this.actor.items) == null ? void 0 : re.contents) ?? []).filter((c) => c.type === "weapon"), g = w.map((c) => ({ id: c.id, name: c.name, img: c.img }));
    e.weaponItems = g;
    const v = "— Nincs fegyver —", O = r.filter((c) => {
      const b = ((s[c] ?? {}).itemId ?? "").trim();
      return b ? !!w.find((D) => D.id === b) : !1;
    });
    e.weaponSlots = O.map((c, h) => {
      const b = s[c] ?? {}, I = (b.itemId ?? "").trim(), D = g.find((N) => N.id === I);
      return {
        slotKey: c,
        slotNum: h + 1,
        displayName: (D == null ? void 0 : D.name) || b.name || v,
        img: (D == null ? void 0 : D.img) || "",
        bonus: Number(b.bonus) || 0,
        damage: b.damage ?? ""
      };
    });
    const k = (((ne = this.actor.items) == null ? void 0 : ne.contents) ?? []).filter((c) => c.type === "microchip").map((c) => ({ id: c.id, name: c.name, img: c.img })), S = "— Nincs chip —", L = (c) => {
      const h = [];
      return c !== 1 && h.push(o), c !== 2 && h.push(u), c !== 3 && h.push(m), h;
    };
    e.microchipItemsSlot1 = k.filter((c) => !L(1).includes(c.id)), e.microchipItemsSlot2 = k.filter((c) => !L(2).includes(c.id)), e.microchipItemsSlot3 = k.filter((c) => !L(3).includes(c.id)), ["1", "2", "3"].forEach((c) => {
      const h = `slot${c}`, b = n[h] ?? {}, I = (b.itemId ?? "").trim(), D = k.find((N) => N.id === I);
      e[`microchip${c}ItemId`] = I, e[`microchip${c}DisplayName`] = (D == null ? void 0 : D.name) || b.name || S, e[`microchip${c}Img`] = (D == null ? void 0 : D.img) || "", e[`microchip${c}Active`] = b.active === !0;
    });
    const j = this.actor.system.abilities ?? {}, De = (((se = this.actor.items) == null ? void 0 : se.contents) ?? []).map((c) => {
      var h, b, I;
      return {
        id: c.id,
        name: c.name,
        img: c.img,
        kind: ((h = c.system) == null ? void 0 : h.kind) ?? "passive",
        description: ((b = c.system) == null ? void 0 : b.description) ?? "",
        kp: Number(((I = c.system) == null ? void 0 : I.kp) ?? 0) || 0
      };
    }), X = new Map(De.map((c) => [c.id, c])), Te = "— Nincs képesség —", Y = (c) => {
      const h = j[c] ?? {}, b = (h.itemId ?? "").trim(), I = b ? X.get(b) : null, D = (I == null ? void 0 : I.description) ?? "", N = (I == null ? void 0 : I.kp) ?? 0;
      return {
        itemId: b,
        displayName: (I == null ? void 0 : I.name) || h.name || Te,
        img: (I == null ? void 0 : I.img) || "",
        description: D,
        kp: N
      };
    };
    e.abilityFajiSlot = Y("faji"), e.abilityHatterSlot = Y("hatter");
    const Z = (c) => {
      const h = j[c];
      return h ? Array.isArray(h == null ? void 0 : h.items) ? h.items : Array.isArray(h) ? h : [] : [];
    }, V = (c) => c.map((h) => {
      const b = X.get(h);
      return b ? {
        id: b.id,
        name: b.name,
        img: b.img,
        description: b.description,
        kp: b.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = V(Z("passive")), e.abilityActiveList = V(Z("active")), e;
  }
  _attachFrameListeners(a) {
    super._attachFrameListeners(a);
    const e = $(this.element);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    e.find(".pc-skill-label").click((i) => {
      var o;
      i.preventDefault();
      const r = i.currentTarget, t = r.dataset.skill, n = ((o = r.textContent) == null ? void 0 : o.trim()) || t;
      this._rollSkill(t, n);
    });
    const s = (i, r) => {
      var o;
      const t = i.dataset.itemId;
      if (!t) return;
      const n = this.actor.items.get(t);
      if (n) {
        if (i.classList.contains("pc-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const u = i.dataset.weaponSlot;
          u && this._rollWeapon(u);
          return;
        }
        (o = n.sheet) == null || o.render(!0);
      }
    };
    e.find(".pc-inventory-item-name").click((i) => {
      i.preventDefault(), s(i.currentTarget, i);
    }), e.find(".pc-inventory-item-icon").click((i) => {
      i.preventDefault(), s(i.currentTarget, i);
    }), e.find(".pc-item-qty").on("change", async (i) => {
      const r = i.currentTarget, t = r.dataset.itemId;
      if (!t) return;
      const n = this.actor.items.get(t);
      if (!n) return;
      let o = Number(r.value);
      (!Number.isFinite(o) || o < 0) && (o = 0), await n.update({ "system.quantity": o });
    }), e.find(".pc-item-delete").on("click", async (i) => {
      i.preventDefault();
      const t = i.currentTarget.dataset.itemId;
      if (!t) return;
      const n = this.actor.items.get(t), o = {};
      if ((n == null ? void 0 : n.type) === "weapon") {
        const u = this.actor.system.weapons ?? {}, m = (u.slotOrder ?? "").trim(), p = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = m ? m.split(/\s*,\s*/).filter((g) => p.includes(g)) : [], w = q.find((g) => {
          var v;
          return (((v = u[g]) == null ? void 0 : v.itemId) ?? "").trim() === t;
        });
        if (w) {
          const g = q.filter((v) => v !== w);
          o["system.weapons.slotOrder"] = g.join(","), o[`system.weapons.${w}.itemId`] = "", o[`system.weapons.${w}.name`] = "", o[`system.weapons.${w}.damage`] = "", o[`system.weapons.${w}.bonus`] = "";
        }
      }
      Object.keys(o).length && await this.actor.update(o), await this.actor.deleteEmbeddedDocuments("Item", [t]);
    }), e.find(".pc-weapon-attack").on("click", async (i) => {
      i.preventDefault();
      const t = (i.currentTarget.dataset.slot ?? "").trim();
      t && await this._rollWeapon(t);
    }), e.find(".pc-weapon-damage").on("click", async (i) => {
      i.preventDefault();
      const t = (i.currentTarget.dataset.slot ?? "").trim();
      if (!t) return;
      const u = (((this.actor.system.weapons ?? {})[t] ?? {}).itemId ?? "").trim();
      u && await this._rollWeaponDamage(u);
    }), e.find(".pc-weapon-equip-toggle").on("change", async (i) => {
      var w;
      const r = i.currentTarget, t = (r.dataset.itemId ?? "").trim();
      if (!t) return;
      const n = this.actor.system.weapons ?? {}, o = (n.slotOrder ?? "").trim(), u = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], m = o ? o.split(/\s*,\s*/).filter((g) => u.includes(g)) : [], p = m.find((g) => {
        var v;
        return (((v = n[g]) == null ? void 0 : v.itemId) ?? "").trim() === t;
      }) ?? null;
      if (r.checked) {
        if (p) return;
        let g = m.find((S) => {
          var L;
          return !((L = n[S]) != null && L.itemId);
        });
        const v = new Set(m);
        if (!g) {
          const S = u.find((L) => !v.has(L));
          if (!S) return;
          g = S, m.push(S);
        }
        const O = this.actor.items.get(t), k = {
          "system.weapons.slotOrder": m.join(","),
          [`system.weapons.${g}.itemId`]: t,
          [`system.weapons.${g}.name`]: (O == null ? void 0 : O.name) ?? "",
          [`system.weapons.${g}.damage`]: ((w = O == null ? void 0 : O.system) == null ? void 0 : w.damage) ?? ""
        };
        await this.actor.update(k);
      } else if (p) {
        const v = {
          "system.weapons.slotOrder": m.filter((O) => O !== p).join(",")
        };
        v[`system.weapons.${p}.itemId`] = "", v[`system.weapons.${p}.name`] = "", v[`system.weapons.${p}.damage`] = "", v[`system.weapons.${p}.bonus`] = "", await this.actor.update(v);
      }
    }), e.find(".pc-microchip-slot-display").on("click", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const t = r.closest(".pc-microchip-slot-select-wrap"), n = t == null ? void 0 : t.classList.contains("pc-microchip-slot-open");
      e.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !n && t && t.classList.add("pc-microchip-slot-open");
    }), e.find(".pc-microchip-slot-option").on("click", async (i) => {
      var O;
      i.preventDefault();
      const r = i.currentTarget, t = r.closest(".pc-microchip-slot-select-wrap"), n = t == null ? void 0 : t.querySelector(".pc-microchip-slot-display"), o = n == null ? void 0 : n.dataset.slot;
      if (!o) return;
      const u = (r.dataset.itemId ?? "").trim(), m = (r.dataset.itemName ?? ((O = r.textContent) == null ? void 0 : O.trim()) ?? "").trim() || "— Nincs chip —", p = (r.dataset.itemImg ?? "").trim(), q = t == null ? void 0 : t.querySelector(".pc-microchip-slot-display-text");
      q && (q.textContent = m);
      let w = t == null ? void 0 : t.querySelector(".pc-microchip-slot-thumb");
      p ? (w || (w = document.createElement("img"), w.className = "pc-microchip-slot-thumb", w.alt = "", n == null || n.insertBefore(w, q)), w.src = p, w.style.display = "") : w && w.remove(), t == null || t.classList.remove("pc-microchip-slot-open");
      const g = u ? this.actor.items.get(u) : null, v = {
        [`system.gear.microchips.${o}.itemId`]: u,
        [`system.gear.microchips.${o}.name`]: (g == null ? void 0 : g.name) ?? ""
      };
      u && (v[`system.gear.microchips.${o}.active`] = !0), await this.actor.update(v);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".pc-microchip-slot-select-wrap").length || e.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), e.find(".pc-microchip-slot-active").on("change", (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const t = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${r}.active`]: t });
    }), e.find(".pc-microchip-slot").each((i, r) => {
      const t = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, t)), r.addEventListener("dragleave", (n) => {
        var o;
        return (o = n.currentTarget) == null ? void 0 : o.classList.remove("pc-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, t));
    }), e.find(".pc-ability-slot-single").each((i, r) => {
      const t = r.dataset.slot;
      t && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, t)), r.addEventListener("dragleave", (n) => {
        var o;
        return (o = n.currentTarget) == null ? void 0 : o.classList.remove("pc-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onAbilitySingleDrop(n, t)));
    }), e.find(".pc-ability-area").each((i, r) => {
      const t = r.dataset.area;
      t && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, t)), r.addEventListener("dragleave", (n) => {
        var o;
        return (o = n.currentTarget) == null ? void 0 : o.classList.remove("pc-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => this._onAbilityAreaDrop(n, t)));
    }), e.find(".pc-ability-slot-clear").on("click", async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), e.find(".pc-ability-pill-remove").on("click", async (i) => {
      var m;
      i.preventDefault();
      const r = i.currentTarget.dataset.area, t = i.currentTarget.dataset.itemId;
      if (!r || !t) return;
      const n = this.actor.system.abilities ?? {}, u = (Array.isArray((m = n[r]) == null ? void 0 : m.items) ? n[r].items.slice() : []).filter((p) => p !== t);
      await this.actor.update({ [`system.abilities.${r}.items`]: u });
    }), e.find(".pc-ability-open").on("click", (i) => {
      var o;
      i.preventDefault();
      const t = i.currentTarget.dataset.itemId;
      if (!t) return;
      const n = this.actor.items.get(t);
      (o = n == null ? void 0 : n.sheet) == null || o.render(!0);
    }), e.find(".pc-ability-chat").on("click", async (i) => {
      i.preventDefault();
      const t = i.currentTarget.dataset.itemId;
      t && await this._postAbilityToChat(t);
    }), e.find(".pc-actions-drag-handle").each((i, r) => {
      var u, m;
      const t = r, n = t.closest(".pc-actions-row"), o = ((u = n == null ? void 0 : n.dataset) == null ? void 0 : u.itemId) ?? ((m = t.dataset) == null ? void 0 : m.itemId);
      o && t.addEventListener("dragstart", (p) => this._onInventoryDragHandleStart(p, o, n));
    }), e.find(".pc-actions-row").each((i, r) => {
      const t = r, n = t.dataset.itemId;
      n && (t.addEventListener("dragover", (o) => this._onInventoryRowDragOver(o, n)), t.addEventListener("dragleave", (o) => this._onInventoryRowDragLeave(o, n)), t.addEventListener("drop", (o) => this._onInventoryRowDrop(o, n)));
    });
    const l = e.find(".pc-actions-table")[0];
    l && (l.addEventListener("dragover", (i) => this._onInventoryAreaDragOver(i)), l.addEventListener("dragleave", (i) => this._onInventoryAreaDragLeave(i)), l.addEventListener("drop", (i) => this._onInventoryAreaDrop(i)));
  }
  async _onDropItem(a, e) {
    var m, p, q, w, g, v, O;
    const s = a.target, l = (m = s == null ? void 0 : s.closest) == null ? void 0 : m.call(s, ".pc-ability-slot-single"), i = (p = s == null ? void 0 : s.closest) == null ? void 0 : p.call(s, ".pc-ability-area");
    if (!l && !i) return super._onDropItem(a, e);
    if (!e || e.type !== "Item") return;
    const r = e.uuid ?? ((q = e.data) == null ? void 0 : q.uuid);
    if (!r) return;
    const t = await fromUuid(r);
    if (!t || t.documentName !== "Item" || t.type !== "ability") return;
    const n = (((w = t.system) == null ? void 0 : w.kind) ?? "passive").toString();
    let o = t.id;
    ((g = t.parent) == null ? void 0 : g.id) !== this.actor.id && (o = ((v = (await this.actor.createEmbeddedDocuments("Item", [t.toObject()]))[0]) == null ? void 0 : v.id) ?? o);
    const u = this.actor.system.abilities ?? {};
    if (l) {
      const k = l.dataset.slot;
      if (!k) return;
      const L = {
        faji: "species",
        hatter: "background"
      }[k];
      if (!L || n !== L) return;
      await this.actor.update({
        [`system.abilities.${k}.itemId`]: o,
        [`system.abilities.${k}.name`]: t.name
      });
      return;
    }
    if (i) {
      const k = i.dataset.area;
      if (!k) return;
      const L = {
        passive: "passive",
        active: "active"
      }[k];
      if (!L || n !== L) return;
      const j = Array.isArray((O = u[k]) == null ? void 0 : O.items) ? u[k].items.slice() : Array.isArray(u[k]) ? u[k].slice() : [];
      j.includes(o) || j.push(o), await this.actor.update({ [`system.abilities.${k}.items`]: j });
      return;
    }
  }
  _onWeaponSlotDragOver(a, e) {
    var i, r, t;
    const s = ((i = a.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = a.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let l;
    try {
      l = typeof s == "string" ? JSON.parse(s) : s;
    } catch {
      return;
    }
    (l == null ? void 0 : l.type) === "Item" && (a.preventDefault(), (t = a.currentTarget) == null || t.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(a, e) {
    var n, o, u, m, p, q;
    a.preventDefault(), (n = a.currentTarget) == null || n.classList.remove("pc-weapon-slot-drag-over");
    const s = ((o = a.dataTransfer) == null ? void 0 : o.getData("text/plain")) || ((u = a.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let l;
    try {
      l = typeof s == "string" ? JSON.parse(s) : s;
    } catch {
      return;
    }
    if ((l == null ? void 0 : l.type) !== "Item" || !(l != null && l.uuid)) return;
    const i = await fromUuid(l.uuid);
    if (!i || i.type !== "weapon") return;
    let r = i.id;
    ((m = i.parent) == null ? void 0 : m.id) !== this.actor.id && (r = ((p = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : p.id) ?? r);
    const t = {
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: i.name,
      [`system.weapons.${e}.damage`]: ((q = i.system) == null ? void 0 : q.damage) ?? ""
    };
    await this.actor.update(t);
  }
  _onInventoryDragHandleStart(a, e, s) {
    s && (a.dataTransfer && (a.dataTransfer.setData("text/plain", e), a.dataTransfer.effectAllowed = "move", typeof a.dataTransfer.setDragImage == "function" && a.dataTransfer.setDragImage(s, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(a, e) {
    var l;
    const s = this._draggingInventoryItemId;
    !s || s === e || (a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "move"), (l = a.currentTarget) == null || l.classList.add("pc-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(a, e) {
    var s;
    (s = a.currentTarget) == null || s.classList.remove("pc-actions-row-drag-over");
  }
  async _onInventoryRowDrop(a, e) {
    var o, u;
    a.preventDefault(), (o = a.currentTarget) == null || o.classList.remove("pc-actions-row-drag-over");
    const s = this._draggingInventoryItemId || ((u = a.dataTransfer) == null ? void 0 : u.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !s || !e || s === e) return;
    const i = this.actor.items.contents.slice().sort((m, p) => {
      const q = typeof m.sort == "number" ? m.sort : 0, w = typeof p.sort == "number" ? p.sort : 0;
      return q - w;
    }).map((m) => m.id), r = i.indexOf(s), t = i.indexOf(e);
    if (r === -1 || t === -1) return;
    i.splice(r, 1), i.splice(t, 0, s);
    const n = i.map((m, p) => ({
      _id: m,
      sort: (p + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", n);
  }
  _onInventoryAreaDragOver(a) {
    var l, i, r;
    const e = ((l = a.dataTransfer) == null ? void 0 : l.getData("text/plain")) || ((i = a.dataTransfer) == null ? void 0 : i.getData("application/json")) || "";
    let s = null;
    if (typeof e == "string" && e.trim())
      try {
        s = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (s = e);
    s && s.type !== "Item" || (a.preventDefault(), (r = a.currentTarget) == null || r.classList.add("pc-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(a) {
    var e;
    (e = a.currentTarget) == null || e.classList.remove("pc-actions-table-drag-over");
  }
  _onInventoryAreaDrop(a) {
    var e;
    (e = a.currentTarget) == null || e.classList.remove("pc-actions-table-drag-over");
  }
  async _postAbilityToChat(a) {
    var u, m, p;
    const e = this.actor.items.get(a);
    if (!e || e.type !== "ability") return;
    const s = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", l = Number(((m = e.system) == null ? void 0 : m.kp) ?? 0) || 0, i = (((p = e.system) == null ? void 0 : p.description) ?? "").trim(), r = s === "active" ? "Aktív" : s === "species" ? "Faji" : s === "background" ? "Háttér" : "Passzív", t = l > 0 ? `<p><strong>KP:</strong> ${l}</p>` : "", n = i ? `<p>${i}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${t}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: o,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(a) {
    var s, l, i, r;
    const e = ((s = a.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((l = a.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const t = e.trim();
      if (t.includes(".") && !t.startsWith("{"))
        return { uuid: t };
      try {
        const n = JSON.parse(t);
        return n != null && n.uuid ? n : (i = n == null ? void 0 : n.data) != null && i.uuid ? { uuid: n.data.uuid } : null;
      } catch {
        return console.warn("VOTV | _parseAbilityDrop: could not parse drag data string", e), null;
      }
    }
    return e != null && e.uuid ? e : (r = e == null ? void 0 : e.data) != null && r.uuid ? { uuid: e.data.uuid } : null;
  }
  _onAbilitySingleDragOver(a, e) {
    var s;
    a.preventDefault(), (s = a.currentTarget) == null || s.classList.add("pc-ability-slot-drag-over");
  }
  async _onAbilitySingleDrop(a, e) {
    var o, u, m, p;
    a.preventDefault(), (o = a.currentTarget) == null || o.classList.remove("pc-ability-slot-drag-over");
    const s = this._parseAbilityDrop(a);
    if (!s) return;
    const l = await fromUuid(s.uuid);
    if (!l || l.type !== "ability") return;
    const i = (((u = l.system) == null ? void 0 : u.kind) ?? "passive").toString(), t = {
      faji: "species",
      hatter: "background"
    }[e];
    if (!t || i !== t) return;
    let n = l.id;
    ((m = l.parent) == null ? void 0 : m.id) !== this.actor.id && (n = ((p = (await this.actor.createEmbeddedDocuments("Item", [l.toObject()]))[0]) == null ? void 0 : p.id) ?? n), await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: l.name
    });
  }
  _onAbilityAreaDragOver(a, e) {
    var s;
    a.preventDefault(), (s = a.currentTarget) == null || s.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(a, e) {
    var m, p, q, w, g;
    a.preventDefault(), (m = a.currentTarget) == null || m.classList.remove("pc-ability-area-drag-over");
    const s = this._parseAbilityDrop(a);
    if (!s) return;
    const l = await fromUuid(s.uuid);
    if (!l || l.type !== "ability") return;
    const i = (((p = l.system) == null ? void 0 : p.kind) ?? "passive").toString(), t = {
      passive: "passive",
      active: "active"
    }[e];
    if (!t || i !== t) return;
    let n = l.id;
    ((q = l.parent) == null ? void 0 : q.id) !== this.actor.id && (n = ((w = (await this.actor.createEmbeddedDocuments("Item", [l.toObject()]))[0]) == null ? void 0 : w.id) ?? n);
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((g = o[e]) == null ? void 0 : g.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(a, e) {
    var i, r, t;
    const s = ((i = a.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = a.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let l;
    try {
      l = typeof s == "string" ? JSON.parse(s) : s;
    } catch {
      return;
    }
    (l == null ? void 0 : l.type) === "Item" && (a.preventDefault(), (t = a.currentTarget) == null || t.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(a, e) {
    var t, n, o, u, m;
    a.preventDefault(), (t = a.currentTarget) == null || t.classList.remove("pc-microchip-slot-drag-over");
    const s = ((n = a.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = a.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let l;
    try {
      l = typeof s == "string" ? JSON.parse(s) : s;
    } catch {
      return;
    }
    if ((l == null ? void 0 : l.type) !== "Item" || !(l != null && l.uuid)) return;
    const i = await fromUuid(l.uuid);
    if (!i || i.type !== "microchip") return;
    let r = i.id;
    ((u = i.parent) == null ? void 0 : u.id) !== this.actor.id && (r = ((m = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : m.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: i.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(a, e) {
    const l = (this.actor.system.skills ?? {})[a] ?? 0, i = Number(l) || 0, t = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const o = n.total >= 18 ? "critical" : n.total <= 3 ? "fumble" : null, u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: o } },
      rollMode: u
    });
  }
  async _rollWeapon(a) {
    var k;
    const s = (this.actor.system.weapons ?? {})[a] ?? {}, l = this.actor.system.skills ?? {}, i = this.actor.items.filter((S) => S.type === "weapon");
    let r = null;
    s.itemId && (r = i.find((S) => S.id === s.itemId) ?? null);
    const t = r && r.name || s.name || `Fegyver (${a})`, n = Number(s.bonus || 0) || 0, u = (((k = r == null ? void 0 : r.system) == null ? void 0 : k.type) || "light") === "thrown" ? "grenadeUse" : "firearms", m = Number(l[u] || 0) || 0, p = n + m, w = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, g = new Roll(w);
    await g.evaluate({ async: !0 });
    const v = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, O = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${t} – találat`,
      flags: { "vacuum-of-the-void": { resultType: v } },
      rollMode: O
    });
  }
  async _rollWeaponDamage(a) {
    var r;
    const e = this.actor.items.get(a);
    if (!e || e.type !== "weapon") return;
    const s = (((r = e.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!s) return;
    const l = new Roll(s);
    await l.evaluate({ async: !0 });
    const i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: i
    });
  }
};
E(x, "PARTS", foundry.utils.mergeObject(_(x, x, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), E(x, "DEFAULT_OPTIONS", foundry.utils.mergeObject(_(x, x, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  window: foundry.utils.mergeObject(((Ie = _(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Ie.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((qe = (ke = _(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : ke.window) == null ? void 0 : qe.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let G = x;
const F = class F extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  async _prepareContext(a) {
    let e = await super._prepareContext(a);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
E(F, "PARTS", foundry.utils.mergeObject(_(F, F, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), E(F, "DEFAULT_OPTIONS", foundry.utils.mergeObject(_(F, F, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400
}));
let J = F;
const C = class C extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  async _prepareContext(a) {
    let e = await super._prepareContext(a);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
E(C, "PARTS", foundry.utils.mergeObject(_(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), E(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(_(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420
}));
let z = C;
const M = class M extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  async _prepareContext(a) {
    let e = await super._prepareContext(a);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
E(M, "PARTS", foundry.utils.mergeObject(_(M, M, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), E(M, "DEFAULT_OPTIONS", foundry.utils.mergeObject(_(M, M, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420
}));
let Q = M;
const Pe = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var T, a, e, s;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    }
  }, (T = CONFIG.Actor).dataModels ?? (T.dataModels = {}), CONFIG.Actor.dataModels.pc = Ce, (a = CONFIG.Item).dataModels ?? (a.dataModels = {}), CONFIG.Item.dataModels.weapon = Ke, CONFIG.Item.dataModels.microchip = je, CONFIG.Item.dataModels.ability = Ue, (e = CONFIG.Actor).trackableAttributes ?? (e.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.pc = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.pc = "Player Character", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", G, {
    types: ["pc"],
    makeDefault: !0,
    label: "VOTV.PcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", J, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", z, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Q, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
});
Hooks.on("preCreateScene", (T, a) => {
  var e;
  (e = a == null ? void 0 : a.background) != null && e.src || T.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Pe,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (T, a, e) => {
  var i, r, t;
  const s = (r = (i = T.flags) == null ? void 0 : i["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!s) return;
  const l = (t = a == null ? void 0 : a.querySelector) == null ? void 0 : t.call(a, ".dice-roll");
  l && l.classList.add(`votv-${s}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
