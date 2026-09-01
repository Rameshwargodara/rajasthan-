import React from 'react';

export interface ModuleIconProps {
  top: [string, string];
  bottom: [string, string];
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const OrangeGridIcon: React.FC<ModuleIconProps> = ({
  top,
  bottom,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'w-10 h-10 text-[10px]' : 'w-12 h-12 text-xs';

  return (
    <div
      className={`${sizeClasses} bg-gradient-to-b from-[#f97316] to-[#ea580c] rounded-md p-0.5 shadow-sm border border-orange-600 grid grid-cols-2 grid-rows-2 gap-0.5 text-white font-bold select-none cursor-pointer transition-transform hover:scale-105 active:scale-95`}
    >
      <div className="bg-orange-500/90 flex items-center justify-center rounded-[2px] leading-none">
        {top[0]}
      </div>
      <div className="bg-orange-500/90 flex items-center justify-center rounded-[2px] leading-none">
        {top[1]}
      </div>
      <div className="bg-orange-500/90 flex items-center justify-center rounded-[2px] leading-none">
        {bottom[0]}
      </div>
      <div className="bg-orange-500/90 flex items-center justify-center rounded-[2px] leading-none">
        {bottom[1]}
      </div>
    </div>
  );
};

export const AllInOneStamp: React.FC<{ size?: number }> = ({ size = 48 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-full border-2 border-red-700 bg-red-50 p-1 shadow-sm select-none cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-dashed border-red-600 flex flex-col items-center justify-center text-center p-0.5">
        <span className="text-[7px] font-black tracking-tighter text-red-700 uppercase leading-[8px]">
          ★ ALL ★
        </span>
        <span className="text-[8px] font-black text-red-800 uppercase leading-[9px] bg-red-600 text-white px-1 rounded-xs my-0.5">
          IN ONE
        </span>
        <span className="text-[6px] font-bold text-red-700 leading-[7px]">
          TEST
        </span>
      </div>
    </div>
  );
};

export const SscEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-700 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-red-700 bg-red-800 flex flex-col items-center justify-center text-white">
        <div className="w-2.5 h-3 border-t-2 border-l-2 border-r-2 border-amber-300 rounded-t-sm flex items-center justify-center">
          <div className="w-1 h-1.5 bg-amber-400"></div>
        </div>
        <span className="text-[6px] font-black tracking-widest text-amber-300 mt-0.5 uppercase">
          SSC
        </span>
      </div>
    </div>
  );
};

export const BsfEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-slate-50 border border-slate-300 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div className="w-7 h-7 bg-blue-900 border-2 border-amber-400 rounded-full flex flex-col items-center justify-center shadow-inner">
          <div className="w-3 h-3 bg-amber-400 rounded-full flex items-center justify-center">
            <span className="text-[6px] font-black text-blue-950">BSF</span>
          </div>
        </div>
        <div className="absolute -bottom-0.5 bg-amber-500 text-slate-900 text-[5px] font-bold px-1 rounded-xs">
          DUTY
        </div>
      </div>
    </div>
  );
};

export const RrbEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-red-100 border border-red-800 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full bg-red-800 border border-amber-400 flex flex-col items-center justify-center text-white">
        <div className="w-4 h-4 rounded-full border border-amber-300 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        </div>
        <span className="text-[6px] font-bold text-amber-200 mt-0.5">RRB</span>
      </div>
    </div>
  );
};

export const HighCourtEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-amber-50 border border-amber-600 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-amber-800 bg-amber-900 flex flex-col items-center justify-center text-amber-200">
        <div className="w-3 h-2 border-b border-amber-300 flex justify-between px-0.5">
          <div className="w-0.5 h-2 bg-amber-300"></div>
          <div className="w-0.5 h-2 bg-amber-300"></div>
        </div>
        <span className="text-[5px] font-bold tracking-tighter mt-0.5">HIGH COURT</span>
      </div>
    </div>
  );
};

export const KeyboardIconBadge: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-slate-800 border border-slate-700 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-slate-900 border border-slate-600 flex flex-col items-center justify-center p-1">
        <div className="grid grid-cols-4 gap-0.5 w-full">
          <div className="h-1 bg-cyan-400 rounded-[1px]"></div>
          <div className="h-1 bg-cyan-400 rounded-[1px]"></div>
          <div className="h-1 bg-cyan-400 rounded-[1px]"></div>
          <div className="h-1 bg-cyan-400 rounded-[1px]"></div>
        </div>
        <div className="grid grid-cols-4 gap-0.5 w-full my-0.5">
          <div className="h-1 bg-amber-400 rounded-[1px]"></div>
          <div className="h-1 bg-amber-400 rounded-[1px]"></div>
          <div className="h-1 bg-amber-400 rounded-[1px]"></div>
          <div className="h-1 bg-amber-400 rounded-[1px]"></div>
        </div>
        <div className="w-4 h-1 bg-emerald-400 rounded-[1px]"></div>
      </div>
    </div>
  );
};

export const RsmssbEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-sky-50 border border-sky-600 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-sky-700 flex flex-col items-center justify-center text-white">
        <span className="text-[7px] font-black tracking-tight leading-tight">RSMSSB</span>
        <div className="w-4 h-0.5 bg-amber-400 mt-0.5"></div>
      </div>
    </div>
  );
};

export const DoitEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-emerald-50 border border-emerald-600 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-teal-800 flex flex-col items-center justify-center text-white">
        <span className="text-[6px] font-semibold text-emerald-300">Do</span>
        <span className="text-[8px] font-black leading-none text-white">IT</span>
      </div>
    </div>
  );
};

export const WordIconBadge: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-blue-50 border border-blue-300 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-[#185abd] flex items-center justify-center text-white font-bold shadow-inner">
        <span className="text-base font-black">W</span>
      </div>
    </div>
  );
};

export const ExcelIconBadge: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-green-50 border border-green-300 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-[#107c41] flex items-center justify-center text-white font-bold shadow-inner">
        <span className="text-base font-black">X</span>
      </div>
    </div>
  );
};

export const WordGreenBadge: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md bg-emerald-50 border border-emerald-300 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded bg-[#2e7d32] flex items-center justify-center text-white font-bold shadow-inner">
        <div className="w-5 h-5 border border-white/70 rounded-xs flex items-center justify-center">
          <div className="w-3 h-0.5 bg-white mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export const RajasthanGovtEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-amber-50 border border-amber-500 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full bg-amber-600 border border-amber-300 flex flex-col items-center justify-center text-white p-0.5">
        <div className="w-3 h-3 rounded-full bg-amber-700 border border-amber-200"></div>
        <span className="text-[5px] font-bold mt-0.5">RAJ</span>
      </div>
    </div>
  );
};

export const UpssscEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-slate-50 border border-slate-400 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-slate-500 bg-slate-100 flex flex-col items-center justify-center text-slate-800">
        <div className="w-3 h-3 border border-slate-600 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
        </div>
        <span className="text-[5px] font-extrabold text-slate-700">UPSSSC</span>
      </div>
    </div>
  );
};

export const UpPoliceShield: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-8 h-9 bg-gradient-to-b from-blue-900 via-blue-950 to-red-800 rounded-b-xl rounded-t-xs border-2 border-amber-400 flex flex-col items-center justify-center text-white shadow-sm p-0.5">
        <div className="w-3 h-2 border-b border-amber-300 flex justify-center items-center">
          <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
        </div>
        <span className="text-[5px] font-black text-amber-300 uppercase mt-0.5">POLICE</span>
      </div>
    </div>
  );
};

export const UppclEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-blue-50 border border-blue-600 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-blue-700 bg-blue-800 flex flex-col items-center justify-center text-white">
        <div className="w-3 h-3 rounded-full border border-amber-300 flex items-center justify-center">
          <span className="text-[6px] text-amber-300 font-bold">⚡</span>
        </div>
        <span className="text-[5px] font-black text-white">UPPCL</span>
      </div>
    </div>
  );
};

export const AhcEmblem: React.FC<{ size?: number }> = ({ size = 44 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-cyan-50 border border-cyan-700 shadow-sm p-1 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full h-full rounded-full border border-cyan-800 bg-sky-900 flex flex-col items-center justify-center text-cyan-200">
        <div className="w-3 h-2 border-b border-cyan-300 flex justify-between px-0.5">
          <div className="w-0.5 h-1.5 bg-cyan-300"></div>
          <div className="w-0.5 h-1.5 bg-cyan-300"></div>
        </div>
        <span className="text-[5px] font-bold tracking-tighter">AHC</span>
      </div>
    </div>
  );
};
