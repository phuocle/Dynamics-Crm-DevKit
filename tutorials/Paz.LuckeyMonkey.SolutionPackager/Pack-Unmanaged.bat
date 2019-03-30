@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\PL.DynamicsCrm.DevKit.Cli.* /b') do (
    set PLDynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://crm889331.crm5.dynamics.com;Username=admin@CRM889331.onmicrosoft.com;Password=CBm3sylhBSrGta0fjaLoCA==;"
"%PLDynamicsCrmDevKitCli%\tools\PL.DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\PL.DynamicsCrm.DevKit.Cli.json" /type:"solutionpackagers" /profile:"Pack-Unmanaged" /version:"9.0.2.12"
exit