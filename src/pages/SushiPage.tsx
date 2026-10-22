import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, ArrowRight, Phone, CheckCircle, Utensils } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { FoodCard } from '../components/FoodCard';
import { CallToAction } from '../components/CallToAction';

interface SushiPageProps {
  onOpenOrderModal: (dishName?: string) => void;
}

export const SushiPage: React.FC<SushiPageProps> = ({ onOpenOrderModal }) => {
  const sushiRolls = MENU_ITEMS.filter((i) => i.category === 'Sushi Rolls');
  const nigiriSashimi = MENU_ITEMS.filter((i) => i.category === 'Nigiri & Sashimi');
  const japaneseSpecialties = MENU_ITEMS.filter((i) => i.category === 'Japanese Specialties');

  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/sushi_special_rolls_sashimi_1792635210098.jpg"
            alt="Artisan sushi platter with fresh nigiri, sashimi, and specialty rolls at Korea House Dallas"
            className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a5f]/40 border border-[#2d558a]/50 backdrop-blur-md mb-4 text-[#8cc2ff] text-xs font-semibold uppercase tracking-widest">
            <Fish className="w-3.5 h-3.5 text-[#70b1ff]" />
            <span>Dedicated Sushi Bar</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Artisan Sushi &amp; Japanese Cuisine
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#d8dfed] max-w-2xl leading-relaxed">
            Fresh sashimi cuts, hand-pressed nigiri, inventive specialty rolls, and Japanese bento boxes crafted fresh to order by our experienced sushi chefs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="px-6 py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
            >
              <span>Explore Sushi Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3 bg-[#181d28]/90 hover:bg-[#222838] border border-[#333d52] text-[#f2efe9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Sushi Bar</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Sushi Craftsmanship Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#151922] border border-[#232938] p-8 rounded-xl flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/40 border border-[#2d558a]/50 flex items-center justify-center text-[#70b1ff] mb-1">
              <Fish className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Daily Fresh Sourcing</h3>
            <p className="text-sm text-[#9aa2b2] leading-relaxed">
              We select sashimi-grade Atlantic salmon, yellowtail (hamachi), and bigeye tuna to ensure clean, buttery texture in every bite.
            </p>
          </div>

          <div className="bg-[#151922] border border-[#232938] p-8 rounded-xl flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#3d2f16]/40 border border-[#c59b27]/50 flex items-center justify-center text-[#d4af37] mb-1">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Hand-Pressed Nigiri</h3>
            <p className="text-sm text-[#9aa2b2] leading-relaxed">
              Seasoned sushi rice formed at body temperature with a light dab of real wasabi, draped in precisely sliced raw fish.
            </p>
          </div>

          <div className="bg-[#151922] border border-[#232938] p-8 rounded-xl flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#9e2a2b]/20 border border-[#9e2a2b]/40 flex items-center justify-center text-[#ff8080] mb-1">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">The Best of Both Worlds</h3>
            <p className="text-sm text-[#9aa2b2] leading-relaxed">
              Pair your sizzling Korean Galbi and bibimbap with fresh sushi rolls or our signature Bulgogi &amp; Sushi bento combo.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Specialty Sushi Rolls Section */}
      <section className="py-16 bg-[#12151d] border-y border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                House Creations &amp; Classics
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Specialty Sushi Rolls
              </h2>
              <p className="text-sm text-[#9aa2b2] mt-1 max-w-xl">
                Fresh ingredients, crisp tempura, unagi glazes, and tobiko pearls crafted fresh at the bar.
              </p>
            </div>

            <Link
              to="/menu"
              className="text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap"
            >
              See full roll list &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sushiRolls.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Nigiri & Sashimi Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Pure, Pristine Cuts
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Nigiri &amp; Sashimi Combos
            </h2>
            <p className="text-sm text-[#9aa2b2] mt-1 max-w-xl">
              Served with fresh wasabi, pickled ginger, and hot miso soup.
            </p>
          </div>

          <Link
            to="/menu"
            className="text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap"
          >
            See all sashimi &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nigiriSashimi.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
            />
          ))}
        </div>
      </section>

      {/* 5. Japanese Specialties & Bento Boxes */}
      <section className="py-16 bg-[#11141c] border-t border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Bentos &amp; Broiled Fish
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Japanese Kitchen Specialties
              </h2>
              <p className="text-sm text-[#9aa2b2] mt-1 max-w-xl">
                Crispy tempura, broiled whole Atlantic mackerel, and generous bento box combinations.
              </p>
            </div>

            <Link
              to="/menu"
              className="text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap"
            >
              View full menu &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {japaneseSpecialties.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CallToAction onOpenOrderModal={() => onOpenOrderModal()} />
    </div>
  );
};
