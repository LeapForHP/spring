import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Recruit() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    address: '',
    education: '',
    desiredPosition: '',
    desiredLocation: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.telephone) {
      alert(t('recruit.requiredFields'));
      return;
    }

    if (formData.message.length > 500) {
      alert(t('recruit.messageLimit'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formBody.append(key, value);
      });

      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          telephone: '',
          address: '',
          education: '',
          desiredPosition: '',
          desiredLocation: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">{t('recruit.title')}</h1>
            <p className="text-lg opacity-90">{t('recruit.subtitle')}</p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="text-sm text-gray-600">
              <a href="/" className="hover:text-teal-600">{t('home')}</a>
              <span className="mx-2">»</span>
              <span>{t('recruit.title')}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
              <p className="text-gray-800 text-lg">{t('recruit.intro')}</p>
            </div>

            {/* Job Listings */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('recruit.jobListings')}</h2>
              
              {/* Tokyo Office */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h3 className="text-2xl font-bold text-teal-600 mb-4">{t('recruit.tokyoOffice')}</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.location')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.tokyoAddress')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.positions')}</div>
                    <div className="md:col-span-3 text-gray-600">1{t('recruit.person')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.salary')}</div>
                    <div className="md:col-span-3 text-gray-600">
                      <div>{t('recruit.university')}: 229,820{t('recruit.yen')}</div>
                      <div>{t('recruit.technical')}: 201,186〜202,912{t('recruit.yen')}</div>
                      <div>{t('recruit.highSchool')}: 194,730{t('recruit.yen')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ogawara Factory */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h3 className="text-2xl font-bold text-teal-600 mb-4">{t('recruit.ogawaraFactory')}</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.location')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.ogawaraAddress')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.positions')}</div>
                    <div className="md:col-span-3 text-gray-600">1{t('recruit.person')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.salary')}</div>
                    <div className="md:col-span-3 text-gray-600">
                      <div>{t('recruit.university')}: 229,820{t('recruit.yen')}</div>
                      <div>{t('recruit.technical')}: 201,186〜202,912{t('recruit.yen')}</div>
                      <div>{t('recruit.highSchool')}: 194,730{t('recruit.yen')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Akita Factory */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h3 className="text-2xl font-bold text-teal-600 mb-4">{t('recruit.akitaFactory')}</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.location')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.akitaAddress')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.positions')}</div>
                    <div className="md:col-span-3 text-gray-600">1{t('recruit.person')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.salary')}</div>
                    <div className="md:col-span-3 text-gray-600">
                      <div>{t('recruit.university')}: 229,820{t('recruit.yen')}</div>
                      <div>{t('recruit.technical')}: 201,186〜202,912{t('recruit.yen')}</div>
                      <div>{t('recruit.highSchool')}: 191,540{t('recruit.yen')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Information */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('recruit.commonInfo')}</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.salaryIncrease')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.salaryIncreaseDetail')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.bonus')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.bonusDetail')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.workingHours')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.workingHoursDetail')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.holidays')}</div>
                    <div className="md:col-span-3 text-gray-600">
                      <div>{t('recruit.holidaysDetail1')}</div>
                      <div>{t('recruit.holidaysDetail2')}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.vacation')}</div>
                    <div className="md:col-span-3 text-gray-600">
                      <div>{t('recruit.vacationDetail1')}</div>
                      <div>{t('recruit.vacationDetail2')}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.jobType')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.jobTypeDetail')}</div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-medium text-gray-700">{t('recruit.benefits')}</div>
                    <div className="md:col-span-3 text-gray-600">{t('recruit.benefitsDetail')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('recruit.companyVideo')}</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <video 
                    src="https://www.komatsubane.com/mp4/komatsubane_640.mp4" 
                    poster="https://www.komatsubane.com/mp4/png/komatsubane_640.png"
                    controls
                    className="w-full h-full rounded-lg"
                  >
                    {t('recruit.videoNotSupported')}
                  </video>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('recruit.applicationForm')}</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
                  {t('recruit.submitSuccess')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
                  {t('recruit.submitError')}
                </div>
              )}

              <form onSubmit={handleSubmit} id="recruit-form">
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Telephone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.telephone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.address')}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.education')}
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">{t('recruit.selectEducation')}</option>
                      <option value="highSchool">{t('recruit.highSchool')}</option>
                      <option value="technical">{t('recruit.technical')}</option>
                      <option value="university">{t('recruit.university')}</option>
                      <option value="graduate">{t('recruit.graduate')}</option>
                    </select>
                  </div>

                  {/* Desired Position */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.desiredPosition')}
                    </label>
                    <input
                      type="text"
                      name="desiredPosition"
                      value={formData.desiredPosition}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Desired Location */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.desiredLocation')}
                    </label>
                    <select
                      name="desiredLocation"
                      value={formData.desiredLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">{t('recruit.selectLocation')}</option>
                      <option value="tokyo">{t('recruit.tokyoOffice')}</option>
                      <option value="ogawara">{t('recruit.ogawaraFactory')}</option>
                      <option value="akita">{t('recruit.akitaFactory')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('recruit.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 {t('recruit.characters')}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-teal-600 text-white px-12 py-3 rounded-md hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium whitespace-nowrap"
                    >
                      {isSubmitting ? t('recruit.submitting') : t('recruit.submit')}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('recruit.contactInfo')}</h3>
              <div className="space-y-2 text-gray-600">
                <p>{t('recruit.contactAddress')}</p>
                <p>{t('recruit.contactDepartment')}</p>
                <p>{t('recruit.contactTel')}</p>
                <p>{t('recruit.contactFax')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
