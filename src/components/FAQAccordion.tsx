'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-all ${
            openIndex === index 
              ? 'border-primary-500 bg-primary-50/30 shadow-md' 
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={openIndex === index}
          >
            <span className={`font-semibold text-lg pr-4 ${
              openIndex === index ? 'text-primary-800' : 'text-gray-900'
            }`}>
              {item.question}
            </span>
            <ChevronDownIcon 
              className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180 text-primary-700' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}