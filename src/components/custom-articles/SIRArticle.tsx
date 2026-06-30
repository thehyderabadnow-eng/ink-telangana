"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Clock, MessageCircle, Share2, PenTool,
  AlertCircle, FileText, Smartphone, Calendar,
  CheckCircle, HelpCircle, FileBadge, FileSpreadsheet, Lightbulb
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper';

export default function SIRArticle() {
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
    title: "స్పెషల్ ఇంటెన్సివ్ రివిజన్ (S.I.R - 2026): ఓటరు జాబితా ప్రక్షాళన - సమగ్ర మార్గదర్శకాలు",
    excerpt: "తెలంగాణలో 22 ఏళ్ల తర్వాత జరుగుతున్న ఇంటింటి సర్వే. మీ ఓటును కాపాడుకునేందుకు పూర్తి నిబంధనలు, డాక్యుమెంట్లు, ఫారాలు మరియు FAQs.",
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
                className={`flex items-center gap-2 text-sm font-bold ${brandClasses.bgGold} ${brandClasses.textNavy} px-4 py-2 rounded-full hover:bg-yellow-500 transition-all shadow-md`}
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="mb-4">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5 animate-pulse">
                INK SPECIAL
              </span>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                {articleDetails.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>June 30, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-72 md:h-[28rem] relative bg-gray-200">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjWLtO4OL3HHjwKp-cbljdl7IicsFU124wl26962gTXShx7KmrNb0p9Of3I_RnZ71SgmqXlfVTXgS2O9qXv60EUGWUXuw7wRwQyShqf4l76nc5U5kDoc1US9gwf7r6DUuQP07zpBcgzBW-Poeb7tlkwlIbcmsM6ldMk8rye7Y6botX8IFr8NMiHNnQ9MRf0"
              alt="Elections and Voting Concept"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Section (Read Only) */}
          <ReadOnlyWrapper className="p-5 md:p-10">
            <div className="text-base md:text-lg text-gray-800 leading-loose">

              <p className="mb-8 font-medium text-gray-700 text-lg md:text-xl border-l-4 border-red-500 pl-4">
                రాష్ట్రంలో ప్రతి ఒక్కరి ఓటు హక్కును కాపాడటం, నకిలీ ఓట్లను ఏరివేయడం లక్ష్యంగా కేంద్ర ఎన్నికల సంఘం (ECI) చేపట్టిన భారీ ప్రక్రియే <strong>'స్పెషల్ ఇంటెన్సివ్ రివిజన్' (S.I.R - 2026)</strong>. తెలంగాణలో దాదాపు 22 ఏళ్ల (2002-04) తర్వాత మళ్లీ ఇప్పుడు ఈ ఇంటింటి సర్వే జరుగుతోంది.
              </p>

              <p className="mb-8">
                ఓటర్లు ఎలాంటి గందరగోళానికి గురికాకుండా, తమ ఓటును కాపాడుకునేందుకు అవసరమైన పూర్తి నిబంధనలు, డాక్యుమెంట్లు, ఆన్‌లైన్/ఆఫ్‌లైన్ ప్రక్రియలు, యాప్స్ మరియు మీ అన్ని సందేహాలకు (FAQs) సమాధానాలతో కూడిన సమగ్ర మార్గదర్శక ఆర్టికల్ ఇది.
              </p>

              {/* Section 1 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <AlertCircle className="w-6 h-6 text-blue-600" />
                1. అసలు S.I.R ఎందుకు? చట్టపరమైన నిబంధనలు ఏమిటి?
              </h3>
              <p className="mb-4">వలసలు, మరణాలు, ఒకే వ్యక్తికి పలు చోట్ల ఓటు ఉండటం వంటి సమస్యలను పూర్తిగా నిర్మూలించి, <strong>"ఒక దేశం - ఒకే ఓటు"</strong> విధానాన్ని పటిష్టం చేయడమే దీని ప్రధాన ఉద్దేశం. ఈ ప్రక్రియ ఆర్టికల్ 324 మరియు 'Representation of the People Act, 1950' నిబంధనల ప్రకారం జరుగుతుంది.</p>

              <div className="space-y-4 mb-10">
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" /> 2002 మదర్ రోల్ (Mother Roll) లింకింగ్:</h4>
                  <p className="text-sm md:text-base text-gray-700 ml-7">నకిలీ ఓటర్లను ఏరివేయడానికి ప్రస్తుత ఓటరు జాబితాను 2002 నాటి జాబితాతో లింక్ చేస్తున్నారు. 2002 నాటికి మీకు ఓటు లేకపోతే.. 2002 జాబితాలో ఉన్న మీ తల్లి, తండ్రి లేదా తాతయ్య/నానమ్మల ఓటరు కార్డు (EPIC) నంబర్‌ను సర్వే ఫారంలో ఇవ్వాల్సి ఉంటుంది.</p>
                </div>
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" /> కుటుంబ సభ్యుల 2002 డేటా లేకపోతే?</h4>
                  <p className="text-sm md:text-base text-gray-700 ml-7">ఇతర రాష్ట్రాల నుండి రావడం వల్ల గానీ, మరే ఇతర కారణం వల్ల గానీ 2002 జాబితాలో మీ కుటుంబ సభ్యుల వివరాలు లేకపోతే ఆందోళన చెందవద్దు. మీరు ఈ ఊరికి కొత్తగా వచ్చామని స్వీయ ధృవీకరణ (Self-Declaration) ఇచ్చి, మీ ప్రస్తుత వయసు, చిరునామాకు సంబంధించిన బలమైన ధృవీకరణ పత్రాలు సమర్పిస్తే సరిపోతుంది.</p>
                </div>
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" /> ఊర్లో ఓటు ఉండి.. సిటీకి వలస వస్తే (Village vs. City):</h4>
                  <p className="text-sm md:text-base text-gray-700 ml-7">సర్పంచ్ ఎన్నికల కోసం ఊర్లో, కార్పొరేషన్ ఎన్నికల కోసం సిటీలో ఓటు ఉంచుకోవడం చట్టరీత్యా నేరం. మీరు ఎక్కడ "సాధారణ నివాసి" గా ఉన్నారో అక్కడే ఓటు ఉండాలి. సిటీకి మారినవారు <strong>ఫారం-8</strong> ద్వారా తమ ఓటును బదిలీ చేసుకోవాలి.</p>
                </div>
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" /> పెళ్లయిన మహిళల పరిస్థితి:</h4>
                  <p className="text-sm md:text-base text-gray-700 ml-7">పెళ్లి తర్వాత అత్తింటికి వెళ్లిన మహిళలు పుట్టింటి ఓటును క్యాన్సిల్ చేయకుండా, అత్తింట్లో కొత్తది తీసుకుంటారు. ఇది నేరం. వీరు ప్రస్తుత అడ్రస్ ఆధారంగా 'ఫారం-8' నింపి ఓటును బదిలీ చేసుకోవాలి లేదా పుట్టింటి ఓటును 'ఫారం-7' ద్వారా డిలీట్ చేయాలి.</p>
                </div>
              </div>

              {/* Section 2 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <FileText className="w-6 h-6 text-orange-500" />
                2. ఫారాల రకాలు: Form-6, Form-7, Form-8 అంటే ఏమిటి?
              </h3>
              <p className="mb-4">ఎన్నికల సంఘం ప్రధానంగా మూడు రకాల ఫారాలను ఉపయోగిస్తుంది. వీటి గురించి తెలుసుకోవడం చాలా ముఖ్యం:</p>
              <ul className="space-y-4 mb-10">
                <li className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">Form 6</span>(New Registration)</h4>
                  <p className="text-gray-700 text-sm md:text-base">ఇప్పటివరకు దేశంలో ఎక్కడా ఓటు హక్కు లేని వారు, కొత్తగా 18 ఏళ్లు నిండిన వారు మొదటిసారి ఓటు నమోదు చేసుకోవడానికి నింపాల్సిన ఫారం ఇది. లేదా S.I.R సర్వేలో పొరపాటున ఓటు పూర్తిగా డిలీట్ అయితే మళ్లీ అప్లై చేయడానికి దీన్ని వాడాలి.</p>
                </li>
                <li className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded mr-2">Form 7</span>(Objection / Deletion)</h4>
                  <p className="text-gray-700 text-sm md:text-base">ఓటరు జాబితా నుండి ఒక పేరును తొలగించడానికి దీన్ని వాడతారు. ఉదాహరణకు: ఎవరైనా మరణించినా, లేదా ఒక వ్యక్తికి రెండు చోట్ల ఓట్లు ఉండి పాత ఓటును రద్దు చేయాలనుకున్నా, ఎవరైనా నకిలీ ఓటరు ఉన్నా ఈ ఫారం ద్వారా ఫిర్యాదు చేసి డిలీట్ చేయించవచ్చు.</p>
                </li>
                <li className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-2">Form 8</span>(Shifting / Correction)</h4>
                  <p className="text-gray-700 text-sm md:text-base">ఇది ప్రస్తుత ఎన్యుమరేషన్‌లో అత్యంత కీలకమైన ఫారం. ఒక ఊరి నుండి మరో ఊరికి ఓటు బదిలీ (Shifting) చేసుకోవడానికి, పేరు/వయసు/చిరునామాలో తప్పులు సరిచేసుకోవడానికి (Corrections), పాడైన ఓటరు కార్డు స్థానంలో కొత్త కార్డు పొందడానికి, మరియు ఓటరు కార్డుకు ఆధార్ లింక్ చేయడానికి దీన్ని వాడతారు.</p>
                </li>
              </ul>

              {/* Section 3 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <FileBadge className="w-6 h-6 text-purple-600" />
                3. సర్వేకి అవసరమైన ముఖ్యమైన ధృవీకరణ పత్రాలు (Required Documents)
              </h3>
              <p className="mb-6">మీరు కొత్తగా ఓటు నమోదు చేసుకుంటున్నా, అడ్రస్ మార్చుకుంటున్నా లేదా BLO మీ ఇంటికి వచ్చినప్పుడైనా ఈ క్రింది పత్రాలను సిద్ధంగా ఉంచుకోండి.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-purple-50/40 p-5 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-purple-900 mb-3 border-b border-purple-200 pb-2">1. వయస్సు ధృవీకరణ కోసం (Proof of Age)</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    <li>పుట్టిన తేదీ ధృవీకరణ పత్రం (Birth Certificate).</li>
                    <li>పదో తరగతి సర్టిఫికేట్ (10th Standard / Matriculation).</li>
                    <li>భారతీయ పాస్‌పోర్ట్ (Indian Passport).</li>
                    <li>పాన్ కార్డ్ (PAN Card).</li>
                    <li>డ్రైవింగ్ లైసెన్స్ (Driving Licence).</li>
                    <li>ఆధార్ కార్డ్ (Aadhaar Card - పుట్టిన తేదీ ఉండాలి).</li>
                  </ul>
                </div>

                <div className="bg-purple-50/40 p-5 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-purple-900 mb-3 border-b border-purple-200 pb-2">2. చిరునామా ధృవీకరణ కోసం (Proof of Address)</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    <li>నీటి / విద్యుత్ / గ్యాస్ కనెక్షన్ బిల్లు (గత 3 నెలల లోపుది).</li>
                    <li>జాతీయీకృత బ్యాంకు / పోస్టాఫీస్ పాస్‌బుక్.</li>
                    <li>ఆధార్ కార్డ్ (Aadhaar Card).</li>
                    <li>భారతీయ పాస్‌పోర్ట్ (Indian Passport).</li>
                    <li>రిజిస్టర్డ్ రెంట్ అగ్రిమెంట్ (అద్దె ఇంట్లో ఉండేవారికి).</li>
                    <li>రెవెన్యూ అధికారుల ల్యాండ్ డీడ్ (సొంత ఇల్లు/స్థలం).</li>
                  </ul>
                </div>

                <div className="bg-purple-50/40 p-5 rounded-xl border border-purple-100 md:col-span-2">
                  <h4 className="font-bold text-purple-900 mb-3 border-b border-purple-200 pb-2">3. ఫోటో ధృవీకరణ పత్రాలు (Photo Identity Proofs)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> ఆధార్ కార్డు</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> పాన్ కార్డు</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> డ్రైవింగ్ లైసెన్స్</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> భారతీయ పాస్‌పోర్ట్</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> ప్రభుత్వ సర్వీస్ ఐడెంటిటీ కార్డు</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> ఫోటో ఉన్న పాస్‌బుక్</div>
                  </div>
                  <p className="mt-4 text-xs text-purple-800 italic bg-purple-100 p-2 rounded">
                    * వీటితో పాటు కొత్తగా అప్లై చేసుకునేవారికి పాస్‌పోర్ట్ సైజు ఫోటో మరియు 2002 లింకింగ్ కోసం తల్లిదండ్రుల ఓటరు కార్డు (EPIC) నంబర్ అవసరం అవుతుంది.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <FileSpreadsheet className="w-6 h-6 text-teal-600" />
                4. ఎన్యుమరేషన్ ఫారం (EF) ఎలా ఉంటుంది? (నమూనా)
              </h3>
              <p className="mb-4">BLO లు ఇంటికి తీసుకువచ్చే భౌతిక ఫారాన్ని 'ఎన్యుమరేషన్ ఫారం (EF)' అంటారు. ఇది ముందుగానే మీ వివరాలతో ప్రింట్ చేయబడి వస్తుంది. దీన్ని ఆన్‌లైన్‌లో డౌన్‌లోడ్ చేసుకునే వీలుండదు. ఈ ఫారంలో ఉండే ఫీల్డ్స్ ఇవే:</p>

              <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mb-10 shadow-inner">
                <ol className="list-decimal ml-5 space-y-3 text-gray-800 font-medium">
                  <li><strong>Part No & Serial No:</strong> ఓటరు జాబితాలో మీ భాగం మరియు వరుస సంఖ్య.</li>
                  <li><strong>ఓటరు వివరాలు:</strong> పేరు, తండ్రి/భర్త పేరు, పుట్టిన తేదీ/వయసు, లింగం.</li>
                  <li><strong>EPIC No:</strong> మీ ప్రస్తుత ఓటరు గుర్తింపు కార్డు నంబర్.</li>
                  <li><strong>చిరునామా:</strong> ఇంటి నంబర్, వీధి, గ్రామం/పట్టణం.</li>
                  <li><strong>2002 మ్యాపింగ్ సెక్షన్:</strong> 2002 లో ఓటు ఉన్న మీ కుటుంబ సభ్యుల (తల్లి/తండ్రి/తాత) పేరు మరియు వారి EPIC నంబర్ రాసేందుకు ఖాళీ గడులు.</li>
                  <li><strong>ఆధార్ & మొబైల్ వివరాలు:</strong> ఓటరు ఆధార్ నంబర్ (ఐచ్ఛికం) మరియు మొబైల్ నంబర్.</li>
                  <li><strong>డిక్లరేషన్ & సంతకం:</strong> పైన ఇచ్చిన వివరాలు నిజమేనని ఓటరు సంతకం చేసే కాలమ్ మరియు BLO సంతకం.</li>
                </ol>
              </div>

              {/* Section 5 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Smartphone className="w-6 h-6 text-green-500" />
                5. సర్వే ప్రక్రియ & ఎన్నికల సంఘం యాప్స్ (Apps)
              </h3>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p><strong>Voter Helpline App (VHA):</strong> ఓటరు నమోదు, బదిలీ/సవరణలు, ఓటరు జాబితాలో పేరు వెతకడం మరియు అప్లికేషన్ స్టేటస్ ట్రాక్ చేయడానికి ఇది బెస్ట్ మొబైల్ యాప్.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p><strong>Saksham-ECI App:</strong> దివ్యాంగుల (PwD) కోసం ప్రత్యేకంగా రూపొందించిన యాప్. వీరు కొత్త ఓటు నమోదు చేసుకోవడానికి, పోలింగ్ బూత్ వద్ద వీల్ చైర్ సదుపాయం కోరడానికి ఇది ఉపయోగపడుతుంది.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-[#0B1B35] mb-3 text-lg">ఆఫ్‌లైన్ విధానం (BLO ఇంటికి వచ్చినప్పుడు):</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    <li>BLO ముద్రిత ఫారంతో మీ ఇంటికి వస్తారు. అందులో మీ వివరాలు సరిచూసుకుని, 2002 మ్యాపింగ్ కోసం మీ పేరెంట్స్ EPIC నంబర్ రాసి సంతకం చేయాలి.</li>
                    <li><strong>ఇంట్లో ఎవరూ లేకపోతే:</strong> ఇల్లు పూర్తిగా తాళం వేసి ఉంటే, 'ఫలానా తేదీన మళ్లీ వస్తాను' అని ఒక నోటీసు అంటించడం చేస్తారు. కాబట్టి, మీరు ఇంటికి రాగానే మీ కాలనీ BLO నంబర్‌ను CEO వెబ్‌సైట్ ద్వారా కనుక్కుని వెంటనే సంప్రదించాలి.</li>
                  </ul>
                </div>

                <div className="bg-green-50/50 p-5 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">ఆన్‌లైన్ విధానం (మీరే స్వయంగా చేసుకోవడానికి):</h4>
                  <ol className="list-decimal ml-5 space-y-2 text-sm text-gray-700">
                    <li><strong>voters.eci.gov.in</strong> లేదా <strong>VHA App</strong> లో మొబైల్ నంబర్‌తో లాగిన్ అవ్వండి.</li>
                    <li>'Search in Electoral Roll' ద్వారా మీ ఓటు ఎక్కడ ఉందో చెక్ చేసుకోండి.</li>
                    <li>ఊరు/ఇల్లు మారిన వారు నేరుగా <strong>Form-8</strong> ఎంచుకోవాలి.</li>
                    <li>కొత్త అడ్రస్ ఎంటర్ చేసి, కరెంట్ బిల్లు లేదా రెంటల్ అగ్రిమెంట్ అప్‌లోడ్ చేయాలి.</li>
                    <li>2002 మ్యాపింగ్ కోసం అడిగే ఫీల్డ్‌లో తల్లిదండ్రుల EPIC నంబర్ నమోదు చేసి సబ్మిట్ చేయాలి.</li>
                    <li>రిఫరెన్స్ నంబర్ తో స్టేటస్ ట్రాక్ చేసుకోవచ్చు. పాత ఓటు ఆటోమేటిక్‌గా క్యాన్సిల్ అవుతుంది.</li>
                  </ol>
                </div>
              </div>

              {/* Section 6 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <HelpCircle className="w-6 h-6 text-pink-500" />
                6. తరచూ అడిగే ప్రశ్నలు (FAQs) - పూర్తి స్పష్టత
              </h3>

              <div className="space-y-4 mb-10">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">ప్ర: రెండు చోట్ల ఓటు ఉంటే, రెండు చోట్లా ఎన్యుమరేషన్ (BLO) ఫారాలు ఇస్తారా?</h4>
                  <p className="text-gray-700 text-sm md:text-base"><strong>జ:</strong> అవును. రెండు ప్రాంతాల BLO లకు వచ్చే ప్రింటెడ్ ఫారాల్లో మీ పేరు వస్తుంది. మీరు కచ్చితంగా ఏదో ఒక చోట (శాశ్వతంగా నివసిస్తున్న చోట) మాత్రమే ఫారం నింపి, రెండో చోట ఉన్న ఓటును (Form-7 ద్వారా) రద్దు చేసుకోవాలి.</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">ప్ర: 2002 ఓటరు జాబితాకు, ప్రస్తుత ఆధార్ కార్డుకు స్పెల్లింగ్ తప్పులు ఉంటే ఏం చేయాలి?</h4>
                  <p className="text-gray-700 text-sm md:text-base"><strong>జ:</strong> కంగారు పడకండి. BLO కి ఈ విషయం చెప్పి, సరైన పేరు ఉన్న ఆధార్/పాన్ జిరాక్స్ ఇచ్చి 'ఫారం-8' (Correction of Entries) నింపితే, ఆధార్‌లో ఉన్న విధంగానే తప్పులు లేకుండా మీ పేరును అప్‌డేట్ చేస్తారు.</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">ప్ర: ఇల్లు లేదా ఊరు మారిన ప్రతిసారీ కొత్త ఓటరు కార్డు ఇస్తారా?</h4>
                  <p className="text-gray-700 text-sm md:text-base"><strong>జ:</strong> అవును. మీరు Form-8 ద్వారా కొత్త అడ్రస్‌కు ఓటు మార్చుకోగానే, అప్‌డేట్ చేయబడిన కొత్త PVC ఓటరు గుర్తింపు కార్డును (EPIC) మీ కొత్త ఇంటికి స్పీడ్ పోస్ట్ ద్వారా ఉచితంగా పంపిస్తారు.</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">ప్ర: అద్దె ఇంట్లో ఉంటున్నాను, ఓనరు కరెంట్ బిల్లు ఇవ్వకపోతే ఎలా?</h4>
                  <p className="text-gray-700 text-sm md:text-base"><strong>జ:</strong> కరెంట్ బిల్లు లేకపోతే.. మీ పేరు మీద ఉన్న గ్యాస్ కనెక్షన్ బిల్లు, పోస్టాఫీస్/బ్యాంక్ పాస్‌బుక్, లేదా ఓనర్‌తో చేసుకున్న రిజిస్టర్డ్ రెంటల్ అగ్రిమెంట్ అప్‌లోడ్ చేయవచ్చు. అవేవీ లేకపోతే మీ అడ్రస్ ఉన్న ఆధార్ కాపీ వాడవచ్చు.</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">ప్ర: నా ఓటు ఉందో, తీసేశారో నాకెలా తెలుస్తుంది? ఓటు కోల్పోతే ఏం చేయాలి?</h4>
                  <p className="text-gray-700 text-sm md:text-base"><strong>జ:</strong> 'Voter Helpline App' లో 'Search Your Name' ఆప్షన్‌లో మీ EPIC నంబర్ కొడితే మీ స్టేటస్ కనిపిస్తుంది. ఒకవేళ సర్వేలో పొరపాటున మీ ఓటు గల్లంతైతే, ఆగస్టు 30 లోపు యాప్ ద్వారా గానీ, మీ ఈ-సేవా కేంద్రం ద్వారా గానీ 'ఫారం-6' నింపి కొత్త ఓటు కోసం దరఖాస్తు చేసుకోండి.</p>
                </div>
              </div>

              {/* Section 7 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Calendar className="w-6 h-6 text-red-500" />
                7. తెలంగాణలో ముఖ్యమైన తేదీలు & సహాయ కేంద్రాలు
              </h3>
              <p className="mb-4">అక్టోబర్ 1 న రాబోయే తుది జాబితాలో మీ పేరు ఉండేలా చూసుకోవడానికి ఈ తేదీలు గుర్తుంచుకోండి:</p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-10">
                <ul className="space-y-3 text-red-900 font-medium text-sm md:text-base">
                  <li className="flex gap-2"><span>➔</span> <strong>ఇంటింటి సర్వే (BLO visits):</strong> జూలై 24 (కొన్ని చోట్ల జూలై 27) వరకు.</li>
                  <li className="flex gap-2"><span>➔</span> <strong>ముసాయిదా ఓటరు జాబితా (Draft Roll) విడుదల:</strong> జూలై 31, 2026.</li>
                  <li className="flex gap-2"><span>➔</span> <strong>అభ్యంతరాల స్వీకరణ:</strong> జూలై 31 నుండి ఆగస్టు 30, 2026 వరకు.</li>
                  <li className="flex gap-2"><span>➔</span> <strong>తుది ఓటరు జాబితా విడుదల:</strong> అక్టోబర్ 1, 2026.</li>
                </ul>
                <div className="pt-4 border-t border-red-200 mt-4">
                  <p className="font-bold text-red-800">సహాయ కేంద్రాలు:</p>
                  <ul className="list-disc ml-5 mt-2 text-red-900">
                    <li>టోల్-ఫ్రీ నంబర్: <strong>1950</strong> (సందేహాలు ఉంటే కాల్ చేయండి)</li>
                    <li>తెలంగాణ CEO వెబ్‌సైట్: <a href="https://ceotelangana.nic.in" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">ceotelangana.nic.in</a></li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Lightbulb className="w-6 h-6 text-amber-500" />
                8. ఓటర్లకు & BLO లకు ముఖ్యమైన సలహాలు, సూచనలు
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-3 text-lg border-b border-amber-200 pb-2">ఓటర్లకు సూచనలు:</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    <li><strong>బాధ్యతగా వ్యవహరించండి:</strong> సర్వే కోసం వచ్చే BLO లు సాధారణంగా ఉపాధ్యాయులు లేదా స్థానిక ప్రభుత్వ సిబ్బంది. వారితో వాగ్వాదానికి దిగకండి.</li>
                    <li><strong>ఆన్‌లైన్ చెకింగ్:</strong> ఎవరైనా సరే, తమ ఓటు యాక్టివ్‌గా ఉందో లేదో ఎలక్షన్ కమిషన్ యాప్ లో అప్పుడప్పుడు చెక్ చేసుకోవడం ఉత్తమం.</li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-blue-200 pb-2">BLO లకు సూచనలు (ఎన్యుమరేటర్లకు):</h4>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    <li><strong>సహనం ముఖ్యం:</strong> వయోవృద్ధులు, నిరక్షరాస్యులకు ఫారంలోని సాంకేతిక అంశాలు (2002 మ్యాపింగ్) అర్థం కాకపోవచ్చు. వారికి ఓపికగా వివరించండి.</li>
                    <li><strong>ముందస్తు సమాచారం:</strong> ఒక అపార్ట్‌మెంట్/బస్తీకి వెళ్లే ముందు, స్థానిక అసోసియేషన్ ప్రెసిడెంట్ ద్వారా "రేపు సర్వే జరుగుతుంది, పత్రాలు సిద్ధం చేసుకోండి" అని సమాచారం ఇస్తే పని వేగంగా పూర్తవుతుంది.</li>
                    <li><strong>పారదర్శకత:</strong> ఇంటికి తాళం వేసి ఉన్నప్పుడు, వెంటనే 'తొలగింపు' అని రిపోర్ట్ రాయకుండా, తగిన సమయం లేదా నోటీసు ఇచ్చి మరోసారి విజిట్ చేయడం మంచిది.</li>
                  </ul>
                </div>
              </div>

              {/* Conclusion Box */}
              <blockquote className="relative p-6 md:p-8 bg-gray-50 rounded-xl border-l-4 border-[#0B1B35] mb-8 font-serif text-lg md:text-xl text-gray-800 shadow-sm">
                <strong>ముగింపు:</strong> ఓటు హక్కు అనేది ప్రజాస్వామ్యంలో మనకు ఉన్న అత్యంత బలమైన ఆయుధం. మన ఓటును సురక్షితంగా ఉంచుకోవడం మన బాధ్యత. నిర్లక్ష్యం చేయకుండా, నిబంధనలు పాటించి పారదర్శకమైన ఓటరు జాబితా రూపకల్పనలో ప్రతి ఒక్కరూ భాగస్వాములవుదాం.
              </blockquote>

              {/* Conclusion Box (ఇది మీ కోడ్‌లో ఇప్పటికే ఉంది) */}
              <blockquote className="relative p-6 md:p-8 bg-gray-50 rounded-xl border-l-4 border-[#0B1B35] mb-8 font-serif text-lg md:text-xl text-gray-800 shadow-sm">
                <strong>ముగింపు:</strong> ఓటు హక్కు అనేది ప్రజాస్వామ్యంలో మనకు ఉన్న అత్యంత బలమైన ఆయుధం. మన ఓటును సురక్షితంగా ఉంచుకోవడం మన బాధ్యత. నిర్లక్ష్యం చేయకుండా, నిబంధనలు పాటించి పారదర్శకమైన ఓటరు జాబితా రూపకల్పనలో ప్రతి ఒక్కరూ భాగస్వాములవుదాం.
              </blockquote>

              {/* --- క్రొత్తగా యాడ్ చేయాల్సిన DISCLAIMER SECTION ఇక్కడే --- */}
              <div className="mt-10 p-5 md:p-6 bg-gray-100 border border-gray-200 rounded-xl text-sm md:text-base text-gray-600 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-gray-500" />
                  ముఖ్య గమనిక (Disclaimer):
                </h4>
                <p className="mb-2">
                  ఈ ఆర్టికల్‌లోని సమాచారం కేవలం వెబ్, డిజిటల్, ప్రింట్ మరియు ఎలక్ట్రానిక్ మీడియాల ద్వారా సేకరించి ప్రజల అవగాహన కోసం మాత్రమే ఇక్కడ పొందుపరచబడింది. దయచేసి దీనిపై ఆధారపడి ఫారాలు నింపే ముందు మీ స్థానిక <strong>బూత్ లెవెల్ ఆఫీసర్ (BLO)</strong> ని సంప్రదించండి లేదా <strong>1950</strong> టోల్-ఫ్రీ నంబర్‌కు కాల్ చేసి మరోసారి ధృవీకరించుకోండి.
                </p>
                <p className="text-red-700 font-medium bg-red-50 p-2 rounded inline-block mt-1">
                  * మీరు చేపట్టే S.I.R ఆన్‌లైన్ లేదా ఆఫ్‌లైన్ దరఖాస్తు ప్రక్రియలో ఏవైనా సాంకేతిక లోపాలు, జాప్యాలు లేదా తప్పులు దొర్లితే దానికి 'ఇంక్ తెలంగాణ (Ink Telangana)' యాజమాన్యానికి ఎటువంటి సంబంధం మరియు చట్టపరమైన బాధ్యత లేదు.
                </p>
              </div>
              {/* --- DISCLAIMER SECTION END --- */}

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

              {/* Call to Action */}
              <div className={`mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                    ఈ సమాచారాన్ని ప్రతి ఒక్కరికీ చేరవేయండి!
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                    మీ కుటుంబ సభ్యులు, స్నేహితులు మరియు వాట్సాప్ గ్రూపుల్లో ఈ ఆర్టికల్‌ను షేర్ చేయడం ద్వారా ఎవరి ఓటూ గల్లంతు కాకుండా కాపాడిన వారు అవుతారు.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleShare}
                      className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0B1B35] font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
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