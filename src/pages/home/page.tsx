import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';

export default function Home() {
  const { t } = useTranslation();

  const newsItems = [
    {
      date: '2025年9月18日',
      title: '臨時休業のお知らせ(東京都本社)-2025年9月22日',
      content: '平素は格別のご高配を賜り、厚く御礼申し上げます。このたび東京本社におきまして「空調機器更新工事」を実施することとなりました。'
    },
    {
      date: '2025年9月7日',
      title: 'ご来場ありがとうございました 全国匠の技展',
      content: '展示会名:全国の匠の技展 会期:令和7(2025)年9月10日(水)11:00~17:00'
    },
    {
      date: '2025年8月8日',
      title: '夏季休暇のお知らせ-2025',
      content: '夏季休暇の日程は下記の通りとなります。8月9日(土)~11日(月) 8月14日(木)~18日(日)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.komatsubane.com/cms2024/wp-content/uploads/2023/11/bnr01-1100x290.png" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
        </div>
       
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <i className="ri-settings-3-line text-3xl text-teal-600"></i>
            <h2 className="text-3xl font-bold text-gray-900">{t('common:productInfo')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products/torsion-spring" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="p-6 flex flex-col items-center text-center">
                <img src="https://www.komatsubane.com/img/01_img01.png" alt="Torsion Spring" className="w-24 h-24 object-contain mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('common:torsionSpring')}</h3>
                <p className="text-sm text-gray-600">{t('common:torsionSpringEn')}</p>
              </div>
            </Link>

            <Link to="/products/compression-spring" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="p-6 flex flex-col items-center text-center">
                <img src="https://www.komatsubane.com/img/01_img02.png" alt="Compression Spring" className="w-24 h-24 object-contain mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('common:compressionSpring')}</h3>
                <p className="text-sm text-gray-600">{t('common:compressionSpringEn')}</p>
              </div>
            </Link>

            <Link to="/products/tension-spring" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="p-6 flex flex-col items-center text-center">
                <img src="https://www.komatsubane.com/img/01_img03.png" alt="Tension Spring" className="w-24 h-24 object-contain mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('common:tensionSpring')}</h3>
                <p className="text-sm text-gray-600">{t('common:tensionSpringEn')}</p>
              </div>
            </Link>

            <Link to="/products/wire-forming" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="p-6 flex flex-col items-center text-center">
                <img src="https://www.komatsubane.com/img/01_img04.png" alt="Wire Forming" className="w-24 h-24 object-contain mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('common:wireForming')}</h3>
                <p className="text-sm text-gray-600">{t('common:wireFormingEn')}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <i className="ri-notification-3-line text-3xl text-teal-600"></i>
              <h2 className="text-3xl font-bold text-gray-900">{t('common:news')}</h2>
            </div>
            <a href="#news" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
              {t('common:newsAll')}
            </a>
          </div>

          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 hover:bg-gray-50 p-4 rounded cursor-pointer transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-sm text-gray-600 whitespace-nowrap">{item.date}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section id="company" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <i className="ri-building-line text-3xl text-teal-600"></i>
            <h2 className="text-3xl font-bold text-gray-900">{t('common:companyProfile')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products" className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <img src="https://www.komatsubane.com/cms2024/wp-content/uploads/2023/11/01_img05.png" alt="Product Information" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{t('common:productInfo')}</h3>
                  <p className="text-sm">Product Information</p>
                </div>
              </div>
            </Link>

            <a href="#company" className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <img src="https://www.komatsubane.com/cms2024/wp-content/uploads/2023/11/01_img06.png" alt="Company Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{t('common:companyProfile')}</h3>
                  <p className="text-sm">Company Profile</p>
                </div>
              </div>
            </a>

            <a href="#recruit" className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <img src="https://www.komatsubane.com/cms2024/wp-content/uploads/2023/11/01_img07.png" alt="Recruit" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{t('common:recruit')}</h3>
                  <p className="text-sm">Job Information</p>
                </div>
              </div>
            </a>

            <a href="#contact" className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <img src="https://www.komatsubane.com/cms2024/wp-content/uploads/2023/11/01_img08.png" alt="Contact" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{t('common:contact')}</h3>
                  <p className="text-sm">Contact</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Registrations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <i className="ri-award-line text-3xl text-teal-600"></i>
            <h2 className="text-3xl font-bold text-gray-900">{t('common:registrations')}</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://www.komatsubane.com/img/bnr11.png" alt="大田区優工場" className="h-16 object-contain" />
            <img src="https://www.komatsubane.com/img/bnr12.png" alt="地域未来牽引企業" className="h-16 object-contain" />
            <img src="https://www.komatsubane.com/img/bnr13.png" alt="優良申告法人" className="h-16 object-contain" />
            <img src="https://www.komatsubane.com/img/bnr14_1.png" alt="INDUSTRIAL JP" className="h-16 object-contain" />
            <img src="https://www.komatsubane.com/img/bnr15_2.png" alt="ASMR" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.komatsubane.com/img/icon01s.png" alt="Logo" className="w-10 h-10" />
                <div>
                  <h3 className="font-bold text-sm">{t('common:companyName')}</h3>
                  <p className="text-xs text-gray-400">{t('common:companyNameEn')}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>{t('common:address')}</p>
                <p>{t('common:tel')}</p>
                <p>{t('common:fax')}</p>
              </div>
              <div className="mt-4">
                <a href="https://www.facebook.com/komatsubane/" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                  <img src="https://www.komatsubane.com/img/facebook016.png" alt="Facebook" className="h-12" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t('common:productInfo')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/features" className="hover:text-white cursor-pointer">{t('common:features')}</Link></li>
                <li><Link to="/products" className="hover:text-white cursor-pointer">{t('common:springTypes')}</Link></li>
                <li><Link to="/products" className="hover:text-white cursor-pointer">{t('common:products')}</Link></li>
                <li><Link to="/products" className="hover:text-white cursor-pointer">{t('common:usage')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t('common:companyProfile')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#message" className="hover:text-white cursor-pointer">{t('common:message')}</a></li>
                <li><a href="#summary" className="hover:text-white cursor-pointer">{t('common:companySummary')}</a></li>
                <li><a href="#equipment" className="hover:text-white cursor-pointer">{t('common:equipment')}</a></li>
                <li><a href="#office" className="hover:text-white cursor-pointer">{t('common:office')}</a></li>
                <li><a href="#history" className="hover:text-white cursor-pointer">{t('common:history')}</a></li>
                <li><a href="#quality" className="hover:text-white cursor-pointer">{t('common:quality')}</a></li>
                <li><a href="#esg" className="hover:text-white cursor-pointer">{t('common:esg')}</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contact" className="hover:text-white cursor-pointer">{t('common:contact')}</a></li>
                <li><a href="#recruit" className="hover:text-white cursor-pointer">{t('common:recruit')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>{t('common:copyright')}</p>
            <p className="mt-2">
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
                Website Builder
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors z-50"
        aria-label="Scroll to top"
      >
        <i className="ri-arrow-up-line text-2xl"></i>
      </button>
    </div>
  );
}
