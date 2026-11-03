---
name: devkit-skill-build-analyzer
description: Build and verify the DynamicsCrm.DevKit analyzers component (netstandard2.0, DEVKIT1001-1021) — compile, run analyzer unit tests with coverage. Use whenever the user mentions building, testing, verifying or developing the analyzers, DEVKITxxxx diagnostic IDs, or Roslyn analyzer work in this repository.
---

# DevKit Skill Build Analyzer

Build and verify the analyzer component only.

```powershell
dotnet build "DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj" --configuration Debug --no-incremental
& ".\.agents\skills\devkit-skill-shared\scripts\Run-Analyzer-Coverage.ps1"
```

The analyzer targets `netstandard2.0`. Report the build and coverage result.
Visual Studio analyzer integration still requires manual user verification.

For analyzer development rules (structure, files to read before changing an
analyzer, implementation checklist, roadmap updates), read
`references/analyzer-rules.md` before touching analyzer code.
