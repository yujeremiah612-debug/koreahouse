import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image and Caption Card */}
      <div className="max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
            {item.title}
          </h3>
          <p className="text-sm text-[#a2aab8] mt-1 leading-relaxed">
            {item.description}
          </p>
          <div className="text-xs text-[#6e7787] mt-2">
            Image {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
