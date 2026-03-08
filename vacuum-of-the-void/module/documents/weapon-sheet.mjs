/** Összes jártasság a fegyver Jártasság legördülőhöz (value = system.skills kulcs, label = megjelenített név). */
const VOTV_WEAPON_SKILL_OPTIONS = [
  { value: "deception", label: "Átverés" },
  { value: "medicalCare", label: "Betegellátás" },
  { value: "endurance", label: "Erőnlét" },
  { value: "perception", label: "Észlelés" },
  { value: "cooking", label: "Főzés" },
  { value: "quickThinking", label: "Gyorsgondolkodás" },
  { value: "combatTraining", label: "Harcképzettség" },
  { value: "vehicleOperation", label: "Járműirányítás" },
  { value: "grenadeUse", label: "Kézifegyver Használat" },
  { value: "lexicalKnowledge", label: "Lexikális Tudás" },
  { value: "stealth", label: "Lopakodás" },
  { value: "firearms", label: "Löveghasználat" },
  { value: "intimidation", label: "Megfélemlítés" },
  { value: "persuasion", label: "Meggyőzés" },
  { value: "memory", label: "Memória" },
  { value: "mentalStrength", label: "Mentális Erősség" },
  { value: "languages", label: "Nyelvek" },
  { value: "luck", label: "Szerencse" },
  { value: "technicalKnowledge", label: "Technikai Tudás" },
  { value: "music", label: "Zene" }
];

export class VoidWeaponSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  static PARTS = foundry.utils.mergeObject(super.PARTS ?? {}, {
    content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
  });

  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
    template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
    width: 550,
    minWidth: 550,
    height: 400,
    form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: false })
  });

  _initializeApplicationOptions(options) {
    const result = super._initializeApplicationOptions(options);
    const doc = options?.document ?? this.document;
    if (doc?.uuid || doc?.id) {
      const raw = doc.uuid ?? doc.id;
      result.uniqueId = `${this.constructor.name}-${String(raw).replace(/\./g, "-")}`;
    }
    return result;
  }

  get item() {
    return this.document;
  }

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const sheet = this;
    sheet._votvProfileImgClick = (ev) => {
      if (!sheet.isEditable) return;
      if (!ev.target?.closest?.(".profile") && ev.target?.getAttribute?.("data-edit") !== "img") return;
      ev.preventDefault();
      ev.stopPropagation();
      const FilePickerClass = foundry.applications?.apps?.FilePicker?.implementation ?? globalThis.FilePicker;
      const fp = new FilePickerClass({
        type: "image",
        current: sheet.document.img || "",
        callback: (path) => { if (path) sheet.document.update({ img: path }); }
      });
      fp.browse();
    };
    const root = html?.nodeType === 9 ? (html.body ?? html.documentElement) : html;
    if (root?.addEventListener) {
      root.addEventListener("click", sheet._votvProfileImgClick, true);
      sheet._votvProfileClickRoot = root;
    } else {
      document.body.addEventListener("click", sheet._votvProfileImgClick, true);
    }
    if (!this.isEditable) return;
    const doSubmit = (form) => {
      if (!form) return;
      const updateData = sheet._getFormDataForUpdate(form);
      if (Object.keys(updateData).length === 0) return;
      sheet.document.update(updateData).catch(err => console.warn("VoidWeaponSheet save failed", err));
    };
    const isOurForm = (form) => form && (sheet.element?.contains?.(form) || (sheet.id && form.closest?.(`#${CSS.escape(sheet.id)}`)));
    sheet._votvChange = (ev) => {
      const form = ev.target?.form ?? ev.target?.closest?.("form");
      if (!isOurForm(form)) return;
      doSubmit(form);
    };
    document.body.addEventListener("change", sheet._votvChange, true);
  }

  _tearDown(options) {
    document.body.removeEventListener("change", this._votvChange, true);
    if (this._votvProfileClickRoot) {
      this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, true);
      this._votvProfileClickRoot = null;
    } else {
      document.body.removeEventListener("click", this._votvProfileImgClick, true);
    }
    return super._tearDown?.(options);
  }

  _getFormDataForUpdate(form) {
    const updateData = {};
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (el.type === "radio" && !el.checked) continue;
      // Ne írjuk felül az img mezőt a formból (data-edit="img" kezelése külön van)
      if (el.name === "img") continue;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") value = el.value === "" ? 0 : Number(el.value);
      else value = el.value ?? "";
      foundry.utils.setProperty(updateData, el.name, value);
    }
    return updateData;
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options) ?? {};
    context.item = this.document;
    const sys = foundry.utils.deepClone(this.document.system ?? {});
    // Hatótáv: a sablon mindig szöveget kapjon (ne [object Object]).
    if (typeof sys.range !== "string" || sys.range === "[object Object]") {
      sys.range = "";
    }
    // Jártasság: ha nincs beállítva, alapértelmezett Kézifegyver Használat
    if (sys.skillKey === undefined || sys.skillKey === null || String(sys.skillKey).trim() === "") {
      sys.skillKey = "grenadeUse";
    }
    context.system = sys;
    context.skillOptions = VOTV_WEAPON_SKILL_OPTIONS;
    return context;
  }
}

