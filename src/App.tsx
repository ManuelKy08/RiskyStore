/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Grid, 
  Heart, 
  MessageSquare, 
  ArrowUp, 
  Trash2, 
  Sparkles, 
  Filter, 
  ArrowUpDown, 
  AlertCircle 
} from 'lucide-react';

import { Product } from './types';
import { PRODUCTS, WA_API_NUMBER, STORE_NAME } from './data';

// Modular layouts
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategoryPills from './components/CategoryPills';
import PromoStrip from './components/PromoStrip';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('riskyStore_favs');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleBackToTop, setVisibleBackToTop] = useState(false);
  const [activeBottomNav, setActiveBottomNav] = useState('home');
  const [appMounted, setAppMounted] = useState(false);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('riskyStore_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Handle splash/preloader simulation for native feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Monitor window scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 400) {
        setVisibleBackToTop(true);
      } else {
        setVisibleBackToTop(false);
      }

      // Sync active section with bottom nav
      const scrollY = window.scrollY;
      const homeEl = document.getElementById('home-sec');
      const catalogEl = document.getElementById('catalogues');
      const witnessEl = document.getElementById('reviews-sec');

      if (witnessEl && scrollY >= witnessEl.offsetTop - 150) {
        setActiveBottomNav('ulasan');
      } else if (catalogEl && scrollY >= catalogEl.offsetTop - 150) {
        setActiveBottomNav('kategori');
      } else if (homeEl) {
        setActiveBottomNav('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFavToggle = (id: number) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleClearFavorites = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua produk favorit Anda?')) {
      setFavorites([]);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('semua');
    setSortBy('default');
  };

  const handleBottomNavClick = (sectionId: string, navKey: string) => {
    setActiveBottomNav(navKey);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 85;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else if (navKey === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGeneralChat = () => {
    const text = encodeURIComponent('Halo Admin Risky Store! Saya butuh bantuan untuk konsultasi produk.');
    window.open(`https://wa.me/${WA_API_NUMBER}?text=${text}`, '_blank');
  };

  // Filter Catalog Core logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'semua' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return a.id - b.id; // recommendation sorted by id
  });

  const favoritedProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className={`relative min-h-screen bg-neutral-950 text-neutral-100 transition-opacity duration-500 overflow-x-hidden ${appMounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Preloader splash */}
      {!appMounted && (
        <div className="fixed inset-0 z-5000 bg-neutral-950 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-neutral-950 text-2xl font-black flex items-center justify-center animate-bounce shadow-[0_4px_30px_rgba(16,185,129,0.4)] mb-4">
            RS
          </div>
          <h1 className="text-xl font-black text-white uppercase tracking-wider">
            {STORE_NAME.split(' ')[0]}<span className="text-emerald-400">{STORE_NAME.split(' ')[1] || 'STORE'}</span>
          </h1>
          <p className="text-xs text-neutral-500 mt-1 select-none">Premium Digital Marketplace</p>
          <div className="w-40 h-1 bg-neutral-900 rounded-full overflow-hidden mt-6">
            <div className="h-full bg-emerald-500 animate-[pulse_1.5s_infinite_ease-in-out]" style={{ width: '60%' }}></div>
          </div>
        </div>
      )}

      {/* Main sticky top header navigation */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Primary body element */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16 flex flex-col">
        
        {/* Banner sliding area */}
        <div id="home-sec" className="w-full mb-8">
          <HeroSlider />
        </div>

        {/* Categories horizontally scrollable selector bar */}
        <CategoryPills 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        {/* Dynamic hot promotional strip banner */}
        <PromoStrip />

        {/* FAVORITES SHELF SECTION (Only visible if favorites exist) */}
        {favorites.length > 0 && (
          <section id="favorites-sec" className="w-full bg-neutral-900/40 border border-dashed border-white/10 rounded-2xl p-5 mb-8">
            <div className="flex items-center justify-between mb-4 select-none">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm md:text-base">
                <Heart className="w-5 h-5 fill-current shrink-0" />
                <h3>Daftar Favorit Anda ({favorites.length})</h3>
              </div>
              <button
                onClick={handleClearFavorites}
                className="text-xs font-black text-red-500 hover:text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Hapus Semua
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {favoritedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-neutral-950 rounded-xl overflow-hidden border border-white/5 p-3 flex flex-col hover:border-neutral-700 transition"
                >
                  <img
                    onClick={() => setSelectedProduct(product)}
                    src={product.images[0] || product.fallbacks[0]}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-col mt-2.5">
                    <span className="text-[9px] font-black uppercase text-emerald-400">{product.category}</span>
                    <h5 
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-bold text-neutral-200 mt-1 cursor-pointer line-clamp-1 hover:text-emerald-400 transition"
                    >
                      {product.name}
                    </h5>
                    <span className="text-xs font-bold font-mono text-emerald-400 mt-2">{product.priceStr}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CORE PRODUCT CATALOG GRID */}
        <section id="catalogues" className="w-full flex flex-col mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 select-none">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                Katalog Unggulan
                <Sparkles className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
              </h3>
              <p className="text-xs text-neutral-400">
                Menampilkan {filteredProducts.length} produk pilihan terbaik
              </p>
            </div>

            {/* Price/Name Sorters */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Urutkan:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-neutral-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="default">Rekomendasi</option>
                <option value="price-asc">Harga Terendah</option>
                <option value="price-desc">Harga Tertinggi</option>
                <option value="name-asc">Nama A-Z</option>
              </select>
            </div>
          </div>

          {/* Empty filtered states */}
          {filteredProducts.length === 0 ? (
            <div className="w-full py-12 px-6 bg-neutral-900 border border-white/5 rounded-2xl text-center flex flex-col items-center justify-center select-none">
              <AlertCircle className="w-10 h-10 text-neutral-500 mb-3 shrink-0" />
              <h4 className="text-sm font-bold text-neutral-200">Produk Tidak Ditemukan</h4>
              <p className="text-xs text-neutral-500 mt-1 max-w-sm mb-4">
                Silakan coba gunakan kata kunci pencarian yang lain atau reset filter kategori terpilih.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 text-xs font-black py-2.5 px-6 rounded-full transition-all cursor-pointer"
              >
                Semua Kategori & Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFav={favorites.includes(product.id)}
                  onFavToggle={handleFavToggle}
                  onOpenDetails={(id) => setSelectedProduct(product)}
                />
              ))}
            </div>
          )}
        </section>

        {/* FEEDBACK REVIEWS TESTIMONIALS SECTION */}
        <section id="reviews-sec" className="w-full">
          <Testimonials />
        </section>

        {/* COLLAPSIBLE ACCORDION FAQ SECTION */}
        <FAQ />

      </main>

      {/* Symmetrical footer information bar */}
      <Footer onCategorySelect={setSelectedCategory} />

      {/* POPUP FULLSCREEN PRODUCT DETAIL MODAL BOARD */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isFav={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onFavToggle={handleFavToggle}
      />

      {/* FLOATING ACTION INTERACTIVE BUBBLES */}
      {/* Floating active pulsing WhatsApp messenger icon */}
      <button
        onClick={handleGeneralChat}
        className="fixed bottom-20 right-5 z-40 w-14 h-14 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-2xl transition hover:scale-108 hover:-translate-y-1 active:scale-95 group cursor-pointer"
        aria-label="Direct Consultations"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.922 9.922 0 0 0 1.332 4.977L2 22l5.132-1.347a9.92 9.92 0 0 0 4.877 1.336h.004c5.505 0 9.99-4.478 9.991-9.985A10.013 10.013 0 0 0 12.012 2zm5.794 14.153c-.32.903-1.854 1.76-2.551 1.838-.636.072-1.353.111-2.22-.174-3.524-1.157-5.786-4.739-5.962-4.97-.17-.229-1.428-1.9-1.428-3.626 0-1.727.904-2.58 1.229-2.925.325-.345.711-.431.947-.431.237 0 .474.004.68.013.22.01.55-.084.862.664.32.766 1.096 2.68 1.192 2.877.096.198.16.427.032.68-.128.253-.192.413-.385.636-.192.224-.405.498-.578.67-.193.19-.395.398-.171.782.224.385.992 1.637 2.128 2.65 1.464 1.305 2.695 1.71 3.082 1.902.385.192.61.16.837-.101.229-.26.98-1.144 1.241-1.53.26-.385.52-.32.875-.192.355.128 2.25 1.06 2.637 1.253.385.192.64.288.736.447.095.16.095.92-.224 1.823z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-[ping_2s_infinite_ease-out] -z-10" />
      </button>

      {/* Floating back-to-top slider */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-36 right-5 z-40 w-11 h-11 rounded-full bg-neutral-900 border border-white/10 text-emerald-400 flex items-center justify-center shadow-xl transition-all duration-300 ${
          visibleBackToTop ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        } hover:bg-emerald-500 hover:text-neutral-950 cursor-pointer`}
        aria-label="Back To Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* STICKY BOTTOM APPBAR TAB (Authentic android app experience) */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-neutral-950/95 backdrop-blur-xl border-t border-white/5 z-50 flex items-center justify-around px-2">
        <button
          onClick={() => handleBottomNavClick('home-sec', 'home')}
          className={`flex flex-col items-center justify-center gap-1 h-full flex-grow text-center cursor-pointer transition ${
            activeBottomNav === 'home' ? 'text-emerald-400 font-extrabold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <Home className="w-5 h-5 shrink-0" />
          <span className="text-[10px] leading-tight font-bold">Beranda</span>
        </button>

        <button
          onClick={() => handleBottomNavClick('catalogues', 'kategori')}
          className={`flex flex-col items-center justify-center gap-1 h-full flex-grow text-center cursor-pointer transition ${
            activeBottomNav === 'kategori' ? 'text-emerald-400 font-extrabold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <Grid className="w-5 h-5 shrink-0" />
          <span className="text-[10px] leading-tight font-bold">Katalog</span>
        </button>

        {favorites.length > 0 && (
          <button
            onClick={() => handleBottomNavClick('favorites-sec', 'favorit')}
            className={`relative flex flex-col items-center justify-center gap-1 h-full flex-grow text-center cursor-pointer transition ${
              activeBottomNav === 'favorit' ? 'text-emerald-400 font-extrabold' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Heart className="w-5 h-5 shrink-0" />
            <span className="text-[10px] leading-tight font-bold">Favorit</span>
            <span className="absolute top-2.5 right-1/4 sm:right-1/3 bg-red-500 text-white font-black text-[8px] h-3.5 min-w-3.5 px-1 rounded-full flex items-center justify-center shadow">
              {favorites.length}
            </span>
          </button>
        )}

        <button
          onClick={() => handleBottomNavClick('reviews-sec', 'ulasan')}
          className={`flex flex-col items-center justify-center gap-1 h-full flex-grow text-center cursor-pointer transition ${
            activeBottomNav === 'ulasan' ? 'text-emerald-400 font-extrabold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className="text-[10px] leading-tight font-bold">Ulasan</span>
        </button>

        <button
          onClick={handleGeneralChat}
          className="flex flex-col items-center justify-center gap-1 h-full flex-grow text-center text-neutral-500 hover:text-emerald-400 transition cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current text-white/50 shrink-0 uppercase tracking-tight" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.922 9.922 0 0 0 1.332 4.977L2 22l5.132-1.347a9.92 9.92 0 0 0 4.877 1.336h.004c5.505 0 9.99-4.478 9.991-9.985A10.013 10.013 0 0 0 12.012 2zm5.794 14.153c-.32.903-1.854 1.76-2.551 1.838-.636.072-1.353.111-2.22-.174-3.524-1.157-5.786-4.739-5.962-4.97-.17-.229-1.428-1.9-1.428-3.626 0-1.727.904-2.58 1.229-2.925.325-.345.711-.431.947-.431.237 0 .474.004.68.013.22.01.55-.084.862.664.32.766 1.096 2.68 1.192 2.877.096.198.16.427.032.68-.128.253-.192.413-.385.636-.192.224-.405.498-.578.67-.193.19-.395.398-.171.782.224.385.992 1.637 2.128 2.65 1.464 1.305 2.695 1.71 3.082 1.902.385.192.61.16.837-.101.229-.26.98-1.144 1.241-1.53.26-.385.52-.32.875-.192.355.128 2.25 1.06 2.637 1.253.385.192.64.288.736.447.095.16.095.92-.224 1.823z"/>
          </svg>
          <span className="text-[10px] leading-tight font-bold">Main Chat</span>
        </button>
      </nav>

    </div>
  );
}
