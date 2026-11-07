import { demoPhoto } from './demo-photos.js';

/* =========================================================
   3D와 상관없는 공용 도구 (날짜, 사진 목록, 편지 보관, 진동)
   3D가 안 되는 휴대폰에서도 청첩장·앨범·편지가 동작하도록 따로 둡니다.
   ========================================================= */
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export function weddingDate() { return new Date(window.WEDDING.date); }
const toKST = d => { try { return new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })); } catch { return new Date(d.getTime() + (d.getTimezoneOffset() + 540) * 60000); } };

/* ---------- 시계 ----------
   주소 끝에 #demo 를 붙이면 '예식 당일, 식 35분 전'부터 시계가 흐르고,
   #now=2027-05-15T12:55 처럼 시각을 정할 수도 있어요.
   (심사·테스트용: 당일 모드, 진행 중인 식순, 카운트다운을 미리 볼 수 있습니다) */
let clockBase = null, clockT0 = 0;
function readClockHash() {
  clockBase = null;
  const h = location.hash.slice(1);
  const m = h.match(/(?:^|&)now=([^&]+)/);
  if (m) {
    const raw = decodeURIComponent(m[1]);
    const d = new Date(/[+Z]/.test(raw.slice(10)) ? raw : raw + (raw.length <= 16 ? ':00' : '') + '+09:00');
    if (!isNaN(d)) { clockBase = d.getTime(); clockT0 = Date.now(); return; }
  }
  if (/(?:^|&)demo(?:&|$)/.test(h)) { clockBase = weddingDate().getTime() - 35 * 60000; clockT0 = Date.now(); }
}
readClockHash();
addEventListener('hashchange', readClockHash);
export function now() { return clockBase ? new Date(clockBase + (Date.now() - clockT0)) : new Date(); }
export const isDemoClock = () => !!clockBase;

/* 예식 전 · 당일 · 후 */
export function phase() {
  const k = toKST(weddingDate()), n = toKST(now());
  const diff = Math.round((new Date(k.getFullYear(), k.getMonth(), k.getDate()) - new Date(n.getFullYear(), n.getMonth(), n.getDate())) / 864e5);
  return diff > 0 ? 'before' : diff === 0 ? 'today' : 'after';
}
/* 당일 지금 진행 중인 순서 (각 순서는 다음 순서 시작까지, 마지막은 90분) */
export function currentStep() {
  const items = window.WEDDING.schedule || [];
  const k = toKST(weddingDate()), n = toKST(now());
  const sameDay = n.toDateString() === k.toDateString();
  const mins = n.getHours() * 60 + n.getMinutes();
  const toM = s => { const [h, m] = String(s.time).split(':').map(Number); return h * 60 + (m || 0); };
  let idx = -1, done = false;
  if (sameDay && items.length) {
    items.forEach((s, i) => { const start = toM(s), end = items[i + 1] ? toM(items[i + 1]) : start + 90; if (mins >= start && mins < end) idx = i; });
    done = mins >= toM(items[items.length - 1]) + 90;
  }
  return { sameDay, idx, item: items[idx] || null, next: items[idx + 1] || null, done };
}

export function formatKDate(d = weddingDate()) {
  const k = toKST(d);
  const h = k.getHours(), m = k.getMinutes();
  const ap = h < 12 ? '오전' : '오후';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return {
    date: `${k.getFullYear()}년 ${k.getMonth() + 1}월 ${k.getDate()}일 ${DAYS[k.getDay()]}요일`,
    time: `${ap} ${hh}시${m ? ' ' + m + '분' : ''}`,
    k,
  };
}

export function dday() {
  const k = formatKDate().k;
  const n = toKST(now());
  const a = new Date(k.getFullYear(), k.getMonth(), k.getDate());
  const b = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  const diff = Math.round((a - b) / 86400000);
  if (diff > 0) return `D-${diff}`;
  if (diff === 0) return 'D-DAY';
  return `D+${-diff}`;
}

/* 편지에 찍히는 날짜: 오늘이면 '오늘', 아니면 '5월 3일' */
export function shortDate(iso) {
  const d = toKST(new Date(iso));
  if (isNaN(d)) return '';
  const n = toKST(now());
  if (d.toDateString() === n.toDateString()) return '오늘';
  return `${d.getMonth() + 1}월 ${d.getDate()}일`;
}

/* 짧은 진동 (안드로이드에서만 동작, 아이폰은 조용히 무시) */
export function buzz(ms = 10) {
  try { navigator.vibrate?.(ms); } catch {}
}

/* ---------- ✉️ 편지 보관 ----------
   기본: 하객이 쓴 편지는 그 휴대폰(브라우저)에 저장되고 config.js의 letters(샘플)와 합쳐서 보여줍니다.
   config.js에 lettersSheet(구글 시트에 붙인 Apps Script 웹 앱 주소)를 넣으면
   편지가 시트로 보내지고, 시트에 모인 편지를 모든 하객이 봅니다. (tools/편지_시트_연결.md)
   - 보내기에 실패하면 휴대폰에 보관(pending)해 두었다가 다음에 자동으로 다시 보냅니다
   - 시트에서 받아 온 목록은 휴대폰에도 복사해 두어, 연결이 느려도 바로 보입니다 */
const LS_KEY = 'wedding-letters-v2';        // 내가 쓴 편지
const LS_REMOTE = 'wedding-letters-remote'; // 시트에서 받아 온 편지 (마지막 사본)
const W_ = () => window.WEDDING || {};
export const lettersRemote = () => !!W_().lettersSheet;
const siteId = () => String(W_().lettersSite || 'main');
const lsGet = k => { try { const v = JSON.parse(localStorage.getItem(k) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const uuid = () => (crypto.randomUUID ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));

function savedLetters() { return lsGet(LS_KEY); }
let seedCache = null; // 예시 편지는 한 번만 만들어 시간·id를 고정 (꽃밭이 같은 편지를 두 번 심지 않도록)
function seedLetters() {
  if (seedCache) return seedCache;
  const now = Date.now();
  seedCache = (W_().letters || []).map((l, i) => ({
    id: `seed-${i}`, name: l.name, side: l.side || '', message: l.message,
    time: l.time || new Date(now - (l.daysAgo ?? i) * 86400000 - (i * 37 % 23) * 60000).toISOString(),
    seed: true,
  }));
  return seedCache;
}

const remote = { list: lettersRemote() ? lsGet(LS_REMOTE) : [], at: 0, loading: null, error: null, ok: false };
export const lettersStatus = () => ({ remote: lettersRemote(), loading: !!remote.loading, error: remote.error, loaded: remote.ok, at: remote.at });
const notify = () => { try { dispatchEvent(new CustomEvent('wedding:letters')); } catch {} };

/* 시트(Apps Script 웹 앱) 호출. GET은 목록, POST는 편지 한 통.
   본문을 text/plain으로 보내야 브라우저가 사전 요청(preflight) 없이 바로 보냅니다. */
async function call(method, params, body) {
  const u = new URL(W_().lettersSheet);
  u.searchParams.set('site', siteId());
  Object.entries(params || {}).forEach(([k, v]) => u.searchParams.set(k, v));
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => ctrl?.abort(), 15000);
  try {
    const r = await fetch(u.toString(), {
      method, redirect: 'follow', signal: ctrl?.signal,
      ...(body ? { body: JSON.stringify(body), headers: { 'Content-Type': 'text/plain;charset=utf-8' } } : {}),
    });
    const j = await r.json();
    if (!j || j.ok !== true) throw new Error(j?.error || 'bad response');
    return j;
  } finally { clearTimeout(timer); }
}

/* 보내지 못한 편지 다시 보내기 */
async function sendPending() {
  const mine = savedLetters();
  if (!mine.some(l => l.pending)) return;
  for (const l of mine) {
    if (!l.pending) continue;
    try { await call('POST', {}, { id: l.id, name: l.name, side: l.side, message: l.message, time: l.time }); delete l.pending; }
    catch { break; }
  }
  lsSet(LS_KEY, mine);
}

/* 시트에서 편지 목록 받아 오기. 짧은 시간 안에 여러 번 불러도 한 번만 요청합니다. */
export function fetchLetters({ force = false } = {}) {
  if (!lettersRemote()) return Promise.resolve(allLetters());
  if (remote.loading) return remote.loading;
  if (!force && remote.ok && Date.now() - remote.at < 10000) return Promise.resolve(allLetters());
  remote.loading = (async () => {
    try {
      await sendPending();
      const j = await call('GET', { action: 'list', t: Date.now() });
      remote.list = (j.letters || []).filter(l => l && l.message).map(l => ({
        id: String(l.id || ''), name: String(l.name || ''), side: String(l.side || ''), message: String(l.message || ''), time: l.time || '',
      }));
      remote.at = Date.now(); remote.ok = true; remote.error = null;
      lsSet(LS_REMOTE, remote.list.slice(0, 300));
      // 시트에 들어간 내 편지는 '보내는 중' 표시를 지움
      const ids = new Set(remote.list.map(l => l.id));
      const mine = savedLetters(); let changed = false;
      mine.forEach(l => { if (l.pending && ids.has(l.id)) { delete l.pending; changed = true; } });
      if (changed) lsSet(LS_KEY, mine);
    } catch (e) {
      remote.error = e?.message || String(e);
    } finally {
      remote.loading = null;
      notify();
    }
    return allLetters();
  })();
  return remote.loading;
}

export function allLetters() {
  const mine = savedLetters().map(l => ({ ...l, mine: true }));
  if (!lettersRemote()) return [...mine, ...seedLetters()];
  const mineIds = new Set(mine.map(l => l.id).filter(Boolean));
  const sheetIds = new Set(remote.list.map(l => l.id));
  const fromSheet = remote.list.map(l => (mineIds.has(l.id) ? { ...l, mine: true } : l));
  const notYet = mine.filter(l => !sheetIds.has(l.id)); // 아직 시트에 안 들어갔거나 보내는 중인 내 편지
  return [...notYet, ...fromSheet, ...seedLetters()];
}

/* 편지 저장. 시트가 연결돼 있으면 보내고, 실패하면 휴대폰에 보관(pending)했다가 나중에 다시 보냅니다.
   돌려주는 값: { ok, letter, sent } */
export async function saveLetter(letter) {
  const l = { id: uuid(), name: letter.name, side: letter.side || '', message: letter.message, time: letter.time || new Date().toISOString() };
  const list = savedLetters();
  list.unshift(lettersRemote() ? { ...l, pending: true } : l);
  lsSet(LS_KEY, list.slice(0, 100));
  if (!lettersRemote()) return { ok: true, letter: l, sent: false };
  // (보낸 쪽 화면이 직접 다시 그리고 꽃도 심으므로 여기서는 알림 이벤트를 보내지 않아요)
  try {
    await call('POST', {}, l);
    const cur = savedLetters(); const m = cur.find(x => x.id === l.id); if (m) { delete m.pending; lsSet(LS_KEY, cur); }
    remote.list.unshift(l); lsSet(LS_REMOTE, remote.list.slice(0, 300));
    return { ok: true, letter: l, sent: true };
  } catch (e) {
    return { ok: false, letter: l, sent: false, error: e?.message || String(e) };
  }
}
export function letterCount() { return allLetters().length; }

/* config → 테마별 사진 목록
   demoPhotos가 켜져 있으면 src가 'demo:테마:번호'가 되고, photoURL()이 그림으로 바꿔줍니다. */
export function photoThemes() {
  const W = window.WEDDING;
  const themes = W.museum?.themes || [];
  return themes.map(t => {
    let photos;
    if (Array.isArray(t.photos) && t.photos.length) {
      photos = t.photos.map((p, i) => (typeof p === 'string' ? { src: p, caption: t.captions?.[i] || '' } : p));
    } else if (W.demoPhotos || t.demo) {
      photos = Array.from({ length: t.count || t.captions?.length || 0 }, (_, i) => ({ src: `demo:${t.id}:${i}`, caption: t.captions?.[i] || '' }));
    } else {
      photos = Array.from({ length: t.count || 0 }, (_, i) => ({
        src: `${t.folder}/${i + 1}.${t.ext || 'jpg'}`,
        caption: t.captions?.[i] || '',
      }));
    }
    photos.forEach((p, i) => { p.idx = i; p.theme = t; });
    return { ...t, photos };
  });
}

/* 사진 주소 (데모 사진이면 그 자리에서 그려서 데이터 주소로) */
const demoCache = new Map();
export const isDemo = p => typeof p?.src === 'string' && p.src.startsWith('demo:');
export function photoURL(p, size = 'full') {
  if (!isDemo(p)) return p.src;
  const key = `${p.src}:${size}`;
  if (!demoCache.has(key)) {
    const c = demoPhoto(p.theme, p.idx, size === 'thumb' ? 360 : 840);
    demoCache.set(key, c.toDataURL('image/jpeg', size === 'thumb' ? 0.8 : 0.86));
  }
  return demoCache.get(key);
}

/* 사진이 아직 없을 때 보여줄 안내 이미지 */
export function placeholderCanvas(theme, idx, src, w = 600, h = 600, msg = '사진을 넣어주세요') {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#FFFDF8'); grd.addColorStop(1, theme.color || '#F4B8C0');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `${w * 0.2}px serif`; g.fillText(theme.emoji || '📷', w / 2, h * 0.38);
  g.fillStyle = '#7C6A66';
  g.font = `700 ${w * 0.075}px "Gowun Batang"`; g.fillText(`${theme.title} #${idx + 1}`, w / 2, h * 0.62);
  g.font = `${w * 0.04}px "Gowun Dodum"`; g.globalAlpha = 0.7;
  g.fillText(msg, w / 2, h * 0.73);
  g.fillText(src, w / 2, h * 0.8);
  return c;
}
