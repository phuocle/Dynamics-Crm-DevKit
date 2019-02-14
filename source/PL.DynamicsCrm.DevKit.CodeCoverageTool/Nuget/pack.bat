@echo off
nuget pack PL.DynamicsCrm.DevKit.CodeCoverageTool.nuspec -Tool
copy PL.DynamicsCrm.DevKit.CodeCoverageTool.1.2.1.nupkg ..\..\Published\1.2.1\PL.DynamicsCrm.DevKit.CodeCoverageTool.1.2.1.nupkg /y
exit