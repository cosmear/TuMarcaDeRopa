import React from 'react';
import { Instagram, Facebook, Twitter, Camera, Music, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Tumarcaderopa.</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Moda que fluye con la ciudad. Únete a nuestra comunidad y obtén un 10% de descuento en tu primer paseo con nosotros.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                className="flex-1 bg-white border border-slate-300 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" 
                                placeholder="Tu correo electrónico" 
                                type="email" 
                            />
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors" type="button">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:justify-items-end">
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900">Tienda</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li><a href="#" className="hover:text-primary transition-colors">Novedades</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Mujer</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Hombre</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900">Compañía</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li><a href="#" className="hover:text-primary transition-colors">Nuestra Historia</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Tiendas</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Sostenibilidad</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-bold mb-4 text-slate-900">Social</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 Tumarcaderopa Fashion Group. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary">Política de Privacidad</a>
                        <a href="#" className="hover:text-primary">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;