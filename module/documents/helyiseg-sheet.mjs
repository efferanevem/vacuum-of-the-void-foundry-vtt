import { hideDefaultItemBagImg } from "../util/hide-default-item-bag.mjs";
import {
  buildAbilityChatHtmlFromSnapshot,
  buildAbilitySnapshotForUnit,
  buildMergedUnitAbilityList,
  isEmbeddedAbilityRef,
  openEmbeddedUnitAbilitySheet,
  parseEmbeddedAbilityIndex
} from "../util/unit-ability-embedded.mjs";

export class VoidHelyisegSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
      template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
      width: 560,
      minWidth: 520,
      height: 480,
      form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: false }),
      dragDrop: [
        ...(super.DEFAULT_OPTIONS?.dragDrop ?? []),
        {
          dragSelector: null,
          dropSelector: ".karakter-ability-area[data-area='abilities']"
        }
      ]
    },
    { inplace: false }
  );

  get item() {
    return this.document;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const sheet = this;
    const root =
      this.form ??
      html?.querySelector?.("form.votv-helyiseg-sheet") ??
      html ??
      this.element;
    const $html = root ? $(root) : $([]);

    $html.on("click", ".karakter-ability-open", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef;
      const itemId = ev.currentTarget?.dataset?.itemId;
      if (isEmbeddedAbilityRef(ref)) {
        const idx = parseEmbeddedAbilityIndex(ref);
        if (idx >= 0) openEmbeddedUnitAbilitySheet(sheet.document, idx);
        return;
      }
      let item = null;
      if (ref) {
        try {
          item = await fromUuid(ref);
        } catch {
          item = null;
        }
      }
      if (!item && itemId) {
        item = game.items?.get(itemId) ?? null;
      }
      item?.sheet?.render(true);
    });

    $html.on("click", ".karakter-ability-chat", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef;
      const itemId = ev.currentTarget?.dataset?.itemId;
      const key = ref || itemId;
      if (!key) return;
      await sheet._postAbilityToChat(key);
    });

    $html.on("click", ".karakter-ability-pill-remove", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const ref = ev.currentTarget?.dataset?.itemRef;
      if (!ref) return;
      if (isEmbeddedAbilityRef(ref)) {
        const idx = parseEmbeddedAbilityIndex(ref);
        if (idx < 0) return;
        const embedded = [...(sheet.document.system?.abilities?.embedded ?? [])];
        embedded.splice(idx, 1);
        await sheet.document.update({ "system.abilities.embedded": embedded });
        return;
      }
      const sys = sheet.document.system ?? {};
      const current = Array.isArray(sys.abilities?.items) ? sys.abilities.items.slice() : [];
      const idx = current.indexOf(ref);
      const next = idx >= 0 ? [...current.slice(0, idx), ...current.slice(idx + 1)] : current;
      await sheet.document.update({ "system.abilities.items": next });
    });

    const abilityArea = root?.querySelector?.(".karakter-ability-area[data-area='abilities']");
    if (abilityArea) {
      abilityArea.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        abilityArea.classList.add("karakter-ability-area-drag-over");
      });
      abilityArea.addEventListener("dragleave", () => {
        abilityArea.classList.remove("karakter-ability-area-drag-over");
      });
      abilityArea.addEventListener("drop", () => {
        abilityArea.classList.remove("karakter-ability-area-drag-over");
      });
    }

    // Globális drop listener: a képességek ráhúzása működjön (ugyanúgy, mint a járműegység lapon).
    if (!this._votvGlobalDrop) {
      this._votvGlobalDrop = async (ev) => {
        try {
          const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
          const isOnSheetElement =
            (this.element && path.includes(this.element)) ||
            (this.id && ev.target?.closest?.(`#${CSS.escape(this.id)}`));
          if (!isOnSheetElement) return;

          let data = null;
          try {
            data = TextEditor.getDragEventData(ev);
          } catch {
            // nem Item drag
          }
          if (!data || data.type !== "Item") return;

          const getUuid = (d) => {
            if (!d) return null;
            const u =
              d.uuid ??
              d.documentUuid ??
              d.data?.uuid ??
              (typeof d === "string" ? d : null);
            if (u) return u;
            if (typeof d === "object") {
              for (const v of Object.values(d)) {
                if (typeof v === "string" && v.includes(".") && v.startsWith("Item.")) return v;
              }
            }
            return null;
          };

          const uuid = getUuid(data);
          if (!uuid) return;

          const doc = await fromUuid(uuid);
          if (!doc || doc.documentName !== "Item") return;

          if (doc.type === "Kepesseg" || doc.type === "ability") {
            const snap = buildAbilitySnapshotForUnit(doc);
            const current = [...(this.document.system?.abilities?.embedded ?? [])];
            current.push(snap);
            await this.document.update({ "system.abilities.embedded": current });
          }
        } catch (err) {
          console.error("VoidHelyisegSheet global drop error", err);
        }
      };
      window.addEventListener("drop", this._votvGlobalDrop, true);
    }

    if (!this.isEditable) return;

    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.document.update(updateData).catch((err) => console.warn("VoidHelyisegSheet save failed", err));
    };
    const isOurForm = (form) =>
      form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));

    sheet._votvChange = (ev) => {
      const form = ev.target?.form ?? ev.target?.closest?.("form");
      if (!isOurForm(form)) return;
      doSubmit(form);
    };
    document.body.addEventListener("change", sheet._votvChange, true);
  }

  _tearDown(options) {
    document.body.removeEventListener("change", this._votvChange, true);
    if (this._votvGlobalDrop) {
      window.removeEventListener("drop", this._votvGlobalDrop, true);
      this._votvGlobalDrop = null;
    }
    return super._tearDown?.(options);
  }

  _getFormDataForUpdate(form) {
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") {
        if (el.value === "") continue;
        value = Number(el.value);
      } else {
        value = el.value ?? "";
      }
      foundry.utils.setProperty(updateData, el.name, value);
    }
    return updateData;
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options) ?? {};
    context.item = this.document;
    const sys = foundry.utils.deepClone(this.document.system ?? {});
    const abilities = sys.abilities ?? {};
    const abilityItems = await buildMergedUnitAbilityList(abilities, hideDefaultItemBagImg);

    context.system = sys;
    context.abilityList = abilityItems;
    return context;
  }

  async _postAbilityToChat(ref) {
    if (!ref) return;
    if (isEmbeddedAbilityRef(ref)) {
      const idx = parseEmbeddedAbilityIndex(ref);
      const snap = this.document.system?.abilities?.embedded?.[idx];
      if (!snap) return;
      return ChatMessage.create({
        speaker: ChatMessage.getSpeaker({}),
        content: buildAbilityChatHtmlFromSnapshot(snap),
        flags: { "vacuum-of-the-void": {} }
      });
    }
    let item = null;
    try {
      item = await fromUuid(ref);
    } catch {
      item = game.items?.get(ref) ?? null;
    }
    if (!item || (item.type !== "Kepesseg" && item.type !== "ability")) return;
    const kind = item.system?.kind ?? "passive";
    const kp = Number(item.system?.kp ?? 0) || 0;
    const description = (item.system?.description ?? "").trim();
    const kindLabel =
      kind === "active"
        ? "Aktív"
        : kind === "species"
        ? "Faji"
        : kind === "background"
        ? "Háttér"
        : kind === "module"
        ? "Modul"
        : "Passzív";
    let kpLine = "";
    if (kind === "active" && kp > 0) {
      kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
    } else if (kind === "module" && kp > 0) {
      kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
    }
    const descLine = description
      ? `<p class="votv-ability-description">${description}</p>`
      : "";
    const content = `
      <h2>${item.name}</h2>
      <p><strong>Típus:</strong> ${kindLabel}</p>
      ${kpLine}
      ${descLine}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content,
      flags: { "vacuum-of-the-void": { abilityId: item.id } }
    });
  }

  async _onDropDocument(event, document) {
    if (!document || document.documentName !== "Item") {
      return super._onDropDocument?.(event, document);
    }

    if (document.type === "Kepesseg" || document.type === "ability") {
      const snap = buildAbilitySnapshotForUnit(document);
      const current = [...(this.document.system?.abilities?.embedded ?? [])];
      current.push(snap);
      await this.document.update({ "system.abilities.embedded": current });
      return document;
    }

    return super._onDropDocument?.(event, document);
  }
}
