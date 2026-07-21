/**
 * Builds the data behind the palaeogeography map.
 *
 *   node scripts/fetch-paleogeography.mjs
 *
 * Writes:
 *   public/paleomaps/<age>.json   reconstructed coastlines, one file per age
 *   src/data/occurrences.ts       fossil sites per creature, at palaeo-coordinates
 *
 * Two sources, both authoritative and both free:
 *
 * - GPlates Web Service (gws.gplates.org) reconstructs where the continents
 *   actually were at a given age. This is the whole point of the feature: a
 *   Jurassic animal plotted on today's map is plotted on a world that did not
 *   exist yet.
 * - The Paleobiology Database (paleobiodb.org) supplies real fossil occurrences.
 *   Crucially it returns *palaeo*-coordinates (`pln`/`pla`) alongside modern
 *   ones, having already run the same plate rotations, so the sites land in the
 *   right place on the reconstructed map rather than needing rotating by us.
 *
 * Nothing here is invented, which matters: the dates in `creatures.ts` are the
 * assistant's estimates, but every dot on this map is a catalogued fossil.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CREATURES } from "../src/data/creatures.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MAP_DIR = join(ROOT, "public", "paleomaps");
const OCC_FILE = join(ROOT, "src", "data", "occurrences.ts");

/**
 * Ages we fetch a reconstruction for. Each creature snaps to the nearest.
 *
 * Spaced tighter where our species cluster and where plates were moving fast.
 * Continents drift a few cm a year, so a ±10 My snap moves a coastline by a few
 * hundred km — invisible at the size this map is drawn.
 */
const AGES = [0, 15, 35, 50, 66, 80, 100, 120, 145, 170, 200, 230, 250, 280, 300];

/**
 * Rotation model. MERDITH2021 is a recent published global model that reaches
 * back past the Permian, which we need for Dimetrodon at ~295 Ma.
 */
const MODEL = "MERDITH2021";

/**
 * Coastlines are drawn about 300px wide for the whole globe — roughly 0.8px per
 * degree — so whole-degree coordinates are already sub-pixel accurate. Rounding
 * to integers is what takes a 2.2MB reconstruction down to something shippable.
 */
const COORD_PRECISION = 0;

/** Drop islands below this area (square degrees); invisible at map scale. */
const MIN_POLYGON_AREA = 12;

const ringArea = (ring) => {
  let sum = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    sum += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  }
  return Math.abs(sum / 2);
};

/** True if a ring wraps the antimeridian, which would draw as a streak. */
const crossesAntimeridian = (ring) =>
  ring.some((point, i) => i > 0 && Math.abs(point[0] - ring[i - 1][0]) > 180);

function simplify(geojson) {
  const polygons = [];
  let dropped = 0;

  for (const feature of geojson.features ?? []) {
    const geometry = feature.geometry;
    if (!geometry) continue;
    const rings =
      geometry.type === "Polygon"
        ? [geometry.coordinates]
        : geometry.type === "MultiPolygon"
          ? geometry.coordinates
          : [];

    for (const polygon of rings) {
      const outer = polygon[0];
      if (!outer || ringArea(outer) < MIN_POLYGON_AREA) continue;

      const reduced = [];
      let previous = null;
      for (const [lng, lat] of outer) {
        const point = [
          Number(lng.toFixed(COORD_PRECISION)),
          Number(lat.toFixed(COORD_PRECISION)),
        ];
        if (!previous || point[0] !== previous[0] || point[1] !== previous[1]) {
          reduced.push(point);
          previous = point;
        }
      }

      if (reduced.length < 4) continue;
      if (crossesAntimeridian(reduced)) {
        dropped++;
        continue;
      }
      polygons.push(reduced);
    }
  }

  return { polygons, dropped };
}

async function fetchCoastlines(age) {
  const url = `https://gws.gplates.org/reconstruct/coastlines/?time=${age}&model=${MODEL}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GPlates ${age} Ma -> HTTP ${response.status}`);
  return response.json();
}

/**
 * `taxon` must be the most specific name we have.
 *
 * PBDB's `base_name` includes everything below the name given, so querying the
 * genus for a species-level entry pulls in its relatives: "Mammuthus" returns
 * every mammoth including African ones, and "Homo" returns two million years of
 * hominins rather than our own 300,000. Both would put dots on the map for
 * animals that are not the one being displayed.
 */
async function fetchOccurrences(taxon) {
  const url =
    "https://paleobiodb.org/data1.2/occs/list.json?base_name=" +
    encodeURIComponent(taxon) +
    "&show=coords,paleoloc,loc&limit=1000";
  const response = await fetch(url);
  if (!response.ok) return [];
  const body = await response.json();
  return body.records ?? [];
}

const nearestAge = (mya) =>
  AGES.reduce((best, age) => (Math.abs(age - mya) < Math.abs(best - mya) ? age : best));

// Coastlines are ~33MB of downloads and change only if AGES or the model does,
// so allow re-running just the occurrence half.
const occurrencesOnly = process.argv.includes("--occurrences-only");

// ── Coastlines ────────────────────────────────────────────────────────────
await mkdir(MAP_DIR, { recursive: true });
if (!occurrencesOnly) console.log(`Reconstructing coastlines (${MODEL})\n`);

let totalKb = 0;
for (const age of occurrencesOnly ? [] : AGES) {
  const raw = await fetchCoastlines(age);
  const { polygons, dropped } = simplify(raw);
  const json = JSON.stringify(polygons);
  await writeFile(join(MAP_DIR, `${age}.json`), json);
  const kb = json.length / 1024;
  totalKb += kb;
  console.log(
    `  ${String(age).padStart(3)} Ma  ${String(polygons.length).padStart(4)} polygons  ` +
      `${kb.toFixed(0).padStart(4)} KB` +
      (dropped ? `  (${dropped} wrapped at the antimeridian, skipped)` : ""),
  );
}
if (!occurrencesOnly) {
  console.log(`\n  total ${(totalKb / 1024).toFixed(1)} MB across ${AGES.length} ages\n`);
}

// ── Occurrences ───────────────────────────────────────────────────────────
console.log("Fossil occurrences (Paleobiology Database)\n");

const entries = {};
const warnings = [];

for (const creature of CREATURES) {
  // Use the binomial when we have one, the genus otherwise.
  const records = await fetchOccurrences(creature.name);

  // Collapse to whole degrees: occurrences cluster tightly at a single dig
  // site, and forty dots on one pixel is just a slower way to draw one dot.
  const seen = new Set();
  const points = [];
  const countries = new Set();

  for (const record of records) {
    if (record.cc2) countries.add(record.cc2);
    if (record.pln == null || record.pla == null) continue;
    const key = `${Math.round(record.pln)},${Math.round(record.pla)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    points.push([Math.round(record.pln), Math.round(record.pla)]);
  }

  if (!points.length) {
    warnings.push(`${creature.name}: no palaeo-located occurrences`);
    continue;
  }

  const midpoint = (creature.start + creature.end) / 2;
  entries[creature.id] = {
    points,
    mapAge: nearestAge(midpoint),
    countries: [...countries].sort(),
    siteCount: records.length,
  };

  console.log(
    `  ${creature.name.padEnd(24)} ${String(points.length).padStart(3)} sites  ` +
      `map ${entries[creature.id].mapAge} Ma  ${entries[creature.id].countries.join(" ")}`,
  );
}

const header = `// GENERATED FILE — do not edit by hand.
// Regenerate with: node scripts/fetch-paleogeography.mjs
//
// Fossil occurrences from the Paleobiology Database (https://paleobiodb.org),
// distributed under CC-BY. Coordinates are PALAEO-coordinates: where the site
// was when the animal lived, not where it sits today, so they plot correctly on
// the reconstructed coastlines in public/paleomaps/.

export interface Occurrence {
  /** Fossil sites as [palaeo-longitude, palaeo-latitude], whole degrees. */
  points: [number, number][];
  /** Which reconstruction in public/paleomaps/ to draw these on. */
  mapAge: number;
  /** Modern ISO country codes the fossils are found in today. */
  countries: string[];
  /** Total occurrence records behind this entry, before deduplication. */
  siteCount: number;
}

export const OCCURRENCES: Record<string, Occurrence> = `;

await writeFile(OCC_FILE, `${header}${JSON.stringify(entries, null, 2)};\n`);

console.log(`\n${Object.keys(entries).length}/${CREATURES.length} creatures mapped`);
if (warnings.length) {
  console.log("\nNotes:");
  for (const warning of warnings) console.log(`  • ${warning}`);
}
