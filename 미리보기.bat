@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  Starting the wedding website preview. (Close this window to stop.)
echo.
echo  [PC]  http://localhost:8000
echo.
echo  [Phone] Connect to the same Wi-Fi, then type one of these addresses.
echo         (If a Windows Firewall window appears the first time, click "Allow".)
setlocal enabledelayedexpansion
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  set ip=%%a
  echo         http://!ip: =!:8000
)
endlocal
echo.
start "" http://localhost:8000
python -m http.server 8000
