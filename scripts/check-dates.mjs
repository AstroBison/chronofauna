/**
 * Cross-checks every range in creatures.ts against the Paleobiology Database.
 *
 *   npm run check-dates            report only
 *   npm run check-dates -- --strict  exit 1 if anything exceeds the threshold
 *
 * The dates in `creatures.ts` are rounded teaching estimates, not citable
 * stratigraphy, and nothing here changes that — this only catches ranges that
 * have drifted away from the fossil record badly enough to be wrong rather
 * than merely approximate.
 *
 * How the test works: PBDB brackets a taxon's first appearance between `fea`
 * (older bound) and `fla`, and its last appearance between `lea` and `lla`
 * (younger bound). So [lla, fea] is the widest window any fossil supports. A
 * range *narrower* than that window is fine — it just means we chose a tighter
 * interval. What matters is a range that escapes it, i.e. claiming an animal
 * appeared before, or survived after, anything ever dug up.
 *
 * Read the output as a prompt to check the literature, not as proof of error.
 * PBDB's bounds are stage-level and inherit their own coarseness: Protoceratops
 * reports a 50-My window that plainly includes misassigned material, and
 * genera whose true range sits inside a stage will always show a fraction of a
 * million years of disagreement from rounding alone. That is why the default
 * threshold ignores anything under 1 My.
 */

import { CREATURES } from "../src/data/creatures.ts";

const THRESHOLD_MY = Number(
  process.argv.find((a) => a.startsWith("--threshold="))?.split("=")[1] ?? 1,
);
const STRICT = process.argv.includes("--strict");

async function appearance(name) {
  const url =
    "https://paleobiodb.org/data1.2/taxa/single.json?name=" +
    encodeURIComponent(name) +
    "&show=app";
  try {
    const response = await fetch(url);
    const body = await response.json();
    return body.records?.[0] ?? null;
  } catch {
    return null;
  }
}

const flagged = [];
const unchecked = [];

for (const creature of CREATURES) {
  const record =
    (await appearance(creature.name)) ?? (await appearance(creature.name.split(" ")[0]));

  if (!record || record.fea == null || record.lla == null) {
    unchecked.push(creature.name);
    continue;
  }

  const tooOld = creature.start - record.fea;
  const tooYoung = record.lla - creature.end;
  const worst = Math.max(tooOld, tooYoung);

  if (worst > THRESHOLD_MY) {
    flagged.push({
      name: creature.name,
      ours: `${creature.start}–${creature.end}`,
      envelope: `${record.fea}–${record.lla}`,
      tooOld,
      tooYoung,
      worst,
      occurrences: record.noc ?? 0,
    });
  }
}

flagged.sort((a, b) => b.worst - a.worst);

console.log(
  `Checked ${CREATURES.length - unchecked.length} of ${CREATURES.length} against PBDB ` +
    `(threshold ${THRESHOLD_MY} My)\n`,
);
if (unchecked.length) console.log(`No PBDB range: ${unchecked.join(", ")}\n`);

if (!flagged.length) {
  console.log("Every range sits inside the fossil record's envelope.");
} else {
  console.log(`${flagged.length} range(s) outside the envelope:\n`);
  console.log("name                  ours          pbdb envelope    too old  too young   occ");
  for (const f of flagged) {
    console.log(
      `${f.name.padEnd(21)} ${f.ours.padEnd(13)} ${f.envelope.padEnd(16)} ` +
        `${(f.tooOld > 0 ? f.tooOld.toFixed(1) + " My" : "-").padStart(7)}  ` +
        `${(f.tooYoung > 0 ? f.tooYoung.toFixed(1) + " My" : "-").padStart(9)}  ` +
        `${String(f.occurrences).padStart(4)}`,
    );
  }
  console.log(
    "\nA high occurrence count with a large discrepancy is the strongest signal;\n" +
      "a wide envelope or a single occurrence usually means PBDB is the vague one.",
  );
}

if (STRICT && flagged.length) process.exit(1);
