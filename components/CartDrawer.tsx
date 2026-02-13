import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartDrawer: React.FC = () => {
    const { items, isOpen, toggleCart, updateQuantity, removeFromCart, total } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={toggleCart}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <ShoppingBag className="text-primary" />
                        Tu Carrito
                    </h2>
                    <button 
                        onClick={toggleCart}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                            <ShoppingBag size={48} className="mb-4 text-slate-300" />
                            <p className="text-lg font-medium">Tu carrito está vacío</p>
                            <p className="text-sm">¡Agrega algunos estilos para empezar!</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 fade-in duration-500">
                                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="text-slate-500 text-xs">{item.subtitle || 'Talle Único'}</p>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1">
                                            <button 
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm text-xs hover:text-primary"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm text-xs hover:text-primary"
                                            >
                                                <Plus size={12} />
                                            </button>
                                        </div>
                                        <p className="font-bold text-primary">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-slate-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-600 font-medium">Total</span>
                            <span className="text-2xl font-black text-slate-900">${total.toLocaleString('es-AR')}</span>
                        </div>
                        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors shadow-lg hover:shadow-primary/30 transform active:scale-95 transition-transform">
                            Iniciar Compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;