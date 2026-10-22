import React, { useState, useMemo } from 'react';
import { Maximize2, Camera, Utensils } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { CallToAction } from '../components/CallToAction';

interface GalleryPageProps {
  onOpenOrderModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#12151c] border-b border-[#1d222e] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>A Visual Culinary Journey</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Restaurant Gallery
            </h1>
            <p className="mt-3 text-sm text-[#9aa2b2] max-w-2xl leading-relaxed">
              Explore our sizzling Korean barbecue, traditional soups and pancakes, artisan sushi platters, and the welcoming Dallas dining room that has hosted generations of guests.
            </p>
          </div>

          <div className="text-xs text-[#8a92a3]">
            Click any photograph to view high-resolution details in full screen.
          </div>
        </div>
      </section>

      {/* Category Filter Controls */}
      <section className="sticky top-[69px] z-30 bg-[#0f1115]/95 backdrop-blur-md border-b border-[#1d222e] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                      : 'bg-[#151922] text-[#9aa2b2] hover:text-white hover:bg-[#1f2533] border border-[#232938]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#717a8c] hidden sm:block tabular-nums">
            {filteredItems.length} photos
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group cursor-pointer bg-[#141720] border border-[#232836] hover:border-[#384157] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1c212c]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a2aab8] line-clamp-2 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />

      {/* Call to action */}
      <CallToAction onOpenOrderModal={onOpenOrderModal} />
    </div>
  );
};
