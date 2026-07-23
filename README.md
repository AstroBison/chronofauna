# Chronofauna

An interactive timeline of prehistoric life. Every animal is a line drawn to
scale across 300 million years, so you can see at a glance how long each one
existed — and which ones overlapped.

Click any animal to see everything that shared the planet with it. The chart
answers questions like *"did Stegosaurus ever meet T. rex?"* visually, and the
answer is usually more surprising than people expect: more time separates those
two than separates T. rex from us.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Using it

| Action | How |
| --- | --- |
| Pan | Scroll, drag, or swipe |
| Zoom | ⌘/Ctrl + scroll, pinch, or the +/− buttons |
| Jump to a period | Click any band in the time axis |
| See contemporaries | Click any animal bar |
| Filter | Search box, or the group chips |
| Clear selection | `Esc` |
| Light / dark | Sun-moon button in the toolbar |

Dark mode follows your operating system until you press the toggle; after that
your choice is remembered.

Because the scale is linear, the whole Quaternary — mammoths, sabre-toothed
cats, us — is a sliver at the right-hand edge when zoomed out. Click the
Quaternary band in the axis to zoom down to it.

## What's included

124 species from the Permian through today, arranged into five families — mammal
line, other reptiles, dinosaurs, pterosaurs and sea creatures — with colour
marking the finer grouping within each (theropods, sauropodomorphs,
ornithischians, and so on). The geologic time scale uses official ICS chart
colours, so it matches the charts in textbooks and museums. The two mass
extinctions that bracket the age of dinosaurs are marked.

Every animal has a silhouette — in the detail panel, beside each entry in the
"lived alongside" list, and next to the name on the timeline wherever there's
room for one.

## Where each animal lived

Click an animal and the panel shows a map of its fossil sites — drawn on **the
world as it was when the animal was alive**, not on today's. Stegosaurus appears
on a Jurassic Earth where the Atlantic has barely opened and its Colorado and
Portugal sites sit almost side by side; Dimetrodon appears on Pangaea.

Coastlines are real plate reconstructions from the
[GPlates Web Service](https://gws.gplates.org) (MERDITH2021 model). Fossil sites
are real catalogued occurrences from the
[Paleobiology Database](https://paleobiodb.org), plotted at their
palaeo-coordinates. Unlike the dates, nothing on this map is an estimate —
every dot is a specimen someone dug up and recorded.

```bash
npm run paleogeography    # re-fetch maps and fossil sites (~33MB of downloads)
```

The 15 reconstructions total ~1.8MB and are loaded only when you open an animal,
so they cost nothing on first page load.

## Artwork

Silhouettes come from [PhyloPic](https://www.phylopic.org), a library of free,
scientifically vetted silhouettes of organisms. They're fetched by:

```bash
npm run silhouettes
```

which downloads to `public/silhouettes/` and regenerates `src/data/silhouettes.ts`
with each artist's credit and licence. Both are committed, so you only need to
run it after adding species.

All 124 are public domain, CC-BY or CC-BY-SA — **no NonCommercial licences**, so
the site stays free to use in any context. Artists are credited in the detail
panel and in the "Artwork credits" list in the footer; both are required by the
CC-BY terms, so please keep them.

Eighteen genera have no silhouette of their own, so they use one of a close
relative — Quetzalcoatlus borrows *Azhdarcho*, a fellow azhdarchid pterosaur;
Lycaenops and Rubidgea borrow *Dinogorgon*, a fellow gorgonopsian; Moropus
borrows *Chalicotherium*, a fellow chalicothere. The site says so on each
affected animal rather than passing the artwork off as the real thing.

## Adding animals

Append an entry to the `CREATURES` array in `src/data/creatures.ts`. The array is
kept oldest-first (largest `start` at the top), so slot the new one into the
right place rather than appending blindly. Layout, lanes and overlap detection
then pick it up with no other code changes.

```ts
{
  id: "concavenator",
  name: "Concavenator",
  group: "theropod",
  start: 130,   // Mya it appeared
  end: 125,     // Mya it died out (0 = still alive)
  lengthM: 6,
  diet: "carnivore",
  blurb: "A hump-backed Spanish predator…",
}
```

### Every field

| Field | Required | What it must be |
| --- | --- | --- |
| `id` | yes | Unique across the list, and `kebab-case` — it becomes the silhouette filename (`public/silhouettes/<id>.svg`) and the key for map data, so it has to be filename-safe. |
| `name` | yes | The genus (`"Triceratops"`), **or the full binomial** (`"Mammuthus primigenius"`) — see the note below, it decides what the fossil map shows. |
| `commonName` | no | Everyday name if one exists (`"Woolly mammoth"`). Shown in the panel and the "lived alongside" list. |
| `group` | yes | One of the ten: `theropod`, `sauropodomorph`, `ornithischian`, `other-reptile`, `marine-reptile`, `pterosaur`, `synapsid`, `mammal`, `hominin`, `fish`. Sets the colour and which of the five family blocks it lands in. |
| `start` | yes | Mya it first appears. **Larger** than `end` (see below). |
| `end` | yes | Mya it disappears; `0` means still alive. **Smaller** than `start`. |
| `lengthM` | no | Approximate body length in metres, for the size comparison. |
| `diet` | yes | One of: `carnivore`, `herbivore`, `omnivore`, `insectivore`, `filter-feeder`. |
| `blurb` | yes | One or two sentences for a general audience. |

Three rules are easy to get wrong:

- **Time runs backwards.** Every date is millions of years *ago*, so `start`
  (when it appeared) is the **larger** number and `end` (when it died out) is
  the **smaller** one. `Homo sapiens` is `{ start: 0.3, end: 0 }`. Getting these
  reversed produces a zero-width or negative bar.
- **`name` is the fossil-map query.** It is sent verbatim to the Paleobiology
  Database, which matches everything *below* the name given. A bare genus like
  `"Mammuthus"` therefore pulls in every mammoth species, and `"Homo"` pulls in
  two million years of hominins — dots for animals that are not the one on
  screen. Use the full binomial for any genus whose relatives you don't want on
  the map.
- **`group` drives layout, not just colour.** A value outside the ten above
  won't type-check; a genuinely new group needs three more edits (below).

### After you add one

Run both fetch scripts (they need the network) and the date check:

```bash
npm run silhouettes                                       # artwork
node scripts/fetch-paleogeography.mjs --occurrences-only  # fossil sites
npm run check-dates                                       # sanity-check the range
```

- **Silhouette.** If PhyloPic has nothing for the genus, or offers only a
  NonCommercial image, add a fallback chain for the `id` to `QUERY_CHAINS` in
  `scripts/fetch-silhouettes.mjs` pointing at a relative it genuinely belongs to.
  The set is deliberately kept **100% NonCommercial-free**, and the script warns
  loudly if a new species breaks that. Stand-ins are disclosed in the UI, so
  prefer a relative that is not already on the chart.
- **Fossil sites.** The map simply doesn't render for a creature with no
  occurrences, and `occurrences.test.ts` fails until it has some. If PBDB returns
  nothing, the animal is too obscure for the map — that's allowed, but expect the
  test to remind you.
- **Dates.** `check-dates` compares your range against PBDB's recorded first and
  last appearance. Treat a flag as a prompt to check the literature, not a
  verdict — a high occurrence count with a large discrepancy is the signal worth
  acting on; a one-occurrence genus with a wide envelope usually means PBDB is
  the vague one.

### Adding a whole new group

If the animal doesn't fit any of the ten groups, add the new `CreatureGroup` in
`src/types.ts`, then give it an entry in all three of `GROUP_META`,
`GROUP_ORDER` and `FAMILY_OF` in `src/lib/layout.ts` (colour, chip order, and
which family block it belongs to). A new group colour also needs its
`--group-…` custom property in both themes in `src/styles.css`.

## A note on the dates

Fossil ranges are inferred from a patchy record, and published ranges for a
genus often disagree by several million years. The figures here are rounded
consensus estimates suitable for teaching, based on the ICS chronostratigraphic
chart — not citable stratigraphy. Where a genus is known from essentially one
site, its bar is genuinely near-instantaneous at this scale.

## Licence

The code is [MIT](LICENSE).

The artwork is not covered by that licence and keeps its own. Silhouettes in
`public/silhouettes/` come from PhyloPic under a mix of terms — 64 are public
domain (CC0 or Public Domain Mark), 34 are CC-BY and 6 are CC-BY-SA. The artist
and licence for each one are recorded in `src/data/silhouettes.ts` and shown in
the app. If you reuse a silhouette, follow its own terms: CC-BY requires
crediting the artist, and CC-BY-SA additionally requires that derivatives of
that image be shared alike.

## Development

```bash
npm test         # unit tests for packing, overlap and scale maths
npm run build    # typecheck + production build to dist/
```

See [CLAUDE.md](CLAUDE.md) for architecture notes — in particular the
"time runs backwards" convention that governs every interval in the codebase.
