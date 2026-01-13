
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/60 z-10"></div>
      
      {/* Background Image */}
      <img
        src="https://picsum.photos/seed/laayoune-campus/1920/1080"
        alt="Campus CMC Laayoune"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-4 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6 animate-pulse">
            Inscriptions Ouvertes 2024 - 2025
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Forger les Leaders de <br />
            <span className="text-blue-400">Demain à Laâyoune</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Le CMC Laâyoune est un pôle d'excellence dédié au Management et au Commerce. 
            Préparez votre avenir avec une formation pratique, moderne et adaptée aux besoins du marché mondial.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <a
              href="#majors"
              className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-xl shadow-blue-900/40 group"
            >
              Découvrir nos filières
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-lg font-bold transition-all"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements for visual appeal */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </section>
  );
};

export default Hero;
