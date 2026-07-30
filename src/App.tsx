import { useCallback, useEffect, useMemo, useState } from "react";
import { CREATURES } from "./data/creatures";
import {
  packByFamily,
  contemporariesOf,
  matchesSauropodFilter,
  type SauropodFilter,
} from "./lib/layout";
import { useTimelineViewport } from "./hooks/useTimelineViewport";
import { useTheme } from "./hooks/useTheme";
import { TimelineChart } from "./components/TimelineChart";
import { Toolbar, GroupFilterBar } from "./components/Controls";
import { DetailPanel } from "./components/DetailPanel";
import { ExtinctionPanel } from "./components/ExtinctionPanel";
import { Credits } from "./components/Credits";
import { MASS_EXTINCTIONS } from "./data/geoSpans";
import type { CreatureGroup, GeoSpan } from "./types";

const CREATURES_BY_ID = new Map(CREATURES.map((c) => [c.id, c]));

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  /** Selected mass extinction. Shares the panel slot with `selectedId`, so at
   *  most one of the two is ever set. */
  const [selectedExtinctionId, setSelectedExtinctionId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  /** Empty set means "no filter applied", i.e. show every group. */
  const [activeGroups, setActiveGroups] = useState<Set<CreatureGroup>>(new Set());
  /** Whether the collapsible filter panel is open. */
  const [filtersOpen, setFiltersOpen] = useState(false);
  /** Narrows the sauropodomorph group to a sub-clade; "all" leaves it untouched. */
  const [sauropodFilter, setSauropodFilter] = useState<SauropodFilter>("all");
  /** When false (default), lesser-known `minor` species are held back so the
   *  landing chart stays legible; the toggle reveals the full set. */
  const [showAll, setShowAll] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const {
    viewportRef,
    pxPerMy,
    range,
    onScroll,
    zoomBy,
    fitAll,
    focusInterval,
    revealCreature,
    markInteracted,
  } = useTimelineViewport();

  const selected = selectedId ? CREATURES_BY_ID.get(selectedId) ?? null : null;
  const selectedExtinction = selectedExtinctionId
    ? MASS_EXTINCTIONS.find((e) => e.id === selectedExtinctionId) ?? null
    : null;

  // The count of well-known species is fixed; only the tail is toggled in.
  const notableCount = useMemo(() => CREATURES.filter((c) => !c.minor).length, []);

  // The set the chart is built from. Detail level is a layout mode, not a
  // filter: hiding the tail genuinely removes its lanes, so the default chart is
  // shorter and sparser rather than pocked with gaps where hidden bars would be.
  const visibleCreatures = useMemo(
    () => (showAll ? CREATURES : CREATURES.filter((c) => !c.minor)),
    [showAll],
  );

  // Bars are laid out from the whole *visible* set, so rows stay put as filters
  // change; filtering only affects how a bar is painted.
  const blocks = useMemo(() => packByFamily(visibleCreatures), [visibleCreatures]);

  const matchedIds = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtering =
      needle.length > 0 || activeGroups.size > 0 || sauropodFilter !== "all";
    if (!filtering) return null;

    return new Set(
      visibleCreatures.filter((creature) => {
        const groupOk = activeGroups.size === 0 || activeGroups.has(creature.group);
        // The sauropod sub-filter only ever narrows sauropodomorphs; everything
        // else passes it untouched.
        const cladeOk =
          creature.group !== "sauropodomorph" ||
          matchesSauropodFilter(creature.sauropodClade, sauropodFilter);
        const textOk =
          needle.length === 0 ||
          creature.name.toLowerCase().includes(needle) ||
          (creature.commonName?.toLowerCase().includes(needle) ?? false);
        return groupOk && cladeOk && textOk;
      }).map((creature) => creature.id),
    );
  }, [query, activeGroups, sauropodFilter, visibleCreatures]);

  // Contemporaries are drawn from the visible set, so the "lived alongside" list
  // never points at a bar that isn't on the chart to scroll to.
  const contemporaries = useMemo(
    () => (selected ? contemporariesOf(selected, visibleCreatures) : []),
    [selected, visibleCreatures],
  );
  const contemporaryIds = useMemo(
    () => new Set(contemporaries.map((c) => c.id)),
    [contemporaries],
  );

  const selectCreature = useCallback((id: string) => {
    setSelectedExtinctionId(null);
    setSelectedId((current) => (current === id ? null : id));
  }, []);

  const selectExtinction = useCallback((id: string) => {
    setSelectedId(null);
    setSelectedExtinctionId((current) => (current === id ? null : id));
  }, []);

  // Bring a newly selected creature into view — important when the selection
  // came from the contemporaries list rather than from clicking the chart.
  useEffect(() => {
    if (selected) revealCreature(selected.id);
  }, [selected, revealCreature]);

  const handleZoom = useCallback(
    (factor: number) => {
      markInteracted();
      zoomBy(factor);
    },
    [markInteracted, zoomBy],
  );

  const handleJump = useCallback(
    (span: GeoSpan) => {
      markInteracted();
      focusInterval(span);
    },
    [markInteracted, focusInterval],
  );

  const toggleGroup = useCallback((group: CreatureGroup) => {
    setActiveGroups((current) => {
      const next = new Set(current);
      // First click on any chip switches from "show everything" to "show only
      // this one", which is what people expect from a filter row.
      if (next.size === 0) return new Set([group]);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelectedId(null);
      setSelectedExtinctionId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <h1>Chronofauna</h1>
          <p>Every line is one animal, to scale across 300 million years</p>
        </div>

        <Toolbar
          query={query}
          onQueryChange={setQuery}
          onZoom={handleZoom}
          onFitAll={() => {
            markInteracted();
            fitAll();
          }}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </header>

      <GroupFilterBar
        activeGroups={activeGroups}
        onToggleGroup={toggleGroup}
        resultCount={matchedIds ? matchedIds.size : visibleCreatures.length}
        totalCount={visibleCreatures.length}
        open={filtersOpen}
        onToggleOpen={() => setFiltersOpen((v) => !v)}
        sauropodFilter={sauropodFilter}
        onSauropodFilterChange={setSauropodFilter}
        showAll={showAll}
        onToggleShowAll={() => setShowAll((v) => !v)}
        notableCount={notableCount}
        allCount={CREATURES.length}
      />

      <div className="stage">
        <TimelineChart
          blocks={blocks}
          pxPerMy={pxPerMy}
          range={range}
          selected={selected}
          contemporaryIds={contemporaryIds}
          matchedIds={matchedIds}
          viewportRef={viewportRef}
          onScroll={onScroll}
          onSelectCreature={selectCreature}
          onSelectSpan={handleJump}
          selectedExtinctionId={selectedExtinctionId}
          onSelectExtinction={selectExtinction}
        />

        {selected && (
          <DetailPanel
            creature={selected}
            contemporaries={contemporaries}
            onSelect={selectCreature}
            onClose={() => setSelectedId(null)}
          />
        )}

        {selectedExtinction && (
          <ExtinctionPanel
            event={selectedExtinction}
            onClose={() => setSelectedExtinctionId(null)}
          />
        )}
      </div>

      <footer className="colophon">
        <p>
          Drag or scroll to pan · pinch or ⌘/Ctrl + scroll to zoom · tap a period band to
          jump to it · Esc to clear
        </p>
        <a
          className="source-link"
          href="https://github.com/AstroBison/chronofauna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Source on GitHub
        </a>
        <Credits />
      </footer>
    </div>
  );
}
