@echo off
set /p VERSION=<..\..\version.txt
nuget pack DynamicsCrm.DevKit.Tool.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy DynamicsCrm.DevKit.Tool.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Tool.%VERSION%.nupkg /y