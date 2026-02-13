import React, { useMemo } from 'react';
import { ShoppingCart, PlayCircle, Heart, Plus, Bolt } from 'lucide-react';
import { IMAGES, SHOP_ITEMS } from '../constants';
import { useCart } from '../contexts/CartContext';

interface ShopViewProps {
    category?: 'all' | 'men' | 'women';
}

const ShopView: React.FC<ShopViewProps> = ({ category = 'all' }) => {
    const { addToCart } = useCart();

    const filteredItems = useMemo(() => {
        if (category === 'all') return SHOP_ITEMS;
        return SHOP_ITEMS.filter(item => 
            item.category === category || item.category === 'unisex'
        );
    }, [category]);

    const getHeaderContent = () => {
        if (category === 'men') {
            return {
                bgTitle: 'HOMBRE',
                title: 'URBAN MEN',
                subtitle: 'Esenciales modernos para el hombre que construye su propio camino. Funcionalidad y diseño.'
            };
        }
        return {
            bgTitle: 'SIN LÍMITES',
            title: 'NUEVA ERA',
            subtitle: 'Rompe las reglas. Ropa diseñada para el movimiento constante de Buenos Aires.'
        };
    };

    const headerContent = getHeaderContent();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-28 pb-20 relative overflow-hidden">
             {/* Background Effects */}
            <div className="fixed top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="fixed bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
            
            <header className="mb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto text-center md:text-left relative z-10 animate-in fade-in duration-700">
                <h1 className="absolute -top-12 -right-4 md:right-20 text-6xl md:text-9xl font-black text-gray-200 opacity-50 z-[-1] select-none pointer-events-none tracking-tighter rotate-[-2deg]">
                    {headerContent.bgTitle}
                </h1>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-none mb-4 tracking-tight">
                    {headerContent.title} <br className="hidden md:block" />
                    <span className="relative inline-block">
                        <span className="absolute -inset-1 bg-accent transform -skew-y-3 z-[-1] rounded-sm"></span>
                        <span className="text-slate-900 italic px-2">URBAN FLOW</span>
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mt-6 font-medium">
                    {headerContent.subtitle}
                </p>
            </header>

            {/* Filter Bar */}
            <div className="sticky top-28 z-40 py-4 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-background-light/95 backdrop-blur-sm mb-8 overflow-x-auto hide-scroll flex items-center space-x-3 transition-all">
                <button className="whitespace-nowrap px-6 py-3 rounded-full bg-slate-900 text-white font-bold shadow-lg transform hover:-translate-y-1 transition-transform">Todo</button>
                {category === 'men' 
                    ? ['Remeras', 'Camisas', 'Pantalones', 'Abrigos', 'Accesorios'].map(filter => (
                        <button key={filter} className="whitespace-nowrap px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all">{filter}</button>
                      ))
                    : ['Remeras Oversize', 'Pantalones Cargo', 'Vestidos', 'Buzos & Hoodies'].map(filter => (
                        <button key={filter} className="whitespace-nowrap px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all">{filter}</button>
                      ))
                }
                <button className="whitespace-nowrap px-6 py-3 rounded-full bg-accent text-slate-900 font-bold hover:bg-accent/80 hover:shadow-lg transition-all">NEW DROP 🔥</button>
            </div>

            {/* Masonry Grid */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                
                {/* Vertical Text Decoration */}
                <div className="hidden lg:block absolute top-[400px] left-0 z-0 pointer-events-none">
                     <h2 className="text-[120px] font-black text-outline-dark opacity-10 rotate-90 leading-none">ESTILO</h2>
                </div>

                {filteredItems.map((item, index) => (
                    <div key={index} className="break-inside-avoid mb-6 relative group cursor-pointer animate-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 50}ms` }}>
                        
                        {/* Render based on Type */}
                        {item.type === 'product' && (
                            <>
                                <div className={`relative overflow-hidden rounded-lg shadow-xl bg-gray-200 ${item.image === IMAGES.whiteTshirt ? 'aspect-[3/4]' : 'aspect-auto'}`}>
                                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                                    {item.isNew && <div className="absolute -top-4 -right-4 z-20 bg-black text-white px-2 py-1 text-xs font-bold rotate-12 shadow-lg">NEW</div>}
                                    {item.tag && (
                                        <div className={`absolute top-4 left-4 ${item.tag.color} text-xs font-black px-3 py-1 rounded-sm uppercase tracking-wider`}>
                                            {item.tag.text}
                                        </div>
                                    )}
                                    {item.buttonLabel && (
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); addToCart(item as any); }}
                                                className="w-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
                                            >
                                                {item.buttonLabel}
                                            </button>
                                        </div>
                                    )}
                                    {/* Default Hover Add to Cart */}
                                    {!item.buttonLabel && (
                                         <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); addToCart(item as any); }}
                                                className="bg-white text-primary p-3 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-primary hover:text-white"
                                            >
                                                <ShoppingCart size={24} />
                                            </button>
                                         </div>
                                    )}
                                </div>
                                <div className="mt-4 px-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                            {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-slate-900">{item.price}</p>
                                            {item.oldPrice && <p className="text-sm text-gray-400 line-through">{item.oldPrice}</p>}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {item.type === 'video' && (
                             <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-black">
                                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                    <PlayCircle size={64} className="text-white/80 group-hover:scale-110 transition-transform" />
                                </div>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    {item.live && <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block animate-pulse">En vivo</span>}
                                    <h3 className="text-2xl font-bold text-white leading-tight">{item.title?.replace(' ', '\n')}</h3>
                                </div>
                             </div>
                        )}

                        {item.type === 'banner' && (
                             <div className="relative overflow-hidden rounded-lg shadow-none aspect-[3/2] bg-primary text-white flex items-center justify-center p-8 text-center transform rotate-1 hover:rotate-0 transition-transform">
                                <div>
                                    <span className="material-icons-round text-5xl opacity-50 mb-2">format_quote</span>
                                    <h2 className="text-2xl font-black italic uppercase leading-tight tracking-tight">{item.text}</h2>
                                    <p className="mt-4 font-medium opacity-80">— {item.author}</p>
                                </div>
                            </div>
                        )}

                        {item.type === 'look' && (
                            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[9/16]">
                                <img src={item.image} alt="Look" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    <h3 className="text-2xl font-extrabold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">Descubre el conjunto de la semana</p>
                                    <button className="bg-white text-black font-bold py-2 px-4 rounded-full self-start hover:bg-primary hover:text-white transition-colors">
                                        Ver Look
                                    </button>
                                </div>
                            </div>
                        )}

                        {item.type === 'flash' && (
                            <div className="relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white p-8 flex flex-col justify-center items-center text-center aspect-square transform hover:scale-[1.02] transition-transform">
                                <Bolt size={64} className="mb-4 text-accent animate-bounce" />
                                <h3 className="text-4xl font-extrabold mb-2 italic tracking-tighter">{item.title}</h3>
                                <p className="text-white/90 font-medium mb-6">{item.subtitle}</p>
                                <button className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-accent hover:text-black transition-all">
                                    Ver Ofertas
                                </button>
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="mt-20 flex flex-col items-center justify-center relative pb-12">
                <div className="w-64 h-1 bg-gray-200 rounded-full mb-8 overflow-hidden">
                    <div className="h-full bg-primary w-1/4 rounded-full"></div>
                </div>
                <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full overflow-hidden font-bold transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-80 group-hover:h-80 -ml-10 -mt-10 opacity-20"></span>
                    <span className="relative flex items-center gap-3">
                        CARGAR MÁS ESTILOS
                        <Plus size={20} className="animate-bounce" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ShopView;