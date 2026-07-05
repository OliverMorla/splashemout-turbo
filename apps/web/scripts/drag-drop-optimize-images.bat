@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "TARGET=%~1"

if "%TARGET%"=="" (
  set "ROOT=%SCRIPT_DIR%"
) else if exist "%TARGET%\*" (
  set "ROOT=%TARGET%"
) else (
  for %%I in ("%TARGET%") do set "ROOT=%%~dpI"
)

for %%I in ("%ROOT%") do set "ROOT=%%~fI"

echo Optimizing images under:
echo   %ROOT%
echo.

set "TARGET_ROOT=%ROOT%"
powershell -NoProfile -ExecutionPolicy Bypass -Command "& '%SCRIPT_DIR%drag-drop-optimize-images.ps1' -Root $env:TARGET_ROOT -Quality 80 -Recurse"

if errorlevel 1 (
  echo.
  echo Image optimization failed.
  pause
  exit /b 1
)

echo.
echo Image optimization finished successfully.
pause
