@echo off
echo ========================================
echo Deploy DevKit JavaScript to TestWebResource
echo ========================================
echo.

echo [1/3] Running unit tests...
echo.
call npm run coverage
if errorlevel 1 (
    echo.
    echo [ERROR] Tests failed! Deployment aborted.
    pause
    exit /b 1
)

echo.
echo [2/3] Copying files to TestWebResource...
echo.

set SOURCE_DIR=%~dp0
set TARGET_DIR=%~dp0..\TestWebResource\Dev.DevKit.WebResource

:: Copy devkit.js to lib folder
echo Copying devkit.js to lib folder...
xcopy /Y "%SOURCE_DIR%lib\devkit.js" "%TARGET_DIR%\lib\"
if errorlevel 1 (
    echo [ERROR] Failed to copy devkit.js
    pause
    exit /b 1
)

:: Copy devkit.d.ts to entities folder
echo Copying devkit.d.ts to entities folder...
xcopy /Y "%SOURCE_DIR%entities\devkit.d.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy devkit.d.ts
    pause
    exit /b 1
)

:: Copy Account.js to entities folder
echo Copying Account.js to entities folder...
xcopy /Y "%SOURCE_DIR%entities\Account.js" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.js
    pause
    exit /b 1
)

:: Copy Account.d.ts to entities folder
echo Copying Account.d.ts to entities folder...
xcopy /Y "%SOURCE_DIR%entities\Account.d.ts" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.d.ts
    pause
    exit /b 1
)

:: Copy Account.form.js to entities folder
echo Copying Account.form.js to entities folder...
xcopy /Y "%SOURCE_DIR%entities\Account.form.js" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.form.js
    pause
    exit /b 1
)

:: Copy Account.webapi.js to entities folder
echo Copying Account.webapi.js to entities folder...
xcopy /Y "%SOURCE_DIR%entities\Account.webapi.js" "%TARGET_DIR%\entities\"
if errorlevel 1 (
    echo [ERROR] Failed to copy Account.webapi.js
    pause
    exit /b 1
)

echo.
echo [3/3] Deployment completed successfully!
echo.
echo ========================================
echo Summary:
echo   - devkit.js copied to lib/
echo   - devkit.d.ts copied to entities/
echo   - Account.js copied to entities/
echo   - Account.d.ts copied to entities/
echo   - Account.form.js copied to entities/
echo   - Account.webapi.js copied to entities/
echo ========================================
echo.
echo Files are ready in: %TARGET_DIR%
echo.

pause
