import type { Creature, CreatureGroup, PackedCreature } from "../types";
import { overlaps } from "./scale";

/**
 * Greedy interval packing: walk the creatures oldest-first and drop each into
 * the topmost lane whose previous occupant had already died out.
 *
 * Lane assignment deliberately depends only on *time*, never on zoom or label
 * width. If it depended on pixels, rows would reshuffle under the reader's eyes
 * every time they zoomed — which is exactly when they are trying to follow a
 * particular bar. Labels that no longer fit are handled at render time instead.
 */
export function packLanes(creatures: Creature[]): PackedCreature[] {
  const ordered = [...creatures].sort(
    (a, b) => b.start - a.start || b.end - a.end || a.name.localeCompare(b.name),
  );

  // For each lane, the index in `packed` of the creature most recently placed
  // in it — which, given the sort order, is also the right-most one so far.
  const laneTails: number[] = [];
  const packed: PackedCreature[] = [];

  for (const creature of ordered) {
    let lane = laneTails.findIndex((idx) => !overlaps(packed[idx].creature, creature));

    if (lane === -1) {
      lane = laneTails.length;
    } else {
      // We now know how much empty room the lane's previous occupant has.
      const previous = packed[laneTails[lane]];
      previous.gapAfterMy = previous.creature.end - creature.start;
    }

    packed.push({ creature, lane, gapAfterMy: Infinity });
    laneTails[lane] = packed.length - 1;
  }

  return packed;
}

/**
 * The coarse families the chart is blocked into.
 *
 * Deliberately broader than `CreatureGroup`: blocking by all ten groups needs 18
 * rows, because every group that has a contemporary in another group forces an
 * extra row. Five families cost 13 and still put related animals together.
 * Colour continues to carry the finer ten-group distinction within each block.
 */
export type CreatureFamily =
  | "mammal-line"
  | "other-reptiles"
  | "dinosaurs"
  | "pterosaurs"
  | "sea";

export const FAMILY_OF: Record<CreatureGroup, CreatureFamily> = {
  synapsid: "mammal-line",
  mammal: "mammal-line",
  hominin: "mammal-line",
  "other-reptile": "other-reptiles",
  theropod: "dinosaurs",
  sauropodomorph: "dinosaurs",
  ornithischian: "dinosaurs",
  pterosaur: "pterosaurs",
  "marine-reptile": "sea",
  fish: "sea",
};

export const FAMILY_LABEL: Record<CreatureFamily, string> = {
  "mammal-line": "Mammal line",
  "other-reptiles": "Other reptiles",
  dinosaurs: "Dinosaurs",
  pterosaurs: "Pterosaurs",
  sea: "Sea creatures",
};

/** Land, then air, then sea — the arrangement most textbooks use. */
export const FAMILY_ORDER: CreatureFamily[] = [
  "mammal-line",
  "other-reptiles",
  "dinosaurs",
  "pterosaurs",
  "sea",
];

export interface FamilyBlock {
  family: CreatureFamily;
  label: string;
  members: PackedCreature[];
  /** Rows needed. At least 1 so a block never collapses to nothing. */
  laneCount: number;
}

/**
 * Group colours, held to a common lightness and moderate saturation so ten hues
 * on shared rows read as one deliberate palette rather than a crayon box.
 *
 * These resolve to CSS custom properties rather than literal hex, because each
 * group needs a *different* value in dark mode — a palette tuned to sit on white
 * goes muddy and low-contrast on a dark surface. The two sets live together in
 * `styles.css`; swapping them is the theme's job, not React's, so changing
 * theme repaints without re-rendering a single component.
 */
export const GROUP_META: Record<CreatureGroup, { label: string; color: string }> = {
  theropod: { label: "Theropods", color: "var(--group-theropod)" },
  sauropodomorph: { label: "Sauropodomorphs", color: "var(--group-sauropodomorph)" },
  ornithischian: { label: "Ornithischians", color: "var(--group-ornithischian)" },
  "marine-reptile": { label: "Marine reptiles", color: "var(--group-marine-reptile)" },
  pterosaur: { label: "Pterosaurs", color: "var(--group-pterosaur)" },
  "other-reptile": { label: "Other reptiles", color: "var(--group-other-reptile)" },
  synapsid: { label: "Synapsids", color: "var(--group-synapsid)" },
  mammal: { label: "Mammals", color: "var(--group-mammal)" },
  hominin: { label: "Hominins", color: "var(--group-hominin)" },
  fish: { label: "Fish", color: "var(--group-fish)" },
};

/**
 * Order the filter chips appear in, roughly following each group's first
 * appearance in the record. The chips double as the chart's colour legend now
 * that there are no per-group band headings.
 */
export const GROUP_ORDER: CreatureGroup[] = [
  "synapsid",
  "other-reptile",
  "theropod",
  "sauropodomorph",
  "ornithischian",
  "pterosaur",
  "marine-reptile",
  "fish",
  "mammal",
  "hominin",
];

/**
 * Pack creatures into one block of rows per family, each packed independently.
 *
 * Grouping and compactness are genuinely opposed here, and no cleverness
 * resolves it: two animals alive at the same time cannot share a row, so any
 * clustering by type pushes contemporaries apart vertically. (Affinity packing —
 * preferring a row that already holds the same type — was tried and barely
 * moved the mixing, because the timeline, not the algorithm, is the constraint.)
 * Five families is the chosen point on that trade-off: 13 rows against 6 for a
 * single shared block, or 18 for all ten groups.
 *
 * Within a block, rows remain pure collision avoidance, so a vertical slice
 * through one family still reads as "these lived at the same time".
 */
export function packByFamily(creatures: Creature[]): FamilyBlock[] {
  return FAMILY_ORDER.map((family) => {
    const members = packLanes(creatures.filter((c) => FAMILY_OF[c.group] === family));
    return {
      family,
      label: FAMILY_LABEL[family],
      members,
      laneCount: Math.max(1, ...members.map((m) => m.lane + 1)),
    };
  }).filter((block) => block.members.length > 0);
}

/** Every creature whose lifespan intersects the given one, excluding itself. */
export function contemporariesOf(target: Creature, creatures: Creature[]): Creature[] {
  return creatures.filter((c) => c.id !== target.id && overlaps(c, target));
}
