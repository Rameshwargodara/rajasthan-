import React from 'react';
import { X, HelpCircle } from 'lucide-react';

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
  const resultData = result || data;
  if (!isOpen || !resultData) return null;

  const handleRepeat = () => {
    if (onRestart) onRestart();
    else if (onRetry) onRetry();
    else if (onClose) onClose();
  };

  const handleNext = () => {
    if (onNextLesson) onNextLesson();
    else if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
    else if (onBackToHome) onBackToHome();
    else if (onRestart) onRestart();
  };

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

  return (
    <div
      id="godara-result-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4 backdrop-blur-[1px] select-none animate-in fade-in duration-150"
    >
      {/* Windows App Style Modal Window */}
      <div
        id="godara-result-window"
        className="bg-[#f0f0f0] dark:bg-slate-900 rounded-xs shadow-2xl border border-[#999999] dark:border-slate-700 w-full max-w-[700px] overflow-hidden flex flex-col text-slate-900 dark:text-slate-100 font-sans"
        style={{ minHeight: '520px' }}
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
        <div className="bg-[#e4e4e4] dark:bg-slate-800/80 px-2 pt-1 border-b border-[#cccccc] dark:border-slate-700 flex items-center">
          <div className="bg-white dark:bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-900 dark:text-slate-100 border-t border-l border-r border-[#cccccc] dark:border-slate-700 rounded-t-xs -mb-[1px] relative z-10 shadow-2xs">
            Result
          </div>
        </div>

        {/* Main Content Area (White Box with border) */}
        <div className="p-2 sm:p-3 flex-1 flex flex-col">
          <div className="bg-white dark:bg-slate-950 border border-[#cccccc] dark:border-slate-800 p-4 sm:p-6 flex-1 flex flex-col justify-between rounded-xs overflow-y-auto max-h-[72vh]">
            <div>
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
              <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-[12.5px] text-slate-900 dark:text-slate-100 font-normal px-2 sm:px-6">
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
                  <span className="font-medium">: {incorrectWords}</span>
                </div>
              </div>

              {/* Method 1 Section */}
              <div className="mt-5 px-2 sm:px-6">
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
                      <div>: {netWPM5} words per minute</div>
                      <div className="text-slate-600 dark:text-slate-400">
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
                      <div className="text-slate-600 dark:text-slate-400">
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
                    <span>: {accuracyFormatted}</span>
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
              <div className="mt-4 px-2 sm:px-6">
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
                      <div>: {netWPMWords} words per minute</div>
                      <div className="text-slate-600 dark:text-slate-400">
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
                      <div className="text-slate-600 dark:text-slate-400">
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
                    <span>: {accuracyFormatted}</span>
                  </div>

                  <div className="flex">
                    <span className="w-32 sm:w-36 text-slate-800 dark:text-slate-200 pl-4">
                      Backspace
                    </span>
                    <span>: {backspaceText}</span>
                  </div>
                </div>
              </div>
            </div>
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
              id="btn-next-lesson"
              onClick={handleNext}
              className="px-5 py-1 bg-[#e1e1e1] hover:bg-[#d0d0d0] dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xs border border-[#adadad] dark:border-slate-600 rounded-xs shadow-2xs font-normal cursor-pointer active:scale-98 transition-all"
            >
              {hasNextLesson ? 'Next>>' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
