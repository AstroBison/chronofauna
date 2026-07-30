import { MASS_EXTINCTIONS } from "../data/geoSpans";
import {
  EXTINCTION_MARKER_WIDTH,
  EXTINCTION_ROW_HEIGHT,
  LABEL_SAFETY_GAP,
} from "../lib/dimensions";
import { formatMya, myaToX, totalWidth } from "../lib/scale";
import { measureLabelWidth } from "../lib/text";
import { ExtinctionIcon } from "./ExtinctionIcon";

interface ExtinctionLineProps {
  pxPerMy: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/**
 * One horizontal line carrying the mass extinctions, sitting under the time axis
 * and sticky with it.
 *
 * These events explain most of the abrupt endings on the chart, so they get a
 * permanent home of their own rather than a caption tucked above the first
 * family block, where they competed with the bars and scrolled out of reach.
 * Each marker is a real button: the explanation is a click away for keyboard and
 * touch readers, not hover-only.
 */
export function ExtinctionLine({ pxPerMy, selectedId, onSelect }: ExtinctionLineProps) {
  const canvasWidth = totalWidth(pxPerMy);

  // Oldest first, so "the next marker" is always the one to the right and the
  // room each label has is the gap before it.
  const events = [...MASS_EXTINCTIONS].sort((a, b) => b.at - a.at);

  return (
    <div className="extinction-row" style={{ height: EXTINCTION_ROW_HEIGHT }}>
      <span className="extinction-track" aria-hidden="true" />

      {events.map((event, index) => {
        const x = myaToX(event.at, pxPerMy);
        const nextX = index + 1 < events.length ? myaToX(events[index + 1].at, pxPerMy) : canvasWidth;
        const room = nextX - x - EXTINCTION_MARKER_WIDTH - LABEL_SAFETY_GAP;

        // Prefer the full name, fall back to the short form, then to no label at
        // all — the icon and the marker stay whatever the zoom.
        const full = measureLabelWidth(event.name, "bar");
        const short = measureLabelWidth(event.shortName, "bar");
        const label = full <= room ? event.name : short <= room ? event.shortName : null;

        const selected = selectedId === event.id;

        return (
          <button
            key={event.id}
            className={`extinction-marker${selected ? " is-selected" : ""}`}
            style={{ left: x }}
            onClick={() => onSelect(event.id)}
            aria-pressed={selected}
            /* Named in full because the visible label is conditional — which
               marker shows its name changes with zoom. */
            aria-label={`${event.name}, ${formatMya(event.at)}. ${event.causeLabel}. Show details.`}
            title={`${event.name} — ${formatMya(event.at)}, ${event.causeLabel}`}
          >
            <span className="extinction-dot">
              <ExtinctionIcon cause={event.cause} />
            </span>
            {label && <span className="extinction-name">{label}</span>}
          </button>
        );
      })}
    </div>
  );
}
