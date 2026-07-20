import { ERAS, PERIODS, EPOCHS } from "../data/geoSpans";
import {
  ERA_ROW_HEIGHT,
  PERIOD_ROW_HEIGHT,
  EPOCH_ROW_HEIGHT,
  TICK_ROW_HEIGHT,
} from "../lib/dimensions";
import { formatMya, intervalToRect, myaToX, niceTickStep, ticksInRange } from "../lib/scale";
import { estimateLabelWidth } from "../lib/text";
import { readableInk } from "../lib/color";
import type { GeoSpan } from "../types";
import type { VisibleRange } from "../hooks/useTimelineViewport";

interface SpanRowProps {
  spans: GeoSpan[];
  height: number;
  pxPerMy: number;
  onSelect: (span: GeoSpan) => void;
}

function SpanRow({ spans, height, pxPerMy, onSelect }: SpanRowProps) {
  return (
    <div className="axis-row" style={{ height }}>
      {spans.map((span) => {
        const { left, width } = intervalToRect(span, pxPerMy);
        return (
          <button
            key={span.id}
            className="axis-span"
            style={{ left, width, background: span.color, color: readableInk(span.color) }}
            onClick={() => onSelect(span)}
            title={`${span.name} — ${formatMya(span.start)} to ${formatMya(span.end)}. Click to zoom.`}
          >
            {/* Drop the name rather than let it clip mid-word ("Late Jurass…"). */}
            {width >= estimateLabelWidth(span.name, 16) && (
              <span className="axis-span-label">{span.name}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

interface TimeAxisProps {
  pxPerMy: number;
  range: VisibleRange;
  onSelectSpan: (span: GeoSpan) => void;
}

/**
 * The sticky header: eras, periods, epochs and a numeric age scale.
 *
 * Ticks are windowed to the visible range — at high zoom the full chart would
 * otherwise need tens of thousands of them.
 */
export function TimeAxis({ pxPerMy, range, onSelectSpan }: TimeAxisProps) {
  const step = niceTickStep(pxPerMy);
  // Pad by one step on each side so labels do not pop in at the edges.
  const ticks = ticksInRange(range.oldest + step, range.youngest - step, step);

  return (
    <div className="axis">
      <SpanRow spans={ERAS} height={ERA_ROW_HEIGHT} pxPerMy={pxPerMy} onSelect={onSelectSpan} />
      <SpanRow
        spans={PERIODS}
        height={PERIOD_ROW_HEIGHT}
        pxPerMy={pxPerMy}
        onSelect={onSelectSpan}
      />
      <SpanRow
        spans={EPOCHS}
        height={EPOCH_ROW_HEIGHT}
        pxPerMy={pxPerMy}
        onSelect={onSelectSpan}
      />
      <div className="axis-row axis-ticks" style={{ height: TICK_ROW_HEIGHT }}>
        {ticks.map((age) => (
          <div key={age} className="axis-tick" style={{ left: myaToX(age, pxPerMy) }}>
            <span className="axis-tick-label">{formatMya(age)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
