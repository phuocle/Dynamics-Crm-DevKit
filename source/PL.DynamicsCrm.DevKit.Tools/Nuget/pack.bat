@echo off
nuget pack PL.DynamicsCrm.DevKit.Tools.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Tools.1.2.2.nupkg ..\..\Published\1.2.2\PL.DynamicsCrm.DevKit.Tools.1.2.2.nupkg /y
exit