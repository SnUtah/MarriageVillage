/* =========================================================
   📦 한 파일로 만들기
   index.html + css/style.css + config.js + js/app.js 를 하나의 HTML로 합칩니다.
   공모전 제출·카톡 전송처럼 "파일 하나"가 필요할 때 씁니다.
   (먼저 src/빌드.bat 으로 js/app.js 를 만들어 두세요)

   사용법:  node tools/single.mjs [출력 파일 경로]
   기본 출력: ../결혼마을.html (프로젝트 폴더 바로 위)
   ========================================================= */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] || resolve(root, '..', '결혼마을.html'));
const read = f => readFileSync(resolve(root, f), 'utf8');

for (const f of ['index.html', 'css/style.css', 'config.js', 'js/app.js']) {
  if (!existsSync(resolve(root, f))) { console.error(`❌ ${f} 이(가) 없어요. ${f === 'js/app.js' ? 'src/빌드.bat 을 먼저 실행하세요.' : ''}`); process.exit(1); }
}

// 인라인 스크립트 안에 "</script>"가 있으면 HTML이 끊기므로 안전하게 바꿉니다
const safeJS = s => s.replace(/<\/script/gi, '<\\/script');

let html = read('index.html');
const css = read('css/style.css');
const config = read('config.js');
const app = read('js/app.js');

html = html
  .replace(/<link rel="stylesheet" href="css\/style.css" \/>/, () => `<style>\n${css}\n</style>`)
  .replace(/<script src="config.js"><\/script>/, () => `<script>\n${safeJS(config)}\n</script>`)
  .replace(/<!--[^>]*?원본은 src 폴더[^>]*?-->\s*/, '')
  .replace(/<script src="js\/app.js"><\/script>/, () => `<script>\n/* three.js r160 (MIT, https://threejs.org) 포함 · 원본 코드는 src 폴더 */\n${safeJS(app)}\n</script>`)
  .replace(/<head>/, `<head>\n<!-- 공모전 제출용 한 파일 버전 (디자인·설정·프로그램·일러스트 사진 포함). 내용을 바꾸려면 아래 window.WEDDING 설정을 수정하세요. -->`)
  // 가족 축하 페이지 링크: 한 파일 버전은 같은 폴더에 있으므로 경로를 바꿈
  .replace(/href="\.\.\/축하홈페이지\.html" data-single="([^"]+)"/, 'href="$1"');

for (const must of ['<style>', 'window.WEDDING', 'three.js r160']) {
  if (!html.includes(must)) { console.error(`❌ 합치기 실패: ${must} 없음`); process.exit(1); }
}
writeFileSync(out, html);
console.log(`✅ ${out} (${(html.length / 1024).toFixed(0)} KB)`);
