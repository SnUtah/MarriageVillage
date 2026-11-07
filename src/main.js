import * as UI from './ui.js';
import * as Game from './game.js';
import { openTextView } from './textview.js';
import { formatKDate, dday, photoThemes, buzz, phase, currentStep, isDemoClock, fetchLetters } from './common.js';
import { sound } from './sound.js';

/* =========================================================
   시작 화면 & 3D 마을 불러오기
   3D를 쓸 수 없는 휴대폰에서는 자동으로 "📖 글로 보기"로 동작합니다.
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
const LOAD_MSG = [[10, '마을을 짓는 중… 🏡'], [35, '꽃을 심는 중… 🌷'], [65, '의자를 놓는 중… 🪑'], [85, '사진을 거는 중… 🖼️']];
const setLoad = p => {
  $('#loadbar').style.width = p + '%';
  const btn = $('#btn-enter');
  if (btn.disabled) { const m = LOAD_MSG.filter(([k]) => p >= k).pop(); if (m) btn.textContent = m[1]; }
};

/* ---------- 휴대폰 화면 다듬기 ---------- */
// 아이폰 사파리의 두 손가락 화면 확대 막기 (걷기 조작과 겹치지 않도록)
['gesturestart', 'gesturechange'].forEach(t => document.addEventListener(t, e => e.preventDefault()));
// 키보드가 올라와도 편지 쓰는 창이 가려지지 않도록
if (window.visualViewport) {
  const vv = window.visualViewport;
  const upd = () => document.documentElement.style.setProperty('--kb', `${Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop))}px`);
  vv.addEventListener('resize', upd);
  vv.addEventListener('scroll', upd);
}

/* ---------- 시작 화면 ---------- */
const { date, time } = formatKDate();
const names = `${W.groom.name} ♥ ${W.bride.name}`;
$('#i-groom').textContent = W.groom.name;
$('#i-bride').textContent = W.bride.name;
$('#i-date').innerHTML = `${date} ${time}<br>${W.venue.name} ${W.venue.hall}`;
$('#i-dday').textContent = dday();
$('#h-names').textContent = names;
$('#h-dday').textContent = dday();
document.title = `${names} 결혼합니다`;

/* 예식 당일에는 첫 화면에서 바로 오시는 길·계좌로 */
const ph = phase();
if (ph === 'today') {
  $('#i-dday').textContent = '오늘이에요 🎉';
  $('#h-dday').textContent = '오늘 🎉';
  const box = $('#today');
  box.hidden = false;
  const paint = () => {
    const cs = currentStep();
    box.querySelector('.t-now').textContent = cs.done ? '🙏 오늘 예식이 모두 끝났어요. 감사합니다'
      : cs.item ? `🕰️ 지금: ${cs.item.time} ${cs.item.title}`
      : `🕰️ 곧 시작해요 · 첫 순서 ${W.schedule?.[0]?.time || ''} ${W.schedule?.[0]?.title || ''}`;
  };
  paint(); setInterval(paint, 60000);
  box.querySelector('.t-dir').onclick = UI.showDirections;
  box.querySelector('.t-acc').onclick = UI.showAccounts;
} else if (ph === 'after') {
  $('#i-dday').textContent = `${dday()} 💕`;
}
if (isDemoClock()) $('#demo-badge').hidden = false;

/* 편지가 구글 시트에 모이는 설정이면 들어오자마자 받아 두기 (편지함·꽃밭이 바로 채워지도록) */
fetchLetters();

/* ---------- 🎲 내 캐릭터 ----------
   처음 들어오면 옷 색·머리가 무작위로 정해지고, 다음에 다시 와도 같은 모습으로 걸어요.
   '다시 뽑기'를 누르면 새로 뽑습니다. */
let game = null;
const OUTFITS = ['#8FB8DE', '#F4B8C0', '#F7D58B', '#A8D08D', '#C9B3E6', '#F9C59E', '#E88A98', '#7FC8C2'];
const HAIRS = ['#5A3A2A', '#3A2A24', '#7A5238', '#1E1A22', '#C98A5B'];
const CHAR_KEY = 'wedding-character';
const pick = a => a[Math.floor(Math.random() * a.length)];
const randomCharacter = () => ({ outfit: pick(OUTFITS), hair: pick(HAIRS), longHair: Math.random() < 0.5 });
let character = null;
try { character = JSON.parse(localStorage.getItem(CHAR_KEY) || 'null'); } catch {}
if (!character || !OUTFITS.includes(character.outfit) || !HAIRS.includes(character.hair)) character = randomCharacter();
const saveCharacter = () => { try { localStorage.setItem(CHAR_KEY, JSON.stringify(character)); } catch {} };
function drawAvatar(pop) {
  const a = $('#avatar');
  a.style.setProperty('--outfit', character.outfit);
  a.style.setProperty('--hair', character.hair);
  a.classList.toggle('long', !!character.longHair);
  if (pop) { a.classList.remove('pop'); void a.offsetWidth; a.classList.add('pop'); }
}
function reroll() {
  let next = randomCharacter();
  if (next.outfit === character.outfit) next = randomCharacter();
  character = next;
  saveCharacter();
  drawAvatar(true);
  game?.setCharacter(character);
  buzz(12);
  sound.sfx('pop');
  if (document.body.classList.contains('playing')) UI.toast('🎲 새 캐릭터로 바뀌었어요');
}
saveCharacter();
drawAvatar(false);
$('#btn-reroll').onclick = reroll;
setLoad(10);
UI.initUI();

/* ---------- PC 소개 패널: 둘러본 곳 체크, 넓게 보기 ---------- */
const VISIT_KEY = 'wedding-visited';
let visited = new Set();
try { visited = new Set(JSON.parse(localStorage.getItem(VISIT_KEY) || '[]')); } catch {}
function paintVisits() {
  document.querySelectorAll('#visits li').forEach(li => li.classList.toggle('done', visited.has(li.dataset.id)));
  const n = visited.size, total = document.querySelectorAll('#visits li').length;
  const c = $('#visit-count');
  if (c) c.textContent = n ? `${n}/${total}` : '';
}
addEventListener('wv:visit', e => {
  if (visited.has(e.detail)) return;
  visited.add(e.detail);
  try { localStorage.setItem(VISIT_KEY, JSON.stringify([...visited])); } catch {}
  paintVisits();
  if (visited.size === document.querySelectorAll('#visits li').length) setTimeout(() => { UI.toast('🏅 마을의 모든 곳을 둘러봤어요!', 3600); UI.confetti(); }, 800);
});
paintVisits();
$('#btn-wide')?.addEventListener('click', () => {
  const on = document.body.classList.toggle('wide');
  $('#btn-wide').textContent = on ? '📱 휴대폰 보기' : '🖥 넓게 보기';
  game?.resize();
});

/* ---------- 3D 마을 ---------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();   // 테스트용 컨텍스트는 바로 돌려줌
    return true;
  } catch { return false; }
}

async function boot() {
  // 9초 안에 마을이 준비되지 않으면 글로 보기라도 열 수 있게
  const watchdog = setTimeout(() => {
    const btn = $('#btn-enter');
    if (!btn.disabled) return;
    btn.disabled = false; btn.textContent = '📖 청첩장 글로 보기'; btn.onclick = () => openText();
    $('#intro-help').textContent = '마을이 늦게 열리고 있어요. 먼저 글로 보기로 읽어 주세요';
  }, 9000);
  if (hasWebGL()) {
    try {
      game = await Game.init({ character, onProgress: setLoad });
    } catch (err) {
      console.error('3D 마을을 불러오지 못해 글로 보기로 전환합니다', err);
      game = null;
      $('#app').innerHTML = '';
    }
  }
  clearTimeout(watchdog);
  if (!game) document.body.classList.add('no3d');
  setLoad(100);

  /* ---------- 입장 ---------- */
  let started = false;
  const bgm = $('#bgm');
  const soundBtn = $('#btn-sound');
  const paintSound = () => { soundBtn.textContent = (W.bgm ? !bgm.paused : sound.enabled) ? '🔊' : '🔇'; };
  function start3D() {
    if (started || !game) return;
    started = true;
    document.body.classList.add('playing');
    $('#intro').classList.add('hide');
    if (W.bgm) bgm.play().then(paintSound).catch(() => {});
    game.start({ hint: true });
    paintSound();
    if (!W.bgm && !sound.saved()) setTimeout(() => UI.toast('🔊 오른쪽 위 버튼으로 오르골 소리를 켤 수 있어요', 3400), 9500);
  }
  function openText(section) {
    $('#intro').classList.add('hide');
    openTextView({
      canPlay: !!game,
      onPlay: start3D,
      onSent: game?.letterSent,
      onClose: () => { if (!started) $('#intro').classList.remove('hide'); },
      section,
    });
  }

  /* ---------- 바로가기 메뉴 ---------- */
  const themes = game ? game.themes : photoThemes();
  const MENU = [
    { emoji: '💌', label: '청첩장', go: UI.showInvitation },
    { emoji: '🗺️', label: '오시는 길', go: UI.showDirections },
    { emoji: '✉️', label: '축하 편지', go: () => UI.showMailbox(game?.letterSent) },
    game
      ? { emoji: '🖼️', label: '추억 사진관', go: () => { UI.closeModal(); game.enterMuseum(); } }
      : { emoji: '📚', label: '전체 앨범', go: () => UI.showAlbum(themes) },
    { emoji: '🎁', label: '마음 전하실 곳', go: UI.showAccounts },
    { emoji: '🕰️', label: '오늘의 식순', go: UI.showSchedule },
    { emoji: '❓', label: '신랑신부 퀴즈', go: UI.showQuiz },
    { emoji: '💐', label: '신랑·신부 인사', go: UI.showCouple },
    ...(game ? [
      { emoji: '🚶', label: '자동 투어', go: () => { UI.closeModal(); game.startTour(); } },
      { emoji: '🌙', label: '낮 · 밤 바꾸기', go: () => { UI.closeModal(); game.cycleTime(); } },
      { emoji: '🎲', label: '캐릭터 바꾸기', go: () => { UI.closeModal(); reroll(); } },
    ] : []),
  ];
  if (ph === 'today') {
    // 당일에는 식순·오시는 길·계좌를 앞으로
    const first = ['오늘의 식순', '오시는 길', '마음 전하실 곳'];
    MENU.sort((a, b) => (first.indexOf(a.label) + 1 || 99) - (first.indexOf(b.label) + 1 || 99));
  }
  const openMenu = () => UI.showMenu(MENU);
  $('#btn-menu').onclick = openMenu;
  $('#btn-text-hud').onclick = () => openText();
  $('#btn-desk-text')?.addEventListener('click', () => openText());

  /* ---------- 소리: mp3가 있으면 그것을, 없으면 합성 오르골 ---------- */
  if (W.bgm) {
    bgm.src = W.bgm;
    soundBtn.hidden = false;
    soundBtn.onclick = () => {
      if (bgm.paused) bgm.play().then(paintSound).catch(() => {});
      else { bgm.pause(); paintSound(); }
    };
  } else if (game) {
    soundBtn.hidden = false;
    paintSound();
    soundBtn.onclick = () => {
      const on = sound.setEnabled(!sound.enabled);
      paintSound();
      UI.toast(on ? '🔊 오르골 배경음을 켰어요' : '🔇 소리를 껐어요');
    };
  }

  const enterBtn = $('#btn-enter');
  enterBtn.disabled = false;
  enterBtn.textContent = game ? '마을에 입장하기 💐' : '📖 청첩장 글로 보기';
  enterBtn.onclick = () => (game ? start3D() : openText());
  $('#btn-text').onclick = () => openText();
  $('#btn-tour-start').onclick = () => {
    if (!game) { openText(); return; }
    start3D();
    setTimeout(() => game.startTour(), 1400);
  };
}
boot();
