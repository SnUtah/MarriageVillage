import * as THREE from 'three';
import { toon, mesh } from './util.js';

/* 동글동글한 2등신 캐릭터
   type: 'guest' | 'groom' | 'bride' */
export function createCharacter({ type = 'guest', outfit = '#8FB8DE', hair = '#5A3A2A', skin = '#FFE0C7', longHair = false } = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const isBride = type === 'bride', isGroom = type === 'groom';
  const top = isGroom ? '#2F2B33' : isBride ? '#FFFFFF' : outfit;
  const pants = isGroom ? '#2F2B33' : isBride ? '#FFFFFF' : '#6B5B53';

  /* 다리 */
  const legGeo = new THREE.CapsuleGeometry(0.1, 0.28, 4, 8);
  const shoeGeo = new THREE.SphereGeometry(0.13, 12, 8);
  const legs = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.14 * s, 0.56, 0);
    const leg = mesh(legGeo, pants, 0, -0.26, 0);
    const shoe = mesh(shoeGeo, isBride ? '#F4E3D7' : '#4A3B38', 0, -0.47, 0.04);
    shoe.scale.set(1, 0.6, 1.35);
    pivot.add(leg, shoe);
    body.add(pivot);
    legs.push(pivot);
  }

  /* 몸통 */
  const torso = mesh(new THREE.CapsuleGeometry(0.3, 0.3, 6, 14), top, 0, 0.86, 0);
  torso.scale.set(1, 1, 0.85);
  body.add(torso);

  if (isGroom) {
    const shirt = mesh(new THREE.ConeGeometry(0.13, 0.36, 3), '#FFFFFF', 0, 0.98, 0.2);
    shirt.rotation.set(Math.PI + 0.25, 0, 0);
    shirt.scale.z = 0.3;
    const tie = new THREE.Group();
    const knot = mesh(new THREE.SphereGeometry(0.04, 8, 6), '#1E1A22', 0, 0, 0);
    const wingGeo = new THREE.ConeGeometry(0.06, 0.12, 4);
    const w1 = mesh(wingGeo, '#1E1A22', -0.07, 0, 0); w1.rotation.z = -Math.PI / 2;
    const w2 = mesh(wingGeo, '#1E1A22', 0.07, 0, 0); w2.rotation.z = Math.PI / 2;
    tie.add(knot, w1, w2);
    tie.position.set(0, 1.1, 0.26);
    const flower = mesh(new THREE.SphereGeometry(0.05, 8, 6), '#F4B8C0', -0.17, 1.02, 0.22);
    body.add(shirt, tie, flower);
  }

  if (isBride) {
    const dress = mesh(new THREE.CylinderGeometry(0.28, 0.78, 0.95, 24, 1, true), '#FFFFFF', 0, 0.47, 0, { side: THREE.DoubleSide });
    const hem = mesh(new THREE.TorusGeometry(0.76, 0.05, 6, 30), '#FFF3F5', 0, 0.03, 0);
    hem.rotation.x = Math.PI / 2;
    const bow = mesh(new THREE.TorusGeometry(0.3, 0.035, 6, 24), '#F4B8C0', 0, 0.88, 0);
    bow.rotation.x = Math.PI / 2;
    body.add(dress, hem, bow);
    legs.forEach(l => (l.visible = false));
  }

  /* 팔 */
  const armGeo = new THREE.CapsuleGeometry(0.075, 0.3, 4, 8);
  const handGeo = new THREE.SphereGeometry(0.085, 10, 8);
  const arms = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.36 * s, 1.08, 0);
    const arm = mesh(armGeo, isBride ? skin : top, 0.02 * s, -0.2, 0);
    const hand = mesh(handGeo, skin, 0.03 * s, -0.42, 0);
    pivot.add(arm, hand);
    pivot.rotation.z = 0.12 * s;
    body.add(pivot);
    arms.push(pivot);
  }

  if (isBride) {
    // 부케는 두 손 앞에
    const bouquet = new THREE.Group();
    const cols = ['#F4B8C0', '#FFFFFF', '#F7D58B', '#E88A98', '#FFE3EA'];
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      bouquet.add(mesh(new THREE.SphereGeometry(0.075, 8, 6), cols[i % cols.length], Math.cos(a) * 0.09, 0.03, Math.sin(a) * 0.09));
    }
    bouquet.add(mesh(new THREE.SphereGeometry(0.08, 8, 6), '#E88A98', 0, 0.07, 0));
    bouquet.add(mesh(new THREE.ConeGeometry(0.07, 0.22, 8), '#9CC08A', 0, -0.13, 0));
    bouquet.position.set(0, 0.7, 0.36);
    body.add(bouquet);
    arms[0].rotation.set(-0.9, 0, 0.5);
    arms[1].rotation.set(-0.9, 0, -0.5);
  }

  /* 머리 */
  const head = new THREE.Group();
  head.position.y = 1.5;
  body.add(head);
  const face = mesh(new THREE.SphereGeometry(0.42, 24, 18), skin, 0, 0, 0);
  head.add(face);

  const hairMat = toon(hair);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMat);
  cap.rotation.x = -0.35;
  cap.position.set(0, 0.03, -0.03);
  cap.castShadow = true;
  head.add(cap);
  const bang = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), hairMat);
  bang.scale.set(1.5, 0.55, 0.8);
  bang.position.set(0.1, 0.26, 0.27);
  bang.rotation.z = -0.3;
  head.add(bang);

  if (longHair || isBride) {
    const back = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), hairMat);
    back.scale.set(1.05, 1.25, 0.7);
    back.position.set(0, -0.22, -0.18);
    head.add(back);
  }

  if (isBride) {
    const veil = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.62),
      new THREE.MeshToonMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false })
    );
    veil.scale.set(1, 1.6, 1);
    veil.position.set(0, -0.35, -0.12);
    veil.rotation.x = -0.25;
    head.add(veil);
    const crown = new THREE.Group();
    for (let i = 0; i < 9; i++) {
      const a = Math.PI * 0.15 + (i / 8) * Math.PI * 0.7;
      crown.add(mesh(new THREE.SphereGeometry(0.055, 8, 6), i % 2 ? '#F4B8C0' : '#FFFFFF', Math.cos(a) * 0.4, 0.22, -Math.sin(a) * 0.06 + 0.02));
    }
    crown.rotation.x = -0.5;
    head.add(crown);
  }

  // 눈, 볼
  const eyeGeo = new THREE.SphereGeometry(0.05, 10, 8);
  const eyeMat = new THREE.MeshBasicMaterial({ color: '#2B2220' });
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(eyeGeo, eyeMat);
    e.position.set(0.14 * s, 0.02, 0.38);
    e.scale.set(1, 1.3, 0.6);
    head.add(e);
    eyes.push(e);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 4), new THREE.MeshBasicMaterial({ color: '#fff' }));
    shine.position.set(0.14 * s + 0.018, 0.05, 0.415);
    head.add(shine);
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.07, 14), new THREE.MeshBasicMaterial({ color: '#FFB3B3', transparent: true, opacity: 0.7 }));
    cheek.position.set(0.24 * s, -0.09, 0.345);
    cheek.rotation.y = 0.55 * s;
    head.add(cheek);
  }
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI), eyeMat);
  mouth.position.set(0, -0.1, 0.39);
  mouth.rotation.z = Math.PI;
  head.add(mouth);

  root.traverse(o => { if (o.isMesh && o.material !== eyeMat) o.castShadow = true; });

  /* ---------- 애니메이션 ---------- */
  let phase = 0, blinkT = 2 + Math.random() * 3, waveT = 0, idleT = 0;
  const armBase = arms[1].rotation.clone();
  const st = { root, body, head, arms, legs, type };

  st.animate = (dt, speed = 0, time = 0) => {
    const s = Math.min(1, speed);
    phase += dt * (4 + 7 * s);
    const swing = Math.sin(phase) * 0.75 * s;
    if (!isBride) {
      legs[0].rotation.x = swing;
      legs[1].rotation.x = -swing;
      arms[0].rotation.x = -swing * 0.8;
      arms[1].rotation.x = swing * 0.8;
    }
    body.position.y = Math.abs(Math.sin(phase)) * 0.07 * s + Math.sin(time * 2) * 0.012;
    body.rotation.z = Math.sin(phase) * 0.04 * s;
    head.rotation.z = Math.sin(time * 1.3) * 0.04;
    // 가만히 서 있으면 잠시 뒤 두리번거리기 (하객 캐릭터만 — 신랑신부는 하객을 바라봄)
    if (type === 'guest') {
      idleT = s < 0.05 ? idleT + dt : 0;
      const look = idleT > 4 ? Math.sin(time * 0.8) * 0.45 : 0;
      head.rotation.y += (look - head.rotation.y) * Math.min(1, dt * 4);
    }

    // 깜빡임
    blinkT -= dt;
    const blink = blinkT < 0.12 ? 0.15 : 1;
    eyes.forEach(e => (e.scale.y = 1.3 * blink));
    if (blinkT < 0) blinkT = 2 + Math.random() * 3;

    // 손 흔들기
    if (waveT > 0) {
      waveT -= dt;
      const arm = arms[1];
      arm.rotation.z = -2.5 + Math.sin(time * 14) * 0.35;
      arm.rotation.x = 0;
      if (waveT <= 0) arm.rotation.copy(armBase);
    }
  };
  st.wave = (dur = 1.6) => { waveT = dur; };
  return st;
}
