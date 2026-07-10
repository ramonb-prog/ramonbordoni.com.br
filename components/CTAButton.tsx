import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    size?: 'normal' | 'large';
    showIcon?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, size = 'normal', className, showIcon = false, ...props }) => {
    const sizeClasses = size === 'large'
        ? 'px-4 md:px-5 py-3 md:py-4 text-base md:text-lg'
        : 'px-3 md:px-4 py-2 md:py-3 text-base';

    return (
        <a
            {...props}
            className={`inline-flex items-center justify-center text-center font-sans font-bold text-white bg-brand-amber hover:bg-brand-amber-light rounded-lg shadow-xl shadow-black/20 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-amber-light w-auto max-w-full whitespace-normal sm:whitespace-nowrap ${sizeClasses} ${className || ''}`}
        >
            {showIcon && <WhatsAppIcon className="w-5 h-5 mr-3 flex-shrink-0" />}
            {children}
        </a>
    );
};
