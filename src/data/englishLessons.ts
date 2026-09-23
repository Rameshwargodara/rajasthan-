export interface EnglishLesson {
  id: number;
  title: string;
  category: string;
  focusKeys: string;
  description: string;
  content: string;
}

export const ENGLISH_LEARN_KEYS_LESSONS: EnglishLesson[] = [
  // --- HOME ROW (Exercises 1 to 7) ---
  {
    id: 1,
    title: 'Exercise : 1/32',
    category: 'Home Row - Individual Keys',
    focusKeys: 'a s d f j k l ;',
    description: 'Home row baseline keys individual repetitions',
    content:
      'aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;; aaaa ssss dddd ffff jjjj kkkk llll ;;;;',
  },
  {
    id: 2,
    title: 'Exercise : 2/32',
    category: 'Home Row - Pairs & Sequences',
    focusKeys: 'as df jk l;',
    description: 'Home row consecutive pairs and reversal drill',
    content:
      'asdf ;lkj asdf ;lkj fdfd jkjk asas ;l;l asdf ;lkj fdsa ;lkj asdf ;lkj aass ddff jjkk ll;; asdf ;lkj asdf ;lkj fdfd jkjk asas ;l;l asdf ;lkj fdsa ;lkj asdf ;lkj aass ddff jjkk ll;; asdf ;lkj asdf ;lkj fdfd jkjk asas ;l;l asdf ;lkj fdsa ;lkj',
  },
  {
    id: 3,
    title: 'Exercise : 3/32',
    category: 'Home Row - Center Keys G & H',
    focusKeys: 'g h f j a s d l ;',
    description: 'Inner home row reach with index fingers G and H',
    content:
      'gggg hhhh gggg hhhh fggf jhhj fggf jhhj fgfg jhjh fgfg jhjh asdfg ;lkjh asdfg ;lkjh ghaf jhag ghaf jhag fghj fghj gf hj gf hj asdfg ;lkjh fghj fghj asdfg ;lkjh ghaf jhag ghaf jhag fghj fghj gf hj gf hj asdfg ;lkjh fghj fghj',
  },
  {
    id: 4,
    title: 'Exercise : 4/32',
    category: 'Home Row - Alternating Drill',
    focusKeys: 'f j d k s l a ;',
    description: 'Left and right hand coordination and alternating strokes',
    content:
      'fjdk sl;a fjdk sl;a fjdk sl;a ;als kdjf ;als kdjf ffjj ddkk ssll aa;; ffjj ddkk ssll aa;; fjdksl;a ;alskdjf fjdksl;a ;alskdjf fjdk sl;a fjdk sl;a ;als kdjf ;als kdjf ffjj ddkk ssll aa;; ffjj ddkk ssll aa;; fjdksl;a ;alskdjf fjdksl;a',
  },
  {
    id: 5,
    title: 'Exercise : 5/32',
    category: 'Home Row - Middle & Ring Combinations',
    focusKeys: 'd k j s l ;',
    description: 'Home row middle finger and ring finger interval rhythm',
    content:
      'ddkk ddkk kkdd dkd j dkd j j dkd j kdj ddkk ddkk kkdd dkd j dkd j j dkd j kdj ddkk ddkk kkdd dkd j dkd j ssss llll llll dddd dddd kkkk ;;;; ;;;; ;;;; ssss ssss llll llll dddd dddd kkkk ;;;; ;;;; ;;;; ssss ssss llll llll dddd dddd kkkk ;;;; ;;;; ;;;;',
  },
  {
    id: 6,
    title: 'Exercise : 6/32',
    category: 'Home Row - Practice Words',
    focusKeys: 'all fall glad sad ask flash half dash',
    description: 'First vocabulary set composed exclusively of home row keys',
    content:
      'all fall glad sad ask flash half dash gas ash glass salsa gala flask falls asked adds flags flash hall dad lad salads salad flag glad half dash flash glass ask fall dad sad all salsa gala glad fall ask flash flags all fall glad sad ask flash half dash gas ash glass salsa gala flask',
  },
  {
    id: 7,
    title: 'Exercise : 7/32',
    category: 'Home Row - Review Words & Fluid Drill',
    focusKeys: 'fad had gas ash gala glad fall flask',
    description: 'Mastery review words consolidating the entire home row',
    content:
      'fad had gas ash gala glad half dash fall flask hall dad lad salads flag ask fall salsa gala glad fall ask flash flags fad had gas ash gala glad half dash fall flask hall dad lad salads flag ask fall salsa gala glad fall ask flash flags all fall glad sad ask flash half dash',
  },

  // --- UPPER ROW (Exercises 8 to 17) ---
  {
    id: 8,
    title: 'Exercise : 8/32',
    category: 'Upper Row - Overview & All Keys',
    focusKeys: 'q w e r t y u i o p',
    description: 'Full upper row layout introduction and sequential passes',
    content:
      'qqqq pppp wwww oooo eeee iiii rrrr uuuu yyyy rruu uurr eeii iiee wwoo ooww qqpp ppqq qwertyuiop qertyuiop qertyuiop qqqq pppp wwww oooo eeee iiii rrrr uuuu yyyy rruu uurr eeii iiee wwoo ooww qqpp ppqq qwertyuiop qertyuiop qwertyuiop',
  },
  {
    id: 9,
    title: 'Exercise : 9/32',
    category: 'Upper Row - Index Keys R & U',
    focusKeys: 'r u f j',
    description: 'Index finger vertical reach to R and U from home row',
    content:
      'rrr rrr rrr rrr uuu uuu uuu uuu rrr uuu rrr uuu rru uur rur uru rrrr uuuu fff rrr jjj uuu frf juj frf juj fur ruj fru jur ruf jur frf frf juj juj fur fur jur jur fur ruj fru jur ruf jur fff rrr jjj uuu frf juj frf juj fur ruj fru jur ruf jur',
  },
  {
    id: 10,
    title: 'Exercise : 10/32',
    category: 'Upper Row - Middle Keys E & I',
    focusKeys: 'e i d k',
    description: 'Middle finger upper reaches to vowels E and I',
    content:
      'iii iii iii iii eee eee eee eee iii eee iii eee iii eee iei iei iei iei eie eie eie eie iii iii iii eee eee eee ie ie ie ei ei ei ii ee ie ei ei ie ii ie ee ei i i i i e e e e i e e i i e e i iei iie eii eei iee eee iii eie iii iii eee eee iii eee kkk iii kkk iii ddd eee ddd eee kik kik ded ded iki iki ede ede aea',
  },
  {
    id: 11,
    title: 'Exercise : 11/32',
    category: 'Upper Row - E & I with Home Row & Vowels',
    focusKeys: 'e i + home row',
    description: 'Combining E and I with all home row letters and vowel patterns',
    content:
      'ded ded kik kik ded kik kik ded ade ade ski ski die die kid kid ill ill eel eel see see fee fee lie lie tie tie did did led led aid aid fed fed hide side like lake file life fire tide ride dirt risk silk fell desk deal seal leak meal leaf sail fail file life line side ride hide lake like life line file',
  },
  {
    id: 12,
    title: 'Exercise : 12/32',
    category: 'Upper Row - Ring Keys W & O',
    focusKeys: 'w o s l',
    description: 'Ring finger reaches to W and O with direct key repetitions',
    content:
      'ooo ooo ooo ooo www www www www ooo www ooo www ooo www owo owo owo owo wow wow wow wow ooo ooo ooo www www www ow ow ow wo wo oo ww ow wo wo ow oo ow ww wo o o o o w w w w o w w o o w w o owo oow woo wwo oww www ooo wow',
  },
  {
    id: 13,
    title: 'Exercise : 13/32',
    category: 'Upper Row - W & O with Home Row & All Vowels',
    focusKeys: 'w o + home row',
    description: 'Coordinating W and O across each home row key and all vowels',
    content:
      'ooo ooo www www ooo www lll ooo lll ooo sss www sss www lol lol sws sws olo olo wsw wsw awa awa sws sws dwd dwd fwf fwf gwg gwg hwh hwh jwj jwj kwk kwk lwl lwl ;w; ;w; aoa aoa sos sos dod dod fof fof gog gog hoh hoh joj joj kok kok lol lol ;o; ;o;',
  },
  {
    id: 14,
    title: 'Exercise : 14/32',
    category: 'Upper Row - Pinky Keys Q & P',
    focusKeys: 'q p a ;',
    description: 'Pinky reaches to Q and P with home row anchor keys',
    content:
      'qqq qqq qqq qqq ppp ppp ppp ppp qqq ppp qqq ppp qp pq qqp ppq qqqq pppp aqa ;p; aqa ;p; qa p; qa p; qwq opo qeq ipi qrq upu qaq p;p quit keep page pool park path pure peep drop crop shop loop pool jump park quad quote keep quit peep page pure path part quiet quick drop shop loop pool jump park',
  },
  {
    id: 15,
    title: 'Exercise : 15/32',
    category: 'Upper Row - Center Keys T & Y',
    focusKeys: 't y f j g h',
    description: 'Inner index extensions to T and Y combined with vowels',
    content:
      'ttt ttt ttt ttt yyy yyy yyy yyy ttt yyy ttt yyy ty yt tty yyt tttt yyyy ftf jyj ftf jyj gtg hyh tot yoy tet yiy tat yay toy yet try you they that the stay slay talk tell took yard year tall tell toss task rust just duty holy city pity lady easy gray pray stay they that with true your rush hurt yard',
  },
  {
    id: 16,
    title: 'Exercise : 16/32',
    category: 'Upper Row & Home Row - Combined Words',
    focusKeys: 'Upper + Home row vocabulary',
    description: 'Rich word drill combining Upper Row and Home Row',
    content:
      'type write paper power quote reply tower pretty quiet route report equip worry puppy proud output require equity order tree root port tier wire pure pour poet peer wire trip port slow blow flow grow show work word wood good look took book wood wool roof hook wolf tool wool type write paper power quote reply tower pretty',
  },
  {
    id: 17,
    title: 'Exercise : 17/32',
    category: 'Upper Row & Home Row - Continuous Sentences',
    focusKeys: 'Fluid sentence flow',
    description: 'Full sentences built from upper row and home row keys',
    content:
      'were your true friends write to the great power of knowledge our youth will lead the world with pride and joy work hard with quiet hope your true friends were glad to help pure thoughts lead to high deeds keep your feet steady while you leap write good letters daily order power peace duty truth',
  },

  // --- BOTTOM ROW (Exercises 18 to 25) ---
  {
    id: 18,
    title: 'Exercise : 18/32',
    category: 'Bottom Row - Overview & All Keys',
    focusKeys: 'z x c v b n m , . /',
    description: 'Bottom row layout introduction and finger reach mapping',
    content:
      'zzzz xxxx cccc vvvv bbbb nnnn mmmm ,,,, .... //// zxcvbnm ,./ zxcvbnm zxcvbnm zzzz xxxx cccc vvvv bbbb nnnn mmmm ,,,, .... //// zxcvbnm ,./ zxcvbnm zzzz xxxx cccc vvvv bbbb nnnn mmmm ,,,, .... //// zxcvbnm ,./ zxcvbnm zxcvbnm zzzz xxxx cccc vvvv bbbb nnnn mmmm ,,,, .... ////',
  },
  {
    id: 19,
    title: 'Exercise : 19/32',
    category: 'Bottom Row - Index Keys V & M',
    focusKeys: 'v m f j',
    description: 'Reaching downward to V and M with index fingers',
    content:
      'vvv vvv vvv vvv mmm mmm mmm mmm vvv mmm vvv mmm vm mv vvm mmv vvvv mmmm fvf jmj fvf jmj gvg hmh vmv mvm fvf jmj vim move beam man van map rim sum vim vim move move beam beam man man van van map map fvf jmj vim move beam man van map vim move beam man van map',
  },
  {
    id: 20,
    title: 'Exercise : 20/32',
    category: 'Bottom Row - Inner Keys B & N',
    focusKeys: 'b n f j g h',
    description: 'Reaching inner bottom keys B and N from home position',
    content:
      'bbb bbb bbb bbb nnn nnn nnn nnn bbb nnn bbb nnn bn nb bbn nnb bbbb nnnn fbf jnj fbf jnj gbg hnh bob non bin bin ban ban bun bun bit nit bag nag born norm bob non bin bin ban ban bun bun bit nit bag nag born norm fbf jnj bob bin ban bun bit bag born norm bank bond band bird barn',
  },
  {
    id: 21,
    title: 'Exercise : 21/32',
    category: 'Bottom Row - Middle & Ring Keys C & X',
    focusKeys: 'c x d s',
    description: 'Downward middle and ring reaches to C and X with vowels',
    content:
      'ccc ccc ccc ccc xxx xxx xxx xxx ccc xxx ccc xxx cx xc ccx xxc cccc xxxx dcd sxs dcd sxs coc xox cec xix cac xax cup mix can six call next card exam cell exit taxi flex cup mix can six call next card exam cell exit taxi flex dcd sxs card cash coat cook cold calm coat copy fact lock rock sock duck pack lack',
  },
  {
    id: 22,
    title: 'Exercise : 22/32',
    category: 'Bottom Row - Pinky & Punctuation Z and , . /',
    focusKeys: 'z , . / a l ;',
    description: 'Pinky reach to Z and right hand punctuation comma, period, slash',
    content:
      'zzz zzz zzz zzz ,,, ,,, ... ... /// /// zzz ,,, ... /// zzzz ,,,, .... //// aza l,l ;.; aza l,l ;.; zap zip size zero maze buzz zone jazz scan zip scan size zeal zoom buzz zap zip size zero maze buzz zone jazz scan zip scan size zeal zoom buzz aza l,l ;.; zip zoo zero zinc zeal zone jazz buzz quiz size',
  },
  {
    id: 23,
    title: 'Exercise : 23/32',
    category: 'Bottom Row - With Home Row & All Vowels',
    focusKeys: 'Bottom row + vowels',
    description: 'Harmonizing bottom row consonants with vowels and home anchors',
    content:
      'vov mom non bob coc xox zoz vim van ban can man map name vine vein cave coin move beam bone burn norm verb voice view neck back vov mom non bob coc xox zoz vim van ban can man map name vine vein cave coin move beam bone burn norm verb voice view neck back move beam bone burn norm verb voice view neck back',
  },
  {
    id: 24,
    title: 'Exercise : 24/32',
    category: 'Bottom Row, Home Row & Upper Row - Full Word Drill',
    focusKeys: 'Three-row vocabulary',
    description: 'Complete vocabulary combining bottom row with all previous rows',
    content:
      'come calm call camp card cook city cool calm civil cabin climb clean clear clock crime crown cross cycle check cheer cover clever voice vowel vacuum vast victim victory volume value van vapor velvet verse vessel vote came climb cloud clock coach cold color comic common company',
  },
  {
    id: 25,
    title: 'Exercise : 25/32',
    category: 'Three Rows - Comprehensive Review & Pangrams',
    focusKeys: 'All 26 letters fluid flow',
    description: 'Complete alphabet pan-keyboard speed and rhythm builder',
    content:
      'the quick brown fox jumps over a lazy dog back in time move each step with care many calm voices make good sense climb every high peak pack my box with five dozen liquor jugs how vexingly quick daft zebras jump the quick brown fox jumps over a lazy dog back in time move each step with care many calm voices make good sense',
  },

  // --- SHIFT KEYS & CAPITAL LETTERS (Exercises 26 to 29) ---
  {
    id: 26,
    title: 'Exercise : 26/32',
    category: 'Shift Keys - Left Shift with Right Hand',
    focusKeys: 'Left Shift + J K L U I O P H N M Y',
    description: 'Holding Left Shift with left pinky while striking right hand keys',
    content:
      'JJJJ KKKK LLLL UUUU IIII OOOO PPPP HHHH NNNN MMMM YYYY John Mary Peter Kevin Leo Uma Helen Neil Paul India Japan London Paris York New John Mary Peter Kevin Leo Uma Helen Neil Paul India Japan London Paris York New JJJJ KKKK LLLL UUUU IIII OOOO PPPP HHHH NNNN MMMM YYYY John Mary Peter Kevin Leo Uma Helen Neil Paul',
  },
  {
    id: 27,
    title: 'Exercise : 27/32',
    category: 'Shift Keys - Right Shift with Left Hand',
    focusKeys: 'Right Shift + A S D F Q W E R T G V C X Z',
    description: 'Holding Right Shift with right pinky while striking left hand keys',
    content:
      'AAAA SSSS DDDD FFFF QQQQ WWWW EEEE RRRR TTTT GGGG VVVV CCCC XXXX ZZZZ Alex David Frank Queen Robert George Victor Tom Chris Sam Eric Tim Zara Ben Alex David Frank Queen Robert George Victor Tom Chris Sam Eric Tim Zara Ben AAAA SSSS DDDD FFFF QQQQ WWWW EEEE RRRR TTTT GGGG VVVV CCCC XXXX ZZZZ Alex David Frank Queen',
  },
  {
    id: 28,
    title: 'Exercise : 28/32',
    category: 'Shift Keys - Alternating Shift & Capital Words',
    focusKeys: 'Both Shift keys coordination',
    description: 'Rapid alternation between Left and Right Shift with proper names',
    content:
      'Delhi Mumbai Kolkata Chennai London New York Paris Tokyo Rome Berlin Madrid Sydney Toronto Chicago Boston India America England France Delhi Mumbai Kolkata Chennai London New York Paris Tokyo Rome Berlin Madrid Sydney Toronto Chicago Boston India America England France Delhi Mumbai Kolkata Chennai London New York Paris',
  },
  {
    id: 29,
    title: 'Exercise : 29/32',
    category: 'Shift Keys - Sentences with Capitalization',
    focusKeys: 'Natural capitalized sentences',
    description: 'Standard sentence casing with punctuation and capitalization',
    content:
      'Every Good Boy Does Fine. Practice Makes A Person Perfect. Honesty Is The Best Policy. Time And Tide Wait For None. Knowledge Is Real Power. Every Good Boy Does Fine. Practice Makes A Person Perfect. Honesty Is The Best Policy. Time And Tide Wait For None. Knowledge Is Real Power. Every Good Boy Does Fine.',
  },

  // --- NUMBER & SYMBOL ROW (Exercises 30 to 32) ---
  {
    id: 30,
    title: 'Exercise : 30/32',
    category: 'Numbers Row - Baseline Keys & Reaches',
    focusKeys: '1 2 3 4 5 6 7 8 9 0',
    description: 'Upward number row reach combined with home row anchors',
    content:
      '1111 2222 3333 4444 5555 6666 7777 8888 9999 0000 12345 67890 12345 67890 a1 s2 d3 f4 f5 j6 j7 k8 l9 ;0 a1 s2 d3 f4 j7 k8 l9 ;0 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000 12345 67890 12345 67890 a1 s2 d3 f4 f5 j6 j7 k8 l9 ;0 a1 s2 d3 f4 j7 k8 l9 ;0 12345 67890',
  },
  {
    id: 31,
    title: 'Exercise : 31/32',
    category: 'Numbers Row - Numbers Mixed with Words',
    focusKeys: 'Numbers in natural text',
    description: 'Typing numerical figures smoothly alongside word passages',
    content:
      'room 101 page 25 year 2026 train 1245 bus 48 speed 60 weight 75 total 500 box 12 flat 402 grade 98 batch 2025 code 789 rule 14 room 101 page 25 year 2026 train 1245 bus 48 speed 60 weight 75 total 500 box 12 flat 402 grade 98 batch 2025 code 789 rule 14 room 101 page 25 year 2026 train 1245 bus 48 speed 60',
  },
  {
    id: 32,
    title: 'Exercise : 32/32',
    category: 'Punctuation & Special Symbols Mastery',
    focusKeys: '! @ # $ % & * ( ) : ; " \' ? -',
    description: 'Comprehensive mastery of punctuation marks and symbols',
    content:
      'What is your name? Call me at 9:30 AM! Keep (10-20) items; pay $50 + 10% tax. He said, "Work hard, dream big." Yes, 100% success is near! What is your name? Call me at 9:30 AM! Keep (10-20) items; pay $50 + 10% tax. He said, "Work hard, dream big." Yes, 100% success is near! What is your name? Call me at 9:30 AM!',
  },
];

// Fallback/Legacy export alias
export const ENGLISH_LESSONS: EnglishLesson[] = ENGLISH_LEARN_KEYS_LESSONS;
