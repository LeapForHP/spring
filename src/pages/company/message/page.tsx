import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function MessagePage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
      <Header />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{t('companyProfile')}</h1>
          <p className="text-lg">{t('banner')}</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-teal-600">{t('home')}</a>
          <span className="mx-2">»</span>
          <a href="/company/overview" className="hover:text-teal-600">{t('companySummary')}</a>
          <span className="mx-2">»</span>
          <span>{t('message')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('message.title')}</h2>
          <p className="text-gray-600">{t('message.subtitle')}</p>
        </div>

        <div className="bg-green-50/50 rounded-lg p-8 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('message.greeting')}</p>
                <p>{t('message.content1')}</p>
                <p>{t('message.content2')}</p>
              </div>
              <div className="text-right">
                <img 
                  src="https://www.komatsubane.com/img/03_img00_002.jpg" 
                  alt={t('message.presidentName')} 
                  className="w-full max-w-md ml-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-4">
                  {t('companyName')}<br />
                  {t('message.president')} {t('message.presidentName')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img 
                  src="https://www.komatsubane.com/img/03_img01.png" 
                  alt={t('products')} 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('message.content3')}</p>
                <p>{t('message.content4')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('message.content5')}</p>
              </div>
              <div>
                <img 
                  src="https://www.komatsubane.com/img/03_img02.png" 
                  alt={t('equipment')} 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
