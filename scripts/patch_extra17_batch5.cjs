const fs = require('fs');
const path = require('path');

const extra17Batch5 = {
  81: `Ultimately, preserving Sambhar Salt Lake requires harmonious coordination between local salt manufacturers, environmental regulators, and wildlife conservationists. Protecting its unique hypersaline waters ensures that this historic Ramsar site remains an enduring haven for hundreds of thousands of wintering flamingos and a cornerstone of Rajasthan natural heritage.`,
  82: `In conclusion, the State Forensic Science Laboratory network stands as an indispensable pillar of modern criminal justice in Rajasthan. Utilizing advanced scientific technologies and maintaining rigorous standards of forensic evidence analysis ensures that justice is administered with objective accuracy and fairness for all citizens.`,
  83: `Ultimately, the dedicated services provided by the Rajasthan State Legal Services Authority ensure that poverty and illiteracy do not stand as barriers to justice. Empowering citizens with free legal representation and accessible Lok Adalats strengthens democratic governance and upholds the constitutional rule of law across the state.`,
  84: `In conclusion, the effective implementation of the Forest Rights Act in southern Rajasthan restores historical justice and dignity to tribal communities. Securing customary land and forest rights guarantees economic autonomy and fosters sustainable forest conservation across the ancestral lands of Rajasthan indigenous people.`,
  85: `Ultimately, the seamless integration of modern digital payment gateways with robust cyber security safeguards protects the sovereign financial assets of Rajasthan. Diligent adherence to cybersecurity protocols by administrative personnel ensures transparent, tamper-proof, and accountable public financial management across all state departments.`,
  86: `In conclusion, Rajasthan heritage hotels and luxury royal trains represent a remarkable blend of historic architectural preservation and world-class experiential hospitality. Celebrating the state royal traditions creates rural employment and establishes Rajasthan as an iconic cultural destination for international travelers.`,
  87: `Ultimately, the expansion of paved all-weather rural roads under PMGSY has unlocked economic opportunities and enhanced quality of life for millions of rural citizens. Modern road networks bridge geographical distances and drive inclusive socio-economic progress across the far-flung settlements of Rajasthan.`,
  88: `In conclusion, the revival of traditional Johads in Alwar stands as an inspiring global example of community-led environmental restoration. Harnessing indigenous water-harvesting wisdom replenishes depleted groundwater aquifers and ensures lasting ecological resilience and agricultural prosperity in arid Rajasthan.`,
  89: `Ultimately, the Rajasthan Jaivik Kheti Mission provides a sustainable, climate-resilient alternative to chemical-intensive farming. Empowering farmers to produce certified organic crops protects soil fertility, conserves water resources, and creates lucrative market opportunities across domestic and global organic markets.`,
  90: `In conclusion, comprehensive disaster management preparedness and rapid emergency response systems safeguard human lives and rural livelihoods against extreme weather hazards in Rajasthan. Investing in disaster mitigation builds a resilient, prepared, and safe state for all communities.`,
  91: `Ultimately, mastering computer networking fundamentals empowers ministerial civil servants to navigate modern digital office environments with confidence and efficiency. A secure, dependable network infrastructure ensures seamless inter-departmental collaboration and accelerates transparent citizen service delivery across Rajasthan.`,
  92: `In conclusion, the streamlined digital civil registration system through the Pehchan portal provides citizens with reliable, permanent legal identity documentation. Diligent clerical administration of birth, death, and marriage registrations guarantees citizen legal rights and supports sound demographic planning across Rajasthan.`,
  94: `In conclusion, discovering vast strategic reserves of lithium, potash, and rare earth minerals positions Rajasthan at the forefront of national industrial self-reliance. Sustainable mineral extraction and downstream value-addition will fuel clean energy technologies and drive immense economic prosperity across the state.`,
  95: `In conclusion, the vibrant folk theatres of Rajasthan—from operatic Khayals to satirical Rammats and courtly Tamashas—embody the boundless creativity, wit, and cultural spirit of the desert people. Nurturing traditional folk drama preserves regional artistic heritage and enriches community life for future generations.`,
  96: `Ultimately, the mass adoption of micro-irrigation systems demonstrates Rajasthan determination to overcome severe water scarcity through technological innovation. Conserving water through pressurized sprinklers and precision drips guarantees high agricultural yields and secures sustainable agrarian prosperity across the state.`,
  97: `In conclusion, the Bhamashah State Data Centre and the RajCloud sovereign cloud platform provide a secure, scalable computational foundation for Rajasthan digital governance revolution. Centralized cloud infrastructure ensures uninterrupted public service delivery and safeguards citizen data across all e-governance platforms.`,
  98: `Ultimately, registering Geographical Indications and safeguarding indigenous knowledge through digital libraries protects traditional artisans and farming communities from commercial exploitation. Celebrating authentic regional crafts preserves Rajasthan extraordinary cultural heritage and enhances its artistic prestige across global markets.`
};

let code = fs.readFileSync(path.join(__dirname, 'generate_batch5.cjs'), 'utf8');

for (const [idStr, para] of Object.entries(extra17Batch5)) {
  const id = parseInt(idStr);
  const regex = new RegExp(`(addLesson\\(${id},[\\s\\S]*?\\[[\\s\\S]*?)(\\n\\]\\);)`);
  const match = code.match(regex);
  if (match) {
    const replacement = `${match[1]},\n  \`${para.replace(/`/g, '\\`')}\`${match[2]}`;
    code = code.replace(regex, replacement);
    console.log(`Patched extra17 into Batch 5 Lesson ${id}`);
  } else {
    console.error(`Could not match Lesson ${id}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generate_batch5.cjs'), code, 'utf8');
console.log('Successfully patched extra17 in Batch 5!');
