import type { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'ecommerce',
        title: 'E-commerce Platform',
        description:
            'Full-stack online store with React, TypeScript, and Next.js. Features include cart management, payment integration, and admin dashboard.',
        imageUrl: '/images/pik.ru.jpg',
        technologies: ['React', 'TypeScript', 'Next.js', 'Ant Design'],
        githubUrl: 'https://github.com/RodionTmnkv',
        demoUrl: 'https://www.pik.ru/',
    },
    {
        id: 'dashboard',
        title: 'Dashboard Analytics',
        description:
            'Real-time analytics dashboard with interactive charts, data filtering, and export functionality.',
        imageUrl: '/images/promomed.png',
        technologies: ['React', 'TypeScript', 'Ant Design', 'Chart.js'],
        githubUrl: 'https://github.com/RodionTmnkv',
        demoUrl: 'https://promomed.pro',
    },
    {
        id: 'portfolio',
        title: 'Portfolio Website',
        description:
            'Responsive portfolio with modern design, smooth animations, and contact form integration.',
        imageUrl: '/images/github.png',
        technologies: ['Next.js', 'TypeScript', 'Sass', 'Framer Motion'],
        githubUrl: 'https://github.com/RodionTmnkv',
        demoUrl: 'https://example.com',
    },
];
