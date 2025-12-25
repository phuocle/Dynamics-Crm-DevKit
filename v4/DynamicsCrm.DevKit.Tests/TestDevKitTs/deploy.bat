@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM Deploy Script for TestDevKitTs
REM ============================================================
REM Steps:
REM   1. Run npm run check (type check)
REM   2. Run npm run debug (build)
REM   3. Copy Account.js to entitiests folder
REM   4. Copy Account.js to entities folder
REM ============================================================

REM === SETUP ===
set ENTITIES=Account
set SOURCE_DIR=%~dp0build
set DEST_DIR_TS=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\entitiests
set DEST_DIR=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\entities

echo ============================================================
echo  Deploy Script - TestDevKitTs
echo ============================================================
echo.

REM ============================================================
REM STEP 1: npm run check
REM ============================================================
echo [STEP 1] Running npm run check...
echo.
call npm run check
if %errorlevel% neq 0 (
    echo.
    echo ============================================================
    echo  ERROR: TypeScript check failed! Fix errors before deploy.
    echo ============================================================
    goto :end
)
echo.
echo   ✓ npm run check passed
echo.

REM ============================================================
REM STEP 2: npm run debug
REM ============================================================
echo [STEP 2] Running npm run debug...
echo.
call npm run debug
if %errorlevel% neq 0 (
    echo.
    echo ============================================================
    echo  ERROR: Build failed!
    echo ============================================================
    goto :end
)
echo.
echo   ✓ npm run debug completed
echo.

REM ============================================================
REM STEP 3: Copy to entitiests folder
REM ============================================================
echo [STEP 3] Copying to entitiests folder...
echo   Source: %SOURCE_DIR%
echo   Dest:   %DEST_DIR_TS%
echo.

if not exist "%DEST_DIR_TS%" (
    echo   Creating folder: %DEST_DIR_TS%
    mkdir "%DEST_DIR_TS%"
)

set COUNT=0
for %%E in (%ENTITIES%) do (
    set ENTITY=%%E
    set SOURCE_FILE=%SOURCE_DIR%\!ENTITY!.js
    set DEST_FILE=%DEST_DIR_TS%\!ENTITY!.js
    
    if exist "!SOURCE_FILE!" (
        copy /Y "!SOURCE_FILE!" "!DEST_FILE!" >nul
        if !errorlevel! equ 0 (
            echo   ✓ !ENTITY!.js copied to entitiests
            set /a COUNT+=1
        ) else (
            echo   ✗ Failed to copy !ENTITY!.js to entitiests
        )
    ) else (
        echo   ⚠ !ENTITY!.js not found in build folder
    )
)
echo.

REM ============================================================
REM STEP 4: Copy to entities folder
REM ============================================================
echo [STEP 4] Copying to entities folder...
echo   Source: %SOURCE_DIR%
echo   Dest:   %DEST_DIR%
echo.

if not exist "%DEST_DIR%" (
    echo   Creating folder: %DEST_DIR%
    mkdir "%DEST_DIR%"
)

for %%E in (%ENTITIES%) do (
    set ENTITY=%%E
    set SOURCE_FILE=%SOURCE_DIR%\!ENTITY!.js
    set DEST_FILE=%DEST_DIR%\!ENTITY!.js
    
    if exist "!SOURCE_FILE!" (
        copy /Y "!SOURCE_FILE!" "!DEST_FILE!" >nul
        if !errorlevel! equ 0 (
            echo   ✓ !ENTITY!.js copied to entities
            set /a COUNT+=1
        ) else (
            echo   ✗ Failed to copy !ENTITY!.js to entities
        )
    ) else (
        echo   ⚠ !ENTITY!.js not found in build folder
    )
)

echo.
echo ============================================================
echo  Done! Copied !COUNT! file(s)
echo ============================================================

REM ============================================================
REM STEP 5: Copy devkit.js to lib folder (if modified)
REM ============================================================
echo.
echo [STEP 5] Copying devkit.js to lib folder...
set DEVKIT_SOURCE=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestDevKitJs\lib\devkit.js
set DEVKIT_DEST=D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\lib\devkit.js

if exist "%DEVKIT_SOURCE%" (
    copy /Y "%DEVKIT_SOURCE%" "%DEVKIT_DEST%" >nul
    if !errorlevel! equ 0 (
        echo   ✓ devkit.js copied to lib folder
    ) else (
        echo   ✗ Failed to copy devkit.js
    )
) else (
    echo   ⚠ devkit.js not found at source
)
echo.

:end
endlocal
