
import React from 'react';

const images = [
  'https://picsum.photos/seed/g1/800/800',
  'https://picsum.photos/seed/g2/800/600',
  'https://picsum.photos/seed/g3/600/800',
  'https://picsum.photos/seed/g4/800/800',
  'https://picsum.photos/seed/g5/800/600',
  'https://picsum.photos/seed/g6/600/800',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Galerie</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
            L'Institut en <span className="text-blue-600">Images</span>
          </h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl break-inside-avoid">
              <img
                src={src}
                alt={`Gallery ${idx}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-bold bg-blue-600/80 px-4 py-2 rounded-lg translate-y-4 group-hover:translate-y-0 transition-all">
                  Voir Agrandissement
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
