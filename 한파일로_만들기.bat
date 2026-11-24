@echo off
chcp 65001 >nul
rem Bundles the code (src) and joins everything into one file, 결혼마을.html. (Needs Node.js)
cd /d "%~dp0"
echo [1/2] Bundling the code into js/app.js...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 (
  echo Something went wrong. Check the message above.
  pause
  exit /b 1
)
echo [2/2] Joining everything into one file...
node tools/single.mjs
if errorlevel 1 (
  pause
  exit /b 1
)
echo Done. 결혼마을.html is now right above this folder.
pause
