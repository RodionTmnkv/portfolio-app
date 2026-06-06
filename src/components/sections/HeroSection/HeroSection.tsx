import { Typography, Button, Space } from 'antd';
import {
    GithubOutlined,
    LinkOutlined,
    DownloadOutlined,
    ArrowDownOutlined,
} from '@ant-design/icons';
import styles from './HeroSection.module.scss';
import { siteConfig } from '@/data/siteConfig';

const { Title, Text } = Typography;

interface HeroSectionProps {
    name: string;
    title: string;
    subtitle: string;
}

const HeroSection = ({ name, title, subtitle }: HeroSectionProps) => (
    <section className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.badge}>Available for work</div>

            <Title className={styles.title} level={1}>
                Hi, I&apos;m{' '}
                <span className={styles.highlight}>
                    {name} and I&apos;m {title}
                </span>
            </Title>

            <Title className={styles.subtitle} level={2}>
                {subtitle}
            </Title>

            <Text className={styles.description}>
                I craft modern web applications with cutting-edge technologies.
                Passionate about clean code, great UX, and performance
                optimization.
            </Text>

            <Space wrap className={styles.actions} size="middle">
                <a download href={siteConfig.cvUrl} title={siteConfig.author}>
                    <Button
                        className={styles.primaryBtn}
                        icon={<DownloadOutlined />}
                        size="large"
                        type="primary"
                    >
                        Download CV
                    </Button>
                </a>

                <Button
                    className={styles.secondaryBtn}
                    href="https://github.com/RodionTmnkv"
                    icon={<GithubOutlined />}
                    size="large"
                    target="_blank"
                >
                    GitHub
                </Button>

                <Button
                    className={styles.secondaryBtn}
                    href="https://rostov.hh.ru/resume/79256586ff0ffe6a020039ed1f33594e31626f"
                    icon={<LinkOutlined />}
                    size="large"
                    target="_blank"
                >
                    hh.ru
                </Button>
            </Space>
        </div>

        <div className={styles.scrollIndicator}>
            <ArrowDownOutlined className={styles.arrow} />
            <span>Scroll down</span>
        </div>

        <div className={styles.decoration}>
            <div className={styles.circle1} />
            <div className={styles.circle2} />
            <div className={styles.circle3} />
        </div>
    </section>
);

export default HeroSection;
