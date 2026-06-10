/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, X } from 'lucide-react';
import { STORE_NAME } from '../data';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-neutral-950/90 backdrop-blur-xl border-b border-white/10 z-50 flex items-center shadow-lg transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0 select-none">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-neutral-950 font-black text-xl flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.3)] transform transition hover:scale-105">
            RS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-wider text-white uppercase leading-none">
              {STORE_NAME.split(' ')[0]}
            </span>
            <span className="text-sm font-black tracking-wider text-emerald-400 uppercase leading-tight">
              {STORE_NAME.split(' ')[1] || 'STORE'}
            </span>
          </div>
        </div>

        {/* Live Search Box */}
        <div className="relative flex-grow max-w-[500px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari VPS, RDP, Akun, Motor, Kue..."
            autoComplete="off"
            className="w-full h-11 bg-neutral-900 border border-white/10 rounded-full pl-12 pr-12 text-sm text-neutral-100 placeholder-neutral-500 transition-all focus:border-emerald-500 focus:bg-neutral-900/40 focus:ring-2 focus:ring-emerald-500/20"
          />
          {searchQuery && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Hapus Pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
