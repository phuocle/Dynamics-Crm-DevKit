@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b 2^>nul') do if not defined DynamicsCrmDevKitCli set DynamicsCrmDevKitCli=%%d
set CrmConnection="$ConnectionString$"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"LATEBOUND"