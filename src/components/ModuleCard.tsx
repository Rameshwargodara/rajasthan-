import React from 'react';
import { OrangeGridIcon } from './Badges';

interface ModuleCardProps {
  id: string;
  label: string;
  topLetters: [string, string];
  bottomLetters: [string, string];
  onClick: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  id,
  label,
  topLetters,
  bottomLetters,
  onClick,
}) => {
  return (
    <button
      id={`card-${id}`}
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-300 transition-all cursor-pointer group text-center select-none"
    >
      <div className="mb-1.5 transition-transform group-hover:scale-105">
        <OrangeGridIcon top={topLetters} bottom={bottomLetters} />
      </div>
      <span className="text-[11.5px] font-medium text-slate-800 group-hover:text-blue-700 leading-tight">
        {label}
      </span>
    </button>
  );
};
