import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArrowLeft, Clock } from 'lucide-react';
import { getArticleById } from '../../../../../data';
import ShareButton from '../../../../../components/ShareButton';
import { brandClasses } from '../../../../../utils/theme';

// Import your custom hardcoded articles here
import FreeLaptopArticle from '../../../../../components/custom-articles/FreeLaptopArticle';

type Props = {
  params: Promise<{ category: string, slug: string, id: string }>
};

// --- WHATSAPP & SOCIAL MEDIA PREVIEW GENERATOR ---
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const { id, category, slug } = resolvedParams;
  const baseUrl = 'https://www.inktelangana.com';

  // 1. Custom Article Metadata (Free Laptop)
  if (id === "10000101") {
    return {
      title: "విద్యార్థులకు ఉచిత లాప్ టాప్.. | Ink Telangana",
      description: "ఏ.ఐ. (Artificial Intelligence) తో పోటీ పడే యువతకు ఇది గొప్ప అవకాశం.",
      openGraph: {
        title: "విద్యార్థులకు ఉచిత లాప్ టాప్..",
        description: "ఏ.ఐ. (Artificial Intelligence) తో పోటీ పడే యువతకు ఇది గొప్ప అవకాశం.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEikZpsz3ENxId42k9J5k_Nmq_yvKiiGBYb8Rh1k69O9BBDgB-P516Ew8DE9e0lmoqdzWgjXAXbt_rB_RnsdOOYLUQ_Z7UdIT0SbKSCJ9J8rR-6J02Q27HWFLHLYUAu4N7nqdDb4FsGbE67MM8lhTcT56ys9y0JRNsmaLt5J5gaG0jLAVCOmZR8iacuatmAP',
            width: 1200,
            height: 630,
            alt: 'Free Laptop to Telangana Students',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  // 2. Dynamic Articles Metadata
  const article = getArticleById(parseInt(id));

  if (!article) {
    return { title: 'Article Not Found | Ink Telangana' };
  }

  // Ensure image URL is absolute for WhatsApp
  const absoluteImageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${baseUrl}${article.imageUrl.startsWith('/') ? '' : '/'}${article.imageUrl}`;

  return {
    title: `${article.title} | Ink Telangana`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/article/${category}/${slug}/${id}`,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'te_IN',
      type: 'article',
    },
  };
}

// --- MAIN PAGE COMPONENT ---
export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const { id, category, slug } = resolvedParams;

  // --- 1. CUSTOM ARTICLE REGISTER ---
  // Map your custom article IDs to their respective custom page components.
  // This completely eliminates the need to create folders!
  if (id === "10000101") {
    return <FreeLaptopArticle />;
  }

  // --- 2. COMMON DYNAMIC FALLBACK ---
  // If the article isn't a custom component, fall back to the normal dynamic behavior.
  const article = getArticleById(parseInt(id));

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Error: Article Not Found</h1>
        <p className="text-gray-400 mb-8">We could not find an article with ID: {id}</p>
        <a href="/" className="text-[#D4AF37] hover:underline">&larr; Return to Home</a>
      </div>
    );
  }

  const expectedCategory = article.category.toLowerCase().replace(/\s+/g, '-');
  if (expectedCategory !== category.toLowerCase() || article.slug !== slug) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Error: URL Mismatch</h1>
        <p className="text-gray-400 mb-2">Expected URL: /article/{expectedCategory}/{article.slug}/{article.id}</p>
        <p className="text-gray-400 mb-8">Current URL: /article/{category}/{slug}/{id}</p>
        <a href="/" className="text-[#D4AF37] hover:underline">&larr; Return to Home</a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-900 animate-in fade-in duration-500 mt-4 mb-10">
        <div className="p-6 md:p-10 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            </a>
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

        <div
          className="p-6 md:p-10 select-none"
          onCopy={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
            <p className="text-xl text-gray-600 font-medium italic mb-10 border-l-4 border-[#D4AF37] pl-5">
              {article.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </article>
    </div>
  );
}