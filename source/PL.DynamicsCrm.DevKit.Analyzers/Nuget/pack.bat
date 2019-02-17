@echo off
nuget pack PL.DynamicsCrm.DevKit.Analyzers.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Analyzers.1.2.2.nupkg ..\..\Published\1.2.2\PL.DynamicsCrm.DevKit.Analyzers.1.2.2.nupkg /y
exit