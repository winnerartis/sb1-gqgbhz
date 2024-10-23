import React from 'react';
import { SlidersHorizontal, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FilterBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-3 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{t('pickupTime')}</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t('distance')}</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm">{t('filters')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}