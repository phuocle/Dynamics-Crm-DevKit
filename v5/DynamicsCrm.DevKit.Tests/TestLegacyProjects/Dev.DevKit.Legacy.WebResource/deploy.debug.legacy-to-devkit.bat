@echo off
REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo Please run: dotnet tool install -g DynamicsCrm.DevKit.Cli
    exit /b 1
)
@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do if not defined DynamicsCrmDevKitCli set DynamicsCrmDevKitCli=%%d
set ConnectionString="AuthType=ClientSecret;Url=https://dynamics-crm-devkit-v4.crm.dynamics.com;ClientId=1a60a5c2-d04c-4b26-8f86-9d6ce0616799;ClientSecret=4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ;"
devkit /conn:%ConnectionString% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"webresources" /profile:"DEBUG"
