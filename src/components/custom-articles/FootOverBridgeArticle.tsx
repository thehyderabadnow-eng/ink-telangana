"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle, Share2, PenTool, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

export default function FootOverBridgeArticle() {
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
    title: "హైదరాబాద్‌లో ఫుట్ ఓవర్ బ్రిడ్జిలు ప్రజల భద్రత కోసం నిర్మిస్తున్నారా? లేక శిక్షించడానికా?",
    excerpt: "నగరంలో కోట్లు ఖర్చుపెట్టి నిర్మిస్తున్న ఫుట్ ఓవర్ బ్రిడ్జిలను వృద్ధులు, గర్భిణీలు, దివ్యాంగులు ఎందుకు వాడుకోలేకపోతున్నారు?",
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
        
        {/* READ ONLY MODE: select-none & preventing copy/right-click */}
        <article 
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-4 select-none"
          onCopy={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
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
              <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5`}>
                PUBLIC ISSUES
              </span>
              <h1 className={`text-2xl sm:text-3xl md:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                {articleDetails.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>June 27, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image - Pedestrian Bridge */}
          <div className="w-full h-64 sm:h-72 md:h-[30rem] relative">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbjyw6Zs-JusYBOHgCy3MSDOpSPIR52Gb_ng5iZOHRRQlCDGRBI9zVfHWqKrawAMy8ZYdin2tfQ3QhzP4wGJODTmqNYdm8WcZTVjqCAL79zFNVfmmZb8jd1FioQrL9vyBNDrdgkRiYkQF3EkPwmX-bYqoK_YtleuESguNj1gwyjr7KdGkhakYJWKih-SXN/s4080/hyderabad-footover-bridges-02.jpg"
              alt="Foot Over Bridge in City"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Section */}
          <div className="p-5 md:p-10">
            <div className="text-base md:text-lg text-gray-800 leading-loose">

              <p className="mb-8 font-medium text-gray-700 text-lg md:text-xl">
                హైదరాబాద్ నగరంలో ట్రాఫిక్ రద్దీని తగ్గించడానికి యూ-టర్న్‌ల (U-turns) దూరాన్ని పెంచడం, రోడ్డు డివైడర్లను పూర్తిగా మూసివేయడం లాంటి చర్యలు తీసుకుంటున్నారు. దీనివల్ల వాహనదారులకు ట్రాఫిక్ కష్టాలు తగ్గినా.. <strong className={`${brandClasses.textNavy}`}>రోడ్డు దాటడం అనేది పాదచారులకు ఒక పెద్ద సవాలుగా మారింది.</strong>
              </p>

              <p className="mb-8">
                పాదచారుల భద్రత కోసం ప్రభుత్వాలు లక్షలు, కోట్లు ఖర్చుపెట్టి ఫుట్ ఓవర్ బ్రిడ్జిలను (Foot Over Bridges - FOB) నిర్మిస్తున్నప్పటికీ, ఇవి ప్రజలకు పూర్తిగా ఉపయోగపడటం లేదు. దాదాపు రెండు అంతస్తుల ఎత్తు ఉండే ఈ బ్రిడ్జిలను ఎక్కలేక వృద్ధులు, గర్భిణీలు, చిన్నపిల్లలు, దివ్యాంగులు మరియు లగేజీతో ప్రయాణించేవారు తీవ్ర నరకయాతన అనుభవిస్తున్నారు.
              </p>

              {/* Subheading 1 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <AlertTriangle className="w-6 h-6 text-red-500" />
                1. అసలు సమస్య ఏమిటి?
              </h3>
              <p className="mb-4">కోట్లు వెచ్చించి నిర్మిస్తున్న ఈ వంతెనలను ప్రజలు ఎందుకు వాడుకోలేకపోతున్నారంటే:</p>
              
              <ul className="space-y-4 mb-10 bg-red-50/50 p-5 md:p-6 rounded-xl border border-red-100">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>ఎత్తైన మెట్లు:</strong> బ్రిడ్జిలకు దాదాపు 30 నుండి 40 మెట్లు ఉంటున్నాయి. మోకాళ్ల నొప్పులు ఉన్న వృద్ధులు, బరువులు మోసుకెళ్లేవారు వీటిని ఎక్కలేక ఇబ్బంది పడుతున్నారు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>లిఫ్టులు, ఎస్కలేటర్లు లేకపోవడం:</strong> బ్రిడ్జిలకు లిఫ్టులు లేవు. ఒకవేళ ఉన్నా, సరైన నిర్వహణ (Maintenance) లేక పని చేయడం లేదు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>వీల్ చైర్ యాక్సెస్ కరువు:</strong> మెట్లకు ప్రత్యామ్నాయంగా ర్యాంప్‌లు (Ramps) లేకపోవడం వల్ల దివ్యాంగులు ప్రాణాలకు తెగించి ట్రాఫిక్ మధ్యలోనే రోడ్డు దాటాల్సి వస్తోంది.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>భద్రతా లోపాలు:</strong> రాత్రి వేళల్లో సరైన లైటింగ్, సీసీటీవీ కెమెరాలు లేకపోవడం వల్ల మహిళలకు ఇవి సురక్షితమైన మార్గాలుగా అనిపించడం లేదు.</p>
                </li>
              </ul>

              {/* Secondary Image - Accessibility */}
              <div className="my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-64 md:h-96">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhvzF-cUFV3feZ2tqTcT8Qvad5z5_1yVgpZNclAagJu-aBcUL-MFWT5ivyGPAyptzPK5bFr9trUdoyZTQDGCNF6tNYh7RFJL5fRUa7p2Vh7gP07qprM0SpTBWUAqGAoyZHfmueUr4rXQk0uV62mOw-51DroyLJ9QhDRZEzQQzESXaEEusHuqGFxS8JQXtAn"
                  alt="Wheelchair accessibility concept"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Subheading 2 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <ShieldCheck className="w-6 h-6 text-green-600" />
                2. చట్టాలు మరియు మార్గదర్శకాలు ఏం చెబుతున్నాయి?
              </h3>
              <p className="mb-6">ప్రభుత్వం ఏ నిర్మాణం చేపట్టినా, అది అందరికీ అందుబాటులో ఉండేలా చూడటం వారి చట్టబద్ధమైన బాధ్యత. ఫుట్ ఓవర్ బ్రిడ్జిల నిర్మాణానికి సంబంధించి ప్రధానంగా కింది చట్టాలు వర్తిస్తాయి:</p>

              <div className="space-y-6 mb-10">
                <blockquote className="border-l-4 border-[#0B1B35] bg-[#f5f7fa] p-5 md:p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-2">అ) వికలాంగుల హక్కుల చట్టం, 2016 (RPwD Act, 2016):</h4>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm md:text-base">
                    <li><strong>సెక్షన్ 41:</strong> రవాణా సదుపాయాలు మరియు రోడ్లు దాటే మార్గాలు దివ్యాంగులకు ఎలాంటి ఆటంకం లేకుండా (Barrier-free) ఉండాలి.</li>
                    <li><strong>సెక్షన్ 44 & 45:</strong> దివ్యాంగులకు అనుకూలంగా లేని ఏ ప్రభుత్వ నిర్మాణానికీ అనుమతులు మంజూరు చేయకూడదు. దీన్ని ఉల్లంఘిస్తే సెక్షన్ 89 కింద అధికారులపైనా జరిమానాలు విధిస్తారు.</li>
                  </ul>
                </blockquote>
                
                <blockquote className="border-l-4 border-[#D4AF37] bg-yellow-50/30 p-5 md:p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-2">ఆ) ఇండియన్ రోడ్స్ కాంగ్రెస్ మార్గదర్శకాలు (IRC: 103-2012):</h4>
                  <p className="text-gray-700 text-sm md:text-base">పాదచారుల సదుపాయాల కోసం IRC రూపొందించిన ఈ గైడ్‌లైన్స్ ప్రకారం... ఫుట్ ఓవర్ బ్రిడ్జి నిర్మాణంలో మెట్లతో పాటు తప్పనిసరిగా ర్యాంప్ (Ramp) లేదా లిఫ్ట్/ఎస్కలేటర్ ఉండాలి.</p>
                </blockquote>

                <blockquote className="border-l-4 border-[#0B1B35] bg-[#f5f7fa] p-5 md:p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-2">ఇ) పట్టణ వ్యవహారాల మంత్రిత్వ శాఖ (MoHUA) గైడ్‌లైన్స్ (2021):</h4>
                  <p className="text-gray-700 text-sm md:text-base">కేంద్ర ప్రభుత్వం విడుదల చేసిన "Harmonised Guidelines and Standards for Universal Accessibility" ప్రకారం... పబ్లిక్ స్థలాల్లో అంధులకు, బధిరులకు దారి చూపేలా ప్రత్యేక నిర్మాణాలు తప్పనిసరి.</p>
                </blockquote>
              </div>

              {/* Subheading 3 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <Info className="w-6 h-6 text-blue-500" />
                3. ఒక మోడల్ బ్రిడ్జిలో ఉండాల్సిన కనీస సదుపాయాలు
              </h3>
              
              <div className="overflow-x-auto mb-10 shadow-sm border border-gray-200 rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                  <thead className={`${brandClasses.bgNavy} text-white`}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">సదుపాయం</th>
                      <th className="px-4 py-3 text-left font-semibold">ఎవరికి ఉపయోగం?</th>
                      <th className="px-4 py-3 text-left font-semibold">ఉండాల్సిన డిజైన్ / రూల్</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-bold text-gray-900">లిఫ్ట్ / ఎస్కలేటర్</td>
                      <td className="px-4 py-4 text-gray-600">వృద్ధులు, గర్భిణీలు, దివ్యాంగులు</td>
                      <td className="px-4 py-4 text-gray-600">లిఫ్ట్ లోపల వీల్ చైర్ తిరిగేంత స్థలం ఉండాలి. వాయిస్ అనౌన్స్‌మెంట్ ఉండాలి.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-bold text-gray-900">ర్యాంప్ (Ramp)</td>
                      <td className="px-4 py-4 text-gray-600">వీల్ చైర్ వాడేవారు, సైక్లిస్టులు</td>
                      <td className="px-4 py-4 text-gray-600">1:12 లేదా అంతకంటే తక్కువ వాలు (Gradient)తో, స్కిడ్-ఫ్రీ ఫ్లోరింగ్ ఉండాలి.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-bold text-gray-900">ట్యాక్టైల్ పేవింగ్</td>
                      <td className="px-4 py-4 text-gray-600">అంధులు</td>
                      <td className="px-4 py-4 text-gray-600">అంధులకు దారి చూపేలా ఎత్తుపల్లాలు ఉండే ట్యాక్టైల్ టైల్స్ నేలపై వేయాలి.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-bold text-gray-900">హ్యాండ్ రెయిల్స్</td>
                      <td className="px-4 py-4 text-gray-600">నడవడానికి ఇబ్బంది పడేవారు</td>
                      <td className="px-4 py-4 text-gray-600">మెట్లకు, ర్యాంప్‌లకు ఇరువైపులా రెండు వరుసల్లో పట్టుకోవడానికి పైపులు ఉండాలి.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-bold text-gray-900">లైటింగ్ & భద్రత</td>
                      <td className="px-4 py-4 text-gray-600">మహిళలు, పిల్లలు</td>
                      <td className="px-4 py-4 text-gray-600">24 గంటలు వెలుతురు, సీసీటీవీ కెమెరాలు, పానిక్ బటన్ (SOS) ఉండాలి.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Subheading 4 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                4. చట్టాలు ఉన్నా ఎందుకు అమలు జరగడం లేదు?
              </h3>
              <ul className="space-y-4 mb-10 list-disc ml-5 md:ml-8 text-gray-700">
                <li><strong>నిర్వహణ లోపం (Operation & Maintenance):</strong> బ్రిడ్జి నిర్మాణం పూర్తయిన తర్వాత కాంట్రాక్టర్ల పాత్ర ముగిసిపోతుంది. ఆ తర్వాత లిఫ్టులకు కరెంట్ బిల్లు కట్టకపోవడం, విడిభాగాలు చోరీకి గురవ్వడం వల్ల అవి నిరుపయోగంగా మారుతున్నాయి.</li>
                <li><strong>సమన్వయ లోపం:</strong> మున్సిపల్ కార్పొరేషన్ (GHMC), ట్రాఫిక్ పోలీస్ మరియు విద్యుత్ శాఖల మధ్య సరైన కమ్యూనికేషన్ లేకపోవడం.</li>
                <li><strong>ఆడిటింగ్ కరువు:</strong> ఒక పెద్ద భవనానికి 'ఫైర్ సేఫ్టీ ఆడిట్' ఎంత ముఖ్యమో, ఫుట్ ఓవర్ బ్రిడ్జిలకు 'యాక్సెసిబిలిటీ ఆడిట్' అంతే ముఖ్యం. కానీ ఇది క్రమం తప్పకుండా జరగడం లేదు.</li>
              </ul>

              {/* Subheading 5 */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                5. తక్షణ పరిష్కారాలు ఏమిటి?
              </h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className={`mt-2 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>PPP మోడల్ (Public-Private Partnership):</strong> లిఫ్టుల నిర్వహణను ప్రైవేట్ సంస్థలకు అప్పగించి, ఆ బ్రిడ్జిపై అడ్వర్టైజ్‌మెంట్ల ద్వారా వచ్చే ఆదాయాన్ని వారికి ఇవ్వడం ద్వారా నిర్వహణ సమస్యను తీర్చవచ్చు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-2 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>యాప్ బేస్డ్ ఫిర్యాదులు (QR Codes):</strong> లిఫ్ట్ లేదా ఎస్కలేటర్ పనిచేయకపోతే ప్రజలు వెంటనే మున్సిపల్ అధికారులకు ఫిర్యాదు చేసేలా బ్రిడ్జిపై టోల్ ఫ్రీ నెంబర్ లేదా క్యూఆర్ కోడ్ (QR Code) బోర్డులు ఏర్పాటు చేయాలి.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-2 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>ఆడిట్ తప్పనిసరి:</strong> ప్రతి ఆరు నెలలకోసారి స్వతంత్ర సంస్థలతో యాక్సెసిబిలిటీ ఆడిట్ చేయించి, లోపాలు ఉంటే కాంట్రాక్టర్‌పై కఠిన జరిమానాలు విధించాలి.</p>
                </li>
              </ul>

              <blockquote className="relative p-6 md:p-8 bg-[#f5f7fa] rounded-xl border-l-4 border-[#0B1B35] mb-8 font-serif text-lg md:text-xl italic text-gray-700 shadow-sm">
                <span className="absolute top-2 left-4 text-5xl text-gray-300 opacity-50">"</span>
                ప్రతీ పౌరుడు సురక్షితంగా రోడ్డు దాటడానికి కావాల్సిన సదుపాయాలు కల్పించాలని చట్టాలు చెబుతున్నాయి. ఈ హక్కులను పకడ్బందీగా అమలు చేసి, సమాజంలోని ప్రతి ఒక్కరికీ "సమాన అవకాశాలు" కల్పించాల్సిన బాధ్యత ప్రభుత్వ యంత్రాంగంపై ఉంది.
                <span className="absolute bottom-[-10px] right-4 text-5xl text-gray-300 opacity-50">"</span>
              </blockquote>

              {/* --- AUTHOR SIGN OFF BOX --- */}
              <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                  <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                    <PenTool className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    {/* <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">రచన (Author)</p> */}
                    <p className={`font-bold ${brandClasses.textNavy} text-base md:text-lg`}>Vamshi BTech</p>
                  </div>
                </div>
              </div>

              {/* --- INTERACTIVE CALL TO ACTION BOX --- */}
              <div className={`mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                    ఈ సమస్యపై మీ అభిప్రాయాన్ని ప్రభుత్వానికి చేరవేయండి!
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                    హైదరాబాద్ నగరంలో మీరు లేదా మీ కుటుంబ సభ్యులు రోడ్డు దాటేటపుడు ఇబ్బందులు ఎదుర్కొన్నారా? <br /><br />
                    ఈ ఆర్టికల్‌ను మీ సోషల్ మీడియాలో మరియు వాట్సాప్ గ్రూపుల్లో షేర్ చేయడం ద్వారా అధికారుల దృష్టికి వెళ్లేలా మద్దతు తెలపండి.
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
          </div>
        </article>
      </div>

      {/* Copy Link Toast Notification */}
      {showShareToast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-5 z-[100] flex items-center gap-2 font-medium border border-gray-800">
          <Share2 className="w-4 h-4 text-[#D4AF37]" />
          లింక్ కాపీ చేయబడింది! (Link Copied!)
        </div>
      )}
    </div>
  );
}