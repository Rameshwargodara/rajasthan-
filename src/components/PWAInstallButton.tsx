import React from 'react';
import { Download, Monitor } from 'lucide-react';
import { usePWAInstall } from './usePWAInstall';

export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstalled, install } = usePWAInstall();

  if (isInstalled) {
    return null;
  }

  return (
    <button
      id="pwa-install-desktop-btn"
      onClick={install}
      title="Install as Windows Desktop App"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors border border-emerald-500 cursor-pointer ${className}`}
    >
      <Monitor className="w-3.5 h-3.5 text-emerald-100" />
      <span className="hidden sm:inline">Install Windows App</span>
      <span className="sm:hidden">Install</span>
      <Download className="w-3 h-3 text-emerald-200" />
    </button>
  );
};
