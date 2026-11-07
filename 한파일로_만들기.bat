@echo off
chcp 65001 >nul
rem 코드(src)를 묶고, 모든 것을 한 파일(결혼마을.html)로 합칩니다. (Node.js 필요)
cd /d "%~dp0"
echo [1/2] 코드를 js/app.js 로 묶는 중...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 (
  echo 실패했어요. 위 메시지를 확인해 주세요.
  pause
  exit /b 1
)
echo [2/2] 한 파일로 합치는 중...
node tools/single.mjs
if errorlevel 1 (
  pause
  exit /b 1
)
echo 완료! 이 폴더 바로 위에 결혼마을.html 이 생겼어요.
pause
