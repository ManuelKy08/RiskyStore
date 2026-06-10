/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CATEGORIES } from '../data';

interface CategoryPillsProps {
  selectedCategory: string;
  setSelectedCategory: (categoryId: string) => void;
}

export default function CategoryPills({ selectedCategory, setSelectedCategory }: CategoryPillsProps) {
  return (
    <section className="w-full flex flex-col mb-6">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-white tracking-tight">Kategori Produk</h3>
        <p className="text-xs text-neutral-400">Pilih kategori produk digital & fisik pilihan terbaik</p>
      </div>

      <div className="w-full flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x scroll-smooth">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 snap-start flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                  : 'bg-neutral-900 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
              }`}
            >
              <span className="text-sm select-none">{category.icon}</span>
              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
