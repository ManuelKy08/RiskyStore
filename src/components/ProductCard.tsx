/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  isFav: boolean;
  onFavToggle: (productId: number) => void;
  onOpenDetails: (productId: number) => void;
}

export default function ProductCard({ product, isFav, onFavToggle, onOpenDetails }: ProductCardProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const currentImgUrl = product.images[activeImageIdx] || product.fallbacks[0];

  return (
    <div className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-2xl">
      {/* Product Image Stage */}
      <div className="relative w-full aspect-square bg-neutral-950 overflow-hidden select-none">
        {/* Dynamic Badges */}
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
            product.badge === 'Terlaris' 
              ? 'bg-emerald-500 text-neutral-950 shadow-[0_2px_8px_rgba(16,185,129,0.3)]' 
              : product.badge === 'Promo' 
              ? 'bg-red-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Favorite heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavToggle(product.id);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
            isFav 
              ? 'bg-red-500/10 border-red-500/30 text-red-500' 
              : 'bg-neutral-950/60 border-white/10 text-neutral-400 hover:bg-neutral-950/80 hover:text-white'
          }`}
          aria-label="Suka Produk"
        >
          <Heart className={`w-4.5 h-4.5 transition-transform active:scale-75 ${isFav ? 'fill-red-500' : ''}`} />
        </button>

        {/* Banner Images display */}
        <div 
          onClick={() => onOpenDetails(product.id)}
          className="w-full h-full cursor-pointer transition-all duration-500 ease-in-out"
        >
          <img
            src={currentImgUrl}
            alt={`${product.name} - ${activeImageIdx + 1}`}
            loading="lazy"
            className="w-full h-full object-cover select-none"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = product.fallbacks[activeImageIdx] || product.fallbacks[0];
            }}
          />
        </div>

        {/* Left/Right controls (when multiple images are defined) */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-neutral-950/70 border border-white/5 text-neutral-300 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-neutral-950 transition-all z-10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-4 h-4 pointer-events-none" />
            </button>
            <button
              onClick={handleNextImg}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-neutral-950/70 border border-white/5 text-neutral-300 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-neutral-950 transition-all z-10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-4 h-4 pointer-events-none" />
            </button>

            {/* Slider progress bullets */}
            <div className="absolute bottom-2.5 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-1 z-10 pointer-events-none">
              {product.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all ${
                    idx === activeImageIdx ? 'w-3 bg-emerald-500' : 'w-1 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Metadata */}
      <div className="p-4 flex flex-col flex-grow select-none">
        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1.5 opacity-90">
          🏡 {product.category}
        </span>
        
        <h4 
          onClick={() => onOpenDetails(product.id)}
          className="text-sm font-bold text-neutral-100 tracking-tight leading-snug cursor-pointer line-clamp-2 h-10 mb-3 hover:text-emerald-400 transition"
        >
          {product.name}
        </h4>

        <div className="flex flex-col mt-auto mb-4">
          <span className="text-base font-black text-emerald-400 font-mono tracking-wide leading-none">
            {product.priceStr}
          </span>
          {product.originalPriceStr && product.discount && (
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-xs text-neutral-500 line-through">
                {product.originalPriceStr}
              </span>
              <span className="text-[10px] font-black text-red-400 bg-red-400/5 px-1.5 py-0.5 rounded">
                -{product.discount}%
              </span>
            </div>
          )}
        </div>

        {/* Direct WhatsApp detailed inquiry call */}
        <button
          onClick={() => onOpenDetails(product.id)}
          className="w-full h-10 bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 border border-white/5 hover:border-emerald-500 active:scale-97 text-neutral-200 text-xs font-black uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.922 9.922 0 0 0 1.332 4.977L2 22l5.132-1.347a9.92 9.92 0 0 0 4.877 1.336h.004c5.505 0 9.99-4.478 9.991-9.985A10.013 10.013 0 0 0 12.012 2zm5.794 14.153c-.32.903-1.854 1.76-2.551 1.838-.636.072-1.353.111-2.22-.174-3.524-1.157-5.786-4.739-5.962-4.97-.17-.229-1.428-1.9-1.428-3.626 0-1.727.904-2.58 1.229-2.925.325-.345.711-.431.947-.431.237 0 .474.004.68.013.22.01.55-.084.862.664.32.766 1.096 2.68 1.192 2.877.096.198.16.427.032.68-.128.253-.192.413-.385.636-.192.224-.405.498-.578.67-.193.19-.395.398-.171.782.224.385.992 1.637 2.128 2.65 1.464 1.305 2.695 1.71 3.082 1.902.385.192.61.16.837-.101.229-.26.98-1.144 1.241-1.53.26-.385.52-.32.875-.192.355.128 2.25 1.06 2.637 1.253.385.192.64.288.736.447.095.16.095.92-.224 1.823z"/>
          </svg>
          Minta Detail / Beli
        </button>
      </div>
    </div>
  );
}
