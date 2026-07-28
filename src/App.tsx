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
import { Credits } from "./components/Credits";
import type { CreatureGroup, GeoSpan } from "./types";

const CREATURES_BY_ID = new Map(CREATURES.map((c) => [c.id, c]));

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
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
    setSelectedId((current) => (current === id ? null : id));
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
      if (event.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={`app ${selected ? "app--with-detail" : ""}`}>
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
        />

        {selected && (
          <DetailPanel
            creature={selected}
            contemporaries={contemporaries}
            onSelect={selectCreature}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>

      <footer className="colophon">
        <p>
          Drag or scroll to pan · pinch or ⌘/Ctrl + scroll to zoom · tap a period band to
          jump to it · Esc to clear
        </p>
        <Credits />
      </footer>
    </div>
  );
}
