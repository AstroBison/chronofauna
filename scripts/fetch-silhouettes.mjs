/**
 * Downloads one silhouette per creature from PhyloPic (https://phylopic.org),
 * a library of free, scientifically vetted silhouettes of organisms.
 *
 *   node scripts/fetch-silhouettes.mjs
 *
 * Writes:
 *   public/silhouettes/<creature-id>.svg
 *   src/data/silhouettes.ts    (attribution + licence metadata)
 *
 * Re-runnable and idempotent: existing files are overwritten. The generated
 * metadata file is committed, so a normal `npm install && npm run dev` never
 * needs the network.
 *
 * Two rules govern which image gets picked:
 *
 * 1. LICENCE. We prefer public domain, then CC-BY, then CC-BY-SA, and take a
 *    NonCommercial image only when a genus has nothing else. NC images would
 *    stop this site ever being used commercially, so the script reports them
 *    loudly at the end.
 * 2. HONESTY. Several genera have no silhouette of their own. Rather than
 *    silently drawing something else, we fall back to a *taxonomically correct*
 *    parent group (Quetzalcoatlus → Azhdarchidae) and flag the result as a
 *    stand-in, which the UI then discloses to the reader.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CREATURES } from "../src/data/creatures.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public", "silhouettes");
const META_FILE = join(ROOT, "src", "data", "silhouettes.ts");
const ACCEPT = { Accept: "application/vnd.phylopic.v2+json" };

/**
 * Ordered candidate searches, tried until one yields an acceptable image.
 * Anything not listed here just searches on its own genus name.
 */
const QUERY_CHAINS = {
  // No silhouette exists for these genera; each falls back to a group it
  // genuinely belongs to.
  eudimorphodon: ["eudimorphodon", "pterosauria"],
  argentinosaurus: ["argentinosaurus", "titanosauria"],
  quetzalcoatlus: ["quetzalcoatlus", "azhdarchidae"],
  megalodon: ["otodus", "otodontidae", "lamniformes"],
  // These genera only offer NonCommercial images; a relative offers freer ones.
  mosasaurus: ["mosasaurus", "mosasauridae"],
  megatherium: ["megatherium", "megatheriidae", "folivora", "pilosa"],
  // PhyloPic's only Moropus is CC BY-NC (and its family holds nothing else), so
  // fall back to Chalicotherium — a public-domain chalicothere that is not on
  // the chart, so it stands in without duplicating another animal's outline.
  moropus: ["moropus", "chalicotherium"],
  // No silhouette of their own. Falling back to the clade `gorgonopsia` picks
  // an Inostrancevia, which is already on the chart under its own name — three
  // species would share one outline and the stand-in would be a portrait of its
  // neighbour. Dinogorgon is a real gorgonopsian (and, like Rubidgea, a
  // rubidgeine) that appears nowhere else, so it stands in without colliding.
  lycaenops: ["lycaenops", "dinogorgon"],
  rubidgea: ["rubidgea", "dinogorgon"],

  // Present in PhyloPic only under the full binomial, so these end up being
  // the real animal rather than a stand-in.
  oviraptor: ["oviraptor philoceratops", "oviraptoridae"],
  tropeognathus: ["tropeognathus mesembrinus", "anhangueridae"],
  struthiomimus: ["struthiomimus", "ornithomimidae"],

  // Genuinely absent; each falls back within its own clade. The titanosaurs
  // are deliberately pointed at four *different* relatives — sharing one would
  // give Argentinosaurus, Patagotitan, Dreadnoughtus and Saltasaurus the same
  // outline and make the chart look like it had run out of pictures.
  amargasaurus: ["amargasaurus", "dicraeosauridae"],
  patagotitan: ["patagotitan", "abditosaurus"],
  dreadnoughtus: ["dreadnoughtus", "opisthocoelicaudia"],
  saltasaurus: ["saltasaurus", "neuquensaurus"],
  gallimimus: ["gallimimus", "ornithomimus"],
  tapejara: ["tapejara", "tapejaridae"],
  dsungaripterus: ["dsungaripterus", "pterodactylus"],

  // No PhyloPic image of their own; each falls back within its own family to a
  // relative that is not otherwise on the chart. Metriacanthosaurus borrows the
  // metriacanthosaurid Yangchuanosaurus; Mononykus the alvarezsaurid
  // Alvarezsaurus.
  metriacanthosaurus: ["metriacanthosaurus", "metriacanthosauridae"],
  mononykus: ["mononykus", "alvarezsauridae"],
};

const licenceRank = (href = "") => {
  if (href.includes("publicdomain")) return 0;
  if (href.includes("/by/")) return 1;
  if (href.includes("/by-sa/")) return 2;
  return 9; // any NonCommercial variant
};

const licenceName = (href = "") => {
  if (href.includes("zero")) return "CC0 1.0";
  if (href.includes("mark")) return "Public Domain Mark 1.0";
  const match = href.match(/\/licenses\/([a-z-]+)\/([\d.]+)/);
  return match ? `CC ${match[1].toUpperCase()} ${match[2]}` : "Unknown";
};

async function currentBuild() {
  const res = await fetch("https://api.phylopic.org/images?build=0", { headers: ACCEPT });
  return (await res.json()).build;
}

async function search(build, name) {
  const url =
    `https://api.phylopic.org/images?build=${build}` +
    `&filter_name=${encodeURIComponent(name)}&page=0&embed_items=true`;
  const res = await fetch(url, { headers: ACCEPT });
  if (!res.ok) return [];
  const body = await res.json();
  return (body?._embedded?.items ?? []).filter(Boolean).map((item) => {
    const licenceHref = item._links?.license?.href ?? "";
    return {
      uuid: item.uuid ?? item._links?.self?.href?.match(/images\/([\w-]+)/)?.[1],
      taxon: item._links?.self?.title ?? name,
      attribution: item.attribution ?? "Unknown artist",
      licenceHref,
      licenceName: licenceName(licenceHref),
      rank: licenceRank(licenceHref),
      vector: item._links?.vectorFile?.href,
    };
  });
}

const build = await currentBuild();
console.log(`PhyloPic build ${build}\n`);
await mkdir(OUT_DIR, { recursive: true });

const entries = [];
const warnings = [];

for (const creature of CREATURES) {
  const genus = creature.name.split(" ")[0];
  const chain = QUERY_CHAINS[creature.id] ?? [genus];

  let chosen = null;
  let matchedQuery = null;

  for (const query of chain) {
    const candidates = (await search(build, query.toLowerCase())).filter((c) => c.vector);
    if (!candidates.length) continue;
    candidates.sort((a, b) => a.rank - b.rank);
    // Only settle for a NonCommercial image if the whole chain offers nothing
    // better, so keep looking when the best here is NC and more links remain.
    if (candidates[0].rank === 9 && query !== chain.at(-1)) continue;
    chosen = candidates[0];
    matchedQuery = query;
    break;
  }

  if (!chosen) {
    warnings.push(`no image found for ${creature.name}`);
    console.log(`✗ ${creature.name.padEnd(24)} no image`);
    continue;
  }

  const svg = await fetch(chosen.vector);
  if (!svg.ok) {
    warnings.push(`download failed for ${creature.name}`);
    continue;
  }
  await writeFile(join(OUT_DIR, `${creature.id}.svg`), Buffer.from(await svg.arrayBuffer()));

  // Judge by what the artwork actually depicts, not by which query found it.
  // Searching a family often turns up the genus itself — "ornithomimidae"
  // returns Struthiomimus — and calling that a stand-in would disclose a
  // substitution that never happened.
  const standIn = !chosen.taxon.toLowerCase().startsWith(genus.toLowerCase());
  if (standIn) warnings.push(`${creature.name}: stand-in silhouette (${chosen.taxon})`);
  if (chosen.rank === 9) warnings.push(`${creature.name}: NonCommercial licence`);

  entries.push({
    id: creature.id,
    file: `/silhouettes/${creature.id}.svg`,
    taxon: chosen.taxon,
    standIn,
    attribution: chosen.attribution,
    licenceName: chosen.licenceName,
    licenceUrl: chosen.licenceHref,
    sourceUrl: `https://www.phylopic.org/images/${chosen.uuid}`,
  });

  console.log(
    `✓ ${creature.name.padEnd(24)} ${chosen.licenceName.padEnd(18)}` +
      `${standIn ? `stand-in: ${chosen.taxon}` : ""}`,
  );
}

const header = `// GENERATED FILE — do not edit by hand.
// Regenerate with: node scripts/fetch-silhouettes.mjs
//
// Silhouettes come from PhyloPic (https://phylopic.org). Every entry carries the
// artist attribution and licence its terms require; the UI surfaces these in the
// detail panel and the credits list, so do not strip them.

export interface Silhouette {
  /** Path under public/, ready to use as a CSS mask or img src. */
  file: string;
  /** The taxon the artwork actually depicts. */
  taxon: string;
  /** True when the art shows a relative rather than this genus itself. */
  standIn: boolean;
  attribution: string;
  licenceName: string;
  licenceUrl: string;
  sourceUrl: string;
}

export const SILHOUETTES: Record<string, Silhouette> = `;

const body = JSON.stringify(
  Object.fromEntries(entries.map(({ id, ...rest }) => [id, rest])),
  null,
  2,
);

await writeFile(META_FILE, `${header}${body};\n`);

console.log(`\n${entries.length}/${CREATURES.length} silhouettes written to public/silhouettes/`);
if (warnings.length) {
  console.log("\nNotes:");
  for (const w of warnings) console.log(`  • ${w}`);
}
