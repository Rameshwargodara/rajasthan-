import React from 'react';
import { getKeyboardRowsForLayout } from '../lib/krutiMapping';
import { TypingLayout } from '../lib/persistence';

interface KrutiKeyboardProps {
  activeKey: string;
  isBold?: boolean;
  selectedFont?: 'KrutiDev' | 'DevLys';
  layoutMode?: 'hindi' | 'english';
  layout?: TypingLayout;
}

export const KrutiKeyboard: React.FC<KrutiKeyboardProps> = ({
  activeKey,
  isBold = false,
  selectedFont = 'KrutiDev',
  layoutMode = 'hindi',
  layout = 'krutidev',
}) => {
  const rows = getKeyboardRowsForLayout(layout);

  // Determine key background color based on finger / position
  const getKeyColor = (keyObj: any, isActive: boolean) => {
    if (isActive) {
      // High-visibility vibrant golden amber with dark crisp text that never covers letters
      return 'bg-[#fbbf24] dark:bg-[#f59e0b] text-slate-950 font-black border-2 border-amber-100 dark:border-amber-300 ring-2 ring-amber-500 ring-offset-1 shadow-md z-10 scale-[1.04]';
    }

    if (keyObj.key === ' ') {
      return 'bg-[#d8dbdf] text-slate-700 hover:bg-slate-200 border-slate-400';
    }

    if (keyObj.isSpecial) {
      if (['Alt', 'AltRight'].includes(keyObj.key)) {
        return 'bg-[#86efac] text-slate-800 border-emerald-400'; // Light Green
      }
      return 'bg-[#fca5a5] text-slate-800 border-rose-300'; // Light Coral / Orange
    }

    switch (keyObj.finger) {
      case 'left-pinky':
      case 'right-pinky':
        return 'bg-[#fca5a5] text-slate-900 border-rose-300'; // Coral Pink/Orange
      case 'left-ring':
      case 'right-ring':
        return 'bg-[#bbf7d0] text-slate-900 border-emerald-300'; // Light Mint Green
      case 'left-middle':
      case 'right-middle':
        return 'bg-[#a7f3d0] text-slate-900 border-emerald-300'; // Greenish Cyan
      case 'left-index':
      case 'right-index':
        return 'bg-[#fef08a] text-slate-900 border-amber-300'; // Yellow/Gold
      case 'thumb':
        return 'bg-[#86efac] text-slate-900 border-emerald-400';
      default:
        return 'bg-[#fca5a5] text-slate-900 border-rose-300';
    }
  };

  const isCurrentKeyActive = (keyObj: any) => {
    if (!activeKey) return false;
    const lowerActive = activeKey.toLowerCase();
    const lowerKey = keyObj.key.toLowerCase();

    if (lowerActive === ' ' && (keyObj.key === ' ' || keyObj.key === 'Space')) {
      return true;
    }

    if (lowerKey === lowerActive) {
      return true;
    }

    if (keyObj.labelBottom?.toLowerCase() === lowerActive) {
      return true;
    }

    if (keyObj.labelTop?.toLowerCase() === lowerActive) {
      return true;
    }

    return false;
  };

  return (
    <div
      id="kruti-onscreen-keyboard"
      className="bg-[#6366f1] p-1.5 md:p-2 rounded shadow-md border border-indigo-700 max-w-[780px] mx-auto select-none overflow-x-auto"
    >
      <div className="flex flex-col gap-0.5 min-w-[660px]">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-0.5 justify-center">
            {row.map((k, colIdx) => {
              const active = isCurrentKeyActive(k);
              const colorClass = getKeyColor(k, active);

              return (
                <div
                  key={colIdx}
                  className={`${k.width} h-[32px] md:h-[34px] rounded-[3px] border shadow-2xs flex flex-col items-center justify-between px-1 py-0.5 transition-all text-xs cursor-default ${colorClass} ${
                    isBold ? 'font-bold' : ''
                  }`}
                >
                  {k.isSpecial ? (
                    <div className="h-full flex items-center justify-center font-semibold text-[10px]">
                      {k.labelBottom}
                    </div>
                  ) : layoutMode === 'english' ? (
                    <>
                      {/* English Layout: Shift character on top, main letter below */}
                      <div className="w-full flex justify-between text-[8px] leading-none opacity-75 font-mono">
                        <span>{k.labelTop !== k.labelBottom ? k.labelTop : ''}</span>
                        <span></span>
                      </div>
                      <div
                        className={`w-full flex items-center justify-center text-[13px] font-bold font-mono uppercase leading-tight ${
                          active ? 'text-slate-950 font-black' : ''
                        }`}
                      >
                        {k.labelBottom}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Hindi KrutiDev Layout: Top label (Shift / Hindi matra) */}
                      <div className="w-full flex justify-between px-0.5 text-[8.5px] leading-none">
                        <span
                          className={`font-mono text-[7.5px] ${
                            active ? 'text-slate-950 font-bold opacity-90' : 'opacity-75'
                          }`}
                        >
                          {k.labelTop}
                        </span>
                        <span
                          className={`text-[9.5px] ${
                            active ? 'text-slate-950 font-black' : 'font-semibold text-slate-800'
                          }`}
                          style={{ fontFamily: selectedFont }}
                        >
                          {k.hindiTop}
                        </span>
                      </div>

                      {/* Bottom label (Regular / Primary key) */}
                      <div className="w-full flex justify-between px-0.5 items-end text-[9px] leading-none">
                        <span
                          className={`text-[12.5px] leading-tight ${
                            active ? 'text-slate-950 font-black' : 'font-bold text-slate-900'
                          }`}
                          style={{ fontFamily: selectedFont }}
                        >
                          {k.hindiBottom || k.labelBottom}
                        </span>
                        <span
                          className={`text-[7.5px] font-mono uppercase ${
                            active ? 'text-slate-950 font-bold opacity-90' : 'opacity-75'
                          }`}
                        >
                          {k.labelBottom}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
