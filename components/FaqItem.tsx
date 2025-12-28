
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FaqItemProps {
    question: string;
    children: React.ReactNode;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 py-4 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-graphite hover:text-teal-primary transition-colors duration-200 focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="pr-4">{question}</span>
                <ChevronDownIcon
                    className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}
            >
                <div className="text-slate-600 space-y-4 pb-2">
                    {children}
                </div>
            </div>
        </div>
    );
};
