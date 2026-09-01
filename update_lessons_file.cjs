const fs = require('fs');

const lessonsData = JSON.parse(fs.readFileSync('generated_lessons.json', 'utf8'));

let tsContent = '// Practice Words Exercises (1 to 31) - Practice Words Section\nexport const HINDI_PRACTICE_WORDS_LESSONS: HindiLesson[] = [\n';

for (const l of lessonsData) {
  // escape single quotes and backslashes in strings for TypeScript
  const escapeStr = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  
  tsContent += `  {
    id: ${l.id},
    title: '${escapeStr(l.title)}',
    category: '${escapeStr(l.category)}',
    focusKeys: '${escapeStr(l.focusKeys)}',
    focusHindi: '${escapeStr(l.focusHindi)}',
    description: '${escapeStr(l.description)}',
    content:
      '${escapeStr(l.content)}',
  },
`;
}

tsContent += '];\n';

fs.writeFileSync('practice_words_ts.txt', tsContent);
console.log('practice_words_ts.txt written successfully');
