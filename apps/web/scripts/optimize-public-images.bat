@echo off
setlocal

set SCRIPT_DIR=%~dp0
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%optimize-public-images.ps1" %*

if errorlevel 1 (
  echo.
  echo Image optimization failed.
  exit /b 1
)

echo.
echo Image optimization finished successfully.
