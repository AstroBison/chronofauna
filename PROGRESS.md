# Progress & open work

Snapshot at the end of the first build session. Everything below was verified in
a browser against the running app, not inferred — figures are measured.

**State: working and green.** `npm run typecheck`, `npm test` (20 tests) and
`npm run build` all pass; no console errors on a clean load in either theme.

## Where things got to

An interactive deep-time chart, Permian → today, 48 species. Each animal is a
hairline rule spanning its lifespan, with its name above it. Species are blocked
into five families (mammal line, other reptiles, dinosaurs, pterosaurs, sea
creatures); colour carries the finer ten-group distinction. Clicking an animal
highlights everything that overlapped it. Silhouettes throughout, from PhyloPic.
Light and dark themes.

See [CLAUDE.md](CLAUDE.md) for architecture and the constraints worth not
breaking — particularly the reversed-time convention, the layout trade-offs that
were measured rather than guessed, and the ICS colour rules.

## Added since: palaeogeography map

Clicking an animal now shows its fossil sites on a reconstruction of the world
as it was — GPlates coastlines plus real Paleobiology Database occurrences, all
48 species covered. See CLAUDE.md for the constraints. Follow-ups not done:

- The map has no zoom or hover detail; a dot cluster is one blob with no way to
  ask what it is.
- Sites are deduplicated to whole degrees, so "31 fossil sites" means 31
  distinct 1° cells, not 31 digs. The raw count is kept in `siteCount` but is
  not surfaced anywhere.
- Country codes are collected but only shown as a count with a tooltip, because
  raw ISO codes read as noise. A code→name table would let the panel say where
  the fossils actually are.

## Open issues, highest value first

### 1. `estimateLabelWidth` is unsound — fix first

`src/lib/text.ts` claims to overestimate label widths "so we err toward hiding
rather than colliding". It does not. Measured against rendered text, **10 of 27
labels are wider than estimated** — "Humans" by 15.8%, "Repenomamus" by 9.7px.

Collision-freedom currently holds only because `LABEL_SAFETY_GAP` (8px) absorbs
the error, and one label already exceeds it. A different font, font size, or a
browser minimum-font-size setting will produce overlapping labels.

Fix: measure once with a canvas 2D context `measureText`, cache per string.
Then correct the comment, which is actively misleading.

### 2. Selecting a contemporary does not scroll it into view

Select Mosasaurus, then click "Pteranodon" in the *Lived alongside* list: it is
selected but stays off-screen (bar at y≈678, viewport ends at y≈582), so the
click looks like it did nothing. `revealInterval` in `useTimelineViewport` only
scrolls horizontally. A regression from family blocks — when the chart was six
rows it always fitted vertically, so this never surfaced.

### 3. Tick labels repeat at high zoom

Zoomed fully into the Permian, three consecutive ticks all read "299 Ma".
`formatMya` chooses precision from the age's magnitude, not from the tick step,
so sub-million-year steps at old ages collapse to the same string. Derive the
decimal places from the step passed to `ticksInRange`.

### 4. Accessibility gaps

- **43 tab stops before the chart**, 28 of them axis period bands. Consider
  making the axis a single focus group, or adding a skip link.
- The chart exposes **no accessible name, role or summary** — a screen reader
  meets 48 buttons with no context for what they belong to.
- No arrow-key movement between bars.
- Focus is not moved into the detail panel when it opens, nor restored on close.

### 5. "Fit" leaves 120px of horizontal scroll

Labels overhang the right-hand edge of the timeline and widen the canvas, so the
one button whose job is to fit the chart does not quite. Either measure the
overhang into the fit calculation or clamp the last label.

### 6. Mobile is weak

At 375px the filter chips wrap to five rows and consume ~250px — roughly 30% of
the viewport before any data appears. Worse, **there is no touch pinch-zoom**:
the wheel handler catches trackpad pinch (ctrl+wheel) but no touch gestures are
bound, so on a phone only the +/− buttons zoom. Consider a collapsible filter
row and a `touchstart`/`touchmove` pinch handler.

### 7. No tests around the viewport hook

`useTimelineViewport` has produced two real bugs (a `pxPerMy` dependency that
reset zoom on every change, and absolute positioning ignoring container
padding). It is still untested — all 20 tests cover pure functions. It is the
riskiest untested code in the project.

### Lower priority

- 18 of 48 species are unlabelled at default zoom. The staggered-label idea
  (alternating above/below the rule) roughly doubles the horizontal budget and
  was never built.
- No error boundary.
- No URL state — a species or zoom level cannot be linked to or shared.
- Search matches genus and common name only, not group or description.
- No print stylesheet, which an educational site will likely want.
- The Mammal line block is visibly empty across the Mesozoic. This is honest —
  mammals really were sparse then — but it reads as broken to some viewers.

## The one thing that is not a code problem

**The dates have never been checked by anyone who knows the subject.** They are
rounded consensus estimates drawn from the assistant's own knowledge, and while
the site discloses this in its "About the data & artwork" panel, that disclosure
is not a substitute for review. For anything going in front of students this is
the highest risk item in the project, and no amount of UI work reduces it.

Six silhouettes are stand-ins showing a close relative rather than the named
genus (Quetzalcoatlus → *Azhdarcho*, and five others). Those are taxonomically
sound and disclosed per-animal in the detail panel.
