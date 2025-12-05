import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const CompressionSpring = () => {
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
          <span>{t('compressionSpringDetail')}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            {t('compressionSpringDetail')}<br />
            <span className="text-2xl text-gray-600">{t('compressionSpringEn')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('compressionSpringDesc')}
          </p>
        </div>

        {/* Product Details */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 text-center">
                <a href="https://www.komatsubane.com/img/02_img05_l.png" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.komatsubane.com/img/02_img05_ss.png" 
                    alt="Compression Spring Products"
                    className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer border rounded-lg shadow-md"
                    title={t('clickToEnlarge')}
                  />
                </a>
                <p className="text-sm text-gray-500 mt-2">{t('clickToEnlarge')}</p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://www.komatsubane.com/img/02_img05_1.png" 
                  alt="Compression Spring Icon"
                  className="mx-auto mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('manufacturingRecord')}</h3>
                    <p className="text-gray-700 mb-2">{t('compressionSpringSpec1')}</p>
                    <p className="text-gray-700">{t('compressionSpringSpec2')}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('characteristics')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('compressionSpringFeature')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('mainApplications')}</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• {t('compressionSpringApp1')}</li>
                      <li>• {t('compressionSpringApp2')}</li>
                      <li>• {t('compressionSpringApp3')}</li>
                      <li>• {t('compressionSpringApp4')}</li>
                      <li>• {t('compressionSpringApp5')}</li>
                    </ul>
                  </div>
                </div>
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
                  <li>• {t('hardWire')}</li>
                  <li>• {t('phosphorBronze')}</li>
                  <li>• {t('flatWire')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('processingRange')}</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('wireDiameter')}：0.02mm ～ 2.0mm</li>
                  <li>• {t('outerDiameter')}：0.1mm ～ 50mm</li>
                  <li>• {t('freeLength')}：0.5mm ～ 200mm</li>
                  <li>• {t('effectiveCoils')}</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('specialShapes')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('conicalSpring')}</li>
                  <li>• {t('barrelSpring')}</li>
                  <li>• {t('unevenPitch')}</li>
                </ul>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('unevenDiameter')}</li>
                  <li>• {t('longCoil')}</li>
                  <li>• {t('squareWireSpring')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">{t('qualityAssurance')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-microscope-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('precisionMeasurement')}</h4>
                <p className="text-sm text-gray-700">{t('precisionMeasurementDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-bar-chart-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('loadTest')}</h4>
                <p className="text-sm text-gray-700">{t('loadTestDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('qualityCertificate')}</h4>
                <p className="text-sm text-gray-700">{t('qualityCertificateDesc')}</p>
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

export default CompressionSpring;
