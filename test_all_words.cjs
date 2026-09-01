const fs = require('fs');

function convertDevanagariToKrutiDev(text) {
  let str = text;

  // Normalize
  str = str.replace(/[\u200B-\u200D\uFEFF]/g, "");
  str = str.replace(/–/g, "-").replace(/—/g, "-");
  str = str.replace(/’/g, "'").replace(/‘/g, "'");
  str = str.replace(/”/g, '"').replace(/“/g, '"');

  // Replace Unicode composite characters with single normalized form
  str = str.replace(/क़/g, "क़").replace(/ख़/g, "ख़").replace(/ग़/g, "ग़")
           .replace(/ज़/g, "ज़").replace(/ड़/g, "ड़").replace(/ढ़/g, "ढ़").replace(/फ़/g, "फ़");

  function convertWord(w) {
    let word = w;

    // 1. Convert independent multi-character symbols
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

      // Nukta consonants
      ["क़", "d+"],
      ["ख़", "[+k"],
      ["ग़", "x+"],
      ["ज़", "t+"],
      ["ड़", "M+"],
      ["ढ़", "<+"],
      ["फ़", "Q+"],
      ["फ़", "Q+"],
    ];

    for (let [u, k] of specialCombinations) {
      word = word.split(u).join(k);
    }

    // 2. Chhoti I Matra 'ि' (must be placed before the consonant / cluster)
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

    // 3. Reph 'र्' (moves to immediately after the target consonant and its vowel matra)
    let pos_r = word.indexOf("र्");
    while (pos_r !== -1) {
      let next_idx = pos_r + 2;
      // Skip Chhoti I if present ('f')
      if (next_idx < word.length && word.charAt(next_idx) === 'f') {
        next_idx++;
      }
      // Skip the consonant / cluster
      while (next_idx < word.length && (
        (word.charCodeAt(next_idx) >= 0x0915 && word.charCodeAt(next_idx) <= 0x0939) ||
        word.charAt(next_idx) === '्' || word.charAt(next_idx) === '+' ||
        word.charAt(next_idx) === '=' || word.charAt(next_idx) === 'K' ||
        word.charAt(next_idx) === 'J' || word.charAt(next_idx) === 'Ø' ||
        word.charAt(next_idx) === '4' || word.charAt(next_idx) === '|' ||
        word.charAt(next_idx) === '}' || word.charAt(next_idx) === 'ê' ||
        word.charAt(next_idx) === 'ë' || word.charAt(next_idx) === 'ì' ||
        word.charAt(next_idx) === 'í'
      )) {
        next_idx++;
      }
      // Skip following vowel matras and nasalization
      while (next_idx < word.length && (
        "ाीुूृेैोौंःँkKhHqwsSkSa%¡`Wॉ".includes(word.charAt(next_idx))
      )) {
        next_idx++;
      }
      let target_cluster = word.substring(pos_r + 2, next_idx);
      word = word.substring(0, pos_r) + target_cluster + "Z" + word.substring(next_idx);
      pos_r = word.indexOf("र्");
    }

    // 4. Standalone Vowels
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

    // 5. Half Consonants (with Halant)
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
      ["श्", "'"],
      ["ष्", "\""],
      ["स्", "L"],
      ["ह्", "º"],
    ];
    for (let [u, k] of halfConsonants) {
      word = word.split(u).join(k);
    }

    // 6. Full Consonants
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
      ["फ", "Q"],
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

    // 7. Matras & diacritics
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
      ["ॉ", "kW"],
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

console.log("धार्मिक ->", convertDevanagariToKrutiDev("धार्मिक"));
console.log("नैसर्गिक ->", convertDevanagariToKrutiDev("नैसर्गिक"));
console.log("यूनिवर्सिटी ->", convertDevanagariToKrutiDev("यूनिवर्सिटी"));
console.log("कौशल्या ->", convertDevanagariToKrutiDev("कौशल्या"));
console.log("आवश्यकता ->", convertDevanagariToKrutiDev("आवश्यकता"));
console.log("चंडीगढ़ ->", convertDevanagariToKrutiDev("चंडीगढ़"));
console.log("डॉक्टर ->", convertDevanagariToKrutiDev("डॉक्टर"));
console.log("फाँसी ->", convertDevanagariToKrutiDev("फाँसी"));
console.log("अंग ->", convertDevanagariToKrutiDev("अंग"));
