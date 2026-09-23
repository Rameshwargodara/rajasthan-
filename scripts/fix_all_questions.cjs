const fs = require('fs');
const path = require('path');

// 1. Update fix_kruti_converter.cjs to convert '?' to '\\'
let converterCode = fs.readFileSync(path.join(__dirname, 'fix_kruti_converter.cjs'), 'utf8');
if (!converterCode.includes('.split("?").join("\\\\")')) {
  converterCode = converterCode.replace(
    '.split("-").join("&");',
    '.split("-").join("&")\n        .split("?").join("\\\\");'
  );
  fs.writeFileSync(path.join(__dirname, 'fix_kruti_converter.cjs'), converterCode, 'utf8');
  console.log('Updated fix_kruti_converter.cjs to map ? to \\');
}

// Re-require fresh converter
delete require.cache[require.resolve('./fix_kruti_converter.cjs')];
const { unicodeToKruti } = require('./fix_kruti_converter.cjs');

// 2. Load paragraphs_50.json
const jsonPath = path.join(__dirname, 'paragraphs_50.json');
const p50 = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Replace all '?' in Hindi text with '।' (Purna Viram) - standard for Hindi typing tests
p50.forEach(p => {
  p.focusHindi = p.focusHindi.replace(/\?/g, '।');
  p.description = p.description.replace(/\?/g, '।');
  p.content = unicodeToKruti(p.focusHindi);
});

fs.writeFileSync(jsonPath, JSON.stringify(p50, null, 2), 'utf8');
console.log('Updated paragraphs_50.json replacing ? with ।');

// 3. Update apply_clean_paragraphs.cjs
let applyScript = fs.readFileSync(path.join(__dirname, 'apply_clean_paragraphs.cjs'), 'utf8');
applyScript = applyScript.replace(/\?/g, '।');
fs.writeFileSync(path.join(__dirname, 'apply_clean_paragraphs.cjs'), applyScript, 'utf8');

// Run apply_clean_paragraphs.cjs to update src/data/hindiLessons.ts
require('./apply_clean_paragraphs.cjs');
console.log('Successfully updated src/data/hindiLessons.ts');
