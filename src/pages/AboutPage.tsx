import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { CallToAction } from '../components/CallToAction';

interface AboutPageProps {
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="flex flex-col">
      {/* 1. Page Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/restaurant_interior_dining_1792635210502.jpg"
            alt="Interior dining atmosphere at Korea House Dallas"
            className="w-full h-full object-cover object-center filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/60 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            Our Heritage &amp; Tradition
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Welcoming Dallas Since 1979
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#d0d6e5] max-w-2xl leading-relaxed">
            For more than four decades, Korea House Korean Cuisine &amp; Sushi has been a landmark destination on Royal Lane for authentic Korean comfort food and artisan Japanese sushi.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative: The Story & Culinary Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Korea House Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              A Dallas Koreatown Cornerstone
            </h2>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              When Korea House first opened its doors in 1979, the Dallas Koreatown community along Royal Lane was just beginning to take shape. Through decades of growth and culinary evolution, Korea House has remained a steady favorite for authentic homestyle Korean cooking.
            </p>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              Our philosophy has always focused on generous, unpretentious hospitality: preparing traditional marinades from scratch with real fruits and garlic, simmering bone broths for hours, and presenting every table with a colorful spread of complimentary banchan side dishes.
            </p>
            <p className="text-sm sm:text-base text-[#9aa2b2] leading-relaxed">
              To complement our robust Korean grilled meats and spicy stews, our dedicated sushi bar offers fresh nigiri, pristine sashimi, and specialty rolls rolled to order by seasoned sushi chefs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9e2a2b] hover:bg-[#b03032] text-white text-xs font-semibold rounded-md transition-colors"
              >
                <span>Explore the Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#191d28] hover:bg-[#232938] border border-[#2d3546] text-[#f2efe9] text-xs font-medium rounded-md transition-colors"
              >
                <span>Find Us on Royal Lane</span>
              </Link>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#282f40]">
            <img
              src="/src/assets/images/hero_korean_bbq_sushi_1792635194361.jpg"
              alt="Artisan Korean feast and sushi banquet at Korea House"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-xs text-[#d8dfed]">
              <span className="text-[#d4af37] font-semibold block text-sm">Two Culinary Traditions Under One Roof</span>
              <span>Generous Korean banchan, sizzling LA Galbi, and artisan sushi rolls.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of the Dining Experience */}
      <section className="py-20 bg-[#12151d] border-y border-[#1d222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Our Core Commitments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              What Defines Korea House
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#171b26] border border-[#262c3b] p-8 rounded-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#9e2a2b]/20 border border-[#9e2a2b]/40 flex items-center justify-center text-[#ff8080]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Authentic Flavors</h3>
              <p className="text-sm text-[#9aa2b2] leading-relaxed">
                We never cut corners on traditional recipes. From 8-hour beef bone broths to house-aged kimchi and signature Galbi marinades, the taste is deep and uncompromising.
              </p>
            </div>

            <div className="bg-[#171b26] border border-[#262c3b] p-8 rounded-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/30 border border-[#2d558a]/40 flex items-center justify-center text-[#70b1ff]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Fresh Sushi Daily</h3>
              <p className="text-sm text-[#9aa2b2] leading-relaxed">
                Our sushi chefs hand-select fresh Atlantic salmon, bigeye tuna, and yellowtail to provide a comprehensive Japanese sushi bar alongside traditional Korean dining.
              </p>
            </div>

            <div className="bg-[#171b26] border border-[#262c3b] p-8 rounded-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#3d2f16]/40 border border-[#c59b27]/40 flex items-center justify-center text-[#d4af37]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Welcoming Atmosphere</h3>
              <p className="text-sm text-[#9aa2b2] leading-relaxed">
                Whether you are joining us for a quick weekday lunch bento or celebrating a special occasion with a full banquet, our team makes you feel right at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Verified Restaurant Details Quick Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#161a25] border border-[#262d3e] rounded-xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Location &amp; Visit Details
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
              Ready to Experience Korea House?
            </h2>
            <p className="text-sm text-[#9aa2b2] mt-3 leading-relaxed">
              We look forward to serving you. Visit us at 2598 Royal Lane in Dallas, open daily from 11:00 AM to 10:00 PM for dine-in, lunch specials, and takeout.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[#c0c6d4]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>2598 Royal Ln, Dallas, TX 75229</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-[#d4af37] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Daily 11:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CallToAction onOpenOrderModal={onOpenOrderModal} />
    </div>
  );
};
