import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CSRPage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
      <Header />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{t('quality')}</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-teal-600">{t('home')}</a>
          <span className="mx-2">»</span>
          <span>{t('quality')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('csr.title')}</h2>
          <p className="text-gray-600">{t('csr.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {/* 品質方針 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('csr.qualityPolicyTitle')}</h3>
            
            <div className="flex items-center gap-6 mb-8 bg-green-50 p-6 rounded-lg">
              <img src="https://www.komatsubane.com/img/icon12.png" alt="ISO 9001" className="w-32 h-32 object-contain" />
              <div className="text-sm text-gray-700">
                <strong>ISO 9001:2015</strong><br />
                {t('csr.isoRegistration')}<br />
                {t('csr.isoNumber')}
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('csr.qualityContent1')}</p>
              <p>{t('csr.qualityContent2')}</p>
              <p>{t('csr.qualityContent3')}</p>
              
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                <p className="text-lg font-semibold text-gray-800">
                  {t('csr.qualityStatement')}
                </p>
              </div>

              <p>{t('csr.qualityContent4')}</p>

              <p className="text-right mt-8">
                {t('csr.qualitySignature')}
              </p>
            </div>
          </section>

          {/* 環境経営方針 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('csr.environmentalPolicyTitle')}</h3>
            
            <div className="flex items-center gap-6 mb-8 bg-green-50 p-6 rounded-lg">
              <img src="https://www.komatsubane.com/img/icon13.png" alt="エコアクション21" className="w-32 h-32 object-contain" />
              <div className="text-sm text-gray-700">
                {t('csr.ecoRegistration')}<br />
                {t('csr.ecoNumber')}
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.philosophy')}</h4>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mb-4">
                  <p className="font-semibold">{t('csr.philosophyStatement')}</p>
                </div>
                <p>{t('csr.philosophyContent')}</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.policy2')}</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.policy3')}</h4>
                <ul className="list-none space-y-2 ml-4">
                  <li>{t('csr.policy3Item1')}</li>
                  <li>{t('csr.policy3Item2')}</li>
                  <li>{t('csr.policy3Item3')}</li>
                  <li>{t('csr.policy3Item4')}</li>
                  <li>{t('csr.policy3Item5')}</li>
                  <li>{t('csr.policy3Item6')}</li>
                  <li>{t('csr.policy3Item7')}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.policy4')}</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.policy5')}</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('csr.policy6')}</h4>
              </div>

              <p className="text-right mt-8">
                {t('csr.qualitySignature')}
              </p>
            </div>
          </section>

          {/* CO₂削減への取り組み */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('csr.co2Title')}</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>{t('csr.co2Intro')}</p>

              <div>
                <h4 className="text-xl font-bold text-teal-600 mb-4">{t('csr.currentInitiatives')}</h4>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-800">{t('csr.initiative1Title')}</strong><br />
                    <span className="text-sm">{t('csr.initiative1Detail')}</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">{t('csr.initiative2Title')}</strong><br />
                    <span className="text-sm">{t('csr.initiative2Detail')}</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">{t('csr.initiative3Title')}</strong><br />
                    <span className="text-sm">{t('csr.initiative3Detail')}</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">{t('csr.initiative4Title')}</strong><br />
                    <span className="text-sm">{t('csr.initiative4Detail')}</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">{t('csr.initiative5Title')}</strong><br />
                    <span className="text-sm">{t('csr.initiative5Detail')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-teal-600 mb-4">{t('csr.futureInitiatives')}</h4>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-800">{t('csr.future1Title')}</strong><br />
                    <span className="text-sm">{t('csr.future1Detail')}</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">{t('csr.future2Title')}</strong><br />
                    <span className="text-sm">{t('csr.future2Detail')}</span>
                  </li>
                </ul>
              </div>

              <p className="mt-8 text-center text-gray-600">
                {t('csr.conclusion')}
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
