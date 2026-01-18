import React, { useState, useEffect, useRef } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        });
        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${className || ''} transition-all duration-1000 ease-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};
