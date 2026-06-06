'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './AnimateOnScroll.module.scss';

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
}

const AnimateOnScroll = ({
    children,
    className = '',
}: AnimateOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.animate} ${isVisible ? styles.visible : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
