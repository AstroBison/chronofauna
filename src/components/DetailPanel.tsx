import { PERIODS } from "../data/geoSpans";
import { SILHOUETTES } from "../data/silhouettes";
import { GROUP_META } from "../lib/layout";
import { durationMy, formatDuration, formatMya, overlaps } from "../lib/scale";
import { Silhouette } from "./Silhouette";
import { PaleoMap } from "./PaleoMap";
import type { Creature } from "../types";

interface DetailPanelProps {
  creature: Creature;
  contemporaries: Creature[];
  onSelect: (id: string) => void;
  onClose: () => void;
}

/** Names of the periods a creature's lifespan touches. */
function periodsSpanned(creature: Creature): string {
  return (
    PERIODS.filter((period) => overlaps(period, creature))
      .map((period) => period.name)
      .join(" → ") || "—"
  );
}

export function DetailPanel({
  creature,
  contemporaries,
  onSelect,
  onClose,
}: DetailPanelProps) {
  const meta = GROUP_META[creature.group];
  const art = SILHOUETTES[creature.id];

  return (
    <aside className="detail" aria-label={`Details for ${creature.name}`}>
      <header className="detail-header" style={{ borderColor: meta.color }}>
        <div>
          <h2>{creature.name}</h2>
          {creature.commonName && <p className="detail-common">{creature.commonName}</p>}
        </div>
        <button className="detail-close" onClick={onClose} aria-label="Close details">
          ×
        </button>
      </header>

      {/* Tinted with the group colour so the art ties back to the chart. */}
      {art && (
        <figure
          className="detail-figure"
          style={{ "--silhouette-color": meta.color } as React.CSSProperties}
        >
          <Silhouette
            creatureId={creature.id}
            className="silhouette--hero"
            label={`Silhouette of ${art.standIn ? art.taxon : creature.name}`}
          />
          <figcaption>
            {/*
              Saying so plainly is the whole point: an educational site must not
              imply we have a picture of an animal nobody has drawn.
            */}
            {art.standIn && (
              <span className="detail-standin">
                Silhouette shows <em>{art.taxon}</em>, a close relative.
              </span>
            )}
            <span className="detail-artist">
              {art.attribution} · <a href={art.licenceUrl}>{art.licenceName}</a> ·{" "}
              <a href={art.sourceUrl}>PhyloPic</a>
            </span>
          </figcaption>
        </figure>
      )}

      <dl className="detail-facts">
        <div>
          <dt>Lived</dt>
          <dd>
            {formatMya(creature.start)} – {formatMya(creature.end)}
          </dd>
        </div>
        <div>
          <dt>Existed for</dt>
          <dd>{formatDuration(durationMy(creature))}</dd>
        </div>
        <div>
          <dt>Group</dt>
          <dd>
            <span className="band-swatch" style={{ background: meta.color }} />
            {meta.label}
          </dd>
        </div>
        <div>
          <dt>Diet</dt>
          <dd className="capitalize">{creature.diet}</dd>
        </div>
        {creature.lengthM !== undefined && (
          <div>
            <dt>Length</dt>
            <dd>{creature.lengthM} m</dd>
          </div>
        )}
        <div>
          <dt>Periods</dt>
          <dd>{periodsSpanned(creature)}</dd>
        </div>
      </dl>

      <p className="detail-blurb">{creature.blurb}</p>

      <PaleoMap
        creatureId={creature.id}
        creatureName={creature.name}
        color={meta.color}
      />

      <section className="detail-contemporaries">
        <h3>
          Lived alongside <span className="count">{contemporaries.length}</span>
        </h3>
        {contemporaries.length === 0 ? (
          <p className="detail-empty">
            Nothing else on this timeline overlaps with {creature.name}. Add more species
            to <code>src/data/creatures.ts</code> to fill in the gaps.
          </p>
        ) : (
          <ul>
            {contemporaries.map((other) => (
              <li key={other.id}>
                <button
                  onClick={() => onSelect(other.id)}
                  style={
                    { "--silhouette-color": GROUP_META[other.group].color } as React.CSSProperties
                  }
                >
                  <Silhouette creatureId={other.id} className="silhouette--list" />
                  <span className="contemporary-name">{other.name}</span>
                  <span className="contemporary-range">
                    {formatMya(other.start)} – {formatMya(other.end)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </aside>
  );
}
