@echo off
chcp 65001 >nul
rem Bundle the code → make the deploy folder → deploy to Vercel production. (Needs Node.js; run vercel login the first time. To use your own address, put it in the SITE_URL environment variable.)
cd /d "%~dp0"
echo [1/3] Bundling the code into js/app.js...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 ( echo Failed. Check the message above. & pause & exit /b 1 )
echo [2/3] Making the deploy folder (_deploy)...
node tools/deploy-prep.mjs
if errorlevel 1 ( pause & exit /b 1 )
echo [3/3] Uploading to Vercel... (tools/hostfix.cjs works around a PC name in Korean)
set NODE_OPTIONS=--require %~dp0tools\hostfix.cjs
cd _deploy
call npx --yes vercel@latest deploy --prod --yes
cd ..
echo Done. https://marriagevillage.vercel.app
pause
