import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Utensils, Soup, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { FoodCard } from '../components/FoodCard';
import { CallToAction } from '../components/CallToAction';

interface KoreanCuisinePageProps {
  onOpenOrderModal: (dishName?: string) => void;
}

export const KoreanCuisinePage: React.FC<KoreanCuisinePageProps> = ({ onOpenOrderModal }) => {
  const bbqItems = MENU_ITEMS.filter((i) => i.category === 'Korean BBQ');
  const stewItems = MENU_ITEMS.filter((i) => i.category === 'Soups & Stews');
  const riceAndNoodleItems = MENU_ITEMS.filter(
    (i) => i.category === 'Rice & Bibimbap' || i.category === 'Noodles'
  );
  const pancakeItems = MENU_ITEMS.filter((i) => i.id.startsWith('app-'));

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/korean_la_galbi_bbq_1792635195007.jpg"
            alt="Sizzling Korean LA Galbi short ribs on cast iron with green scallions"
            className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9e2a2b]/30 border border-[#9e2a2b]/50 backdrop-blur-md mb-4 text-[#ff9999] text-xs font-semibold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-[#ff8080]" />
            <span>Culinary Heritage Since 1979</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            The Soul of Authentic Korean Cuisine
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#d8dfed] max-w-2xl leading-relaxed">
            Deeply seasoned marinades, sizzling cast-iron platters, bubbling clay pot stews, and hand-fermented banchan crafted with decades of tradition.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="px-6 py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
            >
              <span>View Full Korean Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Korean Flavors & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Flavor Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A Balance of Fire, Fermentation, and Harmony
            </h2>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              At Korea House, every recipe begins with fundamental Korean pantry pillars: slow-fermented doenjang (soybean paste), vibrant gochujang (chili pepper paste), toasted dark sesame oil, crushed garlic, and aged kimchi.
            </p>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              For more than four decades, Dallas families have gathered around our tables for authentic warmth — from our signature caramelized LA Galbi short ribs marinated in fresh Asian pears and aged soy sauce to restorative bowls of Galbi Tang.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#1d222e]">
              <div>
                <strong className="text-white block text-sm font-semibold">40+ Year Marinade</strong>
                <span className="text-xs text-[#828a9b]">Slow-steeped fruits, garlic, sesame, and heritage soy sauce.</span>
              </div>
              <div>
                <strong className="text-white block text-sm font-semibold">Fresh Banchan Assortment</strong>
                <span className="text-xs text-[#828a9b]">Complimentary house-made seasonal side dishes with entrees.</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#282f40]">
            <img
              src="/src/assets/images/korean_dolsot_bibimbap_1792635194705.jpg"
              alt="Korean Dolsot Bibimbap with colorful vegetables and egg yolk"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-xs text-[#d8dfed]">
              <span className="text-[#d4af37] font-semibold block text-sm">Dolsot Bibimbap (돌솥 비빔밥)</span>
              <span>Sizzling stone bowl that creates crispy golden toasted rice with seasoned namul.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sizzling Korean BBQ Section */}
      <section className="py-16 bg-[#12151d] border-y border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#ff8080]" />
                <span>Grilled to Perfection</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Korean BBQ &amp; Sizzling Meats
              </h2>
              <p className="text-sm text-[#9aa2b2] mt-1 max-w-xl">
                Prepared by our master grill cooks over high heat and served piping hot on cast-iron skillets to lock in caramelized juices.
              </p>
            </div>

            <Link
              to="/menu"
              className="text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap"
            >
              See all BBQ options &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbqItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Soups, Stews & Bibimbap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Soup className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Simmered In Earthenware Pots</span>
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Traditional Soups, Stews &amp; Bibimbap
            </h2>
            <p className="text-sm text-[#9aa2b2] mt-1 max-w-xl">
              Nourishing, slow-simmered broths and fiery chili stews served bubbling hot in traditional Korean ttukbaegi crocks.
            </p>
          </div>

          <Link
            to="/menu"
            className="text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap"
          >
            See all soups &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stewItems.slice(0, 3).map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
            />
          ))}
          {riceAndNoodleItems.slice(0, 3).map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onSelect={(selected: MenuItem) => onOpenOrderModal(selected.name)}
            />
          ))}
        </div>
      </section>

      {/* 5. Korean Pancakes & Appetizers Spotlight */}
      <section className="py-16 bg-[#11141c] border-t border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#262c3b]">
              <img
                src="/src/assets/images/korean_seafood_pancake_1792635225710.jpg"
                alt="Crisp golden Korean Haemul Pajeon seafood pancake with dipping sauce"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>The Perfect Starter</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Crispy Haemul Pajeon &amp; Korean Starters
              </h2>
              <p className="text-sm text-[#9aa2b2] leading-relaxed">
                No Korean feast is complete without sharing a sizzling plate of Haemul Pajeon — a golden, crisp scallion pancake laden with tender calamari, shrimp, and aromatic green onions, paired with our tangy soy-chili dipping sauce.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs text-[#a2aab8]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span><strong>Gun Mandu:</strong> Pan-crisped handmade pork &amp; vegetable dumplings ($8.99)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span><strong>Dukbokki:</strong> Spicy chewy rice cakes in rich gochujang chili sauce ($13.99)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span><strong>Kimchi Pajeon:</strong> Tangy, crispy aged kimchi pancake ($13.99)</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Explore All Appetizers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CallToAction onOpenOrderModal={() => onOpenOrderModal()} />
    </div>
  );
};
