import type { BlogPost } from '../blogPosts';

export const post01: BlogPost = {
  id: 1,
  title: {
    ja: 'ダブルトーションばねの幾何学：限られたスペースで2倍のトルクを実現する方法',
    en: 'Double Torsion Spring Geometry: How to Achieve 2x Torque in Limited Spaces',
    zh: '双扭转弹簧的几何学：在有限空间内实现双倍扭矩的方法',
    'zh-TW': '雙扭轉彈簧的幾何學：在有限空間內實現雙倍扭矩的方法'
  },
  date: '2026.02.03',
  category: {
    ja: '技術情報',
    en: 'Tech Info',
    zh: '技术信息',
    'zh-TW': '技術資訊'
  },
  image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=1000',
  desc: {
    ja: '「スペースがない、でも力が欲しい」という設計課題に対する幾何学的な最適解、ダブルトーションばね。自動車内装や精密機器で採用される理由と、3つの技術的メリットを解説します。',
    en: 'Double torsion springs offer the geometric optimal solution to the design challenge of "limited space but high power needed." We explain why they are chosen for automotive interiors and precision instruments, along with three technical benefits.',
    zh: '针对“没有空间，但需要力量”这一设计难题，双扭转弹簧提供了几何学上的最佳解决方案。本文将讲解其被汽车内饰和精密仪器采用的理由以及三大技术优势。',
    'zh-TW': '針對「沒有空間，但需要力量」這一設計難題，雙扭轉彈簧提供了幾何學上的最佳解決方案。本文將講解其被汽車內裝和精密儀器採用的理由以及三大技術優勢。'
  },
  views: 0,
  sections: [
    {
      type: 'heading',
      text: {
        ja: '【1分で解説！】ダブルトーションばねで省スペース・高出力を実現する 💡',
        en: '[1-Minute Guide] Achieving Space-Saving High Output with Double Torsion Springs 💡',
        zh: '【1分钟解读】利用双扭转弹簧实现省空间与高输出 💡',
        'zh-TW': '【1分鐘解讀】利用雙扭轉彈簧實現省空間與高輸出 💡'
      }
    },
    {
      type: 'text',
      text: {
        ja: '自動車の内装設計や精密機器のヒンジ設計において、エンジニアを最も悩ませるのは「限られたスペース」と「必要なトルク」の両立です。このトレードオフを劇的に解決するのが、ダブルトーションばね（複巻ねじりばね）です。\n\n一つの線材から左右対称に二つのコイルを巻き上げるこの形状は、設置スペースを横に広げることなく、並列化されたパワーによって通常のねじりばねの約2倍のトルクを生み出します。また、構造的に荷重バランスが優れているため、部品の「倒れ」や「偏摩耗」を防ぎ、製品の操作感を格段に向上させます。\n\n「スペースがない、でも力が欲しい」——そんな難題に対する幾何学的な最適解が、ここにあります。',
        en: 'In automotive interior design and precision instrument hinge design, what troubles engineers most is balancing "limited space" with "required torque." The solution that dramatically resolves this trade-off is the Double Torsion Spring.\n\nThis shape, which winds two coils symmetrically from a single wire, generates approximately twice the torque of a standard torsion spring through parallel power without expanding the installation space laterally. Additionally, because the load balance is structurally superior, it prevents parts from "tilting" or "uneven wear," significantly improving the operational feel of the product.\n\n"No space, but I need power"—the geometric optimal solution to this difficult problem lies here.',
        zh: '在汽车内饰设计和精密仪器的铰链设计中，最令工程师头疼的是如何兼顾“有限的空间”和“所需的扭矩”。能戏剧性地解决这一权衡问题的，正是双扭转弹簧（复卷扭力弹簧）。\n\n这种从一根线材左右对称卷起两个线圈的形状，在不横向扩充安装空间的情况下，通过并联动力产生约为普通扭力弹簧2倍的扭矩。此外，由于结构上载荷平衡优异，能防止部件“倾倒”或“偏磨损”，从而大幅提升产品的操作手感。\n\n“没有空间，但想要力量”——针对这一难题的几何学最佳解就在这里。',
        'zh-TW': '在汽車內裝設計和精密儀器的鉸鏈設計中，最令工程師頭疼的是如何兼顧「有限的空間」和「所需的扭矩」。能戲劇性地解決這一權衡問題的，正是雙扭轉彈簧（複卷扭力彈簧）。\n\n這種從一根線材左右對稱捲起兩個線圈的形狀，在不橫向擴充安裝空間的情況下，通過並聯動力產生約為普通扭力彈簧2倍的扭矩。此外，由於結構上載荷平衡優異，能防止部件「傾倒」或「偏磨損」，從而大幅提升產品的操作手感。\n\n「沒有空間，但想要力量」——針對這一難題的幾何學最佳解就在這裡。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: 'なぜ「ダブル」が選ばれるのか？幾何学的な3つのメリット 📐',
        en: 'Why Choose "Double"? 3 Geometric Advantages 📐',
        zh: '为何选择“双扭”？几何学上的三大优势 📐',
        'zh-TW': '為何選擇「雙扭」？幾何學上的三大優勢 📐'
      }
    },
    {
      type: 'text',
      text: {
        ja: '単一のねじりばねを2個並べるのではなく、あえて「ダブルトーション」という一体型を選択することには、設計上の明確な意図があります。',
        en: 'Choosing a unified "Double Torsion" type instead of arranging two single torsion springs is done with a clear design intention.',
        zh: '不选择并排两个单一的扭力弹簧，而是特意选择“双扭转”这一体型，有着明确的设计意图。',
        'zh-TW': '不選擇並排兩個單一的扭力彈簧，而是特意選擇「雙扭轉」這一體型，有著明確的設計意圖。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '1. 軸方向のスペースを極限まで節約できる 📏',
        en: '1. Maximizing Axial Space Savings 📏',
        zh: '1. 极大限度地节省轴向空间 📏',
        'zh-TW': '1. 極大限度地節省軸向空間 📏'
      }
    },
    {
      type: 'text',
      text: {
        ja: '自動車のドアハンドルやアームレストの内部など、軸方向（横方向）の余裕がない場所では、太い線径のばねを入れることができません。ダブルトーションばねは、細い線径のコイルを二つ並列に配置することで、細身ながらも強力な反発力を確保します。これにより、筐体のスリム化とデザイン性の向上を同時に達成できます。',
        en: 'In locations with no axial (lateral) margin, such as inside car door handles or armrests, thick wire springs cannot be used. Double torsion springs secure powerful resilience despite being slender by arranging two coils of thin wire diameter in parallel. This simultaneously achieves a slimmer chassis and improved design aesthetics.',
        zh: '在汽车门把手或扶手内部等没有轴向（横向）余量的位置，无法放入线径较粗的弹簧。双扭转弹簧通过并列配置两个细线径的线圈，虽然纤细却能确保强大的反弹力。由此，可以同时实现机身的轻薄化和设计性的提升。',
        'zh-TW': '在汽車門把手或扶手內部等沒有軸向（橫向）餘量的位置，無法放入線徑較粗的彈簧。雙扭轉彈簧通過並列配置兩個細線徑的線圈，雖然纖細卻能確保強大的反彈力。由此，可以同時實現機身的輕薄化和設計性的提升。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '2. 左右対称構造がもたらす圧倒的な動作安定性 ⚖️',
        en: '2. Overwhelming Operational Stability via Symmetrical Structure ⚖️',
        zh: '2. 左右对称结构带来的压倒性动作稳定性 ⚖️',
        'zh-TW': '2. 左右對稱結構帶來的壓倒性動作穩定性 ⚖️'
      }
    },
    {
      type: 'text',
      text: {
        ja: '単巻のねじりばねは、動作時に軸に対して斜め方向の力が加わりやすく、これがヒンジのガタつきや異音の原因になります。一方、ダブルトーションばねは中央のブリッジ（連結部）を境に左右から均等に力がかかるため、動作が極めてスムーズです。高級車に求められる「しっとりとした開閉感」は、この幾何学的な安定性から生まれます。',
        en: 'Single-coil torsion springs tend to apply force diagonally to the axis during operation, causing hinge wobbling and noise. On the other hand, double torsion springs apply force evenly from the left and right across the central bridge (connection part), resulting in extremely smooth operation. The "damped, premium opening/closing feel" required in luxury cars is born from this geometric stability.',
        zh: '单卷扭力弹簧在动作时容易对轴产生斜向的力，这是导致铰链松动或产生异音的原因。另一方面，双扭转弹簧以中央的桥架（连接部）为界，左右受力均匀，动作极其平滑。豪车所追求的“沉稳顺滑的开闭感”，正是源于这种几何学上的稳定性。',
        'zh-TW': '單卷扭力彈簧在動作時容易對軸產生斜向的力，這是導致鉸鏈鬆動或產生異音的原因。另一方面，雙扭轉彈簧以中央的橋架（連接部）為界，左右受力均勻，動作極其平滑。豪車所追求的「沉穩順滑的開閉感」，正是源於這種幾何學上的穩定性。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '3. 組み立てミスを物理的に排除する「ポカヨケ」効果 🛠️',
        en: '3. "Poka-yoke" Effect: Physically Eliminating Assembly Errors 🛠️',
        zh: '3. 物理上排除组装错误的“防呆（Poka-yoke）”效果 🛠️',
        'zh-TW': '3. 物理上排除組裝錯誤的「防呆（Poka-yoke）」效果 🛠️'
      }
    },
    {
      type: 'text',
      text: {
        ja: '生産現場において、左右勝手の異なるばねを2種類管理し、正しく組み付けるのはリスクを伴います。ダブルトーションばねなら「1部品」で完結するため、在庫管理が容易になるだけでなく、逆付けなどの誤組付けを物理的に防ぐことが可能です。中国の大規模な生産ラインにおいても、この効率性は大きなコストメリットとなります。',
        en: 'In production environments, managing two types of springs with different left/right orientations and assembling them correctly involves risk. Since a double torsion spring is complete as a "single part," it not only simplifies inventory management but also physically prevents assembly errors such as backward installation. Even in large-scale production lines in China, this efficiency provides a significant cost advantage.',
        zh: '在生产现场，管理左右旋向不同的两种弹簧并正确组装伴随着风险。如果是双扭转弹簧，只需“1个部件”即可完结，不仅库存管理变得容易，还能从物理上防止反向安装等组装错误。即使在中国的的大规模生产线上，这种高效性也是巨大的成本优势。',
        'zh-TW': '在生產現場，管理左右旋向不同的兩種彈簧並正確組裝伴隨著風險。如果是雙扭轉彈簧，只需「1個部件」即可完結，不僅庫存管理變得容易，還能從物理上防止反向安裝等組裝錯誤。即使在中國的的大規模生產線上，這種高效性也是巨大的成本優勢。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '自動車の内装部品における具体的な活用シーン 🚗',
        en: 'Specific Use Cases in Automotive Interior Parts 🚗',
        zh: '汽车内饰部件中的具体应用场景 🚗',
        'zh-TW': '汽車內裝部件中的具體應用場景 🚗'
      }
    },
    {
      type: 'text',
      text: {
        ja: '精密なトルク制御が求められる現場で、小松ばね工業のダブルトーションばねは日々活躍しています。',
        en: 'In fields where precise torque control is required, Komatsu Spring Industry\'s double torsion springs are active every day.',
        zh: '在要求精密扭矩控制的现场，小松弹簧工业的双扭转弹簧每天都在大显身手。',
        'zh-TW': '在要求精密扭矩控制的現場，小松發條工業的雙扭轉彈簧每天都在大顯身手。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: 'センターコンソールとグローブボックスの開閉',
        en: 'Opening and Closing of Center Consoles and Glove Boxes',
        zh: '中控台和手套箱的开闭',
        'zh-TW': '中控台和手套箱的開閉'
      }
    },
    {
      type: 'text',
      text: {
        ja: '最近の自動車はインパネ周りの高密度化が進み、ばねのスペースは削られる一方です。しかし、ユーザーが触れるコンソールの蓋には、しっかりとした手応えと、パタパタしない高級感が求められます。ダブルトーションばねは、狭い隙間に潜り込みつつ、蓋の重量をしっかり支える理想的なパーツです。',
        en: 'Recent cars have increasingly high-density instrument panels, and space for springs is continuously being reduced. However, the console lids that users touch are expected to have a solid feel and a non-flimsy, premium quality. Double torsion springs are ideal parts that fit into narrow gaps while firmly supporting the lid\'s weight.',
        zh: '最近的汽车仪表盘周围的高密度化不断推进，弹簧的空间一方面被不断削减。然而，用户接触的控制台盖板需要有扎实的手感和不松垮的高级感。双扭转弹簧是能够潜入狭窄缝隙，同时稳固支撑盖板重量的理想部件。',
        'zh-TW': '最近的汽車儀表板周圍的高密度化不斷推進，彈簧的空間一方面被不斷削減。然而，用戶接觸的控制台蓋板需要有紮實的手感和不鬆垮的高級感。雙扭轉彈簧是能夠潛入狹窄縫隙，同時穩固支撐蓋板重量的理想部件。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: 'シートヒンジと収納式ヘッドレスト',
        en: 'Seat Hinges and Retractable Headrests',
        zh: '座椅铰链和收纳式头枕',
        'zh-TW': '座椅鉸鏈和收納式頭枕'
      }
    },
    {
      type: 'text',
      text: {
        ja: 'シート周りの可動部は、乗員の体格に合わせて大きな荷重がかかる場所です。荷重分散に優れたダブルトーションばねを採用することで、長期間の使用でもばねがへたりにくく、クリック感やホールド性能を維持することができます。キヤノン様やセイコー様といった世界基準の品質を求めるお客様と歩んできた当社の技術が、ここでも活きています。',
        en: 'Movable parts around seats are subjected to heavy loads depending on the occupant\'s physique. By adopting double torsion springs, which excel in load distribution, the springs are less likely to settle (fatigue) even after long-term use, maintaining click feel and holding performance. Our technology, developed alongside customers demanding world-class quality like Canon and Seiko, is alive here as well.',
        zh: '座椅周围的可动部位是根据乘客体格承受较大载荷的地方。通过采用载荷分散优异的双扭转弹簧，即使长期使用弹簧也不易疲劳，能够维持点击感和保持性能。我们与佳能、精工等追求世界基准质量的客户共同磨练出的技术，在这里也得到了应用。',
        'zh-TW': '座椅周圍的可動部位是根據乘客體格承受較大載荷的地方。通過採用載荷分散優異的雙扭轉彈簧，即使長期使用彈簧也不易疲勞，能夠維持點擊感和保持性能。我們與佳能、精工等追求世界基準質量的客戶共同磨練出的技術，在這裡也得到了應用。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '小松ばね工業が実現する「究極のダブルトーション」 🎯',
        en: 'The "Ultimate Double Torsion" Realized by Komatsu Spring 🎯',
        zh: '小松弹簧工业实现的“终极双扭转弹簧” 🎯',
        'zh-TW': '小松發條工業實現的「終極雙扭轉彈簧」 🎯'
      }
    },
    {
      type: 'text',
      text: {
        ja: '形状が複雑になればなるほど、製造メーカーの「成形技術」の差が顕著に現れます。',
        en: 'The more complex the shape becomes, the more apparent the difference in the manufacturer\'s "forming technology" becomes.',
        zh: '形状越复杂，制造厂商“成形技术”的差距就表现得越明显。',
        'zh-TW': '形狀越複雜，製造廠商「成形技術」的差距就表現得越明顯。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '最新鋭NC成形機による「ズレ」のない製造 ⚙️',
        en: 'Precision Manufacturing with Latest NC Forming Machines ⚙️',
        zh: '利用最新锐NC成形机实现无“偏差”制造 ⚙️',
        'zh-TW': '利用最新銳NC成形機實現無「偏差」製造 ⚙️'
      }
    },
    {
      type: 'text',
      text: {
        ja: 'ダブルトーションばねの肝は、左右のコイルの巻き角度やピッチです。ここがズレると、荷重バランスが崩れて本来の性能を発揮できません。当社では最新のNCマルチフォーミング機を使用し、複雑なブリッジ形状もコントロール。試作1個から量産まで、安定した品質を約束します。',
        en: 'The core of a double torsion spring is the winding angle and pitch of the left and right coils. If these deviate, the load balance collapses, and the original performance cannot be achieved. We use the latest NC multi-forming machines to control even complex bridge shapes. We promise stable quality from a single prototype to mass production.',
        zh: '双扭转弹簧的关键在于左右线圈的卷绕角度和节距。如果这里出现偏差，载荷平衡就会崩塌，无法发挥本来性能。本公司使用最新的NC多轴成形机，对复杂的桥架形状也能进行控制。从1个试作件到量产，承诺提供稳定的品质。',
        'zh-TW': '雙扭轉彈簧的關鍵在於左右線圈的捲繞角度和節距。如果這裡出現偏差，載荷平衡就會崩塌，無法發揮本來性能。本公司使用最新的NC多軸成形機，對複雜的橋架形狀也能進行控制。從1個試作件到量產，承諾提供穩定的品質。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: '「図面通り」を海外へ。徹底したデータ管理 🌍',
        en: 'Delivering "As per Drawing" Globally. Thorough Data Management 🌍',
        zh: '将“完全按图纸”的产品销往海外。彻底的数据管理 🌍',
        'zh-TW': '將「完全按圖紙」的產品銷往海外。徹底的數據管理 🌍'
      }
    },
    {
      type: 'text',
      text: {
        ja: '私たちは、日本国内だけでなく米国、シンガポール、そして中国のエンジニアの皆様とも長年取引を行っています。ISO9001/14001に基づいた厳格な品質管理はもちろん、試作時の製造パラメーターを全てデジタル保存。数年後のリピート注文時にも、当時と全く同じ性能のばねをお届けする体制を整えています。',
        en: 'We have been doing business for many years not only in Japan but also with engineers in the US, Singapore, and China. In addition to strict quality control based on ISO9001/14001, we digitally save all manufacturing parameters during prototyping. We have a system in place to deliver springs with exactly the same performance as before, even for repeat orders years later.',
        zh: '我们不仅在日本国内，还与美国、新加坡以及中国的工程师们有着长年的业务往来。基于ISO9001/14001的严格质量管理自不必说，试作时的制造参数也全部进行数字保存。即使是几年后的重复订单，我们也建立了能提供与当时性能完全相同的弹簧的体制。',
        'zh-TW': '我們不僅在日本國內，還與美國、新加坡以及中國的工程師們有著長年的業務往來。基於ISO9001/14001的嚴格質量管理自不必說，試作時的製造參數也全部進行數字保存。即使是幾年後的重複訂單，我們也建立了能提供與當時性能完全相同的彈簧的體制。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: 'ダブルトーションばねの設計・調達に関するFAQ 🤝',
        en: 'FAQ Regarding Design and Procurement of Double Torsion Springs 🤝',
        zh: '关于双扭转弹簧设计与采购的常见问题 (FAQ) 🤝',
        'zh-TW': '關於雙扭轉彈簧設計與採購的常見問題 (FAQ) 🤝'
      }
    },
    {
      type: 'text',
      text: {
        ja: 'Q1. 通常のねじりばねからダブルへの設計変更は、トルク計算が難しくありませんか？\n\nA1. はい、確かに計算は複雑になりますが、ご安心ください！小松ばね工業では、お客様の構想段階からR&Dチームに加わり、最適なトルク計算や形状提案を無料で行っています。図面が完成する前段階での「このスペースに収まるかな？」というご相談が、最も効率的な設計への近道です。\n\nQ2. 複雑な形状なので、試作費用が高くなるのが心配です。\n\nA2. 実は逆です。当社のNC成形機は汎用性が高く、複雑なダブルトーションでも必要なツールは最小限に抑えて試作可能です。また、「試作と同じ設備で量産する」という当社の哲学により、量産移行時のトラブル（手戻り）がなくなるため、トータルコストでは安くなります。\n\nQ3. 中国の製造拠点への納品や、英語・中国語での対応は可能ですか？\n\nA3. もちろんです。当社は海外輸出の実績が豊富で、インドネシアには現地法人もございます。英語での技術的なやり取りはもちろん、中国の現地調達担当者様との連携もスムーズに行えます。日本の高品質なばねを、貴社のグローバルなサプライチェーンへダイレクトにお届けします。',
        en: 'Q1. Isn\'t torque calculation difficult when changing design from a standard torsion spring to a double one?\n\nA1. Yes, calculation does become complex, but please rest assured! At Komatsu Spring Industry, we join your R&D team from the conceptual stage and provide optimal torque calculations and shape proposals for free. Consulting us at the stage before drawings are finalized ("Will this fit in this space?") is the shortcut to the most efficient design.\n\nQ2. I\'m worried that prototype costs will be high due to the complex shape.\n\nA2. Actually, it\'s the opposite. Our NC forming machines have high versatility, allowing prototyping with minimal tooling even for complex double torsion springs. Also, based on our philosophy of "mass production with the same equipment as prototyping," troubles during the transition to mass production are eliminated, resulting in lower total costs.\n\nQ3. Is delivery to manufacturing bases in China or support in English/Chinese possible?\n\nA3. Of course. We have extensive experience in overseas exports and have a local subsidiary in Indonesia. We can handle technical communication in English and coordinate smoothly with local procurement staff in China. We deliver high-quality Japanese springs directly to your global supply chain.',
        zh: 'Q1. 从普通扭力弹簧改为双扭设计，扭矩计算会不会很难？\n\nA1. 是的，计算确实会变复杂，但请放心！在小松弹簧工业，我们从客户的构想阶段就加入R&D团队，免费提供最佳的扭矩计算和形状建议。在图纸完成前的阶段咨询“这个空间能装下吗？”，是通往最高效设计的捷径。\n\nQ2. 因为形状复杂，担心试作费用会变高。\n\nA2. 恰恰相反。本公司的NC成形机通用性高，即使是复杂的双扭转弹簧，也能将所需模具控制在最小限度进行试作。此外，基于“用与试作相同的设备进行量产”的理念，消除了向量产转移时的故障（返工），因此总成本会更低。\n\nQ3. 能否向中国的制造基地交货，或使用英语/中文对应？\n\nA3. 当然可以。本公司拥有丰富的海外出口实绩，在印度尼西亚也有当地法人。不仅可以用英语进行技术交流，还能与中国的当地采购负责人顺畅对接。我们将把日本的高品质弹簧直接送达贵公司的全球供应链。',
        'zh-TW': 'Q1. 從普通扭力彈簧改為雙扭設計，扭矩計算會不會很難？\n\nA1. 是的，計算確實會變複雜，但請放心！在小松發條工業，我們從客戶的構想階段就加入R&D團隊，免費提供最佳的扭矩計算和形狀建議。在圖紙完成前的階段諮詢「這個空間能裝下嗎？」，是通往最高效設計的捷徑。\n\nQ2. 因為形狀複雜，擔心試作費用會變高。\n\nA2. 恰恰相反。本公司的NC成形機通用性高，即使是複雜的雙扭轉彈簧，也能將所需模具控制在最小限度進行試作。此外，基於「用與試作相同的設備進行量產」的理念，消除了向量產轉移時的故障（返工），因此總成本會更低。\n\nQ3. 能否向中國的製造基地交貨，或使用英語/中文對應？\n\nA3. 當然可以。本公司擁有豐富的海外出口實績，在印度尼西亞也有當地法人。不僅可以用英語進行技術交流，還能與中國的當地採購負責人順暢對接。我們將把日本的高品質彈簧直接送達貴公司的全球供應鏈。'
      }
    },
    {
      type: 'heading',
      text: {
        ja: 'まとめ：リスクのない設計と量産で、次世代の製品を形に！ 🚀',
        en: 'Conclusion: Shaping Next-Gen Products with Risk-Free Design and Mass Production! 🚀',
        zh: '总结：以无风险的设计与量产，塑造次世代产品！ 🚀',
        'zh-TW': '總結：以無風險的設計與量產，塑造次世代產品！ 🚀'
      }
    },
    {
      type: 'text',
      text: {
        ja: 'ダブルトーションばねは、限られた空間で最大のパフォーマンスを発揮するための、エンジニアにとっての「秘密兵器」です。\n\n1. 2倍のトルク： 同一スペースで並列パワーを実現。\n2. 圧倒的バランス： 左右対称構造で、製品のガタつきを解消。\n3. コスト削減： 部品統合により、管理と組付けを効率化。\n4. 世界標準の品質： キヤノン様、セイコー様が認めた超精密成形。\n5. グローバル対応： 中国・アジア圏へのスムーズな納品体制。\n\n「このスペースではトルクが足りない」「開閉フィーリングをもっと良くしたい」──そうお考えのR&Dエンジニアの皆様、ぜひ一度小松ばね工業へご相談ください。私たちは単なる部品サプライヤーではなく、貴社の製品価値を共に高めるパートナーです。',
        en: 'Double torsion springs are a "secret weapon" for engineers to maximize performance in limited spaces.\n\n1. 2x Torque: Achieving parallel power in the same space.\n2. Overwhelming Balance: Symmetrical structure eliminates product wobbling.\n3. Cost Reduction: Streamlining management and assembly through part integration.\n4. World-Class Quality: Ultra-precision forming recognized by Canon and Seiko.\n5. Global Support: Smooth delivery system to China and the Asian region.\n\nTo all R&D engineers thinking "torque is insufficient in this space" or "I want to improve the opening/closing feel"—please consult with Komatsu Spring Industry. We are not just a parts supplier, but a partner who enhances your product value together.',
        zh: '双扭转弹簧是为了在有限空间内发挥最大性能，可谓是工程师的“秘密武器”。\n\n1. 2倍扭矩： 在同一空间实现并联动力。\n2. 压倒性的平衡： 左右对称结构，消除产品晃动。\n3. 削减成本： 通过部件整合，使管理和组装高效化。\n4. 世界标准的品质： 获佳能、精工认可的超精密成形。\n5. 全球对应： 面向中国・亚洲圈的顺畅交货体制。\n\n“这个空间扭矩不够”“想让开闭手感更好”——有这样想法的R&D工程师们，请务必咨询小松弹簧工业。我们不只是单纯的零件供应商，而是与贵公司共同提升产品价值的合作伙伴。',
        'zh-TW': '雙扭轉彈簧是為了在有限空間內發揮最大性能，可謂是工程師的「秘密武器」。\n\n1. 2倍扭矩： 在同一空間實現並聯動力。\n2. 壓倒性的平衡： 左右對稱結構，消除產品晃動。\n3. 削減成本： 通過部件整合，使管理和組裝高效化。\n4. 世界標準的品質： 獲佳能、精工認可的超精密成形。\n5. 全球對應： 面向中國・亞洲圈的順暢交貨體制。\n\n「這個空間扭矩不夠」「想讓開閉手感更好」——有這樣想法的R&D工程師們，請務必諮詢小松發條工業。我們不只是單純的零件供應商，而是與貴公司共同提升產品價值的合作夥伴。'
      }
    },
    {
      type: 'text',
      text: {
        ja: '【お問い合わせはこちら】\nばねの設計相談・お見積り・試作のご依頼など、海外プロジェクト担当が丁寧に対応いたします。\n[👉 お問い合わせフォーム（世界対応）へ](https://www.komatsubane.com/contact_us/)\n\n---\n\n参照元・参考文献:\n* 小松ばね工業株式会社 製品情報（トーションばね）\nhttps://www.komatsubane.com/products/\n* 日本ばね工業会（JSMA）ばね用語および設計基準\n* Spring Manufacturers Institute (SMI) Technical Publications',
        en: '【Contact Us】\nFor spring design consultations, quotes, prototype requests, etc., our overseas project managers will assist you carefully.\n[👉 Contact Form (Global Support)](https://www.komatsubane.com/contact_us/)\n\n---\n\nReferences:\n* Komatsu Spring Industry Co., Ltd. Product Information (Torsion Springs)\nhttps://www.komatsubane.com/products/\n* Japan Spring Manufacturers Association (JSMA) Spring Terms and Design Standards\n* Spring Manufacturers Institute (SMI) Technical Publications',
        zh: '【联系我们】\n关于弹簧的设计咨询、报价、试作委托等，海外项目负责人将竭诚为您服务。\n[👉 咨询表单（支持全球）](https://www.komatsubane.com/contact_us/)\n\n---\n\n参考来源・参考文献:\n* 小松弹簧工业株式会社 产品信息（扭转弹簧）\nhttps://www.komatsubane.com/products/\n* 日本弹簧工业会（JSMA）弹簧术语及设计基准\n* Spring Manufacturers Institute (SMI) Technical Publications',
        'zh-TW': '【聯繫我們】\n關於彈簧的設計諮詢、報價、試作委託等，海外項目負責人將竭誠為您服務。\n[👉 諮詢表單（支持全球）](https://www.komatsubane.com/contact_us/)\n\n---\n\n參考來源・參考文獻:\n* 小松發條工業株式會社 產品信息（扭轉彈簧）\nhttps://www.komatsubane.com/products/\n* 日本彈簧工業會（JSMA）彈簧術語及設計基準\n* Spring Manufacturers Institute (SMI) Technical Publications'
      }
    }
  ]
};