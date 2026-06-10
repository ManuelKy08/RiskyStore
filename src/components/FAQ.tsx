/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full flex flex-col mb-10 select-none">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white tracking-tight">Sering Ditanyakan (FAQ)</h3>
        <p className="text-xs text-neutral-400">Informasi seputar cara kerja pelayanan toko kami</p>
      </div>

      <div className="flex flex-col gap-3 max-w-3xl mx-auto w-full">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Question Click bar */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-5 py-4 text-left font-bold text-sm text-neutral-100 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4.5 h-4.5 text-neutral-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'transform rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {/* Collapsed Answer container */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden`}
              >
                <p className="px-5 py-4 text-xs text-neutral-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
