/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeDots, setActiveDots] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 320;
      const index = Math.round(scrollPosition / (cardWidth + 16));
      setActiveDots(index);
    }
  };

  const scrollToIdx = (idx: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 320;
      container.scrollTo({
        left: idx * (cardWidth + 16),
        behavior: 'smooth'
      });
      setActiveDots(idx);
    }
  };

  return (
    <section className="w-full flex flex-col mb-10 select-none">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white tracking-tight">Ulasan Pengunjung</h3>
        <p className="text-xs text-neutral-400">Testimoni otentik dari para pembeli setia kami</p>
      </div>

      <div className="relative w-full overflow-hidden py-1">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth"
        >
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="testimonial-card flex-shrink-0 snap-center w-[85%] max-w-[320px] bg-neutral-900 border border-white/5 rounded-2xl p-5 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* User Row Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    loading="lazy"
                  />
                  <div className="flex-grow">
                    <h5 className="text-sm font-bold text-neutral-100">{testi.name}</h5>
                    <p className="text-[10px] text-neutral-500">{testi.role}</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 shrink-0 select-none">
                    {Array.from({ length: testi.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Message Body */}
                <p className="text-xs text-neutral-300 leading-relaxed italic mb-4">
                  "{testi.quote}"
                </p>
              </div>

              {/* Product Badge Marker */}
              <span className="inline-block self-start text-[9px] font-black text-emerald-400 bg-emerald-400/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
                {testi.productBadge}
              </span>
            </div>
          ))}
        </div>

        {/* Sliders navigation progress indicators */}
        <div className="flex justify-center gap-2 mt-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIdx(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === activeDots ? 'w-4 bg-emerald-500' : 'w-1.5 bg-white/20'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
