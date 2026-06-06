const isProduction = process.env.NODE_ENV === 'production';

export const siteConfig = {
    name: 'Rodion Temnikov',
    title: 'Frontend Developer',
    subtitle: 'React • TypeScript • Next.js • Ant Design',
    description:
        'Professional frontend developer specializing in React ecosystem',
    author: 'Rodion Temnikov',
    basePath: isProduction ? '/portfolio-app' : '',
    cvUrl: isProduction
        ? '/portfolio-app/assets/resume.pdf'
        : '/assets/resume.pdf',
    social: {
        github: 'https://github.com/RodionTmnkv',
        hhru: 'https://rostov.hh.ru/resume/79256586ff0ffe6a020039ed1f33594e31626f',
        email: 'rdntmnkv@mail.ru',
    },
} as const;
