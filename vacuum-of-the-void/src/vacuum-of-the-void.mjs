import { BaseActorDataModel, KarakterDataModel, JarmuDataModel, BazisDataModel, VallalkozasDataModel, WeaponDataModel, ShieldDataModel, MicrochipDataModel, AbilityDataModel, TargyDataModel, EgyebDataModel, CsomagDataModel, JarmuEgysegDataModel, HelyisegDataModel } from "../module/data-models/index.mjs";
import { VoidKarakterSheet, VoidNpcSheet, VoidJarmuSheet, VoidBazisSheet, VoidVallalkozasSheet, VoidWeaponSheet, VoidShieldSheet, VoidMicrochipSheet, VoidAbilitySheet, VoidTargySheet, VoidEgyebSheet, VoidCsomagSheet, VoidJarmuEgysegSheet, VoidHelyisegSheet } from "../module/documents.mjs";

const VOTV_DEFAULT_SCENE_BG = "systems/vacuum-of-the-void/assets/void-bg.jpg";

/** NPC méret (system.identity.size) → token grid méret. Apró = 0.5×0.5, Nagy = 2×2, Óriási = 3×3, egyéb = 1×1. */
function npcTokenGridSizeFromMéret(size) {
  if (size === "Apró") return 0.5;
  if (size === "Nagy") return 2;
  if (size === "Óriási") return 3;
  return 1;
}

// Expose a system namespace following the tutorial style.
Hooks.once("init", () => {
  console.log("Vacuum of the Void | Initializing system");

  game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  };

  CONFIG.Actor.dataModels ??= {};
  CONFIG.Actor.dataModels.Karakter = KarakterDataModel;
  CONFIG.Actor.dataModels.Npc = BaseActorDataModel;
  CONFIG.Actor.dataModels.Jarmu = JarmuDataModel;
  CONFIG.Actor.dataModels.Bazis = BazisDataModel;
  CONFIG.Actor.dataModels.Vallalkozas = VallalkozasDataModel;

  // Register item data models (weapon/ability = angol aliasok régi/importált adatokhoz, hogy ne legyen "type is not a valid type" hiba)
  CONFIG.Item.dataModels ??= {};
  CONFIG.Item.dataModels.Fegyver = WeaponDataModel;
  CONFIG.Item.dataModels.weapon = WeaponDataModel;
  CONFIG.Item.dataModels.Pancel = ShieldDataModel;
  CONFIG.Item.dataModels.MikroChip = MicrochipDataModel;
  CONFIG.Item.dataModels.Kepesseg = AbilityDataModel;
  CONFIG.Item.dataModels.ability = AbilityDataModel;
  CONFIG.Item.dataModels.Targy = TargyDataModel;
  CONFIG.Item.dataModels.Egyeb = EgyebDataModel;
  CONFIG.Item.dataModels.Csomag = CsomagDataModel;
  CONFIG.Item.dataModels.Jarmuegyseg = JarmuEgysegDataModel;
  CONFIG.Item.dataModels.Helyiseg = HelyisegDataModel;

  // Trackable attributes for token bars – csak egy sáv (Életerő), mint az NPC lapon; bar2 ne jelenjen meg
  CONFIG.Actor.trackableAttributes ??= {};
  CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  };
  CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  };

  CONFIG.Actor.typeLabels ??= {};
  CONFIG.Actor.typeLabels.Karakter = "Karakter";
  CONFIG.Actor.typeLabels.Npc = "NPC";
  CONFIG.Actor.typeLabels.Jarmu = "Jármű";
  CONFIG.Actor.typeLabels.Bazis = "Bázis";
  CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás";

  // Initiative: manuális beírás – formula kell, hogy az initiative oszlop megjelenjen
  CONFIG.Combat.initiative ??= {};
  CONFIG.Combat.initiative.formula = "1d20";

  CONFIG.Item.typeLabels ??= {};
  CONFIG.Item.typeLabels.Fegyver = "Fegyver";
  CONFIG.Item.typeLabels.weapon = "Fegyver";
  CONFIG.Item.typeLabels.Pancel = "Páncél";
  CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip";
  CONFIG.Item.typeLabels.Kepesseg = "Képesség";
  CONFIG.Item.typeLabels.ability = "Képesség";
  CONFIG.Item.typeLabels.Targy = "Tárgy";
  CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
  CONFIG.Item.typeLabels.Csomag = "Csomag";
  CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
  CONFIG.Item.typeLabels.Helyiseg = "Helyiség";

  // Item típusok alapértelmezett ikonjai (amit a Foundry használ, ha nincs img megadva).
  CONFIG.Item.typeIcons ??= {};

  // Status effectek: tokenre kattintva / Active Effectsnél választhatók, mindegyiknek id + megjelenített név + ikon (img)
  const VOTV_STATUS = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${VOTV_STATUS}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${VOTV_STATUS}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${VOTV_STATUS}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${VOTV_STATUS}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${VOTV_STATUS}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${VOTV_STATUS}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${VOTV_STATUS}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${VOTV_STATUS}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${VOTV_STATUS}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${VOTV_STATUS}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${VOTV_STATUS}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${VOTV_STATUS}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${VOTV_STATUS}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${VOTV_STATUS}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${VOTV_STATUS}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${VOTV_STATUS}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${VOTV_STATUS}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${VOTV_STATUS}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${VOTV_STATUS}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${VOTV_STATUS}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${VOTV_STATUS}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${VOTV_STATUS}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${VOTV_STATUS}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${VOTV_STATUS}/fullcover_icon.svg` }
  ];

  foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2);
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidKarakterSheet, {
    types: ["Karakter"],
    makeDefault: true,
    label: "VOTV.KarakterSheet"
  });
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidNpcSheet, {
    types: ["Npc"],
    makeDefault: true,
    label: "VOTV.NpcSheet"
  });
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidJarmuSheet, {
    types: ["Jarmu"],
    makeDefault: true,
    label: "VOTV.JarmuSheet"
  });
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidBazisSheet, {
    types: ["Bazis"],
    makeDefault: true,
    label: "VOTV.BazisSheet"
  });
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidVallalkozasSheet, {
    types: ["Vallalkozas"],
    makeDefault: true,
    label: "VOTV.VallalkozasSheet"
  });

  // Register item sheets (Fegyver + weapon alias, Kepesseg + ability alias)
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidWeaponSheet, {
    types: ["Fegyver", "weapon"],
    makeDefault: true,
    label: "VOTV.FegyverSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidShieldSheet, {
    types: ["Pancel"],
    makeDefault: true,
    label: "VOTV.PancelSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidMicrochipSheet, {
    types: ["MikroChip"],
    makeDefault: true,
    label: "VOTV.MikroChipSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidAbilitySheet, {
    types: ["Kepesseg", "ability"],
    makeDefault: true,
    label: "VOTV.KepessegSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidTargySheet, {
    types: ["Targy"],
    makeDefault: true,
    label: "VOTV.TargySheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidEgyebSheet, {
    types: ["Egyeb"],
    makeDefault: true,
    label: "VOTV.EgyebSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidCsomagSheet, {
    types: ["Csomag"],
    makeDefault: true,
    label: "VOTV.CsomagSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidJarmuEgysegSheet, {
    types: ["Jarmuegyseg"],
    makeDefault: true,
    label: "VOTV.JarmuEgysegSheet"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidHelyisegSheet, {
    types: ["Helyiseg"],
    makeDefault: true,
    label: "VOTV.HelyisegSheet"
  });

  // Bázis és Vállalkozás: ne legyen látható kép – üres/transzparens asset (a listában se default ikon)
  const VOTV_BAZIS_BLANK_IMG = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (document, data, _options) => {
    if (data?.type === "Bazis" || data?.type === "Vallalkozas") data.img = VOTV_BAZIS_BLANK_IMG;
  });
  Hooks.on("preUpdateActor", (document, change, _options) => {
    if ((document?.type === "Bazis" || document?.type === "Vallalkozas") && Object.prototype.hasOwnProperty.call(change ?? {}, "img")) {
      change.img = VOTV_BAZIS_BLANK_IMG;
    }
  });
  Hooks.on("ready", () => {
    const blank = VOTV_BAZIS_BLANK_IMG;
    const bazisNeedBlank = (game.actors?.contents ?? []).filter(
      (a) =>
        (a.type === "Bazis" || a.type === "Vallalkozas") &&
        (a.img ?? "").toString().trim() !== blank
    );
    if (bazisNeedBlank.length) bazisNeedBlank.forEach((a) => a.update({ img: blank }).catch(() => {}));
  });

  // Egyéb Információ itemek: alapértelmezett kép ugyanaz az üres asset, mint a bázisnál,
  // hogy az Items menüben se jelenjen meg a Foundry bag ikon, ha nincs saját képük.
  Hooks.on("preCreateItem", (document, data, _options) => {
    if (data?.type === "Egyeb") {
      data.img = VOTV_BAZIS_BLANK_IMG;
    }
  });
  Hooks.on("preUpdateItem", (document, change, _options) => {
    if (document?.type === "Egyeb" && Object.prototype.hasOwnProperty.call(change ?? {}, "img")) {
      // Egyéb mindig üres ikont használ.
      change.img = VOTV_BAZIS_BLANK_IMG;
    }
  });
  Hooks.on("ready", () => {
    const blank = VOTV_BAZIS_BLANK_IMG;
    const allItems = game.items?.contents ?? [];

    // Egyeb: mindig blank ikon legyen (mint bázisnál).
    const egyebNeedBlank = allItems.filter(
      (i) =>
        i.type === "Egyeb" &&
        (i.img ?? "").toString().trim() !== blank
    );
    if (egyebNeedBlank.length) {
      egyebNeedBlank.forEach((i) => i.update({ img: blank }).catch(() => {}));
    }

    // Fegyvereknél nem nyúlunk az img-hez – marad a Foundry alap viselkedése vagy a kézzel beállított ikon.
  });

  // Karakter: összesített sebesség ≤ 0 → Mozgásképtelen automatikus; > 0 → eltávolítjuk az automatikus Mozgásképtelent.
  // setTimeout + gyűjteményből olvasás: a merge/effect lista biztosan naprakész (pl. láb 0→1 után).
  Hooks.on("updateActor", (actor, _changed, _options, _userId) => {
    if (actor?.type !== "Karakter" || !actor?.id) return;
    const actorId = actor.id;
    setTimeout(() => {
      const doc = game.actors?.get(actorId);
      if (!doc || doc.type !== "Karakter") return;
      const totalRaw = VoidKarakterSheet.getTotalSpeedRaw(doc);
      const ourEffect = doc.effects?.find((e) => e.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === true);
      if (totalRaw <= 0 && !ourEffect) {
        const immobilizedIcon = CONFIG.statusEffects?.find((s) => s.id === "immobilized")?.img ?? "";
        doc.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: immobilizedIcon,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: true } },
          origin: doc.uuid
        }]).then(() => {
          // Token overlay frissítése: az actort képviselő tokenek újrarajzolása
          const placeables = canvas.tokens?.placeables ?? [];
          for (const token of placeables) {
            if (token?.document?.actorId === actorId && typeof token.draw === "function") token.draw();
          }
        }).catch((err) => console.warn("Vacuum of the Void | Immobilized effect create failed:", err));
      } else if (totalRaw > 0 && ourEffect) {
        ourEffect.delete().then(() => {
          const placeables = canvas.tokens?.placeables ?? [];
          for (const token of placeables) {
            if (token?.document?.actorId === actorId && typeof token.draw === "function") token.draw();
          }
        }).catch((err) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", err));
      }
    }, 0);
  });

  // Ha egy actort frissítenek, a nyitott VoidKarakterSheet lapok újrarajzolódjanak. Ne újrarajzoljunk, ha
  // bármelyik lapon input/textarea van fókuszban (kurzor + görgetés maradjon), és ne a lapot, ami
  // épp mentett (blur save), hogy ne tekerjen fel.
const UPDATE_ACTOR_SKIP_RENDER_MS = 500;
Hooks.on("updateActor", (actor, changed, _options, _userId) => {
  const actorId = actor?.id;
  if (!actorId) return;

    // Karakter/NPC kezdeményezés (initiativeResult) → Combat Tracker initiative mező szinkron
    if ((actor.type === "Karakter" || actor.type === "Npc") && changed?.system?.combat && "initiativeResult" in changed.system.combat) {
      const value = Number(actor.system?.combat?.initiativeResult);
      const initiative = Number.isFinite(value) ? value : 0;
      const combat = game.combat;
      if (combat) {
        const combatants = combat.combatants?.contents ?? Array.from(combat.combatants ?? []);
        for (const comb of combatants) {
          if (comb.actor?.id === actorId || comb.actorId === actorId) {
            combat.updateEmbeddedDocuments("Combatant", [{ _id: comb.id, initiative }]).catch(() => {});
            break;
          }
        }
      }
    }

    // NPC: ha a méret (system.identity.size) változott, prototype token 1×1 / 2×2 / 3×3
    if (actor.type === "Npc" && changed?.system?.identity && "size" in changed.system.identity) {
      const gridSize = npcTokenGridSizeFromMéret(actor.system?.identity?.size);
      actor.update({
        "prototypeToken.width": gridSize,
        "prototypeToken.height": gridSize
      }).catch((err) => console.warn("Vacuum of the Void | NPC token size update failed for", actor.name, err));
    }
    const activeEl = document.activeElement;
    const isInputLike = activeEl && (
      (activeEl.tagName === "INPUT" && activeEl.type !== "checkbox" && activeEl.type !== "radio") ||
      activeEl.tagName === "TEXTAREA" ||
      activeEl.isContentEditable
    );
    const appsToConsider = [];
    const doc = game.actors?.get(actorId);
    if (doc?.apps) appsToConsider.push(...Array.from(doc.apps));
    const windows = Object.values(ui?.windows ?? {});
    for (const app of windows) {
      if (app.document?.id !== actorId || app.document?.documentName !== "Actor") continue;
      const name = app.constructor?.name;
      if (
        name !== "VoidKarakterSheet" &&
        name !== "VoidJarmuSheet" &&
        name !== "VoidBazisSheet" &&
        name !== "VoidVallalkozasSheet"
      ) {
        continue;
      }
      if (!appsToConsider.includes(app)) appsToConsider.push(app);
    }
    const anySheetHasFocusedInput = isInputLike && appsToConsider.some((app) => {
      const root = app?.form ?? app?.element;
      return root && root.contains(activeEl);
    });
    if (anySheetHasFocusedInput) return;
    const lastBlur = game.votv?._lastKarakterSheetBlurSave;
    const skipRenderAppId = lastBlur && (Date.now() - lastBlur.at) < UPDATE_ACTOR_SKIP_RENDER_MS ? lastBlur.appId : null;
    setTimeout(() => {
      for (const app of appsToConsider) {
        if (!app?.rendered || typeof app.render !== "function") continue;
        if (app.id === skipRenderAppId) continue;
        app.render(true);
      }
    }, 0);
  });

  // Ha egy Karakterhez tartozó Fegyver itemet frissítenek, és az be van rakva valamelyik slotba,
  // tükrözzük az új adatokat a system.weapons.* slot mezőkbe is, hogy a felső Fegyverek szekció mindig naprakész legyen.
  Hooks.on("updateItem", (item, _changed, _options, _userId) => {
    const actor = item?.parent;
    if (!actor || actor.documentName !== "Actor" || actor.type !== "Karakter") return;
    if (item.type !== "Fegyver") return;
    const weapons = actor.system?.weapons ?? {};
    const updates = {};
    for (const [key, slotData] of Object.entries(weapons)) {
      if (!key.startsWith("slot")) continue;
      const slotItemId = (slotData?.itemId ?? "").trim();
      if (!slotItemId || slotItemId !== item.id) continue;
      updates[`system.weapons.${key}.name`] = item.name ?? "";
      updates[`system.weapons.${key}.damage`] = item.system?.damage ?? "";
      updates[`system.weapons.${key}.bonus`] = item.system?.bonus ?? "";
    }
    if (Object.keys(updates).length) actor.update(updates);
  });

  // Csomag: compendiumból behúzáskor a contents elemeit embedeljük az actorba,
  // hogy a mennyiség/egyéb módosítás ne a compendium itemet változtassa.
  Hooks.on("createItem", async (item, _options, _userId) => {
    try {
      if (!item || item.type !== "Csomag") return;
      const actor = item.parent;
      if (!actor || actor.documentName !== "Actor") return;

      const SYSTEM_NAMESPACE = game.votv?.systemId ?? "vacuum-of-the-void";
      const already = item.getFlag?.(SYSTEM_NAMESPACE, "_contentsEmbedded");
      const sys = item.system ?? {};
      const refs = Array.isArray(sys.contents) ? sys.contents : [];
      const hasEncodedQtyRefs = refs.some((r) => typeof r === "string" && r.includes("|"));
      // Ha a flag már be van állítva, attól még lehet, hogy a contents továbbra is |qty= kódolt refeket tartalmaz.
      // Ilyenkor újra embedeljük, hogy a mennyiség szerkeszthető legyen actor-szinten.
      if (already === true && !hasEncodedQtyRefs) return;
      if (!refs.length) return;

      const parseEncodedContentsRef = (refStr) => {
        if (typeof refStr !== "string") return { baseRef: "", qtyMul: 1 };
        const [baseRef, ...parts] = refStr.split("|");
        let qtyMul = 1;
        for (const p of parts) {
          const m = p.match(/^qty=(.+)$/);
          if (!m) continue;
          const n = Number.parseInt(m[1], 10);
          if (Number.isFinite(n) && n > 0) qtyMul = n;
        }
        return { baseRef, qtyMul };
      };

      // Összegyűjtjük a qty-t baseRef szerint, és egy darab embedded itemet hozunk létre.
      const qtyByBaseRef = new Map();
      for (const ref of refs) {
        const { baseRef, qtyMul } = parseEncodedContentsRef(ref);
        if (!baseRef) continue;
        qtyByBaseRef.set(baseRef, (qtyByBaseRef.get(baseRef) ?? 0) + qtyMul);
      }
      if (!qtyByBaseRef.size) return;

      const embeddedItemsData = [];
      const embeddedUuids = [];

      // Bármilyen forrásból feloldott (compendium vagy világ item) tartalmakat klónozunk az actorba,
      // hogy a mennyiség/egyéb szerkesztés ne a globális/compendium példányt módosítsa.
      for (const [baseRef, qtyMulSum] of qtyByBaseRef.entries()) {
        if (typeof baseRef !== "string") continue;

        let sourceItem = null;
        // 1) UUID/Compendium ref először próbáljuk
        try {
          sourceItem = await fromUuid(baseRef);
          if (sourceItem?.documentName !== "Item") sourceItem = null;
        } catch {
          sourceItem = null;
        }
        // 2) Ha nem uuid, akkor lehet világ item id
        if (!sourceItem) {
          sourceItem = game.items?.get(baseRef) ?? null;
        }
        // 3) Extra: ha épp actoron belüli már létező item ref (ritkább), akkor azt is engedjük
        if (!sourceItem) {
          sourceItem = actor.items?.get?.(baseRef) ?? null;
        }

        if (!sourceItem || sourceItem.documentName !== "Item") continue;

        // Ha már actorba beágyazott itemről van szó, ne duplikáljuk: frissítsük a quantity-t és használjuk a meglévő uuid-t.
        if (sourceItem.parent?.id === actor.id) {
          const sourceSys = sourceItem.system ?? {};
          const rawQty = (sourceSys.quantity ?? "").toString().trim();
          const baseQtyNum = Number.parseInt(rawQty, 10);
          const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;
          const finalQty = baseQty * qtyMulSum;
          await sourceItem.update({ "system.quantity": String(finalQty) });
          const u = sourceItem.uuid ?? sourceItem.id;
          if (u) embeddedUuids.push(u);
          continue;
        }

        const sourceSys = sourceItem.system ?? {};
        const rawQty = (sourceSys.quantity ?? "").toString().trim();
        const baseQtyNum = Number.parseInt(rawQty, 10);
        const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;
        const finalQty = baseQty * qtyMulSum;

        const nestedSystem = foundry.utils.duplicate(sourceSys);
        nestedSystem.quantity = String(finalQty);

        const nested = {
          name: sourceItem.name,
          type: sourceItem.type ?? "Targy",
          img: sourceItem.img ?? "",
          system: nestedSystem
        };
        embeddedItemsData.push(nested);
      }

      if (!embeddedItemsData.length) return;

      const created = await actor.createEmbeddedDocuments("Item", embeddedItemsData);
      for (const c of created) {
        // createEmbeddedDocuments visszaadhat egyszerű objektumot is, de általában Document.
        const u = c?.uuid ?? c?.id ?? null;
        if (u) embeddedUuids.push(u);
      }

      if (!embeddedUuids.length) return;

      await item.update({ "system.contents": embeddedUuids });
      await item.setFlag(SYSTEM_NAMESPACE, "_contentsEmbedded", true);
    } catch (err) {
      console.warn("Void | Csomag contents embed failed:", err);
    }
  });
});

Hooks.on("ready", () => {
  // Migráció: a már meglévő csomagoknál (actorban), ahol a contents még `|qty=` kódolt refeket tartalmaz,
  // embedeljük a tartalmat, hogy a mennyiség szerkeszthető legyen actor-szinten.
  (async () => {
    try {
      const SYSTEM_NAMESPACE = game.votv?.systemId ?? "vacuum-of-the-void";
      const actors = game.actors?.contents ?? [];
      const hasEncodedQty = (r) => typeof r === "string" && r.includes("|") && r.includes("qty=");

      const parseEncodedContentsRef = (refStr) => {
        if (typeof refStr !== "string") return { baseRef: "", qtyMul: 1 };
        const [baseRef, ...parts] = refStr.split("|");
        let qtyMul = 1;
        for (const p of parts) {
          const m = p.match(/^qty=(.+)$/);
          if (!m) continue;
          const n = Number.parseInt(m[1], 10);
          if (Number.isFinite(n) && n > 0) qtyMul = n;
        }
        return { baseRef, qtyMul };
      };

      const embedCsomagContents = async (csomagItem) => {
        const actor = csomagItem?.parent;
        if (!actor || actor.documentName !== "Actor") return;
        const sys = csomagItem.system ?? {};
        const refs = Array.isArray(sys.contents) ? sys.contents : [];
        if (!refs.some(hasEncodedQty)) return;

        const already = csomagItem.getFlag?.(SYSTEM_NAMESPACE, "_contentsEmbedded");
        if (already === true) {
          // Ha biztosan kódolt, akkor újra kell embedelni (különben a quantity edit nem fog működni).
        }

        const qtyByBaseRef = new Map();
        for (const ref of refs) {
          if (!hasEncodedQty(ref)) continue;
          const { baseRef, qtyMul } = parseEncodedContentsRef(ref);
          if (!baseRef) continue;
          qtyByBaseRef.set(baseRef, (qtyByBaseRef.get(baseRef) ?? 0) + qtyMul);
        }
        if (!qtyByBaseRef.size) return;

        const embeddedItemsData = [];
        const embeddedUuids = [];

        for (const [baseRef, qtyMulSum] of qtyByBaseRef.entries()) {
          let sourceItem = null;
          try {
            sourceItem = await fromUuid(baseRef);
            if (sourceItem?.documentName !== "Item") sourceItem = null;
          } catch {
            sourceItem = null;
          }

          if (!sourceItem) sourceItem = game.items?.get(baseRef) ?? null;
          if (!sourceItem) sourceItem = actor.items?.get?.(baseRef) ?? null;
          if (!sourceItem || sourceItem.documentName !== "Item") continue;

          // Ha már van beágyazott item, csak frissítsük.
          if (sourceItem.parent?.id === actor.id) {
            const sourceSys = sourceItem.system ?? {};
            const rawQty = (sourceSys.quantity ?? "").toString().trim();
            const baseQtyNum = Number.parseInt(rawQty, 10);
            const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;
            const finalQty = baseQty * qtyMulSum;
            await sourceItem.update({ "system.quantity": String(finalQty) });
            const u = sourceItem.uuid ?? sourceItem.id;
            if (u) embeddedUuids.push(u);
            continue;
          }

          const sourceSys = sourceItem.system ?? {};
          const rawQty = (sourceSys.quantity ?? "").toString().trim();
          const baseQtyNum = Number.parseInt(rawQty, 10);
          const baseQty = Number.isFinite(baseQtyNum) && baseQtyNum > 0 ? baseQtyNum : 1;
          const finalQty = baseQty * qtyMulSum;

          const nestedSystem = foundry.utils.duplicate(sourceSys);
          nestedSystem.quantity = String(finalQty);

          embeddedItemsData.push({
            name: sourceItem.name,
            type: sourceItem.type ?? "Targy",
            img: sourceItem.img ?? "",
            system: nestedSystem
          });
        }

        if (!embeddedItemsData.length) return;

        const created = await actor.createEmbeddedDocuments("Item", embeddedItemsData);
        for (const c of created) {
          const u = c?.uuid ?? c?.id ?? null;
          if (u) embeddedUuids.push(u);
        }
        if (!embeddedUuids.length) return;

        await csomagItem.update({ "system.contents": embeddedUuids });
        await csomagItem.setFlag(SYSTEM_NAMESPACE, "_contentsEmbedded", true);
      };

      for (const actor of actors) {
        const packages = actor?.items?.contents?.filter?.((i) => i.type === "Csomag") ?? [];
        for (const pkg of packages) {
          await embedCsomagContents(pkg);
        }
      }
    } catch (err) {
      console.warn("Void | Csomag quantity migráció failed:", err);
    }
  })();

  // Sebzés gomb: event delegation – minden adat az üzenet flagjeiből, így mindig működik (Karakter/NPC)
  document.body.addEventListener("click", async (ev) => {
    const btn = ev.target?.closest?.(".votv-weapon-damage-chat");
    if (!btn || btn.disabled) return;
    const msgId = (btn.dataset.messageId ?? "").trim();
    if (!msgId) return;
    const msg = game.messages?.get(msgId);
    const weapon = msg?.flags?.["vacuum-of-the-void"]?.weapon;
    if (!weapon) return;
    // actorId vagy itemId hiányzik is lehet – slotData.damage-ból vagy flagben kapott formulából is tudunk dobni (pl. NPC token)
    const actorId = weapon.actorId ?? msg?.speaker?.actor ?? "";
    if (!actorId) return;
    ev.preventDefault();
    ev.stopPropagation();
    // Fallback: speaker.actor, majd token actor (unlinked token NPC esetén game.actors.get lehet undefined)
    let actor = game.actors?.get(weapon.actorId) ?? game.actors?.get(actorId);
    if (!actor) {
      const tokenActor = game.scenes?.contents?.flatMap((s) => s.tokens?.contents ?? [])
        .map((t) => t.actor)
        .find((a) => a && (a.id === actorId || a.id === weapon.actorId));
      actor = tokenActor ?? null;
    }
    if (!actor) return;
    const item = weapon.itemId
      ? (actor.items?.get?.(weapon.itemId) ?? actor.items?.contents?.find?.(i => i.id === weapon.itemId))
      : null;
    // Elsőként próbáljuk a flagben eltárolt formulát, hogy ugyanazt dobjuk, mint ami a lap alapján számolódott.
    let damageFormula = (weapon.damageFormula ?? "").trim();
    if (!damageFormula) {
      damageFormula = (item?.system?.damage ?? "").trim();
    }
    if (!damageFormula && weapon.slotKey) {
      const slotData = (actor.system?.weapons ?? {})[weapon.slotKey] ?? {};
      damageFormula = (slotData.damage ?? "").trim();
    }
    if (!damageFormula) {
      ui.notifications?.warn?.(game.i18n?.localize?.("votv.weapon.no-damage") ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const roll = new Roll(damageFormula);
    await roll.evaluate({ async: true });
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    const targetName = weapon.targetName || "";
    const hitName = weapon.hitLocationName || "";
    const weaponName = (item?.name ?? (weapon.slotKey ? ((actor.system?.weapons ?? {})[weapon.slotKey]?.name ?? "") : "")) || "Fegyver";
    let flavor = targetName ? `${weaponName} – sebzés – ${targetName}` : `${weaponName} – sebzés`;
    if (hitName) flavor += ` (${hitName})`;
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor,
      flags: { "vacuum-of-the-void": {} },
      rollMode
    });
  }, true);

  document.body.addEventListener(
    "dragstart",
    (ev) => {
      if (!ev.target?.closest?.("#actors")) return;
      const el = ev.target?.closest?.("[data-document-id]");
      const docId = el?.getAttribute?.("data-document-id");
      if (!docId) return;
      const id = docId.includes(".") ? docId.split(".").pop() : docId;
      if (id && game.actors?.get(id)) game.votv._dragSourceActorId = id;
    },
    true
  );

  // Világ betöltése: Karakterek összesített sebessége alapján Mozgásképtelen szinkron
  (async () => {
    const characters = game.actors?.filter((a) => a.type === "Karakter") ?? [];
    for (const actor of characters) {
      const totalRaw = VoidKarakterSheet.getTotalSpeedRaw(actor);
      const ourEffect = actor.effects?.find((e) => e.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === true);
      if (totalRaw <= 0 && !ourEffect) {
        const immobilizedIcon = CONFIG.statusEffects?.find((s) => s.id === "immobilized")?.img ?? "";
        await actor.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: immobilizedIcon,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: true } },
          origin: actor.uuid
        }]).catch(() => {});
      } else if (totalRaw > 0 && ourEffect) {
        await ourEffect.delete().catch(() => {});
      }
    }
  })();

  // Create a default scene with void-bg if the world has no scenes (e.g. new world).
  if (game.user?.isGM && game.scenes?.size === 0) {
    (async () => {
      try {
        const SceneDoc = CONFIG.Scene?.documentClass ?? game.scenes?.documentClass;
        if (!SceneDoc?.create) {
          console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
          return;
        }
        const data = {
          name: "Vacuum of the Void",
          width: 3840,
          height: 2160,
          background: { src: VOTV_DEFAULT_SCENE_BG },
          backgroundColor: "#0f0f0f",
          grid: { type: 0 }
        };
        const scene = await SceneDoc.create(data);
        if (scene) {
          console.log("Vacuum of the Void | Default scene created:", scene.id);
        }
      } catch (err) {
        console.warn("Vacuum of the Void | Default scene creation failed:", err);
      }
    })();
  }

  // Karakter: meglévő actorok prototype tokenje + vásznon lévő tokenek – ne mutasson bárokat
  (async () => {
    const barHide = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    };
    const actors = game.actors?.filter((a) => a.type === "Karakter") ?? [];
    for (const actor of actors) {
      try {
        const pt = actor.prototypeToken;
        const bar1 = pt?.bar1?.attribute ?? "";
        const bar2 = pt?.bar2?.attribute ?? "";
        if (bar1 || bar2) {
          await actor.update({
            "prototypeToken.bar1.attribute": "",
            "prototypeToken.bar2.attribute": "",
            "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
          });
        }
      } catch (err) {
        console.warn("Vacuum of the Void | Prototype token update failed for", actor.name, err);
      }
    }
    // Vásznon lévő Karakter tokenek frissítése (a prototype változás nem frissíti őket)
    for (const scene of game.scenes ?? []) {
      const charTokens = scene.tokens?.filter((t) => t.actor?.type === "Karakter") ?? [];
      for (const token of charTokens) {
        try {
          await token.update(barHide);
        } catch (err) {
          console.warn("Vacuum of the Void | Token update failed for", token.name, err);
        }
      }
    }

    // NPC: health a bar2-ben (bar1 üres)
    const npcBar2 = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    };
    const npcActors = game.actors?.filter((a) => a.type === "Npc") ?? [];
    for (const actor of npcActors) {
      try {
        await actor.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (err) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", actor.name, err);
      }
    }
    for (const scene of game.scenes ?? []) {
      const npcTokens = scene.tokens?.filter((t) => t.actor?.type === "Npc") ?? [];
      for (const token of npcTokens) {
        try {
          await token.update(npcBar2);
        } catch (err) {
          console.warn("Vacuum of the Void | NPC token update failed for", token.name, err);
        }
      }
    }
  })();
});

Hooks.on("preCreateToken", (tokenDocument, data, _options) => {
  const sourceId = game.votv?._dragSourceActorId;
  const actorId = sourceId ?? tokenDocument.actorId ?? tokenDocument._source?.actorId ?? data?.actorId ?? null;
  if (sourceId) game.votv._dragSourceActorId = null;
  const actor = actorId ? game.actors?.get(actorId) : (tokenDocument.actor ?? null);
  if (!actor) return;
  if (actor.type === "Bazis") {
    ui?.notifications?.warn(game.i18n?.localize?.("VOTV.BazisNoToken") ?? "Bázis nem helyezhető tokenként a térképre.");
    return false;
  }
  if (actor.type === "Vallalkozas") {
    ui?.notifications?.warn("Vállalkozás nem helyezhető tokenként a térképre.");
    return false;
  }
  if (actor.type === "Karakter") {
    tokenDocument.updateSource({
      ...(sourceId ? { actorId: sourceId } : {}),
      actorLink: true,
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    });
    return;
  }
  if (actor.type === "Jarmu") {
    tokenDocument.updateSource({
      ...(sourceId ? { actorId: sourceId } : {}),
      actorLink: true
    });
    return;
  }
  if (actor.type === "Npc") {
    const gridSize = npcTokenGridSizeFromMéret(actor.system?.identity?.size);
    tokenDocument.updateSource({
      ...(sourceId ? { actorId: sourceId } : {}),
      "bar1.attribute": "",
      "bar2.attribute": "resources.health",
      width: gridSize,
      height: gridSize
    });
  }
});

// Item leírás textarea-k automatikus magasságállítása (min 1×, max 3× magasság).
function votvAutoResizeTextareas(root, selector) {
  if (!root?.querySelectorAll) return;
  const textareas = root.querySelectorAll(selector);
  if (!textareas || textareas.length === 0) return;

  for (const el of textareas) {
    const style = window.getComputedStyle(el);
    const lineHeight = parseFloat(style.lineHeight || "16");
    const minLines = Number(el.getAttribute("rows") || "3") || 3;
    const minHeight = lineHeight * minLines;
    const maxHeight = minHeight * 3;

    el.style.overflowY = "auto";

    const resize = () => {
      el.style.height = "auto";
      const next = Math.min(Math.max(el.scrollHeight, minHeight), maxHeight);
      el.style.height = `${next}px`;
    };

    // Első renderkor és minden inputkor igazítsuk.
    resize();
    el.removeEventListener?.("input", el._votvAutoResize);
    el._votvAutoResize = resize;
    el.addEventListener("input", resize);
  }
}

Hooks.on("renderVoidAbilitySheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.description"]');
});

Hooks.on("renderVoidMicrochipSheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.description"]');
});

Hooks.on("renderVoidTargySheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.description"]');
});

Hooks.on("renderVoidEgyebSheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.description"]');
});

// Weapon/Shield: itt a „leírás” mező a special textarea.
Hooks.on("renderVoidWeaponSheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.special"]');
});

Hooks.on("renderVoidShieldSheet", (app, html, _data) => {
  const root = html[0] ?? html;
  votvAutoResizeTextareas(root, 'textarea[name="system.special"]');
});

// Combatant: Bázis ne kerülhessen harcba; egyébként alapértelmezett initiative 0
Hooks.on("preCreateCombatant", (combatant, _data, _options) => {
  const actor = combatant.actorId ? game.actors?.get(combatant.actorId) : null;
  if (actor?.type === "Bazis") {
    throw new Error(game.i18n?.localize?.("VOTV.BazisNoCombat") ?? "Bázis nem vehet részt harcban.");
  }
  const init = combatant.initiative;
  if (init === undefined || init === null || (typeof init === "number" && isNaN(init))) {
    combatant.updateSource({ initiative: 0 });
  }
});

// Karakter vagy NPC combat-be kerüléskor: kezdeményezés eredménye legyen üres (még nem dobott)
Hooks.on("createCombatant", (combatant, _data, _options) => {
  const actor = combatant.actor;
  if (!actor || (actor.type !== "Karakter" && actor.type !== "Npc")) return;
  actor.update({ "system.combat.initiativeResult": null }).catch((err) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", err);
  });
});

// Minden kör végén: összes KP ikon visszaállítása „simára” (used → 0)
// Dinamikusan kezeljük az 1–10. KP pontokat – csak azokat nullázzuk, amelyek
// az adott actor `system.resources` objektumában ténylegesen léteznek.
function votvBuildKpResetUpdate(actor) {
  const res = actor?.system?.resources ?? {};
  const updates = {};
  for (let i = 1; i <= 10; i++) {
    const key = `kpDot${i}`;
    if (Object.prototype.hasOwnProperty.call(res, key)) {
      updates[`system.resources.${key}`] = 0;
    }
  }
  return updates;
}

function votvResetKpForCombat(combat) {
  // Karaktereknél: minden karakterre vonatkozik (akkor is, ha épp nincs token a combatban),
  // hogy új kör kezdetén mindig "feltöltött" KP sávval induljanak.
  for (const actor of game.actors?.contents ?? []) {
    if (!actor || actor.type !== "Karakter") continue;
    const updates = votvBuildKpResetUpdate(actor);
    if (!updates || !Object.keys(updates).length) continue;
    actor.update(updates).catch((err) => {
      console.warn("Vacuum of the Void | KP reset failed for", actor.name, err);
    });
  }

  // NPC-knél csak a konkrét combatban résztvevőkre alkalmazzuk.
  const combatants = combat?.combatants;
  const list = combatants?.contents ?? (combatants ? Array.from(combatants) : []);
  for (const c of list) {
    const actor = c.actor;
    if (!actor || actor.type !== "Npc") continue;
    const updates = votvBuildKpResetUpdate(actor);
    if (!updates || !Object.keys(updates).length) continue;
    actor.update(updates).catch((err) => {
      console.warn("Vacuum of the Void | KP reset failed for", actor.name, err);
    });
  }
}

Hooks.on("combatRound", (combat, _updateData, updateOptions) => {
  if (updateOptions?.direction <= 0) return;
  votvResetKpForCombat(combat);
  setTimeout(votvRenderOpenCombatSheets, 0);
});

// Harc vége vagy combatant változás: nyitott Karakter és NPC lapok újrarajzolása, hogy a Harc szekció azonnal eltűnjön
function votvRenderOpenCombatSheets() {
  const seen = new Set();
  for (const actor of game.actors?.filter((a) => a.type === "Karakter" || a.type === "Npc") ?? []) {
    const apps = actor.apps ?? [];
    const list = apps.contents ? Array.from(apps.contents) : Array.from(apps);
    for (const app of list) {
      if (!app || seen.has(app.id)) continue;
      seen.add(app.id);
      if (typeof app.render === "function") app.render(true);
    }
  }
  for (const app of Object.values(ui?.windows ?? {})) {
    if (app?.document?.documentName !== "Actor") continue;
    const docType = app?.document?.type;
    if (docType !== "Karakter" && docType !== "Npc") continue;
    if (seen.has(app.id)) continue;
    seen.add(app.id);
    if (typeof app.render === "function") app.render(true);
  }
}

Hooks.on("deleteCombat", () => {
  setTimeout(votvRenderOpenCombatSheets, 100);
});

Hooks.on("updateCombat", (combat, change, _options) => {
  if (change?.round != null) {
    // A KP resetet combatRound kezeli; itt csak a nyitott lapok újrarajzolása marad.
    setTimeout(votvRenderOpenCombatSheets, 0);
  }
});

// Combat Tracker: Roll Initiative gombok elrejtése
Hooks.on("renderSidebarTab", (app, html, data) => {
  if (app?.id !== "combat") return;
  const root = html[0] ?? html;
  if (!root?.querySelectorAll) return;
  const sel = "[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']";
  root.querySelectorAll(sel).forEach((el) => {
    el.style.display = "none";
  });
});

// Token HUD: Karakter tokeneknél add class a CSS-hez (barok elrejtése)
Hooks.on("renderTokenHUD", (hud, html, data) => {
  const token = hud?.object;
  const actor = token?.document?.actor ?? token?.actor;
  if (actor?.type === "Karakter") {
    const el = html[0] ?? html;
    if (el?.classList) el.classList.add("votv-karakter-token-hud");
  }
});

// Set a default background image and color for newly created scenes.
// Based on the Foundry documentation example which uses preCreateScene
// and scene.updateSource({ backgroundColor: \"#000000\" }).
Hooks.on("preCreateScene", (scene, data) => {
  // Respect any background image explicitly provided when creating the scene.
  if (data?.background?.src) return;

  scene.updateSource({
    width: 3840,
    height: 2160,
    "background.src": VOTV_DEFAULT_SCENE_BG,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});

// Add crit/fumble class to dice-roll in chat so formula can be styled (neon green/red).
Hooks.on("renderChatMessageHTML", (message, html, data) => {
  const flags = message.flags?.["vacuum-of-the-void"] ?? {};
  const resultType = flags.resultType;
  const critLabel = flags.critLabel;
  const weaponAttack = flags.weaponAttack;
  const weaponInfo = flags.weapon;
  const vsDefense = flags.vsDefense;
  const vsDefenseInfo = flags.vsDefenseInfo;
  if (!resultType && !critLabel && !weaponAttack && !vsDefense) return;

  const rollEl = html?.querySelector?.(".dice-roll");
  if (!rollEl) return;

  if (resultType) {
    rollEl.classList.add(`votv-${resultType}`);
  }

  // Insert a separate line under the total with the crit/brutal text.
  if (critLabel) {
    const existing = rollEl.querySelector(".votv-crit-label");
    if (existing) {
      existing.textContent = critLabel;
    } else {
      const totalEl = rollEl.querySelector(".dice-total");
      const container = totalEl?.parentElement ?? rollEl;
      const labelEl = document.createElement("div");
      labelEl.className = `votv-crit-label votv-crit-label-${resultType || "neutral"}`;
      labelEl.textContent = critLabel;
      container.appendChild(labelEl);
    }
  }

  // Ha ez egy fegyver támadás üzenet, írjuk ki külön, hogy talált / nem talált,
  // és adjunk hozzá egy "Sebzés" gombot, ami a fegyver sebzését dobja – csak találat esetén.
  if (weaponAttack && weaponInfo && (weaponInfo.actorId || message.speaker?.actor)) {
    const totalEl = rollEl.querySelector(".dice-total");
    const container = totalEl?.parentElement ?? rollEl;

    // Találat / nem talált sor
    const existingOutcome = rollEl.querySelector(".votv-weapon-outcome");
    if (!existingOutcome) {
      const outcomeEl = document.createElement("div");
      outcomeEl.className = "votv-weapon-outcome";
      const isHit = !!weaponInfo.isHit;
      const targetName = weaponInfo.targetName || "Célpont";
      outcomeEl.textContent = isHit
        ? `Találat – ${targetName}`
        : `Nem talált – ${targetName}`;
      container.appendChild(outcomeEl);
    }

    // Sebzés gomb – csak ha talált
    if (weaponInfo.isHit) {
      const existingBtn = rollEl.querySelector(".votv-weapon-damage-chat");
      if (!existingBtn) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "votv-weapon-damage-chat";
        const hitRoll = weaponInfo.hitLocationRoll;
        const hitName = weaponInfo.hitLocationName;
        btn.textContent = (hitRoll != null && hitName)
          ? `Sebzés (Találati Hely ${hitRoll} - ${hitName})`
          : "Sebzés";
        btn.dataset.actorId = String(weaponInfo.actorId ?? message.speaker?.actor ?? "");
        btn.dataset.itemId = String(weaponInfo.itemId ?? "");
        btn.dataset.slotKey = String(weaponInfo.slotKey ?? "");
        btn.dataset.targetName = String(weaponInfo.targetName ?? "");
        btn.dataset.hitLocationName = String(weaponInfo.hitLocationName ?? "");
        btn.dataset.messageId = String(message.id ?? "");
        container.appendChild(btn);
      }
    }
  }

  // Nem fegyvertámadás, de célpont elleni dobás: egyszerű Találat / Nem talált sor a chatben.
  if (!weaponAttack && vsDefense && vsDefenseInfo) {
    const totalEl = rollEl.querySelector(".dice-total");
    const container = totalEl?.parentElement ?? rollEl;

    const isHit = !!vsDefenseInfo.isHit;
    const targetName = vsDefenseInfo.targetName || "Célpont";
    const hitRoll = vsDefenseInfo.hitLocationRoll;
    const hitName = vsDefenseInfo.hitLocationName;

    let outcomeEl = rollEl.querySelector(".votv-defense-outcome");
    if (!outcomeEl) {
      outcomeEl = document.createElement("div");
      outcomeEl.className = "votv-defense-outcome";
      container.appendChild(outcomeEl);
    }
    outcomeEl.textContent = isHit
      ? `Találat – ${targetName}`
      : `Nem talált – ${targetName}`;

    // Találati hely külön sorban, nagyobb betűvel, ha egyértelműen meghatározható volt.
    const existingHitLoc = rollEl.querySelector(".votv-defense-hitloc");
    if (isHit && hitRoll != null && hitName) {
      let hitLocEl = existingHitLoc;
      if (!hitLocEl) {
        hitLocEl = document.createElement("div");
        hitLocEl.className = "votv-defense-hitloc";
        container.appendChild(hitLocEl);
      }
      hitLocEl.textContent = `Találati Hely ${hitRoll} - ${hitName}`;
    } else if (existingHitLoc) {
      existingHitLoc.remove();
    }
  }
});

