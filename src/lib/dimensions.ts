/** Shared vertical metrics, kept in one place so the axis and rows line up. */
export const LANE_HEIGHT = 34;

/**
 * Height of a bar's *interactive* area, not of the visible rule.
 *
 * The rule itself is a few pixels tall (see `--rule-thickness` in the CSS), but
 * a 4px click target would be unusable and fails every pointer-size
 * accessibility guideline. So the button keeps a generous transparent box and
 * only paints a hairline inside it.
 */
export const BAR_HEIGHT = 22;

/** Breathing room below the last row. */
export const LANES_PADDING_BOTTOM = 14;

/**
 * Clear strip above the first family block, reserved for the extinction-event
 * captions, which are sticky to the top of the chart.
 *
 * Family blocks sit in normal flow, so plain `padding-top` on `.lanes` does move
 * them. Bars inside a block are absolutely positioned against their own block,
 * which is why they need no inset of their own.
 */
export const LANES_TOP_INSET = 28;

/** Heading strip above each family block. */
export const FAMILY_HEADER_HEIGHT = 19;

/** Separation between one family block and the next. */
export const FAMILY_GAP = 10;

/*
 * The ICS colours are intentionally vivid, so the axis is kept slim: it should
 * read as a reference strip, not a wall of colour competing with the data.
 */
export const ERA_ROW_HEIGHT = 20;
export const PERIOD_ROW_HEIGHT = 24;
export const EPOCH_ROW_HEIGHT = 18;
export const TICK_ROW_HEIGHT = 22;
export const AXIS_HEIGHT =
  ERA_ROW_HEIGHT + PERIOD_ROW_HEIGHT + EPOCH_ROW_HEIGHT + TICK_ROW_HEIGHT;

/**
 * Rendered size of the silhouette thumbnail beside a label, plus its gap. A bar
 * only earns a thumbnail when it can fit this *on top of* its name — the name
 * matters more than the picture, so the picture yields first.
 */
export const BAR_THUMBNAIL_WIDTH = 24;
export const BAR_THUMBNAIL_EXTRA = BAR_THUMBNAIL_WIDTH + 5;

/** Minimum painted width, so single-horizon genera stay visible and clickable. */
export const MIN_RULE_WIDTH = 5;

/**
 * Clear space between one label and the next bar's label.
 *
 * This used to be doing two jobs, one of them badly: absorbing the error in a
 * guessed text width, and keeping labels from sitting flush. Widths are now
 * measured rather than guessed (`lib/text.ts`), so only the second job is left
 * — this is breathing room, not a correctness margin.
 */
export const LABEL_SAFETY_GAP = 8;

/** Horizontal padding on `.axis-span-label`; a name needs its width plus this. */
export const AXIS_LABEL_PADDING = 14;
