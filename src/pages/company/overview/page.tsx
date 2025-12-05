import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CompanyOverviewPage() {
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
          <span>{t('companySummary')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('companySummary')}</h2>
          <p className="text-gray-600">超精密スプリングの専門メーカ</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 w-1/4">商号</th>
                <td className="px-6 py-4 text-gray-700">小松ばね工業株式会社</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">創業年月日</th>
                <td className="px-6 py-4 text-gray-700">1941年(昭和16年)5月23日</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">会社設立</th>
                <td className="px-6 py-4 text-gray-700">1952年(昭和27年)12月1日</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">資本</th>
                <td className="px-6 py-4 text-gray-700">払込資本金 1億円</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">本社</th>
                <td className="px-6 py-4 text-gray-700">東京都大田区大森南5丁目3番18号</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">代表取締役社長</th>
                <td className="px-6 py-4 text-gray-700">小松 万希子</td>
              </tr>
              <tr>
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">製造品目</th>
                <td className="px-6 py-4 text-gray-700">
                  あらゆる分野で使用される精密線ばね:コイルばね(圧縮、引張)、トーションばね、ワイヤフォーミング加工
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('equipment')}</h2>
          <p className="text-gray-600 mb-8">少量から1000万個単位の注文に対応</p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 w-2/3">スプリング自動成型機</th>
                  <td className="px-6 py-4 text-gray-700 text-right">475台</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">熱処理炉及び洗浄機</th>
                  <td className="px-6 py-4 text-gray-700 text-right">33台</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">ばね端面研磨機</th>
                  <td className="px-6 py-4 text-gray-700 text-right">15台</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">検査器具</th>
                  <td className="px-6 py-4 text-gray-700 text-right">60台</td>
                </tr>
                <tr>
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">工作機械</th>
                  <td className="px-6 py-4 text-gray-700 text-right">15台</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
