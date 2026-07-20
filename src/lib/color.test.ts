import { describe, expect, it } from "vitest";
import { readableInk, relativeLuminance } from "./color";
import { ERAS, PERIODS, EPOCHS } from "../data/geoSpans";

const contrast = (a: string, b: string) => {
  const [lo, hi] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => x - y);
  return (hi + 0.05) / (lo + 0.05);
};

describe("relativeLuminance", () => {
  it("anchors black and white", () => {
    expect(relativeLuminance("#000000")).toBeCloseTo(0, 5);
    expect(relativeLuminance("#ffffff")).toBeCloseTo(1, 5);
  });
});

describe("readableInk", () => {
  it("puts light ink on dark backgrounds and dark ink on light ones", () => {
    expect(readableInk("#812B92")).toBe("#ffffff"); // Triassic purple
    expect(readableInk("#F9F97F")).toBe("#14120f"); // Quaternary yellow
  });

  it("clears WCAG AA (4.5:1) on every span in the geologic time scale", () => {
    // Guards the whole palette, not just today's worst case: adding a span with
    // an awkward colour should fail here rather than ship unreadable.
    for (const span of [...ERAS, ...PERIODS, ...EPOCHS]) {
      expect(
        contrast(span.color, readableInk(span.color)),
        `${span.name} (${span.color})`,
      ).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("beats a fixed dark ink on the worst-case span", () => {
    const triassic = "#812B92";
    expect(contrast(triassic, readableInk(triassic))).toBeGreaterThan(
      contrast(triassic, "#14120f"),
    );
  });
});
