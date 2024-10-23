import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full"
      aria-label="Switch language"
    >
      <Globe className="h-6 w-6 text-gray-600" />
      <span className="text-sm font-medium text-gray-600">
        {language.toUpperCase()}
      </span>
    </button>
  );
}