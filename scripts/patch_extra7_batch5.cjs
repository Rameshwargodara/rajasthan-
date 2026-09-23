const fs = require('fs');
const path = require('path');

const extra7Batch5 = {
  82: `By maintaining flawless custody of forensic exhibits and employing rigorous scientific validation methods, state forensic specialists ensure that truth prevails in criminal proceedings, protecting innocent citizens and holding offenders accountable.`,
  84: `Empowering forest-dwelling communities with recognized land tenure rights secures their livelihood autonomy, preserves traditional ecological wisdom, and strengthens grassroots participatory democracy across the tribal belt of Rajasthan.`,
  85: `By implementing continuous security monitoring, robust encryption, and strict administrative authentication controls, Rajasthan financial systems protect taxpayer revenues, eliminate fiscal leakages, and ensure transparent, dependable public treasury management for all citizens.`,
  87: `Expanding paved rural road corridors transforms village economies, allowing farmers to market agricultural produce efficiently and enabling rural families to access vital healthcare, educational, and commercial opportunities across Rajasthan.`,
  88: `Community-led rainwater harvesting through traditional Johads restores ecological balance, replenishes precious groundwater reserves, and ensures sustainable agrarian livelihoods throughout the drought-prone landscapes of Rajasthan.`,
  89: `Supporting organic farmers with input subsidies and certification infrastructure fosters environmental stewardship, regenerates depleted soils, and establishes Rajasthan as a premier leader in clean, chemical-free agricultural production.`,
  90: `Coordinated emergency disaster preparedness and rapid response measures minimize human distress, safeguard vital livestock assets, and reinforce the state commitment to protecting vulnerable citizens during severe climate events.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch5.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra7Batch5)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra7 into Batch 5 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch5.cjs'), code, 'utf8');
console.log('Successfully patched extra7 in Batch 5!');
