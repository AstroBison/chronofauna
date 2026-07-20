import { MASS_EXTINCTIONS } from "../data/geoSpans";
import { GROUP_META, type FamilyBlock } from "../lib/layout";
import {
  BAR_HEIGHT,
  FAMILY_GAP,
  FAMILY_HEADER_HEIGHT,
  LANE_HEIGHT,
} from "../lib/dimensions";
import { myaToX, totalWidth } from "../lib/scale";
import { TimeAxis } from "./TimeAxis";
import { CreatureBar, type BarState } from "./CreatureBar";
import type { Creature, GeoSpan } from "../types";
import type { VisibleRange } from "../hooks/useTimelineViewport";

interface TimelineChartProps {
  blocks: FamilyBlock[];
  pxPerMy: number;
  range: VisibleRange;
  selected: Creature | null;
  contemporaryIds: Set<string>;
  matchedIds: Set<string> | null;
  viewportRef: React.RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onSelectCreature: (id: string) => void;
  onSelectSpan: (span: GeoSpan) => void;
}

export function TimelineChart({
  blocks,
  pxPerMy,
  range,
  selected,
  contemporaryIds,
  matchedIds,
  viewportRef,
  onScroll,
  onSelectCreature,
  onSelectSpan,
}: TimelineChartProps) {
  const width = totalWidth(pxPerMy);

  const stateFor = (creature: Creature): BarState => {
    if (matchedIds && !matchedIds.has(creature.id)) return "excluded";
    if (!selected) return "normal";
    if (creature.id === selected.id) return "selected";
    return contemporaryIds.has(creature.id) ? "contemporary" : "faded";
  };

  return (
    <div className="viewport" ref={viewportRef} onScroll={onScroll}>
      <div className="canvas" style={{ width }}>
        <TimeAxis pxPerMy={pxPerMy} range={range} onSelectSpan={onSelectSpan} />

        {/* Blocks sit in normal flow, so this box sizes itself. */}
        <div className="lanes">
          {/* Extinction markers sit behind the bars and span every block. */}
          {MASS_EXTINCTIONS.map((event) => (
            <div
              key={event.id}
              className="extinction-line"
              style={{ left: myaToX(event.at, pxPerMy) }}
              title={`${event.name} — ${event.blurb}`}
            >
              <span className="extinction-label">{event.name}</span>
            </div>
          ))}

          {blocks.map((block) => (
            <section key={block.family} className="family">
              <h2 className="family-title" style={{ height: FAMILY_HEADER_HEIGHT }}>
                {block.label}
              </h2>

              <div
                className="family-rows"
                style={{
                  height: block.laneCount * LANE_HEIGHT,
                  marginBottom: FAMILY_GAP,
                }}
              >
                {/* A hairline under each row, where the rules rest. */}
                {Array.from({ length: block.laneCount }, (_, lane) => (
                  <div
                    key={lane}
                    className="lane-guide"
                    style={{ top: lane * LANE_HEIGHT + BAR_HEIGHT }}
                  />
                ))}

                {block.members.map((packed) => (
                  <CreatureBar
                    key={packed.creature.id}
                    packed={packed}
                    pxPerMy={pxPerMy}
                    color={GROUP_META[packed.creature.group].color}
                    state={stateFor(packed.creature)}
                    onSelect={onSelectCreature}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
