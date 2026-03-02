var We = Object.defineProperty;
var Ye = Object.getPrototypeOf;
var Je = Reflect.get;
var Xe = (O, i, e) => i in O ? We(O, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : O[i] = e;
var P = (O, i, e) => Xe(O, typeof i != "symbol" ? i + "" : i, e);
var N = (O, i, e) => Je(Ye(O), e, i);
const { HTMLField: Qe, NumberField: w, SchemaField: D, StringField: g, BooleanField: x, ArrayField: Fe } = foundry.data.fields;
class Ze extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new w({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
      }),
      resources: new D({
        health: new D({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new D({
          head: new D({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new D({
          head: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new D({
          head: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new D({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new D({
        defense: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new D({
        deception: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new w({ required: !1, integer: !0, min: 0, initial: 0 })
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
            active: new x({ required: !1, initial: !0 })
          }),
          slot2: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !0 })
          }),
          slot3: new D({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !0 })
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
          items: new Fe(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new Fe(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new D({
        biography: new Qe({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: X, SchemaField: Ve } = foundry.data.fields;
class et extends Ze {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ve({
        body: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new X({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: K, SchemaField: tt, StringField: Q } = foundry.data.fields;
class it extends foundry.abstract.TypeDataModel {
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
      range: new tt({
        short: new K({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new K({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new Q({ required: !1, blank: !0, initial: "" }),
      quantity: new K({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Z, StringField: Ne } = foundry.data.fields;
class nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ne({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ne({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Z({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Z({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Z({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: rt, StringField: xe } = foundry.data.fields;
class at extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new xe({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new xe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new rt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var $e, Ce, Me, He;
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
    var y, h, a, d, u;
    const t = (y = game.votv) == null ? void 0 : y._lastPcSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 250) return this;
    const n = this.form ?? this.element;
    let r = { scrollTop: null, focus: null };
    if (n) {
      const l = document.activeElement, f = n.contains(l), I = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      f && I && (r.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
      const b = ((h = n.closest) == null ? void 0 : h.call(n, ".votv-scroll")) ?? ((a = n.querySelector) == null ? void 0 : a.call(n, ".votv-scroll")) ?? ((u = (d = this.element) == null ? void 0 : d.querySelector) == null ? void 0 : u.call(d, ".votv-scroll")) ?? (n.scrollHeight > n.clientHeight ? n : null);
      b && (r.scrollTop = b.scrollTop);
    }
    const o = await super.render(i, e), s = this.form ?? this.element, c = r.scrollTop, m = r.focus;
    return (c != null || m) && s && requestAnimationFrame(() => {
      var l, f, I, b, T, A;
      if (c != null) {
        const k = ((l = s.closest) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".votv-scroll")) ?? ((b = (I = this.element) == null ? void 0 : I.querySelector) == null ? void 0 : b.call(I, ".votv-scroll")) ?? (s.scrollHeight > s.clientHeight ? s : null);
        k && (k.scrollTop = c);
      }
      if ((m == null ? void 0 : m.name) != null || (m == null ? void 0 : m.id) != null) {
        const k = ((T = s.querySelector) == null ? void 0 : T.call(s, m.id ? `#${CSS.escape(m.id)}` : null)) ?? (m.name ? (A = s.querySelector) == null ? void 0 : A.call(s, `[name="${CSS.escape(m.name)}"]`) : null);
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && (k.focus(), typeof k.selectionStart == "number" && (k.selectionStart = m.selectionStart ?? 0, k.selectionEnd = m.selectionEnd ?? m.selectionStart ?? 0));
      }
    }), o;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const r = Math.floor(n / 3), o = Math.floor(2 * n / 3);
    return t <= r ? 1 : t <= o ? 2 : 3;
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var o, s, c, m;
    const e = F.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, n = ((c = (s = t.hitLocations) == null ? void 0 : s[e]) == null ? void 0 : c.value) ?? 0, r = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return F._healthStatusFromRatio(r, n);
  }
  async _prepareContext(i) {
    var le, ce, ue, de, me, pe, fe, ge, he, ye, be, we, ve;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ue = (ce = (le = this.actor.system) == null ? void 0 : le.resources) == null ? void 0 : ce.stress) == null ? void 0 : ue.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, r = n.hitLocations ?? {}, o = n.currentHealth ?? {}, s = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of s) {
      const q = ((de = r[p]) == null ? void 0 : de.value) ?? 0, S = o[p] ?? 0;
      e.computedHealthStatus[p] = F._healthStatusFromRatio(S, q);
    }
    const c = e.computedHealthStatus.legs ?? 3, m = Number(((pe = (me = this.actor.system) == null ? void 0 : me.combat) == null ? void 0 : pe.givenSpeed) ?? 0) || 0;
    c === 0 ? e.effectiveGivenSpeed = 0 : c === 1 ? e.effectiveGivenSpeed = Math.max(0, m - 6) : c === 2 ? e.effectiveGivenSpeed = Math.max(0, m - 3) : e.effectiveGivenSpeed = m;
    const y = F.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, q] of Object.entries(y)) {
      const S = e.computedHealthStatus[q];
      e.skillHealthStatus[p] = S, e.skillDisabled[p] = S === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const h = this.actor.system.weapons ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], d = (h.slotOrder ?? "").trim(), u = d ? d.split(/\s*,\s*/).filter((p) => a.includes(p)) : [], l = (fe = this.actor.system.gear) == null ? void 0 : fe.microchips, f = l && typeof l == "object" && !Array.isArray(l) ? l : {}, I = (((ge = f.slot1) == null ? void 0 : ge.itemId) ?? "").trim(), b = (((he = f.slot2) == null ? void 0 : he.itemId) ?? "").trim(), T = (((ye = f.slot3) == null ? void 0 : ye.itemId) ?? "").trim(), k = this.actor.items.contents.filter((p) => p.type !== "ability").slice().sort((p, q) => {
      const S = typeof p.sort == "number" ? p.sort : 0, _ = typeof q.sort == "number" ? q.sort : 0;
      return S - _;
    }).map((p) => {
      var qe, De, Se, Te, _e, Oe, Le, Ae, Ee;
      const q = p.type === "weapon", S = p.type === "microchip";
      let _ = 0, E = "", M = null;
      for (let z = 0; z < u.length; z++) {
        const J = u[z];
        if ((((qe = h[J]) == null ? void 0 : qe.itemId) ?? "") === p.id) {
          _ = z + 1, E = ((De = h[J]) == null ? void 0 : De.bonus) ?? "", M = J;
          break;
        }
      }
      let G = null;
      S && (I === p.id ? G = "slot1" : b === p.id ? G = "slot2" : T === p.id && (G = "slot3"));
      const Be = q && ((Se = p.system) != null && Se.damage) ? p.system.damage : "", Ie = q && ((_e = (Te = p.system) == null ? void 0 : Te.range) == null ? void 0 : _e.short) != null ? p.system.range.short : null, ke = q && ((Le = (Oe = p.system) == null ? void 0 : Oe.range) == null ? void 0 : Le.long) != null ? p.system.range.long : null, Ge = Ie != null && ke != null ? `${Ie} / ${ke} m` : "", ze = M ? Number((Ae = h[M]) == null ? void 0 : Ae.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: q,
        slotAssignment: _,
        slotBonus: E,
        slotKey: M,
        microchipSlotKey: G,
        isEquipped: !!(M || G),
        damage: Be,
        rangeStr: Ge,
        slotBonusNum: ze,
        quantity: Number(((Ee = p.system) == null ? void 0 : Ee.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = k;
    const v = (((be = this.actor.items) == null ? void 0 : be.contents) ?? []).filter((p) => p.type === "weapon"), L = v.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = L;
    const C = "— Nincs fegyver —", W = u.filter((p) => {
      const S = ((h[p] ?? {}).itemId ?? "").trim();
      return S ? !!v.find((E) => E.id === S) : !1;
    });
    e.weaponSlots = W.map((p, q) => {
      const S = h[p] ?? {}, _ = (S.itemId ?? "").trim(), E = L.find((M) => M.id === _);
      return {
        slotKey: p,
        slotNum: q + 1,
        displayName: (E == null ? void 0 : E.name) || S.name || C,
        img: (E == null ? void 0 : E.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const H = (((we = this.actor.items) == null ? void 0 : we.contents) ?? []).filter((p) => p.type === "microchip").map((p) => ({ id: p.id, name: p.name, img: p.img })), B = "— Nincs chip —", Y = (p) => {
      const q = [];
      return p !== 1 && q.push(I), p !== 2 && q.push(b), p !== 3 && q.push(T), q;
    };
    e.microchipItemsSlot1 = H.filter((p) => !Y(1).includes(p.id)), e.microchipItemsSlot2 = H.filter((p) => !Y(2).includes(p.id)), e.microchipItemsSlot3 = H.filter((p) => !Y(3).includes(p.id)), ["1", "2", "3"].forEach((p) => {
      const q = `slot${p}`, S = f[q] ?? {}, _ = (S.itemId ?? "").trim(), E = H.find((M) => M.id === _);
      e[`microchip${p}ItemId`] = _, e[`microchip${p}DisplayName`] = (E == null ? void 0 : E.name) || S.name || B, e[`microchip${p}Img`] = (E == null ? void 0 : E.img) || "", e[`microchip${p}Active`] = S.active === !0;
    });
    const ne = this.actor.system.abilities ?? {}, Re = (((ve = this.actor.items) == null ? void 0 : ve.contents) ?? []).map((p) => {
      var q, S, _;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((q = p.system) == null ? void 0 : q.kind) ?? "passive",
        description: ((S = p.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((_ = p.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), re = new Map(Re.map((p) => [p.id, p])), Ke = "— Nincs képesség —", ae = (p) => {
      const q = ne[p] ?? {}, S = (q.itemId ?? "").trim(), _ = S ? re.get(S) : null, E = (_ == null ? void 0 : _.description) ?? "", M = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: S,
        displayName: (_ == null ? void 0 : _.name) || q.name || Ke,
        img: (_ == null ? void 0 : _.img) || "",
        description: E,
        kp: M
      };
    };
    e.abilityFajiSlot = ae("faji"), e.abilityHatterSlot = ae("hatter");
    const se = (p) => {
      const q = ne[p];
      return q ? Array.isArray(q == null ? void 0 : q.items) ? q.items : Array.isArray(q) ? q : [] : [];
    }, oe = (p) => p.map((q) => {
      const S = re.get(q);
      return S ? {
        id: S.id,
        name: S.name,
        img: S.img,
        description: S.description,
        kp: S.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = oe(se("passive")), e.abilityActiveList = oe(se("active")), e;
  }
  _attachFrameListeners(i) {
    var h;
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const n = (a) => {
      var l;
      const d = a ? a.currentTarget : (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
      if (!d) return;
      const u = Number(d.value) || 0;
      d.classList.toggle("pc-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const r = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    r && n({ currentTarget: r }), t.on("click", ".pc-portrait-img", (a) => {
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (d) => {
          d && this.actor.update({ img: d });
        }
      }).browse();
    }), t.on("click", ".pc-skill-label", (a) => {
      var f;
      a.preventDefault();
      const d = a.currentTarget, u = d.dataset.skill, l = ((f = d.textContent) == null ? void 0 : f.trim()) || u;
      this._rollSkill(u, l);
    }), t.on("click", ".pc-roll-morale-d8", (a) => {
      a.preventDefault(), this._rollMorale();
    });
    const o = (a, d) => {
      var f;
      const u = a.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      if (l) {
        if (a.classList.contains("pc-weapon-label") && (d.altKey || d.shiftKey || d.ctrlKey || d.metaKey)) {
          const I = a.dataset.weaponSlot;
          I && this._rollWeapon(I);
          return;
        }
        (f = l.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".pc-inventory-item-name", (a) => {
      a.preventDefault(), o(a.currentTarget, a);
    }), t.on("click", ".pc-inventory-item-icon", (a) => {
      a.preventDefault(), o(a.currentTarget, a);
    }), t.on("change", ".pc-item-qty", async (a) => {
      const d = a.currentTarget, u = d.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      if (!l) return;
      let f = Number(d.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await l.update({ "system.quantity": f });
    }), t.on("click", ".pc-item-delete", async (a) => {
      a.preventDefault();
      const u = a.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u), f = {};
      if ((l == null ? void 0 : l.type) === "weapon") {
        const I = this.actor.system.weapons ?? {}, b = (I.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = b ? b.split(/\s*,\s*/).filter((v) => T.includes(v)) : [], k = A.find((v) => {
          var L;
          return (((L = I[v]) == null ? void 0 : L.itemId) ?? "").trim() === u;
        });
        if (k) {
          const v = A.filter((L) => L !== k);
          f["system.weapons.slotOrder"] = v.join(","), f[`system.weapons.${k}.itemId`] = "", f[`system.weapons.${k}.name`] = "", f[`system.weapons.${k}.damage`] = "", f[`system.weapons.${k}.bonus`] = "";
        }
      }
      Object.keys(f).length && await this.actor.update(f), await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".pc-weapon-attack", async (a) => {
      a.preventDefault();
      const u = (a.currentTarget.dataset.slot ?? "").trim();
      u && await this._rollWeapon(u);
    }), t.on("click", ".pc-weapon-damage", async (a) => {
      a.preventDefault();
      const u = (a.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const I = (((this.actor.system.weapons ?? {})[u] ?? {}).itemId ?? "").trim();
      I && await this._rollWeaponDamage(I);
    }), t.on("change", ".pc-weapon-equip-toggle", async (a) => {
      var k;
      const d = a.currentTarget, u = (d.dataset.itemId ?? "").trim();
      if (!u) return;
      const l = this.actor.system.weapons ?? {}, f = (l.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = f ? f.split(/\s*,\s*/).filter((v) => I.includes(v)) : [], T = b.find((v) => {
        var L;
        return (((L = l[v]) == null ? void 0 : L.itemId) ?? "").trim() === u;
      }) ?? null;
      if (d.checked) {
        if (T) return;
        let v = b.find((H) => {
          var B;
          return !((B = l[H]) != null && B.itemId);
        });
        const L = new Set(b);
        if (!v) {
          const H = I.find((B) => !L.has(B));
          if (!H) return;
          v = H, b.push(H);
        }
        const C = this.actor.items.get(u), W = {
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${v}.itemId`]: u,
          [`system.weapons.${v}.name`]: (C == null ? void 0 : C.name) ?? "",
          [`system.weapons.${v}.damage`]: ((k = C == null ? void 0 : C.system) == null ? void 0 : k.damage) ?? ""
        };
        await this.actor.update(W);
      } else if (T) {
        const L = {
          "system.weapons.slotOrder": b.filter((C) => C !== T).join(",")
        };
        L[`system.weapons.${T}.itemId`] = "", L[`system.weapons.${T}.name`] = "", L[`system.weapons.${T}.damage`] = "", L[`system.weapons.${T}.bonus`] = "", await this.actor.update(L);
      }
    }), t.on("click", ".pc-microchip-slot-display", (a) => {
      a.preventDefault();
      const d = a.currentTarget;
      if (d.disabled) return;
      const u = d.closest(".pc-microchip-slot-select-wrap"), l = u == null ? void 0 : u.classList.contains("pc-microchip-slot-open");
      t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open"), !l && u && u.classList.add("pc-microchip-slot-open");
    }), t.on("click", ".pc-microchip-slot-option", async (a) => {
      var C;
      a.preventDefault();
      const d = a.currentTarget, u = d.closest(".pc-microchip-slot-select-wrap"), l = u == null ? void 0 : u.querySelector(".pc-microchip-slot-display"), f = l == null ? void 0 : l.dataset.slot;
      if (!f) return;
      const I = (d.dataset.itemId ?? "").trim(), b = (d.dataset.itemName ?? ((C = d.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs chip —", T = (d.dataset.itemImg ?? "").trim(), A = u == null ? void 0 : u.querySelector(".pc-microchip-slot-display-text");
      A && (A.textContent = b);
      let k = u == null ? void 0 : u.querySelector(".pc-microchip-slot-thumb");
      T ? (k || (k = document.createElement("img"), k.className = "pc-microchip-slot-thumb", k.alt = "", l == null || l.insertBefore(k, A)), k.src = T, k.style.display = "") : k && k.remove(), u == null || u.classList.remove("pc-microchip-slot-open");
      const v = I ? this.actor.items.get(I) : null, L = {
        [`system.gear.microchips.${f}.itemId`]: I,
        [`system.gear.microchips.${f}.name`]: (v == null ? void 0 : v.name) ?? ""
      };
      I && (L[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(L);
    }), $(document).on("click.votv-microchip-dropdown", (a) => {
      $(a.target).closest(".pc-microchip-slot-select-wrap").length || t.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    }), t.on("change", ".pc-microchip-slot-active", (a) => {
      const d = a.currentTarget.dataset.slot;
      if (!d) return;
      const u = a.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${d}.active`]: u });
    }), t.find(".pc-microchip-slot").each((a, d) => {
      const u = d.dataset.slot;
      d.addEventListener("dragover", (l) => this._onMicrochipSlotDragOver(l, u)), d.addEventListener("dragleave", (l) => {
        var f;
        return (f = l.currentTarget) == null ? void 0 : f.classList.remove("pc-microchip-slot-drag-over");
      }), d.addEventListener("drop", (l) => this._onMicrochipSlotDrop(l, u));
    }), t.find(".pc-ability-slot-single").each((a, d) => {
      const u = d.dataset.slot;
      u && (d.addEventListener("dragover", (l) => this._onAbilitySingleDragOver(l, u)), d.addEventListener("dragleave", (l) => {
        var f;
        return (f = l.currentTarget) == null ? void 0 : f.classList.remove("pc-ability-slot-drag-over");
      }), d.addEventListener("drop", (l) => this._onAbilitySingleDrop(l, u)));
    }), t.find(".pc-ability-area").each((a, d) => {
      const u = d.dataset.area;
      u && (d.addEventListener("dragover", (l) => this._onAbilityAreaDragOver(l, u)), d.addEventListener("dragleave", (l) => {
        var f;
        return (f = l.currentTarget) == null ? void 0 : f.classList.remove("pc-ability-area-drag-over");
      }), d.addEventListener("drop", (l) => this._onAbilityAreaDrop(l, u)));
    }), t.on("click", ".pc-ability-slot-clear", async (a) => {
      a.preventDefault();
      const d = a.currentTarget.dataset.slot;
      d && await this.actor.update({
        [`system.abilities.${d}.itemId`]: "",
        [`system.abilities.${d}.name`]: ""
      });
    }), t.on("click", ".pc-ability-pill-remove", async (a) => {
      var b;
      a.preventDefault();
      const d = a.currentTarget.dataset.area, u = a.currentTarget.dataset.itemId;
      if (!d || !u) return;
      const l = this.actor.system.abilities ?? {}, I = (Array.isArray((b = l[d]) == null ? void 0 : b.items) ? l[d].items.slice() : []).filter((T) => T !== u);
      await this.actor.update({ [`system.abilities.${d}.items`]: I });
    }), t.on("click", ".pc-ability-open", (a) => {
      var f;
      a.preventDefault();
      const u = a.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      (f = l == null ? void 0 : l.sheet) == null || f.render(!0);
    }), t.on("click", ".pc-ability-chat", async (a) => {
      a.preventDefault();
      const u = a.currentTarget.dataset.itemId;
      u && await this._postAbilityToChat(u);
    }), t.find(".pc-actions-drag-handle").each((a, d) => {
      var I, b;
      const u = d, l = u.closest(".pc-actions-row"), f = ((I = l == null ? void 0 : l.dataset) == null ? void 0 : I.itemId) ?? ((b = u.dataset) == null ? void 0 : b.itemId);
      f && u.addEventListener("dragstart", (T) => this._onInventoryDragHandleStart(T, f, l));
    }), t.find(".pc-actions-row").each((a, d) => {
      const u = d, l = u.dataset.itemId;
      l && (u.addEventListener("dragover", (f) => this._onInventoryRowDragOver(f, l)), u.addEventListener("dragleave", (f) => this._onInventoryRowDragLeave(f, l)), u.addEventListener("drop", (f) => this._onInventoryRowDrop(f, l)));
    });
    const s = t.find(".pc-actions-table")[0];
    s && (s.addEventListener("dragover", (a) => this._onInventoryAreaDragOver(a)), s.addEventListener("dragleave", (a) => this._onInventoryAreaDragLeave(a)), s.addEventListener("drop", (a) => this._onInventoryAreaDrop(a)));
    const c = this, m = (a) => {
      var l, f, I, b;
      if (!a) return;
      const d = c._getFormDataForUpdate(a);
      if (Object.keys(d).length === 0) return;
      const u = ((f = (l = d.system) == null ? void 0 : l.resources) == null ? void 0 : f.currentHealth) != null || ((b = (I = d.system) == null ? void 0 : I.resources) == null ? void 0 : b.hitLocations) != null;
      c.actor.update(d).then(() => {
        u && setTimeout(() => c.render(!0), 260);
      }).catch((T) => console.warn("VoidPcSheet save failed", T));
    }, y = (a) => {
      var d, u, l;
      return a && (((u = (d = c.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, a)) || c.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (a) => {
      const d = a.target;
      if (!d || !d.form) return;
      const u = d.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const l = d.form;
      y(l) && (game.votv && (game.votv._lastPcSheetBlurSave = { appId: c.id, at: Date.now() }), m(l));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var s, c, m;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((s = this.actor.system) == null ? void 0 : s.resources) ?? {},
      ((c = foundry.utils.expandObject(e).system) == null ? void 0 : c.resources) ?? {}
    ), n = t.hitLocations ?? {}, r = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const y of o) {
      const h = ((m = n[y]) == null ? void 0 : m.value) ?? 0, a = r[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, F._healthStatusFromRatio(a, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var h, a, d, u, l, f, I;
    const t = i.target, n = (h = t == null ? void 0 : t.closest) == null ? void 0 : h.call(t, ".pc-ability-slot-single"), r = (a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, ".pc-ability-area");
    if (!n && !r) return super._onDropItem(i, e);
    if (!e || e.type !== "Item") return;
    const o = e.uuid ?? ((d = e.data) == null ? void 0 : d.uuid);
    if (!o) return;
    const s = await fromUuid(o);
    if (!s || s.documentName !== "Item" || s.type !== "ability") return;
    const c = (((u = s.system) == null ? void 0 : u.kind) ?? "passive").toString();
    let m = s.id;
    ((l = s.parent) == null ? void 0 : l.id) !== this.actor.id && (m = ((f = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : f.id) ?? m);
    const y = this.actor.system.abilities ?? {};
    if (n) {
      const b = n.dataset.slot;
      if (!b) return;
      const A = {
        faji: "species",
        hatter: "background"
      }[b];
      if (!A || c !== A) return;
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
      if (!A || c !== A) return;
      const k = Array.isArray((I = y[b]) == null ? void 0 : I.items) ? y[b].items.slice() : Array.isArray(y[b]) ? y[b].slice() : [];
      k.includes(m) || k.push(m), await this.actor.update({ [`system.abilities.${b}.items`]: k });
      return;
    }
  }
  _onWeaponSlotDragOver(i, e) {
    var r, o, s;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("pc-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var c, m, y, h, a, d;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("pc-weapon-slot-drag-over");
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
    let o = r.id;
    ((h = r.parent) == null ? void 0 : h.id) !== this.actor.id && (o = ((a = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : a.id) ?? o);
    const s = {
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((d = r.system) == null ? void 0 : d.damage) ?? ""
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
      const d = typeof h.sort == "number" ? h.sort : 0, u = typeof a.sort == "number" ? a.sort : 0;
      return d - u;
    }).map((h) => h.id), o = r.indexOf(t), s = r.indexOf(e);
    if (o === -1 || s === -1) return;
    r.splice(o, 1), r.splice(s, 0, t);
    const c = r.map((h, a) => ({
      _id: h,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", c);
  }
  _onInventoryAreaDragOver(i) {
    var n, r, o;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("pc-actions-table-drag-over"));
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, r = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", s = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", c = r ? `<p>${r}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${s}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var t, n, r, o;
    const e = ((t = i.dataTransfer) == null ? void 0 : t.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    if (!e) return null;
    if (typeof e == "string") {
      const s = e.trim();
      if (s.includes(".") && !s.startsWith("{"))
        return { uuid: s };
      try {
        const c = JSON.parse(s);
        return c != null && c.uuid ? c : (r = c == null ? void 0 : c.data) != null && r.uuid ? { uuid: c.data.uuid } : null;
      } catch {
        return console.warn("VOTV | _parseAbilityDrop: could not parse drag data string", e), null;
      }
    }
    return e != null && e.uuid ? e : (o = e == null ? void 0 : e.data) != null && o.uuid ? { uuid: e.data.uuid } : null;
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
    let c = n.id;
    ((h = n.parent) == null ? void 0 : h.id) !== this.actor.id && (c = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? c), await this.actor.update({
      [`system.abilities.${e}.itemId`]: c,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var t;
    i.preventDefault(), (t = i.currentTarget) == null || t.classList.add("pc-ability-area-drag-over");
  }
  async _onAbilityAreaDrop(i, e) {
    var h, a, d, u, l;
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
    let c = n.id;
    ((d = n.parent) == null ? void 0 : d.id) !== this.actor.id && (c = ((u = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : u.id) ?? c);
    const m = this.actor.system.abilities ?? {}, y = Array.isArray((l = m[e]) == null ? void 0 : l.items) ? m[e].items.slice() : Array.isArray(m[e]) ? m[e].slice() : [];
    y.includes(c) || y.push(c), await this.actor.update({ [`system.abilities.${e}.items`]: y });
  }
  _onMicrochipSlotDragOver(i, e) {
    var r, o, s;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("pc-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var s, c, m, y, h;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("pc-microchip-slot-drag-over");
    const t = ((c = i.dataTransfer) == null ? void 0 : c.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const r = await fromUuid(n.uuid);
    if (!r || r.type !== "microchip") return;
    let o = r.id;
    ((y = r.parent) == null ? void 0 : y.id) !== this.actor.id && (o = ((h = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : h.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0;
    let r = Number(n) || 0;
    const o = this._getSkillHealthStatus(i);
    o === 1 ? r -= 6 : o === 2 && (r -= 3);
    const c = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, m = new Roll(c);
    await m.evaluate({ async: !0 });
    const y = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y } },
      rollMode: h
    });
  }
  async _rollMorale() {
    var r;
    const i = Number(((r = this.actor.system.resources) == null ? void 0 : r.morale) ?? 0) || 0;
    if (i <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const n = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": n });
  }
  async _rollWeapon(i) {
    var b;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, r = this.actor.items.filter((T) => T.type === "weapon");
    let o = null;
    t.itemId && (o = r.find((T) => T.id === t.itemId) ?? null);
    const s = o && o.name || t.name || `Fegyver (${i})`, c = Number(t.bonus || 0) || 0, y = (((b = o == null ? void 0 : o.system) == null ? void 0 : b.type) || "light") === "thrown" ? "grenadeUse" : "firearms", h = Number(n[y] || 0) || 0, a = c + h, u = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, l = new Roll(u);
    await l.evaluate({ async: !0 });
    const f = l.total >= 18 ? "critical" : l.total <= 3 ? "fumble" : null, I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${s} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f } },
      rollMode: I
    });
  }
  async _rollWeaponDamage(i) {
    var o;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "weapon") return;
    const t = (((o = e.system) == null ? void 0 : o.damage) ?? "").trim();
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
P(F, "PARTS", foundry.utils.mergeObject(N(F, F, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
})), P(F, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(F, F, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
  template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject((($e = N(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : $e.form) ?? {}, { submitOnChange: !0 }),
  window: foundry.utils.mergeObject(((Ce = N(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Ce.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((He = (Me = N(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Me.window) == null ? void 0 : He.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
P(F, "BODY_PART_BY_SKILL", {
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
let V = F;
var Pe;
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
      const o = e._getFormDataForUpdate(r);
      Object.keys(o).length !== 0 && e.document.update(o).catch((s) => console.warn("VoidWeaponSheet save failed", s));
    }, n = (r) => {
      var o, s, c;
      return r && (((s = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : s.call(o, r)) || e.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && t(o);
    }, e._votvInput = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
P(U, "PARTS", foundry.utils.mergeObject(N(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), P(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Pe = N(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Pe.form) ?? {}, { submitOnChange: !0 })
}));
let ee = U;
var Ue;
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
      const o = e._getFormDataForUpdate(r);
      Object.keys(o).length !== 0 && e.document.update(o).catch((s) => console.warn("VoidMicrochipSheet save failed", s));
    }, n = (r) => {
      var o, s, c;
      return r && (((s = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : s.call(o, r)) || e.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && t(o);
    }, e._votvInput = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
P(j, "PARTS", foundry.utils.mergeObject(N(j, j, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), P(j, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(j, j, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ue = N(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.form) ?? {}, { submitOnChange: !0 })
}));
let te = j;
var je;
const R = class R extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const o = e._getFormDataForUpdate(r);
      Object.keys(o).length !== 0 && e.document.update(o).catch((s) => console.warn("VoidAbilitySheet save failed", s));
    }, n = (r) => {
      var o, s, c;
      return r && (((s = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : s.call(o, r)) || e.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && t(o);
    }, e._votvInput = (r) => {
      var s, c, m;
      const o = ((s = r.target) == null ? void 0 : s.form) ?? ((m = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : m.call(c, "form"));
      n(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
P(R, "PARTS", foundry.utils.mergeObject(N(R, R, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), P(R, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(R, R, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((je = N(R, R, "DEFAULT_OPTIONS")) == null ? void 0 : je.form) ?? {}, { submitOnChange: !0 })
}));
let ie = R;
const st = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var O, i, e, t;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (O = CONFIG.Actor).dataModels ?? (O.dataModels = {}), CONFIG.Actor.dataModels.pc = et, (i = CONFIG.Item).dataModels ?? (i.dataModels = {}), CONFIG.Item.dataModels.weapon = it, CONFIG.Item.dataModels.microchip = nt, CONFIG.Item.dataModels.ability = at, (e = CONFIG.Actor).trackableAttributes ?? (e.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.pc = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (t = CONFIG.Actor).typeLabels ?? (t.typeLabels = {}), CONFIG.Actor.typeLabels.pc = "Player Character", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", V, {
    types: ["pc"],
    makeDefault: !0,
    label: "VOTV.PcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ee, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", te, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ie, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  }), Hooks.on("updateActor", (n, r, o, s) => {
    var I, b, T, A, k;
    const c = n == null ? void 0 : n.id;
    if (!c) return;
    const m = document.activeElement, y = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA" || m.isContentEditable), h = [], a = (I = game.actors) == null ? void 0 : I.get(c);
    a != null && a.apps && h.push(...Array.from(a.apps));
    const d = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const v of d)
      ((b = v.document) == null ? void 0 : b.id) !== c || ((T = v.document) == null ? void 0 : T.documentName) !== "Actor" || ((A = v.constructor) == null ? void 0 : A.name) !== "VoidPcSheet" || h.includes(v) || h.push(v);
    if (y && h.some((v) => {
      const L = (v == null ? void 0 : v.form) ?? (v == null ? void 0 : v.element);
      return L && L.contains(m);
    })) return;
    const l = (k = game.votv) == null ? void 0 : k._lastPcSheetBlurSave, f = l && Date.now() - l.at < 250 ? l.appId : null;
    setTimeout(() => {
      for (const v of h)
        !(v != null && v.rendered) || typeof v.render != "function" || v.id !== f && v.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (O) => {
      var n, r, o, s, c, m;
      if (!((r = (n = O.target) == null ? void 0 : n.closest) != null && r.call(n, "#actors"))) return;
      const i = (s = (o = O.target) == null ? void 0 : o.closest) == null ? void 0 : s.call(o, "[data-document-id]"), e = (c = i == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((m = game.actors) != null && m.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (O, i, e) => {
  var o, s;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, n = t ?? O.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = n ? (s = game.actors) == null ? void 0 : s.get(n) : null;
  !r || r.type !== "pc" || O.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (O, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || O.updateSource({
    width: 1920,
    height: 1080,
    "background.src": st,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (O, i, e) => {
  var r, o, s;
  const t = (o = (r = O.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const n = (s = i == null ? void 0 : i.querySelector) == null ? void 0 : s.call(i, ".dice-roll");
  n && n.classList.add(`votv-${t}`);
});
//# sourceMappingURL=vacuum-of-the-void.js.map
