import * as THREE from 'three';
import { toon, mesh, textCanvas, canvasTex, labelSprite, formatKDate, rand, clamp } from './util.js';
import { createCharacter } from './character.js';
import { throwSprite } from './world.js';

/* =========================================================
   상호작용 오브젝트 & 건물
   ========================================================= */
export const MUSEUM_DOOR = { x: 20, z: -8.4, r: 1.7 };
export const BED = { x: 8.2, z: 25.5, r: 1.8 };   // 💌 편지 꽃밭 (우체통 옆)
const DEFAULT_COUPLE_LINES = ['와주셔서 정말 감사해요 💐', '식사 꼭 하고 가세요!', '분수에 동전 던져 보셨어요?', '사진관도 들러 주세요 🖼️', '편지 남겨 주시면 꼭 읽을게요 💌', '오늘 정말 행복해요 🥰'];

export function buildProps(scene) {
  const W = window.WEDDING;
  const group = new THREE.Group();
  scene.add(group);
  const colliders = [], boxes = [], interactables = [], updaters = [];

  function addInteract(id, text, emoji, action, x, z, r, labelY = 3.4) {
    const label = labelSprite(`${emoji} ${text}`);
    label.position.set(x, labelY, z);
    group.add(label);
    const it = { id, text, emoji, action, pos: new THREE.Vector3(x, 0, z), r, label, baseY: labelY, off: Math.random() * 6 };
    interactables.push(it);
    return it;
  }
  const facePlane = (canvas, w, h) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: canvasTex(canvas), transparent: true }));

  const { date } = formatKDate();
  const shortDate = W.date.slice(0, 10).replace(/-/g, '. ');

  /* ---------- 💌 청첩장 (이젤) ---------- */
  {
    const g = new THREE.Group();
    const wood = '#B98A66';
    const l1 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, -0.8, 1.45, 0.1); l1.rotation.z = 0.12;
    const l2 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, 0.8, 1.45, 0.1); l2.rotation.z = -0.12;
    const l3 = mesh(new THREE.BoxGeometry(0.1, 3, 0.1), wood, 0, 1.4, -0.45); l3.rotation.x = -0.3;
    const shelf = mesh(new THREE.BoxGeometry(1.9, 0.08, 0.25), wood, 0, 0.75, 0.2);
    const board = mesh(new THREE.BoxGeometry(1.9, 2.5, 0.06), '#FFFDF8', 0, 2.05, 0.2);
    board.rotation.x = -0.08;
    const cv = textCanvas(['Wedding', 'Invitation'], {
      w: 512, h: 680, size: 64, bg: '#FFFDF8', border: '#E2B865', radius: 24, color: '#C9637A',
      sub: `${W.groom.name} ♥ ${W.bride.name}`, subSize: 40,
    });
    const g2 = cv.getContext('2d');
    g2.fillStyle = '#7C6A66'; g2.font = '30px "Gowun Dodum"'; g2.textAlign = 'center';
    g2.fillText(shortDate, 256, 590);
    g2.font = '80px serif'; g2.fillText('💌', 256, 130);
    const face = facePlane(cv, 1.75, 2.33);
    face.position.set(0, 2.05, 0.235);
    face.rotation.x = -0.08;
    g.add(l1, l2, l3, shelf, board, face);
    g.position.set(-4.8, 0, 24);
    g.rotation.y = 0.35;
    group.add(g);
    colliders.push({ x: -4.8, z: 24, r: 1 });
    addInteract('invitation', '청첩장', '💌', '청첩장 보기', -4.8, 24, 3, 3.8);
  }

  /* ---------- ✉️ 편지함 (빨간 우체통) ---------- */
  {
    const g = new THREE.Group();
    const red = '#E4605A';
    g.add(mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.5, 10), '#8C6B55', 0, 0.25, 0));
    const body = mesh(new THREE.BoxGeometry(1, 1.3, 0.8), red, 0, 1.15, 0);
    const dome = mesh(new THREE.CylinderGeometry(0.4, 0.4, 1, 20, 1, false, 0, Math.PI), red, 0, 1.8, 0);
    dome.rotation.z = Math.PI / 2;
    const slot = mesh(new THREE.BoxGeometry(0.6, 0.06, 0.05), '#4A2B28', 0, 1.55, 0.41);
    const sign = facePlane(textCanvas('편지함', { w: 256, h: 128, size: 58, bg: '#FFFDF8', radius: 24, color: '#C9637A' }), 0.7, 0.35);
    sign.position.set(0, 1.1, 0.41);
    // 튀어나온 편지들
    const letters = [];
    for (let i = 0; i < 3; i++) {
      const l = mesh(new THREE.BoxGeometry(0.4, 0.28, 0.02), i === 1 ? '#FFF3EA' : '#FFFFFF', 0, 2.4, 0);
      g.add(l);
      letters.push({ l, off: i * 2.1 });
    }
    g.add(body, dome, slot, sign);
    g.position.set(4.8, 0, 23);
    g.rotation.y = -0.4;
    group.add(g);
    updaters.push(t => letters.forEach(({ l, off }) => {
      const k = ((t * 0.35 + off / 6.3) % 1);
      l.position.set(Math.sin(k * 6 + off) * 0.5, 2 + k * 1.6, Math.cos(k * 5) * 0.3);
      l.rotation.set(k * 3, k * 5 + off, 0.3);
      l.visible = k < 0.95;
    }));
    colliders.push({ x: 4.8, z: 23, r: 0.8 });
    addInteract('mailbox', '편지함', '✉️', '축하 편지 쓰기', 4.8, 23, 2.8, 4.1);
  }

  /* ---------- 🌷 편지 꽃밭: 편지 한 통 = 꽃 한 송이 ---------- */
  const bed = new THREE.Group();
  group.add(bed);
  const flowers = [];
  {
    bed.add(mesh(new THREE.CylinderGeometry(BED.r + 0.3, BED.r + 0.4, 0.18, 28), '#B98A66', BED.x, 0.09, BED.z));
    bed.add(mesh(new THREE.CylinderGeometry(BED.r + 0.05, BED.r + 0.05, 0.22, 28), '#7A5A44', BED.x, 0.1, BED.z));
    const post = mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.1, 6), '#A47A5C', BED.x, 0.55, BED.z + BED.r + 0.5);
    const sign = facePlane(textCanvas('편지 꽃밭', { w: 360, h: 110, size: 50, bg: '#FFFDF8', radius: 26, color: '#C9637A' }), 1.3, 0.4);
    sign.position.set(BED.x, 1.15, BED.z + BED.r + 0.55);
    const back = sign.clone(); back.rotation.y = Math.PI; back.position.z -= 0.02;
    bed.add(post, sign, back);
    colliders.push({ x: BED.x, z: BED.z, r: BED.r + 0.5 });
  }
  const stemGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6), petalGeo = new THREE.IcosahedronGeometry(0.16, 0), coreGeo = new THREE.SphereGeometry(0.06, 8, 6);
  const hash = s => { let h = 7; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; };
  function plantFlower(letter, animate) {
    if (flowers.length >= 60) return null;
    const h = hash(`${letter.name}|${letter.time || ''}|${flowers.length}`);
    const a = (h % 360) / 360 * Math.PI * 2, r = 0.25 + ((h >> 9) % 100) / 100 * (BED.r - 0.55);
    const x = BED.x + Math.cos(a) * r, z = BED.z + Math.sin(a) * r;
    const g = new THREE.Group();
    g.add(mesh(stemGeo, '#8DC175', 0, 0.45, 0));
    g.add(mesh(petalGeo, letter.side === '신부측' ? '#F4B8C0' : '#8FB8DE', 0, 0.75, 0));
    g.add(mesh(coreGeo, '#F7D58B', 0, 0.75, 0.13));
    if (flowers.length < 24) {
      const name = String(letter.name || '').slice(0, 8);
      const l = labelSprite(name, { scale: 1.5, bg: 'rgba(255,253,248,.85)' });
      l.position.y = 1.12;
      g.add(l);
    }
    g.position.set(x, 0, z);
    g.rotation.y = a;
    bed.add(g);
    flowers.push(g);
    if (animate) {
      let k = 0;
      g.scale.setScalar(0.01);
      updaters.push((t, dt) => { if (k >= 1) return; k = Math.min(1, k + dt / 0.7); const s = 1 - Math.pow(1 - k, 3); g.scale.setScalar(s); });
    }
    return new THREE.Vector3(x, 0, z);
  }

  /* ---------- 🗺️ 오시는 길 (이정표) ---------- */
  {
    const g = new THREE.Group();
    g.add(mesh(new THREE.CylinderGeometry(0.1, 0.12, 3.2, 8), '#A47A5C', 0, 1.6, 0));
    const signs = [['오시는 길', '#FFFDF8', 0.4], ['예식장 →', '#F4B8C0', -0.5], ['주차 안내', '#F7D58B', 0.9]];
    signs.forEach(([t, bg, rot], i) => {
      const s = new THREE.Group();
      const board = mesh(new THREE.BoxGeometry(1.5, 0.42, 0.08), bg, 0.55, 0, 0);
      const tip = mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.08, 3), bg, 1.35, 0, 0);
      tip.rotation.x = Math.PI / 2; tip.rotation.y = Math.PI / 2;
      const txt = facePlane(textCanvas(t, { w: 384, h: 110, size: 56, bg: null }), 1.4, 0.4);
      txt.position.set(0.55, 0, 0.05);
      const back = txt.clone(); back.rotation.y = Math.PI; back.position.z = -0.05;
      s.add(board, tip, txt, back);
      s.position.y = 2.8 - i * 0.55;
      s.rotation.y = rot;
      g.add(s);
    });
    g.position.set(-3.6, 0, 13.5);
    group.add(g);
    colliders.push({ x: -3.6, z: 13.5, r: 0.4 });
    addInteract('directions', '오시는 길', '🗺️', '오시는 길 보기', -3.6, 13.5, 2.6, 3.9);
  }

  /* ---------- 🎁 마음 전하실 곳 (선물상자) ---------- */
  {
    const g = new THREE.Group();
    const gift = (s, col, rib, x, z, ry) => {
      const b = new THREE.Group();
      b.add(mesh(new THREE.BoxGeometry(s, s, s), col, 0, s / 2, 0));
      b.add(mesh(new THREE.BoxGeometry(s * 1.02, s * 1.02, s * 0.16), rib, 0, s / 2, 0));
      b.add(mesh(new THREE.BoxGeometry(s * 0.16, s * 1.02, s * 1.02), rib, 0, s / 2, 0));
      const bowGeo = new THREE.TorusGeometry(s * 0.18, s * 0.06, 8, 16);
      const b1 = mesh(bowGeo, rib, -s * 0.15, s + s * 0.12, 0); b1.rotation.set(0, Math.PI / 2, 0.6);
      const b2 = mesh(bowGeo, rib, s * 0.15, s + s * 0.12, 0); b2.rotation.set(0, Math.PI / 2, -0.6);
      b.add(b1, b2);
      b.position.set(x, 0, z); b.rotation.y = ry;
      return b;
    };
    g.add(gift(1.5, '#F4B8C0', '#FFFFFF', 0, 0, 0.3));
    g.add(gift(0.7, '#F7D58B', '#E88A98', 1.2, 0.6, -0.4));
    g.add(gift(0.55, '#BFE3F5', '#FFFFFF', -1.0, 0.8, 0.6));
    g.position.set(-13.5, 0, 2);
    group.add(g);
    colliders.push({ x: -13.5, z: 2, r: 1.5 });
    addInteract('gift', '마음 전하실 곳', '🎁', '계좌번호 보기', -13.5, 2, 3, 3.3);
  }

  /* ---------- 🕰️ 오늘의 식순 (칠판) ---------- */
  {
    const g = new THREE.Group();
    const wood = '#B98A66';
    for (const sx of [-0.75, 0.75]) g.add(mesh(new THREE.BoxGeometry(0.1, 2.8, 0.1), wood, sx, 1.4, 0));
    g.add(mesh(new THREE.BoxGeometry(1.8, 2.1, 0.1), wood, 0, 1.9, 0));
    const c = document.createElement('canvas');
    c.width = 480; c.height = 560;
    const x = c.getContext('2d');
    x.fillStyle = '#5E7D6A'; x.fillRect(0, 0, 480, 560);
    x.fillStyle = '#FFF8E7'; x.textAlign = 'center';
    x.font = '700 50px "Gowun Batang"'; x.fillText('오늘의 식순', 240, 70);
    x.font = '30px "Gowun Dodum"';
    (W.schedule || []).slice(0, 6).forEach((s, i) => {
      x.textAlign = 'left';
      x.fillStyle = '#F7D58B'; x.fillText(s.time, 40, 150 + i * 70);
      x.fillStyle = '#FFF8E7'; x.fillText(s.title, 150, 150 + i * 70);
    });
    const face = facePlane(c, 1.62, 1.9);
    face.position.set(0, 1.9, 0.06);
    g.add(face);
    g.position.set(11, 0, 9.8);
    g.rotation.y = -0.5;
    group.add(g);
    colliders.push({ x: 11, z: 9.8, r: 1 });
    addInteract('schedule', '오늘의 식순', '🕰️', '식순 보기', 11, 9.8, 2.8, 3.6);
  }

  /* ---------- ❓ 퀴즈 부스 ---------- */
  {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(2.4, 1.1, 1), '#FFF3EA', 0, 0.55, 0));
    g.add(mesh(new THREE.BoxGeometry(2.5, 0.1, 1.1), '#E2B865', 0, 1.12, 0));
    for (const sx of [-1.1, 1.1]) g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 8), '#FFFFFF', sx, 2.2, -0.4));
    const stripes = 8;
    for (let i = 0; i < stripes; i++) {
      const s = mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.5, 3, 1, false, Math.PI / 2 + (i / stripes) * Math.PI, Math.PI / stripes), i % 2 ? '#FFFFFF' : '#F4B8C0', 0, 3.3, -0.4);
      s.rotation.x = Math.PI / 2; s.scale.set(1, 1, 0.5);
      g.add(s);
    }
    const q = facePlane(textCanvas('?', { w: 256, h: 256, size: 190, bg: '#F7D58B', radius: 128, color: '#FFFFFF' }), 0.9, 0.9);
    q.position.set(0, 0.6, 0.51);
    g.add(q);
    g.position.set(-19.5, 0, -11.5);
    g.rotation.y = 0.6;
    group.add(g);
    colliders.push({ x: -19.5, z: -11.5, r: 1.5 });
    addInteract('quiz', '신랑신부 퀴즈', '❓', '퀴즈 풀기', -19.5, -11.5, 3.2, 4.4);
  }

  /* ---------- ⛲ 분수대 (동전이 쌓여요) ---------- */
  let fountain;
  {
    const g = new THREE.Group();
    const stone = '#F3E9DA';
    g.add(mesh(new THREE.CylinderGeometry(2.9, 3.1, 0.6, 32), stone, 0, 0.3, 0));
    const water = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), new THREE.MeshToonMaterial({ color: '#8FD3F0', transparent: true, opacity: 0.85 }));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.58;
    g.add(water);
    g.add(mesh(new THREE.CylinderGeometry(0.3, 0.4, 1.6, 12), stone, 0, 1.2, 0));
    g.add(mesh(new THREE.CylinderGeometry(1.2, 0.5, 0.35, 24), stone, 0, 2.0, 0));
    const w2 = new THREE.Mesh(new THREE.CircleGeometry(1.05, 24), water.material);
    w2.rotation.x = -Math.PI / 2; w2.position.y = 2.17;
    g.add(w2);
    // 하트 조형
    const hs = new THREE.Shape();
    hs.moveTo(0, -0.35); hs.bezierCurveTo(-0.6, 0.05, -0.35, 0.5, 0, 0.25); hs.bezierCurveTo(0.35, 0.5, 0.6, 0.05, 0, -0.35);
    const heart = mesh(new THREE.ExtrudeGeometry(hs, { depth: 0.15, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 }), '#F4B8C0', 0, 2.75, -0.07);
    g.add(heart);
    // 물줄기
    const n = 90, pos = new Float32Array(n * 3), seeds = [];
    for (let i = 0; i < n; i++) seeds.push([Math.random() * Math.PI * 2, Math.random()]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const drops = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#E8F7FF', size: 0.12, transparent: true, opacity: 0.9 }));
    g.add(drops);
    // 물속 동전
    const coins = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.09, 0.09, 0.02, 12), toon('#E2B865'), 40);
    coins.count = 0;
    g.add(coins);
    // 물결
    const ripple = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.32, 28), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0, depthWrite: false }));
    ripple.rotation.x = -Math.PI / 2; ripple.position.y = 0.6;
    g.add(ripple);
    let rippleT = 0;
    g.position.set(0, 0, 4);
    group.add(g);
    updaters.push((t, dt) => {
      heart.rotation.y = t * 0.8;
      for (let i = 0; i < n; i++) {
        const [a, s] = seeds[i];
        const k = (t * 0.6 + s) % 1;
        const r = 0.3 + k * 1.3;
        pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 2] = Math.sin(a) * r;
        pos[i * 3 + 1] = 2.2 + Math.sin(k * Math.PI) * 0.8 - k * 1.5;
      }
      geo.attributes.position.needsUpdate = true;
      if (rippleT > 0) { rippleT -= dt / 0.7; const k = 1 - Math.max(0, rippleT); ripple.scale.setScalar(1 + k * 6); ripple.material.opacity = Math.max(0, rippleT); }
    });
    colliders.push({ x: 0, z: 4, r: 3.2 });
    addInteract('fountain', '소원 분수', '🪙', '동전 던지기', 0, 4, 4.2, 4.3);
    fountain = {
      /* 플레이어 손에서 분수 가운데로 동전이 날아가요 */
      toss(scene, from, onLand) {
        throwSprite(scene, from, new THREE.Vector3(0, 2.25, 4), '🪙', 0.75, () => { rippleT = 1; onLand?.(); });
      },
      setCoins(k) {
        k = Math.max(0, Math.min(40, k | 0));
        const m = new THREE.Matrix4();
        for (let i = 0; i < k; i++) {
          const a = i * 2.39996, r = 0.55 + ((i * 0.37) % 1) * 1.85;
          m.makeRotationY(a);
          m.setPosition(Math.cos(a) * r, 0.6, Math.sin(a) * r);
          coins.setMatrixAt(i, m);
        }
        coins.count = k;
        coins.instanceMatrix.needsUpdate = true;
      },
    };
  }

  /* ---------- 💒 버진로드, 의자, 웨딩 아치, 신랑신부 ---------- */
  {
    const g = new THREE.Group();
    const carpet = mesh(new THREE.BoxGeometry(1.6, 0.03, 14.5), '#FFFFFF', 0, 0.04, -11);
    const edgeL = mesh(new THREE.BoxGeometry(0.1, 0.035, 14.5), '#F4B8C0', -0.8, 0.045, -11);
    const edgeR = edgeL.clone(); edgeR.position.x = 0.8;
    g.add(carpet, edgeL, edgeR);
    // 의자
    const chair = (x, z, bow) => {
      const c = new THREE.Group();
      c.add(mesh(new THREE.BoxGeometry(0.62, 0.08, 0.6), '#FFFFFF', 0, 0.5, 0));
      c.add(mesh(new THREE.BoxGeometry(0.62, 0.6, 0.07), '#FFFFFF', 0, 0.85, 0.28));
      c.add(mesh(new THREE.BoxGeometry(0.56, 0.48, 0.05), '#F3E9DA', 0, 0.24, -0.26));
      c.add(mesh(new THREE.BoxGeometry(0.56, 0.48, 0.05), '#F3E9DA', 0, 0.24, 0.26));
      if (bow) {
        const b = mesh(new THREE.SphereGeometry(0.12, 8, 6), '#F4B8C0', x > 0 ? -0.32 : 0.32, 0.95, 0.3);
        b.scale.set(0.5, 1, 1.3);
        c.add(b);
      }
      c.position.set(x, 0, z);
      return c;
    };
    for (const z of [-6.8, -8.8, -10.8, -12.8]) {
      for (const s of [-1, 1]) {
        for (let k = 0; k < 3; k++) g.add(chair(s * (1.7 + k * 0.95), z, k === 0));
      }
    }
    boxes.push({ minX: 1.3, maxX: 4.4, minZ: -13.3, maxZ: -6.3 }, { minX: -4.4, maxX: -1.3, minZ: -13.3, maxZ: -6.3 });

    // 단상
    g.add(mesh(new THREE.CylinderGeometry(3.2, 3.3, 0.16, 36), '#FFFDF8', 0, 0.08, -19.5));
    // 아치
    const archMat = toon('#FFFFFF');
    for (const s of [-1, 1]) g.add(mesh(new THREE.CylinderGeometry(0.14, 0.16, 3.2, 10), archMat, s * 2.2, 1.6, -19.5));
    const arc = mesh(new THREE.TorusGeometry(2.2, 0.14, 10, 40, Math.PI), archMat, 0, 3.2, -19.5);
    g.add(arc);
    const fcols = ['#F4B8C0', '#FFFFFF', '#F9C59E', '#E88A98', '#FFE3EA', '#F7D58B'];
    const fGeo = new THREE.IcosahedronGeometry(0.2, 1);
    for (let i = 0; i < 44; i++) {
      const a = (i / 43) * Math.PI;
      const r = 2.2 + rand(-0.12, 0.12);
      const f = mesh(fGeo, fcols[i % fcols.length], Math.cos(a) * r, 3.2 + Math.sin(a) * r, -19.5 + rand(-0.2, 0.2));
      f.scale.setScalar(rand(0.8, 1.5));
      g.add(f);
      if (i % 3 === 0) {
        const leaf = mesh(fGeo, '#9CC08A', f.position.x * 1.05, f.position.y + rand(-0.2, 0.1), f.position.z + 0.1);
        leaf.scale.set(0.9, 0.5, 0.9);
        g.add(leaf);
      }
    }
    for (let i = 0; i < 16; i++) {
      const s = i < 8 ? -1 : 1;
      const f = mesh(fGeo, fcols[i % fcols.length], s * 2.2 + rand(-0.2, 0.2), rand(0.3, 1.8), -19.5 + rand(-0.25, 0.25));
      f.scale.setScalar(rand(0.9, 1.4));
      g.add(f);
    }
    // 커튼
    const drapeMat = new THREE.MeshToonMaterial({ color: '#FFE3EA', transparent: true, opacity: 0.75, side: THREE.DoubleSide });
    for (const s of [-1, 1]) {
      const d = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 3.6, 1, 8), drapeMat);
      const p = d.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getY(i) * 3 + p.getX(i) * 4) * 0.08);
      d.position.set(s * 2.6, 2.4, -19.4);
      d.rotation.z = s * 0.1;
      g.add(d);
    }
    // 뒤쪽 꽃 울타리
    for (let i = 0; i < 9; i++) {
      const hx = -6 + i * 1.5;
      const h = mesh(new THREE.IcosahedronGeometry(0.9, 1), '#8CC47A', hx, 0.8, -22.3);
      h.scale.set(1, 1.1, 0.8);
      g.add(h);
      g.add(mesh(new THREE.IcosahedronGeometry(0.18, 0), fcols[i % fcols.length], hx + 0.3, 1.4, -21.6));
    }
    group.add(g);
    colliders.push({ x: -2.2, z: -19.5, r: 0.45 }, { x: 2.2, z: -19.5, r: 0.45 });
    boxes.push({ minX: -7, maxX: 7, minZ: -23.5, maxZ: -21.5 });
  }
  const groom = createCharacter({ type: 'groom', hair: '#3A2A24' });
  groom.root.position.set(-0.75, 0.16, -19.6);
  const bride = createCharacter({ type: 'bride', hair: '#5A3A2A' });
  bride.root.position.set(0.75, 0.16, -19.6);
  groom.root.rotation.y = 0.15; bride.root.rotation.y = -0.15;
  group.add(groom.root, bride.root);
  colliders.push({ x: 0, z: -19.6, r: 1.4 });
  const coupleIt = addInteract('couple', '신랑 · 신부', '💐', '인사 나누기', 0, -18.6, 3.4, 3.2);
  coupleIt.npcs = [groom, bride];

  /* 신랑신부가 다가오는 하객을 바라보고 말을 걸어요 */
  const coupleLines = Array.isArray(W.coupleLines) && W.coupleLines.length ? W.coupleLines : DEFAULT_COUPLE_LINES;
  const coupleBubbles = new Map();
  let sayT = 4, sayIdx = Math.floor(Math.random() * coupleLines.length), bub = null, bubT = 0;
  function coupleUpdate(dt, playerPos) {
    const d = Math.hypot(playerPos.x, playerPos.z + 19.6);
    for (const n of [groom, bride]) {
      const want = d < 7 ? clamp(Math.atan2(playerPos.x - n.root.position.x, playerPos.z - n.root.position.z) - n.root.rotation.y, -0.9, 0.9) : 0;
      n.head.rotation.y += (want - n.head.rotation.y) * Math.min(1, dt * 4);
    }
    sayT -= dt;
    if (d < 4.5 && sayT <= 0 && !bub) {
      const line = coupleLines[sayIdx++ % coupleLines.length];
      if (!coupleBubbles.has(line)) { const sp = labelSprite(line, { scale: 4 }); sp.position.set(0, 4.05, -19.3); sp.visible = false; group.add(sp); coupleBubbles.set(line, sp); }
      bub = coupleBubbles.get(line); bub.visible = true; bubT = 2.8;
      (Math.random() < 0.5 ? groom : bride).wave(1.6);
      sayT = 8 + rand(0, 5);
    }
    if (bub) { bubT -= dt; if (bubT <= 0) { bub.visible = false; bub = null; } }
  }

  /* ---------- 📸 포토존 ---------- */
  {
    const g = new THREE.Group();
    const gold = '#E2B865';
    const fw = 3.2, fh = 2.4, t = 0.16, y0 = 0.9;
    g.add(mesh(new THREE.BoxGeometry(fw + t, t, t), gold, 0, y0 + fh, 0));
    g.add(mesh(new THREE.BoxGeometry(fw + t, t, t), gold, 0, y0, 0));
    for (const s of [-1, 1]) {
      g.add(mesh(new THREE.BoxGeometry(t, fh, t), gold, s * fw / 2, y0 + fh / 2, 0));
      g.add(mesh(new THREE.BoxGeometry(t, y0, t), gold, s * fw / 2, y0 / 2, 0));
    }
    const sign = facePlane(textCanvas('PHOTO ZONE', { w: 512, h: 110, size: 60, bg: '#FFFDF8', radius: 55, color: '#C9637A' }), 2, 0.43);
    sign.position.set(0, y0 + fh + 0.4, 0.05);
    g.add(sign);
    const fcols = ['#F4B8C0', '#FFFFFF', '#F9C59E', '#E88A98'];
    for (let i = 0; i < 18; i++) {
      const f = mesh(new THREE.IcosahedronGeometry(0.16, 1), fcols[i % 4], -fw / 2 + rand(-0.15, 0.3), y0 + rand(0, 1.1), rand(-0.1, 0.15));
      g.add(f);
    }
    g.position.set(-11, 0, 19);
    g.rotation.y = 0.5;
    group.add(g);
    const ang = 0.5;
    for (const s of [-1, 1]) colliders.push({ x: -11 + Math.cos(ang) * s * fw / 2, z: 19 - Math.sin(ang) * s * fw / 2, r: 0.3 });
    addInteract('photozone', '포토존', '📸', '기념사진 찍기', -11, 19, 3, 4.6);
  }

  /* ---------- 축하 화환 ---------- */
  const wreath = (x, z, text) => {
    const g = new THREE.Group();
    for (const s of [-0.4, 0.4]) {
      const leg = mesh(new THREE.CylinderGeometry(0.04, 0.04, 2, 6), '#B98A66', s, 1, 0);
      leg.rotation.z = -s * 0.2;
      g.add(leg);
    }
    const cols = ['#FFFFFF', '#F4B8C0', '#F7D58B', '#FFE3EA'];
    const fg = new THREE.IcosahedronGeometry(0.17, 1);
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      g.add(mesh(fg, cols[i % 4], Math.cos(a) * 0.62, 2.3 + Math.sin(a) * 0.62, 0));
    }
    const rib = facePlane(textCanvas(text.split(''), { w: 96, h: 420, size: 64, bg: '#FFFFFF', radius: 10, color: '#C9637A', font: 'Gowun Batang' }), 0.22, 0.95);
    rib.position.set(0.25, 1.65, 0.12);
    g.add(rib);
    g.position.set(x, 0, z);
    g.rotation.y = x < 0 ? 0.4 : -0.4;
    group.add(g);
    colliders.push({ x, z, r: 0.6 });
  };
  wreath(-3.4, 32, '축결혼');
  wreath(3.4, 32, '축결혼');
  wreath(15.2, -9, '축결혼');

  /* ---------- 🏛️ 뮤지엄 ---------- */
  buildMuseumExterior(group, colliders, boxes, updaters);
  addInteract('museum', W.museum?.title || '추억 사진관', '🖼️', '사진관 입장', MUSEUM_DOOR.x, MUSEUM_DOOR.z, 2.6, 8.4);

  function update(dt, t, playerPos) {
    updaters.forEach(u => u(t, dt));
    interactables.forEach(it => { it.label.position.y = it.baseY + Math.sin(t * 2 + it.off) * 0.12; });
    [groom, bride].forEach(n => n.animate(dt, 0, t));
    if (playerPos) coupleUpdate(dt, playerPos);
  }
  return { group, colliders, boxes, interactables, update, npcs: [groom, bride], plantFlower, fountain, bed: BED };
}

function buildMuseumExterior(group, colliders, boxes, updaters) {
  const W = window.WEDDING;
  const g = new THREE.Group();
  const cx = 20, front = -10.2; // 정면 벽 z
  const cream = '#FFF6EA', white = '#FFFDF8', rose = '#E9B4A8';
  // 기단
  g.add(mesh(new THREE.BoxGeometry(15, 0.4, 13), '#F1E4CF', cx, 0.2, -15.5));
  for (let i = 0; i < 3; i++) g.add(mesh(new THREE.BoxGeometry(6 - i * 0.6, 0.13, 0.45), '#F1E4CF', cx, 0.065 + i * 0.13, -8.3 - i * 0.45));
  // 본관
  g.add(mesh(new THREE.BoxGeometry(13, 5.8, 10), cream, cx, 3.3, -15.3));
  // 기둥
  const colGeo = new THREE.CylinderGeometry(0.34, 0.38, 5.4, 16);
  const capGeo = new THREE.BoxGeometry(0.9, 0.25, 0.9);
  [14, 16.2, 18.3, 21.7, 23.8, 26].forEach(x => {
    g.add(mesh(colGeo, white, x, 3.1, -9.4));
    g.add(mesh(capGeo, white, x, 5.9, -9.4));
    g.add(mesh(capGeo, white, x, 0.52, -9.4));
  });
  // 지붕
  g.add(mesh(new THREE.BoxGeometry(14.2, 0.6, 11.8), white, cx, 6.3, -14.9));
  const tri = new THREE.Shape();
  tri.moveTo(-7.4, 0); tri.lineTo(7.4, 0); tri.lineTo(0, 2.4); tri.closePath();
  const ped = mesh(new THREE.ExtrudeGeometry(tri, { depth: 11.8, bevelEnabled: false }), rose, cx, 6.6, -20.8);
  g.add(ped);
  const pedFront = mesh(new THREE.ExtrudeGeometry((() => {
    const s = new THREE.Shape(); s.moveTo(-6.6, 0.25); s.lineTo(6.6, 0.25); s.lineTo(0, 2.05); s.closePath(); return s;
  })(), { depth: 0.05, bevelEnabled: false }), white, cx, 6.6, -8.98);
  g.add(pedFront);
  // 하트 장식
  const hs = new THREE.Shape();
  hs.moveTo(0, -0.35); hs.bezierCurveTo(-0.6, 0.05, -0.35, 0.5, 0, 0.25); hs.bezierCurveTo(0.35, 0.5, 0.6, 0.05, 0, -0.35);
  const heart = mesh(new THREE.ExtrudeGeometry(hs, { depth: 0.1, bevelEnabled: false }), '#E88A98', cx, 7.5, -8.9);
  heart.scale.setScalar(0.9);
  g.add(heart);
  // 간판
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.9), new THREE.MeshBasicMaterial({
    map: canvasTex(textCanvas(W.museum?.title || '추억 사진관', { w: 1024, h: 150, size: 80, bg: '#FFFDF8', border: '#E2B865', radius: 75, color: '#C9637A' })),
    transparent: true,
  }));
  sign.position.set(cx, 5.3, front + 0.02);
  g.add(sign);
  // 문
  g.add(mesh(new THREE.BoxGeometry(2.9, 3.7, 0.2), '#E2B865', cx, 2.25, front));
  const door = mesh(new THREE.BoxGeometry(2.5, 3.4, 0.22), '#9C6B4E', cx, 2.1, front + 0.02);
  g.add(door);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.1), new THREE.MeshBasicMaterial({ color: '#FFF1C9', transparent: true, opacity: 0.9 }));
  glow.position.set(cx, 3.0, front + 0.15);
  g.add(glow);
  const knob = mesh(new THREE.SphereGeometry(0.08, 8, 6), '#E2B865', cx + 0.9, 1.9, front + 0.15);
  g.add(knob);
  // 창문 & 테마 배너
  const themes = W.museum?.themes || [];
  [15.2, 17.2, 22.8, 24.8].forEach((x, i) => {
    const th = themes[i % Math.max(1, themes.length)];
    const c = textCanvas(th ? [th.emoji] : ['♥'], { w: 128, h: 320, size: 70, bg: th?.color || '#F4B8C0', radius: 16, color: '#fff', sub: th?.title?.slice(0, 4), subSize: 22 });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 2), new THREE.MeshBasicMaterial({ map: canvasTex(c), transparent: true }));
    banner.position.set(x, 3.2, front + 0.03);
    g.add(banner);
  });
  // 화분
  const pot = (x, z) => {
    g.add(mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.6, 12), '#E9B4A8', x, 0.3, z));
    const b = mesh(new THREE.IcosahedronGeometry(0.5, 1), '#8CC47A', x, 0.95, z);
    g.add(b);
    for (let i = 0; i < 4; i++) g.add(mesh(new THREE.IcosahedronGeometry(0.12, 0), ['#F4B8C0', '#FFFFFF', '#F7D58B'][i % 3], x + rand(-0.35, 0.35), 1.1 + rand(0, 0.3), z + 0.3));
    colliders.push({ x, z, r: 0.5 });
  };
  pot(16.5, -7.8); pot(23.5, -7.8);
  // 다른 면 창문
  for (const sx of [13.45, 26.55]) {
    for (const z of [-12.5, -15.5, -18.5]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), new THREE.MeshBasicMaterial({ color: '#CDE9F5' }));
      w.position.set(sx + (sx < cx ? -0.02 : 0.02), 3.4, z);
      w.rotation.y = sx < cx ? -Math.PI / 2 : Math.PI / 2;
      g.add(w);
    }
  }
  group.add(g);
  updaters.push(t => { heart.position.y = 7.5 + Math.sin(t * 2) * 0.06; glow.material.opacity = 0.75 + Math.sin(t * 3) * 0.2; });
  boxes.push({ minX: 12.3, maxX: 27.7, minZ: -22.2, maxZ: -9.0 });
}
