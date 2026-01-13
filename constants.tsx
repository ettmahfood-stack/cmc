
import { NavItem, Major, Facility } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À Propos', href: '#about' },
  { label: 'Filières', href: '#majors' },
  { label: 'Infrastructures', href: '#facilities' },
  { label: 'Vie Étudiante', href: '#student-life' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const MAJORS: Major[] = [
  {
    id: 'management',
    name: 'Gestion des Entreprises',
    description: 'Devenez un leader capable de piloter des projets complexes et de gérer des équipes au sein d\'organisations modernes.',
    career: ['Chef de projet', 'Manager RH', 'Consultant en organisation'],
    icon: 'Briefcase',
    image: 'https://picsum.photos/seed/mgmt/800/600'
  },
  {
    id: 'digital',
    name: 'Digital & Informatique',
    description: 'Maîtrisez les technologies de pointe, du développement web à l\'intelligence artificielle, pour façonner le futur numérique.',
    career: ['Développeur Full Stack', 'Data Analyst', 'Architecte Cloud'],
    icon: 'Cpu',
    image: 'https://picsum.photos/seed/digital/800/600'
  },
  {
    id: 'commerce',
    name: 'Commerce & Marketing Digital',
    description: 'Apprenez l\'art de la négociation et les stratégies de marketing numérique pour propulser les ventes sur les marchés mondiaux.',
    career: ['Responsable Marketing', 'Growth Hacker', 'Key Account Manager'],
    icon: 'ShoppingCart',
    image: 'https://picsum.photos/seed/commerce/800/600'
  },
  {
    id: 'logistics',
    name: 'Logistique & Transport',
    description: 'Optimisez les flux de marchandises et gérez la supply chain dans un monde interconnecté en pleine mutation.',
    career: ['Supply Chain Manager', 'Responsable Logistique', 'Analyste Transports'],
    icon: 'Truck',
    image: 'https://picsum.photos/seed/logistic/800/600'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'amphi',
    title: 'Amphithéâtre Moderne',
    description: 'Un espace de conférence équipé des dernières technologies audiovisuelles pour les séminaires et cours magistraux.',
    image: 'https://picsum.photos/seed/amphi/1000/600'
  },
  {
    id: 'lab',
    title: 'Laboratoires Multimédia',
    description: 'Stations de travail haute performance pour le design, le codage et les simulations commerciales.',
    image: 'https://picsum.photos/seed/lab/1000/600'
  },
  {
    id: 'library',
    title: 'Bibliothèque & E-Learning',
    description: 'Accès à des milliers de ressources physiques et numériques pour approfondir vos connaissances.',
    image: 'https://picsum.photos/seed/library/1000/600'
  },
  {
    id: 'coworking',
    title: 'Espaces de Co-working',
    description: 'Zones dédiées au travail d\'équipe et à l\'incubation de projets étudiants innovants.',
    image: 'https://picsum.photos/seed/cowork/1000/600'
  }
];
