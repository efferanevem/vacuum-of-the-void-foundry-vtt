/** Páncél szint → megjelenített szöveg (Raktár táblázat). */
function _armorLevelLabel(raw) {
  if (!raw) return "Alap";
  if (raw === "1") return "1. szint";
  if (raw === "2") return "2. szint";
  if (raw === "3") return "3. szint";
  return raw === "Alap" ? "Alap" : raw;
}

/** Jármű (Vehicle) actor sheet – design és szinkron mint a karakterlap, szélesség 1000. */
export class VoidJarmuSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(
    super.PARTS ?? {},
    {
      content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
    },
    { inplace: false }
  );

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
      template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
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

  _getScrollContainers(root) {
    if (!root) return { form: null, windowContent: null };
    const form = root.querySelector?.("form.votv.jarmu-sheet") ?? root.querySelector?.("form.votv") ?? null;
    const windowContent = root.querySelector?.(".votv-scroll") ?? root.querySelector?.(".window-content") ?? null;
    return { form, windowContent };
  }

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

  _applyScrollState(root, state) {
    if (!root || !state) return;
    const { form, windowContent } = this._getScrollContainers(root);
    if (typeof state.formScrollTop === "number" && form) form.scrollTop = state.formScrollTop;
    if (typeof state.windowScrollTop === "number" && windowContent) windowContent.scrollTop = state.windowScrollTop;
  }

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
      this._writeTotalDefense();
    });
    setTimeout(() => this._writeTotalDefense(), 150);
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

  _writeTotalDefense(scope = null) {
    const root = scope ?? this.form ?? this.element;
    const sel = (s) => root?.querySelector?.(s) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${s}`) : null);
    const totalSpan = sel(".jarmu-total-defense-effective");
    const inpDef = sel('input[name="system.combat.defense"]');
    const inpGiven = sel('input[name="system.combat.givenProtection"]');
    if (!totalSpan) return;
    const a = Number(inpDef?.value) || 0;
    const b = Number(inpGiven?.value) || 0;
    totalSpan.textContent = String(a + b);
  }

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    context.actor = context.actor ?? this.actor;
    context.system = context.system ?? this.actor.system;
    const combat = context.system?.combat ?? {};
    context.totalDefense =
      (Number(combat.defense) || 0) +
      (Number(combat.givenProtection) || 0);

    // Raktár: ugyanolyan táblázatok mint a karakter Felszerelés (Fegyver, Páncél, Mikro-Chip, Tárgy)
    const weaponTypeLabels = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" };
    const weaponSizeLabels = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    const emptyLabel = "— Nincs fegyver —";
    const DEFAULT_BAG_ICON = "icons/svg/item-bag.svg";
    const cleanImg = (rawImg) => (rawImg === DEFAULT_BAG_ICON ? "" : rawImg);
    const weaponDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Fegyver");
    context.weaponsTable = weaponDocs.map((item) => {
      const sys = item?.system ?? {};
      const typeRaw = sys.type ?? "";
      const typeLabel = (weaponTypeLabels[typeRaw] ?? typeRaw) || "—";
      const sizeRaw = sys.size ?? "";
      const sizeLabel = (weaponSizeLabels[sizeRaw] ?? sizeRaw) || "";
      const typeAndSize = [typeLabel, sizeLabel].filter(Boolean).join(", ") || typeLabel || "—";
      const isProjectile = (typeRaw === "projectile") || (sizeRaw === "thrown");
      const quantityStr = sys.quantity != null ? String(sys.quantity).trim() : "1";
      const rangeStr = (typeof sys.range === "string" ? (sys.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? emptyLabel,
        img: cleanImg(item?.img ?? ""),
        bonus: String(sys.bonus ?? "").trim() || "0",
        damage: sys.damage ?? "",
        rangeStr: rangeStr || "—",
        typeLabel,
        typeAndSize,
        quantity: quantityStr,
        quantityDisplay: isProjectile ? quantityStr : "—",
        isProjectile,
        equipped: false,
        special: (sys.special ?? "").trim() || "—"
      };
    });
    const armorDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "Pancel");
    context.armorTable = armorDocs.map((item) => {
      const sys = item?.system ?? {};
      const equipped = !!(item.system?.equipped);
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: cleanImg(item?.img ?? ""),
        protectionBonus: (sys.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (sys.speedPenalty ?? "").toString().trim() || "—",
        level: _armorLevelLabel((sys.level ?? "").toString().trim()),
        special: (sys.special ?? sys.other ?? "").toString().trim() || "—",
        equipped
      };
    });
    const microchipDocs = (this.actor.items?.contents ?? []).filter(i => i.type === "MikroChip");
    context.microchipsTable = microchipDocs.map((item) => {
      const abilityType = item?.system?.abilityType ?? "";
      const typeLabel = abilityType === "active" ? "Aktív" : abilityType === "passive" ? "Passzív" : (abilityType || "—");
      const isActive = abilityType === "active";
      const kp = Number(item?.system?.replaceCost) >= 0 ? Number(item.system.replaceCost) : 0;
      const descRaw = (item?.system?.description ?? "").trim();
      const description = descRaw || "—";
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: cleanImg(item?.img ?? ""),
        typeLabel,
        description,
        kp,
        isActive,
        slotKey: "",
        equipped: false
      };
    });
    // Felszerelés: Tárgyak + Csomagok táblázat (ugyanaz a flatten logika, mint a karakterlapon).
    const allItems = this.actor.items?.contents ?? [];
    const packageDocs = allItems.filter((i) => i.type === "Csomag");
    const targyDocs = allItems.filter((i) => i.type === "Targy");

    const packageEntries = [];
    const childIds = new Set();

    // Csomagok: először maga a csomag, utána a tartalma külön sorokban, behúzva.
    for (const item of packageDocs) {
      const sys = item?.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw || "—";
      const refs = Array.isArray(sys.contents) ? sys.contents : [];

      packageEntries.push({
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: cleanImg(item?.img ?? ""),
        quantity: "—",
        description,
        isPackage: true,
        isPackageChild: false
      });

      if (!refs.length) continue;

      const docs = await Promise.all(
        refs.map(async (ref) => {
          if (!ref) return null;
          try {
            const doc = await fromUuid(ref);
            if (doc?.documentName === "Item") return doc;
          } catch {
            const fallback = game.items?.get(ref);
            if (fallback) return fallback;
          }
          return null;
        })
      );

      for (const doc of docs) {
        if (!doc) continue;
        childIds.add(doc.id);
        const dSys = doc.system ?? {};
        const dDescRaw = (dSys.description ?? "").toString().trim();
        const dDescription = dDescRaw || "—";
        const rawQty = (dSys.quantity ?? "").toString().trim();
        const quantity = rawQty || "1";
        const rawImg = doc.img ?? "";
        const img = cleanImg(rawImg);

        packageEntries.push({
          itemId: doc.id,
          actorId: this.actor.id,
          name: doc.name ?? "—",
          img,
          quantity,
          description: dDescription,
          isPackage: false,
          isPackageChild: true,
          parentPackageId: item.id,
          parentPackageName: item.name ?? "Csomag",
          innerType: doc.type
        });
      }
    }

    // Sima tárgyak, amelyek nem szerepelnek egyetlen csomagban sem.
    const targyEntries = targyDocs
      .filter((item) => !childIds.has(item.id))
      .map((item) => {
        const sys = item?.system ?? {};
        const descRaw = (sys.description ?? "").trim();
        const description = descRaw || "—";
        const quantity = sys.quantity != null ? String(sys.quantity).trim() : "1";
        const img = cleanImg(item.img ?? "");
        return {
          itemId: item.id,
          actorId: this.actor.id,
          name: item?.name ?? "—",
          img,
          quantity,
          description,
          isPackage: false,
          isPackageChild: false
        };
      });

    context.itemsTable = [...packageEntries, ...targyEntries];
    const unitItemType = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg";
    const unitDocs = (this.actor.items?.contents ?? [])
      .filter((i) => i.type === unitItemType)
      .sort((a, b) => {
        const sa = typeof a.sort === "number" ? a.sort : 0;
        const sb = typeof b.sort === "number" ? b.sort : 0;
        return sa - sb;
      });
    const unitsTable = [];
    let unitSpeedSum = 0;
    let unitRangeSum = 0;
    let totalStorageUsed = 0;
    const vehicleStorageMax = Number(this.actor.system?.vehicle?.storage ?? 0) || 0;

    for (const item of unitDocs) {
      const sys = item?.system ?? {};
      const level = Number(sys.level ?? 0) || 0;

      // Raktár kapacitás: egység/helyiség storage mezőjének összege
      const unitStorageRaw = (sys.storage ?? "").toString().trim().replace(",", ".");
      const unitStorageNum = Number(unitStorageRaw);
      if (Number.isFinite(unitStorageNum)) totalStorageUsed += unitStorageNum;

      const abilities = sys.abilities ?? {};
      const abilityRefs = Array.isArray(abilities.items) ? abilities.items : [];
      const abilityDocs = await Promise.all(
        abilityRefs.map(async (ref) => {
          if (!ref) return null;
          try {
            const doc = await fromUuid(ref);
            if (doc && (doc.type === "Kepesseg" || doc.type === "ability")) return doc;
          } catch {
            const itemDoc = game.items?.get(ref);
            if (itemDoc && (itemDoc.type === "Kepesseg" || itemDoc.type === "ability")) return itemDoc;
          }
          return null;
        })
      );
      const abilityItems = abilityDocs
        .map((doc, index) => ({ doc, ref: abilityRefs[index] }))
        .filter((pair) => !!pair.doc && !!pair.ref)
        .map(({ doc, ref }) => {
          const kind = (doc.system?.kind ?? "passive").toString();
          const kp = Number(doc.system?.kp ?? 0) || 0;
          const isSpecies = kind === "species";
          return {
            id: doc.id,
            ref,
            name: doc.name,
            img: doc.img,
            kind,
            kpDisplay: isSpecies ? 0 : kp
          };
        });

      if (unitItemType === "Helyiseg") {
        const hit = (sys.hit ?? "").toString().trim();
        unitsTable.push({
          itemId: item.id,
          actorId: this.actor.id,
          name: item?.name ?? "—",
          img: cleanImg(item?.img ?? ""),
          level,
          hit,
          abilities: abilityItems,
          isHelyiseg: true
        });
        continue;
      }

      const health = sys.health ?? {};
      const hpMax = Number(health.max ?? 0) || 0;
      const hpValue = Number(health.value ?? 0) || 0;
      let hpStatus;
      if (hpMax <= 0) {
        hpStatus = undefined;
      } else if (hpValue <= 0) {
        hpStatus = 0;
      } else {
        const ratio = hpValue / hpMax;
        if (ratio > 2 / 3) hpStatus = 3;
        else if (ratio > 1 / 3) hpStatus = 2;
        else hpStatus = 1;
      }
      const hit = (sys.hit ?? "").toString().trim();
      const unitSpeedRaw = (sys.speed ?? "").toString().trim().replace(",", ".");
      const unitSpeedNum = Number(unitSpeedRaw);
      if (Number.isFinite(unitSpeedNum)) unitSpeedSum += unitSpeedNum;
      const unitRangeRaw = (sys.range ?? "").toString().trim().replace(",", ".");
      const unitRangeNum = Number(unitRangeRaw);
      if (Number.isFinite(unitRangeNum)) unitRangeSum += unitRangeNum;
      const damage = (sys.damage ?? "").toString().trim();

      unitsTable.push({
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: cleanImg(item?.img ?? ""),
        level,
        hpMax,
        hpValue,
        hpStatus,
        hit,
        damage,
        abilities: abilityItems,
        isHelyiseg: false
      });
    }
    context.unitsTable = unitsTable;
    context.totalStorageUsed = totalStorageUsed;
    context.vehicleStorageMax = vehicleStorageMax;
    context.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység";
    context.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;

    // Jármű/Bázis méret automatikus meghatározása az egységek/helyiségek száma alapján.
    const unitCount = unitDocs.length;
    let sizeLabel = "Kicsi";
    let sizeSpeedPenalty = 0;
    let sizeDefensePenalty = 0;
    if (unitCount >= 11) {
      sizeLabel = "Nagy";
      sizeSpeedPenalty = -4;
      sizeDefensePenalty = -6;
    } else if (unitCount >= 6) {
      sizeLabel = "Közepes";
      sizeSpeedPenalty = -2;
      sizeDefensePenalty = -3;
    } else {
      sizeLabel = "Kicsi";
      sizeSpeedPenalty = 0;
      sizeDefensePenalty = 0;
    }
    context.sizeForSelect = sizeLabel;
    context.unitCount = unitCount;
    context.sizeSpeedPenalty = sizeSpeedPenalty;
    context.sizeDefensePenalty = sizeDefensePenalty;

    // Jármű sebesség és eszközök hatótávja: a járműegységek értékei + méret módosító.
    const totalSpeed = unitSpeedSum + sizeSpeedPenalty;
    const totalRange = unitRangeSum;
    context.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: totalSpeed },
        vehicle: { toolsRange: totalRange, storage: vehicleStorageMax },
        identity: { size: sizeLabel }
      },
      { inplace: false }
    );

    const hasEquipment =
      (context.weaponsTable?.length ?? 0) > 0 ||
      (context.armorTable?.length ?? 0) > 0 ||
      (context.microchipsTable?.length ?? 0) > 0 ||
      (context.itemsTable?.length ?? 0) > 0;
    context.showEquipmentDropZone = !hasEquipment;

    // Egyéb Információ: notes + Egyeb típusú itemek (mint a karakter)
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

    return context;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    // Root = renderelt tartalom, különben a listenerek lecsatolt elemre kerülnek (pl. tab váltás után)
    const root = html?.querySelector?.("form.votv.jarmu-sheet") ?? html ?? this.form ?? this.element;
    const $html = $(root);

    this._writeTotalDefense(html);
    this._writeTotalDefense(root);
    requestAnimationFrame(() => this._writeTotalDefense());
    setTimeout(() => this._writeTotalDefense(), 100);

    $html.on("input change", "input[name=\"system.combat.defense\"], input[name=\"system.combat.givenProtection\"]", () => {
      this._writeTotalDefense();
    });

    if (!this.isEditable) return;

    $html.on("click", ".jarmu-portrait-img", (ev) => {
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

    // Raktár: kattintás név/ikon → item lap
    $html.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (ev) => {
      ev.preventDefault();
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });
    // Raktár: Alt+klikk törlés
    $html.on("click", ".jarmu-item-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });
    // Raktár: mennyiség (Tárgy)
    $html.on("change", ".jarmu-item-quantity-input", async (ev) => {
      const input = ev.currentTarget;
      const itemId = input?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || (item.type !== "Targy" && item.type !== "Fegyver")) return;
      await item.update({ "system.quantity": (input.value ?? "").trim() });
    });
    // Raktár: páncél felszerelt
    $html.on("change", ".jarmu-armor-equipped-checkbox", async (ev) => {
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Pancel") return;
      await item.update({ "system.equipped": ev.currentTarget.checked });
    });
    // Egyéb: item lap / törlés (ugyanaz a class mint karakteren: karakter-inventory-item-name, karakter-item-delete)
    $html.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (ev) => {
      ev.preventDefault();
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      this.actor.items.get(itemId)?.sheet?.render(true);
    });
    $html.on("click", ".jarmu-egyeb-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });
    $html.on("click", ".karakter-item-chat", async (ev) => {
      ev.preventDefault();
      const itemId = (ev.currentTarget?.dataset?.itemId ?? ev.currentTarget?.getAttribute?.("data-item-id") ?? "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item || (item.type !== "MikroChip" && item.type !== "Egyeb")) return;
      await this._postItemToChat(itemId);
    });

    // Járműegység sebzés gomb: az egység sebzés formuláját dobja.
    $html.on("click", ".jarmu-unit-damage-button", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const btn = ev.currentTarget;
      const itemId = (btn?.dataset?.itemId ?? "").trim();
      if (!itemId) return;
      await this._rollUnitDamage(itemId);
    });

    // Járműegységek: sorrend változtatás drag & drop-pal (az egész sor húzható).
    const sheet = this;
    this._draggingUnitId = null;

    $html.on("dragstart", ".jarmu-unit-row", (ev) => {
      const row = ev.currentTarget;
      const itemId = row?.dataset?.itemId;
      if (!itemId) return;
      sheet._draggingUnitId = itemId;
      const dt = ev.originalEvent?.dataTransfer;
      if (dt) {
        dt.setData("text/plain", itemId);
        dt.effectAllowed = "move";
        if (typeof dt.setDragImage === "function") {
          dt.setDragImage(row, 0, 0);
        }
      }
    });

    $html.on("dragover", ".jarmu-unit-row", (ev) => {
      const targetId = ev.currentTarget?.dataset?.itemId;
      const sourceId = sheet._draggingUnitId;
      if (!sourceId || !targetId || sourceId === targetId) return;
      ev.preventDefault();
      const dt = ev.originalEvent?.dataTransfer;
      if (dt) dt.dropEffect = "move";
      ev.currentTarget?.classList.add("karakter-actions-row-drag-over");
    });

    $html.on("dragleave", ".jarmu-unit-row", (ev) => {
      ev.currentTarget?.classList.remove("karakter-actions-row-drag-over");
    });

    $html.on("drop", ".jarmu-unit-row", async (ev) => {
      ev.preventDefault();
      ev.currentTarget?.classList.remove("karakter-actions-row-drag-over");
      const targetId = ev.currentTarget?.dataset?.itemId;
      let sourceId = sheet._draggingUnitId;
      const dt = ev.originalEvent?.dataTransfer;
      if (!sourceId && dt) {
        sourceId = dt.getData("text/plain");
      }
      sheet._draggingUnitId = null;
      if (!sourceId || !targetId || sourceId === targetId) return;

      const unitItemType = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg";
      const items = this.actor.items.contents
        .filter((i) => i.type === unitItemType)
        .sort((a, b) => {
          const sa = typeof a.sort === "number" ? a.sort : 0;
          const sb = typeof b.sort === "number" ? b.sort : 0;
          return sa - sb;
        });
      const ids = items.map((i) => i.id);
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
    });

    // Járműegység képességek: név / ikon → képesség lap megnyitása
    $html.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.closest?.(".jarmu-unit-ability-pill")?.dataset?.abilityRef;
      const abilityId = ev.currentTarget?.closest?.(".jarmu-unit-ability-pill")?.dataset?.abilityId;
      let doc = null;
      if (ref) {
        try {
          doc = await fromUuid(ref);
        } catch {
          doc = null;
        }
      }
      if (!doc && abilityId) {
        doc = game.items?.get(abilityId) ?? null;
      }
      doc?.sheet?.render(true);
    });

    // Járműegység képességek: chat bubble → képesség chat-be
    $html.on("click", ".jarmu-unit-ability-chat", async (ev) => {
      ev.preventDefault();
      const pill = ev.currentTarget?.closest?.(".jarmu-unit-ability-pill");
      const ref = pill?.dataset?.abilityRef;
      const abilityId = pill?.dataset?.abilityId;
      const key = ref || abilityId;
      if (!key) return;
      await this._postUnitAbilityToChat(key);
    });

    const doSubmit = (form) => {
      if (!form) return;
      const updateData = this._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      this.actor.update(updateData).catch((err) => console.warn("VoidJarmuSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (this.element?.contains?.(form) || (this.id && form.closest?.(`#${CSS.escape(this.id)}`)));
    this._votvJarmuBlur = (ev) => {
      const target = ev.target;
      if (!target || !target.form) return;
      const tag = target.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return;
      const form = target.form;
      if (!isOurForm(form)) return;
      const next = ev.relatedTarget;
      if (next && (form.contains(next) || (this.id && next.closest?.(`#${CSS.escape(this.id)}`)))) return;
      if (game.votv) game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() };
      doSubmit(form);
    };
    document.body.addEventListener("blur", this._votvJarmuBlur, true);

    // Járműegység: aktuális ÉP mező – csak value írható, max érték az itemből jön.
    // Változtatáskor azonnal frissítjük a sor HP-státuszát (színezés), hogy ne kelljen újranyitni a lapot.
    $html.on("change", ".jarmu-unit-hp-current", async (ev) => {
      const input = ev.currentTarget;
      const itemId = input?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Jarmuegyseg") return;
      const raw = (input.value ?? "").trim();
      const value = raw === "" ? 0 : Number(raw);

      // DOM-beli HP státusz frissítése (ugyanaz a logika, mint a _prepareContext-ben)
      const row = input.closest?.(".jarmu-unit-row");
      if (row) {
        const maxEl = row.querySelector?.(".jarmu-unit-hp-max");
        const maxRaw = maxEl?.textContent ?? "";
        const hpMax = Number((maxRaw ?? "").trim()) || 0;
        let hpStatus;
        if (hpMax <= 0) {
          hpStatus = undefined;
        } else if (!Number.isFinite(value) || value <= 0) {
          hpStatus = 0;
        } else {
          const ratio = value / hpMax;
          if (ratio > 2 / 3) hpStatus = 3;
          else if (ratio > 1 / 3) hpStatus = 2;
          else hpStatus = 1;
        }
        if (hpStatus === undefined) row.removeAttribute("data-hp-status");
        else row.dataset.hpStatus = String(hpStatus);
      }

      await item.update({ "system.health.value": Number.isFinite(value) ? value : 0 });
    });

    // Járműegység / Helyiség: Cépont szám – szabad szöveg
    $html.on("change", ".jarmu-unit-hit-input", async (ev) => {
      const input = ev.currentTarget;
      const itemId = input?.dataset?.itemId;
      if (!itemId) return;
      const item = this.actor.items.get(itemId);
      if (!item || (item.type !== "Jarmuegyseg" && item.type !== "Helyiseg")) return;
      const value = (input.value ?? "").trim();
      await item.update({ "system.hit": value });
    });
  }

  _tearDown(options) {
    document.body.removeEventListener("blur", this._votvJarmuBlur, true);
    return super._tearDown?.(options);
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
      foundry.utils.setProperty(updateData, el.name, value);
    }
    return updateData;
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

  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(itemId) {
    const actor = this.actor;
    if (!actor) return;
    const item = actor.items.get?.(itemId) ?? actor.items.contents?.find?.((i) => i.id === itemId);
    if (!item || (item.type !== "Jarmuegyseg" && item.type !== "Helyiseg")) return;
    const damageFormula = (item.system?.damage ?? "").trim();
    if (!damageFormula) {
      ui.notifications?.warn?.(
        game.i18n?.localize?.("votv.weapon.no-damage") ?? "A járműegységnek nincs sebzés formulája."
      );
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

  async _postUnitAbilityToChat(ref) {
    if (!ref) return;
    let item = null;
    try {
      item = await fromUuid(ref);
    } catch {
      item = game.items?.get(ref) ?? null;
    }
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
        : kind === "module"
        ? "Modul"
        : "Passzív";
    let kpLine = "";
    if (kind === "active" && kp > 0) {
      kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
    } else if (kind === "module" && kp > 0) {
      kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
    }
    const descLine = description
      ? `<p class="votv-ability-description">${description}</p>`
      : "";
    const content = `
      <h2>${item.name}</h2>
      <p><strong>Típus:</strong> ${kindLabel}</p>
      ${kpLine}
      ${descLine}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content,
      flags: { "vacuum-of-the-void": { abilityId: item.id } }
    });
  }

  async _onDropItem(event, data) {
    let uuid =
      data?.uuid ??
      data?.documentUuid ??
      data?.data?.uuid ??
      (typeof data === "string" ? data : null);
    if (!uuid && typeof data === "object") {
      for (const v of Object.values(data)) {
        if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) {
          uuid = v;
          break;
        }
      }
    }
    if (!uuid) return super._onDropItem(event, data);
    const doc = await fromUuid(uuid);
    if (!doc || doc.documentName !== "Item") return super._onDropItem(event, data);
    const actor = this.actor;
    const allowed =
      this.actor.type === "Bazis"
        ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"]
        : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"];
    if (!allowed.includes(doc.type)) return super._onDropItem(event, data);
    if (doc.parent?.id === actor.id) return;
    const itemData = foundry.utils.mergeObject(doc.toObject(), {
      system: { ...(doc.toObject().system ?? {}), equipped: doc.type === "Pancel" ? false : undefined }
    });
    await actor.createEmbeddedDocuments("Item", [itemData]);
  }
}
