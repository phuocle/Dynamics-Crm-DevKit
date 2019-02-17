@echo off
nuget pack PL.DynamicsCrm.DevKit.Cli.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Cli.1.2.2.nupkg ..\..\Published\1.2.2\PL.DynamicsCrm.DevKit.Cli.1.2.2.nupkg /y
exit