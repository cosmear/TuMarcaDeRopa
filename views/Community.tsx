import React from 'react';
import { Camera, Music, Calendar, MapPin, ArrowRight, Instagram } from 'lucide-react';
import { IMAGES } from '../constants';

const EVENTS = [
    { date: '12 NOV', title: 'Urban Night Market', location: 'Palermo Soho', image: IMAGES.friends },
    { date: '25 NOV', title: 'Workshop de Estilo', location: 'Flagship Store', image: IMAGES.fabricTexture },
    { date: '05 DIC', title: 'Lanzamiento Verano', location: 'Rooftop Bar', image: IMAGES.heroWomanMobile },
];

const CommunityView: React.FC = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Community Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={IMAGES.friends} alt="Grupo de amigos" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-bold tracking-widest uppercase mb-4">
                        #TumarcaderopaCommunity
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        MÁS QUE ROPA,<br />ES UN MOVIMIENTO.
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
                        Conectamos a creadores, artistas y exploradores urbanos.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Diseño Local</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Producido éticamente en Buenos Aires. Apoyamos el talento y la industria nacional.
                        </p>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Encuentros</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Desde pop-ups hasta fiestas. Creamos espacios para que nuestra comunidad se conozca.
                        </p>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                            <Music size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Cultura Urbana</h3>
                        <p className="text-slate-500 leading-relaxed">
                            La música y el arte son parte de nuestro ADN. Colaboramos con artistas emergentes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-slate-900 text-white py-24 overflow-hidden">
                <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Style Gallery</h2>
                        <p className="text-slate-400">Cómo llevan la marca en las calles.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                        <Instagram size={20} />
                        Ver en Instagram
                    </button>
                </div>
                
                {/* Scrolling Gallery */}
                <div className="flex gap-4 overflow-x-auto hide-scroll px-6 pb-8 snap-x">
                    {[IMAGES.clientNico, IMAGES.clientSofia, IMAGES.clientCami, IMAGES.heroWoman, IMAGES.denimJacket].map((img, i) => (
                        <div key={i} className="min-w-[300px] h-[400px] rounded-xl overflow-hidden relative group snap-center cursor-pointer">
                            <img src={img} alt="Community Member" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                <span className="font-bold text-lg">@usuario_style</span>
                                <span className="text-sm text-slate-300">Usando: Remera Flow</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-slate-900 flex items-center gap-3">
                    Próximos Eventos <span className="text-primary text-sm font-bold uppercase tracking-widest border border-primary px-2 py-1 rounded">Save the date</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {EVENTS.map((event, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white text-slate-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                                    {event.date}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                            <div className="flex items-center gap-2 text-slate-500">
                                <MapPin size={16} />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spotify / Playlist Section */}
            <section className="py-24 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                            <Music size={16} className="text-accent" />
                            <span className="font-bold text-sm tracking-wider">SONIDOS DE LA CIUDAD</span>
                        </div>
                        <h2 className="text-5xl font-black mb-6 leading-tight">
                            El ritmo de <br /> Urban Flow.
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-md">
                            Escucha nuestra playlist curada mensualmente. Lo que suena en nuestras tiendas, ahora en tus oídos.
                        </p>
                        <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-slate-900 transition-all shadow-lg flex items-center gap-3">
                            Escuchar en Spotify <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="relative">
                        <div className="bg-black/20 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-lg bg-slate-800 overflow-hidden">
                                    <img src={IMAGES.tieDyeHoodie} alt="Album Art" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">Urban Flow Vol. 4</h4>
                                    <p className="text-white/60">Curada por DJ Guest</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/40 font-bold">0{i}</span>
                                            <div>
                                                <p className="font-bold">Midnight City</p>
                                                <p className="text-xs text-white/60">M83 • Hurry Up, We're Dreaming</p>
                                            </div>
                                        </div>
                                        <PlayCircleIcon className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const PlayCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
);

export default CommunityView;