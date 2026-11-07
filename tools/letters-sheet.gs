/* =========================================================
   💌 작은 결혼 마을 — 편지 모으기 (Google Apps Script)

   구글 시트에 붙여서 '웹 앱'으로 배포하면, 사이트의 편지함이 이 시트에 편지를 모읍니다.
   설치 순서는 tools/편지_시트_연결.md 를 보세요. (10분, 무료)

   - GET  ?site=main&action=list           → 그 탭의 편지 목록 (JSON, 최신순 최대 300통)
   - POST {id, name, side, message, time}  → 그 탭에 한 줄 추가 (같은 id는 한 번만 저장)
   - 탭 하나 = 결혼식 하나 (lettersSite). 없으면 자동으로 만들어요.
   - 시트에서 행을 지우면 사이트에서도 사라집니다.
   ========================================================= */
var MAX_NAME = 20, MAX_MSG = 500, MAX_LIST = 300;
var HEADER = ['시간', '이름', '측', '메시지', 'id'];

function tabName_(site) {
  var s = String(site || 'main').replace(/[^\w가-힣-]/g, '').slice(0, 40);
  return s || 'main';
}
function sheetFor_(site, create) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = tabName_(site);
  var sh = ss.getSheetByName(name);
  if (!sh && create) {
    sh = ss.insertSheet(name);
    sh.appendRow(HEADER);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADER.length).setFontWeight('bold');
    sh.setColumnWidth(1, 150);
    sh.setColumnWidth(4, 420);
  }
  return sh;
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function toISO_(v) { return v instanceof Date ? v.toISOString() : String(v || ''); }

/* 편지 목록 */
function doGet(e) {
  var p = (e && e.parameter) || {};
  var sh = sheetFor_(p.site, false);
  if (!sh) return json_({ ok: true, letters: [], count: 0 });
  var n = sh.getLastRow() - 1;
  var rows = n > 0 ? sh.getRange(2, 1, n, 5).getValues() : [];
  var letters = [];
  for (var i = rows.length - 1; i >= 0 && letters.length < MAX_LIST; i--) {
    var r = rows[i];
    if (!r[3]) continue;
    letters.push({ time: toISO_(r[0]), name: String(r[1]), side: String(r[2]), message: String(r[3]), id: String(r[4]) });
  }
  return json_({ ok: true, letters: letters, count: rows.length });
}

/* 편지 한 통 저장 */
function doPost(e) {
  var b = {};
  try { b = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return json_({ ok: false, error: 'bad json' }); }
  var site = (e && e.parameter && e.parameter.site) || b.site;
  var name = String(b.name || '').trim().slice(0, MAX_NAME);
  var message = String(b.message || '').trim().slice(0, MAX_MSG);
  var side = String(b.side || '').slice(0, 10);
  var id = String(b.id || '').replace(/[^\w-]/g, '').slice(0, 64) || Utilities.getUuid();
  if (!name || !message) return json_({ ok: false, error: 'empty' });
  var when = b.time ? new Date(b.time) : new Date();
  if (isNaN(when.getTime())) when = new Date();
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sh = sheetFor_(site, true);
    var n = sh.getLastRow() - 1;
    var ids = n > 0 ? sh.getRange(2, 5, n, 1).getValues().map(function (r) { return String(r[0]); }) : [];
    if (ids.indexOf(id) === -1) sh.appendRow([when, name, side, message, id]);
  } finally { lock.releaseLock(); }
  return json_({ ok: true, id: id });
}
