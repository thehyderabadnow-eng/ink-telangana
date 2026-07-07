"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Clock, MessageCircle, Share2, PenTool, 
  Heart, AlertCircle, Activity, Info, Building, 
  HelpCircle, ShieldCheck, DollarSign, Award, Users, CheckCircle
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper'; 

export default function SmaHealthArticle() {
  const [showShareToast, setShowShareToast] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const brandClasses = {
    bgNavy: "bg-[#0B1B35]",
    textNavy: "text-[#0B1B35]",
    bgGold: "bg-[#D4AF37]",
    textGold: "text-[#D4AF37]",
  };

  const articleDetails = {
    title: "ఈ వ్యాధికి ఇండియాలో మందు లేదు. ఇంజక్షన్ ఖరీదు 17 కోట్లు.",
    excerpt: "అనంతపురం జిల్లా, తాడిపత్రి నియోజకవర్గానికి చెందిన రెండు నెలల పసిబాబు నవీన్ కుమార్ రెడ్డి ప్రాణాంతకమైన 'SMA Type 1' వ్యాధితో పోరాడుతున్నాడు. ప్రపంచంలోనే అత్యంత ఖరీదైన ₹17 కోట్ల ఇంజెక్షన్ కోసం దాతల సాయం కొరకు నిరీక్షణ.",
    url: currentUrl || 'https://inktelangana.com'
  };

  const handleShare = async () => {
    const shareData = {
      title: articleDetails.title,
      text: articleDetails.excerpt,
      url: articleDetails.url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`${articleDetails.title}\n\n${shareData.url}`);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-4">
          
          {/* Header Section */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors group font-semibold">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </Link>
              <button
                onClick={handleShare}
                className={`flex items-center gap-2 text-sm font-bold bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all shadow-md`}
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="mb-4">
              <span className={`bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5`}>
                INK HEALTH
              </span>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                {articleDetails.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>
                    July 7, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-72 md:h-[28rem] relative bg-gray-200">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEio5a49bVn_c-Lpp7I_VSjne1UyR16Kn6ikWhabCQwqvFbebvbjcQErgG7QyuXuPul1bosgjW5jEnV0NSeIYhsoQ8oOzyLuANKmSh8gZQ3iBfo3AZBki6uFjd6tNMvXfPN8FEL-n3dwXpytOrMT0LpAQcMXx8wrUQehYq_KLcmXyIU_LcYUiInlIriaJB-0"
              alt="Medical Care for Newborns"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Section (Read Only) */}
          <ReadOnlyWrapper className="p-5 md:p-10">
            <div className="text-base md:text-lg text-gray-800 leading-loose">

              {/* First Paragraph referencing Baby Naveen */}
              <p className="mb-6 font-medium text-gray-800">
                అనంతపురం జిల్లా, తాడిపత్రి నియోజకవర్గానికి చెందిన నవీన్ రెడ్డి దంపతులకు జన్మించిన రెండు నెలల పసిబాబు శ్యామ్ పరిస్థితి ఆందోళన కలిగిస్తోంది. ప్రాణాంతకమైన 'స్పైనల్ మస్కులర్ అట్రోఫీ (SMA) టైప్ 1' వ్యాధి ఉన్నట్లు నిర్ధారణ అయింది. ఈ వ్యాధి కారణంగా బాబు కండరాలు రోజురోజుకూ క్షీణిస్తూ, శ్వాస వ్యవస్థ దెబ్బతినే ప్రమాదం పొంచి ఉంది. ఈ పసిప్రాణాన్ని కాపాడుకోవడానికి ప్రపంచంలోనే అత్యంత ఖరీదైన ₹17 కోట్ల విలువైన 'జోల్జెన్స్మా (Zolgensma)' ఇంజెక్షన్ త్వరగా ఏర్పాటు చేయాల్సిన అవసరం ఉంది.. ఇందుకోసం బాబు తల్లిదండ్రులు మిలాప్ (Milaap) క్రౌడ్ ఫండింగ్ ప్లాట్‌ఫామ్ ద్వారా నిధుల సేకరణను ప్రారంభించి, దాతల తక్షణ సహాయం కోసం ఎదురుచూస్తున్నారు.
              </p>

              {/* Embedded Video / iFrame after first paragraph */}
              <div className="my-8 w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/c3i2de53r2g?si=7t-Unbtbyj-9iqZK" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Patient & Donation Details Card */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200 p-6 rounded-2xl mb-10 shadow-sm">
                <h4 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2 border-b border-teal-200 pb-2">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" /> 
                  సహాయం చేయండి (Patient & Donation Details) #SaveShyam
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                  <div className="space-y-2 text-gray-800">
                    <p><strong>Name:</strong> Naveen Kumar Reddy.R</p>
                    <p><strong>Bank Name:</strong> SBI Bank</p>
                    <p><strong>A/C Number:</strong> 30830783425</p>
                    <p><strong>IFSC Code:</strong> SBIN0011125</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-teal-100 flex flex-col justify-center">
                    <p className="text-gray-700 italic font-medium mb-3">
                      "A newborn in Hyderabad needs ₹17 crore to fight SMA Type 1. Help child of Naveen Kumar Reddy access Zolgensma. Donate on Milaap."
                    </p>
                    <a 
                      href="https://milaap.org/fundraisers/support-child-of-naveen-kumar-reddy?utm_source=whatsapp&utm_medium=fundraisers-title&mlp_referrer_id=11843673" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center bg-teal-600 text-white font-bold py-2.5 px-4 rounded-xl underline hover:bg-teal-700 transition-colors text-center text-sm md:text-base"
                    >
                      Milaap ఫండ్ రైజర్ ద్వారా దానం చేయండి
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-xs md:text-sm text-gray-600 text-center font-medium">
                  Please donate or share this fundraiser on Milaap to help the child of Naveen Kumar Reddy get a chance at life. Every contribution matters.
                </p>
              </div>

              {/* Section 1: What is SMA */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Info className="w-6 h-6 text-teal-600" />
                స్పైనల్ మస్కులర్ అట్రోఫీ (SMA) టైప్ 1 అంటే ఏమిటి? ఇది ఎలా వస్తుంది?
              </h3>
              
              <ul className="space-y-4 mb-10 text-gray-700">
                <li>
                  <strong>ఎందుకు వస్తుంది:</strong> ఇది ఒక ప్రమాదకరమైన జన్యుపరమైన (Genetic) వ్యాధి. మన శరీరంలో కండరాలు సరిగ్గా పనిచేయడానికి మరియు కదలడానికి SMN1 అనే జన్యువు (Gene) చాలా కీలకం. ఇది కండరాల రక్షణకు అవసరమైన ఒక రకమైన ప్రోటీన్‌ను తయారు చేస్తుంది. ఈ జన్యువు లోపించడం (Deletion) లేదా పాడైపోవడం (Mutation) వల్ల ఈ వ్యాధి సంభవిస్తుంది.
                </li>
                <li>
                  <strong>ఎలా సంక్రమిస్తుంది:</strong> తల్లి మరియు తండ్రి ఇద్దరిలోనూ ఈ లోపభూయిష్ట జన్యువు ఉండి, అది పుట్టబోయే బిడ్డకు సంక్రమించినప్పుడు మాత్రమే ఈ వ్యాధి వస్తుంది. దీనిని వైద్య పరిభాషలో ఆటోసోమల్ రిసెసివ్ (Autosomal Recessive) అని పిలుస్తారు.
                </li>
              </ul>

              {/* Section 2: Symptoms */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Activity className="w-6 h-6 text-red-500" />
                వ్యాధి లక్షణాలు మరియు అందుబాటులో ఉన్న మందులు
              </h3>
              <p className="mb-4 font-bold text-teal-800">ప్రధాన లక్షణాలు (Symptoms):</p>
              <p className="mb-4">సాధారణంగా బిడ్డ పుట్టిన 6 నెలల లోపే ఈ క్రింది లక్షణాలు బయటపడతాయి:</p>
              
              <ul className="list-disc ml-6 space-y-2 mb-10 text-gray-700">
                <li>పాప లేదా బాబు కనీసం తల నిలపలేకపోవడం.</li>
                <li>కూర్చోలేకపోవడం, కాళ్ళు చేతులు పూర్తిగా మెత్తగా అయిపోయి కదపలేకపోవడం.</li>
                <li>పాలు మింగడానికి, శ్వాస తీసుకోవడానికి చాలా ఇబ్బంది పడటం.</li>
              </ul>

              {/* Section 3: Zolgensma */}
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-10">
                <h4 className="font-bold text-indigo-900 mb-3 text-lg border-b border-gray-100 pb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  జీన్ థెరపీ - జోల్జెన్స్మా (Zolgensma)
                </h4>
                <p className="mb-4">
                  దీనికి ప్రపంచంలోనే అత్యంత ప్రభావవంతమైన మందు Zolgensma (Onasemnogene Abeparvovec). ఇది శరీరంలో లోపించిన జన్యువును పూర్తిగా భర్తీ చేసే విప్లవాత్మక "జీన్ థెరపీ" (Gene Therapy).
                </p>
                <p className="mb-4">
                  <strong>వయస్సు పరిమితి:</strong> ఈ ఇంజెక్షన్‌ను బిడ్డకు 2 సంవత్సరాల వయస్సు వచ్చే లోపే ఇవ్వాలి. ఎంత త్వరగా ఇస్తే అంత అద్భుతమైన ఫలితాలు ఉంటాయి. అప్పటికే దెబ్బతిన్న కండరాల కణాలు పూర్తిగా పూర్వస్థితికి రాకపోవచ్చు, కానీ వ్యాధి మరింత పెరగకుండా అక్కడితో ఆగిపోతుంది.
                </p>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 space-y-2 text-sm text-gray-700">
                  <p><strong>తయారీ కంపెనీ మరియు దేశం వివరాలు:</strong> ఈ మందు ప్రాథమికంగా అమెరికా (USA) మరియు యూరప్ దేశాలలో తయారవుతుంది. దీనిని తయారుచేసేది స్విట్జర్లాండ్‌కు చెందిన ప్రపంచ ప్రసిద్ధ ఫార్మాస్యూటికల్ కంపెనీ Novartis (నోవార్టిస్). దీని U.S. విభాగమైన AveXis ఈ మందును అభివృద్ధి చేసింది.</p>
                  <p><strong>పరిశోధన చేసిన వారు:</strong> ఫ్రెంచ్ పరిశోధనా సంస్థ Genethon మరియు అమెరికాకు చెందిన ప్రముఖ సైంటిస్ట్ డాక్టర్ బ్రయాన్ కాస్పర్ (Dr. Brian Kaspar) బృందం ఈ పరిశోధన వెనుక ఉన్నారు. ఆ తర్వాత AveXis క్లినికల్ ట్రయల్స్ పూర్తి చేయగా, నోవార్టిస్ కంపెనీ దీనిని కొనుగోలు చేసి మార్కెట్లోకి తెచ్చింది.</p>
                </div>
              </div>

              {/* Section 4: Cost Table */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <DollarSign className="w-6 h-6 text-emerald-600" />
                ఖర్చు, పన్నులు మరియు దిగుమతి వివరాలు
              </h3>
              <p className="mb-6">
                ప్రస్తుతం భారతదేశంలో దీనికి సంపూర్ణ అనుమతి ఉన్నప్పటికీ, ఈ మందు ఇక్కడ అందుబాటులో ఉండదు. పేషెంట్ అవసరాన్ని బట్టి ప్రత్యేక అనుమతులతో విదేశాల నుండి దిగుమతి (Import) చేసుకోవాల్సి ఉంటుంది.
              </p>

              <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800 text-sm md:text-base border-b border-gray-200">
                      <th className="p-4 font-bold">వివరాలు</th>
                      <th className="p-4 font-bold">అంచనా వ్యయం</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base text-gray-700 divide-y浏览 divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold bg-gray-50/50">Zolgensma బేసిక్ ధర (ఒక డోస్)</td>
                      <td className="p-4 text-red-600 font-bold">₹16 కోట్ల నుండి ₹18 కోట్ల వరకు</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-gray-50/50">సాధారణ పన్నులు (Core Customs, GST, etc.)</td>
                      <td className="text-gray-800 p-4">10% ఇంపోర్ట్ డ్యూటీ + 12% GST (దాదాపు ₹3.5 నుండి ₹4 కోట్లు)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-gray-50/50">పన్ను మినహాయింపు (Tax Waiver)</td>
                      <td className="text-green-700 p-4 font-medium">బాధితుల కోసం కేంద్ర ఆర్థిక మంత్రిత్వ శాఖకు దరఖాస్తు చేసుకుంటే ఈ పన్నులను పూర్తిగా మినహాయిస్తారు.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 5: Alternatives */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Info className="w-6 h-6 text-indigo-600" />
                ప్రత్యామ్నాయ మందులు మరియు ఇతర ఖర్చులు
              </h3>
              <p className="mb-4">Zolgensma కాకుండా మార్కెట్లో ఇతర మందులు కూడా ఉన్నాయి, కానీ వీటిని జీవితాంతం వాడాల్సి ఉంటుంది:</p>
              
              <div className="space-y-4 mb-10 text-sm md:text-base">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-bold text-gray-900 mb-1">1. Evrysdi (Risdiplam):</p>
                  <p className="text-gray-700">ఇది నోటి ద్వారా వేసుకునే సిరప్ (Oral Liquid). రోచే ఇండియా (Roche India) ద్వారా ఇది భారత్‌లో నేరుగా దొరుకుతుంది. దీనికి సంవత్సరానికి దాదాపు ₹20 లక్షల నుండి ₹70 లక్షల వరకు (పాప బరువును బట్టి) జీవితాంతం ప్రతిరోజూ ఖర్చు అవుతుంది.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-bold text-gray-900 mb-1">2. Spinraza (Nusinersen):</p>
                  <p className="text-gray-700">దీనిని వెన్నుపూసలోకి ఇంజెక్షన్ ద్వారా ఇస్తారు. దీనికి మొదటి సంవత్సరం ₹4 కోట్లు, ఆ తర్వాత ప్రతి ఏటా సుమారు 2 కోట్ల వరకు ఖర్చు అవుతుంది. ఇది కూడా విదేశాల నుండి దిగుమతి చేసుకోవాల్సిందే.</p>
                </div>
              </div>

              {/* Supportive Care */}
              <div className="bg-amber-50/50 border border-amber-200 p-5 rounded-xl mb-10">
                <p className="font-bold text-amber-900 mb-2">అనుబంధ సంరక్షణ ఖర్చులు (Supportive Care):</p>
                <p className="text-sm md:text-base text-gray-700 mb-2">మందులతో పాటు రోజువారీగా ఈ క్రింది వైద్య పరికరాల ఖర్చులు ఉంటాయి:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-gray-700">
                  <li>శ్వాస సపోర్ట్ కోసం BiPAP / Ventilator మిషన్లు (₹1 lakh నుండి ₹3 లక్షలు).</li>
                  <li>కఫం క్లియర్ చేయడానికి Cough Assist మిషన్లు.</li>
                  <li>రోజువారీ ఫిజియోథెరపీ మరియు ప్రత్యేక న్యూట్రిషన్ ఫుడ్ కోసం నెలకు ₹15,000 నుండి ₹30,000 వరకు ఖర్చు అవుతుంది.</li>
                </ul>
              </div>

              {/* Section 6: Schemes & NGOs */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Building className="w-6 h-6 text-teal-600" />
                రోగులకు సహాయం చేసే సంస్థలు మరియు ప్రభుత్వ పథకాలు
              </h3>
              <p className="mb-4">ఇంత పెద్ద మొత్తాన్ని సామాన్యులు భరించడం అసాధ్యం కాబట్టి కింద పేర్కొన్న వివిధ ప్రత్యామ్నాయ మార్గాల ద్వారా సహాయం పొందవచ్చు:</p>

              <div className="space-y-4 mb-10 text-sm md:text-base text-gray-700">
                <p><strong>➔ క్రౌడ్ ఫండింగ్ ప్లాట్‌ఫామ్స్:</strong> భారతదేశంలో చాలా మంది పిల్లలకు ImpactGuru, Ketto, Milaap వంటి వెబ్‌సైట్ల ద్వారా ఆన్‌లైన్‌లో విరాళాలు సేకరించి విజయవంతంగా చికిత్స అందించారు.</p>
                <p><strong>➔ నోవార్టిస్ లాటరీ విధానం (gMAP):</strong> నోవార్టిస్ కంపెనీ 'Managed Access Program' ద్వారా ప్రతి సంవత్సరం ప్రపంచవ్యాప్తంగా కొంతమంది పిల్లలకు లక్కీ డ్రా పద్ధతిలో ఉచితంగా ఈ ఇంజెక్షన్ ఇస్తుంది. దీని కోసం సంబంధిత వైద్య నిపుణుల ద్వారా దరఖాస్తు చేయాలి.</p>
                <p><strong>➔ ప్రభుత్వ సహాయం:</strong> కేంద్ర ప్రభుత్వం 'National Policy for Rare Diseases 2021' కింద నిర్దేశిత హాస్పిటల్స్ (Centers of Excellence) ద్వారా ₹50 లక్షల వరకు ఆర్థిక సహాయం అందిస్తుంది. అలాగే ఆంధ్రప్రదేశ్, తెలంగాణ రాష్ట్రాల్లో ముఖ్యమంత్రి సహాయ నిధి (CMRF) నుండి కొంత సహాయం అందుతుంది.</p>
                <p><strong>➔ స్వచ్ఛంద సంస్థలు (NGOs):</strong> Cure SMA India (బాధితుల కుటుంబాలకు గైడెన్స్ మరియు వైద్య పరికరాలు అందిస్తుంది), మరియు ORDI (Organization for Rare Diseases India) సంస్థలు ఎల్లప్పుడూ అండగా నిలుస్తున్నాయి.</p>
              </div>

              {/* Section 7: Doctors & Hospitals */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Users className="w-6 h-6 text-blue-600" />
                చికిత్స అందించే ప్రముఖ ఆసుపత్రులు మరియు వైద్య నిపుణులు
              </h3>
              <p className="mb-4">ఈ సంక్లిష్ట వ్యాధి చికిత్సకు ఒక Multidisciplinary Team (బహుళ నిపుణుల బృందం) అవసరం:</p>
              
              <ul className="list-disc ml-6 space-y-2 mb-6 text-sm md:text-base text-gray-700">
                <li><strong>Pediatric Neurologist:</strong> నరాల మరియు జన్యుపరమైన సమస్యలను చూసే ప్రధాన నిపుణుడు.</li>
                <li><strong>Pediatric Pulmonologist:</strong> శ్వాసకోశ ఇబ్బందులను, వెంటిలేటర్ సపోర్ట్‌ను చూస్తారు.</li>
                <li><strong>Gastroenterologist / Nutritionist:</strong> ఆహారం మింగలేని పిల్లలకు ట్యూబ్ ఫీడింగ్ మరియు పోషకాహారం పర్యవేక్షిస్తారు.</li>
                <li><strong>Orthopedic Surgeon / Physiotherapist:</strong> వెన్నుముక వంకర (Scoliosis) రాకుండా ఫిజియోథెరపీ అందిస్తారు.</li>
              </ul>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">హైదరాబాద్‌లోని ప్రముఖ హాస్పిటల్స్:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> NIMS (నిమ్స్), హైదరాబాద్ (ప్రభుత్వ నోడల్ సెంటర్)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> రెయిన్‌బో చిల్డ్రన్స్ హాస్పిటల్, హైదరాబాద్</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> యశోద హాస్పిటల్స్ (Yashoda Hospitals), హైదరాబాద్</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> అపోలో హాస్పిటల్స్ (Apollo Hospitals), హైదరాబాద్</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> కిమ్స్ హాస్పిటల్స్ (KIMS Hospitals), హైదరాబాద్</li>
                </ul>
              </div>

              {/* Section 8: Past Examples */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Award className="w-6 h-6 text-amber-500" />
                గతంలో చికిత్స పొందిన పిల్లల ఉదాహరణలు
              </h3>
              
              <div className="space-y-4 mb-10 text-sm md:text-base text-gray-700">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p><strong>• బేబీ ఎల్లెన్ (భద్రాద్రి కొత్తగూడెం, తెలంగాణ):</strong> ఈ పాపకు నోవార్టిస్ కంపెనీ ఉచిత లాటరీ (gMAP) ద్వారా ₹16 కోట్ల ఇంజెక్షన్ ఉచితంగా లభించింది. హైదరాబాద్‌లో విజయవంతంగా ట్రీట్మెంట్ జరిగింది.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p><strong>• బాబు ముహమ్మద్ (కేరళ):</strong> ఈ బాబు కోసం కేరళ ప్రజలు, ప్రపంచవ్యాప్తంగా ఉన్న దాతలు క్రౌడ్ ఫండింగ్ ద్వారా రికార్డు స్థాయిలో దాదాపు ₹18 కోట్లు వసూలు చేసి ఇంజెక్షన్ ఇప్పించారు.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p><strong>• బేబీ పునర్విక (కర్నూలు, ఆంధ్రప్రదేశ్):</strong> హెయిర్ సెలూన్ నడుపుకునే వ్యక్తి కూతురైన 11 నెలల పునర్విక కోసం '#SavePunarvika' క్యాంపెయిన్ ద్వారా దాతలు ₹10 కోట్లు జమ చేశారు. నంద్యాల ఎంపీ డాక్టర్ బైరెడ్డి శబరి చొరవతో కేంద్రం నుండి ₹50 లక్షలు, మిగిలిన ₹6 కోట్ల మొత్తాన్ని ఏపీ ఐటీ శాఖ మంత్రి నారా లోకేష్ భరిస్తామని హామీ ఇవ్వడంతో చికిత్స ప్రక్రియ శరవేగంగా జరుగుతోంది.</p>
                </div>
              </div>

              {/* Section 9: Prevention */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <ShieldCheck className="w-6 h-6 text-green-600" />
                ముందస్తు నివారణ పరీక్షలు (Prevention & Genetic Testing)
              </h3>
              <p className="mb-4">ప్రెగ్నెన్సీకి ముందు లేదా ప్రెగ్నెన్సీ సమయంలో ఈ వ్యాధిని కనుగొనవచ్చు:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm md:text-base">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-bold text-gray-900 mb-2">1. ప్రెగ్నెన్సీకి ముందు (Carrier Screening):</p>
                  <p className="text-gray-600">భార్యాభర్తలు ఇద్దరూ తమ రక్త నమూనాలను ఇచ్చి 'SMA Carrier Testing' ద్వారా తమలో ఆ జన్యు లోపం ఉందో లేదో ఖచ్చితంగా తెలుసుకోవచ్చు.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-bold text-gray-900 mb-2">2. ప్రెగ్నెన్సీ సమయంలో (Prenatal Diagnosis):</p>
                  <p className="text-gray-600">గర్భం దాల్చిన 11 నుండి 14 వారాల సమయంలో కణజాల (CVS) పరీక్ష ద్వారా, లేదా 15 వారాల తర్వాత గర్భస్థ పిండం చుట్టూ ఉండే నీరు (Amniotic fluid) పరీక్ష ద్వారా పుట్టబోయే బిడ్డకు SMA ఉందో లేదో 100% ఖచ్చితత్వంతో కనుగొనవచ్చు.</p>
                </div>
              </div>

              <div className="bg-teal-50 p-5 rounded-xl border border-teal-100 text-sm md:text-base text-gray-700 mb-10">
                <p><strong>ఖర్చు & ఎక్కడ చేస్తారు:</strong> ఈ జెనెటిక్ టెస్ట్ (MLPA / qPCR) ఖర్చు ₹6,000 నుండి ₹12,000 వరకు ఉంటుంది. హైదరాబాద్‌లోని ప్రభుత్వ సంస్థ అయిన CDFD, నిమ్స్ (NIMS) లతో పాటు ప్రైవేట్ ల్యాబ్స్ అయిన MedGenome, Mapmygenome, Strand Life Sciences, Metropolis లలో ఈ సదుపాయం ఉంది.</p>
              </div>

              {/* Section 10: Solutions & Stats */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <HelpCircle className="w-6 h-6 text-purple-600" />
                శాశ్వత పరిష్కార మార్గాలు మరియు గణాంకాలు
              </h3>
              <p className="mb-4">
                ప్రపంచవ్యాప్తంగా ప్రతి 10,000 మందిలో ఒకరికి ఈ వ్యాధి వస్తే, భారతదేశంలో మేనరిక వివాహాల వల్ల ప్రతి <strong>7,744 మందిలో ఒకరు</strong> SMA తో పుడుతున్నారు. దేశంలో ఏటా 2,500 నుండి 3,000 మంది, తెలుగు రాష్ట్రాల్లో 150 నుండి 200 మంది పిల్లలు ఈ వ్యాధితొ జన్మిస్తున్నారు.
              </p>
              <p className="mb-4">ప్రతి కేసుకూ ₹16 కోట్లు క్రౌడ్ ఫండింగ్ ద్వారా వసూలు చేయడం సాధ్యం కాదు కాబట్టి ఈ క్రింది శాశ్వత పరిష్కారాలను ప్రభుత్వం తక్షణమే ఆలోచించాలి:</p>

              <div className="space-y-3 mb-10 text-sm md:text-base text-gray-700">
                <p><strong>• కార్పొరేట్ CSR ఫండ్:</strong> పెద్ద పెద్ద వ్యాపార సంస్థలు మరియు సెలబ్రిటీల CSR నిధులలో 1% లేదా నిర్దిష్ట మొత్తాన్ని తప్పనిసరిగా "Rare Diseases Fund" కు కేటాయించేలా చట్టం తేవాలి.</p>
                <p><strong>• బల్క్ కొనుగోలు ఒప్పందాలు:</strong> కేంద్ర ప్రభుత్వం నేరుగా నోవార్టిస్ కంపెనీతో మాట్లాడి బల్క్ ఆర్డర్ ఒప్పందం కుదుర్చుకుంటే ఈ ధరను ₹2-3 కోట్లకు తగ్గించవచ్చు.</p>
                <p><strong>• రేర్ డిసీజ్ సెస్ (Health Cess):</strong> హెల్త్ ఇన్సూరెన్స్ ప్రీమియంలపై లేదా లగ్జరీ వస్తువులపై 0.05% సెస్‌ విధించి ప్రత్యేక నిధిని ఏర్పాటు చేయాలి.</p>
                <p><strong>• స్వదేశీ పరిశోధన:</strong> ఐఐటీ (IIT), సీసీఎంబీ (CCMB) వంటి భారతీయ పరిశోధనా సంస్థలకు నిధులు ఇచ్చి మన దేశంలోనే జీన్ థెరపీ మందులు తయారు చేస్తే ఈ ఖర్చు లక్షల్లోకి తగ్గుతుంది.</p>
              </div>

              {/* Cure SMA India Section */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 mb-10 text-sm md:text-base">
                <h4 className="font-bold text-gray-900 mb-2">Cure SMA India అంటే ఏమిటి?</h4>
                <p className="text-gray-700">
                  ఇది 2014 లో SMA బాధితులు మరియు వారి తల్లిదండ్రుల ద్వారా ప్రారంభించబడిన ఒక లాభాపేక్ష లేని స్వచ్ఛంద సంస్థ (NGO). వీరు భారతదేశంలో ఉన్న 1,500 మందికి పైగా రోగులతో 'Patient Registry'ని నిర్వహిస్తున్నారు. కొత్తగా వ్యాధి నిర్ధారణ అయిన వారికి ఏ హాస్పిటల్‌కు వెళ్ళాలి, క్రౌడ్ ఫండింగ్ ఎలా చేయాలనే విషయాలపై పూర్తి గైడెన్స్ ఇస్తూ, ఉచితంగా వీల్ చైర్స్, బయాప్యాప్ (BiPAP) మిషన్లను అందిస్తున్నారు.
                </p>
              </div>

              {/* Disclaimer Section */}
              <div className="mt-10 p-5 md:p-6 bg-red-50 border border-red-200 rounded-xl text-sm md:text-base text-red-900 shadow-sm">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  ముఖ్య గమనిక / Disclaimer:
                </h4>
                <p className="mb-2">
                  ఈ వ్యాసంలో అందించబడిన సమాచారం కేవలం అవగాహన కోసం మాత్రమే. ఇది వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. మీ పిల్లలలో పైన పేర్కొన్న ఏవైనా లక్షణాలు కనిపిస్తే, ఆలస్యం చేయకుండా వెంటనే ఒక పీడియాట్రిక్ న్యూరాలజిస్ట్ (Pediatric Neurologist) ను సంప్రదించి అవసరమైన జెనెటిక్ పరీక్షలు చేయించుకోగలరు.
                </p>
              </div>

              {/* Author Section */}
              <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                  <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                    <PenTool className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold ${brandClasses.textNavy} text-base md:text-lg`}>Vamshi BTech</p>
                  </div>
                </div>
              </div>

              {/* Call to Action with Share & Feedback Buttons */}
              <div className={`mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                    ఈ వ్యాధి గురించి అవగాహనా కల్పిద్దాం..
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                    ఈ సమాచారాన్ని వాట్సాప్ మరియు సోషల్ మీడియాలో విస్తృతంగా షేర్ చేయండి. ఈ వ్యాధితో బాధ పడే చిన్నారుల జీవితాలను కాపాడేదుకు ఉపయోగపడుతుంది.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleShare}
                      className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors shadow-lg"
                    >
                      <Share2 className="w-5 h-5" /> Share Article
                    </button>
                    
                    <Link
                      href="/contact"
                      className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37]/10 transition-colors"
                    >
                      Feedback
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </ReadOnlyWrapper>
        </article>
      </div>

      {/* Toast */}
      {showShareToast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-5 z-[100] flex items-center gap-2 font-medium border border-gray-800">
          <Share2 className="w-4 h-4 text-[#D4AF37]" />
          లింక్ కాపీ చేయబడింది! (Link Copied!)
        </div>
      )}
    </div>
  );
}