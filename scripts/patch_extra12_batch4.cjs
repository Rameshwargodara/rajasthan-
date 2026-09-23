const fs = require('fs');
const path = require('path');

const extra12Batch4 = {
  63: `Dedicated clerical adherence to published service charters prevents administrative harassment, fosters citizen trust, and establishes Rajasthan as a frontrunner in transparent, people-centered governance.`,
  64: `By combining transparent electronic auctions with strict quality standards, GeM ensures that public procurement is executed efficiently, saving public funds and building confidence among commercial suppliers.`,
  65: `Ensuring timely processing of terminal retirement benefits honors the dedicated service of civil servants, providing them with financial peace of mind during their post-retirement years.`,
  66: `By conducting public business with uncompromising integrity and impartiality, ministerial civil servants protect the public interest, eliminate corruption, and strengthen democratic governance across Rajasthan.`,
  67: `Empowering urban local bodies with robust financial autonomy and skilled administrative personnel ensures sustainable urban expansion and delivers high-quality civic amenities to urban residents.`,
  69: `Coordinated conservation efforts between research scientists, forest rangers, and local village communities ensure that shifting sand dunes are stabilized, protecting vulnerable arid soils from further degradation.`,
  72: `The widespread expansion of medical college hospitals ensures that specialized clinical diagnostics, surgical facilities, and modern intensive care are accessible within every district of Rajasthan.`,
  73: `By integrating high-speed digital telecommunications with frontline rural clinics, telemedicine guarantees that expert clinical advice is available to patients across every village in Rajasthan.`,
  74: `Through real-time educational analytics and streamlined administrative workflows, Shala Darpan ensures that public schooling in Rajasthan remains equitable, accountable, and pedagogically effective.`,
  75: `Sustained institutional investment in higher education and technical research equips Rajasthan youth with high-value skills, driving industrial innovation and economic growth across the nation.`,
  76: `Preserving ancient historical manuscripts and royal records provides authentic historical documentation for future generations of scholars, honoring Rajasthan rich cultural and literary legacy.`,
  77: `Harnessing modern automation tools under strict human oversight allows government offices to process citizen requests rapidly, ensuring responsive, transparent, and accurate public administration.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch4.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra12Batch4)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra12 into Batch 4 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch4.cjs'), code, 'utf8');
console.log('Successfully patched extra12 in Batch 4!');
