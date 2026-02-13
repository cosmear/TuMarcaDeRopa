import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { ViewState } from '../types';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
    currentView: ViewState;
    setView: (view: ViewState) => void;
    onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, onSearchClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleCart, count } = useCart();

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-in slide-in-from-top-4 duration-700">
            <div className="max-w-4xl w-full rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-lg px-6 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <div 
                    className="flex items-center gap-2 cursor-pointer group" 
                    onClick={() => setView('home')}
                >
                    <span className="font-extrabold text-xl tracking-tighter text-slate-900 uppercase flex items-center gap-1">
                        TUMARCA<span className="text-primary">DEROPA.</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <button onClick={() => setView('shop')} className={`hover:text-primary transition-colors ${currentView === 'shop' ? 'text-primary font-bold' : ''}`}>Novedades</button>
                    <button onClick={() => setView('shop')} className={`hover:text-primary transition-colors`}>Mujer</button>
                    <button onClick={() => setView('men')} className={`hover:text-primary transition-colors ${currentView === 'men' ? 'text-primary font-bold' : ''}`}>Hombre</button>
                    <button onClick={() => setView('community')} className={`hover:text-primary transition-colors ${currentView === 'community' ? 'text-primary font-bold' : ''}`}>Comunidad</button>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={onSearchClick}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                    >
                        <Search size={20} />
                    </button>
                    <button 
                        className="relative p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 group"
                        onClick={toggleCart}
                    >
                        <ShoppingBag size={20} className={count > 0 ? 'text-primary' : ''} />
                        {count > 0 && (
                            <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                                {count}
                            </span>
                        )}
                    </button>
                    <button 
                        className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
                     <button onClick={() => { setView('shop'); setIsMenuOpen(false); }} className="text-left p-2 hover:bg-slate-50 rounded-lg font-medium">Novedades</button>
                     <button onClick={() => { setView('shop'); setIsMenuOpen(false); }} className="text-left p-2 hover:bg-slate-50 rounded-lg font-medium">Mujer</button>
                     <button onClick={() => { setView('men'); setIsMenuOpen(false); }} className="text-left p-2 hover:bg-slate-50 rounded-lg font-medium">Hombre</button>
                     <button onClick={() => { setView('community'); setIsMenuOpen(false); }} className="text-left p-2 hover:bg-slate-50 rounded-lg font-medium">Comunidad</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;