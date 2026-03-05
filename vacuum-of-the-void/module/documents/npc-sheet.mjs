export class VoidNpcSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  static PARTS = foundry.utils.mergeObject(
    super.PARTS ?? {},
    {
      content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
    },
    { inplace: false }
  );

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
      template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
      width: 900,
      minWidth: 800,
      height: 720,
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
}
