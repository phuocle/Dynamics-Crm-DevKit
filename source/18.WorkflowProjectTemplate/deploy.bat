@echo off
set MsBuild="C:\Program Files (x86)\MSBuild\14.0\Bin\MSBuild.exe"
call %MsBuild% /nologo /noautorsp /verbosity:minimal /p:Configuration=Debug $ProjectName$.csproj
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\PL.DynamicsCrm.DevKit.Cli.* /b') do (
    set PLDynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="$CrmConnectionString$"
"%PLDynamicsCrmDevKitCli%\tools\PL.DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\PL.DynamicsCrm.DevKit.Cli.json" /type:"workflows" /profile:"DEBUG" /version:"1.0.0.0"
exit