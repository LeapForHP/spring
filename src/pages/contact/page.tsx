import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    companyName: '',
    department: '',
    fullName: '',
    address: '',
    telephone: '',
    email: '',
    specification: '',
    preferredDeliveryDate: '',
    preferredUnitPrice: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.department || !formData.fullName || !formData.email || !formData.specification) {
      alert(t('contact.requiredFields'));
      return;
    }

    if (formData.specification.length > 500) {
      alert(t('contact.specificationLimit'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4pl3k3m5ik2goc1ev70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          department: '',
          fullName: '',
          address: '',
          telephone: '',
          email: '',
          specification: '',
          preferredDeliveryDate: '',
          preferredUnitPrice: '',
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
            <h1 className="text-4xl font-bold mb-2">{t('contact.title')}</h1>
            <p className="text-lg opacity-90">{t('contact.subtitle')}</p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="text-sm text-gray-600">
              <a href="/" className="hover:text-teal-600">{t('common.home')}</a>
              <span className="mx-2">»</span>
              <span>{t('contact.title')}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
              <p className="text-gray-800 mb-2">{t('contact.intro1')}</p>
              <p className="text-gray-800">{t('contact.intro2')}</p>
              <p className="text-sm text-gray-600 mt-4">{t('contact.requiredNote')}</p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.formTitle')}</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
                  {t('contact.submitSuccess')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
                  {t('contact.submitError')}
                </div>
              )}

              <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
                <div className="space-y-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.companyName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.department')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.fullName')} <span className="text-red-500">*</span>
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

                  {/* Address */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.address')}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Telephone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.telephone')}
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.email')} <span className="text-red-500">*</span>
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

                  {/* Specification */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.specification')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="specification"
                      value={formData.specification}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.specification.length}/500 {t('contact.characters')}
                    </p>
                  </div>

                  {/* Preferred Delivery Date */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.preferredDeliveryDate')}
                    </label>
                    <input
                      type="text"
                      name="preferredDeliveryDate"
                      value={formData.preferredDeliveryDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Preferred Unit Price */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.preferredUnitPrice')}
                    </label>
                    <input
                      type="text"
                      name="preferredUnitPrice"
                      value={formData.preferredUnitPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-teal-600 text-white px-12 py-3 rounded-md hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium whitespace-nowrap"
                    >
                      {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.urgentContact')}</h3>
              <p className="text-gray-600 mb-6">{t('contact.urgentContactDesc')}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.phone')}</p>
                    <p className="text-xl font-bold text-gray-800">03-3743-0231</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <i className="ri-printer-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.fax')}</p>
                    <p className="text-xl font-bold text-gray-800">03-3743-0235</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
