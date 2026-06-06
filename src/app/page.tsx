'use client';

import { siteConfig } from '@/data/siteConfig';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimateOnScroll from '@/components/common/AnimateOnScroll';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import type { ContactFormSubmitValues } from '@/hooks/useContactForm';
import styles from './page.module.scss';

export default function Home() {
    const handleSubmit = async (values: ContactFormSubmitValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (process.env.NODE_ENV === 'development') {
            console.warn('Form submitted:', values);
        }
    };

    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <AnimateOnScroll>
                    <section id="home">
                        <HeroSection
                            name={siteConfig.name}
                            subtitle={siteConfig.subtitle}
                            title={siteConfig.title}
                        />
                    </section>
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <section id="projects">
                        <ProjectsSection />
                    </section>
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <section id="skills">
                        <SkillsSection />
                    </section>
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <section id="contact">
                        <ContactSection onSubmit={handleSubmit} />
                    </section>
                </AnimateOnScroll>
            </main>
            <Footer />
        </div>
    );
}
