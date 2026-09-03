const fs = require('fs');
const path = require('path');

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// We will write a comprehensive generator that defines all 100 lessons with rich, informative, continuous paragraphs.
// Each lesson will contain 4 to 5 detailed paragraphs covering:
// 1. Introduction and Core Concepts
// 2. Structural, Geographical, or Architectural Nuances
// 3. District-level Implementation and Rajasthan Context
// 4. Clerical, Examination, Legal, or Administrative Rules and Vocabulary
// 5. Future Roadmap, Modern Technology, and Public Impact

const generateLessons = require('./lessonsCatalog.cjs');

const allLessons = generateLessons();

console.log('Generated total lessons:', allLessons.length);

let below700 = 0;
allLessons.forEach((l) => {
  const w = countWords(l.content);
  if (w < 700) {
    console.error(`Lesson ${l.id} (${l.title}) has only ${w} words!`);
    below700++;
  }
});

if (below700 > 0) {
  console.error(`Failed: ${below700} lessons have fewer than 700 words.`);
  process.exit(1);
}

const fileContent = `export interface EnglishTestLesson {
  id: number;
  title: string;
  category: string;
  content: string;
}

export const RSSB_LDC_ENGLISH_LESSONS: EnglishTestLesson[] = ${JSON.stringify(allLessons, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/rssbLdcEnglishLessons.ts'), fileContent, 'utf8');
console.log('Successfully written src/data/rssbLdcEnglishLessons.ts with 100 lessons exceeding 700 words each!');
