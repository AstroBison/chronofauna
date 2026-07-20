/**
 * Rough px width of a short label at the chart's ~11px UI font, without paying
 * for a real text measurement on every element on every zoom frame.
 *
 * 6.3px per character overestimates slightly for mostly-lowercase names, which
 * is the direction we want to err: too wide means we hide a label, whereas too
 * narrow means labels collide or get clipped mid-word.
 */
export function estimateLabelWidth(text: string, padding = 12): number {
  return text.length * 6.3 + padding;
}
