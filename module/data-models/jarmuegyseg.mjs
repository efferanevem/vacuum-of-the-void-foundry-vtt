const { NumberField, StringField, SchemaField, ArrayField, ObjectField } = foundry.data.fields;

/** Járműegység item adatmodell. */
export class JarmuEgysegDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new NumberField({ required: true, integer: true, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new SchemaField({
        max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        value: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
      }),
      /** Képességek: régi UUID lista; új behúzások: beágyazott másolatok (külön Item nélkül). */
      abilities: new SchemaField({
        items: new ArrayField(
          new StringField({ required: false, blank: true }),
          { required: false, initial: [] }
        ),
        embedded: new ArrayField(new ObjectField(), { required: false, initial: [] })
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new StringField({ required: false, blank: true, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new StringField({ required: false, blank: true, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new StringField({ required: false, blank: true, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new StringField({ required: false, blank: true, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new StringField({ required: false, blank: true, initial: "" })
    };
  }
}

