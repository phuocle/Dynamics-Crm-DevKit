@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b') do (
    set DynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=ClientSecret;Url=https://dynamicscrm-devkit-sep-2021.crm.dynamics.com;ClientId=baaf08d8-d8f9-4930-97fa-874ffb09f31c;ClientSecret=wUc7Q~3Pq06KQw42gKcl0y9ClyUaiEp_5Lo12;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"LATEBOUND"