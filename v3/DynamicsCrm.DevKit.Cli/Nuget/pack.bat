@echo off
set /p VERSION=<..\..\version.txt
nuget pack DynamicsCrm.DevKit.Cli.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy DynamicsCrm.DevKit.Cli.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /y