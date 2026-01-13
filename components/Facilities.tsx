
import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Infrastructures</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
              Un Campus à la Pointe de la Technologie
            </h3>
          </div>
          <p className="text-slate-600 md:max-w-md mt-4 md:mt-0">
            Nous mettons à votre disposition des équipements modernes pour favoriser une immersion professionnelle totale dès votre premier jour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => (
            <div key={facility.id} className="group relative rounded-2xl overflow-hidden h-96 shadow-lg">
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <h4 className="text-xl font-bold text-white mb-2">{facility.title}</h4>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
