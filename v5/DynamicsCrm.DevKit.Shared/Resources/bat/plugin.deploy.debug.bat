@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do if not defined DynamicsCrmDevKitCli set DynamicsCrmDevKitCli=%%d
set ConnectionString="$ConnectionString$"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%ConnectionString% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"servers" /profile:"DEBUG"