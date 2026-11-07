import * as UI from './ui.js';
import { formatKDate, dday, photoThemes, phase } from './common.js';

/* =========================================================
   📖 글로 보기
   3D 마을을 걷지 않아도 청첩장·오시는 길·식순·앨범·편지·계좌·퀴즈를
   한 페이지에서 위에서 아래로 읽을 수 있는 화면입니다.
   - 3D가 안 되는 휴대폰에서는 이 화면이 기본이 됩니다
   - 팝업(ui.js)의 내용을 그대로 이어 붙여서 내용이 항상 같습니다
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
let cleanups = [], current = null;

export const isReading = () => document.body.classList.contains('reading');

const NAV = [
  ['invitation', '💌 청첩장'], ['directions', '🗺️ 오시는 길'], ['schedule', '🕰️ 식순'], ['album', '🖼️ 앨범'],
  ['mailbox', '✉️ 편지'], ['accounts', '🎁 마음'], ['quiz', '❓ 퀴즈'], ['couple', '📞 연락'],
];

function sec(id, emoji, title, view, sub = '') {
  return `
    <section class="tv-sec" data-sec="${id}" aria-labelledby="tv-h-${id}">
      <h2 class="tv-h" id="tv-h-${id}"><span aria-hidden="true">${emoji}</span>${title}</h2>
      ${sub ? `<p class="muted tv-sub">${sub}</p>` : ''}
      <div class="tv-body" data-mount="${id}">${view.html}</div>
    </section>`;
}

export function openTextView({ canPlay = false, onPlay, onClose, onSent, section } = {}) {
  if (isReading()) { if (section) scrollTo(section); return; }
  const tv = $('#textview');
  const themes = photoThemes();
  const { date, time } = formatKDate();
  const views = {
    invitation: UI.invitationView({ hero: false }),
    directions: UI.directionsView(),
    schedule: UI.scheduleView(),
    album: UI.albumView(themes),
    mailbox: UI.mailboxView(onSent, { onBack: UI.closeModal }),
    accounts: UI.accountsView(),
    quiz: UI.quizView(),
    couple: UI.coupleView({ greeting: false }),
  };
  const play = canPlay ? `<button class="btn-primary tv-play">🏡 3D 마을에서 구경하기</button>` : '';
  tv.innerHTML = `
    <div class="tv-top">
      <button class="tv-back" ${canPlay ? '' : 'hidden'} aria-label="3D 마을로 돌아가기">🏡 마을로</button>
      <div class="tv-chips" role="navigation" aria-label="글로 보기 차례">
        ${NAV.map(([k, l]) => `<button class="chip" data-go="${k}">${l}</button>`).join('')}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${UI.isBigFont() ? '글자 작게' : '글자 크게'}">${UI.isBigFont() ? '가-' : '가+'}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">WEDDING INVITATION</div>
        <div class="tv-names">${UI.esc(W.groom.name)} <span class="heart">♥</span> ${UI.esc(W.bride.name)}</div>
        <div class="muted">${date} ${time}<br>${UI.esc(W.venue.name)} ${UI.esc(W.venue.hall)}</div>
        <div class="intro-dday">${phase() === 'today' ? '오늘이에요 🎉' : dday()}</div>
        ${play}
        <p class="muted tv-hint">${canPlay ? '게임이 어려우시면 그대로 아래로 내려서 읽어 주세요' : '아래로 내리면서 천천히 읽어 주세요'}</p>
      </header>
      ${sec('invitation', '💌', '청첩장', views.invitation)}
      ${sec('directions', '🗺️', '오시는 길', views.directions)}
      ${sec('schedule', '🕰️', '오늘의 식순', views.schedule)}
      ${sec('album', '🖼️', W.museum?.title || '추억 사진관', views.album, '사진을 누르면 크게 볼 수 있어요')}
      ${sec('mailbox', '✉️', '축하 편지함', views.mailbox)}
      ${sec('accounts', '🎁', '마음 전하실 곳', views.accounts)}
      ${sec('quiz', '❓', '신랑신부 퀴즈', views.quiz, '기다리시는 동안 가볍게 풀어 보세요')}
      ${sec('couple', '📞', '신랑 · 신부에게 연락', views.couple)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">🔗 청첩장 공유하기</button>
          ${canPlay ? '<button class="btn pink tv-play">🏡 마을로 들어가기</button>' : ''}
        </div>
        <p style="margin-top:18px">${UI.esc(W.groom.name)} ♥ ${UI.esc(W.bride.name)} · 작은 결혼 마을</p>
      </footer>
    </div>`;

  cleanups = [];
  Object.entries(views).forEach(([k, v]) => {
    const el = tv.querySelector(`[data-mount="${k}"]`);
    const c = v.mount?.(el);
    if (typeof c === 'function') cleanups.push(c);
  });
  tv.querySelectorAll('[data-go]').forEach(b => b.onclick = () => scrollTo(b.dataset.go));
  tv.querySelectorAll('.tv-back, .tv-play').forEach(b => b.onclick = () => { onPlay?.(); closeTextView(); });
  tv.querySelectorAll('.tv-share').forEach(b => b.onclick = UI.share);

  // 읽고 있는 부분을 위쪽 차례에서 표시
  if ('IntersectionObserver' in window) {
    const chips = [...tv.querySelectorAll('[data-go]')];
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      chips.forEach(c => c.classList.toggle('on', c.dataset.go === e.target.dataset.sec));
      chips.find(c => c.classList.contains('on'))?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }), { root: tv, rootMargin: '-35% 0px -55% 0px' });
    tv.querySelectorAll('.tv-sec').forEach(s => io.observe(s));
    cleanups.push(() => io.disconnect());
  }

  current = { onClose };
  document.body.classList.add('reading');
  tv.scrollTop = 0;
  UI.pushBack(hide);
  if (section) setTimeout(() => scrollTo(section, false), 60);
}

function scrollTo(id, smooth = true) {
  $('#textview').querySelector(`[data-sec="${id}"]`)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

function hide() {
  document.body.classList.remove('reading');
  cleanups.forEach(c => c());
  cleanups = [];
  const c = current; current = null;
  c?.onClose?.();
}
export function closeTextView() {
  if (!isReading()) return;
  hide();
  UI.popBack(hide);
}
