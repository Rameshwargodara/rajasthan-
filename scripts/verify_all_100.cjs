const fs = require('fs');
const path = require('path');

function extractLessons(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // extract JSON array
  const match = content.match(/export const PART\d_LESSONS: EnglishTestLesson\[\] = (\[[\s\S]*?\]);/);
  if (!match) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(match[1]);
}

const allLessons = [
  ...extractLessons(path.join(__dirname, '../src/data/lessons/part1.ts')),
  ...extractLessons(path.join(__dirname, '../src/data/lessons/part2.ts')),
  ...extractLessons(path.join(__dirname, '../src/data/lessons/part3.ts')),
  ...extractLessons(path.join(__dirname, '../src/data/lessons/part4.ts')),
  ...extractLessons(path.join(__dirname, '../src/data/lessons/part5.ts'))
];

console.log(`Total lessons loaded: ${allLessons.length}`);

let under700 = 0;
let minWords = Infinity;
let maxWords = 0;

allLessons.forEach(l => {
  const words = l.content.trim().split(/\s+/).filter(Boolean).length;
  if (words < minWords) minWords = words;
  if (words > maxWords) maxWords = words;
  if (words < 700) {
    console.error(`Lesson ${l.id} under 700 words! (${words} words)`);
    under700++;
  }
});

console.log(`Min words: ${minWords}, Max words: ${maxWords}`);
console.log(`Under 700: ${under700}`);

if (under700 > 0 || allLessons.length !== 100) {
  process.exit(1);
} else {
  console.log('ALL 100 LESSONS VERIFIED! Every single lesson has at least 700 words.');
}
