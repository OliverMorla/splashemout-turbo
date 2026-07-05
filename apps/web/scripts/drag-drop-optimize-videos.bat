@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "TARGET=%~1"

if "%TARGET%"=="" (
  echo Drag and drop a folder onto this file to optimize videos recursively.
  echo.
  echo Example:
  echo   drag a folder like public\media\video onto drag-drop-optimize-videos.bat
  pause
  exit /b 1
)

if exist "%TARGET%\*" (
  set "ROOT=%TARGET%"
) else (
  for %%I in ("%TARGET%") do set "ROOT=%%~dpI"
)

echo Optimizing videos under:
echo   %ROOT%
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%optimize-public-videos.ps1" -Root "%ROOT%" -Crf 23 -Preset slow

if errorlevel 1 (
  echo.
  echo Video optimization failed.
  pause
  exit /b 1
)

echo.
echo Video optimization finished successfully.
pause
