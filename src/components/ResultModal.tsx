import React, { useState, useEffect, useRef } from 'react';
import { X, HelpCircle, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { EvaluatedWord } from '../lib/typingEvaluation';

export interface TypingResultData {
  lessonTitle: string;
  lessonId: number;
  language: 'hindi' | 'english';
  totalChars: number;
  correctChars: number;
  errorCount: number;
  elapsedSeconds: number;
  accuracy: number;
  // Method 1: 5 keystrokes = 1 word
  grossWPM5: number;
  netWPM5: number;
  grossKPM: number;
  grossKPH: number;
  netKPM: number;
  netKPH: number;
  // Method 2: Space-delimited words
  spaceWordsTotal: number;
  spaceWordsCorrect: number;
  spaceWordsIncorrect: number;
  grossWPMWords: number;
  netWPMWords: number;
  backspaceCount: number;
  // Typed paragraph and word evaluation
  typedParagraph?: string;
  evaluatedWords?: EvaluatedWord[];
}

export interface ResultModalProps {
  isOpen?: boolean;
  result?: TypingResultData | null;
  data?: TypingResultData | null;
  onRestart?: () => void;
  onRetry?: () => void;
  onNextLesson?: () => void;
  onClose?: () => void;
  onBackToHome?: () => void;
  hasNextLesson?: boolean;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  isOpen = true,
  result,
  data,
  onRestart,
  onRetry,
  onNextLesson,
  onClose,
  onBackToHome,
  hasNextLesson = true,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'paragraph'>('summary');
  const resultData = result || data;
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const isNextTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    isNextTriggeredRef.current = false;
  }, [isOpen]);

  if (!isOpen || !resultData) return null;

  const handleRepeat = () => {
    if (onRestart) onRestart();
    else if (onRetry) onRetry();
    else if (onClose) onClose();
  };

  const handleNext = () => {
    if (isNextTriggeredRef.current) return;
    isNextTriggeredRef.current = true;
    if (onNextLesson) onNextLesson();
    else if (onRestart) onRestart();
    else if (onRetry) onRetry();
    else if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
    else if (onBackToHome) onBackToHome();
    else if (onRestart) onRestart();
  };

  // Keyboard shortcut: Pressing ENTER key at the result screen starts the next test or lesson
  useEffect(() => {
    if (!isOpen) return;

    // Focus the Next button by default so it's visually active and responsive
    const timer = setTimeout(() => {
      nextBtnRef.current?.focus();
    }, 80);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isOpen, onNextLesson, onClose, onRestart, onRetry]);

  // Format Duration: "03 minutes 54 seconds"
  const minutes = Math.floor(resultData.elapsedSeconds / 60);
  const seconds = resultData.elapsedSeconds % 60;
  const durationText = `${String(minutes).padStart(2, '0')} minutes ${String(seconds).padStart(2, '0')} seconds`;

  const timeMinutes = Math.max(1 / 60, resultData.elapsedSeconds / 60);

  // Method 1 computations (5 characters per word)
  const grossWPM5 = resultData.grossWPM5 ?? Math.round((resultData.totalChars / 5) / timeMinutes);
  const netWPM5 = resultData.netWPM5 ?? Math.max(0, Math.round((resultData.correctChars / 5) / timeMinutes));
  const grossKPM = resultData.grossKPM ?? Math.round(resultData.totalChars / timeMinutes);
  const grossKPH = resultData.grossKPH ?? grossKPM * 60;
  const netKPM = resultData.netKPM ?? Math.round(resultData.correctChars / timeMinutes);
  const netKPH = resultData.netKPH ?? netKPM * 60;

  // Method 2 computations (space separated words)
  const totalWords = resultData.spaceWordsTotal ?? 0;
  const correctWords = resultData.spaceWordsCorrect ?? 0;
  const incorrectWords = resultData.spaceWordsIncorrect ?? Math.max(0, totalWords - correctWords);
  const grossWPMWords = resultData.grossWPMWords ?? Math.round(totalWords / timeMinutes);
  const netWPMWords = resultData.netWPMWords ?? Math.round(correctWords / timeMinutes);

  const accuracyFormatted = (
    resultData.totalChars > 0
      ? (resultData.correctChars / resultData.totalChars) * 100
      : 100
  ).toFixed(2) + '%';

  const backspaceText = `${resultData.backspaceCount ?? 0} times`;
  const evaluatedWords = resultData.evaluatedWords || [];

  return (
    <div
      id="godara-result-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4 backdrop-blur-[1px] select-none animate-in fade-in duration-150"
    >
      {/* Windows App Style Modal Window */}
      <div
        id="godara-result-window"
        className="bg-[#f0f0f0] dark:bg-slate-900 rounded-xs shadow-2xl border border-[#999999] dark:border-slate-700 w-full max-w-[760px] overflow-hidden flex flex-col text-slate-900 dark:text-slate-100 font-sans"
        style={{ minHeight: '540px' }}
      >
        {/* Title Bar */}
        <div className="bg-[#f6f6f6] dark:bg-slate-800 px-2.5 py-1 flex items-center justify-between border-b border-[#d4d4d4] dark:border-slate-700 select-none">
          <div className="flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200">
            {/* Book Icon */}
            <div className="w-3.5 h-3.5 bg-rose-600 rounded-2xs flex items-center justify-center text-[9px] text-white font-bold leading-none shadow-2xs">
              📖
            </div>
            <span className="font-normal text-[11.5px]">
              Result - Godara Typing Tutor
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {}}
              title="Help"
              className="w-5 h-4.5 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 rounded-2xs text-slate-700 dark:text-slate-300 text-xs transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" />
            </button>
            <button
              onClick={handleClose}
              title="Close"
              className="w-5 h-4.5 flex items-center justify-center hover:bg-red-600 hover:text-white rounded-2xs text-slate-700 dark:text-slate-300 text-xs transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="bg-[#e4e4e4] dark:bg-slate-800/80 px-2 pt-1 border-b border-[#cccccc] dark:border-slate-700 flex items-center gap-1">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1 text-[11px] font-medium border-t border-l border-r rounded-t-xs -mb-[1px] relative z-10 shadow-2xs cursor-pointer transition-colors ${
              activeTab === 'summary'
                ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-[#cccccc] dark:border-slate-700 font-semibold'
                : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900'
            }`}
          >
            Detailed Result
          </button>
          <button
            onClick={() => setActiveTab('paragraph')}
            className={`px-3 py-1 text-[11px] font-medium border-t border-l border-r rounded-t-xs -mb-[1px] relative z-10 shadow-2xs cursor-pointer flex items-center gap-1.5 transition-colors ${
              activeTab === 'paragraph'
                ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-[#cccccc] dark:border-slate-700 font-semibold'
                : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900'
            }`}
          >
            <span>Typed Paragraph & Mistakes</span>
            {incorrectWords > 0 ? (
              <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {incorrectWords}
              </span>
            ) : (
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                0
              </span>
            )}
          </button>
        </div>

        {/* Main Content Area (White Box with border) */}
        <div className="p-2 sm:p-3 flex-1 flex flex-col">
          <div className="bg-white dark:bg-slate-950 border border-[#cccccc] dark:border-slate-800 p-3 sm:p-5 flex-1 flex flex-col justify-between rounded-xs overflow-y-auto max-h-[72vh]">
            {activeTab === 'summary' ? (
              <div className="space-y-4">
                {/* Header Title in Green */}
                <div className="text-center">
                  <h2 className="text-[#16a34a] dark:text-emerald-400 font-bold text-base sm:text-lg tracking-tight">
                    Godara Typing Tutor
                  </h2>
                  <div className="text-center mt-1">
                    <span className="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 underline decoration-slate-800 dark:decoration-slate-200 font-medium">
                      Detailed Result as below
                    </span>
                  </div>
                </div>

                {/* Summary Stats 2-Column Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-[12.5px] text-slate-900 dark:text-slate-100 font-normal px-2 sm:px-6">
                  <div className="flex justify-between sm:justify-start">
                    <span className="w-44 text-slate-800 dark:text-slate-200">Test Duration</span>
                    <span className="font-medium">: {durationText}</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="w-44 text-slate-800 dark:text-slate-200">Total Words Typed</span>
                    <span className="font-medium">: {totalWords}</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="w-44 text-slate-800 dark:text-slate-200">Correct Words Typed</span>
                    <span className="font-medium">: {correctWords}</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="w-44 text-slate-800 dark:text-slate-200">Incorrect Words Typed</span>
                    <span className="font-medium text-red-600 dark:text-red-400">: {incorrectWords}</span>
                  </div>
                </div>

                {/* Method 1 Section */}
                <div className="px-2 sm:px-6 pt-1 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[11.5px] text-slate-800 dark:text-slate-200 font-medium">
                    Method 1{' '}
                    <span className="text-slate-500 dark:text-slate-400 italic text-[10.5px]">
                      (one word = 5 character or key strokes)
                    </span>
                  </div>

                  <div className="mt-1.5 space-y-1 text-xs sm:text-[12.5px] text-slate-900 dark:text-slate-100">
                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Net Speed
                      </span>
                      <div>
                        <div className="font-semibold text-emerald-700 dark:text-emerald-400">: {netWPM5} words per minute</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11.5px]">
                          : {netKPM} key strokes per minute{' '}
                          <span className="italic text-slate-500 dark:text-slate-400">
                            ({netKPH} per hour)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-1">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Gross Speed
                      </span>
                      <div>
                        <div>: {grossWPM5} words per minute</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11.5px]">
                          : {grossKPM} key strokes per minute{' '}
                          <span className="italic text-slate-500 dark:text-slate-400">
                            ({grossKPH} per hour)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Accuracy
                      </span>
                      <span className="font-semibold">: {accuracyFormatted}</span>
                    </div>

                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Backspace
                      </span>
                      <span>: {backspaceText}</span>
                    </div>
                  </div>
                </div>

                {/* Method 2 Section */}
                <div className="px-2 sm:px-6 pt-1 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[11.5px] text-slate-800 dark:text-slate-200 font-medium">
                    Method 2{' '}
                    <span className="text-slate-500 dark:text-slate-400 italic text-[10.5px]">
                      (one word = group of letters separated by space)
                    </span>
                  </div>

                  <div className="mt-1.5 space-y-1 text-xs sm:text-[12.5px] text-slate-900 dark:text-slate-100">
                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Net Speed
                      </span>
                      <div>
                        <div className="font-semibold text-emerald-700 dark:text-emerald-400">: {netWPMWords} words per minute</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11.5px]">
                          : {netKPM} key strokes per minute{' '}
                          <span className="italic text-slate-500 dark:text-slate-400">
                            ({netKPH} per hour)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-1">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Gross Speed
                      </span>
                      <div>
                        <div>: {grossWPMWords} words per minute</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11.5px]">
                          : {grossKPM} key strokes per minute{' '}
                          <span className="italic text-slate-500 dark:text-slate-400">
                            ({grossKPH} per hour)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Accuracy
                      </span>
                      <span className="font-semibold">: {accuracyFormatted}</span>
                    </div>

                    <div className="flex">
                      <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                        Backspace
                      </span>
                      <span>: {backspaceText}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Preview of Typed Paragraph at Bottom of Result */}
                {evaluatedWords.length > 0 && (
                  <div className="mt-3 px-2 sm:px-6 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        <span>Typed Paragraph (Mistakes in Red with [Right Word])</span>
                      </span>
                      <button
                        onClick={() => setActiveTab('paragraph')}
                        className="text-[11px] text-blue-600 hover:text-blue-800 underline font-medium cursor-pointer"
                      >
                        Expand View
                      </button>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs sm:text-[13px] leading-relaxed max-h-[160px] overflow-y-auto font-sans select-text">
                      {evaluatedWords.map((word, idx) => {
                        if (word.status === 'correct') {
                          return (
                            <span key={idx} className="text-slate-800 dark:text-slate-200 mr-1.5">
                              {word.typed}
                            </span>
                          );
                        }
                        return (
                          <span key={idx} className="inline-block mr-2 my-0.5">
                            <span className="text-red-600 dark:text-red-400 font-bold underline decoration-red-500 bg-red-100/80 dark:bg-red-950/70 px-1 py-0.5 rounded-2xs border border-red-300 dark:border-red-800">
                              {word.typed}
                            </span>{' '}
                            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                              [{word.expected || 'extra'}]
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Dedicated Tab: Full Typed Paragraph & Mistake Inspection */
              <div className="flex flex-col h-full space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Candidate Typed Paragraph Analysis</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Wrong typed words are displayed in <strong className="text-red-600">red color</strong> with the <strong className="text-emerald-700 dark:text-emerald-400">[right word]</strong> in brackets.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{correctWords} Correct</span>
                    </span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded font-semibold border border-red-200 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{incorrectWords} Mistakes</span>
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs sm:text-[14px] leading-loose overflow-y-auto font-sans select-text">
                  {evaluatedWords.length === 0 ? (
                    <div className="text-slate-400 italic text-center py-6">
                      No text was typed during this session.
                    </div>
                  ) : (
                    evaluatedWords.map((word, idx) => {
                      if (word.status === 'correct') {
                        return (
                          <span key={idx} className="text-slate-800 dark:text-slate-200 mr-1.5">
                            {word.typed}
                          </span>
                        );
                      }
                      return (
                        <span key={idx} className="inline-block mr-2 my-1">
                          <span className="text-red-600 dark:text-red-400 font-bold underline decoration-red-500 bg-red-100/90 dark:bg-red-950/80 px-1.5 py-0.5 rounded-2xs border border-red-300 dark:border-red-700 shadow-2xs">
                            {word.typed}
                          </span>{' '}
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-[13px] bg-emerald-50 dark:bg-emerald-950/40 px-1 py-0.5 rounded-2xs border border-emerald-200 dark:border-emerald-800">
                            [{word.expected || 'extra'}]
                          </span>
                        </span>
                      );
                    })
                  )}
                </div>

                <div className="p-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded text-[11px] text-blue-900 dark:text-blue-200 flex items-center justify-between">
                  <span>Accuracy: <strong>{accuracyFormatted}</strong> | Gross Speed: <strong>{grossWPM5} WPM</strong> | Net Speed: <strong>{netWPM5} WPM</strong></span>
                  <button
                    onClick={() => setActiveTab('summary')}
                    className="text-blue-700 dark:text-blue-300 hover:underline font-semibold cursor-pointer"
                  >
                    View Detailed Numbers
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Dialog Action Buttons */}
          <div className="mt-3 flex items-center justify-between px-1">
            <button
              id="btn-repeat-lesson"
              onClick={handleRepeat}
              className="px-5 py-1 bg-[#e1e1e1] hover:bg-[#d0d0d0] dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xs border border-[#adadad] dark:border-slate-600 rounded-xs shadow-2xs font-normal cursor-pointer active:scale-98 transition-all"
            >
              Repeat
            </button>

            <button
              ref={nextBtnRef}
              id="btn-next-lesson"
              onClick={handleNext}
              title="Start next test or lesson (Press Enter)"
              className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs border border-blue-700 rounded-xs shadow-2xs font-medium cursor-pointer active:scale-98 transition-all flex items-center gap-1.5 focus:outline-hidden focus:ring-2 focus:ring-blue-400"
            >
              <span>{hasNextLesson ? 'Next >>' : 'Next Test >>'}</span>
              <kbd className="text-[10px] bg-blue-700/90 px-1.5 py-0.2 rounded border border-blue-400/40 text-blue-100 font-mono font-normal tracking-tight">
                Enter ↵
              </kbd>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

