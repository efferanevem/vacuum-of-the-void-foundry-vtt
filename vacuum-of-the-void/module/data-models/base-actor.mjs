const { HTMLField, NumberField, SchemaField, StringField, BooleanField, ArrayField } = foundry.data.fields;

export class BaseActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new SchemaField({
        name: new StringField({ required: false, blank: true, initial: "" }),
        player: new StringField({ required: false, blank: true, initial: "" }),
        level: new NumberField({ required: false, integer: true, min: 1, initial: 1 }),
        species: new StringField({ required: false, blank: true, initial: "" }),
        assignment: new StringField({ required: false, blank: true, initial: "" }),
        subAssignment: new StringField({ required: false, blank: true, initial: "" }),
        background: new StringField({ required: false, blank: true, initial: "" }),
        languages: new StringField({ required: false, blank: true, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new StringField({ required: false, blank: true, initial: "" })
      }),
      resources: new SchemaField({
        health: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        hitLocations: new SchemaField({
          head: new SchemaField({
            value: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            box1: new BooleanField({ required: false, initial: false }),
            box2: new BooleanField({ required: false, initial: false }),
            box3: new BooleanField({ required: false, initial: false })
          }),
          torso: new SchemaField({
            value: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            box1: new BooleanField({ required: false, initial: false }),
            box2: new BooleanField({ required: false, initial: false }),
            box3: new BooleanField({ required: false, initial: false })
          }),
          arms: new SchemaField({
            value: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            box1: new BooleanField({ required: false, initial: false }),
            box2: new BooleanField({ required: false, initial: false }),
            box3: new BooleanField({ required: false, initial: false })
          }),
          legs: new SchemaField({
            value: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
            box1: new BooleanField({ required: false, initial: false }),
            box2: new BooleanField({ required: false, initial: false }),
            box3: new BooleanField({ required: false, initial: false })
          })
        }),
        currentHealth: new SchemaField({
          head: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
          torso: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
          arms: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
          legs: new NumberField({ required: false, integer: true, min: 0, initial: 0 })
        }),
        healthStatus: new SchemaField({
          head: new NumberField({ required: false, integer: true, min: 0, max: 3, initial: 0 }),
          torso: new NumberField({ required: false, integer: true, min: 0, max: 3, initial: 0 }),
          arms: new NumberField({ required: false, integer: true, min: 0, max: 3, initial: 0 }),
          legs: new NumberField({ required: false, integer: true, min: 0, max: 3, initial: 0 })
        }),
        stress: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        money: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        morale: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        kp2: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        kp3: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        // Karakterlap: 6 KP ikon külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált)
        kpDot1: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 }),
        kpDot2: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 }),
        kpDot3: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 }),
        kpDot4: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 }),
        kpDot5: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 }),
        kpDot6: new NumberField({ required: false, integer: true, min: 0, max: 1, initial: 0 })
      }),
      combat: new SchemaField({
        defense: new NumberField({ required: false, integer: false, initial: 0 }),
        defenseBonus: new NumberField({ required: false, integer: false, initial: 0 }),
        givenProtection: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        speed: new NumberField({ required: false, integer: false, initial: 0 }),
        speedBonus: new NumberField({ required: false, integer: false, initial: 0 }),
        givenSpeed: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new NumberField({ required: false, integer: true, initial: undefined })
      }),
      skills: new SchemaField({
        deception: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        medicalCare: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        endurance: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        perception: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        cooking: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new StringField({ required: false, blank: true, initial: "" }),
        quickThinking2: new StringField({ required: false, blank: true, initial: "" }),
        quickThinking3: new StringField({ required: false, blank: true, initial: "" }),
        combatTraining: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        vehicleOperation: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        grenadeUse: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        lexicalKnowledge: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        stealth: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        firearms: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        intimidation: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        persuasion: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        memory: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        mentalStrength: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        luck: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        languages: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        technicalKnowledge: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
        music: new NumberField({ required: false, integer: true, min: 0, initial: 0 })
      }),
      weapons: new SchemaField({
        slotOrder: new StringField({ required: false, blank: true, initial: "slot1" }),
        slot1: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot2: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot3: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot4: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot5: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot6: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot7: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot8: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot9: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        }),
        slot10: new SchemaField({
          name: new StringField({ required: false, blank: true, initial: "" }),
          bonus: new StringField({ required: false, blank: true, initial: "" }),
          damage: new StringField({ required: false, blank: true, initial: "" }),
          itemId: new StringField({ required: false, blank: true, initial: "" })
        })
      }),
      gear: new SchemaField({
        microchips: new SchemaField({
          slot1: new SchemaField({
            itemId: new StringField({ required: false, blank: true, initial: "" }),
            name: new StringField({ required: false, blank: true, initial: "" }),
            active: new BooleanField({ required: false, initial: false })
          }),
          slot2: new SchemaField({
            itemId: new StringField({ required: false, blank: true, initial: "" }),
            name: new StringField({ required: false, blank: true, initial: "" }),
            active: new BooleanField({ required: false, initial: false })
          }),
          slot3: new SchemaField({
            itemId: new StringField({ required: false, blank: true, initial: "" }),
            name: new StringField({ required: false, blank: true, initial: "" }),
            active: new BooleanField({ required: false, initial: false })
          })
        }),
        equipment: new StringField({ required: false, blank: true, initial: "" }),
        armor: new ArrayField(
          new SchemaField({
            name: new StringField({ required: false, blank: true, initial: "" }),
            protectionBonus: new StringField({ required: false, blank: true, initial: "" }),
            speedPenalty: new StringField({ required: false, blank: true, initial: "" }),
            level: new StringField({ required: false, blank: true, initial: "" }),
            other: new StringField({ required: false, blank: true, initial: "" })
          }),
          { required: false, initial: [] }
        ),
        generalItems: new ArrayField(
          new SchemaField({
            name: new StringField({ required: false, blank: true, initial: "" }),
            quantity: new NumberField({ required: false, integer: true, min: 0, initial: 1 }),
            description: new StringField({ required: false, blank: true, initial: "" })
          }),
          { required: false, initial: [] }
        )
      }),
      abilities: new SchemaField({
        faji: new SchemaField({
          itemId: new StringField({ required: false, blank: true, initial: "" }),
          name: new StringField({ required: false, blank: true, initial: "" })
        }),
        hatter: new SchemaField({
          itemId: new StringField({ required: false, blank: true, initial: "" }),
          name: new StringField({ required: false, blank: true, initial: "" })
        }),
        passive: new SchemaField({
          items: new ArrayField(
            new StringField({ required: false, blank: true }),
            { required: false, initial: [] }
          )
        }),
        active: new SchemaField({
          items: new ArrayField(
            new StringField({ required: false, blank: true }),
            { required: false, initial: [] }
          )
        })
      }),
      notes: new SchemaField({
        biography: new HTMLField({ required: false, blank: true })
      })
    };
  }
}
