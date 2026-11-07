import { formatKDate, dday, weddingDate, placeholderCanvas, buzz, photoURL, allLetters, saveLetter, fetchLetters, lettersRemote, lettersStatus, shortDate, now, phase, currentStep } from './common.js';
import { sound } from './sound.js';

/* =========================================================
   화면 UI: 모달, 토스트, 라이트박스, 각 오브젝트 내용

   각 내용은 { html, mount } 를 돌려주는 ○○View()와
   그것을 아래에서 올라오는 팝업으로 여는 show○○()로 나뉩니다.
   '📖 글로 보기'(textview.js)는 같은 View들을 한 페이지에 이어 붙여 씁니다.
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- 휴대폰 뒤로가기 = 팝업 닫기 ----------
   팝업을 열 때마다 방문 기록을 하나 쌓아서, 하객이 뒤로가기를 눌러도
   사이트를 나가지 않고 팝업(또는 사진관, 글로 보기)만 닫히게 합니다. */
const backStack = [];
let selfBack = 0;
export function pushBack(close) {
  backStack.push(close);
  try { history.pushState({ wv: backStack.length }, ''); } catch {}
}
export function popBack(close) {
  const i = backStack.lastIndexOf(close);
  if (i < 0) return;
  backStack.splice(i, 1);
  selfBack++;
  history.back();
}
addEventListener('popstate', () => {
  if (selfBack > 0) { selfBack--; return; }
  backStack.pop()?.();
});

/* ---------- 아래에서 올라오는 팝업 ---------- */
let cleanup = null, closeTimer = null;
const modalEl = () => $('#modal');
function hideModal() {
  const m = modalEl();
  if (!m.classList.contains('open') || m.classList.contains('closing')) return;
  m.classList.add('closing');
  sound.duck(false);
  if (cleanup) { cleanup(); cleanup = null; }
  closeTimer = setTimeout(() => {
    m.classList.remove('open', 'closing');
    m.querySelector('.sheet').style.transform = '';
  }, 220);
}

export function openModal(title, html, mount) {
  const m = modalEl();
  if (cleanup) { cleanup(); cleanup = null; }
  const wasOpen = m.classList.contains('open') && !m.classList.contains('closing');
  clearTimeout(closeTimer);
  m.classList.remove('closing');
  m.querySelector('.sheet').style.transform = '';
  $('#modal-title').textContent = title;
  const body = $('#modal-body');
  body.innerHTML = html;
  body.scrollTop = 0;
  m.classList.add('open');
  sound.duck(true);
  if (!wasOpen) pushBack(hideModal);
  if (mount) cleanup = mount(body) || null;
}
export function closeModal() {
  const m = modalEl();
  if (!m.classList.contains('open') || m.classList.contains('closing')) return;
  hideModal();
  popBack(hideModal);
}
export const isOverlayOpen = () => $('#modal').classList.contains('open') || $('#lightbox').classList.contains('open');
const openView = (title, view) => openModal(title, view.html, view.mount);

let toastT;
export function toast(msg, ms = 2400) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), ms);
}

const stillMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export function confetti(emojis = ['🌸', '💗', '✨', '🎉', '💐']) {
  if (stillMotion()) return;
  for (let i = 0; i < 28; i++) {
    const s = document.createElement('div');
    s.className = 'confetti';
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDuration = 2 + Math.random() * 2 + 's';
    s.style.animationDelay = Math.random() * 0.6 + 's';
    ($('#phone') || document.body).appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

export async function copy(text, msg = '복사되었어요') {
  let ok = false;
  try { await navigator.clipboard.writeText(text); ok = true; }
  catch {
    // 오래된 브라우저·http 미리보기용 예비 방법
    const ta = document.createElement('textarea');
    ta.value = text; ta.readOnly = true;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { ta.setSelectionRange(0, text.length); ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
  }
  buzz(10);
  toast(ok ? `📋 ${msg}` : '복사가 안 돼요. 글자를 길게 눌러 복사해 주세요');
  return ok;
}

/* data-copy가 있는 버튼·행을 누르면 복사 (행 안의 버튼을 눌렀을 땐 한 번만) */
function bindCopy(root) {
  root.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', e => {
    if (b.tagName !== 'BUTTON' && e.target.closest('button')) return;
    copy(b.dataset.copy, b.dataset.msg);
  }));
}

/* ---------- 💌 청첩장 ---------- */
function calendarHTML() {
  const { k } = formatKDate();
  const y = k.getFullYear(), m = k.getMonth(), d = k.getDate();
  const first = new Date(y, m, 1).getDay();
  const last = new Date(y, m + 1, 0).getDate();
  let html = `<table class="cal"><tr>${['일', '월', '화', '수', '목', '금', '토'].map((n, i) => `<th class="${i === 0 ? 'sun' : ''}">${n}</th>`).join('')}</tr><tr>`;
  for (let i = 0; i < first; i++) html += '<td></td>';
  for (let day = 1; day <= last; day++) {
    const col = (first + day - 1) % 7;
    html += `<td class="${col === 0 ? 'sun' : ''} ${day === d ? 'day' : ''}">${day === d ? `<span>${day}</span>` : day}</td>`;
    if (col === 6 && day !== last) html += '</tr><tr>';
  }
  return html + '</tr></table>';
}

function parentsLine(p) {
  return `${esc(p.father)} · ${esc(p.mother)}<span class="muted">의 ${esc(p.relation)}</span> <b>${esc(p.name)}</b>`;
}

export function invitationView({ hero = true } = {}) {
  const { date, time, k } = formatKDate();
  const html = `
    ${hero ? `<div class="inv-hero">
      <div class="en">WEDDING INVITATION</div>
      <div class="names">${esc(W.groom.name)} <span style="color:var(--rose)">♥</span> ${esc(W.bride.name)}</div>
      <div class="muted">${date} ${time}<br>${esc(W.venue.name)} ${esc(W.venue.hall)}</div>
    </div>` : ''}
    <div class="ornament">✿ ✿ ✿</div>
    <p class="inv-greet">${esc(W.greeting)}</p>
    <div class="divider"></div>
    <div class="parents">${parentsLine(W.groom)}<br>${parentsLine(W.bride)}</div>
    <div class="card">
      <div class="center serif" style="font-size:17px;margin-bottom:8px">${k.getFullYear()}. ${k.getMonth() + 1}</div>
      ${calendarHTML()}
      <div class="countdown cd"></div>
    </div>
    <div class="btns">
      <button class="btn pink b-ics">📅 캘린더에 추가</button>
      <a class="btn b-gcal" target="_blank" rel="noopener" href="${esc(gcalURL())}">📆 구글 캘린더</a>
      <button class="btn b-dir">🗺️ 오시는 길</button>
      <button class="btn b-share">🔗 공유하기</button>
    </div>`;
  const mount = root => {
    const cd = root.querySelector('.cd');
    const tick = () => {
      const diff = weddingDate() - now();
      if (diff <= 0) {
        const days = Math.floor(-diff / 864e5);
        cd.innerHTML = `<div style="min-width:auto;padding:8px 18px"><b>${phase() === 'after' && days >= 1 ? `결혼한 지 ${days}일째예요 💕` : '오늘 결혼합니다 💍'}</b></div>`;
        return;
      }
      const dd = Math.floor(diff / 864e5), hh = Math.floor(diff / 36e5) % 24, mm = Math.floor(diff / 6e4) % 60, ss = Math.floor(diff / 1e3) % 60;
      cd.innerHTML = [[dd, 'DAYS'], [hh, 'HOUR'], [mm, 'MIN'], [ss, 'SEC']].map(([v, l]) => `<div><b>${v}</b><small>${l}</small></div>`).join('');
    };
    tick();
    const iv = phase() === 'after' ? null : setInterval(tick, 1000);
    root.querySelector('.b-ics').onclick = downloadICS;
    root.querySelector('.b-dir').onclick = showDirections;
    root.querySelector('.b-share').onclick = share;
    return () => clearInterval(iv);
  };
  return { html, mount };
}
export function showInvitation() { openView('청첩장', invitationView()); }

function downloadICS() {
  const start = weddingDate();
  const end = new Date(start.getTime() + 2 * 3600e3);
  const f = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//wedding//KO', 'BEGIN:VEVENT',
    `UID:${f(start)}@wedding`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
    `SUMMARY:${W.groom.name} ♥ ${W.bride.name} 결혼식`, `LOCATION:${W.venue.name} ${W.venue.hall}, ${W.venue.address}`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'wedding.ics';
  a.click();
  toast('📅 캘린더 파일을 열어 저장해 주세요');
}

function gcalURL() {
  const s = weddingDate(), e = new Date(s.getTime() + 2 * 3600e3);
  const f = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const q = new URLSearchParams({ action: 'TEMPLATE', text: `${W.groom.name} ♥ ${W.bride.name} 결혼식`, dates: `${f(s)}/${f(e)}`, location: `${W.venue.name} ${W.venue.hall}, ${W.venue.address}` });
  return `https://calendar.google.com/calendar/render?${q}`;
}

export async function share() {
  const data = { title: `${W.groom.name} ♥ ${W.bride.name} 결혼합니다`, text: '저희 결혼식에 초대합니다 💌', url: location.href };
  if (navigator.share) {
    try { await navigator.share(data); return; }
    catch (err) { if (err?.name === 'AbortError') return; }
  }
  copy(location.href, '주소가 복사되었어요');
}

/* ---------- 🗺️ 오시는 길 ---------- */
export function directionsView() {
  const v = W.venue;
  const list = (title, arr) => (arr && arr.length ? `<div class="card"><b>${title}</b><div class="muted" style="margin-top:6px;line-height:1.7">${arr.map(esc).join('<br>')}</div></div>` : '');
  const html = `
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${esc(v.name)}</div>
      <div class="muted" style="margin:4px 0 10px">${esc(v.hall)}</div>
      <div>${esc(v.address)}</div>
      <div class="btns" style="justify-content:center">
        <button class="btn small" data-copy="${esc(v.address)}" data-msg="주소가 복사되었어요">📋 주소 복사</button>
        ${v.tel ? `<a class="btn small" href="tel:${esc(v.tel)}">📞 전화</a>` : ''}
      </div>
    </div>
    <div class="btns">
      ${v.naverMap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.naverMap)}">🟢 네이버 지도</a>` : ''}
      ${v.kakaoMap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.kakaoMap)}">🟡 카카오맵</a>` : ''}
      ${v.tmap ? `<a class="btn" target="_blank" rel="noopener" href="${esc(v.tmap)}">🔵 티맵</a>` : ''}
    </div>
    ${list('🚇 지하철', v.subway)}
    ${list('🚌 버스', v.bus)}
    ${list('🚗 자가용', v.car ? [v.car] : [])}
    ${list('🅿️ 주차', v.parking ? [v.parking] : [])}`;
  return { html, mount: bindCopy };
}
export function showDirections() { openView('오시는 길', directionsView()); }

/* ---------- 🎁 마음 전하실 곳 ---------- */
export function accountsView() {
  const group = (title, arr) => `
    <details class="acc">
      <summary>${title}</summary>
      ${(arr || []).map(a => `
        <div class="acc-row" data-copy="${esc(`${a.bank} ${a.number} ${a.name}`)}" data-msg="계좌번호가 복사되었어요">
          <div class="info"><small>${esc(a.role)}</small><br><b>${esc(a.name)}</b> · ${esc(a.bank)}<br>${esc(a.number)}</div>
          <button class="btn small" data-copy="${esc(`${a.bank} ${a.number} ${a.name}`)}" data-msg="계좌번호가 복사되었어요">복사</button>
        </div>`).join('')}
    </details>`;
  const html = `
    <p class="muted center" style="line-height:1.8">참석이 어려우신 분들을 위해 기재했습니다.<br>너그러운 마음으로 양해 부탁드립니다.</p>
    ${group('💙 신랑측 계좌번호', W.accounts?.groom)}
    ${group('💗 신부측 계좌번호', W.accounts?.bride)}`;
  return { html, mount: bindCopy };
}
export function showAccounts() { openView('마음 전하실 곳', accountsView()); }

/* ---------- 🕰️ 식순 ---------- */
export function scheduleView() {
  const items = W.schedule || [];
  const render = box => {
    const cs = currentStep();
    const note = !cs.sameDay ? formatKDate().date
      : cs.done ? '오늘 예식이 모두 끝났어요. 와주셔서 감사합니다 🙏'
      : cs.item ? '지금 진행 중인 순서가 분홍색으로 표시돼요'
      : '곧 시작해요. 순서가 시작되면 분홍색으로 표시돼요';
    box.innerHTML = `
      <p class="muted">${note}</p>
      <div class="timeline">
        ${items.map((s, i) => `<div class="tl-item ${i === cs.idx ? 'now' : ''}"><div class="t">${esc(s.time)} · ${esc(s.title)}</div>${s.desc ? `<div class="d">${esc(s.desc)}</div>` : ''}</div>`).join('')}
      </div>`;
  };
  const mount = root => {
    const box = root.querySelector('.sched-box') || root;
    render(box);
    const iv = setInterval(() => render(box), 60000);   // 당일엔 1분마다 '진행 중' 갱신
    return () => clearInterval(iv);
  };
  return { html: '<div class="sched-box"></div>', mount };
}
export function showSchedule() { openView('오늘의 식순', scheduleView()); }

/* ---------- ❓ 퀴즈 ---------- */
export function quizView() {
  const qs = W.quiz || [];
  const mount = root => {
    const box = root.querySelector('.quiz-box') || root;
    let i = 0, score = 0, timer = null, alive = true;
    const render = () => {
      if (!alive) return;
      if (i >= qs.length) {
        const perfect = score === qs.length;
        box.innerHTML = `
          <div class="center" style="padding:20px 0">
            <div style="font-size:60px">${perfect ? '🏆' : score >= qs.length / 2 ? '🥰' : '🌱'}</div>
            <div class="quiz-q">${qs.length}문제 중 <b style="color:var(--rose-deep)">${score}개</b> 맞혔어요!</div>
            <p class="muted">${perfect ? '저희를 정말 잘 아시는군요! 💕' : '이제 저희를 조금 더 알게 되셨죠? 😊'}</p>
            <button class="btn pink q-again" style="margin-top:14px">다시 풀기</button>
          </div>`;
        box.querySelector('.q-again').onclick = () => { i = 0; score = 0; render(); };
        if (perfect) confetti();
        return;
      }
      const q = qs[i];
      box.innerHTML = `
        <div class="progress-dots">${qs.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div>
        <div class="quiz-q">Q${i + 1}. ${esc(q.q)}</div>
        ${q.options.map((o, k) => `<button class="quiz-opt" data-k="${k}">${esc(o)}</button>`).join('')}
        <p class="muted center q-cmt" style="min-height:24px"></p>`;
      box.querySelectorAll('.quiz-opt').forEach(b => b.onclick = () => {
        const k = +b.dataset.k;
        box.querySelectorAll('.quiz-opt').forEach(x => (x.disabled = true));
        box.querySelectorAll('.quiz-opt')[q.answer].classList.add('right');
        if (k === q.answer) { score++; sound.sfx('ok'); } else { b.classList.add('wrong'); sound.sfx('no'); }
        box.querySelector('.q-cmt').textContent = (k === q.answer ? '⭕ 정답! ' : '❌ 아쉬워요! ') + (q.comment || '');
        timer = setTimeout(() => { i++; render(); }, 1700);
      });
    };
    render();
    return () => { alive = false; clearTimeout(timer); };   // 창을 닫으면 다음 문제로 넘어가지 않음
  };
  return { html: '<div class="quiz-box"></div>', mount };
}
export function showQuiz() { openView('신랑신부 퀴즈', quizView()); }

/* ---------- 💐 신랑신부 인사 ---------- */
export function coupleView({ greeting = true } = {}) {
  const contact = (label, phone) => phone ? `
    <div class="acc-row" style="border-top:1px dashed var(--line)">
      <div class="info">${label}</div>
      <a class="btn small" href="tel:${esc(phone)}">📞</a>
      <a class="btn small" href="sms:${esc(phone)}">💬</a>
    </div>` : '';
  const g = W.groom, b = W.bride;
  const html = `
    <div class="inv-hero">
      <div style="font-size:44px">🤵‍♂️👰‍♀️</div>
      <div class="names">"와주셔서 감사해요!"</div>
    </div>
    ${greeting ? `<p class="inv-greet">${esc(W.greeting)}</p>` : ''}
    <details class="acc"><summary>📞 연락하기</summary>
      ${contact(`신랑 <b>${esc(g.name)}</b>`, g.phone)}
      ${contact(`신랑 아버지 ${esc(g.father)}`, g.fatherPhone)}
      ${contact(`신랑 어머니 ${esc(g.mother)}`, g.motherPhone)}
      ${contact(`신부 <b>${esc(b.name)}</b>`, b.phone)}
      ${contact(`신부 아버지 ${esc(b.father)}`, b.fatherPhone)}
      ${contact(`신부 어머니 ${esc(b.mother)}`, b.motherPhone)}
    </details>`;
  return { html };
}
export function showCouple() { openView('신랑 · 신부', coupleView()); }

/* ---------- ✉️ 편지함: 봉투 목록 + 편지 쓰기 ----------
   봉투를 누르면 편지지가 펼쳐집니다.
   기본은 서버 없이 이 페이지 안에서 완결(쓴 편지는 그 휴대폰에 보관)되고,
   config.js에 lettersSheet가 있으면 편지가 구글 시트로 모이고 모두가 함께 봅니다. */
const sideClass = l => (l.side === '신부측' ? 'bride' : 'groom');
const envelopeHTML = (l, i) => `
  <button type="button" class="env ${sideClass(l)}${l.mine ? ' mine' : ''}${l.pending ? ' pending' : ''}" data-i="${i}" aria-label="${esc(l.name)}의 편지 열기">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${l.pending ? '⏳' : l.mine ? '✍️' : '💌'}</span>
    <b class="env-name">${esc(l.name)}</b>
    <small class="env-meta">${l.pending ? '보내는 중' : `${esc(l.side || '')}${l.side ? ' · ' : ''}${shortDate(l.time)}`}</small>
  </button>`;

export function mailboxView(onSent, { onBack } = {}) {
  const remote = lettersRemote();
  const html = `
    <p class="muted" style="line-height:1.7">두 사람에게 축하의 한마디를 남겨주세요.<br>${remote ? '편지는 신랑신부에게 바로 전해지고, 편지함에서 함께 볼 수 있어요 💌' : '편지는 봉투에 담겨 편지함에 보관돼요 💌'}</p>
    <form class="letter-form" autocomplete="off">
      <input class="field l-name" maxlength="20" placeholder="이름" aria-label="이름" />
      <div class="seg l-side"><button type="button" data-v="신랑측" class="on">🤵 신랑측</button><button type="button" data-v="신부측">👰 신부측</button></div>
      <textarea class="field l-msg" maxlength="300" placeholder="축하 메시지를 적어주세요 (300자 이내)" aria-label="메시지"></textarea>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">✉️ 편지 보내기</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>💌 도착한 편지</b><span class="muted l-count"></span></div>
    <p class="muted" style="font-size:12.5px;margin:0 0 10px">봉투를 누르면 편지지가 펼쳐져요 · ✍️ 는 내가 쓴 편지</p>
    <p class="muted l-status" role="status" hidden></p>
    <div class="env-grid l-list"></div>`;
  const mount = root => {
    let side = '신랑측';
    root.querySelectorAll('.l-side button').forEach(b => b.onclick = () => {
      root.querySelectorAll('.l-side button').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); side = b.dataset.v;
    });
    const listEl = root.querySelector('.l-list'), countEl = root.querySelector('.l-count'), statusEl = root.querySelector('.l-status');
    const back = onBack || (() => showMailbox(onSent));
    // 시트 연결 상태: 불러오는 중 · 실패(다시 시도) · 마지막 사본
    const paintStatus = () => {
      if (!remote) { statusEl.hidden = true; return; }
      const s = lettersStatus();
      statusEl.hidden = false;
      if (s.loading && !s.loaded) statusEl.textContent = '편지를 불러오는 중…';
      else if (s.error && !s.loaded) {
        statusEl.innerHTML = '지금은 편지를 불러올 수 없어요. <button type="button" class="linklike l-retry">다시 시도</button>';
        statusEl.querySelector('.l-retry').onclick = () => { fetchLetters({ force: true }); paintStatus(); };
      }
      else if (s.error) statusEl.textContent = '마지막으로 받아 온 편지예요 (지금은 연결이 어려워요)';
      else statusEl.hidden = true;
    };
    const render = () => {
      const list = allLetters();
      countEl.textContent = list.length ? `${list.length}통` : '';
      listEl.innerHTML = list.length
        ? list.slice(0, 60).map(envelopeHTML).join('')
        : `<p class="muted">${remote && lettersStatus().loading && !lettersStatus().loaded ? '' : '아직 편지가 없어요. 첫 편지를 남겨주세요!'}</p>`;
      listEl.querySelectorAll('.env').forEach(b => b.onclick = () => {
        buzz(8);
        b.classList.add('open');
        setTimeout(() => showLetter(list, +b.dataset.i, back), stillMotion() ? 0 : 260);
      });
      paintStatus();
    };
    render();
    const onUpdate = () => render();
    if (remote) { addEventListener('wedding:letters', onUpdate); fetchLetters(); paintStatus(); }
    const form = root.querySelector('.letter-form'), btn = root.querySelector('.l-send');
    form.onsubmit = async e => {
      e.preventDefault();
      const name = root.querySelector('.l-name').value.trim();
      const message = root.querySelector('.l-msg').value.trim();
      if (!name || !message) { toast('이름과 메시지를 적어주세요'); return; }
      const label = btn.textContent;
      btn.disabled = true;
      if (remote) btn.textContent = '보내는 중…';
      const r = await saveLetter({ name, side, message, time: new Date().toISOString() });
      btn.textContent = label;
      btn.disabled = false;
      if (!root.isConnected) return; // 보내는 사이에 창이 닫힘
      root.querySelector('.l-msg').value = '';
      if (r.ok) toast(remote ? '💌 편지가 두 사람에게 전해졌어요. 감사합니다!' : '💌 편지가 편지함에 들어갔어요. 감사합니다!');
      else toast('💌 편지를 휴대폰에 보관했어요. 연결되면 자동으로 전해드릴게요', 3600);
      confetti(['💌', '💗', '✨']);
      buzz(20);
      sound.sfx('paper');
      onSent?.(r.letter);
      render();
      listEl.querySelector('.env')?.scrollIntoView({ behavior: stillMotion() ? 'auto' : 'smooth', block: 'center' });
    };
    return () => removeEventListener('wedding:letters', onUpdate);
  };
  return { html, mount };
}
export function showMailbox(onSent) { openView('축하 편지함', mailboxView(onSent)); }

/* ---------- 📜 편지지: 봉투를 열면 보이는 한 장 ---------- */
export function letterView(list, i, onBack) {
  const l = list[i];
  const html = `
    <article class="paper ${sideClass(l)}" aria-label="${esc(l.name)}의 편지">
      <div class="paper-top"><span class="paper-stamp">${l.mine ? '✍️' : '💌'}</span><span>To. ${esc(W.groom.name)} &amp; ${esc(W.bride.name)}</span></div>
      <p class="paper-msg">${esc(l.message)}</p>
      <div class="paper-from">From. <b>${esc(l.name)}</b><small>${esc(l.side || '')}${l.side ? ' · ' : ''}${shortDate(l.time)}</small></div>
    </article>
    <div class="paper-nav">
      <button class="btn small p-prev" ${i <= 0 ? 'disabled' : ''}>‹ 이전</button>
      <span class="muted">${i + 1} / ${list.length}</span>
      <button class="btn small p-next" ${i >= list.length - 1 ? 'disabled' : ''}>다음 ›</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">✉️ 편지함으로</button>`;
  const mount = root => {
    const go = d => { if (list[i + d]) { buzz(6); showLetter(list, i + d, onBack); } };
    root.querySelector('.p-prev').onclick = () => go(-1);
    root.querySelector('.p-next').onclick = () => go(1);
    root.querySelector('.p-back').onclick = onBack;
    // 편지지를 옆으로 밀어서 다음 편지
    const paper = root.querySelector('.paper');
    let sx = 0, sy = 0;
    paper.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
    paper.addEventListener('pointerup', e => {
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    });
  };
  return { html, mount };
}
export function showLetter(list, i, onBack = closeModal) { openView('💌 편지', letterView(list, i, onBack)); }

/* ---------- ☰ 바로가기 메뉴 ---------- */
export function menuView(items) {
  const html = `
    <p class="muted">원하는 곳을 누르면 바로 볼 수 있어요</p>
    <div class="menu-grid">
      ${items.map((it, i) => `<button class="menu-item" data-i="${i}"><span class="e">${it.emoji}</span>${esc(it.label)}</button>`).join('')}
    </div>`;
  const mount = root => { root.querySelectorAll('.menu-item').forEach(b => b.onclick = () => { buzz(8); items[+b.dataset.i].go(); }); };
  return { html, mount };
}
export function showMenu(items) { openView('바로가기', menuView(items)); }

/* ---------- 📚 앨범 (2D 그리드) ---------- */
export function albumView(themes, only = -1) {
  const list = only >= 0 ? [themes[only]] : themes;
  const html = list.map(t => `
    <div class="album-theme">
      <h3>${t.emoji} ${esc(t.title)} <span class="muted" style="font-size:13px">${t.photos.length}장</span></h3>
      <div class="muted" style="font-size:13px">${esc(t.subtitle || '')}</div>
      <div class="album-grid">
        ${t.photos.map((p, i) => `<button type="button" data-t="${themes.indexOf(t)}" data-i="${i}" aria-label="${esc(p.caption || t.title + ' ' + (i + 1))}"><img loading="lazy" src="${esc(photoURL(p, 'thumb'))}" alt="" /></button>`).join('')}
      </div>
    </div>`).join('');
  const mount = root => {
    root.querySelectorAll('.album-grid img').forEach(img => {
      img.onerror = () => {
        const b = img.parentElement;
        const t = themes[+b.dataset.t];
        img.onerror = null;
        img.src = placeholderCanvas(t, +b.dataset.i, t.photos[+b.dataset.i].src, 300, 300).toDataURL();
      };
    });
    root.querySelectorAll('.album-grid button').forEach(b => b.onclick = () => openLightbox(themes, +b.dataset.t, +b.dataset.i));
  };
  return { html, mount };
}
export function showAlbum(themes, only = -1) { openView(only >= 0 ? `${themes[only].title} 앨범` : '전체 앨범', albumView(themes, only)); }

/* ---------- 🔍 사진 크게 보기 ----------
   두 번 탭 / 두 손가락으로 확대, 옆으로 밀어 넘기기, 아래로 내려 닫기 */
let lb = { themes: null, ti: 0, i: 0 };
const Z = { s: 1, x: 0, y: 0 };
const lbBox = () => $('#lightbox');
const lbImg = () => $('#lightbox img');

function applyZ(anim) {
  const img = lbImg();
  img.style.transition = anim ? 'transform .25s ease' : 'none';
  img.style.transform = `translate(${Z.x}px, ${Z.y}px) scale(${Z.s})`;
}
function resetZ(anim = false) { Z.s = 1; Z.x = Z.y = 0; applyZ(anim); }
function clampZ() {
  const img = lbImg(), box = lbBox();
  const mx = Math.max(0, (img.offsetWidth * Z.s - box.clientWidth) / 2);
  const my = Math.max(0, (img.offsetHeight * Z.s - box.clientHeight) / 2);
  Z.x = Math.max(-mx, Math.min(mx, Z.x));
  Z.y = Math.max(-my, Math.min(my, Z.y));
}

export function openLightbox(themes, ti, i) {
  lb = { themes, ti, i };
  const box = lbBox();
  if (!box.classList.contains('open')) { box.classList.add('open'); pushBack(hideLightbox); }
  renderLB();
}
function hideLightbox() { lbBox().classList.remove('open'); resetZ(); }
function closeLightbox() {
  if (!lbBox().classList.contains('open')) return;
  hideLightbox();
  popBack(hideLightbox);
}
function renderLB() {
  const t = lb.themes[lb.ti], p = t.photos[lb.i];
  const img = lbImg();
  resetZ();
  img.onerror = () => { img.onerror = null; img.src = placeholderCanvas(t, lb.i, p.src, 800, 800).toDataURL(); };
  img.src = photoURL(p);
  img.alt = p.caption || `${t.title} ${lb.i + 1}`;
  $('#lightbox .cap').innerHTML = `${esc(p.caption || `${t.emoji} ${t.title}`)}<small>${lb.i + 1} / ${t.photos.length}</small>`;
}
function stepLB(d) {
  const n = lb.themes[lb.ti].photos.length;
  lb.i = (lb.i + d + n) % n;
  buzz(6);
  renderLB();
}

function bindLightboxGestures() {
  const box = lbBox();
  const pts = new Map();
  let g = null, lastTap = 0;
  // 확대 전 사진 중심 (화면 좌표)
  const center = () => {
    const r = lbImg().getBoundingClientRect();
    return { x: r.left + r.width / 2 - Z.x, y: r.top + r.height / 2 - Z.y };
  };
  box.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    try { box.setPointerCapture(e.pointerId); } catch {}
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 1) {
      g = { type: 'one', sx: e.clientX, sy: e.clientY, ox: Z.x, oy: Z.y, moved: false };
    } else if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      const c = center(), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      g = { type: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s: Z.s, c, px: (mx - c.x - Z.x) / Z.s, py: (my - c.y - Z.y) / Z.s };
    }
  });
  box.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId) || !g) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (g.type === 'pinch' && pts.size >= 2) {
      const [a, b] = [...pts.values()];
      Z.s = Math.max(1, Math.min(4, g.s * Math.hypot(a.x - b.x, a.y - b.y) / g.d));
      Z.x = (a.x + b.x) / 2 - g.c.x - Z.s * g.px;
      Z.y = (a.y + b.y) / 2 - g.c.y - Z.s * g.py;
      applyZ(false);
    } else if (g.type === 'one') {
      const dx = e.clientX - g.sx, dy = e.clientY - g.sy;
      if (Math.hypot(dx, dy) > 8) g.moved = true;
      if (Z.s > 1) { Z.x = g.ox + dx; Z.y = g.oy + dy; applyZ(false); return; }
      const img = lbImg();
      img.style.transition = 'none';
      img.style.transform = Math.abs(dx) > Math.abs(dy)
        ? `translateX(${dx}px)`
        : `translateY(${Math.max(0, dy)}px) scale(${1 - Math.min(0.15, Math.max(0, dy) / 1500)})`;
    }
  });
  const up = e => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    if (!g) return;
    if (g.type === 'pinch') {
      if (pts.size === 1) {
        const [a] = [...pts.values()];
        g = { type: 'one', sx: a.x, sy: a.y, ox: Z.x, oy: Z.y, moved: true };
      } else if (pts.size === 0) {
        g = null;
        if (Z.s < 1.05) resetZ(true); else { clampZ(); applyZ(true); }
      }
      return;
    }
    if (pts.size > 0) return;
    const dx = e.clientX - g.sx, dy = e.clientY - g.sy, moved = g.moved;
    g = null;
    if (e.type === 'pointercancel') { if (Z.s > 1) { clampZ(); applyZ(true); } else resetZ(true); return; }
    if (!moved) {
      // 두 번 탭 → 확대 / 원래대로
      const now = performance.now();
      if (now - lastTap < 320) {
        lastTap = 0;
        if (Z.s > 1) resetZ(true);
        else {
          const c = center();
          Z.s = 2.5; Z.x = -(e.clientX - c.x) * 1.5; Z.y = -(e.clientY - c.y) * 1.5;
          clampZ(); applyZ(true);
        }
      } else lastTap = now;
      return;
    }
    if (Z.s > 1) { clampZ(); applyZ(true); return; }
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) stepLB(dx < 0 ? 1 : -1);
    else if (dy > 110 && dy > Math.abs(dx)) closeLightbox();
    else resetZ(true);
  };
  box.addEventListener('pointerup', up);
  box.addEventListener('pointercancel', up);
}

/* ---------- 팝업 윗부분을 아래로 끌어서 닫기 ---------- */
function bindSheetDrag() {
  const sheet = $('#modal .sheet'), top = $('#modal .sheet-top');
  let d = null;
  top.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    d = { id: e.pointerId, y: e.clientY, t: performance.now() };
    try { top.setPointerCapture(e.pointerId); } catch {}
    sheet.style.transition = 'none';
  });
  top.addEventListener('pointermove', e => {
    if (!d || e.pointerId !== d.id) return;
    sheet.style.transform = `translateY(${Math.max(0, e.clientY - d.y)}px)`;
  });
  const end = e => {
    if (!d || e.pointerId !== d.id) return;
    const dy = e.clientY - d.y, fast = dy > 40 && performance.now() - d.t < 250;
    d = null;
    sheet.style.transition = '';
    if (e.type === 'pointerup' && (dy > 100 || fast)) closeModal();
    else sheet.style.transform = '';
  };
  top.addEventListener('pointerup', end);
  top.addEventListener('pointercancel', end);
}

/* 가+ : 글자 크게 (팝업·글로 보기 공통, 기억해 둠) */
const FS_KEY = 'wedding-bigfont';
export const isBigFont = () => document.documentElement.classList.contains('big');
export function setBigFont(on) {
  document.documentElement.classList.toggle('big', on);
  try { localStorage.setItem(FS_KEY, on ? '1' : '0'); } catch {}
  document.querySelectorAll('.fs-toggle').forEach(b => { b.textContent = on ? '가-' : '가+'; b.setAttribute('aria-label', on ? '글자 작게' : '글자 크게'); });
}

export function initUI() {
  try { if (localStorage.getItem(FS_KEY) === '1') setBigFont(true); } catch {}
  document.addEventListener('click', e => { if (e.target.closest('.fs-toggle')) { buzz(6); setBigFont(!isBigFont()); } });
  $('#modal-close').onclick = closeModal;
  $('#modal .backdrop').onclick = closeModal;
  const box = lbBox();
  box.querySelector('.lb-close').onclick = closeLightbox;
  box.querySelector('.prev').onclick = () => stepLB(-1);
  box.querySelector('.next').onclick = () => stepLB(1);
  bindLightboxGestures();
  bindSheetDrag();
  // PC 키보드
  addEventListener('keydown', e => {
    if (box.classList.contains('open')) {
      if (e.key === 'ArrowRight') stepLB(1);
      if (e.key === 'ArrowLeft') stepLB(-1);
      if (e.key === 'Escape') closeLightbox();
    } else if (e.key === 'Escape') closeModal();
  });
}

export { esc, dday };
