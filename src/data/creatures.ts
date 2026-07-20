import type { Creature } from "../types";

/**
 * A curated set spanning the Permian through the present.
 *
 * IMPORTANT — on the dates: fossil ranges are *inferred* from a patchy record,
 * and published ranges for a genus often disagree by several million years.
 * The figures here are rounded consensus estimates suitable for teaching, not
 * citable stratigraphy. Where a genus is known from essentially one horizon
 * (Apatosaurus, Elasmosaurus) the bar is genuinely near-instantaneous at this
 * scale; that is a real feature of the record, not a data-entry slip.
 *
 * Sorted oldest-first, which is also the order the packer prefers.
 */
export const CREATURES: Creature[] = [
  // ── Paleozoic: before the dinosaurs ────────────────────────────────────
  {
    id: "dimetrodon",
    name: "Dimetrodon",
    group: "synapsid",
    start: 295,
    end: 272,
    lengthM: 3.5,
    diet: "carnivore",
    blurb:
      "Not a dinosaur, and closer to you than to any dinosaur. Dimetrodon was an early synapsid — the branch that leads to mammals — and it died out some 40 million years before the first dinosaur appeared.",
  },
  {
    id: "lystrosaurus",
    name: "Lystrosaurus",
    group: "synapsid",
    start: 255,
    end: 250,
    lengthM: 1,
    diet: "herbivore",
    blurb:
      "A stubby, tusked burrower that walked through the Great Dying almost untouched. For a while afterwards it was so abundant it made up most of the large land animals on Earth.",
  },

  // ── Triassic: the dinosaurs arrive ────────────────────────────────────
  {
    id: "cynognathus",
    name: "Cynognathus",
    group: "synapsid",
    start: 247,
    end: 237,
    lengthM: 1.2,
    diet: "carnivore",
    blurb:
      "A dog-jawed cynodont with differentiated teeth and probably fur — one of the closest things to a mammal that wasn't one yet.",
  },
  {
    id: "nothosaurus",
    name: "Nothosaurus",
    group: "marine-reptile",
    start: 240,
    end: 210,
    lengthM: 4,
    diet: "carnivore",
    blurb:
      "A seal-like coastal hunter with interlocking needle teeth, part of the first great reptilian return to the sea.",
  },
  {
    id: "eoraptor",
    name: "Eoraptor",
    group: "theropod",
    start: 231,
    end: 228,
    lengthM: 1.7,
    diet: "omnivore",
    blurb:
      "One of the earliest known dinosaurs — small, light and unremarkable. Everything on this chart labelled 'dinosaur' descends from animals much like it.",
  },
  {
    id: "herrerasaurus",
    name: "Herrerasaurus",
    group: "theropod",
    start: 231,
    end: 229,
    lengthM: 4,
    diet: "carnivore",
    blurb:
      "An early predatory dinosaur from Argentina, living alongside Eoraptor while dinosaurs were still a minor part of the fauna.",
  },
  {
    id: "postosuchus",
    name: "Postosuchus",
    group: "other-reptile",
    start: 228,
    end: 202,
    lengthM: 5,
    diet: "carnivore",
    blurb:
      "A crocodile-line predator that outranked the dinosaurs of its day. For most of the Triassic it was animals like this, not dinosaurs, at the top of the food chain.",
  },
  {
    id: "shonisaurus",
    name: "Shonisaurus",
    group: "marine-reptile",
    start: 227,
    end: 205,
    lengthM: 15,
    diet: "carnivore",
    blurb:
      "A school-bus-sized ichthyosaur. Marine reptiles reached whale proportions remarkably early — long before whales existed.",
  },
  {
    id: "coelophysis",
    name: "Coelophysis",
    group: "theropod",
    start: 216,
    end: 196,
    lengthM: 3,
    diet: "carnivore",
    blurb:
      "Known from hundreds of individuals found together at Ghost Ranch, New Mexico — a rare snapshot of a whole dinosaur population at once.",
  },
  {
    id: "plateosaurus",
    name: "Plateosaurus",
    group: "sauropodomorph",
    start: 214,
    end: 204,
    lengthM: 8,
    diet: "herbivore",
    blurb:
      "A bulky, long-necked browser that hints at what was coming: its lineage would produce the largest land animals ever to live.",
  },
  {
    id: "eudimorphodon",
    name: "Eudimorphodon",
    group: "pterosaur",
    start: 210,
    end: 203,
    lengthM: 1,
    diet: "carnivore",
    blurb:
      "One of the oldest known pterosaurs, already fully capable of powered flight — vertebrates got airborne here, some 70 million years before birds.",
  },
  {
    id: "morganucodon",
    name: "Morganucodon",
    group: "mammal",
    start: 205,
    end: 190,
    lengthM: 0.1,
    diet: "insectivore",
    blurb:
      "A shrew-sized creature at the very base of the mammal family tree. Mammals appear at the same time as the dinosaurs — they simply stayed small for the next 130 million years.",
  },

  // ── Jurassic ──────────────────────────────────────────────────────────
  {
    id: "ichthyosaurus",
    name: "Ichthyosaurus",
    group: "marine-reptile",
    start: 201,
    end: 194,
    lengthM: 3,
    diet: "carnivore",
    blurb:
      "A dolphin-shaped reptile that gave birth to live young at sea. Some fossils preserve mothers caught mid-birth.",
  },
  {
    id: "dilophosaurus",
    name: "Dilophosaurus",
    group: "theropod",
    start: 193,
    end: 183,
    lengthM: 7,
    diet: "carnivore",
    blurb:
      "A large early theropod with paired head crests. Despite the films, there is no evidence it spat venom or had a frill — and it was far bigger than usually shown.",
  },
  {
    id: "megalosaurus",
    name: "Megalosaurus",
    group: "theropod",
    start: 170,
    end: 166,
    lengthM: 7,
    diet: "carnivore",
    blurb:
      "The first dinosaur ever formally named, in 1824 — nearly two decades before the word 'dinosaur' was coined.",
  },
  {
    id: "liopleurodon",
    name: "Liopleurodon",
    group: "marine-reptile",
    start: 166,
    end: 155,
    lengthM: 6.5,
    diet: "carnivore",
    blurb:
      "A short-necked pliosaur that hunted by scent, with nostrils arranged to sample water directionally as it swam.",
  },
  {
    id: "allosaurus",
    name: "Allosaurus",
    group: "theropod",
    start: 155,
    end: 145,
    lengthM: 9,
    diet: "carnivore",
    blurb:
      "The dominant predator of Late Jurassic North America, and one of the best-understood large theropods thanks to thousands of bones from the Cleveland-Lloyd quarry.",
  },
  {
    id: "stegosaurus",
    name: "Stegosaurus",
    group: "ornithischian",
    start: 155,
    end: 145,
    lengthM: 9,
    diet: "herbivore",
    blurb:
      "The plated icon of the Jurassic. Compare its bar to Tyrannosaurus: more time separates those two than separates T. rex from us.",
  },
  {
    id: "brachiosaurus",
    name: "Brachiosaurus",
    group: "sauropodomorph",
    start: 154,
    end: 150,
    lengthM: 22,
    diet: "herbivore",
    blurb:
      "Built like a giraffe, with forelimbs longer than its hindlimbs — a browser that fed high in the canopy rather than sweeping the ground.",
  },
  {
    id: "diplodocus",
    name: "Diplodocus",
    group: "sauropodomorph",
    start: 154,
    end: 148,
    lengthM: 26,
    diet: "herbivore",
    blurb:
      "Enormously long but comparatively light, with a whip tail that may have cracked above the speed of sound.",
  },
  {
    id: "apatosaurus",
    name: "Apatosaurus",
    group: "sauropodomorph",
    start: 152,
    end: 151,
    lengthM: 23,
    diet: "herbivore",
    blurb:
      "The animal at the centre of the 'Brontosaurus' naming mess. Its narrow bar reflects how tightly its known fossils cluster in time.",
  },
  {
    id: "rhamphorhynchus",
    name: "Rhamphorhynchus",
    group: "pterosaur",
    start: 151,
    end: 148,
    lengthM: 1.8,
    diet: "carnivore",
    blurb:
      "A long-tailed fish-eating pterosaur from the Solnhofen limestone, often preserved with wing membranes intact.",
  },
  {
    id: "archaeopteryx",
    name: "Archaeopteryx",
    group: "theropod",
    start: 150,
    end: 148,
    lengthM: 0.5,
    diet: "carnivore",
    blurb:
      "Feathers and wings, but also teeth, claws and a bony tail. The fossil that made the dinosaur–bird link impossible to ignore.",
  },
  {
    id: "compsognathus",
    name: "Compsognathus",
    group: "theropod",
    start: 150,
    end: 148,
    lengthM: 1,
    diet: "carnivore",
    blurb:
      "A chicken-sized predator sharing the Solnhofen lagoons with Archaeopteryx — a reminder that most dinosaurs were small.",
  },

  // ── Cretaceous ────────────────────────────────────────────────────────
  {
    id: "iguanodon",
    name: "Iguanodon",
    group: "ornithischian",
    start: 126,
    end: 122,
    lengthM: 10,
    diet: "herbivore",
    blurb:
      "One of the first three dinosaurs recognised as a distinct group. Its famous thumb spike was originally reconstructed on its nose.",
  },
  {
    id: "repenomamus",
    name: "Repenomamus",
    group: "mammal",
    start: 126,
    end: 122,
    lengthM: 1,
    diet: "carnivore",
    blurb:
      "A badger-sized mammal found with a juvenile dinosaur in its stomach — evidence that the arrow occasionally pointed the other way.",
  },
  {
    id: "deinonychus",
    name: "Deinonychus",
    group: "theropod",
    start: 115,
    end: 108,
    lengthM: 3.4,
    diet: "carnivore",
    blurb:
      "The agile, sickle-clawed predator that triggered the 'Dinosaur Renaissance' and our modern picture of dinosaurs as active, bird-like animals.",
  },
  {
    id: "spinosaurus",
    name: "Spinosaurus",
    group: "theropod",
    start: 99,
    end: 93.5,
    lengthM: 15,
    diet: "carnivore",
    blurb:
      "The longest known predatory dinosaur, sail-backed and semi-aquatic, hunting fish in North African river systems.",
  },
  {
    id: "argentinosaurus",
    name: "Argentinosaurus",
    group: "sauropodomorph",
    start: 96,
    end: 92,
    lengthM: 35,
    diet: "herbivore",
    blurb:
      "Among the largest land animals ever — plausibly 65–75 tonnes, known from a handful of colossal vertebrae.",
  },
  {
    id: "pteranodon",
    name: "Pteranodon",
    group: "pterosaur",
    start: 88,
    end: 80,
    lengthM: 6,
    diet: "carnivore",
    blurb:
      "A toothless, crested pterosaur with a six-metre wingspan that soared over the inland sea splitting North America in two.",
  },
  {
    id: "mosasaurus",
    name: "Mosasaurus",
    group: "marine-reptile",
    start: 82,
    end: 66,
    lengthM: 13,
    diet: "carnivore",
    blurb:
      "A giant marine lizard — closer kin to monitor lizards and snakes than to dinosaurs. It ruled the seas right up to the final extinction.",
  },
  {
    id: "elasmosaurus",
    name: "Elasmosaurus",
    group: "marine-reptile",
    start: 80.5,
    end: 80,
    lengthM: 10.3,
    diet: "carnivore",
    blurb:
      "Over half its length was neck, holding 72 vertebrae — more than any other animal known.",
  },
  {
    id: "parasaurolophus",
    name: "Parasaurolophus",
    group: "ornithischian",
    start: 76.5,
    end: 73,
    lengthM: 10,
    diet: "herbivore",
    blurb:
      "Its hollow head crest was a resonating tube; models of it produce a low foghorn note, suggesting herds that called to one another.",
  },
  {
    id: "velociraptor",
    name: "Velociraptor",
    group: "theropod",
    start: 75,
    end: 71,
    lengthM: 2,
    diet: "carnivore",
    blurb:
      "Turkey-sized and definitively feathered — fossil forearms preserve quill knobs. The film version is closer in size to Deinonychus.",
  },
  {
    id: "triceratops",
    name: "Triceratops",
    group: "ornithischian",
    start: 68,
    end: 66,
    lengthM: 9,
    diet: "herbivore",
    blurb:
      "Three horns and a solid frill, and one of the very last non-avian dinosaurs — it was still grazing when the asteroid arrived.",
  },
  {
    id: "tyrannosaurus",
    name: "Tyrannosaurus",
    commonName: "T. rex",
    group: "theropod",
    start: 68,
    end: 66,
    lengthM: 12,
    diet: "carnivore",
    blurb:
      "The famous one — and a latecomer. Its entire genus occupies the last two million years of the Mesozoic, a sliver at the right-hand edge of the age of dinosaurs.",
  },
  {
    id: "ankylosaurus",
    name: "Ankylosaurus",
    group: "ornithischian",
    start: 68,
    end: 66,
    lengthM: 8,
    diet: "herbivore",
    blurb:
      "An armoured tank with a bony tail club capable of shattering bone. A contemporary of both Triceratops and T. rex.",
  },
  {
    id: "quetzalcoatlus",
    name: "Quetzalcoatlus",
    group: "pterosaur",
    start: 68,
    end: 66,
    lengthM: 11,
    diet: "carnivore",
    blurb:
      "As tall as a giraffe when standing, with a wingspan over ten metres — the largest flying animal ever known.",
  },

  // ── Cenozoic: the age of mammals ──────────────────────────────────────
  {
    id: "titanoboa",
    name: "Titanoboa",
    group: "other-reptile",
    start: 60,
    end: 58,
    lengthM: 13,
    diet: "carnivore",
    blurb:
      "A one-tonne snake from Colombian coal swamps, thriving in the hothouse world that followed the dinosaurs' exit.",
  },
  {
    id: "andrewsarchus",
    name: "Andrewsarchus",
    group: "mammal",
    start: 45,
    end: 36,
    lengthM: 3.4,
    diet: "omnivore",
    blurb:
      "Known from a single enormous skull. Its closest living relatives are, improbably, hippos and whales.",
  },
  {
    id: "basilosaurus",
    name: "Basilosaurus",
    group: "mammal",
    start: 41,
    end: 34,
    lengthM: 18,
    diet: "carnivore",
    blurb:
      "A fully aquatic early whale that kept small, useless hind legs — a transitional form caught in the act.",
  },
  {
    id: "paraceratherium",
    name: "Paraceratherium",
    group: "mammal",
    start: 34,
    end: 23,
    lengthM: 8,
    diet: "herbivore",
    blurb:
      "A hornless rhino relative standing five metres at the shoulder — the largest land mammal known.",
  },
  {
    id: "megalodon",
    name: "Otodus megalodon",
    commonName: "Megalodon",
    group: "fish",
    start: 23,
    end: 3.6,
    lengthM: 18,
    diet: "carnivore",
    blurb:
      "A shark with teeth the size of a hand. It went extinct several million years before any human existed.",
  },
  {
    id: "megatherium",
    name: "Megatherium",
    commonName: "Giant ground sloth",
    group: "mammal",
    start: 5.3,
    end: 0.011,
    lengthM: 6,
    diet: "herbivore",
    blurb:
      "An elephant-sized ground sloth that could rear up to pull down branches. It survived until the end of the last ice age.",
  },
  {
    id: "australopithecus",
    name: "Australopithecus",
    group: "hominin",
    start: 4.2,
    end: 2.0,
    lengthM: 1.2,
    diet: "omnivore",
    blurb:
      "Small-brained but fully upright. 'Lucy' belongs here, as do the Laetoli footprints — a family walking across fresh ash 3.7 million years ago.",
  },
  {
    id: "smilodon",
    name: "Smilodon",
    commonName: "Sabre-toothed cat",
    group: "mammal",
    start: 2.5,
    end: 0.01,
    lengthM: 2,
    diet: "carnivore",
    blurb:
      "Heavily built, with 18-centimetre canines used for a precise killing bite. Thousands were trapped in the La Brea asphalt seeps.",
  },
  {
    id: "mammuthus-primigenius",
    name: "Mammuthus primigenius",
    commonName: "Woolly mammoth",
    group: "mammal",
    start: 0.4,
    end: 0.004,
    lengthM: 5.4,
    diet: "herbivore",
    blurb:
      "An ice-age grazer that outlasted the last glaciation. A relict population survived on Wrangel Island until about 4,000 years ago — after the Great Pyramid was built.",
  },
  {
    id: "homo-sapiens",
    name: "Homo sapiens",
    commonName: "Humans",
    group: "hominin",
    start: 0.3,
    end: 0,
    lengthM: 1.7,
    diet: "omnivore",
    blurb:
      "Our own species. At this scale our entire history is a hairline at the right edge — zoom all the way in to see it.",
  },
];
