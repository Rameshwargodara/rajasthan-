const fs = require('fs');
const path = require('path');
const { unicodeToKruti } = require('./fix_kruti_converter.cjs');

// 1. Update fix_kruti_converter.cjs to map hyphen to '&' if any hyphen ever remains
let converterCode = fs.readFileSync(path.join(__dirname, 'fix_kruti_converter.cjs'), 'utf8');
if (!converterCode.includes('.split("-").join("&")')) {
  converterCode = converterCode.replace(
    '.split(";").join(",");',
    '.split(";").join(",")\n        .split("-").join("&");'
  );
  fs.writeFileSync(path.join(__dirname, 'fix_kruti_converter.cjs'), converterCode, 'utf8');
  console.log('Updated fix_kruti_converter.cjs to properly map hyphens to &');
}

// Re-require updated converter
delete require.cache[require.resolve('./fix_kruti_converter.cjs')];
const { unicodeToKruti: freshUnicodeToKruti } = require('./fix_kruti_converter.cjs');

// 2. Load paragraphs_50.json
const jsonPath = path.join(__dirname, 'paragraphs_50.json');
const p50 = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Replacements in Hindi text:
// Repetitive and compound word hyphens -> space
// Spurious punctuation hyphens -> appropriate punctuation (comma, colon, or removed)
function cleanHyphensInHindi(text) {
  let s = text;

  // Specific contextual fixes
  s = s.replace(/कई-कई/g, 'कई कई');
  s = s.replace(/रोजी-रोजगार/g, 'रोजी रोजगार');
  s = s.replace(/सामाजिक-आर्थिक/g, 'सामाजिक आर्थिक');
  s = s.replace(/एक-एक/g, 'एक एक');
  s = s.replace(/नियम-कायदे/g, 'नियम कायदे');
  s = s.replace(/20-20/g, '20 20');
  s = s.replace(/कह-कह/g, 'कह कह');
  s = s.replace(/जब-तब/g, 'जब तब');
  s = s.replace(/नामी-गिरामी/g, 'नामी गिरामी');
  s = s.replace(/कॉलेजों-संस्थानों/g, 'कॉलेजों संस्थानों');
  s = s.replace(/दूर-दराज/g, 'दूर दराज');
  s = s.replace(/अच्छे-बुरे/g, 'अच्छे बुरे');
  s = s.replace(/अच्छी-खासी/g, 'अच्छी खासी');
  s = s.replace(/उद्योग-व्यापार/g, 'उद्योग व्यापार');
  s = s.replace(/गैर-कानूनी/g, 'गैर कानूनी');
  s = s.replace(/रोजी-रोटी/g, 'रोजी रोटी');
  s = s.replace(/साथ-साथ/g, 'साथ साथ');
  s = s.replace(/नए-नए/g, 'नए नए');
  s = s.replace(/बेसिर-पैर/g, 'बेसिर पैर');
  s = s.replace(/बार-बार/g, 'बार बार');
  s = s.replace(/करोड़ों-अरबों/g, 'करोड़ों अरबों');
  s = s.replace(/छह-सात/g, 'छह सात');
  s = s.replace(/कोने-कोने/g, 'कोने कोने');
  s = s.replace(/सफलता-विफलता/g, 'सफलता विफलता');
  s = s.replace(/सुख-दुःख/g, 'सुख दुःख');
  s = s.replace(/रोष-क्षोभ-क्रोध/g, 'रोष क्षोभ क्रोध');
  s = s.replace(/एक-दो/g, 'एक दो');
  s = s.replace(/नदी-समुद्र/g, 'नदी समुद्र');
  s = s.replace(/कल-कल/g, 'कल कल');
  s = s.replace(/जगह-जगह/g, 'जगह जगह');
  s = s.replace(/कहां-कहां/g, 'कहां कहां');
  s = s.replace(/किन-किन/g, 'किन किन');
  s = s.replace(/हास्य-कटाक्ष/g, 'हास्य कटाक्ष');
  s = s.replace(/भूलों-कमियों-पापों/g, 'भूलों कमियों पापों');
  s = s.replace(/जन-जन/g, 'जन जन');
  s = s.replace(/हरा-भरा/g, 'हरा भरा');
  s = s.replace(/आदान-प्रदान/g, 'आदान प्रदान');
  s = s.replace(/ऊंचाई-नई गहराई/g, 'ऊंचाई नई गहराई');

  // Dash separator fixes in sentences
  s = s.replace(/ललकारा - मैं/g, 'ललकारा, मैं');
  s = s.replace(/\?' - अज्ञात/g, "?' अज्ञात");
  s = s.replace(/2016 को देखें - जिससे/g, '2016 को देखें, जिससे');
  s = s.replace(/ले जाता है - 1\./g, 'ले जाता है: 1.');
  s = s.replace(/होती है - 4\. कुछ कीजिए \(डू- यह सबसे छोटा शब्द संसार का सबसे लंबा शब्द है\)/g, 'होती है: 4. कुछ कीजिए। यह सबसे छोटा शब्द संसार का सबसे लंबा शब्द है।');
  s = s.replace(/करेंगे - वह इन्हीं/g, 'करेंगे, वह इन्हीं');
  s = s.replace(/मिले - तो आपको/g, 'मिले, तो आपको');
  s = s.replace(/मिले हैं - तो निश्चित/g, 'मिले हैं, तो निश्चित');
  s = s.replace(/या नहीं - यह जांचने/g, 'या नहीं, यह जांचने');
  s = s.replace(/कर सकता है - समय लगाना/g, 'कर सकता है, समय लगाना');
  s = s.replace(/परोपकार के काम - वो एक/g, 'परोपकार के काम, वो एक');
  s = s.replace(/उत्तर था - सही लोग/g, 'उत्तर था: सही लोग');
  s = s.replace(/2\. कहीं जाइये - अर्थपूर्ण/g, '2. कहीं जाइये: अर्थपूर्ण');
  s = s.replace(/बड़ा अर्थ हैं - हिलना/g, 'बड़ा अर्थ है: हिलना');
  s = s.replace(/याद आ गई - '/g, "याद आ गई: '");
  s = s.replace(/शीर्षक था - नदी/g, 'शीर्षक था: नदी');
  s = s.replace(/कुछ पढ़िए - यह/g, 'कुछ पढ़िए, यह');
  s = s.replace(/विवश कर दिया है - इसलिए/g, 'विवश कर दिया है, इसलिए');
  s = s.replace(/तात्पर्य सीधा है - कुछ भी/g, 'तात्पर्य सीधा है: कुछ भी');
  s = s.replace(/उत्तर एक ही है - जिस/g, 'उत्तर एक ही है कि जिस');
  s = s.replace(/अच्छा लगे- वही/g, 'अच्छा लगे, वही');
  s = s.replace(/ध्यान रखनी हैं- कि/g, 'ध्यान रखनी है कि');
  s = s.replace(/सबसे अच्छा है - नियमित/g, 'सबसे अच्छा है: नियमित');
  s = s.replace(/कुछ पढ़ें - इस तरह/g, 'कुछ पढ़ें, इस तरह');

  return s;
}

p50.forEach(p => {
  p.focusHindi = cleanHyphensInHindi(p.focusHindi);
  p.description = cleanHyphensInHindi(p.description);
  p.content = freshUnicodeToKruti(p.focusHindi);
});

fs.writeFileSync(jsonPath, JSON.stringify(p50, null, 2), 'utf8');
console.log('Updated paragraphs_50.json without erroneous hyphens');

// 3. Update apply_clean_paragraphs.cjs to also use cleanHyphensInHindi
let applyScript = fs.readFileSync(path.join(__dirname, 'apply_clean_paragraphs.cjs'), 'utf8');
applyScript = cleanHyphensInHindi(applyScript);
fs.writeFileSync(path.join(__dirname, 'apply_clean_paragraphs.cjs'), applyScript, 'utf8');

// Run apply_clean_paragraphs.cjs
require('./apply_clean_paragraphs.cjs');

// 4. Also clean practice words lessons in src/data/hindiLessons.ts
let lessonsFile = fs.readFileSync(path.join(__dirname, '../src/data/hindiLessons.ts'), 'utf8');

// Fix the 6 hyphenated words in practice lessons:
lessonsFile = lessonsFile.replace(/fVi-fVi/g, 'fVi fVi');
lessonsFile = lessonsFile.replace(/टिप-टिप/g, 'टिप टिप');

lessonsFile = lessonsFile.replace(/Fkj-Fkj/g, 'Fkj Fkj');
lessonsFile = lessonsFile.replace(/थर-थर/g, 'थर थर');

lessonsFile = lessonsFile.replace(/ckj-ckj/g, 'ckj ckj');
lessonsFile = lessonsFile.replace(/बार-बार/g, 'बार बार');

lessonsFile = lessonsFile.replace(/;nk-;nk/g, ';nk ;nk');
lessonsFile = lessonsFile.replace(/यदा-यदा/g, 'यदा यदा');

lessonsFile = lessonsFile.replace(/okg-okgh/g, 'okg okgh');
lessonsFile = lessonsFile.replace(/वाह-वाही/g, 'वाह वाही');

lessonsFile = lessonsFile.replace(/{kfr-iwfrZ/g, '{kfr iwfrZ');
lessonsFile = lessonsFile.replace(/क्षति-पूर्ति/g, 'क्षति पूर्ति');

fs.writeFileSync(path.join(__dirname, '../src/data/hindiLessons.ts'), lessonsFile, 'utf8');
console.log('Successfully updated src/data/hindiLessons.ts');
