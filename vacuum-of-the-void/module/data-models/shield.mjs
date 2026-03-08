const { BooleanField, StringField } = foundry.data.fields;

export class ShieldDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new BooleanField({ required: false, initial: false }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new StringField({ required: false, blank: true, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new StringField({ required: false, blank: true, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new StringField({ required: false, blank: true, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new StringField({ required: false, blank: true, initial: "" })
    };
  }
}
