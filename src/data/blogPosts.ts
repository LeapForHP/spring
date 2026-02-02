import { post01 } from './posts/post01';

// 言語コードの型定義
export type LangCode = 'ja' | 'en' | 'zh' | 'zh-Tw';

// 言語ごとのテキストを保持する型
export type LocalizedString = Record<LangCode, string>;

export type BlogSection = 
  | { type: 'heading'; text: LocalizedString }
  | { type: 'text'; text: LocalizedString }
  | { type: 'image'; url: string; alt?: string };

export type BlogPost = {
  id: number;
  title: LocalizedString;
  date: string;
  category: LocalizedString;
  image: string;
  desc: LocalizedString;
  sections: BlogSection[];
  views: number;
};

export const BLOG_POSTS: BlogPost[] = [
  post01,
];

// カテゴリー名（繁体字をネイティブ表記に修正）
export const CATEGORIES: LocalizedString[] = [
  { ja: 'お知らせ', en: 'News', zh: '通知', 'zh-Tw': '通知' },
  { ja: '技術情報', en: 'Tech Info', zh: '技术信息', 'zh-Tw': '技術資訊' },
  { ja: '会社情報', en: 'Company', zh: '公司信息', 'zh-Tw': '公司資訊' },
  { ja: '製品紹介', en: 'Products', zh: '产品介绍', 'zh-Tw': '產品介紹' },
  { ja: 'イベント', en: 'Events', zh: '活动', 'zh-Tw': '活動' },
  { ja: '採用情報', en: 'Careers', zh: '招聘信息', 'zh-Tw': '招聘資訊' },
  { ja: '設備紹介', en: 'Equipment', zh: '设备介绍', 'zh-Tw': '設備介紹' },
  { ja: '小松のばね', en: 'Komatsu Springs', zh: '小松弹簧', 'zh-Tw': '小松發條' },
];