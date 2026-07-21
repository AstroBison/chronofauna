# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev         # Vite dev server on :5173
npm run build       # tsc -b then vite build
npm run typecheck   # tsc --noEmit
npm test            # vitest run (one shot)
npm run test:watch  # vitest watch
npm run silhouettes    # re-fetch artwork from PhyloPic (network; only when data changes)
npm run paleogeography # re-fetch maps + fossil sites (network; ~33MB of downloads)

node scripts/fetch-paleogeography.mjs --occurrences-only  # skip the coastlines

npx vitest run -t "reuses a freed lane"   # single test by name
npx vitest run src/lib/layout.test.ts     # single file
```

## The one convention that matters: time runs backwards

Every time value in the codebase is **Mya (millions of years ago)**, and every
interval is stored as `{ start, end }` where **`start > end`** — `start` is when
something appeared (further in the past, larger number), `end` is when it
disappeared. The present day is `0`. `Homo sapiens` is `{ start: 0.3, end: 0 }`.

This inversion is the source of essentially every bug in this codebase. Two rules
keep it contained:

1. **Never flip the sign ad hoc.** The conversion from age to screen position
   lives only in `myaToX` / `xToMya` / `intervalToRect` in `src/lib/scale.ts`.
   Everything else works in Mya and calls those.
2. **"Left" means older, "right" means newer.** So the *previous* bar in a lane
   is the one with the larger `end`, and the gap between two bars is
   `previous.end - next.start`.

## Architecture

Data → layout → render, with no state flowing backwards:

- **`src/data/`** — pure data, no logic. `geoSpans.ts` holds the geologic time
  scale (eras/periods/epochs) with official **ICS chart colours**, so the chart
  matches textbook and museum charts; don't swap these for arbitrary palette
  colours. `creatures.ts` is the species list, sorted oldest-first.
- **`src/lib/scale.ts`** — the Mya ↔ pixel boundary, plus tick generation and
  the `formatMya` / `formatDuration` helpers that scale units (Ma → ka → years).
- **`src/lib/layout.ts`** — `packLanes` (greedy interval packing) and
  `packByFamily` (one independently-packed block of rows per family).
- **`src/hooks/useTimelineViewport.ts`** — all pan/zoom state.
- **`src/components/`** — presentational; they receive `pxPerMy` and derived
  state and position things absolutely.

### Zoom is linear, and deliberately so

One million years is the same number of pixels everywhere on the chart. That is
what makes the Quaternary a sliver and the Stegosaurus→T. rex gap look as vast as
it is — it's the pedagogical point of the whole site. **Do not add a log or
piecewise axis to "make the recent stuff fit."** Zooming is the answer; the
`focusInterval` helper and the clickable axis bands exist for that.

### Two invariants in the viewport hook

Both of these have already caused visible bugs, so they have comments in place:

- The mount-time `fitAll()` effect must **not** depend on `pxPerMy`. If it does,
  every zoom re-runs it and snaps the view straight back to "fit all".
- Zoom must keep the age under the cursor pinned. The corrected `scrollLeft` is
  computed while the *old* zoom is still known, stashed in a ref, and applied in
  a `useLayoutEffect` after React resizes the canvas. Setting it any earlier
  clamps against a stale scroll width.

### `revealCreature` measures the DOM on purpose

It finds the bar by `data-creature-id` and reads its rect rather than computing
where it should be. Horizontal position is derivable from the age, but vertical
position falls out of CSS flow — family headers, gaps, row heights — and
re-deriving it here would duplicate the layout and drift when the layout
changes. An earlier version only scrolled horizontally, so picking a
contemporary from the detail panel selected a bar in another family block
off-screen and looked like a no-op.

Scrolling clears `AXIS_HEIGHT` at the top, because the axis is sticky and would
otherwise cover a bar scrolled flush to the top of the viewport.

### Blocked by family; rows within a block are collision avoidance

Species are grouped into **five coarse families** (`FAMILY_OF` in `layout.ts`),
each packed independently: Mammal line, Other reptiles, Dinosaurs, Pterosaurs,
Sea creatures — land, then air, then sea. Within a block a species sits one row
down only because something already occupies that stretch of time, so a vertical
slice through one family still reads as "these lived at the same time".

**Five is a deliberate point on a measured trade-off, not an arbitrary
grouping.** Clustering by type and staying compact are genuinely opposed:
animals alive simultaneously cannot share a row, so any grouping pushes
contemporaries apart vertically. Measured on the current data:

| Layout | Rows | Notes |
| --- | --- | --- |
| One shared block | 12 | Most compact; rows mix many groups, looks like confetti |
| **Five families** | **20** | Current choice |
| All ten groups | 32 | Effectively the old banded layout |

Affinity packing — first-fit that prefers a row already holding the same group —
was tried and is not worth it: mixing only improved from 8,5,5,4,2,1 to
6,5,4,5,3,1 groups per row, because the timeline is the constraint, not the
algorithm. Don't re-attempt it expecting a better result.

Colour still carries the finer ten-group distinction inside each block, and the
filter chips remain per-group and double as the legend.

An incidental win: family blocks have sparser rows than one shared block, so
more labels fit — measurably more at zoom-out than one shared block managed.

### Lane packing must not depend on pixels

`packLanes` assigns rows using **time overlap only** — never zoom level or label
width. If rows depended on pixels, they would reshuffle while the reader zooms,
which is exactly when they are trying to follow one bar. Labels that no longer
fit are dropped at render time instead (see `gapAfterMy` below).

### Bars are hairlines, and the mark is not the hit target

Each species renders as a ~4px rule with I-beam end caps, not a filled block.
The `<button>` keeps `BAR_HEIGHT` (22px) of transparent height purely as a
pointer target — **never shrink the button to match the rule**, since a 4px
click target is unusable and fails pointer-size accessibility guidelines.
Thickness is driven by the `--rule-thickness` custom property, which hover,
`--contemporary` and `--selected` override; selection thickens the line rather
than boxing it, which keeps the line idiom intact.

### Label placement

Labels sit **above** the rule, not inside it. That is what makes the thin style
work: a name is no longer bounded by the width of its own bar, so it may
overhang into the empty time that follows. The budget is
`ruleWidth + gapAfterMy * pxPerMy` — its own span plus the gap before the next
bar *in the same lane*, computed during packing. This labels ~63 of 104 species
at full zoom-out, where the old inside-the-bar scheme could only label the
long-lived ones.

Labels that still don't fit are dropped entirely rather than clipped; the
tooltip and detail panel carry the name.

Widths come from `measureLabelWidth` in `src/lib/text.ts`, which measures real
text with a canvas and caches per string. **Don't replace it with arithmetic on
`text.length`** — that is what it used to be, and it was wrong by up to 28.6%
in both directions, so labels only avoided colliding by luck. Measuring costs
one call per distinct name for the life of the page.

The font is read from a hidden probe element carrying the real class, so the CSS
stays the single source of truth and typography changes need no follow-up here.
Two variants exist because bar labels render at weight 500 and axis labels at
600 — the same string is genuinely two widths, and one shared constant cannot
serve both.

Related: `.bar--selected` must not change `font-weight`. Labels are measured at
their normal weight, so bolding on selection would make one label wider than the
room reserved for it. Selection is shown with rule thickness and ink instead.

### CSS gotcha: `overflow: clip`, not `hidden`

Axis spans and bars use sticky labels so a period's name stays visible while you
are scrolled into the middle of it. `overflow: hidden` would make each span its
own scroll container and silently break that. Use `overflow: clip`.

## Theming

Light and dark are two sets of CSS custom properties on `:root[data-theme=…]`,
switched by `useTheme`. Rules to keep:

- **Never hardcode a colour in a component or in `styles.css` below the token
  block.** `GROUP_META.color` deliberately holds `var(--group-…)` strings rather
  than hex, so a theme change repaints without re-rendering any React.
- **Dark group colours are not the light ones dimmed.** They are lifted and
  slightly desaturated — a hue with enough contrast against white is usually too
  dark against a dark surface. Each pair is chosen for its own background.
- **The theme follows the OS until the reader picks one**, then their choice
  wins and persists. `localStorage` access is wrapped in try/catch because
  private browsing and some webviews throw on it.
- **The inline script in `index.html` sets `data-theme` before first paint.**
  Without it, dark-mode readers get a white flash on every load. It mirrors the
  resolution order in `useTheme`; change both together.

### ICS colours are never theme-adjusted

The period colours stay exactly as published in both themes — readers meet the
same chart in textbooks and museums, so falsifying them to suit a dark
background is not on the table. Glare is controlled by keeping the axis slim
instead. A `filter: brightness()` on the axis is doubly wrong: it also dims the
label text and undoes the contrast handling below.

Because that palette runs from near-black Triassic purple to pale Quaternary
yellow, **no single ink colour is legible across it** — a fixed dark ink left
"Triassic" at 2.69:1, well under WCAG AA. `readableInk` in `src/lib/color.ts`
picks per span by measured contrast; the worst case is now 4.87:1. A test
asserts every span in the time scale clears 4.5:1, so adding a span with an
awkward colour fails the suite rather than shipping unreadable.

## Chrome budget

The header and filter row together occupy ~119px; the chart gets everything
else. An earlier version spent ~290px before the data began, which is what made
the page feel amateurish. Guard this when adding UI:

- **No period-jump chips.** The axis period bands are already clickable and are
  the obvious affordance. Seven redundant coloured chips cost more attention
  than the shortcut was worth.
- **Filter chips stay neutral until used.** They double as the colour legend, so
  they show a colour dot beside plain text; only an active filter fills them in.
  Painting all ten solid produced a rainbow band that fought the chart and
  implied ten live selections when nothing was selected.
- **Group colours are held to a common lightness and saturation** (`GROUP_META`).
  Ten independently-chosen hues sitting on shared rows turn garish fast.
- **Secondary information goes in the `Credits` disclosure**, not the footer.
  The dates caveat lives there — keep it, it is a scientific requirement, not
  decoration.

### Absolute positioning ignores the container's padding

Rows, guides and bars inside `.lanes` are absolutely positioned, so they resolve
against the *padding box*: `padding-top` on `.lanes` does not move them and will
not create a gap. The clear strip for the extinction captions is
`LANES_TOP_INSET`, added to each row's computed `top`. This bit me once already.

## Accessibility of the chart

**Every bar and axis span carries an explicit `aria-label`.** Do not remove them
in favour of the visible text: that text is conditional — a bar or span with no
room drops its label, and which ones those are changes with zoom. Relying on
rendered text left a dozen buttons named only by `title`, which is an unreliable
naming source and is largely ignored by mobile screen readers.

The visible label leads the accessible name so speech control still works
(WCAG 2.5.3, Label in Name). `title` stays only as a mouse tooltip.

The scroll viewport is a labelled `role="region"` described by
`#chart-summary`, a visually-hidden paragraph that states the species count, the
families and what a bar is. It is generated from the data, so it cannot go stale
as species are added. Family `<section>`s are named via `aria-labelledby`, and
purely decorative elements (lane guides) are `aria-hidden`.

Still open: the axis contributes 28 tab stops before the chart, there is no
arrow-key movement between bars, and focus is not moved into the detail panel.
See `PROGRESS.md`.

## Filtering vs. selection

Two independent visual states, both applied in `stateFor` in `TimelineChart`:

- **Filtering** (search box, group chips) → `matchedIds`, a `Set` or `null`.
  `null` means no filter. Non-matching bars get `bar--excluded`.
- **Selection** (clicking a bar) → the selected bar plus its `contemporaries`
  (anything whose lifespan overlaps) stay lit; everything else gets `bar--faded`.

Rows are always packed from the **full** creature list so they stay put as
filters change — filtering only repaints.

## Artwork

Silhouettes come from [PhyloPic](https://phylopic.org), fetched by
`scripts/fetch-silhouettes.mjs` into `public/silhouettes/<creature-id>.svg`, with
attribution metadata generated into `src/data/silhouettes.ts`. **That metadata
file is generated — don't hand-edit it**, and it's committed so a plain
`npm install && npm run dev` never touches the network.

Three constraints the script enforces, all of which matter:

- **Licence preference is public domain → CC-BY → CC-BY-SA, and NonCommercial
  only as a last resort.** An NC image would block the site from ever being used
  commercially. The current set is 100% NC-free; the script prints a warning if a
  future species forces one in.
- **Attribution is load-bearing.** CC-BY and CC-BY-SA legally require naming the
  artist. Credits appear in two places — the detail panel and the `Credits`
  component in the footer — because a reader may never open the panel. Don't
  remove either.
- **Stand-ins are disclosed.** Seventeen genera have no silhouette of their own and
  fall back to a taxonomically correct relative (Quetzalcoatlus → *Azhdarcho*).
  Those carry `standIn: true` and the UI says so in plain language. Never let a
  stand-in render as though it depicts the named genus.

  When choosing a fallback in `QUERY_CHAINS`, prefer a genus that is **not
  already on the chart**. Lycaenops and Rubidgea first resolved to
  *Inostrancevia* via the clade `gorgonopsia` — but Inostrancevia has its own
  entry, so three species would have shared one outline and two of them would
  have been showing a portrait of their neighbour. *Dinogorgon* is an equally
  valid gorgonopsian that appears nowhere else.

Rendering uses **CSS `mask-image`, not `<img>`** (see `Silhouette.tsx`), so one
flat black source file can be painted any colour: white on a coloured bar, the
group colour in the panel.

## The palaeogeography map

Clicking an animal shows where it lived — **on a reconstruction of the world as
it was**, not on today's map. This is the same principle as the linear time
axis: a Jurassic animal plotted on modern continents is plotted on a world that
did not exist yet, and the reader learns something false. Stegosaurus sites in
Colorado and Portugal look far apart today and were nearly adjacent at 145 Ma.
**Don't swap this for a modern basemap.**

Two sources, both fetched by `scripts/fetch-paleogeography.mjs`:

- **GPlates Web Service** for reconstructed coastlines, model `MERDITH2021`
  (chosen because it reaches past the Permian, which Dimetrodon at ~295 Ma
  needs). One file per age in `public/paleomaps/`.
- **Paleobiology Database** for fossil occurrences. It returns **palaeo**-
  coordinates (`pln`/`pla`) alongside modern ones, having already applied the
  same plate rotations — so sites land correctly on the reconstruction without
  us rotating anything. Generated into `src/data/occurrences.ts`.

Unlike the dates in `creatures.ts`, **every dot on this map is a catalogued
fossil**, not an estimate.

Four things that will bite:

- **Query PBDB with the full binomial where a creature has one.** `base_name`
  is inclusive of everything below it, so `Mammuthus` returns every mammoth
  including African species, and `Homo` returns two million years of hominins.
  Both put dots on the map for animals that are not the one on screen.
- **The land stroke must match the land fill.** GPlates ships each tectonic
  block as a separate polygon; a contrasting outline draws every internal plate
  boundary and the continents come out veined like river maps. Same-colour
  stroke closes the seams between abutting blocks and draws nothing else.
- **Coordinates are rounded to whole degrees.** The map is ~300px for 360° of
  longitude, so that is already sub-pixel, and it is what takes a 2.2MB
  reconstruction down to ~130KB. Don't "improve" the precision.
- **Polygons crossing the antimeridian are dropped** rather than split; each age
  loses about one, and the alternative is a streak across the whole map.

Maps are lazy-loaded per age and cached in a module-level `Map`, so the 1.8MB
never touches initial page load. Ages come from a fixed list in the script and
each creature snaps to the nearest; a test asserts the snap is within 20 My and
that the file it points at actually exists.

## Adding species

Append to `CREATURES` in `src/data/creatures.ts`; the packer picks it up with no
other changes. A new `CreatureGroup` also needs an entry in `GROUP_META`,
`GROUP_ORDER` and `FAMILY_OF` in `src/lib/layout.ts`.

Then run both fetch scripts:

- `npm run silhouettes` for artwork. If PhyloPic has nothing for the genus, add
  a fallback chain to `QUERY_CHAINS` pointing at a group it genuinely belongs
  to. The UI degrades cleanly if no silhouette exists.
- `node scripts/fetch-paleogeography.mjs --occurrences-only` for fossil sites.
  The map simply does not render for a creature with no occurrences, and
  `occurrences.test.ts` will fail until it has some.

Dates are rounded consensus estimates for teaching, not citable stratigraphy, and
the site says so in its footer. Keep that caveat if you touch the footer. Genera
known from a single horizon legitimately produce near-zero-width bars — that is a
real feature of the fossil record, not a data-entry error, and `CreatureBar`
floors the rendered width to 4px so they stay clickable.
