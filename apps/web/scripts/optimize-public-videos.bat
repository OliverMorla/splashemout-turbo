@echo off
setlocal

set SCRIPT_DIR=%~dp0
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%optimize-public-videos.ps1" %*

if errorlevel 1 (
  echo.
  echo Video optimization failed.
  exit /b 1
)

echo.
echo Video optimization finished successfully.
