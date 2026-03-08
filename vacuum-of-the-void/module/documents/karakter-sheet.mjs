import { computeVotvCritInfo } from "../util/votv-result-type.mjs";

/** Páncél szint nyers érték → megjelenített szöveg (karakterlap táblázat). */
function _armorLevelLabel(raw) {
  if (!raw) return "Alap";
  if (raw === "1") return "1. szint";
  if (raw === "2") return "2. szint";
  if (raw === "3") return "3. szint";
  return raw === "Alap" ? "Alap" : raw;
}

export class VoidKarakterSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(
    super.PARTS ?? {},
    {
      content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
    },
    { inplace: false }
  );

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
      template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
      width: 1000,
      minWidth: 1000,
      height: 800,
      form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: false }),
      window: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.window ?? {}, {
        resizable: true,
        contentClasses: [
          ...(super.DEFAULT_OPTIONS?.window?.contentClasses ?? []),
          "votv-scroll"
        ]
      })
    },
    { inplace: false }
  );

  _initializeApplicationOptions(options) {
    const result = super._initializeApplicationOptions(options);
    const doc = options?.document ?? this.document;
    if (doc?.uuid || doc?.id) {
      const raw = doc.uuid ?? doc.id;
      result.uniqueId = `${this.constructor.name}-${String(raw).replace(/\./g, "-")}`;
    }
    return result;
  }

  get actor() {
    return this.document;
  }

  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(root) {
    if (!root) return { form: null, windowContent: null };
    const form = root.querySelector?.("form.votv.karakter-sheet") ?? root.querySelector?.("form.votv") ?? null;
    const windowContent = root.querySelector?.(".votv-scroll") ?? root.querySelector?.(".window-content") ?? null;
    return { form, windowContent };
  }

  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(root) {
    const { form, windowContent } = this._getScrollContainers(root);
    const state = {};
    if (form && form.scrollHeight > form.clientHeight && typeof form.scrollTop === "number") {
      state.formScrollTop = form.scrollTop;
    }
    if (windowContent && windowContent.scrollHeight > windowContent.clientHeight && typeof windowContent.scrollTop === "number") {
      state.windowScrollTop = windowContent.scrollTop;
    }
    return state;
  }

  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(root, state) {
    if (!root || !state) return;
    const { form, windowContent } = this._getScrollContainers(root);
    if (typeof state.formScrollTop === "number" && form) form.scrollTop = state.formScrollTop;
    if (typeof state.windowScrollTop === "number" && windowContent) windowContent.scrollTop = state.windowScrollTop;
  }

  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(force = false, options = {}) {
    const lastBlur = game.votv?._lastKarakterSheetBlurSave;
    const skipRenderMs = 200;
    if (lastBlur?.appId === this.id && (Date.now() - lastBlur.at) < skipRenderMs) return this;
    const rootBefore = this.element;
    const formBefore = this.form ?? this.element;
    let saved = { scrollState: {}, focus: null };
    if (rootBefore) {
      saved.scrollState = this._saveScrollState(rootBefore);
      const activeEl = document.activeElement;
      const isOurs = formBefore.contains(activeEl);
      const isInputLike = activeEl && (
        (activeEl.tagName === "INPUT" && activeEl.type !== "checkbox" && activeEl.type !== "radio") ||
        activeEl.tagName === "TEXTAREA"
      );
      if (isOurs && isInputLike) {
        saved.focus = {
          name: activeEl.name || null,
          id: activeEl.id || null,
          selectionStart: "selectionStart" in activeEl ? activeEl.selectionStart : 0,
          selectionEnd: "selectionEnd" in activeEl ? activeEl.selectionEnd : 0
        };
      }
    }
    const out = await super.render(force, options);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed();
      this._writeEffectiveGivenProtection();
      this._writeTotalDefense();
      this._writeTotalSpeed();
    });
    setTimeout(() => {
      this._writeEffectiveGivenSpeed();
      this._writeEffectiveGivenProtection();
      this._writeTotalDefense();
      this._writeTotalSpeed();
    }, 150);
    const rootAfter = this.element;
    const formAfter = this.form ?? this.element;
    const scrollState = saved.scrollState;
    const focusToRestore = saved.focus;
    const hasScrollState = typeof scrollState?.formScrollTop === "number" || typeof scrollState?.windowScrollTop === "number";
    const restoreScrollAndFocus = () => {
      this._applyScrollState(rootAfter, scrollState);
      if (focusToRestore?.name != null || focusToRestore?.id != null) {
        const el =
          formAfter.querySelector?.(focusToRestore.id ? `#${CSS.escape(focusToRestore.id)}` : null) ??
          (focusToRestore.name ? formAfter.querySelector?.(`[name="${CSS.escape(focusToRestore.name)}"]`) : null);
        if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) {
          el.focus({ preventScroll: true });
          if (typeof el.selectionStart === "number") {
            el.selectionStart = focusToRestore.selectionStart ?? 0;
            el.selectionEnd = focusToRestore.selectionEnd ?? focusToRestore.selectionStart ?? 0;
          }
        }
      }
      this._applyScrollState(rootAfter, scrollState);
    };
    if (hasScrollState || focusToRestore) {
      requestAnimationFrame(restoreScrollAndFocus);
      setTimeout(restoreScrollAndFocus, 0);
      setTimeout(restoreScrollAndFocus, 50);
      setTimeout(restoreScrollAndFocus, 150);
      setTimeout(restoreScrollAndFocus, 300);
      setTimeout(restoreScrollAndFocus, 450);
    }
    return out;
  }

  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(current, total) {
    const cur = Number(current);
    const tot = Number(total);
    if (tot <= 0 || cur <= 0) return 0;
    const oneThird = Math.floor(tot / 3);
    const twoThirds = Math.floor((2 * tot) / 3);
    if (cur <= oneThird) return 1;
    if (cur <= twoThirds) return 2;
    return 3;
  }

  /** Skill key → body part; used for health-based UI and roll penalties. */
  static BODY_PART_BY_SKILL = {
    deception: "head", medicalCare: "head", perception: "head", cooking: "head", quickThinking: "head",
    combatTraining: "head", mentalStrength: "head", intimidation: "head", persuasion: "head", memory: "head",
    languages: "head", luck: "head", technicalKnowledge: "head", lexicalKnowledge: "head", music: "head",
    endurance: "torso", firearms: "torso",
    vehicleOperation: "arms", grenadeUse: "arms",
    stealth: "legs"
  };

  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    const armorItems = (this.actor?.items?.contents ?? []).filter(
      (i) => i.type === "Pancel" && (i.system?.equipped === true)
    );
    let total = 0;
    for (const item of armorItems) {
      const raw = String(item.system?.speedPenalty ?? "").trim().replace(",", ".");
      const v = Number(raw);
      if (Number.isFinite(v)) total += v;
    }
    return total;
  }

  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    const armorItems = (this.actor?.items?.contents ?? []).filter(
      (i) => i.type === "Pancel" && (i.system?.equipped === true)
    );
    let total = 0;
    for (const item of armorItems) {
      const raw = String(item.system?.protectionBonus ?? "").trim().replace(",", ".");
      const v = Number(raw);
      if (Number.isFinite(v)) total += v;
    }
    return total;
  }

  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(scope = null) {
    const root = scope ?? this.form ?? this.element;
    let span = root?.querySelector?.(".karakter-given-speed-effective");
    if (!span && this.id) span = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`);
    if (!span) return;
    const res = this.actor?.system?.resources ?? {};
    const legsTotal = res.hitLocations?.legs?.value ?? 0;
    const legsCurrent = res.currentHealth?.legs ?? 0;
    const legsStatus = VoidKarakterSheet._healthStatusFromRatio(legsCurrent, legsTotal);
    const raw = Number(this.actor?.system?.combat?.givenSpeed ?? 0) || 0;
    let effective;
    if (legsStatus === 0) effective = 0;
    else if (legsStatus === 1) effective = -6;
    else if (legsStatus === 2) effective = -3;
    else effective = raw;
    const armorPenalty = this._getTotalArmorSpeedPenalty();
    effective += armorPenalty;
    span.textContent = String(effective);
  }

  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(scope = null) {
    const root = scope ?? this.form ?? this.element;
    let span = root?.querySelector?.(".karakter-given-defense-effective");
    if (!span && this.id) span = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`);
    if (!span) return;
    const raw = Number(this.actor?.system?.combat?.givenProtection ?? 0) || 0;
    const effective = raw + this._getTotalArmorProtectionBonus();
    span.textContent = String(effective);
  }

  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(scope = null) {
    const root = scope ?? this.form ?? this.element;
    const sel = (s) => root?.querySelector?.(s) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${s}`) : null);
    const totalSpan = sel(".karakter-total-defense-effective");
    const givenSpan = sel(".karakter-given-defense-effective");
    const inpDef = sel('input[name="system.combat.defense"]');
    const inpBonus = sel('input[name="system.combat.defenseBonus"]');
    if (!totalSpan) return;
    const a = Number(inpDef?.value) || 0;
    const b = Number(inpBonus?.value) || 0;
    const c = Number(givenSpan?.textContent) || 0;
    totalSpan.textContent = String(a + b + c);
  }

  _writeTotalSpeed(scope = null) {
    const root = scope ?? this.form ?? this.element;
    const sel = (s) => root?.querySelector?.(s) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${s}`) : null);
    const totalSpan = sel(".karakter-total-speed-effective");
    const givenSpan = sel(".karakter-given-speed-effective");
    const inpSpeed = sel('input[name="system.combat.speed"]');
    const inpBonus = sel('input[name="system.combat.speedBonus"]');
    if (!totalSpan) return;
    const res = this.actor?.system?.resources ?? {};
    const legsTotal = res.hitLocations?.legs?.value ?? 0;
    const legsCurrent = res.currentHealth?.legs ?? 0;
    const legsStatus = VoidKarakterSheet._healthStatusFromRatio(legsCurrent, legsTotal);
    if (legsStatus === 0) {
      totalSpan.textContent = "0";
      return;
    }
    const a = Number(inpSpeed?.value) || 0;
    const b = Number(inpBonus?.value) || 0;
    const c = Number(givenSpan?.textContent) || 0;
    totalSpan.textContent = String(a + b + c);
  }

  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(skillKey) {
    const part = VoidKarakterSheet.BODY_PART_BY_SKILL[skillKey];
    if (part == null) return undefined;
    const res = this.actor.system?.resources ?? {};
    const total = res.hitLocations?.[part]?.value ?? 0;
    const current = res.currentHealth?.[part] ?? 0;
    return VoidKarakterSheet._healthStatusFromRatio(current, total);
  }

  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(actor, skillKey) {
    const part = VoidKarakterSheet.BODY_PART_BY_SKILL[skillKey];
    if (part == null) return undefined;
    const res = actor?.system?.resources ?? {};
    const total = res.hitLocations?.[part]?.value ?? 0;
    const current = res.currentHealth?.[part] ?? 0;
    return VoidKarakterSheet._healthStatusFromRatio(current, total);
  }

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    context.actor = context.actor ?? this.actor;
    context.system = context.system ?? this.actor.system;
    const stressVal = Number(this.actor.system?.resources?.stress?.value) || 0;
    context.stressOver10 = stressVal > 10;
    const res = this.actor.system.resources ?? {};
    const hitLoc = res.hitLocations ?? {};
    const curHealth = res.currentHealth ?? {};
    const parts = ["head", "torso", "arms", "legs"];
    context.computedHealthStatus = {};
    for (const part of parts) {
      const total = hitLoc[part]?.value ?? 0;
      const current = curHealth[part] ?? 0;
      context.computedHealthStatus[part] = VoidKarakterSheet._healthStatusFromRatio(current, total);
    }
    // Halálkoponya a portréra: fej 0 HP, vagy egyszerre legalább 2 másik testrész (törzs/karok/lábak) 0 HP
    const headZero = (Number(curHealth.head) || 0) === 0;
    const otherParts = ["torso", "arms", "legs"];
    const otherZeroCount = otherParts.filter((p) => (Number(curHealth[p]) || 0) === 0).length;
    context.showDeathSkull = headZero || otherZeroCount >= 2;

    const legsStatus = context.computedHealthStatus.legs ?? 3;
    const rawGivenSpeed = Number(this.actor.system?.combat?.givenSpeed ?? 0) || 0;
    let effectiveGivenSpeed;
    if (legsStatus === 0) effectiveGivenSpeed = 0;
    else if (legsStatus === 1) effectiveGivenSpeed = -6;   // kritikus
    else if (legsStatus === 2) effectiveGivenSpeed = -3;   // sérült
    else effectiveGivenSpeed = rawGivenSpeed;
    const armorSpeedPenalty = this._getTotalArmorSpeedPenalty();
    effectiveGivenSpeed += armorSpeedPenalty;
    context.effectiveGivenSpeed = effectiveGivenSpeed;
    const rawGivenProtection = Number(this.actor.system?.combat?.givenProtection ?? 0) || 0;
    const effectiveGivenProtection = rawGivenProtection + this._getTotalArmorProtectionBonus();
    context.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: effectiveGivenSpeed, givenProtection: effectiveGivenProtection } },
      { inplace: false }
    );
    const sysCombat = context.system?.combat ?? {};
    context.totalDefense =
      (Number(sysCombat.defense) || 0) +
      (Number(sysCombat.defenseBonus) || 0) +
      (Number(sysCombat.givenProtection) || 0);
    const givenSpeedNum = Number(sysCombat.givenSpeed);
    const totalSpeedSum =
      (Number(sysCombat.speed) || 0) +
      (Number(sysCombat.speedBonus) || 0) +
      (Number.isFinite(givenSpeedNum) ? givenSpeedNum : 0);
    context.totalSpeed = legsStatus === 0 ? 0 : totalSpeedSum;
    const BODY_PART_BY_SKILL = VoidKarakterSheet.BODY_PART_BY_SKILL;
    context.skillHealthStatus = {};
    context.skillDisabled = {};
    context.skillHasHealthTint = {};
    for (const [skill, part] of Object.entries(BODY_PART_BY_SKILL)) {
      const status = context.computedHealthStatus[part];
      context.skillHealthStatus[skill] = status;
      context.skillDisabled[skill] = status === 0 ? " disabled" : "";
      context.skillHasHealthTint[skill] = true;
    }
    const weapons = this.actor.system.weapons ?? {};
    const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
    const slotOrderRaw = (weapons.slotOrder ?? "").trim();
    const slotKeys = slotOrderRaw
      ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s))
      : [];
    const rawMicrochips = this.actor.system.gear?.microchips;
    const microchips = rawMicrochips && typeof rawMicrochips === "object" && !Array.isArray(rawMicrochips) ? rawMicrochips : {};
    const microchipSlot1Id = (microchips.slot1?.itemId ?? "").trim();
    const microchipSlot2Id = (microchips.slot2?.itemId ?? "").trim();
    const microchipSlot3Id = (microchips.slot3?.itemId ?? "").trim();

    // Inventory table: show all items except abilities (those are managed via the Képességek grid)
    const inventoryItems = this.actor.items.contents.filter(i => i.type !== "Kepesseg" && i.type !== "ability").slice().sort((a, b) => {
      const sa = typeof a.sort === "number" ? a.sort : 0;
      const sb = typeof b.sort === "number" ? b.sort : 0;
      return sa - sb;
    });

    const inventory = inventoryItems.map(item => {
      const isWeapon = item.type === "Fegyver";
      const isMicrochip = item.type === "MikroChip";
      let slotAssignment = 0;
      let slotBonus = "";
      let slotKey = null;
      for (let i = 0; i < slotKeys.length; i++) {
        const sk = slotKeys[i];
        if ((weapons[sk]?.itemId ?? "") === item.id) {
          slotAssignment = i + 1;
          slotBonus = weapons[sk]?.bonus ?? "";
          slotKey = sk;
          break;
        }
      }
      let microchipSlotKey = null;
      if (isMicrochip) {
        if (microchipSlot1Id === item.id) microchipSlotKey = "slot1";
        else if (microchipSlot2Id === item.id) microchipSlotKey = "slot2";
        else if (microchipSlot3Id === item.id) microchipSlotKey = "slot3";
      }
      const damage = isWeapon && item.system?.damage ? item.system.damage : "";
      const rangeStr = isWeapon && typeof item.system?.range === "string" ? (item.system.range || "").trim() : "";
      const slotBonusNum = slotKey ? (Number(weapons[slotKey]?.bonus) || 0) : "";
      return {
        id: item.id,
        name: item.name,
        img: item.img,
        type: item.type,
        isWeapon,
        slotAssignment,
        slotBonus,
        slotKey,
        microchipSlotKey,
        isEquipped: !!(slotKey || microchipSlotKey),
        damage,
        rangeStr,
        slotBonusNum,
        quantity: Number(item.system?.quantity ?? 1) || 1
      };
    });
    context.actionsTable = inventory;
    const weaponDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Fegyver");
    const weaponItems = weaponDocs.map(i => ({ id: i.id, name: i.name, img: i.img }));
    context.weaponItems = weaponItems;
    const emptyLabel = "— Nincs fegyver —";
    // Only show slots that actually have an existing weapon item assigned.
    const equippedSlotKeys = slotKeys.filter(slotKey => {
      const slotData = weapons[slotKey] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      if (!itemId) return false;
      const item = weaponDocs.find(w => w.id === itemId);
      return !!item;
    });
    context.weaponSlots = equippedSlotKeys.map((slotKey, idx) => {
      const slotData = weapons[slotKey] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = weaponItems.find(w => w.id === itemId);
      return {
        slotKey,
        itemId,
        slotNum: idx + 1,
        displayName: item?.name || slotData.name || emptyLabel,
        img: item?.img || "",
        bonus: Number(slotData.bonus) || 0,
        damage: slotData.damage ?? ""
      };
    });
    // Felszerelés: Fegyverek táblázat – equipped az item.system.equipped (alapértelmezett false); ha nincs meg, slot alapján (régi adat).
    const weaponTypeLabels = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" };
    const weaponSizeLabels = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    context.weaponsTable = weaponDocs.map((item) => {
      const itemId = item.id;
      let slotKey = null;
      let slotData = {};
      for (const sk of slotKeys) {
        if ((weapons[sk]?.itemId ?? "").trim() === itemId) {
          slotKey = sk;
          slotData = weapons[sk] ?? {};
          break;
        }
      }
      const equippedFromSlot = !!slotKey;
      const equipped = (item.system?.equipped !== undefined && item.system?.equipped !== null)
        ? !!item.system.equipped
        : equippedFromSlot;
      const sys = item?.system ?? {};
      const rangeStr = typeof sys.range === "string" ? (sys.range || "").trim() : "";
      const typeRaw = sys.type ?? "";
      const typeLabel = (weaponTypeLabels[typeRaw] ?? typeRaw) || "—";
      const sizeRaw = sys.size ?? "";
      const sizeLabel = (weaponSizeLabels[sizeRaw] ?? sizeRaw) || "";
      const typeAndSize = [typeLabel, sizeLabel].filter(Boolean).join(", ") || typeLabel || "—";
      const isProjectile = (typeRaw === "projectile") || (sizeRaw === "thrown");
      const quantityRaw = sys.quantity;
      const quantityStr = quantityRaw != null ? String(quantityRaw).trim() : "1";
      const bonusRawSlot = String(slotData.bonus ?? "").trim();
      const bonusRawItem = String(sys.bonus ?? "").trim();
      const bonusStr = bonusRawSlot || bonusRawItem || "0";
      return {
        slotKey: slotKey ?? "",
        itemId,
        actorId: this.actor.id,
        name: item?.name ?? emptyLabel,
        img: item?.img ?? "",
        bonus: bonusStr,
        damage: slotData.damage ?? sys.damage ?? "",
        rangeStr: rangeStr || "—",
        typeLabel,
        typeAndSize,
        quantity: quantityStr,
        quantityDisplay: isProjectile ? quantityStr : "—",
        isProjectile,
        equipped,
        special: (sys.special ?? "").trim() || "—"
      };
    });
    // Felszerelés: Páncél táblázat – itemekből (type "Pancel")
    const armorDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Pancel");
    context.armorTable = armorDocs.map((item) => {
      const sys = item?.system ?? {};
      const equipped = (item.system?.equipped !== undefined && item.system?.equipped !== null) ? !!item.system.equipped : false;
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        protectionBonus: (sys.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (sys.speedPenalty ?? "").toString().trim() || "—",
        level: _armorLevelLabel((sys.level ?? "").toString().trim()),
        special: (sys.special ?? sys.other ?? "").toString().trim() || "—",
        equipped
      };
    });
    // Felszerelés: Tárgyak táblázat – csak Targy típusú itemek (Egyeb a jobb oldali Egyéb infó panelbe kerül)
    const targyDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Targy");
    context.itemsTable = targyDocs.map((item) => {
      const sys = item?.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 60 ? descRaw.slice(0, 57) + "…" : descRaw) : "—";
      const quantity = sys.quantity != null ? String(sys.quantity).trim() : "1";
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        quantity,
        description
      };
    });
    // Egyéb Információk jobb oldal: csak Egyeb típusú itemek (drop zone + lista)
    const egyebDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Egyeb");
    context.egyebList = egyebDocs.map((item) => {
      const sys = item?.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 80 ? descRaw.slice(0, 77) + "…" : descRaw) : "";
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        description
      };
    });
    const microchipDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "MikroChip");
    const microchipItems = microchipDocs.map(i => ({ id: i.id, name: i.name, img: i.img }));
    const emptyChipLabel = "— Nincs Mikro-Chip —";
    const MICROCHIP_SLOTS = ["slot1", "slot2", "slot3"];
    const otherSlotIds = (slotNum) => {
      const ids = [];
      if (slotNum !== 1) ids.push((microchips.slot1?.itemId ?? "").trim());
      if (slotNum !== 2) ids.push((microchips.slot2?.itemId ?? "").trim());
      if (slotNum !== 3) ids.push((microchips.slot3?.itemId ?? "").trim());
      return ids.filter(Boolean);
    };
    context.microchipItemsSlot1 = microchipItems.filter(c => !otherSlotIds(1).includes(c.id));
    context.microchipItemsSlot2 = microchipItems.filter(c => !otherSlotIds(2).includes(c.id));
    context.microchipItemsSlot3 = microchipItems.filter(c => !otherSlotIds(3).includes(c.id));
    // Mikro-Chip slotok: dropdown + kijelzés, mind a 3 slot
    context.microchipSlots = MICROCHIP_SLOTS.map((slotKey) => {
      const slotData = microchips[slotKey] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = microchipDocs.find(c => c.id === itemId);
      return {
        slotKey,
        itemId,
        displayName: item?.name || slotData.name || emptyChipLabel,
        img: item?.img || "",
        active: slotData.active === true
      };
    });
    ["1", "2", "3"].forEach((n) => {
      const sk = `slot${n}`;
      const slotData = microchips[sk] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = microchipItems.find(c => c.id === itemId);
      context[`microchip${n}ItemId`] = itemId;
      context[`microchip${n}DisplayName`] = item?.name || slotData.name || emptyChipLabel;
      context[`microchip${n}Img`] = item?.img || "";
    });
    // Felszerelés: Mikro-Chip táblázat – minden MikroChip item, equipped = slotba van (pont jelenik meg)
    context.microchipsTable = microchipDocs.map((item) => {
      const itemId = item.id;
      let slotKey = null;
      for (const sk of MICROCHIP_SLOTS) {
        if ((microchips[sk]?.itemId ?? "").trim() === itemId) {
          slotKey = sk;
          break;
        }
      }
      const equipped = !!slotKey;
      const abilityType = item?.system?.abilityType ?? "";
      const typeLabel = abilityType === "active" ? "Aktív" : abilityType === "passive" ? "Passzív" : (abilityType || "—");
      const isActive = abilityType === "active";
      const kp = Number(item?.system?.replaceCost) >= 0 ? Number(item.system.replaceCost) : 0;
      const descRaw = (item?.system?.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 60 ? descRaw.slice(0, 57) + "…" : descRaw) : "—";
      return {
        itemId,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        typeLabel,
        description,
        kp,
        isActive,
        slotKey: slotKey ?? "",
        equipped
      };
    });

    // Üres felszerelés: ne jelenjenek meg üres táblázatok; ha egyáltalán nincs elem, kis jelzés (mint NPC lapon)
    const hasEquipment =
      (context.weaponsTable?.length ?? 0) > 0 ||
      (context.armorTable?.length ?? 0) > 0 ||
      (context.microchipsTable?.length ?? 0) > 0 ||
      (context.itemsTable?.length ?? 0) > 0;
    context.showEquipmentDropZone = !hasEquipment;

    // Képességek (abilities): Faji / Háttér single slots and Passzív / Aktív multi-areas
    const abilities = this.actor.system.abilities ?? {};
    const abilityItems = (this.actor.items?.contents ?? []).map(i => ({
      id: i.id,
      name: i.name,
      img: i.img,
      kind: i.system?.kind ?? "passive",
      description: i.system?.description ?? "",
      kp: Number(i.system?.kp ?? 0) || 0
    }));
    const abilityItemsById = new Map(abilityItems.map(a => [a.id, a]));
    const emptyAbilityLabel = "— Nincs képesség —";

    const resolveAbilitySlot = (key) => {
      const slotData = abilities[key] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = itemId ? abilityItemsById.get(itemId) : null;
      const description = item?.description ?? "";
      const kp = item?.kp ?? 0;
      return {
        itemId,
        displayName: item?.name || slotData.name || emptyAbilityLabel,
        img: item?.img || "",
        description,
        kp
      };
    };

    context.abilityFajiSlot = resolveAbilitySlot("faji");
    context.abilityHatterSlot = resolveAbilitySlot("hatter");

    const getAreaIds = (areaKey) => {
      const area = abilities[areaKey];
      if (!area) return [];
      if (Array.isArray(area?.items)) return area.items;
      if (Array.isArray(area)) return area;
      return [];
    };

    const mapIdsToAbilityList = (ids) => ids
      .map(id => {
        const item = abilityItemsById.get(id);
        return item
          ? {
              id: item.id,
              name: item.name,
              img: item.img,
              description: item.description,
              kp: item.kp
            }
          : null;
      })
      .filter(Boolean);

    context.abilityPassiveList = mapIdsToAbilityList(getAreaIds("passive"));
    context.abilityActiveList = mapIdsToAbilityList(getAreaIds("active"));

    const resources = context.system?.resources ?? {};
    const kpDotKeys = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"];
    const initiativeResult = context.system?.combat?.initiativeResult;
    const initiativeNum = typeof initiativeResult === "number" ? initiativeResult : -1;
    let kpUsableCount = 0;
    if (initiativeNum >= 25) kpUsableCount = 6;
    else if (initiativeNum >= 19) kpUsableCount = 5;
    else if (initiativeNum >= 13) kpUsableCount = 4;
    else if (initiativeNum >= 7) kpUsableCount = 3;
    else if (initiativeNum >= 0) kpUsableCount = 2;
    context.kpDots = kpDotKeys.map((key, i) => {
      const index = i + 1;
      const used = !!(Number(resources[key]) || 0);
      const usable = index <= kpUsableCount;
      return { index, used, usable };
    });

    context.showInitiativeResult = typeof initiativeResult === "number";
    context.initiativeResult = context.showInitiativeResult ? initiativeResult : "";

    return context;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    // ApplicationV2: content lives in the form; use form as root so listeners attach to the right DOM
    const root = this.form ?? html?.querySelector?.("form.votv.karakter-sheet") ?? html ?? this.element;
    const $html = $(root);
    $(document).off("click.votv-weapon-dropdown");
    $(document).off("click.votv-microchip-dropdown");

    // Dobás / Sebzés gombok: működjenek akkor is, ha a lap nem szerkeszthető (csak megtekintés)
    $html.on("click", ".karakter-weapon-attack", async ev => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      const slot = (btn.dataset.slot ?? "").trim();
      if (!slot) return;
      const { openRollSheetForWeapon } = await import("./roll-sheet.mjs");
      openRollSheetForWeapon(this.actor, slot);
    });
    $html.on("click", ".karakter-weapon-damage", async ev => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      let itemId = (btn.dataset.itemId ?? "").trim();
      if (!itemId) {
        const slot = (btn.dataset.slot ?? "").trim();
        if (!slot) return;
        const slotData = (this.actor?.system?.weapons ?? {})[slot] ?? {};
        itemId = (slotData.itemId ?? "").trim();
      }
      if (!itemId) return;
      await this._rollWeaponDamage(itemId, btn.dataset.slot?.trim() ?? "");
    });

    $html.on("click", ".karakter-harc-initiative", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const { openRollSheetForSkill } = await import("./roll-sheet.mjs");
      openRollSheetForSkill(this.actor, "quickThinking", "Kezdeményezés");
    });

    $html.on("click", ".karakter-kp-dot", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      const index = parseInt(btn.dataset.index, 10);
      if (!Number.isFinite(index) || index < 1 || index > 6) return;
      const key = `system.resources.kpDot${index}`;
      const current = !!(Number(this.actor.system?.resources?.[`kpDot${index}`]) || 0);
      await this.actor.update({ [key]: current ? 0 : 1 });
    });

    if (!this.isEditable) return;

    // Stressz > 10 esetén a textbox piros hátteret kap
    const updateStressHighlight = (ev) => {
      const input = ev ? ev.currentTarget : root.querySelector?.('input[name="system.resources.stress.value"]');
      if (!input) return;
      const val = Number(input.value) || 0;
      input.classList.toggle("karakter-stress-over-10", val > 10);
    };
    $html.on("input change", "input[name=\"system.resources.stress.value\"]", updateStressHighlight);
    const stressInput = root.querySelector?.('input[name="system.resources.stress.value"]');
    if (stressInput) updateStressHighlight({ currentTarget: stressInput });

    const updateTripleTotals = () => {
      this._writeTotalDefense();
      this._writeTotalSpeed();
    };
    $html.on("input change", "input[name=\"system.combat.defense\"], input[name=\"system.combat.defenseBonus\"], input[name=\"system.combat.speed\"], input[name=\"system.combat.speedBonus\"]", updateTripleTotals);

    this._writeEffectiveGivenSpeed(html);
    this._writeEffectiveGivenSpeed(root);
    this._writeEffectiveGivenProtection(html);
    this._writeEffectiveGivenProtection(root);
    this._writeTotalDefense(html);
    this._writeTotalDefense(root);
    this._writeTotalSpeed(html);
    this._writeTotalSpeed(root);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed();
      this._writeEffectiveGivenProtection();
      this._writeTotalDefense();
      this._writeTotalSpeed();
    });
    setTimeout(() => {
      this._writeEffectiveGivenSpeed();
      this._writeEffectiveGivenProtection();
      this._writeTotalDefense();
      this._writeTotalSpeed();
    }, 100);

    // Karakterkép: kattintásra Foundry fájlkezelő (FilePicker) megnyitása (user data / assets)
    $html.on("click", ".karakter-portrait-img", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const FilePickerClass = foundry.applications?.apps?.FilePicker?.implementation ?? globalThis.FilePicker;
      const fp = new FilePickerClass({
        type: "image",
        current: this.actor.img || "",
        callback: (path) => {
          if (path) this.actor.update({ img: path });
        }
      });
      fp.browse();
    });

    // Skill rolls: click on skill label opens roll sheet (delegated)
    $html.on("click", ".karakter-skill-label", async (ev) => {
      ev.preventDefault();
      const element = ev.currentTarget;
      const skillKey = element.dataset.skill;
      const label = element.textContent?.trim() || skillKey;
      const { openRollSheetForSkill } = await import("./roll-sheet.mjs");
      openRollSheetForSkill(this.actor, skillKey, label);
    });

    // Morale d8: click on d8 icon – roll 1d8 (same style as skill), then subtract 1 from morale
    $html.on("click", ".karakter-roll-morale-d8", ev => {
      ev.preventDefault();
      this._rollMorale();
    });

    // Fegyverek szekció: a felső fegyver slotban a fegyverre kattintva nyíljon meg a fegyver lapja.
    $html.on("click", ".karakter-weapon-slot-display", ev => {
      ev.preventDefault();
      const display = ev.currentTarget;
      const slotEl = display.closest(".karakter-weapon-slot");
      const slot = slotEl?.dataset.slot;
      if (!slot) return;
      const weapons = this.actor.system?.weapons ?? {};
      const itemId = (weapons[slot]?.itemId ?? "").trim();
      if (!itemId) return;
      const item =
        this.actor.items.get?.(itemId) ??
        this.actor.items.contents?.find?.(i => i.id === itemId);
      item?.sheet?.render(true);
    });

    // Inventory: click weapon or item name/icon to open its sheet.
    const openInventoryItem = (target, ev) => {
      const itemId = target.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;

      // For weapons assigned to a slot, allow Alt+click on the name to roll instead of opening the sheet.
      if (target.classList.contains("karakter-weapon-label") && (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey)) {
        const slot = target.dataset.weaponSlot;
        if (slot) this._rollWeapon(slot);
        return;
      }

      item.sheet?.render(true);
    };

    $html.on("click", ".karakter-inventory-item-name", ev => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget, ev);
    });

    $html.on("click", ".karakter-inventory-item-icon", ev => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget, ev);
    });

    // Inventory quantity per item (delegated)
    $html.on("change", ".karakter-item-qty", async ev => {
      const input = ev.currentTarget;
      const itemId = input.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      let qty = Number(input.value);
      if (!Number.isFinite(qty) || qty < 0) qty = 0;
      await item.update({ "system.quantity": qty });
    });

    // Remove inventory item from actor: Alt+click to delete (delegated). Egyetlen handler minden típusra (Fegyver, Pancel, Targy, Egyeb stb.).
    $html.on("click", ".karakter-item-delete", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;

      const actor = this.actor;
      const item = actor.items.get(itemId);
      if (!item) return; // már törölve (pl. dupla kattintás) – ne dobjunk "Item does not exist!" hibát
      const updates = {};
      if (item?.type === "Fegyver") {
        const weapons = actor.system.weapons ?? {};
        const slotOrderRaw = (weapons.slotOrder ?? "").trim();
        const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
        const slotKeys = slotOrderRaw
          ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s))
          : [];
        const slotKey = slotKeys.find(k => (weapons[k]?.itemId ?? "").trim() === itemId);
        if (slotKey) {
          const newKeys = slotKeys.filter(k => k !== slotKey);
          updates["system.weapons.slotOrder"] = newKeys.join(",");
          updates[`system.weapons.${slotKey}.itemId`] = "";
          updates[`system.weapons.${slotKey}.name`] = "";
          updates[`system.weapons.${slotKey}.damage`] = "";
          updates[`system.weapons.${slotKey}.bonus`] = "";
        }
      }
      if (Object.keys(updates).length) await actor.update(updates);
      await actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Weapons: equip / unequip via inventory checkboxes (delegated) – item.system.equipped szinkron
    $html.on("change", ".karakter-weapon-equip-toggle", async ev => {
      const checkbox = ev.currentTarget;
      const itemId = (checkbox.dataset.itemId ?? "").trim();
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Fegyver") return;
      const weapons = this.actor.system.weapons ?? {};
      const slotOrderRaw = (weapons.slotOrder ?? "").trim();
      const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
      const slotKeys = slotOrderRaw
        ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s))
        : [];
      const currentSlotKey = slotKeys.find(k => (weapons[k]?.itemId ?? "").trim() === itemId) ?? null;
      const checked = checkbox.checked;

      if (checked) {
        if (currentSlotKey) return;
        let targetSlot = slotKeys.find(k => !(weapons[k]?.itemId));
        const usedSet = new Set(slotKeys);
        if (!targetSlot) {
          const nextKey = ALL_WEAPON_SLOTS.find(k => !usedSet.has(k));
          if (!nextKey) return;
          targetSlot = nextKey;
          slotKeys.push(nextKey);
        }
        await this.actor.update({
          "system.weapons.slotOrder": slotKeys.join(","),
          [`system.weapons.${targetSlot}.itemId`]: itemId,
          [`system.weapons.${targetSlot}.name`]: item?.name ?? "",
          [`system.weapons.${targetSlot}.damage`]: item?.system?.damage ?? "",
          [`system.weapons.${targetSlot}.bonus`]: item?.system?.bonus ?? ""
        });
        await item.update({ "system.equipped": true });
      } else if (currentSlotKey) {
        const newKeys = slotKeys.filter(k => k !== currentSlotKey);
        await this.actor.update({
          "system.weapons.slotOrder": newKeys.join(","),
          [`system.weapons.${currentSlotKey}.itemId`]: "",
          [`system.weapons.${currentSlotKey}.name`]: "",
          [`system.weapons.${currentSlotKey}.damage`]: "",
          [`system.weapons.${currentSlotKey}.bonus`]: ""
        });
        await item.update({ "system.equipped": false });
      }
    });

    // Mikro-Chip: dropdown megnyitás/bezárás és választás (select)
    $html.on("click", ".karakter-microchip-slot-display", ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      if (btn.disabled) return;
      const wrap = btn.closest(".karakter-microchip-slot-select-wrap");
      const wasOpen = wrap?.classList.contains("karakter-microchip-slot-open");
      $html.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
      if (!wasOpen && wrap) wrap.classList.add("karakter-microchip-slot-open");
    });

    $html.on("click", ".karakter-microchip-slot-option", async ev => {
      ev.preventDefault();
      const li = ev.currentTarget;
      const wrap = li.closest(".karakter-microchip-slot-select-wrap");
      const btn = wrap?.querySelector(".karakter-microchip-slot-display");
      const slot = btn?.dataset.slot;
      if (!slot) return;
      const itemId = (li.dataset.itemId ?? "").trim();
      const displayName = (li.dataset.itemName ?? li.textContent?.trim() ?? "").trim() || "— Nincs Mikro-Chip —";
      const itemImg = (li.dataset.itemImg ?? "").trim();
      const displayEl = wrap?.querySelector(".karakter-microchip-slot-display-text");
      if (displayEl) displayEl.textContent = displayName;
      let thumb = wrap?.querySelector(".karakter-microchip-slot-thumb");
      if (itemImg) {
        if (!thumb) {
          thumb = document.createElement("img");
          thumb.className = "karakter-microchip-slot-thumb";
          thumb.alt = "";
          btn?.insertBefore(thumb, displayEl);
        }
        thumb.src = itemImg;
        thumb.style.display = "";
      } else if (thumb) {
        thumb.remove();
      }
      wrap?.classList.remove("karakter-microchip-slot-open");
      const item = itemId ? this.actor.items.get(itemId) : null;
      const updates = {
        [`system.gear.microchips.${slot}.itemId`]: itemId,
        [`system.gear.microchips.${slot}.name`]: item?.name ?? ""
      };
      if (itemId) updates[`system.gear.microchips.${slot}.active`] = true;
      await this.actor.update(updates);
    });

    $(document).on("click.votv-microchip-dropdown", ev => {
      if ($(ev.target).closest(".karakter-microchip-slot-select-wrap").length) return;
      $html.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    });

    // Mikro-Chip törlése (Alt+klikk) – mint fegyvernél
    $html.on("click", ".karakter-microchip-delete", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = ev.currentTarget.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "MikroChip") return;
      const microchips = this.actor.system?.gear?.microchips ?? {};
      const MICROCHIP_SLOTS = ["slot1", "slot2", "slot3"];
      const slot = MICROCHIP_SLOTS.find(sk => (microchips[sk]?.itemId ?? "").trim() === itemId);
      if (slot) {
        await this.actor.update({
          [`system.gear.microchips.${slot}.itemId`]: "",
          [`system.gear.microchips.${slot}.name`]: "",
          [`system.gear.microchips.${slot}.active`]: false
        });
      }
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Mikro-Chip slot aktív checkbox (delegated)
    $html.on("change", ".karakter-microchip-slot-active", async ev => {
      const slot = ev.currentTarget.dataset.slot;
      if (!slot) return;
      const checked = ev.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${slot}.active`]: checked });
      this.render(true);
    });

    // Mikro-Chip-ek: drag-and-drop MikroChip item a slotra
    $html.find(".karakter-microchip-slot").each((i, el) => {
      const slot = el.dataset.slot;
      el.addEventListener("dragover", ev => this._onMicrochipSlotDragOver(ev, slot));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("karakter-microchip-slot-drag-over"));
      el.addEventListener("drop", ev => this._onMicrochipSlotDrop(ev, slot));
    });

    // Képességek: dragover/dragleave csak vizuális; a droppot a Foundry _onDropItem kezeli (ugyanúgy mint inventory).
    $html.find(".karakter-ability-slot-single").each((i, el) => {
      const slot = el.dataset.slot;
      if (!slot) return;
      el.addEventListener("dragover", ev => this._onAbilitySingleDragOver(ev, slot));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("karakter-ability-slot-drag-over"));
      el.addEventListener("drop", ev => {
        ev.currentTarget?.classList.remove("karakter-ability-slot-drag-over");
      });
    });
    $html.find(".karakter-ability-area").each((i, el) => {
      const area = el.dataset.area;
      if (!area) return;
      el.addEventListener("dragover", ev => this._onAbilityAreaDragOver(ev, area));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("karakter-ability-area-drag-over"));
      el.addEventListener("drop", ev => {
        ev.currentTarget?.classList.remove("karakter-ability-area-drag-over");
      });
    });

    // Képességek: Alt+click on clear/remove to delete (delegated)
    $html.on("click", ".karakter-ability-slot-clear", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const slot = ev.currentTarget.dataset.slot;
      if (!slot) return;
      await this.actor.update({
        [`system.abilities.${slot}.itemId`]: "",
        [`system.abilities.${slot}.name`]: ""
      });
    });
    $html.on("click", ".karakter-ability-pill-remove", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const area = ev.currentTarget.dataset.area;
      const itemId = ev.currentTarget.dataset.itemId;
      if (!area || !itemId) return;
      const abilities = this.actor.system.abilities ?? {};
      const current = Array.isArray(abilities[area]?.items) ? abilities[area].items.slice() : [];
      const next = current.filter(id => id !== itemId);
      await this.actor.update({ [`system.abilities.${area}.items`]: next });
    });

    $html.on("click", ".karakter-ability-open", ev => {
      ev.preventDefault();
      const el = ev.currentTarget;
      const itemId = el.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });

    $html.on("click", ".karakter-ability-chat", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;
      await this._postAbilityToChat(itemId);
    });

    $html.on("click", ".karakter-item-chat", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      if (item.type === "Kepesseg" || item.type === "ability") {
        await this._postAbilityToChat(itemId);
      } else if (item.type === "MikroChip" || item.type === "Egyeb") {
        await this._postItemToChat(itemId);
      }
    });

    // Lőszer mező: szélesség tartalomhoz (focus / input / blur mind ugyanazzal a logikával)
    $html.on("focus input blur", ".karakter-weapon-quantity-input", ev => {
      this._resizeWeaponQuantityInput(ev.currentTarget);
    });
    $html.find(".karakter-weapon-quantity-input").each((i, el) => {
      this._resizeWeaponQuantityInput(el);
    });

    // Felszerelés: lőszer módosítása lövedékes fegyvernél – a fegyver item system.quantity (string) frissítése
    $html.on("change", ".karakter-weapon-quantity-input", async ev => {
      const input = ev.currentTarget;
      const itemId = (input.dataset.itemId ?? "").trim();
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Fegyver") return;
      const val = (input.value ?? "").trim();
      await item.update({ "system.quantity": val });
      setTimeout(() => {
        const root = this.form ?? this.element;
        const el = root?.querySelector(`.karakter-weapon-quantity-input[data-item-id="${itemId}"]`);
        if (el) this._resizeWeaponQuantityInput(el);
      }, 80);
    });

    // Felszerelés: Felszerelt checkbox – item.system.equipped + slot szinkron (fent megjelenik)
    $html.on("change", ".karakter-armor-equipped-checkbox", async ev => {
      const checkbox = ev.currentTarget;
      const itemId = (checkbox.dataset.itemId ?? "").trim();
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Pancel") return;
      await item.update({ "system.equipped": checkbox.checked });
      this._writeEffectiveGivenSpeed();
      this._writeEffectiveGivenProtection();
      this._writeTotalDefense();
      this._writeTotalSpeed();
    });

    $html.on("change", ".karakter-weapon-equipped-checkbox", async ev => {
      const checkbox = ev.currentTarget;
      const itemId = (checkbox.dataset.itemId ?? "").trim();
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Fegyver") return;
      const weapons = this.actor.system.weapons ?? {};
      const slotOrderRaw = (weapons.slotOrder ?? "").trim();
      const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
      const slotKeys = slotOrderRaw ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s)) : [];
      const currentSlotKey = slotKeys.find(k => (weapons[k]?.itemId ?? "").trim() === itemId) ?? null;
      const checked = checkbox.checked;

      if (checked) {
        if (currentSlotKey) return;
        let targetSlot = slotKeys.find(k => !(weapons[k]?.itemId));
        const usedSet = new Set(slotKeys);
        if (!targetSlot) {
          const nextKey = ALL_WEAPON_SLOTS.find(k => !usedSet.has(k));
          if (!nextKey) return;
          targetSlot = nextKey;
          slotKeys.push(nextKey);
        }
        await this.actor.update({
          "system.weapons.slotOrder": slotKeys.join(","),
          [`system.weapons.${targetSlot}.itemId`]: itemId,
          [`system.weapons.${targetSlot}.name`]: item.name ?? "",
          [`system.weapons.${targetSlot}.damage`]: item.system?.damage ?? "",
          [`system.weapons.${targetSlot}.bonus`]: item.system?.bonus ?? ""
        });
        await item.update({ "system.equipped": true });
      } else if (currentSlotKey) {
        const newKeys = slotKeys.filter(k => k !== currentSlotKey);
        await this.actor.update({
          "system.weapons.slotOrder": newKeys.join(","),
          [`system.weapons.${currentSlotKey}.itemId`]: "",
          [`system.weapons.${currentSlotKey}.name`]: "",
          [`system.weapons.${currentSlotKey}.damage`]: "",
          [`system.weapons.${currentSlotKey}.bonus`]: ""
        });
        await item.update({ "system.equipped": false });
      }
    });

    // Felszerelés: fegyver törlése az inventory-ból – Alt+klikk (mint az inventory törlés)
    $html.on("click", ".karakter-weapon-delete", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;

      const actor = this.actor;
      const item = actor.items.get(itemId);
      const updates = {};

      if (item?.type === "Fegyver") {
        const weapons = actor.system.weapons ?? {};
        const slotOrderRaw = (weapons.slotOrder ?? "").trim();
        const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
        const slotKeys = slotOrderRaw
          ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s))
          : [];
        const slotKey = slotKeys.find(k => (weapons[k]?.itemId ?? "").trim() === itemId);
        if (slotKey) {
          const newKeys = slotKeys.filter(k => k !== slotKey);
          updates["system.weapons.slotOrder"] = newKeys.join(",");
          updates[`system.weapons.${slotKey}.itemId`] = "";
          updates[`system.weapons.${slotKey}.name`] = "";
          updates[`system.weapons.${slotKey}.damage`] = "";
          updates[`system.weapons.${slotKey}.bonus`] = "";
        }
      }

      if (Object.keys(updates).length) await actor.update(updates);
      await actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Felszerelés: páncél törlése (Alt+klikk) – item törlése az inventory-ból
    $html.on("click", ".karakter-armor-delete", async ev => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = ev.currentTarget.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Pancel") return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Tárgy: mennyiség mező – szélesség tartalomhoz (mint lőszer)
    $html.on("focus input blur", ".karakter-item-quantity-input", ev => {
      this._resizeWeaponQuantityInput(ev.currentTarget);
    });
    $html.find(".karakter-item-quantity-input").each((i, el) => {
      this._resizeWeaponQuantityInput(el);
    });
    $html.on("change", ".karakter-item-quantity-input", async ev => {
      const input = ev.currentTarget;
      const itemId = (input.dataset.itemId ?? "").trim();
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Targy") return; // Egyeb nincs mennyiség mező
      const val = (input.value ?? "").trim();
      await item.update({ "system.quantity": val });
      setTimeout(() => {
        const root = this.form ?? this.element;
        const el = root?.querySelector(`.karakter-item-quantity-input[data-item-id="${itemId}"]`);
        if (el) this._resizeWeaponQuantityInput(el);
      }, 80);
    });

    // Tárgy/Egyeb törlést a fent .karakter-item-delete (Alt+klikk) egyetlen handler intézi – ne legyen duplikált handler, mert az már törölte az itemet és a második .get() "Item does not exist!" hibát dobna.

    // Mentés csak kikattintáskor (blur), ne gépelés közben – így nem ugrik a kurzor és a lap.
    const sheet = this;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      const touchesHealth =
        updateData.system?.resources?.currentHealth != null ||
        updateData.system?.resources?.hitLocations != null;
      sheet.actor.update(updateData).then(() => {
        if (touchesHealth) setTimeout(() => sheet.render(true), 260);
      }).catch(err => console.warn("VoidKarakterSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
    sheet._votvBlur = (ev) => {
      const target = ev.target;
      if (!target || !target.form) return;
      const tag = target.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return;
      const form = target.form;
      if (!isOurForm(form)) return;
      // Ha a fókusz ugyanazon karakterlapon belüli másik mezőre kerül át, ne indítsunk mentést.
      const next = ev.relatedTarget;
      if (next && (form.contains(next) || (sheet.id && next.closest?.(`#${CSS.escape(sheet.id)}`)))) return;
      if (game.votv) game.votv._lastKarakterSheetBlurSave = { appId: sheet.id, at: Date.now() };
      doSubmit(form);
    };
    document.body.addEventListener("blur", sheet._votvBlur, true);
  }

  _tearDown(options) {
    document.body.removeEventListener("blur", this._votvBlur, true);
    return super._tearDown?.(options);
  }

  _getFormDataForUpdate(form) {
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      if (el.name.startsWith("system.resources.healthStatus.")) continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") value = el.value === "" ? 0 : Number(el.value);
      else value = el.value ?? "";
      foundry.utils.setProperty(updateData, el.name, value);
    }
    const res = foundry.utils.mergeObject(
      this.actor.system?.resources ?? {},
      foundry.utils.expandObject(updateData).system?.resources ?? {}
    );
    const hitLoc = res.hitLocations ?? {};
    const curHealth = res.currentHealth ?? {};
    const parts = ["head", "torso", "arms", "legs"];
    for (const part of parts) {
      const total = hitLoc[part]?.value ?? 0;
      const current = curHealth[part] ?? 0;
      foundry.utils.setProperty(updateData, `system.resources.healthStatus.${part}`, VoidKarakterSheet._healthStatusFromRatio(current, total));
    }
    return updateData;
  }

  async _onDropItem(event, data) {
    // Képesség dropp: bárhova húzva a lapra, a típusa (kind) alapján kerül a megfelelő helyre.
    if (data) {
      let uuid =
        data.uuid ??
        data.documentUuid ??
        data.data?.uuid ??
        (typeof data === "string" ? data : null);

      if (!uuid && typeof data === "object") {
        for (const v of Object.values(data)) {
          if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) {
            uuid = v;
            break;
          }
        }
      }

      if (uuid) {
        const doc = await fromUuid(uuid);
        if (doc && doc.documentName === "Item" && (doc.type === "Kepesseg" || doc.type === "ability")) {
          let itemId = doc.id;
          if (doc.parent?.id !== this.actor.id) {
            const itemData = foundry.utils.mergeObject(doc.toObject(), { type: "Kepesseg" });
            const created = await this.actor.createEmbeddedDocuments("Item", [itemData]);
            itemId = created[0]?.id ?? itemId;
          }

          const kind = (doc.system?.kind ?? "passive").toString();
          const abilities = this.actor.system.abilities ?? {};

          // Mindig a képesség típusa alapján: Faji / Háttér → egy slot, Aktív / Passzív → lista.
          if (kind === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": itemId,
              "system.abilities.faji.name": doc.name
            });
            return;
          }
          if (kind === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": itemId,
              "system.abilities.hatter.name": doc.name
            });
            return;
          }
          const area = kind === "active" ? "active" : "passive";
          const current = Array.isArray(abilities[area]?.items)
            ? abilities[area].items.slice()
            : Array.isArray(abilities[area])
            ? abilities[area].slice()
            : [];
          if (!current.includes(itemId)) current.push(itemId);
          await this.actor.update({ [`system.abilities.${area}.items`]: current });
          return;
        }
      }
    }

    // Ha nem ability, de Fegyver Itemet húztak a lapra, vegyük fel az inventory-ba (ha még nincs).
    // Alapértelmezetten NE legyen felszerelve – felülírjuk bármit, ami slotba tenné.
    if (data) {
      let uuid =
        data.uuid ??
        data.documentUuid ??
        data.data?.uuid ??
        (typeof data === "string" ? data : null);

      if (!uuid && typeof data === "object") {
        for (const v of Object.values(data)) {
          if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) {
            uuid = v;
            break;
          }
        }
      }

      if (uuid) {
        const doc = await fromUuid(uuid);
        if (doc && doc.documentName === "Item" && doc.type === "Fegyver") {
          const actor = this.actor;
          const isNewToActor = doc.parent?.id !== actor.id;
          let itemId = doc.id;
          if (isNewToActor) {
            const itemData = foundry.utils.mergeObject(doc.toObject(), { system: { ...(doc.toObject().system ?? {}), equipped: false } });
            const created = await actor.createEmbeddedDocuments("Item", [itemData]);
            itemId = created[0]?.id ?? itemId;
          }
          // Ha most vettük fel (külső dropp): kötelezően vegyük ki minden slotból – equipped checkbox legyen false by default.
          if (isNewToActor) {
            const weapons = actor.system?.weapons ?? {};
            const slotOrderRaw = (weapons.slotOrder ?? "").trim();
            const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
            const slotKeys = slotOrderRaw ? slotOrderRaw.split(/\s*,\s*/).filter(s => ALL_WEAPON_SLOTS.includes(s)) : [];
            const slotsWithThisItem = slotKeys.filter(k => (weapons[k]?.itemId ?? "").trim() === itemId);
            if (slotsWithThisItem.length > 0) {
              const newKeys = slotKeys.filter(k => !slotsWithThisItem.includes(k));
              const update = {
                "system.weapons.slotOrder": newKeys.join(",")
              };
              for (const sk of slotsWithThisItem) {
                update[`system.weapons.${sk}.itemId`] = "";
                update[`system.weapons.${sk}.name`] = "";
                update[`system.weapons.${sk}.damage`] = "";
                update[`system.weapons.${sk}.bonus`] = "";
              }
              await actor.update(update);
            }
          }
          return;
        }
        if (doc && doc.documentName === "Item" && doc.type === "Pancel") {
          const actor = this.actor;
          if (doc.parent?.id !== actor.id) {
            const itemData = foundry.utils.mergeObject(doc.toObject(), { system: { ...(doc.toObject().system ?? {}), equipped: false } });
            await actor.createEmbeddedDocuments("Item", [itemData]);
          }
          return;
        }
        if (doc && doc.documentName === "Item" && doc.type === "MikroChip") {
          const actor = this.actor;
          if (doc.parent?.id !== actor.id) {
            await actor.createEmbeddedDocuments("Item", [doc.toObject()]);
          }
          return;
        }
        if (doc && doc.documentName === "Item" && (doc.type === "Targy" || doc.type === "Egyeb")) {
          const actor = this.actor;
          if (doc.parent?.id !== actor.id) {
            await actor.createEmbeddedDocuments("Item", [doc.toObject()]);
          }
          return;
        }
      }
    }

    // Ha nem ability dropp, menjen a Foundry alap logikáján.
    return super._onDropItem(event, data);
  }

  _onWeaponSlotDragOver(ev, slot) {
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item") return;
    ev.preventDefault();
    ev.currentTarget?.classList.add("karakter-weapon-slot-drag-over");
  }

  async _onWeaponSlotDrop(ev, slot) {
    ev.preventDefault();
    ev.stopPropagation();
    ev.currentTarget?.classList.remove("karakter-weapon-slot-drag-over");
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item" || !json?.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "Fegyver") return;
    // Ha a fegyver még nincs a karakteren (compendiumról / máshonnan húzták), csak adjuk hozzá, ne felszereljük (equipped = false).
    if (doc.parent?.id !== this.actor.id) {
      const itemData = foundry.utils.mergeObject(doc.toObject(), { system: { ...(doc.toObject().system ?? {}), equipped: false } });
      await this.actor.createEmbeddedDocuments("Item", [itemData]);
      return;
    }
    const itemId = doc.id;
    await this.actor.update({
      [`system.weapons.${slot}.itemId`]: itemId,
      [`system.weapons.${slot}.name`]: doc.name,
      [`system.weapons.${slot}.damage`]: doc.system?.damage ?? "",
      [`system.weapons.${slot}.bonus`]: doc.system?.bonus ?? ""
    });
    await doc.update({ "system.equipped": true });
  }

  _onInventoryDragHandleStart(ev, itemId, row) {
    if (!row) return;
    if (ev.dataTransfer) {
      ev.dataTransfer.setData("text/plain", itemId);
      ev.dataTransfer.effectAllowed = "move";
      if (typeof ev.dataTransfer.setDragImage === "function") {
        ev.dataTransfer.setDragImage(row, 0, 0);
      }
    }
    this._draggingInventoryItemId = itemId;
  }

  _onInventoryRowDragOver(ev, itemId) {
    const sourceId = this._draggingInventoryItemId;
    if (!sourceId || sourceId === itemId) return;
    ev.preventDefault();
    if (ev.dataTransfer) ev.dataTransfer.dropEffect = "move";
    ev.currentTarget?.classList.add("karakter-actions-row-drag-over");
  }

  _onInventoryRowDragLeave(ev, _itemId) {
    ev.currentTarget?.classList.remove("karakter-actions-row-drag-over");
  }

  async _onInventoryRowDrop(ev, targetId) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("karakter-actions-row-drag-over");
    const sourceId = this._draggingInventoryItemId || ev.dataTransfer?.getData("text/plain");
    this._draggingInventoryItemId = null;
    if (!sourceId || !targetId || sourceId === targetId) return;

    const items = this.actor.items.contents.slice().sort((a, b) => {
      const sa = typeof a.sort === "number" ? a.sort : 0;
      const sb = typeof b.sort === "number" ? b.sort : 0;
      return sa - sb;
    });
    const ids = items.map(i => i.id);
    const fromIdx = ids.indexOf(sourceId);
    const toIdx = ids.indexOf(targetId);
    if (fromIdx === -1 || toIdx === -1) return;

    ids.splice(fromIdx, 1);
    ids.splice(toIdx, 0, sourceId);

    const updates = ids.map((id, index) => ({
      _id: id,
      sort: (index + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", updates);
  }

  _onInventoryAreaDragOver(ev) {
    const raw =
      ev.dataTransfer?.getData("text/plain") ||
      ev.dataTransfer?.getData("application/json") ||
      "";
    let json = null;
    if (typeof raw === "string" && raw.trim()) {
      try {
        json = JSON.parse(raw.trim());
      } catch {
        // ignore non-JSON strings (could be UUID-only etc.); we still allow highlight
      }
    } else if (raw && typeof raw === "object") {
      json = raw;
    }

    // Only show the inventory highlight for Item drags.
    if (json && json.type !== "Item") return;

    ev.preventDefault();
    ev.currentTarget?.classList.add("karakter-actions-table-drag-over");
  }

  _onInventoryAreaDragLeave(ev) {
    ev.currentTarget?.classList.remove("karakter-actions-table-drag-over");
  }

  _onInventoryAreaDrop(ev) {
    ev.currentTarget?.classList.remove("karakter-actions-table-drag-over");
    // Do not prevent default here so Foundry's _onDropItem continues to handle
    // adding the item into the inventory when dropped on this table.
  }

  /** Lőszer mező: mindig fit-content (CSS field-sizing + JS fallback az input klónjával). */
  _resizeWeaponQuantityInput(input) {
    if (!input || input.type !== "text") return;
    const minW = 20;
    if (!input.value || String(input.value).trim() === "") {
      input.style.width = "";
      return;
    }
    const clone = input.cloneNode(false);
    clone.value = input.value;
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    clone.style.width = "1px";
    clone.style.visibility = "hidden";
    clone.removeAttribute("data-item-id");
    document.body.appendChild(clone);
    const w = clone.scrollWidth;
    document.body.removeChild(clone);
    input.style.width = `${Math.max(minW, w)}px`;
  }

  async _postItemToChat(itemId) {
    const item = this.actor.items.get(itemId);
    if (!item || (item.type !== "MikroChip" && item.type !== "Egyeb")) return;
    const description = (item.system?.description ?? "").trim();
    let typeLabel;
    let kpLine = "";
    if (item.type === "MikroChip") {
      const abilityType = item.system?.abilityType ?? "passive";
      typeLabel = (abilityType === "active" ? "Aktív" : "Passzív") + " Mikro-Chip";
      if (abilityType === "active") {
        const kp = Number(item.system?.replaceCost ?? 0) || 0;
        if (kp > 0) kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
      }
    } else {
      typeLabel = "Egyéb Információ";
    }
    const descLine = description ? `<p>${description}</p>` : "";
    const content = `
      <h2>${item.name}</h2>
      <p><strong>Típus:</strong> ${typeLabel}</p>
      ${kpLine}
      ${descLine}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content,
      flags: { "vacuum-of-the-void": { itemId: item.id, itemType: item.type } }
    });
  }

  async _postAbilityToChat(itemId) {
    const item = this.actor.items.get(itemId);
    if (!item || (item.type !== "Kepesseg" && item.type !== "ability")) return;
    const kind = item.system?.kind ?? "passive";
    const kp = Number(item.system?.kp ?? 0) || 0;
    const description = (item.system?.description ?? "").trim();
    const kindLabel =
      kind === "active"
        ? "Aktív"
        : kind === "species"
        ? "Faji"
        : kind === "background"
        ? "Háttér"
        : "Passzív";
    const kpLine = kp > 0 ? `<p><strong>KP:</strong> ${kp}</p>` : "";
    const descLine = description ? `<p>${description}</p>` : "";
    const content = `
      <h2>${item.name}</h2>
      <p><strong>Típus:</strong> ${kindLabel}</p>
      ${kpLine}
      ${descLine}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content,
      flags: { "vacuum-of-the-void": { abilityId: item.id } }
    });
  }

  _parseAbilityDrop(ev) {
    // Inventory / MikroChip mintájára: a dataTransfer-ben lévő JSON drag adatot olvassuk ki.
    const raw =
      ev.dataTransfer?.getData("text/plain") ||
      ev.dataTransfer?.getData("application/json") ||
      "";
    if (!raw) return null;

    let json;
    try {
      json = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch {
      return null;
    }
    if (!json || json.type !== "Item" || !json.uuid) return null;
    return json;
  }

  _onAbilitySingleDragOver(ev, _slot) {
    const json = this._parseAbilityDrop(ev);
    if (!json) return;
    ev.preventDefault();
    ev.currentTarget?.classList.add("karakter-ability-slot-drag-over");
  }

  async _onAbilitySingleDrop(ev, slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("karakter-ability-slot-drag-over");
    const json = this._parseAbilityDrop(ev);
    if (!json || !json.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || (doc.type !== "Kepesseg" && doc.type !== "ability")) return;

    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const itemData = foundry.utils.mergeObject(doc.toObject(), { type: "Kepesseg" });
      const created = await this.actor.createEmbeddedDocuments("Item", [itemData]);
      itemId = created[0]?.id ?? itemId;
    }
    await this.actor.update({
      [`system.abilities.${slot}.itemId`]: itemId,
      [`system.abilities.${slot}.name`]: doc.name
    });
  }

  _onAbilityAreaDragOver(ev, _area) {
    const json = this._parseAbilityDrop(ev);
    if (!json) return;
    ev.preventDefault();
    ev.currentTarget?.classList.add("karakter-ability-area-drag-over");
  }

  async _onAbilityAreaDrop(ev, area) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("karakter-ability-area-drag-over");
    const json = this._parseAbilityDrop(ev);
    if (!json || !json.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || (doc.type !== "Kepesseg" && doc.type !== "ability")) return;

    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const itemData = foundry.utils.mergeObject(doc.toObject(), { type: "Kepesseg" });
      const created = await this.actor.createEmbeddedDocuments("Item", [itemData]);
      itemId = created[0]?.id ?? itemId;
    }
    const abilities = this.actor.system.abilities ?? {};
    const current = Array.isArray(abilities[area]?.items)
      ? abilities[area].items.slice()
      : Array.isArray(abilities[area])
      ? abilities[area].slice()
      : [];
    if (!current.includes(itemId)) current.push(itemId);
    await this.actor.update({ [`system.abilities.${area}.items`]: current });
  }

  _onMicrochipSlotDragOver(ev, slot) {
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item") return;
    ev.preventDefault();
    ev.currentTarget?.classList.add("karakter-microchip-slot-drag-over");
  }

  async _onMicrochipSlotDrop(ev, slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("karakter-microchip-slot-drag-over");
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item" || !json?.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "MikroChip") return;
    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const created = await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
      itemId = created[0]?.id ?? itemId;
    }
    await this.actor.update({
      [`system.gear.microchips.${slot}.itemId`]: itemId,
      [`system.gear.microchips.${slot}.name`]: doc.name,
      [`system.gear.microchips.${slot}.active`]: true
    });
  }

  async _rollSkill(skillKey, label) {
    const skills = this.actor.system.skills ?? {};
    const valueRaw = skills[skillKey] ?? 0;
    let value = Number(valueRaw) || 0;
    const healthStatus = this._getSkillHealthStatus(skillKey);
    if (healthStatus === 1) value -= 6;
    else if (healthStatus === 2) value -= 3;
    const modifier = value !== 0 ? (value > 0 ? `+${value}` : `${value}`) : "";
    const formula = `3d6${modifier}`;

    const roll = new Roll(formula);
    await roll.evaluate({ async: true });
    const { resultType, label: critLabel } = computeVotvCritInfo(roll);
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: label,
      flags: { "vacuum-of-the-void": { resultType, critLabel } },
      rollMode
    });
  }

  async _rollMorale() {
    const current = Number(this.actor.system.resources?.morale ?? 0) || 0;
    if (current <= 0) return;

    const roll = new Roll("1d8");
    await roll.evaluate({ async: true });
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
    const next = Math.max(0, current - 1);
    await this.actor.update({ "system.resources.morale": next });
  }

  async _rollInitiative() {
    const quickThinking = Number(this.actor.system.skills?.quickThinking ?? 0) || 0;
    const modifier = quickThinking !== 0 ? (quickThinking > 0 ? `+${quickThinking}` : `${quickThinking}`) : "";
    const formula = `1d20${modifier}`;
    const roll = new Roll(formula);
    await roll.evaluate({ async: true });
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
  }

  async _rollWeapon(slot) {
    const weapons = this.actor.system.weapons ?? {};
    const slotData = weapons[slot] ?? {};
    const skills = this.actor.system.skills ?? {};
    const ownedWeapons = this.actor.items.filter(i => i.type === "Fegyver");
    let item = null;
    if (slotData.itemId) {
      item = ownedWeapons.find(w => w.id === slotData.itemId) ?? null;
    }

    const name = (item && item.name) || slotData.name || `Fegyver (${slot})`;
    const weaponBonus = Number(slotData.bonus || 0) || 0;

    // Fegyver Jártasság mezője (alapértelmezett: explosive → Kézifegyver, egyéb → Löveghasználat)
    const weaponType = item?.system?.type || "kinetic";
    const rawSkill = (item?.system?.skillKey ?? "").trim();
    const skillKey = rawSkill && skills[rawSkill] !== undefined
      ? rawSkill
      : (weaponType === "explosive" ? "grenadeUse" : "firearms");
    const skillBonus = Number(skills[skillKey] || 0) || 0;
    const totalBonus = weaponBonus + skillBonus;
    const modifier = totalBonus !== 0 ? (totalBonus > 0 ? `+${totalBonus}` : `${totalBonus}`) : "";
    const formula = `3d6${modifier}`;

    const roll = new Roll(formula);
    await roll.evaluate({ async: true });
    const { resultType, label: critLabel } = computeVotvCritInfo(roll);
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${name} – találat`,
      flags: { "vacuum-of-the-void": { resultType, critLabel } },
      rollMode
    });
  }

  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(itemId, slotKey = "") {
    const actor = this.actor;
    if (!actor) return;
    let item = actor.items.get?.(itemId) ?? actor.items.contents?.find?.(i => i.id === itemId);
    if (!item || item.type !== "Fegyver") return;
    let damageFormula = (item.system?.damage ?? "").trim();
    if (!damageFormula && slotKey) {
      const slotData = (actor.system?.weapons ?? {})[slotKey] ?? {};
      damageFormula = (slotData.damage ?? "").trim();
    }
    if (!damageFormula) {
      ui.notifications?.warn?.(game.i18n?.localize?.("votv.weapon.no-damage") ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const roll = new Roll(damageFormula);
    await roll.evaluate({ async: true });
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor: `${item.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
  }
}

