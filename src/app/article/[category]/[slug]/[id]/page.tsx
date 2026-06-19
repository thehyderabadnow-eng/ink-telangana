import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { getArticleById } from '@/data';
import ShareButton from '@/components/ShareButton';
import { brandClasses } from '@/utils/theme';

export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string, id: string }> }) {
  const resolvedParams = await params;
  
  const article = getArticleById(parseInt(resolvedParams.id));

  // --- DEBUGGING CHECKS ---
  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Error: Article Not Found</h1>
        <p className="text-gray-400 mb-8">We could not find an article with ID: {resolvedParams.id}</p>
        <Link href="/" className="text-[#D4AF37] hover:underline">&larr; Return to Home</Link>
      </div>
    );
  }

  const expectedCategory = article.category.toLowerCase().replace(/\s+/g, '-');
  if (expectedCategory !== resolvedParams.category.toLowerCase() || article.slug !== resolvedParams.slug) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Error: URL Mismatch</h1>
        <p className="text-gray-400 mb-2">Expected URL: /article/{expectedCategory}/{article.slug}/{article.id}</p>
        <p className="text-gray-400 mb-8">Current URL: /article/{resolvedParams.category}/{resolvedParams.slug}/{resolvedParams.id}</p>
        <Link href="/" className="text-[#D4AF37] hover:underline">&larr; Return to Home</Link>
      </div>
    );
  }
  // ------------------------

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-900 animate-in fade-in duration-500 mt-4 mb-10">
        <div className="p-6 md:p-10 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            </Link>
            
            <ShareButton title={article.title} excerpt={article.excerpt} />
          </div>

          <div className="mb-4">
            <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wide inline-block mb-5`}>
              {article.category}
            </span>
            <h1 className={`text-3xl md:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-72 md:h-[28rem]">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 md:p-10">
          <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
            <p className="text-xl text-gray-600 font-medium italic mb-10 border-l-4 border-[#D4AF37] pl-5">
              {article.excerpt}
            </p>
            {article.content}
          </div>
        </div>
      </article>
    </div>
  );
}