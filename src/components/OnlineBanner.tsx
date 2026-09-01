import React from 'react';

interface OnlineBannerProps {
  onOpenLiveTests?: () => void;
  onOpenStenoTests?: () => void;
}

export const OnlineBanner: React.FC<OnlineBannerProps> = ({
  onOpenLiveTests,
  onOpenStenoTests,
}) => {
  return (
    <div
      id="online-typing-test-banner"
      className="bg-[#f5f5f5] border-b border-slate-300 px-4 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 select-none"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-red-600 font-bold text-xs">New</span>
          <h2 className="text-sm font-bold text-slate-900">Online Typing Test</h2>
          <button
            onClick={() => {}}
            className="text-blue-600 hover:text-blue-800 text-xs hover:underline cursor-pointer ml-4 font-medium"
          >
            Soni Typing's Phone App
          </button>
        </div>
        <p className="text-[12px] text-slate-700 font-normal mt-0.5 leading-snug">
          ऑनलाइन टाइपिंग टेस्ट लीजिए और अपनी रैंक और टाइपिंग स्पीड अन्य विद्यार्थियों के साथ तुलना कीजिए. ऑनलाइन टेस्ट के लिए इन्टरनेट से जुड़ा होना आवश्यक है.
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
        <button
          id="btn-live-tests"
          onClick={onOpenLiveTests}
          className="bg-gradient-to-b from-[#818cf8] to-[#6366f1] hover:from-[#6366f1] hover:to-[#4f46e5] text-white px-4 py-1.5 rounded-sm text-xs font-semibold shadow-xs cursor-pointer active:scale-95 transition-all"
        >
          Live Tests
        </button>
        <button
          id="btn-stenography-tests"
          onClick={onOpenStenoTests}
          className="bg-gradient-to-b from-[#818cf8] to-[#6366f1] hover:from-[#6366f1] hover:to-[#4f46e5] text-white px-4 py-1.5 rounded-sm text-xs font-semibold shadow-xs cursor-pointer active:scale-95 transition-all"
        >
          Stenography Tests
        </button>
      </div>
    </div>
  );
};
