const fs = require('fs');
const path = require('path');

const extra13 = {
  42: `Moreover, the promotion of cultural heritage walks through the historic bazaars of Jaipur, Jodhpur, and Udaipur provides visitors with authentic glimpses into living artisan traditions. Engaging local communities in sustainable tourism preservation ensures that historical monuments remain revered, protected, and economically vibrant assets for generations to come.`,
  45: `Ultimately, the revenue administration hierarchy functions as the foundational framework connecting grassroots agrarian households with state policy institutions. Dedicated clerical support across all tehsil and sub-divisional offices ensures that land rights are protected and citizen grievances are resolved with fairness and speed.`,
  46: `In addition, establishing clear archiving schedules and maintaining dedicated folders for statutory communications helps clerks retrieve crucial administrative correspondence swiftly during judicial reviews or legislative question sessions. Adhering to professional email standards enhances the efficiency and credibility of public administration.`,
  48: `Additionally, solar-powered water pumping systems installed in off-grid desert villages guarantee uninterrupted drinking water supply even during extreme weather conditions. Continuous monitoring by local water committees fosters community ownership and ensures long-term operational sustainability.`,
  49: `Furthermore, RIICO ongoing digitization of land allotment records and lease mortgage processes through its unified enterprise portal drastically reduces bureaucratic delays for industrial investors. By providing robust infrastructure and streamlined services, RIICO continues to accelerate industrialization across Rajasthan.`,
  51: `Ultimately, the transformation of urban sanitation under the Swachh Bharat Mission reflects the power of community participation and municipal leadership. Ensuring clean, hygienic, and well-managed urban centers elevates public health standards and enhances the quality of life for all citizens across Rajasthan.`,
  52: `Moreover, smart city command centers provide invaluable real-time data analytics that assist municipal planners in optimizing water supply schedules, traffic signaling, and solid waste collection routes. Embracing intelligent urban technologies ensures that Rajasthan major cities remain resilient, sustainable, and prepared for future urban growth.`,
  53: `Ultimately, creating an enabling ecosystem for small businesses drives economic resilience and grassroots employment across Rajasthan. Progressive MSME policies dismantle bureaucratic hurdles, empowering local youth to innovate, establish enterprises, and contribute to national economic growth.`,
  55: `In conclusion, road safety is a shared civic responsibility requiring the active cooperation of motorists, law enforcement agencies, and road engineers. Implementing strict enforcement alongside continuous public education will pave the way toward an accident-free Rajasthan.`,
  57: `Moreover, organizing district skill exhibitions and entrepreneurship bootcamps inspires rural youth to explore self-employment and micro-enterprise creation. Equipping young men and women with market-ready vocational skills remains central to realizing Rajasthan economic and demographic potential.`,
  58: `Ultimately, the Rajiv Gandhi Olympic Games have revitalized the grassroots sports ecosystem across Rajasthan, proving that sports can unite communities, bridge social divides, and inspire generations of healthy, confident, and active citizens.`,
  59: `Furthermore, integrating traditional Mojari footwear designs with modern casual fashion trends expands market demand across national and global lifestyle stores. Preserving this ancient leather craft guarantees dignified livelihoods and honors Rajasthan rich artisanal heritage.`,
  60: `In conclusion, the gems and jewellery industry of Jaipur stands as an enduring symbol of artistic brilliance and economic strength. Combining ancient courtly masteries with modern technology ensures that the Pink City remains the sparkling jewel of global gemological trade.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch3.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra13)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra13 into Batch 3 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch3.cjs'), code, 'utf8');
console.log('Successfully patched extra13 in Batch 3!');
