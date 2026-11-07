@echo off
chcp 65001 >nul
rem 코드 묶기 → 배포 폴더 만들기 → Vercel(weddingvillage) 프로덕션 배포. (Node.js 필요, 처음엔 vercel login)
cd /d "%~dp0"
echo [1/3] 코드를 js/app.js 로 묶는 중...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 ( echo 실패. 위 메시지를 확인하세요. & pause & exit /b 1 )
echo [2/3] 배포 폴더(_deploy) 만드는 중...
node tools/deploy-prep.mjs
if errorlevel 1 ( pause & exit /b 1 )
echo [3/3] Vercel에 올리는 중... (PC 이름이 한글이라 tools/hostfix.cjs 로 우회)
set NODE_OPTIONS=--require %~dp0tools\hostfix.cjs
cd _deploy
call npx --yes vercel@latest deploy --prod --yes
cd ..
echo 완료! https://marriagevillage.vercel.app
pause
