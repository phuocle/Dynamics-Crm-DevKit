# Build VSIX

Use Visual Studio MSBuild, not `dotnet build`:

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Verify `DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix` exists.
