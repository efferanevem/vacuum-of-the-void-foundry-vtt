const { SchemaField, StringField, NumberField } = foundry.data.fields;
import { BaseActorDataModel } from "./base-actor.mjs";

/** Bázis actor adatmodell: jelenleg megegyezik a Jármű adatmodellel (identity, combat, vehicle). */
export class BazisDataModel extends BaseActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new SchemaField({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new StringField({ required: false, blank: true, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new StringField({ required: false, blank: true, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
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

