@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://orgcaffa69c.crm5.dynamics.com;Username=dev@pldevkit.onmicrosoft.com;Password=lXxH8LKZVyltmKMdhymaWcu5ooBpRRdWeJEScXnSFmM=;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"JS-WEBAPI"
exit