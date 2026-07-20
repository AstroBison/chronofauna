import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TIMELINE_END, TIMELINE_START } from "../data/geoSpans";
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

  /** Nudge the viewport just enough to bring an interval into view. */
  const revealInterval = useCallback(
    (interval: Interval) => {
      const el = viewportRef.current;
      if (!el) return;
      const left = myaToX(interval.start, pxPerMy);
      const right = myaToX(interval.end, pxPerMy);
      const margin = 48;

      if (left < el.scrollLeft + margin) {
        el.scrollTo({ left: left - margin, behavior: "smooth" });
      } else if (right > el.scrollLeft + el.clientWidth - margin) {
        // Prefer showing the start of the bar if the whole thing cannot fit.
        const target = Math.min(left - margin, right - el.clientWidth + margin);
        el.scrollTo({ left: target, behavior: "smooth" });
      }
    },
    [pxPerMy],
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
    revealInterval,
    markInteracted,
  };
}
