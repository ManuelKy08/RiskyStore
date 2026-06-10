/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { WA_API_NUMBER } from '../data';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isFav: boolean;
  onFavToggle: (productId: number) => void;
}

export default function ProductModal({ product, onClose, isFav, onFavToggle }: ProductModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number>(0);

  // Reset slider index when product changes
  useEffect(() => {
    setActiveSlide(0);
  }, [product]);

  if (!product) return null;

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 55) {
      handleNext();
    } else if (diff < -55) {
      handlePrev();
    }
  };

  // Highly customized conversion message builder for direct WhatsApp redirecting
  const handleOrderRedirect = () => {
    const message = `Halo Admin *Risky Store*! 👋

Saya tertarik dengan produk berkualitas tinggi berikut dari katalog:

📌 *Nama Produk*: ${product.name}
💰 *Harga*: ${product.priceStr}
🏷️ *Kategori*: ${product.category.toUpperCase()}

Apakah item ini ready/tersedia? Mohon dipandu untuk pengerjaan & prosedur transaksinya ya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_API_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-100 flex items-end md:items-center justify-center p-0 md:p-4">
      {/* Dynamic Backdrop blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal sheet */}
      <div 
        className="relative bg-neutral-950 border-t md:border border-white/10 w-full max-w-[650px] h-[90vh] md:h-[80vh] md:max-h-[750px] md:rounded-3xl rounded-t-3xl flex flex-col overflow-hidden z-10 shadow-[0_24px_50px_rgba(0,0,0,0.8)] animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      >
        {/* Close Button overlay */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-neutral-900/80 border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-red-500 hover:border-red-500 transition-all cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Body area */}
        <div className="flex-grow overflow-y-auto pb-24">
          
          {/* Gallery slide panel */}
          <div 
            className="relative w-full aspect-[4/3] bg-neutral-950 overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex h-full w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} pic ${idx + 1}`}
                  className="w-full h-full object-cover shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = product.fallbacks[idx] || product.fallbacks[0];
                  }}
                />
              ))}
            </div>

            {/* Navigation buttons inside modal gallery */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-neutral-900/80 border border-white/5 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-neutral-950 transition-all z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-neutral-900/80 border border-white/5 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-neutral-950 transition-all z-10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>

                {/* Bullets indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide ? 'w-4 bg-emerald-500' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Metadata Descriptions body */}
          <div className="p-5 md:p-6 select-none">
            
            {/* Category tag and favorite heart lock */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black tracking-widest text-emerald-400 uppercase">
                🏡 {product.category.toUpperCase()}
              </span>
              <button
                onClick={() => onFavToggle(product.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                  isFav 
                    ? 'bg-red-500/10 border-red-500/30 text-red-500' 
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
                aria-label="Daftarkan Favorit"
              >
                <Heart className={`w-5 h-5 transition-transform active:scale-75 ${isFav ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            {/* Title display */}
            <h2 className="text-lg md:text-xl font-black text-white leading-snug mb-3">
              {product.name}
            </h2>

            {/* Pricing Details */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xl font-extrabold text-emerald-400 font-mono tracking-wide">
                {product.priceStr}
              </span>
              {product.originalPriceStr && product.discount && (
                <>
                  <span className="text-sm text-neutral-500 line-through">
                    {product.originalPriceStr}
                  </span>
                  <span className="text-xs font-black text-red-400 bg-red-400/5 px-2 py-0.5 rounded">
                    -{product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Badges/Tags specifications */}
            {product.badge && (
              <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded mb-4 ${
                product.badge === 'Terlaris' 
                  ? 'bg-emerald-500 text-neutral-950' 
                  : product.badge === 'Promo' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {product.badge}
              </span>
            )}

            <div className="w-full h-px bg-white/10 my-4" />

            {/* Description list wrap */}
            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-100 mb-2">Description / Spesifikasi:</h4>
              <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Trust highlights banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900 border border-white/5">
                <span className="text-lg select-none shrink-0 text-emerald-400">🛡️</span>
                <div className="flex flex-col">
                  <h6 className="text-xs font-bold text-white">Garansi Full & Resmi</h6>
                  <p className="text-[10px] text-neutral-500">Amanah, legalitas terjamin penuh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900 border border-white/5">
                <span className="text-lg select-none shrink-0 text-emerald-400">⚡</span>
                <div className="flex flex-col">
                  <h6 className="text-xs font-bold text-white">Proses Super Kilat</h6>
                  <p className="text-[10px] text-neutral-500">Pengiriman instant & tepercaya</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sticky order trigger area at the bottom representing shoppee bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-neutral-950 border-t border-white/10 flex items-center justify-center z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.6)]">
          <button
            onClick={handleOrderRedirect}
            className="w-full h-12 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-neutral-950 text-sm font-black uppercase tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.922 9.922 0 0 0 1.332 4.977L2 22l5.132-1.347a9.92 9.92 0 0 0 4.877 1.336h.004c5.505 0 9.99-4.478 9.991-9.985A10.013 10.013 0 0 0 12.012 2zm5.794 14.153c-.32.903-1.854 1.76-2.551 1.838-.636.072-1.353.111-2.22-.174-3.524-1.157-5.786-4.739-5.962-4.97-.17-.229-1.428-1.9-1.428-3.626 0-1.727.904-2.58 1.229-2.925.325-.345.711-.431.947-.431.237 0 .474.004.68.013.22.01.55-.084.862.664.32.766 1.096 2.68 1.192 2.877.096.198.16.427.032.68-.128.253-.192.413-.385.636-.192.224-.405.498-.578.67-.193.19-.395.398-.171.782.224.385.992 1.637 2.128 2.65 1.464 1.305 2.695 1.71 3.082 1.902.385.192.61.16.837-.101.229-.26.98-1.144 1.241-1.53.26-.385.52-.32.875-.192.355.128 2.25 1.06 2.637 1.253.385.192.64.288.736.447.095.16.095.92-.224 1.823z"/>
            </svg>
            Order Sekarang via WhatsApp
          </button>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
      `}</style>
    </div>
  );
}
