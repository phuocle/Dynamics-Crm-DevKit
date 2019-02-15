@echo off
nuget pack PL.DynamicsCrm.DevKit.Cli.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Cli.1.2.1.nupkg ..\..\Published\1.2.1\PL.DynamicsCrm.DevKit.Cli.1.2.1.nupkg /y
exit