function convertDevanagariToKrutiDev(text) {
  let str = text;

  // 1. Normalize
  str = str.replace(/[\u200B-\u200D\uFEFF]/g, "");
  str = str.replace(/–/g, "-").replace(/—/g, "-");
  str = str.replace(/’/g, "'").replace(/‘/g, "'");
  str = str.replace(/”/g, '"').replace(/“/g, '"');

  // Pre-normalize Nukta single Unicode chars into base + nukta or direct mappings
  str = str.replace(/\u0958/g, "d+")
           .replace(/\u0959/g, "[+k")
           .replace(/\u095A/g, "x+")
           .replace(/\u095B/g, "t+")
           .replace(/\u095C/g, "M+")
           .replace(/\u095D/g, "<+")
           .replace(/\u095E/g, "Q+")
           .replace(/\u095F/g, ";+");

  function convertWord(w) {
    let word = w;

    // Direct unique replacements
    const specialReplacements = [
      ["ॐ", "vksEk"],
      ["।", "A"],
      ["॥", "AA"],
      ["ज्ञ", "K"],
      ["त्र", "="],
      ["क्ष", "{k"],
      ["श्र", "J"],
      ["ऋ", "_"],

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

      ["क़", "d+"],
      ["ख़", "[+k"],
      ["ग़", "x+"],
      ["ज़", "t+"],
      ["ड़", "M+"],
      ["ढ़", "<+"],
      ["फ़", "Q+"],
      ["फ़", "Q+"],
    ];

    for (let [u, k] of specialReplacements) {
      word = word.split(u).join(k);
    }

    // Step 2: Handle 'ि' (Chhoti Ee Matra)
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
    // In KrutiDev, 'Z' is typed immediately after the target consonant cluster and any of its matras
    let pos_r = word.indexOf("र्");
    while (pos_r !== -1) {
      let next_idx = pos_r + 2;
      if (next_idx < word.length && word.charAt(next_idx) === 'f') {
        next_idx++;
      }
      // Consume ONE consonant cluster: any half consonants (ending with ्) + 1 base consonant
      while (next_idx < word.length) {
        let ch = word.charAt(next_idx);
        let code = word.charCodeAt(next_idx);
        let isConsonant = (code >= 0x0915 && code <= 0x0939) ||
                          "K={JØ4|}êëìí".includes(ch);
        if (isConsonant) {
          next_idx++;
          // Check if followed by nukta '+'
          if (next_idx < word.length && word.charAt(next_idx) === '+') {
            next_idx++;
          }
          // Check if followed by halant '्'
          if (next_idx < word.length && word.charAt(next_idx) === '्') {
            next_idx++;
            continue; // this was a half consonant, so consume next consonant in cluster
          } else {
            break; // finished the consonant part of the cluster
          }
        } else {
          next_idx++;
          break;
        }
      }
      // Now consume any attached vowel matras, anusvara, visarga, chandra
      while (next_idx < word.length && (
        "ाीुूृेैोौंःँkKhHqwsSkSa%¡`Wॉ".includes(word.charAt(next_idx))
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
      ["श्", "'"],
      ["ष्", "\""],
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
console.log("चंडीगढ़ ->", convertDevanagariToKrutiDev("चंडीगढ़"));
console.log("गर्जना ->", convertDevanagariToKrutiDev("गर्जना"));
console.log("कर्तव्य ->", convertDevanagariToKrutiDev("कर्तव्य"));
console.log("शर्मिला ->", convertDevanagariToKrutiDev("शर्मिला"));
console.log("त्रिमूर्ति ->", convertDevanagariToKrutiDev("त्रिमूर्ति"));
