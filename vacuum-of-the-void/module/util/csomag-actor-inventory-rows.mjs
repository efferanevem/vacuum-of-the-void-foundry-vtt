import {
  isEmbeddedCsomagRef,
  parseEmbeddedCsomagIndex,
  parseCsomagContentsEncodedRef
} from "./csomag-embedded-utils.mjs";

/** Karakter/jármű tábla „Leírás” oszlopa: fegyver/páncél fő szövege a speciális mezőben van. */
function packageInventoryDescriptionCell(itemType, sys) {
  const s = sys ?? {};
  const t = (itemType ?? "").toString();
  if (t === "Fegyver" || t === "weapon" || t === "Pancel") {
    const special = (s.special ?? "").toString().trim();
    if (special) return special;
  }
  return (s.description ?? "").toString().trim();
}

/**
 * Tárgy-sorok elrejtése: csomag tartalom hivatkozásai, kivéve `emb:` (azok nem külön actor Item).
 * @param {Actor | null} [actor] – beágyazott item id feloldásához
 */
export async function collectItemIdsHiddenByPackageContents(packageDocs, actor = null) {
  const childIds = new Set();
  for (const pkg of packageDocs) {
    const refs = Array.isArray(pkg?.system?.contents) ? pkg.system.contents : [];
    for (const ref of refs) {
      if (!ref) continue;
      const s = String(ref);
      if (isEmbeddedCsomagRef(s)) continue;
      const { baseRef } = parseCsomagContentsEncodedRef(s);
      if (!baseRef) continue;
      let doc = null;
      try {
        doc = await fromUuid(baseRef);
        if (doc?.documentName !== "Item") doc = null;
      } catch {
        doc = null;
      }
      if (!doc) doc = game.items?.get(baseRef) ?? null;
      if (!doc && actor?.items) doc = actor.items.get?.(baseRef) ?? null;
      if (doc) childIds.add(doc.id);
    }
  }
  return childIds;
}

/**
 * Egy csomag sorai az „Egyéb felszerelés” táblához (gyerek sorok).
 * @param {Item} csomagItem
 * @param {Actor} actor
 * @param {{ cleanImg?: (s: string) => string }} opts
 */
export async function buildCsomagChildInventoryRows(csomagItem, actor, opts = {}) {
  const cleanImg = opts.cleanImg ?? ((url) => url ?? "");
  const refs = Array.isArray(csomagItem.system?.contents) ? csomagItem.system.contents : [];
  const rows = [];

  for (const ref of refs) {
    if (!ref) continue;
    const refStr = String(ref);

    if (isEmbeddedCsomagRef(refStr)) {
      const idx = parseEmbeddedCsomagIndex(refStr);
      const snap = csomagItem.system?.embeddedItems?.[idx];
      if (!snap) continue;
      const dSys = snap.system ?? {};
      const qty = (dSys.quantity ?? "").toString().trim() || "1";
      const dDescRaw = packageInventoryDescriptionCell(snap.type, dSys);
      rows.push({
        itemId: `${csomagItem.id}::${refStr}`,
        actorId: actor.id,
        name: snap.name ?? "—",
        img: cleanImg(snap.img ?? ""),
        quantity: qty,
        description: dDescRaw || "—",
        isPackage: false,
        isPackageChild: true,
        parentPackageId: csomagItem.id,
        parentPackageName: csomagItem.name ?? "Csomag",
        innerType: snap.type ?? "Targy",
        packageContentRef: refStr
      });
      continue;
    }

    const { baseRef, qtyMul } = parseCsomagContentsEncodedRef(refStr);
    if (!baseRef) continue;

    let doc = null;
    try {
      doc = await fromUuid(baseRef);
      if (doc?.documentName !== "Item") doc = null;
    } catch {
      doc = null;
    }
    if (!doc) doc = game.items?.get(baseRef) ?? null;
    if (!doc) doc = actor.items?.get?.(baseRef) ?? null;
    if (!doc) continue;

    const dSys = doc.system ?? {};
    const dDescRaw = packageInventoryDescriptionCell(doc.type, dSys);
    const rawQty = (dSys.quantity ?? "").toString().trim();
    const rawQtyNum = Number.parseInt(rawQty, 10);
    const baseQty = Number.isFinite(rawQtyNum) && rawQtyNum > 0 ? rawQtyNum : 1;
    const quantity = String(baseQty * qtyMul);
    const childRowItemId =
      doc.parent?.id === actor.id ? doc.id : (doc.uuid ?? baseRef);

    rows.push({
      itemId: childRowItemId,
      actorId: actor.id,
      name: doc.name ?? "—",
      img: cleanImg(doc.img ?? ""),
      quantity,
      description: dDescRaw || "—",
      isPackage: false,
      isPackageChild: true,
      parentPackageId: csomagItem.id,
      parentPackageName: csomagItem.name ?? "Csomag",
      innerType: doc.type,
      packageContentRef: refStr
    });
  }

  return rows;
}
