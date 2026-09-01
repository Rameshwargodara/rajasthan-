import React from 'react';
import { Trophy, RotateCcw, ArrowRight, Award, CheckCircle2, XCircle, Clock, Zap, Target } from 'lucide-react';

export interface TypingResultData {
  lessonTitle: string;
  lessonId: number;
  language: 'hindi' | 'english';
  totalChars: number;
  correctChars: number;
  errorCount: number;
  elapsedSeconds: number;
  accuracy: number;
  // Method 1: Space-delimited words
  spaceWordsTotal: number;
  spaceWordsCorrect: number;
  grossWPMWords: number;
  netWPMWords: number;
  // Method 2: Standard 5.5 characters per word
  grossWPM55: number;
  netWPM55: number;
  backspaceCount: number;
}

interface ResultModalProps {
  isOpen: boolean;
  data: TypingResultData | null;
  onRetry: () => void;
  onNextLesson: () => void;
  onClose: () => void;
  hasNextLesson: boolean;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  data,
  onRetry,
  onNextLesson,
  onClose,
  hasNextLesson,
}) => {
  if (!isOpen || !data) return null;

  const minutes = Math.floor(data.elapsedSeconds / 60);
  const seconds = data.elapsedSeconds % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-300 w-full max-w-xl overflow-hidden">
        {/* Header with Trophy */}
        <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400/20 rounded-full border border-amber-300/40">
              <Trophy className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Lesson Completed!</h2>
              <p className="text-xs text-indigo-100">
                {data.lessonTitle} • {data.language === 'hindi' ? 'Hindi (KrutiDev)' : 'English'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-medium">
              Time: {timeFormatted}
            </span>
          </div>
        </div>

        {/* Speed Comparison: 2 Methods */}
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Method 1: Space-delimited Word Speed */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 relative overflow-hidden">
              <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-600" />
                Method 1: Word-by-Word (Space)
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <div>
                  <div className="text-2xl font-black text-amber-900 leading-none">
                    {data.netWPMWords} <span className="text-xs font-semibold text-amber-700">WPM</span>
                  </div>
                  <div className="text-[10.5px] font-medium text-amber-700 mt-0.5">
                    Net Speed (Right Words Only)
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-700">
                    {data.grossWPMWords} WPM
                  </div>
                  <div className="text-[10px] text-slate-500">Gross Speed</div>
                </div>
              </div>
              <div className="mt-2 text-[10.5px] text-amber-800/80 pt-1.5 border-t border-amber-200/60 flex justify-between">
                <span>Words: <strong>{data.spaceWordsCorrect}</strong> / {data.spaceWordsTotal}</span>
                <span>Wrong Words: <strong>{Math.max(0, data.spaceWordsTotal - data.spaceWordsCorrect)}</strong></span>
              </div>
            </div>

            {/* Method 2: Standard 5.5 Letters per Word */}
            <div className="bg-indigo-50/80 border border-indigo-200 rounded-lg p-3 relative overflow-hidden">
              <div className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-indigo-600" />
                Method 2: Standard 5.5 Chars/Word
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <div>
                  <div className="text-2xl font-black text-indigo-900 leading-none">
                    {data.netWPM55} <span className="text-xs font-semibold text-indigo-700">WPM</span>
                  </div>
                  <div className="text-[10.5px] font-medium text-indigo-700 mt-0.5">
                    Net Speed (5.5 Chars = 1 Word)
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-700">
                    {data.grossWPM55} WPM
                  </div>
                  <div className="text-[10px] text-slate-500">Gross Speed</div>
                </div>
              </div>
              <div className="mt-2 text-[10.5px] text-indigo-800/80 pt-1.5 border-t border-indigo-200/60 flex justify-between">
                <span>Characters: <strong>{data.correctChars}</strong> / {data.totalChars}</span>
                <span>Accuracy: <strong className="text-emerald-700">{data.accuracy}%</strong></span>
              </div>
            </div>
          </div>

          {/* Performance Breakdown Grid */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded p-2">
              <div className="text-slate-500 text-[10px]">Accuracy</div>
              <div className="text-base font-bold text-emerald-600 mt-0.5">{data.accuracy}%</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded p-2">
              <div className="text-slate-500 text-[10px]">Mistakes</div>
              <div className="text-base font-bold text-red-600 mt-0.5">{data.errorCount}</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded p-2">
              <div className="text-slate-500 text-[10px]">Keystrokes</div>
              <div className="text-base font-bold text-slate-800 mt-0.5">{data.totalChars}</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded p-2">
              <div className="text-slate-500 text-[10px]">Time Taken</div>
              <div className="text-base font-bold text-indigo-700 mt-0.5">{timeFormatted}</div>
            </div>
          </div>

          {/* Tips / Feedback */}
          <div className="bg-slate-50 border border-slate-200 rounded p-2.5 text-[11px] text-slate-600 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              {data.accuracy >= 95
                ? 'Excellent work! High accuracy builds smooth and consistent typing speed.'
                : data.accuracy >= 85
                ? 'Good effort! Focus on hitting the correct keys on the home row before accelerating.'
                : 'Keep practicing! Slower, accurate keystrokes will yield higher net speed on official tests.'}
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-slate-100 border-t border-slate-200 px-5 py-3 flex items-center justify-between">
          <button
            onClick={onRetry}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded text-xs font-medium text-slate-700 cursor-pointer"
            >
              Close
            </button>

            {hasNextLesson && (
              <button
                onClick={onNextLesson}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold shadow-xs cursor-pointer transition-colors"
              >
                <span>Next Exercise</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
