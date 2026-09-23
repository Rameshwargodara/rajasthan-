const fs = require('fs');
const path = require('path');

const extra3Batch5 = {
  85: `Continuous technological upgrading of treasury payment systems ensures that public funds are safeguarded with utmost cryptographic integrity across Rajasthan.`,
  87: `Robust road connectivity accelerates rural economic growth and guarantees accessible transportation for all rural residents.`,
  89: `Expanding organic cultivation practices secures soil health and creates valuable marketing opportunities for agrarian households.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch5.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra3Batch5)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra3 into Batch 5 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch5.cjs'), code, 'utf8');
console.log('Successfully patched extra3 in Batch 5!');
