const { StringField } = foundry.data.fields;

export class EgyebDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new StringField({ required: false, blank: true, initial: "" })
    };
  }
}
