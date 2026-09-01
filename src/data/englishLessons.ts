export interface EnglishLesson {
  id: number;
  title: string;
  category: string;
  focusKeys: string;
  description: string;
  content: string;
}

export const ENGLISH_LESSONS: EnglishLesson[] = [
  {
    id: 1,
    title: 'Exercise 1',
    category: 'Home Row Basic',
    focusKeys: 'a s d f j k l ;',
    description: 'Home row baseline keys for both hands',
    content: 'asdf jkl; asdf jkl; asdf jkl; aassddff jjkkll;; asdf jkl; asdf jkl; fdsa ;lkj fdsa ;lkj asdf jkl; asdf jkl; aassddff jjkkll;; asdf jkl; fdsa ;lkj asdf jkl; asdf jkl; aass ddff jjkk ll;; asdf jkl; fdsa ;lkj asdf jkl;',
  },
  {
    id: 2,
    title: 'Exercise 2',
    category: 'Home Row Index G & H',
    focusKeys: 'g h f j a s d l ;',
    description: 'Reaching inner home row keys G and H with index fingers',
    content: 'fghj fghj asdfg ;lkjh asdfg ;lkjh fg hj gf jh asdfg ;lkjh fghj fghj asdfg ;lkjh ghaf ghaf jhag jhag had fad gas ash glad fall flask half dash flash gala salsa glass flash salads half glad gas ash had fad dash',
  },
  {
    id: 3,
    title: 'Exercise 3',
    category: 'Home Row Words',
    focusKeys: 'a s d f g h j k l ;',
    description: 'Words formed exclusively on the home row',
    content: 'all fall glad sad ask flash half dash gas ash glass salsa gala flask falls asked adds flags flash hall dad lad salads salad flag glad half dash flash glass ask fall dad sad all salsa gala glad fall ask flash flags',
  },
  {
    id: 4,
    title: 'Exercise 4',
    category: 'Upper Row Index R T Y U',
    focusKeys: 'r t y u f g h j',
    description: 'Reaching upper row index finger keys',
    content: 'ru ty ur yt fr gt hy ju rt yu tr uy fury hurt yurt true your rust jury rush yard tray gray ray tag fat hat jug rug tub hut fur guy rut tug tray rust hurt gray jury your true yard tag fat hat jug rug fur guy',
  },
  {
    id: 5,
    title: 'Exercise 5',
    category: 'Upper Row E & I (Middle Fingers)',
    focusKeys: 'e i d k r u',
    description: 'Left middle finger E and right middle finger I',
    content: 'de ki ed ik ded kik side ride hide file life fire ride tie lie kite site fill risk diet dirt dial disk lake like rule side ride hide file life fire tie lie kite site risk diet dial lake like rule side hide life',
  },
  {
    id: 6,
    title: 'Exercise 6',
    category: 'Upper Row W & O (Ring Fingers)',
    focusKeys: 'w o s l e i',
    description: 'Left ring finger W and right ring finger O',
    content: 'sw lo ws ol slow blow flow grow show work word wood good look took book wood wool roof hook wolf tool wool slow word show work look good took book wood slow flow grow word wood look took wolf tool hook wool',
  },
  {
    id: 7,
    title: 'Exercise 7',
    category: 'Upper Row Q & P (Pinky Fingers)',
    focusKeys: 'q p a ; w o',
    description: 'Left pinky Q and right pinky P',
    content: 'qa p; aq ;p keep quit peep pool page pure path part quiet quick drop crop shop loop pool jump park quad quote keep quit peep page pure path part quiet quick drop shop loop pool jump park quad quote keep path',
  },
  {
    id: 8,
    title: 'Exercise 8',
    category: 'Upper Row Complete Drill',
    focusKeys: 'q w e r t y u i o p',
    description: 'Full upper row mastery and combination words',
    content: 'type write paper power quote reply tower pretty quiet route report equip worry puppy proud output require equity power reply paper tower quote route report equip worry proud puppy type write output require quiet',
  },
  {
    id: 9,
    title: 'Exercise 9',
    category: 'Bottom Row Index V B N M',
    focusKeys: 'v b n m f g h j',
    description: 'Reaching bottom row index keys V, B, N, and M',
    content: 'fv gb hj jm fv gb jm hj van ban man mob vim map name boom beam move bomb oven bone mean vine burn mint norm vast best norm burn mean vine bone oven bomb move beam name map vim ban van mint norm vast best',
  },
  {
    id: 10,
    title: 'Exercise 10',
    category: 'Bottom Row C & X (Middle & Ring)',
    focusKeys: 'c x d s v b',
    description: 'Left middle C and left ring X',
    content: 'dc sx cd xs call calm come camp cook card city cool axis exit next exam flex taxi text apex calx scan card city cool calm come camp call exit next exam flex taxi text scan card cool camp calm come call apex',
  },
  {
    id: 11,
    title: 'Exercise 11',
    category: 'Bottom Row Z & Punctuation',
    focusKeys: 'z , . / a l ;',
    description: 'Left pinky Z and right hand comma, period, slash',
    content: 'za l, ;. zap zip zone zero zinc zoom zeal jazz maze size buzz zero zip zap zeal zoom jazz maze size buzz zinc zone scan zip zap jazz maze zero zeal zoom buzz zip size zeal jazz maze size zoom zero buzz zap',
  },
  {
    id: 12,
    title: 'Exercise 12',
    category: 'Full Alphabet All Rows',
    focusKeys: 'a to z',
    description: 'Quick fox pangrams and cross-row fluid words',
    content: 'the quick brown fox jumps over the lazy dog pack my box with five dozen liquor jugs how quickly daft jumping zebras vex sphinx of black quartz judge my vow the quick brown fox jumps over the lazy dog pack my box with five dozen liquor jugs',
  },
  {
    id: 13,
    title: 'Exercise 13',
    category: 'Capital Letters (Shift Key Left & Right)',
    focusKeys: 'Shift + A to Z',
    description: 'Opposite hand Shift key usage for capital letters',
    content: 'India Delhi Mumbai London Paris Tokyo New York Sydney Rome Berlin Cairo Madrid Toronto Seoul Moscow Dubai Singapore India Delhi Mumbai London Paris Tokyo New York Sydney Rome Berlin Cairo Madrid Toronto Seoul Moscow Dubai',
  },
  {
    id: 14,
    title: 'Exercise 14',
    category: 'Numbers Row (1 2 3 4 5 6 7 8 9 0)',
    focusKeys: '1 2 3 4 5 6 7 8 9 0',
    description: 'Top number row reaches',
    content: '12345 67890 10293 84756 19283 74650 91827 36450 123 456 789 100 250 500 750 1000 2024 2025 2026 12345 67890 10293 84756 19283 74650 91827 36450 123 456 789 100 250 500 750 1000 2024 2025',
  },
  {
    id: 15,
    title: 'Exercise 15',
    category: 'Punctuation & Special Symbols',
    focusKeys: '! @ # $ % ^ & * ( ) - = , . ?',
    description: 'Common symbols and punctuation marks',
    content: 'Hello, world! Are you ready? Cost is $50.00 (10% discount). Use email: test@domain.com, ref #402. Result = 100% success! Is it true? Yes, indeed. Hello, world! Cost is $50.00 (10% discount). Result = 100% success!',
  },
  {
    id: 16,
    title: 'Exercise 16',
    category: 'Common Word Combinations',
    focusKeys: 'Common English Words',
    description: 'Most frequent English words for rhythm building',
    content: 'that with this have from they will would there their about which would make know think take people into year good some could them other than then now look only come its over also back after use two how our work first well even new want because any give',
  },
  {
    id: 17,
    title: 'Exercise 17',
    category: 'Short Sentence Fluency',
    focusKeys: 'Sentences',
    description: 'Fluent typing with spacing and capitalization',
    content: 'Practice makes a person perfect in typing. Regular practice improves your typing speed and overall accuracy. Keep your fingers resting gently on the home row keys. Do not look down at the keyboard while typing text.',
  },
  {
    id: 18,
    title: 'Exercise 18',
    category: 'Speed Booster Drill',
    focusKeys: 'Speed Flow',
    description: 'Smooth rhythm drill for high net WPM',
    content: 'time and tide wait for no one knowledge is power hard work is the key to success honesty is the best policy unity is strength every cloud has a silver lining where there is a will there is a way early to bed and early to rise makes a man healthy wealthy and wise',
  },
  {
    id: 19,
    title: 'Exercise 19',
    category: 'Paragraph Practice - Technology',
    focusKeys: 'Paragraph Typing',
    description: 'Continuous typing exam paragraph on computer technology',
    content: 'Computers have changed the way we live and work in the modern world. Today information can be shared across the globe in a matter of seconds. Developing efficient typing skills is essential for office work administrative jobs and software development.',
  },
  {
    id: 20,
    title: 'Exercise 20',
    category: 'Exam Test Paragraph - Government Typing Test',
    focusKeys: 'Official Test Style',
    description: 'Official SSC and High Court standard typing test simulation',
    content: 'The rapid growth of the digital economy has opened new avenues for young professionals across the country. Government offices and public sector institutions are adopting modern computer tools to serve citizens faster and with greater transparency. Accuracy and speed in typing remain fundamental qualifications for administrative excellence.',
  },
  // Generate remaining up to 60 exercises
  ...Array.from({ length: 40 }, (_, i) => {
    const lessonNum = i + 21;
    return {
      id: lessonNum,
      title: `Exercise ${lessonNum}`,
      category: `Speed Drill ${lessonNum}`,
      focusKeys: 'Full Keyboard Flow',
      description: `Comprehensive English typing practice for speed and accuracy enhancement`,
      content: `The development of modern society depends heavily on education, communication, and technological innovation. Skilled typists can produce high volumes of clear and accurate documentation within short periods of time. Consistent daily typing practice will help you achieve over 40 words per minute with ninety-five percent accuracy. Maintain proper sitting posture, keep your wrists straight, and focus your eyes directly on the screen text rather than your fingers. Exercise number ${lessonNum} will boost your confidence and stamina for upcoming competitive examinations.`,
    };
  }),
];
