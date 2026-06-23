"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle, Share2, PenTool } from 'lucide-react';

export default function FreeLaptopArticle() {
  const [showShareToast, setShowShareToast] = useState(false);

  const brandClasses = {
    bgNavy: "bg-[#0B1B35]",
    textNavy: "text-[#0B1B35]",
    borderNavy: "border-[#0B1B35]",
    bgGold: "bg-[#D4AF37]",
    textGold: "text-[#D4AF37]",
  };

  const articleDetails = {
    title: "డిజిటల్ తెలంగాణకు దారిదీపం: 'స్టూడెంట్స్ ఉచిత ల్యాప్‌టాప్ పథకం' మన రాష్ట్రంలో ఎందుకు అత్యవసరం?",
    excerpt: "నేటి ఆధునిక ప్రపంచంలో విద్య కేవలం పుస్తకాలు, పెన్నులకే పరిమితం కాలేదు. గ్లోబల్ లెవెల్‌లో రాణించాలన్నా విద్యార్థులకు 'డిజిటల్ అక్షరాస్యత' అత్యంత కీలకంగా మారింది.",
    url: typeof window !== 'undefined' ? window.location.href : 'https://inktelangana.in'
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
      navigator.clipboard.writeText(`${articleDetails.title}\n\n${articleDetails.url}`);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-4">
          
          {/* Header Section */}
          <div className="p-6 md:p-10 border-b border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors group font-semibold">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </Link>
              
              <button 
                onClick={handleShare}
                className={`flex items-center gap-2 text-sm font-bold ${brandClasses.bgGold} ${brandClasses.textNavy} px-4 py-2 rounded-full hover:bg-yellow-500 transition-all shadow-md`}
              >
                <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>

            <div className="mb-4">
              <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5`}>
                SUGGESTIONS
              </span>
              <h1 className={`text-3xl md:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                {articleDetails.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                {/* <div className="flex items-center gap-2 font-semibold">
                  <PenTool className="w-4 h-4 text-[#D4AF37]" />
                  <span>రచన: వంశీ కృష్ణ పెండ్యాల</span>
                </div> */}
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>June 23, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-72 md:h-[28rem] relative">
            <img 
              src="/articles/free-laptop-scheme.png" 
              alt="Free laptops to Telangana Students" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Article Content Section */}
          <div className="p-6 md:p-10">
            <div className="text-lg text-gray-800 leading-loose">
              
              <p className="text-xl text-gray-600 font-medium italic mb-10 border-l-4 border-[#D4AF37] pl-5 bg-gray-50 py-4 pr-4 rounded-r-lg">
                {articleDetails.excerpt}
              </p>

              <p className="mb-6">
                నేటి ఆధునిక ప్రపంచంలో విద్య కేవలం పుస్తకాలు, పెన్నులకే పరిమితం కాలేదు. గ్లోబల్ లెవెల్‌లో రాణించాలన్నా, ఐటీ, కోడింగ్, ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI) వంటి రంగాల్లో అడుగుపెట్టాలన్నా విద్యార్థులకు "డిజిటల్ అక్షరాస్యత" అత్యంత కీలకంగా మారింది. ఒకప్పుడు ల్యాప్‌టాప్ అనేది విలాసవంతమైన వస్తువు. కానీ నేడు అది విద్యార్థి ప్రాథమిక అవసరంగా, వారి భవిష్యత్తును మార్చే ఒక శక్తివంతమైన ఆయుధంగా రూపాంతరం చెందింది.
              </p>

              <p className="mb-6">
                తెలంగాణ ప్రభుత్వం ఇప్పటికే 'ఫీజు రీఇంబర్స్మెంట్' (TS ePASS) ద్వారా పేద విద్యార్థుల ట్యూషన్ ఫీజులను భరిస్తూ అద్భుతమైన ప్రోత్సాహాన్ని అందిస్తోంది. అయితే, ఫీజులు కట్టినప్పటికీ ప్రొఫెషనల్ కోర్సులు (Engineering, Pharmacy, MBA, MCA, Degree) చదివే విద్యార్థులు ల్యాప్‌టాప్ లేక తీవ్ర ఇబ్బందులు పడుతున్నారు. ఈ నేపథ్యంలో, దేశంలోని ఇతర రాష్ట్రాల స్ఫూర్తితో మన తెలంగాణలోనూ 'ఉచిత ల్యాప్‌టాప్ పథకాన్ని' ప్రవేశపెట్టాల్సిన అవసరం ఎంతైనా ఉంది.
              </p>

              {/* Subheading 1 */}
              <h3 className={`text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                ఇతర రాష్ట్రాలు ఎలా అమలు చేస్తున్నాయి? (Case Studies)
              </h3>
              <p className="mb-4">భారతదేశంలోని పలు రాష్ట్రాలు డిజిటల్ విద్యా విప్లవంలో భాగంగా విద్యార్థులకు ల్యాప్‌టాప్‌లు/టాబ్లెట్‌లను విజయవంతంగా అందిస్తున్నాయి:</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>మధ్యప్రదేశ్ (Direct Benefit Transfer విధానం):</strong> ఇక్కడ 12వ తరగతి బోర్డు పరీక్షల్లో 75% అంతకంటే ఎక్కువ మార్కులు సాధించిన విద్యార్థులకు ల్యాప్‌టాప్ కొనుగోలు కోసం ప్రభుత్వం ₹25,000 నేరుగా విద్యార్థి బ్యాంక్ ఖాతాలో జమ చేస్తుంది. దీనివల్ల మధ్యవర్తుల ప్రమేయం లేకుండా పారదర్శకత పెరుగుతోంది.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>ఉత్తర ప్రదేశ్ & రాజస్థాన్:</strong> టెన్త్, ఇంటర్ బోర్డు పరీక్షల్లో మెరిట్ సాధించిన లక్షలాది మంది విద్యార్థులకు ప్రతి ఏటా ఉచితంగా ల్యాప్‌టాప్‌లు మరియు స్మార్ట్ టాబ్లెట్‌లను పంపిణీ చేస్తున్నారు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>ఒడిశా (బిజు యువ సశక్తీకరణ్ యోజన):</strong> మెరిట్ జాబితాలో నిలిచిన సుమారు 30,000 మంది కాలేజీ విద్యార్థులకు ఏటా ఉచితంగా ల్యాప్‌టాప్‌లు అందిస్తూ వారి ఉన్నత విద్యకు అండగా నిలుస్తున్నారు.</p>
                </li>
              </ul>

              {/* Secondary Image */}
              <div className="my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Students collaborating" 
                  className="w-full h-auto object-cover" 
                />
              </div>

              {/* Subheading 2 */}
              <h3 className={`text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                ల్యాప్‌టాప్ లేక విద్యార్థులు పడుతున్న ఇబ్బందులు
              </h3>
              <p className="mb-4">ఫీజు రీఇంబర్స్మెంట్‌కు అర్హులైన పేద, మధ్యతరగతి కుటుంబాల విద్యార్థులు ల్యాప్‌టాప్ కొనలేక రోజువారీ విద్యా జీవితంలో అనేక సవాళ్లను ఎదుర్కొంటున్నారు:</p>
              
              <ul className="space-y-4 mb-8 bg-red-50/50 p-6 rounded-xl border border-red-100">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>పరిమిత కంప్యూటర్ ల్యాబ్ సమయం:</strong> గ్రామీణ ప్రాంతాల నుండి వచ్చే విద్యార్థులు కేవలం కాలేజీల్లో ఉండే కొద్దిపాటి ల్యాబ్ సమయం (వారానికి 2-3 గంటలు) పైనే ఆధారపడాల్సి వస్తోంది. ప్రాజెక్ట్‌లు పూర్తి చేయడానికి ఆ సమయం ఏమాత్రం సరిపోదు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>ఇంటర్నెట్ కేఫ్‌ల చుట్టూ ప్రదక్షిణలు:</strong> సెమిస్టర్ అసైన్‌మెంట్లు, ప్రాజెక్ట్ రిపోర్టులు, స్కాలర్‌షిప్ దరఖాస్తుల కోసం విద్యార్థులు గంటల తరబడి నెట్ కేఫ్‌ల బయట వేచి ఉండాల్సి వస్తోంది. ఇది వారికి అటు ఆర్థికంగా, ఇటు సమయం పరంగా పెద్ద నష్టం.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p><strong>ఆత్మన్యూనతా భావం (Practical Gap):</strong> పక్కన ఉన్న ధనిక విద్యార్థులకు ల్యాప్‌టాప్‌లు ఉండి, తమకు లేకపోవడం వల్ల ప్రాక్టికల్ నాలెడ్జ్‌లో వెనుకబడిపోతున్నామనే ఆందోళన, ఆత్మన్యూనతా భావం (Inferiority Complex) పేద విద్యార్థుల్లో పెరుగుతోంది.</p>
                </li>
              </ul>

              {/* Subheading 3 */}
              <h3 className={`text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                ల్యాప్‌టాప్ ఇవ్వడం వల్ల వచ్చే లాభాలు & ఉపాధి విప్లవం
              </h3>
              <p className="mb-6">విద్యార్థి చేతికి ల్యాప్‌టాప్ ఇవ్వడం అంటే వారికి ఒక ఉపాధి కేంద్రాన్ని అప్పగించడమే. దీనివల్ల విద్యార్థి దశలోనే కేవలం చదువుకే పరిమితం కాకుండా, సొంతంగా నైపుణ్యాలు పెంచుకుని ఉద్యోగాలు సాధించవచ్చు.</p>

              <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">ల్యాప్‌టాప్ ద్వారా లభించే ఆధునిక ఉద్యోగాలు:</h4>
              <p className="mb-4">నేటి డిజిటల్ మార్కెట్లో డిగ్రీ సర్టిఫికేట్ కంటే "స్కిల్" (నైపుణ్యం) కే ప్రాధాన్యత ఉంది. సొంతంగా ల్యాప్‌టాప్ ఉన్న విద్యార్థి ఇంట్లో కూర్చునే కింద పేర్కొన్న రంగాలలో నైపుణ్యం సాధించి ఉద్యోగాలు పొందవచ్చు:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <strong className={`${brandClasses.textNavy} block mb-1`}>సాఫ్ట్‌వేర్ డెవలప్‌మెంట్ & కోడింగ్:</strong> 
                  <span className="text-sm">Angular, React, Python, Java వంటి ప్రోగ్రామింగ్ లాంగ్వేజెస్ నేర్చుకుని ఐటీ రంగంలో స్థిరపడవచ్చు.</span>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <strong className={`${brandClasses.textNavy} block mb-1`}>డిజిటల్ మార్కెటింగ్ & ఎస్ఈఓ (SEO):</strong> 
                  <span className="text-sm">గ్లోబల్ వ్యాపారాలకు ఆన్‌లైన్ ప్రమోషన్ చేయడం ద్వారా నెలకు వేలల్లో సంపాదించవచ్చు.</span>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <strong className={`${brandClasses.textNavy} block mb-1`}>గ్రాఫిక్ డిజైనింగ్ & వీడియో ఎడిటింగ్:</strong> 
                  <span className="text-sm">యూట్యూబ్ ఛానెల్స్, అడ్верటైజింగ్ ఏజెన్సీలకు కంటెంట్ క్రియేట్ చేయడం ద్వారా తక్షణ ఉపాధి లభిస్తుంది.</span>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <strong className={`${brandClasses.textNavy} block mb-1`}>డేటా ఎంట్రీ & వర్చువల్ అసిస్టెంట్:</strong> 
                  <span className="text-sm">చదువుకుంటూనే పార్ట్-టైమ్ ఆదాయాన్ని ఆర్జించవచ్చు.</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">నిరుద్యోగ నిర్మూలన - స్వయం ఉపాధి (Freelancing):</h4>
              <p className="mb-8">ల్యాప్‌టాప్ ఉండడం వల్ల విద్యార్థులు కేవలం ఉద్యోగాలు వెతుక్కునే వారిలా కాకుండా, ఫ్రీలాన్సింగ్ (Freelancing) ద్వారా స్వయం ఉపాధిని సృష్టించుకోగలరు. Upwork, Fiverr వంటి అంతర్జాతీయ ప్లాట్‌ఫారమ్‌లలో ప్రపంచవ్యాప్త క్లయింట్‌లతో పని చేస్తూ ఇంటి నుంచే విదేశీ మారక ద్రవ్యాన్ని ఆర్జించే స్థాయికి మన యువత ఎదుగుతుంది. ఇది రాష్ట్రంలో నిరుద్యోగ సమస్యను గణనీయంగా తగ్గిస్తుంది.</p>

              {/* Subheading 4 */}
              <h3 className={`text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                బడ్జెట్ భారం పడకుండా ప్రభుత్వం దీనిని ఎలా అమలు చేయవచ్చు?
              </h3>
              <p className="mb-4">తెలంగాణ ప్రభుత్వంపై ఆర్థిక భారం కాకుండా, నిజమైన అర్హులకు మాత్రమే ఈ ల్యాప్‌టాప్‌లు అందేలా కింద పేర్కొన్న విధంగా ఒక పద్ధతి ప్రకారం (Systematic Approach) దీనిని అమలు చేయవచ్చు:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>మొదటి విడతగా ప్రొఫెషనల్ కోర్సుల విద్యార్థులకు:</strong> ప్రభుత్వ కాలేజీలు, పాలిటెక్నిక్, ఐటీఐ మరియు ప్రభుత్వ గురుకులాల్లో ప్రొఫెషనల్ కోర్సులు చదువుతున్న ద్వితీయ/తృతీయ సంవత్సర విద్యార్థులకు ప్రాధాన్యత ఇవ్వాలి.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>ఈ-రూపీ (e-RUPI) వోచర్స్ ద్వారా పంపిణీ:</strong> ల్యాప్‌టాప్‌ల బల్క్ కొనుగోళ్లలో నాణ్యత లోపం వంటి సమస్యలు రాకుండా, తెలంగాణ ప్రభుత్వం అర్హులైన విద్యార్థులకు నేరుగా ల్యాప్‌టాప్ కొనుగోలు కోసం మాత్రమే ఉపయోగపడే "e-RUPI డిజిటల్ వోచర్" (రూ. 20,000 నుండి రూ. 25,000 విలువైనది) అందించవచ్చు. దీనివల్ల విద్యార్థులు తమకు నచ్చిన బ్రాండ్‌ను కొనుగోలు చేసుకోవచ్చు.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${brandClasses.bgGold} flex-shrink-0`}></div>
                  <p><strong>అర్హత ప్రమాణాలు:</strong> కుటుంబ వార్షిక ఆదాయం రూ. 2 లక్షల లోపు ఉండి, కాలేజీలో కనీసం 75% హాజరు ఉన్న విద్యార్థులకే దీనిని వర్తింపజేయాలి.</p>
                </li>
              </ul>

              {/* Subheading 5 */}
              <h3 className={`text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2`}>
                <div className={`w-2 h-8 ${brandClasses.bgGold} rounded-sm`}></div>
                తెలంగాణ ప్రభుత్వానికి విజ్ఞప్తి
              </h3>
              <p className="mb-6">ఐటీ కారిడార్‌కు కేరాఫ్ అడ్రస్‌గా ఉన్న హైదరాబాద్ లాంటి గ్లోబల్ సిటీ మనకు ఉన్నప్పుడు, మన ప్రభుత్వ కాలేజీల విద్యార్థులు ల్యాప్‌టాప్ లేక వెనుకబడిపోవడం సరైంది కాదు. గౌరవనీయులైన తెలంగాణ ముఖ్యమంత్రి గారికి మరియు విద్యాశాఖ అధికారులకు ప్రజల పక్షాన మా విజ్ఞప్తి ఏమిటంటే:</p>
              
              <blockquote className="relative p-8 bg-[#f5f7fa] rounded-xl border-l-4 border-[#0B1B35] mb-8 font-serif text-xl italic text-gray-700 shadow-sm">
                <span className="absolute top-2 left-4 text-5xl text-gray-300 opacity-50">"</span>
                రాష్ట్రంలో విద్యా విప్లవాన్ని మరింత ముందుకు తీసుకెళ్లడానికి ఈ 'స్టూడెంట్ ల్యాప్‌టాప్ పథకం' మైలురాయిగా నిలుస్తుంది. ఇది కేవలం ఉచిత పథకం కాదు... తెలంగాణ యువత భవిష్యత్తుపై చేసే ఒక గొప్ప పెట్టుబడి (Investment for Future). ఫీజు రీఇంబర్స్మెంట్ పరిధిలోకి వచ్చే విద్యార్థులకు డిజిటల్ సాధనాలను కూడా అందిస్తే, వారు ప్రపంచస్థాయి ఐటీ నిపుణులుగా ఎదిగి, నిరుద్యోగాన్ని రూపుమాపి, తిరిగి మన రాష్ట్ర అభివృద్ధి భాగస్వాములు అవుతారు.
                <span className="absolute bottom-[-10px] right-4 text-5xl text-gray-300 opacity-50">"</span>
              </blockquote>
              
              <p className="mb-10 font-bold text-[#0B1B35] text-xl">
                తెలంగాణను కేవలం ఐటీ హబ్‌గానే కాకుండా... డిజిటల్ అక్షరాస్యత కలిగిన నైపుణ్యం గల యువత గనిగా (Skilled Youth Hub) మార్చడానికి ఈ పథకాన్ని త్వరితగతిన పరిశీలించి, అమలు చేయాలని కోరుకుంటున్నాం.
              </p>

              {/* --- INTERACTIVE CALL TO ACTION BOX --- */}
              <div className={`mt-16 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <MessageCircle className="w-40 h-40 text-[#D4AF37]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                    మీ అభిప్రాయాన్ని పంచుకోండి!
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    ప్రియమైన పాఠకులకు: తెలంగాణలో విద్యార్థులకు ఉచిత ల్యాప్‌టాప్ పథకం అవసరమని మీరు భావిస్తున్నారా? ల్యాప్‌టాప్ లేకపోవడం వల్ల మీరు లేదా మీకు తెలిసిన విద్యార్థులు ఎప్పుడైనా ఇబ్బంది పడ్డారా? ఈ ఆర్టికల్‌ను మీ సోషల్ మీడియా అకౌంట్లలో షేర్ చేయడం ద్వారా ప్రభుత్వం దృష్టికి వెళ్లేలా మద్దతు తెలపండి. కింద కామెంట్ సెక్షన్‌లో మీ అభిప్రాయాలను పంచుకోండి.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleShare}
                      className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0B1B35] font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
                    >
                      <Share2 className="w-5 h-5" /> ఆర్టికల్ షేర్ చేయండి
                    </button>
                    <Link 
                      href="/contact"
                      className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37]/10 transition-colors"
                    >
                      మమ్మల్ని సంప్రదించండి
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