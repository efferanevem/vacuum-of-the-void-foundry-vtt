export class VoidVallalkozasSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(
    super.PARTS ?? {},
    {
      content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
    },
    { inplace: false }
  );

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
      template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
      width: 800,
      minWidth: 700,
      height: 600,
      form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: true }),
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

  _getScrollContainers(root) {
    if (!root) return { form: null, windowContent: null };
    const form = root.querySelector?.("form.votv.vallalkozas-sheet") ?? root.querySelector?.("form.votv") ?? null;
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
    const rootBefore = this.element;
    const formBefore = this.form ?? this.element;
    let saved = { scrollState: {}, focus: null };
    if (rootBefore) {
      saved.scrollState = this._saveScrollState(rootBefore);
      const activeEl = document.activeElement;
      const isOurs = formBefore?.contains?.(activeEl);
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
    if (rootAfter) this._applyScrollState(rootAfter, saved.scrollState);
    if (saved.focus && formAfter) {
      let el = null;
      if (saved.focus.name) el = formAfter.querySelector?.(`[name="${CSS.escape(saved.focus.name)}"]`) ?? null;
      if (!el && saved.focus.id) el = formAfter.querySelector?.(`#${CSS.escape(saved.focus.id)}`) ?? null;
      if (el && typeof el.focus === "function") {
        el.focus();
        if ("setSelectionRange" in el) {
          try {
            el.setSelectionRange(saved.focus.selectionStart ?? 0, saved.focus.selectionEnd ?? 0);
          } catch {
            // ignore
          }
        }
      }
    }
    return out;
  }

  async _prepareContext(options) {
    const context = (await super._prepareContext(options)) ?? {};
    const actor = this.actor;
    context.actor = actor;
    const system = foundry.utils.deepClone(actor.system ?? {});
    context.system = system;

    // Raktár: ugyanaz a logika, mint a Jármű/Bázis lapokon (kapacitás nélkül).
    const weaponTypeLabels = {
      kinetic: "Kinetikus",
      projectile: "Lövedékes",
      blade: "Pengés",
      explosive: "Robbanó",
      other: "Egyéb"
    };
    const weaponSizeLabels = {
      light: "Könnyű",
      medium: "Közepes",
      heavy: "Nehéz",
      thrown: "Dobható"
    };
    const emptyWeaponLabel = "— Nincs fegyver —";
    const DEFAULT_BAG_ICON = "icons/svg/item-bag.svg";
    const cleanImg = (rawImg) => (rawImg === DEFAULT_BAG_ICON ? "" : rawImg);

    const itemDocs = actor.items?.contents ?? [];

    // Fegyverek táblázat
    const weaponDocs = itemDocs.filter((i) => i.type === "Fegyver");
    context.weaponsTable = weaponDocs.map((item) => {
      const sys = item.system ?? {};
      const typeRaw = sys.type ?? "";
      const typeLabel = (weaponTypeLabels[typeRaw] ?? typeRaw) || "—";
      const sizeRaw = sys.size ?? "";
      const sizeLabel = (weaponSizeLabels[sizeRaw] ?? sizeRaw) || "";
      const typeAndSize = [typeLabel, sizeLabel].filter(Boolean).join(", ") || typeLabel || "—";
      const isProjectile = typeRaw === "projectile" || sizeRaw === "thrown";
      const quantityStr = sys.quantity != null ? String(sys.quantity).trim() : "1";
      const rangeStr = (typeof sys.range === "string" ? (sys.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: item.id,
        actorId: actor.id,
        name: item.name ?? emptyWeaponLabel,
        img: cleanImg(item.img ?? ""),
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

    // Páncélok táblázat
    const armorDocs = itemDocs.filter((i) => i.type === "Pancel");
    context.armorTable = armorDocs.map((item) => {
      const sys = item.system ?? {};
      const equipped = !!item.system?.equipped;
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item.name ?? "—",
        img: cleanImg(item.img ?? ""),
        protectionBonus: (sys.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (sys.speedPenalty ?? "").toString().trim() || "—",
        level: (sys.level ?? "").toString().trim() || "—",
        special: (sys.special ?? sys.other ?? "").toString().trim() || "—",
        equipped
      };
    });

    // Mikro-Chipek táblázat
    const microchipDocs = itemDocs.filter((i) => i.type === "MikroChip");
    context.microchipsTable = microchipDocs.map((item) => {
      const abilityType = item.system?.abilityType ?? "";
      const typeLabel =
        abilityType === "active"
          ? "Aktív"
          : abilityType === "passive"
          ? "Passzív"
          : abilityType || "—";
      const isActive = abilityType === "active";
      const kp =
        Number(item.system?.replaceCost) >= 0 ? Number(item.system.replaceCost) : 0;
      const descRaw = (item.system?.description ?? "").trim();
      const description = descRaw
        ? descRaw.length > 60
          ? `${descRaw.slice(0, 57)}…`
          : descRaw
        : "—";
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item.name ?? "—",
        img: cleanImg(item.img ?? ""),
        typeLabel,
        description,
        kp,
        isActive,
        slotKey: "",
        equipped: false
      };
    });

    // Egyéb tárgyak + Csomagok táblázata (ugyanaz a flatten logika, mint a karakterlapon).
    const allItems = itemDocs;
    const packageDocs = allItems.filter((i) => i.type === "Csomag");
    const targyDocs = allItems.filter((i) => i.type === "Targy");

    const packageEntries = [];
    const childIds = new Set();

    for (const item of packageDocs) {
      const sys = item.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw || "—";
      const refs = Array.isArray(sys.contents) ? sys.contents : [];

      packageEntries.push({
        itemId: item.id,
        actorId: actor.id,
        name: item.name ?? "—",
        img: cleanImg(item.img ?? ""),
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
          actorId: actor.id,
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

    const targyEntries = targyDocs
      .filter((item) => !childIds.has(item.id))
      .map((item) => {
        const sys = item.system ?? {};
        const descRaw = (sys.description ?? "").trim();
        const description = descRaw || "—";
        const quantity = sys.quantity != null ? String(sys.quantity).trim() : "1";
        const img = cleanImg(item.img ?? "");
        return {
          itemId: item.id,
          actorId: actor.id,
          name: item.name ?? "—",
          img,
          quantity,
          description,
          isPackage: false,
          isPackageChild: false
        };
      });

    context.itemsTable = [...packageEntries, ...targyEntries];

    const hasEquipment =
      (context.weaponsTable?.length ?? 0) > 0 ||
      (context.armorTable?.length ?? 0) > 0 ||
      (context.microchipsTable?.length ?? 0) > 0 ||
      (context.itemsTable?.length ?? 0) > 0;
    context.showEquipmentDropZone = !hasEquipment;

    // Egyéb Információ típusú itemek listája – ugyanaz az elrendezés, mint a karakter/jármű lapokon.
    const egyebDocs = itemDocs.filter((i) => i.type === "Egyeb");
    context.egyebList = egyebDocs.map((item) => {
      const sys = item.system ?? {};
      const descRaw = (sys.description ?? "").trim();
      const description = descRaw ? (descRaw.length > 80 ? `${descRaw.slice(0, 77)}…` : descRaw) : "";
      const rawImg = item.img ?? "";
      const img =
        rawImg === "icons/svg/item-bag.svg"
          ? ""
          : rawImg;
      return {
        itemId: item.id,
        actorId: actor.id,
        name: item.name ?? "—",
        img,
        description
      };
    });

    // Milícia küldetések: Nehézség és Rizikó mindig az aktuális szint / Erő Pont alapján számolva.
    const v = system.vallalkozas ?? {};
    if (Array.isArray(v.militiaMissions)) {
      const level = Number(v.level ?? 1) || 1;
      const power = Number(v.militiaPower ?? 0) || 0;
      const missions = v.militiaMissions.map((m) => {
        const baseRoll = Number(m.baseRoll ?? 0) || 0;
        const difficulty = baseRoll > 0 ? baseRoll * level : Number(m.difficulty ?? 0) || 0;
        const risk = difficulty - power;
        return {
          ...m,
          baseRoll,
          difficulty,
          risk
        };
      });
      system.vallalkozas = {
        ...v,
        militiaMissions: missions
      };
      context.system = system;
    }

    return context;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const sheet = this;
    const root =
      html?.querySelector?.("form.votv.vallalkozas-sheet") ??
      html ??
      this.form ??
      this.element;
    const $html = root ? $(root) : $([]);

    if (!this.isEditable) return;

    // Alkalmazottak táblázat – új sor hozzáadása
    $html.on("click", ".vallalkozas-employee-add", async (ev) => {
      ev.preventDefault();
      if (!this.actor) return;
      const sys = this.actor.system ?? {};
      const current = Array.isArray(sys.vallalkozas?.employees) ? sys.vallalkozas.employees.slice() : [];
      current.push({ type: "", level: 0, count: 0, bonus: "" });
      await this.actor.update({ "system.vallalkozas.employees": current });
    });

    // Alkalmazott sor törlése (Alt+klikk a ✕ gombon)
    $html.on("click", ".vallalkozas-employee-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey || !this.actor) return;
      const idxRaw = ev.currentTarget?.dataset?.index ?? "";
      const index = Number(idxRaw);
      const sys = this.actor.system ?? {};
      const current = Array.isArray(sys.vallalkozas?.employees) ? sys.vallalkozas.employees.slice() : [];
      if (!Number.isInteger(index) || index < 0 || index >= current.length) return;
      current.splice(index, 1);
      await this.actor.update({ "system.vallalkozas.employees": current });
    });

    // Gyártósor táblázat – új sor hozzáadása
    $html.on("click", ".vallalkozas-production-add", async (ev) => {
      ev.preventDefault();
      if (!this.actor) return;
      const sys = this.actor.system ?? {};
      const current = Array.isArray(sys.vallalkozas?.productionLines)
        ? sys.vallalkozas.productionLines.slice()
        : [];
      current.push({ product: "", count: 0, time: "" });
      await this.actor.update({ "system.vallalkozas.productionLines": current });
    });

    // Gyártósor sor törlése (Alt+klikk a ✕ gombon)
    $html.on("click", ".vallalkozas-production-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey || !this.actor) return;
      const idxRaw = ev.currentTarget?.dataset?.index ?? "";
      const index = Number(idxRaw);
      const sys = this.actor.system ?? {};
      const current = Array.isArray(sys.vallalkozas?.productionLines)
        ? sys.vallalkozas.productionLines.slice()
        : [];
      if (!Number.isInteger(index) || index < 0 || index >= current.length) return;
      current.splice(index, 1);
      await this.actor.update({ "system.vallalkozas.productionLines": current });
    });

    // Milícia küldetések – új sor hozzáadása
    $html.on("click", ".vallalkozas-mission-add", async (ev) => {
      ev.preventDefault();
      if (!this.actor) return;
      const sys = this.actor.system ?? {};
      const v = sys.vallalkozas ?? {};
      const current = Array.isArray(v.militiaMissions) ? v.militiaMissions.slice() : [];
      const level = Number(v.level ?? 1) || 1;
      const power = Number(v.militiaPower ?? 0) || 0;
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const difficulty = baseRoll * level;
      const risk = difficulty - power;
      current.push({
        location: "",
        baseRoll,
        difficulty,
        risk,
        loot: ""
      });
      await this.actor.update({ "system.vallalkozas.militiaMissions": current });
    });

    // Milícia küldetés sor törlése (Alt+klikk a ✕ gombon)
    $html.on("click", ".vallalkozas-mission-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey || !this.actor) return;
      const idxRaw = ev.currentTarget?.dataset?.index ?? "";
      const index = Number(idxRaw);
      const sys = this.actor.system ?? {};
      const v = sys.vallalkozas ?? {};
      const current = Array.isArray(v.militiaMissions) ? v.militiaMissions.slice() : [];
      if (!Number.isInteger(index) || index < 0 || index >= current.length) return;
      current.splice(index, 1);
      await this.actor.update({ "system.vallalkozas.militiaMissions": current });
    });

    // Egyéb információ / Mikro-Chip chat gomb – ugyanaz a logika, mint a karakter/jármű lapokon.
    $html.on("click", ".karakter-item-chat", async (ev) => {
      ev.preventDefault();
      const itemId =
        (ev.currentTarget?.dataset?.itemId ??
          ev.currentTarget?.getAttribute?.("data-item-id") ??
          "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      if (item.type === "MikroChip" || item.type === "Egyeb") {
        await this._postItemToChat(itemId);
      }
    });

    // Egyéb információ törlése (Alt+klikk a ✕ gombon)
    $html.on("click", ".vallalkozas-egyeb-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey || !this.actor) return;
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Raktár: kattintás név/ikon → item lap megnyitása
    $html.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (ev) => {
      ev.preventDefault();
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      item?.sheet?.render(true);
    });

    // Raktár: mennyiség mező változtatása
    $html.on("change", ".vallalkozas-item-quantity-input", async (ev) => {
      const input = ev.currentTarget;
      const itemId = (input?.dataset?.itemId ?? "").trim();
      if (!itemId || !this.actor) return;
      const item = this.actor.items.get(itemId);
      if (!item || item.type !== "Targy") return;
      const val = (input.value ?? "").trim();
      await item.update({ "system.quantity": val });
    });

    // Raktár: Alt+klikk törlés
    $html.on("click", ".vallalkozas-item-delete", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey || !this.actor) return;
      const itemId = (ev.currentTarget?.dataset?.itemId ?? "").trim();
      if (!itemId) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Form mezők automatikus mentése change-re (Karakter/Item lapok mintájára).
    const doSubmit = (form) => {
      if (!form || !this.actor) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.actor
        .update(updateData)
        .catch((err) => console.warn("VoidVallalkozasSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));

    sheet._votvChange = (ev) => {
      const form = ev.target?.form ?? ev.target?.closest?.("form");
      if (!isOurForm(form)) return;
      doSubmit(form);
    };
    document.body.addEventListener("change", sheet._votvChange, true);
  }

  async _onDropItem(event, data) {
    if (!this.actor) return super._onDropItem?.(event, data);

    // Ugyanaz a logika, mint a Jármű/Bázis lapokon: csak felszerelés típusú Item-ek
    // kerülhetnek a raktárba, egyébként visszaesünk az alap _onDropItem-re.
    let uuid =
      data?.uuid ??
      data?.documentUuid ??
      data?.data?.uuid ??
      (typeof data === "string" ? data : null);

    if (!uuid && data && typeof data === "object") {
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
    const allowed = ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"];
    if (!allowed.includes(doc.type)) return super._onDropItem(event, data);

    // Ha már ezen az aktoron van az item, nem kell másolatot létrehozni.
    if (doc.parent?.id === actor.id) return;

    const orig = doc.toObject();
    const itemData = foundry.utils.mergeObject(orig, {
      system: { ...(orig.system ?? {}), equipped: doc.type === "Pancel" ? false : undefined }
    });

    await actor.createEmbeddedDocuments("Item", [itemData]);
  }

  _tearDown(options) {
    document.body.removeEventListener("change", this._votvChange, true);
    return super._tearDown?.(options);
  }

  _getFormDataForUpdate(form) {
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") {
        if (el.value === "") continue;
        value = Number(el.value);
      } else {
        value = el.value ?? "";
      }
      foundry.utils.setProperty(updateData, el.name, value);
    }
    return updateData;
  }

  /** Egyéb információ vagy Mikro-Chip beküldése chatbe. */
  async _postItemToChat(itemId) {
    if (!this.actor) return;
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
}

