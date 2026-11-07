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
   하객이 쓴 편지는 그 휴대폰(브라우저)에 저장되고,
   config.js의 letters(샘플 편지)와 합쳐서 보여줍니다. */
const LS_KEY = 'wedding-letters-v2';
function savedLetters() {
  try { const v = JSON.parse(localStorage.getItem(LS_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
}
function seedLetters() {
  const now = Date.now();
  return (window.WEDDING.letters || []).map((l, i) => ({
    name: l.name, side: l.side || '', message: l.message,
    time: l.time || new Date(now - (l.daysAgo ?? i) * 86400000 - (i * 37 % 23) * 60000).toISOString(),
    seed: true,
  }));
}
export function allLetters() {
  const mine = savedLetters().map(l => ({ ...l, mine: true }));
  return [...mine, ...seedLetters()];
}
export function saveLetter(letter) {
  const list = savedLetters();
  list.unshift(letter);
  try { localStorage.setItem(LS_KEY, JSON.stringify(list.slice(0, 100))); } catch {}
  return list;
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
