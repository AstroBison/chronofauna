/** WCAG relative luminance of an `#rrggbb` colour. */
export function relativeLuminance(hex: string): number {
  const value = hex.replace("#", "");
  const channels = [0, 2, 4].map((offset) => {
    const c = parseInt(value.slice(offset, offset + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** WCAG contrast ratio between two luminances. */
function contrast(a: number, b: number): number {
  const [lo, hi] = a < b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

const DARK_INK = "#14120f";
const LIGHT_INK = "#ffffff";

/**
 * Pick whichever of dark/light ink is more legible on `background`.
 *
 * The ICS palette runs from near-black Triassic purple to pale Quaternary
 * yellow, so no single ink works across it — a fixed dark ink left "Triassic"
 * and "Permian" barely readable. Choosing per span, by measured contrast rather
 * than a guessed lightness threshold, fixes it in both themes at once.
 */
export function readableInk(background: string): string {
  const luminance = relativeLuminance(background);
  return contrast(luminance, relativeLuminance(DARK_INK)) >=
    contrast(luminance, relativeLuminance(LIGHT_INK))
    ? DARK_INK
    : LIGHT_INK;
}
