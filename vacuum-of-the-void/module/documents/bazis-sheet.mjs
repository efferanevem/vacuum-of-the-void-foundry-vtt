import { VoidJarmuSheet } from "./jarmu-sheet.mjs";

/** Helyiség veszély string (pl. "+15", "15") → szám. */
function parseVeszely(s) {
  if (s == null) return 0;
  const t = String(s).trim().replace(/^\+/, "");
  if (t === "") return 0;
  const n = Number(t);
  return Number.isFinite(n) ? n : 0;
}

/** Bázis helyiségeinek veszély értékének összege (bele számít a veszélyeztetettségbe). */
function sumHelyisegVeszely(actor) {
  const contents = actor?.items?.contents ?? [];
  return contents
    .filter((i) => i.type === "Helyiseg")
    .reduce((sum, i) => sum + parseVeszely(i.system?.veszely), 0);
}

/** Bázis actor lap: ugyanaz a template és getData mint a jármű (Régió, Zóna Típus, Méret, Veszélyeztetettség, egységek, raktár). */
export class VoidBazisSheet extends VoidJarmuSheet {
  static DEFAULT_OPTIONS = foundry.utils.mergeObject(
    super.DEFAULT_OPTIONS,
    {
      classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
      width: 1000,
      height: 600,
      form: foundry.utils.mergeObject(super.DEFAULT_OPTIONS?.form ?? {}, { submitOnChange: true })
    },
    { inplace: false }
  );

  _attachFrameListeners(html) {
    super._attachFrameListeners(html);
    const root = this.form ?? html?.querySelector?.("form.votv.jarmu-sheet") ?? html ?? this.element;
    if (!root) return;
    const regionMap = {
      "Középső Rendszerek": -10,
      "Köztársasági Ágak": 10,
      "Peremvidék, vagy azon túl": 30
    };
    const zoneMap = {
      "Polgári Zóna": 10,
      "Ipari Zóna": 10,
      "Bánya Zóna": 10,
      "Katonai Zóna": -10,
      "Kutató Zóna": -10,
      "Elhagyott Zóna": 30,
      "Zónán kívüli terület": 30
    };
    const sizeMap = { "Kicsi": -10, "Közepes": 0, "Nagy": 10 };
    const onThreatChange = () => {
      const form = root.querySelector?.("form");
      const baseEl = form ?? root;
      const regionSelect = baseEl.querySelector?.('select[name="system.identity.assignment"]');
      const zoneSelect = baseEl.querySelector?.('select[name="system.identity.subAssignment"]');
      const totalInput = baseEl.querySelector?.("input.bazis-threat-total");
      const bonusInput = baseEl.querySelector?.('input[name="system.combat.threatBonus"]');
      if (!regionSelect || !totalInput || !bonusInput) return;
      const region = regionSelect.value ?? "";
      const zone = zoneSelect?.value ?? "";
      const regionVal = regionMap[region] ?? 0;
      const zoneVal = zoneMap[zone] ?? 0;
      const unitCount = (this.actor?.items?.contents ?? []).filter((i) => i.type === "Helyiseg").length;
      const sizeLabel = unitCount >= 11 ? "Nagy" : unitCount >= 6 ? "Közepes" : "Kicsi";
      const sizeVal = sizeMap[sizeLabel] ?? 0;
      const bonus = Number(bonusInput.value ?? 0) || 0;
      const veszelySum = sumHelyisegVeszely(this.actor);
      const total = regionVal + zoneVal + sizeVal + bonus + veszelySum;
      totalInput.value = total;
      // Ne hívjunk actor.update()-et: a form submit (submitOnChange) menti a mezőket.
      // Így nem rajzolódik újra a lap, a selectek nem ugrálnak vissza.
    };
    $(root).on("change input", "select[name=\"system.identity.assignment\"], select[name=\"system.identity.subAssignment\"], input[name=\"system.combat.threatBonus\"]", onThreatChange);
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    if (context?.actor?.type === "Bazis") {
      const system = context.system ?? this.actor.system ?? {};
      const identity = system.identity ?? {};
      const combat = system.combat ?? {};

      // Régió + Zóna típus → veszélyeztetettség módosítók; végső érték = régió + zóna + kézi bónusz.
      const region = identity.assignment ?? "";
      const zone = identity.subAssignment ?? "";
      const regionMap = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      };
      const zoneMap = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      };
      const sizeMap = { "Kicsi": -10, "Közepes": 0, "Nagy": 10 };
      const regionThreat = regionMap[region] ?? 0;
      const zoneThreat = zoneMap[zone] ?? 0;
      const sizeLabel = context.sizeForSelect ?? "Kicsi";
      const sizeThreat = sizeMap[sizeLabel] ?? 0;
      const bonus = Number(combat.threatBonus ?? 0) || 0;
      const veszelySum = sumHelyisegVeszely(this.actor);
      const finalThreat = regionThreat + zoneThreat + sizeThreat + bonus + veszelySum;

      context.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(system),
        { combat: { ...combat, threat: finalThreat, threatBonus: bonus } },
        { inplace: false }
      );
      context.bazisThreatBase = regionThreat;
    }
    return context;
  }
}

