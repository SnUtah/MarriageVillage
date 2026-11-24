/* =========================================================
   Language helpers (Korean / English)
   The language is picked by the inline script in index.html (window.VILLAGE_LANG):
   ?lang=ko|en in the address → saved choice → device language
   (Korean device → Korean, otherwise English).
   ========================================================= */
const KEY = 'wedding-lang';

/* Same order as the inline script; used only if index.html did not set it */
function detect() {
  let q = null, s = null;
  try { q = (location.search.match(/[?&]lang=(ko|en)\b/) || [])[1] || null; } catch {}
  if (q) return q;
  try { s = localStorage.getItem(KEY); } catch {}
  if (s === 'ko' || s === 'en') return s;
  const d = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  return d.indexOf('ko') === 0 ? 'ko' : 'en';
}

export const LANG = window.VILLAGE_LANG === 'ko' || window.VILLAGE_LANG === 'en' ? window.VILLAGE_LANG : detect();
export const isKo = LANG === 'ko';

/** L('한국어', 'English') → the string for the current language */
export const L = (ko, en) => (isKo ? ko : en);

/** Switch language: remember it, drop ?lang from the address, reload.
    (If the browser cannot save it, keep it in the address instead.) */
export function setLang(lang) {
  let saved = false;
  try { localStorage.setItem(KEY, lang); saved = localStorage.getItem(KEY) === lang; } catch {}
  const u = new URL(location.href);
  if (saved) u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
  // Same address (e.g. only a #hash) would not reload, so reload explicitly
  if (u.href === location.href) location.reload(); else location.replace(u.href);
}

/* ---------- English config ----------
   window.WEDDING_EN (config.js) holds the English text in the same shape as window.WEDDING.
   It is merged into window.WEDDING once, in place:
   - objects merge key by key
   - an array of objects merges element by element into the Korean elements that exist
     (an English element may carry only the text fields; extra English elements are ignored)
   - an array of strings / a string / a number replaces the Korean one
   Anything left out keeps the Korean content. */
const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
// English-only display fields that may be added even though the Korean side has no such key
const EN_ONLY = new Set(['banner']);
function mergeConfig(base, en) {
  if (!isObj(base) || !isObj(en)) return;
  for (const k of Object.keys(en)) {
    const e = en[k], b = base[k];
    if (e === undefined || e === null) continue;
    // never add what the Korean side does not have (e.g. emptied sample answers)
    if (b === undefined && !EN_ONLY.has(k)) continue;
    if (Array.isArray(e)) {
      if (!Array.isArray(b)) continue;
      if (e.some(isObj)) {
        // never add elements: only fill in the Korean ones that exist
        e.forEach((x, i) => { if (isObj(x) && isObj(b[i])) mergeConfig(b[i], x); });
      } else if (b.length) base[k] = e.slice(); // an emptied Korean list stays empty
    } else if (isObj(e)) {
      if (isObj(b)) mergeConfig(b, e);
    } else if (b !== '') base[k] = e; // an emptied Korean text stays empty
  }
}
/* If the Korean names were changed but the English block still describes the sample couple
   (or has no names), the English block is out of date: keep the Korean content and only switch the interface. */
const W = window.WEDDING, E = window.WEDDING_EN;
const koChanged = !!W && (W.groom?.name !== '김신랑' || W.bride?.name !== '김신부');
const enSample = !E?.groom?.name || !E?.bride?.name || E.groom.name === 'Groom Kim' || E.bride.name === 'Bride Kim';
if (!isKo && W && E && !(koChanged && enSample)) mergeConfig(W, E);
