---
name: devkit-skill-client-code
description: Run the TestClientCode pipeline for DynamicsCrm.DevKit — clean, install dependencies, generate entity code via the CLI, sync JS/TS sources, and build/test all six test projects. Use when the user mentions TestClientCode, client-code work, DevKitJs/DevKitTs test projects, or any stage of the client-code pipeline (clean/install/generate/sync/test).
---

# DevKit Skill Client Code

The TestClientCode pipeline has five stages. Each stage is a script inside
`DynamicsCrm.DevKit.Tests/TestClientCode/`. Run a stage only when it is
actually needed — generate/sync/test are the common trio; clean/install only
on explicit request or when dependencies are missing.

## Stage 1 — Clean (explicit request only)

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\01.Clean-All.ps1" } finally { Pop-Location }
```

Removes generated build output, dependencies, coverage, and lock files from
all six TestClientCode projects.

## Stage 2 — Install dependencies

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\02.Install-All.ps1" } finally { Pop-Location }
```

Wait for all six TestClientCode projects to finish dependency installation.

## Stage 3 — Generate

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\03.Generate-All.ps1" } finally { Pop-Location }
```

Generate form and Web API entity files through the CLI. Do not manually edit
generated entity files.

## Stage 4 — Sync

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\04.Sync-All.ps1" } finally { Pop-Location }
```

Copies the JS/TS sources of truth and generated entity files into the six
test projects.

## Stage 5 — Test

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\05.Check-Build-Test.ps1" } finally { Pop-Location }
```

Wait for all checks, release builds, and unit tests to complete. Report the
failing project and command if the pipeline stops.

## Rules for client-code changes

Before changing JS/TS client runtime behavior or definitions, read
`references/client-code-rules.md` — it defines the five source-of-truth
files, the generated-file policy, the six-project groups, and the sync map.
