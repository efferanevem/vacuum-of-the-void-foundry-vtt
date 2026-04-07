// Vásárolható dolgok importálása a packs/_source/purchasables.json-ből
// a "Vásárolható Dolgok" compendiumba, a JSON-ben megadott "path" alapján mappaszerkezettel.

(async () => {
  const SYSTEM_ID   = "vacuum-of-the-void";
  const PACK_NAME   = "purchasables"; // system.json: "name": "purchasables"
  const SOURCE_PATH = "systems/vacuum-of-the-void/packs/_source/purchasables.json";

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
    ui.notifications.warn("A purchasables.json üres vagy nem tömb.");
    return;
  }

  // Import sorrend:
  // - Először minden nem "Csomag" tételt hozzunk létre, hogy a csomagok system.contents hivatkozásai
  //   már fel legyenek oldva (sourceId -> doc.uuid).
  const orderedEntries = [
    ...entries.filter((e) => (e?.type ?? "Targy") !== "Csomag"),
    ...entries.filter((e) => (e?.type ?? "Targy") === "Csomag")
  ];

  // 3) Már létező dokumentumok lekérése (duplikátumok elkerülésére)
  const existing       = await pack.getDocuments();
  const existingByName = new Map(existing.map(doc => [doc.name, doc]));
  const existingById   = new Map(
    existing.map(doc => [doc.getFlag(SYSTEM_ID, "_sourceId") ?? doc.id, doc])
  );

  // Régi, csomag-specifikus próbálkozásból megmaradt itemek takarítása
  const obsoleteSourceIds = new Set([
    "technikai-tudas-szerelesben-segito-zsebdroid-csomag-3"
  ]);
  for (const sid of obsoleteSourceIds) {
    const doc = existingById.get(sid);
    if (!doc) continue;
    try {
      await doc.delete();
    } catch (err) {
      console.warn("Obsolete item törlés sikertelen:", sid, err);
    }
  }

  // 4) Folders cache a packon belül (név + parent alapján)
  const packFolders = [...(pack.folders ?? [])];
  const folderCache = new Map(); // kulcs: normPath (pl. "/Legtöbbször Vásárolandó Dolgok") -> folderId

  async function getOrCreateFolderForPath(rawPath) {
    // Üres, "/", vagy csak space → nincs mappa
    if (!rawPath || typeof rawPath !== "string") return null;
    let p = rawPath.trim();
    if (!p || p === "/") return null;

    // Normalizálás: mindig "/"-szal kezdődjön, ne végződjön több "/"-sal
    if (!p.startsWith("/")) p = "/" + p;
    if (!p.endsWith("/")) p = p + "/";

    // Ha már megvan a cache-ben, visszaadjuk
    const cached = folderCache.get(p);
    if (cached) return cached;

    // Szegmensek kinyerése: "/A/B/" -> ["A", "B"]
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

      // Meglévő folder keresése a packon belül
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
  for (const raw of orderedEntries) {
    const data = foundry.utils.duplicate(raw);
    const sourceId = data._id;  // forrás azonosító (pl. "loveg-lovedek")

    // Duplikátum ellenőrzés:
    // - Nem "Csomag" tételeknél: ha már létezik, skip
    // - "Csomag" tételeknél: ha már létezik, update (pl. system.contents újrakódolás miatt)
    const incomingType = data.type ?? "Targy";
    let existingItem = null;
    if (sourceId && existingById.has(sourceId)) existingItem = existingById.get(sourceId);
    else if (data.name && existingByName.has(data.name)) existingItem = existingByName.get(data.name);

    if (existingItem && incomingType !== "Csomag") {
      // Ha az item már létezik, de az `_sourceId` flag nincs rajta, akkor frissítjük,
      // hogy a Csomag contents feloldása (sourceId -> uuid) működjön.
      if (sourceId) {
        const currentFlag = existingItem.getFlag?.(SYSTEM_ID, "_sourceId");
        if (currentFlag === sourceId) {
          skipped++;
          continue;
        }
      } else {
        skipped++;
        continue;
      }
    }

    delete data._id;            // a Foundry generáljon saját 16 hosszú ID-t
    data.type = data.type || "Targy";

    // Mappa a "path" alapján
    const path = data.path;
    delete data.path;

    // Csomag tartalom feloldás:
    // - a purchasables.json-ban a system.contents elemei lehetnek "sourceId" stringek
    // - a csomag sheet viszont valós UUID-ket vár (fromUuid), ezért sourceId -> doc.uuid feloldjuk
    if (data.type === "Csomag") {
      const sys = data.system ?? {};
      if (Array.isArray(sys.contents)) {
        const resolved = sys.contents.map((ref) => {
          if (typeof ref !== "string") return ref;
          const s = ref.trim();
          if (!s) return s;

          // Encode: "baseRef|qty=3" -> feloldjuk a baseRef-et, majd visszaragasztjuk a paramétereket.
          // (A CsomagDataModel csak stringet enged, ezért a mennyiséget string-encoded módon visszük át.)
          const parts = s.split("|");
          const base = parts[0];
          const suffix = parts.length > 1 ? "|" + parts.slice(1).join("|") : "";

          // Ha már UUID/compendium jellegű, hagyjuk.
          if (base.startsWith("Compendium.") || base.startsWith("Item.")) return s;

          const doc = existingById.get(base) ?? null;
          if (!doc) return s; // hiányzó tartalom esetén marad
          const resolvedBase = doc.uuid ?? doc.id ?? base;
          return resolvedBase + suffix;
        });
        data.system = { ...sys, contents: resolved };
      }
    }

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
      if (existingItem) {
        await existingItem.update(data);
        if (sourceId) {
          await existingItem.setFlag(SYSTEM_ID, "_sourceId", sourceId).catch(() => {});
          existingById.set(sourceId, existingItem);
        }
        if (existingItem?.name) existingByName.set(existingItem.name, existingItem);
      } else {
        const createdItem = await Item.create(data, { pack: pack.collection });
        if (sourceId && createdItem) {
          await createdItem.setFlag(SYSTEM_ID, "_sourceId", sourceId);
          existingById.set(sourceId, createdItem);
        }
        if (createdItem?.name) {
          existingByName.set(createdItem.name, createdItem);
        }
        created++;
      }
    } catch (err) {
      console.warn("Nem sikerült importálni:", data.name, err);
      skipped++;
    }
  }

  ui.notifications.info(
    `Kész: ${created} új vásárolható dolog importálva, ${skipped} kihagyva (már létezett vagy hiba).`
  );
})();
