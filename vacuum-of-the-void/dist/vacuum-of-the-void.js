var Ee = Object.defineProperty;
var xe = Object.getPrototypeOf;
var Ne = Reflect.get;
var Ce = (_, i, e) => i in _ ? Ee(_, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[i] = e;
var U = (_, i, e) => Ce(_, typeof i != "symbol" ? i + "" : i, e);
var A = (_, i, e) => Ne(xe(_), e, i);
const { HTMLField: Me, NumberField: y, SchemaField: b, StringField: f, BooleanField: S, ArrayField: ve } = foundry.data.fields;
class Ue extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new b({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new y({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new b({
        health: new b({
          value: new y({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new y({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new b({
          head: new b({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new S({ required: !1, initial: !1 }),
            box2: new S({ required: !1, initial: !1 }),
            box3: new S({ required: !1, initial: !1 })
          }),
          torso: new b({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new S({ required: !1, initial: !1 }),
            box2: new S({ required: !1, initial: !1 }),
            box3: new S({ required: !1, initial: !1 })
          }),
          arms: new b({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new S({ required: !1, initial: !1 }),
            box2: new S({ required: !1, initial: !1 }),
            box3: new S({ required: !1, initial: !1 })
          }),
          legs: new b({
            value: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new S({ required: !1, initial: !1 }),
            box2: new S({ required: !1, initial: !1 }),
            box3: new S({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new b({
          head: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new y({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new b({
          head: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new y({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new b({
          value: new y({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new y({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new y({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new b({
        defense: new y({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new y({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new b({
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
      weapons: new b({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new b({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new b({
        microchips: new b({
          slot1: new b({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new S({ required: !1, initial: !0 })
          }),
          slot2: new b({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new S({ required: !1, initial: !0 })
          }),
          slot3: new b({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new S({ required: !1, initial: !0 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new b({
        faji: new b({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new b({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new b({
          items: new ve(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new b({
          items: new ve(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new b({
        biography: new Me({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: G, SchemaField: je } = foundry.data.fields;
class Ke extends Ue {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new je({
        body: new G({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new G({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new G({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: K, SchemaField: Pe, StringField: W } = foundry.data.fields;
class Re extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new W({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new W({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Pe({
        short: new K({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new K({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new W({ required: !1, blank: !0, initial: "" }),
      quantity: new K({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: J, StringField: Ie } = foundry.data.fields;
class Be extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ie({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ie({
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
const { NumberField: He, StringField: ke } = foundry.data.fields;
class ze extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ke({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ke({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new He({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var De, qe, Te, Oe;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
  async _prepareContext(i) {
    var ie, ne, re, ae, se, oe, le;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = this.actor.system;
    const t = this.actor.system.weapons ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], s = (t.slotOrder ?? "").trim(), l = s ? s.split(/\s*,\s*/).filter((m) => a.includes(m)) : [], d = (ie = this.actor.system.gear) == null ? void 0 : ie.microchips, u = d && typeof d == "object" && !Array.isArray(d) ? d : {}, n = (((ne = u.slot1) == null ? void 0 : ne.itemId) ?? "").trim(), o = (((re = u.slot2) == null ? void 0 : re.itemId) ?? "").trim(), r = (((ae = u.slot3) == null ? void 0 : ae.itemId) ?? "").trim(), p = this.actor.items.contents.filter((m) => m.type !== "ability").slice().sort((m, w) => {
      const I = typeof m.sort == "number" ? m.sort : 0, q = typeof w.sort == "number" ? w.sort : 0;
      return I - q;
    }).map((m) => {
      var de, me, pe, fe, ge, ye, he, be, we;
      const w = m.type === "weapon", I = m.type === "microchip";
      let q = 0, O = "", x = null;
      for (let B = 0; B < l.length; B++) {
        const z = l[B];
        if ((((de = t[z]) == null ? void 0 : de.itemId) ?? "") === m.id) {
          q = B + 1, O = ((me = t[z]) == null ? void 0 : me.bonus) ?? "", x = z;
          break;
        }
      }
      let R = null;
      I && (n === m.id ? R = "slot1" : o === m.id ? R = "slot2" : r === m.id && (R = "slot3"));
      const Se = w && ((pe = m.system) != null && pe.damage) ? m.system.damage : "", ce = w && ((ge = (fe = m.system) == null ? void 0 : fe.range) == null ? void 0 : ge.short) != null ? m.system.range.short : null, ue = w && ((he = (ye = m.system) == null ? void 0 : ye.range) == null ? void 0 : he.long) != null ? m.system.range.long : null, Fe = ce != null && ue != null ? `${ce} / ${ue} m` : "", $e = x ? Number((be = t[x]) == null ? void 0 : be.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: w,
        slotAssignment: q,
        slotBonus: O,
        slotKey: x,
        microchipSlotKey: R,
        isEquipped: !!(x || R),
        damage: Se,
        rangeStr: Fe,
        slotBonusNum: $e,
        quantity: Number(((we = m.system) == null ? void 0 : we.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = p;
    const h = (((se = this.actor.items) == null ? void 0 : se.contents) ?? []).filter((m) => m.type === "weapon"), v = h.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = v;
    const T = "— Nincs fegyver —", F = l.filter((m) => {
      const I = ((t[m] ?? {}).itemId ?? "").trim();
      return I ? !!h.find((O) => O.id === I) : !1;
    });
    e.weaponSlots = F.map((m, w) => {
      const I = t[m] ?? {}, q = (I.itemId ?? "").trim(), O = v.find((x) => x.id === q);
      return {
        slotKey: m,
        slotNum: w + 1,
        displayName: (O == null ? void 0 : O.name) || I.name || T,
        img: (O == null ? void 0 : O.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const g = (((oe = this.actor.items) == null ? void 0 : oe.contents) ?? []).filter((m) => m.type === "microchip").map((m) => ({ id: m.id, name: m.name, img: m.img })), k = "— Nincs chip —", D = (m) => {
      const w = [];
      return m !== 1 && w.push(n), m !== 2 && w.push(o), m !== 3 && w.push(r), w;
    };
    e.microchipItemsSlot1 = g.filter((m) => !D(1).includes(m.id)), e.microchipItemsSlot2 = g.filter((m) => !D(2).includes(m.id)), e.microchipItemsSlot3 = g.filter((m) => !D(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const w = `slot${m}`, I = u[w] ?? {}, q = (I.itemId ?? "").trim(), O = g.find((x) => x.id === q);
      e[`microchip${m}ItemId`] = q, e[`microchip${m}DisplayName`] = (O == null ? void 0 : O.name) || I.name || k, e[`microchip${m}Img`] = (O == null ? void 0 : O.img) || "", e[`microchip${m}Active`] = I.active === !0;
    });
    const L = this.actor.system.abilities ?? {}, H = (((le = this.actor.items) == null ? void 0 : le.contents) ?? []).map((m) => {
      var w, I, q;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((w = m.system) == null ? void 0 : w.kind) ?? "passive",
        description: ((I = m.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((q = m.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), j = new Map(H.map((m) => [m.id, m])), P = "— Nincs képesség —", V = (m) => {
      const w = L[m] ?? {}, I = (w.itemId ?? "").trim(), q = I ? j.get(I) : null, O = (q == null ? void 0 : q.description) ?? "", x = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: I,
        displayName: (q == null ? void 0 : q.name) || w.name || P,
        img: (q == null ? void 0 : q.img) || "",
        description: O,
        kp: x
      };
    };
    e.abilityFajiSlot = V("faji"), e.abilityHatterSlot = V("hatter");
    const ee = (m) => {
      const w = L[m];
      return w ? Array.isArray(w == null ? void 0 : w.items) ? w.items : Array.isArray(w) ? w : [] : [];
    }, te = (m) => m.map((w) => {
      const I = j.get(w);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = te(ee("passive")), e.abilityActiveList = te(ee("active")), e;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    t.on("click", ".pc-skill-label", (n) => {
      var p;
      n.preventDefault();
      const o = n.currentTarget, r = o.dataset.skill, c = ((p = o.textContent) == null ? void 0 : p.trim()) || r;
      this._rollSkill(r, c);
    });
    const a = (n, o) => {
      var p;
      const r = n.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (c) {
        if (n.classList.contains("pc-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = n.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (p = c.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".pc-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("click", ".pc-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("change", ".pc-item-qty", async (n) => {
      const o = n.currentTarget, r = o.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c) return;
      let p = Number(o.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await c.update({ "system.quantity": p });
    }), t.on("click", ".pc-item-delete", async (n) => {
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r), p = {};
      if ((c == null ? void 0 : c.type) === "weapon") {
        const h = this.actor.system.weapons ?? {}, v = (h.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((k) => T.includes(k)) : [], g = F.find((k) => {
          var D;
          return (((D = h[k]) == null ? void 0 : D.itemId) ?? "").trim() === r;
        });
        if (g) {
          const k = F.filter((D) => D !== g);
          p["system.weapons.slotOrder"] = k.join(","), p[`system.weapons.${g}.itemId`] = "", p[`system.weapons.${g}.name`] = "", p[`system.weapons.${g}.damage`] = "", p[`system.weapons.${g}.bonus`] = "";
        }
      }
      Object.keys(p).length && await this.actor.update(p), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".pc-weapon-attack", async (n) => {
      n.preventDefault();
      const r = (n.currentTarget.dataset.slot ?? "").trim();
      r && await this._rollWeapon(r);
    }), t.on("click", ".pc-weapon-damage", async (n) => {
      n.preventDefault();
      const r = (n.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const h = (((this.actor.system.weapons ?? {})[r] ?? {}).itemId ?? "").trim();
      h && await this._rollWeaponDamage(h);
    }), t.on("change", ".pc-weapon-equip-toggle", async (n) => {
      var g;
      const o = n.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.system.weapons ?? {}, p = (c.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((k) => h.includes(k)) : [], T = v.find((k) => {
        var D;
        return (((D = c[k]) == null ? void 0 : D.itemId) ?? "").trim() === r;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let k = v.find((j) => {
          var P;
          return !((P = c[j]) != null && P.itemId);
        });
        const D = new Set(v);
        if (!k) {
          const j = h.find((P) => !D.has(P));
          if (!j) return;
          k = j, v.push(j);
        }
        const L = this.actor.items.get(r), H = {
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${k}.itemId`]: r,
          [`system.weapons.${k}.name`]: (L == null ? void 0 : L.name) ?? "",
          [`system.weapons.${k}.damage`]: ((g = L == null ? void 0 : L.system) == null ? void 0 : g.damage) ?? ""
        };
        await this.actor.update(H);
      } else if (T) {
        const D = {
          "system.weapons.slotOrder": v.filter((L) => L !== T).join(",")
        };
        D[`system.weapons.${T}.itemId`] = "", D[`system.weapons.${T}.name`] = "", D[`system.weapons.${T}.damage`] = "", D[`system.weapons.${T}.bonus`] = "", await this.actor.update(D);
      }
    }), t.on("click", ".pc-microchip-slot-display", (n) => {
      n.preventDefault();
      const o = n.currentTarget;
      if (o.disabled) return;
      const r = o.closest(".pc-microchip-slot-select-wrap"), c = r == null ? void 0 : r.classList.contains("pc-microchip-slot-open");
      t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !c && r && r.classList.add("pc-microchip-slot-open");
    }), t.on("click", ".pc-microchip-slot-option", async (n) => {
      var L;
      n.preventDefault();
      const o = n.currentTarget, r = o.closest(".pc-microchip-slot-select-wrap"), c = r == null ? void 0 : r.querySelector(".pc-microchip-slot-display"), p = c == null ? void 0 : c.dataset.slot;
      if (!p) return;
      const h = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((L = o.textContent) == null ? void 0 : L.trim()) ?? "").trim() || "— Nincs chip —", T = (o.dataset.itemImg ?? "").trim(), F = r == null ? void 0 : r.querySelector(".pc-microchip-slot-display-text");
      F && (F.textContent = v);
      let g = r == null ? void 0 : r.querySelector(".pc-microchip-slot-thumb");
      T ? (g || (g = document.createElement("img"), g.className = "pc-microchip-slot-thumb", g.alt = "", c == null || c.insertBefore(g, F)), g.src = T, g.style.display = "") : g && g.remove(), r == null || r.classList.remove("pc-microchip-slot-open");
      const k = h ? this.actor.items.get(h) : null, D = {
        [`system.gear.microchips.${p}.itemId`]: h,
        [`system.gear.microchips.${p}.name`]: (k == null ? void 0 : k.name) ?? ""
      };
      h && (D[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".pc-microchip-slot-select-wrap").length || t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), t.on("change", ".pc-microchip-slot-active", (n) => {
      const o = n.currentTarget.dataset.slot;
      if (!o) return;
      const r = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: r });
    }), t.find(".pc-microchip-slot").each((n, o) => {
      const r = o.dataset.slot;
      o.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, r)), o.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-microchip-slot-drag-over");
      }), o.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, r));
    }), t.find(".pc-ability-slot-single").each((n, o) => {
      const r = o.dataset.slot;
      r && (o.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, r)), o.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-slot-drag-over");
      }), o.addEventListener("drop", (c) => this._onAbilitySingleDrop(c, r)));
    }), t.find(".pc-ability-area").each((n, o) => {
      const r = o.dataset.area;
      r && (o.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, r)), o.addEventListener("dragleave", (c) => {
        var p;
        return (p = c.currentTarget) == null ? void 0 : p.classList.remove("pc-ability-area-drag-over");
      }), o.addEventListener("drop", (c) => this._onAbilityAreaDrop(c, r)));
    }), t.on("click", ".pc-ability-slot-clear", async (n) => {
      n.preventDefault();
      const o = n.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".pc-ability-pill-remove", async (n) => {
      var v;
      n.preventDefault();
      const o = n.currentTarget.dataset.area, r = n.currentTarget.dataset.itemId;
      if (!o || !r) return;
      const c = this.actor.system.abilities ?? {}, h = (Array.isArray((v = c[o]) == null ? void 0 : v.items) ? c[o].items.slice() : []).filter((T) => T !== r);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".pc-ability-open", (n) => {
      var p;
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      (p = c == null ? void 0 : c.sheet) == null || p.render(!0);
    }), t.on("click", ".pc-ability-chat", async (n) => {
      n.preventDefault();
      const r = n.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.find(".pc-actions-drag-handle").each((n, o) => {
      var h, v;
      const r = o, c = r.closest(".pc-actions-row"), p = ((h = c == null ? void 0 : c.dataset) == null ? void 0 : h.itemId) ?? ((v = r.dataset) == null ? void 0 : v.itemId);
      p && r.addEventListener("dragstart", (T) => this._onInventoryDragHandleStart(T, p, c));
    }), t.find(".pc-actions-row").each((n, o) => {
      const r = o, c = r.dataset.itemId;
      c && (r.addEventListener("dragover", (p) => this._onInventoryRowDragOver(p, c)), r.addEventListener("dragleave", (p) => this._onInventoryRowDragLeave(p, c)), r.addEventListener("drop", (p) => this._onInventoryRowDrop(p, c)));
    });
    const s = t.find(".pc-actions-table")[0];
    s && (s.addEventListener("dragover", (n) => this._onInventoryAreaDragOver(n)), s.addEventListener("dragleave", (n) => this._onInventoryAreaDragLeave(n)), s.addEventListener("drop", (n) => this._onInventoryAreaDrop(n)));
    const l = this, d = (n) => {
      if (!n) return;
      const o = l._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && l.actor.update(o).catch((r) => console.warn("VoidPcSheet save failed", r));
    }, u = (n) => {
      var o, r, c;
      return n && (((r = (o = l.element) == null ? void 0 : o.contains) == null ? void 0 : r.call(o, n)) || l.id && ((c = n.closest) == null ? void 0 : c.call(n, `#${CSS.escape(l.id)}`)));
    };
    l._votvChange = (n) => {
      var r, c, p;
      const o = ((r = n.target) == null ? void 0 : r.form) ?? ((p = (c = n.target) == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      u(o) && d(o);
    }, l._votvInput = (n) => {
      var r, c, p;
      const o = ((r = n.target) == null ? void 0 : r.form) ?? ((p = (c = n.target) == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      u(o) && (clearTimeout(l._votvInputDebounce), l._votvInputDebounce = setTimeout(() => d(o), 300));
    }, document.body.addEventListener("change", l._votvChange, !0), document.body.addEventListener("input", l._votvInput, !0);
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
  async _onDropItem(i, e) {
    var r, c, p, h, v, T, F;
    const t = i.target, a = (r = t == null ? void 0 : t.closest) == null ? void 0 : r.call(t, ".pc-ability-slot-single"), s = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".pc-ability-area");
    if (!a && !s) return super._onDropItem(i, e);
    if (!e || e.type !== "Item") return;
    const l = e.uuid ?? ((p = e.data) == null ? void 0 : p.uuid);
    if (!l) return;
    const d = await fromUuid(l);
    if (!d || d.documentName !== "Item" || d.type !== "ability") return;
    const u = (((h = d.system) == null ? void 0 : h.kind) ?? "passive").toString();
    let n = d.id;
    ((v = d.parent) == null ? void 0 : v.id) !== this.actor.id && (n = ((T = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : T.id) ?? n);
    const o = this.actor.system.abilities ?? {};
    if (a) {
      const g = a.dataset.slot;
      if (!g) return;
      const D = {
        faji: "species",
        hatter: "background"
      }[g];
      if (!D || u !== D) return;
      await this.actor.update({
        [`system.abilities.${g}.itemId`]: n,
        [`system.abilities.${g}.name`]: d.name
      });
      return;
    }
    if (s) {
      const g = s.dataset.area;
      if (!g) return;
      const D = {
        passive: "passive",
        active: "active"
      }[g];
      if (!D || u !== D) return;
      const L = Array.isArray((F = o[g]) == null ? void 0 : F.items) ? o[g].items.slice() : Array.isArray(o[g]) ? o[g].slice() : [];
      L.includes(n) || L.push(n), await this.actor.update({ [`system.abilities.${g}.items`]: L });
      return;
    }
  }
  _onWeaponSlotDragOver(i, e) {
    var s, l, d;
    const t = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var u, n, o, r, c, p;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("pc-weapon-slot-drag-over");
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const s = await fromUuid(a.uuid);
    if (!s || s.type !== "weapon") return;
    let l = s.id;
    ((r = s.parent) == null ? void 0 : r.id) !== this.actor.id && (l = ((c = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : c.id) ?? l);
    const d = {
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: s.name,
      [`system.weapons.${e}.damage`]: ((p = s.system) == null ? void 0 : p.damage) ?? ""
    };
    await this.actor.update(d);
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
    var n, o;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("pc-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((o = i.dataTransfer) == null ? void 0 : o.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const s = this.actor.items.contents.slice().sort((r, c) => {
      const p = typeof r.sort == "number" ? r.sort : 0, h = typeof c.sort == "number" ? c.sort : 0;
      return p - h;
    }).map((r) => r.id), l = s.indexOf(t), d = s.indexOf(e);
    if (l === -1 || d === -1) return;
    s.splice(l, 1), s.splice(d, 0, t);
    const u = s.map((r, c) => ({
      _id: r,
      sort: (c + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(i) {
    var a, s, l;
    const e = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
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
    var o, r, c;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", a = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, s = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = s ? `<p>${s}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var t, a, s, l;
    const e = ((t = i.dataTransfer) == null ? void 0 : t.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const d = e.trim();
      if (d.includes(".") && !d.startsWith("{"))
        return { uuid: d };
      try {
        const u = JSON.parse(d);
        return u != null && u.uuid ? u : (s = u == null ? void 0 : u.data) != null && s.uuid ? { uuid: u.data.uuid } : null;
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
    var n, o, r, c;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("pc-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    const s = (((o = a.system) == null ? void 0 : o.kind) ?? "passive").toString(), d = {
      faji: "species",
      hatter: "background"
    }[e];
    if (!d || s !== d) return;
    let u = a.id;
    ((r = a.parent) == null ? void 0 : r.id) !== this.actor.id && (u = ((c = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : c.id) ?? u), await this.actor.update({
      [`system.abilities.${e}.itemId`]: u,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(i, e) {
    var r, c, p, h, v;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("pc-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    const s = (((c = a.system) == null ? void 0 : c.kind) ?? "passive").toString(), d = {
      passive: "passive",
      active: "active"
    }[e];
    if (!d || s !== d) return;
    let u = a.id;
    ((p = a.parent) == null ? void 0 : p.id) !== this.actor.id && (u = ((h = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : h.id) ?? u);
    const n = this.actor.system.abilities ?? {}, o = Array.isArray((v = n[e]) == null ? void 0 : v.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    o.includes(u) || o.push(u), await this.actor.update({ [`system.abilities.${e}.items`]: o });
  }
  _onMicrochipSlotDragOver(i, e) {
    var s, l, d;
    const t = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var d, u, n, o, r;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("pc-microchip-slot-drag-over");
    const t = ((u = i.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const s = await fromUuid(a.uuid);
    if (!s || s.type !== "microchip") return;
    let l = s.id;
    ((o = s.parent) == null ? void 0 : o.id) !== this.actor.id && (l = ((r = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : r.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: s.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const a = (this.actor.system.skills ?? {})[i] ?? 0, s = Number(a) || 0, d = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, u = new Roll(d);
    await u.evaluate({ async: !0 });
    const n = u.total >= 18 ? "critical" : u.total <= 3 ? "fumble" : null, o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: n } },
      rollMode: o
    });
  }
  async _rollWeapon(i) {
    var g;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, a = this.actor.system.skills ?? {}, s = this.actor.items.filter((k) => k.type === "weapon");
    let l = null;
    t.itemId && (l = s.find((k) => k.id === t.itemId) ?? null);
    const d = l && l.name || t.name || `Fegyver (${i})`, u = Number(t.bonus || 0) || 0, o = (((g = l == null ? void 0 : l.system) == null ? void 0 : g.type) || "light") === "thrown" ? "grenadeUse" : "firearms", r = Number(a[o] || 0) || 0, c = u + r, h = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, v = new Roll(h);
    await v.evaluate({ async: !0 });
    const T = v.total >= 18 ? "critical" : v.total <= 3 ? "fumble" : null, F = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return v.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: T } },
      rollMode: F
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
    const s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: s
    });
  }
};
U(E, "PARTS", foundry.utils.mergeObject(A(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), U(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((De = A(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : De.form) ?? {}, { submitOnChange: !0 }),
  window: foundry.utils.mergeObject(((qe = A(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : qe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Oe = (Te = A(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Te.window) == null ? void 0 : Oe.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let Q = E;
var _e;
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
    const e = this, t = (s) => {
      if (!s) return;
      const l = e._getFormDataForUpdate(s);
      Object.keys(l).length !== 0 && e.document.update(l).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, a = (s) => {
      var l, d, u;
      return s && (((d = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : d.call(l, s)) || e.id && ((u = s.closest) == null ? void 0 : u.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
      a(l) && t(l);
    }, e._votvInput = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
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
U(N, "PARTS", foundry.utils.mergeObject(A(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((_e = A(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : _e.form) ?? {}, { submitOnChange: !0 })
}));
let X = N;
var Le;
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
    const e = this, t = (s) => {
      if (!s) return;
      const l = e._getFormDataForUpdate(s);
      Object.keys(l).length !== 0 && e.document.update(l).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, a = (s) => {
      var l, d, u;
      return s && (((d = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : d.call(l, s)) || e.id && ((u = s.closest) == null ? void 0 : u.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
      a(l) && t(l);
    }, e._votvInput = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
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
U(C, "PARTS", foundry.utils.mergeObject(A(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Le = A(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Le.form) ?? {}, { submitOnChange: !0 })
}));
let Y = C;
var Ae;
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
    const e = this, t = (s) => {
      if (!s) return;
      const l = e._getFormDataForUpdate(s);
      Object.keys(l).length !== 0 && e.document.update(l).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, a = (s) => {
      var l, d, u;
      return s && (((d = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : d.call(l, s)) || e.id && ((u = s.closest) == null ? void 0 : u.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
      a(l) && t(l);
    }, e._votvInput = (s) => {
      var d, u, n;
      const l = ((d = s.target) == null ? void 0 : d.form) ?? ((n = (u = s.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "form"));
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
U(M, "PARTS", foundry.utils.mergeObject(A(M, M, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(M, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(M, M, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ae = A(M, M, "DEFAULT_OPTIONS")) == null ? void 0 : Ae.form) ?? {}, { submitOnChange: !0 })
}));
let Z = M;
const Ge = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var _, i, e, t;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    }
  }, (_ = CONFIG.Actor).dataModels ?? (_.dataModels = {}), CONFIG.Actor.dataModels.pc = Ke, (i = CONFIG.Item).dataModels ?? (i.dataModels = {}), CONFIG.Item.dataModels.weapon = Re, CONFIG.Item.dataModels.microchip = Be, CONFIG.Item.dataModels.ability = ze, (e = CONFIG.Actor).trackableAttributes ?? (e.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.pc = {
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
  });
});
Hooks.on("preCreateScene", (_, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || _.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Ge,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (_, i, e) => {
  var s, l, d;
  const t = (l = (s = _.flags) == null ? void 0 : s["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const a = (d = i == null ? void 0 : i.querySelector) == null ? void 0 : d.call(i, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
