import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { OCCURRENCES } from "./occurrences";
import { CREATURES } from "./creatures";

const MAP_DIR = join(import.meta.dirname, "..", "..", "public", "paleomaps");

describe("occurrence data", () => {
  it("covers every creature", () => {
    const missing = CREATURES.filter((c) => !OCCURRENCES[c.id]).map((c) => c.name);
    expect(missing).toEqual([]);
  });

  it("has no entries for creatures that no longer exist", () => {
    const ids = new Set(CREATURES.map((c) => c.id));
    expect(Object.keys(OCCURRENCES).filter((id) => !ids.has(id))).toEqual([]);
  });

  it("ships the reconstruction each creature points at", () => {
    // The generated data and the map files are produced by one script but land
    // in different places; this catches a half-committed regeneration.
    for (const [id, occurrence] of Object.entries(OCCURRENCES)) {
      expect(
        existsSync(join(MAP_DIR, `${occurrence.mapAge}.json`)),
        `${id} wants paleomaps/${occurrence.mapAge}.json`,
      ).toBe(true);
    }
  });

  it("keeps every site inside real coordinate bounds", () => {
    for (const [id, occurrence] of Object.entries(OCCURRENCES)) {
      expect(occurrence.points.length).toBeGreaterThan(0);
      for (const [lng, lat] of occurrence.points) {
        expect(Math.abs(lng), `${id} longitude`).toBeLessThanOrEqual(180);
        expect(Math.abs(lat), `${id} latitude`).toBeLessThanOrEqual(90);
      }
    }
  });

  it("uses a reconstruction close to when the animal actually lived", () => {
    // A creature snapped to a wildly wrong age would be drawn on the wrong
    // world — the one failure mode this whole feature exists to avoid.
    for (const creature of CREATURES) {
      const occurrence = OCCURRENCES[creature.id];
      const midpoint = (creature.start + creature.end) / 2;
      expect(
        Math.abs(occurrence.mapAge - midpoint),
        `${creature.name} lived around ${midpoint} Ma but maps to ${occurrence.mapAge} Ma`,
      ).toBeLessThanOrEqual(20);
    }
  });
});
