import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'ja', label: t('common:japanese') },
    { code: 'en', label: t('common:english') },
    { code: 'zh', label: t('common:chinese') }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
      >
        {currentLanguage.label}
        <i className={`ri-arrow-down-s-line transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer whitespace-nowrap ${
                i18n.language === lang.code ? 'bg-teal-50 text-teal-600 font-medium' : 'text-gray-700'
              } ${lang.code === languages[0].code ? 'rounded-t-md' : ''} ${lang.code === languages[languages.length - 1].code ? 'rounded-b-md' : ''}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
