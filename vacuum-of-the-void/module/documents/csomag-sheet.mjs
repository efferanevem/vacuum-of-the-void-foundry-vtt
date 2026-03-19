export class VoidCsomagSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/csomag-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "item", "Csomag"],
      template: "systems/vacuum-of-the-void/templates/item/csomag-sheet.hbs",
      width: 560,
      minWidth: 520,
      height: 520,
      form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: false }),
      dragDrop: [
        ...(super.DEFAULT_OPTIONS?.dragDrop ?? []),
        {
          dragSelector: null,
          dropSelector: ".csomag-contents-area[data-area='contents']"
        }
      ]
    },
    { inplace: false }
  );

  get item() {
    return this.document;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const sheet = this;
    const root =
      this.form ??
      html?.querySelector?.("form.votv-csomag-sheet") ??
      html ??
      this.element;
    const $html = root ? $(root) : $([]);

    // Elem megnyitása a listából.
    $html.on("click", ".csomag-item-open", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef;
      const itemId = ev.currentTarget?.dataset?.itemId;
      const openRef =
        typeof ref === "string" && ref.includes("|") ? ref.split("|")[0] : ref;
      let item = null;
      if (openRef) {
        try {
          item = await fromUuid(openRef);
        } catch {
          item = null;
        }
      }
      if (!item && itemId) {
        item = game.items?.get(itemId) ?? null;
      }
      item?.sheet?.render(true);
    });

    // Tartalom törlése (Alt+klikk).
    $html.on("click", ".csomag-item-remove", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const ref = ev.currentTarget?.dataset?.itemRef;
      if (!ref) return;
      const sys = this.document.system ?? {};
      const current = Array.isArray(sys.contents) ? sys.contents.slice() : [];
      const idx = current.indexOf(ref);
      const next = idx >= 0 ? [...current.slice(0, idx), ...current.slice(idx + 1)] : current;
      await this.document.update({ "system.contents": next });
    });

    // Tartalom mennyiség: közvetlenül a child item system.quantity-jét frissítjük.
    $html.on("change", ".csomag-item-quantity-input", async (ev) => {
      const input = ev.currentTarget;
      const itemId = input.dataset.itemId;
      if (!itemId) return;

      console.debug("Void | QtyEdit (CsomagSheet) start", {
        itemId,
        inputValue: input.value,
        inputDisabled: !!input.disabled
      });

      // itemId itt valójában a ref base része (| encoding nélkül), ezért fromUuid-val oldjuk fel,
      // hogy compendiumból vagy embeddedből is biztosan megtaláljuk.
      const baseRef = typeof itemId === "string" ? itemId.split("|")[0] : itemId;
      let item = null;
      try {
        const resolved = await fromUuid(baseRef);
        if (resolved?.documentName === "Item") item = resolved;
      } catch {
        item = game.items?.get(baseRef) ?? null;
      }
      console.debug("Void | QtyEdit (CsomagSheet) resolved", {
        baseRef,
        resolvedFound: !!item,
        resolved: item
          ? {
              uuid: item.uuid,
              id: item.id,
              parentId: item.parent?.id,
              parentName: item.parent?.name,
              docType: item.type,
              docName: item.name,
              currentQty: item.system?.quantity
            }
          : null
      });
      if (!item) return;

      const raw = (input.value ?? "").toString().trim();
      const safe = raw === "" ? "1" : raw;
      try {
        await item.update({ "system.quantity": safe });
        console.debug("Void | QtyEdit (CsomagSheet) updated", { baseRef, newQty: safe });
      } catch (err) {
        console.warn("Void | QtyEdit (CsomagSheet) update failed", { baseRef, safe, err });
      }
    });

    // Ha a csomag tartalmának quantity-je az inventory táblázatból változik,
    // akkor a csomaglapot is azonnal újrarendereljük.
    if (!this._votvCsomagItemUpdateHookRegistered) {
      this._votvCsomagItemUpdateHook = (updatedItem, _changed, _options, _userId) => {
        try {
          const actorParent = this.document?.parent;
          const actorId = actorParent?.id ?? "";
          if (!actorId) return;

          // Csak az aktorhoz tartozó embedded itemek frissülése érdekes.
          if (updatedItem?.parent?.id !== actorId) return;

          const refs = Array.isArray(this.document?.system?.contents) ? this.document.system.contents : [];
          if (!refs.length) return;

          const updatedId = updatedItem?.id ?? "";
          const updatedUuid = updatedItem?.uuid ?? "";
          if (!updatedId && !updatedUuid) return;

          const matches = refs.some((refStr) => {
            if (!refStr) return false;
            const s = String(refStr);
            const base = s.includes("|") ? s.split("|")[0] : s;
            return s === updatedId || s === updatedUuid || base === updatedId || base === updatedUuid;
          });

          if (!matches) return;
          // Kis késleltetés, hogy a DOM update-ek ne versenyezzenek egymással.
          setTimeout(() => this.render(true), 0);
        } catch (err) {
          console.warn("VoidCsomagSheet item update hook error:", err);
        }
      };

      Hooks.on("updateItem", this._votvCsomagItemUpdateHook);
      this._votvCsomagItemUpdateHookRegistered = true;
    }

    // Globális drop: bármilyen actor-lapról / compendiumból rá lehessen dobni itemeket.
    if (!this._votvGlobalDrop) {
      this._votvGlobalDrop = async (ev) => {
        try {
          const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
          const isOnSheetElement =
            (this.element && path.includes(this.element)) ||
            (this.id && ev.target?.closest?.(`#${CSS.escape(this.id)}`));
          if (!isOnSheetElement) return;

          let data = null;
          try {
            data = TextEditor.getDragEventData(ev);
          } catch {
            // nem Item drag
          }
          if (!data || data.type !== "Item") return;

          const getUuid = (d) => {
            if (!d) return null;
            const u =
              d.uuid ??
              d.documentUuid ??
              d.data?.uuid ??
              (typeof d === "string" ? d : null);
            if (u) return u;
            if (typeof d === "object") {
              for (const v of Object.values(d)) {
                if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) return v;
              }
            }
            return null;
          };

          const uuid = getUuid(data);
          if (!uuid) return;

          const doc = await fromUuid(uuid);
          if (!doc || doc.documentName !== "Item") return;

          // Csak felszerelés jellegű itemeket engedünk a csomagba.
          const allowedTypes = new Set(["Fegyver", "weapon", "Pancel", "MikroChip", "Targy"]);
          if (!allowedTypes.has(doc.type)) return;

          const ref = doc.uuid ?? doc.id;
          if (!ref) return;
          const sys = this.document.system ?? {};
          const current = Array.isArray(sys.contents) ? sys.contents.slice() : [];
          current.push(ref);
          await this.document.update({ "system.contents": current });
        } catch (err) {
          console.error("VoidCsomagSheet global drop error", err);
        }
      };
      window.addEventListener("drop", this._votvGlobalDrop, true);
    }

    if (!this.isEditable) return;

    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.document.update(updateData).catch((err) =>
        console.warn("VoidCsomagSheet save failed", err)
      );
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

  _tearDown(options) {
    document.body.removeEventListener("change", this._votvChange, true);
    if (this._votvGlobalDrop) {
      window.removeEventListener("drop", this._votvGlobalDrop, true);
      this._votvGlobalDrop = null;
    }
    if (this._votvCsomagItemUpdateHookRegistered) {
      if (this._votvCsomagItemUpdateHook) {
        Hooks.off("updateItem", this._votvCsomagItemUpdateHook);
        this._votvCsomagItemUpdateHook = null;
      }
      this._votvCsomagItemUpdateHookRegistered = false;
    }
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

  async _prepareContext(options) {
    const context = await super._prepareContext(options) ?? {};
    context.item = this.document;
    const parentActor = this.document?.parent ?? null;
    const sys = foundry.utils.deepClone(this.document.system ?? {});
    const refs = Array.isArray(sys.contents) ? sys.contents : [];

    const parseEncodedRef = (refStr) => {
      if (typeof refStr !== "string") return { baseRef: "", qtyMul: 1, hasQty: false };
      const [baseRef, ...parts] = refStr.split("|");
      let qtyMul = 1;
      let hasQty = false;
      for (const p of parts) {
        const m = p.match(/^qty=(.+)$/);
        if (!m) continue;
        const n = Number.parseInt(m[1], 10);
        if (Number.isFinite(n) && n > 0) qtyMul = n;
        hasQty = true;
      }
      return { baseRef, qtyMul, hasQty };
    };

    const docs = await Promise.all(
      refs.map(async (ref) => {
        if (!ref) return null;
        const { baseRef } = parseEncodedRef(ref);
        if (!baseRef) return null;
        try {
          const doc = await fromUuid(baseRef);
          if (doc?.documentName === "Item") return doc;
        } catch {
          const item = game.items?.get(baseRef) ?? null;
          if (item) return item;
        }
        return null;
      })
    );

    const contentsList = [];
    for (let i = 0; i < docs.length; i++) {
      const doc = docs[i];
      const ref = refs[i];
      if (!doc || !ref) continue;

      const { qtyMul, hasQty } = parseEncodedRef(ref);
      const { baseRef } = parseEncodedRef(ref);
      const dSys = doc.system ?? {};
      const rawQty = (dSys.quantity ?? "").toString().trim();
      const baseQtyNum = Number.parseInt(rawQty, 10);
      const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;

      // Ha a contents tartalom már actor-embedded itemre mutat, akkor a mennyiség szerkeszthető.
      // fromUuid() visszaadhat embedded itemet is; itt doc.parent alapján döntünk.
      const isEmbedded = !!(parentActor && doc?.parent?.id === parentActor.id);
      const isQuantityDisabled = hasQty && qtyMul !== 1 && !isEmbedded;

      contentsList.push({
        // data-item-id: a ref base része (|qty encoding nélkül), így a mennyiség update biztosan feloldható.
        id: baseRef,
        ref, // encoded ref: remove button uses it to remove exact string
        name: doc.name,
        img: doc.img,
        type: doc.type,
        quantity: String(baseQty * qtyMul),
        isFixedQuantity: hasQty && qtyMul !== 1,
        isQuantityDisabled
      });
    }

    context.system = sys;
    context.contentsList = contentsList;
    return context;
  }
}

