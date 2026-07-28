import { GROUP_META, GROUP_ORDER } from "../lib/layout";
import type { Theme } from "../hooks/useTheme";
import type { CreatureGroup } from "../types";

/** Sun and moon glyphs, inline so they inherit colour and need no icon font. */
function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <path
        d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <circle cx="8" cy="8" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2 3.1 3.1" />
      </g>
    </svg>
  );
}

interface ToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onZoom: (factor: number) => void;
  onFitAll: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

/**
 * Search and zoom, kept to a single compact row.
 *
 * There is deliberately no "jump to period" control here: the period bands in
 * the axis are already clickable and are the obvious place to reach for. A
 * second, redundant set of seven coloured chips cost more attention than the
 * shortcut was worth.
 */
export function Toolbar({
  query,
  onQueryChange,
  onZoom,
  onFitAll,
  theme,
  onToggleTheme,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      <label className="search">
        <span className="visually-hidden">Search creatures</span>
        <input
          type="search"
          placeholder="Search animals…"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>

      <div className="zoom" role="group" aria-label="Zoom">
        <button onClick={() => onZoom(1 / 1.6)} aria-label="Zoom out" title="Zoom out">
          −
        </button>
        <button onClick={() => onZoom(1.6)} aria-label="Zoom in" title="Zoom in">
          +
        </button>
        <button className="zoom-fit" onClick={onFitAll} title="Fit the whole timeline">
          Fit
        </button>
      </div>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <ThemeIcon theme={theme} />
      </button>
    </div>
  );
}

/** Funnel glyph for the mobile filter toggle; inline so it inherits colour. */
function FilterIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
      <path
        d="M2 3h12l-4.6 5.4V13L6.6 11.4V8.4L2 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface GroupFilterBarProps {
  activeGroups: Set<CreatureGroup>;
  onToggleGroup: (group: CreatureGroup) => void;
  resultCount: number;
  totalCount: number;
  /** Whether the chip panel is expanded. Only meaningful on narrow screens; on
   *  wide ones the chips are always shown and the toggle is hidden. */
  open: boolean;
  onToggleOpen: () => void;
}

/**
 * Group filters, which double as the chart's colour legend.
 *
 * Chips stay neutral — a colour dot beside plain text — until the reader
 * actually filters. Filling all ten with solid colour by default produced a
 * rainbow band that competed with the chart for attention and, worse, implied
 * ten active selections when nothing was selected at all.
 *
 * On a phone the ten chips would wrap to five rows and eat a third of the
 * screen, so there they collapse behind a single "Filter" button and drop down
 * as a panel over the chart. Wide screens ignore all of that and show the row
 * inline (`.filter-toggle` is hidden by CSS, the panel is static).
 */
export function GroupFilterBar({
  activeGroups,
  onToggleGroup,
  resultCount,
  totalCount,
  open,
  onToggleOpen,
}: GroupFilterBarProps) {
  const filtering = activeGroups.size > 0;

  return (
    <div className={`filterbar ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="filter-toggle"
        onClick={onToggleOpen}
        aria-expanded={open}
        aria-controls="group-filters"
      >
        <FilterIcon />
        Filter
        {filtering && <span className="filter-toggle-count">{activeGroups.size}</span>}
      </button>

      <div className="group-filters" id="group-filters">
        {GROUP_ORDER.map((group) => {
          const active = filtering && activeGroups.has(group);
          return (
            <button
              key={group}
              className={`chip ${active ? "is-active" : ""} ${
                filtering && !active ? "is-dimmed" : ""
              }`}
              style={{ "--chip-color": GROUP_META[group].color } as React.CSSProperties}
              onClick={() => onToggleGroup(group)}
              aria-pressed={active}
            >
              <span className="chip-dot" />
              {GROUP_META[group].label}
            </button>
          );
        })}
      </div>

      <span className="result-count">
        {resultCount === totalCount
          ? `${totalCount} species`
          : `${resultCount} of ${totalCount}`}
      </span>

      {/* Tap-anywhere-else to dismiss the dropdown; only present while open, and
          only visible on narrow screens where the panel actually overlays. */}
      {open && (
        <button
          type="button"
          className="filter-backdrop"
          aria-label="Close filters"
          onClick={onToggleOpen}
        />
      )}
    </div>
  );
}
