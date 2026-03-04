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

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    if (!this.isEditable) return;
    const sheet = this;
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
    return updateData;
  }

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    context.item = this.item;
    context.system = this.item.system;
    return context;
  }
}

