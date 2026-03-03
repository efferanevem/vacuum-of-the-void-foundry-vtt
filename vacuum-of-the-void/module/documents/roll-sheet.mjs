/**
 * Roll sheet: skill roll with 3d6 + modifiers, optional morale dice, advantage/disadvantage, constant bonus.
 * Opened when clicking a skill label on the PC sheet.
 */
import { VoidPcSheet } from "./pc-sheet.mjs";

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
    const { actor, skillKey, label, baseModifier, injuryModifier } = options;
    super(options);
    this._actor = actor;
    this._skillKey = skillKey;
    this._label = label ?? skillKey;
    this._baseModifier = Number(baseModifier) || 0;
    this._injuryModifier = Number(injuryModifier) || 0;
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

    const slider = form.querySelector(".roll-sheet-slider");
    const output = form.querySelector(".roll-sheet-advantage-value");
    if (slider && output) {
      slider.addEventListener("input", () => { output.value = slider.value; });
    }

    const moraleInput = form.querySelector("input[name='moraleDice']");
    const moraleD8s = form.querySelectorAll(".roll-sheet-morale-d8");
    const updateMoraleVisual = (value) => {
      const n = Math.min(3, Math.max(0, parseInt(value, 10) || 0));
      if (moraleInput) moraleInput.value = String(n);
      moraleD8s.forEach((el, i) => {
        el.classList.toggle("selected", i < n);
      });
    };
    form.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((el) => {
      el.addEventListener("click", (ev) => {
        ev.preventDefault();
        const val = el.dataset.moraleValue ?? "0";
        updateMoraleVisual(val);
      });
    });
    updateMoraleVisual(moraleInput?.value ?? "0");

    form._votvRollBound = true;
    form.addEventListener("click", (ev) => {
      if (!ev.target?.closest?.(".roll-sheet-do-roll")) return;
      ev.preventDefault();
      ev.stopPropagation();
      app._doRoll(form);
    });
  }

  getData(options = {}) {
    const actor = this.actor;
    const moraleCurrent = Math.max(0, Number(actor?.system?.resources?.morale ?? 0) || 0);

    const basePart = this._baseModifier !== 0 ? (this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier)) : "";
    const injuryPart = this._injuryModifier !== 0 ? (this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier)) : "";
    const formulaText = ["3d6", basePart, injuryPart].filter(Boolean).join(" ") || "3d6";

    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText,
      moraleCurrent,
      advantageValue: 0
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
    const flatMod = baseMod + injuryMod + constantBonus;

    const formula = [
      "3d6",
      advantage > 0 ? `+${advantage}d6` : advantage < 0 ? `-${Math.abs(advantage)}d6` : "",
      actualMorale > 0 ? `+${actualMorale}d8` : "",
      flatMod !== 0 ? (flatMod > 0 ? `+${flatMod}` : `${flatMod}`) : ""
    ].filter(Boolean).join(" ");

    const combinedRoll = new Roll(formula);
    await combinedRoll.evaluate({ async: true });
    const total = combinedRoll.total;
    const resultType = total >= 18 ? "critical" : total <= 3 ? "fumble" : null;
    const rollMode = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;

    await combinedRoll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType } },
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
  const healthStatus = VoidPcSheet.BODY_PART_BY_SKILL[skillKey]
    ? VoidPcSheet._getSkillHealthStatusStatic(actor, skillKey)
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
