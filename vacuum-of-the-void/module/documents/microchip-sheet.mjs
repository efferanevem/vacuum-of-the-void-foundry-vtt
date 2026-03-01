export class VoidMicrochipSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
    template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
    width: 500,
    minWidth: 500,
    height: 420,
    form: { submitOnChange: true }
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

  async _prepareContext(options) {
    let context = await super._prepareContext(options);
    context = context ?? {};
    context.system = this.item.system;
    return context;
  }
}

