@echo off
copy ..\..\DynamicsCrm.DevKit.Resources\bin\Release\DynamicsCrm.DevKit.Resources.dll ..\Release\DynamicsCrm.DevKit.Resources.dll
set /p VERSION=<..\..\version.txt
nuget pack DynamicsCrm.DevKit.Cli.nuspec -Tool -Version %VERSION%
if not exist ..\..\Published\%VERSION% mkdir ..\..\Published\%VERSION%
copy DynamicsCrm.DevKit.Cli.%VERSION%.nupkg ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.%VERSION%.nupkg /y
copy ..\Release\DynamicsCrm.DevKit.Cli.exe ..\..\Published\%VERSION%\DynamicsCrm.DevKit.Cli.exe /y