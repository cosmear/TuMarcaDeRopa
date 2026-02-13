import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/Home';
import ShopView from './views/Shop';
import CommunityView from './views/Community';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import { ViewState } from './types';
import { CartProvider } from './contexts/CartContext';

function AppContent() {
  const [currentView, setView] = useState<ViewState>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Reset scroll on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setView} />;
      case 'shop':
        return <ShopView category="all" />;
      case 'men':
        return <ShopView category="men" />;
      case 'community':
        return <CommunityView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col font-display">
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        onSearchClick={() => setIsSearchOpen(true)}
      />
      <CartDrawer />
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;