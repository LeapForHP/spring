import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const TorsionSpring = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-teal-400 to-teal-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{t('productInfo')}</h1>
            <p className="text-lg">{t('banner')}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <Link to="/" className="hover:underline">{t('home')}</Link>
          <span className="mx-2">»</span>
          <Link to="/products" className="hover:underline">{t('productsTitle')}</Link>
          <span className="mx-2">»</span>
          <span>{t('torsionSpringDetail')}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            {t('torsionSpringDetail')}<br />
            <span className="text-2xl text-gray-600">{t('torsionSpringEn')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('torsionSpringDesc')}
          </p>
        </div>

        {/* Product Details */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://www.komatsubane.com/img/02_img04_1.png" 
                  alt="Torsion Spring Icon"
                  className="mx-auto mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('manufacturingRecord')}</h3>
                    <p className="text-gray-700">{t('torsionSpringSpec')}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('characteristics')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('torsionSpringDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('mainApplications')}</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• {t('torsionSpringApp1')}</li>
                      <li>• {t('torsionSpringApp2')}</li>
                      <li>• {t('torsionSpringApp3')}</li>
                      <li>• {t('torsionSpringApp4')}</li>
                      <li>• {t('torsionSpringApp5')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="https://www.komatsubane.com/img/02_img04_l.png" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.komatsubane.com/img/02_img04_ss.png" 
                    alt="Torsion Spring Products"
                    className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer border rounded-lg shadow-md"
                    title={t('clickToEnlarge')}
                  />
                </a>
                <p className="text-sm text-gray-500 mt-2">{t('clickToEnlarge')}</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('technicalSpecs')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('materialsList')}</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('pianoWire')}</li>
                  <li>• {t('stainlessWire')}</li>
                  <li>• {t('phosphorBronze')}</li>
                  <li>• {t('specialAlloy')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('processingRange')}</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('wireDiameter')}：0.03mm ～ 2.0mm</li>
                  <li>• {t('outerDiameter')}：0.5mm ～ 50mm</li>
                  <li>• {t('freeLength')}：2mm ～ 100mm</li>
                  <li>• {t('effectiveCoils')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">{t('qualityAssurance')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-checkbox-circle-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('dimensionInspection')}</h4>
                <p className="text-sm text-gray-700">{t('dimensionInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-file-text-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('qualityInspection')}</h4>
                <p className="text-sm text-gray-700">{t('qualityInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('shortDelivery')}</h4>
                <p className="text-sm text-gray-700">{t('shortDeliveryDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block">
            <img 
              src="https://www.komatsubane.com/img/05_img01.png" 
              alt="Contact Us"
              className="mx-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TorsionSpring;
