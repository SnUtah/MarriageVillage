/* =========================================================
   🎨 데모 사진: 사진 폴더가 비어 있을 때 캔버스로 그리는 일러스트
   - 실제 사람 사진 없이도 사진관·앨범이 꽉 차 보이도록
   - 테마·번호마다 장면이 정해져 있어서 항상 같은 그림이 나옵니다
   - 3D 라이브러리를 쓰지 않아서 '글로 보기'에서도 동작합니다
   ========================================================= */

/* 문자열 → 항상 같은 난수열 (장면이 매번 바뀌지 않도록) */
function prng(seed) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) { h = Math.imul(h ^ seed.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const EMOJI_FONT = '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif';
const SKIES = [
  ['#9CD3F2', '#E6F5FF'],   // 0 맑은 낮
  ['#FFB88C', '#FFE7C9'],   // 1 노을
  ['#F7C4D0', '#FFF3F6'],   // 2 분홍빛
  ['#2B2D5C', '#6D5C9E'],   // 3 밤
  ['#C7E8F7', '#FFECD8'],   // 4 아침
];
const OUTFITS = ['#8FB8DE', '#F4B8C0', '#F7D58B', '#A8D08D', '#C9B3E6', '#F9C59E', '#E88A98', '#7FC8C2'];
const HAIRS = ['#5A3A2A', '#3A2A24', '#7A5238', '#1E1A22', '#C98A5B'];

/* 테마별 장면표 (config의 captions 순서와 맞춤) */
const SCENES = {
  wedding: [
    { kind: 'park', sky: 0, who: 'wedding', props: ['🌸', '💐'] },
    { kind: 'room', sky: 2, who: 'bride', props: ['💐', '✨'] },
    { kind: 'park', sky: 4, who: 'wedding', props: ['💞'] },
    { kind: 'park', sky: 2, who: 'wedding', props: ['🌸', '🌸', '🌸'] },
    { kind: 'room', sky: 2, who: 'bride', props: ['👗', '✨'] },
    { kind: 'room', sky: 0, who: 'groom', props: ['🎩', '🥂'] },
    { kind: 'park', sky: 0, who: 'wedding', props: ['💗'] },
    { kind: 'hills', sky: 1, who: 'wedding', props: ['🌻'] },
    { kind: 'room', sky: 2, who: 'wedding', props: ['💍', '✨'] },
    { kind: 'park', sky: 0, who: 'wedding', props: ['🌷', '🌷'] },
    { kind: 'room', sky: 2, who: 'bride', props: ['🕊️'] },
    { kind: 'park', sky: 4, who: 'wedding', props: ['🎈', '🎈'] },
    { kind: 'park', sky: 1, who: 'wedding', props: ['🎉', '🎊'] },
    { kind: 'hills', sky: 1, who: 'wedding', props: ['💒', '🌸'] },
  ],
  childhood: [
    { kind: 'room', sky: 4, who: 'baby', props: ['🎂', '🎈'] },
    { kind: 'park', sky: 0, who: 'kid', props: ['🚌', '🌻'] },
    { kind: 'park', sky: 0, who: 'kid-balloon', props: ['🌳'] },
    { kind: 'room', sky: 4, who: 'kid', props: ['😁', '🦷'] },
    { kind: 'park', sky: 0, who: 'kid', props: ['🚲'] },
    { kind: 'sea', sky: 0, who: 'kid', props: ['🏖️', '🪣'] },
    { kind: 'room', sky: 1, who: 'kidparent', props: ['🧶', '📺'] },
    { kind: 'city', sky: 4, who: 'kidparent', props: ['🏫', '🎒'] },
    { kind: 'sea', sky: 0, who: 'kid', props: ['🏊', '☀️'] },
    { kind: 'snow', sky: 4, who: 'kid', props: ['⛄', '❄️'] },
  ],
  dating: [
    { kind: 'cafe', sky: 4, who: 'couple', props: ['☕', '🍰'] },
    { kind: 'city', sky: 3, who: 'couple', props: ['🎬', '🍿'] },
    { kind: 'park', sky: 0, who: 'couple', props: ['🚲', '🌉'] },
    { kind: 'snow', sky: 4, who: 'couple', props: ['❄️', '☃️'] },
    { kind: 'city', sky: 3, who: 'couple', props: ['🏮', '🍢'] },
    { kind: 'park', sky: 2, who: 'couple', props: ['🌸', '🌸'] },
    { kind: 'room', sky: 3, who: 'couple', props: ['🎂', '🕯️'] },
    { kind: 'park', sky: 1, who: 'couple', props: ['🎡'] },
    { kind: 'city', sky: 3, who: 'couple', props: ['🌙', '⭐'] },
    { kind: 'room', sky: 1, who: 'couple', props: ['🍝', '🥗'] },
    { kind: 'room', sky: 3, who: 'couple', props: ['🎄', '🎁'] },
    { kind: 'park', sky: 3, who: 'propose', props: ['✨', '🎆'] },
  ],
  travel: [
    { kind: 'sea', sky: 0, who: 'couple', props: ['🌴', '🍊'] },
    { kind: 'city', sky: 3, who: 'couple', props: ['🗼', '🍜'] },
    { kind: 'city', sky: 1, who: 'couple', props: ['🗼', '🥐'] },
    { kind: 'mountain', sky: 0, who: 'couple', props: ['🏔️', '🚡'] },
    { kind: 'city', sky: 3, who: 'couple', props: ['🏮', '🍤'] },
    { kind: 'sea', sky: 1, who: 'couple', props: ['🏄', '🌊'] },
    { kind: 'hills', sky: 0, who: 'couple', props: ['🚂', '🧳'] },
    { kind: 'hills', sky: 4, who: 'couple', props: ['✈️', '🗺️'] },
  ],
  family: [
    { kind: 'room', sky: 4, who: 'family', n: 4, props: ['🏡'] },
    { kind: 'park', sky: 0, who: 'family', n: 4, props: ['🌳'] },
    { kind: 'room', sky: 1, who: 'family', n: 6, props: ['🍽️', '🥂'] },
    { kind: 'park', sky: 2, who: 'family', n: 3, props: ['🌷'] },
    { kind: 'park', sky: 0, who: 'couple', props: ['🐶', '🦴'] },
    { kind: 'park', sky: 4, who: 'family', n: 7, props: ['📸', '🎉'] },
  ],
};
const KINDS = ['park', 'hills', 'room', 'sea', 'city'];
const WHOS = ['couple', 'wedding', 'kid', 'family'];

function rr(g, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  g.beginPath();
  g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
function circle(g, x, y, r, color) { g.fillStyle = color; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); }
function emoji(g, ch, x, y, size, alpha = 1) {
  g.save(); g.globalAlpha = alpha; g.font = `${size}px ${EMOJI_FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(ch, x, y); g.restore();
}

/* ---------- 배경 ---------- */
function background(g, W, H, kind, sky, R) {
  const [top, bot] = SKIES[sky] || SKIES[0];
  const night = sky === 3;
  const indoor = kind === 'room' || kind === 'cafe';
  const horizon = H * (kind === 'sea' ? 0.56 : 0.62);

  if (indoor) {
    const wall = g.createLinearGradient(0, 0, 0, H);
    wall.addColorStop(0, kind === 'cafe' ? '#E7C6A4' : night ? '#4B3F57' : '#FFF4E8');
    wall.addColorStop(1, kind === 'cafe' ? '#C99B74' : night ? '#3A3046' : '#FBE3D2');
    g.fillStyle = wall; g.fillRect(0, 0, W, H);
    // 창문
    const wx = W * 0.56, wy = H * 0.12, ww = W * 0.32, wh = H * 0.32;
    g.fillStyle = '#FFFFFF'; rr(g, wx - 8, wy - 8, ww + 16, wh + 16, 10); g.fill();
    const skyG = g.createLinearGradient(0, wy, 0, wy + wh);
    skyG.addColorStop(0, top); skyG.addColorStop(1, bot);
    g.fillStyle = skyG; g.fillRect(wx, wy, ww, wh);
    g.fillStyle = '#FFFFFF'; g.fillRect(wx + ww / 2 - 3, wy, 6, wh); g.fillRect(wx, wy + wh / 2 - 3, ww, 6);
    if (night) { for (let i = 0; i < 12; i++) circle(g, wx + R() * ww, wy + R() * wh * 0.7, 1.5 + R() * 1.5, '#FFF8C9'); }
    else circle(g, wx + ww * 0.72, wy + wh * 0.3, ww * 0.1, '#FFE28A');
    // 커튼
    g.fillStyle = kind === 'cafe' ? 'rgba(255,255,255,.35)' : 'rgba(244,184,192,.8)';
    rr(g, wx - 22, wy - 14, 26, wh + 28, 12); g.fill(); rr(g, wx + ww - 4, wy - 14, 26, wh + 28, 12); g.fill();
    // 바닥 (마루)
    const fy = H * 0.72;
    g.fillStyle = kind === 'cafe' ? '#8F6B4E' : '#E6C39A'; g.fillRect(0, fy, W, H - fy);
    g.fillStyle = 'rgba(120,80,50,.15)';
    for (let i = 0; i < 7; i++) g.fillRect(0, fy + i * ((H - fy) / 7), W, 2);
    // 벽 장식
    if (kind === 'cafe') {
      for (let i = 0; i < 9; i++) circle(g, W * 0.08 + i * W * 0.105, H * 0.07 + Math.sin(i * 1.3) * 10, 5, '#FFF1B8');
      g.fillStyle = 'rgba(255,255,255,.5)'; rr(g, W * 0.06, H * 0.22, W * 0.36, 8, 4); g.fill();
      emoji(g, '🪴', W * 0.12, H * 0.2, W * 0.08); emoji(g, '📚', W * 0.32, H * 0.2, W * 0.07);
      // 테이블
      g.fillStyle = '#B98A66'; g.beginPath(); g.ellipse(W * 0.5, H * 0.86, W * 0.3, H * 0.06, 0, 0, Math.PI * 2); g.fill();
    } else {
      g.fillStyle = 'rgba(255,255,255,.7)'; rr(g, W * 0.1, H * 0.16, W * 0.2, H * 0.17, 8); g.fill();
      emoji(g, night ? '🌙' : '🖼️', W * 0.2, H * 0.25, W * 0.08);
      emoji(g, '🪴', W * 0.1, H * 0.7, W * 0.11);
    }
    return { horizon: H * 0.74, indoor: true };
  }

  // 하늘
  const skyG = g.createLinearGradient(0, 0, 0, horizon);
  skyG.addColorStop(0, top); skyG.addColorStop(1, bot);
  g.fillStyle = skyG; g.fillRect(0, 0, W, horizon + 2);
  if (night) {
    for (let i = 0; i < 40; i++) circle(g, R() * W, R() * horizon * 0.85, 0.8 + R() * 1.6, 'rgba(255,248,210,.9)');
    circle(g, W * 0.78, H * 0.14, W * 0.07, '#FFF3C4');
  } else {
    const sx = W * (0.15 + R() * 0.7), sy = H * (0.1 + R() * 0.12);
    const glow = g.createRadialGradient(sx, sy, 0, sx, sy, W * 0.28);
    glow.addColorStop(0, 'rgba(255,245,200,.9)'); glow.addColorStop(1, 'rgba(255,245,200,0)');
    g.fillStyle = glow; g.fillRect(0, 0, W, horizon);
    circle(g, sx, sy, W * 0.06, sky === 1 ? '#FFD27A' : '#FFF0A8');
    // 구름
    for (let i = 0; i < 3; i++) {
      const cx = R() * W, cy = H * (0.08 + R() * 0.25), s = W * (0.05 + R() * 0.04);
      g.fillStyle = 'rgba(255,255,255,.85)';
      for (let j = 0; j < 4; j++) { g.beginPath(); g.arc(cx + j * s * 0.9 - s * 1.3, cy + (j % 2) * s * 0.3, s * (0.7 + (j % 3) * 0.2), 0, 7); g.fill(); }
    }
  }

  if (kind === 'sea') {
    const sea = g.createLinearGradient(0, horizon, 0, H * 0.8);
    sea.addColorStop(0, night ? '#2F4F7A' : '#5FB8E6'); sea.addColorStop(1, night ? '#243F63' : '#8AD3F2');
    g.fillStyle = sea; g.fillRect(0, horizon, W, H * 0.8 - horizon);
    g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 3; g.lineCap = 'round';
    for (let i = 0; i < 7; i++) { const y = horizon + 14 + i * 22 + R() * 8, x = R() * W; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 30 + R() * 50, y); g.stroke(); }
    g.fillStyle = '#F6E3B8'; g.beginPath(); g.moveTo(0, H * 0.8); g.quadraticCurveTo(W * 0.5, H * 0.74, W, H * 0.82); g.lineTo(W, H); g.lineTo(0, H); g.fill();
    return { horizon: H * 0.86 };
  }
  if (kind === 'mountain') {
    for (let i = 0; i < 4; i++) {
      const x = W * (i * 0.33 - 0.1) + R() * 30, pw = W * 0.45, ph = H * (0.28 + R() * 0.1);
      g.fillStyle = i % 2 ? '#8FA7C7' : '#A9BFDC'; g.beginPath(); g.moveTo(x - pw / 2, horizon); g.lineTo(x, horizon - ph); g.lineTo(x + pw / 2, horizon); g.fill();
      g.fillStyle = '#FFFFFF'; g.beginPath(); g.moveTo(x - pw * 0.14, horizon - ph * 0.68); g.lineTo(x, horizon - ph); g.lineTo(x + pw * 0.14, horizon - ph * 0.68); g.lineTo(x + pw * 0.05, horizon - ph * 0.62); g.lineTo(x - pw * 0.06, horizon - ph * 0.64); g.fill();
    }
  }
  if (kind === 'city') {
    for (let x = -10; x < W; x += 0) {
      const bw = 40 + R() * 70, bh = H * (0.12 + R() * 0.3);
      g.fillStyle = night ? ['#3B3550', '#2E2A42', '#46405D'][Math.floor(R() * 3)] : ['#D9D0E6', '#CFC6DD', '#E4DCEF'][Math.floor(R() * 3)];
      g.fillRect(x, horizon - bh, bw, bh + 4);
      g.fillStyle = night ? '#FFE9A8' : 'rgba(255,255,255,.7)';
      for (let wy = horizon - bh + 10; wy < horizon - 12; wy += 16) for (let wx = x + 7; wx < x + bw - 10; wx += 14) if (R() > 0.35) g.fillRect(wx, wy, 7, 9);
      x += bw + 6;
    }
    g.fillStyle = night ? '#4A4458' : '#CFC3B6'; g.fillRect(0, horizon, W, H - horizon);
    g.fillStyle = 'rgba(255,255,255,.5)'; for (let x = 10; x < W; x += 60) g.fillRect(x, horizon + (H - horizon) * 0.5, 30, 4);
    return { horizon: H * 0.86 };
  }
  // 잔디 언덕 / 눈밭
  const snow = kind === 'snow';
  const greens = snow ? ['#F4F7FB', '#EAF0F7', '#FFFFFF'] : night ? ['#3F6B4A', '#355C40', '#4A7A55'] : ['#9ED08A', '#86C174', '#B2DB9C'];
  g.fillStyle = greens[0]; g.fillRect(0, horizon, W, H - horizon);
  for (let i = 0; i < 3; i++) {
    g.fillStyle = greens[(i + 1) % 3];
    g.beginPath(); g.ellipse(W * (0.2 + i * 0.35) + R() * 40, horizon + 10 + i * 6, W * (0.45 + R() * 0.2), H * (0.08 + R() * 0.05), 0, Math.PI, Math.PI * 2); g.fill();
  }
  // 나무
  for (let i = 0; i < 4; i++) {
    const tx = R() < 0.5 ? W * (0.04 + R() * 0.2) : W * (0.76 + R() * 0.2), ty = horizon + 4 + R() * 10, s = W * (0.05 + R() * 0.03);
    g.fillStyle = '#A47A5C'; g.fillRect(tx - s * 0.12, ty - s * 1.4, s * 0.24, s * 1.4);
    const cols = snow ? ['#FFFFFF', '#EEF3F8'] : kind === 'park' && sky === 2 ? ['#F9C9D2', '#FCDCE3'] : ['#7DB86C', '#9ED08A'];
    circle(g, tx, ty - s * 1.6, s * 0.75, cols[0]); circle(g, tx - s * 0.5, ty - s * 1.25, s * 0.55, cols[1]); circle(g, tx + s * 0.5, ty - s * 1.25, s * 0.55, cols[1]);
  }
  if (snow) { for (let i = 0; i < 60; i++) circle(g, R() * W, R() * H, 1.5 + R() * 2.5, 'rgba(255,255,255,.9)'); }
  else if (!night) { for (let i = 0; i < 18; i++) circle(g, R() * W, horizon + 16 + R() * (H - horizon - 30), 3 + R() * 3, ['#FFFFFF', '#F4B8C0', '#F7D58B', '#FFB7A5'][i % 4]); }
  return { horizon: H * 0.88 };
}

/* ---------- 동글동글한 캐릭터 (3D 마을 캐릭터와 같은 비율) ---------- */
function chibi(g, x, feet, u, o = {}) {
  const skin = '#FFE0C7', hair = o.hair || HAIRS[0], top = o.suit ? '#2F2B33' : o.dress ? '#FFFFFF' : o.outfit || OUTFITS[0];
  const headY = feet - 2.95 * u;
  g.lineCap = 'round';
  // 그림자
  g.fillStyle = 'rgba(0,0,0,.12)'; g.beginPath(); g.ellipse(x, feet + u * 0.1, u * 1.1, u * 0.22, 0, 0, Math.PI * 2); g.fill();
  // 베일 · 긴 머리 (머리 뒤)
  if (o.veil) { g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.ellipse(x, headY + u * 0.9, u * 1.25, u * 1.9, 0, 0, Math.PI * 2); g.fill(); }
  if (o.long || o.dress) { g.fillStyle = hair; rr(g, x - u * 1.02, headY - u * 0.4, u * 2.04, u * 1.9, u * 0.5); g.fill(); }
  // 다리
  if (!o.dress) {
    g.strokeStyle = o.suit ? '#2F2B33' : '#6B5B53'; g.lineWidth = u * 0.36;
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(x + s * u * 0.28, feet - u * 1.0); g.lineTo(x + s * u * 0.28, feet - u * 0.15); g.stroke(); }
    g.fillStyle = '#4A3B38'; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(x + s * u * 0.3, feet - u * 0.05, u * 0.26, u * 0.14, 0, 0, Math.PI * 2); g.fill(); }
  }
  // 몸통 / 드레스
  if (o.dress) {
    g.fillStyle = '#FFFFFF'; g.beginPath(); g.moveTo(x - u * 0.5, feet - u * 1.5); g.lineTo(x + u * 0.5, feet - u * 1.5); g.quadraticCurveTo(x + u * 1.3, feet - u * 0.4, x + u * 1.25, feet); g.lineTo(x - u * 1.25, feet); g.quadraticCurveTo(x - u * 1.3, feet - u * 0.4, x - u * 0.5, feet - u * 1.5); g.fill();
    g.fillStyle = '#F4B8C0'; rr(g, x - u * 0.55, feet - u * 1.55, u * 1.1, u * 0.14, u * 0.07); g.fill();
  }
  g.fillStyle = top; rr(g, x - u * 0.65, feet - u * 2.05, u * 1.3, u * 1.25, u * 0.5); g.fill();
  if (o.suit) {
    g.fillStyle = '#FFFFFF'; g.beginPath(); g.moveTo(x - u * 0.2, feet - u * 2.0); g.lineTo(x + u * 0.2, feet - u * 2.0); g.lineTo(x, feet - u * 1.45); g.fill();
    g.fillStyle = '#1E1A22'; g.beginPath(); g.moveTo(x, feet - u * 1.92); g.lineTo(x - u * 0.18, feet - u * 2.02); g.lineTo(x - u * 0.18, feet - u * 1.82); g.fill(); g.beginPath(); g.moveTo(x, feet - u * 1.92); g.lineTo(x + u * 0.18, feet - u * 2.02); g.lineTo(x + u * 0.18, feet - u * 1.82); g.fill();
    circle(g, x - u * 0.42, feet - u * 1.85, u * 0.1, '#F4B8C0');
  }
  // 팔
  g.strokeStyle = o.dress ? skin : top; g.lineWidth = u * 0.3;
  const arm = (s, up) => { g.beginPath(); g.moveTo(x + s * u * 0.6, feet - u * 1.85); if (up) g.lineTo(x + s * u * 1.0, feet - u * 2.7); else g.lineTo(x + s * u * 0.82, feet - u * 1.1); g.stroke(); circle(g, up ? x + s * u * 1.0 : x + s * u * 0.82, up ? feet - u * 2.72 : feet - u * 1.08, u * 0.17, skin); };
  arm(-1, o.waveL); arm(1, o.wave);
  // 부케
  if (o.bouquet) {
    g.fillStyle = '#9CC08A'; rr(g, x - u * 0.08, feet - u * 1.25, u * 0.16, u * 0.4, u * 0.05); g.fill();
    ['#F4B8C0', '#FFFFFF', '#F7D58B', '#E88A98', '#FFE3EA', '#F4B8C0'].forEach((c, i) => circle(g, x + Math.cos(i * 1.05) * u * 0.22, feet - u * 1.35 + Math.sin(i * 1.05) * u * 0.18, u * 0.16, c));
    circle(g, x, feet - u * 1.33, u * 0.16, '#E88A98');
  }
  // 머리
  circle(g, x, headY, u, skin);
  g.fillStyle = hair; g.beginPath(); g.arc(x, headY - u * 0.05, u * 1.04, Math.PI * 1.02, Math.PI * 1.98); g.quadraticCurveTo(x + u * 0.5, headY - u * 0.05, x + u * 0.25, headY + u * 0.25); g.quadraticCurveTo(x - u * 0.2, headY - u * 0.2, x - u * 0.6, headY + u * 0.1); g.quadraticCurveTo(x - u * 1.0, headY - u * 0.05, x - u * 1.04, headY - u * 0.05); g.fill();
  if (o.crown) for (let i = 0; i < 5; i++) circle(g, x - u * 0.6 + i * u * 0.3, headY - u * 0.98 + Math.abs(i - 2) * u * 0.1, u * 0.09, i % 2 ? '#F4B8C0' : '#FFFFFF');
  if (o.hat) emoji(g, o.hat, x, headY - u * 1.0, u * 1.3);
  // 눈 · 볼 · 입
  for (const s of [-1, 1]) {
    circle(g, x + s * u * 0.33, headY + u * 0.05, u * 0.12, '#2B2220');
    circle(g, x + s * u * 0.33 + u * 0.04, headY, u * 0.04, '#FFFFFF');
    circle(g, x + s * u * 0.6, headY + u * 0.32, u * 0.15, 'rgba(255,150,150,.55)');
  }
  if (o.glasses) { g.strokeStyle = '#4A3B38'; g.lineWidth = u * 0.06; for (const s of [-1, 1]) { g.beginPath(); g.arc(x + s * u * 0.33, headY + u * 0.05, u * 0.22, 0, Math.PI * 2); g.stroke(); } }
  g.strokeStyle = '#2B2220'; g.lineWidth = u * 0.07; g.beginPath(); g.arc(x, headY + u * 0.4, u * 0.16, 0.15, Math.PI - 0.15); g.stroke();
  // 풍선
  if (o.balloon) {
    g.strokeStyle = '#B8A59B'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x + u * 0.82, feet - u * 1.08); g.lineTo(x + u * 1.3, feet - u * 3.9); g.stroke();
    circle(g, x + u * 1.3, feet - u * 4.4, u * 0.55, o.balloon); circle(g, x + u * 1.15, feet - u * 4.55, u * 0.14, 'rgba(255,255,255,.6)');
  }
}

function people(g, W, feet, who, R, n = 2) {
  const cx = W / 2, U = W * 0.085;
  const outfit = () => OUTFITS[Math.floor(R() * OUTFITS.length)], hairc = () => HAIRS[Math.floor(R() * HAIRS.length)];
  if (who === 'wedding') {
    chibi(g, cx - U * 1.35, feet, U, { suit: true, hair: '#3A2A24', wave: R() < 0.4 });
    chibi(g, cx + U * 1.35, feet, U, { dress: true, veil: true, crown: true, bouquet: true, hair: '#5A3A2A' });
  } else if (who === 'bride') chibi(g, cx, feet, U * 1.15, { dress: true, veil: true, crown: true, bouquet: true, hair: '#5A3A2A', wave: R() < 0.5 });
  else if (who === 'groom') chibi(g, cx, feet, U * 1.15, { suit: true, hair: '#3A2A24', wave: true });
  else if (who === 'propose') {
    chibi(g, cx - U * 1.3, feet, U, { suit: false, outfit: '#8FB8DE', hair: '#3A2A24', wave: true });
    chibi(g, cx + U * 1.3, feet, U, { outfit: '#F4B8C0', hair: '#5A3A2A', long: true, waveL: true });
    emoji(g, '💍', cx - U * 0.3, feet - U * 2.9, U * 1.1);
  } else if (who === 'couple') {
    chibi(g, cx - U * 1.3, feet, U, { outfit: outfit(), hair: hairc(), wave: R() < 0.5 });
    chibi(g, cx + U * 1.3, feet, U, { outfit: outfit(), hair: hairc(), long: true, waveL: R() < 0.5 });
  } else if (who === 'kid' || who === 'kid-balloon') chibi(g, cx, feet, U * 0.75, { outfit: outfit(), hair: hairc(), long: R() < 0.5, wave: true, balloon: who === 'kid-balloon' ? '#E88A98' : null });
  else if (who === 'baby') chibi(g, cx, feet, U * 0.6, { outfit: '#FFF3EA', hair: '#5A3A2A', hat: '🎀' });
  else if (who === 'kidparent') {
    chibi(g, cx - U * 0.9, feet, U, { outfit: outfit(), hair: hairc(), long: true });
    chibi(g, cx + U * 1.0, feet, U * 0.7, { outfit: outfit(), hair: hairc(), wave: true });
  } else if (who === 'family') {
    const count = Math.min(7, Math.max(3, n));
    const gap = Math.min(U * 2.1, (W * 0.9) / count);
    for (let i = 0; i < count; i++) {
      const x = cx + (i - (count - 1) / 2) * gap;
      const elder = i === 0 || (count > 4 && i === count - 1);
      const kid = !elder && i > count - 3 && count > 3 && i % 2 === 1;
      chibi(g, x, feet, U * (kid ? 0.7 : elder ? 0.95 : 1), { outfit: outfit(), hair: elder ? '#C8C2C0' : hairc(), long: i % 2 === 1, glasses: elder, wave: i === count - 1 });
    }
  }
}

/* ---------- 한 장 그리기 ---------- */
export function demoPhoto(theme, idx, longEdge = 840) {
  const id = theme.id || 'wedding';
  const list = SCENES[id];
  const R = prng(`${id}:${idx}`);
  const scene = (list && list[idx]) || { kind: KINDS[Math.floor(R() * KINDS.length)], sky: Math.floor(R() * 5), who: WHOS[Math.floor(R() * WHOS.length)], props: ['✨'] };
  const ar = [1, 4 / 3, 3 / 4][idx % 3];
  const W = Math.round(ar >= 1 ? longEdge : longEdge * ar), H = Math.round(ar >= 1 ? longEdge / ar : longEdge);
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const bg = background(g, W, H, scene.kind, scene.sky, R);
  const feet = bg.horizon;
  // 큰 소품 (뒤)
  const big = scene.props[0];
  if (big) emoji(g, big, W * (R() < 0.5 ? 0.15 : 0.85), feet - W * 0.36, W * 0.21, 0.95);
  people(g, W, feet - 6, scene.who, R, scene.n);
  // 작은 소품 (앞)
  scene.props.slice(1).forEach((p, i) => emoji(g, p, W * (0.12 + i * 0.7 + R() * 0.1), feet - W * 0.06 + R() * 10, W * 0.12));
  // 반짝이
  for (let i = 0; i < 10; i++) circle(g, R() * W, R() * H * 0.6, 1.2 + R() * 2, 'rgba(255,255,255,.75)');
  if (id === 'wedding' || id === 'dating') for (let i = 0; i < 5; i++) emoji(g, ['💗', '✨', '🌸'][i % 3], R() * W, R() * H * 0.5, W * 0.035, 0.8);
  // 가장자리 어둡게 (사진 느낌)
  const vig = g.createRadialGradient(W / 2, H / 2, W * 0.35, W / 2, H / 2, W * 0.85);
  vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(60,30,20,.22)');
  g.fillStyle = vig; g.fillRect(0, 0, W, H);
  // 어린 시절: 빛바랜 옛날 사진 느낌 + 흰 테두리
  if (id === 'childhood') {
    g.fillStyle = 'rgba(150,105,40,.2)'; g.fillRect(0, 0, W, H);
    g.strokeStyle = '#FFFDF8'; g.lineWidth = W * 0.035; g.strokeRect(0, 0, W, H);
  }
  return c;
}
