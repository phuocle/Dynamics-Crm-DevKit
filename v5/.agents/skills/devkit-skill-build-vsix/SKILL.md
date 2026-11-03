---
name: devkit-skill-build-vsix
description: Build the VSIX (Visual Studio 2026 extension, net48) with Visual Studio MSBuild — never dotnet build. Use whenever the user asks to build the VSIX, rebuild the extension, or verify wizard template changes produce a buildable vsix.
---

# DevKit Skill Build VSIX

Use Visual Studio MSBuild, never `dotnet build`.

Dynamically locate MSBuild across any installed Visual Studio edition (Enterprise, Professional, Community, BuildTools) and drive:

```powershell
$vswhere = Join-Path (${env:ProgramFiles(x86)}) "Microsoft Visual Studio\Installer\vswhere.exe"
$msbuild = if (Test-Path $vswhere) {
    & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find "MSBuild\**\Bin\MSBuild.exe" -prerelease | Select-Object -First 1
}
if (-not $msbuild -or -not (Test-Path $msbuild)) {
    $editions = @("Enterprise", "Professional", "Community", "BuildTools")
    $versions = @("18", "2026")
    $drives = @($env:ProgramFiles, "C:\Program Files", "D:\Program Files", "E:\Program Files") | Where-Object { $_ -and (Test-Path $_) } | Select-Object -Unique
    foreach ($drive in $drives) {
        foreach ($ver in $versions) {
            foreach ($ed in $editions) {
                $candidate = Join-Path $drive "Microsoft Visual Studio\$ver\$ed\MSBuild\Current\Bin\MSBuild.exe"
                if (Test-Path $candidate) { $msbuild = $candidate; break }
            }
            if ($msbuild) { break }
        }
        if ($msbuild) { break }
    }
}
if (-not $msbuild) { throw "VS MSBuild not found. Ensure Visual Studio (Enterprise, Professional, or Community) is installed." }

& $msbuild "DynamicsCrm.DevKit.Vsix\DynamicsCrm.DevKit.Vsix.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Verify `DynamicsCrm.DevKit.Vsix\bin\Debug\DynamicsCrm.DevKit.vsix` exists. Never assume a fixed drive letter or Visual Studio edition.
