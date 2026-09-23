const fs = require('fs');
const path = require('path');
const { unicodeToKruti } = require('../verify_kruti_full.cjs');

const paragraphs = [
  {
    id: 1,
    title: 'Paragraph 1',
    category: 'Indian Heritage & Unity',
    description: 'Authentic Hindi typing passage on Indian diversity and heritage',
    hindi: 'भारत विविधताओं का देश है। यहाँ विभिन्न संस्कृतियों और भाषाओं का संगम देखने को मिलता है। हमारे देश का इतिहास बहुत गौरवशाली रहा है। भारत के लोगों में एकता और भाईचारे की भावना हमेशा से रही है। यहाँ के प्राकृतिक दृश्य और ऐतिहासिक स्मारक पूरे विश्व में प्रसिद्ध हैं। हमें अपने देश पर गर्व होना चाहिए।'
  },
  {
    id: 2,
    title: 'Paragraph 2',
    category: 'Science & Digital India',
    description: 'Passage focusing on science, digital technology and progress',
    hindi: 'विज्ञान और प्रौद्योगिकी के क्षेत्र में भारत ने उल्लेखनीय प्रगति की है। अंतरिक्ष अनुसंधान से लेकर सूचना प्रौद्योगिकी तक हमारे वैज्ञानिकों ने विश्व में अपना लोहा मनवाया है। डिजिटल भारत अभियान ने लोगों के जीवन को सरल बना दिया है।'
  },
  {
    id: 3,
    title: 'Paragraph 3',
    category: 'Education & Society',
    description: 'Passage focusing on education, character building and society',
    hindi: 'शिक्षा प्रत्येक व्यक्ति के जीवन का सबसे महत्वपूर्ण स्तम्भ है। इससे न केवल ज्ञान का प्रसार होता है बल्कि व्यक्तित्व का सर्वांगीण विकास भी होता है। एक शिक्षित समाज ही देश को उन्नति के मार्ग पर ले जा सकता है।'
  },
  {
    id: 4,
    title: 'Paragraph 4',
    category: 'Environment Conservation',
    description: 'Passage focusing on environment protection and tree plantation',
    hindi: 'पर्यावरण संरक्षण आज के समय की सबसे बड़ी आवश्यकता बन गई है। वृक्षारोपण करना और प्रदूषण को रोकना हम सभी का कर्तव्य है। प्रकृति का संतुलन बनाए रखना मानव जीवन के अस्तित्व के लिए अति आवश्यक है।'
  },
  {
    id: 5,
    title: 'Paragraph 5',
    category: 'Discipline & Success',
    description: 'Passage focusing on time management and discipline',
    hindi: 'अनुशासन और समय पालन सफलता की दो सबसे मजबूत कुंजियाँ हैं। परिश्रम का कोई विकल्प नहीं होता। जो व्यक्ति समय की कद्र करता है समय भी उसकी कद्र करता है और उसे उच्च शिखर पर पहुंचाना सुनिश्चित करता है।'
  },
  {
    id: 6,
    title: 'Paragraph 6',
    category: 'Rajasthan History & Valour',
    description: 'Passage on heroic sagas and historic heritage of Rajasthan',
    hindi: 'राजस्थान की भूमि त्याग, बलिदान और शौर्य की अमर गाथाओं से परिपूर्ण है। यहाँ के रणबांकुरों ने मातृभूमि की रक्षा के लिए अपने प्राणों की आहुति दी। चित्तौड़गढ़, कुंभलगढ़ और मेहरानगढ़ जैसे सुदृढ़ दुर्ग आज भी उस अदम्य साहस और गौरवमयी इतिहास के जीवंत साक्षी हैं। इस पावन धरा की माटी में देशभक्ति की अनूठी सुगंध समाई हुई है।'
  },
  {
    id: 7,
    title: 'Paragraph 7',
    category: 'Panchayati Raj & Rural Governance',
    description: 'Passage on grassroots democracy and Panchayati Raj milestone',
    hindi: 'पंचायती राज संस्थाएं हमारे लोकतांत्रिक ढांचे की वास्तविक आधारशिला हैं। राजस्थान के नागौर जिले से वर्ष उन्नीस सौ उनसठ में देश में त्रिस्तरीय पंचायती राज व्यवस्था का ऐतिहासिक शुभारंभ हुआ था। ग्राम सभाओं के माध्यम से ग्रामीण जनता विकास योजनाओं के निर्माण और क्रियान्वयन में सीधी भागीदारी निभाती है।'
  },
  {
    id: 8,
    title: 'Paragraph 8',
    category: 'Water Conservation & Traditional Baoris',
    description: 'Passage on rain water harvesting and ancient stepwells',
    hindi: 'जल ही जीवन है और इसका एक-एक बूंद अत्यंत अनमोल है। प्राचीन काल से ही हमारे पूर्वजों ने वर्षा जल संचयन के लिए बावड़ियों, जोहड़ों, तालाबों और कुओं का निर्माण कराया था। आज गिरते भूजल स्तर को देखते हुए परंपरागत जल स्रोतों का जीर्णोद्धार करना और छत पर वर्षा जल संग्रहण प्रणाली स्थापित करना आवश्यक हो गया है।'
  },
  {
    id: 9,
    title: 'Paragraph 9',
    category: 'Solar Energy & Green Power',
    description: 'Passage on solar radiation and clean energy leadership',
    hindi: 'सौर ऊर्जा के उत्पादन में राजस्थान आज पूरे देश में अग्रणी राज्य बनकर उभरा है। थार मरुस्थल की तीव्र धूप और विशाल बंजर भूमि हरित ऊर्जा उत्पादन के लिए वरदान सिद्ध हुई है। भड़ला सोलर पार्क विश्व के सबसे विशाल सौर ऊर्जा संयंत्रों में गिना जाता है, जो प्रदूषण मुक्त स्वच्छ बिजली आपूर्ति में मील का पत्थर है।'
  },
  {
    id: 10,
    title: 'Paragraph 10',
    category: 'Right to Information & Transparency',
    description: 'Passage on RTI Act and open public administration',
    hindi: 'सूचना का अधिकार कानून नागरिक सशक्तिकरण और प्रशासनिक पारदर्शिता का प्रभावी माध्यम है। इस कानून की सहायता से कोई भी नागरिक सरकारी विभागों के कार्यों, व्यय और योजनाओं के बारे में प्रामाणिक जानकारी प्राप्त कर सकता है। जवाबदेही बढ़ने से भ्रष्टाचार पर अंकुश लगता है और सुशासन की नींव मजबूत होती है।'
  },
  {
    id: 11,
    title: 'Paragraph 11',
    category: 'Swami Vivekananda & Youth Inspiration',
    description: 'Passage on youth power and thoughts of Swami Vivekananda',
    hindi: 'स्वामी विवेकानंद ने विश्व पटल पर भारतीय संस्कृति और वेदांत दर्शन की महानता को स्थापित किया। उनका आह्वान था कि उठो, जागो और तब तक मत रुको जब तक कि लक्ष्य प्राप्त न हो जाए। उनके प्रेरणादायी विचार युवाओं में चारित्रिक दृढ़ता, आत्मविश्वास और राष्ट्र सेवा की असीम ऊर्जा का संचार करते हैं।'
  },
  {
    id: 12,
    title: 'Paragraph 12',
    category: 'Computer Literacy & Office Automation',
    description: 'Passage on typing skills and modern digital office management',
    hindi: 'आधुनिक युग में कंप्यूटर साक्षरता और टंकण दक्षता प्रत्येक कार्मिक के लिए अनिवार्य कौशल बन चुकी है। कार्यालयीन पत्राचार, फाइलों का रखरखाव और आंकड़ों का संकलन अब कंप्यूटर सॉफ्टवेयर द्वारा त्वरित गति से संपन्न होता है। सटीक गति से हिंदी और अंग्रेजी टाइपिंग करने से कार्यकुशलता में उल्लेखनीय वृद्धि होती है।'
  },
  {
    id: 13,
    title: 'Paragraph 13',
    category: 'Indian Constitution & Duties',
    description: 'Passage on the Constitution of India and civic duties',
    hindi: 'भारतीय संविधान विश्व का सबसे विस्तृत और संप्रभु लिखित संविधान है। यह प्रत्येक नागरिक को समानता, स्वतंत्रता और न्याय का मूलभूत अधिकार प्रदान करता है। अधिकारों के साथ-साथ संविधान में उल्लिखित ग्यारह मौलिक कर्तव्यों का निष्ठापूर्वक पालन करना प्रत्येक सच्चे देशभक्त नागरिक का परम दायित्व है।'
  },
  {
    id: 14,
    title: 'Paragraph 14',
    category: 'Mahatma Gandhi & Principles of Ahimsa',
    description: 'Passage on truth, non-violence and ethical leadership',
    hindi: 'महात्मा गांधी ने सत्य और अहिंसा के नैतिक अस्त्रों से स्वतंत्रता संग्राम को एक अद्वितीय दिशा प्रदान की। उन्होंने सादा जीवन और उच्च विचार के आदर्श को अपने आचरण में उतारा। ग्रामीण स्वावलंबन, स्वच्छता और सर्वोदय का उनका संदेश आज इक्कीसवीं सदी में भी संपूर्ण मानव जाति के लिए अनुकरणीय और प्रासंगिक है।'
  },
  {
    id: 15,
    title: 'Paragraph 15',
    category: 'Pollution Control & Plastic Eradication',
    description: 'Passage on combating single-use plastic and pollution',
    hindi: 'एकल उपयोग प्लास्टिक पर्यावरण और समुद्री जीवों के लिए गंभीर संकट बन चुका है। प्लास्टिक का कचरा सैकड़ों वर्षों तक भूमि में नष्ट नहीं होता, जिससे मृदा की उर्वरा शक्ति और भूजल गुणवत्ता दूषित होती है। हमें कपड़े के थैलों का उपयोग करना चाहिए और प्लास्टिक उत्पादों का पूर्ण बहिष्कार सुनिश्चित करना चाहिए।'
  },
  {
    id: 16,
    title: 'Paragraph 16',
    category: 'Yoga & Holistic Health',
    description: 'Passage on ancient yoga science and mental tranquility',
    hindi: 'योग प्राचीन भारत की ओर से संपूर्ण विश्व को दिया गया अमूल्य उपहार है। नियमित योगाभ्यास और प्राणायाम करने से शरीर निरोगी रहता है और मन में एकाग्रता बढ़ती है। आधुनिक तनावपूर्ण जीवन में मानसिक शांति और सकारात्मक ऊर्जा बनाए रखने के लिए दैनिक दिनचर्या में योग को स्थान देना अति हितकारी है।'
  },
  {
    id: 17,
    title: 'Paragraph 17',
    category: 'National Symbols & National Pride',
    description: 'Passage on national flag, anthem and state emblem',
    hindi: 'हमारे राष्ट्रीय प्रतीक भारत की संप्रभुता, अखंडता और गौरवशाली पहचान का प्रतिनिधित्व करते हैं। तिरंगा ध्वज का केसरिया रंग शौर्य का, श्वेत रंग शांति का और हरा रंग समृद्धि का परिचायक है। अशोक चक्र के चौबीस आरे निरंतर प्रगतिशील रहने की प्रेरणा देते हैं। राष्ट्रीय प्रतीकों का सम्मान करना हमारा पावन कर्तव्य है।'
  },
  {
    id: 18,
    title: 'Paragraph 18',
    category: 'Women Empowerment & Gender Equality',
    description: 'Passage on self-reliant women in modern India',
    hindi: 'नारी सशक्तिकरण किसी भी प्रगतिशील समाज की पहली पहचान है। आज भारतीय महिलाएं शिक्षा, विज्ञान, प्रशासन, सेना और उद्यमिता के हर क्षेत्र में नई ऊंचाइयां छू रही हैं। बालिकाओं को उच्च शिक्षा और समान अवसर उपलब्ध कराकर ही हम एक समतामूलक और समृद्ध राष्ट्र का निर्माण कर सकते हैं।'
  },
  {
    id: 19,
    title: 'Paragraph 19',
    category: 'Agriculture & Farmer Welfare',
    description: 'Passage on agriculture backbone and modern irrigation',
    hindi: 'कृषि भारतीय अर्थव्यवस्था की रीढ़ है और किसान हमारे अन्नदाता हैं। आधुनिक युग में उन्नत बीज, जैविक खाद, ड्रिप सिंचाई और फसल बीमा योजनाओं से किसानों की आर्थिक स्थिति सुदृढ़ हो रही है। कृषि में आधुनिक तकनीक और डिजिटल विपणन का उपयोग ग्रामीण भारत को आत्मनिर्भर बनाने में महत्वपूर्ण भूमिका निभा रहा है।'
  },
  {
    id: 20,
    title: 'Paragraph 20',
    category: 'Cyber Security & Digital Safety',
    description: 'Passage on internet safety and fraud prevention guidelines',
    hindi: 'डिजिटल क्रांति ने हमारे दैनिक कार्यों को अत्यंत सुगम बना दिया है, किंतु इसके साथ साइबर सुरक्षा के प्रति सतर्कता भी आवश्यक है। कभी भी अज्ञात व्यक्ति के साथ अपना ओटीपी, पासवर्ड या बैंक विवरण साझा न करें। डिजिटल उपकरणों में अधिकृत एंटीवायरस सॉफ्टवेयर और मजबूत पासवर्ड का उपयोग सुरक्षित ऑनलाइन अनुभव प्रदान करता है।'
  },
  {
    id: 21,
    title: 'Paragraph 21',
    category: 'Thar Desert & Ecological Harmony',
    description: 'Passage on the Great Indian Thar Desert and resilient wildlife',
    hindi: 'थार का मरुस्थल केवल सुनहरी रेत का सागर नहीं, बल्कि जैव विविधता का अनूठा प्राकृतिक केंद्र है। यहाँ खेजड़ी का वृक्ष, रोहिड़ा के पुष्प और गोडावण पक्षी मरुस्थलीय पर्यावरण की अमूल्य धरोहर हैं। बिश्नोई समाज द्वारा वन्यजीवों और वृक्षों की रक्षा के लिए दिया गया बलिदान पर्यावरण संरक्षण का अमर उदाहरण है।'
  },
  {
    id: 22,
    title: 'Paragraph 22',
    category: 'Rajasthan Fairs & Festivals',
    description: 'Passage on Pushkar fair, Desert festival and folk celebration',
    hindi: 'राजस्थान के लोक मेले और सांस्कृतिक उत्सव यहाँ के जीवंत रंगों और समृद्ध परंपराओं को दर्शाते हैं। पुष्कर का पशु मेला, जैसलमेर का मरु महोत्सव और बीकानेर का ऊंट उत्सव देश-विदेश के पर्यटकों को आकर्षित करते हैं। लोक नृत्यों जैसे घूमर और कालबेलिया की मनमोहक प्रस्तुतियां दर्शकों को भावविभोर कर देती हैं।'
  },
  {
    id: 23,
    title: 'Paragraph 23',
    category: 'Handicrafts & Cottage Industry',
    description: 'Passage on traditional crafts, blue pottery and textiles',
    hindi: 'हस्तशिल्प और कुटीर उद्योग ग्रामीण अर्थव्यवस्था में आजीविका के प्रमुख साधन हैं। जयपुर की ब्लू पॉटरी, सांगानेरी व बगरू प्रिंट, जोधपुर का काष्ठ शिल्प और बीकानेर की उस्ता कला विश्व भर में अपनी उत्कृष्ट कारीगरी के लिए विख्यात हैं। इन पारंपारिक शिल्पों का संरक्षण हमारे सांस्कृतिक अस्तित्व की सुरक्षा है।'
  },
  {
    id: 24,
    title: 'Paragraph 24',
    category: 'Libraries & Habit of Reading',
    description: 'Passage on books as true mentors and intellectual growth',
    hindi: 'पुस्तकालय ज्ञान के अक्षय भंडार और विचारों के तीर्थ स्थल होते हैं। अच्छी पुस्तकें मनुष्य की सबसे सच्ची मित्र और मार्गदर्शक होती हैं। स्वाध्याय की आदत से व्यक्ति के दृष्टिकोण में व्यापकता आती है और तार्किक चिंतन क्षमता का विकास होता है। प्रत्येक विद्यार्थी को नियमित रूप से उत्कृष्ट साहित्य का अध्ययन करना चाहिए।'
  },
  {
    id: 25,
    title: 'Paragraph 25',
    category: 'Road Safety & Traffic Rules',
    description: 'Passage on traffic awareness, helmet use and saving lives',
    hindi: 'सड़क सुरक्षा नियमों का पालन करना हर नागरिक का नैतिक और कानूनी दायित्व है। वाहन चलाते समय हेलमेट और सीट बेल्ट का अनिवार्य उपयोग दुर्घटना के समय जीवन रक्षक सिद्ध होता है। तेज गति से वाहन न चलाएं और मोबाइल फोन का प्रयोग कदापि न करें। आपकी थोड़ी सी सावधानी किसी अनमोल जीवन को बचा सकती है।'
  },
  {
    id: 26,
    title: 'Paragraph 26',
    category: 'Aravalli Range & Forest Cover',
    description: 'Passage on ancient Aravalli mountains and green cover',
    hindi: 'अरावली पर्वत श्रृंखला विश्व की सबसे प्राचीन वलित पर्वतमालाओं में से एक है। यह गुजरात से लेकर राजस्थान और हरियाणा होते हुए दिल्ली तक विस्तृत है। अरावली थार मरुस्थल के पूर्वी प्रसार को रोकने में प्राकृतिक दीवार का कार्य करती है। यहाँ के घने वन अनेक औषधीय वनस्पतियों और दुर्लभ वन्यजीवों का सुरक्षित आश्रय स्थल हैं।'
  },
  {
    id: 27,
    title: 'Paragraph 27',
    category: 'Value of Time & Dedication',
    description: 'Passage on punctual habits and productive lifestyle',
    hindi: 'समय निरंतर प्रवाहमान है और बीता हुआ एक भी क्षण पुनः लौटकर नहीं आता। संसार में जिन महान विभूतियों ने अमर कीर्ति अर्जित की, उन्होंने समय के प्रत्येक पल का सदुपयोग किया। जो छात्र समय सारिणी बनाकर पूरी निष्ठा से अध्ययन करते हैं, उन्हें प्रतियोगी परीक्षाओं में सफलता अवश्य प्राप्त होती है।'
  },
  {
    id: 28,
    title: 'Paragraph 28',
    category: 'ISRO & Space Explorations',
    description: 'Passage on Indian space missions Chandrayaan and Aditya',
    hindi: 'भारतीय अंतरिक्ष अनुसंधान संगठन अर्थात इसरो ने अपने किफायती और सटीक अंतरिक्ष अभियानों से वैश्विक ख्याति प्राप्त की है। चंद्रयान तीन की चंद्रमा के दक्षिणी ध्रुव पर सफल सॉफ्ट लैंडिंग ने भारत का मस्तक गर्व से ऊंचा कर दिया। उपग्रह प्रक्षेपण तकनीक में भारत आज विश्व के अग्रणी देशों की पंक्ति में खड़ा है।'
  },
  {
    id: 29,
    title: 'Paragraph 29',
    category: 'Primary Education & Literacy',
    description: 'Passage on fundamental right to education for all children',
    hindi: 'शिक्षा का अधिकार अधिनियम छह से चौदह वर्ष के प्रत्येक बालक-बालिका को निशुल्क और अनिवार्य गुणवत्तापूर्ण शिक्षा की गारंटी देता है। विद्यालयों में दोपहर का भोजन, निशुल्क पाठ्यपुस्तकें और डिजिटल कक्षाएं नामांकन बढ़ाने में सहायक सिद्ध हुई हैं। हर बच्चे को विद्यालय भेजना राष्ट्र निर्माण में महत्वपूर्ण सहयोग है।'
  },
  {
    id: 30,
    title: 'Paragraph 30',
    category: 'Wildlife Sanctuaries & Tiger Reserves',
    description: 'Passage on Ranthambore, Sariska and biodiversity conservation',
    hindi: 'वन्यजीव प्रकृति के संतुलन के अनिवार्य अंग हैं। रणथंभौर, सरिस्का और मुकुंदरा हिल्स टाइगर रिजर्व में बाघों का संरक्षण पारिस्थितिकी तंत्र की समृद्धि का परिचायक है। वनों की अंधाधुंध कटाई और अवैध शिकार पर रोक लगाकर ही हम जैव विविधता के संवर्धन का लक्ष्य प्राप्त कर सकते हैं।'
  },
  {
    id: 31,
    title: 'Paragraph 31',
    category: 'Democracy & Voting Rights',
    description: 'Passage on voting privilege and democratic responsibility',
    hindi: 'मतदान लोकतांत्रिक व्यवस्था का सबसे पावन और शक्तिशाली अधिकार है। चुनाव में प्रत्येक निष्पक्ष मत देश के भविष्य और विकास की दिशा निर्धारित करता है। बिना किसी प्रलोभन, जाति या धर्म के भेदभाव के योग्य और ईमानदार जनप्रतिनिधि का चुनाव करना प्रत्येक जागरूक मतदाता का परम कर्तव्य है।'
  },
  {
    id: 32,
    title: 'Paragraph 32',
    category: 'Digital Payments & UPI Revolution',
    description: 'Passage on cashless transactions and fintech leadership',
    hindi: 'डिजिटल भुगतान प्रणाली और एकीकृत भुगतान इंटरफेस अर्थात यूपीआई ने भारतीय वित्तीय परिदृश्य में ऐतिहासिक क्रांति ला दी है। छोटे चाय की दुकान से लेकर बड़े शॉपिंग मॉल तक लोग स्मार्टफोन से सेकंडों में सुरक्षित लेनदेन कर रहे हैं। कैशलेस अर्थव्यवस्था से पारदर्शिता और वित्तीय समावेशन को अभूतपूर्व गति मिली है।'
  },
  {
    id: 33,
    title: 'Paragraph 33',
    category: 'Rabindranath Tagore & Literary Art',
    description: 'Passage on Nobel laureate Tagore and national anthem Jana Gana Mana',
    hindi: 'गुरुदेव रवींद्रनाथ टैगोर साहित्य और कला के अप्रतिम मनीषी थे। उनके अमर काव्य संग्रह गीतांजलि के लिए उन्हें साहित्य के प्रतिष्ठित नोबेल पुरस्कार से सम्मानित किया गया। उनके द्वारा रचित राष्ट्रगान जन गण मन प्रत्येक भारतीय के हृदय में राष्ट्रीय गौरव और एकता का पावन भाव संचारित करता है।'
  },
  {
    id: 34,
    title: 'Paragraph 34',
    category: 'Swachh Bharat & Civic Cleanliness',
    description: 'Passage on public cleanliness and disease prevention',
    hindi: 'स्वच्छता केवल एक सरकारी अभियान नहीं, बल्कि जीवन की एक पवित्र संस्कारिक पद्धति है। घर, मोहल्ले और कार्यस्थल को स्वच्छ रखकर हम संक्रामक बीमारियों से अपना बचाव कर सकते हैं। गीले और सूखे कचरे का सही पृथक्करण और उचित निस्तारण कचरा प्रबंधन का आधार है। स्वच्छ वातावरण ही स्वस्थ जीवन का आधार बनता है।'
  },
  {
    id: 35,
    title: 'Paragraph 35',
    category: 'Dr. B.R. Ambedkar & Social Equity',
    description: 'Passage on social justice and equal dignity for all citizens',
    hindi: 'बाबासाहेब डॉ. भीमराव अंबेडकर सामाजिक समरसता और मानव अधिकारों के महान अग्रदूत थे। उन्होंने वंचित वर्गों के अधिकारों और महिला कल्याण के लिए आजीवन संघर्ष किया। उनका मूल मंत्र था शिक्षित बनो, संगठित रहो और संघर्ष करो। संविधान निर्माता के रूप में उनका योगदान सदैव अमर और वंदनीय रहेगा।'
  },
  {
    id: 36,
    title: 'Paragraph 36',
    category: 'Disaster Management & Safety',
    description: 'Passage on floods, earthquakes and emergency rescue operations',
    hindi: 'प्राकृतिक आपदाएं जैसे बाढ़, सूखा, भूकंप और चक्रवात अप्रत्याशित रूप से जन-धन की भारी क्षति पहुंचाते हैं। कुशल आपदा प्रबंधन और त्वरित बचाव कार्य आपदा के प्रभाव को न्यूनतम कर देते हैं। जनमानस में आपदा पूर्व तैयारी, प्राथमिक उपचार प्रशिक्षण और राहत कार्यों की समुचित जानकारी होना अत्यंत आवश्यक है।'
  },
  {
    id: 37,
    title: 'Paragraph 37',
    category: 'Mineral Wealth of Rajasthan',
    description: 'Passage on marble, zinc, lead and industrial development',
    hindi: 'राजस्थान को खनिजों का अजायबघर कहा जाता है। यहाँ सीसा, जस्ता, तांबा, रॉक फॉस्फेट, जिप्सम और संगमरमर जैसे महत्वपूर्ण खनिजों के विशाल भंडार उपस्थित हैं। मकराना का सफेद मार्बल ताजमहल और विक्टोरिया मेमोरियल जैसी ऐतिहासिक इमारतों की शोभा बढ़ा चुका है। खनिजों के वैज्ञानिक दोहन से राज्य के राजस्व में निरंतर वृद्धि होती है।'
  },
  {
    id: 38,
    title: 'Paragraph 38',
    category: 'Moral Values & Compassion',
    description: 'Passage on honesty, mutual empathy and righteous living',
    hindi: 'सच्चरित्रता, ईमानदारी और परोपकार ही मानव जीवन के वास्तविक आभूषण हैं। दूसरों के सुख-दुख में सहभागी बनना और जरूरतमंदों की निस्वार्थ सहायता करना सच्ची मानवता है। उच्च नैतिक मूल्यों से युक्त व्यक्ति न केवल समाज में आदर पाता है, बल्कि अपनी आने वाली पीढ़ियों के लिए भी अनुकरणीय आदर्श प्रस्तुत करता है।'
  },
  {
    id: 39,
    title: 'Paragraph 39',
    category: 'Solar System & Scientific Curiosity',
    description: 'Passage on planets, stars and exploring cosmic frontiers',
    hindi: 'हमारा सौर मंडल सूर्य और उसके चारों ओर परिक्रमा करने वाले आठ प्रमुख ग्रहों, उपग्रहों तथा खगोलीय पिंडों का अद्भुत परिवार है। पृथ्वी सौरमंडल का एकमात्र ऐसा ज्ञात ग्रह है जहाँ जीवन के अनुकूल वायुमंडल और जल उपलब्ध है। खगोल विज्ञान का अध्ययन हमारे अंदर वैज्ञानिक चेतना और ब्रह्मांडीय रहस्यों को जानने की जिज्ञासा जगाता है।'
  },
  {
    id: 40,
    title: 'Paragraph 40',
    category: 'Ayurveda & Traditional Healing',
    description: 'Passage on natural herbs, immunity and balanced wellness',
    hindi: 'आयुर्वेद विश्व की प्राचीनतम चिकित्सा प्रणालियों में से एक है, जो स्वास्थ्य के समग्र संतुलन पर बल देती है। तुलसी, नीम, गिलोय, अश्वगंधा और आंवला जैसी प्राकृतिक औषधियां शरीर की रोग प्रतिरोधक क्षमता को बढ़ाती हैं। संतुलित आहार, प्राकृतिक दिनचर्या और योग का समन्वय मनुष्य को दीर्घायु और निरोगी बनाता है।'
  },
  {
    id: 41,
    title: 'Paragraph 41',
    category: 'Hindi Language & National Integration',
    description: 'Passage on Hindi as national link language and cultural soul',
    hindi: 'हिंदी भाषा हमारी सांस्कृतिक पहचान और राष्ट्र की भावनात्मक एकता की सशक्त संवाहिका है। देवनागरी लिपि अपनी ध्वन्यात्मक शुद्धता और वैज्ञानिक संरचना के लिए विश्व प्रसिद्ध है। चौदह सितंबर को प्रतिवर्ष हिंदी दिवस मनाया जाता है। प्रशासनिक और तकनीकी कार्यों में सरल हिंदी का प्रयोग जन-जन तक शासकीय योजनाओं को पहुंचाता है।'
  },
  {
    id: 42,
    title: 'Paragraph 42',
    category: 'Sports, Fitness & Team Spirit',
    description: 'Passage on physical exercise, sportsmanship and fair play',
    hindi: 'खेलकूद न केवल हमारे शरीर को बलवान और स्फूर्तिवान बनाते हैं, बल्कि टीम भावना, अनुशासन और नेतृत्व कौशल भी सिखाते हैं। हार और जीत दोनों को सहज भाव से स्वीकार करना ही सच्ची खेल भावना है। युवाओं को प्रतिदिन किसी न किसी मैदानी खेल अथवा शारीरिक व्यायाम में अनिवार्य रूप से भाग लेना चाहिए।'
  },
  {
    id: 43,
    title: 'Paragraph 43',
    category: 'Child Rights & Eradication of Child Labour',
    description: 'Passage on protecting childhood innocence and right to schooling',
    hindi: 'बाल श्रम किसी भी सभ्य समाज के माथे पर गहरा कलंक है। हर बच्चे के हाथों में औजारों की जगह कलम और किताबें होनी चाहिए। बाल श्रम उन्मूलन कानून का कड़ाई से अनुपालन और गरीब परिवारों को आर्थिक सुरक्षा प्रदान करना आवश्यक है। जब देश का प्रत्येक बच्चा सुरक्षित और शिक्षित होगा, तभी स्वर्णिम भारत का सपना साकार होगा।'
  },
  {
    id: 44,
    title: 'Paragraph 44',
    category: 'Sacred Rivers & Water Ecosystem',
    description: 'Passage on Ganga, Yamuna, Chambal and river rejuvenation',
    hindi: 'नदियां हमारी सभ्यता और संस्कृति की जीवन रेखाएं हैं। गंगा, यमुना, नर्मदा और चंबल जैसी पावन नदियों ने सदियों से हमारी भूमि को उर्वर बनाया है और प्यास बुझाई है। वर्तमान में औद्योगिक अपशिष्ट और शहरी कचरे से नदियों का प्रदूषण गंभीर चिंता का विषय है। नदियों की निर्मलता और अविरलता की रक्षा करना हमारा राष्ट्रीय कर्तव्य है।'
  },
  {
    id: 45,
    title: 'Paragraph 45',
    category: 'Indira Gandhi Canal & Green Transformation',
    description: 'Passage on transformative water lifeline of western Rajasthan',
    hindi: 'इंदिरा गांधी नहर परियोजना मरुभूमि राजस्थान के लिए जीवन दायिनी सिद्ध हुई है। पंजाब के हरिके बैराज से सतलुज और व्यास नदियों का जल लाकर थार के मरुस्थल को हरा-भरा बनाया गया है। श्रीगंगानगर, हनुमानगढ़, बीकानेर और जैसलमेर जिलों में गेहूं, सरसों और कपास की बंपर पैदावार इस ऐतिहासिक नहर की ही देन है।'
  },
  {
    id: 46,
    title: 'Paragraph 46',
    category: 'Energy Conservation & Sustainable Future',
    description: 'Passage on conserving electricity and adopting LED fixtures',
    hindi: 'ऊर्जा की बचत ही वास्तविक ऊर्जा का उत्पादन है। घरों और कार्यालयों में आवश्यकता न होने पर बिजली के पंखे, लाइट और उपकरण बंद करने की आदत डालनी चाहिए। ऊर्जा दक्ष एलईडी बल्बों और सौर उपकरणों का प्रयोग बिजली के बिल को कम करने के साथ-साथ प्राकृतिक संसाधनों के संरक्षण में अमूल्य योगदान देता है।'
  },
  {
    id: 47,
    title: 'Paragraph 47',
    category: 'Judiciary & Legal Literacy',
    description: 'Passage on rule of law, speedy justice and Lok Adalat',
    hindi: 'स्वतंत्र और निष्पक्ष न्यायपालिका भारतीय लोकतंत्र का सबसे मजबूत सुरक्षा कवच है। विधि का शासन प्रत्येक नागरिक को समानता और न्याय की गारंटी देता है। लोक अदालतों के माध्यम से आपसी सुलह और समझौते से विवादों का त्वरित तथा सुलभ समाधान संभव हुआ है। नागरिकों में विधिक अधिकारों की जागरूकता सामाजिक सुरक्षा को बल प्रदान करती है।'
  },
  {
    id: 48,
    title: 'Paragraph 48',
    category: 'Tourism & Indian Hospitality',
    description: 'Passage on cultural tourism, heritage monuments and hospitality',
    hindi: 'अतिथि देवो भवः की पावन भावना भारतीय संस्कृति का मूल मंत्र है। हमारे देश के ऐतिहासिक किले, भव्य मंदिर, रमणीय समुद्र तट और शांत हिल स्टेशन दुनिया भर के पर्यटकों को मंत्रमुग्ध करते हैं। पर्यटन उद्योग से लाखों स्थानीय युवाओं को रोजगार मिलता है और विदेशी मुद्रा का अर्जन होता है। पर्यटक स्थलों की स्वच्छता बनाए रखना आवश्यक है।'
  },
  {
    id: 49,
    title: 'Paragraph 49',
    category: 'Social Media & Responsible Communication',
    description: 'Passage on constructive use of social networks and digital etiquette',
    hindi: 'सोशल मीडिया आज सूचनाओं के त्वरित आदान-प्रदान और विचारों की अभिव्यक्ति का सबसे सशक्त मंच बन चुका है। इसके सकारात्मक प्रयोग से जन जागरूकता, शिक्षा और सामाजिक सरोकारों को नया बल मिलता है। हालांकि, बिना सत्यापन के किसी भी भ्रामक समाचार या अफवाह को प्रसारित करने से बचना चाहिए। जिम्मेदार डिजिटल नागरिकता समय की मांग है।'
  },
  {
    id: 50,
    title: 'Paragraph 50',
    category: 'Atmanirbhar Bharat & National Prosperity',
    description: 'Passage on self-reliant India, innovation and indigenous pride',
    hindi: 'आत्मनिर्भर भारत का संकल्प देश को आर्थिक, तकनीकी और औद्योगिक रूप से सशक्त बनाने का राष्ट्रव्यापी अभियान है। स्थानीय उत्पादों को बढ़ावा देना और स्वदेशी विनिर्माण को प्राथमिकता देना इस अभियान का मुख्य उद्देश्य है। जब हर नागरिक अपने कर्तव्यों का निष्ठापूर्वक पालन करेगा, तब भारत विश्व गुरु के रूप में पुनः प्रतिष्ठित होगा।'
  }
];

console.log(`Processing ${paragraphs.length} paragraphs...`);

const generatedLessons = paragraphs.map(p => {
  const krutiContent = unicodeToKruti(p.hindi);
  return {
    id: p.id,
    title: p.title,
    category: p.category,
    focusKeys: 'Complete KrutiDev Keyboard',
    focusHindi: p.hindi,
    description: p.description,
    content: krutiContent
  };
});

// Write to a temporary file
fs.writeFileSync(path.join(__dirname, 'paragraphs_50.json'), JSON.stringify(generatedLessons, null, 2), 'utf8');
console.log('Saved paragraphs_50.json successfully!');
