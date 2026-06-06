import { Progress, Tooltip, Space } from 'antd';
import type { ProgressProps } from 'antd';
import type { SkillItemProps } from './SkillItem.types';
import styles from './SkillItem.module.scss';

const PROGRESS_SIZE_MAP: Record<string, ProgressProps['size']> = {
    small: 'small',
    default: 'default',
    large: [240, 20] as [number, number],
};

const SkillItem = ({
    name,
    level,
    icon: IconComponent,
    description,
    color,
    showLabel = true,
    size = 'default',
    className = '',
}: SkillItemProps) => {
    const progressSize = PROGRESS_SIZE_MAP[size];
    const progressWidth = size === 'large' ? 240 : undefined;

    return (
        <div className={`${styles.skillItem} ${styles[size]} ${className}`}>
            <Space align="center" className={styles.header} size="middle">
                {IconComponent && (
                    <span className={styles.icon}>
                        <IconComponent />
                    </span>
                )}
                <Tooltip title={description}>
                    <span className={styles.name}>{name}</span>
                </Tooltip>
            </Space>
            <Progress
                className={styles.progress}
                percent={level}
                showInfo={showLabel}
                size={progressSize}
                strokeColor={color}
                strokeLinecap="round"
                style={{ width: progressWidth }}
            />
        </div>
    );
};

export default SkillItem;
