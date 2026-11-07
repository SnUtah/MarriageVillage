@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  결혼식 홈페이지 미리보기를 시작합니다. (이 창을 닫으면 종료)
echo.
echo  [PC]  http://localhost:8000
echo.
echo  [휴대폰] 같은 와이파이에 연결한 뒤 아래 주소 중 하나를 입력하세요.
echo         (처음 한 번 Windows 방화벽 창이 뜨면 "허용"을 눌러주세요)
setlocal enabledelayedexpansion
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  set ip=%%a
  echo         http://!ip: =!:8000
)
endlocal
echo.
start "" http://localhost:8000
python -m http.server 8000
