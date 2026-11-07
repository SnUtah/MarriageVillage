/* 배포 폴더(_deploy) 만들기: 정적 파일만 복사하고 og 태그를 넣습니다. 배포.bat이 호출해요. */
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, '_deploy');
const URL = process.env.SITE_URL || 'https://marriagevillage.vercel.app';
rmSync(out, { recursive: true, force: true });
mkdirSync(resolve(out, 'css'), { recursive: true }); mkdirSync(resolve(out, 'js'));
for (const f of ['config.js', 'css/style.css', 'js/app.js', 'og.jpg']) cpSync(resolve(root, f), resolve(out, f));
if (existsSync(resolve(root, 'photos'))) cpSync(resolve(root, 'photos'), resolve(out, 'photos'), { recursive: true });
if (existsSync(resolve(root, 'music'))) cpSync(resolve(root, 'music'), resolve(out, 'music'), { recursive: true });
if (existsSync(resolve(root, '.vercel'))) cpSync(resolve(root, '.vercel'), resolve(out, '.vercel'), { recursive: true });
let html = readFileSync(resolve(root, 'index.html'), 'utf8');
html = html.replace(/<!-- 인터넷에 올린 뒤[\s\S]*?-->/, `<meta property="og:url" content="${URL}/" />\n<meta property="og:image" content="${URL}/og.jpg" />\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n<meta name="twitter:card" content="summary_large_image" />`);
html = html.replace(/\s*<hr \/>\s*<a href="\.\.\/축하홈페이지\.html"[^>]*>[^<]*<\/a>/, '');
writeFileSync(resolve(out, 'index.html'), html);
writeFileSync(resolve(out, 'vercel.json'), '{\n  "cleanUrls": true,\n  "headers": [{ "source": "/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }] }]\n}\n');
console.log('✅ _deploy 준비 완료 →', out);
