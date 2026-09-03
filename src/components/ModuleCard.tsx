import React from 'react';
import { OrangeGridIcon } from './Badges';

interface ModuleCardProps {
  id: string;
  label: string;
  topLetters: [string, string];
  bottomLetters: [string, string];
  onClick: () => void;
  progressPercent?: number;
  lastLesson?: number;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  id,
  label,
  topLetters,
  bottomLetters,
  onClick,
  progressPercent,
  lastLesson,
}) => {
  return (
    <button
      id={`card-${id}`}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer group text-center select-none"
    >
      {progressPercent !== undefined && progressPercent > 0 && (
        <span className="absolute top-1 right-1 px-1 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[9px] font-bold rounded-full border border-emerald-300 dark:border-emerald-700 shadow-2xs">
          {progressPercent}%
        </span>
      )}
      <div className="mb-1.5 transition-transform group-hover:scale-105">
        <OrangeGridIcon top={topLetters} bottom={bottomLetters} />
      </div>
      <span className="text-[11.5px] font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 leading-tight">
        {label}
      </span>
      {lastLesson !== undefined && lastLesson > 1 && (
        <span className="text-[9.5px] text-slate-500 dark:text-slate-400 mt-0.5">
          Ex {lastLesson}
        </span>
      )}
    </button>
  );
};
