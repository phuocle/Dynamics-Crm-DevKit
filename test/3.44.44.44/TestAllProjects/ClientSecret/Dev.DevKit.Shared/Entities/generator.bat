@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=ClientSecret;Url=https://phuocle-devkit.crm5.dynamics.com/;ClientId=2e89cd77-600f-4a55-9d96-47b6ad00bbb7;ClientSecret=SmR8Q~T-kLyllY6eGwvYPndVgxRiogG3Z1GC.cpd;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"LATEBOUND"