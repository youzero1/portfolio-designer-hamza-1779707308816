import type { Project, Service, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: '01',
    title: 'Lumen Studio',
    category: 'Brand Identity',
    year: '2024',
    description: 'A complete visual identity system for an emerging architecture firm.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    tags: ['Branding', 'Identity', 'Print'],
  },
  {
    id: '02',
    title: 'Northwind App',
    category: 'Product Design',
    year: '2024',
    description: 'Mobile-first product experience for a logistics startup.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    tags: ['UX', 'Mobile', 'SaaS'],
  },
  {
    id: '03',
    title: 'Atelier Noir',
    category: 'Web Development',
    year: '2023',
    description: 'High-end e-commerce platform for a luxury fashion atelier.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    tags: ['Web', 'E-commerce', 'Motion'],
  },
  {
    id: '04',
    title: 'Foreground OS',
    category: 'Interface Design',
    year: '2023',
    description: 'A productivity operating system rethinking how teams collaborate.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',
    tags: ['UI', 'Dashboard', 'Design System'],
  },
  {
    id: '05',
    title: 'Helios Magazine',
    category: 'Editorial',
    year: '2023',
    description: 'A quarterly print and digital magazine on the future of cities.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
    tags: ['Editorial', 'Type', 'Layout'],
  },
  {
    id: '06',
    title: 'Pulse Labs',
    category: 'Web Development',
    year: '2022',
    description: 'Research portal for an independent biotech accelerator.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80',
    tags: ['Web', 'CMS', 'Research'],
  },
];

export const services: Service[] = [
  {
    id: 's1',
    number: '01',
    title: 'Brand Identity',
    description: 'Building distinctive visual systems that scale with your business.',
    bullets: ['Logo & Wordmark', 'Visual Guidelines', 'Brand Strategy', 'Typography Systems'],
  },
  {
    id: 's2',
    number: '02',
    title: 'Product Design',
    description: 'Designing digital products that people actually want to use.',
    bullets: ['UX Research', 'Wireframing', 'Interface Design', 'Prototyping'],
  },
  {
    id: 's3',
    number: '03',
    title: 'Development',
    description: 'Crafting fast, accessible, and elegant web experiences.',
    bullets: ['React & Next.js', 'Headless CMS', 'Performance', 'Animation'],
  },
  {
    id: 's4',
    number: '04',
    title: 'Art Direction',
    description: 'End-to-end creative direction for campaigns and launches.',
    bullets: ['Campaign Concepts', 'Photography', 'Motion', 'Editorial'],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Designer',
    company: 'Studio Forma',
    period: '2022 — Present',
    description: 'Leading brand and product design engagements for early-stage and established clients.',
  },
  {
    role: 'Design Lead',
    company: 'Northwind Co.',
    period: '2020 — 2022',
    description: 'Built the design system and shipped the flagship logistics platform from 0 to 1.',
  },
  {
    role: 'Freelance Designer',
    company: 'Independent',
    period: '2018 — 2020',
    description: 'Worked with international agencies and startups on identity and web projects.',
  },
  {
    role: 'Junior Designer',
    company: 'Atelier Mono',
    period: '2016 — 2018',
    description: 'Editorial and print design across magazines, books, and exhibition collateral.',
  },
];

export const clients = [
  'Northwind',
  'Lumen',
  'Atelier Noir',
  'Helios',
  'Pulse Labs',
  'Foreground',
  'Forma',
  'Mono',
];
