// Complete robust Unicode to Kruti Dev 010 converter

function convertDevanagariToKrutiDev(text) {
  let str = text;

  // 1. Normalize characters
  str = str.replace(/[\u200B-\u200D\uFEFF]/g, ""); // Remove zero-width chars
  str = str.replace(/–/g, "-").replace(/—/g, "-");
  str = str.replace(/’/g, "'").replace(/‘/g, "'");
  str = str.replace(/”/g, '"').replace(/“/g, '"');

  // Let us follow the official standard conversion sequence:
  // Step 1: Specific composite Sanskrit / Vedic characters & common conjuncts
  const specialReplacements = [
    // Pre-processing
    ["ॐ", "vksEk"],
    ["।", "A"],
    ["॥", "AA"],

    // Special conjuncts with Alt codes or direct key combinations
    ["ज्ञ", "K"],
    ["त्र", "«"], // Or "=" in KrutiDev
    ["क्ष", "{k"],
    ["श्र", "J"],
    ["ऋ", "_"],

    // Composite letters
    ["द्ध", "4"],
    ["द्य", "|"],
    ["द्व", "}"],
    ["ट्ट", "ê"],
    ["ट्ठ", "ë"],
    ["ड्ड", "ì"],
    ["ड्ढ", "í"],
    ["ह्र", "à"],
    ["ह्ल", "â"],
    ["ह्व", "ã"],
    ["ह्म", "ä"],
    ["ह्न", "å"],
    ["ह्य", "æ"],
    ["क्त", "Dr"],
    ["त्त", "Rk"],
    ["त्त्", "R"],
    ["क्क", "Dk"],
    ["ष्ट", "\"V"],
    ["ष्ठ", "\"B"],

    // Nuktas
    ["क़", "d+"],
    ["ख़", "[+k"],
    ["ग़", "x+"],
    ["ज़", "t+"],
    ["ड़", "M+"],
    ["ढ़", "<+"],
    ["फ़", "Q+k"],
    ["फ़", "Q+k"],
    ["फ़्", "Q+"],
  ];

  // Full consonants mapping
  const fullConsonants = [
    ["क", "d"],
    ["ख", "[k"],
    ["ग", "x"],
    ["घ", "?k"],
    ["ङ", "~"],
    ["च", "p"],
    ["छ", "N"],
    ["ज", "t"],
    ["झ", ">k"],
    ["ञ", "¥k"],
    ["ट", "V"],
    ["ठ", "B"],
    ["ड", "M"],
    ["ढ", "<"],
    ["ण", ".k"],
    ["त", "r"],
    ["थ", "Fk"],
    ["द", "n"],
    ["ध", "/k"],
    ["न", "u"],
    ["प", "i"],
    ["फ", "Qk"],
    ["ब", "c"],
    ["भ", "Hk"],
    ["म", "e"],
    ["य", ";"],
    ["र", "j"],
    ["ल", "y"],
    ["व", "o"],
    ["श", "'k"],
    ["ष", "\"k"],
    ["स", "l"],
    ["ह", "g"],
  ];

  // Half consonants (with Halant) mapping
  const halfConsonants = [
    ["क्", "D"],
    ["ख्", "["],
    ["ग्", "X"],
    ["घ्", "?"],
    ["ङ्", "~"],
    ["च्", "P"],
    ["छ्", "N~"],
    ["ज्", "T"],
    ["झ्", ">"],
    ["ञ्", "¥"],
    ["ट्", "V~"],
    ["ठ्", "B~"],
    ["ड्", "M~"],
    ["ढ्", "<~"],
    ["ण्", "."],
    ["त्", "R"],
    ["थ्", "F"],
    ["द्", "n~"],
    ["ध्", "/"],
    ["न्", "U"],
    ["प्", "I"],
    ["फ्", "¶"],
    ["ब्", "C"],
    ["भ्", "H"],
    ["म्", "E"],
    ["य्", ";~"],
    ["ल्", "Y"],
    ["व्", "O"],
    ["श्", "S"],
    ["ष्", "\""],
    ["स्", "L"],
    ["ह्", "º"],
  ];

  // Standalone Vowels
  const vowels = [
    ["अ", "v"],
    ["आ", "vk"],
    ["इ", "b"],
    ["ई", "bZ"],
    ["उ", "m"],
    ["ऊ", "Å"],
    ["ए", ","],
    ["ऐ", ",s"],
    ["ओ", "vks"],
    ["औ", "vkS"],
  ];

  // Matras
  const matras = [
    ["ा", "k"],
    ["ी", "h"],
    ["ु", "q"],
    ["ू", "w"],
    ["ृ", "`"],
    ["े", "s"],
    ["ै", "S"],
    ["ो", "ks"],
    ["ौ", "kS"],
    ["ं", "a"],
    ["ँ", "¡"],
    ["ः", "%"],
  ];

  // Paden R (e.g. प्र -> iz, क्र -> Ø or dz, त्र -> =)
  const padenR = [
    ["क्र", "Ø"],
    ["प्र", "iz"],
    ["ग्र", "xz"],
    ["ब्र", "cz"],
    ["भ्र", "Hkz"],
    ["द्र", "nz"],
    ["स्र", "lz"],
    ["श box", "J"],
    ["ट्र", "Vª"],
    ["ड्र", "Mª"],
    ["ठ्र", "Bª"],
    ["ढ्र", "<ª"],
    ["त्र", "="],
  ];

  function convertWord(w) {
    let word = w;

    // 1. Convert Paden R combinations
    for (let [u, k] of padenR) {
      word = word.split(u).join(k);
    }

    // 2. Convert special composite combinations
    for (let [u, k] of specialReplacements) {
      word = word.split(u).join(k);
    }

    // 3. Move 'ि' (Chhoti I Matra) before the consonant / half-consonant cluster
    // In Unicode: [HalfConsonant* FullConsonant] + ि
    // In Kruti: 'f' + [HalfConsonant* FullConsonant]
    let pos_i = word.indexOf("ि");
    while (pos_i !== -1) {
      let start = pos_i - 1;
      while (start > 0 && word.charAt(start) === "्") {
        start -= 2; // skip halant + preceding char
      }
      if (start < 0) start = 0;
      let cluster = word.substring(start, pos_i);
      word = word.substring(0, start) + "f" + cluster + word.substring(pos_i + 1);
      pos_i = word.indexOf("ि", start + cluster.length + 2);
    }

    // 4. Move 'र्' (Reph) to after the syllable (consonant + matra) as 'Z'
    // In Unicode: 'र्' + [Consonants] + [Matras/Anusvara]
    // In Kruti: [Consonants] + [Matras/Anusvara] + 'Z'
    let pos_r = word.indexOf("र्");
    while (pos_r !== -1) {
      let next_idx = pos_r + 2;
      // Skip following consonants/halants
      while (next_idx < word.length && (
        (word.charCodeAt(next_idx) >= 0x0915 && word.charCodeAt(next_idx) <= 0x0939) ||
        word.charAt(next_idx) === '्' || word.charAt(next_idx) === 'f' ||
        word.charAt(next_idx) === '+' || word.charAt(next_idx) === '=' ||
        word.charAt(next_idx) === 'K' || word.charAt(next_idx) === 'J' ||
        word.charAt(next_idx) === 'Ø' || word.charAt(next_idx) === '4' ||
        word.charAt(next_idx) === '|' || word.charAt(next_idx) === '}' ||
        word.charAt(next_idx) === 'ê' || word.charAt(next_idx) === 'ë' ||
        word.charAt(next_idx) === 'ì' || word.charAt(next_idx) === 'í'
      )) {
        next_idx++;
      }
      // Skip vowel matras, anusvara, visarga
      while (next_idx < word.length && (
        "ाीुूृेैोौंःँkKhHqwsSkSa%¡`".includes(word.charAt(next_idx))
      )) {
        next_idx++;
      }
      let target_cluster = word.substring(pos_r + 2, next_idx);
      word = word.substring(0, pos_r) + target_cluster + "Z" + word.substring(next_idx);
      pos_r = word.indexOf("र्");
    }

    // 5. Replace Independent Vowels
    for (let [u, k] of vowels) {
      word = word.split(u).join(k);
    }

    // 6. Replace Half Consonants (with virama)
    for (let [u, k] of halfConsonants) {
      word = word.split(u).join(k);
    }

    // 7. Replace Full Consonants
    for (let [u, k] of fullConsonants) {
      word = word.split(u).join(k);
    }

    // 8. Replace Matras
    for (let [u, k] of matras) {
      word = word.split(u).join(k);
    }

    // 9. Remove any remaining halants or clean up
    word = word.replace(/्/g, "");

    return word;
  }

  // Process word by word
  return str.split(/(\s+)/).map(token => {
    if (/^\s+$/.test(token)) return token;
    return convertWord(token);
  }).join('');
}

// Test sample words from the user list:
const sampleWords = [
  "अनार", "अंग्रेज", "अंग", "अली", "आम", "अल्लाह", "अम्मी", "आर्मी", "आदि", "अनुसार", "अनेक", "अंदर", "अनादर", "अंधेरा", "आना", "और", "आग", "अनुरूप", "अच्छा", "औरत",
  "आगन", "आतंक", "आनन", "आँख", "असमर्थ", "अयोग्य", "ओट", "आवश्यकता", "आलम", "आना", "अवलम्ब", "अतर", "आवरण", "असफल", "आधा", "आवरण", "आकार", "आदर", "अवश्य", "आधार",
  "आवाज", "आकर", "आकार", "अपना", "अपने", "आमरण", "आई", "अभी", "अच्छी", "आठ", "अवसर", "आओ", "आए",
  "षट्कोण", "षड्यंत्र", "क्षण", "क्षुब्ध", "क्षोभ", "क्षमा", "क्षेत्र", "क्षत्रिय", "क्षति-पूर्ति", "क्षय", "त्रास", "त्रासदी", "त्राहि", "त्रिशूल", "त्रिदेव", "त्रिमूर्ति", "त्रिनेत्र", "त्रिवेन्द्रम", "त्रिवेदी", "त्रिवेणी", "त्रिकोणमिति", "त्रस्त", "त्रिकोण", "त्रिकाल", "ज्ञानी", "ज्ञान", "ज्ञाता", "ज्ञापन", "ज्ञापित"
];

for (const w of sampleWords) {
  console.log(`${w} -> ${convertDevanagariToKrutiDev(w)}`);
}
