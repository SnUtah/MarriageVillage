import { L } from './i18n.js';
import * as UI from './ui.js';
import { formatKDate, dday, photoThemes, phase } from './common.js';

/* =========================================================
   📖 Text view
   A screen where the invitation, directions, schedule, album, letters, accounts and quiz
   can be read top to bottom on one page, without walking the 3D village.
   - On phones without 3D this is the default screen
   - It strings together the same content as the popups (ui.js), so the content is always the same
   ========================================================= */
const W = window.WEDDING;
const $ = s => document.querySelector(s);
let cleanups = [], current = null;

export const isReading = () => document.body.classList.contains('reading');

const NAV = [
  ['invitation', L('💌 청첩장', '💌 Invitation')], ['directions', L('🗺️ 오시는 길', '🗺️ Directions')], ['schedule', L('🕰️ 식순', '🕰️ Schedule')], ['album', L('🖼️ 앨범', '🖼️ Album')],
  ['mailbox', L('✉️ 편지', '✉️ Letters')], ['accounts', L('🎁 마음', '🎁 Gifts')], ['quiz', L('❓ 퀴즈', '❓ Quiz')], ['couple', L('📞 연락', '📞 Contact')],
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
  const play = canPlay ? `<button class="btn-primary tv-play">${L('🏡 3D 마을에서 구경하기', '🏡 Explore the 3D village')}</button>` : '';
  tv.innerHTML = `
    <div class="tv-top">
      <button class="tv-back" ${canPlay ? '' : 'hidden'} aria-label="${L('3D 마을로 돌아가기', 'Back to the 3D village')}">${L('🏡 마을로', '🏡 Village')}</button>
      <div class="tv-chips" role="navigation" aria-label="${L('글로 보기 차례', 'Text view sections')}">
        ${NAV.map(([k, l]) => `<button class="chip" data-go="${k}">${l}</button>`).join('')}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${UI.isBigFont() ? L('글자 작게', 'Smaller text') : L('글자 크게', 'Larger text')}">${UI.isBigFont() ? L('가-', 'A-') : L('가+', 'A+')}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">WEDDING INVITATION</div>
        <div class="tv-names">${UI.esc(W.groom.name)} <span class="heart">♥</span> ${UI.esc(W.bride.name)}</div>
        <div class="muted">${L(`${date} ${time}<br>${UI.esc(W.venue.name)} ${UI.esc(W.venue.hall)}`, `${date} · ${time}<br>${UI.esc(W.venue.name)}, ${UI.esc(W.venue.hall)}`)}</div>
        <div class="intro-dday">${phase() === 'today' ? L('오늘이에요 🎉', "It's today 🎉") : dday()}</div>
        ${play}
        <p class="muted tv-hint">${canPlay ? L('게임이 어려우시면 그대로 아래로 내려서 읽어 주세요', 'If the game is hard to use, just scroll down to read') : L('아래로 내리면서 천천히 읽어 주세요', 'Scroll down and take your time reading')}</p>
      </header>
      ${sec('invitation', '💌', L('청첩장', 'Invitation'), views.invitation)}
      ${sec('directions', '🗺️', L('오시는 길', 'Directions'), views.directions)}
      ${sec('schedule', '🕰️', L('오늘의 식순', "Today's schedule"), views.schedule)}
      ${sec('album', '🖼️', W.museum?.title || L('추억 사진관', 'Photo gallery'), views.album, L('사진을 누르면 크게 볼 수 있어요', 'Tap a photo to see it larger'))}
      ${sec('mailbox', '✉️', L('축하 편지함', 'Mailbox'), views.mailbox)}
      ${sec('accounts', '🎁', L('마음 전하실 곳', 'Gift accounts'), views.accounts)}
      ${sec('quiz', '❓', L('신랑신부 퀴즈', 'Couple quiz'), views.quiz, L('기다리시는 동안 가볍게 풀어 보세요', 'Something fun while you wait'))}
      ${sec('couple', '📞', L('신랑 · 신부에게 연락', 'Contact the couple'), views.couple)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">${L('🔗 청첩장 공유하기', '🔗 Share the invitation')}</button>
          ${canPlay ? `<button class="btn pink tv-play">${L('🏡 마을로 들어가기', '🏡 Enter the village')}</button>` : ''}
        </div>
        <p style="margin-top:18px">${UI.esc(W.groom.name)} ♥ ${UI.esc(W.bride.name)} · ${L('작은 결혼 마을', 'A little wedding village')}</p>
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

  // highlight the section being read in the chips at the top
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
