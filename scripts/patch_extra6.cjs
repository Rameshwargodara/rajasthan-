const fs = require('fs');
const path = require('path');

const extra6 = {
  10: `Furthermore, mobile e-governance applications like the Jan Aadhaar app and e-Mitra mobile wallet empower rural citizens to track their welfare payments, verify ration quota disbursements, and update family demographic records directly from smartphones. District collectorates monitor e-governance performance indices monthly, ensuring that digital administrative services remain transparent, accountable, and accessible to every household across Rajasthan.`,
  11: `Additionally, understanding network operating system principles and distributed directory architectures enables clerical staff to utilize shared administrative resources securely. Configuring print spoolers, setting default system fonts, and updating network credentials ensures seamless collaboration across administrative branches. Regular participation in cyber awareness and IT skills enhancement programs ensures that ministerial personnel keep pace with rapid developments in operating systems and enterprise software.`,
  12: `Furthermore, the state government has instituted single-window clearance mechanisms to facilitate rapid project approvals for renewable developers, expediting environmental permits, land allotment deeds, and grid connectivity sanctions. Expanding distributed rooftop solar installations across government buildings and educational institutions further curtails public electricity bills, demonstrating public sector leadership in sustainable clean energy adoption.`,
  13: `Additionally, the state Department of Mines conducts regular mineral exploration surveys in partnership with the Geological Survey of India (GSI) to discover deep-seated mineral reserves, including potash in northwest Rajasthan and rare earth elements in Barmer. Strengthening mineral processing research and promoting eco-friendly mining technologies ensures long-term industrial viability, employment stability, and sustainable economic wealth for the state.`,
  15: `Additionally, configuring automatic document backup and recovery settings in Microsoft Word protects clerks against accidental loss of unfinalized files during power interruptions or unexpected system reboots. Incorporating standardized paragraph styles and master document templates across administrative branches ensures that government correspondence maintains consistent aesthetic elegance and professional authority.`,
  20: `Additionally, configuring custom data entry validation lists and drop-down menus in Microsoft Excel streamlines clerical data entry, preventing typographical mistakes in department names, budget heads, or district codes. Automating routine financial calculations through robust spreadsheet formulas drastically enhances ministerial productivity, delivering audit-ready administrative records for public scrutiny.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch1.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra6)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra6 into Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch1.cjs'), code, 'utf8');
console.log('Successfully patched extra6');
