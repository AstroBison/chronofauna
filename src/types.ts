/**
 * All times are in Mya — millions of years ago.
 *
 * Because time runs *backwards*, every interval is stored as `{ start, end }`
 * where `start > end`: `start` is when the thing appeared (further in the past,
 * larger number) and `end` is when it disappeared (closer to now, smaller
 * number). An extant species ends at 0. Keeping this convention everywhere
 * avoids a whole class of sign errors — see `lib/scale.ts` for the one place
 * the flip to screen coordinates happens.
 */
export interface Interval {
  /** Millions of years ago the span begins. Larger = older. */
  start: number;
  /** Millions of years ago the span ends. Smaller = more recent. 0 = present. */
  end: number;
}

/** A rank in the geologic time scale. We render eras, periods and epochs. */
export type SpanRank = "era" | "period" | "epoch";

export interface GeoSpan extends Interval {
  id: string;
  name: string;
  rank: SpanRank;
  /**
   * Official ICS (International Commission on Stratigraphy) colour for the
   * span. Using the real chart colours means the timeline matches the
   * geologic charts learners will see in textbooks and museums.
   */
  color: string;
  /** `id` of the parent span, for eras/periods. */
  parent?: string;
}

/** Broad grouping used for colour-coding and filtering creatures. */
export type CreatureGroup =
  | "theropod"
  | "sauropodomorph"
  | "ornithischian"
  | "other-reptile"
  | "marine-reptile"
  | "pterosaur"
  | "synapsid"
  | "mammal"
  | "hominin"
  | "fish";

export interface Creature extends Interval {
  id: string;
  /** Genus as commonly written, e.g. "Tyrannosaurus". */
  name: string;
  /** Everyday name where one exists, e.g. "Woolly mammoth". */
  commonName?: string;
  group: CreatureGroup;
  /** Approximate body length in metres. Used for the size comparison. */
  lengthM?: number;
  diet: "carnivore" | "herbivore" | "omnivore" | "insectivore" | "filter-feeder";
  /** One or two sentences pitched at a general audience. */
  blurb: string;
}

/** A creature placed into a horizontal lane by the packing algorithm. */
export interface PackedCreature {
  creature: Creature;
  /** Zero-based row. Lane 0 is drawn at the top of its group. */
  lane: number;
  /**
   * Empty time, in millions of years, between this bar's right edge and the
   * next bar in the same lane; `Infinity` if it is the last one. The renderer
   * turns this into pixels to decide whether a label can be hung off the end
   * of a thin bar without colliding with its neighbour.
   */
  gapAfterMy: number;
}
