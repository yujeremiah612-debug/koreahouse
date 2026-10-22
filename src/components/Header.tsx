import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Korean Cuisine', path: '/korean-cuisine' },
    { label: 'Sushi', path: '/sushi' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0f1115]/95 backdrop-blur-md border-[#232733] shadow-lg shadow-black/40 py-3'
          : 'bg-[#0f1115] border-[#1d212b] py-4'
      }`}
    >
      {/* Top micro-bar for quick address and hours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-[#9aa2b2] border-b border-[#1c202a] pb-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>2598 Royal Lane, Dallas, TX 75229</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Open Daily 11:00 AM – 10:00 PM</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#c59b27] font-medium tracking-wide">Serving Dallas Koreatown Since 1979</span>
          <span aria-hidden="true" className="text-[#3a4152]">·</span>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="hover:text-white transition-colors font-medium text-[#d4af37]"
          >
            {RESTAURANT_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav links) - Zone 3 (Action CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" className="flex flex-col shrink-0 group">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
            KOREA HOUSE
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#b89535] font-semibold">
            Korean Cuisine &amp; Sushi
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Single line, text with clean active indicator) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#c0c6d4]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#f5f2eb] font-semibold'
                    : 'text-[#a2a9b8] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Single line button) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#dcd6ca] bg-[#1a1d26] border border-[#2b3140] rounded-md hover:bg-[#232733] hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>(972) 243-0434</span>
          </a>
          <button
            onClick={onOpenOrderModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#9e2a2b] hover:bg-[#b03032] active:bg-[#852324] rounded-md shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Call to Order
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenOrderModal}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#9e2a2b] hover:bg-[#b03032] rounded-md transition-colors"
          >
            Order
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#c0c6d4] hover:text-white hover:bg-[#1a1d26] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bg-[#12151c] border-b border-[#232733] px-6 py-6 shadow-2xl flex flex-col gap-4 z-50 max-h-[calc(100vh-105px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1c202a] text-[#d4af37] font-semibold'
                      : 'text-[#c0c6d4] hover:bg-[#181b24] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#232733] flex flex-col gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#f5f2eb] bg-[#1c202a] border border-[#2b3140] rounded-md hover:bg-[#252b38] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call (972) 243-0434</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#9e2a2b] hover:bg-[#b03032] rounded-md transition-colors"
            >
              Order Online / Pickup Info
            </button>
            <div className="text-center text-xs text-[#828a9b] mt-2">
              <p>2598 Royal Lane, Dallas, TX 75229</p>
              <p className="mt-0.5">Open Daily 11:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
