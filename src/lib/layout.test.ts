import { describe, expect, it } from "vitest";
import { packLanes, contemporariesOf } from "./layout";
import { overlaps, intervalToRect, ticksInRange, niceTickStep } from "./scale";
import type { Creature } from "../types";

const make = (id: string, start: number, end: number): Creature => ({
  id,
  name: id,
  group: "theropod",
  start,
  end,
  diet: "carnivore",
  blurb: "",
});

describe("overlaps", () => {
  it("detects a shared span", () => {
    expect(overlaps(make("a", 100, 80), make("b", 90, 70))).toBe(true);
  });

  it("treats one range fully inside another as overlapping", () => {
    expect(overlaps(make("a", 100, 60), make("b", 90, 70))).toBe(true);
  });

  it("rejects disjoint ranges", () => {
    expect(overlaps(make("a", 100, 90), make("b", 80, 70))).toBe(false);
  });

  it("rejects ranges that merely touch at a boundary", () => {
    // Stegosaurus ends exactly where the next bar begins: they never met.
    expect(overlaps(make("a", 100, 90), make("b", 90, 80))).toBe(false);
  });
});

describe("packLanes", () => {
  it("keeps non-overlapping creatures in one lane", () => {
    const packed = packLanes([make("a", 100, 90), make("b", 80, 70), make("c", 60, 50)]);
    expect(packed.every((p) => p.lane === 0)).toBe(true);
  });

  it("pushes overlapping creatures onto separate lanes", () => {
    const packed = packLanes([make("a", 100, 60), make("b", 90, 50), make("c", 80, 40)]);
    const lanes = Object.fromEntries(packed.map((p) => [p.creature.id, p.lane]));
    expect(new Set(Object.values(lanes)).size).toBe(3);
  });

  it("reuses a freed lane once its occupant has died out", () => {
    const packed = packLanes([
      make("long", 100, 20),
      make("early", 90, 80),
      make("late", 70, 60), // should drop back into `early`'s lane
    ]);
    const lanes = Object.fromEntries(packed.map((p) => [p.creature.id, p.lane]));
    expect(lanes.long).toBe(0);
    expect(lanes.early).toBe(1);
    expect(lanes.late).toBe(1);
  });

  it("never places two overlapping creatures in the same lane", () => {
    const creatures = Array.from({ length: 60 }, (_, i) =>
      make(`c${i}`, 200 - i * 3, 200 - i * 3 - (i % 7) * 4 - 1),
    );
    const packed = packLanes(creatures);

    for (const a of packed) {
      for (const b of packed) {
        if (a.creature.id === b.creature.id || a.lane !== b.lane) continue;
        expect(overlaps(a.creature, b.creature)).toBe(false);
      }
    }
  });

  it("records the empty gap to the next bar in the same lane", () => {
    const packed = packLanes([make("a", 100, 90), make("b", 80, 70), make("c", 60, 50)]);
    const gaps = Object.fromEntries(
      packed.map((p) => [p.creature.id, p.gapAfterMy]),
    );
    expect(gaps.a).toBe(10); // died 90, next appears 80
    expect(gaps.b).toBe(10);
    expect(gaps.c).toBe(Infinity); // nothing follows it
  });

  it("measures the gap within a lane, not against bars in other lanes", () => {
    const packed = packLanes([
      make("long", 100, 20), // lane 0, spans everything below
      make("early", 90, 80), // lane 1
      make("late", 70, 60), // lane 1, 10 My after `early`
    ]);
    const gaps = Object.fromEntries(packed.map((p) => [p.creature.id, p.gapAfterMy]));
    expect(gaps.early).toBe(10);
    expect(gaps.long).toBe(Infinity);
  });

  it("does not mutate the input array's order", () => {
    const input = [make("a", 50, 40), make("b", 100, 90)];
    packLanes(input);
    expect(input.map((c) => c.id)).toEqual(["a", "b"]);
  });
});

describe("contemporariesOf", () => {
  it("excludes the target itself and non-overlapping creatures", () => {
    const trex = make("trex", 68, 66);
    const all = [trex, make("triceratops", 68, 66), make("stegosaurus", 155, 145)];
    expect(contemporariesOf(trex, all).map((c) => c.id)).toEqual(["triceratops"]);
  });
});

describe("intervalToRect", () => {
  it("maps older ages further left and never returns a negative width", () => {
    const older = intervalToRect({ start: 200, end: 190 }, 10);
    const newer = intervalToRect({ start: 100, end: 90 }, 10);
    expect(older.left).toBeLessThan(newer.left);
    expect(older.width).toBeCloseTo(100);
    expect(intervalToRect({ start: 50, end: 50 }, 10).width).toBe(0);
  });
});

describe("axis ticks", () => {
  it("snaps the step to a 1/2/5 progression", () => {
    for (const px of [2, 7, 40, 300, 2000]) {
      const step = niceTickStep(px);
      const mantissa = step / 10 ** Math.floor(Math.log10(step));
      expect([1, 2, 5]).toContain(Math.round(mantissa));
    }
  });

  it("emits descending ages inside the requested window", () => {
    const ticks = ticksInRange(200, 150, 10);
    expect(ticks[0]).toBe(200);
    expect(ticks.at(-1)).toBe(150);
    expect(ticks).toEqual([...ticks].sort((a, b) => b - a));
  });

  it("never runs past the present day", () => {
    expect(Math.min(...ticksInRange(20, 0, 5))).toBeGreaterThanOrEqual(0);
  });
});
