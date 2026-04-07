const { NumberField, StringField } = foundry.data.fields;

export class AbilityDataModel extends foundry.abstract.TypeDataModel {
  static migrateData(source, migrationData) {
    const kind = (source.kind ?? "passive").toString();
    if (kind !== "active" && kind !== "module") source.kp = 0;
    return super.migrateData(source, migrationData);
  }

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

