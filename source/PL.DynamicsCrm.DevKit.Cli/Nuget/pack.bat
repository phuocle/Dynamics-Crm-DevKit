@echo off
nuget pack PL.DynamicsCrm.DevKit.Cli.nuspec -Tool
copy PL.DynamicsCrm.DevKit.Cli.1.2.0.nupkg ..\..\Published\1.2.0\PL.DynamicsCrm.DevKit.Cli.1.2.0.nupkg /y

exit