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
    context.sizeForSelect = (context.system?.identity?.size ?? "").trim() || "Közepes";

    // Raktár: ugyanolyan táblázatok mint a karakter Felszerelés (Fegyver, Páncél, Mikro-Chip, Tárgy)
    const weaponTypeLabels = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" };
    const weaponSizeLabels = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    const emptyLabel = "— Nincs fegyver —";
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
        img: item?.img ?? "",
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
        img: item?.img ?? "",
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
      const description = descRaw ? (descRaw.length > 60 ? descRaw.slice(0, 57) + "…" : descRaw) : "—";
      return {
        itemId: item.id,
        actorId: this.actor.id,
        name: item?.name ?? "—",
        img: item?.img ?? "",
        typeLabel,
        description,
        kp,
        isActive,
        slotKey: "",
        equipped: false
      };
    });
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
    const root = this.form ?? html?.querySelector?.("form.votv.jarmu-sheet") ?? html ?? this.element;
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
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (!itemId) return;
      await this._postItemToChat(itemId);
    });

    const sheet = this;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.actor.update(updateData).catch((err) => console.warn("VoidJarmuSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
    sheet._votvJarmuBlur = (ev) => {
      const target = ev.target;
      if (!target || !target.form) return;
      const tag = target.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return;
      const form = target.form;
      if (!isOurForm(form)) return;
      const next = ev.relatedTarget;
      if (next && (form.contains(next) || (sheet.id && next.closest?.(`#${CSS.escape(sheet.id)}`)))) return;
      if (game.votv) game.votv._lastKarakterSheetBlurSave = { appId: sheet.id, at: Date.now() };
      doSubmit(form);
    };
    document.body.addEventListener("blur", sheet._votvJarmuBlur, true);
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
    const allowed = ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"];
    if (!allowed.includes(doc.type)) return super._onDropItem(event, data);
    if (doc.parent?.id === actor.id) return;
    const itemData = foundry.utils.mergeObject(doc.toObject(), {
      system: { ...(doc.toObject().system ?? {}), equipped: doc.type === "Pancel" ? false : undefined }
    });
    await actor.createEmbeddedDocuments("Item", [itemData]);
  }
}
