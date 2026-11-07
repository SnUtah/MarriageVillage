import * as THREE from 'three';
import { toon, textCanvas, canvasTex, roundRect, isMobile, gradientMap } from './util.js';
import { photoThemes, placeholderCanvas, photoURL } from './common.js';

/* =========================================================
   🖼️ 사진 뮤지엄 내부
   - 긴 복도형 갤러리: 사진이 카메라를 바라보는 뒷벽에 걸려 있어서
     세로 화면(휴대폰)에서도 한 장씩 크게 보입니다.
   - 사진은 가까이 갈 때만 불러와서 가볍게 동작합니다.
   ========================================================= */
export const MUSEUM_ORIGIN = new THREE.Vector3(1000, 0, 0);
const WALL_Z = -3.2;           // 뒷벽 위치
const PHOTO_Y = 3.0;           // 사진 중심 높이
const SPACING = 3.5;           // 사진 간격
const MAX_W = 2.7, MAX_H = 2.7;
const TEX_SIZE = isMobile ? 768 : 1024;   // 액자 사진 최대 크기 (메모리 절약)
const LOAD_DIST = 16, UNLOAD_DIST = 34;   // 가까우면 불러오고, 멀어지면 비움

function woodTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  const cols = ['#E7C9A3', '#E1C09A', '#EBD0AD', '#DDBB94'];
  for (let i = 0; i < 8; i++) {
    g.fillStyle = cols[i % 4]; g.fillRect(0, i * 32, 256, 32);
    g.fillStyle = 'rgba(150,110,80,.18)'; g.fillRect(0, i * 32, 256, 2);
    g.fillRect((i * 97) % 256, i * 32, 2, 32);
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function lighten(hex, amt = 0.6) {
  const c = new THREE.Color(hex);
  return c.lerp(new THREE.Color('#FFFFFF'), amt);
}

export function buildMuseum(scene) {
  const W = window.WEDDING;
  const group = new THREE.Group();
  group.position.copy(MUSEUM_ORIGIN);
  group.visible = false;
  scene.add(group);

  const themes = photoThemes();
  const entries = [];       // 사진 액자들
  const headers = [];       // 테마 안내판
  const sections = [];      // 테마 구역 [x0, x1]

  /* ---------- 구역 배치 계산 ---------- */
  let x = 2;
  themes.forEach((t, ti) => {
    const x0 = x;
    const headerX = x0 + 1.6;
    const photos = t.photos.map((p, i) => ({ ...p, x: x0 + 4.4 + i * SPACING }));
    const x1 = x0 + 4.4 + Math.max(0, t.photos.length - 1) * SPACING + 2.2;
    sections.push({ theme: t, ti, x0, x1, headerX });
    headers.push({ theme: t, ti, x: headerX });
    photos.forEach(p => entries.push({ ...p, ti }));
    x = x1 + 1.2;
  });
  const endX = x + 3.5;
  const startX = -9;

  /* ---------- 바닥 · 벽 · 천장 ---------- */
  const len = endX - startX;
  const midX = (startX + endX) / 2;
  const floorTex = woodTexture();
  floorTex.repeat.set(len / 4, 14 / 4);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(len, 16), new THREE.MeshToonMaterial({ map: floorTex, gradientMap }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(midX, 0, 4.6);
  group.add(floor);

  const wallMat = toon('#FFF6EA');
  const wall = new THREE.Mesh(new THREE.BoxGeometry(len, 9, 0.4), wallMat);
  wall.position.set(midX, 4.5, WALL_Z - 0.2);
  group.add(wall);
  for (const ex of [startX, endX]) {
    const side = new THREE.Mesh(new THREE.BoxGeometry(0.4, 9, 16), wallMat);
    side.position.set(ex, 4.5, 4.6);
    group.add(side);
  }
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(len, 16), toon('#FFFDF8'));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(midX, 8.6, 4.6);
  group.add(ceil);
  // 몰딩
  const mold = new THREE.Mesh(new THREE.BoxGeometry(len, 0.18, 0.12), toon('#E2B865'));
  mold.position.set(midX, 5.5, WALL_Z + 0.06);
  group.add(mold);
  const base = new THREE.Mesh(new THREE.BoxGeometry(len, 0.3, 0.1), toon('#C9A27E'));
  base.position.set(midX, 0.15, WALL_Z + 0.05);
  group.add(base);

  /* ---------- 로비: 출구 & 환영 문구 ---------- */
  const doorX = -6.2;
  const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(2.9, 3.9, 0.12), toon('#E2B865'));
  doorFrame.position.set(doorX, 1.95, WALL_Z + 0.06);
  const door = new THREE.Mesh(new THREE.BoxGeometry(2.5, 3.6, 0.1), toon('#9C6B4E'));
  door.position.set(doorX, 1.8, WALL_Z + 0.14);
  const exitSign = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.5), new THREE.MeshBasicMaterial({
    map: canvasTex(textCanvas('🚪 나가는 문', { w: 360, h: 100, size: 46, bg: '#FFFDF8', radius: 50, color: '#4A3B38' })), transparent: true,
  }));
  exitSign.position.set(doorX, 4.3, WALL_Z + 0.08);
  group.add(doorFrame, door, exitSign);

  const welcome = document.createElement('canvas');
  welcome.width = 900; welcome.height = 700;
  {
    const g = welcome.getContext('2d');
    g.fillStyle = '#FFFDF8'; roundRect(g, 0, 0, 900, 700, 40); g.fill();
    g.strokeStyle = '#E2B865'; g.lineWidth = 8; roundRect(g, 20, 20, 860, 660, 30); g.stroke();
    g.textAlign = 'center'; g.fillStyle = '#E88A98';
    g.font = '28px "Gowun Dodum"'; g.fillText('P H O T O   M U S E U M', 450, 110);
    g.fillStyle = '#4A3B38'; g.font = '700 72px "Gowun Batang"';
    g.fillText(W.museum?.title || '우리의 추억 사진관', 450, 210);
    g.font = '36px "Gowun Batang"'; g.fillStyle = '#7C6A66';
    g.fillText(`${W.groom.name} ♥ ${W.bride.name}`, 450, 280);
    g.font = '30px "Gowun Dodum"';
    themes.forEach((t, i) => g.fillText(`${t.emoji}  ${t.title} · ${t.photos.length}장`, 450, 370 + i * 52));
    g.fillStyle = '#C9637A'; g.font = '28px "Gowun Dodum"';
    g.fillText('→ 오른쪽으로 걸어가며 관람해 주세요', 450, 650);
  }
  const wPanel = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.27), new THREE.MeshBasicMaterial({ map: canvasTex(welcome) }));
  wPanel.position.set(-1.6, 3.0, WALL_Z + 0.05);
  group.add(wPanel);

  /* ---------- 테마 구역 꾸미기 ---------- */
  const lampGeo = new THREE.BoxGeometry(0.9, 0.12, 0.35);
  const lampMat = new THREE.MeshBasicMaterial({ color: '#FFF1C9' });
  sections.forEach(s => {
    const t = s.theme, w = s.x1 - s.x0;
    const col = lighten(t.color, 0.55);
    // 벽 하단 색
    const band = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.4), new THREE.MeshToonMaterial({ color: col, gradientMap }));
    band.position.set((s.x0 + s.x1) / 2, 0.7, WALL_Z + 0.02);
    group.add(band);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.5), band.material);
    top.position.set((s.x0 + s.x1) / 2, 6.0, WALL_Z + 0.02);
    group.add(top);
    // 러그
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.6, 3.2), new THREE.MeshToonMaterial({ color: lighten(t.color, 0.3), gradientMap }));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set((s.x0 + s.x1) / 2, 0.01, 0.4);
    group.add(rug);
    // 안내판
    const c = document.createElement('canvas');
    c.width = 560; c.height = 800;
    const g = c.getContext('2d');
    g.fillStyle = t.color; roundRect(g, 0, 0, 560, 800, 36); g.fill();
    g.fillStyle = 'rgba(255,255,255,.9)'; roundRect(g, 24, 24, 512, 752, 26); g.fill();
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '150px serif'; g.fillText(t.emoji || '📷', 280, 190);
    g.fillStyle = '#4A3B38'; g.font = '700 64px "Gowun Batang"'; g.fillText(t.title, 280, 360);
    g.fillStyle = '#7C6A66'; g.font = '30px "Gowun Dodum"';
    wrapText(g, t.subtitle || '', 280, 450, 440, 44);
    g.fillStyle = '#C9637A'; g.font = '28px "Gowun Dodum"'; g.fillText(`사진 ${t.photos.length}장`, 280, 700);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 3.29), new THREE.MeshBasicMaterial({ map: canvasTex(c) }));
    panel.position.set(s.headerX, 3.0, WALL_Z + 0.05);
    group.add(panel);
    // 천장 배너 (멀리서도 보이게)
    const bc = textCanvas([`${t.emoji} ${t.title}`], { w: 640, h: 140, size: 64, bg: t.color, radius: 30, color: '#FFFFFF' });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.7), new THREE.MeshBasicMaterial({ map: canvasTex(bc), transparent: true }));
    banner.position.set(s.headerX + 0.4, 6.9, WALL_Z + 0.1);
    group.add(banner);
    // 관람 의자
    if (s.x1 - s.x0 > 9) {
      const bx = (s.x0 + s.x1) / 2;
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 0.7), toon('#B98A66'));
      seat.position.set(bx, 0.55, 4.3);
      const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.5, 0.6), toon('#8C6B55'));
      leg1.position.set(bx - 1, 0.25, 4.3);
      const leg2 = leg1.clone(); leg2.position.x = bx + 1;
      group.add(seat, leg1, leg2);
    }
  });

  /* ---------- 액자 ---------- */
  const photoGeo = new THREE.PlaneGeometry(1, 1);
  const frameGeo = new THREE.BoxGeometry(1, 1, 0.12);
  const frameMats = [toon('#E2B865'), toon('#FFFFFF'), toon('#B98A66')];
  const idleMat = new THREE.MeshBasicMaterial({ color: '#F3E9DA' });   // 아직 안 불러온 액자 (공용)
  entries.forEach((e, i) => {
    const frame = new THREE.Mesh(frameGeo, frameMats[e.ti % frameMats.length]);
    const photo = new THREE.Mesh(photoGeo, idleMat);
    frame.position.set(e.x, PHOTO_Y, WALL_Z + 0.07);
    photo.position.set(e.x, PHOTO_Y, WALL_Z + 0.135);
    group.add(frame, photo);
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(e.x, 4.9, WALL_Z + 0.25);
    group.add(lamp);
    e.frame = frame; e.photo = photo; e.state = 'idle';
    setSize(e, 2.2, 2.2);
  });

  function setSize(e, w, h) {
    e.photo.scale.set(w, h, 1);
    e.frame.scale.set(w + 0.26, h + 0.26, 1);
  }

  function addPlacard(e) {
    if (e.placard) { e.placard.visible = true; return; }
    const text = `${String(e.idx + 1).padStart(2, '0')}${e.caption ? ' · ' + e.caption : ''}`;
    const c = textCanvas(text.length > 22 ? text.slice(0, 21) + '…' : text, { w: 512, h: 90, size: 34, bg: '#FFFDF8', radius: 12, color: '#4A3B38', font: 'Gowun Dodum' });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.32), new THREE.MeshBasicMaterial({ map: canvasTex(c), transparent: true }));
    const bottom = PHOTO_Y - e.photo.scale.y / 2 - 0.45;
    p.position.set(e.x, bottom, WALL_Z + 0.06);
    group.add(p);
    e.placard = p;
  }
  /* 멀어진 액자는 사진을 비워서 메모리를 아낌 (다시 가까워지면 또 불러옴) */
  function unload(e) {
    if (e.photo.material !== idleMat) { e.photo.material.map?.dispose(); e.photo.material.dispose(); }
    e.photo.material = idleMat;
    e.state = 'idle';
    if (e.placard) e.placard.visible = false;
    setSize(e, 2.2, 2.2);
  }

  /* ---------- 가까울 때만 사진 불러오기 ---------- */
  let loading = 0;
  function load(e) {
    e.state = 'loading';
    loading++;
    const img = new Image();
    img.decoding = 'async';
    // 8초 안에 아무 응답이 없으면 안내 그림으로 (로딩 카운터가 영영 막히지 않도록)
    const timer = setTimeout(() => { if (e.state === 'loading') { img.onload = img.onerror = null; apply(e, placeholderCanvas(e.theme, e.idx, e.src), 1, false); } }, 8000);
    img.onload = () => {
      clearTimeout(timer);
      const s = Math.min(1, TEX_SIZE / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      const g = c.getContext('2d');
      g.drawImage(img, 0, 0, c.width, c.height);
      try {
        g.getImageData(0, 0, 1, 1);
        apply(e, c, img.width / img.height, true);
      } catch {
        // PC에서 index.html을 파일로 직접 열면 브라우저 보안 때문에 3D 액자에 사진을 못 그림
        // → 액자에는 안내를 띄우고, '크게 보기'에서는 사진이 정상으로 보임
        const w = 600, h = Math.round(600 / (img.width / img.height));
        apply(e, placeholderCanvas(e.theme, e.idx, '(파일로 열었을 때만 보이는 안내)', w, h, '🔍 크게 보기를 눌러 확인하세요'), img.width / img.height, true);
      }
    };
    img.onerror = () => { clearTimeout(timer); apply(e, placeholderCanvas(e.theme, e.idx, e.src), 1, false); };
    img.src = photoURL(e);
  }
  function apply(e, canvas, aspect, ok) {
    loading--;
    e.state = 'done';
    e.ok = ok;
    if (e.photo.material !== idleMat) e.photo.material.dispose();
    e.photo.material = new THREE.MeshBasicMaterial({ map: canvasTex(canvas) });
    let w = MAX_W, h = MAX_W / aspect;
    if (h > MAX_H) { h = MAX_H; w = MAX_H * aspect; }
    setSize(e, w, h);
    addPlacard(e);
  }

  /* ---------- 공개 함수 ---------- */
  const O = MUSEUM_ORIGIN;
  const spawn = new THREE.Vector3(O.x + doorX, 0, 1.2);
  return {
    group, themes, sections, entries, spawn,
    themeStart(ti) { const s = sections[ti]; return new THREE.Vector3(O.x + s.headerX + 1.2, 0, 1.2); },
    clamp(p) {
      p.x = Math.min(O.x + endX - 0.8, Math.max(O.x + startX + 0.8, p.x));
      p.z = Math.min(O.z + 3.2, Math.max(O.z + WALL_Z + 1.0, p.z));
    },
    currentTheme(p) {
      const lx = p.x - O.x;
      const s = sections.find(s => lx >= s.x0 - 0.6 && lx <= s.x1 + 0.6);
      return s ? s.ti : -1;
    },
    nearest(p) {
      const lx = p.x - O.x;
      if (Math.abs(lx - doorX) < 1.8) return { type: 'exit', emoji: '🚪', action: '밖으로 나가기' };
      if (Math.abs(lx - (-1.6)) < 2) return { type: 'welcome', emoji: '📚', action: '전체 앨범 보기' };
      const h = headers.find(h => Math.abs(lx - h.x) < 1.3);
      if (h) return { type: 'header', ti: h.ti, emoji: h.theme.emoji || '📚', action: `${h.theme.title} 앨범` };
      let best = null, bd = 1.75;
      for (const e of entries) {
        const d = Math.abs(lx - e.x);
        if (d < bd) { bd = d; best = e; }
      }
      if (best) return { type: 'photo', entry: best, ti: best.ti, idx: best.idx, emoji: '🔍', action: '크게 보기' };
      return null;
    },
    update(dt, t, p) {
      const lx = p.x - O.x;
      for (const e of entries) {
        const d = Math.abs(lx - e.x);
        if (e.state === 'idle' && d < LOAD_DIST && loading < 3) load(e);
        else if (e.state === 'done' && d > UNLOAD_DIST) unload(e);
      }
    },
  };
}

function wrapText(g, text, x, y, maxW, lh) {
  const words = text.split(' ');
  let line = '', yy = y;
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > maxW && line) { g.fillText(line, x, yy); line = w; yy += lh; }
    else line = test;
  }
  if (line) g.fillText(line, x, yy);
}
