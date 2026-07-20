import { SILHOUETTES } from "../data/silhouettes";

interface SilhouetteProps {
  creatureId: string;
  className?: string;
  /** Accessible name. Omit for purely decorative uses (e.g. bar thumbnails). */
  label?: string;
}

/**
 * Renders a PhyloPic silhouette as a CSS mask rather than an `<img>`.
 *
 * The source files are flat black shapes, so masking lets one asset be painted
 * any colour the context needs — white on a coloured bar, the group colour in
 * the detail panel — with no per-colour copies and no runtime SVG parsing.
 */
export function Silhouette({ creatureId, className = "", label }: SilhouetteProps) {
  const silhouette = SILHOUETTES[creatureId];
  if (!silhouette) return null;

  return (
    <span
      className={`silhouette ${className}`}
      style={{ "--silhouette": `url("${silhouette.file}")` } as React.CSSProperties}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
