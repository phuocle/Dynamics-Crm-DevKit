@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\PL.DynamicsCrm.DevKit.Cli.* /b') do (
    set PLDynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=Office365;Url=https://test-level2.crm.dynamics.com;Username=admin@crm091817.onmicrosoft.com;Password=XVYcZiFupBAhk4bbedwoiA==;"
"%PLDynamicsCrmDevKitCli%\tools\PL.DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\PL.DynamicsCrm.DevKit.Cli.json" /type:"webresources" /profile:"DEBUG" /version:"1.0.0.0"
exit