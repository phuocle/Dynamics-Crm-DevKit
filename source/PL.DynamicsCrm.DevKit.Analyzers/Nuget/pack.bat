@echo off
nuget pack PL.DynamicsCrm.DevKit.Analyzers.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Analyzers.1.2.0.nupkg ..\..\Published\1.2.0\PL.DynamicsCrm.DevKit.Analyzers.1.2.0.nupkg /y
exit