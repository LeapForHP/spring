import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const WireForming = () => {
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
          <span>{t('wireFormingDetail')}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            {t('wireFormingDetail')}<br />
            <span className="text-2xl text-gray-600">{t('wireFormingEn')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('wireFormingDesc')}
          </p>
        </div>

        {/* Product Details */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 text-center">
                <a href="https://www.komatsubane.com/img/02_img07_l.png" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.komatsubane.com/img/02_img07_ss.png" 
                    alt="Wire Forming Products"
                    className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer border rounded-lg shadow-md"
                    title={t('clickToEnlarge')}
                  />
                </a>
                <p className="text-sm text-gray-500 mt-2">{t('clickToEnlarge')}</p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://www.komatsubane.com/img/02_img07_1.png" 
                  alt="Wire Forming Icon"
                  className="mx-auto mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('manufacturingRecord')}</h3>
                    <p className="text-gray-700 mb-2">{t('wireFormingSpec1')}</p>
                    <p className="text-gray-700">{t('wireFormingSpec2')}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('characteristics')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('wireFormingFeature')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t('mainApplications')}</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• {t('wireFormingApp1')}</li>
                      <li>• {t('wireFormingApp2')}</li>
                      <li>• {t('wireFormingApp3')}</li>
                      <li>• {t('wireFormingApp4')}</li>
                      <li>• {t('wireFormingApp5')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Types */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('processingTypes')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-expand-left-right-line text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('bendingProcess')}</h4>
                <p className="text-sm text-gray-700">{t('bendingProcessDesc')}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-loop-right-line text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('coilingProcess')}</h4>
                <p className="text-sm text-gray-700">{t('coilingProcessDesc')}</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-scissors-cut-line text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('cuttingProcess')}</h4>
                <p className="text-sm text-gray-700">{t('cuttingProcessDesc')}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-focus-3-line text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('formingProcess')}</h4>
                <p className="text-sm text-gray-700">{t('formingProcessDesc')}</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('technicalSpecs')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('supportedMaterials')}</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('highCarbonWire')}</li>
                  <li>• {t('stainlessVariety')}</li>
                  <li>• {t('phosphorBronze')}</li>
                  <li>• {t('copperWire')}</li>
                  <li>• {t('titaniumWire')}</li>
                  <li>• {t('platedWire')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('processingRange')}</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('wireDiameter')}：0.1mm ～ 2.0mm</li>
                  <li>• {t('materialShape')}</li>
                  <li>• {t('processingLength')}：1mm ～ 300mm</li>
                  <li>• {t('accuracy')}：±0.05mm</li>
                  <li>• {t('minBendRadius')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('applicationFields')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-computer-line text-blue-500 mr-2"></i>
                  {t('electronicPrecision')}
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('connectionTerminals')}</li>
                  <li>• {t('sensorParts')}</li>
                  <li>• {t('boardFixing')}</li>
                  <li>• {t('switchMechanism')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-heart-pulse-line text-red-500 mr-2"></i>
                  {t('medicalDevices')}
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('catheterParts')}</li>
                  <li>• {t('endoscopeParts')}</li>
                  <li>• {t('surgicalInstruments')}</li>
                  <li>• {t('inspectionParts')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-car-line text-green-500 mr-2"></i>
                  {t('autoIndustrial')}
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('electricalParts')}</li>
                  <li>• {t('sensorParts')}</li>
                  <li>• {t('fixingClips')}</li>
                  <li>• {t('mechanismParts')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">{t('qualityAssurance')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-ruler-2-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('dimensionInspection')}</h4>
                <p className="text-sm text-gray-700">{t('dimensionInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-eye-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('appearanceInspection')}</h4>
                <p className="text-sm text-gray-700">{t('appearanceInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-settings-3-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('functionalTest')}</h4>
                <p className="text-sm text-gray-700">{t('functionalTestDesc')}</p>
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

export default WireForming;
