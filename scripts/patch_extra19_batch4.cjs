const fs = require('fs');
const path = require('path');

const extra19Batch4 = {
  61: `Ultimately, the synergy between traditional pastoral knowledge, modern veterinary science, and organized marketing networks ensures that the Bikaner wool mandi continues to anchor the livelihoods of hundreds of thousands of rural families. Supporting the wool economy sustains rural employment and preserves an ancient cultural way of life in arid Rajasthan.`,
  62: `In conclusion, India Post Payments Bank has transformed the rural banking landscape by turning local post offices and Gramin Dak Sevaks into reliable financial facilitators. Doorstep banking empowers rural women, supports elderly pensioners, and accelerates inclusive financial growth across the desert state.`,
  63: `Ultimately, institutionalizing Citizen Charters transforms administrative functioning from bureaucratic complacency into responsive public service. By defining clear service timelines and holding public officials accountable, the state guarantees dignity, transparency, and justice for every citizen visiting a government office.`,
  64: `In conclusion, the Government e-Marketplace has democratized public procurement, providing equal opportunities to small local artisans, MSMEs, and large manufacturers alike. Ensuring paperless, transparent purchasing upholds fiscal integrity and maximizes the developmental impact of state expenditures.`,
  65: `Ultimately, comprehensive retirement social security systems safeguard the well-being of public servants who devote their careers to the governance of the state. Diligent and timely pension settlement reflects the gratitude of the administration and upholds the dignity of retired civil servants.`,
  66: `In conclusion, professional ethics and personal integrity are the bedrock of democratic public administration. When civil servants act with selflessness, objectivity, and honesty, they protect constitutional principles, eliminate corruption, and inspire enduring public trust in the institutions of governance.`,
  67: `Ultimately, effective urban local governance is essential for managing the challenges of modern urbanization in Rajasthan. Empowering municipal bodies with financial autonomy and modern digital tools ensures clean, sustainable, and well-planned cities that offer a superior quality of life for all residents.`,
  68: `In conclusion, Chand Baori at Abhaneri stands as a timeless testament to the artistic brilliance, mathematical mastery, and hydraulic ingenuity of ancient Rajasthan. Preserving these remarkable subterranean monuments bridges historical heritage with modern environmental consciousness.`,
  69: `Ultimately, combating desertification through cutting-edge arid science and community-based shelterbelt forestry secures the agricultural foundations of Rajasthan. Stabilizing shifting sand dunes protects vital infrastructure, preserves fragile arid ecosystems, and guarantees sustainable rural livelihoods across the Thar Desert.`,
  70: `In conclusion, protected cultivation represents a transformative leap in modern desert horticulture, allowing farmers to cultivate premium crops with minimal water and maximum profitability. Scaling up greenhouse infrastructure empowers progressive agriculturalists and drives sustainable economic growth across rural Rajasthan.`,
  71: `In conclusion, preserving the camel as the revered state animal of Rajasthan is an ecological, economic, and cultural imperative. Combining statutory protection with innovative camel milk commercialization guarantees dignified livelihoods for pastoralist breeders and secures the future of desert biodiversity.`,
  72: `Ultimately, the historic expansion of government medical colleges and modern district hospitals has dismantled regional healthcare disparities in Rajasthan. Providing accessible, advanced clinical care in every district guarantees health equity and elevates the overall human development index of the state.`,
  73: `In conclusion, telemedicine and digital health infrastructure have revolutionized public healthcare delivery across Rajasthan, connecting distant rural clinics with premier medical specialists. Eliminating physical barriers to healthcare access ensures that quality medical treatment is available to every citizen.`,
  74: `Ultimately, Shala Darpan stands as a national model of excellence in digital school education governance. Integrating academic tracking, teacher administration, and student welfare entitlements onto a single unified platform empowers educators and guarantees equitable educational outcomes for millions of children.`,
  75: `In conclusion, Rajasthan premier higher education institutions continue to lead the nation in engineering research, management innovation, legal jurisprudence, and medical excellence. Nurturing these academic hubs fuels intellectual enlightenment, drives technological progress, and shapes future leaders for the nation.`,
  76: `In conclusion, the scientific conservation and digital preservation of ancient manuscripts and historical state archives safeguards the documentary memory of Rajasthan. Making historical treasures globally accessible honors the cultural legacy and intellectual heritage of the desert state.`,
  77: `Ultimately, the thoughtful integration of artificial intelligence into public administration empowers civil servants to work with greater precision, speed, and strategic focus. Embracing ethical automation streamlines office workflows and delivers responsive, transparent governance for all citizens.`,
  78: `In conclusion, Mukundra Hills Tiger Reserve and its vital wildlife corridors demonstrate the power of landscape-level ecological conservation. Protecting contiguous forest habitats secures the future of the Royal Bengal Tiger, preserves river catchments, and safeguards Rajasthan rich natural heritage.`,
  80: `In conclusion, Rajeevika has unleashed a transformative grassroots revolution, empowering rural women to become independent entrepreneurs, financial managers, and community leaders. Strengthening women self-help federations drives rural prosperity and builds an equitable, self-reliant Rajasthan.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch4.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra19Batch4)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra19 into Batch 4 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch4.cjs'), code, 'utf8');
console.log('Successfully patched extra19 into Batch 4!');
