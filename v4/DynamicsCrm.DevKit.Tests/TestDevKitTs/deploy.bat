@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM Copy built JS files to WebResource folder
REM ============================================================
REM Usage: Simply edit the ENTITIES variable below to add more entities
REM Example: set ENTITIES=Account,Contact,Lead
REM ============================================================

REM === SETUP: Add entity names here (comma-separated, no spaces) ===
set ENTITIES=Account

REM === PATHS (hardcoded for testing) ===
set SOURCE_DIR=%~dp0build
set DEST_DIR=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\entitiests

echo ============================================================
echo  Copy Build Files to WebResource
echo ============================================================
echo.
echo Source: %SOURCE_DIR%
echo Dest:   %DEST_DIR%
echo Entities: %ENTITIES%
echo.

REM === Create destination folder if not exists ===
if not exist "%DEST_DIR%" (
    echo Creating destination folder...
    mkdir "%DEST_DIR%"
)

REM === Loop through entities and copy ===
set COUNT=0
for %%E in (%ENTITIES%) do (
    set ENTITY=%%E
    set SOURCE_FILE=%SOURCE_DIR%\!ENTITY!.js
    set DEST_FILE=%DEST_DIR%\!ENTITY!.js
    
    if exist "!SOURCE_FILE!" (
        echo Copying: !ENTITY!.js
        copy /Y "!SOURCE_FILE!" "!DEST_FILE!" >nul
        if !errorlevel! equ 0 (
            echo   ✓ !ENTITY!.js copied successfully
            set /a COUNT+=1
        ) else (
            echo   ✗ Failed to copy !ENTITY!.js
        )
    ) else (
        echo   ⚠ !ENTITY!.js not found in build folder
    )
)

echo.
echo ============================================================
echo  Done! Copied !COUNT! file(s)
echo ============================================================

endlocal
