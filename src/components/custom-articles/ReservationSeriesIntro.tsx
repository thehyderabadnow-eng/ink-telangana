"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Clock, MessageCircle, PenTool,
    Sparkles, Send, FileQuestion, BookOpen, ArrowRight, Share2
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper';
import BigShareButton from '@/components/BigShareButton';

export default function ReservationSeriesIntro() {
    const [currentUrl, setCurrentUrl] = useState('');
    const [userQuestion, setUserQuestion] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        title: "చాప్టర్ 1: భారతీయ రిజర్వేషన్ల పై సమగ్ర ప్రశ్నావళి!",
        excerpt: "రిజర్వేషన్ల గురించి ఒకే వ్యాసంలో చెప్పడం అసాధ్యం. అందుకే ఈ సిరీస్ మొదటి అధ్యాయంలో సమాజం ముందున్న కీలక ప్రశ్నలను సిద్ధం చేశాం.",
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userQuestion.trim()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setUserQuestion('');
            }, 4000);
        }
    };

    // టాప్ షేర్ బటన్ కోసం ఫంక్షన్
    const handleTopShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: articleDetails.title,
                    text: articleDetails.excerpt,
                    url: window.location.href
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(`${articleDetails.title}\n\n${window.location.href}`);
            alert("లింక్ కాపీ చేయబడింది! (Link Copied!)");
        }
    };

    // అన్ని ప్రశ్నలను ఒకే వరుసలో (Single Array) మార్చడం జరిగింది
    const allQuestions = [
        "భారతదేశంలో రిజర్వేషన్లు ఎప్పుడు ప్రారంభమయ్యాయి?",
        "రిజర్వేషన్ల వ్యవస్థను మొదట ఎవరు ప్రారంభించారు?",
        "ఏ సామాజిక కారణాల వల్ల దీనిని ప్రారంభించారు?",
        "రాజ్యాంగబద్ధంగా రిజర్వేషన్ అంటే అర్థం ఏమిటి?",
        "రిజర్వేషన్లు మొదలై ఇప్పటికి ఎన్ని సంవత్సరాలు గడిచింది, ఎంతవరకు లక్ష్యం నెరవేరింది?",
        "ప్రస్తుతం దేశంలో ఏ ఏ రంగాల్లో రిజర్వేషన్లు కల్పించారు?",
        "ఏ ఏ సామాజిక వర్గాలకు (Castes/Communities) రిజర్వేషన్ వర్తిస్తుంది?",
        "ఏ ఏ వర్గాలకు ఎంత శాతం రిజర్వేషన్లు కల్పించారు?, ఏ ఏ విభాగాల్లో కల్పించారు?",
        "జనరల్ కేటగిరీ (General Category) అంటే ఏంటి? ఇందులో ఎవరెవరు అర్హులు?",
        "క్రీమీలేయర్ (Creamy Layer) అంటే ఏమిటి? ఇది ప్రస్తుతం ఎవరికి వర్తిస్తుంది?",
        "క్రీమీలేయర్ వల్ల ఉపయోగం ఏంటి?",
        "తెలంగాణలో రిజర్వేషన్ల పరిస్థితి ఏంటి?",
        "తెలంగాణలో ఏ ఏ వర్గాలకు, ఏ ఏ రంగాల్లో రిజర్వేషన్ కల్పించారు? ఎవరు కల్పించారు? ఎప్పుడు కల్పించారు?",
        "రిజర్వేషన్ల వల్ల ఎంతవరకు ఆయా వర్గాల కుటుంబాల్లో, జీవితాల్లో మార్పు వచ్చింది?",
        "ముల్కీ, నాన్-ముల్కీ అంటే ఏమిటి?",
        "జోన్లు ఎన్ని ఉన్నాయి? జోనల్ వ్యవస్థ ఎప్పుడు తీసుకువచ్చారు? ఎవరు తీసుకువచ్చారు? ఎందుకు తీసుకువచ్చారు?",
        "జోనల్ వ్యవస్థ వల్ల ఎవరికి లాభం? ఎవరికి నష్టం?",
        "నాన్-లోకల్ (Non-Local) కి ఏ ఏ రంగాల్లో అవకాశాలు కల్పించారు? ఎంత శాతం కల్పించారు?",
        "వయోపరిమితి సడలింపు (Age relaxation), ప్రయత్నాల సడలింపు (Number of attempts), ఫీజు తగ్గింపు, మార్కుల వ్యత్యాసంలో ఎవరెవరికి (ఏ ఏ వర్గాలకి) ఎలాంటి సడలింపులు ఉన్నాయి?",
        "కేంద్ర మరియు తెలంగాణ రాష్ట్ర ప్రభుత్వ రిజర్వేషన్లలో తేడా ఏంటి?",
        "EWS రిజర్వేషన్లు అంటే ఏమిటి? ఎవరు తీసుకువచ్చారు? ఎప్పుడు తీసుకువచ్చారు?",
        "ఆర్థిక ప్రాతిపదికన రిజర్వేషన్లు (EWS) తీసుకురావడం వల్ల రిజర్వేషన్ల ప్రాథమిక సిద్ధాంతం మారిందా?",
        "ప్రైవేట్ రంగంలో ఉద్యోగాల రిజర్వేషన్ డిమాండ్ వెనుక ఉన్న న్యాయబద్ధత ఎంతవరకు ఉంది?",
        "రిజర్వేషన్ల ప్రయోజనాలు ఒకే కుటుంబంలో తరతరాలుగా అందకుండా, ప్రతి తరంలో కొత్తవారికి అందేలా చూడటం ఎలా సాధ్యం?",
        "కులగణన (Caste Census) డేటా రిజర్వేషన్ల శాతాలను మార్చడానికి ఏ విధంగా ఉపయోగపడుతుంది?",
        "అసలు ప్రస్తుత పరిస్థితుల్లో రిజర్వేషన్లు ఉండాలా? వద్దా?",
        "రిజర్వేషన్ల వల్ల ఎవరికి లాభం? ఎవరికి నష్టం?",
        "ఇందులో చేయవలసిన మార్పులు ఏంటి?",
        "ఇంకా ఏ ఏ రంగాలకు ఇది విస్తరించాలి?",
        "ఏ ఏ రంగాలలో ఇది తగ్గించాలి / రద్దు చేయాలి?",
        "ఇప్పటివరకు ఏ ఏ వర్గాల వాళ్ళు ప్రభుత్వ రంగ సంస్థల్లో ఉద్యోగాలు చేస్తున్నారు?",
        "ఇప్పటి వరకు ఎంతమంది రిజర్వేషన్ల వల్ల ఏ ఏ రంగాల్లో, ఏ ఏ వ్యవస్థల్లో, ఏ ఏ వర్గాల వాళ్ళు లబ్ధి పొందారు?"
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pb-12">
            <div className="max-w-7xl mx-auto px-4 py-8">

                <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-4">

                    {/* Top Navbar Header */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors group font-semibold">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
                            </Link>
                            {/* ఇక్కడ "INK WEBISODE SERIES" తీసేసి షేర్ బటన్ యాడ్ చేశాను */}
                            <button
                                onClick={handleTopShare}
                                className="flex items-center gap-2 text-xs md:text-sm font-bold bg-[#0B1B35] text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0B1B35] transition-all shadow-sm"
                            >
                                <Share2 className="w-4 h-4" /> Share
                            </button>
                        </div>

                        <div className="mb-4">
                            <span className={`bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider inline-block mb-5 animate-pulse`}>
                                INK SPECIAL
                            </span>
                            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6 text-justify whitespace-normal`} style={{ textJustify: 'inter-word' }}>
                                {articleDetails.title}
                            </h1>

                            <div className="flex items-center gap-6 text-gray-600 text-sm border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-1.5 font-medium">
                                    <Clock className="w-4 h-4 text-amber-500" />
                                    <span>July 15, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="w-full h-64 sm:h-80 md:h-[28rem] relative bg-gray-900">
                        <img
                            src="https://blogger.googleusercontent.com/img/a/AVvXsEgFQRHr1EiR63gPpFBY8QZpKm8yrOD4Zm1eoK4Ix4-u4gf6m6IM0ta6eORdOSWFrDcJNDZycdfKqe8EIX5PQNkjB8tt1RELsQvwu1YZ4Csyrov6YH8VTsDwhHDbZ_lK5tmoEhwqrJC45IlWRvnWNZmCO5kMci1xhtLQyu1A-kmNTHVHs9OQD4fEvBHVaD2j"
                            alt="Reservation concept"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <span className="text-[#0B1B35] font-serif font-bold text-2xl md:text-3xl tracking-wide drop-shadow-sm">
                                రిజర్వేషన్ల పై నిన్నటి పునాది.. నేటి వాస్తవికత.. రేపటి భవిష్యత్తు
                            </span>
                        </div>
                    </div>

                    {/* Content Wrapper */}
                    <ReadOnlyWrapper className="p-5 md:p-10">
                        <div className="text-base md:text-lg text-gray-800 leading-relaxed text-justify whitespace-normal" style={{ textJustify: 'inter-word' }}>

                            {/* Introduction Quote Block */}
                            <div className="border-l-4 border-[#D4AF37] bg-amber-50/50 p-6 md:p-8 rounded-r-2xl mb-10 shadow-sm">
                                <p className="font-medium text-gray-800 italic text-lg md:text-xl leading-relaxed">
                                    "రిజర్వేషన్ల గురించి వ్యాసం రాయడం కోసం పరిశోధన చేశాక, ఇది ఒక్క వ్యాసంలో చెప్పగలిగే విషయం కాదని, అలాగే ఇది అత్యంత సున్నితమైన మరియు వివాదాస్పదమైన అంశమని భావిస్తున్నాను. అందుకే దీనిని కొన్ని చాఫ్టర్లుగా (భాగాలుగా) రాస్తున్నాను. ఇందుకోసం నాకు ఎదురైన కొన్ని ప్రశ్నలను ముందుగానే సిద్ధం చేసుకున్నాను. వాటిని వివరిస్తూ.. దీనివల్ల కలిగే లాభాలు, నష్టాలు, చేయవలసిన మార్పుల గురించి, ప్రస్తుతం సమాజంలో ఉన్న కొన్ని విషయాలను వివరంగా చెప్పాలనుకుంటున్నాను. అందుకోసం ముందుగా ఈ కింది ప్రశ్నలను తయారు చేశాను."
                                </p>
                            </div>

                            {/* Questions List Section */}
                            <h2 className={`text-xl md:text-2xl font-bold ${brandClasses.textNavy} mb-8 flex items-center gap-2 border-b pb-3 mt-10`}>
                                <FileQuestion className="w-6 h-6 text-amber-500" />
                                ప్రశ్నల సమగ్ర జాబితా (The Master Questionnaire)
                            </h2>

                            <div className="space-y-4">
                                {allQuestions.map((q, idx) => (
                                    <div key={idx} className="flex gap-4 items-start p-4 md:p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-[#D4AF37]/50 transition-colors">
                                        <span className="text-[#D4AF37] font-bold text-xl md:text-2xl min-w-[2rem]">
                                            {idx + 1}.
                                        </span>
                                        <p className="text-gray-800 font-medium text-base md:text-lg pt-0.5">
                                            {q}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Chapter 2 Announcement / Teaser */}
                            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                                    <div className="bg-blue-100 p-3 rounded-xl shrink-0 self-start">
                                        <BookOpen className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                                            <ArrowRight className="w-5 h-5 text-blue-600" />
                                            తర్వాతి అధ్యాయం (Chapter 2) లో...
                                        </h3>
                                        <p className="text-blue-800 md:text-lg font-medium leading-relaxed">
                                            పైన పేర్కొన్న ఈ ప్రశ్నలన్నింటికీ సవివరమైన సమాధానాలను మన <strong>చాప్టర్ 2</strong> లో అందించబోతున్నాం. ఆ తర్వాతి అధ్యాయంలో (Chapter 3) రిజర్వేషన్లకు సంబంధించి ప్రస్తుతం సమాజంలో జరుగుతున్న మరొక విభిన్నమైన చర్చను విశ్లేషిద్దాం.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Call-To-Action to Contact Page */}
                            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 mt-12 shadow-xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-2xl font-serif font-bold text-[#D4AF37] mb-2 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 animate-pulse" />
                                        మీ ప్రశ్నలను కూడా పంపండి!
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        పైన ఉన్నవే కాకుండా ఇంకా ఏవైనా అదనపు ప్రశ్నలు లేదా సందేహాలు మీ దగ్గర ఉంటే మాకు పంపండి. వాటిని కూడా మా పరిశోధనలో చేర్చి, సమాధానాల కోసం మా వంతు కృషి చేస్తాం.
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="shrink-0 flex items-center gap-2 bg-[#D4AF37] text-[#0B1B35] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-500 hover:-translate-y-1 transition-all text-sm md:text-base shadow-md w-full md:w-auto justify-center"
                                >
                                    <Send className="w-5 h-5" />
                                    Contact Us
                                </Link>
                            </div>

                            {/* Author Footer Badge */}
                            <div className="mt-12 flex justify-end border-t border-gray-100 pt-8 not-prose">
                                <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                                    <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                                        <PenTool className="w-5 h-5 text-[#D4AF37]" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-bold ${brandClasses.textNavy} text-base md:text-lg`}>Vamshi BTech</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Share Callout */}
                            <div className="mt-12 bg-gradient-to-br from-[#0B1B35] to-[#12161E] rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                                    <MessageCircle className="w-32 h-32 md:w-40 md:h-40 text-[#D4AF37]" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-3xl font-serif font-bold text-[#D4AF37] mb-4">
                                        ఈ సరికొత్త వెబ్ సిరీస్‌ను అందరికీ చేరవేయండి!
                                    </h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg max-w-2xl">
                                        నిజాలు ఎప్పుడూ పరిశోధన ద్వారానే బయటకు వస్తాయి. రిజర్వేషన్లపై రాబోయే ఈ ప్రత్యేక సిరీస్ ను (చాప్టర్ 1) మీ వాట్సాప్ గ్రూపులలో షేర్ చేసి అందరినీ భాగస్వాములను చేయండి.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <BigShareButton title={articleDetails.title} excerpt={articleDetails.excerpt} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ReadOnlyWrapper>
                </article>
            </div>
        </div>
    );
}