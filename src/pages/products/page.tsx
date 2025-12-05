import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Products = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:underline">{t('home')}</Link>
            <span className="mx-2">»</span>
            <span>{t('productsTitle')}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          {/* Title Section - 元サイトと同じデザイン */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-4">{t('springTypes')}</h2>
            <p className="text-xl text-gray-700">{t('productsSubtitle')}</p>
          </div>

          {/* Product Categories Menu */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16 max-w-5xl mx-auto">
            <p className="text-center text-gray-700 mb-8 text-base">{t('detailInfo')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <Link
                to="/products/torsion-spring"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('torsionSpringDetail')}
              </Link>
              <Link
                to="/products/compression-spring"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('compressionSpringDetail')}
              </Link>
              <Link
                to="/products/tension-spring"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('tensionSpringDetail')}
              </Link>
              <Link
                to="/products/wire-forming"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('wireFormingDetail')}
              </Link>
              <Link
                to="/products/micro-spring"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('microSpring')}
              </Link>
              <Link
                to="/products/other-products"
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-4 px-3 rounded transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t('otherProducts')}
              </Link>
            </div>
          </div>

          {/* Spring Types Sections */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Torsion Spring */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="mb-6">
                    <img 
                      src="https://www.komatsubane.com/img/02_img04_1.png" 
                      alt="Torsion Spring Icon"
                      className="mx-auto"
                      style={{ maxWidth: '150px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t('torsionSpringDetail')}
                  </h3>
                  <p className="text-base text-gray-600 mb-1">{t('torsionSpringEn')}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 px-4">
                    {t('torsionSpringDesc')}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t('torsionSpringSpec')}
                  </p>
                </div>
                <div className="text-center">
                  <a href="https://www.komatsubane.com/img/02_img04_l.png" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://www.komatsubane.com/img/02_img04_ss.png" 
                      alt="Torsion Spring Products"
                      className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer rounded"
                      title={t('clickToEnlarge')}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Compression Spring */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 text-center">
                  <a href="https://www.komatsubane.com/img/02_img05_l.png" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://www.komatsubane.com/img/02_img05_ss.png" 
                      alt="Compression Spring Products"
                      className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer rounded"
                      title={t('clickToEnlarge')}
                    />
                  </a>
                </div>
                <div className="order-1 md:order-2 text-center">
                  <div className="mb-6">
                    <img 
                      src="https://www.komatsubane.com/img/02_img05_1.png" 
                      alt="Compression Spring Icon"
                      className="mx-auto"
                      style={{ maxWidth: '150px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t('compressionSpringDetail')}
                  </h3>
                  <p className="text-base text-gray-600 mb-1">{t('compressionSpringEn')}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 px-4">
                    {t('compressionSpringDesc')}
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    {t('compressionSpringSpec1')}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t('compressionSpringSpec2')}
                  </p>
                </div>
              </div>
            </div>

            {/* Tension Spring */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="mb-6">
                    <img 
                      src="https://www.komatsubane.com/img/02_img06_1.png" 
                      alt="Tension Spring Icon"
                      className="mx-auto"
                      style={{ maxWidth: '150px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t('tensionSpringDetail')}
                  </h3>
                  <p className="text-base text-gray-600 mb-1">{t('tensionSpringEn')}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 px-4">
                    {t('tensionSpringDesc')}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t('tensionSpringSpec')}
                  </p>
                </div>
                <div className="text-center">
                  <a href="https://www.komatsubane.com/img/02_img06_l.png" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://www.komatsubane.com/img/02_img06_ss.png" 
                      alt="Tension Spring Products"
                      className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer rounded"
                      title={t('clickToEnlarge')}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Wire Forming */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 text-center">
                  <a href="https://www.komatsubane.com/img/02_img07_l.png" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://www.komatsubane.com/img/02_img07_ss.png" 
                      alt="Wire Forming Products"
                      className="max-w-full h-auto mx-auto hover:opacity-80 transition-opacity cursor-pointer rounded"
                      title={t('clickToEnlarge')}
                    />
                  </a>
                </div>
                <div className="order-1 md:order-2 text-center">
                  <div className="mb-6">
                    <img 
                      src="https://www.komatsubane.com/img/02_img07_1.png" 
                      alt="Wire Forming Icon"
                      className="mx-auto"
                      style={{ maxWidth: '150px' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t('wireFormingDetail')}
                  </h3>
                  <p className="text-base text-gray-600 mb-1">{t('wireFormingEn')}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 px-4">
                    {t('wireFormingDesc')}
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    {t('wireFormingSpec1')}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t('wireFormingSpec2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">{t('materials')}</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700 w-32">{t('materialsList')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('materialTypes')}</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('materialShape')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('materialShapes')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Built-in Products Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-4">{t('builtInProducts')}</h2>
            <p className="text-xl text-gray-700">{t('builtInProductsSubtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700 w-32">{t('electricalProducts')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('electricalProductsList')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('communication')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('communicationList')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('medicalEquipment')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('medicalEquipmentList')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('vehicleEquipment')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('vehicleEquipmentList')}</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('otherUsage')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('otherUsageList')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className="bg-gradient-to-b from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-4">{t('usageTitle')}</h2>
            <p className="text-xl text-gray-700">{t('usageSubtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700 w-48">{t('electricalProducts')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('electricalUsage')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('communication')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('communicationUsage')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('medicalEquipment')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('medicalUsage')}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('vehicleEquipment')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('vehicleUsage')}</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-6 bg-gray-100 font-bold text-gray-700">{t('otherUsage')}</th>
                    <td className="py-4 px-6 text-gray-700">{t('otherDetailUsage')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contact Banner */}
            <div className="text-center">
              <Link to="/contact" className="inline-block">
                <img 
                  src="https://www.komatsubane.com/img/05_img01.png" 
                  alt="Contact Us"
                  className="mx-auto hover:opacity-90 transition-opacity max-w-full h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
