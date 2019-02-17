@echo off
nuget pack PL.DynamicsCrm.DevKit.CodeCoverageTool.nuspec -Tool
copy PL.DynamicsCrm.DevKit.CodeCoverageTool.1.2.2.nupkg ..\..\Published\1.2.2\PL.DynamicsCrm.DevKit.CodeCoverageTool.1.2.2.nupkg /y
exit