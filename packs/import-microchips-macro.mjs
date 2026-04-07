// Mikro-Chipek importálása a packs/_source/microchips.json-ből
// a "Mikro-Chipek" compendiumba, opcionális mappaszerkezettel (ha a JSON-ben van path).

(async () => {
  const SYSTEM_ID   = "vacuum-of-the-void";
  const PACK_NAME   = "microchips"; // system.json: "name": "microchips"
  const SOURCE_PATH = "systems/vacuum-of-the-void/packs/_source/microchips.json";

  // 1) Cél compendium pack megkeresése
  const packId = `${SYSTEM_ID}.${PACK_NAME}`;
  const pack   = game.packs.get(packId);
  if (!pack) {
    ui.notifications.error(`Nem találom a "${packId}" compendiumot.`);
    return;
  }

  // 2) Forrás JSON betöltése a rendszer mappájából
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
    ui.notifications.warn("A microchips.json üres vagy nem tömb.");
    return;
  }

  // 3) Már létező dokumentumok lekérése (duplikátumok elkerülésére)
  const existing       = await pack.getDocuments();
  const existingByName = new Map(existing.map(doc => [doc.name, doc]));
  const existingById   = new Map(
    existing.map(doc => [doc.getFlag(SYSTEM_ID, "_sourceId") ?? doc.id, doc])
  );

  // 4) Folders cache a packon belül (név + parent alapján) – csak akkor használjuk, ha az entry-ben van path.
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

    const segments = p.split("/").filter(seg => !!seg.trim());
    if (!segments.length) return null;

    let parentId   = null;
    let currentKey = "";
    for (const seg of segments) {
      currentKey = currentKey + "/" + seg;

      const cachedId = folderCache.get(currentKey);
      if (cachedId) {
        parentId = cachedId;
        continue;
      }

      let folder = packFolders.find(f =>
        f.type === "Item" &&
        f.name === seg &&
        ((f.folder ?? null) === (parentId ?? null))
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

  // 5) Import ciklus
  for (const raw of entries) {
    const data = foundry.utils.duplicate(raw);
    const sourceId = data._id;  // forrás azonosító (pl. "gyorsmozgasu")

    // Duplikátum ellenőrzés: ha már hoztunk létre ilyen sourceId-t vagy névvel
    if (sourceId && existingById.has(sourceId)) {
      skipped++;
      continue;
    }
    if (data.name && existingByName.has(data.name)) {
      skipped++;
      continue;
    }

    delete data._id;            // a Foundry generáljon saját 16 hosszú ID-t
    // A JSON-ben lehet "microchip" vagy "MikroChip" – normáljuk a rendszer item típusára.
    data.type = "MikroChip";

    // Mappa a "path" alapján (ha van)
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

  ui.notifications.info(
    `Kész: ${created} Mikro-Chip importálva, ${skipped} kihagyva (már létezett vagy hiba).`
  );
})();
