# Progress & open work

Figures here are measured against the running app, not inferred. The per-issue
sections below are dated by their content; this header is current.

**State: working and green.** `npm run typecheck`, `npm test` (35 tests) and
`npm run build` all pass; no console errors on a clean load in either theme.

## Where things got to

An interactive deep-time chart, Permian → today, **278 species** — 155 shown by
default, the rest behind a "Show all" toggle so the landing chart stays legible.
Each animal is a hairline rule spanning its lifespan, with its name above it.
Species are blocked into **six families** (mammal line, amphibians, other
reptiles, dinosaurs, pterosaurs, sea creatures); colour carries the finer
eleven-group distinction. Clicking an animal highlights everything that
overlapped it, and shows its real fossil sites on a reconstruction of the world
as it was. The two mass extinctions have their own clickable line under the
axis. Silhouettes throughout, from PhyloPic. Light and dark themes, and the
chart pans and pinch-zooms on touch.

See [CLAUDE.md](CLAUDE.md) for architecture and the constraints worth not
breaking — particularly the reversed-time convention, the layout trade-offs that
were measured rather than guessed, and the ICS colour rules.

## Added since: palaeogeography map

Clicking an animal now shows its fossil sites on a reconstruction of the world
as it was — GPlates coastlines plus real Paleobiology Database occurrences, with
every species covered (a test enforces it). See CLAUDE.md for the constraints. Follow-ups not done:

- The map has no zoom or hover detail; a dot cluster is one blob with no way to
  ask what it is.
- Sites are deduplicated to whole degrees, so "31 fossil sites" means 31
  distinct 1° cells, not 31 digs. The raw count is kept in `siteCount` but is
  not surfaced anywhere.
- Country codes are collected but only shown as a count with a tooltip, because
  raw ISO codes read as noise. A code→name table would let the panel say where
  the fossils actually are.

## Open issues, highest value first

### ~~`estimateLabelWidth` is unsound~~ — fixed

Replaced with `measureLabelWidth`: real canvas measurement, cached per string,
font read from a hidden probe so CSS stays authoritative. Worst error against
rendered text went from 28.6% to 0.01%, and underestimated labels from 10 to 0.
Labels shown actually *rose* (30 to 36 at 1280px) because the old estimate was
over-wide for many strings and hid names that fit. Also removed the
`font-weight` change on `.bar--selected`, which would have made a selected label
wider than the space measured for it.

### ~~Selecting a contemporary does not scroll it into view~~ — fixed

`revealInterval` only scrolled horizontally, so picking a contemporary in
another family block selected a bar off-screen and looked like a no-op.
Replaced with `revealCreature`, which finds the bar by `data-creature-id` and
measures it, scrolling minimally on both axes and clearing the sticky axis.
Verified downward, upward and horizontally, including at deep zoom (canvas
8756px, scroll moved 0 to 6019).

### ~~Tick labels repeat at high zoom~~ — fixed

Worse than recorded: at max zoom *every* visible tick read "299 Ma", not three.
`formatMya` now takes an optional `step` and derives its decimals from it, so
precision follows the spacing between neighbours rather than the magnitude of
the age. Callers formatting a single age are unchanged and still trim trailing
zeros. A test sweeps every zoom level from `MIN_PX_PER_MY` to `MAX_PX_PER_MY`
across seven anchor ages and asserts no two adjacent ticks share a label.

### ~~Chart has no accessible name, role or summary~~ — fixed

Worse than first recorded: at any given zoom **12 bars and 12 axis spans had no
accessible name at all**, only a `title`. Which ones were anonymous changed as
the reader zoomed, because the visible label is dropped when a bar is too narrow.

Now every bar and span has an explicit `aria-label` (visible text first, so
WCAG 2.5.3 still passes), the viewport is a labelled `role="region"` described
by a generated visually-hidden summary, family sections are named via
`aria-labelledby`, decorative lane guides are `aria-hidden`, and the extinction
blurbs are readable as text rather than hover-only.

### 1. Remaining accessibility gaps

- **49 tab stops before the first animal**, 28 of them axis period bands
  (re-measured; it was 43 before the species count grew). Consider making the
  axis a single focus group, or adding a skip link.
- No arrow-key movement between bars.
- Focus is not moved into the detail panel when it opens, nor restored on close.

### ~~2. "Fit" leaves 120px of horizontal scroll~~ — fixed

Labels on the youngest bars overhang the right-hand (present-day) edge of the
canvas, widening it so the one button whose job is to fit the chart didn't quite,
and forcing a scroll to read the last names. A bar whose label would cross the
right edge now flips it: the annotation anchors to the bar's right side and runs
left over the chart instead (`bar--flip-label` in CreatureBar / styles.css). The
overhang scroll dropped from ~120px to ~4px, and names like "Humans" and "Woolly
mammoth" are readable at fit-all without scrolling. One residual cosmetic quirk:
a flipped label can overlap a neighbour's right-running label at full zoom-out
(e.g. American mastodon over Hyaenodon); zooming in separates them.

### ~~3. Mobile is weak~~ — fixed

At 375px the filter chips wrapped to five rows and ate ~29% of the viewport
before any data appeared, and there was no touch pinch-zoom — the wheel handler
caught trackpad pinch (ctrl+wheel) but no touch gestures were bound, so on a
phone only the +/− buttons zoomed.

Now the ten chips collapse behind a "Filter" button below 900px and drop down as
a panel that overlays the chart rather than shoving it down (chrome before the
chart fell from 233px to 153px at 375px, 29% → 19%). A `touchstart`/`touchmove`
pinch handler on the viewport zooms with the same cursor-pinning maths the wheel
uses; `touch-action: pan-x pan-y` hands it the two-finger gesture so the browser
doesn't page-zoom instead. Touch targets on the toolbar grow to 38px on phones,
and the search font is 16px there so iOS doesn't zoom on focus. Verified at 375,
768 and 1280px with the chip dropdown, live filtering, a synthetic 2.5× pinch and
the bottom-sheet detail panel.

### ~~4. Mass extinctions need a single clickable line at the top of the chart~~ — done

The events used to render as a dashed rule through the lanes with a caption in
the strip above the first family block, where it competed with the bars, scrolled
out of reach, and offered no click target — the `blurb` surfaced only as a
`title` tooltip.

They now have one horizontal line of their own, the last row inside `.axis` and
therefore sticky with it. Each event is a marker at its age carrying a pictogram
of its cause (`ExtinctionIcon`: an impactor for Chicxulub, an erupting vent for
the Siberian Traps), and each marker is a real button that opens an
`ExtinctionPanel` in the same slot the creature panel uses — so the explanation
is reachable by keyboard and touch, not hover. The panel adds the cause, the
losses and the boundary it separates. Marker labels fall back full name → short
form → icon only as the room between markers shrinks, so the line survives a
375px viewport.

The dashed vertical guide was **kept**, stripped of its caption and marked
`aria-hidden`: it is still the only way to read an event against the bars that
stop at it, but everything interactive now lives on the line above.

Still open: adding the other three of the "Big Five" (end-Ordovician, late
Devonian, end-Triassic) only makes sense once the chart reaches back past 299 Ma,
which it does not — end-Triassic at ~201 Ma is the one genuinely addable today.

### 5. No tests around the viewport hook

`useTimelineViewport` has produced three real bugs (a `pxPerMy` dependency that
reset zoom on every change, absolute positioning ignoring container padding, and
reveal scrolling only one axis). It is still untested — every test covers pure functions or generated
data. It is the riskiest untested code in the project.

### Lower priority

- **88 of 155 species are unlabelled at default zoom** (measured at ~850px; it
  was 41 of 104 before the data grew, so this has got worse as species were
  added). The staggered-label idea — alternating above/below the rule — roughly
  doubles the horizontal budget and was never built.
- No error boundary.
- No URL state — a species or zoom level cannot be linked to or shared.
- Search matches genus and common name only, not group or description.
- No print stylesheet, which an educational site will likely want.
- The Mammal line block is visibly empty across the Mesozoic. This is honest —
  mammals really were sparse then — but it reads as broken to some viewers.

## The one thing that is not a code problem

**The data has been checked once by literature review, never by an expert.**

Two automated guards exist. `npm run check-dates` cross-checks every range
against the Paleobiology Database's occurrence record; 15 ranges are currently
flagged, each recorded with a reason, and two of those deliberately disagree
with PBDB and carry comments in `creatures.ts` saying why. That guard only
checks ranges — it cannot tell you a blurb is true, a length is right, or a
genus is validly named.

A four-pass literature fact-check covered all 278 species on five axes
(taxonomic validity, dates, size, group, and the factual claims in each blurb)
and produced **61 corrections**. What it caught is the useful measure of how
much risk was sitting there unexamined:

- A **systematic** error across all 16 pterosaurs — `lengthM` held wingspan
  while the panel labelled it "Length", so Quetzalcoatlus claimed to be an
  11-metre-long animal.
- Four places the file **contradicted itself**: Jobaria dated 30 My from
  Afrovenator of the same formation, Gastonia 13 My from Utahraptor of the same
  member, and two blurbs asserting sizes their own `lengthM` denied.
- **Refuted claims presented as fact** — Diplodocus' supersonic tail, Deinonychus
  pack-hunting, Elasmosaurus' vertebra record, Pyroraptor's etymology.
- Body sizes off by large factors, including one that was the animal's **leg
  length** transcribed as its body length.

What that does *not* establish is that the remaining data is right. The review
was one pass, and its dinosaur leg explicitly listed ~30 rows it judged from its
own knowledge without external confirmation. Expert review is still the only
thing that covers blurb truth, size accuracy and taxonomic validity — this pass
makes that review cheaper, not unnecessary.

Twenty-eight silhouettes are stand-ins showing a close relative rather than the
named genus (Quetzalcoatlus → *Azhdarcho*, and twenty-seven others). Those are
taxonomically sound and disclosed per-animal in the detail panel.
