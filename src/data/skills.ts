import {
    CodeOutlined,
    LayoutOutlined,
    CloudOutlined,
    SafetyOutlined,
    TeamOutlined,
    ToolOutlined,
} from '@ant-design/icons';
import type { Skill } from '@/types';

export const skills: Skill[] = [
    {
        id: 'react',
        name: 'React & Next.js',
        level: 90,
        icon: CodeOutlined,
        description:
            'Expert in building scalable React applications with Next.js',
        color: '#1677ff',
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        level: 85,
        icon: SafetyOutlined,
        description: 'Strong typing skills and advanced TypeScript patterns',
        color: '#3178c6',
    },
    {
        id: 'css',
        name: 'CSS & Sass',
        level: 95,
        icon: LayoutOutlined,
        description:
            'Advanced styling with CSS Modules, Sass, and responsive design',
        color: '#cc6699',
    },
    {
        id: 'antd',
        name: 'Ant Design',
        level: 80,
        icon: ToolOutlined,
        description:
            'Proficient in Ant Design component library and customization',
        color: '#f5222d',
    },
    {
        id: 'api',
        name: 'REST APIs',
        level: 75,
        icon: CloudOutlined,
        description: 'Experience with RESTful API integration and GraphQL',
        color: '#52c41a',
    },
    {
        id: 'team',
        name: 'Team Collaboration',
        level: 88,
        icon: TeamOutlined,
        description: 'Strong teamwork and communication skills, Git workflow',
        color: '#722ed1',
    },
];
