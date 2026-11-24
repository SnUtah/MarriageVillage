import { L } from './i18n.js';
import { demoPhoto } from './demo-photos.js';

/* =========================================================
   Shared tools that do not need 3D (dates, photo lists, letter storage, vibration)
   Kept separate so the invitation, album and letters work even on phones without 3D.
   ========================================================= */
const DAYS = L(['일', '월', '화', '수', '목', '금', '토'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function weddingDate() { return new Date(window.WEDDING.date); }
const toKST = d => { try { return new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })); } catch { return new Date(d.getTime() + (d.getTimezoneOffset() + 540) * 60000); } };

/* ---------- Clock ----------
   Add #demo to the end of the address and the clock starts on the wedding day, 35 minutes before the ceremony.
   You can also set the time, like #now=2027-05-15T12:55.
   (For judging and testing: preview the wedding-day mode, the current schedule step and the countdown) */
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

/* Before · on · after the wedding day */
export function phase() {
  const k = toKST(weddingDate()), n = toKST(now());
  const diff = Math.round((new Date(k.getFullYear(), k.getMonth(), k.getDate()) - new Date(n.getFullYear(), n.getMonth(), n.getDate())) / 864e5);
  return diff > 0 ? 'before' : diff === 0 ? 'today' : 'after';
}
/* The step happening now on the day (each step lasts until the next one starts; the last one lasts 90 minutes) */
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
  const hh = h % 12 === 0 ? 12 : h % 12;
  return {
    date: L(`${k.getFullYear()}년 ${k.getMonth() + 1}월 ${k.getDate()}일 ${DAYS[k.getDay()]}요일`,
      `${DAYS[k.getDay()]}, ${MONTHS_EN[k.getMonth()]} ${k.getDate()}, ${k.getFullYear()}`),
    time: L(`${h < 12 ? '오전' : '오후'} ${hh}시${m ? ' ' + m + '분' : ''}`, `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`),
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
  if (diff === 0) return L('D-DAY', 'D-Day');
  return `D+${-diff}`;
}

/* Date shown on a letter: 'Today' if it is today, otherwise 'May 3' */
export function shortDate(iso) {
  const d = toKST(new Date(iso));
  if (isNaN(d)) return '';
  const n = toKST(now());
  if (d.toDateString() === n.toDateString()) return L('오늘', 'Today');
  return L(`${d.getMonth() + 1}월 ${d.getDate()}일`, `${MONTHS_EN[d.getMonth()]} ${d.getDate()}`);
}

/* Short vibration (Android only; iPhones quietly ignore it) */
export function buzz(ms = 10) {
  try { navigator.vibrate?.(ms); } catch {}
}

/* ---------- ✉️ Letter storage ----------
   Default: letters a guest writes are saved on that phone (browser) and shown together with letters (samples) from config.js.
   If you put lettersSheet (the Apps Script web app address attached to a Google Sheet) in config.js,
   letters are sent to the sheet and every guest sees the letters collected there. (tools/편지_시트_연결.md)
   - If sending fails, the letter is kept on the phone (pending) and sent again automatically later
   - The list loaded from the sheet is also copied to the phone, so it shows right away even on a slow connection */
const LS_KEY = 'wedding-letters-v2';        // letters I wrote
const LS_REMOTE = 'wedding-letters-remote'; // letters loaded from the sheet (last copy)
const W_ = () => window.WEDDING || {};
export const lettersRemote = () => !!W_().lettersSheet;
const siteId = () => String(W_().lettersSite || 'main');
const lsGet = k => { try { const v = JSON.parse(localStorage.getItem(k) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const uuid = () => (crypto.randomUUID ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));

function savedLetters() { return lsGet(LS_KEY); }
let seedCache = null; // sample letters are built once so their time and id stay fixed (so the garden never plants the same letter twice)
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

/* Call the sheet (Apps Script web app). GET = list, POST = one letter.
   The body is sent as text/plain so the browser sends it right away without a preflight request. */
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

/* Send again the letters that could not be sent */
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

/* Load the letter list from the sheet. Several calls in a short time make only one request. */
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
      // my letters that reached the sheet lose their 'sending' mark
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
  const notYet = mine.filter(l => !sheetIds.has(l.id)); // my letters not in the sheet yet, or still sending
  return [...notYet, ...fromSheet, ...seedLetters()];
}

/* Save a letter. If a sheet is connected it is sent; if that fails it is kept on the phone (pending) and sent later.
   Returns: { ok, letter, sent } */
export async function saveLetter(letter) {
  const l = { id: uuid(), name: letter.name, side: letter.side || '', message: letter.message, time: letter.time || new Date().toISOString() };
  const list = savedLetters();
  list.unshift(lettersRemote() ? { ...l, pending: true } : l);
  lsSet(LS_KEY, list.slice(0, 100));
  if (!lettersRemote()) return { ok: true, letter: l, sent: false };
  // (the sending screen redraws itself and plants the flower, so no update event is sent here)
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

/* config → photo list per theme
   If demoPhotos is on, src becomes 'demo:theme:number' and photoURL() turns it into a drawing. */
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

/* Photo address (a demo photo is drawn on the spot and returned as a data address) */
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

/* Placeholder image shown while a photo is missing */
export function placeholderCanvas(theme, idx, src, w = 600, h = 600, msg = L('사진을 넣어주세요', 'Add a photo here')) {
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
