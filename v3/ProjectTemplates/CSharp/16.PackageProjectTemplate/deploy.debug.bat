@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
$if$($IsOOBConnection$==0)set CrmConnection="$CrmConnectionString$"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"servers-package" /profile:"DEBUG"$endif$$if$($IsOOBConnection$==1)"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /sdklogin:"yes" /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"servers-package" /profile:"DEBUG"$endif$