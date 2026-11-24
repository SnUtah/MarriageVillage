/* =========================================================
   📦 Make a single file
   Joins index.html + css/style.css + config.js + js/app.js into one HTML file.
   Use it when you need "just one file", e.g. for a contest entry or sending by KakaoTalk.
   (Build js/app.js first with src/빌드.bat)

   Usage:   node tools/single.mjs [output file path]
   Default output: ../결혼마을.html (right above the project folder)
   ========================================================= */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] || resolve(root, '..', '결혼마을.html'));
const read = f => readFileSync(resolve(root, f), 'utf8');

for (const f of ['index.html', 'css/style.css', 'config.js', 'js/app.js']) {
  if (!existsSync(resolve(root, f))) { console.error(`❌ ${f} is missing. ${f === 'js/app.js' ? 'Run src/빌드.bat first.' : ''}`); process.exit(1); }
}

// A "</script>" inside an inline script would cut the HTML short, so make it safe
const safeJS = s => s.replace(/<\/script/gi, '<\\/script');

let html = read('index.html');
const css = read('css/style.css');
const config = read('config.js');
const app = read('js/app.js');

html = html
  .replace(/<link rel="stylesheet" href="css\/style.css" \/>/, () => `<style>\n${css}\n</style>`)
  .replace(/<script src="config.js"><\/script>/, () => `<script>\n${safeJS(config)}\n</script>`)
  .replace(/<!--[^>]*?the source is in the src folder[^>]*?-->\s*/, '')
  .replace(/<script src="js\/app.js"><\/script>/, () => `<script>\n/* includes three.js r160 (MIT, https://threejs.org) · the source code is in the src folder */\n${safeJS(app)}\n</script>`)
  .replace(/<head>/, `<head>\n<!-- Single-file version for a contest entry (design, settings, program and illustration photos included). To change the content, edit the window.WEDDING (Korean) and window.WEDDING_EN (English) settings below. -->`);

for (const must of ['<style>', 'window.WEDDING', 'three.js r160']) {
  if (!html.includes(must)) { console.error(`❌ Joining failed: ${must} not found`); process.exit(1); }
}
writeFileSync(out, html);
console.log(`✅ ${out} (${(html.length / 1024).toFixed(0)} KB)`);
