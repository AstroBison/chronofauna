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
  selectedExtinctionId: string | null;
  onSelectExtinction: (id: string) => void;
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
  selectedExtinctionId,
  onSelectExtinction,
}: TimelineChartProps) {
  const width = totalWidth(pxPerMy);

  const stateFor = (creature: Creature): BarState => {
    if (matchedIds && !matchedIds.has(creature.id)) return "excluded";
    if (!selected) return "normal";
    if (creature.id === selected.id) return "selected";
    return contemporaryIds.has(creature.id) ? "contemporary" : "faded";
  };

  const speciesCount = blocks.reduce((sum, block) => sum + block.members.length, 0);

  return (
    <div
      className="viewport"
      ref={viewportRef}
      onScroll={onScroll}
      role="region"
      aria-label="Timeline of prehistoric life"
      aria-describedby="chart-summary"
    >
      {/*
        The structure a sighted reader takes in at a glance — how many species,
        how they are grouped, what a bar is — stated once for anyone who cannot
        see it. Without this the chart is an unexplained heap of buttons.
      */}
      <p id="chart-summary" className="visually-hidden">
        {speciesCount} species spanning 299 million years ago to the present,
        grouped into {blocks.length} families: {blocks.map((b) => b.label).join(", ")}. Each
        species is a button giving its name, when it lived and for how long; choosing one
        lists every species alive at the same time. Above the chart, each geological era,
        period and epoch is a button that zooms to it, and a line of mass-extinction
        markers gives each event's cause when chosen.
      </p>

      <div className="canvas" style={{ width }}>
        <TimeAxis
          pxPerMy={pxPerMy}
          range={range}
          onSelectSpan={onSelectSpan}
          selectedExtinctionId={selectedExtinctionId}
          onSelectExtinction={onSelectExtinction}
        />

        {/* Blocks sit in normal flow, so this box sizes itself. */}
        <div className="lanes">
          {/*
            A guide dropped from each marker on the extinction line, so the event
            can be read against the bars that stop at it. Purely decorative now:
            the name, the explanation and the click target all live on the line
            itself, which is sticky and therefore always reachable.
          */}
          {MASS_EXTINCTIONS.map((event) => (
            <div
              key={event.id}
              className={`extinction-line${
                selectedExtinctionId === event.id ? " is-selected" : ""
              }`}
              style={{ left: myaToX(event.at, pxPerMy) }}
              aria-hidden="true"
            />
          ))}

          {blocks.map((block) => (
            /* Naming the section turns each family into a region a screen
               reader can jump between, mirroring the visual grouping. */
            <section
              key={block.family}
              className="family"
              aria-labelledby={`family-${block.family}`}
            >
              <h2
                className="family-title"
                id={`family-${block.family}`}
                style={{ height: FAMILY_HEADER_HEIGHT }}
              >
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
                    aria-hidden="true"
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
