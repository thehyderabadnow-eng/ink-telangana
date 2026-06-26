import Link from 'next/link';
import { Search, Clock } from 'lucide-react';
import { getAllArticles } from '@/data';
import { brandClasses } from '@/utils/theme';
import { Article } from '@/types';

export default async function HomePage({ searchParams }: { searchParams: Promise<{ category?: string, search?: string }> }) {
  // 1. Await the search parameters (Next.js 15 requirement)
  const resolvedParams = await searchParams;

  const categoryFilter = resolvedParams.category || 'All';
  const searchQuery = resolvedParams.search?.toLowerCase() || '';

  // 2. Fetch and apply filters to data
  let filteredArticles = getAllArticles();

  if (categoryFilter !== 'All') {
    // FIX: Match category safely using lowercase to prevent spelling/case errors
    filteredArticles = filteredArticles.filter(a => a.category.toLowerCase() === categoryFilter.toLowerCase());
  }

  if (searchQuery) {
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery) ||
      article.category.toLowerCase().includes(searchQuery) ||
      article.excerpt.toLowerCase().includes(searchQuery)
    );
  }

  // అప్‌డేట్ చేయబడిన లాజిక్: ఇక్కడ డైరెక్ట్ గా isLatestStory ని వాడుతున్నాము
  const topStories = filteredArticles.filter(a => a.isTopStory);
  const latestStories = filteredArticles.filter(a => a.isLatestStory);

  // 3. Helper to format the long SEO-friendly URL securely
  const getUrlPath = (article: Article) => {
    // Safely fallback just in case category is missing
    const categoryString = article.category || 'general';
    const categoryPath = categoryString.toLowerCase().replace(/\s+/g, '-');

    // Safely handle slug
    const articleSlug = article.slug || 'story';

    return `/article/${categoryPath}/${articleSlug}/${article.id}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500 space-y-12">

      {/* NO RESULTS VIEW */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No articles found matching your criteria.</p>
        </div>
      )}

      {/* TOP STORIES SECTION */}
      {topStories.length > 0 && !searchQuery && (
        <section>
          <h2 className={`text-2xl font-serif font-bold text-white mb-6 border-l-4 ${brandClasses.borderGold} pl-3`}>
            {categoryFilter === 'All' ? 'Top Stories' : `Top ${categoryFilter} Stories`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topStories.map((article) => (
              <Link key={article.id} href={getUrlPath(article)}>
                <article className="relative rounded-xl overflow-hidden cursor-pointer group h-[30rem] shadow-xl shadow-black/50 bg-slate-900">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] via-[#0B1B35]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end h-full">
                    <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider self-start mb-4`}>
                      {article.categoryName}
                    </span>
                    <h3 className="text-3xl font-bold font-serif text-white leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    {/* <p className="text-gray-300 font-bold mt-3 line-clamp-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-5 font-medium opacity-80 group-hover:opacity-100 transition-opacity [text-shadow:_0_1px_3px_rgb(0_0_0_/_1)]">
                      <Clock className="w-4 h-4 drop-shadow-md" />
                      <span className="font-bold">{article.date}</span>
                    </div> */}
                    <p className="text-gray-200 font-bold mt-3 line-clamp-2 backdrop-blur-md bg-black/30 p-2 rounded-lg">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-200 mt-5 font-medium opacity-80 group-hover:opacity-100 transition-opacity backdrop-blur-md bg-black/30 p-2 rounded-lg w-fit">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* LATEST STORIES SECTION */}
      {latestStories.length > 0 && (
        <section>
          <h2 className={`text-2xl font-serif font-bold text-white mb-6 border-l-4 ${brandClasses.borderGold} pl-3`}>
            {searchQuery ? 'Search Results' : (categoryFilter === 'All' ? 'Latest Stories' : `Latest ${categoryFilter} Stories`)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestStories.map((article) => (
              <Link key={article.id} href={getUrlPath(article)}>
                <article className="relative rounded-xl overflow-hidden cursor-pointer group h-[22rem] shadow-xl shadow-black/50 bg-slate-900">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] via-[#0B1B35]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 p-5 w-full z-10 flex flex-col justify-end h-full">
                    <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider self-start mb-3`}>
                      {article.categoryName || article.category}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300 mt-4 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}