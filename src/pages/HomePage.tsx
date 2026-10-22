import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Flame,
  Fish,
  Utensils,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { FoodCard } from '../components/FoodCard';
import { CallToAction } from '../components/CallToAction';

interface HomePageProps {
  onOpenOrderModal: (dishName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenOrderModal }) => {
  // Select top signature dishes
  const signatureDishes = MENU_ITEMS.filter((item) => item.isSignature).slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with calibrated contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_korean_bbq_sushi_1792635194361.jpg"
            alt="Authentic Korean BBQ feast and fresh sushi spread at Korea House Dallas"
            className="w-full h-full object-cover object-center filter brightness-[0.45] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/60 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/90 via-transparent to-[#0f1115]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f5f2eb]">
              Dallas Koreatown Landmark · Est. 1979
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl leading-[1.15] text-balance">
            Authentic Korean Cuisine. Fresh Sushi. Unforgettable Flavor.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#d4dae8] max-w-2xl font-normal leading-relaxed">
            Discover the rich flavors of Korea and the art of Japanese sushi at Korea House Korean Cuisine &amp; Sushi.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="px-7 py-3.5 bg-[#9e2a2b] hover:bg-[#b03032] active:bg-[#852324] text-white font-semibold rounded-md shadow-xl shadow-red-950/40 transition-all text-sm tracking-wide whitespace-nowrap flex items-center gap-2"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={RESTAURANT_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#181d28]/90 hover:bg-[#222838] border border-[#333d52] text-[#f2efe9] font-medium rounded-md backdrop-blur-sm transition-all text-sm tracking-wide whitespace-nowrap flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Restaurant Quick Information Area */}
          <div className="mt-12 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="flex items-center gap-3 bg-[#131720]/80 backdrop-blur-md p-3.5 rounded-lg border border-[#262c3b]">
              <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div className="text-xs">
                <span className="text-[#8e98ab] block">Location</span>
                <span className="text-[#f5f2eb] font-medium">2598 Royal Ln, Dallas TX</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#131720]/80 backdrop-blur-md p-3.5 rounded-lg border border-[#262c3b]">
              <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div className="text-xs">
                <span className="text-[#8e98ab] block">Phone Orders</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-[#f5f2eb] font-medium hover:text-[#d4af37] transition-colors"
                >
                  (972) 243-0434
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#131720]/80 backdrop-blur-md p-3.5 rounded-lg border border-[#262c3b]">
              <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div className="text-xs">
                <span className="text-[#8e98ab] block">Operating Hours</span>
                <span className="text-[#f5f2eb] font-medium">Daily 11:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Food Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Authentic Korean &amp; Sushi Specialties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Signature Dishes &amp; Customer Favorites
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4af37] hover:text-[#f2d37c] transition-colors whitespace-nowrap"
          >
            <span>Browse All Menu Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatureDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              item={dish}
              onSelect={(item: MenuItem) => onOpenOrderModal(item.name)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#181d28] hover:bg-[#222838] border border-[#2b3344] text-[#f2efe9] font-medium rounded-md transition-all text-sm"
          >
            <span>View Full Menu with Verified Pricing</span>
            <ChevronRight className="w-4 h-4 text-[#d4af37]" />
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Korea House? */}
      <section className="py-20 bg-[#12151d] border-y border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Korea House Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Why Diners Have Chosen Us Since 1979
            </h2>
            <p className="mt-3 text-sm text-[#9aa2b2] leading-relaxed">
              For over forty years on Royal Lane, we have combined time-honored Korean culinary heritage with the precision of Japanese sushi craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#171b26] border border-[#232938] p-8 rounded-lg flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#9e2a2b]/20 border border-[#9e2a2b]/40 flex items-center justify-center text-[#ff8080]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Korean BBQ &amp; Heritage Stews
              </h3>
              <p className="text-sm text-[#959fad] leading-relaxed">
                From our celebrated LA Galbi short ribs and caramelized Bulgogi to bubbling earthenware pots of spicy Soondubu Jjigae, every recipe honors traditional Korean flavor depth.
              </p>
              <Link
                to="/korean-cuisine"
                className="mt-auto pt-2 text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
              >
                <span>Explore Korean Cuisine</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#171b26] border border-[#232938] p-8 rounded-lg flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/30 border border-[#2d558a]/40 flex items-center justify-center text-[#70b1ff]">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Artisan Sushi &amp; Fresh Fish
              </h3>
              <p className="text-sm text-[#959fad] leading-relaxed">
                Enjoy delicate nigiri, pristine sashimi cuts of Atlantic salmon and bigeye tuna, along with house-crafted specialty rolls rolled fresh at our dedicated sushi counter.
              </p>
              <Link
                to="/sushi"
                className="mt-auto pt-2 text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
              >
                <span>Explore Sushi Selections</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#171b26] border border-[#232938] p-8 rounded-lg flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#3d2f16]/40 border border-[#c59b27]/40 flex items-center justify-center text-[#d4af37]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Authentic Korean Hospitality
              </h3>
              <p className="text-sm text-[#959fad] leading-relaxed">
                Every table is greeted with an assortment of fresh banchan (side dishes), warm attentive service, and an atmosphere suitable for family feasts, business lunches, and private groups.
              </p>
              <Link
                to="/about"
                className="mt-auto pt-2 text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
              >
                <span>Read Our Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Restaurant Introduction & Atmosphere Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#282f40]">
            <img
              src="/src/assets/images/restaurant_interior_dining_1792635210502.jpg"
              alt="Warm, spacious dining room interior of Korea House Dallas on Royal Lane"
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-xs text-[#d8dfed]">
              <span className="text-[#d4af37] font-semibold block text-sm">Korea House Dining Room</span>
              <span>Spacious booths, authentic warm wood accents, and dedicated sushi bar.</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Dallas Koreatown Landmark
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              A True Gathering Place for Lovers of Korean Cuisine and Sushi
            </h2>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              Located on Royal Lane in the heart of Dallas&apos;s Asian Trade District, Korea House has stood as a welcoming home for delicious meals and celebratory dinners since 1979.
            </p>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              Our kitchen bridges two beloved Asian culinary worlds: the sizzle and deep fermented richness of authentic Korean cooking, paired seamlessly with clean, artisan Japanese sushi and sashimi.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white font-semibold rounded-md text-sm transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#191d28] hover:bg-[#222736] border border-[#2b3344] text-[#f2efe9] font-medium rounded-md text-sm transition-colors"
              >
                <span>View Photo Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visit Us / Quick Location & Hours */}
      <section className="py-16 bg-[#11141c] border-t border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161a24] border border-[#262d3e] rounded-xl p-8 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Visit Korea House
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                2598 Royal Lane, Dallas
              </h3>
              <p className="text-sm text-[#9aa2b2]">
                Conveniently located off Royal Lane in Dallas, TX 75229. Ample parking available for dining guests.
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4af37] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-4 md:py-0 md:px-6 md:border-x border-[#232938]">
              <span className="text-xs uppercase tracking-wider text-[#e6e2d8] font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Operating Hours</span>
              </span>
              <div className="text-xs text-[#9aa2b2] space-y-1.5">
                <div className="flex justify-between font-medium text-white">
                  <span>Every Day:</span>
                  <span className="tabular-nums">11:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between text-[#828a9b]">
                  <span>Lunch Bento Specials:</span>
                  <span className="tabular-nums">11:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between text-[#828a9b]">
                  <span>Dinner Service:</span>
                  <span className="tabular-nums">3:00 PM – 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-[#e6e2d8] font-semibold flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call or Inquire</span>
              </span>
              <p className="text-xs text-[#9aa2b2]">
                Call ahead for takeout orders or large table reservations.
              </p>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white font-semibold rounded-md text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (972) 243-0434</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <CallToAction onOpenOrderModal={() => onOpenOrderModal()} />
    </div>
  );
};
