
import React from 'react';
import { Users, Music, Trophy, Calendar } from 'lucide-react';

const activities = [
  { icon: Users, title: 'Clubs Étudiants', text: 'Arts, technologie, entrepreneuriat. Trouvez votre communauté.' },
  { icon: Trophy, title: 'Compétitions', text: 'Participez à des hackathons et des business games nationaux.' },
  { icon: Music, title: 'Événements Culturels', text: 'Festivals, conférences et célébrations régionales.' },
  { icon: Calendar, title: 'Vie Associative', text: 'Engagez-vous dans des projets sociaux et solidaires.' },
];

const StudentLife: React.FC = () => {
  return (
    <section id="student-life" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Vie Étudiante</h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Bien plus qu'une formation,<br /> une <span className="text-blue-400 italic">expérience de vie</span>
            </h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Au CMC Laâyoune, nous croyons que l'épanouissement personnel est indissociable de la réussite académique. 
              Découvrez un environnement dynamique où chaque étudiant peut cultiver ses talents.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {activities.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/s1/400/500" alt="Club" className="rounded-2xl shadow-xl mt-12" />
              <img src="https://picsum.photos/seed/s2/400/500" alt="Sport" className="rounded-2xl shadow-xl" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-500/20 rounded-full scale-110 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
