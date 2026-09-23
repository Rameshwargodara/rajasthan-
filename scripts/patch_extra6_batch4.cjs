const fs = require('fs');
const path = require('path');

const extra6Batch4 = {
  66: `Upholding moral rectitude, fairness, and professional discipline in daily office routines transforms public servants into trusted custodians of constitutional democracy and citizen welfare across Rajasthan.`,
  67: `Comprehensive urban infrastructure planning ensures that growing cities remain livable, economically vibrant, and resilient for all residents.`,
  69: `Sustained sand dune stabilization preserves fertile agricultural lands and supports ecological resilience throughout the desert region.`,
  74: `Transparent digital governance in school education elevates student achievement and strengthens public trust in state schooling.`,
  75: `Excellence in higher education and technical innovation continues to position Rajasthan as a premier knowledge hub in India.`,
  77: `Modern automation tools empower administrative staff to deliver prompt, accurate, and citizen-friendly public services across Rajasthan.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch4.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra6Batch4)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra6 into Batch 4 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch4.cjs'), code, 'utf8');
console.log('Successfully patched extra6 in Batch 4!');
