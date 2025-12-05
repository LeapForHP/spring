import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function HistoryPage() {
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
          <span>{t('history')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('history')}</h2>
          <p className="text-gray-600">精密機械産業への限りない挑戦</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 w-1/5 align-top">1941年(昭和16年)</th>
                <td className="px-6 py-4 text-gray-700">5月23日 小松 謙一が個人企業として創業。主としてゼンマイ・板ばね・線ばねの製作を始める</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1943年(昭和18年)</th>
                <td className="px-6 py-4 text-gray-700">軍用指定工場となる。その後、仙台市外に工場を移転</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1951年(昭和26年)</th>
                <td className="px-6 py-4 text-gray-700">工場疎開より復帰、線ばねを主として生産開始</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1952年(昭和27年)</th>
                <td className="px-6 py-4 text-gray-700">12月27日 生産・販売の増加により法人化して、商号 有限会社小松製作所として発足 カメラシャッタ用精密ばねの生産の比率が著しく増加</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1958年(昭和33年)</th>
                <td className="px-6 py-4 text-gray-700">時計関係の精密ばねの生産に着手</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1960年(昭和35年)</th>
                <td className="px-6 py-4 text-gray-700">自動車部品・電気機器等の業界の分野に進出し、関係メーカ各社に販売を開始</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1962年(昭和37年)</th>
                <td className="px-6 py-4 text-gray-700">株式会社に改組と同時に商号を変更(資本金400万円) 新商号 小松ばね工業株式会社 販路拡大に伴い別に販売会社として「新小松ばね工業株式社を設立し営業部門を独立</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1963年(昭和38年)</th>
                <td className="px-6 py-4 text-gray-700">生産設備増強と需要の増加により、東京第二工場を新設</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1966年(昭和41年)</th>
                <td className="px-6 py-4 text-gray-700">経営合理化のため販売会社新小松ばね工業株式会社を吸収合併</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1969年(昭和44年)</th>
                <td className="px-6 py-4 text-gray-700">輸出貢献企業として通産大臣より表彰される</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1973年(昭和48年)</th>
                <td className="px-6 py-4 text-gray-700">本社ビル改築</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1975年(昭和50年)</th>
                <td className="px-6 py-4 text-gray-700">東京中小企業投資育成株式会社と資本提携</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1976年(昭和51年)</th>
                <td className="px-6 py-4 text-gray-700">宮城県柴田町に船岡工場新設</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1979年(昭和54年)</th>
                <td className="px-6 py-4 text-gray-700">転換社債を株式に転換し資本金に繰入れ、払込資本金13,180万円となる。</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1981年(昭和56年)</th>
                <td className="px-6 py-4 text-gray-700">東京第三工場を新設</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1984年(昭和59年)</th>
                <td className="px-6 py-4 text-gray-700">小松 節子 代表取締役就任</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1986年(昭和61年)</th>
                <td className="px-6 py-4 text-gray-700">船岡工場改築</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1989年(平成元年)</th>
                <td className="px-6 py-4 text-gray-700">秋田県仙北郡(現:大仙市)太田町に秋田太田町工場新設</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1992年(平成4年)</th>
                <td className="px-6 py-4 text-gray-700">秋田太田町第二工場を新設</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">1997年(平成9年)</th>
                <td className="px-6 py-4 text-gray-700">インドネシアにPT.KOMATSU BANE INDONESIAを開設 海外生産開始</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2002年(平成14年)</th>
                <td className="px-6 py-4 text-gray-700">ISO9001:2000認証取得 NoJQA−QM7736</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2006年(平成18年)</th>
                <td className="px-6 py-4 text-gray-700">「第一回 元気なモノづくり中小企業300社」入選(経済産業省 中小企業庁 選定)</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2007年(平成19年)</th>
                <td className="px-6 py-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>1月エコアクション21認証取得:No.1270(環境省策定)</li>
                    <li>4月大森税務署より「優良申告法人」表敬を受ける</li>
                    <li>6月資本金減資 1億円</li>
                    <li>7月11日天皇陛下ご視察(本社工場)</li>
                    <li>9月船岡工場老朽化により、大河原工場に移転、工場新設</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2011年(平成23年)</th>
                <td className="px-6 py-4 text-gray-700">平成23年度大田区「優工場」認定「総合部門賞」</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2013年(平成25年)</th>
                <td className="px-6 py-4 text-gray-700">5月 大森税務署より「優良申告法人」表敬を受ける</td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2014年(平成26年)</th>
                <td className="px-6 py-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>2月子会社:PT.KOMATSUBANE INDONESIA 移転</li>
                    <li>3月小松 万希子 代表取締役就任</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2017年(平成29年)</th>
                <td className="px-6 py-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>1月小松節子(会長)「第34回優秀経営者顕彰 女性経営者賞 受賞」日刊工業新聞社主催</li>
                    <li>4月小松節子(会長)が中小企業振興功労として「旭日単光章」叙勲</li>
                    <li>7月地域未来索引企業(経済産業省)に選定される</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2018年(平成30年)</th>
                <td className="px-6 py-4 text-gray-700">4月 大森税務署より「優良申告法人」表敬を受ける</td>
              </tr>
              <tr className="hover:bg-green-50/30">
                <th className="bg-green-100 text-left px-6 py-4 font-semibold text-gray-700 align-top">2023年(令和5年)</th>
                <td className="px-6 py-4 text-gray-700">5月 大森税務署より「優良申告法人」表敬を受ける</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
