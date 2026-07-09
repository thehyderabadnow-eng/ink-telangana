"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Clock, MessageCircle, Share2, PenTool,
    Flag, Users, Flame, AlertTriangle, ShieldAlert, HeartCrack,
    TrendingDown, FileText, Megaphone
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper';

export default function AllPartyKaryakartaArticle() {
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
        title: "ఓ కార్యకర్తా నీకు గుర్తింపేది? పార్టీ జెండా మోసి అలసిన బతుకుల ఆవేదన!",
        excerpt: "పార్టీలు మారని కార్యకర్తలకు విలువ లేదు. నాయకులు మారిల్లు, నాయకులతో పాటు పార్టీల మనస్తత్వం కూడా మారింది. ప్రతి రాజకీయ కార్యకర్త కచ్చితంగా చదవాల్సిన నిజమిది.",
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
                                className={`flex items-center gap-2 text-sm font-bold bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all shadow-md`}
                            >
                                <Share2 className="w-4 h-4" /> Share
                            </button>
                        </div>

                        <div className="mb-4">
                            <span className={`bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5 animate-pulse`}>
                                INK POLITICS
                            </span>
                            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                                {articleDetails.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-1.5 font-medium">
                                    <Clock className="w-4 h-4 text-red-600" />
                                    <span>July 9, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full h-64 sm:h-80 md:h-[32rem] relative bg-gray-900 overflow-hidden">
                        <img
                            src="https://blogger.googleusercontent.com/img/a/AVvXsEieus3O4ZB4vg2QpD8GJyxDVIIOfJ5fh7oZVdv3aRiMc3Djq84s0fRsyrymm9KzCaHJv2fbVu7kYodjg8355Gdv_19V9srDbmTSGqsWJ9rnEAl1hvSesxjQnS-bCWl5mc78TKWPMvl6f721DWFObxnRiKIJsOwGXEIlCHUi92fF3zZz_9SjZOWavOj3NxxM"
                            alt="Political Rally and Workers"
                            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                        />
                    </div>

                    {/* Article Content Section (Read Only) */}
                    <ReadOnlyWrapper className="p-5 md:p-10">
                        <div className="text-base md:text-lg text-gray-800 leading-loose">

                            {/* Intro Section */}

                            <p className="mb-6">
                                <strong>కార్యకర్త అంటే..</strong> బీరు, బిర్యానీకి అమ్ముడు పోయేటోడు?, కార్యకర్త అంటే చివరి వరుసలో నిలబడేందుకు కూడా అర్హత లేనోడు, కార్యకర్త అంటే జెండా కూలీ మాత్రమే? ఇది కొంతమంది నాయకులలో.. పార్టీ కార్యకర్తల మీద ఉన్న అభిప్రాయం.
                            </p>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-10 shadow-sm">
                                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2 text-lg">
                                    <Flag className="w-5 h-5" /> అసలైన కార్యకర్త అంటే...
                                </h4>
                                <ul className="list-disc ml-5 space-y-2 text-red-800 font-medium">
                                    <li>లీడర్ పార్టీ మారినా, పార్టీ మారనోళ్లు..</li>
                                    <li>పార్టీ ఓడినా జెండా విడవనోళ్లు..</li>
                                    <li>ఎన్ని అవమానాలు ఎదురైనా, బెదిరింపులకు గురైనా బయపడనోళ్లు నికార్సైన కార్యకర్తలు.</li>
                                </ul>
                            </div>

                            {/* Shift in Value */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-10 mb-4 flex items-center gap-2`}>
                                <TrendingDown className="w-6 h-6 text-gray-500" />
                                ఇది ఒకప్పటి మాట..
                            </h3>
                            <p className="mb-4">
                                ఇప్పుడు పార్టీలు మారి వచ్చేటోళ్లకే పైసలు, పనులు, కుర్చీలు, కాంట్రాక్టులు. నాయకుడిని మోసేటోనికే పదవులు, నాయకులతో పాటు పార్టీ మారేటోనికి సకల మర్యాదలు. ఏ పార్టీ అధికారంలో ఉంటే ఆ పార్టీలోకి మారేటోళ్లకే ఇయ్యాల రేపు రాజకీయాల్లో గౌరవం, గుర్తింపు దక్కుతున్నాయి.
                            </p>
                            <p className="mb-10">
                                నేడు నిఖార్సైన కార్యకర్తలు పార్టీలకి అవసరం లేదన్నట్టుగా నాయకులూ వ్యవహరిస్తున్నారు. ప్రస్తుత రాజకీయాల్లో.. నిజాయితీ గల కార్యకర్తలకు విలువ లేదు. పార్టీ ప్రతిపక్షంలో ఉన్నప్పుడు.. ధైర్యంగా జెండాను భుజాన ఎత్తుకుని గర్వంగా చెప్పుకునే కార్యకర్తను, పార్టీ అధికారంలోకి వచ్చిన తర్వాత వాళ్ళని జెండా మోసే కూలీలుగా చులకనగా చూస్తున్నారు. పార్టీకి నమ్మిన బంటుగా ఉన్న కార్యకర్తలకు, అర్హత ఉన్నా సరే పక్కన పెట్టి.. పైసలిచ్చి పైరవీ చేసేటోళ్ళకి, వేరే పార్టీ నుండి వచ్చినోళ్ళకి, అర్హత లేనోళ్లకి, అసలు పార్టీతో సంబంధం లేనివాళ్లకు, తన వర్గానికి చెందిన అనుచరులకు మాత్రమే ప్రాధాన్యం ఇస్తున్నారు.
                            </p>

                            <blockquote className="text-2xl font-bold text-center text-red-600 my-10 px-4">
                                "కార్యకర్తల శ్రమకు కొలమానం లేదు.<br /> వారి త్యాగానికి ప్రతిఫలం లేదు."
                            </blockquote>

                            {/* Emotional Trauma Box */}
                            <div className="bg-[#0B1B35] text-white p-6 md:p-8 rounded-2xl mb-12 shadow-xl relative overflow-hidden">
                                <p className="text-lg md:text-xl font-medium leading-relaxed relative z-10 italic">
                                    "మా నాయకుడు దేవుడు, మా నాయకురాలు దేవత" అంటూ పొగిడినవ్, పిలిచినప్పుడల్లా ఉరుకురికి జెండాలు మోసినవ్, దండాలు పెట్టినవ్, ఫ్లెక్సీలు కట్టినవ్, శాలువాలు కప్పినవ్.. "ఏందయ్యా నువ్వింత చేసినా, వాళ్ళేం చేయట్లేదు నీకు" అంటుంటే, ఆ కార్యకర్త తన కుటుంబానికి ఏం సమాధానం చెప్పుకోవాలి?
                                </p>
                                <p className="mt-4 text-gray-300 relative z-10">
                                    వాళ్ళ మానసిక క్షోభ అంతా ఇంతా కాదు. కన్న తల్లిదండ్రులకు, కట్టుకున్న భార్యకు, కన్న బిడ్డలకు సమాధానం చెప్పలేని కార్యకర్తలు..  ఇలాంటి నాయకులకూ, ఇలాంటి పార్టీ కోసమా మనం పని చేసిందని అవమాన భారంతో కుంగిపోతున్నారు.
                                </p>
                            </div>

                            {/* Leaders vs Workers */}
                            <blockquote className="text-2xl font-bold text-center text-red-600 my-10 px-4">
                                "సవాళ్లు విసురుకునేది నాయకులు, బలయ్యేది మాత్రం కార్యకర్తలు."
                            </blockquote>

                            <p className="mb-4">
                                ఒకప్పుడు నీతి, నిజాయితీతో కూడిన రాజకీయ నాయకులు ఉండేవారు. పార్టీ సిద్ధాంతాలకు కట్టుబడి విలువల కొద్దీ రాజకీయం చేసేవారు. ప్రస్తుతం పార్టీలు కల్తీ అయ్యాయి, సిద్ధాంతాలు కరువయ్యాయి. అధికారమే జెండా, గెలుపే ఎజెండాగా పని చేస్తున్నారు.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-orange-500" /> అధికారం చేతులు మారినప్పుడు..
                                    </h4>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        అధికార పార్టీ, ప్రతిపక్ష పార్టీ నాయకులు విందు, వినోదాల్లో, వివాహాది శుభకార్యాల్లో పాల్గొంటూ హుందాగా వ్యవహరిస్తున్నారు.
                                    </p>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-red-600" /> కార్యకర్తల పరిస్థితి..
                                    </h4>
                                    <p className="text-red-800 text-sm md:text-base">
                                        కార్యకర్తలు మాత్రం ఒకరి ముఖం ఒకరు చూసుకోలేని పరిస్థితి. ఒకరింటికి ఒకరు పోలేని పరిస్థితి. నాయకుల చేతుల్లో తోలు బొమ్మల్లా, ఎటు ఆడిస్తే అటు ఆడే మర మనుషుల్లా తయారవుతున్నారు.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-10 font-medium text-gray-700 bg-gray-100 p-4 rounded-lg">
                                నీ జీవితం నీదే, నీ కుటుంబం నీదే.. నీకు ఆపద వచ్చినప్పుడు నీ కుటుంబానికి న్యాయం చేస్తామని ఉచిత వాగ్దానాలు చేస్తారు, కాని చివరకు ఎవ్వరూ ఏమీ చేయరు.
                            </p>

                            {/* The Reality Check */}
                            <div className="space-y-4 mb-10 text-gray-800">
                                <p className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">➔</span>
                                    ఎమ్మెల్యే గెలుపు కోసం ఇల్లిల్లూ తిరిగి ప్రచారం చేసేది మీరు.
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">➔</span>
                                    ఎంపీ గెలుపు కోసం గడప గడపకూ తిరిగి ఓటెయ్యమని ప్రాధేయపడేది మీరు.
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">➔</span>
                                    జెడ్పీటీసీలు, ఎమ్మెల్సీల గెలుపు కోసం వాడ వాడా పోస్టర్లు అంటించేది మీరు.
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">➔</span>
                                    సర్పంచ్ గెలుపు కోసం అయిన వారిని కూడా దూరం చేసుకునేది మీరు.
                                </p>
                                <p className="font-bold text-lg text-[#0B1B35] mt-4 border-t pt-4">
                                    ఇకపై ఏ పార్టీ అధికారంలో ఉన్నా ఆ అధికారాన్ని అనుభవించాల్సింది కూడా మీరే.
                                </p>
                            </div>

                            <p className="mb-10">
                                ఈ రోజుల్లో సిద్ధాంతపరమైన పార్టీలు కరువయ్యాయి. ఒక పార్టీలో ఎక్కువ సంవత్సరాలు ఉంటే గుర్తింపు ఉంటుందనుకోవడం అవివేకం. నాయకులు మారిల్లు, నాయకులతో పాటు పార్టీల మనస్తత్వం కూడా మారింది. అధికారం వైపు పరుగులు పెడుతున్నాయి.
                            </p>

                            <blockquote className="border-l-4 border-gray-400 pl-4 py-2 italic text-gray-600 font-medium mb-10">
                                "ఆ పార్టీ ఈ పార్టీ అని తేడా లేదు.. అన్ని పార్టీలల్లా గిదే జరుగుతుంది. ఆ నాయకుడు ఈ నాయకుడు అని తేడా లేదు, అందరు నాయకులు గట్లనే చేస్తున్నరు."
                            </blockquote>

                            {/* Membership Section */}
                            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-2xl mb-12">
                                <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6" />
                                    సభ్యత్వం ఎందుకు? అమ్ముకోడానికా?
                                </h3>
                                <p className="mb-4 text-amber-950">
                                    అసలు పార్టీకి సభ్యత్వం తీసుకోవాల్సిన అవసరం ఏముంది? దానివల్ల ఎవరికి ఉపయోగం? అధికారంలో ఉన్న పార్టీకి సభ్యత్వం అవసరం లేదు కానీ, ప్రతిపక్షంలో ఉన్న పార్టీకి అవసరం. మరి అలాంటప్పుడు, అధికార పార్టీని కాదని, ప్రతిపక్షంలో మీ పార్టీకి మద్దతు ఇస్తున్నడు, మీ పార్టీ సభ్యత్వం తీసుకున్నడంటే.. అతను నిజమైన కార్యకర్త కదా! అలాంటి వాళ్ళకి మీరేం చేస్తున్నారు?
                                </p>
                                <p className="font-medium text-amber-900">
                                    పార్టీలో ఐదు, పదేళ్ల నుండి ఉంటున్నరు, ప్రతిసారీ సభ్యత్వం తీసుకుంటరు, ఓడిపోయినా విడిచిపోరు. అలాంటివాళ్ళకి రాజకీయ పార్టీల్లో గౌరవం ఉందా? అలాంటప్పుడు సభ్యత్వం ఎందుకు? నిఖార్సయిన కార్యకర్తల కష్టాన్ని తాకట్టు పెట్టడానికా? మా బలగం ఇంత ఉంది.. పార్టీకి ఫండ్స్ ఇవ్వండి అని సేకరించడానికా? లేక కార్యకర్తల బలం చూపించి పదవులు సంపాదించడానికా?
                                </p>
                            </div>

                            {/* Karyakarta's Agony & Warning */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                <Flame className="w-6 h-6 text-red-600" />
                                కార్యకర్తల ఆవేదన - ఆగ్రహం
                            </h3>

                            <div className="space-y-6 text-gray-800 mb-10">
                                <p>
                                    మా పార్టీ ఓడిపోవాలని కొట్లాడినోడు, మా నాయకుడు గెలవొద్దని మొక్కినోడు, మమ్మల్ని చూసి హేళన చేసినోడు, మా నాయకుని పై విమర్శలు చేసినోడు ఈరోజు మా పార్టీలో చేరి, మా నాయకుని పక్కన కూర్చుని నవ్వుతుంటే ముఖం ఎక్కడ పెట్టుకోవాలో తెలియడం లేదని వాపోతున్నారు.
                                </p>
                                <p>
                                    మేం ఎన్నో ఏళ్లుగా మా నాయకులను మోస్తున్నాం, నాయకుడు లేకపోయినా తలా ఓ చెయ్యేసి పార్టీని నిలబెట్టినం. పార్టీ రూపాయి ఇయ్యకపోయినా మా నాయకున్ని గెలిపించుకోవాలి, మా పార్టీ అధికారంలోకి రావాలని, సొంత పైసలు ఖర్చు పెట్టినం. పార్టీని మోసి మోసి అలసిపోయిన మా బతుకులకు జీవం నింపుతరు అనుకున్నాం.
                                </p>
                                <p className="font-medium text-red-800 bg-red-50 p-4 rounded-lg">
                                    పంట చేతికి వచ్చిన తర్వాత దుక్కి దున్నిన ఎడ్లకు మెటా పెట్టకుండా, సంతల కొత్త ఎడ్లను కొనుక్కొచ్చుకున్నట్టు.. నాయకులు గెలిచిన తర్వాత.. ఏళ్లతరబడి పోరాడి అలసిన కార్యకర్తలను పనికిరావని చెప్పి పక్కన పెట్టి, వేరే పార్టీలో అధికారాన్ని హాయిగా ఆస్వాదించి, ప్రజాధనాన్ని దోచుకున్న నాయకులను తీసుకొచ్చి, మా పక్కన కూర్చోపెట్టి, వాళ్ళకి పదవులు ఇచ్చి, మమ్మల్ని అవమానించి, ఆగం చేసి పార్టీకి దూరం చేస్తున్నారు. ఇదేనా మీరు కార్యకర్తలకు చేసే న్యాయం? ఇదేనా మీ పార్టీలు కార్యకర్తలకు ఇచ్చే మర్యాద? అంటూ ఆగ్రహానికి గురవుతున్నారు.
                                </p>
                            </div>

                            <blockquote className="bg-gray-900 text-blue-900 p-6 rounded-xl font-serif text-lg mb-10 shadow-lg border-l-4 border-red-600">
                                "సమయం వచ్చినప్పుడు కార్యకర్తల సత్తా ఏంటో చూపిస్తాం, మీ అధికార గర్వాన్ని, అహంకారాన్ని అణగదొక్కుతాం. ఎలాగూ నష్టపోయాం, ఇంకా నష్టపోయేదేం లేదు. నిఖార్సైన కార్యకర్తలను దూరం పెట్టి, వలసవాదులతో కలిసి ఎలా గెలుస్తారో చూస్తాం. మీకు అధికారం దూరమైతే, ఓటమితో ఒంటరైతే అప్పుడైనా కార్యకర్తల విలువ తెలుస్తుంది."
                            </blockquote>

                            <p className="mb-10">
                                చివరి వరకు పార్టీలో ఉండేదెవరు, మీరు ఓడిపోయిన వెంటనే పార్టీ మారేది ఎవరో తెలుస్తుందని వారి అభిప్రాయం వ్యక్తపరుస్తున్నారు. పార్టీని గెలిపించి తాను ఓడిపోతూ కూడా, ఇంకా ఆ జెండానే పట్టుకుంటూ తన గుర్తింపు కోసం ఎదురుచూస్తున్నాడు అవమానపడ్డ ప్రతీ కార్యకర్త. అధికార పార్టీ అసంతృప్త కార్యకర్తలను అక్కున చేర్చుకుని బలం పెంచుకునేందుకు  ప్రతిపక్ష పార్టీలకు మంచి అవకాశంగా మారుతుంది.
                            </p>
                            <blockquote className="bg-gray-900 text-black-900 p-6 rounded-xl font-serif text-lg mb-10 shadow-lg border-l-4 border-red-600">
                                " కసితో పనిచేసే కార్యకర్తలు.. పార్టీని గెలిపించే వరకు శ్రమిస్తూనే ఉంటారు."
                            </blockquote>

                            {/* Conclusion & Call to Action */}
                            <div className="border-t-2 border-dashed border-gray-300 pt-10 mt-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
                                    ఓ కార్యకర్తా.. నువ్వు మారాల్సిన సమయం ఆసన్నమైంది!
                                </h3>
                                <p className="mb-4 text-lg">
                                    అవకాశాలకు తగ్గట్టుగా, అవకాశవాద నాయకుల మాదిరిగానే నువ్వూ మారాలి. నువ్వు నీ పార్టీని కాపాడాలని ప్రశ్నిస్తే.. ఒంటరిని చేసి, నిన్ను పార్టీ నుండి వెళ్లగొడతారు.. నీ వాదనను వినేవాళ్లు ఉండరు.
                                </p>

                                <div className="bg-yellow-100 text-yellow-900 p-6 rounded-xl font-bold text-xl text-center my-8 shadow-sm">
                                    "ఏ పార్టీకైనా ఎన్నికలప్పుడు గెలిపించేందుకు కష్టపడే ఎడ్లు కావాలి, గెలిచిన తర్వాత మాత్రం సంచులు మోసే గొడ్లు కావాలి."
                                </div>

                                <p className="mb-6 font-medium">
                                    ప్రస్తుతం నాయకులకు కావాల్సింది కష్టపడే ఎడ్లు కాదు, బలిసిన గొడ్లు! పార్టీ సిద్ధాంతాలకు కాలం చెల్లింది.. ఇక నుండి వ్యక్తిగత సిద్ధాంతాల పై బలంగా పోరాడు.
                                </p>

                                <ul className="list-none space-y-4 text-gray-800 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <li className="flex items-start gap-3">
                                        <Megaphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <span>ఏ పార్టీ కార్యకర్తలైనా సరే.. మీలో మీకు విద్వేషాలు వద్దు, నాయకుల కోసం మిమ్మల్ని మీరు బలి పశువులను చేసుకోవద్దు.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Megaphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <span>ఈరోజు మీ శత్రువు అనుకున్న అవతలి పార్టీ కార్యకర్త, రేపు నీ పార్టీలోకి వస్తడు, లేదా నువ్వే ఆ పార్టీలోకి వెళ్లొచ్చు, అందుకే పార్టీలు వేరైనా, అధికారం చేతులు మారినా, ఒకరికి ఒకరు సహాయం చేసుకోండి. అధికారాన్ని అనుభవించండి.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Megaphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <span>మీకు, మిమ్మల్ని నమ్మిన ప్రజలకి అన్యాయం జరిగితే ప్రశ్నించండి, ఏ పార్టీలో ఉన్నా ప్రజలకు న్యాయం చేయండి.</span>
                                    </li>
                                </ul>

                                <p className="text-center font-bold text-xl md:text-2xl text-[#0B1B35] mt-10">
                                    "పార్టీ సిద్ధాంతాలను బలపరిచే నాయకత్వం పెరగాలని,<br className="hidden md:block" /> కార్యకర్తలను గౌరవించే పార్టీలు రావాలని కోరుకుందాం."
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

                            {/* Call to Action with Share Buttons */}
                            <div className={`mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 p-6 opacity-5">
                                    <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                                        ఈ ఆర్టికల్ ను ప్రతి కార్యకర్తకూ చేరవేయండి!
                                    </h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                                        ఇది ఏ ఒక్క పార్టీకో పరిమితమైన సమస్య కాదు. జెండాలు మోసి అలసిపోయిన ప్రతి నిఖార్సయిన కార్యకర్త ఆవేదన. ఈ కథనాన్ని మీ తోటి మిత్రులకు, వాట్సాప్ గ్రూపుల్లో పంచుకోండి.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleShare}
                                            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
                                        >
                                            <Share2 className="w-5 h-5" /> Share Article
                                        </button>
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