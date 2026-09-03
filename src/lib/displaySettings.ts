import { useState, useEffect } from 'react';

export type AppTheme = 'light' | 'dark';
export type FontDarkness = 'normal' | 'medium' | 'bold' | 'extra';

export interface DisplaySettings {
  theme: AppTheme;
  fontDarkness: FontDarkness;
}

const THEME_KEY = 'godara_typing_theme';
const DARKNESS_KEY = 'godara_typing_font_darkness';

export const getStoredTheme = (): AppTheme => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(THEME_KEY);
  return saved === 'dark' ? 'dark' : 'light';
};

export const getStoredFontDarkness = (): FontDarkness => {
  if (typeof window === 'undefined') return 'bold';
  const saved = localStorage.getItem(DARKNESS_KEY) as FontDarkness;
  if (saved && ['normal', 'medium', 'bold', 'extra'].includes(saved)) {
    return saved;
  }
  return 'bold'; // Default to bold/dark for high contrast Hindi reading
};

export const applyThemeToDOM = (theme: AppTheme) => {
  if (typeof document !== 'undefined') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }
};

export const getFontDarknessStyle = (darkness: FontDarkness) => {
  switch (darkness) {
    case 'normal':
      return {
        className: 'font-normal text-slate-800 dark:text-slate-100',
        cssStyle: { fontWeight: 400 },
      };
    case 'medium':
      return {
        className: 'font-medium text-slate-900 dark:text-white',
        cssStyle: { fontWeight: 550, textShadow: '0 0.15px 0 currentColor' },
      };
    case 'bold':
      return {
        className: 'font-bold text-black dark:text-white',
        cssStyle: { fontWeight: 700, textShadow: '0 0.25px 0 currentColor' },
      };
    case 'extra':
      return {
        className: 'font-extrabold text-black dark:text-white',
        cssStyle: {
          fontWeight: 900,
          textShadow: '0 0.35px 0 currentColor, 0.35px 0 0 currentColor',
          WebkitTextStroke: '0.35px currentColor',
        },
      };
    default:
      return {
        className: 'font-bold text-black dark:text-white',
        cssStyle: { fontWeight: 700 },
      };
  }
};


