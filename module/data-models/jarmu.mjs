const { SchemaField, StringField, NumberField } = foundry.data.fields;
import { BaseActorDataModel } from "./base-actor.mjs";

/** Jármű actor adatmodell: identity (név, méret), combat (speed, defense, givenProtection), vehicle (type, toolsRange). */
export class JarmuDataModel extends BaseActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new SchemaField({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new StringField({ required: false, blank: true, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new StringField({ required: false, blank: true, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new NumberField({
          required: false,
          integer: true,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
