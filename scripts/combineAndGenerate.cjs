const fs = require('fs');
const path = require('path');

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Data generator for lessons 1 to 25
const lessonsPart1 = require('./parts/part1.cjs');
// Data generator for lessons 26 to 50
const lessonsPart2 = require('./parts/part2.cjs');
// Data generator for lessons 51 to 75
const lessonsPart3 = require('./parts/part3.cjs');
// Data generator for lessons 76 to 100
const lessonsPart4 = require('./parts/part4.cjs');

const allLessons = [
  ...lessonsPart1,
  ...lessonsPart2,
  ...lessonsPart3,
  ...lessonsPart4,
];

console.log('Total lessons assembled:', allLessons.length);

let minWords = Infinity;
let maxWords = 0;
let below700Count = 0;

allLessons.forEach(l => {
  const words = countWords(l.content);
  if (words < minWords) minWords = words;
  if (words > maxWords) maxWords = words;
  if (words < 700) {
    console.warn(`Lesson ${l.id} (${l.title}) is below 700 words: ${words}`);
    below700Count++;
  }
});

console.log(`Min words: ${minWords}, Max words: ${maxWords}, Below 700: ${below700Count}`);

if (below700Count === 0) {
  const tsContent = `export interface EnglishTestLesson {
  id: number;
  title: string;
  category: string;
  content: string;
}

export const RSSB_LDC_ENGLISH_LESSONS: EnglishTestLesson[] = ${JSON.stringify(allLessons, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '../src/data/rssbLdcEnglishLessons.ts'), tsContent, 'utf8');
  console.log('Successfully wrote src/data/rssbLdcEnglishLessons.ts with all 100 lessons >= 700 words!');
} else {
  console.error('Generation failed: some lessons are below 700 words.');
  process.exit(1);
}
