import { isEmbeddedCsomagRef, parseEmbeddedCsomagIndex } from "./csomag-embedded-utils.mjs";
import { openEmbeddedCsomagItemSheetFromRef } from "../documents/csomag-embedded-item-sheet.mjs";

/** @returns {boolean} true ha megnyitottunk beágyazott csomag-sort (ne folytasd a sima Item útvonalat). */
export function openActorInventoryEmbeddedCsomagRow(actor, target) {
  const pRef = (target?.dataset?.packageContentRef ?? "").trim();
  const csomagId = (target?.dataset?.csomagId ?? "").trim();
  if (!actor || !isEmbeddedCsomagRef(pRef) || !csomagId) return false;
  const csomag = actor.items.get(csomagId);
  if (!csomag || csomag.type !== "Csomag") return false;
  openEmbeddedCsomagItemSheetFromRef(csomag, pRef);
  return true;
}

/** @returns {boolean} true ha frissítettünk `embeddedItems` sort. */
export async function patchActorInventoryEmbeddedCsomagQuantity(actor, input, safe) {
  const pRef = (input?.dataset?.packageContentRef ?? "").trim();
  const csomagId = (input?.dataset?.csomagId ?? "").trim();
  if (!actor || !isEmbeddedCsomagRef(pRef) || !csomagId) return false;
  const csomag = actor.items.get(csomagId);
  const idx = parseEmbeddedCsomagIndex(pRef);
  if (!csomag || csomag.type !== "Csomag" || idx < 0) return false;
  const arr = [...(csomag.system?.embeddedItems ?? [])];
  const cur = foundry.utils.deepClone(arr[idx] ?? { type: "Targy", name: "—", img: "", system: {} });
  cur.system = cur.system ?? {};
  cur.system.quantity = safe;
  arr[idx] = cur;
  await csomag.update({ "system.embeddedItems": arr });
  return true;
}
