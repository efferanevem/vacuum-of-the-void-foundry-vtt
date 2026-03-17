const { StringField, ArrayField } = foundry.data.fields;

/** Csomag item adatmodell – más itemek hivatkozásait tárolja. */
export class CsomagDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szabad szöveges leírás. */
      description: new StringField({ required: false, blank: true, initial: "" }),
      /**
       * A csomag tartalma: Item UUID-k vagy id-k listája.
       * (Fegyver, Páncél, MikroChip, Tárgy típusú itemekre mutathat.)
       */
      contents: new ArrayField(
        new StringField({ required: false, blank: true }),
        { required: false, initial: [] }
      )
    };
  }
}

