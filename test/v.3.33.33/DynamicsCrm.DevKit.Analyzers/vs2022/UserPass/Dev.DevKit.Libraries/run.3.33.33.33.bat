copy DynamicsCrm.DevKit.Cli.3.33.33.33.nupkg DynamicsCrm.DevKit.Cli.3.33.33.33.zip
powershell -command "Expand-Archive -Force 'DynamicsCrm.DevKit.Cli.3.33.33.33.zip' '..\packages\DynamicsCrm.DevKit.Cli.3.33.33.33'"
del DynamicsCrm.DevKit.Cli.3.33.33.33.zip
exit