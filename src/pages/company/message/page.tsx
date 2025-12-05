import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function MessagePage() {
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
          <span>{t('message')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('message')}</h2>
          <p className="text-gray-600">1941年の創業以来、超精密スプリングの専門メーカとして着実な発展</p>
        </div>

        <div className="bg-green-50/50 rounded-lg p-8 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  当社の発祥は1941(昭和16)年、現在の本社(東京都大田区)において創業者小松謙一が、ばね工場「小松製作所」を創立いたしました。以来、一貫してスプリングの製作に努めております。
                </p>
                <p>
                  創業当初は、主にカメラシャッタ用の精密ばねの専門工場として発展して参りました。各業界の要望に応えて、光学機器・医療機器・時計・電気機器・通信機器・OA機器・家電・自動車部品・宝飾品・文具・その他精密機器用ばねの部門に漸次販路を広め、また技術も一段と幅広くなり、特に超精密ばねの技術においては、他の追随を許さないものと誇りを持っております。
                </p>
              </div>
              <div className="text-right">
                <img 
                  src="https://www.komatsubane.com/img/03_img00_002.jpg" 
                  alt="代表取締役社長 小松万希子" 
                  className="w-full max-w-md ml-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-4">
                  小松ばね工業株式会社<br />
                  代表取締役社長 小松万希子
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img 
                  src="https://www.komatsubane.com/img/03_img01.png" 
                  alt="製品イメージ" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  当社の製品は、生産機械および検査機器の最新機種をそろえた設備と熟練の技術者により、発注図面の製品化、品質の均一化、精度の正確さ、納期の厳守、生産の合理化を図っております。
                </p>
                <p>
                  国内のユーザの皆様は勿論、世界のユーザの皆様にも必ずご満足いただけるものと存じます。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  当社は「お客様に必要とされる」を経営理念とし、取引先様の信頼を得られるよう絶えざる努力と研鑚により発展し続けてまいります。
                </p>
              </div>
              <div>
                <img 
                  src="https://www.komatsubane.com/img/03_img02.png" 
                  alt="製造設備" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
