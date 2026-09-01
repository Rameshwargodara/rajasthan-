import React from 'react';

interface ExamCardProps {
  id: string;
  label: string;
  badge: React.ReactNode;
  onClick: () => void;
}

export const ExamCard: React.FC<ExamCardProps> = ({
  id,
  label,
  badge,
  onClick,
}) => {
  return (
    <button
      id={`exam-${id}`}
      onClick={onClick}
      className="flex flex-col items-center justify-start p-1.5 rounded hover:bg-slate-50 border border-transparent hover:border-slate-300 transition-all cursor-pointer group text-center min-w-[70px] select-none"
    >
      <div className="mb-1.5 transition-transform group-hover:scale-105 flex items-center justify-center h-12">
        {badge}
      </div>
      <span className="text-[11px] font-medium text-slate-800 group-hover:text-blue-700 leading-tight max-w-[100px]">
        {label}
      </span>
    </button>
  );
};
