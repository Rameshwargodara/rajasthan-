import React from 'react';
import { TypingModule } from '../types';
import { X, FolderOpen, AlertCircle, ArrowLeft } from 'lucide-react';

interface LessonModalProps {
  module: TypingModule | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  module,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !module) return null;

  return (
    <div
      id="lesson-view-container"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-2xs p-4"
    >
      <div className="bg-white border border-slate-400 rounded-md shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col font-sans">
        {/* Windows style modal header */}
        <div className="bg-slate-100 border-b border-slate-300 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-800">
              {module.category} - {module.title}
            </span>
          </div>
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 hover:bg-slate-200 p-1 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Empty Lesson Container Area */}
        <div className="p-8 flex flex-col items-center justify-center text-center bg-slate-50 min-h-[280px]">
          <div className="w-16 h-16 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-inner">
            <FolderOpen className="w-8 h-8" />
          </div>

          <h3 className="text-base font-bold text-slate-900 mb-1">
            {module.title}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mb-6">
            Category: <span className="font-semibold text-slate-700">{module.category}</span>
            {module.subCategory && ` • ${module.subCategory}`}
          </p>

          <div className="bg-white border border-dashed border-slate-300 rounded-lg p-6 max-w-md w-full shadow-2xs">
            <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-semibold">Lessons List is Empty</span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed">
              No lessons have been added to this section yet. Waiting for you to provide the lesson text and exercises.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded text-xs font-medium text-slate-700 shadow-2xs cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold shadow-xs cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
