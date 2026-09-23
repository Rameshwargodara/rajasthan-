/**
 * Complete, accurate Unicode to KrutiDev 010 converter
 * Designed specifically for typing tutors where every character in the output
 * must match standard QWERTY keyboard keystrokes without untypable Alt codes.
 */

function unicodeToKruti(text) {
  if (!text) return "";

  let str = text;

  str = str.replace(/–|—/g, "-");

  // Smart quotes handling: convert single and double quotes to Kruti-compatible quotes
  str = str.replace(/['‘]([^'’]+)['’]/g, "‘$1’");
  str = str.replace(/["“]([^"”]+)["”]/g, "‘$1’");
  str = str.replace(/['‘]/g, "‘").replace(/['’]/g, "’");
  str = str.replace(/["“]/g, "‘").replace(/["”]/g, "’");

  // Step 1: Handle English loan vowels and composites
  // 'ऑ' = 'vkW' (अ + ा + ॅ)
  // 'ॉ' = 'kW' (ा + ॅ)
  str = str.split("ऑ").join("vkW");
  str = str.split("ॉ").join("kW");

  // Step 2: Tokenize preserving whitespace and punctuation
  const tokens = str.split(/(\s+|[।,?!:;()\-‘’]+|\d+\.|\.)/);

  const convertedTokens = tokens.map(token => {
    if (!token) return "";
    if (/^\s+$/.test(token)) return token;
    if (/^[।,?!:;()\-‘’]+$/.test(token)) {
      return token
        .split("।").join("A")
        .split(",").join("]")
        .split(":").join("%")
        .split(";").join(";")
        .split("-").join("&")
        .split("?").join("\\")
        .split("‘").join("^")
        .split("’").join("*");
    }
    if (/^\d+\.$/.test(token)) {
      return token.replace(".", "-");
    }
    if (token === ".") {
      return "-";
    }
    return convertHindiWord(token);
  });

  return convertedTokens.join("");
}

function convertHindiWord(word) {
  let w = word;

  // Convert punctuation before Hindi vowel 'ए' is mapped to ','
  w = w.split("।").join("A");
  w = w.split(",").join("]");
  w = w.split(":").join("%");
  w = w.split("?").join("\\");
  w = w.split("-").join("&");
  w = w.split("‘").join("^");
  w = w.split("’").join("*");

  // Pre-mapping for loan letters with nukta
  w = w.split("ज़").join("tz");
  w = w.split("ड़").join("M+");
  w = w.split("ड़").join("M+");
  w = w.split("ढ़").join("<+");
  w = w.split("ढ़").join("<+");
  w = w.split("ड\u093C").join("M+");
  w = w.split("ढ\u093C").join("<+");
  w = w.split("फ़").join("Qz");
  w = w.split("फ़").join("Qz");
  w = w.split("\u093C").join(""); // Remove any remaining stray nukta mark below

  // 1. Move Chhoti Ee matra ('ि') BEFORE its preceding consonant / conjunct cluster
  // Note: If preceded by 'र्' (Reph), 'f' stays after 'र्' so that Reph can attach to the consonant
  let pos_i = w.indexOf("ि");
  while (pos_i !== -1) {
    let start = pos_i - 1;
    if (start >= 1 && w.charAt(start) === "+") {
      start--; // include base consonant M or < before nukta +
    }
    while (start > 1 && w.charAt(start - 1) === "्" && w.charAt(start - 2) !== "र") {
      start -= 2;
    }
    if (start < 0) start = 0;
    let cluster = w.substring(start, pos_i);
    w = w.substring(0, start) + "f" + cluster + w.substring(pos_i + 1);
    pos_i = w.indexOf("ि", start + cluster.length + 2);
  }

  // 2. Handle Reph ('र्')
  // In Devanagari Unicode, Reph comes before the consonant cluster it belongs to.
  // In KrutiDev, Reph ('Z') is typed AFTER that consonant cluster and its matras.
  let pos_r = w.indexOf("र्");
  while (pos_r !== -1) {
    let idx = pos_r + 2;
    // Skip optional leading 'f' from chhoti ee
    if (idx < w.length && w.charAt(idx) === 'f') idx++;
    // Skip first consonant
    if (idx < w.length) idx++;
    // Skip conjunct continuation (् + consonant)
    while (idx < w.length && w.charAt(idx) === '्') {
      idx += 2;
    }
    // Skip any attached vowel matra
    while (idx < w.length && "ाीुूृेैोौंःँkKhHqwsSkSa%W`".includes(w.charAt(idx))) {
      idx++;
    }
    let target = w.substring(pos_r + 2, idx);
    w = w.substring(0, pos_r) + target + "Z" + w.substring(idx);
    pos_r = w.indexOf("र्");
  }

  // 3. Special multi-character conjuncts
  const conjuncts = [
    ["क्र", "dz"],
    ["प्र", "iz"],
    ["ग्र", "xz"],
    ["ब्र", "cz"],
    ["भ्र", "Hkz"],
    ["द्र", "nz"],
    ["स्र", "lz"],
    ["फ्र", "Qz"],
    ["ट्र", "Vj"],
    ["ड्र", "Mj"],
    ["ठ्र", "Bj"],
    ["ढ्र", "<j"],
    ["श्र्", "J~"],
    ["श्र", "J"],
    ["ज्ञ्", "K"],
    ["ज्ञ", "K"],
    ["त्र्", "="],
    ["त्र", "="],
    ["क्ष्", "{"],
    ["क्ष", "{k"],
    ["द्व", "}"],
    ["द्य", "|"],
    ["द्ध", "द्/k"],
    ["रु", "#"],
    ["रू", ":"],
  ];
  for (let [u, k] of conjuncts) {
    w = w.split(u).join(k);
  }

  // 4. Independent Vowels
  const vowelMap = [
    ["vkW", "vkW"], // protect pre-converted ऑ
    ["औ", "vkS"],
    ["ओ", "vks"],
    ["आ", "vk"],
    ["अ", "v"],
    ["ई", "bZ"],
    ["इ", "b"],
    ["ऊ", "mw"],
    ["उ", "m"],
    ["ऐ", ",s"],
    ["ए", ","],
    ["ऋ", "_"],
  ];
  for (let [u, k] of vowelMap) {
    w = w.split(u).join(k);
  }

  // 5. Half consonants (preceded by halant in Devanagari)
  const halfConsonants = [
    ["क्", "D"],
    ["ख्", "["],
    ["ग्", "X"],
    ["घ्", "?"],
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
    ["फ्", "Q~"],
    ["ब्", "C"],
    ["भ्", "H"],
    ["म्", "E"],
    ["य्", ";~"],
    ["ल्", "Y"],
    ["व्", "O"],
    ["श्", "'"],
    ["ष्", '"'],
    ["स्", "L"],
    ["ह्", "g~"],
  ];
  for (let [u, k] of halfConsonants) {
    w = w.split(u).join(k);
  }

  // 6. Full consonants
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
    ["ळ", "G"],
  ];
  for (let [u, k] of fullConsonants) {
    w = w.split(u).join(k);
  }

  // 7. Matras & Diacritics
  const matras = [
    ["kW", "kW"], // protect pre-converted ॉ
    ["ौ", "kS"],
    ["ो", "ks"],
    ["ा", "k"],
    ["ी", "h"],
    ["ू", "w"],
    ["ु", "q"],
    ["ृ", "`"],
    ["ै", "S"],
    ["े", "s"],
    ["ं", "a"],
    ["ँ", "a"],
    ["ः", "%"],
    ["्", "~"],
    ["़", "z"],
  ];
  for (let [u, k] of matras) {
    w = w.split(u).join(k);
  }

  return w;
}

module.exports = { unicodeToKruti };
