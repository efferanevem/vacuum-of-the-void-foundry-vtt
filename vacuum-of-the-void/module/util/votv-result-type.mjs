/**
 * Compute Vacuum of the Void special result type from a Roll:
 * - Kritikus/Brutális Siker: count 6s on base 3d6 + advantage d6
 * - Kritikus/Brutális Sikertelenség: count 1s on base 3d6 + 6s on disadvantage d6
 * Morale d8 dice are always ignored.
 *
 * Returns an object: { resultType, label } where
 * - resultType: "critical" | "fumble" | null (for chat CSS)
 * - label: one of the Hungarian labels or null
 */
export function computeVotvCritInfo(roll) {
  if (!roll || !Array.isArray(roll.terms)) return { resultType: null, label: null };

  const baseResults = [];
  const advantageResults = [];
  const disadvantageResults = [];

  let seenBaseD6 = false;

  const processTerms = (terms, signContext = 1) => {
    if (!Array.isArray(terms)) return;
    let sign = signContext;

    for (const term of terms) {
      if (!term) continue;

      // Nested term container (e.g. math, pool): recurse into inner terms if present.
      if (Array.isArray(term.terms)) {
        processTerms(term.terms, sign);
        continue;
      }

      // Operator term: remember sign for the next dice term.
      if (typeof term.operator === "string") {
        sign = term.operator === "-" ? -1 : 1;
        continue;
      }

      const faces = typeof term.faces === "number" ? term.faces : undefined;
      const results = Array.isArray(term.results) ? term.results : null;

      if (!faces || !results) continue;

      // Morál d8 – soha ne számoljuk bele.
      if (faces === 8) continue;

      // Only care about d6 terms for our classification.
      if (faces !== 6) continue;

      const targetArray = (() => {
        // The very first positive 3d6 term is considered the base dice.
        if (!seenBaseD6 && sign >= 0 && (term.number === 3 || term.number === "3")) {
          seenBaseD6 = true;
          return baseResults;
        }
        // Positive d6 after the base 3d6 → advantage dice.
        if (sign >= 0) return advantageResults;
        // Negative d6 → disadvantage dice.
        return disadvantageResults;
      })();

      for (const r of results) {
        if (!r) continue;
        if (r.discarded || r.hidden) continue;
        const value = Number(r.result ?? r);
        if (Number.isFinite(value)) targetArray.push(value);
      }
    }
  };

  processTerms(roll.terms, 1);

  const baseSixes = baseResults.filter(v => v === 6).length;
  const baseOnes = baseResults.filter(v => v === 1).length;
  const advSixes = advantageResults.filter(v => v === 6).length;
  const disSixes = disadvantageResults.filter(v => v === 6).length;

  const successSixes = baseSixes + advSixes;
  const failureBad = baseOnes + disSixes;

  // Ha ugyanannyi a sikerre számító és a bukásra számító kocka, ne legyen semmi speciális eredmény.
  if (successSixes > 0 && successSixes === failureBad) {
    return { resultType: null, label: null };
  }

  // Prioritás: brutális siker → kritikus siker → brutális bukás → kritikus bukás.
  if (successSixes >= 3) {
    return { resultType: "critical", label: "Brutális Siker" };
  }
  if (successSixes === 2) {
    return { resultType: "critical", label: "Kritikus Siker" };
  }
  if (failureBad >= 3) {
    return { resultType: "fumble", label: "Brutális Sikertelenség" };
  }
  if (failureBad === 2) {
    return { resultType: "fumble", label: "Kritikus Sikertelenség" };
  }

  return { resultType: null, label: null };
}

