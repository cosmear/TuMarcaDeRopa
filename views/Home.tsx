import React from 'react';
import { ArrowRight, ArrowLeft, Camera, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { IMAGES, MOCK_NEW_ARRIVALS } from '../constants';
import { ViewState } from '../types';

interface HomeViewProps {
    setView: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 lg:px-12 min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 animate-in slide-in-from-left-8 duration-700">
                        <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-xs">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Primavera / Verano 2024
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-slate-900">
                            Movimiento <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic font-light">en cada</span> <br />
                            prenda.
                        </h1>
                        <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                            Diseñado en el corazón de Buenos Aires. Siluetas fluidas para el caminante moderno explorando las calles.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <button 
                                onClick={() => setView('shop')}
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 flex items-center gap-2"
                            >
                                Ver Colección <ArrowRight size={18} />
                            </button>
                            <button 
                                onClick={() => setView('shop')}
                                className="px-6 py-4 rounded-full font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                            >
                                Ver Lookbook
                            </button>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 relative h-[600px] w-full order-1 lg:order-2 hidden lg:block animate-in zoom-in-95 duration-1000">
                        <div className="absolute right-0 top-0 w-3/4 h-[550px] rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 ease-out">
                            <img src={IMAGES.heroWoman} alt="Mujer con vestido pastel fluido" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute left-0 bottom-12 w-2/5 h-[350px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transform translate-y-8 hover:translate-y-4 transition-transform duration-500">
                            <img src={IMAGES.textureBeige} alt="Textura de tela" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute left-1/3 top-12 w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-center p-4 font-bold text-sm leading-tight rotate-12 shadow-lg animate-blob">
                            Nuevo <br /> Drop
                        </div>
                    </div>
                    
                    {/* Mobile Image */}
                    <div className="lg:hidden h-[50vh] w-full rounded-2xl overflow-hidden relative order-1 mb-6">
                         <img src={IMAGES.heroWomanMobile} alt="Mujer caminando" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            {/* Marquee */}
            <div className="w-full bg-slate-900 text-white overflow-hidden py-4 rotate-1 lg:-rotate-1 scale-105 border-y-4 border-primary">
                <div className="whitespace-nowrap flex gap-12 animate-marquee font-bold text-2xl uppercase tracking-wider">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>• Elegancia Urbana</span>
                            <span>• Estilo Tumarcaderopa</span>
                            <span>• Fluidez en Movimiento</span>
                            <span>• Lujo Accesible</span>
                            <span>• Diseño de Buenos Aires</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* New Arrivals */}
            <section className="py-24 overflow-hidden">
                <div className="px-6 lg:px-12 mb-10 flex items-end justify-between max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-slate-900">Recién Llegados</h2>
                        <p className="text-slate-500">Piezas seleccionadas para la nueva temporada.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="flex gap-6 overflow-x-auto hide-scroll px-6 lg:px-12 pb-12 snap-x">
                    {MOCK_NEW_ARRIVALS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* Essence Section */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] w-full">
                        <div className="absolute inset-0 bg-slate-100 rounded-3xl opacity-50 overflow-hidden">
                            <img src={IMAGES.mapAbstract} alt="Mapa abstracto" className="w-full h-full object-cover opacity-20 grayscale" />
                        </div>
                        <div className="absolute top-10 left-10 right-20 bottom-20 rounded-2xl overflow-hidden shadow-2xl">
                            <img src={IMAGES.architecture} alt="Arquitectura clásica" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                            <img src={IMAGES.womanWalking} alt="Mujer caminando" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="relative z-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Nuestra Esencia</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900">
                            Nacidos en las calles <br /> de <span className="italic text-slate-500">Buenos Aires</span>.
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Nos inspiramos en la energía de nuestra comunidad, donde la arquitectura clásica se encuentra con la vibra latina moderna. Nuestros diseños priorizan el movimiento.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <span className="material-icons-outlined">architecture</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Inspirados por la Herencia</h4>
                                    <p className="text-slate-500 text-sm">Líneas clásicas reimaginadas para hoy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <span className="material-icons-outlined">waves</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Diseñados para Fluir</h4>
                                    <p className="text-slate-500 text-sm">Telas que se mueven contigo, nunca en tu contra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button onClick={() => setView('shop')} className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-2 border-b-2 border-primary pb-1">
                                Descubre Nuestra Historia <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Comunidad Tumarcaderopa</span>
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Nuestros Clientes</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Gente real, estilo real. Únete a nuestra comunidad y muéstranos cómo llevas tu movimiento. Etiquétanos en @Tumarcaderopa.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                         <div className="relative group overflow-hidden rounded-xl shadow-md row-span-1 md:row-span-2">
                            <img src={IMAGES.clientNico} alt="Cliente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full">
                                <Camera className="text-white w-4 h-4" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                <span className="text-white font-bold text-sm">@nico_urbano</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md">
                            <img src={IMAGES.clientSofia} alt="Cliente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                <span className="text-white font-bold text-sm">@sofia.style</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md">
                             <img src={IMAGES.fabricTexture} alt="Textura" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart className="text-white w-8 h-8" />
                             </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md md:col-span-2">
                             <img src={IMAGES.clientCami} alt="Cliente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end flex-col justify-end items-start">
                                <span className="text-white font-bold text-lg">@cami_caminante</span>
                                <span className="text-white/80 text-sm italic">"Amando la fluidez."</span>
                             </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md">
                             <img src={IMAGES.linenShirt} alt="Cliente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                         <div className="relative group overflow-hidden rounded-xl shadow-md">
                             <img src={IMAGES.denimJacket} alt="Cliente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <button className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium">
                            <Camera size={18} className="text-primary" />
                            Ver más en Instagram
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeView;