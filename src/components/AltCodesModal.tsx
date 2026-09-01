import React from 'react';
import { KRUTI_ALT_CODES } from '../lib/krutiMapping';
import { X, KeyRound } from 'lucide-react';

interface AltCodesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AltCodesModal: React.FC<AltCodesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="alt-codes-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-2xs p-4"
    >
      <div className="bg-white border border-slate-400 rounded-md shadow-2xl w-full max-w-lg overflow-hidden flex flex-col font-sans">
        <div className="bg-slate-100 border-b border-slate-300 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold text-slate-800">
              KrutiDev / DevLys Hindi Alt Codes
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 hover:bg-slate-200 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 max-h-[420px] overflow-y-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-slate-700">
                <th className="py-2 px-3 font-semibold">Alt Code</th>
                <th className="py-2 px-3 font-semibold text-center">Character</th>
                <th className="py-2 px-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {KRUTI_ALT_CODES.map((item, idx) => (
                <tr key={idx} className="hover:bg-amber-50/60">
                  <td className="py-2 px-3 font-mono font-bold text-blue-700">
                    {item.code}
                  </td>
                  <td className="py-2 px-3 text-center text-lg font-bold text-slate-900">
                    {item.char}
                  </td>
                  <td className="py-2 px-3 text-slate-600">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-100 border-t border-slate-200 px-4 py-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
