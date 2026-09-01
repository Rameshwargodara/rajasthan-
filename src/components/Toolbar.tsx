import React from 'react';
import { BookOpen, Lightbulb } from 'lucide-react';

export const Toolbar: React.FC = () => {
  return (
    <div
      id="windows-toolbar"
      className="bg-[#f0f0f0] border-b border-slate-300 select-none flex items-center gap-2 px-3 py-1.5 text-xs text-slate-800"
    >
      <button
        id="btn-visit-website"
        className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 cursor-pointer text-[12px] font-normal transition-all"
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-orange-500 rounded-xs flex items-center justify-center text-white">
          <BookOpen className="w-2.5 h-2.5" />
        </div>
        <span className="text-slate-800">Visit Website</span>
      </button>

      <button
        id="btn-typing-tips"
        className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 cursor-pointer text-[12px] font-normal transition-all"
        onClick={() => {}}
      >
        <Lightbulb className="w-4 h-4 text-amber-500" />
        <span className="text-slate-800">Typing Tips</span>
      </button>

      <button
        id="btn-facebook"
        className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 cursor-pointer text-[12px] font-normal transition-all"
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-[#1877f2] rounded-xs flex items-center justify-center text-white font-bold text-[10px]">
          f
        </div>
        <span className="text-slate-800">Facebook</span>
      </button>

      <button
        id="btn-twitter"
        className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 cursor-pointer text-[12px] font-normal transition-all"
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-[#1da1f2] rounded-xs flex items-center justify-center text-white font-bold text-[10px]">
          t
        </div>
        <span className="text-slate-800">Twitter</span>
      </button>

      <button
        id="btn-google-plus"
        className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-2xs hover:shadow-xs active:bg-slate-100 cursor-pointer text-[12px] font-normal transition-all"
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-red-600 rounded-xs flex items-center justify-center text-white font-bold text-[9px]">
          g+
        </div>
        <span className="text-slate-800">Google Plus</span>
      </button>
    </div>
  );
};
