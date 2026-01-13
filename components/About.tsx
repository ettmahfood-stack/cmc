
import React from 'react';
import { Target, Eye, ShieldCheck, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/about-cmc/800/800"
              alt="Notre Vision"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-0"></div>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">À propos de nous</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              L'Excellence Académique au Cœur du Sahara
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Le Centre de Management et de Commerce (CMC) de Laâyoune est une institution de référence 
              faisant partie du réseau des Cités des Métiers et des Compétences. Notre objectif est de 
              propulser la jeunesse de la région vers des carrières d'excellence en leur offrant un 
              environnement d'apprentissage innovant.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50/50">
                <Target className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Notre Mission</h4>
                <p className="text-slate-600 text-sm">Former des experts opérationnels dotés de "soft skills" pour relever les défis de demain.</p>
              </div>
              <div className="p-5 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50/50">
                <Eye className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Notre Vision</h4>
                <p className="text-slate-600 text-sm">Devenir le premier hub régional d'innovation managériale et commerciale en Afrique du Nord.</p>
              </div>
              <div className="p-5 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50/50">
                <ShieldCheck className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Valeurs</h4>
                <p className="text-slate-600 text-sm">Intégrité, Excellence, Innovation et Inclusion au service de la réussite étudiante.</p>
              </div>
              <div className="p-5 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50/50">
                <History className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Histoire</h4>
                <p className="text-slate-600 text-sm">Un projet stratégique né de la volonté de dynamiser le développement économique local.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
