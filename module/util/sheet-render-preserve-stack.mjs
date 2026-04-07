/**
 * Actor- és item-lapok újrarenderelésekor a Foundry gyakran a konténer végére teszi az ablakot,
 * így mindig a „legelöl” jelenik meg. Megőrizzük a render előtti DOM-sorrendet és z-indexet.
 */
export function installVotvSheetRenderPreserveWindowStack() {
  const Base = foundry.applications.api?.ApplicationV2;
  const ActorSheet = foundry.applications.sheets?.ActorSheetV2;
  const ItemSheet = foundry.applications.sheets?.ItemSheetV2;
  if (!Base?.prototype?.render || !ActorSheet || !ItemSheet) return;
  if (Base.prototype._votvRenderPreserveStackInstalled) return;

  const orig = Base.prototype.render;
  Base.prototype.render = async function (force, context) {
    const classes = this.options?.classes;
    const hasSheetClass = Array.isArray(classes) && classes.includes("sheet");
    const sheetLike =
      this instanceof ActorSheet ||
      this instanceof ItemSheet ||
      (hasSheetClass && String(this.constructor?.name ?? "").startsWith("Void"));

    const el0 = this.element;
    const parent0 = el0?.parentElement ?? null;
    const next0 = el0?.nextElementSibling ?? null;
    const zInline0 = el0 && el0.style?.zIndex ? String(el0.style.zIndex) : "";
    let zComputed0 = "";
    if (el0 && !zInline0) {
      const cz = window.getComputedStyle(el0).zIndex;
      if (cz && cz !== "auto") zComputed0 = cz;
    }

    let result;
    try {
      result = await orig.call(this, force, context);
    } finally {
      if (sheetLike && parent0) {
        const el = this.element;
        try {
          if (el && parent0.isConnected && parent0.contains(el)) {
            const ref = next0 && next0.isConnected && next0.parentElement === parent0 ? next0 : null;
            if (ref) parent0.insertBefore(el, ref);
            else if (next0 === null) parent0.appendChild(el);
            if (zInline0) el.style.zIndex = zInline0;
            else if (zComputed0) el.style.zIndex = zComputed0;
          }
        } catch {
          // ignore DOM edge cases
        }
      }
    }
    return result;
  };

  Base.prototype._votvRenderPreserveStackInstalled = true;
}
