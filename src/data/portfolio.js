import healthbitLogo from '../assets/companies/healthbit.png';
import kyndrylLogo from '../assets/companies/kyndryl.svg';
import netglobeLogo from '../assets/companies/netglobe.jpg';

export const CONTACT_EMAIL = 'allanvinisilva@gmail.com';

export const navigationLinks = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'trajetoria', label: 'Trajetória' },
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

export const experiences = [
  {
    id: 'healthbit',
    company: 'Healthbit',
    logo: healthbitLogo,
    role: 'Desenvolvedor Fullstack',
    startDate: '2024-10',
    startLabel: 'out. 2024',
    endDate: '2026-01',
    endLabel: 'jan. 2026',
    description:
      'Atuei em uma plataforma de saúde digital de larga escala, construindo interfaces com React e TypeScript e APIs com Node.js e Python. Participei de integrações cloud, mensageria, decisões de arquitetura e melhorias de performance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python'],
  },
  {
    id: 'kyndryl',
    company: 'Kyndryl',
    logo: kyndrylLogo,
    role: 'Desenvolvedor Fullstack',
    startDate: '2022-01',
    startLabel: 'jan. 2022',
    endDate: '2024-03',
    endLabel: 'mar. 2024',
    description:
      'Desenvolvi aplicações corporativas com React e Node.js em times distribuídos e projetos internacionais. Trabalhei na integração de serviços com RabbitMQ e Azure e em melhorias de pipelines e confiabilidade dos sistemas.',
    technologies: ['React', 'Node.js', 'RabbitMQ', 'Azure'],
  },
  {
    id: 'netglobe',
    company: 'Netglobe',
    logo: netglobeLogo,
    role: 'Desenvolvedor Fullstack',
    startDate: '2021-05',
    startLabel: 'mai. 2021',
    endDate: '2021-12',
    endLabel: 'dez. 2021',
    description:
      'Trabalhei em uma plataforma de videoconferência e colaboração em tempo real, desenvolvendo backends com Express e interfaces com React e Next.js. Também participei de integrações com AWS e bancos SQL e NoSQL.',
    technologies: ['React', 'Next.js', 'Express', 'AWS'],
  },
];

export const technologyGroups = [
  {
    title: 'Front-end',
    description: 'Interfaces claras, responsivas e pensadas para quem usa.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Flutter', 'HTML', 'CSS', 'Sass'],
    icon: 'window',
  },
  {
    title: 'Back-end & dados',
    description: 'A lógica e as conexões que fazem a aplicação acontecer.',
    items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Python', 'Redis', 'Docker', 'Express'],
    icon: 'layers',
  },
  {
    title: 'Infra & integrações',
    description: 'Serviços, mensagens e ferramentas que conectam o todo.',
    items: ['AWS', 'Azure', 'RabbitMQ', 'Kafka', 'Git', 'GCP', 'Terraform', 'Kubernetes'],
    icon: 'nodes',
  },
];
