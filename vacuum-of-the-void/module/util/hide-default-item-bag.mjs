/** Foundry alap tárgyikon – listák / thumb / lap fejléc: ne jelenjen meg „üres” helyett táska */
export const DEFAULT_FOUNDRY_ITEM_BAG = "icons/svg/item-bag.svg";

/**
 * Üres string, ha nincs kép vagy a Foundry alap táska ikon.
 * @param {unknown} raw
 * @returns {string}
 */
export function hideDefaultItemBagImg(raw) {
  const s = (typeof raw === "string" ? raw : "").trim();
  if (!s || s === DEFAULT_FOUNDRY_ITEM_BAG) return "";
  return s;
}
