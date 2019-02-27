@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\PL.DynamicsCrm.DevKit.Cli.* /b') do (
    set PLDynamicsCrmDevKitCli=%%d
    goto break
)
:break
set CrmConnection="AuthType=AD;Url=http://crm2013.southeastasia.cloudapp.azure.com/G16;Domain=crm;Username=crmadmin;Password=67ubH5C8nrSvsmDAv/Zixw==;"
"%PLDynamicsCrmDevKitCli%\tools\PL.DynamicsCrm.DevKit.Cli.exe" /conn:%CrmConnection% /json:"..\PL.DynamicsCrm.DevKit.Cli.json" /type:"solutionpackagers" /profile:"Pack-Unmanaged" /version:"7.1.1"
exit