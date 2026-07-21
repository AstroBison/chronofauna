# DinoLine

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
| Jump to a period | Click a period chip, or click a band in the axis |
| See contemporaries | Click any animal bar |
| Filter | Search box, or the group chips |
| Clear selection | `Esc` |
| Light / dark | Sun-moon button in the toolbar |

Dark mode follows your operating system until you press the toggle; after that
your choice is remembered.

Because the scale is linear, the whole Quaternary — mammoths, sabre-toothed
cats, us — is a sliver at the right-hand edge when zoomed out. Use "Jump to →
Quaternary" to get down there.

## What's included

48 species from the Permian through today, arranged into five families — mammal
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

All 48 are public domain, CC-BY or CC-BY-SA — **no NonCommercial licences**, so
the site stays free to use in any context. Artists are credited in the detail
panel and in the "Artwork credits" list in the footer; both are required by the
CC-BY terms, so please keep them.

Six genera (Eudimorphodon, Argentinosaurus, Quetzalcoatlus, Mosasaurus,
*Otodus megalodon* and Megatherium) have no silhouette of their own, so they use
one of a close relative — Quetzalcoatlus borrows *Azhdarcho*, a fellow azhdarchid
pterosaur. The site says so on each affected animal rather than passing the
artwork off as the real thing.

## Adding animals

Append an entry to `CREATURES` in `src/data/creatures.ts`:

```ts
{
  id: "utahraptor",
  name: "Utahraptor",
  group: "theropod",
  start: 139,   // Mya it appeared
  end: 135,     // Mya it died out (0 = still alive)
  lengthM: 5.5,
  diet: "carnivore",
  blurb: "A bear-sized dromaeosaur…",
}
```

Layout, lanes and overlap detection pick it up automatically.

## A note on the dates

Fossil ranges are inferred from a patchy record, and published ranges for a
genus often disagree by several million years. The figures here are rounded
consensus estimates suitable for teaching, based on the ICS chronostratigraphic
chart — not citable stratigraphy. Where a genus is known from essentially one
site, its bar is genuinely near-instantaneous at this scale.

## Development

```bash
npm test         # unit tests for packing, overlap and scale maths
npm run build    # typecheck + production build to dist/
```

See [CLAUDE.md](CLAUDE.md) for architecture notes — in particular the
"time runs backwards" convention that governs every interval in the codebase.
