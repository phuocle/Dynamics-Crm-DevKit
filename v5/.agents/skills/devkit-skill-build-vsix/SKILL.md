---
name: devkit-skill-build-vsix
description: Build the VSIX (Visual Studio 2026 extension, net48) with Visual Studio MSBuild — never dotnet build. Use whenever the user asks to build the VSIX, rebuild the extension, or verify wizard template changes produce a buildable vsix.
---

# DevKit Skill Build VSIX

Use Visual Studio MSBuild, not `dotnet build`:

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Vsix\DynamicsCrm.DevKit.Vsix.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Pick the MSBuild edition actually installed on this machine (`18\Enterprise`
on the current one) — check the folder if the path does not exist. Verify
`DynamicsCrm.DevKit.Vsix\bin\Debug\DynamicsCrm.DevKit.vsix` exists.
