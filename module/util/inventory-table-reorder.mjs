/**
 * Actor Item sorrend (Foundry `sort` mező) – inventory táblázatokhoz.
 */

const ROW_BASE = "tr.karakter-equipment-row[data-item-id]";
/** Egység/helyiség sorok és csomag-gyerek sorok kihagyva; soron belüli átrendezés csak beágyazott itemekkel. */
export const INVENTORY_REORDER_ROW_SEL = `${ROW_BASE}:not(.jarmu-unit-row):not(.karakter-package-child-row)`;
/**
 * A sor húzása: sok böngészőben a <tr draggable> nem megbízható — a név cella a fogó.
 * (A teljes sor marad drop target dragover/drop-hoz.)
 */
const INVENTORY_DRAG_HANDLE_SEL = `${INVENTORY_REORDER_ROW_SEL} td.karakter-equipment-cell-name`;

const NS = ".votvInvReorder";

export function sortDocsByItemSort(docs) {
  return docs.slice().sort((a, b) => {
    const sa = typeof a.sort === "number" ? a.sort : 0;
    const sb = typeof b.sort === "number" ? b.sort : 0;
    return sa - sb;
  });
}

function collectInventoryReorderIds(tbody, actor) {
  if (!tbody || !actor) return [];
  const table = tbody.closest("table");
  const isItemsTable = table?.classList?.contains("karakter-equipment-items") ?? false;
  const ids = [];
  for (const tr of tbody.querySelectorAll(ROW_BASE)) {
    if (tr.classList.contains("jarmu-unit-row")) continue;
    if (isItemsTable && tr.classList.contains("karakter-package-child-row")) continue;
    const id = tr.dataset?.itemId?.trim();
    if (!id || !actor.items.get(id)) continue;
    ids.push(id);
  }
  return ids;
}

function setInventoryRowsDraggable($html) {
  $html.find(INVENTORY_REORDER_ROW_SEL).each((_, tr) => {
    tr.draggable = false;
    const id = tr.dataset?.itemId?.trim();
    if (!id) return;
    const td = tr.querySelector("td.karakter-equipment-cell-name");
    if (!td) return;
    td.draggable = true;
    td.querySelectorAll?.("img.karakter-equipment-icon, img.karakter-inventory-item-icon").forEach((img) => {
      img.draggable = false;
    });
  });
}

/**
 * Fegyver / páncél / mikrochip / egyéb felszerelés táblák: sor húzása = Item.sort frissítés (ugyanabban a tbody-ban).
 * A járműegység / helyiség sorok (.jarmu-unit-row) és a csomag tartalom sorok ki vannak zárva.
 */
export function bindInventoryTableReorder(sheet, $html, actor) {
  if (!$html?.on || !actor) return;

  $html.off(NS);

  $html.on(`dragstart${NS}`, INVENTORY_DRAG_HANDLE_SEL, (ev) => {
    const tr = ev.currentTarget?.closest?.("tr");
    const id = tr?.dataset?.itemId?.trim();
    if (!id || !actor.items.get(id)) return;
    sheet._votvInvReorderSourceId = id;
    const item = actor.items.get(id);
    const dt = ev.originalEvent?.dataTransfer;
    if (dt) {
      dt.effectAllowed = "copyMove";
      const uuid = item?.uuid ?? "";
      if (uuid) {
        dt.setData("text/plain", uuid);
        dt.setData("application/json", JSON.stringify({ type: "Item", uuid }));
      } else {
        dt.setData("text/plain", id);
      }
      if (typeof dt.setDragImage === "function" && tr) {
        dt.setDragImage(tr, 0, 0);
      }
    }
  });

  $html.on(`dragend${NS}`, INVENTORY_DRAG_HANDLE_SEL, () => {
    sheet._votvInvReorderSourceId = null;
    $html.find(`${ROW_BASE}.karakter-actions-row-drag-over`).removeClass("karakter-actions-row-drag-over");
  });

  $html.on(`dragover${NS}`, INVENTORY_REORDER_ROW_SEL, (ev) => {
    const sourceId = sheet._votvInvReorderSourceId;
    const target = ev.currentTarget;
    const targetId = target?.dataset?.itemId?.trim();
    if (!sourceId || !targetId || sourceId === targetId) return;
    if (!actor.items.get(sourceId)) return;
    const tbody = target?.closest("tbody");
    const sourceEl = $html
      .find(INVENTORY_REORDER_ROW_SEL)
      .filter((_, el) => (el.dataset?.itemId ?? "").trim() === sourceId)
      .get(0);
    if (!tbody || sourceEl?.closest("tbody") !== tbody) return;
    ev.preventDefault();
    const dt = ev.originalEvent?.dataTransfer;
    if (dt) dt.dropEffect = "move";
    target.classList.add("karakter-actions-row-drag-over");
  });

  $html.on(`dragleave${NS}`, INVENTORY_REORDER_ROW_SEL, (ev) => {
    ev.currentTarget?.classList.remove("karakter-actions-row-drag-over");
  });

  $html.on(`drop${NS}`, INVENTORY_REORDER_ROW_SEL, async (ev) => {
    const target = ev.currentTarget;
    target?.classList.remove("karakter-actions-row-drag-over");
    let sourceId = sheet._votvInvReorderSourceId;
    sheet._votvInvReorderSourceId = null;
    const targetId = target?.dataset?.itemId?.trim();
    if (!sourceId || !targetId || sourceId === targetId) return;
    if (!actor.items.get(sourceId) || !actor.items.get(targetId)) return;
    const tbody = target?.closest("tbody");
    const sourceEl = $html
      .find(INVENTORY_REORDER_ROW_SEL)
      .filter((_, el) => (el.dataset?.itemId ?? "").trim() === sourceId)
      .get(0);
    if (!tbody || sourceEl?.closest("tbody") !== tbody) return;
    ev.preventDefault();
    ev.stopPropagation();
    const ids = collectInventoryReorderIds(tbody, actor);
    const fromIdx = ids.indexOf(sourceId);
    const toIdx = ids.indexOf(targetId);
    if (fromIdx === -1 || toIdx === -1) return;
    const next = ids.slice();
    next.splice(fromIdx, 1);
    next.splice(toIdx, 0, sourceId);
    const updates = next.map((id, index) => ({
      _id: id,
      sort: (index + 1) * 10
    }));
    try {
      await actor.updateEmbeddedDocuments("Item", updates);
    } catch (err) {
      console.warn("Vacuum of the Void | Inventory reorder failed:", err);
    }
  });

  setInventoryRowsDraggable($html);
  requestAnimationFrame(() => setInventoryRowsDraggable($html));
}

/**
 * Újrarender után (pl. `updateEmbeddedDocuments` sorrend) a táblázat DOM új;
 * a delegated események megmaradhatnak, de a névcellák `draggable` flagjét újra kell írni.
 */
export function refreshInventoryRowDraggable(root) {
  if (!root) return;
  const $r = root.jquery ? root : $(root);
  if (!$r?.length || typeof $r.find !== "function") return;
  setInventoryRowsDraggable($r);
  requestAnimationFrame(() => setInventoryRowsDraggable($r));
}
