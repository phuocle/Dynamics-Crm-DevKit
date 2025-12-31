@echo off
set /p VERSION=<..\..\version.txt
if exist DynamicsCrm.DevKit.Cli.%VERSION%.nupkg del DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /q
nuget pack DynamicsCrm.DevKit.Cli.nuspec -Tool -Version %VERSION%
ren DynamicsCrm.DevKit.Cli.4.0.0.nupkg DynamicsCrm.DevKit.Cli.%VERSION%.nupkg
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
if exist ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg del ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /q
copy DynamicsCrm.DevKit.Cli.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /y