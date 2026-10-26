'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowLeft, Sun, Moon, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  pinInput: string;
  setPinInput: (val: string) => void;
  handleLogin: (e: React.FormEvent) => void;
  pinError: boolean;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function AdminLogin({
  pinInput,
  setPinInput,
  handleLogin,
  pinError,
  isDarkMode,
  setIsDarkMode,
}: AdminLoginProps) {
  const router = useRouter();

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 relative ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-black'}`}>
      
      {/* TOP RIGHT THEME TOGGLE BUTTON */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-2 text-xs font-semibold shadow-sm ${
            isDarkMode 
              ? 'bg-[#171717] border-[#262626] text-yellow-400 hover:bg-[#222]' 
              : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
          }`}
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span className="hidden sm:inline">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      {/* LOGIN CARD CONTAINER */}
      <div className={`w-full max-w-md p-8 sm:p-10 rounded-3xl border shadow-2xl space-y-6 relative overflow-hidden transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#121212]/90 border-[#222222] shadow-black/50 backdrop-blur-xl' 
          : 'bg-white border-gray-200 shadow-gray-200/50'
      }`}>
        
        {/* DECORATIVE AMBIENT GLOW */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#59B292]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#59B292]/10 border border-[#59B292]/30 flex items-center justify-center text-[#59B292] shadow-inner">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Admin Studio</h1>
            <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Secure Enterprise Portfolio Gateway (Default PIN: 1234)
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label className={`text-xs font-semibold block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Security Access PIN
            </label>
            <div className="relative">
              <input 
                type="password"
                placeholder="••••"
                maxLength={10}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border text-center text-xl tracking-[0.3em] font-mono outline-none transition-all duration-200 focus:border-[#59B292] focus:ring-2 focus:ring-[#59B292]/20 ${
                  pinError 
                    ? 'border-red-500 bg-red-500/5' 
                    : isDarkMode 
                      ? 'bg-black/60 border-[#262626] text-white placeholder-gray-600' 
                      : 'bg-gray-50 border-gray-300 text-black placeholder-gray-400'
                }`}
              />
            </div>
            {pinError && (
              <p className="text-xs text-red-500 font-semibold text-center pt-1">
                Invalid PIN code. Try '1234'.
              </p>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 rounded-xl bg-[#59B292] text-black font-bold text-sm hover:opacity-90 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#59B292]/20 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Unlock Studio
          </button>
        </form>

        <div className="pt-2 text-center border-t border-gray-700/10">
          <button 
            onClick={() => router.push('/')} 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#59B292] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}