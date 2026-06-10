/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WA_API_NUMBER } from '../data';

interface Slide {
  tag: string;
  title: string;
  desc: string;
  bgUrl: string;
  waText: string;
  btnLabel: string;
}

const SLIDES: Slide[] = [
  {
    tag: "EXCLUSIVE SERVER DEALS",
    title: "VPS & RDP Cloud Premium",
    desc: "Infrastruktur server cloud andal berbasis Google Cloud, AWS, dan Azure dengan proteksi ganda DDOS dan jaminan Uptime 99.9%.",
    bgUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    waText: "Halo Admin Risky Store, saya tertarik dengan layanan Cloud VPS/RDP Premium Anda!",
    btnLabel: "Hubungi Admin Server"
  },
  {
    tag: "AUTOMOTIVE SPECIALIST",
    title: "Unit Motor Impian Berkualitas",
    desc: "Pembelian motor baru & bekas berkualitas tinggi dengan prosedur sangat transparan, cicilan terjangkau, dan free ongkir.",
    bgUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    waText: "Halo Admin Risky Store, saya ingin bertanya tentang Unit Motor yang tersedia saat ini!",
    btnLabel: "Tanya Stok Motor"
  },
  {
    tag: "DIGITAL ACCOUNT SAVINGS",
    title: "Akun Netflix & Spotify Legal",
    desc: "Nikmati hiburan tanpa limitasi dengan akun premium bergaransi penuh, pengerjaan secepat kilat (5-10 menit), dan harga termurah.",
    bgUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1200&auto=format&fit=crop",
    waText: "Halo Admin Risky Store, saya berminat order Akun Hiburan Netflix / Spotify Premium!",
    btnLabel: "Pesan Akun Instan"
  }
];

export default function HeroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startAutoSlide();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    startAutoSlide();
  };

  const handleWAInquiry = (waText: string) => {
    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/${WA_API_NUMBER}?text=${encoded}`, '_blank');
  };

  // Swiping support state
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // swipe left -> next slide
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    } else if (diff < -50) {
      // swipe right -> prev slide
      setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
    startAutoSlide();
  };

  return (
    <section 
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden aspect-[21/9] min-h-[300px] bg-neutral-900 border border-white/5 shadow-2xl group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out flex items-end ${
              idx === activeIdx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.2) 0%, rgba(15,15,15,0.95) 100%), url('${slide.bgUrl}')`
            }}
          >
            {/* Slide Content Overlay */}
            <div className="p-6 md:p-10 lg:p-12 w-full max-w-2xl transform translate-y-0 transition-all duration-700 delay-100">
              <span className="inline-block bg-emerald-500 text-neutral-950 text-[10px] md:text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2 tracking-widest leading-none">
                {slide.tag}
              </span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-neutral-300 mb-5 leading-relaxed line-clamp-2 drop-shadow">
                {slide.desc}
              </p>
              <button
                onClick={() => handleWAInquiry(slide.waText)}
                className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-neutral-950 text-xs md:text-sm font-extrabold py-3 px-6 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                {slide.btnLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-neutral-950 transition-all z-20 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 pointer-events-none" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-neutral-950 transition-all z-20 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 pointer-events-none" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 right-6 md:right-10 flex gap-2 z-25">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIdx(idx);
              startAutoSlide();
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === activeIdx ? 'w-6 bg-emerald-500' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
