@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM Deploy Script for TestDevKitJs
REM ============================================================
REM Purpose: Copy Account.js from entities folder to TestWebResource
REM Usage: Double-click to run
REM ============================================================

set SOURCE_DIR=%~dp0entities
set DEST_DIR=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\entities

echo ============================================================
echo  Deploy Script - TestDevKitJs
echo ============================================================
echo.

REM Check if destination folder exists
if not exist "%DEST_DIR%" (
    echo   Creating folder: %DEST_DIR%
    mkdir "%DEST_DIR%"
)

REM Copy Account.js
echo [STEP 1] Copying Account.js...
echo   Source: %SOURCE_DIR%\Account.js
echo   Dest:   %DEST_DIR%\Account.js
echo.

if exist "%SOURCE_DIR%\Account.js" (
    copy /Y "%SOURCE_DIR%\Account.js" "%DEST_DIR%\Account.js" >nul
    if !errorlevel! equ 0 (
        echo   ✓ Account.js copied successfully!
    ) else (
        echo   ✗ Failed to copy Account.js
    )
) else (
    echo   ⚠ Account.js not found in entities folder
)

REM Copy devkit.js to lib folder
echo.
echo [STEP 2] Copying devkit.js...
set DEVKIT_SOURCE=%~dp0lib\devkit.js
set DEVKIT_DEST=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\lib\devkit.js

if exist "%DEVKIT_SOURCE%" (
    copy /Y "%DEVKIT_SOURCE%" "%DEVKIT_DEST%" >nul
    if !errorlevel! equ 0 (
        echo   ✓ devkit.js copied successfully!
    ) else (
        echo   ✗ Failed to copy devkit.js
    )
) else (
    echo   ⚠ devkit.js not found in lib folder
)

echo.
echo ============================================================
echo  Deploy completed! Refresh CRM form to test.
echo ============================================================
echo.
pause
