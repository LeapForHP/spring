import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const OtherProducts = () => {
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
          <span>{t('otherProducts')}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            {t('otherProducts')}<br />
            <span className="text-2xl text-gray-600">OTHER PRODUCTS</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('otherProductsDesc')}
          </p>
        </div>

        {/* Product Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Jewelry & Accessories */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-vip-diamond-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{t('jewelryAccessories')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-500 mr-2 mt-1"></i>
                  <span>{t('earringClasp')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-500 mr-2 mt-1"></i>
                  <span>{t('necklaceClasp')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-500 mr-2 mt-1"></i>
                  <span>{t('broochClasp')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-purple-500 mr-2 mt-1"></i>
                  <span>{t('watchBandParts')}</span>
                </li>
              </ul>
            </div>

            {/* Stationery */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-pencil-ruler-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{t('stationery')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-500 mr-2 mt-1"></i>
                  <span>{t('penMechanism')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-500 mr-2 mt-1"></i>
                  <span>{t('clipsBindings')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-500 mr-2 mt-1"></i>
                  <span>{t('mechanicalPencil')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-500 mr-2 mt-1"></i>
                  <span>{t('staplerParts')}</span>
                </li>
              </ul>
            </div>

            {/* Toys & Hobbies */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-gamepad-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{t('toysHobbies')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                  <span>{t('toyMechanism')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                  <span>{t('modelParts')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                  <span>{t('fishingReelParts')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                  <span>{t('lureFrame')}</span>
                </li>
              </ul>
            </div>

            {/* Furniture & Interior */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-home-4-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">{t('furnitureInterior')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-500 mr-2 mt-1"></i>
                  <span>{t('chairCushion')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-500 mr-2 mt-1"></i>
                  <span>{t('sofaStructure')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-500 mr-2 mt-1"></i>
                  <span>{t('drawerMechanism')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-500 mr-2 mt-1"></i>
                  <span>{t('doorCloser')}</span>
                </li>
              </ul>
            </div>

            {/* Audio Equipment */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-music-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">{t('audioEquipment')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-red-500 mr-2 mt-1"></i>
                  <span>{t('recordNeedleArm')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-500 mr-2 mt-1"></i>
                  <span>{t('speakerDiaphragm')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-500 mr-2 mt-1"></i>
                  <span>{t('instrumentParts')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-500 mr-2 mt-1"></i>
                  <span>{t('headphoneAdjustment')}</span>
                </li>
              </ul>
            </div>

            {/* Security & Locks */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-lock-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">{t('securityLocks')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-500 mr-2 mt-1"></i>
                  <span>{t('lockMechanism')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-500 mr-2 mt-1"></i>
                  <span>{t('padlockParts')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-500 mr-2 mt-1"></i>
                  <span>{t('doorLock')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-500 mr-2 mt-1"></i>
                  <span>{t('securityDevice')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('manufacturingFeatures')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-lightbulb-line text-yellow-500 mr-2"></i>
                  {t('customDesign')}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t('customDesignDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-palette-line text-pink-500 mr-2"></i>
                  {t('diverseFinishes')}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t('diverseFinishesDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-stack-line text-blue-500 mr-2"></i>
                  {t('smallLotSupport')}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t('smallLotSupportDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-time-line text-green-500 mr-2"></i>
                  {t('shortDelivery')}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t('shortDeliveryDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('usedMaterials')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('metalMaterials')}</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('stainlessWire')}</li>
                  <li>• {t('pianoWire')}</li>
                  <li>• {t('brassWire')}</li>
                  <li>• {t('copperWire')}</li>
                  <li>• {t('phosphorBronze')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('surfaceTreatment')}</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('goldPlating')}</li>
                  <li>• {t('silverPlating')}</li>
                  <li>• {t('nickelPlating')}</li>
                  <li>• {t('chromePlating')}</li>
                  <li>• {t('variousPainting')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{t('specialMaterials')}</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• {t('titaniumAlloy')}</li>
                  <li>• {t('platinumWire')}</li>
                  <li>• {t('specialAlloy')}</li>
                  <li>• {t('colorWire')}</li>
                  <li>• {t('otherConsultation')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality & Service */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('qualityService')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('designConsultation')}</h4>
                <p className="text-sm text-gray-700">{t('designConsultationDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-flask-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('prototypeSupport')}</h4>
                <p className="text-sm text-gray-700">{t('prototypeSupportDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('qualityGuarantee')}</h4>
                <p className="text-sm text-gray-700">{t('qualityGuaranteeDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-truck-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('rapidDelivery')}</h4>
                <p className="text-sm text-gray-700">{t('rapidDeliveryDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">{t('contactMessage')}</p>
            <p className="text-sm text-gray-600">{t('contactSubMessage')}</p>
          </div>
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

export default OtherProducts;
