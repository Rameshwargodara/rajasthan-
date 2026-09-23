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
      "'''' kkkk '''' '''' 'k'k'k'k 'k'k'k'k 'k'k dsds dsds dsds lsls lsls ;s;s ;s;s dsds dsds dsds gsgs jsjs jsjs ds dks gs gks ls lks 'ks 'kks ds dks gs gks ls lks ;s ;ks 'ks 'kks 'ks'ks 'ks'ks 'ksj 'ksj 'ksj 'kksj 'kksj dksj dksl gks'k lksj dksj dksjk dksjh dksl 'ksj 'kd dk'k ;'k jk'kh jk'kh dk'kh dk'kh 'kgj 'kgj 'kkd 'kkd 'kksd dkslh jks 'kh'kk",
  },
  {
    id: 7,
    title: 'Exercise 7',
    category: 'Home Row Anusvara (a=ं)',
    focusKeys: 'a d g s k j f l ;',
    focusHindi: 'ं क ह े ा र ि स य',
    description: 'ककंकंक हंहहंहं कंकंकक हंहहंहं के के कें हें कंकर शंकर हंस कंस ...',
    content:
      "ddaddad gaggaga dadadd gaggaga ds ds dsa gsa dadj 'kadj gal dal jad jkadk fgalk dkalk gka gka ;gka lk;a dadadad flag ;gha ;gha dgha dgha dgha dsl dgka dgsa dgka galh dadadd gaggga dadadada gaggga ds ds ds gsa dadj 'kad gal dal jad jkadk fgalk dkalk gka gka ;gka lk;a dadadad flag ;gha ;gha dgha dgha dgha dsl dgka dgsa dgka galh",
  },
  {
    id: 8,
    title: 'Exercise 8',
    category: 'Home Row Comprehensive Drill',
    focusKeys: "d l j g ; f ' k s h",
    focusHindi: 'कस सर हर कर यह किस सिर शीश राह हीरा सारा ...',
    description: 'कस सर हर कर यह किस सिर शीश राह हीरा सारा कार काश काक ...',
    content:
      "dl lj gj dj ;g fdl flj 'kh'k jkg ghjk lkjk dkj dk'k dkd gkl gkj ghj ghjk ;kj jkg dkgh dksjk gks'k lkjh fjgk jkgh lkjh lgh dgh 'kdj lksgj f'kdkj f'kdkjh dfgl dfg;s jfg;s jksfd;s lgk; lkfj dk lgkjk dgk",
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
      "dSdSdSdS dSdSdSdS gSgSgSgS gSgSgSgS lSlSlSls gsgS dsdS gsgS lslS ;s;S 'ks'kS dsdsdSdS dSdSdSdS dSdSdSdS gSgSgSgS lSlSlSlS ;S;S;S;S dsdsdsds dSdSdSdS gSgSgSgS 'kS'kS'kS'kS dsdsdsds dSdSdSdS gSgSgSgS lSlSlSls gsgS dsdS gsgS lslS ;s;S 'ks'kS dsdsdSdS dSdSdSdS dSdSdSdS gSgSgSgS lSlSlSlS ;S;S;S;S 'kS'kS'kS'kS dSls gS lSj 'k'kkad dSj 'k\"k 'k\"k \"k'k \"k'k 'ks\"k 'ks\"k Hks\"k ds'k Hkk\"kk \"kS \"kS 'kS 'ks\"kS 'ks\"kS \"ks'kS \"ks'kS",
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
      "dHkh 'ksj Hkh gkjk FkkA lgh ds lkFk lgh dgka gks jgk gSA 'ks\"k 'kkld dal ls dSls gkjs FksA :l ds lkFk gks jgk gSA gjsd ds lkFk Hkh lgk gSA js'ks ls gkgkdkj gks ldsA Hkh Fkh dS : fG Js; jFk ;Fkk dFkk dks\" gkFk Kkl Fkkg Fkk: ;K :l dkL; Hkk\"; gkL; L;kg 'kL; jLlh Jhlj Ddk Ddh gDdk gfFk;k fdLlk L;kgh fdLls :fd;s Hkfj;s Hkksjgs Js;l Kkld dGsh dGs'kh dGsg fdlds dj HkjA",
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
      "dqdqdqdq dqdqdqdq lqlqlqlq ;q;q;q;q dwdwdwdw dwdwdwdw lwlwlwlw ;w;w;w;w dqdw lqlw ;q;w 'kq'kw 'kq'kq'kq'kq 'kw'kw'kw'kw dwdwdwd dqdqdqdq dqdqdqdq dqdqdqdq lqlqlqlq ;q;q;q;q dwdwdwdw dwdwdwdw lwlwlwlw ;w;w;w;w dqdw lqlw ;q;w 'kq'kw 'kq'kq'kq'kq 'kw'kw'kw'kw dwdwdwdw dqdqdqdq dq'k 'kq\"d gwj ;w ;w 'kwj lqj lqj 'kwj Fkwd 'kqd 'kq: Hkw Hkw Hkw 'kqHk lqFkjk gqDdk gd gdwd dwdj 'kqHk lqJh dq'k jklqdk",
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
      "dddd eeee ddd eee de de de ed ed ed ffff rrrr ffff rrrr frfrfrfr frfrfrfr gggg tttt gggg tttt gtgt gtgt tgtg tgtg frfrfrfr gtgtgtgt dededede eeee rrrr tttt eeee rrrr tttt eeee rrrr tttt eeee rrrr tttt ert ert ert ert tre tre te et re re er er re er er tr tr rt rt et te te re efr frfej edj rkjd rkjk rkfjdk rkd djrk djrh tgka tete ets etk tke tkfr tkrd gLrh gSfl;r fl;klr fl;klh dkt dkth tkdj gkjadj twrk eqdj ewd rqDdk jktw tksdj tks'k thr fefr eqag ge gktfj",
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
      "gggg yyyy gggg yyyy gygy gygy gygy ygyg ygyg ygyg gtgy gtgy ty ty yt ty yt yt gty gyt gty gytg gggg yyyy yw dkyw tkyh dyh Hkyk ykHk Hkkyw yadk yadks'k yky yksdykt dfj'ek 'kkyw",
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
      "'''' [[[[ ''[[ [['' ''[[ [['' 'k[k [k'k 'k[k [k[k[k[k 'k'k'k'k 'k'k[k[k [k[k'k'k 'ka[k [kpk[kp p[k j[k [kjh [khj [kqyk [ksy [kSj [kSfj;r [kq'k 'kk[k [kkl [kku u[kjk [kkyh [kqys [kksyk '''' ]]]] ']']'] [][][][] ]]]] [[[[ [k] ]]]] [[[[ ]]]] '[] '[] ']'] '['[ ['[' ']'] ']'] ]]]] '''' [[[[ [k]'k] 'k][k] lq[kk] gqDdk] [kwu] [kks[kyk] 'kk[k] 'kq[kk]",
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
    category: 'Half Ja & Half La Keys (ज्=T, ल्=Y, भला, भल्लाल, कुल्ला, खुल्ला, कल्ला)',
    focusKeys: 't T y Y g H k d q [ p s',
    focusHindi: 'ज ज् ल ल् ह भ ा क ु ख् च े',
    description:
      'जजजजज TTTT TtTt ttTT TTTT TTTT Ttoy yyyy YYYY लललल YyYyYy yY YYYY yyyy लललल हहहह लललल हहहह YYYY हहहह YYYY लललल  YYYY लललल  YYYY लललल भला भल्लाल कुल्ला खुल्ला कल्ला कुल्चे चुल्हा जजजज TTTT जजजजज TTTT TtTt ttTT TTTT TTTT Ttoy yyyy YYYY लललल YyYyYy yY YYYY yyyy लललल हहहह लललल हहहह YYYY हहहह YYYY लललल  YYYY लललल  YYYY लललल भला भल्लाल कुल्ला खुल्ला कल्ला कुल्चे चुल्हा जजजज TTTT',
    content:
      'ttttt TTTT TtTt ttTT TTTT TTTT Ttoy yyyy YYYY yyyy YyYyYy yY YYYY yyyy yyyy gggg yyyy gggg YYYY gggg YYYY yyyy YYYY yyyy YYYY yyyy Hkkyk HkYyky dqYyk [kqYyk dYyk dqYps pqYgk tttt TTTT ttttt TTTT TtTt ttTT TTTT TTTT Ttoy yyyy YYYY yyyy YyYyYy yY YYYY yyyy yyyy gggg yyyy gggg YYYY gggg YYYY yyyy YYYY yyyy YYYY yyyy Hkkyk HkYyky dqYyk [kqYyk dYyk dqYps pqYgk tttt TTTT',
  },
  {
    id: 26,
    title: 'Exercise 26',
    category: 'Half Na & Half Pa Keys (न्=U, प्=I, कान्हा, तन्हा, मुन्ना, जन्म, पाप्पा)',
    focusKeys: 'u U d k g r e a l f t i I p q S h',
    focusHindi: 'न न् क ा ह त म ं स ि ज प प् च ु ै ी',
    description:
      'uननन UUUU नननन UUUU uUuU UUUU uU uU Uu Uu कान्हा तन्हा मुUuk मुUuh जन्म कान्स जन्म जन्मांतर सन्तरा किUuw जिUuk मUuq पपपप IIII पपपप IIII पपपप IIII IiIi IiIi पाप्प पप्पा कनप्पा समाप्त सुप्त हैप्पी',
    content:
      'uuuu UUUU uuuu UUUU uUuU UUUU uU uU Uu Uu dkUgk rUgk eqUuk eqUuh tUe dkUl tUe tUekarj lUrjk fdUuw ftUuk eUuq iiii IIII iiii IIII iiii IIII IiIi IiIi ikIi iIik duiIk lekIr lqIr gSIih',
  },
  {
    id: 27,
    title: 'Exercise 27',
    category: 'Half Va & Half Cha Keys (व्=O, च्=P, कव्वाली, ज्वार, कच्चा, वाच्य, सच्चा)',
    focusKeys: 'o O l d k y e u T g V p P ; t h',
    focusHindi: 'व व् स क ा ल म न ज् ह ट च च् य ज ी',
    description:
      'वववव OOOO वववव OOOO ववOO OO oo वव सव सव सOO OO ooOO OoOoOoOo कव्वाली व्वल वाल मनोव्वल ज्वार व्हाट चचचच PPPP चचचच PPPP चचचच PPPP चचच्च चचPP PPpp चच्चP यच्यच यच्यच चच्चा कच्चा वाच्य च्यवन सच्चा जच्चा वचन सच्ची हच्चा वववव OOOO वववव OOOO ववOO OO oo वव सव सव सOO OO ooOO OoOoOoOo कव्वाली व्वल वाल मनोव्वल ज्वार व्हाट चचचच PPPP चचचच PPPP चचचच PPPP चचच्च चचPP PPpp चच्चP यच्यच यच्यच चच्चा कच्चा वाच्य च्यवन सच्चा जच्चा वचन सच्ची हच्चा',
    content:
      'oooo OOOO oooo OOOO ooOO OO oo oo lo lo lOO OO ooOO OoOoOoOo dOokyh Ooy oky euksOoy Tokj OgkV pppp PPPP pppp PPPP pppp PPPP ppPp ppPP PPpp ppPpP ;P;p ;P;p pPpk dPpk okP; P;ou lPpk tPpk opu lPph gPpk oooo OOOO oooo OOOO ooOO OO oo oo lo lo lOO OO ooOO OoOoOoOo dOokyh Ooy oky euksOoy Tokj OgkV pppp PPPP pppp PPPP pppp PPPP ppPp ppPP PPpp ppPpP ;P;p ;P;p pPpk dPpk okP; P;ou lPpk tPpk opu lPph gPpk',
  },
  {
    id: 28,
    title: 'Exercise 28',
    category: 'Kha, Half Ksha & Dv Keys (ख=[, क्ष्={, द्व=}, रक्षा, क्षमा, द्वार, द्वीप)',
    focusKeys: "[ { ' k j d H e E r s f p q ] } i \" t S",
    focusHindi: 'ख् क्ष् श ा र क भ म म् त े ि च ु , द्व प ष् ज ै',
    description:
      "[[[[ {{{{ [[[[ {{{{ [[[[ {{{{ [{[{[{ '{'{'{ क्षक्षक्षक्ष क्षखक्षख क्षखखक्ष क्षक्षखक्ष क्षक्षक्षक्ष क्षखक्षख क्षखखक्ष क्षक्षखक्ष क्षीर क्षार रक्षा रक्षक भक्षक क्षमा क्षम्य क्षमता क्षेक्षेक्षे शिक्षा साक्षर शिक्षित चक्षु परीक्षा भिक्षा ]]]] }}}} ]]]] }}}} ]]]] }}}} ]]}} }}]] }}}} '''' }}}} द्वार द्वार द्वन्द्व द्वापर द्वीप द्वारिका महाद्वीप द्वितीय द्वेष द्विज द्वैत द्विपक्षीय द्विभुज",
    content:
      "[[[[ {{{{ [[[[ {{{{ [[[[ {{{{ [{[{[{ '{'{'{ {k{k{k{k {k[k{k[k {k[k[k{k {k{k[k{k {k{k{k{k {k[k{k[k {k[k[k{k {k{k[k{k {khj {kkj j{kk j{kd Hk{kd {kek {kE; {kerk {ks{ks{ks f'k{kk lk{kj f'kf{kr p{kq ijh{kk fHk{kk ]]]] }}}} ]]]] }}}} ]]]] }}}} ]]}} }}]] }}}} '''' }}}} }kj }kj }U} }kij }hi }kfjdk egk}hi f}rh; }s\"k f}t }Sr f}i{kh; f}Hkqt",
  },
  {
    id: 29,
    title: 'Exercise 29',
    category: 'D-ya Key (द्य=|, विद्यालय, विद्या, द्योतक, पद्य, गद्य, पद्यांश)',
    focusKeys: "\\ | ? ' k f o y ; s r d i x a e l q E",
    focusHindi: 'द्य श ा ि व ल य े त क प ग ं म स ु म्',
    description:
      "???? द्यद्यद्यद्य ?? द्यद्यद्यद्य ?? द्यद्यद्यद्य ||\\\\ |\\|\\|\\ \\|| ||\\ \\|| ||\\ 'k| 'k| द्यद्यद्यद्य द्यद्यद्यद्य fo|ky; fo|k द्योतक पद्य द्यद्यद्यद्य गद्य पद्यांश गद्यांश विद्यमान l|qEu |qfr ???? द्यद्यद्यद्य ?? द्यद्यद्यद्य ?? द्यद्यद्यद्य ||\\\\ |\\|\\|\\ \\|| ||\\ \\|| ||\\ 'k| 'k| द्यद्यद्यद्य द्यद्यद्यद्य fo|ky; fo|k द्योतक पद्य द्यद्यद्यद्य गद्य पद्यांश गद्यांश विद्यमान l|qEu |qfr",
    content:
      "???? |||| ?? |||| ?? |||| ||\\\\ |\\|\\|\\ \\|| ||\\ \\|| ||\\ 'k| 'k| |||| |||| fo|ky; fo|k |ksrd i| |||| x| i|ka'k x|ka'k fo|eku l|qEu |qfr ???? |||| ?? |||| ?? |||| ||\\\\ |\\|\\|\\ \\|| ||\\ \\|| ||\\ 'k| 'k| |||| |||| fo|ky; fo|k |ksrd i| |||| x| i|ka'k x|ka'k fo|eku l|qEu |qfr",
  },
  {
    id: 30,
    title: 'Exercise 30',
    category: 'Comprehensive Matras & Speed Drill (क से कौ, कंकं, राम, सुश्री, द्वितीय)',
    focusKeys: "d k f h q w s S o a g j l ; ' \" F H : Q e R T y u i",
    focusHindi: 'क ा ि ी ु ू े ै ो ं ह र स य श ष् थ भ रू फ म त् ज् ल न प',
    description:
      'कक काका किकि कीकी कुकु कूकू केके कैकै कोको कौकौ कंकं ही राम सात सरल यहां शाम पुष्प हक्का था भाभी सुश्री रस्सा जस्सी रूस रूह फुल फूफा फॉल मम्मी तांत्या राज्य जाज्य लल्ला जननी जन्म पाश जाप्ता कव्वाली कवि चच्चा जांच खाम क्षमा द्वितीय द्वद्वद्व ?? ?? द्यद्य द्यद्य कक्का भस्म हिंसा कभी सभी यम शक शशांक पुष्कर पुष्प ज्ञात विज्ञाu',
    content:
      "dd dkdk fdfd dhdh dqdq dwdw dsds dSdS dksdks dkSdkS dada gh jke lkr ljy ;gka 'kke iq\"i gDdk Fkk HkkHkh lqJh jLlk tLlh :l :g Qqy QwQk QkWy eEeh rkaR;k jkT; tkT; yYyk tuuh tUe ik'k tkIrk dOokyh dfo pPpk tkap [kke {kek f}rh; }}} ?? ?? || || dDdk HkLe fgalk dHkh lHkh ;e 'kd 'k'kkad iq\"dj iq\"i Kkr foKku",
  },
  {
    id: 31,
    title: 'Exercise 31',
    category: 'Advanced Compound & Conjunct Words (कक्षा, क्षमा, पक्षी, वत्स, मुल्ला)',
    focusKeys: "d { k h o R l e q Y p t ; w W ' a Q } I i [ r S g",
    focusHindi: 'क क्ष् ा ी व त् स म ु ल् च ज य ू ॅ श ं फ द्व प् प ख् त ै ह',
    description:
      'कक्षा क्षमा पक्षी वत्स मुल्ला मम्मी चच्चा जुल्म सत्य म्यान सत्या वूलन वॉमन शरीक म्यायूँ म्यानी फल द्वारा प्यासी प्लॉवर पॉवर पुख्ता कैम्पस पख्तून पतलून सप्ताह व्यवहार व्यवहारी साप्ताहिक साहसिक वामनजी सैम्पूक कैम्पलॉन साहित्य साहित्यिक सामाजिक कम्मलुम हम्मीर हम्मारिश फॉल द्वितीय द्वापर फलस्वरूप',
    content:
      "d{kk {kek i{kh oRl eqYyk eEeh pPpk tqYe lR; E;ku lR;k owyu okWeu 'kjhd E;k;wa E;kuh Qy }kjk I;klh IykWoj ikWoj iq[rk dSEil i[rwu irywu lIrkg O;ogkj O;ogkjh lkIrkfgd lkfgld okeuth lSEiwd dSEiykWu lkfgR; lkfgfR;d lkekftd dEeyqe gEehj gEekfj'k QkWy f}rh; }kij QyLo:i",
  },
  {
    id: 32,
    title: 'Exercise 32',
    category: 'Complex Sentences with Special Characters (यह तो मैंने कभी सोचा ही नहीं था)',
    focusKeys: "; g r k s e S d H h l p F f q Y o t u i c } D",
    focusHindi: 'य ह त ा े म ै क भ ी स च थ ि ु ल् व ज न प ब द्व क्',
    description:
      'यह तो मैंने कभी सोचा ही नहीं था। हर किसी में कुल मिलाकर मां वाली वो ममता नहीं होती है। भालू लल्ला, मुUuk व सज्जन को खा नहीं सका। पापा व काव्या चच्चा कल तक कूच करें। तत्परता में मम्मी भूखी ही सोयी। फालतू के काम करवा लो चाहे जितने? कच्चा, चुज्जा, तव्वल? द्वार व द्वीप भी ना हों तो फिर क्या हों? विद्या हर किसी की रक्षा करती है। थावरजी ही मानते हों तो मान जायें, मैं तो किसी से ना मानूं। मैं जवान नहीं हूं वरना यह जरूर करता।',
    content:
      ";g rks eSus dHkh lkspk gh ugha FkkA gj fdlh esa dqy feykdj eka okyh oks kerk ugha gksrh gSA Hkkyw yYyk] eqUuk o lTtu dks [kk ugha ldkA ikik o dkO;k pPpk dy rd dwp djsaA rRijrk esa eEeh Hkw[kh gh lks;hA Qkyrw ds dke djok yks pkgs ftrus\\ dPpk] pqTtk] rOoy\\ }kj o }hi Hkh uk gksa rks fQj D;k gksa\\ fo|k gj fdlh dh j{kk djrh gSA Fkkojth gh ekurs gksa rks eku tk;sa] eSa rks fdlh ls uk ekuwaA eSa toku ugha gwa ojuk ;g t:j djrkA",
  },
  {
    id: 33,
    title: 'Exercise 33',
    category: 'Paden Ra & Samyukt Vyanjan (प्र=iz, म्र=ez, स्र=lz, प्रकार, प्रतिभा, प्रतिज्ञा)',
    focusKeys: "l z i e t o k s r H d w c x ' g h",
    focusHindi: 'स ्र प म ज व ा े त भ क ू ब ग श ह ी',
    description:
      "lzlzlzlz प्रप्रप्रप्र म्रम्रम्रम्र tztztztz वजz सzksत भ्रम de प्रकार प्रतिभा प्रतिज्ञा  कूर भ्रून सब्र ताम्र गगगग गेगेगेगे जगजगजग गज गज lzlzlzl lzlzlzlz प्रप्रप्रप्र म्रम्रम्रम्र tztztztz वजz सzksत भ्रम de प्रकार प्रतिभा प्रतिज्ञा  कूर भ्रून सब्र ताम्र गगगग गेगेगेगे जगजगजग गज गज lzlzlzl ग्रह ग्राही ग्राहक व्याग्र चक्र तक ग्रीवा ग्रीक ग्राम ग्रोवर 'kz'kz'kz'kz",
    content:
      "lzlzlzlz iziziziz ezerezerez tztztztz otz lzksr Hkze de izdkj izfrHkk izfrKk dwj Hkzwu lcz rkez xxxx xsxsxsxs txtxtx xt xt lzlzlzl lzlzlzlz iziziziz ezerezerez tztztztz otz lzksr Hkze de izdkj izfrHkk izfrKk dwj Hkzwu lcz rkez xxxx xsxsxsxs txtxtx xt xt lzlzlzl xzg xzkgh xzkgd O;kxz pdz rd xzhook xzhd xzke xzksoj 'kz'kz'kz'kz",
  },
  {
    id: 34,
    title: 'Exercise 34',
    category: 'Vowel Aa & Ba Keys (अ=v, आ=vk, ब=c, अम्मी, अविकारी, अभिभावक, बकरी)',
    focusKeys: 'f v k E e o d j h H l Q w t S c z',
    focusHindi: 'ि अ ा म् म व क र ी भ स फ ू ज ै ब ्र',
    description:
      'ffff अअअअ ffff अअअअ अअअअ आआआ अअ आआ अआ आअ अम्मी अविकारी अभिभावक अभिसार आलम आफरीन आलू जाओ ओर और औरत गौरव कककक बबबब कककक बबबब कबकब कबकब बकबक बकरी कबीर कबाब कब्र ब्रोकर बला बाबा चाबी बीरबल कककक बबबब कककक बबबब कबकब कबकब बकबक बकरी कबीर कबाब कब्र ब्रोकर बला बाबा चाबी बीरबल सब्र',
    content:
      'ffff vvvv ffff vvvv vvvv vkvkvk vv vkvk vvk vkv vEeh vforkjh vfHkHkkod vfHklkj vkye vkQjhu vkyw tkvks vksj vkSj vkSjr xkSjo dddd cccc dddd cccc dcdc dcdc cdcd cdjh dchj dckc dcz czksdj cyk ckck pkch chjcy dddd cccc dddd cccc dcdc dcdc cdcd cdjh dchj dckc dcz czksdj cyk ckck pkch chjcy lcz',
  },
  {
    id: 35,
    title: 'Exercise 35',
    category: 'Vowel I & Da Keys (इ=b, द=n, इंकार, इमली, इंसान, इतिहास, दरवाजा, दुल्हन)',
    focusKeys: 'g b a d k j e y p l f r t Q T n M o q w Y S v i z',
    focusHindi: 'ह इ ं क ा र म ल च स ि त ज फ ज् द ड व ु ू ल् ै अ प ्र',
    description:
      'हहहह इइइइ हहहह इइइइ हहइइ इइहह इ्हह हइहइ इहइह इक इंकार इमली इलायची इंसान इतिहास इंतजार इजहार इंजन इकरार इंसाफ इज्जत इलाका इकबाल इलाज इशारा हहहह दददद हहहह दददद हहहह दददद हदहद हदहद दहदह हइद हइद हडहद हडहद दहक दिन दिल चांद बाद गंदा बंदा हद दही कद दरवाजा दम दुम दूरी दुल्हन दौलत दोबारा अदा आदान प्रदान प्रदीप',
    content:
      "gggg bbbb gggg bbbb ggbb bbgg bZgg gbgb bgbg bd badkj beyh byk;ph balku bfrgkl bartkj btgkj batu bdjkj balkQ bTtr bykdk bdcky bykt b'kkjk gggg nnnn gggg nnnn gggg nnnn gngn gngn ngng gbn gbn gMgn gMgn ngd fnu fny pkan ckn xank cank gn ngh dn njoktk ne nqe nwjh nqYgu nkSyr nksckjk vnk vknku iznku iznhi",
  },
  {
    id: 36,
    title: 'Exercise 36',
    category: 'Vowels U & E Keys (उ=m, ए=,, उच्च, उपकार, उल्लास, उज्जवल, एक, ऐनक)',
    focusKeys: 'k m P p i d j Y y T t o U u h l g a e z E n , S x v H',
    focusHindi: 'ा उ च् च प क र ल् ल ज् ज व न् न ी स ह ं म ्र म् द , ै ग अ भ',
    description:
      'kkkk उउउउ kkkk उउउउ kkkk उउउउ kउkउ उाउा उाउाउ उच्च उपकार उल्लास उज्जवल उUuhस उनका उनकी उन्हें उल्हास उनका उनसे उम्र उम्मीद उंकार kkkk एएएए  kkkk एएएए kkkk एएएए kkkएएए kkएए एएkk kएाएए एाएा kउए kmkए kmkए kएkए एएkउ kmkए ऐक ऐनक एक गए आए जाए भाउ भाए बाएं दाएं ऐश एकता ऐजेंसी एरियर ऐलान',
    content:
      "kkkk mmmm kkkk mmmm kkkk mmmm kmkm mkmk mkmkm mPp eidkj mYykl mTtoy mUuhl eudk eudh mUgas mYgkl eudk euls mez mEehn eakdj kkkk ,,,, kkkk ,,,, kkkk ,,,, kkk,,, kk,, ,,kk k,k,, ,k,k km, kmk, kmk, k,k, ,,km kmk, ,Sd ,Sud ,d x, vk, tk, Hkkm Hkk, ck,a nk,a ,S'k ,drk ,Stsalh ,fj;j ,Syku",
  },
  {
    id: 37,
    title: "Exercise 37",
    category: "Nna & Dha Keys (ण्=., णा=.k, ध=?, ध्=/, य=;)",
    focusKeys: "l . k ? ; / x c f ' \" i Y q v",
    focusHindi: "स ण् णा ध य ध् ग ब ि श ष प ल् ु अ गणपति विशेषण प्रणाम कल्याण धंधा धूप ध्वनि",
    description:
      "सससl .... सससl l.l. ll.. l.l. ll.. सससस l.l. .k.kll l.l. ..ll ll.. .k.k.k.k णण णण गणपति कण बण विशेषण प्रणाम कल्याण सगुण करण करणीय करणी शरण अणु प्राण यययय यययय ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; धध धध धंधा धंधे धुंआ आंधी धम्म धारण साधारण धाक धूप धन धातु ध्वनि धारणा धारा धूल धनुष ध्यान धरती धन्य",
    content:
      "llll .... llll l.l. ll.. l.l. ll.. llll l.l. .k.kll l.l. ..ll ll.. .k.k.k.k .. .. x.ifr d. c. fo'ks\"k.k iz.kke dY;k.k lxq.k dj.k dj.kh; dj.kh 'kj.k v.kq izk.k ;;;; ;;;; ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; /k/k /k/k /ka/kk /ka/ks /kqvk¡ vka/kh /kEe /kkj.k lk/kkj.k /kkd /kwi /ku /kkrq /ofu /kkj.kk /kkjk /kwy /kuq\"k /;ku /kjrh /kU;",
  },
  {
    id: 38,
    title: "Exercise 38",
    category: "Reph (र्=Z) & Half Ga (ग्=X) Keys",
    focusKeys: "d Z e l / o x X k j q t W Ý Q c",
    focusHindi: "र् ग् क म स ध व ग र ज ॅ फ्र फ ब कर्क सर्प मर्म कर्म धर्म ध्रुव वर्धमान गर्म शर्म बुर्ज जॉर्ज फ्रॉक जर्जर चार्जर वॉर्मर बर्फ गुर्जर ग्यारह वैराग्य जग्गी जग्गा अग्नि भाग्य",
    description:
      "कर्कर्कर्क र्कर्कर्कर्क र्मर्मर्मर्म सर्प मर्म कर्म धर्म ध्रुव वर्धमान गर्म शर्म बुर्ज जॉर्ज फ्रॉक जर्जर चार्जर वॉर्मर बर्फ गुर्जर गगगग XXXX गगगग XXXX गगगग XXXX गगXX गगXX गगXX XXगग XXगग XXगग गेX गेX गेX गेX ग्यारह वैराग्य जग्गी जग्गा ग्यग्य अग्नि भाग्य",
    content:
      "ddZddZddZ ddZddZddZddZ eeZeZeZeZ liZ eeZ deZ /keZ /kzqo o/kZeku xeZ 'keZ cqtZ tkWtZ ÝkWd ttZj pkTtZj okWeZj ciZQ xqTtZj xxxx XXXX xxxx XXXX xxxx XXXX xxXX xxXX xxXX XXxx XXxx XXxx xsX xsX xsX xsX X;kjg oSjkX; tXxh tXxk X;X; vfXu HkkX;",
  },
  {
    id: 39,
    title: "Exercise 39",
    category: "Half Ba (ब्=C), Vowel A (अ=v) & Ta (ट=V) Keys",
    focusKeys: "c C d t ; kS v V f [ b h Z W w ,",
    focusHindi: "ब ब् अ ट ि बब्बर कब जब्बा कब्जा ब्याज ब्याह ब्यौरा जब्त सब्जी टाई खाई आई हाई टिक टमाटर आर्ट ऑटो टॉल टूअर टीटी ऑटी आंटी एंटी एंट एंटर अटारी कटारी कटी",
    description:
      "बबबब CCCC बबबब CCCC बबबब CCCC बब्बर कब जब्बा बबबब CCCC ब्ब्बब कबब कबC बब्क बब्क ब्बक ब्कब कब्जा ब्याज ब्याह ब्यौरा जब्त बब्बर सब्जी जब्त अअअअ टटटट अअअअ टटटट ffff अअअअ ffff अअअअ ffff टटटट अअटट अअटट टटअअ टटअअ टिअ टिअ टिअ टाई खाई आई हाई टिक टिक कार्टर चार्टर टमाटर आर्ट ऑटो टॉल टूअर टीटी ऑटी आंटी एंटी एंट एंटर अटारी कटारी कटी",
    content:
      "cccc CCCC cccc CCCC cccc CCCC cCcj dc tCck cccc CCCC Cccc dcc dcC cCd cCd Ccd Cdc dCtk C;kt C;kg C;kSjk tCr cCcj lCth tCr vvvv VVVV vvvv VVVV ffff vvvv ffff vvvv ffff VVVV vvVV vvVV VVvv VVvv fVv fVv fVv VkbZ [kkbZ vkbZ gkbZ fVd fVd dkVZj pkVZj VekVj vkVZ vkWVks VkWy Vwvj VhVh vkWVh vkaVh ,aVh ,aV ,aVj vVkjh dVkjh dVh",
  },
  {
    id: 40,
    title: "Exercise 40",
    category: "Vowel I (इ=b), Ttha (ठ=B) & Chha (छ=N) Keys",
    focusKeys: "b B g N k h q w a y p t",
    focusHindi: "इ ठ ह छ ठाठ ठाकुर उठ इठलाना ठाला ठहाका ठीक ठिकाना ठहरना ठोस ठेका ठोकर छह छाछ पंछी छठ छंटनी बाछा छाता छाती छल इच्छा गठीला गांठ छुपाना छाल छाया छवि छेद",
    description:
      "इइइइ ठठठठ इइइइ ठठठठ इइइ ठठठठ इइइइ ठठठठ इइठठ ठठइइ ठठइइ इइठठ इठ इठ ठइठइ हठ हठ हठ ठाठ ठाकुर उठ इठलाना ठाला ठहाका ठीक ठिकाना ठहरना ठोस ठेका ठोकर हहहह छछछछ हहहह छछछछ छछछछ हहहह छछछछ हहहह हहहह छछछछ छहछह छछहह हहछछ छछहह हहछछ छह छह हछ छह छाछ पंछी छठ छंटनी बाछा छाता छाती छल इच्छा गठीला गांठ छुपाना छाल छाया छवि छेद छाल",
    content:
      "bbbb BBBB bbbb BBBB bbb BBBB bbbb BBBB bbBB BBbb BBbb bbBB bB bB BbBb gB gB gB BkB Bkdqj mB bBykuk Bkyk Bgkdk Bhd fBdkuk Bgjuk Bksl Bsdk Bksdj gggg NNNN gggg NNNN NNNN gggg NNNN gggg gggg NNNN gNgN NNgN ggNN NNgN ggNN gN gN gN gN NkkN iaNh NB NaVuh ckNk Nkkrk Nkrh Ny bPNk xBhyk xkaB Nqikuk Nky Nk;k Nfo Nsn Nky",
  },
  {
    id: 41,
    title: "Exercise 41",
    category: "Dda (ड=M), Ddha (ढ=<), Vowel U (उ=m) & E (ए=,) Keys",
    focusKeys: "k M m < , j a W s w y d c x",
    focusHindi: "ा ड उ ढ ए डमरू डंका डकार ऑडी डेंगू डींग डूंगर डे डाकू डलिया डाक डंडा डॉक्टर डाटा डील डिमांड डगमगाना डबल ढोंग बाढ गढ़ ढक्कन ढाई ढलना ढेर ढोल ढूंढना ढलान ढीला ढंग ढाल",
    description:
      "kkkk डडडड kkkk डडडड kkkk डडडड डड kk डड kk डाडा डाडा उड़ उड़ उउडड उउडड उउउउ डडडड kkkk डडडड उड़ उड़ डडडड डडडड उडउडउड डमरू डंका डकार ऑडी डेंगू डींग डूंगर डे उड़े उड़े डाकू डलिया डाक डंडा डॉक्टर डाटा डील डिमांड डगमगाना डबल kkkk ढढढढ kkkk ढढढढ ढढढढ kkkk ढढाा ढढाा kkढढ ढाढा ढाढा ढढढढ एएएए एढएढ ढढएए ढढएए ढाए ढाए ढढएएा ढोंग बाढ गढ़ ढक्कन ढाई ढलना ढेर ढोल ढूंढना ढलान ढीला ढंग ढाल",
    content:
      "kkkk MMMM kkkk MMMM kkkk MMMM MM kk MM kk MkMk MkMk mM mM mmMM mmMM mmmm MMMM kkkk MMMM mM mM MMMM MMMM mMmMmM Mejw Madk Mdkj vkWMh Msaxw Mhax Mwaxj Ms mMs mMs Mkdw Mfy;k Mkd MaMk MkWDVj MkVk Mhy fMekaM Mxexkuk Mcy kkkk <<<< kkkk <<<< <<<< kkkk <<kk <<kk kk<< <k<k <k<k <<<< ,,,, ,<,< <<,, <<,, <k, <k, <<,,k <ksax ck< x< <Ddu <kbZ <yuk <sj <ksy <w<uk <yku <hyk <ax <ky",
  },
  {
    id: 42,
    title: "Exercise 42",
    category: "Jha (झ=>k, झ्=>), Gha (घ=?k) & Dha (ध=/k, ध्=/) Keys",
    focusKeys: "l > k h q a w s ; / ? V t j x",
    focusHindi: "स झ ध घ य साझा झा झी झु झं झू झे झो झंकार बांझ सांझ झाग झालर झील झपकी झूठ झलक झुका झनकार झटपट सूझबूझ घटना घंटी घर घास घुमाना घेरना घिसना घुमावदार",
    description:
      "सससस झझझझ सससस झझझझ सससस झझझझ झझसस ससझझ झझसस ससझझ झझझझ ससस झझझझ साझा साझा झा झा झी झु झं झू झे झो झंकार बांझ सांझ झाग झालर झील झपकी झूठ झलक झुका झनकार झटपट सूझबूझ यययय झूठ झलक झुका झनकार झटपट झालर ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ;;// ;;// //;; /k/k ?k?k /k/k ?k?k ?k?k/k/k ?k?k /k/k धध घघ धध घघ धध घघ घटना घंटी घटना घर घास घुमाना घेरना घिसना तक घुमावदार",
    content:
      "llll >k>k>k>k llll >k>k>k>k llll >k>k>k>k >k>kll ll>k>k >k>kll ll>k>k >k>k>k>k lll >k>k>k>k lk>kk lk>kk >kk >kk >kh >kq >ka >kw >ks >kks >kaddkj cka>k lka>k >kkx >kkyj >khy >kidk >kwB >kyd >kqdk >kudkj >kViV lw>cw> ;;;; >kwB >kyd >kqdk >kudkj >kViV >kkyj ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ???? ;;;; ???? ;;?? ??;; ;;?? ??;; ?;?; ;;// ;;// //;; /k/k ?k?k /k/k ?k?k ?k?k/k/k ?k?k /k/k /k/k ?k?k /k/k ?k?k /k/k ?k?k ?kVuk ?kaVh ?kVuk ?kj ?kkl ?kqekuk ?ksjuk ?klhVuk rd ?kqekonkj",
  },
  {
    id: 43,
    title: "Exercise 43",
    category: "Synthesis of Conjuncts & Complex Consonants",
    focusKeys: "B [ j . x X N i > V < ? t d Z",
    focusHindi: "ठहाका ठठेरा राजेन्द्र ठिकाना गब्बर ग्यारह छब्बन छप्पन छहरना झरझर टमटम टर्रटर्र ठाटबाट ढकोसला ढक्कन ढपोलशंख रग्घूलाल घमण्डी घसियारा घासीराम घरबार विघ्नबाधा घटाटोप गुरुघण्टाल ग्वालटोली ग्लानियुक्त ग्यानसागर घनानन्द घनचक्कर क्षरण घमंड झज्जर झण्डा कर्मकाण्ड कुण्डी",
    description:
      "ठहाका ठठेरा राजेन्द्र ठिकाना ठहाका गब्बर ग्यारह छब्बन छप्पन छहरना झरझर टमटम टर्रटर्र ठाटबाट ढकोसला ढक्कन ढपोलशंख रग्घूलाल घमण्डी घसियारा घासीराम घरबार विघ्नबाधा घटाटोप गुरुघण्टाल ग्वालटोली ग्लानियुक्त ग्यारह ग्यानसागर ग्यानचौकी ग्यानज्योति घनानन्द घनचक्कर घना क्षरण घन घमंड दर्पयुक्त झज्जर झण्डा कर्मकाण्ड कुण्डी",
    content:
      "Bgkdk BBsjk jktsUnz fBdkuk Bgkdk cCcyj X;kjg NCcu NIiu Ngjuk >j>j VeVe VjjZjjZ BkVckV <dkslyk <Ddu <iksy'k[k jX?kwyky ?ke.Mh ?kfl;kjk ?kklhjke ?kjckj fo?uck/kk ?kVkVksi xq#?k.Vky XokyVksyh Xykfu;qDr X;kjg X;kulkxj X;kUpkSdh X;kUT;ksfr ?kukuan ?kupDdj ?kuk {kj.k ?ku ?keaM niZ;qDr >Ttj >aMk deZdk.M dq.Mh",
  },
  {
    id: 44,
    title: "Exercise 44",
    category: "Halant, Ri Matra (कृ, तृ, मृ, गृह) & Exclamation (!)",
    focusKeys: "V ~ n U | d ` r e x g ! 1 v h s vk",
    focusHindi: "ट् द् न् विद्या वाक्य वाद्य कृ तृ मृ गृ गृह ! 1 अ! हे! अरे! ओ! मृग तृष्णा कृष्णा कृपाण विद्या पट्टी छुट्टन कट्टप्पा",
    description:
      "ट् ट् ट् द् द् न् विद्या वाक्य वाद्य न् कृ कृ कृ तृ तृ तृ मृ मृ मृ गृ गृह गृह गृह !!!!! 11111 111 !!!!! 11111 111 !!!!! अ! अ! हे! हे! अरे! अरे! अरे! अरे! अरे! मृग तृष्णा कृष्णा कृपाण विद्या पट्टी छुट्टन कट्टप्पा हे! अरे! ओ! अरे! हे! ओ! ट् ट् ट् द् द् न् विद्या वाक्य वाद्य न् कृ कृ कृ तृ तृ तृ मृ मृ मृ गृ गृह गृह गृह !!!!! 11111 111 !!!!! !!!!! 11111 111 !!!!! अ! अ! हे! हे! अरे! अरे! अरे! अरे! अरे! मृग तृष्णा कृष्णा कृपाण विद्या पट्टी छुट्टन कट्टप्पा हे! अरे! ओ! अरे! हे! ओ!",
    content:
      "V~ V~ V~ n~ n~ U fo|k okD; ok| U d` d` d` r` r` r` e` e` e` x` x`g x`g x`g !!!!! 11111 111 !!!!! 11111 111 !!!!! v! v! gs! gs! vjs! vjs! vjs! vjs! vjs! e`x r`\".kk d`\".kk d`ik.k fo|k iV~Vh NqV~Vu dV~VIIkk gs! vjs! vks! vjs! gs! vks! V~ V~ V~ n~ n~ U fo|k okD; ok| U d` d` d` r` r` r` e` e` e` x` x`g x`g x`g !!!!! 11111 111 !!!!! !!!!! 11111 111 !!!!! v! v! gs! gs! vjs! vjs! vjs! vjs! vjs! e`x r`\".kk d`\".kk d`ik.k fo|k iV~Vh NqV~Vu dV~VIIkk gs! vjs! vks! vjs! gs! vks!",
  },
  {
    id: 45,
    title: "Exercise 45",
    category: "Slash (/=@), Digits (1,2,3) & Ru (रु=:) Drill",
    focusKeys: "1 2 3 @ : v c 4 5 0 l q g ' k e t f o r d [ ; i .",
    focusHindi: "1 2 3 / (Shift+2=@) अ/ब 25/02/2017 सुबह/शाम जिवित/मृत रु (Shift+;=:) रुक रुमाल रुखसार रुपये तरुप अरुण",
    description:
      "111/ 22222 222 / / 22 // 22// अ/ब4/425/02/2017 सुबह/शाम जिवित/मृत रुरुरु रुरुरुरु रुरुरुरुरुरु रुरुरु रुक रुमाल रुखसार रुपये 33333 33 रुरुरु रुरु रुरु रुपये रुक तरुप अरुण 11111/ 22222 222 // 22 // 22// अ/ब4/425/02/2017 सुबह/शाम जिवित/मृत रुरुरु रुरुरुरु रुरुरुरुरुरु रुरुरु रुक रुमाल रुखसार रुपये 33333 33 रुरुरु रुरु रुरु रुपये रुक तरुप अरुण",
    content:
      "111@ 22222 222 @ @ 22 @@ 22@@ v@c4@425@02@2017 lqcg@'kke ftfor@e`r ::: :::: ::::: ::: :d :eky :[klkj :i;s 33333 33 ::: :: :: :i;s :d r:i v:.k 11111@ 22222 222 @@ 22 @@ 22@@ v@c4@425@02@2017 lqcg@'kke ftfor@e`r ::: :::: ::::: ::: :d :eky :[klkj :i;s 33333 33 ::: :: :: :i;s :d r:i v:.k",
  },
  {
    id: 46,
    title: "Exercise 46",
    category: "Plus (+), Dollar ($) & Visarga (:) Drill",
    focusKeys: "+ $ 4 2 3 : r k v i ; c d . =",
    focusHindi: "+ $ 4 23$34 : तः अतः प्रायः अ: ब: क.",
    description:
      "++++++++$$$$ 4444 $$$$ 444 44 $$$ 4444 44 $$$$ 444 $$$$ $$ $$$ 23$34 ::: ::: तः तः अतः प्रायः अ: अ: ब: क. ==..: ++++++++$$$$ 4444 $$$$ 444 44 $$$ 4444 44 $$$$ 444 $$$$ $$ $$$ 23+34 ::: ::: तः तः अतः प्रायः अ: अ: ब: क. ==::: :::",
    content:
      "++++++++$$$$ 4444 $$$$ 444 44 $$$ 4444 44 $$$$ 444 $$$$ $$ $$$ 23$34 ::: ::: r% r% vr% izk;% v% v% c% d- ==..: ++++++++$$$$ 4444 $$$$ 444 44 $$$ 4444 44 $$$$ 444 $$$$ $$ $$$ 23+34 ::: ::: r% r% vr% izk;% v% v% c% d- ==::: :::",
  },
  {
    id: 47,
    title: "Exercise 47",
    category: "Quotation (^=‘, *=’), Hyphen (&=-) & Compounds",
    focusKeys: "^ * & j e d k ; v kS f i r / w u l % 2 3 1 7",
    focusHindi: "‘ ’ - ‘राम’ ‘काक’ ‘कौआ’ राम-राम माता-पिता आधा-अधूरा निम्नानुसार :- 23-12-2017",
    description:
      "^^^^ ^^ ^^^^ ^^^^ ^^ &&&& &&&& &&&& ^^^^ &&&& 'राम' 'राम' 'राम' 'राम' 'काक' या 'कौआ' राम-राम माता-पिता आधा-अधूरा निम्नानुसार :- 23-12-2017 ^^^^ ^^ ^^^^ ^^^^ ^^ &&&& &&&& &&&& ^^^^ &&&& 'राम' 'राम' 'राम' 'राम' 'काक' या 'कौआ' राम-राम माता-पिता आधा-अधूरा निम्नानुसार :- 23-12-2017",
    content:
      "^^^^ ^^ ^^^^ ^^^^ ^^ &&&& &&&& &&&& ^^^^ &&&& ^jke* ^jke* ^jke* ^jke* ^dkd* ;k ^dkSvk* jke&jke ekrk&firk vk/kk&v/kwjk fuEukuqlkj %& 23&12&2017 ^^^^ ^^ ^^^^ ^^^^ ^^ &&&& &&&& &&&& ^^^^ &&&& ^jke* ^jke* ^jke* ^jke* ^dkd* ;k ^dkSvk* jke&jke ekrk&firk vk/kk&v/kwjk fuEukuqlkj %& 23&12&2017",
  },
  {
    id: 48,
    title: "Exercise 48",
    category: "Semicolon (;), \"है;\" & D-dha Conjunct (द्ध)",
    focusKeys: "; g S c q ) ; ' f",
    focusHindi: "; है; द्ध बुद्ध युद्ध शुद्ध बुद्धि शुद्धि",
    description:
      "; ; ; ; है; है; है; है; है; है ; ; ; ; द्धद्धद्धद्ध द्धद्धद्धद्ध द्धद्ध द्धद्ध द्धद्ध द्धद्धद्धद्ध बुद्ध बुद्ध युद्ध युद्ध शुद्ध बुद्धि शुद्धि ; ; ; ; है; है; है; है; है; है ; ; ; ; द्धद्धद्धद्ध द्धद्धद्धद्ध द्धद्ध द्धद्ध द्धद्ध द्धद्धद्धद्ध बुद्ध बुद्ध युद्ध युद्ध शुद्ध बुद्धि शुद्धि",
    content:
      "; ; ; ; gS; gS; gS; gS; gS; gS ; ; ; ; )))) )))) )) )) )) )))) cq)k cq)k ;q)k ;q)k 'kq)k cqf)k 'kqf)k ; ; ; ; gS; gS; gS; gS; gS; gS ; ; ; ; )))) )))) )) )) )) )))) cq)k cq)k ;q)k ;q)k 'kq)k cqf)k 'kqf)k",
  },
  {
    id: 49,
    title: "Exercise 49",
    category: "Vowel Ri (_=ऋ), Hyphen (-) & Abbreviations (डॉ., एम.ए)",
    focusKeys: "_ - r q f \" X o s n M k W . 1 8 0 5 4 3 , e c y",
    focusHindi: "_ - ऋतु ऋषि ऋग्वेद डॉ. 18.05 14.03 एम.ए बी.ए बी.एल. यादव 23.12.2017",
    description:
      "____ ---- ____ ____ ---- ---- ---- __ __ ऋतु ऋतु ऋषि ऋग्वेद डॉ. डॉ. 18.05 14.03 एम.ए बी.ए बी.एल. यादव 23.12.2017 ____ ---- ____ ____ ---- ---- ---- __ __ ऋतु ऋतु ऋषि ऋग्वेद डॉ. डॉ. 18.05 14.03 एम.ए बी.ए बी.एल. यादव 23.12.2017",
    content:
      "____ ---- ____ ____ ---- ---- ---- __ __ _rq _rq _f\"k _Xosn MkW- MkW- 18.05 14.03 ,e-,- ch-,- ch-,y- ;kno 23.12.2017 ____ ---- ____ ____ ---- ---- ---- __ __ _rq _rq _f\"k _Xosn MkW- MkW- 18.05 14.03 ,e-,- ch-,- ch-,y- ;kno 23.12.2017",
  },
  {
    id: 50,
    title: "Exercise 50",
    category: "Tra (+, = = त्र), Nukta Dda (ड=M) & Tra Words Drill",
    focusKeys: "+ = M + f 'k w y k h n s o x < c k t",
    focusHindi: "+ = ड त्रिशूल त्राही त्रिशला त्रिदेव गढ़ बाढ जड़ ताड़ आड़ त्र",
    description:
      "++++==== ==== ==== ==== == == ==== == ड ड ड ड ड ड त्रिशूल त्राही त्राही त्राही त्रिशला त्रिदेव गढ़ गढ़ बाढ बाढ जड़ ताड़ आड़ ड ड ड ड ड ड ड त्रिशूल त्राही त्राही त्राही त्रिशला त्रिदेव गढ़ गढ़ बाढ बाढ जड़ ताड़ आड़ त्रत्रत्रत्र त्रत्रतत्र त्रत्तत्र ड ड ड ड ड ड त्रिशूल त्राही त्राही त्राही त्रिशला त्रिदेव गढ़ गढ़ बाढ बाढ जड़ ताड़ आड़",
    content:
      "++++==== ==== ==== ==== == == ==== == M M M M M M f='kwy =kgh =kgh =kgh =kf'kyk =hnsO x< x< ck< ck< tM rkM vkM M M M M M M M f='kwy =kgh =kgh =kgh =kf'kyk =hnsO x< x< ck< ck< tM rkM vkM ==== ===r= ==rr= M M M M M M f='kwy =kgh =kgh =kgh =kf'kyk =hnsO x< x< ck< ck< tM rkM vkM",
  },
  {
    id: 51,
    title: 'Exercise 51',
    category: 'Speed Booster Drill 3',
    focusKeys: 'Full keyboard rapid switch',
    focusHindi: 'अहिंसा परमो धर्मः। सत्यमेव जयते। वसुधैव कुटुम्बकम्।',
    description: 'Sanskrit quotes and classical maxims used in Hindi exams',
    content:
      'vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A vfgalk ijeks /keZ%A lR;eso t;rsA olq/kSo dqVqEcde~A',
  },
  {
    id: 52,
    title: 'Exercise 52',
    category: 'Complex Words Mastery 1',
    focusKeys: 'Full keyboard',
    focusHindi: 'अंतर्राष्ट्रीय, दृष्टिकोण, अभिव्यक्ति, प्रतिस्पर्धा',
    description: 'Long multi-syllable Hindi words requiring high accuracy',
    content:
      'varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ] varjkZ"Vªh;] n`f"Vdks.k] vfHkO;fDr] izfrLi/kkZ]',
  },
  {
    id: 53,
    title: 'Exercise 53',
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
    id: 54,
    title: 'Exercise 54',
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
    id: 55,
    title: 'Exercise 55',
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
    id: 56,
    title: 'Exercise 56',
    category: 'Exam Simulation Paragraph 2',
    focusKeys: 'Full keyboard',
    focusHindi: 'शिक्षा मनुष्य के जीवन का सबसे महत्वपूर्ण अंग है। इससे ज्ञान बढ़ता है।',
    description: 'Continuous text typing test simulating 35 WPM exam condition',
    content:
      'f' +
      "'" +
      'k{kk euq"; ds thou dk lcls egRoiw.kZ vax gSA blls Kku c<rk gS vkSj thou esa lQyrk feyrh gSA f' +
      "'" +
      'k{kk euq"; ds thou dk lcls egRoiw.kZ vax gSA blls Kku c<rk gS vkSj thou esa lQyrk feyrh gSA',
  },
  {
    id: 57,
    title: 'Exercise 57',
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
    id: 58,
    title: 'Exercise 58',
    category: 'Exam Simulation Paragraph 4',
    focusKeys: 'Full keyboard',
    focusHindi: 'समय का सदुपयोग करना ही प्रत्येक छात्र और नागरिक का पहला कर्तव्य होना चाहिए।',
    description: 'High-speed paragraph test simulating high court / SSC accuracy requirements',
    content:
      'le; dk lnqi;ksx djuk gh izR;sd Nk= vkSj ukxfjd dk igyk drZO; gksuk pkfg,A ifjJe ls gh gj y{; gkfly gksrk gSA le; dk lnqi;ksx djuk gh izR;sd Nk= vkSj ukxfjd dk igyk drZO; gksuk pkfg,A ifjJe ls gh gj y{; gkfly gksrk gSA',
  },
  {
    id: 59,
    title: 'Exercise 59',
    category: 'Mastery Grand Test (Full 59)',
    focusKeys: 'Complete Keyboard KrutiDev 010',
    focusHindi: 'सम्पूर्ण हिंदी टंकण अभ्यास परीक्षण — आप सभी कुंजियों और मात्राओं में निपुण हो चुके हैं।',
    description: 'Final grand milestone test completing all 59 KrutiDev typing tutor lessons',
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
    description:
      "अनार अंग्रेज अंग अली आम अल्लाह अम्मी आर्मी आदि अनुसार अनेक अंदर अनादर अंधेरा आना और आग अनुरूप अच्छा औरत आगन आतंक आनन आँख असमर्थ अयोग्य ओट आवश्यकता आलम आना अवलम्ब अतर आवरण असफल आधा आवरण आकार आदर अवश्य आधार आवाज आकर आकार अपना अपने आमरण आई अभी अच्छी आठ अवसर आओ आए",
    content:
      "vukj vaxzst vax vyh vke vYykg vEeh vkehZ vkfn vuqlkj vusd vanj vuknj va/ksjk vkuk vkSj vkx vuq:i vPNk vkSjr vkxu vkrad vkuu vka[k vleFkZ v;ksX; vksV vko';drk vkye vkuk voyEc vrj vkoj.k vlQy vk/kk vkoj.k vkdkj vknj vo'; vk/kkj vkokt vkdj vkdkj viuk vius vkej.k vkbZ vHkh vPNh vkB volj vkvks vk,",
  },
  {
    id: 2,
    title: "Exercise 2",
    category: "Swar Practice - Part 2 (अ, आ, ओ, औ, अनुस्वार)",
    focusKeys: "v, k, ks, a",
    focusHindi: "अब आता आदमी आखिर आखरी औकात अक्कल आगरा ...",
    description:
      "अब आता आदमी आखिर आखरी औकात अक्कल आगरा असर अहमियत अहम अधिक आंधी औषधि अंदाज और ओने अन्य आशा अकेले और अलमारी आत्मा अशोक अरिष्ट आगे ओढ़ना ओट ओह ओस अजली अजैया अजनी अंकुर अड़ा अंतपुर आंत आंतें अंगीठी अंत अंकुश अंधकार अंगोछा अंगड़ाई अंक अंतिम अह आंतरिक अंश अंतर्गत अंगीकार",
    content:
      "vc vkrk vkneh vkf[kj vk[kjh vkSdkr vDdy vkxjk vlj vgfe;r vge vf/kd vka/kh vkS\"kf/k vankt vkSj vksus vU; vk'kk vdsys vkSj vyekjh vkRek v'kksd vfj\"V vkxs vks<+uk vksV vksg vksl vtyh vtS;k vtuh vadqj vM+k variqj vkar vkarsa vaxhBh var vadq'k va/kdkj vaxksNk vaxM+kbZ vad vafre vg vkarfjd va'k varxZr vaxhdkj",
  },
  {
    id: 3,
    title: "Exercise 3",
    category: "Swar Practice - Part 3 (इ, ई, उ, ऊ)",
    focusKeys: "b, bZ, m, Å",
    focusHindi: "इस इकट्ठे इसके इसमें इधर इंकार ईख इसका ...",
    description:
      "इस इकट्ठे इसके इसमें इधर इंकार ईख इसका इंडियन ईस्वी इस्तीफा इच्छा इसलिए इससे इसका इलाहाबाद ईसाई इतिहास ईर्ष्या इस्लाम इंसान उसका उतारकर उत्तर उतरन उफान उठना उसकी उसमे उनके उसे उन उत्तर उपरांत उपेक्षा उत्पन्न उधेड़ उसी उम्र उत्साह उत्सुक उर्दू उन्माद उदाहरण उठाई उन्मादी उंची उंचा उपस्थित उच्च उधार उपकार उपमंत्री उपाध्यक्ष उकेराना उगाया उगाना उल्लू उषा उलाहना उम्र उजाड़ उजड़ा",
    content:
      "bl bdV~Bs blds blesa b/kj badkj bZ[k bldk bafM;u bZLoh bLrhQk bPNk blfy, blls bldk bykgkckn bZlkbZ bfrgkl bZ\";kZ bLyke balku mldk mrkjdj mRrj mrju mQku mBuk mldh mles muds mls mu mRrj mijkar mis{kk mRiUu m/ksM+ mlh mEj mRlkg mRlqd mnwZ mUekn mnkgj.k mBkbZ mUeknh maph mapk mifLFkr mPp m/kkj midkj miea=h mik/;{k mdsjkuk mxk;k mxkuk mYyw m\"kk mykguk mEj mtkM+ mtM+k",
  },
  {
    id: 4,
    title: "Exercise 4",
    category: "Swar & Ri Practice (ए, ऐ, ऋ)",
    focusKeys: "comma, s, _",
    focusHindi: "एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ...",
    description:
      "एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ऐनक ऐन एकाएक एकदम एकाध ऐंठ ऐंठन एतराज एकड़ ऐतिहासिक एव ऋणी ऋषि ऋण ऋग्वेद ऋतंभरा ऋतु ऋतुराज एक ऐसी ऐसा ऐसे एकरस एकरूप एकता एकल ऐनक ऐन एकाएक एकदम एकाध ऐंठ ऐंठन एतराज एकड़ ऐतिहासिक एव ऋणी ऋषि ऋण ऋग्वेद ऋतंभरा ऋतु ऋतुराज",
    content:
      ",d ,slh ,slk ,sls ,djl ,d:i ,drk ,dy ,sud ,su ,dk,d ,dne ,dk/k ,saB ,saBu ,rjkt ,dM+ ,sfrgkfld ,o _.kh _f\"k _.k _Xosn _raHkjk _rq _rqjkt ,d ,slh ,slk ,sls ,djl ,d:i ,drk ,dy ,sud ,su ,dk,d ,dne ,dk/k ,saB ,saBu ,rjkt ,dM+ ,sfrgkfld ,o _.kh _f\"k _.k _Xosn _raHkjk _rq _rqjkt",
  },
  {
    id: 5,
    title: "Exercise 5",
    category: "Vyanjan - Ka Varg (क)",
    focusKeys: "d, D",
    focusHindi: "कमल कल कमला कब कौन कैसे कहाँ काला ...",
    description:
      "कमल कल कमला कब कौन कैसे कहाँ काला कड़ा कौशल्या कृष्ण काम कार्य के का कुछ कर करना कर्ण कान्ति करती कलकत्ता कोई कुल कुत्ता कर्ज करवट कहना कही कहते कदापि कंधा काव्य कामना कार्य काम कुटुम्ब कलह कभी कर्तव्य करोड़पति कम कला करुणा कटप्पा कांगिनि कमीना कील किला कुरूप कुपुत्र कंस कपि कपिल कपीश कमी कौमा कौम कौमार्य कुमार कल कलाई",
    content:
      "dey dy deyk dc dkSu dSls dgka dkyk dM+k dkS'kY;k d`\".k dke dk;Z ds dk dqN dj djuk d.kZ dkfUr djrh dydRrk dksbZ dqy dqRrk dtZ djoV dguk dgh dgrs dnkfi da/kk dkO; dkeuk dk;Z dke dqVqEc dyg dHkh drZO; djksM+ifr de dyk d#.kk dVIik dkafxfu dehuk dhy fdyk dq:i dqiq= dal dfi dfiy dih'k deh dkSek dkSe dkSek;Z dqekj dy dykbZ",
  },
  {
    id: 6,
    title: "Exercise 6",
    category: "Vyanjan - Kha Varg (ख)",
    focusKeys: "[, [k",
    focusHindi: "खड़ा खरल खोल खेल खाना खुली खली खींचना ...",
    description:
      "खड़ा खरल खोल खेल खाना खुली खली खींचना खिचड़ी खून खया खा खबर खान खूब खेज खेलना खादी खेद खुशामद खर्च खुशियाँ खयी खाई खुद खेत खुलना खोलना खुदा खंजर खटास खट्टा खाली खत्म खाट खोखला खजूर खचाखच खोमचे खतरा खर्राटे खुमारी खरोंच खोपड़ी खारा खांसी खिलौना खलनायक खरहा खेमा",
    content:
      "[kM+k [kjy [kksy [ksy [kkuk [kqyh [kyh [khapuk f[kpM+h [kwu [k;k [kk [kcj [kku [kwc [kst [ksyuk [kknh [ksn [kq'kken [kpZ [kqf'k;ka [k;h [kkbZ [kqn [ksr [kqyuk [kksyuk [kqnk [katj [kVkl [kV~Vk [kkyh [kRe [kkV [kks[kyk [ktwj [kpk[kp [kkseps [krjk [kjkZVs [kqekjh [kjksap [kksiM+h [kkjk [kkalh f[kykSuk [kyuk;d [kjgk [ksek",
  },
  {
    id: 7,
    title: "Exercise 7",
    category: "Vyanjan - Ga Varg (ग)",
    focusKeys: "x, X, xz",
    focusHindi: "गाँव गोरी गोरी गुण ग्रंथ गया गयी गृह ...",
    description:
      "गाँव गोरी गोरी गुण ग्रंथ गया गयी गृह गृहस्थ गाली गुमान गुमानी गीला गिल्लू गरम गंवार गति गाना गाती गाया गला ग्रेजुएट गर्ज गर्जना गज गुरेज गूंगा गरजना गाड़ी गर्दन गुर्जर गुजरात गुलाम गुलाब गवाह गर्व गंभीर गाथा गन गहना गहन गगन गोरा गेहूं गुरु गलत गड़बड़ गोली गुस्सा गौरव गठरी गुर्दा गोल गुलाम गाद गेंद गर्म गर्मी गरीब गौर",
    content:
      "xkao xksjh xksjh xq.k xzaFk x;k x;h x`g x`gLFk xkyh xqeku xqekuh xhyk fxYyw xje xaokj xfr xkuk xkrh xk;k xyk xzstq,V xtZ xtZuk xt xqjst xwaxk xjtuk xkM+h xnZu xqtZj xqtjkr xqyke xqykc xokg xoZ xaHkhj xkFkk xu xguk xgu xxu xksjk xsgwa xq# xyr xM+cM+ xksyh xqLlk xkSjo xBjh xqnkZ xksy xqyke xkn xsan xeZ xehZ xjhc xkSj",
  },
  {
    id: 8,
    title: "Exercise 8",
    category: "Vyanjan - Gha Varg (घ)",
    focusKeys: "?, ?k",
    focusHindi: "घड़ा घड़ी घोड़ा घेरना घेराव घंटा घात घातक ...",
    description:
      "घड़ा घड़ी घोड़ा घेरना घेराव घंटा घात घातक घर घायल घबराना घटना घटी घुसना घसीटना घूमना घृणा घुटना घूंट घट घाघरा घना घोंसला घाव घटा घूसा घुसना घास घुमाना घोषणा घी घेर घोटाला घूंघरी घुलाई घबरा घमंड घृ घुलनशील घूंट घुमक्कड़ घूरना घाट घाटी घोर",
    content:
      "?kM+k ?kM+h ?kksM+k ?ksjuk ?ksjko ?kaVk ?kkr ?kkrd ?kj ?kk;y ?kcjkuk ?kVuk ?kVh ?kqluk ?klhVuk ?kweuk ?k`.kk ?kqVuk ?kwaV ?kV ?kk?kjk ?kuk ?kksalyk ?kko ?kVk ?kwlk ?kqluk ?kkl ?kqekuk ?kks\"k.kk ?kh ?ksj ?kksVkyk ?kwa?kjh ?kqykbZ ?kcjk ?keaM ?k` ?kqyu'khy ?kwaV ?kqeDdM+ ?kwjuk ?kkV ?kkVh ?kksj",
  },
  {
    id: 9,
    title: "Exercise 9",
    category: "Vyanjan - Cha Varg (च)",
    focusKeys: "p, P",
    focusHindi: "चाचा चोंच चंदा चंदू चंपू चंपा चंदेल चचेरा ...",
    description:
      "चाचा चोंच चंदा चंदू चंपू चंपा चंदेल चचेरा चोर चोरी चौकन्ना चबूतरा चम्मच चाटूकार चूसना चेक चेकर चेला चिमनी चाची चाटा चमड़ा चर्म चिंगारी चूल्हा चीख चंडीगढ़ चंचल चाल चालू चश्मा चकोर चार चंपारण चूड़ियां चूहू चापलूश चाप चरण चरवाहा चुप चुपचाप चैतन्य चेतना चेत चौधरी चाहे चीनी चीर चोट चाईना चुकी चुका चेयरमैन चुंगी चढ़ता चेहरा चमत्कार चौकस चूरन चंद चुटकी चटाई चौंधिया चलूँ चौखट चिकनाई चादर चुनना चुनाव चलना चावल चाहती चाहिए चाय चबाने चटनी चक्कर चूँकि चर्च चंगुल चेतावनी चर्चा चपरासी चौका चकला चून चाहत चींटी चलते चौकी चुप्पी चेचक चंगा चमक चाट चक्की चीज",
    content:
      "pkpk pksap pank panw paiw paik pansy ppsjk pksj pksjh pkSdUuk pcwrjk pEep pkVwdkj pwluk psd psdj psyk fpeuh pkph pkVk peM+k peZ fpaxkjh pwYgk ph[k paMhx<+ papy pky pkyw p'ek pdksj pkj paikj.k pwfM+;ka pwgw pkiyw'k pki pj.k pjokgk pqi pqipki pSrU; psruk psr pkS/kjh pkgs phuh phj pksV pkbZuk pqdh pqdk ps;jeSu pqaxh p<+rk psgjk peRdkj pkSdl pwju pan pqVdh pVkbZ pkSaf/k;k pywa pkS[kV fpdukbZ pknj pquuk pquko pyuk pkoy pkgrh pkfg, pk; pckus pVuh pDdj pwafd ppZ paxqy psrkouh ppkZ pijklh pkSdk pdyk pwu pkgr phaVh pyrs pkSdh pqIih pspd paxk ped pkV pDdh pht",
  },
  {
    id: 10,
    title: "Exercise 10",
    category: "Vyanjan - Chha Varg (छ)",
    focusKeys: "N, N~",
    focusHindi: "छाता छाले छांव छाया छात्र छाया छा छगन ...",
    description:
      "छाता छाले छांव छाया छात्र छाया छा छगन छलावा छलिया छछूंदर छह छूमंतर छोटा छोटी छैला छेद छक्का छमियां छल्ला छत्तीसगढ़ छाती छात्र छात्रा छाना छीक छिछोरा छोरा छोरी छेदी छेद छोटी छोटा छाछा छुआछूत छोड़ना छठ छोड़ना छोर छटांग छप्पर छूट छुड़ाने छल छत छटपटाहट छुट्टी छलांग छौंकना",
    content:
      "Nkrk Nkys Nkao Nk;k Nk= Nk;k Nk Nxu Nykok Nfy;k NNwanj Ng Nwearj NksVk NksVh NSyk Nsn NDdk Nfe;ka NYyk NRrhlx<+ Nkrh Nk= Nk=k Nkuk Nhd fNNksjk Nksjk Nksjh Nsnh Nsn NksVh NksVk NkNk NqvkNwr NksM+uk NB NksM+uk Nksj NVkax NIij NwV NqM+kus Ny Nr NViVkgV NqV~Vh Nykax NkSaduk",
  },
  {
    id: 11,
    title: "Exercise 11",
    category: "Vyanjan - Ja Varg (ज)",
    focusKeys: "t, T, t+",
    focusHindi: "जहाज जगह जहाँगीर जहीर जा जाना जान जाता ...",
    description:
      "जहाज जगह जहाँगीर जहीर जा जाना जान जाता जा जारी जाना जानना जानकार जानकर जानकारी जालिम जादू जादूगर जन्म जनता जिस्म जिगर जीवन जीना जिन जिंदगी जय जयकार जण जंजीर जगल जाध जमुना जागना जागो जैसे जाए जम्मू जगत जग जल जाकर जड़ जी जोर जाने जाए जब जीने जिस्म जुल्म जुमला जुगाड़ जवान जोश जबरदस्त जरा",
    content:
      "tgkt txg tgkaxhj tghj tk tkuk tku tkrk tk tkjh tkuk tkuuk tkudkj tkudj tkudkjh tkfye tknw tknwxj tUe turk ftLe ftxj thou thuk ftu ftanxh t; t;dkj t.k tathj txy tk/k tequk tkxuk tkxks tSls tk, tEew txr tx ty tkdj tM+ th tksj tkus tk, tc thus ftLe tqYe tqeyk tqxkM+ toku tks'k tcjnLr tjk",
  },
  {
    id: 12,
    title: "Exercise 12",
    category: "Vyanjan - Jha Varg (झ)",
    focusKeys: ">, >k",
    focusHindi: "झण्डा झण्डू झंकार झुझारू झाबर झलक झील झींगा ...",
    description:
      "झण्डा झण्डू झंकार झुझारू झाबर झलक झील झींगा झाग झेलम झूठ जूठन झांझर झन्नाहट झपट्टा झकझोर झोंपड़ी झल्लाहट झेपकड़ झटपट झुर्रिया झूलने झाड़ू झोक झुककर झुंड झोका झगड़ झुग्गी झाककर झेलना झटका झक झपकी",
    content:
      ">k.Mk >k.Mw >kadkj >kq>kk: >kkcj >kyd >khy >khaxk >kkx >ksye >kwB twBu >kka>kj >kUukgV >kiV~Vk >kd>kksj >kksaiM+h >kYykgV >ksidM+ >kViV >kqfjZ;k >kwyus >kkM+w >kksd >kqddj >kqaM >kksdk >kxM+ >kqXxh >kkddj >ksyuk >kVdk >kd >kidh",
  },
  {
    id: 13,
    title: "Exercise 13",
    category: "Vyanjan - Ta/Ttha Varg (ट, ठ)",
    focusKeys: "V, B, Vª",
    focusHindi: "टमाटर टंकण ट्रक टनाटन टन टाबर टाटी टोली ...",
    description:
      "टमाटर टंकण ट्रक टनाटन टन टाबर टाटी टोली टीला टांग टोहना टैक्सी टोल टैक्स टिन टंगस्टन टक्कर टूटता टूटा टुकड़े टलना टिप–टिप टल टँगी टोपी टेकड़ी ट्रेन ट्रेनिंग ट्रस्ट ट्रूप टैगोर टाट ठीक तड़ा ठहरो ठहराव ठंड ठेला ठाकुर ठुमक ठुमका ठेकेदार ठेका ठेंगा ठहका ठाठ ठंड ठोकर ठूंठ ठाला ठानली",
    content:
      "VekVj Vad.k Vjd VukVu Vu Vkcj VkVh Vksyh Vhyk Vkax Vksguk VSDlh Vksy VSDl fVu VaxLVu VDdj VwVrk VwVk VqdM+s Vyuk fVi fVi Vy Vaxh Vksih VsdM+h Vjsu Vjsfuax VjLV Vjwi VSxksj VkV Bhd rM+k Bgjks Bgjko BM Bsyk Bkdqj Bqed Bqedk Bsdsnkj Bsdk Bsaxk Bgdk BkB BaM Bksdj BwaB Bkyk Bkuyh",
  },
  {
    id: 14,
    title: "Exercise 14",
    category: "Vyanjan - Dda/Ddha Varg (ड, ढ)",
    focusKeys: "M, <, M, <",
    focusHindi: "डॉक्टर डॉ डंडा डोर डगमगाना डाला डालना डर ...",
    description:
      "डॉक्टर डॉ डंडा डोर डगमगाना डाला डालना डर डंका डालें डाल डाका डाकू डंसना डांस डाली डपटने डेढ़ डामर डेरा डली डूबा डूबना डोले डब्बा डिब्बा डरते डालेगी डालकर डुलाते डीलडौल डक डीग डमरू डलिया डालिया डूंगरगढ़ डाक डाकघर ढक्कन ढंकना ढलान ढुलाई ढका ढकना ढले ढेर ढल ढाल ढो ढोंग ढोंगी ढोना ढोया ढेर ढेरिया ढंग ढूंढो ढील ढीली ढाई",
    content:
      "MkWDVj MkW MaMk Mksj Mxexkuk Mkyk Mkyuk Mj Madk Mkysa Mky Mkdk Mkdw Maluk Mkal Mkyh MiVus Ms<+ Mkej Msjk Myh Mwck Mwcuk Mksys MCck fMCck Mjrs Mkysxh Mkydj Mqykrs MhyMkSy Md Mhx Me: Mfy;k Mkfy;k Mwaxjx<+ Mkd Mkd?kj <Ddu <aduk <yku <qykbZ <dk <duk <ys <sj <y <ky <ks <ksax <ksaxh <ksuk <ks;k <sj <sfj;k <ax <wa<ks <hy <hyh <kbZ",
  },
  {
    id: 15,
    title: "Exercise 15",
    category: "Vyanjan - Ta Varg (त)",
    focusKeys: "r, R, Rk",
    focusHindi: "तो तीन तेज तुम्हारा तुम तुम्हारी तुम्हीं तांबा ...",
    description:
      "तो तीन तेज तुम्हारा तुम तुम्हारी तुम्हीं तांबा तारीख तलवार तंग तरल तुरंत तांगा ताली ताश तालीम तीव्र तरह तुमसे तोला तुम्हे तुमने तोड़ तुड़वाकर ताकत ताखर तान ताना तानी तानसेन ताम्र तैयारी तरीके तरीका ताजमहल तरफ तमाशा तक तेल तब तफसील तारपील तसवीर तपिश तनख्वाह तभी तांकना तहसीन ताकना ताबीज तार तुरंत तप तपस्या तू तेरा तेरे तदुरुस्त तट तनिक तसल्ली तेरे तूफान तीस तय ताबड़तोड़ तरसना ताव तर्क तरसा तड़का",
    content:
      "rks rhu rst rqEgkjk rqe rqEgkjh rqEgha rkack rkjh[k ryokj rax rjy rqjar rkaxk rkyh rk'k rkyhe rhOj rjg rqels rksyk rqEgs rqeus rksM+ rqM+okdj rkdr rk[kj rku rkuk rkuh rkulsu rkEj rS;kjh rjhds rjhdk rktegy rjQ rek'kk rd rsy rc rQlhy rkjihy rlohj rfi'k ru[okg rHkh rkaduk rglhu rkduk rkcht rkj rqjar ri riL;k rw rsjk rsjs rnq#Lr rV rfud rlYyh rsjs rwQku rhl r; rkcM+rksM+ rjluk rko rdZ rjlk rM+dk",
  },
  {
    id: 16,
    title: "Exercise 16",
    category: "Vyanjan - Da Varg (द)",
    focusKeys: "n, 4, |, }",
    focusHindi: "देगा देगी देना देन दी दादा दौड़ा दाद ...",
    description:
      "देगा देगी देना देन दी दादा दौड़ा दाद दोबारा दरवाजा दरी दुआ दलिया दस्तूर दस्ताना दामन दाग दरिया दाल दक्षिणा दामन दही देख दूसरी दया दूर दाहिना दाढ़ी देखना दुबला देश दो दाम दबाकर दबाना दबंग दशहरा दूने दंगा देवी देवता देहात देहाती दुकान दीवार देशी दवा देखकर दर्द दम्य दम दुकानदार दोपहर देर दिया दीपक दिल दयनीय दुःख दारू दस दो दोनों देह दुनिया देखमाल दावत दूध दुश्मन दाना दे दैत्य दैत्याकार",
    content:
      "nsxk nsxh nsuk nsu nh nknk nkSM+k nkn nksckjk njoktk njh nqvk nfy;k nLrwj nLrkuk nkeu nkx nfj;k nky nf{k.kk nkeu ngh ns[k nwljh n;k nwj nkfguk nk<+h ns[kuk nqcyk ns'k nks nke nckdj nckuk ncax n'kgjk nwus naxk nsoh nsork nsgkr nsgkrh nqdku nhokj ns'kh nok ns[kdj nnZ nE; ne nqdkunkj nksigj nsj fn;k nhid fny n;uh; nq%[k nk: nl nks nksuksa nsg nqfu;k ns[keky nkor nw/k nq'eu nkuk ns nSR; nSR;kdkj",
  },
  {
    id: 17,
    title: "Exercise 17",
    category: "Vyanjan - Dha Varg (ध)",
    focusKeys: "/, /k",
    focusHindi: "धनुष धान धन धार धमकी धूम धुंधली धूल ...",
    description:
      "धनुष धान धन धार धमकी धूम धुंधली धूल धूप धोना धोकर धोखा धैर्य धीरज धनवन्तरी धनवान धीरे धीमे धीना धीमी धोती धसा धसे धमक धुन धक्का धंधा धुलाई धारण धड़ल्ले धरा धरती धौस धोरा धधकना धमनियां ध्वनि धुध धड़कन धड़क धनपत धनराज धर्म धार्मिक धारावाहिक धाराप्रवाह धरातल धोखाधड़ी धर्मवीर धर्मराज धर्मान्ध धर्मा",
    content:
      "/kuq\"k /kku /ku /kkj /kedh /kwe /kqa/kyh /kwy /kwi /kksuk /kksdj /kks[kk /kS;Z /khjt /kuoUrjh /kuoku /khjs /khes /khuk /kheh /kksrh /klk /kls /ked /kqu /kDdk /ka/kk /kqykbZ /kkj.k /kM+Yys /kjk /kjrh /kkSl /kksjk /k/kduk /kefu;ka /ofu /kq/k /kM+du /kM+d /kuir /kujkt /keZ /kkfeZd /kkjkokfgd /kkjkizokg /kjkry /kks[kk/kM+h /keZohj /keZjkt /kekZU/k /kekZ",
  },
  {
    id: 18,
    title: "Exercise 18",
    category: "Vyanjan - Na Varg (न)",
    focusKeys: "u, U, .k",
    focusHindi: "नल नया नयी नई नूतन नयन नाम नाक ...",
    description:
      "नल नया नयी नई नूतन नयन नाम नाक नासिका नाखून नाली नाला नशा नाड़ी नहीं न नाप नीली नीला नाटक नाती नीचे नौ नीचे नटनी नाराज नारी नबर नवम्बर नही नोट ने नगद नेता नए नायब नायक नकल नब्ज नम नम नजर नुकसान नौकर नौकरी नौकरानी नजराना नई नदारद नजदीक नाग नागिन नग्न नंगा नैसर्गिक नवीन नम्रता निलेश नरेश नाना नानी नहाना नहलाना नामि नाजुक",
    content:
      "uy u;k u;h ubZ uwru u;u uke ukd ukfldk uk[kwu ukyh ukyk u'kk ukM+h ugha u uki uhyh uhyk ukVd ukrh uhps ukS uhps uVuh ukjkt ukjh ucj uoEcj ugh uksV us uxn usrk u, uk;c uk;d udy uCt ue ue utj uqdlku ukSdj ukSdjh ukSdjkuh utjkuk ubZ unkjn utnhd ukx ukfxu uXu uaxk uSlfxZd uohu uEjrk fuys'k ujs'k ukuk ukuh ugkuk ugykuk ukfe uktqd",
  },
  {
    id: 19,
    title: "Exercise 19",
    category: "Vyanjan - Pa Varg (प)",
    focusKeys: "i, I, iz",
    focusHindi: "पतंग पत्ता पति पत्नी परमेश्वर परम पिता पात्र ...",
    description:
      "पतंग पत्ता पति पत्नी परमेश्वर परम पिता पात्र पहाड़ पर्वत पूजा पूजनीय पत्रिका पंप पता पाला पतझड़ पालक पुकार पर पीर पहले पैसा परदा पर्दा पूर्वज पड़ोसी पड़े परन्तु पाप पुण्य पहचान पुतला पढ़ना पढ़ाई परिचय पाना पास पैदल पजामा पतलून परिणाम पुराना पर पूछा पुड़िया पेड़ पट्टी परसों पुलिस पैगाम पैगम्बर पैंटर पीना पीया परीक्षा पूरब पश्चिम पंडित पेशा पदार्थ पंक्ति पीछे परेशान पकड़ पसीना पटवारी पुरस्कार पात्र पीठ पंखा पेट पीपल पक्का",
    content:
      "irax iRrk ifr iRuh ijes'oj ije firk ik= igkM+ ioZr iwtk iwtuh; if=dk iai irk ikyk ir>kM+ ikyd iqdkj ij ihj igys iSlk ijnk inkZ iwoZt iM+kslh iM+s ijUrq iki iq.; igpku iqryk i<+uk i<+kbZ ifjp; ikuk ikl iSny itkek irywu ifj.kke iqjkuk ij iwNk iqfM+;k isM+ iV~Vh ijlksa iqfyl iSxke iSxEcj iSaVj ihuk ih;k ijh{kk iwjc if'pe iafMr is'kk inkFkZ iafDr ihNs ijs'kku idM+ ilhuk iVokjh iqjLdkj ik= ihB ia[kk isV ihiy iDdk",
  },
  {
    id: 20,
    title: "Exercise 20",
    category: "Vyanjan - Pha & Tha Varg (फ, थ)",
    focusKeys: "Q, F, Fk",
    focusHindi: "फल फैलाव फैल फैलाना फेंका फेंकना फाड़ा फर्स्ट ...",
    description:
      "फल फैलाव फैल फैलाना फेंका फेंकना फाड़ा फर्स्ट फटकार फ्री फ्रांस फेरी फाटक फौरन फ्रैंक फौरन फूट फाटक फालतू फुरसत फँसना फूलना फूल फूल फुहार फोकट फलॉन्ग फूटा फाँसी फुदका फटाफट फास्ट फौज फेर फुर्ति फटा फीका फेरे फसल फैसला फैन फैंसी फर्क फॉर्म फ्री फावड़ा था था। थे थे। थी थी। थे थोड़ा थोड़े थाली थापर थावर थन थपकी थपथपाना थम थमना थाप थैला थक थप्पड़ थाना थानेदार थरथरा थर–थर थैली थैली",
    content:
      "Qy QSyko QSy QSykuk Qsadk Qsaduk QkM+k QLVZ QVdkj Qzh Qzkal Qsjh QkVd QkSju QzSad QkSju QwV QkVd Qkyrw Qqjlr Qaluk Qwyuk Qwy Qwy Qqgkj QksdV QykWUx QwVk Qkalh Qqndk QVkQV QkLV QkSt Qsj QqfrZ QVk Qhdk Qsjs Qly QSlyk QSu QSalh QdZ QkWeZ Qzh QkoM+k Fkk FkkA Fks FksA Fkh FkhA Fks FkksM+k FkksM+s Fkkyh Fkkij Fkkoj Fku Fkidh FkiFkikuk Fke Fkeuk Fkki FkSyk Fkd FkIiM+ Fkkuk Fkkusnkj FkjFkjk Fkj Fkj FkSyh FkSyh",
  },
  {
    id: 21,
    title: "Exercise 21",
    category: "Vyanjan - Ba Varg (ब)",
    focusKeys: "c, C, cz",
    focusHindi: "बकरी बनवारी बाबर बाहुबली बहार बाहर बांका बांसुरी ...",
    description:
      "बकरी बनवारी बाबर बाहुबली बहार बाहर बांका बांसुरी बेचैन बेमेल बेखबर बाबा बुआ बुआई बंजर बन बत्ती बस बांकुरे बबलू बाकी बास बाल बालक बालिका बाजार बेज बढ़ती बजाय बनावट बेशक बनेगा बच्चा बेसुध बद बार–बार बात बंधा बोल बेटा बातें बराबर बंटे बीता बीच बड़ा बैठा बैठी बोला बाद बदला बदले बढ़कर बढ़ना बजाया बजे बाद बेचने बाबू बताते बेचने बनाने बीमार बटोरा बनाने बच बनवाते",
    content:
      "cdjh cuokjh ckcj ckgqcyh cgkj ckgj ckadk ckalqjh cspSu csesy cs[kcj ckck cqvk cqvkbZ catj cu cRrh cl ckadqjs ccyw ckdh ckl cky ckyd ckfydk cktkj cst c<+rh ctk; cukoV cs'kd cusxk cPpk cslq/k cn ckj ckj ckr ca/kk cksy csVk ckrsa cjkcj caVs chrk chp cM+k cSBk cSBh cksyk ckn cnyk cnys c<+dj c<+uk ctk;k cts ckn cspus ckcw crkrs cspus cukus chekj cVksjk cukus cp cuokrs",
  },
  {
    id: 22,
    title: "Exercise 22",
    category: "Vyanjan - Bha Varg (भ)",
    focusKeys: "H, Hk, Hkz",
    focusHindi: "भगवान भारत भयंकर भामाशाह भारतीय भरत भूमि भीतर ...",
    description:
      "भगवान भारत भयंकर भामाशाह भारतीय भरत भूमि भीतर भूल भूलकर भालू भान भानुमति भी भीड़ भेड़ भड़क भय भावना भयानक भाव भोर भज भजन भूमिका भूतल भूरा भला भलाई भारी भागा भागे भेजा भेजना भेजी भाषण भाई भाँप भाट भीतर भेजकर भरा भींचना भौंह भयभीत भुलावा भरोसा भरन भीख भिखारी भात भारकर भाला भेद भेदकर भांति भूचाल",
    content:
      "Hkxoku Hkkjr Hk;adj Hkkek'kkg Hkkjrh; Hkjr Hkwfe Hkhrj Hkwy Hkwydj Hkkyw Hkku Hkkuqefr Hkh HkhM+ HksM+ HkM+d Hk; Hkkouk Hk;kud Hkko Hkksj Hkt Hktu Hkwfedk Hkwry Hkwjk Hkyk HkykbZ Hkkjh Hkkxk Hkkxs Hkstk Hkstuk Hksth Hkk\"k.k HkkbZ Hkkai HkkV Hkhrj Hkstdj Hkjk Hkhapuk HkkSag Hk;Hkhr Hkqykok Hkjkslk Hkju Hkh[k fHk[kkjh Hkkr Hkkjdj Hkkyk Hksn Hksndj Hkkafr Hkwpky",
  },
  {
    id: 23,
    title: "Exercise 23",
    category: "Vyanjan - Ma Varg (म)",
    focusKeys: "e, E",
    focusHindi: "मछली मरा मरेगा मान मानहानि मन मुस्कान मुकदमा ...",
    description:
      "मछली मरा मरेगा मान मानहानि मन मुस्कान मुकदमा मील मीटन मीटर मिस्टर मैडम मेम मेमना मेला मैल मना माना मनाया मै मे मुँह मुसीबत माँग मर मुझे मुख्य मुसलमान मोर मेरा मेरे मानो माथा मूर्ति माता मा माँ मत मै मारा महीना मारपीट मनायी माने मनुहार मौसम मरीज मुखाग्नि गूसा मम्मी मामा मालूम मस्त मस्ती मैना मांडवी माया मगर मास्टर मीरा माला मास",
    content:
      "eNyh ejk ejsxk eku ekugkfu eu eqLdku eqdnek ehy ehVu ehVj feLVj eSMe ese eseuk esyk eSy euk ekuk euk;k eS es eqag eqlhcr ekax ej eq>ks eq[; eqlyeku eksj esjk esjs ekuks ekFkk ewfrZ ekrk ek eka er eS ekjk eghuk ekjihV euk;h ekus euqgkj ekSle ejht eq[kkfXu xwlk eEeh ekek ekywe eLr eLrh eSuk ekaMoh ek;k exj ekLVj ehjk ekyk ekl",
  },
  {
    id: 24,
    title: "Exercise 24",
    category: "Vyanjan - Ya Varg (य)",
    focusKeys: ";, ;K",
    focusHindi: "यज्ञ यह यहाँ ये यही यार यम यमराज ...",
    description:
      "यज्ञ यह यहाँ ये यही यार यम यमराज योग्य यंत्र यदि यह या यानी यदु यादव यदा–यदा यूँ यद्यपि याद यादें यादगार यलगार यशवंत यशोदा यशोधरा योगेश यात्रा यहूदी यकीन यकीनन यादृच्छिक युद्ध ये यह युधिष्ठिर यशपाल योगदान यथार्थ यथा यमदूत यों यश युग युगान्त युवा युवाम यूनिवर्सिटी यूरोप युक्ति योजना",
    content:
      ";K ;g ;gka ;s ;gh ;kj ;e ;ejkt ;ksX; ;a= ;fn ;g ;k ;kuh ;nq ;kno ;nk ;nk ;wa ;|fi ;kn ;knsa ;knxkj ;yxkj ;'koar ;'kksnk ;'kks/kjk ;ksxs'k ;k=k ;gwnh ;dhu ;dhuu ;kn`fPNd ;qn~/k ;s ;g ;qf/kf\"Bj ;'kiky ;ksxnku ;FkkFkZ ;Fkk ;enwr ;ksa ;'k ;qx ;qxkUr ;qok ;qoke ;wfuoflZVh ;wjksi ;qfDr ;kstuk",
  },
  {
    id: 25,
    title: "Exercise 25",
    category: "Vyanjan - Ra Varg (र)",
    focusKeys: "j, Z, :",
    focusHindi: "रथ राजकुमार राजेश राजा रात्रि रात राम रामेश्वरम ...",
    description:
      "रथ राजकुमार राजेश राजा रात्रि रात राम रामेश्वरम राधा रंग रंगीला रास रहा रहे रही रहूँगा रह रही रहा रक्त रंजित रणभूमि रेखा रखना रखे रखी रोष रेखा रेखांकन रसोई रहेगा रहेगी रहेंगे रोजगारी रोजगार रोका रोगन रोग रत्ती रखवाई रजिस्ट्री रस रोटी रेलवे रेल राल राष्ट्र राष्ट्रकूट रखा राजी रोज रोना रोजा रैता राशन रास्ता राय रईस रमणीय रखते रहस्य रहम रहनुमा राख रौदा रखाई रजाई राज राष्ट्रीय रपट रिपोर्ट रवाना रवानगी रहूँ रेशम",
    content:
      "jFk jktdqekj jkts'k jktk jkf= jkr jke jkes'oje jk/kk jax jaxhyk jkl jgk jgs jgh jgwaxk jg jgh jgk jDr jaftr j.kHkwfe js[kk j[kuk j[ks j[kh jks\"k js[kk js[kkadu jlksbZ jgsxk jgsxh jgsaxs jkstxkjh jkstxkj jksdk jksxu jksx jRrh j[kokbZ jftLVjh jl jksVh jsyos jsy jky jk\"Vj jk\"VjdwV j[kk jkth jkst jksuk jkstk jSrk jk'ku jkLrk jk; jbZl je.kh; j[krs jgL; jge jguqek jk[k jkSnk j[kkbZ jtkbZ jkt jk\"Vjh; jiV fjiksVZ jokuk jokuxh jgwa js'ke",
  },
  {
    id: 26,
    title: "Exercise 26",
    category: "Vyanjan - La Varg (ल)",
    focusKeys: "y, Y",
    focusHindi: "लट्टू लड्डू लाड़ला लाड़ो लंका लाया लंकेश्वर लाकर ...",
    description:
      "लट्टू लड्डू लाड़ला लाड़ो लंका लाया लंकेश्वर लाकर लॉक लीक लकीर लगन लक्षण लक्ष्मण लूला लंगड़ा लाग लपट लपेट लपेटा लश्कर लदा लद लाल लालिमा लेकर लिया लेन लैम्प लेस ला लेलूँ लोग लगे लगा लटका लाचार ले लड़की लटकाया लौटा लौटेगा लेलो लगी लेना लगाया लग लेती लेता लड़ाई ललकार लड़कपन लगाने लवण लाइन लेबल लू लेकिन लोटा लक्ष्मी लपका लादी लगेगी लगभग ली",
    content:
      "yV~Vw yM~Mw ykM+yk ykM+ks yadk yk;k yads'oj ykdj ykWd yhd ydhj yxu y{k.k y{e.k ywyk yaxM+k ykx yiV yisV yisVk y'dj ynk yn yky ykfyek ysdj fy;k ysu ySEi ysl yk ysywa yksx yxs yxk yVdk ykpkj ys yM+dh yVdk;k ykSVk ykSVsxk ysyks yxh ysuk yxk;k yx ysrh ysrk yM+kbZ yydkj yM+diu yxkus yo.k ykbu yscy yw ysfdu yksVk y{eh yidk yknh yxsxh yxHkx yh",
  },
  {
    id: 27,
    title: "Exercise 27",
    category: "Vyanjan - Va Varg (व)",
    focusKeys: "o, O",
    focusHindi: "वन वकील वास्तव वास्तविक वहाँ वहाँ वैसे वे ...",
    description:
      "वन वकील वास्तव वास्तविक वहाँ वहाँ वैसे वे वह वाह–वाही वस्त्र वापस वाला वाली वेशभूषा वर्ष वरुण वर्णमाला वाले वही वही वालो वसूल वैद्य व्यर्थ वीरान वर्दी वीर वीरता विश्व विकार विमर्श विचार वैचारिक व्यवहार व्यावहारिक वासना वास्तु वस्तु विक्रय विक्रेता विधि विधान वीण वक्त वक्ता व्यक्तव्य व्यवस्था व्याधि व्याकुल वंदना वंदेमातरम् वाकई वाकया वाक्य वाचनालय वाचन",
    content:
      "ou odhy okLro okLrfod ogka ogka oSls os og okg okgh oL= okil okyk okyh os'kHkw\"kk o\"kZ o#.k o.kZekyk okys ogh ogh okyks olwy oS| O;FkZ ohjku onhZ ohj ohjrk fo'o fodkj foe'kZ fopkj oSpkfjd O;ogkj O;kogkfjd okluk okLrq oLrq fodz; fodzsrk fof/k fo/kku oh.k oDr oDrk O;DrO; O;oLFkk O;kf/k O;kdqy oanuk oansekrjE okdbZ okd;k okD; okpuky; okpu",
  },
  {
    id: 28,
    title: "Exercise 28",
    category: "Vyanjan - Sha Varg (श)",
    focusKeys: "'k, ', J",
    focusHindi: "शंकर शंका शोक शालीमार शाश्वत शर्मा शर्मिला शरीर ...",
    description:
      "शंकर शंका शोक शालीमार शाश्वत शर्मा शर्मिला शरीर शरीफ शर्म शायद शेष शहर शान शोर शोरगुल शांत शुरु शुद्ध शुरुआत शामिल शैलेश शाही शाह शहजादा शहीद शहादत शान्तनु शान्ति शान्तित्रिय शराब शीशी शिशु शेड शक्कर शल्य शल्यक्रिया शशांक शरम शागिर्द शारीर शास्त्री शहरी शादी शून्य शक्ति शब्द शब्दश शब्दों शाब्दिक शीत शीतल शैतान शैतानी शह शीशम शुरू शर्त शामिल शौक शौचालय शौच",
    content:
      "'kadj 'kadk 'kksd 'kkyhekj 'kk'or 'kekZ 'kfeZyk 'kjhj 'kjhQ 'keZ 'kk;n 'ks\"k 'kgj 'kku 'kksj 'kksjxqy 'kkar 'kq# 'kqn~/k 'kq#vkr 'kkfey 'kSys'k 'kkgh 'kkg 'kgtknk 'kghn 'kgknr 'kkUruq 'kkfUr 'kkfUrf=; 'kjkc 'kh'kh f'k'kq 'ksM 'kDdj 'kY; 'kY;fdz;k 'k'kkad 'kje 'kkfxnZ 'kkjhj 'kkL=h 'kgjh 'kknh 'kwU; 'kfDr 'kCn 'kCn'k 'kCnksa 'kkfCnd 'khr 'khry 'kSrku 'kSrkuh 'kg 'kh'ke 'kq: 'krZ 'kkfey 'kkSd 'kkSpky; 'kkSp",
  },
  {
    id: 29,
    title: "Exercise 29",
    category: "Vyanjan - Sa Varg (स)",
    focusKeys: "l, L",
    focusHindi: "सर्प सांप साँप सपोला साहस साग सब्जी सुंदर ...",
    description:
      "सर्प सांप साँप सपोला साहस साग सब्जी सुंदर सुन्दर साहिल से संग सा सी से सुन सका सकेगा सकी से सामने साथ सहसा समतल सामर्थ्य स्मरण सहसा साँचे सच्चा सच सच्ची सच्चाई सत्य सत्यवादी सत्यवान संबंध सहारा स्पष्ट संबोधन सब सभी सरल सफेद सम्मिश्रण सारा सारे सबसे सबका सबकी सबके सावित्री साता सोचना सोचा साहब सप्ताह संख्या संस्कार सरकार सरकारी संयोग सजावट साला साली साथ सीधी सीरा सुना स्वयं सीधा सत्कार सारका सीधी संगल स्वीकृति",
    content:
      "liZ lkai lkai liksyk lkgl lkx lCth lqanj lqUnj lkfgy ls lax lk lh ls lqu ldk ldsxk ldh ls lkeus lkFk lglk lery lkeF;Z Lej.k lglk lkaps lPpk lp lPph lPpkbZ lR; lR;oknh lR;oku laca/k lgkjk Li\"V lacks/ku lc lHkh ljy lQsn lfEeJ.k lkjk lkjs lcls lcdk lcdh lcds lkfo=h lkrk lkspuk lkspk lkgc lIrkg la[;k laLdkj ljdkj ljdkjh la;ksx ltkoV lkyk lkyh lkFk lh/kh lhjk lquk Lo;a lh/kk lRdkj lkjdk lh/kh laxy Lohd`fr",
  },
  {
    id: 30,
    title: "Exercise 30",
    category: "Vyanjan - Ha Varg (ह)",
    focusKeys: "g, º, G",
    focusHindi: "हल ही हम हाथ होना होने हुआ हुई ...",
    description:
      "हल ही हम हाथ होना होने हुआ हुई हो हटना हट हटे हटा होश होती होता होते हैं है हमारा हमारी हमारे हुआ होकर हमेशा हेलमेट हलवा हींग हालचाल हवा हवाई हुस्न हुँकार हमको हसी हंसाया हंसना होली हीरा हँसी हताश हस्त हाथी हांडी हलवाई हर हरी हरियाणा हकीम होगी होंगे हजार हकलाया हाजिर हाजिरी हस्ती होगा हैरानी हरामी हराम हैरान होश हाँ हा होशियार हालत हालात हल्दी हल्दीघाटी हल्द्वानी हल्का हल्की हिलौरे हिला हक हफ्ता हाल हरकत हकीकत हिसाब हिसाब हिजाब हत्या हरगिज",
    content:
      "gy gh ge gkFk gksuk gksus gqvk gqbZ gks gVuk gV gVs gVk gks'k gksrh gksrk gksrs gSa gS gekjk gekjh gekjs gqvk gksdj ges'kk gsyesV gyok ghax gkypky gok gokbZ gqLu gqadkj gedks glh galk;k galuk gksyh ghjk galh grk'k gLr gkFkh gkaMh gyokbZ gj gjh gfj;k.kk gdhe gksxh gksaxs gtkj gdyk;k gkftj gkftjh gLrh gksxk gSjkuh gjkeh gjke gSjku gks'k gka gk gksf'k;kj gkyr gkykr gYnh gYnh?kkVh gY}kuh gYdk gYdh fgykSjs fgyk gd gQ~rk gky gjdr gdhdr fglkc fglkc fgtkc gR;k gjfxt",
  },
  {
    id: 31,
    title: "Exercise 31",
    category: "Sanyukt Vyanjan (संयुक्त व्यंजन - क्ष, त्र, ज्ञ, श्र, ष)",
    focusKeys: "{k, =, K, J, \\\\\\\\",
    focusHindi: "षट्कोण षड्यंत्र क्षण क्षुब्ध क्षोभ क्षमा क्षेत्र क्षत्रिय ...",
    description:
      "षट्कोण षड्यंत्र क्षण क्षुब्ध क्षोभ क्षमा क्षेत्र क्षत्रिय क्षति–पूर्ति क्षय त्रास त्रासदी त्राहि त्रिशूल त्रिदेव त्रिमूर्ति त्रिनेत्र त्रिवेन्द्रम त्रिवेदी त्रिवेणी त्रिकोणमिति त्रस्त त्रिकोण त्रिकाल ज्ञानी ज्ञान ज्ञाता ज्ञापन ज्ञापित",
    content:
      "\"kV~dks.k \"kM~;a= {k.k {kqC/k {kksHk {kek {ks= {kf=; {kfr iwfrZ {k; =kl =klnh =kfg f='kwy f=nso f=ewfrZ f=us= f=osUnze f=osnh f=os.kh f=dks.kfefr =Lr f=dks.k f=dky Kkuh Kku Kkrk Kkiu Kkfir",
  },
];

export const HINDI_TYPE_PARAGRAPH_LESSONS: HindiLesson[] = [
  {
    id: 1,
    title: 'Exercise : 1/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'कर्नाटक सरकार राज्य के प्राइवेट सेक्टर में स्थानीय निवासियों को सौ फीसदी रिजर्वेशन देने जा रही है। यह कोटा सिर्फ \'ब्लू कॉलर जॉब\' यानी कामगार श्रेणी के लिए होगा। इसके लिए राज्य के श्रम विभाग ने 1961 के \'कर्नाटक औद्योगिक रोजगार (स्थायी आदेश)\' के नियमों में संशोधन कर एक मसौदा तैयार किया है। लॉ डिपार्टमेंट की ओर से इन संशोधनों को मंजूरी मिलते ही इसे लागू कर दिया जाएगा। हालांकि, सरकार ने इन्फोटेक और बायोटेक सेक्टर को अपने इस निर्णय से अलग रखा है, क्योंकि ये क्षेत्र 2014 से पांच साल के लिए कर्नाटक औद्योगिक रोजगार (स्थायी आदेश) नियमों के दायरे से बाहर हैं।',
    description: 'Exam passage 1/50 (104 words)',
    content:
      'dukZVd ljdkj jkT; ds izkbosV lsDVj esa LFkkuh; fuokfl;ksa dks lkS Qhlnh fjtosZ\'ku nsus tk jgh gSA ;g dksVk flQZ ^Cyw dkWyj tkWc* ;kuh dkexkj Js.kh ds fy, gksxkA blds fy, jkT; ds Je foHkkx us 1961 ds ^dukZVd vkS|ksfxd jkstxkj (LFkk;h vkns\'k)* ds fu;eksa esa la\'kks/ku dj ,d elkSnk rS;kj fd;k gSA ykW fMikVZesaV dh vksj ls bu la\'kks/kuksa dks eatwjh feyrs gh bls ykxw dj fn;k tk,xkA gkykafd] ljdkj us bUQksVsd vkSj ck;ksVsd lsDVj dks vius bl fu.kZ; ls vyx j[kk gS] D;ksafd ;s {ks= 2014 ls ikap lky ds fy, dukZVd vkS|ksfxd jkstxkj (LFkk;h vkns\'k) fu;eksa ds nk;js ls ckgj gSaA',
  },
  {
    id: 2,
    title: 'Exercise : 2/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इन दोनों के अलावा राज्य के उन सभी निजी उद्योगों पर आरक्षण लागू होगा, जिन्हें राज्य सरकार की औद्योगिक नीति के तहत छूट मिल रही है। यदि कोई कंपनी इसे नहीं मानेगी तो उसे दी जाने वाली छूट समाप्त कर दी जाएगी। कर्नाटक सरकार का यह कदम वाकई चौंकाने वाला है। अव्वल तो यह निजी क्षेत्र के कामकाज में दखल देने का मामला है। ठीक है कि सरकार उद्योग लगाने के लिए जमीन, बिजली और दूसरी कई सुविधाएं देती है, लेकिन बदले में उद्योग भी सरकार की राजस्व वृद्धि में योगदान देते हैं और राज्य को तरक्की की राह पर ले जाते हैं। किस उद्योग में किस काम के लिए कैसे कर्मचारियों की जरूरत पड़ेगी, इसके अपने पैमाने हैं, जिसका निर्धारण उद्योग विशेषज्ञ ही करते हैं।',
    description: 'Exam passage 2/50 (126 words)',
    content:
      'bu nksuksa ds vykok jkT; ds mu lHkh futh m|ksxksa ij vkj{k.k ykxw gksxk] ftUgsa jkT; ljdkj dh vkS|ksfxd uhfr ds rgr NwV fey jgh gSA ;fn dksbZ daiuh bls ugha ekusxh rks mls nh tkus okyh NwV lekIr dj nh tk,xhA dukZVd ljdkj dk ;g dne okdbZ pkSadkus okyk gSA vOoy rks ;g futh {ks= ds dkedkt esa n[ky nsus dk ekeyk gSA Bhd gS fd ljdkj m|ksx yxkus ds fy, tehu] fctyh vkSj nwljh dbZ lqfo/kk,a nsrh gS] ysfdu cnys esa m|ksx Hkh ljdkj dh jktLo o`fn~/k esa ;ksxnku nsrs gSa vkSj jkT; dks rjDdh dh jkg ij ys tkrs gSaA fdl m|ksx esa fdl dke ds fy, dSls deZpkfj;ksa dh t:jr iM+sxh] blds vius iSekus gSa] ftldk fu/kkZj.k m|ksx fo\'ks"kK gh djrs gSaA',
  },
  {
    id: 3,
    title: 'Exercise : 3/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'अगर स्थानीयता ही एकमात्र पैमाना बन जाए तो उद्योग का उत्पादन प्रभावित हो सकता है। फिर यह भी याद रखने की जरूरत है कि उदारीकरण की व्यवस्था में सिर्फ पूंजी और माल ही नहीं, मजदूरों की आवाजाही भी एक बड़ा तत्व है। आज अगर बेंगलुरु एक आईटी हब बना है, तो इसके पीछे न सिर्फ कर्नाटक बल्कि पूरे देश और दुनिया के विशेषज्ञों और श्रमिकों का हाथ है। आज देश के जो भी राज्य खुशहाल हुए हैं, उनकी तरक्की में दूसरे प्रदेश के लोगों का भी किसी न किसी रूप में योगदान है। दरअसल हमारे संविधान ने ही यह व्यवस्था कर रखी है कि देश का कोई भी नागरिक देश के किसी भी हिस्से में जाकर रोजी-रोजगार हासिल कर सकता है।',
    description: 'Exam passage 3/50 (121 words)',
    content:
      'vxj LFkkuh;rk gh ,dek= iSekuk cu tk, rks m|ksx dk mRiknu izHkkfor gks ldrk gSA fQj ;g Hkh ;kn j[kus dh t:jr gS fd mnkjhdj.k dh O;oLFkk esa flQZ iwath vkSj eky gh ugha] etnwjksa dh vkoktkgh Hkh ,d cM+k rRo gSA vkt vxj csaxyq# ,d vkbZVh gc cuk gS] rks blds ihNs u flQZ dukZVd cfYd iwjs ns\'k vkSj nqfu;k ds fo\'ks"kKksa vkSj Jfedksa dk gkFk gSA vkt ns\'k ds tks Hkh jkT; [kq\'kgky gq, gSa] mudh rjDdh esa nwljs izns\'k ds yksxksa dk Hkh fdlh u fdlh :i esa ;ksxnku gSA njvly gekjs lafo/kku us gh ;g O;oLFkk dj j[kh gS fd ns\'k dk dksbZ Hkh ukxfjd ns\'k ds fdlh Hkh fgLls esa tkdj jksth&jkstxkj gkfly dj ldrk gSA',
  },
  {
    id: 4,
    title: 'Exercise : 4/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'लेकिन अपने सियासी लाभ के फेर में राजनेता इस बात को भुला देते हैं। वे अपने राज्य के मूल निवासियों के पिछड़ेपन और किसी भी तरह की नाकामयाबी के लिए दूसरे प्रदेशों से आए लोगों को जिम्मेदार ठहरा देते हैं। इससे समाज में कटुता फैलती है। महाराष्ट्र में प्रतियोगिता परीक्षा देने आए उत्तर भारतीय छात्रों पर किस तरह हमले हुए, यह देश भूला नहीं है। बड़ी मुश्किल से इस तरह की सियासत पर रोक लग पाई है। कर्नाटक सरकार का ताजा फैसला इस राजनीति को फिर जीवित कर सकता है। संभव है भविष्य में आईटी सेक्टर में भी आरक्षण लागू करने की मांग उठे।',
    description: 'Exam passage 4/50 (104 words)',
    content:
      'ysfdu vius fl;klh ykHk ds Qsj esa jktusrk bl ckr dks Hkqyk nsrs gSaA os vius jkT; ds ewy fuokfl;ksa ds fiNM+siu vkSj fdlh Hkh rjg dh ukdke;kch ds fy, nwljs izns\'kksa ls vk, yksxksa dks ftEesnkj Bgjk nsrs gSaA blls lekt esa dVqrk QSyrh gSA egkjk"Vj esa izfr;ksfxrk ijh{kk nsus vk, mRrj Hkkjrh; Nk=ksa ij fdl rjg geys gq,] ;g ns\'k Hkwyk ugha gSA cM+h eqf\'dy ls bl rjg dh fl;klr ij jksd yx ikbZ gSA dukZVd ljdkj dk rktk QSlyk bl jktuhfr dks fQj thfor dj ldrk gSA laHko gS Hkfo"; esa vkbZVh lsDVj esa Hkh vkj{k.k ykxw djus dh ekax mBsA',
  },
  {
    id: 5,
    title: 'Exercise : 5/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'स्थानीय लोगों के सामाजिक-आर्थिक विकास के लिए अलग से कदम उठाए जाएं, पर रिजर्वेशन उसका रास्ता नहीं है। कालेधन पर शुरू हुई बहस अब एक अहम मोड़ पर आ पहुंची है। एक स्वर से कहा जा रहा है कि चुनाव सुधार के बगैर ब्लैक मनी और करप्शन की समस्या से निपटा नहीं जा सकता क्योंकि चुनाव कालेधन को खपाने का एक प्रमुख जरिया बने हुए हैं। देश के लोगों की आकांक्षा को देखते हुए चुनाव आयोग ने इस संबंध में सार्थक पहल की है। उसने राजनीतिक दलों के चंदे को पारदर्शी बनाने के लिए केंद्र सरकार से मांग की है कि जनप्रतिनिधित्व कानून, 1951 में संशोधन करके दो हजार रुपये से अधिक के चंदों के स्रोत बताना अनिवार्य किया जाना चाहिए।',
    description: 'Exam passage 5/50 (121 words)',
    content:
      'LFkkuh; yksxksa ds lkekftd&vkfFkZd fodkl ds fy, vyx ls dne mBk, tk,a] ij fjtosZ\'ku mldk jkLrk ugha gSA dkys/ku ij \'kq: gqbZ cgl vc ,d vge eksM+ ij vk igqaph gSA ,d Loj ls dgk tk jgk gS fd pquko lq/kkj ds cxSj CySd euh vkSj djI\'ku dh leL;k ls fuiVk ugha tk ldrk D;ksafd pquko dkys/ku dks [kikus dk ,d izeq[k tfj;k cus gq, gSaA ns\'k ds yksxksa dh vkdka{kk dks ns[krs gq, pquko vk;ksx us bl laca/k esa lkFkZd igy dh gSA mlus jktuhfrd nyksa ds pans dks ikjn\'khZ cukus ds fy, dsanz ljdkj ls ekax dh gS fd tuizfrfuf/kRo dkuwu] 1951 esa la\'kks/ku djds nks gtkj #i;s ls vf/kd ds panksa ds lzksr crkuk vfuok;Z fd;k tkuk pkfg,A',
  },
  {
    id: 6,
    title: 'Exercise : 6/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'फिलहाल यह सीमा 20 हजार रुपये है। आयोग की यह भी मांग है कि आयकर में छूट उन्हीं दलों को मिलनी चाहिए, जो चुनावों में नियमित रूप से हिस्सेदारी करते हैं। आयोग ऐसे 200 से अधिक दलों के वित्तीय मामलों की जांच के लिए आयकर अधिकारियों को पत्र लिखने वाला है, जिन्हें उसने चुनाव न लड़ने के कारण \'सूची से बाहर\' किया है। आयोग को शक है कि ये कालेधन को सफेद करने का काम करते हैं। वैसे तो सरकार ने आयोग की मांग को लेकर सकारात्मक रुख दिखाया है, पर क्या उसमें इतना साहस है कि वह राजनीतिक दलों को चंदे में मिलने वाली छूट को पूरी तरह समाप्त कर दे? अगर वह वाकई ब्लैक मनी के खिलाफ अभूतपूर्व कदम उठाना चाहती है तो वह तत्काल ऐसा करे।',
    description: 'Exam passage 6/50 (129 words)',
    content:
      'fQygky ;g lhek 20 gtkj #i;s gSA vk;ksx dh ;g Hkh ekax gS fd vk;dj esa NwV mUgha nyksa dks feyuh pkfg,] tks pqukoksa esa fu;fer :i ls fgLlsnkjh djrs gSaA vk;ksx ,sls 200 ls vf/kd nyksa ds foRrh; ekeyksa dh tkap ds fy, vk;dj vf/kdkfj;ksa dks i= fy[kus okyk gS] ftUgsa mlus pquko u yM+us ds dkj.k ^lwph ls ckgj* fd;k gSA vk;ksx dks \'kd gS fd ;s dkys/ku dks lQsn djus dk dke djrs gSaA oSls rks ljdkj us vk;ksx dh ekax dks ysdj ldkjkRed #[k fn[kk;k gS] ij D;k mlesa bruk lkgl gS fd og jktuhfrd nyksa dks pans esa feyus okyh NwV dks iwjh rjg lekIr dj ns\\ vxj og okdbZ CySd euh ds f[kykQ vHkwriwoZ dne mBkuk pkgrh gS rks og rRdky ,slk djsA',
  },
  {
    id: 7,
    title: 'Exercise : 7/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'राजनीतिक पार्टियों को 20 हजार रुपये की भी छूट क्यों मिलनी चाहिए? बेहतर तो यह होगा कि वे एक-एक पैसे का हिसाब दें ताकि शक की कोई गुंजाइश ही न बचे। पार्टियां खुद ही आगे बढ़कर क्यों नहीं यह बात कह रही हैं? क्या सारी नसीहतें सारे नियम-कायदे आम जनता के लिए ही हैं? यह बात अब छुपी हुई नहीं रह गई है कि कालेधन के कारोबारी वर्तमान प्रावधान का किस तरह फायदा उठा रहे हैं। अभी पार्टियों को 20,000 रुपये से कम के चंदे का कोई ब्योरा देने की आवश्यकता नहीं है। इस पर उन्हें टैक्स भी नहीं देना पड़ता। इसलिए प्रायः सभी राजनीतिक दल यही बताते हैं कि उन्हें चंदे के तौर पर मिली कुल रकम में बड़ा हिस्सा वह है, जो 20-20 हजार रुपये से कम राशि में मिला।',
    description: 'Exam passage 7/50 (132 words)',
    content:
      'jktuhfrd ikfVZ;ksa dks 20 gtkj #i;s dh Hkh NwV D;ksa feyuh pkfg,\\ csgrj rks ;g gksxk fd os ,d&,d iSls dk fglkc nsa rkfd \'kd dh dksbZ xqatkb\'k gh u cpsA ikfVZ;ka [kqn gh vkxs c<+dj D;ksa ugha ;g ckr dg jgh gSa\\ D;k lkjh ulhgrsa lkjs fu;e&dk;ns vke turk ds fy, gh gSa\\ ;g ckr vc Nqih gqbZ ugha jg xbZ gS fd dkys/ku ds dkjksckjh orZeku izko/kku dk fdl rjg Qk;nk mBk jgs gSaA vHkh ikfVZ;ksa dks 20]000 #i;s ls de ds pans dk dksbZ C;ksjk nsus dh vko\';drk ugha gSA bl ij mUgsa VSDl Hkh ugha nsuk iM+rkA blfy, izk;% lHkh jktuhfrd ny ;gh crkrs gSa fd mUgsa pans ds rkSj ij feyh dqy jde esa cM+k fgLlk og gS] tks 20&20 gtkj #i;s ls de jkf\'k esa feykA',
  },
  {
    id: 8,
    title: 'Exercise : 8/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'आमतौर पर यह हिस्सा 75 प्रतिशत से अधिक होता है। चुनाव आयोग यह कह-कह कर थक गया कि राजनीतिक दलों के खातों का ऑडिट कैग की ओर से सुझाए गए ऑडिटर करें, लेकिन वे इसके लिए तैयार नहीं। वे सूचना अधिकार कानून के दायरे में आने के लिए भी तैयार नहीं। उनसे कोई पूछ नहीं सकता कि उनकी किसी रैली पर कितना खर्च हुआ? आखिर ये सब जनता कब तक बर्दाश्त करेगी? सरकार आखिर क्यों नहीं पार्टियों से कहती है कि वे भी कैशलेस चंदा लें? बात निकली है तो दूर तलक जाएगी। चंदे की व्यवस्था को बदलना ही होगा।',
    description: 'Exam passage 8/50 (100 words)',
    content:
      'vkerkSj ij ;g fgLlk 75 izfr\'kr ls vf/kd gksrk gSA pquko vk;ksx ;g dg&dg dj Fkd x;k fd jktuhfrd nyksa ds [kkrksa dk vkWfMV dSx dh vksj ls lq>kk, x, vkWfMVj djsa] ysfdu os blds fy, rS;kj ughaA os lwpuk vf/kdkj dkuwu ds nk;js esa vkus ds fy, Hkh rS;kj ughaA muls dksbZ iwN ugha ldrk fd mudh fdlh jSyh ij fdruk [kpZ gqvk\\ vkf[kj ;s lc turk dc rd cnkZ\'r djsxh\\ ljdkj vkf[kj D;ksa ugha ikfVZ;ksa ls dgrh gS fd os Hkh dS\'kysl pank ysa\\ ckr fudyh gS rks nwj ryd tk,xhA pans dh O;oLFkk dks cnyuk gh gksxkA',
  },
  {
    id: 9,
    title: 'Exercise : 9/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'केरल के मलप्पुरम जिला स्थित एक मेडिकल कॉलेज में हुई घटना के चलते रैगिंग एक बार फिर सुर्खियों में है। खबरों के मुताबिक, यहां फ्रेश बैच के स्टूडेंट्स को रैगिंग के तहत टॉइलट साफ करने और गंदा पानी पीने को मजबूर किया गया। करीब 40 छात्रों की शिकायत के बाद कॉलेज प्रशासन सक्रिय हुआ और 21 स्टूडेंट्स को सस्पेंड कर दिया गया। हालांकि, कॉलेज की आंतरिक कमिटी अभी इस मामले की जांच कर रही है। यहां बकायदा ऐंटी-रैगिंग कमिटी बनी हुई है, जिसके सदस्यों में पुलिस और मीडिया के नुमाइंदे भी होते हैं।',
    description: 'Exam passage 9/50 (93 words)',
    content:
      'dsjy ds eyIiqje ftyk fLFkr ,d esfMdy dkWyst esa gqbZ ?kVuk ds pyrs jSfxax ,d ckj fQj lqf[kZ;ksa esa gSA [kcjksa ds eqrkfcd] ;gka Qzs\'k cSp ds LVwMsaV~l dks jSfxax ds rgr VkWbyV lkQ djus vkSj xank ikuh ihus dks etcwj fd;k x;kA djhc 40 Nk=ksa dh f\'kdk;r ds ckn dkWyst iz\'kklu lfdz; gqvk vkSj 21 LVwMsaV~l dks lLisaM dj fn;k x;kA gkykafd] dkWyst dh vkarfjd dfeVh vHkh bl ekeys dh tkap dj jgh gSA ;gka cdk;nk ,saVh&jSfxax dfeVh cuh gqbZ gS] ftlds lnL;ksa esa iqfyl vkSj ehfM;k ds uqekbans Hkh gksrs gSaA',
  },
  {
    id: 10,
    title: 'Exercise : 10/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'कहा गया है कि कॉलेज की आंतरिक कमिटी की रिपोर्ट आ जाने के बाद अगर जरूरी हुआ तो ऐंटी-रैगिंग कमिटी, पुलिस कार्रवाई की सिफारिश करेगी। कॉलेज प्रशासन ने भरोसा दिलाया है कि उसने इस मामले को गंभीरता से लिया है, लेकिन जिन हालात में ये घटनाएं हुई हैं उसे देखते हुए प्रशासन के रवैये पर भी सवाल उठता है। गौरतलब है कि रैगिंग को रोकने की कोशिशों के तहत बरती जाने वाली सतर्कताओं को लेकर राघवन कमिटी की सिफारिशें बहुत साफ हैं। सुप्रीम कोर्ट की गाइडलाइंस भी कहती हैं कि जहां फ्रेश बैच के स्टूडेंट्स के रहने की व्यवस्था हो वहां इन बच्चों की देखभाल के लिए एक वॉर्डन जरूर होना चाहिए।',
    description: 'Exam passage 10/50 (112 words)',
    content:
      'dgk x;k gS fd dkWyst dh vkarfjd dfeVh dh fjiksVZ vk tkus ds ckn vxj t:jh gqvk rks ,saVh&jSfxax dfeVh] iqfyl dkjZokbZ dh flQkfj\'k djsxhA dkWyst iz\'kklu us Hkjkslk fnyk;k gS fd mlus bl ekeys dks xaHkhjrk ls fy;k gS] ysfdu ftu gkykr esa ;s ?kVuk,a gqbZ gSa mls ns[krs gq, iz\'kklu ds joS;s ij Hkh loky mBrk gSA xkSjryc gS fd jSfxax dks jksdus dh dksf\'k\'kksa ds rgr cjrh tkus okyh lrdZrkvksa dks ysdj jk?kou dfeVh dh flQkfj\'ksa cgqr lkQ gSaA lqizhe dksVZ dh xkbMykbal Hkh dgrh gSa fd tgka Qzs\'k cSp ds LVwMsaV~l ds jgus dh O;oLFkk gks ogka bu cPpksa dh ns[kHkky ds fy, ,d okWMZu t:j gksuk pkfg,A',
  },
  {
    id: 11,
    title: 'Exercise : 11/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इतना ही नहीं, सीनियर स्टूडेंट्स और बाहरी व्यक्तियों को रात में निर्धारित समय के बाद वहां प्रवेश न देने की हिदायत भी है। देखा जाना चाहिए कि मलप्पुरम कॉलेज में जरूरी एहतियात बरतने में प्रशासन ने कोई लापरवाही की थी या नहीं। सरकार, संस्थान और मीडिया की लगातार कोशिशों का ही नतीजा है कि अब रैगिंग का ट्रेंड उतार पर है। बावजूद इसके, जब-तब ऐसी खबरें हमें सिहराती रहती हैं। दो ही दिन पहले कोट्टायम के गवर्नमेंट पॉलिटेक्निक कॉलेज के फर्स्ट इयर स्टूडेंट्स की रैगिंग किए जाने की खबरें आई थीं, जिसमें एक छात्र की किडनी खराब हो गई।',
    description: 'Exam passage 11/50 (99 words)',
    content:
      'bruk gh ugha] lhfu;j LVwMsaV~l vkSj ckgjh O;fDr;ksa dks jkr esa fu/kkZfjr le; ds ckn ogka izos\'k u nsus dh fgnk;r Hkh gSA ns[kk tkuk pkfg, fd eyIiqje dkWyst esa t:jh ,gfr;kr cjrus esa iz\'kklu us dksbZ ykijokgh dh Fkh ;k ughaA ljdkj] laLFkku vkSj ehfM;k dh yxkrkj dksf\'k\'kksa dk gh urhtk gS fd vc jSfxax dk VjsaM mrkj ij gSA ckotwn blds] tc&rc ,slh [kcjsa gesa flgjkrh jgrh gSaA nks gh fnu igys dksV~Vk;e ds xouZesaV ikWfyVsfDud dkWyst ds QLVZ b;j LVwMsaV~l dh jSfxax fd, tkus dh [kcjsa vkbZ Fkha] ftlesa ,d Nk= dh fdMuh [kjkc gks xbZA',
  },
  {
    id: 12,
    title: 'Exercise : 12/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'दो हफ्ते पहले रांची के बिरसा कृषि विश्वविद्यालय से एक छात्र की पिटाई करने, उसे नंगा करने और उसका सिर मुंडवाने की खबर आई थी। ऐसा लगता है कि दिल्ली, मुंबई जैसे बड़े शहरों के नामी-गिरामी कॉलेजों-संस्थानों से तो यह बुराई हट गई है, पर दूर-दराज के इलाकों के कॉलेजों में अब भी कायम है। अपनी कोशिशें तेज कर हमें उन संस्थानों को भी रैगिंग-मुक्त करना होगा। चीन ने जिस तरह साउथ चाइना सी के अंतरराष्ट्रीय जल क्षेत्र में एक अमेरिकी ड्रोन को जब्त किया, उससे दोनों देशों के बीच तनाव बढ़ना तय है।',
    description: 'Exam passage 12/50 (94 words)',
    content:
      'nks gQ~rs igys jkaph ds fcjlk d`f"k fo\'ofo|ky; ls ,d Nk= dh fiVkbZ djus] mls uaxk djus vkSj mldk flj eqaMokus dh [kcj vkbZ FkhA ,slk yxrk gS fd fnYyh] eqacbZ tSls cM+s \'kgjksa ds ukeh&fxjkeh dkWystksa&laLFkkuksa ls rks ;g cqjkbZ gV xbZ gS] ij nwj&njkt ds bykdksa ds dkWystksa esa vc Hkh dk;e gSA viuh dksf\'k\'ksa rst dj gesa mu laLFkkuksa dks Hkh jSfxax&eqDr djuk gksxkA phu us ftl rjg lkmFk pkbuk lh ds varjjk"Vjh; ty {ks= esa ,d vesfjdh Mjksu dks tCr fd;k] mlls nksuksa ns\'kksa ds chp ruko c<+uk r; gSA',
  },
  {
    id: 13,
    title: 'Exercise : 13/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'चीन ने ड्रोन लौटाने की अमेरिकी मांग को संज्ञान में तो लिया, लेकिन इस पर कोई प्रतिक्रिया नहीं दी है। यह स्पष्ट नहीं है कि वह इस मामले में किस हद तक जाने की सोच रहा है। लेकिन उसके इस कदम ने दक्षिण चीन सागर में उसकी दादागिरी बढ़ने की आशंकाओं को मजबूती तो दे ही दी है। अमेरिकी थिंक टैंकों ने उपग्रह तस्वीरों के हवाले से अपना यह दावा दोहराया है कि चीन ने अपने बनाए सातों कृत्रिम द्वीपों पर ऐंटी-एयरक्राफ्ट और ऐंटी-मिसाइल सिस्टम लगा लिया है। जाहिर है चीन की ये गतिविधियां अमेरिका को भी इस इलाके में चौकसी बढ़ाने को प्रेरित कर रही हैं।',
    description: 'Exam passage 13/50 (107 words)',
    content:
      'phu us Mjksu ykSVkus dh vesfjdh ekax dks laKku esa rks fy;k] ysfdu bl ij dksbZ izfrfdz;k ugha nh gSA ;g Li"V ugha gS fd og bl ekeys esa fdl gn rd tkus dh lksp jgk gSA ysfdu mlds bl dne us nf{k.k phu lkxj esa mldh nknkfxjh c<+us dh vk\'kadkvksa dks etcwrh rks ns gh nh gSA vesfjdh fFkad VSadksa us mixzg rLohjksa ds gokys ls viuk ;g nkok nksgjk;k gS fd phu us vius cuk, lkrksa d`f=e }hiksa ij ,saVh&,;jdzkQ~V vkSj ,saVh&felkby flLVe yxk fy;k gSA tkfgj gS phu dh ;s xfrfof/k;ka vesfjdk dks Hkh bl bykds esa pkSdlh c<+kus dks izsfjr dj jgh gSaA',
  },
  {
    id: 14,
    title: 'Exercise : 14/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'लेकिन जब्त ड्रोन के बारे में उसका कहना है कि यह दक्षिण चीन सागर के अंतरराष्ट्रीय जल क्षेत्र में चलाए जा रहे वैध मिलिटरी सर्वे का हिस्सा था जो जल की लवणता, तापमान और स्वच्छता संबंधी सूचनाएं इकट्ठा कर रहा था। खैर कूटनीति में इस तरह की तकनीकी दलीलें एक हद से ज्यादा नहीं चलतीं। चीन ने अपने इस कदम के जरिए अमेरिका समेत तमाम शक्तियों को साफ संदेश दिया है कि उसे और उसके हितों को हल्के में न लिया जाए। इस संदेश को अमेरिका के नवनिर्वाचित राष्ट्रपति डॉनल्ड ट्रंप के पिछले दिनों दिए उस बयान के संदर्भ में ही देखना होगा जिसमें उन्होंने संकेत दिया था कि उनकी सरकार \'वन चाइना पॉलिसी\' को जारी रखने पर पुनर्विचार कर सकती है।',
    description: 'Exam passage 14/50 (122 words)',
    content:
      'ysfdu tCr Mjksu ds ckjs esa mldk dguk gS fd ;g nf{k.k phu lkxj ds varjjk"Vjh; ty {ks= esa pyk, tk jgs oS/k fefyVjh losZ dk fgLlk Fkk tks ty dh yo.krk] rkieku vkSj LoPNrk laca/kh lwpuk,a bdV~Bk dj jgk FkkA [kSj dwVuhfr esa bl rjg dh rduhdh nyhysa ,d gn ls T;knk ugha pyrhaA phu us vius bl dne ds tfj, vesfjdk lesr reke \'kfDr;ksa dks lkQ lans\'k fn;k gS fd mls vkSj mlds fgrksa dks gYds esa u fy;k tk,A bl lans\'k dks vesfjdk ds uofuokZfpr jk"Vjifr MkWuYM Vjai ds fiNys fnuksa fn, ml c;ku ds lanHkZ esa gh ns[kuk gksxk ftlesa mUgksaus ladsr fn;k Fkk fd mudh ljdkj ^ou pkbuk ikWfylh* dks tkjh j[kus ij iqufoZpkj dj ldrh gSA',
  },
  {
    id: 15,
    title: 'Exercise : 15/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'गौरतलब है कि इस नीति के तहत अमेरिका ने 1979 से ही ताइवान पर चीन के रुख का सम्मान किया है, जिसे चीन अपना अभिन्न हिस्सा मानता है। ट्रंप अपने उस बयान को लेकर कितने गंभीर थे यह तो पता नहीं, लेकिन अमेरिका समेत पूरी दुनिया में यह माना गया कि उन्हें विदेश नीति के संवेदनशील मसलों को थोड़ी और गंभीरता से लेना चाहिए। राष्ट्रपति ओबामा तक ने उन्हें सार्वजनिक रूप से यह सलाह दी। चूंकि चीन और अमेरिका दोनों दुनिया के दो बड़े और ताकतवर देश हैं, उनके अच्छे-बुरे रिश्तों से पूरी दुनिया प्रभावित होती है।',
    description: 'Exam passage 15/50 (97 words)',
    content:
      'xkSjryc gS fd bl uhfr ds rgr vesfjdk us 1979 ls gh rkboku ij phu ds #[k dk lEeku fd;k gS] ftls phu viuk vfHkUu fgLlk ekurk gSA Vjai vius ml c;ku dks ysdj fdrus xaHkhj Fks ;g rks irk ugha] ysfdu vesfjdk lesr iwjh nqfu;k esa ;g ekuk x;k fd mUgsa fons\'k uhfr ds laosnu\'khy elyksa dks FkksM+h vkSj xaHkhjrk ls ysuk pkfg,A jk"Vjifr vksckek rd us mUgsa lkoZtfud :i ls ;g lykg nhA pwafd phu vkSj vesfjdk nksuksa nqfu;k ds nks cM+s vkSj rkdroj ns\'k gSa] muds vPNs&cqjs fj\'rksa ls iwjh nqfu;k izHkkfor gksrh gSA',
  },
  {
    id: 16,
    title: 'Exercise : 16/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इसलिए उनसे उम्मीद की जाती है कि अपने मसलों को वे ज्यादा धैर्य और समझदारी से सुलझाएंगे। इस लिहाज से चीन का यह कहना सही है कि अगर अमेरिका \'वन चाइना पॉलिसी\' से पीछे हटता है तो दोनों देशों के बीच सहयोग की कोई गुंजाइश नहीं बचेगी। यह महज कूटनीतिक रुख नहीं है। चीन दुनिया की दूसरी सबसे बड़ी अर्थव्यवस्था है और अंतरराष्ट्रीय व्यापार में उसका हिस्सा अमेरिका के लगभग बराबर है। इसलिए अमेरिका के साथ उसका टकराव दोनों देशों के अलावा बाकी दुनिया को भी नुकसान पहुंचाएगा।',
    description: 'Exam passage 16/50 (88 words)',
    content:
      'blfy, muls mEehn dh tkrh gS fd vius elyksa dks os T;knk /kS;Z vkSj le>knkjh ls lqy>kk,axsA bl fygkt ls phu dk ;g dguk lgh gS fd vxj vesfjdk ^ou pkbuk ikWfylh* ls ihNs gVrk gS rks nksuksa ns\'kksa ds chp lg;ksx dh dksbZ xqatkb\'k ugha cpsxhA ;g egt dwVuhfrd #[k ugha gSA phu nqfu;k dh nwljh lcls cM+h vFkZO;oLFkk gS vkSj varjjk"Vjh; O;kikj esa mldk fgLlk vesfjdk ds yxHkx cjkcj gSA blfy, vesfjdk ds lkFk mldk Vdjko nksuksa ns\'kksa ds vykok ckdh nqfu;k dks Hkh uqdlku igqapk,xkA',
  },
  {
    id: 17,
    title: 'Exercise : 17/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'पाँच सौ और एक हजार के नोटों का चलन बंद करने की घोषणा के बाद केंद्र सरकार के साथ ही तमाम विशेषज्ञों का अनुमान था कि करीब तीन-चार लाख करोड़ रुपये की राशि काले धन के रूप में होने के कारण बैंकिंग व्यवस्था में लौटकर नहीं आएगी। अब जब पुराने नोट बैंकों में जमा कराने की अवधि बीतने में महज पांच दिन शेष रह गए हैं तब जितनी राशि के नोटों का चलन बंद किया गया था लगभग उतनी ही राशि बैंकों में आ जाने के आसार दिख रहे हैं। इसकी एक बड़ी वजह नोटबंदी के बाद काले धन वालों पर अंकुश न लग पाना ही है। शुरुआत में लोगों ने पुराने नोट बदलवाने की सुविधा का जमकर दुरुपयोग किया। जब यह सुविधा बंद की गई तो भ्रष्ट बैंक कर्मियों को कमीशन देकर नोट बदलने का सिलसिला चल निकला। कुछ लोग पुराने नोटों से सोना खरीदने में भी जुट गए। यह सब देखकर सरकार ने आयकर कानून में बदलाव किया। इसके तहत टैक्स और जुर्माना चुकाकर काले धन की घोषणा करने की सुविधा दी गई।',
    description: 'Exam passage 17/50 (175 words)',
    content:
      'ikap lkS vkSj ,d gtkj ds uksVksa dk pyu can djus dh ?kks"k.kk ds ckn dsanz ljdkj ds lkFk gh reke fo\'ks"kKksa dk vuqeku Fkk fd djhc rhu&pkj yk[k djksM+ #i;s dh jkf\'k dkys /ku ds :i esa gksus ds dkj.k cSafdax O;oLFkk esa ykSVdj ugha vk,xhA vc tc iqjkus uksV cSadksa esa tek djkus dh vof/k chrus esa egt ikap fnu \'ks"k jg x, gSa rc ftruh jkf\'k ds uksVksa dk pyu can fd;k x;k Fkk yxHkx mruh gh jkf\'k cSadksa esa vk tkus ds vklkj fn[k jgs gSaA bldh ,d cM+h otg uksVcanh ds ckn dkys /ku okyksa ij vadq\'k u yx ikuk gh gSA \'kq#vkr esa yksxksa us iqjkus uksV cnyokus dh lqfo/kk dk tedj nq#i;ksx fd;kA tc ;g lqfo/kk can dh xbZ rks Hkz"V cSad dfeZ;ksa dks deh\'ku nsdj uksV cnyus dk flyflyk py fudykA dqN yksx iqjkus uksVksa ls lksuk [kjhnus esa Hkh tqV x,A ;g lc ns[kdj ljdkj us vk;dj dkuwu esa cnyko fd;kA blds rgr VSDl vkSj tqekZuk pqdkdj dkys /ku dh ?kks"k.kk djus dh lqfo/kk nh xbZA',
  },
  {
    id: 18,
    title: 'Exercise : 18/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'टैक्स और जुर्माने के रूप में वसूली जाने वाली रकम को प्रधानमंत्री गरीब कल्याण योजना का हिस्सा बनना है। यह 31 दिसंबर के बाद ही पता चल सकेगा कि इस योजना के तहत कितनी रकम जमा हुई। वैसे इस योजना में कोई बड़ी राशि जमा होने के आसार नहीं हैं और यदि ऐसा ही होता है तो इसका मतलब होगा कि काले धन वालों ने येन-केन-प्रकारेण अपनी काली कमाई सफेद कर ली। एक तरह से यदि सरकार डाल-डाल रही तो काले धन वाले पात-पात। हालांकि रिजर्व बैंक ने दर्जनों बार अपने नियम बदले और इस क्रम में उपहास का पात्र भी बना, लेकिन वह काले धन वालों पर काबू नहीं पा सका।',
    description: 'Exam passage 18/50 (112 words)',
    content:
      'VSDl vkSj tqekZus ds :i esa olwyh tkus okyh jde dks iz/kkuea=h xjhc dY;k.k ;kstuk dk fgLlk cuuk gSA ;g 31 fnlacj ds ckn gh irk py ldsxk fd bl ;kstuk ds rgr fdruh jde tek gqbZA oSls bl ;kstuk esa dksbZ cM+h jkf\'k tek gksus ds vklkj ugha gSa vkSj ;fn ,slk gh gksrk gS rks bldk eryc gksxk fd dkys /ku okyksa us ;su&dsu&izdkjs.k viuh dkyh dekbZ lQsn dj yhA ,d rjg ls ;fn ljdkj Mky&Mky jgh rks dkys /ku okys ikr&ikrA gkykafd fjtoZ cSad us ntZuksa ckj vius fu;e cnys vkSj bl dze esa migkl dk ik= Hkh cuk] ysfdu og dkys /ku okyksa ij dkcw ugha ik ldkA',
  },
  {
    id: 19,
    title: 'Exercise : 19/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इस आम धारणा में एक बड़ी हद तक सच्चाई है कि निजी बैंकों के साथ-साथ सरकारी बैंकों के भ्रष्ट कर्मियों के कारण काले धन को सफेद करने में आसानी हुई। बैंकों की मिलीभगत के बिना यह संभव ही नहीं था। भ्रष्ट बैंक कर्मियों की वजह से न केवल नोटबंदी का कदम अपने उद्देश्य से दूर होता दिखा, बल्कि लोगों को एटीएम और बैंकों से पैसा निकालने में कठिनाई का भी सामना करना पड़ा। लोगों को इस कठिनाई से अभी भी दो-चार होना पड़ रहा है। चूंकि यह साफ नहीं कि 30 दिसंबर के बाद क्या हालात बनेंगे, इसलिए सरकार को चाहिए कि वह काले धन पर लगाम लगाने के साथ-साथ इस बात का भी ख्याल रखे कि इस प्रक्रिया में आम लोग पिस न जाएं।',
    description: 'Exam passage 19/50 (125 words)',
    content:
      'bl vke /kkj.kk esa ,d cM+h gn rd lPpkbZ gS fd futh cSadksa ds lkFk&lkFk ljdkjh cSadksa ds Hkz"V dfeZ;ksa ds dkj.k dkys /ku dks lQsn djus esa vklkuh gqbZA cSadksa dh feyhHkxr ds fcuk ;g laHko gh ugha FkkA Hkz"V cSad dfeZ;ksa dh otg ls u dsoy uksVcanh dk dne vius mn~ns\'; ls nwj gksrk fn[kk] cfYd yksxksa dks ,Vh,e vkSj cSadksa ls iSlk fudkyus esa dfBukbZ dk Hkh lkeuk djuk iM+kA yksxksa dks bl dfBukbZ ls vHkh Hkh nks&pkj gksuk iM+ jgk gSA pwafd ;g lkQ ugha fd 30 fnlacj ds ckn D;k gkykr cusaxs] blfy, ljdkj dks pkfg, fd og dkys /ku ij yxke yxkus ds lkFk&lkFk bl ckr dk Hkh [;ky j[ks fd bl izfdz;k esa vke yksx fil u tk,aA',
  },
  {
    id: 20,
    title: 'Exercise : 20/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'सरकार ने यह स्पष्ट भी नहीं किया कि वह बंद किए गए नोटों के बदले कितनी राशि के नोट बैंकिंग व्यवस्था में लाएगी, इसलिए कारोबारियों के साथ-साथ आम लोग भी और यहां तक कि गृहिणियां भी तरह-तरह के अंदेशे से ग्रस्त हैं। यह भी ध्यान रहे कि सरकार नकदी रहित लेन-देन की जो मुहिम चला रही है उसके बारे में भी यह स्पष्ट नहीं कि कब तक जीडीपी का कितना हिस्सा इस तरह के लेन-देन का हिस्सा बन जाएगा? नोटबंदी के समय पांच सौ और एक हजार रुपये के नोटों का कुल मूल्य लगभग साढ़े 14 लाख करोड़ रुपये था। करीब डेढ़ लाख करोड़ रुपये नकली नोटों के रूप में माने जा रहे थे।',
    description: 'Exam passage 20/50 (114 words)',
    content:
      'ljdkj us ;g Li"V Hkh ugha fd;k fd og can fd, x, uksVksa ds cnys fdruh jkf\'k ds uksV cSafdax O;oLFkk esa yk,xh] blfy, dkjksckfj;ksa ds lkFk&lkFk vke yksx Hkh vkSj ;gka rd fd x`fgf.k;ka Hkh rjg&rjg ds vans\'ks ls xzLr gSaA ;g Hkh /;ku jgs fd ljdkj udnh jfgr ysu&nsu dh tks eqfge pyk jgh gS mlds ckjs esa Hkh ;g Li"V ugha fd dc rd thMhih dk fdruk fgLlk bl rjg ds ysu&nsu dk fgLlk cu tk,xk\\ uksVcanh ds le; ikap lkS vkSj ,d gtkj #i;s ds uksVksa dk dqy ewY; yxHkx lk<+s 14 yk[k djksM+ #i;s FkkA djhc Ms<+ yk[k djksM+ #i;s udyh uksVksa ds :i esa ekus tk jgs FksA',
  },
  {
    id: 21,
    title: 'Exercise : 21/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'नोटबंदी से नकली नोटों का कारोबार तो स्वतः समाप्त हो गया और यह कोई छोटी बात नहीं, क्योंकि हर कोई जानता है कि पाकिस्तान किस तरह नकली नोटों की मदद से भारत में आतंकवाद फैलाने के साथ-साथ देश की अर्थव्यवस्था को नुकसान पहुंचाने की साजिश में जुटा था। नकली नोटों पर अंकुश लगना अच्छी बात है, लेकिन नोटबंदी का केवल यही एकमात्र उद्देश्य नहीं हो सकता। इससे इन्कार नहीं कि नोटबंदी के बाद से काले धन की जब्ती का सिलसिला जारी है, लेकिन समस्या यह है कि एक तो काले धन का छोटा हिस्सा ही जब्त किया जा सका होगा और दूसरे, इससे आम लोगों को भारी असुविधा का सामना करना पड़ा।',
    description: 'Exam passage 21/50 (112 words)',
    content:
      'uksVcanh ls udyh uksVksa dk dkjksckj rks Lor% lekIr gks x;k vkSj ;g dksbZ NksVh ckr ugha] D;ksafd gj dksbZ tkurk gS fd ikfdLrku fdl rjg udyh uksVksa dh enn ls Hkkjr esa vkradokn QSykus ds lkFk&lkFk ns\'k dh vFkZO;oLFkk dks uqdlku igqapkus dh lkft\'k esa tqVk FkkA udyh uksVksa ij vadq\'k yxuk vPNh ckr gS] ysfdu uksVcanh dk dsoy ;gh ,dek= mn~ns\'; ugha gks ldrkA blls bUdkj ugha fd uksVcanh ds ckn ls dkys /ku dh tCrh dk flyflyk tkjh gS] ysfdu leL;k ;g gS fd ,d rks dkys /ku dk NksVk fgLlk gh tCr fd;k tk ldk gksxk vkSj nwljs] blls vke yksxksa dks Hkkjh vlqfo/kk dk lkeuk djuk iM+kA',
  },
  {
    id: 22,
    title: 'Exercise : 22/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'यह कहना कठिन है कि काले धन की जब्ती के मामले में आयकर विभाग और प्रवर्तन निदेशालय की ओर से किए जा रहे दावे सही हैं। आज ऐसा कोई दावा नहीं किया जा सकता कि इन दोनों विभागों ने अपनी सक्रियता और सख्ती से काले धन वालों के सामने मुश्किल खड़ी कर दी और उन्हें बच निकलने का कोई मौका नहीं दिया। केवल इससे संतुष्ट नहीं हुआ जा सकता कि छापेमारी के साथ काले धन की बरामदगी जारी है, क्योंकि इसका दूसरा पहलू यह भी है कि व्यापारियों और कारोबारियों के बीच दहशत का माहौल बन रहा है।',
    description: 'Exam passage 22/50 (98 words)',
    content:
      ';g dguk dfBu gS fd dkys /ku dh tCrh ds ekeys esa vk;dj foHkkx vkSj izorZu funs\'kky; dh vksj ls fd, tk jgs nkos lgh gSaA vkt ,slk dksbZ nkok ugha fd;k tk ldrk fd bu nksuksa foHkkxksa us viuh lfdz;rk vkSj l[rh ls dkys /ku okyksa ds lkeus eqf\'dy [kM+h dj nh vkSj mUgsa cp fudyus dk dksbZ ekSdk ugha fn;kA dsoy blls larq"V ugha gqvk tk ldrk fd Nkisekjh ds lkFk dkys /ku dh cjkenxh tkjh gS] D;ksafd bldk nwljk igyw ;g Hkh gS fd O;kikfj;ksa vkSj dkjksckfj;ksa ds chp ng\'kr dk ekgkSy cu jgk gSA',
  },
  {
    id: 23,
    title: 'Exercise : 23/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'यह ठीक है कि काले धन वाले बख्शे न जाएं, लेकिन केंद्र सरकार को यह भी देखना होगा कि उद्योगपतियों और व्यापारियों के मन में अनावश्यक भय पैदा न होने पाए। नोटबंदी के बाद यह उम्मीद थी कि इस ऐतिहासिक फैसले के प्रभावों को लेकर संसद में सत्तापक्ष और विपक्ष के बीच सारगर्भित बहस होगी, लेकिन ऐसा नहीं हो सका। दुर्भाग्य से नोटबंदी पर संसद के बाहर तो खूब चर्चा हुई, लेकिन संसद के भीतर केवल हंगामा हुआ। सभाओं और रैलियों में सरकार और विपक्ष के नेताओं की ओर से की गई बातों के आधार पर जनता को इस सवाल का कोई ठोस जवाब नहीं मिल सका।',
    description: 'Exam passage 23/50 (107 words)',
    content:
      ';g Bhd gS fd dkys /ku okys c[\'ks u tk,a] ysfdu dsanz ljdkj dks ;g Hkh ns[kuk gksxk fd m|ksxifr;ksa vkSj O;kikfj;ksa ds eu esa vuko\';d Hk; iSnk u gksus ik,A uksVcanh ds ckn ;g mEehn Fkh fd bl ,sfrgkfld QSlys ds izHkkoksa dks ysdj laln esa lRrki{k vkSj foi{k ds chp lkjxfHkZr cgl gksxh] ysfdu ,slk ugha gks ldkA nqHkkZX; ls uksVcanh ij laln ds ckgj rks [kwc ppkZ gqbZ] ysfdu laln ds Hkhrj dsoy gaxkek gqvkA lHkkvksa vkSj jSfy;ksa esa ljdkj vkSj foi{k ds usrkvksa dh vksj ls dh xbZ ckrksa ds vk/kkj ij turk dks bl loky dk dksbZ Bksl tokc ugha fey ldkA',
  },
  {
    id: 24,
    title: 'Exercise : 24/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'जनता को यह जवाब नहीं मिल सका कि नोटबंदी से उसके जीवन में क्या बदलाव होने जा रहा है? कांग्रेस से उम्मीद थी कि वह इस गंभीर आर्थिक मसले पर विपक्ष का नेतृत्व करेगी, लेकिन उसने ही सबसे अधिक निराश किया। कांग्रेस उपाध्यक्ष राहुल गांधी ने संसद सत्र की समाप्ति से दो-तीन दिन पहले अचानक यह आरोप लगाना शुरू कर दिया कि उन्हें संसद में बोलने नहीं दिया जा रहा और यदि वह बोलेंगे तो भूकंप आ जाएगा। उन्होंने प्रधानमंत्री के खिलाफ भ्रष्टाचार के सुबूत होने का भी दावा किया। उनके इस रुख के चलते कांग्रेस समेत पूरे विपक्ष का ध्यान नोटबंदी से हटा।',
    description: 'Exam passage 24/50 (104 words)',
    content:
      'turk dks ;g tokc ugha fey ldk fd uksVcanh ls mlds thou esa D;k cnyko gksus tk jgk gS\\ dkaxzsl ls mEehn Fkh fd og bl xaHkhj vkfFkZd elys ij foi{k dk usr`Ro djsxh] ysfdu mlus gh lcls vf/kd fujk\'k fd;kA dkaxzsl mik/;{k jkgqy xka/kh us laln l= dh lekfIr ls nks&rhu fnu igys vpkud ;g vkjksi yxkuk \'kq: dj fn;k fd mUgsa laln esa cksyus ugha fn;k tk jgk vkSj ;fn og cksysaxs rks Hkwdai vk tk,xkA mUgksaus iz/kkuea=h ds f[kykQ Hkz"Vkpkj ds lqcwr gksus dk Hkh nkok fd;kA muds bl #[k ds pyrs dkaxzsl lesr iwjs foi{k dk /;ku uksVcanh ls gVkA',
  },
  {
    id: 25,
    title: 'Exercise : 25/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'गुजरात की एक रैली में जब राहुल गांधी ने प्रधानमंत्री के खिलाफ अपने आरोप उछाले तो अपनी जगहंसाई ही करा बैठे। उन्होंने उन पुराने आरोपों को ही दोहराया जिन्हें खुद सुप्रीम कोर्ट खोखले ठहरा चुका था। राजनीतिक नेतृत्व इससे अनभिज्ञ नहीं हो सकता कि आर्थिक माहौल किस तरह देश के विकास को दिशा देता है, लेकिन कांग्रेस के रुख से ऐसा नहीं लगता कि उसे देश के आर्थिक माहौल की चिंता है। काले धन वालों के खिलाफ सख्त कार्रवाई को लेकर सरकार की ओर से दिए जाने वाले कुछ बयान भी उद्योग-व्यापार जगत को सशंकित कर रहे हैं। यह समझना होगा कि वैध तौर-तरीकों से टैक्स बचाने और हेराफेरी कर टैक्स से बचने में अंतर है।',
    description: 'Exam passage 25/50 (116 words)',
    content:
      'xqtjkr dh ,d jSyh esa tc jkgqy xka/kh us iz/kkuea=h ds f[kykQ vius vkjksi mNkys rks viuh txgalkbZ gh djk cSBsA mUgksaus mu iqjkus vkjksiksa dks gh nksgjk;k ftUgsa [kqn lqizhe dksVZ [kks[kys Bgjk pqdk FkkA jktuhfrd usr`Ro blls vufHkK ugha gks ldrk fd vkfFkZd ekgkSy fdl rjg ns\'k ds fodkl dks fn\'kk nsrk gS] ysfdu dkaxzsl ds #[k ls ,slk ugha yxrk fd mls ns\'k ds vkfFkZd ekgkSy dh fpark gSA dkys /ku okyksa ds f[kykQ l[r dkjZokbZ dks ysdj ljdkj dh vksj ls fn, tkus okys dqN c;ku Hkh m|ksx&O;kikj txr dks l\'kafdr dj jgs gSaA ;g le>kuk gksxk fd oS/k rkSj&rjhdksa ls VSDl cpkus vkSj gsjkQsjh dj VSDl ls cpus esa varj gSA',
  },
  {
    id: 26,
    title: 'Exercise : 26/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'अंदेशा है कि कहीं आयकर विभाग इस अंतर की अनदेखी न करने लगे। जहां यह जरूरी है कि सरकार अपने फैसलों के नकारात्मक असर को लेकर सतर्क रहे, वहीं विपक्षी नेता भी बेसिर-पैर की बातों से बाज आएं। राहुल अब यह आरोप दोहराने में जुटे हुए हैं कि नोटबंदी के जरिये प्रधानमंत्री अपने पसंदीदा उद्यमियों को फायदा पहुंचा रहे हैं। अगर उन्हें अपनी साख की चिंता है तो उन्हें प्रमाण सहित बताना चाहिए कि किन उद्यमियों को किस तरह लाभ पहुंचाया जा रहा है? राहुल अपने बेजा बयानों से उद्योग जगत की नकारात्मक छवि तो बना ही रहे हैं, कारोबारियों को भ्रष्ट और चोर भी ठहरा रहे हैं।',
    description: 'Exam passage 26/50 (108 words)',
    content:
      'vans\'kk gS fd dgha vk;dj foHkkx bl varj dh vuns[kh u djus yxsA tgka ;g t:jh gS fd ljdkj vius QSlyksa ds udkjkRed vlj dks ysdj lrdZ jgs] ogha foi{kh usrk Hkh csflj&iSj dh ckrksa ls ckt vk,aA jkgqy vc ;g vkjksi nksgjkus esa tqVs gq, gSa fd uksVcanh ds tfj;s iz/kkuea=h vius ilanhnk m|fe;ksa dks Qk;nk igqapk jgs gSaA vxj mUgsa viuh lk[k dh fpark gS rks mUgsa izek.k lfgr crkuk pkfg, fd fdu m|fe;ksa dks fdl rjg ykHk igqapk;k tk jgk gS\\ jkgqy vius cstk c;kuksa ls m|ksx txr dh udkjkRed Nfo rks cuk gh jgs gSa] dkjksckfj;ksa dks Hkz"V vkSj pksj Hkh Bgjk jgs gSaA',
  },
  {
    id: 27,
    title: 'Exercise : 27/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'किसी भी देश की अर्थव्यवस्था को मजबूती वहां के कारोबारियों से ही मिलती है। यदि राजनीतिक स्वार्थ के फेर में कारोबारियों को चोर ठहराया जाएगा तो इससे न केवल उद्योग जगत हतोत्साहित होगा, बल्कि निवेश पर भी बुरा असर पड़ेगा। इससे अंतरराष्ट्रीय जगत में भी यह संदेश जाएगा कि भारत में तो उद्योगपतियों को लांछित किया जाता है। इसके नतीजे अच्छे नहीं होंगे। \'मैंने पीछे मुड़कर ललकारा : मैं पीछे देखना ही नहीं चाहता, क्यों देखूंगा बीते समय को?\' - अज्ञात। आज, बीत रहे वर्ष को लेकर एक नितांत व्यक्तिगत विचार को ही कॉलम के रूप में लिखने का प्रयास है।',
    description: 'Exam passage 27/50 (101 words)',
    content:
      'fdlh Hkh ns\'k dh vFkZO;oLFkk dks etcwrh ogka ds dkjksckfj;ksa ls gh feyrh gSA ;fn jktuhfrd LokFkZ ds Qsj esa dkjksckfj;ksa dks pksj Bgjk;k tk,xk rks blls u dsoy m|ksx txr grksRlkfgr gksxk] cfYd fuos\'k ij Hkh cqjk vlj iM+sxkA blls varjjk"Vjh; txr esa Hkh ;g lans\'k tk,xk fd Hkkjr esa rks m|ksxifr;ksa dks ykafNr fd;k tkrk gSA blds urhts vPNs ugha gksaxsA ^eSaus ihNs eqM+dj yydkjk % eSa ihNs ns[kuk gh ugha pkgrk] D;ksa ns[kwaxk chrs le; dks\\* & vKkrA vkt] chr jgs o"kZ dks ysdj ,d furkar O;fDrxr fopkj dks gh dkWye ds :i esa fy[kus dk iz;kl gSA',
  },
  {
    id: 28,
    title: 'Exercise : 28/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इसी आशा के साथ कि यह व्यक्तिगत होकर भी व्यापक और व्यावहारिक है। पाठकों के किसी काम का हो सकता है। क्यों न एक नए तरह से 2016 को देखें - जिससे आने वाले 2017 का कोई मार्ग भी खुल सके। जीवन तीन ही तरह से नई बातों, नई दिशाओं और नई ऊंचाई-नई गहराई में ले जाता है : 1. किसी से मिलिए (मीट पीपल) 2. कहीं जाइए (विजिट प्लेसेज) 3. कुछ पढ़िये (स्टडी डीप)। कहने को ये तीन तरीके हैं, किन्तु समूचा संसार इन्हीं तीन बातों में समाया हुआ है। ध्यान से देखें, तो चौथी कोई बात जीवन में होती ही नहीं है। होती है : 4. कुछ कीजिए (डू - यह सबसे छोटा शब्द संसार का सबसे लंबा शब्द है)।',
    description: 'Exam passage 28/50 (122 words)',
    content:
      'blh vk\'kk ds lkFk fd ;g O;fDrxr gksdj Hkh O;kid vkSj O;kogkfjd gSA ikBdksa ds fdlh dke dk gks ldrk gSA D;ksa u ,d u, rjg ls 2016 dks ns[ksa & ftlls vkus okys 2017 dk dksbZ ekxZ Hkh [kqy ldsA thou rhu gh rjg ls ubZ ckrksa] ubZ fn\'kkvksa vkSj ubZ mwapkbZ&ubZ xgjkbZ esa ys tkrk gS % 1- fdlh ls fefy, (ehV ihiy) 2- dgha tkb, (foftV Iyslst) 3- dqN if<+;s (LVMh Mhi)A dgus dks ;s rhu rjhds gSa] fdUrq lewpk lalkj bUgha rhu ckrksa esa lek;k gqvk gSA /;ku ls ns[ksa] rks pkSFkh dksbZ ckr thou esa gksrh gh ugha gSA gksrh gS % 4- dqN dhft, (Mw & ;g lcls NksVk \'kCn lalkj dk lcls yack \'kCn gS)A',
  },
  {
    id: 29,
    title: 'Exercise : 29/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'किन्तु हम जो कुछ भी करेंगे - वह इन्हीं तीन बातों पर निर्भर होगा। वैसे ये तीनों भी कुछ \'करना\' ही है। जैसे हम सोते, जागते, हंसते, रोते, खेलते या बैठते भी हैं तो उसके मूल में किसी से मिलना (या ना मिलना), कहीं जाना (या न जा पाना) और कुछ पढ़ना (या ना पढ़ना) ही होगा। यदि आप कुछ समय निकालकर, अपने आप से यह बात करें कि इस साल किन-किन लोगों से मिले - तो आपको हैरानी हो सकती है। क्योंकि, हो सकता है आप बहुत कम ही लोगों से मिले हों। इतने कम, कि उंगलियों पर गिने जा सकें। इतने कम, कि पल भर में याद आ जाएं।',
    description: 'Exam passage 29/50 (111 words)',
    content:
      'fdUrq ge tks dqN Hkh djsaxs & og bUgha rhu ckrksa ij fuHkZj gksxkA oSls ;s rhuksa Hkh dqN ^djuk* gh gSA tSls ge lksrs] tkxrs] galrs] jksrs] [ksyrs ;k cSBrs Hkh gSa rks mlds ewy esa fdlh ls feyuk (;k uk feyuk)] dgha tkuk (;k u tk ikuk) vkSj dqN i<+uk (;k uk i<+uk) gh gksxkA ;fn vki dqN le; fudkydj] vius vki ls ;g ckr djsa fd bl lky fdu&fdu yksxksa ls feys & rks vkidks gSjkuh gks ldrh gSA D;ksafd] gks ldrk gS vki cgqr de gh yksxksa ls feys gksaA brus de] fd maxfy;ksa ij fxus tk ldsaA brus de] fd iy Hkj esa ;kn vk tk,aA',
  },
  {
    id: 30,
    title: 'Exercise : 30/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'चूंकि मिलने से आशय \'नए लोगों से\' मिलने का है। और सच यही है कि हम बार-बार, लगातार उन्हीं लोगों से मिलते रहते हैं, जिन्हें हम पहले से जानते हैं। आवश्यक भी है। अनिवार्य भी। अपरिहार्य भी। और यही संभवतः कारण है कि हम अनेक नए विचार, नई बातें, नए काम जान ही नहीं पाते। फिर हमारा काम भी कुछ ऐसी बाध्यता बना देता है। इसके ठीक विपरीत भी हो सकता है। संभव है कि आप असंख्य लोगों से मिले हों। इतने अधिक, कि याद ही न रहे, न उनकी, न उनकी बातों की। यह जानकर भी हैरानी हो सकती है।',
    description: 'Exam passage 30/50 (101 words)',
    content:
      'pwafd feyus ls vk\'k; ^u, yksxksa ls* feyus dk gSA vkSj lp ;gh gS fd ge ckj&ckj] yxkrkj mUgha yksxksa ls feyrs jgrs gSa] ftUgsa ge igys ls tkurs gSaA vko\';d Hkh gSA vfuok;Z HkhA vifjgk;Z HkhA vkSj ;gh laHkor% dkj.k gS fd ge vusd u, fopkj] ubZ ckrsa] u, dke tku gh ugha ikrsA fQj gekjk dke Hkh dqN ,slh ck/;rk cuk nsrk gSA blds Bhd foijhr Hkh gks ldrk gSA laHko gS fd vki vla[; yksxksa ls feys gksaA brus vf/kd] fd ;kn gh u jgs] u mudh] u mudh ckrksa dhA ;g tkudj Hkh gSjkuh gks ldrh gSA',
  },
  {
    id: 31,
    title: 'Exercise : 31/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'लोगों से, नए-नए लोगों से मिलना हमारी आंखें खोल देता है। बशर्ते कि उन लोगों से हम बात करें तो हमारा मस्तिष्क खुला रहना चाहिए। उन्हें सुनने को हम तैयार हों। ग्रहण करने के लिए हाथ आगे बढ़ाने ही पड़ते हैं। अब लोगों के प्रकार की बात : \'अनजान, अपरिचित।\' \'आप उन्हें जानते हैं, वे आपको नहीं।\' \'वे आपको जानते हैं, आप उन्हें नहीं।\' \'जिनसे लम्बे समय से मिले नहीं।\' \'प्रसिद्ध, या प्रभावी, या पसंदीदा व्यक्ति।\' नए लोगों की अनेक श्रेणियां हो सकती हैं। आज इन पांच की ही बात। इसलिए महत्वपूर्ण, चूंकि इन पांच श्रेणियों में से किसी भी तरह की श्रेणी के व्यक्ति आपको इस बीत रहे वर्ष में यदि नहीं मिले हैं - तो निश्चित जानिए, आप कुछ न कुछ \'नया\' जानने से रह गए हैं।',
    description: 'Exam passage 31/50 (129 words)',
    content:
      'yksxksa ls] u,&u, yksxksa ls feyuk gekjh vka[ksa [kksy nsrk gSA c\'krsZ fd mu yksxksa ls ge ckr djsa rks gekjk efLr"d [kqyk jguk pkfg,A mUgsa lquus dks ge rS;kj gksaA xzg.k djus ds fy, gkFk vkxs c<+kus gh iM+rs gSaA vc yksxksa ds izdkj dh ckr % ^vutku] vifjfprA* ^vki mUgsa tkurs gSa] os vkidks ughaA* ^os vkidks tkurs gSa] vki mUgsa ughaA* ^ftuls yEcs le; ls feys ughaA* ^izfln~/k] ;k izHkkoh] ;k ilanhnk O;fDrA* u, yksxksa dh vusd Jsf.k;ka gks ldrh gSaA vkt bu ikap dh gh ckrA blfy, egRoiw.kZ] pwafd bu ikap Jsf.k;ksa esa ls fdlh Hkh rjg dh Js.kh ds O;fDr vkidks bl chr jgs o"kZ esa ;fn ugha feys gSa & rks fuf\'pr tkfu,] vki dqN u dqN ^u;k* tkuus ls jg x, gSaA',
  },
  {
    id: 32,
    title: 'Exercise : 32/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'अंतर नहीं पड़ता, किन्तु पड़ता तो है। \'नया\' जानना ही आवश्यक नहीं है। यदि आप कुछ सोच रहे हैं, वही बात यदि कोई नया व्यक्ति भी कह देता है, तो आपकी सोच को बल मिलता है। आपको बल मिलता है। मैं अपना ही ताजा अनुभव बताना चाहूंगा। पिछले दिनों मैं बिल गेट्स से मिला। मैंने उनसे कुछ प्रश्न किए। कुछ बात की। बिल गेट्स मुझे पसंद हैं। अत्यधिक पसंद हैं। संसार के सर्वाधिक धनवान व्यक्ति के रूप में नहीं। करोड़ों-अरबों साधारण नागरिकों में कम्प्यूटर को सरल बनाने वाली माइक्रोसॉफ्ट कंपनी बनाने वाले विजनरी के रूप में नहीं। और न ही इसलिए कि वे अपनी साढ़े छह-सात लाख करोड़ रुपये की संपत्ति का 99 प्रतिशत दान दे चुके हैं।',
    description: 'Exam passage 32/50 (118 words)',
    content:
      'varj ugha iM+rk] fdUrq iM+rk rks gSA ^u;k* tkuuk gh vko\';d ugha gSA ;fn vki dqN lksp jgs gSa] ogh ckr ;fn dksbZ u;k O;fDr Hkh dg nsrk gS] rks vkidh lksp dks cy feyrk gSA vkidks cy feyrk gSA eSa viuk gh rktk vuqHko crkuk pkgwaxkA fiNys fnuksa eSa fcy xsV~l ls feykA eSaus muls dqN iz\'u fd,A dqN ckr dhA fcy xsV~l eq>ks ilan gSaA vR;f/kd ilan gSaA lalkj ds lokZf/kd /kuoku O;fDr ds :i esa ughaA djksM+ksa&vjcksa lk/kkj.k ukxfjdksa esa dEI;wVj dks ljy cukus okyh ekbdzkslkWQ~V daiuh cukus okys fotujh ds :i esa ughaA vkSj u gh blfy, fd os viuh lk<+s Ng&lkr yk[k djksM+ #i;s dh laifRr dk 99 izfr\'kr nku ns pqds gSaA',
  },
  {
    id: 33,
    title: 'Exercise : 33/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'किन्तु इसलिए कि वे जो भी पैसा स्वास्थ्य और प्राथमिक शिक्षा के लिए देते हैं, उसका एक-एक पैसा सही रूप से लग रहा है या नहीं - यह जांचने खुद संसार के कोने-कोने में जाते हैं। और उनकी पत्नी मेलिंडा यह भारी-भरकम हिसाब रखती हैं। वे मुझे दानवीर नहीं, अति कर्मठ मनुष्य लगते हैं। पैसा कोई भी दान कर सकता है - समय लगाना कोई नहीं चाहता। गेट्स अपना समूचा समय देते हैं। किन्तु गेट्स क्या और कैसे हैं, यह तो सभी जानते हैं। आज प्रसंग गेट्स का नहीं है, बल्कि बीत रहे वर्ष का है।',
    description: 'Exam passage 33/50 (96 words)',
    content:
      'fdUrq blfy, fd os tks Hkh iSlk LokLF; vkSj izkFkfed f\'k{kk ds fy, nsrs gSa] mldk ,d&,d iSlk lgh :i ls yx jgk gS ;k ugha & ;g tkapus [kqn lalkj ds dksus&dksus esa tkrs gSaA vkSj mudh iRuh esfyaMk ;g Hkkjh&Hkjde fglkc j[krh gSaA os eq>ks nkuohj ugha] vfr deZB euq"; yxrs gSaA iSlk dksbZ Hkh nku dj ldrk gS & le; yxkuk dksbZ ugha pkgrkA xsV~l viuk lewpk le; nsrs gSaA fdUrq xsV~l D;k vkSj dSls gSa] ;g rks lHkh tkurs gSaA vkt izlax xsV~l dk ugha gS] cfYd chr jgs o"kZ dk gSA',
  },
  {
    id: 34,
    title: 'Exercise : 34/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'गेट्स का उल्लेख एक विशेष कारण से आया। उनसे मैंने प्रश्न किया था कि विश्व की सबसे बड़ी कॉर्पोरेट व्यवस्था हो या कि इतने सारे अनजान देशों में जाकर परोपकार के काम - वो एक क्या बात है जो सबसे कठिन है या सर्वाधिक बड़ी बाधा है, परेशान करती है? उनका उत्तर था : सही लोग मिलना। हालांकि उनका संदर्भ कुछ और था। फिर भी हमारा सारा जीवन, हमारा समस्त काम और हमारी सफलता-विफलता, सुख-दुःख इसी पर निर्भर करते हैं कि हमें \'लोग कैसे मिले\' हैं? आवश्यक नहीं, सभी मित्र हों। शत्रु भी हों, तय नहीं। अधिकतर लोग बस \'परिचित\' होते हैं।',
    description: 'Exam passage 34/50 (102 words)',
    content:
      'xsV~l dk mYys[k ,d fo\'ks"k dkj.k ls vk;kA muls eSaus iz\'u fd;k Fkk fd fo\'o dh lcls cM+h dkWiksZjsV O;oLFkk gks ;k fd brus lkjs vutku ns\'kksa esa tkdj ijksidkj ds dke & oks ,d D;k ckr gS tks lcls dfBu gS ;k lokZf/kd cM+h ck/kk gS] ijs\'kku djrh gS\\ mudk mRrj Fkk % lgh yksx feyukA gkykafd mudk lanHkZ dqN vkSj FkkA fQj Hkh gekjk lkjk thou] gekjk leLr dke vkSj gekjh lQyrk&foQyrk] lq[k&nq%[k blh ij fuHkZj djrs gSa fd gesa ^yksx dSls feys* gSa\\ vko\';d ugha] lHkh fe= gksaA \'k=q Hkh gksa] r; ughaA vf/kdrj yksx cl ^ifjfpr* gksrs gSaA',
  },
  {
    id: 35,
    title: 'Exercise : 35/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'जो नए और अपरिचित हैं, वे भी मिलते ही \'परिचित\' हो जाते हैं। त्रासदी है कि \'परिचितों\' से भरे इस संसार में हम \'मित्र\' ढूंढते रहते हैं। फिर हम अपने जैसी सोच वालों में मित्र पाते हैं। लाइक माइन्डेड। जबकि \'अलग\' या \'नई\' सोच वाला बेहतर मित्र हो सकता है। हमारी भूल, कमी, दुर्बलता को दो-टूक बता सके, वही सच्चा मित्र है। और ऐसा बताने वाले को हम मित्र बनाए रखें, रोष-क्षोभ-क्रोध के साथ-साथ, तो ही हम सच्चे मित्र हैं। तो आपको एक बार, यूं ही, अवश्य जांचना चाहिए कि बीते बरस में किन लोगों से आप मिले? आपसे कौन मिला?',
    description: 'Exam passage 35/50 (101 words)',
    content:
      'tks u, vkSj vifjfpr gSa] os Hkh feyrs gh ^ifjfpr* gks tkrs gSaA =klnh gS fd ^ifjfprksa* ls Hkjs bl lalkj esa ge ^fe=* <wa<rs jgrs gSaA fQj ge vius tSlh lksp okyksa esa fe= ikrs gSaA ykbd ekbUMsMA tcfd ^vyx* ;k ^ubZ* lksp okyk csgrj fe= gks ldrk gSA gekjh Hkwy] deh] nqcZyrk dks nks&Vwd crk lds] ogh lPpk fe= gSA vkSj ,slk crkus okys dks ge fe= cuk, j[ksa] jks"k&{kksHk&dzks/k ds lkFk&lkFk] rks gh ge lPps fe= gSaA rks vkidks ,d ckj] ;wa gh] vo\'; tkapuk pkfg, fd chrs cjl esa fdu yksxksa ls vki feys\\ vkils dkSu feyk\\',
  },
  {
    id: 36,
    title: 'Exercise : 36/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'आप पाएंगे कि आपको कुछ न कुछ मिला। हो सकता है लाभ, हो सकता है हानि, या कि सीख। कुछ भी व्यर्थ नहीं है जीवन में। अर्थ ढूंढने वाला चाहिए। 2. कहीं जाइये : अर्थपूर्ण है कहीं जाना। नई जगह जाना। नई जगह का अर्थ पर्यटन ही नहीं है। कहीं भी जाना। नए स्थान, आपके अपने नगर में भी हो सकते हैं। जाने के मूल में अनेक अर्थ हैं। सर्वाधिक बड़ा अर्थ है - हिलना। अपनी जगह से हिलना। हम अपने काम की परिधि में ऐसे बंध जाते हैं कि एक-दो स्थानों पर जड़ हो जाते हैं। जड़ता तोड़ता है भ्रमण। नए आयाम, नए आकार, नए आश्चर्य, नए आयोजन। वास्तव में जब आप किसी मैदान में जाते हैं, तो मन दूर तक दौड़ने लगता है।',
    description: 'Exam passage 36/50 (125 words)',
    content:
      'vki ik,axs fd vkidks dqN u dqN feykA gks ldrk gS ykHk] gks ldrk gS gkfu] ;k fd lh[kA dqN Hkh O;FkZ ugha gS thou esaA vFkZ <wa<us okyk pkfg,A 2- dgha tkb;s % vFkZiw.kZ gS dgha tkukA ubZ txg tkukA ubZ txg dk vFkZ i;ZVu gh ugha gSA dgha Hkh tkukA u, LFkku] vkids vius uxj esa Hkh gks ldrs gSaA tkus ds ewy esa vusd vFkZ gSaA lokZf/kd cM+k vFkZ gS & fgyukA viuh txg ls fgyukA ge vius dke dh ifjf/k esa ,sls ca/k tkrs gSa fd ,d&nks LFkkuksa ij tM+ gks tkrs gSaA tM+rk rksM+rk gS Hkze.kA u, vk;ke] u, vkdkj] u, vk\'p;Z] u, vk;kstuA okLro esa tc vki fdlh eSnku esa tkrs gSa] rks eu nwj rd nkSM+us yxrk gSA',
  },
  {
    id: 37,
    title: 'Exercise : 37/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'पहाड़ पर जाते हैं, तो हिम्मत नई ऊंचाइयां चढ़ जाती है। नदी-समुद्र में जाते हैं, तो जीवन की गहराई को लेकर शांत मस्तिष्क, शरारती मन के प्रवाह से खेलने लगता है। सुमन के शब्दों की याद आ गई : \'... आज नहीं, प्रिय कल... कह वह कल-कल करती चली गई...\'। शीर्षक था : नदी। बाजारों की जीवंत रेलमपेल हो या कि इमारतों का तना हुआ अहंकार, जगह-जगह जाने से मिलता ही मिलता है। हम खोते कुछ नहीं। कुछ चोरी हो जाए, तो भी नहीं। सीख उससे भी मिलती ही है। तो स्वयं से पूछिए, कि इस बरस कहां-कहां गए?',
    description: 'Exam passage 37/50 (99 words)',
    content:
      'igkM+ ij tkrs gSa] rks fgEer ubZ mwapkb;ka p<+ tkrh gSA unh&leqnz esa tkrs gSa] rks thou dh xgjkbZ dks ysdj \'kkar efLr"d] \'kjkjrh eu ds izokg ls [ksyus yxrk gSA lqeu ds \'kCnksa dh ;kn vk xbZ % ^--- vkt ugha] fiz; dy--- dg og dy&dy djrh pyh xbZ---*A \'kh"kZd Fkk % unhA cktkjksa dh thoar jsyeisy gks ;k fd bekjrksa dk ruk gqvk vgadkj] txg&txg tkus ls feyrk gh feyrk gSA ge [kksrs dqN ughaA dqN pksjh gks tk,] rks Hkh ughaA lh[k mlls Hkh feyrh gh gSA rks Lo;a ls iwfN,] fd bl cjl dgka&dgka x,\\',
  },
  {
    id: 38,
    title: 'Exercise : 38/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      '3. कुछ पढ़िए : यह 21वीं सदी में सर्वाधिक उपयोगी है। हमेशा था। किन्तु चूंकि जीवन की आपाधापी, समय, साधन और सुविधाओं की कमी ने हमें \'किसी से मिलें\' व \'कहीं जाएं\' दोनों में कमी करने पर विवश कर दिया है - इसलिए यह श्रेष्ठ माध्यम है। कुछ पढ़िये से तात्पर्य सीधा है - कुछ भी पढ़िये। हर वर्ष के अंत में कई सहयोगी मुझसे बात करते हैं कि वे नव वर्ष से बहुत कुछ पढ़ना आरंभ करना चाहते हैं। तो क्या पढ़ूं? उत्तर एक ही है : जिस विषय में, जिस किसी बारे में आपको जानना अच्छा लगे - वही पढ़िये। कोई ज्ञान का पोथा नहीं पढ़ना है। बस एक ही बात ध्यान रखनी है - कि पढ़ना ध्यान से है।',
    description: 'Exam passage 38/50 (122 words)',
    content:
      '3- dqN if<+, % ;g 21oha lnh esa lokZf/kd mi;ksxh gSA ges\'kk FkkA fdUrq pwafd thou dh vkik/kkih] le;] lk/ku vkSj lqfo/kkvksa dh deh us gesa ^fdlh ls feysa* o ^dgha tk,a* nksuksa esa deh djus ij foo\'k dj fn;k gS & blfy, ;g Js"B ek/;e gSA dqN if<+;s ls rkRi;Z lh/kk gS & dqN Hkh if<+;sA gj o"kZ ds var esa dbZ lg;ksxh eq>kls ckr djrs gSa fd os uo o"kZ ls cgqr dqN i<+uk vkjaHk djuk pkgrs gSaA rks D;k i<+wa\\ mRrj ,d gh gS % ftl fo"k; esa] ftl fdlh ckjs esa vkidks tkuuk vPNk yxs & ogh if<+;sA dksbZ Kku dk iksFkk ugha i<+uk gSA cl ,d gh ckr /;ku j[kuh gS & fd i<+uk /;ku ls gSA',
  },
  {
    id: 39,
    title: 'Exercise : 39/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'यहां \'पढ़ना\' लिखा है, जिसका अंग्रेजी है \'टू रीड\'। यहां आशय गहराई से \'अध्ययन\' करने से है - \'टू स्टडी\'। पढ़ने की आदत डालनी होगी। सबसे अच्छा है - नियमित, प्रतिदिन अखबार पढ़ना, जिससे अपने आप ही कुछ और ललक जगेगी जो आपके स्मार्टफोन की स्क्रीन पूरा कर देगी। हां, सोशल मीडिया पर चल रहे हास्य-कटाक्ष पढ़ने से काम पूरा नहीं हो सकता। वहां मनोरंजन ही है, जो चाहिए। किन्तु कितना? जीवन, मनोरंजन से कहीं आगे है। किसी और के काम आएं, तो जीवन है। किसी से मिलें, कहीं जाएं, कुछ पढ़ें - इस तरह जीवन को आंकना असंभव है, किन्तु आंकना ही होगा। चूंकि हम कुछ करने के लिए जन्मे हैं, जिसके लिए हमें व्यक्ति, स्थान और इबारत चाहिए। बीते वर्ष की भूलों-कमियों-पापों के लिए मैं आप सभी से क्षमा मांगता हूं। किसी का हृदय दुखाना पाप ही तो है। इतना लिखने पर किसी का हृदय तो दुखा ही होगा।',
    description: 'Exam passage 39/50 (151 words)',
    content:
      ';gka ^i<+uk* fy[kk gS] ftldk vaxzsth gS ^Vw jhM*A ;gka vk\'k; xgjkbZ ls ^v/;;u* djus ls gS & ^Vw LVMh*A i<+us dh vknr Mkyuh gksxhA lcls vPNk gS & fu;fer] izfrfnu v[kckj i<+uk] ftlls vius vki gh dqN vkSj yyd txsxh tks vkids LekVZQksu dh Ldzhu iwjk dj nsxhA gka] lks\'ky ehfM;k ij py jgs gkL;&dVk{k i<+us ls dke iwjk ugha gks ldrkA ogka euksjatu gh gS] tks pkfg,A fdUrq fdruk\\ thou] euksjatu ls dgha vkxs gSA fdlh vkSj ds dke vk,a] rks thou gSA fdlh ls feysa] dgha tk,a] dqN i<+sa & bl rjg thou dks vkaduk vlaHko gS] fdUrq vkaduk gh gksxkA pwafd ge dqN djus ds fy, tUes gSa] ftlds fy, gesa O;fDr] LFkku vkSj bckjr pkfg,A chrs o"kZ dh Hkwyksa&dfe;ksa&ikiksa ds fy, eSa vki lHkh ls {kek ekaxrk gwaA fdlh dk g`n; nq[kkuk iki gh rks gSA bruk fy[kus ij fdlh dk g`n; rks nq[kk gh gksxkA',
  },
  {
    id: 40,
    title: 'Exercise : 40/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'भाषण कला में प्रवीण और अदम्य उत्साह के धनी प्रधानमंत्री नरेंद्र मोदी पर इस बात से कोई फर्क नहीं पड़ेगा लेकिन, हकीकत यही है कि अमेरिकी रेटिंग एजेंसी मूडीज भारत की आर्थिक हैसियत बढ़ाने को तैयार नहीं है। यानी कालेधन के खिलाफ उनके द्वारा उठाए गए नोटबंदी और दूसरे कदमों पर अभी दुनिया की प्रतिष्ठित संस्थाएं कोई निर्णय नहीं देना चाहतीं बल्कि उन्हें उसके प्रभावों का इंतजार है। इसके उलट सरकार बेचैन है कि उसकी वैश्विक आर्थिक स्थिति की मान्यता बढ़े और निवेश आए। आश्चर्य है कि रेटिंग बढ़ाने के लिए सरकार ने उसी तरह एजेंसी पर दबाव डाला जैसे अपने देश में कोई भी काम कराने के लिए विभिन्न संस्थाओं और विभागों पर डाला जाता है।',
    description: 'Exam passage 40/50 (117 words)',
    content:
      'Hkk"k.k dyk esa izoh.k vkSj vnE; mRlkg ds /kuh iz/kkuea=h ujsanz eksnh ij bl ckr ls dksbZ QdZ ugha iM+sxk ysfdu] gdhdr ;gh gS fd vesfjdh jsfVax ,tsalh ewMht Hkkjr dh vkfFkZd gSfl;r c<+kus dks rS;kj ugha gSA ;kuh dkys/ku ds f[kykQ muds }kjk mBk, x, uksVcanh vkSj nwljs dneksa ij vHkh nqfu;k dh izfrf"Br laLFkk,a dksbZ fu.kZ; ugha nsuk pkgrha cfYd mUgsa mlds izHkkoksa dk bartkj gSA blds myV ljdkj cspSu gS fd mldh oSf\'od vkfFkZd fLFkfr dh ekU;rk c<+s vkSj fuos\'k vk,A vk\'p;Z gS fd jsfVax c<+kus ds fy, ljdkj us mlh rjg ,tsalh ij ncko Mkyk tSls vius ns\'k esa dksbZ Hkh dke djkus ds fy, fofHkUu laLFkkvksa vkSj foHkkxksa ij Mkyk tkrk gSA',
  },
  {
    id: 41,
    title: 'Exercise : 41/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'राजभाषा हिंदी केवल संवाद का माध्यम नहीं, बल्कि भारतीय अस्मिता और राष्ट्रीय एकता का मजबूत सूत्र है। कार्यालयों और प्रशासनिक कार्यों में सरल हिंदी का प्रयोग जन-जन तक शासकीय योजनाओं को पहुंचाता है। जब हम अपनी भाषा में कार्य करते हैं, तो कार्यकुशलता और पारदर्शिता में अभूतपूर्व वृद्धि होती है। सभी कार्मिकों को हिंदी पत्राचार और टिप्पणियों में मौलिक रूप से कार्य करने का संकल्प लेना चाहिए।',
    description: 'Exam passage 41/50 (67 words)',
    content:
      'jktHkk"kk fganh dsoy laokn dk ek/;e ugha] cfYd Hkkjrh; vfLerk vkSj jk"Vjh; ,drk dk etcwr lw= gSA dk;kZy;ksa vkSj iz\'kklfud dk;ksaZ esa ljy fganh dk iz;ksx tu&tu rd \'kkldh; ;kstukvksa dks igqapkrk gSA tc ge viuh Hkk"kk esa dk;Z djrs gSa] rks dk;Zdq\'kyrk vkSj ikjnf\'kZrk esa vHkwriwoZ o`fn~/k gksrh gSA lHkh dkfeZdksa dks fganh i=kpkj vkSj fVIif.k;ksa esa ekSfyd :i ls dk;Z djus dk ladYi ysuk pkfg,A',
  },
  {
    id: 42,
    title: 'Exercise : 42/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'खेलकूद न केवल हमारे शरीर को बलवान और स्फूर्तिवान बनाते हैं, बल्कि टीम भावना, अनुशासन और नेतृत्व कौशल भी सिखाते हैं। हार और जीत दोनों को सहज भाव से स्वीकार करना ही सच्ची खेल भावना है। युवाओं को प्रतिदिन किसी न किसी मैदानी खेल अथवा शारीरिक व्यायाम में अनिवार्य रूप से भाग लेना चाहिए। स्वस्थ शरीर में ही एकाग्र और स्वस्थ मस्तिष्क का वास होता है।',
    description: 'Exam passage 42/50 (66 words)',
    content:
      '[ksydwn u dsoy gekjs \'kjhj dks cyoku vkSj LQwfrZoku cukrs gSa] cfYd Vhe Hkkouk] vuq\'kklu vkSj usr`Ro dkS\'ky Hkh fl[kkrs gSaA gkj vkSj thr nksuksa dks lgt Hkko ls Lohdkj djuk gh lPph [ksy Hkkouk gSA ;qokvksa dks izfrfnu fdlh u fdlh eSnkuh [ksy vFkok \'kkjhfjd O;k;ke esa vfuok;Z :i ls Hkkx ysuk pkfg,A LoLFk \'kjhj esa gh ,dkxz vkSj LoLFk efLr"d dk okl gksrk gSA',
  },
  {
    id: 43,
    title: 'Exercise : 43/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'बाल श्रम किसी भी सभ्य समाज के माथे पर गहरा कलंक है। हर बच्चे के हाथों में औजारों की जगह कलम और किताबें होनी चाहिए। बाल श्रम उन्मूलन कानून का कड़ाई से अनुपालन और गरीब परिवारों को आर्थिक सुरक्षा प्रदान करना आवश्यक है। जब देश का प्रत्येक बच्चा सुरक्षित और शिक्षित होगा, तभी स्वर्णिम भारत का सपना साकार होगा।',
    description: 'Exam passage 43/50 (59 words)',
    content:
      'cky Je fdlh Hkh lH; lekt ds ekFks ij xgjk dyad gSA gj cPps ds gkFkksa esa vkStkjksa dh txg dye vkSj fdrkcsa gksuh pkfg,A cky Je mUewyu dkuwu dk dM+kbZ ls vuqikyu vkSj xjhc ifjokjksa dks vkfFkZd lqj{kk iznku djuk vko\';d gSA tc ns\'k dk izR;sd cPpk lqjf{kr vkSj f\'kf{kr gksxk] rHkh Lof.kZe Hkkjr dk liuk lkdkj gksxkA',
  },
  {
    id: 44,
    title: 'Exercise : 44/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'नदियां हमारी सभ्यता और संस्कृति की जीवन रेखाएं हैं। गंगा, यमुना, नर्मदा और चंबल जैसी पावन नदियों ने सदियों से हमारी भूमि को उर्वर बनाया है और प्यास बुझाई है। वर्तमान में औद्योगिक अपशिष्ट और शहरी कचरे से नदियों का प्रदूषण गंभीर चिंता का विषय है। नदियों की निर्मलता और अविरलता की रक्षा करना हमारा राष्ट्रीय कर्तव्य है।',
    description: 'Exam passage 44/50 (58 words)',
    content:
      'ufn;ka gekjh lH;rk vkSj laLd`fr dh thou js[kk,a gSaA xaxk] ;equk] ueZnk vkSj pacy tSlh ikou ufn;ksa us lfn;ksa ls gekjh Hkwfe dks moZj cuk;k gS vkSj I;kl cq>kkbZ gSA orZeku esa vkS|ksfxd vif\'k"V vkSj \'kgjh dpjs ls ufn;ksa dk iznw"k.k xaHkhj fpark dk fo"k; gSA ufn;ksa dh fueZyrk vkSj vfojyrk dh j{kk djuk gekjk jk"Vjh; drZO; gSA',
  },
  {
    id: 45,
    title: 'Exercise : 45/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'इंदिरा गांधी नहर परियोजना मरुभूमि राजस्थान के लिए जीवन दायिनी सिद्ध हुई है। पंजाब के हरिके बैराज से सतलुज और व्यास नदियों का जल लाकर थार के मरुस्थल को हरा भरा बनाया गया है। श्रीगंगानगर, हनुमानगढ़, बीकानेर और जैसलमेर जिलों में गेहूं, सरसों और कपास की बंपर पैदावार इस ऐतिहासिक नहर की ही देन है।',
    description: 'Exam passage 45/50 (55 words)',
    content:
      'bafnjk xka/kh ugj ifj;kstuk e#Hkwfe jktLFkku ds fy, thou nkf;uh fln~/k gqbZ gSA iatkc ds gfjds cSjkt ls lryqt vkSj O;kl ufn;ksa dk ty ykdj Fkkj ds e#LFky dks gjk Hkjk cuk;k x;k gSA Jhxaxkuxj] guqekux<+] chdkusj vkSj tSlyesj ftyksa esa xsgwa] ljlksa vkSj dikl dh caij iSnkokj bl ,sfrgkfld ugj dh gh nsu gSA',
  },
  {
    id: 46,
    title: 'Exercise : 46/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'ऊर्जा की बचत ही वास्तविक ऊर्जा का उत्पादन है। घरों और कार्यालयों में आवश्यकता न होने पर बिजली के पंखे, लाइट और उपकरण बंद करने की आदत डालनी चाहिए। ऊर्जा दक्ष एलईडी बल्बों और सौर उपकरणों का प्रयोग बिजली के बिल को कम करने के साथ-साथ प्राकृतिक संसाधनों के संरक्षण में अमूल्य योगदान देता है।',
    description: 'Exam passage 46/50 (55 words)',
    content:
      'mwtkZ dh cpr gh okLrfod mwtkZ dk mRiknu gSA ?kjksa vkSj dk;kZy;ksa esa vko\';drk u gksus ij fctyh ds ia[ks] ykbV vkSj midj.k can djus dh vknr Mkyuh pkfg,A mwtkZ n{k ,ybZMh cYcksa vkSj lkSj midj.kksa dk iz;ksx fctyh ds fcy dks de djus ds lkFk&lkFk izkd`frd lalk/kuksa ds laj{k.k esa vewY; ;ksxnku nsrk gSA',
  },
  {
    id: 47,
    title: 'Exercise : 47/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'स्वतंत्र और निष्पक्ष न्यायपालिका भारतीय लोकतंत्र का सबसे मजबूत सुरक्षा कवच है। विधि का शासन प्रत्येक नागरिक को समानता और न्याय की गारंटी देता है। लोक अदालतों के माध्यम से आपसी सुलह और समझौते से विवादों का त्वरित तथा सुलभ समाधान संभव हुआ है। नागरिकों में विधिक अधिकारों की जागरूकता सामाजिक सुरक्षा को बल प्रदान करती है।',
    description: 'Exam passage 47/50 (57 words)',
    content:
      'Lora= vkSj fu"i{k U;k;ikfydk Hkkjrh; yksdra= dk lcls etcwr lqj{kk dop gSA fof/k dk \'kklu izR;sd ukxfjd dks lekurk vkSj U;k; dh xkjaVh nsrk gSA yksd vnkyrksa ds ek/;e ls vkilh lqyg vkSj le>kkSrs ls fooknksa dk Rofjr rFkk lqyHk lek/kku laHko gqvk gSA ukxfjdksa esa fof/kd vf/kdkjksa dh tkx:drk lkekftd lqj{kk dks cy iznku djrh gSA',
  },
  {
    id: 48,
    title: 'Exercise : 48/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'अतिथि देवो भवः की पावन भावना भारतीय संस्कृति का मूल मंत्र है। हमारे देश के ऐतिहासिक किले, भव्य मंदिर, रमणीय समुद्र तट और शांत हिल स्टेशन दुनिया भर के पर्यटकों को मंत्रमुग्ध करते हैं। पर्यटन उद्योग से लाखों स्थानीय युवाओं को रोजगार मिलता है और विदेशी मुद्रा का अर्जन होता है। पर्यटक स्थलों की स्वच्छता बनाए रखना आवश्यक है।',
    description: 'Exam passage 48/50 (59 words)',
    content:
      'vfrfFk nsoks Hko% dh ikou Hkkouk Hkkjrh; laLd`fr dk ewy ea= gSA gekjs ns\'k ds ,sfrgkfld fdys] HkO; eafnj] je.kh; leqnz rV vkSj \'kkar fgy LVs\'ku nqfu;k Hkj ds i;ZVdksa dks ea=eqX/k djrs gSaA i;ZVu m|ksx ls yk[kksa LFkkuh; ;qokvksa dks jkstxkj feyrk gS vkSj fons\'kh eqnzk dk vtZu gksrk gSA i;ZVd LFkyksa dh LoPNrk cuk, j[kuk vko\';d gSA',
  },
  {
    id: 49,
    title: 'Exercise : 49/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'सोशल मीडिया आज सूचनाओं के त्वरित आदान-प्रदान और विचारों की अभिव्यक्ति का सबसे सशक्त मंच बन चुका है। इसके सकारात्मक प्रयोग से जन जागरूकता, शिक्षा और सामाजिक सरोकारों को नया बल मिलता है। हालांकि, बिना सत्यापन के किसी भी भ्रामक समाचार या अफवाह को प्रसारित करने से बचना चाहिए। जिम्मेदार डिजिटल नागरिकता समय की मांग है।',
    description: 'Exam passage 49/50 (56 words)',
    content:
      'lks\'ky ehfM;k vkt lwpukvksa ds Rofjr vknku&iznku vkSj fopkjksa dh vfHkO;fDr dk lcls l\'kDr eap cu pqdk gSA blds ldkjkRed iz;ksx ls tu tkx:drk] f\'k{kk vkSj lkekftd ljksdkjksa dks u;k cy feyrk gSA gkykafd] fcuk lR;kiu ds fdlh Hkh Hkzked lekpkj ;k vQokg dks izlkfjr djus ls cpuk pkfg,A ftEesnkj fMftVy ukxfjdrk le; dh ekax gSA',
  },
  {
    id: 50,
    title: 'Exercise : 50/50',
    category: 'Special 50 Exam Passages',
    focusKeys: 'All Keys & Speed Practice',
    focusHindi:
      'आत्मनिर्भर भारत का संकल्प देश को आर्थिक, तकनीकी और औद्योगिक रूप से सशक्त बनाने का राष्ट्रव्यापी अभियान है। स्थानीय उत्पादों को बढ़ावा देना और स्वदेशी विनिर्माण को प्राथमिकता देना इस अभियान का मुख्य उद्देश्य है। जब हर नागरिक अपने कर्तव्यों का निष्ठापूर्वक पालन करेगा, तब भारत विश्व गुरु के रूप में पुनः प्रतिष्ठित होगा।',
    description: 'Exam passage 50/50 (54 words)',
    content:
      'vkRefuHkZj Hkkjr dk ladYi ns\'k dks vkfFkZd] rduhdh vkSj vkS|ksfxd :i ls l\'kDr cukus dk jk"VjO;kih vfHk;ku gSA LFkkuh; mRiknksa dks c<+kok nsuk vkSj Lons\'kh fofuekZ.k dks izkFkfedrk nsuk bl vfHk;ku dk eq[; mn~ns\'; gSA tc gj ukxfjd vius drZO;ksa dk fu"BkiwoZd ikyu djsxk] rc Hkkjr fo\'o xq# ds :i esa iqu% izfrf"Br gksxkA',
  }
];
