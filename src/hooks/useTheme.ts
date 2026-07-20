import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "dinoline-theme";

function readStoredChoice(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // Private browsing and some embedded webviews throw on localStorage access.
    return null;
  }
}

/**
 * Resolves the active theme, following the operating system until the reader
 * makes a choice of their own.
 *
 * The distinction matters: someone who has never touched the toggle should keep
 * tracking their OS as it flips at sunset, but someone who deliberately chose
 * light at midnight should stay in light. So an explicit choice is stored and
 * wins; absent one, the system preference is followed *live*.
 *
 * The very first paint is handled by an inline script in `index.html`, which
 * sets `data-theme` before React boots. Without it the page would flash light
 * before hydrating into dark.
 */
export function useTheme() {
  const [choice, setChoice] = useState<Theme | null>(readStoredChoice);
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false,
  );

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!query) return;
    const onChange = (event: MediaQueryListEvent) => setSystemPrefersDark(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const theme: Theme = choice ?? (systemPrefersDark ? "dark" : "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setChoice((current) => {
      const next: Theme =
        (current ?? (window.matchMedia?.("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")) === "dark"
          ? "light"
          : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Non-fatal: the choice simply will not survive a reload.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
