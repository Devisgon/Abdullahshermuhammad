'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const preferenceKey = 'asm-theme';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    const onSystemChange = () => {
      try {
        if (localStorage.getItem(preferenceKey)) return;
      } catch {
        // The toggle still works when localStorage is unavailable.
      }
      document.documentElement.classList.toggle('dark', query.matches);
      sync();
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== preferenceKey) return;
      document.documentElement.classList.toggle('dark', event.newValue === 'dark' || (event.newValue === null && query.matches));
      sync();
    };
    sync();
    window.addEventListener('storage', onStorage);
    query.addEventListener('change', onSystemChange);
    return () => {
      window.removeEventListener('storage', onStorage);
      query.removeEventListener('change', onSystemChange);
    };
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    setDark(next);
    try { localStorage.setItem(preferenceKey, next ? 'dark' : 'light'); } catch { /* Theme stays active for this page. */ }
  };

  return <button
    type="button"
    onClick={toggle}
    aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    aria-pressed={dark}
    title={dark ? 'Light theme' : 'Dark theme'}
    className="grid size-10 shrink-0 place-items-center rounded border border-edge-strong bg-panel text-link transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
  >
    <Sun size={19} className="hidden dark:block" aria-hidden="true" />
    <Moon size={19} className="dark:hidden" aria-hidden="true" />
  </button>;
}
