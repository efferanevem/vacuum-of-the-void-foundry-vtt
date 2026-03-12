import { BaseActorDataModel } from "./base-actor.mjs";
const { SchemaField, StringField, NumberField, ArrayField } = foundry.data.fields;

/** Vállalkozás actor adatmodell. */
export class VallalkozasDataModel extends BaseActorDataModel {
  static defineSchema() {
    const base = super.defineSchema();
    return {
      ...base,
      vallalkozas: new SchemaField({
        /** Vállalkozás fajtája (Szolgáltatások, Gyártás, Milícia). */
        kind: new StringField({ required: false, blank: true, initial: "" }),
        /** Vállalkozás szintje (legalább 1). */
        level: new NumberField({ required: false, integer: true, min: 1, initial: 1 }),
        /** Alkalmazottak aktuális száma. */
        employeesCurrent: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        /** Alkalmazottak maximuma. */
        employeesMax: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        /** Szint által adott bónuszok (szabad szöveg). */
        levelBonuses: new StringField({ required: false, blank: true, initial: "" }),
        /** Szolgáltatás típusa (Szolgáltatások fajtánál). */
        servicesType: new StringField({ required: false, blank: true, initial: "" }),
        /** Szolgáltatás bevétel / idő: numerikus rész (cr). */
        servicesIncomeAmount: new NumberField({ required: false, integer: false, initial: 0 }),
        /** Szolgáltatás bevétel / idő: időegység szövege (pl. nap, hét, hónap). */
        servicesIncomePeriod: new StringField({ required: false, blank: true, initial: "" }),
        /** Marketing típusa (Szolgáltatások fajtánál). */
        marketingType: new StringField({ required: false, blank: true, initial: "" }),
        /** Marketing ára / hét (cr). */
        marketingCostPerWeek: new NumberField({ required: false, integer: false, initial: 0 }),
        /** Marketing profit (%). */
        marketingProfitPercent: new NumberField({ required: false, integer: false, initial: 0 }),
        /** Alkalmazottak táblázat: Típus, Szint, Szám, Bónusz. */
        employees: new ArrayField(
          new SchemaField({
            type: new StringField({ required: false, blank: true, initial: "" }),
            level: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            count: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            bonus: new StringField({ required: false, blank: true, initial: "" })
          }),
          { required: false, initial: [] }
        ),
        /** Gyártási specializáció (Gyártás fajtánál). */
        manufacturingSpecialization: new StringField({ required: false, blank: true, initial: "" }),
        /** Gyártható dolgok listája (többsoros szabad szöveg). */
        manufacturingProducts: new StringField({ required: false, blank: true, initial: "" }),
        /** Gyártósor táblázat: Gyártott Termék, Szám, Gyártási Idő. */
        productionLines: new ArrayField(
          new SchemaField({
            product: new StringField({ required: false, blank: true, initial: "" }),
            count: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            time: new StringField({ required: false, blank: true, initial: "" })
          }),
          { required: false, initial: [] }
        ),
        /** Milícia: Erő Pont. */
        militiaPower: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        /** Milícia: Morál Pont. */
        militiaMorale: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        /** Milícia küldetések táblázat: Helyszín, Nehézség, Rizikó, Zsákmány. */
        militiaMissions: new ArrayField(
          new SchemaField({
            location: new StringField({ required: false, blank: true, initial: "" }),
            /** d100 eredeti dobás, amiből a nehézség számolódik (base * level). */
            baseRoll: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            difficulty: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            risk: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            loot: new StringField({ required: false, blank: true, initial: "" })
          }),
          { required: false, initial: [] }
        )
      })
    };
  }
}

