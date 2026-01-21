import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    size?: 'normal' | 'large';
    showIcon?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, size = 'normal', className, showIcon = false, ...props }) => {
    const sizeClasses = size === 'large'
        ? 'px-8 py-4 text-base md:text-lg whitespace-nowrap'
        : 'px-6 py-3 text-base';

    return (
        <a
            {...props}
            className={`inline-flex items-center justify-center font-sans font-bold text-white bg-brand-amber hover:bg-brand-amber-light rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-amber-light ${sizeClasses} ${className || ''}`}
        >
            {showIcon && <WhatsAppIcon className="w-5 h-5 mr-3" />}
            {children}
        </a>
    );
};
