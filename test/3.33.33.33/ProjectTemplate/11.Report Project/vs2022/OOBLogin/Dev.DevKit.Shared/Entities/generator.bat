@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /sdklogin:"yes" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"LATEBOUND"