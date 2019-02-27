@echo off
set /p VERSION=<..\..\version.txt
nuget pack PL.DynamicsCrm.DevKit.Tools.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy PL.DynamicsCrm.DevKit.Tools.%VERSION%.nupkg ..\..\Published\%VERSION%\PL.DynamicsCrm.DevKit.Tools.%VERSION%.nupkg /y