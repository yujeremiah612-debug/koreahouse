import React from 'react';
import { X, Phone, MapPin, Clock, ExternalLink, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDishName?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedDishName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#141720] border border-[#262c3b] rounded-xl max-w-lg w-full p-6 sm:p-8 text-[#f2efe9] relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8b93a5] hover:text-white rounded-lg hover:bg-[#1f2430] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-5">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Takeout &amp; Dine-In Orders
            </span>
            <h2 id="order-modal-title" className="font-serif text-2xl font-bold text-white mt-1">
              Order from Korea House
            </h2>
            {selectedDishName ? (
              <p className="text-sm text-[#a2aab8] mt-1">
                Ordering inquiry for <span className="text-[#f5f2eb] font-semibold">{selectedDishName}</span>
              </p>
            ) : (
              <p className="text-sm text-[#8a92a3] mt-1">
                Enjoy authentic Korean BBQ, homestyle stews, and fresh sushi prepared to order.
              </p>
            )}
          </div>

          {/* Primary Action: Direct Phone Order */}
          <div className="bg-[#1b202c] border border-[#2e3648] p-5 rounded-lg flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#9e2a2b]/20 border border-[#9e2a2b]/40 rounded-full text-[#ff7b7b]">
                <Phone className="w-5 h-5 text-[#ff8e8e]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Call Restaurant Directly</h3>
                <p className="text-xs text-[#9aa2b2]">Fastest service for hot pickup &amp; custom banchan requests</p>
              </div>
            </div>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3 px-4 bg-[#9e2a2b] hover:bg-[#b03032] active:bg-[#852324] text-white font-semibold text-center rounded-md text-base transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call (972) 243-0434</span>
            </a>
          </div>

          {/* Location & Pickup Guidelines */}
          <div className="space-y-3 text-xs text-[#9aa2b2]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#e6e2d8] block">Pickup Location</strong>
                <span>2598 Royal Lane, Dallas, TX 75229 (Royal Lane Koreatown)</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#e6e2d8] block">Kitchen Hours</strong>
                <span>Daily 11:00 AM – 9:30 PM for takeout</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#e6e2d8] block">Authentic Banchan Included</strong>
                <span>All Korean entrees come with our chef&apos;s daily assortment of seasoned side dishes and steamed rice.</span>
              </div>
            </div>
          </div>

          {/* Third party / Official site link */}
          <div className="pt-2 border-t border-[#232837] flex items-center justify-between text-xs text-[#7d8699]">
            <span>Need delivery through your favorite app?</span>
            <a
              href={RESTAURANT_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#d4af37] hover:underline font-medium"
            >
              <span>Visit Official Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
