@echo off
set /p VERSION=<..\..\version.txt
nuget pack PL.DynamicsCrm.DevKit.Analyzers.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy PL.DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg ..\..\Published\%VERSION%\PL.DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg /y