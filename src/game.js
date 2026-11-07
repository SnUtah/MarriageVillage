import * as THREE from 'three';
import { isMobile, formatKDate, damp } from './util.js';
import { buildEnvironment, spawnHearts, updateBursts, TIMES } from './world.js';
import { buildProps, MUSEUM_DOOR, BED } from './props.js';
import { buildMuseum } from './museum.js';
import { createCharacter } from './character.js';
import { buzz, allLetters, now, photoURL } from './common.js';
import { sound } from './sound.js';
import * as UI from './ui.js';

/* =========================================================
   3D 마을 (휴대폰 세로 화면 기준)
   - 화면 아무 곳이나 끌면 조이스틱이 나타나 걷기
   - 톡 누르면 그 자리로 걸어가기, 이름표를 누르면 찾아가서 열기
   - 입장 전에는 카메라가 마을 위를 천천히 돌고, 입장하면 내 캐릭터로 내려앉음
   - 🚶 자동 투어, 🌙 낮·노을·밤, 📸 포토존 셀카, 🪙 동전, 🌷 편지 꽃밭
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
const phone = $('#phone');
const view = { w: 1, h: 1, left: 0, top: 0 };
const isPortrait = () => view.w / view.h < 0.8;
const sleep = ms => new Promise(r => setTimeout(r, ms));

let renderer, scene, camera, sun, hemi, env, props, museum, player, marker;
let colliders = [], boxes = [];
let playing = false, current = null, lastTheme = -2, dpr = 1, lost = false, level = 0, markerT = 0, frame = 0;
/* 화면 해상도 배율: 휴대폰 1.75, PC 1.5, 넓게 보기 1.0, 느린 기기는 단계별로 더 낮춤 */
function currentDpr() {
  let d = Math.min(devicePixelRatio || 1, isMobile ? 1.75 : 1.5);
  if (level >= 1) d = Math.min(d, 1.25);
  if (level >= 2) d = 1;
  if (document.body.classList.contains('wide')) d = Math.min(d, 1);
  return d;
}
/* 내장 그래픽처럼 힘이 약한 GPU면 처음부터 가볍게 */
function weakGPU() {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    return /Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(r);
  } catch { return false; }
}
let character = { outfit: '#8FB8DE', hair: '#5A3A2A', longHair: false };
let timeMode = 'day', tour = null;
const clock = new THREE.Clock();
const SUN_OFFSET = new THREE.Vector3(16, 34, 14);
const state = {
  pos: new THREE.Vector3(0, 0, 31), vel: new THREE.Vector3(), yaw: Math.PI, y: 0, vy: 0,
  mode: 'out', busy: false, doorCooldown: 0, target: null, pending: null, targetT: 0, moveT: 0, stuckT: 0, swoopT: 0, posing: null,
};
const keys = new Set();
const joy = { x: 0, y: 0 };
const { date } = formatKDate();
const PZ = { x: -11, z: 19, ang: 0.5 };   // 포토존 위치·방향
const TOUR = ['invitation', 'mailbox', 'directions', 'gift', 'schedule', 'quiz', 'fountain', 'couple', 'photozone', 'museum'];
const visit = id => { try { dispatchEvent(new CustomEvent('wv:visit', { detail: id })); } catch {} };

/* ---------- 시작 ---------- */
export async function init({ character: c, onProgress = () => {} } = {}) {
  if (c) character = { ...character, ...c };
  // 캔버스 글씨용 폰트 기다리기 (최대 3초)
  await Promise.race([
    Promise.all(['700 40px "Gowun Batang"', '40px "Gowun Batang"', '40px "Gowun Dodum"'].map(f => document.fonts.load(f))),
    new Promise(r => setTimeout(r, 3000)),
  ]);
  onProgress(35);

  measure();
  const lowEnd = isMobile && ((navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));
  renderer = new THREE.WebGLRenderer({ antialias: !lowEnd, powerPreference: 'high-performance' });
  dpr = currentDpr();
  renderer.setPixelRatio(dpr);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;   // 부드러운 그림자(PCFSoft)보다 훨씬 가벼움
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  $('#app').appendChild(renderer.domElement);
  // 그래픽이 잠깐 끊겨도(백그라운드 복귀 등) 다시 살아나도록
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; UI.toast('화면을 다시 그리는 중…'); });
  renderer.domElement.addEventListener('webglcontextrestored', () => { lost = false; renderer.setPixelRatio(dpr); renderer.setSize(view.w, view.h); snapCamera(); });

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(TIMES.day.fog, 50, 150);
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
  hemi = new THREE.HemisphereLight(TIMES.day.hemi, TIMES.day.ground, TIMES.day.hemiI);
  scene.add(hemi);
  sun = new THREE.DirectionalLight(TIMES.day.sun, TIMES.day.sunI);
  sun.castShadow = true;
  const sm = isMobile ? 1024 : 1536;
  sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 90 });
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);

  props = buildProps(scene);
  const avoid = (x, z) =>
    props.colliders.some(c => Math.hypot(x - c.x, z - c.z) < c.r + 0.8) ||
    props.boxes.some(b => x > b.minX - 0.8 && x < b.maxX + 0.8 && z > b.minZ - 0.8 && z < b.maxZ + 0.8);
  env = buildEnvironment(scene, avoid);
  onProgress(65);
  museum = buildMuseum(scene);
  onProgress(85);
  colliders = [...env.colliders, ...props.colliders];
  boxes = props.boxes;

  // 편지 한 통 = 꽃 한 송이, 동전은 던진 만큼
  allLetters().forEach(l => props.plantFlower(l, false));
  props.fountain.setCoins(coinCount());

  // 톡 누른 자리에 잠깐 보이는 표시
  marker = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.48, 24), new THREE.MeshBasicMaterial({ color: '#E88A98', transparent: true, opacity: 0, depthWrite: false }));
  marker.rotation.x = -Math.PI / 2;
  marker.position.y = 0.05;
  scene.add(marker);

  swapPlayer();
  bindInput();
  buildMuseumBar();
  $('#btn-shot').onclick = () => takePhoto(false);
  $('#btn-tour')?.addEventListener('click', () => stopTour('투어를 멈췄어요. 마음대로 둘러보세요'));
  addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) clock.getDelta(); });
  onResize();
  applyTime(initialTime());
  if (lowEnd || weakGPU()) applyLevel(1);
  snapCamera();
  loop();
  // 사진관 일러스트는 한가할 때 미리 그려 둠 (입장할 때 끊기지 않도록)
  if (W.demoPhotos) {
    const queue = museum.themes.flatMap(t => t.photos);
    const idle = window.requestIdleCallback || (f => setTimeout(f, 120));
    const step = () => { const p = queue.shift(); if (!p) return; try { photoURL(p); } catch {} idle(step); };
    idle(step);
  }
  // 주소 끝에 #debug 가 있으면 콘솔에서 만져 볼 수 있는 손잡이 (테스트용)
  if (/debug/.test(location.hash)) window.__wv = { goTo: id => goTo(props.interactables.find(i => i.id === id)), takePhoto, enterMuseum, exitMuseum, cycleTime, startTour, stopTour, applyTime, state, props };

  return {
    themes: museum.themes, start, setCharacter, enterMuseum: () => enterMuseum(), letterSent, takePhoto,
    resize: () => { onResize(); snapCamera(); },
    startTour, stopTour, isTouring: () => !!tour,
    setTime: applyTime, getTime: () => timeMode, cycleTime,
  };
}

function start({ hint = true } = {}) {
  playing = true;
  state.swoopT = 1.8;           // 궤도 카메라 → 내 캐릭터로 천천히 내려앉기
  perfSum = perfN = 0;
  if (sound.saved()) sound.setEnabled(true);
  if (hint) setTimeout(() => UI.toast('👆 화면을 끌면 걷고, 이름표를 누르면 찾아가요', 4200), 900);
  const greet = timeMode === 'night' ? '🌙 밤에 와주셨네요. 가로등을 켜 두었어요' : timeMode === 'dusk' ? '🌇 노을 지는 마을이에요. 천천히 둘러보세요' : null;
  if (greet) setTimeout(() => UI.toast(greet, 3600), 5600);
}
function setCharacter(c) { character = { ...character, ...c }; if (player) swapPlayer(); }

/* 편지를 보내면 꽃밭에 꽃이 피고, 내 캐릭터 주위로 편지가 날아요 */
function letterSent(letter) {
  const at = props.plantFlower(letter || { name: '하객', side: '신랑측' }, true);
  spawnHearts(scene, new THREE.Vector3(state.pos.x, 2.2 + state.y, state.pos.z), 10, '💌');
  if (at && state.mode === 'out' && !tour) {
    state.target = new THREE.Vector3(BED.x - BED.r - 1.0, 0, BED.z + 0.6); state.pending = null; state.targetT = 12; state.moveT = 0;
    setTimeout(() => UI.toast(`🌷 ${letter?.name || '하객'}님의 꽃이 편지 꽃밭에 피었어요`, 3200), 500);
  }
}

function swapPlayer() {
  if (player) scene.remove(player.root);
  player = createCharacter({ outfit: character.outfit, hair: character.hair, longHair: !!character.longHair });
  scene.add(player.root);
}

/* ---------- 🌙 낮 · 노을 · 밤 ---------- */
function initialTime() {
  const h = location.hash;
  if (/night/.test(h)) return 'night';
  if (/sunset|dusk/.test(h)) return 'dusk';
  if (/day|morning/.test(h)) return 'day';
  if (W.skyMode && TIMES[W.skyMode]) return W.skyMode;
  try { const s = localStorage.getItem('wedding-time'); if (TIMES[s]) return s; } catch {}
  const kh = new Date(now().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })).getHours();
  return kh >= 6 && kh < 16 ? 'day' : kh < 19 ? 'dusk' : 'night';
}
function setLights(p) {
  scene.fog.color.set(p.fog);
  sun.color.set(p.sun); sun.intensity = p.sunI;
  hemi.color.set(p.hemi); hemi.groundColor.set(p.ground); hemi.intensity = p.hemiI;
}
function applyTime(m) {
  timeMode = TIMES[m] ? m : 'day';
  const p = env.setTime(timeMode);
  if (state.mode === 'out') setLights(p);
  return timeMode;
}
function cycleTime() {
  const order = ['day', 'dusk', 'night'];
  const next = order[(order.indexOf(timeMode) + 1) % order.length];
  applyTime(next);
  try { localStorage.setItem('wedding-time', next); } catch {}
  UI.toast(next === 'night' ? '🌙 밤 마을이에요. 가로등이 켜졌어요' : next === 'dusk' ? '🌇 노을이 지고 있어요' : '☀️ 다시 환한 낮이에요');
  return next;
}

/* ---------- 화면 크기 ---------- */
function measure() {
  const r = phone.getBoundingClientRect();
  view.w = Math.max(1, r.width); view.h = Math.max(1, r.height); view.left = r.left; view.top = r.top;
}
function onResize() {
  measure();
  camera.aspect = view.w / view.h;
  camera.fov = !isPortrait() ? 50 : state.mode === 'museum' ? 55 : 64;
  camera.updateProjectionMatrix();
  dpr = currentDpr();
  renderer.setPixelRatio(dpr);
  renderer.setSize(view.w, view.h);
}

/* ---------- 조작 ---------- */
function bindInput() {
  // PC 키보드
  addEventListener('keydown', e => {
    if (UI.isOverlayOpen() || /INPUT|TEXTAREA/.test(e.target.tagName) || document.body.classList.contains('reading')) return;
    keys.add(e.code);
    if (/Key[WASD]|Arrow/.test(e.code)) { document.body.classList.add('moved'); stopTour(); }
    if (e.code === 'Space') { jump(); e.preventDefault(); }
    if (e.code === 'KeyE' || e.code === 'Enter') interact();
    if (e.code === 'KeyH') hearts();
    if (e.code === 'KeyN') cycleTime();
  });
  addEventListener('keyup', e => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  // 화면 어디서든 끌면 나타나는 조이스틱
  const el = renderer.domElement, base = $('#joy'), knob = base.querySelector('.knob');
  const R = 48;
  let p = null;
  el.addEventListener('pointerdown', e => {
    if (p || !playing) return;
    p = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ax: e.clientX, ay: e.clientY, drag: false, t: performance.now() };
    try { el.setPointerCapture(e.pointerId); } catch {}
  });
  el.addEventListener('pointermove', e => {
    if (!p || e.pointerId !== p.id) return;
    if (!p.drag) {
      if (Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < 10) return;
      p.drag = true;
      state.target = null; state.pending = null;
      stopTour();
      base.classList.add('active');
      document.body.classList.add('moved');
    }
    let dx = e.clientX - p.ax, dy = e.clientY - p.ay, d = Math.hypot(dx, dy);
    if (d > R) { // 손가락이 멀리 가면 조이스틱도 따라감
      p.ax = e.clientX - (dx / d) * R; p.ay = e.clientY - (dy / d) * R;
      dx = e.clientX - p.ax; dy = e.clientY - p.ay;
    }
    joy.x = dx / R; joy.y = dy / R;
    base.style.left = `${p.ax - view.left}px`;
    base.style.top = `${p.ay - view.top}px`;
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  const end = e => {
    if (!p || e.pointerId !== p.id) return;
    const tap = !p.drag && performance.now() - p.t < 450 && e.type === 'pointerup';
    p = null; joy.x = joy.y = 0;
    base.classList.remove('active');
    base.style.left = base.style.top = '';
    knob.style.transform = '';
    if (tap) onTap(e.clientX, e.clientY);
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);

  $('#btn-action').addEventListener('click', () => interact());
  $('#btn-jump').addEventListener('click', () => jump());
  $('#btn-heart').addEventListener('click', () => hearts());
}

/* 이름표를 누르거나 투어에서 쓰는 '찾아가기': 물건 바로 앞까지 */
function goTo(it) {
  const dx = state.pos.x - it.pos.x, dz = state.pos.z - it.pos.z, d = Math.hypot(dx, dz) || 1;
  const stop = Math.max(0.5, it.r - 0.6);
  state.target = new THREE.Vector3(it.pos.x + (dx / d) * stop, 0, it.pos.z + (dz / d) * stop);
  state.pending = it; state.targetT = 16; state.moveT = 0; state.stuckT = 0;
}
function showMarker(pt) { marker.position.set(pt.x, 0.05, pt.z); markerT = 1; }

/* 톡 → 그 자리로 걸어가기 / 이름표 톡 → 가서 바로 열기 */
const ray = new THREE.Raycaster();
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function onTap(cx, cy) {
  if (UI.isOverlayOpen() || state.busy) return;
  stopTour();
  const ndc = new THREE.Vector2(((cx - view.left) / view.w) * 2 - 1, -((cy - view.top) / view.h) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  if (state.mode === 'out') {
    const hit = ray.intersectObjects(props.interactables.map(i => i.label))[0];
    if (hit) {
      const it = props.interactables.find(i => i.label === hit.object);
      goTo(it);
      showMarker(it.pos);
      buzz(8);
      return;
    }
  }
  const pt = new THREE.Vector3();
  if (ray.ray.intersectPlane(groundPlane, pt)) { state.target = pt; state.pending = null; state.targetT = 8; state.moveT = 0; state.stuckT = 0; showMarker(pt); }
}

/* ---------- 🪙 동전 ---------- */
const COIN_KEY = 'wedding-coins';
const coinCount = () => { try { return +localStorage.getItem(COIN_KEY) || 0; } catch { return 0; } };
function coinLine(n) {
  if (n === 1) return '🪙 첫 동전이에요. 소원은 마음속으로만 🤫';
  if (n === 7) return '🪙 일곱 번째… 소원 부자시네요 😆';
  if (n >= 10) return '🪙 분수가 부자가 됐어요 💰 두 분의 행복을 빌었어요';
  const wishes = ['두 분의 행복을 빌었어요', '평생 웃음 가득하길 빌었어요', '건강하고 행복하길 빌었어요', '오늘처럼 늘 따스하길 빌었어요'];
  return `🪙 퐁당! ${wishes[Math.floor(Math.random() * wishes.length)]}`;
}

/* ---------- 상호작용 ---------- */
const ACTIONS = {
  invitation: UI.showInvitation,
  directions: UI.showDirections,
  gift: UI.showAccounts,
  schedule: UI.showSchedule,
  quiz: UI.showQuiz,
  mailbox: () => UI.showMailbox(letterSent),
  couple: it => {
    it.npcs.forEach(n => n.wave(2));
    spawnHearts(scene, new THREE.Vector3(0, 2.6, -19.3), 14);
    setTimeout(() => { if (!UI.isOverlayOpen() && state.mode === 'out') UI.showCouple(); }, 700);
  },
  fountain: () => {
    player.wave(0.8);
    buzz(30);
    props.fountain.toss(scene, new THREE.Vector3(state.pos.x, 1.4 + state.y, state.pos.z), () => {
      let n = coinCount() + 1;
      try { localStorage.setItem(COIN_KEY, String(n)); } catch {}
      props.fountain.setCoins(n);
      spawnHearts(scene, new THREE.Vector3(0, 2.6, 4), 6, '✨');
      sound.sfx('coin');
      UI.toast(coinLine(n));
    });
  },
  photozone: () => takePhoto(true),
  museum: () => enterMuseum(),
};

function findNearby() {
  const p = state.pos;
  if (state.mode === 'museum') return museum.nearest(p);
  let best = null, bd = Infinity;
  for (const it of props.interactables) {
    const d = Math.hypot(p.x - it.pos.x, p.z - it.pos.z);
    if (d < it.r && d < bd) { bd = d; best = it; }
  }
  return best;
}

function interact(target = current) {
  if (state.busy || UI.isOverlayOpen()) return;
  if (!target) { player.wave(1.4); return; }
  buzz(15);
  sound.sfx('pop');
  if (state.mode === 'museum') {
    if (target.type === 'exit') exitMuseum();
    else if (target.type === 'welcome') UI.showAlbum(museum.themes);
    else if (target.type === 'header') UI.showAlbum(museum.themes, target.ti);
    else if (target.type === 'photo') UI.openLightbox(museum.themes, target.ti, target.idx);
    return;
  }
  state.yaw = Math.atan2(target.pos.x - state.pos.x, target.pos.z - state.pos.z);
  visit(target.id);
  ACTIONS[target.id]?.(target);
}

function updateActionButton() {
  const btn = $('#btn-action');
  const key = current ? (current.id || current.type) + (current.entry?.src ?? current.ti ?? '') : '';
  if (btn.dataset.key === key) return;
  if (key && !btn.dataset.key) { buzz(8); sound.sfx('chime'); } // 물건에 가까워지면 살짝 진동
  btn.dataset.key = key;
  btn.classList.toggle('ready', !!current);
  btn.querySelector('.em').textContent = current ? current.emoji : '👋';
  btn.querySelector('.lb').textContent = current ? current.action : '인사하기';
}

function jump() { if (state.y <= 0.001 && !UI.isOverlayOpen() && !state.busy) { state.vy = 6.5; sound.sfx('jump'); } }
function hearts() {
  spawnHearts(scene, new THREE.Vector3(state.pos.x, 2.2 + state.y, state.pos.z), 8);
  player.wave(1);
  sound.sfx('heart');
  // 신랑신부 가까이에서 하트를 보내면 같이 흔들어 줘요
  if (state.mode === 'out' && Math.hypot(state.pos.x, state.pos.z + 19.6) < 6) props.npcs.forEach(n => n.wave(1.5));
}

/* ---------- 🚶 자동 투어: 마을의 열 곳을 차례로 안내 ---------- */
function startTour() {
  if (!playing || state.mode !== 'out' || state.busy) return;
  tour = { i: 0, waitT: 0.4 };
  document.body.classList.add('touring');
  UI.toast('🚶 자동 투어 시작! 화면을 끌면 언제든 멈춰요', 3200);
}
function stopTour(msg) {
  if (!tour) return;
  tour = null;
  document.body.classList.remove('touring');
  if (state.pending) { state.target = null; state.pending = null; }
  if (msg) UI.toast(msg);
}
function tourNext() {
  const id = TOUR[tour.i++];
  if (!id) { stopTour(); UI.toast('🎉 투어 끝! 이제 마음대로 둘러보세요', 3600); UI.confetti(); sound.sfx('tada'); return; }
  const it = props.interactables.find(i => i.id === id);
  if (!it) return;
  goTo(it);
  showMarker(it.pos);
  tour.waitT = id === 'fountain' ? 2.4 : id === 'couple' ? 1.2 : 0.9;
}

/* ---------- 사진관 드나들기 (휴대폰 뒤로가기 = 나가기) ---------- */
const fade = on => new Promise(r => { $('#fade').classList.toggle('on', on); setTimeout(r, 460); });
function buildMuseumBar() {
  const bar = $('#museum-bar');
  bar.innerHTML = '';
  museum.themes.forEach((t, i) => {
    const c = document.createElement('button');
    c.className = 'chip';
    c.dataset.ti = i;
    c.textContent = `${t.emoji} ${t.title}`;
    c.onclick = () => { state.pos.copy(museum.themeStart(i)); state.target = null; buzz(8); snapCamera(); };
    bar.appendChild(c);
  });
  const album = document.createElement('button');
  album.className = 'chip'; album.textContent = '📚 전체 앨범';
  album.onclick = () => UI.showAlbum(museum.themes);
  bar.append(album);
  $('#btn-exit').onclick = () => exitMuseum();
}

const backFromMuseum = () => exitMuseum(true);
async function enterMuseum(ti = -1) {
  if (state.mode === 'museum' || state.busy) return;
  const wasTour = !!tour;
  stopTour();
  visit('museum');
  state.busy = true;
  await fade(true);
  state.mode = 'museum';
  env.group.visible = props.group.visible = false;
  museum.group.visible = true;
  sun.castShadow = false;
  setLights(TIMES.day);   // 실내는 항상 환하게
  state.pos.copy(ti >= 0 ? museum.themeStart(ti) : museum.spawn);
  state.vel.set(0, 0, 0); state.target = null; state.yaw = Math.PI / 2;
  document.body.classList.add('in-museum');
  onResize();
  snapCamera();
  UI.pushBack(backFromMuseum);
  await fade(false);
  state.busy = false;
  UI.toast(wasTour ? '🏁 투어의 마지막, 사진관이에요. 오른쪽으로 걸으며 구경하세요' : '👉 오른쪽으로 걸으며 사진을 구경하세요', wasTour ? 4200 : 2400);
}
async function exitMuseum(fromBack = false) {
  if (state.mode !== 'museum') return;
  if (state.busy) { if (fromBack) UI.pushBack(backFromMuseum); return; }
  if (!fromBack) UI.popBack(backFromMuseum);
  state.busy = true;
  await fade(true);
  state.mode = 'out';
  env.group.visible = props.group.visible = true;
  museum.group.visible = false;
  sun.castShadow = renderer.shadowMap.enabled;
  setLights(TIMES[timeMode]);
  state.pos.set(MUSEUM_DOOR.x, 0, MUSEUM_DOOR.z + 2.4);
  state.vel.set(0, 0, 0); state.target = null; state.yaw = 0;
  state.doorCooldown = 1.5;
  document.body.classList.remove('in-museum');
  onResize();
  snapCamera();
  await fade(false);
  state.busy = false;
}

/* ---------- 📸 기념사진 (포토존: 신랑신부가 옆에 와서 3·2·1) ---------- */
function polaroid(src) {
  const w = src.width, h = src.height;
  const pad = Math.round(w * 0.05), foot = Math.round(w * 0.22);
  const inner = document.createElement('canvas');
  inner.width = w + pad * 2; inner.height = h + pad + foot;
  const g = inner.getContext('2d');
  g.fillStyle = '#FFFDF8'; g.fillRect(0, 0, inner.width, inner.height);
  g.drawImage(src, pad, pad);
  g.fillStyle = '#C9637A'; g.textAlign = 'center';
  g.font = `700 ${Math.round(foot * 0.3)}px "Gowun Batang", serif`;
  g.fillText(`${W.groom.name} ♥ ${W.bride.name}`, inner.width / 2, h + pad + foot * 0.45);
  g.fillStyle = '#7C6A66'; g.font = `${Math.round(foot * 0.15)}px "Gowun Dodum", sans-serif`;
  g.fillText(`${date} · 우리의 작은 결혼 마을에서`, inner.width / 2, h + pad + foot * 0.74);
  // 살짝 기울인 폴라로이드 + 테이프
  const out = document.createElement('canvas');
  out.width = Math.round(inner.width * 1.12); out.height = Math.round(inner.height * 1.1);
  const o = out.getContext('2d');
  o.fillStyle = '#F6E9DD'; o.fillRect(0, 0, out.width, out.height);
  o.save();
  o.translate(out.width / 2, out.height / 2); o.rotate(-0.03);
  o.shadowColor = 'rgba(80,40,30,.3)'; o.shadowBlur = w * 0.05; o.shadowOffsetY = w * 0.02;
  o.drawImage(inner, -inner.width / 2, -inner.height / 2);
  o.restore();
  o.fillStyle = 'rgba(255,236,170,.8)';
  for (const [tx, ty, ra] of [[out.width * 0.09, out.height * 0.055, -0.5], [out.width * 0.91, out.height * 0.055, 0.5]]) {
    o.save(); o.translate(tx, ty); o.rotate(ra); o.fillRect(-w * 0.11, -w * 0.03, w * 0.22, w * 0.06); o.restore();
  }
  return out;
}

async function takePhoto(pose = false) {
  if (state.busy || UI.isOverlayOpen()) return;
  let restore = null;
  state.busy = true;
  try {
    if (pose) {
      stopTour();
      state.target = null; state.pending = null;
      const nx = Math.sin(PZ.ang), nz = Math.cos(PZ.ang), rx = Math.cos(PZ.ang), rz = -Math.sin(PZ.ang);
      const px = PZ.x + nx * 0.9, pz = PZ.z + nz * 0.9;
      state.pos.set(px, 0, pz); state.vel.set(0, 0, 0); state.yaw = PZ.ang; state.y = 0; state.vy = 0;
      const [groom, bride] = props.npcs;
      const saved = [groom, bride].map(c => ({ c, p: c.root.position.clone(), r: c.root.rotation.y }));
      groom.root.position.set(px - rx * 1.15, 0, pz - rz * 1.15);
      bride.root.position.set(px + rx * 1.15, 0, pz + rz * 1.15);
      groom.root.rotation.y = bride.root.rotation.y = PZ.ang;
      restore = () => saved.forEach(s => { s.c.root.position.copy(s.p); s.c.root.rotation.y = s.r; });
      state.posing = { x: px, z: pz, nx, nz };
      player.wave(3); groom.wave(3); bride.wave(3);
      const cnt = $('#count');
      for (const k of ['3', '2', '1']) {
        cnt.textContent = k; cnt.classList.remove('show'); void cnt.offsetWidth; cnt.classList.add('show');
        sound.sfx('pop'); buzz(8);
        await sleep(680);
      }
      cnt.classList.remove('show'); cnt.textContent = '';
      spawnHearts(scene, new THREE.Vector3(px, 2.4, pz), 10);
    }
    renderer.render(scene, camera);
    const c = polaroid(renderer.domElement);
    const url = c.toDataURL('image/jpeg', 0.9);
    sound.sfx('shutter'); buzz(25);
    $('#fade').style.background = '#fff';
    $('#fade').classList.add('on');
    setTimeout(() => { $('#fade').classList.remove('on'); setTimeout(() => ($('#fade').style.background = ''), 450); }, 120);
    restore?.(); restore = null;
    state.posing = null;
    const inApp = /KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);
    UI.openModal('기념사진', `
      <img src="${url}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="기념사진" />
      <p class="muted center">${inApp ? '사진을 <b>길게 눌러</b> 저장해 주세요' : '사진을 <b>길게 눌러</b> 저장하거나 아래 버튼을 눌러주세요'}</p>
      <div class="btns">
        <button class="btn pink ph-share">📤 공유하기</button>
        <button class="btn ph-save">💾 저장하기</button>
      </div>`, body => {
      let file = null, objUrl = null;
      c.toBlob(b => { if (!b) return; file = new File([b], 'wedding-village-photo.jpg', { type: 'image/jpeg' }); objUrl = URL.createObjectURL(b); }, 'image/jpeg', 0.9);
      const save = () => {
        if (inApp) { UI.toast('사진을 길게 눌러 저장해 주세요'); return; }
        const a = document.createElement('a');
        a.href = objUrl || url; a.download = 'wedding-village-photo.jpg';
        document.body.appendChild(a); a.click(); a.remove();
        UI.toast('💾 사진을 저장했어요');
      };
      body.querySelector('.ph-save').onclick = save;
      body.querySelector('.ph-share').onclick = async () => {
        if (file && navigator.canShare?.({ files: [file] })) {
          try { await navigator.share({ files: [file], title: `${W.groom.name} ♥ ${W.bride.name} 결혼 마을` }); return; }
          catch (err) { if (err?.name === 'AbortError') return; }
        }
        save();
      };
      return () => { if (objUrl) URL.revokeObjectURL(objUrl); };
    });
  } finally {
    restore?.();
    state.posing = null;
    state.busy = false;
  }
}

/* ---------- 이동 & 충돌 ---------- */
const PR = 0.45;
function collide(p) {
  if (state.mode === 'museum') { museum.clamp(p); return; }
  for (const c of colliders) {
    const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + PR;
    if (d < m && d > 1e-4) { p.x = c.x + (dx / d) * m; p.z = c.z + (dz / d) * m; }
  }
  for (const b of boxes) {
    const cx = Math.max(b.minX, Math.min(p.x, b.maxX)), cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
    const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
    if (d >= PR) continue;
    if (d > 1e-4) { p.x = cx + (dx / d) * PR; p.z = cz + (dz / d) * PR; continue; }
    const o = [[p.x - b.minX, 'x', b.minX - PR], [b.maxX - p.x, 'x', b.maxX + PR], [p.z - b.minZ, 'z', b.minZ - PR], [b.maxZ - p.z, 'z', b.maxZ + PR]]
      .sort((a, c) => a[0] - c[0])[0];
    p[o[1]] = o[2];
  }
  const r = Math.hypot(p.x, p.z);
  if (r > 39) { p.x *= 39 / r; p.z *= 39 / r; }
}

const tmp = new THREE.Vector3();
function movePlayer(dt) {
  let ix = 0, iz = 0;
  if (!UI.isOverlayOpen() && !state.busy) {
    if (keys.has('KeyW') || keys.has('ArrowUp')) iz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) iz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
    ix += joy.x; iz += joy.y;
    if (ix || iz) { state.target = null; state.pending = null; }
    if (state.target) {
      tmp.subVectors(state.target, state.pos); tmp.y = 0;
      const d = tmp.length();
      state.targetT -= dt; state.moveT += dt;
      const sp0 = Math.hypot(state.vel.x, state.vel.z);
      const it = state.pending;
      let arrived;
      if (it) {
        const dp = Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z);
        arrived = dp < it.r - 0.2 || (dp < it.r && sp0 < 0.6 && state.moveT > 0.5);
      } else arrived = d < 0.35;
      // 뭔가에 막혀 0.7초 넘게 못 움직이면 포기 (물건 반경 안이면 도착으로 침)
      state.stuckT = state.moveT > 0.5 && sp0 < 0.5 ? state.stuckT + dt : 0;
      if (arrived || state.targetT < 0 || state.stuckT > 0.7) {
        const inRange = it && Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z) < it.r;
        state.target = null; state.pending = null; state.stuckT = 0;
        if (it && (arrived || inRange)) interact(it);
        else if (!arrived && !tour) UI.toast('그쪽은 막혀 있어요');
      } else { ix = tmp.x / d; iz = tmp.z / d; }
    }
  }
  const len = Math.hypot(ix, iz);
  if (len > 1) { ix /= len; iz /= len; }
  const speed = state.mode === 'museum' ? 5.2 : 6.4;
  state.vel.x = damp(state.vel.x, ix * speed, 10, dt);
  state.vel.z = damp(state.vel.z, iz * speed, 10, dt);
  state.pos.x += state.vel.x * dt;
  state.pos.z += state.vel.z * dt;
  collide(state.pos);

  const sp = Math.hypot(state.vel.x, state.vel.z);
  if (sp > 0.3) {
    let diff = Math.atan2(state.vel.x, state.vel.z) - state.yaw;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    state.yaw += diff * Math.min(1, dt * 12);
  }
  state.vy -= 20 * dt;
  state.y = Math.max(0, state.y + state.vy * dt);
  if (state.y === 0) state.vy = 0;

  player.root.position.set(state.pos.x, state.y, state.pos.z);
  player.root.rotation.y = state.yaw;
  return sp / speed;
}

/* ---------- 카메라 (세로 화면 기준) ---------- */
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const goalPos = new THREE.Vector3(), goalLook = new THREE.Vector3();
function cameraGoal(outPos, outLook, t = 0) {
  const p = state.pos, portrait = isPortrait();
  if (state.posing) {
    const z = state.posing;
    outPos.set(z.x + z.nx * 4.4, 1.7, z.z + z.nz * 4.4);
    outLook.set(z.x, 1.25, z.z);
  } else if (!playing) {
    // 입장 전: 광장 위를 천천히 도는 소개 카메라
    const a = t * 0.08;
    outPos.set(Math.sin(a) * 26, 12 + Math.sin(t * 0.3) * 1.2, 4 + Math.cos(a) * 26);
    outLook.set(0, 2, -2);
  } else if (state.mode === 'museum') {
    outPos.set(p.x, portrait ? 4.1 : 3.6, portrait ? 9.6 : 8.4);
    outLook.set(p.x, portrait ? 2.45 : 2.7, -3.2);
  } else if (portrait) {
    outPos.set(p.x, 14.5, p.z + 14.5);
    outLook.set(p.x, 0.6, p.z - 3.5);
  } else {
    outPos.set(p.x, 10.5, p.z + 13.5);
    outLook.set(p.x, 1.2, p.z - 1.5);
  }
}
function snapCamera() { cameraGoal(camPos, camLook, clock.elapsedTime); camera.position.copy(camPos); camera.lookAt(camLook); }
function updateCamera(dt, t) {
  cameraGoal(goalPos, goalLook, t);
  const lp = state.swoopT > 0 ? 2.4 : 5, ll = state.swoopT > 0 ? 2.8 : 6;
  if (state.swoopT > 0) state.swoopT -= dt;
  camPos.x = damp(camPos.x, goalPos.x, lp, dt); camPos.y = damp(camPos.y, goalPos.y, lp, dt); camPos.z = damp(camPos.z, goalPos.z, lp, dt);
  camLook.x = damp(camLook.x, goalLook.x, ll, dt); camLook.y = damp(camLook.y, goalLook.y, ll, dt); camLook.z = damp(camLook.z, goalLook.z, ll, dt);
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  env.sky.position.copy(camera.position);
}

/* ---------- 느린 휴대폰이면 단계적으로 가볍게 ---------- */
let perfSum = 0, perfN = 0, slowCount = 0;
function applyLevel(n) {
  level = n;
  dpr = currentDpr(); renderer.setPixelRatio(dpr); renderer.setSize(view.w, view.h);
  if (n >= 1) env.setLite(1);
  if (n >= 2 && renderer.shadowMap.enabled) {
    renderer.shadowMap.enabled = false; sun.castShadow = false;
    scene.traverse(o => { if (o.material) o.material.needsUpdate = true; });
  }
  if (n >= 3) env.setLite(2);
}
function adaptQuality(dt) {
  if (!playing) return;
  perfSum += dt; perfN++;
  if (perfSum < 2.5) return;
  const avg = perfSum / perfN;
  perfSum = perfN = 0;
  if (avg > 1 / 32 && level < 3) applyLevel(level + 1);
  else if (level >= 3 && avg > 1 / 18 && ++slowCount === 2) UI.toast('📖 휴대폰이 힘들어하면 ☰ 메뉴의 "글로 보기"로 편하게 보세요', 4800);
}

/* ---------- 매 프레임 ---------- */
function loop() {
  requestAnimationFrame(loop);
  frame++;
  if (!playing && frame % 2) return;   // 입장 전(소개 화면)에는 절반만 그려서 가볍게
  const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
  if (lost || document.hidden) return;
  // 팝업이나 '글로 보기'가 화면을 덮고 있으면 그리지 않고 배터리를 아낌
  if (UI.isOverlayOpen() || document.body.classList.contains('reading')) return;
  adaptQuality(dt);

  const speed = playing ? movePlayer(dt) : 0;
  player.animate(dt, speed, t);

  if (state.mode === 'out') {
    env.update(dt, t, state.pos);
    props.update(dt, t, state.pos);
    sun.position.copy(state.pos).add(SUN_OFFSET);
    sun.target.position.copy(state.pos);
    for (const it of props.interactables) {
      const d = Math.hypot(state.pos.x - it.pos.x, state.pos.z - it.pos.z);
      it.label.material.opacity = Math.max(0.3, Math.min(1, 1.6 - d / 22));
    }
    // 사진관 문으로 걸어 들어가면 자동 입장
    state.doorCooldown -= dt;
    if (playing && state.doorCooldown < 0 && !state.busy && state.vel.z < -1 &&
      Math.hypot(state.pos.x - MUSEUM_DOOR.x, state.pos.z - MUSEUM_DOOR.z) < 1.1) enterMuseum();
    // 투어: 멈춰 있고 열린 창이 없으면 다음 장소로
    if (tour && playing && !state.busy && !state.target) {
      tour.waitT -= dt;
      if (tour.waitT <= 0) tourNext();
    }
  } else {
    museum.update(dt, t, state.pos);
    const ti = museum.currentTheme(state.pos);
    if (ti !== lastTheme) {
      lastTheme = ti;
      document.querySelectorAll('#museum-bar .chip[data-ti]').forEach(c => c.classList.toggle('on', +c.dataset.ti === ti));
      document.querySelector('#museum-bar .chip.on')?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
  updateBursts(dt);
  if (markerT > 0) {
    markerT -= dt * 1.3;
    const k = 1 - Math.max(0, markerT);
    marker.scale.setScalar(1 + k * 0.9);
    marker.material.opacity = Math.max(0, markerT);
  }

  current = playing && !state.posing ? findNearby() : null;
  updateActionButton();
  updateCamera(dt, t);
  renderer.render(scene, camera);
}
