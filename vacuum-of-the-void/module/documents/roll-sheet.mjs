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
    const {
      actor,
      skillKey,
      label,
      baseModifier,
      injuryModifier,
      injuryPenalty,
      isWeaponAttack,
      isInitiativeRoll,
      weaponSlotKey,
      weaponItemId,
      weaponDamageFormula
    } = options;
    super(options);
    this._actor = actor;
    this._skillKey = skillKey ?? "";
    this._label = label ?? skillKey ?? "";
    this._baseModifier = Number(baseModifier) || 0;
    this._injuryModifier = Number(injuryModifier) || 0;
    /** Opcionális sérülés levonás (pl. fegyver dobásnál karok); megjelenik külön, beleszámít a dobásba. */
    this._injuryPenalty = Number(injuryPenalty) || 0;
    /** Fegyver támadás esetén true, ilyenkor Védelem ellen dobunk és sebzés gombot adunk a chathez. */
    this._isWeaponAttack = !!isWeaponAttack;
    /** Kezdeményezés dobás: az eredményt a karakterlap Harc mezőjébe írjuk. */
    this._isInitiativeRoll = !!isInitiativeRoll;
    this._weaponSlotKey = weaponSlotKey || "";
    this._weaponItemId = weaponItemId || "";
    /** Fegyver sebzés formulája, ha ismert (chat sebzés gombhoz); ha nincs, a handler próbálja újraképezni az itemből/slotból. */
    this._weaponDamageFormula = typeof weaponDamageFormula === "string" ? weaponDamageFormula.trim() : "";
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

    let targetLabel = "";
    let advantageFromTarget = 0;
    const advantageSources = [];
    const disadvantageSources = [];
    if (this._isWeaponAttack && game.user?.targets?.size) {
      const targets = Array.from(game.user.targets);
      const targetToken = targets[0];
      const targetActor = targetToken?.actor ?? null;
      targetLabel = targetActor?.name || targetToken?.name || "";
      // Kábult célpont → +1 előny; többlet előny/elvétel a játékos a sheeten módosítja (0, 2, …)
      if (targetActor?.statuses?.has?.("stunned")) {
        advantageFromTarget = 1;
        advantageSources.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"));
      }
    }
    // Később: más előny/ hátrány források (pl. környezet, képesség) ide pusholhatók

    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText,
      moraleCurrent,
      advantageValue: advantageFromTarget,
      advantageSourcesText: advantageSources.length ? advantageSources.join(", ") : "",
      disadvantageSourcesText: disadvantageSources.length ? disadvantageSources.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel
    };
  }

  activateListeners(html) {
    super.activateListeners?.(html);
    setTimeout(() => this._bindRollSheetListeners(), 0);
  }

  async _doRoll(form) {
    const actor = this.actor;
    if (!actor) return;
    try {
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
    let flavor = this._label;
    const flags = { resultType, critLabel };

    // Ha fegyver támadás, és van kijelölt célpont, nézzük a Védelem értéket, és írjuk ki, hogy talált / nem talált.
    if (this._isWeaponAttack && game.user?.targets?.size) {
      const targets = Array.from(game.user.targets);
      const targetToken = targets[0];
      const targetActor = targetToken?.actor ?? null;
      if (targetActor) {
        const combat = targetActor.system?.combat ?? {};
        const defenseBase = Number(combat.defense ?? 0) || 0;
        const defenseBonus = Number(combat.defenseBonus ?? 0) || 0;
        const rawGivenProtection = Number(combat.givenProtection ?? 0) || 0;
        // Kapott védelem = givenProtection + felszerelt páncélok védelmi bónusza (ugyanúgy, mint a karakterlapon).
        let armorBonus = 0;
        if (targetActor.type === "Karakter") {
          const armorItems = (targetActor.items?.contents ?? []).filter(
            (i) => i.type === "Pancel" && (i.system?.equipped === true)
          );
          for (const item of armorItems) {
            const raw = String(item.system?.protectionBonus ?? "").trim().replace(",", ".");
            const v = Number(raw);
            if (Number.isFinite(v)) armorBonus += v;
          }
        }
        const defenseTotal = defenseBase + defenseBonus + rawGivenProtection + armorBonus;
        const total = Number(combinedRoll.total ?? 0) || 0;
        const isHit = total >= defenseTotal;
        const targetName = targetActor.name ?? targetToken.name ?? "Célpont";
        let hitLocationRoll = null;
        let hitLocationName = null;
        if (isHit && targetActor.type === "Karakter") {
          try {
            const d8 = new Roll("1d8");
            await d8.evaluate({ async: true });
            hitLocationRoll = Number(d8.total ?? 0) || 1;
            if (hitLocationRoll === 1) hitLocationName = "Fej";
            else if (hitLocationRoll >= 2 && hitLocationRoll <= 4) hitLocationName = "Törzs";
            else if (hitLocationRoll === 5 || hitLocationRoll === 6) hitLocationName = "Karok";
            else hitLocationName = "Lábak";
          } catch (err) {
            console.warn("VOTV hit location roll failed:", err);
          }
        }
        flags.weaponAttack = true;
        flags.weapon = {
          actorId: actor.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: targetActor.id ?? null,
          targetName,
          defense: defenseTotal,
          isHit,
          hitLocationRoll: hitLocationRoll ?? null,
          hitLocationName: hitLocationName ?? null
        };
      }
    }

    await combinedRoll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor, alias: actor?.name ?? undefined }),
      flavor,
      flags: { "vacuum-of-the-void": flags },
      rollMode
    });

    if (actualMorale > 0) {
      const nextMorale = Math.max(0, moraleCurrent - actualMorale);
      await actor.update({ "system.resources.morale": nextMorale });
    }

    if (this._isInitiativeRoll) {
      try {
        const total = Number(combinedRoll.total) ?? 0;
        await actor.update({ "system.combat.initiativeResult": total });
        const apps = actor.apps ?? [];
        for (const app of apps) {
          if (typeof app?.render === "function") app.render(true);
        }
      } catch (e) {
        console.warn("VOTV initiative result update:", e);
      }
    }
    } finally {
      this.close();
    }
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
  const isInitiativeRoll = (label || "").trim() === "Kezdeményezés";
  const sheet = new VoidRollSheet({
    actor,
    skillKey,
    label: label || skillKey,
    baseModifier: baseValue,
    injuryModifier,
    isInitiativeRoll
  });
  sheet.render(true);
}

/**
 * Open the roll sheet for a weapon attack (Dobás).
 * Karakter lap támadásai mintájára számol: 3d6 + (Kézifegyver Használat / Löveghasználat + fegyver bónusz).
 * @param {Actor} actor - Karakter vagy NPC actor
 * @param {string} slotKey - e.g. "slot1"
 */
export function openRollSheetForWeapon(actor, slotKey) {
  if (!actor || !slotKey) return;

  // Mindig az átadott actort használjuk (sheet this.actor) – így biztos, hogy a helyes adatokat olvassuk.
  const dataActor = actor;
  const weapons = dataActor.system?.weapons ?? {};
  const slotData = weapons[slotKey] ?? {};
  const skills = dataActor.system?.skills ?? {};
  const ownedWeapons = dataActor.items?.filter?.(i => i.type === "Fegyver") ?? [];

  const itemId = (slotData.itemId ?? "").trim();
  const item = itemId ? (ownedWeapons.find(w => w.id === itemId) ?? null) : null;

  // Név: ugyanúgy, mint a karakter lapon (_rollWeapon)
  const weaponName = (item?.name ?? slotData.name ?? "").trim() || "Fegyver";

  // Bónusz: slotData.bonus elsődlegesen, ha üres, akkor item.system.bonus (NPC felszerelés táblázat mintája)
  const weaponBonus = Number(slotData.bonus || item?.system?.bonus || 0) || 0;

  // Fegyver Jártasság mezője (alapértelmezett: explosive → Kézifegyver, egyéb → Löveghasználat)
  const weaponType = item?.system?.type || "kinetic";
  const rawSkill = (item?.system?.skillKey ?? "").trim();
  const skillKey = rawSkill && skills[rawSkill] !== undefined
    ? rawSkill
    : (weaponType === "explosive" ? "grenadeUse" : "firearms");
  const skillBonus = Number(skills[skillKey] || 0) || 0;

  const totalBaseMod = weaponBonus + skillBonus;

  // Sérülés levonás (karok) csak Karakter esetén – NPC-nél nincs automatikus kar sérülés logika.
  let injuryPenalty = 0;
  if (actor.type === "Karakter") {
    const healthStatus = VoidKarakterSheet._getSkillHealthStatusStatic(actor, skillKey);
    if (healthStatus === 1) injuryPenalty = -6;
    else if (healthStatus === 2) injuryPenalty = -3;
  }

  const damageFormulaFromItem = (item?.system?.damage ?? "").trim();
  const damageFormulaFromSlot = (slotData.damage ?? "").trim();
  const weaponDamageFormula = damageFormulaFromItem || damageFormulaFromSlot || "";

  const sheet = new VoidRollSheet({
    actor,
    skillKey,
    label: weaponName,
    baseModifier: totalBaseMod,
    injuryModifier: 0,
    injuryPenalty,
    isWeaponAttack: true,
    weaponSlotKey: slotKey,
    weaponItemId: item?.id ?? itemId,
    weaponDamageFormula
  });
  sheet.render(true);
}
