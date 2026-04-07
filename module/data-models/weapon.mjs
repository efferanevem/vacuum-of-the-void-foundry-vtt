const { BooleanField, NumberField, StringField } = foundry.data.fields;

export class WeaponDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new BooleanField({ required: false, initial: false }),
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
      quantity: new StringField({ required: false, blank: true, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new StringField({ required: false, blank: true, initial: "grenadeUse" })
    };
  }
}
