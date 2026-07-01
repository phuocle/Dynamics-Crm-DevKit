@echo off
set /p VERSION=<..\..\version.txt
if exist DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg del DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg /q
nuget pack DynamicsCrm.DevKit.Analyzers.nuspec -Tool -Version %VERSION%
ren DynamicsCrm.DevKit.Analyzers.4.0.0.nupkg DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
if exist ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg del ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg /q
copy DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Analyzers.%VERSION%.nupkg /y