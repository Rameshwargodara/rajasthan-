export interface KrutiKeyMapping {
  char: string;
  shiftChar?: string;
  key: string;
  code: string;
  finger: 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky' | 'thumb';
  hand: 'left' | 'right' | 'both';
  labelTop?: string;
  labelBottom?: string;
  bgCategory?: 'orange' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';
}

export interface AltCodeItem {
  code: string;
  char: string;
  name: string;
}

export const KRUTI_ALT_CODES: AltCodeItem[] = [
  { code: 'Alt + 0161', char: 'ॅ', name: 'Chandra Bindu / Matra' },
  { code: 'Alt + 0170', char: '्र', name: 'Paden R' },
  { code: 'Alt + 0179', char: 'ठ्', name: 'Half Ttha' },
  { code: 'Alt + 0180', char: 'ड', name: 'Dda' },
  { code: 'Alt + 0182', char: 'ढ', name: 'Ddha' },
  { code: 'Alt + 0188', char: 'द्', name: 'Half Dda' },
  { code: 'Alt + 0197', char: 'त्र', name: 'Tra' },
  { code: 'Alt + 0204', char: 'द्ध', name: 'D-dha' },
  { code: 'Alt + 0216', char: 'ऋ', name: 'Rishi Ri' },
  { code: 'Alt + 0221', char: 'द्य', name: 'D-ya' },
  { code: 'Alt + 0227', char: 'क्त', name: 'K-ta' },
  { code: 'Alt + 0228', char: 'ह्य', name: 'H-ya' },
  { code: 'Alt + 0233', char: 'ह्न', name: 'H-na' },
  { code: 'Alt + 0234', char: 'ह्म', name: 'H-ma' },
  { code: 'Alt + 0235', char: 'ह्', name: 'Halant Ha' },
];

export const KEYBOARD_ROWS = [
  // Number row
  [
    { key: '`', labelTop: '~', labelBottom: '`', hindiTop: '', hindiBottom: '', finger: 'left-pinky', width: 'w-10' },
    { key: '1', labelTop: '!', labelBottom: '1', hindiTop: '!', hindiBottom: '1', finger: 'left-pinky', width: 'w-10' },
    { key: '2', labelTop: '@', labelBottom: '2', hindiTop: '/', hindiBottom: '२', finger: 'left-ring', width: 'w-10' },
    { key: '3', labelTop: '#', labelBottom: '3', hindiTop: 'रु', hindiBottom: '३', finger: 'left-middle', width: 'w-10' },
    { key: '4', labelTop: '$', labelBottom: '4', hindiTop: '+', hindiBottom: '४', finger: 'left-index', width: 'w-10' },
    { key: '5', labelTop: '%', labelBottom: '5', hindiTop: ':', hindiBottom: '५', finger: 'left-index', width: 'w-10' },
    { key: '6', labelTop: '^', labelBottom: '6', hindiTop: '‘', hindiBottom: '६', finger: 'right-index', width: 'w-10' },
    { key: '7', labelTop: '&', labelBottom: '7', hindiTop: '-', hindiBottom: '७', finger: 'right-index', width: 'w-10' },
    { key: '8', labelTop: '*', labelBottom: '8', hindiTop: '’', hindiBottom: '८', finger: 'right-middle', width: 'w-10' },
    { key: '9', labelTop: '(', labelBottom: '9', hindiTop: '(', hindiBottom: '९', finger: 'right-ring', width: 'w-10' },
    { key: '0', labelTop: ')', labelBottom: '0', hindiTop: ')', hindiBottom: '०', finger: 'right-pinky', width: 'w-10' },
    { key: '-', labelTop: '_', labelBottom: '-', hindiTop: 'ऋ', hindiBottom: '.', finger: 'right-pinky', width: 'w-10' },
    { key: '=', labelTop: '+', labelBottom: '=', hindiTop: 'त्र', hindiBottom: 'त्र', finger: 'right-pinky', width: 'w-10' },
    { key: 'Backspace', labelTop: '', labelBottom: 'Backspace', isSpecial: true, finger: 'right-pinky', width: 'w-20' },
  ],
  // Top row (QWERTY)
  [
    { key: 'Tab', labelTop: '', labelBottom: 'tab', isSpecial: true, finger: 'left-pinky', width: 'w-14' },
    { key: 'q', labelTop: 'Q', labelBottom: 'q', hindiTop: 'फ', hindiBottom: 'ु', finger: 'left-pinky', width: 'w-10' },
    { key: 'w', labelTop: 'W', labelBottom: 'w', hindiTop: 'ॅ', hindiBottom: 'ू', finger: 'left-ring', width: 'w-10' },
    { key: 'e', labelTop: 'E', labelBottom: 'e', hindiTop: 'म्', hindiBottom: 'म', finger: 'left-middle', width: 'w-10' },
    { key: 'r', labelTop: 'R', labelBottom: 'r', hindiTop: 'त्', hindiBottom: 'त', finger: 'left-index', width: 'w-10' },
    { key: 't', labelTop: 'T', labelBottom: 't', hindiTop: 'ज्', hindiBottom: 'ज', finger: 'left-index', width: 'w-10' },
    { key: 'y', labelTop: 'Y', labelBottom: 'y', hindiTop: 'ल्', hindiBottom: 'ल', finger: 'right-index', width: 'w-10' },
    { key: 'u', labelTop: 'U', labelBottom: 'u', hindiTop: 'न्', hindiBottom: 'न', finger: 'right-index', width: 'w-10' },
    { key: 'i', labelTop: 'I', labelBottom: 'i', hindiTop: 'प्', hindiBottom: 'प', finger: 'right-middle', width: 'w-10' },
    { key: 'o', labelTop: 'O', labelBottom: 'o', hindiTop: 'व्', hindiBottom: 'व', finger: 'right-ring', width: 'w-10' },
    { key: 'p', labelTop: 'P', labelBottom: 'p', hindiTop: 'च्', hindiBottom: 'च', finger: 'right-pinky', width: 'w-10' },
    { key: '[', labelTop: '{', labelBottom: '[', hindiTop: 'क्ष्', hindiBottom: 'ख्', finger: 'right-pinky', width: 'w-10' },
    { key: ']', labelTop: '}', labelBottom: ']', hindiTop: 'द्व', hindiBottom: ',', finger: 'right-pinky', width: 'w-10' },
    { key: '\\', labelTop: '|', labelBottom: '\\', hindiTop: 'द्य', hindiBottom: '?', finger: 'right-pinky', width: 'w-10' },
  ],
  // Home row (ASDFGHJKL)
  [
    { key: 'CapsLock', labelTop: '', labelBottom: 'caps lock', isSpecial: true, finger: 'left-pinky', width: 'w-16' },
    { key: 'a', labelTop: 'A', labelBottom: 'a', hindiTop: 'ाे', hindiBottom: 'ं', finger: 'left-pinky', width: 'w-10' },
    { key: 's', labelTop: 'S', labelBottom: 's', hindiTop: 'ै', hindiBottom: 'े', finger: 'left-ring', width: 'w-10' },
    { key: 'd', labelTop: 'D', labelBottom: 'd', hindiTop: 'क्', hindiBottom: 'क', finger: 'left-middle', width: 'w-10' },
    { key: 'f', labelTop: 'F', labelBottom: 'f', hindiTop: 'थ्', hindiBottom: 'ि', finger: 'left-index', width: 'w-10' },
    { key: 'g', labelTop: 'G', labelBottom: 'g', hindiTop: 'ळ', hindiBottom: 'ह', finger: 'left-index', width: 'w-10' },
    { key: 'h', labelTop: 'H', labelBottom: 'h', hindiTop: 'भ्', hindiBottom: 'ी', finger: 'right-index', width: 'w-10' },
    { key: 'j', labelTop: 'J', labelBottom: 'j', hindiTop: 'श्र', hindiBottom: 'र', finger: 'right-index', width: 'w-10' },
    { key: 'k', labelTop: 'K', labelBottom: 'k', hindiTop: 'ज्ञ', hindiBottom: 'ा', finger: 'right-middle', width: 'w-10' },
    { key: 'l', labelTop: 'L', labelBottom: 'l', hindiTop: 'स्', hindiBottom: 'स', finger: 'right-ring', width: 'w-10' },
    { key: ';', labelTop: ':', labelBottom: ';', hindiTop: 'रु', hindiBottom: 'य', finger: 'right-pinky', width: 'w-10' },
    { key: "'", labelTop: '"', labelBottom: "'", hindiTop: 'ष्', hindiBottom: 'श', finger: 'right-pinky', width: 'w-10' },
    { key: 'Enter', labelTop: '', labelBottom: 'Enter', isSpecial: true, finger: 'right-pinky', width: 'w-20' },
  ],
  // Bottom row (ZXCVBNM)
  [
    { key: 'Shift', labelTop: '', labelBottom: 'Shift', isSpecial: true, finger: 'left-pinky', width: 'w-20' },
    { key: 'z', labelTop: 'Z', labelBottom: 'z', hindiTop: 'र्', hindiBottom: '़', finger: 'left-pinky', width: 'w-10' },
    { key: 'x', labelTop: 'X', labelBottom: 'x', hindiTop: 'ग्', hindiBottom: 'ग', finger: 'left-ring', width: 'w-10' },
    { key: 'c', labelTop: 'C', labelBottom: 'c', hindiTop: 'ब्', hindiBottom: 'ब', finger: 'left-middle', width: 'w-10' },
    { key: 'v', labelTop: 'V', labelBottom: 'v', hindiTop: 'ट', hindiBottom: 'अ', finger: 'left-index', width: 'w-10' },
    { key: 'b', labelTop: 'B', labelBottom: 'b', hindiTop: 'ठ', hindiBottom: 'इ', finger: 'left-index', width: 'w-10' },
    { key: 'n', labelTop: 'N', labelBottom: 'n', hindiTop: 'छ', hindiBottom: 'द', finger: 'right-index', width: 'w-10' },
    { key: 'm', labelTop: 'M', labelBottom: 'm', hindiTop: 'ड', hindiBottom: 'उ', finger: 'right-index', width: 'w-10' },
    { key: ',', labelTop: '<', labelBottom: ',', hindiTop: 'ढ', hindiBottom: 'ए', finger: 'right-middle', width: 'w-10' },
    { key: '.', labelTop: '>', labelBottom: '.', hindiTop: 'झ्', hindiBottom: 'ण्', finger: 'right-ring', width: 'w-10' },
    { key: '/', labelTop: '?', labelBottom: '/', hindiTop: 'ध', hindiBottom: 'ध्', finger: 'right-pinky', width: 'w-10' },
    { key: 'ShiftRight', labelTop: '', labelBottom: 'Shift', isSpecial: true, finger: 'right-pinky', width: 'w-24' },
  ],
  // Spacebar row
  [
    { key: 'Ctrl', labelTop: '', labelBottom: 'Ctrl', isSpecial: true, finger: 'left-pinky', width: 'w-12' },
    { key: 'Alt', labelTop: '', labelBottom: 'Alt', isSpecial: true, finger: 'thumb', width: 'w-12' },
    { key: ' ', labelTop: '', labelBottom: '', isSpecial: true, finger: 'thumb', width: 'w-72' },
    { key: 'AltRight', labelTop: '', labelBottom: 'Alt', isSpecial: true, finger: 'thumb', width: 'w-12' },
    { key: 'CtrlRight', labelTop: '', labelBottom: 'Ctrl', isSpecial: true, finger: 'right-pinky', width: 'w-12' },
  ],
];

export const INSCRIPT_KEYBOARD_ROWS = [
  // Number row
  [
    { key: '`', labelTop: '~', labelBottom: '`', hindiTop: '', hindiBottom: '`', finger: 'left-pinky', width: 'w-10' },
    { key: '1', labelTop: '!', labelBottom: '1', hindiTop: 'ऍ', hindiBottom: '१', finger: 'left-pinky', width: 'w-10' },
    { key: '2', labelTop: '@', labelBottom: '2', hindiTop: 'ॅ', hindiBottom: '२', finger: 'left-ring', width: 'w-10' },
    { key: '3', labelTop: '#', labelBottom: '3', hindiTop: '्र', hindiBottom: '३', finger: 'left-middle', width: 'w-10' },
    { key: '4', labelTop: '$', labelBottom: '4', hindiTop: 'र्', hindiBottom: '४', finger: 'left-index', width: 'w-10' },
    { key: '5', labelTop: '%', labelBottom: '5', hindiTop: 'ज्ञ', hindiBottom: '५', finger: 'left-index', width: 'w-10' },
    { key: '6', labelTop: '^', labelBottom: '6', hindiTop: 'त्र', hindiBottom: '६', finger: 'right-index', width: 'w-10' },
    { key: '7', labelTop: '&', labelBottom: '7', hindiTop: 'क्ष', hindiBottom: '७', finger: 'right-index', width: 'w-10' },
    { key: '8', labelTop: '*', labelBottom: '8', hindiTop: 'श्र', hindiBottom: '८', finger: 'right-middle', width: 'w-10' },
    { key: '9', labelTop: '(', labelBottom: '9', hindiTop: '(', hindiBottom: '९', finger: 'right-ring', width: 'w-10' },
    { key: '0', labelTop: ')', labelBottom: '0', hindiTop: ')', hindiBottom: '०', finger: 'right-pinky', width: 'w-10' },
    { key: '-', labelTop: '_', labelBottom: '-', hindiTop: 'ः', hindiBottom: '-', finger: 'right-pinky', width: 'w-10' },
    { key: '=', labelTop: '+', labelBottom: '=', hindiTop: 'ऋ', hindiBottom: 'ृ', finger: 'right-pinky', width: 'w-10' },
    { key: 'Backspace', labelTop: '', labelBottom: 'Backspace', isSpecial: true, finger: 'right-pinky', width: 'w-20' },
  ],
  // Top row (QWERTY)
  [
    { key: 'Tab', labelTop: '', labelBottom: 'tab', isSpecial: true, finger: 'left-pinky', width: 'w-14' },
    { key: 'q', labelTop: 'Q', labelBottom: 'q', hindiTop: 'औ', hindiBottom: 'ौ', finger: 'left-pinky', width: 'w-10' },
    { key: 'w', labelTop: 'W', labelBottom: 'w', hindiTop: 'ऐ', hindiBottom: 'ै', finger: 'left-ring', width: 'w-10' },
    { key: 'e', labelTop: 'E', labelBottom: 'e', hindiTop: 'आ', hindiBottom: 'ा', finger: 'left-middle', width: 'w-10' },
    { key: 'r', labelTop: 'R', labelBottom: 'r', hindiTop: 'ई', hindiBottom: 'ी', finger: 'left-index', width: 'w-10' },
    { key: 't', labelTop: 'T', labelBottom: 't', hindiTop: 'ऊ', hindiBottom: 'ू', finger: 'left-index', width: 'w-10' },
    { key: 'y', labelTop: 'Y', labelBottom: 'y', hindiTop: 'भ', hindiBottom: 'ब', finger: 'right-index', width: 'w-10' },
    { key: 'u', labelTop: 'U', labelBottom: 'u', hindiTop: 'ङ', hindiBottom: 'ह', finger: 'right-index', width: 'w-10' },
    { key: 'i', labelTop: 'I', labelBottom: 'i', hindiTop: 'घ', hindiBottom: 'ग', finger: 'right-middle', width: 'w-10' },
    { key: 'o', labelTop: 'O', labelBottom: 'o', hindiTop: 'ध', hindiBottom: 'द', finger: 'right-ring', width: 'w-10' },
    { key: 'p', labelTop: 'P', labelBottom: 'p', hindiTop: 'झ', hindiBottom: 'ज', finger: 'right-pinky', width: 'w-10' },
    { key: '[', labelTop: '{', labelBottom: '[', hindiTop: 'ढ', hindiBottom: 'ड', finger: 'right-pinky', width: 'w-10' },
    { key: ']', labelTop: '}', labelBottom: ']', hindiTop: 'ञ', hindiBottom: '़', finger: 'right-pinky', width: 'w-10' },
    { key: '\\', labelTop: '|', labelBottom: '\\', hindiTop: 'ऑ', hindiBottom: 'ॉ', finger: 'right-pinky', width: 'w-10' },
  ],
  // Home row (ASDFGHJKL)
  [
    { key: 'CapsLock', labelTop: '', labelBottom: 'caps lock', isSpecial: true, finger: 'left-pinky', width: 'w-16' },
    { key: 'a', labelTop: 'A', labelBottom: 'a', hindiTop: 'ओ', hindiBottom: 'ो', finger: 'left-pinky', width: 'w-10' },
    { key: 's', labelTop: 'S', labelBottom: 's', hindiTop: 'ए', hindiBottom: 'े', finger: 'left-ring', width: 'w-10' },
    { key: 'd', labelTop: 'D', labelBottom: 'd', hindiTop: 'अ', hindiBottom: '्', finger: 'left-middle', width: 'w-10' },
    { key: 'f', labelTop: 'F', labelBottom: 'f', hindiTop: 'इ', hindiBottom: 'ि', finger: 'left-index', width: 'w-10' },
    { key: 'g', labelTop: 'G', labelBottom: 'g', hindiTop: 'उ', hindiBottom: 'ु', finger: 'left-index', width: 'w-10' },
    { key: 'h', labelTop: 'H', labelBottom: 'h', hindiTop: 'फ', hindiBottom: 'प', finger: 'right-index', width: 'w-10' },
    { key: 'j', labelTop: 'J', labelBottom: 'j', hindiTop: 'ऱ', hindiBottom: 'र', finger: 'right-index', width: 'w-10' },
    { key: 'k', labelTop: 'K', labelBottom: 'k', hindiTop: 'ख', hindiBottom: 'क', finger: 'right-middle', width: 'w-10' },
    { key: 'l', labelTop: 'L', labelBottom: 'l', hindiTop: 'थ', hindiBottom: 'त', finger: 'right-ring', width: 'w-10' },
    { key: ';', labelTop: ':', labelBottom: ';', hindiTop: 'छ', hindiBottom: 'च', finger: 'right-pinky', width: 'w-10' },
    { key: "'", labelTop: '"', labelBottom: "'", hindiTop: 'ठ', hindiBottom: 'ट', finger: 'right-pinky', width: 'w-10' },
    { key: 'Enter', labelTop: '', labelBottom: 'Enter', isSpecial: true, finger: 'right-pinky', width: 'w-20' },
  ],
  // Bottom row (ZXCVBNM)
  [
    { key: 'Shift', labelTop: '', labelBottom: 'Shift', isSpecial: true, finger: 'left-pinky', width: 'w-20' },
    { key: 'z', labelTop: 'Z', labelBottom: 'z', hindiTop: 'ऒ', hindiBottom: 'ॆ', finger: 'left-pinky', width: 'w-10' },
    { key: 'x', labelTop: 'X', labelBottom: 'x', hindiTop: 'ँ', hindiBottom: 'ं', finger: 'left-ring', width: 'w-10' },
    { key: 'c', labelTop: 'C', labelBottom: 'c', hindiTop: 'ण', hindiBottom: 'म', finger: 'left-middle', width: 'w-10' },
    { key: 'v', labelTop: 'V', labelBottom: 'v', hindiTop: 'ऩ', hindiBottom: 'न', finger: 'left-index', width: 'w-10' },
    { key: 'b', labelTop: 'B', labelBottom: 'b', hindiTop: 'ऴ', hindiBottom: 'व', finger: 'left-index', width: 'w-10' },
    { key: 'n', labelTop: 'N', labelBottom: 'n', hindiTop: 'ळ', hindiBottom: 'ल', finger: 'right-index', width: 'w-10' },
    { key: 'm', labelTop: 'M', labelBottom: 'm', hindiTop: 'श', hindiBottom: 'स', finger: 'right-index', width: 'w-10' },
    { key: ',', labelTop: '<', labelBottom: ',', hindiTop: 'ष', hindiBottom: ',', finger: 'right-middle', width: 'w-10' },
    { key: '.', labelTop: '>', labelBottom: '.', hindiTop: '।', hindiBottom: '.', finger: 'right-ring', width: 'w-10' },
    { key: '/', labelTop: '?', labelBottom: '/', hindiTop: 'य़', hindiBottom: 'य', finger: 'right-pinky', width: 'w-10' },
    { key: 'ShiftRight', labelTop: '', labelBottom: 'Shift', isSpecial: true, finger: 'right-pinky', width: 'w-24' },
  ],
  // Spacebar row
  [
    { key: 'Ctrl', labelTop: '', labelBottom: 'Ctrl', isSpecial: true, finger: 'left-pinky', width: 'w-12' },
    { key: 'Alt', labelTop: '', labelBottom: 'Alt', isSpecial: true, finger: 'thumb', width: 'w-12' },
    { key: ' ', labelTop: '', labelBottom: '', isSpecial: true, finger: 'thumb', width: 'w-72' },
    { key: 'AltRight', labelTop: '', labelBottom: 'Alt', isSpecial: true, finger: 'thumb', width: 'w-12' },
    { key: 'CtrlRight', labelTop: '', labelBottom: 'Ctrl', isSpecial: true, finger: 'right-pinky', width: 'w-12' },
  ],
];

export function getKeyboardRowsForLayout(layout: string) {
  if (layout === 'inscript') {
    return INSCRIPT_KEYBOARD_ROWS;
  }
  return KEYBOARD_ROWS;
}

// Mapping key codes to Hindi characters (Kruti Dev lowercase and uppercase)
export const KEY_TO_HINDI: Record<string, string> = {
  // Lowercase / Direct keys
  'g': 'ह',
  'k': 'ा',
  'h': 'ी',
  'j': 'र',
  'd': 'क',
  'f': 'ि',
  's': 'े',
  'a': 'ं',
  'l': 'स',
  ';': 'य',
  "'": 'श',
  'q': 'ु',
  'w': 'ू',
  'e': 'म',
  'r': 'त',
  't': 'ज',
  'y': 'ल',
  'u': 'न',
  'i': 'प',
  'o': 'व',
  'p': 'च',
  '[': 'ख्',
  ']': ',',
  '\\': '?',
  'z': '़',
  'x': 'ग',
  'c': 'ब',
  'v': 'अ',
  'b': 'इ',
  'n': 'द',
  'm': 'उ',
  ',': 'ए',
  '.': 'ण्',
  '/': 'ध्',
  ' ': ' ',
  
  // Shifted / Uppercase keys
  'G': 'ळ',
  'K': 'ज्ञ',
  'H': 'भ्',
  'J': 'श्र',
  'D': 'क्',
  'F': 'थ्',
  'S': 'ै',
  'A': 'ाे',
  'L': 'स्',
  ':': 'रु',
  '"': 'ष्',
  'Q': 'फ',
  'W': 'ॅ',
  'E': 'म्',
  'R': 'त्',
  'T': 'ज्',
  'Y': 'ल्',
  'U': 'न्',
  'I': 'प्',
  'O': 'व्',
  'P': 'च्',
  '{': 'क्ष्',
  '}': 'द्व',
  '|': 'द्य',
  'Z': 'र्',
  'X': 'ग्',
  'C': 'ब्',
  'V': 'ट',
  'B': 'ठ',
  'N': 'छ',
  'M': 'ड',
  '<': 'ढ',
  '>': 'झ्',
  '?': 'ध',
};

// Map Hindi character to expected English key press
export const HINDI_TO_KEY: Record<string, string> = {
  'ह': 'g',
  'ा': 'k',
  'ी': 'h',
  'र': 'j',
  'क': 'd',
  'ि': 'f',
  'े': 's',
  'ं': 'a',
  'स': 'l',
  'य': ';',
  'श': "'",
  'ु': 'q',
  'ू': 'w',
  'म': 'e',
  'त': 'r',
  'ज': 't',
  'ल': 'y',
  'न': 'u',
  'प': 'i',
  'व': 'o',
  'च': 'p',
  'ख': '[',
  'ख्': '[',
  'ग': 'x',
  'ब': 'c',
  'अ': 'v',
  'इ': 'b',
  'द': 'n',
  'उ': 'm',
  'ए': ',',
  'ण': '.',
  'ण्': '.',
  'ध': '/',
  'ध्': '/',
  ' ': ' ',
};

export const COMBINING_MARKS = new Set([
  '\u093E', // ा (Aa matra)
  '\u093F', // ि (Choti Ee matra)
  '\u0940', // ी (Badi Ee matra)
  '\u0941', // ु (Chota U matra)
  '\u0942', // ू (Bada U matra)
  '\u0943', // ृ (Ri matra)
  '\u0944', // ॄ (Rii matra)
  '\u0945', // ॅ (Chandra matra)
  '\u0946', // ॆ (Short E)
  '\u0947', // े (E matra)
  '\u0948', // ै (Ai matra)
  '\u0949', // ॉ (Chandra O)
  '\u094A', // ॊ (Short O)
  '\u094B', // ो (O matra)
  '\u094C', // ौ (Au matra)
  '\u0901', // ँ (Chandrabindu)
  '\u0902', // ं (Anusvara / Bindi)
  '\u0903', // ः (Visarga)
  '\u093C', // ़ (Nukta)
  '\u094D', // ् (Halant / Virama)
]);

/**
 * Strips any U+25CC (dotted circle ◌) and wraps isolated combining marks
 * with a non-breaking space base so browser text shaping engines never display a dotted circle.
 */
export function cleanHindiChar(char: string | undefined): string {
  if (!char) return '';
  // Remove any explicit dotted circle (U+25CC)
  const clean = char.replace(/\u25CC/g, '');
  if (!clean) return '';

  // If it's a standalone combining mark or start with combining mark, prepend non-breaking space
  if (
    COMBINING_MARKS.has(clean) ||
    (clean.length === 1 && clean.charCodeAt(0) >= 0x093E && clean.charCodeAt(0) <= 0x094D) ||
    (clean.length === 1 && (clean.charCodeAt(0) === 0x0901 || clean.charCodeAt(0) === 0x0902 || clean.charCodeAt(0) === 0x0903 || clean.charCodeAt(0) === 0x093C))
  ) {
    return '\u00A0' + clean;
  }
  return clean;
}

export function getFingerForKey(keyName: string): {
  finger: string;
  hand: 'left' | 'right' | 'both';
  fingerIndex: number; // 0: pinky, 1: ring, 2: middle, 3: index, 4: thumb
} {
  const lower = keyName.toLowerCase();
  
  if (['1', 'q', 'a', 'z', '`', 'tab', 'capslock', 'shift', 'ctrl'].includes(lower)) {
    return { finger: 'left-pinky', hand: 'left', fingerIndex: 0 };
  }
  if (['2', 'w', 's', 'x'].includes(lower)) {
    return { finger: 'left-ring', hand: 'left', fingerIndex: 1 };
  }
  if (['3', 'e', 'd', 'c'].includes(lower)) {
    return { finger: 'left-middle', hand: 'left', fingerIndex: 2 };
  }
  if (['4', '5', 'r', 't', 'f', 'g', 'v', 'b'].includes(lower)) {
    return { finger: 'left-index', hand: 'left', fingerIndex: 3 };
  }
  if (['6', '7', 'y', 'u', 'h', 'j', 'n', 'm'].includes(lower)) {
    return { finger: 'right-index', hand: 'right', fingerIndex: 3 };
  }
  if (['8', 'i', 'k', ','].includes(lower)) {
    return { finger: 'right-middle', hand: 'right', fingerIndex: 2 };
  }
  if (['9', 'o', 'l', '.'].includes(lower)) {
    return { finger: 'right-ring', hand: 'right', fingerIndex: 1 };
  }
  if (['0', '-', '=', 'p', '[', ']', '\\', ';', "'", '/', 'enter', 'backspace'].includes(lower)) {
    return { finger: 'right-pinky', hand: 'right', fingerIndex: 0 };
  }
  if (lower === ' ' || lower === 'space' || lower === 'alt') {
    return { finger: 'thumb', hand: 'both', fingerIndex: 4 };
  }

  return { finger: 'left-index', hand: 'left', fingerIndex: 3 };
}
