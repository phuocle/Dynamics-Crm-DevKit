@echo off
nuget pack PL.DynamicsCrm.DevKit.Analyzers.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Analyzers.1.2.1.nupkg ..\..\Published\1.2.1\PL.DynamicsCrm.DevKit.Analyzers.1.2.1.nupkg /y
exit