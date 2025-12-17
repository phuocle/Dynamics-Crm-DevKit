@echo off
REM ============================================
REM Build Account.ts in DEBUG mode
REM Double-click to run or use from command line
REM ============================================

cd /d "%~dp0"
echo Building Account.ts (DEBUG mode)...
echo.

call node build-single.js Account debug

echo.
if %ERRORLEVEL% EQU 0 (
    echo BUILD SUCCEEDED
) else (
    echo BUILD FAILED
)
echo.
pause
