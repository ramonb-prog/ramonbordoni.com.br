
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    size?: 'normal' | 'large';
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, children, size = 'normal' }) => {
    const isExternal = href.startsWith('http');
    
    const sizeClasses = size === 'large' 
        ? 'px-8 py-4 text-lg md:text-xl' 
        : 'px-6 py-3 text-base';

    return (
        <a
            href={href}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : ''}
            className={`inline-flex items-center justify-center font-sans font-bold text-white bg-brand-amber hover:bg-brand-amber-light rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-amber-light ${sizeClasses}`}
        >
            <WhatsAppIcon className="w-5 h-5 mr-3" />
            {children}
        </a>
    );
};
