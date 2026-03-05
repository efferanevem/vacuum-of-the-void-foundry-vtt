export class VoidNpcSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(
    super.PARTS ?? {},
    {
      content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
    },
    { inplace: false }
  );

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
      template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
      width: 900,
      minWidth: 800,
      height: 720,
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

  async _prepareContext(options) {
    const context = await super._prepareContext(options) ?? {};
    context.actor = context.actor ?? this.actor;
    context.system = context.system ?? this.actor?.system;
    context.showDeathSkull = false;
    context.sizeForSelect = (context.system?.identity?.size ?? "").trim() || "Közepes";

    const actor = this.actor;
    const items = actor?.items?.contents ?? [];

    // Támadások: minden slotban lévő (felszerelt) fegyver megjelenik; minden slotot nézünk, sorrend: slotOrder majd többi
    const weapons = actor?.system?.weapons ?? {};
    const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
    const slotOrderRaw = (weapons.slotOrder ?? "").trim();
    const slotOrderList = slotOrderRaw ? slotOrderRaw.split(/\s*,\s*/).filter((s) => ALL_WEAPON_SLOTS.includes(s)) : [];
    const weaponDocs = items.filter((i) => i.type === "Fegyver");
    const weaponItems = weaponDocs.map((i) => ({ id: i.id, name: i.name, img: i.img }));
    const emptyLabel = "— Nincs fegyver —";
    const orderToUse = slotOrderList.length > 0 ? slotOrderList : ALL_WEAPON_SLOTS;
    const otherSlots = ALL_WEAPON_SLOTS.filter((s) => !orderToUse.includes(s));
    const slotKeysForDisplay = [...orderToUse, ...otherSlots];
    const equippedSlotKeys = slotKeysForDisplay.filter((slotKey) => {
      const itemId = (weapons[slotKey]?.itemId ?? "").trim();
      return itemId && weaponDocs.some((w) => w.id === itemId);
    });
    context.weaponSlots = equippedSlotKeys.map((slotKey) => {
      const slotData = weapons[slotKey] ?? {};
      const itemId = (slotData.itemId ?? "").trim();
      const item = weaponItems.find((w) => w.id === itemId);
      return {
        slotKey,
        itemId,
        displayName: item?.name || slotData.name || emptyLabel,
        img: item?.img || ""
      };
    });

    // Felszerelés táblázatok – behúzott itemek megjelenítése
    const weaponTypeLabels = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" };
    const weaponSizeLabels = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    context.weaponsTable = weaponDocs.map((item) => {
      const itemId = item.id;
      let slotKey = null;
      let slotData = {};
      for (const sk of slotKeysForDisplay) {
        if ((weapons[sk]?.itemId ?? "").trim() === itemId) {
          slotKey = sk;
          slotData = weapons[sk] ?? {};
          break;
        }
      }
      const equipped = !!slotKey;
      const sys = item?.system ?? {};
      const rangeStr = typeof sys.range === "string" ? (sys.range || "").trim() : "";
      const typeRaw = sys.type ?? "";
      const typeLabel = (weaponTypeLabels[typeRaw] ?? typeRaw) || "—";
      const sizeRaw = sys.size ?? "";
      const sizeLabel = (weaponSizeLabels[sizeRaw] ?? sizeRaw) || "";
      const typeAndSize = [typeLabel, sizeLabel].filter(Boolean).join(", ") || typeLabel || "—";
      const isProjectile = typeRaw === "projectile" || sizeRaw === "thrown";
      const quantityStr = sys.quantity != null ? String(sys.quantity).trim() : "1";
      // Megjelenítés: item (sheet) értéke első – ha a fegyver lapján módosítunk, itt frissül
      const bonusStr = String(sys.bonus ?? slotData.bonus ?? "").trim() || "0";
      const damageStr = (sys.damage ?? slotData.damage ?? "").trim() || "";
      return {
        slotKey: slotKey ?? "",
        itemId,
        actorId: actor.id,
        name: item?.name ?? emptyLabel,
        img: item?.img ?? "",
        bonus: bonusStr,
        damage: damageStr,
        rangeStr: rangeStr || "—",
        typeAndSize,
        quantity: quantityStr,
        isProjectile,
        equipped,
        special: (sys.special ?? "").trim() || "—"
      };
    });

    const armorDocs = items.filter((i) => i.type === "Pancel");
    context.armorTable = armorDocs.map((item) => {
      const sys = item?.system ?? {};
      const equipped = item.system?.equipped === true;
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        protectionBonus: (sys.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (sys.speedPenalty ?? "").toString().trim() || "—",
        level: (sys.level ?? "").toString().trim() || "—",
        special: (sys.special ?? sys.other ?? "").toString().trim() || "—",
        equipped
      };
    });

    const microchips = actor?.system?.gear?.microchips ?? {};
    const MICROCHIP_SLOTS = ["slot1", "slot2", "slot3"];
    const microchipDocs = items.filter((i) => i.type === "MikroChip");
    context.microchipsTable = microchipDocs.map((item) => {
      const itemId = item.id;
      let slotKey = null;
      for (const sk of MICROCHIP_SLOTS) {
        if ((microchips[sk]?.itemId ?? "").trim() === itemId) {
          slotKey = sk;
          break;
        }
      }
      const abilityType = item?.system?.abilityType ?? "";
      const typeLabel = abilityType === "active" ? "Aktív" : abilityType === "passive" ? "Passzív" : abilityType || "—";
      const descRaw = (item?.system?.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 60 ? descRaw.slice(0, 57) + "…" : descRaw) : "—";
      return {
        itemId,
        actorId: actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        typeLabel,
        description,
        kp: Number(item?.system?.replaceCost) >= 0 ? Number(item.system.replaceCost) : 0,
        isActive: abilityType === "active",
        slotKey: slotKey ?? "",
        equipped: !!slotKey
      };
    });

    const targyDocs = items.filter((i) => i.type === "Targy");
    context.itemsTable = targyDocs.map((item) => {
      const sys = item?.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 60 ? descRaw.slice(0, 57) + "…" : descRaw) : "—";
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        quantity: sys.quantity != null ? String(sys.quantity).trim() : "1",
        description
      };
    });

    const egyebDocs = items.filter((i) => i.type === "Egyeb");
    context.egyebList = egyebDocs.map((item) => {
      const sys = item?.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 80 ? descRaw.slice(0, 77) + "…" : descRaw) : "";
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        description
      };
    });

    // "Húzz ide..." drop zone csak üres inventory esetén
    const hasEquipment =
      (context.weaponsTable?.length ?? 0) > 0 ||
      (context.armorTable?.length ?? 0) > 0 ||
      (context.microchipsTable?.length ?? 0) > 0 ||
      (context.itemsTable?.length ?? 0) > 0 ||
      (context.egyebList?.length ?? 0) > 0;
    context.showEquipmentDropZone = !hasEquipment;

    // Képességek listák (Képességek szekció alatt jelennek meg)
    const abilities = actor?.system?.abilities ?? {};
    const abilityItems = items
      .filter((i) => i.type === "Kepesseg" || i.type === "ability")
      .map((i) => ({
        id: i.id,
        name: i.name,
        img: i.img,
        description: i.system?.description ?? "",
        kp: Number(i.system?.kp ?? 0) || 0
      }));
    const abilityItemsById = new Map(abilityItems.map((a) => [a.id, a]));
    const emptySlot = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    context.abilityFajiSlot = emptySlot;
    context.abilityHatterSlot = emptySlot;
    const getAreaIds = (areaKey) => {
      const area = abilities[areaKey];
      if (!area) return [];
      if (Array.isArray(area?.items)) return area.items;
      if (Array.isArray(area)) return area;
      return [];
    };
    const mapIdsToAbilityList = (ids) =>
      (ids || [])
        .map((id) => {
          const item = abilityItemsById.get(id);
          return item ? { id: item.id, name: item.name, img: item.img, description: item.description, kp: item.kp } : null;
        })
        .filter(Boolean);
    context.abilityPassiveList = mapIdsToAbilityList(getAreaIds("passive"));
    context.abilityActiveList = mapIdsToAbilityList(getAreaIds("active"));

    return context;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    // Root legyen mindig a most renderelt tartalom (html), ne a régi this.form – különben a listenerek lecsatolt elemre kerülnek és nem működnek
    const root = html?.querySelector?.("form.votv.npc-sheet") ?? html ?? this.form ?? this.element;
    const $html = root ? $(root) : $([]);

    // Portré: kattintásra Foundry fájlkezelő (FilePicker) megnyitása
    $html.on("click", ".karakter-portrait-img", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      if (!this.actor) return;
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

    // Képesség: kattintás → képesség lap megnyitása
    $html.on("click", ".karakter-ability-open", (ev) => {
      ev.preventDefault();
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });

    // Felszerelés / inventory: névre vagy ikonra kattintva item lap megnyitása (mint karakterlapon)
    const openInventoryItem = (target) => {
      const itemId = target?.dataset?.itemId;
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    };
    $html.on("click", ".karakter-inventory-item-name", (ev) => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget);
    });
    $html.on("click", ".karakter-inventory-item-icon", (ev) => {
      ev.preventDefault();
      openInventoryItem(ev.currentTarget);
    });

    // Fegyver slot: Támadások szekcióban kattintás a slotra → fegyver lap megnyitása
    $html.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (ev) => {
      ev.preventDefault();
      const slotEl = ev.currentTarget?.closest?.(".karakter-weapon-slot");
      const itemId = (slotEl?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });

    // Támadás gomb: dobás lap megnyitása (találat dobás)
    $html.on("click", ".karakter-weapon-attack", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      const slot = (btn?.dataset?.slot ?? "").trim();
      if (!slot || !this.actor) return;
      const { openRollSheetForWeapon } = await import("./roll-sheet.mjs");
      openRollSheetForWeapon(this.actor, slot);
    });
    // Sebzés gomb: sebzés formula dobása chatbe
    $html.on("click", ".karakter-weapon-damage", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      let itemId = (btn?.dataset?.itemId ?? "").trim();
      if (!itemId && btn?.dataset?.slot) {
        const slotData = (this.actor?.system?.weapons ?? {})[btn.dataset.slot] ?? {};
        itemId = (slotData.itemId ?? "").trim();
      }
      if (!itemId || !this.actor) return;
      await this._rollWeaponDamage(itemId, (btn?.dataset?.slot ?? "").trim());
    });

    // Jártasságok: kattintás a jártasság nevére → dobás lap megnyitása (ugyanúgy mint karakterlapon)
    $html.on("click", ".karakter-skill-label", async (ev) => {
      ev.preventDefault();
      const el = ev.currentTarget;
      const skillKey = (el?.dataset?.skill ?? "").trim();
      const label = el?.textContent?.trim() || skillKey;
      if (!skillKey || !this.actor) return;
      const { openRollSheetForSkill } = await import("./roll-sheet.mjs");
      openRollSheetForSkill(this.actor, skillKey, label);
    });

    // Képesség: chat gomb → beküldés chatbe
    $html.on("click", ".karakter-ability-chat", async (ev) => {
      ev.preventDefault();
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      await this._postAbilityToChat(itemId);
    });

    // Egyéb info / Mikro-Chip: chat gomb → beküldés chatbe
    $html.on("click", ".karakter-item-chat", async (ev) => {
      ev.preventDefault();
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      if (item.type === "Kepesseg" || item.type === "ability") {
        await this._postAbilityToChat(itemId);
      } else if (item.type === "MikroChip" || item.type === "Egyeb") {
        await this._postItemToChat(itemId);
      }
    });

    // Képesség: törlés (Alt+klikk a ✕ gombon) – kiveszi a listából
    $html.on("click", ".karakter-ability-pill-remove", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const area = ev.currentTarget?.dataset?.area;
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!area || !itemId || !this.actor) return;
      const abilities = this.actor.system?.abilities ?? {};
      const current = Array.isArray(abilities[area]?.items) ? abilities[area].items.slice() : [];
      const next = current.filter((id) => id !== itemId);
      await this.actor.update({ [`system.abilities.${area}.items`]: next });
      if (typeof this.render === "function") this.render(true);
    });

    $html.on("click", ".karakter-ability-slot-clear", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const slot = ev.currentTarget?.dataset?.slot;
      if (!slot) return;
      await this.actor.update({
        [`system.abilities.${slot}.itemId`]: "",
        [`system.abilities.${slot}.name`]: ""
      });
      if (typeof this.render === "function") this.render(true);
    });

    // Felszerelés: fegyver törlése az inventory-ból – Alt+klikk
    $html.on("click", ".karakter-weapon-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const btn = ev.currentTarget;
      const itemId = (btn?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const actor = this.actor;
      const slotKey = (btn?.dataset?.slotKey ?? "").trim();
      const updates = {};
      if (slotKey) {
        updates[`system.weapons.${slotKey}.itemId`] = "";
        updates[`system.weapons.${slotKey}.name`] = "";
        updates[`system.weapons.${slotKey}.damage`] = "";
        updates[`system.weapons.${slotKey}.bonus`] = "";
      }
      if (Object.keys(updates).length) await actor.update(updates);
      await actor.deleteEmbeddedDocuments("Item", [itemId]);
      if (typeof this.render === "function") this.render(true);
    });

    // Felszerelés: páncél törlése – Alt+klikk
    $html.on("click", ".karakter-armor-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
      if (typeof this.render === "function") this.render(true);
    });

    // Felszerelés: mikro-chip törlése – Alt+klikk, slot kiürítése
    $html.on("click", ".karakter-microchip-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const microchips = this.actor.system?.gear?.microchips ?? {};
      const MICROCHIP_SLOTS = ["slot1", "slot2", "slot3"];
      const slot = MICROCHIP_SLOTS.find((sk) => (microchips[sk]?.itemId ?? "").trim() === itemId);
      if (slot) {
        await this.actor.update({
          [`system.gear.microchips.${slot}.itemId`]: "",
          [`system.gear.microchips.${slot}.name`]: "",
          [`system.gear.microchips.${slot}.active`]: false
        });
      }
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
      if (typeof this.render === "function") this.render(true);
    });

    // Tárgy / Egyéb törlése – Alt+klikk
    $html.on("click", ".karakter-item-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item || (item.type !== "Targy" && item.type !== "Egyeb")) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
      if (typeof this.render === "function") this.render(true);
    });

    // Itemek húzhatósága: sorok és képesség pill-ek Foundry formátummal (másik lapra / canvasra ejthető)
    const draggableSelector = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    root?.querySelectorAll?.(draggableSelector)?.forEach((el) => {
      if ((el.dataset?.itemId ?? "").trim()) el.draggable = true;
    });
    $html.on("dragstart", draggableSelector, (ev) => {
      const el = ev.currentTarget;
      const itemId = el?.dataset?.itemId?.trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      const uuid = item.uuid;
      if (ev.dataTransfer) {
        ev.dataTransfer.setData("text/plain", uuid);
        ev.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid }));
        ev.dataTransfer.effectAllowed = "copyMove";
      }
      if (typeof ev.dataTransfer?.setDragImage === "function" && el) {
        ev.dataTransfer.setDragImage(el, 0, 0);
      }
    });

    // Mentés kikattintáskor (blur), mint a karakterlapon (karakter-sheet.mjs)
    const sheet = this;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.actor.update(updateData).catch((err) => console.warn("VoidNpcSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
    sheet._votvNpcBlur = (ev) => {
      const target = ev.target;
      if (!target || !target.form) return;
      const tag = target.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return;
      const form = target.form;
      if (!isOurForm(form)) return;
      const next = ev.relatedTarget;
      if (next && (form.contains(next) || (sheet.id && next.closest?.(`#${CSS.escape(sheet.id)}`)))) return;
      doSubmit(form);
    };
    document.body.addEventListener("blur", sheet._votvNpcBlur, true);

    // Ha az aktor egy itemje (pl. fegyver) frissül a saját lapján, az NPC lap táblázata is frissüljön
    if (!sheet._votvNpcItemHookRegistered) {
      sheet._votvNpcItemUpdateHook = (item, _data, _options) => {
        if (sheet.actor && item?.parent?.id === sheet.actor.id) sheet.render(true);
      };
      Hooks.on("updateItem", sheet._votvNpcItemUpdateHook);
      sheet._votvNpcItemHookRegistered = true;
    }
  }

  _tearDown(options) {
    document.body.removeEventListener("blur", this._votvNpcBlur, true);
    if (this._votvNpcItemUpdateHook) {
      Hooks.off("updateItem", this._votvNpcItemUpdateHook);
      this._votvNpcItemUpdateHook = null;
      this._votvNpcItemHookRegistered = false;
    }
    // Bezáráskor is mentsük a formot (blur nem mindig fut le, pl. X-re kattintáskor)
    const form = this.form ?? this.element?.querySelector?.("form.votv.npc-sheet");
    if (form && this.actor) {
      const updateData = this._getFormDataForUpdate(form);
      if (Object.keys(updateData).length > 0) {
        this.actor.update(updateData).catch((err) => console.warn("VoidNpcSheet save on close failed", err));
      }
    }
    return super._tearDown?.(options);
  }

  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(itemId, slotKey = "") {
    const actor = this.actor;
    if (!actor) return;
    const item = actor.items.get?.(itemId) ?? actor.items.contents?.find?.(i => i.id === itemId);
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
      speaker: ChatMessage.getSpeaker({ actor, alias: actor?.name ?? undefined }),
      flavor: `${item.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
  }

  async _onDropItem(event, data) {
    if (!this.actor) return super._onDropItem?.(event, data);

    const getUuid = (d) => {
      if (!d) return null;
      const u = d.uuid ?? d.documentUuid ?? d.data?.uuid ?? (typeof d === "string" ? d : null);
      if (u) return u;
      if (typeof d === "object") {
        for (const v of Object.values(d)) {
          if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) return v;
        }
      }
      return null;
    };

    const uuid = getUuid(data);
    if (!uuid) return super._onDropItem?.(event, data);

    const doc = await fromUuid(uuid);
    if (!doc || doc.documentName !== "Item") return super._onDropItem?.(event, data);

    const actor = this.actor;

    // Képesség: minden (aktív/passzív/stb.) a Képességek szekció alá kerül
    if (doc.type === "Kepesseg" || doc.type === "ability") {
      let itemId = doc.id;
      if (doc.parent?.id !== actor.id) {
        const itemData = foundry.utils.mergeObject(doc.toObject(), { type: "Kepesseg" });
        const created = await actor.createEmbeddedDocuments("Item", [itemData]);
        itemId = created[0]?.id ?? itemId;
      }
      const kind = (doc.system?.kind ?? "passive").toString();
      const abilities = actor.system?.abilities ?? {};
      const area = kind === "active" ? "active" : "passive";
      const current = Array.isArray(abilities[area]?.items) ? abilities[area].items.slice() : Array.isArray(abilities[area]) ? abilities[area].slice() : [];
      if (!current.includes(itemId)) current.push(itemId);
      await actor.update({ [`system.abilities.${area}.items`]: current });
      if (typeof this.render === "function") this.render(true);
      return;
    }

    // Fegyver / Páncél / MikroChip / Tárgy / Egyéb: másolás az NPC-re, automatikusan equipped
    if (doc.parent?.id === actor.id) return;
    const itemData = doc.toObject();
    if (doc.type === "Fegyver") {
      foundry.utils.mergeObject(itemData, { system: { ...(itemData.system ?? {}), equipped: true } }, { inplace: true });
    }
    if (doc.type === "Pancel") {
      foundry.utils.mergeObject(itemData, { system: { ...(itemData.system ?? {}), equipped: true } }, { inplace: true });
    }
    const created = await actor.createEmbeddedDocuments("Item", [itemData]);
    const newItemId = created[0]?.id;

    // Fegyver: első szabad weapon slotba (slot1..slot10), hogy megjelenjen a Támadásokban és equipped legyen
    if (doc.type === "Fegyver" && newItemId) {
      const weapons = actor.system?.weapons ?? {};
      const ALL_WEAPON_SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"];
      const slotOrderRaw = (weapons.slotOrder ?? "").trim();
      const usedSlots = slotOrderRaw ? slotOrderRaw.split(/\s*,\s*/).filter((s) => ALL_WEAPON_SLOTS.includes(s)) : [];
      let freeSlot = ALL_WEAPON_SLOTS.find((sk) => !(weapons[sk]?.itemId ?? "").trim());
      if (!freeSlot) {
        freeSlot = ALL_WEAPON_SLOTS.find((sk) => !usedSlots.includes(sk)) ?? "slot1";
      }
      const newOrder = usedSlots.includes(freeSlot) ? usedSlots : [...usedSlots, freeSlot].filter((s) => ALL_WEAPON_SLOTS.includes(s));
      await actor.update({
        "system.weapons.slotOrder": newOrder.join(","),
        [`system.weapons.${freeSlot}.itemId`]: newItemId,
        [`system.weapons.${freeSlot}.name`]: doc.name ?? "",
        [`system.weapons.${freeSlot}.damage`]: doc.system?.damage ?? "",
        [`system.weapons.${freeSlot}.bonus`]: doc.system?.bonus ?? ""
      });
    }

    // MikroChip: első szabad mikro-chip slotba (slot1, slot2, slot3)
    if (doc.type === "MikroChip" && newItemId) {
      const microchips = actor.system?.gear?.microchips ?? {};
      const chipSlots = ["slot1", "slot2", "slot3"];
      const freeSlot = chipSlots.find((sk) => !(microchips[sk]?.itemId ?? "").trim());
      if (freeSlot) {
        await actor.update({
          [`system.gear.microchips.${freeSlot}.itemId`]: newItemId,
          [`system.gear.microchips.${freeSlot}.name`]: doc.name ?? ""
        });
      }
    }

    if (typeof this.render === "function") this.render(true);
    return;
  }

  async _postAbilityToChat(itemId) {
    const item = this.actor?.items?.get(itemId);
    if (!item || (item.type !== "Kepesseg" && item.type !== "ability")) return;
    const kind = item.system?.kind ?? "passive";
    const kp = Number(item.system?.kp ?? 0) || 0;
    const description = (item.system?.description ?? "").trim();
    const kindLabel =
      kind === "active" ? "Aktív" : kind === "species" ? "Faji" : kind === "background" ? "Háttér" : "Passzív";
    const kpLine = kp > 0 ? `<p><strong>KP:</strong> ${kp}</p>` : "";
    const descLine = description ? `<p>${description}</p>` : "";
    const content = `
      <h2>${item.name}</h2>
      <p><strong>Típus:</strong> ${kindLabel}</p>
      ${kpLine}
      ${descLine}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: this.actor?.name ?? undefined }),
      content,
      flags: { "vacuum-of-the-void": { abilityId: item.id } }
    });
  }

  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(itemId) {
    const item = this.actor?.items?.get(itemId);
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
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: this.actor?.name ?? undefined }),
      content,
      flags: { "vacuum-of-the-void": { itemId: item.id, itemType: item.type } }
    });
  }

  _getFormDataForUpdate(form) {
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") value = el.value === "" ? 0 : Number(el.value);
      else value = el.value ?? "";
      if (value === undefined) continue;
      foundry.utils.setProperty(updateData, el.name, value);
    }
    // Actor.name nem lehet undefined – ha üres/undefined, megtartjuk a jelenlegi nevet
    if (Object.prototype.hasOwnProperty.call(updateData, "name")) {
      const n = updateData.name;
      if (n === undefined || (typeof n === "string" && n.trim() === "")) {
        updateData.name = this.actor?.name ?? "Unnamed";
      }
    }
    return updateData;
  }
}
