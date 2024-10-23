import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';

export default function CategoryBar() {
  const { t } = useLanguage();

  return (
    <div className="overflow-x-auto py-4 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 
                       hover:bg-green-50 hover:border-green-500 hover:text-green-700
                       transition-colors duration-200 focus:outline-none focus:ring-2
                       focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="text-sm font-medium">{t(category.nameKey)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}