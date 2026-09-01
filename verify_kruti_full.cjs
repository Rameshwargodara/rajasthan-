const fs = require('fs');

// Full standard converter
function unicodeToKruti(text) {
  let str = text;

  // Cleanup zero-width and standard dashes
  str = str.replace(/[\u200B-\u200D\uFEFF]/g, "");
  str = str.replace(/–/g, "-").replace(/—/g, "-");
  str = str.replace(/’/g, "'").replace(/‘/g, "'");
  str = str.replace(/”/g, '"').replace(/“/g, '"');

  function convertWord(w) {
    let word = w;

    // Step 1: Specific conjuncts and Alt combinations
    const specialCombinations = [
      ["ॐ", "vksEk"],
      ["।", "A"],
      ["॥", "AA"],
      ["ज्ञ", "K"],
      ["त्र", "="],
      ["क्ष", "{k"],
      ["श्र", "J"],
      ["ऋ", "_"],

      // Double consonants and conjuncts
      ["क्त", "Dr"],
      ["त्त", "Rk"],
      ["त्त्", "R"],
      ["क्क", "Dk"],
      ["ष्ट", "\"V"],
      ["ष्ठ", "\"B"],
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

      // Paden R combinations
      ["क्र", "Ø"],
      ["प्र", "iz"],
      ["ग्र", "xz"],
      ["ब्र", "cz"],
      ["भ्र", "Hkz"],
      ["द्र", "nz"],
      ["स्र", "lz"],
      ["ट्र", "Vª"],
      ["ड्र", "Mª"],
      ["ठ्र", "Bª"],
      ["ढ्र", "<ª"],

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

    for (let [u, k] of specialCombinations) {
      word = word.split(u).join(k);
    }

    // Step 2: Handle 'ि' (Chhoti Ee Matra)
    // Chhoti i matra in Kruti Dev must come BEFORE the consonant / consonant-cluster
    let pos_i = word.indexOf("ि");
    while (pos_i !== -1) {
      let start = pos_i - 1;
      while (start > 0 && word.charAt(start) === "्") {
        start -= 2;
      }
      if (start < 0) start = 0;
      let cluster = word.substring(start, pos_i);
      word = word.substring(0, start) + "f" + cluster + word.substring(pos_i + 1);
      pos_i = word.indexOf("ि", start + cluster.length + 2);
    }

    // Step 3: Handle 'र्' (Reph)
    // Reph in Kruti Dev is typed AFTER the consonant and its vowel matras as 'Z'
    let pos_r = word.indexOf("र्");
    while (pos_r !== -1) {
      let next_idx = pos_r + 2;
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
      while (next_idx < word.length && (
        "ाीुूृेैोौंःँkKhHqwsSkSa%¡`W".includes(word.charAt(next_idx))
      )) {
        next_idx++;
      }
      let target_cluster = word.substring(pos_r + 2, next_idx);
      word = word.substring(0, pos_r) + target_cluster + "Z" + word.substring(next_idx);
      pos_r = word.indexOf("र्");
    }

    // Step 4: Standalone Vowels
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
    for (let [u, k] of vowels) {
      word = word.split(u).join(k);
    }

    // Step 5: Half Consonants (with Halant)
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
      ["श्", "'"],   // Note: ' is half sha, 'k is full sha
      ["ष्", "\""],  // Note: " is half shha, "k is full shha
      ["स्", "L"],
      ["ह्", "º"],
    ];
    for (let [u, k] of halfConsonants) {
      word = word.split(u).join(k);
    }

    // Step 6: Full Consonants
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
    for (let [u, k] of fullConsonants) {
      word = word.split(u).join(k);
    }

    // Step 7: Matras & diacritics
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
      ["़", "+"],
    ];
    for (let [u, k] of matras) {
      word = word.split(u).join(k);
    }

    word = word.replace(/्/g, "");
    return word;
  }

  return str.split(/(\s+)/).map(token => {
    if (/^\s+$/.test(token)) return token;
    return convertWord(token);
  }).join('');
}

// Let's test difficult words
const testList = [
  "आवश्यकता", "अवश्य", "अशोक", "कौशल्या", "अंग", "अंग्रेज", "आँख", "ऋषि", "ऋग्वेद",
  "कृष्णा", "कार्य", "खर्च", "खुशियाँ", "गाँव", "गृहस्थ", "ग्रेजुएट", "घोंसला", "चंडीगढ़",
  "चूड़ियां", "छत्तीसगढ़", "जिंदगी", "झण्डा", "ट्रेन", "टैक्सी", "डॉक्टर", "ढूंढो", "तुम्हारी",
  "दुकानदार", "धनुष", "धार्मिक", "नैसर्गिक", "पैगम्बर", "फाँसी", "बांसुरी", "भगवान", "भानुमति",
  "मुँह", "यज्ञ", "यूनिवर्सिटी", "राष्ट्रकूट", "लक्ष्मी", "व्यावहारिक", "शाश्वत", "शहादत",
  "साँचे", "स्वयं", "स्वीकृति", "हवा हवाई", "षट्कोण", "त्रिकोणमिति", "ज्ञापन"
];

for (const t of testList) {
  console.log(`${t} -> ${unicodeToKruti(t)}`);
}
