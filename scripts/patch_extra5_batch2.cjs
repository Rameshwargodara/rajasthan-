const fs = require('fs');
const path = require('path');

const extra5 = {
  23: `Ultimately, the state comprehensive health insurance model protects families from catastrophic financial hardship during unforeseen medical emergencies, establishing a compassionate safety net for vulnerable citizens across Rajasthan.`,
  27: `By combining continuous employee cyber training with state-of-the-art endpoint detection software, government departments ensure that digital governance operates securely and effectively.`,
  29: `In addition, rehearsing presentation timings with the built-in Rehearse Timings tool ensures that speakers deliver key messages concisely within executive meeting schedules. Well-crafted visual presentations significantly improve inter-departmental collaboration and policy execution.`,
  37: `Furthermore, nuclear safety education and radiation awareness initiatives conducted around atomic power plants build community trust and highlight the environmental benefits of zero-carbon baseload electricity generation.`,
  39: `Today, Jantar Mantar remains an invaluable national monument and tourist destination, illustrating the harmonious integration of mathematics, astronomy, and classical architectural design.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch2.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra5)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra5 into Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch2.cjs'), code, 'utf8');
console.log('Successfully patched extra5');
