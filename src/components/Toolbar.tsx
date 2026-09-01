import React from 'react';
import { BookOpen, Lightbulb, Moon, Sun, Type } from 'lucide-react';
import { AppTheme, FontDarkness } from '../lib/displaySettings';

interface ToolbarProps {
  theme?: AppTheme;
  onToggleTheme?: () => void;
  fontDarkness?: FontDarkness;
  onChangeFontDarkness?: (darkness: FontDarkness) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  theme = 'light',
  onToggleTheme,
  fontDarkness = 'bold',
  onChangeFontDarkness,
}) => {
  return (
    <div
      id="windows-toolbar"
      className="bg-[#f0f0f0] dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 select-none flex flex-wrap items-center justify-between px-3 py-1.5 text-xs text-slate-800 dark:text-slate-100 transition-colors gap-2"
    >
      <div className="flex items-center gap-2 flex-wrap">
        <button
          id="btn-visit-website"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-normal transition-all"
          onClick={() => {}}
        >
          <div className="w-4 h-4 bg-orange-500 rounded-xs flex items-center justify-center text-white">
            <BookOpen className="w-2.5 h-2.5" />
          </div>
          <span className="text-slate-800 dark:text-slate-200">Visit Website</span>
        </button>

        <button
          id="btn-typing-tips"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-normal transition-all"
          onClick={() => {}}
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span className="text-slate-800 dark:text-slate-200">Typing Tips</span>
        </button>

        <button
          id="btn-facebook"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-normal transition-all"
          onClick={() => {}}
        >
          <div className="w-4 h-4 bg-[#1877f2] rounded-xs flex items-center justify-center text-white font-bold text-[10px]">
            f
          </div>
          <span className="text-slate-800 dark:text-slate-200">Facebook</span>
        </button>

        <button
          id="btn-twitter"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-normal transition-all"
          onClick={() => {}}
        >
          <div className="w-4 h-4 bg-[#1da1f2] rounded-xs flex items-center justify-center text-white font-bold text-[10px]">
            t
          </div>
          <span className="text-slate-800 dark:text-slate-200">Twitter</span>
        </button>

        <button
          id="btn-google-plus"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-normal transition-all"
          onClick={() => {}}
        >
          <div className="w-4 h-4 bg-red-600 rounded-xs flex items-center justify-center text-white font-bold text-[9px]">
            g+
          </div>
          <span className="text-slate-800 dark:text-slate-200">Google Plus</span>
        </button>
      </div>

      {/* Right controls: Theme Toggle & Font Darkness option on Home screen */}
      <div className="flex items-center gap-2">
        {/* Font Darkness Selector */}
        {onChangeFontDarkness && (
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 shadow-2xs text-[11.5px]">
            <Type className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              Hindi Font:
            </span>
            <select
              id="select-font-darkness-toolbar"
              value={fontDarkness}
              onChange={(e) =>
                onChangeFontDarkness(e.target.value as FontDarkness)
              }
              className="bg-transparent text-slate-800 dark:text-slate-100 font-semibold cursor-pointer outline-none border-0 text-xs py-0.5"
            >
              <option value="normal" className="dark:bg-slate-800">
                Normal
              </option>
              <option value="medium" className="dark:bg-slate-800">
                Darker (Medium)
              </option>
              <option value="bold" className="dark:bg-slate-800">
                Bold (Dark) ⭐
              </option>
              <option value="extra" className="dark:bg-slate-800">
                Extra Dark (Deep Black)
              </option>
            </select>
          </div>
        )}

        {/* Dark/Light Mode Selector */}
        {onToggleTheme && (
          <button
            id="btn-toggle-theme"
            onClick={onToggleTheme}
            title={
              theme === 'dark'
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode'
            }
            className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-[12px] font-semibold text-slate-800 dark:text-amber-300 transition-all"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
