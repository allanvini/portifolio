export const CONTACT_EMAIL = 'allanvinisilva@gmail.com';

export const navigationLinks = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Tecnologias' },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/allanvini', icon: 'github' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/allan-vinicius-13ba4493/',
    icon: 'linkedin',
  },
  { name: 'WhatsApp', href: 'https://wa.me/5519992575381', icon: 'message' },
];

export const featuredProject = {
  name: 'AnalyzAI',
  url: 'https://analyzai.com.br/',
  domain: 'analyzai.com.br',
  image: '/images/analyzai-og.png',
  imageAlt: 'AnalyzAI — monitoramento industrial com inteligência artificial',
  description:
    'Dados de vibração, telemetria e inteligência artificial conectados para apoiar a manutenção preditiva de máquinas industriais.',
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
};

export const technologyGroups = [
  {
    title: 'Front-end',
    description: 'Interfaces claras, responsivas e pensadas para quem usa.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    icon: 'window',
  },
  {
    title: 'Back-end & dados',
    description: 'A lógica e as conexões que fazem a aplicação acontecer.',
    items: ['Node.js', 'NestJS', 'Java', 'PostgreSQL', 'MongoDB'],
    icon: 'layers',
  },
  {
    title: 'Infra & integrações',
    description: 'Serviços, mensagens e ferramentas que conectam o todo.',
    items: ['AWS', 'Azure', 'RabbitMQ', 'Kafka', 'Git'],
    icon: 'nodes',
  },
];
