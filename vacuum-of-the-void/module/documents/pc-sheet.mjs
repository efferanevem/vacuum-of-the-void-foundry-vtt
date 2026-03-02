export class VoidPcSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    classes: ["vacuum-of-the-void", "sheet", "actor", "pc"],
    template: "systems/vacuum-of-the-void/templates/actor/pc-sheet.hbs",
    width: 1000,
    minWidth: 1000,
    height: 800,
    form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: true }),
    window: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.window ?? {}, {
      resizable: true,
      contentClasses: [
        ...(super.DEFAULT_OPTIONS?.window?.contentClasses ?? []),
        "votv-scroll"
      ]
    })
  });

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

  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a kurzort / lap tetejére). */
  async render(force = false, options = {}) {
    const lastBlur = game.votv?._lastPcSheetBlurSave;
    if (lastBlur?.appId === this.id && (Date.now() - lastBlur.at) < 250) return this;
    const rootBefore = this.form ?? this.element;
    let saved = { scrollTop: null, focus: null };
    if (rootBefore) {
      const activeEl = document.activeElement;
      const isOurs = rootBefore.contains(activeEl);
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
      const scrollElBefore =
        rootBefore.closest?.(".votv-scroll") ??
        rootBefore.querySelector?.(".votv-scroll") ??
        this.element?.querySelector?.(".votv-scroll") ??
        (rootBefore.scrollHeight > rootBefore.clientHeight ? rootBefore : null);
      if (scrollElBefore) saved.scrollTop = scrollElBefore.scrollTop;
    }
    const out = await super.render(force, options);
    const rootAfter = this.form ?? this.element;
    const scrollTopToRestore = saved.scrollTop;
    const focusToRestore = saved.focus;
    if ((scrollTopToRestore != null || focusToRestore) && rootAfter) {
      requestAnimationFrame(() => {
        if (scrollTopToRestore != null) {
          const scrollElAfter =
            rootAfter.closest?.(".votv-scroll") ??
            rootAfter.querySelector?.(".votv-scroll") ??
            this.element?.querySelector?.(".votv-scroll") ??
            (rootAfter.scrollHeight > rootAfter.clientHeight ? rootAfter : null);
          if (scrollElAfter) scrollElAfter.scrollTop = scrollTopToRestore;
        }
        if (focusToRestore?.name != null || focusToRestore?.id != null) {
          const el =
            rootAfter.querySelector?.(focusToRestore.id ? `#${CSS.escape(focusToRestore.id)}` : null) ??
            (focusToRestore.name ? rootAfter.querySelector?.(`[name="${CSS.escape(focusToRestore.name)}"]`) : null);
          if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) {
            el.focus();
            if (typeof el.selectionStart === "number") {
              el.selectionStart = focusToRestore.selectionStart ?? 0;
              el.selectionEnd = focusToRestore.selectionEnd ?? focusToRestore.selectionStart ?? 0;
            }
          }
        }
      });
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

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    context.actor = context.actor ?? this.actor;
    context.system = this.actor.system;
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
      context.computedHealthStatus[part] = VoidPcSheet._healthStatusFromRatio(current, total);
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
    const inventoryItems = this.actor.items.contents.filter(i => i.type !== "ability").slice().sort((a, b) => {
      const sa = typeof a.sort === "number" ? a.sort : 0;
      const sb = typeof b.sort === "number" ? b.sort : 0;
      return sa - sb;
    });

    const inventory = inventoryItems.map(item => {
      const isWeapon = item.type === "weapon";
      const isMicrochip = item.type === "microchip";
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
      const rangeShort = isWeapon && item.system?.range?.short != null ? item.system.range.short : null;
      const rangeLong = isWeapon && item.system?.range?.long != null ? item.system.range.long : null;
      const rangeStr = rangeShort != null && rangeLong != null ? `${rangeShort} / ${rangeLong} m` : "";
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
    const weaponDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "weapon");
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
        slotNum: idx + 1,
        displayName: item?.name || slotData.name || emptyLabel,
        img: item?.img || "",
        bonus: Number(slotData.bonus) || 0,
        damage: slotData.damage ?? ""
      };
    });
    const microchipItems = (this.actor.items?.contents ?? []).filter(i => i.type === "microchip").map(i => ({ id: i.id, name: i.name, img: i.img }));
    const emptyChipLabel = "— Nincs chip —";
    const otherSlotIds = (slotNum) => {
      const ids = [];
      if (slotNum !== 1) ids.push(microchipSlot1Id);
      if (slotNum !== 2) ids.push(microchipSlot2Id);
      if (slotNum !== 3) ids.push(microchipSlot3Id);
      return ids;
    };
    context.microchipItemsSlot1 = microchipItems.filter(c => !otherSlotIds(1).includes(c.id));
    context.microchipItemsSlot2 = microchipItems.filter(c => !otherSlotIds(2).includes(c.id));
    context.microchipItemsSlot3 = microchipItems.filter(c => !otherSlotIds(3).includes(c.id));
    ["1", "2", "3"].forEach((n) => {
      const sk = `slot${n}`;
      const slotData = microchips[sk] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = microchipItems.find(c => c.id === itemId);
      context[`microchip${n}ItemId`] = itemId;
      context[`microchip${n}DisplayName`] = item?.name || slotData.name || emptyChipLabel;
      context[`microchip${n}Img`] = item?.img || "";
      // Chips should be disabled by default; only explicitly-true flags are active.
      context[`microchip${n}Active`] = slotData.active === true;
    });

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

    return context;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    // ApplicationV2: content lives in the form; use form as root so listeners attach to the right DOM
    const root = this.form ?? this.element;
    const $html = $(root);
    $(document).off("click.votv-weapon-dropdown");
    $(document).off("click.votv-microchip-dropdown");
    if (!this.isEditable) return;

    // Stressz > 10 esetén a textbox piros hátteret kap
    const updateStressHighlight = (ev) => {
      const input = ev ? ev.currentTarget : root.querySelector?.('input[name="system.resources.stress.value"]');
      if (!input) return;
      const val = Number(input.value) || 0;
      input.classList.toggle("pc-stress-over-10", val > 10);
    };
    $html.on("input change", "input[name=\"system.resources.stress.value\"]", updateStressHighlight);
    const stressInput = root.querySelector?.('input[name="system.resources.stress.value"]');
    if (stressInput) updateStressHighlight({ currentTarget: stressInput });

    // Karakterkép: kattintásra Foundry fájlkezelő (FilePicker) megnyitása
    $html.on("click", ".pc-portrait-img", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (path) => {
          if (path) this.actor.update({ img: path });
        }
      }).browse();
    });

    // Skill rolls: click on skill label (delegated)
    $html.on("click", ".pc-skill-label", ev => {
      ev.preventDefault();
      const element = ev.currentTarget;
      const skillKey = element.dataset.skill;
      const label = element.textContent?.trim() || skillKey;
      this._rollSkill(skillKey, label);
    });

    // Inventory: click weapon or item name/icon to open its sheet.
    const openInventoryItem = (target, ev) => {
      const itemId = target.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;

      // For weapons assigned to a slot, allow Alt+click on the name to roll instead of opening the sheet.
      if (target.classList.contains("pc-weapon-label") && (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey)) {
        const slot = target.dataset.weaponSlot;
        if (slot) this._rollWeapon(slot);
        return;
      }

      item.sheet?.render(true);
    };

    $html.on("click", ".pc-inventory-item-name", ev => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget, ev);
    });

    $html.on("click", ".pc-inventory-item-icon", ev => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget, ev);
    });

    // Inventory quantity per item (delegated)
    $html.on("change", ".pc-item-qty", async ev => {
      const input = ev.currentTarget;
      const itemId = input.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      let qty = Number(input.value);
      if (!Number.isFinite(qty) || qty < 0) qty = 0;
      await item.update({ "system.quantity": qty });
    });

    // Remove inventory item from actor (delegated)
    $html.on("click", ".pc-item-delete", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;

      const item = this.actor.items.get(itemId);
      const updates = {};

      // If a weapon is deleted while equipped, fully clear its slot and remove it from slotOrder.
      if (item?.type === "weapon") {
        const weapons = this.actor.system.weapons ?? {};
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

      if (Object.keys(updates).length) {
        await this.actor.update(updates);
      }

      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Equipped weapons: attack and damage from Fegyverek card (delegated)
    $html.on("click", ".pc-weapon-attack", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const slot = (btn.dataset.slot ?? "").trim();
      if (!slot) return;
      await this._rollWeapon(slot);
    });

    $html.on("click", ".pc-weapon-damage", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const slot = (btn.dataset.slot ?? "").trim();
      if (!slot) return;
      const weapons = this.actor.system.weapons ?? {};
      const slotData = weapons[slot] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      if (!itemId) return;
      await this._rollWeaponDamage(itemId);
    });

    // Weapons: equip / unequip via inventory checkboxes (delegated)
    $html.on("change", ".pc-weapon-equip-toggle", async ev => {
      const checkbox = ev.currentTarget;
      const itemId = (checkbox.dataset.itemId ?? "").trim();
      if (!itemId) return;
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
        const item = this.actor.items.get(itemId);
        const updates = {
          "system.weapons.slotOrder": slotKeys.join(","),
          [`system.weapons.${targetSlot}.itemId`]: itemId,
          [`system.weapons.${targetSlot}.name`]: item?.name ?? "",
          [`system.weapons.${targetSlot}.damage`]: item?.system?.damage ?? ""
        };
        await this.actor.update(updates);
      } else if (currentSlotKey) {
        const newKeys = slotKeys.filter(k => k !== currentSlotKey);
        const updates = {
          "system.weapons.slotOrder": newKeys.join(",")
        };
        updates[`system.weapons.${currentSlotKey}.itemId`] = "";
        updates[`system.weapons.${currentSlotKey}.name`] = "";
        updates[`system.weapons.${currentSlotKey}.damage`] = "";
        updates[`system.weapons.${currentSlotKey}.bonus`] = "";
        await this.actor.update(updates);
      }
    });

    // Mikro-chipek: dropdown open/close and select (delegated)
    $html.on("click", ".pc-microchip-slot-display", ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      if (btn.disabled) return;
      const wrap = btn.closest(".pc-microchip-slot-select-wrap");
      const wasOpen = wrap?.classList.contains("pc-microchip-slot-open");
      $html.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
      if (!wasOpen && wrap) wrap.classList.add("pc-microchip-slot-open");
    });

    $html.on("click", ".pc-microchip-slot-option", async ev => {
      ev.preventDefault();
      const li = ev.currentTarget;
      const wrap = li.closest(".pc-microchip-slot-select-wrap");
      const btn = wrap?.querySelector(".pc-microchip-slot-display");
      const slot = btn?.dataset.slot;
      if (!slot) return;
      const itemId = (li.dataset.itemId ?? "").trim();
      const displayName = (li.dataset.itemName ?? li.textContent?.trim() ?? "").trim() || "— Nincs chip —";
      const itemImg = (li.dataset.itemImg ?? "").trim();

      const displayEl = wrap?.querySelector(".pc-microchip-slot-display-text");
      if (displayEl) displayEl.textContent = displayName;

      let thumb = wrap?.querySelector(".pc-microchip-slot-thumb");
      if (itemImg) {
        if (!thumb) {
          thumb = document.createElement("img");
          thumb.className = "pc-microchip-slot-thumb";
          thumb.alt = "";
          btn?.insertBefore(thumb, displayEl);
        }
        thumb.src = itemImg;
        thumb.style.display = "";
      } else if (thumb) {
        thumb.remove();
      }

      wrap?.classList.remove("pc-microchip-slot-open");

      const item = itemId ? this.actor.items.get(itemId) : null;
      const updates = {
        [`system.gear.microchips.${slot}.itemId`]: itemId,
        [`system.gear.microchips.${slot}.name`]: item?.name ?? ""
      };
      if (itemId) updates[`system.gear.microchips.${slot}.active`] = true;
      await this.actor.update(updates);
    });

    $(document).on("click.votv-microchip-dropdown", ev => {
      if ($(ev.target).closest(".pc-microchip-slot-select-wrap").length) return;
      $html.find(".pc-microchip-slot-select-wrap").removeClass("pc-microchip-slot-open");
    });

    // Microchip slot active checkbox (delegated)
    $html.on("change", ".pc-microchip-slot-active", ev => {
      const slot = ev.currentTarget.dataset.slot;
      if (!slot) return;
      const checked = ev.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${slot}.active`]: checked });
    });

    // Mikro-chipek: drag-and-drop microchip onto a slot
    $html.find(".pc-microchip-slot").each((i, el) => {
      const slot = el.dataset.slot;
      el.addEventListener("dragover", ev => this._onMicrochipSlotDragOver(ev, slot));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("pc-microchip-slot-drag-over"));
      el.addEventListener("drop", ev => this._onMicrochipSlotDrop(ev, slot));
    });

    // Képességek: make areas explicit HTML5 drop targets (visual highlight only;
    // actual item wiring is handled in _onDropItem).
    $html.find(".pc-ability-slot-single").each((i, el) => {
      const slot = el.dataset.slot;
      if (!slot) return;
      el.addEventListener("dragover", ev => this._onAbilitySingleDragOver(ev, slot));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("pc-ability-slot-drag-over"));
      el.addEventListener("drop", ev => this._onAbilitySingleDrop(ev, slot));
    });
    $html.find(".pc-ability-area").each((i, el) => {
      const area = el.dataset.area;
      if (!area) return;
      el.addEventListener("dragover", ev => this._onAbilityAreaDragOver(ev, area));
      el.addEventListener("dragleave", ev => ev.currentTarget?.classList.remove("pc-ability-area-drag-over"));
      el.addEventListener("drop", ev => this._onAbilityAreaDrop(ev, area));
    });

    // Képességek: clear and remove buttons (delegated)
    $html.on("click", ".pc-ability-slot-clear", async ev => {
      ev.preventDefault();
      const slot = ev.currentTarget.dataset.slot;
      if (!slot) return;
      await this.actor.update({
        [`system.abilities.${slot}.itemId`]: "",
        [`system.abilities.${slot}.name`]: ""
      });
    });
    $html.on("click", ".pc-ability-pill-remove", async ev => {
      ev.preventDefault();
      const area = ev.currentTarget.dataset.area;
      const itemId = ev.currentTarget.dataset.itemId;
      if (!area || !itemId) return;
      const abilities = this.actor.system.abilities ?? {};
      const current = Array.isArray(abilities[area]?.items) ? abilities[area].items.slice() : [];
      const next = current.filter(id => id !== itemId);
      await this.actor.update({ [`system.abilities.${area}.items`]: next });
    });

    $html.on("click", ".pc-ability-open", ev => {
      ev.preventDefault();
      const el = ev.currentTarget;
      const itemId = el.dataset.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });

    $html.on("click", ".pc-ability-chat", async ev => {
      ev.preventDefault();
      const btn = ev.currentTarget;
      const itemId = btn.dataset.itemId;
      if (!itemId) return;
      await this._postAbilityToChat(itemId);
    });

    // Equipment / inventory: drag only from handle, reorder vertically
    $html.find(".pc-actions-drag-handle").each((i, el) => {
      const handle = el;
      const row = handle.closest(".pc-actions-row");
      const itemId = row?.dataset?.itemId ?? handle.dataset?.itemId;
      if (!itemId) return;
      handle.addEventListener("dragstart", ev => this._onInventoryDragHandleStart(ev, itemId, row));
    });
    $html.find(".pc-actions-row").each((i, el) => {
      const row = el;
      const itemId = row.dataset.itemId;
      if (!itemId) return;
      row.addEventListener("dragover", ev => this._onInventoryRowDragOver(ev, itemId));
      row.addEventListener("dragleave", ev => this._onInventoryRowDragLeave(ev, itemId));
      row.addEventListener("drop", ev => this._onInventoryRowDrop(ev, itemId));
    });

    // Inventory area: highlight the whole inventory table when dragging an Item over it.
    const actionsTable = $html.find(".pc-actions-table")[0];
    if (actionsTable) {
      actionsTable.addEventListener("dragover", ev => this._onInventoryAreaDragOver(ev));
      actionsTable.addEventListener("dragleave", ev => this._onInventoryAreaDragLeave(ev));
      actionsTable.addEventListener("drop", ev => this._onInventoryAreaDrop(ev));
    }

    // Mentés csak kikattintáskor (blur), ne gépelés közben – így nem ugrik a kurzor és a lap.
    const sheet = this;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.actor.update(updateData).catch(err => console.warn("VoidPcSheet save failed", err));
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
      if (game.votv) game.votv._lastPcSheetBlurSave = { appId: sheet.id, at: Date.now() };
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
      foundry.utils.setProperty(updateData, `system.resources.healthStatus.${part}`, VoidPcSheet._healthStatusFromRatio(current, total));
    }
    return updateData;
  }

  async _onDropItem(event, data) {
    const target = event.target;
    const slotEl = target?.closest?.(".pc-ability-slot-single");
    const areaEl = target?.closest?.(".pc-ability-area");

    // If this drop is not over the abilities grid, use default behavior.
    if (!slotEl && !areaEl) return super._onDropItem(event, data);

    // Only handle Item drops ourselves in the abilities grid.
    if (!data || data.type !== "Item") return;

    const uuid = data.uuid ?? data.data?.uuid;
    if (!uuid) return;

    const doc = await fromUuid(uuid);
    if (!doc || doc.documentName !== "Item" || doc.type !== "ability") return;

    const kind = (doc.system?.kind ?? "passive").toString();

    // Ensure the ability exists on this actor.
    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const created = await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
      itemId = created[0]?.id ?? itemId;
    }

    const abilities = this.actor.system.abilities ?? {};

    if (slotEl) {
      const slot = slotEl.dataset.slot;
      if (!slot) return;

      const singleKindMap = {
        faji: "species",
        hatter: "background"
      };
      const expectedKind = singleKindMap[slot];
      if (!expectedKind || kind !== expectedKind) return;

      await this.actor.update({
        [`system.abilities.${slot}.itemId`]: itemId,
        [`system.abilities.${slot}.name`]: doc.name
      });
      return;
    }

    if (areaEl) {
      const area = areaEl.dataset.area;
      if (!area) return;

      const areaKindMap = {
        passive: "passive",
        active: "active"
      };
      const expectedKindArea = areaKindMap[area];
      if (!expectedKindArea || kind !== expectedKindArea) return;

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
    ev.currentTarget?.classList.add("pc-weapon-slot-drag-over");
  }

  async _onWeaponSlotDrop(ev, slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("pc-weapon-slot-drag-over");
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item" || !json?.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "weapon") return;
    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const created = await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
      itemId = created[0]?.id ?? itemId;
    }
    const updates = {
      [`system.weapons.${slot}.itemId`]: itemId,
      [`system.weapons.${slot}.name`]: doc.name,
      [`system.weapons.${slot}.damage`]: doc.system?.damage ?? ""
    };
    await this.actor.update(updates);
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
    ev.currentTarget?.classList.add("pc-actions-row-drag-over");
  }

  _onInventoryRowDragLeave(ev, _itemId) {
    ev.currentTarget?.classList.remove("pc-actions-row-drag-over");
  }

  async _onInventoryRowDrop(ev, targetId) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("pc-actions-row-drag-over");
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
    ev.currentTarget?.classList.add("pc-actions-table-drag-over");
  }

  _onInventoryAreaDragLeave(ev) {
    ev.currentTarget?.classList.remove("pc-actions-table-drag-over");
  }

  _onInventoryAreaDrop(ev) {
    ev.currentTarget?.classList.remove("pc-actions-table-drag-over");
    // Do not prevent default here so Foundry's _onDropItem continues to handle
    // adding the item into the inventory when dropped on this table.
  }

  async _postAbilityToChat(itemId) {
    const item = this.actor.items.get(itemId);
    if (!item || item.type !== "ability") return;
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
    const raw =
      ev.dataTransfer?.getData("text/plain") ||
      ev.dataTransfer?.getData("application/json") ||
      "";
    if (!raw) return null;

    // Foundry usually sends JSON for Items, but in some contexts it may be a bare UUID string.
    if (typeof raw === "string") {
      const trimmed = raw.trim();
      // If this looks like a UUID, accept it directly.
      if (trimmed.includes(".") && !trimmed.startsWith("{")) {
        return { uuid: trimmed };
      }
      try {
        const json = JSON.parse(trimmed);
        if (json?.uuid) return json;
        if (json?.data?.uuid) return { uuid: json.data.uuid };
        return null;
      } catch {
        console.warn("VOTV | _parseAbilityDrop: could not parse drag data string", raw);
        return null;
      }
    }

    if (raw?.uuid) return raw;
    if (raw?.data?.uuid) return { uuid: raw.data.uuid };
    return null;
  }

  _onAbilitySingleDragOver(ev, _slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.add("pc-ability-slot-drag-over");
  }

  async _onAbilitySingleDrop(ev, slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("pc-ability-slot-drag-over");
    const json = this._parseAbilityDrop(ev);
    if (!json) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "ability") return;

    const kind = (doc.system?.kind ?? "passive").toString();
    const allowedSingle = {
      faji: "species",
      hatter: "background"
    };
    const expectedKind = allowedSingle[slot];
    if (!expectedKind || kind !== expectedKind) return;

    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const created = await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
      itemId = created[0]?.id ?? itemId;
    }
    await this.actor.update({
      [`system.abilities.${slot}.itemId`]: itemId,
      [`system.abilities.${slot}.name`]: doc.name
    });
  }

  _onAbilityAreaDragOver(ev, _area) {
    ev.preventDefault();
    ev.currentTarget?.classList.add("pc-ability-area-drag-over");
  }

  async _onAbilityAreaDrop(ev, area) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("pc-ability-area-drag-over");
    const json = this._parseAbilityDrop(ev);
    if (!json) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "ability") return;

    const kind = (doc.system?.kind ?? "passive").toString();
    const allowedArea = {
      passive: "passive",
      active: "active"
    };
    const expectedKind = allowedArea[area];
    if (!expectedKind || kind !== expectedKind) return;

    let itemId = doc.id;
    if (doc.parent?.id !== this.actor.id) {
      const created = await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
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
    ev.currentTarget?.classList.add("pc-microchip-slot-drag-over");
  }

  async _onMicrochipSlotDrop(ev, slot) {
    ev.preventDefault();
    ev.currentTarget?.classList.remove("pc-microchip-slot-drag-over");
    const data = ev.dataTransfer?.getData("text/plain") || ev.dataTransfer?.getData("application/json") || "";
    let json;
    try {
      json = typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return;
    }
    if (json?.type !== "Item" || !json?.uuid) return;
    const doc = await fromUuid(json.uuid);
    if (!doc || doc.type !== "microchip") return;
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
    const value = Number(valueRaw) || 0;
    const modifier = value !== 0 ? (value > 0 ? `+${value}` : `${value}`) : "";
    const formula = `3d6${modifier}`;

    const roll = new Roll(formula);
    await roll.evaluate({ async: true });
    const resultType = roll.total >= 18 ? "critical" : roll.total <= 3 ? "fumble" : null;
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: label,
      flags: { "vacuum-of-the-void": { resultType } },
      rollMode
    });
  }

  async _rollWeapon(slot) {
    const weapons = this.actor.system.weapons ?? {};
    const slotData = weapons[slot] ?? {};
    const skills = this.actor.system.skills ?? {};
    const ownedWeapons = this.actor.items.filter(i => i.type === "weapon");
    let item = null;
    if (slotData.itemId) {
      item = ownedWeapons.find(w => w.id === slotData.itemId) ?? null;
    }

    const name = (item && item.name) || slotData.name || `Fegyver (${slot})`;
    const weaponBonus = Number(slotData.bonus || 0) || 0;

    // Use different skills based on weapon type: firearms vs thrown (grenades)
    const weaponType = item?.system?.type || "light";
    const skillKey = weaponType === "thrown" ? "grenadeUse" : "firearms";
    const skillBonus = Number(skills[skillKey] || 0) || 0;
    const totalBonus = weaponBonus + skillBonus;
    const modifier = totalBonus !== 0 ? (totalBonus > 0 ? `+${totalBonus}` : `${totalBonus}`) : "";
    const formula = `3d6${modifier}`;

    const roll = new Roll(formula);
    await roll.evaluate({ async: true });
    const resultType = roll.total >= 18 ? "critical" : roll.total <= 3 ? "fumble" : null;
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${name} – találat`,
      flags: { "vacuum-of-the-void": { resultType } },
      rollMode
    });
  }

  async _rollWeaponDamage(itemId) {
    const item = this.actor.items.get(itemId);
    if (!item || item.type !== "weapon") return;
    const damageFormula = (item.system?.damage ?? "").trim();
    if (!damageFormula) return;

    const roll = new Roll(damageFormula);
    await roll.evaluate({ async: true });
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${item.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
  }
}

