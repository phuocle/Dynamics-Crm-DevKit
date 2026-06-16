@echo off
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
    exit /b 1
)

devkit generator --auth ClientSecret --url "https://dynamics-crm-devkit-v4.crm.dynamics.com" --clientid "1a60a5c2-d04c-4b26-8f86-9d6ce0616799" --clientsecret "4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ" --json "DynamicsCrm.DevKit.Cli.json" --profile "JS-WEBAPI"