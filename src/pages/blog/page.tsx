import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import { BLOG_POSTS, CATEGORIES, type LangCode } from '../../data/blogPosts';

export default function Blog() {
  // blog と common の両方の翻訳ファイルを使用
  const { t, i18n } = useTranslation(['blog', 'common']);
  
  // 現在選択されている言語を取得 (ja, en, zh, zh-Tw)
  const currentLang = (i18n.language || 'ja') as LangCode;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // A. 全記事を日付順に並び替え
  const sortedByDatePosts = useMemo(() => {
    return [...BLOG_POSTS].sort((a, b) => {
      return new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime();
    });
  }, []);

  // B. 人気記事トップ5
  const popularPosts = useMemo(() => {
    return [...BLOG_POSTS].sort((a, b) => b.views - a.views).slice(0, 5);
  }, []);

  // C. おすすめ記事
  const recommendedPosts = useMemo(() => {
    const pool = [...popularPosts.slice(0, 3), ...sortedByDatePosts.slice(0, 3)];
    const uniquePool = Array.from(new Set(pool.map(p => p.id)))
      .map(id => pool.find(p => p.id === id)!);
    const shuffled = uniquePool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [popularPosts, sortedByDatePosts]);

  // D. 表示用のフィルター処理（多言語対応版）
  const displayPosts = sortedByDatePosts.filter(post => {
    // カテゴリーは日本語をキーとして判定（内部ロジック用）
    const matchCategory = selectedCategory ? post.category.ja === selectedCategory : true;
    
    // 検索は現在の言語のタイトル・説明文から探す
    const matchSearch = searchTerm 
      ? post.title[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.desc[currentLang].toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    return matchCategory && matchSearch;
  });

  const isFiltered = searchTerm !== '' || selectedCategory !== null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Link to="/blog" onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-600 tracking-wider mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              {t('blog:title')}
            </h1>
          </Link>
          <p className="text-gray-500 text-lg">
            {t('blog:subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <main className="lg:w-2/3">
            {!isFiltered && (
              <section className="mb-16">
                <div className="flex items-center gap-2 mb-6 border-b-2 border-teal-500 pb-2">
                  <i className="ri-thumb-up-line text-2xl text-teal-600"></i>
                  <h2 className="text-2xl font-bold text-gray-900">{t('blog:recommended')}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedPosts[0] && (
                    <Link to={`/blog/${recommendedPosts[0].id}`} className="md:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="md:flex">
                        <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                          <img src={recommendedPosts[0].image} alt={recommendedPosts[0].title[currentLang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6 md:w-1/2 flex flex-col justify-center">
                          <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded mb-3 w-fit">
                            {recommendedPosts[0].category[currentLang]}
                          </span>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors">
                            {recommendedPosts[0].title[currentLang]}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {recommendedPosts[0].desc[currentLang]}
                          </p>
                          <time className="text-gray-400 text-xs">{recommendedPosts[0].date}</time>
                        </div>
                      </div>
                    </Link>
                  )}

                  {recommendedPosts.slice(1).map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="overflow-hidden h-48">
                        <img src={post.image} alt={post.title[currentLang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {post.category[currentLang]}
                          </span>
                          <time className="text-gray-400 text-xs">{post.date}</time>
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                          {post.title[currentLang]}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-teal-500 pb-2">
                <div className="flex items-center gap-2">
                  <i className={`text-2xl text-teal-600 ${isFiltered ? 'ri-search-line' : 'ri-time-line'}`}></i>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchTerm ? `${t('blog:searchResult')}: "${searchTerm}"` : (selectedCategory ? `${t('blog:categories')}: ${CATEGORIES.find(c => c.ja === selectedCategory)?.[currentLang]}` : t('blog:latest'))}
                  </h2>
                </div>
                {isFiltered && (
                  <button onClick={() => { setSearchTerm(''); setSelectedCategory(null); }} className="text-sm text-gray-500 hover:text-teal-600 underline">
                    {t('blog:clearCondition')}
                  </button>
                )}
              </div>

              {displayPosts.length > 0 ? (
                <div className="space-y-6">
                  {displayPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="sm:w-1/3 h-48 sm:h-32 overflow-hidden rounded">
                        <img src={post.image} alt={post.title[currentLang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="sm:w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                            {post.category[currentLang]}
                          </span>
                          <time className="text-gray-400 text-xs">{post.date}</time>
                        </div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                          {post.title[currentLang]}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                          {post.desc[currentLang]}
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="text-xs text-gray-400"><i className="ri-eye-line mr-1"></i>{post.views}</span>
                          <span className="text-teal-600 text-sm font-medium group-hover:underline">
                            {t('blog:readMore')} →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200 border-dashed">
                  <p className="text-gray-500">{t('blog:noResults')}</p>
                </div>
              )}
            </section>
          </main>

          <aside className="lg:w-1/3 space-y-8">
            {/* 記事検索 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 border-l-4 border-teal-500 pl-3">{t('common:search')}</h3>
              <div className="flex gap-2">
                <input 
                  type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder={t('blog:searchPlaceholder')} 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
                />
                <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>

            {/* 人気記事ランキング */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 border-l-4 border-teal-500 pl-3">{t('blog:popularRanking')}</h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="flex items-start gap-3 group cursor-pointer">
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${index < 3 ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-600'}`}>{index + 1}</div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title[currentLang]}
                      </h4>
                      <span className="text-xs text-gray-400">{post.views} views</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* カテゴリー */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 border-l-4 border-teal-500 pl-3">{t('blog:categories')}</h3>
                {selectedCategory && (
                  <button onClick={() => setSelectedCategory(null)} className="text-xs text-teal-600 hover:underline">{t('blog:allCategories')}</button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat, index) => (
                  <button 
                    key={index} onClick={() => setSelectedCategory(cat.ja === selectedCategory ? null : cat.ja)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedCategory === cat.ja ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-teal-100 hover:text-teal-700'}`}
                  >
                    {cat[currentLang]}
                  </button>
                ))}
              </div>
            </div>

            {/* お問い合わせバナー */}
            <div className="bg-teal-700 p-6 rounded-lg text-white text-center">
              <h3 className="font-bold text-lg mb-2">{t('common:contact')}</h3>
              <p className="text-sm mb-4 opacity-90">{t('blog:contactDesc')}</p>
              <Link to="/contact" className="inline-block bg-white text-teal-700 px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
                {t('blog:contactBtn')}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        {/* フッター部分は既存のHomeのものを流用 */}
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors z-50">
        <i className="ri-arrow-up-line text-2xl"></i>
      </button>
    </div>
  );
}