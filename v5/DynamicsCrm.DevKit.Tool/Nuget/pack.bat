@echo off
set /p VERSION=<..\..\version.txt
if exist DynamicsCrm.DevKit.Tool.%VERSION%.nupkg del DynamicsCrm.DevKit.Tool.%VERSION%.nupkg /q
nuget pack DynamicsCrm.DevKit.Tool.nuspec -Tool -Version %VERSION%
ren DynamicsCrm.DevKit.Tool.4.12.34.56.nupkg DynamicsCrm.DevKit.Tool.%VERSION%.nupkg
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
if exist ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Tool.%VERSION%.nupkg del ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Tool.%VERSION%.nupkg /q
copy DynamicsCrm.DevKit.Tool.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Tool.%VERSION%.nupkg /y