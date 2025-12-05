import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Features = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section - 元サイトと同じデザイン */}
      <div className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{t('featuresTitle')}</h1>
          <p className="text-lg text-gray-600">{t('featuresSubtitle')}</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:underline">{t('home')}</Link>
            <span className="mx-2">»</span>
            <span>{t('featuresTitle')}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          {/* Content Sections */}
          <div className="max-w-6xl mx-auto">
            {/* Delicate Design Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('delicateDesign')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('delicateDesignDesc')}
                  </p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://www.komatsubane.com/img/02_img01.png" 
                    alt="Delicate Design"
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Prototype to Mass Production Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 text-center">
                  <img 
                    src="https://www.komatsubane.com/img/02_img02.png" 
                    alt="Prototype to Mass Production"
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('prototypeToMass')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {t('prototypeToMassDesc1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('prototypeToMassDesc2')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Control Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('qualityControl')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800">{t('qualityControlDesc1')}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {t('qualityControlDesc1Detail')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('qualityControlDesc2')}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {t('qualityControlDesc2Detail')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('qualityControlDesc3')}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {t('qualityControlDesc3Detail')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('qualityControlDesc4')}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {t('qualityControlDesc4Detail')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="https://www.komatsubane.com/img/02_img03.png" 
                    alt="Quality Control"
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
