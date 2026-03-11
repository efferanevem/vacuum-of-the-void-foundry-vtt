const { NumberField, StringField } = foundry.data.fields;

export class AbilityDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new StringField({
        required: true,
        blank: false,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new StringField({
        required: false,
        blank: true,
        initial: ""
      }),
      kp: new NumberField({
        required: false,
        integer: true,
        min: 0,
        initial: 0
      })
    };
  }
}

