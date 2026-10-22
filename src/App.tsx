import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { KoreanCuisinePage } from './pages/KoreanCuisinePage';
import { SushiPage } from './pages/SushiPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on every page route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedDishName, setSelectedDishName] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (dishName?: string) => {
    setSelectedDishName(dishName);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedDishName(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0f1115] text-[#f2efe9]">
        <Header onOpenOrderModal={() => handleOpenOrderModal()} />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenOrderModal={handleOpenOrderModal} />}
            />
            <Route
              path="/menu"
              element={<MenuPage onOpenOrderModal={handleOpenOrderModal} />}
            />
            <Route
              path="/korean-cuisine"
              element={<KoreanCuisinePage onOpenOrderModal={handleOpenOrderModal} />}
            />
            <Route
              path="/sushi"
              element={<SushiPage onOpenOrderModal={handleOpenOrderModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenOrderModal={() => handleOpenOrderModal()} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenOrderModal={() => handleOpenOrderModal()} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Order / Call Modal */}
        <OrderModal
          isOpen={orderModalOpen}
          onClose={handleCloseOrderModal}
          selectedDishName={selectedDishName}
        />
      </div>
    </BrowserRouter>
  );
}
