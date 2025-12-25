@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=OAuth;Url=https://dynamics-crm-devkit.crm5.dynamics.com;Username=devkit@phuocle.net;Password=4eqm+cFnhfOPY1ZMz+BdnQ==;AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"servers" /profile:"DEBUG"