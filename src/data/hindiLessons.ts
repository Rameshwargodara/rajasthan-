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
    category: "Home Row Keys (' s k d l ; g j)",
    focusKeys: "' s k d l ; g j",
    focusHindi: 'श े ा क स य ह र',
    description:
      "'''' kkkk '''' '''' 'k'k'k'k 'k'k'k'k शश केके केके केके सेसे सेसे येये येये केके केके केके हेहे रेरे रेरे के को हे हो से सो शे शो के को हे हो से सो ये यो शे शो शेशे शेशे शेर शेर शेर शोर शोर कोर कोस होश सोर कोर कोरा कोरी कोस शेर शक काश यश राशी राशी काशी काशी शहर शहर शाक शाक शोक कोसी रो शीशा",
    content:
      "'''' kkkk '''' '''' 'k'k'k'k 'k'k'k'k 'k'k dsds dsds dsds lsls lsls ;s;s ;s;s dsds dsds dsds gsgs jsjs jsjs ds dks gs gks ls lks 's 'ks ds dks gs gks ls lks ;s ;ks 's 'ks 's's 's's 'sj 'sj 'sj 'ksj 'ksj dksj dksl gks' lksj dksj dksjk dksjh dksl 'sj 'kd dk' ;' jk'kh jk'kh dk'kh dk'kh 'kgj 'kgj 'kkd 'kkd 'ksd dkslh jks 'kh'kk",
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
    category: "Kha, Sha & Quotes Keys (ख=[, श=', comma=])",
    focusKeys: "' [ ] k p j h q y s S a u d g",
    focusHindi: 'श ख् , ा च र ी ु ल े ै ं न क ह',
    description:
      "'''' [[[[ '''' [[[[ ''[[ [['' ''[[ [['' 'k[k [k'k 'k[k [k[k[k[k 'k'k'k'k 'k'k[k[k [k[k'k'k 'ka[k खचाखच चख रख खरी खीर खुला खेल खैर खैरियत खुश शाख खास खान नखरा खाली खुले खोला '''' ]]]] ']']'] [][][][] ]]]] [[[[ [k] ]]]] [[[[ ]]]] '[] '[] ']'] '['[ ['[' ']'] ']'] ]]]] '''' [[[[ [k]'k] 'k][k] सुखा, हुक्का, खून, खोखला, शाख, शुखा",
    content:
      "'''' [[[[ '''' [[[[ ''[[ [['' ''[[ [['' 'k[k [k'k 'k[k [k[k[k[k 'k'k'k'k 'k'k[k[k [k[k'k'k 'ka[k [kpk[kp p[k j[k [kjh [khj [kqyk [ksy [kSj [kSfj;r [kq' 'kk[k [kkl [kku u[kjk [kkyh [kqys [kksyk '''' ]]]] ']']'] [][][][] ]]]] [[[[ [k] ]]]] [[[[ ]]]] '[] '[] ']'] '['[ ['[' ']'] ']'] ]]]] '''' [[[[ [k]'k] 'k][k] lq[kk] gqDdk] [kwu] [kks[kyk] 'kk[k] 'kq[kk]",
  },
  {
    id: 21,
    title: 'Exercise 21',
    category: 'Bracket & Backslash Keys ([, ], \\)',
    focusKeys: "[ ] \\ k q ' e",
    focusHindi: 'ख् , ? ा ु श म',
    description:
      "[[[[ ]]]] \\ \\ ]]]] [[[[ ]]]] \\ [[[[ [[[[ \\ ]]]] [kq'k\\ 'kke\\ \\ \\ ]]]] ]]]] [[[[ ]]]] \\ \\]\\ 'k]'k]\\ 'k]'k\\ 'k ]'k [[[[ ]]]] \\ \\ ]]]] [[[[[ [[[[ ]]]] \\ \\ [kq'k\\ 'kke\\ \\ \\ ]]]] ]]]] [[[[ ]]]] \\ \\]\\ 'k] 'k\\ 'k] 'k\\ 'k ]'k",
    content:
      "[[[[ ]]]] \\\\ \\\\ ]]]] [[[[ ]]]] \\\\ [[[[ [[[[ \\\\ ]]]] [kq'k\\ 'kke\\ \\\\ \\\\ ]]]] ]]]] [[[[ ]]]] \\\\ \\\\]\\\\ 'k]'k]\\\\ 'k]'k\\\\ 'k ]'k [[[[ ]]]] \\\\ \\\\ ]]]] [[[[[ [[[[ ]]]] \\\\ \\\\ [kq'k\\ 'kke\\ \\\\ \\\\ ]]]] ]]]] [[[[ ]]]] \\\\ \\\\]\\\\ 'k] 'k\\\\ 'k] 'k\\\\ 'k ]'k",
  },
  {
    id: 22,
    title: 'Exercise 22',
    category: 'Words & Half-Letters Flow (नमस्ते, तीरथ, भरतपुर, चमकीला)',
    focusKeys: 't y p [ k i o u e ] j l w g r h F H d L s',
    focusHindi: 'ज ल च ख् ा प व न म , र स ू ह त ी थ् भ क स् े',
    description:
      'जल चख पच वन चुनना चार पान मान, खान नाम पाप जलन खलन चखत मजाल मजार सूखना नहाती तीरथ, भरनी करनी खजाना नमस्ते, भरतपुर जनमत करतल नमकीन चमकीला मलीनता कमीनता नमकीना मखमल चहकना मनमाना मनमानी, जललीरा मलमल मामाजी मत',
    content:
      'ty p[k ip ou pquuk pkj iku eku] [kku uke iki tyu [kyu p[kr etky etkj lw[kuk ugkrh rhjFk] Hkjuh djuh [ktkuk ueLrs] Hkjriqj tuer djry uedhu pedhyk eyhurk dehurk uedhuk e[key pgduk euekuk euekuh] tyyhjk eyey ekekth er',
  },
  {
    id: 23,
    title: 'Exercise 23',
    category: 'Pha Key & Chandra Matra (फ=Q, ॅ=W, कॉ, वॉच, डॉग, फॉग, रफ)',
    focusKeys: 'Q W d s q k w M o p x j f e a',
    focusHindi: 'फ ॅ क े ु ा ू ड व च ग र ि म ं',
    description:
      'फफफफ फेफेफेफे फफफफ कफ फुफु फुफा फेफ फफ फफफफ फुफुफुफु फेफेफेफे फूफूफू कॅकॅकॅक कूकूकूक कॅकॅकॅकॅ फॅफॅफॅफ फुफुफुफु फूफूफूफू कूक कूक कुकफ कुकफ कफ फफफफ फेफेफेफे फफफफ कफ फुफु फुफा फेफ फफ फफफफ फुफुफुफु फेफेफेफे फूफूफू कॅकॅकक कूकूकूकू कॅकॅकॅक फॅफॅफॅफ फुफुफुफु फूफूफूफू कूक कूक कुकफ कुकफ कफ कॉ वॉच डॉग फॉग रफ वूफर फकीर फिरका कॉम कॉलम कॉल फेंकू कुंफु फूंक माफ',
    content:
      'QQQQ QsQsQsQs QQQQ dQ QqQq QqQk QsQ QQ QQQQ QqQqQqQq QsQsQsQs QwQwQw dWdWdW dwdwd dWdWdWdW QWQWQWQ QqQqQqQq QwQwQwQw dwd dwd dqdQ dqdQ dQ QQQQ QsQsQsQs QQQQ dQ QqQq QqQk QsQ QQ QQQQ QqQqQqQq QsQsQsQs QwQwQw dWdWdd dwdwdwdw dWdWdW QWQWQWQ QqQqQqQq QwQwQwQw dwd dwd dqdQ dqdQ dQ dkW okWp MkWx QkWx jQ owQj Qdhj fQjdk dkWe dkWye dkWy Qsadw dqaQq Qwad ekQ',
  },
  {
    id: 24,
    title: 'Exercise 24',
    category: 'Half Ma & Half Ta Keys (म्=E, त्=R, मरम्मत, कुम्हार, महात्मा, सत्ता)',
    focusKeys: 'E e R r j d q g k l ; a h t i p Q',
    focusHindi: 'म् म त् त र क ु ह ा स य ं ी ज प च फ',
    description:
      'EEEEE मममम म्म्मम म्मम्म मरम्मत कुम्हार तततत RRRR rrRR RRrr RrRr तततत RRRR rrRR महात्मा सत्ता हत्यारा तांत्या हत्या सत्तर तुम्हारी तुम्हारा तुम्ही जम्प चम्पा जुम्मा कुत्ता फत्ता ममम मममम म्म्मम म्मम्म मरम्मत कुम्हार तततत RRRR तततत RRRR rrRR RRrr RrRr तततत RRRR rrRR महात्मा सत्ता हत्यारा तांत्या हत्या सत्तर तुम्हारी तुम्हारा तुम्ही जम्प चम्पा जुम्मा कुत्ता फत्ता',
    content:
      'EEEEE eeee Eeee EeEe ejEer dqEgkj rrrr RRRR rrRR RRrr RrRr rrrr RRRR rrRR egkRek lRrk gR;kjk rkaR;k gR;k lRrj rqEgkjh rqEgkjk rqEgh tEi pEik tqEek dqRrk QRrk eee eeee Eeee EeEe ejEer dqEgkj rrrr RRRR rrrr RRRR rrRR RRrr RrRr rrrr RRRR rrRR egkRek lRrk gR;kjk rkaR;k gR;k lRrj rqEgkjh rqEgkjk rqEgh tEi pEik tqEek dqRrk QRrk',
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

// Practice Words Exercises (1 to 31) - Practice Words Section
export const HINDI_PRACTICE_WORDS_LESSONS: HindiLesson[] = [
  {
    id: 1,
    title: "Exercise 1",
    category: "Swar (Vowels) Practice - Part 1 (अ, आ, ओ, औ)",
    focusKeys: "v, k, ks, kS",
    focusHindi: "अनार अंग्रेज अंग अली आम अल्लाह अम्मी आर्मी ...",
    description: "अनार अंग्रेज अंग अली आम अल्लाह अम्मी आर्मी आदि अनुसार अनेक अंदर अनादर अंधेरा आना और आग अनुरूप अच्छा औरत आगन आतंक आनन आँख असमर्थ अयोग्य ओट आवश्यकता आलम आना अवलम्ब अतर आवरण असफल आधा आवरण आकार आदर अवश्य आधार आवाज आकर आकार अपना अपने आमरण आई अभी अच्छी आठ अवसर आओ आए",
    content:
      "vukj vaxzst vax vyh vke vYykg vEeh vkehZ vkfn vuqlkj vusd vanj vuknj va/ksjk vkuk vkSj vkx vuqjwi vPNk vkSjr vkxu vkrad vkuu vk¡[k vleFkZ v;ksX; vksV vko';drk vkye vkuk voyEc vrj vkoj.k vlQy vk/kk vkoj.k vkdkj vknj vo'; vk/kkj vkokt vkdj vkdkj viuk vius vkej.k vkbZ vHkh vPNh vkB volj vkvks vk,",
  },
  {
    id: 2,
    title: "Exercise 2",
    category: "Swar Practice - Part 2 (अ, आ, ओ, औ, अनुस्वार)",
    focusKeys: "v, k, ks, a",
    focusHindi: "अब आता आदमी आखिर आखरी औकात अक्कल आगरा ...",
    description: "अब आता आदमी आखिर आखरी औकात अक्कल आगरा असर अहमियत अहम अधिक आंधी औषधि अंदाज और ओने अन्य आशा अकेले और अलमारी आत्मा अशोक अरिष्ट आगे ओढ़ना ओट ओह ओस अजली अजैया अजनी अंकुर अड़ा अंतपुर आंत आंतें अंगीठी अंत अंकुश अंधकार अंगोछा अंगड़ाई अंक अंतिम अह आंतरिक अंश अंतर्गत अंगीकार",
    content:
      "vc vkrk vkneh vkf[kj vk[kjh vkSdkr vDky vkxjk vlj vgfe;r vge vf/kd vka/kh vkS\"kf/k vankt vkSj vksus vU; vk'kk vdsys vkSj vyekjh vkRek v'kksd vfj\"V vkxs vks<+uk vksV vksg vksl vtyh vtS;k vtuh vadqj vM+k variqj vkar vkarsa vaxhBh var vadq'k va/kdkj vaxksNk vaxM+kbZ vad vafre vg vkarfjd va'k varxZr vaxhdkj",
  },
  {
    id: 3,
    title: "Exercise 3",
    category: "Swar Practice - Part 3 (इ, ई, उ, ऊ)",
    focusKeys: "b, bZ, m, Å",
    focusHindi: "इस इकट्ठे इसके इसमें इधर इंकार ईख इसका ...",
    description: "इस इकट्ठे इसके इसमें इधर इंकार ईख इसका इंडियन ईस्वी इस्तीफा इच्छा इसलिए इससे इसका इलाहाबाद ईसाई इतिहास ईर्ष्या इस्लाम इंसान उसका उतारकर उत्तर उतरन उफान उठना उसकी उसमे उनके उसे उन उत्तर उपरांत उपेक्षा उत्पन्न उधेड़ उसी उम्र उत्साह उत्सुक उर्दू उन्माद उदाहरण उठाई उन्मादी उंची उंचा उपस्थित उच्च उधार उपकार उपमंत्री उपाध्यक्ष उकेराना उगाया उगाना उल्लू उषा उलाहना उम्र उजाड़ उजड़ा",
    content:
      "bl bdës blds blesa b/kj badkj bZ[k bldk bafM;u bZLoh bLrhQk bPNk blfy, blls bldk bykgkckn bZlkbZ bfrgkl bZ\";kZ bLyke balku mldk mrkjdj mRkj mrju mQku mBuk mldh mles muds mls mu mRkj mijkar mis{kk mRiUu m/ksM+ mlh mEj mRlkg mRlqd mnwZ mUekn mnkgj.k mBkbZ mUeknh maph mapk miLfFkr mPp m/kkj midkj miea=h mik/;{k mdsjkuk mxk;k mxkuk mYyw m\"kk mykguk mEj mtkM+ mtM+k",
  },
  {
    id: 4,
    title: "Exercise 4",
    category: "Swar & Ri Practice (ए, ऐ, ऋ)",
    focusKeys: "comma, s, _",
    focusHindi: "एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ...",
    description: "एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ऐनक ऐन एकाएक एकदम एकाध ऐंठ ऐंठन एतराज एकड़ ऐतिहासिक एव ऋणी ऋषि ऋण ऋग्वेद ऋतंभरा ऋतु ऋतुराज एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ऐनक ऐन एकाएक एकदम एकाध ऐंठ ऐंठन एतराज एकड़ ऐतिहासिक एव ऋणी ऋषि ऋण ऋग्वेद ऋतंभरा ऋतु ऋतुराज",
    content:
      ",d ,slh ,slk ,sls ,djl ,djwi ,drk ,dy ,sud ,su ,dk,d ,dne ,dk/k ,saB ,saBu ,rjkt ,dM+ ,sfrgkfld ,o _.kh _f\"k _.k _Xosn _raHkjk _rq _rqjkt ,d ,slh ,slk ,sls ,djl ,djwi ,drk ,dy ,sud ,su ,dk,d ,dne ,dk/k ,saB ,saBu ,rjkt ,dM+ ,sfrgkfld ,o _.kh _f\"k _.k _Xosn _raHkjk _rq _rqjkt",
  },
  {
    id: 5,
    title: "Exercise 5",
    category: "Vyanjan - Ka Varg (क)",
    focusKeys: "d, D",
    focusHindi: "कमल कल कमला कब कौन कैसे कहाँ काला ...",
    description: "कमल कल कमला कब कौन कैसे कहाँ काला कड़ा कौशल्या कृष्ण काम कार्य के का कुछ कर करना कर्ण कान्ति करती कलकत्ता कोई कुल कुत्ता कर्ज करवट कहना कही कहते कदापि कंधा काव्य कामना कार्य काम कुटुम्ब कलह कभी कर्तव्य करोड़पति कम कला करुणा कटप्पा कांगिनि कमीना कील किला कुरूप कुपुत्र कंस कपि कपिल कपीश कमी कौमा कौम कौमार्य कुमार कल कलाई",
    content:
      "dey dy deyk dc dkSu dSls dgk¡ dkyk dM+k dkS'kY;k d`\".k dke dk;Z ds dk dqN dj djuk d.kZ dkUfr djrh dydRkk dksbZ dqy dqRkk dtZ djoV dguk dgh dgrs dnkfi da/kk dkO; dkeuk dk;Z dke dqVqEc dyg dHkh drZO; djksM+ifr de dyk djq.kk dVIik dkafxfu dehuk dhy fdyk dqjwi dqiq= dal dfi dfiy dih'k deh dkSek dkSe dkSek;Z dqekj dy dykbZ",
  },
  {
    id: 6,
    title: "Exercise 6",
    category: "Vyanjan - Kha Varg (ख)",
    focusKeys: "[, [k",
    focusHindi: "खड़ा खरल खोल खेल खाना खुली खली खींचना ...",
    description: "खड़ा खरल खोल खेल खाना खुली खली खींचना खिचड़ी खून खया खा खबर खान खूब खेज खेलना खादी खेद खुशामद खर्च खुशियाँ खयी खाई खुद खेत खुलना खोलना खुदा खंजर खटास खट्टा खाली खत्म खाट खोखला खजूर खचाखच खोमचे खतरा खर्राटे खुमारी खरोंच खोपड़ी खारा खांसी खिलौना खलनायक खरहा खेमा",
    content:
      "[kM+k [kjy [kksy [ksy [kkuk [kqyh [kyh [khapuk f[kpM+h [kwu [k;k [kk [kcj [kku [kwc [kst [ksyuk [kknh [ksn [kq'kken [kpZ [kqf'k;k¡ [k;h [kkbZ [kqn [ksr [kqyuk [kksyuk [kqnk [katj [kVkl [kêk [kkyh [kRe [kkV [kks[kyk [ktwj [kpk[kp [kkseps [krjk [kjkZVs [kqekjh [kjksap [kksiM+h [kkjk [kkalh f[kykSuk [kyuk;d [kjgk [ksek",
  },
  {
    id: 7,
    title: "Exercise 7",
    category: "Vyanjan - Ga Varg (ग)",
    focusKeys: "x, X, xz",
    focusHindi: "गाँव गोरी गोरी गुण ग्रंथ गया गयी गृह ...",
    description: "गाँव गोरी गोरी गुण ग्रंथ गया गयी गृह गृहस्थ गाली गुमान गुमानी गीला गिल्लू गरम गंवार गति गाना गाती गाया गला ग्रेजुएट गर्ज गर्जना गज गुरेज गूंगा गरजना गाड़ी गर्दन गुर्जर गुजरात गुलाम गुलाब गवाह गर्व गंभीर गाथा गन गहना गहन गगन गोरा गेहूं गुरु गलत गड़बड़ गोली गुस्सा गौरव गठरी गुर्दा गोल गुलाम गाद गेंद गर्म गर्मी गरीब गौर",
    content:
      "xk¡o xksjh xksjh xq.k xzaFk x;k x;h x`g x`gLFk xkyh xqeku xqekuh xhyk fxYyw xje xaokj xfr xkuk xkrh xk;k xyk xzstq,V xtZ xtZuk xt xqjst xwaxk xjtuk xkM+h xnZu xqtZj xqtjkr xqyke xqykc xokg xoZ xaHkhj xkFkk xu xguk xgu xxu xksjk xsgwa xqjq xyr xM+cM+ xksyh xqLlk xkSjo xBjh xqnkZ xksy xqyke xkn xsan xeZ xehZ xjhc xkSj",
  },
  {
    id: 8,
    title: "Exercise 8",
    category: "Vyanjan - Gha Varg (घ)",
    focusKeys: "?, ?k",
    focusHindi: "घड़ा घड़ी घोड़ा घेरना घेराव घंटा घात घातक ...",
    description: "घड़ा घड़ी घोड़ा घेरना घेराव घंटा घात घातक घर घायल घबराना घटना घटी घुसना घसीटना घूमना घृणा घुटना घूंट घट घाघरा घना घोंसला घाव घटा घूसा घुसना घास घुमाना घोषणा घी घेर घोटाला घूंघरी घुलाई घबरा घमंड घृ घुलनशील घूंट घुमक्कड़ घूरना घाट घाटी घोर",
    content:
      "?kM+k ?kM+h ?kksM+k ?ksjuk ?ksjko ?kaVk ?kkr ?kkrd ?kj ?kk;y ?kcjkuk ?kVuk ?kVh ?kqluk ?klhVuk ?kweuk ?k`.kk ?kqVuk ?kwaV ?kV ?kk?kjk ?kuk ?kksalyk ?kko ?kVk ?kwlk ?kqluk ?kkl ?kqekuk ?kks\"k.kk ?kh ?ksj ?kksVkyk ?kwa?kjh ?kqykbZ ?kcjk ?keaM ?k` ?kqyu'khy ?kwaV ?kqeDkM+ ?kwjuk ?kkV ?kkVh ?kksj",
  },
  {
    id: 9,
    title: "Exercise 9",
    category: "Vyanjan - Cha Varg (च)",
    focusKeys: "p, P",
    focusHindi: "चाचा चोंच चंदा चंदू चंपू चंपा चंदेल चचेरा ...",
    description: "चाचा चोंच चंदा चंदू चंपू चंपा चंदेल चचेरा चोर चोरी चौकन्ना चबूतरा चम्मच चाटूकार चूसना चेक चेकर चेला चिमनी चाची चाटा चमड़ा चर्म चिंगारी चूल्हा चीख चंडीगढ़ चंचल चाल चालू चश्मा चकोर चार चंपारण चूड़ियां चूहू चापलूश चाप चरण चरवाहा चुप चुपचाप चैतन्य चेतना चेत चौधरी चाहे चीनी चीर चोट चाईना चुकी चुका चेयरमैन चुंगी चढ़ता चेहरा चमत्कार चौकस चूरन चंद चुटकी चटाई चौंधिया चलूँ चौखट चिकनाई चादर चुनना चुनाव चलना चावल चाहती चाहिए चाय चबाने चटनी चक्कर चूँकि चर्च चंगुल चेतावनी चर्चा चपरासी चौका चकला चून चाहत चींटी चलते चौकी चुप्पी चेचक चंगा चमक चाट चक्की चीज",
    content:
      "pkpk pksap pank panw paiw paik pansy ppsjk pksj pksjh pkSdUuk pcwrjk pEep pkVwdkj pwluk psd psdj psyk fpeuh pkph pkVk peM+k peZ fpaxkjh pwYgk ph[k paMhx<+ papy pky pkyw p'ek pdksj pkj paikj.k pwMf+;ka pwgw pkiyw'k pki pj.k pjokgk pqi pqipki pSrU; psruk psr pkS/kjh pkgs phuh phj pksV pkbZuk pqdh pqdk ps;jeSu pqaxh p<+rk psgjk peRdkj pkSdl pwju pan pqVdh pVkbZ pkSaf/k;k pyw¡ pkS[kV fpdukbZ pknj pquuk pquko pyuk pkoy pkgrh pkfg, pk; pckus pVuh pDkj pw¡fd ppZ paxqy psrkouh ppkZ pijklh pkSdk pdyk pwu pkgr phaVh pyrs pkSdh pqIih pspd paxk ped pkV pDkh pht",
  },
  {
    id: 10,
    title: "Exercise 10",
    category: "Vyanjan - Chha Varg (छ)",
    focusKeys: "N, N~",
    focusHindi: "छाता छाले छांव छाया छात्र छाया छा छगन ...",
    description: "छाता छाले छांव छाया छात्र छाया छा छगन छलावा छलिया छछूंदर छह छूमंतर छोटा छोटी छैला छेद छक्का छमियां छल्ला छत्तीसगढ़ छाती छात्र छात्रा छाना छीक छिछोरा छोरा छोरी छेदी छेद छोटी छोटा छाछा छुआछूत छोड़ना छठ छोड़ना छोर छटांग छप्पर छूट छुड़ाने छल छत छटपटाहट छुट्टी छलांग छौंकना",
    content:
      "Nkrk Nkys Nkao Nk;k Nk= Nk;k Nk Nxu Nykok Nfy;k NNwanj Ng Nwearj NksVk NksVh NSyk Nsn NDkk Nfe;ka NYyk NRkhlx<+ Nkrh Nk= Nk=k Nkuk Nhd fNNksjk Nksjk Nksjh Nsnh Nsn NksVh NksVk NkNk NqvkNwr NksM+uk NB NksM+uk Nksj NVkax NIij NwV NqM+kus Ny Nr NViVkgV Nqêh Nykax NkSaduk",
  },
  {
    id: 11,
    title: "Exercise 11",
    category: "Vyanjan - Ja Varg (ज)",
    focusKeys: "t, T, t+",
    focusHindi: "जहाज जगह जहाँगीर जहीर जा जाना जान जाता ...",
    description: "जहाज जगह जहाँगीर जहीर जा जाना जान जाता जा जारी जाना जानना जानकार जानकर जानकारी जालिम जादू जादूगर जन्म जनता जिस्म जिगर जीवन जीना जिन जिंदगी जय जयकार जण जंजीर जगल जाध जमुना जागना जागो जैसे जाए जम्मू जगत जग जल जाकर जड़ जी जोर जाने जाए जब जीने जिस्म जुल्म जुमला जुगाड़ जवान जोश जबरदस्त जरा",
    content:
      "tgkt txg tgk¡xhj tghj tk tkuk tku tkrk tk tkjh tkuk tkuuk tkudkj tkudj tkudkjh tkfye tknw tknwxj tUe turk ftLe ftxj thou thuk ftu ftanxh t; t;dkj t.k tathj txy tk/k tequk tkxuk tkxks tSls tk, tEew txr tx ty tkdj tM+ th tksj tkus tk, tc thus ftLe tqYe tqeyk tqxkM+ toku tks'k tcjnLr tjk",
  },
  {
    id: 12,
    title: "Exercise 12",
    category: "Vyanjan - Jha Varg (झ)",
    focusKeys: ">, >k",
    focusHindi: "झण्डा झण्डू झंकार झुझारू झाबर झलक झील झींगा ...",
    description: "झण्डा झण्डू झंकार झुझारू झाबर झलक झील झींगा झाग झेलम झूठ जूठन झांझर झन्नाहट झपट्टा झकझोर झोंपड़ी झल्लाहट झेपकड़ झटपट झुर्रिया झूलने झाड़ू झोक झुककर झुंड झोका झगड़ झुग्गी झाककर झेलना झटका झक झपकी",
    content:
      ">k.Mk >k.Mw >kadkj >kq>kkjw >kkcj >kyd >khy >khaxk >kkx >ksye >kwB twBu >kka>kj >kUukgV >kiêk >kd>kksj >kksaiM+h >kYykgV >ksidM+ >kViV >kqfjZ;k >kwyus >kkM+w >kksd >kqddj >kqaM >kksdk >kxM+ >kqXxh >kkddj >ksyuk >kVdk >kd >kidh",
  },
  {
    id: 13,
    title: "Exercise 13",
    category: "Vyanjan - Ta/Ttha Varg (ट, ठ)",
    focusKeys: "V, B, Vª",
    focusHindi: "टमाटर टंकण ट्रक टनाटन टन टाबर टाटी टोली ...",
    description: "टमाटर टंकण ट्रक टनाटन टन टाबर टाटी टोली टीला टांग टोहना टैक्सी टोल टैक्स टिन टंगस्टन टक्कर टूटता टूटा टुकड़े टलना टिप–टिप टल टँगी टोपी टेकड़ी ट्रेन ट्रेनिंग ट्रस्ट ट्रूप टैगोर टाट ठीक तड़ा ठहरो ठहराव ठड़ ठेला ठाकुर ठुमक ठुमका ठेकेदार ठेका ठेंगा ठहका ठाठ ठंड ठोकर ठूंठ ठाला ठानली",
    content:
      "VekVj Vad.k Vªd VukVu Vu Vkcj VkVh Vksyh Vhyk Vkax Vksguk VSDlh Vksy VSDl fVu VaxLVu VDkj VwVrk VwVk VqdM+s Vyuk fVi-fVi Vy V¡xh Vksih VsdM+h Vªsu Vªsfuax VªLV Vªwi VSxksj VkV Bhd rM+k Bgjks Bgjko BM+ Bsyk Bkdqj Bqed Bqedk Bsdsnkj Bsdk Bsaxk Bgdk BkB BaM Bksdj BwaB Bkyk Bkuyh",
  },
  {
    id: 14,
    title: "Exercise 14",
    category: "Vyanjan - Dda/Ddha Varg (ड, ढ)",
    focusKeys: "M, <, M+, <+",
    focusHindi: "डॉक्टर डॉ डंडा डोर डगमगाना डाला डालना डर ...",
    description: "डॉक्टर डॉ डंडा डोर डगमगाना डाला डालना डर डंका डालें डाल डाका डाकू डंसना डांस डाली डपटने डेढ़ डामर डेरा डली डूबा डूबना डोले डब्बा डिब्बा डरते डालेगी डालकर डुलाते डीलडौल डक डीग डमरू डलिया डालिया डूंगरगढ़ डाक डाकघर ढक्कन ढंकना ढलान ढुलाई ढका ढकना ढले ढेर ढल ढाल ढो ढोंग ढोंगी ढोना ढोया ढेर ढेरिया ढंग ढूंढो ढील ढीली ढाई",
    content:
      "MkWDVj MkW MaMk Mksj Mxexkuk Mkyk Mkyuk Mj Madk Mkysa Mky Mkdk Mkdw Maluk Mkal Mkyh MiVus Ms<+ Mkej Msjk Myh Mwck Mwcuk Mksys MCck fMCck Mjrs Mkysxh Mkydj Mqykrs MhyMkSy Md Mhx Mejw Mfy;k Mkfy;k Mwaxjx<+ Mkd Mkd?kj <Dku <aduk <yku <qykbZ <dk <duk <ys <sj <y <ky <ks <ksax <ksaxh <ksuk <ks;k <sj <sfj;k <ax <wa<ks <hy <hyh <kbZ",
  },
  {
    id: 15,
    title: "Exercise 15",
    category: "Vyanjan - Ta Varg (त)",
    focusKeys: "r, R, Rk",
    focusHindi: "तो तीन तेज तुम्हारा तुम तुम्हारी तुम्हीं तांबा ...",
    description: "तो तीन तेज तुम्हारा तुम तुम्हारी तुम्हीं तांबा तारीख तलवार तंग तरल तुरंत तांगा ताली ताश तालीम तीव्र तरह तुमसे तोला तुम्हे तुमने तोड़ तुड़वाकर ताकत ताखर तान ताना तानी तानसेन ताम्र तैयारी तरीके तरीका ताजमहल तरफ तमाशा तक तेल तब तफसील तारपील तसवीर तपिश तनख्वाह तभी तांकना तहसीन ताकना ताबीज तार तुरंत तप तपस्या तू तेरा तेरे तदुरुस्त तट तनिक तसल्ली तेरे तूफान तीस तय ताबड़तोड़ तरसना ताव तर्क तरसा तड़का",
    content:
      "rks rhu rst rqEgkjk rqe rqEgkjh rqEgha rkack rkjh[k ryokj rax rjy rqjar rkaxk rkyh rk'k rkyhe rhOj rjg rqels rksyk rqEgs rqeus rksM+ rqM+okdj rkdr rk[kj rku rkuk rkuh rkulsu rkEj rS;kjh rjhds rjhdk rktegy rjQ rek'kk rd rsy rc rQlhy rkjihy rlohj rfi'k ru[okg rHkh rkaduk rglhu rkduk rkcht rkj rqjar ri riL;k rw rsjk rsjs rnqjqLr rV rfud rlYyh rsjs rwQku rhl r; rkcM+rksM+ rjluk rko rdZ rjlk rM+dk",
  },
  {
    id: 16,
    title: "Exercise 16",
    category: "Vyanjan - Da Varg (द)",
    focusKeys: "n, 4, |, }",
    focusHindi: "देगा देगी देना देन दी दादा दौड़ा दाद ...",
    description: "देगा देगी देना देन दी दादा दौड़ा दाद दोबारा दरवाजा दरी दुआ दलिया दस्तूर दस्ताना दामन दाग दरिया दाल दक्षिणा दामन दही देख दूसरी दया दूर दाहिना दाढ़ी देखना दुबला देश दो दाम दबाकर दबाना दबंग दशहरा दूने दंगा देवी देवता देहात देहाती दुकान दीवार देशी दवा देखकर दर्द दम्य दम दुकानदार दोपहर देर दिया दीपक दिल दयनीय दुःख दारू दस दो दोनों देह दुनिया देखमाल दावत दूध दुश्मन दाना दे दैत्य दैत्याकार",
    content:
      "nsxk nsxh nsuk nsu nh nknk nkSM+k nkn nksckjk njoktk njh nqvk nfy;k nLrwj nLrkuk nkeu nkx nfj;k nky n{fk.kk nkeu ngh ns[k nwljh n;k nwj nkfguk nk<+h ns[kuk nqcyk ns'k nks nke nckdj nckuk ncax n'kgjk nwus naxk nsoh nsork nsgkr nsgkrh nqdku nhokj ns'kh nok ns[kdj nnZ nE; ne nqdkunkj nksigj nsj fn;k nhid fny n;uh; nq%[k nkjw nl nks nksuksa nsg nqfu;k ns[keky nkor nw/k nq'eu nkuk ns nSR; nSR;kdkj",
  },
  {
    id: 17,
    title: "Exercise 17",
    category: "Vyanjan - Dha Varg (ध)",
    focusKeys: "/, /k",
    focusHindi: "धनुष धान धन धार धमकी धूम धुंधली धूल ...",
    description: "धनुष धान धन धार धमकी धूम धुंधली धूल धूप धोना धोकर धोखा धैर्य धीरज धनवन्तरी धनवान धीरे धीमे धीना धीमी धोती धसा धसे धमक धुन धक्का धंधा धुलाई धारण धड़ल्ले धरा धरती धौस धोरा धधकना धमनियां ध्वनि धुध धड़कन धड़क धनपत धनराज धर्म धार्मिक धारावाहिक धाराप्रवाह धरातल धोखाधड़ी धर्मवीर धर्मराज धर्मान्ध धर्मा",
    content:
      "/kuq\"k /kku /ku /kkj /kedh /kwe /kqa/kyh /kwy /kwi /kksuk /kksdj /kks[kk /kS;Z /khjt /kuoUrjh /kuoku /khjs /khes /khuk /kheh /kksrh /klk /kls /ked /kqu /kDkk /ka/kk /kqykbZ /kkj.k /kM+Yys /kjk /kjrh /kkSl /kksjk /k/kduk /kefu;ka /ofu /kq/k /kM+du /kM+d /kuir /kujkt /keZ /kkfeZd /kkjkokfgd /kkjkizokg /kjkry /kks[kk/kM+h /keZohj /keZjkt /kekZU/k /kekZ",
  },
  {
    id: 18,
    title: "Exercise 18",
    category: "Vyanjan - Na Varg (न)",
    focusKeys: "u, U, .k",
    focusHindi: "नल नया नयी नई नूतन नयन नाम नाक ...",
    description: "नल नया नयी नई नूतन नयन नाम नाक नासिका नाखून नाली नाला नशा नाड़ी नहीं न नाप नीली नीला नाटक नाती नीचे नौ नीचे नटनी नाराज नारी नबर नवम्बर नही नोट ने नगद नेता नए नायब नायक नकल नब्ज नम नम नजर नुकसान नौकर नौकरी नौकरानी नजराना नई नदारद नजदीक नाग नागिन नग्न नंगा नैसर्गिक नवीन नम्रता निलेश नरेश नाना नानी नहाना नहलाना नामि नाजुक",
    content:
      "uy u;k u;h ubZ uwru u;u uke ukd ukfldk uk[kwu ukyh ukyk u'kk ukM+h ugha u uki uhyh uhyk ukVd ukrh uhps ukS uhps uVuh ukjkt ukjh ucj uoEcj ugh uksV us uxn usrk u, uk;c uk;d udy uCt ue ue utj uqdlku ukSdj ukSdjh ukSdjkuh utjkuk ubZ unkjn utnhd ukx ukfxu uXu uaxk uSlfxZd uohu uEjrk fuys'k ujs'k ukuk ukuh ugkuk ugykuk ukfe uktqd",
  },
  {
    id: 19,
    title: "Exercise 19",
    category: "Vyanjan - Pa Varg (प)",
    focusKeys: "i, I, iz",
    focusHindi: "पतंग पत्ता पति पत्नी परमेश्वर परम पिता पात्र ...",
    description: "पतंग पत्ता पति पत्नी परमेश्वर परम पिता पात्र पहाड़ पर्वत पूजा पूजनीय पत्रिका पंप पता पाला पतझड़ पालक पुकार पर पीर पहले पैसा परदा पर्दा पूर्वज पड़ोसी पड़े परन्तु पाप पुण्य पहचान पुतला पढ़ना पढ़ाई परिचय पाना पास पैदल पजामा पतलून परिणाम पुराना पर पूछा पुड़िया पेड़ पट्टी परसों पुलिस पैगाम पैगम्बर पैंटर पीना पीया परीक्षा पूरब पश्चिम पंडित पेशा पदार्थ पंक्ति पीछे परेशान पकड़ पसीना पटवारी पुरस्कार पात्र पीठ पंखा पेट पीपल पक्का",
    content:
      "irax iRkk ifr iRuh ijes'oj ije firk ik= igkM+ ioZr iwtk iwtuh; if=dk iai irk ikyk ir>kM+ ikyd iqdkj ij ihj igys iSlk ijnk inkZ iwoZt iM+kslh iM+s ijUrq iki iq.; igpku iqryk i<+uk i<+kbZ ifjp; ikuk ikl iSny itkek irywu ifj.kke iqjkuk ij iwNk iqMf+;k isM+ iêh ijlksa iqfyl iSxke iSxEcj iSaVj ihuk ih;k ijh{kk iwjc i'fpe iafMr is'kk inkFkZ iaDfr ihNs ijs'kku idM+ ilhuk iVokjh iqjLdkj ik= ihB ia[kk isV ihiy iDkk",
  },
  {
    id: 20,
    title: "Exercise 20",
    category: "Vyanjan - Pha & Tha Varg (फ, थ)",
    focusKeys: "Q, F, Fk",
    focusHindi: "फल फैलाव फैल फैलाना फेंका फेंकना फाड़ा फर्स्ट ...",
    description: "फल फैलाव फैल फैलाना फेंका फेंकना फाड़ा फर्स्ट फटकार फ्री फ्रांस फेरी फाटक फौरन फ्रैंक फौरन फूट फाटक फालतू फुरसत फँसना फूलना फूल फूल फुहार फोकट फलॉन्ग फूटा फाँसी फुदका फटाफट फास्ट फौज फेर फुर्ति फटा फीका फेरे फसल फैसला फैन फैंसी फर्क फॉर्म फ्री फावड़ा था था। थे थे। थी थी। थे थोड़ा थोड़े थाली थापर थावर थन थपकी थपथपाना थम थमना थाप थैला थक थप्पड़ थाना थानेदार थरथरा थर–थर थैली थैली",
    content:
      "Qy QSyko QSy QSykuk Qsadk Qsaduk QkM+k QLVZ QVdkj ¶jh ¶jkal Qsjh QkVd QkSju ¶jSad QkSju QwV QkVd Qkyrw Qqjlr Q¡luk Qwyuk Qwy Qwy Qqgkj QksdV QykWUx QwVk Qk¡lh Qqndk QVkQV QkLV QkSt Qsj QqfrZ QVk Qhdk Qsjs Qly QSlyk QSu QSalh QdZ QkWeZ ¶jh QkoM+k Fkk FkkA Fks FksA Fkh FkhA Fks FkksM+k FkksM+s Fkkyh Fkkij Fkkoj Fku Fkidh FkiFkikuk Fke Fkeuk Fkki FkSyk Fkd FkIiM+ Fkkuk Fkkusnkj FkjFkjk Fkj-Fkj FkSyh FkSyh",
  },
  {
    id: 21,
    title: "Exercise 21",
    category: "Vyanjan - Ba Varg (ब)",
    focusKeys: "c, C, cz",
    focusHindi: "बकरी बनवारी बाबर बाहुबली बहार बाहर बांका बांसुरी ...",
    description: "बकरी बनवारी बाबर बाहुबली बहार बाहर बांका बांसुरी बेचैन बेमेल बेखबर बाबा बुआ बुआई बंजर बन बत्ती बस बांकुरे बबलू बाकी बास बाल बालक बालिका बाजार बेज बढती बजाय बनावट बेशक बनेगा बच्चा बेसुध बद बार–बार बात बंधा बोल बेटा बातें बराबर बंटे बीता बीच बड़ा बैठा बैठी बोला बाद बदला बदले बढ़कर बढ़ना बजाया बजे बाद बेचने बाबू बताते बेचने बनाने बीमार बटोरा बनाने बच बनवाते",
    content:
      "cdjh cuokjh ckcj ckgqcyh cgkj ckgj ckadk ckalqjh cspSu csesy cs[kcj ckck cqvk cqvkbZ catj cu cRkh cl ckadqjs ccyw ckdh ckl cky ckyd ckfydk cktkj cst c<rh ctk; cukoV cs'kd cusxk cPpk cslq/k cn ckj-ckj ckr ca/kk cksy csVk ckrsa cjkcj caVs chrk chp cM+k cSBk cSBh cksyk ckn cnyk cnys c<+dj c<+uk ctk;k cts ckn cspus ckcw crkrs cspus cukus chekj cVksjk cukus cp cuokrs",
  },
  {
    id: 22,
    title: "Exercise 22",
    category: "Vyanjan - Bha Varg (भ)",
    focusKeys: "H, Hk, Hkz",
    focusHindi: "भगवान भारत भयंकर भामाशाह भारतीय भरत भूमि भीतर ...",
    description: "भगवान भारत भयंकर भामाशाह भारतीय भरत भूमि भीतर भूल भूलकर भालू भान भानुमति भी भीड़ भेड़ भड़क भय भावना भयानक भाव भोर भज भजन भूमिका भूतल भूरा भला भलाई भारी भागा भागे भेजा भेजना भेजी भाषण भाई भाँप भाट भीतर भेजकर भरा भींचना भौंह भयभीत भुलावा भरोसा भरन भीख भिखारी भात भारकर भाला भेद भेदकर भांति भूचाल",
    content:
      "Hkxoku Hkkjr Hk;adj Hkkek'kkg Hkkjrh; Hkjr Hkwfe Hkhrj Hkwy Hkwydj Hkkyw Hkku Hkkuqefr Hkh HkhM+ HksM+ HkM+d Hk; Hkkouk Hk;kud Hkko Hkksj Hkt Hktu Hkwfedk Hkwry Hkwjk Hkyk HkykbZ Hkkjh Hkkxk Hkkxs Hkstk Hkstuk Hksth Hkk\"k.k HkkbZ Hkk¡i HkkV Hkhrj Hkstdj Hkjk Hkhapuk HkkSag Hk;Hkhr Hkqykok Hkjkslk Hkju Hkh[k fHk[kkjh Hkkr Hkkjdj Hkkyk Hksn Hksndj Hkkafr Hkwpky",
  },
  {
    id: 23,
    title: "Exercise 23",
    category: "Vyanjan - Ma Varg (म)",
    focusKeys: "e, E",
    focusHindi: "मछली मरा मरेगा मान मानहानि मन मुस्कान मुकदमा ...",
    description: "मछली मरा मरेगा मान मानहानि मन मुस्कान मुकदमा मील मीटन मीटर मिस्टर मैडम मेम मेमना मेला मैल मना माना मनाया मै मे मुँह मुसीबत माँग मर मुझे मुख्य मुसलमान मोर मेरा मेरे मानो माथा मूर्ति माता मा माँ मत मै मारा महीना मारपीट मनायी माने मनुहार मौसम मरीज मुखाग्नि गूसा मम्मी मामा मालूम मस्त मस्ती मैना मांडवी माया मगर मास्टर मीरा माला मास",
    content:
      "eNyh ejk ejsxk eku ekugkfu eu eqLdku eqdnek ehy ehVu ehVj feLVj eSMe ese eseuk esyk eSy euk ekuk euk;k eS es eq¡g eqlhcr ek¡x ej eq>ks eq[; eqlyeku eksj esjk esjs ekuks ekFkk ewfrZ ekrk ek ek¡ er eS ekjk eghuk ekjihV euk;h ekus euqgkj ekSle ejht eq[kkXfu xwlk eEeh ekek ekywe eLr eLrh eSuk ekaMoh ek;k exj ekLVj ehjk ekyk ekl",
  },
  {
    id: 24,
    title: "Exercise 24",
    category: "Vyanjan - Ya Varg (य)",
    focusKeys: ";, ;K",
    focusHindi: "यज्ञ यह यहाँ ये यही यार यम यमराज ...",
    description: "यज्ञ यह यहाँ ये यही यार यम यमराज योग्य यंत्र यदि यह या यानी यदु यादव यदा–यदा यूँ यद्यपि याद यादें यादगार यलगार यशवंत यशोदा यशोधरा योगेश यात्रा यहूदी यकीन यकीनन यादृच्छिक युद्ध ये यह युधिष्ठिर यशपाल योगदान यथार्थ यथा यमदूत यों यश युग युगान्त युवा युवाम यूनिवर्सिटी यूरोप युक्ति योजना",
    content:
      ";K ;g ;gk¡ ;s ;gh ;kj ;e ;ejkt ;ksX; ;a= ;fn ;g ;k ;kuh ;nq ;kno ;nk-;nk ;w¡ ;|fi ;kn ;knsa ;knxkj ;yxkj ;'koar ;'kksnk ;'kks/kjk ;ksxs'k ;k=k ;gwnh ;dhu ;dhuu ;kn`PfNd ;q4 ;s ;g ;qf/k\"fBj ;'kiky ;ksxnku ;FkkFkZ ;Fkk ;enwr ;ksa ;'k ;qx ;qxkUr ;qok ;qoke ;wfuoflZVh ;wjksi ;qDfr ;kstuk",
  },
  {
    id: 25,
    title: "Exercise 25",
    category: "Vyanjan - Ra Varg (र)",
    focusKeys: "j, Z, :",
    focusHindi: "रथ राजकुमार राजेश राजा रात्रि रात राम रामेश्वरम ...",
    description: "रथ राजकुमार राजेश राजा रात्रि रात राम रामेश्वरम राधा रंग रंगीला रास रहा रहे रही रहूँगा रह रही रहा रक्त रंजित रणभूमि रेखा रखना रखे रखी रोष रेखा रेखांकन रसोई रहेगा रहेगी रहेंगे रोजगारी रोजगार रोका रोगन रोग रत्ती रखवाई रजिस्ट्री रस रोटी रेलवे रेल राल राष्ट्र राष्ट्रकूट रखा राजी रोज रोना रोजा रैता राशन रास्ता राय रईस रमणीय रखते रहस्य रहम रहनुमा राख रौदा रखाई रजाई राज राष्ट्रीय रपट रिपोर्ट रवाना रवानगी रहूँ रेशम",
    content:
      "jFk jktdqekj jkts'k jktk jkf= jkr jke jkes'oje jk/kk jax jaxhyk jkl jgk jgs jgh jgw¡xk jg jgh jgk jDr jaftr j.kHkwfe js[kk j[kuk j[ks j[kh jks\"k js[kk js[kkadu jlksbZ jgsxk jgsxh jgsaxs jkstxkjh jkstxkj jksdk jksxu jksx jRkh j[kokbZ jftLVªh jl jksVh jsyos jsy jky jk\"Vj jk\"VjdwV j[kk jkth jkst jksuk jkstk jSrk jk'ku jkLrk jk; jbZl je.kh; j[krs jgL; jge jguqek jk[k jkSnk j[kkbZ jtkbZ jkt jk\"Vjh; jiV fjiksVZ jokuk jokuxh jgw¡ js'ke",
  },
  {
    id: 26,
    title: "Exercise 26",
    category: "Vyanjan - La Varg (ल)",
    focusKeys: "y, Y",
    focusHindi: "लट्टू लड्डू लाडला लाडो लंका लाया लंकेश्वर लाकर ...",
    description: "लट्टू लड्डू लाडला लाडो लंका लाया लंकेश्वर लाकर लॉक लीक लकीर लगन लक्षण लक्ष्मण लूला लंगड़ा लाग लपट लपेट लपेटा लश्कर लदा लद लाल लालिमा लेकर लिया लेन लैम्प लेस ला लेलूँ लोग लगे लगा लटका लाचार ले लड़की लटकाया लौटा लौटेगा लेलो लगी लेना लगाया लग लेती लेता लड़ाई ललकार लड़कपन लगाने लवण लाइन लेबल लू लेकिन लोटा लक्ष्मी लपका लादी लगेगी लगभग ली",
    content:
      "yêw yìw ykMyk ykMks yadk yk;k yads'oj ykdj ykWd yhd ydhj yxu y{k.k y{ke.k ywyk yaxM+k ykx yiV yisV yisVk y'dj ynk yn yky ykfyek ysdj fy;k ysu ySEi ysl yk ysyw¡ yksx yxs yxk yVdk ykpkj ys yM+dh yVdk;k ykSVk ykSVsxk ysyks yxh ysuk yxk;k yx ysrh ysrk yM+kbZ yydkj yM+diu yxkus yo.k ykbu yscy yw ysfdu yksVk y{keh yidk yknh yxsxh yxHkx yh",
  },
  {
    id: 27,
    title: "Exercise 27",
    category: "Vyanjan - Va Varg (व)",
    focusKeys: "o, O",
    focusHindi: "वन वकील वास्तव वास्तविक वहाँ वहाँ वैसे वे ...",
    description: "वन वकील वास्तव वास्तविक वहाँ वहाँ वैसे वे वह वाह–वाही वस्त्र वापस वाला वाली वेशभूषा वर्ष वरुण वर्णमाला वाले वही वही वालो वसूल वैद्य व्यर्थ वीरान वर्दी वीर वीरता विश्व विकार विमर्श विचार वैचारिक व्यवहार व्यावहारिक वासना वास्तु वस्तु विक्रय विक्रेता विधि विधान वीण वक्त वक्ता व्यक्तव्य व्यवस्था व्याधि व्याकुल वंदना वंदेमातरम् वाकई वाकया वाक्य वाचनालय वाचन",
    content:
      "ou odhy okLro okLrfod ogk¡ ogk¡ oSls os og okg-okgh oL= okil okyk okyh os'kHkw\"kk o\"kZ ojq.k o.kZekyk okys ogh ogh okyks olwy oS| O;FkZ ohjku onhZ ohj ohjrk fo'o fodkj foe'kZ fopkj oSpkfjd O;ogkj O;kogkfjd okluk okLrq oLrq foØ; foØsrk fof/k fo/kku oh.k oDr oDrk O;DrO; O;oLFkk O;kf/k O;kdqy oanuk oansekrjE okdbZ okd;k okD; okpuky; okpu",
  },
  {
    id: 28,
    title: "Exercise 28",
    category: "Vyanjan - Sha Varg (श)",
    focusKeys: "'k, ', J",
    focusHindi: "शंकर शंका शोक शालीमार शाश्वत शर्मा शर्मिला शरीर ...",
    description: "शंकर शंका शोक शालीमार शाश्वत शर्मा शर्मिला शरीर शरीफ शर्म शायद शेष शहर शान शोर शोरगुल शांत शुरु शुद्ध शुरुआत शामिल शैलेश शाही शाह शहजादा शहीद शहादत शान्तनु शान्ति शान्तित्रिय शराब शीशी शिशु शेड शक्कर शल्य शल्यक्रिया शशांक शरम शागिर्द शारीर शास्त्री शहरी शादी शून्य शक्ति शब्द शब्दश शब्दों शाब्दिक शीत शीतल शैतान शैतानी शह शीशम शुरू शर्त शामिल शौक शौचालय शौच",
    content:
      "'kadj 'kadk 'kksd 'kkyhekj 'kk'or 'kekZ 'kfeZyk 'kjhj 'kjhQ 'keZ 'kk;n 'ks\"k 'kgj 'kku 'kksj 'kksjxqy 'kkar 'kqjq 'kq4 'kqjqvkr 'kkfey 'kSys'k 'kkgh 'kkg 'kgtknk 'kghn 'kgknr 'kkUruq 'kkUfr 'kkUfrf=; 'kjkc 'kh'kh f'k'kq 'ksM 'kDkj 'kY; 'kY;fØ;k 'k'kkad 'kje 'kkfxnZ 'kkjhj 'kkL=h 'kgjh 'kknh 'kwU; 'kDfr 'kCn 'kCn'k 'kCnksa 'kkCfnd 'khr 'khry 'kSrku 'kSrkuh 'kg 'kh'ke 'kqjw 'krZ 'kkfey 'kkSd 'kkSpky; 'kkSp",
  },
  {
    id: 29,
    title: "Exercise 29",
    category: "Vyanjan - Sa Varg (स)",
    focusKeys: "l, L",
    focusHindi: "सर्प सांप साँप सपोला साहस साग सब्जी सुंदर ...",
    description: "सर्प सांप साँप सपोला साहस साग सब्जी सुंदर सुन्दर साहिल से संग सा सी से सुन सका सकेगा सकी से सामने साथ सहसा समतल सामर्थ्य स्मरण सहसा साँचे सच्चा सच सच्ची सच्चाई सत्य सत्यवादी सत्यवान संबंध सहारा स्पष्ट संबोधन सब सभी सरल सफेद सम्मिश्रण सारा सारे सबसे सबका सबकी सबके सावित्री साता सोचना सोचा साहब सप्ताह संख्या संस्कार सरकार सरकारी संयोग सजावट साला साली साथ सीधी सीरा सुना स्वयं सीधा सत्कार सारका सीधी संगल स्वीकृति",
    content:
      "liZ lkai lk¡i liksyk lkgl lkx lCth lqanj lqUnj lkfgy ls lax lk lh ls lqu ldk ldsxk ldh ls lkeus lkFk lglk lery lkeF;Z Lej.k lglk lk¡ps lPpk lp lPph lPpkbZ lR; lR;oknh lR;oku laca/k lgkjk Li\"V lacks/ku lc lHkh ljy lQsn lEfeJ.k lkjk lkjs lcls lcdk lcdh lcds lkfo=h lkrk lkspuk lkspk lkgc lIrkg la[;k laLdkj ljdkj ljdkjh la;ksx ltkoV lkyk lkyh lkFk lh/kh lhjk lquk Lo;a lh/kk lRdkj lkjdk lh/kh laxy Lohd`fr",
  },
  {
    id: 30,
    title: "Exercise 30",
    category: "Vyanjan - Ha Varg (ह)",
    focusKeys: "g, º, G",
    focusHindi: "हल ही हम हाथ होना होने हुआ हुई ...",
    description: "हल ही हम हाथ होना होने हुआ हुई हो हटना हट हटे हटा होश होती होता होते हैं है हमारा हमारी हमारे हुआ होकर हमेशा हेलमेट हलवा हींग हालचाल हवा हवाई हुस्न हुँकार हमको हसी हंसाया हंसना होली हीरा हँसी हताश हस्त हाथी हांडी हलवाई हर हरी हरियाणा हकीम होगी होंगे हजार हकलाया हाजिर हाजिरी हस्ती होगा हैरानी हरामी हराम हैरान होश हाँ हा होशियार हालत हालात हल्दी हल्दीघाटी हल्द्वानी हल्का हल्की हिलौरे हिला हक हफ्ता हाल हरकत हकीकत हिसाब हिसाब हिजाब हत्या हरगिज",
    content:
      "gy gh ge gkFk gksuk gksus gqvk gqbZ gks gVuk gV gVs gVk gks'k gksrh gksrk gksrs gSa gS gekjk gekjh gekjs gqvk gksdj ges'kk gsyesV gyok ghax gkypky gok gokbZ gqLu gq¡dkj gedks glh galk;k galuk gksyh ghjk g¡lh grk'k gLr gkFkh gkaMh gyokbZ gj gjh gfj;k.kk gdhe gksxh gksaxs gtkj gdyk;k gkftj gkftjh gLrh gksxk gSjkuh gjkeh gjke gSjku gks'k gk¡ gk gksf'k;kj gkyr gkykr gYnh gYnh?kkVh gY}kuh gYdk gYdh fgykSjs fgyk gd g¶rk gky gjdr gdhdr fglkc fglkc fgtkc gR;k gjfxt",
  },
  {
    id: 31,
    title: "Exercise 31",
    category: "Sanyukt Vyanjan (संयुक्त व्यंजन - क्ष, त्र, ज्ञ, श्र, ष)",
    focusKeys: "{k, =, K, J, \"k",
    focusHindi: "षट्कोण षड्यंत्र क्षण क्षुब्ध क्षोभ क्षमा क्षेत्र क्षत्रिय ...",
    description: "षट्कोण षड्यंत्र क्षण क्षुब्ध क्षोभ क्षमा क्षेत्र क्षत्रिय क्षति–पूर्ति क्षय त्रास त्रासदी त्राहि त्रिशूल त्रिदेव त्रिमूर्ति त्रिनेत्र त्रिवेन्द्रम त्रिवेदी त्रिवेणी त्रिकोणमिति त्रस्त त्रिकोण त्रिकाल ज्ञानी ज्ञान ज्ञाता ज्ञापन ज्ञापित",
    content:
      "\"kV~dks.k \"kM~;a= {k.k {kqC/k {kksHk {kek {ks= {kf=; {kfr-iwfrZ {k; =kl =klnh =kfg f='kwy f=nso f=ewfrZ f=us= f=osUnze f=osnh f=os.kh f=dks.kfefr =Lr f=dks.k f=dky Kkuh Kku Kkrk Kkiu Kkfir",
  }
];

// Type Paragraphs Exercises - Full passage typing tests
export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [
  {
    id: 1,
    title: 'Paragraph 1',
    category: 'Indian Heritage & Unity',
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi:
      'भारत विविधताओं का देश है। यहाँ विभिन्न संस्कृतियों और भाषाओं का संगम देखने को मिलता है। हमारे देश का इतिहास बहुत गौरवशाली रहा है। भारत के लोगों में एकता और भाईचारे की भावना हमेशा से रही है। यहाँ के प्राकृतिक दृश्य और ऐतिहासिक स्मारक पूरे विश्व में प्रसिद्ध हैं। हमें अपने देश पर गर्व होना चाहिए।',
    description: 'Authentic Hindi typing passage on Indian diversity and heritage',
    content:
      'Hkkjr fofo/krkvksa dk ns\'k gSA ;gk¡ fofHkUu laLd`fr;ksa vkSj Hkk"kkvksa dk laxe ns[kus dks feyrk gSA gekjs ns\'k dk bfrgkl cgqr xkSjo\'kkyh jgk gSA Hkkjr ds yksxksa esa ,drk vkSj HkkbZpkjs dh Hkkouk ges\'kk ls jgh gSA ;gk¡ ds izkd`frd n`\'; vkSj ,sfrgkfld Lekjd iwjs fo\'o esa izfl) gSaA gesa vius ns\'k ij xoZ gksuk pkfg,A',
  },
  {
    id: 2,
    title: 'Paragraph 2',
    category: 'Science & Digital India',
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi:
      'विज्ञान और प्रौद्योगिकी के क्षेत्र में भारत ने उल्लेखनीय प्रगति की है। अंतरिक्ष अनुसंधान से लेकर सूचना प्रौद्योगिकी तक हमारे वैज्ञानिकों ने विश्व में अपना लोहा मनवाया है। डिजिटल भारत अभियान ने लोगों के जीवन को सरल बना दिया है।',
    description: 'Passage focusing on science, digital technology and progress',
    content:
      'foKku vkSj izkS|ksfxdh ds {ks= esa Hkkjr us mYys[kuh; izxfr dh gSA varfj{k vuqla/kku ls ysdj lwpuk izkS|ksfxdh rd gekjs oSKkfudksa us fo\'o esa viuk yksgk euk;k gSA fMftVy Hkkjr vfHk;ku us yksxksa ds thou dks ljy cuk fn;k gSA',
  },
  {
    id: 3,
    title: 'Paragraph 3',
    category: 'Education & Society',
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi:
      'शिक्षा प्रत्येक व्यक्ति के जीवन का सबसे महत्वपूर्ण स्तम्भ है। इससे न केवल ज्ञान का प्रसार होता है बल्कि व्यक्तित्व का सर्वांगीण विकास भी होता है। एक शिक्षित समाज ही देश को उन्नति के मार्ग पर ले जा सकता है।',
    description: 'Passage focusing on education, character building and society',
    content:
      'f\'k{kk izR;sd O;fDr ds thou dk lcls egRoiw.kZ LrEHk gSA blls u dsoy Kku dk izlkj gksrk gS cfYd O;fDrRo dk lokZaXkh.k fodkl Hkh gksrk gSA ,d f\'kf{kr lekt gh ns\'k dks mUufr ds ekxZ ij ys tk ldrk gSA',
  },
  {
    id: 4,
    title: 'Paragraph 4',
    category: 'Environment Conservation',
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi:
      'पर्यावरण संरक्षण आज के समय की सबसे बड़ी आवश्यकता बन गई है। वृक्षारोपण करना और प्रदूषण को रोकना हम सभी का कर्तव्य है। प्रकृति का संतुलन बनाए रखना मानव जीवन के अस्तित्व के लिए अति आवश्यक है।',
    description: 'Passage focusing on environment protection and tree plantation',
    content:
      'i;kZoj.k laj{k.k vkt ds le; dh lcls cM+h vko\'drk cu xbZ gSA o`{kkjksi.k djuk vkSj iznw"k.k dks jksduk ge lHkh dk drZO; gSA izd`fr dk larqyu cuk, j[kuk ekuo thou ds vfLrRo ds fy, vfr vko\'drk gSA',
  },
  {
    id: 5,
    title: 'Paragraph 5',
    category: 'Discipline & Success',
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi:
      'अनुशासन और समय पालन सफलता की दो सबसे मजबूत कुंजियाँ हैं। परिश्रम का कोई विकल्प नहीं होता। जो व्यक्ति समय की कद्र करता है समय भी उसकी कद्र करता है और उसे उच्च शिखर पर पहुंचाना सुनिश्चित करता है।',
    description: 'Passage focusing on time management and discipline',
    content:
      'vuq\'kklu vkSj le; ikyu lQyrk dh nks lcls etcwr dqaft;ka gSaA ifjJe dk dksbZ fodYi ugha gksrkA tks O;fDr le; dh dnz djrk gS le; Hkh mldh dnz djrk gS vkSj mls mPp f\'k[kj ij igqapkuk lqfuf\'pr djrk gSA',
  },
];

