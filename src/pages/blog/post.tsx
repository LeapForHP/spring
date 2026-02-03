import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import { BLOG_POSTS, CATEGORIES, type LangCode } from '../../data/blogPosts';

export default function BlogPostPage() {
  // blog と common の両方の翻訳ファイルを使用
  const { t, i18n } = useTranslation(['blog', 'common']);
  
  // 現在の言語を取得 (ja, en, zh, zh-Tw)
  const currentLang = (i18n.language || 'ja') as LangCode;
  
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  // SNSシェア用のURLとタイトルの生成（現在の言語のタイトルを使用）
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post ? post.title[currentLang] : '');

  // 記事が見つからない場合の表示
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">{t('blog:noResults')}</p>
          <Link to="/blog" className="text-teal-600 underline">
            {t('blog:backToList')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      {/* アイキャッチ画像エリア */}
      <div className="w-full h-64 md:h-96 bg-gray-200 relative">
        <img 
          src={post.image} 
          alt={post.title[currentLang]} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white max-w-7xl mx-auto">
          <span className="inline-block bg-teal-500 text-white text-xs md:text-sm px-3 py-1 rounded mb-4">
            {post.category[currentLang]}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
            {post.title[currentLang]}
          </h1>
          <time className="text-gray-200 text-sm md:text-base">{post.date}</time>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 記事本文メインエリア */}
          <main className="lg:w-2/3 bg-white p-6 md:p-10 rounded-lg shadow-sm">
            <div className="space-y-8">
              {post.sections.map((section, index) => {
                // 見出し表示
                if (section.type === 'heading') {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-teal-700 border-l-4 border-teal-500 pl-4 mt-12 mb-6">
                      {section.text[currentLang]}
                    </h2>
                  );
                }
                // 本文テキスト表示（改行対応）
                if (section.type === 'text') {
                  return (
                    <p key={index} className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                      {section.text[currentLang]}
                    </p>
                  );
                }
                // 画像表示
                if (section.type === 'image') {
                  return (
                    <div key={index} className="my-10">
                      <img src={section.url} alt={section.alt || ''} className="w-full rounded-lg shadow-sm" />
                      {section.alt && <p className="text-center text-sm text-gray-500 mt-3">{section.alt}</p>}
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* SNSシェアボタンエリア */}
            <div className="mt-16 pt-10 border-t border-gray-100">
              <p className="font-bold text-gray-700 mb-8 text-center">
                {t('blog:share')}
              </p>
              <div className="flex justify-center flex-wrap gap-4 md:gap-6">
                {/* X (Twitter) */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="X"
                >
                  <i className="ri-twitter-x-line text-xl"></i>
                </a>

                {/* LinkedIn */}
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#0A66C2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>

                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="Facebook"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>

                {/* LINE */}
                <a 
                  href={`https://social-plugins.line.me/lineit/share?url=${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#06C755] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="LINE"
                >
                  <i className="ri-line-line text-xl"></i>
                </a>
              </div>
            </div>

            {/* 一覧に戻るボタン */}
            <div className="mt-16 flex justify-center">
              <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 border border-teal-600 px-10 py-3 rounded-full hover:bg-teal-50 transition-colors font-bold">
                <i className="ri-arrow-left-line"></i>
                {t('blog:backToList')}
              </Link>
            </div>
          </main>

          {/* サイドバーエリア */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-teal-700 p-8 rounded-lg text-white text-center shadow-lg">
              <h3 className="font-bold text-2xl mb-4">{t('blog:contactTitle')}</h3>
              <p className="text-sm mb-8 leading-relaxed opacity-90">
                {t('blog:contactDesc')}
              </p>
              <Link to="/contact" className="inline-block bg-white text-teal-700 px-10 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md">
                {t('blog:contactBtn')}
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}