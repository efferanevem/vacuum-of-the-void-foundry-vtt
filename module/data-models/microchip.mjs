const { NumberField, StringField } = foundry.data.fields;

export class MicrochipDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new StringField({
        required: true,
        blank: false,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new StringField({
        required: false,
        blank: true,
        initial: ""
      }),
      cost: new NumberField({ required: false, integer: true, min: 0, initial: 1250 }),
      replaceCost: new NumberField({ required: false, integer: true, min: 0, initial: 3 }),
      quantity: new NumberField({ required: false, integer: true, min: 0, initial: 1 })
    };
  }
}
