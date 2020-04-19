@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://crm995420.crm5.dynamics.com/;Username=admin@CRM995420.onmicrosoft.com;Password=IV5s35yq0gizf2Sh0ld59g==;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"JS-WEBAPI"
exit