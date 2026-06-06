import { Layout, Space, Typography } from 'antd';
import {
    GithubOutlined,
    LinkOutlined,
    MailOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import styles from './Footer.module.scss';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const currentYear = new Date().getFullYear();

const socialLinks = [
    {
        icon: <GithubOutlined />,
        href: 'https://github.com/RodionTmnkv',
        label: 'GitHub',
    },
    {
        icon: <LinkOutlined />,
        href: 'https://rostov.hh.ru/resume/79256586ff0ffe6a020039ed1f33594e31626f',
        label: 'hh.ru',
    },
    {
        icon: <MailOutlined />,
        href: 'mailto:rdntmnkv@mail.ru',
        label: 'Email',
    },
];

const Footer = () => (
    <AntFooter className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <Typography.Title className={styles.name} level={4}>
                        Rodion Temnikov
                    </Typography.Title>
                    <Text className={styles.role}>Frontend Developer</Text>
                </div>

                <Space className={styles.social} size="large">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.label}
                            aria-label={link.label}
                            className={styles.socialLink}
                            href={link.href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {link.icon}
                        </Link>
                    ))}
                </Space>
            </div>

            <div className={styles.copyright}>
                <Text className={styles.copyrightText}>
                    © {currentYear} Rodion Temnikov. Built with{' '}
                    <HeartOutlined className={styles.heart} /> using Next.js &
                    Ant Design
                </Text>
            </div>
        </div>
    </AntFooter>
);

export default Footer;
