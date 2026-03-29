import { VoidEmbeddedUnitAbilitySheet } from "../documents/ability-sheet.mjs";

/**
 * Járműegység / helyiség: behúzott képességek beágyazott másolata (nem külön Item a színésznél).
 * A régi `abilities.items` UUID lista továbbra is támogatott.
 */

/** @param {string|undefined} ref */
export function isEmbeddedAbilityRef(ref) {
  return typeof ref === "string" && ref.startsWith("embedded:");
}

/** @param {string|undefined} ref */
export function parseEmbeddedAbilityIndex(ref) {
  if (!isEmbeddedAbilityRef(ref)) return -1;
  const n = Number(ref.slice("embedded:".length));
  return Number.isInteger(n) && n >= 0 ? n : -1;
}

/**
 * @param {Item} sourceAbility
 * @returns {{ name: string, img: string, kind: string, kp: number, description: string }}
 */
export function buildAbilitySnapshotForUnit(sourceAbility) {
  const s = sourceAbility.system ?? {};
  const kind = (s.kind ?? "passive").toString();
  const kp =
    kind === "active" || kind === "module" ? Number(s.kp ?? 0) || 0 : 0;
  return {
    name: sourceAbility.name ?? "Képesség",
    img: sourceAbility.img ?? "",
    kind,
    kp,
    description: (s.description ?? "").toString()
  };
}

/** @param {string} kind */
export function abilityKindLabelHu(kind) {
  const k = (kind ?? "passive").toString();
  return k === "active"
    ? "Aktív"
    : k === "species"
      ? "Faji"
      : k === "background"
        ? "Háttér"
        : k === "module"
          ? "Modul"
          : "Passzív";
}

/**
 * @param {{ name?: string, kind?: string, kp?: number, description?: string }} snap
 */
export function buildAbilityChatHtmlFromSnapshot(snap) {
  const kind = snap?.kind ?? "passive";
  const kp = Number(snap?.kp ?? 0) || 0;
  const description = (snap?.description ?? "").trim();
  const kindLabel = abilityKindLabelHu(kind);
  let kpLine = "";
  if (kind === "active" && kp > 0) kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
  else if (kind === "module" && kp > 0) kpLine = `<p><strong>KP:</strong> ${kp}</p>`;
  const descLine = description ? `<p class="votv-ability-description">${description}</p>` : "";
  const name = snap?.name ?? "—";
  return `
      <h2>${name}</h2>
      <p><strong>Típus:</strong> ${kindLabel}</p>
      ${kpLine}
      ${descLine}
    `;
}

/**
 * @param {object} abilities - system.abilities
 * @param {(raw: string) => string} cleanImg
 */
export async function buildMergedUnitAbilityList(abilities, cleanImg) {
  const abilityRefs = Array.isArray(abilities?.items) ? abilities.items : [];
  const embedded = Array.isArray(abilities?.embedded) ? abilities.embedded : [];

  const abilityDocs = await Promise.all(
    abilityRefs.map(async (ref) => {
      if (!ref) return null;
      try {
        const doc = await fromUuid(ref);
        if (doc && (doc.type === "Kepesseg" || doc.type === "ability")) return doc;
      } catch {
        const itemDoc = game.items?.get(ref);
        if (itemDoc && (itemDoc.type === "Kepesseg" || itemDoc.type === "ability")) return itemDoc;
      }
      return null;
    })
  );

  const legacyRows = abilityDocs
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
        img: cleanImg(doc.img ?? ""),
        kind,
        kpDisplay: isSpecies ? 0 : kp,
        isEmbedded: false
      };
    });

  const embeddedRows = embedded.map((snap, idx) => {
    const kind = (snap?.kind ?? "passive").toString();
    const kp = Number(snap?.kp ?? 0) || 0;
    const isSpecies = kind === "species";
    return {
      id: "",
      ref: `embedded:${idx}`,
      name: snap?.name ?? "—",
      img: cleanImg(snap?.img ?? ""),
      kind,
      kpDisplay: isSpecies ? 0 : kp,
      isEmbedded: true,
      embeddedIndex: idx
    };
  });

  return [...legacyRows, ...embeddedRows];
}

/**
 * Virtuális Item-szerű objektum: a képesség lap `document.update`-jeit az egység embedded sorába írja.
 * @param {Item} unitItem
 * @param {number} embeddedIndex
 */
export function createEmbeddedAbilityVirtualDocument(unitItem, embeddedIndex) {
  const getSnap = () => unitItem.system?.abilities?.embedded?.[embeddedIndex];

  const doc = {
    documentName: "Item",

    get id() {
      return `embeddedAbility.${unitItem.id}.${embeddedIndex}`;
    },
    get uuid() {
      return this.id;
    },
    get name() {
      return getSnap()?.name ?? "Képesség";
    },
    get type() {
      return "Kepesseg";
    },
    get img() {
      return getSnap()?.img ?? "";
    },
    get system() {
      const s = getSnap();
      return {
        kind: (s?.kind ?? "passive").toString(),
        kp: Number(s?.kp ?? 0) || 0,
        description: (s?.description ?? "").toString()
      };
    },
    get parent() {
      return unitItem.parent ?? null;
    },
    get isOwner() {
      return unitItem.isOwner ?? true;
    },
    testUserPermission(user, action, options) {
      return unitItem.testUserPermission?.(user, action, options) ?? false;
    },

    toObject() {
      const s = getSnap();
      return {
        name: s?.name ?? "Képesség",
        type: "Kepesseg",
        img: s?.img ?? "",
        system: {
          kind: (s?.kind ?? "passive").toString(),
          kp: Number(s?.kp ?? 0) || 0,
          description: (s?.description ?? "").toString()
        }
      };
    },

    async update(data) {
      const embedded = [...(unitItem.system?.abilities?.embedded ?? [])];
      const cur = { ...(embedded[embeddedIndex] ?? {}) };
      if (data.name !== undefined) cur.name = data.name;
      if (data.img !== undefined) cur.img = data.img;
      if (data.system && typeof data.system === "object") {
        const sys = data.system;
        if (sys.kind !== undefined) cur.kind = sys.kind;
        if (sys.kp !== undefined) cur.kp = Number(sys.kp) || 0;
        if (sys.description !== undefined) cur.description = sys.description;
      }
      const kindEff = String(cur.kind ?? "passive");
      if (kindEff !== "active" && kindEff !== "module") cur.kp = 0;
      embedded[embeddedIndex] = cur;
      await unitItem.update({ "system.abilities.embedded": embedded });
      doc._afterUpdate?.();
    },

    /** @type {(() => void) | undefined} */
    _afterUpdate: undefined
  };

  return doc;
}

/**
 * @param {Item} unitItem
 * @param {number} embeddedIndex
 */
export function openEmbeddedUnitAbilitySheet(unitItem, embeddedIndex) {
  const snap = unitItem.system?.abilities?.embedded?.[embeddedIndex];
  if (!snap) return;
  try {
    const doc = createEmbeddedAbilityVirtualDocument(unitItem, embeddedIndex);
    const sheet = new VoidEmbeddedUnitAbilitySheet({ document: doc });
    doc._afterUpdate = () => sheet.render(false);
    sheet.render(true);
  } catch (err) {
    console.error("VOTV openEmbeddedUnitAbilitySheet", err);
    ui.notifications?.error?.("Képesség lap megnyitása sikertelen (lásd konzol).");
  }
}
