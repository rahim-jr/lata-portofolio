"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";
type Theme = "light" | "dark";

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const persistedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (persistedTheme === "light" || persistedTheme === "dark") {
    return persistedTheme;
  }

  return "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((previousTheme) => {
      const nextTheme = previousTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`themeToggle ${isDark ? "themeDark" : "themeLight"}`}
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span>{isDark ? "Light" : "Dark"}</span>
      <span className="themeToggleTrack" aria-hidden>
        <span className="themeToggleDot" />
      </span>
    </button>
  );
}
