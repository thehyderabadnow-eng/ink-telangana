import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArrowLeft, Clock, MessageCircle, PenTool, Share2 } from 'lucide-react';
import { getArticleById } from '../../../../../data';
import ShareButton from '../../../../../components/ShareButton';
import { brandClasses } from '../../../../../utils/theme';
import BigShareButton from '@/components/BigShareButton'; // మీ పాత్ కి తగ్గట్టు మార్చుకోండి

// Import your custom hardcoded articles here
import FreeLaptopArticle from '../../../../../components/custom-articles/FreeLaptopArticle';
import FootOverBridgeArticle from '@/components/custom-articles/FootOverBridgeArticle';
import SIRArticle from '@/components/custom-articles/SIRArticle';
import ReadOnlyWrapper from '@/components/custom-articles/ReadOnlyWrapper';
import GurukulArticle from '@/components/custom-articles/GurukulArticle';
import ZPTCtoCMArticle from '@/components/custom-articles/ZPTCtoCMArticle';
import SmaHealthArticle from '@/components/custom-articles/SmaHealthArticle';
import AllPartyKaryakartaArticle from '@/components/custom-articles/AllPartyKaryakartaArticle';
import ReservationSeriesIntro from '@/components/custom-articles/ReservationSeriesIntro';

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
      title: "విద్యార్థులకు ఉచిత ల్యాప్‌టాప్.. | Ink Telangana",
      description: "Engineering, Pharmacy, MBA, MCA, Degree చదివే విద్యార్థులు ల్యాప్‌టాప్ లేక తీవ్ర ఇబ్బందులు పడుతున్న ఈ నేపథ్యంలో..",
      openGraph: {
        title: "విద్యార్థులకు ఉచిత ల్యాప్‌టాప్..",
        description: "Engineering, Pharmacy, MBA, MCA, Degree చదివే విద్యార్థులు ల్యాప్‌టాప్ లేక తీవ్ర ఇబ్బందులు పడుతున్న ఈ నేపథ్యంలో..",
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

  if (id === "10000201") {
    return {
      title: "హైదరాబాద్‌లో ఫుట్ ఓవర్ బ్రిడ్జిలు: ప్రజల భద్రత కోసం నిర్మిస్తున్నారా? లేక శిక్షించడానికా? | Ink Telangana",
      description: "నగరంలో కోట్లు ఖర్చుపెట్టి నిర్మిస్తున్న ఫుట్ ఓవర్ బ్రిడ్జిలను వృద్ధులు, గర్భిణీలు, దివ్యాంగులు ఎందుకు వాడుకోలేకపోతున్నారు?",
      openGraph: {
        title: "హైదరాబాద్‌లో ఫుట్ ఓవర్ బ్రిడ్జిలు...",
        description: "నగరంలో కోట్లు ఖర్చుపెట్టి నిర్మిస్తున్న ఫుట్ ఓవర్ బ్రిడ్జిలను వృద్ధులు, గర్భిణీలు, దివ్యాంగులు ఎందుకు వాడుకోలేకపోతున్నారు?",
        url: `https://www.inktelangana.com/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbjyw6Zs-JusYBOHgCy3MSDOpSPIR52Gb_ng5iZOHRRQlCDGRBI9zVfHWqKrawAMy8ZYdin2tfQ3QhzP4wGJODTmqNYdm8WcZTVjqCAL79zFNVfmmZb8jd1FioQrL9vyBNDrdgkRiYkQF3EkPwmX-bYqoK_YtleuESguNj1gwyjr7KdGkhakYJWKih-SXN/s320/hyderabad-footover-bridges-02.jpg',
            width: 1200,
            height: 630,
            alt: 'Foot Over Bridges in Hyderabad',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  if (id === "10000301") {
    return {
      title: "స్పెషల్ ఇంటెన్సివ్ రివిజన్ (S.I.R - 2026): ఓటరు జాబితా ప్రక్షాళన | Ink Telangana",
      description: "తెలంగాణలో 22 ఏళ్ల తర్వాత జరుగుతున్న ఇంటింటి సర్వే. మీ ఓటును కాపాడుకునేందుకు ఫారాలు, యాప్స్, ఆన్‌లైన్ విధానం గురించి పూర్తి వివరాలు.",
      openGraph: {
        title: "స్పెషల్ ఇంటెన్సివ్ రివిజన్ (S.I.R - 2026)...",
        description: "తెలంగాణలో 22 ఏళ్ల తర్వాత జరుగుతున్న ఇంటింటి సర్వే. మీ ఓటును కాపాడుకునేందుకు ఫారాలు, యాప్స్, ఆన్‌లైన్ విధానం గురించి పూర్తి వివరాలు.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'httpshttps://blogger.googleusercontent.com/img/a/AVvXsEiE-gEobpP9eWZSj0g8FzKCIJmPQECrRjhQXVR1x-5lOi6nnlw3yO3uJYna1yzErbFAU6NKNwPzfwvoxoFJnGDJSQ3r7xozWcagNzvaP86MRR3nD1d3ELoLA95045CyQgJ7B8Ap96c0L0QAJ4MFBfb57U-MnNjVfHkkOaToxYn_AM5ARa579UZcH9smlR3_',
            width: 1200,
            height: 630,
            alt: 'Elections in Telangana',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  if (id === "10000302") {
    return {
      title: "బడుగు, బలహీన వర్గాల అభ్యున్నతికి విద్యే ఆయుధం - తెలంగాణలో గురుకులాల విప్లవం | Ink Telangana",
      description: "ఒకప్పుడు వివక్షకు గురైన వర్గాలకు నేడు గురుకులాలు ఎలా ఆత్మగౌరవాన్ని పంచుతున్నాయి? అడ్మిషన్లు, వసతులు, మరియు చట్టాల గురించి పూర్తి వివరాలు.",
      openGraph: {
        title: "వర్గాల వారిగా స్కూళ్లు, కాలేజీలకు.. ఆనాటి వివక్షే కారణం.",
        description: "ఒకప్పుడు వివక్షకు గురైన వర్గాలకు, ఆత్మగౌరవంతో కూడిన విద్యను అందించింది.. ఆనాటి 'గురు కులాలే'.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgVU18iIVzPoCKT69tyg0RJJ4Q0pooeHahvUmCkl7B2If6_fPUSu_3Y7NiU5JYdOYkDdVs8BXwjw52E1ghyFWW0nUbU-rUNPklBY3a5gOfzPihqykqIkzHcDlRd4XhjO3R4Vjnv26E-DPAcc1FO6gqZqC3sITNSoR7FHBbSGnHwm5B-OzUQMzbph8czfr_u',
            width: 1200,
            height: 630,
            alt: 'Gurukul Schools in Telangana',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  if (id === "10000303") {
    return {
      title: "ZPTC to CM: తెలంగాణ ఫైర్ బ్రాండ్ సీఎం రేవంత్ రెడ్డి 20 ఏళ్ల రాజకీయ ప్రస్థానం | Ink Telangana",
      description: "మిడ్జిల్ లో ఒక సాధారణ జడ్పీటీసీగా మొదలై.. తెలంగాణ ముఖ్యమంత్రి స్థాయికి ఎదిగిన సీఎం రేవంత్ రెడ్డి గారి 20 ఏళ్ల స్ఫూర్తిదాయక ప్రస్థానం.",
      openGraph: {
        title: "ZPTC to CM: తెలంగాణ ఫైర్ బ్రాండ్ రేవంత్ రెడ్డి ఇరవయ్యేళ్ళ రాజకీయ ప్రస్థానం.",
        description: "పార్టీ సిద్ధాంతాలు ఏవైనా, తాను నమ్మిన సిద్ధాంతాలను, ఆశయాలను ఎన్నడూ వదులుకోలేదు. జెండా ఏదైనా, ప్రజల కోసం తన ఎజెండానే అమలు చేశాడు. కొండారెడ్డిపల్లి గ్రామం నుండి ఒంటరిగా ప్రయాణాన్ని ప్రారంభించి.. తెలంగాణ రాష్ట్రంలో తిరుగులేని రాజకీయ శక్తిగా ఎదిగి, కోట్ల మంది ప్రజల అభిమానాన్ని సొంతం చేసుకున్నాడు సీఎం రేవంత్ రెడ్డి.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiYKS-xZ3HDxFjuSUSwlHsQnx6zA-Uzs4yzVpmd6Ksbh0o3eEcNn9mWZPeiFgaaywR9RE9uiXniI9-UxuJGE1rwMk02eViX7NK6EnUeEic0Rm07xjQQnVzrgCBg4-oY2eh5gQMtlzYEelfCSoF2UCnS44ljbACAUnIAIlJvIPhmgscbZCI0YgqQs5nhqDME',
            width: 1200,
            height: 630,
            alt: 'CM Revanth Reddy 20 Years Journey',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }
if (id === "10000304") {
    return {
      title: "ఇంక్ స్పెషల్ సిరీస్: 'కోటా కథనం'.. భారతీయ రిజర్వేషన్ల పై సమగ్ర మథనం!",
      description: "రిజర్వేషన్ల పుట్టుపూర్వోత్తరాలు, సాంకేతిక నిబంధనలు, తెలంగాణ జోనల్ వ్యవస్థ మరియు నేటి సామాజిక వాస్తవాలపై ఒక నిఖార్సయిన పరిశోధనాత్మక వెబ్ సిరీస్.",
      openGraph: {
        title: "ఇంక్ స్పెషల్ సిరీస్: 'కోటా కథనం'.. రిజర్వేషన్ల పై సమగ్ర మథనం!",
        description: "రిజర్వేషన్ల పుట్టుపూర్వోత్తరాలు, సాంకేతిక నిబంధనలు, తెలంగాణ జోనల్ వ్యవస్థలపై వంశీ బీటెక్ ప్రత్యేక వెబ్ సిరీస్ రోడ్‌మ్యాప్.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop', 
            width: 1200,
            height: 630,
            alt: 'The Quota Chronicles Ink Special',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  if (id === "10000401") {
    return {
      title: "ఈ వ్యాధికి మన దేశంలో మెడిసిన్ లేదు. ఇంజక్షన్ ఖరీదు 17 కోట్లు. | Ink Telangana",
      description: "SMA: ప్రపంచంలోనే అత్యంత ఖరీదైన ఇంజెక్షన్ - Zolgensma. భారతదేశంలో ప్రతి సంవత్సరం దాదాపు 2,500 నుండి 3,000 మంది పిల్లలు SMA వ్యాధితో జన్మిస్తున్నారు.",
      openGraph: {
        title: "ఈ వ్యాధికి మన దేశంలో మెడిసిన్ లేదు. ఇంజక్షన్ ఖరీదు 17 కోట్లు.",
        description: "SMA: ప్రపంచంలోనే అత్యంత ఖరీదైన ఇంజెక్షన్ - Zolgensma. భారతదేశంలో ప్రతి సంవత్సరం దాదాపు 2,500 నుండి 3,000 మంది పిల్లలు SMA వ్యాధితో జన్మిస్తున్నారు.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEio5a49bVn_c-Lpp7I_VSjne1UyR16Kn6ikWhabCQwqvFbebvbjcQErgG7QyuXuPul1bosgjW5jEnV0NSeIYhsoQ8oOzyLuANKmSh8gZQ3iBfo3AZBki6uFjd6tNMvXfPN8FEL-n3dwXpytOrMT0LpAQcMXx8wrUQehYq_KLcmXyIU_LcYUiInlIriaJB-0',
            width: 1200,
            height: 630,
            alt: 'SMA Type 1 Medicine - Zolgensma',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }

  if (id === "10000501") {
    return {
      title: "ఓ కార్యకర్తా నీకు గుర్తింపేది? | Ink Telangana",
      description: "పార్టీలు మారని కార్యకర్తలకు విలువ లేదు. నాయకులు మారిల్లు, నాయకులతో పాటు పార్టీల మనస్తత్వం కూడా మారింది. ప్రతి రాజకీయ కార్యకర్త ఖచ్చితంగా చదవాల్సిన కథ ఇది.",
      openGraph: {
        title: "ఓ కార్యకర్తా నీకు గుర్తింపేది? పార్టీ జెండా మోసి అలసిన బతుకుల ఆవేదన!",
        description: "పార్టీలు మారని కార్యకర్తలకు విలువ లేదు. నాయకులు మారిల్లు, నాయకులతో పాటు పార్టీల మనస్తత్వం కూడా మారింది. ప్రతి రాజకీయ కార్యకర్త ఖచ్చితంగా చదవాల్సిన కథ ఇది.",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiwGBKeZYY44-cbf8qbLqqNHP2ISsEIVZdoeVLpQrAo2Q9qJAfmeXEDdf-3AH8EJe3FQEAI0efamnhjegY7yAIXrpXG9C_oh9N_uTn7oG6-8tzBE75qcVsUwZ8g9gqkoyo8hSyyWG6i6qPbdrxNd6RmxxfmGk4DAr-ZTcOQoCIWhkkiOPLtPeeDOSiLG2xe',
            width: 1200,
            height: 630,
            alt: 'Political Party Workers Reality',
          },
        ],
        locale: 'te_IN',
        type: 'article',
      },
    };
  }
  if (id === "10000502") {
    return {
      title: "కాళేశ్వరం ప్రాజెక్టు చుట్టూ రాజకీయం: బిఆర్ఎస్ vs కాంగ్రెస్, అసలు ఏం జరగబోతోంది? | Ink Telangana",
      description: "కాళేశ్వరం మోటర్లు ఆన్ చేయకపోవడంపై బిఆర్ఎస్ తీవ్ర విమర్శలు గుప్పిస్తుండగా, ఎన్‌డీఎస్ఏ రిపోర్టుతో కాంగ్రెస్ ఎదురుదాడి చేస్తోంది!",
      openGraph: {
        title: "కాళేశ్వరం ప్రాజెక్టు చుట్టూ రాజకీయం: బిఆర్ఎస్ vs కాంగ్రెస్, అసలు ఏం జరగబోతోంది?",
        description: "కాళేశ్వరం మోటర్లు ఆన్ చేయకపోవడంపై బిఆర్ఎస్ తీవ్ర విమర్శలు గుప్పిస్తుండగా, ఎన్‌డీఎస్ఏ రిపోర్టుతో కాంగ్రెస్ ఎదురుదాడి చేస్తోంది!",
        url: `${baseUrl}/article/${category}/${slug}/${id}`,
        images: [
          {
            url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiG9X9gOjSDJCuiJLw_1ZkYLE8Z0eilre1u0xvanB2SQGeR9ijbA3JfYyyRep8wMiBKDzTXKGGO7q7uDjbU65vPaBcbJRKEWAif8WJfNt-cNAhriRahZQr9lI2qEGgstBdZBT5FP5Y898FH6EBxRdU4KbMIw_APGXkYQYAH2genjd1F3_ao0pgTlQWsQWxs',
            width: 1200,
            height: 630,
            alt: 'Kaleshwaram Politics BRS vs Congress-2026',
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
  if (id === "10000101") {
    return <FreeLaptopArticle />;
  }
  if (id === "10000302") {
    return <GurukulArticle />;
  }
  if (id === "10000201") {
    return <FootOverBridgeArticle />;
  }
  if (id === "10000301") {
    return <SIRArticle />;
  }
  if (id === "10000303") {
    return <ZPTCtoCMArticle />;
  }
  if (id === "10000304") {
    return <ReservationSeriesIntro />;
  }
  if (id === "10000401") {
    return <SmaHealthArticle />;
  }
  if (id === "10000501") {
    return <AllPartyKaryakartaArticle />;
  }

  // --- 2. COMMON DYNAMIC FALLBACK ---
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
              {article.categoryName}
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

        <ReadOnlyWrapper className="p-6 md:p-10">
          <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
            <p className="text-xl text-gray-600 font-medium italic mb-10 border-l-4 border-[#D4AF37] pl-5">
              {article.excerpt}
            </p>

            {/* Main Article Content */}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* 1. Author Section */}
            <div className="mt-12 flex justify-end border-t border-gray-100 pt-8 not-prose">
              <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                  <PenTool className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-left">
                  <p className={`font-bold ${brandClasses.textNavy} text-base md:text-lg`}>Vamshi BTech</p>
                </div>
              </div>
            </div>

            {/* 2. Share CTA Section */}
            <div className={`mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden not-prose`}>
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                  ఈ వార్తను మీ మిత్రులతో పంచుకోండి!
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg max-w-2xl">
                  ఇలాంటి మరిన్ని వార్తలు, రాజకీయ విశ్లేషణల కోసం ఇన్క్ తెలంగాణను ఫాలో అవ్వండి. ఈ ఆర్టికల్‌ని సోషల్ మీడియాలో షేర్ చేసి మాకు మద్దతు తెలపండి.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <BigShareButton title={article.title} excerpt={article.excerpt} />
                </div>
              </div>
            </div>

          </div>
        </ReadOnlyWrapper>
      </article>
    </div>
  );
}