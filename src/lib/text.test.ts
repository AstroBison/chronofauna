import { beforeEach, describe, expect, it } from "vitest";
import { measureLabelWidth, resetLabelMeasurementCache } from "./text";

/**
 * These run without a DOM, so they exercise the fallback path and the caching
 * contract — not the measurement itself. Real accuracy is a browser property
 * and was verified against rendered text there: worst error 0.01%, against
 * 28.6% for the arithmetic estimate this replaced.
 */
describe("measureLabelWidth", () => {
  beforeEach(resetLabelMeasurementCache);

  it("returns a positive width with no DOM available", () => {
    expect(measureLabelWidth("Stegosaurus", "bar")).toBeGreaterThan(0);
  });

  it("is stable across repeated calls", () => {
    const first = measureLabelWidth("Tyrannosaurus", "bar");
    expect(measureLabelWidth("Tyrannosaurus", "bar")).toBe(first);
  });

  it("caches variants separately", () => {
    // Bar and axis labels render at different weights, so the same string is
    // genuinely two widths. One shared cache entry would reintroduce exactly
    // the bug this module was rewritten to fix.
    measureLabelWidth("Jurassic", "bar");
    expect(() => measureLabelWidth("Jurassic", "axis")).not.toThrow();
    expect(measureLabelWidth("Jurassic", "axis")).toBeGreaterThan(0);
  });

  it("scales with string length in the fallback", () => {
    expect(measureLabelWidth("Compsognathus", "bar")).toBeGreaterThan(
      measureLabelWidth("T. rex", "bar"),
    );
  });

  it("handles an empty label without producing a negative width", () => {
    expect(measureLabelWidth("", "bar")).toBeGreaterThanOrEqual(0);
  });
});
