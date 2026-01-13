
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-6">
              <GraduationCap className="text-blue-500" size={32} />
              <span className="text-2xl font-bold tracking-tight">CMC Laayoune</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              L'excellence académique pour le futur du Maroc. Nous formons des professionnels capables d'innover et de performer sur le marché mondial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-blue-500 transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Filières</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#majors" className="hover:text-blue-500 transition-colors">Gestion d'Entreprise</a></li>
              <li><a href="#majors" className="hover:text-blue-500 transition-colors">Digital & IT</a></li>
              <li><a href="#majors" className="hover:text-blue-500 transition-colors">Commerce & Marketing</a></li>
              <li><a href="#majors" className="hover:text-blue-500 transition-colors">Logistique</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Restez informé de nos actualités et événements.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all text-sm font-bold">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} CMC LAAYOUNE. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
