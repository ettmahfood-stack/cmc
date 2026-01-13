
import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! (Ceci est une démo front-end)");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="bg-blue-600 text-white p-12 lg:w-1/3">
            <h3 className="text-3xl font-serif mb-8">Informations de Contact</h3>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions concernant les admissions et la vie sur le campus.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-200 shrink-0" size={24} />
                <p>Zone Industrielle, Laâyoune, Maroc</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-200 shrink-0" size={24} />
                <p>+212 5 28 89 XX XX</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-200 shrink-0" size={24} />
                <p>contact@cmc-laayoune.ma</p>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div className="mt-12 rounded-xl overflow-hidden shadow-inner grayscale opacity-60">
                <img src="https://picsum.photos/seed/map-laayoune/400/300" alt="Map Placeholder" className="w-full h-32 object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:w-2/3">
            <h3 className="text-3xl font-serif text-slate-900 mb-8">Envoyez-nous un Message</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Nom Complet</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-600">Sujet</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white">
                  <option>Demande d'admission</option>
                  <option>Renseignements sur les filières</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-600">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center space-x-2"
                >
                  <span>Envoyer le Message</span>
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
