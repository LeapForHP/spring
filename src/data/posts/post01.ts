import type { BlogPost } from '../blogPosts';

export const post01: BlogPost = {
  id: 1,
  title: {
    ja: '部品固定の課題でお困りの方へ！技術支援の進め方',
    en: 'Technical Support for Part Fastening Challenges',
    zh: '针对零件固定问题的技术支持',
    'zh-Tw': '針對零件固定問題的技術支持'
  },
  date: '2025.12.15',
  category: { ja: '光洋のばね', en: 'Koyo Springs', zh: '光洋弹簧', 'zh-Tw': '光洋彈簧' },
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
  desc: {
    ja: '設計段階からの技術支援によりコスト削減を実現した事例。',
    en: 'A case study of cost reduction through technical support from the design stage.',
    zh: '通过从设计阶段开始的技术支持实现成本降低的案例。',
    'zh-Tw': '通過從設計階段開始的技術支持實現成本降低的案例。'
  },
  views: 1200,
  sections: [
    { 
      type: 'heading', 
      text: {
        ja: 'コストダウンの鍵',
        en: 'Key to Cost Reduction',
        zh: '降低成本的关键',
        'zh-Tw': '降低成本的關鍵'
      }
    },
    { 
      type: 'text', 
      text: {
        ja: '企画・構想段階から技術スタッフが参画します。',
        en: 'Our technical staff participates from the planning stage.',
        zh: '我们的技术人员从策划阶段就开始参与。',
        'zh-Tw': '我們的技術人員從策劃階段就開始參與。'
      }
    }
  ]
};