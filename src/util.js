import * as THREE from 'three';

export const isMobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad/i.test(navigator.userAgent);
/* 움직임을 줄여 달라는 설정 (휴대폰 접근성 설정 또는 메뉴의 '효과 줄이기') */
export const reduceMotion = (() => {
  try { return matchMedia('(prefers-reduced-motion: reduce)').matches || localStorage.getItem('wedding-lite') === '1'; } catch { return false; }
})();

/* ---------- 툰 재질 (부드러운 3단 음영) ---------- */
export const gradientMap = (() => {
  const data = new Uint8Array([150, 150, 150, 255, 215, 215, 215, 255, 255, 255, 255, 255]);
  const tex = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
})();

const matCache = new Map();
export function toon(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!opts.unique && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshToonMaterial({ color, gradientMap, ...opts });
  delete m.unique;
  if (!opts.unique) matCache.set(key, m);
  return m;
}

/* ---------- 그림자 설정 ---------- */
export function shadow(obj, cast = true, receive = true) {
  obj.traverse(o => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return obj;
}

export function mesh(geo, color, x = 0, y = 0, z = 0, opts) {
  const m = new THREE.Mesh(geo, typeof color === 'string' || typeof color === 'number' ? toon(color, opts) : color);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

/* ---------- 캔버스로 글자 텍스처 ---------- */
export function textCanvas(lines, {
  w = 512, h = 256, bg = '#FFFDF8', color = '#4A3B38', font = 'Gowun Batang', size = 56,
  radius = 40, border = null, sub = null, subSize = 30,
} = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  if (bg) {
    g.fillStyle = bg;
    roundRect(g, 0, 0, w, h, radius); g.fill();
    if (border) { g.lineWidth = 10; g.strokeStyle = border; roundRect(g, 5, 5, w - 10, h - 10, radius - 4); g.stroke(); }
  }
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  const arr = Array.isArray(lines) ? lines : [lines];
  const total = arr.length * size * 1.25 + (sub ? subSize * 1.5 : 0);
  let y = h / 2 - total / 2 + size * 0.62;
  g.font = `700 ${size}px "${font}", serif`;
  for (const l of arr) { g.fillText(l, w / 2, y); y += size * 1.25; }
  if (sub) { g.font = `${subSize}px "Gowun Dodum", sans-serif`; g.globalAlpha = .7; g.fillText(sub, w / 2, y + subSize * 0.2); }
  return c;
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

export function canvasTex(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/* ---------- 머리 위에 떠 있는 이름표 (긴 글은 자동으로 작게) ---------- */
export function labelSprite(text, { scale = 4.2, bg = 'rgba(255,253,248,.95)', color = '#4A3B38' } = {}) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  let size = 54;
  g.font = `700 ${size}px "Gowun Dodum", sans-serif`;
  while (g.measureText(text).width > 430 && size > 32) { size -= 2; g.font = `700 ${size}px "Gowun Dodum", sans-serif`; }
  const tw = Math.min(490, g.measureText(text).width + 70);
  g.fillStyle = bg; g.shadowColor = 'rgba(120,80,60,.25)'; g.shadowBlur = 12; g.shadowOffsetY = 4;
  roundRect(g, (512 - tw) / 2, 18, tw, 86, 43); g.fill();
  g.shadowColor = 'transparent';
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 256, 63);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(c), depthWrite: false, transparent: true }));
  sp.scale.set(scale, scale / 4, 1);
  sp.renderOrder = 10;
  return sp;
}

/* ---------- 날짜 도우미 (common.js에 있음) ---------- */
export { weddingDate, formatKDate, dday } from './common.js';

export const rand = (a, b) => a + Math.random() * (b - a);
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
