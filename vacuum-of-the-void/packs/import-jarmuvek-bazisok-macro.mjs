// Járműegységek, helyiségek és képességek importálása a packs/_source/jarmuvek-bazisok.json-ből
// a "Járművek & Bázisok" compendiumba.

(async () => {
  const SYSTEM_ID = "vacuum-of-the-void";
  const PACK_NAME = "jarmuvek-bazisok";
  const SOURCE_PATH = "systems/vacuum-of-the-void/packs/_source/jarmuvek-bazisok.json";

  const ALLOWED_TYPES = new Set(["Jarmuegyseg", "Helyiseg", "Kepesseg", "ability"]);

  const DEFAULT_JARMUEGYSEG_SYSTEM = {
    level: 0,
    health: { max: 0, value: 0 },
    abilities: { items: [], embedded: [] },
    speed: "",
    range: "",
    storage: "",
    damage: "",
    hit: ""
  };

  const DEFAULT_HELYISEG_SYSTEM = {
    level: 0,
    abilities: { items: [], embedded: [] },
    storage: "",
    veszely: "",
    hit: ""
  };

  const DEFAULT_ABILITY_SYSTEM = {
    kind: "passive",
    description: "",
    kp: 0
  };

  function normalizeItemData(data) {
    const t = data.type;
    if (!ALLOWED_TYPES.has(t)) {
      return {
        ok: false,
        reason: `Érvénytelen vagy hiányzó type (csak Jarmuegyseg, Helyiseg, Kepesseg): ${t ?? "(üres)"}`
      };
    }
    const baseSys =
      t === "Jarmuegyseg"
        ? DEFAULT_JARMUEGYSEG_SYSTEM
        : t === "Helyiseg"
          ? DEFAULT_HELYISEG_SYSTEM
          : DEFAULT_ABILITY_SYSTEM;
    data.system = foundry.utils.mergeObject(baseSys, data.system ?? {}, { inplace: false });
    return { ok: true };
  }

  const packId = `${SYSTEM_ID}.${PACK_NAME}`;
  const pack = game.packs.get(packId);
  if (!pack) {
    ui.notifications.error(`Nem találom a "${packId}" compendiumot. Töltsd újra a rendszert / világot.`);
    return;
  }

  let entries;
  try {
    const response = await fetch(SOURCE_PATH);
    if (!response.ok) {
      throw new Error(`HTTP hiba: ${response.status} ${response.statusText}`);
    }
    entries = await response.json();
  } catch (err) {
    console.error(err);
    ui.notifications.error(`Nem tudtam beolvasni a forrást: ${SOURCE_PATH}`);
    return;
  }

  if (!Array.isArray(entries) || !entries.length) {
    ui.notifications.warn("A jarmuvek-bazisok.json üres vagy nem tömb.");
    return;
  }

  const existing = await pack.getDocuments();
  const existingByName = new Map(existing.map((doc) => [doc.name, doc]));
  const existingById = new Map(
    existing.map((doc) => [doc.getFlag(SYSTEM_ID, "_sourceId") ?? doc.id, doc])
  );

  const packFolders = [...(pack.folders ?? [])];
  const folderCache = new Map();

  async function getOrCreateFolderForPath(rawPath) {
    if (!rawPath || typeof rawPath !== "string") return null;
    let p = rawPath.trim();
    if (!p || p === "/") return null;

    if (!p.startsWith("/")) p = "/" + p;
    if (!p.endsWith("/")) p = p + "/";

    const cached = folderCache.get(p);
    if (cached) return cached;

    const segments = p.split("/").filter((seg) => !!seg.trim());
    if (!segments.length) return null;

    let parentId = null;
    let currentKey = "";
    for (const seg of segments) {
      currentKey = currentKey + "/" + seg;

      const cachedId = folderCache.get(currentKey);
      if (cachedId) {
        parentId = cachedId;
        continue;
      }

      let folder = packFolders.find(
        (f) => f.type === "Item" && f.name === seg && (f.folder ?? null) === (parentId ?? null)
      );

      if (!folder) {
        folder = await Folder.create(
          {
            name: seg,
            type: "Item",
            sorting: "a",
            folder: parentId ?? null
          },
          { pack: pack.collection }
        );
        packFolders.push(folder);
      }

      parentId = folder.id;
      folderCache.set(currentKey, parentId);
    }

    folderCache.set(p, parentId);
    return parentId;
  }

  let created = 0;
  let skipped = 0;
  let invalid = 0;

  for (const raw of entries) {
    const data = foundry.utils.duplicate(raw);
    const sourceId = data._id;

    const norm = normalizeItemData(data);
    if (!norm.ok) {
      console.warn("Járművek & Bázisok import:", norm.reason, raw);
      invalid++;
      continue;
    }

    if (sourceId && existingById.has(sourceId)) {
      skipped++;
      continue;
    }
    if (data.name && existingByName.has(data.name)) {
      skipped++;
      continue;
    }

    delete data._id;

    const path = data.path;
    delete data.path;

    let folderId = null;
    try {
      folderId = await getOrCreateFolderForPath(path);
    } catch (err) {
      console.warn("Mappa létrehozási hiba (path):", path, err);
    }

    if (folderId) {
      data.folder = folderId;
    }

    try {
      const createdItem = await Item.create(data, { pack: pack.collection });
      if (sourceId && createdItem) {
        await createdItem.setFlag(SYSTEM_ID, "_sourceId", sourceId);
        existingById.set(sourceId, createdItem);
      }
      if (createdItem?.name) {
        existingByName.set(createdItem.name, createdItem);
      }
      created++;
    } catch (err) {
      console.warn("Nem sikerült importálni:", data.name, err);
      skipped++;
    }
  }

  const parts = [`${created} új elem importálva`, `${skipped} kihagyva`];
  if (invalid) parts.push(`${invalid} érvénytelen sor`);
  ui.notifications.info(`Járművek & Bázisok: ${parts.join(", ")}.`);
})();
