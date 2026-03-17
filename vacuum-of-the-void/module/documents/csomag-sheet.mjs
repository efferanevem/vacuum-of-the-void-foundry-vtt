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
      let item = null;
      if (ref) {
        try {
          item = await fromUuid(ref);
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

      const parent = this.document.parent;
      let item = null;
      if (parent?.items) {
        item = parent.items.get(itemId) ?? null;
      }
      if (!item) {
        item = game.items?.get(itemId) ?? null;
      }
      if (!item) return;

      const raw = (input.value ?? "").toString().trim();
      const safe = raw === "" ? "1" : raw;
      await item.update({ "system.quantity": safe });
    });

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
    const sys = foundry.utils.deepClone(this.document.system ?? {});
    const refs = Array.isArray(sys.contents) ? sys.contents : [];

    const docs = await Promise.all(
      refs.map(async (ref) => {
        if (!ref) return null;
        try {
          const doc = await fromUuid(ref);
          if (doc?.documentName === "Item") return doc;
        } catch {
          const item = game.items?.get(ref);
          if (item) return item;
        }
        return null;
      })
    );

    const contentsList = docs
      .map((doc, index) => ({ doc, ref: refs[index] }))
      .filter((pair) => !!pair.doc && !!pair.ref)
      .map(({ doc, ref }) => {
        const dSys = doc.system ?? {};
        const rawQty = (dSys.quantity ?? "").toString().trim();
        const quantity = rawQty || "1";
        return {
          id: doc.id,
          ref,
          name: doc.name,
          img: doc.img,
          type: doc.type,
          quantity
        };
      });

    context.system = sys;
    context.contentsList = contentsList;
    return context;
  }
}

