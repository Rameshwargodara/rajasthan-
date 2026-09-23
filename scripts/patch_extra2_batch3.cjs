const fs = require('fs');
const path = require('path');

const extra2Batch3 = {
  49: `This integrated industrial infrastructure positions Rajasthan as a leading manufacturing hub in northwestern India.`,
  52: `Continuous urban innovation ensures that historic cities in Rajasthan evolve into vibrant, technologically advanced urban centers.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch3.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra2Batch3)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra2Batch3 into Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch3.cjs'), code, 'utf8');
console.log('Successfully patched extra2Batch3!');
