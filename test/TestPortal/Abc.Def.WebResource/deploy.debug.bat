@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\PL.DynamicsCrm.DevKit.Cli.* /b') do (
    set PLDynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://crm294217.crm5.dynamics.com;Username=admin@CRM294217.onmicrosoft.com;Password=rZwesSzW1Pr5LquT+sk1ng==;"
"%PLDynamicsCrmDevKitCli%\tools\PL.DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\PL.DynamicsCrm.DevKit.Cli.json" /type:"webresources" /profile:"DEBUG" /version:"1.0.0.0"
exit