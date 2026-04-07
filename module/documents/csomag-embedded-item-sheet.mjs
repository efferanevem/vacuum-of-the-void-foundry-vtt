import {
  buildCsomagItemSnapshot,
  parseEmbeddedCsomagIndex
} from "../util/csomag-embedded-utils.mjs";
import { VoidTargySheet, buildTargySheetTemplateContext } from "./targy-sheet.mjs";
import { VoidWeaponSheet, buildWeaponSheetTemplateContext } from "./weapon-sheet.mjs";
import { VoidShieldSheet, buildShieldSheetTemplateContext } from "./shield-sheet.mjs";
import { VoidMicrochipSheet, buildMicrochipSheetTemplateContext } from "./microchip-sheet.mjs";

/** Virtuális tárgy nem ClientDocument → ItemSheetV2 helyett ApplicationV2 + HBS (lásd VoidEmbeddedUnitAbilitySheet). */
const VotvCsomagEmbeddedApplicationV2 = foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
);

/** Melyik regisztrált item sheet legyen a keret/CSS + teljes tartalom-sablon (PARTS / DEFAULT_OPTIONS). */
function itemSheetClassForEmbeddedSnapType(type) {
  const t = (type ?? "Targy").toString();
  const map = {
    Fegyver: VoidWeaponSheet,
    weapon: VoidWeaponSheet,
    Pancel: VoidShieldSheet,
    MikroChip: VoidMicrochipSheet,
    Targy: VoidTargySheet
  };
  return map[t] ?? VoidTargySheet;
}

const CSOMAG_EMBEDDED_CONTEXT_BUILDERS = new Map([
  [VoidWeaponSheet, buildWeaponSheetTemplateContext],
  [VoidShieldSheet, buildShieldSheetTemplateContext],
  [VoidMicrochipSheet, buildMicrochipSheetTemplateContext],
  [VoidTargySheet, buildTargySheetTemplateContext]
]);

const embeddedCsomagSheetClassCache = new Map();

/**
 * Típus-specifikus alkalmazás: ugyanaz a PARTS + teljes HBS, mint a Fegyver / Tárgy / … lapon.
 */
function getVoidEmbeddedCsomagItemSheetClass(itemType) {
  const Base = itemSheetClassForEmbeddedSnapType(itemType);
  const cacheKey = Base?.name ?? "VoidTargySheet";
  let C = embeddedCsomagSheetClassCache.get(cacheKey);
  if (C) return C;

  const baseClasses = [...(Base.DEFAULT_OPTIONS?.classes ?? [])];
  if (!baseClasses.includes("csomag-embedded")) baseClasses.push("csomag-embedded");

  C = class extends VoidEmbeddedCsomagItemSheetBase {
    static PARTS = foundry.utils.mergeObject({}, Base.PARTS ?? {}, { inplace: false });

    static DEFAULT_OPTIONS = foundry.utils.mergeObject(
      foundry.utils.mergeObject({}, Base.DEFAULT_OPTIONS ?? {}, { inplace: false }),
      { classes: baseClasses },
      { inplace: false }
    );
  };
  C._votvItemSheetBase = Base;
  C._votvBuildContext =
    CSOMAG_EMBEDDED_CONTEXT_BUILDERS.get(Base) ?? buildTargySheetTemplateContext;
  Object.defineProperty(C, "name", { value: `VoidEmbeddedCsomagItem_${cacheKey}` });
  embeddedCsomagSheetClassCache.set(cacheKey, C);
  return C;
}

/**
 * @param {Item} csomagItem
 * @param {number} embeddedIndex
 */
export function createEmbeddedCsomagItemVirtualDocument(csomagItem, embeddedIndex) {
  const getSnap = () => csomagItem.system?.embeddedItems?.[embeddedIndex];

  const doc = {
    documentName: "Item",

    get id() {
      return `csomagEmb.${csomagItem.id}.${embeddedIndex}`;
    },
    get uuid() {
      return this.id;
    },
    get name() {
      return getSnap()?.name ?? "";
    },
    get type() {
      return getSnap()?.type ?? "Targy";
    },
    get img() {
      return getSnap()?.img ?? "";
    },
    get system() {
      const s = getSnap()?.system ?? {};
      return foundry.utils.deepClone(s);
    },
    get parent() {
      return csomagItem.parent ?? null;
    },
    get isOwner() {
      return csomagItem.isOwner ?? true;
    },
    testUserPermission(user, action, options) {
      return csomagItem.testUserPermission?.(user, action, options) ?? false;
    },

    toObject() {
      const snap = getSnap();
      return {
        name: snap?.name ?? "—",
        type: snap?.type ?? "Targy",
        img: snap?.img ?? "",
        system: foundry.utils.deepClone(snap?.system ?? {})
      };
    },

    async update(data) {
      const arr = [...(csomagItem.system?.embeddedItems ?? [])];
      const cur = foundry.utils.deepClone(
        getSnap() ?? { type: "Targy", name: "—", img: "", system: {} }
      );
      if (data.name !== undefined) cur.name = data.name;
      if (data.img !== undefined) cur.img = data.img;
      if (data.type !== undefined) cur.type = data.type;
      if (data.system !== undefined && typeof data.system === "object") {
        cur.system = foundry.utils.mergeObject(cur.system ?? {}, data.system, { inplace: false });
      }
      arr[embeddedIndex] = cur;
      await csomagItem.update({ "system.embeddedItems": arr });
      doc._afterUpdate?.();
    },

    /** @type {(() => void) | undefined} */
    _afterUpdate: undefined
  };

  return doc;
}

/** Közös viselkedés; a static PARTS/DEFAULT_OPTIONS a típus szerinti gyerekosztályban van. */
class VoidEmbeddedCsomagItemSheetBase extends VotvCsomagEmbeddedApplicationV2 {
  _votvVirtualDoc = null;

  constructor(options = {}) {
    super(options);
    this._votvVirtualDoc = options?.document ?? null;
  }

  get item() {
    return this._votvVirtualDoc ?? this.document ?? this.options?.document;
  }

  get isEditable() {
    return game.user.isGM || !!this.item?.isOwner;
  }

  get title() {
    return this.item?.name ?? "Csomag tárgy";
  }

  _initializeApplicationOptions(options) {
    if (options?.document) this._votvVirtualDoc = options.document;
    const result = super._initializeApplicationOptions(options);
    const doc = this._votvVirtualDoc ?? options?.document ?? this.document;
    if (doc?.uuid || doc?.id) {
      const raw = doc.uuid ?? doc.id;
      result.uniqueId = `${this.constructor.name}-${String(raw).replace(/\./g, "-")}`;
    }
    return result;
  }

  _attachFrameListeners(html) {
    const DSProto = foundry.applications.sheets.DocumentSheetV2?.prototype;
    try {
      if (DSProto?._attachFrameListeners) DSProto._attachFrameListeners.call(this, html);
      else super._attachFrameListeners(html);
    } catch (err) {
      console.warn("VoidEmbeddedCsomagItemSheet DocumentSheet attachFrameListeners", err);
      try {
        super._attachFrameListeners(html);
      } catch (err2) {
        console.warn("VoidEmbeddedCsomagItemSheet Application attachFrameListeners", err2);
      }
    }
    const sheet = this;
    sheet._votvProfileImgClick = (ev) => {
      if (!sheet.isEditable) return;
      if (!ev.target?.closest?.(".profile") && ev.target?.getAttribute?.("data-edit") !== "img") return;
      ev.preventDefault();
      ev.stopPropagation();
      const FilePickerClass = foundry.applications?.apps?.FilePicker?.implementation ?? globalThis.FilePicker;
      const doc = sheet.item;
      const fp = new FilePickerClass({
        type: "image",
        current: doc?.img || "",
        callback: (path) => {
          if (path) doc?.update?.({ img: path });
        }
      });
      fp.browse();
    };
    const root = html?.nodeType === 9 ? (html.body ?? html.documentElement) : html;
    if (root?.addEventListener) {
      root.addEventListener("click", sheet._votvProfileImgClick, true);
      sheet._votvProfileClickRoot = root;
    } else {
      document.body.addEventListener("click", sheet._votvProfileImgClick, true);
    }

    sheet._votvKeydownClose = (ev) => {
      if (ev.key !== "Escape") return;
      if (!sheet.rendered || !sheet.element?.isConnected) return;
      const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
      if (!path.includes(sheet.element)) return;
      ev.preventDefault();
      ev.stopPropagation();
      Promise.resolve(sheet.close({ force: true })).catch(() => sheet.close?.());
    };
    document.addEventListener("keydown", sheet._votvKeydownClose, true);

    if (!this.isEditable) return;

    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.item?.update?.(updateData).catch((err) =>
        console.warn("VoidEmbeddedCsomagItemSheet save failed", err)
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
    if (this._votvKeydownClose) {
      document.removeEventListener("keydown", this._votvKeydownClose, true);
      this._votvKeydownClose = null;
    }
    if (this._votvChange) document.body.removeEventListener("change", this._votvChange, true);
    if (this._votvProfileClickRoot) {
      this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, true);
      this._votvProfileClickRoot = null;
    } else {
      document.body.removeEventListener("click", this._votvProfileImgClick, true);
    }
    return super._tearDown?.(options);
  }

  _getFormDataForUpdate(form) {
    const ItemBase = this.constructor._votvItemSheetBase;
    if (ItemBase?.prototype?._getFormDataForUpdate) {
      return ItemBase.prototype._getFormDataForUpdate.call(this, form);
    }
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      if (el.name === "img") continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") value = el.value === "" ? null : Number(el.value);
      else value = el.value ?? "";
      foundry.utils.setProperty(updateData, el.name, value);
    }
    return updateData;
  }

  async _prepareContext(options) {
    const build = this.constructor._votvBuildContext ?? buildTargySheetTemplateContext;
    const context = await build(this.item, options);
    if (!context.cssClass) {
      context.cssClass = [...(this.constructor.DEFAULT_OPTIONS.classes ?? [])].join(" ");
      if (this.isEditable) context.cssClass = `${context.cssClass} editable`.trim();
    }
    return context;
  }
}

/** Régi importoknak: alapértelmezés tárgy típusú keret. */
export const VoidEmbeddedCsomagItemSheet = getVoidEmbeddedCsomagItemSheetClass("Targy");

/**
 * @param {Item} csomagItem
 * @param {string} refOrIndex – "emb:0" vagy "0"
 */
export function openEmbeddedCsomagItemSheetFromRef(csomagItem, refOrIndex) {
  if (!csomagItem) return;
  let idx = -1;
  if (typeof refOrIndex === "string" && refOrIndex.startsWith("emb:")) {
    idx = parseEmbeddedCsomagIndex(refOrIndex);
  } else {
    idx = Number.parseInt(String(refOrIndex), 10);
  }
  if (!Number.isFinite(idx) || idx < 0) return;
  openEmbeddedCsomagItemSheet(csomagItem, idx);
}

export function openEmbeddedCsomagItemSheet(csomagItem, embeddedIndex) {
  const snap = csomagItem.system?.embeddedItems?.[embeddedIndex];
  if (!snap) return;
  try {
    const doc = createEmbeddedCsomagItemVirtualDocument(csomagItem, embeddedIndex);
    const SheetClass = getVoidEmbeddedCsomagItemSheetClass(snap.type);
    const sheet = new SheetClass({ document: doc });
    doc._afterUpdate = () => sheet.render(false);
    sheet.render(true);
  } catch (err) {
    console.error("VOTV openEmbeddedCsomagItemSheet", err);
    ui.notifications?.error?.("Csomag-tétel lap megnyitása sikertelen (lásd konzol).");
  }
}

/** Drop / másolás: pillanatkép + emb: hivatkozás hozzáadása. */
export async function pushCsomagEmbeddedSnapshotFromItem(csomagItem, sourceItem) {
  if (!csomagItem || !sourceItem || sourceItem.documentName !== "Item") return;
  const allowed = new Set(["Fegyver", "weapon", "Pancel", "MikroChip", "Targy"]);
  if (!allowed.has(sourceItem.type)) return;
  const embedded = [...(csomagItem.system?.embeddedItems ?? [])];
  embedded.push(buildCsomagItemSnapshot(sourceItem));
  const contents = [...(csomagItem.system?.contents ?? [])];
  contents.push(`emb:${embedded.length - 1}`);
  await csomagItem.update({
    "system.embeddedItems": embedded,
    "system.contents": contents
  });
}
