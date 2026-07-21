import { TIMELINE_START, TIMELINE_END } from "../data/geoSpans";
import type { Interval } from "../types";

/**
 * The single place where "time runs backwards" flips into "x grows rightwards".
 *
 * The chart is linear in time: one million years is the same number of pixels
 * everywhere. That is the honest way to draw deep time — it is what makes the
 * Quaternary a sliver and makes the gap between Stegosaurus and T. rex look as
 * enormous as it actually is. Zooming, not a distorted axis, is how you get
 * down to the recent stuff.
 */

export const TOTAL_MY = TIMELINE_START - TIMELINE_END;

/** Zoom is expressed as pixels per million years. */
export const MIN_PX_PER_MY = 2;
export const MAX_PX_PER_MY = 6000;

export function clampZoom(pxPerMy: number): number {
  return Math.min(MAX_PX_PER_MY, Math.max(MIN_PX_PER_MY, pxPerMy));
}

/** Horizontal offset in px of an age, measured from the left edge of the chart. */
export function myaToX(mya: number, pxPerMy: number): number {
  return (TIMELINE_START - mya) * pxPerMy;
}

/** Inverse of {@link myaToX}. */
export function xToMya(x: number, pxPerMy: number): number {
  return TIMELINE_START - x / pxPerMy;
}

/** Left edge and width in px of an interval. Width is always non-negative. */
export function intervalToRect(
  interval: Interval,
  pxPerMy: number,
): { left: number; width: number } {
  const left = myaToX(interval.start, pxPerMy);
  const right = myaToX(interval.end, pxPerMy);
  return { left, width: Math.max(0, right - left) };
}

export function totalWidth(pxPerMy: number): number {
  return TOTAL_MY * pxPerMy;
}

/** Do two spans of time share any moment? Touching endpoints do not count. */
export function overlaps(a: Interval, b: Interval): boolean {
  return a.start > b.end && b.start > a.end;
}

/** Length of an interval in millions of years. */
export function durationMy(interval: Interval): number {
  return interval.start - interval.end;
}

/**
 * Choose a tick spacing that yields roughly one label per `targetPx`, snapped
 * to a human-friendly 1/2/5 × 10ⁿ value so labels read as round numbers at
 * every zoom level.
 */
export function niceTickStep(pxPerMy: number, targetPx = 120): number {
  const rawStep = targetPx / pxPerMy;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const normalised = rawStep / magnitude;
  const snapped = normalised <= 1 ? 1 : normalised <= 2 ? 2 : normalised <= 5 ? 5 : 10;
  return snapped * magnitude;
}

/** Tick ages covering [oldest, youngest], clipped to the chart's bounds. */
export function ticksInRange(oldest: number, youngest: number, step: number): number[] {
  const from = Math.min(TIMELINE_START, Math.ceil(oldest / step) * step);
  const to = Math.max(TIMELINE_END, youngest);
  const ticks: number[] = [];
  for (let age = from; age >= to - 1e-9; age -= step) {
    // Re-round to kill floating-point drift accumulated by repeated subtraction.
    ticks.push(Number(age.toFixed(6)));
  }
  return ticks;
}

/**
 * Decimal places needed to tell two values `stepInUnit` apart.
 *
 * A step of 0.02 needs two places; a step of 5 needs none. Capped so a extreme
 * zoom cannot ask for an absurd number of digits.
 */
function decimalsForStep(stepInUnit: number): number {
  if (!Number.isFinite(stepInUnit) || stepInUnit <= 0) return 0;
  return Math.max(0, Math.min(6, Math.ceil(-Math.log10(stepInUnit))));
}

const withDecimals = (value: number, decimals: number) =>
  value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Format an age, scaling units so small numbers stay legible.
 *
 * Pass `step` — the spacing between the values being listed — when formatting a
 * *sequence*, such as axis ticks. Precision then follows the step rather than
 * the magnitude of the age.
 *
 * Without it, precision came from magnitude alone: anything over 10 Ma rounded
 * to a whole number, so zoomed deep into the Permian every visible tick read
 * "299 Ma" and the axis stopped saying anything at all. Magnitude is the wrong
 * input — what matters is how far apart the neighbours are.
 */
export function formatMya(mya: number, step?: number): string {
  if (mya <= 0) return "today";

  if (mya < 0.001) {
    const years = mya * 1_000_000;
    if (step === undefined) return `${Math.round(years).toLocaleString()} yr`;
    return `${withDecimals(years, decimalsForStep(step * 1_000_000))} yr`;
  }

  if (mya < 1) {
    const ka = mya * 1000;
    if (step === undefined) return `${Math.round(ka).toLocaleString()} ka`;
    return `${withDecimals(ka, decimalsForStep(step * 1000))} ka`;
  }

  if (step === undefined) {
    // Trailing zeros are trimmed here: a lone age reads better as "5 Ma" than
    // "5.0 Ma". In a sequence they are kept, so the column of ticks lines up.
    return `${Number(mya.toFixed(mya < 10 ? 1 : 0))} Ma`;
  }
  return `${withDecimals(mya, decimalsForStep(step))} Ma`;
}

/** Format a duration for the detail panel. */
export function formatDuration(my: number): string {
  if (my < 1) return `${Math.round(my * 1_000_000).toLocaleString()} years`;
  return `${Number(my.toFixed(my < 10 ? 1 : 0))} million years`;
}
