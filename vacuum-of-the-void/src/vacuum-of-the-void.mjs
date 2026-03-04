import { KarakterDataModel, WeaponDataModel, ShieldDataModel, MicrochipDataModel, AbilityDataModel, TargyDataModel, EgyebDataModel } from "../module/data-models/index.mjs";
import { VoidKarakterSheet, VoidWeaponSheet, VoidShieldSheet, VoidMicrochipSheet, VoidAbilitySheet, VoidTargySheet, VoidEgyebSheet } from "../module/documents.mjs";

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

  CONFIG.Actor.dataModels ??= {};
  CONFIG.Actor.dataModels.Karakter = KarakterDataModel;

  // Register item data models
  CONFIG.Item.dataModels ??= {};
  CONFIG.Item.dataModels.Fegyver = WeaponDataModel;
  CONFIG.Item.dataModels.Pancel = ShieldDataModel;
  CONFIG.Item.dataModels.MikroChip = MicrochipDataModel;
  CONFIG.Item.dataModels.Kepesseg = AbilityDataModel;
  CONFIG.Item.dataModels.ability = AbilityDataModel;
  CONFIG.Item.dataModels.Targy = TargyDataModel;
  CONFIG.Item.dataModels.Egyeb = EgyebDataModel;

  // Trackable attributes for token bars
  CONFIG.Actor.trackableAttributes ??= {};
  CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  };

  CONFIG.Actor.typeLabels ??= {};
  CONFIG.Actor.typeLabels.Karakter = "Karakter";

  CONFIG.Item.typeLabels ??= {};
  CONFIG.Item.typeLabels.Fegyver = "Fegyver";
  CONFIG.Item.typeLabels.Pancel = "Páncél";
  CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip";
  CONFIG.Item.typeLabels.Kepesseg = "Képesség";
  CONFIG.Item.typeLabels.ability = "Képesség";
  CONFIG.Item.typeLabels.Targy = "Tárgy";
  CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";

  foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2);
  foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", VoidKarakterSheet, {
    types: ["Karakter"],
    makeDefault: true,
    label: "VOTV.KarakterSheet"
  });

  // Register item sheets
  foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", VoidWeaponSheet, {
    types: ["Fegyver"],
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

  // Ha egy actort frissítenek, a nyitott VoidKarakterSheet lapok újrarajzolódjanak. Ne újrarajzoljunk, ha
  // bármelyik lapon input/textarea van fókuszban (kurzor + görgetés maradjon), és ne a lapot, ami
  // épp mentett (blur save), hogy ne tekerjen fel.
  const UPDATE_ACTOR_SKIP_RENDER_MS = 500;
  Hooks.on("updateActor", (actor, _changed, _options, _userId) => {
    const actorId = actor?.id;
    if (!actorId) return;
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
      if (app.document?.id !== actorId || app.document?.documentName !== "Actor" || app.constructor?.name !== "VoidKarakterSheet") continue;
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
});

Hooks.on("preCreateToken", (tokenDocument, _data, _options) => {
  const sourceId = game.votv?._dragSourceActorId;
  const actorId = sourceId ?? tokenDocument.actorId ?? null;
  if (sourceId) game.votv._dragSourceActorId = null;
  const actor = actorId ? game.actors?.get(actorId) : null;
  if (!actor || actor.type !== "Karakter") return;
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
    width: 3840,
    height: 2160,
    "background.src": VOTV_DEFAULT_SCENE_BG,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});

// Add crit/fumble class to dice-roll in chat so formula can be styled (neon green/red).
Hooks.on("renderChatMessageHTML", (message, html, data) => {
  const resultType = message.flags?.["vacuum-of-the-void"]?.resultType;
  if (!resultType) return;
  const rollEl = html?.querySelector?.(".dice-roll");
  if (rollEl) rollEl.classList.add(`votv-${resultType}`);
});

