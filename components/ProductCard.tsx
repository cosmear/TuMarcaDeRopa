import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ProductItem } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps extends ProductItem {
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { title, subtitle, price, image, tag, className = '' } = props;
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(props);
    };

    return (
        <div className={`min-w-[280px] lg:min-w-[340px] snap-center group cursor-pointer ${className}`}>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <button 
                    onClick={handleAddToCart}
                    className="absolute bottom-4 right-4 bg-white text-slate-900 p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                    <ShoppingCart size={20} />
                </button>
                {tag && (
                    <span className={`absolute top-4 left-4 ${tag.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                        {tag.text}
                    </span>
                )}
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-slate-900">{title}</h3>
                    {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
                </div>
                <span className="font-semibold text-primary">{price}</span>
            </div>
        </div>
    );
};

export default ProductCard;