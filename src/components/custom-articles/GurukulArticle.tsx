"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Clock, MessageCircle, Share2, PenTool,
  BookOpen, Users, HelpCircle, ShieldCheck,
  Landmark, CheckCircle, AlertCircle, School, Phone, GraduationCap, Laptop,
  Smartphone, Target, Building
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
    title: "కులాల వారిగా స్కూళ్లు, కాలేజీలకు.. ఆనాటి వివక్షే కారణం.",
    excerpt: "బలహీన వర్గాల బిడ్డల భవిష్యత్ కు బంగారు బాట వేసింది.. ఆనాటి కులాల గురుకులాలే.",
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
                  <span>July 3, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-72 md:h-[37rem] relative bg-gray-200">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgVU18iIVzPoCKT69tyg0RJJ4Q0pooeHahvUmCkl7B2If6_fPUSu_3Y7NiU5JYdOYkDdVs8BXwjw52E1ghyFWW0nUbU-rUNPklBY3a5gOfzPihqykqIkzHcDlRd4XhjO3R4Vjnv26E-DPAcc1FO6gqZqC3sITNSoR7FHBbSGnHwm5B-OzUQMzbph8czfr_u"
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
                వందేమాతరం శ్రీనివాస్ గారు రచించిన ఈ పాట 1997(సుమారు 3 దశాబ్దాల క్రితం)లో దాసరి నారాయణరావు గారు దర్శకత్వం వహించి నటించిన <strong>'ఒసేయ్ రాములమ్మ'</strong> సినిమాలోనిది. సమాజంలో నాటుకుపోయిన కుల వివక్షను, సామాజిక అసమానతలను ఈ పాట సూటిగా ప్రశ్నించింది.
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
                ఒకప్పుడు సమాజంలో కుల వివక్ష విపరీతంగా ఉండేది. అణగారిన వర్గాలకు కూలి పనులు చేసుకోవడం తప్ప వేరే జీవనోపాధి ఉండేది కాదు. సరైన ఆహారం లేక, బతుకు దెరువు కోసం చిన్న పిల్లలను కూడా పనులకు తీసుకెళ్లేవారు. అప్పటి గ్రామాల్లోని బడుల్లో చదువుకునే హక్కు అందరికీ ఉన్నప్పటికీ, ఆచరణలో ఎస్సీ, ఎస్టీ వర్గాల వారిని బడుల్లోకి రానిచ్చేవారు కాదు. వెలివేతలు, బహిష్కరణలు, అవమానాలు ఎదురయ్యేవి. ఇలాంటి చిన్నచూపు ఉన్న సమాజంలో పిల్లలు స్వేచ్ఛగా చదువుకోలేరు, మానసికంగా కృంగిపోతారు. ఆ తారతమ్యాలు, వివక్షలు భవిష్యత్తులో కులాల మధ్య ఘర్షణలకు, విద్వేషాలకు దారితీస్తాయి.
              </p>
              <p className="mb-10 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-gray-700">
                వీటన్నింటినీ పరిగణనలోకి తీసుకున్న ఆనాటి నాయకులు, మేధావులు, అభ్యుదయవాదులు... బడుగు, బలహీన వర్గాల కోసం ప్రత్యేక హాస్టళ్లు, పాఠశాలలు నిర్మించాలని నిర్ణయించారు. ఇది కులాల మధ్య వ్యత్యాసం పెంచడానికి కాదు, ఆ పిల్లలకు సరైన వసతి, భోజనం కల్పించి ఆత్మగౌరవంతో చదువుకునే వాతావరణం సృష్టించడానికి. నాడు వారు తీసుకున్న ఆ నిర్ణయం వల్లే ఈనాడు ఎంతోమంది దళిత, బహుజన బిడ్డలు ఇంజనీర్లుగా, డాక్టర్లుగా, ప్రొఫెసర్లుగా, ఐఏఎస్ (IAS), ఐపీఎస్ (IPS) లుగా ఎదగగలిగారు. చదువుకోవడం వల్ల సమాజంపై అవగాహన వస్తుంది, హక్కుల కోసం నిలబడే ధైర్యం వస్తుంది, తద్వారా దేశం కూడా అభివృద్ధి చెందుతుంది.
              </p>

              {/* Section 1: History */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <School className="w-6 h-6 text-blue-600" />
                1. గురుకుల విద్యాసంస్థలు
              </h3>

              <div className="space-y-8 mb-12">

                {/* 1. TREIS */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-gray-100 pb-2">1. TREIS / TGREIS (సాధారణ గురుకులాలు)</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>ప్రారంభం:</strong> 1972 లో అప్పటి ముఖ్యమంత్రి పి.వి. నరసింహారావు గారు స్థాపించారు (తొలి పాఠశాల 1971 నవంబర్ 23న ప్రారంభమైంది).</li>
                    <li><strong>లక్ష్యం:</strong> కులమతాలతో సంబంధం లేకుండా గ్రామీణ ప్రాంతాల్లోని ప్రతిభావంతులైన పేద విద్యార్థులందరికీ అత్యున్నత నాణ్యతతో కూడిన ఉచిత విద్యను అందించడం.</li>
                    <li><strong>సంస్థ పరిధి:</strong> ఇది తెలుగు రాష్ట్రాల్లోని గురుకుల వ్యవస్థకే మాతృ సంస్థ. ప్రసిద్ధ సర్వేల్ (Sarvail) పాఠశాలతో పాటు TGRJC మరియు TGRDC లు నడుస్తున్నాయి.</li>
                  </ul>
                </div>

                {/* 2. APSWREIS */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg border-b border-gray-100 pb-2">2. APSWREIS (ప్రస్తుతం TGSWREIS - SC గురుకులాలు)</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>ప్రారంభం:</strong> 1984 లో ముఖ్యమంత్రి నందమూరి తారక రామారావు (NTR) గారు ప్రవేశపెట్టారు.</li>
                    <li><strong>లక్ష్యం:</strong> షెడ్యూల్డ్ కులాల (SC) మరియు వెనుకబడిన వర్గాల పేద పిల్లలకు నాణ్యమైన ఇంగ్లీష్ మీడియం వసతి విద్యను అందించడం.</li>
                    <li><strong>సంస్థ పరిధి:</strong> 5వ తరగతి నుండి డిగ్రీ వరకు ఉచిత భోజనం.</li>
                  </ul>
                </div>

                {/* 3 & 4 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-green-700 mb-3 text-lg border-b border-gray-100 pb-2">3. TTWREIS (గిరిజన గురుకులం)</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>ప్రారంభం:</strong> 1984లో ప్రారంభమై, 1998లో చంద్రబాబు నాయుడు గారి హయాంలో స్వతంత్ర సొసైటీగా మారింది.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>సంస్థ పరిధి:</strong> ST విద్యార్థుల కోసం ఏజెన్సీ ప్రాంతాల్లో పాఠశాలలు, జూనియర్ కాలేజీలతో పాటు డిఫెన్స్ (సైనిక) మరియు స్పోర్ట్స్ అకాడమీలు నడుస్తున్నాయి.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-orange-600 mb-3 text-lg border-b border-gray-100 pb-2">4. MJPTBCWREIS (బీసీ గురుకులాలు)</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>ప్రారంభం:</strong> 2012 లో ఉమ్మడి ఏపీ ముఖ్యమంత్రి నల్లారి కిరణ్ కుమార్ రెడ్డి గారు ప్రారంభించారు.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>లక్ష్యం:</strong> వెనుకబడిన తరగతుల (BC) మరియు EBC పిల్లలను విద్యాపరంగా ఉన్నత శిఖరాలకు చేర్చడం.</p>
                  </div>
                </div>

                {/* 5 & 6 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-indigo-700 mb-3 text-lg border-b border-gray-100 pb-2">5. TSWRJC & TSWRDC</h4>
                    <p className="text-sm md:text-base text-gray-700"><strong>ప్రారంభం:</strong> జూనియర్ కాలేజీలు 1990/2000లలో విస్తరించగా, ప్రత్యేక డిగ్రీ కళాశాలలు 2016 లో మాజీ సీఎం KCR గారి హయాంలో ప్రారంభమయ్యాయి. మహిళలకు సైన్స్, కామర్స్ కోర్సుల్లో ఉపాధి కల్పించడం వీటి లక్ష్యం.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-purple-700 mb-3 text-lg border-b border-gray-100 pb-2">6. TMREIS (మైనారిటీ గురుకులాలు)</h4>
                    <p className="text-sm md:text-base text-gray-700"><strong>ప్రారంభం:</strong> 2016 లో సీఎం KCR గారు ప్రతిష్టాత్మకంగా ప్రారంభించారు. మైనారిటీ వర్గాలకు కార్పొరేట్ స్థాయి ఇంగ్లీష్ మీడియం విద్య మరియు NEET, JEE కోచింగ్ అందిస్తున్నారు.</p>
                  </div>
                </div>

                {/* 7. Model Schools */}
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

                {/* 7. Young India (NEWLY ADDED & ENHANCED) */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl border border-blue-200 shadow-md">
                  <h4 className="font-bold text-[#0B1B35] mb-4 text-xl flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    8. యంగ్ ఇండియా ఇంటిగ్రేటెడ్ రెసిడెన్షియల్ స్కూల్స్ (సమన్వయ గురుకులాలు)
                  </h4>
                  <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                    తెలంగాణ విద్యావ్యవస్థలో, ముఖ్యంగా గురుకులాల చరిత్రలో ఇదొక సరికొత్త మరియు విప్లవాత్మకమైన అడుగు. ఎస్సీ, ఎస్టీ, బీసీ, మైనారిటీ విద్యార్థులందరినీ ఒకే గొడుగు కిందికి తెస్తూ ప్రస్తుత ముఖ్యమంత్రి <strong>శ్రీ ఎనుముల రేవంత్ రెడ్డి</strong> గారి ప్రభుత్వం 2024 అక్టోబర్ నెలలో ఈ ప్రాజెక్టుకు శ్రీకారం చుట్టింది.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h5 className="font-bold text-indigo-800 flex items-center gap-2 mb-2"><Target className="w-4 h-4" /> ప్రధాన ఉద్దేశ్యం</h5>
                      <p className="text-sm text-gray-600">కుల, మత, వర్గ భేదాలు లేకుండా విద్యార్థులందరూ ఒకే ప్రాంగణంలో కలిసి చదువుకోవాలి. కులాల వారీగా క్యాంపస్‌లను ఉంచడం వల్ల ఏర్పడే సామాజిక అగాధాన్ని (Social Divide) రూపుమాపి, విద్యార్థి దశ నుంచే సామాజిక సామరస్యాన్ని పెంపొందించడం.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h5 className="font-bold text-indigo-800 flex items-center gap-2 mb-2"><Building className="w-4 h-4" /> ఎందుకు అవసరమైంది?</h5>
                      <p className="text-sm text-gray-600">దాదాపు 1000కి పైగా గురుకులాల్లో సగానికి పైగా అద్దె భవనాల్లోనే ఉన్నాయి. "ఇది ఎస్సీల బడి, ఇది బీసీల బడి" అనే ముద్రను చెరిపేసి, అద్దె భవనాల కష్టాలు తీర్చి ఒకే చోట అత్యుత్తమ సదుపాయాలు కల్పించడమే దీని లక్ష్యం.</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-white p-5 rounded-lg border border-blue-100">
                    <h5 className="font-bold text-[#0B1B35] mb-3 border-b pb-2">ప్రాజెక్టులోని ముఖ్యమైన ఫీచర్లు:</h5>
                    <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc ml-5">
                      <li><strong>విశాలమైన ప్రాంగణాలు:</strong> ఒక్కో క్యాంపస్ సుమారు 20 నుంచి 25 ఎకరాల సువిశాల విస్తీర్ణంలో నిర్మాణం.</li>
                      <li><strong>భారీ బడ్జెట్:</strong> ప్రతి నియోజకవర్గానికి ఒక స్కూల్. ఒక్కో పాఠశాల నిర్మాణానికి సుమారు రూ. 100 కోట్ల నుంచి రూ. 120 కోట్ల బడ్జెట్.</li>
                      <li><strong>ఒకే చోట వేలాది మంది:</strong> ఒక్కో క్యాంపస్‌లో 2,500 మందికి పైగా విద్యార్థులు (SC, ST, BC, Minority & EBC) ఒకే ప్రాంగణంలో ఉంటారు.</li>
                      <li><strong>అంతర్జాతీయ స్థాయి వసతులు:</strong> డిజిటల్ తరగతి గదులు, ఆధునిక ల్యాబ్‌లు, విశాలమైన డైనింగ్ హాళ్లు, క్రీడా మైదానాలు.</li>
                    </ul>
                  </div>

                  <p className="mt-5 text-sm md:text-base font-medium text-indigo-900 bg-indigo-100/50 p-4 rounded border border-indigo-200">
                    ఎన్టీఆర్ గారి హయాంలో పునాదులు పడి, కేసీఆర్ గారి హయాంలో భారీగా విస్తరించిన గురుకుల వ్యవస్థ... ఇప్పుడు రేవంత్ రెడ్డి గారి హయాంలో "యంగ్ ఇండియా ఇంటిగ్రేటెడ్ స్కూల్స్" రూపంలో కుల, మతాలకు అతీతంగా సరికొత్త రూపుదిద్దుకుంటోంది.
                  </p>
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


              {/* YSR Section */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                <Landmark className="w-6 h-6 text-blue-600" />
                వై.ఎస్. రాజశేఖర్ రెడ్డి గారి విప్లవాత్మక విద్యా సంస్కరణ
              </h3>
              <p className="mb-6">ఉమ్మడి ఆంధ్రప్రదేశ్ ముఖ్యమంత్రిగా పనిచేసిన కీ.శే. వై.ఎస్. రాజశేఖర్ రెడ్డి గారిని ఖచ్చితంగా గుర్తుచేసుకోవాలి. విద్యాభివృద్ధిలో భాగంగా ఆయన తెచ్చిన విప్లవాత్మక నిర్ణయం:</p>

              <div className="grid grid-cols-1 mb-12">
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-5 border-b border-gray-100 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-xl md:text-2xl text-gray-900">ఫీజు రీయింబర్స్మెంట్ (Fee Reimbursement)</h4>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-gray-700">
                      <span className="font-bold text-blue-900 mr-2">➔ ప్రారంభం</span>
                      డాక్టర్ వై.ఎస్. రాజశేఖర రెడ్డి (YSR) గారు ఈ పథకం ఉమ్మడి ఆంధ్రప్రదేశ్‌లో 2008–2009 విద్యా సంవత్సరంలో అధికారికంగా ప్రారంభించారు.
                    </p>

                    <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 mt-4">
                      <p className="font-bold text-blue-900 mb-3 text-lg">🎯 పథకం లక్ష్యం:</p>
                      <ul className="list-disc ml-5 space-y-3 text-sm md:text-base text-gray-700">
                        <li><strong>ఉచిత ఉన్నత విద్య:</strong> పేద విద్యార్థులకు కూడా ఇంజనీరింగ్, మెడిసిన్, MBA, MCA వంటి ఖరీదైన ప్రొఫెషనల్ కోర్సులను ఉచితంగా అందించడం.</li>
                        <li><strong>ఆర్థిక భారం తగ్గించడం:</strong> ఫీజులు కట్టలేక ఏ పేద కుటుంబం కూడా అప్పులపాలు కాకూడదనేది దీని ముఖ్య ఉద్దేశం.</li>
                        <li><strong>సామాజిక సమానత్వం:</strong> ఎస్సీ, ఎస్టీ, బీసీ, ఈబీసీ, మైనారిటీ విద్యార్థులు ఉన్నత ఉద్యోగాలు సాధించి సమాజంలో ఎదిగేలా చేయడం.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Services & Helplines */}
              <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-8 flex items-center gap-2 border-b pb-2`}>
                <Laptop className="w-6 h-6 text-indigo-600" />
                4. విద్యార్థులకు ముఖ్యమైన సేవలు & హెల్ప్‌లైన్లు
              </h3>

              <div className="space-y-6 mb-12">
                <div className="space-y-6 mb-12">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-[#0B1B35] mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gray-500" /> అధికారిక వెబ్‌సైట్లు:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <a href="https://schooledu.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                          పాఠశాల విద్య: Telangana School Education
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <a href="https://tgbie.cgg.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                          ఇంటర్మీడియట్: TG State Board of Intermediate
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <a href="https://dost.cgg.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                          ఉన్నత విద్య: DOST (Degree Online Services)
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <a href="https://telanganams.cgg.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                          మోడల్ స్కూల్స్: TGMS Portal
                        </a>
                      </li>
                    </ul>
                  </div>
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

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 shadow-sm mb-12">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" /> మొబైల్ యాప్‌లు (Google Play Store):
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>
                      <a href="https://play.google.com/store/search?q=t+sat+app&c=apps" target="_blank" rel="noopener noreferrer" className="underline text-purple-700 hover:underline">
                        <strong>T-SAT App:</strong>
                      </a> 1వ తరగతి నుండి పోటీ పరీక్షల వరకు ఉచిత డిజిటల్ తరగతులు.
                    </li>
                    <li>
                      <a href="https://play.google.com/store/search?q=Telangana+School+Education&c=apps" target="_blank" rel="noopener noreferrer" className="underline text-purple-700 hover:underline">
                        <strong>TELANGANA SCHOOL EDUCATION App:</strong>
                      </a> విద్యార్థుల విద్యా పురోగతి కోసం.
                    </li>
                    <li>
                      <a href="https://play.google.com/store/search?q=tgbie+m+service&c=apps" target="_blank" rel="noopener noreferrer" className="underline text-purple-700 hover:underline">
                        <strong>TGBIE m-Services:</strong>
                      </a> ఇంటర్ హాల్ టికెట్లు, ఫలితాల కోసం.
                    </li>
                    <li>
                      <a href="https://play.google.com/store/search?q=dost+app+government&c=apps" target="_blank" rel="noopener noreferrer" className="underline text-purple-700 hover:underline">
                        <strong>DOST App:</strong>
                      </a> డిగ్రీ ఆన్‌లైన్ అడ్మిషన్ల కోసం.
                    </li>
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
                     ఇంక్ తెలంగాణ (Ink Telangana) కథనం పై మీ అభిప్రాయాన్ని మాకు తెలియజేయండి.
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