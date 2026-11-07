/* =========================================================
   🎵 파일 없는 소리
   mp3 없이 WebAudio로 오르골 배경음과 작은 효과음을 합성합니다.
   - 기본은 꺼짐. 오른쪽 위 🔇 버튼(또는 메뉴)으로 켜면 기억해 둡니다
   - 저작권 걱정 없이 단일 HTML 안에서 완결됩니다
   ========================================================= */
const KEY = 'wedding-sound';
let ctx = null, master = null, bgm = null, noiseBuf = null;
let enabled = false, timer = null, nextT = 0, step = 0;

/* 오르골 멜로디 (C 펜타토닉, 한 칸 = 8분음표) */
const C5 = 523.25, D5 = 587.33, E5 = 659.25, G5 = 783.99, A5 = 880, C6 = 1046.5, D6 = 1174.7;
const MELODY = [
  E5, G5, A5, G5, E5, D5, C5, 0, D5, E5, G5, E5, D5, C5, 0, 0,
  E5, G5, A5, C6, A5, G5, E5, 0, D5, E5, D6, C6, A5, G5, 0, 0,
  C6, A5, G5, A5, G5, E5, D5, 0, E5, G5, E5, D5, C5, 0, 0, 0,
];
const BASS = [130.81, 110, 87.31, 98]; // C3 A2 F2 G2 (4박마다)
const STEP = 0.3;

function ensure() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
  bgm = ctx.createGain(); bgm.gain.value = 0.12; bgm.connect(master);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return ctx;
}

function tone(freq, t, dur, { type = 'sine', gain = 0.2, dest = master, slide = 0 } = {}) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest);
  o.start(t); o.stop(t + dur + 0.05);
}
function noise(t, dur, { gain = 0.2, type = 'lowpass', freq = 2000 } = {}) {
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = type; f.frequency.value = freq;
  g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(master);
  s.start(t); s.stop(t + dur + 0.02);
}

/* 배경음: 조금 앞서서 예약해 두는 방식 (탭이 뒤로 가면 멈춤) */
function schedule() {
  if (!ctx || !enabled) return;
  while (nextT < ctx.currentTime + 0.4) {
    const n = MELODY[step % MELODY.length];
    if (n) {
      tone(n, nextT, 1.1, { type: 'sine', gain: 0.5, dest: bgm });
      tone(n * 2, nextT, 0.5, { type: 'triangle', gain: 0.1, dest: bgm });
    }
    if (step % 4 === 0) tone(BASS[Math.floor(step / 4) % BASS.length], nextT, 1.15, { type: 'triangle', gain: 0.16, dest: bgm });
    nextT += STEP; step++;
  }
}

export const sound = {
  get enabled() { return enabled; },
  saved() { try { return localStorage.getItem(KEY) === '1'; } catch { return false; } },
  /* 사용자가 눌렀을 때(제스처 안)만 켜져요 — 휴대폰 자동재생 규칙 */
  setEnabled(on) {
    if (on && !ensure()) return false;
    enabled = on;
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch {}
    if (on) {
      ctx.resume().catch(() => {});
      if (!timer) { nextT = ctx.currentTime + 0.1; timer = setInterval(schedule, 120); }
    } else {
      if (timer) { clearInterval(timer); timer = null; }
      ctx?.suspend().catch(() => {});
    }
    return enabled;
  },
  sfx(name) {
    if (!enabled || !ctx) return;
    const t = ctx.currentTime;
    switch (name) {
      case 'chime': tone(880, t, 0.25, { gain: 0.14 }); tone(1318.5, t + 0.09, 0.32, { gain: 0.12 }); break;
      case 'coin': tone(1760, t, 0.1, { type: 'square', gain: 0.05 }); tone(2217, t + 0.07, 0.28, { type: 'square', gain: 0.05 }); noise(t + 0.3, 0.3, { gain: 0.07, freq: 1400 }); break;
      case 'shutter': noise(t, 0.05, { gain: 0.3, type: 'highpass', freq: 3000 }); noise(t + 0.07, 0.04, { gain: 0.18, type: 'highpass', freq: 2500 }); break;
      case 'paper': noise(t, 0.16, { gain: 0.12, type: 'bandpass', freq: 900 }); tone(1047, t + 0.1, 0.3, { gain: 0.08 }); break;
      case 'jump': tone(320, t, 0.18, { type: 'triangle', gain: 0.12, slide: 760 }); break;
      case 'heart': tone(1047, t, 0.18, { gain: 0.07 }); tone(1318.5, t + 0.05, 0.22, { gain: 0.06 }); break;
      case 'ok': tone(659, t, 0.14, { gain: 0.12 }); tone(830.6, t + 0.11, 0.3, { gain: 0.12 }); break;
      case 'no': tone(330, t, 0.2, { type: 'triangle', gain: 0.1 }); tone(262, t + 0.16, 0.34, { type: 'triangle', gain: 0.1 }); break;
      case 'pop': tone(600, t, 0.08, { type: 'triangle', gain: 0.1, slide: 900 }); break;
      case 'tada': [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, t + i * 0.09, 0.4, { gain: 0.12 })); break;
    }
  },
  /* 팝업이 열리면 배경음을 살짝 줄임 */
  duck(on) { if (bgm && ctx) bgm.gain.setTargetAtTime(on ? 0.04 : 0.12, ctx.currentTime, 0.12); },
};

document.addEventListener('visibilitychange', () => {
  if (!ctx || !enabled) return;
  if (document.hidden) ctx.suspend().catch(() => {});
  else { ctx.resume().catch(() => {}); nextT = ctx.currentTime + 0.1; }
});
