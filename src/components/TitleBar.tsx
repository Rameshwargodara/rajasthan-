import React from 'react';
import { BookOpen, Minus, Square, X } from 'lucide-react';

interface TitleBarProps {
  title?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  title = 'Soni Typing Tutor 5.1.168',
}) => {
  return (
    <div
      id="windows-titlebar"
      className="bg-white border-b border-slate-200 select-none flex items-center justify-between px-2 h-7 text-xs text-slate-800"
    >
      <div className="flex items-center gap-1.5 font-normal">
        <div className="w-4 h-4 bg-orange-500 rounded-[2px] flex items-center justify-center text-white text-[9px] shadow-xs">
          <BookOpen className="w-3 h-3" />
        </div>
        <span className="text-[11.5px] font-medium tracking-tight text-slate-900">
          {title}
        </span>
      </div>

      <div className="flex items-center -mr-2 h-full">
        <button
          id="btn-window-minimize"
          title="Minimize"
          className="h-full px-3 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
          onClick={() => {}}
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <button
          id="btn-window-maximize"
          title="Maximize"
          className="h-full px-3 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
          onClick={() => {}}
        >
          <Square className="w-3 h-3" />
        </button>
        <button
          id="btn-window-close"
          title="Close"
          className="h-full px-3 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-600 transition-colors"
          onClick={() => {}}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
