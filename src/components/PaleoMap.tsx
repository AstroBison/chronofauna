import { useEffect, useState } from "react";
import { OCCURRENCES } from "../data/occurrences";
import { formatMya } from "../lib/scale";

/**
 * Reconstructed coastlines are fetched on demand — one ~130KB file per age,
 * shared by every creature that snaps to it. Loading them lazily keeps the
 * 1.8MB of map data out of the initial page load entirely; a reader who never
 * opens an animal never downloads a single byte of it.
 */
const mapCache = new Map<number, Promise<number[][][]>>();

function loadPaleoMap(age: number): Promise<number[][][]> {
  let pending = mapCache.get(age);
  if (!pending) {
    pending = fetch(`${import.meta.env.BASE_URL}paleomaps/${age}.json`).then((response) => {
      if (!response.ok) throw new Error(`paleomap ${age} Ma -> HTTP ${response.status}`);
      return response.json();
    });
    // Don't cache a rejection, or one dropped request poisons the age forever.
    pending.catch(() => mapCache.delete(age));
    mapCache.set(age, pending);
  }
  return pending;
}

/**
 * Equirectangular projection, straight into SVG user units: x is longitude, y
 * is negated latitude because SVG's y axis grows downward while latitude grows
 * north. No scaling maths beyond that — the viewBox does the work.
 */
const ringToPath = (ring: number[][]) =>
  `M${ring.map(([lng, lat]) => `${lng} ${-lat}`).join("L")}Z`;

interface PaleoMapProps {
  creatureId: string;
  creatureName: string;
  /** Group colour, used for the fossil-site markers. */
  color: string;
}

export function PaleoMap({ creatureId, creatureName, color }: PaleoMapProps) {
  const occurrence = OCCURRENCES[creatureId];
  const [coastlines, setCoastlines] = useState<number[][][] | null>(null);
  const [failed, setFailed] = useState(false);

  const mapAge = occurrence?.mapAge;

  useEffect(() => {
    if (mapAge === undefined) return;
    let cancelled = false;
    setCoastlines(null);
    setFailed(false);

    loadPaleoMap(mapAge).then(
      (data) => !cancelled && setCoastlines(data),
      () => !cancelled && setFailed(true),
    );

    return () => {
      cancelled = true;
    };
  }, [mapAge]);

  if (!occurrence) return null;

  // PBDB uses O2–O6 for ocean basins; they are localities, but not countries.
  const countries = occurrence.countries.filter((code) => !/^O\d$/.test(code));

  return (
    <figure className="paleomap" style={{ "--site-color": color } as React.CSSProperties}>
      <div className="paleomap-frame">
        {failed ? (
          <p className="paleomap-status">Map unavailable</p>
        ) : !coastlines ? (
          <p className="paleomap-status">Loading map…</p>
        ) : (
          <svg
            viewBox="-180 -90 360 180"
            className="paleomap-svg"
            role="img"
            aria-label={`Map of the world ${formatMya(
              occurrence.mapAge,
            )}, showing ${occurrence.points.length} fossil sites for ${creatureName}`}
          >
            <g className="paleomap-land">
              {coastlines.map((ring, index) => (
                <path key={index} d={ringToPath(ring)} />
              ))}
            </g>
            <g className="paleomap-sites">
              {occurrence.points.map(([lng, lat]) => (
                <circle key={`${lng},${lat}`} cx={lng} cy={-lat} r="4.2" />
              ))}
            </g>
          </svg>
        )}
      </div>

      <figcaption>
        {/*
          Naming the age is not decoration. The whole point of reconstructing
          the coastlines is that this is not today's world, and a reader who
          misses that learns something false.
        */}
        <span className="paleomap-age">The world {formatMya(occurrence.mapAge)}</span>
        <span className="paleomap-meta">
          {occurrence.points.length} fossil {occurrence.points.length === 1 ? "site" : "sites"}
          {countries.length > 0 && (
            <>
              {" · found today in "}
              <span title={countries.join(", ")}>
                {countries.length} {countries.length === 1 ? "country" : "countries"}
              </span>
            </>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
