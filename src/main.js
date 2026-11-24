import { L, isKo, setLang } from './i18n.js';
import * as UI from './ui.js';
import * as Game from './game.js';
import { openTextView } from './textview.js';
import { formatKDate, dday, photoThemes, buzz, phase, currentStep, isDemoClock, fetchLetters } from './common.js';
import { sound } from './sound.js';

/* =========================================================
   Start screen & loading the 3D village
   On phones that cannot run 3D, it works as "📖 Text view" automatically.
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
const LOAD_MSG = L([[10, '마을을 짓는 중… 🏡'], [35, '꽃을 심는 중… 🌷'], [65, '의자를 놓는 중… 🪑'], [85, '사진을 거는 중… 🖼️']],
  [[10, 'Building the village… 🏡'], [35, 'Planting flowers… 🌷'], [65, 'Setting out chairs… 🪑'], [85, 'Hanging photos… 🖼️']]);
const setLoad = p => {
  $('#loadbar').style.width = p + '%';
  const btn = $('#btn-enter');
  if (btn.disabled) { const m = LOAD_MSG.filter(([k]) => p >= k).pop(); if (m) btn.textContent = m[1]; }
};

/* ---------- Phone screen tweaks ---------- */
// Block two-finger zoom in iPhone Safari (so it does not clash with walking)
['gesturestart', 'gesturechange'].forEach(t => document.addEventListener(t, e => e.preventDefault()));
// Keep the letter form visible when the keyboard comes up
if (window.visualViewport) {
  const vv = window.visualViewport;
  const upd = () => document.documentElement.style.setProperty('--kb', `${Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop))}px`);
  vv.addEventListener('resize', upd);
  vv.addEventListener('scroll', upd);
}

/* ---------- Start screen ---------- */
const { date, time } = formatKDate();
const names = `${W.groom.name} ♥ ${W.bride.name}`;
$('#i-groom').textContent = W.groom.name;
$('#i-bride').textContent = W.bride.name;
$('#i-date').innerHTML = L(`${date} ${time}<br>${W.venue.name} ${W.venue.hall}`, `${date} · ${time}<br>${W.venue.name}, ${W.venue.hall}`);
$('#i-dday').textContent = dday();
$('#h-names').textContent = names;
$('#h-dday').textContent = dday();
document.title = L(`${names} 결혼합니다`, `${names} are getting married`);

/* Language switch: top right of the start screen (and one item in the ☰ menu) */
$('#btn-lang')?.addEventListener('click', () => setLang(isKo ? 'en' : 'ko'));

/* On the wedding day, the start screen links straight to directions and accounts */
const ph = phase();
if (ph === 'today') {
  $('#i-dday').textContent = L('오늘이에요 🎉', "It's today 🎉");
  $('#h-dday').textContent = L('오늘 🎉', 'Today 🎉');
  const box = $('#today');
  box.hidden = false;
  const paint = () => {
    const cs = currentStep();
    box.querySelector('.t-now').textContent = cs.done ? L('🙏 오늘 예식이 모두 끝났어요. 감사합니다', "🙏 Today's ceremony is over. Thank you")
      : cs.item ? L(`🕰️ 지금: ${cs.item.time} ${cs.item.title}`, `🕰️ Now: ${cs.item.time} ${cs.item.title}`)
      : L(`🕰️ 곧 시작해요 · 첫 순서 ${W.schedule?.[0]?.time || ''} ${W.schedule?.[0]?.title || ''}`, `🕰️ Starting soon · First: ${W.schedule?.[0]?.time || ''} ${W.schedule?.[0]?.title || ''}`);
  };
  paint(); setInterval(paint, 60000);
  box.querySelector('.t-dir').onclick = UI.showDirections;
  box.querySelector('.t-acc').onclick = UI.showAccounts;
} else if (ph === 'after') {
  $('#i-dday').textContent = `${dday()} 💕`;
}
if (isDemoClock()) $('#demo-badge').hidden = false;

/* If letters are collected in a Google Sheet, load them right away (so the mailbox and garden fill up at once) */
fetchLetters();

/* ---------- 🎲 My character ----------
   On the first visit the outfit colour and hair are picked at random, and the next visit keeps the same look.
   'Pick again' picks a new one. */
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
  if (document.body.classList.contains('playing')) UI.toast(L('🎲 새 캐릭터로 바뀌었어요', '🎲 You have a new character'));
}
saveCharacter();
drawAvatar(false);
$('#btn-reroll').onclick = reroll;
setLoad(10);
UI.initUI();

/* ---------- PC side panel: places visited, wide view ---------- */
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
  if (visited.size === document.querySelectorAll('#visits li').length) setTimeout(() => { UI.toast(L('🏅 마을의 모든 곳을 둘러봤어요!', "🏅 You've visited every spot in the village"), 3600); UI.confetti(); }, 800);
});
paintVisits();
$('#btn-wide')?.addEventListener('click', () => {
  const on = document.body.classList.toggle('wide');
  $('#btn-wide').textContent = on ? L('📱 휴대폰 보기', '📱 Phone view') : L('🖥 넓게 보기', '🖥 Wide view');
  game?.resize();
});

/* ---------- 3D village ---------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();   // give the test context back right away
    return true;
  } catch { return false; }
}

async function boot() {
  // If the village is not ready within 9 seconds, at least let people open the text view
  const watchdog = setTimeout(() => {
    const btn = $('#btn-enter');
    if (!btn.disabled) return;
    btn.disabled = false; btn.textContent = L('📖 청첩장 글로 보기', '📖 Read the invitation'); btn.onclick = () => openText();
    $('#intro-help').textContent = L('마을이 늦게 열리고 있어요. 먼저 글로 보기로 읽어 주세요', 'The village is slow to load. Read the text view for now');
  }, 9000);
  if (hasWebGL()) {
    try {
      game = await Game.init({ character, onProgress: setLoad });
    } catch (err) {
      console.error('Could not load the 3D village; switching to the text view', err);
      game = null;
      $('#app').innerHTML = '';
    }
  }
  clearTimeout(watchdog);
  if (!game) document.body.classList.add('no3d');
  setLoad(100);

  /* ---------- Entering ---------- */
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
    if (!W.bgm && !sound.saved()) setTimeout(() => UI.toast(L('🔊 오른쪽 위 버튼으로 오르골 소리를 켤 수 있어요', '🔊 Tap the top-right button to turn on the music box'), 3400), 9500);
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

  /* ---------- Shortcut menu ---------- */
  const themes = game ? game.themes : photoThemes();
  const MENU = [
    { emoji: '💌', label: L('청첩장', 'Invitation'), go: UI.showInvitation },
    { emoji: '🗺️', label: L('오시는 길', 'Directions'), go: UI.showDirections },
    { emoji: '✉️', label: L('축하 편지', 'Letters'), go: () => UI.showMailbox(game?.letterSent) },
    game
      ? { emoji: '🖼️', label: L('추억 사진관', 'Photo gallery'), go: () => { UI.closeModal(); game.enterMuseum(); } }
      : { emoji: '📚', label: L('전체 앨범', 'Full album'), go: () => UI.showAlbum(themes) },
    { emoji: '🎁', label: L('마음 전하실 곳', 'Gift accounts'), go: UI.showAccounts },
    { emoji: '🕰️', label: L('오늘의 식순', "Today's schedule"), go: UI.showSchedule },
    { emoji: '❓', label: L('신랑신부 퀴즈', 'Couple quiz'), go: UI.showQuiz },
    { emoji: '💐', label: L('신랑·신부 인사', 'Meet the couple'), go: UI.showCouple },
    ...(game ? [
      { emoji: '🚶', label: L('자동 투어', 'Auto tour'), go: () => { UI.closeModal(); game.startTour(); } },
      { emoji: '🌙', label: L('낮 · 밤 바꾸기', 'Day · night'), go: () => { UI.closeModal(); game.cycleTime(); } },
      { emoji: '🎲', label: L('캐릭터 바꾸기', 'New character'), go: () => { UI.closeModal(); reroll(); } },
    ] : []),
    // language: shows the other language
    { emoji: '🌐', label: L('English', '한국어'), go: switchFromMenu },
  ];
  if (ph === 'today') {
    // on the wedding day, schedule, directions and accounts come first (same strings as the labels above)
    const first = [L('오늘의 식순', "Today's schedule"), L('오시는 길', 'Directions'), L('마음 전하실 곳', 'Gift accounts')];
    MENU.sort((a, b) => (first.indexOf(a.label) + 1 || 99) - (first.indexOf(b.label) + 1 || 99));
  }
  /* Language from the ☰ menu: close the sheet first (it pops its history entry), then reload */
  function switchFromMenu() {
    let done = false;
    const go = () => { if (!done) { done = true; setLang(isKo ? 'en' : 'ko'); } };
    addEventListener('popstate', go, { once: true });
    UI.closeModal();
    setTimeout(go, 500);
  }
  const openMenu = () => UI.showMenu(MENU);
  $('#btn-menu').onclick = openMenu;
  $('#btn-text-hud').onclick = () => openText();
  $('#btn-desk-text')?.addEventListener('click', () => openText());

  /* ---------- Sound: the mp3 if there is one, otherwise the synthesised music box ---------- */
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
      UI.toast(on ? L('🔊 오르골 배경음을 켰어요', '🔊 Music box on') : L('🔇 소리를 껐어요', '🔇 Sound off'));
    };
  }

  const enterBtn = $('#btn-enter');
  enterBtn.disabled = false;
  enterBtn.textContent = game ? L('마을에 입장하기 💐', 'Enter the village 💐') : L('📖 청첩장 글로 보기', '📖 Read the invitation');
  enterBtn.onclick = () => (game ? start3D() : openText());
  $('#btn-text').onclick = () => openText();
  $('#btn-tour-start').onclick = () => {
    if (!game) { openText(); return; }
    start3D();
    setTimeout(() => game.startTour(), 1400);
  };
}
boot();
