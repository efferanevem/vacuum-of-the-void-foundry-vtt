import { hideDefaultItemBagImg } from "../util/hide-default-item-bag.mjs";

export class VoidJarmuEgysegSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
      template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
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
    // ApplicationV2: a tartalom a formban él – használjuk a formot rootnak, mint a karakterlapon.
    const root =
      this.form ??
      html?.querySelector?.("form.votv-jarmuegyseg-sheet") ??
      html ??
      this.element;
    const $html = root ? $(root) : $([]);

    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      this.document?.name,
      "id=",
      this.document?.id,
      "root=",
      root
    );

    // Globális drop listener: biztosan elkapjuk az Item drag&drop-ot, még ha a DragDrop util nem is hívná a sheetet.
    if (!this._votvGlobalDrop) {
      this._votvGlobalDrop = async (ev) => {
        try {
          // Csak akkor foglalkozzunk vele, ha a drop a mi sheetünkön történt.
          const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
          const isOnSheetElement =
            (this.element && path.includes(this.element)) ||
            (this.id && ev.target?.closest?.(`#${CSS.escape(this.id)}`));
          if (!isOnSheetElement) return;

          console.log("VOTV JarmuEgysegSheet global drop event=", ev);

          let data = null;
          try {
            data = TextEditor.getDragEventData(ev);
          } catch (e) {
            console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", e);
          }

          console.log("VOTV JarmuEgysegSheet global drop data=", data);

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
          console.log("VOTV JarmuEgysegSheet global drop uuid=", uuid);
          if (!uuid) return;

          const doc = await fromUuid(uuid);
          console.log("VOTV JarmuEgysegSheet global drop doc=", doc?.id, doc?.type);
          if (!doc || doc.documentName !== "Item") return;

          if (doc.type === "Kepesseg" || doc.type === "ability") {
            // Csak hivatkozást tárolunk: abilities.items = forrás képesség UUID / id.
            const ref = doc.uuid ?? doc.id;
            if (!ref) return;
            const sys = this.document.system ?? {};
            const current = Array.isArray(sys.abilities?.items) ? sys.abilities.items.slice() : [];
            current.push(ref);
            console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", current);
            await this.document.update({ "system.abilities.items": current });
          }
        } catch (err) {
          console.error("VOTV JarmuEgysegSheet global drop handler error", err);
        }
      };
      window.addEventListener("drop", this._votvGlobalDrop, true);
    }

    // Képesség pill: kattintás → képesség lap megnyitása
    $html.on("click", ".karakter-ability-open", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef;
      const itemId = ev.currentTarget?.dataset?.itemId;
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

    // Képesség chat gomb
    $html.on("click", ".karakter-ability-chat", async (ev) => {
      ev.preventDefault();
      const ref = ev.currentTarget?.dataset?.itemRef;
      const itemId = ev.currentTarget?.dataset?.itemId;
      const key = ref || itemId;
      if (!key) return;
      await this._postAbilityToChat(key);
    });

    // Képesség eltávolítása (Alt+klikk)
    $html.on("click", ".karakter-ability-pill-remove", async (ev) => {
      ev.preventDefault();
      if (!ev.altKey) return;
      const ref = ev.currentTarget?.dataset?.itemRef;
      if (!ref) return;
      const sys = this.document.system ?? {};
      const current = Array.isArray(sys.abilities?.items) ? sys.abilities.items.slice() : [];
      const idx = current.indexOf(ref);
      const next = idx >= 0 ? [...current.slice(0, idx), ...current.slice(idx + 1)] : current;
      await this.document.update({ "system.abilities.items": next });
    });

    // Drag-over highlight (NPC lap mintájára) – csak vizuális kiemelés, a tényleges drop-ot a DragDrop kezeli.
    const abilityArea = root?.querySelector?.(".karakter-ability-area[data-area='abilities']");
    if (abilityArea) {
      // Csak vizuális highlight – a tényleges drop-ot az ItemSheetV2 + _onDropDocument intézi.
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

    if (!this.isEditable) return;

    // Egyszerű change → mentés (mint a többi item sheeten)
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.document.update(updateData).catch((err) => console.warn("VoidJarmuEgysegSheet save failed", err));
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
    const abilityRefs = Array.isArray(abilities.items) ? abilities.items : [];

    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", abilityRefs);

    const abilityDocs = await Promise.all(
      abilityRefs.map(async (ref) => {
        if (!ref) return null;
        try {
          const doc = await fromUuid(ref);
          if (doc && (doc.type === "Kepesseg" || doc.type === "ability")) return doc;
        } catch {
          const item = game.items?.get(ref);
          if (item && (item.type === "Kepesseg" || item.type === "ability")) return item;
        }
        return null;
      })
    );

    const abilityItems = abilityDocs
      .map((doc, index) => ({ doc, ref: abilityRefs[index] }))
      .filter((pair) => !!pair.doc && !!pair.ref)
      .map(({ doc, ref }) => {
        const kind = (doc.system?.kind ?? "passive").toString();
        const kp = Number(doc.system?.kp ?? 0) || 0;
        const isSpecies = kind === "species";
        return {
          id: doc.id,
          ref,
          name: doc.name,
          img: hideDefaultItemBagImg(doc.img),
          kind,
          // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
          // aktív/passzív stb. esetén igen.
          kpDisplay: isSpecies ? 0 : kp
        };
      });

    context.system = sys;
    context.abilityList = abilityItems;
    return context;
  }

  async _postAbilityToChat(ref) {
    if (!ref) return;
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

  /**
   * ItemSheetV2 drop logika: a Foundry már feloldja a dokumentumot, itt csak kezeljük a képesség referenciát.
   */
  async _onDropDocument(event, document) {
    console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", document);

    if (!document || document.documentName !== "Item") {
      return super._onDropDocument?.(event, document);
    }

    if (document.type === "Kepesseg" || document.type === "ability") {
      // Csak a meglévő képességre hivatkozunk – nem hozunk létre új Itemet.
      const ref = document.uuid ?? document.id;
      if (!ref) return document;
      const sys = this.document.system ?? {};
      const current = Array.isArray(sys.abilities?.items) ? sys.abilities.items.slice() : [];
      current.push(ref);
      console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", current);
      await this.document.update({ "system.abilities.items": current });
      return document;
    }

    return super._onDropDocument?.(event, document);
  }
}

