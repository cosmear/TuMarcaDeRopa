import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ShoppingCart, ArrowRight } from 'lucide-react';
import { SHOP_ITEMS } from '../constants';
import { useCart } from '../contexts/CartContext';
import { ProductItem } from '../types';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<ProductItem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const filtered = SHOP_ITEMS.filter(item => 
            item.type === 'product' && 
            (item.title.toLowerCase().includes(query.toLowerCase()) || 
             (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())))
        );
        setResults(filtered as ProductItem[]);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                <Search className="text-slate-400 ml-2" size={24} />
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Buscar productos..." 
                    className="flex-1 text-xl font-medium placeholder:text-slate-300 border-none outline-none focus:ring-0 bg-transparent"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    onClick={onClose}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
                {query.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 opacity-50">
                        <Search size={64} className="mb-4" />
                        <p className="text-lg font-medium">Empieza a escribir para buscar</p>
                    </div>
                ) : results.length > 0 ? (
                    <div className="max-w-4xl mx-auto">
                        <p className="text-slate-500 mb-6 font-medium">Resultados para "{query}" ({results.length})</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {results.map(item => (
                                <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm flex gap-4 group cursor-pointer hover:shadow-md transition-all">
                                    <div className="w-20 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
                                            <p className="text-xs text-slate-500 mt-1">{item.subtitle || 'Edición Limitada'}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="font-bold text-primary">{item.price}</span>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                                                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                            >
                                                <ShoppingCart size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                        <p className="text-lg font-medium">No encontramos resultados para "{query}"</p>
                        <p className="text-sm">Intenta con otra palabra clave.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchOverlay;