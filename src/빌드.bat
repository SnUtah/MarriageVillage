@echo off
chcp 65001 >nul
rem Run this after changing the code (src folder): it bundles it again into one file, js/app.js.
rem No need to run it when you change only the content or photos (config.js, photos).
cd /d "%~dp0.."
echo Bundling the code into js/app.js...
call npx --yes esbuild@0.24.0 src/main.js --bundle --format=iife --minify --target=es2019 --alias:three=./src/vendor/three.module.min.js --outfile=js/app.js --log-level=warning
if errorlevel 1 (
  echo Something went wrong. Check the message above.
  pause
  exit /b 1
)
echo Done. Reload index.html in the browser.
pause
