const { NumberField, StringField, SchemaField, ArrayField, ObjectField } = foundry.data.fields;

/** Helyiség item adatmodell (Bázis helyiségei): szint, képességek, raktár, veszély %. */
export class HelyisegDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new NumberField({ required: true, integer: true, min: 0, max: 3, initial: 0 }),
      /** Képességek: régi UUID lista; új behúzások: beágyazott másolatok (külön Item nélkül). */
      abilities: new SchemaField({
        items: new ArrayField(
          new StringField({ required: false, blank: true }),
          { required: false, initial: [] }
        ),
        embedded: new ArrayField(new ObjectField(), { required: false, initial: [] })
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new StringField({ required: false, blank: true, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new StringField({ required: false, blank: true, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new StringField({ required: false, blank: true, initial: "" })
    };
  }
}
