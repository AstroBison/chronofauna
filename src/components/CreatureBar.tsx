import {
  BAR_HEIGHT,
  BAR_THUMBNAIL_EXTRA,
  LABEL_SAFETY_GAP,
  LANE_HEIGHT,
  MIN_RULE_WIDTH,
} from "../lib/dimensions";
import { formatDuration, formatMya, durationMy, intervalToRect } from "../lib/scale";
import { measureLabelWidth } from "../lib/text";
import { Silhouette } from "./Silhouette";
import type { PackedCreature } from "../types";

/**
 * How a bar relates to the current selection.
 * - `contemporary`: alive at the same time as the selected creature
 * - `excluded`: filtered out by search or a group toggle
 */
export type BarState = "normal" | "selected" | "contemporary" | "faded" | "excluded";

interface CreatureBarProps {
  packed: PackedCreature;
  pxPerMy: number;
  color: string;
  state: BarState;
  onSelect: (id: string) => void;
}

/**
 * One species, drawn as a hairline rule spanning its lifespan with its name
 * annotated above.
 *
 * The label sitting *above* the rule rather than inside it is what makes the
 * thin style work: a name is no longer constrained by the width of its own bar,
 * so it may overhang into the empty time that follows. Short-lived genera —
 * most of them, at this scale — get labelled where the old chunky bars had to
 * drop them.
 */
export function CreatureBar({ packed, pxPerMy, color, state, onSelect }: CreatureBarProps) {
  const { creature, lane, gapAfterMy } = packed;
  const { left, width } = intervalToRect(creature, pxPerMy);
  const label = creature.commonName ?? creature.name;

  // Genera known from a single horizon are nearly zero-width at low zoom.
  // Floor the painted width so they stay visible and clickable.
  const ruleWidth = Math.max(width, MIN_RULE_WIDTH);

  // A label may use its own rule plus the empty run before the next bar in this
  // lane, less a small gap so neighbouring labels never sit flush together.
  const roomForLabel = ruleWidth + gapAfterMy * pxPerMy - LABEL_SAFETY_GAP;
  const labelWidth = measureLabelWidth(label, "bar");
  const showLabel = labelWidth <= roomForLabel;
  const showThumbnail = showLabel && labelWidth + BAR_THUMBNAIL_EXTRA <= roomForLabel;

  return (
    <button
      className={`bar bar--${state}`}
      /* Lets the viewport find this bar to scroll it into view; see
         `revealCreature` in useTimelineViewport. */
      data-creature-id={creature.id}
      style={{
        left,
        width: ruleWidth,
        top: lane * LANE_HEIGHT,
        height: BAR_HEIGHT,
        "--bar-color": color,
      } as React.CSSProperties}
      onClick={() => onSelect(creature.id)}
      aria-pressed={state === "selected"}
      title={`${creature.name}: ${formatMya(creature.start)} – ${formatMya(
        creature.end,
      )} (${formatDuration(durationMy(creature))})`}
    >
      {showLabel && (
        <span className="bar-annotation">
          {showThumbnail && <Silhouette creatureId={creature.id} className="silhouette--bar" />}
          <span className="bar-label">{label}</span>
        </span>
      )}
      <span className="bar-rule" />
    </button>
  );
}
