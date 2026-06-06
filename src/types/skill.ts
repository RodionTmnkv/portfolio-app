import type { ComponentType } from 'react';

interface AntdIconProps {
    style?: React.CSSProperties;
    className?: string;
    [key: string]: unknown;
}

export interface Skill {
    id: string;
    name: string;
    level: number;
    icon: ComponentType<AntdIconProps>;
    description: string;
    color: string;
}
