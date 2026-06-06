'use client';

import { useState, useCallback } from 'react';
import { Layout, Button, Drawer } from 'antd';
import {
    MenuOutlined,
    HomeOutlined,
    CodeOutlined,
    ToolOutlined,
    ContactsOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Header.module.scss';

const { Header: AntHeader } = Layout;

interface NavItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { key: 'home', label: 'Home', icon: <HomeOutlined />, href: '#home' },
    {
        key: 'projects',
        label: 'Projects',
        icon: <CodeOutlined />,
        href: '#projects',
    },
    {
        key: 'skills',
        label: 'Skills',
        icon: <ToolOutlined />,
        href: '#skills',
    },
    {
        key: 'contact',
        label: 'Contact',
        icon: <ContactsOutlined />,
        href: '#contact',
    },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isScrolled = useHeaderScroll(20);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useScrollLock(drawerOpen && isMobile);

    const scrollToSection = useCallback((href: string) => {
        setDrawerOpen(false);

        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }, []);

    const handleDrawerClose = useCallback(() => {
        setDrawerOpen(false);
    }, []);

    const handleDrawerOpen = useCallback(() => {
        setDrawerOpen(true);
    }, []);

    return (
        <>
            <AntHeader
                className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
            >
                <div className={styles.container}>
                    <button
                        aria-label="Go to home"
                        className={styles.logo}
                        onClick={() => scrollToSection('#home')}
                    >
                        <CodeOutlined className={styles.logoIcon} />
                        <span className={styles.logoText}>RT</span>
                    </button>

                    <nav
                        aria-label="Main navigation"
                        className={styles.desktopNav}
                    >
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.key}
                                className={styles.navLink}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <Button
                        aria-expanded={drawerOpen}
                        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
                        className={styles.menuButton}
                        icon={drawerOpen ? <CloseOutlined /> : <MenuOutlined />}
                        type="text"
                        onClick={
                            drawerOpen ? handleDrawerClose : handleDrawerOpen
                        }
                    />
                </div>
            </AntHeader>

            <Drawer
                className={styles.drawer}
                closeIcon={<CloseOutlined />}
                open={drawerOpen}
                placement="right"
                size="medium"
                styles={{
                    mask: {
                        backdropFilter: 'blur(2px)',
                        background: 'rgba(0, 0, 0, 0.3)',
                    },
                }}
                title="Navigation"
                onClose={handleDrawerClose}
            >
                <nav aria-label="Mobile navigation">
                    <ul className={styles.mobileNavList}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.key}>
                                <button
                                    className={styles.mobileNavLink}
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    <span className={styles.mobileNavIcon}>
                                        {item.icon}
                                    </span>
                                    <span className={styles.mobileNavLabel}>
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Drawer>
        </>
    );
};

export default Header;
