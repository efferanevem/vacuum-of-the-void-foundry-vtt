const { StringField } = foundry.data.fields;

export class TargyDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new StringField({ required: false, blank: true, initial: "" }),
      quantity: new StringField({ required: false, blank: true, initial: "1" })
    };
  }
}
