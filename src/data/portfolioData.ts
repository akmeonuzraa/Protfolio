import { Skill, Project, Experience } from '../types/portfolio';

export const skills: Skill[] = [
  { name: 'Java', level: 85, category: 'backend' },
  { name: 'API RESTful', level: 80, category: 'backend' },
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'Angular', level: 75, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'Power BI', level: 75, category: 'tools' },
  { name: 'Git/GitHub', level: 85, category: 'tools' },
  { name: 'UML', level: 80, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Système de Monitoring Réseau',
    description: 'Solution complète de surveillance réseau en temps réel avec tableaux de bord interactifs pour l\'analyse des performances et la détection d\'anomalies.',
    technologies: ['Java', 'MySQL', 'Power BI', 'Data Visualization'],
    githubUrl: 'https://github.com/akmeonuzraa',
  },
  {
    id: '2',
    title: 'Application Web de Gestion',
    description: 'Application full-stack moderne avec interface utilisateur intuitive, gestion complète CRUD et architecture scalable.',
    technologies: ['React.js', 'Java', 'MySQL', 'RESTful API'],
    githubUrl: 'https://github.com/akmeonuzraa',
  },
  {
    id: '3',
    title: 'Dashboards Interactifs Power BI',
    description: 'Conception de tableaux de bord dynamiques pour l\'analyse de données complexes et la prise de décision stratégique.',
    technologies: ['Power BI', 'Data Analysis', 'SQL', 'Data Storytelling'],
    githubUrl: 'https://github.com/akmeonuzraa',
  },
  {
    id: '4',
    title: 'Site Web Vitrine Professionnel',
    description: 'Développement d\'un site web moderne et responsive avec optimisation des performances et expérience utilisateur soignée.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/akmeonuzraa',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Stage de Développement Web',
    company: 'Agadir Ait Melloul',
    period: 'Juillet - Septembre 2025',
    description: [
      'Développement d\'applications web innovantes',
      'Collaboration avec des équipes techniques',
      'Contribution à des projets réels avec impact mesurable',
    ],
    type: 'work',
  },
  {
    id: '2',
    title: 'Développeuse Web',
    company: 'Projet Freelance',
    period: 'Juillet 2024',
    description: [
      'Conception et développement d\'un site web vitrine moderne',
      'Implémentation du design responsive pour tous les appareils',
      'Optimisation de l\'expérience utilisateur',
      'Création de présentations PowerPoint professionnelles',
    ],
    type: 'work',
  },
  {
    id: '3',
    title: 'Membre Active',
    company: 'ENACTUS Universiapolis',
    period: 'Janvier 2024 - Présent',
    description: [
      'Organisation d\'événements avec 200+ participants',
      'Encadrement de projets communautaires',
      'Co-développement du projet "Flavors of Souss"',
      'Promotion du patrimoine culturel local',
    ],
    type: 'volunteer',
  },
  {
    id: '4',
    title: 'Cycle d\'Ingénierie - Génie Informatique',
    company: 'École Polytechnique, Universiapolis',
    period: '2022 - 2026',
    description: [
      'Actuellement en 4ème année',
      'Spécialisation en développement web full-stack',
      'Formation en génie logiciel et architecture système',
    ],
    type: 'education',
  },
  {
    id: '5',
    title: 'Cycle Préparatoire Intégré',
    company: 'École Polytechnique, Universiapolis',
    period: '2021 - 2022',
    description: [
      'Mention : Bien',
      'Formation scientifique intensive',
    ],
    type: 'education',
  },
  {
    id: '6',
    title: 'Baccalauréat International Sciences Physiques',
    company: 'Lycée Houmane El Fetouaki',
    period: '2021',
    description: [
      'Mention : Très Bien',
    ],
    type: 'education',
  },
];
