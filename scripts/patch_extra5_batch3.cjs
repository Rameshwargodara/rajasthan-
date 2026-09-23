const fs = require('fs');
const path = require('path');

const extra5Batch3 = {
  49: `Through strategic master planning, multi-modal connectivity, and robust environmental management, RIICO continues to anchor the industrial progress of Rajasthan, attracting visionary enterprises and creating high-quality manufacturing employment across the state.`,
  52: `By prioritizing sustainable urban design, clean energy, and citizen-friendly digital services, the Smart Cities Mission lays a solid foundation for prosperous, inclusive, and modern urban centers across Rajasthan.`,
  53: `Strengthening credit guarantees, market linkages, and technological infrastructure ensures that local micro and small enterprises continue to flourish as vibrant contributors to Rajasthan industrial economy.`,
  57: `Through dedicated training infrastructure and strong industry linkages, RSLDC bridges the gap between academic education and market requirements, creating pathways to prosperous careers for Rajasthan youth.`,
  59: `Supporting traditional leather artisan communities with modern design training and financial assistance preserves this historic cultural craft while driving sustainable economic growth in rural Rajasthan.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch3.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra5Batch3)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra5Batch3 into Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch3.cjs'), code, 'utf8');
console.log('Successfully patched extra5Batch3!');
