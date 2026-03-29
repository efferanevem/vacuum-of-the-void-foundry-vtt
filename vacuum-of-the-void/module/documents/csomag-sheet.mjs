import {
  isEmbeddedCsomagRef,
  parseEmbeddedCsomagIndex,
  parseCsomagContentsEncodedRef,
  removeEmbeddedPackageRow
} from "../util/csomag-embedded-utils.mjs";
import {
  openEmbeddedCsomagItemSheetFromRef,
  pushCsomagEmbeddedSnapshotFromItem
} from "./csomag-embedded-item-sheet.mjs";

const PACKAGE_ENTRY_FLAG = "packageEntryOf";

function votvSystemNamespace() {
  return game.votv?.systemId ?? "vacuum-of-the-void";
}

function parseCsomagEncodedRef(refStr) {
  const { baseRef, qtyMul } = parseCsomagContentsEncodedRef(refStr);
  const hasQty = typeof refStr === "string" && refStr.includes("|qty=");
  return { baseRef, qtyMul, hasQty };
}

function findCsomagContentsIndex(contents, refString) {
  if (!Array.isArray(contents) || typeof refString !== "string") return -1;
  let idx = contents.indexOf(refString);
  if (idx >= 0) return idx;
  const want = parseCsomagEncodedRef(refString).baseRef;
  if (!want) return -1;
  return contents.findIndex(
    (r) => typeof r === "string" && parseCsomagEncodedRef(r).baseRef === want
  );
}

function isCsomagDedicatedPackageItem(item, csomagId) {
  if (!item || !csomagId) return false;
  const ns = votvSystemNamespace();
  const a = item.getFlag?.(ns, PACKAGE_ENTRY_FLAG);
  return a === csomagId || String(a ?? "") === String(csomagId);
}

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

    $html.on("click", ".csomag-item-open", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef ?? "";
      const openRef = typeof ref === "string" && ref.includes("|") ? ref.split("|")[0] : ref;

      if (isEmbeddedCsomagRef(openRef)) {
        openEmbeddedCsomagItemSheetFromRef(sheet.document, openRef);
        return;
      }

      let item = null;
      if (openRef) {
        try {
          item = await fromUuid(openRef);
        } catch {
          item = null;
        }
      }
      if (!item) {
        const itemId = ev.currentTarget?.dataset?.itemId;
        const actor = sheet.document.parent;
        item =
          (actor?.documentName === "Actor" ? actor.items?.get?.(itemId) ?? null : null) ??
          game.items?.get(itemId) ??
          null;
      }
      item?.sheet?.render(true);
    });

    $html.on("click", ".csomag-item-remove", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const ref = ev.currentTarget?.dataset?.itemRef;
      if (!ref) return;

      if (isEmbeddedCsomagRef(String(ref))) {
        const idx = parseEmbeddedCsomagIndex(ref);
        await removeEmbeddedPackageRow(sheet.document, idx);
        return;
      }

      const actor = sheet.document.parent;
      const sys = sheet.document.system ?? {};
      const current = Array.isArray(sys.contents) ? sys.contents.slice() : [];
      const idx = findCsomagContentsIndex(current, ref);
      const { baseRef } = parseCsomagEncodedRef(ref);
      const next = idx >= 0 ? [...current.slice(0, idx), ...current.slice(idx + 1)] : current;
      await sheet.document.update({ "system.contents": next });

      let doc = null;
      try {
        doc = await fromUuid(baseRef);
        if (doc?.documentName !== "Item") doc = null;
      } catch {
        doc = null;
      }
      if (!doc && actor?.documentName === "Actor") {
        doc = actor.items?.get?.(baseRef) ?? null;
      }
      const ns = votvSystemNamespace();
      if (
        doc &&
        actor?.documentName === "Actor" &&
        doc.parent?.id === actor.id &&
        isCsomagDedicatedPackageItem(doc, sheet.document.id)
      ) {
        await doc.delete();
      }
    });

    $html.on("change", ".csomag-item-quantity-input", async (ev) => {
      const input = ev.currentTarget;
      const itemRefFull = (input.dataset?.itemRef ?? "").trim();

      const raw = (input.value ?? "").toString().trim();
      const safe = raw === "" ? "1" : raw;

      if (isEmbeddedCsomagRef(itemRefFull)) {
        const idx = parseEmbeddedCsomagIndex(itemRefFull);
        if (idx < 0) return;
        const arr = [...(sheet.document.system?.embeddedItems ?? [])];
        const cur = foundry.utils.deepClone(
          arr[idx] ?? { type: "Targy", name: "—", img: "", system: {} }
        );
        cur.system = cur.system ?? {};
        cur.system.quantity = safe;
        arr[idx] = cur;
        try {
          await sheet.document.update({ "system.embeddedItems": arr });
        } catch (err) {
          console.warn("Void | QtyEdit (CsomagSheet emb) failed", err);
        }
        return;
      }

      const itemId = input.dataset?.itemId;
      const baseRef = itemRefFull
        ? parseCsomagEncodedRef(itemRefFull).baseRef
        : (typeof itemId === "string" ? itemId.split("|")[0] : itemId);
      if (!baseRef) return;

      let item = null;
      try {
        const resolved = await fromUuid(baseRef);
        if (resolved?.documentName === "Item") item = resolved;
      } catch {
        item = null;
      }
      if (!item) {
        const actor = sheet.document.parent;
        item =
          (actor?.documentName === "Actor" ? actor.items?.get?.(baseRef) ?? null : null) ??
          game.items?.get(baseRef) ??
          null;
      }
      if (!item) return;

      try {
        await item.update({ "system.quantity": safe });
      } catch (err) {
        console.warn("Void | QtyEdit (CsomagSheet) update failed", { baseRef, safe, err });
      }
    });

    if (!this._votvCsomagItemUpdateHookRegistered) {
      this._votvCsomagItemUpdateHook = (updatedItem, _changed, _options, _userId) => {
        try {
          if (updatedItem?.id !== sheet.document?.id) return;
          setTimeout(() => sheet.render(true), 0);
        } catch (err) {
          console.warn("VoidCsomagSheet item update hook error:", err);
        }
      };

      Hooks.on("updateItem", this._votvCsomagItemUpdateHook);
      this._votvCsomagItemUpdateHookRegistered = true;
    }

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

          const allowedTypes = new Set(["Fegyver", "weapon", "Pancel", "MikroChip", "Targy"]);
          if (!allowedTypes.has(doc.type)) return;

          await pushCsomagEmbeddedSnapshotFromItem(sheet.document, doc);
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
    const context = (await super._prepareContext(options)) ?? {};
    context.item = this.document;
    const parentActor = this.document?.parent ?? null;
    const sys = foundry.utils.deepClone(this.document.system ?? {});
    const refs = Array.isArray(sys.contents) ? sys.contents : [];

    const contentsList = [];
    for (const ref of refs) {
      if (!ref) continue;
      const refStr = String(ref);

      if (isEmbeddedCsomagRef(refStr)) {
        const idx = parseEmbeddedCsomagIndex(refStr);
        const snap = this.document.system?.embeddedItems?.[idx];
        if (!snap) continue;
        const dSys = snap.system ?? {};
        const rawQty = (dSys.quantity ?? "").toString().trim();
        contentsList.push({
          id: refStr,
          ref: refStr,
          name: snap.name ?? "—",
          img: snap.img ?? "",
          type: snap.type ?? "Targy",
          quantity: rawQty || "1",
          isFixedQuantity: false,
          isQuantityDisabled: false
        });
        continue;
      }

      const { baseRef, qtyMul, hasQty } = parseCsomagEncodedRef(refStr);
      if (!baseRef) continue;

      let doc = null;
      try {
        doc = await fromUuid(baseRef);
        if (doc?.documentName !== "Item") doc = null;
      } catch {
        const item = game.items?.get(baseRef) ?? null;
        if (item) doc = item;
      }
      if (!doc) continue;

      const dSys = doc.system ?? {};
      const rawQty = (dSys.quantity ?? "").toString().trim();
      const baseQtyNum = Number.parseInt(rawQty, 10);
      const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;

      const isEmbedded = !!(parentActor && doc?.parent?.id === parentActor.id);
      const isQuantityDisabled = hasQty && qtyMul !== 1 && !isEmbedded;

      contentsList.push({
        id: isEmbedded ? doc.id : baseRef,
        ref: refStr,
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
