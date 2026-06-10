/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function PromoStrip() {
  return (
    <section className="w-full bg-emerald-500/10 border border-emerald-500/20 rounded-xl py-3 px-4 mb-8 overflow-hidden">
      <div className="flex items-center gap-3">
        {/* Animated Lightning Tag */}
        <span className="text-emerald-400 text-lg select-none animate-pulse shrink-0">
          ⚡
        </span>
        <div className="flex-grow overflow-hidden whitespace-nowrap relative">
          <div className="inline-block animate-[marquee_25s_linear_infinite] pl-full text-xs font-bold text-emerald-400">
            RDP Server Mulai dari Rp 35.000! &nbsp;&nbsp;|&nbsp;&nbsp; Netflix Legal Garansi Full 30 Hari! &nbsp;&nbsp;|&nbsp;&nbsp; Free Ongkir Motor daerah JABODETABEK! &nbsp;&nbsp;|&nbsp;&nbsp; Nastar Premium Wisman Lumer & Manis! &nbsp;&nbsp;|&nbsp;&nbsp; Support Payment BRI, BCA, Mandiri, QRIS All Dompet Digital!
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
