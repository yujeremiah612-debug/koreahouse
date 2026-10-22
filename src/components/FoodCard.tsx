import React, { useState } from 'react';
import { UtensilsCrossed, Flame } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface FoodCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-[#151821] border border-[#232733] hover:border-[#3a4256] rounded-lg overflow-hidden transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40">
      <div>
        {/* Image Container with Zero-Broken-Image Fallback */}
        <div className="relative aspect-[4/3] w-full bg-[#1c202b] overflow-hidden">
          {item.image && !imageError ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1a1e28] to-[#12151c] text-[#717a8c]">
              <div className="p-3 bg-[#232836] rounded-full mb-2">
                <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#9aa2b2] font-medium">
                {item.category}
              </span>
              <span className="text-sm font-semibold text-[#e6e2d8] mt-1 line-clamp-1">
                {item.name}
              </span>
            </div>
          )}

          {/* Sizzling / Spicy indicator if present */}
          {item.spicyLevel && item.spicyLevel > 0 ? (
            <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-medium text-[#ff6b6b] flex items-center gap-1 border border-red-900/40">
              <Flame className="w-3 h-3 text-[#ff6b6b]" />
              <span>{'Spicy '.repeat(Math.min(item.spicyLevel, 2)).trim()}</span>
            </div>
          ) : null}
        </div>

        {/* Content Body */}
        <div className="p-5 flex flex-col gap-2">
          {/* Metadata: Unboxed quiet text with separators */}
          <div className="flex items-center gap-2 text-xs text-[#8a92a3]">
            <span>{item.category}</span>
            {item.koreanName && (
              <>
                <span aria-hidden="true" className="text-[#3c4456]">·</span>
                <span className="text-[#c59b27] font-medium">{item.koreanName}</span>
              </>
            )}
            {item.isSignature && (
              <>
                <span aria-hidden="true" className="text-[#3c4456]">·</span>
                <span className="text-[#d4af37] font-semibold">House Specialty</span>
              </>
            )}
          </div>

          {/* Title and Price */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg font-bold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="text-base font-semibold text-[#e8c56c] font-mono tabular-nums shrink-0">
              {item.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#9aa2b2] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Action / Tags Footer */}
      <div className="px-5 pb-5 pt-1 border-t border-[#1d222e] flex items-center justify-between text-xs text-[#7d8799]">
        <div className="flex items-center gap-1.5 truncate">
          {item.tags && item.tags.length > 0 ? (
            item.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span aria-hidden="true" className="text-[#3a4154]">·</span>}
                <span className="truncate">{tag}</span>
              </React.Fragment>
            ))
          ) : (
            <span>Made fresh to order</span>
          )}
        </div>
        {onSelect && (
          <button
            onClick={() => onSelect(item)}
            className="text-xs font-semibold text-[#d4af37] hover:text-[#f0d47e] transition-colors whitespace-nowrap ml-2"
          >
            Order / Inquire &rarr;
          </button>
        )}
      </div>
    </div>
  );
};
