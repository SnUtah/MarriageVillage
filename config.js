/* =========================================================
   💍 Wedding website settings
   Edit only this file and the names, date, place, photos and letters all change.
   (Change only the text inside the quotes ' ')
   The Korean text is in window.WEDDING; the English version is in window.WEDDING_EN at the end.

   ※ Everything below is a made-up example. (Sample for a contest entry)
   ========================================================= */
window.WEDDING = {
  /* ---------- Groom · bride ---------- */
  groom: {
    name: '김신랑',
    nameEn: 'Groom',
    father: '김아빠',
    mother: '김엄마',
    relation: '장남',
    phone: '010-0000-0000',
    fatherPhone: '',
    motherPhone: '',
  },
  bride: {
    name: '김신부',
    nameEn: 'Bride',
    father: '김아빠',
    mother: '김엄마',
    relation: '장녀',
    phone: '010-0000-0000',
    fatherPhone: '',
    motherPhone: '',
  },

  /* ---------- Wedding date and time (Korea time) ---------- */
  date: '2027-05-15T13:00:00+09:00',

  /* ---------- Wedding venue (a made-up place) ---------- */
  venue: {
    name: '하늘정원 웨딩홀',
    hall: '5층 가든홀',
    address: '서울특별시 행복구 사랑로 123',
    tel: '02-000-0000',
    naverMap: 'https://map.naver.com/p/search/웨딩홀',
    kakaoMap: 'https://map.kakao.com/link/search/웨딩홀',
    tmap: '',
    subway: ['2호선 행복역 3번 출구 도보 5분'],
    bus: ['간선 100, 200 · 행복역 하차'],
    car: '네비게이션에 "하늘정원 웨딩홀" 검색',
    parking: '건물 지하 주차장 2시간 무료 (안내데스크에서 주차권 수령)',
  },

  /* ---------- Greeting ---------- */
  greeting: `서로 다른 길을 걸어온 두 사람이
이제 같은 곳을 바라보며 함께 걸어가려 합니다.

따스한 봄날의 햇살처럼
저희의 새로운 시작을 축복해 주세요.

기다리시는 동안 저희 작은 마을을
천천히 둘러보시면 감사하겠습니다.`,

  /* ---------- Gift accounts (bank accounts, example) ---------- */
  accounts: {
    groom: [
      { role: '신랑', name: '김신랑', bank: '국민은행', number: '000000-00-000000' },
      { role: '신랑 아버지', name: '김아빠', bank: '신한은행', number: '000-000-000000' },
      { role: '신랑 어머니', name: '김엄마', bank: '우리은행', number: '0000-000-000000' },
    ],
    bride: [
      { role: '신부', name: '김신부', bank: '카카오뱅크', number: '3333-00-0000000' },
      { role: '신부 아버지', name: '김아빠', bank: '농협', number: '000-0000-0000-00' },
      { role: '신부 어머니', name: '김엄마', bank: '하나은행', number: '000-000000-00000' },
    ],
  },

  /* ---------- Today's schedule ---------- */
  schedule: [
    { time: '12:00', title: '하객 입장 & 포토타임', desc: '포토부스에서 사진을 남겨주세요' },
    { time: '13:00', title: '예식 시작', desc: '신랑·신부 입장' },
    { time: '13:20', title: '축가 & 성혼선언', desc: '' },
    { time: '13:40', title: '단체 사진 촬영', desc: '가족 → 친척 → 친구 순서' },
    { time: '13:50', title: '연회장 식사', desc: '지하 1층 연회장' },
  ],

  /* ---------- Couple quiz (answer = number of the right option, counting from 0) ---------- */
  quiz: [
    { q: '두 사람이 처음 만난 곳은?', options: ['대학 동아리', '소개팅', '회사', '여행지'], answer: 0, comment: '같은 사진 동아리에서 처음 만났어요 📷' },
    { q: '연애 기간은 얼마나 될까요?', options: ['1년', '3년', '5년', '7년'], answer: 2, comment: '5년 동안 예쁘게 사랑했어요' },
    { q: '먼저 고백한 사람은?', options: ['신랑', '신부', '동시에', '비밀'], answer: 0, comment: '벚꽃 아래에서 떨리는 목소리로…🌸' },
    { q: '신혼여행지는 어디일까요?', options: ['하와이', '스위스', '발리', '제주도'], answer: 1, comment: '알프스에서 사진 많이 찍어올게요!' },
  ],

  /* ---------- Mailbox ----------
     Letters guests write are saved on that guest's phone (browser);
     the letters below are in the mailbox from the start. (examples)
     daysAgo = how many days ago the letter seems to have been written
     side = '신랑측' (groom's side) or '신부측' (bride's side); keep these Korean values, they are shown in English automatically */
  letters: [
    { name: '민지', side: '신부측', daysAgo: 1, message: '친구야, 네가 웨딩드레스 입은 모습은 상상만 해도 눈물 나.\n스무 살 때 같이 밤새 떡볶이 먹던 게 엊그제 같은데… 평생 행복해야 해. 결혼 진심으로 축하해 💕' },
    { name: '준호', side: '신랑측', daysAgo: 2, message: '드디어 가는구나! 축구할 때 그 끈기로 신부님한테도 평생 잘해라.\n신혼여행 사진 많이 찍어 와. 진심으로 축하한다.' },
    { name: '외할머니', side: '신부측', daysAgo: 3, message: '우리 손녀, 할머니는 네가 밥 잘 챙겨 먹고 둘이 서로 아끼면서 살면 그걸로 됐다.\n아프지 말고 자주 놀러 오너라.' },
    { name: '회사 동료 일동', side: '신랑측', daysAgo: 4, message: '김신랑 대리님 결혼을 진심으로 축하드립니다!\n야근하면서도 항상 웃던 그 얼굴, 이제 집에서도 매일 보시겠네요 😊' },
    { name: '사촌 동생 하은', side: '신부측', daysAgo: 5, message: '언니!! 부케는 꼭 나한테 던져 줘야 해 🙏\n형부도 축하드려요!' },
    { name: '은석', side: '신랑측', daysAgo: 7, message: '둘이 처음 만났을 때 네가 수줍게 말 걸던 거 기억난다.\n그 용기가 여기까지 왔네. 행복해라 친구야.' },
    { name: '고등학교 담임 선생님', side: '신부측', daysAgo: 9, message: '우리 제자가 어엿한 어른이 되어 가정을 꾸린다니 선생님도 감회가 새롭다.\n늘 그랬듯 씩씩하게, 그리고 따뜻하게 살아가렴.' },
    { name: '소영', side: '신부측', daysAgo: 12, message: '결혼 축하해! 우리 같이 갔던 제주도 여행 또 가자. 이번엔 넷이서 ✈️' },
    { name: '삼촌', side: '신랑측', daysAgo: 15, message: '조카야, 결혼은 매일 서로를 다시 선택하는 일이란다.\n삼촌이 항상 응원한다. 축하한다!' },
  ],

  /* ---------- Collecting letters (optional) ----------
     Left empty, letters are saved only on the writer's phone.
     To collect every guest's letters in a Google Sheet and let everyone see them,
     attach the Apps Script to a sheet and deploy it as in tools/편지_시트_연결.md,
     then put its 'web app URL' in lettersSheet. (For a real wedding, empty the sample letters above)
     lettersSite = the tab name inside the sheet. Use different names when one sheet serves several weddings. */
  lettersSheet: '',
  lettersSite: 'main',

  /* ---------- Sky: 'day' (always day) · 'dusk' · 'night' · 'auto' (day · dusk · night by the time of the visit) ----------
     Guests can also change it with 'Day · night' in the menu. */
  skyMode: 'day',

  /* ---------- Background music (e.g. 'music/bgm.mp3'; empty = none) ---------- */
  bgm: '',

  /* ---------- Photo museum ----------
     demoPhotos: true  → even with empty photo folders, it fills up with illustrations drawn on a canvas.
     To use real photos, change it to false, make a folder per theme inside the photos folder
     and put the photos in as 1.jpg, 2.jpg ... (count = number of photos, ext = file extension)
     captions = photo descriptions (in order; can be left empty) */
  demoPhotos: true,
  museum: {
    title: '우리의 추억 사진관',
    themes: [
      {
        id: 'wedding', title: '웨딩 촬영', emoji: '💍', color: '#F4B8C0',
        subtitle: '가장 설레던 날의 기록',
        folder: 'photos/wedding', count: 14, ext: 'jpg',
        captions: ['설레는 마음으로, 웨딩 촬영 첫 컷', '부케보다 더 환한 미소', '손 꼭 잡고', '벚꽃길에서', '드레스 자락 정리 중', '턱시도 매무새 점검', '서로를 바라보며', '노을 아래 둘이서', '반지 끼워 주기', '튤립 정원에서', '베일 사이로', '장난치다 찍힌 한 장', '마지막 컷, 활짝', '우리의 시작'],
      },
      {
        id: 'childhood', title: '어린 시절', emoji: '🧸', color: '#F7D58B',
        subtitle: '우리가 만나기 전, 작고 귀여웠던 시절',
        folder: 'photos/childhood', count: 10, ext: 'jpg',
        captions: ['첫돌 사진', '유치원 소풍날', '풍선 들고 공원에서', '앞니 빠진 날', '첫 자전거', '모래성 짓기', '할머니 무릎 위에서', '초등학교 입학식', '물놀이 가던 여름', '눈 오는 날 눈사람'],
      },
      {
        id: 'dating', title: '연애 시절', emoji: '💕', color: '#F9C59E',
        subtitle: '함께 웃었던 평범하고 특별한 날들',
        folder: 'photos/dating', count: 12, ext: 'jpg',
        captions: ['첫 데이트, 그 카페', '영화관 앞에서', '한강 자전거', '첫눈 오던 날', '야시장 데이트', '벚꽃 구경', '생일 케이크 촛불', '놀이공원 관람차', '밤 산책', '함께 만든 저녁', '크리스마스 트리 앞', '프러포즈하던 날 💍'],
      },
      {
        id: 'travel', title: '함께한 여행', emoji: '✈️', color: '#A9D8E8',
        subtitle: '둘이라서 더 멀리 갈 수 있었던 곳',
        folder: 'photos/travel', count: 8, ext: 'jpg',
        captions: ['제주 바다', '도쿄 밤거리', '파리, 에펠탑 아래', '알프스 설산', '방콕 야시장', '부산 해운대', '기차 창가에서', '다음 여행은 어디로?'],
      },
      {
        id: 'family', title: '우리 가족', emoji: '🏡', color: '#B9D8A2',
        subtitle: '사랑을 알려주신 고마운 분들',
        folder: 'photos/family', count: 6, ext: 'jpg',
        captions: ['신랑 가족', '신부 가족', '양가 상견례', '할머니와 함께', '강아지 콩이도 함께', '모두 모여 한 컷'],
      },
    ],
  },
};

/* =========================================================
   🌐 English version of the text above.
   Same shape; only text. Anything left out shows the Korean text.
   Changed the names above? Change the English names too, or delete this block to show the Korean content to everyone.
   (Dates, numbers, phone numbers, account numbers, links and colours are taken from above.)
   ========================================================= */
window.WEDDING_EN = {
  groom: { name: 'Groom Kim', father: 'Father Kim', mother: 'Mother Kim', relation: 'eldest son' },
  bride: { name: 'Bride Kim', father: 'Father Kim', mother: 'Mother Kim', relation: 'eldest daughter' },

  venue: {
    name: 'Sky Garden Wedding Hall',
    hall: '5F Garden Hall',
    address: '123 Sarang-ro, Haengbok-gu, Seoul',
    subway: ['Line 2, Haengbok Station Exit 3, 5 min walk'],
    bus: ['Blue bus 100, 200 · Get off at Haengbok Station'],
    car: 'Search for "Sky Garden Wedding Hall" in your navigation app',
    parking: 'Free underground parking in the building for 2 hours (get a ticket at the front desk)',
  },

  greeting: `Two people who walked different paths
are now setting out on one path together.

We hope you'll bless our new beginning
with the warmth of a spring day.

While you wait, we'd love for you
to stroll around our little village.`,

  accounts: {
    groom: [
      { role: 'Groom', name: 'Groom Kim', bank: 'KB Kookmin Bank' },
      { role: "Groom's father", name: 'Father Kim', bank: 'Shinhan Bank' },
      { role: "Groom's mother", name: 'Mother Kim', bank: 'Woori Bank' },
    ],
    bride: [
      { role: 'Bride', name: 'Bride Kim', bank: 'KakaoBank' },
      { role: "Bride's father", name: 'Father Kim', bank: 'NongHyup Bank' },
      { role: "Bride's mother", name: 'Mother Kim', bank: 'Hana Bank' },
    ],
  },

  schedule: [
    { title: 'Guests arrive & photos', desc: 'Stop by the photo booth for a picture' },
    { title: 'Ceremony begins', desc: 'The groom and bride walk in' },
    { title: 'Wedding song & pronouncement' },
    { title: 'Group photos', desc: 'Family → relatives → friends' },
    { title: 'Lunch reception', desc: 'Banquet hall, B1' },
  ],

  quiz: [
    { q: 'Where did we first meet?', options: ['College club', 'Blind date', 'At work', 'On a trip'], comment: 'We met in the same photo club 📷' },
    { q: 'How long have we been together?', options: ['1 year', '3 years', '5 years', '7 years'], comment: 'Five lovely years together' },
    { q: 'Who made the first move?', options: ['Groom', 'Bride', 'Both of us', "It's a secret"], comment: 'Under the cherry blossoms, with a shaky voice…🌸' },
    { q: 'Where are we going on our honeymoon?', options: ['Hawaii', 'Switzerland', 'Bali', 'Jeju Island'], comment: "We'll bring back lots of photos from the Alps!" },
  ],

  letters: [
    { name: 'Minji', message: 'My friend, just picturing you in a wedding dress makes me cry.\nIt feels like yesterday we stayed up all night eating tteokbokki at twenty… Be happy forever. Congratulations on your wedding 💕' },
    { name: 'Junho', message: "You're finally doing it! Treat your bride well for life, with the same grit you show on the soccer field.\nTake lots of honeymoon photos. Congratulations, really." },
    { name: 'Grandma', message: "My dear granddaughter, as long as you eat well and take care of each other, that's all Grandma wants.\nStay healthy and come visit often." },
    { name: 'Your coworkers', message: 'Congratulations on your wedding, Groom Kim!\nYou kept smiling even through late nights at work. Now she gets to see that smile at home every day 😊' },
    { name: 'Cousin Haeun', message: 'Sis!! You have to throw the bouquet to me 🙏\nCongratulations to my new brother-in-law too!' },
    { name: 'Eunseok', message: 'I remember how shyly you first talked to her.\nThat bit of courage brought you all the way here. Be happy, my friend.' },
    { name: 'Your high school teacher', message: 'Seeing my student grow up and start a family of her own moves me deeply.\nLive bravely and warmly, just as you always have.' },
    { name: 'Soyoung', message: "Congratulations! Let's go back to Jeju like we did before. This time the four of us ✈️" },
    { name: 'Uncle', message: 'My nephew, marriage means choosing each other again every day.\nYour uncle is always cheering for you. Congratulations!' },
  ],

  museum: {
    title: 'Our photo gallery',
    themes: [
      {
        title: 'Wedding shoot', subtitle: 'A record of our most exciting day',
        captions: ['First shot, so excited', 'A smile brighter than the bouquet', 'Holding hands tight', 'Cherry blossom path', 'Fixing the dress train', 'Straightening the tux', 'Looking at each other', 'The two of us at sunset', 'Putting on the ring', 'In the tulip garden', 'Through the veil', 'Caught goofing around', 'Last shot, big smiles', 'Our very first shot'],
      },
      {
        title: 'Childhood', subtitle: 'Before we met, when we were small and cute',
        captions: ['First birthday', 'Kindergarten picnic', 'Balloon in the park', 'Lost a front tooth', 'First bike', 'Building a sandcastle', "On Grandma's lap", 'First day of school', 'Summer at the pool', 'Snowman on a snowy day'],
      },
      {
        title: 'Dating days', subtitle: 'Ordinary days made special by laughing together',
        captions: ['First date, that café', 'Outside the cinema', 'Biking by the Han River', 'The first snow', 'Night market date', 'Cherry blossom viewing', 'Birthday candles', 'Ferris wheel ride', 'Night walk', 'Dinner we made together', 'By the Christmas tree', 'Proposal day 💍'],
      },
      {
        title: 'Trips together', subtitle: 'Together, we went farther',
        captions: ['Jeju sea', 'Tokyo at night', 'Paris, Eiffel Tower', 'Snowy Alps', 'Bangkok night market', 'Haeundae, Busan', 'By the train window', 'Where to next?'],
      },
      {
        title: 'Our families', subtitle: 'The people who taught us love',
        captions: ["Groom's family", "Bride's family", 'Both families meet', 'With Grandma', 'With Kongi the puppy', 'Everyone together'],
      },
    ],
  },
};
