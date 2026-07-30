import type { ExtinctionCause } from "../data/geoSpans";

/**
 * A pictogram of what caused an extinction, drawn inline so it inherits colour
 * from its context and needs no icon font or network request.
 *
 * These are deliberately crude — an impactor and an erupting vent — because they
 * sit at 13px on a marker and have to read at a glance, not reward inspection.
 */
export function ExtinctionIcon({ cause }: { cause: ExtinctionCause }) {
  if (cause === "asteroid") {
    return (
      <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
        {/* Motion streaks trailing up-left, so the rock reads as falling. */}
        <g
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        >
          <path d="M1.6 3.1 4.4 5.9" />
          <path d="M5.2 1.3 7.1 3.2" />
          <path d="M1.2 7.4 3.1 9.3" />
        </g>
        <circle cx="10" cy="10" r="4.3" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
      {/* Flat-topped cone, so the gap between the shoulders reads as a vent. */}
      <path d="M1.4 14.2 5.6 6.6h4.8l4.2 7.6Z" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M6.6 5.4 8 1.9l1.4 3.5" />
      </g>
      <circle cx="3.9" cy="3.5" r="0.9" fill="currentColor" opacity="0.75" />
      <circle cx="12.2" cy="3" r="0.9" fill="currentColor" opacity="0.75" />
    </svg>
  );
}
