import { DEFAULT_FOUNDRY_ITEM_BAG, hideDefaultItemBagImg } from "../util/hide-default-item-bag.mjs";

const VOTV_ABILITY_PROFILE_PLACEHOLDER = "systems/vacuum-of-the-void/assets/blank.svg";

/**
 * Ugyanaz a Handlebars-környezet, mint a VoidAbilitySheet-en (kp sor, leírás, profilkép).
 * @param {object} item – valódi Item vagy beágyazott virtuális doc
 * @param {object} context – super._prepareContext eredménye
 * @param {{ fillCssClassIfMissing?: boolean, isEditable?: boolean }} opts
 */
function enrichVoidAbilitySheetTemplateContext(item, context = {}, opts = {}) {
  const out = foundry.utils.mergeObject(context, {});
  out.item = item;
  out.system = item?.system ?? { kind: "passive", kp: 0, description: "" };
  const desc = String(out.system?.description ?? "");
  const lines = desc.split(/\r?\n/).reduce((sum, line) => {
    if (!line) return sum + 1;
    const approxWidth = 80;
    return sum + Math.max(1, Math.ceil(line.length / approxWidth));
  }, 0);
  const base = 6;
  out.descriptionRows = Math.min(Math.max(lines, base), base * 3);
  const rawImg = (item?.img ?? "").trim();
  const customImg = hideDefaultItemBagImg(item?.img ?? "");
  out.profileDisplayImg =
    rawImg === DEFAULT_FOUNDRY_ITEM_BAG
      ? DEFAULT_FOUNDRY_ITEM_BAG
      : customImg || VOTV_ABILITY_PROFILE_PLACEHOLDER;
  if (opts.fillCssClassIfMissing) {
    let cls = String(out.cssClass ?? "").trim();
    if (!cls) cls = [...(VoidAbilitySheet.DEFAULT_OPTIONS.classes ?? [])].join(" ");
    if (opts.isEditable && cls && !cls.split(/\s+/).includes("editable")) cls = `${cls} editable`.trim();
    out.cssClass = cls;
  }
  return out;
}

/** Aktív vagy modul kivételével a tárolt KP legyen 0. */
function applyAbilityKpZeroRule(updateData, form, item) {
  const fromData = foundry.utils.getProperty(updateData, "system.kind");
  const formKind = form?.querySelector?.('select[name="system.kind"]')?.value;
  const kind = String(fromData ?? formKind ?? item?.system?.kind ?? "passive");
  if (kind !== "active" && kind !== "module") {
    foundry.utils.setProperty(updateData, "system.kp", 0);
  }
}

function getAbilitySheetScrollContainers(root) {
  if (!root) return { form: null, windowContent: null };
  const form =
    root.querySelector?.("form.votv-kepesseg-sheet") ?? root.querySelector?.("form") ?? null;
  const windowContent =
    root.querySelector?.(".votv-scroll") ?? root.querySelector?.(".window-content") ?? null;
  return { form, windowContent };
}

function saveAbilitySheetScrollState(root) {
  const { form, windowContent } = getAbilitySheetScrollContainers(root);
  const state = {};
  if (form && form.scrollHeight > form.clientHeight && typeof form.scrollTop === "number") {
    state.formScrollTop = form.scrollTop;
  }
  if (
    windowContent &&
    windowContent.scrollHeight > windowContent.clientHeight &&
    typeof windowContent.scrollTop === "number"
  ) {
    state.windowScrollTop = windowContent.scrollTop;
  }
  return state;
}

function applyAbilitySheetScrollState(root, state) {
  if (!root || !state) return;
  const { form, windowContent } = getAbilitySheetScrollContainers(root);
  if (typeof state.formScrollTop === "number" && form) form.scrollTop = state.formScrollTop;
  if (typeof state.windowScrollTop === "number" && windowContent) {
    windowContent.scrollTop = state.windowScrollTop;
  }
}

/**
 * Autosave utáni újrarendernél ne ugorjon a kurzor a mező elejére (VoidKarakterSheet mintájára).
 * @param {HTMLElement | null} formAfter
 * @param {{ name: string|null, id: string|null, selectionStart?: number, selectionEnd?: number }|null} focusToRestore
 * @param {Record<string, unknown>} scrollState
 * @param {HTMLElement | null} rootAfter
 */
function restoreAbilitySheetScrollAndFocus(formAfter, focusToRestore, scrollState, rootAfter) {
  if (rootAfter) applyAbilitySheetScrollState(rootAfter, scrollState);
  if (focusToRestore?.name != null || focusToRestore?.id != null) {
    const scope = rootAfter ?? formAfter;
    const selId =
      focusToRestore.id != null && focusToRestore.id !== ""
        ? `#${CSS.escape(focusToRestore.id)}`
        : null;
    const el =
      (selId ? scope?.querySelector?.(selId) : null) ??
      (focusToRestore.name
        ? scope?.querySelector?.(`[name="${CSS.escape(focusToRestore.name)}"]`)
        : null);
    if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) {
      el.focus({ preventScroll: true });
      const start = focusToRestore.selectionStart ?? 0;
      const end = focusToRestore.selectionEnd ?? start;
      const len = String(el.value ?? "").length;
      const a = Math.min(Math.max(0, start), len);
      const b = Math.min(Math.max(0, end), len);
      try {
        if (typeof el.setSelectionRange === "function") el.setSelectionRange(a, b);
        else if (typeof el.selectionStart === "number") {
          el.selectionStart = a;
          el.selectionEnd = b;
        }
      } catch {
        /* pl. number input egyes böngészőkben */
      }
    }
  }
  if (rootAfter) applyAbilitySheetScrollState(rootAfter, scrollState);
}

/**
 * @param {object} sheet
 * @param {(force?: boolean, options?: object) => Promise<unknown>} doSuperRender
 */
async function abilitySheetRenderPreservingFocus(sheet, doSuperRender, force, options) {
  const rootBefore = sheet.element;
  const formBefore = sheet.form ?? sheet.element;
  let saved = { scrollState: {}, focus: null };
  if (rootBefore) {
    saved.scrollState = saveAbilitySheetScrollState(rootBefore);
    const activeEl = document.activeElement;
    // ApplicationV2-nél a `form` getter néha nem fedi a szerkesztő mezőket – elég a teljes lap gyökér.
    const isOurs = rootBefore?.contains?.(activeEl) || formBefore?.contains?.(activeEl);
    const isInputLike =
      activeEl &&
      ((activeEl.tagName === "INPUT" &&
        activeEl.type !== "checkbox" &&
        activeEl.type !== "radio") ||
        activeEl.tagName === "TEXTAREA");
    if (isOurs && isInputLike) {
      saved.focus = {
        name: activeEl.name || null,
        id: activeEl.id || null,
        selectionStart: "selectionStart" in activeEl ? activeEl.selectionStart : 0,
        selectionEnd: "selectionEnd" in activeEl ? activeEl.selectionEnd : 0
      };
    }
  }
  const out = await doSuperRender(force, options);
  const rootAfter = sheet.element;
  const formAfter = sheet.form ?? sheet.element;
  const scrollState = saved.scrollState;
  const focusToRestore = saved.focus;
  const hasScrollState =
    typeof scrollState?.formScrollTop === "number" ||
    typeof scrollState?.windowScrollTop === "number";
  const runRestore = () =>
    restoreAbilitySheetScrollAndFocus(formAfter, focusToRestore, scrollState, rootAfter);
  if (hasScrollState || focusToRestore) {
    requestAnimationFrame(runRestore);
    setTimeout(runRestore, 0);
    setTimeout(runRestore, 50);
    setTimeout(runRestore, 150);
    setTimeout(runRestore, 300);
    setTimeout(runRestore, 450);
    setTimeout(runRestore, 600);
  }
  return out;
}

/** Virtuális „item” nem ClientDocument → ItemSheetV2 helyett sima ApplicationV2 + ugyanaz a HBS. */
const VotvAbilityApplicationV2 = foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
);

export class VoidAbilitySheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
    template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
    width: 500,
    minWidth: 500,
    height: 420,
    form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: true })
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

  get item() {
    return this.document;
  }

  async render(force = false, options = {}) {
    return abilitySheetRenderPreservingFocus(this, (f, o) => super.render(f, o), force, options);
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const sheet = this;
    sheet._votvProfileImgClick = (ev) => {
      if (!sheet.isEditable) return;
      if (!ev.target?.closest?.(".profile") && ev.target?.getAttribute?.("data-edit") !== "img") return;
      ev.preventDefault();
      ev.stopPropagation();
      const FilePickerClass = foundry.applications?.apps?.FilePicker?.implementation ?? globalThis.FilePicker;
      const fp = new FilePickerClass({
        type: "image",
        current: sheet.document.img || "",
        callback: (path) => { if (path) sheet.document.update({ img: path }); }
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
    if (!this.isEditable) return;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.document.update(updateData).catch(err => console.warn("VoidAbilitySheet save failed", err));
    };
    const isOurForm = (form) => form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
    sheet._votvChange = (ev) => {
      const form = ev.target?.form ?? ev.target?.closest?.("form");
      if (!isOurForm(form)) return;
      doSubmit(form);
    };
    sheet._votvInput = (ev) => {
      const target = ev.target;
      // Ne autosave-eljünk gépelés közben a név mezőn; így elkerüljük,
      // hogy a név input értéke \"eltűnjön\" egy újrarender után.
      if (target?.name === "name") return;
      // KP (type=number): sok böngészőben nincs megbízható selection → újrarender után az elejére ugrik a kurzor.
      // Mentés: change (blur / spinner) eseménynél, mint más szám mezőknél.
      if (target?.name === "system.kp") return;
      const form = target?.form ?? target?.closest?.("form");
      if (!isOurForm(form)) return;
      clearTimeout(sheet._votvInputDebounce);
      sheet._votvInputDebounce = setTimeout(() => doSubmit(form), 300);
    };
    document.body.addEventListener("change", sheet._votvChange, true);
    document.body.addEventListener("input", sheet._votvInput, true);
  }

  _tearDown(options) {
    document.body.removeEventListener("change", this._votvChange, true);
    document.body.removeEventListener("input", this._votvInput, true);
    if (this._votvProfileClickRoot) {
      this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, true);
      this._votvProfileClickRoot = null;
    } else {
      document.body.removeEventListener("click", this._votvProfileImgClick, true);
    }
    clearTimeout(this._votvInputDebounce);
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
      // Do not actively overwrite the Item name with an empty string; let Foundry keep
      // its existing default name instead. This avoids validation errors when the user
      // changes the ability type before naming the item.
      if (el.name === "name" && typeof value === "string" && value.trim() === "") continue;
      foundry.utils.setProperty(updateData, el.name, value);
    }
    applyAbilityKpZeroRule(updateData, form, this.item);
    return updateData;
  }

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    return enrichVoidAbilitySheetTemplateContext(this.item, context, {
      isEditable: this.isEditable,
      fillCssClassIfMissing: false
    });
  }
}

/**
 * Járműegység / helyiség beágyazott képesség: Foundry megköveteli a Document példányt ItemSheethez,
 * ezért ApplicationV2 + ugyanaz a sablon / DEFAULT_OPTIONS, mint a VoidAbilitySheet.
 */
export class VoidEmbeddedUnitAbilitySheet extends VotvAbilityApplicationV2 {
  _votvVirtualDoc = null;

  constructor(options = {}) {
    super(options);
    this._votvVirtualDoc = options?.document ?? null;
  }

  static PARTS = foundry.utils.mergeObject({}, VoidAbilitySheet.PARTS ?? {}, { inplace: false });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject({}, VoidAbilitySheet.DEFAULT_OPTIONS ?? {}, { inplace: false });

  get item() {
    return this._votvVirtualDoc ?? this.document ?? this.options?.document;
  }

  get isEditable() {
    return game.user.isGM || !!this.item?.isOwner;
  }

  get title() {
    return this.item?.name ?? "Képesség";
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

  async render(force = false, options = {}) {
    return abilitySheetRenderPreservingFocus(this, (f, o) => super.render(f, o), force, options);
  }

  _attachFrameListeners(html) {
    const DSProto = foundry.applications.sheets.DocumentSheetV2?.prototype;
    try {
      if (DSProto?._attachFrameListeners) DSProto._attachFrameListeners.call(this, html);
      else super._attachFrameListeners(html);
    } catch (err) {
      console.warn("VoidEmbeddedUnitAbilitySheet DocumentSheet attachFrameListeners", err);
      try {
        super._attachFrameListeners(html);
      } catch (err2) {
        console.warn("VoidEmbeddedUnitAbilitySheet Application attachFrameListeners", err2);
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
    if (this.isEditable) {
      const doSubmit = (form) => {
        if (!form) return;
        const updateData = sheet._getFormDataForUpdate(form);
        if (Object.keys(updateData).length === 0) return;
        const doc = sheet.item;
        doc?.update?.(updateData).catch((err) => console.warn("VoidEmbeddedUnitAbilitySheet save failed", err));
      };
      const isOurForm = (form) =>
        form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
      sheet._votvChange = (ev) => {
        const form = ev.target?.form ?? ev.target?.closest?.("form");
        if (!isOurForm(form)) return;
        doSubmit(form);
      };
      sheet._votvInput = (ev) => {
        const target = ev.target;
        if (target?.name === "name") return;
        if (target?.name === "system.kp") return;
        // ApplicationV2 + újrarender: a leírás debounced mentése gyakran elveszti a textarea kurzort;
        // mentés blur-nál (change), a sima képességlap ItemSheetV2 útvonalon marad az input debounce.
        if (target?.name === "system.description") return;
        const form = target?.form ?? target?.closest?.("form");
        if (!isOurForm(form)) return;
        clearTimeout(sheet._votvInputDebounce);
        sheet._votvInputDebounce = setTimeout(() => doSubmit(form), 300);
      };
      document.body.addEventListener("change", sheet._votvChange, true);
      document.body.addEventListener("input", sheet._votvInput, true);
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
  }

  _tearDown(options) {
    if (this._votvKeydownClose) {
      document.removeEventListener("keydown", this._votvKeydownClose, true);
      this._votvKeydownClose = null;
    }
    if (this._votvChange) document.body.removeEventListener("change", this._votvChange, true);
    if (this._votvInput) document.body.removeEventListener("input", this._votvInput, true);
    if (this._votvProfileClickRoot) {
      this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, true);
      this._votvProfileClickRoot = null;
    } else {
      document.body.removeEventListener("click", this._votvProfileImgClick, true);
    }
    clearTimeout(this._votvInputDebounce);
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
      if (el.name === "name" && typeof value === "string" && value.trim() === "") continue;
      foundry.utils.setProperty(updateData, el.name, value);
    }
    applyAbilityKpZeroRule(updateData, form, this.item);
    return updateData;
  }

  async _prepareContext(options) {
    let context = {};
    try {
      context = (await super._prepareContext(options)) ?? {};
    } catch {
      context = {};
    }
    const item = this.item ?? { name: "—", img: "", system: { kind: "passive", kp: 0, description: "" } };
    return enrichVoidAbilitySheetTemplateContext(item, context, {
      isEditable: this.isEditable,
      fillCssClassIfMissing: true
    });
  }
}

