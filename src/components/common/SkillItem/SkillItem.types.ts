import type { ComponentType } from 'react';

interface AntdIconProps {
    style?: React.CSSProperties;
    className?: string;
    [key: string]: unknown;
}

export interface SkillItemProps {
    name: string;
    level: number;
    icon?: ComponentType<AntdIconProps>;
    description?: string;
    color?: string;
    showLabel?: boolean;
    size?: 'small' | 'default' | 'large';
    className?: string;
}
