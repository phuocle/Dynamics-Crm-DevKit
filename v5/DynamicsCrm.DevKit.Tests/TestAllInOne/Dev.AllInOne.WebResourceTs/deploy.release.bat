@echo off
setlocal
chcp 65001 >nul

pushd "%~dp0"
if %ERRORLEVEL% neq 0 (
    exit /b 1
)

where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: Node.js is not installed or not in PATH
    echo ===============================================
    echo.
    echo Please install Node.js first:
    echo.
    echo     https://nodejs.org/
    echo.
    popd
    exit /b 1
)

where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: npm is not installed or not in PATH
    echo ===============================================
    echo.
    popd
    exit /b 1
)

if not exist "node_modules" (
    echo Installing npm packages...
    call npm install
    if %ERRORLEVEL% neq 0 (
        popd
        exit /b %ERRORLEVEL%
    )
)

call npm run release -- %*
if %ERRORLEVEL% neq 0 (
    popd
    exit /b %ERRORLEVEL%
)

REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo ===============================================
    echo.
    echo Please install the CLI tool first:
    echo.
    echo     dotnet tool install -g DynamicsCrm.DevKit.Cli
    echo.
    echo The command above has been COPIED to your clipboard.
    echo Just paste [Ctrl+V] and run it!
    echo.
    echo dotnet tool install -g DynamicsCrm.DevKit.Cli | clip
    pause
    popd
    exit /b 1
)

devkit webresource --json "DynamicsCrm.DevKit.Cli.json" --profile "DEBUGTS"
set EXIT_CODE=%ERRORLEVEL%

popd
exit /b %EXIT_CODE%

