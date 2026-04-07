/**
 * Cépont szám autoinkremens: üres hit mezőhöz a jármű/bázis többi egységéhez képest következő szám (1, 2, 3…).
 * Tisztán numerikus vagy számokkal kezdődő értékeket (pl. "1–3") használ összehasonlításként.
 */

/**
 * A `hit` mező többféle alakot vehet fel, pl.:
 * - "4"   → 4
 * - "4–8" → 8 (tartomány vége)
 * - "9 - 12" → 12
 *
 * Az összehasonlításhoz mindig a mezőben szereplő számok közül a legnagyobbat vesszük.
 * @param {unknown} hitStr
 */
export function extractComparableHitNumber(hitStr) {
  const s = (hitStr ?? "").toString().trim();
  if (!s) return null;
  const nums = s.match(/\d+/g);
  if (!nums?.length) return null;
  let max = 0;
  for (const n of nums) {
    const v = Number.parseInt(n, 10);
    if (Number.isFinite(v) && v > max) max = v;
  }
  return max || null;
}

/**
 * @param {Actor} actor
 * @param {"Jarmuegyseg"|"Helyiseg"} unitType
 */
export function nextEmptyHitForActorUnit(actor, unitType) {
  let max = 0;
  for (const it of actor?.items?.contents ?? []) {
    if (it.type !== unitType) continue;
    const n = extractComparableHitNumber(it.system?.hit);
    if (n != null && n > max) max = n;
  }
  return max + 1;
}

/**
 * Behúzott / új beágyazott egység: a táblázat `item.sort` szerint rendez – a végére max+1.
 * @param {Actor} actor
 * @param {"Jarmuegyseg"|"Helyiseg"} unitType
 */
export function nextEmbeddedUnitSortForTail(actor, unitType) {
  let max = 0;
  for (const it of actor?.items?.contents ?? []) {
    if (it.type !== unitType) continue;
    const s = Number(it.sort);
    const v = Number.isFinite(s) ? s : 0;
    if (v > max) max = v;
  }
  return max + 1;
}
