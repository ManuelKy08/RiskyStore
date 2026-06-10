/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { STORE_NAME } from '../data';

interface FooterProps {
  onCategorySelect: (catId: string) => void;
}

export default function Footer({ onCategorySelect }: FooterProps) {
  const handleCatClick = (e: React.MouseEvent, catId: string) => {
    e.preventDefault();
    onCategorySelect(catId);
    // Smooth scroll back to catalogues block
    const el = document.getElementById('catalogues');
    if (el) {
      const offsetTop = el.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-neutral-980 border-t border-white/5 pt-12 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Overlay */}
        <div className="flex flex-col md:col-span-2">
          <div className="flex items-center gap-3 select-none mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-neutral-950 font-black text-lg flex items-center justify-center shadow-md">
              RS
            </div>
            <h4 className="text-base font-black text-white tracking-widest uppercase">
              {STORE_NAME.split(' ')[0]}
              <span className="text-emerald-400">{STORE_NAME.split(' ')[1] || 'STORE'}</span>
            </h4>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-lg mb-4">
            Personal digital & physical marketplace terlengkap yang menyediakan berbagai kebutuhan server, RDP, VPS kencang, akun digital legal premium, motor berkualitas, hingga paket kuota internet dengan jaminan transaksi amanah, cepat, dan responsif langsung ke handphone Anda.
          </p>
        </div>

        {/* Quick Shortcut Lists */}
        <div className="flex flex-col">
          <h5 className="text-xs font-black uppercase text-neutral-100 tracking-wider mb-4">
            Kategori Terpopuler
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs text-neutral-400 font-bold">
            <li>
              <a
                href="#"
                onClick={(e) => handleCatClick(e, 'vps')}
                className="hover:text-emerald-400 transition"
              >
                Cloud VPS Server
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleCatClick(e, 'rdp')}
                className="hover:text-emerald-400 transition"
              >
                Windows Admin RDP
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleCatClick(e, 'motor')}
                className="hover:text-emerald-400 transition"
              >
                Motor Premium
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleCatClick(e, 'kue')}
                className="hover:text-emerald-400 transition"
              >
                Kue Nastar Premium
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleCatClick(e, 'akun')}
                className="hover:text-emerald-400 transition"
              >
                Akun Premium Netflix / Spotify
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Credits alignment */}
        <div className="md:col-span-3 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <p className="text-[10px] text-neutral-500 text-center sm:text-left leading-normal">
            &copy; 2026 <strong className="text-neutral-400">{STORE_NAME}</strong>. All Rights Reserved. Transaksi tepercaya dan responsif.
          </p>
          <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 border border-white/5 px-2.5 py-1 rounded">
            React SPA • Vite Applet • WhatsApp Secured
          </span>
        </div>

      </div>
    </footer>
  );
}
