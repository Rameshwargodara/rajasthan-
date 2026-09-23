const fs = require('fs');
const path = require('path');
const { unicodeToKruti } = require('./fix_kruti_converter.cjs');

const DEV_LETTER = "[\\u0900-\\u0963\\u0970-\\u097F]";

const daDhaNuktaMap = {
  // Words with ड़
  "अंगडाई": "अंगड़ाई", "अंगडाइयां": "अंगड़ाइयां", "अडा": "अड़ा", "आड": "आड़",
  "आंकडे": "आंकड़े", "आंकडा": "आंकड़ा", "आंकडों": "आंकड़ों",
  "उजडा": "उजड़ा", "उजाड": "उजाड़", "उड": "उड़", "उडे": "उड़े", "उधेड": "उधेड़",
  "एकड": "एकड़", "कडा": "कड़ा", "कडी": "कड़ी", "कडे": "कड़े", "कडियां": "कड़ियां",
  "करोड": "करोड़", "करोडपति": "करोड़पति", "करोडों": "करोड़ों",
  "कौडी": "कौड़ी",
  "खडा": "खड़ा", "खडी": "खड़ी", "खडे": "खड़े",
  "खिलाडी": "खिलाड़ी", "खिलाडियों": "खिलाड़ियों",
  "खिचडी": "खिचड़ी", "खोपडी": "खोपड़ी",
  "गडबड": "गड़बड़", "गडबड़": "गड़बड़", "गाडी": "गाड़ी", "गाडियां": "गाड़ियां",
  "गुडिया": "गुड़िया",
  "घडा": "घड़ा", "घडी": "घड़ी", "घुमक्कड": "घुमक्कड़", "घोडा": "घोड़ा", "घोडे": "घोड़े",
  "चमडा": "चमड़ा", "चूडियां": "चूड़ियां", "चूडी": "चूड़ी", "चिडिया": "चिड़िया",
  "छुडाने": "छुड़ाने", "छुडाना": "छुड़ाना", "छुडाया": "छुड़ाया",
  "छोडना": "छोड़ना", "छोड": "छोड़", "छोडा": "छोड़ा", "छोडने": "छोड़ने", "छोडकर": "छोड़कर",
  "जड": "जड़", "जडता": "जड़ता", "जडें": "जड़ें", "जुगाड": "जुगाड़",
  "जुडा": "जुड़ा", "जुडे": "जुड़े", "जुडी": "जुड़ी", "जुडकर": "जुड़कर",
  "झगड": "झगड़", "झगडा": "झगड़ा", "झाडू": "झाड़ू", "झाडियां": "झाड़ियां", "झेपकड": "झेपकड़",
  "झोंपडी": "झोंपड़ी", "झोपडी": "झोपड़ी",
  "तडा": "तड़ा", "तडका": "तड़का", "तुडवाकर": "तुड़वाकर", "तुडवाने": "तुड़वाने", "तुडवाना": "तुड़वाना",
  "ताबडतोड": "ताबड़तोड़", "थप्पड": "थप्पड़",
  "धडल्ले": "धड़ल्ले", "धडल्ला": "धड़ल्ला", "धडकन": "धड़कन", "धडकनों": "धड़कनों", "धडक": "धड़क",
  "धोखाधडी": "धोखाधड़ी",
  "टुकडे": "टुकड़े", "टुकडा": "टुकड़ा", "टेकडी": "टेकड़ी", "ताड": "ताड़",
  "तोडता": "तोड़ता", "तोड": "तोड़", "तोडना": "तोड़ना", "तोडने": "तोड़ने", "तोडा": "तोड़ा",
  "थोडा": "थोड़ा", "थोडी": "थोड़ी", "थोडे": "थोड़े",
  "दौड": "दौड़", "दौडने": "दौड़ने", "दौडना": "दौड़ना", "दौडा": "दौड़ा", "दौडते": "दौड़ते",
  "धरपकड": "धरपकड़", "नाडी": "नाड़ी",
  "पकड": "पकड़", "पकडे": "पकड़े", "पकडा": "पकड़ा", "पकडने": "पकड़ने", "पकडकर": "पकड़कर",
  "पड": "पड़", "पडता": "पड़ता", "पडते": "पड़ते", "पडा": "पड़ा", "पडी": "पड़ी",
  "पडेगा": "पड़ेगा", "पडेगी": "पड़ेगी", "पडे": "पड़े", "पडने": "पड़ने", "पडकर": "पड़कर", "पडोसी": "पड़ोसी",
  "पहाड": "पहाड़", "पिछडेपन": "पिछड़ेपन", "पिछडे": "पिछड़े",
  "पुडिया": "पुड़िया", "पंखुडी": "पंखुड़ी", "पगडी": "पगड़ी",
  "पेड": "पेड़", "पेडों": "पेड़ों", "पतझड": "पतझड़",
  "फाडा": "फाड़ा", "फावड": "फावड़ा", "फावडा": "फावड़ा",
  "बडा": "बड़ा", "बडी": "बड़ी", "बडे": "बड़े", "बछडा": "बछड़ा",
  "भीड": "भीड़", "भेड": "भेड़", "भेडिया": "भेड़िया", "भडक": "भड़क", "भडकाने": "भड़काने",
  "मुडकर": "मुड़कर", "मुड": "मुड़", "मुडना": "मुड़ना", "मोड": "मोड़",
  "लड": "लड़", "लडकी": "लड़की", "लडकपन": "लड़कपन", "लडाई": "लड़ाई", "लडाइयों": "लड़ाइयों",
  "लडकियों": "लड़कियों", "लडके": "लड़के", "लडका": "लड़का", "लडने": "लड़ने", "लडते": "लड़ते",
  "लंगडा": "लंगड़ा", "लोमडी": "लोमड़ी", "हथकडी": "हथकड़ी",
  "लाडला": "लाड़ला", "लाडो": "लाड़ो",

  // Words with ढ़
  "कडाई": "कढ़ाई", "गढ": "गढ़", "चंडीगढ": "चंडीगढ़", "छत्तीसगढ": "छत्तीसगढ़",
  "चढ": "चढ़", "चढता": "चढ़ता", "चढते": "चढ़ते", "चढना": "चढ़ना", "चढा": "चढ़ा",
  "दाढी": "दाढ़ी", "सीढी": "सीढ़ी", "सीढियां": "सीढ़ियां",
  "डेढ": "डेढ़", "डूंगरगढ": "डूंगरगढ़", "ओढना": "ओढ़ना",
  "पढना": "पढ़ना", "पढने": "पढ़ने", "पढिए": "पढ़िए", "पढिये": "पढ़िये", "पढू": "पढ़ू", "पढें": "पढ़ें", "पढाई": "पढ़ाई",
  "बढकर": "बढ़कर", "बढना": "बढ़ना", "बढने": "बढ़ने", "बढाने": "बढ़ाने", "बढावा": "बढ़ावा",
  "बढाते": "बढ़ाते", "बढाता": "बढ़ाता", "बढाती": "बढ़ाती",
  "बढे": "बढ़े", "बढेगी": "बढ़ेगी", "बढेगा": "बढ़ेगा", "बढती": "बढ़ती", "बढते": "बढ़ते", "बढता": "बढ़ता",
  "साढे": "साढ़े", "हनुमानगढ": "हनुमानगढ़"
};

function restoreNuktaInText(text) {
  let res = text;
  for (const [cleanWord, nuktaWord] of Object.entries(daDhaNuktaMap)) {
    const regex = new RegExp(`(?<!${DEV_LETTER})${cleanWord}(?!${DEV_LETTER})`, "g");
    res = res.replace(regex, nuktaWord);
  }
  return res;
}

const lessonsPath = path.join(__dirname, '../src/data/hindiLessons.ts');
const file = fs.readFileSync(lessonsPath, 'utf8');

const pStartMarker = 'export const HINDI_PRACTICE_WORDS_LESSONS: HindiLesson[] = [';
const pEndMarker = 'export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [';

const pStartIndex = file.indexOf(pStartMarker);
const pEndIndex = file.indexOf(pEndMarker);

if (pStartIndex === -1 || pEndIndex === -1) {
  console.error('Markers not found');
  process.exit(1);
}

const before = file.substring(0, pStartIndex + pStartMarker.length);
const practiceSection = file.substring(pStartIndex + pStartMarker.length, pEndIndex);
const after = file.substring(pEndIndex);

// Split practiceSection by `  {`
const rawItems = practiceSection.split(/\n\s*\{\s*\n/).filter(s => s.trim().length > 0);

const items = rawItems.map(itemStr => {
  const idMatch = itemStr.match(/id:\s*(\d+)/);
  const titleMatch = itemStr.match(/title:\s*"([^"]+)"/);
  const catMatch = itemStr.match(/category:\s*"([^"]+)"/);
  const focusKeysMatch = itemStr.match(/focusKeys:\s*"([^"]+)"/);
  
  const focusHindiMatch = itemStr.match(/focusHindi:\s*"([^"]+)"/);
  const descMatch = itemStr.match(/description:\s*\n?\s*"([^"]+)"/);

  const id = idMatch ? parseInt(idMatch[1]) : 0;
  const title = titleMatch ? titleMatch[1] : `Exercise ${id}`;
  const category = catMatch ? catMatch[1] : '';
  const focusKeys = focusKeysMatch ? focusKeysMatch[1] : '';
  
  let desc = descMatch ? descMatch[1] : '';
  desc = restoreNuktaInText(desc);

  let focusHindi = focusHindiMatch ? focusHindiMatch[1] : desc.substring(0, 45) + '...';
  focusHindi = restoreNuktaInText(focusHindi);

  const krutiContent = unicodeToKruti(desc);

  return `  {
    id: ${id},
    title: ${JSON.stringify(title)},
    category: ${JSON.stringify(category)},
    focusKeys: ${JSON.stringify(focusKeys)},
    focusHindi: ${JSON.stringify(focusHindi)},
    description:
      ${JSON.stringify(desc)},
    content:
      ${JSON.stringify(krutiContent)},
  }`;
});

const newPracticeContent = '\n' + items.join(',\n') + ',\n];\n\n';
const finalContent = before + newPracticeContent + after;

fs.writeFileSync(lessonsPath, finalContent, 'utf8');
console.log(`Successfully reformatted ${items.length} practice lessons in hindiLessons.ts`);
