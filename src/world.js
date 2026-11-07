import * as THREE from 'three';
import { toon, mesh, canvasTex, rand, isMobile, gradientMap, reduceMotion } from './util.js';

/* =========================================================
   바깥 마을 환경: 하늘(낮·노을·밤), 잔디, 길, 나무, 꽃, 구름, 파티클
   ========================================================= */

export const PATHS = [
  // [x1, z1, x2, z2, width]
  [0, 34, 0, 10, 3.2],        // 입구 → 광장
  [0, -2, 0, -19, 2.6],       // 광장 → 웨딩 아치 (버진로드)
  [5, 1, 20, -5.5, 2.6],      // 광장 → 뮤지엄
  [-6, 3, -12, 2, 2.4],       // 광장 → 선물상자
  [-6, 0, -18, -10, 2.4],     // 광장 → 퀴즈
  [6, 7, 10, 9, 2.2],         // 광장 → 식순 보드
  [-2, 20, -10, 19, 2.2],     // 입구 → 포토존
];
export const PLAZA = { x: 0, z: 4, r: 7.5 };

/* 시간대별 색 (하늘 셰이더·안개·조명) */
export const TIMES = {
  day:   { top: '#7EC8EE', mid: '#CDEBFA', horizon: '#FFE6D2', fog: '#FFE6D2', sun: '#FFEBD0', sunI: 2.4, hemi: '#FFF6EA', ground: '#C6DDB0', hemiI: 1.9, lamps: false, stars: false },
  dusk:  { top: '#6A7FC4', mid: '#F6A77A', horizon: '#FFD39B', fog: '#FFD39B', sun: '#FFB07A', sunI: 2.0, hemi: '#FFD3B0', ground: '#B8A890', hemiI: 1.6, lamps: true,  stars: false },
  night: { top: '#0F1B3D', mid: '#2A3A6B', horizon: '#5A4A7A', fog: '#5A4A7A', sun: '#B8C8FF', sunI: 1.1, hemi: '#8FA3D8', ground: '#3E4A5F', hemiI: 1.25, lamps: true, stars: true },
};

function distToSeg(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (pz - z1) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(px - (x1 + dx * t), pz - (z1 + dz * t));
}
export function onPath(x, z, pad = 0.6) {
  if (Math.hypot(x - PLAZA.x, z - PLAZA.z) < PLAZA.r + pad) return true;
  return PATHS.some(p => distToSeg(x, z, p[0], p[1], p[2], p[3]) < p[4] / 2 + pad);
}

/* ---------- 하늘 (+ 밤하늘 별) ---------- */
function makeSky() {
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(TIMES.day.top) },
      mid: { value: new THREE.Color(TIMES.day.mid) },
      horizon: { value: new THREE.Color(TIMES.day.horizon) },
      sunDir: { value: new THREE.Vector3(0.5, 0.45, -0.75).normalize() },
      sunK: { value: 1 },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -1;
  // 별 (밤에만)
  const n = 320, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2), e = rand(0.06, 1), r = 380;
    const hr = r * Math.sqrt(1 - e * e);
    pos.set([Math.cos(a) * hr, r * e, Math.sin(a) * hr], i * 3);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#FFF8D6', size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.9, depthWrite: false }));
  stars.visible = false;
  stars.renderOrder = -1;
  sky.add(stars);
  sky.userData.setPalette = p => {
    mat.uniforms.top.value.set(p.top); mat.uniforms.mid.value.set(p.mid); mat.uniforms.horizon.value.set(p.horizon);
    mat.uniforms.sunK.value = p.stars ? 0.15 : 1;
    stars.visible = !!p.stars;
  };
  return sky;
}

/* ---------- 잔디 텍스처 ---------- */
function grassTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#A9D18E'; g.fillRect(0, 0, 256, 256);
  const cols = ['#9DC883', '#B4D899', '#A2CC87', '#BEDDA3'];
  for (let i = 0; i < 1400; i++) {
    g.fillStyle = cols[i % cols.length];
    g.globalAlpha = 0.5;
    g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, Math.random() * 3 + 1, 0, 7); g.fill();
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(60, 60);
  return t;
}

function pathTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#F1E4CF'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 18; i++) {
    g.fillStyle = ['#E8D8BF', '#F6ECDC', '#EADCC6'][i % 3];
    g.beginPath();
    g.ellipse(Math.random() * 128, Math.random() * 128, 10 + Math.random() * 12, 8 + Math.random() * 8, Math.random() * 3, 0, 7);
    g.fill();
  }
  const t = canvasTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/* ---------- 나무 ---------- */
const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 2, 8);
const leafGeo = new THREE.IcosahedronGeometry(1.3, 1);
export function tree(x, z, { kind = 'green', s = 1 } = {}) {
  const g = new THREE.Group();
  g.add(mesh(trunkGeo, '#A47A5C', 0, 1, 0));
  const palette = kind === 'blossom' ? ['#F9C9D2', '#F6B5C2', '#FCDCE3'] : ['#8CC47A', '#9ED08A', '#7DB86C'];
  const blobs = [[0, 2.6, 0, 1.2], [0.8, 2.2, 0.2, 0.85], [-0.75, 2.3, -0.2, 0.9], [0.1, 3.3, -0.1, 0.8]];
  blobs.forEach(([bx, by, bz, bs], i) => {
    const l = mesh(leafGeo, palette[i % 3], bx, by, bz);
    l.scale.setScalar(bs);
    g.add(l);
  });
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  g.rotation.y = Math.random() * 6;
  return g;
}

export function bush(x, z, s = 1, color = '#8CC47A') {
  const g = new THREE.Group();
  [[0, 0.45, 0, 0.6], [0.5, 0.35, 0.1, 0.45], [-0.45, 0.35, -0.05, 0.45]].forEach(([bx, by, bz, bs]) => {
    const b = mesh(leafGeo, color, bx, by, bz);
    b.scale.setScalar(bs);
    g.add(b);
  });
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  return g;
}

export function lamp(x, z) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.8, 8), '#6E5A50', 0, 1.4, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.1, 8), '#6E5A50', 0, 0.05, 0));
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), new THREE.MeshBasicMaterial({ color: '#FFF1C9' }));
  glass.position.y = 3.0;
  g.add(glass);
  g.add(mesh(new THREE.ConeGeometry(0.34, 0.26, 8), '#6E5A50', 0, 3.3, 0));
  g.position.set(x, 0, z);
  return g;
}

/* 밤에 켜지는 가로등 불빛 (조명 계산 없이 스프라이트 + 바닥 빛 웅덩이) */
let glowTex;
function lampGlow(x, z) {
  if (!glowTex) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(64, 64, 4, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,236,170,.95)'); r.addColorStop(0.35, 'rgba(255,220,140,.45)'); r.addColorStop(1, 'rgba(255,200,120,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    glowTex = canvasTex(c);
  }
  const g = new THREE.Group();
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9 }));
  sp.position.set(0, 3.0, 0);
  sp.scale.set(3.6, 3.6, 1);
  const pool = new THREE.Mesh(new THREE.CircleGeometry(2.6, 24), new THREE.MeshBasicMaterial({ color: '#FFE4A8', transparent: true, opacity: 0.2, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = 0.04;
  g.add(sp, pool);
  g.position.set(x, 0, z);
  return g;
}

export function bench(x, z, rotY = 0) {
  const g = new THREE.Group();
  const wood = '#D9A877';
  for (let i = 0; i < 3; i++) g.add(mesh(new THREE.BoxGeometry(1.8, 0.08, 0.16), wood, 0, 0.5, -0.2 + i * 0.2));
  for (let i = 0; i < 2; i++) {
    const b = mesh(new THREE.BoxGeometry(1.8, 0.14, 0.06), wood, 0, 0.75 + i * 0.2, -0.32);
    g.add(b);
  }
  for (const sx of [-0.75, 0.75]) {
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.5, 0.5), '#8C6B55', sx, 0.25, 0));
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.6, 0.06), '#8C6B55', sx, 0.8, -0.32));
  }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  return g;
}

export function balloons(x, z, h = 3.2) {
  const g = new THREE.Group();
  const cols = ['#F4B8C0', '#FFFFFF', '#F7D58B', '#F9C59E', '#E88A98'];
  const items = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const bx = Math.cos(a) * 0.35, bz = Math.sin(a) * 0.35, by = h + (i % 2) * 0.35;
    const b = mesh(new THREE.SphereGeometry(0.34, 14, 12), cols[i], bx, by, bz);
    b.scale.y = 1.18;
    const string = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(bx, by - 0.4, bz)]),
      new THREE.LineBasicMaterial({ color: '#B8A59B' })
    );
    g.add(b, string);
    items.push({ b, base: by, off: Math.random() * 6 });
  }
  g.add(mesh(new THREE.SphereGeometry(0.12, 8, 6), '#C9637A', 0, 0.4, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.4, 10), '#FFF3EA', 0, 0.2, 0));
  g.position.set(x, 0, z);
  g.userData.update = (t) => items.forEach(it => {
    it.b.position.y = it.base + Math.sin(t * 1.4 + it.off) * 0.12;
    it.b.rotation.z = Math.sin(t + it.off) * 0.08;
  });
  return g;
}

/* ---------- 꽃 & 풀 (인스턴싱으로 가볍게) ---------- */
function scatterFlora(scene, avoid) {
  const n = isMobile ? 500 : 900;
  const tuftGeo = new THREE.ConeGeometry(0.07, 0.4, 3);
  const tufts = new THREE.InstancedMesh(tuftGeo, toon('#8DC175'), n);
  const flowerGeo = new THREE.IcosahedronGeometry(0.11, 0);
  const nf = isMobile ? 260 : 480;
  const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshToonMaterial({ color: '#fff' }), nf);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const e = new THREE.Euler();
  const place = () => {
    for (let k = 0; k < 20; k++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 38;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (!onPath(x, z) && !avoid(x, z)) return [x, z];
    }
    return [60, 60];
  };
  for (let i = 0; i < n; i++) {
    const [x, z] = place();
    e.set(rand(-0.2, 0.2), rand(0, 6), rand(-0.2, 0.2));
    q.setFromEuler(e);
    const sc = rand(0.7, 1.4);
    m.compose(p.set(x, 0.18 * sc, z), q, s.set(sc, sc, sc));
    tufts.setMatrixAt(i, m);
  }
  const fcols = ['#FFFFFF', '#F4B8C0', '#F7D58B', '#FFB7A5', '#E7C6F2', '#FFE3EA'].map(c => new THREE.Color(c));
  for (let i = 0; i < nf; i++) {
    const [x, z] = place();
    m.compose(p.set(x, 0.14, z), q.identity(), s.setScalar(rand(0.8, 1.3)));
    flowers.setMatrixAt(i, m);
    flowers.setColorAt(i, fcols[i % fcols.length]);
  }
  tufts.receiveShadow = true;
  scene.add(tufts, flowers);
}

/* ---------- 구름 ---------- */
function makeClouds(scene) {
  const clouds = [];
  const group = new THREE.Group();
  scene.add(group);
  const geo = new THREE.SphereGeometry(1, 12, 10);
  const mat = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#FFF4EA', emissiveIntensity: 0.35 });
  for (let i = 0; i < 14; i++) {
    const g = new THREE.Group();
    const puffs = 4 + Math.floor(Math.random() * 3);
    for (let j = 0; j < puffs; j++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.set(j * 2.2 - puffs, Math.random() * 1.2, Math.random() * 1.5);
      p.scale.setScalar(rand(1.6, 2.8));
      g.add(p);
    }
    const a = Math.random() * Math.PI * 2, r = rand(70, 150);
    g.position.set(Math.cos(a) * r, rand(28, 50), Math.sin(a) * r - 30);
    g.scale.set(1.3, 0.8, 1);
    group.add(g);
    clouds.push({ g, speed: rand(0.4, 1.0) });
  }
  const update = (dt) => { if (!group.visible) return; clouds.forEach(c => { c.g.position.x += c.speed * dt; if (c.g.position.x > 170) c.g.position.x = -170; }); };
  return { group, update };
}

/* ---------- 흩날리는 꽃잎 ---------- */
function petalTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#FFFFFF';
  g.beginPath(); g.ellipse(32, 32, 26, 15, 0.6, 0, 7); g.fill();
  return canvasTex(c);
}
function makePetals(scene) {
  const n = reduceMotion ? 0 : isMobile ? 160 : 300;
  if (!n) return { group: new THREE.Group(), update() {}, setCount() {} };
  const pos = new Float32Array(n * 3), vel = [];
  const colors = new Float32Array(n * 3);
  const cols = ['#F9C9D2', '#FFFFFF', '#FCDCE3', '#F7D58B'].map(c => new THREE.Color(c));
  for (let i = 0; i < n; i++) {
    pos[i * 3] = rand(-30, 30); pos[i * 3 + 1] = rand(0, 9); pos[i * 3 + 2] = rand(-30, 30);
    vel.push([rand(0.3, 0.9), rand(0.4, 1.1), rand(0, 6)]);
    const c = cols[i % cols.length];
    colors.set([c.r, c.g, c.b], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.28, map: petalTexture(), transparent: true, depthWrite: false, vertexColors: true, alphaTest: 0.1,
  }));
  pts.frustumCulled = false;
  scene.add(pts);
  let live = n;
  return {
    group: pts,
    setCount(k) { live = Math.max(0, Math.min(n, k)); geo.setDrawRange(0, live); },
    update(dt, t, center) {
      if (!pts.visible) return;
      for (let i = 0; i < live; i++) {
        const v = vel[i];
        pos[i * 3] += (Math.sin(t * v[0] + v[2]) * 0.6 + 0.35) * dt;
        pos[i * 3 + 1] -= v[1] * dt;
        pos[i * 3 + 2] += Math.cos(t * v[0] * 0.7 + v[2]) * 0.4 * dt;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3] = center.x + rand(-28, 28); pos[i * 3 + 1] = rand(6, 9); pos[i * 3 + 2] = center.z + rand(-28, 20);
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}

/* ---------- 나비 ---------- */
function makeButterflies(scene) {
  const group = new THREE.Group();
  scene.add(group);
  const list = [];
  const wingGeo = new THREE.CircleGeometry(0.16, 10);
  const cols = ['#F7D58B', '#F4B8C0', '#FFFFFF', '#BFE3F5'];
  for (let i = 0; i < (reduceMotion ? 0 : 8); i++) {
    const g = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: cols[i % 4], side: THREE.DoubleSide });
    const l = new THREE.Mesh(wingGeo, mat), r = new THREE.Mesh(wingGeo, mat);
    l.position.x = -0.14; r.position.x = 0.14;
    const lw = new THREE.Group(), rw = new THREE.Group();
    lw.add(l); rw.add(r);
    g.add(lw, rw);
    group.add(g);
    list.push({ g, lw, rw, cx: rand(-25, 25), cz: rand(-25, 25), r: rand(2, 5), sp: rand(0.3, 0.7), off: rand(0, 6) });
  }
  const update = (dt, t) => { if (!group.visible) return; list.forEach(b => {
    const a = t * b.sp + b.off;
    b.g.position.set(b.cx + Math.cos(a) * b.r, 1.2 + Math.sin(t * 2 + b.off) * 0.5, b.cz + Math.sin(a * 1.3) * b.r);
    b.g.rotation.y = -a;
    const f = Math.sin(t * 18 + b.off) * 1.1;
    b.lw.rotation.y = f; b.rw.rotation.y = -f;
  }); };
  return { group, update };
}

/* ---------- 하트·이모지 터지는 효과 (이모지별 텍스처는 한 번만 만듦) ---------- */
const emojiTex = new Map();
export function emojiTexture(emoji = '💗') {
  if (emojiTex.has(emoji)) return emojiTex.get(emoji);
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.font = '52px serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(emoji, 32, 36);
  const t = canvasTex(c);
  emojiTex.set(emoji, t);
  return t;
}
const bursts = [];
export function spawnHearts(scene, pos, count = 10, emoji = '💗') {
  const tex = emojiTexture(emoji);
  for (let i = 0; i < count; i++) {
    if (bursts.length > 90) break;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.position.copy(pos).add(new THREE.Vector3(rand(-0.4, 0.4), rand(0, 0.5), rand(-0.4, 0.4)));
    sp.scale.setScalar(rand(0.35, 0.6));
    scene.add(sp);
    bursts.push({ sp, v: new THREE.Vector3(rand(-1, 1), rand(2, 3.5), rand(-1, 1)), life: 1.4 + Math.random() * 0.4, scene });
  }
}
/* 한 점에서 목표까지 포물선으로 날아가는 스프라이트 (분수 동전) */
export function throwSprite(scene, from, to, emoji = '🪙', T = 0.7, onLand) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTexture(emoji), transparent: true, depthWrite: false }));
  sp.position.copy(from);
  sp.scale.setScalar(0.5);
  scene.add(sp);
  const g = 9;
  const v = new THREE.Vector3((to.x - from.x) / T, (to.y - from.y + 0.5 * g * T * T) / T, (to.z - from.z) / T);
  bursts.push({ sp, v, life: T, scene, g, onLand });
}
function updateBursts(dt) {
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.life -= dt;
    b.v.y -= (b.g || 1.2) * dt;
    b.sp.position.addScaledVector(b.v, dt);
    if (!b.g) b.sp.material.opacity = Math.min(1, b.life);
    if (b.life <= 0) {
      b.scene.remove(b.sp); b.sp.material.dispose(); bursts.splice(i, 1);
      b.onLand?.(b.sp.position);
    }
  }
}

/* =========================================================
   환경 만들기
   ========================================================= */
export function buildEnvironment(scene, avoid) {
  const group = new THREE.Group();
  scene.add(group);

  const sky = makeSky();
  scene.add(sky);

  // 땅
  const ground = new THREE.Mesh(new THREE.CircleGeometry(160, 64), new THREE.MeshToonMaterial({ map: grassTexture(), gradientMap }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  // 길
  const pTex = pathTexture();
  const pathMat = new THREE.MeshToonMaterial({ map: pTex, gradientMap, polygonOffset: true, polygonOffsetFactor: -1 });
  for (const [x1, z1, x2, z2, w] of PATHS) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const geo = new THREE.PlaneGeometry(w, len);
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / 3, uv.getY(i) * len / 3);
    const m = new THREE.Mesh(geo, pathMat);
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = Math.atan2(x2 - x1, z2 - z1) + Math.PI;
    m.position.set((x1 + x2) / 2, 0.02, (z1 + z2) / 2);
    m.receiveShadow = true;
    group.add(m);
    for (const [cx, cz] of [[x1, z1], [x2, z2]]) {
      const cap = new THREE.Mesh(new THREE.CircleGeometry(w / 2, 20), pathMat);
      cap.rotation.x = -Math.PI / 2;
      cap.position.set(cx, 0.021, cz);
      cap.receiveShadow = true;
      group.add(cap);
    }
  }
  // 광장
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(PLAZA.r, 48), pathMat);
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set(PLAZA.x, 0.025, PLAZA.z);
  plaza.receiveShadow = true;
  group.add(plaza);
  const ring = new THREE.Mesh(new THREE.RingGeometry(PLAZA.r - 0.35, PLAZA.r, 48), toon('#E6D2B5'));
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(PLAZA.x, 0.03, PLAZA.z);
  group.add(ring);

  // 가장자리 나무 숲 (경계)
  const colliders = [];
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2 + rand(-0.04, 0.04);
    const r = rand(41, 46);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.abs(x) < 4 && z > 30) continue; // 입구
    group.add(tree(x, z, { kind: i % 4 === 0 ? 'blossom' : 'green', s: rand(1.1, 1.6) }));
  }
  for (let i = 0; i < 30; i++) {
    const a = Math.random() * Math.PI * 2, r = rand(50, 75);
    group.add(tree(Math.cos(a) * r, Math.sin(a) * r, { kind: i % 3 === 0 ? 'blossom' : 'green', s: rand(1.4, 2.2) }));
  }
  // 입구 아치 너머 언덕
  for (let i = 0; i < 8; i++) {
    const hill = mesh(new THREE.SphereGeometry(1, 20, 12), i % 2 ? '#9CCB84' : '#AED596', rand(-120, 120), -rand(8, 14), -rand(90, 130));
    hill.scale.set(rand(25, 45), rand(18, 26), rand(20, 30));
    group.add(hill);
  }

  // 안쪽 나무들
  const innerTrees = [
    [-9, 27, 'blossom'], [9, 29, 'blossom'], [-24, 22, 'green'], [24, 20, 'blossom'], [-30, 6, 'green'],
    [30, 4, 'green'], [-28, -20, 'blossom'], [33, -20, 'green'], [-8, -28, 'green'], [8, -29, 'blossom'],
    [-15, 12, 'blossom'], [16, 14, 'green'], [-22, -2, 'green'], [11, -22, 'green'], [-12, -24, 'blossom'],
  ];
  innerTrees.forEach(([x, z, k]) => {
    group.add(tree(x, z, { kind: k, s: rand(1, 1.3) }));
    colliders.push({ x, z, r: 0.7 });
  });

  // 덤불
  [[-5, 28], [5, 27], [-14, 8], [13, 3], [-3, -21], [3, -21], [-26, 12], [26, 10], [-20, -18], [28, -8]].forEach(([x, z], i) => {
    group.add(bush(x, z, rand(0.9, 1.3), i % 3 === 0 ? '#A7D08F' : '#8CC47A'));
    colliders.push({ x, z, r: 0.9 });
  });

  // 가로등 (+ 밤 불빛)
  const night = new THREE.Group();
  night.visible = false;
  group.add(night);
  [[-2.3, 30], [2.3, 24], [-2.3, 18], [2.3, 12], [7.5, -1], [14, -3.5], [-8.6, 5.5], [-12, -5], [-8, 9], [8, 12]].forEach(([x, z]) => {
    group.add(lamp(x, z));
    night.add(lampGlow(x, z));
    colliders.push({ x, z, r: 0.3 });
  });

  // 벤치
  [[-6.3, 8.8, 2.4], [6.3, 8.8, -2.4], [-6.8, -0.5, 1.2], [6.8, -1.0, -1.2]].forEach(([x, z, r]) => {
    const b = bench(x, z, r);
    group.add(b);
    colliders.push({ x, z, r: 0.9 });
  });

  // 풍선
  const updaters = [];
  [[-2.5, 33], [2.5, 33], [-3.2, -17], [3.2, -17], [15.5, -7], [24.5, -7]].forEach(([x, z]) => {
    const b = balloons(x, z);
    group.add(b);
    updaters.push(b.userData.update);
    colliders.push({ x, z, r: 0.4 });
  });

  scatterFlora(group, avoid);
  const clouds = makeClouds(group);
  const petals = makePetals(group);
  const butterflies = makeButterflies(group);

  let mode = 'day';
  return {
    group, sky, colliders,
    get time() { return mode; },
    /* 낮 · 노을 · 밤 */
    setTime(m) {
      mode = TIMES[m] ? m : 'day';
      const p = TIMES[mode];
      sky.userData.setPalette(p);
      night.visible = p.lamps;
      return p;
    },
    /* 느린 휴대폰: 1 = 꽃잎 절반, 2 = 구름·나비·꽃잎 끄기 */
    setLite(level) {
      petals.setCount(level >= 2 ? 0 : level === 1 ? 80 : 300);
      petals.group.visible = level < 2;
      clouds.group.visible = butterflies.group.visible = level < 2;
    },
    update(dt, t, center) {
      clouds.update(dt);
      petals.update(dt, t, center);
      butterflies.update(dt, t);
      updaters.forEach(u => u(t));
    },
  };
}

export { updateBursts };
