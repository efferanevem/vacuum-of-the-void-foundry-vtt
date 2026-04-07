/** Csomag tartalom: helyiség képesség mintájára – másolat a csomag dokumentumban (nem külön Item). */

export const CSOMAG_EMB_PREFIX = "emb:";

export function isEmbeddedCsomagRef(ref) {
  return typeof ref === "string" && ref.startsWith(CSOMAG_EMB_PREFIX);
}

export function parseEmbeddedCsomagIndex(ref) {
  if (!isEmbeddedCsomagRef(ref)) return -1;
  const n = Number(ref.slice(CSOMAG_EMB_PREFIX.length));
  return Number.isInteger(n) && n >= 0 ? n : -1;
}

export function parseCsomagContentsEncodedRef(refStr) {
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
}

/**
 * @param {Item} sourceItem
 * @returns {{ type: string, name: string, img: string, system: object }}
 */
export function buildCsomagItemSnapshot(sourceItem) {
  if (!sourceItem || sourceItem.documentName !== "Item") {
    return { type: "Targy", name: "—", img: "", system: {} };
  }
  return {
    type: sourceItem.type ?? "Targy",
    name: sourceItem.name ?? "—",
    img: sourceItem.img ?? "",
    system: foundry.utils.duplicate(sourceItem.system ?? {})
  };
}

/**
 * Egy contents sor törlése (emb:index): embedded splice + összes emb: ref újraindexelése.
 */
export async function removeEmbeddedPackageRow(csomagItem, embIndexToRemove) {
  if (!csomagItem || embIndexToRemove < 0) return;
  const embedded = [...(csomagItem.system?.embeddedItems ?? [])];
  if (embIndexToRemove >= embedded.length) return;
  embedded.splice(embIndexToRemove, 1);
  const oldContents = [...(csomagItem.system?.contents ?? [])];
  const newContents = oldContents.flatMap((ref) => {
    if (!ref || typeof ref !== "string") return [];
    if (!isEmbeddedCsomagRef(ref)) return [ref];
    const idx = parseEmbeddedCsomagIndex(ref);
    if (idx === embIndexToRemove) return [];
    if (idx > embIndexToRemove) return [`${CSOMAG_EMB_PREFIX}${idx - 1}`];
    return [ref];
  });
  await csomagItem.update({
    "system.embeddedItems": embedded,
    "system.contents": newContents
  });
}

/**
 * Minden nem–emb: contents sort pillanatképpé alakít (actoron lévő / compendium / világ Item alapján).
 */
export async function migrateCsomagToEmbeddedSnapshots(csomagItem, actor) {
  if (!csomagItem || csomagItem.type !== "Csomag") return;
  const sys = csomagItem.system ?? {};
  let refs = Array.isArray(sys.contents) ? [...sys.contents] : [];
  const embStart = [...(sys.embeddedItems ?? [])];
  const ns = game.votv?.systemId ?? "vacuum-of-the-void";
  const packageEntryFlag = "packageEntryOf";
  const isDedicatedToThisCsomag = (it) =>
    it?.getFlag?.(ns, packageEntryFlag) === csomagItem.id ||
    String(it?.getFlag?.(ns, packageEntryFlag) ?? "") === String(csomagItem.id);

  if (!refs.length) {
    if (embStart.length) {
      await csomagItem.update({ "system.embeddedItems": embStart });
    }
    return;
  }
  if (refs.every((r) => !r || isEmbeddedCsomagRef(String(r)))) return;

  const embeddedItems = [...embStart];
  const newContents = [];
  const dedicatedIdsToDelete = [];

  for (const ref of refs) {
    if (!ref) continue;
    const refStr = String(ref);
    if (isEmbeddedCsomagRef(refStr)) {
      newContents.push(refStr);
      continue;
    }
    const { baseRef, qtyMul } = parseCsomagContentsEncodedRef(refStr);
    if (!baseRef) {
      newContents.push(refStr);
      continue;
    }

    let sourceItem = null;
    try {
      sourceItem = await fromUuid(baseRef);
      if (sourceItem?.documentName !== "Item") sourceItem = null;
    } catch {
      sourceItem = null;
    }
    if (!sourceItem) sourceItem = game.items?.get(baseRef) ?? null;
    if (!sourceItem && actor?.items) sourceItem = actor.items.get?.(baseRef) ?? null;
    if (!sourceItem || sourceItem.documentName !== "Item") {
      newContents.push(refStr);
      continue;
    }

    const snap = buildCsomagItemSnapshot(sourceItem);
    const rawQty = (snap.system?.quantity ?? "").toString().trim();
    const qn = Number.parseInt(rawQty, 10);
    const baseQty = Number.isFinite(qn) && qn > 0 ? qn : 1;
    snap.system = snap.system ?? {};
    snap.system.quantity = String(baseQty * qtyMul);

    if (
      actor?.documentName === "Actor" &&
      sourceItem.parent?.id === actor.id &&
      isDedicatedToThisCsomag(sourceItem)
    ) {
      dedicatedIdsToDelete.push(sourceItem.id);
    }

    const idx = embeddedItems.length;
    embeddedItems.push(snap);
    newContents.push(`${CSOMAG_EMB_PREFIX}${idx}`);
  }

  await csomagItem.update({
    "system.contents": newContents,
    "system.embeddedItems": embeddedItems
  });

  const uniqDel = [...new Set(dedicatedIdsToDelete)].filter(Boolean);
  if (uniqDel.length && actor?.deleteEmbeddedDocuments) {
    try {
      await actor.deleteEmbeddedDocuments("Item", uniqDel);
    } catch (err) {
      console.warn("Void | Csomag migráció: dedikált klón törlése sikertelen", err);
    }
  }
}
