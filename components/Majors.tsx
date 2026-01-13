
import React from 'react';
import { Briefcase, Cpu, ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';
import { MAJORS } from '../constants';

const iconMap: { [key: string]: any } = {
  Briefcase,
  Cpu,
  ShoppingCart,
  Truck
};

const Majors: React.FC = () => {
  return (
    <section id="majors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Nos Filières</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
            Des Programmes Conçus pour <span className="text-blue-600">Votre Réussite</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choisissez la spécialisation qui correspond à vos aspirations professionnelles. 
            Chaque filière est certifiée et alignée sur les standards internationaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MAJORS.map((major) => {
            const IconComponent = iconMap[major.icon];
            return (
              <div key={major.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row border border-slate-100">
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img
                    src={major.image}
                    alt={major.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 lg:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{major.name}</h4>
                  </div>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {major.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Opportunités de Carrière</span>
                    <div className="flex flex-wrap gap-2">
                      {major.career.map((c, idx) => (
                        <span key={idx} className="flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                          <CheckCircle2 className="text-blue-500 mr-1" size={12} />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-blue-600 font-bold text-sm flex items-center hover:underline">
                    En savoir plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Majors;
