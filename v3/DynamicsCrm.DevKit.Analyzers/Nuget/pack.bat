@echo off
set /p VERSION=<..\..\version.txt
nuget pack DynamicsCrm.DevKit.Analyzers.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg /y