import { useTranslation } from 'react-i18next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CSRPage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
      <Header />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{t('quality')}</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-teal-600">{t('home')}</a>
          <span className="mx-2">»</span>
          <span>{t('quality')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">{t('quality')}</h2>
        </div>

        <div className="space-y-16">
          {/* 品質方針 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">品質方針</h3>
            
            <div className="flex items-center gap-6 mb-8 bg-green-50 p-6 rounded-lg">
              <img src="https://www.komatsubane.com/img/icon12.png" alt="ISO 9001" className="w-32 h-32 object-contain" />
              <div className="text-sm text-gray-700">
                <strong>ISO 9001:2015</strong><br />
                登録日:2002年2月1日<br />
                登録証番号:JQA-QM7736
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                小松ばね工業株式会社が実施する「ばね」の製造活動において、「お客様に必要とされる」を経営理念とし、「お客様第一主義に徹する」と言う基本方針のもと、企業発展の原理「成長と拡大」「安定」を同時に遂行することを継続する。
              </p>
              <p>
                今後の課題は精密機器産業の急速な進化と共に超精密ばねのモノづくり企業としての技術の向上と柔軟な発想力で、品質の均一化、納期の厳守、コストへの適正化を図り、企業存続の必要利益の確保を遵守する。
              </p>
              <p>
                お客様の要求事項への適合及び品質マネジメントシステムの有効性を継続的に改善促進する誓約を含め品質方針を定める。
              </p>
              
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                <p className="text-lg font-semibold text-gray-800">
                  「お客様の要望を満たすことを我社の事業とし、<br />
                  信頼という製品を提供し続けること」
                </p>
              </div>

              <p>
                この品質方針は我社の事業の本質であり、全社員がこの方針を理解し、意図する製品、及びサービスを確実に提供できるようにすることが基本である。<br />
                各人は決められたことを確実に実施し活動に責任を持つことで、意図した成果を達成できる。
              </p>

              <p className="text-right mt-8">
                小松ばね工業株式会社<br />
                代表取締役社長 小松万希子
              </p>
            </div>
          </section>

          {/* 環境経営方針 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">環境経営方針</h3>
            
            <div className="flex items-center gap-6 mb-8 bg-green-50 p-6 rounded-lg">
              <img src="https://www.komatsubane.com/img/icon13.png" alt="エコアクション21" className="w-32 h-32 object-contain" />
              <div className="text-sm text-gray-700">
                認証・登録日:2007年1月18日<br />
                認証番号:0001270
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-lg mb-2">1. 企業理念</h4>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mb-4">
                  <p className="font-semibold">「お客様に必要とされる」</p>
                </div>
                <p>
                  我々が永遠であるためには、お客様に強く必要とされ続けなければならない。いかなる環境でも、より優れた技術でより優れた「ばね」をつくることで、我々は企業を通じて社会に貢献する。<br />
                  エコアクション21の理念を基に「地球との共生」を考え、当社の全ての業務にかかわる環境影響を明確にし、環境に優しい企業活動を目指す。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">2. 環境経営を通じてより良い進化した組織へ成長するために、今後の経営における課題(組織の外部、内部)とチャンスを整理し、課題を克服する事で、事業発展の機会になる。事業内容、事業を取り巻く状況、事業と環境のかかわりによって変化する課題とチャンスを必要に応じて見直しをする。</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">3. 企業理念、事業活動における環境への負荷を整合させ、取り組むべき重点分野を特定する。</h4>
                <ul className="list-none space-y-2 ml-4">
                  <li>1) 電力、ガス、ガソリンの削減による、CO₂の排出抑制</li>
                  <li>2) 廃棄物の分別・リサイクル、紙の削減による、廃棄物の排出抑制</li>
                  <li>3) 節水などによる、使用量の削減</li>
                  <li>4) 化学物質使用量の削減</li>
                  <li>5) 原材料の効率的な使用による、製造廃棄物の削減</li>
                  <li>6) グリーン調達の推進</li>
                  <li>7) 製品含有化学物質を把握し、含有、使用の禁止</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">4. 環境経営の活動を通じて環境目標、環境計画の継続的改善に努め、環境経営のステップアップを図る。</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">5. 環境関連法規の遵守を誓約する。</h4>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">6. 全従業員へ環境経営方針の内容を理解し、取り組むことが出来るよう掲示や会議、朝礼などを活用して周知する。</h4>
              </div>

              <p className="text-right mt-8">
                小松ばね工業株式会社<br />
                代表取締役社長 小松万希子
              </p>
            </div>
          </section>

          {/* CO₂削減への取り組み */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CO₂削減への取り組み</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                小松ばね工業株式会社は、持続可能な社会の実現に向けて、CO₂排出削減に積極的に取り組んでいます。<br />
                環境への配慮は企業の責任であると考え、以下のような具体的な対策を進めています。
              </p>

              <div>
                <h4 className="text-xl font-bold text-teal-600 mb-4">現在の取り組み</h4>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-800">・大河原工場の電力を100%再生可能エネルギーへ切り替え</strong><br />
                    <span className="text-sm">再エネ由来の電力を使用することで、工場の運用に伴うCO₂排出を大幅に削減しています。</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">・全社LED照明化</strong><br />
                    <span className="text-sm">従来照明に比べ消費電力の少ないLEDを導入し、省エネ化を実現。</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">・電気自動車の導入(1台)</strong><br />
                    <span className="text-sm">社用車の一部をEV化し、移動に伴う環境負荷を軽減。</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">・「HTT取組宣言企業(東京都)」としての活動</strong><br />
                    <span className="text-sm">省エネ・創エネ・蓄エネを推進する姿勢を都に公表し、取り組みを強化。</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">・「おおたクールアクション(大田区)」参加</strong><br />
                    <span className="text-sm">地域の環境活動へ参加し、地元とともに持続可能なまちづくりを目指しています。</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-teal-600 mb-4">今後の予定</h4>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-800">・全社的に再エネ電力プランへの移行を推進</strong><br />
                    <span className="text-sm">工場だけでなく、各事業所やオフィスも再生可能エネルギーに切り替えていきます。</span>
                  </li>
                  <li>
                    <strong className="text-gray-800">・本社空調設備の省エネ型への更新</strong><br />
                    <span className="text-sm">古い空調機器を高効率の省エネタイプに交換し、使用電力の削減を図ります。</span>
                  </li>
                </ul>
              </div>

              <p className="mt-8 text-center text-gray-600">
                こうした活動を通じて、小松ばね工業株式会社は環境への負荷を最小限に抑えながら、<br />
                持続可能な未来の実現に貢献してまいります。
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
