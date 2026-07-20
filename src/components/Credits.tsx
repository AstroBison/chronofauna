import { CREATURES } from "../data/creatures";
import { SILHOUETTES } from "../data/silhouettes";

/**
 * Full artwork credits.
 *
 * Most silhouettes are public domain, but the CC-BY and CC-BY-SA ones oblige us
 * to name the artist wherever the work appears. Keeping every credit in one
 * list — rather than only in the detail panel, which a reader might never open
 * — is what makes that obligation reliably met.
 */
export function Credits() {
  const credited = CREATURES.filter((creature) => SILHOUETTES[creature.id]);

  return (
    <details className="credits">
      <summary>About the data &amp; artwork</summary>
      <p className="credits-intro">
        Dates are rounded consensus estimates for teaching, based on the ICS
        chronostratigraphic chart — published fossil ranges often disagree by a few
        million years.
      </p>
      <p className="credits-intro">
        Silhouettes from <a href="https://www.phylopic.org">PhyloPic</a> ({credited.length}{" "}
        in total). Individual artists and licences below; “stand-in” marks a silhouette of
        a close relative where none exists for that genus.
      </p>
      <ul>
        {credited.map((creature) => {
          const art = SILHOUETTES[creature.id];
          return (
            <li key={creature.id}>
              <a href={art.sourceUrl}>{creature.name}</a>
              {" — "}
              {art.attribution}
              {", "}
              <a href={art.licenceUrl}>{art.licenceName}</a>
              {art.standIn && <span className="credits-standin"> (stand-in: {art.taxon})</span>}
            </li>
          );
        })}
      </ul>
    </details>
  );
}
