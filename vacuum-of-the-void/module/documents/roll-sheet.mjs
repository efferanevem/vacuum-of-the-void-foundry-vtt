import { computeVotvCritInfo } from "../util/votv-result-type.mjs";

/**
 * Roll sheet: skill roll with 3d6 + modifiers, optional morale dice, advantage/disadvantage, constant bonus.
 * Opened when clicking a skill label on the PC sheet.
 */
import { VoidKarakterSheet } from "./karakter-sheet.mjs";

export class VoidRollSheet extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions ?? {}, {
      id: "votv-roll-sheet",
      title: "Dobás",
      template: "systems/vacuum-of-the-void/templates/app/roll-sheet.hbs",
      width: 380,
      height: "auto",
      classes: ["vacuum-of-the-void", "roll-sheet"],
      resizable: false
    });
  }

  constructor(options = {}) {
    const { actor, skillKey, label, baseModifier, injuryModifier, injuryPenalty } = options;
    super(options);
    this._actor = actor;
    this._skillKey = skillKey;
    this._label = label ?? skillKey;
    this._baseModifier = Number(baseModifier) || 0;
    this._injuryModifier = Number(injuryModifier) || 0;
    /** Opcionális sérülés levonás (pl. fegyver dobásnál karok); megjelenik külön, beleszámít a dobásba. */
    this._injuryPenalty = Number(injuryPenalty) || 0;
  }

  get actor() {
    return this._actor;
  }

  async render(force = false, options = {}) {
    const out = await super.render(force, options);
    setTimeout(() => this._bindRollSheetListeners(), 50);
    return out;
  }

  _bindRollSheetListeners() {
    const app = this;
    const appId = this.id ?? "votv-roll-sheet";
    const form = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(appId)}"]`)
      ?? this.element?.querySelector?.("form.votv.roll-sheet")
      ?? (this.element?.matches?.("form.votv.roll-sheet") ? this.element : null);
    if (!form || form._votvRollBound) return;

    const advantageInput = form.querySelector("input[name='advantage']");
    const advantageD6s = form.querySelectorAll(".roll-sheet-advantage-d6");
    const updateAdvantageVisual = (value) => {
      const v = Math.min(3, Math.max(-3, parseInt(value, 10) || 0));
      if (advantageInput) advantageInput.value = String(v);
      advantageD6s.forEach((el) => {
        const elVal = parseInt(el.dataset.advantageValue ?? "0", 10);
        el.classList.toggle("selected", elVal === v);
      });
    };
    advantageD6s.forEach((el) => {
      el.addEventListener("click", (ev) => {
        ev.preventDefault();
        updateAdvantageVisual(el.dataset.advantageValue ?? "0");
        app._updateFormulaPreview(form);
      });
    });
    updateAdvantageVisual(advantageInput?.value ?? "0");

    const moraleWrap = form.querySelector(".roll-sheet-morale-wrap");
    const moraleMax = Math.min(3, Math.max(0, parseInt(moraleWrap?.dataset?.moraleMax ?? "3", 10) || 0));
    const moraleInput = form.querySelector("input[name='moraleDice']");
    const moraleD8s = form.querySelectorAll(".roll-sheet-morale-d8");
    const updateMoraleVisual = (value) => {
      let n = Math.min(3, Math.max(0, parseInt(value, 10) || 0));
      n = Math.min(n, moraleMax);
      if (moraleInput) moraleInput.value = String(n);
      moraleD8s.forEach((el, i) => {
        el.classList.toggle("selected", i < n);
        el.style.pointerEvents = i < moraleMax ? "" : "none";
        el.style.opacity = i < moraleMax ? "" : "0.35";
      });
    };
    form.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((el) => {
      el.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (el.classList.contains("roll-sheet-morale-d8") && (parseInt(el.dataset.moraleValue ?? "0", 10) > moraleMax)) return;
        const val = el.dataset.moraleValue ?? "0";
        updateMoraleVisual(val);
        app._updateFormulaPreview(form);
      });
    });
    updateMoraleVisual(moraleInput?.value ?? "0");

    const constInput = form.querySelector("input[name='constantBonus']");
    if (constInput) constInput.addEventListener("input", () => app._updateFormulaPreview(form));
    if (constInput) constInput.addEventListener("change", () => app._updateFormulaPreview(form));

    app._updateFormulaPreview(form);

    form._votvRollBound = true;
    form.addEventListener("click", (ev) => {
      if (ev.target?.closest?.(".roll-sheet-close")) {
        ev.preventDefault();
        app.close();
        return;
      }
      if (!ev.target?.closest?.(".roll-sheet-do-roll")) return;
      ev.preventDefault();
      ev.stopPropagation();
      app._doRoll(form);
    });
  }

  _updateFormulaPreview(form) {
    const preview = form?.querySelector(".roll-sheet-formula-preview");
    if (!preview) return;
    const advantage = parseInt(form.querySelector("input[name='advantage']")?.value ?? "0", 10) || 0;
    const morale = parseInt(form.querySelector("input[name='moraleDice']")?.value ?? "0", 10) || 0;
    const constantBonus = parseInt(form.querySelector("input[name='constantBonus']")?.value ?? "0", 10) || 0;
    const baseMod = parseInt(form.dataset?.baseMod ?? "0", 10) || 0;
    const injuryMod = parseInt(form.dataset?.injuryMod ?? "0", 10) || 0;
    const injuryPen = parseInt(form.dataset?.injuryPenalty ?? "0", 10) || 0;
    const constantsSum = baseMod + injuryMod + injuryPen + constantBonus;

    const parts = [];
    parts.push(document.createElement("span"));
    parts[0].textContent = "Összesítve: 3 ";
    const d6Img = document.createElement("img");
    d6Img.src = "systems/vacuum-of-the-void/assets/d6.svg";
    d6Img.alt = "d6";
    d6Img.className = "roll-sheet-preview-die";
    parts[0].appendChild(d6Img);

    if (advantage !== 0) {
      const advSpan = document.createElement("span");
      advSpan.textContent = advantage > 0 ? ` + ${advantage} ` : ` − ${Math.abs(advantage)} `;
      const advImg = document.createElement("img");
      advImg.src = advantage > 0
        ? "systems/vacuum-of-the-void/assets/advantage_d6.svg"
        : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg";
      advImg.alt = advantage > 0 ? "előny d6" : "hátrány d6";
      advImg.className = "roll-sheet-preview-die";
      advSpan.appendChild(advImg);
      parts.push(advSpan);
    }
    if (morale > 0) {
      const morSpan = document.createElement("span");
      morSpan.textContent = ` + ${morale} `;
      const d8Img = document.createElement("img");
      d8Img.src = "systems/vacuum-of-the-void/assets/moral_d8.svg";
      d8Img.alt = "d8";
      d8Img.className = "roll-sheet-preview-die";
      morSpan.appendChild(d8Img);
      parts.push(morSpan);
    }
    if (constantsSum !== 0) {
      const constSpan = document.createElement("span");
      constSpan.textContent = constantsSum > 0 ? ` + ${constantsSum}` : ` − ${Math.abs(constantsSum)}`;
      parts.push(constSpan);
    }

    preview.innerHTML = "";
    preview.append(...parts);
  }

  getData(options = {}) {
    const actor = this.actor;
    const moraleCurrent = Math.max(0, Number(actor?.system?.resources?.morale ?? 0) || 0);

    const basePart = this._baseModifier !== 0 ? (this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier)) : "";
    const injuryPart = this._injuryModifier !== 0 ? (this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier)) : "";
    const injuryPenaltyPart = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
    const formulaText = ["3d6", basePart, injuryPart, injuryPenaltyPart].filter(Boolean).join(" ") || "3d6";

    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText,
      moraleCurrent,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty
    };
  }

  activateListeners(html) {
    super.activateListeners?.(html);
    setTimeout(() => this._bindRollSheetListeners(), 0);
  }

  async _doRoll(form) {
    const actor = this.actor;
    if (!actor) return;

    const moraleDiceEl = form.querySelector("[name='moraleDice']");
    const advantageEl = form.querySelector("[name='advantage']");
    const constantBonusEl = form.querySelector("[name='constantBonus']");

    const moraleDiceUsed = Math.min(3, Math.max(0, parseInt(moraleDiceEl?.value ?? "0", 10) || 0));
    const moraleCurrent = Math.max(0, Number(actor.system?.resources?.morale ?? 0) || 0);
    const actualMorale = Math.min(moraleDiceUsed, moraleCurrent);

    const advantage = Math.min(3, Math.max(-3, parseInt(advantageEl?.value ?? "0", 10) || 0));
    const constantBonus = parseInt(constantBonusEl?.value ?? "0", 10) || 0;

    const baseMod = this._baseModifier;
    const injuryMod = this._injuryModifier;
    const injuryPen = this._injuryPenalty || 0;
    const flatMod = baseMod + injuryMod + injuryPen + constantBonus;

    const formula = [
      "3d6",
      advantage > 0 ? `+${advantage}d6` : advantage < 0 ? `-${Math.abs(advantage)}d6` : "",
      actualMorale > 0 ? `+${actualMorale}d8` : "",
      flatMod !== 0 ? (flatMod > 0 ? `+${flatMod}` : `${flatMod}`) : ""
    ].filter(Boolean).join(" ");

    const combinedRoll = new Roll(formula);
    await combinedRoll.evaluate({ async: true });
    const { resultType, label: critLabel } = computeVotvCritInfo(combinedRoll);
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;

    await combinedRoll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor, alias: actor?.name ?? undefined }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType, critLabel } },
      rollMode
    });

    if (actualMorale > 0) {
      const nextMorale = Math.max(0, moraleCurrent - actualMorale);
      await actor.update({ "system.resources.morale": nextMorale });
    }

    this.close();
  }
}

/**
 * Open the roll sheet for a skill. Call from PC sheet when user clicks a skill label.
 * @param {Actor} actor - PC actor
 * @param {string} skillKey - e.g. "deception"
 * @param {string} label - Display name e.g. "Átverés"
 */
export function openRollSheetForSkill(actor, skillKey, label) {
  if (!actor) return;
  const baseValue = Number(actor.system?.skills?.[skillKey] ?? 0) || 0;
  const healthStatus = VoidKarakterSheet.BODY_PART_BY_SKILL[skillKey]
    ? VoidKarakterSheet._getSkillHealthStatusStatic(actor, skillKey)
    : undefined;
  let injuryModifier = 0;
  if (healthStatus === 1) injuryModifier = -6;
  else if (healthStatus === 2) injuryModifier = -3;
  const baseModifier = baseValue + injuryModifier;
  const sheet = new VoidRollSheet({
    actor,
    skillKey,
    label: label || skillKey,
    baseModifier: baseValue,
    injuryModifier
  });
  sheet.render(true);
}

/**
 * Open the roll sheet for a weapon attack (Dobás). Formula: Kézifegyver Használat + fegyver bónusz;
 * sérülés (karok) levonás ugyanúgy mint a jártasságnál. A többi (morál, előny/hátrány, egyéb bónusz) állítható.
 * @param {Actor} actor - PC actor
 * @param {string} slotKey - e.g. "slot1"
 */
export function openRollSheetForWeapon(actor, slotKey) {
  if (!actor || !slotKey) return;
  const weapons = actor.system?.weapons ?? {};
  const slotData = weapons[slotKey] ?? {};
  const itemId = (slotData.itemId ?? "").trim();
  const weaponItems = actor.items?.filter(i => i.type === "Fegyver") ?? [];
  const item = itemId ? weaponItems.find(w => w.id === itemId) : null;
  const weaponName = item?.name || slotData.name || `Fegyver (${slotKey})`;
  const weaponBonus = Number(slotData.bonus ?? 0) || 0;
  const grenadeUse = Number(actor.system?.skills?.grenadeUse ?? 0) || 0;
  const healthStatus = VoidKarakterSheet._getSkillHealthStatusStatic(actor, "grenadeUse");
  let injuryPenalty = 0;
  if (healthStatus === 1) injuryPenalty = -6;
  else if (healthStatus === 2) injuryPenalty = -3;
  // Megjelenítés: "3d6 +10 +4" (Kézifegyver + bónusz külön), sérülés külön pl. " -3"; dobás = 10+4-3
  const sheet = new VoidRollSheet({
    actor,
    skillKey: "grenadeUse",
    label: weaponName,
    baseModifier: grenadeUse,
    injuryModifier: weaponBonus,
    injuryPenalty
  });
  sheet.render(true);
}
