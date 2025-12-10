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
          <p className="text-gray-600">{t('overview.subtitle')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 w-1/4">{t('overview.companyName')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.companyNameValue')}</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.foundingDate')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.foundingDateValue')}</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.established')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.establishedValue')}</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.capital')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.capitalValue')}</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.headquarters')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.headquartersValue')}</td>
              </tr>
              <tr className="border-b">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.president')}</th>
                <td className="px-6 py-4 text-gray-700">{t('overview.presidentValue')}</td>
              </tr>
              <tr>
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.products')}</th>
                <td className="px-6 py-4 text-gray-700">
                  {t('overview.productsValue')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('equipment')}</h2>
          <p className="text-gray-600 mb-8">{t('overview.equipmentSubtitle')}</p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 w-2/3">{t('overview.springMachine')}</th>
                  <td className="px-6 py-4 text-gray-700 text-right">{t('overview.springMachineValue')}</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.heatTreatment')}</th>
                  <td className="px-6 py-4 text-gray-700 text-right">{t('overview.heatTreatmentValue')}</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.grindingMachine')}</th>
                  <td className="px-6 py-4 text-gray-700 text-right">{t('overview.grindingMachineValue')}</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.inspectionEquipment')}</th>
                  <td className="px-6 py-4 text-gray-700 text-right">{t('overview.inspectionEquipmentValue')}</td>
                </tr>
                <tr>
                  <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700">{t('overview.machineTools')}</th>
                  <td className="px-6 py-4 text-gray-700 text-right">{t('overview.machineToolsValue')}</td>
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
