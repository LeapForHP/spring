import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function OfficePage() {
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
          <a href="/company/overview" className="hover:text-teal-600">{t('companySummary')}</a>
          <span className="mx-2">»</span>
          <span>{t('office')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('office.title')}</h2>
          <p className="text-gray-600">{t('office.subtitle')}</p>
        </div>

        <div className="bg-green-50/50 rounded-lg p-8 mb-8">
          {/* 本社/第一工場 & 東京第三工場 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-800">{t('office.tokyoTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('office.tokyoAddress')}<br />
                {t('office.tokyoTel')}<br />
                {t('office.tokyoFax')}<br />
                <a href="https://www.komatsubane.com/pdf/honsha-map.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  地図はこちら(PDFファイル)
                </a>
              </p>
            </div>
            <div>
              <img src="https://www.komatsubane.com/img/03_img03.png" alt={t('office.tokyoTitle')} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="row-span-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6491.319131945748!2d139.7435936260577!3d35.56210905237205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018610c2451aa5d%3A0xa254ac1c553c24b2!2z5bCP5p2-44Gw44Gt5bel5qWt44ix!5e0!3m2!1sja!2sjp!4v1648440666674!5m2!1sja!2sjp" 
                width="100%" 
                height="330" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-800">東京第三工場</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('office.tokyoAddress')}<br />
                {t('office.tokyoTel')}<br />
                {t('office.tokyoFax')}
              </p>
            </div>
            <div>
              <img src="https://www.komatsubane.com/img/03_img05.png" alt="東京第三工場" className="w-full rounded-lg shadow-md" />
            </div>
          </div>

          {/* アクセス */}
          <div className="bg-white rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold text-teal-600 mb-6 text-center">{t('office.tokyoAccess')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="https://www.komatsubane.com/img/icon08.png" alt="バス" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">バスの場合(JR大森駅より)</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>バス乗り場</strong><br />
                    大森駅東口バスロータリー<br />
                    2番(森26、森56系統)「森ヶ崎」(東京労災病院)行き<br />
                    ※途中 京浜急行平和島駅を経由します。<br />
                    <strong>降車バス停</strong><br />
                    「森ヶ崎十字路」バス停<br />
                    (終点の一つ手前 大森駅から約20分弱)下車後 徒歩3分
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="https://www.komatsubane.com/img/icon09.png" alt="車" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">お車の場合</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ・環状7号方面からは「大森東」を右折、<br />
                    ・品川方面からは第一京浜を南下、<br />
                    第一京浜「大森警察署前」を産業道路131号に入り<br />
                    「北糀谷」を左折、「森ヶ崎十字路」を右折してください。
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">{t('office.tokyoAccessDetail')}</p>
          </div>

          {/* 大河原工場 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-800">{t('office.ogawaraTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('office.ogawaraAddress')}<br />
                {t('office.ogawaraTel')}<br />
                {t('office.ogawaraFax')}<br />
                <span className="text-xs">{t('office.ogawaraAccessDetail')}</span>
              </p>
            </div>
            <div>
              <img src="https://www.komatsubane.com/img/03_img06.png" alt={t('office.ogawaraTitle')} className="w-full rounded-lg shadow-md" />
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12568.540419937606!2d140.72810380386372!3d38.04393817961167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a3fdddb004207%3A0x49ac7b627b1b1bd9!2z44CSOTg5LTEyMTQg5a6u5Z-O55yM5p-055Sw6YOh5aSn5rKz5Y6f55S655Sm5a2Q55S677yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1648440820226!5m2!1sja!2sjp" 
                width="100%" 
                height="210" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          {/* 秋田太田町工場 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-800">{t('office.akitaTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('office.akitaAddress')}<br />
                {t('office.akitaTel')}<br />
                {t('office.akitaFax')}<br />
                <span className="text-xs">{t('office.akitaAccessDetail')}</span>
              </p>
            </div>
            <div>
              <img src="https://www.komatsubane.com/img/03_img07.png" alt={t('office.akitaTitle')} className="w-full rounded-lg shadow-md" />
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12307.848950454267!2d140.5977633039018!3d39.53790587937621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8f9ea0d38f2d41%3A0x620170c7d0919711!2z5bCP5p2-44Gw44Gt5bel5qWtKOagqikg56eL55Sw5aSq55Sw55S65bel5aC0!5e0!3m2!1sja!2sjp!4v1648441087203!5m2!1sja!2sjp" 
                width="100%" 
                height="210" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          {/* PT.KOMATSU BANE INDONESIA */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-800">PT.KOMATSU BANE INDONESIA</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                JALAN BUKIT AKASIA VII KAWASAN BUKIT INDAH ST-5 NO.16/G BLOK A-III CINANGKA, BUNGURSARI, PURWAKARTA 41183, INDONESIA<br />
                電話:0264-351267<br />
                FAX:0264-351265
              </p>
            </div>
            <div>
              <img src="https://www.komatsubane.com/img/03_img08.png" alt="PT.KOMATSU BANE INDONESIA" className="w-full rounded-lg shadow-md" />
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5762382622797!2d107.45363985071364!3d-6.448413695311888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690e6c00000001%3A0x8fe2cca8bf8c60bb!2sPT.%20Komatsu%20Bane%20Indonesia!5e0!3m2!1sja!2sjp!4v1648441029593!5m2!1sja!2sjp" 
                width="100%" 
                height="210" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
