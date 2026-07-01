"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Clock, MessageCircle, Share2, PenTool, 
  BookOpen, Users, HelpCircle, ShieldCheck, 
  Landmark, CheckCircle, AlertCircle, School, Phone, GraduationCap, Laptop,
  Smartphone
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper'; 

export default function TelanganaEducationArticle() {
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
    title: "తెలంగాణలో విద్యా విప్లవం: సామాజిక సమానత్వం దిశగా గురుకులాలు, మోడల్ స్కూల్స్",
    excerpt: "సమాజంలో సామాజిక దూరాన్ని చెరిపేసి ఉచితంగా ప్రపంచస్థాయి విద్యను అందిస్తున్న గురుకులాలు, మోడల్ స్కూల్స్ చరిత్ర మరియు ప్రవేశాల వివరాలు.",
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
              <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5`}>
                INK THOUGHTS
              </span>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                {articleDetails.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>July 2, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-72 md:h-[28rem] relative bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
              alt="Indian Students in Classroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Section (Read Only) */}
          <ReadOnlyWrapper className="p-5 md:p-10">
            <div className="text-base md:text-lg text-gray-800 leading-loose">

              <blockquote className="relative p-6 md:p-8 bg-[#f5f7fa] rounded-xl border-l-4 border-[#0B1B35] mb-6 font-serif text-lg md:text-xl italic text-gray-700 shadow-sm">
                <span className="absolute top-2 left-4 text-5xl text-gray-300 opacity-50">"</span>
                చౌదరి గారు ఓ నాయుడు గారు, రెడ్డి గారు ఓ రాజు గారు.. మీ పేరు చివరలో ఆ తోకలెందుకు మా ఊరు చివరనే ఈ పాకలెందుకు..
                <span className="absolute bottom-[-10px] right-4 text-5xl text-gray-300 opacity-50">"</span>
              </blockquote>

              <p className="mb-6">
                వందేమాతరం శ్రీనివాస్ గారు రచించిన ఈ పాట సుమారు 3 దశాబ్దాల క్రితం అంటే 1997 లో దాసరి నారాయణరావు దర్శకత్వం వహించి నటించిన <strong>'ఒసేయ్ రాములమ్మ'</strong> సినిమాలోనిది. సమాజంలో వేళ్లూనుకుపోయిన కుల వివక్షను, సామాజిక అసమానతలను ఈ పాట సూటిగా ప్రశ్నించింది. 
              </p>

              {/* YOUTUBE VIDEO EMBED SECTION */}
              <div className="my-10 w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/obalhg7ux8A?si=kSMbap-vk4eDQzr7"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="mb-10 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-gray-700">
                ఇలాంటి సామాజిక దూరాన్ని చెరిపేసి, ఆర్థికంగా, సామాజికంగా వెనుకబడిన వర్గాల పిల్లలకు ప్రపంచస్థాయి విద్యను ఉచితంగా అందించాలనే సదుద్దేశ్యంతోనే తెలుగు రాష్ట్రాల్లో <strong>"గురుకుల విద్యా వ్యవస్థ"</strong> మరియు <strong>"మోడల్ స్కూల్స్"</strong> కు బీజం పడింది. నాడు మొదలైన ఆ ప్రస్థానం నేడు "యంగ్ ఇండియా సమన్వయ గురుకులాల" వరకు ఎలా చేరిందో పూర్తి వివరాలు చూద్దాం.
              </p>

              {/* YSR Section (Merged from previous Gurukul article) */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Landmark className="w-6 h-6 text-blue-600" />
                వై.ఎస్. రాజశేఖర్ రెడ్డి గారి సంస్కరణలు
              </h3>
              <p className="mb-6">ఈ సందర్భంగా ఉమ్మడి ఆంధ్రప్రదేశ్ ముఖ్యమంత్రిగా పనిచేసిన కీ.శే. వై.ఎస్. రాజశేఖర్ రెడ్డి గారిని కచ్చితంగా గుర్తుచేసుకోవాలి. విద్యాభివృద్ధిలో భాగంగా ఆయన తెచ్చిన విప్లవాత్మక నిర్ణయం:</p>

              <div className="grid grid-cols-1 mb-12">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">ఫీజు రీయింబర్స్మెంట్</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">పేద విద్యార్థులు ధనిక విద్యార్థులతో సమానంగా ప్రైవేట్, కార్పొరేట్ కళాశాలల్లో ఇంజనీరింగ్, ఫార్మసీ, ఎంబీఏ (MBA), ఎంసీఏ (MCA) లాంటి కోర్సులు చదువుకునే వెసులుబాటు కల్పించారు. దీనివల్లే ఎంతోమంది మల్టీ నేషనల్ కంపెనీల్లో (MNCs) కొలువులు సాధిస్తున్నారు.</p>
                </div>
              </div>

              {/* Section 1: History */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <School className="w-6 h-6 text-blue-600" />
                1. గురుకుల విద్యాసంస్థలు మరియు మోడల్ స్కూల్స్ చరిత్ర, వ్యవస్థ
              </h3>

              <div className="space-y-8 mb-12">
                
                {/* 1. TREIS */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-gray-100 pb-2">1. TREIS / TGREIS (సాధారణ గురుకులాలు)</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>ఎప్పుడు/ఎవరు:</strong> 1972 లో అప్పటి ముఖ్యమంత్రి పి.వి. నరసింహారావు గారు స్థాపించారు (తొలి పాఠశాల 1971 నవంబర్ 23న ప్రారంభమైంది).</li>
                    <li><strong>లక్ష్యం:</strong> కులమతాలతో సంబంధం లేకుండా గ్రామీణ ప్రాంతాల్లోని ప్రతిభావంతులైన పేద విద్యార్థులందరికీ అత్యున్నత నాణ్యతతో కూడిన ఉచిత విద్యను అందించడం.</li>
                    <li><strong>వ్యవస్థ:</strong> ఇది తెలుగు రాష్ట్రాల్లోని గురుకుల వ్యవస్థకే మాతృ సంస్థ. ప్రసిద్ధ సర్వేల్ (Sarvail) పాఠశాలతో పాటు TGRJC మరియు TGRDC లు నడుస్తున్నాయి.</li>
                  </ul>
                </div>

                {/* 2. APSWREIS */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-gray-100 pb-2">2. APSWREIS (ప్రస్తుతం TGSWREIS - SC గురుకులాలు)</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>ఎప్పుడు/ఎవరు:</strong> 1984 లో ముఖ్యమంత్రి నందమూరి తారక రామారావు (NTR) గారు ప్రవేశపెట్టారు.</li>
                    <li><strong>లక్ష్యం:</strong> షెడ్యూల్డ్ కులాల (SC) మరియు వెనుకబడిన వర్గాల పేద పిల్లలకు నాణ్యమైన ఇంగ్లీష్ మీడియం వసతి విద్యను అందించడం.</li>
                    <li><strong>వ్యవస్థ:</strong> 5వ తరగతి నుండి డిగ్రీ వరకు ఉచిత భోజనం, వసతితో దేశంలోనే అతిపెద్ద నెట్‌వర్క్‌గా నిలిచింది.</li>
                  </ul>
                </div>

                {/* 3 & 4 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-green-700 mb-3 text-lg border-b border-gray-100 pb-2">3. TTWREIS (గిరిజన గురుకులం)</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>ఎప్పుడు/ఎవరు:</strong> 1984లో ప్రారంభమై, 1998లో చంద్రబాబు నాయుడు గారి హయాంలో స్వతంత్ర సొసైటీగా మారింది.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>వ్యవస్థ:</strong> ST విద్యార్థుల కోసం ఏజెన్సీ ప్రాంతాల్లో పాఠశాలలు, జూనియర్ కాలేజీలతో పాటు డిఫెన్స్ (సైనిక) మరియు స్పోర్ట్స్ అకాడమీలు నడుస్తున్నాయి.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-orange-600 mb-3 text-lg border-b border-gray-100 pb-2">4. MJPTBCWREIS (బీసీ గురుకులాలు)</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>ఎప్పుడు/ఎవరు:</strong> 2012 లో ఉమ్మడి ఏపీ ముఖ్యమంత్రి నల్లారి కిరణ్ కుమార్ రెడ్డి గారు ప్రారంభించారు.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>లక్ష్యం:</strong> వెనుకబడిన తరగతుల (BC) మరియు EBC పిల్లలను విద్యాపరంగా ఉన్నత శిఖరాలకు చేర్చడం.</p>
                  </div>
                </div>

                {/* 5 & 6 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-indigo-700 mb-3 text-lg border-b border-gray-100 pb-2">5. TSWRJC & TSWRDC</h4>
                    <p className="text-sm md:text-base text-gray-700"><strong>ఎప్పుడు/ఎవరు:</strong> జూనియర్ కాలేజీలు 1990/2000లలో విస్తరించగా, ప్రత్యేక డిగ్రీ కళాశాలలు 2016 లో మాజీ సీఎం KCR గారి హయాంలో ప్రారంభమయ్యాయి. మహిళలకు సైన్స్, కామర్స్ కోర్సుల్లో ఉపాధి కల్పించడం వీటి లక్ష్యం.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-purple-700 mb-3 text-lg border-b border-gray-100 pb-2">6. TMREIS (మైనారిటీ గురుకులాలు)</h4>
                    <p className="text-sm md:text-base text-gray-700"><strong>ఎప్పుడు/ఎవరు:</strong> 2016 లో సీఎం KCR గారు ప్రతిష్టాత్మకంగా ప్రారంభించారు. మైనారిటీ వర్గాలకు కార్పొరేట్ స్థాయి ఇంగ్లీష్ మీడియం విద్య మరియు NEET, JEE కోచింగ్ అందిస్తున్నారు.</p>
                  </div>
                </div>

                {/* 7. Young India */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-3 text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    7. Young India Integrated Residential Schools (సమన్వయ గురుకులాలు)
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>ఎప్పుడు/ఎవరు:</strong> 2024 అక్టోబర్ 11న శంకుస్థాపన చేసి, ప్రస్తుత ముఖ్యమంత్రి ఎ. రేవంత్ రెడ్డి గారు ప్రారంభించారు.</li>
                    <li><strong>లక్ష్యం:</strong> కులాల వారీగా పిల్లలను వేరు చేయకుండా, SC, ST, BC మరియు మైనారిటీ విద్యార్థులందరినీ ఒకే చోట (20-25 ఎకరాల మేగా-క్యాంపస్‌లో) చదివించి సమానత్వాన్ని పెంచడం.</li>
                  </ul>
                </div>

                {/* 8. Model Schools */}
                <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-md">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    8. TGMS (Telangana State Model Schools)
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4">
                    <strong>నేపథ్యం:</strong> కేంద్ర ప్రభుత్వ 'కేంద్రీయ విద్యాలయాల' తరహాలో అత్యున్నత నాణ్యతతో కూడిన ఉచిత ఇంగ్లీష్ మీడియం విద్యను గ్రామీణ విద్యార్థులకు అందించడం. 2010–11 లో యూపీఏ (ప్రధాని మన్మోహన్ సింగ్) మంజూరు చేయగా, 2015లో కేంద్రం నిధులు నిలిపివేయడంతో నాటి సీఎం KCR గారు రాష్ట్ర ప్రభుత్వం తరఫున నిర్వహణ బాధ్యత స్వీకరించారు.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">ప్రత్యేకతలు:</p>
                    <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-gray-700">
                      <li>ప్రస్తుతం తెలంగాణవ్యాప్తంగా 194 మోడల్ స్కూల్స్ పనిచేస్తున్నాయి.</li>
                      <li>6వ తరగతి నుండి ఇంటర్మీడియట్ (12వ తరగతి) వరకు విద్య. పూర్తి ఉచితం (ఫీజు లేదు).</li>
                      <li>6-10వ తరగతికి ఉచిత పాఠ్యపుస్తకాలు, యూనిఫారాలు, మధ్యాహ్న భోజనం.</li>
                      <li><strong>బాలికల హాస్టల్స్:</strong> ప్రతి స్కూల్ ఆవరణలో 100 మంది గ్రామీణ విద్యార్థినుల కోసం ఉచిత వసతి.</li>
                      <li>ఎంపికైన రెగ్యులర్ ఉపాధ్యాయులు ఇంగ్లీష్ మీడియంలో డిజిటల్ ల్యాబ్స్ ద్వారా బోధిస్తారు.</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Section 2: Entrance Exams */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <GraduationCap className="w-6 h-6 text-orange-500" />
                2. ప్రవేశ పరీక్షల వివరాలు (TGCET, TGRJC CET & TGMS)
              </h3>
              <p className="mb-6">ప్రభుత్వ గురుకులాలు మరియు మోడల్ స్కూల్స్‌లో ప్రవేశాలకు ప్రధానంగా 3 ప్రవేశ పరీక్షలు నిర్వహిస్తారు:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-900 mb-3 text-lg border-b border-orange-200 pb-2">1. TGCET</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>ప్రవేశం:</strong> అన్ని రకాల గురుకులాల్లో 5వ తరగతిలోకి.</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>అర్హత:</strong> 4వ తరగతి చదువుతున్న తెలంగాణ విద్యార్థులు.</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>విధానం:</strong> OMR విధానంలో (తెలుగు, ఇంగ్లీష్, మ్యాథ్స్, EVS).</p>
                  <p className="text-sm text-gray-700 font-medium">ఫిబ్రవరిలో పరీక్ష జరుగుతుంది.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-blue-200 pb-2">2. TGRJC CET</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>ప్రవేశం:</strong> గురుకుల జూనియర్ కళాశాలల్లో (MPC, BPC, MEC).</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>అర్హత:</strong> 10వ తరగతి (జనరల్- 6 GPA, రిజర్వేషన్- 5 GPA).</p>
                  <p className="text-sm text-gray-700 font-medium">మే మొదటి వారంలో పరీక్ష జరుగుతుంది.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-900 mb-3 text-lg border-b border-green-200 pb-2">3. TGMS Test</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>ప్రవేశం:</strong> మోడల్ స్కూల్స్ లో 6వ తరగతిలోకి (మెరిట్ ఆధారంగా).</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Lateral Entry:</strong> 7-10 తరగతుల్లో ఖాళీల భర్తీకి ప్రత్యేక పరీక్ష.</p>
                  <p className="text-sm text-gray-700 font-medium">లోకల్ కోటా కింద స్థానిక మండల విద్యార్థులకు ప్రాధాన్యత.</p>
                </div>
              </div>

              {/* Section 3: FAQs (Merged from previous Gurukul article) */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <HelpCircle className="w-6 h-6 text-purple-600" />
                3. ప్రజలకు ఉండే సాధారణ ప్రశ్నలు (FAQs)
              </h3>

              <div className="space-y-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-3 text-lg">1. ఒక్కో విద్యార్థికి ప్రభుత్వం ఎంత ఖర్చు చేస్తోంది? సదుపాయాలు ఎలా ఉంటాయి?</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">ఒక్కో విద్యార్థికి సగటున సంవత్సరానికి <strong>రూ. 1,00,000 నుండి 1,25,000</strong> వరకు ప్రభుత్వం ఖర్చు చేస్తోంది.</p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>సదుపాయాలు:</strong> సన్నబియ్యంతో భోజనం, రోజూ గుడ్డు, వారానికి రెండుసార్లు చికెన్/మటన్, ఉచితంగా పాఠ్యపుస్తకాలు, నోట్ బుక్స్, 3 జతల యూనిఫామ్స్, పరుపులు, దుప్పట్లు, ట్రంకు పెట్టెలు, కాస్మోటిక్స్ చార్జీలు ఇస్తారు. డిజిటల్ క్లాస్ రూమ్స్, లైబ్రరీ, ల్యాబ్స్, క్రీడా మైదానాలు ఉంటాయి.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-[#0B1B35] mb-2">2. క్లాస్ కు ఎంతమందిని అనుమతిస్తారు?</h4>
                    <p className="text-gray-700 text-sm md:text-base">ఒక తరగతికి (సెక్షన్ కి) 40 మంది విద్యార్థులను మాత్రమే అనుమతిస్తారు. 5వ తరగతి నుండి ఇంటర్ వరకు ఉండే ఒక గురుకులంలో మొత్తం 400 నుండి 640 మంది వరకు విద్యార్థులు ఉంటారు.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-[#0B1B35] mb-2">3. బోధనా సిబ్బంది ఎంతమంది ఉంటారు?</h4>
                    <p className="text-gray-700 text-sm md:text-base">ఒక స్కూల్ లో ప్రిన్సిపాల్, పీజీటీ, టీజీటీ టీచర్లు, పీఈటీ, లైబ్రేరియన్, స్టాఫ్ నర్స్, మరియు వంట మనుషులు, స్వీపర్లు, వాచ్ మెన్ కలుపుకుని సగటున 30 నుండి 40 మంది సిబ్బంది ఉంటారు.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-3 text-lg">4. ఫుడ్ కాంట్రాక్ట్ ఇస్తారా? బడ్జెట్ ఎలా వస్తుంది?</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">భోజన మెనూ, బడ్జెట్ ప్రభుత్వమే నిర్ణయిస్తుంది. బియ్యాన్ని సివిల్ సప్లైస్ ద్వారా ఇస్తారు. కూరగాయలు, మాంసం వంటివి స్థానిక టెండర్ల ద్వారా కొనుగోలు చేస్తారు. తెలంగాణ ప్రభుత్వం గురుకులాల కోసం ప్రతి ఏటా <strong>సుమారు రూ. 3,500 నుండి 4,000 కోట్లు</strong> కేటాయిస్తోంది. ఎస్సీ, ఎస్టీ సబ్-ప్లాన్, బీసీ, మైనార్టీ సంక్షేమ శాఖల బడ్జెట్ ను దీనికి ఉపయోగిస్తారు.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-3 text-lg">5. స్కూల్ లో తప్పులు జరిగితే ఎవరికి కంప్లైంట్ చేయాలి?</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">నాణ్యత లేని భోజనం పెట్టినా, వివక్ష చూపినా విద్యార్థులు ప్రిన్సిపాల్ కు ఫిర్యాదు చేయాలి. అక్కడ న్యాయం జరగకపోతే సొసైటీ RCO కి లేదా కలెక్టరేట్ లో జరిగే ప్రజావాణిలో ఫిర్యాదు చేయవచ్చు. పిల్లల రక్షణ కోసం <strong>పోక్సో చట్టం (POCSO Act - 2012)</strong>, వివక్ష చూపిస్తే <strong>ఎస్సీ, ఎస్టీ అట్రాసిటీ చట్టం</strong> కింద కఠిన చర్యలు తీసుకుంటారు.</p>
                </div>
              </div>

              {/* Section 4: Services & Helplines */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <Laptop className="w-6 h-6 text-indigo-600" />
                4. విద్యార్థులకు ముఖ్యమైన సేవలు & హెల్ప్‌లైన్లు
              </h3>

              <div className="space-y-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-gray-500" /> అధికారిక వెబ్‌సైట్లు:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> పాఠశాల విద్య: Telangana School Education</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> ఇంటర్మీడియట్: TG State Board of Intermediate</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> ఉన్నత విద్య: DOST (Degree Online Services)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> మోడల్ స్కూల్స్: TGMS Portal</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#0B1B35] mb-4 flex items-center gap-2"><Phone className="w-5 h-5 text-gray-500" /> టోల్ ఫ్రీ & హెల్ప్‌లైన్ నంబర్లు:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>T-SAT క్లాసులు:</strong> 1800-425-4039 లేదా 040-23540326</li>
                    <li><strong>ఇంటర్మీడియట్ హెల్ప్‌లైన్:</strong> 040-24655027</li>
                    <li><strong>DOST అడ్మిషన్లు:</strong> 040-23120416</li>
                    <li><strong>గిరిజన గురుకులాలు:</strong> +91 83338-00221</li>
                    <li><strong>వాట్సాప్ విద్యా సేవలు:</strong> 91 80969 58096 కి 'Hi' అని మెసేజ్ పంపండి.</li>
                    <li><strong>మోడల్ స్కూల్స్ కోసం:</strong> సాంకేతిక సమస్యలు ఉంటే మీసేవ (MeeSeva) లేదా స్కూల్ ప్రిన్సిపాల్స్ ను సంప్రదించవచ్చు.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 shadow-sm">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2"><Smartphone className="w-5 h-5" /> మొబైల్ యాప్‌లు (Google Play Store):</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>T-SAT App:</strong> 1వ తరగతి నుండి పోటీ పరీక్షల వరకు ఉచిత డిజిటల్ తరగతులు.</li>
                    <li><strong>TELANGANA SCHOOL EDUCATION App:</strong> విద్యార్థుల విద్యా పురోగతి కోసం.</li>
                    <li><strong>TGBIE m-Services:</strong> ఇంటర్ హాల్ టికెట్లు, ఫలితాల కోసం.</li>
                    <li><strong>DOST App:</strong> డిగ్రీ ఆన్‌లైన్ అడ్మిషన్ల కోసం.</li>
                  </ul>
                </div>
              </div>

              {/* Conclusion Section */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                ముగింపు
              </h3>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 text-gray-800 leading-relaxed mb-10">
                <p className="mb-4">
                  సమాజంలో విద్యావంతులు పెరగడం మూలాన గతంతో పోలిస్తే ఇప్పుడు కుల వివక్ష చాలా వరకు తగ్గింది. ప్రభుత్వాలు కల్పిస్తున్న ఈ అవకాశాలను బడుగు, బలహీన వర్గాలు పూర్తి స్థాయిలో సద్వినియోగం చేసుకోవాలి.
                </p>
                <p className="mb-4">
                  చదువుకోవడం వల్ల సమాజంపై అవగాహన పెరిగి పాలకులు చేసే తప్పులను, చట్టాలలోని లొసుగులను ప్రశ్నించగలిగే స్థాయికి చేరుకుంటారు. ఎప్పుడైతే అన్ని వర్గాల ప్రజల్లో వంద శాతం అక్షరాస్యత సాధించగలుగుతామో, అప్పుడే సమాజంలో ఈ వివక్ష పూర్తిగా పోతుంది.
                </p>
                <p className="font-bold text-[#0B1B35]">
                  అయితే, కేవలం చదువుతోనే ఇది సాధ్యం కాదు, వారు ఆర్థికంగా కూడా మెరుగ్గా ఉండగలగాలి. పేద, ధనిక అంతరం లేకుండా అందరికీ సమాన అవకాశాలు కల్పించేలా చట్టాలు రూపొందించాలి, వాటిని సమర్థవంతంగా అమలు చేయగలగాలి. అప్పుడే నిజమైన సామాజిక న్యాయం సాధ్యమవుతుంది.
                </p>
              </div>

              {/* Disclaimer Section */}
              <div className="mt-10 p-5 md:p-6 bg-gray-100 border border-gray-200 rounded-xl text-sm md:text-base text-gray-600 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-gray-500" />
                  ముఖ్య గమనిక (Disclaimer):
                </h4>
                <p className="mb-2">
                  ఈ ఆర్టికల్‌లోని సమాచారం కేవలం వెబ్, డిజిటల్, ప్రింట్ మరియు ఎలక్ట్రానిక్ మీడియాల ద్వారా సేకరించి ప్రజల అవగాహన కోసం మాత్రమే ఇక్కడ పొందుపరచబడింది. ప్రభుత్వ విద్యా పథకాల గురించిన మరింత ఖచ్చితమైన, తాజా సమాచారం కోసం దయచేసి సంబంధిత శాఖల అధికారిక వెబ్‌సైట్లను సందర్శించండి. ఈ సమాచార వినియోగంలో ఏర్పడే ఎలాంటి లోపాలకు 'ఇంక్ తెలంగాణ' యాజమాన్యం బాధ్యత వహించదు.
                </p>
              </div>

              {/* Author Section */}
              <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                  <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                    <PenTool className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">రచన (Author)</p>
                    <p className={`font-bold ${brandClasses.textNavy} text-base md:text-lg`}>వంశీ బీటెక్ (Vamshi BTech)</p>
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
                    ఈ సమాచారాన్ని నలుగురికీ పంచుదాం!
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                    తెలంగాణలో అందుబాటులో ఉన్న ఉచిత విద్యావకాశాలను పేద విద్యార్థులకు తెలియజేయడానికి ఈ ఆర్టికల్‌ను వాట్సాప్ మరియు సోషల్ మీడియాలో షేర్ చేయండి.
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