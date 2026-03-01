import { PcDataModel, WeaponDataModel, MicrochipDataModel, AbilityDataModel } from "../module/data-models/index.mjs";
import { VoidPcSheet, VoidWeaponSheet, VoidMicrochipSheet, VoidAbilitySheet } from "../module/documents.mjs";

const VOTV_DEFAULT_SCENE_BG = "systems/vacuum-of-the-void/assets/void-bg.jpg";

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

  // Register PC data model
  CONFIG.Actor.dataModels ??= {};
  CONFIG.Actor.dataModels.pc = PcDataModel;

  // Register item data models
  CONFIG.Item.dataModels ??= {};
  CONFIG.Item.dataModels.weapon = WeaponDataModel;
  CONFIG.Item.dataModels.microchip = MicrochipDataModel;
  CONFIG.Item.dataModels.ability = AbilityDataModel;

  // Trackable attributes for token bars
  CONFIG.Actor.trackableAttributes ??= {};
  CONFIG.Actor.trackableAttributes.pc = {
    bar: ["resources.health", "resources.stress"],
    value: []
  };

  // Explicit type label so the UI shows \"Player Character\" instead of \"pc\"
  CONFIG.Actor.typeLabels ??= {};
  CONFIG.Actor.typeLabels.pc = "Player Character";

  // Register PC sheet
  foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2);
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidPcSheet, {
    types: ["pc"],
    makeDefault: true,
    label: "VOTV.PcSheet"
  });

  // Register item sheets
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidWeaponSheet, {
    types: ["weapon"],
    makeDefault: true,
    label: "Void Weapon"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidMicrochipSheet, {
    types: ["microchip"],
    makeDefault: true,
    label: "Void Microchip"
  });
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidAbilitySheet, {
    types: ["ability"],
    makeDefault: true,
    label: "Void Ability"
  });

  Hooks.on("updateActor", (actor, _changed, _options, _userId) => {
    const actorId = actor?.id;
    if (!actorId) return;
    setTimeout(() => {
      const doc = game.actors?.get(actorId);
      if (doc?.apps) for (const app of doc.apps) if (app?.rendered && typeof app.render === "function") app.render(true);
      const windows = Object.values(ui?.windows ?? {});
      for (const app of windows) {
        if (!app?.rendered || typeof app.render !== "function") continue;
        if (app.document?.id !== actorId || app.document?.documentName !== "Actor" || app.constructor?.name !== "VoidPcSheet") continue;
        app.render(true);
      }
    }, 0);
  });
});

Hooks.on("ready", () => {
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
});

Hooks.on("preCreateToken", (tokenDocument, _data, _options) => {
  const sourceId = game.votv?._dragSourceActorId;
  const actorId = sourceId ?? tokenDocument.actorId ?? null;
  if (sourceId) game.votv._dragSourceActorId = null;
  const actor = actorId ? game.actors?.get(actorId) : null;
  if (!actor || actor.type !== "pc") return;
  tokenDocument.updateSource({
    ...(sourceId ? { actorId: sourceId } : {}),
    actorLink: true
  });
});

// Set a default background image and color for newly created scenes.
// Based on the Foundry documentation example which uses preCreateScene
// and scene.updateSource({ backgroundColor: \"#000000\" }).
Hooks.on("preCreateScene", (scene, data) => {
  // Respect any background image explicitly provided when creating the scene.
  if (data?.background?.src) return;

  scene.updateSource({
    width: 1920,
    height: 1080,
    "background.src": VOTV_DEFAULT_SCENE_BG,
    backgroundColor: "#000000"
  });
});

// Add crit/fumble class to dice-roll in chat so formula can be styled (neon green/red).
Hooks.on("renderChatMessageHTML", (message, html, data) => {
  const resultType = message.flags?.["vacuum-of-the-void"]?.resultType;
  if (!resultType) return;
  const rollEl = html?.querySelector?.(".dice-roll");
  if (rollEl) rollEl.classList.add(`votv-${resultType}`);
});

