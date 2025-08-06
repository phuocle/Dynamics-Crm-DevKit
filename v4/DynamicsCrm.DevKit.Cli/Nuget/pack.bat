@echo off
set /p VERSION=<..\..\version.txt
nuget pack DynamicsCrm.DevKit.Cli.nuspec -Tool -Version %VERSION%
ren DynamicsCrm.DevKit.Cli.4.0.0.nupkg DynamicsCrm.DevKit.Cli.%VERSION%.nupkg
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy DynamicsCrm.DevKit.Cli.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /y