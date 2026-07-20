import type { GeoSpan } from "../types";

/**
 * Boundary ages follow the ICS International Chronostratigraphic Chart
 * (v2023/09). Colours are the chart's official RGB values, so this timeline
 * reads the same way as the charts in textbooks and museum halls.
 *
 * We start at the base of the Permian rather than the start of the Phanerozoic:
 * it gives enough runway to show the synapsids that preceded the dinosaurs
 * (Dimetrodon and friends) without squashing the Mesozoic into a sliver.
 */

export const ERAS: GeoSpan[] = [
  { id: "paleozoic", name: "Paleozoic", rank: "era", start: 298.9, end: 251.902, color: "#99C08D" },
  { id: "mesozoic", name: "Mesozoic", rank: "era", start: 251.902, end: 66.0, color: "#67C5CA" },
  { id: "cenozoic", name: "Cenozoic", rank: "era", start: 66.0, end: 0, color: "#F2F91D" },
];

export const PERIODS: GeoSpan[] = [
  // Paleozoic (tail end only)
  { id: "permian", name: "Permian", rank: "period", start: 298.9, end: 251.902, color: "#F04028", parent: "paleozoic" },
  // Mesozoic — "the age of dinosaurs"
  { id: "triassic", name: "Triassic", rank: "period", start: 251.902, end: 201.4, color: "#812B92", parent: "mesozoic" },
  { id: "jurassic", name: "Jurassic", rank: "period", start: 201.4, end: 145.0, color: "#34B2C9", parent: "mesozoic" },
  { id: "cretaceous", name: "Cretaceous", rank: "period", start: 145.0, end: 66.0, color: "#7FC64E", parent: "mesozoic" },
  // Cenozoic — "the age of mammals"
  { id: "paleogene", name: "Paleogene", rank: "period", start: 66.0, end: 23.03, color: "#FD9A52", parent: "cenozoic" },
  { id: "neogene", name: "Neogene", rank: "period", start: 23.03, end: 2.58, color: "#FFE619", parent: "cenozoic" },
  { id: "quaternary", name: "Quaternary", rank: "period", start: 2.58, end: 0, color: "#F9F97F", parent: "cenozoic" },
];

export const EPOCHS: GeoSpan[] = [
  { id: "cisuralian", name: "Cisuralian", rank: "epoch", start: 298.9, end: 273.01, color: "#EF5845", parent: "permian" },
  { id: "guadalupian", name: "Guadalupian", rank: "epoch", start: 273.01, end: 259.51, color: "#FB745C", parent: "permian" },
  { id: "lopingian", name: "Lopingian", rank: "epoch", start: 259.51, end: 251.902, color: "#FBA794", parent: "permian" },

  { id: "early-triassic", name: "Early Triassic", rank: "epoch", start: 251.902, end: 247.2, color: "#983999", parent: "triassic" },
  { id: "middle-triassic", name: "Middle Triassic", rank: "epoch", start: 247.2, end: 237.0, color: "#B168B1", parent: "triassic" },
  { id: "late-triassic", name: "Late Triassic", rank: "epoch", start: 237.0, end: 201.4, color: "#BD8CC3", parent: "triassic" },

  { id: "early-jurassic", name: "Early Jurassic", rank: "epoch", start: 201.4, end: 174.7, color: "#42AED0", parent: "jurassic" },
  { id: "middle-jurassic", name: "Middle Jurassic", rank: "epoch", start: 174.7, end: 161.5, color: "#80CFD8", parent: "jurassic" },
  { id: "late-jurassic", name: "Late Jurassic", rank: "epoch", start: 161.5, end: 145.0, color: "#B3E3EE", parent: "jurassic" },

  { id: "early-cretaceous", name: "Early Cretaceous", rank: "epoch", start: 145.0, end: 100.5, color: "#8CCD57", parent: "cretaceous" },
  { id: "late-cretaceous", name: "Late Cretaceous", rank: "epoch", start: 100.5, end: 66.0, color: "#A6D84A", parent: "cretaceous" },

  { id: "paleocene", name: "Paleocene", rank: "epoch", start: 66.0, end: 56.0, color: "#FDA75F", parent: "paleogene" },
  { id: "eocene", name: "Eocene", rank: "epoch", start: 56.0, end: 33.9, color: "#FDB46C", parent: "paleogene" },
  { id: "oligocene", name: "Oligocene", rank: "epoch", start: 33.9, end: 23.03, color: "#FDC07A", parent: "paleogene" },

  { id: "miocene", name: "Miocene", rank: "epoch", start: 23.03, end: 5.333, color: "#FFFF00", parent: "neogene" },
  { id: "pliocene", name: "Pliocene", rank: "epoch", start: 5.333, end: 2.58, color: "#FFFF99", parent: "neogene" },

  { id: "pleistocene", name: "Pleistocene", rank: "epoch", start: 2.58, end: 0.0117, color: "#FFF2AE", parent: "quaternary" },
  { id: "holocene", name: "Holocene", rank: "epoch", start: 0.0117, end: 0, color: "#FEEBD2", parent: "quaternary" },
];

/** Oldest and youngest edges of the whole chart. */
export const TIMELINE_START = 298.9;
export const TIMELINE_END = 0;

export interface MassExtinction {
  id: string;
  name: string;
  /** Age of the event in Mya. */
  at: number;
  blurb: string;
}

/**
 * The two events that bracket the age of dinosaurs. Drawn as vertical markers
 * because they explain most of the abrupt starts and stops on the chart.
 */
export const MASS_EXTINCTIONS: MassExtinction[] = [
  {
    id: "p-tr",
    name: "Permian–Triassic extinction",
    at: 251.902,
    blurb:
      "“The Great Dying” — the most severe extinction event known, wiping out roughly 80–90% of marine species and clearing the way for the first dinosaurs.",
  },
  {
    id: "k-pg",
    name: "Cretaceous–Paleogene extinction",
    at: 66.0,
    blurb:
      "An asteroid impact at Chicxulub ended the non-avian dinosaurs, along with the pterosaurs and the great marine reptiles. Birds and mammals survived.",
  },
];
