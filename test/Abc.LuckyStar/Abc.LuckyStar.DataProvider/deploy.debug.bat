@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://orgcaffa69c.crm5.dynamics.com;Username=dev@pldevkit.onmicrosoft.com;Password=b6+abJ1xam0vxgUEg98P7usY3mJ5IMCVuzElnwzAymo=;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"dataproviders" /profile:"DEBUG"
exit