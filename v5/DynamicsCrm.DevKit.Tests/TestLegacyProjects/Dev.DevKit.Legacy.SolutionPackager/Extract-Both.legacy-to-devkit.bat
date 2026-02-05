@echo off
REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo Please run: dotnet tool install -g DynamicsCrm.DevKit.Cli
    exit /b 1
)
@echo off &setlocal enabledelayedexpansion
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto :break1
)
:break1
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\Microsoft.CrmSdk.CoreTools.* /b') do (
    set MicrosoftCrmSdkCoreTools=%%d
    goto :break2
)
:break2
set "str1=%MicrosoftCrmSdkCoreTools%"
set "sstr=Microsoft.CrmSdk.CoreTools"
set /a position=0
set "sst0=!str1:*%sstr%=!"
set "sst1=!str1:%sstr%%sst0%=!"
if "%sst1%" neq "" for /l %%i in (0,1,8189) do if "!sst1:~%%i,1!" neq "" set /a position+=1
set /a "index=%position% + 27"
set version=!MicrosoftCrmSdkCoreTools:~%index%,50!
set ConnectionString="AuthType=ClientSecret;Url=https://dynamics-crm-devkit-v4.crm.dynamics.com;ClientId=1a60a5c2-d04c-4b26-8f86-9d6ce0616799;ClientSecret=4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ;"
devkit /conn:%ConnectionString% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"solutionpackagers" /profile:"Extract-Both" /version:"%version%"
