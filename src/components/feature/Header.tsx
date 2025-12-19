import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Language Switcher Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2 gap-4">
            <button
              onClick={() => changeLanguage('ja')}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                currentLanguage === 'ja'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-gray-200'
              }`}
            >
              {t('japanese')}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                currentLanguage === 'en'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-gray-200'
              }`}
            >
              {t('english')}
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                currentLanguage === 'zh'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-gray-200'
              }`}
            >
              {t('chinese')}
            </button>
            <button
              onClick={() => changeLanguage('zh-TW')}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                currentLanguage === 'zh-TW'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-gray-200'
              }`}
            >
              {t('chineseTraditional')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="https://www.komatsubane.com/img/icon01s.png" alt="Logo" className="w-12 h-12" />
            <div>
              <h1 className="font-bold text-base text-gray-900">{t('companyName')}</h1>
              <p className="text-xs text-gray-600">{t('companyNameEn')}</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-8">
            {/* Products Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
            >
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors"
              >
                {t('productInfo')}
              </Link>
              {showProductsMenu && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-lg shadow-lg py-2">
                    <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('features')}
                    </Link>
                    <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('springTypes')}
                    </Link>
                    <Link to="/products/torsion-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('torsionSpring')}
                    </Link>
                    <Link to="/products/compression-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('compressionSpring')}
                    </Link>
                    <Link to="/products/tension-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('tensionSpring')}
                    </Link>
                    <Link to="/products/wire-forming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('wireForming')}
                    </Link>
                    <Link to="/products/micro-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('microSpring')}
                    </Link>
                    <Link to="/products/other-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('otherProducts')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCompanyMenu(true)}
              onMouseLeave={() => setShowCompanyMenu(false)}
            >
              <Link 
                to="/company/overview" 
                className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors"
              >
                {t('companyProfile')}
              </Link>
              {showCompanyMenu && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-lg shadow-lg py-2">
                    <Link to="/company/message" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('message')}
                    </Link>
                    <Link to="/company/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('companySummary')}
                    </Link>
                    <Link to="/company/office" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('office')}
                    </Link>
                    <Link to="/company/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('history')}
                    </Link>
                    <Link to="/company/csr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
                      {t('quality')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors">
              {t('contact')}
            </Link>

            <Link to="/recruit" className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors">
              {t('recruit')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
