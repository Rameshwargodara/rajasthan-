const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/hindiLessons.ts');
let content = fs.readFileSync(filePath, 'utf8');

const paragraphs = JSON.parse(fs.readFileSync(path.join(__dirname, 'paragraphs_50.json'), 'utf8'));

const escapeStr = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

let tsEntries = paragraphs.map(p => {
  return `  {
    id: ${p.id},
    title: '${escapeStr(p.title)}',
    category: '${escapeStr(p.category)}',
    focusKeys: '${escapeStr(p.focusKeys)}',
    focusHindi:
      '${escapeStr(p.focusHindi)}',
    description: '${escapeStr(p.description)}',
    content:
      '${escapeStr(p.content)}',
  }`;
}).join(',\n');

const marker = 'export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [';
const splitIndex = content.indexOf(marker);

if (splitIndex === -1) {
  console.error('Marker not found in hindiLessons.ts!');
  process.exit(1);
}

const newContent = content.substring(0, splitIndex) + `export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [
${tsEntries}
];
`;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully injected 50 Hindi Type Paragraph Lessons into src/data/hindiLessons.ts');
