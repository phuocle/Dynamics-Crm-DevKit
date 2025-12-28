@echo off
echo ========================================
echo Deploy DevKit TypeScript to TestWebResourceTs
echo ========================================
echo.

echo [1/4] Running unit tests (DevKit + Account)...
echo.
call npm run devkit-test
if errorlevel 1 (
    echo.
    echo [ERROR] Tests failed! Deployment aborted.
    pause
    exit /b 1
)

echo.
echo [2/4] Building TypeScript files (debug mode)...
echo.
call npm run debug
if errorlevel 1 (
    echo.
    echo [ERROR] Build failed! Deployment aborted.
    pause
    exit /b 1
)

echo.
echo [3/4] Copying files to TestWebResourceTs...
echo.

set SOURCE_DIR=%~dp0
set TARGET_DIR=%~dp0..\TestWebResourceTs\Dev.DevKit.WebResourceTs
set BUILD_TARGET=%~dp0..\TestWebResourceTs\build

:: Copy TypeScript files to entities folder
echo Copying TypeScript source files to entities folder...

xcopy /Y "%SOURCE_DIR%entities\Account.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.ts
    pause
    exit /b 1
)

xcopy /Y "%SOURCE_DIR%entities\Account.form.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.form.ts
    pause
    exit /b 1
)

xcopy /Y "%SOURCE_DIR%entities\Account.webapi.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.webapi.ts
    pause
    exit /b 1
)

xcopy /Y "%SOURCE_DIR%entities\OptionSet.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy OptionSet.ts
    pause
    exit /b 1
)

:: Copy Account.Test*.ts files to entities folder
echo Copying Account.Test*.ts files to entities folder...
xcopy /Y "%SOURCE_DIR%entities\Account.Test*.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.Test*.ts files
    pause
    exit /b 1
)

:: Copy devkit TypeScript files to lib folder
echo Copying devkit TypeScript files to lib folder...

xcopy /Y "%SOURCE_DIR%lib\devkit.ts" "%TARGET_DIR%\lib\"
if errorlevel 1 (
    echo [ERROR] Failed to copy devkit.ts
    pause
    exit /b 1
)

xcopy /Y "%SOURCE_DIR%lib\devkit.d.ts" "%TARGET_DIR%\lib\"
if errorlevel 1 (
    echo [ERROR] Failed to copy devkit.d.ts
    pause
    exit /b 1
)

:: Copy built JavaScript files to build folder
echo Copying built JavaScript files to build folder...

:: Create build directory if it doesn't exist
if not exist "%BUILD_TARGET%" mkdir "%BUILD_TARGET%"

xcopy /Y "%SOURCE_DIR%build\Account.js" "%BUILD_TARGET%\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.js
    pause
    exit /b 1
)

echo.
echo [4/4] Deployment completed successfully!
echo.
echo ========================================
echo Summary - TypeScript Source Files:
echo   - Account.ts copied to entities/
echo   - Account.form.ts copied to entities/
echo   - Account.webapi.ts copied to entities/
echo   - OptionSet.ts copied to entities/
echo   - Account.Test*.ts files copied to entities/
echo   - devkit.ts copied to lib/
echo   - devkit.d.ts copied to lib/
echo.
echo Summary - Built JavaScript Files:
echo   - Account.js copied to build/
echo ========================================
echo.
echo Files are ready in:
echo   TypeScript: %TARGET_DIR%
echo   JavaScript: %BUILD_TARGET%
echo.

pause
