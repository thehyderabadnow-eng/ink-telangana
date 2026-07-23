"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Clock, MessageCircle, PenTool,
    BookOpen, Layers, MapPin, ShieldAlert, Sparkles, Share2, ArrowRight,
    Info
} from 'lucide-react';
import ReadOnlyWrapper from './ReadOnlyWrapper';
import BigShareButton from '@/components/BigShareButton';

export default function ReservationSeriesChapter2() {
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
        title: "చాప్టర్ 2: భారతీయ రిజర్వేషన్ల సమగ్ర విశ్లేషణ!",
        excerpt: "మొదటి అధ్యాయంలో మనం వేసుకున్న 32 కీలక ప్రశ్నలకు చారిత్రక ఆధారాలు, రాజ్యాంగ నిబంధనలు మరియు వాస్తవాలతో కూడిన నిఖార్సయిన సమాధానాలు.",
    };

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

    // Q&A డేటాను విభాగాలుగా విభజించడం
    const sections = [
        {
            title: "చరిత్ర మరియు నేపథ్యం",
            icon: <BookOpen className="w-6 h-6 text-blue-600" />,
            bgColor: "bg-blue-50/50",
            borderColor: "border-blue-200",
            titleColor: "text-blue-900",
            qas: [
                {
                    q: "1. భారతదేశంలో రిజర్వేషన్లు ఎప్పుడు ప్రారంభమయ్యాయి?",
                    a: "భారతదేశంలో ఆధునిక రిజర్వేషన్ల ముసాయిదా బ్రిటిష్ కాలంలోనే ప్రారంభమైంది. 1882లో హంటర్ కమిషన్ ముందు మహాత్మా జ్యోతిరావ్ పూలే ఈ డిమాండ్ ఉంచారు. స్వాతంత్య్రం తర్వాత, రాజ్యాంగం అమలులోకి వచ్చిన జనవరి 26, 1950 నుండి అధికారికంగా, రాజ్యాంగబద్ధమైన రిజర్వేషన్లు ప్రారంభమయ్యాయి."
                },
                {
                    q: "2. రిజర్వేషన్ల వ్యవస్థను మొదట ఎవరు ప్రారంభించారు?",
                    a: "1902లో కొల్హాపూర్ సంస్థానాధీశుడు ఛత్రపతి సాహు మహరాజ్ మొట్టమొదటిసారిగా బ్రాహ్మణేతరుల కోసం ఉద్యోగాల్లో 50% రిజర్వేషన్లు అమలు చేశారు. స్వాతంత్య్రానంతరం, డాక్టర్ బి.ఆర్. అంబేద్కర్ ఆధ్వర్యంలో రాజ్యాంగ ముసాయిదా కమిటీ దీనికి చట్టబద్ధత కల్పించింది."
                },
                {
                    q: "3. ఏ సామాజిక కారణాల వల్ల దీనిని ప్రారంభించారు?",
                    a: "శతాబ్దాలుగా అంటరానితనం, కుల వివక్ష కారణంగా విద్య, ఆర్థిక, సామాజిక రంగాలకు దూరమైన అణగారిన వర్గాలకు సమాన అవకాశాలు కల్పించడానికి, సామాజిక న్యాయం (Social Justice) చేకూర్చడానికి దీనిని ప్రారంభించారు."
                },
                {
                    q: "4. రాజ్యాంగబద్ధంగా రిజర్వేషన్ అంటే అర్థం ఏమిటి?",
                    a: "ఆర్టికల్ 15(4) సామాజికంగా, విద్యాపరంగా వెనుకబడిన వర్గాల (SC, ST, OBC) ప్రగతి కోసం విద్యాసంస్థల్లో ప్రత్యేక నిబంధనలు మరియు ప్రవేశాలు కల్పించే అధికారాన్ని ప్రభుత్వానికి ఇస్తుంది. ఆర్టికల్ 16(4) ప్రభుత్వ ఉద్యోగాలలో తగిన ప్రాతినిధ్యం లేని వెనుకబడిన తరగతుల పౌరులకు నియామకాలు లేదా పోస్టులలో రిజర్వేషన్లు కల్పించడానికి ప్రభుత్వానికి వీలు కల్పిస్తుంది."
                },
                {
                    q: "5. రిజర్వేషన్లు మొదలై ఇప్పటికి ఎన్ని సంవత్సరాలు గడిచింది, ఎంతవరకు లక్ష్యం నెరవేరింది?",
                    a: "రాజ్యాంగబద్ధంగా రిజర్వేషన్లు మొదలై 76 సంవత్సరాలు గడిచింది. రాజకీయ ప్రాతినిధ్యం, ప్రభుత్వ ఉద్యోగాల్లో ఎస్సీ, ఎస్టీ, బీసీ వర్గాల భాగస్వామ్యం పెరగడం వంటి లక్ష్యాలు కొంతవరకు నెరవేరాయి. కానీ, సామాజిక అసమానతలు, అట్టడుగు వర్గాల ఆర్థిక స్థిరత్వం అనే అంతిమ లక్ష్యాలు ఇంకా పూర్తి స్థాయిలో నెరవేరలేదు."
                }
            ]
        },
        {
            title: "అమలు మరియు వర్గాలు",
            icon: <Layers className="w-6 h-6 text-emerald-600" />,
            bgColor: "bg-emerald-50/50",
            borderColor: "border-emerald-200",
            titleColor: "text-emerald-900",
            qas: [
                {
                    q: "6. ప్రస్తుతం దేశంలో ఏ ఏ రంగాల్లో రిజర్వేషన్లు కల్పించారు?",
                    a: "ప్రధానంగా మూడు రంగాల్లో: 1. ప్రభుత్వ విద్యా సంస్థల్లో ప్రవేశాలు, 2. ప్రభుత్వ ఉద్యోగాలు, 3. రాజకీయ ప్రాతినిధ్యం (లోక్‌సభ, శాసనసభలు, స్థానిక సంస్థలు)."
                },
                {
                    q: "7. ఏ ఏ సామాజిక వర్గాలకు (Castes/Communities) రిజర్వేషన్ వర్తిస్తుంది?",
                    a: "షెడ్యూల్డ్ కులాలు (SC), షెడ్యూల్డ్ తెగలు (ST), ఇతర వెనుకబడిన వర్గాలు (OBC), ఆర్థికంగా వెనుకబడిన ఉన్నత వర్గాలు (EWS), మరియు దివ్యాంగులు (PwD)."
                },
                {
                    q: "8. ఏ ఏ వర్గాలకు ఎంత శాతం రిజర్వేషన్లు కల్పించారు?, ఏ ఏ విభాగాల్లో కల్పించారు?",
                    a: "కేంద్ర ప్రభుత్వ ఉద్యోగాలు మరియు విద్యాసంస్థల్లో: OBC: 27%, SC: 15%, EWS: 10%, ST: 7.5% (మొత్తం: 59.5%). దివ్యాంగులకు సమాంతర (Horizontal) రిజర్వేషన్ ఉంటుంది. హారిజాంటల్ రిజర్వేషన్ మహిళలు, దివ్యాంగులు, మాజీ సైనికులు వంటి ప్రత్యేక వర్గాలకు అన్ని సామాజిక వర్గాలలో (OC, OBC, SC, ST) అంతర్గతంగా కల్పించే కోటా. ఇది వర్టికల్ రిజర్వేషన్‌కు అదనం కాదు, ప్రతి కేటగిరీలో నిర్దేశిత శాతం (ఉదాహరణకు 33% మహిళలు) అభ్యర్థులు ఖచ్చితంగా ఎంపికయ్యేలా చూసే ప్రక్రియ. వర్టికల్ రిజర్వేషన్లు ఆర్టికల్ 16(4) కిందకు వస్తే, హారిజాంటల్ రిజర్వేషన్లు ఆర్టికల్ 15(3) మరియు ఆర్టికల్ 16(1) పరిధిలోకి వస్తాయి."
                },
                {
                    q: "9. జనరల్ కేటగిరీ (General Category) అంటే ఏంటి? ఇందులో ఎవరెవరు అర్హులు?",
                    a: "దీనిని అన్‌రిజర్వ్‌డ్ (Unreserved/Open) కేటగిరీ అంటారు. ఇది ఏ ఒక్క వర్గానికో రిజర్వ్ చేయబడదు. SC, ST, OBC, EWS తో సహా అత్యుత్తమ మెరిట్ (మార్కులు) సాధించిన ఎవరైనా ఇందులో సీటు లేదా ఉద్యోగం పొందడానికి అర్హులే."
                },
                {
                    q: "10. క్రీమీలేయర్ (Creamy Layer) అంటే ఏమిటి? ఇది ప్రస్తుతం ఎవరికి వర్తిస్తుంది?",
                    a: "వెనుకబడిన వర్గాలలో ఆర్థికంగా, సామాజికంగా స్థిరపడిన ఉన్నత శ్రేణిని 'క్రీమీలేయర్' అంటారు. ఇది ప్రస్తుతం OBC వర్గాలకు మాత్రమే వర్తిస్తుంది. కుటుంబ వార్షిక ఆదాయం రూ. 8 లక్షలు దాటిన OBCలు క్రీమీలేయర్ కిందకు వస్తారు, వీరికి రిజర్వేషన్ వర్తించదు (జనరల్ కేటగిరీగా పరిగణిస్తారు)."
                },
                {
                    q: "11. క్రీమీలేయర్ వల్ల ఉపయోగం ఏంటి?",
                    a: "రిజర్వేషన్ ఫలాలు ఒకే వర్గంలోని ధనవంతులు, ఉన్నత స్థానాల్లో ఉన్నవారు పదేపదే అనుభవించకుండా అడ్డుకట్ట వేస్తుంది. ఆ వర్గంలోని అత్యంత పేద, వెనుకబడిన వారికి రిజర్వేషన్ అందేలా చేస్తుంది."
                }
            ]
        },
        {
            title: "తెలంగాణలో రిజర్వేషన్ల స్థితి",
            icon: <MapPin className="w-6 h-6 text-purple-600" />,
            bgColor: "bg-purple-50/50",
            borderColor: "border-purple-200",
            titleColor: "text-purple-900",
            qas: [
                {
                    q: "12. తెలంగాణలో రిజర్వేషన్ల పరిస్థితి ఏంటి?",
                    a: "రాష్ట్ర జనాభా నిష్పత్తికి అనుగుణంగా తెలంగాణలో రిజర్వేషన్ల శాతం 50% పరిమితిని దాటింది (మొత్తం 64%)."
                },
                {
                    q: "13. తెలంగాణలో ఏ ఏ వర్గాలకు, ఏ ఏ రంగాల్లో రిజర్వేషన్ కల్పించారు? ఎవరు కల్పించారు? ఎప్పుడు కల్పించారు?",
                    a: "తెలంగాణలో విద్యా, ఉద్యోగ రంగాల్లో: BC: 29% (A-7%, B-10%, C-1%, D-7%, E-4%). BC-E (ముస్లిం మైనారిటీలు) రిజర్వేషన్‌ను 2004లో ఉమ్మడి రాష్ట్రంలో వై.ఎస్. రాజశేఖర్ రెడ్డి ప్రభుత్వం తెచ్చింది. SC: 15%, ST: 10% (గతంలో 6% ఉండేది, 2022లో కె.సి.ఆర్ ప్రభుత్వం 10%కి పెంచింది). EWS: 10% (2021 నుండి తెలంగాణ ప్రభుత్వం అమలు చేస్తోంది)."
                },
                {
                    q: "14. రిజర్వేషన్ల వల్ల ఎంతవరకు ఆయా వర్గాల కుటుంబాల్లో, జీవితాల్లో మార్పు వచ్చింది?",
                    a: "చాలా వరకు మార్పు వచ్చింది. ఎస్సీ, ఎస్టీ, బీసీ వర్గాల నుండి ఒక మధ్యతరగతి (Middle-class) ఆవిర్భవించింది. తరతరాలుగా చదువుకు దూరమైన వారు డాక్టర్లు, ఇంజనీర్లు, ఐఏఎస్ అధికారులు అయ్యారు. అయితే, మారుమూల గ్రామాల్లోని నిరుపేదలకు ఇంకా ఈ ఫలాలు పూర్తిగా అందలేదు."
                },
                {
                    q: "15. ముల్కీ, నాన్-ముల్కీ అంటే ఏమిటి?",
                    a: "'ముల్కీ' అంటే స్థానికుడు. నిజాం కాలంలో స్థానికులకే ఉద్యోగాలు ఇవ్వాలనే ఉద్దేశ్యంతో 1919లో ముల్కీ నిబంధనలు తెచ్చారు. 'నాన్-ముల్కీ' అంటే ఇతర ప్రాంతాల నుండి వలస వచ్చిన వారు."
                },
                {
                    q: "16. జోన్లు ఎన్ని ఉన్నాయి? జోనల్ వ్యవస్థ ఎప్పుడు తీసుకువచ్చారు? ఎవరు తీసుకువచ్చారు? ఎందుకు తీసుకువచ్చారు?",
                    a: "తెలంగాణలో కొత్తగా 7 జోన్లు, 2 మల్టీ-జోన్లు ఉన్నాయి. స్థానిక యువతకు వారి సొంత జిల్లా/జోన్లలో ఉద్యోగ అవకాశాలు 95% దక్కాలనే ఉద్దేశ్యంతో అప్పటి ముఖ్యమంత్రి కె.సి.ఆర్ 2018లో రాష్ట్రపతి ఉత్తర్వుల (Presidential Order) ద్వారా దీనిని తీసుకువచ్చారు."
                },
                {
                    q: "17. జోనల్ వ్యవస్థ వల్ల ఎవరికి లాభం? ఎవరికి నష్టం?",
                    a: "లాభం: స్థానికులకు (ఆయా జిల్లాల/జోన్ల అభ్యర్థులకు 95% ఉద్యోగాలు గ్యారెంటీ). నష్టం: రాష్ట్రవ్యాప్తంగా ప్రతిభావంతులైన అభ్యర్థులు ఇతర జోన్లలో ఉద్యోగం పొందాలంటే కేవలం 5% ఓపెన్ కోటాలో మాత్రమే పోటీ పడాల్సి ఉంటుంది."
                },
                {
                    q: "18. నాన్-లోకల్ (Non-Local) కి ఏ ఏ రంగాల్లో అవకాశాలు కల్పించారు? ఎంత శాతం కల్పించారు?",
                    a: "కొత్త జోనల్ విధానం ప్రకారం తెలంగాణ ప్రభుత్వ ఉద్యోగాల్లో నాన్-లోకల్స్ (ఓపెన్ కోటా) కు 5% అవకాశాలు కల్పించారు. మెరిట్ ఆధారంగా ఇతర రాష్ట్రాల వారు లేదా ఇతర జోన్ల వారు ఇందులో పోటీపడవచ్చు."
                }
            ]
        },
        {
            title: "సడలింపులు మరియు కొత్త పరిణామాలు",
            icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
            bgColor: "bg-amber-50/50",
            borderColor: "border-amber-200",
            titleColor: "text-amber-900",
            qas: [
                {
                    q: "19. వయోపరిమితి సడలింపు, ప్రయత్నాల సడలింపు, ఫీజు తగ్గింపు, మార్కుల వ్యత్యాసంలో ఎవరెవరికి ఎలాంటి సడలింపులు ఉన్నాయి?",
                    a: "వయోపరిమితి: ప్రభుత్వ ఉద్యోగాలకు గరిష్ట వయస్సులో OBC లకు 3 ఏళ్లు, SC/ST లకు 5 ఏళ్లు సడలింపు ఉంటుంది. ప్రయత్నాలు (UPSC వంటివి): General-6, OBC-9, SC/ST- అపరిమితం (వయోపరిమితి ముగిసే వరకు). ఫీజు/మార్కులు: SC/ST, మరియు దివ్యాంగులకు ఫీజు మినహాయింపు ఉంటుంది. కటాఫ్ మార్కులు జనరల్ కంటే OBC, SC, ST లకు తక్కువగా ఉంటాయి."
                },
                {
                    q: "20. కేంద్ర మరియు తెలంగాణ రాష్ట్ర ప్రభుత్వ రిజర్వేషన్లలో తేడా ఏంటి?",
                    a: "కేంద్రంలో OBC లకు ఏకమొత్తంగా 27% ఉంటుంది. కానీ తెలంగాణలో BC లను ఏ, బి, సి, డి, ఈ (A,B,C,D,E) వర్గాలుగా విభజించి మొత్తం 29% ఇస్తారు. కేంద్రంలో ముస్లింలకు ప్రత్యేక కోటా లేదు, కానీ రాష్ట్రంలో BC-E కింద 4% ఉంది. కేంద్రంలో ST లకు 7.5% ఉంటే, తెలంగాణలో 10% ఉంది."
                },
                {
                    q: "21. EWS రిజర్వేషన్లు అంటే ఏమిటి? ఎవరు తీసుకువచ్చారు? ఎప్పుడు తీసుకువచ్చారు?",
                    a: "ఆర్థికంగా వెనుకబడిన వర్గాల (Economically Weaker Sections) రిజర్వేషన్. జనరల్ కేటగిరీలోని పేదల (వార్షిక ఆదాయం 8 లక్షల లోపు) కోసం నరేంద్ర మోదీ ప్రభుత్వం 103వ రాజ్యాంగ సవరణ ద్వారా 2019లో దీనిని తీసుకువచ్చింది."
                },
                {
                    q: "22. EWS తీసుకురావడం వల్ల రిజర్వేషన్ల ప్రాథమిక సిద్ధాంతం మారిందా?",
                    a: "అవును. అంతకుముందు రిజర్వేషన్లు కేవలం \"సామాజిక మరియు విద్యాపరమైన\" వెనుకబాటుతనం (Social and Educational Backwardness) ఆధారంగానే ఇవ్వబడేవి. EWS తో మొట్టమొదటిసారిగా కేవలం \"ఆర్థిక స్థితి\" (Economic Status) ఆధారంగా రిజర్వేషన్ ఇవ్వడం మొదలైంది."
                },
                {
                    q: "23. ప్రైవేట్ రంగంలో ఉద్యోగాల రిజర్వేషన్ డిమాండ్ వెనుక ఉన్న న్యాయబద్ధత ఎంతవరకు ఉంది?",
                    a: "ప్రభుత్వ రంగాన్ని ప్రైవేటీకరిస్తున్నందున, ఉద్యోగ అవకాశాలు ప్రైవేట్ రంగంలోనే ఎక్కువగా ఉన్నాయి. ప్రైవేట్ సంస్థలు కూడా ప్రభుత్వ భూములు, రాయితీలు వాడుకుంటున్నందున సామాజిక బాధ్యత వహించాలని కోరుతూ ఈ డిమాండ్ వస్తోంది. అయితే దీనివల్ల నైపుణ్యం, ఉత్పాదకత దెబ్బతింటాయని పరిశ్రమల వర్గాలు వాదిస్తున్నాయి."
                }
            ]
        },
        {
            title: "భవిష్యత్తు మరియు విశ్లేషణ",
            icon: <Sparkles className="w-6 h-6 text-rose-600" />,
            bgColor: "bg-rose-50/50",
            borderColor: "border-rose-200",
            titleColor: "text-rose-900",
            qas: [
                {
                    q: "24. రిజర్వేషన్ల ప్రయోజనాలు ఒకే కుటుంబంలో తరతరాలుగా అందకుండా ఎలా చూడటం సాధ్యం?",
                    a: "OBC లకు అమలు చేస్తున్న \"క్రీమీలేయర్\" విధానాన్ని పటిష్టంగా అమలు చేయడం. అలాగే, ఈ మధ్య సుప్రీంకోర్టు సూచించినట్లు SC/ST వర్గాల్లో కూడా ఉపవర్గీకరణ (Sub-categorization) చేయడం ద్వారా మొదటిసారి ప్రయోజనం పొందుతున్న వారికి ప్రాధాన్యత ఇవ్వవచ్చు."
                },
                {
                    q: "25. కులగణన (Caste Census) డేటా రిజర్వేషన్ల శాతాలను మార్చడానికి ఏ విధంగా ఉపయోగపడుతుంది?",
                    a: "ఏ కులం జనాభా ఎంత ఉందో శాస్త్రీయంగా తేలితే, జనాభా దామాషా ప్రకారం రిజర్వేషన్ల శాతాలను హేతుబద్ధీకరించవచ్చు. (ఉదాహరణకు బీసీలు 50% పైగా ఉంటే, వారికి కోటాను పెంచడానికి ఇది న్యాయపరమైన సాక్ష్యంగా పనిచేస్తుంది)."
                },
                {
                    q: "26. అసలు ప్రస్తుత పరిస్థితుల్లో రిజర్వేషన్లు ఉండాలా? వద్దా?",
                    a: "రాజ్యాంగం ప్రకారం, సమాజంలో కుల వివక్ష, అంటరానితనం, సామాజిక అసమానతలు పూర్తిగా తొలగిపోయి అందరికీ సమాన అవకాశాలు దక్కేంతవరకు రిజర్వేషన్లు అవసరం. కానీ అవి అర్హులైన పేదలకు చేరేలా సంస్కరణలు అవసరం."
                },
                {
                    q: "27. రిజర్వేషన్ల వల్ల ఎవరికి లాభం? ఎవరికి నష్టం?",
                    a: "చారిత్రకంగా అణచివేతకు గురైన వర్గాలకు లాభం చేకూరుతుంది. కానీ 50% కు పైగా సీట్లు రిజర్వ్ కావడం వల్ల, జనరల్ కేటగిరీకి చెందిన ప్రతిభావంతులైన పేద/మధ్యతరగతి అభ్యర్థులు తీవ్రమైన పోటీని ఎదుర్కొని సీట్లు/ఉద్యోగాలు కోల్పోయే పరిస్థితులు నష్టంగా చెప్పవచ్చు."
                },
                {
                    q: "28. ఇందులో చేయవలసిన మార్పులు ఏంటి?",
                    a: "అర్హులైన వారికే అందేలా క్రీమీలేయర్ పరిమితులను ఎప్పటికప్పుడు సమీక్షించడం. ప్రభుత్వ పాఠశాలల నాణ్యతను పెంచడం ద్వారా రిజర్వేషన్ అవసరం లేని విధంగా ప్రతిభను పెంపొందించడం. కులగణన చేసి ఉపవర్గీకరణ అమలు చేయడం."
                },
                {
                    q: "29. ఇంకా ఏ ఏ రంగాలకు ఇది విస్తరించాలి?",
                    a: "మహిళా రిజర్వేషన్లను (చట్టసభల్లో 33%) త్వరగా అమలు చేయాలి. అలాగే ఉన్నత న్యాయవ్యవస్థ (హైకోర్టు, సుప్రీంకోర్టు న్యాయమూర్తుల నియామకాల్లో - కొలీజియం వ్యవస్థ) లో కింది వర్గాలకు ప్రాతినిధ్యం పెంచాలనే డిమాండ్లు ఉన్నాయి."
                },
                {
                    q: "30. ఏ ఏ రంగాలలో ఇది తగ్గించాలి / రద్దు చేయాలి?",
                    a: "అత్యున్నత స్థాయి శాస్త్ర సాంకేతిక పరిశోధనలు (ISRO, DRDO లాంటివి), సూపర్-స్పెషాలిటీ వైద్య విద్య, మరియు సైనిక రంగాల్లో మెరిట్ కే ప్రాధాన్యత, ప్రమోషన్లలో (పదోన్నతుల్లో) రిజర్వేషన్ల రద్దుపై కూడా చర్చ నడుస్తోంది."
                },
                {
                    q: "31. ఇప్పటివరకు ఏ ఏ వర్గాల వాళ్ళు ప్రభుత్వ రంగ సంస్థల్లో ఉద్యోగాలు చేస్తున్నారు?",
                    a: "రోస్టర్ విధానం (Roster System) ప్రకారం ప్రభుత్వ రంగ సంస్థల్లో (PSUs) SC, ST, OBC, EWS మరియు జనరల్ (ఓపెన్) కేటగిరీకి చెందిన వారందరూ వారి వారి శాతాల ప్రకారం ఉద్యోగాలు చేస్తున్నారు. అయితే క్లాస్-1 మరియు బోర్డు స్థాయి ఉద్యోగాల్లో జనరల్ కేటగిరీ వారే అధికంగా ఉన్నారు."
                },
                {
                    q: "32. ఇప్పటి వరకు ఎంతమంది రిజర్వేషన్ల వల్ల ఏ ఏ రంగాల్లో, ఏ ఏ వ్యవస్థల్లో, ఏ ఏ వర్గాల వాళ్ళు లబ్ధి పొందారు?",
                    a: "గత ఏడు దశాబ్దాల్లో విద్యా, ఉద్యోగ, రాజకీయ రంగాల్లో కోట్లాది మంది (లక్షలాది కుటుంబాలు) లబ్ధి పొందారు. SC, ST, OBC వర్గాలకు చెందిన వారు డాక్టర్లు, ఇంజనీర్లు, సివిల్ సర్వెంట్లు, మంత్రులు, రాష్ట్రపతులు కాగలిగారు. భారతదేశంలో ఒక బలమైన సామాజిక మధ్యతరగతి ఆవిర్భావానికి రిజర్వేషన్లు ప్రధాన కారణం."
                }
            ]
        }
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
                                    <span>July 23, 2026</span>
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
                            <div className="border-l-4 border-[#D4AF37] bg-amber-50/50 p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
                                <p className="font-medium text-gray-800 italic text-lg md:text-xl leading-relaxed">
                                    "మొదటి అధ్యాయంలో మనం లేవనెత్తిన 32 కీలక ప్రశ్నలకు ఈ అధ్యాయంలో చారిత్రక ఆధారాలు, రాజ్యాంగ నిబంధనలు మరియు వాస్తవాలతో కూడిన సమాధానాలను అందిస్తున్నాం. సమాజంలోని ప్రతి వర్గం ఈ వాస్తవాలను తెలుసుకోవడం అత్యంత అవసరం."
                                </p>
                            </div>

                            {/* Render Each Section dynamically */}
                            {sections.map((section, idx) => (
                                <div key={idx} className={`mb-12 border ${section.borderColor} ${section.bgColor} rounded-2xl p-6 md:p-8 shadow-sm`}>
                                    <div className="flex items-center gap-3 border-b border-black/10 pb-4 mb-6">
                                        <div className="bg-white p-2.5 rounded-xl shadow-sm shrink-0">
                                            {section.icon}
                                        </div>
                                        <h2 className={`text-xl md:text-2xl font-serif font-bold ${section.titleColor}`}>
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-8">
                                        {section.qas.map((qa, qIdx) => (
                                            <div key={qIdx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#D4AF37]/50 transition-colors">
                                                <h3 className={`text-lg md:text-xl font-bold ${brandClasses.textNavy} mb-3`}>
                                                    {qa.q}
                                                </h3>
                                                <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed pt-1" style={{ textJustify: 'inter-word' }}>
                                                    {qa.a}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Chapter 3 Announcement / Teaser */}
                            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                                    <div className="bg-blue-100 p-3 rounded-xl shrink-0 self-start">
                                        <BookOpen className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                                            <ArrowRight className="w-5 h-5 text-blue-600" />
                                            తర్వాతి అధ్యాయం (Chapter 3) లో...
                                        </h3>
                                        <p className="text-blue-800 md:text-lg font-medium leading-relaxed">
                                            ప్రశ్నలకు సమాధానాలు తెలుసుకున్నాం కదా, ఆ <strong>తర్వాతి అధ్యాయంలో (Chapter 3)</strong> తెలంగాణ రాష్ట్రంలో 2024లో జరిగిన కుల గణన వివరాల గురించి విశ్లేషిద్దాం.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Disclaimer */}
                            <div className="mt-12 bg-gray-50 border border-gray-200 p-5 md:p-6 rounded-xl shadow-sm text-sm text-gray-500 leading-relaxed">
                                <div className="flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-gray-400" />
                                    <span className="font-bold text-gray-700 uppercase tracking-wider">గమనిక (Disclaimer):</span>
                                </div>
                                <p style={{ textJustify: 'inter-word' }} className="text-justify">
                                    ఈ వ్యాసంలో పొందుపరిచిన రిజర్వేషన్ల శాతాలు, చారిత్రక అంశాలు మరియు విశ్లేషణ అంతా పబ్లిక్ డొమైన్ (ఇంటర్నెట్, పుస్తకాలు, పాత వార్తా కథనాలు) నుండి కేవలం పాఠకులకు ప్రాథమిక అవగాహన కల్పించడం కోసం మాత్రమే సేకరించబడినది. ప్రభుత్వ చట్టాలు, సుప్రీంకోర్టు తీర్పులు మరియు జీవోల కారణంగా రిజర్వేషన్ల శాతాలు లేదా నిబంధనల్లో ఎప్పటికప్పుడు మార్పులు జరిగే అవకాశం ఉంది. ఇందులోని సమాచారంలో ఏవైనా సాంకేతిక లేదా గణాంకపరమైన తప్పులు దొర్లితే దానికి <strong>'ఇంక్ తెలంగాణ'</strong> లేదా రచయిత చట్టపరంగా బాధ్యత వహించరు. అధికారిక మరియు ఖచ్చితమైన సమాచారం కోసం సంబంధిత ప్రభుత్వ గెజిట్‌లను లేదా నోటిఫికేషన్లను పరిశీలించగలరు.
                                </p>
                            </div>

                            {/* Author Footer Badge */}
                            <div className="mt-12 flex justify-end border-t border-gray-100 pt-8 not-prose">
                                <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                                    <div className={`p-3 rounded-full ${brandClasses.bgNavy}`}>
                                        <PenTool className="w-5 h-5 text-[#D4AF37]" />
                                    </div>
                                    <div className="text-left">
                                        {/* <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">పరిశోధన & రచన (Author)</p> */}
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
                                        సమాజంలో ఉన్న ఎన్నో అపోహలను తొలగించడానికి ఈ ఆధారాలు ఎంతగానో ఉపయోగపడతాయి. రిజర్వేషన్లపై రూపొందించిన ఈ ప్రత్యేక చాప్టర్ 2 విశ్లేషణను మీ వాట్సాప్ గ్రూపులలో షేర్ చేయండి.
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