import React, { useState } from 'react';
import { PWAInstallButton } from './PWAInstallButton';

export const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus: { [key: string]: string[] } = {
    'Godara Typing Tutor': [
      'New Test',
      'Select Language',
      'Typing History & Results',
      'Change User Profile',
      'Preferences & Settings',
      'Exit',
    ],
    Social: [
      'Facebook Page',
      'Twitter Handle',
      'YouTube Channel',
      'Telegram Discussion Group',
    ],
    Activation: [
      'Enter Activation Key',
      'Check License Status',
      'Buy Full Version',
      'Renew Subscription',
    ],
    Help: [
      'Hindi Typing Guide',
      'English Typing Guide',
      'Keyboard Layouts Chart',
      'Video Tutorials',
      'Check for Updates',
      'About Godara Typing Tutor',
    ],
  };

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <div
      id="windows-menubar"
      className="bg-slate-50 border-b border-slate-200 select-none flex items-center justify-between px-1.5 h-7 text-xs text-slate-800 relative z-30 font-sans"
    >
      <div className="flex items-center">
        {Object.keys(menus).map((menuName) => (
          <div key={menuName} className="relative">
            <button
              id={`menu-item-${menuName.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleMenuClick(menuName)}
              className={`px-2.5 py-0.5 rounded-xs text-[11.5px] cursor-pointer hover:bg-sky-100 hover:text-sky-900 transition-colors ${
                activeMenu === menuName ? 'bg-sky-200 text-sky-950 font-medium' : ''
              }`}
            >
              {menuName}
            </button>

            {activeMenu === menuName && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setActiveMenu(null)}
                />
                <div
                  id={`dropdown-${menuName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="absolute left-0 top-full mt-0.5 w-56 bg-white border border-slate-300 shadow-lg rounded-xs py-1 z-50 text-[11.5px] text-slate-700 divide-y divide-slate-100"
                >
                  {menus[menuName].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMenu(null)}
                      className="w-full text-left px-3 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center pr-1">
        <PWAInstallButton />
      </div>
    </div>
  );
};

