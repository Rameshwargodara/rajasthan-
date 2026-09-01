export interface HindiLesson {
  id: number;
  title: string;
  category: string;
  focusKeys: string;
  focusHindi: string;
  content: string; // ASCII sequence that types KrutiDev characters
  description: string;
}

export const HINDI_LEARN_KEYS_LESSONS: HindiLesson[] = [
  {
    id: 1,
    title: 'Exercise 1',
    category: 'Home Row Keys (g, k, h, j)',
    focusKeys: 'g k h j',
    focusHindi: 'ह ा ी र',
    description: 'हहहह kkkk हहहह kkkk hhhh रररर हहहह kkkk हाहा हाहा ...',
    content:
      'gggg kkkk gggg kkkk hhhh jjjj gggg kkkk gkgk gkgk gkgk gkgk gkgk gggg kkkk gg kk hhhh jjjj hhhh jjjj hhhh jjjj jhjh jhjh jhjh gjh gjh gjh jkjk jkjk jkjk gkj gkj gkjh gkjh gjh gjh ghj ghj ghj ghjk ghjk ghjk jkgh jkgh jkgh jkgh jkgh gj gj gj jg jg jg jg jgh jgh jgh jkgh jkgh jkgh',
  },
  {
    id: 2,
    title: 'Exercise 2',
    category: 'Home Row Keys (f, l, g, k, h, j)',
    focusKeys: 'f l g k h j',
    focusHindi: 'ि स ह ा ी र',
    description: 'ffff सससस ffff सससस ffff सससस हहहह ffff हहहह ...',
    content:
      'ffff llll ffff llll ffff llll gggg ffff gggg ffff llll llll fgfg fgfg ffff llll lhlh lhlh lhlh fgfg fgfg ffff gggg llll kkkk llll kkkk lklk lklk lklk llll kkkk lklk lklk lhjk flj flj lj lj jhl fjgk fjgk gkjk jgk lhj lkgl lgj lgh lgh fgl',
  },
  {
    id: 3,
    title: 'Exercise 3',
    category: 'Home Row Keys (d, ;, f, l, g, k, h, j)',
    focusKeys: 'd ; f l g k h j',
    focusHindi: 'क य ि स ह ा ी र',
    description: 'कककक यययय कककक यययय यययय कककक ककयय ककयय ...',
    content:
      'dddd ;;;; dddd ;;;; ;;;; dddd dd;; dd;; ;;dd ;;dd dddd ;;;; dgh dgh ;lk ;lk ;lk ;lk dddd ;;;; ffff llll gggg kkkk gk hhhh jjjj hhhh jjjj d; d; d; ;d ;d ;d ;kd ;l ;kj ;g dddd ;;;; dddd ;;;; ;;;; dddd dd;; dd;; ;;dd ;;dd ddd ;;;; dgh',
  },
  {
    id: 4,
    title: 'Exercise 4',
    category: 'Home Row Words Drill',
    focusKeys: '; d g k f j l h',
    focusHindi: 'यही कही कहा किया कहा रिया याही सारी राय कार ...',
    description: 'यही कही कहा किया कहा रिया याही सारी राय कार हार हरी हिरा ...',
    content:
      ';gh dgh dgk fd;k dgk fj;k ;kgh lkjh jk; dkj gkj gjh fgjk ljdkj lhdj gh ghjk jgh jgk fdjk fdl gl lgkjk lgk glk dl dlk dkd dkdk dkdh fd fd dh dh lkdh gkj gkjk fgjd jkgh jgh lgh lgk dgh dgk gh',
  },
  {
    id: 5,
    title: 'Exercise 5',
    category: 'Home Row Repetition & Flow',
    focusKeys: 'd g h j k f l',
    focusHindi: 'कही कही ही हीरा हीरा हीरा हीरा रही रही रही रहा ...',
    description: 'कही कही ही हीरा हीरा हीरा हीरा रही रही रही रहा रहा रहा ...',
    content:
      'dgh dgh gh ghjk ghjk ghjk ghjk jgh jgh jgh jgk jgk jgk fdjk fdjk fdjk fgjk fgjk ghjk ghjk fdl fdl fdl gl gl gl lgkjk lgkjk lgk glk dl dl dl dl dlk dlk dlk dkl dkl dkd dkdk dkdk dkd dkdh lkdh lkdh lkdh gkj gkjk fgjd fgjd jkgh jl lj gj jgh lgh lgk dgh dgk fd fd fd dh dh dh gh',
  },
  {
    id: 6,
    title: 'Exercise 6',
    category: "Home Row Keys (' s A)",
    focusKeys: "' s A d l ; g j k",
    focusHindi: 'श े । क स य ह र ा',
    description: 'शश्श्श III श्श्श्श ।II।। शश शश शश केके केके केके सेसे सेसे येये येये ...',
    content:
      "'''' sss '''' AssAA '' '' '' dsds dsds dsds lsls lsls ;s;s ;s;s dsds dsds dsds gsgs jsjs jsjs ds dks gs gks ls lks 's 'ks ds dks gs gks ls lks ;s ;ks 's 'ks 's's 's's 'sj 'sj 'sj 'ksj 'ksj dksj dksl gks' lksj dksj dksjk dksjh dksl 'sj 'd dk' ;' jk'h jk'h dk'h dk'h 'gj 'gj 'kd 'kd 'ksd dkslh jks 'h'kk",
  },
  {
    id: 7,
    title: 'Exercise 7',
    category: 'Home Row Anusvara (a=ं)',
    focusKeys: 'a d g s k j f l ;',
    focusHindi: 'ं क ह े ा र ि स य',
    description: 'ककंकंक हंहहंहं कंकंकक हंहहंहं के के कें हें कंकर शंकर हंस कंस ...',
    content:
      "ddaddad gaggaga dadadd gaggaga ds ds dsa gsa dadj 'adj gal dal jad jkadk fgalk dkalk gka gka ;gka lk;a dadadad flag ;gha ;gha dgha dgha dgha dsl dgka dgsa dgka galh dadadd gaggga dadadada gaggga ds ds ds gsa dadj 'ad gal dal jad jkadk fgalk dkalk gka gka ;gka lk;a dadadad flag ;gha ;gha dgha dgha dgha dsl dgka dgsa dgka galh",
  },
  {
    id: 8,
    title: 'Exercise 8',
    category: 'Home Row Comprehensive Drill',
    focusKeys: "d l j g ; f ' k s h",
    focusHindi: 'कस सर हर कर यह किस सिर शीश राह हीरा सारा ...',
    description: 'कस सर हर कर यह किस सिर शीश राह हीरा सारा कार काश काक ...',
    content:
      "dl lj gj dj ;g fdl flj 'h' jkg ghjk lkjk dkj dk' dkd gkl gkj ghj ghjk ;kj jkg dkgh dksjk gks' lkjh fjgk jkgh lkjh lgh dgh 'dj lksgj f'kdkj f'kdkjh dfgl dfg;s jfg;s jksfd;s lgk; lkfj dk lgkjk dgk",
  },
  {
    id: 9,
    title: 'Exercise 9',
    category: 'Home Row Shift Keys (G K H J)',
    focusKeys: "g G k K h H j J '",
    focusHindi: 'ह ळ ा ज्ञ ी भ् र श्र श',
    description: 'हहह ळळळ kkkk ज्ञज्ञज्ञ हहह ळळळ kkkk ळळळ ज्ञज्ञज्ञ ...',
    content:
      "ggg GGG kkkk KKK ggg GGG kkkk GGG KKK GGG KKK KKK GGG GGG KKK ggGG kkKK KkkK KkKK gG gG gG KkgG ggGG KK kkKK ggGG GGG KKK GGG KKK HHHH hhhh HHHH HHHH JJJJ JJJJ Jh Jh Jh HHHH HkHkHkHk '''' HHHH HhHh HkHkh JhJh JhJh JhJh gJ gJ lHkh dHkh lHkk jaHkk Hkksj Hkkj Hkkjh Jh Jh Jh Jh ;K ;K ;K",
  },
  {
    id: 10,
    title: 'Exercise 10',
    category: 'F & L Shift Keys (थ, स्, स्थ, स्थिर, रस्सी, किस्सा)',
    focusKeys: 'f F l L j d g k h ;',
    focusHindi: 'ि थ् स स् र क ह ा ी य',
    description:
      'ffff FFFF FFFF थथथथ थथथथ FFFF FFFF FFFF थथथथ थि थि थिथिथि सससस LLLL LLLL LLLL सससस LLLL स्थ स्थ स्थ स्थिर स्थिर स्थिर थार रस्सी रस्सा किस्सा हिस्सा स्कार कथा यथा साथ साथी ...',
    content:
      'ffff FFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFF fFk fFk fFkfFkfFk llll LLLL LLLL LLLL llll LLLL LFk LFk LFk flFkj flFkj flFkj Fkj jLlh jLlk fdLlk fgLlk Ldkj dFkk ;Fkk lkFk lkFkh ffff FFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFF fFk fFk fFkfFkfFk llll LLLL LLLL LLLL llll LLLz LFk LFk LFk flFkj flFkj flFkj Fkj jLlh jLlk fdLlk fgLlk Ldkj dFkk ;Fkk lkFk lkFkh',
  },
  {
    id: 11,
    title: 'Exercise 11',
    category: 'D Shift & Colon Keys (क, क्, य, रू, कक्का, हक्का, रूस)',
    focusKeys: 'd D ; : k g l H',
    focusHindi: 'क क् य रू ा ह स भ',
    description:
      'कककक DDDD कककक DDDD DDDD क्क क्क Dd Dd कककक क्क कककक DDDD यययय रूरूरू यययय ररूरूरू यययय रूरूरू यरू यरू यरू यरू करू रूक करू रूक कक्का हक्का हक्का रूस रूह रूह रू हारू भैंरू भारू कारू यक्क हक्काक ...',
    content:
      'dddd DDDD dddd DDDD DDDD Dd Dd Dd Dd dddd Dd dddd DDDD ;;;; ::: ;;;; j::: ;;;; ::: ;: ;: ;: ;: d: :d d: :d Ddk gDdk gDdk :l :g :g : gk: HkSa: Hkk: dk: ;Dd gDdkd ddd DDDD dddd DDDD DDDD Dd Dd Dd dddd DDDD dd dddd ;;;; :::: ;;;; :::: ;;;; :::: ;: ;: ;: ;: d: :d d: :d Ddk gDdk gDdk :l :g :g : gk: HkSa: Hkk: dk: ;Dd gDdk',
  },
  {
    id: 12,
    title: 'Exercise 12',
    category: 'Shift S & Quotes Keys (ै, ष्, श, कैसे, है, सैर, शशांक, शेष, भाषा)',
    focusKeys: "d s S g ' \" l j H k",
    focusHindi: 'क े ै ह श ष् स र भ ा',
    description:
      'कैकैकैकै कैकैकैकै हैहैहैहै हैहैहैहै सैसैसैसे हेहै केकै हेहै सेसै येयै शेशै केकेकैकै कैकैकैकै कैकैकैकै हैहैहैहै सैसैसैसै यैयैयैयै केकेकेके कैकैकैकै हैहैहैहै शैशैशैशै ...',
    content:
      "dSdSdSdS dSdSdSdS gSgSgSgS gSgSgSgS lSlSlSls gsgS dsdS gsgS lslS ;s;S 's'S dsdsdSdS dSdSdSdS dSdSdSdS gSgSgSgS lSlSlSlS ;S;S;S;S dsdsdsds dSdSdSdS gSgSgSgS 'S'S'S'S dsdsdsds dSdSdSdS gSgSgSgS lSlSlSls gsgS dsdS gsgS lslS ;s;S 's'S dsdsdSdS dSdSdSdS dSdSdSdS gSgSgSgS lSlSlSlS ;S;S;S;S 'S'S'S'S dSls gS lSj ''kkad dSj '\" '\" \"' \"' 's\" 's\" Hks\" ds' Hkk\"kk \"S \"S 'S 's\"S 's\"S \"s'S \"s'S",
  },
  {
    id: 13,
    title: 'Exercise 13',
    category: 'Purna Viram & Anusvara (क।, था।, थी।, थे।, है।, हैं।, कंकंकंक)',
    focusKeys: "d a A s F k h '",
    focusHindi: 'क ं । े थ ा ी श',
    description:
      "कaकa क। ।।।। के के के के क। क। क। क। है। है। है। था। थी। थे। था। थी। थी। था। है। हैं। हैं। हैं। कंकंकंक क।क।क।क। है। है। है। था। कंक क।क। ।।। ... '''' '''' '''' ''''",
    content:
      "dad dad dA AAAA ds ds ds ds dA dA dA dA gSA gSA gSA FkkA FkhA FksA FkkA FkhA FkhA FkkA gSA gSaA gSaA gSaA dadadad dAdAdAdA gSA gSA gSA FkkA dad dAdA AAA ds ds ds ds dA dA dA dA gSA gSA gSA FkkA FkhA FksA FkkA FkhA FkhA FkkA gSA gSaA gSaA gSaA dadadad dAdAdAdA '''' '''' '''' ''''",
  },
  {
    id: 14,
    title: 'Exercise 14',
    category: 'Full Sentence & Words Flow (कभी, शेर, शासक, रूस, हाहाकार, रस्सी, किस्सा)',
    focusKeys: "d H k h ' s j g F l a : G J K \" L",
    focusHindi: 'क भ ा ी श े र ह थ स ं रू ळ श्र ज्ञ ष् स्',
    description:
      'कभी शेर भी हारा था। सही के साथ सही कहां हो रहा है। शेष शासक कंस से कैसे हारे थे। रूस के साथ हो रहा है। हरेक के साथ भी सहा है। रेशे से हाहाकार हो सके। ...',
    content:
      "dHkh 'sj Hkh gkjk FkkA lgh ds lkFk lgh dgka gks jgk gSA 's\" 'kkld dal ls dSls gkjs FksA :l ds lkFk gks jgk gSA gjsd ds lkFk Hkh lgk gSA js's ls gkgkdkj gks ldsA Hkh Fkh dS : fG Js; jFk ;Fkk dFkk dks\" gkFk Kkl Fkkg Fkk: ;K :l dkL; Hkk\"; gkL; L;kg 'kL; jLlh Jhlj Ddk Ddh gDdk gfFk;k fdLlk L;kgh fdLls :fd;s Hkfj;s Hkksjgs Js;l Kkld dGsh dGs'kh dGsg fdlds dj HkjA",
  },
  {
    id: 15,
    title: 'Exercise 15',
    category: 'U & Bada U Matras (ु=q, ू=w, कुकू, सुसू, कुश, शुष्क, हूर, शूर, थूक)',
    focusKeys: "d q w l ; ' g j F H k",
    focusHindi: 'क ु ू स य श ह र थ भ ा',
    description:
      'कुकुकुकु कुकुकुकु सुसुसुसु युयुयुयु कूकूकूकू कूकूकूकू सूसूसूसू यूयूयूयू कुकू सुसू युयू शुशू शुशुशुशु शूशूशूशू कूकूकूक कुकुकुकु कुकुकुकु कुकुकुकु ...',
    content:
      "dqdqdqdq dqdqdqdq lqlqlqlq ;q;q;q;q dwdwdwdw dwdwdwdw lwlwlwlw ;w;w;w;w dqdw lqlw ;q;w 'q'w 'q'q'q'q 'w'w'w'w dwdwdwd dqdqdqdq dqdqdqdq dqdqdqdq lqlqlqlq ;q;q;q;q dwdwdwdw dwdwdwdw lwlwlwlw ;w;w;w;w dqdw lqlw ;q;w 'q'w 'q'q'q'q 'w'w'w'+ dwdwdwdw dqdqdqdq dq' 'q\"d gwj ;w ;w 'wj lqj lqj 'wj Fkwd 'qd 'kq: Hkw Hkw Hkw 'kqHk lqFkjk gqDdk gd gdwd dwdj 'kqHk lqJh dq' jklqdk",
  },
  {
    id: 16,
    title: 'Exercise 16',
    category: 'M, T & J Keys (म=e, त=r, ज=t, मतज, मति, तारक, हस्ती, जूता)',
    focusKeys: "d e r f t g k h j l s a q w ' \" L",
    focusHindi: 'क म त ि ज ह ा ी र स े ं ु ू श ष् स्',
    description:
      'कककक मममम ककक ममम कम कम कम मक मक मक ffff तततत ffff तततत तितितिति तितितिति हहहह जजजज हहहह जजजज हजहज हजहज जहजह जहजह ...',
    content:
      "dddd eeee ddd eee de de de ed ed ed ffff rrrr ffff rrrr frfrfrfr frfrfrfr gggg tttt gggg tttt gtgt gtgt tgtg tgtg frfrfrfr gtgtgtgt dededede eeee rrrr tttt eeee rrrr tttt eeee rrrr tttt eeee rrrr tttt ert ert ert ert tre tre te et re re er er re er er tr tr rt rt et te te re efr frfej edj rkjd rkjk rkfjdk rkd djrk djrh tgka tete ets etk tke tkfr tkrd gLrh gSfl;r fl;klr fl;klh dkt dkth tkdj gkjadj twrk eqdj ewd rqDdk jktw tksdj tks' thr fefr eqag ge gktfj",
  },
  {
    id: 17,
    title: 'Exercise 17',
    category: 'L Key (ल=y, हलहल, लहलह, जल, लज, कालू, जाली, कली, भला, भालू)',
    focusKeys: "g y t d k w h H a s '",
    focusHindi: 'ह ल ज क ा ू ी भ ं े श',
    description:
      'हहहह लललल हहहह लललल हलहल हलहल हलहल लहलह लहलह लहलह हजहल हजहल जल जल लज जल लज लज हजल हलज हजल हलजह हहहह लललल लू कालू जाली कली भला लाभ भालू लंका लंकेश लाल लोकलाज करिश्मा शालू',
    content:
      "gggg yyyy gggg yyyy gygy gygy gygy ygyg ygyg ygyg gtgy gtgy ty ty yt ty yt yt gty gyt gty gytg gggg yyyy yw dkyw tkyh dyh Hkyk ykHk Hkkyw yadk yadks' yky yksdykt dfj'ek 'kkyw",
  },
  {
    id: 18,
    title: 'Exercise 18',
    category: 'N & P Keys (न=u, प=i, नाना, रन, नर, रानी, नैना, नाम, पापा, पीना, पूरा, पेपर)',
    focusKeys: 'k u j h S r f w q e s d x g i o',
    focusHindi: 'ा न र ी ै त ि ू ु म े क ग ह प व',
    description:
      'kkkk नननन kkkk नननन नाना नन नन नन नाना रन नर रन नार नारा रानी kkkk नननन kkkk नननन kkkk नननन नाना निन kkनन नन नाना रन नर रन नार नारा रानी ...',
    content:
      'kkkk uuuu kkkk uuuu ukuk uu uu uu ukuk ju uj ju ukj ukjk jkuh kkkk uuuu kkkk uuuu kkkk uuuu ukuk fuu kkuu uu ukuk ju uj ju ukj ukjk jkuh uSuk uhrk fufr uwru uqek uke usd usgy uSfrd daxu kkkk uuuu gju ukgj ukjh jhuk jhuk kkkk iiii iiii kkkk ikik ikik kkii iikk iki uki iku ikik ui iu uik iuk uiui uuuu iiii iiii uuuu iuiu uiui ukik ikuk ikik ukuk ikuk ihuk fikikql iqj iwjk isu iSj isij iSrajk iksjl rksi iksr',
  },
  {
    id: 19,
    title: 'Exercise 19',
    category: 'V & Ch Keys (व=o, च=p, सावा, वास, पावन, रवि, वीर, याचना, चाय, चेला, चाल, चोर)',
    focusKeys: "l o i k f u j h q s S ' L r ; p t e d",
    focusHindi: 'स व प ा ि न र ी ु े ै श स् त य च ज म क',
    description:
      'सससस वववव ससवव ससवव ववसस वसवस सवसव वप पव पपवव ववपप ससवव ववसस पवस पवस सवप पसव पसव पसव सपव सावा वास सविना पावन नावि रवि विपासना वीर वापी वार वीर वीना रवीना वासु वो वही वहां वन वाम विमान वार वूमन वूल वे वैर वैश्य वैमनस्यता ...',
    content:
      "llll oooo lloo lloo ooll olol lolo oi io iioo ooii lloo ooll iol iol loi ilo ilo ilo lio lkok okl lfouk ikou ukfo jfo foikluk ohj okih okj ohj ohuk johuk oklq oks ogh ogka ou oke fokeu okj oweu owy os oSj oS'k; oSeuL;rk ;;;; pppp pppp ;;;; ;p;p p;p; ;p;p p;;p;p pp;;p;p; ;kpuk ;kpd pk; pht pppp ;;;; ;p;p p;p; ;;;; pppp ;p;p pp ;; psyk pke epk peh pky phy pqi pko okpu psyk pSu pksyk pkSyk pkSjklh pk; ;;;; pppp ;;;; pppp ;p;p p;p; po po op op ;o pkj pksj ped",
  },
  {
    id: 20,
    title: 'Exercise 20',
    category: 'Shift Keys - Bottom Row',
    focusKeys: 'Z X C V B N M < > ?',
    focusHindi: 'र् ग् ब् ट ठ छ ड ढ झ् ध',
    description: 'Capital / Shift state keys for the bottom row in KrutiDev',
    content:
      'ZZZZZ XXXXX CCCCC VVVVV BBBBB NNNNN MMMMM <<<<< >>>>> ????? ZXCVB NM<>? ZXCVB NM<>? ZXCVB NM<>? ?><MN BVCXZ ?><MN BVCXZ ZX CV BN M< >? ZXCVB NM<>? ?><MN BVCXZ ZX CV BN M< >? ZXCVB NM<>? ?><MN BVCXZ ZXCVB NM<>?',
  },
  {
    id: 21,
    title: 'Exercise 21',
    category: 'Shift + Normal Mixed',
    focusKeys: 'Combined Shift and direct keys',
    focusHindi: 'क्या क्यों ज्ञान छात्र क्षत्रिय पृथ्वी धर्म कर्म',
    description: 'Words requiring half-letters with Shift keys (क्, घ्, ज्ञ, क्ष)',
    content:
      'D;k D;ksa Kku Nk= {kf=; i`Foh /keZ deZ D;k D;ksa Kku Nk= {kf=; i`Foh /keZ deZ D;k D;ksa Kku Nk= {kf=; i`Foh /keZ deZ D;k D;ksa Kku Nk= {kf=; i`Foh /keZ deZ D;k D;ksa Kku Nk= {kf=; i`Foh /keZ deZ D;k D;ksa Kku Nk= {kf=; i`Foh',
  },
  {
    id: 22,
    title: 'Exercise 22',
    category: 'Matra Drills - Aa & Ee',
    focusKeys: 'k f h',
    focusHindi: 'ा ि ी',
    description: 'Comprehensive practice of Aa (ा=k), Chhoti Ee (ि=f), and Badi Ee (ी=h) matras',
    content:
      'dk fk hk dkfhk dkfhk dkfhk dkd fdf hdh fglk dglk hglk dklj fklj hklj dk fk hk dkfhk dkfhk dkfhk dkd fdf hdh fglk dglk hglk dklj fklj hklj dk fk hk dkfhk dkfhk dkfhk dkd fdf hdh fglk dglk hglk dklj fklj hklj dk fk hk',
  },
  {
    id: 23,
    title: 'Exercise 23',
    category: 'Matra Drills - U & Oo',
    focusKeys: 'q w',
    focusHindi: 'ु ू',
    description: 'Chhota U (ु=q) and Bada U (ू=w) matra drills attached to various consonants',
    content:
      'dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw dq dw fq fw gq gw jq jw lq lw',
  },
  {
    id: 24,
    title: 'Exercise 24',
    category: 'Matra Drills - E & Ai',
    focusKeys: 's S',
    focusHindi: 'े ै',
    description: 'E (े=s) and Ai (ै=S) matra drills with common words',
    content:
      'ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS ds dS fs fS gs gS js jS ls lS',
  },
  {
    id: 25,
    title: 'Exercise 25',
    category: 'Anusvara & Chandrabindu',
    focusKeys: 'a W',
    focusHindi: 'ं ॅ',
    description: 'Nasal sounds: Anusvara (ं=a) and Chandrabindu (ॅ=W) practice',
    content:
      'da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW da dW fa fW ga gW ja jW la lW',
  },
  {
    id: 26,
    title: 'Exercise 26',
    category: 'Reph & Paden R',
    focusKeys: 'Z j',
    focusHindi: 'र् र',
    description: 'Flying Reph (र्=Z) over letters and standard Ra combinations',
    content:
      'dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ dZ fZ gZ jZ lZ eZ rZ tZ yZ uZ',
  },
  {
    id: 27,
    title: 'Exercise 27',
    category: 'Half Letters (Halant)',
    focusKeys: 'D F E R T Y U I O P L',
    focusHindi: 'क् थ् म् त् ज् ल् न् प् व् च् स्',
    description: 'Essential half letters typed with Shift on consonant keys',
    content:
      'D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R T Y U I O P L D F E R',
  },
  {
    id: 28,
    title: 'Exercise 28',
    category: 'Words with Half Letters',
    focusKeys: 'Mixed Shift & direct',
    focusHindi: 'स्थान बच्चा पत्ता सच्चा दिल्ली रास्ता पुस्तक मित्र',
    description: 'Frequent Hindi words featuring double & half letters',
    content:
      'LFkku cPpk iRrk lPpk fnYyh jkLrk iqLrd fe= LFkku cPpk iRrk lPpk fnYyh jkLrk iqLrd fe= LFkku cPpk iRrk lPpk fnYyh jkLrk iqLrd fe= LFkku cPpk iRrk lPpk fnYyh jkLrk iqLrd fe= LFkku cPpk iRrk lPpk fnYyh jkLrk iqLrd fe=',
  },
  {
    id: 29,
    title: 'Exercise 29',
    category: 'Simple Short Sentences',
    focusKeys: 'Full keyboard',
    focusHindi: 'यह एक अच्छा दिन है। राम घर जाता है। सीता गाना गाती है।',
    description: 'Basic sentence typing with Purna Viram (| / .)',
    content:
      ';g ,d vPNk fnu gSA jke ?kj tkrk gSA lhrk xkuk xkrh gSA ;g ,d vPNk fnu gSA jke ?kj tkrk gSA lhrk xkuk xkrh gSA ;g ,d vPNk fnu gSA jke ?kj tkrk gSA lhrk xkuk xkrh gSA ;g ,d vPNk fnu gSA jke ?kj tkrk gSA lhrk xkuk xkrh gSA',
  },
  {
    id: 30,
    title: 'Exercise 30',
    category: 'Sentence Flow & Speed',
    focusKeys: 'Full keyboard',
    focusHindi: 'सत्य की हमेशा जीत होती है। परिश्रम ही सफलता की कुंजी है।',
    description: 'Inspiring Hindi proverbs and speed continuity practice',
    content:
      'lR; dh ges' +
      "'" +
      'kk thr gksrh gSA ifjJe gh lQyrk dh dqaith gSA lR; dh ges' +
      "'" +
      'kk thr gksrh gSA ifjJe gh lQyrk dh dqaith gSA lR; dh ges' +
      "'" +
      'kk thr gksrh gSA ifjJe gh lQyrk dh dqaith gSA lR; dh ges' +
      "'" +
      'kk thr gksrh gSA ifjJe gh lQyrk dh dqaith gSA',
  },
  {
    id: 31,
    title: 'Exercise 31',
    category: 'Advanced Key Combos 1',
    focusKeys: 'd k h j g f s a',
    focusHindi: 'क का कि की कु कू के कै कं कह',
    description: 'All 10 matras on the root letter Ka (क)',
    content:
      'd dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg d dk fjd dh dq dw ds dS da dg',
  },
  {
    id: 32,
    title: 'Exercise 32',
    category: 'Advanced Key Combos 2',
    focusKeys: 'x k h j g f s a',
    focusHindi: 'ग गा गि गी गु गू गे गै गं गह',
    description: 'All 10 matras on the root letter Ga (ग)',
    content:
      'x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg x xk fJx xh xq xw xs xS xa xg',
  },
  {
    id: 33,
    title: 'Exercise 33',
    category: 'Advanced Key Combos 3',
    focusKeys: 'c k h j g f s a',
    focusHindi: 'ब बा बि बी बु बू बे बै बं बह',
    description: 'All 10 matras on the root letter Ba (ब)',
    content:
      'c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg c ck fJc ch cq cw cs cS ca cg',
  },
  {
    id: 34,
    title: 'Exercise 34',
    category: 'Advanced Key Combos 4',
    focusKeys: 'e k h j g f s a',
    focusHindi: 'म मा मि मी मु मू मे मै मं मह',
    description: 'All 10 matras on the root letter Ma (म)',
    content:
      'e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg e ek fJe eh eq ew es eS ea eg',
  },
  {
    id: 35,
    title: 'Exercise 35',
    category: 'Advanced Key Combos 5',
    focusKeys: 'r k h j g f s a',
    focusHindi: 'त ता ति ती तु तू ते तै तं तह',
    description: 'All 10 matras on the root letter Ta (त)',
    content:
      'r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg r rk fJr rh rq rw rs rS ra rg',
  },
  {
    id: 36,
    title: 'Exercise 36',
    category: 'Advanced Key Combos 6',
    focusKeys: 't k h j g f s a',
    focusHindi: 'ज जा जि जी जु जू जे जै जं जह',
    description: 'All 10 matras on the root letter Ja (ज)',
    content:
      't tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg t tk fJt th tq tw ts tS ta tg',
  },
  {
    id: 37,
    title: 'Exercise 37',
    category: 'Advanced Key Combos 7',
    focusKeys: 'y k h j g f s a',
    focusHindi: 'ल ला लि ली लु लू ले लै लं लह',
    description: 'All 10 matras on the root letter La (ल)',
    content:
      'y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg y yk fJy yh yq yw ys yS ya yg',
  },
  {
    id: 38,
    title: 'Exercise 38',
    category: 'Advanced Key Combos 8',
    focusKeys: 'u k h j g f s a',
    focusHindi: 'न ना नि नी नु नू ने नै नं नह',
    description: 'All 10 matras on the root letter Na (न)',
    content:
      'u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug u uk fJu uh uq uw us uS ua ug',
  },
  {
    id: 39,
    title: 'Exercise 39',
    category: 'Advanced Key Combos 9',
    focusKeys: 'i k h j g f s a',
    focusHindi: 'प पा पि पी पु पू पे पै पं पह',
    description: 'All 10 matras on the root letter Pa (प)',
    content:
      'i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig i ik fJi ih iq iw is iS ia ig',
  },
  {
    id: 40,
    title: 'Exercise 40',
    category: 'Advanced Key Combos 10',
    focusKeys: 'l k h j g f s a',
    focusHindi: 'स सा सि सी सु सू से सै सं सह',
    description: 'All 10 matras on the root letter Sa (स)',
    content:
      'l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg l lk fJl lh lq lw ls lS la lg',
  },
  {
    id: 41,
    title: 'Exercise 41',
    category: 'Daily Usage Vocabulary 1',
    focusKeys: 'Full keyboard',
    focusHindi: 'समय, समाज, सरकार, विकास, विचार, जीवन, संसार',
    description: 'High-frequency government and administrative words',
    content:
      'le;] lekt] ljdkj] fodkl] fopkj] thou] lalkj] le;] lekt] ljdkj] fodkl] fopkj] thou] lalkj] le;] lekt] ljdkj] fodkl] fopkj] thou] lalkj] le;] lekt] ljdkj] fodkl] fopkj] thou] lalkj] le;] lekt] ljdkj] fodkl] fopkj] thou] lalkj]',
  },
  {
    id: 42,
    title: 'Exercise 42',
    category: 'Daily Usage Vocabulary 2',
    focusKeys: 'Full keyboard',
    focusHindi: 'अधिकार, कर्तव्य, नागरिक, संविधान, कानून, न्याय',
    description: 'Civic, legal and constitutional terms frequently asked in exams',
    content:
      'vf/kdkj] drZO;] ukxfjd] lafo/kku] dkuwu] U;k;] vf/kdkj] drZO;] ukxfjd] lafo/kku] dkuwu] U;k;] vf/kdkj] drZO;] ukxfjd] lafo/kku] dkuwu] U;k;] vf/kdkj] drZO;] ukxfjd] lafo/kku] dkuwu] U;k;] vf/kdkj] drZO;] ukxfjd] lafo/kku] dkuwu] U;k;]',
  },
  {
    id: 43,
    title: 'Exercise 43',
    category: 'Court & Office Terms',
    focusKeys: 'Full keyboard',
    focusHindi: 'न्यायालय, याचिका, आदेश, प्रमाण, साक्षी, अधिवक्ता',
    description: 'High Court, District Court and legal assistant vocabulary',
    content:
      'U;k;ky;] ;kfPsdk] vkns' +
      "'" +
      'k] izek.k] lk{kh] vf/koDrk] U;k;ky;] ;kfPsdk] vkns' +
      "'" +
      'k] izek.k] lk{kh] vf/koDrk] U;k;ky;] ;kfPsdk] vkns' +
      "'" +
      'k] izek.k] lk{kh] vf/koDrk] U;k;ky;] ;kfPsdk] vkns' +
      "'" +
      'k] izek.k] lk{kh] vf/koDrk]',
  },
  {
    id: 44,
    title: 'Exercise 44',
    category: 'Office Administration',
    focusKeys: 'Full keyboard',
    focusHindi: 'कार्यालय, पत्राचार, अनुभाग, टिप्पणी, प्रारूप, अनुमोदन',
    description: 'Government Secretariat & Ministerial LDC correspondence terms',
    content:
      'dk;kZy;] i=kpkj] vuqHkkx] fVIi.kh] izk:i] vuqeksnu] dk;kZy;] i=kpkj] vuqHkkx] fVIi.kh] izk:i] vuqeksnu] dk;kZy;] i=kpkj] vuqHkkx] fVIi.kh] izk:i] vuqeksnu] dk;kZy;] i=kpkj] vuqHkkx] fVIi.kh] izk:i] vuqeksnu]',
  },
  {
    id: 45,
    title: 'Exercise 45',
    category: 'Science & Education',
    focusKeys: 'Full keyboard',
    focusHindi: 'विज्ञान, तकनीकी, शिक्षा, अनुसंधान, प्रयोग, सिद्धांत',
    description: 'Academic and scientific terminology practice',
    content:
      'foKku] rduhdh] f' +
      "'" +
      'k{kk] vuqla/kku] iz;ksx] fl)kar] foKku] rduhdh] f' +
      "'" +
      'k{kk] vuqla/kku] iz;ksx] fl)kar] foKku] rduhdh] f' +
      "'" +
      'k{kk] vuqla/kku] iz;ksx] fl)kar] foKku] rduhdh] f' +
      "'" +
      'k{kk] vuqla/kku] iz;ksx] fl)kar]',
  },
  {
    id: 46,
    title: 'Exercise 46',
    category: 'Commerce & Economy',
    focusKeys: 'Full keyboard',
    focusHindi: 'व्यापार, उद्योग, अर्थव्यवस्था, वित्तीय, बाजार, पूंजी',
    description: 'Financial, business and economic terms practice',
    content:
      'O;kikj] m|ksx] vFkZO;oLFkk] foRrh;] cktkj] iwath] O;kikj] m|ksx] vFkZO;oLFkk] foRrh;] cktkj] iwath] O;kikj] m|ksx] vFkZO;oLFkk] foRrh;] cktkj] iwath] O;kikj] m|ksx] vFkZO;oLFkk] foRrh;] cktkj] iwath]',
  },
  {
    id: 47,
    title: 'Exercise 47',
    category: 'Geography & Nature',
    focusKeys: 'Full keyboard',
    focusHindi: 'पर्यावरण, प्रकृति, नदियां, पर्वत, वनस्पति, जलवायु',
    description: 'Environmental, geography and natural sciences vocabulary',
    content:
      'i;kZoj.k] izd`fr] ufn;ka] ioZr] ouLifr] tyok;q] i;kZoj.k] izd`fr] ufn;ka] ioZr] ouLifr] tyok;q] i;kZoj.k] izd`fr] ufn;ka] ioZr] ouLifr] tyok;q] i;kZoj.k] izd`fr] ufn;ka] ioZr] ouLifr] tyok;q]',
  },
  {
    id: 48,
    title: 'Exercise 48',
    category: 'Numbers & Hindi Digits in Words',
    focusKeys: 'Top row numbers + words',
    focusHindi: 'एक, दो, तीन, चार, पांच, छह, सात, आठ, नौ, दस',
    description: 'Counting numbers spelled out in Hindi and numerical digits',
    content:
      ',d] nks] rhu] pkj] ikap] Ng] lkr] vkB] ukS] nl] 12345 67890 ,d] nks] rhu] pkj] ikap] Ng] lkr] vkB] ukS] nl] 12345 67890 ,d] nks] rhu] pkj] ikap] Ng] lkr] vkB] ukS] nl] 12345 67890 ,d] nks] rhu] pkj] ikap] Ng] lkr] vkB] ukS] nl]',
  },
  {
    id: 49,
    title: 'Exercise 49',
    category: 'Punctuation & Symbols',
    focusKeys: 'Punctuation keys',
    focusHindi: '। , - : ; ( ) ? ! " \'',
    description: 'Hindi punctuation marks, brackets, quotation marks and full stops',
    content:
      'A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\' A ] - % ; () ? ! "" \'\'',
  },
  {
    id: 50,
    title: 'Exercise 50',
    category: 'Speed Booster Drill 1',
    focusKeys: 'Full keyboard rapid switch',
    focusHindi: 'जल ही जीवन है। वृक्ष हमारे मित्र हैं। समय अमूल्य धन है।',
    description: 'Rapid sentence flow for testing typing speed threshold',
    content:
      'ty gh thou gSA o`{k gekjs fe= gSaA le; vewY; /ku gSA ty gh thou gSA o`{k gekjs fe= gSaA le; vewY; /ku gSA ty gh thou gSA o`{k gekjs fe= gSaA le; vewY; /ku gSA ty gh thou gSA o`{k gekjs fe= gSaA le; vewY; /ku gSA',
  },
  {
    id: 51,
    title: 'Exercise 51',
    category: 'Speed Booster Drill 2',
    focusKeys: 'Full keyboard rapid switch',
    focusHindi: 'कर्म ही पूजा है। एकता में ही सच्चा बल है। ज्ञान ही शक्ति है।',
    description: 'Proverbs focusing on finger agility and speed accuracy balance',
    content:
      'deZ gh iwtk gSA ,drk esa gh lPpk cy gSA Kku gh ' +
      "'" +
      'kfDr gSA deZ gh iwtk gSA ,drk esa gh lPpk cy gSA Kku gh ' +
      "'" +
      'kfDr gSA deZ gh iwtk gSA ,drk esa gh lPpk cy gSA Kku gh ' +
      "'" +
      'kfDr gSA deZ gh iwtk gSA ,drk esa gh lPpk cy gSA Kku gh ' +
      "'" +
      'kfDr gSA',
  },
  {
    id: 52,
    title: 'Exercise 52',
    category: 'Speed Booster Drill 3',
    focusKeys: 'Full keyboard rapid switch',
    focusHindi: 'अहिंसा परमो धर्मः। सत्यमेव जयते। वसुधैव कुटुम्बकम्।',
    description: 'Sanskrit quotes and classical maxims used in Hindi exams',
    content:
      'vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A',
  },
  {
    id: 53,
    title: 'Exercise 53',
    category: 'Complex Words Mastery 1',
    focusKeys: 'Full keyboard',
    focusHindi: 'अंतर्राष्ट्रीय, दृष्टिकोण, अभिव्यक्ति, प्रतिस्पर्धा',
    description: 'Long multi-syllable Hindi words requiring high accuracy',
    content:
      'varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ]',
  },
  {
    id: 54,
    title: 'Exercise 54',
    category: 'Complex Words Mastery 2',
    focusKeys: 'Full keyboard',
    focusHindi: 'शुभकामनाएं, उत्तरदायित्व, महत्वपूर्ण, विश्वविद्यालय',
    description: 'Administrative and educational polysyllabic vocabulary',
    content:
      '\'kqHkdkeuk,a] mRrjnkf;Ro] egRoiw.kZ] fo' +
      "'" +
      'ofo|ky;] \'kqHkdkeuk,a] mRrjnkf;Ro] egRoiw.kZ] fo' +
      "'" +
      'ofo|ky;] \'kqHkdkeuk,a] mRrjnkf;Ro] egRoiw.kZ] fo' +
      "'" +
      'ofo|ky;] \'kqHkdkeuk,a] mRrjnkf;Ro] egRoiw.kZ] fo' +
      "'" +
      'ofo|ky;]',
  },
  {
    id: 55,
    title: 'Exercise 55',
    category: 'Special Punctuation & Quotes',
    focusKeys: 'Shift + numbers & symbols',
    focusHindi: '“भारत एक महान देश है,” उन्होंने कहा। (सन १९४७)',
    description: 'Quotation marks, brackets and comma flow in Hindi text',
    content:
      '\"Hkkjr ,d egku ns' +
      "'" +
      'k gS]\" mUgksaus dgkA ¼lu 1947½ \"Hkkjr ,d egku ns' +
      "'" +
      'k gS]\" mUgksaus dgkA ¼lu 1947½ \"Hkkjr ,d egku ns' +
      "'" +
      'k gS]\" mUgksaus dgkA ¼lu 1947½ \"Hkkjr ,d egku ns' +
      "'" +
      'k gS]\" mUgksaus dgkA ¼lu 1947½',
  },
  {
    id: 56,
    title: 'Exercise 56',
    category: 'Exam Simulation Paragraph 1',
    focusKeys: 'Full keyboard',
    focusHindi: 'भारत की संस्कृति विश्व की सबसे प्राचीन संस्कृतियों में से एक है।',
    description: 'Continuous text typing test simulating 30 WPM exam condition',
    content:
      'Hkkjr dh laLd`fr fo' +
      "'" +
      'o dh lcls izkphu laLd`fr;ksa esa ls ,d gSA ;gka fofHkUu /keksZa vkSj tkfr;ksa ds yksx feytqy dj jgrs gSaA Hkkjr dh laLd`fr fo' +
      "'" +
      'o dh lcls izkphu laLd`fr;ksa esa ls ,d gSA ;gka fofHkUu /keksZa vkSj tkfr;ksa ds yksx feytqy dj jgrs gSaA',
  },
  {
    id: 57,
    title: 'Exercise 57',
    category: 'Exam Simulation Paragraph 2',
    focusKeys: 'Full keyboard',
    focusHindi: 'शिक्षा मनुष्य के जीवन का सबसे महत्वपूर्ण अंग है। इससे ज्ञान बढ़ता है।',
    description: 'Continuous text typing test simulating 35 WPM exam condition',
    content:
      'f' +
      "'" +
      'k{kk euq"; ds thou dk lcls egRoiw.kZ vax gSA blls Kku c<+rk gS vkSj thou esa lQyrk feyrh gSA f' +
      "'" +
      'k{kk euq"; ds thou dk lcls egRoiw.kZ vax gSA blls Kku c<+rk gS vkSj thou esa lQyrk feyrh gSA',
  },
  {
    id: 58,
    title: 'Exercise 58',
    category: 'Exam Simulation Paragraph 3',
    focusKeys: 'Full keyboard',
    focusHindi: 'डिजिटल क्रांति ने हमारे देश में एक नया बदलाव लाया है। तकनीक से विकास होता है।',
    description: 'Modern administrative paragraph test simulating 40 WPM speed',
    content:
      'fMftVy dzkfUr us gekjs ns' +
      "'" +
      'k esa ,d u;k cnyko yk;k gSA rduhd ls fodkl gksrk gSA fMftVy dzkfUr us gekjs ns' +
      "'" +
      'k esa ,d u;k cnyko yk;k gSA rduhd ls fodkl gksrk gSA',
  },
  {
    id: 59,
    title: 'Exercise 59',
    category: 'Exam Simulation Paragraph 4',
    focusKeys: 'Full keyboard',
    focusHindi: 'समय का सदुपयोग करना ही प्रत्येक छात्र और नागरिक का पहला कर्तव्य होना चाहिए।',
    description: 'High-speed paragraph test simulating high court / SSC accuracy requirements',
    content:
      'le; dk lnqi;ksx djuk gh izR;sd Nk= vkSj ukxfjd dk igyk drZO; gksuk pkfg,A ifjJe ls gh gj y{; gkfly gksrk gSA le; dk lnqi;ksx djuk gh izR;sd Nk= vkSj ukxfjd dk igyk drZO; gksuk pkfg,A ifjJe ls gh gj y{; gkfly gksrk gSA',
  },
  {
    id: 60,
    title: 'Exercise 60',
    category: 'Mastery Grand Test (Full 60)',
    focusKeys: 'Complete Keyboard KrutiDev 010',
    focusHindi: 'सम्पूर्ण हिंदी टंकण अभ्यास परीक्षण — आप सभी कुंजियों और मात्राओं में निपुण हो चुके हैं।',
    description: 'Final grand milestone test completing all 60 KrutiDev typing tutor lessons',
    content:
      'lEiw.kZ fganh Vad.k vH;kl ijh{k.k & vki lHkh dqaft;ksa vkSj ek=kvksa esa fuiq.k gks pqds gSaA lR;eso t;rsA Hkkjr ekrk dh t;A lEiw.kZ fganh Vad.k vH;kl ijh{k.k & vki lHkh dqaft;ksa vkSj ek=kvksa esa fuiq.k gks pqds gSaA',
  },
];

// Empty placeholder arrays for future sections to be provided by user
export const HINDI_PRACTICE_WORDS_LESSONS: HindiLesson[] = [];
export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [];

