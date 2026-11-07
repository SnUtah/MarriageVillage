@echo off
chcp 65001 >nul
rem 코드(src 폴더)를 고친 뒤 실행하면 js/app.js 한 파일로 다시 묶어줘요.
rem 내용·사진만 바꿀 때(config.js, photos)는 실행할 필요 없어요.
cd /d "%~dp0.."
echo 코드를 js/app.js 로 묶는 중...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 (
  echo 실패했어요. 위 메시지를 확인해 주세요.
  pause
  exit /b 1
)
echo 완료! index.html 을 새로고침하세요.
pause
