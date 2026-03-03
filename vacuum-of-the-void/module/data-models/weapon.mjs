const { NumberField, StringField } = foundry.data.fields;

export class WeaponDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new StringField({
        required: true,
        blank: false,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new StringField({
        required: true,
        blank: false,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new StringField({ required: false, blank: true, initial: "" }),
      damage: new StringField({
        required: false,
        blank: true,
        initial: ""
      }),
      range: new StringField({ required: false, blank: true, initial: "" }),
      special: new StringField({ required: false, blank: true, initial: "" }),
      quantity: new NumberField({ required: false, integer: true, min: 0, initial: 1 })
    };
  }
}
