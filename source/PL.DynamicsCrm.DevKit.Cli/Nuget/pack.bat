@echo off
set /p VERSION=<..\..\version.txt
nuget pack PL.DynamicsCrm.DevKit.Cli.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy PL.DynamicsCrm.DevKit.Cli.%VERSION%.nupkg ..\..\Published\%VERSION%\PL.DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /y