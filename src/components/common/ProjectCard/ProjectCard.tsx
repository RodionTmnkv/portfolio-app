import { memo } from 'react';
import { Card, Button, Tag, Space, Tooltip } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import Image from 'next/image';
import type { ProjectCardProps } from './index';
import styles from './ProjectCard.module.scss';

const ProjectCard: React.FC<ProjectCardProps> = memo(
    ({
        title,
        description,
        imageUrl,
        technologies,
        githubUrl,
        demoUrl,
        className = '',
    }) => (
        <Card
            hoverable
            actions={[
                githubUrl && (
                    <Tooltip key="github" title="View Source Code">
                        <Button
                            href={githubUrl}
                            icon={<GithubOutlined />}
                            rel="noopener noreferrer"
                            target="_blank"
                            type="link"
                        />
                    </Tooltip>
                ),
                demoUrl && (
                    <Tooltip key="demo" title="Live Demo">
                        <Button
                            href={demoUrl}
                            icon={<LinkOutlined />}
                            rel="noopener noreferrer"
                            target="_blank"
                            type="link"
                        />
                    </Tooltip>
                ),
            ].filter(Boolean)}
            className={`${styles.card} ${className}`}
            cover={
                <div className={styles.imageWrapper}>
                    <Image
                        fill
                        alt={title}
                        className={styles.image}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={imageUrl}
                    />
                </div>
            }
        >
            <Card.Meta
                description={
                    <p className={styles.description}>{description}</p>
                }
                title={<h3 className={styles.title}>{title}</h3>}
            />
            <Space wrap className={styles.tags} size={[8, 12]}>
                {technologies.map((tech) => (
                    <Tag key={tech} color="blue">
                        {tech}
                    </Tag>
                ))}
            </Space>
        </Card>
    )
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
