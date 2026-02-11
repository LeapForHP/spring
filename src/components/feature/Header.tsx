import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  
  // PC用ドロップダウンの状態
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  // スマホ用メニューの状態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  // リンククリック時にメニューを閉じるヘルパー関数
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Language Switcher Bar - スマホでも表示し続けるか、必要ならここも調整可能 */}
      <div className="bg-gray-100 border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2 gap-2 sm:gap-4 min-w-max">
            {['ja', 'en', 'zh', 'zh-TW'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded transition-colors ${
                  currentLanguage === lang
                    ? 'bg-teal-600 text-white font-semibold'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-gray-200'
                }`}
              >
                {t(lang === 'ja' ? 'japanese' : lang === 'en' ? 'english' : lang === 'zh' ? 'chinese' : 'chineseTraditional')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={handleLinkClick}>
            <img src="https://www.komatsubane.com/img/icon01s.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <h1 className="font-bold text-sm sm:text-base text-gray-900">{t('companyName')}</h1>
              <p className="text-[10px] sm:text-xs text-gray-600">{t('companyNameEn')}</p>
            </div>
          </Link>

          {/* Desktop Navigation Menu (Large screens only) */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products Menu (Desktop) */}
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
                  <div className="w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('features')}
                    </Link>
                    <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('springTypes')}
                    </Link>
                    <Link to="/products/torsion-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('torsionSpring')}
                    </Link>
                    <Link to="/products/compression-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('compressionSpring')}
                    </Link>
                    <Link to="/products/tension-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('tensionSpring')}
                    </Link>
                    <Link to="/products/wire-forming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('wireForming')}
                    </Link>
                    <Link to="/products/micro-spring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('microSpring')}
                    </Link>
                    <Link to="/products/other-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('otherProducts')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Menu (Desktop) */}
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
                  <div className="w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    <Link to="/company/message" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('message')}
                    </Link>
                    <Link to="/company/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('companySummary')}
                    </Link>
                    <Link to="/company/office" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('office')}
                    </Link>
                    <Link to="/company/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('history')}
                    </Link>
                    <Link to="/company/csr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                      {t('quality')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors">
              {t('blog')}
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors">
              {t('contact')}
            </Link>

            <Link to="/recruit" className="text-gray-700 hover:text-teal-600 font-medium text-sm cursor-pointer transition-colors">
              {t('recruit')}
            </Link>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            
            {/* Mobile Products Section (Accordion) */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                {t('productInfo')}
                <svg 
                  className={`w-4 h-4 transform transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileProductsOpen && (
                <div className="pl-6 space-y-1 bg-gray-50 rounded-md mb-2">
                  <Link to="/features" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('features')}
                  </Link>
                  <Link to="/products" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('springTypes')}
                  </Link>
                  <Link to="/products/torsion-spring" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('torsionSpring')}
                  </Link>
                  <Link to="/products/compression-spring" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('compressionSpring')}
                  </Link>
                  <Link to="/products/tension-spring" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('tensionSpring')}
                  </Link>
                  <Link to="/products/wire-forming" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('wireForming')}
                  </Link>
                  <Link to="/products/micro-spring" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('microSpring')}
                  </Link>
                  <Link to="/products/other-products" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('otherProducts')}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Company Section (Accordion) */}
            <div>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                {t('companyProfile')}
                <svg 
                  className={`w-4 h-4 transform transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileCompanyOpen && (
                <div className="pl-6 space-y-1 bg-gray-50 rounded-md mb-2">
                  <Link to="/company/message" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('message')}
                  </Link>
                  <Link to="/company/overview" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('companySummary')}
                  </Link>
                  <Link to="/company/office" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('office')}
                  </Link>
                  <Link to="/company/history" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('history')}
                  </Link>
                  <Link to="/company/csr" onClick={handleLinkClick} className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600">
                    {t('quality')}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              onClick={handleLinkClick} 
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
            >
              {t('blog')}
            </Link>

            <Link 
              to="/contact" 
              onClick={handleLinkClick} 
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
            >
              {t('contact')}
            </Link>

            <Link 
              to="/recruit" 
              onClick={handleLinkClick} 
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
            >
              {t('recruit')}
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}