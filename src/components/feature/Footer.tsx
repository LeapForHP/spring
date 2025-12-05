import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('companyName')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('companyAddress')}
            </p>
            <p className="text-gray-300 text-sm mt-2">
              TEL: 03-3881-3665
            </p>
            <p className="text-gray-300 text-sm">
              FAX: 03-3881-3667
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  {t('featuresTitle')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  {t('productInfo')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('businessHours')}</h3>
            <p className="text-gray-300 text-sm">
              {t('businessHoursDetail')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {t('companyName')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
