@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=ClientSecret;Url=https://dynamics-crm-devkit.crm5.dynamics.com;ClientId=1a60a5c2-d04c-4b26-8f86-9d6ce0616799;ClientSecret=~je8Q~4DL221zUgKOaHq-EWMlowkpl3KEbZItccL;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"downloadwebresources" /profile:"DEBUG"