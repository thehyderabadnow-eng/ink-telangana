import { Thought } from '@/types'; // Make sure this path matches your setup

// ---------------------------------------------------------
// 1. SHORT NEWS (For the shareable, Way2News-style graphic cards)
// ---------------------------------------------------------
export const miniNews: Thought[] = [
  {
    id: 1,
    title: "తెలంగాణలో మరో రెండు రోజులు దంచికొట్టనున్న వానలు!",
    text: "బంగాళాఖాతంలో ఏర్పడిన తీవ్ర అల్పపీడనం. ​ఆదిలాబాద్, ఆసిఫాబాద్, మంచిర్యాల, నిర్మల్, నిజామాబాద్, జగిత్యాల, సంగారెడ్డి, మెదక్, కామారెడ్డి జిల్లాలకు వాతావరణ శాఖ అలర్ట్ జారీ చేసింది. ​ఉరుములు, మెరుపులతో పాటు గంటకు 40-50 కి.మీ వేగంతో బలమైన ఈదురు గాలులు వీచే అవకాశం.  హైదరాబాద్ నగరంలో  మోస్తరు నుంచి భారీ వర్షం పడే ఛాన్స్. లోతట్టు ప్రాంతాల ప్రజలు అప్రమత్తంగా సూచించారు.",
    date: "July 05, 2026",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEihoSUTNQBjUo1V-4558y078oLSr2A6c79-CmlbkYO4RagU-nGN468KSuiqPVTTPUZcvecyfM-0CrlhjEtT0S8NuyYr5vUZilKXr1kkjx4ITny1_JiclZGeSnrMd2OPYnYNdQr7wLVlAUffGAVpqnaCNwppUrt8mAoTf1-zdFku_MlgtaCE9xiJ6L59MbGx"
    // imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTWreKJ7uGttF360OzhsjdRdj5eJXcbj6GPYj8oPIUBgtyONrfIc2tWFNr8JbHJC3xrpKZNDSfT_S21phvpxg2i5g0W4dyn86alymJTHL2xjIL3e2tpFkX6xwA8aUa1uf_5eMoDmjZPF4wM2blhUp6jgcWvqOY40tvxqihZAPfBL536yKXwA2gke2hUzM8/s320/ink-logo-compressed.png"
  }
];

// ---------------------------------------------------------
// 2. MY COMMENTS (For the casual, text-only feed)
// ---------------------------------------------------------
export const myComments: Thought[] = [
  // {
  //   id: 1,
  //   text: "ఈ రోజు స్థానిక నాయకులతో జరిగిన సమావేశంలో ఒక విషయం స్పష్టమైంది. క్షేత్రస్థాయిలో ప్రజల అవసరాలకు, పైన తీసుకునే నిర్ణయాలకు మధ్య ఇంకా గ్యాప్ ఉంది. దీనిపై మరింత లోతైన విశ్లేషణ అవసరం.",
  //   date: "June 20, 2026"
  // },
  // {
  //   id: 2,
  //   text: "హైదరాబాద్ ఐటీ కారిడార్ అభివృద్ధి అద్భుతమే, కానీ అదే సమయంలో మన గ్రామీణ ప్రాంతాల్లోని చిన్న తరహా పరిశ్రమలకు కూడా తగిన ప్రోత్సాహం దక్కాలి. అప్పుడే సమగ్ర అభివృద్ధి సాధ్యమవుతుంది.",
  //   date: "June 16, 2026"
  // }
];

// HELPER FUNCTIONS (To make importing easier in your pages)
// ---------------------------------------------------------
export const getShortNews = () => miniNews;
export const getMyComments = () => myComments;