@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\..\packages\DynamicsCrm.DevKit.Cli.* /b 2^>nul') do if not defined DynamicsCrmDevKitCli set DynamicsCrmDevKitCli=%%d
set ConnectionString="AuthType=ClientSecret;Url=https://dynamics-crm-devkit.crm5.dynamics.com;ClientId=1a60a5c2-d04c-4b26-8f86-9d6ce0616799;ClientSecret=4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ;"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%ConnectionString% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"webresources" /profile:"DEBUG"