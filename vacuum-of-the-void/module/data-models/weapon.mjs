const { NumberField, SchemaField, StringField } = foundry.data.fields;

export class WeaponDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new StringField({
        required: true,
        blank: false,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new StringField({
        required: false,
        blank: true,
        initial: ""
      }),
      range: new SchemaField({
        short: new NumberField({ required: false, integer: false, min: 0, initial: 0 }),
        long: new NumberField({ required: false, integer: false, min: 0, initial: 0 })
      }),
      cost: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
      maxUpgrade: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
      upgradeCost: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
      skillDifficulty: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
      special: new StringField({ required: false, blank: true, initial: "" }),
      quantity: new NumberField({ required: false, integer: true, min: 0, initial: 1 })
    };
  }
}
