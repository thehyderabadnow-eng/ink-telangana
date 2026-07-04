"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Clock, MessageCircle, Share2, PenTool,
    MapPin, ShieldCheck, Flame, Zap, Compass, Building,
    Activity, Trophy, Flag, TrendingUp, X,
    Users,
    CheckCircle,
    Smartphone,
    Italic,
    ExternalLink,
    Scissors
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper';

export default function RevanthReddyArticle() {
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
        title: "ZPTC to CM: తెలంగాణ ఫైర్ బ్రాండ్ సీఎం రేవంత్ రెడ్డి 20 ఏళ్ల రాజకీయ ప్రస్థానం.",
        excerpt: "మిడ్జిల్ లో ఒక సాధారణ జడ్పీటీసీగా మొదలై.. తెలంగాణ ముఖ్యమంత్రి స్థాయికి ఎదిగిన సీఎం రేవంత్ రెడ్డి గారి 20 ఏళ్ల స్ఫూర్తిదాయక ప్రస్థానం.",
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
                                INK SPECIAL
                            </span>
                            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                                {articleDetails.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-1.5 font-medium">
                                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                                    <span>July 4, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Hero Image (Image 4 - CM Speech) */}
                    <div className="w-full h-72 sm:h-80 md:h-[36rem] relative bg-gray-200">
                        <img
                            src="https://blogger.googleusercontent.com/img/a/AVvXsEhN-z9-j0HZVesltVfujcNDAGoozAA6qHEPlQ_Urr9fPOgTRQbBTEF3atTm2y3e7mOO0e1MIDZHaaB9sWBR1IrrKccOCPxg8LiFi4BfNi0x51YB4ElWyFlXPUY5LDyfCwbcGN05TUJGtPAnqK2rtqJNNfWcpK20hyRNrIIQp36JHBMfASTWVoFy3cdNmB0y"
                            alt="CM Revanth Reddy Speech"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        {/* Section 9: Inspiration */}
                        <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-2 flex items-center gap-2 border-b pb-2`}>
                            <Flame className="w-6 h-6 text-orange-500" />
                            రేవంత్ రెడ్డి జీవితం నేటి యువతకు ఆదర్శం..
                        </h3>
                        <blockquote className="relative p-6 md:p-8 bg-orange-50 rounded-xl border-l-4 border-orange-500 font-serif text-lg md:text-xl text-gray-800 shadow-sm">
                            "<strong>ఒక లక్ష్యం పెట్టుకుని ఆ లక్ష్యం కోసం పోరాడుతూ.. ఎన్ని కష్టాలు, అవరోధాలు వచ్చినా, కాలం ఎన్ని కుట్రలు చేసి నిన్ను ఒంటరిని చేయాలనుకున్నా.. ధైర్యంగా ఆ చీకట్లను చీల్చుకుంటూ, రేపటిపై నమ్మకంతో నిలబడి ముందుకు సాగితే.. విజయం నిన్ను వెతుక్కుంటూ వస్తుందనడానికి రేవంత్ రెడ్డి గారి రాజకీయ ప్రయాణమే ఒక గొప్ప స్ఫూర్తి</strong>".
                        </blockquote>
                    </div>

                    {/* Article Content Section (Read Only) */}
                    <ReadOnlyWrapper className="p-5 md:p-10">
                        <div className="text-base md:text-lg text-gray-800 leading-loose">
                            <div className="flex flex-col">
                                <span>పుట్టింది కొండారెడ్డిపల్లి అయినా..</span>
                                <span>ZPTC గా గెలిపించి రాజకీయ ఓనమాలు దిద్ది దీవించింది మిడ్జిల్,</span>
                                <span>MLA గా గెలిపించి రాజకీయ దంగల్‌కు శ్రీకారం చుట్టింది కొడంగల్,</span>
                                <span>MP గా గెలిపించి  రాష్ట్ర స్థాయి నాయకునిగా మలిచింది మల్కాజిగిరి,</span>
                                <span>ముఖ్యమంత్రిని చేసి తిరుగులేని రాజకీయ శక్తిగా నిలిపింది తెలంగాణ.</span>

                                <span className="mt-3">
                                    పార్టీ సిద్ధాంతాలు ఏవైనా కావచ్చు, కానీ తాను నమ్మిన సిద్ధాంతాలను, ఆశయాలను ఆయన ఎన్నడూ వదులుకోలేదు. జెండా ఏదైనా, తన ఎజెండానే అమలు చేస్తాడు. కొండారెడ్డిపల్లి గ్రామం నుండి ఒంటరిగా ప్రయాణాన్ని ప్రారంభించి.. ఈ రోజు తెలంగాణ రాష్ట్రంలో తిరుగులేని రాజకీయ శక్తిగా ఎదిగి, కోట్ల మంది ప్రజల అభిమానాన్ని సొంతం చేసుకున్నడు.
                                </span>
                            </div>

                            {/* Twitter Post Highlight */}
                            <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl mb-10">
                                <p className="text-sm md:text-base text-gray-700 mb-4">
                                    <strong>సీఎం రేవంత్ రెడ్డి గారు తన 20 ఏళ్ల రాజకీయ ప్రస్థానాన్ని గుర్తు చేసుకుంటూ తన 'X' (Former Twitter) ఖాతాలో ఒక పోస్ట్ పెట్టారు.</strong>
                                </p>

                                <div className="flex flex-col">
                                    <i className="flex flex-col gap-1 text-gray-800">
                                        <span>లక్షల అక్షరాలతో రాసినా…</span>
                                        <span>కోట్ల పదాలను కూర్చి  చెప్పినా…</span>
                                        <span>తరగని మధుర జ్ఞాపకం…</span>
                                        <span>ఈ రెండు దశాబ్దాల ప్రజా జీవితం.</span>
                                        <span className="mt-3">నాడు మిడ్జిల్ లో రేవంత్ రెడ్డిగా మొదలై…</span>
                                        <span>నేడు మీ అందరి గుండెల్లో “రేవంతన్న”గా నిలిచే వరకు సాగిన ఈ అద్భుత ప్రయాణం నా జీవితంలో ప్రత్యేక అధ్యాయం.</span>
                                        <span>ఈ 20 ఏళ్లలో ప్రతి సందర్భంలో, ప్రతి సంఘటనలో, ప్రతి సంఘర్షణలో, ప్రజల కోసం నేను చేసిన ప్రతి పోరాటంలో నాతో నిలిచిన,</span>
                                        <span>నాతో నడిచిన ప్రతి ఆత్మీయుడికి, మిత్రులకు, శ్రేయోభిలాషులకు, రాజకీయ కార్యకర్తలకు హృదయపూర్వక అభినందనలు.</span>
                                        <span className="mt-3">ఇదే స్ఫూర్తితో,</span>
                                        <span>ప్రజలకు మరింత సేవ చేయాలన్న ఆర్తితో,</span>
                                        <span>మీ అందరి ఆశీర్వాద బలంతో..</span>
                                        <span>భవిష్యత్తులో తెలంగాణ పునర్ నిర్మాణ శ్రామికుడిగా,</span>
                                        <span>ప్రజల ఆకాంక్షలను నెరవేర్చే సేవకుడిగా…</span>
                                        <span>అన్నింటికీ మించి రేవంతన్నగా…</span>
                                        <span>మీ హృదయాల్లో నా స్థానాన్ని మరింత సుస్థిరం చేసుకుంటానని మాట ఇస్తున్నాను.</span>
                                        <strong className="mt-3 not-italic">#ZPTCToCM #20YearsOfPoliticalJourney</strong>
                                    </i>
                                </div>
                            </div>

                            {/* Prakash Suit Makers Ad */}
                            <div className="my-8 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 to-orange-50/40 p-6 shadow-sm md:p-8">
                                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

                                    {/* Left Content Section */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-amber-800">
                                            <span className="text-xs font-bold tracking-wider">Advertisement</span>
                                        </div>

                                        <h3 className="font-serif text-2xl font-bold text-gray-900 md:text-3xl">
                                            Prakash Suit Makers
                                        </h3>

                                        <p className="max-w-xl text-base italic leading-relaxed text-gray-700">
                                            "Tailoring Excellence in the Heart of Hyderabad Since Decades."
                                        </p>

                                        {/* Location Badges */}
                                        <div className="flex flex-wrap items-center gap-2 pt-2">
                                            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                                                <MapPin className="h-3..5 w-3.5 text-amber-700" />
                                                Secunderabad
                                            </span>
                                            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                                                <MapPin className="h-3.5 w-3.5 text-amber-700" />
                                                Uppal
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right CTA Button Section */}
                                    <div className="w-full shrink-0 md:w-auto">
                                        <a
                                            href="https://prakashsuitmakers.blogspot.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 rounded-xl bg-amber-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-950 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 active:scale-[0.98]"
                                        >
                                            Visit Website
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>

                                </div>
                            </div>

                            {/* Section 1: The Beginning */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                <Clock className="w-6 h-6 text-gray-500" />
                                20 సంవత్సరాలు వెనక్కి వెళ్తే..
                            </h3>

                            <div className="flex flex-col md:flex-row gap-8 mb-10">
                                <div className="md:w-1/2">
                                    <p className="mb-4">
                                        అతని వాగ్ధాటిని మెచ్చి, ఆయనలో ఒక భవిష్యత్ నాయకుడిని చూసిన అనుచరులు ఆయనను గుండెల్లో పెట్టుకున్నారు. అతని పోరాటాన్ని తమ పోరాటంగా మార్చుకున్నారు.
                                    </p>
                                    <p>
                                        వాళ్లంతా అతని ఆలోచనలను క్షేత్రస్థాయిలో అమలు చేసే నమ్మకమైన సైనికులుగా మారారు. అలా రేవంత్ రెడ్డి తనకంటూ ఒక ప్రత్యేకమైన, తిరుగులేని ప్రజాభిమానాన్ని సొంతం చేసుకోగలిగారు.
                                    </p>
                                </div>
                                {/* Image 1 - Young Revanth */}
                                <div className="md:w-1/2">
                                    <img
                                        src="https://blogger.googleusercontent.com/img/a/AVvXsEgZ7q7hy1esxutUK5rmfAwQ9v6s2OykAgth8YBYq1by8pwGQ_KcDK7GRTwIl0Hxw6nwAZkCtMvRnMMdiwqeZnNNWq9_xkSH0POngCwY_gKLpOMqT_cpa1LH5sRq9P1kjwleKiFJEdjL9U7E9SrX3ANTJDKl1KKcArDl9c0-WTqZcFNt3adHo3rho_RdMSzO"
                                        alt="Young Revanth Reddy"
                                        className="w-full h-auto rounded-xl shadow-md border border-gray-200"
                                    />
                                </div>
                            </div>

                            {/* Section 2: RSS to Congress */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                <Flag className="w-6 h-6 text-orange-600" />
                                ఆర్ఎస్ఎస్ (RSS) నుండి కాంగ్రెస్ (Congress) వరకు..
                            </h3>
                            <p className="mb-6">
                                రేవంత్ రెడ్డి రాజకీయ ప్రయాణం బహుముఖమైనది. మొదట్లో ఆర్ఎస్ఎస్ (RSS) లో చేరిన ఆయన, ఆ తర్వాత టీఆర్ఎస్ (TRS) లో పనిచేశారు. ఆపై 2007లో టీడీపీ (TDP) లో చేరారు.
                            </p>
                            <p className="mb-10">
                                2007 నుండి 2017 వరకు దాదాపు పదేళ్ల పాటు టీడీపీలోనే కొనసాగారు. అయితే, రాష్ట్ర విభజన జరగడం, టీడీపీ శాసనసభా పక్షం టీఆర్ఎస్‌లో విలీనం కావడం, 'ఓటుకు నోటు' కేసులో ఆయన అరెస్ట్ కావడం వంటి వేగవంతమైన పరిణామాలు చోటుచేసుకున్నాయి. ఈ నేపథ్యంలో టీడీపీలో ఉంటూ టీఆర్ఎస్‌ను బలంగా ఢీకొట్టడం కష్టమని భావించి, ఆయన ఆ పార్టీకి రాజీనామా చేశారు. చంద్రబాబు నాయుడు గారికి తన రాజీనామా లేఖను అందించి, 2017లో కాంగ్రెస్ పార్టీలో చేరారు. ఇలా ప్రజాక్షేత్రంలో ప్రజల కోసం పోరాడేందుకు ఆయన వివిధ రాజకీయ వేదికలను ఎంచుకుంటూ వచ్చారు.
                            </p>

                            {/* Image 2 - TDP Era/Garlands */}
                            <div className="my-10 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img
                                    src="https://blogger.googleusercontent.com/img/a/AVvXsEgv87WfrwdoC2ubNnyudYWlf34XgnVqSJYnfUQ0TryTlhlC0QXqE5oe-3XQp-EAEzap0UGP6x1pI0EI8F93-RCCGg_RCbIczOsLxO2UIkTahHd8WpcCBMg-lsZummOlIm_F5_eRGs9sb5BTdEuQ1xkM9m_U8LzPiMhAVcj7dQndoOneqKhskNt8EUP0mmxm"
                                    alt="Revanth Reddy Early Political Career"
                                    className="w-full h-auto object-cover max-h-[500px]"
                                />
                            </div>

                            {/* Section 3: Growth & Phases */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                సామాన్యుడి నుండి అసామాన్యుడిగా..
                            </h3>
                            <p className="mb-6">
                                జిల్లా పరిషత్ స్కూల్ చదువు నుండి జడ్పీటీసీగా మారిన ప్రయాణం ఒకెత్తయితే.. జడ్పీటీసీ స్థాయి నుండి రాష్ట్ర ముఖ్యమంత్రి (CM) వరకు సాగిన ఆయన ప్రయాణం రాజకీయ చరిత్రలోనే అత్యున్నతమైనది.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10">
                                <h4 className="font-bold text-[#0B1B35] mb-3 text-lg">రాజకీయ ప్రయాణం (2006 - 2023)</h4>
                                <p className="mb-4">
                                    2006లో ఒక స్వతంత్ర జడ్పీటీసీగా, 2007లో స్వతంత్ర ఎమ్మెల్సీగా, 2009 మరియు 2014లో టీడీపీ ఎమ్మెల్యేగా, 2019లో ఎంపీగా, 2021లో తెలంగాణ కాంగ్రెస్ అధ్యక్షుడిగా, 2023లో కొడంగల్ ఎమ్మెల్యేగా గెలిచి కాంగ్రెస్ పార్టీని అధికారంలోకి తీసుకువచ్చి ముఖ్యమంత్రిగా బాధ్యతలు చేపట్టాడు. ఏ పదవిలో ఉన్నా, ఏ పార్టీలో ఉన్నా.. రేవంత్ రెడ్డి తనదైన శైలిలో ప్రజలను ఆకట్టుకున్నారు. ఎప్పుడూ, ఎవరికీ తలవంచలేదు. తనను నమ్ముకున్న అనుచరులను ఎన్నడూ చేయి వదలలేదు. తాను ఎదుగుతూ, తన వారిని కూడా ఎదగనివ్వడం ఆయన నైజం.
                                </p>
                                <p className="mb-4>
                                    2017లో జైలు నుండి బయటకు వచ్చిన తర్వాత ఆయన చేసిన ర్యాలీ, ప్రసంగం అప్పట్లో కొందరికి పొగరుగా అనిపించినా.. అది పొగరు కాదు, ఆయన గుండెల్లో రగిలిన ఆరాటం, ఒక <strong>రాజకీయ అగ్నిపర్వతం</strong> అని కాలక్రమేణా అందరికీ అర్థమైంది.
                                </p>
                                <p">
                                    <strong>"భవిష్యత్తులో నేను సీఎం అవుతా"</strong> అని చెప్తే, ఏదో సరదాకి అంటున్నడని అనుకున్నరు. కొందరు నవ్వుకున్నరు. తెలంగాణ రాష్ట్రానికి ముఖ్యమంత్రి అయి.. వారందరిని ఆశ్ఛర్యానికి గురిచేశాడు. తన ఆకాంక్ష, దూరదృష్టి, పోరాట పటిమ, తన ఆలోచనా విధానం ఎంత బలంగా ఉంటుందో తెలిసేలా చేశాడు.
                                </p>
                            </div>

                            {/* Section 4: Intelligence & Courage */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h4 className="font-bold text-red-700 mb-3 text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
                                        <Zap className="w-5 h-5" /> అనుముల ఇంటెలిజెన్స్.. స్ట్రాటజిస్ట్
                                    </h4>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        తనకున్న అపార రాజకీయ అనుభవంతో ప్రత్యర్థుల ఎత్తుగడలను ముందే పసిగట్టడమే కాకుండా, వారు చేసే చీకటి రాజకీయాలను సైతం ఛేదించగల బలమైన నెట్‌వర్క్ రేవంత్ రెడ్డి సొంతం. ప్రత్యర్థుల రహస్యాలను బట్టబయలు చేసి ఉక్కిరిబిక్కిరి చేస్తూ, తన రాజకీయ వ్యూహంలో చిక్కుకునేలా చేస్తాడు. అందుకే తన అనుచరులు ఆయనను "అనుముల ఇంటెలిజెన్స్", "రేవంతన్న పొలిటికల్ స్ట్రాటజీ" అని కొనియాడుతారు.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-700 mb-3 text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
                                        <ShieldCheck className="w-5 h-5" /> ఎదురు నిలబడే ధైర్యం
                                    </h4>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        కేసీఆర్ లాంటి అపర మేధావిని, చాణక్యుడిని ఎదుర్కొనే దమ్ము ఎవరికీ లేదని అందరూ అనుకుంటున్న సమయంలో రేవంత్ రెడ్డి రంగంలోకి దిగారు. <span className="italic">"మీకోసం నేనున్నా.. ఎన్ని కుట్రలు చేసినా, ఎన్ని కేసులు పెట్టినా భయపడను, ప్రలోభాలకు లొంగను, ఈ రాజకీయ రణరంగంలో చావో రేవో తేల్చుకుంటానంటూ"</span> కార్యకర్తల్లో, ప్రజల్లో కొండంత విశ్వాసాన్ని నింపాడు.
                                    </p>
                                </div>
                            </div>

                            {/* Character Attributes - Core */}
                            <div className="bg-[#0B1B35] text-white p-6 md:p-8 rounded-2xl mb-12 shadow-xl">
                                <div className="text-center p-4 md:border-l border-gray-700 mt-4 md:mt-0">
                                    <p className="font-bold text-sm md:text-base">నమ్మిన వాళ్ళని మోసం చేయలేదు. కష్టపడ్డ వాళ్ళ చేయి వదలలేదు. తనకోసం నిలబడ్డ ప్రతి ఒక్కరినీ గుర్తించి, తనని నమ్మి పని చేస్తే.. ప్రభుత్వం రాగానే వాళ్ళకి పదవులిచ్చి ఎలా న్యాయం చేస్తాడో నిరూపించుకున్నాడు.</p>
                                </div>
                            </div>

                            {/* Image 3 - Congress Yatra / Walking */}
                            <div className="my-10 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img
                                    src="https://blogger.googleusercontent.com/img/a/AVvXsEij8GekVNtU9yZ4ldLAyYBZ_cfZwE2wrpJSVXw1iIS4jmj0VAZb9n_Ju6BFS_KgpW2qlIgNnECcjf8n8HKTObuTYTEwlBfZXZH-3c52YE3oqLW1BEFc-ucE5tJZ3vodQGgcMUaLyvCFFI0nTPoTc5ELyQnvP1MDRlWt-1vr6RVxi3V2W5W-KVdf5wopySBh"
                                    alt="Revanth Reddy Congress Yatra"
                                    className="w-full h-auto object-cover max-h-[600px]"
                                />
                            </div>

                            {/* Section 5: Congress Challenges & Leadership Traits */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                <Building className="w-6 h-6 text-red-600" />
                                కాంగ్రెస్‌లో సవాళ్లు - నాయకత్వ లక్షణాలు
                            </h3>
                            <p className="mb-6">
                                టీడీపీని వీడి కాంగ్రెస్‌లో చేరిన తర్వాత, రేవంత్ రెడ్డికి ప్రత్యర్థుల కంటే సొంత పార్టీలోని నాయకుల నుండే ఎక్కువ సవాళ్లు ఎదురయ్యాయి. సీనియర్ నాయకులంతా ఏకమై ఆయనను ఒంటరి చేసే ప్రయత్నం చేశారు. ఎలాగైనా 'దొర గడీలను' బద్దలు కొట్టాలనే పట్టుదలతో, ఎవరెన్ని కుట్రలు చేసినా తన పని తాను చేసుకుంటూ వెళ్లారు. హైకమాండ్ (AICC) దృష్టిని ఆకర్షించి, పీసీసీ (PCC) అధ్యక్ష పదవిని కైవసం చేసుకున్నారు.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <p><strong>🤝 అందరిని కలుపుకుపోయే వ్యక్తిత్వం:</strong> అవసరమైన చోట స్వయంగా వారి ఇళ్లకు వెళ్లి నాయకులను బుజ్జగించి, తనతో కలిసి నడిచేలా చాకచక్యంగా వ్యవహరించాడు. అందుకే "ఎక్కడ నెగ్గాలో, ఎక్కడ తగ్గాలో తెలిసిన నాయకుడంటారు."</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <p><strong>🔥 కార్యకర్తల్లో జోష్:</strong> తన పదునైన ప్రసంగాలతో కార్యకర్తల్లో ఊపు తెచ్చారు. ఏఐసీసీ పెద్దలను వరుసగా రాష్ట్రానికి రప్పించి, భారీ సభలతో రాజకీయ సమర శంఖం పూరించారు.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <p><strong>🚶‍♂️ యాత్ర ఫర్ చేంజ్:</strong> 'యాత్ర ఫర్ చేంజ్' పేరుతో ఆయన చేసిన పాదయాత్ర, ప్రజల్లో ఆయనను అసలైన ప్రజా నాయకుడిగా నిలబెట్టింది. అధికార బీఆర్ఎస్ పార్టీ.. తనని టార్గెట్ చేసే విధంగా
                                        మాటలతో విరుచుకుపడుతూ, వారిని తన వైపు తిప్పుకున్నాడు. ప్రజల కష్టాలను తెలుసుకుంటూ, కార్యకర్తలను కలుస్తూ, స్థానిక నాయకుల్లో విశ్వాసం నింపాడు.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <p><strong>🌱 కాంగ్రెస్‌కు పునర్జీవం:</strong> అసలు ఈ రాష్ట్రంలో కాంగ్రెస్ ఉందా? గెలుస్తుందా? అనే సందేహాల నుండి.. పార్టీకి సరికొత్త జీవం పోసి, విజయ తీరాలకు చేర్చిన ఘనత రేవంత్ రెడ్డికే దక్కుతుంది.</p>
                                </div>
                            </div>
                            {/* Image 5 - Congress Yatra / Walking */}
                            <div className="my-10 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img
                                    src="https://blogger.googleusercontent.com/img/a/AVvXsEjnLtLMyw1uUPEv_qsDyZkGw7TC50b9Wtl9J7aIl6IjrPTuw2cNaBaeAnwF0037P1MTY-i78eZhekSbXL0PCl6x2ajhSMkj_C3k880Vgr34ivMTxKomTDiio_pBBOO7t9XZUfjuQ2PVXYyxrjWUVJW-oFJLLbIdlkDIM8pK7cvTE-TnJ57BLmgn7NCJXwNp"
                                    alt="Revanth Reddy Congress Social Media"
                                    className="w-full h-auto object-cover max-h-[600px]"
                                />
                            </div>

                            {/* Section 6: Social Media Trend */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border border-blue-100 mb-12 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-900">
                                    <Smartphone className="w-6 h-6 text-indigo-600" />
                                    సోషల్ మీడియా సైన్యం - నయా ట్రెండ్ పాలిటిక్స్
                                </h3>
                                <p className="mb-4 text-gray-700">
                                    ఆనాడు కాంగ్రెస్ పార్టీకి మీడియా సపోర్ట్ లేదు. అధికార బీఆర్ఎస్ పార్టీ ఒత్తిడితోనో, కాంగ్రెస్ మళ్లీ రాదన్న అపనమ్మకంతోనో కొన్ని సంస్థలు ఫోకస్ చేయలేదు. బీఆర్ఎస్ కు సొంతంగా పేపర్లు, టీవీ ఛానెళ్లు ఉన్నాయి.
                                </p>
                                <p className="font-medium text-indigo-900 border-l-4 border-indigo-500 pl-4">
                                    అప్పటికే సోషల్ మీడియా ట్రెండ్ స్టార్ట్ అవ్వడాన్ని రేవంత్ రెడ్డి ముందే పసిగట్టారు. "మాకు ఎలాంటి మీడియా సపోర్ట్ లేదు, మాకున్నది సోషల్ మీడియానే.. ఒక్కో కార్యకర్త ఒక సైనికుడై పార్టీని ప్రజల్లోకి తీసుకెళ్లాలని" సోషల్ మీడియా నాయకులకు పిలుపునిచ్చాడు.
                                </p>
                            </div>

                            {/* Section 7: Fitness & Vision */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-green-700 mb-3 text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
                                        ఫిట్‌నెస్ ముఖ్యమంత్రి
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        ఎల్లప్పుడూ ఫిట్నెస్ గా ఉంటూ చెడు వ్యసనాలను దరిదాపులకు కూడా రానివ్వకుండా యువతకు ఆదర్శంగా నిలుస్తున్నాడు. సమయం దొరికినప్పుడల్లా మైదానంలో ఫుట్‌బాల్ ఆడుతూ స్పోర్ట్స్ పట్ల తనకున్న ఇష్టాన్ని చాటుకుంటాడు.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-blue-700 mb-3 text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
                                        ప్రపంచంలో అగ్రగామిగా తెలంగాణ..
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        కొత్త తరహా రాజకీయాలతో, సరికొత్త ఆలోచనలతో తెలంగాణ స్థాయిని ప్రపంచ వేదికపై అగ్రగామిగా నిలబెట్టాలన్న ఆయన తపనకు నిదర్శనాలే.. <strong>ఫ్యూచర్ సిటీ (Future City)</strong> ప్లానింగ్ మరియు <strong>మూసీ నది పునరుజ్జివం</strong> వంటి చారిత్రాత్మక నిర్ణయాలు!
                                    </p>
                                </div>
                            </div>

                            {/* Image 4 - Congress Yatra / Walking */}
                            <div className="my-10 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <img
                                    src="https://blogger.googleusercontent.com/img/a/AVvXsEjsFEV_2wbniUyRaRlN8J0a2RiUxUrhoYJKTo87tUeMQipShrbkbGNhIO57yEHyqMFf3TsfbXEtbD35_tDTlouo_2aBZrShHyUF2YUVFtxWyQHg4ItkSD6nqb2HZQfyfPdaC7fz7BsvI8DywG4vr0XE7V2SPLiqK4nTPIg8nHsiq1wffus7mzLDHZl3DMsO"
                                    alt="Revanth Reddy Congress Yatra"
                                    className="w-full h-auto object-cover max-h-[600px]"
                                />
                            </div>

                            {/* Section 8: Historic Victory */}
                            <h3 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mt-12 mb-6 flex items-center gap-2 border-b pb-2`}>
                                <Trophy className="w-6 h-6 text-[#D4AF37]" />
                                చారిత్రక విజయం (2006 జూలై 4 - 2023 డిసెంబర్ 7)
                            </h3>
                            <p className="mb-6">
                                కేవలం పదిహేడున్నర సంవత్సరాల స్వల్ప కాలంలోనే ఒక రాష్ట్రానికి ముఖ్యమంత్రి కావడం సాధారణ విషయం కాదు. అది కూడా గతంలో ఎలాంటి మంత్రి పదవులు చేపట్టకుండా, నేరుగా ముఖ్యమంత్రి పీఠాన్ని అధిరోహించిన అరుదైన నాయకుడు రేవంత్ రెడ్డి.
                            </p>
                            <p className="mb-10">
                                <span className="italic">"ఎన్నిరోజులు పార్టీలో ఉన్నావన్నది కాదు, నువ్వు పట్టుకున్న జెండా గెలుపు కోసం ఎంత పోరాటం చేశావన్నదే ముఖ్యం"</span> అనే సూత్రాన్ని ఆయన నమ్మారు. 2022లో రాహుల్ గాంధీ చేపట్టిన 'భారత్ జోడో యాత్ర'ను విజయవంతం చేసి నమ్మకాన్ని పెంచుకున్నారు. చివరకు 2023 అసెంబ్లీ ఎన్నికల్లో కాంగ్రెస్‌ను గెలిపించి, ముఖ్యమంత్రిగా చరిత్ర సృష్టించారు.
                            </p>

                            <div className="bg-green-100 p-6 rounded-xl text-center shadow-inner border border-green-200 mb-8">
                                <p className="text-lg md:text-xl font-bold text-green-900 leading-relaxed">
                                    ప్రజా జీవితంలో విజయవంతంగా 20 సంవత్సరాల రాజకీయ ప్రస్థానాన్ని పూర్తి చేసుకున్న సందర్భంగా.. గౌరవనీయులైన ముఖ్యమంత్రి శ్రీ ఎనుముల రేవంత్ రెడ్డి గారికి INK తెలంగాణ (Ink Telangana) తరఫున హృదయపూర్వక శుభాకాంక్షలు తెలియజేస్తున్నాము!
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
                                        ఈ స్ఫూర్తిదాయక ప్రయాణాన్ని షేర్ చేయండి!
                                    </h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg">
                                        ఎన్నో అవరోధాలను దాటి ముఖ్యమంత్రి స్థాయికి ఎదిగిన శ్రీ రేవంత్ రెడ్డి గారి ప్రస్థానం నేటి యువతకు స్ఫూర్తి. ఈ కథనాన్ని మీ వాట్సాప్, సోషల్ మీడియాలో పంచుకోండి.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleShare}
                                            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
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
            {
                showShareToast && (
                    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-5 z-[100] flex items-center gap-2 font-medium border border-gray-800">
                        <Share2 className="w-4 h-4 text-[#D4AF37]" />
                        లింక్ కాపీ చేయబడింది! (Link Copied!)
                    </div>
                )
            }
        </div >
    );
}