const { NumberField, SchemaField } = foundry.data.fields;
import { BaseActorDataModel } from "./base-actor.mjs";

export class KarakterDataModel extends BaseActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new SchemaField({
        body: new NumberField({ required: true, integer: true, min: 3, max: 18, initial: 10 }),
        mind: new NumberField({ required: true, integer: true, min: 3, max: 18, initial: 10 }),
        soul: new NumberField({ required: true, integer: true, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
