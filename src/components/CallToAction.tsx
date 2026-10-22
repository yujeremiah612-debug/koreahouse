import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface CallToActionProps {
  onOpenOrderModal?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141720] to-[#0f1115] border-t border-[#1e232f] py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Subtle decorative radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9e2a2b]/10 blur-[100px] pointer-events-none rounded-full"
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
          Join Us in Dallas Koreatown
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Your Next Favorite Meal Awaits.
        </h2>
        <p className="mt-4 text-base text-[#a2aab8] max-w-xl leading-relaxed">
          Whether you crave the sizzling tenderness of prime Korean Galbi or fresh hand-crafted sushi rolls, Korea House welcomes you to experience over 40 years of culinary tradition.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9e2a2b] hover:bg-[#b03032] active:bg-[#852324] text-white font-semibold rounded-md shadow-lg shadow-black/40 transition-all text-sm whitespace-nowrap"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore the Menu</span>
          </Link>

          {onOpenOrderModal ? (
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1c212d] hover:bg-[#252b3a] border border-[#2f374a] text-[#f2efe9] font-medium rounded-md transition-all text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call the Restaurant</span>
            </button>
          ) : (
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1c212d] hover:bg-[#252b3a] border border-[#2f374a] text-[#f2efe9] font-medium rounded-md transition-all text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call (972) 243-0434</span>
            </a>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3 text-xs text-[#7d8699]">
          <span>2598 Royal Ln, Dallas, TX 75229</span>
          <span aria-hidden="true">·</span>
          <span>Open Daily 11:00 AM – 10:00 PM</span>
        </div>
      </div>
    </section>
  );
};
