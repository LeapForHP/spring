import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const MicroSpring = () => {
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
          <span>{t('microSpring')}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            {t('microSpring')}<br />
            <span className="text-2xl text-gray-600">{t('microSpringEn')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('microSpringDesc')}
          </p>
        </div>

        {/* Product Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Micro Springs */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-microscope-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{t('microSpringTitle')}</h3>
                <p className="text-blue-700">{t('microSpringEn')}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('characteristics')}</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• {t('microFeature1')}</li>
                    <li>• {t('microFeature2')}</li>
                    <li>• {t('microFeature3')}</li>
                    <li>• {t('microFeature4')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('mainApplications')}</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• {t('microApp1')}</li>
                    <li>• {t('microApp2')}</li>
                    <li>• {t('microApp3')}</li>
                    <li>• {t('microApp4')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Springs */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-pulse-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{t('medicalSpringTitle')}</h3>
                <p className="text-green-700">{t('medicalSpringEn')}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('characteristics')}</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• {t('medicalFeature1')}</li>
                    <li>• {t('medicalFeature2')}</li>
                    <li>• {t('medicalFeature3')}</li>
                    <li>• {t('medicalFeature4')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('mainApplications')}</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• {t('medicalApp1')}</li>
                    <li>• {t('medicalApp2')}</li>
                    <li>• {t('medicalApp3')}</li>
                    <li>• {t('medicalApp4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('technicalSpecs')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('microSpringSpecs')}</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 bg-gray-100">{t('wireDiameter')}</th>
                      <td className="py-2 px-3">0.02mm ～ 0.5mm</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 bg-gray-100">{t('outerDiameter')}</th>
                      <td className="py-2 px-3">0.1mm ～ 5mm</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 bg-gray-100">{t('freeLength')}</th>
                      <td className="py-2 px-3">0.5mm ～ 20mm</td>
                    </tr>
                    <tr>
                      <th className="text-left py-2 px-3 bg-gray-100">{t('accuracy')}</th>
                      <td className="py-2 px-3">±0.01mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('medicalMaterials')}</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                    <span><strong>SUS316L:</strong> {t('biocompatibleStainless')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                    <span>{t('titaniumAlloy')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                    <span>{t('mp35n')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                    <span>{t('platinumWire')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manufacturing Process */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('manufacturingProcess')}</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('materialSelection')}</h4>
                <p className="text-sm text-gray-700">{t('materialSelectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('precisionProcessing')}</h4>
                <p className="text-sm text-gray-700">{t('precisionProcessingDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('qualityInspection')}</h4>
                <p className="text-sm text-gray-700">{t('qualityInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('cleanPackaging')}</h4>
                <p className="text-sm text-gray-700">{t('cleanPackagingDesc')}</p>
              </div>
            </div>
          </div>

          {/* Applications Gallery */}
          <div className="bg-white border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('applicationFields')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-smartphone-line text-blue-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('electronicDevices')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('electronicDevicesDesc')}</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-stethoscope-line text-green-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('medicalEquipment')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('medicalEquipmentDesc')}</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-time-line text-purple-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('precisionInstruments')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('precisionInstrumentsDesc')}</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-camera-line text-orange-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('opticalEquipment')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('opticalEquipmentDesc')}</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-robot-line text-red-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('automationEquipment')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('automationEquipmentDesc')}</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <i className="ri-test-tube-line text-teal-500 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">{t('analyticalInstruments')}</h4>
                </div>
                <p className="text-sm text-gray-700">{t('analyticalInstrumentsDesc')}</p>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6">{t('certifications')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('isoCertification')}</h4>
                <p className="text-sm text-gray-700">{t('isoCertificationDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-microscope-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('precisionInspectionTitle')}</h4>
                <p className="text-sm text-gray-700">{t('precisionInspectionDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-file-shield-2-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('traceability')}</h4>
                <p className="text-sm text-gray-700">{t('traceabilityDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-hospital-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('medicalCertification')}</h4>
                <p className="text-sm text-gray-700">{t('medicalCertificationDesc')}</p>
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

export default MicroSpring;
