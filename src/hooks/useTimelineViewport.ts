import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TIMELINE_END, TIMELINE_START } from "../data/geoSpans";
import { AXIS_HEIGHT } from "../lib/dimensions";
import { TOTAL_MY, clampZoom, myaToX, xToMya } from "../lib/scale";
import type { Interval } from "../types";

export interface VisibleRange {
  /** Age at the left edge of the viewport. */
  oldest: number;
  /** Age at the right edge of the viewport. */
  youngest: number;
}

/**
 * Owns pan and zoom for the chart.
 *
 * Panning is delegated to the browser: the canvas is simply a very wide element
 * inside an `overflow: auto` viewport, so trackpad swipes, shift-wheel, scroll
 * bars, touch drag and keyboard scrolling all work without our help.
 *
 * Zooming is the part we have to do ourselves, because changing pixels-per-
 * million-years must keep the age under the cursor pinned in place. We compute
 * the corrected `scrollLeft` while we still know the *old* zoom, stash it, and
 * apply it in a layout effect once React has resized the canvas — doing it any
 * earlier would clamp against a stale scroll width and jump to the end.
 */
export function useTimelineViewport() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [pxPerMy, setPxPerMy] = useState(4);
  const [range, setRange] = useState<VisibleRange>({
    oldest: TIMELINE_START,
    youngest: TIMELINE_END,
  });
  const pendingScrollLeft = useRef<number | null>(null);

  const readRange = useCallback((zoom: number) => {
    const el = viewportRef.current;
    if (!el) return;
    setRange({
      oldest: xToMya(el.scrollLeft, zoom),
      youngest: xToMya(el.scrollLeft + el.clientWidth, zoom),
    });
  }, []);

  /** Multiply the zoom, keeping `anchorClientX` (default: viewport centre) fixed. */
  const zoomBy = useCallback((factor: number, anchorClientX?: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const anchorX =
      anchorClientX === undefined ? el.clientWidth / 2 : anchorClientX - rect.left;

    setPxPerMy((prev) => {
      const next = clampZoom(prev * factor);
      if (next === prev) return prev;
      const ageUnderAnchor = xToMya(el.scrollLeft + anchorX, prev);
      pendingScrollLeft.current = myaToX(ageUnderAnchor, next) - anchorX;
      return next;
    });
  }, []);

  /** Zoom and scroll so `interval` fills most of the viewport. */
  const focusInterval = useCallback((interval: Interval, paddingFraction = 0.12) => {
    const el = viewportRef.current;
    if (!el) return;
    const span = Math.max(interval.start - interval.end, 1e-4);
    const usable = el.clientWidth * (1 - paddingFraction * 2);

    setPxPerMy(() => {
      const next = clampZoom(usable / span);
      const centreAge = (interval.start + interval.end) / 2;
      pendingScrollLeft.current = myaToX(centreAge, next) - el.clientWidth / 2;
      return next;
    });
  }, []);

  /** Reset to "everything fits on screen". */
  const fitAll = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setPxPerMy(() => {
      pendingScrollLeft.current = 0;
      return clampZoom(el.clientWidth / TOTAL_MY);
    });
  }, []);

  /** Nudge the viewport just enough to bring a creature's bar into view. */
  const revealCreature = useCallback(
    (creatureId: string) => {
      const el = viewportRef.current;
      if (!el) return;

      const bar = el.querySelector<HTMLElement>(
        `[data-creature-id="${CSS.escape(creatureId)}"]`,
      );
      if (!bar) return;

      // Measure the rendered bar rather than deriving its position. Horizontal
      // placement is knowable from the age, but vertical placement depends on
      // family headers, gaps and row heights resolved by CSS flow — re-deriving
      // that here would duplicate the layout and drift out of step with it.
      const viewport = el.getBoundingClientRect();
      const rect = bar.getBoundingClientRect();
      const barLeft = rect.left - viewport.left + el.scrollLeft;
      const barRight = rect.right - viewport.left + el.scrollLeft;
      const barTop = rect.top - viewport.top + el.scrollTop;
      const barBottom = rect.bottom - viewport.top + el.scrollTop;

      const margin = 48;
      let left = el.scrollLeft;
      if (barLeft < el.scrollLeft + margin) {
        left = barLeft - margin;
      } else if (barRight > el.scrollLeft + el.clientWidth - margin) {
        // Prefer showing the start of the bar if the whole thing cannot fit.
        left = Math.min(barLeft - margin, barRight - el.clientWidth + margin);
      }

      // The axis is sticky over the top of the chart, so a bar scrolled to
      // y = 0 would sit underneath it rather than in view.
      const topMargin = AXIS_HEIGHT + 16;
      const bottomMargin = 24;
      let top = el.scrollTop;
      if (barTop < el.scrollTop + topMargin) {
        top = barTop - topMargin;
      } else if (barBottom > el.scrollTop + el.clientHeight - bottomMargin) {
        top = barBottom - el.clientHeight + bottomMargin;
      }

      if (left !== el.scrollLeft || top !== el.scrollTop) {
        el.scrollTo({ left, top, behavior: "smooth" });
      }
    },
    [],
  );

  const hasInteracted = useRef(false);
  // Mirrors `pxPerMy` for the resize listener, which must not be torn down and
  // rebuilt on every zoom step. Kept in sync by the layout effect below.
  const pxPerMyRef = useRef(pxPerMy);

  // Start fitted to the window. This must run exactly once: an earlier version
  // also depended on `pxPerMy`, which meant every zoom re-ran the effect and
  // snapped the view straight back to "fit all".
  useEffect(() => {
    fitAll();
  }, [fitAll]);

  // Stay fitted on resize, but only while the reader has not taken control of
  // the zoom themselves — after that, respect where they are.
  useEffect(() => {
    const onResize = () => {
      if (hasInteracted.current) readRange(pxPerMyRef.current);
      else fitAll();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fitAll, readRange]);

  // Ctrl/⌘ + wheel, and pinch on a trackpad (which browsers report as a
  // ctrl-wheel), zoom instead of scrolling. Needs a non-passive listener so the
  // browser's own page zoom can be prevented.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      hasInteracted.current = true;
      zoomBy(Math.exp(-event.deltaY * 0.01), event.clientX);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomBy]);

  // Apply any scroll correction the moment the canvas has its new width.
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    if (pendingScrollLeft.current !== null) {
      el.scrollLeft = pendingScrollLeft.current;
      pendingScrollLeft.current = null;
    }
    pxPerMyRef.current = pxPerMy;
    readRange(pxPerMy);
  }, [pxPerMy, readRange]);

  const onScroll = useCallback(() => readRange(pxPerMy), [readRange, pxPerMy]);

  const markInteracted = useCallback(() => {
    hasInteracted.current = true;
  }, []);

  return {
    viewportRef,
    pxPerMy,
    range,
    onScroll,
    zoomBy,
    fitAll,
    focusInterval,
    revealCreature,
    markInteracted,
  };
}
