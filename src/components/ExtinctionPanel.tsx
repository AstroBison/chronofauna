import { PERIODS } from "../data/geoSpans";
import { formatMya } from "../lib/scale";
import { ExtinctionIcon } from "./ExtinctionIcon";
import type { MassExtinction } from "../data/geoSpans";

interface ExtinctionPanelProps {
  event: MassExtinction;
  onClose: () => void;
}

/** The period on each side of the boundary, named for the panel. */
function boundary(event: MassExtinction): string {
  const before = PERIODS.find((p) => p.start > event.at && p.end <= event.at);
  const after = PERIODS.find((p) => p.start <= event.at && p.end < event.at);
  return before && after ? `${before.name} → ${after.name}` : "—";
}

/**
 * Details for a mass extinction, sharing the creature panel's shell so the chart
 * has one place where "the thing you clicked" is explained.
 */
export function ExtinctionPanel({ event, onClose }: ExtinctionPanelProps) {
  return (
    <aside className="detail" aria-label={`Details for the ${event.name}`}>
      <header className="detail-header detail-header--extinction">
        <div>
          <h2 className="detail-title--plain">{event.name}</h2>
          <p className="detail-common">{formatMya(event.at)}</p>
        </div>
        <button className="detail-close" onClick={onClose} aria-label="Close details">
          ×
        </button>
      </header>

      <figure className="detail-figure extinction-figure">
        <span className="extinction-hero">
          <ExtinctionIcon cause={event.cause} />
        </span>
        <figcaption>
          <span className="detail-artist">{event.causeLabel}</span>
        </figcaption>
      </figure>

      <dl className="detail-facts">
        <div>
          <dt>Happened</dt>
          <dd>{formatMya(event.at)}</dd>
        </div>
        <div>
          <dt>Cause</dt>
          <dd className="capitalize">{event.cause}</dd>
        </div>
        <div>
          <dt>Losses</dt>
          <dd>{event.losses}</dd>
        </div>
        <div>
          <dt>Boundary</dt>
          <dd>{boundary(event)}</dd>
        </div>
      </dl>

      <p className="detail-blurb">{event.blurb}</p>
    </aside>
  );
}
